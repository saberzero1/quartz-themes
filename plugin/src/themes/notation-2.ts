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
  --background-accent: rgb(0, 0, 0) !important;
  --background-modifier-active-hover: rgba(34, 130, 226, 0.1) !important;
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
  --background-primary: rgb(47, 52, 55) !important;
  --background-primary-alt: rgb(61, 68, 72) !important;
  --background-secondary: rgb(54, 60, 63) !important;
  --background-secondary-alt: rgb(61, 68, 72) !important;
  --banner-size: 220px !important;
  --bases-cards-background: rgb(47, 52, 55) !important;
  --bases-cards-cover-background: rgb(61, 68, 72) !important;
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #363636 !important;
  --bases-embed-border-color: rgba(255, 255, 255, 0.14) !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.7) !important;
  --bases-group-heading-property-size: 0.9em !important;
  --bases-table-border-color: rgba(255, 255, 255, 0.14) !important;
  --bases-table-cell-background-active: rgb(47, 52, 55) !important;
  --bases-table-cell-background-disabled: rgb(61, 68, 72) !important;
  --bases-table-cell-background-selected: rgba(34, 130, 226, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #535353 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: rgb(61, 68, 72) !important;
  --bases-table-header-background: rgb(47, 52, 55) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.04) !important;
  --bases-table-header-color: rgba(255, 255, 255, 0.7) !important;
  --bases-table-summary-background: rgb(47, 52, 55) !important;
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
  --canvas-background: rgb(47, 52, 55) !important;
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
  --checkbox-marker-color: rgb(47, 52, 55) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: rgba(255, 255, 255, 0.7) !important;
  --clickable-icon-radius: 3px !important;
  --code: #EB5757 !important;
  --code-background: rgb(179, 178, 178) !important;
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
  --codeFont: '??', '??', 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace !important;
  --collapse-icon-color: rgba(255, 255, 255, 0.55) !important;
  --collapse-icon-color-collapsed: rgba(255, 255, 255, 0.45) !important;
  --color-accent: rgb(34, 130, 226) !important;
  --color-accent-1: rgb(68, 159, 233) !important;
  --color-accent-2: rgb(98, 180, 239) !important;
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
  --file-header-background: rgb(47, 52, 55) !important;
  --file-header-background-focused: rgb(47, 52, 55) !important;
  --file-header-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --file-header-font-size: 0.95em !important;
  --flair-background: #2a2a2a !important;
  --flair-color: rgba(255, 255, 255, 0.9) !important;
  --font-bold: 500 !important;
  --font-default: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-monospace: '??', '??', 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace !important;
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
  --light: rgb(47, 52, 55) !important;
  --lightgray: rgb(54, 60, 63) !important;
  --link-color: rgba(255, 255, 255, 0.45) !important;
  --link-color-hover: rgba(255, 255, 255, 0.7) !important;
  --link-external-color: rgba(255, 255, 255, 0.45) !important;
  --link-external-color-hover: rgba(255, 255, 255, 0.45) !important;
  --link-unresolved-color: rgba(255, 255, 255, 0.45) !important;
  --link-unresolved-decoration-color: rgba(34, 130, 226, 0.3) !important;
  --list-bullet-size: 0.37em !important;
  --list-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgba(255, 255, 255, 0.9) !important;
  --list-marker-color-collapsed: rgba(255, 255, 255, 0.45) !important;
  --list-marker-color-hover: rgba(255, 255, 255, 0.9) !important;
  --list-menu-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 25 25' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --list-spacing: 0.3em !important;
  --menu-background: rgb(54, 60, 63) !important;
  --menu-border-color: #363636 !important;
  --metadata-border-color: rgba(255, 255, 255, 0.14) !important;
  --metadata-divider-color: rgba(255, 255, 255, 0.14) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-input-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-input-text-color: rgba(255, 255, 255, 0.9) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-label-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-label-text-color: rgba(255, 255, 255, 0.7) !important;
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.7) !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.04) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #535353 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636 !important;
  --metadata-sidebar-input-font-size: 0.95em !important;
  --metadata-sidebar-label-font-size: 0.95em !important;
  --modal-background: rgb(47, 52, 55) !important;
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
  --nav-item-background-selected: rgba(34, 130, 226, 0.15) !important;
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
  --pdf-background: rgb(47, 52, 55) !important;
  --pdf-page-background: rgb(47, 52, 55) !important;
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --pdf-sidebar-background: rgb(47, 52, 55) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14) !important;
  --pill-border-color: rgba(255, 255, 255, 0.14) !important;
  --pill-border-color-hover: #363636 !important;
  --pill-color: rgba(255, 255, 255, 0.7) !important;
  --pill-color-hover: rgba(255, 255, 255, 0.9) !important;
  --pill-color-remove: rgba(255, 255, 255, 0.55) !important;
  --pill-color-remove-hover: rgba(255, 255, 255, 0.45) !important;
  --prompt-background: rgb(47, 52, 55) !important;
  --prompt-border-color: #535353 !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: rgb(54, 60, 63) !important;
  --ribbon-background-collapsed: rgb(47, 52, 55) !important;
  --sat: 8% !important;
  --search-clear-button-color: rgba(255, 255, 255, 0.7) !important;
  --search-icon-color: rgba(255, 255, 255, 0.7) !important;
  --search-result-background: rgb(47, 52, 55) !important;
  --secondary: rgba(255, 255, 255, 0.45) !important;
  --setting-group-heading-color: rgba(255, 255, 255, 0.9) !important;
  --setting-group-heading-size: 0.97em !important;
  --setting-items-background: rgb(61, 68, 72) !important;
  --setting-items-border-color: rgba(255, 255, 255, 0.14) !important;
  --slider-thumb-border-color: #363636 !important;
  --slider-track-background: rgba(255, 255, 255, 0.14) !important;
  --status-bar-background: rgb(54, 60, 63) !important;
  --status-bar-border-color: rgba(255, 255, 255, 0.14) !important;
  --status-bar-font-size: 0.9em !important;
  --status-bar-text-color: rgba(255, 255, 255, 0.7) !important;
  --status-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E") !important;
  --suggestion-background: rgb(47, 52, 55) !important;
  --sync-avatar-color-1: rgb(255, 115, 105) !important;
  --sync-avatar-color-2: rgb(255, 163, 68) !important;
  --sync-avatar-color-3: rgb(255, 220, 73) !important;
  --sync-avatar-color-4: rgb(77, 171, 154) !important;
  --sync-avatar-color-5: rgb(51, 126, 169) !important;
  --sync-avatar-color-6: rgb(82, 156, 202) !important;
  --sync-avatar-color-7: rgb(154, 109, 215) !important;
  --sync-avatar-color-8: rgb(226, 85, 161) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: rgb(54, 60, 63) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: #363636 !important;
  --tab-font-size: 0.95em !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 3px !important;
  --tab-stacked-font-size: 0.95em !important;
  --tab-switcher-background: rgb(54, 60, 63) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(54, 60, 63), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(34, 130, 226) !important;
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
  --table-selection: rgba(34, 130, 226, 0.1) !important;
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
  --tag-background: rgba(34, 130, 226, 0.1) !important;
  --tag-background-hover: rgba(34, 130, 226, 0.2) !important;
  --tag-border-color: rgba(34, 130, 226, 0.15) !important;
  --tag-border-color-hover: rgba(34, 130, 226, 0.15) !important;
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
  --text-selection: rgba(0, 123, 255, 0.2) !important;
  --text-success: rgb(77, 171, 154) !important;
  --text-warning: rgb(255, 163, 68) !important;
  --textHighlight: rgb(89, 86, 59) !important;
  --titleFont: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --titlebar-background: rgb(54, 60, 63) !important;
  --titlebar-background-focused: rgb(61, 68, 72) !important;
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
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(89, 86, 59);
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body del {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: line-through rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body p {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.7) none 0px;
  text-decoration: rgba(255, 255, 255, 0.7);
  text-decoration-color: rgba(255, 255, 255, 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.9);
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
  text-decoration: rgba(255, 255, 255, 0.55);
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
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: line-through rgba(255, 255, 255, 0.7);
  text-decoration-color: rgba(255, 255, 255, 0.7);
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
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
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
  text-decoration: rgba(255, 255, 255, 0.9);
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
  text-decoration: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(255, 255, 255, 0.7);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
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
  text-decoration: rgba(255, 255, 255, 0.7);
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
  text-decoration: rgba(255, 255, 255, 0.7);
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
  text-decoration: rgba(255, 255, 255, 0.7);
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
  text-decoration: underline dotted rgba(255, 255, 255, 0.9);
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
  --background-accent: rgb(0, 0, 0) !important;
  --background-modifier-active-hover: rgba(34, 130, 226, 0.1) !important;
  --background-modifier-border: rgba(55, 53, 47, 0.14) !important;
  --background-modifier-border-focus: #afafaf !important;
  --background-modifier-border-hover: #f1f1f0 !important;
  --background-modifier-error: rgb(224, 62, 62) !important;
  --background-modifier-error-hover: rgb(224, 62, 62) !important;
  --background-modifier-error-rgb: 251, 228, 228 !important;
  --background-modifier-form-field: rgb(255, 255, 255) !important;
  --background-modifier-form-field-hover: rgb(255, 255, 255) !important;
  --background-modifier-hover: rgb(0, 0, 0) !important;
  --background-modifier-success: rgb(15, 123, 108) !important;
  --background-modifier-success-rgb: 221, 237, 234 !important;
  --background-primary: rgb(255, 255, 255) !important;
  --background-primary-alt: rgb(227, 230, 232) !important;
  --background-secondary: rgb(244, 245, 246) !important;
  --background-secondary-alt: rgb(227, 230, 232) !important;
  --banner-size: 220px !important;
  --bases-cards-background: rgb(255, 255, 255) !important;
  --bases-cards-cover-background: rgb(227, 230, 232) !important;
  --bases-cards-shadow: 0 0 0 1px rgba(55, 53, 47, 0.14) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #f1f1f0 !important;
  --bases-embed-border-color: rgba(55, 53, 47, 0.14) !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: rgba(55, 53, 47, 0.7) !important;
  --bases-group-heading-property-size: 0.9em !important;
  --bases-table-border-color: rgba(55, 53, 47, 0.14) !important;
  --bases-table-cell-background-active: rgb(255, 255, 255) !important;
  --bases-table-cell-background-disabled: rgb(227, 230, 232) !important;
  --bases-table-cell-background-selected: rgba(34, 130, 226, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #afafaf !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(46, 170, 220) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: rgb(227, 230, 232) !important;
  --bases-table-header-background: rgb(255, 255, 255) !important;
  --bases-table-header-background-hover: rgb(0, 0, 0) !important;
  --bases-table-header-color: rgba(55, 53, 47, 0.7) !important;
  --bases-table-summary-background: rgb(255, 255, 255) !important;
  --bases-table-summary-background-hover: rgb(0, 0, 0) !important;
  --blockquote-border-color: rgba(55, 53, 47, 0.9) !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
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
  --canvas-background: rgb(255, 255, 255) !important;
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
  --checkbox-marker-color: rgb(255, 255, 255) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: rgba(55, 53, 47, 0.7) !important;
  --clickable-icon-radius: 3px !important;
  --code: #EB5757 !important;
  --code-background: rgb(179, 178, 178) !important;
  --code-border-color: rgba(55, 53, 47, 0.14) !important;
  --code-bracket-background: rgb(0, 0, 0) !important;
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
  --codeFont: '??', '??', 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace !important;
  --collapse-icon-color: rgba(55, 53, 47, 0.55) !important;
  --collapse-icon-color-collapsed: rgba(55, 53, 47, 0.45) !important;
  --color-accent: rgb(34, 130, 226) !important;
  --color-accent-1: rgb(51, 143, 230) !important;
  --color-accent-2: rgb(68, 159, 233) !important;
  --color-accent-hsl: 210, 77%, 51% !important;
  --color-base-00: rgb(255, 255, 255) !important;
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
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --file-header-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --file-header-font-size: 0.95em !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: rgba(55, 53, 47, 0.9) !important;
  --font-bold: 500 !important;
  --font-default: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-monospace: '??', '??', 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace !important;
  --font-monospace-default: 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace !important;
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-ui-large: 1.15em !important;
  --font-ui-medium: 0.97em !important;
  --font-ui-small: 0.95em !important;
  --font-ui-smaller: 0.9em !important;
  --footnote-divider-color: rgba(55, 53, 47, 0.14) !important;
  --footnote-id-color: rgba(55, 53, 47, 0.7) !important;
  --footnote-id-color-no-occurrences: rgba(55, 53, 47, 0.55) !important;
  --footnote-input-background-active: rgb(0, 0, 0) !important;
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
  --light: rgb(255, 255, 255) !important;
  --lightgray: rgb(244, 245, 246) !important;
  --link-color: rgba(55, 53, 47, 0.45) !important;
  --link-color-hover: rgba(55, 53, 47, 0.7) !important;
  --link-external-color: rgba(55, 53, 47, 0.45) !important;
  --link-external-color-hover: rgba(55, 53, 47, 0.45) !important;
  --link-unresolved-color: rgba(55, 53, 47, 0.45) !important;
  --link-unresolved-decoration-color: rgba(34, 130, 226, 0.3) !important;
  --list-bullet-size: 0.37em !important;
  --list-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgba(55, 53, 47, 0.9) !important;
  --list-marker-color-collapsed: rgba(55, 53, 47, 0.45) !important;
  --list-marker-color-hover: rgba(55, 53, 47, 0.9) !important;
  --list-menu-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 25 25' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --list-spacing: 0.3em !important;
  --menu-background: rgb(244, 245, 246) !important;
  --menu-border-color: #f1f1f0 !important;
  --metadata-border-color: rgba(55, 53, 47, 0.14) !important;
  --metadata-divider-color: rgba(55, 53, 47, 0.14) !important;
  --metadata-input-background-active: rgb(0, 0, 0) !important;
  --metadata-input-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-input-text-color: rgba(55, 53, 47, 0.9) !important;
  --metadata-label-background-active: rgb(0, 0, 0) !important;
  --metadata-label-font: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-label-text-color: rgba(55, 53, 47, 0.7) !important;
  --metadata-label-text-color-hover: rgba(55, 53, 47, 0.7) !important;
  --metadata-property-background-active: rgb(0, 0, 0) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #afafaf !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #f1f1f0 !important;
  --metadata-sidebar-input-font-size: 0.95em !important;
  --metadata-sidebar-label-font-size: 0.95em !important;
  --modal-background: rgb(255, 255, 255) !important;
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
  --nav-item-background-active: rgb(0, 0, 0) !important;
  --nav-item-background-hover: rgb(0, 0, 0) !important;
  --nav-item-background-selected: rgba(34, 130, 226, 0.15) !important;
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
  --pdf-background: rgb(255, 255, 255) !important;
  --pdf-page-background: rgb(255, 255, 255) !important;
  --pdf-sidebar-background: rgb(255, 255, 255) !important;
  --pill-border-color: rgba(55, 53, 47, 0.14) !important;
  --pill-border-color-hover: #f1f1f0 !important;
  --pill-color: rgba(55, 53, 47, 0.7) !important;
  --pill-color-hover: rgba(55, 53, 47, 0.9) !important;
  --pill-color-remove: rgba(55, 53, 47, 0.55) !important;
  --pill-color-remove-hover: rgba(55, 53, 47, 0.45) !important;
  --prompt-background: rgb(255, 255, 255) !important;
  --prompt-border-color: #afafaf !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --ribbon-background: rgb(244, 245, 246) !important;
  --ribbon-background-collapsed: rgb(255, 255, 255) !important;
  --sat: 8% !important;
  --search-clear-button-color: rgba(55, 53, 47, 0.7) !important;
  --search-icon-color: rgba(55, 53, 47, 0.7) !important;
  --search-result-background: rgb(255, 255, 255) !important;
  --secondary: rgba(55, 53, 47, 0.45) !important;
  --setting-group-heading-color: rgba(55, 53, 47, 0.9) !important;
  --setting-group-heading-size: 0.97em !important;
  --setting-items-background: rgb(227, 230, 232) !important;
  --setting-items-border-color: rgba(55, 53, 47, 0.14) !important;
  --slider-thumb-border-color: #f1f1f0 !important;
  --slider-track-background: rgba(55, 53, 47, 0.14) !important;
  --status-bar-background: rgb(244, 245, 246) !important;
  --status-bar-border-color: rgba(55, 53, 47, 0.14) !important;
  --status-bar-font-size: 0.9em !important;
  --status-bar-text-color: rgba(55, 53, 47, 0.7) !important;
  --status-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E") !important;
  --suggestion-background: rgb(255, 255, 255) !important;
  --sync-avatar-color-1: rgb(224, 62, 62) !important;
  --sync-avatar-color-2: rgb(217, 115, 13) !important;
  --sync-avatar-color-3: rgb(223, 171, 1) !important;
  --sync-avatar-color-4: rgb(15, 123, 108) !important;
  --sync-avatar-color-5: rgb(51, 126, 169) !important;
  --sync-avatar-color-6: rgb(11, 110, 153) !important;
  --sync-avatar-color-7: rgb(105, 64, 165) !important;
  --sync-avatar-color-8: rgb(173, 26, 114) !important;
  --tab-background-active: transparent !important;
  --tab-container-background: rgb(244, 245, 246) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: #f1f1f0 !important;
  --tab-font-size: 0.95em !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 3px !important;
  --tab-stacked-font-size: 0.95em !important;
  --tab-switcher-background: rgb(244, 245, 246) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(244, 245, 246), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(34, 130, 226) !important;
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
  --table-selection: rgba(34, 130, 226, 0.1) !important;
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
  --tag-background: rgba(34, 130, 226, 0.1) !important;
  --tag-background-hover: rgba(34, 130, 226, 0.2) !important;
  --tag-border-color: rgba(34, 130, 226, 0.15) !important;
  --tag-border-color-hover: rgba(34, 130, 226, 0.15) !important;
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
  --titlebar-background: rgb(244, 245, 246) !important;
  --titlebar-background-focused: rgb(227, 230, 232) !important;
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
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(251, 243, 219);
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body del {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: line-through rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body p {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.7) none 0px;
  text-decoration: rgba(55, 53, 47, 0.7);
  text-decoration-color: rgba(55, 53, 47, 0.7);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: underline rgba(55, 53, 47, 0.9);
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
  text-decoration: rgba(55, 53, 47, 0.55);
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
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(55, 53, 47, 0.7);
  text-decoration: line-through rgba(55, 53, 47, 0.7);
  text-decoration-color: rgba(55, 53, 47, 0.7);
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
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
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
  text-decoration: rgba(55, 53, 47, 0.9);
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
  text-decoration: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: rgba(55, 53, 47, 0.7);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
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
  text-decoration: rgba(55, 53, 47, 0.7);
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
  text-decoration: rgba(55, 53, 47, 0.7);
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
  text-decoration: rgba(55, 53, 47, 0.7);
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
  text-decoration: underline dotted rgba(55, 53, 47, 0.9);
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
}`,
  },
};
