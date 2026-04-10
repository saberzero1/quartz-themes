import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "playground",
    modes: ["dark"],
    variations: [],
    fonts: ["bricolage-grotesque"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: oklch(25.5% 0.021 279.29) !important;
  --background-modifier-border-focus: oklch(61.5% 0.028 279.29) !important;
  --background-modifier-border-hover: oklch(35.5% 0.029 279.29) !important;
  --background-modifier-form-field: oklch(12% 0.009 279.29) !important;
  --background-modifier-form-field-hover: oklch(12% 0.009 279.29) !important;
  --background-primary: oklch(13.5% 0.01 279.29) !important;
  --background-primary-alt: oklch(25.5% 0.021 279.29) !important;
  --background-secondary: oklch(18% 0.014 279.29) !important;
  --background-secondary-alt: oklch(35.5% 0.029 279.29) !important;
  --bases-cards-background: oklch(13.5% 0.01 279.29) !important;
  --bases-cards-cover-background: oklch(25.5% 0.021 279.29) !important;
  --bases-cards-shadow: 0 0 0 1px oklch(25.5% 0.021 279.29) !important;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(35.5% 0.029 279.29) !important;
  --bases-embed-border-color: oklch(25.5% 0.021 279.29) !important;
  --bases-group-heading-property-color: oklch(84.5% 0.01 279.29) !important;
  --bases-table-border-color: oklch(25.5% 0.021 279.29) !important;
  --bases-table-cell-background-active: oklch(13.5% 0.01 279.29) !important;
  --bases-table-cell-background-disabled: oklch(25.5% 0.021 279.29) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(61.5% 0.028 279.29) !important;
  --bases-table-group-background: oklch(25.5% 0.021 279.29) !important;
  --bases-table-header-background: oklch(13.5% 0.01 279.29) !important;
  --bases-table-header-color: oklch(84.5% 0.01 279.29) !important;
  --bases-table-summary-background: oklch(13.5% 0.01 279.29) !important;
  --blue: rgb(42, 113, 235) !important;
  --blue-100: oklch(25.5% 0.091 260.58) !important;
  --blue-200: oklch(35.5% 0.127 260.58) !important;
  --blue-25: oklch(12% 0.038 260.58) !important;
  --blue-300: oklch(48.5% 0.173 260.58) !important;
  --blue-400: oklch(61.5% 0.176 260.58) !important;
  --blue-50: oklch(13.5% 0.044 260.58) !important;
  --blue-500: oklch(74.5% 0.111 260.58) !important;
  --blue-600: oklch(84.5% 0.06 260.58) !important;
  --blue-700: oklch(92% 0.027 260.58) !important;
  --blue-75: oklch(18% 0.061 260.58) !important;
  --blue-800: oklch(96.5% 0.01 260.58) !important;
  --blue-900: oklch(98% 0.005 260.58) !important;
  --blue-rgb: 42, 113, 235 !important;
  --blur-background: color-mix(in srgb, oklch(25.5% 0.021 279.29) 65%, transparent) linear-gradient(oklch(25.5% 0.021 279.29), color-mix(in srgb, oklch(25.5% 0.021 279.29) 65%, transparent)) !important;
  --bodyFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-bug: oklch(48.5% 0.193 13.65);
  --callout-content: oklch(84.5% 0.06 260.58);
  --callout-default: oklch(48.5% 0.173 260.58);
  --callout-error: oklch(48.5% 0.193 13.65);
  --callout-example: oklch(48.5% 0.1 97.11);
  --callout-fail: oklch(48.5% 0.193 13.65);
  --callout-important: oklch(48.5% 0.134 46.85);
  --callout-info: oklch(61.5% 0.028 279.29);
  --callout-padding: 12px 12px;
  --callout-question: oklch(48.5% 0.134 46.85);
  --callout-quote: oklch(48.5% 0.039 279.29);
  --callout-radius: 8px;
  --callout-success: oklch(48.5% 0.145 140.09);
  --callout-summary: oklch(48.5% 0.039 279.29);
  --callout-tip: oklch(48.5% 0.106 161.65);
  --callout-title-color: oklch(61.5% 0.176 260.58);
  --callout-todo: oklch(48.5% 0.173 260.58);
  --callout-warning: oklch(48.5% 0.134 46.85);
  --canvas-background: oklch(13.5% 0.01 279.29) !important;
  --canvas-card-label-color: oklch(74.5% 0.018 279.29) !important;
  --canvas-color: 90, 93, 117 !important;
  --canvas-color-1: 218, 1, 77 !important;
  --canvas-color-2: 255, 116, 23 !important;
  --canvas-color-3: 242, 208, 3 !important;
  --canvas-color-4: 78, 205, 43 !important;
  --canvas-color-5: 33, 255, 177 !important;
  --canvas-color-6: 42, 113, 235 !important;
  --caret-color: oklch(92% 0.004 279.29) !important;
  --checkbox-border-color: oklch(48.5% 0.039 279.29) !important;
  --checkbox-border-color-hover: oklch(84.5% 0.01 279.29) !important;
  --checkbox-color: oklch(74.5% 0.164 161.65) !important;
  --checkbox-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-margin-inline-start: 0.4em !important;
  --checkbox-marker-color: oklch(13.5% 0.01 279.29) !important;
  --checkbox-quote-color: oklch(61.5% 0.028 279.29) !important;
  --checkbox-radius: 100% !important;
  --checklist-done-color: oklch(74.5% 0.164 161.65) !important;
  --checklist-green-color: oklch(61.5% 0.183 140.09) !important;
  --checklist-orange-color: oklch(61.5% 0.17 46.85) !important;
  --checklist-red-color: oklch(61.5% 0.245 13.65) !important;
  --checklist-yellow-color: oklch(74.5% 0.153 97.11) !important;
  --code-background: oklch(25.5% 0.021 279.29) !important;
  --code-border-color: oklch(25.5% 0.021 279.29) !important;
  --code-comment: oklch(74.5% 0.018 279.29) !important;
  --code-normal: oklch(92% 0.004 279.29) !important;
  --code-punctuation: oklch(84.5% 0.01 279.29) !important;
  --code-radius: 8px !important;
  --codeFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: oklch(74.5% 0.018 279.29) !important;
  --dark: oklch(92% 0.004 279.29) !important;
  --darkgray: oklch(92% 0.004 279.29) !important;
  --divider-color: oklch(25.5% 0.021 279.29) !important;
  --dropdown-background: oklch(25.5% 0.021 279.29) !important;
  --dropdown-background-hover: oklch(35.5% 0.029 279.29) !important;
  --ease-out: cubic-bezier(0.33, 1, 0.68, 1) !important;
  --embed-block-shadow-hover: 0 !important;
  --file-header-background: oklch(13.5% 0.01 279.29) !important;
  --file-header-background-focused: oklch(13.5% 0.01 279.29) !important;
  --file-header-font: "Inter" !important;
  --file-margins: 40px 32px !important;
  --flair-background: oklch(25.5% 0.021 279.29) !important;
  --flair-color: oklch(92% 0.004 279.29) !important;
  --font-mermaid: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Inter", Arial' !important;
  --font-text: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter" !important;
  --footnote-divider-color: oklch(25.5% 0.021 279.29) !important;
  --footnote-id-color: oklch(84.5% 0.01 279.29) !important;
  --footnote-id-color-no-occurrences: oklch(74.5% 0.018 279.29) !important;
  --graph-node: oklch(84.5% 0.01 279.29) !important;
  --graph-node-unresolved: oklch(74.5% 0.018 279.29) !important;
  --graph-text: oklch(92% 0.004 279.29) !important;
  --gray: rgb(90, 93, 117) !important;
  --gray-100: oklch(25.5% 0.021 279.29) !important;
  --gray-200: oklch(35.5% 0.029 279.29) !important;
  --gray-25: oklch(12% 0.009 279.29) !important;
  --gray-300: oklch(48.5% 0.039 279.29) !important;
  --gray-400: oklch(61.5% 0.028 279.29) !important;
  --gray-50: oklch(13.5% 0.01 279.29) !important;
  --gray-500: oklch(74.5% 0.018 279.29) !important;
  --gray-600: oklch(84.5% 0.01 279.29) !important;
  --gray-700: oklch(92% 0.004 279.29) !important;
  --gray-75: oklch(18% 0.014 279.29) !important;
  --gray-800: oklch(96.5% 0.002 279.29) !important;
  --gray-900: oklch(98% 0.001 279.29) !important;
  --gray-rgb: 90, 93, 117 !important;
  --green: rgb(78, 205, 43) !important;
  --green-100: oklch(25.5% 0.076 140.09) !important;
  --green-200: oklch(35.5% 0.106 140.09) !important;
  --green-25: oklch(12% 0.032 140.09) !important;
  --green-300: oklch(48.5% 0.145 140.09) !important;
  --green-400: oklch(61.5% 0.183 140.09) !important;
  --green-50: oklch(13.5% 0.036 140.09) !important;
  --green-500: oklch(74.5% 0.222 140.09) !important;
  --green-600: oklch(84.5% 0.235 140.09) !important;
  --green-700: oklch(92% 0.125 140.09) !important;
  --green-75: oklch(18% 0.051 140.09) !important;
  --green-800: oklch(96.5% 0.043 140.09) !important;
  --green-900: oklch(98% 0.022 140.09) !important;
  --green-rgb: 78, 205, 43 !important;
  --h1-color: oklch(61.5% 0.17 288) !important;
  --h1-font: "Bricolage Grotesque" !important;
  --h1-weight: 550 !important;
  --h2-color: rgb(242, 66, 255) !important;
  --h2-font: "Bricolage Grotesque" !important;
  --h2-weight: 500 !important;
  --h3-color: rgb(255, 116, 23) !important;
  --h3-font: "Bricolage Grotesque" !important;
  --h3-weight: 550 !important;
  --h4-color: rgb(218, 1, 77) !important;
  --h4-font: "Bricolage Grotesque" !important;
  --h4-weight: 650 !important;
  --h5-color: oklch(84.5% 0.01 279.29) !important;
  --h5-font: "Bricolage Grotesque" !important;
  --h5-weight: 600 !important;
  --h6-color: oklch(84.5% 0.01 279.29) !important;
  --h6-font: "Bricolage Grotesque" !important;
  --h6-weight: 650 !important;
  --headerFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: oklch(74.5% 0.018 279.29) !important;
  --highlight: oklch(84.5% 0.174 97.11) !important;
  --highlight-text-color: oklch(12% 0.009 279.29) !important;
  --hr-color: oklch(25.5% 0.021 279.29) !important;
  --icon-color: oklch(61.5% 0.028 279.29) !important;
  --icon-color-focused: oklch(92% 0.004 279.29) !important;
  --icon-color-hover: oklch(84.5% 0.01 279.29) !important;
  --inline-title-color: oklch(61.5% 0.17 288) !important;
  --inline-title-font: "Bricolage Grotesque" !important;
  --inline-title-line-height: 105% !important;
  --inline-title-weight: 550 !important;
  --input-date-separator: oklch(74.5% 0.018 279.29) !important;
  --input-font-weight: 600 !important;
  --input-placeholder-color: oklch(74.5% 0.018 279.29) !important;
  --interactive-hover: oklch(35.5% 0.029 279.29) !important;
  --interactive-normal: oklch(25.5% 0.021 279.29) !important;
  --light: oklch(13.5% 0.01 279.29) !important;
  --lightgray: oklch(18% 0.014 279.29) !important;
  --link-decoration: none !important;
  --list-indent-source: 0px !important;
  --list-marker-color: oklch(74.5% 0.018 279.29) !important;
  --list-marker-color-hover: oklch(84.5% 0.01 279.29) !important;
  --list-padding-inline-start: 0px !important;
  --menu-background: oklch(18% 0.014 279.29) !important;
  --menu-border-color: oklch(35.5% 0.029 279.29) !important;
  --metadata-border-color: oklch(25.5% 0.021 279.29) !important;
  --metadata-divider-color: oklch(25.5% 0.021 279.29) !important;
  --metadata-input-text-color: oklch(92% 0.004 279.29) !important;
  --metadata-label-text-color: oklch(84.5% 0.01 279.29) !important;
  --metadata-label-text-color-hover: oklch(84.5% 0.01 279.29) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(61.5% 0.028 279.29) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(35.5% 0.029 279.29) !important;
  --modal-background: oklch(13.5% 0.01 279.29) !important;
  --modal-border-color: oklch(35.5% 0.029 279.29) !important;
  --nav-collapse-icon-color: oklch(74.5% 0.018 279.29) !important;
  --nav-collapse-icon-color-collapsed: oklch(74.5% 0.018 279.29) !important;
  --nav-heading-color: oklch(92% 0.004 279.29) !important;
  --nav-heading-color-collapsed: oklch(74.5% 0.018 279.29) !important;
  --nav-heading-color-collapsed-hover: oklch(84.5% 0.01 279.29) !important;
  --nav-heading-color-hover: oklch(92% 0.004 279.29) !important;
  --nav-item-background-active: oklch(25.5% 0.021 279.29) !important;
  --nav-item-background-hover: oklch(25.5% 0.021 279.29) !important;
  --nav-item-color: oklch(84.5% 0.01 279.29) !important;
  --nav-item-color-active: oklch(92% 0.004 279.29) !important;
  --nav-item-color-hover: oklch(92% 0.004 279.29) !important;
  --nav-item-color-selected: oklch(92% 0.004 279.29) !important;
  --nav-tag-color: oklch(74.5% 0.018 279.29) !important;
  --nav-tag-color-active: oklch(84.5% 0.01 279.29) !important;
  --nav-tag-color-hover: oklch(84.5% 0.01 279.29) !important;
  --orange: rgb(255, 116, 23) !important;
  --orange-100: oklch(25.5% 0.07 46.85) !important;
  --orange-200: oklch(35.5% 0.098 46.85) !important;
  --orange-25: oklch(12% 0.03 46.85) !important;
  --orange-300: oklch(48.5% 0.134 46.85) !important;
  --orange-400: oklch(61.5% 0.17 46.85) !important;
  --orange-50: oklch(13.5% 0.034 46.85) !important;
  --orange-500: oklch(74.5% 0.166 46.85) !important;
  --orange-600: oklch(84.5% 0.086 46.85) !important;
  --orange-700: oklch(92% 0.037 46.85) !important;
  --orange-75: oklch(18% 0.047 46.85) !important;
  --orange-800: oklch(96.5% 0.013 46.85) !important;
  --orange-900: oklch(98% 0.007 46.85) !important;
  --orange-rgb: 255, 116, 23 !important;
  --padding-inline-start: 0px !important;
  --pdf-background: oklch(13.5% 0.01 279.29) !important;
  --pdf-page-background: oklch(13.5% 0.01 279.29) !important;
  --pdf-shadow: 0 0 0 1px oklch(25.5% 0.021 279.29) !important;
  --pdf-sidebar-background: oklch(13.5% 0.01 279.29) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(25.5% 0.021 279.29) !important;
  --pill-border-color: oklch(25.5% 0.021 279.29) !important;
  --pill-border-color-hover: oklch(35.5% 0.029 279.29) !important;
  --pill-color: oklch(84.5% 0.01 279.29) !important;
  --pill-color-hover: oklch(92% 0.004 279.29) !important;
  --pill-color-remove: oklch(74.5% 0.018 279.29) !important;
  --pink: rgb(242, 66, 255) !important;
  --pink-100: oklch(25.5% 0.119 324.98) !important;
  --pink-200: oklch(35.5% 0.165 324.98) !important;
  --pink-25: oklch(12% 0.05 324.98) !important;
  --pink-300: oklch(48.5% 0.227 324.98) !important;
  --pink-400: oklch(61.5% 0.287 324.98) !important;
  --pink-50: oklch(13.5% 0.057 324.98) !important;
  --pink-500: oklch(74.5% 0.244 324.98) !important;
  --pink-600: oklch(84.5% 0.132 324.98) !important;
  --pink-700: oklch(92% 0.059 324.98) !important;
  --pink-75: oklch(18% 0.08 324.98) !important;
  --pink-800: oklch(96.5% 0.021 324.98) !important;
  --pink-900: oklch(98% 0.011 324.98) !important;
  --pink-rgb: 242, 66, 255 !important;
  --prompt-background: oklch(13.5% 0.01 279.29) !important;
  --purple: rgb(45, 36, 141) !important;
  --purple-100: oklch(25.5% 0.112 288) !important;
  --purple-200: oklch(35.5% 0.156 288) !important;
  --purple-25: oklch(12% 0.047 288) !important;
  --purple-300: oklch(48.5% 0.213 288) !important;
  --purple-400: oklch(61.5% 0.17 288) !important;
  --purple-50: oklch(13.5% 0.054 288) !important;
  --purple-500: oklch(74.5% 0.107 288) !important;
  --purple-600: oklch(84.5% 0.058 288) !important;
  --purple-700: oklch(92% 0.026 288) !important;
  --purple-75: oklch(18% 0.075 288) !important;
  --purple-800: oklch(96.5% 0.009 288) !important;
  --purple-900: oklch(98% 0.005 288) !important;
  --purple-rgb: 45, 36, 141 !important;
  --raised-background: color-mix(in srgb, oklch(25.5% 0.021 279.29) 65%, transparent) linear-gradient(oklch(25.5% 0.021 279.29), color-mix(in srgb, oklch(25.5% 0.021 279.29) 65%, transparent)) !important;
  --red: rgb(218, 1, 77) !important;
  --red-100: oklch(25.5% 0.102 13.65) !important;
  --red-200: oklch(35.5% 0.142 13.65) !important;
  --red-25: oklch(12% 0.043 13.65) !important;
  --red-300: oklch(48.5% 0.193 13.65) !important;
  --red-400: oklch(61.5% 0.245 13.65) !important;
  --red-50: oklch(13.5% 0.049 13.65) !important;
  --red-500: oklch(74.5% 0.156 13.65) !important;
  --red-600: oklch(84.5% 0.079 13.65) !important;
  --red-700: oklch(92% 0.034 13.65) !important;
  --red-75: oklch(18% 0.068 13.65) !important;
  --red-800: oklch(96.5% 0.012 13.65) !important;
  --red-900: oklch(98% 0.007 13.65) !important;
  --red-rgb: 218, 1, 77 !important;
  --ribbon-background: oklch(18% 0.014 279.29) !important;
  --ribbon-background-collapsed: oklch(13.5% 0.01 279.29) !important;
  --scrollbar-active-thumb-bg: oklch(35.5% 0.029 279.29) !important;
  --scrollbar-thumb-bg: oklch(25.5% 0.021 279.29) !important;
  --sea-green: rgb(33, 255, 177) !important;
  --sea-green-100: oklch(25.5% 0.056 161.65) !important;
  --sea-green-200: oklch(35.5% 0.078 161.65) !important;
  --sea-green-25: oklch(12% 0.026 161.65) !important;
  --sea-green-300: oklch(48.5% 0.106 161.65) !important;
  --sea-green-400: oklch(61.5% 0.135 161.65) !important;
  --sea-green-50: oklch(13.5% 0.029 161.65) !important;
  --sea-green-500: oklch(74.5% 0.164 161.65) !important;
  --sea-green-600: oklch(84.5% 0.186 161.65) !important;
  --sea-green-700: oklch(92% 0.118 161.65) !important;
  --sea-green-75: oklch(18% 0.039 161.65) !important;
  --sea-green-800: oklch(96.5% 0.041 161.65) !important;
  --sea-green-900: oklch(98% 0.021 161.65) !important;
  --sea-green-rgb: 33, 255, 177 !important;
  --search-clear-button-color: oklch(84.5% 0.01 279.29) !important;
  --search-icon-color: oklch(84.5% 0.01 279.29) !important;
  --search-result-background: oklch(13.5% 0.01 279.29) !important;
  --semibold-modifier: 200 !important;
  --setting-group-heading-color: oklch(92% 0.004 279.29) !important;
  --setting-items-background: oklch(25.5% 0.021 279.29) !important;
  --setting-items-border-color: oklch(25.5% 0.021 279.29) !important;
  --slider-thumb-border-color: oklch(35.5% 0.029 279.29) !important;
  --slider-track-background: oklch(25.5% 0.021 279.29) !important;
  --status-bar-background: oklch(18% 0.014 279.29) !important;
  --status-bar-border-color: oklch(25.5% 0.021 279.29) !important;
  --status-bar-text-color: oklch(84.5% 0.01 279.29) !important;
  --suggestion-background: oklch(13.5% 0.01 279.29) !important;
  --tab-background-active: oklch(13.5% 0.01 279.29) !important;
  --tab-container-background: oklch(18% 0.014 279.29) !important;
  --tab-divider-color: oklch(35.5% 0.029 279.29) !important;
  --tab-outline-color: oklch(25.5% 0.021 279.29) !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-switcher-background: oklch(18% 0.014 279.29) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(18% 0.014 279.29), transparent) !important;
  --tab-text-color: oklch(74.5% 0.018 279.29) !important;
  --tab-text-color-active: oklch(84.5% 0.01 279.29) !important;
  --tab-text-color-focused: oklch(84.5% 0.01 279.29) !important;
  --tab-text-color-focused-active: oklch(84.5% 0.01 279.29) !important;
  --tab-text-color-focused-active-current: oklch(92% 0.004 279.29) !important;
  --table-add-button-border-color: oklch(25.5% 0.021 279.29) !important;
  --table-border-color: oklch(25.5% 0.021 279.29) !important;
  --table-drag-handle-color: oklch(74.5% 0.018 279.29) !important;
  --table-header-background: oklch(25.5% 0.021 279.29) !important;
  --table-header-border-color: oklch(25.5% 0.021 279.29) !important;
  --table-header-color: oklch(92% 0.004 279.29) !important;
  --table-header-weight: 700 !important;
  --tag-background: oklch(35.5% 0.127 260.58) !important;
  --tag-color: oklch(84.5% 0.06 260.58) !important;
  --text-error: oklch(61.5% 0.245 13.65) !important;
  --text-faint: oklch(74.5% 0.018 279.29) !important;
  --text-highlight-bg: oklch(84.5% 0.174 97.11) !important;
  --text-inverse: oklch(12% 0.009 279.29) !important;
  --text-muted: oklch(84.5% 0.01 279.29) !important;
  --text-normal: oklch(92% 0.004 279.29) !important;
  --text-success: oklch(61.5% 0.183 140.09) !important;
  --text-warning: oklch(61.5% 0.17 46.85) !important;
  --textHighlight: oklch(84.5% 0.174 97.11) !important;
  --titleFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: oklch(13.5% 0.01 279.29) !important;
  --titlebar-background-focused: oklch(18% 0.014 279.29) !important;
  --titlebar-border-color: oklch(25.5% 0.021 279.29) !important;
  --titlebar-height: 36px !important;
  --titlebar-text-color: oklch(84.5% 0.01 279.29) !important;
  --titlebar-text-color-focused: oklch(92% 0.004 279.29) !important;
  --vault-profile-color: oklch(92% 0.004 279.29) !important;
  --vault-profile-color-hover: oklch(92% 0.004 279.29) !important;
  --yellow: rgb(242, 208, 3) !important;
  --yellow-100: oklch(25.5% 0.052 97.11) !important;
  --yellow-200: oklch(35.5% 0.072 97.11) !important;
  --yellow-25: oklch(12% 0.024 97.11) !important;
  --yellow-300: oklch(48.5% 0.1 97.11) !important;
  --yellow-400: oklch(61.5% 0.126 97.11) !important;
  --yellow-50: oklch(13.5% 0.027 97.11) !important;
  --yellow-500: oklch(74.5% 0.153 97.11) !important;
  --yellow-600: oklch(84.5% 0.174 97.11) !important;
  --yellow-700: oklch(92% 0.128 97.11) !important;
  --yellow-75: oklch(18% 0.037 97.11) !important;
  --yellow-800: oklch(96.5% 0.049 97.11) !important;
  --yellow-900: oklch(98% 0.026 97.11) !important;
  --yellow-rgb: 242, 208, 3 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.18 0.014 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: oklch(0.135 0.01 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body .bases-table thead th {
  border-color: oklch(0.255 0.021 279.29) oklch(0.255 0.021 279.29) oklch(0.355 0.029 279.29);
  color: oklch(0.92 0.004 279.29);
  font-weight: 700;
}

html body .canvas-node {
  border-color: oklch(0.92 0.004 279.29);
}

html body .canvas-node-content {
  color: oklch(0.92 0.004 279.29);
}

html body .canvas-node-file {
  color: oklch(0.92 0.004 279.29);
}

html body .canvas-node-group {
  border-color: oklch(0.92 0.004 279.29);
}

html body .canvas-sidebar {
  background-color: oklch(0.18 0.014 279.29);
  border-color: oklch(0.92 0.004 279.29);
}

html body .note-properties {
  border-color: oklch(0.255 0.021 279.29);
}

html body .note-properties-key {
  color: oklch(0.845 0.01 279.29);
}

html body .note-properties-row {
  border-color: oklch(0.845 0.01 279.29);
}

html body .note-properties-tags {
  background-color: oklch(0.255 0.021 279.29);
  color: oklch(0.845 0.06 260.58);
}

html body .note-properties-value {
  color: oklch(0.845 0.01 279.29);
}

html body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.18 0.014 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.255 0.021 279.29);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.18 0.014 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body div#quartz-root {
  background-color: oklch(0.135 0.01 279.29);
  color: oklch(0.92 0.004 279.29);
}`,
    typography: `html body .page article p > b, html b {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body .page article p > em, html em {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body .page article p > i, html i {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body .page article p > strong, html strong {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body .text-highlight {
  background-color: oklch(0.845 0.174 97.11);
  color: oklch(0.12 0.009 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.12 0.009 279.29) none 0px;
  text-decoration-color: oklch(0.12 0.009 279.29);
}

html body del {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body h1.article-title {
  color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.485 0.039 279.29);
  border-radius: 100%;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: oklch(0.745 0.164 161.65);
  border-color: oklch(0.745 0.164 161.65);
}

html body p {
  color: oklch(0.845 0.01 279.29);
  outline: oklch(0.845 0.01 279.29) none 0px;
  text-decoration-color: oklch(0.845 0.01 279.29);
}`,
    links: `html body a.external, html footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: oklch(0.92 0.004 279.29);
}

html body dt {
  color: oklch(0.92 0.004 279.29);
}

html body ol > li {
  color: oklch(0.92 0.004 279.29);
}

html body ol.overflow {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body ul > li {
  color: oklch(0.92 0.004 279.29);
}

html body ul.overflow {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: oklch(0.745 0.018 279.29);
}

html body blockquote {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body table {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 196.766px;
}

html body td {
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body th {
  border-bottom-color: oklch(0.355 0.029 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  color: oklch(0.92 0.004 279.29);
  font-weight: 700;
}

html body tr {
  background-color: oklch(0.255 0.021 279.29);
}`,
    code: `html body code {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.92 0.004 279.29);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.92 0.004 279.29);
}

html body pre > code, html pre:has(> code) {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body pre:has(> code) {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html body audio {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body figcaption {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body img {
  border-bottom-color: oklch(0.615 0.17 288);
  border-left-color: oklch(0.615 0.17 288);
  border-right-color: oklch(0.615 0.17 288);
  border-top-color: oklch(0.615 0.17 288);
}

html body video {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}`,
    embeds: `html body .file-embed {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.845 0.01 279.29);
  border-left-color: oklch(0.845 0.01 279.29);
  border-right-color: oklch(0.845 0.01 279.29);
  border-top-color: oklch(0.845 0.01 279.29);
}

html body .footnotes {
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body .transclude {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body .transclude-inner {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: oklch(0.485 0.039 279.29);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: oklch(0.485 0.039 279.29);
  border-right-color: oklch(0.485 0.039 279.29);
  border-top-color: oklch(0.485 0.039 279.29);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}

html body li.task-list-item[data-task='!'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='*'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='-'] {
  color: oklch(0.485 0.039 279.29);
  text-decoration: line-through;
  text-decoration-color: oklch(0.485 0.039 279.29);
}

html body li.task-list-item[data-task='/'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='>'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='?'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='I'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='S'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='b'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='c'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='d'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='f'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='i'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='k'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='l'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='p'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='u'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body li.task-list-item[data-task='w'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body ul > li.task-list-item {
  display: flex;
}

html body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-off'%3E%3Cpath d='m2 2 20 20'/%3E%3Cpath d='M8.35 2.69A10 10 0 0 1 21.3 15.65'/%3E%3Cpath d='M19.08 19.08A10 10 0 1 1 4.92 4.92'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-off'%3E%3Cpath d='m2 2 20 20'/%3E%3Cpath d='M8.35 2.69A10 10 0 0 1 21.3 15.65'/%3E%3Cpath d='M19.08 19.08A10 10 0 1 1 4.92 4.92'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: oklch(0.615 0.028 279.29);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='19px' viewBox='0 -960 960 960' width='19px' fill='%23e8eaed'%3E%3Cpath d='M479.59-96Q439-96 410.5-124.91q-28.5-28.9-28.5-69.5 0-40.59 28.91-69.09 28.9-28.5 69.5-28.5 40.59 0 69.09 28.91 28.5 28.9 28.5 69.5 0 40.59-28.91 69.09-28.9 28.5-69.5 28.5Zm.2-298Q436-394 406-424.17q-30-30.16-30-73.89v-260.22Q376-802 406.21-832t74-30Q524-862 554-831.83q30 30.16 30 73.89v260.22Q584-454 553.79-424t-74 30Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='19px' viewBox='0 -960 960 960' width='19px' fill='%23e8eaed'%3E%3Cpath d='M479.59-96Q439-96 410.5-124.91q-28.5-28.9-28.5-69.5 0-40.59 28.91-69.09 28.9-28.5 69.5-28.5 40.59 0 69.09 28.91 28.5 28.9 28.5 69.5 0 40.59-28.91 69.09-28.9 28.5-69.5 28.5Zm.2-298Q436-394 406-424.17q-30-30.16-30-73.89v-260.22Q376-802 406.21-832t74-30Q524-862 554-831.83q30 30.16 30 73.89v260.22Q584-454 553.79-424t-74 30Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: oklch(0.615 0.245 13.65);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 -960 960 960' width='18px' fill='%23e8eaed'%3E%3Cpath d='M479.75-218Q504-218 521-234.75q17-16.74 17-41Q538-300 521.25-317q-16.74-17-41-17Q456-334 439-317.25q-17 16.74-17 41Q422-252 438.75-235q16.74 17 41 17Zm.53 154q-85.92 0-161.76-32.52-75.84-32.52-132.66-89.34-56.82-56.82-89.34-132.62Q64-394.28 64-480.46q0-86.44 32.58-162 32.58-75.57 89.5-132.55Q243-832 318.7-864q75.69-32 161.76-32 86.43 0 161.98 32Q718-832 775-775t89 132.81q32 75.81 32 162T864-318.5q-32 75.5-88.99 132.42-56.98 56.92-132.77 89.5Q566.45-64 480.28-64Zm2.68-590q22.58 0 41.81 12.68Q544-628.64 544-606.39 544-586 531.31-569q-12.7 17-29.31 30-26 22-49 47.5T430-433q0 19.67 14.18 32.83Q458.36-387 478.6-387q20.65 0 35.03-13.5Q528-414 533-435q5-23 19.64-40.17 14.63-17.17 31.36-32.77 23-22.06 40-50.75T641-619q0-57-47.5-91.5T485.14-745q-42.05 0-79.59 19-37.55 19-63.71 54.27-9.84 12.81-5.34 28.77Q341-627 354.64-615.2 372-601 393-607.5q21-6.5 36-23.5 11-12 24.35-17.5 13.35-5.5 29.61-5.5Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 -960 960 960' width='18px' fill='%23e8eaed'%3E%3Cpath d='M479.75-218Q504-218 521-234.75q17-16.74 17-41Q538-300 521.25-317q-16.74-17-41-17Q456-334 439-317.25q-17 16.74-17 41Q422-252 438.75-235q16.74 17 41 17Zm.53 154q-85.92 0-161.76-32.52-75.84-32.52-132.66-89.34-56.82-56.82-89.34-132.62Q64-394.28 64-480.46q0-86.44 32.58-162 32.58-75.57 89.5-132.55Q243-832 318.7-864q75.69-32 161.76-32 86.43 0 161.98 32Q718-832 775-775t89 132.81q32 75.81 32 162T864-318.5q-32 75.5-88.99 132.42-56.98 56.92-132.77 89.5Q566.45-64 480.28-64Zm2.68-590q22.58 0 41.81 12.68Q544-628.64 544-606.39 544-586 531.31-569q-12.7 17-29.31 30-26 22-49 47.5T430-433q0 19.67 14.18 32.83Q458.36-387 478.6-387q20.65 0 35.03-13.5Q528-414 533-435q5-23 19.64-40.17 14.63-17.17 31.36-32.77 23-22.06 40-50.75T641-619q0-57-47.5-91.5T485.14-745q-42.05 0-79.59 19-37.55 19-63.71 54.27-9.84 12.81-5.34 28.77Q341-627 354.64-615.2 372-601 393-607.5q21-6.5 36-23.5 11-12 24.35-17.5 13.35-5.5 29.61-5.5Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: oklch(0.615 0.17 46.85);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.3' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-quote'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.3' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-quote'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: oklch(0.615 0.028 279.29);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='19px' viewBox='0 -960 960 960' width='19px' fill='%23e8eaed'%3E%3Cpath d='m480-270-157 94q-15 8-29.5 7t-25.5-9q-11-8-16-22.5t-1-29.5l41-176-139-118q-13-10-15.5-24.5T139-576q4-13 16-22.5t27-10.5l181-16 72-167q7-16 19-23t26-7q14 0 26 7t19 23l72 168 181 15q15 1 27 11t16 23q4 13 1 27t-16 24L668-406l41 176q4 15-1 29.5T692-178q-11 8-25.5 9t-29.5-7l-157-94Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='19px' viewBox='0 -960 960 960' width='19px' fill='%23e8eaed'%3E%3Cpath d='m480-270-157 94q-15 8-29.5 7t-25.5-9q-11-8-16-22.5t-1-29.5l41-176-139-118q-13-10-15.5-24.5T139-576q4-13 16-22.5t27-10.5l181-16 72-167q7-16 19-23t26-7q14 0 26 7t19 23l72 168 181 15q15 1 27 11t16 23q4 13 1 27t-16 24L668-406l41 176q4 15-1 29.5T692-178q-11 8-25.5 9t-29.5-7l-157-94Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: oklch(0.745 0.153 97.11);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-loader'%3E%3Cpath d='M12 2v4'/%3E%3Cpath d='m16.2 7.8 2.9-2.9'/%3E%3Cpath d='M18 12h4'/%3E%3Cpath d='m16.2 16.2 2.9 2.9'/%3E%3Cpath d='M12 18v4'/%3E%3Cpath d='m4.9 19.1 2.9-2.9'/%3E%3Cpath d='M2 12h4'/%3E%3Cpath d='m4.9 4.9 2.9 2.9'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-loader'%3E%3Cpath d='M12 2v4'/%3E%3Cpath d='m16.2 7.8 2.9-2.9'/%3E%3Cpath d='M18 12h4'/%3E%3Cpath d='m16.2 16.2 2.9 2.9'/%3E%3Cpath d='M12 18v4'/%3E%3Cpath d='m4.9 19.1 2.9-2.9'/%3E%3Cpath d='M2 12h4'/%3E%3Cpath d='m4.9 4.9 2.9 2.9'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: oklch(0.615 0.028 279.29);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-calendar'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-calendar'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: oklch(0.615 0.028 279.29);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 -960 960 960' width='18px' fill='%23e8eaed'%3E%3Cpath d='M762-521 612-671q-16-16-15.5-37.5T613-746q16-15 37.5-15t36.5 15l188 188q8 8 11.5 17t3.5 20q0 11-3.5 20T875-484L687-296q-16 16-37 15.5T613-296q-16-16-16.5-37.5T612-371l150-150Zm-288 53H264q-45 0-77.5 32T154-358v137q0 22-15.5 37.5T101-168q-22 0-37.5-15.5T48-221v-137q0-90 63.5-153T264-574h210l-98-98q-16-16-15.5-38t16.5-37q16-15 37-15t36 15l189 189q8 8 11.5 17t3.5 20q0 11-3.5 20T639-484L451-296q-15 15-36.5 15.5T377-295q-16-15-16.5-37t15.5-38l98-98Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 -960 960 960' width='18px' fill='%23e8eaed'%3E%3Cpath d='M762-521 612-671q-16-16-15.5-37.5T613-746q16-15 37.5-15t36.5 15l188 188q8 8 11.5 17t3.5 20q0 11-3.5 20T875-484L687-296q-16 16-37 15.5T613-296q-16-16-16.5-37.5T612-371l150-150Zm-288 53H264q-45 0-77.5 32T154-358v137q0 22-15.5 37.5T101-168q-22 0-37.5-15.5T48-221v-137q0-90 63.5-153T264-574h210l-98-98q-16-16-15.5-38t16.5-37q16-15 37-15t36 15l189 189q8 8 11.5 17t3.5 20q0 11-3.5 20T639-484L451-296q-15 15-36.5 15.5T377-295q-16-15-16.5-37t15.5-38l98-98Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: oklch(0.615 0.176 260.58);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.7' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-bookmark'%3E%3Cpath d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.7' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-bookmark'%3E%3Cpath d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: oklch(0.615 0.176 260.58);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-thumbs-up'%3E%3Cpath d='M7 10v12'/%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-thumbs-up'%3E%3Cpath d='M7 10v12'/%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: oklch(0.615 0.245 13.65);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-chevron-up'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m8 14 4-4 4 4'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-chevron-up'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m8 14 4-4 4 4'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: oklch(0.615 0.245 13.65);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-flame'%3E%3Cpath d='M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-flame'%3E%3Cpath d='M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: oklch(0.615 0.17 46.85);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-alert'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='12' x2='12' y1='8' y2='12'/%3E%3Cline x1='12' x2='12.01' y1='16' y2='16'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-alert'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='12' x2='12' y1='8' y2='12'/%3E%3Cline x1='12' x2='12.01' y1='16' y2='16'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 -960 960 960' width='18px' fill='%23e8eaed'%3E%3Cpath d='M407.74-240Q378-240 357-261.15 336-282.3 336-312v-67q-57-37.3-88.5-95.65Q216-533 216-600q0-110.31 76.78-187.16 76.78-76.84 187-76.84T667-787.16q77 76.85 77 187.16 0 66.82-31.5 125.41T624-379v67q0 29.7-21.18 50.85Q581.65-240 551.91-240H407.74ZM396-96q-15.3 0-25.65-10.29Q360-116.58 360-131.79t10.35-25.71Q380.7-168 396-168h168q15.3 0 25.65 10.29Q600-147.42 600-132.21t-10.35 25.71Q579.3-96 564-96H396Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 -960 960 960' width='18px' fill='%23e8eaed'%3E%3Cpath d='M407.74-240Q378-240 357-261.15 336-282.3 336-312v-67q-57-37.3-88.5-95.65Q216-533 216-600q0-110.31 76.78-187.16 76.78-76.84 187-76.84T667-787.16q77 76.85 77 187.16 0 66.82-31.5 125.41T624-379v67q0 29.7-21.18 50.85Q581.65-240 551.91-240H407.74ZM396-96q-15.3 0-25.65-10.29Q360-116.58 360-131.79t10.35-25.71Q380.7-168 396-168h168q15.3 0 25.65 10.29Q600-147.42 600-132.21t-10.35 25.71Q579.3-96 564-96H396Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: oklch(0.615 0.176 260.58);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: oklch(0.745 0.153 97.11);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-key'%3E%3Cpath d='m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4'/%3E%3Cpath d='m21 2-9.6 9.6'/%3E%3Ccircle cx='7.5' cy='15.5' r='5.5'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-key'%3E%3Cpath d='m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4'/%3E%3Cpath d='m21 2-9.6 9.6'/%3E%3Ccircle cx='7.5' cy='15.5' r='5.5'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: oklch(0.615 0.17 46.85);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-map-pin'%3E%3Cpath d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-map-pin'%3E%3Cpath d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: oklch(0.615 0.245 13.65);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-thumbs-up'%3E%3Cpath d='M7 10v12'/%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-thumbs-up'%3E%3Cpath d='M7 10v12'/%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: oklch(0.615 0.183 140.09);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-dollar-sign'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8'/%3E%3Cpath d='M12 18V6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-dollar-sign'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8'/%3E%3Cpath d='M12 18V6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: oklch(0.615 0.183 140.09);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-chevron-up'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m8 14 4-4 4 4'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-circle-chevron-up'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m8 14 4-4 4 4'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: oklch(0.615 0.183 140.09);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-crown'%3E%3Cpath d='M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z'/%3E%3Cpath d='M5 21h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-crown'%3E%3Cpath d='M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z'/%3E%3Cpath d='M5 21h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: oklch(0.745 0.153 97.11);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: oklch(0.615 0.176 260.58);
  border-left-color: oklch(0.615 0.176 260.58);
  border-right-color: oklch(0.615 0.176 260.58);
  border-top-color: oklch(0.615 0.176 260.58);
  color: oklch(0.615 0.176 260.58);
  gap: 6px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: oklch(0.615 0.176 260.58);
}

html body .callout[data-callout="abstract"] {
  --callout-color: oklch(48.5% 0.039 279.29);
  background-color: color(srgb 0.352846 0.364726 0.459747 / 0.2);
  border-bottom-color: color(srgb 0.352845 0.364726 0.459747 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.352845 0.364726 0.459747 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.352845 0.364726 0.459747 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.352845 0.364726 0.459747 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] {
  --callout-color: oklch(48.5% 0.193 13.65);
  background-color: color(srgb 0.694829 0.0072342 0.239863 / 0.2);
  border-bottom-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] {
  --callout-color: oklch(48.5% 0.193 13.65);
  background-color: color(srgb 0.694829 0.0072342 0.239863 / 0.2);
  border-bottom-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="example"] {
  --callout-color: oklch(48.5% 0.1 97.11);
  background-color: color(srgb 0.43539 0.370195 0.000193895 / 0.2);
  border-bottom-color: color(srgb 0.43539 0.370195 0.000193895 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.43539 0.370195 0.000193895 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.43539 0.370195 0.000193895 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.43539 0.370195 0.000193895 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] {
  --callout-color: oklch(48.5% 0.193 13.65);
  background-color: color(srgb 0.694829 0.0072342 0.239863 / 0.2);
  border-bottom-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.694829 0.0072342 0.239863 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="info"] {
  --callout-color: oklch(61.5% 0.028 279.29);
  background-color: color(srgb 0.504597 0.514759 0.587372 / 0.2);
  border-bottom-color: color(srgb 0.504597 0.514759 0.587372 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.504597 0.514759 0.587372 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.504597 0.514759 0.587372 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.504597 0.514759 0.587372 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  --callout-color: oklch(48.5% 0.173 260.58);
  background-color: color(srgb 0.108066 0.344328 0.747263 / 0.2);
  border-bottom-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="question"] {
  --callout-color: oklch(48.5% 0.134 46.85);
  background-color: color(srgb 0.600474 0.253404 0.00368491 / 0.2);
  border-bottom-color: color(srgb 0.600474 0.253404 0.00368491 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.600474 0.253404 0.00368491 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.600474 0.253404 0.00368491 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.600474 0.253404 0.00368491 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] {
  --callout-color: oklch(48.5% 0.039 279.29);
  background-color: color(srgb 0.352846 0.364726 0.459747 / 0.2);
  border-bottom-color: color(srgb 0.352845 0.364726 0.459747 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.352845 0.364726 0.459747 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.352845 0.364726 0.459747 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.352845 0.364726 0.459747 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="success"] {
  --callout-color: oklch(48.5% 0.145 140.09);
  background-color: color(srgb 0.153674 0.444627 0.0730724 / 0.2);
  border-bottom-color: color(srgb 0.153674 0.444627 0.0730724 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.153674 0.444627 0.0730724 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.153674 0.444627 0.0730724 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.153674 0.444627 0.0730724 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] {
  --callout-color: oklch(48.5% 0.106 161.65);
  background-color: color(srgb 0.0116796 0.442945 0.296735 / 0.2);
  border-bottom-color: color(srgb 0.0116796 0.442945 0.296735 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.0116796 0.442945 0.296735 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.0116796 0.442945 0.296735 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.0116796 0.442945 0.296735 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] {
  --callout-color: oklch(48.5% 0.173 260.58);
  background-color: color(srgb 0.108066 0.344328 0.747263 / 0.2);
  border-bottom-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] {
  --callout-color: oklch(48.5% 0.134 46.85);
  background-color: color(srgb 0.600474 0.253404 0.00368491 / 0.2);
  border-bottom-color: color(srgb 0.600474 0.253404 0.00368491 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.600474 0.253404 0.00368491 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.600474 0.253404 0.00368491 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.600474 0.253404 0.00368491 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: oklch(0.12 0.009 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.92 0.004 279.29);
}

html body .search > .search-container > .search-space {
  background-color: oklch(0.135 0.01 279.29);
}

html body .search > .search-container > .search-space > * {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration-color: oklch(0.92 0.004 279.29);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.92 0.004 279.29);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: oklch(0.92 0.004 279.29);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: oklch(0.92 0.004 279.29);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.18 0.014 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: oklch(0.92 0.004 279.29);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.255 0.021 279.29);
}

html body a.internal.tag-link::before {
  color: oklch(0.845 0.06 260.58);
}

html body h1 {
  color: oklch(0.615 0.17 288);
  font-family: "Bricolage Grotesque";
}

html body h2 {
  color: rgb(242, 66, 255);
  font-family: "Bricolage Grotesque";
}

html body h2.page-title, html h2.page-title a {
  color: oklch(0.615 0.17 288);
  font-family: "Bricolage Grotesque";
}

html body h3 {
  color: rgb(255, 116, 23);
  font-family: "Bricolage Grotesque";
}

html body h4 {
  color: rgb(218, 1, 77);
  font-family: "Bricolage Grotesque";
}

html body h5 {
  color: oklch(0.845 0.01 279.29);
  font-family: "Bricolage Grotesque";
}

html body h6 {
  color: oklch(0.845 0.01 279.29);
  font-family: "Bricolage Grotesque";
}

html body hr {
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
}`,
    scrollbars: `html body .callout {
  --callout-color: oklch(48.5% 0.173 260.58);
  border-bottom-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.108066 0.344328 0.747263 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-left: 12px;
}

html body ::-webkit-scrollbar {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}

html body ::-webkit-scrollbar-corner {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}

html body ::-webkit-scrollbar-thumb {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}

html body ::-webkit-scrollbar-track {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.845 0.01 279.29);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.845 0.01 279.29);
}`,
    toc: `html body details.toc summary::marker {
  color: oklch(0.92 0.004 279.29);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.615 0.028 279.29);
  border-left-color: oklch(0.615 0.028 279.29);
  border-right-color: oklch(0.615 0.028 279.29);
  border-top-color: oklch(0.615 0.028 279.29);
  color: oklch(0.615 0.028 279.29);
}`,
    footer: `html body footer {
  background-color: oklch(0.18 0.014 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  color: oklch(0.845 0.01 279.29);
}

html body footer ul li a {
  color: oklch(0.845 0.01 279.29);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: oklch(0.92 0.004 279.29);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.845 0.01 279.29);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.845 0.01 279.29);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body li.section-li > .section .meta {
  color: oklch(0.845 0.01 279.29);
}

html body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.845 0.01 279.29);
}

html body ul.section-ul {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: oklch(0.615 0.028 279.29);
  border-left-color: oklch(0.615 0.028 279.29);
  border-right-color: oklch(0.615 0.028 279.29);
  border-top-color: oklch(0.615 0.028 279.29);
  color: oklch(0.615 0.028 279.29);
}

html body .darkmode svg {
  color: oklch(0.615 0.028 279.29);
  stroke: oklch(0.615 0.028 279.29);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: oklch(0.845 0.01 279.29);
  border-left-color: oklch(0.845 0.01 279.29);
  border-right-color: oklch(0.845 0.01 279.29);
  border-top-color: oklch(0.845 0.01 279.29);
  color: oklch(0.845 0.01 279.29);
}

html body .breadcrumb-element p {
  color: oklch(0.745 0.018 279.29);
  font-family: Inter;
}`,
    misc: `html body .katex-display {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body .metadata {
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  color: oklch(0.845 0.01 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: oklch(0.845 0.01 279.29);
  border-left-color: oklch(0.845 0.01 279.29);
  border-right-color: oklch(0.845 0.01 279.29);
  border-top-color: oklch(0.845 0.01 279.29);
  color: oklch(0.845 0.01 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: oklch(0.18 0.014 279.29);
}

html body .page-header h2.page-title {
  color: oklch(0.92 0.004 279.29);
  font-family: Inter;
}

html body abbr {
  color: oklch(0.92 0.004 279.29);
}

html body details {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body input[type=text] {
  border-bottom-color: oklch(0.845 0.01 279.29);
  border-left-color: oklch(0.845 0.01 279.29);
  border-right-color: oklch(0.845 0.01 279.29);
  border-top-color: oklch(0.845 0.01 279.29);
  color: oklch(0.845 0.01 279.29);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body kbd {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

html body progress {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

html body sub {
  color: oklch(0.92 0.004 279.29);
}

html body summary {
  color: oklch(0.92 0.004 279.29);
}

html body sup {
  color: oklch(0.92 0.004 279.29);
}

html body ul.tags > li {
  background-color: oklch(0.355 0.127 260.58);
  color: oklch(0.845 0.06 260.58);
}`,
  },
  light: {},
};
