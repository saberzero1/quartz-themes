import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.notion",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #708dbb !important;
  --accent-color: 66, 180, 224 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #A8ABAC !important;
  --accent2-lite: #2EA1CF !important;
  --aside-bg: #2F3437 !important;
  --background-modifier-active-hover: #4B5053 !important;
  --background-modifier-border: #4C5153 !important;
  --background-modifier-border-focus: #708dbb !important;
  --background-modifier-border-hover: #3C4144 !important;
  --background-modifier-cover: #0f0f0f33 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #0f0f0f33 !important;
  --background-modifier-form-field-hover: #0f0f0f33 !important;
  --background-modifier-hover: rgba(45, 170, 219, 0.3) !important;
  --background-modifier-message: #4B5053 !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #2F3437 !important;
  --background-primary-alt: #3F4447 !important;
  --background-secondary: #373C3F !important;
  --background-secondary-alt: #3F4447 !important;
  --bases-cards-background: #2F3437 !important;
  --bases-cards-cover-background: #3F4447 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #4C5153 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3C4144 !important;
  --bases-embed-border-color: #4C5153 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #A8ABAC !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #2F3437 !important;
  --bases-table-cell-background-active: #2F3437 !important;
  --bases-table-cell-background-disabled: #3F4447 !important;
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #708dbb !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4B5053 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #3F4447 !important;
  --bases-table-header-background: #2F3437 !important;
  --bases-table-header-background-hover: rgba(45, 170, 219, 0.3) !important;
  --bases-table-header-color: #A8ABAC !important;
  --bases-table-row-background-hover: rgb(255, 255, 255, 0.1) !important;
  --bases-table-summary-background: #2F3437 !important;
  --bases-table-summary-background-hover: rgba(45, 170, 219, 0.3) !important;
  --bg: #3C4144 !important;
  --blockquote-background-color: #3F4447 !important;
  --blockquote-border-color: #3C4144 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #EBEBEB !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #3F4447 65%, transparent) linear-gradient(#3F4447, color-mix(in srgb, #3F4447 65%, transparent)) !important;
  --bodyFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #0f0f0f40 !important;
  --box-border-m: 3px solid #0f0f0f40 !important;
  --box-border-s: 1px solid #0f0f0f40 !important;
  --bttn: #43B3E0 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #43B3E0 !important;
  --button-background-hover: #5D6265 !important;
  --button-border: #43B3E0 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: white !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #2F3437 !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 88, 100, 159 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #EBEBEB !important;
  --chbx-B: 136, 94, 233 !important;
  --chbx-C: 207, 67, 67 !important;
  --chbx-I: 82, 139, 212 !important;
  --chbx-N: 133, 91, 65 !important;
  --chbx-P: 79, 165, 79 !important;
  --chbx-R: 170, 179, 202 !important;
  --chbx-a: 248, 114, 181 !important;
  --chbx-b: 230, 129, 63 !important;
  --chbx-c: 149, 233, 238 !important;
  --chbx-d: 62, 69, 82 !important;
  --chbx-h: 92, 118, 153 !important;
  --chbx-i: 194, 42, 42 !important;
  --chbx-id: 231, 231, 171 !important;
  --chbx-q: 253, 175, 0 !important;
  --chbx-r: 249, 190, 123 !important;
  --checkbox-border-color: #708dbb !important;
  --checkbox-border-color-hover: #4B5053 !important;
  --checkbox-color: #708dbb !important;
  --checkbox-color-hover: #4B5053 !important;
  --checkbox-marker-color: #2F3437 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #5D6265 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #3C4144 !important;
  --code-bg: #3C4144 !important;
  --code-border-color: #4C5153 !important;
  --code-bracket-background: rgba(45, 170, 219, 0.3) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #EBEBEB !important;
  --code-punctuation: #A8ABAC !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #0f0f0f40 !important;
  --code-size: .90em !important;
  --code-text: #EBEBEB !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #5D6265 !important;
  --color-accent: hsl(0, 49%, 49%) !important;
  --color-accent-1: hsl(-3, 49.98%, 56.35%) !important;
  --color-accent-2: hsl(-5, 51.45%, 63.21%) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #EBEBEB !important;
  --dark-accent: #4B5053 !important;
  --dark-sidebar: #373C3F !important;
  --darkgray: #EBEBEB !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(66, 180, 224, 0.1) !important;
  --dataview-th-background: #3F4447 !important;
  --dataview-th-border-bottom: 2px solid #EBEBEB !important;
  --dataview-th-color: #EBEBEB !important;
  --dataview-th-count-color: #EBEBEB !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #3F4447 !important;
  --divider-color: #3F4447 !important;
  --divider-color-hover: #708dbb !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #4B5053 !important;
  --drag-ghost-text-color: white !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: #3F4447 !important;
  --dropdown-background-hover: #5D6265 !important;
  --embed-bg: #3F4447 !important;
  --embed-block-shadow-hover: 2px 2px 0 #0f0f0f40 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #0f0f0f40 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #0f0f0f40 !important;
  --embed-border-left: 2px solid #EBEBEB !important;
  --embed-border-left-color: #EBEBEB !important;
  --embed-border-left-color-hover: #EBEBEB !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #0f0f0f40 !important;
  --embed-border-start: 2px solid #4B5053 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #0f0f0f40 !important;
  --embed-border-type: solid !important;
  --embed-header-size: 18px !important;
  --embed-padding: 0 10px 0 24px !important;
  --embed-thickness: 2px !important;
  --embed-title-align: center !important;
  --embed-title-padding: 5px 24px !important;
  --embed-title-white-space: wrap !important;
  --explorer-item-padding: 2px 8px !important;
  --explorer-padding: 4px 4px 4px 3px !important;
  --fa5: "Font Awesome 5 Free Solid" !important;
  --fa6: "Font Awesome 6 Free Solid" !important;
  --failure-bg: #772d2d !important;
  --faint-text: #4e5b6f !important;
  --fg: #cfd7dd !important;
  --file-font: "its" !important;
  --file-header-background: #2F3437 !important;
  --file-header-background-focused: #2F3437 !important;
  --file-header-breadcrumb-color: #5D6265 !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #5D6265 !important;
  --file-header-color-active: #EBEBEB !important;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #4B5053 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #3F4447 !important;
  --file-icon: "" !important;
  --file-icon-color: #4B5053 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #EBEBEB !important;
  --flair-background: #3F4447 !important;
  --flair-color: #EBEBEB !important;
  --folder: #EBEBEB !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #EBEBEB !important;
  --folder-icon-open-color: #43B3E0 !important;
  --folder-open: #43B3E0 !important;
  --folder-open-text-color: #EBEBEB !important;
  --folder-text-color: #EBEBEB !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, Arial' !important;
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #7A7D7F !important;
  --footnote-divider-color: #4C5153 !important;
  --footnote-id-color: #A8ABAC !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #0f0f0f33 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #5D6265 !important;
  --graph-arrow: #A8ABAC !important;
  --graph-background: #2F3437 !important;
  --graph-bg: #2F3437 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #EBEBEB !important;
  --graph-focused: #708dbb !important;
  --graph-img: #A8ABAC !important;
  --graph-line: #5D626555 !important;
  --graph-line-hover: #708dbb !important;
  --graph-lines: #5D626555 !important;
  --graph-node: #EBEBEB !important;
  --graph-node-attachment: #A8ABAC !important;
  --graph-node-focused: #708dbb !important;
  --graph-node-hover-fill: #EBEBEB !important;
  --graph-node-hover-outline: white !important;
  --graph-node-tag: #708dbb !important;
  --graph-node-unresolved: #5D6265 !important;
  --graph-tag: #708dbb !important;
  --graph-text: #EBEBEB !important;
  --gray: #A8ABAC !important;
  --h1-background: transparent !important;
  --h1-border-color: #43B3E0 !important;
  --h1-border-left-color: #4C5153 !important;
  --h1-border-line-color: #4C5153 !important;
  --h1-border-line-height: 0 !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #4C5153 !important;
  --h1-border-width: 0 !important;
  --h1-color: #EBEBEB !important;
  --h1-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #708dbb !important;
  --h2-border-left-color: #4C5153 !important;
  --h2-border-line-color: #4C5153 !important;
  --h2-border-line-height: 0 !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #4C5153 !important;
  --h2-border-width: 0 !important;
  --h2-color: #EBEBEB !important;
  --h2-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #4e5b6f !important;
  --h3-border-left-color: #4C5153 !important;
  --h3-border-line-color: #4C5153 !important;
  --h3-border-line-height: 0 !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #4C5153 !important;
  --h3-border-width: 0 !important;
  --h3-color: #EBEBEB !important;
  --h3-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #5D6265 !important;
  --h4-border-left-color: #4C5153 !important;
  --h4-border-line-color: #4C5153 !important;
  --h4-border-line-height: 0 !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #4C5153 !important;
  --h4-border-width: 0 !important;
  --h4-color: #EBEBEB !important;
  --h4-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #3C3F43 !important;
  --h5-border-left-color: #4C5153 !important;
  --h5-border-line-color: #4C5153 !important;
  --h5-border-line-height: 0 !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #4C5153 !important;
  --h5-border-width: 0 !important;
  --h5-color: #EBEBEB !important;
  --h5-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #0f0f0f33 !important;
  --h6-border-left-color: #4C5153 !important;
  --h6-border-line-color: #4C5153 !important;
  --h6-border-line-height: 0 !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #4C5153 !important;
  --h6-border-width: 0 !important;
  --h6-color: #EBEBEB !important;
  --h6-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #EBEBEB !important;
  --he-text-on-accent-inactive: #EBEBEB !important;
  --he-title-bar-active-action: #43B3E0 !important;
  --he-title-bar-active-bg: #3F4447 !important;
  --he-title-bar-active-fg: #EBEBEB !important;
  --he-title-bar-active-pinned-bg: #2F3437 !important;
  --he-title-bar-inactive-action: #A8ABAC !important;
  --he-title-bar-inactive-bg: #2F3437 !important;
  --he-title-bar-inactive-fg: #5D6265 !important;
  --he-title-bar-inactive-pinned-bg: #2F3437 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #4C5153 !important;
  --header-border-line-height: 0 !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-font-weight: 900 !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 700 !important;
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #EBEBEB !important;
  --heading-formatting: #5D6265 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgb(255, 255, 255, 0.1) !important;
  --hr: #3C3F43 !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #3C3F43 !important;
  --hr-icon-background: #2F3437 !important;
  --hr-icon-color: #EBEBEB !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(45, 170, 219, 0.3) !important;
  --hvr-active: rgba(45, 170, 219, 0.3) !important;
  --hvr2: rgb(255, 255, 255, 0.1) !important;
  --i-at: #43B3E0 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #A8ABAC !important;
  --icon-color-active: white !important;
  --icon-color-focused: #EBEBEB !important;
  --icon-color-hover: #EBEBEB !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #0f0f0f40 !important;
  --illusion-h1-background: #43B3E0 !important;
  --illusion-h2-background: #708dbb !important;
  --illusion-h3-background: #4e5b6f !important;
  --illusion-h4-background: #5D6265 !important;
  --illusion-h5-background: #3C3F43 !important;
  --illusion-h6-background: #0f0f0f33 !important;
  --illusion-header-arrow-color: white !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: white !important;
  --image-border-background: #0f0f0f33 !important;
  --image-border-color: #4C5153 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #5D6265 !important;
  --indentation-guide-color: #4C5153 !important;
  --indentation-guide-color-active: #708dbb !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #4C5153 !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #EBEBEB !important;
  --inline-title-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #0f0f0f40 !important;
  --input-shadow-hover: 3px 3px 0 #0f0f0f40 !important;
  --interactive-accent: #4B5053 !important;
  --interactive-accent-hover: #5D6265 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #5D6265 !important;
  --interactive-normal: #3F4447 !important;
  --its: "its" !important;
  --kanban-button-background: #3C4144 !important;
  --kanban-button-shadow: 2px 2px 0 #0f0f0f40 !important;
  --kanban-card-border: 2px solid #0f0f0f40 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #2F3437 !important;
  --kanban-card-text-color: #EBEBEB !important;
  --kanban-card-title-background: #2F3437 !important;
  --kanban-card-title-border: 0 1px 0 #0f0f0f40 !important;
  --kanban-lane-background: #3C4144 !important;
  --kanban-lane-border: 3px solid #0f0f0f40 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #0f0f0f40 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #2EA1CF !important;
  --kanban-tag-background: #708dbb !important;
  --latex-color: #43B3E0 !important;
  --latex-format-color: #5D6265 !important;
  --latex-syntax-color: #A8ABAC !important;
  --light: #2F3437 !important;
  --lightgray: #373C3F !important;
  --line-height-tight: 1.3em !important;
  --lines: #4C5153 !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #2EA1CF !important;
  --link-color-hover: #43B3E0 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #2EA1CF !important;
  --link-external-color-hover: #A8ABAC !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #5D6265 !important;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #4C5153 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #4C5153 !important;
  --list-color-2: #4C5153 !important;
  --list-color-3: #4C5153 !important;
  --list-color-4: #4C5153 !important;
  --list-color-5: #4C5153 !important;
  --list-color-6: #4C5153 !important;
  --list-indent: 25px !important;
  --list-marker-color: #708dbb !important;
  --list-marker-color-collapsed: #5D6265 !important;
  --list-marker-color-hover: #A8ABAC !important;
  --list-marker-color-other: #A8ABAC !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #43B3E0 !important;
  --list-spacing: 1px !important;
  --lite-accent: #43B3E0 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #373C3F !important;
  --menu-border-color: #3C4144 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #0f0f0f40 !important;
  --message-border-color: #0f0f0f40 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #0f0f0f40 !important;
  --message-color: white !important;
  --metadata-border-color: #4C5153 !important;
  --metadata-button-text-color: #5D6265 !important;
  --metadata-divider-color: #4C5153 !important;
  --metadata-icon-color: #A8ABAC !important;
  --metadata-input-background-active: #0f0f0f33 !important;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #EBEBEB !important;
  --metadata-label-background-active: #0f0f0f33 !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #A8ABAC !important;
  --metadata-label-text-color-hover: #A8ABAC !important;
  --metadata-property-background-active: rgba(45, 170, 219, 0.3) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #708dbb !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3C4144 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: white !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #A8ABAC !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #2F3437 !important;
  --modal-border-color: #0f0f0f40 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #0f0f0f33 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #373C3F !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #EBEBEB !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #A8ABAC !important;
  --nav-heading-color-hover: #EBEBEB !important;
  --nav-indentation-guide-color: #4C5153 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #4B5053 !important;
  --nav-item-background-border-color-hover: #4B5053 !important;
  --nav-item-background-hover: #4B5053 !important;
  --nav-item-background-selected: rgba(45, 170, 219, 0.3) !important;
  --nav-item-border-color: #43B3E0 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #EBEBEB !important;
  --nav-item-color-active: #708dbb !important;
  --nav-item-color-highlighted: white !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: #EBEBEB !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #A8ABAC !important;
  --nav-tag-color-hover: #A8ABAC !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #2F3437 !important;
  --note-rgb: 47, 52, 55 !important;
  --note-title-border-color: #EBEBEB !important;
  --outer-bar: #3F4447 !important;
  --outline: #0f0f0f40 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #2F3437 !important;
  --pdf-background: #2F3437 !important;
  --pdf-page-background: #2F3437 !important;
  --pdf-shadow: 0 0 0 1px #4C5153 !important;
  --pdf-sidebar-background: #2F3437 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C5153 !important;
  --pill-border-color: #4C5153 !important;
  --pill-border-color-hover: #3C4144 !important;
  --pill-color: #A8ABAC !important;
  --pill-color-hover: #EBEBEB !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #2EA1CF !important;
  --pill-radius: 0 !important;
  --popover-background: #2F3437 !important;
  --popover-border: 3px solid #0f0f0f40 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #708dbb !important;
  --progress-bg: #3C4144 !important;
  --prompt-background: #2F3437 !important;
  --prompt-border-color: #0f0f0f40 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #EBEBEB !important;
  --r-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #43B3E0 !important;
  --radius-h: 0 !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --radius-xl: 0 !important;
  --rainbow-1: #b03a3a !important;
  --rainbow-2: #d59929 !important;
  --rainbow-3: #207a20 !important;
  --rainbow-4: #3232c5 !important;
  --rainbow-5: #7f307f !important;
  --rainbow-6: #dd4794 !important;
  --raised-background: color-mix(in srgb, #3F4447 65%, transparent) linear-gradient(#3F4447, color-mix(in srgb, #3F4447 65%, transparent)) !important;
  --ribbon-background: #3F4447 !important;
  --ribbon-background-collapsed: #2F3437 !important;
  --ribbon-border-color: #3F4447 !important;
  --ribbon-border-width: 0 !important;
  --ribbon-icon-gap: 15px !important;
  --ribbon-icon-size: 18px !important;
  --ribbon-icon-stroke: 1.75px !important;
  --ribbon-width: 40px !important;
  --rmx: "remixicon" !important;
  --root-list-bullet-spacing: 0 !important;
  --root-list-spacing: 10px !important;
  --rpg: "rpg-awesome" !important;
  --scroll-size: 7px !important;
  --scrollbar-active-thumb-bg: #43B3E0 !important;
  --scrollbar-bg: #3b4044 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #474C50 !important;
  --scrollbar-track-bg: #2F3437 !important;
  --search-border: 2px solid #0f0f0f40 !important;
  --search-box-shadow: 2px 2px 0 #0f0f0f40 !important;
  --search-clear-button-color: #A8ABAC !important;
  --search-icon-color: #A8ABAC !important;
  --search-result-background: #2F3437 !important;
  --secondary: #2EA1CF !important;
  --setting-group-heading-color: #EBEBEB !important;
  --setting-item-alt-background-hover: #0f0f0f33 !important;
  --setting-item-background-hover: rgba(45, 170, 219, 0.3) !important;
  --setting-item-border-color: #4C5153 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #EBEBEB !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #0f0f0f33 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #4C5153 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #0f0f0f40 !important;
  --shadow-m: 3px 3px 0 #0f0f0f40 !important;
  --shadow-ml: 4px 4px 0 #0f0f0f40 !important;
  --shadow-s: 2px 2px 0 #0f0f0f40 !important;
  --side-bar: #373C3F !important;
  --side-bar-bg: #3F4447 !important;
  --sidebar-icon-color: #EBEBEB !important;
  --sidebar-icon-color-active: white !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #43B3E0 !important;
  --sidebar-tab-background-color-hover: #708dbb !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #43B3E0 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: white !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #2F3437 !important;
  --slider-thumb-border-color: #3C4144 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #4C5153 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #A8ABAC !important;
  --statblock-alt: #0f0f0f33 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #2F3437 !important;
  --statblock-bar-border-color: #708dbb !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #708dbb !important;
  --statblock-border-color: #4C5153 !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #0f0f0f40 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #EBEBEB !important;
  --statblock-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-heading-font-color: #EBEBEB !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #3C3F43 !important;
  --statblock-primary-color: #EBEBEB !important;
  --statblock-property-font-color: #EBEBEB !important;
  --statblock-property-name-font-color: #EBEBEB !important;
  --statblock-rule-color: #708dbb !important;
  --statblock-section-heading-border-color: #4C5153 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-section-heading-font-color: #7A7D7F !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #3F4447 !important;
  --status-bar-border-color: #708dbb !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #A8ABAC !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #4B5053 !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: white !important;
  --style-settings-heading-color-hover: white !important;
  --success-bg: #32603e !important;
  --suggestion-background: #2F3437 !important;
  --tab-background: #3F4447 !important;
  --tab-background-active: #2F3437 !important;
  --tab-container-background: #3F4447 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #3C3F43 !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #708dbb !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #06080c60 !important;
  --tab-stacked-shadow-color: #06080c60 !important;
  --tab-switcher-background: #373C3F !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #373C3F, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0f0f0f40 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #0f0f0f40 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #43B3E0, 5px 5px 0 #0f0f0f40 !important;
  --tab-text-color: #5D6265 !important;
  --tab-text-color-active: #EBEBEB !important;
  --tab-text-color-focused: #5D6265 !important;
  --tab-text-color-focused-active: #EBEBEB !important;
  --tab-text-color-focused-active-current: #EBEBEB !important;
  --tab-text-color-focused-highlighted: #2EA1CF !important;
  --tab-text-color-hover: #EBEBEB !important;
  --tab-top-outline-width: 0 !important;
  --table: #4C5153 !important;
  --table-add-button-background: #43B3E0 !important;
  --table-add-button-border-color: #2F3437 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: white !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #2F3437 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #0f0f0f33 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #4B5053 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-header-background: #373c3f !important;
  --table-header-background-hover: #708dbb !important;
  --table-header-border-color: #2F3437 !important;
  --table-header-color: white !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #43B3E0 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #0f0f0f33 !important;
  --table-row-alt-background-hover: rgb(255, 255, 255, 0.1) !important;
  --table-row-background-hover: rgb(255, 255, 255, 0.1) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: hsla(0, 49%, 49%, 0.1) !important;
  --table-selection-border-color: #4B5053 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #708dbb !important;
  --tag-background: #708dbb !important;
  --tag-background-color: #708dbb !important;
  --tag-background-hover: #708dbb !important;
  --tag-border-color: #708dbb !important;
  --tag-border-color-hover: #708dbb !important;
  --tag-color: white !important;
  --tag-color-hover: white !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #d04e4e !important;
  --tall: 700px !important;
  --td: #0f0f0f33 !important;
  --tertiary: #A8ABAC !important;
  --text: #EBEBEB !important;
  --text-accent: #2EA1CF !important;
  --text-accent-hover: #A8ABAC !important;
  --text-dl: white !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(45, 170, 219, 0.3) !important;
  --text-highlight-bg-active: rgba(45, 170, 219, 0.3) !important;
  --text-muted: #A8ABAC !important;
  --text-normal: #EBEBEB !important;
  --text-selection: rgb(255, 255, 255, 0.1) !important;
  --textHighlight: rgba(45, 170, 219, 0.3) !important;
  --th: #373c3f !important;
  --th-text: white !important;
  --theme-rainbow-1: #43B3E0 !important;
  --theme-rainbow-2: #708dbb !important;
  --theme-rainbow-3: #4e5b6f !important;
  --theme-rainbow-4: #5D6265 !important;
  --theme-rainbow-5: #3C3F43 !important;
  --theme-rainbow-6: #0f0f0f33 !important;
  --tiny: 100px !important;
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #2F3437 !important;
  --titlebar-background-focused: #3F4447 !important;
  --titlebar-border-color: #4C5153 !important;
  --titlebar-text-color: #EBEBEB !important;
  --titlebar-text-color-focused: #EBEBEB !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: white !important;
  --vault-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --vault-name-color: #EBEBEB !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 900 !important;
  --vault-profile-color: #EBEBEB !important;
  --vault-profile-color-hover: #EBEBEB !important;
  --vault-profile-font-size: 14px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(63, 68, 71);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(47, 52, 55);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(55, 60, 63);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(63, 68, 71);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(63, 68, 71);
  border-left-color: rgb(63, 68, 71);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 52, 55);
  color: rgb(235, 235, 235);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(45, 170, 219, 0.3);
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body del {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: line-through 1px rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body p {
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(168, 171, 172) none 0px;
  text-decoration: rgb(168, 171, 172);
  text-decoration-color: rgb(168, 171, 172);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(46, 161, 207);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 161, 207) none 0px;
  text-decoration: rgb(46, 161, 207);
  text-decoration-color: rgb(46, 161, 207);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 161, 207);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 161, 207) none 0px;
  text-decoration: rgb(46, 161, 207);
  text-decoration-color: rgb(46, 161, 207);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(93, 98, 101);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(93, 98, 101) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body dt {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(63, 68, 71);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body table {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(15, 15, 15, 0.2);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(47, 52, 55);
  border-left-color: rgb(47, 52, 55);
  border-right-color: rgb(47, 52, 55);
  border-top-color: rgb(47, 52, 55);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(47, 52, 55);
  border-left-color: rgb(47, 52, 55);
  border-right-color: rgb(47, 52, 55);
  border-top-color: rgb(47, 52, 55);
  color: rgb(255, 255, 255);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(55, 60, 63);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(63, 68, 71);
  border-bottom-color: rgb(168, 171, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(235, 235, 235);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(75, 80, 83);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(75, 80, 83);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(93, 98, 101);
  text-decoration: rgb(93, 98, 101);
  text-decoration-color: rgb(93, 98, 101);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(112, 141, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 141, 187);
  border-right-color: rgb(112, 141, 187);
  border-top-color: rgb(112, 141, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -22.4px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(194, 42, 42);
  text-decoration: rgb(194, 42, 42);
  text-decoration-color: rgb(194, 42, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(168, 171, 172);
  text-decoration: rgb(168, 171, 172);
  text-decoration-color: rgb(168, 171, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(253, 175, 0);
  text-decoration: rgb(253, 175, 0);
  text-decoration-color: rgb(253, 175, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(230, 129, 63);
  text-decoration: rgb(230, 129, 63);
  text-decoration-color: rgb(230, 129, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(149, 233, 238);
  text-decoration: rgb(149, 233, 238);
  text-decoration-color: rgb(149, 233, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(133, 91, 65);
  text-decoration: rgb(133, 91, 65);
  text-decoration-color: rgb(133, 91, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(231, 231, 171);
  text-decoration: rgb(231, 231, 171);
  text-decoration-color: rgb(231, 231, 171);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: hsl(0, 49%, 49%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-left-width: 4px;
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(15, 15, 15, 0.2);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(15, 15, 15, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(15, 15, 15, 0.25);
  border-left-width: 3px;
  border-right-color: rgba(15, 15, 15, 0.25);
  border-right-width: 3px;
  border-top-color: rgba(15, 15, 15, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(15, 15, 15, 0.25) 5px 5px 0px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(45, 170, 219, 0.3);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(15, 15, 15, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(15, 15, 15, 0.25);
  border-left-width: 3px;
  border-right-color: rgba(15, 15, 15, 0.25);
  border-right-width: 3px;
  border-top-color: rgba(15, 15, 15, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(55, 60, 63);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(45, 170, 219, 0.3);
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(45, 170, 219, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(112, 141, 187);
  border-bottom-color: rgb(112, 141, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 141, 187);
  border-right-color: rgb(112, 141, 187);
  border-top-color: rgb(112, 141, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(63, 68, 71);
  border-left-color: rgb(63, 68, 71);
  border-right-color: rgb(63, 68, 71);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(235, 235, 235);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(168, 171, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(168, 171, 172);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(63, 68, 71);
  border-bottom-color: rgb(112, 141, 187);
  border-left-color: rgb(112, 141, 187);
  border-right-color: rgb(112, 141, 187);
  border-top-color: rgb(112, 141, 187);
  border-top-left-radius: 0px;
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(168, 171, 172);
  text-decoration: rgb(168, 171, 172);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(168, 171, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(168, 171, 172);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(168, 171, 172);
  stroke: rgb(168, 171, 172);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(93, 98, 101);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(93, 98, 101);
  border-right-color: rgb(93, 98, 101);
  border-top-color: rgb(93, 98, 101);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(93, 98, 101);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(76, 81, 83);
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(168, 171, 172);
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(63, 68, 71);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(235, 235, 235);
  text-decoration: underline dotted rgb(235, 235, 235);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(168, 171, 172);
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(15, 15, 15, 0.25) 0px 2px 0px 0px;
  color: rgb(235, 235, 235);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body sub {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body summary {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body sup {
  color: rgb(235, 235, 235);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #43B3E0 !important;
  --accent-color: 67, 179, 224 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #82817C !important;
  --accent2-lite: #2EA1CF !important;
  --aside-bg: #FFFFFF !important;
  --background-modifier-active-hover: #43B3E0 !important;
  --background-modifier-border: #e9e9e7 !important;
  --background-modifier-border-focus: #43B3E0 !important;
  --background-modifier-border-hover: #EDECE9 !important;
  --background-modifier-cover: #37352F10 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #37352F10 !important;
  --background-modifier-form-field-hover: #37352F10 !important;
  --background-modifier-hover: rgba(45, 170, 219, 0.3) !important;
  --background-modifier-message: #43B3E0 !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #FFFFFF !important;
  --background-primary-alt: #F1F1EF !important;
  --background-secondary: #F7F6F3 !important;
  --background-secondary-alt: #F1F1EF !important;
  --bases-cards-background: #FFFFFF !important;
  --bases-cards-cover-background: #F1F1EF !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #e9e9e7 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #EDECE9 !important;
  --bases-embed-border-color: #e9e9e7 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #82817C !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #FFFFFF !important;
  --bases-table-cell-background-active: #FFFFFF !important;
  --bases-table-cell-background-disabled: #F1F1EF !important;
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #43B3E0 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #43B3E0 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #F1F1EF !important;
  --bases-table-header-background: #FFFFFF !important;
  --bases-table-header-background-hover: rgba(45, 170, 219, 0.3) !important;
  --bases-table-header-color: #82817C !important;
  --bases-table-row-background-hover: rgba(55, 53, 47, 0.078) !important;
  --bases-table-summary-background: #FFFFFF !important;
  --bases-table-summary-background-hover: rgba(45, 170, 219, 0.3) !important;
  --bg: #EDECE9 !important;
  --blockquote-background-color: #F1F1EF !important;
  --blockquote-border-color: #EDECE9 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #37352f !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --bodyFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #0f0f0f15 !important;
  --box-border-m: 3px solid #0f0f0f15 !important;
  --box-border-s: 1px solid #0f0f0f15 !important;
  --bttn: #43B3E0 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #43B3E0 !important;
  --button-background-hover: #CFCECD !important;
  --button-border: #43B3E0 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: white !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #FFFFFF !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 166, 180, 204 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #37352f !important;
  --chbx-B: 182, 118, 255 !important;
  --chbx-C: 214, 108, 108 !important;
  --chbx-I: 82, 139, 212 !important;
  --chbx-N: 161, 106, 73 !important;
  --chbx-P: 79, 165, 79 !important;
  --chbx-R: 159, 186, 223 !important;
  --chbx-a: 248, 114, 181 !important;
  --chbx-b: 251, 146, 76 !important;
  --chbx-c: 149, 217, 238 !important;
  --chbx-d: 203, 212, 235 !important;
  --chbx-h: 168, 177, 189 !important;
  --chbx-i: 219, 1, 1 !important;
  --chbx-id: 202, 199, 0 !important;
  --chbx-q: 253, 175, 0 !important;
  --chbx-r: 249, 190, 123 !important;
  --checkbox-border-color: #43B3E0 !important;
  --checkbox-border-color-hover: #43B3E0 !important;
  --checkbox-color: #43B3E0 !important;
  --checkbox-color-hover: #43B3E0 !important;
  --checkbox-marker-color: #FFFFFF !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #CFCECD !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #f7f6f3 !important;
  --code-bg: #f7f6f3 !important;
  --code-border-color: #e9e9e7 !important;
  --code-bracket-background: rgba(45, 170, 219, 0.3) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #37352f !important;
  --code-punctuation: #82817C !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #0f0f0f15 !important;
  --code-size: .90em !important;
  --code-text: #37352f !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #CFCECD !important;
  --color-accent: hsl(0, 49%, 49%) !important;
  --color-accent-1: hsl(-1, 49.49%, 52.675%) !important;
  --color-accent-2: hsl(-3, 49.98%, 56.35%) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #37352f !important;
  --dark-accent: #43B3E0 !important;
  --dark-sidebar: #F7F6F3 !important;
  --darkgray: #37352f !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(67, 179, 224, 0.1) !important;
  --dataview-th-background: #F1F1EF !important;
  --dataview-th-border-bottom: 2px solid #37352f !important;
  --dataview-th-color: #37352f !important;
  --dataview-th-count-color: #37352f !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #F1F1EF !important;
  --divider-color: #F1F1EF !important;
  --divider-color-hover: #43B3E0 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #43B3E0 !important;
  --drag-ghost-text-color: white !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #F1F1EF !important;
  --dropdown-background-hover: #CFCECD !important;
  --embed-bg: #F1F1EF !important;
  --embed-block-shadow-hover: 2px 2px 0 #0f0f0f15 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #0f0f0f15 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #0f0f0f15 !important;
  --embed-border-left: 2px solid #37352f !important;
  --embed-border-left-color: #37352f !important;
  --embed-border-left-color-hover: #37352f !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #0f0f0f15 !important;
  --embed-border-start: 2px solid #43B3E0 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #0f0f0f15 !important;
  --embed-border-type: solid !important;
  --embed-header-size: 18px !important;
  --embed-padding: 0 10px 0 24px !important;
  --embed-thickness: 2px !important;
  --embed-title-align: center !important;
  --embed-title-padding: 5px 24px !important;
  --embed-title-white-space: wrap !important;
  --explorer-item-padding: 2px 8px !important;
  --explorer-padding: 4px 4px 4px 3px !important;
  --fa5: "Font Awesome 5 Free Solid" !important;
  --fa6: "Font Awesome 6 Free Solid" !important;
  --failure-bg: #772d2d !important;
  --faint-text: #4e5b6f !important;
  --fg: #43B3E0 !important;
  --file-font: "its" !important;
  --file-header-background: #FFFFFF !important;
  --file-header-background-focused: #FFFFFF !important;
  --file-header-breadcrumb-color: #CFCECD !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #CFCECD !important;
  --file-header-color-active: #37352f !important;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #43B3E0 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #F1F1EF !important;
  --file-icon: "" !important;
  --file-icon-color: #69685f !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #37352f !important;
  --flair-background: #F1F1EF !important;
  --flair-color: #37352f !important;
  --folder: #37352f !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #37352f !important;
  --folder-icon-open-color: #43B3E0 !important;
  --folder-open: #43B3E0 !important;
  --folder-open-text-color: #37352f !important;
  --folder-text-color: #37352f !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, Arial' !important;
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #A09E9A !important;
  --footnote-divider-color: #e9e9e7 !important;
  --footnote-id-color: #82817C !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #37352F10 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #69685f !important;
  --graph-arrow: #82817C !important;
  --graph-background: #FFFFFF !important;
  --graph-bg: #FFFFFF !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #37352f !important;
  --graph-focused: #43B3E0 !important;
  --graph-img: #000 !important;
  --graph-line: #CFCECD55 !important;
  --graph-line-hover: #43B3E0 !important;
  --graph-lines: #CFCECD55 !important;
  --graph-node: #82817C !important;
  --graph-node-attachment: #000 !important;
  --graph-node-focused: #43B3E0 !important;
  --graph-node-hover-fill: #37352f !important;
  --graph-node-hover-outline: white !important;
  --graph-node-tag: #43B3E0 !important;
  --graph-node-unresolved: #69685f !important;
  --graph-tag: #43B3E0 !important;
  --graph-text: #37352f !important;
  --gray: #82817C !important;
  --h1-background: transparent !important;
  --h1-border-color: #43B3E0 !important;
  --h1-border-left-color: #e9e9e7 !important;
  --h1-border-line-color: #e9e9e7 !important;
  --h1-border-line-height: 0 !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #e9e9e7 !important;
  --h1-border-width: 0 !important;
  --h1-color: #37352f !important;
  --h1-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #4e5b6f !important;
  --h2-border-left-color: #e9e9e7 !important;
  --h2-border-line-color: #e9e9e7 !important;
  --h2-border-line-height: 0 !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #e9e9e7 !important;
  --h2-border-width: 0 !important;
  --h2-color: #37352f !important;
  --h2-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #37352f !important;
  --h3-border-left-color: #e9e9e7 !important;
  --h3-border-line-color: #e9e9e7 !important;
  --h3-border-line-height: 0 !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #e9e9e7 !important;
  --h3-border-width: 0 !important;
  --h3-color: #37352f !important;
  --h3-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #82817C !important;
  --h4-border-left-color: #e9e9e7 !important;
  --h4-border-line-color: #e9e9e7 !important;
  --h4-border-line-height: 0 !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #e9e9e7 !important;
  --h4-border-width: 0 !important;
  --h4-color: #37352f !important;
  --h4-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #A09E9A !important;
  --h5-border-left-color: #e9e9e7 !important;
  --h5-border-line-color: #e9e9e7 !important;
  --h5-border-line-height: 0 !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #e9e9e7 !important;
  --h5-border-width: 0 !important;
  --h5-color: #37352f !important;
  --h5-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #CFCECD !important;
  --h6-border-left-color: #e9e9e7 !important;
  --h6-border-line-color: #e9e9e7 !important;
  --h6-border-line-height: 0 !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #e9e9e7 !important;
  --h6-border-width: 0 !important;
  --h6-color: #37352f !important;
  --h6-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #37352f !important;
  --he-text-on-accent-inactive: #37352f !important;
  --he-title-bar-active-action: #43B3E0 !important;
  --he-title-bar-active-bg: #F1F1EF !important;
  --he-title-bar-active-fg: #37352f !important;
  --he-title-bar-active-pinned-bg: #FFFFFF !important;
  --he-title-bar-inactive-action: #82817C !important;
  --he-title-bar-inactive-bg: #FFFFFF !important;
  --he-title-bar-inactive-fg: #CFCECD !important;
  --he-title-bar-inactive-pinned-bg: #FFFFFF !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #e9e9e7 !important;
  --header-border-line-height: 0 !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-font-weight: 900 !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 700 !important;
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #37352f !important;
  --heading-formatting: #CFCECD !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(55, 53, 47, 0.078) !important;
  --hr: rgba(55, 53, 47, 0.1) !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: rgba(55, 53, 47, 0.1) !important;
  --hr-icon-background: #FFFFFF !important;
  --hr-icon-color: #37352f !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(45, 170, 219, 0.2) !important;
  --hvr-active: rgba(45, 170, 219, 0.3) !important;
  --hvr2: rgba(55, 53, 47, 0.078) !important;
  --i-at: #43B3E0 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #82817C !important;
  --icon-color-active: white !important;
  --icon-color-focused: #37352f !important;
  --icon-color-hover: #37352f !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #0f0f0f15 !important;
  --illusion-h1-background: #43B3E0 !important;
  --illusion-h2-background: #4e5b6f !important;
  --illusion-h3-background: #37352f !important;
  --illusion-h4-background: #82817C !important;
  --illusion-h5-background: #A09E9A !important;
  --illusion-h6-background: #CFCECD !important;
  --illusion-header-arrow-color: white !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: white !important;
  --image-border-background: #37352F10 !important;
  --image-border-color: #e9e9e7 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #CFCECD !important;
  --indentation-guide-color: rgba(55, 53, 47, 0.1) !important;
  --indentation-guide-color-active: #43B3E0 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: rgba(55, 53, 47, 0.1) !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #37352f !important;
  --inline-title-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: #37352F10 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #0f0f0f15 !important;
  --input-shadow-hover: 3px 3px 0 #0f0f0f15 !important;
  --interactive-accent: #43B3E0 !important;
  --interactive-accent-hover: #CFCECD !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #CFCECD !important;
  --interactive-normal: #F1F1EF !important;
  --its: "its" !important;
  --kanban-button-background: #f7f6f3 !important;
  --kanban-button-shadow: 2px 2px 0 #0f0f0f15 !important;
  --kanban-card-border: 2px solid #0f0f0f15 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #FFFFFF !important;
  --kanban-card-text-color: #37352f !important;
  --kanban-card-title-background: #FFFFFF !important;
  --kanban-card-title-border: 0 1px 0 #0f0f0f15 !important;
  --kanban-lane-background: #f7f6f3 !important;
  --kanban-lane-border: 3px solid #0f0f0f15 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #0f0f0f15 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #2EA1CF !important;
  --kanban-tag-background: #43B3E0 !important;
  --latex-color: #43B3E0 !important;
  --latex-format-color: #CFCECD !important;
  --latex-syntax-color: #82817C !important;
  --light: #FFFFFF !important;
  --lightgray: #F7F6F3 !important;
  --line-height-tight: 1.3em !important;
  --lines: rgba(55, 53, 47, 0.1) !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #2EA1CF !important;
  --link-color-hover: #43B3E0 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #2EA1CF !important;
  --link-external-color-hover: #82817C !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #CFCECD !important;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #e9e9e7 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: rgba(55, 53, 47, 0.1) !important;
  --list-color-2: rgba(55, 53, 47, 0.1) !important;
  --list-color-3: rgba(55, 53, 47, 0.1) !important;
  --list-color-4: rgba(55, 53, 47, 0.1) !important;
  --list-color-5: rgba(55, 53, 47, 0.1) !important;
  --list-color-6: rgba(55, 53, 47, 0.1) !important;
  --list-indent: 25px !important;
  --list-marker-color: #43B3E0 !important;
  --list-marker-color-collapsed: #CFCECD !important;
  --list-marker-color-hover: #82817C !important;
  --list-marker-color-other: #82817C !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #43B3E0 !important;
  --list-spacing: 1px !important;
  --lite-accent: #43B3E0 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #F7F6F3 !important;
  --menu-border-color: #EDECE9 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #0f0f0f15 !important;
  --message-border-color: #0f0f0f15 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #0f0f0f15 !important;
  --message-color: white !important;
  --metadata-border-color: #e9e9e7 !important;
  --metadata-button-text-color: #CFCECD !important;
  --metadata-divider-color: #e9e9e7 !important;
  --metadata-icon-color: #82817C !important;
  --metadata-input-background-active: #37352F10 !important;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #37352f !important;
  --metadata-label-background-active: #37352F10 !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #82817C !important;
  --metadata-label-text-color-hover: #82817C !important;
  --metadata-property-background-active: rgba(45, 170, 219, 0.3) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #43B3E0 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #EDECE9 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: white !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #82817C !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #FFFFFF !important;
  --modal-border-color: #0f0f0f15 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #37352F10 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #F7F6F3 !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #37352f !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #82817C !important;
  --nav-heading-color-hover: #37352f !important;
  --nav-indentation-guide-color: rgba(55, 53, 47, 0.1) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #43B3E0 !important;
  --nav-item-background-border-color-hover: #43B3E0 !important;
  --nav-item-background-hover: #43B3E0 !important;
  --nav-item-background-selected: rgba(45, 170, 219, 0.2) !important;
  --nav-item-border-color: #43B3E0 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #37352f !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: white !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: #37352f !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #82817C !important;
  --nav-tag-color-hover: #82817C !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #FFFFFF !important;
  --note-rgb: 247, 246, 243 !important;
  --note-title-border-color: #37352f !important;
  --outer-bar: #F1F1EF !important;
  --outline: #0f0f0f15 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #FFFFFF !important;
  --pdf-background: #FFFFFF !important;
  --pdf-page-background: #FFFFFF !important;
  --pdf-sidebar-background: #FFFFFF !important;
  --pill-border-color: #e9e9e7 !important;
  --pill-border-color-hover: #EDECE9 !important;
  --pill-color: #82817C !important;
  --pill-color-hover: #37352f !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #2EA1CF !important;
  --pill-radius: 0 !important;
  --popover-background: #FFFFFF !important;
  --popover-border: 3px solid #0f0f0f15 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #43B3E0 !important;
  --progress-bg: #EDECE9 !important;
  --prompt-background: #FFFFFF !important;
  --prompt-border-color: #0f0f0f15 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #37352f !important;
  --r-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #43B3E0 !important;
  --radius-h: 0 !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --radius-xl: 0 !important;
  --rainbow-1: #dd3c3c !important;
  --rainbow-2: #f1ab27 !important;
  --rainbow-3: #118811 !important;
  --rainbow-4: #3333cc !important;
  --rainbow-5: #a824a8 !important;
  --rainbow-6: #e83b94 !important;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --ribbon-background: #F1F1EF !important;
  --ribbon-background-collapsed: #FFFFFF !important;
  --ribbon-border-color: #F1F1EF !important;
  --ribbon-border-width: 0 !important;
  --ribbon-icon-gap: 15px !important;
  --ribbon-icon-size: 18px !important;
  --ribbon-icon-stroke: 1.75px !important;
  --ribbon-width: 40px !important;
  --rmx: "remixicon" !important;
  --root-list-bullet-spacing: 0 !important;
  --root-list-spacing: 10px !important;
  --rpg: "rpg-awesome" !important;
  --scroll-size: 7px !important;
  --scrollbar-active-thumb-bg: #43B3E0 !important;
  --scrollbar-bg: #EDECE9 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #D3D1CB !important;
  --scrollbar-track-bg: #FFFFFF !important;
  --search-border: 2px solid #0f0f0f15 !important;
  --search-box-shadow: 2px 2px 0 #0f0f0f15 !important;
  --search-clear-button-color: #82817C !important;
  --search-icon-color: #82817C !important;
  --search-result-background: #FFFFFF !important;
  --secondary: #2EA1CF !important;
  --setting-group-heading-color: #37352f !important;
  --setting-item-alt-background-hover: #37352F10 !important;
  --setting-item-background-hover: rgba(45, 170, 219, 0.2) !important;
  --setting-item-border-color: #e9e9e7 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #37352f !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #37352F10 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #e9e9e7 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #0f0f0f15 !important;
  --shadow-m: 3px 3px 0 #0f0f0f15 !important;
  --shadow-ml: 4px 4px 0 #0f0f0f15 !important;
  --shadow-s: 2px 2px 0 #0f0f0f15 !important;
  --side-bar: #F7F6F3 !important;
  --side-bar-bg: #F1F1EF !important;
  --sidebar-icon-color: #37352f !important;
  --sidebar-icon-color-active: white !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #43B3E0 !important;
  --sidebar-tab-background-color-hover: #43B3E0 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #43B3E0 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: white !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #FFFFFF !important;
  --slider-thumb-border-color: #EDECE9 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #e9e9e7 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #82817C !important;
  --statblock-alt: #37352F10 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #FFFFFF !important;
  --statblock-bar-border-color: #43B3E0 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #43B3E0 !important;
  --statblock-border-color: rgba(55, 53, 47, 0.1) !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #0f0f0f15 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #37352f !important;
  --statblock-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-heading-font-color: #37352f !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: rgba(55, 53, 47, 0.1) !important;
  --statblock-primary-color: #37352f !important;
  --statblock-property-font-color: #37352f !important;
  --statblock-property-name-font-color: #37352f !important;
  --statblock-rule-color: #43B3E0 !important;
  --statblock-section-heading-border-color: #e9e9e7 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-section-heading-font-color: #A09E9A !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #F1F1EF !important;
  --status-bar-border-color: #43B3E0 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #82817C !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #43B3E0 !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: white !important;
  --style-settings-heading-color-hover: white !important;
  --success-bg: #599049 !important;
  --suggestion-background: #FFFFFF !important;
  --tab-background: #F1F1EF !important;
  --tab-background-active: #FFFFFF !important;
  --tab-container-background: #F1F1EF !important;
  --tab-curve: 0 !important;
  --tab-divider-color: rgba(55, 53, 47, 0.1) !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #43B3E0 !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62 !important;
  --tab-stacked-shadow-color: #d0ddef62 !important;
  --tab-switcher-background: #F7F6F3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F7F6F3, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0f0f0f15 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #0f0f0f15 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #43B3E0, 5px 5px 0 #0f0f0f15 !important;
  --tab-text-color: #CFCECD !important;
  --tab-text-color-active: #37352f !important;
  --tab-text-color-focused: #CFCECD !important;
  --tab-text-color-focused-active: #37352f !important;
  --tab-text-color-focused-active-current: #37352f !important;
  --tab-text-color-focused-highlighted: #2EA1CF !important;
  --tab-text-color-hover: #37352f !important;
  --tab-top-outline-width: 0 !important;
  --table: #e9e9e7 !important;
  --table-add-button-background: #43B3E0 !important;
  --table-add-button-border-color: #FFFFFF !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: white !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #FFFFFF !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #37352F10 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #43B3E0 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-header-background: #F7F6F3 !important;
  --table-header-background-hover: #43B3E0 !important;
  --table-header-border-color: #FFFFFF !important;
  --table-header-color: #37352f !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #43B3E0 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #37352F10 !important;
  --table-row-alt-background-hover: rgba(55, 53, 47, 0.078) !important;
  --table-row-background-hover: rgba(55, 53, 47, 0.078) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: hsla(0, 49%, 49%, 0.1) !important;
  --table-selection-border-color: #43B3E0 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #43B3E0 !important;
  --tag-background: #43B3E0 !important;
  --tag-background-color: #43B3E0 !important;
  --tag-background-hover: #43B3E0 !important;
  --tag-border-color: #43B3E0 !important;
  --tag-border-color-hover: #43B3E0 !important;
  --tag-color: white !important;
  --tag-color-hover: white !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #43B3E0 !important;
  --tall: 700px !important;
  --td: #37352F10 !important;
  --tertiary: #82817C !important;
  --text: #37352f !important;
  --text-accent: #2EA1CF !important;
  --text-accent-hover: #82817C !important;
  --text-dl: white !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(45, 170, 219, 0.2) !important;
  --text-highlight-bg-active: rgba(45, 170, 219, 0.3) !important;
  --text-muted: #82817C !important;
  --text-normal: #37352f !important;
  --text-selection: rgba(55, 53, 47, 0.078) !important;
  --textHighlight: rgba(45, 170, 219, 0.2) !important;
  --th: #F7F6F3 !important;
  --th-text: white !important;
  --theme-rainbow-1: #43B3E0 !important;
  --theme-rainbow-2: #4e5b6f !important;
  --theme-rainbow-3: #37352f !important;
  --theme-rainbow-4: #82817C !important;
  --theme-rainbow-5: #A09E9A !important;
  --theme-rainbow-6: #CFCECD !important;
  --tiny: 100px !important;
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #FFFFFF !important;
  --titlebar-background-focused: #F1F1EF !important;
  --titlebar-border-color: #e9e9e7 !important;
  --titlebar-text-color: #37352f !important;
  --titlebar-text-color-focused: #37352f !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: white !important;
  --vault-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --vault-name-color: #37352f !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 900 !important;
  --vault-profile-color: #37352f !important;
  --vault-profile-color-hover: #37352f !important;
  --vault-profile-font-size: 14px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(241, 241, 239);
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 246, 243);
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(241, 241, 239);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(241, 241, 239);
  border-left-color: rgb(241, 241, 239);
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(55, 53, 47);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(45, 170, 219, 0.2);
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body del {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: line-through 1px rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body p {
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(130, 129, 124) none 0px;
  text-decoration: rgb(130, 129, 124);
  text-decoration-color: rgb(130, 129, 124);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(46, 161, 207);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 161, 207) none 0px;
  text-decoration: rgb(46, 161, 207);
  text-decoration-color: rgb(46, 161, 207);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 161, 207);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 161, 207) none 0px;
  text-decoration: rgb(46, 161, 207);
  text-decoration-color: rgb(46, 161, 207);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(207, 206, 205);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(207, 206, 205) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body dt {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body ol > li {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body ul > li {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(241, 241, 239);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body table {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(55, 53, 47, 0.063);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(55, 53, 47);
  font-weight: 700;
}

html[saved-theme="light"] body tr {
  background-color: rgb(247, 246, 243);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body figcaption {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(241, 241, 239);
  border-bottom-color: rgb(130, 129, 124);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(55, 53, 47);
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(207, 206, 205);
  text-decoration: rgb(207, 206, 205);
  text-decoration-color: rgb(207, 206, 205);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(67, 179, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(67, 179, 224);
  border-top-color: rgb(67, 179, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -22.4px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(219, 1, 1);
  text-decoration: rgb(219, 1, 1);
  text-decoration-color: rgb(219, 1, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(130, 129, 124);
  text-decoration: rgb(130, 129, 124);
  text-decoration-color: rgb(130, 129, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(253, 175, 0);
  text-decoration: rgb(253, 175, 0);
  text-decoration-color: rgb(253, 175, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(251, 146, 76);
  text-decoration: rgb(251, 146, 76);
  text-decoration-color: rgb(251, 146, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(149, 217, 238);
  text-decoration: rgb(149, 217, 238);
  text-decoration-color: rgb(149, 217, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(161, 106, 73);
  text-decoration: rgb(161, 106, 73);
  text-decoration-color: rgb(161, 106, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(202, 199, 0);
  text-decoration: rgb(202, 199, 0);
  text-decoration-color: rgb(202, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: hsl(0, 49%, 49%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-left-width: 4px;
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(55, 53, 47, 0.063);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgba(15, 15, 15, 0.082);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(15, 15, 15, 0.082);
  border-left-width: 3px;
  border-right-color: rgba(15, 15, 15, 0.082);
  border-right-width: 3px;
  border-top-color: rgba(15, 15, 15, 0.082);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(15, 15, 15, 0.082) 5px 5px 0px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(45, 170, 219, 0.3);
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(15, 15, 15, 0.082);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(15, 15, 15, 0.082);
  border-left-width: 3px;
  border-right-color: rgba(15, 15, 15, 0.082);
  border-right-width: 3px;
  border-top-color: rgba(15, 15, 15, 0.082);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 246, 243);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(45, 170, 219, 0.3);
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(45, 170, 219, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(67, 179, 224);
  border-bottom-color: rgb(67, 179, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(67, 179, 224);
  border-top-color: rgb(67, 179, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(241, 241, 239);
  border-left-color: rgb(241, 241, 239);
  border-right-color: rgb(241, 241, 239);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(55, 53, 47);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(55, 53, 47);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(130, 129, 124);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(130, 129, 124);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(241, 241, 239);
  border-bottom-color: rgb(67, 179, 224);
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(67, 179, 224);
  border-top-color: rgb(67, 179, 224);
  border-top-left-radius: 0px;
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(130, 129, 124);
  text-decoration: rgb(130, 129, 124);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(130, 129, 124);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(130, 129, 124);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(130, 129, 124);
  stroke: rgb(130, 129, 124);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(207, 206, 205);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 206, 205);
  border-right-color: rgb(207, 206, 205);
  border-top-color: rgb(207, 206, 205);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(207, 206, 205);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(233, 233, 231);
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(130, 129, 124);
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(241, 241, 239);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(55, 53, 47);
  text-decoration: underline dotted rgb(55, 53, 47);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(130, 129, 124);
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(15, 15, 15, 0.082) 0px 2px 0px 0px;
  color: rgb(55, 53, 47);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

html[saved-theme="light"] body sub {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body summary {
  color: rgb(55, 53, 47);
}

html[saved-theme="light"] body sup {
  color: rgb(55, 53, 47);
}`,
  },
};
