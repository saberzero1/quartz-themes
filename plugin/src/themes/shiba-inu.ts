import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "shiba-inu",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: 235, 188, 186 !important;
  --background-modifier-active-hover: rgba(235, 188, 186, 0.15) !important;
  --background-modifier-border: rgb(65, 69, 89) !important;
  --background-modifier-border-focus: rgb(98, 103, 126) !important;
  --background-modifier-border-hover: rgb(81, 86, 108) !important;
  --background-modifier-cover: rgba(38, 42, 58, 0.4) !important;
  --background-modifier-error: rgb(255, 98, 107) !important;
  --background-modifier-error-hover: rgba(255, 98, 107, 0.9) !important;
  --background-modifier-error-rgb: 255, 98, 107 !important;
  --background-modifier-form-field: rgba(36, 39, 52, 0.3) !important;
  --background-modifier-form-field-hover: rgba(36, 39, 52, 0.3) !important;
  --background-modifier-hover: rgba(198, 206, 239, 0.075) !important;
  --background-modifier-message: rgba(36, 39, 52, 0.9) !important;
  --background-modifier-success: rgb(56, 198, 141) !important;
  --background-modifier-success-hover: rgba(56, 198, 141, 0.9) !important;
  --background-modifier-success-rgb: 56, 198, 141 !important;
  --background-primary: rgb(42, 45, 61) !important;
  --background-primary-alt: rgb(38, 42, 58) !important;
  --background-secondary: rgb(38, 42, 58) !important;
  --background-secondary-alt: rgb(36, 39, 52) !important;
  --background-secondary-translucent: rgba(42, 45, 61, 0.1) !important;
  --background-secondary-translucent-1: rgba(42, 45, 61, 0.1) !important;
  --base: 42, 45, 61 !important;
  --bases-cards-background: rgb(42, 45, 61) !important;
  --bases-cards-cover-background: rgb(38, 42, 58) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(65, 69, 89) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(81, 86, 108) !important;
  --bases-embed-border-color: rgb(65, 69, 89) !important;
  --bases-group-heading-property-color: rgb(148, 155, 183) !important;
  --bases-table-border-color: rgb(65, 69, 89) !important;
  --bases-table-cell-background-active: rgb(42, 45, 61) !important;
  --bases-table-cell-background-disabled: rgb(38, 42, 58) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(98, 103, 126) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 188, 186) !important;
  --bases-table-group-background: rgb(38, 42, 58) !important;
  --bases-table-header-background: rgb(42, 45, 61) !important;
  --bases-table-header-background-hover: rgba(198, 206, 239, 0.075) !important;
  --bases-table-header-color: rgb(148, 155, 183) !important;
  --bases-table-summary-background: rgb(42, 45, 61) !important;
  --bases-table-summary-background-hover: rgba(198, 206, 239, 0.075) !important;
  --bg-color-settings-0: #07070747 !important;
  --bg-color-settings-0-1: #ffffff00 !important;
  --bg-color-settings-1: rgba(42, 45, 61, 0.15) !important;
  --bg-color-settings-2: rgba(42, 45, 61, 0.3) !important;
  --bg-color-settings-3: rgba(42, 45, 61, 0.8) !important;
  --bg-color-settings-4: rgba(42, 45, 61, 0.7) !important;
  --bg-color-settings-5: #424242aa !important;
  --bg-color-settings-6: #191919c7 !important;
  --blockquote-background-color: rgba(36, 39, 52, 0.5) !important;
  --blockquote-border-color: rgb(235, 188, 186) !important;
  --blue: 147, 183, 245 !important;
  --blur-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent)) !important;
  --blur-depth: 10px !important;
  --blur-depth-cp: 10px !important;
  --bodyFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(255, 98, 107) !important;
  --callout-blend-mode: none;
  --callout-bug: 255, 98, 107;
  --callout-default: 147, 183, 245;
  --callout-error: 255, 98, 107;
  --callout-example: 196, 167, 231;
  --callout-fail: 255, 98, 107;
  --callout-gallery-gap: 5px;
  --callout-important: 104, 188, 204;
  --callout-info: 147, 183, 245;
  --callout-question: 247, 157, 124;
  --callout-success: 56, 198, 141;
  --callout-summary: 104, 188, 204;
  --callout-tip: 104, 188, 204;
  --callout-title-padding: 8px;
  --callout-todo: 147, 183, 245;
  --callout-warning: 247, 157, 124;
  --canvas-background: rgb(42, 45, 61) !important;
  --canvas-card-label-color: rgb(165, 172, 201) !important;
  --canvas-color: 115, 120, 145 !important;
  --canvas-color-1: 255, 98, 107 !important;
  --canvas-color-2: 247, 157, 124 !important;
  --canvas-color-3: 249, 226, 175 !important;
  --canvas-color-4: 56, 198, 141 !important;
  --canvas-color-5: 104, 188, 204 !important;
  --canvas-color-6: 196, 167, 231 !important;
  --canvas-dot-pattern: rgb(81, 86, 108) !important;
  --card-background-color: rgb(36, 39, 52) !important;
  --card-foreground-color: rgb(42, 45, 61) !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: rgb(38, 42, 58) !important;
  --cards-background-modifier-border: rgb(65, 69, 89) !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: rgb(198, 206, 239) !important;
  --checkbox-border-color: rgb(165, 172, 201) !important;
  --checkbox-border-color-hover: rgb(148, 155, 183) !important;
  --checkbox-color: rgb(235, 188, 186) !important;
  --checkbox-color-hover: rgb(235, 188, 186) !important;
  --checkbox-marker-color: rgb(42, 45, 61) !important;
  --checklist-done-color: rgb(148, 155, 183) !important;
  --code-background: rgb(38, 42, 58) !important;
  --code-border-color: rgb(65, 69, 89) !important;
  --code-bracket-background: rgba(198, 206, 239, 0.075) !important;
  --code-comment: rgb(165, 172, 201) !important;
  --code-function: rgb(249, 226, 175) !important;
  --code-important: rgb(247, 157, 124) !important;
  --code-keyword: rgb(243, 137, 143) !important;
  --code-normal: rgb(198, 206, 239) !important;
  --code-operator: rgb(255, 98, 107) !important;
  --code-property: rgb(104, 188, 204) !important;
  --code-punctuation: rgb(148, 155, 183) !important;
  --code-string: rgb(56, 198, 141) !important;
  --code-tag: rgb(255, 98, 107) !important;
  --code-value: rgb(196, 167, 231) !important;
  --codeFont: monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(165, 172, 201) !important;
  --collapse-icon-color-collapsed: rgb(235, 188, 186) !important;
  --color-accent: rgb(235, 188, 186) !important;
  --color-accent-1: rgb(235, 188, 186) !important;
  --color-accent-2: rgba(235, 188, 186, 0.9) !important;
  --color-accent-translucent-001: hsla(258, 88%, 66%, 0.01) !important;
  --color-accent-translucent-005: hsla(258, 88%, 66%, 0.05) !important;
  --color-accent-translucent-01: hsla(258, 88%, 66%, 0.1) !important;
  --color-accent-translucent-015: hsla(258, 88%, 66%, 0.15) !important;
  --color-accent-translucent-02: hsla(258, 88%, 66%, 0.2) !important;
  --color-accent-translucent-04: hsla(258, 88%, 66%, 0.4) !important;
  --color-accent-translucent-06: hsla(258, 88%, 66%, 0.6) !important;
  --color-base-00: rgb(36, 39, 52) !important;
  --color-base-10: rgb(38, 42, 58) !important;
  --color-base-100: rgb(198, 206, 239) !important;
  --color-base-20: rgb(42, 45, 61) !important;
  --color-base-25: rgb(65, 69, 89) !important;
  --color-base-30: rgb(81, 86, 108) !important;
  --color-base-35: rgb(98, 103, 126) !important;
  --color-base-40: rgb(115, 120, 145) !important;
  --color-base-50: rgb(131, 138, 164) !important;
  --color-base-60: rgb(148, 155, 183) !important;
  --color-base-70: rgb(165, 172, 201) !important;
  --color-black: hsl(27, 15%, 12%) !important;
  --color-blue: rgb(147, 183, 245) !important;
  --color-blue-rgb: 147, 183, 245 !important;
  --color-cyan: rgb(104, 188, 204) !important;
  --color-cyan-rgb: 104, 188, 204 !important;
  --color-green: rgb(56, 198, 141) !important;
  --color-green-rgb: 56, 198, 141 !important;
  --color-lightorange: rgb(246, 193, 119) !important;
  --color-lightorange-rgb: 246, 193, 119 !important;
  --color-lightpink: rgb(235, 188, 186) !important;
  --color-lightpink-rgb: 235, 188, 186 !important;
  --color-orange: rgb(247, 157, 124) !important;
  --color-orange-rgb: 247, 157, 124 !important;
  --color-pink: rgb(243, 137, 143) !important;
  --color-pink-rgb: 243, 137, 143 !important;
  --color-purple: rgb(196, 167, 231) !important;
  --color-purple-rgb: 196, 167, 231 !important;
  --color-red: rgb(255, 98, 107) !important;
  --color-red-rgb: 255, 98, 107 !important;
  --color-white: hsl(36, 36%, 96.9%) !important;
  --color-yellow: rgb(249, 226, 175) !important;
  --color-yellow-rgb: 249, 226, 175 !important;
  --cyan: 137, 199, 223 !important;
  --dark: rgb(198, 206, 239) !important;
  --darkgray: rgb(198, 206, 239) !important;
  --divider-color: rgb(65, 69, 89) !important;
  --divider-color-hover: rgb(235, 188, 186) !important;
  --dropdown-background: rgb(65, 69, 89) !important;
  --dropdown-background-hover: rgb(81, 86, 108) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(235, 188, 186) !important;
  --exterior: 36, 39, 52 !important;
  --external-link-color: rgba(235, 188, 186, 0.8) !important;
  --file-header-background: rgb(42, 45, 61) !important;
  --file-header-background-focused: rgb(42, 45, 61) !important;
  --flair-background: rgb(65, 69, 89) !important;
  --flair-color: rgb(198, 206, 239) !important;
  --font-family-folder-file-title: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-family-inline-code: monospace !important;
  --font-family-tag: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-family-vault: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-family-vertical-bar: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mermaid: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: monospace !important;
  --font-print: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, Arial' !important;
  --font-size-code: 1em !important;
  --font-size-file-header-title: 0.93em !important;
  --font-size-folder-and-file: 0.95em !important;
  --font-size-vault-name: 0.95em !important;
  --font-text: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgb(65, 69, 89) !important;
  --footnote-id-color: rgb(148, 155, 183) !important;
  --footnote-id-color-no-occurrences: rgb(165, 172, 201) !important;
  --footnote-input-background-active: rgba(198, 206, 239, 0.075) !important;
  --graph-arrow: rgb(243, 137, 143) !important;
  --graph-circle-fill: rgb(147, 183, 245) !important;
  --graph-circle-fill-highlight: rgb(147, 183, 245) !important;
  --graph-circle-fill-unresolved: #ffa6e5 !important;
  --graph-circle-outline: rgb(243, 137, 143) !important;
  --graph-fill-attachment: rgb(147, 183, 245) !important;
  --graph-fill-tag: rgb(247, 157, 124) !important;
  --graph-line: rgb(65, 69, 89) !important;
  --graph-line-highlight: rgb(235, 188, 186) !important;
  --graph-node: rgb(148, 155, 183) !important;
  --graph-node-attachment: rgb(249, 226, 175) !important;
  --graph-node-focused: rgb(235, 188, 186) !important;
  --graph-node-tag: rgb(56, 198, 141) !important;
  --graph-node-unresolved: rgb(165, 172, 201) !important;
  --graph-text: rgb(198, 206, 239) !important;
  --gray: rgb(148, 155, 183) !important;
  --green: 56, 198, 141 !important;
  --h1-color: rgb(255, 98, 107) !important;
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h2-color: rgb(235, 188, 186) !important;
  --h2-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h3-color: rgb(104, 188, 204) !important;
  --h3-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h4-color: rgb(137, 199, 223) !important;
  --h4-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h5-color: rgb(147, 183, 245) !important;
  --h5-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h6-color: rgb(128, 216, 220) !important;
  --h6-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --headerFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(235, 188, 186) !important;
  --highlight: rgba(247, 157, 124, 0.2) !important;
  --highlight-mix-blend-mode: none !important;
  --hr-color: rgb(65, 69, 89) !important;
  --hr-outline-color: rgb(65, 69, 89) !important;
  --icon-color: rgb(148, 155, 183) !important;
  --icon-color-active: rgb(235, 188, 186) !important;
  --icon-color-focused: rgb(235, 188, 186) !important;
  --icon-color-hover: rgb(148, 155, 183) !important;
  --img-border-radius: 15px !important;
  --img-max-height: 300px !important;
  --img-max-height-list: 270px !important;
  --img-max-width: 350px !important;
  --img-max-width-list: 300px !important;
  --indentation-guide-color: rgba(198, 206, 239, 0.12) !important;
  --indentation-guide-color-active: rgba(198, 206, 239, 0.3) !important;
  --inline-title-color: rgb(255, 98, 107) !important;
  --inline-title-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --input-date-separator: rgb(165, 172, 201) !important;
  --input-placeholder-color: rgb(165, 172, 201) !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(198, 206, 239, 0.09), 0 2px 4px 0 rgba(36, 39, 52, 0.15),
    0 1px 1.5px 0 rgba(36, 39, 52, 0.1), 0 1px 2px 0 rgba(36, 39, 52, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(198, 206, 239, 0.16), 0 2px 3px 0 rgba(36, 39, 52, 0.3),
    0 1px 1.5px 0 rgba(36, 39, 52, 0.2), 0 1px 2px 0 rgba(36, 39, 52, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(235, 188, 186) !important;
  --interactive-accent-hover: rgb(235, 188, 186) !important;
  --interactive-accent-rgb: 235, 188, 186 !important;
  --interactive-hover: rgb(81, 86, 108) !important;
  --interactive-normal: rgb(65, 69, 89) !important;
  --interactive-success: rgb(56, 198, 141) !important;
  --internal-link-color: rgba(235, 188, 186, 0.9) !important;
  --italic-color: rgb(56, 198, 141) !important;
  --lemon: 246, 193, 119 !important;
  --light: rgb(42, 45, 61) !important;
  --lightgray: rgb(38, 42, 58) !important;
  --lily: 235, 188, 186 !important;
  --link-color: rgb(235, 188, 186) !important;
  --link-color-hover: rgb(235, 188, 186) !important;
  --link-external-color: rgb(235, 188, 186) !important;
  --link-external-color-hover: rgb(235, 188, 186) !important;
  --link-unresolved-color: rgb(235, 188, 186) !important;
  --list-marker-color: rgb(165, 172, 201) !important;
  --list-marker-color-collapsed: rgb(235, 188, 186) !important;
  --list-marker-color-hover: rgb(148, 155, 183) !important;
  --max-width-image: 90% !important;
  --menu-background: rgb(38, 42, 58) !important;
  --menu-border-color: rgb(81, 86, 108) !important;
  --menu-shadow: 0px 1px 2px rgba(36, 39, 52, 0.121), 0px 3.4px 6.7px rgba(36, 39, 52, 0.179),
    0px 15px 30px rgba(36, 39, 52, 0.3) !important;
  --metadata-border-color: rgb(65, 69, 89) !important;
  --metadata-divider-color: rgb(65, 69, 89) !important;
  --metadata-input-background-active: rgba(198, 206, 239, 0.075) !important;
  --metadata-input-text-color: rgb(198, 206, 239) !important;
  --metadata-label-background-active: rgba(198, 206, 239, 0.075) !important;
  --metadata-label-text-color: rgb(148, 155, 183) !important;
  --metadata-label-text-color-hover: rgb(148, 155, 183) !important;
  --metadata-property-background-active: rgba(198, 206, 239, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(98, 103, 126) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(81, 86, 108) !important;
  --min-width-image: 50% !important;
  --modal-background: rgb(42, 45, 61) !important;
  --modal-border-color: rgb(65, 69, 89) !important;
  --mono-rgb-100: 198, 206, 239 !important;
  --nav-collapse-icon-color: rgb(165, 172, 201) !important;
  --nav-collapse-icon-color-collapsed: rgb(165, 172, 201) !important;
  --nav-folder-title-color: rgba(42, 45, 61) !important;
  --nav-heading-color: rgb(198, 206, 239) !important;
  --nav-heading-color-collapsed: rgb(165, 172, 201) !important;
  --nav-heading-color-collapsed-hover: rgb(148, 155, 183) !important;
  --nav-heading-color-hover: rgb(198, 206, 239) !important;
  --nav-indentation-guide-color: rgba(36, 39, 52, 0.4) !important;
  --nav-item-background-active: rgba(198, 206, 239, 0.075) !important;
  --nav-item-background-hover: rgba(198, 206, 239, 0.075) !important;
  --nav-item-background-selected: rgba(235, 188, 186, 0.2) !important;
  --nav-item-color: rgb(148, 155, 183) !important;
  --nav-item-color-active: rgb(198, 206, 239) !important;
  --nav-item-color-highlighted: rgb(235, 188, 186) !important;
  --nav-item-color-hover: rgb(198, 206, 239) !important;
  --nav-item-color-selected: rgb(198, 206, 239) !important;
  --nav-tag-color: rgb(165, 172, 201) !important;
  --nav-tag-color-active: rgb(148, 155, 183) !important;
  --nav-tag-color-hover: rgb(148, 155, 183) !important;
  --orange: 247, 157, 124 !important;
  --outline-border: 2px !important;
  --overlay0: 115, 120, 145 !important;
  --overlay1: 131, 138, 164 !important;
  --overlay2: 148, 155, 183 !important;
  --panel-page-opacity: 0.25 !important;
  --pdf-background: rgb(42, 45, 61) !important;
  --pdf-page-background: rgb(42, 45, 61) !important;
  --pdf-shadow: 0 0 0 1px rgb(65, 69, 89) !important;
  --pdf-sidebar-background: rgb(42, 45, 61) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 69, 89) !important;
  --pill-border-color: rgb(65, 69, 89) !important;
  --pill-border-color-hover: rgb(81, 86, 108) !important;
  --pill-color: rgb(148, 155, 183) !important;
  --pill-color-hover: rgb(198, 206, 239) !important;
  --pill-color-remove: rgb(165, 172, 201) !important;
  --pill-color-remove-hover: rgb(235, 188, 186) !important;
  --prompt-background: rgb(42, 45, 61) !important;
  --prompt-border-color: rgb(115, 120, 145) !important;
  --raised-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent)) !important;
  --red: 255, 98, 107 !important;
  --ribbon-background: rgb(38, 42, 58) !important;
  --ribbon-background-collapsed: rgb(42, 45, 61) !important;
  --rose: 243, 137, 143 !important;
  --scrollbar-active-thumb-bg: rgba(198, 206, 239, 0.2) !important;
  --scrollbar-bg: rgba(198, 206, 239, 0.05) !important;
  --scrollbar-thumb-bg: rgba(198, 206, 239, 0.1) !important;
  --sea: 104, 188, 204 !important;
  --search-clear-button-color: rgb(148, 155, 183) !important;
  --search-icon-color: rgb(148, 155, 183) !important;
  --search-result-background: rgb(42, 45, 61) !important;
  --secondary: rgb(235, 188, 186) !important;
  --setting-group-heading-color: rgb(198, 206, 239) !important;
  --setting-items-background: rgb(38, 42, 58) !important;
  --setting-items-border-color: rgb(65, 69, 89) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(36, 39, 52, 0.071), 0px 6.3px 24.7px rgba(36, 39, 52, 0.112),
    0px 30px 90px rgba(36, 39, 52, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(36, 39, 52, 0.121), 0px 3.4px 6.7px rgba(36, 39, 52, 0.179),
    0px 15px 30px rgba(36, 39, 52, 0.3) !important;
  --shib-bold-color: 255, 98, 107 !important;
  --shib-callout-fold-position: 1 !important;
  --shib-italic-color: 56, 198, 141 !important;
  --shib-speech-bubble-opacity: 0.9 !important;
  --side: 38, 42, 58 !important;
  --slider-thumb-border-color: rgb(81, 86, 108) !important;
  --slider-track-background: rgb(65, 69, 89) !important;
  --status-bar-background: rgb(38, 42, 58) !important;
  --status-bar-border-color: rgb(65, 69, 89) !important;
  --status-bar-text-color: rgb(148, 155, 183) !important;
  --subtext0: 165, 172, 201 !important;
  --subtext1: 181, 189, 220 !important;
  --suggestion-background: rgb(42, 45, 61) !important;
  --surface0: 65, 69, 89 !important;
  --surface1: 81, 86, 108 !important;
  --surface2: 98, 103, 126 !important;
  --swatch-shadow: inset 0 0 0 1px rgba(198, 206, 239, 0.15) !important;
  --sync-avatar-color-1: rgb(255, 98, 107) !important;
  --sync-avatar-color-2: rgb(247, 157, 124) !important;
  --sync-avatar-color-3: rgb(249, 226, 175) !important;
  --sync-avatar-color-4: rgb(56, 198, 141) !important;
  --sync-avatar-color-5: rgb(104, 188, 204) !important;
  --sync-avatar-color-6: rgb(147, 183, 245) !important;
  --sync-avatar-color-7: rgb(196, 167, 231) !important;
  --sync-avatar-color-8: rgb(243, 137, 143) !important;
  --tab-background-active: rgb(42, 45, 61) !important;
  --tab-container-background: rgb(38, 42, 58) !important;
  --tab-divider-color: rgb(81, 86, 108) !important;
  --tab-inactive-color: rgb(38, 42, 58) !important;
  --tab-outline-color: rgb(65, 69, 89) !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: rgb(38, 42, 58) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(38, 42, 58), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(198, 206, 239, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 188, 186) !important;
  --tab-text-color: rgb(165, 172, 201) !important;
  --tab-text-color-active: rgb(148, 155, 183) !important;
  --tab-text-color-focused: rgb(148, 155, 183) !important;
  --tab-text-color-focused-active: rgb(148, 155, 183) !important;
  --tab-text-color-focused-active-current: rgb(198, 206, 239) !important;
  --tab-text-color-focused-highlighted: rgb(235, 188, 186) !important;
  --table-add-button-border-color: rgb(65, 69, 89) !important;
  --table-border-color: rgb(65, 69, 89) !important;
  --table-drag-handle-background-active: rgb(235, 188, 186) !important;
  --table-drag-handle-color: rgb(165, 172, 201) !important;
  --table-drag-handle-color-active: rgb(42, 45, 61) !important;
  --table-header-border-color: rgb(65, 69, 89) !important;
  --table-header-color: rgb(198, 206, 239) !important;
  --table-selection-blend-mode: none !important;
  --table-selection-border-color: rgb(235, 188, 186) !important;
  --tag-background: rgba(235, 188, 186, 0.1) !important;
  --tag-background-hover: rgba(235, 188, 186, 0.2) !important;
  --tag-border-color: rgba(235, 188, 186, 0.15) !important;
  --tag-border-color-hover: rgba(235, 188, 186, 0.15) !important;
  --tag-color: rgb(235, 188, 186) !important;
  --tag-color-hover: rgb(235, 188, 186) !important;
  --tertiary: rgb(235, 188, 186) !important;
  --text: 198, 206, 239 !important;
  --text-accent: rgb(235, 188, 186) !important;
  --text-accent-hover: rgb(235, 188, 186) !important;
  --text-error: rgb(255, 98, 107) !important;
  --text-error-hover: rgba(255, 98, 107, 0.8) !important;
  --text-faint: rgb(165, 172, 201) !important;
  --text-highlight-bg: rgba(247, 157, 124, 0.2) !important;
  --text-highlight-bg-active: rgba(247, 157, 124, 0.4) !important;
  --text-muted: rgb(148, 155, 183) !important;
  --text-muted-rgb: 148, 155, 183 !important;
  --text-normal: rgb(198, 206, 239) !important;
  --text-on-accent: rgb(42, 45, 61) !important;
  --text-selection: rgba(147, 183, 245, 0.15) !important;
  --text-success: rgb(56, 198, 141) !important;
  --text-warning: rgb(247, 157, 124) !important;
  --textHighlight: rgba(247, 157, 124, 0.2) !important;
  --titleFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(38, 42, 58) !important;
  --titlebar-background-focused: rgb(36, 39, 52) !important;
  --titlebar-border-color: rgb(65, 69, 89) !important;
  --titlebar-text-color: rgb(148, 155, 183) !important;
  --titlebar-text-color-focused: rgb(235, 188, 186) !important;
  --turquoise: 128, 216, 220 !important;
  --unresolved-link-color: rgba(235, 188, 186, 0.8) !important;
  --vault-profile-color: rgb(198, 206, 239) !important;
  --vault-profile-color-hover: rgb(198, 206, 239) !important;
  --violet: 196, 167, 231 !important;
  --width-image-gallery: 200px !important;
  --workspace-background-translucent: rgba(36, 39, 52, 0.6) !important;
  --yellow: 249, 226, 175 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 42, 58);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(42, 45, 61);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(38, 42, 58);
  border-color: rgb(198, 206, 239);
  box-shadow: rgba(198, 206, 239, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(36, 39, 52, 0.15) 0px 2px 4px 0px, rgba(36, 39, 52, 0.1) 0px 1px 1.5px 0px, rgba(36, 39, 52, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(235, 188, 186, 0.1);
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 42, 58);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 42, 58);
  border-left-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(42, 45, 61);
  color: rgb(198, 206, 239);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 98, 107);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 98, 107) none 0px;
  text-decoration-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(56, 198, 141);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(56, 198, 141) none 0px;
  text-decoration-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(56, 198, 141);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(56, 198, 141) none 0px;
  text-decoration-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 98, 107);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 98, 107) none 0px;
  text-decoration-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(247, 157, 124, 0.2);
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(198, 206, 239);
  font-size: 12.09px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(165, 172, 201);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(235, 188, 186);
  border-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body p {
  color: rgb(148, 155, 183);
  outline: rgb(148, 155, 183) none 0px;
  text-decoration-color: rgb(148, 155, 183);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(235, 188, 186, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.8) none 0px;
  text-decoration-color: rgba(235, 188, 186, 0.8);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(235, 188, 186, 0.9);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.9) none 0px;
  text-decoration-color: rgba(235, 188, 186, 0.9);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(235, 188, 186, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.8) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(165, 172, 201);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(36, 39, 52, 0.5);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(65, 69, 89);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(65, 69, 89);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(65, 69, 89);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(65, 69, 89);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 20px;
  width: 661px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
  text-align: center;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
  text-align: center;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
  font-family: "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(249, 226, 175);
  border-left-color: rgb(249, 226, 175);
  border-right-color: rgb(249, 226, 175);
  border-top-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 98, 107);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(255, 98, 107);
  border-radius: 15px;
  border-right-color: rgb(255, 98, 107);
  border-top-color: rgb(255, 98, 107);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(165, 172, 201);
  border-left-color: rgb(165, 172, 201);
  border-right-color: rgb(165, 172, 201);
  border-top-color: rgb(165, 172, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(148, 155, 183);
  text-decoration: line-through;
  text-decoration-color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 188, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(128, 216, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 199, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 183, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(56, 198, 141);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  color: rgb(147, 183, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(147, 183, 245);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 104, 188, 204;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(104, 188, 204, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 188, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 188, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 188, 204, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 98, 107;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 98, 107;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 196, 167, 231;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(196, 167, 231, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(196, 167, 231, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(196, 167, 231, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(196, 167, 231, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 98, 107;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 147, 183, 245;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 147, 183, 245;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 247, 157, 124;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(247, 157, 124, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(247, 157, 124, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(247, 157, 124, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(247, 157, 124, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(158, 158, 158, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 56, 198, 141;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(56, 198, 141, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(56, 198, 141, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(56, 198, 141, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(56, 198, 141, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 104, 188, 204;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(104, 188, 204, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 188, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 188, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 188, 204, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 147, 183, 245;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 247, 157, 124;
  background-color: rgba(38, 42, 58, 0.4);
  border-bottom-color: rgba(247, 157, 124, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(247, 157, 124, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(247, 157, 124, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(247, 157, 124, 0.4);
  border-top-width: 1px;
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

html[saved-theme="dark"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(36, 39, 52, 0.3);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(42, 45, 61);
  border-bottom-color: rgb(115, 120, 145);
  border-left-color: rgb(115, 120, 145);
  border-right-color: rgb(115, 120, 145);
  border-top-color: rgb(115, 120, 145);
  box-shadow: rgba(36, 39, 52, 0.07) 0px 1.8px 7.3px 0px, rgba(36, 39, 52, 0.114) 0px 6.3px 24.7px 0px, rgba(36, 39, 52, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(198, 206, 239, 0.075);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(115, 120, 145);
  border-left-color: rgb(115, 120, 145);
  border-right-color: rgb(115, 120, 145);
  border-top-color: rgb(115, 120, 145);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 42, 58);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(198, 206, 239, 0.075);
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(198, 206, 239, 0.075);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(235, 188, 186, 0.15);
  border-left-color: rgba(235, 188, 186, 0.15);
  border-right-color: rgba(235, 188, 186, 0.15);
  border-top-color: rgba(235, 188, 186, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 98, 107);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(235, 188, 186);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 98, 107);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(104, 188, 204);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(137, 199, 223);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(147, 183, 245);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(128, 216, 220);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 147, 183, 245;
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(42, 45, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 45, 61);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(36, 39, 52, 0.4);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 206, 239);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(148, 155, 183);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(148, 155, 183);
  stroke: rgb(148, 155, 183);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(165, 172, 201);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(148, 155, 183);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(38, 42, 58);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(38, 42, 58);
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
  font-family: "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgb(235, 188, 186);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(235, 188, 186);
  border-top-color: rgb(235, 188, 186);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: rgb(235, 188, 186);
}`,
  },
  light: {
    base: `:root:root {
  --accent: 222, 149, 132 !important;
  --background-modifier-active-hover: rgba(222, 149, 132, 0.15) !important;
  --background-modifier-border: rgb(188, 192, 204) !important;
  --background-modifier-border-focus: rgb(156, 160, 176) !important;
  --background-modifier-border-hover: rgb(221, 225, 238) !important;
  --background-modifier-cover: #00000022 !important;
  --background-modifier-error: rgb(240, 68, 114) !important;
  --background-modifier-error-hover: rgba(240, 68, 114, 0.9) !important;
  --background-modifier-error-rgb: 240, 68, 114 !important;
  --background-modifier-form-field: rgba(254, 241, 241, 0.3) !important;
  --background-modifier-form-field-hover: rgba(254, 241, 241, 0.3) !important;
  --background-modifier-hover: rgba(76, 79, 105, 0.075) !important;
  --background-modifier-message: rgba(254, 241, 241, 0.9) !important;
  --background-modifier-success: rgb(64, 155, 40) !important;
  --background-modifier-success-hover: rgba(64, 155, 40, 0.9) !important;
  --background-modifier-success-rgb: 64, 155, 40 !important;
  --background-primary: rgb(252, 252, 252) !important;
  --background-primary-alt: rgb(243, 236, 243) !important;
  --background-secondary: rgb(243, 236, 243) !important;
  --background-secondary-alt: rgb(254, 241, 241) !important;
  --background-secondary-translucent: rgba(252, 252, 252, 0.1) !important;
  --background-secondary-translucent-1: rgba(252, 252, 252, 0.1) !important;
  --base: 252, 252, 252 !important;
  --bases-cards-background: rgb(252, 252, 252) !important;
  --bases-cards-cover-background: rgb(243, 236, 243) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(188, 192, 204) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(221, 225, 238) !important;
  --bases-embed-border-color: rgb(188, 192, 204) !important;
  --bases-group-heading-property-color: rgb(76, 79, 105) !important;
  --bases-table-border-color: rgb(188, 192, 204) !important;
  --bases-table-cell-background-active: rgb(252, 252, 252) !important;
  --bases-table-cell-background-disabled: rgb(243, 236, 243) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(156, 160, 176) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(222, 149, 132) !important;
  --bases-table-group-background: rgb(243, 236, 243) !important;
  --bases-table-header-background: rgb(252, 252, 252) !important;
  --bases-table-header-background-hover: rgba(76, 79, 105, 0.075) !important;
  --bases-table-header-color: rgb(76, 79, 105) !important;
  --bases-table-summary-background: rgb(252, 252, 252) !important;
  --bases-table-summary-background-hover: rgba(76, 79, 105, 0.075) !important;
  --bg-color-settings-0: #7d7d7d6b !important;
  --bg-color-settings-0-1: #ffffff77 !important;
  --bg-color-settings-1: rgba(252, 252, 252, 0.15) !important;
  --bg-color-settings-2: rgba(252, 252, 252, 0.3) !important;
  --bg-color-settings-3: rgba(252, 252, 252, 0.8) !important;
  --bg-color-settings-4: rgba(252, 252, 252, 0.7) !important;
  --bg-color-settings-5: #d4d4d464 !important;
  --bg-color-settings-6: #ffffff85 !important;
  --blockquote-background-color: rgba(254, 241, 241, 0.5) !important;
  --blockquote-border-color: rgb(222, 149, 132) !important;
  --blue: 71, 143, 238 !important;
  --blur-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent)) !important;
  --blur-depth: 10px !important;
  --blur-depth-cp: 10px !important;
  --bodyFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(240, 68, 114) !important;
  --callout-blend-mode: none;
  --callout-bug: 240, 68, 114;
  --callout-default: 71, 143, 238;
  --callout-error: 240, 68, 114;
  --callout-example: 176, 110, 201;
  --callout-fail: 240, 68, 114;
  --callout-gallery-gap: 5px;
  --callout-important: 23, 146, 153;
  --callout-info: 71, 143, 238;
  --callout-question: 249, 102, 50;
  --callout-success: 64, 155, 40;
  --callout-summary: 23, 146, 153;
  --callout-tip: 23, 146, 153;
  --callout-title-padding: 8px;
  --callout-todo: 71, 143, 238;
  --callout-warning: 249, 102, 50;
  --canvas-background: rgb(252, 252, 252) !important;
  --canvas-card-label-color: rgb(108, 111, 133) !important;
  --canvas-color: 156, 160, 176 !important;
  --canvas-color-1: 240, 68, 114 !important;
  --canvas-color-2: 249, 102, 50 !important;
  --canvas-color-3: 228, 147, 32 !important;
  --canvas-color-4: 64, 155, 40 !important;
  --canvas-color-5: 23, 146, 153 !important;
  --canvas-color-6: 176, 110, 201 !important;
  --canvas-dot-pattern: rgb(188, 192, 204) !important;
  --card-background-color: rgb(254, 241, 241) !important;
  --card-foreground-color: rgb(252, 252, 252) !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: rgb(243, 236, 243) !important;
  --cards-background-modifier-border: rgb(188, 192, 204) !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: rgb(76, 79, 105) !important;
  --checkbox-border-color: rgb(108, 111, 133) !important;
  --checkbox-border-color-hover: rgb(76, 79, 105) !important;
  --checkbox-color: rgb(222, 149, 132) !important;
  --checkbox-color-hover: rgb(222, 149, 132) !important;
  --checkbox-marker-color: rgb(252, 252, 252) !important;
  --checklist-done-color: rgb(76, 79, 105) !important;
  --code-background: rgb(243, 236, 243) !important;
  --code-border-color: rgb(188, 192, 204) !important;
  --code-bracket-background: rgba(76, 79, 105, 0.075) !important;
  --code-comment: rgb(108, 111, 133) !important;
  --code-function: rgb(228, 147, 32) !important;
  --code-important: rgb(249, 102, 50) !important;
  --code-keyword: rgb(215, 125, 146) !important;
  --code-normal: rgb(76, 79, 105) !important;
  --code-operator: rgb(240, 68, 114) !important;
  --code-property: rgb(23, 146, 153) !important;
  --code-punctuation: rgb(76, 79, 105) !important;
  --code-string: rgb(64, 155, 40) !important;
  --code-tag: rgb(240, 68, 114) !important;
  --code-value: rgb(176, 110, 201) !important;
  --codeFont: monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(108, 111, 133) !important;
  --collapse-icon-color-collapsed: rgb(222, 149, 132) !important;
  --color-accent: rgb(222, 149, 132) !important;
  --color-accent-1: rgb(222, 149, 132) !important;
  --color-accent-2: rgba(222, 149, 132, 0.9) !important;
  --color-accent-translucent-001: hsla(258, 88%, 66%, 0.01) !important;
  --color-accent-translucent-005: hsla(258, 88%, 66%, 0.05) !important;
  --color-accent-translucent-01: hsla(258, 88%, 66%, 0.1) !important;
  --color-accent-translucent-015: hsla(258, 88%, 66%, 0.15) !important;
  --color-accent-translucent-02: hsla(258, 88%, 66%, 0.2) !important;
  --color-accent-translucent-04: hsla(258, 88%, 66%, 0.4) !important;
  --color-accent-translucent-06: hsla(258, 88%, 66%, 0.6) !important;
  --color-base-00: rgb(254, 241, 241) !important;
  --color-base-10: rgb(243, 236, 243) !important;
  --color-base-100: rgb(76, 79, 105) !important;
  --color-base-20: rgb(252, 252, 252) !important;
  --color-base-25: rgb(221, 225, 238) !important;
  --color-base-30: rgb(188, 192, 204) !important;
  --color-base-35: rgb(221, 225, 238) !important;
  --color-base-40: rgb(156, 160, 176) !important;
  --color-base-50: rgb(140, 143, 161) !important;
  --color-base-60: rgb(76, 79, 105) !important;
  --color-base-70: rgb(108, 111, 133) !important;
  --color-black: hsl(27, 15%, 12%) !important;
  --color-blue: rgb(71, 143, 238) !important;
  --color-blue-rgb: 71, 143, 238 !important;
  --color-cyan: rgb(23, 146, 153) !important;
  --color-cyan-rgb: 23, 146, 153 !important;
  --color-green: rgb(64, 155, 40) !important;
  --color-green-rgb: 64, 155, 40 !important;
  --color-lightorange: rgb(195, 173, 87) !important;
  --color-lightorange-rgb: 195, 173, 87 !important;
  --color-lightpink: rgb(222, 149, 132) !important;
  --color-lightpink-rgb: 222, 149, 132 !important;
  --color-orange: rgb(249, 102, 50) !important;
  --color-orange-rgb: 249, 102, 50 !important;
  --color-pink: rgb(215, 125, 146) !important;
  --color-pink-rgb: 215, 125, 146 !important;
  --color-purple: rgb(176, 110, 201) !important;
  --color-purple-rgb: 176, 110, 201 !important;
  --color-red: rgb(240, 68, 114) !important;
  --color-red-rgb: 240, 68, 114 !important;
  --color-white: hsl(36, 36%, 96.9%) !important;
  --color-yellow: rgb(228, 147, 32) !important;
  --color-yellow-rgb: 228, 147, 32 !important;
  --cyan: 37, 189, 209 !important;
  --dark: rgb(76, 79, 105) !important;
  --darkgray: rgb(76, 79, 105) !important;
  --divider-color: rgb(188, 192, 204) !important;
  --divider-color-hover: rgb(222, 149, 132) !important;
  --dropdown-background: rgb(221, 225, 238) !important;
  --dropdown-background-hover: rgb(188, 192, 204) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(222, 149, 132) !important;
  --exterior: 254, 241, 241 !important;
  --external-link-color: rgba(222, 149, 132, 0.8) !important;
  --file-header-background: rgb(252, 252, 252) !important;
  --file-header-background-focused: rgb(252, 252, 252) !important;
  --flair-background: rgb(221, 225, 238) !important;
  --flair-color: rgb(76, 79, 105) !important;
  --font-family-folder-file-title: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-family-inline-code: monospace !important;
  --font-family-tag: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-family-vault: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-family-vertical-bar: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mermaid: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: monospace !important;
  --font-print: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, Arial' !important;
  --font-size-code: 1em !important;
  --font-size-file-header-title: 0.93em !important;
  --font-size-folder-and-file: 0.95em !important;
  --font-size-vault-name: 0.95em !important;
  --font-text: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgb(188, 192, 204) !important;
  --footnote-id-color: rgb(76, 79, 105) !important;
  --footnote-id-color-no-occurrences: rgb(108, 111, 133) !important;
  --footnote-input-background-active: rgba(76, 79, 105, 0.075) !important;
  --graph-arrow: rgb(176, 110, 201) !important;
  --graph-circle-fill: rgb(71, 143, 238) !important;
  --graph-circle-fill-highlight: rgb(71, 143, 238) !important;
  --graph-circle-fill-unresolved: rgb(240, 68, 114) !important;
  --graph-circle-outline: rgb(215, 125, 146) !important;
  --graph-fill-attachment: rgb(23, 146, 153) !important;
  --graph-fill-tag: rgb(249, 102, 50) !important;
  --graph-line: rgb(76, 79, 105) !important;
  --graph-line-highlight: rgb(222, 149, 132) !important;
  --graph-node: rgb(76, 79, 105) !important;
  --graph-node-attachment: rgb(228, 147, 32) !important;
  --graph-node-focused: rgb(222, 149, 132) !important;
  --graph-node-tag: rgb(64, 155, 40) !important;
  --graph-node-unresolved: rgb(108, 111, 133) !important;
  --graph-text: rgb(76, 79, 105) !important;
  --gray: rgb(76, 79, 105) !important;
  --green: 64, 155, 40 !important;
  --h1-color: rgb(240, 68, 114) !important;
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h2-color: rgb(222, 149, 132) !important;
  --h2-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h3-color: rgb(23, 146, 153) !important;
  --h3-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h4-color: rgb(37, 189, 209) !important;
  --h4-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h5-color: rgb(71, 143, 238) !important;
  --h5-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h6-color: rgb(58, 161, 182) !important;
  --h6-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --headerFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(222, 149, 132) !important;
  --highlight: rgba(249, 102, 50, 0.2) !important;
  --highlight-mix-blend-mode: none !important;
  --hr-color: rgb(188, 192, 204) !important;
  --hr-outline-color: rgb(188, 192, 204) !important;
  --icon-color: rgb(76, 79, 105) !important;
  --icon-color-active: rgb(222, 149, 132) !important;
  --icon-color-focused: rgb(222, 149, 132) !important;
  --icon-color-hover: rgb(76, 79, 105) !important;
  --img-border-radius: 15px !important;
  --img-max-height: 300px !important;
  --img-max-height-list: 270px !important;
  --img-max-width: 350px !important;
  --img-max-width-list: 300px !important;
  --indentation-guide-color: rgba(76, 79, 105, 0.12) !important;
  --indentation-guide-color-active: rgba(76, 79, 105, 0.3) !important;
  --inline-title-color: rgb(240, 68, 114) !important;
  --inline-title-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --input-date-separator: rgb(108, 111, 133) !important;
  --input-placeholder-color: rgb(108, 111, 133) !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(76, 79, 105, 0.09), 0 2px 4px 0 rgba(254, 241, 241, 0.15),
    0 1px 1.5px 0 rgba(254, 241, 241, 0.1), 0 1px 2px 0 rgba(254, 241, 241, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(76, 79, 105, 0.16), 0 2px 3px 0 rgba(254, 241, 241, 0.3),
    0 1px 1.5px 0 rgba(254, 241, 241, 0.2), 0 1px 2px 0 rgba(254, 241, 241, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: rgb(222, 149, 132) !important;
  --interactive-accent-hover: rgb(222, 149, 132) !important;
  --interactive-accent-rgb: 222, 149, 132 !important;
  --interactive-hover: rgb(188, 192, 204) !important;
  --interactive-normal: rgb(221, 225, 238) !important;
  --interactive-success: rgb(64, 155, 40) !important;
  --internal-link-color: rgba(222, 149, 132, 0.9) !important;
  --italic-color: rgb(64, 155, 40) !important;
  --lemon: 195, 173, 87 !important;
  --light: rgb(252, 252, 252) !important;
  --lightgray: rgb(243, 236, 243) !important;
  --lily: 222, 149, 132 !important;
  --link-color: rgb(222, 149, 132) !important;
  --link-color-hover: rgb(222, 149, 132) !important;
  --link-external-color: rgb(222, 149, 132) !important;
  --link-external-color-hover: rgb(222, 149, 132) !important;
  --link-unresolved-color: rgb(222, 149, 132) !important;
  --list-marker-color: rgb(108, 111, 133) !important;
  --list-marker-color-collapsed: rgb(222, 149, 132) !important;
  --list-marker-color-hover: rgb(76, 79, 105) !important;
  --max-width-image: 90% !important;
  --menu-background: rgb(243, 236, 243) !important;
  --menu-border-color: rgb(221, 225, 238) !important;
  --menu-shadow: 0px 1px 2px rgba(254, 241, 241, 0.121), 0px 3.4px 6.7px rgba(254, 241, 241, 0.179),
    0px 15px 30px rgba(254, 241, 241, 0.3) !important;
  --metadata-border-color: rgb(188, 192, 204) !important;
  --metadata-divider-color: rgb(188, 192, 204) !important;
  --metadata-input-background-active: rgba(76, 79, 105, 0.075) !important;
  --metadata-input-text-color: rgb(76, 79, 105) !important;
  --metadata-label-background-active: rgba(76, 79, 105, 0.075) !important;
  --metadata-label-text-color: rgb(76, 79, 105) !important;
  --metadata-label-text-color-hover: rgb(76, 79, 105) !important;
  --metadata-property-background-active: rgba(76, 79, 105, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(156, 160, 176) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(221, 225, 238) !important;
  --min-width-image: 50% !important;
  --modal-background: rgb(252, 252, 252) !important;
  --modal-border-color: rgb(221, 225, 238) !important;
  --mono-rgb-100: 76, 79, 105 !important;
  --nav-collapse-icon-color: rgb(108, 111, 133) !important;
  --nav-collapse-icon-color-collapsed: rgb(108, 111, 133) !important;
  --nav-folder-title-color: rgba(252, 252, 252) !important;
  --nav-heading-color: rgb(76, 79, 105) !important;
  --nav-heading-color-collapsed: rgb(108, 111, 133) !important;
  --nav-heading-color-collapsed-hover: rgb(76, 79, 105) !important;
  --nav-heading-color-hover: rgb(76, 79, 105) !important;
  --nav-indentation-guide-color: rgba(254, 241, 241, 0.4) !important;
  --nav-item-background-active: rgba(76, 79, 105, 0.075) !important;
  --nav-item-background-hover: rgba(76, 79, 105, 0.075) !important;
  --nav-item-background-selected: rgba(222, 149, 132, 0.2) !important;
  --nav-item-color: rgb(76, 79, 105) !important;
  --nav-item-color-active: rgb(76, 79, 105) !important;
  --nav-item-color-highlighted: rgb(222, 149, 132) !important;
  --nav-item-color-hover: rgb(76, 79, 105) !important;
  --nav-item-color-selected: rgb(76, 79, 105) !important;
  --nav-tag-color: rgb(108, 111, 133) !important;
  --nav-tag-color-active: rgb(76, 79, 105) !important;
  --nav-tag-color-hover: rgb(76, 79, 105) !important;
  --orange: 249, 102, 50 !important;
  --outline-border: 2px !important;
  --overlay0: 156, 160, 176 !important;
  --overlay1: 140, 143, 161 !important;
  --overlay2: 76, 79, 105 !important;
  --panel-page-opacity: 0.25 !important;
  --pdf-background: rgb(252, 252, 252) !important;
  --pdf-page-background: rgb(252, 252, 252) !important;
  --pdf-sidebar-background: rgb(252, 252, 252) !important;
  --pill-border-color: rgb(188, 192, 204) !important;
  --pill-border-color-hover: rgb(221, 225, 238) !important;
  --pill-color: rgb(76, 79, 105) !important;
  --pill-color-hover: rgb(76, 79, 105) !important;
  --pill-color-remove: rgb(108, 111, 133) !important;
  --pill-color-remove-hover: rgb(222, 149, 132) !important;
  --prompt-background: rgb(252, 252, 252) !important;
  --prompt-border-color: rgb(156, 160, 176) !important;
  --raised-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent)) !important;
  --red: 240, 68, 114 !important;
  --ribbon-background: rgb(243, 236, 243) !important;
  --ribbon-background-collapsed: rgb(252, 252, 252) !important;
  --rose: 215, 125, 146 !important;
  --scrollbar-active-thumb-bg: rgba(76, 79, 105, 0.2) !important;
  --scrollbar-bg: rgba(76, 79, 105, 0.05) !important;
  --scrollbar-thumb-bg: rgba(76, 79, 105, 0.1) !important;
  --sea: 23, 146, 153 !important;
  --search-clear-button-color: rgb(76, 79, 105) !important;
  --search-icon-color: rgb(76, 79, 105) !important;
  --search-result-background: rgb(252, 252, 252) !important;
  --secondary: rgb(222, 149, 132) !important;
  --setting-group-heading-color: rgb(76, 79, 105) !important;
  --setting-items-background: rgb(243, 236, 243) !important;
  --setting-items-border-color: rgb(188, 192, 204) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(254, 241, 241, 0.071), 0px 6.3px 24.7px rgba(254, 241, 241, 0.112),
    0px 30px 90px rgba(254, 241, 241, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(254, 241, 241, 0.121), 0px 3.4px 6.7px rgba(254, 241, 241, 0.179),
    0px 15px 30px rgba(254, 241, 241, 0.3) !important;
  --shib-bold-color: 240, 68, 114 !important;
  --shib-callout-fold-position: 1 !important;
  --shib-italic-color: 64, 155, 40 !important;
  --shib-speech-bubble-opacity: 0.5 !important;
  --side: 243, 236, 243 !important;
  --slider-thumb-border-color: rgb(221, 225, 238) !important;
  --slider-track-background: rgb(188, 192, 204) !important;
  --status-bar-background: rgb(243, 236, 243) !important;
  --status-bar-border-color: rgb(188, 192, 204) !important;
  --status-bar-text-color: rgb(76, 79, 105) !important;
  --subtext0: 108, 111, 133 !important;
  --subtext1: 92, 95, 119 !important;
  --suggestion-background: rgb(252, 252, 252) !important;
  --surface0: 221, 225, 238 !important;
  --surface1: 188, 192, 204 !important;
  --surface2: 221, 225, 238 !important;
  --swatch-shadow: inset 0 0 0 1px rgba(76, 79, 105, 0.15) !important;
  --sync-avatar-color-1: rgb(240, 68, 114) !important;
  --sync-avatar-color-2: rgb(249, 102, 50) !important;
  --sync-avatar-color-3: rgb(228, 147, 32) !important;
  --sync-avatar-color-4: rgb(64, 155, 40) !important;
  --sync-avatar-color-5: rgb(23, 146, 153) !important;
  --sync-avatar-color-6: rgb(71, 143, 238) !important;
  --sync-avatar-color-7: rgb(176, 110, 201) !important;
  --sync-avatar-color-8: rgb(215, 125, 146) !important;
  --tab-background-active: rgb(252, 252, 252) !important;
  --tab-container-background: rgb(243, 236, 243) !important;
  --tab-divider-color: rgb(221, 225, 238) !important;
  --tab-inactive-color: rgb(243, 236, 243) !important;
  --tab-outline-color: rgb(188, 192, 204) !important;
  --tab-radius: 0px !important;
  --tab-switcher-background: rgb(243, 236, 243) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(243, 236, 243), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(76, 79, 105, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(222, 149, 132) !important;
  --tab-text-color: rgb(108, 111, 133) !important;
  --tab-text-color-active: rgb(76, 79, 105) !important;
  --tab-text-color-focused: rgb(76, 79, 105) !important;
  --tab-text-color-focused-active: rgb(76, 79, 105) !important;
  --tab-text-color-focused-active-current: rgb(76, 79, 105) !important;
  --tab-text-color-focused-highlighted: rgb(222, 149, 132) !important;
  --table-add-button-border-color: rgb(188, 192, 204) !important;
  --table-border-color: rgb(188, 192, 204) !important;
  --table-drag-handle-background-active: rgb(222, 149, 132) !important;
  --table-drag-handle-color: rgb(108, 111, 133) !important;
  --table-drag-handle-color-active: rgb(252, 252, 252) !important;
  --table-header-border-color: rgb(188, 192, 204) !important;
  --table-header-color: rgb(76, 79, 105) !important;
  --table-selection-blend-mode: none !important;
  --table-selection-border-color: rgb(222, 149, 132) !important;
  --tag-background: rgba(222, 149, 132, 0.1) !important;
  --tag-background-hover: rgba(222, 149, 132, 0.2) !important;
  --tag-border-color: rgba(222, 149, 132, 0.15) !important;
  --tag-border-color-hover: rgba(222, 149, 132, 0.15) !important;
  --tag-color: rgb(222, 149, 132) !important;
  --tag-color-hover: rgb(222, 149, 132) !important;
  --tertiary: rgb(222, 149, 132) !important;
  --text: 76, 79, 105 !important;
  --text-accent: rgb(222, 149, 132) !important;
  --text-accent-hover: rgb(222, 149, 132) !important;
  --text-error: rgb(240, 68, 114) !important;
  --text-error-hover: rgba(240, 68, 114, 0.8) !important;
  --text-faint: rgb(108, 111, 133) !important;
  --text-highlight-bg: rgba(249, 102, 50, 0.2) !important;
  --text-highlight-bg-active: rgba(249, 102, 50, 0.4) !important;
  --text-muted: rgb(76, 79, 105) !important;
  --text-muted-rgb: 76, 79, 105 !important;
  --text-normal: rgb(76, 79, 105) !important;
  --text-on-accent: rgb(252, 252, 252) !important;
  --text-selection: rgba(71, 143, 238, 0.15) !important;
  --text-success: rgb(64, 155, 40) !important;
  --text-warning: rgb(249, 102, 50) !important;
  --textHighlight: rgba(249, 102, 50, 0.2) !important;
  --titleFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(243, 236, 243) !important;
  --titlebar-background-focused: rgb(254, 241, 241) !important;
  --titlebar-border-color: rgb(188, 192, 204) !important;
  --titlebar-text-color: rgb(76, 79, 105) !important;
  --titlebar-text-color-focused: rgb(222, 149, 132) !important;
  --turquoise: 58, 161, 182 !important;
  --unresolved-link-color: rgba(222, 149, 132, 0.8) !important;
  --vault-profile-color: rgb(76, 79, 105) !important;
  --vault-profile-color-hover: rgb(76, 79, 105) !important;
  --violet: 176, 110, 201 !important;
  --width-image-gallery: 200px !important;
  --workspace-background-translucent: rgba(254, 241, 241, 0.6) !important;
  --yellow: 228, 147, 32 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(243, 236, 243);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(252, 252, 252);
  border-color: rgb(76, 79, 105);
  box-shadow: rgba(76, 79, 105, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(254, 241, 241, 0.15) 0px 2px 4px 0px, rgba(254, 241, 241, 0.1) 0px 1px 1.5px 0px, rgba(254, 241, 241, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(222, 149, 132, 0.1);
  color: rgb(222, 149, 132);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(243, 236, 243);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(243, 236, 243);
  border-left-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(76, 79, 105);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(240, 68, 114);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 68, 114) none 0px;
  text-decoration-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(64, 155, 40);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 155, 40) none 0px;
  text-decoration-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(64, 155, 40);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 155, 40) none 0px;
  text-decoration-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(240, 68, 114);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 68, 114) none 0px;
  text-decoration-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(249, 102, 50, 0.2);
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body del {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(76, 79, 105);
  font-size: 12.09px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(222, 149, 132);
  border-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body p {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgba(222, 149, 132, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.8) none 0px;
  text-decoration-color: rgba(222, 149, 132, 0.8);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(222, 149, 132, 0.9);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.9) none 0px;
  text-decoration-color: rgba(222, 149, 132, 0.9);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(222, 149, 132, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.8) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(108, 111, 133);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(254, 241, 241, 0.5);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(188, 192, 204);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(188, 192, 204);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(188, 192, 204);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(188, 192, 204);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 20px;
  width: 661px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
  text-align: center;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
  text-align: center;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
  font-family: "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(228, 147, 32);
  border-left-color: rgb(228, 147, 32);
  border-right-color: rgb(228, 147, 32);
  border-top-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(240, 68, 114);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(240, 68, 114);
  border-radius: 15px;
  border-right-color: rgb(240, 68, 114);
  border-top-color: rgb(240, 68, 114);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 79, 105);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 146, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(58, 161, 182);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(37, 189, 209);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 173, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 143, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 173, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 173, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 155, 40);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  color: rgb(71, 143, 238);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(71, 143, 238);
  font-weight: 400;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 23, 146, 153;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(23, 146, 153, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(23, 146, 153, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(23, 146, 153, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(23, 146, 153, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 240, 68, 114;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 240, 68, 114;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 176, 110, 201;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(176, 110, 201, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(176, 110, 201, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(176, 110, 201, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(176, 110, 201, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 240, 68, 114;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 71, 143, 238;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 71, 143, 238;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 249, 102, 50;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(249, 102, 50, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(249, 102, 50, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(249, 102, 50, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(249, 102, 50, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(158, 158, 158, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 64, 155, 40;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(64, 155, 40, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(64, 155, 40, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(64, 155, 40, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(64, 155, 40, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 23, 146, 153;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(23, 146, 153, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(23, 146, 153, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(23, 146, 153, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(23, 146, 153, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 71, 143, 238;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 249, 102, 50;
  background-color: rgba(243, 236, 243, 0.4);
  border-bottom-color: rgba(249, 102, 50, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(249, 102, 50, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(249, 102, 50, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(249, 102, 50, 0.4);
  border-top-width: 1px;
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

html[saved-theme="light"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(254, 241, 241, 0.3);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
  box-shadow: rgba(254, 241, 241, 0.07) 0px 1.8px 7.3px 0px, rgba(254, 241, 241, 0.114) 0px 6.3px 24.7px 0px, rgba(254, 241, 241, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(76, 79, 105, 0.075);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(243, 236, 243);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(76, 79, 105, 0.075);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(76, 79, 105, 0.075);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(222, 149, 132, 0.1);
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(222, 149, 132);
}

html[saved-theme="light"] body h1 {
  color: rgb(240, 68, 114);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(222, 149, 132);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(240, 68, 114);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(23, 146, 153);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(37, 189, 209);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(71, 143, 238);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(58, 161, 182);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 71, 143, 238;
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(254, 241, 241, 0.4);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 79, 105);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(76, 79, 105);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(76, 79, 105);
  stroke: rgb(76, 79, 105);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(108, 111, 133);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(243, 236, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(243, 236, 243);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
  font-family: "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(222, 149, 132, 0.1);
  border-bottom-color: rgb(222, 149, 132);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(222, 149, 132);
  border-top-color: rgb(222, 149, 132);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: rgb(222, 149, 132);
}`,
  },
};
