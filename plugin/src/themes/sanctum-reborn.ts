import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sanctum-reborn",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 24.4 !important;
  --accent-l: 61.8% !important;
  --accent-s: 90.8% !important;
  --active-line-accent: transparent !important;
  --aside-background: transparent !important;
  --aside-background-hover: rgba(142, 140, 139, 0.16) !important;
  --aside-border-color: rgb(58, 56, 56) !important;
  --aside-text-color: rgb(199, 197, 194) !important;
  --background: rgb(22, 22, 22) !important;
  --background-active: rgba(142, 140, 139, 0.4) !important;
  --background-hover: rgba(142, 140, 139, 0.16) !important;
  --background-inverse: rgb(244, 244, 240) !important;
  --background-inverse-hover: rgba(226, 224, 220, 0.5) !important;
  --background-modifier-active-hover: rgba(102, 153, 97, 0.15) !important;
  --background-modifier-border: rgb(58, 56, 56) !important;
  --background-modifier-border-focus: hsl(199.5deg, 38.8%, 40.4%) !important;
  --background-modifier-border-hover: rgb(58, 56, 56) !important;
  --background-modifier-cover: rgba(142, 140, 139, 0.16) !important;
  --background-modifier-error: hsl(9.6deg, 66.2%, 46.5%) !important;
  --background-modifier-error-hover: hsl(9.6deg, 66.2%, 46.5%) !important;
  --background-modifier-error-rgb: 197, 65, 40 !important;
  --background-modifier-form-field: rgb(38, 38, 37) !important;
  --background-modifier-form-field-hover: rgb(38, 38, 37) !important;
  --background-modifier-hover: rgba(142, 140, 139, 0.16) !important;
  --background-modifier-message: rgb(38, 38, 37) !important;
  --background-modifier-success: hsl(114.6deg, 22.4%, 49%) !important;
  --background-modifier-success-rgb: 102, 153, 97 !important;
  --background-primary: rgb(22, 22, 22) !important;
  --background-primary-alt: rgb(38, 38, 37) !important;
  --background-secondary: rgb(22, 22, 22) !important;
  --background-secondary-alt: rgb(22, 22, 22) !important;
  --background-selected: rgba(142, 140, 139, 0.24) !important;
  --background-selected-hover: rgba(142, 140, 139, 0.32) !important;
  --bases-cards-background: rgb(22, 22, 22) !important;
  --bases-cards-cover-background: rgb(38, 38, 37) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(58, 56, 56) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(58, 56, 56) !important;
  --bases-embed-border-color: rgb(58, 56, 56) !important;
  --bases-group-heading-property-color: rgb(199, 197, 194) !important;
  --bases-table-border-color: rgb(58, 56, 56) !important;
  --bases-table-cell-background-active: rgb(22, 22, 22) !important;
  --bases-table-cell-background-disabled: rgb(38, 38, 37) !important;
  --bases-table-cell-background-selected: hsla(24.4, 90.8%, 61.8%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(199.5deg, 38.8%, 40.4%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(102, 153, 97) !important;
  --bases-table-group-background: rgb(38, 38, 37) !important;
  --bases-table-header-background: rgb(22, 22, 22) !important;
  --bases-table-header-background-hover: rgba(142, 140, 139, 0.16) !important;
  --bases-table-header-color: rgb(199, 197, 194) !important;
  --bases-table-summary-background: rgb(22, 22, 22) !important;
  --bases-table-summary-background-hover: rgba(142, 140, 139, 0.16) !important;
  --black: 0, 0, 0 !important;
  --blockquote-border-color: rgb(58, 56, 56) !important;
  --blockquote-border-thickness: 0px !important;
  --blockquote-size: 0.9rem !important;
  --blue: hsl(217.1deg, 31.4%, 47.5%) !important;
  --blue-10: hsl(195deg, 16.7%, 95.3%) !important;
  --blue-100: hsl(221deg, 100%, 11.8%) !important;
  --blue-20: hsl(190.9deg, 16.4%, 86.9%) !important;
  --blue-30: hsl(190.4deg, 18.7%, 75.9%) !important;
  --blue-40: hsl(203.1deg, 36.3%, 64.9%) !important;
  --blue-50: hsl(208.1deg, 34.2%, 55.9%) !important;
  --blue-60: hsl(217.1deg, 31.4%, 47.5%) !important;
  --blue-70: hsl(215.9deg, 45.1%, 35.7%) !important;
  --blue-80: hsl(216.3deg, 59.4%, 25.1%) !important;
  --blue-90: hsl(215deg, 83.7%, 16.9%) !important;
  --bodyFont: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border-inverse: rgb(244, 244, 240) !important;
  --border-strong-1: rgb(112, 110, 109) !important;
  --border-strong-2: rgb(142, 140, 139) !important;
  --border-subtle-0: rgb(58, 56, 56) !important;
  --border-subtle-1: rgb(58, 56, 56) !important;
  --border-subtle-2: rgb(84, 81, 81) !important;
  --border-subtle-selected-1: rgb(84, 81, 81) !important;
  --border-subtle-selected-2: rgb(112, 110, 109) !important;
  --button-radius: 4px !important;
  --calendar-dot: hsl(24.4deg, 90.8%, 61.8%) !important;
  --calendar-dot-hover: hsl(9.6deg, 66.2%, 46.5%) !important;
  --callout-border-opacity: 30%;
  --callout-bug: 197, 65, 40;
  --callout-error: 197, 65, 40;
  --callout-fail: 197, 65, 40;
  --callout-padding: 16px 12px 12px 24px;
  --callout-success: 102, 153, 97;
  --callout-title-background: transparent;
  --canvas-background: rgb(22, 22, 22) !important;
  --canvas-card-label-color: rgb(112, 110, 109) !important;
  --canvas-color-1: 197, 65, 40 !important;
  --canvas-color-3: 243, 189, 79 !important;
  --canvas-color-4: 102, 153, 97 !important;
  --canvas-controls-icon-stroke: 1px !important;
  --caret-color: rgb(244, 244, 240) !important;
  --checkbox-border-color: rgb(112, 110, 109) !important;
  --checkbox-border-color-hover: rgb(102, 153, 97) !important;
  --checkbox-checked-color-hover: rgba(102, 153, 97, 0.9) !important;
  --checkbox-color: rgb(102, 153, 97) !important;
  --checkbox-color-hover: rgb(102, 153, 97 0.5) !important;
  --checkbox-color-rgb: 102, 153, 97 !important;
  --checkbox-marker-color: rgb(22, 22, 22) !important;
  --checkbox-radius: 16px !important;
  --checklist-done-color: rgb(112, 110, 109) !important;
  --checklist-done-strike-color: rgb(112, 110, 109) !important;
  --code-background: rgb(38, 38, 37) !important;
  --code-border-color: rgb(58, 56, 56) !important;
  --code-bracket-background: rgba(142, 140, 139, 0.16) !important;
  --code-comment: rgb(112, 110, 109) !important;
  --code-function: hsl(30.2deg, 98.6%, 72%) !important;
  --code-important: hsl(268deg, 57%, 66%) !important;
  --code-keyword: hsl(348.5deg, 79.3%, 63.9%) !important;
  --code-normal: rgb(199, 197, 194) !important;
  --code-normal-inline: hsl(348.5deg, 79.3%, 63.9%) !important;
  --code-property: hsl(187.4deg, 22.4%, 50%) !important;
  --code-punctuation: rgb(199, 197, 194) !important;
  --code-string: hsl(96.9deg, 31.8%, 56.9%) !important;
  --code-tag: hsl(11.2deg, 88.7%, 58.4%) !important;
  --code-value: hsl(268deg, 57%, 66%) !important;
  --codeFont: menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(112, 110, 109) !important;
  --collapse-icon-color-collapsed: rgb(102, 153, 97) !important;
  --color-accent: rgb(102, 153, 97) !important;
  --color-accent-1: rgb(102, 153, 97) !important;
  --color-accent-2: rgb(102, 153, 97) !important;
  --color-accent-hsl: 24.4, 90.8%, 61.8% !important;
  --color-accent-rgb: 102, 153, 97 !important;
  --color-accent-rgb-d: 102, 153, 97 !important;
  --color-accent-rgb-l: 246, 141, 69 !important;
  --color-green-rgb: 102, 153, 97 !important;
  --color-red-rgb: 197, 65, 40 !important;
  --color-yellow-rgb: 243, 189, 79 !important;
  --custom-accent-color: 102, 153, 97 !important;
  --cyan: hsl(187.4deg, 22.4%, 50%) !important;
  --cyan-10: hsl(90deg, 15.4%, 94.9%) !important;
  --cyan-100: hsl(214.8deg, 100%, 9.8%) !important;
  --cyan-20: hsl(98.2deg, 15.9%, 86.5%) !important;
  --cyan-30: hsl(155deg, 18.7%, 74.9%) !important;
  --cyan-40: hsl(182.2deg, 26.2%, 59.6%) !important;
  --cyan-50: hsl(187.4deg, 22.4%, 50%) !important;
  --cyan-60: hsl(199.5deg, 38.8%, 40.4%) !important;
  --cyan-70: hsl(202.8deg, 57.6%, 29.6%) !important;
  --cyan-80: hsl(200.9deg, 100%, 18%) !important;
  --cyan-90: hsl(206.1deg, 100%, 13.5%) !important;
  --dark: rgb(244, 244, 240) !important;
  --darkgray: rgb(244, 244, 240) !important;
  --divider-color: rgb(58, 56, 56) !important;
  --divider-color-hover: rgb(102, 153, 97) !important;
  --duration-fast-1: 70ms !important;
  --duration-fast-2: 110ms !important;
  --duration-moderate-1: 150ms !important;
  --duration-moderate-2: 240ms !important;
  --duration-slow-1: 400ms !important;
  --duration-slow-2: 700ms !important;
  --elevation-1: 0 2px 6px 0 rgba(0, 0, 0, 0.2) !important;
  --elevation-2: 0 2px 6px 0 rgba(0, 0, 0, 0.3) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(58, 56, 56), inset 0 0 0 1px rgb(58, 56, 56) !important;
  --embed-border-color: rgb(102, 153, 97) !important;
  --embed-border-left: 1px solid rgb(102, 153, 97) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(102, 153, 97) !important;
  --embed-border-width: 1px !important;
  --field-1: rgb(38, 38, 37) !important;
  --field-hover-1: rgb(58, 56, 56) !important;
  --file-header-background: rgb(22, 22, 22) !important;
  --file-header-background-focused: rgb(22, 22, 22) !important;
  --file-header-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 12px !important;
  --file-line-width: 40rem !important;
  --flair-color: rgb(244, 244, 240) !important;
  --focus: hsl(199.5deg, 38.8%, 40.4%) !important;
  --focus-inset: rgb(22, 22, 22) !important;
  --focus-inverse: rgb(253, 254, 254) !important;
  --font-editor: ??, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-editor-theme: ?? !important;
  --font-interface: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: inter, sans-serif !important;
  --font-mermaid: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: menlo, sfmono-regular, consolas, "Roboto Mono", monospace !important;
  --font-print: inter, sans-serif, Arial' !important;
  --font-scale-0: 1rem !important;
  --font-scale-00: 0.875rem !important;
  --font-scale-000: 0.75rem !important;
  --font-scale-1: 1.125rem !important;
  --font-scale-10: 3.75rem !important;
  --font-scale-2: 1.25rem !important;
  --font-scale-3: 1.5rem !important;
  --font-scale-4: 1.75rem !important;
  --font-scale-5: 2rem !important;
  --font-scale-6: 2.25rem !important;
  --font-scale-7: 2.625rem !important;
  --font-scale-8: 3rem !important;
  --font-scale-9: 3.375rem !important;
  --font-text: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: inter, sans-serif !important;
  --font-ui-large: 18px !important;
  --font-ui-medium: 14px !important;
  --font-ui-small: 12px !important;
  --footnote-divider-color: rgb(58, 56, 56) !important;
  --footnote-id-color: rgb(199, 197, 194) !important;
  --footnote-id-color-no-occurrences: rgb(112, 110, 109) !important;
  --footnote-input-background-active: rgba(142, 140, 139, 0.16) !important;
  --graph-line: rgb(58, 56, 56) !important;
  --graph-node: rgb(199, 197, 194) !important;
  --graph-node-attachment: hsl(40.2deg, 87.2%, 63.1%) !important;
  --graph-node-focused: rgb(102, 153, 97) !important;
  --graph-node-tag: hsl(9.6deg, 66.2%, 46.5%) !important;
  --graph-node-unresolved: rgb(112, 110, 109) !important;
  --graph-text: rgb(244, 244, 240) !important;
  --gray: rgb(199, 197, 194) !important;
  --gray-10: 244, 244, 240 !important;
  --gray-100: 22, 22, 22 !important;
  --gray-20: 226, 224, 220 !important;
  --gray-30: 199, 197, 194 !important;
  --gray-40: 169, 168, 165 !important;
  --gray-50: 142, 140, 139 !important;
  --gray-60: 112, 110, 109 !important;
  --gray-70: 84, 81, 81 !important;
  --gray-80: 58, 56, 56 !important;
  --gray-90: 38, 38, 37 !important;
  --green: hsl(114.6deg, 22.4%, 49%) !important;
  --green-10: hsl(77.6deg, 48.6%, 93.1%) !important;
  --green-100: hsl(120deg, 100%, 5.3%) !important;
  --green-20: hsl(76.6deg, 48.5%, 81%) !important;
  --green-30: hsl(83.5deg, 44%, 67.1%) !important;
  --green-40: hsl(96.9deg, 31.8%, 56.9%) !important;
  --green-50: hsl(114.6deg, 22.4%, 49%) !important;
  --green-60: hsl(139deg, 32.3%, 36.5%) !important;
  --green-70: hsl(144.9deg, 52.8%, 24.1%) !important;
  --green-80: hsl(148.2deg, 100%, 12.9%) !important;
  --green-90: hsl(134.7deg, 100%, 8.8%) !important;
  --h1-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h1-size: 2em !important;
  --h1-weight: 600 !important;
  --h2-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h2-size: 1.75em !important;
  --h2-weight: 600 !important;
  --h3-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h3-size: 1.5em !important;
  --h3-weight: 600 !important;
  --h4-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --headerFont: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-counter: " " !important;
  --heading-formatting: rgb(112, 110, 109) !important;
  --highlight: rgba(102, 153, 97, 0.7) !important;
  --hr-color: rgb(58, 56, 56) !important;
  --hr-thickness: 1.5px !important;
  --icon-color: rgb(112, 110, 109) !important;
  --icon-color-active: rgb(102, 153, 97) !important;
  --icon-color-focused: rgb(244, 244, 240) !important;
  --icon-color-hover: rgb(199, 197, 194) !important;
  --icon-inverse: rgb(22, 22, 22) !important;
  --icon-l-stroke-width: 1.25px !important;
  --icon-m-stroke-width: 1.25px !important;
  --icon-on-color: rgb(253, 254, 254) !important;
  --icon-opacity: 1 !important;
  --icon-primary: rgb(244, 244, 240) !important;
  --icon-s-stroke-width: 1px !important;
  --icon-secondary: rgb(199, 197, 194) !important;
  --icon-size: 16px !important;
  --icon-stroke: 1.25px !important;
  --icon-xs: 16px !important;
  --icon-xs-stroke-width: 1px !important;
  --indentation-guide: rgb(255, 255, 255 0.15) !important;
  --indentation-guide-active: rgb(255, 255, 255 0.3) !important;
  --inline-title-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(112, 110, 109) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(112, 110, 109) !important;
  --input-radius: 4px !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0px 0.5px 0.4px hsl(0deg 0% 1% / 47%), 0px 0.8px 0.7px -1px hsl(0deg 0% 1% / 40%), 0px 1.9px 1.7px -2px hsl(0deg 0% 1% / 32%), 0px 4.5px 4px -3px hsl(0deg 0% 1% / 25%), 0.1px 9.4px 8.4px -4.1px hsl(0deg 0% 1% / 18%) !important;
  --input-shadow-hover: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0px 0.5px 0.5px hsl(0deg 0% 1% / 47%), 0px 0.9px 0.8px -1px hsl(0deg 0% 1% / 40%), 0px 1.9px 1.7px -2px hsl(0deg 0% 1% / 33%), 0px 4.5px 4.1px -3px hsl(0deg 0% 1% / 26%), 0.1px 9.4px 8.5px -4px hsl(0deg 0% 1% / 19%) !important;
  --interactive: rgb(102, 153, 97) !important;
  --interactive-accent: rgb(102, 153, 97) !important;
  --interactive-accent-hover: rgb(102, 153, 97) !important;
  --interactive-accent-hsl: 24.4, 90.8%, 61.8% !important;
  --lavender: hsl(268deg, 57%, 66%) !important;
  --lavender-10: hsl(264deg, 63%, 97%) !important;
  --lavender-100: hsl(266deg, 100%, 15%) !important;
  --lavender-20: hsl(264deg, 64%, 91%) !important;
  --lavender-30: hsl(264deg, 61%, 84%) !important;
  --lavender-40: hsl(266deg, 58%, 75%) !important;
  --lavender-50: hsl(268deg, 57%, 66%) !important;
  --lavender-60: hsl(270deg, 55%, 56%) !important;
  --lavender-70: hsl(271deg, 57%, 43%) !important;
  --lavender-80: hsl(275deg, 89%, 29%) !important;
  --lavender-90: hsl(273deg, 100%, 21%) !important;
  --layer-1: rgb(38, 38, 37) !important;
  --layer-2: rgb(58, 56, 56) !important;
  --layer-active-1: rgb(84, 81, 81) !important;
  --layer-active-2: rgb(112, 110, 109) !important;
  --layer-hover-1: rgba(58, 56, 56, 0.5) !important;
  --layer-hover-2: rgba(84, 81, 81, 0.5) !important;
  --layer-selected-1: rgb(58, 56, 56) !important;
  --layer-selected-2: rgb(84, 81, 81) !important;
  --layer-selected-hover-1: rgba(84, 81, 81, 0.5) !important;
  --layer-selected-hover-2: rgba(112, 110, 109, 0.5) !important;
  --leading-0: 1em !important;
  --leading-1: 1.125em !important;
  --leading-10: 2.75em !important;
  --leading-2: 1.25em !important;
  --leading-3: 1.375em !important;
  --leading-4: 1.5em !important;
  --leading-5: 1.625em !important;
  --leading-6: 1.75em !important;
  --leading-7: 1.875em !important;
  --leading-8: 2.25em !important;
  --leading-9: 2.5em !important;
  --light: rgb(22, 22, 22) !important;
  --lightgray: rgb(22, 22, 22) !important;
  --link-color: rgb(102, 153, 97) !important;
  --link-color-hover: rgb(102, 153, 97) !important;
  --link-external-color: rgb(102, 153, 97) !important;
  --link-external-color-hover: rgb(102, 153, 97) !important;
  --link-external-style: normal !important;
  --link-style: normal !important;
  --link-text-transform: none !important;
  --link-unresolved-color: rgb(102, 153, 97) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-bullet-border-triangle: 3px !important;
  --list-bullet-height-bullet-operator: 1px !important;
  --list-bullet-height-em-dash: 1.5px !important;
  --list-bullet-height-hyphen: 1.5px !important;
  --list-bullet-height-triangle: 0px !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 4px !important;
  --list-bullet-size-ring: 3px !important;
  --list-bullet-width-bullet-operator: 1px !important;
  --list-bullet-width-em-dash: 10px !important;
  --list-bullet-width-hyphen: 5px !important;
  --list-bullet-width-triangle: 6px !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgb(112, 110, 109) !important;
  --list-marker-color-collapsed: rgb(102, 153, 97) !important;
  --list-marker-color-hover: rgb(199, 197, 194) !important;
  --menu-background: rgb(22, 22, 22) !important;
  --menu-border-color: rgb(58, 56, 56) !important;
  --metadata-border-color: rgb(58, 56, 56) !important;
  --metadata-divider-color: rgb(58, 56, 56) !important;
  --metadata-input-background-active: rgba(142, 140, 139, 0.16) !important;
  --metadata-input-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(244, 244, 240) !important;
  --metadata-label-background-active: rgba(142, 140, 139, 0.16) !important;
  --metadata-label-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(199, 197, 194) !important;
  --metadata-label-text-color-hover: rgb(199, 197, 194) !important;
  --metadata-property-background-active: rgba(142, 140, 139, 0.16) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(199.5deg, 38.8%, 40.4%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(58, 56, 56) !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-background: rgb(22, 22, 22) !important;
  --modal-border-color: rgb(58, 56, 56) !important;
  --modal-radius: 10px !important;
  --motion-entrance-expressive: cubic-bezier(0, 0, 0.3, 1) !important;
  --motion-entrance-productive: cubic-bezier(0, 0, 0.38, 0.9) !important;
  --motion-exit-expressive: cubic-bezier(0.4, 0.14, 1, 1) !important;
  --motion-exit-productive: cubic-bezier(0.2, 0, 1, 0.9) !important;
  --motion-standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1) !important;
  --motion-standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9) !important;
  --nav-collapse-icon-color: rgb(112, 110, 109) !important;
  --nav-collapse-icon-color-collapsed: rgb(112, 110, 109) !important;
  --nav-heading-color: rgb(244, 244, 240) !important;
  --nav-heading-color-collapsed: rgb(112, 110, 109) !important;
  --nav-heading-color-collapsed-hover: rgb(199, 197, 194) !important;
  --nav-heading-color-hover: rgb(244, 244, 240) !important;
  --nav-item-background-active: rgba(142, 140, 139, 0.24) !important;
  --nav-item-background-hover: rgba(142, 140, 139, 0.16) !important;
  --nav-item-background-selected: hsl(24.4, 90.8%, 61.8% 0.2) !important;
  --nav-item-color: rgb(199, 197, 194) !important;
  --nav-item-color-active: rgb(244, 244, 240) !important;
  --nav-item-color-highlighted: rgb(102, 153, 97) !important;
  --nav-item-color-hover: rgb(244, 244, 240) !important;
  --nav-item-color-selected: rgb(244, 244, 240) !important;
  --nav-item-size: 12px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(112, 110, 109) !important;
  --nav-tag-color-active: rgb(199, 197, 194) !important;
  --nav-tag-color-hover: rgb(199, 197, 194) !important;
  --orange: hsl(24.4deg, 90.8%, 61.8%) !important;
  --orange-10: hsl(28.7deg, 85.2%, 94.7%) !important;
  --orange-100: hsl(357.8deg, 100%, 10.6%) !important;
  --orange-20: hsl(27.8deg, 79.4%, 86.7%) !important;
  --orange-30: hsl(30.2deg, 98.6%, 72%) !important;
  --orange-40: hsl(24.4deg, 90.8%, 61.8%) !important;
  --orange-50: hsl(18.3deg, 75%, 54.5%) !important;
  --orange-60: hsl(12.8deg, 60.5%, 45.7%) !important;
  --orange-70: hsl(358deg, 63.4%, 37.5%) !important;
  --orange-80: hsl(342.1deg, 82.5%, 24.7%) !important;
  --orange-90: hsl(346.4deg, 100%, 16.5%) !important;
  --overlay: rgba(22, 22, 22, 0.7) !important;
  --pdf-background: rgb(22, 22, 22) !important;
  --pdf-page-background: rgb(22, 22, 22) !important;
  --pdf-shadow: 0 0 0 1px rgb(58, 56, 56) !important;
  --pdf-sidebar-background: rgb(22, 22, 22) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(58, 56, 56) !important;
  --pill-border-color: rgb(58, 56, 56) !important;
  --pill-border-color-hover: rgb(58, 56, 56) !important;
  --pill-color: rgb(199, 197, 194) !important;
  --pill-color-hover: rgb(244, 244, 240) !important;
  --pill-color-remove: rgb(112, 110, 109) !important;
  --pill-color-remove-hover: rgb(102, 153, 97) !important;
  --pink: hsl(348.5deg, 79.3%, 63.9%) !important;
  --pink-10: hsl(352.5deg, 100%, 96.9%) !important;
  --pink-100: hsl(357.8deg, 100%, 10.6%) !important;
  --pink-20: hsl(355.6deg, 100%, 92%) !important;
  --pink-30: hsl(352.8deg, 94.9%, 84.5%) !important;
  --pink-40: hsl(351.4deg, 86.2%, 74.5%) !important;
  --pink-50: hsl(348.5deg, 79.3%, 63.9%) !important;
  --pink-60: hsl(343.4deg, 62.8%, 49.6%) !important;
  --pink-70: hsl(339.4deg, 71.6%, 35.9%) !important;
  --pink-80: hsl(342.1deg, 82.5%, 24.7%) !important;
  --pink-90: hsl(346.4deg, 100%, 16.5%) !important;
  --pistachio: hsl(63deg, 70.9%, 33.7%) !important;
  --pistachio-10: hsl(69.2deg, 37.1%, 93.1%) !important;
  --pistachio-100: hsl(52.8deg, 100%, 4.9%) !important;
  --pistachio-20: hsl(67.1deg, 37.8%, 82.4%) !important;
  --pistachio-30: hsl(64.8deg, 36.9%, 67.1%) !important;
  --pistachio-40: hsl(63.5deg, 42.6%, 47.8%) !important;
  --pistachio-50: hsl(63deg, 70.9%, 33.7%) !important;
  --pistachio-60: hsl(62.1deg, 100%, 22.7%) !important;
  --pistachio-70: hsl(61.4deg, 100%, 16.7%) !important;
  --pistachio-80: hsl(60deg, 100%, 11.6%) !important;
  --pistachio-90: hsl(58.5deg, 100%, 7.8%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgb(22, 22, 22) !important;
  --prompt-border-color: rgb(58, 56, 56) !important;
  --radius-l: 10px !important;
  --red: hsl(9.6deg, 66.2%, 46.5%) !important;
  --red-10: hsl(12.6deg, 100%, 96.3%) !important;
  --red-100: hsl(357.8deg, 100%, 10.6%) !important;
  --red-20: hsl(12.9deg, 100%, 90%) !important;
  --red-30: hsl(12deg, 100%, 81.4%) !important;
  --red-40: hsl(11.7deg, 94.7%, 70.4%) !important;
  --red-50: hsl(11.2deg, 88.7%, 58.4%) !important;
  --red-60: hsl(9.6deg, 66.2%, 46.5%) !important;
  --red-70: hsl(358deg, 63.4%, 37.5%) !important;
  --red-80: hsl(342.1deg, 82.5%, 24.7%) !important;
  --red-90: hsl(346.4deg, 100%, 16.5%) !important;
  --ribbon-background: rgb(22, 22, 22) !important;
  --ribbon-background-collapsed: rgb(22, 22, 22) !important;
  --scrollbar-active-thumb-bg: rgb(255, 255, 255 0.2) !important;
  --scrollbar-bg: rgb(255, 255, 255 0.05) !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: rgb(255, 255, 255 0.1) !important;
  --search-clear-button-color: rgb(199, 197, 194) !important;
  --search-icon-color: rgb(199, 197, 194) !important;
  --search-result-background: rgb(22, 22, 22) !important;
  --secondary: rgb(102, 153, 97) !important;
  --setting-group-heading-color: rgb(244, 244, 240) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-background: rgb(38, 38, 37) !important;
  --setting-items-border-color: rgb(58, 56, 56) !important;
  --setting-items-radius: 10px !important;
  --shadow-color: 0deg 0% 1% !important;
  --sidebar-markdown-font-size: 0.933em !important;
  --size-0: 0px !important;
  --size-1: 2px !important;
  --size-10: 64px !important;
  --size-11: 80px !important;
  --size-12: 96px !important;
  --size-13: 160px !important;
  --size-2: 4px !important;
  --size-3: 8px !important;
  --size-4: 12px !important;
  --size-5: 16px !important;
  --size-6: 24px !important;
  --size-7: 32px !important;
  --size-8: 40px !important;
  --size-9: 48px !important;
  --slider-thumb-border-color: rgb(58, 56, 56) !important;
  --slider-thumb-radius: 50% !important;
  --slider-thumb-y: -7px !important;
  --slider-track-background: rgb(58, 56, 56) !important;
  --status-bar-background: rgb(22, 22, 22) !important;
  --status-bar-border-color: rgb(58, 56, 56) !important;
  --status-bar-text-color: rgb(199, 197, 194) !important;
  --suggestion-background: rgb(22, 22, 22) !important;
  --tab-background-active: rgb(22, 22, 22) !important;
  --tab-container-background: rgb(22, 22, 22) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: rgb(58, 56, 56) !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: rgb(58, 56, 56) !important;
  --tab-stacked-font-size: 12px !important;
  --tab-switcher-background: rgb(22, 22, 22) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(22, 22, 22), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(102, 153, 97) !important;
  --tab-text-color: rgb(112, 110, 109) !important;
  --tab-text-color-active: rgb(199, 197, 194) !important;
  --tab-text-color-focused: rgb(112, 110, 109) !important;
  --tab-text-color-focused-active: rgb(244, 244, 240) !important;
  --tab-text-color-focused-active-current: rgb(244, 244, 240) !important;
  --tab-text-color-focused-highlighted: rgb(102, 153, 97) !important;
  --table-add-button-border-color: rgb(58, 56, 56) !important;
  --table-border-color: rgb(58, 56, 56) !important;
  --table-drag-handle-background-active: rgb(102, 153, 97) !important;
  --table-drag-handle-color: rgb(112, 110, 109) !important;
  --table-drag-handle-color-active: rgb(253, 254, 254) !important;
  --table-header-border-color: rgb(58, 56, 56) !important;
  --table-header-color: rgb(199, 197, 194) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 600 !important;
  --table-hover-highlight-color: rgb(102, 153, 97 0.15) !important;
  --table-selection: hsla(24.4, 90.8%, 61.8%, 0.1) !important;
  --table-selection-border-color: rgb(102, 153, 97) !important;
  --table-sticky-height: 600px !important;
  --tag-background: rgb(102, 153, 97 0.15) !important;
  --tag-background-hover: rgb(102, 153, 97 0.25) !important;
  --tag-border-color: rgb(102, 153, 97 0.15) !important;
  --tag-border-color-hover: rgb(102, 153, 97 0.25) !important;
  --tag-color: rgb(102, 153, 97) !important;
  --tag-color-hover: rgb(102, 153, 97) !important;
  --tertiary: rgb(102, 153, 97) !important;
  --text-accent: rgb(102, 153, 97) !important;
  --text-accent-hover: rgb(102, 153, 97) !important;
  --text-code: hsl(348.5deg, 79.3%, 63.9%) !important;
  --text-error: hsl(9.6deg, 66.2%, 46.5%) !important;
  --text-faint: rgb(112, 110, 109) !important;
  --text-highlight-bg: rgba(102, 153, 97, 0.7) !important;
  --text-highlight-bg-active: rgba(102, 153, 97, 0.7) !important;
  --text-muted: rgb(199, 197, 194) !important;
  --text-normal: rgb(244, 244, 240) !important;
  --text-on-accent: rgb(253, 254, 254) !important;
  --text-placeholder: rgb(112, 110, 109) !important;
  --text-primary: rgb(244, 244, 240) !important;
  --text-secondary: rgb(199, 197, 194) !important;
  --text-selection: rgba(102, 153, 97, 0.5) !important;
  --text-success: hsl(114.6deg, 22.4%, 49%) !important;
  --textHighlight: rgba(102, 153, 97, 0.7) !important;
  --titleFont: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(22, 22, 22) !important;
  --titlebar-background-focused: rgb(22, 22, 22) !important;
  --titlebar-border-color: rgb(58, 56, 56) !important;
  --titlebar-text-color: rgb(199, 197, 194) !important;
  --titlebar-text-color-focused: rgb(244, 244, 240) !important;
  --titlebar-text-color-highlighted: rgb(102, 153, 97) !important;
  --toggle-radius: 100vmax !important;
  --toggle-s-thumb-height: 14px !important;
  --toggle-s-thumb-width: 14px !important;
  --toggle-s-width: 32px !important;
  --toggle-thumb-color: rgb(253, 254, 254) !important;
  --toggle-thumb-height: 20px !important;
  --toggle-thumb-radius: 20px !important;
  --toggle-thumb-width: 20px !important;
  --toggle-width: 48px !important;
  --tracking-0: 0px !important;
  --tracking-1: 0.16px !important;
  --tracking-2: 0.32px !important;
  --tracking-3: 0.64px !important;
  --tracking-4: 0.96px !important;
  --vault-name-color: rgb(244, 244, 240) !important;
  --vault-name-font-size: 14px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgb(244, 244, 240) !important;
  --vault-profile-color-hover: rgb(244, 244, 240) !important;
  --vault-profile-font-size: 12px !important;
  --viridian: hsl(151.5deg, 24.9%, 48%) !important;
  --viridian-10: hsl(96deg, 18.5%, 94.7%) !important;
  --viridian-100: hsl(156.9deg, 100%, 5.1%) !important;
  --viridian-20: hsl(100deg, 21.1%, 86.1%) !important;
  --viridian-30: hsl(111.8deg, 17.5%, 75.3%) !important;
  --viridian-40: hsl(144.3deg, 19%, 61.8%) !important;
  --viridian-50: hsl(151.5deg, 24.9%, 48%) !important;
  --viridian-60: hsl(161deg, 34.8%, 35.5%) !important;
  --viridian-70: hsl(165.7deg, 52.1%, 23.7%) !important;
  --viridian-80: hsl(168deg, 100%, 12.7%) !important;
  --viridian-90: hsl(163.6deg, 100%, 8.6%) !important;
  --white: 253, 254, 254 !important;
  --yellow: hsl(40.2deg, 87.2%, 63.1%) !important;
  --yellow-10: hsl(44.3deg, 95.5%, 91.4%) !important;
  --yellow-100: hsl(3.5deg, 100%, 10.2%) !important;
  --yellow-20: hsl(41.1deg, 88.1%, 80.2%) !important;
  --yellow-30: hsl(40.2deg, 87.2%, 63.1%) !important;
  --yellow-40: hsl(41.6deg, 70.4%, 49%) !important;
  --yellow-50: hsl(42.7deg, 100%, 36.1%) !important;
  --yellow-60: hsl(39.5deg, 100%, 29.8%) !important;
  --yellow-70: hsl(35deg, 100%, 23.5%) !important;
  --yellow-80: hsl(28.4deg, 100%, 18.2%) !important;
  --yellow-90: hsl(19.4deg, 100%, 13.9%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(58, 56, 56);
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 22, 22);
  border-color: rgb(244, 244, 240);
  box-shadow: rgba(255, 255, 255, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(3, 3, 3, 0.47) 0px 0.5px 0.4px 0px, rgba(3, 3, 3, 0.4) 0px 0.8px 0.7px -1px, rgba(3, 3, 3, 0.32) 0px 1.9px 1.7px -2px, rgba(3, 3, 3, 0.25) 0px 4.5px 4px -3px, rgba(3, 3, 3, 0.18) 0.1px 9.4px 8.4px -4.1px;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(58, 56, 56);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(102, 153, 97);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(58, 56, 56);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 22);
  border-left-color: rgb(58, 56, 56);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(22, 22, 22);
  color: rgb(244, 244, 240);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
  transition: background-size, 0.4s;
}

html[saved-theme="dark"] body del {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(244, 244, 240);
  font-size: 12px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(112, 110, 109);
  border-radius: 16px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(102, 153, 97);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(199, 197, 194) none 0px;
  text-decoration-color: rgb(199, 197, 194);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(102, 153, 97);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 153, 97) none 0px;
  text-decoration-color: rgb(102, 153, 97);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(102, 153, 97);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 153, 97) none 0px;
  text-decoration-color: rgb(102, 153, 97);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(102, 153, 97);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 153, 97) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(102, 153, 97);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body dt {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(112, 110, 109);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body table {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 602px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(244, 244, 240);
  border-bottom-width: 0px;
  border-left-color: rgb(244, 244, 240);
  border-left-width: 0px;
  border-right-color: rgb(244, 244, 240);
  border-right-width: 0px;
  border-top-color: rgb(244, 244, 240);
  border-top-width: 0px;
  color: rgb(244, 244, 240);
  padding-left: 16px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-left-width: 0px;
  border-right-color: rgb(58, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(58, 56, 56);
  border-top-width: 0px;
  color: rgb(199, 197, 194);
  padding-left: 16px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(254, 184, 113);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(254, 184, 113);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(254, 184, 113);
  border-left-color: rgb(254, 184, 113);
  border-right-color: rgb(254, 184, 113);
  border-top-color: rgb(254, 184, 113);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(102, 153, 97);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(112, 110, 109);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: box-shadow 0.24s cubic-bezier(0, 0, 0.3, 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(184, 131, 0);
  border-left-color: rgb(184, 131, 0);
  border-right-color: rgb(184, 131, 0);
  border-top-color: rgb(184, 131, 0);
  color: rgb(184, 131, 0);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(184, 131, 0);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 104, 145, 181;
  background-color: rgba(104, 145, 181, 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 236, 90, 118;
  background-color: rgba(236, 90, 118, 0.2);
  border-bottom-color: rgba(236, 90, 118, 0.3);
  border-left-color: rgba(236, 90, 118, 0.3);
  border-right-color: rgba(236, 90, 118, 0.3);
  border-top-color: rgba(236, 90, 118, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 243, 90, 55;
  background-color: rgba(243, 90, 55, 0.2);
  border-bottom-color: rgba(243, 90, 55, 0.3);
  border-left-color: rgba(243, 90, 55, 0.3);
  border-right-color: rgba(243, 90, 55, 0.3);
  border-top-color: rgba(243, 90, 55, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 165, 119, 218;
  background-color: rgba(165, 119, 218, 0.2);
  border-bottom-color: rgba(165, 119, 218, 0.3);
  border-left-color: rgba(165, 119, 218, 0.3);
  border-right-color: rgba(165, 119, 218, 0.3);
  border-top-color: rgba(165, 119, 218, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 226, 105, 52;
  background-color: rgba(226, 105, 52, 0.2);
  border-bottom-color: rgba(226, 105, 52, 0.3);
  border-left-color: rgba(226, 105, 52, 0.3);
  border-right-color: rgba(226, 105, 52, 0.3);
  border-top-color: rgba(226, 105, 52, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 99, 149, 156;
  background-color: rgba(99, 149, 156, 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 104, 145, 181;
  background-color: rgba(104, 145, 181, 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 141, 147, 25;
  background-color: rgba(141, 147, 25, 0.2);
  border-bottom-color: rgba(141, 147, 25, 0.3);
  border-left-color: rgba(141, 147, 25, 0.3);
  border-right-color: rgba(141, 147, 25, 0.3);
  border-top-color: rgba(141, 147, 25, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 142, 140, 139;
  background-color: rgba(142, 140, 139, 0.2);
  border-bottom-color: rgba(142, 140, 139, 0.3);
  border-left-color: rgba(142, 140, 139, 0.3);
  border-right-color: rgba(142, 140, 139, 0.3);
  border-top-color: rgba(142, 140, 139, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 102, 153, 97;
  background-color: rgba(102, 153, 97, 0.2);
  border-bottom-color: rgba(102, 153, 97, 0.3);
  border-left-color: rgba(102, 153, 97, 0.3);
  border-right-color: rgba(102, 153, 97, 0.3);
  border-top-color: rgba(102, 153, 97, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 92, 153, 124;
  background-color: rgba(92, 153, 124, 0.2);
  border-bottom-color: rgba(92, 153, 124, 0.3);
  border-left-color: rgba(92, 153, 124, 0.3);
  border-right-color: rgba(92, 153, 124, 0.3);
  border-top-color: rgba(92, 153, 124, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 99, 149, 156;
  background-color: rgba(99, 149, 156, 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 184, 131, 0;
  background-color: rgba(184, 131, 0, 0.2);
  border-bottom-color: rgba(184, 131, 0, 0.3);
  border-left-color: rgba(184, 131, 0, 0.3);
  border-right-color: rgba(184, 131, 0, 0.3);
  border-top-color: rgba(184, 131, 0, 0.3);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(112, 110, 109);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(58, 56, 56);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(142, 140, 139, 0.16);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(58, 56, 56);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(112, 110, 109);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(142, 140, 139, 0.16);
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(142, 140, 139, 0.16);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(102, 153, 97);
  border-left-color: rgb(102, 153, 97);
  border-right-color: rgb(102, 153, 97);
  border-top-color: rgb(102, 153, 97);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(102, 153, 97);
}

html[saved-theme="dark"] body h1 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 104, 145, 181;
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  padding-bottom: 16px;
  padding-left: 12px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(244, 244, 240);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 110, 109);
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  color: rgb(112, 110, 109);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(199, 197, 194);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(112, 110, 109);
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  color: rgb(112, 110, 109);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(112, 110, 109);
  stroke: rgb(112, 110, 109);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(112, 110, 109);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(244, 244, 240);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(112, 110, 109);
  border-bottom-width: 1px;
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(38, 38, 37);
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body sub {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body summary {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body sup {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(102, 153, 97);
  border-left-color: rgb(102, 153, 97);
  border-right-color: rgb(102, 153, 97);
  border-top-color: rgb(102, 153, 97);
  color: rgb(102, 153, 97);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 24.4 !important;
  --accent-l: 61.8% !important;
  --accent-s: 90.8% !important;
  --active-line-accent: transparent !important;
  --aside-background: transparent !important;
  --aside-background-hover: rgba(142, 140, 139, 0.12) !important;
  --aside-border-color: rgb(226, 224, 220) !important;
  --aside-text-color: rgb(84, 81, 81) !important;
  --background: rgb(244, 244, 240) !important;
  --background-active: rgba(142, 140, 139, 0.32) !important;
  --background-hover: rgba(142, 140, 139, 0.12) !important;
  --background-inverse: rgb(58, 56, 56) !important;
  --background-inverse-hover: rgba(84, 81, 81, 0.5) !important;
  --background-modifier-active-hover: rgba(246, 141, 69, 0.15) !important;
  --background-modifier-border: rgb(226, 224, 220) !important;
  --background-modifier-border-focus: hsl(199.5deg, 38.8%, 40.4%) !important;
  --background-modifier-border-hover: rgb(226, 224, 220) !important;
  --background-modifier-cover: rgba(142, 140, 139, 0.12) !important;
  --background-modifier-error: hsl(9.6deg, 66.2%, 46.5%) !important;
  --background-modifier-error-hover: hsl(9.6deg, 66.2%, 46.5%) !important;
  --background-modifier-error-rgb: 197, 65, 40 !important;
  --background-modifier-form-field: rgb(253, 254, 254) !important;
  --background-modifier-form-field-hover: rgb(253, 254, 254) !important;
  --background-modifier-hover: rgba(142, 140, 139, 0.12) !important;
  --background-modifier-message: rgb(253, 254, 254) !important;
  --background-modifier-success: hsl(114.6deg, 22.4%, 49%) !important;
  --background-modifier-success-rgb: 102, 153, 97 !important;
  --background-primary: rgb(244, 244, 240) !important;
  --background-primary-alt: rgb(253, 254, 254) !important;
  --background-secondary: rgb(244, 244, 240) !important;
  --background-secondary-alt: rgb(244, 244, 240) !important;
  --background-selected: rgba(142, 140, 139, 0.2) !important;
  --background-selected-hover: rgba(142, 140, 139, 0.32) !important;
  --bases-cards-background: rgb(244, 244, 240) !important;
  --bases-cards-cover-background: rgb(253, 254, 254) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(226, 224, 220) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(226, 224, 220) !important;
  --bases-embed-border-color: rgb(226, 224, 220) !important;
  --bases-group-heading-property-color: rgb(84, 81, 81) !important;
  --bases-table-border-color: rgb(226, 224, 220) !important;
  --bases-table-cell-background-active: rgb(244, 244, 240) !important;
  --bases-table-cell-background-disabled: rgb(253, 254, 254) !important;
  --bases-table-cell-background-selected: hsla(24.4, 90.8%, 61.8%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(199.5deg, 38.8%, 40.4%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(246, 141, 69) !important;
  --bases-table-group-background: rgb(253, 254, 254) !important;
  --bases-table-header-background: rgb(244, 244, 240) !important;
  --bases-table-header-background-hover: rgba(142, 140, 139, 0.12) !important;
  --bases-table-header-color: rgb(84, 81, 81) !important;
  --bases-table-summary-background: rgb(244, 244, 240) !important;
  --bases-table-summary-background-hover: rgba(142, 140, 139, 0.12) !important;
  --black: 0, 0, 0 !important;
  --blockquote-border-color: rgb(226, 224, 220) !important;
  --blockquote-border-thickness: 0px !important;
  --blockquote-size: 0.9rem !important;
  --blue: hsl(217.1deg, 31.4%, 47.5%) !important;
  --blue-10: hsl(195deg, 16.7%, 95.3%) !important;
  --blue-100: hsl(221deg, 100%, 11.8%) !important;
  --blue-20: hsl(190.9deg, 16.4%, 86.9%) !important;
  --blue-30: hsl(190.4deg, 18.7%, 75.9%) !important;
  --blue-40: hsl(203.1deg, 36.3%, 64.9%) !important;
  --blue-50: hsl(208.1deg, 34.2%, 55.9%) !important;
  --blue-60: hsl(217.1deg, 31.4%, 47.5%) !important;
  --blue-70: hsl(215.9deg, 45.1%, 35.7%) !important;
  --blue-80: hsl(216.3deg, 59.4%, 25.1%) !important;
  --blue-90: hsl(215deg, 83.7%, 16.9%) !important;
  --blur-background: color-mix(in srgb, rgb(244, 244, 240) 65%, transparent) linear-gradient(rgb(244, 244, 240), color-mix(in srgb, rgb(244, 244, 240) 65%, transparent)) !important;
  --bodyFont: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border-inverse: rgb(22, 22, 22) !important;
  --border-strong-1: rgb(142, 140, 139) !important;
  --border-strong-2: rgb(142, 140, 139) !important;
  --border-subtle-0: rgb(226, 224, 220) !important;
  --border-subtle-1: rgb(226, 224, 220) !important;
  --border-subtle-2: rgb(226, 224, 220) !important;
  --border-subtle-selected-1: rgb(199, 197, 194) !important;
  --border-subtle-selected-2: rgb(199, 197, 194) !important;
  --button-radius: 4px !important;
  --calendar-dot: hsl(24.4deg, 90.8%, 61.8%) !important;
  --calendar-dot-hover: hsl(9.6deg, 66.2%, 46.5%) !important;
  --callout-border-opacity: 30%;
  --callout-bug: 197, 65, 40;
  --callout-error: 197, 65, 40;
  --callout-fail: 197, 65, 40;
  --callout-padding: 16px 12px 12px 24px;
  --callout-success: 102, 153, 97;
  --callout-title-background: transparent;
  --canvas-background: rgb(244, 244, 240) !important;
  --canvas-card-label-color: rgb(169, 168, 165) !important;
  --canvas-color-1: 197, 65, 40 !important;
  --canvas-color-3: 243, 189, 79 !important;
  --canvas-color-4: 102, 153, 97 !important;
  --canvas-controls-icon-stroke: 1px !important;
  --caret-color: rgb(22, 22, 22) !important;
  --checkbox-border-color: rgb(169, 168, 165) !important;
  --checkbox-border-color-hover: rgb(102, 153, 97) !important;
  --checkbox-checked-color-hover: rgba(102, 153, 97, 0.9) !important;
  --checkbox-color: rgb(102, 153, 97) !important;
  --checkbox-color-hover: rgb(102, 153, 97 0.5) !important;
  --checkbox-color-rgb: 102, 153, 97 !important;
  --checkbox-marker-color: rgb(244, 244, 240) !important;
  --checkbox-radius: 16px !important;
  --checklist-done-color: rgb(169, 168, 165) !important;
  --checklist-done-strike-color: rgb(169, 168, 165) !important;
  --code-background: rgba(226, 224, 220, 0.5) !important;
  --code-border-color: rgb(226, 224, 220) !important;
  --code-bracket-background: rgba(142, 140, 139, 0.12) !important;
  --code-comment: rgb(169, 168, 165) !important;
  --code-function: hsl(24.4deg, 90.8%, 61.8%) !important;
  --code-important: hsl(268deg, 57%, 66%) !important;
  --code-keyword: hsl(348.5deg, 79.3%, 63.9%) !important;
  --code-normal: rgb(84, 81, 81) !important;
  --code-normal-inline: hsl(348.5deg, 79.3%, 63.9%) !important;
  --code-property: hsl(187.4deg, 22.4%, 50%) !important;
  --code-punctuation: rgb(84, 81, 81) !important;
  --code-string: hsl(114.6deg, 22.4%, 49%) !important;
  --code-tag: hsl(9.6deg, 66.2%, 46.5%) !important;
  --code-value: hsl(268deg, 57%, 66%) !important;
  --codeFont: menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(169, 168, 165) !important;
  --collapse-icon-color-collapsed: rgb(246, 141, 69) !important;
  --color-accent: rgb(246, 141, 69) !important;
  --color-accent-1: rgb(246, 141, 69) !important;
  --color-accent-2: rgb(246, 141, 69) !important;
  --color-accent-hsl: 24.4, 90.8%, 61.8% !important;
  --color-accent-rgb: 246, 141, 69 !important;
  --color-accent-rgb-d: 102, 153, 97 !important;
  --color-accent-rgb-l: 246, 141, 69 !important;
  --color-green-rgb: 102, 153, 97 !important;
  --color-red-rgb: 197, 65, 40 !important;
  --color-yellow-rgb: 243, 189, 79 !important;
  --custom-accent-color: 102, 153, 97 !important;
  --cyan: hsl(187.4deg, 22.4%, 50%) !important;
  --cyan-10: hsl(90deg, 15.4%, 94.9%) !important;
  --cyan-100: hsl(214.8deg, 100%, 9.8%) !important;
  --cyan-20: hsl(98.2deg, 15.9%, 86.5%) !important;
  --cyan-30: hsl(155deg, 18.7%, 74.9%) !important;
  --cyan-40: hsl(182.2deg, 26.2%, 59.6%) !important;
  --cyan-50: hsl(187.4deg, 22.4%, 50%) !important;
  --cyan-60: hsl(199.5deg, 38.8%, 40.4%) !important;
  --cyan-70: hsl(202.8deg, 57.6%, 29.6%) !important;
  --cyan-80: hsl(200.9deg, 100%, 18%) !important;
  --cyan-90: hsl(206.1deg, 100%, 13.5%) !important;
  --dark: rgb(22, 22, 22) !important;
  --darkgray: rgb(22, 22, 22) !important;
  --divider-color: rgb(226, 224, 220) !important;
  --divider-color-hover: rgb(246, 141, 69) !important;
  --duration-fast-1: 70ms !important;
  --duration-fast-2: 110ms !important;
  --duration-moderate-1: 150ms !important;
  --duration-moderate-2: 240ms !important;
  --duration-slow-1: 400ms !important;
  --duration-slow-2: 700ms !important;
  --elevation-1: 0 2px 6px 0 rgba(0, 0, 0, 0.2) !important;
  --elevation-2: 0 2px 6px 0 rgba(0, 0, 0, 0.3) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(226, 224, 220), inset 0 0 0 1px rgb(226, 224, 220) !important;
  --embed-border-color: rgb(246, 141, 69) !important;
  --embed-border-left: 1px solid rgb(246, 141, 69) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(246, 141, 69) !important;
  --embed-border-width: 1px !important;
  --field-1: rgb(253, 254, 254) !important;
  --field-hover-1: rgb(226, 224, 220) !important;
  --file-header-background: rgb(244, 244, 240) !important;
  --file-header-background-focused: rgb(244, 244, 240) !important;
  --file-header-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 12px !important;
  --file-line-width: 40rem !important;
  --flair-color: rgb(22, 22, 22) !important;
  --focus: hsl(199.5deg, 38.8%, 40.4%) !important;
  --focus-inset: rgb(253, 254, 254) !important;
  --focus-inverse: rgb(253, 254, 254) !important;
  --font-editor: ??, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-editor-theme: ?? !important;
  --font-interface: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: inter, sans-serif !important;
  --font-mermaid: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: menlo, sfmono-regular, consolas, "Roboto Mono", monospace !important;
  --font-print: inter, sans-serif, Arial' !important;
  --font-scale-0: 1rem !important;
  --font-scale-00: 0.875rem !important;
  --font-scale-000: 0.75rem !important;
  --font-scale-1: 1.125rem !important;
  --font-scale-10: 3.75rem !important;
  --font-scale-2: 1.25rem !important;
  --font-scale-3: 1.5rem !important;
  --font-scale-4: 1.75rem !important;
  --font-scale-5: 2rem !important;
  --font-scale-6: 2.25rem !important;
  --font-scale-7: 2.625rem !important;
  --font-scale-8: 3rem !important;
  --font-scale-9: 3.375rem !important;
  --font-text: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: inter, sans-serif !important;
  --font-ui-large: 18px !important;
  --font-ui-medium: 14px !important;
  --font-ui-small: 12px !important;
  --footnote-divider-color: rgb(226, 224, 220) !important;
  --footnote-id-color: rgb(84, 81, 81) !important;
  --footnote-id-color-no-occurrences: rgb(169, 168, 165) !important;
  --footnote-input-background-active: rgba(142, 140, 139, 0.12) !important;
  --graph-line: rgb(226, 224, 220) !important;
  --graph-node: rgb(84, 81, 81) !important;
  --graph-node-attachment: hsl(40.2deg, 87.2%, 63.1%) !important;
  --graph-node-focused: rgb(246, 141, 69) !important;
  --graph-node-tag: hsl(9.6deg, 66.2%, 46.5%) !important;
  --graph-node-unresolved: rgb(169, 168, 165) !important;
  --graph-text: rgb(22, 22, 22) !important;
  --gray: rgb(84, 81, 81) !important;
  --gray-10: 244, 244, 240 !important;
  --gray-100: 22, 22, 22 !important;
  --gray-20: 226, 224, 220 !important;
  --gray-30: 199, 197, 194 !important;
  --gray-40: 169, 168, 165 !important;
  --gray-50: 142, 140, 139 !important;
  --gray-60: 112, 110, 109 !important;
  --gray-70: 84, 81, 81 !important;
  --gray-80: 58, 56, 56 !important;
  --gray-90: 38, 38, 37 !important;
  --green: hsl(114.6deg, 22.4%, 49%) !important;
  --green-10: hsl(77.6deg, 48.6%, 93.1%) !important;
  --green-100: hsl(120deg, 100%, 5.3%) !important;
  --green-20: hsl(76.6deg, 48.5%, 81%) !important;
  --green-30: hsl(83.5deg, 44%, 67.1%) !important;
  --green-40: hsl(96.9deg, 31.8%, 56.9%) !important;
  --green-50: hsl(114.6deg, 22.4%, 49%) !important;
  --green-60: hsl(139deg, 32.3%, 36.5%) !important;
  --green-70: hsl(144.9deg, 52.8%, 24.1%) !important;
  --green-80: hsl(148.2deg, 100%, 12.9%) !important;
  --green-90: hsl(134.7deg, 100%, 8.8%) !important;
  --h1-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h1-size: 2em !important;
  --h1-weight: 600 !important;
  --h2-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h2-size: 1.75em !important;
  --h2-weight: 600 !important;
  --h3-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h3-size: 1.5em !important;
  --h3-weight: 600 !important;
  --h4-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --headerFont: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-counter: " " !important;
  --heading-formatting: rgb(169, 168, 165) !important;
  --highlight: rgba(246, 141, 69, 0.7) !important;
  --hr-color: rgb(226, 224, 220) !important;
  --hr-thickness: 1.5px !important;
  --icon-color: rgb(169, 168, 165) !important;
  --icon-color-active: rgb(246, 141, 69) !important;
  --icon-color-focused: rgb(22, 22, 22) !important;
  --icon-color-hover: rgb(84, 81, 81) !important;
  --icon-inverse: rgb(253, 254, 254) !important;
  --icon-l-stroke-width: 1.25px !important;
  --icon-m-stroke-width: 1.25px !important;
  --icon-on-color: rgb(253, 254, 254) !important;
  --icon-opacity: 1 !important;
  --icon-primary: rgb(22, 22, 22) !important;
  --icon-s-stroke-width: 1px !important;
  --icon-secondary: rgb(84, 81, 81) !important;
  --icon-size: 16px !important;
  --icon-stroke: 1.25px !important;
  --icon-xs: 16px !important;
  --icon-xs-stroke-width: 1px !important;
  --indentation-guide: rgb(0, 0, 0 0.15) !important;
  --indentation-guide-active: rgb(0, 0, 0 0.3) !important;
  --inline-title-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(169, 168, 165) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(169, 168, 165) !important;
  --input-radius: 4px !important;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0px 0.5px 0.4px hsl(0deg 5% 59% / 47%), 0px 0.8px 0.7px -1px hsl(0deg 5% 59% / 40%), 0px 1.9px 1.7px -2px hsl(0deg 5% 59% / 32%), 0px 4.5px 4px -3px hsl(0deg 5% 59% / 25%), 0.1px 9.4px 8.4px -4.1px hsl(0deg 5% 59% / 18%) !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0px 0.5px 0.5px hsl(0deg 5% 59% / 47%), 0px 0.9px 0.8px -1px hsl(0deg 5% 59% / 40%), 0px 1.9px 1.7px -2px hsl(0deg 5% 59% / 33%), 0px 4.5px 4.1px -3px hsl(0deg 5% 59% / 26%), 0.1px 9.4px 8.5px -4px hsl(0deg 5% 59% / 19%) !important;
  --interactive: rgb(246, 141, 69) !important;
  --interactive-accent: rgb(246, 141, 69) !important;
  --interactive-accent-hover: rgb(246, 141, 69) !important;
  --interactive-accent-hsl: 24.4, 90.8%, 61.8% !important;
  --lavender: hsl(268deg, 57%, 66%) !important;
  --lavender-10: hsl(264deg, 63%, 97%) !important;
  --lavender-100: hsl(266deg, 100%, 15%) !important;
  --lavender-20: hsl(264deg, 64%, 91%) !important;
  --lavender-30: hsl(264deg, 61%, 84%) !important;
  --lavender-40: hsl(266deg, 58%, 75%) !important;
  --lavender-50: hsl(268deg, 57%, 66%) !important;
  --lavender-60: hsl(270deg, 55%, 56%) !important;
  --lavender-70: hsl(271deg, 57%, 43%) !important;
  --lavender-80: hsl(275deg, 89%, 29%) !important;
  --lavender-90: hsl(273deg, 100%, 21%) !important;
  --layer-1: rgb(253, 254, 254) !important;
  --layer-2: rgb(244, 244, 240) !important;
  --layer-active-1: rgb(199, 197, 194) !important;
  --layer-active-2: rgb(199, 197, 194) !important;
  --layer-hover-1: rgb(244, 244, 240) !important;
  --layer-hover-2: rgba(226, 224, 220, 0.5) !important;
  --layer-selected-1: rgb(226, 224, 220) !important;
  --layer-selected-2: rgb(226, 224, 220) !important;
  --layer-selected-hover-1: rgba(199, 197, 194, 0.5) !important;
  --layer-selected-hover-2: rgba(199, 197, 194, 0.5) !important;
  --leading-0: 1em !important;
  --leading-1: 1.125em !important;
  --leading-10: 2.75em !important;
  --leading-2: 1.25em !important;
  --leading-3: 1.375em !important;
  --leading-4: 1.5em !important;
  --leading-5: 1.625em !important;
  --leading-6: 1.75em !important;
  --leading-7: 1.875em !important;
  --leading-8: 2.25em !important;
  --leading-9: 2.5em !important;
  --light: rgb(244, 244, 240) !important;
  --lightgray: rgb(244, 244, 240) !important;
  --link-color: rgb(246, 141, 69) !important;
  --link-color-hover: rgb(246, 141, 69) !important;
  --link-external-color: rgb(246, 141, 69) !important;
  --link-external-color-hover: rgb(246, 141, 69) !important;
  --link-external-style: normal !important;
  --link-style: normal !important;
  --link-text-transform: none !important;
  --link-unresolved-color: rgb(246, 141, 69) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-bullet-border-triangle: 3px !important;
  --list-bullet-height-bullet-operator: 1px !important;
  --list-bullet-height-em-dash: 1.5px !important;
  --list-bullet-height-hyphen: 1.5px !important;
  --list-bullet-height-triangle: 0px !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 4px !important;
  --list-bullet-size-ring: 3px !important;
  --list-bullet-width-bullet-operator: 1px !important;
  --list-bullet-width-em-dash: 10px !important;
  --list-bullet-width-hyphen: 5px !important;
  --list-bullet-width-triangle: 6px !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgb(169, 168, 165) !important;
  --list-marker-color-collapsed: rgb(246, 141, 69) !important;
  --list-marker-color-hover: rgb(84, 81, 81) !important;
  --menu-background: rgb(244, 244, 240) !important;
  --menu-border-color: rgb(226, 224, 220) !important;
  --metadata-border-color: rgb(226, 224, 220) !important;
  --metadata-divider-color: rgb(226, 224, 220) !important;
  --metadata-input-background-active: rgba(142, 140, 139, 0.12) !important;
  --metadata-input-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(22, 22, 22) !important;
  --metadata-label-background-active: rgba(142, 140, 139, 0.12) !important;
  --metadata-label-font: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(84, 81, 81) !important;
  --metadata-label-text-color-hover: rgb(84, 81, 81) !important;
  --metadata-property-background-active: rgba(142, 140, 139, 0.12) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(199.5deg, 38.8%, 40.4%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(226, 224, 220) !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 12px !important;
  --modal-background: rgb(244, 244, 240) !important;
  --modal-border-color: rgb(226, 224, 220) !important;
  --modal-radius: 10px !important;
  --motion-entrance-expressive: cubic-bezier(0, 0, 0.3, 1) !important;
  --motion-entrance-productive: cubic-bezier(0, 0, 0.38, 0.9) !important;
  --motion-exit-expressive: cubic-bezier(0.4, 0.14, 1, 1) !important;
  --motion-exit-productive: cubic-bezier(0.2, 0, 1, 0.9) !important;
  --motion-standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1) !important;
  --motion-standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9) !important;
  --nav-collapse-icon-color: rgb(169, 168, 165) !important;
  --nav-collapse-icon-color-collapsed: rgb(169, 168, 165) !important;
  --nav-heading-color: rgb(22, 22, 22) !important;
  --nav-heading-color-collapsed: rgb(169, 168, 165) !important;
  --nav-heading-color-collapsed-hover: rgb(84, 81, 81) !important;
  --nav-heading-color-hover: rgb(22, 22, 22) !important;
  --nav-item-background-active: rgba(142, 140, 139, 0.2) !important;
  --nav-item-background-hover: rgba(142, 140, 139, 0.12) !important;
  --nav-item-background-selected: hsl(24.4, 90.8%, 61.8% 0.2) !important;
  --nav-item-color: rgb(84, 81, 81) !important;
  --nav-item-color-active: rgb(22, 22, 22) !important;
  --nav-item-color-highlighted: rgb(246, 141, 69) !important;
  --nav-item-color-hover: rgb(22, 22, 22) !important;
  --nav-item-color-selected: rgb(22, 22, 22) !important;
  --nav-item-size: 12px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(169, 168, 165) !important;
  --nav-tag-color-active: rgb(84, 81, 81) !important;
  --nav-tag-color-hover: rgb(84, 81, 81) !important;
  --orange: hsl(24.4deg, 90.8%, 61.8%) !important;
  --orange-10: hsl(28.7deg, 85.2%, 94.7%) !important;
  --orange-100: hsl(357.8deg, 100%, 10.6%) !important;
  --orange-20: hsl(27.8deg, 79.4%, 86.7%) !important;
  --orange-30: hsl(30.2deg, 98.6%, 72%) !important;
  --orange-40: hsl(24.4deg, 90.8%, 61.8%) !important;
  --orange-50: hsl(18.3deg, 75%, 54.5%) !important;
  --orange-60: hsl(12.8deg, 60.5%, 45.7%) !important;
  --orange-70: hsl(358deg, 63.4%, 37.5%) !important;
  --orange-80: hsl(342.1deg, 82.5%, 24.7%) !important;
  --orange-90: hsl(346.4deg, 100%, 16.5%) !important;
  --overlay: rgba(22, 22, 22, 0.5) !important;
  --pdf-background: rgb(244, 244, 240) !important;
  --pdf-page-background: rgb(244, 244, 240) !important;
  --pdf-sidebar-background: rgb(244, 244, 240) !important;
  --pill-border-color: rgb(226, 224, 220) !important;
  --pill-border-color-hover: rgb(226, 224, 220) !important;
  --pill-color: rgb(84, 81, 81) !important;
  --pill-color-hover: rgb(22, 22, 22) !important;
  --pill-color-remove: rgb(169, 168, 165) !important;
  --pill-color-remove-hover: rgb(246, 141, 69) !important;
  --pink: hsl(348.5deg, 79.3%, 63.9%) !important;
  --pink-10: hsl(352.5deg, 100%, 96.9%) !important;
  --pink-100: hsl(357.8deg, 100%, 10.6%) !important;
  --pink-20: hsl(355.6deg, 100%, 92%) !important;
  --pink-30: hsl(352.8deg, 94.9%, 84.5%) !important;
  --pink-40: hsl(351.4deg, 86.2%, 74.5%) !important;
  --pink-50: hsl(348.5deg, 79.3%, 63.9%) !important;
  --pink-60: hsl(343.4deg, 62.8%, 49.6%) !important;
  --pink-70: hsl(339.4deg, 71.6%, 35.9%) !important;
  --pink-80: hsl(342.1deg, 82.5%, 24.7%) !important;
  --pink-90: hsl(346.4deg, 100%, 16.5%) !important;
  --pistachio: hsl(63deg, 70.9%, 33.7%) !important;
  --pistachio-10: hsl(69.2deg, 37.1%, 93.1%) !important;
  --pistachio-100: hsl(52.8deg, 100%, 4.9%) !important;
  --pistachio-20: hsl(67.1deg, 37.8%, 82.4%) !important;
  --pistachio-30: hsl(64.8deg, 36.9%, 67.1%) !important;
  --pistachio-40: hsl(63.5deg, 42.6%, 47.8%) !important;
  --pistachio-50: hsl(63deg, 70.9%, 33.7%) !important;
  --pistachio-60: hsl(62.1deg, 100%, 22.7%) !important;
  --pistachio-70: hsl(61.4deg, 100%, 16.7%) !important;
  --pistachio-80: hsl(60deg, 100%, 11.6%) !important;
  --pistachio-90: hsl(58.5deg, 100%, 7.8%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgb(244, 244, 240) !important;
  --prompt-border-color: rgb(226, 224, 220) !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, rgb(244, 244, 240) 65%, transparent) linear-gradient(rgb(244, 244, 240), color-mix(in srgb, rgb(244, 244, 240) 65%, transparent)) !important;
  --red: hsl(9.6deg, 66.2%, 46.5%) !important;
  --red-10: hsl(12.6deg, 100%, 96.3%) !important;
  --red-100: hsl(357.8deg, 100%, 10.6%) !important;
  --red-20: hsl(12.9deg, 100%, 90%) !important;
  --red-30: hsl(12deg, 100%, 81.4%) !important;
  --red-40: hsl(11.7deg, 94.7%, 70.4%) !important;
  --red-50: hsl(11.2deg, 88.7%, 58.4%) !important;
  --red-60: hsl(9.6deg, 66.2%, 46.5%) !important;
  --red-70: hsl(358deg, 63.4%, 37.5%) !important;
  --red-80: hsl(342.1deg, 82.5%, 24.7%) !important;
  --red-90: hsl(346.4deg, 100%, 16.5%) !important;
  --ribbon-background: rgb(244, 244, 240) !important;
  --ribbon-background-collapsed: rgb(244, 244, 240) !important;
  --scrollbar-active-thumb-bg: rgb(0, 0, 0 0.2) !important;
  --scrollbar-bg: rgb(0, 0, 0 0.05) !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: rgb(0, 0, 0 0.1) !important;
  --search-clear-button-color: rgb(84, 81, 81) !important;
  --search-icon-color: rgb(84, 81, 81) !important;
  --search-result-background: rgb(244, 244, 240) !important;
  --secondary: rgb(246, 141, 69) !important;
  --setting-group-heading-color: rgb(22, 22, 22) !important;
  --setting-group-heading-size: 14px !important;
  --setting-items-background: rgb(253, 254, 254) !important;
  --setting-items-border-color: rgb(226, 224, 220) !important;
  --setting-items-radius: 10px !important;
  --shadow-color: 0deg 5% 59% !important;
  --sidebar-markdown-font-size: 0.933em !important;
  --size-0: 0px !important;
  --size-1: 2px !important;
  --size-10: 64px !important;
  --size-11: 80px !important;
  --size-12: 96px !important;
  --size-13: 160px !important;
  --size-2: 4px !important;
  --size-3: 8px !important;
  --size-4: 12px !important;
  --size-5: 16px !important;
  --size-6: 24px !important;
  --size-7: 32px !important;
  --size-8: 40px !important;
  --size-9: 48px !important;
  --slider-thumb-border-color: rgb(226, 224, 220) !important;
  --slider-thumb-radius: 50% !important;
  --slider-thumb-y: -7px !important;
  --slider-track-background: rgb(226, 224, 220) !important;
  --status-bar-background: rgb(244, 244, 240) !important;
  --status-bar-border-color: rgb(226, 224, 220) !important;
  --status-bar-text-color: rgb(84, 81, 81) !important;
  --suggestion-background: rgb(244, 244, 240) !important;
  --tab-background-active: rgb(244, 244, 240) !important;
  --tab-container-background: rgb(244, 244, 240) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: rgb(226, 224, 220) !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: rgb(226, 224, 220) !important;
  --tab-stacked-font-size: 12px !important;
  --tab-switcher-background: rgb(244, 244, 240) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(244, 244, 240), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(246, 141, 69) !important;
  --tab-text-color: rgb(169, 168, 165) !important;
  --tab-text-color-active: rgb(84, 81, 81) !important;
  --tab-text-color-focused: rgb(169, 168, 165) !important;
  --tab-text-color-focused-active: rgb(22, 22, 22) !important;
  --tab-text-color-focused-active-current: rgb(22, 22, 22) !important;
  --tab-text-color-focused-highlighted: rgb(246, 141, 69) !important;
  --table-add-button-border-color: rgb(226, 224, 220) !important;
  --table-border-color: rgb(226, 224, 220) !important;
  --table-drag-handle-background-active: rgb(246, 141, 69) !important;
  --table-drag-handle-color: rgb(169, 168, 165) !important;
  --table-drag-handle-color-active: rgb(253, 254, 254) !important;
  --table-header-border-color: rgb(226, 224, 220) !important;
  --table-header-color: rgb(84, 81, 81) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 600 !important;
  --table-hover-highlight-color: rgb(246, 141, 69 0.15) !important;
  --table-selection: hsla(24.4, 90.8%, 61.8%, 0.1) !important;
  --table-selection-border-color: rgb(246, 141, 69) !important;
  --table-sticky-height: 600px !important;
  --tag-background: rgb(246, 141, 69 0.15) !important;
  --tag-background-hover: rgb(246, 141, 69 0.25) !important;
  --tag-border-color: rgb(246, 141, 69 0.15) !important;
  --tag-border-color-hover: rgb(246, 141, 69 0.25) !important;
  --tag-color: rgb(246, 141, 69) !important;
  --tag-color-hover: rgb(246, 141, 69) !important;
  --tertiary: rgb(246, 141, 69) !important;
  --text-accent: rgb(246, 141, 69) !important;
  --text-accent-hover: rgb(246, 141, 69) !important;
  --text-code: hsl(343.4deg, 62.8%, 49.6%) !important;
  --text-error: hsl(9.6deg, 66.2%, 46.5%) !important;
  --text-faint: rgb(169, 168, 165) !important;
  --text-highlight-bg: rgba(246, 141, 69, 0.7) !important;
  --text-highlight-bg-active: rgba(246, 141, 69, 0.7) !important;
  --text-muted: rgb(84, 81, 81) !important;
  --text-normal: rgb(22, 22, 22) !important;
  --text-on-accent: rgb(253, 254, 254) !important;
  --text-placeholder: rgb(169, 168, 165) !important;
  --text-primary: rgb(22, 22, 22) !important;
  --text-secondary: rgb(84, 81, 81) !important;
  --text-selection: rgba(246, 141, 69, 0.5) !important;
  --text-success: hsl(114.6deg, 22.4%, 49%) !important;
  --textHighlight: rgba(246, 141, 69, 0.7) !important;
  --titleFont: inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(244, 244, 240) !important;
  --titlebar-background-focused: rgb(244, 244, 240) !important;
  --titlebar-border-color: rgb(226, 224, 220) !important;
  --titlebar-text-color: rgb(84, 81, 81) !important;
  --titlebar-text-color-focused: rgb(22, 22, 22) !important;
  --titlebar-text-color-highlighted: rgb(246, 141, 69) !important;
  --toggle-radius: 100vmax !important;
  --toggle-s-thumb-height: 14px !important;
  --toggle-s-thumb-width: 14px !important;
  --toggle-s-width: 32px !important;
  --toggle-thumb-color: rgb(253, 254, 254) !important;
  --toggle-thumb-height: 20px !important;
  --toggle-thumb-radius: 20px !important;
  --toggle-thumb-width: 20px !important;
  --toggle-width: 48px !important;
  --tracking-0: 0px !important;
  --tracking-1: 0.16px !important;
  --tracking-2: 0.32px !important;
  --tracking-3: 0.64px !important;
  --tracking-4: 0.96px !important;
  --vault-name-color: rgb(22, 22, 22) !important;
  --vault-name-font-size: 14px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgb(22, 22, 22) !important;
  --vault-profile-color-hover: rgb(22, 22, 22) !important;
  --vault-profile-font-size: 12px !important;
  --viridian: hsl(151.5deg, 24.9%, 48%) !important;
  --viridian-10: hsl(96deg, 18.5%, 94.7%) !important;
  --viridian-100: hsl(156.9deg, 100%, 5.1%) !important;
  --viridian-20: hsl(100deg, 21.1%, 86.1%) !important;
  --viridian-30: hsl(111.8deg, 17.5%, 75.3%) !important;
  --viridian-40: hsl(144.3deg, 19%, 61.8%) !important;
  --viridian-50: hsl(151.5deg, 24.9%, 48%) !important;
  --viridian-60: hsl(161deg, 34.8%, 35.5%) !important;
  --viridian-70: hsl(165.7deg, 52.1%, 23.7%) !important;
  --viridian-80: hsl(168deg, 100%, 12.7%) !important;
  --viridian-90: hsl(163.6deg, 100%, 8.6%) !important;
  --white: 253, 254, 254 !important;
  --yellow: hsl(40.2deg, 87.2%, 63.1%) !important;
  --yellow-10: hsl(44.3deg, 95.5%, 91.4%) !important;
  --yellow-100: hsl(3.5deg, 100%, 10.2%) !important;
  --yellow-20: hsl(41.1deg, 88.1%, 80.2%) !important;
  --yellow-30: hsl(40.2deg, 87.2%, 63.1%) !important;
  --yellow-40: hsl(41.6deg, 70.4%, 49%) !important;
  --yellow-50: hsl(42.7deg, 100%, 36.1%) !important;
  --yellow-60: hsl(39.5deg, 100%, 29.8%) !important;
  --yellow-70: hsl(35deg, 100%, 23.5%) !important;
  --yellow-80: hsl(28.4deg, 100%, 18.2%) !important;
  --yellow-90: hsl(19.4deg, 100%, 13.9%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 244, 240);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(244, 244, 240);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(226, 224, 220);
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(244, 244, 240);
  border-color: rgb(22, 22, 22);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(156, 145, 145, 0.47) 0px 0.5px 0.4px 0px, rgba(156, 145, 145, 0.4) 0px 0.8px 0.7px -1px, rgba(156, 145, 145, 0.32) 0px 1.9px 1.7px -2px, rgba(156, 145, 145, 0.25) 0px 4.5px 4px -3px, rgba(156, 145, 145, 0.18) 0.1px 9.4px 8.4px -4.1px;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(226, 224, 220);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(246, 141, 69);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 240);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(226, 224, 220);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 244, 240);
  border-left-color: rgb(226, 224, 220);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(244, 244, 240);
  color: rgb(22, 22, 22);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
  transition: background-size, 0.4s;
}

html[saved-theme="light"] body del {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(22, 22, 22);
  font-size: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(169, 168, 165);
  border-radius: 16px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(102, 153, 97);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 81, 81) none 0px;
  text-decoration-color: rgb(84, 81, 81);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(246, 141, 69);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 141, 69) none 0px;
  text-decoration-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(246, 141, 69);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 141, 69) none 0px;
  text-decoration-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(246, 141, 69);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 141, 69) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(246, 141, 69);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body dt {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ol > li {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ul > li {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(169, 168, 165);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body table {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 602px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(22, 22, 22);
  border-bottom-width: 0px;
  border-left-color: rgb(22, 22, 22);
  border-left-width: 0px;
  border-right-color: rgb(22, 22, 22);
  border-right-width: 0px;
  border-top-color: rgb(22, 22, 22);
  border-top-width: 0px;
  color: rgb(22, 22, 22);
  padding-left: 16px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-left-width: 0px;
  border-right-color: rgb(226, 224, 220);
  border-right-width: 0px;
  border-top-color: rgb(226, 224, 220);
  border-top-width: 0px;
  color: rgb(84, 81, 81);
  padding-left: 16px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(226, 224, 220, 0.5);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(226, 224, 220, 0.5);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(246, 141, 69);
  border-left-color: rgb(246, 141, 69);
  border-right-color: rgb(246, 141, 69);
  border-top-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(226, 224, 220, 0.5);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(226, 224, 220, 0.5);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body figcaption {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(253, 254, 254);
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(246, 141, 69);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(169, 168, 165);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: box-shadow 0.24s cubic-bezier(0, 0, 0.3, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(184, 131, 0);
  border-left-color: rgb(184, 131, 0);
  border-right-color: rgb(184, 131, 0);
  border-top-color: rgb(184, 131, 0);
  color: rgb(184, 131, 0);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(184, 131, 0);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 104, 145, 181;
  background-color: rgba(104, 145, 181, 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 236, 90, 118;
  background-color: rgba(236, 90, 118, 0.2);
  border-bottom-color: rgba(236, 90, 118, 0.3);
  border-left-color: rgba(236, 90, 118, 0.3);
  border-right-color: rgba(236, 90, 118, 0.3);
  border-top-color: rgba(236, 90, 118, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 243, 90, 55;
  background-color: rgba(243, 90, 55, 0.2);
  border-bottom-color: rgba(243, 90, 55, 0.3);
  border-left-color: rgba(243, 90, 55, 0.3);
  border-right-color: rgba(243, 90, 55, 0.3);
  border-top-color: rgba(243, 90, 55, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 165, 119, 218;
  background-color: rgba(165, 119, 218, 0.2);
  border-bottom-color: rgba(165, 119, 218, 0.3);
  border-left-color: rgba(165, 119, 218, 0.3);
  border-right-color: rgba(165, 119, 218, 0.3);
  border-top-color: rgba(165, 119, 218, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 226, 105, 52;
  background-color: rgba(226, 105, 52, 0.2);
  border-bottom-color: rgba(226, 105, 52, 0.3);
  border-left-color: rgba(226, 105, 52, 0.3);
  border-right-color: rgba(226, 105, 52, 0.3);
  border-top-color: rgba(226, 105, 52, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 99, 149, 156;
  background-color: rgba(99, 149, 156, 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 104, 145, 181;
  background-color: rgba(104, 145, 181, 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 141, 147, 25;
  background-color: rgba(141, 147, 25, 0.2);
  border-bottom-color: rgba(141, 147, 25, 0.3);
  border-left-color: rgba(141, 147, 25, 0.3);
  border-right-color: rgba(141, 147, 25, 0.3);
  border-top-color: rgba(141, 147, 25, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 142, 140, 139;
  background-color: rgba(142, 140, 139, 0.2);
  border-bottom-color: rgba(142, 140, 139, 0.3);
  border-left-color: rgba(142, 140, 139, 0.3);
  border-right-color: rgba(142, 140, 139, 0.3);
  border-top-color: rgba(142, 140, 139, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 102, 153, 97;
  background-color: rgba(102, 153, 97, 0.2);
  border-bottom-color: rgba(102, 153, 97, 0.3);
  border-left-color: rgba(102, 153, 97, 0.3);
  border-right-color: rgba(102, 153, 97, 0.3);
  border-top-color: rgba(102, 153, 97, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 92, 153, 124;
  background-color: rgba(92, 153, 124, 0.2);
  border-bottom-color: rgba(92, 153, 124, 0.3);
  border-left-color: rgba(92, 153, 124, 0.3);
  border-right-color: rgba(92, 153, 124, 0.3);
  border-top-color: rgba(92, 153, 124, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 99, 149, 156;
  background-color: rgba(99, 149, 156, 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 184, 131, 0;
  background-color: rgba(184, 131, 0, 0.2);
  border-bottom-color: rgba(184, 131, 0, 0.3);
  border-left-color: rgba(184, 131, 0, 0.3);
  border-right-color: rgba(184, 131, 0, 0.3);
  border-top-color: rgba(184, 131, 0, 0.3);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(253, 254, 254);
  border-bottom-color: rgb(142, 140, 139);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 244, 240);
  border-bottom-color: rgb(226, 224, 220);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(142, 140, 139, 0.12);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(226, 224, 220);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(253, 254, 254);
  border-bottom-color: rgb(142, 140, 139);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(142, 140, 139, 0.12);
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(142, 140, 139, 0.12);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(246, 141, 69);
  border-left-color: rgb(246, 141, 69);
  border-right-color: rgb(246, 141, 69);
  border-top-color: rgb(246, 141, 69);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(246, 141, 69);
}

html[saved-theme="light"] body h1 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 104, 145, 181;
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  padding-bottom: 16px;
  padding-left: 12px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(244, 244, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 244, 240);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(22, 22, 22);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 168, 165);
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  color: rgb(169, 168, 165);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 244, 240);
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(84, 81, 81);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(169, 168, 165);
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  color: rgb(169, 168, 165);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(169, 168, 165);
  stroke: rgb(169, 168, 165);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(169, 168, 165);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(22, 22, 22);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(142, 140, 139);
  border-bottom-width: 1px;
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(253, 254, 254);
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", menlo, sfmono-regular, consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body sub {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body summary {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body sup {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(246, 141, 69);
  border-left-color: rgb(246, 141, 69);
  border-right-color: rgb(246, 141, 69);
  border-top-color: rgb(246, 141, 69);
  color: rgb(246, 141, 69);
}`,
  },
};
