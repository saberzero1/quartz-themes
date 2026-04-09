import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "notation-2",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lyons-serif", "ia-writer-duospace"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --L0: 0% !important;
  --L1: 20% !important;
  --L2: 23% !important;
  --L3: 26% !important;
  --accent-h: 210 !important;
  --accent-l: 51% !important;
  --accent-s: 77% !important;
  --background-accent: hsl(203, 8%, 0%) !important;
  --background-modifier-active-hover: hsla(210, 77%, 51%, 0.1) !important;
  --background-modifier-border: rgba(255, 255, 255, 0.14) !important;
  --background-modifier-border-focus: #535353 !important;
  --background-modifier-border-hover: #363636 !important;
  --background-modifier-error: rgb(255, 115, 105) !important;
  --background-modifier-error-hover: rgb(255, 115, 105) !important;
  --background-modifier-error-rgb: 89, 65, 65 !important;
  --background-modifier-form-field: #21201e !important;
  --background-modifier-form-field-hover: #21201e !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.04) !important;
  --background-modifier-success: rgb(77, 171, 154) !important;
  --background-modifier-success-rgb: 53, 76, 75 !important;
  --background-primary: hsl(203, 8%, 20%) !important;
  --background-primary-alt: hsl(203, 8%, 26%) !important;
  --background-secondary: hsl(203, 8%, 23%) !important;
  --background-secondary-alt: hsl(203, 8%, 26%) !important;
  --banner-size: 220px !important;
  --bases-cards-background: hsl(203, 8%, 20%) !important;
  --bases-cards-cover-background: hsl(203, 8%, 26%) !important;
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #363636 !important;
  --bases-embed-border-color: rgba(255, 255, 255, 0.14) !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.7) !important;
  --bases-group-heading-property-size: 0.9em !important;
  --bases-table-border-color: rgba(255, 255, 255, 0.14) !important;
  --bases-table-cell-background-active: hsl(203, 8%, 20%) !important;
  --bases-table-cell-background-disabled: hsl(203, 8%, 26%) !important;
  --bases-table-cell-background-selected: hsla(210, 77%, 51%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #535353 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: hsl(203, 8%, 26%) !important;
  --bases-table-header-background: hsl(203, 8%, 20%) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.04) !important;
  --bases-table-header-color: rgba(255, 255, 255, 0.7) !important;
  --bases-table-summary-background: hsl(203, 8%, 20%) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.04) !important;
  --blockquote-border-color: rgba(255, 255, 255, 0.9) !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --callout-bug: 89, 65, 65;
  --callout-default: 54, 73, 84;
  --callout-error: 89, 65, 65;
  --callout-example: 68, 63, 87;
  --callout-fail: 89, 65, 65;
  --callout-important: 29, 40, 46;
  --callout-info: 54, 73, 84;
  --callout-question: 89, 74, 58;
  --callout-radius: 3px;
  --callout-success: 53, 76, 75;
  --callout-summary: 29, 40, 46;
  --callout-tip: 29, 40, 46;
  --callout-todo: 54, 73, 84;
  --callout-warning: 89, 74, 58;
  --canvas-background: hsl(203, 8%, 20%) !important;
  --canvas-card-label-color: rgba(255, 255, 255, 0.55) !important;
  --canvas-color-1: 89, 65, 65 !important;
  --canvas-color-2: 89, 74, 58 !important;
  --canvas-color-3: 89, 86, 59 !important;
  --canvas-color-4: 53, 76, 75 !important;
  --canvas-color-5: 29, 40, 46 !important;
  --canvas-color-6: 68, 63, 87 !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: #21201e !important;
  --caret-color: rgba(255, 255, 255, 0.9) !important;
  --checkbox-border-color: rgba(255, 255, 255, 0.55) !important;
  --checkbox-border-color-hover: rgba(255, 255, 255, 0.7) !important;
  --checkbox-color: rgb(46, 170, 220) !important;
  --checkbox-color-hover: rgba(46, 170, 220, 0.8) !important;
  --checkbox-marker-color: hsl(203, 8%, 20%) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: rgba(255, 255, 255, 0.7) !important;
  --clickable-icon-radius: 3px !important;
  --code: #EB5757 !important;
  --code-background: hsl(0, 1%, 70%, 14%) !important;
  --code-border-color: rgba(255, 255, 255, 0.14) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.04) !important;
  --code-comment: rgba(255, 255, 255, 0.55) !important;
  --code-function: rgb(255, 220, 73) !important;
  --code-important: rgb(255, 163, 68) !important;
  --code-keyword: rgb(226, 85, 161) !important;
  --code-normal: rgba(255, 255, 255, 0.9) !important;
  --code-operator: rgb(255, 115, 105) !important;
  --code-property: rgb(51, 126, 169) !important;
  --code-punctuation: rgba(255, 255, 255, 0.7) !important;
  --code-radius: 3px !important;
  --code-string: rgb(77, 171, 154) !important;
  --code-tag: rgb(255, 115, 105) !important;
  --code-value: rgb(154, 109, 215) !important;
  --codeFont: iA Writer Duospace, Nitti, Menlo, Courier, monospace !important;
  --collapse-icon-color: rgba(255, 255, 255, 0.55) !important;
  --collapse-icon-color-collapsed: rgba(255, 255, 255, 0.45) !important;
  --color-accent: hsl(210, 77%, 51%) !important;
  --color-accent-1: hsl(207, 78.54%, 58.65%) !important;
  --color-accent-2: hsl(205, 80.85%, 65.79%) !important;
  --color-accent-hsl: 210, 77%, 51% !important;
  --color-base-00: #191919 !important;
  --color-base-10: rgb(32, 32, 32) !important;
  --color-base-20: rgb(32, 32, 32) !important;
  --color-base-25: #21201e !important;
  --color-base-30: #21201e !important;
  --color-base-35: #363636 !important;
  --color-base-40: #535353 !important;
  --color-base-50: #707070 !important;
  --color-base-60: #5d5d5d !important;
  --color-base-70: #a0a0a0 !important;
  --color-blue: rgb(82, 156, 202) !important;
  --color-blue-rgb: 54, 73, 84 !important;
  --color-brown: rgb(147, 114, 100) !important;
  --color-brown-rgb: 67, 64, 64 !important;
  --color-cyan: rgb(51, 126, 169) !important;
  --color-cyan-rgb: 29, 40, 46 !important;
  --color-gray: rgba(255, 255, 255, 0.6) !important;
  --color-gray-rgb: 69, 75, 78 !important;
  --color-green: rgb(77, 171, 154) !important;
  --color-green-rgb: 53, 76, 75 !important;
  --color-orange: rgb(255, 163, 68) !important;
  --color-orange-rgb: 89, 74, 58 !important;
  --color-pink: rgb(226, 85, 161) !important;
  --color-pink-rgb: 83, 59, 76 !important;
  --color-purple: rgb(154, 109, 215) !important;
  --color-purple-rgb: 68, 63, 87 !important;
  --color-red: rgb(255, 115, 105) !important;
  --color-red-rgb: 89, 65, 65 !important;
  --color-yellow: rgb(255, 220, 73) !important;
  --color-yellow-rgb: 89, 86, 59 !important;
  --custom-line-height: 1.5em !important;
  --dark: rgba(255, 255, 255, 0.9) !important;
  --darkgray: rgba(255, 255, 255, 0.9) !important;
  --divider-color: rgba(255, 255, 255, 0.14) !important;
  --divider-color-hover: rgb(46, 170, 220) !important;
  --divider-width: 0.05em !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --embed-border-start: 2px solid rgb(46, 170, 220) !important;
  --file-header-background: hsl(203, 8%, 20%) !important;
  --file-header-background-focused: hsl(203, 8%, 20%) !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --file-header-font-size: 0.95em !important;
  --flair-background: #2a2a2a !important;
  --flair-color: rgba(255, 255, 255, 0.9) !important;
  --font-bold: 500 !important;
  --font-default: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-monospace: iA Writer Duospace, Nitti, Menlo, Courier, monospace !important;
  --font-monospace-default: 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace !important;
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-ui-large: 1.15em !important;
  --font-ui-medium: 0.97em !important;
  --font-ui-small: 0.95em !important;
  --font-ui-smaller: 0.9em !important;
  --footnote-divider-color: rgba(255, 255, 255, 0.14) !important;
  --footnote-id-color: rgba(255, 255, 255, 0.7) !important;
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.55) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.04) !important;
  --footnote-radius: 3px !important;
  --graph-line: rgba(255, 255, 255, 0.14) !important;
  --graph-node: rgb(82, 156, 202) !important;
  --graph-node-attachment: rgb(255, 220, 73) !important;
  --graph-node-focused: rgb(46, 170, 220) !important;
  --graph-node-tag: rgb(77, 171, 154) !important;
  --graph-node-unresolved: rgb(51, 126, 169) !important;
  --graph-text: rgba(255, 255, 255, 0.9) !important;
  --gray: rgba(255, 255, 255, 0.7) !important;
  --h-bg: transparent !important;
  --h-color: rgba(255, 255, 255, 0.9) !important;
  --h1-bg: transparent !important;
  --h1-color: rgba(255, 255, 255, 0.9) !important;
  --h1-size: 1.875em !important;
  --h1-weight: 600 !important;
  --h2-bg: transparent !important;
  --h2-color: rgba(255, 255, 255, 0.9) !important;
  --h2-size: 1.5em !important;
  --h2-weight: 600 !important;
  --h3-bg: transparent !important;
  --h3-color: rgba(255, 255, 255, 0.9) !important;
  --h3-size: 1.25em !important;
  --h3-weight: 600 !important;
  --h4-bg: transparent !important;
  --h4-color: rgba(255, 255, 255, 0.9) !important;
  --h4-weight: 600 !important;
  --h5-bg: transparent !important;
  --h5-color: rgba(255, 255, 255, 0.9) !important;
  --h5-weight: 600 !important;
  --h6-bg: transparent !important;
  --h6-color: rgba(255, 255, 255, 0.9) !important;
  --headerFont: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --heading-formatting: rgba(255, 255, 255, 0.55) !important;
  --highlight: rgb(89, 86, 59) !important;
  --hr-color: rgba(255, 255, 255, 0.14) !important;
  --hue: 203 !important;
  --icon-color: rgba(255, 255, 255, 0.7) !important;
  --icon-color-active: rgba(255, 255, 255, 0.45) !important;
  --icon-color-focused: rgba(255, 255, 255, 0.9) !important;
  --icon-color-hover: rgba(255, 255, 255, 0.7) !important;
  --indentation-guide-color: transparent !important;
  --inline-title-color: rgba(255, 255, 255, 0.9) !important;
  --inline-title-size: 1.875em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgba(255, 255, 255, 0.55) !important;
  --input-placeholder-color: rgba(255, 255, 255, 0.55) !important;
  --interactive-accent: rgb(46, 170, 220) !important;
  --interactive-accent-hover: rgba(46, 170, 220, 0.8) !important;
  --interactive-accent-hsl: 210, 77%, 51% !important;
  --interactive-accent-rgb: 46, 170, 220 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --light: hsl(203, 8%, 20%) !important;
  --lightgray: hsl(203, 8%, 23%) !important;
  --link-color: rgba(255, 255, 255, 0.45) !important;
  --link-color-hover: rgba(255, 255, 255, 0.7) !important;
  --link-external-color: rgba(255, 255, 255, 0.45) !important;
  --link-external-color-hover: rgba(255, 255, 255, 0.45) !important;
  --link-unresolved-color: rgba(255, 255, 255, 0.45) !important;
  --link-unresolved-decoration-color: hsla(210, 77%, 51%, 0.3) !important;
  --list-bullet-size: 0.37em !important;
  --list-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgba(255, 255, 255, 0.9) !important;
  --list-marker-color-collapsed: rgba(255, 255, 255, 0.45) !important;
  --list-marker-color-hover: rgba(255, 255, 255, 0.9) !important;
  --list-menu-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 25 25' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --list-spacing: 0.3em !important;
  --menu-background: hsl(203, 8%, 23%) !important;
  --menu-border-color: #363636 !important;
  --metadata-border-color: rgba(255, 255, 255, 0.14) !important;
  --metadata-divider-color: rgba(255, 255, 255, 0.14) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-input-text-color: rgba(255, 255, 255, 0.9) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-label-text-color: rgba(255, 255, 255, 0.7) !important;
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.7) !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #535353 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636 !important;
  --metadata-sidebar-input-font-size: 0.95em !important;
  --metadata-sidebar-label-font-size: 0.95em !important;
  --modal-background: hsl(203, 8%, 20%) !important;
  --modal-border-color: #535353 !important;
  --modal-height: calc(100vh - 100px) !important;
  --modal-max-height: 715px !important;
  --modal-max-width: calc(100vw - 100px) !important;
  --nav-collapse-icon-color: rgba(255, 255, 255, 0.55) !important;
  --nav-collapse-icon-color-collapsed: rgba(255, 255, 255, 0.55) !important;
  --nav-heading-color: rgba(255, 255, 255, 0.9) !important;
  --nav-heading-color-collapsed: rgba(255, 255, 255, 0.55) !important;
  --nav-heading-color-collapsed-hover: rgba(255, 255, 255, 0.7) !important;
  --nav-heading-color-hover: rgba(255, 255, 255, 0.9) !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.04) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.04) !important;
  --nav-item-background-selected: hsla(210, 77%, 51%, 0.15) !important;
  --nav-item-color: rgba(255, 255, 255, 0.7) !important;
  --nav-item-color-active: rgba(255, 255, 255, 0.9) !important;
  --nav-item-color-highlighted: rgba(255, 255, 255, 0.45) !important;
  --nav-item-color-hover: rgba(255, 255, 255, 0.9) !important;
  --nav-item-color-selected: rgba(255, 255, 255, 0.9) !important;
  --nav-item-radius: 3px !important;
  --nav-item-size: 0.95em !important;
  --nav-tag-color: rgba(255, 255, 255, 0.55) !important;
  --nav-tag-color-active: rgba(255, 255, 255, 0.7) !important;
  --nav-tag-color-hover: rgba(255, 255, 255, 0.7) !important;
  --nav-tag-radius: 3px !important;
  --number-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='9' x2='20' y2='9'%3E%3C/line%3E%3Cline x1='4' y1='15' x2='20' y2='15'%3E%3C/line%3E%3Cline x1='10' y1='3' x2='8' y2='21'%3E%3C/line%3E%3Cline x1='16' y1='3' x2='14' y2='21'%3E%3C/line%3E%3C/svg%3E") !important;
  --opacity-translucency: 0.7 !important;
  --pdf-background: hsl(203, 8%, 20%) !important;
  --pdf-page-background: hsl(203, 8%, 20%) !important;
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --pdf-sidebar-background: hsl(203, 8%, 20%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --pill-border-color: rgba(255, 255, 255, 0.14) !important;
  --pill-border-color-hover: #363636 !important;
  --pill-color: rgba(255, 255, 255, 0.7) !important;
  --pill-color-hover: rgba(255, 255, 255, 0.9) !important;
  --pill-color-remove: rgba(255, 255, 255, 0.55) !important;
  --pill-color-remove-hover: rgba(255, 255, 255, 0.45) !important;
  --prompt-background: hsl(203, 8%, 20%) !important;
  --prompt-border-color: #535353 !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: hsl(203, 8%, 23%) !important;
  --ribbon-background-collapsed: hsl(203, 8%, 20%) !important;
  --sat: 8% !important;
  --search-clear-button-color: rgba(255, 255, 255, 0.7) !important;
  --search-icon-color: rgba(255, 255, 255, 0.7) !important;
  --search-result-background: hsl(203, 8%, 20%) !important;
  --secondary: rgba(255, 255, 255, 0.45) !important;
  --setting-group-heading-color: rgba(255, 255, 255, 0.9) !important;
  --setting-group-heading-size: 0.97em !important;
  --setting-items-background: hsl(203, 8%, 26%) !important;
  --setting-items-border-color: rgba(255, 255, 255, 0.14) !important;
  --slider-thumb-border-color: #363636 !important;
  --slider-track-background: rgba(255, 255, 255, 0.14) !important;
  --status-bar-background: hsl(203, 8%, 23%) !important;
  --status-bar-border-color: rgba(255, 255, 255, 0.14) !important;
  --status-bar-font-size: 0.9em !important;
  --status-bar-text-color: rgba(255, 255, 255, 0.7) !important;
  --status-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E") !important;
  --suggestion-background: hsl(203, 8%, 20%) !important;
  --sync-avatar-color-1: rgb(255, 115, 105) !important;
  --sync-avatar-color-2: rgb(255, 163, 68) !important;
  --sync-avatar-color-3: rgb(255, 220, 73) !important;
  --sync-avatar-color-4: rgb(77, 171, 154) !important;
  --sync-avatar-color-5: rgb(51, 126, 169) !important;
  --sync-avatar-color-6: rgb(82, 156, 202) !important;
  --sync-avatar-color-7: rgb(154, 109, 215) !important;
  --sync-avatar-color-8: rgb(226, 85, 161) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: hsl(203, 8%, 23%) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: #363636 !important;
  --tab-font-size: 0.95em !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 3px !important;
  --tab-stacked-font-size: 0.95em !important;
  --tab-switcher-background: hsl(203, 8%, 23%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(203, 8%, 23%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 77%, 51%) !important;
  --tab-text-color: rgba(255, 255, 255, 0.55) !important;
  --tab-text-color-active: rgba(255, 255, 255, 0.7) !important;
  --tab-text-color-focused: rgba(255, 255, 255, 0.7) !important;
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.7) !important;
  --tab-text-color-focused-active-current: rgba(255, 255, 255, 0.9) !important;
  --tab-text-color-focused-highlighted: rgba(255, 255, 255, 0.45) !important;
  --table-add-button-border-color: rgba(255, 255, 255, 0.14) !important;
  --table-border-color: rgba(255, 255, 255, 0.14) !important;
  --table-drag-handle-background-active: rgb(46, 170, 220) !important;
  --table-drag-handle-color: rgba(255, 255, 255, 0.55) !important;
  --table-drag-handle-color-active: rgba(255, 255, 255, 0.9) !important;
  --table-header-background: rgba(69, 75, 78, 0.5) !important;
  --table-header-background-hover: rgba(69, 75, 78, 0.5) !important;
  --table-header-border-color: rgba(255, 255, 255, 0.14) !important;
  --table-header-color: rgba(255, 255, 255, 0.9) !important;
  --table-selection: hsla(210, 77%, 51%, 0.1) !important;
  --table-selection-border-color: rgb(46, 170, 220) !important;
  --tag-1-default: rgb(137, 99, 42) !important;
  --tag-10-default: rgb(55, 55, 55) !important;
  --tag-2-default: rgb(43, 89, 63) !important;
  --tag-3-default: rgb(40, 69, 108) !important;
  --tag-4-default: rgb(73, 47, 100) !important;
  --tag-5-default: rgb(105, 49, 76) !important;
  --tag-6-default: rgb(110, 54, 48) !important;
  --tag-7-default: rgb(133, 76, 29) !important;
  --tag-8-default: rgb(90, 90, 90) !important;
  --tag-9-default: rgb(96, 59, 44) !important;
  --tag-background: hsla(210, 77%, 51%, 0.1) !important;
  --tag-background-hover: hsla(210, 77%, 51%, 0.2) !important;
  --tag-border-color: hsla(210, 77%, 51%, 0.15) !important;
  --tag-border-color-hover: hsla(210, 77%, 51%, 0.15) !important;
  --tag-color: rgba(255, 255, 255, 0.9) !important;
  --tag-color-hover: rgba(255, 255, 255, 0.45) !important;
  --tag-radius: 3px !important;
  --tertiary: rgba(255, 255, 255, 0.45) !important;
  --text-accent: rgba(255, 255, 255, 0.45) !important;
  --text-accent-hover: rgba(255, 255, 255, 0.45) !important;
  --text-error: rgb(255, 115, 105) !important;
  --text-faint: rgba(255, 255, 255, 0.55) !important;
  --text-highlight-bg: rgb(89, 86, 59) !important;
  --text-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='21' y1='6' x2='3' y2='6'%3E%3C/line%3E%3Cline x1='15' y1='12' x2='3' y2='12'%3E%3C/line%3E%3Cline x1='17' y1='18' x2='3' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --text-muted: rgba(255, 255, 255, 0.7) !important;
  --text-normal: rgba(255, 255, 255, 0.9) !important;
  --text-on-accent: rgba(255, 255, 255, 0.9) !important;
  --text-rgb: 255, 255, 255 !important;
  --text-selection: hsla(211, 100%, 50%, 0.2) !important;
  --text-success: rgb(77, 171, 154) !important;
  --text-warning: rgb(255, 163, 68) !important;
  --textHighlight: rgb(89, 86, 59) !important;
  --titleFont: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --titlebar-background: hsl(203, 8%, 23%) !important;
  --titlebar-background-focused: hsl(203, 8%, 26%) !important;
  --titlebar-border-color: rgba(255, 255, 255, 0.14) !important;
  --titlebar-text-color: rgba(255, 255, 255, 0.7) !important;
  --titlebar-text-color-focused: rgba(255, 255, 255, 0.9) !important;
  --titlebar-text-weight: 500 !important;
  --vault-profile-color: rgba(255, 255, 255, 0.9) !important;
  --vault-profile-color-hover: rgba(255, 255, 255, 0.9) !important;
  --vault-profile-font-size: 0.95em !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(54, 60, 63);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(47, 52, 55);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(54, 60, 63);
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.14);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(137, 99, 42);
  border-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(54, 60, 63);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.14);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 52, 55);
  color: rgba(255, 255, 255, 0.9);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(89, 86, 59);
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body del {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgba(255, 255, 255, 0.9);
  font-size: 41.2832px;
  font-weight: 700;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(255, 255, 255, 0.9);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(46, 170, 220);
  border-color: rgb(46, 170, 220);
}

