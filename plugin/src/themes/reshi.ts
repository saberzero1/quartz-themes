import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "reshi",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "noto-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-1: 45% !important;
  --accent-h: 84 !important;
  --accent-s: 25% !important;
  --background-modifier-active-hover: ((#849e5f), 0.15) !important;
  --background-modifier-border: #9d9d9d !important;
  --background-modifier-border-focus: #9d9d9d !important;
  --background-modifier-border-hover: #9d9d9d !important;
  --background-modifier-error: #8e4646 !important;
  --background-modifier-error-hover: #8e4646 !important;
  --background-modifier-error-rgb: rgb(142, 70, 70) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-message: #202020 !important;
  --background-modifier-success: #778e55 !important;
  --background-modifier-success-rgb: rgb(145, 168, 110) !important;
  --background-primary: #252525 !important;
  --background-primary-alt: #1f1f1f !important;
  --background-secondary: #1d1d1d !important;
  --background-secondary-alt: #151515 !important;
  --bases-cards-background: #252525 !important;
  --bases-cards-cover-background: #1f1f1f !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #9d9d9d !important;
  --bases-cards-shadow-hover: 0 0 0 1px #9d9d9d !important;
  --bases-embed-border-color: #9d9d9d !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #707070 !important;
  --bases-table-border-color: #9d9d9d !important;
  --bases-table-cell-background-active: #252525 !important;
  --bases-table-cell-background-disabled: #1f1f1f !important;
  --bases-table-cell-background-selected: #404040 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #9d9d9d !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #778e55 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #1f1f1f !important;
  --bases-table-header-background: #252525 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #707070 !important;
  --bases-table-row-background-hover: none !important;
  --bases-table-summary-background: #252525 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --black: #202020 !important;
  --blockquote-background-color: none !important;
  --blockquote-border-color: #778e55 !important;
  --blockquote-color: #707070 !important;
  --bodyFont: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --bold-color: #778e55 !important;
  --bold-weight: 600 !important;
  --button-radius: 6px !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 100%;
  --callout-border-width: 1px;
  --callout-bug: 223, 191, 116;
  --callout-content-background: normal;
  --callout-content-padding: 0p;
  --callout-default: 145, 168, 110;
  --callout-error: 142, 70, 70;
  --callout-example: 155, 122, 209;
  --callout-fail: 142, 70, 70;
  --callout-important: 145, 168, 110;
  --callout-info: 123, 171, 212;
  --callout-padding: 12px;
  --callout-question: 155, 122, 209;
  --callout-quote: 223, 191, 116;
  --callout-radius: 6px;
  --callout-success: 145, 168, 110;
  --callout-summary: 223, 191, 116;
  --callout-tip: 155, 122, 209;
  --callout-title-size: 18px;
  --callout-todo: 123, 171, 212;
  --callout-warning: 142, 70, 70;
  --canvas-background: #252525 !important;
  --canvas-card-label-color: #707070 !important;
  --canvas-color-1: rgb(142, 70, 70) !important;
  --canvas-color-2: rgb(207, 132, 79) !important;
  --canvas-color-3: rgb(223, 191, 116) !important;
  --canvas-color-4: rgb(145, 168, 110) !important;
  --canvas-color-5: rgb(127, 187, 184) !important;
  --canvas-color-6: rgb(155, 122, 209) !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #333333 !important;
  --caret-color: #9d9d9d !important;
  --checkbox-border-color: #778e55 !important;
  --checkbox-border-color-hover: #778e55 !important;
  --checkbox-color: none !important;
  --checkbox-color-hover: #1f1f1f !important;
  --checkbox-marker-color: #778e55 !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: #6a6a6a !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #1d1d1d !important;
  --code-border-color: #9d9d9d !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #6a6a6a !important;
  --code-function: #7fbbb8 !important;
  --code-important: #7babd4 !important;
  --code-keyword: #9b7ad1 !important;
  --code-normal: #707070 !important;
  --code-operator: #9b7ad1 !important;
  --code-property: #7babd4 !important;
  --code-punctuation: #b96b88 !important;
  --code-radius: 0px !important;
  --code-size: 0.8em !important;
  --code-string: #91a86e !important;
  --code-tag: #7fbbb8 !important;
  --code-value: #b96b88 !important;
  --codeFont: JetBrains Mono, monospace !important;
  --collapse-icon-color: #6a6a6a !important;
  --collapse-icon-color-collapsed: #778e55 !important;
  --color-accent: hsl(84, 25%, 66%) !important;
  --color-accent-1: hsl(81, 25.5%, 75.9%) !important;
  --color-accent-2: hsl(79, 26.25%, 85.14%) !important;
  --color-accent-hsl: #778e55 !important;
  --color-blue: #7babd4 !important;
  --color-blue-rgb: rgb(123, 171, 212) !important;
  --color-cyan: #7fbbb8 !important;
  --color-cyan-rgb: rgb(127, 187, 184) !important;
  --color-green: #91a86e !important;
  --color-green-rgb: rgb(145, 168, 110) !important;
  --color-orange: #cf844f !important;
  --color-orange-rgb: rgb(207, 132, 79) !important;
  --color-pink: #b96b88 !important;
  --color-pink-rgb: rgb(185, 107, 136) !important;
  --color-purple: #9b7ad1 !important;
  --color-purple-rgb: rgb(155, 122, 209) !important;
  --color-red: #8e4646 !important;
  --color-red-rgb: rgb(142, 70, 70) !important;
  --color-yellow: #dfbf74 !important;
  --color-yellow-rgb: rgb(223, 191, 116) !important;
  --dark: #9d9d9d !important;
  --dark-grey-1: #1d1d1d !important;
  --dark-grey-2: #1f1f1f !important;
  --dark-grey-3: #151515 !important;
  --dark-white: #9d9d9d !important;
  --darkgray: #9d9d9d !important;
  --dialog-max-width: 85vh !important;
  --divider-color: #9d9d9d !important;
  --divider-color-hover: #778e55 !important;
  --divider-vertical-height: 100% - 40px !important;
  --divider-width-hover: 2px !important;
  --drag-ghost-background: #333333 !important;
  --drag-ghost-text-color: #c4c4c4 !important;
  --embed-block-shadow-hover: 0 0 0 1px #9d9d9d !important;
  --embed-border-bottom: 1px solid #9d9d9d !important;
  --embed-border-left: 1px solid #9d9d9d !important;
  --embed-border-right: 1px solid #9d9d9d !important;
  --embed-border-start: 2px solid #778e55 !important;
  --embed-border-top: 1px solid #9d9d9d !important;
  --embed-padding: 0 0 0 0 !important;
  --file-header-background: #252525 !important;
  --file-header-background-focused: #252525 !important;
  --file-header-font: Noto Sans, sans-serif !important;
  --file-margins: 32px !important;
  --flair-color: #9d9d9d !important;
  --font-default: 'Noto Sans', sans-serif !important;
  --font-interface: Noto Sans, sans-serif !important;
  --font-mermaid: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --font-monospace: JetBrains Mono, monospace !important;
  --font-monospace-default: 'JetBrains Mono', monospace !important;
  --font-print: Noto Sans, sans-serif, Arial' !important;
  --font-text: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --font-text-theme: 'Noto Sans', sans-serif !important;
  --footnote-divider-color: none !important;
  --footnote-divider-color-active: none !important;
  --footnote-id-color: #707070 !important;
  --footnote-id-color-no-occurrences: #6a6a6a !important;
  --footnote-input-background: none !important;
  --footnote-input-background-active: #1d1d1d !important;
  --footnote-radius: 0px !important;
  --gold-01: #f4e8be !important;
  --gold-02: #f0e0a8 !important;
  --gold-03: #ecd993 !important;
  --gold-04: #e8d17d !important;
  --gold-05: #e4c967 !important;
  --gold-06: #e0c252 !important;
  --gold-07: #ddba3c !important;
  --graph-line: #333333 !important;
  --graph-node: #778e55 !important;
  --graph-node-attachment: #707070 !important;
  --graph-node-focused: #778e55 !important;
  --graph-node-tag: #404040 !important;
  --graph-node-unresolved: #c4c4c4 !important;
  --graph-text: #555555 !important;
  --gray: #707070 !important;
  --green-01: #829f55 !important;
  --green-02: #748e4c !important;
  --green-03: #677e43 !important;
  --green-04: #596d3a !important;
  --green-05: #4b5c31 !important;
  --green-06: #3e4c28 !important;
  --green-07: #303b1f !important;
  --green-08: #9db27e !important;
  --green-09: #91a86e !important;
  --green-10: #849e5f !important;
  --green-11: #778e55 !important;
  --green-12: #6a7e4b !important;
  --green-13: #5c6e42 !important;
  --green-14: #4f5e38 !important;
  --h1-color: #778e55 !important;
  --h1-font: 'Noto Sans', sans-serif !important;
  --h1-size: 1.802em !important;
  --h1-weight: 650 !important;
  --h2-color: #e0c252 !important;
  --h2-font: 'Noto Sans', sans-serif !important;
  --h2-size: 1.602em !important;
  --h2-weight: 650 !important;
  --h3-color: #849e5f !important;
  --h3-font: 'Noto Sans', sans-serif !important;
  --h3-size: 1.424em !important;
  --h3-weight: 650 !important;
  --h4-color: #e4c967 !important;
  --h4-font: 'Noto Sans', sans-serif !important;
  --h4-size: 1.266em !important;
  --h4-weight: 650 !important;
  --h5-color: #91a86e !important;
  --h5-font: 'Noto Sans', sans-serif !important;
  --h5-size: 1.125em !important;
  --h5-weight: 650 !important;
  --h6-color: #e8d17d !important;
  --h6-font: 'Noto Sans', sans-serif !important;
  --h6-weight: 650 !important;
  --headerFont: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --heading-formatting: #9d9d9d !important;
  --highlight: #404040 !important;
  --hr-color: #333333 !important;
  --hr-thickness: 1px !important;
  --icon-color: #778e55 !important;
  --icon-color-active: #9db27e !important;
  --icon-color-focused: #9db27e !important;
  --icon-color-hover: #9db27e !important;
  --icon-opacity: 100% !important;
  --icon-opacity-active: 100% !important;
  --icon-opacity-hover: 100% !important;
  --icon-size: 16px !important;
  --icon-stroke: 2px !important;
  --indentation-guide-color: #404040 !important;
  --indentation-guide-color-active: #778e55 !important;
  --indentation-guide-editing-indent: 13.5px !important;
  --inline-title-color: #9d9d9d !important;
  --inline-title-font: 'Noto Sans', sans-serif !important;
  --inline-title-line-height: 1.3 !important;
  --inline-title-size: 2.3em !important;
  --inline-title-weight: 650 !important;
  --input-date-separator: #6a6a6a !important;
  --input-placeholder-color: #6a6a6a !important;
  --input-radius: 6px !important;
  --interactive-accent: #778e55 !important;
  --interactive-accent-hover: #849e5f !important;
  --interactive-accent-hsl: #778e55 !important;
  --italic-color: #ecd993 !important;
  --light: #252525 !important;
  --light-black: #404040 !important;
  --light-gold: #f8f1d8 !important;
  --light-green: #cdd3c3 !important;
  --light-grey: #ececec !important;
  --lightgray: #1d1d1d !important;
  --link-color: #778e55 !important;
  --link-color-hover: #9db27e !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-decoration-thickness: none !important;
  --link-external-color: #6a6a6a !important;
  --link-external-color-hover: #9d9d9d !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #e4c967 !important;
  --link-unresolved-decoration-color: none !important;
  --link-unresolved-decoration-style: none !important;
  --link-unresolved-opacity: 100% !important;
  --list-bullet-size: 0.275em !important;
  --list-indent: 1.55em !important;
  --list-marker-align: left !important;
  --list-marker-color: #6a6a6a !important;
  --list-marker-color-collapsed: #6a6a6a !important;
  --list-marker-color-hover: #707070 !important;
  --list-marker-min-width: 1.55em !important;
  --medium-dark-grey: #252525 !important;
  --medium-grey-1: #707070 !important;
  --medium-grey-2: #6a6a6a !important;
  --medium-grey-3: #555555 !important;
  --medium-grey-4: #404040 !important;
  --medium-grey-5: #333333 !important;
  --medium-grey-6: #202020 !important;
  --medium-light-grey-1: #e1e1e1 !important;
  --medium-light-grey-2: #d7d7d7 !important;
  --medium-light-grey-3: #c4c4c4 !important;
  --menu-background: #1d1d1d !important;
  --menu-border-color: #9d9d9d !important;
  --menu-radius: 0px !important;
  --metadata-background: #1d1d1d !important;
  --metadata-border-color: #9d9d9d !important;
  --metadata-border-radius: 6px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: none !important;
  --metadata-divider-color-focus: none !important;
  --metadata-divider-color-hover: none !important;
  --metadata-divider-width: 0px !important;
  --metadata-gap: 0px !important;
  --metadata-input-background: none !important;
  --metadata-input-background-active: #1d1d1d !important;
  --metadata-input-background-hover: #1d1d1d !important;
  --metadata-input-font: Noto Sans, sans-serif !important;
  --metadata-input-font-size: 12px !important;
  --metadata-input-text-color: #707070 !important;
  --metadata-label-background-active: none !important;
  --metadata-label-background-hover: none !important;
  --metadata-label-font: Noto Sans, sans-serif !important;
  --metadata-label-font-size: 16px !important;
  --metadata-label-font-weight: 500 !important;
  --metadata-label-text-color: #707070 !important;
  --metadata-label-text-color-hover: #9d9d9d !important;
  --metadata-max-width: 700px !important;
  --metadata-padding: 12px !important;
  --metadata-property-background: none !important;
  --metadata-property-background-active: none !important;
  --metadata-property-background-hover: none !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #9d9d9d !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #9d9d9d !important;
  --metadata-property-padding: 6px !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 16px !important;
  --modal-background: #252525 !important;
  --modal-border-color: #9d9d9d !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #6a6a6a !important;
  --nav-collapse-icon-color-collapsed: #6a6a6a !important;
  --nav-heading-color: #9d9d9d !important;
  --nav-heading-color-collapsed: #6a6a6a !important;
  --nav-heading-color-collapsed-hover: #707070 !important;
  --nav-heading-color-hover: #9d9d9d !important;
  --nav-indentation-guide-color: #1d1d1d !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-active: #1d1d1d !important;
  --nav-item-background-hover: #151515 !important;
  --nav-item-background-selected: #1d1d1d !important;
  --nav-item-children-margin-left: 20px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #9d9d9d !important;
  --nav-item-color-active: #778e55 !important;
  --nav-item-color-highlighted: #778e55 !important;
  --nav-item-color-hover: #9d9d9d !important;
  --nav-item-color-selected: #778e55 !important;
  --nav-item-padding: 4px/**/8px/**/4px/**/24px !important;
  --nav-item-parent-padding: 4px/**/8px/**/4px/**/24px !important;
  --nav-item-radius: 0px !important;
  --nav-item-size: 12px !important;
  --nav-item-weight: 400 !important;
  --nav-item-weight-active: 500 !important;
  --nav-item-weight-hover: 500 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #6a6a6a !important;
  --nav-tag-color-active: #707070 !important;
  --nav-tag-color-hover: #707070 !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #252525 !important;
  --pdf-page-background: #252525 !important;
  --pdf-shadow: 0 0 0 1px #9d9d9d !important;
  --pdf-sidebar-background: #252525 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #9d9d9d !important;
  --pill-background: #778e55 !important;
  --pill-background-hover: #9db27e !important;
  --pill-border-color: #778e55 !important;
  --pill-border-color-hover: #9db27e !important;
  --pill-border-width: none !important;
  --pill-color: #252525 !important;
  --pill-color-hover: #252525 !important;
  --pill-color-remove: none !important;
  --pill-color-remove-hover: none !important;
  --pill-decoration: #9d9d9d !important;
  --pill-decoration-hover: #151515 !important;
  --pill-padding-x: 0 !important;
  --pill-padding-y: 0 !important;
  --pill-radius: 6px !important;
  --pill-weight: 400 !important;
  --popover-font-size: 13px !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --popover-width: 300px !important;
  --prompt-background: #252525 !important;
  --prompt-border-color: #9d9d9d !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --ribbon-background: #252525 !important;
  --ribbon-background-collapsed: #252525 !important;
  --scrollbar-active-thumb-bg: #151515 !important;
  --scrollbar-bg: #202020 !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: #1d1d1d !important;
  --search-clear-button-color: #9d9d9d !important;
  --search-icon-color: #778e55 !important;
  --search-result-background: #252525 !important;
  --secondary: #778e55 !important;
  --setting-group-heading-color: #9d9d9d !important;
  --setting-items-background: #1f1f1f !important;
  --setting-items-border-color: #9d9d9d !important;
  --setting-items-radius: 0px !important;
  --slider-s-thumb-size: 13px !important;
  --slider-thumb-border-color: #9d9d9d !important;
  --slider-thumb-height: 16px !important;
  --slider-thumb-radius: 6px !important;
  --slider-thumb-width: 16px !important;
  --slider-track-background: #151515 !important;
  --slider-track-height: 2px !important;
  --status-bar-background: #1d1d1d !important;
  --status-bar-border-color: #9d9d9d !important;
  --status-bar-radius: 6px 0px !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #9d9d9d !important;
  --suggestion-background: #252525 !important;
  --swatch-height: 16px !important;
  --swatch-radius: 6px !important;
  --swatch-shadow: none !important;
  --swatch-width: 16px !important;
  --sync-avatar-color-1: #8e4646 !important;
  --sync-avatar-color-2: #cf844f !important;
  --sync-avatar-color-3: #dfbf74 !important;
  --sync-avatar-color-4: #91a86e !important;
  --sync-avatar-color-5: #7fbbb8 !important;
  --sync-avatar-color-6: #7babd4 !important;
  --sync-avatar-color-7: #9b7ad1 !important;
  --sync-avatar-color-8: #b96b88 !important;
  --tab-background-active: #252525 !important;
  --tab-container-background: #1d1d1d !important;
  --tab-divider-color: #9d9d9d !important;
  --tab-font-size: 12px !important;
  --tab-font-weight: 400 !important;
  --tab-outline-color: #9d9d9d !important;
  --tab-radius: 6px 6px 0px 0px !important;
  --tab-radius-active: 6px 6px 0px 0px !important;
  --tab-stacked-font-size: 12px !important;
  --tab-stacked-shadow: -1px 0 1px 0 #9d9d9d !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #1d1d1d !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1d1d1d, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(84, 25%, 66%) !important;
  --tab-text-color: #9d9d9d !important;
  --tab-text-color-active: #9d9d9d !important;
  --tab-text-color-focused: #9d9d9d !important;
  --tab-text-color-focused-active: #9d9d9d !important;
  --tab-text-color-focused-active-current: #9d9d9d !important;
  --tab-text-color-focused-highlighted: #9d9d9d !important;
  --table-add-button-border-color: #9d9d9d !important;
  --table-background: #252525 !important;
  --table-border-color: #9d9d9d !important;
  --table-column-alt-background: none !important;
  --table-drag-handle-background: none !important;
  --table-drag-handle-background-active: #9d9d9d !important;
  --table-drag-handle-color: #6a6a6a !important;
  --table-drag-handle-color-active: #151515 !important;
  --table-header-background: #1f1f1f !important;
  --table-header-background-hover: #151515 !important;
  --table-header-border-color: #9d9d9d !important;
  --table-header-color: #778e55 !important;
  --table-header-font: 'Noto Sans', sans-serif !important;
  --table-header-weight: 650 !important;
  --table-last-border-width: 1px !important;
  --table-row-alt-background: none !important;
  --table-row-alt-background-hover: #252525 !important;
  --table-row-background-hover: none !important;
  --table-selection: #404040 !important;
  --table-selection-border-color: #9d9d9d !important;
  --table-selection-border-radius: none !important;
  --table-selection-border-width: 1px !important;
  --table-text-color: #9d9d9d !important;
  --table-text-size: 14px !important;
  --tag-background: #778e55 !important;
  --tag-background-hover: #9db27e !important;
  --tag-border-color: #778e55 !important;
  --tag-border-color-hover: #9db27e !important;
  --tag-border-width: 2px !important;
  --tag-color: #252525 !important;
  --tag-color-hover: #252525 !important;
  --tag-decoration: #252525 !important;
  --tag-decoration-hover: #252525 !important;
  --tag-padding-x: 2px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 6px !important;
  --tag-size: 12px !important;
  --tag-weight: 400 !important;
  --tertiary: #9db27e !important;
  --text-accent: #778e55 !important;
  --text-accent-hover: #9db27e !important;
  --text-error: #8e4646 !important;
  --text-faint: #6a6a6a !important;
  --text-highlight-bg: #404040 !important;
  --text-muted: #707070 !important;
  --text-normal: #9d9d9d !important;
  --text-on-accent: #151515 !important;
  --text-on-accent-inverted: #9d9d9d !important;
  --text-selection: #404040 !important;
  --text-success: #778e55 !important;
  --text-warning: #8e4646 !important;
  --textHighlight: #404040 !important;
  --titleFont: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --titlebar-background: #252525 !important;
  --titlebar-background-focused: #252525 !important;
  --titlebar-border-color: none !important;
  --titlebar-text-color: #c4c4c4 !important;
  --titlebar-text-color-focused: #9d9d9d !important;
  --titlebar-text-focused: #d7d7d7 !important;
  --titlebar-text-weight: 600 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 6px !important;
  --toggle-s-border-width: 1px !important;
  --toggle-s-thumb-height: 12px !important;
  --toggle-s-thumb-width: 12px !important;
  --toggle-s-width: 24px !important;
  --toggle-thumb-color: #1d1d1d !important;
  --toggle-thumb-height: 16px !important;
  --toggle-thumb-radius: 6px !important;
  --toggle-thumb-width: 16px !important;
  --toggle-width: 32px !important;
  --vault-name-color: #c4c4c4 !important;
  --vault-name-font-size: 12px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #9d9d9d !important;
  --vault-profile-color-hover: #9d9d9d !important;
  --white: #a3a3a3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 29, 29);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(37, 37, 37);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(157, 157, 157);
  color: rgb(119, 142, 85);
  font-weight: 650;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 29, 29);
  border-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(29, 29, 29);
  border-color: rgb(157, 157, 157);
  border-radius: 6px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(119, 142, 85);
  border-radius: 6px;
  color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 29, 29);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 29, 29);
  border-left-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(37, 37, 37);
  color: rgb(157, 157, 157);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(119, 142, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(119, 142, 85) none 0px;
  text-decoration-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(236, 217, 147);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(236, 217, 147) none 0px;
  text-decoration-color: rgb(236, 217, 147);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(236, 217, 147);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(236, 217, 147) none 0px;
  text-decoration-color: rgb(236, 217, 147);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(119, 142, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(119, 142, 85) none 0px;
  text-decoration-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(64, 64, 64);
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(157, 157, 157) none 0px;
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body del {
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(157, 157, 157) none 0px;
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(119, 142, 85);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body p {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration-color: rgb(112, 112, 112);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(106, 106, 106);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(106, 106, 106) none 0px;
  text-decoration-color: rgb(106, 106, 106);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(119, 142, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(119, 142, 85) none 0px;
  text-decoration-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(228, 201, 103);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(228, 201, 103) none 0px;
  text-decoration-color: rgb(228, 201, 103);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body dt {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(106, 106, 106);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body table {
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  width: 201.359px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  color: rgb(119, 142, 85);
  font-weight: 650;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(31, 31, 31);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
  font-family: "??", "??", "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(127, 187, 184);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(127, 187, 184);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(127, 187, 184);
  border-left-color: rgb(127, 187, 184);
  border-right-color: rgb(127, 187, 184);
  border-top-color: rgb(127, 187, 184);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(119, 142, 85);
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(119, 142, 85);
  border-top-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-style: solid;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(119, 142, 85);
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(157, 157, 157);
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im0xNSA5LTYgNiIvPjxwYXRoIGQ9Im05IDkgNiA2Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im0xNSA5LTYgNiIvPjxwYXRoIGQ9Im05IDkgNiA2Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsZXJ0LWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyLjAxIiB5MT0iMTYiIHkyPSIxNiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsZXJ0LWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyLjAxIiB5MT0iMTYiIHkyPSIxNiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlbHAtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik05LjA5IDlhMyAzIDAgMCAxIDUuODMgMWMwIDItMyAzLTMgMyIvPjxwYXRoIGQ9Ik0xMiAxN2guMDEiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlbHAtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik05LjA5IDlhMyAzIDAgMCAxIDUuODMgMWMwIDItMyAzLTMgMyIvPjxwYXRoIGQ9Ik0xMiAxN2guMDEiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXF1b3RlIj48cGF0aCBkPSJNMyAyMWMzIDAgNy0xIDctOFY1YzAtMS4yNS0uNzU2LTIuMDE3LTItMkg0Yy0xLjI1IDAtMiAuNzUtMiAxLjk3MlYxMWMwIDEuMjUuNzUgMiAyIDIgMSAwIDEgMCAxIDF2MWMwIDEtMSAyLTIgMnMtMSAuMDA4LTEgMS4wMzFWMjBjMCAxIDAgMSAxIDF6Ii8+PHBhdGggZD0iTTE1IDIxYzMgMCA3LTEgNy04VjVjMC0xLjI1LS43NTctMi4wMTctMi0yaC00Yy0xLjI1IDAtMiAuNzUtMiAxLjk3MlYxMWMwIDEuMjUuNzUgMiAyIDJoLjc1YzAgMi4yNS4yNSA0LTIuNzUgNHYzYzAgMSAwIDEgMSAxeiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXF1b3RlIj48cGF0aCBkPSJNMyAyMWMzIDAgNy0xIDctOFY1YzAtMS4yNS0uNzU2LTIuMDE3LTItMkg0Yy0xLjI1IDAtMiAuNzUtMiAxLjk3MlYxMWMwIDEuMjUuNzUgMiAyIDIgMSAwIDEgMCAxIDF2MWMwIDEtMSAyLTIgMnMtMSAuMDA4LTEgMS4wMzFWMjBjMCAxIDAgMSAxIDF6Ii8+PHBhdGggZD0iTTE1IDIxYzMgMCA3LTEgNy04VjVjMC0xLjI1LS43NTctMi4wMTctMi0yaC00Yy0xLjI1IDAtMiAuNzUtMiAxLjk3MlYxMWMwIDEuMjUuNzUgMiAyIDJoLjc1YzAgMi4yNS4yNSA0LTIuNzUgNHYzYzAgMSAwIDEgMSAxeiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXIiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiAxNS4wOSA4LjI2IDIyIDkuMjcgMTcgMTQuMTQgMTguMTggMjEuMDIgMTIgMTcuNzcgNS44MiAyMS4wMiA3IDE0LjE0IDIgOS4yNyA4LjkxIDguMjYgMTIgMiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXIiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiAxNS4wOSA4LjI2IDIyIDkuMjcgMTcgMTQuMTQgMTguMTggMjEuMDIgMTIgMTcuNzcgNS44MiAyMS4wMiA3IDE0LjE0IDIgOS4yNyA4LjkxIDguMjYgMTIgMiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1lbGxpcHNpcyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTcgMTJoLjAxIi8+PHBhdGggZD0iTTEyIDEyaC4wMSIvPjxwYXRoIGQ9Ik03IDEyaC4wMSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1lbGxpcHNpcyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTcgMTJoLjAxIi8+PHBhdGggZD0iTTEyIDEyaC4wMSIvPjxwYXRoIGQ9Ik03IDEyaC4wMSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im0xMCA4IDQgNC00IDQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im0xMCA4IDQgNC00IDQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2ttYXJrIj48cGF0aCBkPSJtMTkgMjEtNy00LTcgNFY1YTIgMiAwIDAgMSAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxNnoiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2ttYXJrIj48cGF0aCBkPSJtMTkgMjEtNy00LTcgNFY1YTIgMiAwIDAgMSAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxNnoiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy1kb3duIj48cGF0aCBkPSJNMTcgMTRWMiIvPjxwYXRoIGQ9Ik05IDE4LjEyIDEwIDE0SDQuMTdhMiAyIDAgMCAxLTEuOTItMi41NmwyLjMzLThBMiAyIDAgMCAxIDYuNSAySDIwYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAyaC0yLjc2YTIgMiAwIDAgMC0xLjc5IDEuMTFMMTIgMjJoMGEzLjEzIDMuMTMgMCAwIDEtMy0zLjg4WiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy1kb3duIj48cGF0aCBkPSJNMTcgMTRWMiIvPjxwYXRoIGQ9Ik05IDE4LjEyIDEwIDE0SDQuMTdhMiAyIDAgMCAxLTEuOTItMi41NmwyLjMzLThBMiAyIDAgMCAxIDYuNSAySDIwYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAyaC0yLjc2YTIgMiAwIDAgMC0xLjc5IDEuMTFMMTIgMjJoMGEzLjEzIDMuMTMgMCAwIDEtMy0zLjg4WiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluZm8iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDE2di00Ii8+PHBhdGggZD0iTTEyIDhoLjAxIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluZm8iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDE2di00Ii8+PHBhdGggZD0iTTEyIDhoLjAxIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpZ2h0YnVsYiI+PHBhdGggZD0iTTE1IDE0Yy4yLTEgLjctMS43IDEuNS0yLjUgMS0uOSAxLjUtMi4yIDEuNS0zLjVBNiA2IDAgMCAwIDYgOGMwIDEgLjIgMi4yIDEuNSAzLjUuNy43IDEuMyAxLjUgMS41IDIuNSIvPjxwYXRoIGQ9Ik05IDE4aDYiLz48cGF0aCBkPSJNMTAgMjJoNCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpZ2h0YnVsYiI+PHBhdGggZD0iTTE1IDE0Yy4yLTEgLjctMS43IDEuNS0yLjUgMS0uOSAxLjUtMi4yIDEuNS0zLjVBNiA2IDAgMCAwIDYgOGMwIDEgLjIgMi4yIDEuNSAzLjUuNy43IDEuMyAxLjUgMS41IDIuNSIvPjxwYXRoIGQ9Ik05IDE4aDYiLz48cGF0aCBkPSJNMTAgMjJoNCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpbiI+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSIxNyIgeTI9IjIyIi8+PHBhdGggZD0iTTUgMTdoMTR2LTEuNzZhMiAyIDAgMCAwLTEuMTEtMS43OWwtMS43OC0uOUEyIDIgMCAwIDEgMTUgMTAuNzZWNmgxYTIgMiAwIDAgMCAwLTRIOGEyIDIgMCAwIDAgMCA0aDF2NC43NmEyIDIgMCAwIDEtMS4xMSAxLjc5bC0xLjc4LjlBMiAyIDAgMCAwIDUgMTUuMjRaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpbiI+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSIxNyIgeTI9IjIyIi8+PHBhdGggZD0iTTUgMTdoMTR2LTEuNzZhMiAyIDAgMCAwLTEuMTEtMS43OWwtMS43OC0uOUEyIDIgMCAwIDEgMTUgMTAuNzZWNmgxYTIgMiAwIDAgMCAwLTRIOGEyIDIgMCAwIDAgMCA0aDF2NC43NmEyIDIgMCAwIDEtMS4xMSAxLjc5bC0xLjc4LjlBMiAyIDAgMCAwIDUgMTUuMjRaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cCI+PHBhdGggZD0iTTcgMTB2MTIiLz48cGF0aCBkPSJNMTUgNS44OCAxNCAxMGg1LjgzYTIgMiAwIDAgMSAxLjkyIDIuNTZsLTIuMzMgOEEyIDIgMCAwIDEgMTcuNSAyMkg0YTIgMiAwIDAgMS0yLTJ2LThhMiAyIDAgMCAxIDItMmgyLjc2YTIgMiAwIDAgMCAxLjc5LTEuMTFMMTIgMmgwYTMuMTMgMy4xMyAwIDAgMSAzIDMuODhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cCI+PHBhdGggZD0iTTcgMTB2MTIiLz48cGF0aCBkPSJNMTUgNS44OCAxNCAxMGg1LjgzYTIgMiAwIDAgMSAxLjkyIDIuNTZsLTIuMzMgOEEyIDIgMCAwIDEgMTcuNSAyMkg0YTIgMiAwIDAgMS0yLTJ2LThhMiAyIDAgMCAxIDItMmgyLjc2YTIgMiAwIDAgMCAxLjc5LTEuMTFMMTIgMmgwYTMuMTMgMy4xMyAwIDAgMSAzIDMuODhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1kb2xsYXItc2lnbiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTYgOGgtNmEyIDIgMCAxIDAgMCA0aDRhMiAyIDAgMSAxIDAgNEg4Ii8+PHBhdGggZD0iTTEyIDE4VjYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1kb2xsYXItc2lnbiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTYgOGgtNmEyIDIgMCAxIDAgMCA0aDRhMiAyIDAgMSAxIDAgNEg4Ii8+PHBhdGggZD0iTTEyIDE4VjYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRpbWVyIj48bGluZSB4MT0iMTAiIHgyPSIxNCIgeTE9IjIiIHkyPSIyIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTUiIHkxPSIxNCIgeTI9IjExIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxNCIgcj0iOCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRpbWVyIj48bGluZSB4MT0iMTAiIHgyPSIxNCIgeTE9IjIiIHkyPSIyIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTUiIHkxPSIxNCIgeTI9IjExIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxNCIgcj0iOCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(145, 168, 110);
  border-left-color: rgb(145, 168, 110);
  border-right-color: rgb(145, 168, 110);
  border-top-color: rgb(145, 168, 110);
  color: rgb(145, 168, 110);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(145, 168, 110);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 223, 191, 116;
  background-color: rgba(223, 191, 116, 0.1);
  border-bottom-color: rgb(223, 191, 116);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(223, 191, 116);
  border-left-width: 1px;
  border-right-color: rgb(223, 191, 116);
  border-right-width: 1px;
  border-top-color: rgb(223, 191, 116);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 223, 191, 116;
  background-color: rgba(223, 191, 116, 0.1);
  border-bottom-color: rgb(223, 191, 116);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(223, 191, 116);
  border-left-width: 1px;
  border-right-color: rgb(223, 191, 116);
  border-right-width: 1px;
  border-top-color: rgb(223, 191, 116);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 142, 70, 70;
  background-color: rgba(142, 70, 70, 0.1);
  border-bottom-color: rgb(142, 70, 70);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(142, 70, 70);
  border-left-width: 1px;
  border-right-color: rgb(142, 70, 70);
  border-right-width: 1px;
  border-top-color: rgb(142, 70, 70);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 155, 122, 209;
  background-color: rgba(155, 122, 209, 0.1);
  border-bottom-color: rgb(155, 122, 209);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(155, 122, 209);
  border-left-width: 1px;
  border-right-color: rgb(155, 122, 209);
  border-right-width: 1px;
  border-top-color: rgb(155, 122, 209);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 142, 70, 70;
  background-color: rgba(142, 70, 70, 0.1);
  border-bottom-color: rgb(142, 70, 70);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(142, 70, 70);
  border-left-width: 1px;
  border-right-color: rgb(142, 70, 70);
  border-right-width: 1px;
  border-top-color: rgb(142, 70, 70);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 123, 171, 212;
  background-color: rgba(123, 171, 212, 0.1);
  border-bottom-color: rgb(123, 171, 212);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(123, 171, 212);
  border-left-width: 1px;
  border-right-color: rgb(123, 171, 212);
  border-right-width: 1px;
  border-top-color: rgb(123, 171, 212);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 145, 168, 110;
  background-color: rgba(145, 168, 110, 0.1);
  border-bottom-color: rgb(145, 168, 110);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(145, 168, 110);
  border-left-width: 1px;
  border-right-color: rgb(145, 168, 110);
  border-right-width: 1px;
  border-top-color: rgb(145, 168, 110);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 155, 122, 209;
  background-color: rgba(155, 122, 209, 0.1);
  border-bottom-color: rgb(155, 122, 209);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(155, 122, 209);
  border-left-width: 1px;
  border-right-color: rgb(155, 122, 209);
  border-right-width: 1px;
  border-top-color: rgb(155, 122, 209);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 223, 191, 116;
  background-color: rgba(223, 191, 116, 0.1);
  border-bottom-color: rgb(223, 191, 116);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(223, 191, 116);
  border-left-width: 1px;
  border-right-color: rgb(223, 191, 116);
  border-right-width: 1px;
  border-top-color: rgb(223, 191, 116);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 145, 168, 110;
  background-color: rgba(145, 168, 110, 0.1);
  border-bottom-color: rgb(145, 168, 110);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(145, 168, 110);
  border-left-width: 1px;
  border-right-color: rgb(145, 168, 110);
  border-right-width: 1px;
  border-top-color: rgb(145, 168, 110);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 155, 122, 209;
  background-color: rgba(155, 122, 209, 0.1);
  border-bottom-color: rgb(155, 122, 209);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(155, 122, 209);
  border-left-width: 1px;
  border-right-color: rgb(155, 122, 209);
  border-right-width: 1px;
  border-top-color: rgb(155, 122, 209);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 123, 171, 212;
  background-color: rgba(123, 171, 212, 0.1);
  border-bottom-color: rgb(123, 171, 212);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(123, 171, 212);
  border-left-width: 1px;
  border-right-color: rgb(123, 171, 212);
  border-right-width: 1px;
  border-top-color: rgb(123, 171, 212);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 142, 70, 70;
  background-color: rgba(142, 70, 70, 0.1);
  border-bottom-color: rgb(142, 70, 70);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(142, 70, 70);
  border-left-width: 1px;
  border-right-color: rgb(142, 70, 70);
  border-right-width: 1px;
  border-top-color: rgb(142, 70, 70);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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

html[saved-theme="dark"] body .callout[data-callout="sparkle"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z'/%3E%3Cpath d='M20 2v4'/%3E%3Cpath d='M22 4h-4'/%3E%3Ccircle cx='4' cy='20' r='2'/%3E%3C/svg%3E");
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
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(157, 157, 157);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(157, 157, 157) none 0px;
  text-decoration-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 29, 29);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(119, 142, 85);
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(119, 142, 85);
  border-left-width: 2px;
  border-right-color: rgb(119, 142, 85);
  border-right-width: 2px;
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body h1 {
  color: rgb(119, 142, 85);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(224, 194, 82);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(157, 157, 157);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(132, 158, 95);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(228, 201, 103);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(145, 168, 110);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(232, 209, 125);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 145, 168, 110;
  border-bottom-color: rgb(145, 168, 110);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(145, 168, 110);
  border-left-width: 1px;
  border-right-color: rgb(145, 168, 110);
  border-right-width: 1px;
  border-top-color: rgb(145, 168, 110);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  padding-left: 12px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(37, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 37);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(29, 29, 29);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(157, 157, 157);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(119, 142, 85);
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 142, 85);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-right-radius: 6px;
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 6px;
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(157, 157, 157);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 142, 85);
  border-right-color: rgb(119, 142, 85);
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 142, 85);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(119, 142, 85);
  stroke: rgb(119, 142, 85);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(106, 106, 106);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(157, 157, 157);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(157, 157, 157);
  border-left-width: 1px;
  border-right-color: rgb(157, 157, 157);
  border-right-width: 1px;
  border-top-color: rgb(157, 157, 157);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  color: rgb(112, 112, 112);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(29, 29, 29);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(157, 157, 157);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(29, 29, 29);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
  font-family: "??", "??", "JetBrains Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(157, 157, 157);
  border-left-color: rgb(157, 157, 157);
  border-right-color: rgb(157, 157, 157);
  border-top-color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body sub {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body summary {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body sup {
  color: rgb(157, 157, 157);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(119, 142, 85);
  border-bottom-color: rgb(119, 142, 85);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(119, 142, 85);
  border-left-width: 2px;
  border-right-color: rgb(119, 142, 85);
  border-right-width: 2px;
  border-top-color: rgb(119, 142, 85);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(37, 37, 37);
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: 33% !important;
  --accent-h: 84 !important;
  --accent-s: 31% !important;
  --background-modifier-active-hover: ((#4b5c31), 0.15) !important;
  --background-modifier-border: #404040 !important;
  --background-modifier-border-focus: #404040 !important;
  --background-modifier-border-hover: #404040 !important;
  --background-modifier-error: #802020 !important;
  --background-modifier-error-hover: #802020 !important;
  --background-modifier-error-rgb: rgb(128, 32, 32) !important;
  --background-modifier-form-field: #ececec !important;
  --background-modifier-form-field-hover: #ececec !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-modifier-message: #a3a3a3 !important;
  --background-modifier-success: #596d3a !important;
  --background-modifier-success-rgb: rgb(89, 109, 58) !important;
  --background-primary: #ececec !important;
  --background-primary-alt: #d7d7d7 !important;
  --background-secondary: #e1e1e1 !important;
  --background-secondary-alt: #c4c4c4 !important;
  --bases-cards-background: #ececec !important;
  --bases-cards-cover-background: #d7d7d7 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #404040 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #404040 !important;
  --bases-embed-border-color: #404040 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #555555 !important;
  --bases-table-border-color: #404040 !important;
  --bases-table-cell-background-active: #ececec !important;
  --bases-table-cell-background-disabled: #d7d7d7 !important;
  --bases-table-cell-background-selected: #cdd3c3 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #404040 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #596d3a !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #d7d7d7 !important;
  --bases-table-header-background: #ececec !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: #555555 !important;
  --bases-table-row-background-hover: none !important;
  --bases-table-summary-background: #ececec !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --black: #202020 !important;
  --blockquote-background-color: none !important;
  --blockquote-border-color: #596d3a !important;
  --blockquote-color: #555555 !important;
  --blur-background: color-mix(in srgb, #ececec 65%, transparent) linear-gradient(#ececec, color-mix(in srgb, #ececec 65%, transparent)) !important;
  --bodyFont: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --bold-color: #596d3a !important;
  --bold-weight: 600 !important;
  --button-radius: 6px !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 100%;
  --callout-border-width: 1px;
  --callout-bug: 211, 152, 12;
  --callout-content-background: normal;
  --callout-content-padding: 0p;
  --callout-default: 89, 109, 58;
  --callout-error: 128, 32, 32;
  --callout-example: 69, 44, 108;
  --callout-fail: 128, 32, 32;
  --callout-important: 89, 109, 58;
  --callout-info: 49, 103, 147;
  --callout-padding: 12px;
  --callout-question: 69, 44, 108;
  --callout-quote: 211, 152, 12;
  --callout-radius: 6px;
  --callout-success: 89, 109, 58;
  --callout-summary: 211, 152, 12;
  --callout-tip: 69, 44, 108;
  --callout-title-size: 18px;
  --callout-todo: 49, 103, 147;
  --callout-warning: 128, 32, 32;
  --canvas-background: #ececec !important;
  --canvas-card-label-color: #6a6a6a !important;
  --canvas-color-1: rgb(128, 32, 32) !important;
  --canvas-color-2: rgb(207, 94, 14) !important;
  --canvas-color-3: rgb(211, 152, 12) !important;
  --canvas-color-4: rgb(89, 109, 58) !important;
  --canvas-color-5: rgb(43, 139, 135) !important;
  --canvas-color-6: rgb(69, 44, 108) !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #d7d7d7 !important;
  --caret-color: #404040 !important;
  --checkbox-border-color: #596d3a !important;
  --checkbox-border-color-hover: #596d3a !important;
  --checkbox-color: none !important;
  --checkbox-color-hover: #d7d7d7 !important;
  --checkbox-marker-color: #596d3a !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: #6a6a6a !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #e1e1e1 !important;
  --code-border-color: #404040 !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: #6a6a6a !important;
  --code-function: #2b8b87 !important;
  --code-important: #316793 !important;
  --code-keyword: #452c6c !important;
  --code-normal: #555555 !important;
  --code-operator: #452c6c !important;
  --code-property: #316793 !important;
  --code-punctuation: #c62f46 !important;
  --code-radius: 0px !important;
  --code-size: 0.8em !important;
  --code-string: #596d3a !important;
  --code-tag: #2b8b87 !important;
  --code-value: #c62f46 !important;
  --codeFont: JetBrains Mono, monospace !important;
  --collapse-icon-color: #6a6a6a !important;
  --collapse-icon-color-collapsed: #596d3a !important;
  --color-accent: hsl(84, 31%, 66%) !important;
  --color-accent-1: hsl(83, 31.31%, 70.95%) !important;
  --color-accent-2: hsl(81, 31.62%, 75.9%) !important;
  --color-accent-hsl: #596d3a !important;
  --color-blue: #316793 !important;
  --color-blue-rgb: rgb(49, 103, 147) !important;
  --color-cyan: #2b8b87 !important;
  --color-cyan-rgb: rgb(43, 139, 135) !important;
  --color-green: #596d3a !important;
  --color-green-rgb: rgb(89, 109, 58) !important;
  --color-orange: #cf5e0e !important;
  --color-orange-rgb: rgb(207, 94, 14) !important;
  --color-pink: #c62f46 !important;
  --color-pink-rgb: rgb(198, 47, 70) !important;
  --color-purple: #452c6c !important;
  --color-purple-rgb: rgb(69, 44, 108) !important;
  --color-red: #802020 !important;
  --color-red-rgb: rgb(128, 32, 32) !important;
  --color-yellow: #d3980c !important;
  --color-yellow-rgb: rgb(211, 152, 12) !important;
  --dark: #404040 !important;
  --dark-grey-1: #1d1d1d !important;
  --dark-grey-2: #1f1f1f !important;
  --dark-grey-3: #151515 !important;
  --dark-white: #9d9d9d !important;
  --darkgray: #404040 !important;
  --dialog-max-width: 85vh !important;
  --divider-color: #404040 !important;
  --divider-color-hover: #596d3a !important;
  --divider-vertical-height: 100% - 40px !important;
  --divider-width-hover: 2px !important;
  --drag-ghost-background: #555555 !important;
  --drag-ghost-text-color: #ececec !important;
  --dropdown-background: #e1e1e1 !important;
  --dropdown-background-hover: #c4c4c4 !important;
  --embed-block-shadow-hover: 0 0 0 1px #404040 !important;
  --embed-border-bottom: 1px solid #404040 !important;
  --embed-border-left: 1px solid #404040 !important;
  --embed-border-right: 1px solid #404040 !important;
  --embed-border-start: 2px solid #596d3a !important;
  --embed-border-top: 1px solid #404040 !important;
  --embed-padding: 0 0 0 0 !important;
  --file-header-background: #ececec !important;
  --file-header-background-focused: #ececec !important;
  --file-header-font: Noto Sans, sans-serif !important;
  --file-margins: 32px !important;
  --flair-background: #e1e1e1 !important;
  --flair-color: #404040 !important;
  --font-default: 'Noto Sans', sans-serif !important;
  --font-interface: Noto Sans, sans-serif !important;
  --font-mermaid: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --font-monospace: JetBrains Mono, monospace !important;
  --font-monospace-default: 'JetBrains Mono', monospace !important;
  --font-print: Noto Sans, sans-serif, Arial' !important;
  --font-text: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --font-text-theme: 'Noto Sans', sans-serif !important;
  --footnote-divider-color: none !important;
  --footnote-divider-color-active: none !important;
  --footnote-id-color: #555555 !important;
  --footnote-id-color-no-occurrences: #6a6a6a !important;
  --footnote-input-background: none !important;
  --footnote-input-background-active: #e1e1e1 !important;
  --footnote-radius: 0px !important;
  --gold-01: #f4e8be !important;
  --gold-02: #f0e0a8 !important;
  --gold-03: #ecd993 !important;
  --gold-04: #e8d17d !important;
  --gold-05: #e4c967 !important;
  --gold-06: #e0c252 !important;
  --gold-07: #ddba3c !important;
  --graph-line: #c4c4c4 !important;
  --graph-node: #596d3a !important;
  --graph-node-attachment: #6a6a6a !important;
  --graph-node-focused: #596d3a !important;
  --graph-node-tag: #707070 !important;
  --graph-node-unresolved: #151515 !important;
  --graph-text: #555555 !important;
  --gray: #555555 !important;
  --green-01: #829f55 !important;
  --green-02: #748e4c !important;
  --green-03: #677e43 !important;
  --green-04: #596d3a !important;
  --green-05: #4b5c31 !important;
  --green-06: #3e4c28 !important;
  --green-07: #303b1f !important;
  --green-08: #9db27e !important;
  --green-09: #91a86e !important;
  --green-10: #849e5f !important;
  --green-11: #778e55 !important;
  --green-12: #6a7e4b !important;
  --green-13: #5c6e42 !important;
  --green-14: #4f5e38 !important;
  --h1-color: #596d3a !important;
  --h1-font: 'Noto Sans', sans-serif !important;
  --h1-size: 1.802em !important;
  --h1-weight: 650 !important;
  --h2-color: #404040 !important;
  --h2-font: 'Noto Sans', sans-serif !important;
  --h2-size: 1.602em !important;
  --h2-weight: 650 !important;
  --h3-color: #4b5c31 !important;
  --h3-font: 'Noto Sans', sans-serif !important;
  --h3-size: 1.424em !important;
  --h3-weight: 650 !important;
  --h4-color: #333333 !important;
  --h4-font: 'Noto Sans', sans-serif !important;
  --h4-size: 1.266em !important;
  --h4-weight: 650 !important;
  --h5-color: #3e4c28 !important;
  --h5-font: 'Noto Sans', sans-serif !important;
  --h5-size: 1.125em !important;
  --h5-weight: 650 !important;
  --h6-color: #202020 !important;
  --h6-font: 'Noto Sans', sans-serif !important;
  --h6-weight: 650 !important;
  --headerFont: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --heading-formatting: #404040 !important;
  --highlight: #cdd3c3 !important;
  --hr-color: #c4c4c4 !important;
  --hr-thickness: 1px !important;
  --icon-color: #596d3a !important;
  --icon-color-active: #303b1f !important;
  --icon-color-focused: #303b1f !important;
  --icon-color-hover: #303b1f !important;
  --icon-opacity: 100% !important;
  --icon-opacity-active: 100% !important;
  --icon-opacity-hover: 100% !important;
  --icon-size: 16px !important;
  --icon-stroke: 2px !important;
  --indentation-guide-color: #c4c4c4 !important;
  --indentation-guide-color-active: #596d3a !important;
  --indentation-guide-editing-indent: 13.5px !important;
  --inline-title-color: #404040 !important;
  --inline-title-font: 'Noto Sans', sans-serif !important;
  --inline-title-line-height: 1.3 !important;
  --inline-title-size: 2.3em !important;
  --inline-title-weight: 650 !important;
  --input-date-separator: #6a6a6a !important;
  --input-placeholder-color: #6a6a6a !important;
  --input-radius: 6px !important;
  --interactive-accent: #596d3a !important;
  --interactive-accent-hover: #4b5c31 !important;
  --interactive-accent-hsl: #596d3a !important;
  --interactive-hover: #c4c4c4 !important;
  --interactive-normal: #e1e1e1 !important;
  --italic-color: #6a6a6a !important;
  --light: #ececec !important;
  --light-black: #404040 !important;
  --light-gold: #f8f1d8 !important;
  --light-green: #cdd3c3 !important;
  --light-grey: #ececec !important;
  --lightgray: #e1e1e1 !important;
  --link-color: #596d3a !important;
  --link-color-hover: #303b1f !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-decoration-thickness: none !important;
  --link-external-color: #6a6a6a !important;
  --link-external-color-hover: #404040 !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #3e4c28 !important;
  --link-unresolved-decoration-color: none !important;
  --link-unresolved-decoration-style: none !important;
  --link-unresolved-opacity: 100% !important;
  --list-bullet-size: 0.275em !important;
  --list-indent: 1.55em !important;
  --list-marker-align: left !important;
  --list-marker-color: #6a6a6a !important;
  --list-marker-color-collapsed: #6a6a6a !important;
  --list-marker-color-hover: #555555 !important;
  --list-marker-min-width: 1.55em !important;
  --medium-dark-grey: #252525 !important;
  --medium-grey-1: #707070 !important;
  --medium-grey-2: #6a6a6a !important;
  --medium-grey-3: #555555 !important;
  --medium-grey-4: #404040 !important;
  --medium-grey-5: #333333 !important;
  --medium-grey-6: #202020 !important;
  --medium-light-grey-1: #e1e1e1 !important;
  --medium-light-grey-2: #d7d7d7 !important;
  --medium-light-grey-3: #c4c4c4 !important;
  --menu-background: #e1e1e1 !important;
  --menu-border-color: #404040 !important;
  --menu-radius: 0px !important;
  --metadata-background: #e1e1e1 !important;
  --metadata-border-color: #404040 !important;
  --metadata-border-radius: 6px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: none !important;
  --metadata-divider-color-focus: none !important;
  --metadata-divider-color-hover: none !important;
  --metadata-divider-width: 0px !important;
  --metadata-gap: 0px !important;
  --metadata-input-background: none !important;
  --metadata-input-background-active: #e1e1e1 !important;
  --metadata-input-background-hover: #e1e1e1 !important;
  --metadata-input-font: Noto Sans, sans-serif !important;
  --metadata-input-font-size: 12px !important;
  --metadata-input-text-color: #555555 !important;
  --metadata-label-background-active: none !important;
  --metadata-label-background-hover: none !important;
  --metadata-label-font: Noto Sans, sans-serif !important;
  --metadata-label-font-size: 16px !important;
  --metadata-label-font-weight: 500 !important;
  --metadata-label-text-color: #555555 !important;
  --metadata-label-text-color-hover: #404040 !important;
  --metadata-max-width: 700px !important;
  --metadata-padding: 12px !important;
  --metadata-property-background: none !important;
  --metadata-property-background-active: none !important;
  --metadata-property-background-hover: none !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #404040 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #404040 !important;
  --metadata-property-padding: 6px !important;
  --metadata-sidebar-input-font-size: 12px !important;
  --metadata-sidebar-label-font-size: 16px !important;
  --modal-background: #ececec !important;
  --modal-border-color: #404040 !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #6a6a6a !important;
  --nav-collapse-icon-color-collapsed: #6a6a6a !important;
  --nav-heading-color: #404040 !important;
  --nav-heading-color-collapsed: #6a6a6a !important;
  --nav-heading-color-collapsed-hover: #555555 !important;
  --nav-heading-color-hover: #404040 !important;
  --nav-indentation-guide-color: #e1e1e1 !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-active: #e1e1e1 !important;
  --nav-item-background-hover: #c4c4c4 !important;
  --nav-item-background-selected: #e1e1e1 !important;
  --nav-item-children-margin-left: 20px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #404040 !important;
  --nav-item-color-active: #596d3a !important;
  --nav-item-color-highlighted: #596d3a !important;
  --nav-item-color-hover: #404040 !important;
  --nav-item-color-selected: #596d3a !important;
  --nav-item-padding: 4px/**/8px/**/4px/**/24px !important;
  --nav-item-parent-padding: 4px/**/8px/**/4px/**/24px !important;
  --nav-item-radius: 0px !important;
  --nav-item-size: 12px !important;
  --nav-item-weight: 400 !important;
  --nav-item-weight-active: 500 !important;
  --nav-item-weight-hover: 500 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #6a6a6a !important;
  --nav-tag-color-active: #555555 !important;
  --nav-tag-color-hover: #555555 !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #ececec !important;
  --pdf-page-background: #ececec !important;
  --pdf-sidebar-background: #ececec !important;
  --pill-background: #596d3a !important;
  --pill-background-hover: #3e4c28 !important;
  --pill-border-color: #596d3a !important;
  --pill-border-color-hover: #3e4c28 !important;
  --pill-border-width: none !important;
  --pill-color: #ececec !important;
  --pill-color-hover: #ececec !important;
  --pill-color-remove: none !important;
  --pill-color-remove-hover: none !important;
  --pill-decoration: #9d9d9d !important;
  --pill-decoration-hover: #151515 !important;
  --pill-padding-x: 0 !important;
  --pill-padding-y: 0 !important;
  --pill-radius: 6px !important;
  --pill-weight: 400 !important;
  --popover-font-size: 13px !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --popover-width: 300px !important;
  --prompt-background: #ececec !important;
  --prompt-border-color: #404040 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #ececec 65%, transparent) linear-gradient(#ececec, color-mix(in srgb, #ececec 65%, transparent)) !important;
  --ribbon-background: #ececec !important;
  --ribbon-background-collapsed: #ececec !important;
  --scrollbar-active-thumb-bg: #c4c4c4 !important;
  --scrollbar-bg: #a3a3a3 !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: #e1e1e1 !important;
  --search-clear-button-color: #404040 !important;
  --search-icon-color: #596d3a !important;
  --search-result-background: #ececec !important;
  --secondary: #596d3a !important;
  --setting-group-heading-color: #404040 !important;
  --setting-items-background: #d7d7d7 !important;
  --setting-items-border-color: #404040 !important;
  --setting-items-radius: 0px !important;
  --slider-s-thumb-size: 13px !important;
  --slider-thumb-border-color: #404040 !important;
  --slider-thumb-height: 16px !important;
  --slider-thumb-radius: 6px !important;
  --slider-thumb-width: 16px !important;
  --slider-track-background: #c4c4c4 !important;
  --slider-track-height: 2px !important;
  --status-bar-background: #e1e1e1 !important;
  --status-bar-border-color: #404040 !important;
  --status-bar-radius: 6px 0px !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #404040 !important;
  --suggestion-background: #ececec !important;
  --swatch-height: 16px !important;
  --swatch-radius: 6px !important;
  --swatch-shadow: none !important;
  --swatch-width: 16px !important;
  --sync-avatar-color-1: #802020 !important;
  --sync-avatar-color-2: #cf5e0e !important;
  --sync-avatar-color-3: #d3980c !important;
  --sync-avatar-color-4: #596d3a !important;
  --sync-avatar-color-5: #2b8b87 !important;
  --sync-avatar-color-6: #316793 !important;
  --sync-avatar-color-7: #452c6c !important;
  --sync-avatar-color-8: #c62f46 !important;
  --tab-background-active: #ececec !important;
  --tab-container-background: #e1e1e1 !important;
  --tab-divider-color: #404040 !important;
  --tab-font-size: 12px !important;
  --tab-font-weight: 400 !important;
  --tab-outline-color: #404040 !important;
  --tab-radius: 6px 6px 0px 0px !important;
  --tab-radius-active: 6px 6px 0px 0px !important;
  --tab-stacked-font-size: 12px !important;
  --tab-stacked-shadow: -1px 0 1px 0 #404040 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #e1e1e1 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e1e1e1, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(84, 31%, 66%) !important;
  --tab-text-color: #404040 !important;
  --tab-text-color-active: #404040 !important;
  --tab-text-color-focused: #404040 !important;
  --tab-text-color-focused-active: #404040 !important;
  --tab-text-color-focused-active-current: #404040 !important;
  --tab-text-color-focused-highlighted: #404040 !important;
  --table-add-button-border-color: #404040 !important;
  --table-background: #ececec !important;
  --table-border-color: #404040 !important;
  --table-column-alt-background: none !important;
  --table-drag-handle-background: none !important;
  --table-drag-handle-background-active: #404040 !important;
  --table-drag-handle-color: #6a6a6a !important;
  --table-drag-handle-color-active: #ececec !important;
  --table-header-background: #d7d7d7 !important;
  --table-header-background-hover: #c4c4c4 !important;
  --table-header-border-color: #404040 !important;
  --table-header-color: #596d3a !important;
  --table-header-font: 'Noto Sans', sans-serif !important;
  --table-header-weight: 650 !important;
  --table-last-border-width: 1px !important;
  --table-row-alt-background: none !important;
  --table-row-alt-background-hover: #ececec !important;
  --table-row-background-hover: none !important;
  --table-selection: #cdd3c3 !important;
  --table-selection-border-color: #404040 !important;
  --table-selection-border-radius: none !important;
  --table-selection-border-width: 1px !important;
  --table-text-color: #404040 !important;
  --table-text-size: 14px !important;
  --tag-background: #596d3a !important;
  --tag-background-hover: #303b1f !important;
  --tag-border-color: #596d3a !important;
  --tag-border-color-hover: #303b1f !important;
  --tag-border-width: 2px !important;
  --tag-color: #ececec !important;
  --tag-color-hover: #ececec !important;
  --tag-decoration: #ececec !important;
  --tag-decoration-hover: #ececec !important;
  --tag-padding-x: 2px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 6px !important;
  --tag-size: 12px !important;
  --tag-weight: 400 !important;
  --tertiary: #303b1f !important;
  --text-accent: #596d3a !important;
  --text-accent-hover: #303b1f !important;
  --text-error: #802020 !important;
  --text-faint: #6a6a6a !important;
  --text-highlight-bg: #cdd3c3 !important;
  --text-muted: #555555 !important;
  --text-normal: #404040 !important;
  --text-on-accent: #ececec !important;
  --text-on-accent-inverted: #404040 !important;
  --text-selection: #d7d7d7 !important;
  --text-success: #596d3a !important;
  --text-warning: #802020 !important;
  --textHighlight: #cdd3c3 !important;
  --titleFont: Noto Sans, sans-serif, Noto Sans, sans-serif !important;
  --titlebar-background: #ececec !important;
  --titlebar-background-focused: #ececec !important;
  --titlebar-border-color: none !important;
  --titlebar-text-color: #6a6a6a !important;
  --titlebar-text-color-focused: #404040 !important;
  --titlebar-text-focused: #555555 !important;
  --titlebar-text-weight: 600 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 6px !important;
  --toggle-s-border-width: 1px !important;
  --toggle-s-thumb-height: 12px !important;
  --toggle-s-thumb-width: 12px !important;
  --toggle-s-width: 24px !important;
  --toggle-thumb-color: #e1e1e1 !important;
  --toggle-thumb-height: 16px !important;
  --toggle-thumb-radius: 6px !important;
  --toggle-thumb-width: 16px !important;
  --toggle-width: 32px !important;
  --vault-name-color: #151515 !important;
  --vault-name-font-size: 12px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #404040 !important;
  --vault-profile-color-hover: #404040 !important;
  --white: #a3a3a3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(225, 225, 225);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(236, 236, 236);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(64, 64, 64);
  color: rgb(89, 109, 58);
  font-weight: 650;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(236, 236, 236);
  border-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(225, 225, 225);
  border-color: rgb(64, 64, 64);
  border-radius: 6px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(89, 109, 58);
  border-radius: 6px;
  color: rgb(236, 236, 236);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(225, 225, 225);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(225, 225, 225);
  border-left-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(236, 236, 236);
  color: rgb(64, 64, 64);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(89, 109, 58);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(89, 109, 58) none 0px;
  text-decoration-color: rgb(89, 109, 58);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(106, 106, 106);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(106, 106, 106) none 0px;
  text-decoration-color: rgb(106, 106, 106);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(106, 106, 106);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(106, 106, 106) none 0px;
  text-decoration-color: rgb(106, 106, 106);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(89, 109, 58);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(89, 109, 58) none 0px;
  text-decoration-color: rgb(89, 109, 58);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(205, 211, 195);
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body del {
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(89, 109, 58);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(89, 109, 58);
}

html[saved-theme="light"] body p {
  color: rgb(85, 85, 85);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(106, 106, 106);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(106, 106, 106) none 0px;
  text-decoration-color: rgb(106, 106, 106);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 109, 58);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(89, 109, 58) none 0px;
  text-decoration-color: rgb(89, 109, 58);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(62, 76, 40);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(62, 76, 40) none 0px;
  text-decoration-color: rgb(62, 76, 40);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body dt {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ol > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(106, 106, 106);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body table {
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  width: 201.359px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(236, 236, 236);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(89, 109, 58);
  font-weight: 650;
}

html[saved-theme="light"] body tr {
  background-color: rgb(215, 215, 215);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(85, 85, 85);
  font-family: "??", "??", "JetBrains Mono", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(43, 139, 135);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(43, 139, 135);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(43, 139, 135);
  border-left-color: rgb(43, 139, 135);
  border-right-color: rgb(43, 139, 135);
  border-top-color: rgb(43, 139, 135);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body figcaption {
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(89, 109, 58);
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(215, 215, 215);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-style: solid;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im0xNSA5LTYgNiIvPjxwYXRoIGQ9Im05IDkgNiA2Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im0xNSA5LTYgNiIvPjxwYXRoIGQ9Im05IDkgNiA2Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsZXJ0LWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyLjAxIiB5MT0iMTYiIHkyPSIxNiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsZXJ0LWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyLjAxIiB5MT0iMTYiIHkyPSIxNiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlbHAtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik05LjA5IDlhMyAzIDAgMCAxIDUuODMgMWMwIDItMyAzLTMgMyIvPjxwYXRoIGQ9Ik0xMiAxN2guMDEiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlbHAtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik05LjA5IDlhMyAzIDAgMCAxIDUuODMgMWMwIDItMyAzLTMgMyIvPjxwYXRoIGQ9Ik0xMiAxN2guMDEiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXF1b3RlIj48cGF0aCBkPSJNMyAyMWMzIDAgNy0xIDctOFY1YzAtMS4yNS0uNzU2LTIuMDE3LTItMkg0Yy0xLjI1IDAtMiAuNzUtMiAxLjk3MlYxMWMwIDEuMjUuNzUgMiAyIDIgMSAwIDEgMCAxIDF2MWMwIDEtMSAyLTIgMnMtMSAuMDA4LTEgMS4wMzFWMjBjMCAxIDAgMSAxIDF6Ii8+PHBhdGggZD0iTTE1IDIxYzMgMCA3LTEgNy04VjVjMC0xLjI1LS43NTctMi4wMTctMi0yaC00Yy0xLjI1IDAtMiAuNzUtMiAxLjk3MlYxMWMwIDEuMjUuNzUgMiAyIDJoLjc1YzAgMi4yNS4yNSA0LTIuNzUgNHYzYzAgMSAwIDEgMSAxeiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXF1b3RlIj48cGF0aCBkPSJNMyAyMWMzIDAgNy0xIDctOFY1YzAtMS4yNS0uNzU2LTIuMDE3LTItMkg0Yy0xLjI1IDAtMiAuNzUtMiAxLjk3MlYxMWMwIDEuMjUuNzUgMiAyIDIgMSAwIDEgMCAxIDF2MWMwIDEtMSAyLTIgMnMtMSAuMDA4LTEgMS4wMzFWMjBjMCAxIDAgMSAxIDF6Ii8+PHBhdGggZD0iTTE1IDIxYzMgMCA3LTEgNy04VjVjMC0xLjI1LS43NTctMi4wMTctMi0yaC00Yy0xLjI1IDAtMiAuNzUtMiAxLjk3MlYxMWMwIDEuMjUuNzUgMiAyIDJoLjc1YzAgMi4yNS4yNSA0LTIuNzUgNHYzYzAgMSAwIDEgMSAxeiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXIiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiAxNS4wOSA4LjI2IDIyIDkuMjcgMTcgMTQuMTQgMTguMTggMjEuMDIgMTIgMTcuNzcgNS44MiAyMS4wMiA3IDE0LjE0IDIgOS4yNyA4LjkxIDguMjYgMTIgMiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXIiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiAxNS4wOSA4LjI2IDIyIDkuMjcgMTcgMTQuMTQgMTguMTggMjEuMDIgMTIgMTcuNzcgNS44MiAyMS4wMiA3IDE0LjE0IDIgOS4yNyA4LjkxIDguMjYgMTIgMiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1lbGxpcHNpcyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTcgMTJoLjAxIi8+PHBhdGggZD0iTTEyIDEyaC4wMSIvPjxwYXRoIGQ9Ik03IDEyaC4wMSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1lbGxpcHNpcyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTcgMTJoLjAxIi8+PHBhdGggZD0iTTEyIDEyaC4wMSIvPjxwYXRoIGQ9Ik03IDEyaC4wMSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyIj48cGF0aCBkPSJNOCAydjQiLz48cGF0aCBkPSJNMTYgMnY0Ii8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSI0IiByeD0iMiIvPjxwYXRoIGQ9Ik0zIDEwaDE4Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im0xMCA4IDQgNC00IDQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQtY2lyY2xlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Im0xMCA4IDQgNC00IDQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2ttYXJrIj48cGF0aCBkPSJtMTkgMjEtNy00LTcgNFY1YTIgMiAwIDAgMSAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxNnoiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2ttYXJrIj48cGF0aCBkPSJtMTkgMjEtNy00LTcgNFY1YTIgMiAwIDAgMSAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxNnoiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy1kb3duIj48cGF0aCBkPSJNMTcgMTRWMiIvPjxwYXRoIGQ9Ik05IDE4LjEyIDEwIDE0SDQuMTdhMiAyIDAgMCAxLTEuOTItMi41NmwyLjMzLThBMiAyIDAgMCAxIDYuNSAySDIwYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAyaC0yLjc2YTIgMiAwIDAgMC0xLjc5IDEuMTFMMTIgMjJoMGEzLjEzIDMuMTMgMCAwIDEtMy0zLjg4WiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy1kb3duIj48cGF0aCBkPSJNMTcgMTRWMiIvPjxwYXRoIGQ9Ik05IDE4LjEyIDEwIDE0SDQuMTdhMiAyIDAgMCAxLTEuOTItMi41NmwyLjMzLThBMiAyIDAgMCAxIDYuNSAySDIwYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAyaC0yLjc2YTIgMiAwIDAgMC0xLjc5IDEuMTFMMTIgMjJoMGEzLjEzIDMuMTMgMCAwIDEtMy0zLjg4WiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluZm8iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDE2di00Ii8+PHBhdGggZD0iTTEyIDhoLjAxIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluZm8iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTEyIDE2di00Ii8+PHBhdGggZD0iTTEyIDhoLjAxIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpZ2h0YnVsYiI+PHBhdGggZD0iTTE1IDE0Yy4yLTEgLjctMS43IDEuNS0yLjUgMS0uOSAxLjUtMi4yIDEuNS0zLjVBNiA2IDAgMCAwIDYgOGMwIDEgLjIgMi4yIDEuNSAzLjUuNy43IDEuMyAxLjUgMS41IDIuNSIvPjxwYXRoIGQ9Ik05IDE4aDYiLz48cGF0aCBkPSJNMTAgMjJoNCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpZ2h0YnVsYiI+PHBhdGggZD0iTTE1IDE0Yy4yLTEgLjctMS43IDEuNS0yLjUgMS0uOSAxLjUtMi4yIDEuNS0zLjVBNiA2IDAgMCAwIDYgOGMwIDEgLjIgMi4yIDEuNSAzLjUuNy43IDEuMyAxLjUgMS41IDIuNSIvPjxwYXRoIGQ9Ik05IDE4aDYiLz48cGF0aCBkPSJNMTAgMjJoNCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1hcC1waW4iPjxwYXRoIGQ9Ik0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpbiI+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSIxNyIgeTI9IjIyIi8+PHBhdGggZD0iTTUgMTdoMTR2LTEuNzZhMiAyIDAgMCAwLTEuMTEtMS43OWwtMS43OC0uOUEyIDIgMCAwIDEgMTUgMTAuNzZWNmgxYTIgMiAwIDAgMCAwLTRIOGEyIDIgMCAwIDAgMCA0aDF2NC43NmEyIDIgMCAwIDEtMS4xMSAxLjc5bC0xLjc4LjlBMiAyIDAgMCAwIDUgMTUuMjRaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpbiI+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSIxNyIgeTI9IjIyIi8+PHBhdGggZD0iTTUgMTdoMTR2LTEuNzZhMiAyIDAgMCAwLTEuMTEtMS43OWwtMS43OC0uOUEyIDIgMCAwIDEgMTUgMTAuNzZWNmgxYTIgMiAwIDAgMCAwLTRIOGEyIDIgMCAwIDAgMCA0aDF2NC43NmEyIDIgMCAwIDEtMS4xMSAxLjc5bC0xLjc4LjlBMiAyIDAgMCAwIDUgMTUuMjRaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cCI+PHBhdGggZD0iTTcgMTB2MTIiLz48cGF0aCBkPSJNMTUgNS44OCAxNCAxMGg1LjgzYTIgMiAwIDAgMSAxLjkyIDIuNTZsLTIuMzMgOEEyIDIgMCAwIDEgMTcuNSAyMkg0YTIgMiAwIDAgMS0yLTJ2LThhMiAyIDAgMCAxIDItMmgyLjc2YTIgMiAwIDAgMCAxLjc5LTEuMTFMMTIgMmgwYTMuMTMgMy4xMyAwIDAgMSAzIDMuODhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cCI+PHBhdGggZD0iTTcgMTB2MTIiLz48cGF0aCBkPSJNMTUgNS44OCAxNCAxMGg1LjgzYTIgMiAwIDAgMSAxLjkyIDIuNTZsLTIuMzMgOEEyIDIgMCAwIDEgMTcuNSAyMkg0YTIgMiAwIDAgMS0yLTJ2LThhMiAyIDAgMCAxIDItMmgyLjc2YTIgMiAwIDAgMCAxLjc5LTEuMTFMMTIgMmgwYTMuMTMgMy4xMyAwIDAgMSAzIDMuODhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1kb2xsYXItc2lnbiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTYgOGgtNmEyIDIgMCAxIDAgMCA0aDRhMiAyIDAgMSAxIDAgNEg4Ii8+PHBhdGggZD0iTTEyIDE4VjYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1kb2xsYXItc2lnbiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTYgOGgtNmEyIDIgMCAxIDAgMCA0aDRhMiAyIDAgMSAxIDAgNEg4Ii8+PHBhdGggZD0iTTEyIDE4VjYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRpbWVyIj48bGluZSB4MT0iMTAiIHgyPSIxNCIgeTE9IjIiIHkyPSIyIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTUiIHkxPSIxNCIgeTI9IjExIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxNCIgcj0iOCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRpbWVyIj48bGluZSB4MT0iMTAiIHgyPSIxNCIgeTE9IjIiIHkyPSIyIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTUiIHkxPSIxNCIgeTI9IjExIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxNCIgcj0iOCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 142, 85);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(89, 109, 58);
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
  color: rgb(89, 109, 58);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(89, 109, 58);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 211, 152, 12;
  background-color: rgba(211, 152, 12, 0.1);
  border-bottom-color: rgb(211, 152, 12);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 152, 12);
  border-left-width: 1px;
  border-right-color: rgb(211, 152, 12);
  border-right-width: 1px;
  border-top-color: rgb(211, 152, 12);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 211, 152, 12;
  background-color: rgba(211, 152, 12, 0.1);
  border-bottom-color: rgb(211, 152, 12);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 152, 12);
  border-left-width: 1px;
  border-right-color: rgb(211, 152, 12);
  border-right-width: 1px;
  border-top-color: rgb(211, 152, 12);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 128, 32, 32;
  background-color: rgba(128, 32, 32, 0.1);
  border-bottom-color: rgb(128, 32, 32);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(128, 32, 32);
  border-left-width: 1px;
  border-right-color: rgb(128, 32, 32);
  border-right-width: 1px;
  border-top-color: rgb(128, 32, 32);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 69, 44, 108;
  background-color: rgba(69, 44, 108, 0.1);
  border-bottom-color: rgb(69, 44, 108);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 44, 108);
  border-left-width: 1px;
  border-right-color: rgb(69, 44, 108);
  border-right-width: 1px;
  border-top-color: rgb(69, 44, 108);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 128, 32, 32;
  background-color: rgba(128, 32, 32, 0.1);
  border-bottom-color: rgb(128, 32, 32);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(128, 32, 32);
  border-left-width: 1px;
  border-right-color: rgb(128, 32, 32);
  border-right-width: 1px;
  border-top-color: rgb(128, 32, 32);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 49, 103, 147;
  background-color: rgba(49, 103, 147, 0.1);
  border-bottom-color: rgb(49, 103, 147);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(49, 103, 147);
  border-left-width: 1px;
  border-right-color: rgb(49, 103, 147);
  border-right-width: 1px;
  border-top-color: rgb(49, 103, 147);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 89, 109, 58;
  background-color: rgba(89, 109, 58, 0.1);
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 1px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 1px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 69, 44, 108;
  background-color: rgba(69, 44, 108, 0.1);
  border-bottom-color: rgb(69, 44, 108);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 44, 108);
  border-left-width: 1px;
  border-right-color: rgb(69, 44, 108);
  border-right-width: 1px;
  border-top-color: rgb(69, 44, 108);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 211, 152, 12;
  background-color: rgba(211, 152, 12, 0.1);
  border-bottom-color: rgb(211, 152, 12);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 152, 12);
  border-left-width: 1px;
  border-right-color: rgb(211, 152, 12);
  border-right-width: 1px;
  border-top-color: rgb(211, 152, 12);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 89, 109, 58;
  background-color: rgba(89, 109, 58, 0.1);
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 1px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 1px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 69, 44, 108;
  background-color: rgba(69, 44, 108, 0.1);
  border-bottom-color: rgb(69, 44, 108);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 44, 108);
  border-left-width: 1px;
  border-right-color: rgb(69, 44, 108);
  border-right-width: 1px;
  border-top-color: rgb(69, 44, 108);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 49, 103, 147;
  background-color: rgba(49, 103, 147, 0.1);
  border-bottom-color: rgb(49, 103, 147);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(49, 103, 147);
  border-left-width: 1px;
  border-right-color: rgb(49, 103, 147);
  border-right-width: 1px;
  border-top-color: rgb(49, 103, 147);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 128, 32, 32;
  background-color: rgba(128, 32, 32, 0.1);
  border-bottom-color: rgb(128, 32, 32);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(128, 32, 32);
  border-left-width: 1px;
  border-right-color: rgb(128, 32, 32);
  border-right-width: 1px;
  border-top-color: rgb(128, 32, 32);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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

html[saved-theme="light"] body .callout[data-callout="sparkle"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z'/%3E%3Cpath d='M20 2v4'/%3E%3Cpath d='M22 4h-4'/%3E%3Ccircle cx='4' cy='20' r='2'/%3E%3C/svg%3E");
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
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(64, 64, 64);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(89, 109, 58);
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 2px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 2px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(236, 236, 236);
}

html[saved-theme="light"] body h1 {
  color: rgb(89, 109, 58);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(64, 64, 64);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(64, 64, 64);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(75, 92, 49);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(51, 51, 51);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(62, 76, 40);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(32, 32, 32);
  font-family: "Noto Sans", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 89, 109, 58;
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 1px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 1px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  padding-left: 12px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(236, 236, 236) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 236, 236);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(225, 225, 225);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(64, 64, 64);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(89, 109, 58);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-right-radius: 6px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 6px;
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(64, 64, 64);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(89, 109, 58);
  border-right-color: rgb(89, 109, 58);
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(89, 109, 58);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(89, 109, 58);
  stroke: rgb(89, 109, 58);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(106, 106, 106);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  color: rgb(85, 85, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "??", "Noto Sans", sans-serif, "Noto Sans", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(225, 225, 225);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(64, 64, 64);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
  font-family: "??", "??", "??", "Noto Sans", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(85, 85, 85);
  font-family: "??", "??", "JetBrains Mono", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body sub {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body summary {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body sup {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(89, 109, 58);
  border-bottom-color: rgb(89, 109, 58);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgb(89, 109, 58);
  border-left-width: 2px;
  border-right-color: rgb(89, 109, 58);
  border-right-width: 2px;
  border-top-color: rgb(89, 109, 58);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(236, 236, 236);
}`,
  },
};
