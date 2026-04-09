import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "lemons-theme", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 46deg !important;
  --accent-l: 65% !important;
  --accent-s: 95% !important;
  --background-modifier-active-hover: hsla(46deg,
    95%,
    65%, 0.15) !important;
  --background-modifier-border: #404040 !important;
  --background-modifier-border-focus: #707070 !important;
  --background-modifier-border-hover: #707070 !important;
  --background-modifier-error: #ff6b81 !important;
  --background-modifier-error-hover: #ff6b81 !important;
  --background-modifier-error-rgb: 255,
    107,
    129 !important;
  --background-modifier-form-field: #383838 !important;
  --background-modifier-form-field-hover: #383838 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: #7bed9f !important;
  --background-modifier-success-rgb: 123,
    237,
    159 !important;
  --background-primary: #202020 !important;
  --background-primary-alt: #282828 !important;
  --background-secondary: #303030 !important;
  --background-secondary-alt: #383838 !important;
  --bases-cards-background: #202020 !important;
  --bases-cards-cover-background: #282828 !important;
  --bases-cards-shadow: 0 0 0 1px #404040 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #707070 !important;
  --bases-embed-border-color: #404040 !important;
  --bases-group-heading-property-color: #a0a0a0 !important;
  --bases-table-border-color: #404040 !important;
  --bases-table-cell-background-active: #202020 !important;
  --bases-table-cell-background-disabled: #282828 !important;
  --bases-table-cell-background-selected: hsla(46deg,
    95%,
    65%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #707070 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(46deg, 95%, 65%) !important;
  --bases-table-group-background: #282828 !important;
  --bases-table-header-background: #202020 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #a0a0a0 !important;
  --bases-table-summary-background: #202020 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-background-color: rgb(158, 158, 158, 0.10) !important;
  --blockquote-border-color: hsl(46deg, 95%, 65%) !important;
  --blockquote-border-thickness: 0px !important;
  --blur-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent)) !important;
  --bodyFont: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --callout-bug: 255,
    107,
    129;
  --callout-default: 83,
    82,
    237;
  --callout-error: 255,
    107,
    129;
  --callout-example: 168,
    130,
    255;
  --callout-fail: 255,
    107,
    129;
  --callout-important: 112,
    161,
    255;
  --callout-info: 83,
    82,
    237;
  --callout-question: 255,
    127,
    80;
  --callout-radius: 8px;
  --callout-success: 123,
    237,
    159;
  --callout-summary: 112,
    161,
    255;
  --callout-tip: 112,
    161,
    255;
  --callout-todo: 83,
    82,
    237;
  --callout-warning: 255,
    127,
    80;
  --canvas-background: #202020 !important;
  --canvas-card-label-color: #707070 !important;
  --canvas-color: 80,
    80,
    80 !important;
  --canvas-color-1: 255,
    107,
    129 !important;
  --canvas-color-2: 255,
    127,
    80 !important;
  --canvas-color-3: 251,
    211,
    81 !important;
  --canvas-color-4: 123,
    237,
    159 !important;
  --canvas-color-5: 112,
    161,
    255 !important;
  --canvas-color-6: 168,
    130,
    255 !important;
  --canvas-dot-pattern: #404040 !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #707070 !important;
  --checkbox-border-color-hover: #a0a0a0 !important;
  --checkbox-color: hsl(46deg, 95%, 65%) !important;
  --checkbox-color-hover: hsl(46deg, 95%, 61.2%) !important;
  --checkbox-marker-color: #202020 !important;
  --checklist-done-color: #a0a0a0 !important;
  --code-background: #282828 !important;
  --code-border-color: #404040 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #707070 !important;
  --code-function: hsl(46deg, 95%, 65%) !important;
  --code-important: #ff7f50 !important;
  --code-normal: #ffffff !important;
  --code-operator: #ff6b81 !important;
  --code-property: #70a1ff !important;
  --code-punctuation: #a0a0a0 !important;
  --code-string: #7bed9f !important;
  --code-tag: #ff6b81 !important;
  --codeFont: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --collapse-icon-color: #707070 !important;
  --collapse-icon-color-collapsed: hsl(46deg, 95%, 61.2%) !important;
  --color-accent: hsl(46deg, 95%, 65%) !important;
  --color-accent-1: hsl(46deg, 95%, 61.2%) !important;
  --color-accent-2: hsl(46deg, 95%, 68.8%) !important;
  --color-accent-hsl: 46deg,
    95%,
    65% !important;
  --color-base-00: #202020 !important;
  --color-base-05: #242424 !important;
  --color-base-10: #282828 !important;
  --color-base-100: #ffffff !important;
  --color-base-15: #2b2b2b !important;
  --color-base-20: #303030 !important;
  --color-base-25: #383838 !important;
  --color-base-30: #404040 !important;
  --color-base-35: #484848 !important;
  --color-base-40: #505050 !important;
  --color-base-50: #707070 !important;
  --color-base-60: #909090 !important;
  --color-base-70: #a0a0a0 !important;
  --color-base-80: #c0c0c0 !important;
  --color-base-90: #e0e0e0 !important;
  --color-blue: #5352ed !important;
  --color-blue-rgb: 83,
    82,
    237 !important;
  --color-cyan: #70a1ff !important;
  --color-cyan-rgb: 112,
    161,
    255 !important;
  --color-green: #7bed9f !important;
  --color-green-rgb: 123,
    237,
    159 !important;
  --color-orange: #ff7f50 !important;
  --color-orange-rgb: 255,
    127,
    80 !important;
  --color-pink-rgb: 250,
    153,
    205 !important;
  --color-purple-rgb: 168,
    130,
    255 !important;
  --color-red: #ff6b81 !important;
  --color-red-rgb: 255,
    107,
    129 !important;
  --color-yellow: hsl(46deg, 95%, 65%) !important;
  --color-yellow-rgb: 251,
    211,
    81 !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: #404040 !important;
  --divider-color-hover: hsl(46deg, 95%, 65%) !important;
  --divider-width: 0px !important;
  --dropdown-background: #404040 !important;
  --dropdown-background-hover: #484848 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(46deg, 95%, 65%) !important;
  --embed-border-start: 2px solid hsl(46deg, 95%, 65%) !important;
  --file-header-background: #202020 !important;
  --file-header-background-focused: #202020 !important;
  --file-header-font: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --flair-background: #404040 !important;
  --flair-color: #ffffff !important;
  --font-default: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-interface: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-interface-override: "??" !important;
  --font-interface-theme: "??" !important;
  --font-mermaid: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-monospace: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-monospace-default: Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-monospace-override: "??" !important;
  --font-monospace-theme: "??" !important;
  --font-print: "??", "??", Arial' !important;
  --font-text: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-text-override: "??" !important;
  --font-text-theme: "??" !important;
  --footnote-divider-color: #404040 !important;
  --footnote-id-color: #a0a0a0 !important;
  --footnote-id-color-no-occurrences: #707070 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: #484848 !important;
  --graph-node: #a0a0a0 !important;
  --graph-node-attachment: hsl(46deg, 95%, 65%) !important;
  --graph-node-focused: hsl(46deg, 95%, 61.2%) !important;
  --graph-node-tag: #7bed9f !important;
  --graph-node-unresolved: #707070 !important;
  --graph-text: #ffffff !important;
  --gray: #a0a0a0 !important;
  --headerFont: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --heading-formatting: #707070 !important;
  --highlight: rgba(255, 255, 255, 0.075) !important;
  --hr-color: #404040 !important;
  --icon-color: #a0a0a0 !important;
  --icon-color-active: hsl(46deg, 95%, 61.2%) !important;
  --icon-color-focused: hsl(46deg, 95%, 61.2%) !important;
  --icon-color-hover: hsl(46deg, 95%, 61.2%) !important;
  --indentation-guide-color: rgba(255, 255, 255, 0.12) !important;
  --indentation-guide-color-active: hsl(46deg, 95%, 61.2%) !important;
  --input-date-separator: #707070 !important;
  --input-placeholder-color: #707070 !important;
  --input-shadow: 0 0 0 0 transparent !important;
  --input-shadow-hover: 0 0 0 0 transparent !important;
  --interactive-accent: hsl(46deg, 95%, 65%) !important;
  --interactive-accent-hover: hsl(46deg, 95%, 61.2%) !important;
  --interactive-accent-hsl: 46deg,
    95%,
    65% !important;
  --interactive-hover: #484848 !important;
  --interactive-normal: #404040 !important;
  --light: #202020 !important;
  --lightgray: #303030 !important;
  --link-color: hsl(46deg, 95%, 61.2%) !important;
  --link-color-hover: hsl(46deg, 95%, 68.8%) !important;
  --link-external-color: hsl(46deg, 95%, 61.2%) !important;
  --link-external-color-hover: hsl(46deg, 95%, 68.8%) !important;
  --link-unresolved-color: hsl(46deg, 95%, 61.2%) !important;
  --link-unresolved-decoration-color: hsla(46deg,
    95%,
    65%, 0.3) !important;
  --list-bullet-border: 0px !important;
  --list-bullet-radius: 1px !important;
  --list-marker-color: #707070 !important;
  --list-marker-color-collapsed: hsl(46deg, 95%, 61.2%) !important;
  --list-marker-color-hover: #a0a0a0 !important;
  --lt-canvas-hover-color: 112,
    112,
    112 !important;
  --lt-file-icon-color: #707070 !important;
  --lt-gradient-gay: linear-gradient(to right, rgb(7, 141, 111), rgb(152, 202, 153), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(205, 208, 234), rgb(123, 173, 226) 70%, rgb(69, 76, 189), rgb(63, 26, 121)) !important;
  --lt-gradient-lesbian: linear-gradient(to right, rgb(213, 44, 0), rgb(226, 150, 136), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(210, 127, 164), rgb(162, 2, 98)) !important;
  --lt-gradient-non-bin: linear-gradient(to right, rgb(253, 219, 0), rgb(238, 212, 143), rgb(255, 255, 255) 30%, rgb(255, 255, 255), rgb(255, 255, 255) 36%, rgb(212, 181, 222), rgb(156, 92, 212), rgb(88, 50, 96), rgb(0, 0, 0)) !important;
  --lt-gradient-pride: linear-gradient(to right, rgb(237, 34, 36), rgb(243, 91, 34), rgb(249, 150, 33), rgb(245, 193, 30), rgb(241, 235, 27) 27%, rgb(241, 235, 27), rgb(241, 235, 27) 33%, rgb(99, 199, 32), rgb(12, 155, 73), rgb(33, 135, 141), rgb(57, 84, 165), rgb(97, 55, 155), rgb(147, 40, 142)) !important;
  --lt-gradient-trans: linear-gradient(to right, rgb(85, 205, 252), rgb(179, 157, 233), rgb(247, 168, 184), rgb(246, 216, 221), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(246, 216, 221), rgb(247, 168, 184), rgb(179, 157, 233), rgb(85, 205, 252)) !important;
  --lt-list-bullet-height: 2px !important;
  --lt-list-bullet-width: 6px !important;
  --menu-background: #303030 !important;
  --menu-border-color: #707070 !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15) !important;
  --metadata-border-color: #404040 !important;
  --metadata-divider-color: #404040 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --metadata-label-text-color: #a0a0a0 !important;
  --metadata-label-text-color-hover: #a0a0a0 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #707070 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #707070 !important;
  --modal-background: #202020 !important;
  --modal-border-color: #505050 !important;
  --modal-border-width: 0px !important;
  --mono-rgb-0: 0,
    0,
    0 !important;
  --mono-rgb-100: 255,
    255,
    255 !important;
  --nav-collapse-icon-color: #707070 !important;
  --nav-collapse-icon-color-collapsed: #707070 !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #707070 !important;
  --nav-heading-color-collapsed-hover: #a0a0a0 !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.12) !important;
  --nav-item-background-active: hsl(46deg, 95%, 65%) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(46deg,
    95%,
    65%, 0.15) !important;
  --nav-item-children-padding-left: 8px !important;
  --nav-item-color: #a0a0a0 !important;
  --nav-item-color-active: #202020 !important;
  --nav-item-color-highlighted: hsl(46deg, 95%, 61.2%) !important;
  --nav-item-color-hover: hsl(46deg, 95%, 61.2%) !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color: #707070 !important;
  --nav-tag-color-active: #a0a0a0 !important;
  --nav-tag-color-hover: #a0a0a0 !important;
  --pdf-background: #202020 !important;
  --pdf-page-background: #202020 !important;
  --pdf-shadow: 0 0 0 1px #404040 !important;
  --pdf-sidebar-background: #202020 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040 !important;
  --pill-border-color: #404040 !important;
  --pill-border-color-hover: #707070 !important;
  --pill-color: #a0a0a0 !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #707070 !important;
  --pill-color-remove-hover: hsl(46deg, 95%, 61.2%) !important;
  --prompt-background: #202020 !important;
  --prompt-border-color: #505050 !important;
  --prompt-border-width: 0px !important;
  --raised-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent)) !important;
  --ribbon-background: #303030 !important;
  --ribbon-background-collapsed: #202020 !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0.05) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1) !important;
  --search-clear-button-color: #a0a0a0 !important;
  --search-icon-color: #a0a0a0 !important;
  --search-result-background: #202020 !important;
  --secondary: hsl(46deg, 95%, 61.2%) !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: #282828 !important;
  --setting-items-border-color: #404040 !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.05),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.1),
    0px 30px 90px rgba(0, 0, 0, 0.15) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15) !important;
  --slider-thumb-border-color: #707070 !important;
  --slider-track-background: #404040 !important;
  --status-bar-background: #383838 !important;
  --status-bar-border-color: #404040 !important;
  --status-bar-border-width: 0px !important;
  --status-bar-radius: 0px !important;
  --status-bar-text-color: #a0a0a0 !important;
  --suggestion-background: #202020 !important;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15) !important;
  --sync-avatar-color-1: #ff6b81 !important;
  --sync-avatar-color-2: #ff7f50 !important;
  --sync-avatar-color-3: hsl(46deg, 95%, 65%) !important;
  --sync-avatar-color-4: #7bed9f !important;
  --sync-avatar-color-5: #70a1ff !important;
  --sync-avatar-color-6: #5352ed !important;
  --tab-background-active: #202020 !important;
  --tab-container-background: #303030 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: #404040 !important;
  --tab-outline-width: 0px !important;
  --tab-switcher-background: #303030 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #303030, transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(46deg, 95%, 65%) !important;
  --tab-text-color: #707070 !important;
  --tab-text-color-active: #a0a0a0 !important;
  --tab-text-color-focused: #a0a0a0 !important;
  --tab-text-color-focused-active: #a0a0a0 !important;
  --tab-text-color-focused-active-current: hsl(46deg, 95%, 61.2%) !important;
  --tab-text-color-focused-highlighted: hsl(46deg, 95%, 61.2%) !important;
  --table-add-button-border-color: #404040 !important;
  --table-border-color: #404040 !important;
  --table-drag-handle-background-active: hsl(46deg, 95%, 65%) !important;
  --table-drag-handle-color: #707070 !important;
  --table-drag-handle-color-active: #202020 !important;
  --table-header-border-color: #404040 !important;
  --table-header-color: #ffffff !important;
  --table-selection: hsla(46deg,
    95%,
    65%, 0.1) !important;
  --table-selection-border-color: hsl(46deg, 95%, 65%) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: hsla(46deg,
    95%,
    65%, 0.1) !important;
  --tag-background-hover: hsla(46deg,
    95%,
    65%, 0.2) !important;
  --tag-border-color: hsla(46deg,
    95%,
    65%, 0.15) !important;
  --tag-border-color-hover: hsla(46deg,
    95%,
    65%, 0.15) !important;
  --tag-color: hsl(46deg, 95%, 61.2%) !important;
  --tag-color-hover: hsl(46deg, 95%, 61.2%) !important;
  --tertiary: hsl(46deg, 95%, 68.8%) !important;
  --text-accent: hsl(46deg, 95%, 61.2%) !important;
  --text-accent-hover: hsl(46deg, 95%, 68.8%) !important;
  --text-error: #ff6b81 !important;
  --text-faint: #707070 !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #a0a0a0 !important;
  --text-normal: #ffffff !important;
  --text-on-accent: #202020 !important;
  --text-selection: rgba(255, 255, 255, 0.2) !important;
  --text-success: #7bed9f !important;
  --text-warning: #ff7f50 !important;
  --textHighlight: rgba(255, 255, 255, 0.075) !important;
  --titleFont: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --titlebar-background: #383838 !important;
  --titlebar-background-focused: #383838 !important;
  --titlebar-border-color: #404040 !important;
  --titlebar-text-color: #a0a0a0 !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --workspace-background-translucent: rgba(0, 0, 0, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(48, 48, 48);
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(32, 32, 32);
  color: rgb(255, 255, 255);
}

