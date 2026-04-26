import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ebullientworks",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Architects Daughter",
        style: "normal",
        weight: "400",
        file: "architects-daughter.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "italic",
        weight: "300",
        file: "ibm-plex-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "normal",
        weight: "300",
        file: "ibm-plex-sans-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "italic",
        weight: "400",
        file: "ibm-plex-sans-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "normal",
        weight: "400",
        file: "ibm-plex-sans-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "italic",
        weight: "700",
        file: "ibm-plex-sans-4.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "normal",
        weight: "700",
        file: "ibm-plex-sans-5.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Code",
        style: "normal",
        weight: "400",
        file: "fira-code.woff2",
        format: "woff2",
        unicodeRange:
          "U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
      },
      {
        family: "Fira Code",
        style: "normal",
        weight: "400",
        file: "fira-code-1.woff2",
        format: "woff2",
        unicodeRange:
          "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 344 !important;
  --accent-l: 51% !important;
  --accent-s: 30% !important;
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15) !important;
  --background-modifier-border: #1b1b1b !important;
  --background-modifier-border-focus: #070707 !important;
  --background-modifier-border-hover: black !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #7a302f !important;
  --background-modifier-error-hover: #c24c4a !important;
  --background-modifier-error-rgb: 122,48,47 !important;
  --background-modifier-form-field: #3f3f3f !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: #3f3f3f !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-info: #2c496e !important;
  --background-modifier-message: #3f3f3f !important;
  --background-modifier-success: #3a4d3e !important;
  --background-modifier-success-rgb: 58,77,62 !important;
  --background-modifier-warning: #8d6e3b !important;
  --background-modifier-warning-hover: #c49a52 !important;
  --background-primary-alt: #272727 !important;
  --background-secondary: #2f2f2f !important;
  --background-secondary-alt: #212121 !important;
  --bases-cards-cover-background: #272727 !important;
  --bases-cards-shadow: 0 0 0 1px #1b1b1b !important;
  --bases-cards-shadow-hover: 0 0 0 1px black !important;
  --bases-embed-border-color: #1b1b1b !important;
  --bases-group-heading-property-color: #b8b8b8 !important;
  --bases-table-border-color: #1b1b1b !important;
  --bases-table-cell-background-disabled: #272727 !important;
  --bases-table-cell-background-selected: hsla(344, 30%, 51%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #070707 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #594054 !important;
  --bases-table-group-background: #272727 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #b8b8b8 !important;
  --bases-table-row-background-hover: rgba(142, 103, 135, 0.2) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: #5c7a62 !important;
  --blockquote-border-thickness: 0.05rem !important;
  --blue-0: #ceddeb !important;
  --blue-1: #bbd0e4 !important;
  --blue-1-rgb: 187,208,228 !important;
  --blue-2: #9fbbd8 !important;
  --blue-2-rgb: 159,187,216 !important;
  --blue-3: #7fa4ca !important;
  --blue-4: #4575ae !important;
  --blue-4-rgb: 69,117,174 !important;
  --blue-5: #2c496e !important;
  --blue-5-rgb: 44,73,110 !important;
  --blue-6: #1d3048 !important;
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent)) !important;
  --bodyFont: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #7fa4ca !important;
  --callout-border-opacity: 0.4;
  --callout-border-width: 0 0.05rem 0 0.1rem;
  --callout-bug: 237,166,165;
  --callout-content-padding: 0 8px;
  --callout-default: 159,187,216;
  --callout-error: 237,166,165;
  --callout-example: 198,178,195;
  --callout-fail: 237,166,165;
  --callout-important: 158,190,188;
  --callout-info: 159,187,216;
  --callout-padding: 0;
  --callout-question: 227,172,151;
  --callout-radius: 8px;
  --callout-success: 173,188,176;
  --callout-summary: 158,190,188;
  --callout-tip: 158,190,188;
  --callout-title-padding: 8px;
  --callout-todo: 159,187,216;
  --callout-warning: 227,172,151;
  --canvas-card-label-color: #a0a0a0 !important;
  --canvas-color-1: 237,166,165 !important;
  --canvas-color-2: 227,172,151 !important;
  --canvas-color-3: 236,201,134 !important;
  --canvas-color-4: 173,188,176 !important;
  --canvas-color-5: 158,190,188 !important;
  --canvas-color-6: 198,178,195 !important;
  --canvas-dot-pattern: #2f2f2f !important;
  --caret-color: #cdcdcd !important;
  --checkbox-border-color: #a0a0a0 !important;
  --checkbox-border-color-hover: #b8b8b8 !important;
  --checkbox-cancelled: #737373 !important;
  --checkbox-checked: #5c7a62 !important;
  --checkbox-color: #594054 !important;
  --checkbox-color-hover: #8e6787 !important;
  --checkbox-deferred: #7fa4ca !important;
  --checkbox-hover: #898989 !important;
  --checkbox-important: #a75c70 !important;
  --checkbox-in-progress: #058080 !important;
  --checkbox-question: #c49a52 !important;
  --checkbox-review: #91a695 !important;
  --checklist-done-color: #b8b8b8 !important;
  --code-background: #272727 !important;
  --code-border-color: #1b1b1b !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #a0a0a0 !important;
  --code-function: #e0b15e !important;
  --code-important: #e3ac97 !important;
  --code-keyword: #deaab8 !important;
  --code-normal: #9fbbd8 !important;
  --code-operator: #eda6a5 !important;
  --code-property: #74c6c5 !important;
  --code-punctuation: #b8b8b8 !important;
  --code-string: #adbcb0 !important;
  --code-tag: #eda6a5 !important;
  --code-value: #c6b2c3 !important;
  --codeFont: Fira Code, Source Code Pro, Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #a0a0a0 !important;
  --collapse-icon-color-collapsed: #c6b2c3 !important;
  --color-accent: hsl(344, 30%, 51%) !important;
  --color-accent-1: hsl(341, 30.6%, 58.65%) !important;
  --color-accent-2: hsl(339, 31.5%, 65.79%) !important;
  --color-accent-hsl: 344, 30%, 51% !important;
  --color-base-00: #070707 !important;
  --color-base-05: #1b1b1b !important;
  --color-base-10: #1e1e1e !important;
  --color-base-100: #cdcdcd !important;
  --color-base-20: #212121 !important;
  --color-base-25: #272727 !important;
  --color-base-30: #2f2f2f !important;
  --color-base-40: #484848 !important;
  --color-base-50: #737373 !important;
  --color-base-60: #a0a0a0 !important;
  --color-base-70: #b8b8b8 !important;
  --color-blue: #9fbbd8 !important;
  --color-blue-rgb: 159,187,216 !important;
  --color-cyan: #74c6c5 !important;
  --color-cyan-rgb: 158,190,188 !important;
  --color-green: #adbcb0 !important;
  --color-green-rgb: 173,188,176 !important;
  --color-orange: #e3ac97 !important;
  --color-orange-rgb: 227,172,151 !important;
  --color-pink: #deaab8 !important;
  --color-pink-rgb: 222,170,184 !important;
  --color-purple: #c6b2c3 !important;
  --color-purple-rgb: 198,178,195 !important;
  --color-red: #eda6a5 !important;
  --color-red-rgb: 237,166,165 !important;
  --color-yellow: #e0b15e !important;
  --color-yellow-rgb: 236,201,134 !important;
  --cyan-0: #bbe3e3 !important;
  --cyan-1: #9fd8d8 !important;
  --cyan-1-rgb: 187,210,209 !important;
  --cyan-2: #74c6c5 !important;
  --cyan-2-rgb: 158,190,188 !important;
  --cyan-3: #41b0b0 !important;
  --cyan-4: #058080 !important;
  --cyan-4-rgb: 62,125,121 !important;
  --cyan-5: #03616E !important;
  --cyan-5-rgb: 3, 97, 110 !important;
  --cyan-6: #024448 !important;
  --dark: #cdcdcd !important;
  --darkgray: #cdcdcd !important;
  --day-planner-progress-bg: #3a4d3e !important;
  --day-planner-progress-fg: #91a695 !important;
  --divider-color: #070707 !important;
  --divider-color-hover: #594054 !important;
  --dropdown-background: #3f3f3f !important;
  --dropdown-background-hover: #8e6787 !important;
  --ebw-alpha2: rgba(0, 0, 0, 0.2) !important;
  --ebw-alpha4: rgba(0, 0, 0, 0.4) !important;
  --ebw-calendar-month: #91a695 !important;
  --ebw-calendar-year: #b399ae !important;
  --ebw-callout-abstract: 199, 178, 195 !important;
  --ebw-callout-bug: 180, 152, 175 !important;
  --ebw-callout-chat: 61, 126, 123 !important;
  --ebw-callout-danger: 230, 133, 132 !important;
  --ebw-callout-example: 142, 103, 135 !important;
  --ebw-callout-failure: 211, 141, 159 !important;
  --ebw-callout-info: 111, 166, 211 !important;
  --ebw-callout-note: 148, 189, 223 !important;
  --ebw-callout-question: 89, 174, 170 !important;
  --ebw-callout-quote: 53, 120, 175 !important;
  --ebw-callout-reference: 183, 183, 183 !important;
  --ebw-callout-success: 139, 167, 145 !important;
  --ebw-callout-tip: 134, 196, 193 !important;
  --ebw-callout-toc: 235, 235, 235 !important;
  --ebw-callout-warning: 234, 175, 0 !important;
  --ebw-embed-border-color: #2f2f2f !important;
  --ebw-font-callout-title: 'Architects Daughter' !important;
  --ebw-font-monospace: 'Fira Code', 'Source Code Pro', Jetbrains Mono !important;
  --ebw-font-tags: 'Architects Daughter' !important;
  --ebw-font-text: 'IBM Plex Sans', Helvetica Neue !important;
  --ebw-he-title-border: #070707 !important;
  --ebw-header-font: 'Architects Daughter' !important;
  --ebw-header-font-caps-variant: normal !important;
  --ebw-header-modifier: 1.4 !important;
  --ebw-link-hidden: #058080 !important;
  --ebw-link-underline: #058080 !important;
  --ebw-p-modifier: 1 !important;
  --ebw-row-alt: rgba(0, 0, 0, 0.2) !important;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.2) !important;
  --ebw-strong-em: #e0b15e !important;
  --ebw-tab-title-active-bg: #3a4d3e !important;
  --ebw-tab-title-active-fg: #cdcdcd !important;
  --ebw-tab-title-active-focused-bg: #594054 !important;
  --ebw-tab-title-inactive-bg: #5d5d5d !important;
  --ebw-tab-title-inactive-focused-bg: #5d5d5d !important;
  --ebw-table-header-alt: #8e6787 !important;
  --ebw-today-hover: #f1f1f1 !important;
  --ebw-today-text: #b399ae !important;
  --embed-block-shadow-hover: 0 0 0 1px #1b1b1b, inset 0 0 0 1px #1b1b1b !important;
  --embed-border-left: 0.0625rem solid #2f2f2f !important;
  --embed-border-right: 0.0625rem solid #2f2f2f !important;
  --embed-border-start: 2px solid #594054 !important;
  --embed-padding: 2px 8px !important;
  --file-header-font: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 8px 32px !important;
  --flair-background: #3f3f3f !important;
  --flair-color: #cdcdcd !important;
  --font-interface: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue !important;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono !important;
  --font-monospace: Fira Code, Source Code Pro, Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono !important;
  --font-print: IBM Plex Sans, Helvetica Neue, Arial' !important;
  --font-text: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue !important;
  --footnote-divider-color: #2f2f2f !important;
  --footnote-id-color: #b8b8b8 !important;
  --footnote-id-color-no-occurrences: #a0a0a0 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: #484848 !important;
  --graph-node: #8e6787 !important;
  --graph-node-attachment: #adbcb0 !important;
  --graph-node-focused: #ecc986 !important;
  --graph-node-tag: #91a695 !important;
  --graph-node-unresolved: #b8b8b8 !important;
  --graph-text: #cdcdcd !important;
  --gray: #b8b8b8 !important;
  --gray-dark-1: #a0a0a0 !important;
  --gray-dark-10: #070707 !important;
  --gray-dark-2: #898989 !important;
  --gray-dark-3: #737373 !important;
  --gray-dark-4: #5d5d5d !important;
  --gray-dark-5: #484848 !important;
  --gray-dark-6: #3f3f3f !important;
  --gray-dark-7: #2f2f2f !important;
  --gray-dark-75: #272727 !important;
  --gray-dark-8: #212121 !important;
  --gray-dark-85: #1e1e1e !important;
  --gray-dark-9: #1b1b1b !important;
  --gray-light-1: #cdcdcd !important;
  --gray-light-2: #dbdbdb !important;
  --gray-light-3: #e3e3e3 !important;
  --gray-light-4: #ebebeb !important;
  --gray-light-5: #f1f1f1 !important;
  --gray-light-6: #f5f5f5 !important;
  --gray-light-7: #f8f8f8 !important;
  --gray-light-8: #fafafa !important;
  --green-0: #d6ddd7 !important;
  --green-1: #c5d0c8 !important;
  --green-1-rgb: 197,208,200 !important;
  --green-2: #adbcb0 !important;
  --green-2-rgb: 173,188,176 !important;
  --green-3: #91a695 !important;
  --green-4: #5c7a62 !important;
  --green-4-rgb: 92,122,98 !important;
  --green-5: #3a4d3e !important;
  --green-5-rgb: 58,77,62 !important;
  --green-6: #263228 !important;
  --h1-color: #e0b15e !important;
  --h1-font: 'Architects Daughter' !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 2em !important;
  --h1-variant: common-ligatures !important;
  --h1-weight: 500 !important;
  --h2-color: #91a695 !important;
  --h2-font: 'Architects Daughter' !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.8em !important;
  --h2-variant: common-ligatures !important;
  --h2-weight: 500 !important;
  --h3-color: #41b0b0 !important;
  --h3-font: 'Architects Daughter' !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.6em !important;
  --h3-variant: common-ligatures !important;
  --h3-weight: 500 !important;
  --h4-color: #7fa4ca !important;
  --h4-font: 'Architects Daughter' !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.4em !important;
  --h4-variant: common-ligatures !important;
  --h4-weight: 500 !important;
  --h5-color: #b399ae !important;
  --h5-font: 'Architects Daughter' !important;
  --h5-size: 1.2em !important;
  --h5-variant: common-ligatures !important;
  --h5-weight: 500 !important;
  --h6-color: #d38d9f !important;
  --h6-font: 'Architects Daughter' !important;
  --h6-size: 1.2em !important;
  --h6-variant: common-ligatures !important;
  --h6-weight: 500 !important;
  --he-text-on-accent-active: #f1f1f1 !important;
  --he-text-on-accent-inactive: #2f2f2f !important;
  --he-title-bar-active-bg: #5c7a62 !important;
  --he-title-bar-active-fg: #f5f5f5 !important;
  --he-title-bar-active-pinned-bg: #8e6787 !important;
  --he-title-bar-height: 22px !important;
  --he-title-bar-inactive-bg: #737373 !important;
  --he-title-bar-inactive-fg: #e3e3e3 !important;
  --he-title-bar-inactive-pinned-bg: #737373 !important;
  --he-view-header-height: 22px !important;
  --headerFont: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #a0a0a0 !important;
  --heading-spacing: 22.4px !important;
  --highlight: #c6b2c3 !important;
  --hr-color: #1b1b1b !important;
  --icon-color: #b8b8b8 !important;
  --icon-color-active: #c6b2c3 !important;
  --icon-color-focused: #cdcdcd !important;
  --icon-color-hover: #b8b8b8 !important;
  --indentation-guide: #2f2f2f !important;
  --indentation-guide-active: #3f3f3f !important;
  --inline-title-color: #e0b15e !important;
  --inline-title-font: 'Architects Daughter' !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 2em !important;
  --inline-title-variant: common-ligatures !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #a0a0a0 !important;
  --input-placeholder-color: #a0a0a0 !important;
  --interactive-accent: #594054 !important;
  --interactive-accent-hover: #8e6787 !important;
  --interactive-accent-hsl: 344, 30%, 51% !important;
  --interactive-disabled: #3f3f3f !important;
  --interactive-hover: #8e6787 !important;
  --interactive-normal: #3f3f3f !important;
  --interactive-toggle: #5c7a62 !important;
  --italic-color: #deaab8 !important;
  --light: #272727 !important;
  --lightgray: #2f2f2f !important;
  --link-color: #cdcdcd !important;
  --link-color-hover: #74c6c5 !important;
  --link-external-color: #cdcdcd !important;
  --link-external-color-hover: #74c6c5 !important;
  --link-unresolved-color: #cdcdcd !important;
  --link-unresolved-decoration-color: #058080 !important;
  --link-unresolved-decoration-style: dotted !important;
  --link-unresolved-opacity: 0.9 !important;
  --list-marker-color: #a0a0a0 !important;
  --list-marker-color-collapsed: #c6b2c3 !important;
  --list-marker-color-hover: #b8b8b8 !important;
  --menu-background: #2f2f2f !important;
  --menu-border-color: black !important;
  --metadata-border-color: #1b1b1b !important;
  --metadata-border-radius: 4px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #2f2f2f !important;
  --metadata-divider-width: 1px !important;
  --metadata-gap: 0 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #cdcdcd !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #b8b8b8 !important;
  --metadata-label-text-color-hover: #b8b8b8 !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #070707 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px black !important;
  --metadata-property-radius: 4px !important;
  --modal-border-color: #484848 !important;
  --modifier-text: #fafafa !important;
  --modifier-text-accent: #f8f8f8 !important;
  --nav-collapse-icon-color: #a0a0a0 !important;
  --nav-collapse-icon-color-collapsed: #a0a0a0 !important;
  --nav-heading-color: #cdcdcd !important;
  --nav-heading-color-collapsed: #a0a0a0 !important;
  --nav-heading-color-collapsed-hover: #b8b8b8 !important;
  --nav-heading-color-hover: #cdcdcd !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(344, 30%, 51%, 0.15) !important;
  --nav-item-color: #b8b8b8 !important;
  --nav-item-color-active: #cdcdcd !important;
  --nav-item-color-highlighted: #c6b2c3 !important;
  --nav-item-color-hover: #cdcdcd !important;
  --nav-item-color-selected: #cdcdcd !important;
  --nav-tag-color: #a0a0a0 !important;
  --nav-tag-color-active: #b8b8b8 !important;
  --nav-tag-color-hover: #b8b8b8 !important;
  --orange-0: #f1d6cb !important;
  --orange-1: #ecc5b7 !important;
  --orange-1-rgb: 236,197,183 !important;
  --orange-2: #e3ac97 !important;
  --orange-2-rgb: 227,172,151 !important;
  --orange-3: #da8d73 !important;
  --orange-4: #9d6553 !important;
  --orange-4-rgb: 157,101,83 !important;
  --orange-5: #633f34 !important;
  --orange-5-rgb: 99,63,52 !important;
  --orange-6: #412922 !important;
  --p-spacing: 16px !important;
  --pdf-shadow: 0 0 0 1px #1b1b1b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #1b1b1b !important;
  --pill-border-color: #1b1b1b !important;
  --pill-border-color-hover: black !important;
  --pill-color: #b8b8b8 !important;
  --pill-color-hover: #cdcdcd !important;
  --pill-color-remove: #a0a0a0 !important;
  --pill-color-remove-hover: #c6b2c3 !important;
  --pink-0: #efd5dc !important;
  --pink-1: #e8c4ce !important;
  --pink-1-rgb: 232,196,206 !important;
  --pink-2: #deaab8 !important;
  --pink-2-rgb: 222,170,184 !important;
  --pink-3: #d38d9f !important;
  --pink-4: #a75c70 !important;
  --pink-4-rgb: 167,92,112 !important;
  --pink-5: #693a46 !important;
  --pink-5-rgb: 105,58,70 !important;
  --pink-6: #45262e !important;
  --primary-accent-0: #e2d9e1 !important;
  --primary-accent-1: #d7c9d5 !important;
  --primary-accent-1-rgb: 215,201,213 !important;
  --primary-accent-2: #c6b2c3 !important;
  --primary-accent-3: #b399ae !important;
  --primary-accent-4: #8e6787 !important;
  --primary-accent-4-rgb: 142,103,135 !important;
  --primary-accent-5: #594054 !important;
  --primary-accent-6: #392a37 !important;
  --prompt-border-color: #484848 !important;
  --purple-0: #e2d9e1 !important;
  --purple-1: #d7c9d5 !important;
  --purple-1-rgb: 215,201,213 !important;
  --purple-2: #c6b2c3 !important;
  --purple-2-rgb: 198,178,195 !important;
  --purple-3: #b399ae !important;
  --purple-4: #8e6787 !important;
  --purple-4-rgb: 142,103,135 !important;
  --purple-5: #594054 !important;
  --purple-5-rgb: 89,64,84 !important;
  --purple-6: #392a37 !important;
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent)) !important;
  --red-0: #f6d3d3 !important;
  --red-1: #f3c2c1 !important;
  --red-1-rgb: 243,194,193 !important;
  --red-2: #eda6a5 !important;
  --red-2-rgb: 237,166,165 !important;
  --red-3: #e68584 !important;
  --red-3-rgb: 230,133,132 !important;
  --red-4: #c24c4a !important;
  --red-4-rgb: 194,76,74 !important;
  --red-5: #7a302f !important;
  --red-5-rgb: 122,48,47 !important;
  --red-6: #50201f !important;
  --ribbon-background: #212121 !important;
  --ribbon-background-collapsed: #212121 !important;
  --search-clear-button-color: #b8b8b8 !important;
  --search-icon-color: #b8b8b8 !important;
  --secondary: #c6b2c3 !important;
  --secondary-accent-0: #d6ddd7 !important;
  --secondary-accent-1: #c5d0c8 !important;
  --secondary-accent-1-rgb: 197,208,200 !important;
  --secondary-accent-2: #adbcb0 !important;
  --secondary-accent-3: #91a695 !important;
  --secondary-accent-4: #5c7a62 !important;
  --secondary-accent-4-rgb: 92,122,98 !important;
  --secondary-accent-5: #3a4d3e !important;
  --secondary-accent-6: #263228 !important;
  --setting-group-heading-color: #cdcdcd !important;
  --setting-items-background: #272727 !important;
  --setting-items-border-color: #1b1b1b !important;
  --shiki-active-tab-border-color: #b8b8b8 !important;
  --shiki-code-background: #272727 !important;
  --shiki-code-block-spacing: 16px !important;
  --shiki-code-comment: #a0a0a0 !important;
  --shiki-code-function: #adbcb0 !important;
  --shiki-code-important: #e3ac97 !important;
  --shiki-code-keyword: #deaab8 !important;
  --shiki-code-normal: #b8b8b8 !important;
  --shiki-code-property: #74c6c5 !important;
  --shiki-code-punctuation: #b8b8b8 !important;
  --shiki-code-string: #e0b15e !important;
  --shiki-code-value: #c6b2c3 !important;
  --shiki-gutter-border-color: #1b1b1b !important;
  --shiki-gutter-text-color: #a0a0a0 !important;
  --shiki-gutter-text-color-highlight: #b8b8b8 !important;
  --shiki-highlight-green: rgba(173, 188, 176, 0.5) !important;
  --shiki-highlight-green-background: rgba(173, 188, 176, 0.1) !important;
  --shiki-highlight-neutral: #b8b8b8 !important;
  --shiki-highlight-red: rgba(237, 166, 165, 0.5) !important;
  --shiki-highlight-red-background: rgba(237, 166, 165, 0.1) !important;
  --shiki-terminal-dots-color: #a0a0a0 !important;
  --shiki-tooltip-background: #3f3f3f !important;
  --slider-thumb-border-color: black !important;
  --slider-track-background: #1b1b1b !important;
  --status-bar-background: #212121 !important;
  --status-bar-border-color: #070707 !important;
  --status-bar-text-color: #b8b8b8 !important;
  --sync-avatar-color-1: #eda6a5 !important;
  --sync-avatar-color-2: #e3ac97 !important;
  --sync-avatar-color-3: #e0b15e !important;
  --sync-avatar-color-4: #adbcb0 !important;
  --sync-avatar-color-5: #74c6c5 !important;
  --sync-avatar-color-6: #9fbbd8 !important;
  --sync-avatar-color-7: #c6b2c3 !important;
  --sync-avatar-color-8: #deaab8 !important;
  --tab-container-background: #2f2f2f !important;
  --tab-divider-color: black !important;
  --tab-outline-color: #070707 !important;
  --tab-switcher-background: #2f2f2f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2f2f, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%) !important;
  --tab-text-color: #b8b8b8 !important;
  --tab-text-color-active: #b8b8b8 !important;
  --tab-text-color-focused: #cdcdcd !important;
  --tab-text-color-focused-active: #b8b8b8 !important;
  --tab-text-color-focused-active-current: #cdcdcd !important;
  --tab-text-color-focused-highlighted: #c6b2c3 !important;
  --table-add-button-border-color: #1b1b1b !important;
  --table-background: rgba(0, 0, 0, 0.2) !important;
  --table-border-color: #1b1b1b !important;
  --table-drag-handle-background-active: #594054 !important;
  --table-drag-handle-color: #a0a0a0 !important;
  --table-drag-handle-color-active: #fafafa !important;
  --table-header-background: #594054 !important;
  --table-header-background-hover: #8e6787 !important;
  --table-header-border-color: #1b1b1b !important;
  --table-header-color: #fafafa !important;
  --table-header-size: 0.933em !important;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.2) !important;
  --table-row-background-hover: rgba(142, 103, 135, 0.2) !important;
  --table-selection: hsla(344, 30%, 51%, 0.1) !important;
  --table-selection-border-color: #594054 !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: hsla(344, 30%, 51%, 0.15) !important;
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15) !important;
  --tag-color: #c6b2c3 !important;
  --tag-color-hover: #c6b2c3 !important;
  --tag-padding-x: 0 !important;
  --tertiary: #d7c9d5 !important;
  --text-accent: #c6b2c3 !important;
  --text-accent-hover: #d7c9d5 !important;
  --text-error: #e68584 !important;
  --text-faint: #a0a0a0 !important;
  --text-highlight-bg: #c6b2c3 !important;
  --text-highlight-fg: #2f2f2f !important;
  --text-muted: #b8b8b8 !important;
  --text-normal: #cdcdcd !important;
  --text-on-accent: #fafafa !important;
  --text-selection: rgba(142, 103, 135, 0.2) !important;
  --text-selection-active: rgba(142, 103, 135, 0.01) !important;
  --text-success: #91a695 !important;
  --text-warning: #e3ac97 !important;
  --textHighlight: #c6b2c3 !important;
  --titleFont: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #2f2f2f !important;
  --titlebar-background-focused: #212121 !important;
  --titlebar-border-color: #1b1b1b !important;
  --titlebar-text-color: #b8b8b8 !important;
  --titlebar-text-color-focused: #cdcdcd !important;
  --vault-profile-color: #cdcdcd !important;
  --vault-profile-color-hover: #cdcdcd !important;
  --yellow-0: #f1d9a9 !important;
  --yellow-1: #ecc986 !important;
  --yellow-1-rgb: 241,217,169 !important;
  --yellow-2: #e0b15e !important;
  --yellow-2-rgb: 236,201,134 !important;
  --yellow-3: #c49a52 !important;
  --yellow-3-rgb: 196,154,82 !important;
  --yellow-4: #8d6e3b !important;
  --yellow-4-rgb: 141,110,59 !important;
  --yellow-5: #594525 !important;
  --yellow-bright: #fdfaf3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 47, 47);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(47, 47, 47);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(7, 7, 7);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 47, 47);
  border-left-color: rgb(7, 7, 7);
  color: rgb(205, 205, 205);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(127, 164, 202);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 164, 202) none 0px;
  text-decoration-color: rgb(127, 164, 202);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(222, 170, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 170, 184) none 0px;
  text-decoration-color: rgb(222, 170, 184);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(222, 170, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 170, 184) none 0px;
  text-decoration-color: rgb(222, 170, 184);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(127, 164, 202);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 164, 202) none 0px;
  text-decoration-color: rgb(127, 164, 202);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(198, 178, 195);
  color: rgb(47, 47, 47);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration-color: rgb(47, 47, 47);
}

