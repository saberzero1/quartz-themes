import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.tangerine-dunes",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #DF7B41 !important;
  --accent-color: 223, 123, 65 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #8F3F2B !important;
  --accent2-lite: #E57858 !important;
  --aside-bg: #11151d !important;
  --background-modifier-active-hover: #c66c39 !important;
  --background-modifier-border: #463228 !important;
  --background-modifier-border-focus: #DF7B41 !important;
  --background-modifier-border-hover: #252c36 !important;
  --background-modifier-cover: rgba(12, 9, 6, 0.38) !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: rgba(12, 9, 6, 0.38) !important;
  --background-modifier-form-field-hover: rgba(12, 9, 6, 0.38) !important;
  --background-modifier-hover: rgba(236, 110, 52, 0.3) !important;
  --background-modifier-message: #c66c39 !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #1a1e24 !important;
  --background-primary-alt: #62250F !important;
  --background-secondary: #1a1e24 !important;
  --background-secondary-alt: #0b0f13 !important;
  --bases-cards-background: #1a1e24 !important;
  --bases-cards-cover-background: #62250F !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #463228 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36 !important;
  --bases-embed-border-color: #463228 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #97a1b9 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #1a1e24 !important;
  --bases-table-cell-background-active: #1a1e24 !important;
  --bases-table-cell-background-disabled: #62250F !important;
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #DF7B41 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c66c39 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #62250F !important;
  --bases-table-header-background: #1a1e24 !important;
  --bases-table-header-background-hover: rgba(236, 110, 52, 0.3) !important;
  --bases-table-header-color: #97a1b9 !important;
  --bases-table-row-background-hover: rgba(148, 87, 49, 0.575) !important;
  --bases-table-summary-background: #1a1e24 !important;
  --bases-table-summary-background-hover: rgba(236, 110, 52, 0.3) !important;
  --bg: #252c36 !important;
  --blockquote-background-color: #0d1014 !important;
  --blockquote-border-color: #252c36 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #bccad8 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #0b0f13 65%, transparent) linear-gradient(#0b0f13, color-mix(in srgb, #0b0f13 65%, transparent)) !important;
  --bodyFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #0b0f13 !important;
  --box-border-m: 3px solid #0b0f13 !important;
  --box-border-s: 1px solid #0b0f13 !important;
  --bttn: #c66c39 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #c66c39 !important;
  --button-background-hover: #586477 !important;
  --button-border: #c66c39 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #1a1e24 !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 88, 100, 159 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #bccad8 !important;
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
  --checkbox-border-color: #DF7B41 !important;
  --checkbox-border-color-hover: #c66c39 !important;
  --checkbox-color: #DF7B41 !important;
  --checkbox-color-hover: #c66c39 !important;
  --checkbox-marker-color: #1a1e24 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #586477 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #232831 !important;
  --code-bg: #232831 !important;
  --code-border-color: #463228 !important;
  --code-bracket-background: rgba(236, 110, 52, 0.3) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #FA8A45 !important;
  --code-punctuation: #97a1b9 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #0b0f13 !important;
  --code-size: .90em !important;
  --code-text: #FA8A45 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #586477 !important;
  --color-accent: hsl(0, 49%, 49%) !important;
  --color-accent-1: hsl(-3, 49.98%, 56.35%) !important;
  --color-accent-2: hsl(-5, 51.45%, 63.21%) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #bccad8 !important;
  --dark-accent: #c66c39 !important;
  --dark-sidebar: #0d1014 !important;
  --darkgray: #bccad8 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(223, 123, 65, 0.1) !important;
  --dataview-th-background: #0b0f13 !important;
  --dataview-th-border-bottom: 2px solid #DF7B41 !important;
  --dataview-th-color: #DF7B41 !important;
  --dataview-th-count-color: #DF7B41 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 500 !important;
  --deep-dark-accent: #62250F !important;
  --divider-color: #0b0f13 !important;
  --divider-color-hover: #DF7B41 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #c66c39 !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: #0b0f13 !important;
  --dropdown-background-hover: #586477 !important;
  --embed-bg: #0d1014 !important;
  --embed-block-shadow-hover: 2px 2px 0 #0b0f13 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #0b0f13 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #0b0f13 !important;
  --embed-border-left: 2px solid #DF7B41 !important;
  --embed-border-left-color: #DF7B41 !important;
  --embed-border-left-color-hover: #DF7B41 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #0b0f13 !important;
  --embed-border-start: 2px solid #c66c39 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #0b0f13 !important;
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
  --file-header-background: #1a1e24 !important;
  --file-header-background-focused: #1a1e24 !important;
  --file-header-breadcrumb-color: #586477 !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #586477 !important;
  --file-header-color-active: #bccad8 !important;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #c66c39 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #0b0f13 !important;
  --file-icon: "" !important;
  --file-icon-color: #8F3F2B !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #bccad8 !important;
  --flair-background: #0b0f13 !important;
  --flair-color: #bccad8 !important;
  --folder: #DF7B41 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #DF7B41 !important;
  --folder-icon-open-color: #D8AF97 !important;
  --folder-open: #D8AF97 !important;
  --folder-open-text-color: #bccad8 !important;
  --folder-text-color: #bccad8 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
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
  --footnote: #63778f !important;
  --footnote-divider-color: #463228 !important;
  --footnote-id-color: #97a1b9 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: rgba(12, 9, 6, 0.38) !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #586477 !important;
  --graph-arrow: #97a1b9 !important;
  --graph-background: #1a1e24 !important;
  --graph-bg: #1a1e24 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #C48A69 !important;
  --graph-focused: #E57858 !important;
  --graph-img: #8F3F2B !important;
  --graph-line: rgba(148, 87, 49, 0.575) !important;
  --graph-line-hover: #DF7B41 !important;
  --graph-lines: rgba(148, 87, 49, 0.575) !important;
  --graph-node: #bccad8 !important;
  --graph-node-attachment: #8F3F2B !important;
  --graph-node-focused: #E57858 !important;
  --graph-node-hover-fill: #C48A69 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #c66c39 !important;
  --graph-node-unresolved: #586477 !important;
  --graph-tag: #c66c39 !important;
  --graph-text: #bccad8 !important;
  --gray: #97a1b9 !important;
  --h1-background: transparent !important;
  --h1-border-color: #BF7F5E !important;
  --h1-border-left-color: #463228 !important;
  --h1-border-line-color: #463228 !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #463228 !important;
  --h1-border-width: 0 !important;
  --h1-color: #DF7B41 !important;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h1-weight: 500 !important;
  --h2-background: transparent !important;
  --h2-border-color: #DF7B41 !important;
  --h2-border-left-color: #463228 !important;
  --h2-border-line-color: #463228 !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #463228 !important;
  --h2-border-width: 0 !important;
  --h2-color: #DF7B41 !important;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 500 !important;
  --h3-background: transparent !important;
  --h3-border-color: #8F3F2B !important;
  --h3-border-left-color: #463228 !important;
  --h3-border-line-color: #463228 !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #463228 !important;
  --h3-border-width: 0 !important;
  --h3-color: #DF7B41 !important;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 500 !important;
  --h4-background: transparent !important;
  --h4-border-color: #a66038 !important;
  --h4-border-left-color: #463228 !important;
  --h4-border-line-color: #463228 !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #463228 !important;
  --h4-border-width: 0 !important;
  --h4-color: #DF7B41 !important;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 500 !important;
  --h5-background: transparent !important;
  --h5-border-color: #463228 !important;
  --h5-border-left-color: #463228 !important;
  --h5-border-line-color: #463228 !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #463228 !important;
  --h5-border-width: 0 !important;
  --h5-color: #DF7B41 !important;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 500 !important;
  --h6-background: transparent !important;
  --h6-border-color: #0d1014 !important;
  --h6-border-left-color: #463228 !important;
  --h6-border-line-color: #463228 !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #463228 !important;
  --h6-border-width: 0 !important;
  --h6-color: #DF7B41 !important;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 500 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #DF7B41 !important;
  --he-text-on-accent-inactive: #bccad8 !important;
  --he-title-bar-active-action: #C48A69 !important;
  --he-title-bar-active-bg: #0d1014 !important;
  --he-title-bar-active-fg: #bccad8 !important;
  --he-title-bar-active-pinned-bg: #1a1e24 !important;
  --he-title-bar-inactive-action: #97a1b9 !important;
  --he-title-bar-inactive-bg: #1a1e24 !important;
  --he-title-bar-inactive-fg: #586477 !important;
  --he-title-bar-inactive-pinned-bg: #1a1e24 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #463228 !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 500 !important;
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #DF7B41 !important;
  --heading-formatting: #586477 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(148, 87, 49, 0.575) !important;
  --hr: #744F3C !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #744F3C !important;
  --hr-f: "Material Icons Sharp" !important;
  --hr-icon-background: #1a1e24 !important;
  --hr-icon-color: #DF7B41 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-sym: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(253, 162, 115, 0.25) !important;
  --hvr-active: rgba(236, 110, 52, 0.3) !important;
  --hvr2: rgba(148, 87, 49, 0.575) !important;
  --i-at: #BF7F5E !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #97a1b9 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #bccad8 !important;
  --icon-color-hover: #bccad8 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #0b0f13 !important;
  --illusion-h1-background: #BF7F5E !important;
  --illusion-h2-background: #DF7B41 !important;
  --illusion-h3-background: #8F3F2B !important;
  --illusion-h4-background: #a66038 !important;
  --illusion-h5-background: #463228 !important;
  --illusion-h6-background: #0d1014 !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: rgba(12, 9, 6, 0.38) !important;
  --image-border-color: #463228 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #586477 !important;
  --indentation-guide-color: #744F3C !important;
  --indentation-guide-color-active: #DF7B41 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #744F3C !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #DF7B41 !important;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --inline-title-weight: 500 !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #0b0f13 !important;
  --input-shadow-hover: 3px 3px 0 #0b0f13 !important;
  --interactive-accent: #c66c39 !important;
  --interactive-accent-hover: #586477 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #586477 !important;
  --interactive-normal: #0b0f13 !important;
  --its: "its" !important;
  --kanban-button-background: #232831 !important;
  --kanban-button-shadow: 2px 2px 0 #0b0f13 !important;
  --kanban-card-border: 2px solid #0b0f13 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #1a1e24 !important;
  --kanban-card-text-color: #bccad8 !important;
  --kanban-card-title-background: #1a1e24 !important;
  --kanban-card-title-border: 0 1px 0 #0b0f13 !important;
  --kanban-lane-background: #232831 !important;
  --kanban-lane-border: 3px solid #0b0f13 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #0b0f13 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #E57858 !important;
  --kanban-tag-background: #a66038 !important;
  --latex-color: #C48A69 !important;
  --latex-format-color: #586477 !important;
  --latex-syntax-color: #97a1b9 !important;
  --light: #1a1e24 !important;
  --lightgray: #1a1e24 !important;
  --line-height-tight: 1.3em !important;
  --lines: #744F3C !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #E57858 !important;
  --link-color-hover: #C48A69 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #E57858 !important;
  --link-external-color-hover: #8F3F2B !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #586477 !important;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #463228 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #744F3C !important;
  --list-color-2: #744F3C !important;
  --list-color-3: #744F3C !important;
  --list-color-4: #744F3C !important;
  --list-color-5: #744F3C !important;
  --list-color-6: #744F3C !important;
  --list-indent: 25px !important;
  --list-marker-color: #DF7B41 !important;
  --list-marker-color-collapsed: #586477 !important;
  --list-marker-color-hover: #97a1b9 !important;
  --list-marker-color-other: #8F3F2B !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #C48A69 !important;
  --list-spacing: 1px !important;
  --lite-accent: #C48A69 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #1a1e24 !important;
  --menu-border-color: #252c36 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #0b0f13 !important;
  --message-border-color: #0b0f13 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #0b0f13 !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #463228 !important;
  --metadata-button-text-color: #586477 !important;
  --metadata-divider-color: #463228 !important;
  --metadata-icon-color: #97a1b9 !important;
  --metadata-input-background-active: rgba(12, 9, 6, 0.38) !important;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #bccad8 !important;
  --metadata-label-background-active: rgba(12, 9, 6, 0.38) !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #97a1b9 !important;
  --metadata-label-text-color-hover: #97a1b9 !important;
  --metadata-property-background-active: rgba(236, 110, 52, 0.3) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #DF7B41 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #252c36 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #97a1b9 !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #1a1e24 !important;
  --modal-border-color: #0b0f13 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: rgba(12, 9, 6, 0.38) !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #0d1014 !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #bccad8 !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #97a1b9 !important;
  --nav-heading-color-hover: #bccad8 !important;
  --nav-indentation-guide-color: #744F3C !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #c66c39 !important;
  --nav-item-background-border-color-hover: #c66c39 !important;
  --nav-item-background-hover: #c66c39 !important;
  --nav-item-background-selected: rgba(253, 162, 115, 0.25) !important;
  --nav-item-border-color: #C48A69 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #bccad8 !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #bccad8 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #97a1b9 !important;
  --nav-tag-color-hover: #97a1b9 !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #1a1e24 !important;
  --note-rgb: 26, 30, 36 !important;
  --note-title-border-color: #DF7B41 !important;
  --outer-bar: #0b0f13 !important;
  --outline: #0b0f13 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #1a1e24 !important;
  --pdf-background: #1a1e24 !important;
  --pdf-page-background: #1a1e24 !important;
  --pdf-shadow: 0 0 0 1px #463228 !important;
  --pdf-sidebar-background: #1a1e24 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #463228 !important;
  --pill-border-color: #463228 !important;
  --pill-border-color-hover: #252c36 !important;
  --pill-color: #97a1b9 !important;
  --pill-color-hover: #bccad8 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #E57858 !important;
  --pill-radius: 0 !important;
  --popover-background: #1a1e24 !important;
  --popover-border: 3px solid #0b0f13 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #DF7B41 !important;
  --progress-bg: #252c36 !important;
  --prompt-background: #1a1e24 !important;
  --prompt-border-color: #0b0f13 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #DF7B41 !important;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --r-heading-font-weight: 500 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #C48A69 !important;
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
  --raised-background: color-mix(in srgb, #0b0f13 65%, transparent) linear-gradient(#0b0f13, color-mix(in srgb, #0b0f13 65%, transparent)) !important;
  --ribbon-background: #0b0f13 !important;
  --ribbon-background-collapsed: #1a1e24 !important;
  --ribbon-border-color: #0b0f13 !important;
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
  --scrollbar-active-thumb-bg: #C48A69 !important;
  --scrollbar-bg: #252c36 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #a66038 !important;
  --scrollbar-track-bg: #1a1e24 !important;
  --search-border: 2px solid #0b0f13 !important;
  --search-box-shadow: 2px 2px 0 #0b0f13 !important;
  --search-clear-button-color: #97a1b9 !important;
  --search-icon-color: #97a1b9 !important;
  --search-result-background: #1a1e24 !important;
  --secondary: #E57858 !important;
  --setting-group-heading-color: #bccad8 !important;
  --setting-item-alt-background-hover: rgba(12, 9, 6, 0.38) !important;
  --setting-item-background-hover: rgba(253, 162, 115, 0.25) !important;
  --setting-item-border-color: #463228 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #DF7B41 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: rgba(12, 9, 6, 0.38) !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #463228 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #0b0f13 !important;
  --shadow-m: 3px 3px 0 #0b0f13 !important;
  --shadow-ml: 4px 4px 0 #0b0f13 !important;
  --shadow-s: 2px 2px 0 #0b0f13 !important;
  --side-bar: #1a1e24 !important;
  --side-bar-bg: #0b0f13 !important;
  --sidebar-icon-color: #bccad8 !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #c66c39 !important;
  --sidebar-tab-background-color-hover: #DF7B41 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #c66c39 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #1a1e24 !important;
  --slider-thumb-border-color: #252c36 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #463228 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #97a1b9 !important;
  --statblock-alt: rgba(12, 9, 6, 0.38) !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #1a1e24 !important;
  --statblock-bar-border-color: #DF7B41 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #DF7B41 !important;
  --statblock-border-color: #744F3C !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #0b0f13 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #bccad8 !important;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-heading-font-color: #DF7B41 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 500 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #744F3C !important;
  --statblock-primary-color: #bccad8 !important;
  --statblock-property-font-color: #bccad8 !important;
  --statblock-property-name-font-color: #DF7B41 !important;
  --statblock-rule-color: #DF7B41 !important;
  --statblock-section-heading-border-color: #463228 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-section-heading-font-color: #63778f !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 500 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #0b0f13 !important;
  --status-bar-border-color: #DF7B41 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #97a1b9 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #c66c39 !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #32603e !important;
  --suggestion-background: #1a1e24 !important;
  --tab-background: #0b0f13 !important;
  --tab-background-active: #1a1e24 !important;
  --tab-container-background: #0b0f13 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #744F3C !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #DF7B41 !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #06080c60 !important;
  --tab-stacked-shadow-color: #06080c60 !important;
  --tab-switcher-background: #1a1e24 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1e24, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0b0f13 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #0b0f13 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #C48A69, 5px 5px 0 #0b0f13 !important;
  --tab-text-color: #586477 !important;
  --tab-text-color-active: #bccad8 !important;
  --tab-text-color-focused: #586477 !important;
  --tab-text-color-focused-active: #bccad8 !important;
  --tab-text-color-focused-active-current: #bccad8 !important;
  --tab-text-color-focused-highlighted: #E57858 !important;
  --tab-text-color-hover: #bccad8 !important;
  --tab-top-outline-width: 0 !important;
  --table: #463228 !important;
  --table-add-button-background: #c66c39 !important;
  --table-add-button-border-color: #1a1e24 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #1a1e24 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: rgba(12, 9, 6, 0.38) !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #c66c39 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #a66038 !important;
  --table-header-background-hover: #DF7B41 !important;
  --table-header-border-color: #1a1e24 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #C48A69 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: rgba(12, 9, 6, 0.38) !important;
  --table-row-alt-background-hover: rgba(148, 87, 49, 0.575) !important;
  --table-row-background-hover: rgba(148, 87, 49, 0.575) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: hsla(0, 49%, 49%, 0.1) !important;
  --table-selection-border-color: #c66c39 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #a66038 !important;
  --tag-background: #a66038 !important;
  --tag-background-color: #a66038 !important;
  --tag-background-hover: #DF7B41 !important;
  --tag-border-color: #a66038 !important;
  --tag-border-color-hover: #DF7B41 !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #d04e4e !important;
  --tall: 700px !important;
  --td: rgba(12, 9, 6, 0.38) !important;
  --tertiary: #8F3F2B !important;
  --text: #bccad8 !important;
  --text-accent: #E57858 !important;
  --text-accent-hover: #8F3F2B !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(253, 162, 115, 0.25) !important;
  --text-highlight-bg-active: rgba(236, 110, 52, 0.3) !important;
  --text-muted: #97a1b9 !important;
  --text-normal: #bccad8 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(148, 87, 49, 0.575) !important;
  --textHighlight: rgba(253, 162, 115, 0.25) !important;
  --th: #a66038 !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #BF7F5E !important;
  --theme-rainbow-2: #DF7B41 !important;
  --theme-rainbow-3: #8F3F2B !important;
  --theme-rainbow-4: #a66038 !important;
  --theme-rainbow-5: #463228 !important;
  --theme-rainbow-6: #0d1014 !important;
  --tiny: 100px !important;
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #1a1e24 !important;
  --titlebar-background-focused: #0b0f13 !important;
  --titlebar-border-color: #463228 !important;
  --titlebar-text-color: #bccad8 !important;
  --titlebar-text-color-focused: #bccad8 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --vault-name-color: #DF7B41 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #bccad8 !important;
  --vault-profile-color-hover: #bccad8 !important;
  --vault-profile-font-size: 14px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 15, 19);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(11, 15, 19);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 15, 19);
  border-left-color: rgb(11, 15, 19);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(253, 162, 115, 0.25);
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body del {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: line-through 1px rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body p {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(151, 161, 185) none 0px;
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(229, 120, 88);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 120, 88) none 0px;
  text-decoration: rgb(229, 120, 88);
  text-decoration-color: rgb(229, 120, 88);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(229, 120, 88);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 120, 88) none 0px;
  text-decoration: rgb(229, 120, 88);
  text-decoration-color: rgb(229, 120, 88);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(88, 100, 119) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body dt {
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(13, 16, 20);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body table {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(12, 9, 6, 0.38);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(166, 96, 56);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(250, 138, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 138, 69);
  border-right-color: rgb(250, 138, 69);
  border-top-color: rgb(250, 138, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(250, 138, 69);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(11, 15, 19);
  border-bottom-color: rgb(151, 161, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(198, 108, 57);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(198, 108, 57);
  border-right-color: rgb(188, 202, 216);
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
  color: rgb(88, 100, 119);
  text-decoration: rgb(88, 100, 119);
  text-decoration-color: rgb(88, 100, 119);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(223, 123, 65);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(223, 123, 65);
  border-right-color: rgb(223, 123, 65);
  border-top-color: rgb(223, 123, 65);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
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
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-left-width: 4px;
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
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
  background-color: rgba(12, 9, 6, 0.38);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(11, 15, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(11, 15, 19);
  border-left-width: 3px;
  border-right-color: rgb(11, 15, 19);
  border-right-width: 3px;
  border-top-color: rgb(11, 15, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(11, 15, 19) 5px 5px 0px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(236, 110, 52, 0.3);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(11, 15, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(11, 15, 19);
  border-left-width: 3px;
  border-right-color: rgb(11, 15, 19);
  border-right-width: 3px;
  border-top-color: rgb(11, 15, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(236, 110, 52, 0.3);
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(236, 110, 52, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(166, 96, 56);
  border-bottom-color: rgb(166, 96, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(166, 96, 56);
  border-right-color: rgb(166, 96, 56);
  border-top-color: rgb(166, 96, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(11, 15, 19);
  border-left-color: rgb(11, 15, 19);
  border-right-color: rgb(11, 15, 19);
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
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(151, 161, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(151, 161, 185);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(11, 15, 19);
  border-bottom-color: rgb(223, 123, 65);
  border-left-color: rgb(223, 123, 65);
  border-right-color: rgb(223, 123, 65);
  border-top-color: rgb(223, 123, 65);
  border-top-left-radius: 0px;
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(151, 161, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(151, 161, 185);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(151, 161, 185);
  stroke: rgb(151, 161, 185);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(88, 100, 119);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 100, 119);
  border-right-color: rgb(88, 100, 119);
  border-top-color: rgb(88, 100, 119);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(88, 100, 119);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(70, 50, 40);
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(151, 161, 185);
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(11, 15, 19);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(188, 202, 216);
  text-decoration: underline dotted rgb(188, 202, 216);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(151, 161, 185);
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(250, 138, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 138, 69);
  border-right-color: rgb(250, 138, 69);
  border-top-color: rgb(250, 138, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(11, 15, 19) 0px 2px 0px 0px;
  color: rgb(250, 138, 69);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body sub {
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body summary {
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body sup {
  color: rgb(188, 202, 216);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #E8AF8E !important;
  --accent-color: 232, 175, 142 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #A9523C !important;
  --accent2-lite: #E57858 !important;
  --aside-bg: #f1f5ff !important;
  --background-modifier-active-hover: #dc8a67 !important;
  --background-modifier-border: #CCD6EB !important;
  --background-modifier-border-focus: #E8AF8E !important;
  --background-modifier-border-hover: #e1e9f6 !important;
  --background-modifier-cover: #d0ddef62 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #d0ddef62 !important;
  --background-modifier-form-field-hover: #d0ddef62 !important;
  --background-modifier-hover: rgba(255, 158, 89, 0.4) !important;
  --background-modifier-message: #dc8a67 !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #f8fbff !important;
  --background-primary-alt: #7B4430 !important;
  --background-secondary: #f8fbff !important;
  --background-secondary-alt: #eef3fd !important;
  --bases-cards-background: #f8fbff !important;
  --bases-cards-cover-background: #7B4430 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #CCD6EB !important;
  --bases-cards-shadow-hover: 0 0 0 1px #e1e9f6 !important;
  --bases-embed-border-color: #CCD6EB !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #CF9870 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #f8fbff !important;
  --bases-table-cell-background-active: #f8fbff !important;
  --bases-table-cell-background-disabled: #7B4430 !important;
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #E8AF8E !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #dc8a67 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #7B4430 !important;
  --bases-table-header-background: #f8fbff !important;
  --bases-table-header-background-hover: rgba(255, 158, 89, 0.4) !important;
  --bases-table-header-color: #CF9870 !important;
  --bases-table-row-background-hover: rgba(255, 158, 89, 0.4) !important;
  --bases-table-summary-background: #f8fbff !important;
  --bases-table-summary-background-hover: rgba(255, 158, 89, 0.4) !important;
  --bg: #e1e9f6 !important;
  --blockquote-background-color: #f1f5ff !important;
  --blockquote-border-color: #e1e9f6 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #697580 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent)) !important;
  --bodyFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #e1e9f6 !important;
  --box-border-m: 3px solid #e1e9f6 !important;
  --box-border-s: 1px solid #e1e9f6 !important;
  --bttn: #E19363 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #E19363 !important;
  --button-background-hover: #a6bbde !important;
  --button-border: #E19363 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #f8fbff !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 166, 180, 204 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #697580 !important;
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
  --checkbox-border-color: #E8AF8E !important;
  --checkbox-border-color-hover: #dc8a67 !important;
  --checkbox-color: #E8AF8E !important;
  --checkbox-color-hover: #dc8a67 !important;
  --checkbox-marker-color: #f8fbff !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #a6bbde !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #f1f5ff !important;
  --code-bg: #f1f5ff !important;
  --code-border-color: #CCD6EB !important;
  --code-bracket-background: rgba(255, 158, 89, 0.4) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #EA7542 !important;
  --code-punctuation: #CF9870 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #e1e9f6 !important;
  --code-size: .90em !important;
  --code-text: #EA7542 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #a6bbde !important;
  --color-accent: hsl(0, 49%, 49%) !important;
  --color-accent-1: hsl(-1, 49.49%, 52.675%) !important;
  --color-accent-2: hsl(-3, 49.98%, 56.35%) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #697580 !important;
  --dark-accent: #dc8a67 !important;
  --dark-sidebar: #f1f5ff !important;
  --darkgray: #697580 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(232, 175, 142, 0.1) !important;
  --dataview-th-background: #eef3fd !important;
  --dataview-th-border-bottom: 2px solid #E19363 !important;
  --dataview-th-color: #E19363 !important;
  --dataview-th-count-color: #E19363 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 500 !important;
  --deep-dark-accent: #7B4430 !important;
  --divider-color: #eef3fd !important;
  --divider-color-hover: #E8AF8E !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #dc8a67 !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #eef3fd !important;
  --dropdown-background-hover: #a6bbde !important;
  --embed-bg: #f1f5ff !important;
  --embed-block-shadow-hover: 2px 2px 0 #e1e9f6 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #e1e9f6 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #e1e9f6 !important;
  --embed-border-left: 2px solid #E19363 !important;
  --embed-border-left-color: #E19363 !important;
  --embed-border-left-color-hover: #E19363 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #e1e9f6 !important;
  --embed-border-start: 2px solid #dc8a67 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #e1e9f6 !important;
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
  --fg: #91542E !important;
  --file-font: "its" !important;
  --file-header-background: #f8fbff !important;
  --file-header-background-focused: #f8fbff !important;
  --file-header-breadcrumb-color: #a6bbde !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #a6bbde !important;
  --file-header-color-active: #697580 !important;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #dc8a67 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #eef3fd !important;
  --file-icon: "" !important;
  --file-icon-color: #a6bbde !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #697580 !important;
  --flair-background: #eef3fd !important;
  --flair-color: #697580 !important;
  --folder: #BA5D4B !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #BA5D4B !important;
  --folder-icon-open-color: #EDB595 !important;
  --folder-open: #EDB595 !important;
  --folder-open-text-color: #697580 !important;
  --folder-text-color: #697580 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
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
  --footnote: #8996a0 !important;
  --footnote-divider-color: #CCD6EB !important;
  --footnote-id-color: #CF9870 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #d0ddef62 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #a6bbde !important;
  --graph-arrow: #CF9870 !important;
  --graph-background: #f8fbff !important;
  --graph-bg: #f8fbff !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #C48A69 !important;
  --graph-focused: #E57858 !important;
  --graph-img: #A9523C !important;
  --graph-line: rgba(255, 158, 89, 0.4) !important;
  --graph-line-hover: #E8AF8E !important;
  --graph-lines: rgba(255, 158, 89, 0.4) !important;
  --graph-node: #697580 !important;
  --graph-node-attachment: #A9523C !important;
  --graph-node-focused: #E57858 !important;
  --graph-node-hover-fill: #C48A69 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #dc8a67 !important;
  --graph-node-unresolved: #a6bbde !important;
  --graph-tag: #dc8a67 !important;
  --graph-text: #697580 !important;
  --gray: #CF9870 !important;
  --h1-background: transparent !important;
  --h1-border-color: #E19363 !important;
  --h1-border-left-color: #CCD6EB !important;
  --h1-border-line-color: #CCD6EB !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #CCD6EB !important;
  --h1-border-width: 0 !important;
  --h1-color: #E19363 !important;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h1-weight: 500 !important;
  --h2-background: transparent !important;
  --h2-border-color: #CF9870 !important;
  --h2-border-left-color: #CCD6EB !important;
  --h2-border-line-color: #CCD6EB !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #CCD6EB !important;
  --h2-border-width: 0 !important;
  --h2-color: #E19363 !important;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 500 !important;
  --h3-background: transparent !important;
  --h3-border-color: #C16E43 !important;
  --h3-border-left-color: #CCD6EB !important;
  --h3-border-line-color: #CCD6EB !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #CCD6EB !important;
  --h3-border-width: 0 !important;
  --h3-color: #E19363 !important;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 500 !important;
  --h4-background: transparent !important;
  --h4-border-color: #a6bbde !important;
  --h4-border-left-color: #CCD6EB !important;
  --h4-border-line-color: #CCD6EB !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #CCD6EB !important;
  --h4-border-width: 0 !important;
  --h4-color: #E19363 !important;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 500 !important;
  --h5-background: transparent !important;
  --h5-border-color: #e48751 !important;
  --h5-border-left-color: #CCD6EB !important;
  --h5-border-line-color: #CCD6EB !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #CCD6EB !important;
  --h5-border-width: 0 !important;
  --h5-color: #E19363 !important;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 500 !important;
  --h6-background: transparent !important;
  --h6-border-color: #a6bbde !important;
  --h6-border-left-color: #CCD6EB !important;
  --h6-border-line-color: #CCD6EB !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #CCD6EB !important;
  --h6-border-width: 0 !important;
  --h6-color: #E19363 !important;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 500 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #E19363 !important;
  --he-text-on-accent-inactive: #697580 !important;
  --he-title-bar-active-action: #C48A69 !important;
  --he-title-bar-active-bg: #f1f5ff !important;
  --he-title-bar-active-fg: #697580 !important;
  --he-title-bar-active-pinned-bg: #f8fbff !important;
  --he-title-bar-inactive-action: #CF9870 !important;
  --he-title-bar-inactive-bg: #f8fbff !important;
  --he-title-bar-inactive-fg: #a6bbde !important;
  --he-title-bar-inactive-pinned-bg: #f8fbff !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #CCD6EB !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 500 !important;
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #E19363 !important;
  --heading-formatting: #a6bbde !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(255, 158, 89, 0.4) !important;
  --hr: #CFC2BB !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #CFC2BB !important;
  --hr-f: "Material Icons Sharp" !important;
  --hr-icon-background: #f8fbff !important;
  --hr-icon-color: #E19363 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-sym: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(253, 157, 115, 0.25) !important;
  --hvr-active: rgba(255, 158, 89, 0.4) !important;
  --hvr2: rgba(255, 158, 89, 0.4) !important;
  --i-at: #C16E43 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #CF9870 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #697580 !important;
  --icon-color-hover: #697580 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #e1e9f6 !important;
  --illusion-h1-background: #E19363 !important;
  --illusion-h2-background: #CF9870 !important;
  --illusion-h3-background: #C16E43 !important;
  --illusion-h4-background: #a6bbde !important;
  --illusion-h5-background: #e48751 !important;
  --illusion-h6-background: #a6bbde !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #d0ddef62 !important;
  --image-border-color: #CCD6EB !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #a6bbde !important;
  --indentation-guide-color: #CFC2BB !important;
  --indentation-guide-color-active: #E8AF8E !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #CFC2BB !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #E19363 !important;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --inline-title-weight: 500 !important;
  --input-bg: #d0ddef62 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #e1e9f6 !important;
  --input-shadow-hover: 3px 3px 0 #e1e9f6 !important;
  --interactive-accent: #dc8a67 !important;
  --interactive-accent-hover: #a6bbde !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #a6bbde !important;
  --interactive-normal: #eef3fd !important;
  --its: "its" !important;
  --kanban-button-background: #f1f5ff !important;
  --kanban-button-shadow: 2px 2px 0 #e1e9f6 !important;
  --kanban-card-border: 2px solid #e1e9f6 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #f8fbff !important;
  --kanban-card-text-color: #697580 !important;
  --kanban-card-title-background: #f8fbff !important;
  --kanban-card-title-border: 0 1px 0 #e1e9f6 !important;
  --kanban-lane-background: #f1f5ff !important;
  --kanban-lane-border: 3px solid #e1e9f6 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #e1e9f6 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #E57858 !important;
  --kanban-tag-background: #e48751 !important;
  --latex-color: #C48A69 !important;
  --latex-format-color: #a6bbde !important;
  --latex-syntax-color: #CF9870 !important;
  --light: #f8fbff !important;
  --lightgray: #f8fbff !important;
  --line-height-tight: 1.3em !important;
  --lines: #CFC2BB !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #E57858 !important;
  --link-color-hover: #C48A69 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #E57858 !important;
  --link-external-color-hover: #A9523C !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #a6bbde !important;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #CCD6EB !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #CFC2BB !important;
  --list-color-2: #CFC2BB !important;
  --list-color-3: #CFC2BB !important;
  --list-color-4: #CFC2BB !important;
  --list-color-5: #CFC2BB !important;
  --list-color-6: #CFC2BB !important;
  --list-indent: 25px !important;
  --list-marker-color: #E8AF8E !important;
  --list-marker-color-collapsed: #a6bbde !important;
  --list-marker-color-hover: #CF9870 !important;
  --list-marker-color-other: #A9523C !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #C48A69 !important;
  --list-spacing: 1px !important;
  --lite-accent: #C48A69 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #f8fbff !important;
  --menu-border-color: #e1e9f6 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #e1e9f6 !important;
  --message-border-color: #e1e9f6 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #e1e9f6 !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #CCD6EB !important;
  --metadata-button-text-color: #a6bbde !important;
  --metadata-divider-color: #CCD6EB !important;
  --metadata-icon-color: #CF9870 !important;
  --metadata-input-background-active: #d0ddef62 !important;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #697580 !important;
  --metadata-label-background-active: #d0ddef62 !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #CF9870 !important;
  --metadata-label-text-color-hover: #CF9870 !important;
  --metadata-property-background-active: rgba(255, 158, 89, 0.4) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #E8AF8E !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e1e9f6 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #CF9870 !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #f8fbff !important;
  --modal-border-color: #e1e9f6 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #d0ddef62 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #f1f5ff !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #697580 !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #CF9870 !important;
  --nav-heading-color-hover: #697580 !important;
  --nav-indentation-guide-color: #CFC2BB !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #dc8a67 !important;
  --nav-item-background-border-color-hover: #dc8a67 !important;
  --nav-item-background-hover: #dc8a67 !important;
  --nav-item-background-selected: rgba(253, 157, 115, 0.25) !important;
  --nav-item-border-color: #C48A69 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #697580 !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #697580 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #CF9870 !important;
  --nav-tag-color-hover: #CF9870 !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #f8fbff !important;
  --note-rgb: 248, 251, 255 !important;
  --note-title-border-color: #E19363 !important;
  --outer-bar: #eef3fd !important;
  --outline: #e1e9f6 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #f8fbff !important;
  --pdf-background: #f8fbff !important;
  --pdf-page-background: #f8fbff !important;
  --pdf-sidebar-background: #f8fbff !important;
  --pill-border-color: #CCD6EB !important;
  --pill-border-color-hover: #e1e9f6 !important;
  --pill-color: #CF9870 !important;
  --pill-color-hover: #697580 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #E57858 !important;
  --pill-radius: 0 !important;
  --popover-background: #f8fbff !important;
  --popover-border: 3px solid #e1e9f6 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #E8AF8E !important;
  --progress-bg: #e1e9f6 !important;
  --prompt-background: #f8fbff !important;
  --prompt-border-color: #e1e9f6 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #E19363 !important;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --r-heading-font-weight: 500 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #C48A69 !important;
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
  --raised-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent)) !important;
  --ribbon-background: #eef3fd !important;
  --ribbon-background-collapsed: #f8fbff !important;
  --ribbon-border-color: #eef3fd !important;
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
  --scrollbar-active-thumb-bg: #C48A69 !important;
  --scrollbar-bg: #e1e9f6 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #e48751 !important;
  --scrollbar-track-bg: #f8fbff !important;
  --search-border: 2px solid #e1e9f6 !important;
  --search-box-shadow: 2px 2px 0 #e1e9f6 !important;
  --search-clear-button-color: #CF9870 !important;
  --search-icon-color: #CF9870 !important;
  --search-result-background: #f8fbff !important;
  --secondary: #E57858 !important;
  --setting-group-heading-color: #697580 !important;
  --setting-item-alt-background-hover: #d0ddef62 !important;
  --setting-item-background-hover: rgba(253, 157, 115, 0.25) !important;
  --setting-item-border-color: #CCD6EB !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #E19363 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #d0ddef62 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #CCD6EB !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #e1e9f6 !important;
  --shadow-m: 3px 3px 0 #e1e9f6 !important;
  --shadow-ml: 4px 4px 0 #e1e9f6 !important;
  --shadow-s: 2px 2px 0 #e1e9f6 !important;
  --side-bar: #f8fbff !important;
  --side-bar-bg: #eef3fd !important;
  --sidebar-icon-color: #697580 !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #E19363 !important;
  --sidebar-tab-background-color-hover: #E8AF8E !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #E19363 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #f8fbff !important;
  --slider-thumb-border-color: #e1e9f6 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #CCD6EB !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #CF9870 !important;
  --statblock-alt: #d0ddef62 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #f8fbff !important;
  --statblock-bar-border-color: #E8AF8E !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #E8AF8E !important;
  --statblock-border-color: #CFC2BB !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #e1e9f6 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #697580 !important;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-heading-font-color: #E19363 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 500 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #CFC2BB !important;
  --statblock-primary-color: #697580 !important;
  --statblock-property-font-color: #697580 !important;
  --statblock-property-name-font-color: #E19363 !important;
  --statblock-rule-color: #E8AF8E !important;
  --statblock-section-heading-border-color: #CCD6EB !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-section-heading-font-color: #8996a0 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 500 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #eef3fd !important;
  --status-bar-border-color: #E8AF8E !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #CF9870 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #dc8a67 !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #599049 !important;
  --suggestion-background: #f8fbff !important;
  --tab-background: #eef3fd !important;
  --tab-background-active: #f8fbff !important;
  --tab-container-background: #eef3fd !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #CFC2BB !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #E8AF8E !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62 !important;
  --tab-stacked-shadow-color: #d0ddef62 !important;
  --tab-switcher-background: #f8fbff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fbff, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #e1e9f6 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #e1e9f6 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #C48A69, 5px 5px 0 #e1e9f6 !important;
  --tab-text-color: #a6bbde !important;
  --tab-text-color-active: #697580 !important;
  --tab-text-color-focused: #a6bbde !important;
  --tab-text-color-focused-active: #697580 !important;
  --tab-text-color-focused-active-current: #697580 !important;
  --tab-text-color-focused-highlighted: #E57858 !important;
  --tab-text-color-hover: #697580 !important;
  --tab-top-outline-width: 0 !important;
  --table: #CCD6EB !important;
  --table-add-button-background: #E19363 !important;
  --table-add-button-border-color: #f8fbff !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #f8fbff !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #d0ddef62 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #dc8a67 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #dc8a67 !important;
  --table-header-background-hover: #E8AF8E !important;
  --table-header-border-color: #f8fbff !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #C48A69 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #d0ddef62 !important;
  --table-row-alt-background-hover: rgba(255, 158, 89, 0.4) !important;
  --table-row-background-hover: rgba(255, 158, 89, 0.4) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: hsla(0, 49%, 49%, 0.1) !important;
  --table-selection-border-color: #dc8a67 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #e48751 !important;
  --tag-background: #e48751 !important;
  --tag-background-color: #e48751 !important;
  --tag-background-hover: #E8AF8E !important;
  --tag-border-color: #e48751 !important;
  --tag-border-color-hover: #E8AF8E !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #C48A69 !important;
  --tall: 700px !important;
  --td: #d0ddef62 !important;
  --tertiary: #A9523C !important;
  --text: #697580 !important;
  --text-accent: #E57858 !important;
  --text-accent-hover: #A9523C !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(253, 157, 115, 0.25) !important;
  --text-highlight-bg-active: rgba(255, 158, 89, 0.4) !important;
  --text-muted: #CF9870 !important;
  --text-normal: #697580 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(255, 158, 89, 0.4) !important;
  --textHighlight: rgba(253, 157, 115, 0.25) !important;
  --th: #dc8a67 !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #E19363 !important;
  --theme-rainbow-2: #CF9870 !important;
  --theme-rainbow-3: #C16E43 !important;
  --theme-rainbow-4: #a6bbde !important;
  --theme-rainbow-5: #e48751 !important;
  --theme-rainbow-6: #a6bbde !important;
  --tiny: 100px !important;
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #f8fbff !important;
  --titlebar-background-focused: #eef3fd !important;
  --titlebar-border-color: #CCD6EB !important;
  --titlebar-text-color: #697580 !important;
  --titlebar-text-color-focused: #697580 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --vault-name-color: #E19363 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #697580 !important;
  --vault-profile-color-hover: #697580 !important;
  --vault-profile-font-size: 14px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 243, 253);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(238, 243, 253);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(253, 157, 115, 0.25);
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body del {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: line-through 1px rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body p {
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(207, 152, 112) none 0px;
  text-decoration: rgb(207, 152, 112);
  text-decoration-color: rgb(207, 152, 112);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(229, 120, 88);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 120, 88) none 0px;
  text-decoration: rgb(229, 120, 88);
  text-decoration-color: rgb(229, 120, 88);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(229, 120, 88);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 120, 88) none 0px;
  text-decoration: rgb(229, 120, 88);
  text-decoration-color: rgb(229, 120, 88);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(166, 187, 222) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body dt {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ol > li {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ul > li {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(241, 245, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body table {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(208, 221, 239, 0.384);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

html[saved-theme="light"] body tr {
  background-color: rgb(220, 138, 103);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(234, 117, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 117, 66);
  border-right-color: rgb(234, 117, 66);
  border-top-color: rgb(234, 117, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(234, 117, 66);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body figcaption {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(207, 152, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(220, 138, 103);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(220, 138, 103);
  border-right-color: rgb(105, 117, 128);
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
  color: rgb(166, 187, 222);
  text-decoration: rgb(166, 187, 222);
  text-decoration-color: rgb(166, 187, 222);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(232, 175, 142);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(232, 175, 142);
  border-right-color: rgb(232, 175, 142);
  border-top-color: rgb(232, 175, 142);
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
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(207, 152, 112);
  text-decoration: rgb(207, 152, 112);
  text-decoration-color: rgb(207, 152, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
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
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
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
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
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
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 4px;
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
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
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(225, 233, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(225, 233, 246);
  border-left-width: 3px;
  border-right-color: rgb(225, 233, 246);
  border-right-width: 3px;
  border-top-color: rgb(225, 233, 246);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(225, 233, 246) 5px 5px 0px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(255, 158, 89, 0.4);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(225, 233, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(225, 233, 246);
  border-left-width: 3px;
  border-right-color: rgb(225, 233, 246);
  border-right-width: 3px;
  border-top-color: rgb(225, 233, 246);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(255, 158, 89, 0.4);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(255, 158, 89, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(228, 135, 81);
  border-bottom-color: rgb(228, 135, 81);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 135, 81);
  border-right-color: rgb(228, 135, 81);
  border-top-color: rgb(228, 135, 81);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
  border-right-color: rgb(238, 243, 253);
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

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(105, 117, 128);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(105, 117, 128);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(207, 152, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(207, 152, 112);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(232, 175, 142);
  border-left-color: rgb(232, 175, 142);
  border-right-color: rgb(232, 175, 142);
  border-top-color: rgb(232, 175, 142);
  border-top-left-radius: 0px;
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(207, 152, 112);
  text-decoration: rgb(207, 152, 112);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(207, 152, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(207, 152, 112);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(207, 152, 112);
  stroke: rgb(207, 152, 112);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(166, 187, 222);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(166, 187, 222);
  border-right-color: rgb(166, 187, 222);
  border-top-color: rgb(166, 187, 222);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(166, 187, 222);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(207, 152, 112);
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(238, 243, 253);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(105, 117, 128);
  text-decoration: underline dotted rgb(105, 117, 128);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(207, 152, 112);
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(234, 117, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 117, 66);
  border-right-color: rgb(234, 117, 66);
  border-top-color: rgb(234, 117, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(225, 233, 246) 0px 2px 0px 0px;
  color: rgb(234, 117, 66);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body sub {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body summary {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body sup {
  color: rgb(105, 117, 128);
}`,
  },
};
