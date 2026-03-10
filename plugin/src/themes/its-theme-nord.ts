import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.nord",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #5E81AC !important;
  --accent-color: 94, 129, 172 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #81A1C1 !important;
  --accent2-lite: #88C0D0 !important;
  --aside-bg: #242933 !important;
  --background-modifier-active-hover: #4C566A !important;
  --background-modifier-border: #434C5E !important;
  --background-modifier-border-focus: #5E81AC !important;
  --background-modifier-border-hover: #3B4252 !important;
  --background-modifier-cover: #06080c60 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #06080c60 !important;
  --background-modifier-form-field-hover: #06080c60 !important;
  --background-modifier-hover: rgba(136, 192, 208, 0.565) !important;
  --background-modifier-message: #4C566A !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #2E3440 !important;
  --background-primary-alt: #242933 !important;
  --background-secondary: #242933 !important;
  --background-secondary-alt: #242933 !important;
  --bases-cards-background: #2E3440 !important;
  --bases-cards-cover-background: #242933 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #434C5E !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3B4252 !important;
  --bases-embed-border-color: #434C5E !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #97a1b9 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #2E3440 !important;
  --bases-table-cell-background-active: #2E3440 !important;
  --bases-table-cell-background-disabled: #242933 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #5E81AC !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4C566A !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #242933 !important;
  --bases-table-header-background: #2E3440 !important;
  --bases-table-header-background-hover: rgba(136, 192, 208, 0.565) !important;
  --bases-table-header-color: #97a1b9 !important;
  --bases-table-row-background-hover: rgba(60, 159, 168, 0.4) !important;
  --bases-table-summary-background: #2E3440 !important;
  --bases-table-summary-background-hover: rgba(136, 192, 208, 0.565) !important;
  --bg: #3B4252 !important;
  --blockquote-background-color: #1d2129 !important;
  --blockquote-border-color: #3B4252 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #ECEFF4 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #242933 65%, transparent) linear-gradient(#242933, color-mix(in srgb, #242933 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #242933 !important;
  --box-border-m: 3px solid #242933 !important;
  --box-border-s: 1px solid #242933 !important;
  --bttn: #4C566A !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #4C566A !important;
  --button-background-hover: #586477 !important;
  --button-border: #4C566A !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #2E3440 !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 88, 100, 159 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #ECEFF4 !important;
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
  --checkbox-border-color: #5E81AC !important;
  --checkbox-border-color-hover: #4C566A !important;
  --checkbox-color: #5E81AC !important;
  --checkbox-color-hover: #4C566A !important;
  --checkbox-marker-color: #2E3440 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #586477 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #3B4252 !important;
  --code-bg: #3B4252 !important;
  --code-border-color: #434C5E !important;
  --code-bracket-background: rgba(136, 192, 208, 0.565) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #81A1C1 !important;
  --code-punctuation: #97a1b9 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #242933 !important;
  --code-size: .90em !important;
  --code-text: #81A1C1 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #586477 !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(199, 87, 92) !important;
  --color-accent-2: rgb(209, 113, 121) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #ECEFF4 !important;
  --dark-accent: #4C566A !important;
  --dark-sidebar: #3B4252 !important;
  --darkgray: #ECEFF4 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(94, 129, 172, 0.1) !important;
  --dataview-th-background: #242933 !important;
  --dataview-th-border-bottom: 2px solid #88C0D0 !important;
  --dataview-th-color: #88C0D0 !important;
  --dataview-th-count-color: #88C0D0 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #242933 !important;
  --divider-color: #242933 !important;
  --divider-color-hover: #5E81AC !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #4C566A !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: #242933 !important;
  --dropdown-background-hover: #586477 !important;
  --embed-bg: #1d2129 !important;
  --embed-block-shadow-hover: 2px 2px 0 #242933 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #242933 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #242933 !important;
  --embed-border-left: 2px solid #88C0D0 !important;
  --embed-border-left-color: #88C0D0 !important;
  --embed-border-left-color-hover: #88C0D0 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #242933 !important;
  --embed-border-start: 2px solid #4C566A !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #242933 !important;
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
  --file-header-background: #2E3440 !important;
  --file-header-background-focused: #2E3440 !important;
  --file-header-breadcrumb-color: #586477 !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #586477 !important;
  --file-header-color-active: #ECEFF4 !important;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #4C566A !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #242933 !important;
  --file-icon: "" !important;
  --file-icon-color: #586477 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #97a1b9 !important;
  --flair-background: #242933 !important;
  --flair-color: #ECEFF4 !important;
  --folder: #A3BE8C !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #A3BE8C !important;
  --folder-icon-open-color: #3c9ba8 !important;
  --folder-open: #3c9ba8 !important;
  --folder-open-text-color: #ECEFF4 !important;
  --folder-text-color: #97a1b9 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial' !important;
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #63778f !important;
  --footnote-divider-color: #434C5E !important;
  --footnote-id-color: #97a1b9 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #06080c60 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #586477 !important;
  --graph-arrow: #97a1b9 !important;
  --graph-background: #242933 !important;
  --graph-bg: #242933 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #88C0D0 !important;
  --graph-focused: #88C0D0 !important;
  --graph-img: #A3BE8C !important;
  --graph-line: #4C566A !important;
  --graph-line-hover: #5E81AC !important;
  --graph-lines: #4C566A !important;
  --graph-node: #cfd7dd !important;
  --graph-node-attachment: #A3BE8C !important;
  --graph-node-focused: #88C0D0 !important;
  --graph-node-hover-fill: #88C0D0 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #88C0D0 !important;
  --graph-node-unresolved: #586477 !important;
  --graph-tag: #88C0D0 !important;
  --graph-text: #ECEFF4 !important;
  --gray: #97a1b9 !important;
  --h1-background: transparent !important;
  --h1-border-color: #BF616A !important;
  --h1-border-left-color: #434C5E !important;
  --h1-border-line-color: #434C5E !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #434C5E !important;
  --h1-border-width: 0 !important;
  --h1-color: #88C0D0 !important;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #D08770 !important;
  --h2-border-left-color: #434C5E !important;
  --h2-border-line-color: #434C5E !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #434C5E !important;
  --h2-border-width: 0 !important;
  --h2-color: #88C0D0 !important;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #A5916A !important;
  --h3-border-left-color: #434C5E !important;
  --h3-border-line-color: #434C5E !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #434C5E !important;
  --h3-border-width: 0 !important;
  --h3-color: #88C0D0 !important;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #88A073 !important;
  --h4-border-left-color: #434C5E !important;
  --h4-border-line-color: #434C5E !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #434C5E !important;
  --h4-border-width: 0 !important;
  --h4-color: #88C0D0 !important;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #A48EAD !important;
  --h5-border-left-color: #434C5E !important;
  --h5-border-line-color: #434C5E !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #434C5E !important;
  --h5-border-width: 0 !important;
  --h5-color: #88C0D0 !important;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #29395a !important;
  --h6-border-left-color: #434C5E !important;
  --h6-border-line-color: #434C5E !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #434C5E !important;
  --h6-border-width: 0 !important;
  --h6-color: #88C0D0 !important;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #88C0D0 !important;
  --he-text-on-accent-inactive: #ECEFF4 !important;
  --he-title-bar-active-action: #5E81AC !important;
  --he-title-bar-active-bg: #1d2129 !important;
  --he-title-bar-active-fg: #ECEFF4 !important;
  --he-title-bar-active-pinned-bg: #2E3440 !important;
  --he-title-bar-inactive-action: #97a1b9 !important;
  --he-title-bar-inactive-bg: #2E3440 !important;
  --he-title-bar-inactive-fg: #586477 !important;
  --he-title-bar-inactive-pinned-bg: #2E3440 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #434C5E !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 700 !important;
  --headerFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #88C0D0 !important;
  --heading-formatting: #586477 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(60, 159, 168, 0.4) !important;
  --hr: #434C5E !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #434C5E !important;
  --hr-icon-background: #2E3440 !important;
  --hr-icon-color: #88C0D0 !important;
  --hr-icon-font: "Material Icons Sharp" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(81, 120, 138, 0.48) !important;
  --hvr-active: rgba(136, 192, 208, 0.565) !important;
  --hvr2: rgba(60, 159, 168, 0.4) !important;
  --i-at: #81A1C1 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #97a1b9 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #ECEFF4 !important;
  --icon-color-hover: #ECEFF4 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #242933 !important;
  --illusion-h1-background: #BF616A !important;
  --illusion-h2-background: #D08770 !important;
  --illusion-h3-background: #A5916A !important;
  --illusion-h4-background: #88A073 !important;
  --illusion-h5-background: #A48EAD !important;
  --illusion-h6-background: #29395a !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #06080c60 !important;
  --image-border-color: #434C5E !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #586477 !important;
  --indentation-guide-color: #4C566A !important;
  --indentation-guide-color-active: #5E81AC !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #4C566A !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #88C0D0 !important;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #242933 !important;
  --input-shadow-hover: 3px 3px 0 #242933 !important;
  --interactive-accent: #4C566A !important;
  --interactive-accent-hover: #586477 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #586477 !important;
  --interactive-normal: #242933 !important;
  --its: "its" !important;
  --kanban-button-background: #3B4252 !important;
  --kanban-button-shadow: 2px 2px 0 #242933 !important;
  --kanban-card-border: 2px solid #242933 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #2E3440 !important;
  --kanban-card-text-color: #ECEFF4 !important;
  --kanban-card-title-background: #2E3440 !important;
  --kanban-card-title-border: 0 1px 0 #242933 !important;
  --kanban-lane-background: #3B4252 !important;
  --kanban-lane-border: 3px solid #242933 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #242933 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #88C0D0 !important;
  --kanban-tag-background: #4C566A !important;
  --latex-color: #5E81AC !important;
  --latex-format-color: #586477 !important;
  --latex-syntax-color: #97a1b9 !important;
  --light: #2E3440 !important;
  --lightgray: #242933 !important;
  --line-height-tight: 1.3em !important;
  --lines: #4C566A !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #88C0D0 !important;
  --link-color-hover: #5E81AC !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #88C0D0 !important;
  --link-external-color-hover: #81A1C1 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #586477 !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #434C5E !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #4C566A !important;
  --list-color-2: #4C566A !important;
  --list-color-3: #4C566A !important;
  --list-color-4: #4C566A !important;
  --list-color-5: #4C566A !important;
  --list-color-6: #4C566A !important;
  --list-indent: 25px !important;
  --list-marker-color: #5E81AC !important;
  --list-marker-color-collapsed: #586477 !important;
  --list-marker-color-hover: #97a1b9 !important;
  --list-marker-color-other: #81A1C1 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #5E81AC !important;
  --list-spacing: 1px !important;
  --lite-accent: #5E81AC !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #242933 !important;
  --menu-border-color: #3B4252 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #242933 !important;
  --message-border-color: #242933 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #242933 !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #434C5E !important;
  --metadata-button-text-color: #586477 !important;
  --metadata-divider-color: #434C5E !important;
  --metadata-icon-color: #97a1b9 !important;
  --metadata-input-background-active: #06080c60 !important;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #ECEFF4 !important;
  --metadata-label-background-active: #06080c60 !important;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #97a1b9 !important;
  --metadata-label-text-color-hover: #97a1b9 !important;
  --metadata-property-background-active: rgba(136, 192, 208, 0.565) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #5E81AC !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3B4252 !important;
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
  --modal-background: #2E3440 !important;
  --modal-border-color: #242933 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #06080c60 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #3B4252 !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #ECEFF4 !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #97a1b9 !important;
  --nav-heading-color-hover: #ECEFF4 !important;
  --nav-indentation-guide-color: #4C566A !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #4C566A !important;
  --nav-item-background-border-color-hover: #4C566A !important;
  --nav-item-background-hover: #4C566A !important;
  --nav-item-background-selected: rgba(81, 120, 138, 0.48) !important;
  --nav-item-border-color: #5E81AC !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #97a1b9 !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #ECEFF4 !important;
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
  --note: #2E3440 !important;
  --note-rgb: 46, 52, 64 !important;
  --note-title-border-color: #88C0D0 !important;
  --outer-bar: #242933 !important;
  --outline: #242933 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #2E3440 !important;
  --pdf-background: #2E3440 !important;
  --pdf-page-background: #2E3440 !important;
  --pdf-shadow: 0 0 0 1px #434C5E !important;
  --pdf-sidebar-background: #2E3440 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #434C5E !important;
  --pill-border-color: #434C5E !important;
  --pill-border-color-hover: #3B4252 !important;
  --pill-color: #97a1b9 !important;
  --pill-color-hover: #ECEFF4 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #88C0D0 !important;
  --pill-radius: 0 !important;
  --popover-background: #2E3440 !important;
  --popover-border: 3px solid #242933 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #5E81AC !important;
  --progress-bg: #3B4252 !important;
  --prompt-background: #2E3440 !important;
  --prompt-border-color: #242933 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #88C0D0 !important;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #5E81AC !important;
  --radius-h: 0 !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --radius-xl: 0 !important;
  --rainbow-1: #BF616A !important;
  --rainbow-2: #D08770 !important;
  --rainbow-3: #A5916A !important;
  --rainbow-4: #88A073 !important;
  --rainbow-5: #A48EAD !important;
  --rainbow-6: #29395a !important;
  --raised-background: color-mix(in srgb, #242933 65%, transparent) linear-gradient(#242933, color-mix(in srgb, #242933 65%, transparent)) !important;
  --ribbon-background: #242933 !important;
  --ribbon-background-collapsed: #2E3440 !important;
  --ribbon-border-color: #242933 !important;
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
  --scrollbar-active-thumb-bg: #5E81AC !important;
  --scrollbar-bg: #3B4252 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #4C566A !important;
  --scrollbar-track-bg: #2E3440 !important;
  --search-border: 2px solid #242933 !important;
  --search-box-shadow: 2px 2px 0 #242933 !important;
  --search-clear-button-color: #97a1b9 !important;
  --search-icon-color: #97a1b9 !important;
  --search-result-background: #2E3440 !important;
  --secondary: #88C0D0 !important;
  --setting-group-heading-color: #ECEFF4 !important;
  --setting-item-alt-background-hover: #06080c60 !important;
  --setting-item-background-hover: rgba(81, 120, 138, 0.48) !important;
  --setting-item-border-color: #434C5E !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #88C0D0 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #06080c60 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #434C5E !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #242933 !important;
  --shadow-m: 3px 3px 0 #242933 !important;
  --shadow-ml: 4px 4px 0 #242933 !important;
  --shadow-s: 2px 2px 0 #242933 !important;
  --side-bar: #242933 !important;
  --side-bar-bg: #242933 !important;
  --sidebar-icon-color: #ECEFF4 !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #4C566A !important;
  --sidebar-tab-background-color-hover: #5E81AC !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #4C566A !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #2E3440 !important;
  --slider-thumb-border-color: #3B4252 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #434C5E !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #97a1b9 !important;
  --statblock-alt: #06080c60 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #2E3440 !important;
  --statblock-bar-border-color: #5E81AC !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #5E81AC !important;
  --statblock-border-color: #4C566A !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #242933 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #ECEFF4 !important;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-heading-font-color: #88C0D0 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #434C5E !important;
  --statblock-primary-color: #ECEFF4 !important;
  --statblock-property-font-color: #ECEFF4 !important;
  --statblock-property-name-font-color: #88C0D0 !important;
  --statblock-rule-color: #5E81AC !important;
  --statblock-section-heading-border-color: #434C5E !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-section-heading-font-color: #63778f !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #242933 !important;
  --status-bar-border-color: #5E81AC !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #97a1b9 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #4C566A !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #32603e !important;
  --suggestion-background: #2E3440 !important;
  --tab-background: #242933 !important;
  --tab-background-active: #2E3440 !important;
  --tab-container-background: #242933 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #434C5E !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #5E81AC !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #06080c60 !important;
  --tab-stacked-shadow-color: #06080c60 !important;
  --tab-switcher-background: #242933 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #242933, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #242933 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #242933 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #5E81AC, 5px 5px 0 #242933 !important;
  --tab-text-color: #586477 !important;
  --tab-text-color-active: #ECEFF4 !important;
  --tab-text-color-focused: #586477 !important;
  --tab-text-color-focused-active: #ECEFF4 !important;
  --tab-text-color-focused-active-current: #ECEFF4 !important;
  --tab-text-color-focused-highlighted: #88C0D0 !important;
  --tab-text-color-hover: #ECEFF4 !important;
  --tab-top-outline-width: 0 !important;
  --table: #434C5E !important;
  --table-add-button-background: #4C566A !important;
  --table-add-button-border-color: #2E3440 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #2E3440 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #06080c60 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #4C566A !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #4C566A !important;
  --table-header-background-hover: #5E81AC !important;
  --table-header-border-color: #2E3440 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #5E81AC !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #06080c60 !important;
  --table-row-alt-background-hover: rgba(60, 159, 168, 0.4) !important;
  --table-row-background-hover: rgba(60, 159, 168, 0.4) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #4C566A !important;
  --table-selection-border-radius: 0 !important;
  --tag: #4C566A !important;
  --tag-background: #4C566A !important;
  --tag-background-color: #4C566A !important;
  --tag-background-hover: #5E81AC !important;
  --tag-border-color: #4C566A !important;
  --tag-border-color-hover: #5E81AC !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #A3BE8C !important;
  --tall: 700px !important;
  --td: #06080c60 !important;
  --tertiary: #81A1C1 !important;
  --text: #ECEFF4 !important;
  --text-accent: #88C0D0 !important;
  --text-accent-hover: #81A1C1 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(81, 120, 138, 0.48) !important;
  --text-highlight-bg-active: rgba(136, 192, 208, 0.565) !important;
  --text-muted: #97a1b9 !important;
  --text-normal: #ECEFF4 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(60, 159, 168, 0.4) !important;
  --textHighlight: rgba(81, 120, 138, 0.48) !important;
  --th: #4C566A !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #BF616A !important;
  --theme-rainbow-2: #D08770 !important;
  --theme-rainbow-3: #A5916A !important;
  --theme-rainbow-4: #88A073 !important;
  --theme-rainbow-5: #A48EAD !important;
  --theme-rainbow-6: #29395a !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #2E3440 !important;
  --titlebar-background-focused: #242933 !important;
  --titlebar-border-color: #434C5E !important;
  --titlebar-text-color: #ECEFF4 !important;
  --titlebar-text-color-focused: #ECEFF4 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --vault-name-color: #88C0D0 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #ECEFF4 !important;
  --vault-profile-color-hover: #ECEFF4 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 41, 51);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 41, 51);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 41, 51);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 41, 51);
  border-left-color: rgb(36, 41, 51);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(81, 120, 138, 0.48);
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: line-through 1px rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body p {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(151, 161, 185) none 0px;
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(136, 192, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 192, 208) none 0px;
  text-decoration: rgb(136, 192, 208);
  text-decoration-color: rgb(136, 192, 208);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 192, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 192, 208) none 0px;
  text-decoration: rgb(136, 192, 208);
  text-decoration-color: rgb(136, 192, 208);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(88, 100, 119) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(29, 33, 41);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body table {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(6, 8, 12, 0.376);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(76, 86, 106);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(129, 161, 193);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(129, 161, 193);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(36, 41, 51);
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
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(236, 239, 244);
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
  border-bottom-color: rgb(94, 129, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
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
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
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
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
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
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
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
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
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
  --callout-color: rgb(186, 64, 64);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 239, 244);
  border-left-width: 4px;
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
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
  background-color: rgba(6, 8, 12, 0.376);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(36, 41, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(36, 41, 51);
  border-left-width: 3px;
  border-right-color: rgb(36, 41, 51);
  border-right-width: 3px;
  border-top-color: rgb(36, 41, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(36, 41, 51) 5px 5px 0px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 239, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(136, 192, 208, 0.565);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(36, 41, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(36, 41, 51);
  border-left-width: 3px;
  border-right-color: rgb(36, 41, 51);
  border-right-width: 3px;
  border-top-color: rgb(36, 41, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 41, 51);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(136, 192, 208, 0.565);
  border-bottom-color: rgb(236, 239, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(136, 192, 208, 0.565);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(76, 86, 106);
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(36, 41, 51);
  border-left-color: rgb(36, 41, 51);
  border-right-color: rgb(36, 41, 51);
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
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(151, 161, 185);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(76, 86, 106);
  border-bottom-color: rgb(229, 235, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(229, 235, 238);
  border-right-color: rgb(229, 235, 238);
  border-top-color: rgb(229, 235, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 235, 238);
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
  background-color: rgb(36, 41, 51);
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 0px;
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
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
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
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
  background-color: rgb(36, 41, 51);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(236, 239, 244);
  text-decoration: underline dotted rgb(236, 239, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
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
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(129, 161, 193);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(36, 41, 51) 0px 2px 0px 0px;
  color: rgb(129, 161, 193);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(236, 239, 244);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #5E81AC !important;
  --accent-color: 143, 188, 187 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #81A1C1 !important;
  --accent2-lite: #8FBCBB !important;
  --aside-bg: #D8DEE9 !important;
  --background-modifier-active-hover: #29395a !important;
  --background-modifier-border: #b5c1d4 !important;
  --background-modifier-border-focus: #5E81AC !important;
  --background-modifier-border-hover: #bdcce6 !important;
  --background-modifier-cover: #d0ddef62 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #d0ddef62 !important;
  --background-modifier-form-field-hover: #d0ddef62 !important;
  --background-modifier-hover: rgba(92, 207, 228, 0.25) !important;
  --background-modifier-message: #29395a !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #FBFBFC !important;
  --background-primary-alt: #4C566A !important;
  --background-secondary: #E5E9F0 !important;
  --background-secondary-alt: #E5E9F0 !important;
  --bases-cards-background: #FBFBFC !important;
  --bases-cards-cover-background: #4C566A !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #b5c1d4 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #bdcce6 !important;
  --bases-embed-border-color: #b5c1d4 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #7e8dac !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #FBFBFC !important;
  --bases-table-cell-background-active: #FBFBFC !important;
  --bases-table-cell-background-disabled: #4C566A !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #5E81AC !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #29395a !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #4C566A !important;
  --bases-table-header-background: #FBFBFC !important;
  --bases-table-header-background-hover: rgba(92, 207, 228, 0.25) !important;
  --bases-table-header-color: #7e8dac !important;
  --bases-table-row-background-hover: rgba(97, 148, 231, 0.3) !important;
  --bases-table-summary-background: #FBFBFC !important;
  --bases-table-summary-background-hover: rgba(92, 207, 228, 0.25) !important;
  --bg: #bdcce6 !important;
  --blockquote-background-color: #ECEFF4 !important;
  --blockquote-border-color: #bdcce6 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #4C566A !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #FBFBFC 65%, transparent) linear-gradient(#FBFBFC, color-mix(in srgb, #FBFBFC 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #bdcce6 !important;
  --box-border-m: 3px solid #bdcce6 !important;
  --box-border-s: 1px solid #bdcce6 !important;
  --bttn: #88C0D0 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #88C0D0 !important;
  --button-background-hover: #7e8dac !important;
  --button-border: #88C0D0 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #FBFBFC !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 166, 180, 204 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #4C566A !important;
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
  --checkbox-border-color: #5E81AC !important;
  --checkbox-border-color-hover: #29395a !important;
  --checkbox-color: #5E81AC !important;
  --checkbox-color-hover: #29395a !important;
  --checkbox-marker-color: #FBFBFC !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #7e8dac !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #ECEFF4 !important;
  --code-bg: #ECEFF4 !important;
  --code-border-color: #b5c1d4 !important;
  --code-bracket-background: rgba(92, 207, 228, 0.25) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #81A1C1 !important;
  --code-punctuation: #7e8dac !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #bdcce6 !important;
  --code-size: .90em !important;
  --code-text: #81A1C1 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #7e8dac !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(194, 76, 78) !important;
  --color-accent-2: rgb(199, 87, 92) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #4C566A !important;
  --dark-accent: #29395a !important;
  --dark-sidebar: #dde2ec !important;
  --darkgray: #4C566A !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(143, 188, 187, 0.1) !important;
  --dataview-th-background: #E5E9F0 !important;
  --dataview-th-border-bottom: 2px solid #88C0D0 !important;
  --dataview-th-color: #88C0D0 !important;
  --dataview-th-count-color: #88C0D0 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #4C566A !important;
  --divider-color: #E5E9F0 !important;
  --divider-color-hover: #5E81AC !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #29395a !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #E5E9F0 !important;
  --dropdown-background-hover: #7e8dac !important;
  --embed-bg: #ECEFF4 !important;
  --embed-block-shadow-hover: 2px 2px 0 #bdcce6 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #bdcce6 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #bdcce6 !important;
  --embed-border-left: 2px solid #88C0D0 !important;
  --embed-border-left-color: #88C0D0 !important;
  --embed-border-left-color-hover: #88C0D0 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #bdcce6 !important;
  --embed-border-start: 2px solid #29395a !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #bdcce6 !important;
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
  --fg: #5E81AC !important;
  --file-font: "its" !important;
  --file-header-background: #FBFBFC !important;
  --file-header-background-focused: #FBFBFC !important;
  --file-header-breadcrumb-color: #7e8dac !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #7e8dac !important;
  --file-header-color-active: #4C566A !important;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #29395a !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #E5E9F0 !important;
  --file-icon: "" !important;
  --file-icon-color: #7e8dac !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #7e8dac !important;
  --flair-background: #E5E9F0 !important;
  --flair-color: #4C566A !important;
  --folder: #88C0D0 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #88C0D0 !important;
  --folder-icon-open-color: #4C566A !important;
  --folder-open: #4C566A !important;
  --folder-open-text-color: #4C566A !important;
  --folder-text-color: #7e8dac !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial' !important;
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #8996a0 !important;
  --footnote-divider-color: #b5c1d4 !important;
  --footnote-id-color: #7e8dac !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #d0ddef62 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #7e8dac !important;
  --graph-arrow: #7e8dac !important;
  --graph-background: #E5E9F0 !important;
  --graph-bg: #E5E9F0 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #5E81AC !important;
  --graph-focused: #8FBCBB !important;
  --graph-line: #b5c1d4 !important;
  --graph-line-hover: #5E81AC !important;
  --graph-lines: #b5c1d4 !important;
  --graph-node: #4C566A !important;
  --graph-node-focused: #8FBCBB !important;
  --graph-node-hover-fill: #5E81AC !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #88C0D0 !important;
  --graph-node-unresolved: #7e8dac !important;
  --graph-tag: #88C0D0 !important;
  --graph-text: #4C566A !important;
  --gray: #7e8dac !important;
  --h1-background: transparent !important;
  --h1-border-color: #BF616A !important;
  --h1-border-left-color: #b5c1d4 !important;
  --h1-border-line-color: #b5c1d4 !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #b5c1d4 !important;
  --h1-border-width: 0 !important;
  --h1-color: #88C0D0 !important;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #D08770 !important;
  --h2-border-left-color: #b5c1d4 !important;
  --h2-border-line-color: #b5c1d4 !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #b5c1d4 !important;
  --h2-border-width: 0 !important;
  --h2-color: #88C0D0 !important;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #A5916A !important;
  --h3-border-left-color: #b5c1d4 !important;
  --h3-border-line-color: #b5c1d4 !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #b5c1d4 !important;
  --h3-border-width: 0 !important;
  --h3-color: #88C0D0 !important;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #88A073 !important;
  --h4-border-left-color: #b5c1d4 !important;
  --h4-border-line-color: #b5c1d4 !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #b5c1d4 !important;
  --h4-border-width: 0 !important;
  --h4-color: #88C0D0 !important;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #A48EAD !important;
  --h5-border-left-color: #b5c1d4 !important;
  --h5-border-line-color: #b5c1d4 !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #b5c1d4 !important;
  --h5-border-width: 0 !important;
  --h5-color: #88C0D0 !important;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #7e8dac !important;
  --h6-border-left-color: #b5c1d4 !important;
  --h6-border-line-color: #b5c1d4 !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #b5c1d4 !important;
  --h6-border-width: 0 !important;
  --h6-color: #88C0D0 !important;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #88C0D0 !important;
  --he-text-on-accent-inactive: #4C566A !important;
  --he-title-bar-active-action: #3c66a8 !important;
  --he-title-bar-active-bg: #ECEFF4 !important;
  --he-title-bar-active-fg: #4C566A !important;
  --he-title-bar-active-pinned-bg: #FBFBFC !important;
  --he-title-bar-inactive-action: #7e8dac !important;
  --he-title-bar-inactive-bg: #FBFBFC !important;
  --he-title-bar-inactive-fg: #7e8dac !important;
  --he-title-bar-inactive-pinned-bg: #FBFBFC !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #b5c1d4 !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 700 !important;
  --headerFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #88C0D0 !important;
  --heading-formatting: #7e8dac !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(97, 148, 231, 0.3) !important;
  --hr: #D8DEE9 !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #D8DEE9 !important;
  --hr-icon-background: #FBFBFC !important;
  --hr-icon-color: #88C0D0 !important;
  --hr-icon-font: "Material Icons Sharp" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(119, 235, 210, 0.4) !important;
  --hvr-active: rgba(92, 207, 228, 0.25) !important;
  --hvr2: rgba(97, 148, 231, 0.3) !important;
  --i-at: #81A1C1 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #7e8dac !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #4C566A !important;
  --icon-color-hover: #4C566A !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #bdcce6 !important;
  --illusion-h1-background: #BF616A !important;
  --illusion-h2-background: #D08770 !important;
  --illusion-h3-background: #A5916A !important;
  --illusion-h4-background: #88A073 !important;
  --illusion-h5-background: #A48EAD !important;
  --illusion-h6-background: #7e8dac !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #d0ddef62 !important;
  --image-border-color: #b5c1d4 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #7e8dac !important;
  --indentation-guide-color: #b5c1d4 !important;
  --indentation-guide-color-active: #5E81AC !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #b5c1d4 !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #88C0D0 !important;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: #d0ddef62 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #bdcce6 !important;
  --input-shadow-hover: 3px 3px 0 #bdcce6 !important;
  --interactive-accent: #29395a !important;
  --interactive-accent-hover: #7e8dac !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #7e8dac !important;
  --interactive-normal: #E5E9F0 !important;
  --its: "its" !important;
  --kanban-button-background: #ECEFF4 !important;
  --kanban-button-shadow: 2px 2px 0 #bdcce6 !important;
  --kanban-card-border: 2px solid #bdcce6 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #FBFBFC !important;
  --kanban-card-text-color: #4C566A !important;
  --kanban-card-title-background: #FBFBFC !important;
  --kanban-card-title-border: 0 1px 0 #bdcce6 !important;
  --kanban-lane-background: #ECEFF4 !important;
  --kanban-lane-border: 3px solid #bdcce6 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #bdcce6 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #8FBCBB !important;
  --kanban-tag-background: #5E81AC !important;
  --latex-color: #3c66a8 !important;
  --latex-format-color: #7e8dac !important;
  --latex-syntax-color: #7e8dac !important;
  --light: #FBFBFC !important;
  --lightgray: #E5E9F0 !important;
  --line-height-tight: 1.3em !important;
  --lines: #b5c1d4 !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #8FBCBB !important;
  --link-color-hover: #3c66a8 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #8FBCBB !important;
  --link-external-color-hover: #81A1C1 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #7e8dac !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #b5c1d4 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #b5c1d4 !important;
  --list-color-2: #b5c1d4 !important;
  --list-color-3: #b5c1d4 !important;
  --list-color-4: #b5c1d4 !important;
  --list-color-5: #b5c1d4 !important;
  --list-color-6: #b5c1d4 !important;
  --list-indent: 25px !important;
  --list-marker-color: #5E81AC !important;
  --list-marker-color-collapsed: #7e8dac !important;
  --list-marker-color-hover: #7e8dac !important;
  --list-marker-color-other: #81A1C1 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #3c66a8 !important;
  --list-spacing: 1px !important;
  --lite-accent: #3c66a8 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #E5E9F0 !important;
  --menu-border-color: #bdcce6 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #bdcce6 !important;
  --message-border-color: #bdcce6 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #bdcce6 !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #b5c1d4 !important;
  --metadata-button-text-color: #7e8dac !important;
  --metadata-divider-color: #b5c1d4 !important;
  --metadata-icon-color: #7e8dac !important;
  --metadata-input-background-active: #d0ddef62 !important;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #4C566A !important;
  --metadata-label-background-active: #d0ddef62 !important;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #7e8dac !important;
  --metadata-label-text-color-hover: #7e8dac !important;
  --metadata-property-background-active: rgba(92, 207, 228, 0.25) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #5E81AC !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #bdcce6 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #7e8dac !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #FBFBFC !important;
  --modal-border-color: #bdcce6 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #d0ddef62 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #dde2ec !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #4C566A !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #7e8dac !important;
  --nav-heading-color-hover: #4C566A !important;
  --nav-indentation-guide-color: #b5c1d4 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #29395a !important;
  --nav-item-background-border-color-hover: #29395a !important;
  --nav-item-background-hover: #29395a !important;
  --nav-item-background-selected: rgba(119, 235, 210, 0.4) !important;
  --nav-item-border-color: #3c66a8 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #7e8dac !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #4C566A !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #7e8dac !important;
  --nav-tag-color-hover: #7e8dac !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #FBFBFC !important;
  --note-rgb: 248, 251, 255 !important;
  --note-title-border-color: #88C0D0 !important;
  --outer-bar: #E5E9F0 !important;
  --outline: #bdcce6 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #FBFBFC !important;
  --pdf-background: #FBFBFC !important;
  --pdf-page-background: #FBFBFC !important;
  --pdf-sidebar-background: #FBFBFC !important;
  --pill-border-color: #b5c1d4 !important;
  --pill-border-color-hover: #bdcce6 !important;
  --pill-color: #7e8dac !important;
  --pill-color-hover: #4C566A !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #8FBCBB !important;
  --pill-radius: 0 !important;
  --popover-background: #FBFBFC !important;
  --popover-border: 3px solid #bdcce6 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #5E81AC !important;
  --progress-bg: #bdcce6 !important;
  --prompt-background: #FBFBFC !important;
  --prompt-border-color: #bdcce6 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #88C0D0 !important;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #3c66a8 !important;
  --radius-h: 0 !important;
  --radius-l: 0 !important;
  --radius-m: 0 !important;
  --radius-s: 0 !important;
  --radius-xl: 0 !important;
  --rainbow-1: #BF616A !important;
  --rainbow-2: #D08770 !important;
  --rainbow-3: #A5916A !important;
  --rainbow-4: #88A073 !important;
  --rainbow-5: #A48EAD !important;
  --rainbow-6: #7e8dac !important;
  --raised-background: color-mix(in srgb, #FBFBFC 65%, transparent) linear-gradient(#FBFBFC, color-mix(in srgb, #FBFBFC 65%, transparent)) !important;
  --ribbon-background: #E5E9F0 !important;
  --ribbon-background-collapsed: #FBFBFC !important;
  --ribbon-border-color: #E5E9F0 !important;
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
  --scrollbar-active-thumb-bg: #3c66a8 !important;
  --scrollbar-bg: #bdcce6 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #5E81AC !important;
  --scrollbar-track-bg: #FBFBFC !important;
  --search-border: 2px solid #bdcce6 !important;
  --search-box-shadow: 2px 2px 0 #bdcce6 !important;
  --search-clear-button-color: #7e8dac !important;
  --search-icon-color: #7e8dac !important;
  --search-result-background: #FBFBFC !important;
  --secondary: #8FBCBB !important;
  --setting-group-heading-color: #4C566A !important;
  --setting-item-alt-background-hover: #d0ddef62 !important;
  --setting-item-background-hover: rgba(119, 235, 210, 0.4) !important;
  --setting-item-border-color: #b5c1d4 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #88C0D0 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #d0ddef62 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #b5c1d4 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #bdcce6 !important;
  --shadow-m: 3px 3px 0 #bdcce6 !important;
  --shadow-ml: 4px 4px 0 #bdcce6 !important;
  --shadow-s: 2px 2px 0 #bdcce6 !important;
  --side-bar: #E5E9F0 !important;
  --side-bar-bg: #E5E9F0 !important;
  --sidebar-icon-color: #4C566A !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #88C0D0 !important;
  --sidebar-tab-background-color-hover: #5E81AC !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #88C0D0 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #FBFBFC !important;
  --slider-thumb-border-color: #bdcce6 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #b5c1d4 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #7e8dac !important;
  --statblock-alt: #d0ddef62 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #FBFBFC !important;
  --statblock-bar-border-color: #5E81AC !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #5E81AC !important;
  --statblock-border-color: #b5c1d4 !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #bdcce6 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #4C566A !important;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-heading-font-color: #88C0D0 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #D8DEE9 !important;
  --statblock-primary-color: #4C566A !important;
  --statblock-property-font-color: #4C566A !important;
  --statblock-property-name-font-color: #88C0D0 !important;
  --statblock-rule-color: #5E81AC !important;
  --statblock-section-heading-border-color: #b5c1d4 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-section-heading-font-color: #8996a0 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #E5E9F0 !important;
  --status-bar-border-color: #5E81AC !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #7e8dac !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #29395a !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #599049 !important;
  --suggestion-background: #FBFBFC !important;
  --tab-background: #E5E9F0 !important;
  --tab-background-active: #FBFBFC !important;
  --tab-container-background: #E5E9F0 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #D8DEE9 !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #5E81AC !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62 !important;
  --tab-stacked-shadow-color: #d0ddef62 !important;
  --tab-switcher-background: #E5E9F0 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #E5E9F0, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #bdcce6 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #bdcce6 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #3c66a8, 5px 5px 0 #bdcce6 !important;
  --tab-text-color: #7e8dac !important;
  --tab-text-color-active: #4C566A !important;
  --tab-text-color-focused: #7e8dac !important;
  --tab-text-color-focused-active: #4C566A !important;
  --tab-text-color-focused-active-current: #4C566A !important;
  --tab-text-color-focused-highlighted: #8FBCBB !important;
  --tab-text-color-hover: #4C566A !important;
  --tab-top-outline-width: 0 !important;
  --table: #b5c1d4 !important;
  --table-add-button-background: #88C0D0 !important;
  --table-add-button-border-color: #FBFBFC !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #FBFBFC !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #d0ddef62 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #29395a !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #29395a !important;
  --table-header-background-hover: #5E81AC !important;
  --table-header-border-color: #FBFBFC !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #3c66a8 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #d0ddef62 !important;
  --table-row-alt-background-hover: rgba(97, 148, 231, 0.3) !important;
  --table-row-background-hover: rgba(97, 148, 231, 0.3) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #29395a !important;
  --table-selection-border-radius: 0 !important;
  --tag: #5E81AC !important;
  --tag-background: #5E81AC !important;
  --tag-background-color: #5E81AC !important;
  --tag-background-hover: #5E81AC !important;
  --tag-border-color: #5E81AC !important;
  --tag-border-color-hover: #5E81AC !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #8FBCBB !important;
  --tall: 700px !important;
  --td: #d0ddef62 !important;
  --tertiary: #81A1C1 !important;
  --text: #4C566A !important;
  --text-accent: #8FBCBB !important;
  --text-accent-hover: #81A1C1 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(119, 235, 210, 0.4) !important;
  --text-highlight-bg-active: rgba(92, 207, 228, 0.25) !important;
  --text-muted: #7e8dac !important;
  --text-normal: #4C566A !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(97, 148, 231, 0.3) !important;
  --textHighlight: rgba(119, 235, 210, 0.4) !important;
  --th: #29395a !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #BF616A !important;
  --theme-rainbow-2: #D08770 !important;
  --theme-rainbow-3: #A5916A !important;
  --theme-rainbow-4: #88A073 !important;
  --theme-rainbow-5: #A48EAD !important;
  --theme-rainbow-6: #7e8dac !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #FBFBFC !important;
  --titlebar-background-focused: #E5E9F0 !important;
  --titlebar-border-color: #b5c1d4 !important;
  --titlebar-text-color: #4C566A !important;
  --titlebar-text-color-focused: #4C566A !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --vault-name-color: #88C0D0 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #4C566A !important;
  --vault-profile-color-hover: #4C566A !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(229, 233, 240);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(251, 251, 252);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(229, 233, 240);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 233, 240);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(251, 251, 252);
  color: rgb(76, 86, 106);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(119, 235, 210, 0.4);
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body del {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: line-through 1px rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body p {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(126, 141, 172) none 0px;
  text-decoration: rgb(126, 141, 172);
  text-decoration-color: rgb(126, 141, 172);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(143, 188, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(143, 188, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(126, 141, 172) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgb(251, 251, 252);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(251, 251, 252);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body table {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(208, 221, 239, 0.384);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(251, 251, 252);
  border-left-color: rgb(251, 251, 252);
  border-right-color: rgb(251, 251, 252);
  border-top-color: rgb(251, 251, 252);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(251, 251, 252);
  border-left-color: rgb(251, 251, 252);
  border-right-color: rgb(251, 251, 252);
  border-top-color: rgb(251, 251, 252);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

html[saved-theme="light"] body tr {
  background-color: rgb(41, 57, 90);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(129, 161, 193);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(129, 161, 193);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body pre > code, pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(229, 233, 240);
  border-bottom-color: rgb(126, 141, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 86, 106);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 57, 90);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 57, 90);
  border-right-color: rgb(76, 86, 106);
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
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
  text-decoration-color: rgb(126, 141, 172);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(94, 129, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
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
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
  text-decoration-color: rgb(126, 141, 172);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
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
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
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
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
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
  --callout-color: rgb(186, 64, 64);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 86, 106);
  border-left-width: 4px;
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
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
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(251, 251, 252);
  border-bottom-color: rgb(189, 204, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(189, 204, 230);
  border-left-width: 3px;
  border-right-color: rgb(189, 204, 230);
  border-right-width: 3px;
  border-top-color: rgb(189, 204, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(189, 204, 230) 5px 5px 0px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(92, 207, 228, 0.25);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(189, 204, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(189, 204, 230);
  border-left-width: 3px;
  border-right-color: rgb(189, 204, 230);
  border-right-width: 3px;
  border-top-color: rgb(189, 204, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(92, 207, 228, 0.25);
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(92, 207, 228, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(94, 129, 172);
  border-bottom-color: rgb(94, 129, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
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
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(76, 86, 106);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(76, 86, 106);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(126, 141, 172);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(41, 57, 90);
  border-bottom-color: rgb(229, 235, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(229, 235, 238);
  border-right-color: rgb(229, 235, 238);
  border-top-color: rgb(229, 235, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 235, 238);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(126, 141, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(126, 141, 172);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(229, 233, 240);
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 0px;
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(126, 141, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(126, 141, 172);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(126, 141, 172);
  stroke: rgb(126, 141, 172);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(126, 141, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(126, 141, 172);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(181, 193, 212);
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(126, 141, 172);
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(229, 233, 240);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 86, 106);
  text-decoration: underline dotted rgb(76, 86, 106);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(126, 141, 172);
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(129, 161, 193);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(189, 204, 230) 0px 2px 0px 0px;
  color: rgb(129, 161, 193);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 86, 106);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 86, 106);
}`,
  },
};
