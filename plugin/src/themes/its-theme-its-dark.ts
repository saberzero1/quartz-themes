import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.its-dark",
    modes: ["dark"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #803232 !important;
  --accent-color: 134, 55, 55 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #475569 !important;
  --accent2-lite: #c5575b !important;
  --aside-bg: #04070c !important;
  --background-modifier-active-hover: #04070c !important;
  --background-modifier-border: #380b13 !important;
  --background-modifier-border-focus: #803232 !important;
  --background-modifier-border-hover: #1b262f !important;
  --background-modifier-cover: #03000054 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #03000054 !important;
  --background-modifier-form-field-hover: #03000054 !important;
  --background-modifier-hover: rgba(212, 47, 47, 0.4) !important;
  --background-modifier-message: #04070c !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #070b11 !important;
  --background-primary-alt: #270f0f !important;
  --background-secondary: black !important;
  --background-secondary-alt: black !important;
  --bases-cards-background: #070b11 !important;
  --bases-cards-cover-background: #270f0f !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #380b13 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #1b262f !important;
  --bases-embed-border-color: #380b13 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #803232 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #070b11 !important;
  --bases-table-cell-background-active: #070b11 !important;
  --bases-table-cell-background-disabled: #270f0f !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #803232 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #04070c !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #270f0f !important;
  --bases-table-header-background: #070b11 !important;
  --bases-table-header-background-hover: rgba(212, 47, 47, 0.4) !important;
  --bases-table-header-color: #803232 !important;
  --bases-table-row-background-hover: rgba(139, 6, 6, 0.4) !important;
  --bases-table-summary-background: #070b11 !important;
  --bases-table-summary-background-hover: rgba(212, 47, 47, 0.4) !important;
  --bg: #1b262f !important;
  --blockquote-background-color: black !important;
  --blockquote-border-color: #1b262f !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #475569 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid black !important;
  --box-border-m: 3px solid black !important;
  --box-border-s: 1px solid black !important;
  --bttn: #04070c !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #04070c !important;
  --button-background-hover: #1b262f !important;
  --button-border: #04070c !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #070b11 !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 88, 100, 159 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #475569 !important;
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
  --checkbox-border-color: #803232 !important;
  --checkbox-border-color-hover: #04070c !important;
  --checkbox-color: #803232 !important;
  --checkbox-color-hover: #04070c !important;
  --checkbox-marker-color: #070b11 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #1b262f !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #04070c !important;
  --code-bg: #04070c !important;
  --code-border-color: #380b13 !important;
  --code-bracket-background: rgba(212, 47, 47, 0.4) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #803232 !important;
  --code-punctuation: #803232 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 black !important;
  --code-size: .90em !important;
  --code-text: #803232 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #1b262f !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(199, 87, 92) !important;
  --color-accent-2: rgb(209, 113, 121) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #475569 !important;
  --dark-accent: #04070c !important;
  --dark-sidebar: #000000 !important;
  --darkgray: #475569 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1) !important;
  --dataview-th-background: black !important;
  --dataview-th-border-bottom: 2px solid #aa3333 !important;
  --dataview-th-color: #aa3333 !important;
  --dataview-th-count-color: #aa3333 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #270f0f !important;
  --divider-color: black !important;
  --divider-color-hover: #803232 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #04070c !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: black !important;
  --dropdown-background-hover: #1b262f !important;
  --embed-bg: black !important;
  --embed-block-shadow-hover: 2px 2px 0 black !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: black !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: black !important;
  --embed-border-left: 2px solid #aa3333 !important;
  --embed-border-left-color: #aa3333 !important;
  --embed-border-left-color-hover: #aa3333 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: black !important;
  --embed-border-start: 2px solid #04070c !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: black !important;
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
  --fg: #aa3333 !important;
  --file-font: "its" !important;
  --file-header-background: #070b11 !important;
  --file-header-background-focused: #070b11 !important;
  --file-header-breadcrumb-color: #1b262f !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #1b262f !important;
  --file-header-color-active: #475569 !important;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #04070c !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: black !important;
  --file-icon: "" !important;
  --file-icon-color: #475569 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #475569 !important;
  --flair-background: black !important;
  --flair-color: #475569 !important;
  --folder: #aa3333 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #aa3333 !important;
  --folder-icon-open-color: #e05858 !important;
  --folder-open: #e05858 !important;
  --folder-open-text-color: #475569 !important;
  --folder-text-color: #475569 !important;
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
  --footnote: #577093 !important;
  --footnote-divider-color: #380b13 !important;
  --footnote-id-color: #803232 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #03000054 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #1b262f !important;
  --graph-arrow: #803232 !important;
  --graph-background: rgba(13, 20, 29, 0.51) !important;
  --graph-bg: rgba(13, 20, 29, 0.51) !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #c94d4d !important;
  --graph-focused: #c5575b !important;
  --graph-img: #475569 !important;
  --graph-line: #571a1a !important;
  --graph-line-hover: #803232 !important;
  --graph-lines: #571a1a !important;
  --graph-node: #475569 !important;
  --graph-node-attachment: #475569 !important;
  --graph-node-focused: #c5575b !important;
  --graph-node-hover-fill: #c94d4d !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #04070c !important;
  --graph-node-unresolved: #1b262f !important;
  --graph-tag: #04070c !important;
  --graph-text: #475569 !important;
  --gray: #803232 !important;
  --h1-background: transparent !important;
  --h1-border-color: #aa3333 !important;
  --h1-border-left-color: #380b13 !important;
  --h1-border-line-color: #380b13 !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #380b13 !important;
  --h1-border-width: 0 !important;
  --h1-color: #aa3333 !important;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #803232 !important;
  --h2-border-left-color: #380b13 !important;
  --h2-border-line-color: #380b13 !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #380b13 !important;
  --h2-border-width: 0 !important;
  --h2-color: #aa3333 !important;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #571a1a !important;
  --h3-border-left-color: #380b13 !important;
  --h3-border-line-color: #380b13 !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #380b13 !important;
  --h3-border-width: 0 !important;
  --h3-color: #aa3333 !important;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #380b13 !important;
  --h4-border-left-color: #380b13 !important;
  --h4-border-line-color: #380b13 !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #380b13 !important;
  --h4-border-width: 0 !important;
  --h4-color: #aa3333 !important;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #475569 !important;
  --h5-border-left-color: #380b13 !important;
  --h5-border-line-color: #380b13 !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #380b13 !important;
  --h5-border-width: 0 !important;
  --h5-color: #aa3333 !important;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #04070c !important;
  --h6-border-left-color: #380b13 !important;
  --h6-border-line-color: #380b13 !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #380b13 !important;
  --h6-border-width: 0 !important;
  --h6-color: #aa3333 !important;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #aa3333 !important;
  --he-text-on-accent-inactive: #475569 !important;
  --he-title-bar-active-action: #c94d4d !important;
  --he-title-bar-active-bg: black !important;
  --he-title-bar-active-fg: #475569 !important;
  --he-title-bar-active-pinned-bg: #070b11 !important;
  --he-title-bar-inactive-action: #803232 !important;
  --he-title-bar-inactive-bg: #070b11 !important;
  --he-title-bar-inactive-fg: #1b262f !important;
  --he-title-bar-inactive-pinned-bg: #070b11 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #380b13 !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 700 !important;
  --headerFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #aa3333 !important;
  --heading-formatting: #1b262f !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(139, 6, 6, 0.4) !important;
  --hr: #571a1a !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #571a1a !important;
  --hr-icon-background: #070b11 !important;
  --hr-icon-color: #aa3333 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(60, 8, 8, 0.46) !important;
  --hvr-active: rgba(212, 47, 47, 0.4) !important;
  --hvr2: rgba(139, 6, 6, 0.4) !important;
  --i-at: #803232 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #803232 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #475569 !important;
  --icon-color-hover: #475569 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 black !important;
  --illusion-h1-background: #aa3333 !important;
  --illusion-h2-background: #803232 !important;
  --illusion-h3-background: #571a1a !important;
  --illusion-h4-background: #380b13 !important;
  --illusion-h5-background: #475569 !important;
  --illusion-h6-background: #04070c !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #03000054 !important;
  --image-border-color: #380b13 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #1b262f !important;
  --indentation-guide-color: #571a1a !important;
  --indentation-guide-color-active: #803232 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #571a1a !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #aa3333 !important;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 black !important;
  --input-shadow-hover: 3px 3px 0 black !important;
  --interactive-accent: #04070c !important;
  --interactive-accent-hover: #1b262f !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #1b262f !important;
  --interactive-normal: black !important;
  --its: "its" !important;
  --kanban-button-background: #04070c !important;
  --kanban-button-shadow: 2px 2px 0 black !important;
  --kanban-card-border: 2px solid black !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #070b11 !important;
  --kanban-card-text-color: #475569 !important;
  --kanban-card-title-background: #070b11 !important;
  --kanban-card-title-border: 0 1px 0 black !important;
  --kanban-lane-background: #04070c !important;
  --kanban-lane-border: 3px solid black !important;
  --kanban-lane-box-shadow: 2px 2px 0 black !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #c5575b !important;
  --kanban-tag-background: #380b13 !important;
  --latex-color: #c94d4d !important;
  --latex-format-color: #1b262f !important;
  --latex-syntax-color: #803232 !important;
  --light: #070b11 !important;
  --lightgray: black !important;
  --line-height-tight: 1.3em !important;
  --lines: #571a1a !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #c5575b !important;
  --link-color-hover: #c94d4d !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #c5575b !important;
  --link-external-color-hover: #475569 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #1b262f !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #380b13 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #571a1a !important;
  --list-color-2: #571a1a !important;
  --list-color-3: #571a1a !important;
  --list-color-4: #571a1a !important;
  --list-color-5: #571a1a !important;
  --list-color-6: #571a1a !important;
  --list-indent: 25px !important;
  --list-marker-color: #803232 !important;
  --list-marker-color-collapsed: #1b262f !important;
  --list-marker-color-hover: #803232 !important;
  --list-marker-color-other: #475569 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #c94d4d !important;
  --list-spacing: 1px !important;
  --lite-accent: #c94d4d !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: black !important;
  --menu-border-color: #1b262f !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 black !important;
  --message-border-color: black !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 black !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #380b13 !important;
  --metadata-button-text-color: #1b262f !important;
  --metadata-divider-color: #380b13 !important;
  --metadata-icon-color: #803232 !important;
  --metadata-input-background-active: #03000054 !important;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #475569 !important;
  --metadata-label-background-active: #03000054 !important;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #803232 !important;
  --metadata-label-text-color-hover: #803232 !important;
  --metadata-property-background-active: rgba(212, 47, 47, 0.4) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #803232 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #1b262f !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #803232 !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #070b11 !important;
  --modal-border-color: black !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #03000054 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #000000 !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #475569 !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #803232 !important;
  --nav-heading-color-hover: #475569 !important;
  --nav-indentation-guide-color: #571a1a !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #04070c !important;
  --nav-item-background-border-color-hover: #04070c !important;
  --nav-item-background-hover: #04070c !important;
  --nav-item-background-selected: rgba(60, 8, 8, 0.46) !important;
  --nav-item-border-color: #c94d4d !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #475569 !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #475569 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #803232 !important;
  --nav-tag-color-hover: #803232 !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #070b11 !important;
  --note-rgb: 26, 30, 36 !important;
  --note-title-border-color: #aa3333 !important;
  --outer-bar: black !important;
  --outline: black !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #070b11 !important;
  --pdf-background: #070b11 !important;
  --pdf-page-background: #070b11 !important;
  --pdf-shadow: 0 0 0 1px #380b13 !important;
  --pdf-sidebar-background: #070b11 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13 !important;
  --pill-border-color: #380b13 !important;
  --pill-border-color-hover: #1b262f !important;
  --pill-color: #803232 !important;
  --pill-color-hover: #475569 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #c5575b !important;
  --pill-radius: 0 !important;
  --popover-background: #070b11 !important;
  --popover-border: 3px solid black !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #803232 !important;
  --progress-bg: #1b262f !important;
  --prompt-background: #070b11 !important;
  --prompt-border-color: black !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #aa3333 !important;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #c94d4d !important;
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
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent)) !important;
  --ribbon-background: black !important;
  --ribbon-background-collapsed: #070b11 !important;
  --ribbon-border-color: black !important;
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
  --scrollbar-active-thumb-bg: #c94d4d !important;
  --scrollbar-bg: #1b262f !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #380b13 !important;
  --scrollbar-track-bg: #070b11 !important;
  --search-border: 2px solid black !important;
  --search-box-shadow: 2px 2px 0 black !important;
  --search-clear-button-color: #803232 !important;
  --search-icon-color: #803232 !important;
  --search-result-background: #070b11 !important;
  --secondary: #c5575b !important;
  --setting-group-heading-color: #475569 !important;
  --setting-item-alt-background-hover: #03000054 !important;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46) !important;
  --setting-item-border-color: #380b13 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #aa3333 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #03000054 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #380b13 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 black !important;
  --shadow-m: 3px 3px 0 black !important;
  --shadow-ml: 4px 4px 0 black !important;
  --shadow-s: 2px 2px 0 black !important;
  --side-bar: black !important;
  --side-bar-bg: black !important;
  --sidebar-icon-color: #475569 !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #04070c !important;
  --sidebar-tab-background-color-hover: #803232 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #04070c !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #070b11 !important;
  --slider-thumb-border-color: #1b262f !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #380b13 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #803232 !important;
  --statblock-alt: #03000054 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #070b11 !important;
  --statblock-bar-border-color: #803232 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #803232 !important;
  --statblock-border-color: #571a1a !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: black !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #475569 !important;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-heading-font-color: #aa3333 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #571a1a !important;
  --statblock-primary-color: #475569 !important;
  --statblock-property-font-color: #475569 !important;
  --statblock-property-name-font-color: #aa3333 !important;
  --statblock-rule-color: #803232 !important;
  --statblock-section-heading-border-color: #380b13 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-section-heading-font-color: #577093 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: black !important;
  --status-bar-border-color: #803232 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #803232 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #04070c !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #32603e !important;
  --suggestion-background: #070b11 !important;
  --tab-background: black !important;
  --tab-background-active: #070b11 !important;
  --tab-container-background: black !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #571a1a !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #803232 !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #06080c60 !important;
  --tab-stacked-shadow-color: #06080c60 !important;
  --tab-switcher-background: black !important;
  --tab-switcher-menubar-background: linear-gradient(to top, black, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 black !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 black !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #c94d4d, 5px 5px 0 black !important;
  --tab-text-color: #1b262f !important;
  --tab-text-color-active: #475569 !important;
  --tab-text-color-focused: #1b262f !important;
  --tab-text-color-focused-active: #475569 !important;
  --tab-text-color-focused-active-current: #475569 !important;
  --tab-text-color-focused-highlighted: #c5575b !important;
  --tab-text-color-hover: #475569 !important;
  --tab-top-outline-width: 0 !important;
  --table: #380b13 !important;
  --table-add-button-background: #04070c !important;
  --table-add-button-border-color: #070b11 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #070b11 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #03000054 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #04070c !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #571a1a !important;
  --table-header-background-hover: #803232 !important;
  --table-header-border-color: #070b11 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #c94d4d !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #03000054 !important;
  --table-row-alt-background-hover: rgba(139, 6, 6, 0.4) !important;
  --table-row-background-hover: rgba(139, 6, 6, 0.4) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #04070c !important;
  --table-selection-border-radius: 0 !important;
  --tag: #380b13 !important;
  --tag-background: #380b13 !important;
  --tag-background-color: #380b13 !important;
  --tag-background-hover: #803232 !important;
  --tag-border-color: #380b13 !important;
  --tag-border-color-hover: #803232 !important;
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
  --td: #03000054 !important;
  --tertiary: #475569 !important;
  --text: #475569 !important;
  --text-accent: #c5575b !important;
  --text-accent-hover: #475569 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(60, 8, 8, 0.46) !important;
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4) !important;
  --text-muted: #803232 !important;
  --text-normal: #475569 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(139, 6, 6, 0.4) !important;
  --textHighlight: rgba(60, 8, 8, 0.46) !important;
  --th: #571a1a !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #aa3333 !important;
  --theme-rainbow-2: #803232 !important;
  --theme-rainbow-3: #571a1a !important;
  --theme-rainbow-4: #380b13 !important;
  --theme-rainbow-5: #475569 !important;
  --theme-rainbow-6: #04070c !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #070b11 !important;
  --titlebar-background-focused: black !important;
  --titlebar-border-color: #380b13 !important;
  --titlebar-text-color: #475569 !important;
  --titlebar-text-color-focused: #475569 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --vault-name-color: #aa3333 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #475569 !important;
  --vault-profile-color-hover: #475569 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

