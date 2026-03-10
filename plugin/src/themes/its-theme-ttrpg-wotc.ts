import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.ttrpg-wotc",
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
  --background-modifier-border: #283345 !important;
  --background-modifier-border-focus: #863737 !important;
  --background-modifier-border-hover: #252c36 !important;
  --background-modifier-cover: #06080c60 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #06080c60 !important;
  --background-modifier-form-field-hover: #06080c60 !important;
  --background-modifier-hover: rgba(212, 47, 47, 0.4) !important;
  --background-modifier-message: #652121 !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #1a1e24 !important;
  --background-primary-alt: #3f1010 !important;
  --background-secondary: #1a1e24 !important;
  --background-secondary-alt: #0b0f13 !important;
  --bases-cards-background: #1a1e24 !important;
  --bases-cards-cover-background: #3f1010 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #283345 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36 !important;
  --bases-embed-border-color: #283345 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #97a1b9 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #1a1e24 !important;
  --bases-table-cell-background-active: #1a1e24 !important;
  --bases-table-cell-background-disabled: #3f1010 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #863737 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #652121 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #3f1010 !important;
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
  --blockquote-font-style: "its-Bookerly", "Bookerly", Inter !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #0b0f13 65%, transparent) linear-gradient(#0b0f13, color-mix(in srgb, #0b0f13 65%, transparent)) !important;
  --bodyFont: "its-Bookerly", "Bookerly", Inter !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #0000008c !important;
  --box-border-m: 3px solid #0000008c !important;
  --box-border-s: 1px solid #0000008c !important;
  --bttn: #652121 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #652121 !important;
  --button-background-hover: #586477 !important;
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
  --code-border-color: #283345 !important;
  --code-bracket-background: rgba(212, 47, 47, 0.4) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #fa4545 !important;
  --code-punctuation: #97a1b9 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #0000008c !important;
  --code-size: .90em !important;
  --code-text: #fa4545 !important;
  --codeFont: "its-Fira Code", "Fira Code", Inter !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #586477 !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(199, 87, 92) !important;
  --color-accent-2: rgb(209, 113, 121) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "its-Fira Code", "Fira Code", Inter !important;
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
  --dataview-th-font: "its-Draconis", "Draconis", Inter !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 500 !important;
  --deep-dark-accent: #3f1010 !important;
  --divider-color: #0b0f13 !important;
  --divider-color-hover: #863737 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #652121 !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: #0b0f13 !important;
  --dropdown-background-hover: #586477 !important;
  --embed-bg: #0d1014 !important;
  --embed-block-shadow-hover: 2px 2px 0 #0000008c !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #0000008c !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #0000008c !important;
  --embed-border-left: 2px solid #c14343 !important;
  --embed-border-left-color: #c14343 !important;
  --embed-border-left-color-hover: #c14343 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #0000008c !important;
  --embed-border-start: 2px solid #652121 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #0000008c !important;
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
  --fg: #cfd7dd !important;
  --file-font: "its" !important;
  --file-header-background: transparent !important;
  --file-header-background-focused: #1a1e24 !important;
  --file-header-breadcrumb-color: #586477 !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #586477 !important;
  --file-header-color-active: #bccad8 !important;
  --file-header-font: "its-Bookerly", "Bookerly", Inter !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #652121 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #0b0f13 !important;
  --file-icon: "" !important;
  --file-icon-color: #586477 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #bccad8 !important;
  --flair-background: #0b0f13 !important;
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
  --font: "its-Draconis", "Draconis", Inter !important;
  --font-default: "its-Bookerly", "Bookerly", Inter !important;
  --font-frontmatter: .95em !important;
  --font-interface: "its-Bookerly", "Bookerly", Inter !important;
  --font-ligatures: none !important;
  --font-mermaid: "its-Bookerly", "Bookerly", Inter !important;
  --font-monospace: "its-Fira Code", "Fira Code", Inter !important;
  --font-print: "its-Bookerly", "Bookerly", Inter, Arial' !important;
  --font-print-override: "its-Bookerly", "Bookerly", Inter !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: "its-Bookerly", "Bookerly", Inter !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #63778f !important;
  --footnote-divider-color: #283345 !important;
  --footnote-id-color: #97a1b9 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #06080c60 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #586477 !important;
  --graph-arrow: #97a1b9 !important;
  --graph-background: #1a1e24 !important;
  --graph-bg: #1a1e24 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #c94d4d !important;
  --graph-focused: #61afef !important;
  --graph-img: #42536e !important;
  --graph-line: #7a141466 !important;
  --graph-line-hover: #863737 !important;
  --graph-lines: #7a141466 !important;
  --graph-node: #bccad8 !important;
  --graph-node-attachment: #42536e !important;
  --graph-node-focused: #61afef !important;
  --graph-node-hover-fill: #c94d4d !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #652121 !important;
  --graph-node-unresolved: #586477 !important;
  --graph-tag: #652121 !important;
  --graph-text: #bccad8 !important;
  --gray: #97a1b9 !important;
  --h1-background: transparent !important;
  --h1-border-color: #7c2929 !important;
  --h1-border-left-color: linear-gradient(to left, #c93c3c, transparent) !important;
  --h1-border-line-color: #c93c3c !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: linear-gradient(to right, #c93c3c, transparent) !important;
  --h1-border-width: 0 !important;
  --h1-color: #c14343 !important;
  --h1-font: "its-Draconis", "Draconis", Inter !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h1-weight: 500 !important;
  --h2-background: transparent !important;
  --h2-border-color: #652121 !important;
  --h2-border-left-color: linear-gradient(to left, sandybrown, transparent) !important;
  --h2-border-line-color: sandybrown !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: linear-gradient(to right, sandybrown, transparent) !important;
  --h2-border-width: 0 !important;
  --h2-color: sandybrown !important;
  --h2-font: "its-Draconis", "Draconis", Inter !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 500 !important;
  --h3-background: transparent !important;
  --h3-border-color: #471d1d !important;
  --h3-border-left-color: linear-gradient(to left, #a11111, transparent) !important;
  --h3-border-line-color: #a11111 !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: linear-gradient(to right, #a11111, transparent) !important;
  --h3-border-width: 0 !important;
  --h3-color: #a11111 !important;
  --h3-font: "its-Draconis", "Draconis", Inter !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 500 !important;
  --h4-background: transparent !important;
  --h4-border-color: #381919 !important;
  --h4-border-left-color: linear-gradient(to left, #283345, transparent) !important;
  --h4-border-line-color: #283345 !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: linear-gradient(to right, #283345, transparent) !important;
  --h4-border-width: 0 !important;
  --h4-color: #c14343 !important;
  --h4-font: "its-Draconis", "Draconis", Inter !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 500 !important;
  --h5-background: transparent !important;
  --h5-border-color: #424c61 !important;
  --h5-border-left-color: linear-gradient(to left, #283345, transparent) !important;
  --h5-border-line-color: #283345 !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: linear-gradient(to right, #283345, transparent) !important;
  --h5-border-width: 0 !important;
  --h5-color: #c14343 !important;
  --h5-font: "its-Draconis", "Draconis", Inter !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 500 !important;
  --h6-background: transparent !important;
  --h6-border-color: #2e333d !important;
  --h6-border-left-color: linear-gradient(to left, #283345, transparent) !important;
  --h6-border-line-color: #283345 !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: linear-gradient(to right, #283345, transparent) !important;
  --h6-border-width: 0 !important;
  --h6-color: #c14343 !important;
  --h6-font: "its-Draconis", "Draconis", Inter !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 500 !important;
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
  --header-weight: 500 !important;
  --headerFont: "its-Bookerly", "Bookerly", Inter !important;
  --headers: #c14343 !important;
  --heading-formatting: #586477 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: #7a141466 !important;
  --hr: #772d2d !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #772d2d !important;
  --hr-icon-background: #1a1e24 !important;
  --hr-icon-color: #c14343 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 7' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenoddclip-rule:evenoddstroke-linejoin:roundstroke-miterlimit:2'%3E%3Crect id='Artboard1' x='0' y='0' width='100' height='7' style='fill:none'/%3E%3Cpath d='M50,2.5L100,3.5L50,4L0,3.5L50,2.5Z' style='fill:rgb(146, 47, 47)'/%3E%3C/svg%3E") no-repeat center center !important;
  --hr-image-height: 5px !important;
  --hr-image-width: 100% !important;
  --hr-text-offset: 12px !important;
  --hr-thickness: 0 !important;
  --hr-width: auto !important;
  --hvr: rgba(168, 60, 60, 0.4) !important;
  --hvr-active: rgba(212, 47, 47, 0.4) !important;
  --hvr2: #7a141466 !important;
  --i-at: #bf5e5e !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #bccad8 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #bccad8 !important;
  --icon-color-hover: #bccad8 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #0000008c !important;
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
  --image-border-color: #283345 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #586477 !important;
  --indentation-guide-color: #772d2d !important;
  --indentation-guide-color-active: #863737 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #772d2d !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #c14343 !important;
  --inline-title-font: "its-Draconis", "Draconis", Inter !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --inline-title-weight: 500 !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #0000008c !important;
  --input-shadow-hover: 3px 3px 0 #0000008c !important;
  --interactive-accent: #652121 !important;
  --interactive-accent-hover: #586477 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #586477 !important;
  --interactive-normal: #0b0f13 !important;
  --its: "its" !important;
  --kanban-button-background: #232831 !important;
  --kanban-button-shadow: 2px 2px 0 #0000008c !important;
  --kanban-card-border: 2px solid #0000008c !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #1a1e24 !important;
  --kanban-card-text-color: #bccad8 !important;
  --kanban-card-title-background: #06080c60 !important;
  --kanban-card-title-border: 0 1px 0 #0000008c !important;
  --kanban-lane-background: #232831 !important;
  --kanban-lane-border: 3px solid #0000008c !important;
  --kanban-lane-box-shadow: 2px 2px 0 #0000008c !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #61afef !important;
  --kanban-tag-background: #652121 !important;
  --latex-color: #c94d4d !important;
  --latex-format-color: #586477 !important;
  --latex-syntax-color: #97a1b9 !important;
  --light: #1a1e24 !important;
  --lightgray: #1a1e24 !important;
  --line-height-tight: 1.3em !important;
  --lines: #772d2d !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #61afef !important;
  --link-color-hover: #c94d4d !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #61afef !important;
  --link-external-color-hover: #42536e !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #586477 !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #283345 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #772d2d !important;
  --list-color-2: #772d2d !important;
  --list-color-3: #772d2d !important;
  --list-color-4: #772d2d !important;
  --list-color-5: #772d2d !important;
  --list-color-6: #772d2d !important;
  --list-indent: 25px !important;
  --list-marker-color: #863737 !important;
  --list-marker-color-collapsed: #586477 !important;
  --list-marker-color-hover: #97a1b9 !important;
  --list-marker-color-other: #42536e !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #c94d4d !important;
  --list-spacing: 1px !important;
  --lite-accent: #c94d4d !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #1a1e24 !important;
  --menu-border-color: #252c36 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #0000008c !important;
  --message-border-color: #0000008c !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #0000008c !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #283345 !important;
  --metadata-button-text-color: #586477 !important;
  --metadata-divider-color: #283345 !important;
  --metadata-icon-color: #bccad8 !important;
  --metadata-input-background-active: #06080c60 !important;
  --metadata-input-font: "its-Bookerly", "Bookerly", Inter !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #bccad8 !important;
  --metadata-label-background-active: #06080c60 !important;
  --metadata-label-font: "its-Bookerly", "Bookerly", Inter !important;
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
  --modal-border-color: #0000008c !important;
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
  --nav-indentation-guide-color: #772d2d !important;
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
  --outline: #0000008c !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: transparent !important;
  --paper-edges: 0 0 60px #0000008c inset !important;
  --paper-edges-m: 0 0 100px #0000008c inset !important;
  --pdf-background: #1a1e24 !important;
  --pdf-page-background: #1a1e24 !important;
  --pdf-shadow: 0 0 0 1px #283345 !important;
  --pdf-sidebar-background: #1a1e24 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #283345 !important;
  --pill-border-color: #283345 !important;
  --pill-border-color-hover: #252c36 !important;
  --pill-color: #97a1b9 !important;
  --pill-color-hover: #bccad8 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #61afef !important;
  --pill-radius: 0 !important;
  --popover-background: #1a1e24 !important;
  --popover-border: 3px solid #0000008c !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #863737 !important;
  --progress-bg: #252c36 !important;
  --prompt-background: #1a1e24 !important;
  --prompt-border-color: #0000008c !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #c14343 !important;
  --r-heading-font: "its-Draconis", "Draconis", Inter !important;
  --r-heading-font-weight: 500 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "its-Bookerly", "Bookerly", Inter !important;
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
  --scrollbar-active-thumb-bg: #c94d4d !important;
  --scrollbar-bg: #252c36 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #652121 !important;
  --scrollbar-track-bg: #1a1e24 !important;
  --search-border: 2px solid #0000008c !important;
  --search-box-shadow: 2px 2px 0 #0000008c !important;
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
  --setting-items-border-color: #283345 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #0000008c !important;
  --shadow-m: 3px 3px 0 #0000008c !important;
  --shadow-ml: 4px 4px 0 #0000008c !important;
  --shadow-s: 2px 2px 0 #0000008c !important;
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
  --slider-track-background: #283345 !important;
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
  --statblock-border-color: #772d2d !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #0000008c !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "its-Bookerly", "Bookerly", Inter !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #bccad8 !important;
  --statblock-heading-font: "its-Draconis", "Draconis", Inter !important;
  --statblock-heading-font-color: #c14343 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 500 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #772d2d !important;
  --statblock-primary-color: #bccad8 !important;
  --statblock-property-font-color: #bccad8 !important;
  --statblock-property-name-font-color: #c14343 !important;
  --statblock-rule-color: #863737 !important;
  --statblock-section-heading-border-color: #283345 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "its-Draconis", "Draconis", Inter !important;
  --statblock-section-heading-font-color: #63778f !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 500 !important;
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
  --tab-container-background: transparent !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #772d2d !important;
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
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0000008c !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #0000008c !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #c94d4d, 5px 5px 0 #0000008c !important;
  --tab-text-color: #586477 !important;
  --tab-text-color-active: #bccad8 !important;
  --tab-text-color-focused: #586477 !important;
  --tab-text-color-focused-active: #bccad8 !important;
  --tab-text-color-focused-active-current: #bccad8 !important;
  --tab-text-color-focused-highlighted: #61afef !important;
  --tab-text-color-hover: #bccad8 !important;
  --tab-titlebar-color: transparent !important;
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
  --table-header-size: "its-Bookerly", "Bookerly", Inter !important;
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
  --tag-font: "its-Bookerly", "Bookerly", Inter !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #d04e4e !important;
  --tall: 700px !important;
  --td: #06080c60 !important;
  --tertiary: #42536e !important;
  --text: #bccad8 !important;
  --text-accent: #61afef !important;
  --text-accent-hover: #42536e !important;
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
  --titleFont: "its-Bookerly", "Bookerly", Inter !important;
  --titlebar-background: #1a1e24 !important;
  --titlebar-background-focused: #0b0f13 !important;
  --titlebar-border-color: #283345 !important;
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
  --vault-font: "its-Draconis", "Draconis", Inter !important;
  --vault-name-color: #c14343 !important;
  --vault-name-font-size: 25px !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
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
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(11, 15, 19);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(168, 60, 60, 0.4);
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body del {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: line-through 1px rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body p {
  color: rgb(151, 161, 185);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  outline: rgb(151, 161, 185) none 0px;
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(97, 175, 239);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: its-Bookerly, Bookerly, Inter;
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
  font-family: its-Bookerly, Bookerly, Inter;
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
  font-family: its-Bookerly, Bookerly, Inter;
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
  background-color: rgb(101, 33, 33);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(250, 69, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 69, 69);
  border-right-color: rgb(250, 69, 69);
  border-top-color: rgb(250, 69, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(250, 69, 69);
  font-family: "its-Fira Code", "Fira Code", Inter;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
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
  font-family: its-Bookerly, Bookerly, Inter;
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
  border-bottom-width: 11px;
  border-left-color: rgb(101, 33, 33);
  border-left-width: 11px;
  border-right-color: rgb(188, 202, 216);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 11px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 11px;
  border-left-color: rgb(101, 33, 33);
  border-left-width: 11px;
  border-right-color: rgb(188, 202, 216);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 11px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(88, 100, 119);
  text-decoration: rgb(88, 100, 119);
  text-decoration-color: rgb(88, 100, 119);
}

html[saved-theme="dark"] body input[type=checkbox] {
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
  background-color: rgba(6, 8, 12, 0.376);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgba(0, 0, 0, 0.55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0.55);
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0.55);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0.55);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(0, 0, 0, 0.55) 5px 5px 0px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
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
  background-color: rgba(212, 47, 47, 0.4);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0.55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0.55);
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0.55);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0.55);
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(101, 33, 33);
  border-bottom-color: rgb(101, 33, 33);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(101, 33, 33);
  border-right-color: rgb(101, 33, 33);
  border-top-color: rgb(101, 33, 33);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="dark"] body h2 {
  color: rgb(244, 164, 96);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="dark"] body h3 {
  color: rgb(161, 17, 17);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="dark"] body h4 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="dark"] body h5 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="dark"] body h6 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
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
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 500;
  text-decoration: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(11, 15, 19);
  border-bottom-color: rgb(134, 55, 55);
  border-left-color: rgb(134, 55, 55);
  border-right-color: rgb(134, 55, 55);
  border-top-color: rgb(134, 55, 55);
  border-top-left-radius: 0px;
  color: rgb(151, 161, 185);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
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
  font-family: "??", its-Bookerly, Bookerly, Inter;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(188, 202, 216);
  stroke: rgb(188, 202, 216);
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
  font-family: "??", its-Bookerly, Bookerly, Inter;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(40, 51, 69);
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  color: rgb(151, 161, 185);
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(151, 161, 185);
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  color: rgb(151, 161, 185);
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(11, 15, 19);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
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
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(250, 69, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 69, 69);
  border-right-color: rgb(250, 69, 69);
  border-top-color: rgb(250, 69, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 0px 0px;
  color: rgb(250, 69, 69);
  font-family: "its-Fira Code", "Fira Code", Inter;
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
  --accent: #c75959 !important;
  --accent-color: 199, 89, 89 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #000000 !important;
  --accent2-lite: #df6262 !important;
  --aside-bg: #faf2e9 !important;
  --background-modifier-active-hover: #cd645e !important;
  --background-modifier-border: #fbb4577e !important;
  --background-modifier-border-focus: #c75959 !important;
  --background-modifier-border-hover: #f6e3cd !important;
  --background-modifier-cover: #fae0be60 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #fae0be60 !important;
  --background-modifier-form-field-hover: #fae0be60 !important;
  --background-modifier-hover: rgba(182, 28, 28, 0.5) !important;
  --background-modifier-message: #cd645e !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #fff9f0 !important;
  --background-primary-alt: #2e1010 !important;
  --background-secondary: #fff6e4 !important;
  --background-secondary-alt: #fbe2c5 !important;
  --bases-cards-background: #fff9f0 !important;
  --bases-cards-cover-background: #2e1010 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #fbb4577e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #f6e3cd !important;
  --bases-embed-border-color: #fbb4577e !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #697580 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #fff9f0 !important;
  --bases-table-cell-background-active: #fff9f0 !important;
  --bases-table-cell-background-disabled: #2e1010 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #c75959 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #cd645e !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #2e1010 !important;
  --bases-table-header-background: #fff9f0 !important;
  --bases-table-header-background-hover: rgba(182, 28, 28, 0.5) !important;
  --bases-table-header-color: #697580 !important;
  --bases-table-row-background-hover: #c20a0a35 !important;
  --bases-table-summary-background: #fff9f0 !important;
  --bases-table-summary-background-hover: rgba(182, 28, 28, 0.5) !important;
  --bg: #f6e3cd !important;
  --blockquote-background-color: #faf2e9 !important;
  --blockquote-border-color: #f6e3cd !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #412f2f !important;
  --blockquote-font-style: "its-Bookerly", "Bookerly", Inter !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #fff9f0 65%, transparent) linear-gradient(#fff9f0, color-mix(in srgb, #fff9f0 65%, transparent)) !important;
  --bodyFont: "its-Bookerly", "Bookerly", Inter !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #fbb4577e !important;
  --box-border-m: 3px solid #fbb4577e !important;
  --box-border-s: 1px solid #fbb4577e !important;
  --bttn: #c14343 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #c14343 !important;
  --button-background-hover: #e2b7a3 !important;
  --button-border: #c14343 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #fff9f0 !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 166, 180, 204 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #412f2f !important;
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
  --checkbox-border-color: #c75959 !important;
  --checkbox-border-color-hover: #cd645e !important;
  --checkbox-color: #c75959 !important;
  --checkbox-color-hover: #cd645e !important;
  --checkbox-marker-color: #fff9f0 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #e2b7a3 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #f3e6d2 !important;
  --code-bg: #f3e6d2 !important;
  --code-border-color: #fbb4577e !important;
  --code-bracket-background: rgba(182, 28, 28, 0.5) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #681010 !important;
  --code-punctuation: #697580 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #fbb4577e !important;
  --code-size: .90em !important;
  --code-text: #681010 !important;
  --codeFont: "its-Fira Code", "Fira Code", Inter !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #e2b7a3 !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(194, 76, 78) !important;
  --color-accent-2: rgb(199, 87, 92) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "its-Fira Code", "Fira Code", Inter !important;
  --dark: #412f2f !important;
  --dark-accent: #cd645e !important;
  --dark-sidebar: #f6e3cd !important;
  --darkgray: #412f2f !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(199, 89, 89, 0.1) !important;
  --dataview-th-background: #fbe2c5 !important;
  --dataview-th-border-bottom: 2px solid #c14343 !important;
  --dataview-th-color: #c14343 !important;
  --dataview-th-count-color: #c14343 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "its-Draconis", "Draconis", Inter !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 500 !important;
  --deep-dark-accent: #2e1010 !important;
  --divider-color: #fbe2c5 !important;
  --divider-color-hover: #c75959 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #cd645e !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #fae0be60 !important;
  --dropdown-background: #fbe2c5 !important;
  --dropdown-background-hover: #e2b7a3 !important;
  --embed-bg: #faf2e9 !important;
  --embed-block-shadow-hover: 2px 2px 0 #fbb4577e !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #fbb4577e !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #fbb4577e !important;
  --embed-border-left: 2px solid #c14343 !important;
  --embed-border-left-color: #c14343 !important;
  --embed-border-left-color-hover: #c14343 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #fbb4577e !important;
  --embed-border-start: 2px solid #cd645e !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #fbb4577e !important;
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
  --fg: #c75959 !important;
  --file-font: "its" !important;
  --file-header-background: transparent !important;
  --file-header-background-focused: #fff9f0 !important;
  --file-header-breadcrumb-color: #e2b7a3 !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #e2b7a3 !important;
  --file-header-color-active: #412f2f !important;
  --file-header-font: "its-Bookerly", "Bookerly", Inter !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #cd645e !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #fbe2c5 !important;
  --file-icon: "" !important;
  --file-icon-color: #ebbd92 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #412f2f !important;
  --flair-background: #fbe2c5 !important;
  --flair-color: #412f2f !important;
  --folder: #c14343 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #c14343 !important;
  --folder-icon-open-color: #412f2f !important;
  --folder-open: #412f2f !important;
  --folder-open-text-color: #412f2f !important;
  --folder-text-color: #412f2f !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "its-Draconis", "Draconis", Inter !important;
  --font-default: "its-Bookerly", "Bookerly", Inter !important;
  --font-frontmatter: .95em !important;
  --font-interface: "its-Bookerly", "Bookerly", Inter !important;
  --font-ligatures: none !important;
  --font-mermaid: "its-Bookerly", "Bookerly", Inter !important;
  --font-monospace: "its-Fira Code", "Fira Code", Inter !important;
  --font-print: "its-Bookerly", "Bookerly", Inter, Arial' !important;
  --font-print-override: "its-Bookerly", "Bookerly", Inter !important;
  --font-small: .95em !important;
  --font-smaller: .90em !important;
  --font-smallest: .85em !important;
  --font-text: "its-Bookerly", "Bookerly", Inter !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #8996a0 !important;
  --footnote-divider-color: #fbb4577e !important;
  --footnote-id-color: #697580 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #fae0be60 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #e2b7a3 !important;
  --graph-arrow: #697580 !important;
  --graph-background: #fff9f0 !important;
  --graph-bg: #fff9f0 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #a35158 !important;
  --graph-focused: #df6262 !important;
  --graph-img: #000000 !important;
  --graph-line: #c20a0a35 !important;
  --graph-line-hover: #c75959 !important;
  --graph-lines: #c20a0a35 !important;
  --graph-node: #412f2f !important;
  --graph-node-attachment: #000000 !important;
  --graph-node-focused: #df6262 !important;
  --graph-node-hover-fill: #a35158 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #cd645e !important;
  --graph-node-unresolved: #e2b7a3 !important;
  --graph-tag: #cd645e !important;
  --graph-text: #412f2f !important;
  --gray: #697580 !important;
  --h1-background: transparent !important;
  --h1-border-color: #bb5555 !important;
  --h1-border-left-color: linear-gradient(to left, #c93c3c, transparent) !important;
  --h1-border-line-color: #c93c3c !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: linear-gradient(to right, #c93c3c, transparent) !important;
  --h1-border-width: 0 !important;
  --h1-color: #c14343 !important;
  --h1-font: "its-Draconis", "Draconis", Inter !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h1-weight: 500 !important;
  --h2-background: transparent !important;
  --h2-border-color: #a53f3f !important;
  --h2-border-left-color: linear-gradient(to left, sandybrown, transparent) !important;
  --h2-border-line-color: sandybrown !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: linear-gradient(to right, sandybrown, transparent) !important;
  --h2-border-width: 0 !important;
  --h2-color: sandybrown !important;
  --h2-font: "its-Draconis", "Draconis", Inter !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 500 !important;
  --h3-background: transparent !important;
  --h3-border-color: #862c2c !important;
  --h3-border-left-color: linear-gradient(to left, #a11111, transparent) !important;
  --h3-border-line-color: #a11111 !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: linear-gradient(to right, #a11111, transparent) !important;
  --h3-border-width: 0 !important;
  --h3-color: #a11111 !important;
  --h3-font: "its-Draconis", "Draconis", Inter !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 500 !important;
  --h4-background: transparent !important;
  --h4-border-color: #662828 !important;
  --h4-border-left-color: linear-gradient(to left, #fbb4577e, transparent) !important;
  --h4-border-line-color: #fbb4577e !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: linear-gradient(to right, #fbb4577e, transparent) !important;
  --h4-border-width: 0 !important;
  --h4-color: #c14343 !important;
  --h4-font: "its-Draconis", "Draconis", Inter !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 500 !important;
  --h5-background: transparent !important;
  --h5-border-color: #697795 !important;
  --h5-border-left-color: linear-gradient(to left, #fbb4577e, transparent) !important;
  --h5-border-line-color: #fbb4577e !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: linear-gradient(to right, #fbb4577e, transparent) !important;
  --h5-border-width: 0 !important;
  --h5-color: #c14343 !important;
  --h5-font: "its-Draconis", "Draconis", Inter !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 500 !important;
  --h6-background: transparent !important;
  --h6-border-color: #a4aec2 !important;
  --h6-border-left-color: linear-gradient(to left, #fbb4577e, transparent) !important;
  --h6-border-line-color: #fbb4577e !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: linear-gradient(to right, #fbb4577e, transparent) !important;
  --h6-border-width: 0 !important;
  --h6-color: #c14343 !important;
  --h6-font: "its-Draconis", "Draconis", Inter !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 500 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #c14343 !important;
  --he-text-on-accent-inactive: #412f2f !important;
  --he-title-bar-active-action: #a35158 !important;
  --he-title-bar-active-bg: #faf2e9 !important;
  --he-title-bar-active-fg: #412f2f !important;
  --he-title-bar-active-pinned-bg: #fff9f0 !important;
  --he-title-bar-inactive-action: #697580 !important;
  --he-title-bar-inactive-bg: #fff9f0 !important;
  --he-title-bar-inactive-fg: #e2b7a3 !important;
  --he-title-bar-inactive-pinned-bg: #fff9f0 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #fbb4577e !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 500 !important;
  --headerFont: "its-Bookerly", "Bookerly", Inter !important;
  --headers: #c14343 !important;
  --heading-formatting: #e2b7a3 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: #c20a0a35 !important;
  --hr: #fbb4577e !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #fbb4577e !important;
  --hr-icon-background: #fff9f0 !important;
  --hr-icon-color: #c14343 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 7' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenoddclip-rule:evenoddstroke-linejoin:roundstroke-miterlimit:2'%3E%3Crect id='Artboard1' x='0' y='0' width='100' height='7' style='fill:none'/%3E%3Cpath d='M50,2.5L100,3.5L50,4L0,3.5L50,2.5Z' style='fill:rgb(200, 57, 57)'/%3E%3C/svg%3E") no-repeat center center !important;
  --hr-image-height: 5px !important;
  --hr-image-width: 100% !important;
  --hr-text-offset: 12px !important;
  --hr-thickness: 0 !important;
  --hr-width: auto !important;
  --hvr: rgba(255, 0, 0, 0.212) !important;
  --hvr-active: rgba(182, 28, 28, 0.5) !important;
  --hvr2: #c20a0a35 !important;
  --i-at: #697580 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #412f2f !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #412f2f !important;
  --icon-color-hover: #412f2f !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #fbb4577e !important;
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
  --image-border-background: #fae0be60 !important;
  --image-border-color: #fbb4577e !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #e2b7a3 !important;
  --indentation-guide-color: #e2b7a3 !important;
  --indentation-guide-color-active: #c75959 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #e2b7a3 !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #c14343 !important;
  --inline-title-font: "its-Draconis", "Draconis", Inter !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --inline-title-weight: 500 !important;
  --input-bg: #fae0be60 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #fbb4577e !important;
  --input-shadow-hover: 3px 3px 0 #fbb4577e !important;
  --interactive-accent: #cd645e !important;
  --interactive-accent-hover: #e2b7a3 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #e2b7a3 !important;
  --interactive-normal: #fbe2c5 !important;
  --its: "its" !important;
  --kanban-button-background: #f3e6d2 !important;
  --kanban-button-shadow: 2px 2px 0 #fbb4577e !important;
  --kanban-card-border: 2px solid #fbb4577e !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #fff9f0 !important;
  --kanban-card-text-color: #412f2f !important;
  --kanban-card-title-background: #fae0be60 !important;
  --kanban-card-title-border: 0 1px 0 #fbb4577e !important;
  --kanban-lane-background: #f3e6d2 !important;
  --kanban-lane-border: 3px solid #fbb4577e !important;
  --kanban-lane-box-shadow: 2px 2px 0 #fbb4577e !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #df6262 !important;
  --kanban-tag-background: #cd645e !important;
  --latex-color: #a35158 !important;
  --latex-format-color: #e2b7a3 !important;
  --latex-syntax-color: #697580 !important;
  --light: #fff9f0 !important;
  --lightgray: #fff6e4 !important;
  --line-height-tight: 1.3em !important;
  --lines: #e2b7a3 !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #df6262 !important;
  --link-color-hover: #a35158 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #df6262 !important;
  --link-external-color-hover: #000000 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #e2b7a3 !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #fbb4577e !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #e2b7a3 !important;
  --list-color-2: #e2b7a3 !important;
  --list-color-3: #e2b7a3 !important;
  --list-color-4: #e2b7a3 !important;
  --list-color-5: #e2b7a3 !important;
  --list-color-6: #e2b7a3 !important;
  --list-indent: 25px !important;
  --list-marker-color: #c75959 !important;
  --list-marker-color-collapsed: #e2b7a3 !important;
  --list-marker-color-hover: #697580 !important;
  --list-marker-color-other: #000000 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #a35158 !important;
  --list-spacing: 1px !important;
  --lite-accent: #a35158 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #fff6e4 !important;
  --menu-border-color: #f6e3cd !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #fbb4577e !important;
  --message-border-color: #fbb4577e !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #fbb4577e !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #fbb4577e !important;
  --metadata-button-text-color: #e2b7a3 !important;
  --metadata-divider-color: #fbb4577e !important;
  --metadata-icon-color: #412f2f !important;
  --metadata-input-background-active: #fae0be60 !important;
  --metadata-input-font: "its-Bookerly", "Bookerly", Inter !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #412f2f !important;
  --metadata-label-background-active: #fae0be60 !important;
  --metadata-label-font: "its-Bookerly", "Bookerly", Inter !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #697580 !important;
  --metadata-label-text-color-hover: #697580 !important;
  --metadata-property-background-active: rgba(182, 28, 28, 0.5) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c75959 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #f6e3cd !important;
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
  --modal-background: #fff9f0 !important;
  --modal-border-color: #fbb4577e !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #fae0be60 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #f6e3cd !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #412f2f !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #697580 !important;
  --nav-heading-color-hover: #412f2f !important;
  --nav-indentation-guide-color: #e2b7a3 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #cd645e !important;
  --nav-item-background-border-color-hover: #cd645e !important;
  --nav-item-background-hover: #cd645e !important;
  --nav-item-background-selected: rgba(255, 0, 0, 0.212) !important;
  --nav-item-border-color: #a35158 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #412f2f !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #412f2f !important;
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
  --note: #fff9f0 !important;
  --note-rgb: 255, 252, 240 !important;
  --note-title-border-color: #c14343 !important;
  --outer-bar: #fbe2c5 !important;
  --outline: #fbb4577e !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: transparent !important;
  --paper-edges: 0 0 60px #fbb4577e inset !important;
  --paper-edges-m: 0 0 100px #fbb4577e inset !important;
  --pdf-background: #fff9f0 !important;
  --pdf-page-background: #fff9f0 !important;
  --pdf-sidebar-background: #fff9f0 !important;
  --pill-border-color: #fbb4577e !important;
  --pill-border-color-hover: #f6e3cd !important;
  --pill-color: #697580 !important;
  --pill-color-hover: #412f2f !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #df6262 !important;
  --pill-radius: 0 !important;
  --popover-background: #fff9f0 !important;
  --popover-border: 3px solid #fbb4577e !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #c75959 !important;
  --progress-bg: #f6e3cd !important;
  --prompt-background: #fff9f0 !important;
  --prompt-border-color: #fbb4577e !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #c14343 !important;
  --r-heading-font: "its-Draconis", "Draconis", Inter !important;
  --r-heading-font-weight: 500 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "its-Bookerly", "Bookerly", Inter !important;
  --r-progress-color: #a35158 !important;
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
  --raised-background: color-mix(in srgb, #fff9f0 65%, transparent) linear-gradient(#fff9f0, color-mix(in srgb, #fff9f0 65%, transparent)) !important;
  --ribbon-background: #fbe2c5 !important;
  --ribbon-background-collapsed: #fff9f0 !important;
  --ribbon-border-color: #fbe2c5 !important;
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
  --scrollbar-active-thumb-bg: #a35158 !important;
  --scrollbar-bg: #f6e3cd !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #cd645e !important;
  --scrollbar-track-bg: #fff9f0 !important;
  --search-border: 2px solid #fbb4577e !important;
  --search-box-shadow: 2px 2px 0 #fbb4577e !important;
  --search-clear-button-color: #697580 !important;
  --search-icon-color: #697580 !important;
  --search-result-background: #fff9f0 !important;
  --secondary: #df6262 !important;
  --setting-group-heading-color: #412f2f !important;
  --setting-item-alt-background-hover: #fae0be60 !important;
  --setting-item-background-hover: rgba(255, 0, 0, 0.212) !important;
  --setting-item-border-color: #fbb4577e !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #c14343 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #fae0be60 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #fbb4577e !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #fbb4577e !important;
  --shadow-m: 3px 3px 0 #fbb4577e !important;
  --shadow-ml: 4px 4px 0 #fbb4577e !important;
  --shadow-s: 2px 2px 0 #fbb4577e !important;
  --side-bar: #fff6e4 !important;
  --side-bar-bg: #fbe2c5 !important;
  --sidebar-icon-color: #412f2f !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #c14343 !important;
  --sidebar-tab-background-color-hover: #c75959 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #c14343 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #fff9f0 !important;
  --slider-thumb-border-color: #f6e3cd !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #fbb4577e !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #697580 !important;
  --statblock-alt: #fae0be60 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #fff9f0 !important;
  --statblock-bar-border-color: #c75959 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #c75959 !important;
  --statblock-border-color: #e2b7a3 !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #fbb4577e !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "its-Bookerly", "Bookerly", Inter !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #412f2f !important;
  --statblock-heading-font: "its-Draconis", "Draconis", Inter !important;
  --statblock-heading-font-color: #c14343 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 500 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #fbb4577e !important;
  --statblock-primary-color: #412f2f !important;
  --statblock-property-font-color: #412f2f !important;
  --statblock-property-name-font-color: #c14343 !important;
  --statblock-rule-color: #c75959 !important;
  --statblock-section-heading-border-color: #fbb4577e !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "its-Draconis", "Draconis", Inter !important;
  --statblock-section-heading-font-color: #8996a0 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 500 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #fbe2c5 !important;
  --status-bar-border-color: #c75959 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #697580 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #cd645e !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #599049 !important;
  --suggestion-background: #fff9f0 !important;
  --tab-background: #fbe2c5 !important;
  --tab-background-active: #fff9f0 !important;
  --tab-container-background: transparent !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #fbb4577e !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #c75959 !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #fae0be60 !important;
  --tab-stacked-shadow-color: #fae0be60 !important;
  --tab-switcher-background: #fff6e4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fff6e4, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #fbb4577e !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #fbb4577e !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #a35158, 5px 5px 0 #fbb4577e !important;
  --tab-text-color: #e2b7a3 !important;
  --tab-text-color-active: #412f2f !important;
  --tab-text-color-focused: #e2b7a3 !important;
  --tab-text-color-focused-active: #412f2f !important;
  --tab-text-color-focused-active-current: #412f2f !important;
  --tab-text-color-focused-highlighted: #df6262 !important;
  --tab-text-color-hover: #412f2f !important;
  --tab-titlebar-color: transparent !important;
  --tab-top-outline-width: 0 !important;
  --table: #fbb4577e !important;
  --table-add-button-background: #c14343 !important;
  --table-add-button-border-color: #fff9f0 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #fff9f0 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #fae0be60 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #cd645e !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #cd645e !important;
  --table-header-background-hover: #c75959 !important;
  --table-header-border-color: #fff9f0 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: "its-Bookerly", "Bookerly", Inter !important;
  --table-header-text-color: #a35158 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #fae0be60 !important;
  --table-row-alt-background-hover: #c20a0a35 !important;
  --table-row-background-hover: #c20a0a35 !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #cd645e !important;
  --table-selection-border-radius: 0 !important;
  --tag: #cd645e !important;
  --tag-background: #cd645e !important;
  --tag-background-color: #cd645e !important;
  --tag-background-hover: #c75959 !important;
  --tag-border-color: #cd645e !important;
  --tag-border-color-hover: #c75959 !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "its-Bookerly", "Bookerly", Inter !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #a35158 !important;
  --tall: 700px !important;
  --td: #fae0be60 !important;
  --tertiary: #000000 !important;
  --text: #412f2f !important;
  --text-accent: #df6262 !important;
  --text-accent-hover: #000000 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(255, 0, 0, 0.212) !important;
  --text-highlight-bg-active: rgba(182, 28, 28, 0.5) !important;
  --text-muted: #697580 !important;
  --text-normal: #412f2f !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: #c20a0a35 !important;
  --textHighlight: rgba(255, 0, 0, 0.212) !important;
  --th: #cd645e !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #bb5555 !important;
  --theme-rainbow-2: #a53f3f !important;
  --theme-rainbow-3: #862c2c !important;
  --theme-rainbow-4: #662828 !important;
  --theme-rainbow-5: #697795 !important;
  --theme-rainbow-6: #a4aec2 !important;
  --tiny: 100px !important;
  --titleFont: "its-Bookerly", "Bookerly", Inter !important;
  --titlebar-background: #fff9f0 !important;
  --titlebar-background-focused: #fbe2c5 !important;
  --titlebar-border-color: #fbb4577e !important;
  --titlebar-text-color: #412f2f !important;
  --titlebar-text-color-focused: #412f2f !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "its-Draconis", "Draconis", Inter !important;
  --vault-name-color: #c14343 !important;
  --vault-name-font-size: 25px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #412f2f !important;
  --vault-profile-color-hover: #412f2f !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 249, 240);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 246, 228);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(251, 226, 197);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(251, 226, 197);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 249, 240);
  color: rgb(65, 47, 47);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  font-weight: 900;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  font-weight: 900;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 0, 0, 0.21);
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body del {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: line-through 1px rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body p {
  color: rgb(105, 117, 128);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(223, 98, 98);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(223, 98, 98) none 0px;
  text-decoration: rgb(223, 98, 98);
  text-decoration-color: rgb(223, 98, 98);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(223, 98, 98);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(223, 98, 98) none 0px;
  text-decoration: rgb(223, 98, 98);
  text-decoration-color: rgb(223, 98, 98);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(226, 183, 163);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(226, 183, 163) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body dt {
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body ol > li {
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body ul > li {
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(250, 242, 233);
  font-family: its-Bookerly, Bookerly, Inter;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body table {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  width: 196.766px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(250, 224, 190, 0.376);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(255, 249, 240);
  border-left-color: rgb(255, 249, 240);
  border-right-color: rgb(255, 249, 240);
  border-top-color: rgb(255, 249, 240);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(255, 249, 240);
  border-left-color: rgb(255, 249, 240);
  border-right-color: rgb(255, 249, 240);
  border-top-color: rgb(255, 249, 240);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

html[saved-theme="light"] body tr {
  background-color: rgb(205, 100, 94);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(104, 16, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(104, 16, 16);
  border-right-color: rgb(104, 16, 16);
  border-top-color: rgb(104, 16, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(104, 16, 16);
  font-family: "its-Fira Code", "Fira Code", Inter;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body figcaption {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(251, 226, 197);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(65, 47, 47);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 11px;
  border-left-color: rgb(205, 100, 94);
  border-left-width: 11px;
  border-right-color: rgb(65, 47, 47);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 11px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 11px;
  border-left-color: rgb(205, 100, 94);
  border-left-width: 11px;
  border-right-color: rgb(65, 47, 47);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 11px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(226, 183, 163);
  text-decoration: rgb(226, 183, 163);
  text-decoration-color: rgb(226, 183, 163);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(199, 89, 89);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(199, 89, 89);
  border-right-color: rgb(199, 89, 89);
  border-top-color: rgb(199, 89, 89);
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
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
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
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
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
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
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
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-left-width: 4px;
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
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
  background-color: rgba(250, 224, 190, 0.376);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 249, 240);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-left-width: 3px;
  border-right-color: rgba(251, 180, 87, 0.494);
  border-right-width: 3px;
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(251, 180, 87, 0.494) 5px 5px 0px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(182, 28, 28, 0.5);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-left-width: 3px;
  border-right-color: rgba(251, 180, 87, 0.494);
  border-right-width: 3px;
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 246, 228);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(182, 28, 28, 0.5);
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(182, 28, 28, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(205, 100, 94);
  border-bottom-color: rgb(205, 100, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(205, 100, 94);
  border-right-color: rgb(205, 100, 94);
  border-top-color: rgb(205, 100, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="light"] body h2 {
  color: rgb(244, 164, 96);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="light"] body h3 {
  color: rgb(161, 17, 17);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="light"] body h4 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="light"] body h5 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="light"] body h6 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(251, 226, 197);
  border-left-color: rgb(251, 226, 197);
  border-right-color: rgb(251, 226, 197);
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
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 700;
  text-decoration: rgb(65, 47, 47);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 700;
  text-decoration: rgb(65, 47, 47);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 500;
  text-decoration: rgb(65, 47, 47);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(205, 100, 94);
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
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(251, 226, 197);
  border-bottom-color: rgb(199, 89, 89);
  border-left-color: rgb(199, 89, 89);
  border-right-color: rgb(199, 89, 89);
  border-top-color: rgb(199, 89, 89);
  border-top-left-radius: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(65, 47, 47);
  stroke: rgb(65, 47, 47);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(226, 183, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(226, 183, 163);
  border-right-color: rgb(226, 183, 163);
  border-top-color: rgb(226, 183, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(226, 183, 163);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  color: rgb(105, 117, 128);
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
  font-family: its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(251, 226, 197);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body abbr {
  color: rgb(65, 47, 47);
  text-decoration: underline dotted rgb(65, 47, 47);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgb(104, 16, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(104, 16, 16);
  border-right-color: rgb(104, 16, 16);
  border-top-color: rgb(104, 16, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(251, 180, 87, 0.494) 0px 2px 0px 0px;
  color: rgb(104, 16, 16);
  font-family: "its-Fira Code", "Fira Code", Inter;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

html[saved-theme="light"] body sub {
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body summary {
  color: rgb(65, 47, 47);
}

html[saved-theme="light"] body sup {
  color: rgb(65, 47, 47);
}`,
  },
};
