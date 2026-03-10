import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "celestial-night",
    modes: ["dark"],
    variations: [],
    fonts: ["bookerly", "hatolie", "merienda"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 41 !important;
  --accent-l: 100% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgba(255, 255, 255, 0.1) !important;
  --background-modifier-border: #3b3f56 !important;
  --background-modifier-border-focus: #515b71 !important;
  --background-modifier-border-hover: #3b445d !important;
  --background-modifier-error: #e46f7d !important;
  --background-modifier-error-hover: #e46f7d !important;
  --background-modifier-error-rgb: 228, 111, 125 !important;
  --background-modifier-form-field: #313952 !important;
  --background-modifier-form-field-hover: #313952 !important;
  --background-modifier-success: #a5d18c !important;
  --background-modifier-success-rgb: 165, 209, 140 !important;
  --background-primary: #2a3141 !important;
  --background-primary-alt: #222a38 !important;
  --background-secondary: #262b3b !important;
  --background-secondary-alt: #1d232f !important;
  --bases-cards-background: #2a3141 !important;
  --bases-cards-cover-background: #222a38 !important;
  --bases-cards-radius: 26px !important;
  --bases-cards-shadow: 0 0 0 1px #3b3f56 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3b445d !important;
  --bases-embed-border-color: #3b3f56 !important;
  --bases-embed-border-radius: 20px !important;
  --bases-group-heading-property-color: #8890a6 !important;
  --bases-table-border-color: #3b3f56 !important;
  --bases-table-cell-background-active: #2a3141 !important;
  --bases-table-cell-background-disabled: #222a38 !important;
  --bases-table-cell-background-selected: rgba(255, 255, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #515b71 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 255, 255) !important;
  --bases-table-container-border-radius: 20px !important;
  --bases-table-group-background: #222a38 !important;
  --bases-table-header-background: #2a3141 !important;
  --bases-table-header-color: #8890a6 !important;
  --bases-table-summary-background: #2a3141 !important;
  --blockquote-background-color: #262b3b !important;
  --blockquote-border-color: #8890a6 !important;
  --blockquote-color: white !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, #1d232f 65%, transparent) linear-gradient(#1d232f, color-mix(in srgb, #1d232f 65%, transparent)) !important;
  --bodyFont: '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-blend-mode: normal;
  --callout-bug: 228, 111, 125;
  --callout-default: 86, 174, 214;
  --callout-error: 228, 111, 125;
  --callout-example: 181, 132, 199;
  --callout-fail: 228, 111, 125;
  --callout-important: 111, 210, 194;
  --callout-info: 86, 174, 214;
  --callout-question: 251, 179, 108;
  --callout-radius: 2em;
  --callout-success: 165, 209, 140;
  --callout-summary: 111, 210, 194;
  --callout-tip: 111, 210, 194;
  --callout-title-color: white;
  --callout-todo: 86, 174, 214;
  --callout-warning: 251, 179, 108;
  --canvas-background: #2a3141 !important;
  --canvas-card-label-color: #5f6980 !important;
  --canvas-color-1: 228, 111, 125 !important;
  --canvas-color-2: 251, 179, 108 !important;
  --canvas-color-3: 255, 222, 115 !important;
  --canvas-color-4: 165, 209, 140 !important;
  --canvas-color-5: 111, 210, 194 !important;
  --canvas-color-6: 181, 132, 199 !important;
  --canvas-controls-radius: 20px !important;
  --canvas-dot-pattern: #1d232f !important;
  --caret-color: #cdd1df !important;
  --checkbox-border-color: #5f6980 !important;
  --checkbox-border-color-hover: #8890a6 !important;
  --checkbox-color: white !important;
  --checkbox-color-hover: #cdd1df !important;
  --checkbox-marker-color: transparent !important;
  --checkbox-radius: 20px !important;
  --checkbox-size: 20px !important;
  --checklist-done-color: white !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 20px !important;
  --code-background: #222a38 !important;
  --code-border-color: #3b3f56 !important;
  --code-comment: #5f6980 !important;
  --code-function: #ffde73 !important;
  --code-important: #fbb36c !important;
  --code-keyword: #ff94c8 !important;
  --code-normal: #cdd1df !important;
  --code-operator: #e46f7d !important;
  --code-property: #6fd2c2 !important;
  --code-punctuation: #8890a6 !important;
  --code-radius: 20px !important;
  --code-string: #a5d18c !important;
  --code-tag: #e46f7d !important;
  --code-value: #b584c7 !important;
  --codeFont: '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #5f6980 !important;
  --collapse-icon-color-collapsed: hsl(38, 102%, 115%) !important;
  --color-accent: rgb(255, 255, 255) !important;
  --color-accent-1: hsl(38, 102%, 115%) !important;
  --color-accent-2: hsl(36, 105%, 129%) !important;
  --color-accent-hsl: 41, 100%, 100% !important;
  --color-base-00: #2a3141 !important;
  --color-base-05: #252b3a !important;
  --color-base-10: #222a38 !important;
  --color-base-100: #cdd1df !important;
  --color-base-20: #262b3b !important;
  --color-base-25: #313952 !important;
  --color-base-30: #1d232f !important;
  --color-base-35: #3b445d !important;
  --color-base-40: #515b71 !important;
  --color-base-50: #5f6980 !important;
  --color-base-60: #080b17 !important;
  --color-base-70: #8890a6 !important;
  --color-blue: #56aed6 !important;
  --color-blue-rgb: 86, 174, 214 !important;
  --color-cyan: #6fd2c2 !important;
  --color-cyan-rgb: 111, 210, 194 !important;
  --color-green: #a5d18c !important;
  --color-green-rgb: 165, 209, 140 !important;
  --color-orange: #fbb36c !important;
  --color-orange-rgb: 251, 179, 108 !important;
  --color-pink: #ff94c8 !important;
  --color-pink-rgb: 255, 148, 200 !important;
  --color-purple: #b584c7 !important;
  --color-purple-rgb: 181, 132, 199 !important;
  --color-red: #e46f7d !important;
  --color-red-rgb: 228, 111, 125 !important;
  --color-yellow: #ffde73 !important;
  --color-yellow-rgb: 255, 222, 115 !important;
  --dark: #cdd1df !important;
  --darkgray: #cdd1df !important;
  --divider-color: #3b3f56 !important;
  --divider-color-hover: rgb(255, 255, 255) !important;
  --dropdown-background: #1d232f !important;
  --dropdown-background-hover: #3b445d !important;
  --embed-block-shadow-hover: 0 0 0 1px #3b3f56, inset 0 0 0 1px #3b3f56 !important;
  --embed-border-start: 2px solid rgb(255, 255, 255) !important;
  --file-header-background: #2a3141 !important;
  --file-header-background-focused: #2a3141 !important;
  --file-header-font: '??', 'Avenir Next', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #1d232f !important;
  --flair-color: #cdd1df !important;
  --font-cursive: 'Merienda' !important;
  --font-headings: 'Merienda' !important;
  --font-interface: '??', 'Avenir Next', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'Avenir Next' !important;
  --font-mermaid: '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', 'Arial' !important;
  --font-sans: 'Avenir Next' !important;
  --font-serif: 'Bookerly' !important;
  --font-text: '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Bookerly', 'Source Han Serif', 'Noto Serif JP' !important;
  --footnote-divider-color: #3b3f56 !important;
  --footnote-id-color: #8890a6 !important;
  --footnote-id-color-no-occurrences: #5f6980 !important;
  --footnote-radius: 20px !important;
  --glow-color: white !important;
  --glow-effect-m: 0px 0px 30px rgb(255, 255, 255) , 0px 0px 10px rgba(93, 182, 255, 0.577) !important;
  --glow-effect-s: 0px 0px 20px rgba(255, 255, 255, 0.535) , 0px 0px 5px rgba(93, 182, 255, 0.586) !important;
  --graph-line: #3b445d !important;
  --graph-node: #8890a6 !important;
  --graph-node-attachment: #ffde73 !important;
  --graph-node-focused: hsl(38, 102%, 115%) !important;
  --graph-node-tag: #a5d18c !important;
  --graph-node-unresolved: #5f6980 !important;
  --graph-text: #cdd1df !important;
  --gray: #8890a6 !important;
  --h1-font: 'Merienda' !important;
  --h1-size: 2em !important;
  --h1-weight: 900 !important;
  --h2-font: 'Merienda' !important;
  --h2-weight: 800 !important;
  --h3-font: 'Merienda' !important;
  --h3-weight: 700 !important;
  --h4-font: 'Merienda' !important;
  --h4-weight: 600 !important;
  --h5-font: 'Merienda' !important;
  --h5-weight: 500 !important;
  --h6-font: 'Merienda' !important;
  --h6-weight: 400 !important;
  --headerFont: '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-font: 'Merienda' !important;
  --heading-formatting: #5f6980 !important;
  --highlight: rgba(255, 255, 255, 0.1) !important;
  --hr-color: #3b3f56 !important;
  --icon-color: #8890a6 !important;
  --icon-color-active: hsl(38, 102%, 115%) !important;
  --icon-color-focused: #cdd1df !important;
  --icon-color-hover: #8890a6 !important;
  --inline-title-font: 'Hatolie', '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-size: 4em !important;
  --inline-title-weight: normal !important;
  --input-date-separator: #5f6980 !important;
  --input-placeholder-color: #5f6980 !important;
  --interactive-accent: rgb(255, 255, 255) !important;
  --interactive-accent-hover: hsl(38, 102%, 115%) !important;
  --interactive-accent-hsl: 41, 100%, 100% !important;
  --interactive-hover: #3b445d !important;
  --interactive-normal: #1d232f !important;
  --light: #2a3141 !important;
  --lightgray: #262b3b !important;
  --link-color: hsl(38, 102%, 115%) !important;
  --link-color-hover: hsl(36, 105%, 129%) !important;
  --link-decoration-color-active: rgba(255, 255, 255, 0.5) !important;
  --link-external-color: hsl(38, 102%, 115%) !important;
  --link-external-color-hover: hsl(36, 105%, 129%) !important;
  --link-unresolved-color: hsl(38, 102%, 115%) !important;
  --link-unresolved-decoration-color: rgba(255, 255, 255, 0.3) !important;
  --list-bullet-size: 0.25em !important;
  --list-marker-color: white !important;
  --list-marker-color-collapsed: hsl(38, 102%, 115%) !important;
  --list-marker-color-hover: white !important;
  --menu-background: #262b3b !important;
  --menu-border-color: #3b445d !important;
  --menu-radius: 26px !important;
  --metadata-border-color: #3b3f56 !important;
  --metadata-divider-color: #3b3f56 !important;
  --metadata-input-font: '??', 'Avenir Next', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #cdd1df !important;
  --metadata-label-font: '??', 'Avenir Next', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #8890a6 !important;
  --metadata-label-text-color-hover: #8890a6 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #515b71 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3b445d !important;
  --modal-background: #2a3141 !important;
  --modal-border-color: #515b71 !important;
  --modal-radius: 30px !important;
  --nav-collapse-icon-color: #5f6980 !important;
  --nav-collapse-icon-color-collapsed: #5f6980 !important;
  --nav-heading-color: #cdd1df !important;
  --nav-heading-color-collapsed: #5f6980 !important;
  --nav-heading-color-collapsed-hover: #8890a6 !important;
  --nav-heading-color-hover: #cdd1df !important;
  --nav-item-background-selected: rgba(255, 255, 255, 0.15) !important;
  --nav-item-color: #8890a6 !important;
  --nav-item-color-active: #cdd1df !important;
  --nav-item-color-highlighted: hsl(38, 102%, 115%) !important;
  --nav-item-color-hover: #cdd1df !important;
  --nav-item-color-selected: #cdd1df !important;
  --nav-item-radius: 20px !important;
  --nav-tag-color: #5f6980 !important;
  --nav-tag-color-active: #8890a6 !important;
  --nav-tag-color-hover: #8890a6 !important;
  --nav-tag-radius: 20px !important;
  --pdf-background: #2a3141 !important;
  --pdf-page-background: #2a3141 !important;
  --pdf-shadow: 0 0 0 1px #3b3f56 !important;
  --pdf-sidebar-background: #2a3141 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #3b3f56 !important;
  --pill-border-color: #3b3f56 !important;
  --pill-border-color-hover: #3b445d !important;
  --pill-color: #8890a6 !important;
  --pill-color-hover: #cdd1df !important;
  --pill-color-remove: #5f6980 !important;
  --pill-color-remove-hover: hsl(38, 102%, 115%) !important;
  --prompt-background: #2a3141 !important;
  --prompt-border-color: #515b71 !important;
  --radius-l: 30px !important;
  --radius-m: 26px !important;
  --radius-s: 20px !important;
  --radius-xl: 45px !important;
  --raised-background: color-mix(in srgb, #1d232f 65%, transparent) linear-gradient(#1d232f, color-mix(in srgb, #1d232f 65%, transparent)) !important;
  --ribbon-background: #262b3b !important;
  --ribbon-background-collapsed: #2a3141 !important;
  --scrollbar-radius: 30px !important;
  --search-clear-button-color: #8890a6 !important;
  --search-icon-color: #8890a6 !important;
  --search-result-background: #2a3141 !important;
  --secondary: hsl(38, 102%, 115%) !important;
  --setting-group-heading-color: #cdd1df !important;
  --setting-items-background: #222a38 !important;
  --setting-items-border-color: #3b3f56 !important;
  --setting-items-radius: 30px !important;
  --slider-thumb-border-color: #3b445d !important;
  --slider-track-background: #3b3f56 !important;
  --status-bar-background: #262b3b !important;
  --status-bar-border-color: #3b3f56 !important;
  --status-bar-radius: 26px 0 0 0 !important;
  --status-bar-text-color: #8890a6 !important;
  --suggestion-background: #2a3141 !important;
  --sync-avatar-color-1: #e46f7d !important;
  --sync-avatar-color-2: #fbb36c !important;
  --sync-avatar-color-3: #ffde73 !important;
  --sync-avatar-color-4: #a5d18c !important;
  --sync-avatar-color-5: #6fd2c2 !important;
  --sync-avatar-color-6: #56aed6 !important;
  --sync-avatar-color-7: #b584c7 !important;
  --sync-avatar-color-8: #ff94c8 !important;
  --tab-background-active: #2a3141 !important;
  --tab-container-background: #262b3b !important;
  --tab-divider-color: #3b445d !important;
  --tab-outline-color: #3b3f56 !important;
  --tab-radius: 20px !important;
  --tab-switcher-background: #262b3b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #262b3b, transparent) !important;
  --tab-switcher-preview-radius: 45px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 255, 255) !important;
  --tab-text-color: #5f6980 !important;
  --tab-text-color-active: #8890a6 !important;
  --tab-text-color-focused: #8890a6 !important;
  --tab-text-color-focused-active: #8890a6 !important;
  --tab-text-color-focused-active-current: #cdd1df !important;
  --tab-text-color-focused-highlighted: hsl(38, 102%, 115%) !important;
  --table-add-button-border-color: #3b3f56 !important;
  --table-border-color: #3b3f56 !important;
  --table-drag-handle-background-active: rgb(255, 255, 255) !important;
  --table-drag-handle-color: #5f6980 !important;
  --table-drag-handle-color-active: #2a3141 !important;
  --table-header-border-color: #3b3f56 !important;
  --table-header-color: #cdd1df !important;
  --table-selection: rgba(255, 255, 255, 0.1) !important;
  --table-selection-border-color: rgb(255, 255, 255) !important;
  --tag-background: #262b3b !important;
  --tag-background-hover: rgba(255, 255, 255, 0.2) !important;
  --tag-border-color: rgba(255, 255, 255, 0.15) !important;
  --tag-border-color-hover: rgba(255, 255, 255, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(38, 102%, 115%) !important;
  --tag-color-hover: hsl(38, 102%, 115%) !important;
  --tag-radius: 1em !important;
  --tag-weight: 300 !important;
  --tertiary: hsl(36, 105%, 129%) !important;
  --text-accent: hsl(38, 102%, 115%) !important;
  --text-accent-hover: hsl(36, 105%, 129%) !important;
  --text-error: #e46f7d !important;
  --text-faint: #5f6980 !important;
  --text-muted: #8890a6 !important;
  --text-normal: #cdd1df !important;
  --text-on-accent: #2a3141 !important;
  --text-selection: rgba(255, 255, 255, 0.33) !important;
  --text-success: #a5d18c !important;
  --text-warning: #fbb36c !important;
  --textHighlight: rgba(255, 255, 255, 0.1) !important;
  --titleFont: '??', 'Bookerly', 'Source Han Serif', 'Noto Serif JP', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #262b3b !important;
  --titlebar-background-focused: #1d232f !important;
  --titlebar-border-color: #3b3f56 !important;
  --titlebar-text-color: #8890a6 !important;
  --titlebar-text-color-focused: #cdd1df !important;
  --vault-profile-color: #cdd1df !important;
  --vault-profile-color-hover: #cdd1df !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 43, 59);
  color: rgb(205, 209, 223);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(42, 49, 65);
  color: rgb(205, 209, 223);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 43, 59);
  color: rgb(205, 209, 223);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(59, 63, 86);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 43, 59);
  border-left-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}

