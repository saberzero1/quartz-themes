import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.ttrpg-dnd",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #548b67 !important;
  --accent-color: 84, 139, 103 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #cc824c !important;
  --accent2-lite: #61efc9 !important;
  --aside-bg: #11151d !important;
  --background-modifier-active-hover: #2e4d3c !important;
  --background-modifier-border: #2c3836 !important;
  --background-modifier-border-focus: #548b67 !important;
  --background-modifier-border-hover: #1e3831 !important;
  --background-modifier-cover: #06080c60 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #06080c60 !important;
  --background-modifier-form-field-hover: #06080c60 !important;
  --background-modifier-hover: rgba(255, 128, 0, 0.4) !important;
  --background-modifier-message: #2e4d3c !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #1a1e24 !important;
  --background-primary-alt: #1b2c25 !important;
  --background-secondary: #1a1e24 !important;
  --background-secondary-alt: #0e0f15 !important;
  --bases-cards-background: #1a1e24 !important;
  --bases-cards-cover-background: #1b2c25 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #2c3836 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #1e3831 !important;
  --bases-embed-border-color: #2c3836 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #aacac9 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #1a1e24 !important;
  --bases-table-cell-background-active: #1a1e24 !important;
  --bases-table-cell-background-disabled: #1b2c25 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #548b67 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2e4d3c !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #1b2c25 !important;
  --bases-table-header-background: #1a1e24 !important;
  --bases-table-header-background-hover: rgba(255, 128, 0, 0.4) !important;
  --bases-table-header-color: #aacac9 !important;
  --bases-table-row-background-hover: rgba(60, 168, 122, 0.4) !important;
  --bases-table-summary-background: #1a1e24 !important;
  --bases-table-summary-background-hover: rgba(255, 128, 0, 0.4) !important;
  --bg: #1e3831 !important;
  --blockquote-background-color: #0e0f15 !important;
  --blockquote-border-color: #1e3831 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #dcdedd !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #0e0f15 65%, transparent) linear-gradient(#0e0f15, color-mix(in srgb, #0e0f15 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #0e0f15 !important;
  --box-border-m: 3px solid #0e0f15 !important;
  --box-border-s: 1px solid #0e0f15 !important;
  --bttn: #2e4d3c !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #2e4d3c !important;
  --button-background-hover: #587770 !important;
  --button-border: #2e4d3c !important;
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
  --caret-color: #dcdedd !important;
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
  --checkbox-border-color: #548b67 !important;
  --checkbox-border-color-hover: #2e4d3c !important;
  --checkbox-color: #548b67 !important;
  --checkbox-color-hover: #2e4d3c !important;
  --checkbox-marker-color: #1a1e24 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #587770 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #222e31 !important;
  --code-bg: #222e31 !important;
  --code-border-color: #2c3836 !important;
  --code-bracket-background: rgba(255, 128, 0, 0.4) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #71dfac !important;
  --code-punctuation: #aacac9 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #0e0f15 !important;
  --code-size: .90em !important;
  --code-text: #71dfac !important;
  --codeFont: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #587770 !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(199, 87, 92) !important;
  --color-accent-2: rgb(209, 113, 121) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter !important;
  --dark: #dcdedd !important;
  --dark-accent: #2e4d3c !important;
  --dark-sidebar: #1c2f2b !important;
  --darkgray: #dcdedd !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(84, 139, 103, 0.1) !important;
  --dataview-th-background: #0e0f15 !important;
  --dataview-th-border-bottom: 2px solid #3eb281 !important;
  --dataview-th-color: #3eb281 !important;
  --dataview-th-count-color: #3eb281 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #1b2c25 !important;
  --divider-color: #0e0f15 !important;
  --divider-color-hover: #548b67 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #2e4d3c !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: #0e0f15 !important;
  --dropdown-background-hover: #587770 !important;
  --embed-bg: #0e0f15 !important;
  --embed-block-shadow-hover: 2px 2px 0 #0e0f15 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #0e0f15 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #0e0f15 !important;
  --embed-border-left: 2px solid #3eb281 !important;
  --embed-border-left-color: #3eb281 !important;
  --embed-border-left-color-hover: #3eb281 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #0e0f15 !important;
  --embed-border-start: 2px solid #2e4d3c !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #0e0f15 !important;
  --embed-border-type: solid !important;
  --embed-h: #c93c3c !important;
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
  --fg: white !important;
  --file-font: "its" !important;
  --file-header-background: #1a1e24 !important;
  --file-header-background-focused: #1a1e24 !important;
  --file-header-breadcrumb-color: #587770 !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #587770 !important;
  --file-header-color-active: #dcdedd !important;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #2e4d3c !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #0e0f15 !important;
  --file-icon: "" !important;
  --file-icon-color: #aacac9 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #dcdedd !important;
  --flair-background: #0e0f15 !important;
  --flair-color: #dcdedd !important;
  --folder: #548b67 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #548b67 !important;
  --folder-icon-open-color: #9a5f3b !important;
  --folder-open: #9a5f3b !important;
  --folder-open-text-color: #dcdedd !important;
  --folder-text-color: #dcdedd !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter !important;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial' !important;
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #63778f !important;
  --footnote-divider-color: #2c3836 !important;
  --footnote-id-color: #aacac9 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #06080c60 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #1f6f29 !important;
  --graph-arrow: #aacac9 !important;
  --graph-background: #1a1e24 !important;
  --graph-bg: #1a1e24 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #3eb281 !important;
  --graph-focused: #61efc9 !important;
  --graph-img: #cc824c !important;
  --graph-line: #244047 !important;
  --graph-line-hover: #548b67 !important;
  --graph-lines: #244047 !important;
  --graph-node: #3eb281 !important;
  --graph-node-attachment: #cc824c !important;
  --graph-node-focused: #61efc9 !important;
  --graph-node-hover-fill: #3eb281 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: saddlebrown !important;
  --graph-node-unresolved: #1f6f29 !important;
  --graph-tag: saddlebrown !important;
  --graph-text: #dcdedd !important;
  --gray: #aacac9 !important;
  --h1-background: transparent !important;
  --h1-border-color: #548b67 !important;
  --h1-border-left-color: #2c3836 !important;
  --h1-border-line-color: #2c3836 !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #2c3836 !important;
  --h1-border-width: 0 !important;
  --h1-color: #3eb281 !important;
  --h1-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #cc824c !important;
  --h2-border-left-color: #2c3836 !important;
  --h2-border-line-color: #2c3836 !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #2c3836 !important;
  --h2-border-width: 0 !important;
  --h2-color: sandybrown !important;
  --h2-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #c93c3c !important;
  --h3-border-left-color: #2c3836 !important;
  --h3-border-line-color: #2c3836 !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #2c3836 !important;
  --h3-border-width: 0 !important;
  --h3-color: #c93c3c !important;
  --h3-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #2b4e41 !important;
  --h4-border-left-color: #2c3836 !important;
  --h4-border-line-color: #2c3836 !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #2c3836 !important;
  --h4-border-width: 0 !important;
  --h4-color: #3eb281 !important;
  --h4-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #1c2f2b !important;
  --h5-border-left-color: #2c3836 !important;
  --h5-border-line-color: #2c3836 !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #2c3836 !important;
  --h5-border-width: 0 !important;
  --h5-color: #3eb281 !important;
  --h5-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #0e0f15 !important;
  --h6-border-left-color: #2c3836 !important;
  --h6-border-line-color: #2c3836 !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #2c3836 !important;
  --h6-border-width: 0 !important;
  --h6-color: #3eb281 !important;
  --h6-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #3eb281 !important;
  --he-text-on-accent-inactive: #dcdedd !important;
  --he-title-bar-active-action: #45b480 !important;
  --he-title-bar-active-bg: #0e0f15 !important;
  --he-title-bar-active-fg: #dcdedd !important;
  --he-title-bar-active-pinned-bg: #1a1e24 !important;
  --he-title-bar-inactive-action: #aacac9 !important;
  --he-title-bar-inactive-bg: #1a1e24 !important;
  --he-title-bar-inactive-fg: #587770 !important;
  --he-title-bar-inactive-pinned-bg: #1a1e24 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #2c3836 !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 700 !important;
  --headerFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #3eb281 !important;
  --heading-formatting: #587770 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(60, 168, 122, 0.4) !important;
  --hr: #2b4e41 !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #2b4e41 !important;
  --hr-icon-background: #1a1e24 !important;
  --hr-icon-color: #3eb281 !important;
  --hr-icon-font: "Material Icons Sharp" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(66, 157, 104, 0.2) !important;
  --hvr-active: rgba(255, 128, 0, 0.4) !important;
  --hvr2: rgba(60, 168, 122, 0.4) !important;
  --i-at: #5ebfa9 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #aacac9 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #dcdedd !important;
  --icon-color-hover: #dcdedd !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #0e0f15 !important;
  --illusion-h1-background: #548b67 !important;
  --illusion-h2-background: #cc824c !important;
  --illusion-h3-background: #c93c3c !important;
  --illusion-h4-background: #2b4e41 !important;
  --illusion-h5-background: #1c2f2b !important;
  --illusion-h6-background: #0e0f15 !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #06080c60 !important;
  --image-border-color: #2c3836 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #587770 !important;
  --indentation-guide-color: #2b4e41 !important;
  --indentation-guide-color-active: #548b67 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #2b4e41 !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #3eb281 !important;
  --inline-title-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #0e0f15 !important;
  --input-shadow-hover: 3px 3px 0 #0e0f15 !important;
  --interactive-accent: #2e4d3c !important;
  --interactive-accent-hover: #587770 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #587770 !important;
  --interactive-normal: #0e0f15 !important;
  --its: "its" !important;
  --kanban-button-background: #222e31 !important;
  --kanban-button-shadow: 2px 2px 0 #0e0f15 !important;
  --kanban-card-border: 2px solid #0e0f15 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #1a1e24 !important;
  --kanban-card-text-color: #dcdedd !important;
  --kanban-card-title-background: #1a1e24 !important;
  --kanban-card-title-border: 0 1px 0 #0e0f15 !important;
  --kanban-lane-background: #222e31 !important;
  --kanban-lane-border: 3px solid #0e0f15 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #0e0f15 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #61efc9 !important;
  --kanban-tag-background: #2e4d3c !important;
  --latex-color: #45b480 !important;
  --latex-format-color: #587770 !important;
  --latex-syntax-color: #aacac9 !important;
  --light: #1a1e24 !important;
  --lightgray: #1a1e24 !important;
  --line-height-tight: 1.3em !important;
  --lines: #2b4e41 !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #61efc9 !important;
  --link-color-hover: #45b480 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #61efc9 !important;
  --link-external-color-hover: #cc824c !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #587770 !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #2c3836 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #2b4e41 !important;
  --list-color-2: #2b4e41 !important;
  --list-color-3: #2b4e41 !important;
  --list-color-4: #2b4e41 !important;
  --list-color-5: #2b4e41 !important;
  --list-color-6: #2b4e41 !important;
  --list-indent: 25px !important;
  --list-marker-color: #548b67 !important;
  --list-marker-color-collapsed: #587770 !important;
  --list-marker-color-hover: #aacac9 !important;
  --list-marker-color-other: #cc824c !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #45b480 !important;
  --list-spacing: 1px !important;
  --lite-accent: #45b480 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #1a1e24 !important;
  --menu-border-color: #1e3831 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #0e0f15 !important;
  --message-border-color: #0e0f15 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #0e0f15 !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #2c3836 !important;
  --metadata-button-text-color: #587770 !important;
  --metadata-divider-color: #2c3836 !important;
  --metadata-icon-color: #aacac9 !important;
  --metadata-input-background-active: #06080c60 !important;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #dcdedd !important;
  --metadata-label-background-active: #06080c60 !important;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #aacac9 !important;
  --metadata-label-text-color-hover: #aacac9 !important;
  --metadata-property-background-active: rgba(255, 128, 0, 0.4) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #548b67 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #1e3831 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #aacac9 !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #1a1e24 !important;
  --modal-border-color: #0e0f15 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #06080c60 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #1c2f2b !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #dcdedd !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #aacac9 !important;
  --nav-heading-color-hover: #dcdedd !important;
  --nav-indentation-guide-color: #2b4e41 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #2e4d3c !important;
  --nav-item-background-border-color-hover: #2e4d3c !important;
  --nav-item-background-hover: #2e4d3c !important;
  --nav-item-background-selected: rgba(66, 157, 104, 0.2) !important;
  --nav-item-border-color: #45b480 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #dcdedd !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #dcdedd !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #aacac9 !important;
  --nav-tag-color-hover: #aacac9 !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #1a1e24 !important;
  --note-rgb: 26, 30, 36 !important;
  --note-title-border-color: #3eb281 !important;
  --outer-bar: #0e0f15 !important;
  --outline: #0e0f15 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #1a1e24 !important;
  --pdf-background: #1a1e24 !important;
  --pdf-page-background: #1a1e24 !important;
  --pdf-shadow: 0 0 0 1px #2c3836 !important;
  --pdf-sidebar-background: #1a1e24 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #2c3836 !important;
  --pill-border-color: #2c3836 !important;
  --pill-border-color-hover: #1e3831 !important;
  --pill-color: #aacac9 !important;
  --pill-color-hover: #dcdedd !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #61efc9 !important;
  --pill-radius: 0 !important;
  --popover-background: #1a1e24 !important;
  --popover-border: 3px solid #0e0f15 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #548b67 !important;
  --progress-bg: #1e3831 !important;
  --prompt-background: #1a1e24 !important;
  --prompt-border-color: #0e0f15 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #3eb281 !important;
  --r-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #45b480 !important;
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
  --raised-background: color-mix(in srgb, #0e0f15 65%, transparent) linear-gradient(#0e0f15, color-mix(in srgb, #0e0f15 65%, transparent)) !important;
  --ribbon-background: #0e0f15 !important;
  --ribbon-background-collapsed: #1a1e24 !important;
  --ribbon-border-color: #0e0f15 !important;
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
  --scrollbar-active-thumb-bg: #45b480 !important;
  --scrollbar-bg: #1e3831 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #2e4d3c !important;
  --scrollbar-track-bg: #1a1e24 !important;
  --search-border: 2px solid #0e0f15 !important;
  --search-box-shadow: 2px 2px 0 #0e0f15 !important;
  --search-clear-button-color: #aacac9 !important;
  --search-icon-color: #aacac9 !important;
  --search-result-background: #1a1e24 !important;
  --secondary: #61efc9 !important;
  --setting-group-heading-color: #dcdedd !important;
  --setting-item-alt-background-hover: #06080c60 !important;
  --setting-item-background-hover: rgba(66, 157, 104, 0.2) !important;
  --setting-item-border-color: #2c3836 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #3eb281 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #06080c60 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #2c3836 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #0e0f15 !important;
  --shadow-m: 3px 3px 0 #0e0f15 !important;
  --shadow-ml: 4px 4px 0 #0e0f15 !important;
  --shadow-s: 2px 2px 0 #0e0f15 !important;
  --side-bar: #1a1e24 !important;
  --side-bar-bg: #0e0f15 !important;
  --sidebar-icon-color: #dcdedd !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #2e4d3c !important;
  --sidebar-tab-background-color-hover: #548b67 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #2e4d3c !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #1a1e24 !important;
  --slider-thumb-border-color: #1e3831 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #2c3836 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #aacac9 !important;
  --statblock-alt: #06080c60 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #1a1e24 !important;
  --statblock-bar-border-color: #548b67 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #548b67 !important;
  --statblock-border-color: #2b4e41 !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #0e0f15 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #dcdedd !important;
  --statblock-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --statblock-heading-font-color: #3eb281 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #2b4e41 !important;
  --statblock-primary-color: #dcdedd !important;
  --statblock-property-font-color: #dcdedd !important;
  --statblock-property-name-font-color: #3eb281 !important;
  --statblock-rule-color: #548b67 !important;
  --statblock-section-heading-border-color: #2c3836 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --statblock-section-heading-font-color: #63778f !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #0e0f15 !important;
  --status-bar-border-color: #548b67 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #aacac9 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #2e4d3c !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #32603e !important;
  --suggestion-background: #1a1e24 !important;
  --tab-background: #0e0f15 !important;
  --tab-background-active: #1a1e24 !important;
  --tab-container-background: #0e0f15 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #2b4e41 !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #548b67 !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #06080c60 !important;
  --tab-stacked-shadow-color: #06080c60 !important;
  --tab-switcher-background: #1a1e24 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1e24, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0e0f15 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #0e0f15 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #45b480, 5px 5px 0 #0e0f15 !important;
  --tab-text-color: #587770 !important;
  --tab-text-color-active: #dcdedd !important;
  --tab-text-color-focused: #587770 !important;
  --tab-text-color-focused-active: #dcdedd !important;
  --tab-text-color-focused-active-current: #dcdedd !important;
  --tab-text-color-focused-highlighted: #61efc9 !important;
  --tab-text-color-hover: #dcdedd !important;
  --tab-top-outline-width: 0 !important;
  --table: #2c3836 !important;
  --table-add-button-background: #2e4d3c !important;
  --table-add-button-border-color: #1a1e24 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #1a1e24 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #06080c60 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #2e4d3c !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #2e4d3c !important;
  --table-header-background-hover: #548b67 !important;
  --table-header-border-color: #1a1e24 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #45b480 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #06080c60 !important;
  --table-row-alt-background-hover: rgba(60, 168, 122, 0.4) !important;
  --table-row-background-hover: rgba(60, 168, 122, 0.4) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #2e4d3c !important;
  --table-selection-border-radius: 0 !important;
  --tag: #2e4d3c !important;
  --tag-background: #2e4d3c !important;
  --tag-background-color: #2e4d3c !important;
  --tag-background-hover: #548b67 !important;
  --tag-border-color: #2e4d3c !important;
  --tag-border-color-hover: #548b67 !important;
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
  --td: #06080c60 !important;
  --tertiary: #cc824c !important;
  --text: #dcdedd !important;
  --text-accent: #61efc9 !important;
  --text-accent-hover: #cc824c !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(66, 157, 104, 0.2) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #aacac9 !important;
  --text-normal: #dcdedd !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(60, 168, 122, 0.4) !important;
  --textHighlight: rgba(66, 157, 104, 0.2) !important;
  --th: #2e4d3c !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #548b67 !important;
  --theme-rainbow-2: #cc824c !important;
  --theme-rainbow-3: #c93c3c !important;
  --theme-rainbow-4: #2b4e41 !important;
  --theme-rainbow-5: #1c2f2b !important;
  --theme-rainbow-6: #0e0f15 !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #1a1e24 !important;
  --titlebar-background-focused: #0e0f15 !important;
  --titlebar-border-color: #2c3836 !important;
  --titlebar-text-color: #dcdedd !important;
  --titlebar-text-color-focused: #dcdedd !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --vault-name-color: #3eb281 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #dcdedd !important;
  --vault-profile-color-hover: #dcdedd !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 15, 21);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 30, 36);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 30, 36);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 30, 36);
  color: rgb(220, 222, 221);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(66, 157, 104, 0.2);
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: line-through 1px rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body p {
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 202, 201) none 0px;
  text-decoration: rgb(170, 202, 201);
  text-decoration-color: rgb(170, 202, 201);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(97, 239, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(97, 239, 201) none 0px;
  text-decoration: rgb(97, 239, 201);
  text-decoration-color: rgb(97, 239, 201);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 239, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(97, 239, 201) none 0px;
  text-decoration: rgb(97, 239, 201);
  text-decoration-color: rgb(97, 239, 201);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(88, 119, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(88, 119, 112) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(14, 15, 21);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body table {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(6, 8, 12, 0.376);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(220, 222, 221);
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
  background-color: rgb(46, 77, 60);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(113, 223, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 223, 172);
  border-right-color: rgb(113, 223, 172);
  border-top-color: rgb(113, 223, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(113, 223, 172);
  font-family: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(46, 77, 60);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(46, 77, 60);
  border-right-color: rgb(220, 222, 221);
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
  color: rgb(88, 119, 112);
  text-decoration: rgb(88, 119, 112);
  text-decoration-color: rgb(88, 119, 112);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(84, 139, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(84, 139, 103);
  border-right-color: rgb(84, 139, 103);
  border-top-color: rgb(84, 139, 103);
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
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(170, 202, 201);
  text-decoration: rgb(170, 202, 201);
  text-decoration-color: rgb(170, 202, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
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
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
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
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
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
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 4px;
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
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
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(14, 15, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(14, 15, 21);
  border-left-width: 3px;
  border-right-color: rgb(14, 15, 21);
  border-right-width: 3px;
  border-top-color: rgb(14, 15, 21);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(14, 15, 21) 5px 5px 0px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 128, 0, 0.4);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(14, 15, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(14, 15, 21);
  border-left-width: 3px;
  border-right-color: rgb(14, 15, 21);
  border-right-width: 3px;
  border-top-color: rgb(14, 15, 21);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 128, 0, 0.4);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 128, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(46, 77, 60);
  border-bottom-color: rgb(46, 77, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(46, 77, 60);
  border-right-color: rgb(46, 77, 60);
  border-top-color: rgb(46, 77, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="dark"] body h2 {
  color: rgb(244, 164, 96);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="dark"] body h3 {
  color: rgb(201, 60, 60);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="dark"] body h4 {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="dark"] body h5 {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="dark"] body h6 {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  border-right-color: rgb(14, 15, 21);
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
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
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
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(46, 77, 60);
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
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 202, 201);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(84, 139, 103);
  border-left-color: rgb(84, 139, 103);
  border-right-color: rgb(84, 139, 103);
  border-top-color: rgb(84, 139, 103);
  border-top-left-radius: 0px;
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(170, 202, 201);
  text-decoration: rgb(170, 202, 201);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 202, 201);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(170, 202, 201);
  stroke: rgb(170, 202, 201);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(88, 119, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 119, 112);
  border-right-color: rgb(88, 119, 112);
  border-top-color: rgb(88, 119, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(88, 119, 112);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(44, 56, 54);
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(170, 202, 201);
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(14, 15, 21);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 222, 221);
  text-decoration: underline dotted rgb(220, 222, 221);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(170, 202, 201);
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(113, 223, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 223, 172);
  border-right-color: rgb(113, 223, 172);
  border-top-color: rgb(113, 223, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(14, 15, 21) 0px 2px 0px 0px;
  color: rgb(113, 223, 172);
  font-family: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 222, 221);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #79c78e !important;
  --accent-color: 121, 199, 142 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #cca04c !important;
  --accent2-lite: #35be89 !important;
  --aside-bg: #ecf6f1 !important;
  --background-modifier-active-hover: #5a8d71 !important;
  --background-modifier-border: #ccd6eb !important;
  --background-modifier-border-focus: #79c78e !important;
  --background-modifier-border-hover: #cbe2d5 !important;
  --background-modifier-cover: #d0ddef62 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #d0ddef62 !important;
  --background-modifier-form-field-hover: #d0ddef62 !important;
  --background-modifier-hover: rgba(255, 128, 0, 0.2) !important;
  --background-modifier-message: #5a8d71 !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #f8fbff !important;
  --background-primary-alt: #1b2c25 !important;
  --background-secondary: #f8fbff !important;
  --background-secondary-alt: #dfefe6 !important;
  --bases-cards-background: #f8fbff !important;
  --bases-cards-cover-background: #1b2c25 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #ccd6eb !important;
  --bases-cards-shadow-hover: 0 0 0 1px #cbe2d5 !important;
  --bases-embed-border-color: #ccd6eb !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #52ad67 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #f8fbff !important;
  --bases-table-cell-background-active: #f8fbff !important;
  --bases-table-cell-background-disabled: #1b2c25 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #79c78e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5a8d71 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #1b2c25 !important;
  --bases-table-header-background: #f8fbff !important;
  --bases-table-header-background-hover: rgba(255, 128, 0, 0.2) !important;
  --bases-table-header-color: #52ad67 !important;
  --bases-table-row-background-hover: rgba(60, 168, 122, 0.4) !important;
  --bases-table-summary-background: #f8fbff !important;
  --bases-table-summary-background-hover: rgba(255, 128, 0, 0.2) !important;
  --bg: #cbe2d5 !important;
  --blockquote-background-color: #f1f5ff !important;
  --blockquote-border-color: #cbe2d5 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #697580 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #cbe2d5 !important;
  --box-border-m: 3px solid #cbe2d5 !important;
  --box-border-s: 1px solid #cbe2d5 !important;
  --bttn: #0e934c !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #0e934c !important;
  --button-background-hover: #91c1ad !important;
  --button-border: #0e934c !important;
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
  --checkbox-border-color: #79c78e !important;
  --checkbox-border-color-hover: #5a8d71 !important;
  --checkbox-color: #79c78e !important;
  --checkbox-color-hover: #5a8d71 !important;
  --checkbox-marker-color: #f8fbff !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #91c1ad !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #f1f5ff !important;
  --code-bg: #f1f5ff !important;
  --code-border-color: #ccd6eb !important;
  --code-bracket-background: rgba(255, 128, 0, 0.2) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #35ad76 !important;
  --code-punctuation: #52ad67 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #cbe2d5 !important;
  --code-size: .90em !important;
  --code-text: #35ad76 !important;
  --codeFont: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #91c1ad !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(194, 76, 78) !important;
  --color-accent-2: rgb(199, 87, 92) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter !important;
  --dark: #697580 !important;
  --dark-accent: #5a8d71 !important;
  --dark-sidebar: #f1f5ff !important;
  --darkgray: #697580 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(121, 199, 142, 0.1) !important;
  --dataview-th-background: #dfefe6 !important;
  --dataview-th-border-bottom: 2px solid #0e934c !important;
  --dataview-th-color: #0e934c !important;
  --dataview-th-count-color: #0e934c !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #1b2c25 !important;
  --divider-color: #dfefe6 !important;
  --divider-color-hover: #79c78e !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #5a8d71 !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #dfefe6 !important;
  --dropdown-background-hover: #91c1ad !important;
  --embed-bg: #f1f5ff !important;
  --embed-block-shadow-hover: 2px 2px 0 #cbe2d5 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #cbe2d5 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #cbe2d5 !important;
  --embed-border-left: 2px solid #0e934c !important;
  --embed-border-left-color: #0e934c !important;
  --embed-border-left-color-hover: #0e934c !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #cbe2d5 !important;
  --embed-border-start: 2px solid #5a8d71 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #cbe2d5 !important;
  --embed-border-type: solid !important;
  --embed-h: #c93c3c !important;
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
  --fg: #029f08 !important;
  --file-font: "its" !important;
  --file-header-background: #f8fbff !important;
  --file-header-background-focused: #f8fbff !important;
  --file-header-breadcrumb-color: #91c1ad !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #91c1ad !important;
  --file-header-color-active: #697580 !important;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #5a8d71 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #dfefe6 !important;
  --file-icon: "" !important;
  --file-icon-color: #91c1ad !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #697580 !important;
  --flair-background: #dfefe6 !important;
  --flair-color: #697580 !important;
  --folder: #64c9a3 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #64c9a3 !important;
  --folder-icon-open-color: #cca04c !important;
  --folder-open: #cca04c !important;
  --folder-open-text-color: #697580 !important;
  --folder-text-color: #697580 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter !important;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial' !important;
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #8996a0 !important;
  --footnote-divider-color: #ccd6eb !important;
  --footnote-id-color: #52ad67 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #d0ddef62 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #727e93 !important;
  --graph-arrow: #52ad67 !important;
  --graph-background: #f8fbff !important;
  --graph-bg: #f8fbff !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #2e5db2 !important;
  --graph-focused: #35be89 !important;
  --graph-img: #cca04c !important;
  --graph-line: #e4e7f8 !important;
  --graph-line-hover: #79c78e !important;
  --graph-lines: #e4e7f8 !important;
  --graph-node: #0e934c !important;
  --graph-node-attachment: #cca04c !important;
  --graph-node-focused: #35be89 !important;
  --graph-node-hover-fill: #2e5db2 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #000000 !important;
  --graph-node-unresolved: #727e93 !important;
  --graph-tag: #000000 !important;
  --graph-text: #697580 !important;
  --gray: #52ad67 !important;
  --h1-background: transparent !important;
  --h1-border-color: #79c78e !important;
  --h1-border-left-color: #ccd6eb !important;
  --h1-border-line-color: #ccd6eb !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #ccd6eb !important;
  --h1-border-width: 0 !important;
  --h1-color: #0e934c !important;
  --h1-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #cca04c !important;
  --h2-border-left-color: #ccd6eb !important;
  --h2-border-line-color: #ccd6eb !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #ccd6eb !important;
  --h2-border-width: 0 !important;
  --h2-color: sandybrown !important;
  --h2-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #c93c3c !important;
  --h3-border-left-color: #ccd6eb !important;
  --h3-border-line-color: #ccd6eb !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #ccd6eb !important;
  --h3-border-width: 0 !important;
  --h3-color: #c93c3c !important;
  --h3-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #0e934c !important;
  --h4-border-left-color: #ccd6eb !important;
  --h4-border-line-color: #ccd6eb !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #ccd6eb !important;
  --h4-border-width: 0 !important;
  --h4-color: #0e934c !important;
  --h4-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #35ad76 !important;
  --h5-border-left-color: #ccd6eb !important;
  --h5-border-line-color: #ccd6eb !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #ccd6eb !important;
  --h5-border-width: 0 !important;
  --h5-color: #0e934c !important;
  --h5-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #91c1ad !important;
  --h6-border-left-color: #ccd6eb !important;
  --h6-border-line-color: #ccd6eb !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #ccd6eb !important;
  --h6-border-width: 0 !important;
  --h6-color: #0e934c !important;
  --h6-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #0e934c !important;
  --he-text-on-accent-inactive: #697580 !important;
  --he-title-bar-active-action: #ac7c10 !important;
  --he-title-bar-active-bg: #f1f5ff !important;
  --he-title-bar-active-fg: #697580 !important;
  --he-title-bar-active-pinned-bg: #f8fbff !important;
  --he-title-bar-inactive-action: #52ad67 !important;
  --he-title-bar-inactive-bg: #f8fbff !important;
  --he-title-bar-inactive-fg: #91c1ad !important;
  --he-title-bar-inactive-pinned-bg: #f8fbff !important;
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
  --headerFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #0e934c !important;
  --heading-formatting: #91c1ad !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(60, 168, 122, 0.4) !important;
  --hr: #d6deea !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #d6deea !important;
  --hr-icon-background: #f8fbff !important;
  --hr-icon-color: #0e934c !important;
  --hr-icon-font: "Material Icons Sharp" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(66, 157, 104, 0.2) !important;
  --hvr-active: rgba(255, 128, 0, 0.2) !important;
  --hvr2: rgba(60, 168, 122, 0.4) !important;
  --i-at: #48804e !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #52ad67 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #697580 !important;
  --icon-color-hover: #697580 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #cbe2d5 !important;
  --illusion-h1-background: #79c78e !important;
  --illusion-h2-background: #cca04c !important;
  --illusion-h3-background: #c93c3c !important;
  --illusion-h4-background: #0e934c !important;
  --illusion-h5-background: #35ad76 !important;
  --illusion-h6-background: #91c1ad !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #d0ddef62 !important;
  --image-border-color: #ccd6eb !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #91c1ad !important;
  --indentation-guide-color: #91c1ad !important;
  --indentation-guide-color-active: #79c78e !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #91c1ad !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #0e934c !important;
  --inline-title-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: #d0ddef62 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #cbe2d5 !important;
  --input-shadow-hover: 3px 3px 0 #cbe2d5 !important;
  --interactive-accent: #5a8d71 !important;
  --interactive-accent-hover: #91c1ad !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #91c1ad !important;
  --interactive-normal: #dfefe6 !important;
  --its: "its" !important;
  --kanban-button-background: #f1f5ff !important;
  --kanban-button-shadow: 2px 2px 0 #cbe2d5 !important;
  --kanban-card-border: 2px solid #cbe2d5 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #f8fbff !important;
  --kanban-card-text-color: #697580 !important;
  --kanban-card-title-background: #f8fbff !important;
  --kanban-card-title-border: 0 1px 0 #cbe2d5 !important;
  --kanban-lane-background: #f1f5ff !important;
  --kanban-lane-border: 3px solid #cbe2d5 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #cbe2d5 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #35be89 !important;
  --kanban-tag-background: #56c681 !important;
  --latex-color: #ac7c10 !important;
  --latex-format-color: #91c1ad !important;
  --latex-syntax-color: #52ad67 !important;
  --light: #f8fbff !important;
  --lightgray: #f8fbff !important;
  --line-height-tight: 1.3em !important;
  --lines: #91c1ad !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #35be89 !important;
  --link-color-hover: #ac7c10 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #35be89 !important;
  --link-external-color-hover: #cca04c !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #91c1ad !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #ccd6eb !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #91c1ad !important;
  --list-color-2: #91c1ad !important;
  --list-color-3: #91c1ad !important;
  --list-color-4: #91c1ad !important;
  --list-color-5: #91c1ad !important;
  --list-color-6: #91c1ad !important;
  --list-indent: 25px !important;
  --list-marker-color: #79c78e !important;
  --list-marker-color-collapsed: #91c1ad !important;
  --list-marker-color-hover: #52ad67 !important;
  --list-marker-color-other: #cca04c !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #ac7c10 !important;
  --list-spacing: 1px !important;
  --lite-accent: #ac7c10 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #f8fbff !important;
  --menu-border-color: #cbe2d5 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #cbe2d5 !important;
  --message-border-color: #cbe2d5 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #cbe2d5 !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #ccd6eb !important;
  --metadata-button-text-color: #91c1ad !important;
  --metadata-divider-color: #ccd6eb !important;
  --metadata-icon-color: #52ad67 !important;
  --metadata-input-background-active: #d0ddef62 !important;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #697580 !important;
  --metadata-label-background-active: #d0ddef62 !important;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #52ad67 !important;
  --metadata-label-text-color-hover: #52ad67 !important;
  --metadata-property-background-active: rgba(255, 128, 0, 0.2) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #79c78e !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #cbe2d5 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #52ad67 !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #f8fbff !important;
  --modal-border-color: #cbe2d5 !important;
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
  --nav-heading-color-collapsed-hover: #52ad67 !important;
  --nav-heading-color-hover: #697580 !important;
  --nav-indentation-guide-color: #91c1ad !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #5a8d71 !important;
  --nav-item-background-border-color-hover: #5a8d71 !important;
  --nav-item-background-hover: #5a8d71 !important;
  --nav-item-background-selected: rgba(66, 157, 104, 0.2) !important;
  --nav-item-border-color: #ac7c10 !important;
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
  --nav-tag-color-active: #52ad67 !important;
  --nav-tag-color-hover: #52ad67 !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #f8fbff !important;
  --note-rgb: 248, 251, 255 !important;
  --note-title-border-color: #0e934c !important;
  --outer-bar: #dfefe6 !important;
  --outline: #cbe2d5 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #f8fbff !important;
  --pdf-background: #f8fbff !important;
  --pdf-page-background: #f8fbff !important;
  --pdf-sidebar-background: #f8fbff !important;
  --pill-border-color: #ccd6eb !important;
  --pill-border-color-hover: #cbe2d5 !important;
  --pill-color: #52ad67 !important;
  --pill-color-hover: #697580 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #35be89 !important;
  --pill-radius: 0 !important;
  --popover-background: #f8fbff !important;
  --popover-border: 3px solid #cbe2d5 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #79c78e !important;
  --progress-bg: #cbe2d5 !important;
  --prompt-background: #f8fbff !important;
  --prompt-border-color: #cbe2d5 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #0e934c !important;
  --r-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #ac7c10 !important;
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
  --ribbon-background: #dfefe6 !important;
  --ribbon-background-collapsed: #f8fbff !important;
  --ribbon-border-color: #dfefe6 !important;
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
  --scrollbar-active-thumb-bg: #ac7c10 !important;
  --scrollbar-bg: #cbe2d5 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #56c681 !important;
  --scrollbar-track-bg: #f8fbff !important;
  --search-border: 2px solid #cbe2d5 !important;
  --search-box-shadow: 2px 2px 0 #cbe2d5 !important;
  --search-clear-button-color: #52ad67 !important;
  --search-icon-color: #52ad67 !important;
  --search-result-background: #f8fbff !important;
  --secondary: #35be89 !important;
  --setting-group-heading-color: #697580 !important;
  --setting-item-alt-background-hover: #d0ddef62 !important;
  --setting-item-background-hover: rgba(66, 157, 104, 0.2) !important;
  --setting-item-border-color: #ccd6eb !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #0e934c !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #d0ddef62 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #ccd6eb !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #cbe2d5 !important;
  --shadow-m: 3px 3px 0 #cbe2d5 !important;
  --shadow-ml: 4px 4px 0 #cbe2d5 !important;
  --shadow-s: 2px 2px 0 #cbe2d5 !important;
  --side-bar: #f8fbff !important;
  --side-bar-bg: #dfefe6 !important;
  --sidebar-icon-color: #697580 !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #0e934c !important;
  --sidebar-tab-background-color-hover: #79c78e !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #0e934c !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #f8fbff !important;
  --slider-thumb-border-color: #cbe2d5 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #ccd6eb !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #52ad67 !important;
  --statblock-alt: #d0ddef62 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #f8fbff !important;
  --statblock-bar-border-color: #79c78e !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #79c78e !important;
  --statblock-border-color: #91c1ad !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #cbe2d5 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #697580 !important;
  --statblock-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --statblock-heading-font-color: #0e934c !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #d6deea !important;
  --statblock-primary-color: #697580 !important;
  --statblock-property-font-color: #697580 !important;
  --statblock-property-name-font-color: #0e934c !important;
  --statblock-rule-color: #79c78e !important;
  --statblock-section-heading-border-color: #ccd6eb !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --statblock-section-heading-font-color: #8996a0 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #dfefe6 !important;
  --status-bar-border-color: #79c78e !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #52ad67 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #5a8d71 !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #599049 !important;
  --suggestion-background: #f8fbff !important;
  --tab-background: #dfefe6 !important;
  --tab-background-active: #f8fbff !important;
  --tab-container-background: #dfefe6 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #d6deea !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #79c78e !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62 !important;
  --tab-stacked-shadow-color: #d0ddef62 !important;
  --tab-switcher-background: #f8fbff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fbff, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #cbe2d5 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #cbe2d5 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #ac7c10, 5px 5px 0 #cbe2d5 !important;
  --tab-text-color: #91c1ad !important;
  --tab-text-color-active: #697580 !important;
  --tab-text-color-focused: #91c1ad !important;
  --tab-text-color-focused-active: #697580 !important;
  --tab-text-color-focused-active-current: #697580 !important;
  --tab-text-color-focused-highlighted: #35be89 !important;
  --tab-text-color-hover: #697580 !important;
  --tab-top-outline-width: 0 !important;
  --table: #ccd6eb !important;
  --table-add-button-background: #0e934c !important;
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
  --table-drag-handle-background-active: #5a8d71 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #549f54 !important;
  --table-header-background-hover: #79c78e !important;
  --table-header-border-color: #f8fbff !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #ac7c10 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #d0ddef62 !important;
  --table-row-alt-background-hover: rgba(60, 168, 122, 0.4) !important;
  --table-row-background-hover: rgba(60, 168, 122, 0.4) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #5a8d71 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #56c681 !important;
  --tag-background: #56c681 !important;
  --tag-background-color: #56c681 !important;
  --tag-background-hover: #79c78e !important;
  --tag-border-color: #56c681 !important;
  --tag-border-color-hover: #79c78e !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #ac7c10 !important;
  --tall: 700px !important;
  --td: #d0ddef62 !important;
  --tertiary: #cca04c !important;
  --text: #697580 !important;
  --text-accent: #35be89 !important;
  --text-accent-hover: #cca04c !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(66, 157, 104, 0.2) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.2) !important;
  --text-muted: #52ad67 !important;
  --text-normal: #697580 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(60, 168, 122, 0.4) !important;
  --textHighlight: rgba(66, 157, 104, 0.2) !important;
  --th: #549f54 !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #79c78e !important;
  --theme-rainbow-2: #cca04c !important;
  --theme-rainbow-3: #c93c3c !important;
  --theme-rainbow-4: #0e934c !important;
  --theme-rainbow-5: #35ad76 !important;
  --theme-rainbow-6: #91c1ad !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #f8fbff !important;
  --titlebar-background-focused: #dfefe6 !important;
  --titlebar-border-color: #ccd6eb !important;
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
  --vault-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter !important;
  --vault-name-color: #0e934c !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #697580 !important;
  --vault-profile-color-hover: #697580 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(223, 239, 230);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 239, 230);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(223, 239, 230);
  border-left-color: rgb(223, 239, 230);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(66, 157, 104, 0.2);
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
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(82, 173, 103) none 0px;
  text-decoration: rgb(82, 173, 103);
  text-decoration-color: rgb(82, 173, 103);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(53, 190, 137);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(53, 190, 137) none 0px;
  text-decoration: rgb(53, 190, 137);
  text-decoration-color: rgb(53, 190, 137);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(53, 190, 137);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(53, 190, 137) none 0px;
  text-decoration: rgb(53, 190, 137);
  text-decoration-color: rgb(53, 190, 137);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(145, 193, 173);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(145, 193, 173) none 0px;
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
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ul > li {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(248, 251, 255);
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
  background-color: rgb(84, 159, 84);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(53, 173, 118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(53, 173, 118);
  border-right-color: rgb(53, 173, 118);
  border-top-color: rgb(53, 173, 118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(53, 173, 118);
  font-family: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  background-color: rgb(223, 239, 230);
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
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
  border-left-color: rgb(90, 141, 113);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(90, 141, 113);
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
  color: rgb(145, 193, 173);
  text-decoration: rgb(145, 193, 173);
  text-decoration-color: rgb(145, 193, 173);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(121, 199, 142);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(121, 199, 142);
  border-right-color: rgb(121, 199, 142);
  border-top-color: rgb(121, 199, 142);
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
  color: rgb(82, 173, 103);
  text-decoration: rgb(82, 173, 103);
  text-decoration-color: rgb(82, 173, 103);
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
  border-bottom-color: rgb(203, 226, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(203, 226, 213);
  border-left-width: 3px;
  border-right-color: rgb(203, 226, 213);
  border-right-width: 3px;
  border-top-color: rgb(203, 226, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(203, 226, 213) 5px 5px 0px 0px;
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 128, 0, 0.2);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(203, 226, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(203, 226, 213);
  border-left-width: 3px;
  border-right-color: rgb(203, 226, 213);
  border-right-width: 3px;
  border-top-color: rgb(203, 226, 213);
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 128, 0, 0.2);
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 128, 0, 0.2);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(86, 198, 129);
  border-bottom-color: rgb(86, 198, 129);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(86, 198, 129);
  border-right-color: rgb(86, 198, 129);
  border-top-color: rgb(86, 198, 129);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="light"] body h2 {
  color: rgb(244, 164, 96);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="light"] body h3 {
  color: rgb(201, 60, 60);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="light"] body h4 {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="light"] body h5 {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="light"] body h6 {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 239, 230);
  border-left-color: rgb(223, 239, 230);
  border-right-color: rgb(223, 239, 230);
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
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(105, 117, 128);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(90, 141, 113);
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
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(82, 173, 103);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(223, 239, 230);
  border-bottom-color: rgb(121, 199, 142);
  border-left-color: rgb(121, 199, 142);
  border-right-color: rgb(121, 199, 142);
  border-top-color: rgb(121, 199, 142);
  border-top-left-radius: 0px;
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(82, 173, 103);
  text-decoration: rgb(82, 173, 103);
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
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(82, 173, 103);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(82, 173, 103);
  stroke: rgb(82, 173, 103);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(145, 193, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(145, 193, 173);
  border-right-color: rgb(145, 193, 173);
  border-top-color: rgb(145, 193, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(145, 193, 173);
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
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(82, 173, 103);
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(223, 239, 230);
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
  border-bottom-color: rgb(82, 173, 103);
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(53, 173, 118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(53, 173, 118);
  border-right-color: rgb(53, 173, 118);
  border-top-color: rgb(53, 173, 118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(203, 226, 213) 0px 2px 0px 0px;
  color: rgb(53, 173, 118);
  font-family: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
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