html[saved-theme="dark"] body del {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(89, 64, 84);
  border-color: rgb(89, 64, 84);
}

html[saved-theme="dark"] body p {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(184, 184, 184) none 0px;
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline rgb(5, 128, 128);
  text-decoration-color: rgb(5, 128, 128);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline rgb(5, 128, 128);
  text-decoration-color: rgb(5, 128, 128);
}

html[saved-theme="dark"] body a.internal-link.broken {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(5, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(5, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(5, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(5, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(5, 128, 128);
  content: " ✎";
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(205, 205, 205) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration: underline dotted rgb(5, 128, 128);
  text-decoration-color: rgb(5, 128, 128);
  text-decoration-style: dotted;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body dt {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body table {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 181.844px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: rgb(250, 250, 250);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(89, 64, 84);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: rgb(159, 187, 216);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 177, 94);
  border-left-color: rgb(224, 177, 94);
  border-right-color: rgb(224, 177, 94);
  border-top-color: rgb(224, 177, 94);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(89, 64, 84);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(205, 205, 205);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(205, 205, 205);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(115, 115, 115);
  content: "-";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(167, 92, 112);
  content: "!";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: "?";
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 177, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 198, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: ">";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: "🧱";
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 166, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 166, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 166, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(159, 187, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 177, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 177, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(198, 178, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 166, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 188, 176);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(145, 166, 149);
  content: "👀";
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 188, 176);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 188, 176);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(92, 122, 98);
  content: "✓";
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 199, 178, 195;
  background: rgba(199, 178, 195, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(199, 178, 195, 0.1);
  border-bottom-color: rgba(199, 178, 195, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(199, 178, 195, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(199, 178, 195, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(199, 178, 195, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 180, 152, 175;
  background: rgba(180, 152, 175, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(180, 152, 175, 0.1);
  border-bottom-color: rgba(180, 152, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(180, 152, 175, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(180, 152, 175, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(180, 152, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="chat"] {
  --callout-color: 61, 126, 123;
  --table-border-color: color-mix(in srgb, rgb(61, 126, 123) 25%, #1e1e1e 50%);
  background-color: rgba(61, 126, 123, 0.1);
  border-bottom-color: rgba(61, 126, 123, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(61, 126, 123, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(61, 126, 123, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(61, 126, 123, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 230, 133, 132;
  background: rgba(230, 133, 132, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(230, 133, 132, 0.1);
  border-bottom-color: rgba(230, 133, 132, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(230, 133, 132, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(230, 133, 132, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(230, 133, 132, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 142, 103, 135;
  background: rgba(142, 103, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(142, 103, 135, 0.1);
  border-bottom-color: rgba(142, 103, 135, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(142, 103, 135, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(142, 103, 135, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(142, 103, 135, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="excerpt"] {
  --callout-color: 53, 120, 175;
  --table-border-color: color-mix(in srgb, rgb(53, 120, 175) 25%, #1e1e1e 50%);
  background-color: rgba(53, 120, 175, 0.1);
  border-bottom-color: rgba(53, 120, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(53, 120, 175, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(53, 120, 175, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(53, 120, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 211, 141, 159;
  background: rgba(211, 141, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(211, 141, 159, 0.1);
  border-bottom-color: rgba(211, 141, 159, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(211, 141, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(211, 141, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(211, 141, 159, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 111, 166, 211;
  background: rgba(111, 166, 211, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(111, 166, 211, 0.1);
  border-bottom-color: rgba(111, 166, 211, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(111, 166, 211, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(111, 166, 211, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(111, 166, 211, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 148, 189, 223;
  background: rgba(148, 189, 223, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(148, 189, 223, 0.1);
  border-bottom-color: rgba(148, 189, 223, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(148, 189, 223, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(148, 189, 223, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(148, 189, 223, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 89, 174, 170;
  background: rgba(89, 174, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(89, 174, 170, 0.1);
  border-bottom-color: rgba(89, 174, 170, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(89, 174, 170, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(89, 174, 170, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(89, 174, 170, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 53, 120, 175;
  background: rgba(53, 120, 175, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(53, 120, 175, 0.1);
  border-bottom-color: rgba(53, 120, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(53, 120, 175, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(53, 120, 175, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(53, 120, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="reference"] {
  --callout-color: 183, 183, 183;
  --table-border-color: color-mix(in srgb, rgb(183, 183, 183) 25%, #1e1e1e 50%);
  background-color: rgba(183, 183, 183, 0.1);
  border-bottom-color: rgba(183, 183, 183, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(183, 183, 183, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(183, 183, 183, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(183, 183, 183, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 139, 167, 145;
  background: rgba(139, 167, 145, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(139, 167, 145, 0.1);
  border-bottom-color: rgba(139, 167, 145, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(139, 167, 145, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(139, 167, 145, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(139, 167, 145, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 134, 196, 193;
  background: rgba(134, 196, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(134, 196, 193, 0.1);
  border-bottom-color: rgba(134, 196, 193, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(134, 196, 193, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(134, 196, 193, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(134, 196, 193, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="toc"] {
  --callout-color: 235, 235, 235;
  --table-border-color: color-mix(in srgb, rgb(235, 235, 235) 25%, #1e1e1e 50%);
  background-color: rgba(235, 235, 235, 0.1);
  border-bottom-color: rgba(235, 235, 235, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(235, 235, 235, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(235, 235, 235, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(235, 235, 235, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 111, 166, 211;
  background: rgba(111, 166, 211, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(111, 166, 211, 0.1);
  border-bottom-color: rgba(111, 166, 211, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(111, 166, 211, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(111, 166, 211, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(111, 166, 211, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 234, 175, 0;
  background: rgba(234, 175, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(234, 175, 0, 0.1);
  border-bottom-color: rgba(234, 175, 0, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(234, 175, 0, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(234, 175, 0, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(234, 175, 0, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 30);
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
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

html[saved-theme="dark"] body .callout[data-callout="chat"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="excerpt"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="reference"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="toc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(198, 178, 195);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 177, 94);
  font-family: "Architects Daughter";
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 177, 94);
  font-size: 32px;
  font-weight: 500;
}

html[saved-theme="dark"] body h2 {
  color: rgb(145, 166, 149);
  font-family: "Architects Daughter";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 177, 94);
  font-family: "Architects Daughter";
}

html[saved-theme="dark"] body h3 {
  color: rgb(65, 176, 176);
  font-family: "Architects Daughter";
}

html[saved-theme="dark"] body h4 {
  color: rgb(127, 164, 202);
  font-family: "Architects Daughter";
}

html[saved-theme="dark"] body h5 {
  color: rgb(179, 153, 174);
  font-family: "Architects Daughter";
}

html[saved-theme="dark"] body h6 {
  color: rgb(211, 141, 159);
  font-family: "Architects Daughter";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 148, 189, 223;
  border-bottom-color: rgba(148, 189, 223, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(148, 189, 223, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(148, 189, 223, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(148, 189, 223, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(205, 205, 205);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(184, 184, 184);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(160, 160, 160);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(47, 47, 47);
  border-color: rgb(205, 205, 205);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(27, 27, 27);
  color: rgb(250, 250, 250);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(27, 27, 27);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(27, 27, 27);
  border-left-width: 1px;
  border-right-color: rgb(27, 27, 27);
  border-right-width: 1px;
  border-top-color: rgb(27, 27, 27);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(184, 184, 184);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  margin-bottom: 0px;
  margin-left: 25px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(27, 27, 27);
  border-radius: 4px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(198, 178, 195);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body div#quartz-root {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(47, 47, 47);
  border-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(205, 205, 205);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(159, 187, 216);
  border-left-color: rgb(159, 187, 216);
  border-right-color: rgb(159, 187, 216);
  border-top-color: rgb(159, 187, 216);
  color: rgb(159, 187, 216);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body sub {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body summary {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body sup {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  color: rgb(198, 178, 195);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 344 !important;
  --accent-l: 51% !important;
  --accent-s: 30% !important;
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15) !important;
  --background-modifier-border: #cdcdcd !important;
  --background-modifier-border-focus: #b8b8b8 !important;
  --background-modifier-border-hover: #dbdbdb !important;
  --background-modifier-error: #c24c4a !important;
  --background-modifier-error-hover: #e68584 !important;
  --background-modifier-error-rgb: 194,76,74 !important;
  --background-modifier-form-field: #f8f8f8 !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: #f8f8f8 !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-modifier-info: #4575ae !important;
  --background-modifier-success: #5c7a62 !important;
  --background-modifier-success-rgb: 92,122,98 !important;
  --background-modifier-warning: #c49a52 !important;
  --background-modifier-warning-hover: #8d6e3b !important;
  --background-primary: #f8f8f8 !important;
  --background-primary-alt: #f1f1f1 !important;
  --background-secondary: #e3e3e3 !important;
  --background-secondary-alt: #ebebeb !important;
  --bases-cards-background: #f8f8f8 !important;
  --bases-cards-cover-background: #f1f1f1 !important;
  --bases-cards-shadow: 0 0 0 1px #cdcdcd !important;
  --bases-cards-shadow-hover: 0 0 0 1px #dbdbdb !important;
  --bases-embed-border-color: #cdcdcd !important;
  --bases-group-heading-property-color: #5d5d5d !important;
  --bases-table-border-color: #cdcdcd !important;
  --bases-table-cell-background-active: #f8f8f8 !important;
  --bases-table-cell-background-disabled: #f1f1f1 !important;
  --bases-table-cell-background-selected: hsla(344, 30%, 51%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b8b8b8 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8e6787 !important;
  --bases-table-group-background: #f1f1f1 !important;
  --bases-table-header-background: #f8f8f8 !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: #5d5d5d !important;
  --bases-table-row-background-hover: rgba(142, 103, 135, 0.05) !important;
  --bases-table-summary-background: #f8f8f8 !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: #adbcb0 !important;
  --blockquote-border-thickness: 0.05rem !important;
  --blue-0: #ceddeb !important;
  --blue-1: #bbd0e4 !important;
  --blue-1-rgb: 187,208,228 !important;
  --blue-2: #9fbbd8 !important;
  --blue-2-rgb: 159,187,216 !important;
  --blue-3: #7fa4ca !important;
  --blue-4: #4575ae !important;
  --blue-4-rgb: 69,117,174 !important;
  --blue-5: #2c496e !important;
  --blue-5-rgb: 44,73,110 !important;
  --blue-6: #1d3048 !important;
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent)) !important;
  --bodyFont: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #4575ae !important;
  --callout-border-opacity: 0.4;
  --callout-border-width: 0 0.05rem 0 0.1rem;
  --callout-bug: 194,76,74;
  --callout-content-padding: 0 8px;
  --callout-default: 69,117,174;
  --callout-error: 194,76,74;
  --callout-example: 142,103,135;
  --callout-fail: 194,76,74;
  --callout-important: 62,125,121;
  --callout-info: 69,117,174;
  --callout-padding: 0;
  --callout-question: 157,101,83;
  --callout-radius: 8px;
  --callout-success: 92,122,98;
  --callout-summary: 62,125,121;
  --callout-tip: 62,125,121;
  --callout-title-padding: 8px;
  --callout-todo: 69,117,174;
  --callout-warning: 157,101,83;
  --canvas-background: #f8f8f8 !important;
  --canvas-card-label-color: #a0a0a0 !important;
  --canvas-color-1: 194,76,74 !important;
  --canvas-color-2: 157,101,83 !important;
  --canvas-color-3: 196,154,82 !important;
  --canvas-color-4: 92,122,98 !important;
  --canvas-color-5: 62,125,121 !important;
  --canvas-color-6: 142,103,135 !important;
  --canvas-dot-pattern: #dbdbdb !important;
  --caret-color: #484848 !important;
  --checkbox-border-color: #a0a0a0 !important;
  --checkbox-border-color-hover: #5d5d5d !important;
  --checkbox-cancelled: #a0a0a0 !important;
  --checkbox-checked: #91a695 !important;
  --checkbox-color: #8e6787 !important;
  --checkbox-color-hover: #b399ae !important;
  --checkbox-deferred: #7fa4ca !important;
  --checkbox-hover: #dbdbdb !important;
  --checkbox-important: #c24c4a !important;
  --checkbox-in-progress: #41b0b0 !important;
  --checkbox-marker-color: #f8f8f8 !important;
  --checkbox-question: #c49a52 !important;
  --checkbox-review: #91a695 !important;
  --checklist-done-color: #5d5d5d !important;
  --code-background: #f1f1f1 !important;
  --code-border-color: #cdcdcd !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: #a0a0a0 !important;
  --code-function: #c49a52 !important;
  --code-important: #9d6553 !important;
  --code-keyword: #a75c70 !important;
  --code-normal: #4575ae !important;
  --code-operator: #c24c4a !important;
  --code-property: #058080 !important;
  --code-punctuation: #5d5d5d !important;
  --code-string: #5c7a62 !important;
  --code-tag: #c24c4a !important;
  --code-value: #8e6787 !important;
  --codeFont: Fira Code, Source Code Pro, Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #a0a0a0 !important;
  --collapse-icon-color-collapsed: #8e6787 !important;
  --color-accent: hsl(344, 30%, 51%) !important;
  --color-accent-1: hsl(343, 30.3%, 54.825%) !important;
  --color-accent-2: hsl(341, 30.6%, 58.65%) !important;
  --color-accent-hsl: 344, 30%, 51% !important;
  --color-base-00: #fafafa !important;
  --color-base-05: #f8f8f8 !important;
  --color-base-10: #f5f5f5 !important;
  --color-base-100: #212121 !important;
  --color-base-20: #f1f1f1 !important;
  --color-base-30: #dbdbdb !important;
  --color-base-35: #cdcdcd !important;
  --color-base-40: #b8b8b8 !important;
  --color-base-50: #a0a0a0 !important;
  --color-base-60: #737373 !important;
  --color-base-70: #5d5d5d !important;
  --color-blue: #4575ae !important;
  --color-blue-rgb: 69,117,174 !important;
  --color-cyan: #058080 !important;
  --color-cyan-rgb: 62,125,121 !important;
  --color-green: #5c7a62 !important;
  --color-green-rgb: 92,122,98 !important;
  --color-orange: #9d6553 !important;
  --color-orange-rgb: 157,101,83 !important;
  --color-pink: #a75c70 !important;
  --color-pink-rgb: 167,92,112 !important;
  --color-purple: #8e6787 !important;
  --color-purple-rgb: 142,103,135 !important;
  --color-red: #c24c4a !important;
  --color-red-rgb: 194,76,74 !important;
  --color-yellow: #c49a52 !important;
  --color-yellow-rgb: 196,154,82 !important;
  --cyan-0: #bbe3e3 !important;
  --cyan-1: #9fd8d8 !important;
  --cyan-1-rgb: 187,210,209 !important;
  --cyan-2: #74c6c5 !important;
  --cyan-2-rgb: 158,190,188 !important;
  --cyan-3: #41b0b0 !important;
  --cyan-4: #058080 !important;
  --cyan-4-rgb: 62,125,121 !important;
  --cyan-5: #03616E !important;
  --cyan-5-rgb: 3, 97, 110 !important;
  --cyan-6: #024448 !important;
  --dark: #484848 !important;
  --darkgray: #484848 !important;
  --day-planner-progress-bg: #f8f8f8 !important;
  --day-planner-progress-fg: #c5d0c8 !important;
  --divider-color: #b8b8b8 !important;
  --divider-color-hover: #8e6787 !important;
  --dropdown-background: #f1f1f1 !important;
  --dropdown-background-hover: #d7c9d5 !important;
  --ebw-calendar-month: #5c7a62 !important;
  --ebw-calendar-year: #8e6787 !important;
  --ebw-callout-abstract: 88, 64, 84 !important;
  --ebw-callout-bug: 180, 152, 175 !important;
  --ebw-callout-chat: 61, 126, 123 !important;
  --ebw-callout-danger: 167, 92, 112 !important;
  --ebw-callout-example: 142, 103, 135 !important;
  --ebw-callout-failure: 211, 141, 159 !important;
  --ebw-callout-info: 53, 119, 174 !important;
  --ebw-callout-note: 33, 75, 109 !important;
  --ebw-callout-question: 89, 174, 170 !important;
  --ebw-callout-quote: 53, 120, 175 !important;
  --ebw-callout-reference: 137, 137, 137 !important;
  --ebw-callout-success: 92, 122, 99 !important;
  --ebw-callout-tip: 61, 126, 123 !important;
  --ebw-callout-toc: 159, 159, 159 !important;
  --ebw-callout-warning: 234, 175, 0 !important;
  --ebw-embed-border-color: #d7c9d5 !important;
  --ebw-font-callout-title: 'Architects Daughter' !important;
  --ebw-font-monospace: 'Fira Code', 'Source Code Pro', Jetbrains Mono !important;
  --ebw-font-tags: 'Architects Daughter' !important;
  --ebw-font-text: 'IBM Plex Sans', Helvetica Neue !important;
  --ebw-he-title-border: #737373 !important;
  --ebw-header-font: 'Architects Daughter' !important;
  --ebw-header-font-caps-variant: normal !important;
  --ebw-header-modifier: 1.4 !important;
  --ebw-link-hidden: #74c6c5 !important;
  --ebw-link-underline: #41b0b0 !important;
  --ebw-p-modifier: 1 !important;
  --ebw-row-alt: rgba(0, 0, 0, 0.05) !important;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.05) !important;
  --ebw-strong-em: #c49a52 !important;
  --ebw-tab-title-active-bg: #5c7a62 !important;
  --ebw-tab-title-active-fg: white !important;
  --ebw-tab-title-active-focused-bg: #8e6787 !important;
  --ebw-tab-title-inactive-bg: #737373 !important;
  --ebw-table-header-alt: rgba(142, 103, 135, 0.4) !important;
  --ebw-today-hover: #484848 !important;
  --ebw-today-text: #8e6787 !important;
  --embed-block-shadow-hover: 0 0 0 1px #cdcdcd, inset 0 0 0 1px #cdcdcd !important;
  --embed-border-left: 0.0625rem solid #d7c9d5 !important;
  --embed-border-right: 0.0625rem solid #d7c9d5 !important;
  --embed-border-start: 2px solid #8e6787 !important;
  --embed-padding: 2px 8px !important;
  --file-header-background: #f8f8f8 !important;
  --file-header-background-focused: #f8f8f8 !important;
  --file-header-font: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 8px 32px !important;
  --flair-background: #f1f1f1 !important;
  --flair-color: #484848 !important;
  --font-interface: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue !important;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono !important;
  --font-monospace: Fira Code, Source Code Pro, Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono !important;
  --font-print: IBM Plex Sans, Helvetica Neue, Arial' !important;
  --font-text: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue !important;
  --footnote-divider-color: #e3e3e3 !important;
  --footnote-id-color: #5d5d5d !important;
  --footnote-id-color-no-occurrences: #a0a0a0 !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --graph-line: #cdcdcd !important;
  --graph-node: #c6b2c3 !important;
  --graph-node-attachment: #adbcb0 !important;
  --graph-node-focused: #ecc986 !important;
  --graph-node-tag: #91a695 !important;
  --graph-node-unresolved: #b8b8b8 !important;
  --graph-text: #484848 !important;
  --gray: #b8b8b8 !important;
  --gray-dark-1: #a0a0a0 !important;
  --gray-dark-10: #070707 !important;
  --gray-dark-2: #898989 !important;
  --gray-dark-3: #737373 !important;
  --gray-dark-4: #5d5d5d !important;
  --gray-dark-5: #484848 !important;
  --gray-dark-6: #3f3f3f !important;
  --gray-dark-7: #2f2f2f !important;
  --gray-dark-75: #272727 !important;
  --gray-dark-8: #212121 !important;
  --gray-dark-85: #1e1e1e !important;
  --gray-dark-9: #1b1b1b !important;
  --gray-light-1: #cdcdcd !important;
  --gray-light-2: #dbdbdb !important;
  --gray-light-3: #e3e3e3 !important;
  --gray-light-4: #ebebeb !important;
  --gray-light-5: #f1f1f1 !important;
  --gray-light-6: #f5f5f5 !important;
  --gray-light-7: #f8f8f8 !important;
  --gray-light-8: #fafafa !important;
  --green-0: #d6ddd7 !important;
  --green-1: #c5d0c8 !important;
  --green-1-rgb: 197,208,200 !important;
  --green-2: #adbcb0 !important;
  --green-2-rgb: 173,188,176 !important;
  --green-3: #91a695 !important;
  --green-4: #5c7a62 !important;
  --green-4-rgb: 92,122,98 !important;
  --green-5: #3a4d3e !important;
  --green-5-rgb: 58,77,62 !important;
  --green-6: #263228 !important;
  --h1-color: #c49a52 !important;
  --h1-font: 'Architects Daughter' !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 2em !important;
  --h1-variant: common-ligatures !important;
  --h1-weight: 500 !important;
  --h2-color: #5c7a62 !important;
  --h2-font: 'Architects Daughter' !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.8em !important;
  --h2-variant: common-ligatures !important;
  --h2-weight: 500 !important;
  --h3-color: #41b0b0 !important;
  --h3-font: 'Architects Daughter' !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.6em !important;
  --h3-variant: common-ligatures !important;
  --h3-weight: 500 !important;
  --h4-color: #4575ae !important;
  --h4-font: 'Architects Daughter' !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.4em !important;
  --h4-variant: common-ligatures !important;
  --h4-weight: 500 !important;
  --h5-color: #8e6787 !important;
  --h5-font: 'Architects Daughter' !important;
  --h5-size: 1.2em !important;
  --h5-variant: common-ligatures !important;
  --h5-weight: 500 !important;
  --h6-color: #a75c70 !important;
  --h6-font: 'Architects Daughter' !important;
  --h6-size: 1.2em !important;
  --h6-variant: common-ligatures !important;
  --h6-weight: 500 !important;
  --he-text-on-accent-active: #f1f1f1 !important;
  --he-text-on-accent-inactive: #484848 !important;
  --he-title-bar-active-bg: #91a695 !important;
  --he-title-bar-active-fg: white !important;
  --he-title-bar-active-pinned-bg: #b399ae !important;
  --he-title-bar-height: 22px !important;
  --he-title-bar-inactive-bg: #a0a0a0 !important;
  --he-title-bar-inactive-fg: #f1f1f1 !important;
  --he-title-bar-inactive-pinned-bg: #a0a0a0 !important;
  --he-view-header-height: 22px !important;
  --headerFont: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #a0a0a0 !important;
  --heading-spacing: 22.4px !important;
  --highlight: rgba(142, 103, 135, 0.2) !important;
  --hr-color: #cdcdcd !important;
  --icon-color: #5d5d5d !important;
  --icon-color-active: #8e6787 !important;
  --icon-color-focused: #484848 !important;
  --icon-color-hover: #5d5d5d !important;
  --inline-title-color: #c49a52 !important;
  --inline-title-font: 'Architects Daughter' !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 2em !important;
  --inline-title-variant: common-ligatures !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #a0a0a0 !important;
  --input-placeholder-color: #a0a0a0 !important;
  --interactive-accent: #8e6787 !important;
  --interactive-accent-hover: #b399ae !important;
  --interactive-accent-hsl: 344, 30%, 51% !important;
  --interactive-disabled: #e3e3e3 !important;
  --interactive-hover: #d7c9d5 !important;
  --interactive-normal: #f1f1f1 !important;
  --interactive-toggle: #91a695 !important;
  --italic-color: #a75c70 !important;
  --light: #f8f8f8 !important;
  --lightgray: #e3e3e3 !important;
  --link-color: #737373 !important;
  --link-color-hover: #058080 !important;
  --link-external-color: #737373 !important;
  --link-external-color-hover: #058080 !important;
  --link-unresolved-color: #737373 !important;
  --link-unresolved-decoration-color: #41b0b0 !important;
  --link-unresolved-decoration-style: dotted !important;
  --link-unresolved-opacity: 0.9 !important;
  --list-marker-color: #a0a0a0 !important;
  --list-marker-color-collapsed: #8e6787 !important;
  --list-marker-color-hover: #5d5d5d !important;
  --menu-background: #e3e3e3 !important;
  --menu-border-color: #dbdbdb !important;
  --metadata-border-color: #cdcdcd !important;
  --metadata-border-radius: 4px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #e3e3e3 !important;
  --metadata-divider-width: 1px !important;
  --metadata-gap: 0 !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-input-font: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #484848 !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-font: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #5d5d5d !important;
  --metadata-label-text-color-hover: #5d5d5d !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b8b8b8 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #dbdbdb !important;
  --metadata-property-radius: 4px !important;
  --modal-background: #f8f8f8 !important;
  --modal-border-color: #b8b8b8 !important;
  --modifier-text: white !important;
  --modifier-text-accent: #f8f8f8 !important;
  --nav-collapse-icon-color: #a0a0a0 !important;
  --nav-collapse-icon-color-collapsed: #a0a0a0 !important;
  --nav-heading-color: #484848 !important;
  --nav-heading-color-collapsed: #a0a0a0 !important;
  --nav-heading-color-collapsed-hover: #5d5d5d !important;
  --nav-heading-color-hover: #484848 !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: hsla(344, 30%, 51%, 0.15) !important;
  --nav-item-color: #5d5d5d !important;
  --nav-item-color-active: #484848 !important;
  --nav-item-color-highlighted: #8e6787 !important;
  --nav-item-color-hover: #484848 !important;
  --nav-item-color-selected: #484848 !important;
  --nav-tag-color: #a0a0a0 !important;
  --nav-tag-color-active: #5d5d5d !important;
  --nav-tag-color-hover: #5d5d5d !important;
  --orange-0: #f1d6cb !important;
  --orange-1: #ecc5b7 !important;
  --orange-1-rgb: 236,197,183 !important;
  --orange-2: #e3ac97 !important;
  --orange-2-rgb: 227,172,151 !important;
  --orange-3: #da8d73 !important;
  --orange-4: #9d6553 !important;
  --orange-4-rgb: 157,101,83 !important;
  --orange-5: #633f34 !important;
  --orange-5-rgb: 99,63,52 !important;
  --orange-6: #412922 !important;
  --p-spacing: 16px !important;
  --pdf-background: #f8f8f8 !important;
  --pdf-page-background: #f8f8f8 !important;
  --pdf-sidebar-background: #f8f8f8 !important;
  --pill-border-color: #cdcdcd !important;
  --pill-border-color-hover: #dbdbdb !important;
  --pill-color: #5d5d5d !important;
  --pill-color-hover: #484848 !important;
  --pill-color-remove: #a0a0a0 !important;
  --pill-color-remove-hover: #8e6787 !important;
  --pink-0: #efd5dc !important;
  --pink-1: #e8c4ce !important;
  --pink-1-rgb: 232,196,206 !important;
  --pink-2: #deaab8 !important;
  --pink-2-rgb: 222,170,184 !important;
  --pink-3: #d38d9f !important;
  --pink-4: #a75c70 !important;
  --pink-4-rgb: 167,92,112 !important;
  --pink-5: #693a46 !important;
  --pink-5-rgb: 105,58,70 !important;
  --pink-6: #45262e !important;
  --primary-accent-0: #e2d9e1 !important;
  --primary-accent-1: #d7c9d5 !important;
  --primary-accent-1-rgb: 215,201,213 !important;
  --primary-accent-2: #c6b2c3 !important;
  --primary-accent-3: #b399ae !important;
  --primary-accent-4: #8e6787 !important;
  --primary-accent-4-rgb: 142,103,135 !important;
  --primary-accent-5: #594054 !important;
  --primary-accent-6: #392a37 !important;
  --prompt-background: #f8f8f8 !important;
  --prompt-border-color: #b8b8b8 !important;
  --purple-0: #e2d9e1 !important;
  --purple-1: #d7c9d5 !important;
  --purple-1-rgb: 215,201,213 !important;
  --purple-2: #c6b2c3 !important;
  --purple-2-rgb: 198,178,195 !important;
  --purple-3: #b399ae !important;
  --purple-4: #8e6787 !important;
  --purple-4-rgb: 142,103,135 !important;
  --purple-5: #594054 !important;
  --purple-5-rgb: 89,64,84 !important;
  --purple-6: #392a37 !important;
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent)) !important;
  --red-0: #f6d3d3 !important;
  --red-1: #f3c2c1 !important;
  --red-1-rgb: 243,194,193 !important;
  --red-2: #eda6a5 !important;
  --red-2-rgb: 237,166,165 !important;
  --red-3: #e68584 !important;
  --red-3-rgb: 230,133,132 !important;
  --red-4: #c24c4a !important;
  --red-4-rgb: 194,76,74 !important;
  --red-5: #7a302f !important;
  --red-5-rgb: 122,48,47 !important;
  --red-6: #50201f !important;
  --ribbon-background: #ebebeb !important;
  --ribbon-background-collapsed: #ebebeb !important;
  --search-clear-button-color: #5d5d5d !important;
  --search-icon-color: #5d5d5d !important;
  --search-result-background: #f8f8f8 !important;
  --secondary: #8e6787 !important;
  --secondary-accent-0: #d6ddd7 !important;
  --secondary-accent-1: #c5d0c8 !important;
  --secondary-accent-1-rgb: 197,208,200 !important;
  --secondary-accent-2: #adbcb0 !important;
  --secondary-accent-3: #91a695 !important;
  --secondary-accent-4: #5c7a62 !important;
  --secondary-accent-4-rgb: 92,122,98 !important;
  --secondary-accent-5: #3a4d3e !important;
  --secondary-accent-6: #263228 !important;
  --setting-group-heading-color: #484848 !important;
  --setting-items-background: #f1f1f1 !important;
  --setting-items-border-color: #cdcdcd !important;
  --shiki-active-tab-border-color: #5d5d5d !important;
  --shiki-code-background: #f1f1f1 !important;
  --shiki-code-block-spacing: 16px !important;
  --shiki-code-comment: #a0a0a0 !important;
  --shiki-code-function: #5c7a62 !important;
  --shiki-code-important: #9d6553 !important;
  --shiki-code-keyword: #a75c70 !important;
  --shiki-code-normal: #5d5d5d !important;
  --shiki-code-property: #058080 !important;
  --shiki-code-punctuation: #5d5d5d !important;
  --shiki-code-string: #c49a52 !important;
  --shiki-code-value: #8e6787 !important;
  --shiki-gutter-border-color: #cdcdcd !important;
  --shiki-gutter-text-color: #a0a0a0 !important;
  --shiki-gutter-text-color-highlight: #5d5d5d !important;
  --shiki-highlight-green: rgba(92, 122, 98, 0.5) !important;
  --shiki-highlight-green-background: rgba(92, 122, 98, 0.1) !important;
  --shiki-highlight-neutral: #5d5d5d !important;
  --shiki-highlight-red: rgba(194, 76, 74, 0.5) !important;
  --shiki-highlight-red-background: rgba(194, 76, 74, 0.1) !important;
  --shiki-terminal-dots-color: #a0a0a0 !important;
  --show-whitespace-color: #dbdbdb !important;
  --slider-thumb-border-color: #dbdbdb !important;
  --slider-track-background: #cdcdcd !important;
  --status-bar-background: #ebebeb !important;
  --status-bar-border-color: #b8b8b8 !important;
  --status-bar-text-color: #5d5d5d !important;
  --suggestion-background: #f8f8f8 !important;
  --sync-avatar-color-1: #c24c4a !important;
  --sync-avatar-color-2: #9d6553 !important;
  --sync-avatar-color-3: #c49a52 !important;
  --sync-avatar-color-4: #5c7a62 !important;
  --sync-avatar-color-5: #058080 !important;
  --sync-avatar-color-6: #4575ae !important;
  --sync-avatar-color-7: #8e6787 !important;
  --sync-avatar-color-8: #a75c70 !important;
  --tab-background-active: #f8f8f8 !important;
  --tab-container-background: #e3e3e3 !important;
  --tab-divider-color: #dbdbdb !important;
  --tab-outline-color: #b8b8b8 !important;
  --tab-switcher-background: #e3e3e3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%) !important;
  --tab-text-color: #5d5d5d !important;
  --tab-text-color-active: #5d5d5d !important;
  --tab-text-color-focused: #484848 !important;
  --tab-text-color-focused-active: #5d5d5d !important;
  --tab-text-color-focused-active-current: #484848 !important;
  --tab-text-color-focused-highlighted: #8e6787 !important;
  --table-add-button-border-color: #cdcdcd !important;
  --table-background: rgba(0, 0, 0, 0.05) !important;
  --table-border-color: #cdcdcd !important;
  --table-drag-handle-background-active: #8e6787 !important;
  --table-drag-handle-color: #a0a0a0 !important;
  --table-drag-handle-color-active: #fafafa !important;
  --table-header-background: #d7c9d5 !important;
  --table-header-background-hover: rgba(142, 103, 135, 0.4) !important;
  --table-header-border-color: #b399ae !important;
  --table-header-color: #2f2f2f !important;
  --table-header-size: 0.933em !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.05) !important;
  --table-row-background-hover: rgba(142, 103, 135, 0.05) !important;
  --table-selection: hsla(344, 30%, 51%, 0.1) !important;
  --table-selection-border-color: #8e6787 !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: hsla(344, 30%, 51%, 0.15) !important;
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15) !important;
  --tag-color: #8e6787 !important;
  --tag-color-hover: #8e6787 !important;
  --tag-padding-x: 0 !important;
  --tertiary: #594054 !important;
  --text-accent: #8e6787 !important;
  --text-accent-hover: #594054 !important;
  --text-error: #c24c4a !important;
  --text-faint: #a0a0a0 !important;
  --text-highlight-bg: rgba(142, 103, 135, 0.2) !important;
  --text-highlight-bg-rgb: 142,103,135 !important;
  --text-highlight-fg: #2f2f2f !important;
  --text-muted: #5d5d5d !important;
  --text-normal: #484848 !important;
  --text-on-accent: #fafafa !important;
  --text-selection: rgba(92, 122, 98, 0.2) !important;
  --text-success: #5c7a62 !important;
  --text-warning: #9d6553 !important;
  --textHighlight: rgba(142, 103, 135, 0.2) !important;
  --titleFont: IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #e3e3e3 !important;
  --titlebar-background-focused: #ebebeb !important;
  --titlebar-border-color: #cdcdcd !important;
  --titlebar-text-color: #5d5d5d !important;
  --titlebar-text-color-focused: #484848 !important;
  --vault-profile-color: #484848 !important;
  --vault-profile-color-hover: #484848 !important;
  --yellow-0: #f1d9a9 !important;
  --yellow-1: #ecc986 !important;
  --yellow-1-rgb: 241,217,169 !important;
  --yellow-2: #e0b15e !important;
  --yellow-2-rgb: 236,201,134 !important;
  --yellow-3: #c49a52 !important;
  --yellow-3-rgb: 196,154,82 !important;
  --yellow-4: #8d6e3b !important;
  --yellow-4-rgb: 141,110,59 !important;
  --yellow-5: #594525 !important;
  --yellow-bright: #fdfaf3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(227, 227, 227);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(227, 227, 227);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(184, 184, 184);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(227, 227, 227);
  border-left-color: rgb(184, 184, 184);
  color: rgb(72, 72, 72);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(69, 117, 174);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 117, 174) none 0px;
  text-decoration-color: rgb(69, 117, 174);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(167, 92, 112);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 92, 112) none 0px;
  text-decoration-color: rgb(167, 92, 112);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(167, 92, 112);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 92, 112) none 0px;
  text-decoration-color: rgb(167, 92, 112);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(69, 117, 174);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 117, 174) none 0px;
  text-decoration-color: rgb(69, 117, 174);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(142, 103, 135, 0.2);
  color: rgb(47, 47, 47);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration-color: rgb(47, 47, 47);
}

html[saved-theme="light"] body del {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(72, 72, 72) none 0px;
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(160, 160, 160);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(142, 103, 135);
  border-color: rgb(142, 103, 135);
}

html[saved-theme="light"] body p {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 93, 93) none 0px;
  text-decoration-color: rgb(93, 93, 93);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(115, 115, 115);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: underline rgb(65, 176, 176);
  text-decoration-color: rgb(65, 176, 176);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(115, 115, 115);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: underline rgb(65, 176, 176);
  text-decoration-color: rgb(65, 176, 176);
}

html[saved-theme="light"] body a.internal-link.broken {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(65, 176, 176);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(65, 176, 176);
  border-left-width: 0px;
  border-right-color: rgb(65, 176, 176);
  border-right-width: 0px;
  border-top-color: rgb(65, 176, 176);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(65, 176, 176);
  content: " ✎";
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(115, 115, 115) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration: underline dotted rgb(65, 176, 176);
  text-decoration-color: rgb(65, 176, 176);
  text-decoration-style: dotted;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body dt {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ol > li {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ul > li {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(160, 160, 160);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body table {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 181.844px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(179, 153, 174);
  border-left-color: rgb(179, 153, 174);
  border-right-color: rgb(179, 153, 174);
  border-top-color: rgb(179, 153, 174);
  color: rgb(47, 47, 47);
}

html[saved-theme="light"] body tr {
  background-color: rgb(215, 201, 213);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(241, 241, 241);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(69, 117, 174);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(241, 241, 241);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body figcaption {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(196, 154, 82);
  border-left-color: rgb(196, 154, 82);
  border-right-color: rgb(196, 154, 82);
  border-top-color: rgb(196, 154, 82);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(241, 241, 241);
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(142, 103, 135);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(72, 72, 72);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(72, 72, 72);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(160, 160, 160);
  content: "-";
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(194, 76, 74);
  content: "!";
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: "?";
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(160, 160, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 154, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(5, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: ">";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: "🧱";
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 76, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 76, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 76, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 117, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 154, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 154, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(142, 103, 135);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 76, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 122, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(145, 166, 149);
  content: "👀";
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 122, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 122, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(145, 166, 149);
  content: "✓";
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 88, 64, 84;
  background: rgba(88, 64, 84, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(88, 64, 84, 0.1);
  border-bottom-color: rgba(88, 64, 84, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(88, 64, 84, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(88, 64, 84, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(88, 64, 84, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 180, 152, 175;
  background: rgba(180, 152, 175, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(180, 152, 175, 0.1);
  border-bottom-color: rgba(180, 152, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(180, 152, 175, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(180, 152, 175, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(180, 152, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="chat"] {
  --callout-color: 61, 126, 123;
  --table-border-color: color-mix(in srgb, rgb(61, 126, 123) 25%, #f8f8f8 50%);
  background-color: rgba(61, 126, 123, 0.1);
  border-bottom-color: rgba(61, 126, 123, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(61, 126, 123, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(61, 126, 123, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(61, 126, 123, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 167, 92, 112;
  background: rgba(167, 92, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(167, 92, 112, 0.1);
  border-bottom-color: rgba(167, 92, 112, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(167, 92, 112, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(167, 92, 112, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(167, 92, 112, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 142, 103, 135;
  background: rgba(142, 103, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(142, 103, 135, 0.1);
  border-bottom-color: rgba(142, 103, 135, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(142, 103, 135, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(142, 103, 135, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(142, 103, 135, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="excerpt"] {
  --callout-color: 53, 120, 175;
  --table-border-color: color-mix(in srgb, rgb(53, 120, 175) 25%, #f8f8f8 50%);
  background-color: rgba(53, 120, 175, 0.1);
  border-bottom-color: rgba(53, 120, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(53, 120, 175, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(53, 120, 175, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(53, 120, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 211, 141, 159;
  background: rgba(211, 141, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(211, 141, 159, 0.1);
  border-bottom-color: rgba(211, 141, 159, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(211, 141, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(211, 141, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(211, 141, 159, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 53, 119, 174;
  background: rgba(53, 119, 174, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(53, 119, 174, 0.1);
  border-bottom-color: rgba(53, 119, 174, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(53, 119, 174, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(53, 119, 174, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(53, 119, 174, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 33, 75, 109;
  background: rgba(33, 75, 109, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(33, 75, 109, 0.1);
  border-bottom-color: rgba(33, 75, 109, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(33, 75, 109, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(33, 75, 109, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(33, 75, 109, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 89, 174, 170;
  background: rgba(89, 174, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(89, 174, 170, 0.1);
  border-bottom-color: rgba(89, 174, 170, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(89, 174, 170, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(89, 174, 170, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(89, 174, 170, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 53, 120, 175;
  background: rgba(53, 120, 175, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(53, 120, 175, 0.1);
  border-bottom-color: rgba(53, 120, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(53, 120, 175, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(53, 120, 175, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(53, 120, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="reference"] {
  --callout-color: 137, 137, 137;
  --table-border-color: color-mix(in srgb, rgb(137, 137, 137) 25%, #f8f8f8 50%);
  background-color: rgba(137, 137, 137, 0.1);
  border-bottom-color: rgba(137, 137, 137, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(137, 137, 137, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(137, 137, 137, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(137, 137, 137, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 92, 122, 99;
  background: rgba(92, 122, 99, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(92, 122, 99, 0.1);
  border-bottom-color: rgba(92, 122, 99, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(92, 122, 99, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(92, 122, 99, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(92, 122, 99, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 61, 126, 123;
  background: rgba(61, 126, 123, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(61, 126, 123, 0.1);
  border-bottom-color: rgba(61, 126, 123, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(61, 126, 123, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(61, 126, 123, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(61, 126, 123, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="toc"] {
  --callout-color: 159, 159, 159;
  --table-border-color: color-mix(in srgb, rgb(159, 159, 159) 25%, #f8f8f8 50%);
  background-color: rgba(159, 159, 159, 0.1);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(159, 159, 159, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 53, 119, 174;
  background: rgba(53, 119, 174, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(53, 119, 174, 0.1);
  border-bottom-color: rgba(53, 119, 174, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(53, 119, 174, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(53, 119, 174, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(53, 119, 174, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 234, 175, 0;
  background: rgba(234, 175, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(234, 175, 0, 0.1);
  border-bottom-color: rgba(234, 175, 0, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(234, 175, 0, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(234, 175, 0, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(234, 175, 0, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(61, 126, 123);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
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

html[saved-theme="light"] body .callout[data-callout="chat"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="excerpt"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="reference"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="toc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(72, 72, 72) none 0px;
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(227, 227, 227);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(142, 103, 135);
}

html[saved-theme="light"] body h1 {
  color: rgb(196, 154, 82);
  font-family: "Architects Daughter";
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(196, 154, 82);
  font-size: 32px;
  font-weight: 500;
}

html[saved-theme="light"] body h2 {
  color: rgb(92, 122, 98);
  font-family: "Architects Daughter";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(196, 154, 82);
  font-family: "Architects Daughter";
}

html[saved-theme="light"] body h3 {
  color: rgb(65, 176, 176);
  font-family: "Architects Daughter";
}

html[saved-theme="light"] body h4 {
  color: rgb(69, 117, 174);
  font-family: "Architects Daughter";
}

html[saved-theme="light"] body h5 {
  color: rgb(142, 103, 135);
  font-family: "Architects Daughter";
}

html[saved-theme="light"] body h6 {
  color: rgb(167, 92, 112);
  font-family: "Architects Daughter";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 33, 75, 109;
  border-bottom-color: rgba(33, 75, 109, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(33, 75, 109, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(33, 75, 109, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(33, 75, 109, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(72, 72, 72);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(235, 235, 235);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(93, 93, 93);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(93, 93, 93);
  stroke: rgb(93, 93, 93);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(160, 160, 160);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(248, 248, 248);
  border-color: rgb(72, 72, 72);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(179, 153, 174);
  color: rgb(47, 47, 47);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(205, 205, 205);
  border-left-width: 1px;
  border-right-color: rgb(205, 205, 205);
  border-right-width: 1px;
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(93, 93, 93);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  margin-bottom: 0px;
  margin-left: 25px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(205, 205, 205);
  border-radius: 4px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(142, 103, 135);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(227, 227, 227);
  border-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(72, 72, 72);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(235, 235, 235);
  border-bottom-color: rgb(69, 117, 174);
  border-left-color: rgb(69, 117, 174);
  border-right-color: rgb(69, 117, 174);
  border-top-color: rgb(69, 117, 174);
  color: rgb(69, 117, 174);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body sub {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body summary {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body sup {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  color: rgb(142, 103, 135);
}`,
  },
};
