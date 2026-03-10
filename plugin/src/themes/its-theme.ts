import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #863737 !important;
  --accent-color: 134, 55, 55 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #42536e !important;
  --accent2-lite: #61afef !important;
  --aside-bg: #11151d !important;
  --background-modifier-active-hover: #652121 !important;
  --background-modifier-border: #2f3b4d !important;
  --background-modifier-border-focus: #863737 !important;
  --background-modifier-border-hover: #252c36 !important;
  --background-modifier-cover: #06080c60 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-hover: rgba(212, 47, 47, 0.4) !important;
  --background-modifier-message: #652121 !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #1a1e24 !important;
  --background-primary-alt: #0b0f13 !important;
  --background-secondary: #1a1e24 !important;
  --background-secondary-alt: #0b0f13 !important;
  --bases-cards-background: #1a1e24 !important;
  --bases-cards-cover-background: #0b0f13 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #2f3b4d !important;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36 !important;
  --bases-embed-border-color: #2f3b4d !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #97a1b9 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #1a1e24 !important;
  --bases-table-cell-background-active: #1a1e24 !important;
  --bases-table-cell-background-disabled: #0b0f13 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #863737 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #652121 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #0b0f13 !important;
  --bases-table-header-background: #1a1e24 !important;
  --bases-table-header-background-hover: rgba(212, 47, 47, 0.4) !important;
  --bases-table-header-color: #97a1b9 !important;
  --bases-table-row-background-hover: #7a141466 !important;
  --bases-table-summary-background: #1a1e24 !important;
  --bases-table-summary-background-hover: rgba(212, 47, 47, 0.4) !important;
  --bg: #252c36 !important;
  --blockquote-background-color: #0d1014 !important;
  --blockquote-border-color: #252c36 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #bccad8 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #232831 65%, transparent) linear-gradient(#232831, color-mix(in srgb, #232831 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #0b0f13 !important;
  --box-border-m: 3px solid #0b0f13 !important;
  --box-border-s: 1px solid #0b0f13 !important;
  --bttn: #652121 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #652121 !important;
  --button-background-hover: #252c36 !important;
  --button-border: #652121 !important;
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
  --checkbox-border-color: #863737 !important;
  --checkbox-border-color-hover: #652121 !important;
  --checkbox-color: #863737 !important;
  --checkbox-color-hover: #652121 !important;
  --checkbox-marker-color: #1a1e24 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #586477 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #232831 !important;
  --code-bg: #232831 !important;
  --code-border-color: #2f3b4d !important;
  --code-bracket-background: rgba(212, 47, 47, 0.4) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #fa4545 !important;
  --code-punctuation: #97a1b9 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #0b0f13 !important;
  --code-size: .90em !important;
  --code-text: #fa4545 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #586477 !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(199, 87, 92) !important;
  --color-accent-2: rgb(209, 113, 121) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #bccad8 !important;
  --dark-accent: #652121 !important;
  --dark-sidebar: #0d1014 !important;
  --darkgray: #bccad8 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1) !important;
  --dataview-th-background: #0b0f13 !important;
  --dataview-th-border-bottom: 2px solid #c14343 !important;
  --dataview-th-color: #c14343 !important;
  --dataview-th-count-color: #c14343 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #3f1010 !important;
  --divider-color: #0b0f13 !important;
  --divider-color-hover: #863737 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #652121 !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: #232831 !important;
  --dropdown-background-hover: #0d1014 !important;
  --embed-bg: #0d1014 !important;
  --embed-block-shadow-hover: 2px 2px 0 #0b0f13 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #0b0f13 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #0b0f13 !important;
  --embed-border-left: 2px solid #c14343 !important;
  --embed-border-left-color: #c14343 !important;
  --embed-border-left-color-hover: #c14343 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #0b0f13 !important;
  --embed-border-start: 2px solid #652121 !important;
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
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #652121 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #0b0f13 !important;
  --file-icon: "" !important;
  --file-icon-color: #586477 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #bccad8 !important;
  --flair-background: #232831 !important;
  --flair-color: #bccad8 !important;
  --folder: #863737 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #863737 !important;
  --folder-icon-open-color: #e05858 !important;
  --folder-open: #e05858 !important;
  --folder-open-text-color: #bccad8 !important;
  --folder-text-color: #bccad8 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #63778f !important;
  --footnote-divider-color: #2f3b4d !important;
  --footnote-id-color: #97a1b9 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #06080c60 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #727e93 !important;
  --graph-arrow: #97a1b9 !important;
  --graph-background: #0b0f13 !important;
  --graph-bg: #0b0f13 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #c14343 !important;
  --graph-focused: #61afef !important;
  --graph-img: #4c78cc !important;
  --graph-line: #652121 !important;
  --graph-line-hover: #863737 !important;
  --graph-lines: #652121 !important;
  --graph-node: #bccad8 !important;
  --graph-node-attachment: #4c78cc !important;
  --graph-node-focused: #61afef !important;
  --graph-node-hover-fill: #c14343 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #c14343 !important;
  --graph-node-unresolved: #727e93 !important;
  --graph-tag: #c14343 !important;
  --graph-text: #bccad8 !important;
  --gray: #97a1b9 !important;
  --h1-background: transparent !important;
  --h1-border-color: #7c2929 !important;
  --h1-border-left-color: #283345 !important;
  --h1-border-line-color: #283345 !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #283345 !important;
  --h1-border-width: 0 !important;
  --h1-color: #c14343 !important;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h2-background: transparent !important;
  --h2-border-color: #652121 !important;
  --h2-border-left-color: #283345 !important;
  --h2-border-line-color: #283345 !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #283345 !important;
  --h2-border-width: 0 !important;
  --h2-color: #c14343 !important;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #471d1d !important;
  --h3-border-left-color: #283345 !important;
  --h3-border-line-color: #283345 !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #283345 !important;
  --h3-border-width: 0 !important;
  --h3-color: #c14343 !important;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #381919 !important;
  --h4-border-left-color: #283345 !important;
  --h4-border-line-color: #283345 !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #283345 !important;
  --h4-border-width: 0 !important;
  --h4-color: #c14343 !important;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #424c61 !important;
  --h5-border-left-color: #283345 !important;
  --h5-border-line-color: #283345 !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #283345 !important;
  --h5-border-width: 0 !important;
  --h5-color: #c14343 !important;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #2e333d !important;
  --h6-border-left-color: #283345 !important;
  --h6-border-line-color: #283345 !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #283345 !important;
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
  --he-text-on-accent-inactive: #bccad8 !important;
  --he-title-bar-active-action: #c94d4d !important;
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
  --header-border-line-color: #283345 !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 700 !important;
  --headerFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #c14343 !important;
  --heading-formatting: #586477 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: #7a141466 !important;
  --hr: #2f3b4d !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #2f3b4d !important;
  --hr-icon-background: #1a1e24 !important;
  --hr-icon-color: #c14343 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(168, 60, 60, 0.4) !important;
  --hvr-active: rgba(212, 47, 47, 0.4) !important;
  --hvr2: #7a141466 !important;
  --i-at: #bf5e5e !important;
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
  --illusion-h1-background: #7c2929 !important;
  --illusion-h2-background: #652121 !important;
  --illusion-h3-background: #471d1d !important;
  --illusion-h4-background: #381919 !important;
  --illusion-h5-background: #424c61 !important;
  --illusion-h6-background: #2e333d !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #06080c60 !important;
  --image-border-color: #2f3b4d !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #586477 !important;
  --indentation-guide-color: #2f3b4d !important;
  --indentation-guide-color-active: #863737 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #2f3b4d !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #c14343 !important;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #0b0f13 !important;
  --input-shadow-hover: 3px 3px 0 #0b0f13 !important;
  --interactive-accent: #652121 !important;
  --interactive-accent-hover: #252c36 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #0d1014 !important;
  --interactive-normal: #232831 !important;
  --its: "its" !important;
  --kanban-button-background: #232831 !important;
  --kanban-button-shadow: 2px 2px 0 #0b0f13 !important;
  --kanban-card-border: 2px solid #0b0f13 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #1a1e24 !important;
  --kanban-card-text-color: #bccad8 !important;
  --kanban-card-title-background: #1a1e24 !important;
  --kanban-card-title-border: 0px 2px 0 #0b0f13 !important;
  --kanban-lane-background: #232831 !important;
  --kanban-lane-border: 3px solid #0b0f13 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #0b0f13 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #61afef !important;
  --kanban-tag-background: #652121 !important;
  --latex-color: #c94d4d !important;
  --latex-format-color: #586477 !important;
  --latex-syntax-color: #97a1b9 !important;
  --light: #1a1e24 !important;
  --lightgray: #1a1e24 !important;
  --line-height-tight: 1.3em !important;
  --lines: #2f3b4d !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #61afef !important;
  --link-color-hover: #c94d4d !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #61afef !important;
  --link-external-color-hover: #c94d4d !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #586477 !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #283345 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #2f3b4d !important;
  --list-color-2: #2f3b4d !important;
  --list-color-3: #2f3b4d !important;
  --list-color-4: #2f3b4d !important;
  --list-color-5: #2f3b4d !important;
  --list-color-6: #2f3b4d !important;
  --list-indent: 25px !important;
  --list-marker-color: #863737 !important;
  --list-marker-color-collapsed: #586477 !important;
  --list-marker-color-hover: #97a1b9 !important;
  --list-marker-color-other: #42536e !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #c14343 !important;
  --list-spacing: 1px !important;
  --lite-accent: #c94d4d !important;
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
  --metadata-border-color: #2f3b4d !important;
  --metadata-button-text-color: #586477 !important;
  --metadata-divider-color: #2f3b4d !important;
  --metadata-icon-color: #97a1b9 !important;
  --metadata-input-background-active: #06080c60 !important;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #bccad8 !important;
  --metadata-label-background-active: #06080c60 !important;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #97a1b9 !important;
  --metadata-label-text-color-hover: #97a1b9 !important;
  --metadata-property-background-active: rgba(212, 47, 47, 0.4) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #863737 !important;
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
  --modal-nav-item-background-hover: #06080c60 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #0d1014 !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #bccad8 !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #97a1b9 !important;
  --nav-heading-color-hover: #bccad8 !important;
  --nav-indentation-guide-color: #2f3b4d !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #652121 !important;
  --nav-item-background-border-color-hover: #652121 !important;
  --nav-item-background-hover: #652121 !important;
  --nav-item-background-selected: rgba(168, 60, 60, 0.4) !important;
  --nav-item-border-color: #c94d4d !important;
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
  --note-title-border-color: #c14343 !important;
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
  --pdf-shadow: 0 0 0 1px #2f3b4d !important;
  --pdf-sidebar-background: #1a1e24 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #2f3b4d !important;
  --pill-border-color: #2f3b4d !important;
  --pill-border-color-hover: #252c36 !important;
  --pill-color: #97a1b9 !important;
  --pill-color-hover: #bccad8 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #61afef !important;
  --pill-radius: 0 !important;
  --popover-background: #1a1e24 !important;
  --popover-border: 3px solid #0b0f13 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #863737 !important;
  --progress-bg: #252c36 !important;
  --prompt-background: #1a1e24 !important;
  --prompt-border-color: #0b0f13 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #c14343 !important;
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
  --raised-background: color-mix(in srgb, #232831 65%, transparent) linear-gradient(#232831, color-mix(in srgb, #232831 65%, transparent)) !important;
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
  --scrollbar-active-thumb-bg: #c94d4d !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #863737 !important;
  --scrollbar-track-bg: #1a1e24 !important;
  --search-border: 2px solid #0b0f13 !important;
  --search-box-shadow: 2px 2px 0 #0b0f13 !important;
  --search-clear-button-color: #97a1b9 !important;
  --search-icon-color: #97a1b9 !important;
  --search-result-background: #1a1e24 !important;
  --secondary: #61afef !important;
  --setting-group-heading-color: #bccad8 !important;
  --setting-item-alt-background-hover: #06080c60 !important;
  --setting-item-background-hover: rgba(168, 60, 60, 0.4) !important;
  --setting-item-border-color: #283345 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #c14343 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #06080c60 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #2f3b4d !important;
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
  --sidebar-tab-background-color: #652121 !important;
  --sidebar-tab-background-color-hover: #863737 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #652121 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #1a1e24 !important;
  --slider-thumb-border-color: #252c36 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #2f3b4d !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #97a1b9 !important;
  --statblock-alt: #06080c60 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #1a1e24 !important;
  --statblock-bar-border-color: #863737 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #863737 !important;
  --statblock-border-color: #2f3b4d !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #0b0f13 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #bccad8 !important;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --statblock-heading-font-color: #c14343 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #2f3b4d !important;
  --statblock-primary-color: #bccad8 !important;
  --statblock-property-font-color: #bccad8 !important;
  --statblock-property-name-font-color: #c14343 !important;
  --statblock-rule-color: #863737 !important;
  --statblock-section-heading-border-color: #283345 !important;
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
  --status-bar-background: #0b0f13 !important;
  --status-bar-border-color: #863737 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #97a1b9 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #652121 !important;
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
  --tab-divider-color: #2f3b4d !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #863737 !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px #c94d4d, 5px 5px 0 #0b0f13 !important;
  --tab-text-color: #586477 !important;
  --tab-text-color-active: #bccad8 !important;
  --tab-text-color-focused: #586477 !important;
  --tab-text-color-focused-active: #bccad8 !important;
  --tab-text-color-focused-active-current: #bccad8 !important;
  --tab-text-color-focused-highlighted: #61afef !important;
  --tab-text-color-hover: #bccad8 !important;
  --tab-top-outline-width: 0 !important;
  --table: #283345 !important;
  --table-add-button-background: #652121 !important;
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
  --table-drag-handle-background-active: #652121 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #652121 !important;
  --table-header-background-hover: #863737 !important;
  --table-header-border-color: #1a1e24 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #c94d4d !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #06080c60 !important;
  --table-row-alt-background-hover: #7a141466 !important;
  --table-row-background-hover: #7a141466 !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #652121 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #652121 !important;
  --tag-background: #652121 !important;
  --tag-background-color: #652121 !important;
  --tag-background-hover: #863737 !important;
  --tag-border-color: #652121 !important;
  --tag-border-color-hover: #863737 !important;
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
  --tertiary: #c94d4d !important;
  --text: #bccad8 !important;
  --text-accent: #61afef !important;
  --text-accent-hover: #c94d4d !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(168, 60, 60, 0.4) !important;
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4) !important;
  --text-muted: #97a1b9 !important;
  --text-normal: #bccad8 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: #7a141466 !important;
  --textHighlight: rgba(168, 60, 60, 0.4) !important;
  --th: #652121 !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #7c2929 !important;
  --theme-rainbow-2: #652121 !important;
  --theme-rainbow-3: #471d1d !important;
  --theme-rainbow-4: #381919 !important;
  --theme-rainbow-5: #424c61 !important;
  --theme-rainbow-6: #2e333d !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #1a1e24 !important;
  --titlebar-background-focused: #0b0f13 !important;
  --titlebar-border-color: #2f3b4d !important;
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
  --vault-name-color: #c14343 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #bccad8 !important;
  --vault-profile-color-hover: #bccad8 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 15, 19);
  color: rgb(188, 202, 216);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(11, 15, 19);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 15, 19);
  border-left-color: rgb(11, 15, 19);
  color: rgb(188, 202, 216);
}

