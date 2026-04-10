import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "focus",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 106.9879518072deg !important;
  --accent-l: 73.9215686275% !important;
  --accent-s: 62.4060150376% !important;
  --background-modifier-active-hover: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.15) !important;
  --background-modifier-border: #222222 !important;
  --background-modifier-border-focus: #505050 !important;
  --background-modifier-border-hover: #303030 !important;
  --background-modifier-error: #f5988f !important;
  --background-modifier-error-hover: #f5988f !important;
  --background-modifier-error-rgb: 245,
    152,
    143 !important;
  --background-modifier-form-field: #222222 !important;
  --background-modifier-form-field-hover: #222222 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: #a5e693 !important;
  --background-modifier-success-rgb: 165,
    230,
    147 !important;
  --background-primary: #1a1a1a !important;
  --background-primary-alt: #1a1a1a !important;
  --background-secondary: #121212 !important;
  --background-secondary-alt: #121212 !important;
  --bases-cards-background: #1a1a1a !important;
  --bases-cards-border-width: 0px !important;
  --bases-cards-cover-background: #1a1a1a !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #222222 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #303030 !important;
  --bases-embed-border-color: #222222 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #707070 !important;
  --bases-header-border-width: 0 0 0px 0 !important;
  --bases-table-border-color: #222222 !important;
  --bases-table-cell-background-active: #1a1a1a !important;
  --bases-table-cell-background-disabled: #1a1a1a !important;
  --bases-table-cell-background-selected: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #505050 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-container-border-width: 0px !important;
  --bases-table-group-background: #1a1a1a !important;
  --bases-table-header-background: #1a1a1a !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #707070 !important;
  --bases-table-row-border-width: 0px !important;
  --bases-table-summary-background: #1a1a1a !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-background-color: rgba(234, 169, 255, 0.1) !important;
  --blockquote-border-color: hsl(285.3488372093deg, 100%, 83.137254902%) !important;
  --blockquote-border-thickness: 4px !important;
  --blur-background: color-mix(in srgb, #222222 65%, transparent) linear-gradient(#222222, color-mix(in srgb, #222222 65%, transparent)) !important;
  --bodyFont: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --bold-color: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --bold-weight: 700 !important;
  --border-width: 0px !important;
  --button-radius: 0px !important;
  --callout-border-opacity: 1;
  --callout-border-width: 0 0 0 4px;
  --callout-bug: 245,
    152,
    143;
  --callout-default: 151,
    192,
    243;
  --callout-error: 245,
    152,
    143;
  --callout-example: 172,
    157,
    242;
  --callout-fail: 245,
    152,
    143;
  --callout-important: 139,
    240,
    219;
  --callout-info: 151,
    192,
    243;
  --callout-question: 255,
    200,
    163;
  --callout-quote: 158,
    158,
    158;
  --callout-radius: 0px;
  --callout-success: 165,
    230,
    147;
  --callout-summary: 139,
    240,
    219;
  --callout-tip: 139,
    240,
    219;
  --callout-todo: 151,
    192,
    243;
  --callout-warning: 255,
    200,
    163;
  --canvas-background: #1a1a1a !important;
  --canvas-card-label-color: #505050 !important;
  --canvas-color-1: 245,
    152,
    143 !important;
  --canvas-color-2: 255,
    200,
    163 !important;
  --canvas-color-3: 240,
    227,
    149 !important;
  --canvas-color-4: 165,
    230,
    147 !important;
  --canvas-color-5: 139,
    240,
    219 !important;
  --canvas-color-6: 172,
    157,
    242 !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #222222 !important;
  --caret-color: #909090 !important;
  --checkbox-border-color: #505050 !important;
  --checkbox-border-color-hover: #707070 !important;
  --checkbox-color: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --checkbox-color-hover: hsl(106.9879518072deg, 62.4060150376%, 83.92157%) !important;
  --checkbox-marker-color: #1a1a1a !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #707070 !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #1a1a1a !important;
  --code-border-color: #222222 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #505050 !important;
  --code-function: #f0e395 !important;
  --code-important: #ffc8a3 !important;
  --code-keyword: #eaa9ff !important;
  --code-normal: #909090 !important;
  --code-operator: #f5988f !important;
  --code-property: #8bf0db !important;
  --code-punctuation: #707070 !important;
  --code-radius: 0px !important;
  --code-string: #a5e693 !important;
  --code-tag: #f5988f !important;
  --code-value: #ac9df2 !important;
  --codeFont: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --collapse-icon-color: #505050 !important;
  --collapse-icon-color-collapsed: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --color-accent: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --color-accent-1: hsl(106.9879518072deg, 62.4060150376%, 63.92157%) !important;
  --color-accent-2: hsl(106.9879518072deg, 62.4060150376%, 83.92157%) !important;
  --color-accent-hsl: 106.9879518072deg,
    62.4060150376%,
    73.9215686275% !important;
  --color-accent-rgb: 165,
    230,
    147 !important;
  --color-base-00: #1a1a1a !important;
  --color-base-05: #1a1a1a !important;
  --color-base-10: #1a1a1a !important;
  --color-base-100: #ffffff !important;
  --color-base-15: #1a1a1a !important;
  --color-base-20: #121212 !important;
  --color-base-25: #121212 !important;
  --color-base-30: #222222 !important;
  --color-base-35: #303030 !important;
  --color-base-40: #505050 !important;
  --color-base-50: #707070 !important;
  --color-base-60: #909090 !important;
  --color-base-70: #a0a0a0 !important;
  --color-base-80: #c0c0c0 !important;
  --color-base-90: #e0e0e0 !important;
  --color-blue: #97c0f3 !important;
  --color-blue-rgb: 151,
    192,
    243 !important;
  --color-complement: hsl(285.3488372093deg, 100%, 83.137254902%) !important;
  --color-complement-1: hsl(285.3488372093deg, 100%, 73.13725%) !important;
  --color-complement-2: hsl(285.3488372093deg, 100%, 93.13725%) !important;
  --color-complement-hsl: 285.3488372093deg,
    100%,
    83.137254902% !important;
  --color-complement-rgb: 234,
    169,
    255 !important;
  --color-cyan: #8bf0db !important;
  --color-cyan-rgb: 139,
    240,
    219 !important;
  --color-green: #a5e693 !important;
  --color-green-rgb: 165,
    230,
    147 !important;
  --color-orange: #ffc8a3 !important;
  --color-orange-rgb: 255,
    200,
    163 !important;
  --color-pink: #eaa9ff !important;
  --color-pink-rgb: 234,
    169,
    255 !important;
  --color-purple: #ac9df2 !important;
  --color-purple-rgb: 172,
    157,
    242 !important;
  --color-red: #f5988f !important;
  --color-red-rgb: 245,
    152,
    143 !important;
  --color-yellow: #f0e395 !important;
  --color-yellow-rgb: 240,
    227,
    149 !important;
  --complement-h: 285.3488372093deg !important;
  --complement-l: 83.137254902% !important;
  --complement-s: 100% !important;
  --dark: #909090 !important;
  --darkgray: #909090 !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --divider-width: 0px !important;
  --dropdown-background: #222222 !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #222222, inset 0 0 0 1px #222222 !important;
  --embed-border-left: 2px solid hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --file-header-background: #1a1a1a !important;
  --file-header-background-focused: #1a1a1a !important;
  --file-header-border: 0px solid transparent !important;
  --file-header-font: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --file-margins: 32px !important;
  --flair-background: #222222 !important;
  --flair-color: #909090 !important;
  --font-default: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-interface: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-mermaid: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --font-text: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --footnote-divider-color: #222222 !important;
  --footnote-divider-width: 0px !important;
  --footnote-id-color: #707070 !important;
  --footnote-id-color-no-occurrences: #505050 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --footnote-radius: 0px !important;
  --graph-line: #303030 !important;
  --graph-node: #707070 !important;
  --graph-node-attachment: #f0e395 !important;
  --graph-node-focused: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --graph-node-tag: #a5e693 !important;
  --graph-node-unresolved: #505050 !important;
  --graph-text: #909090 !important;
  --gray: #707070 !important;
  --h1-color: #ffffff !important;
  --h1-size: 1.802em !important;
  --h1-weight: 500 !important;
  --h2-color: #ffffff !important;
  --h2-size: 1.602em !important;
  --h2-weight: 500 !important;
  --h3-color: #ffffff !important;
  --h3-size: 1.424em !important;
  --h3-weight: 500 !important;
  --h4-color: #ffffff !important;
  --h4-size: 1.266em !important;
  --h4-weight: 500 !important;
  --h5-color: #ffffff !important;
  --h5-size: 1.125em !important;
  --h5-weight: 500 !important;
  --h6-color: #ffffff !important;
  --h6-weight: 500 !important;
  --headerFont: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --heading-formatting: #505050 !important;
  --highlight: transparent !important;
  --hr-color: #222222 !important;
  --icon-color: #707070 !important;
  --icon-color-active: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --icon-color-focused: #909090 !important;
  --icon-color-hover: #707070 !important;
  --indentation-guide-color: rgba(255, 255, 255, 0.12) !important;
  --indentation-guide-color-active: rgba(255, 255, 255, 0.3) !important;
  --indentation-guide-source-indent: 0.2em !important;
  --inline-title-color: #ffffff !important;
  --inline-title-size: 1.802em !important;
  --inline-title-weight: 500 !important;
  --input-border-width: 0px !important;
  --input-date-separator: #505050 !important;
  --input-placeholder-color: #505050 !important;
  --input-radius: 0px !important;
  --input-shadow: 0 0 0 0 transparent !important;
  --input-shadow-hover: 0 0 0 0 transparent !important;
  --interactive-accent: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --interactive-accent-hover: hsl(106.9879518072deg, 62.4060150376%, 83.92157%) !important;
  --interactive-accent-hsl: 106.9879518072deg,
    62.4060150376%,
    73.9215686275% !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #222222 !important;
  --italic-color: hsl(285.3488372093deg, 100%, 83.137254902%) !important;
  --light: #1a1a1a !important;
  --lightgray: #121212 !important;
  --link-color: hsl(285.3488372093deg, 100%, 83.137254902%) !important;
  --link-color-hover: hsl(285.3488372093deg, 100%, 93.13725%) !important;
  --link-external-color: hsl(285.3488372093deg, 100%, 83.137254902%) !important;
  --link-external-color-hover: hsl(285.3488372093deg, 100%, 93.13725%) !important;
  --link-unresolved-color: hsl(285.3488372093deg, 100%, 83.137254902%) !important;
  --link-unresolved-decoration-color: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #505050 !important;
  --list-marker-color-collapsed: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --list-marker-color-hover: #707070 !important;
  --mb-background-modifier-active: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.05) !important;
  --mb-background-modifier-active-hover: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.1) !important;
  --menu-background: #121212 !important;
  --menu-border-color: #303030 !important;
  --menu-border-width: 0px !important;
  --menu-radius: 0px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15) !important;
  --metadata-border-color: #222222 !important;
  --metadata-divider-color: #222222 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --metadata-input-text-color: #909090 !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --metadata-label-text-color: #707070 !important;
  --metadata-label-text-color-hover: #707070 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #505050 !important;
  --metadata-property-box-shadow-hover: 0 0 0 0px #303030 !important;
  --modal-background: #1a1a1a !important;
  --modal-border-color: #505050 !important;
  --modal-border-width: 0px !important;
  --modal-radius: 0px !important;
  --mono-rgb-0: 0,
    0,
    0 !important;
  --mono-rgb-100: 255,
    255,
    255 !important;
  --nav-collapse-icon-color: #505050 !important;
  --nav-collapse-icon-color-collapsed: #505050 !important;
  --nav-heading-color: #909090 !important;
  --nav-heading-color-collapsed: #505050 !important;
  --nav-heading-color-collapsed-hover: #707070 !important;
  --nav-heading-color-hover: #909090 !important;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.12) !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.05) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #707070 !important;
  --nav-item-color-active: #909090 !important;
  --nav-item-color-highlighted: hsl(106.9879518072deg, 62.4060150376%, 83.92157%) !important;
  --nav-item-color-hover: #909090 !important;
  --nav-item-color-selected: #909090 !important;
  --nav-item-radius: 0px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #505050 !important;
  --nav-tag-color-active: #707070 !important;
  --nav-tag-color-hover: #707070 !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #1a1a1a !important;
  --pdf-page-background: #1a1a1a !important;
  --pdf-shadow: 0 0 0 1px #222222 !important;
  --pdf-sidebar-background: #1a1a1a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #222222 !important;
  --pill-border-color: #222222 !important;
  --pill-border-color-hover: #303030 !important;
  --pill-border-width: 0px !important;
  --pill-color: #707070 !important;
  --pill-color-hover: #909090 !important;
  --pill-color-remove: #505050 !important;
  --pill-color-remove-hover: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #1a1a1a !important;
  --prompt-border-color: #505050 !important;
  --prompt-border-width: 0px !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: color-mix(in srgb, #222222 65%, transparent) linear-gradient(#222222, color-mix(in srgb, #222222 65%, transparent)) !important;
  --ribbon-background: #121212 !important;
  --ribbon-background-collapsed: #1a1a1a !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0.05) !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1) !important;
  --search-clear-button-color: #707070 !important;
  --search-icon-color: #707070 !important;
  --search-result-background: #1a1a1a !important;
  --secondary: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --setting-group-heading-color: #909090 !important;
  --setting-items-background: #1a1a1a !important;
  --setting-items-border-color: #222222 !important;
  --setting-items-radius: 0px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.05),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.1),
    0px 30px 90px rgba(0, 0, 0, 0.15) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15) !important;
  --shiki-code-normal: #909090 !important;
  --slider-thumb-border-color: #303030 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #222222 !important;
  --status-bar-background: #121212 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #707070 !important;
  --suggestion-background: #1a1a1a !important;
  --swatch-height: 24px !important;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15) !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #f5988f !important;
  --sync-avatar-color-2: #ffc8a3 !important;
  --sync-avatar-color-3: #f0e395 !important;
  --sync-avatar-color-4: #a5e693 !important;
  --sync-avatar-color-5: #8bf0db !important;
  --sync-avatar-color-6: #97c0f3 !important;
  --sync-avatar-color-7: #ac9df2 !important;
  --sync-avatar-color-8: #eaa9ff !important;
  --tab-background-active: #1a1a1a !important;
  --tab-container-background: #121212 !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 0px !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #121212 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent) !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --tab-text-color: #707070 !important;
  --tab-text-color-active: #ffffff !important;
  --tab-text-color-focused: #707070 !important;
  --tab-text-color-focused-active: #ffffff !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --table-add-button-border-color: #222222 !important;
  --table-border-color: #222222 !important;
  --table-drag-handle-background-active: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --table-drag-handle-color: #505050 !important;
  --table-drag-handle-color-active: black !important;
  --table-header-border-color: #222222 !important;
  --table-header-color: #ffffff !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.1) !important;
  --table-selection-border-color: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.1) !important;
  --tag-background-hover: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.2) !important;
  --tag-border-color: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.15) !important;
  --tag-border-color-hover: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.15) !important;
  --tag-color: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --tag-color-hover: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --tertiary: hsl(106.9879518072deg, 62.4060150376%, 83.92157%) !important;
  --text-accent: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%) !important;
  --text-accent-hover: hsl(106.9879518072deg, 62.4060150376%, 83.92157%) !important;
  --text-complement: hsl(285.3488372093deg, 100%, 83.137254902%) !important;
  --text-complement-hover: hsl(285.3488372093deg, 100%, 93.13725%) !important;
  --text-error: #f5988f !important;
  --text-faint: #505050 !important;
  --text-highlight-bg: transparent !important;
  --text-highlight-bg-rgb: transparent !important;
  --text-important: #ffffff !important;
  --text-muted: #707070 !important;
  --text-normal: #909090 !important;
  --text-on-accent: black !important;
  --text-on-accent-inverted: white !important;
  --text-selection: rgba(255, 255, 255, 0.2) !important;
  --text-success: #a5e693 !important;
  --text-warning: #ffc8a3 !important;
  --textHighlight: transparent !important;
  --titleFont: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace !important;
  --titlebar-background: #121212 !important;
  --titlebar-background-focused: #121212 !important;
  --titlebar-border-color: #222222 !important;
  --titlebar-text-color: #707070 !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-name-color: #909090 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #909090 !important;
  --vault-profile-color-hover: #909090 !important;
  --workspace-background-translucent: rgba(0, 0, 0, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 18, 18);
  color: rgb(144, 144, 144);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(144, 144, 144);
}