html body .bases-table thead th {
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html body .canvas-sidebar {
  background-color: rgb(48, 48, 48);
  border-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html body .note-properties {
  border-color: rgb(64, 64, 64);
}

html body .note-properties-key {
  color: rgb(160, 160, 160);
}

html body .note-properties-row {
  border-color: rgb(160, 160, 160);
}

html body .note-properties-tags {
  background-color: rgba(251, 211, 81, 0.1);
  color: rgb(250, 206, 62);
}

html body .note-properties-value {
  color: rgb(160, 160, 160);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(48, 48, 48);
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(48, 48, 48);
  border-left-color: rgb(64, 64, 64);
  color: rgb(255, 255, 255);
}

html body div#quartz-root {
  background-color: rgb(32, 32, 32);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body h1.article-title {
  color: rgb(255, 255, 255);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(112, 112, 112);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(251, 211, 81);
  border-color: rgb(251, 211, 81);
}

html body p {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}`,
    links: `html body a.external, html footer a {
  color: rgb(250, 206, 62);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration-color: rgb(250, 206, 62);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(250, 206, 62);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration-color: rgb(250, 206, 62);
}

html body a.internal.broken {
  color: rgb(250, 206, 62);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration: underline rgba(251, 211, 81, 0.3);
  text-decoration-color: rgba(251, 211, 81, 0.3);
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(112, 112, 112);
}

html body blockquote {
  background-color: rgba(158, 158, 158, 0.1);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  width: 246.422px;
}

html body td {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html body th {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html body tr {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(255, 255, 255);
}

html body pre > code > [data-line] {
  border-left-color: rgb(251, 211, 81);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(251, 211, 81);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(251, 211, 81);
  border-left-color: rgb(251, 211, 81);
  border-right-color: rgb(251, 211, 81);
  border-top-color: rgb(251, 211, 81);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html body pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(251, 211, 81);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(83, 82, 237);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(83, 82, 237);
}

html body .callout > .callout-content {
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: 112,
    161,
    255;
  background-color: rgba(112, 161, 255, 0.1);
  border-bottom-color: rgba(112, 161, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(112, 161, 255, 0.25);
  border-right-color: rgba(112, 161, 255, 0.25);
  border-top-color: rgba(112, 161, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 255,
    107,
    129;
  background-color: rgba(255, 107, 129, 0.1);
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 255,
    107,
    129;
  background-color: rgba(255, 107, 129, 0.1);
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168,
    130,
    255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 255,
    107,
    129;
  background-color: rgba(255, 107, 129, 0.1);
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="info"] {
  --callout-color: 83,
    82,
    237;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="note"] {
  --callout-color: 83,
    82,
    237;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="question"] {
  --callout-color: 255,
    127,
    80;
  background-color: rgba(255, 127, 80, 0.1);
  border-bottom-color: rgba(255, 127, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 127, 80, 0.25);
  border-right-color: rgba(255, 127, 80, 0.25);
  border-top-color: rgba(255, 127, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="success"] {
  --callout-color: 123,
    237,
    159;
  background-color: rgba(123, 237, 159, 0.1);
  border-bottom-color: rgba(123, 237, 159, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(123, 237, 159, 0.25);
  border-right-color: rgba(123, 237, 159, 0.25);
  border-top-color: rgba(123, 237, 159, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 112,
    161,
    255;
  background-color: rgba(112, 161, 255, 0.1);
  border-bottom-color: rgba(112, 161, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(112, 161, 255, 0.25);
  border-right-color: rgba(112, 161, 255, 0.25);
  border-top-color: rgba(112, 161, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 83,
    82,
    237;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 255,
    127,
    80;
  background-color: rgba(255, 127, 80, 0.1);
  border-bottom-color: rgba(255, 127, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 127, 80, 0.25);
  border-right-color: rgba(255, 127, 80, 0.25);
  border-top-color: rgba(255, 127, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgb(56, 56, 56);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .search > .search-container > .search-space {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.1) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.15) 0px 30px 90px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 206, 62);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 206, 62);
  border-left-color: rgb(250, 206, 62);
  border-right-color: rgb(250, 206, 62);
  border-top-color: rgb(250, 206, 62);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(250, 206, 62);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(250, 206, 62);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(48, 48, 48);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(250, 206, 62);
  border-left-color: rgb(250, 206, 62);
  border-right-color: rgb(250, 206, 62);
  border-top-color: rgb(250, 206, 62);
  color: rgb(250, 206, 62);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(250, 206, 62);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(251, 211, 81, 0.1);
  border-bottom-color: rgba(251, 211, 81, 0.15);
  border-left-color: rgba(251, 211, 81, 0.15);
  border-right-color: rgba(251, 211, 81, 0.15);
  border-top-color: rgba(251, 211, 81, 0.15);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body a.internal.tag-link::before {
  color: rgb(250, 206, 62);
}

html body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 83,
    82,
    237;
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}`,
    footer: `html body footer {
  background-color: rgb(56, 56, 56);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body footer ul li a {
  color: rgb(160, 160, 160);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html body .darkmode svg {
  color: rgb(160, 160, 160);
  stroke: rgb(160, 160, 160);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html body .breadcrumb-element p {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .metadata {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .metadata-properties {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .navigation-progress {
  background-color: rgb(56, 56, 56);
}

html body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body kbd {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}

html body ul.tags > li {
  background-color: rgba(251, 211, 81, 0.1);
  border-bottom-color: rgba(251, 211, 81, 0.15);
  border-left-color: rgba(251, 211, 81, 0.15);
  border-right-color: rgba(251, 211, 81, 0.15);
  border-top-color: rgba(251, 211, 81, 0.15);
  color: rgb(250, 206, 62);
}`,
  },
  light: {},
};
