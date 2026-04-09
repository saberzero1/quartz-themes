import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "_baseline",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 258 !important;
  --accent-l: 66% !important;
  --accent-s: 88% !important;
  --anim-duration-fast: 140ms !important;
  --anim-duration-moderate: 300ms !important;
  --anim-duration-none: 0 !important;
  --anim-duration-slow: 560ms !important;
  --anim-duration-superfast: 70ms !important;
  --anim-motion-delay: cubic-bezier(0.65, 0.05, 0.36, 1) !important;
  --anim-motion-jumpy: cubic-bezier(0.68, -0.55, 0.27, 1.55) !important;
  --anim-motion-smooth: cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --anim-motion-swing: cubic-bezier(0, 0.55, 0.45, 1) !important;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-border: #363636 !important;
  --background-modifier-border-focus: #555555 !important;
  --background-modifier-border-hover: #3f3f3f !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(10, 10, 10, 0.4) !important;
  --background-modifier-error: #fb464c !important;
  --background-modifier-error-hover: #fb464c !important;
  --background-modifier-error-rgb: 251, 70, 76 !important;
  --background-modifier-form-field: #2a2a2a !important;
  --background-modifier-form-field-hover: #2a2a2a !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.067) !important;
  --background-modifier-message: rgba(0, 0, 0, 0.9) !important;
  --background-modifier-success: #44cf6e !important;
  --background-modifier-success-rgb: 68, 207, 110 !important;
  --background-primary: #1e1e1e !important;
  --background-primary-alt: #242424 !important;
  --background-secondary: #262626 !important;
  --background-secondary-alt: #363636 !important;
  --bases-cards-background: #1e1e1e !important;
  --bases-cards-border-width: 1px !important;
  --bases-cards-container-background: transparent !important;
  --bases-cards-corner-shape: round !important;
  --bases-cards-cover-background: #242424 !important;
  --bases-cards-font-size: 0.875em !important;
  --bases-cards-line-height: 24px !important;
  --bases-cards-radius: 8px !important;
  --bases-cards-scale: 1 !important;
  --bases-cards-shadow: 0 0 0 1px #363636 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3f3f3f !important;
  --bases-embed-border-color: #363636 !important;
  --bases-embed-border-radius: 4px !important;
  --bases-embed-border-width: 0px !important;
  --bases-filter-menu-width: 520px !important;
  --bases-group-heading-property-color: #b3b3b3 !important;
  --bases-group-heading-property-display: block !important;
  --bases-group-heading-property-size: 12px !important;
  --bases-group-heading-property-weight: 400 !important;
  --bases-group-heading-value-size: 0.875em !important;
  --bases-group-heading-value-weight: 600 !important;
  --bases-header-border-width: 0 0 1px 0 !important;
  --bases-header-height: 40px !important;
  --bases-header-padding-end: 2px !important;
  --bases-header-padding-start: 2px !important;
  --bases-table-border-color: #363636 !important;
  --bases-table-cell-background-active: #1e1e1e !important;
  --bases-table-cell-background-disabled: #242424 !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-radius-active: 2px !important;
  --bases-table-cell-radius-focus: 2px !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #555555 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-column-border-width: 1px !important;
  --bases-table-column-max-width: 300 !important;
  --bases-table-column-min-width: 40 !important;
  --bases-table-container-border-radius: 4px !important;
  --bases-table-container-border-width: 1px !important;
  --bases-table-font-size: 0.875em !important;
  --bases-table-group-background: #242424 !important;
  --bases-table-group-gap: 10px !important;
  --bases-table-header-background: #1e1e1e !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.067) !important;
  --bases-table-header-color: #b3b3b3 !important;
  --bases-table-header-icon-display: flex !important;
  --bases-table-header-sort-mask: linear-gradient(to left, transparent 24px, black 24px) !important;
  --bases-table-header-weight: 400 !important;
  --bases-table-row-background-hover: transparent !important;
  --bases-table-row-border-width: 1px !important;
  --bases-table-row-height: 30px !important;
  --bases-table-summary-background: #1e1e1e !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.067) !important;
  --bases-toolbar-badge-display: none !important;
  --bases-toolbar-label-display: block !important;
  --blockquote-background-color: transparent !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --blockquote-border-thickness: 2px !important;
  --blockquote-font-style: normal !important;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent)) !important;
  --blur-brightness: 1.15 !important;
  --blur-l: blur(16px) saturate(1.5) brightness(1.15) !important;
  --blur-m: blur(10px) saturate(1.5) brightness(1.15) !important;
  --blur-opacity-m: 90% !important;
  --blur-opacity-s: 65% !important;
  --blur-radius-l: 16px !important;
  --blur-radius-m: 10px !important;
  --blur-radius-s: 6px !important;
  --blur-s: blur(6px) saturate(1.5) brightness(1.15) !important;
  --blur-saturation: 1.5 !important;
  --bodyFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-modifier: 200 !important;
  --bold-weight: 600 !important;
  --border-width: 1px !important;
  --button-corner-shape: round !important;
  --button-radius: 5px !important;
  --callout-blend-mode: lighten;
  --callout-border-opacity: 0.25;
  --callout-border-width: 0px;
  --callout-bug: 251, 70, 76;
  --callout-content-background: transparent;
  --callout-content-padding: 0;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-quote: 158, 158, 158;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-padding: 0;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #1e1e1e !important;
  --canvas-card-label-color: #666666 !important;
  --canvas-color: 126, 126, 126 !important;
  --canvas-color-1: 251, 70, 76 !important;
  --canvas-color-2: 233, 151, 63 !important;
  --canvas-color-3: 224, 222, 113 !important;
  --canvas-color-4: 68, 207, 110 !important;
  --canvas-color-5: 83, 223, 221 !important;
  --canvas-color-6: 168, 130, 255 !important;
  --canvas-controls-icon-size: 16px !important;
  --canvas-controls-icon-stroke: 2px !important;
  --canvas-controls-radius: 4px !important;
  --canvas-dot-pattern: #363636 !important;
  --caret-color: #dadada !important;
  --checkbox-border-color: #666666 !important;
  --checkbox-border-color-hover: #b3b3b3 !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-margin-inline-start: 0.85em !important;
  --checkbox-marker-color: #1e1e1e !important;
  --checkbox-radius: 4px !important;
  --checkbox-size: 16px !important;
  --checklist-done-color: #b3b3b3 !important;
  --checklist-done-decoration: line-through !important;
  --clickable-icon-radius: 4px !important;
  --code-background: #242424 !important;
  --code-border-color: #363636 !important;
  --code-border-width: 0px !important;
  --code-bracket-background: rgba(255, 255, 255, 0.067) !important;
  --code-comment: #666666 !important;
  --code-function: #e0de71 !important;
  --code-important: #e9973f !important;
  --code-keyword: #fa99cd !important;
  --code-normal: #dadada !important;
  --code-operator: #fb464c !important;
  --code-property: #53dfdd !important;
  --code-punctuation: #b3b3b3 !important;
  --code-radius: 4px !important;
  --code-size: 0.875em !important;
  --code-string: #44cf6e !important;
  --code-tag: #fb464c !important;
  --code-value: #a882ff !important;
  --code-white-space: pre-wrap !important;
  --codeFont: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #666666 !important;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --color-accent-hsl: 258, 88%, 66% !important;
  --color-base-00: #1e1e1e !important;
  --color-base-05: #212121 !important;
  --color-base-10: #242424 !important;
  --color-base-100: #dadada !important;
  --color-base-20: #262626 !important;
  --color-base-25: #2a2a2a !important;
  --color-base-30: #363636 !important;
  --color-base-35: #3f3f3f !important;
  --color-base-40: #555555 !important;
  --color-base-50: #666666 !important;
  --color-base-60: #999999 !important;
  --color-base-70: #b3b3b3 !important;
  --color-blue: #027aff !important;
  --color-blue-rgb: 2, 122, 255 !important;
  --color-cyan: #53dfdd !important;
  --color-cyan-rgb: 83, 223, 221 !important;
  --color-green: #44cf6e !important;
  --color-green-rgb: 68, 207, 110 !important;
  --color-orange: #e9973f !important;
  --color-orange-rgb: 233, 151, 63 !important;
  --color-pink: #fa99cd !important;
  --color-pink-rgb: 250, 153, 205 !important;
  --color-purple: #a882ff !important;
  --color-purple-rgb: 168, 130, 255 !important;
  --color-red: #fb464c !important;
  --color-red-rgb: 251, 70, 76 !important;
  --color-yellow: #e0de71 !important;
  --color-yellow-rgb: 224, 222, 113 !important;
  --corner-shape: round !important;
  --cursor: default !important;
  --cursor-link: pointer !important;
  --dark: #dadada !important;
  --darkgray: #dadada !important;
  --dialog-max-height: 85vh !important;
  --dialog-max-width: 80vw !important;
  --dialog-width: 560px !important;
  --direction: 1 !important;
  --divider-color: #363636 !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --divider-vertical-height: 100% !important;
  --divider-width: 1px !important;
  --divider-width-hover: 3px !important;
  --drag-ghost-background: rgba(0, 0, 0, 0.85) !important;
  --drag-ghost-text-color: #fff !important;
  --dropdown-background: #363636 !important;
  --dropdown-background-blend-mode: hard-light !important;
  --dropdown-background-hover: #3f3f3f !important;
  --dropdown-background-position: right 0.5em top 50%, 0 0 !important;
  --dropdown-background-size: 1em auto, 100% !important;
  --dropdown-icon-inset: 0.5em !important;
  --dropdown-icon-width: 1em !important;
  --dropdown-padding: 0 1.9em 0 0.8em !important;
  --dropdown-padding-end: 1.9em !important;
  --dropdown-padding-start: 0.8em !important;
  --embed-block-shadow-hover: 0 0 0 1px #363636, inset 0 0 0 1px #363636 !important;
  --embed-border-bottom: none !important;
  --embed-border-end: none !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --embed-border-top: none !important;
  --embed-canvas-max-height: 400px !important;
  --embed-max-height: 4000px !important;
  --embed-padding: 0 0 0 24px !important;
  --file-folding-offset: 24px !important;
  --file-header-background: #1e1e1e !important;
  --file-header-background-focused: #1e1e1e !important;
  --file-header-border: 1px solid transparent !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 13px !important;
  --file-header-font-weight: 400 !important;
  --file-header-justify: center !important;
  --file-line-width: 700px !important;
  --file-margins: 32px 32px !important;
  --file-margins-x: 32px !important;
  --file-margins-y: 32px !important;
  --flair-background: #363636 !important;
  --flair-color: #dadada !important;
  --focus-ring-color: #0df !important;
  --focus-ring-outline: 2px solid light-dark(#0060df, #0df) !important;
  --font-black: 900 !important;
  --font-bold: 700 !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-extrabold: 800 !important;
  --font-extralight: 200 !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-light: 300 !important;
  --font-medium: 500 !important;
  --font-mermaid: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-default: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-normal: 400 !important;
  --font-print: Arial' !important;
  --font-semibold: 600 !important;
  --font-small: 0.933em !important;
  --font-smaller: 0.875em !important;
  --font-smallest: 0.8em !important;
  --font-text: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-size: 16px !important;
  --font-thin: 100 !important;
  --font-ui-large: 20px !important;
  --font-ui-medium: 15px !important;
  --font-ui-small: 13px !important;
  --font-ui-smaller: 12px !important;
  --font-weight: 400 !important;
  --footnote-divider-color: #363636 !important;
  --footnote-divider-color-active: transparent !important;
  --footnote-divider-width: 1px !important;
  --footnote-gap: 4px !important;
  --footnote-id-color: #b3b3b3 !important;
  --footnote-id-color-no-occurrences: #666666 !important;
  --footnote-id-delimiter: "." !important;
  --footnote-input-background: transparent !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.067) !important;
  --footnote-line-height: 1.5 !important;
  --footnote-padding-block: 6px !important;
  --footnote-padding-inline: 6px !important;
  --footnote-radius: 4px !important;
  --footnote-size: 0.875em !important;
  --frame-left-space: 0px !important;
  --frame-right-space: 126px !important;
  --graph-controls-width: 240px !important;
  --graph-line: #3f3f3f !important;
  --graph-node: #b3b3b3 !important;
  --graph-node-attachment: #e0de71 !important;
  --graph-node-focused: hsl(255, 89.76%, 75.9%) !important;
  --graph-node-tag: #44cf6e !important;
  --graph-node-unresolved: #666666 !important;
  --graph-text: #dadada !important;
  --gray: #b3b3b3 !important;
  --h1-letter-spacing: -0.015em !important;
  --h1-line-height: 1.2 !important;
  --h1-size: 1.618em !important;
  --h1-style: normal !important;
  --h1-variant: normal !important;
  --h1-weight: 700 !important;
  --h2-letter-spacing: -0.011em !important;
  --h2-line-height: 1.2 !important;
  --h2-size: 1.462em !important;
  --h2-style: normal !important;
  --h2-variant: normal !important;
  --h2-weight: 680 !important;
  --h3-letter-spacing: -0.008em !important;
  --h3-line-height: 1.3 !important;
  --h3-size: 1.318em !important;
  --h3-style: normal !important;
  --h3-variant: normal !important;
  --h3-weight: 660 !important;
  --h4-letter-spacing: -0.005em !important;
  --h4-line-height: 1.4 !important;
  --h4-size: 1.188em !important;
  --h4-style: normal !important;
  --h4-variant: normal !important;
  --h4-weight: 640 !important;
  --h5-letter-spacing: -0.002em !important;
  --h5-line-height: 1.5 !important;
  --h5-size: 1.076em !important;
  --h5-style: normal !important;
  --h5-variant: normal !important;
  --h5-weight: 620 !important;
  --h6-letter-spacing: 0em !important;
  --h6-line-height: 1.5 !important;
  --h6-size: 1em !important;
  --h6-style: normal !important;
  --h6-variant: normal !important;
  --h6-weight: 600 !important;
  --header-height: 40px !important;
  --headerFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #666666 !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(255, 208, 0, 0.4) !important;
  --highlight-mix-blend-mode: lighten !important;
  --hr-color: #363636 !important;
  --hr-thickness: 2px !important;
  --icon-color: #b3b3b3 !important;
  --icon-color-active: hsl(255, 89.76%, 75.9%) !important;
  --icon-color-focused: #dadada !important;
  --icon-color-hover: #b3b3b3 !important;
  --icon-l: 18px !important;
  --icon-l-stroke-width: 1.75px !important;
  --icon-m: 18px !important;
  --icon-m-stroke-width: 1.75px !important;
  --icon-opacity: 0.85 !important;
  --icon-opacity-active: 1 !important;
  --icon-opacity-hover: 1 !important;
  --icon-s: 16px !important;
  --icon-s-stroke-width: 2px !important;
  --icon-size: 18px !important;
  --icon-stroke: 1.75px !important;
  --icon-xl: 32px !important;
  --icon-xl-stroke-width: 1.25px !important;
  --icon-xs: 14px !important;
  --icon-xs-stroke-width: 2px !important;
  --indent-size: 4 !important;
  --indent-unit: 0.5625em !important;
  --indentation-guide-color: rgba(255, 255, 255, 0.12) !important;
  --indentation-guide-color-active: rgba(255, 255, 255, 0.3) !important;
  --indentation-guide-editing-indent: 0.85em !important;
  --indentation-guide-reading-indent: -0.85em !important;
  --indentation-guide-source-indent: 0.25em !important;
  --indentation-guide-width: 1px !important;
  --indentation-guide-width-active: 1px !important;
  --inline-title-line-height: 1.2 !important;
  --inline-title-margin-bottom: 0.5em !important;
  --inline-title-size: 1.618em !important;
  --inline-title-style: normal !important;
  --inline-title-variant: normal !important;
  --inline-title-weight: 700 !important;
  --input-border-width: 1px !important;
  --input-border-width-focus: 2px !important;
  --input-corner-shape: round !important;
  --input-date-separator: #666666 !important;
  --input-font-weight: 400 !important;
  --input-height: 30px !important;
  --input-icon-inset: 4px !important;
  --input-padding: 4px 8px !important;
  --input-placeholder-color: #666666 !important;
  --input-radius: 5px !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16), 0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --inset-end: right !important;
  --inset-start: left !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --interactive-accent-hsl: 258, 88%, 66% !important;
  --interactive-hover: #3f3f3f !important;
  --interactive-normal: #363636 !important;
  --keyboard-height: 0px !important;
  --layer-cover: 5 !important;
  --layer-dragged-item: 80 !important;
  --layer-menu: 65 !important;
  --layer-modal: 50 !important;
  --layer-notice: 60 !important;
  --layer-popover: 30 !important;
  --layer-sidedock: 10 !important;
  --layer-slides: 45 !important;
  --layer-status-bar: 15 !important;
  --layer-tooltip: 70 !important;
  --light: #1e1e1e !important;
  --lightgray: #262626 !important;
  --line-height-normal: 1.5 !important;
  --line-height-tight: 1.3 !important;
  --link-color: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-decoration: underline !important;
  --link-decoration-hover: underline !important;
  --link-decoration-thickness: auto !important;
  --link-external-color: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-external-decoration: underline !important;
  --link-external-decoration-hover: underline !important;
  --link-external-filter: none !important;
  --link-unresolved-color: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --link-unresolved-decoration-style: solid !important;
  --link-unresolved-filter: none !important;
  --link-unresolved-opacity: 0.7 !important;
  --link-weight: 400 !important;
  --list-bullet-border: none !important;
  --list-bullet-end-padding: 1.3rem !important;
  --list-bullet-radius: 50% !important;
  --list-bullet-size: 0.3em !important;
  --list-bullet-transform: none !important;
  --list-indent: 2.25em !important;
  --list-indent-editing: 0.75em !important;
  --list-indent-source: 0 !important;
  --list-marker-color: #666666 !important;
  --list-marker-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --list-marker-color-hover: #b3b3b3 !important;
  --list-numbered-style: decimal !important;
  --list-spacing: 0.075em !important;
  --loading-icon-delay: 400ms !important;
  --menu-backdrop-filter: none !important;
  --menu-background: #262626 !important;
  --menu-border-color: #3f3f3f !important;
  --menu-border-width: 1px !important;
  --menu-corner-shape: round !important;
  --menu-padding: 6px !important;
  --menu-radius: 8px !important;
  --menu-scroll-mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 48px) !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-background: transparent !important;
  --metadata-border-color: #363636 !important;
  --metadata-border-radius: 0 !important;
  --metadata-border-width: 0 !important;
  --metadata-display-editing: block !important;
  --metadata-display-reading: block !important;
  --metadata-divider-color: #363636 !important;
  --metadata-divider-color-focus: transparent !important;
  --metadata-divider-color-hover: transparent !important;
  --metadata-divider-width: 0 !important;
  --metadata-gap: 3px !important;
  --metadata-input-background: transparent !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.067) !important;
  --metadata-input-background-hover: transparent !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.875em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-longtext-lines: 3 !important;
  --metadata-input-padding: 4px 8px !important;
  --metadata-input-text-color: #dadada !important;
  --metadata-label-background: transparent !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.067) !important;
  --metadata-label-background-hover: transparent !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.875em !important;
  --metadata-label-text-color: #b3b3b3 !important;
  --metadata-label-text-color-hover: #b3b3b3 !important;
  --metadata-label-width: 9em !important;
  --metadata-max-width: none !important;
  --metadata-padding: 8px 0 !important;
  --metadata-property-background: transparent !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.067) !important;
  --metadata-property-background-hover: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #555555 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3f3f3f !important;
  --metadata-property-corner-shape: round !important;
  --metadata-property-corner-shape-focus: round !important;
  --metadata-property-corner-shape-hover: round !important;
  --metadata-property-padding: 0 !important;
  --metadata-property-radius: 6px !important;
  --metadata-property-radius-focus: 6px !important;
  --metadata-property-radius-hover: 6px !important;
  --metadata-sidebar-input-font-size: 13px !important;
  --metadata-sidebar-label-font-size: 13px !important;
  --modal-background: #1e1e1e !important;
  --modal-border-color: #555555 !important;
  --modal-border-width: 1px !important;
  --modal-community-sidebar-width: 280px !important;
  --modal-header-height: auto !important;
  --modal-height: 85vh !important;
  --modal-max-height: 1000px !important;
  --modal-max-width: 1100px !important;
  --modal-max-width-narrow: 800px !important;
  --modal-radius: 12px !important;
  --modal-shadow: none !important;
  --modal-width: 90vw !important;
  --mono-rgb-0: 0, 0, 0 !important;
  --mono-rgb-100: 255, 255, 255 !important;
  --nav-collapse-icon-color: #666666 !important;
  --nav-collapse-icon-color-collapsed: #666666 !important;
  --nav-heading-color: #dadada !important;
  --nav-heading-color-collapsed: #666666 !important;
  --nav-heading-color-collapsed-hover: #b3b3b3 !important;
  --nav-heading-color-hover: #dadada !important;
  --nav-heading-weight: 500 !important;
  --nav-heading-weight-hover: 500 !important;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.12) !important;
  --nav-indentation-guide-width: 1px !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.067) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.067) !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-children-margin-start: 12px !important;
  --nav-item-children-padding-start: 4px !important;
  --nav-item-color: #b3b3b3 !important;
  --nav-item-color-active: #dadada !important;
  --nav-item-color-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --nav-item-color-hover: #dadada !important;
  --nav-item-color-selected: #dadada !important;
  --nav-item-margin-bottom: 2px !important;
  --nav-item-padding: 4px 8px 4px 24px !important;
  --nav-item-parent-padding: 4px 8px 4px 24px !important;
  --nav-item-radius: 4px !important;
  --nav-item-size: 13px !important;
  --nav-item-white-space: pre !important;
  --nav-tag-background: transparent !important;
  --nav-tag-color: #666666 !important;
  --nav-tag-color-active: #b3b3b3 !important;
  --nav-tag-color-hover: #b3b3b3 !important;
  --nav-tag-radius: 4px !important;
  --nav-tag-weight: 600 !important;
  --p-spacing: 1rem !important;
  --p-spacing-empty: 0rem !important;
  --page-border: 9px solid transparent !important;
  --page-margin: 1px auto -8px !important;
  --pdf-background: #1e1e1e !important;
  --pdf-page-background: #1e1e1e !important;
  --pdf-shadow: 0 0 0 1px #363636 !important;
  --pdf-sidebar-background: #1e1e1e !important;
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636 !important;
  --pdfViewer-padding-bottom: 0 !important;
  --pill-background: transparent !important;
  --pill-background-hover: transparent !important;
  --pill-border-color: #363636 !important;
  --pill-border-color-hover: #3f3f3f !important;
  --pill-border-width: 1px !important;
  --pill-color: #b3b3b3 !important;
  --pill-color-hover: #dadada !important;
  --pill-color-remove: #666666 !important;
  --pill-color-remove-hover: hsl(255, 89.76%, 75.9%) !important;
  --pill-decoration: none !important;
  --pill-decoration-hover: none !important;
  --pill-focus-left-adjust: -4px !important;
  --pill-focus-width: calc(100% + 6px) !important;
  --pill-padding-x: 0.65em !important;
  --pill-padding-y: 0.25em !important;
  --pill-radius: 2em !important;
  --popover-font-size: 16px !important;
  --popover-height: 400px !important;
  --popover-max-height: 95vh !important;
  --popover-pdf-height: 400px !important;
  --popover-pdf-width: 450px !important;
  --popover-width: 450px !important;
  --preferred-text-scale: 1 !important;
  --prompt-backdrop-filter: none !important;
  --prompt-background: #1e1e1e !important;
  --prompt-border-color: #555555 !important;
  --prompt-border-width: 1px !important;
  --prompt-input-height: 40px !important;
  --prompt-max-height: 70vh !important;
  --prompt-max-width: 80vw !important;
  --prompt-width: 700px !important;
  --radius-l: 12px !important;
  --radius-m: 8px !important;
  --radius-s: 4px !important;
  --radius-xl: 16px !important;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent)) !important;
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15) !important;
  --raised-mask: linear-gradient(white, white) padding-box, linear-gradient(white, white) border-box !important;
  --raised-mask-background: transparent !important;
  --raised-mask-border-width: 0 !important;
  --raised-mask-composite: exclude, add !important;
  --raised-mask-display: block !important;
  --ribbon-background: #262626 !important;
  --ribbon-background-collapsed: #1e1e1e !important;
  --ribbon-padding: 8px 4px 12px !important;
  --ribbon-width: 44px !important;
  --safe-area-inset-bottom: 0px !important;
  --safe-area-inset-left: 0px !important;
  --safe-area-inset-right: 0px !important;
  --safe-area-inset-top: 0px !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0.05) !important;
  --scrollbar-border-width: 3px 3px 3px 2px !important;
  --scrollbar-height: 12px !important;
  --scrollbar-radius: 12px !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1) !important;
  --scrollbar-width: 12px !important;
  --search-clear-button-color: #b3b3b3 !important;
  --search-clear-button-size: 13px !important;
  --search-icon-color: #b3b3b3 !important;
  --search-icon-size: 18px !important;
  --search-result-background: #1e1e1e !important;
  --secondary: hsl(255, 89.76%, 75.9%) !important;
  --setting-group-heading-color: #dadada !important;
  --setting-group-heading-size: 15px !important;
  --setting-group-heading-weight: 600 !important;
  --setting-items-background: #242424 !important;
  --setting-items-border-color: #363636 !important;
  --setting-items-border-width: 0 !important;
  --setting-items-padding: 20px !important;
  --setting-items-radius: 12px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --sidebar-left-toggle-inner-width: 8.33% !important;
  --sidebar-left-toggle-inner-width-open: 24% !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --sidebar-right-toggle-inner-width: 8.33% !important;
  --sidebar-right-toggle-inner-width-open: 24% !important;
  --sidebar-tab-text-display: none !important;
  --size-2-1: 2px !important;
  --size-2-2: 4px !important;
  --size-2-3: 6px !important;
  --size-4-1: 4px !important;
  --size-4-10: 40px !important;
  --size-4-12: 48px !important;
  --size-4-16: 64px !important;
  --size-4-18: 72px !important;
  --size-4-2: 8px !important;
  --size-4-3: 12px !important;
  --size-4-4: 16px !important;
  --size-4-5: 20px !important;
  --size-4-6: 24px !important;
  --size-4-8: 32px !important;
  --size-4-9: 36px !important;
  --slider-s-thumb-position: -5px !important;
  --slider-s-thumb-size: 15px !important;
  --slider-thumb-border-color: #3f3f3f !important;
  --slider-thumb-border-width: 1px !important;
  --slider-thumb-height: 18px !important;
  --slider-thumb-radius: 18px !important;
  --slider-thumb-width: 18px !important;
  --slider-thumb-y: -6px !important;
  --slider-track-background: #363636 !important;
  --slider-track-height: 3px !important;
  --spreadHorizontalWrapped-margin-LR: -3.5px !important;
  --status-bar-background: #262626 !important;
  --status-bar-border-color: #363636 !important;
  --status-bar-border-width: 1px 0 0 1px !important;
  --status-bar-font-size: 12px !important;
  --status-bar-position: fixed !important;
  --status-bar-radius: 8px 0 0 0 !important;
  --status-bar-text-color: #b3b3b3 !important;
  --suggestion-backdrop-filter: none !important;
  --suggestion-background: #1e1e1e !important;
  --swatch-height: 22px !important;
  --swatch-radius: 14px !important;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15) !important;
  --swatch-width: 22px !important;
  --sync-avatar-color-1: #fb464c !important;
  --sync-avatar-color-2: #e9973f !important;
  --sync-avatar-color-3: #e0de71 !important;
  --sync-avatar-color-4: #44cf6e !important;
  --sync-avatar-color-5: #53dfdd !important;
  --sync-avatar-color-6: #027aff !important;
  --sync-avatar-color-7: #a882ff !important;
  --sync-avatar-color-8: #fa99cd !important;
  --sync-avatar-color-current-user: transparent !important;
  --tab-background-active: #1e1e1e !important;
  --tab-container-background: #262626 !important;
  --tab-curve: 6px !important;
  --tab-divider-color: #3f3f3f !important;
  --tab-font-size: 13px !important;
  --tab-max-width: 320px !important;
  --tab-outline-color: #363636 !important;
  --tab-outline-width: 1px !important;
  --tab-radius: 4px !important;
  --tab-radius-active: 6px 6px 0 0 !important;
  --tab-stacked-font-size: 13px !important;
  --tab-stacked-font-weight: 400 !important;
  --tab-stacked-header-width: 40px !important;
  --tab-stacked-pane-width: 700px !important;
  --tab-stacked-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.05) !important;
  --tab-stacked-text-align: start !important;
  --tab-stacked-text-transform: rotate(0deg) !important;
  --tab-stacked-text-writing-mode: vertical-lr !important;
  --tab-switcher-background: #262626 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent) !important;
  --tab-switcher-preview-background-shadow: 0 4px 30px 2px rgba(0, 0, 0, 0.2) !important;
  --tab-switcher-preview-radius: 16px !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color: #666666 !important;
  --tab-text-color-active: #b3b3b3 !important;
  --tab-text-color-focused: #b3b3b3 !important;
  --tab-text-color-focused-active: #b3b3b3 !important;
  --tab-text-color-focused-active-current: #dadada !important;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --tab-width: 200px !important;
  --table-add-button-background: transparent !important;
  --table-add-button-border-color: #363636 !important;
  --table-add-button-border-width: 1px !important;
  --table-background: transparent !important;
  --table-border-color: #363636 !important;
  --table-border-width: 1px !important;
  --table-cell-vertical-alignment: top !important;
  --table-column-alt-background: transparent !important;
  --table-column-first-border-width: 1px !important;
  --table-column-last-border-width: 1px !important;
  --table-column-max-width: none !important;
  --table-column-min-width: 6ch !important;
  --table-drag-handle-background: transparent !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: #666666 !important;
  --table-drag-handle-color-active: white !important;
  --table-drop-indicator-half-width: 2px !important;
  --table-header-background: transparent !important;
  --table-header-border-color: #363636 !important;
  --table-header-border-width: 1px !important;
  --table-header-color: #dadada !important;
  --table-header-size: 16px !important;
  --table-header-weight: 600 !important;
  --table-line-height: 1.3 !important;
  --table-row-alt-background: transparent !important;
  --table-row-alt-background-hover: transparent !important;
  --table-row-background-hover: transparent !important;
  --table-row-last-border-width: 1px !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-blend-mode: lighten !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --table-selection-border-radius: 4px !important;
  --table-selection-border-width: 2px !important;
  --table-text-size: 16px !important;
  --table-white-space: break-spaces !important;
  --tag-background: hsla(258, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-width: 0px !important;
  --tag-color: hsl(255, 89.76%, 75.9%) !important;
  --tag-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --tag-corner-shape: round !important;
  --tag-decoration: none !important;
  --tag-decoration-hover: none !important;
  --tag-padding-x: 0.65em !important;
  --tag-padding-y: 0.25em !important;
  --tag-radius: 2em !important;
  --tag-size: 0.875em !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(253, 92.4%, 85.14%) !important;
  --text-error: #fb464c !important;
  --text-faint: #666666 !important;
  --text-highlight-bg: rgba(255, 208, 0, 0.4) !important;
  --text-highlight-bg-rgb: 255, 208, 0 !important;
  --text-muted: #b3b3b3 !important;
  --text-normal: #dadada !important;
  --text-on-accent: white !important;
  --text-on-accent-inverted: black !important;
  --text-selection: hsla(258, 88%, 66%, 0.33) !important;
  --text-success: #44cf6e !important;
  --text-warning: #e9973f !important;
  --textHighlight: rgba(255, 208, 0, 0.4) !important;
  --titleFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #262626 !important;
  --titlebar-background-focused: #363636 !important;
  --titlebar-border-color: #363636 !important;
  --titlebar-border-width: 0px !important;
  --titlebar-height: 30px !important;
  --titlebar-text-color: #b3b3b3 !important;
  --titlebar-text-color-focused: #dadada !important;
  --titlebar-text-weight: 700 !important;
  --toggle-border-width: 2px !important;
  --toggle-radius: 18px !important;
  --toggle-s-border-width: 2px !important;
  --toggle-s-thumb-height: 15px !important;
  --toggle-s-thumb-width: 15px !important;
  --toggle-s-width: 34px !important;
  --toggle-thumb-color: white !important;
  --toggle-thumb-height: 18px !important;
  --toggle-thumb-radius: 18px !important;
  --toggle-thumb-width: 18px !important;
  --toggle-width: 40px !important;
  --touch-radius-l: 52px !important;
  --touch-radius-m: 44px !important;
  --touch-radius-s: 40px !important;
  --touch-radius-xl: 60px !important;
  --touch-radius-xs: 30px !important;
  --touch-radius-xxs: 24px !important;
  --touch-size-l: 52px !important;
  --touch-size-m: 44px !important;
  --touch-size-s: 40px !important;
  --touch-size-xl: 60px !important;
  --touch-size-xs: 30px !important;
  --touch-size-xxs: 24px !important;
  --traffic-lights-offset-x: 40px !important;
  --traffic-lights-offset-y: 40px !important;
  --vault-profile-actions-display: flex !important;
  --vault-profile-color: #dadada !important;
  --vault-profile-color-hover: #dadada !important;
  --vault-profile-display: flex !important;
  --vault-profile-font-size: 13px !important;
  --vault-profile-font-weight: 500 !important;
  --vault-profile-order: 2 !important;
  --viewer-container-height: 0 !important;
  --workspace-background-translucent: rgba(0, 0, 0, 0.6) !important;
  --xfa-focus-outline: auto !important;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --zoom-factor: 1 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 38, 38);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 30, 30);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(54, 54, 54);
  color: rgb(218, 218, 218);
  font-weight: 600;
}