html body .bases-table thead th {
  border-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
  font-weight: 700;
}

html body .canvas-node {
  border-color: rgb(144, 144, 144);
}

html body .canvas-node-content {
  color: rgb(144, 144, 144);
}

html body .canvas-node-file {
  color: rgb(144, 144, 144);
}

html body .canvas-node-group {
  border-color: rgb(144, 144, 144);
}

html body .canvas-sidebar {
  background-color: rgb(18, 18, 18);
  border-color: rgb(144, 144, 144);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html body .note-properties {
  border-color: rgb(34, 34, 34);
}

html body .note-properties-key {
  color: rgb(112, 112, 112);
}

html body .note-properties-row {
  border-color: rgb(112, 112, 112);
}

html body .note-properties-tags {
  background-color: rgba(165, 230, 147, 0.1);
  color: rgb(165, 230, 147);
}

html body .note-properties-value {
  color: rgb(112, 112, 112);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(18, 18, 18);
  color: rgb(144, 144, 144);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 18, 18);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(144, 144, 144);
}

html body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(144, 144, 144);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(165, 230, 147);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(165, 230, 147) none 0px;
  text-decoration-color: rgb(165, 230, 147);
}

html body .page article p > em, html em {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration-color: rgb(234, 169, 255);
}

html body .page article p > i, html i {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration-color: rgb(234, 169, 255);
}