html body div#quartz-root {
  background-color: rgb(42, 49, 65);
  color: rgb(205, 209, 223);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body .page article p > em, html em {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body .page article p > i, html i {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body .page article p > strong, html strong {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body .text-highlight {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body del {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: line-through rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body p {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(136, 144, 166) none 0px;
  text-decoration: rgb(136, 144, 166);
  text-decoration-color: rgb(136, 144, 166);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
  transition: 0.25s;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
}

html body a.internal.broken {
  color: rgb(255, 255, 255);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.5);
  text-decoration-color: rgba(255, 255, 255, 0.5);
}`,
    lists: `html body dd {
  color: rgb(205, 209, 223);
}

html body dt {
  color: rgb(205, 209, 223);
}

html body ol > li {
  color: rgb(136, 144, 166);
}

html body ol.overflow {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body ul > li {
  color: rgb(136, 144, 166);
}

html body ul.overflow {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(95, 105, 128);
  text-decoration: rgb(95, 105, 128);
}

html body blockquote {
  background-color: rgb(38, 43, 59);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body table {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 201.891px;
}

html body td {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}

html body th {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
}`,
    code: `html body code {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 222, 115);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 222, 115);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 222, 115);
  border-left-color: rgb(255, 222, 115);
  border-right-color: rgb(255, 222, 115);
  border-top-color: rgb(255, 222, 115);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html body pre:has(> code) {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body figcaption {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body img {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-radius: 20px;
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  filter: brightness(0.9);
}

html body video {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

html body .footnotes {
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

html body .transclude {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body .transclude-inner {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  margin-left: -30px;
  width: 20px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(205, 209, 223);
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(86, 174, 214);
  border-left-color: rgb(86, 174, 214);
  border-right-color: rgb(86, 174, 214);
  border-top-color: rgb(86, 174, 214);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 228, 111, 125;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 228, 111, 125;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 228, 111, 125;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="info"] {
  --callout-color: 86, 174, 214;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  --callout-color: 86, 174, 214;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="question"] {
  --callout-color: 251, 179, 108;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="success"] {
  --callout-color: 165, 209, 140;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 86, 174, 214;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 251, 179, 108;
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
}`,
    search: `html body .search > .search-button {
  background-color: rgb(49, 57, 82);
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(42, 49, 65);
  border-bottom-color: rgb(81, 91, 113);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(205, 209, 223);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 209, 223) none 0px;
  text-decoration: rgb(205, 209, 223);
  text-decoration-color: rgb(205, 209, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 209, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(205, 209, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(205, 209, 223);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(81, 91, 113);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 43, 59);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

html body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html body h1 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h2 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Hatolie, "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h3 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h4 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h5 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body h6 {
  color: rgb(255, 255, 255);
  font-family: Merienda;
  text-shadow: rgba(255, 255, 255, 0.61) 0px 0px 30px, rgba(93, 182, 255, 0.318) 0px 0px 10px;
}

html body hr {
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
}`,
    scrollbars: `html body .callout {
  --callout-color: 86, 174, 214;
  border-bottom-color: rgba(74, 78, 98, 0.984);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 78, 98, 0.984);
  border-left-width: 1px;
  border-right-color: rgba(74, 78, 98, 0.984);
  border-right-width: 1px;
  border-top-color: rgba(74, 78, 98, 0.984);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-width: 1px;
  padding-left: 25px;
}

html body ::-webkit-scrollbar {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}

html body ::-webkit-scrollbar-track {
  background: rgb(42, 49, 65) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(42, 49, 65);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 144, 166);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 144, 166);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(136, 144, 166);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}`,
    footer: `html body footer {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgb(59, 63, 86);
  border-left-color: rgb(59, 63, 86);
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 26px;
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(136, 144, 166);
  text-decoration: rgb(136, 144, 166);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 144, 166);
  text-decoration: rgb(136, 144, 166);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body li.section-li > .section .meta {
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 144, 166);
  text-decoration: rgb(136, 144, 166);
}

html body ul.section-ul {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}

html body .darkmode svg {
  color: rgb(136, 144, 166);
  stroke: rgb(136, 144, 166);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(136, 144, 166);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
}

html body .breadcrumb-element p {
  color: rgb(95, 105, 128);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  color: rgb(205, 209, 223);
}

html body .metadata {
  background-color: rgb(38, 43, 59);
  border-bottom-color: rgb(59, 63, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(59, 63, 86);
  border-top-color: rgb(59, 63, 86);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(136, 144, 166);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 8px;
  padding-right: 8px;
}

html body .metadata-properties {
  border-bottom-color: rgb(136, 144, 166);
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  color: rgb(136, 144, 166);
  font-family: "??", Bookerly, "Source Han Serif", "Noto Serif JP", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(38, 43, 59);
}

html body .page-header h2.page-title {
  color: rgb(205, 209, 223);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(205, 209, 223);
  text-decoration: underline dotted rgb(205, 209, 223);
}

html body details {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body input[type=text] {
  border-bottom-color: rgb(136, 144, 166);
  border-left-color: rgb(136, 144, 166);
  border-right-color: rgb(136, 144, 166);
  border-top-color: rgb(136, 144, 166);
  color: rgb(136, 144, 166);
  font-family: "??", "Avenir Next", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(34, 42, 56);
  border-bottom-color: rgb(205, 209, 223);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(205, 209, 223);
}

html body progress {
  border-bottom-color: rgb(205, 209, 223);
  border-left-color: rgb(205, 209, 223);
  border-right-color: rgb(205, 209, 223);
  border-top-color: rgb(205, 209, 223);
}

html body sub {
  color: rgb(205, 209, 223);
}

html body summary {
  color: rgb(205, 209, 223);
}

html body sup {
  color: rgb(205, 209, 223);
}`,
  },
  light: {},
};