html[saved-theme="dark"] body p {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.7) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: underline 1px rgba(255, 255, 255, 0.14);
  text-decoration-color: rgba(255, 255, 255, 0.14);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(255, 255, 255, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  outline: rgba(255, 255, 255, 0.7) none 0px;
  text-decoration: underline 1px rgba(255, 255, 255, 0.14);
  text-decoration-color: rgba(255, 255, 255, 0.14);
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body dt {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ol > li {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ul > li {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.55);
}

html[saved-theme="dark"] body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body table {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body tr {
  background-color: rgba(69, 75, 78, 0.5);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 6px;
  padding-top: 24px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 220, 73);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 220, 73);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 220, 73);
  border-left-color: rgb(255, 220, 73);
  border-right-color: rgb(255, 220, 73);
  border-top-color: rgb(255, 220, 73);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body figcaption {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(61, 68, 72);
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 29, 40, 46;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 89, 65, 65;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 89, 65, 65;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 68, 63, 87;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 89, 65, 65;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 54, 73, 84;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 54, 73, 84;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 89, 74, 58;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 53, 76, 75;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 29, 40, 46;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 54, 73, 84;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 89, 74, 58;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23C1694F" d="M32 34a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v27z"%2F%3E%3Cpath fill="%23FFF" d="M29 32a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v23z"%2F%3E%3Cpath fill="%23CCD6DD" d="M25 3h-4a3 3 0 1 0-6 0h-4a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2z"%2F%3E%3Ccircle cx="18" cy="3" r="2" fill="%23292F33"%2F%3E%3Cpath fill="%2399AAB5" d="M20 14a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1zm7 4a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2331373D" d="M7.5 24.516a.999.999 0 0 1-.707-1.707L22.81 6.793a.999.999 0 1 1 1.414 1.414L8.207 24.223a1 1 0 0 1-.707.293zm8.282-11.738a1.001 1.001 0 0 1-.784-1.621c.113-.144 2.571-3.361.971-7.572a1 1 0 1 1 1.869-.711c2.017 5.307-1.139 9.357-1.274 9.527a.996.996 0 0 1-.782.377zm3.89 3.888a.997.997 0 0 1-.782-1.621c.138-.172 3.435-4.197 9.323-2.726a.999.999 0 0 1 .727 1.213a1.002 1.002 0 0 1-1.212.728c-4.623-1.157-7.172 1.905-7.278 2.036a1 1 0 0 1-.778.37zM6.454 18.511c-1.096 0-2.301-.186-3.58-.671a1 1 0 1 1 .71-1.87c4.219 1.604 7.439-.866 7.574-.972a1.003 1.003 0 0 1 1.403.166a.997.997 0 0 1-.159 1.4c-.129.103-2.495 1.947-5.948 1.947zm1.564-8.066c-1.829 0-4.968-.482-7.542-3.332a1 1 0 1 1 1.484-1.34C4.984 9.122 8.976 8.392 9.146 8.36a.999.999 0 0 1 .392 1.961a8.243 8.243 0 0 1-1.52.124z"%2F%3E%3Cpath fill="%2331373D" d="M9.341 10.341a1 1 0 0 1-.982-1.195c.034-.173.76-4.163-2.587-7.185A1 1 0 1 1 7.113.477c4.214 3.806 3.251 8.849 3.207 9.062a1 1 0 0 1-.979.802zm3.948 18.63a1 1 0 0 1-.969-.758c-1.473-5.895 2.554-9.186 2.726-9.323a1 1 0 0 1 1.249 1.561c-.14.114-3.187 2.667-2.035 7.277a1 1 0 0 1-.971 1.243z"%2F%3E%3Cpath fill="%2331373D" d="M29.844 19.167c-2.96-2.959-6.095-3.569-8.915-2.069c-.157-1.874-1.166-4.007-2.521-5.363c-1.488-1.488-3.008-1.653-4.405-1.044c1.058-2.465.6-5.43-.826-6.856c-1.843-1.843-4.594-.411-7.174 2.168c-2.58 2.58-4.012 5.331-2.168 7.174c1.425 1.426 4.391 1.883 6.856.826c-.61 1.397-.444 2.918 1.044 4.405c1.354 1.354 3.489 2.363 5.363 2.521c-1.5 2.82-.891 5.954 2.069 8.915c3.75 3.749 12.204 5.527 14.204 3.527s.223-10.455-3.527-14.204z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23DD2E44" d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18s18-8.059 18-18S27.941 0 18 0zm13 18c0 2.565-.753 4.95-2.035 6.965L11.036 7.036A12.916 12.916 0 0 1 18 5c7.18 0 13 5.821 13 13zM5 18c0-2.565.753-4.95 2.036-6.964l17.929 17.929A12.93 12.93 0 0 1 18 31c-7.179 0-13-5.82-13-13z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23553788" d="M15 31c0 2.209-.791 4-3 4H5c-4 0-4-14 0-14h7c2.209 0 3 1.791 3 4v6z"%2F%3E%3Cpath fill="%239266CC" d="M34 33h-1V23h1a1 1 0 1 0 0-2H10c-4 0-4 14 0 14h24a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M34.172 33H11c-2 0-2-10 0-10h23.172c1.104 0 1.104 10 0 10z"%2F%3E%3Cpath fill="%2399AAB5" d="M11.5 25h23.35c-.135-1.175-.36-2-.678-2H11c-1.651 0-1.938 6.808-.863 9.188C9.745 29.229 10.199 25 11.5 25z"%2F%3E%3Cpath fill="%23269" d="M12 8a4 4 0 0 1-4 4H4C0 12 0 1 4 1h4a4 4 0 0 1 4 4v3z"%2F%3E%3Cpath fill="%2355ACEE" d="M31 10h-1V3h1a1 1 0 1 0 0-2H7C3 1 3 12 7 12h24a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M31.172 10H8c-2 0-2-7 0-7h23.172c1.104 0 1.104 7 0 7z"%2F%3E%3Cpath fill="%2399AAB5" d="M8 5h23.925c-.114-1.125-.364-2-.753-2H8C6.807 3 6.331 5.489 6.562 7.5C6.718 6.142 7.193 5 8 5z"%2F%3E%3Cpath fill="%23F4900C" d="M20 17a4 4 0 0 1-4 4H6c-4 0-4-9 0-9h10a4 4 0 0 1 4 4v1z"%2F%3E%3Cpath fill="%23FFAC33" d="M35 19h-1v-5h1a1 1 0 1 0 0-2H15c-4 0-4 9 0 9h20a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M35.172 19H16c-2 0-2-5 0-5h19.172c1.104 0 1.104 5 0 5z"%2F%3E%3Cpath fill="%2399AAB5" d="M16 16h19.984c-.065-1.062-.334-2-.812-2H16c-1.274 0-1.733 2.027-1.383 3.5c.198-.839.657-1.5 1.383-1.5z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23DD2E44" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%239AAAB4" d="m13.503 19.693l2.828 2.828l-4.95 4.95l-2.828-2.829z"%2F%3E%3Cpath fill="%2366757F" d="m1.257 29.11l5.88-5.879a2 2 0 0 1 2.828 0l2.828 2.828a2 2 0 0 1 0 2.828l-5.879 5.879a4 4 0 1 1-5.657-5.656z"%2F%3E%3Ccircle cx="22.355" cy="13.669" r="13.5" fill="%238899A6"%2F%3E%3Ccircle cx="22.355" cy="13.669" r="9.5" fill="%23BBDDF5"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23D99E82" d="M35.222 33.598c-.647-2.101-1.705-6.059-2.325-7.566c-.501-1.216-.969-2.438-1.544-3.014c-.575-.575-1.553-.53-2.143.058c0 0-2.469 1.675-3.354 2.783c-1.108.882-2.785 3.357-2.785 3.357c-.59.59-.635 1.567-.06 2.143c.576.575 1.798 1.043 3.015 1.544c1.506.62 5.465 1.676 7.566 2.325c.359.11 1.74-1.271 1.63-1.63z"%2F%3E%3Cpath fill="%23EA596E" d="M13.643 5.308a2.946 2.946 0 0 1 0 4.167l-4.167 4.168a2.948 2.948 0 0 1-4.167 0L1.141 9.475a2.948 2.948 0 0 1 0-4.167l4.167-4.167a2.946 2.946 0 0 1 4.167 0l4.168 4.167z"%2F%3E%3Cpath fill="%23FFCC4D" d="m31.353 23.018l-4.17 4.17l-4.163 4.165L7.392 15.726l8.335-8.334l15.626 15.626z"%2F%3E%3Cpath fill="%23292F33" d="M32.078 34.763s2.709 1.489 3.441.757c.732-.732-.765-3.435-.765-3.435s-2.566.048-2.676 2.678z"%2F%3E%3Cpath fill="%23CCD6DD" d="m2.183 10.517l8.335-8.335l5.208 5.209l-8.334 8.335z"%2F%3E%3Cpath fill="%2399AAB5" d="m3.225 11.558l8.334-8.334l1.042 1.042L4.267 12.6zm2.083 2.086l8.335-8.335l1.042 1.042l-8.335 8.334z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23BE1931" d="M17 27a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3c.603-.006 6-1 6-5c0-2-2-4-5-4c-2.441 0-4 2-4 3a3 3 0 1 1-6 0c0-4.878 4.58-9 10-9c8 0 11 5.982 11 11c0 4.145-2.277 7.313-6.413 8.92c-.9.351-1.79.587-2.587.747V24a3 3 0 0 1-3 3z"%2F%3E%3Ccircle cx="17" cy="32" r="3" fill="%23BE1931"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23BDDDF4" d="M18 1C8.059 1 0 7.268 0 15c0 4.368 2.574 8.268 6.604 10.835C6.08 28.144 4.859 31.569 2 35c5.758-.96 9.439-3.761 11.716-6.416c1.376.262 2.805.416 4.284.416c9.941 0 18-6.268 18-14S27.941 1 18 1z"%2F%3E%3Ccircle cx="18" cy="15" r="2" fill="%232A6797"%2F%3E%3Ccircle cx="26" cy="15" r="2" fill="%232A6797"%2F%3E%3Ccircle cx="10" cy="15" r="2" fill="%232A6797"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2377B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"%2F%3E%3Cpath fill="%23FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23FFAC33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2331373D" d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23FFCC4D" d="M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z"%2F%3E%3Cpath fill="%23231F20" d="M15.583 28.953a2.421 2.421 0 0 1 2.419-2.418a2.421 2.421 0 0 1 2.418 2.418a2.422 2.422 0 0 1-2.418 2.419a2.422 2.422 0 0 1-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108c1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108c-1.271 0-2.232-.807-2.232-2.108V10.66z"%2F%3E%3C%2Fsvg%3E');
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(33, 32, 30);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgb(83, 83, 83);
  border-left-color: rgb(83, 83, 83);
  border-right-color: rgb(83, 83, 83);
  border-top-color: rgb(83, 83, 83);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(83, 83, 83);
  border-left-color: rgb(83, 83, 83);
  border-right-color: rgb(83, 83, 83);
  border-top-color: rgb(83, 83, 83);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(137, 99, 42);
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h1 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h2 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h3 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h4 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h5 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h6 {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.7);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(54, 60, 63);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(255, 255, 255, 0.7);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(255, 255, 255, 0.7);
  stroke: rgba(255, 255, 255, 0.7);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.55);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.55);
  border-right-color: rgba(255, 255, 255, 0.55);
  border-top-color: rgba(255, 255, 255, 0.55);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.55);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.55);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(54, 60, 63);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body abbr {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body sub {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body summary {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body sup {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(137, 99, 42);
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}`,
  },
  light: {
    base: `:root:root {
  --L0: 0% !important;
  --L1: 100% !important;
  --L2: 96% !important;
  --L3: 90% !important;
  --accent-h: 210 !important;
  --accent-l: 51% !important;
  --accent-s: 77% !important;
  --background-accent: hsl(203, 8%, 0%) !important;
  --background-modifier-active-hover: hsla(210, 77%, 51%, 0.1) !important;
  --background-modifier-border: rgba(55, 53, 47, 0.14) !important;
  --background-modifier-border-focus: #afafaf !important;
  --background-modifier-border-hover: #f1f1f0 !important;
  --background-modifier-error: rgb(224, 62, 62) !important;
  --background-modifier-error-hover: rgb(224, 62, 62) !important;
  --background-modifier-error-rgb: 251, 228, 228 !important;
  --background-modifier-form-field: hsl(0, 0%, 100%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 100%) !important;
  --background-modifier-hover: hsl(60, 3%, 0%, 4%) !important;
  --background-modifier-success: rgb(15, 123, 108) !important;
  --background-modifier-success-rgb: 221, 237, 234 !important;
  --background-primary: hsl(203, 8%, 100%) !important;
  --background-primary-alt: hsl(203, 8%, 90%) !important;
  --background-secondary: hsl(203, 8%, 96%) !important;
  --background-secondary-alt: hsl(203, 8%, 90%) !important;
  --banner-size: 220px !important;
  --bases-cards-background: hsl(203, 8%, 100%) !important;
  --bases-cards-cover-background: hsl(203, 8%, 90%) !important;
  --bases-cards-shadow: 0 0 0 1px rgba(55, 53, 47, 0.14) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #f1f1f0 !important;
  --bases-embed-border-color: rgba(55, 53, 47, 0.14) !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: rgba(55, 53, 47, 0.7) !important;
  --bases-group-heading-property-size: 0.9em !important;
  --bases-table-border-color: rgba(55, 53, 47, 0.14) !important;
  --bases-table-cell-background-active: hsl(203, 8%, 100%) !important;
  --bases-table-cell-background-disabled: hsl(203, 8%, 90%) !important;
  --bases-table-cell-background-selected: hsla(210, 77%, 51%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #afafaf !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: hsl(203, 8%, 90%) !important;
  --bases-table-header-background: hsl(203, 8%, 100%) !important;
  --bases-table-header-background-hover: hsl(60, 3%, 0%, 4%) !important;
  --bases-table-header-color: rgba(55, 53, 47, 0.7) !important;
  --bases-table-summary-background: hsl(203, 8%, 100%) !important;
  --bases-table-summary-background-hover: hsl(60, 3%, 0%, 4%) !important;
  --blockquote-border-color: rgba(55, 53, 47, 0.9) !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent) linear-gradient(hsl(203, 8%, 100%), color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent)) !important;
  --bodyFont: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --callout-bug: 251, 228, 228;
  --callout-default: 221, 235, 241;
  --callout-error: 251, 228, 228;
  --callout-example: 234, 228, 242;
  --callout-fail: 251, 228, 228;
  --callout-important: 231, 243, 248;
  --callout-info: 221, 235, 241;
  --callout-question: 250, 235, 221;
  --callout-radius: 3px;
  --callout-success: 221, 237, 234;
  --callout-summary: 231, 243, 248;
  --callout-tip: 231, 243, 248;
  --callout-todo: 221, 235, 241;
  --callout-warning: 250, 235, 221;
  --canvas-background: hsl(203, 8%, 100%) !important;
  --canvas-card-label-color: rgba(55, 53, 47, 0.55) !important;
  --canvas-color-1: 251, 228, 228 !important;
  --canvas-color-2: 250, 235, 221 !important;
  --canvas-color-3: 251, 243, 219 !important;
  --canvas-color-4: 221, 237, 234 !important;
  --canvas-color-5: 231, 243, 248 !important;
  --canvas-color-6: 234, 228, 242 !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: #dfdfdf !important;
  --caret-color: rgba(55, 53, 47, 0.9) !important;
  --checkbox-border-color: rgba(55, 53, 47, 0.55) !important;
  --checkbox-border-color-hover: rgba(55, 53, 47, 0.7) !important;
  --checkbox-color: rgb(46, 170, 220) !important;
  --checkbox-color-hover: rgba(46, 170, 220, 0.8) !important;
  --checkbox-marker-color: hsl(203, 8%, 100%) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: rgba(55, 53, 47, 0.7) !important;
  --clickable-icon-radius: 3px !important;
  --code: #EB5757 !important;
  --code-background: hsl(0, 1%, 70%, 14%) !important;
  --code-border-color: rgba(55, 53, 47, 0.14) !important;
  --code-bracket-background: hsl(60, 3%, 0%, 4%) !important;
  --code-comment: rgba(55, 53, 47, 0.55) !important;
  --code-function: rgb(223, 171, 1) !important;
  --code-important: rgb(217, 115, 13) !important;
  --code-keyword: rgb(173, 26, 114) !important;
  --code-normal: rgba(55, 53, 47, 0.9) !important;
  --code-operator: rgb(224, 62, 62) !important;
  --code-property: rgb(51, 126, 169) !important;
  --code-punctuation: rgba(55, 53, 47, 0.7) !important;
  --code-radius: 3px !important;
  --code-string: rgb(15, 123, 108) !important;
  --code-tag: rgb(224, 62, 62) !important;
  --code-value: rgb(105, 64, 165) !important;
  --codeFont: iA Writer Duospace, Nitti, Menlo, Courier, monospace !important;
  --collapse-icon-color: rgba(55, 53, 47, 0.55) !important;
  --collapse-icon-color-collapsed: rgba(55, 53, 47, 0.45) !important;
  --color-accent: hsl(210, 77%, 51%) !important;
  --color-accent-1: hsl(209, 77.77%, 54.825%) !important;
  --color-accent-2: hsl(207, 78.54%, 58.65%) !important;
  --color-accent-hsl: 210, 77%, 51% !important;
  --color-base-00: hsl(0, 0%, 100%) !important;
  --color-base-05: #fbfbfa !important;
  --color-base-10: #fbfbfa !important;
  --color-base-100: #37352f !important;
  --color-base-20: #fbfbfa !important;
  --color-base-25: #e1e1e1 !important;
  --color-base-30: #dfdfdf !important;
  --color-base-35: #f1f1f0 !important;
  --color-base-40: #afafaf !important;
  --color-base-50: #a3a29e !important;
  --color-base-60: #7b7b7b !important;
  --color-base-70: #737272 !important;
  --color-blue: rgb(11, 110, 153) !important;
  --color-blue-rgb: 221, 235, 241 !important;
  --color-brown: rgb(100, 71, 58) !important;
  --color-brown-rgb: 233, 229, 227 !important;
  --color-cyan: rgb(51, 126, 169) !important;
  --color-cyan-rgb: 231, 243, 248 !important;
  --color-gray: rgba(55, 53, 47, 0.6) !important;
  --color-gray-rgb: 235, 236, 237 !important;
  --color-green: rgb(15, 123, 108) !important;
  --color-green-rgb: 221, 237, 234 !important;
  --color-orange: rgb(217, 115, 13) !important;
  --color-orange-rgb: 250, 235, 221 !important;
  --color-pink: rgb(173, 26, 114) !important;
  --color-pink-rgb: 244, 223, 235 !important;
  --color-purple: rgb(105, 64, 165) !important;
  --color-purple-rgb: 234, 228, 242 !important;
  --color-red: rgb(224, 62, 62) !important;
  --color-red-rgb: 251, 228, 228 !important;
  --color-yellow: rgb(223, 171, 1) !important;
  --color-yellow-rgb: 251, 243, 219 !important;
  --custom-line-height: 1.5em !important;
  --dark: rgba(55, 53, 47, 0.9) !important;
  --darkgray: rgba(55, 53, 47, 0.9) !important;
  --divider-color: rgba(55, 53, 47, 0.14) !important;
  --divider-color-hover: rgb(46, 170, 220) !important;
  --divider-width: 0.05em !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(55, 53, 47, 0.14), inset 0 0 0 1px rgba(55, 53, 47, 0.14) !important;
  --embed-border-start: 2px solid rgb(46, 170, 220) !important;
  --file-header-background: hsl(203, 8%, 100%) !important;
  --file-header-background-focused: hsl(203, 8%, 100%) !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --file-header-font-size: 0.95em !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: rgba(55, 53, 47, 0.9) !important;
  --font-bold: 500 !important;
  --font-default: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-monospace: iA Writer Duospace, Nitti, Menlo, Courier, monospace !important;
  --font-monospace-default: 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace !important;
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-ui-large: 1.15em !important;
  --font-ui-medium: 0.97em !important;
  --font-ui-small: 0.95em !important;
  --font-ui-smaller: 0.9em !important;
  --footnote-divider-color: rgba(55, 53, 47, 0.14) !important;
  --footnote-id-color: rgba(55, 53, 47, 0.7) !important;
  --footnote-id-color-no-occurrences: rgba(55, 53, 47, 0.55) !important;
  --footnote-input-background-active: hsl(60, 3%, 0%, 4%) !important;
  --footnote-radius: 3px !important;
  --graph-line: rgba(55, 53, 47, 0.14) !important;
  --graph-node: rgb(11, 110, 153) !important;
  --graph-node-attachment: rgb(223, 171, 1) !important;
  --graph-node-focused: rgb(46, 170, 220) !important;
  --graph-node-tag: rgb(15, 123, 108) !important;
  --graph-node-unresolved: rgb(51, 126, 169) !important;
  --graph-text: rgba(55, 53, 47, 0.9) !important;
  --gray: rgba(55, 53, 47, 0.7) !important;
  --h-bg: transparent !important;
  --h-color: rgba(55, 53, 47, 0.9) !important;
  --h1-bg: transparent !important;
  --h1-color: rgba(55, 53, 47, 0.9) !important;
  --h1-size: 1.875em !important;
  --h1-weight: 600 !important;
  --h2-bg: transparent !important;
  --h2-color: rgba(55, 53, 47, 0.9) !important;
  --h2-size: 1.5em !important;
  --h2-weight: 600 !important;
  --h3-bg: transparent !important;
  --h3-color: rgba(55, 53, 47, 0.9) !important;
  --h3-size: 1.25em !important;
  --h3-weight: 600 !important;
  --h4-bg: transparent !important;
  --h4-color: rgba(55, 53, 47, 0.9) !important;
  --h4-weight: 600 !important;
  --h5-bg: transparent !important;
  --h5-color: rgba(55, 53, 47, 0.9) !important;
  --h5-weight: 600 !important;
  --h6-bg: transparent !important;
  --h6-color: rgba(55, 53, 47, 0.9) !important;
  --headerFont: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --heading-formatting: rgba(55, 53, 47, 0.55) !important;
  --highlight: rgb(251, 243, 219) !important;
  --hr-color: rgba(55, 53, 47, 0.14) !important;
  --hue: 203 !important;
  --icon-color: rgba(55, 53, 47, 0.7) !important;
  --icon-color-active: rgba(55, 53, 47, 0.45) !important;
  --icon-color-focused: rgba(55, 53, 47, 0.9) !important;
  --icon-color-hover: rgba(55, 53, 47, 0.7) !important;
  --indentation-guide-color: transparent !important;
  --inline-title-color: rgba(55, 53, 47, 0.9) !important;
  --inline-title-size: 1.875em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgba(55, 53, 47, 0.55) !important;
  --input-placeholder-color: rgba(55, 53, 47, 0.55) !important;
  --interactive-accent: rgb(46, 170, 220) !important;
  --interactive-accent-hover: rgba(46, 170, 220, 0.8) !important;
  --interactive-accent-hsl: 210, 77%, 51% !important;
  --interactive-accent-rgb: 46, 170, 220 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --light: hsl(203, 8%, 100%) !important;
  --lightgray: hsl(203, 8%, 96%) !important;
  --link-color: rgba(55, 53, 47, 0.45) !important;
  --link-color-hover: rgba(55, 53, 47, 0.7) !important;
  --link-external-color: rgba(55, 53, 47, 0.45) !important;
  --link-external-color-hover: rgba(55, 53, 47, 0.45) !important;
  --link-unresolved-color: rgba(55, 53, 47, 0.45) !important;
  --link-unresolved-decoration-color: hsla(210, 77%, 51%, 0.3) !important;
  --list-bullet-size: 0.37em !important;
  --list-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgba(55, 53, 47, 0.9) !important;
  --list-marker-color-collapsed: rgba(55, 53, 47, 0.45) !important;
  --list-marker-color-hover: rgba(55, 53, 47, 0.9) !important;
  --list-menu-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 25 25' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --list-spacing: 0.3em !important;
  --menu-background: hsl(203, 8%, 96%) !important;
  --menu-border-color: #f1f1f0 !important;
  --metadata-border-color: rgba(55, 53, 47, 0.14) !important;
  --metadata-divider-color: rgba(55, 53, 47, 0.14) !important;
  --metadata-input-background-active: hsl(60, 3%, 0%, 4%) !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-input-text-color: rgba(55, 53, 47, 0.9) !important;
  --metadata-label-background-active: hsl(60, 3%, 0%, 4%) !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-label-text-color: rgba(55, 53, 47, 0.7) !important;
  --metadata-label-text-color-hover: rgba(55, 53, 47, 0.7) !important;
  --metadata-property-background-active: hsl(60, 3%, 0%, 4%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #afafaf !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #f1f1f0 !important;
  --metadata-sidebar-input-font-size: 0.95em !important;
  --metadata-sidebar-label-font-size: 0.95em !important;
  --modal-background: hsl(203, 8%, 100%) !important;
  --modal-border-color: #afafaf !important;
  --modal-height: calc(100vh - 100px) !important;
  --modal-max-height: 715px !important;
  --modal-max-width: calc(100vw - 100px) !important;
  --nav-collapse-icon-color: rgba(55, 53, 47, 0.55) !important;
  --nav-collapse-icon-color-collapsed: rgba(55, 53, 47, 0.55) !important;
  --nav-heading-color: rgba(55, 53, 47, 0.9) !important;
  --nav-heading-color-collapsed: rgba(55, 53, 47, 0.55) !important;
  --nav-heading-color-collapsed-hover: rgba(55, 53, 47, 0.7) !important;
  --nav-heading-color-hover: rgba(55, 53, 47, 0.9) !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-item-background-active: hsl(60, 3%, 0%, 4%) !important;
  --nav-item-background-hover: hsl(60, 3%, 0%, 4%) !important;
  --nav-item-background-selected: hsla(210, 77%, 51%, 0.15) !important;
  --nav-item-color: rgba(55, 53, 47, 0.7) !important;
  --nav-item-color-active: rgba(55, 53, 47, 0.9) !important;
  --nav-item-color-highlighted: rgba(55, 53, 47, 0.45) !important;
  --nav-item-color-hover: rgba(55, 53, 47, 0.9) !important;
  --nav-item-color-selected: rgba(55, 53, 47, 0.9) !important;
  --nav-item-radius: 3px !important;
  --nav-item-size: 0.95em !important;
  --nav-tag-color: rgba(55, 53, 47, 0.55) !important;
  --nav-tag-color-active: rgba(55, 53, 47, 0.7) !important;
  --nav-tag-color-hover: rgba(55, 53, 47, 0.7) !important;
  --nav-tag-radius: 3px !important;
  --number-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='9' x2='20' y2='9'%3E%3C/line%3E%3Cline x1='4' y1='15' x2='20' y2='15'%3E%3C/line%3E%3Cline x1='10' y1='3' x2='8' y2='21'%3E%3C/line%3E%3Cline x1='16' y1='3' x2='14' y2='21'%3E%3C/line%3E%3C/svg%3E") !important;
  --opacity-translucency: 0.7 !important;
  --pdf-background: hsl(203, 8%, 100%) !important;
  --pdf-page-background: hsl(203, 8%, 100%) !important;
  --pdf-sidebar-background: hsl(203, 8%, 100%) !important;
  --pill-border-color: rgba(55, 53, 47, 0.14) !important;
  --pill-border-color-hover: #f1f1f0 !important;
  --pill-color: rgba(55, 53, 47, 0.7) !important;
  --pill-color-hover: rgba(55, 53, 47, 0.9) !important;
  --pill-color-remove: rgba(55, 53, 47, 0.55) !important;
  --pill-color-remove-hover: rgba(55, 53, 47, 0.45) !important;
  --prompt-background: hsl(203, 8%, 100%) !important;
  --prompt-border-color: #afafaf !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent) linear-gradient(hsl(203, 8%, 100%), color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent)) !important;
  --ribbon-background: hsl(203, 8%, 96%) !important;
  --ribbon-background-collapsed: hsl(203, 8%, 100%) !important;
  --sat: 8% !important;
  --search-clear-button-color: rgba(55, 53, 47, 0.7) !important;
  --search-icon-color: rgba(55, 53, 47, 0.7) !important;
  --search-result-background: hsl(203, 8%, 100%) !important;
  --secondary: rgba(55, 53, 47, 0.45) !important;
  --setting-group-heading-color: rgba(55, 53, 47, 0.9) !important;
  --setting-group-heading-size: 0.97em !important;
  --setting-items-background: hsl(203, 8%, 90%) !important;
  --setting-items-border-color: rgba(55, 53, 47, 0.14) !important;
  --slider-thumb-border-color: #f1f1f0 !important;
  --slider-track-background: rgba(55, 53, 47, 0.14) !important;
  --status-bar-background: hsl(203, 8%, 96%) !important;
  --status-bar-border-color: rgba(55, 53, 47, 0.14) !important;
  --status-bar-font-size: 0.9em !important;
  --status-bar-text-color: rgba(55, 53, 47, 0.7) !important;
  --status-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E") !important;
  --suggestion-background: hsl(203, 8%, 100%) !important;
  --sync-avatar-color-1: rgb(224, 62, 62) !important;
  --sync-avatar-color-2: rgb(217, 115, 13) !important;
  --sync-avatar-color-3: rgb(223, 171, 1) !important;
  --sync-avatar-color-4: rgb(15, 123, 108) !important;
  --sync-avatar-color-5: rgb(51, 126, 169) !important;
  --sync-avatar-color-6: rgb(11, 110, 153) !important;
  --sync-avatar-color-7: rgb(105, 64, 165) !important;
  --sync-avatar-color-8: rgb(173, 26, 114) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: hsl(203, 8%, 96%) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: #f1f1f0 !important;
  --tab-font-size: 0.95em !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 3px !important;
  --tab-stacked-font-size: 0.95em !important;
  --tab-switcher-background: hsl(203, 8%, 96%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(203, 8%, 96%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 77%, 51%) !important;
  --tab-text-color: rgba(55, 53, 47, 0.55) !important;
  --tab-text-color-active: rgba(55, 53, 47, 0.7) !important;
  --tab-text-color-focused: rgba(55, 53, 47, 0.7) !important;
  --tab-text-color-focused-active: rgba(55, 53, 47, 0.7) !important;
  --tab-text-color-focused-active-current: rgba(55, 53, 47, 0.9) !important;
  --tab-text-color-focused-highlighted: rgba(55, 53, 47, 0.45) !important;
  --table-add-button-border-color: rgba(55, 53, 47, 0.14) !important;
  --table-border-color: rgba(55, 53, 47, 0.14) !important;
  --table-drag-handle-background-active: rgb(46, 170, 220) !important;
  --table-drag-handle-color: rgba(55, 53, 47, 0.55) !important;
  --table-drag-handle-color-active: rgba(55, 53, 47, 0.9) !important;
  --table-header-background: rgba(235, 236, 237, 0.5) !important;
  --table-header-background-hover: rgba(235, 236, 237, 0.5) !important;
  --table-header-border-color: rgba(55, 53, 47, 0.14) !important;
  --table-header-color: rgba(55, 53, 47, 0.9) !important;
  --table-selection: hsla(210, 77%, 51%, 0.1) !important;
  --table-selection-border-color: rgb(46, 170, 220) !important;
  --tag-1-default: rgb(253, 236, 200) !important;
  --tag-10-default: rgb(227, 226, 224, 0.5) !important;
  --tag-2-default: rgb(219, 237, 219) !important;
  --tag-3-default: rgb(211, 229, 239) !important;
  --tag-4-default: rgb(232, 222, 238) !important;
  --tag-5-default: rgb(245, 224, 233) !important;
  --tag-6-default: rgb(255, 226, 221) !important;
  --tag-7-default: rgb(250, 222, 201) !important;
  --tag-8-default: rgb(238, 224, 218) !important;
  --tag-9-default: rgb(227, 226, 224) !important;
  --tag-background: hsla(210, 77%, 51%, 0.1) !important;
  --tag-background-hover: hsla(210, 77%, 51%, 0.2) !important;
  --tag-border-color: hsla(210, 77%, 51%, 0.15) !important;
  --tag-border-color-hover: hsla(210, 77%, 51%, 0.15) !important;
  --tag-color: rgba(55, 53, 47, 0.9) !important;
  --tag-color-hover: rgba(55, 53, 47, 0.45) !important;
  --tag-radius: 3px !important;
  --tertiary: rgba(55, 53, 47, 0.45) !important;
  --text-accent: rgba(55, 53, 47, 0.45) !important;
  --text-accent-hover: rgba(55, 53, 47, 0.45) !important;
  --text-error: rgb(224, 62, 62) !important;
  --text-faint: rgba(55, 53, 47, 0.55) !important;
  --text-highlight-bg: rgb(251, 243, 219) !important;
  --text-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='21' y1='6' x2='3' y2='6'%3E%3C/line%3E%3Cline x1='15' y1='12' x2='3' y2='12'%3E%3C/line%3E%3Cline x1='17' y1='18' x2='3' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --text-muted: rgba(55, 53, 47, 0.7) !important;
  --text-normal: rgba(55, 53, 47, 0.9) !important;
  --text-on-accent: rgba(55, 53, 47, 0.9) !important;
  --text-rgb: 55, 53, 47 !important;
  --text-selection: rgba(0, 122, 255, 0.15) !important;
  --text-success: rgb(15, 123, 108) !important;
  --text-warning: rgb(217, 115, 13) !important;
  --textHighlight: rgb(251, 243, 219) !important;
  --titleFont: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --titlebar-background: hsl(203, 8%, 96%) !important;
  --titlebar-background-focused: hsl(203, 8%, 90%) !important;
  --titlebar-border-color: rgba(55, 53, 47, 0.14) !important;
  --titlebar-text-color: rgba(55, 53, 47, 0.7) !important;
  --titlebar-text-color-focused: rgba(55, 53, 47, 0.9) !important;
  --titlebar-text-weight: 500 !important;
  --vault-profile-color: rgba(55, 53, 47, 0.9) !important;
  --vault-profile-color-hover: rgba(55, 53, 47, 0.9) !important;
  --vault-profile-font-size: 0.95em !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 245, 246);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(55, 53, 47, 0.14);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(253, 236, 200);
  border-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 245, 246);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(55, 53, 47, 0.14);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgba(55, 53, 47, 0.9);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(251, 243, 219);
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body del {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h1.article-title {
  color: rgba(55, 53, 47, 0.9);
  font-size: 41.2832px;
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(55, 53, 47, 0.9);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(46, 170, 220);
  border-color: rgb(46, 170, 220);
}

html[saved-theme="light"] body p {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.7) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.7);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: underline 1px rgba(55, 53, 47, 0.14);
  text-decoration-color: rgba(55, 53, 47, 0.14);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(55, 53, 47, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  outline: rgba(55, 53, 47, 0.7) none 0px;
  text-decoration: underline 1px rgba(55, 53, 47, 0.14);
  text-decoration-color: rgba(55, 53, 47, 0.14);
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body dt {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ol > li {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ul > li {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(55, 53, 47, 0.55);
}

html[saved-theme="light"] body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body table {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  width: 195.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body tr {
  background-color: rgba(235, 236, 237, 0.5);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 6px;
  padding-top: 24px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(223, 171, 1);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(223, 171, 1);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(223, 171, 1);
  border-left-color: rgb(223, 171, 1);
  border-right-color: rgb(223, 171, 1);
  border-top-color: rgb(223, 171, 1);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body figcaption {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(227, 230, 232);
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 231, 243, 248;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 251, 228, 228;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 251, 228, 228;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 234, 228, 242;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 251, 228, 228;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 221, 235, 241;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 221, 235, 241;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 250, 235, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 221, 237, 234;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 231, 243, 248;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 221, 235, 241;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 250, 235, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23C1694F" d="M32 34a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v27z"%2F%3E%3Cpath fill="%23FFF" d="M29 32a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v23z"%2F%3E%3Cpath fill="%23CCD6DD" d="M25 3h-4a3 3 0 1 0-6 0h-4a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2z"%2F%3E%3Ccircle cx="18" cy="3" r="2" fill="%23292F33"%2F%3E%3Cpath fill="%2399AAB5" d="M20 14a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1zm7 4a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2331373D" d="M7.5 24.516a.999.999 0 0 1-.707-1.707L22.81 6.793a.999.999 0 1 1 1.414 1.414L8.207 24.223a1 1 0 0 1-.707.293zm8.282-11.738a1.001 1.001 0 0 1-.784-1.621c.113-.144 2.571-3.361.971-7.572a1 1 0 1 1 1.869-.711c2.017 5.307-1.139 9.357-1.274 9.527a.996.996 0 0 1-.782.377zm3.89 3.888a.997.997 0 0 1-.782-1.621c.138-.172 3.435-4.197 9.323-2.726a.999.999 0 0 1 .727 1.213a1.002 1.002 0 0 1-1.212.728c-4.623-1.157-7.172 1.905-7.278 2.036a1 1 0 0 1-.778.37zM6.454 18.511c-1.096 0-2.301-.186-3.58-.671a1 1 0 1 1 .71-1.87c4.219 1.604 7.439-.866 7.574-.972a1.003 1.003 0 0 1 1.403.166a.997.997 0 0 1-.159 1.4c-.129.103-2.495 1.947-5.948 1.947zm1.564-8.066c-1.829 0-4.968-.482-7.542-3.332a1 1 0 1 1 1.484-1.34C4.984 9.122 8.976 8.392 9.146 8.36a.999.999 0 0 1 .392 1.961a8.243 8.243 0 0 1-1.52.124z"%2F%3E%3Cpath fill="%2331373D" d="M9.341 10.341a1 1 0 0 1-.982-1.195c.034-.173.76-4.163-2.587-7.185A1 1 0 1 1 7.113.477c4.214 3.806 3.251 8.849 3.207 9.062a1 1 0 0 1-.979.802zm3.948 18.63a1 1 0 0 1-.969-.758c-1.473-5.895 2.554-9.186 2.726-9.323a1 1 0 0 1 1.249 1.561c-.14.114-3.187 2.667-2.035 7.277a1 1 0 0 1-.971 1.243z"%2F%3E%3Cpath fill="%2331373D" d="M29.844 19.167c-2.96-2.959-6.095-3.569-8.915-2.069c-.157-1.874-1.166-4.007-2.521-5.363c-1.488-1.488-3.008-1.653-4.405-1.044c1.058-2.465.6-5.43-.826-6.856c-1.843-1.843-4.594-.411-7.174 2.168c-2.58 2.58-4.012 5.331-2.168 7.174c1.425 1.426 4.391 1.883 6.856.826c-.61 1.397-.444 2.918 1.044 4.405c1.354 1.354 3.489 2.363 5.363 2.521c-1.5 2.82-.891 5.954 2.069 8.915c3.75 3.749 12.204 5.527 14.204 3.527s.223-10.455-3.527-14.204z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23DD2E44" d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18s18-8.059 18-18S27.941 0 18 0zm13 18c0 2.565-.753 4.95-2.035 6.965L11.036 7.036A12.916 12.916 0 0 1 18 5c7.18 0 13 5.821 13 13zM5 18c0-2.565.753-4.95 2.036-6.964l17.929 17.929A12.93 12.93 0 0 1 18 31c-7.179 0-13-5.82-13-13z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23553788" d="M15 31c0 2.209-.791 4-3 4H5c-4 0-4-14 0-14h7c2.209 0 3 1.791 3 4v6z"%2F%3E%3Cpath fill="%239266CC" d="M34 33h-1V23h1a1 1 0 1 0 0-2H10c-4 0-4 14 0 14h24a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M34.172 33H11c-2 0-2-10 0-10h23.172c1.104 0 1.104 10 0 10z"%2F%3E%3Cpath fill="%2399AAB5" d="M11.5 25h23.35c-.135-1.175-.36-2-.678-2H11c-1.651 0-1.938 6.808-.863 9.188C9.745 29.229 10.199 25 11.5 25z"%2F%3E%3Cpath fill="%23269" d="M12 8a4 4 0 0 1-4 4H4C0 12 0 1 4 1h4a4 4 0 0 1 4 4v3z"%2F%3E%3Cpath fill="%2355ACEE" d="M31 10h-1V3h1a1 1 0 1 0 0-2H7C3 1 3 12 7 12h24a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M31.172 10H8c-2 0-2-7 0-7h23.172c1.104 0 1.104 7 0 7z"%2F%3E%3Cpath fill="%2399AAB5" d="M8 5h23.925c-.114-1.125-.364-2-.753-2H8C6.807 3 6.331 5.489 6.562 7.5C6.718 6.142 7.193 5 8 5z"%2F%3E%3Cpath fill="%23F4900C" d="M20 17a4 4 0 0 1-4 4H6c-4 0-4-9 0-9h10a4 4 0 0 1 4 4v1z"%2F%3E%3Cpath fill="%23FFAC33" d="M35 19h-1v-5h1a1 1 0 1 0 0-2H15c-4 0-4 9 0 9h20a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M35.172 19H16c-2 0-2-5 0-5h19.172c1.104 0 1.104 5 0 5z"%2F%3E%3Cpath fill="%2399AAB5" d="M16 16h19.984c-.065-1.062-.334-2-.812-2H16c-1.274 0-1.733 2.027-1.383 3.5c.198-.839.657-1.5 1.383-1.5z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23DD2E44" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%239AAAB4" d="m13.503 19.693l2.828 2.828l-4.95 4.95l-2.828-2.829z"%2F%3E%3Cpath fill="%2366757F" d="m1.257 29.11l5.88-5.879a2 2 0 0 1 2.828 0l2.828 2.828a2 2 0 0 1 0 2.828l-5.879 5.879a4 4 0 1 1-5.657-5.656z"%2F%3E%3Ccircle cx="22.355" cy="13.669" r="13.5" fill="%238899A6"%2F%3E%3Ccircle cx="22.355" cy="13.669" r="9.5" fill="%23BBDDF5"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23D99E82" d="M35.222 33.598c-.647-2.101-1.705-6.059-2.325-7.566c-.501-1.216-.969-2.438-1.544-3.014c-.575-.575-1.553-.53-2.143.058c0 0-2.469 1.675-3.354 2.783c-1.108.882-2.785 3.357-2.785 3.357c-.59.59-.635 1.567-.06 2.143c.576.575 1.798 1.043 3.015 1.544c1.506.62 5.465 1.676 7.566 2.325c.359.11 1.74-1.271 1.63-1.63z"%2F%3E%3Cpath fill="%23EA596E" d="M13.643 5.308a2.946 2.946 0 0 1 0 4.167l-4.167 4.168a2.948 2.948 0 0 1-4.167 0L1.141 9.475a2.948 2.948 0 0 1 0-4.167l4.167-4.167a2.946 2.946 0 0 1 4.167 0l4.168 4.167z"%2F%3E%3Cpath fill="%23FFCC4D" d="m31.353 23.018l-4.17 4.17l-4.163 4.165L7.392 15.726l8.335-8.334l15.626 15.626z"%2F%3E%3Cpath fill="%23292F33" d="M32.078 34.763s2.709 1.489 3.441.757c.732-.732-.765-3.435-.765-3.435s-2.566.048-2.676 2.678z"%2F%3E%3Cpath fill="%23CCD6DD" d="m2.183 10.517l8.335-8.335l5.208 5.209l-8.334 8.335z"%2F%3E%3Cpath fill="%2399AAB5" d="m3.225 11.558l8.334-8.334l1.042 1.042L4.267 12.6zm2.083 2.086l8.335-8.335l1.042 1.042l-8.335 8.334z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23BE1931" d="M17 27a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3c.603-.006 6-1 6-5c0-2-2-4-5-4c-2.441 0-4 2-4 3a3 3 0 1 1-6 0c0-4.878 4.58-9 10-9c8 0 11 5.982 11 11c0 4.145-2.277 7.313-6.413 8.92c-.9.351-1.79.587-2.587.747V24a3 3 0 0 1-3 3z"%2F%3E%3Ccircle cx="17" cy="32" r="3" fill="%23BE1931"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23BDDDF4" d="M18 1C8.059 1 0 7.268 0 15c0 4.368 2.574 8.268 6.604 10.835C6.08 28.144 4.859 31.569 2 35c5.758-.96 9.439-3.761 11.716-6.416c1.376.262 2.805.416 4.284.416c9.941 0 18-6.268 18-14S27.941 1 18 1z"%2F%3E%3Ccircle cx="18" cy="15" r="2" fill="%232A6797"%2F%3E%3Ccircle cx="26" cy="15" r="2" fill="%232A6797"%2F%3E%3Ccircle cx="10" cy="15" r="2" fill="%232A6797"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2377B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"%2F%3E%3Cpath fill="%23FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23FFAC33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2331373D" d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23FFCC4D" d="M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z"%2F%3E%3Cpath fill="%23231F20" d="M15.583 28.953a2.421 2.421 0 0 1 2.419-2.418a2.421 2.421 0 0 1 2.418 2.418a2.422 2.422 0 0 1-2.418 2.419a2.422 2.422 0 0 1-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108c1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108c-1.271 0-2.232-.807-2.232-2.108V10.66z"%2F%3E%3C%2Fsvg%3E');
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.04);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(253, 236, 200);
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h1 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h2 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h3 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h4 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h5 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h6 {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.7);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 245, 246);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(55, 53, 47, 0.7);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(55, 53, 47, 0.7);
  stroke: rgba(55, 53, 47, 0.7);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(55, 53, 47, 0.55);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.55);
  border-right-color: rgba(55, 53, 47, 0.55);
  border-top-color: rgba(55, 53, 47, 0.55);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.55);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(55, 53, 47, 0.55);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  color: rgba(55, 53, 47, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 245, 246);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body abbr {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body kbd {
  background-color: rgba(179, 178, 178, 0.14);
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body sub {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body summary {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body sup {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(253, 236, 200);
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}`,
  },
};