body div#quartz-root {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}`,
    typography: `body .page article p > b, b {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > em, em {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > i, i {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > strong, strong {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .text-highlight {
  background-color: rgba(168, 60, 60, 0.4);
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body del {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: line-through 1px rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(151, 161, 185) none 0px;
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 175, 239);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(88, 100, 119) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(188, 202, 216);
}

body dt {
  color: rgb(188, 202, 216);
}

body ol > li {
  color: rgb(188, 202, 216);
}

body ol.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body ul > li {
  color: rgb(188, 202, 216);
}

body ul.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(13, 16, 20);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body table {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(6, 8, 12, 0.376);
}

body td {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}

body th {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(101, 33, 33);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 69, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 69, 69);
  border-right-color: rgb(250, 69, 69);
  border-top-color: rgb(250, 69, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(250, 69, 69);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(47, 59, 77);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(47, 59, 77);
  border-right-color: rgb(47, 59, 77);
  border-top-color: rgb(47, 59, 77);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(47, 59, 77);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(47, 59, 77);
  border-right-color: rgb(47, 59, 77);
  border-top-color: rgb(47, 59, 77);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(47, 59, 77);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(47, 59, 77);
  border-right-color: rgb(47, 59, 77);
  border-top-color: rgb(47, 59, 77);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(47, 59, 77);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(47, 59, 77);
  border-right-color: rgb(47, 59, 77);
  border-top-color: rgb(47, 59, 77);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body figcaption {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body img {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body video {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(101, 33, 33);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(101, 33, 33);
  border-right-color: rgb(188, 202, 216);
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
  color: rgb(88, 100, 119);
  text-decoration: rgb(88, 100, 119);
  text-decoration-color: rgb(88, 100, 119);
}

body input[type=checkbox] {
  border-bottom-color: rgb(134, 55, 55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(134, 55, 55);
  border-right-color: rgb(134, 55, 55);
  border-top-color: rgb(134, 55, 55);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

body li.task-list-item[data-task='/'] {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}

body li.task-list-item[data-task='>'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body li.task-list-item[data-task='l'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body li.task-list-item[data-task='w'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(47, 59, 77);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(47, 59, 77);
  border-right-color: rgb(47, 59, 77);
  border-top-color: rgb(47, 59, 77);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(212, 47, 47, 0.4);
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(101, 33, 33);
  border-bottom-color: rgb(101, 33, 33);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(101, 33, 33);
  border-right-color: rgb(101, 33, 33);
  border-top-color: rgb(101, 33, 33);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  border-bottom-color: rgb(11, 15, 19);
  border-left-color: rgb(11, 15, 19);
  border-right-color: rgb(11, 15, 19);
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
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(101, 33, 33);
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
    footer: `body footer {
  background-color: rgb(11, 15, 19);
  border-bottom-color: rgb(134, 55, 55);
  border-left-color: rgb(134, 55, 55);
  border-right-color: rgb(134, 55, 55);
  border-top-color: rgb(134, 55, 55);
  border-top-left-radius: 0px;
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body li.section-li > .section .meta {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
}

body ul.section-ul {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(151, 161, 185);
  stroke: rgb(151, 161, 185);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

body .metadata {
  border-bottom-color: rgb(47, 59, 77);
  border-left-color: rgb(47, 59, 77);
  border-right-color: rgb(47, 59, 77);
  border-top-color: rgb(47, 59, 77);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(151, 161, 185);
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(11, 15, 19);
}

body .page-header h2.page-title {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(188, 202, 216);
  text-decoration: underline dotted rgb(188, 202, 216);
}

body details {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body input[type=text] {
  border-bottom-color: rgb(151, 161, 185);
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(250, 69, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 69, 69);
  border-right-color: rgb(250, 69, 69);
  border-top-color: rgb(250, 69, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(11, 15, 19) 0px 2px 0px 0px;
  color: rgb(250, 69, 69);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body sub {
  color: rgb(188, 202, 216);
}

body summary {
  color: rgb(188, 202, 216);
}

body sup {
  color: rgb(188, 202, 216);
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
  --aside-bg: #f1f5ff !important;
  --background-modifier-active-hover: #c35c5c !important;
  --background-modifier-border: #b5c2d8 !important;
  --background-modifier-border-focus: #912e2e !important;
  --background-modifier-border-hover: #e1e9f6 !important;
  --background-modifier-cover: #d0ddef62 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #d0ddef62 !important;
  --background-modifier-form-field-hover: #d0ddef62 !important;
  --background-modifier-hover: rgba(253, 115, 115, 0.4) !important;
  --background-modifier-message: #c35c5c !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #f8fbff !important;
  --background-primary-alt: #eef3fd !important;
  --background-secondary: #f8fbff !important;
  --background-secondary-alt: #eef3fd !important;
  --bases-cards-background: #f8fbff !important;
  --bases-cards-cover-background: #eef3fd !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #b5c2d8 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #e1e9f6 !important;
  --bases-embed-border-color: #b5c2d8 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #697580 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #f8fbff !important;
  --bases-table-cell-background-active: #f8fbff !important;
  --bases-table-cell-background-disabled: #eef3fd !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #912e2e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c14343 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #eef3fd !important;
  --bases-table-header-background: #f8fbff !important;
  --bases-table-header-background-hover: rgba(253, 115, 115, 0.4) !important;
  --bases-table-header-color: #697580 !important;
  --bases-table-row-background-hover: rgba(229, 149, 149, 0.37) !important;
  --bases-table-summary-background: #f8fbff !important;
  --bases-table-summary-background-hover: rgba(253, 115, 115, 0.4) !important;
  --bg: #e1e9f6 !important;
  --blockquote-background-color: #f1f5ff !important;
  --blockquote-border-color: #e1e9f6 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #30353a !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #e1e9f6 !important;
  --box-border-m: 3px solid #e1e9f6 !important;
  --box-border-s: 1px solid #e1e9f6 !important;
  --bttn: #c14343 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #c14343 !important;
  --button-background-hover: #e1e9f6 !important;
  --button-border: #c14343 !important;
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
  --checkbox-marker-color: #f8fbff !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #a6bbde !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #f1f5ff !important;
  --code-bg: #f1f5ff !important;
  --code-border-color: #b5c2d8 !important;
  --code-bracket-background: rgba(253, 115, 115, 0.4) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #ea4262 !important;
  --code-punctuation: #697580 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #e1e9f6 !important;
  --code-size: .90em !important;
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
  --dark-sidebar: #f1f5ff !important;
  --darkgray: #30353a !important;
  --dataview-table-width: 100% !important;
  --dataview-th-background: #eef3fd !important;
  --dataview-th-border-bottom: 2px solid #c14343 !important;
  --dataview-th-color: #c14343 !important;
  --dataview-th-count-color: #c14343 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #2f1010 !important;
  --divider-color: #eef3fd !important;
  --divider-color-hover: #912e2e !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #c35c5c !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #f1f5ff !important;
  --dropdown-background-hover: #f1f5ff !important;
  --embed-bg: #f1f5ff !important;
  --embed-block-shadow-hover: 2px 2px 0 #e1e9f6 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #e1e9f6 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #e1e9f6 !important;
  --embed-border-left: 2px solid #c14343 !important;
  --embed-border-left-color: #c14343 !important;
  --embed-border-left-color-hover: #c14343 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #e1e9f6 !important;
  --embed-border-start: 2px solid #c14343 !important;
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
  --fg: #912e2e !important;
  --file-font: "its" !important;
  --file-header-background: #f8fbff !important;
  --file-header-background-focused: #f8fbff !important;
  --file-header-breadcrumb-color: #a6bbde !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #a6bbde !important;
  --file-header-color-active: #30353a !important;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #c35c5c !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #eef3fd !important;
  --file-icon: "" !important;
  --file-icon-color: #a6bbde !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #30353a !important;
  --flair-background: #f1f5ff !important;
  --flair-color: #30353a !important;
  --folder: #912e2e !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #912e2e !important;
  --folder-icon-open-color: #ce6d6d !important;
  --folder-open: #ce6d6d !important;
  --folder-open-text-color: #30353a !important;
  --folder-text-color: #30353a !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #8996a0 !important;
  --footnote-divider-color: #b5c2d8 !important;
  --footnote-id-color: #697580 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #d0ddef62 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #727e93 !important;
  --graph-arrow: #697580 !important;
  --graph-background: #f8fbff !important;
  --graph-bg: #f8fbff !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #912e2e !important;
  --graph-focused: rgba(253, 115, 115, 0.4) !important;
  --graph-img: #4c78cc !important;
  --graph-line: #e4e7f8 !important;
  --graph-line-hover: #912e2e !important;
  --graph-lines: #e4e7f8 !important;
  --graph-node: #c14343 !important;
  --graph-node-attachment: #4c78cc !important;
  --graph-node-focused: rgba(253, 115, 115, 0.4) !important;
  --graph-node-hover-fill: #912e2e !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #000000 !important;
  --graph-node-unresolved: #727e93 !important;
  --graph-tag: #000000 !important;
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
  --he-title-bar-active-bg: #f1f5ff !important;
  --he-title-bar-active-fg: #30353a !important;
  --he-title-bar-active-pinned-bg: #f8fbff !important;
  --he-title-bar-inactive-action: #697580 !important;
  --he-title-bar-inactive-bg: #f8fbff !important;
  --he-title-bar-inactive-fg: #a6bbde !important;
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
  --headers: #c14343 !important;
  --heading-formatting: #a6bbde !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(229, 149, 149, 0.37) !important;
  --hr: #d6deea !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #d6deea !important;
  --hr-icon-background: #f8fbff !important;
  --hr-icon-color: #c14343 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(255, 0, 0, 0.212) !important;
  --hvr-active: rgba(253, 115, 115, 0.4) !important;
  --hvr2: rgba(229, 149, 149, 0.37) !important;
  --i-at: #912e2e !important;
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
  --illusion-box-shadow: 5px 5px 0 #e1e9f6 !important;
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
  --image-border-color: #b5c2d8 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #a6bbde !important;
  --indentation-guide-color: #b5c2d8 !important;
  --indentation-guide-color-active: #912e2e !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #b5c2d8 !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #c14343 !important;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: #d0ddef62 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #e1e9f6 !important;
  --input-shadow-hover: 3px 3px 0 #e1e9f6 !important;
  --interactive-accent: #c14343 !important;
  --interactive-accent-hover: #e1e9f6 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #f1f5ff !important;
  --interactive-normal: #f1f5ff !important;
  --its: "its" !important;
  --kanban-button-background: #f1f5ff !important;
  --kanban-button-shadow: 2px 2px 0 #e1e9f6 !important;
  --kanban-card-border: 2px solid #e1e9f6 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #f8fbff !important;
  --kanban-card-text-color: #30353a !important;
  --kanban-card-title-background: #f8fbff !important;
  --kanban-card-title-border: 0px 2px 0 #e1e9f6 !important;
  --kanban-lane-background: #f1f5ff !important;
  --kanban-lane-border: 3px solid #e1e9f6 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #e1e9f6 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #5599d0 !important;
  --kanban-tag-background: #c65656 !important;
  --latex-color: #cd2626 !important;
  --latex-format-color: #a6bbde !important;
  --latex-syntax-color: #697580 !important;
  --light: #f8fbff !important;
  --lightgray: #f8fbff !important;
  --line-height-tight: 1.3em !important;
  --lines: #b5c2d8 !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #5599d0 !important;
  --link-color-hover: #cd2626 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #5599d0 !important;
  --link-external-color-hover: #cd2626 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #a6bbde !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #ccd6eb !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #b5c2d8 !important;
  --list-color-2: #b5c2d8 !important;
  --list-color-3: #b5c2d8 !important;
  --list-color-4: #b5c2d8 !important;
  --list-color-5: #b5c2d8 !important;
  --list-color-6: #b5c2d8 !important;
  --list-indent: 25px !important;
  --list-marker-color: #912e2e !important;
  --list-marker-color-collapsed: #a6bbde !important;
  --list-marker-color-hover: #697580 !important;
  --list-marker-color-other: #aac1d3 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #c14343 !important;
  --list-spacing: 1px !important;
  --lite-accent: #cd2626 !important;
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
  --metadata-border-color: #b5c2d8 !important;
  --metadata-button-text-color: #a6bbde !important;
  --metadata-divider-color: #b5c2d8 !important;
  --metadata-icon-color: #697580 !important;
  --metadata-input-background-active: #d0ddef62 !important;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #30353a !important;
  --metadata-label-background-active: #d0ddef62 !important;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #697580 !important;
  --metadata-label-text-color-hover: #697580 !important;
  --metadata-property-background-active: rgba(253, 115, 115, 0.4) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #912e2e !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e1e9f6 !important;
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
  --nav-heading-color: #30353a !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #697580 !important;
  --nav-heading-color-hover: #30353a !important;
  --nav-indentation-guide-color: #b5c2d8 !important;
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
  --nav-item-radius: 0 !important;
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
  --note: #f8fbff !important;
  --note-rgb: 248, 251, 255 !important;
  --note-title-border-color: #c14343 !important;
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
  --pill-border-color: #b5c2d8 !important;
  --pill-border-color-hover: #e1e9f6 !important;
  --pill-color: #697580 !important;
  --pill-color-hover: #30353a !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #5599d0 !important;
  --pill-radius: 0 !important;
  --popover-background: #f8fbff !important;
  --popover-border: 3px solid #e1e9f6 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #912e2e !important;
  --progress-bg: #e1e9f6 !important;
  --prompt-background: #f8fbff !important;
  --prompt-border-color: #e1e9f6 !important;
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
  --scrollbar-active-thumb-bg: #cd2626 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #912e2e !important;
  --scrollbar-track-bg: #f8fbff !important;
  --search-border: 2px solid #e1e9f6 !important;
  --search-box-shadow: 2px 2px 0 #e1e9f6 !important;
  --search-clear-button-color: #697580 !important;
  --search-icon-color: #697580 !important;
  --search-result-background: #f8fbff !important;
  --secondary: #5599d0 !important;
  --setting-group-heading-color: #30353a !important;
  --setting-item-alt-background-hover: #d0ddef62 !important;
  --setting-item-background-hover: rgba(255, 0, 0, 0.212) !important;
  --setting-item-border-color: #ccd6eb !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #c14343 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #d0ddef62 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #b5c2d8 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #e1e9f6 !important;
  --shadow-m: 3px 3px 0 #e1e9f6 !important;
  --shadow-ml: 4px 4px 0 #e1e9f6 !important;
  --shadow-s: 2px 2px 0 #e1e9f6 !important;
  --side-bar: #f8fbff !important;
  --side-bar-bg: #eef3fd !important;
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
  --slide-background: #f8fbff !important;
  --slider-thumb-border-color: #e1e9f6 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #b5c2d8 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #697580 !important;
  --statblock-alt: #d0ddef62 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #f8fbff !important;
  --statblock-bar-border-color: #912e2e !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #912e2e !important;
  --statblock-border-color: #b5c2d8 !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #e1e9f6 !important;
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
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #eef3fd !important;
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
  --suggestion-background: #f8fbff !important;
  --tab-background: #eef3fd !important;
  --tab-background-active: #f8fbff !important;
  --tab-container-background: #eef3fd !important;
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
  --tab-switcher-background: #f8fbff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fbff, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #e1e9f6 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #e1e9f6 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #cd2626, 5px 5px 0 #e1e9f6 !important;
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
  --table-drag-handle-background-active: #c14343 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #c14343 !important;
  --table-header-background-hover: #912e2e !important;
  --table-header-border-color: #f8fbff !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #cd2626 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #d0ddef62 !important;
  --table-row-alt-background-hover: rgba(229, 149, 149, 0.37) !important;
  --table-row-background-hover: rgba(229, 149, 149, 0.37) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #c14343 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #c65656 !important;
  --tag-background: #c65656 !important;
  --tag-background-color: #c65656 !important;
  --tag-background-hover: #912e2e !important;
  --tag-border-color: #c65656 !important;
  --tag-border-color-hover: #912e2e !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #cd2626 !important;
  --tall: 700px !important;
  --td: #d0ddef62 !important;
  --tertiary: #cd2626 !important;
  --text: #30353a !important;
  --text-accent: #5599d0 !important;
  --text-accent-hover: #cd2626 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(255, 0, 0, 0.212) !important;
  --text-highlight-bg-active: rgba(253, 115, 115, 0.4) !important;
  --text-muted: #697580 !important;
  --text-normal: #30353a !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(229, 149, 149, 0.37) !important;
  --textHighlight: rgba(255, 0, 0, 0.212) !important;
  --th: #c14343 !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #bb5555 !important;
  --theme-rainbow-2: #a53f3f !important;
  --theme-rainbow-3: #862c2c !important;
  --theme-rainbow-4: #662828 !important;
  --theme-rainbow-5: #697795 !important;
  --theme-rainbow-6: #a4aec2 !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #f8fbff !important;
  --titlebar-background-focused: #eef3fd !important;
  --titlebar-border-color: #b5c2d8 !important;
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
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 243, 253);
  color: rgb(48, 53, 58);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(238, 243, 253);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
  color: rgb(48, 53, 58);
}

body div#quartz-root {
  background-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}`,
    typography: `body .page article p > b, b {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > em, em {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > i, i {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > strong, strong {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .text-highlight {
  background-color: rgba(255, 0, 0, 0.21);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body del {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: line-through 1px rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}`,
    links: `body a.external, footer a {
  color: rgb(85, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(85, 153, 208) none 0px;
  text-decoration: rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(85, 153, 208) none 0px;
  text-decoration: rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
}

body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(166, 187, 222) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
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

body ol.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body ul > li {
  color: rgb(48, 53, 58);
}

body ul.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(241, 245, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body table {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(208, 221, 239, 0.384);
}

body td {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}

body th {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(193, 67, 67);
}`,
    code: `body code {
  border-bottom-color: rgb(234, 66, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 66, 98);
  border-right-color: rgb(234, 66, 98);
  border-top-color: rgb(234, 66, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(234, 66, 98);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(181, 194, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 194, 216);
  border-right-color: rgb(181, 194, 216);
  border-top-color: rgb(181, 194, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(181, 194, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 194, 216);
  border-right-color: rgb(181, 194, 216);
  border-top-color: rgb(181, 194, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(48, 53, 58);
}

body pre > code, pre:has(> code) {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(181, 194, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 194, 216);
  border-right-color: rgb(181, 194, 216);
  border-top-color: rgb(181, 194, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(181, 194, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 194, 216);
  border-right-color: rgb(181, 194, 216);
  border-top-color: rgb(181, 194, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
    embeds: `body .file-embed {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(48, 53, 58);
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
  color: rgb(166, 187, 222);
  text-decoration: rgb(166, 187, 222);
  text-decoration-color: rgb(166, 187, 222);
}

body input[type=checkbox] {
  border-bottom-color: rgb(145, 46, 46);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -22.4px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(219, 1, 1);
  text-decoration: rgb(219, 1, 1);
  text-decoration-color: rgb(219, 1, 1);
}

body li.task-list-item[data-task='*'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body li.task-list-item[data-task='>'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
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
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='b'] {
  color: rgb(251, 146, 76);
  text-decoration: rgb(251, 146, 76);
  text-decoration-color: rgb(251, 146, 76);
}

body li.task-list-item[data-task='c'] {
  color: rgb(149, 217, 238);
  text-decoration: rgb(149, 217, 238);
  text-decoration-color: rgb(149, 217, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(161, 106, 73);
  text-decoration: rgb(161, 106, 73);
  text-decoration-color: rgb(161, 106, 73);
}

body li.task-list-item[data-task='i'] {
  color: rgb(202, 199, 0);
  text-decoration: rgb(202, 199, 0);
  text-decoration-color: rgb(202, 199, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='l'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='w'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
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
  border-bottom-color: rgb(48, 53, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 53, 58);
  border-left-width: 4px;
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
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
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(181, 194, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 194, 216);
  border-right-color: rgb(181, 194, 216);
  border-top-color: rgb(181, 194, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 53, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(253, 115, 115, 0.4);
  border-bottom-color: rgb(48, 53, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(48, 53, 58);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(48, 53, 58);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(198, 86, 86);
  border-bottom-color: rgb(198, 86, 86);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(198, 86, 86);
  border-right-color: rgb(198, 86, 86);
  border-top-color: rgb(198, 86, 86);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  border-bottom-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
  border-right-color: rgb(238, 243, 253);
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
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(48, 53, 58);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(48, 53, 58);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(48, 53, 58);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(195, 92, 92);
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
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}`,
    footer: `body footer {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  border-top-left-radius: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body li.section-li > .section .meta {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
}

body ul.section-ul {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(105, 117, 128);
  stroke: rgb(105, 117, 128);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

body .metadata {
  border-bottom-color: rgb(181, 194, 216);
  border-left-color: rgb(181, 194, 216);
  border-right-color: rgb(181, 194, 216);
  border-top-color: rgb(181, 194, 216);
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(238, 243, 253);
}

body .page-header h2.page-title {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
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
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(234, 66, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 66, 98);
  border-right-color: rgb(234, 66, 98);
  border-top-color: rgb(234, 66, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(225, 233, 246) 0px 2px 0px 0px;
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
