import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "arcane", modes: ["dark"], variations: [], fonts: ["roboto"] },
  dark: {
    base: `:root:root {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: rgba(139, 108, 239, 0.15) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-primary: rgb(34, 33, 44) !important;
  --background-primary-alt: rgb(29, 31, 42) !important;
  --background-secondary: rgb(34, 32, 44) !important;
  --bases-cards-background: rgb(34, 33, 44) !important;
  --bases-cards-cover-background: rgb(29, 31, 42) !important;
  --bases-group-heading-property-color: #6e6b7e !important;
  --bases-table-cell-background-active: rgb(34, 33, 44) !important;
  --bases-table-cell-background-disabled: rgb(29, 31, 42) !important;
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(139, 108, 239) !important;
  --bases-table-group-background: rgb(29, 31, 42) !important;
  --bases-table-header-background: rgb(34, 33, 44) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #6e6b7e !important;
  --bases-table-summary-background: rgb(34, 33, 44) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-background-color: rgb(46, 43, 59) !important;
  --blockquote-border-color: #6272a4 !important;
  --blockquote-border-thickness: 5px !important;
  --blue-1: rgb(72, 54, 153) !important;
  --blue-2: #4d3ca6 !important;
  --bodyFont: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #ffb86c !important;
  --bold-weight: 600 !important;
  --callout-question: 224, 222, 113;
  --canvas-background: rgb(34, 33, 44) !important;
  --canvas-card-label-color: #6c6498 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color: #6c6498 !important;
  --checkbox-border-color-hover: #6e6b7e !important;
  --checkbox-color: rgb(139, 108, 239) !important;
  --checkbox-color-hover: rgb(170, 153, 245) !important;
  --checkbox-marker-color: rgb(34, 33, 44) !important;
  --checklist-done-color: #6e6b7e !important;
  --code-background: #282a36 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #6272a4 !important;
  --code-function: #ff80bf !important;
  --code-important: #ff80bf !important;
  --code-keyword: #9580ff !important;
  --code-normal: #f8f8f2 !important;
  --code-operator: #ff80bf !important;
  --code-property: #80ffea !important;
  --code-punctuation: #6e6b7e !important;
  --code-string: #ffff80 !important;
  --code-tag: #ff80bf !important;
  --code-value: #8aff80 !important;
  --codeFont: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #6c6498 !important;
  --collapse-icon-color-collapsed: rgb(170, 153, 245) !important;
  --color-accent: rgb(139, 108, 239) !important;
  --color-accent-1: rgb(170, 153, 245) !important;
  --color-accent-2: rgb(206, 199, 250) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --color-highlight-text: #fef3ac !important;
  --cyan-1: #80ffea !important;
  --cyan-2: rgb(134, 251, 253) !important;
  --cyan-3: rgb(114, 195, 213) !important;
  --cyan-4: rgb(114, 185, 203) !important;
  --cyan-5: rgb(60, 152, 180) !important;
  --cyan-6: rgb(76, 118, 133) !important;
  --dark: #f8f8f2 !important;
  --dark-1: rgba(0, 0, 0, 0.05) !important;
  --dark-10: #2f2f2d !important;
  --dark-11: #303030 !important;
  --dark-12: rgb(23, 24, 28) !important;
  --dark-13: rgb(29, 31, 42) !important;
  --dark-14: rgb(26, 25, 31) !important;
  --dark-15: rgb(34, 33, 44) !important;
  --dark-16: rgb(34, 32, 44) !important;
  --dark-17: rgb(46, 43, 59) !important;
  --dark-18: rgb(54, 56, 68) !important;
  --dark-19: #363948 !important;
  --dark-2: rgba(0, 0, 0, 0.15) !important;
  --dark-20: rgba(0, 0, 0, 0.85) !important;
  --dark-21: rgba(0, 0, 0, 0.9) !important;
  --dark-22: black !important;
  --dark-3: rgba(0, 0, 0, 0.2) !important;
  --dark-4: rgba(0, 0, 0, 0.35) !important;
  --dark-5: rgba(139, 108, 239, 0.1) !important;
  --dark-6: rgba(54, 57, 72, 0.4) !important;
  --dark-7: #262626 !important;
  --dark-8: #282a36 !important;
  --dark-9: #2a2a2a !important;
  --darkgray: #f8f8f2 !important;
  --default-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --divider-color-hover: #6e6b7e !important;
  --embed-block-shadow-hover: 0 0 0 1px #363636,
        inset 0 0 0 1px #363636 !important;
  --embed-border-bottom: 2px solid #6272a4 !important;
  --embed-border-left: 2px solid #6272a4 !important;
  --embed-border-right: 2px solid #6272a4 !important;
  --embed-border-start: 2px solid rgb(139, 108, 239) !important;
  --embed-border-top: 2px solid #6272a4 !important;
  --file-header-background: rgb(34, 33, 44) !important;
  --file-header-background-focused: rgb(34, 33, 44) !important;
  --file-header-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 32px !important;
  --flair-color: #f8f8f2 !important;
  --font-interface: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: #6e6b7e !important;
  --footnote-id-color-no-occurrences: #6c6498 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-controls-settings-name: rgb(114, 185, 203) !important;
  --graph-line: rgb(76, 118, 133) !important;
  --graph-node: #6e6b7e !important;
  --graph-node-attachment: #6e6b7e !important;
  --graph-node-focused: rgb(221, 110, 190) !important;
  --graph-node-resolved: rgb(243, 238, 94) !important;
  --graph-node-tag: rgb(101, 230, 168) !important;
  --graph-node-unresolved: #6c6498 !important;
  --graph-text: rgb(159, 169, 198) !important;
  --gray: #6e6b7e !important;
  --gray-1: rgb(153, 153, 153) !important;
  --gray-2: rgb(159, 169, 198) !important;
  --gray-3: rgb(213, 214, 215) !important;
  --gray-4: #6e6b7e !important;
  --green-1: #8aff80 !important;
  --green-2: rgb(91, 241, 103) !important;
  --green-3: rgb(82, 250, 124) !important;
  --green-4: rgb(101, 230, 168) !important;
  --green-5: #50fa7b !important;
  --green-6: rgb(108, 224, 137) !important;
  --green-7: rgba(101, 230, 168, 0.7) !important;
  --h1-color: rgb(255, 87, 87) !important;
  --h1-size: 1.802em !important;
  --h2-color: rgb(174, 150, 248) !important;
  --h2-size: 1.602em !important;
  --h2-weight: 600 !important;
  --h3-color: rgb(91, 241, 103) !important;
  --h3-size: 1.424em !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(255, 169, 122) !important;
  --h4-size: 1.266em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(250, 241, 137) !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(134, 251, 253) !important;
  --headerFont: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #6c6498 !important;
  --highlight: rgba(255, 255, 255, 0.075) !important;
  --icon-color: #6e6b7e !important;
  --icon-color-active: rgb(153, 153, 153) !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: #6e6b7e !important;
  --inline-title-color: rgb(255, 87, 87) !important;
  --inline-title-size: 1.802em !important;
  --input-date-separator: #6c6498 !important;
  --input-placeholder-color: #6c6498 !important;
  --interactive-accent: rgb(139, 108, 239) !important;
  --interactive-accent-hover: rgb(170, 153, 245) !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-accent-rgb: rgb(72, 54, 153) !important;
  --italic-color: #ffff80 !important;
  --light: rgb(34, 33, 44) !important;
  --lightgray: rgb(34, 32, 44) !important;
  --link-color: #ff80bf !important;
  --link-color-hover: rgba(224, 113, 161, 0.9) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(82, 250, 124) !important;
  --link-external-color-hover: rgb(108, 224, 137) !important;
  --link-unresolved-color: rgb(224, 113, 161) !important;
  --link-unresolved-decoration-color: rgba(139, 108, 239, 0.3) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-indent: 2em !important;
  --list-marker-color: #6c6498 !important;
  --list-marker-color-collapsed: rgb(170, 153, 245) !important;
  --list-marker-color-hover: #6e6b7e !important;
  --menu-background: rgb(34, 32, 44) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #6e6b7e !important;
  --metadata-label-text-color-hover: #6e6b7e !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --modal-background: rgb(34, 33, 44) !important;
  --nav-collapse-icon-color: #6c6498 !important;
  --nav-collapse-icon-color-collapsed: #6c6498 !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed: #6c6498 !important;
  --nav-heading-color-collapsed-hover: #6e6b7e !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-background-active: rgb(54, 56, 68) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: rgba(139, 108, 239, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #6e6b7e !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: #6e6b7e !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #6c6498 !important;
  --nav-tag-color-active: #6e6b7e !important;
  --nav-tag-color-hover: #6e6b7e !important;
  --pdf-background: rgb(34, 33, 44) !important;
  --pdf-page-background: rgb(34, 33, 44) !important;
  --pdf-sidebar-background: rgb(34, 33, 44) !important;
  --pill-color: #6e6b7e !important;
  --pill-color-hover: #6e6b7e !important;
  --pill-color-remove: #6c6498 !important;
  --pill-color-remove-hover: rgb(170, 153, 245) !important;
  --pink-1: #ff80bf !important;
  --pink-2: rgb(221, 110, 190) !important;
  --pink-3: rgb(224, 113, 161) !important;
  --pink-3-transparent: rgba(224, 113, 161, 0.9) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgb(34, 33, 44) !important;
  --purple-1: #bd93f9 !important;
  --purple-2: rgb(174, 150, 248) !important;
  --purple-3: #9580ff !important;
  --purple-4: #6272a4 !important;
  --purple-5: #6c6498 !important;
  --red-1: red !important;
  --red-2: rgb(255, 87, 87) !important;
  --red-3: #ff5555 !important;
  --red-4: #FF6654 !important;
  --ribbon-background: rgb(34, 32, 44) !important;
  --ribbon-background-collapsed: rgb(34, 33, 44) !important;
  --search-clear-button-color: #6e6b7e !important;
  --search-icon-color: #6e6b7e !important;
  --search-result-background: rgb(34, 33, 44) !important;
  --search-result-text-color: #262626 !important;
  --secondary: rgb(170, 153, 245) !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: rgb(29, 31, 42) !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: rgb(34, 32, 44) !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #6e6b7e !important;
  --suggestion-background: rgb(34, 33, 44) !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: rgb(34, 33, 44) !important;
  --tab-container-background: rgb(34, 32, 44) !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: rgb(34, 32, 44) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(34, 32, 44), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(139, 108, 239) !important;
  --tab-text-color: #6c6498 !important;
  --tab-text-color-active: #f1b968 !important;
  --tab-text-color-focused: #6e6b7e !important;
  --tab-text-color-focused-active: #f1b968 !important;
  --tab-text-color-focused-active-current: #f1b968 !important;
  --tab-text-color-focused-highlighted: rgb(170, 153, 245) !important;
  --table-drag-handle-background-active: rgb(139, 108, 239) !important;
  --table-drag-handle-color: #6c6498 !important;
  --table-drag-handle-color-active: #f8f8f2 !important;
  --table-header-color: #f8f8f2 !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(139, 108, 239, 0.1) !important;
  --table-selection-border-color: rgb(139, 108, 239) !important;
  --table-white-space: normal !important;
  --tag-background: none !important;
  --tag-background-hover: none !important;
  --tag-border-color: rgba(139, 108, 239, 0.15) !important;
  --tag-border-color-hover: rgba(139, 108, 239, 0.15) !important;
  --tag-color: rgb(101, 230, 168) !important;
  --tag-color-hover: rgba(101, 230, 168, 0.7) !important;
  --tag-decoration-hover: underline !important;
  --tertiary: #6e6b7e !important;
  --text-accent: rgb(170, 153, 245) !important;
  --text-accent-hover: #6e6b7e !important;
  --text-faint: #6c6498 !important;
  --text-highlight-bg-active: rgba(54, 57, 72, 0.4) !important;
  --text-muted: #6e6b7e !important;
  --text-normal: #f8f8f2 !important;
  --text-on-accent: #f8f8f2 !important;
  --text-selection: rgba(139, 108, 239, 0.33) !important;
  --textHighlight: rgba(255, 255, 255, 0.075) !important;
  --titleFont: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(34, 32, 44) !important;
  --titlebar-background-focused: rgb(34, 32, 44) !important;
  --titlebar-text-color: #6e6b7e !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --toggle-thumb-color: #f8f8f2 !important;
  --vault-name-color: #f8f8f2 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --white-1: #f8f8f2 !important;
  --white-2: #fff !important;
  --workspace-background-translucent: rgba(0, 0, 0, 0.) !important;
  --yellow-1: #fef3ac !important;
  --yellow-2: #ffff80 !important;
  --yellow-3: rgb(250, 241, 137) !important;
  --yellow-4: rgb(243, 238, 94) !important;
  --yellow-5: #ffb86c !important;
  --yellow-6: rgb(255, 169, 122) !important;
  --yellow-7: #f1b968 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 32, 44);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 33, 44);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 32, 44);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 32, 44);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(34, 33, 44);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .page article p > em, em {
  color: rgb(255, 255, 128);
  outline: rgb(255, 255, 128) none 0px;
  text-decoration: rgb(255, 255, 128);
  text-decoration-color: rgb(255, 255, 128);
}

body .page article p > i, i {
  color: rgb(255, 255, 128);
  outline: rgb(255, 255, 128) none 0px;
  text-decoration: rgb(255, 255, 128);
  text-decoration-color: rgb(255, 255, 128);
}

body .page article p > strong, strong {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .text-highlight {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(114, 195, 213);
  outline: rgb(114, 195, 213) none 0px;
  text-decoration: line-through rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body p {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 107, 126) none 0px;
  text-decoration: rgb(110, 107, 126);
  text-decoration-color: rgb(110, 107, 126);
}`,
    links: `body a.external, footer a {
  color: rgb(82, 250, 124);
  outline: rgb(82, 250, 124) none 0px;
  text-decoration: underline rgb(82, 250, 124);
  text-decoration-color: rgb(82, 250, 124);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 191);
  outline: rgb(255, 128, 191) none 0px;
  text-decoration: rgb(255, 128, 191);
  text-decoration-color: rgb(255, 128, 191);
}

body a.internal.broken {
  color: rgb(224, 113, 161);
  outline: rgb(224, 113, 161) none 0px;
  text-decoration: rgba(139, 108, 239, 0.3);
  text-decoration-color: rgba(139, 108, 239, 0.3);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(114, 195, 213);
}

body ol.overflow {
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(114, 195, 213);
}

body ul.overflow {
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(108, 100, 152);
  text-decoration: rgb(108, 100, 152);
}

body blockquote {
  background-color: rgb(46, 43, 59);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body table {
  color: rgb(248, 248, 242);
}

body td {
  color: rgb(248, 248, 242);
}

body th {
  color: rgb(248, 248, 242);
}`,
    code: `body code {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: "SF Mono", Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(248, 248, 242);
  font-family: "SF Mono", Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

body pre > code > [data-line] {
  border-left-color: rgb(138, 255, 128);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(138, 255, 128);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(138, 255, 128);
  border-left-color: rgb(138, 255, 128);
  border-right-color: rgb(138, 255, 128);
  border-top-color: rgb(138, 255, 128);
}

body pre > code, pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body figcaption {
  color: rgb(114, 195, 213);
}

body figure {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body img {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body video {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    embeds: `body .file-embed {
  background-color: rgb(29, 31, 42);
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(98, 114, 164);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(139, 108, 239);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(98, 114, 164);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgb(98, 114, 164);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(139, 108, 239);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(98, 114, 164);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 107, 126);
  text-decoration: line-through rgb(110, 107, 126);
  text-decoration-color: rgb(110, 107, 126);
}

