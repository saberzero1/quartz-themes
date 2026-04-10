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
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1) !important;
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
  --bodyFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid black !important;
  --box-border-m: 3px solid black !important;
  --box-border-s: 1px solid black !important;
  --bttn: #04070c !important;
  --bullet: "\\e802" !important;
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
  --color-accent: hsl(0, 49%, 49%) !important;
  --color-accent-1: hsl(-3, 49.98%, 56.35%) !important;
  --color-accent-2: hsl(-5, 51.45%, 63.21%) !important;
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
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #04070c !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: black !important;
  --file-icon: "\\e800" !important;
  --file-icon-color: #475569 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #475569 !important;
  --flair-background: black !important;
  --flair-color: #475569 !important;
  --folder: #aa3333 !important;
  --folder-font: "its" !important;
  --folder-icon: "\\e801" !important;
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
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
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
  --hr-icon-symbol: "\\e817" !important;
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
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3) !important;
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
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #475569 !important;
  --metadata-label-background-active: #03000054 !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
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
  --metadata-title-icon: "\\e805" !important;
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
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #c94d4d !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #03000054 !important;
  --table-row-alt-background-hover: rgba(139, 6, 6, 0.4) !important;
  --table-row-background-hover: rgba(139, 6, 6, 0.4) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: hsla(0, 49%, 49%, 0.1) !important;
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
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(3, 0, 0, 0.33);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(7, 11, 17);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
  box-shadow: rgb(0, 0, 0) 2px 2px 0px 0px;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(56, 11, 19);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(128, 50, 50);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(128, 50, 50);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(56, 11, 19);
  border-radius: 0px;
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(128, 50, 50);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(60, 8, 8, 0.46);
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body del {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: line-through 1px;
  text-decoration-color: rgb(71, 85, 105);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(71, 85, 105);
  font-size: 15px;
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(128, 50, 50);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(128, 50, 50) none 0px;
  text-decoration-color: rgb(128, 50, 50);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(197, 87, 91);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(197, 87, 91) none 0px;
  text-decoration-color: rgb(197, 87, 91);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(197, 87, 91);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(197, 87, 91) none 0px;
  text-decoration-color: rgb(197, 87, 91);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(27, 38, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(27, 38, 47) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body dt {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(0, 0, 0);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body table {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(3, 0, 0, 0.33);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(7, 11, 17);
  border-left-color: rgb(7, 11, 17);
  border-right-color: rgb(7, 11, 17);
  border-top-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(7, 11, 17);
  border-left-color: rgb(7, 11, 17);
  border-right-color: rgb(7, 11, 17);
  border-top-color: rgb(7, 11, 17);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(87, 26, 26);
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(170, 51, 51);
  border-left-color: rgb(170, 51, 51);
  border-right-color: rgb(170, 51, 51);
  border-top-color: rgb(170, 51, 51);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(4, 7, 12);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-style: solid;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(194, 42, 42);
  text-decoration-color: rgb(194, 42, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(128, 50, 50);
  text-decoration-color: rgb(128, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(253, 175, 0);
  text-decoration-color: rgb(253, 175, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(230, 129, 63);
  text-decoration-color: rgb(230, 129, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(149, 233, 238);
  text-decoration-color: rgb(149, 233, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(133, 91, 65);
  text-decoration-color: rgb(133, 91, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(231, 231, 171);
  text-decoration-color: rgb(231, 231, 171);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(62, 69, 82);
  content: "\\ec02";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(194, 42, 42);
  content: "\\ec08";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(253, 175, 0);
  content: "\\ec05";
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(230, 129, 63);
  content: "\\e900";
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(128, 50, 50);
  content: "\\ec17";
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(136, 94, 233);
  content: "\\ec32";
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(248, 114, 181);
  content: "\\ec06";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(78, 91, 111);
  content: "\\ec03";
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(71, 85, 105);
  content: "\\ec03";
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(207, 67, 67);
  content: "\\ec33";
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\ec20";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(230, 129, 63);
  content: "\\ec15";
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(136, 94, 233);
  content: "\\ec10";
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(149, 233, 238);
  content: "\\ec29";
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(207, 67, 67);
  content: "\\ec12";
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec25";
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(92, 118, 153);
  content: "\\ec04";
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec18";
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(133, 91, 65);
  content: "\\e81e";
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(92, 118, 153);
  content: "\\ec28";
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(248, 114, 181);
  content: "\\ec30";
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(231, 231, 171);
  content: "\\ec09";
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec16";
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(133, 91, 65);
  content: "\\ec21";
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(133, 91, 65);
  content: "\\ec14";
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(230, 129, 63);
  content: "\\ec24";
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(186, 64, 64);
  content: "\\e805";
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec19";
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\ec11";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec13";
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(249, 190, 123);
  content: "\\ec22";
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec07";
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(62, 69, 82);
  content: "\\ec31";
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec27";
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec26";
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\e813";
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(197, 87, 91);
  content: "\\ec01";
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(71, 85, 105);
  font-weight: 900;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: hsl(0, 49%, 49%);
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="aside"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="blank"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="caption"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="captions"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cards"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="checks"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="columns"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="grid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="infobox"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="kanban"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="kith"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="metadata"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z'/%3E%3Cpath d='M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12'/%3E%3Cpath d='M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quotes"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="recite"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath stroke='none' fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="statblocks"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='14.5 17.5 3 6 3 3 6 3 17.5 14.5'/%3E%3Cline x1='13' x2='19' y1='19' y2='13'/%3E%3Cline x1='16' x2='20' y1='16' y2='20'/%3E%3Cline x1='19' x2='21' y1='21' y2='19'/%3E%3Cpolyline points='14.5 6.5 18 3 21 3 21 6 17.5 9.5'/%3E%3Cline x1='5' x2='9' y1='14' y2='18'/%3E%3Cline x1='7' x2='4' y1='17' y2='20'/%3E%3Cline x1='3' x2='5' y1='19' y2='21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="timeline"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v6'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(87, 26, 26);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(128, 50, 50);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(128, 50, 50);
  stroke: rgb(128, 50, 50);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(56, 11, 19);
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body sub {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body summary {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body sup {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 235, 238);
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
  --bullet: "\\e802" !important;
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
  --file-icon: "\\e800" !important;
  --file-icon-color: #a6bbde !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #30353a !important;
  --flair-background: #d5e1f3 !important;
  --flair-color: #30353a !important;
  --folder: #c14343 !important;
  --folder-font: "its" !important;
  --folder-icon: "\\e801" !important;
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
  --hr-icon-symbol: "\\e817" !important;
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
  --metadata-title-icon: "\\e805" !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(213, 225, 243);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 225, 243);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(213, 225, 243);
  border-left-color: rgb(213, 225, 243);
  border-left-width: 2px;
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 0, 0, 0.21);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body del {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: line-through 1px solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body p {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(85, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
  text-decoration-line: none;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 38, 38);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(205, 38, 38);
  text-decoration-color: rgb(205, 38, 38);
  text-decoration-line: none;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
  text-decoration-line: none;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body dt {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body ol > li {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body ol > li::marker {
  background-color: rgb(145, 46, 46);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  color: rgb(145, 46, 46);
}

html[saved-theme="light"] body ul > li {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body ul > li::marker {
  background-color: rgb(145, 46, 46);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  color: rgb(145, 46, 46);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: none solid rgb(78, 91, 111);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(220, 228, 246);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body table {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body td {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(230, 237, 248);
  border-right-color: rgb(230, 237, 248);
  border-top-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body th {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(230, 237, 248);
  border-right-color: rgb(230, 237, 248);
  border-top-color: rgb(230, 237, 248);
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body tr {
  background-color: rgb(195, 92, 92);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body figcaption {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-left-width: 4px;
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(217, 228, 240);
  border-bottom-width: 3px;
  border-left-color: rgb(217, 228, 240);
  border-left-width: 3px;
  border-right-color: rgb(217, 228, 240);
  border-right-width: 3px;
  border-top-color: rgb(217, 228, 240);
  border-top-width: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(230, 237, 248);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(195, 92, 92);
  border-bottom-color: rgb(195, 92, 92);
  border-left-color: rgb(195, 92, 92);
  border-right-color: rgb(195, 92, 92);
  border-top-color: rgb(195, 92, 92);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  padding-left: 16px;
  padding-right: 16px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(48, 53, 58);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(48, 53, 58);
  cursor: default;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(48, 53, 58);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: none solid rgb(48, 53, 58);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(195, 92, 92);
  border-bottom-color: rgb(229, 235, 238);
  border-left-color: rgb(229, 235, 238);
  border-right-color: rgb(229, 235, 238);
  border-top-color: rgb(229, 235, 238);
  color: rgb(229, 235, 238);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    misc: `html[saved-theme="light"] body abbr {
  color: rgb(48, 53, 58);
  text-decoration: underline dotted rgb(48, 53, 58);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body sub {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body summary {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body sup {
  color: rgb(48, 53, 58);
}`,
  },
  extras: `/* extras from _index.scss */
/*Callout Positioning*/
body
  :not(.is-live-preview)
  .callout.callout.callout:is(
    [data-callout-metadata~="p+l"],
    [data-callout-metadata~="left"]
  ) {
  float: left;
  margin: unset;
  margin-right: 8px;
}

body
  :not(.is-live-preview)
  .callout.callout:is(
    [data-callout-metadata~="p+r"],
    [data-callout-metadata~="right"]
  ) {
  float: right;
  margin: unset;
  margin-left: 8px;
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="ctr"],
    [data-callout-metadata~="center"]
  ) {
  display: block;
  margin: auto;
  float: unset;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="no-t"],
    [data-callout-metadata~="no-title"]
  )
  > .callout-title {
  display: none;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="s-t"],
    [data-callout-metadata~="show-title"]
  )
  > .callout-title {
  display: flex;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="s-t"],
    [data-callout-metadata~="show-title"]
  )
  > .callout-content
  > p {
  margin-top: 0;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="subtitle"],
    [data-callout-metadata~="subt"]
  )
  .callout-title {
  align-content: center;
  align-items: center;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="subtitle"],
    [data-callout-metadata~="subt"]
  )
  .callout-title
  em {
  display: block;
  font-style: normal;
  font-size: var(--font-small);
  line-height: 12px;
  font-weight: normal;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="subtitle"],
    [data-callout-metadata~="subt"]
  )
  .callout-title
  em
  em {
  font-style: italic;
  display: inline-block;
}

body
  .callout.callout:is(
    [data-callout-metadata~="no-i"],
    [data-callout-metadata~="no-icon"]
  )
  > .callout-title
  > .callout-icon {
  width: 0;
  height: 0;
  --icon-size: 0;
}

body
  .callout:is(
    [data-callout-metadata~="n-th"],
    [data-callout-metadata~="no-table-header"]
  )
  > .callout-content
  table {
  margin-bottom: 5px;
}

body
  .callout:is(
    [data-callout-metadata~="n-th"],
    [data-callout-metadata~="no-table-header"]
  )
  > .callout-content
  table
  thead,
body
  .callout:is(
    [data-callout-metadata~="n-th"],
    [data-callout-metadata~="no-table-header"]
  )
  > .callout-content
  table
  th {
  display: none;
}

body
  .callout:is(
    [data-callout-metadata~="t-w"],
    [data-callout-metadata~="table-wide"]
  )
  table {
  width: 100%;
}

body
  .callout:is(
    [data-callout-metadata~="t-w"],
    [data-callout-metadata~="table-wide"]
  )
  table
  td {
  width: calc(var(--tbl-w) / 2);
}

body .callout[data-callout-metadata~="table-cell-top"] table td {
  vertical-align: top;
}

body
  .callout.callout:is(
    [data-callout-metadata~="t-nmg"],
    [data-callout-metadata~="table-no-margin"]
  )
  table {
  margin-block-start: 0;
  margin-block-end: 0;
}

body .callout[data-callout-metadata~="embed"] .callout-content,
body .callout[data-callout-metadata~="embed"] > .callout-content > p {
  margin: 0;
  padding: 0;
}

body .callout[data-callout-metadata~="collapse"] * {
  margin: 0 !important;
  padding: 0 !important;
  grid-gap: 0 !important;
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="nbrd"],
    [data-callout-metadata~="no-border"]
  ) {
  border: 0;
}

body .callout.callout.callout[data-callout-metadata~="clean"],
body
  .callout.callout.callout[data-callout-metadata~="clean"]
  > .callout-content {
  border: 0;
  box-shadow: none;
  --callout-color: transparent;
  --callout-padding: 0;
}

body .callout.callout.callout[data-callout-metadata~="clean"] .callout-content,
body
  .callout.callout.callout[data-callout-metadata~="clean"]
  > .callout-content
  .callout-content {
  padding: 0;
}

body .callout[data-callout-metadata~="clear"] {
  clear: both;
}

body .callout.callout.callout[data-callout-metadata~="block"] {
  display: block;
  float: unset;
}

body
  .callout.callout.callout[data-callout-metadata~="block"][data-callout-metadata~="right"] {
  margin-left: auto;
}

body
  .callout.callout.callout[data-callout-metadata~="block"][data-callout-metadata~="left"] {
  margin-right: auto;
}

body .callout #vid {
  text-align: left;
}

body
  .callout:is(
    [data-callout-metadata~="dim-hvr"],
    [data-callout-metadata~="dim-hover"],
    [data-callout-metadata~="dim-closed"].is-collapsed,
    [data-callout-metadata~="dim"]
  ):not(:hover) {
  filter: brightness(50%);
  transition: filter 300ms;
}

/*--Callout Coloring--*/
body .callout.callout.callout {
  --callout-color-opacity: 20%;
  --callout-blue: 82, 139, 212;
  --callout-green: 86, 179, 117;
  --callout-orange: 230, 129, 63;
  --callout-red: 193, 67, 67;
  --callout-purple: 153, 97, 218;
  --callout-gray: 166, 189, 197;
  --callout-yellow: 208, 181, 48;
  --callout-pink: 227, 107, 167;
  --callout-brown: 161, 106, 73;
  --callout-black: 0, 0, 0;
  --callout-white: 256, 256, 256;
  --callout-plain: transparent;
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-blue"],
    [data-callout-metadata~="c-blue"],
    [data-callout-metadata~="background-color-blue"],
    [data-callout-metadata~="bg-c-blue"]
  ) {
  --callout-title: var(--callout-blue);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-blue"],
    [data-callout-metadata~="c-blue"],
    [data-callout-metadata~="background-color-blue"],
    [data-callout-metadata~="bg-c-blue"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-blue"],
    [data-callout-metadata~="bg-blue"],
    [data-callout-metadata~="background-color-blue"],
    [data-callout-metadata~="bg-c-blue"]
  ) {
  --callout-background: rgba(var(--callout-blue), var(--callout-color-opacity));
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-blue"],
    [data-callout-metadata~="bg-c-blue"]
  ) {
  --callout-color: var(--callout-blue);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-green"],
    [data-callout-metadata~="c-green"],
    [data-callout-metadata~="background-color-green"],
    [data-callout-metadata~="bg-c-green"]
  ) {
  --callout-title: var(--callout-green);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-green"],
    [data-callout-metadata~="c-green"],
    [data-callout-metadata~="background-color-green"],
    [data-callout-metadata~="bg-c-green"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-green"],
    [data-callout-metadata~="bg-green"],
    [data-callout-metadata~="background-color-green"],
    [data-callout-metadata~="bg-c-green"]
  ) {
  --callout-background: rgba(
    var(--callout-green),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-green"],
    [data-callout-metadata~="bg-c-green"]
  ) {
  --callout-color: var(--callout-green);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-orange"],
    [data-callout-metadata~="c-orange"],
    [data-callout-metadata~="background-color-orange"],
    [data-callout-metadata~="bg-c-orange"]
  ) {
  --callout-title: var(--callout-orange);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-orange"],
    [data-callout-metadata~="c-orange"],
    [data-callout-metadata~="background-color-orange"],
    [data-callout-metadata~="bg-c-orange"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-orange"],
    [data-callout-metadata~="bg-orange"],
    [data-callout-metadata~="background-color-orange"],
    [data-callout-metadata~="bg-c-orange"]
  ) {
  --callout-background: rgba(
    var(--callout-orange),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-orange"],
    [data-callout-metadata~="bg-c-orange"]
  ) {
  --callout-color: var(--callout-orange);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-red"],
    [data-callout-metadata~="c-red"],
    [data-callout-metadata~="background-color-red"],
    [data-callout-metadata~="bg-c-red"]
  ) {
  --callout-title: var(--callout-red);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-red"],
    [data-callout-metadata~="c-red"],
    [data-callout-metadata~="background-color-red"],
    [data-callout-metadata~="bg-c-red"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-red"],
    [data-callout-metadata~="bg-red"],
    [data-callout-metadata~="background-color-red"],
    [data-callout-metadata~="bg-c-red"]
  ) {
  --callout-background: rgba(var(--callout-red), var(--callout-color-opacity));
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-red"],
    [data-callout-metadata~="bg-c-red"]
  ) {
  --callout-color: var(--callout-red);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-purple"],
    [data-callout-metadata~="c-purple"],
    [data-callout-metadata~="background-color-purple"],
    [data-callout-metadata~="bg-c-purple"]
  ) {
  --callout-title: var(--callout-purple);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-purple"],
    [data-callout-metadata~="c-purple"],
    [data-callout-metadata~="background-color-purple"],
    [data-callout-metadata~="bg-c-purple"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-purple"],
    [data-callout-metadata~="bg-purple"],
    [data-callout-metadata~="background-color-purple"],
    [data-callout-metadata~="bg-c-purple"]
  ) {
  --callout-background: rgba(
    var(--callout-purple),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-purple"],
    [data-callout-metadata~="bg-c-purple"]
  ) {
  --callout-color: var(--callout-purple);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-gray"],
    [data-callout-metadata~="c-gray"],
    [data-callout-metadata~="background-color-gray"],
    [data-callout-metadata~="bg-c-gray"]
  ) {
  --callout-title: var(--callout-gray);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-gray"],
    [data-callout-metadata~="c-gray"],
    [data-callout-metadata~="background-color-gray"],
    [data-callout-metadata~="bg-c-gray"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-gray"],
    [data-callout-metadata~="bg-gray"],
    [data-callout-metadata~="background-color-gray"],
    [data-callout-metadata~="bg-c-gray"]
  ) {
  --callout-background: rgba(var(--callout-gray), var(--callout-color-opacity));
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-gray"],
    [data-callout-metadata~="bg-c-gray"]
  ) {
  --callout-color: var(--callout-gray);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-yellow"],
    [data-callout-metadata~="c-yellow"],
    [data-callout-metadata~="background-color-yellow"],
    [data-callout-metadata~="bg-c-yellow"]
  ) {
  --callout-title: var(--callout-yellow);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-yellow"],
    [data-callout-metadata~="c-yellow"],
    [data-callout-metadata~="background-color-yellow"],
    [data-callout-metadata~="bg-c-yellow"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-yellow"],
    [data-callout-metadata~="bg-yellow"],
    [data-callout-metadata~="background-color-yellow"],
    [data-callout-metadata~="bg-c-yellow"]
  ) {
  --callout-background: rgba(
    var(--callout-yellow),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-yellow"],
    [data-callout-metadata~="bg-c-yellow"]
  ) {
  --callout-color: var(--callout-yellow);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-pink"],
    [data-callout-metadata~="c-pink"],
    [data-callout-metadata~="background-color-pink"],
    [data-callout-metadata~="bg-c-pink"]
  ) {
  --callout-title: var(--callout-pink);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-pink"],
    [data-callout-metadata~="c-pink"],
    [data-callout-metadata~="background-color-pink"],
    [data-callout-metadata~="bg-c-pink"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-pink"],
    [data-callout-metadata~="bg-pink"],
    [data-callout-metadata~="background-color-pink"],
    [data-callout-metadata~="bg-c-pink"]
  ) {
  --callout-background: rgba(var(--callout-pink), var(--callout-color-opacity));
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-pink"],
    [data-callout-metadata~="bg-c-pink"]
  ) {
  --callout-color: var(--callout-pink);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-brown"],
    [data-callout-metadata~="c-brown"],
    [data-callout-metadata~="background-color-brown"],
    [data-callout-metadata~="bg-c-brown"]
  ) {
  --callout-title: var(--callout-brown);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-brown"],
    [data-callout-metadata~="c-brown"],
    [data-callout-metadata~="background-color-brown"],
    [data-callout-metadata~="bg-c-brown"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-brown"],
    [data-callout-metadata~="bg-brown"],
    [data-callout-metadata~="background-color-brown"],
    [data-callout-metadata~="bg-c-brown"]
  ) {
  --callout-background: rgba(
    var(--callout-brown),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-brown"],
    [data-callout-metadata~="bg-c-brown"]
  ) {
  --callout-color: var(--callout-brown);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-black"],
    [data-callout-metadata~="c-black"],
    [data-callout-metadata~="background-color-black"],
    [data-callout-metadata~="bg-c-black"]
  ) {
  --callout-title: var(--callout-black);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-black"],
    [data-callout-metadata~="c-black"],
    [data-callout-metadata~="background-color-black"],
    [data-callout-metadata~="bg-c-black"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-black"],
    [data-callout-metadata~="bg-black"],
    [data-callout-metadata~="background-color-black"],
    [data-callout-metadata~="bg-c-black"]
  ) {
  --callout-background: rgba(
    var(--callout-black),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-black"],
    [data-callout-metadata~="bg-c-black"]
  ) {
  --callout-color: var(--callout-black);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-white"],
    [data-callout-metadata~="c-white"],
    [data-callout-metadata~="background-color-white"],
    [data-callout-metadata~="bg-c-white"]
  ) {
  --callout-title: var(--callout-white);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-white"],
    [data-callout-metadata~="c-white"],
    [data-callout-metadata~="background-color-white"],
    [data-callout-metadata~="bg-c-white"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-white"],
    [data-callout-metadata~="bg-white"],
    [data-callout-metadata~="background-color-white"],
    [data-callout-metadata~="bg-c-white"]
  ) {
  --callout-background: rgba(
    var(--callout-white),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-white"],
    [data-callout-metadata~="bg-c-white"]
  ) {
  --callout-color: var(--callout-white);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-plain"],
    [data-callout-metadata~="c-plain"],
    [data-callout-metadata~="background-color-plain"],
    [data-callout-metadata~="bg-c-plain"]
  ) {
  --callout-title: var(--callout-plain);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-plain"],
    [data-callout-metadata~="c-plain"],
    [data-callout-metadata~="background-color-plain"],
    [data-callout-metadata~="bg-c-plain"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-plain"],
    [data-callout-metadata~="bg-plain"],
    [data-callout-metadata~="background-color-plain"],
    [data-callout-metadata~="bg-c-plain"]
  ) {
  --callout-background: rgba(
    var(--callout-plain),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-plain"],
    [data-callout-metadata~="bg-c-plain"]
  ) {
  --callout-color: var(--callout-plain);
}

body .callout.callout.callout {
  --callout-micro: 10%;
  --callout-tiny: 20%;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-med-small: 50%;
  --callout-medium: 60%;
  --callout-med-tall: 80%;
  --callout-tall: 95%;
}

body .callout.callout.callout[data-callout-metadata~="wmicro"] {
  max-width: unset;
  width: var(--callout-micro);
}

body .callout.callout.callout[data-callout-metadata~="wtiny"] {
  max-width: unset;
  width: var(--callout-tiny);
}

body .callout.callout.callout[data-callout-metadata~="wsmall"] {
  max-width: unset;
  width: var(--callout-small);
}

body .callout.callout.callout[data-callout-metadata~="ws-med"] {
  max-width: unset;
  width: var(--callout-small-med);
}

body .callout.callout.callout[data-callout-metadata~="wm-sm"] {
  max-width: unset;
  width: var(--callout-med-small);
}

body .callout.callout.callout[data-callout-metadata~="wmed"] {
  max-width: unset;
  width: var(--callout-medium);
}

body .callout.callout.callout[data-callout-metadata~="wm-tl"] {
  max-width: unset;
  width: var(--callout-med-tall);
}

body .callout.callout.callout[data-callout-metadata~="wtall"] {
  max-width: unset;
  width: var(--callout-tall);
}

body .callout.callout.callout[data-callout-metadata~="sban"],
body .callout.callout.callout[data-callout-metadata~="wfull"] {
  width: 100%;
  float: unset;
  max-width: 100%;
}

body .callout.callout.callout[data-callout-metadata~="wtiny-c"] {
  width: 19%;
}

body .callout.callout.callout[data-callout-metadata~="wsmall-c"] {
  width: 32.4%;
}

body .callout.callout.callout[data-callout-metadata~="ws-med-c"] {
  width: 39%;
}

body .callout.callout.callout[data-callout-metadata~="wm-sm-c"] {
  width: 49%;
}

body .callout.callout.callout[data-callout-metadata~="wmed-c"] {
  width: 59%;
}

body .callout.callout.callout[data-callout-metadata~="wm-tl-c"] {
  width: 79%;
}

body .callout.callout.callout[data-callout-metadata~="wfit"] {
  width: fit-content;
  max-width: min-content;
}

body .callout.callout[data-callout-metadata~="static"] {
  --callout-micro: 50px;
  --callout-tiny: 100px;
  --callout-small: 200px;
  --callout-small-med: 300px;
  --callout-med-small: 400px;
  --callout-medium: 500px;
  --callout-med-tall: 600px;
  --callout-tall: 700px;
}

body
  .callout.callout:is(
    [data-callout-metadata~="content-padding-small"],
    [data-callout-metadata~="c-p-sm"]
  ) {
  --callout-content-padding: 6px;
}

body
  .callout.callout:is(
    [data-callout-metadata~="content-padding-medium"],
    [data-callout-metadata~="c-p-med"]
  ) {
  --callout-content-padding: 12px;
}

body
  .callout.callout:is(
    [data-callout-metadata~="content-padding-large"],
    [data-callout-metadata~="c-p-lg"]
  ) {
  --callout-content-padding: 24px;
}

body
  .callout.callout:is(
    [data-callout-metadata~="txt-l"],
    [data-callout-metadata~="text-left"]
  )
  > .callout-content
  > * {
  text-align: left;
}

body
  .callout.callout:is(
    [data-callout-metadata~="txt-r"],
    [data-callout-metadata~="text-right"]
  )
  > .callout-content {
  text-align: right;
}

body
  .callout.callout:is(
    [data-callout-metadata~="txt-c"],
    [data-callout-metadata~="text-center"]
  )
  > .callout-content {
  text-align: center;
}

body
  .callout.callout:is(
    [data-callout-metadata~="ttl-c"],
    [data-callout-metadata~="title-center"]
  )
  .callout-title {
  justify-content: center;
}

body
  .callout.callout:is(
    [data-callout-metadata~="ttl-c"],
    [data-callout-metadata~="title-center"]
  )
  .callout-title-inner {
  display: block;
  flex: unset;
}

body
  .callout.callout:is(
    [data-callout-metadata~="text-small"],
    [data-callout-metadata~="txt-s"]
  )
  > .callout-content
  > * {
  --font-text-size: var(--font-smallest);
  --tag-size: var(--font-smallest);
  --table-text-size: var(--font-smallest);
  font-size: var(--font-text-size);
}

/*Infobox*/
:is(
    .is-mobile:not(.is-tablet),
    .is-mobile .is-live-preview,
    .is-live-preview :not(.markdown-rendered)
  )
  .callout[data-callout~="infobox"]:not([data-callout-metadata~="mobile"]) {
  float: unset !important;
  max-width: 100%;
  margin: 0 !important;
  width: auto;
}

body .callout.callout[data-callout~="infobox"] {
  --callout-color: var(--note, var(--background-primary));
  --callout-padding: 0;
  --callout-content-padding: 5px;
  --callout-margin: 0 0 0 5px;
  background: var(--note, var(--background-primary));
  --h1-border-line-height: 0;
  --h2-border-line-height: 0;
  --h3-border-line-height: 0;
  --h4-border-line-height: 0;
  --h5-border-line-height: 0;
  --h6-border-line-height: 0;
  border: 0;
  box-shadow: none;
  width: auto;
  max-width: 300px;
  float: right;
  border-radius: var(--radius-s);
}

body .callout.callout[data-callout~="infobox"] > .callout-title {
  justify-content: center;
  align-items: center;
  align-self: center;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-title
  > .callout-icon {
  align-self: center;
}

body
  .callout.callout[data-callout~="infobox"]:not(.is-collapsed)
  > .callout-title {
  padding: 0;
}

body .callout.callout[data-callout~="infobox"] .callout-fold {
  padding-right: 0;
}

body .callout.callout[data-callout~="infobox"].is-collapsed .callout-fold {
  border: 1px solid var(--hr, var(--background-modifier-border));
  border-radius: var(--radius-m);
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-title
  .callout-title-inner {
  display: none;
}

body .callout.callout[data-callout~="infobox"] > .callout-title .callout-icon {
  height: 0;
}

body
  .callout.callout[data-callout~="infobox"]:not(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"],
    [data-callout-metadata~="show-icon"],
    [data-callout-metadata~="s-i"]
  )
  > .callout-title
  .callout-icon
  > svg {
  width: 0;
  height: 0;
}

body
  .callout.callout[data-callout~="infobox"]:not(:hover):not(.is-collapsed)
  > .callout-title {
  background-color: transparent;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not([data-callout-metadata~="no-t"]):not(
    .is-collapsed
  )
  > .callout-title,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  ):not(.is-collapsed)
  > .callout-title {
  display: flex;
  gap: 0;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not(
    [data-callout-metadata~="no-t"]
  ).is-collapsed
  > .callout-title,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  ).is-collapsed
  > .callout-title {
  border: 1px solid var(--hr, var(--background-modifier-border));
  display: flex;
  align-items: center;
  align-content: center;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not([data-callout-metadata~="no-t"])
  .callout-title
  .callout-title-inner,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-title
  .callout-title-inner {
  display: unset;
  align-items: center;
  align-content: center;
  padding: 5px 10px;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not([data-callout-metadata~="no-t"])
  .callout-fold,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-fold {
  margin-top: auto;
  margin-bottom: auto;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not(
    [data-callout-metadata~="no-t"]
  ).is-collapsed
  .callout-fold,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  ).is-collapsed
  .callout-fold {
  border: 0;
}

body .callout.callout[data-callout~="infobox"] > .callout-content {
  border: 1px solid var(--table, var(--background-modifier-border));
  margin: 0;
  border-radius: var(--radius-s);
}

body .callout.callout[data-callout~="infobox"] table {
  width: 100%;
}

body .callout.callout[data-callout~="infobox"] table td {
  white-space: pre-wrap;
  word-wrap: normal;
  word-break: normal;
}

body .callout.callout[data-callout~="infobox"] :is(p, table) {
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
}

body
  .callout.callout[data-callout~="infobox"]
  .callout-content
  > :is(h1, h2, h3, h4, h5, h6) {
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 2px;
  color: var(--text-normal);
  background: var(--outer-bar, var(--background-secondary));
}

body .callout.callout[data-callout~="infobox"] .internal-embed,
body .callout.callout[data-callout~="infobox"] img {
  display: block;
  margin: auto;
  padding: auto;
  text-align: center;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata][data-callout-metadata][data-callout-metadata~="left"] {
  --callout-margin: 0 5px 0 0;
}

body
  .callout.callout[data-callout~="infobox"]
  .callout-content
  > .callout[data-callout~="infobox"] {
  max-width: unset;
  float: unset;
  --callout-margin: 5px 0 0 0;
}

body
  .callout.callout[data-callout~="infobox"]
  .callout-content
  > .callout[data-callout~="infobox"]
  > .callout-title {
  color: var(--text-normal);
  background: var(--outer-bar, var(--background-secondary));
  border: 1px solid var(--table, var(--background-modifier-border));
  border-bottom: none;
}

body
  .callout.callout[data-callout~="infobox"]
  .callout-content
  > .callout[data-callout~="infobox"]:not([data-callout-metadata~="no-t"])
  > .callout-content {
  border-top: none;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="wikipedia"]
  table {
  --table-header-color: var(--text, var(--text-normal));
  --table-header-background: transparent;
  --table-header-background-hover: var(--td, var(--table-background));
  --table-row-background-hover: var(--td, var(--table-background));
  --table-row-alt-background: transparent;
  --table-column-alt-background: transparent;
  --table-border-color: transparent;
  --table-header-border-color: transparent;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="wikipedia"]
  table
  tr:last-child {
  margin-bottom: 2px;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"] {
  --table-border-color: var(--background-modifier-border);
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"]
  th:first-child,
body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"]
  tr
  td:first-child {
  border-left-color: transparent;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"]
  th:last-child,
body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"]
  tr
  td:last-child {
  border-right-color: transparent;
}

@media print {
  .callout[data-callout~="infobox"] {
    max-width: 400px;
  }
}

.theme-light
  .callout[data-callout~="infobox"][data-callout-metadata~="wikipedia"] {
  --th-text: var(--th);
}

.illusion.illusion
  .callout[data-callout~="infobox"].is-collapsed.is-collapsed[data-callout-metadata~="left"] {
  margin-left: -30px;
}

.illusion.illusion
  .callout[data-callout~="infobox"].is-collapsed.is-collapsed[data-callout-metadata~="right"] {
  margin-right: -30px;
}

.illusion.illusion .callout[data-callout~="infobox"] [data-heading] {
  --illusion-box-shadow: none;
  --header-shadow: var(--illusion-box-shadow);
  --h1-shadow: var(--header-shadow);
  --h2-shadow: var(--header-shadow);
  --h3-shadow: var(--header-shadow);
  --h4-shadow: var(--header-shadow);
  --h5-shadow: var(--header-shadow);
  --h6-shadow: var(--header-shadow);
}

body .callout.callout[data-callout="statblocks"] {
  --callout-color: var(--accent-rgb);
  --callout-icon: swords;
  --callout-padding: 12px 15px;
  --callout-margin: 10px auto;
  --callout-border-color: var(--hr, var(--hr-color));
  border-width: 5px 0 5px 0;
  border-style: solid;
  margin: var(--callout-margin);
  min-width: 10ch;
  max-width: 42ch;
  background: transparent;
  box-shadow:
    var(--shadow-l),
    0 0 20px var(--outline, var(--hr-color));
}

body .callout.callout[data-callout="statblocks"] > .callout-content {
  --heading-spacing-top: 0;
  --heading-spacing-bottom: 0;
  --p-spacing: 7px;
  --bold-color: var(--headers, var(--h1-color));
  --hr-icon-symbol: "";
}

body .callout.callout[data-callout="statblocks"] h1 {
  width: auto;
}

body .callout.callout[data-callout="statblocks"] img:not([class], [width]) {
  box-shadow: 0 0 0 4px var(--headers, var(--background-modifier-border));
  margin-right: 4px;
  margin-bottom: 4px;
}

body .callout.callout[data-callout="statblocks"] h1::after,
body .callout.callout[data-callout="statblocks"] h1::before,
body .callout.callout[data-callout="statblocks"] > .callout-title {
  display: none;
}

body .callout.callout[data-callout="statblocks"] blockquote {
  --blockquote-border-thickness: 0;
  --blockquote-padding: 5px 0px 2px 0;
  --blockquote-color: var(--soft-text, var(--text-faint));
  --blockquote-background-color: transparent;
  margin-block-start: 0;
  margin-block-end: 0;
}

body .callout.callout[data-callout="statblocks"] hr {
  margin: 12px auto;
}

body .callout.callout[data-callout="statblocks"] table {
  --table-header-background: transparent;
  --table-header-background-hover: var(--table-header-background);
  --table-header-color: var(--headers, var(--text-faint));
  --table-header-border-color: transparent;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: var(--table-row-alt-background);
  --table-row-background-hover: var(--table-row-alt-background);
  --table-column-alt-background: transparent;
  --table-border-color: transparent;
  --table-cell-padding-y: 1px;
  --table-cell-padding-x: 4px;
  --table-header-padding-y: 1px;
  --table-header-padding-x: 4px;
  --table-style-column-header-background: transparent;
  --table-style-column-header-bold-weight: var(--text-weight);
  --table-style-column-header-bold-color: var(--text, var(--text-normal));
  margin: 12px auto;
  width: unset;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="full"] {
  max-width: 100%;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"] {
  max-width: 100%;
  --columns: 2;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="1"] {
  --columns: 1;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="2"] {
  --columns: 2;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="3"] {
  --columns: 3;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="4"] {
  --columns: 4;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="5"] {
  --columns: 5;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="6"] {
  --columns: 6;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="7"] {
  --columns: 7;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="8"] {
  --columns: 8;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="9"] {
  --columns: 9;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"]
  > .callout-content {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 15px;
}

/*Image Grid*/
body .callout.callout[data-callout="grid"] {
  --callout-padding: 0;
  --callout-content-padding: 0;
  background: transparent;
  border: 0;
  margin: 0;
  box-shadow: none;
}

body .callout.callout[data-callout="grid"] .callout-content {
  display: block;
  width: 100%;
  border: 0;
  box-shadow: unset;
  padding: 0;
}

body .callout.callout[data-callout="grid"] .callout-title {
  display: none;
}

body .callout.callout[data-callout="grid"] .callout-content p {
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  justify-content: center;
}

body .callout.callout[data-callout="grid"] .callout-content img {
  display: table-cell;
  vertical-align: middle;
  padding: 3px;
  max-height: 35vh;
}

body .callout.callout[data-callout="grid"] .callout-content img[alt="wfull"] {
  max-height: unset;
}

body
  .callout.callout[data-callout="grid"][data-callout-metadata~="masonry"]
  .callout-content
  p {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, auto));
  grid-gap: 0;
  margin: 0;
  margin-top: 1px;
}

body
  .callout.callout[data-callout="grid"][data-callout-metadata~="masonry"]
  .callout-content
  img {
  display: flex;
  flex: 1;
  align-self: stretch;
  object-fit: cover;
  max-height: unset;
}

/* Cards */
body .callout[data-callout~="cards"] {
  --callout-color: transparent;
  --callout-icon: layout-dashboard;
  --callout-padding: 0;
  --callout-content-padding: 0px;
  --callout-blend-mode: normal;
  --callout-cards-columns: 3;
  --callout-cards-gap: 5px;
  box-shadow: none;
  border: 0;
  width: auto;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="1"]
  .callout-content {
  --callout-cards-columns: 1;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="2"]
  .callout-content {
  --callout-cards-columns: 2;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="3"]
  .callout-content {
  --callout-cards-columns: 3;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="4"]
  .callout-content {
  --callout-cards-columns: 4;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="5"]
  .callout-content {
  --callout-cards-columns: 5;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="6"]
  .callout-content {
  --callout-cards-columns: 6;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="7"]
  .callout-content {
  --callout-cards-columns: 7;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="8"]
  .callout-content {
  --callout-cards-columns: 8;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="9"]
  .callout-content {
  --callout-cards-columns: 9;
}

body .callout[data-callout~="cards"] > .callout-title {
  display: none;
}

body .callout[data-callout~="cards"] > .callout-content {
  display: grid;
  grid-template-columns: repeat(var(--callout-cards-columns), 1fr);
  grid-gap: var(--callout-cards-gap);
  border-radius: 0;
  padding-inline-start: 0px;
  padding: 0;
}

body .callout[data-callout~="cards"] p {
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
}

body
  .callout[data-callout~="cards"]:not(
    [data-callout-metadata~="nstr"],
    [data-callout-metadata~="no-strong"]
  )
  strong {
  display: block;
  text-align: center;
  margin: auto;
  background-color: var(--outer-bar, var(--background-secondary));
}

body .callout[data-callout~="cards"] br {
  display: none;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="flex"]
  > .callout-content,
body
  .callout[data-callout~="cards"][data-callout-metadata~="flex"]
  .dataview.table-view-table
  tbody {
  gap: unset;
  grid-template-columns: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="flex"]
  > .callout-content
  .callout,
body
  .callout[data-callout~="cards"][data-callout-metadata~="flex"]
  .dataview.table-view-table
  tbody
  .callout {
  flex: 1 1 250px;
  margin: var(--callout-cards-gap);
}

body .callout[data-callout~="cards"][data-callout-metadata~="dataview"] {
  --callout-content-padding: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .callout-content {
  display: unset;
  grid-template-columns: unset;
}

body .callout[data-callout~="cards"][data-callout-metadata~="dataview"] br {
  display: block;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .block-language-dataview {
  padding: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table {
  display: grid;
  margin-block-start: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table
  :is(td, tr) {
  border: 0;
  background: transparent;
  padding: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table
  strong {
  background: transparent;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .table-view-thead
  th {
  border: 0;
  background-color: transparent;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .table-view-thead
  tr {
  display: none;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table
  tbody {
  display: grid;
  grid-template-columns: repeat(var(--callout-cards-columns), 1fr);
  grid-gap: calc(var(--callout-cards-gap) * 2);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table
  tbody
  tr {
  display: grid;
  align-content: flex-start;
  margin: 0;
  padding: 10px;
  border: 2px solid var(--outline, var(--background-modifier-box-shadow));
  box-shadow: var(--shadow-ml, var(--input-shadow));
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="txt-c"]
  .dataview
  td {
  text-align: center;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  img:not(.link-favicon) {
  width: 100%;
  object-fit: cover;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-micro"]
  img {
  height: var(--micro);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-tiny"]
  img {
  height: var(--tiny);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-small"]
  img {
  height: var(--small);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-small-med"]
  img {
  height: var(--small-med);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-med-small"]
  img {
  height: var(--med-small);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-medium"]
  img {
  height: var(--medium);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-med-tall"]
  img {
  height: var(--med-tall);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-tall"]
  img {
  height: var(--tall);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dvl"]
  .callout-content {
  display: block;
}

body .callout[data-callout~="cards"][data-callout-metadata~="dvl"] br {
  display: unset;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dvl"]
  .block-language-dataviewjs
  .dataview-result-list-li,
body
  .callout[data-callout~="cards"][data-callout-metadata~="dvl"]
  .list-view-ul
  li {
  padding: 10px;
  background-color: var(--outer-bar, var(--background-secondary));
  box-shadow: var(--shadow-s, var(--input-shadow));
  margin-bottom: 5px;
  --list-indent: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dvl"]
  .dataview.list-view-ul
  li::before {
  --bullet: "";
}

body .callout[data-callout~="cards"][data-callout-metadata~="dvl"] ul {
  padding-inline-start: unset;
}

body .callout[data-callout~="cards"][data-callout-metadata~="list"] {
  --list-indent: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="list"]
  > .callout-content {
  display: block;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="list"]
  ul
  li::before,
body
  .callout[data-callout~="cards"][data-callout-metadata~="list"]
  .list-collapse-indicator {
  display: none;
}

body .callout[data-callout~="cards"][data-callout-metadata~="list"] ul {
  display: grid;
  grid-template-columns: repeat(var(--callout-cards-columns), 1fr);
  grid-gap: 5px;
  border-radius: 0;
  padding-inline-start: 0px;
  margin-right: 3px;
  margin-bottom: 5px;
}

body .callout[data-callout~="cards"][data-callout-metadata~="list"] ul > li {
  padding: 5px 10px;
  box-shadow:
    0 0 0 2px var(--outline) inset,
    var(--shadow-s, var(--input-shadow));
}

body .callout[data-callout~="cards"][data-callout-metadata~="notion"] {
  --callout-cards-notion-padding: 10px;
  --callout-cards-notion-shadow: 0 0 5px var(--outline), 0 0 6px var(--outline);
  --callout-cards-notion-radius: var(--radius-s);
  --callout-content-padding: 15px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]:is(
    [data-callout-metadata~="round"],
    [data-callout-metadata~="rounded"]
  ) {
  --callout-cards-notion-radius: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr {
  padding: 0;
  box-shadow: var(--callout-cards-notion-shadow);
  border: 0;
  border-radius: var(--callout-cards-notion-radius);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td
  > :last-of-type {
  padding-bottom: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td
  > :first-child {
  padding-top: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td
  > ul,
body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td
  > span:not(:has(strong, span)) {
  margin-left: var(--callout-cards-notion-padding);
  margin-right: var(--callout-cards-notion-padding);
  display: inline-block;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td:first-of-type
  strong::after {
  content: "";
  display: block;
  height: 1px;
  background-color: var(--outline);
  margin-top: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  strong {
  margin-top: 5px;
  margin-bottom: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .block-language-dataview {
  margin: -25px 0 -25px 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content {
  padding: calc(var(--callout-cards-notion-padding) / 2);
  gap: calc(var(--callout-cards-notion-padding) - 3px);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p {
  box-shadow: var(--callout-cards-notion-shadow);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  strong {
  background-color: transparent;
  text-align: unset;
  padding: 0 var(--callout-cards-notion-padding);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > :not(img, .internal-embed, strong, br) {
  display: inline-block;
  padding-left: var(--callout-cards-notion-padding);
  padding-right: var(--callout-cards-notion-padding);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p,
body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  img {
  border-radius: var(--callout-cards-notion-radius);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > img:first-child,
body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > .internal-embed:first-child
  img {
  margin-bottom: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p:has(> :is(img, .internal-embed):first-child) {
  padding-bottom: 7px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > img:last-child,
body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > .internal-embed:last-child
  img {
  margin-top: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p:has(> :is(img, .internal-embed):last-child) {
  padding-top: 7px;
}

.view-content > div:is(.markdown-source-view, .markdown-reading-view) > div {
  container: note/inline-size;
}

@container note (max-width: 500px) {
  .callout[data-callout~="cards"] .callout-content {
    --callout-cards-columns: 2;
  }
}

@container note (max-width: 300px) {
  .callout[data-callout~="cards"] .callout-content {
    --callout-cards-columns: 1;
  }
}

/*Captions*/
body .callout.callout[data-callout~="caption"] {
  background: transparent;
  text-align: center;
  box-shadow: none;
  border: 0;
  padding: 0;
  margin: 0;
  --callout-content-padding: 0;
  max-width: 30vh;
}

body .callout.callout[data-callout~="caption"] > .callout-content {
  overflow: hidden;
}

body
  .callout.callout[data-callout~="caption"]
  > .callout-content
  > p
  :is(.image-embed, img)
  + br {
  display: none;
}

body .callout.callout[data-callout~="caption"] > .callout-content img {
  display: block;
  margin: auto;
}

body .callout.callout[data-callout~="caption"] > .callout-title {
  display: none;
}

body .callout.callout[data-callout~="caption"] p {
  margin-block-start: 0;
  margin-block-end: 0;
  color: var(--text-faint);
}

body
  .callout.callout[data-callout~="caption"]:is(
    [data-callout-metadata~="sban"],
    [data-callout-metadata~="banner"]
  )
  .image-embed
  img {
  width: 100%;
}

/* Recite */
body .callout.callout[data-callout="recite"] {
  --callout-color: 193, 67, 67;
  --callout-icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="none" fill="none" d="M0 0h24v24H0z"/><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z"/></svg>';
  --callout-margin: 10px;
  --callout-padding: 5px 10px 10px 10px;
  border-style: solid;
  border-width: 11px;
  border-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8CAYAAADxJz2MAAAFWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjgwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSI4MCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNjAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjMwMC8xIgogICB0aWZmOllSZXNvbHV0aW9uPSIzMDAvMSIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMS0wMlQxNjowNTo0MS0wODowMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMS0wMlQxNjowNTo0MS0wODowMCI+CiAgIDxkYzp0aXRsZT4KICAgIDxyZGY6QWx0PgogICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+RCZhbXA7RCBCb3JkZXI8L3JkZjpsaT4KICAgIDwvcmRmOkFsdD4KICAgPC9kYzp0aXRsZT4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0icHJvZHVjZWQiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFmZmluaXR5IERlc2lnbmVyIDEuMTAuNCIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0wMS0wMlQxNjowNTo0MS0wODowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+SLcLyAAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/8xD50SiUhcVLWA35UWJjMZNfhcXMKIPNm2fejJo3Xu+NJFtlO0WJjV8L/gK2ylopIiVLWRMbpuc8o0Yy53bP/dzvPed077mgRNO66ZR3g5nJ2uHRoDoTm1Urn/Ch0EQdqqY71mRkJEpJe7+VaLHrTq9W6bh/rWYh4ejgqxIe0i07KzwmPLGStTzeEm7UU9qC8IlwwJYLCt94erzAzx4nC/zpsR0Nh0CpF1aTvzj+i/WUbQrLy2kz08v6z328l9QmMtMRWVtltuAQZpQgKuMME6KfHgbF99NJL12yo0R+93f+FEuSq4u3WMVmkSQpsgREXZbqCVkN0RMy0qx6/f/bV8fo6y1Urw1CxaPrvrZD5Sbkc677ceC6+UMoe4DzTDF/aR8G3kTPFbW2PfCvw+lFUYtvw9kGNN9bmq19S2UyFcOAl2Ooi0HDFVTPFXr2c87RHUTX5KsuYWcXOiTeP/8FK5Jny8RYHqYAAAAJcEhZcwAALiMAAC4jAXilP3YAAAG5SURBVHic7dyxSiNRFMbxv0OwEkvZfrEWleWAvbA+giB5ANtgcx/gFJK0+wAbwUdYV7bZRjiIirXYL1tbiajFXHV3Y5KBbIyTfL8yOQxfPu5kprkXKnCzRTfrVpmdBm7WdbPFKrNFhYt9As6BnVGD1cgOcJ5/+0CNfl+4WQG0AB80N8U+AiduloBOirh/bejVFehmH4AjYJ/ZLO9Jg7KDo9xJj54C3ewzcAlsjjdbrWwCl7mbvzyvLjebp7xdW28YrE6WgG9u1gFSiriFvALdbBk4QeVV0aL8b1wGKNysCVwA6xONVS/rwIWbNefc7GHSaeps6HugiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIyCzQTqURaafSiBpAE/gCLAwbThFzY0/0DlS8K2+A3SJFdIE14Gy8sabKGbCWIroFQIq4AjaA9kRj1UMb2MidvexYzzuw99zsB/CVcoe2vPgNNFPE9z8/7HmI5IEV4PiNgtXBMbDyb3nQ5ymcIn4BW8AecDfebO/aHWUHW7mTHn2PNMnnpLTd7CdwSHmOyiy5BrZTxOmgoaHvgfkCq8DBfwpWBwfA6rDyAB4BTjVxWZByO0gAAAAASUVORK5CYII=")
    11;
  border-image-outset: 9px 0px;
  box-shadow: 0px 0px 10px var(--outline, var(--background-modifier-box-shadow));
  background: var(--note, var(--background-primary));
  text-align: justify;
}

body .callout.callout[data-callout="recite"] .callout-title {
  padding: 0;
  background: transparent;
  color: rgba(var(--callout-color), 1);
  justify-content: center;
}

body
  .callout.callout[data-callout="recite"][data-callout-metadata*="bg-"]:not(
    [data-callout-metadata*="bg-c"]
  )
  .callout-title {
  color: var(--text-normal);
}

body .callout.callout[data-callout="recite"] .callout-title-inner {
  flex: unset;
}

body .callout.callout[data-callout="recite"] .callout-content {
  padding: 0;
  padding-top: 10px;
}

/* Unwrapped Table */
body .callout.callout[data-callout-metadata~="table"] {
  border: 0;
  background-color: transparent;
  --callout-padding: 0;
}

body .callout.callout[data-callout-metadata~="table"] .callout-content {
  padding: 0;
  border: 0;
  background-color: transparent;
  box-shadow: none;
}

body
  .callout.callout[data-callout-metadata~="table"]:not(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-title {
  display: none;
}

body .callout.callout[data-callout-metadata~="table"] table {
  white-space: nowrap;
  margin: 0;
  margin: auto;
  overflow-x: scroll;
}

body .callout.callout[data-callout-metadata~="table"] table th,
body .callout.callout[data-callout-metadata~="table"] table td {
  white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-1"],
    [data-callout-metadata~="tbl-u-1"]
  )
  table
  tr
  td:nth-child(1) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-2"],
    [data-callout-metadata~="tbl-u-2"]
  )
  table
  tr
  td:nth-child(2) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-3"],
    [data-callout-metadata~="tbl-u-3"]
  )
  table
  tr
  td:nth-child(3) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-4"],
    [data-callout-metadata~="tbl-u-4"]
  )
  table
  tr
  td:nth-child(4) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-5"],
    [data-callout-metadata~="tbl-u-5"]
  )
  table
  tr
  td:nth-child(5) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-6"],
    [data-callout-metadata~="tbl-u-6"]
  )
  table
  tr
  td:nth-child(6) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-7"],
    [data-callout-metadata~="tbl-u-7"]
  )
  table
  tr
  td:nth-child(7) {
  --table-white-space: nowrap;
}

body .callout[data-callout="blank"] {
  --callout-color: transparent;
  margin: 0;
  padding: 0;
  --callout-border-width: 0;
}

body .callout[data-callout="blank"] .callout-content {
  padding: 0;
}

body .callout[data-callout="blank"] > .callout-title {
  display: none;
}

/* Metadata */
body:not(.callout-no-metadata) .callout.callout[data-callout~="Metadata" i] {
  --callout-icon: layers;
  --callout-border-width: 2px;
  --callout-title-padding: 5px;
  --callout-content-padding: 0px 10px 10px;
  --callout-shadow: 0px 0px 0px 1px var(--outline);
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]:not(
    [data-callout-metadata*="bg-"],
    [data-callout-metadata*="bg-c-"],
    [data-callout-metadata*="c-"],
    [data-callout-metadata*="color-"]
  ) {
  --callout-color: 82, 139, 212;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-title {
  background-color: transparent;
  justify-content: center;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-title-inner {
  flex: unset;
  color: rgb(var(--callout-color));
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]:not(
    [data-callout-metadata~="no-strong"],
    [data-callout-metadata~="no-str"]
  ) {
  --bold-color: rgb(var(--callout-color));
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .dataview.inline-field-key {
  background: rgb(var(--callout-color));
  color: var(--text-on-accent);
  font-weight: 900;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .dataview.inline-field-value {
  font-weight: unset;
  background: transparent;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  table
  th {
  background-color: var(--aside-bg, rgba(var(--callout-color), 0.5));
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  table {
  --tbl-td-h: 0;
  --tbl-td-w: 5px;
  white-space: nowrap;
  margin: 0;
  width: 100%;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-content
  p:last-child {
  margin-bottom: 0;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-content
  p:first-child {
  margin-top: 0;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-content,
body:not(.callout-no-metadata) .callout.callout[data-callout~="Metadata" i] ul {
  margin: 0;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"] {
  background: var(--outer-bar, var(--background-secondary-alt));
  border: 0;
  text-align: center;
  padding: 0;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]:is(
    [data-callout-metadata*="bg-"],
    [data-callout-metadata*="bg-c-"],
    [data-callout-metadata*="c-"],
    [data-callout-metadata*="color-"]
  ) {
  background: rgba(var(--callout-color), var(--callout-color-opacity));
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"].is-collapsible:not(
    .is-collapsed
  ) {
  display: flex;
  flex-direction: row-reverse;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]:not(
    .is-collapsible
  )
  .callout-title,
body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]
  .callout-title-inner,
body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]:not(
    .is-collapsed
  )
  .callout-icon {
  display: none;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]
  .callout-fold {
  display: flex;
  align-content: center;
  align-items: center;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]
  .callout-fold
  svg {
  margin-bottom: unset;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]
  .callout-content {
  padding: 0px;
  margin: auto;
  overflow-y: hidden;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]:is(
    [data-callout-metadata~="tbl-cln"],
    [data-callout-metadata~="table-clean"]
  )
  table
  :is(td, tr, th) {
  background-color: transparent;
  border-color: transparent;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata*="bg-"] {
  --callout-border-color: var(--callout-background);
  border-color: var(--callout-border-color);
}

/* Columns */
body .callout[data-callout*="column"] {
  --callout-color: var(--text-normal);
  --callout-icon: layout-dashboard;
  --columns: 2;
  --callout-column-gap: 10px;
  background: transparent;
  box-shadow: none;
  border: 0;
  width: auto;
  padding: 0;
}

body .callout[data-callout*="column"] > .callout-content > .callout {
  margin: 0;
}

body .callout[data-callout*="column"] > .callout-content .callout-content {
  border: 0;
}

body .callout[data-callout*="column"] > .callout-content {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--callout-column-gap);
  background: transparent;
  box-shadow: none;
  border: 0;
  padding: 0;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="3"]
  .callout-content {
  --columns: 3;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="4"]
  .callout-content {
  --columns: 4;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="5"]
  .callout-content {
  --columns: 5;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="6"]
  .callout-content {
  --columns: 6;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="7"]
  .callout-content {
  --columns: 7;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="8"]
  .callout-content {
  --columns: 8;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="9"]
  .callout-content {
  --columns: 9;
}

body
  .callout[data-callout*="column"]:is(
    [data-callout-metadata~="slim-margins"],
    [data-callout-metadata~="s-mg"]
  )
  > .callout-content {
  --callout-column-gap: 2px;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"]
  > .callout-content {
  gap: var(--callout-column-gap);
  grid-template-columns: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"]
  > .callout-content
  .callout {
  flex: 1 1 calc(var(--file-line-width) / 2.5);
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="3"]
  > .callout-content
  .callout {
  flex: 1 1 calc(var(--file-line-width) / 3.5);
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout {
  flex: 1 1 auto;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="wmicro"] {
  width: 5%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="wtiny"] {
  width: 10%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="wsmall"] {
  width: 20%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="ws-med"] {
  width: 30%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="wmed"] {
  width: 40%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="dataview"]
  > .callout-content {
  grid-template-columns: unset;
  gap: unset;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="dataview"]
  > .callout-content
  .dataview.list-view-ul {
  columns: var(--columns);
}

body
  .callout[data-callout*="column"][data-callout-metadata~="dataview"]
  > .callout-content
  .dataview
  li {
  break-inside: avoid;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content {
  grid-template-columns: unset;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  ul,
body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  > ul,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  ul,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  > ul {
  columns: var(--columns);
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  ul
  > li,
body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  > ul
  > li,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  ul
  > li,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  > ul
  > li {
  break-inside: avoid;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  ul
  .list-bullet::after,
body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  > ul
  .list-bullet::after,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  ul
  .list-bullet::after,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  > ul
  .list-bullet::after {
  position: relative;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-x"]
  > .callout-content {
  grid-template-columns: unset;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-x"]
  > .callout-content
  > ul {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
}

/*Kanban*/
body .callout.callout[data-callout~="kanban"] {
  --callout-color: unset;
  --callout-icon: layout-dashboard;
  --callout-padding: 0;
  --item-outline: 0 0 0 1px var(--outline, var(--background-modifier-border));
  --lane-width: 250px;
  background: transparent;
  box-shadow: none;
  border: 0;
  width: auto;
}

body .callout.callout[data-callout~="kanban"] .callout-title {
  justify-content: center;
  background: var(--code-bg, var(--background-primary));
  padding: 5px;
  border-radius: var(--radius-s);
}

body .callout.callout[data-callout~="kanban"] .callout-title-inner {
  flex: unset;
}

body .callout.callout[data-callout~="kanban"] .callout-content {
  padding: 0;
}

body .callout.callout[data-callout~="kanban"] ul li::marker,
body .callout.callout[data-callout~="kanban"] ul li::before,
body .callout.callout[data-callout~="kanban"] .list-bullet,
body .callout.callout[data-callout~="kanban"] ul::before,
body
  .callout.callout[data-callout~="kanban"]
  :is(ul, ul ul)
  .list-collapse-indicator {
  list-style-type: none;
  color: transparent;
  display: none !important;
}

body .callout.callout[data-callout~="kanban"] ul {
  display: flex;
  margin-block-start: 5px;
  padding-inline-start: 0;
  text-align: center;
  overflow: auto;
}

body .callout.callout[data-callout~="kanban"] ul.list-view-ul {
  margin-inline-start: unset;
}

body .callout.callout[data-callout~="kanban"] ul li {
  min-width: var(--lane-width);
  border: 0;
  padding: 5px;
  margin: 5px 1px;
  padding-top: 4px;
  background: var(--note, var(--background-primary-alt));
  border-radius: var(--radius-s);
  box-shadow: var(--item-outline), var(--shadow-s);
}

body .callout.callout[data-callout~="kanban"] ul ul {
  flex-direction: column;
  text-align: left;
  overflow: unset;
}

body .callout.callout[data-callout~="kanban"] ul ul li {
  min-width: calc(var(--lane-width) / 2);
  padding: 5px;
  box-shadow: var(--item-outline), var(--shadow-s);
  background: var(--code-bg, var(--background-primary));
}

body
  .callout.callout[data-callout~="kanban"]
  ul
  ul
  li
  :is(img, .internal-embed) {
  margin-bottom: -6px;
}

body
  .callout.callout[data-callout~="kanban"]
  ul.contains-task-list
  .task-list-item-checkbox {
  margin-inline-start: 0;
}

body .callout.callout[data-callout~="kanban"] .task-list-item-checkbox {
  cursor: default;
}

body .callout.callout[data-callout~="kanban"] :is(ul, ol) > li p:first-of-type {
  margin-block-start: 0;
}

/* Timeline */
body .callout.callout[data-callout~="timeline"] {
  --callout-icon: "clock-12";
  --callout-padding: 0;
  --callout-title-padding: 10px;
  --callout-content-padding: 10px;
  --callout-margin: 0;
  --timeline-shadow: var(--outline, var(--background-modifier-box-shadow));
  --callout-content-background: var(
    --callout-background,
    rgb(var(--callout-color), 0.1)
  );
  --timeline-border: rgb(var(--callout-title, var(--callout-color)));
  --micro: 50px;
  --tiny: 100px;
  --small: 200px;
  --small-med: 300px;
  --med-small: 400px;
  --medium: 500px;
  --med-tall: 600px;
  --tall: 700px;
  --c-timeline: calc(50% - 2px);
  background-color: transparent !important;
  margin: 0;
  border: 0;
  clear: both;
  position: unset !important;
}

body .callout.callout[data-callout~="timeline"] .callout-title {
  background: rgba(var(--callout-color), 0.35);
  align-content: center;
  align-items: center;
}

body .callout.callout[data-callout~="timeline"] .callout-title em {
  font-style: normal;
  display: block;
  font-size: 14px;
  line-height: 12px;
  color: rgb(var(--callout-color));
}

body .callout.callout[data-callout~="timeline"] .callout-icon {
  background-color: var(--note, var(--background-primary));
  transform: scale(1.2);
  border-radius: 20px;
  height: var(--icon-size);
  width: var(--icon-size);
}

body .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"] {
  border-right: 4px solid var(--timeline-border);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: var(--c-timeline);
  z-index: 0;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"]
  > .callout-title,
body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"]
  > .callout-content {
  box-shadow: -4px 4px 0 var(--timeline-shadow);
}

body .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-r"] {
  border-left: 4px solid var(--timeline-border);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: var(--c-timeline);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-r"]
  > .callout-title,
body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-r"]
  > .callout-content {
  box-shadow: 4px 4px 0 var(--timeline-shadow);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"]
  > .callout-title {
  flex-direction: row-reverse;
  text-align: right;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"]
  > .callout-title
  .callout-icon {
  float: right;
  position: absolute;
  margin-right: -20px;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-r"]
  > .callout-title
  .callout-icon {
  float: left;
  position: absolute;
  margin-left: -20px;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-1"]
  .callout-title {
  margin-top: var(--micro);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-2"]
  .callout-title {
  margin-top: var(--tiny);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-3"]
  .callout-title {
  margin-top: var(--small);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-4"]
  .callout-title {
  margin-top: var(--small-med);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-5"]
  .callout-title {
  margin-top: var(--med-small);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-6"]
  .callout-title {
  margin-top: var(--medium);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-7"]
  .callout-title {
  margin-top: 350px;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-8"]
  .callout-title {
  margin-top: var(--med-tall);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-9"]
  .callout-title {
  margin-top: var(--tall);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-10"]
  .callout-title {
  margin-top: 750px;
}

body .callout[data-callout="kith"] {
  --callout-icon: user;
  --callout-color: 115, 167, 202;
  border-color: rgba(var(--callout-color), 0.7);
}

body .callout[data-callout="kith"] .callout-title-inner {
  font-weight: unset;
  color: rgb(var(--callout-color));
}

body .callout[data-callout="kith"] .callout-title-inner em {
  display: block;
  font-style: normal;
  font-size: var(--font-small);
  line-height: 12px;
  font-weight: normal;
}

body .callout[data-callout="kith"] .callout-title-inner em em {
  font-style: italic;
  display: inline-block;
}

body .callout[data-callout="kith"][data-callout-metadata="family"] {
  --callout-icon: users;
}

body .callout[data-callout="kith"][data-callout-metadata="friend"] {
  --callout-icon: user-check;
  --callout-color: 115, 202, 144;
}

body .callout[data-callout="kith"][data-callout-metadata="romantic"] {
  --callout-icon: user-plus;
  --callout-color: 202, 115, 180;
}

body .callout[data-callout="kith"][data-callout-metadata="antagonist"] {
  --callout-icon: user-x;
  --callout-color: 241, 74, 74;
}

body .callout[data-callout="checks"] {
  --callout-color: unset;
  --callout-icon: "check-square";
  --callout-padding: 0px;
  --root-list-spacing: 0;
  --list-indent: 0;
}

body .callout[data-callout="checks"] ul.contains-task-list {
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
}

body .callout[data-callout="checks"] ul.contains-task-list li.task-list-item {
  margin-right: 5px;
}

body .callout[data-callout="checks"] ul.contains-task-list li p {
  margin-block-start: 0;
}

body
  .callout[data-callout="checks"]
  > .callout-content
  > ul:not(.contains-task-list) {
  padding-inline-start: 0;
}

body .callout[data-callout="checks"] ul:not(.contains-task-list) li {
  --bullet: 0;
  --indentation-guide-color: transparent;
  margin-right: 10px;
}

body
  .callout[data-callout="checks"]
  ul:not(.contains-task-list)
  li
  > .list-bullet {
  display: none;
}

body .callout[data-callout="checks"] ul > li .task-list-item-checkbox {
  margin-inline-start: 0 !important;
}

/* Asides */
body .callout[data-callout~="aside"] {
  --callout-icon: message-square;
  --callout-color: "";
  --callout-margin: 0 -1.2em 0 5px;
  background-color: var(--aside-bg, var(--background-secondary));
  box-shadow:
    0.3em 0.3em 0 var(--accent, var(--background-modifier-box-shadow)),
    0 0 0 1px var(--accent, var(--background-modifier-box-shadow));
  float: right;
  position: relative;
  max-width: 400px;
}

body
  .callout[data-callout~="aside"]:not([data-callout-metadata~="no-t"])
  .callout-content {
  padding: 5px 10px;
}

body
  .callout[data-callout~="aside"]:not([data-callout-metadata~="no-t"])
  .callout-content
  p:first-child {
  margin-top: 0;
}

body
  .callout[data-callout~="aside"]:not(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-title-inner {
  display: none;
}

body
  .callout[data-callout~="aside"]:not(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-title {
  justify-content: space-between;
}

body .callout[data-callout~="aside"].is-collapsed {
  background-color: transparent;
  box-shadow: none;
  --callout-border-width: 0;
  --callout-padding: 0px 4px;
}

body .callout[data-callout~="aside"].is-collapsed .callout-title-inner {
  display: none;
}

body .callout[data-callout~="aside"].is-collapsed .callout-title {
  justify-content: space-between;
  --callout-title-padding: 0px;
}

body .callout[data-callout~="aside"].is-collapsed .callout-fold {
  margin: 0;
  padding: 0;
  margin-left: -25px;
  visibility: hidden;
}

body .callout[data-callout~="aside"][data-callout-metadata~="clean"] {
  background: transparent;
  box-shadow: none;
}

body .callout[data-callout~="aside"][data-callout-metadata~="tufte"] {
  background: transparent;
  box-shadow: none;
  float: right;
  position: relative;
}

body
  .callout[data-callout~="aside"][data-callout-metadata~="tufte"]:not(
    .is-collapsed
  ) {
  width: 400px;
  margin-right: -25.3em;
}

body
  .callout[data-callout~="aside"][data-callout-metadata~="tufte"]
  .callout-title {
  padding-top: 0;
}

body
  .callout[data-callout~="aside"][data-callout-metadata~="tufte"].is-collapsed
  .callout-title {
  justify-content: unset;
}

body
  .callout[data-callout~="aside"][data-callout-metadata~="tufte"].is-collapsed
  .callout-content {
  display: none;
}

body
  .callout.callout.callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  ) {
  margin-left: -1.6em;
}

body
  .callout.callout.callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  ):not(.is-collapsed) {
  margin-right: 10px;
}

body
  .callout.callout.callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  )[data-callout-metadata~="tufte"]:not(.is-collapsed) {
  margin: unset;
  margin-left: -25em !important;
}

body
  .callout.callout.callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  )[data-callout-metadata~="tufte"]:not(.is-collapsed)
  .callout-title {
  padding-top: 5px;
  flex-direction: row-reverse;
}

.is-mobile.is-mobile
  .callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  ) {
  margin-left: 0;
}

.is-live-preview .callout[data-callout~="aside"] {
  float: unset;
}

.is-live-preview.is-live-preview .callout.callout[data-callout~="aside"] {
  margin: 5px;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"] {
  --callout-icon: "";
  --callout-color: var(--color-accent);
  --callout-padding: 20px 30px;
  --callout-border-width: 0 0 0 4px;
  --callout-border-opacity: 0.7;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: var(--shadow-l);
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-content {
  overflow: hidden;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-content
  p:first-child {
  margin-block-start: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-content
  p:last-child {
  margin-block-end: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-title {
  background: transparent;
  text-align: right;
  padding-top: 5px;
  padding-right: 0;
  justify-content: flex-end;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-title
  > .callout-fold {
  padding-inline-end: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-title
  > .callout-icon {
  height: 0;
  width: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-title
  > .callout-title-inner::before {
  content: "~ ";
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"] {
  --callout-icon: "";
  --callout-color: var(--color-accent);
  --callout-padding: 20px 30px;
  --callout-border-width: 0 0 0 4px;
  --callout-border-opacity: 0.7;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: var(--shadow-l);
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-content {
  overflow: hidden;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-content
  p:first-child {
  margin-block-start: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-content
  p:last-child {
  margin-block-end: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-icon {
  height: 0;
  width: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-title {
  background: transparent;
  text-align: right;
  padding-top: 5px;
  padding-right: 0;
  display: block;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-title-inner::before {
  content: "~ ";
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="mark"] {
  --callout-content-padding: 0 30px 0 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="mark"]
  .callout-content::before {
  display: block;
  float: right;
  content: "”";
  font-family: var(--font);
  color: var(--headers);
  transform: scale(4);
  position: absolute;
  right: 40px;
  margin-top: 20px;
}

.published-container
  .callout.callout[data-callout="quote"][data-callout-metadata~="mark"]
  .callout-content::before {
  right: 65px;
}

body .callout-original .callout,
body
  .callout:is(
    [data-callout-metadata~="callout-original"],
    [data-callout-metadata~="co-o"]
  ) {
  --callout-padding: 0;
  --callout-title-padding: 10px 15px;
  --callout-content-padding: 5px 15px;
  --callout-border-opacity: 1;
  --callout-margin: 5px 5px 5px 0;
  --callout-border-width: 0 0 0 3px;
  background-color: var(--note, var(--background-primary));
  box-shadow: var(--shadow-m);
  margin: var(--callout-margin);
}

body .callout-original .callout .callout-title,
body
  .callout:is(
    [data-callout-metadata~="callout-original"],
    [data-callout-metadata~="co-o"]
  )
  .callout-title {
  background: rgba(var(--callout-color), 0.1);
}

body .callout-block .callout,
body
  .callout:is(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"]
  ) {
  --callout-padding: 0;
  --callout-content-padding: 0 10px;
  --callout-title-padding: 6px 10px;
  --callout-title-background: var(--callout-color);
  --callout-border-opacity: 0.5;
}

body .callout-block .callout .callout-title,
body
  .callout:is(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"]
  )
  .callout-title {
  background-color: rgba(
    var(--callout-title-background, var(--callout-color)),
    0.2
  );
}

body
  .callout-block
  .callout.is-collapsible:not(.is-collapsed)
  > .callout-content,
body
  .callout:is(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"]
  ).is-collapsible:not(.is-collapsed)
  > .callout-content {
  border-bottom: 1px solid
    rgba(var(--callout-color), var(--callout-border-opacity));
}

body .callout-alternate-line .callout,
body .callout.callout[data-callout-metadata~="alt-line"] {
  border: 0;
  background-color: transparent;
  --callout-padding: 0;
  --callout-title-padding: 5px 10px;
  --callout-content-padding: 0px 10px 10px;
}

body .callout-alternate-line .callout .callout-title,
body .callout.callout[data-callout-metadata~="alt-line"] .callout-title {
  background: transparent;
  border-bottom: 2px solid var(--table, var(--background-modifier-border));
}

body .callout-alternate-line .callout .callout-fold,
body .callout.callout[data-callout-metadata~="alt-line"] .callout-fold {
  color: rgb(var(--callout-color));
}

body .callout-alternate-line .callout .callout-content.callout-content,
body
  .callout.callout[data-callout-metadata~="alt-line"]
  .callout-content.callout-content {
  border: 0;
  border-bottom: 1px solid rgba(var(--callout-color), 0.5);
}

body
  .callout-bordered
  .callout:not(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"],
    [data-callout-metadata~="callout-original"],
    [data-callout-metadata~="co-o"],
    [data-callout-metadata~="alt-line"]
  ):not(
    [data-callout="aside"],
    [data-callout="blank"],
    [data-callout="captions"],
    [data-callout="cards"],
    [data-callout="checks"],
    [data-callout="column"],
    [data-callout="grid"],
    [data-callout="infobox"],
    [data-callout="kanban"],
    [data-callout="metadata"],
    [data-callout="quotes"],
    [data-callout="recite"],
    [data-callout="statblocks"],
    [data-callout="timeline"]
  ),
body .callout[data-callout-metadata~="callout-bordered"] {
  --callout-border-width: 2px;
  --callout-title-padding: 5px;
  --callout-content-padding: 0px 10px 10px;
  --callout-shadow: 0px 0px 0px 1px var(--outline);
}

body
  .callout-bordered
  .callout:not(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"],
    [data-callout-metadata~="callout-original"],
    [data-callout-metadata~="co-o"],
    [data-callout-metadata~="alt-line"]
  ):not(
    [data-callout="aside"],
    [data-callout="blank"],
    [data-callout="captions"],
    [data-callout="cards"],
    [data-callout="checks"],
    [data-callout="column"],
    [data-callout="grid"],
    [data-callout="infobox"],
    [data-callout="kanban"],
    [data-callout="metadata"],
    [data-callout="quotes"],
    [data-callout="recite"],
    [data-callout="statblocks"],
    [data-callout="timeline"]
  )[data-callout-metadata*="bg-"],
body
  .callout[data-callout-metadata~="callout-bordered"][data-callout-metadata*="bg-"] {
  --callout-border-color: var(--callout-background);
  border-color: var(--callout-border-color);
}

@media print {
  .print.print
    .markdown-preview-view
    .callout:is([data-callout*="cards"], [data-callout*="column"])
    .callout-content {
    display: grid !important;
  }

  .print.print
    .markdown-preview-view
    .callout:is([data-callout*="column"][data-callout-metadata*="flex"])
    .callout-content {
    display: flex !important;
  }
}

.markdown-rendered table tr {
  height: unset;
}

body .callout.callout.callout {
  --callout-blend-mode: normal;
  margin: var(--callout-margin);
  z-index: 1;
  position: relative;
}

.markdown-preview-view .callout {
  --callout-margin: 1em 0;
}

body
  .callouts-outlined
  .callout.callout:is(
    [data-callout="Metadata" i],
    [data-callout="Timeline" i],
    [data-callout="Recite" i],
    [data-callout="Columns" i],
    [data-callout="Infobox" i],
    [data-callout="Quote" i]
  )
  > .callout-title {
  display: flex;
  margin: unset;
  padding: var(--callout-title-padding);
  width: unset;
}

body
  .callouts-outlined
  .callout.callout:is(
    [data-callout="Metadata" i],
    [data-callout="Timeline" i],
    [data-callout="Recite" i],
    [data-callout="Columns" i],
    [data-callout="Infobox" i],
    [data-callout="Quote" i]
  )
  > .callout-title
  > .callout-icon {
  position: relative;
}

body .callout-infobox-table-borders .callout[data-callout~="infobox"] {
  --table-border-color: var(--background-modifier-border);
}

body
  .callout-infobox-table-borders
  .callout[data-callout~="infobox"]
  th:first-child,
body
  .callout-infobox-table-borders
  .callout[data-callout~="infobox"]
  tr
  td:first-child {
  border-left-color: transparent;
}

body
  .callout-infobox-table-borders
  .callout[data-callout~="infobox"]
  th:last-child,
body
  .callout-infobox-table-borders
  .callout[data-callout~="infobox"]
  tr
  td:last-child {
  border-right-color: transparent;
}

/*@settings
name: Callout Adjustments
id: callout-adjustments
settings:
    - 
        id: info-text-SlRvb-callouts
        type: info-text
        title: Callout Adjustments by SlRvb
        description: "[Callout Snippet How-To Guide](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callout+Adjustments)"
        markdown: true
    -
        title: Callout Styling
        id: callout-style
        type: class-select
        allowEmpty: true
        default: none
        options:
            - 
                label: Original Callout Styling
                value: callout-original
            -
                label: Callout Block Styling
                value: callout-block
            -
                label: Callout Alternate Line Styling
                value: callout-alternate-line
            -
                label: Callout Bordered Styling
                value: callout-bordered
    -
        title: Infobox Add Table Borders
        id: callout-infobox-table-borders
        type: class-toggle
    -
        title: Remove Callout Styling
        description: Remove certain callouts to use your own styling
        id: remove-callout-style
        type: heading
        level: 1
        collapsed: true           
    - 
        title: Remove Metadata Callout Styling
        id: callout-no-metadata
        type: class-toggle
    - 
        title: Remove Quote Callout Styling
        id: callout-no-quote
        type: class-toggle
    #- 
    #    title: Center Callout Titles
    #    id: co-ttl-ctr
    #    type: class-toggle
*/

/*
body blockquote.callout {
  &[data-callout] {
    --color: rgb(var(--callout-color));
    --border: rgb(var(--callout-border-color));
  }

  &.statblocks {
    mix-blend-mode: unset;

    table {
      th,
      td,
      tr {
        min-width: unset;
        padding: unset;
        color: unset;
        border-bottom: unset;
      }

      & > * {
        line-height: unset;
      }
    }

    tbody,
    li,
    p {
      line-height: unset;
    }

    .callout.checks {
      --bg: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      margin-bottom: 0;
    }

    blockquote {
      padding: unset;
      margin: unset;
      background-color: unset;
    }
  }
}*/

/* Fix: mirror < checkbox icon (lost during extraction) */
li.task-list-item[data-task="<"]::before {
  transform: scale(-1, 1);
}

:root[saved-theme="dark"]
  body
  li.task-list-item
  input[type="checkbox"]:checked {
  background-color: var(--checkbox-color);
  border-color: var(--checkbox-color);
}

:root[saved-theme="light"]
  body
  li.task-list-item
  input[type="checkbox"]:checked {
  background-color: var(--checkbox-color);
  border-color: var(--checkbox-color);
}
`,
};