html[saved-theme="dark"] body .canvas-node {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(218, 218, 218);
  border-radius: 0px;
  border-width: 0px;
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .canvas-node-group {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(218, 218, 218);
  border-width: 0px;
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(38, 38, 38);
  border-color: rgb(218, 218, 218);
  box-shadow: rgba(255, 255, 255, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(54, 54, 54);
  border-radius: 0px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(179, 179, 179);
  font-weight: 400;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(138, 92, 245, 0.1);
  border-radius: 28px;
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 38, 38);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 38, 38);
  border-left-color: rgb(54, 54, 54);
  border-left-width: 0px;
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 30, 30);
  color: rgb(218, 218, 218);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="dark"] body .text-highlight {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(255, 208, 0, 0.4);
  color: rgb(218, 218, 218);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="dark"] body del {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: line-through;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-line: line-through;
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="dark"] body footer {
  opacity: 1;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(218, 218, 218);
  font-size: 13px;
  font-weight: 400;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(102, 102, 102);
  border-radius: 4px;
  border-width: 1px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body p {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
  text-decoration-style: solid;
  transition: all;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(166, 138, 249);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(166, 138, 249);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(166, 138, 249);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(166, 138, 249);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}

html[saved-theme="dark"] body a.internal.broken {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(166, 138, 249);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(166, 138, 249) none 0px;
  text-decoration: underline rgba(138, 92, 245, 0.3);
  text-decoration-color: rgba(138, 92, 245, 0.3);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(218, 218, 218);
  margin-bottom: 0px;
  margin-left: 40px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body dl {
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
}

html[saved-theme="dark"] body dt {
  color: rgb(218, 218, 218);
  font-weight: 400;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(218, 218, 218);
  text-align: start;
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(218, 218, 218);
  text-align: start;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(0, 0, 0, 0);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .table-container {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  width: 225.219px;
}

html[saved-theme="dark"] body tbody {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body td {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(218, 218, 218);
  font-weight: 400;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  text-align: start;
  vertical-align: top;
}

html[saved-theme="dark"] body th {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(218, 218, 218);
  font-weight: 600;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  text-align: start;
  vertical-align: top;
}

html[saved-theme="dark"] body thead {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body tr {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: monospace;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(224, 222, 113);
  border-left-width: 0px;
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 222, 113);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 222, 113);
  border-left-width: 0px;
  border-right-color: rgb(224, 222, 113);
  border-right-width: 0px;
  border-top-color: rgb(224, 222, 113);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}`,
    images: `html[saved-theme="dark"] body audio {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: start;
}

html[saved-theme="dark"] body figure {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 16px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: start;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .footnotes {
  background-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex > .katex-html {
  font-family: MJXZERO, MJXTEX;
}

html[saved-theme="dark"] body .katex-display > .katex {
  display: block;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: center;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(102, 102, 102);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(102, 102, 102);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-bottom: 0px;
  margin-left: -24px;
  margin-right: 8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  transition: box-shadow 0.15s ease-in-out;
  width: 16px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(218, 218, 218);
  text-decoration: none;
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body ul > li.task-list-item {
  display: list-item;
  text-align: start;
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 30);
  color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(2, 122, 255);
  gap: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(2, 122, 255);
  font-weight: 600;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(83, 223, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(83, 223, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(83, 223, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(251, 70, 76, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(251, 70, 76, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(251, 70, 76, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(251, 70, 76, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(251, 70, 76, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(251, 70, 76, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.1);
  border-bottom-color: rgba(168, 130, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(168, 130, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(168, 130, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(168, 130, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(251, 70, 76, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(251, 70, 76, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(251, 70, 76, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 151, 63, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 151, 63, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 151, 63, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.1);
  border-bottom-color: rgba(158, 158, 158, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(158, 158, 158, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(158, 158, 158, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(158, 158, 158, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(68, 207, 110, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(68, 207, 110, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(68, 207, 110, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(83, 223, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(83, 223, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(83, 223, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 151, 63, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 151, 63, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 151, 63, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
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
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.067);
  color: rgb(218, 218, 218);
  font-weight: 400;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.067);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.067);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgba(138, 92, 245, 0.15);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(138, 92, 245, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(138, 92, 245, 0.15);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(138, 92, 245, 0.15);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-style: solid;
  border-top-width: 0px;
  display: flex;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body h1 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .explorer {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(179, 179, 179);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(179, 179, 179);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(255, 255, 255, 0.12);
  border-left-style: solid;
  border-left-width: 1px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 400;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  cursor: default;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 8px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(179, 179, 179);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(218, 218, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  cursor: default;
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(179, 179, 179);
  stroke: rgb(179, 179, 179);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(102, 102, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 32px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(218, 218, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(218, 218, 218);
  text-decoration: underline dotted;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body details {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(179, 179, 179);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 14px;
  padding-bottom: 1.4px;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 1.4px;
}

html[saved-theme="dark"] body progress {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(218, 218, 218);
  font-size: 13.3333px;
  vertical-align: sub;
}

html[saved-theme="dark"] body summary {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
  font-weight: 400;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body sup {
  color: rgb(218, 218, 218);
  font-size: 13.3333px;
  vertical-align: super;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgba(138, 92, 245, 0.15);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(138, 92, 245, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(138, 92, 245, 0.15);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(138, 92, 245, 0.15);
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(166, 138, 249);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 258 !important;
  --accent-l: 66% !important;
  --accent-s: 88% !important;
  --anim-duration-fast: 140ms !important;
  --anim-duration-moderate: 300ms !important;
  --anim-duration-none: 0 !important;
  --anim-duration-slow: 560ms !important;
  --anim-duration-superfast: 70ms !important;
  --anim-motion-delay: cubic-bezier(0.65, 0.05, 0.36, 1) !important;
  --anim-motion-jumpy: cubic-bezier(0.68, -0.55, 0.27, 1.55) !important;
  --anim-motion-smooth: cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --anim-motion-swing: cubic-bezier(0, 0.55, 0.45, 1) !important;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-border: #e0e0e0 !important;
  --background-modifier-border-focus: #bdbdbd !important;
  --background-modifier-border-hover: #d4d4d4 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-cover: rgba(220, 220, 220, 0.4) !important;
  --background-modifier-error: #e93147 !important;
  --background-modifier-error-hover: #e93147 !important;
  --background-modifier-error-rgb: 233, 49, 71 !important;
  --background-modifier-form-field: #ffffff !important;
  --background-modifier-form-field-hover: #ffffff !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.067) !important;
  --background-modifier-message: rgba(0, 0, 0, 0.9) !important;
  --background-modifier-success: #08b94e !important;
  --background-modifier-success-rgb: 8, 185, 78 !important;
  --background-primary: #ffffff !important;
  --background-primary-alt: #fafafa !important;
  --background-secondary: #f6f6f6 !important;
  --background-secondary-alt: #fcfcfc !important;
  --bases-cards-background: #ffffff !important;
  --bases-cards-border-width: 1px !important;
  --bases-cards-container-background: transparent !important;
  --bases-cards-corner-shape: round !important;
  --bases-cards-cover-background: #fafafa !important;
  --bases-cards-font-size: 0.875em !important;
  --bases-cards-line-height: 24px !important;
  --bases-cards-radius: 8px !important;
  --bases-cards-scale: 1 !important;
  --bases-cards-shadow: 0 0 0 1px #e0e0e0 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #d4d4d4 !important;
  --bases-embed-border-color: #e0e0e0 !important;
  --bases-embed-border-radius: 4px !important;
  --bases-embed-border-width: 0px !important;
  --bases-filter-menu-width: 520px !important;
  --bases-group-heading-property-color: #5c5c5c !important;
  --bases-group-heading-property-display: block !important;
  --bases-group-heading-property-size: 12px !important;
  --bases-group-heading-property-weight: 400 !important;
  --bases-group-heading-value-size: 0.875em !important;
  --bases-group-heading-value-weight: 600 !important;
  --bases-header-border-width: 0 0 1px 0 !important;
  --bases-header-height: 40px !important;
  --bases-header-padding-end: 2px !important;
  --bases-header-padding-start: 2px !important;
  --bases-table-border-color: #e0e0e0 !important;
  --bases-table-cell-background-active: #ffffff !important;
  --bases-table-cell-background-disabled: #fafafa !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-radius-active: 2px !important;
  --bases-table-cell-radius-focus: 2px !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #bdbdbd !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --bases-table-column-border-width: 1px !important;
  --bases-table-column-max-width: 300 !important;
  --bases-table-column-min-width: 40 !important;
  --bases-table-container-border-radius: 4px !important;
  --bases-table-container-border-width: 1px !important;
  --bases-table-font-size: 0.875em !important;
  --bases-table-group-background: #fafafa !important;
  --bases-table-group-gap: 10px !important;
  --bases-table-header-background: #ffffff !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.067) !important;
  --bases-table-header-color: #5c5c5c !important;
  --bases-table-header-icon-display: flex !important;
  --bases-table-header-sort-mask: linear-gradient(to left, transparent 24px, black 24px) !important;
  --bases-table-header-weight: 400 !important;
  --bases-table-row-background-hover: transparent !important;
  --bases-table-row-border-width: 1px !important;
  --bases-table-row-height: 30px !important;
  --bases-table-summary-background: #ffffff !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.067) !important;
  --bases-toolbar-badge-display: none !important;
  --bases-toolbar-label-display: block !important;
  --blockquote-background-color: transparent !important;
  --blockquote-border-color: hsl(257, 88.88%, 70.95%) !important;
  --blockquote-border-thickness: 2px !important;
  --blockquote-font-style: normal !important;
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent)) !important;
  --blur-brightness: 1.15 !important;
  --blur-l: blur(16px) saturate(1.5) brightness(1.15) !important;
  --blur-m: blur(10px) saturate(1.5) brightness(1.15) !important;
  --blur-opacity-m: 90% !important;
  --blur-opacity-s: 65% !important;
  --blur-radius-l: 16px !important;
  --blur-radius-m: 10px !important;
  --blur-radius-s: 6px !important;
  --blur-s: blur(6px) saturate(1.5) brightness(1.15) !important;
  --blur-saturation: 1.5 !important;
  --bodyFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-modifier: 200 !important;
  --bold-weight: 600 !important;
  --border-width: 1px !important;
  --button-corner-shape: round !important;
  --button-radius: 5px !important;
  --callout-blend-mode: darken;
  --callout-border-opacity: 0.25;
  --callout-border-width: 0px;
  --callout-bug: 233, 49, 71;
  --callout-content-background: transparent;
  --callout-content-padding: 0;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-quote: 158, 158, 158;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-padding: 0;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff !important;
  --canvas-card-label-color: #ababab !important;
  --canvas-color: 192, 192, 192 !important;
  --canvas-color-1: 233, 49, 71 !important;
  --canvas-color-2: 236, 117, 0 !important;
  --canvas-color-3: 224, 172, 0 !important;
  --canvas-color-4: 8, 185, 78 !important;
  --canvas-color-5: 0, 191, 188 !important;
  --canvas-color-6: 120, 82, 238 !important;
  --canvas-controls-icon-size: 16px !important;
  --canvas-controls-icon-stroke: 2px !important;
  --canvas-controls-radius: 4px !important;
  --canvas-dot-pattern: #e0e0e0 !important;
  --caret-color: #222222 !important;
  --checkbox-border-color: #ababab !important;
  --checkbox-border-color-hover: #5c5c5c !important;
  --checkbox-color: hsl(257, 88.88%, 70.95%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-margin-inline-start: 0.85em !important;
  --checkbox-marker-color: #ffffff !important;
  --checkbox-radius: 4px !important;
  --checkbox-size: 16px !important;
  --checklist-done-color: #5c5c5c !important;
  --checklist-done-decoration: line-through !important;
  --clickable-icon-radius: 4px !important;
  --code-background: #fafafa !important;
  --code-border-color: #e0e0e0 !important;
  --code-border-width: 0px !important;
  --code-bracket-background: rgba(0, 0, 0, 0.067) !important;
  --code-comment: #ababab !important;
  --code-function: #e0ac00 !important;
  --code-important: #ec7500 !important;
  --code-keyword: #d53984 !important;
  --code-normal: #222222 !important;
  --code-operator: #e93147 !important;
  --code-property: #00bfbc !important;
  --code-punctuation: #5c5c5c !important;
  --code-radius: 4px !important;
  --code-size: 0.875em !important;
  --code-string: #08b94e !important;
  --code-tag: #e93147 !important;
  --code-value: #7852ee !important;
  --code-white-space: pre-wrap !important;
  --codeFont: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #ababab !important;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-hsl: 258, 88%, 66% !important;
  --color-base-00: #ffffff !important;
  --color-base-05: #fcfcfc !important;
  --color-base-10: #fafafa !important;
  --color-base-100: #222222 !important;
  --color-base-20: #f6f6f6 !important;
  --color-base-25: #e3e3e3 !important;
  --color-base-30: #e0e0e0 !important;
  --color-base-35: #d4d4d4 !important;
  --color-base-40: #bdbdbd !important;
  --color-base-50: #ababab !important;
  --color-base-60: #707070 !important;
  --color-base-70: #5c5c5c !important;
  --color-blue: #086ddd !important;
  --color-blue-rgb: 8, 109, 221 !important;
  --color-cyan: #00bfbc !important;
  --color-cyan-rgb: 0, 191, 188 !important;
  --color-green: #08b94e !important;
  --color-green-rgb: 8, 185, 78 !important;
  --color-orange: #ec7500 !important;
  --color-orange-rgb: 236, 117, 0 !important;
  --color-pink: #d53984 !important;
  --color-pink-rgb: 213, 57, 132 !important;
  --color-purple: #7852ee !important;
  --color-purple-rgb: 120, 82, 238 !important;
  --color-red: #e93147 !important;
  --color-red-rgb: 233, 49, 71 !important;
  --color-yellow: #e0ac00 !important;
  --color-yellow-rgb: 224, 172, 0 !important;
  --corner-shape: round !important;
  --cursor: default !important;
  --cursor-link: pointer !important;
  --dark: #222222 !important;
  --darkgray: #222222 !important;
  --dialog-max-height: 85vh !important;
  --dialog-max-width: 80vw !important;
  --dialog-width: 560px !important;
  --direction: 1 !important;
  --divider-color: #e0e0e0 !important;
  --divider-color-hover: hsl(257, 88.88%, 70.95%) !important;
  --divider-vertical-height: 100% !important;
  --divider-width: 1px !important;
  --divider-width-hover: 3px !important;
  --drag-ghost-background: rgba(0, 0, 0, 0.85) !important;
  --drag-ghost-text-color: #fff !important;
  --dropdown-background: #ffffff !important;
  --dropdown-background-blend-mode: hard-light !important;
  --dropdown-background-hover: #fafafa !important;
  --dropdown-background-position: right 0.5em top 50%, 0 0 !important;
  --dropdown-background-size: 1em auto, 100% !important;
  --dropdown-icon-inset: 0.5em !important;
  --dropdown-icon-width: 1em !important;
  --dropdown-padding: 0 1.9em 0 0.8em !important;
  --dropdown-padding-end: 1.9em !important;
  --dropdown-padding-start: 0.8em !important;
  --embed-block-shadow-hover: 0 0 0 1px #e0e0e0, inset 0 0 0 1px #e0e0e0 !important;
  --embed-border-bottom: none !important;
  --embed-border-end: none !important;
  --embed-border-start: 2px solid hsl(257, 88.88%, 70.95%) !important;
  --embed-border-top: none !important;
  --embed-canvas-max-height: 400px !important;
  --embed-max-height: 4000px !important;
  --embed-padding: 0 0 0 24px !important;
  --file-folding-offset: 24px !important;
  --file-header-background: #ffffff !important;
  --file-header-background-focused: #ffffff !important;
  --file-header-border: 1px solid transparent !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 13px !important;
  --file-header-font-weight: 400 !important;
  --file-header-justify: center !important;
  --file-line-width: 700px !important;
  --file-margins: 32px 32px !important;
  --file-margins-x: 32px !important;
  --file-margins-y: 32px !important;
  --flair-background: #ffffff !important;
  --flair-color: #222222 !important;
  --focus-ring-color: #0df !important;
  --focus-ring-outline: 2px solid light-dark(#0060df, #0df) !important;
  --font-black: 900 !important;
  --font-bold: 700 !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-extrabold: 800 !important;
  --font-extralight: 200 !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-light: 300 !important;
  --font-medium: 500 !important;
  --font-mermaid: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-default: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-normal: 400 !important;
  --font-print: Arial' !important;
  --font-semibold: 600 !important;
  --font-small: 0.933em !important;
  --font-smaller: 0.875em !important;
  --font-smallest: 0.8em !important;
  --font-text: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-size: 16px !important;
  --font-thin: 100 !important;
  --font-ui-large: 20px !important;
  --font-ui-medium: 15px !important;
  --font-ui-small: 13px !important;
  --font-ui-smaller: 12px !important;
  --font-weight: 400 !important;
  --footnote-divider-color: #e0e0e0 !important;
  --footnote-divider-color-active: transparent !important;
  --footnote-divider-width: 1px !important;
  --footnote-gap: 4px !important;
  --footnote-id-color: #5c5c5c !important;
  --footnote-id-color-no-occurrences: #ababab !important;
  --footnote-id-delimiter: "." !important;
  --footnote-input-background: transparent !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.067) !important;
  --footnote-line-height: 1.5 !important;
  --footnote-padding-block: 6px !important;
  --footnote-padding-inline: 6px !important;
  --footnote-radius: 4px !important;
  --footnote-size: 0.875em !important;
  --frame-left-space: 0px !important;
  --frame-right-space: 126px !important;
  --graph-controls-width: 240px !important;
  --graph-line: #d4d4d4 !important;
  --graph-node: #5c5c5c !important;
  --graph-node-attachment: #e0ac00 !important;
  --graph-node-focused: hsl(258, 88%, 66%) !important;
  --graph-node-tag: #08b94e !important;
  --graph-node-unresolved: #ababab !important;
  --graph-text: #222222 !important;
  --gray: #5c5c5c !important;
  --h1-letter-spacing: -0.015em !important;
  --h1-line-height: 1.2 !important;
  --h1-size: 1.618em !important;
  --h1-style: normal !important;
  --h1-variant: normal !important;
  --h1-weight: 700 !important;
  --h2-letter-spacing: -0.011em !important;
  --h2-line-height: 1.2 !important;
  --h2-size: 1.462em !important;
  --h2-style: normal !important;
  --h2-variant: normal !important;
  --h2-weight: 680 !important;
  --h3-letter-spacing: -0.008em !important;
  --h3-line-height: 1.3 !important;
  --h3-size: 1.318em !important;
  --h3-style: normal !important;
  --h3-variant: normal !important;
  --h3-weight: 660 !important;
  --h4-letter-spacing: -0.005em !important;
  --h4-line-height: 1.4 !important;
  --h4-size: 1.188em !important;
  --h4-style: normal !important;
  --h4-variant: normal !important;
  --h4-weight: 640 !important;
  --h5-letter-spacing: -0.002em !important;
  --h5-line-height: 1.5 !important;
  --h5-size: 1.076em !important;
  --h5-style: normal !important;
  --h5-variant: normal !important;
  --h5-weight: 620 !important;
  --h6-letter-spacing: 0em !important;
  --h6-line-height: 1.5 !important;
  --h6-size: 1em !important;
  --h6-style: normal !important;
  --h6-variant: normal !important;
  --h6-weight: 600 !important;
  --header-height: 40px !important;
  --headerFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #ababab !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(255, 208, 0, 0.4) !important;
  --highlight-mix-blend-mode: darken !important;
  --hr-color: #e0e0e0 !important;
  --hr-thickness: 2px !important;
  --icon-color: #5c5c5c !important;
  --icon-color-active: hsl(258, 88%, 66%) !important;
  --icon-color-focused: #222222 !important;
  --icon-color-hover: #5c5c5c !important;
  --icon-l: 18px !important;
  --icon-l-stroke-width: 1.75px !important;
  --icon-m: 18px !important;
  --icon-m-stroke-width: 1.75px !important;
  --icon-opacity: 0.85 !important;
  --icon-opacity-active: 1 !important;
  --icon-opacity-hover: 1 !important;
  --icon-s: 16px !important;
  --icon-s-stroke-width: 2px !important;
  --icon-size: 18px !important;
  --icon-stroke: 1.75px !important;
  --icon-xl: 32px !important;
  --icon-xl-stroke-width: 1.25px !important;
  --icon-xs: 14px !important;
  --icon-xs-stroke-width: 2px !important;
  --indent-size: 4 !important;
  --indent-unit: 0.5625em !important;
  --indentation-guide-color: rgba(0, 0, 0, 0.12) !important;
  --indentation-guide-color-active: rgba(0, 0, 0, 0.3) !important;
  --indentation-guide-editing-indent: 0.85em !important;
  --indentation-guide-reading-indent: -0.85em !important;
  --indentation-guide-source-indent: 0.25em !important;
  --indentation-guide-width: 1px !important;
  --indentation-guide-width-active: 1px !important;
  --inline-title-line-height: 1.2 !important;
  --inline-title-margin-bottom: 0.5em !important;
  --inline-title-size: 1.618em !important;
  --inline-title-style: normal !important;
  --inline-title-variant: normal !important;
  --inline-title-weight: 700 !important;
  --input-border-width: 1px !important;
  --input-border-width-focus: 2px !important;
  --input-corner-shape: round !important;
  --input-date-separator: #ababab !important;
  --input-font-weight: 400 !important;
  --input-height: 30px !important;
  --input-icon-inset: 4px !important;
  --input-padding: 4px 8px !important;
  --input-placeholder-color: #ababab !important;
  --input-radius: 5px !important;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --inset-end: right !important;
  --inset-start: left !important;
  --interactive-accent: hsl(257, 88.88%, 70.95%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --interactive-accent-hsl: 258, 88%, 66% !important;
  --interactive-hover: #fafafa !important;
  --interactive-normal: #ffffff !important;
  --keyboard-height: 0px !important;
  --layer-cover: 5 !important;
  --layer-dragged-item: 80 !important;
  --layer-menu: 65 !important;
  --layer-modal: 50 !important;
  --layer-notice: 60 !important;
  --layer-popover: 30 !important;
  --layer-sidedock: 10 !important;
  --layer-slides: 45 !important;
  --layer-status-bar: 15 !important;
  --layer-tooltip: 70 !important;
  --light: #ffffff !important;
  --lightgray: #f6f6f6 !important;
  --line-height-normal: 1.5 !important;
  --line-height-tight: 1.3 !important;
  --link-color: hsl(258, 88%, 66%) !important;
  --link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-decoration: underline !important;
  --link-decoration-hover: underline !important;
  --link-decoration-thickness: auto !important;
  --link-external-color: hsl(258, 88%, 66%) !important;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-external-decoration: underline !important;
  --link-external-decoration-hover: underline !important;
  --link-external-filter: none !important;
  --link-unresolved-color: hsl(258, 88%, 66%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --link-unresolved-decoration-style: solid !important;
  --link-unresolved-filter: none !important;
  --link-unresolved-opacity: 0.7 !important;
  --link-weight: 400 !important;
  --list-bullet-border: none !important;
  --list-bullet-end-padding: 1.3rem !important;
  --list-bullet-radius: 50% !important;
  --list-bullet-size: 0.3em !important;
  --list-bullet-transform: none !important;
  --list-indent: 2.25em !important;
  --list-indent-editing: 0.75em !important;
  --list-indent-source: 0 !important;
  --list-marker-color: #ababab !important;
  --list-marker-color-collapsed: hsl(258, 88%, 66%) !important;
  --list-marker-color-hover: #5c5c5c !important;
  --list-numbered-style: decimal !important;
  --list-spacing: 0.075em !important;
  --loading-icon-delay: 400ms !important;
  --menu-backdrop-filter: none !important;
  --menu-background: #f6f6f6 !important;
  --menu-border-color: #d4d4d4 !important;
  --menu-border-width: 1px !important;
  --menu-corner-shape: round !important;
  --menu-padding: 6px !important;
  --menu-radius: 8px !important;
  --menu-scroll-mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 48px) !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-background: transparent !important;
  --metadata-border-color: #e0e0e0 !important;
  --metadata-border-radius: 0 !important;
  --metadata-border-width: 0 !important;
  --metadata-display-editing: block !important;
  --metadata-display-reading: block !important;
  --metadata-divider-color: #e0e0e0 !important;
  --metadata-divider-color-focus: transparent !important;
  --metadata-divider-color-hover: transparent !important;
  --metadata-divider-width: 0 !important;
  --metadata-gap: 3px !important;
  --metadata-input-background: transparent !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.067) !important;
  --metadata-input-background-hover: transparent !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.875em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-longtext-lines: 3 !important;
  --metadata-input-padding: 4px 8px !important;
  --metadata-input-text-color: #222222 !important;
  --metadata-label-background: transparent !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.067) !important;
  --metadata-label-background-hover: transparent !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.875em !important;
  --metadata-label-text-color: #5c5c5c !important;
  --metadata-label-text-color-hover: #5c5c5c !important;
  --metadata-label-width: 9em !important;
  --metadata-max-width: none !important;
  --metadata-padding: 8px 0 !important;
  --metadata-property-background: transparent !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.067) !important;
  --metadata-property-background-hover: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #bdbdbd !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d4d4d4 !important;
  --metadata-property-corner-shape: round !important;
  --metadata-property-corner-shape-focus: round !important;
  --metadata-property-corner-shape-hover: round !important;
  --metadata-property-padding: 0 !important;
  --metadata-property-radius: 6px !important;
  --metadata-property-radius-focus: 6px !important;
  --metadata-property-radius-hover: 6px !important;
  --metadata-sidebar-input-font-size: 13px !important;
  --metadata-sidebar-label-font-size: 13px !important;
  --modal-background: #ffffff !important;
  --modal-border-color: #bdbdbd !important;
  --modal-border-width: 1px !important;
  --modal-community-sidebar-width: 280px !important;
  --modal-header-height: auto !important;
  --modal-height: 85vh !important;
  --modal-max-height: 1000px !important;
  --modal-max-width: 1100px !important;
  --modal-max-width-narrow: 800px !important;
  --modal-radius: 12px !important;
  --modal-shadow: none !important;
  --modal-width: 90vw !important;
  --mono-rgb-0: 255, 255, 255 !important;
  --mono-rgb-100: 0, 0, 0 !important;
  --nav-collapse-icon-color: #ababab !important;
  --nav-collapse-icon-color-collapsed: #ababab !important;
  --nav-heading-color: #222222 !important;
  --nav-heading-color-collapsed: #ababab !important;
  --nav-heading-color-collapsed-hover: #5c5c5c !important;
  --nav-heading-color-hover: #222222 !important;
  --nav-heading-weight: 500 !important;
  --nav-heading-weight-hover: 500 !important;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.12) !important;
  --nav-indentation-guide-width: 1px !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.067) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.067) !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-children-margin-start: 12px !important;
  --nav-item-children-padding-start: 4px !important;
  --nav-item-color: #5c5c5c !important;
  --nav-item-color-active: #222222 !important;
  --nav-item-color-highlighted: hsl(258, 88%, 66%) !important;
  --nav-item-color-hover: #222222 !important;
  --nav-item-color-selected: #222222 !important;
  --nav-item-margin-bottom: 2px !important;
  --nav-item-padding: 4px 8px 4px 24px !important;
  --nav-item-parent-padding: 4px 8px 4px 24px !important;
  --nav-item-radius: 4px !important;
  --nav-item-size: 13px !important;
  --nav-item-white-space: pre !important;
  --nav-tag-background: transparent !important;
  --nav-tag-color: #ababab !important;
  --nav-tag-color-active: #5c5c5c !important;
  --nav-tag-color-hover: #5c5c5c !important;
  --nav-tag-radius: 4px !important;
  --nav-tag-weight: 600 !important;
  --p-spacing: 1rem !important;
  --p-spacing-empty: 0rem !important;
  --page-border: 9px solid transparent !important;
  --page-margin: 1px auto -8px !important;
  --pdf-background: #ffffff !important;
  --pdf-page-background: #ffffff !important;
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  --pdf-sidebar-background: #ffffff !important;
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.2) !important;
  --pdfViewer-padding-bottom: 0 !important;
  --pill-background: transparent !important;
  --pill-background-hover: transparent !important;
  --pill-border-color: #e0e0e0 !important;
  --pill-border-color-hover: #d4d4d4 !important;
  --pill-border-width: 1px !important;
  --pill-color: #5c5c5c !important;
  --pill-color-hover: #222222 !important;
  --pill-color-remove: #ababab !important;
  --pill-color-remove-hover: hsl(258, 88%, 66%) !important;
  --pill-decoration: none !important;
  --pill-decoration-hover: none !important;
  --pill-focus-left-adjust: -4px !important;
  --pill-focus-width: calc(100% + 6px) !important;
  --pill-padding-x: 0.65em !important;
  --pill-padding-y: 0.25em !important;
  --pill-radius: 2em !important;
  --popover-font-size: 16px !important;
  --popover-height: 400px !important;
  --popover-max-height: 95vh !important;
  --popover-pdf-height: 400px !important;
  --popover-pdf-width: 450px !important;
  --popover-width: 450px !important;
  --preferred-text-scale: 1 !important;
  --prompt-backdrop-filter: none !important;
  --prompt-background: #ffffff !important;
  --prompt-border-color: #bdbdbd !important;
  --prompt-border-width: 1px !important;
  --prompt-input-height: 40px !important;
  --prompt-max-height: 70vh !important;
  --prompt-max-width: 80vw !important;
  --prompt-width: 700px !important;
  --radius-l: 12px !important;
  --radius-m: 8px !important;
  --radius-s: 4px !important;
  --radius-xl: 16px !important;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent)) !important;
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15) !important;
  --raised-mask: linear-gradient(white, white) padding-box, linear-gradient(white, white) border-box !important;
  --raised-mask-background: linear-gradient(to bottom left, white, transparent, white) border-box no-repeat !important;
  --raised-mask-border-width: 0 !important;
  --raised-mask-composite: exclude, add !important;
  --raised-mask-display: block !important;
  --raised-shadow: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent !important;
  --ribbon-background: #f6f6f6 !important;
  --ribbon-background-collapsed: #ffffff !important;
  --ribbon-padding: 8px 4px 12px !important;
  --ribbon-width: 44px !important;
  --safe-area-inset-bottom: 0px !important;
  --safe-area-inset-left: 0px !important;
  --safe-area-inset-right: 0px !important;
  --safe-area-inset-top: 0px !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0.05) !important;
  --scrollbar-border-width: 3px 3px 3px 2px !important;
  --scrollbar-height: 12px !important;
  --scrollbar-radius: 12px !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1) !important;
  --scrollbar-width: 12px !important;
  --search-clear-button-color: #5c5c5c !important;
  --search-clear-button-size: 13px !important;
  --search-icon-color: #5c5c5c !important;
  --search-icon-size: 18px !important;
  --search-result-background: #ffffff !important;
  --secondary: hsl(258, 88%, 66%) !important;
  --setting-group-heading-color: #222222 !important;
  --setting-group-heading-size: 15px !important;
  --setting-group-heading-weight: 600 !important;
  --setting-items-background: #fafafa !important;
  --setting-items-border-color: #e0e0e0 !important;
  --setting-items-border-width: 0 !important;
  --setting-items-padding: 20px !important;
  --setting-items-radius: 12px !important;
  --shadow-edges: 0 0 transparent !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 15px 30px rgba(0, 0, 0, 0.1) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --shadow-xs: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent !important;
  --sidebar-left-toggle-inner-width: 8.33% !important;
  --sidebar-left-toggle-inner-width-open: 24% !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --sidebar-right-toggle-inner-width: 8.33% !important;
  --sidebar-right-toggle-inner-width-open: 24% !important;
  --sidebar-tab-text-display: none !important;
  --size-2-1: 2px !important;
  --size-2-2: 4px !important;
  --size-2-3: 6px !important;
  --size-4-1: 4px !important;
  --size-4-10: 40px !important;
  --size-4-12: 48px !important;
  --size-4-16: 64px !important;
  --size-4-18: 72px !important;
  --size-4-2: 8px !important;
  --size-4-3: 12px !important;
  --size-4-4: 16px !important;
  --size-4-5: 20px !important;
  --size-4-6: 24px !important;
  --size-4-8: 32px !important;
  --size-4-9: 36px !important;
  --slider-s-thumb-position: -5px !important;
  --slider-s-thumb-size: 15px !important;
  --slider-thumb-border-color: #d4d4d4 !important;
  --slider-thumb-border-width: 1px !important;
  --slider-thumb-height: 18px !important;
  --slider-thumb-radius: 18px !important;
  --slider-thumb-width: 18px !important;
  --slider-thumb-y: -6px !important;
  --slider-track-background: #e0e0e0 !important;
  --slider-track-height: 3px !important;
  --spreadHorizontalWrapped-margin-LR: -3.5px !important;
  --status-bar-background: #f6f6f6 !important;
  --status-bar-border-color: #e0e0e0 !important;
  --status-bar-border-width: 1px 0 0 1px !important;
  --status-bar-font-size: 12px !important;
  --status-bar-position: fixed !important;
  --status-bar-radius: 8px 0 0 0 !important;
  --status-bar-text-color: #5c5c5c !important;
  --suggestion-backdrop-filter: none !important;
  --suggestion-background: #ffffff !important;
  --swatch-height: 22px !important;
  --swatch-radius: 14px !important;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15) !important;
  --swatch-width: 22px !important;
  --sync-avatar-color-1: #e93147 !important;
  --sync-avatar-color-2: #ec7500 !important;
  --sync-avatar-color-3: #e0ac00 !important;
  --sync-avatar-color-4: #08b94e !important;
  --sync-avatar-color-5: #00bfbc !important;
  --sync-avatar-color-6: #086ddd !important;
  --sync-avatar-color-7: #7852ee !important;
  --sync-avatar-color-8: #d53984 !important;
  --sync-avatar-color-current-user: transparent !important;
  --tab-background-active: #ffffff !important;
  --tab-container-background: #f6f6f6 !important;
  --tab-curve: 6px !important;
  --tab-divider-color: #d4d4d4 !important;
  --tab-font-size: 13px !important;
  --tab-max-width: 320px !important;
  --tab-outline-color: #e0e0e0 !important;
  --tab-outline-width: 1px !important;
  --tab-radius: 4px !important;
  --tab-radius-active: 6px 6px 0 0 !important;
  --tab-stacked-font-size: 13px !important;
  --tab-stacked-font-weight: 400 !important;
  --tab-stacked-header-width: 40px !important;
  --tab-stacked-pane-width: 700px !important;
  --tab-stacked-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.05) !important;
  --tab-stacked-text-align: start !important;
  --tab-stacked-text-transform: rotate(0deg) !important;
  --tab-stacked-text-writing-mode: vertical-lr !important;
  --tab-switcher-background: #f6f6f6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent) !important;
  --tab-switcher-preview-background-shadow: 0 4px 30px 2px rgba(0, 0, 0, 0.2) !important;
  --tab-switcher-preview-radius: 16px !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color: #ababab !important;
  --tab-text-color-active: #5c5c5c !important;
  --tab-text-color-focused: #5c5c5c !important;
  --tab-text-color-focused-active: #5c5c5c !important;
  --tab-text-color-focused-active-current: #222222 !important;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%) !important;
  --tab-width: 200px !important;
  --table-add-button-background: transparent !important;
  --table-add-button-border-color: #e0e0e0 !important;
  --table-add-button-border-width: 1px !important;
  --table-background: transparent !important;
  --table-border-color: #e0e0e0 !important;
  --table-border-width: 1px !important;
  --table-cell-vertical-alignment: top !important;
  --table-column-alt-background: transparent !important;
  --table-column-first-border-width: 1px !important;
  --table-column-last-border-width: 1px !important;
  --table-column-max-width: none !important;
  --table-column-min-width: 6ch !important;
  --table-drag-handle-background: transparent !important;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%) !important;
  --table-drag-handle-color: #ababab !important;
  --table-drag-handle-color-active: white !important;
  --table-drop-indicator-half-width: 2px !important;
  --table-header-background: transparent !important;
  --table-header-border-color: #e0e0e0 !important;
  --table-header-border-width: 1px !important;
  --table-header-color: #222222 !important;
  --table-header-size: 16px !important;
  --table-header-weight: 600 !important;
  --table-line-height: 1.3 !important;
  --table-row-alt-background: transparent !important;
  --table-row-alt-background-hover: transparent !important;
  --table-row-background-hover: transparent !important;
  --table-row-last-border-width: 1px !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-blend-mode: darken !important;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%) !important;
  --table-selection-border-radius: 4px !important;
  --table-selection-border-width: 2px !important;
  --table-text-size: 16px !important;
  --table-white-space: break-spaces !important;
  --tag-background: hsla(258, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-width: 0px !important;
  --tag-color: hsl(258, 88%, 66%) !important;
  --tag-color-hover: hsl(258, 88%, 66%) !important;
  --tag-corner-shape: round !important;
  --tag-decoration: none !important;
  --tag-decoration-hover: none !important;
  --tag-padding-x: 0.65em !important;
  --tag-padding-y: 0.25em !important;
  --tag-radius: 2em !important;
  --tag-size: 0.875em !important;
  --tertiary: hsl(255, 89.76%, 75.9%) !important;
  --text-accent: hsl(258, 88%, 66%) !important;
  --text-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --text-error: #e93147 !important;
  --text-faint: #ababab !important;
  --text-highlight-bg: rgba(255, 208, 0, 0.4) !important;
  --text-highlight-bg-rgb: 255, 208, 0 !important;
  --text-muted: #5c5c5c !important;
  --text-normal: #222222 !important;
  --text-on-accent: white !important;
  --text-on-accent-inverted: black !important;
  --text-selection: hsla(258, 88%, 66%, 0.2) !important;
  --text-success: #08b94e !important;
  --text-warning: #ec7500 !important;
  --textHighlight: rgba(255, 208, 0, 0.4) !important;
  --titleFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #f6f6f6 !important;
  --titlebar-background-focused: #fcfcfc !important;
  --titlebar-border-color: #e0e0e0 !important;
  --titlebar-border-width: 0px !important;
  --titlebar-height: 30px !important;
  --titlebar-text-color: #5c5c5c !important;
  --titlebar-text-color-focused: #222222 !important;
  --titlebar-text-weight: 700 !important;
  --toggle-border-width: 2px !important;
  --toggle-radius: 18px !important;
  --toggle-s-border-width: 2px !important;
  --toggle-s-thumb-height: 15px !important;
  --toggle-s-thumb-width: 15px !important;
  --toggle-s-width: 34px !important;
  --toggle-thumb-color: white !important;
  --toggle-thumb-height: 18px !important;
  --toggle-thumb-radius: 18px !important;
  --toggle-thumb-width: 18px !important;
  --toggle-width: 40px !important;
  --touch-radius-l: 52px !important;
  --touch-radius-m: 44px !important;
  --touch-radius-s: 40px !important;
  --touch-radius-xl: 60px !important;
  --touch-radius-xs: 30px !important;
  --touch-radius-xxs: 24px !important;
  --touch-size-l: 52px !important;
  --touch-size-m: 44px !important;
  --touch-size-s: 40px !important;
  --touch-size-xl: 60px !important;
  --touch-size-xs: 30px !important;
  --touch-size-xxs: 24px !important;
  --traffic-lights-offset-x: 40px !important;
  --traffic-lights-offset-y: 40px !important;
  --vault-profile-actions-display: flex !important;
  --vault-profile-color: #222222 !important;
  --vault-profile-color-hover: #222222 !important;
  --vault-profile-display: flex !important;
  --vault-profile-font-size: 13px !important;
  --vault-profile-font-weight: 500 !important;
  --vault-profile-order: 2 !important;
  --viewer-container-height: 0 !important;
  --workspace-background-translucent: rgba(255, 255, 255, 0.6) !important;
  --xfa-focus-outline: auto !important;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --zoom-factor: 1 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 246, 246);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(224, 224, 224);
  color: rgb(34, 34, 34);
  font-weight: 600;
}

html[saved-theme="light"] body .canvas-node {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(34, 34, 34);
  border-radius: 0px;
  border-width: 0px;
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .canvas-node-group {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(34, 34, 34);
  border-width: 0px;
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 255, 255);
  border-color: rgb(34, 34, 34);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.05) 0px 2px 3px 0px, rgba(0, 0, 0, 0.03) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="light"] body .note-properties {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(224, 224, 224);
  border-radius: 0px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(92, 92, 92);
  font-weight: 400;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(92, 92, 92);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(138, 92, 245, 0.1);
  border-radius: 28px;
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(92, 92, 92);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 246, 246);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 246, 246);
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="light"] body .text-highlight {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(255, 208, 0, 0.4);
  color: rgb(34, 34, 34);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="light"] body del {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  cursor: grab;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: line-through;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-line: line-through;
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="light"] body footer {
  opacity: 1;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(34, 34, 34);
  font-size: 13px;
  font-weight: 400;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(171, 171, 171);
  border-radius: 4px;
  border-width: 1px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(152, 115, 247);
  border-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body p {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(92, 92, 92) none 0px;
  text-decoration-color: rgb(92, 92, 92);
  text-decoration-style: solid;
  transition: all;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(138, 92, 245);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(138, 92, 245);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(138, 92, 245);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(138, 92, 245);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}

html[saved-theme="light"] body a.internal.broken {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(138, 92, 245);
  cursor: pointer;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgba(138, 92, 245, 0.3);
  text-decoration-color: rgba(138, 92, 245, 0.3);
  text-decoration-line: underline;
  text-decoration-style: solid;
  transition: opacity 0.14s ease-in-out;
  user-select: text;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(34, 34, 34);
  margin-bottom: 0px;
  margin-left: 40px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body dl {
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
}

html[saved-theme="light"] body dt {
  color: rgb(34, 34, 34);
  font-weight: 400;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ol > li {
  color: rgb(34, 34, 34);
  text-align: start;
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(34, 34, 34);
  text-align: start;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(0, 0, 0, 0);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .table-container {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  width: 225.219px;
}

html[saved-theme="light"] body tbody {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body td {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
  font-weight: 400;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  text-align: start;
  vertical-align: top;
}

html[saved-theme="light"] body th {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  text-align: start;
  vertical-align: top;
}

html[saved-theme="light"] body thead {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body tr {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: monospace;
}

html[saved-theme="light"] body pre > code > [data-line] {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(224, 172, 0);
  border-left-width: 0px;
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 172, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 172, 0);
  border-left-width: 0px;
  border-right-color: rgb(224, 172, 0);
  border-right-width: 0px;
  border-top-color: rgb(224, 172, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}`,
    images: `html[saved-theme="light"] body audio {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: start;
}

html[saved-theme="light"] body figure {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 16px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: start;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-radius: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .footnotes {
  background-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(152, 115, 247);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex > .katex-html {
  font-family: MJXZERO, MJXTEX;
}

html[saved-theme="light"] body .katex-display > .katex {
  display: block;
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: center;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(171, 171, 171);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(171, 171, 171);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(171, 171, 171);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-bottom: 0px;
  margin-left: -24px;
  margin-right: 8px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  position: relative;
  transition: box-shadow 0.15s ease-in-out;
  width: 16px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(34, 34, 34);
  text-decoration: none;
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body ul > li.task-list-item {
  display: list-item;
  text-align: start;
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate%2528-4.000000, -6.000000%2529\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 0px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 0px;
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(8, 109, 221);
  gap: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
  font-weight: 600;
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 191, 188, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(0, 191, 188, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(0, 191, 188, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 49, 71, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 49, 71, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 49, 71, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 49, 71, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 49, 71, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 49, 71, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.1);
  border-bottom-color: rgba(120, 82, 238, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(120, 82, 238, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(120, 82, 238, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(120, 82, 238, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 49, 71, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 49, 71, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 49, 71, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(236, 117, 0, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(236, 117, 0, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(236, 117, 0, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.1);
  border-bottom-color: rgba(158, 158, 158, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(158, 158, 158, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(158, 158, 158, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(158, 158, 158, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 185, 78, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 185, 78, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 185, 78, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 191, 188, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(0, 191, 188, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(0, 191, 188, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(236, 117, 0, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(236, 117, 0, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(236, 117, 0, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
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
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(189, 189, 189);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(189, 189, 189);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(189, 189, 189);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.1) 0px 15px 30px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  animation-delay: 0s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-timing-function: ease;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
  outline: rgb(34, 34, 34) none 0px;
  text-decoration-color: rgb(34, 34, 34);
  text-decoration-style: solid;
  transition: all;
  user-select: text;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.067);
  color: rgb(34, 34, 34);
  font-weight: 400;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(189, 189, 189);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(189, 189, 189);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(189, 189, 189);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(246, 246, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.067);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.067);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgba(138, 92, 245, 0.15);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(138, 92, 245, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(138, 92, 245, 0.15);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(138, 92, 245, 0.15);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-style: solid;
  border-top-width: 0px;
  display: flex;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body h1 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `html[saved-theme="light"] body .explorer {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0.12);
  border-left-style: solid;
  border-left-width: 1px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 400;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  cursor: default;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(92, 92, 92);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(34, 34, 34);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(92, 92, 92);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(92, 92, 92);
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  cursor: default;
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(92, 92, 92);
  stroke: rgb(92, 92, 92);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(171, 171, 171);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .metadata {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 32px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .metadata-properties {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(34, 34, 34);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(34, 34, 34);
  text-decoration: underline dotted;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body details {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(92, 92, 92);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 14px;
  padding-bottom: 1.4px;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 1.4px;
}

html[saved-theme="light"] body progress {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(34, 34, 34);
  font-size: 13.3333px;
  vertical-align: sub;
}

html[saved-theme="light"] body summary {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
  font-weight: 400;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body sup {
  color: rgb(34, 34, 34);
  font-size: 13.3333px;
  vertical-align: super;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgba(138, 92, 245, 0.15);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(138, 92, 245, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(138, 92, 245, 0.15);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(138, 92, 245, 0.15);
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(138, 92, 245);
}`,
  },
};