body input[type=checkbox] {
  border-bottom-color: rgb(108, 100, 152);
  border-left-color: rgb(108, 100, 152);
  border-right-color: rgb(108, 100, 152);
  border-top-color: rgb(108, 100, 152);
}

body li.task-list-item[data-task='!'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='*'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='-'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='/'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='>'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='?'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='I'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='S'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='b'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='c'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='d'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='f'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='i'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='k'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='l'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='p'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='u'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='w'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}`,
    callouts: `body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
}`,
    search: `body .search > .search-button {
  color: rgb(248, 248, 242);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(34, 33, 44);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(34, 32, 44);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(248, 248, 242);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(171, 154, 245);
}

body h1 {
  color: rgb(255, 87, 87);
}

body h2 {
  color: rgb(174, 150, 248);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 87, 87);
}

body h3 {
  color: rgb(91, 241, 103);
}

body h4 {
  color: rgb(255, 169, 122);
}

body h5 {
  color: rgb(250, 241, 137);
}

body h6 {
  color: rgb(134, 251, 253);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

body ::-webkit-scrollbar-corner {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

body ::-webkit-scrollbar-track {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 214, 215);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(213, 214, 215);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 214, 215);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(213, 214, 215);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(110, 107, 126);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(54, 56, 68);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}`,
    footer: `body footer {
  background-color: rgb(34, 32, 44);
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(110, 107, 126);
  text-decoration: rgb(110, 107, 126);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 107, 126);
  text-decoration: rgb(110, 107, 126);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 107, 126);
  text-decoration: rgb(110, 107, 126);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

body .darkmode svg {
  color: rgb(110, 107, 126);
  stroke: rgb(110, 107, 126);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

body .breadcrumb-element p {
  color: rgb(108, 100, 152);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

body .metadata {
  color: rgb(110, 107, 126);
}

body .metadata-properties {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

body .navigation-progress {
  background-color: rgb(34, 32, 44);
}

body .page-header h2.page-title {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(114, 195, 213);
  text-decoration: underline dotted rgb(114, 195, 213);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body input[type=text] {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body progress {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body sub {
  color: rgb(114, 195, 213);
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(114, 195, 213);
}`,
  },
  light: {},
};