html body .page article p > strong, html strong {
  color: rgb(165, 230, 147);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(165, 230, 147) none 0px;
  text-decoration-color: rgb(165, 230, 147);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(80, 80, 80);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(80, 80, 80) none 0px;
  text-decoration-color: rgb(80, 80, 80);
}

html body h1.article-title {
  color: rgb(144, 144, 144);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(80, 80, 80);
  border-radius: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(165, 230, 147);
  border-color: rgb(165, 230, 147);
}

html body p {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration-color: rgb(112, 112, 112);
}`,
    links: `html body a.external, html footer a {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration-color: rgb(234, 169, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration-color: rgb(234, 169, 255);
}

html body a.internal.broken {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration: underline rgba(165, 230, 147, 0.3);
  text-decoration-color: rgba(165, 230, 147, 0.3);
}`,
    lists: `html body dd {
  color: rgb(144, 144, 144);
}

html body dt {
  color: rgb(144, 144, 144);
}

html body ol > li {
  color: rgb(144, 144, 144);
}

html body ol.overflow {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body ul > li {
  color: rgb(144, 144, 144);
}

html body ul.overflow {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(80, 80, 80);
}

html body blockquote {
  background-color: rgba(234, 169, 255, 0.1);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body table {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  width: 217.422px;
}

html body td {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(144, 144, 144);
}

html body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
  font-weight: 700;
}`,
    code: `html body code {
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

html body pre > code > [data-line] {
  border-left-color: rgb(240, 227, 149);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(240, 227, 149);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(240, 227, 149);
  border-left-color: rgb(240, 227, 149);
  border-right-color: rgb(240, 227, 149);
  border-top-color: rgb(240, 227, 149);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body figcaption {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body figure {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .footnotes {
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

html body .transclude {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(165, 230, 147);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body .transclude-inner {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 80, 80);
  border-right-color: rgb(80, 80, 80);
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(151, 192, 243);
  border-left-color: rgb(151, 192, 243);
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  color: rgb(151, 192, 243);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(151, 192, 243);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 139,
    240,
    219;
  background-color: rgba(139, 240, 219, 0.1);
  border-bottom-color: rgb(139, 240, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(139, 240, 219);
  border-left-width: 4px;
  border-right-color: rgb(139, 240, 219);
  border-top-color: rgb(139, 240, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 245,
    152,
    143;
  background-color: rgba(245, 152, 143, 0.1);
  border-bottom-color: rgb(245, 152, 143);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 152, 143);
  border-left-width: 4px;
  border-right-color: rgb(245, 152, 143);
  border-top-color: rgb(245, 152, 143);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 245,
    152,
    143;
  background-color: rgba(245, 152, 143, 0.1);
  border-bottom-color: rgb(245, 152, 143);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 152, 143);
  border-left-width: 4px;
  border-right-color: rgb(245, 152, 143);
  border-top-color: rgb(245, 152, 143);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: 172,
    157,
    242;
  background-color: rgba(172, 157, 242, 0.1);
  border-bottom-color: rgb(172, 157, 242);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(172, 157, 242);
  border-left-width: 4px;
  border-right-color: rgb(172, 157, 242);
  border-top-color: rgb(172, 157, 242);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 245,
    152,
    143;
  background-color: rgba(245, 152, 143, 0.1);
  border-bottom-color: rgb(245, 152, 143);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 152, 143);
  border-left-width: 4px;
  border-right-color: rgb(245, 152, 143);
  border-top-color: rgb(245, 152, 143);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: 151,
    192,
    243;
  background-color: rgba(151, 192, 243, 0.1);
  border-bottom-color: rgb(151, 192, 243);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 192, 243);
  border-left-width: 4px;
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: 151,
    192,
    243;
  background-color: rgba(151, 192, 243, 0.1);
  border-bottom-color: rgb(151, 192, 243);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 192, 243);
  border-left-width: 4px;
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: 255,
    200,
    163;
  background-color: rgba(255, 200, 163, 0.1);
  border-bottom-color: rgb(255, 200, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 200, 163);
  border-left-width: 4px;
  border-right-color: rgb(255, 200, 163);
  border-top-color: rgb(255, 200, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158,
    158,
    158;
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: 165,
    230,
    147;
  background-color: rgba(165, 230, 147, 0.1);
  border-bottom-color: rgb(165, 230, 147);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(165, 230, 147);
  border-left-width: 4px;
  border-right-color: rgb(165, 230, 147);
  border-top-color: rgb(165, 230, 147);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 139,
    240,
    219;
  background-color: rgba(139, 240, 219, 0.1);
  border-bottom-color: rgb(139, 240, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(139, 240, 219);
  border-left-width: 4px;
  border-right-color: rgb(139, 240, 219);
  border-top-color: rgb(139, 240, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 151,
    192,
    243;
  background-color: rgba(151, 192, 243, 0.1);
  border-bottom-color: rgb(151, 192, 243);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 192, 243);
  border-left-width: 4px;
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 255,
    200,
    163;
  background-color: rgba(255, 200, 163, 0.1);
  border-bottom-color: rgb(255, 200, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 200, 163);
  border-left-width: 4px;
  border-right-color: rgb(255, 200, 163);
  border-top-color: rgb(255, 200, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(144, 144, 144);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.1) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.15) 0px 30px 90px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(144, 144, 144) none 0px;
  text-decoration-color: rgb(144, 144, 144);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(144, 144, 144);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(144, 144, 144);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(144, 144, 144);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-width: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(165, 230, 147, 0.1);
  border-bottom-color: rgba(165, 230, 147, 0.15);
  border-left-color: rgba(165, 230, 147, 0.15);
  border-right-color: rgba(165, 230, 147, 0.15);
  border-top-color: rgba(165, 230, 147, 0.15);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body a.internal.tag-link::before {
  color: rgb(165, 230, 147);
}

html body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 151,
    192,
    243;
  border-bottom-color: rgb(151, 192, 243);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 192, 243);
  border-left-width: 4px;
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(144, 144, 144);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
}`,
    footer: `html body footer {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body footer ul li a {
  color: rgb(112, 112, 112);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(112, 112, 112);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body li.section-li > .section .meta {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(112, 112, 112);
}

html body ul.section-ul {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    darkmode: `html body .darkmode {
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

html body .darkmode svg {
  color: rgb(112, 112, 112);
  stroke: rgb(112, 112, 112);
}`,
    breadcrumbs: `html body .breadcrumb-container {
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

html body .breadcrumb-element p {
  color: rgb(80, 80, 80);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

html body .metadata {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(112, 112, 112);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .metadata-properties {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .navigation-progress {
  background-color: rgb(18, 18, 18);
}

html body .page-header h2.page-title {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body abbr {
  color: rgb(144, 144, 144);
}

html body details {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body input[type=text] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

html body progress {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

html body sub {
  color: rgb(144, 144, 144);
}

html body summary {
  color: rgb(144, 144, 144);
}

html body sup {
  color: rgb(144, 144, 144);
}

html body ul.tags > li {
  background-color: rgba(165, 230, 147, 0.1);
  border-bottom-color: rgba(165, 230, 147, 0.15);
  border-left-color: rgba(165, 230, 147, 0.15);
  border-right-color: rgba(165, 230, 147, 0.15);
  border-top-color: rgba(165, 230, 147, 0.15);
  color: rgb(165, 230, 147);
}`,
  },
  light: {},
};
