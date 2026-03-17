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
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
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
  --bold-weight: 600 !important;
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
  --callout-title-weight: 600;
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
  --heading-spacing: 2.5rem !important;
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
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
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
  --metadata-input-height: 28px !important;
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
  --sidebar-markdown-font-size: 14.4px !important;
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
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(255, 98, 107);
  text-decoration-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(56, 198, 141);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(56, 198, 141) none 0px;
  text-decoration: rgb(56, 198, 141);
  text-decoration-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(56, 198, 141);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(56, 198, 141) none 0px;
  text-decoration: rgb(56, 198, 141);
  text-decoration-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 98, 107);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 98, 107) none 0px;
  text-decoration: rgb(255, 98, 107);
  text-decoration-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(247, 157, 124, 0.2);
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration: line-through rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body p {
  color: rgb(148, 155, 183);
  outline: rgb(148, 155, 183) none 0px;
  text-decoration: rgb(148, 155, 183);
  text-decoration-color: rgb(148, 155, 183);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(235, 188, 186, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.8) none 0px;
  text-decoration: underline rgba(235, 188, 186, 0.8);
  text-decoration-color: rgba(235, 188, 186, 0.8);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(235, 188, 186, 0.9);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.9) none 0px;
  text-decoration: rgba(235, 188, 186, 0.9);
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
  text-decoration: rgb(165, 172, 201);
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
  border-bottom-color: rgb(198, 206, 239);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(198, 206, 239);
  border-radius: 15px;
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
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
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(148, 155, 183);
  text-decoration: line-through rgb(148, 155, 183);
  text-decoration-color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(165, 172, 201);
  border-left-color: rgb(165, 172, 201);
  border-right-color: rgb(165, 172, 201);
  border-top-color: rgb(165, 172, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(148, 155, 183);
  text-decoration: line-through rgb(148, 155, 183);
  text-decoration-color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 206, 239);
  text-decoration: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
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
  text-decoration: rgb(198, 206, 239);
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
  text-decoration: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(148, 155, 183);
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
  text-decoration: rgb(148, 155, 183);
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
  text-decoration: rgb(148, 155, 183);
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
  text-decoration: rgb(148, 155, 183);
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
  text-decoration: underline dotted rgb(198, 206, 239);
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
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
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
  --bold-weight: 600 !important;
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
  --callout-title-weight: 600;
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
  --heading-spacing: 2.5rem !important;
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
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
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
  --metadata-input-height: 28px !important;
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
  --sidebar-markdown-font-size: 14.4px !important;
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
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(240, 68, 114);
  text-decoration-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(64, 155, 40);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 155, 40) none 0px;
  text-decoration: rgb(64, 155, 40);
  text-decoration-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(64, 155, 40);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 155, 40) none 0px;
  text-decoration: rgb(64, 155, 40);
  text-decoration-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(240, 68, 114);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 68, 114) none 0px;
  text-decoration: rgb(240, 68, 114);
  text-decoration-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(249, 102, 50, 0.2);
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body del {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: line-through rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body p {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgba(222, 149, 132, 0.8);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.8) none 0px;
  text-decoration: underline rgba(222, 149, 132, 0.8);
  text-decoration-color: rgba(222, 149, 132, 0.8);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(222, 149, 132, 0.9);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.9) none 0px;
  text-decoration: rgba(222, 149, 132, 0.9);
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
  text-decoration: rgb(108, 111, 133);
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
  border-bottom-color: rgb(76, 79, 105);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(76, 79, 105);
  border-radius: 15px;
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
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
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(76, 79, 105);
  text-decoration: line-through rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 79, 105);
  text-decoration: line-through rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
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
  text-decoration: rgb(76, 79, 105);
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
  text-decoration: rgb(76, 79, 105);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(76, 79, 105);
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
  text-decoration: rgb(76, 79, 105);
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
  text-decoration: rgb(76, 79, 105);
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
  text-decoration: rgb(76, 79, 105);
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
  text-decoration: underline dotted rgb(76, 79, 105);
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
}`,
  },
};