body div#quartz-root {
  background-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}`,
    typography: `body .page article p > b, b {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .page article p > em, em {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .page article p > i, i {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .page article p > strong, strong {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .text-highlight {
  background-color: rgba(60, 8, 8, 0.46);
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body del {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: line-through 1px rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(128, 50, 50) none 0px;
  text-decoration: rgb(128, 50, 50);
  text-decoration-color: rgb(128, 50, 50);
}`,
    links: `body a.external, footer a {
  color: rgb(197, 87, 91);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(197, 87, 91) none 0px;
  text-decoration: rgb(197, 87, 91);
  text-decoration-color: rgb(197, 87, 91);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(197, 87, 91);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(197, 87, 91) none 0px;
  text-decoration: rgb(197, 87, 91);
  text-decoration-color: rgb(197, 87, 91);
}

body a.internal.broken {
  color: rgb(27, 38, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(27, 38, 47) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(71, 85, 105);
}

body dt {
  color: rgb(71, 85, 105);
}

body ol > li {
  color: rgb(71, 85, 105);
}

body ol.overflow {
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body ul > li {
  color: rgb(71, 85, 105);
}

body ul.overflow {
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(0, 0, 0);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body table {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(3, 0, 0, 0.33);
}

body td {
  border-bottom-color: rgb(7, 11, 17);
  border-left-color: rgb(7, 11, 17);
  border-right-color: rgb(7, 11, 17);
  border-top-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}

body th {
  border-bottom-color: rgb(7, 11, 17);
  border-left-color: rgb(7, 11, 17);
  border-right-color: rgb(7, 11, 17);
  border-top-color: rgb(7, 11, 17);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(87, 26, 26);
}`,
    code: `body code {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 50, 50);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

body pre > code, pre:has(> code) {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body figcaption {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body img {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body video {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(4, 7, 12);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(4, 7, 12);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(27, 38, 47);
  text-decoration: rgb(27, 38, 47);
  text-decoration-color: rgb(27, 38, 47);
}

body input[type=checkbox] {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -22.4px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(194, 42, 42);
  text-decoration: rgb(194, 42, 42);
  text-decoration-color: rgb(194, 42, 42);
}

body li.task-list-item[data-task='*'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

body li.task-list-item[data-task='/'] {
  color: rgb(128, 50, 50);
  text-decoration: rgb(128, 50, 50);
  text-decoration-color: rgb(128, 50, 50);
}

body li.task-list-item[data-task='>'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='?'] {
  color: rgb(253, 175, 0);
  text-decoration: rgb(253, 175, 0);
  text-decoration-color: rgb(253, 175, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='b'] {
  color: rgb(230, 129, 63);
  text-decoration: rgb(230, 129, 63);
  text-decoration-color: rgb(230, 129, 63);
}

body li.task-list-item[data-task='c'] {
  color: rgb(149, 233, 238);
  text-decoration: rgb(149, 233, 238);
  text-decoration-color: rgb(149, 233, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(133, 91, 65);
  text-decoration: rgb(133, 91, 65);
  text-decoration-color: rgb(133, 91, 65);
}

body li.task-list-item[data-task='i'] {
  color: rgb(231, 231, 171);
  text-decoration: rgb(231, 231, 171);
  text-decoration-color: rgb(231, 231, 171);
}

body li.task-list-item[data-task='k'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='l'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='w'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  --callout-color: rgb(186, 64, 64);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 4px;
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(3, 0, 0, 0.33);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 3px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(0, 0, 0) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(71, 85, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(71, 85, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  color: rgb(71, 85, 105);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 3px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(212, 47, 47, 0.4);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(71, 85, 105);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(71, 85, 105);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(71, 85, 105);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(4, 7, 12);
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
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 50, 50);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(128, 50, 50);
  text-decoration: rgb(128, 50, 50);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body li.section-li > .section .meta {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
}

body ul.section-ul {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 50, 50);
}

body .darkmode svg {
  color: rgb(128, 50, 50);
  stroke: rgb(128, 50, 50);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(27, 38, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(27, 38, 47);
  border-right-color: rgb(27, 38, 47);
  border-top-color: rgb(27, 38, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(27, 38, 47);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

body .metadata {
  border-bottom-color: rgb(56, 11, 19);
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(71, 85, 105);
  text-decoration: underline dotted rgb(71, 85, 105);
}

body details {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body input[type=text] {
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(0, 0, 0) 0px 2px 0px 0px;
  color: rgb(128, 50, 50);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body sub {
  color: rgb(71, 85, 105);
}

body summary {
  color: rgb(71, 85, 105);
}

body sup {
  color: rgb(71, 85, 105);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #912e2e !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #aac1d3 !important;
  --accent2-lite: #5599d0 !important;
  --aside-bg: #dce4f6 !important;
  --background-modifier-active-hover: #c35c5c !important;
  --background-modifier-border: #ccd6eb !important;
  --background-modifier-border-focus: #912e2e !important;
  --background-modifier-border-hover: #d9e4f0 !important;
  --background-modifier-cover: #d0ddef62 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #d0ddef62 !important;
  --background-modifier-form-field-hover: #d0ddef62 !important;
  --background-modifier-hover: rgba(253, 115, 115, 0.4) !important;
  --background-modifier-message: #c35c5c !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #e6edf8 !important;
  --background-primary-alt: #2f1010 !important;
  --background-secondary: #e6edf8 !important;
  --background-secondary-alt: #d5e1f3 !important;
  --bases-cards-background: #e6edf8 !important;
  --bases-cards-cover-background: #2f1010 !important;
  --bases-cards-font-size: 0.9em !important;
  --bases-cards-shadow: 0 0 0 1px #ccd6eb !important;
  --bases-cards-shadow-hover: 0 0 0 1px #d9e4f0 !important;
  --bases-embed-border-color: #ccd6eb !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #697580 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: 0.9em !important;
  --bases-table-border-color: #e6edf8 !important;
  --bases-table-cell-background-active: #e6edf8 !important;
  --bases-table-cell-background-disabled: #2f1010 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #912e2e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c35c5c !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: 0.9em !important;
  --bases-table-group-background: #2f1010 !important;
  --bases-table-header-background: #e6edf8 !important;
  --bases-table-header-background-hover: rgba(253, 115, 115, 0.4) !important;
  --bases-table-header-color: #697580 !important;
  --bases-table-row-background-hover: rgba(229, 149, 149, 0.37) !important;
  --bases-table-summary-background: #e6edf8 !important;
  --bases-table-summary-background-hover: rgba(253, 115, 115, 0.4) !important;
  --bg: #d9e4f0 !important;
  --blockquote-background-color: #dce4f6 !important;
  --blockquote-border-color: #d9e4f0 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #30353a !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --bodyFont: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #d9e4f0 !important;
  --box-border-m: 3px solid #d9e4f0 !important;
  --box-border-s: 1px solid #d9e4f0 !important;
  --bttn: #c14343 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #c14343 !important;
  --button-background-hover: #a6bbde !important;
  --button-border: #c14343 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #e6edf8 !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 166, 180, 204 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #30353a !important;
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
  --checkbox-border-color: #912e2e !important;
  --checkbox-border-color-hover: #c35c5c !important;
  --checkbox-color: #912e2e !important;
  --checkbox-color-hover: #c35c5c !important;
  --checkbox-marker-color: #e6edf8 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #a6bbde !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #e6ebf8 !important;
  --code-bg: #e6ebf8 !important;
  --code-border-color: #ccd6eb !important;
  --code-bracket-background: rgba(253, 115, 115, 0.4) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #ea4262 !important;
  --code-punctuation: #697580 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #d9e4f0 !important;
  --code-size: 0.9em !important;
  --code-text: #ea4262 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #a6bbde !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(194, 76, 78) !important;
  --color-accent-2: rgb(199, 87, 92) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #30353a !important;
  --dark-accent: #c35c5c !important;
  --dark-sidebar: #dce4f6 !important;
  --darkgray: #30353a !important;
  --dataview-table-width: 100% !important;
  --dataview-th-background: #d5e1f3 !important;
  --dataview-th-border-bottom: 2px solid #c14343 !important;
  --dataview-th-color: #c14343 !important;
  --dataview-th-count-color: #c14343 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #2f1010 !important;
  --divider-color: #d5e1f3 !important;
  --divider-color-hover: #912e2e !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #c35c5c !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #d5e1f3 !important;
  --dropdown-background-hover: #a6bbde !important;
  --embed-bg: #dce4f6 !important;
  --embed-block-shadow-hover: 2px 2px 0 #d9e4f0 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #d9e4f0 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #d9e4f0 !important;
  --embed-border-left: 2px solid #c14343 !important;
  --embed-border-left-color: #c14343 !important;
  --embed-border-left-color-hover: #c14343 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #d9e4f0 !important;
  --embed-border-start: 2px solid #c35c5c !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #d9e4f0 !important;
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
  --fg: #912e2e !important;
  --file-font: "its" !important;
  --file-header-background: #e6edf8 !important;
  --file-header-breadcrumb-color: #a6bbde !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #a6bbde !important;
  --file-header-color-active: #30353a !important;
  --file-header-font: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #c35c5c !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #d5e1f3 !important;
  --file-icon: "" !important;
  --file-icon-color: #a6bbde !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #30353a !important;
  --flair-background: #d5e1f3 !important;
  --flair-color: #30353a !important;
  --folder: #c14343 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #c14343 !important;
  --folder-icon-open-color: #ce6d6d !important;
  --folder-open: #ce6d6d !important;
  --folder-open-text-color: #30353a !important;
  --folder-text-color: #30353a !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: 0.95em !important;
  --font-interface: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, "??", "??", "Arial" !important;
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-small: 0.95em !important;
  --font-smaller: 0.9em !important;
  --font-smallest: 0.85em !important;
  --font-text: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #8996a0 !important;
  --footnote-divider-color: #ccd6eb !important;
  --footnote-id-color: #697580 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #d0ddef62 !important;
  --footnote-radius: 0 !important;
  --footnote-size: 0.9em !important;
  --graph-404: #a6bbde !important;
  --graph-arrow: #697580 !important;
  --graph-background: #e6edf8 !important;
  --graph-bg: #e6edf8 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #cd2626 !important;
  --graph-focused: #5599d0 !important;
  --graph-img: #aac1d3 !important;
  --graph-line: rgba(229, 149, 149, 0.37) !important;
  --graph-line-hover: #912e2e !important;
  --graph-lines: rgba(229, 149, 149, 0.37) !important;
  --graph-node: #30353a !important;
  --graph-node-attachment: #aac1d3 !important;
  --graph-node-focused: #5599d0 !important;
  --graph-node-hover-fill: #cd2626 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #c35c5c !important;
  --graph-node-unresolved: #a6bbde !important;
  --graph-tag: #c35c5c !important;
  --graph-text: #30353a !important;
  --gray: #697580 !important;
  --h1-background: transparent !important;
  --h1-border-color: #bb5555 !important;
  --h1-border-left-color: #ccd6eb !important;
  --h1-border-line-color: #ccd6eb !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #ccd6eb !important;
  --h1-border-width: 0 !important;
  --h1-color: #c14343 !important;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #a53f3f !important;
  --h2-border-left-color: #ccd6eb !important;
  --h2-border-line-color: #ccd6eb !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #ccd6eb !important;
  --h2-border-width: 0 !important;
  --h2-color: #c14343 !important;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #862c2c !important;
  --h3-border-left-color: #ccd6eb !important;
  --h3-border-line-color: #ccd6eb !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #ccd6eb !important;
  --h3-border-width: 0 !important;
  --h3-color: #c14343 !important;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #662828 !important;
  --h4-border-left-color: #ccd6eb !important;
  --h4-border-line-color: #ccd6eb !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #ccd6eb !important;
  --h4-border-width: 0 !important;
  --h4-color: #c14343 !important;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #697795 !important;
  --h5-border-left-color: #ccd6eb !important;
  --h5-border-line-color: #ccd6eb !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #ccd6eb !important;
  --h5-border-width: 0 !important;
  --h5-color: #c14343 !important;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #a4aec2 !important;
  --h6-border-left-color: #ccd6eb !important;
  --h6-border-line-color: #ccd6eb !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #ccd6eb !important;
  --h6-border-width: 0 !important;
  --h6-color: #c14343 !important;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #c14343 !important;
  --he-text-on-accent-inactive: #30353a !important;
  --he-title-bar-active-action: #cd2626 !important;
  --he-title-bar-active-bg: #dce4f6 !important;
  --he-title-bar-active-fg: #30353a !important;
  --he-title-bar-active-pinned-bg: #e6edf8 !important;
  --he-title-bar-inactive-action: #697580 !important;
  --he-title-bar-inactive-bg: #e6edf8 !important;
  --he-title-bar-inactive-fg: #a6bbde !important;
  --he-title-bar-inactive-pinned-bg: #e6edf8 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #ccd6eb !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 700 !important;
  --headerFont: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #c14343 !important;
  --heading-formatting: #a6bbde !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(229, 149, 149, 0.37) !important;
  --hr: #d6deea !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #d6deea !important;
  --hr-icon-background: #e6edf8 !important;
  --hr-icon-color: #c14343 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(255, 0, 0, 0.212) !important;
  --hvr-active: rgba(253, 115, 115, 0.4) !important;
  --hvr2: rgba(229, 149, 149, 0.37) !important;
  --i-at: #697580 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #697580 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #30353a !important;
  --icon-color-hover: #30353a !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #d9e4f0 !important;
  --illusion-h1-background: #bb5555 !important;
  --illusion-h2-background: #a53f3f !important;
  --illusion-h3-background: #862c2c !important;
  --illusion-h4-background: #662828 !important;
  --illusion-h5-background: #697795 !important;
  --illusion-h6-background: #a4aec2 !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #d0ddef62 !important;
  --image-border-color: #ccd6eb !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #a6bbde !important;
  --indentation-guide-color: #d6deea !important;
  --indentation-guide-color-active: #912e2e !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #d6deea !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #c14343 !important;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: #d0ddef62 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #d9e4f0 !important;
  --input-shadow-hover: 3px 3px 0 #d9e4f0 !important;
  --interactive-accent: #c35c5c !important;
  --interactive-accent-hover: #a6bbde !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #a6bbde !important;
  --interactive-normal: #d5e1f3 !important;
  --its: "its" !important;
  --kanban-button-background: #e6ebf8 !important;
  --kanban-button-shadow: 2px 2px 0 #d9e4f0 !important;
  --kanban-card-border: 2px solid #d9e4f0 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #e6edf8 !important;
  --kanban-card-text-color: #30353a !important;
  --kanban-card-title-background: #e6edf8 !important;
  --kanban-card-title-border: 0 1px 0 #d9e4f0 !important;
  --kanban-lane-background: #e6ebf8 !important;
  --kanban-lane-border: 3px solid #d9e4f0 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #d9e4f0 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #5599d0 !important;
  --kanban-tag-background: #c35c5c !important;
  --latex-color: #cd2626 !important;
  --latex-format-color: #a6bbde !important;
  --latex-syntax-color: #697580 !important;
  --light: #e6edf8 !important;
  --lightgray: #e6edf8 !important;
  --line-height-tight: 1.3em !important;
  --lines: #d6deea !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #5599d0 !important;
  --link-color-hover: #cd2626 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #5599d0 !important;
  --link-external-color-hover: #aac1d3 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #a6bbde !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #ccd6eb !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #d6deea !important;
  --list-color-2: #d6deea !important;
  --list-color-3: #d6deea !important;
  --list-color-4: #d6deea !important;
  --list-color-5: #d6deea !important;
  --list-color-6: #d6deea !important;
  --list-indent: 25px !important;
  --list-marker-color: #912e2e !important;
  --list-marker-color-collapsed: #a6bbde !important;
  --list-marker-color-hover: #697580 !important;
  --list-marker-color-other: #aac1d3 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #cd2626 !important;
  --list-spacing: 1px !important;
  --lite-accent: #cd2626 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #e6edf8 !important;
  --menu-border-color: #d9e4f0 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #d9e4f0 !important;
  --message-border-color: #d9e4f0 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #d9e4f0 !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #ccd6eb !important;
  --metadata-button-text-color: #a6bbde !important;
  --metadata-divider-color: #ccd6eb !important;
  --metadata-icon-color: #697580 !important;
  --metadata-input-background-active: #d0ddef62 !important;
  --metadata-input-font: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: 0.9em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #30353a !important;
  --metadata-label-background-active: #d0ddef62 !important;
  --metadata-label-font: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: 0.9em !important;
  --metadata-label-text-color: #697580 !important;
  --metadata-label-text-color-hover: #697580 !important;
  --metadata-property-background-active: rgba(253, 115, 115, 0.4) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #912e2e !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d9e4f0 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #697580 !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #e6edf8 !important;
  --modal-border-color: #d9e4f0 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #d0ddef62 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #dce4f6 !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #30353a !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #697580 !important;
  --nav-heading-color-hover: #30353a !important;
  --nav-indentation-guide-color: #d6deea !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #c35c5c !important;
  --nav-item-background-border-color-hover: #c35c5c !important;
  --nav-item-background-hover: #c35c5c !important;
  --nav-item-background-selected: rgba(255, 0, 0, 0.212) !important;
  --nav-item-border-color: #cd2626 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #30353a !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #30353a !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #697580 !important;
  --nav-tag-color-hover: #697580 !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #e6edf8 !important;
  --note-rgb: 248, 251, 255 !important;
  --note-title-border-color: #c14343 !important;
  --outer-bar: #d5e1f3 !important;
  --outline: #d9e4f0 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #e6edf8 !important;
  --pdf-background: #e6edf8 !important;
  --pdf-page-background: #e6edf8 !important;
  --pdf-sidebar-background: #e6edf8 !important;
  --pill-border-color: #ccd6eb !important;
  --pill-border-color-hover: #d9e4f0 !important;
  --pill-color: #697580 !important;
  --pill-color-hover: #30353a !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #5599d0 !important;
  --pill-radius: 0 !important;
  --popover-background: #e6edf8 !important;
  --popover-border: 3px solid #d9e4f0 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #912e2e !important;
  --progress-bg: #d9e4f0 !important;
  --prompt-border-color: #d9e4f0 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #c14343 !important;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #cd2626 !important;
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
  --ribbon-background: #d5e1f3 !important;
  --ribbon-background-collapsed: #e6edf8 !important;
  --ribbon-border-color: #d5e1f3 !important;
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
  --scrollbar-active-thumb-bg: #cd2626 !important;
  --scrollbar-bg: #d9e4f0 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #c35c5c !important;
  --scrollbar-track-bg: #e6edf8 !important;
  --search-border: 2px solid #d9e4f0 !important;
  --search-box-shadow: 2px 2px 0 #d9e4f0 !important;
  --search-clear-button-color: #697580 !important;
  --search-icon-color: #697580 !important;
  --search-result-background: #e6edf8 !important;
  --secondary: #5599d0 !important;
  --setting-item-alt-background-hover: #d0ddef62 !important;
  --setting-item-background-hover: rgba(255, 0, 0, 0.212) !important;
  --setting-item-border-color: #ccd6eb !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #c14343 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #d0ddef62 !important;
  --setting-items-background: transparent !important;
  --shadow-l: 5px 5px 0 #d9e4f0 !important;
  --shadow-m: 3px 3px 0 #d9e4f0 !important;
  --shadow-ml: 4px 4px 0 #d9e4f0 !important;
  --shadow-s: 2px 2px 0 #d9e4f0 !important;
  --side-bar: #e6edf8 !important;
  --side-bar-bg: #d5e1f3 !important;
  --sidebar-icon-color: #30353a !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #c14343 !important;
  --sidebar-tab-background-color-hover: #912e2e !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #c14343 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #e6edf8 !important;
  --slider-thumb-border-color: #d9e4f0 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #ccd6eb !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #697580 !important;
  --statblock-alt: #d0ddef62 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #e6edf8 !important;
  --statblock-bar-border-color: #912e2e !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #912e2e !important;
  --statblock-border-color: #d6deea !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #d9e4f0 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #30353a !important;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-heading-font-color: #c14343 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #d6deea !important;
  --statblock-primary-color: #30353a !important;
  --statblock-property-font-color: #30353a !important;
  --statblock-property-name-font-color: #c14343 !important;
  --statblock-rule-color: #912e2e !important;
  --statblock-section-heading-border-color: #ccd6eb !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-section-heading-font-color: #8996a0 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: 0.95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #d5e1f3 !important;
  --status-bar-border-color: #912e2e !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #697580 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #c35c5c !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #599049 !important;
  --tab-background: #d5e1f3 !important;
  --tab-background-active: #e6edf8 !important;
  --tab-container-background: #d5e1f3 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #d6deea !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #912e2e !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62 !important;
  --tab-stacked-shadow-color: #d0ddef62 !important;
  --tab-switcher-background: #e6edf8 !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #d9e4f0 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #d9e4f0 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #cd2626, 5px 5px 0 #d9e4f0 !important;
  --tab-text-color: #a6bbde !important;
  --tab-text-color-active: #30353a !important;
  --tab-text-color-focused: #a6bbde !important;
  --tab-text-color-focused-active: #30353a !important;
  --tab-text-color-focused-active-current: #30353a !important;
  --tab-text-color-focused-highlighted: #5599d0 !important;
  --tab-text-color-hover: #30353a !important;
  --tab-top-outline-width: 0 !important;
  --table: #ccd6eb !important;
  --table-add-button-background: #c14343 !important;
  --table-add-button-border-color: #e6edf8 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #e6edf8 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #d0ddef62 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #c35c5c !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #c35c5c !important;
  --table-header-background-hover: #912e2e !important;
  --table-header-border-color: #e6edf8 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #cd2626 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #d0ddef62 !important;
  --table-row-alt-background-hover: rgba(229, 149, 149, 0.37) !important;
  --table-row-background-hover: rgba(229, 149, 149, 0.37) !important;
  --table-row-edit-font-size: 0.95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #c35c5c !important;
  --table-selection-border-radius: 0 !important;
  --tag: #c35c5c !important;
  --tag-background: #c35c5c !important;
  --tag-background-color: #c35c5c !important;
  --tag-background-hover: #912e2e !important;
  --tag-border-color: #c35c5c !important;
  --tag-border-color-hover: #912e2e !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: 0.9em !important;
  --tag-text: #cd2626 !important;
  --tall: 700px !important;
  --td: #d0ddef62 !important;
  --tertiary: #aac1d3 !important;
  --text: #30353a !important;
  --text-accent: #5599d0 !important;
  --text-accent-hover: #aac1d3 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(255, 0, 0, 0.212) !important;
  --text-highlight-bg-active: rgba(253, 115, 115, 0.4) !important;
  --text-muted: #697580 !important;
  --text-normal: #30353a !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(229, 149, 149, 0.37) !important;
  --textHighlight: rgba(255, 0, 0, 0.212) !important;
  --th: #c35c5c !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #bb5555 !important;
  --theme-rainbow-2: #a53f3f !important;
  --theme-rainbow-3: #862c2c !important;
  --theme-rainbow-4: #662828 !important;
  --theme-rainbow-5: #697795 !important;
  --theme-rainbow-6: #a4aec2 !important;
  --tiny: 100px !important;
  --titleFont: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #e6edf8 !important;
  --titlebar-background-focused: #d5e1f3 !important;
  --titlebar-border-color: #ccd6eb !important;
  --titlebar-text-color: #30353a !important;
  --titlebar-text-color-focused: #30353a !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --vault-name-color: #c14343 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #30353a !important;
  --vault-profile-color-hover: #30353a !important;
  --vault-profile-font-size: 14px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(213, 225, 243);
  color: rgb(48, 53, 58);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 225, 243);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(213, 225, 243);
  border-left-color: rgb(213, 225, 243);
  border-left-width: 2px;
  color: rgb(48, 53, 58);
}

body div#quartz-root {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}`,
    typography: `body .page article p > b, b {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > em, em {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > i, i {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > strong, strong {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .text-highlight {
  background-color: rgba(255, 0, 0, 0.21);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body del {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: line-through 1px solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body p {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}`,
    links: `body a.external, footer a {
  color: rgb(85, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
  text-decoration-line: none;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 38, 38);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(205, 38, 38);
  text-decoration-color: rgb(205, 38, 38);
  text-decoration-line: none;
}

body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
  text-decoration-line: none;
}`,
    lists: `body dd {
  color: rgb(48, 53, 58);
}

body dt {
  color: rgb(48, 53, 58);
}

body ol > li {
  color: rgb(48, 53, 58);
}

body ol > li::marker {
  background-color: rgb(145, 46, 46);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  color: rgb(145, 46, 46);
}

body ul > li {
  color: rgb(48, 53, 58);
}

body ul > li::marker {
  background-color: rgb(145, 46, 46);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  color: rgb(145, 46, 46);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: none solid rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(220, 228, 246);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body table {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body td {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(230, 237, 248);
  border-right-color: rgb(230, 237, 248);
  border-top-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

body th {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(230, 237, 248);
  border-right-color: rgb(230, 237, 248);
  border-top-color: rgb(230, 237, 248);
  color: rgb(229, 235, 238);
}

body tr {
  background-color: rgb(195, 92, 92);
}`,
    code: `body code {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(234, 66, 98);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
}

body pre > code, pre:has(> code) {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}

body pre:has(> code) {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}`,
    images: `body audio {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body figcaption {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body img {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body video {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 187, 222);
  text-decoration: none solid rgb(166, 187, 222);
  text-decoration-color: rgb(166, 187, 222);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-left-width: 4px;
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    search: `body .search > .search-button {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(230, 237, 248);
  border-bottom-color: rgb(217, 228, 240);
  border-bottom-width: 3px;
  border-left-color: rgb(217, 228, 240);
  border-left-width: 3px;
  border-right-color: rgb(217, 228, 240);
  border-right-width: 3px;
  border-top-color: rgb(217, 228, 240);
  border-top-width: 3px;
  box-shadow: rgb(217, 228, 240) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(217, 228, 240);
  border-bottom-width: 3px;
  border-left-color: rgb(217, 228, 240);
  border-left-width: 3px;
  border-right-color: rgb(217, 228, 240);
  border-right-width: 3px;
  border-top-color: rgb(217, 228, 240);
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(230, 237, 248);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(195, 92, 92);
  border-bottom-color: rgb(195, 92, 92);
  border-left-color: rgb(195, 92, 92);
  border-right-color: rgb(195, 92, 92);
  border-top-color: rgb(195, 92, 92);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  padding-left: 16px;
  padding-right: 16px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(48, 53, 58);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(48, 53, 58);
  cursor: default;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(48, 53, 58);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: none solid rgb(48, 53, 58);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(195, 92, 92);
  border-bottom-color: rgb(229, 235, 238);
  border-left-color: rgb(229, 235, 238);
  border-right-color: rgb(229, 235, 238);
  border-top-color: rgb(229, 235, 238);
  color: rgb(229, 235, 238);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    misc: `body abbr {
  color: rgb(48, 53, 58);
  text-decoration: underline dotted rgb(48, 53, 58);
}

body details {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body input[type=text] {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(234, 66, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-end-end-radius: 0px;
  border-end-start-radius: 0px;
  border-left-color: rgb(234, 66, 98);
  border-right-color: rgb(234, 66, 98);
  border-start-end-radius: 0px;
  border-start-start-radius: 0px;
  border-top-color: rgb(234, 66, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(234, 66, 98);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body sub {
  color: rgb(48, 53, 58);
}

body summary {
  color: rgb(48, 53, 58);
}

body sup {
  color: rgb(48, 53, 58);
}`,
  },
};
