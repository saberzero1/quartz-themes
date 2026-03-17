import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.rainbow",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #883737 !important;
  --accent-color: 134, 55, 55 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #3C5274 !important;
  --accent2-lite: #61AFEF !important;
  --aside-bg: #11151D !important;
  --background-image-blur: 11px !important;
  --background-image-height: 50% !important;
  --background-image-opacity: 90% !important;
  --background-image-sidebar-opacity: 90% !important;
  --background-image-url: url() !important;
  --background-image-width: 50% !important;
  --background-modifier-active-hover: #652121 !important;
  --background-modifier-border: #283846 !important;
  --background-modifier-border-focus: #883737 !important;
  --background-modifier-border-hover: #252C36 !important;
  --background-modifier-cover: rgba(6, 8, 12, 0.38) !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-hover: rgba(212, 47, 47, 0.4) !important;
  --background-modifier-message: #652121 !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #1A1E24 !important;
  --background-primary-alt: #0E0F15 !important;
  --background-secondary: #1A1E24 !important;
  --background-secondary-alt: #0E0F15 !important;
  --bases-cards-background: #1A1E24 !important;
  --bases-cards-cover-background: #0E0F15 !important;
  --bases-cards-font-size: .9em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #283846 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #252C36 !important;
  --bases-embed-border-color: #283846 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #AAB3CA !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .9em !important;
  --bases-table-border-color: #3C5274 !important;
  --bases-table-cell-background-active: #1A1E24 !important;
  --bases-table-cell-background-disabled: #0E0F15 !important;
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #883737 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7C2929 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .9em !important;
  --bases-table-group-background: #0E0F15 !important;
  --bases-table-header-background: #1A1E24 !important;
  --bases-table-header-background-hover: rgba(212, 47, 47, 0.4) !important;
  --bases-table-header-color: #AAB3CA !important;
  --bases-table-summary-background: #1A1E24 !important;
  --bases-table-summary-background-hover: rgba(212, 47, 47, 0.4) !important;
  --bg: #252C36 !important;
  --blockquote-background-color: #10161D !important;
  --blockquote-border-color: #252C36 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #BCCAD8 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #232831 65%, transparent) linear-gradient(#232831, color-mix(in srgb, #232831 65%, transparent)) !important;
  --bodyFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-color: #BCCAD8 !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #CFD7DD !important;
  --box-border-m: 3px solid #CFD7DD !important;
  --box-border-s: 1px solid #CFD7DD !important;
  --bttn: #7C2929 !important;
  --bullet: ⬥ !important;
  --bullet-font: "ITS" !important;
  --button-background: #7C2929 !important;
  --button-background-hover: #252C36 !important;
  --button-border: #7C2929 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #1A1E24 !important;
  --canvas-card-label-color: #4E5B6F !important;
  --canvas-color: 88, 100, 159 !important;
  --canvas-color-opacity: 0.08 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #BCCAD8 !important;
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
  --checkbox-border-color: #883737 !important;
  --checkbox-border-color-hover: #652121 !important;
  --checkbox-color: #883737 !important;
  --checkbox-color-hover: #652121 !important;
  --checkbox-marker-color: #1A1E24 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #586477 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #232831 !important;
  --code-bg: #232831 !important;
  --code-border-color: #283846 !important;
  --code-bracket-background: rgba(212, 47, 47, 0.4) !important;
  --code-comment: #4E5B6F !important;
  --code-normal: #FA4545 !important;
  --code-punctuation: #AAB3CA !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #CFD7DD !important;
  --code-size: .9em !important;
  --code-text: #FA4545 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4E5B6F !important;
  --collapse-icon-color-collapsed: #586477 !important;
  --color-accent: hsl(0, 49%, 49%) !important;
  --color-accent-1: hsl(-3, 49.98%, 56.35%) !important;
  --color-accent-2: hsl(-5, 51.45%, 63.21%) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: 'Fira Code Medium' !important;
  --dark: #BCCAD8 !important;
  --dark-accent: #652121 !important;
  --dark-sidebar: #10161D !important;
  --darkgray: #BCCAD8 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1) !important;
  --dataview-th-background: #0E0F15 !important;
  --dataview-th-border-bottom: 2px solid #C14343 !important;
  --dataview-th-color: #C14343 !important;
  --dataview-th-count-color: #C14343 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #3F1010 !important;
  --default-font: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Microsoft YaHei Light', sans-serif !important;
  --divider-color: #0E0F15 !important;
  --divider-color-hover: #883737 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #652121 !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: #232831 !important;
  --dropdown-background-hover: #10161D !important;
  --embed-bg: #10161D !important;
  --embed-block-shadow-hover: 2px 2px 0 #CFD7DD !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #CFD7DD !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #CFD7DD !important;
  --embed-border-left: 2px solid #C14343 !important;
  --embed-border-left-color: #C14343 !important;
  --embed-border-left-color-hover: #C14343 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #CFD7DD !important;
  --embed-border-start: 2px solid #7C2929 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #CFD7DD !important;
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
  --fg: #CFD7DD !important;
  --file-f: its !important;
  --file-font: "its" !important;
  --file-header-background: linear-gradient(to right, #652121, #0E0F15) !important;
  --file-header-background-focused: #1A1E24 !important;
  --file-header-breadcrumb-color: #586477 !important;
  --file-header-breadcrumb-font-size: 14px !important;
  --file-header-color: #586477 !important;
  --file-header-color-active: #BCCAD8 !important;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #652121 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #0E0F15 !important;
  --file-icon: "\\e800" !important;
  --file-icon-color: #586477 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #AAB3CA !important;
  --flair-background: #232831 !important;
  --flair-color: #BCCAD8 !important;
  --folder: #883737 !important;
  --folder-f: its !important;
  --folder-font: "its" !important;
  --folder-icon: "\\e801" !important;
  --folder-icon-color: #883737 !important;
  --folder-icon-open-color: #E05858 !important;
  --folder-open: #E05858 !important;
  --folder-open-text-color: #BCCAD8 !important;
  --folder-text-color: #AAB3CA !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-small: .95em !important;
  --font-smaller: .9em !important;
  --font-smallest: .88em !important;
  --font-text: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #6E7E89 !important;
  --footnote-divider-color: #283846 !important;
  --footnote-id-color: #AAB3CA !important;
  --footnote-id-color-no-occurrences: #4E5B6F !important;
  --footnote-input-background-active: rgba(6, 8, 12, 0.38) !important;
  --footnote-radius: 0 !important;
  --footnote-size: .9em !important;
  --graph-404: #727e93 !important;
  --graph-arrow: #AAB3CA !important;
  --graph-background: #0B0F13 !important;
  --graph-bg: #0B0F13 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #C14343 !important;
  --graph-focused: #FD737366 !important;
  --graph-img: #4C78CC !important;
  --graph-line: #571A1A !important;
  --graph-line-hover: #883737 !important;
  --graph-lines: #571A1A !important;
  --graph-node: #CFD7DD !important;
  --graph-node-attachment: #4C78CC !important;
  --graph-node-focused: #FD737366 !important;
  --graph-node-hover-fill: #C14343 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #C14343 !important;
  --graph-node-unresolved: #727e93 !important;
  --graph-tag: #C14343 !important;
  --graph-text: #BCCAD8 !important;
  --gray: #AAB3CA !important;
  --h1-background: transparent !important;
  --h1-border-color: #B03A3A !important;
  --h1-border-left-color: #912E2E !important;
  --h1-border-line-color: #912E2E !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #912E2E !important;
  --h1-border-width: 0 !important;
  --h1-color: #C14343 !important;
  --h1-font: "Calisto MT" !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: left !important;
  --h2-background: transparent !important;
  --h2-border-color: #D59929 !important;
  --h2-border-left-color: #C14343 !important;
  --h2-border-line-color: #C14343 !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 90% !important;
  --h2-border-right-color: #C14343 !important;
  --h2-border-width: 0 !important;
  --h2-color: #C14343 !important;
  --h2-font: "Calisto MT" !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: left !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #207A20 !important;
  --h3-border-left-color: #BF5E5E !important;
  --h3-border-line-color: #BF5E5E !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 70% !important;
  --h3-border-right-color: #BF5E5E !important;
  --h3-border-width: 0 !important;
  --h3-color: #C14343 !important;
  --h3-font: "Calisto MT" !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: left !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #3232C5 !important;
  --h4-border-left-color: #61AFEF !important;
  --h4-border-line-color: #61AFEF !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 40% !important;
  --h4-border-right-color: #61AFEF !important;
  --h4-border-width: 0 !important;
  --h4-color: #C14343 !important;
  --h4-font: "Calisto MT" !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 24px !important;
  --h4-text-align: left !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #7F307F !important;
  --h5-border-left-color: #2F3B4D !important;
  --h5-border-line-color: #2F3B4D !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 30% !important;
  --h5-border-right-color: #2F3B4D !important;
  --h5-border-width: 0 !important;
  --h5-color: #C14343 !important;
  --h5-font: "Calisto MT" !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: left !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #DD4794 !important;
  --h6-border-left-color: #2A2E35 !important;
  --h6-border-line-color: #2A2E35 !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0% !important;
  --h6-border-right-color: #2A2E35 !important;
  --h6-border-width: 0 !important;
  --h6-color: #C14343 !important;
  --h6-font: "Calisto MT" !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: left !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #C14343 !important;
  --he-text-on-accent-inactive: #BCCAD8 !important;
  --he-title-bar-active-action: #E06C75 !important;
  --he-title-bar-active-bg: #10161D !important;
  --he-title-bar-active-fg: #BCCAD8 !important;
  --he-title-bar-active-pinned-bg: #1A1E24 !important;
  --he-title-bar-inactive-action: #AAB3CA !important;
  --he-title-bar-inactive-bg: #1A1E24 !important;
  --he-title-bar-inactive-fg: #586477 !important;
  --he-title-bar-inactive-pinned-bg: #1A1E24 !important;
  --header-arrow-icon-color: #4E5B6F !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #283345 !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: left !important;
  --header-weight: 700 !important;
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #C14343 !important;
  --heading-formatting: #586477 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(122, 20, 20, 0.4) !important;
  --hr: #3C5274 !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #3C5274 !important;
  --hr-icon-background: #1A1E24 !important;
  --hr-icon-color: #883737 !important;
  --hr-icon-font: its !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "⚡" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(168, 60, 60, 0.4) !important;
  --hvr-active: rgba(212, 47, 47, 0.4) !important;
  --hvr2: rgba(122, 20, 20, 0.4) !important;
  --i-at: #BF5E5E !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #AAB3CA !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #BCCAD8 !important;
  --icon-color-hover: #BCCAD8 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #CFD7DD !important;
  --illusion-h1-background: #B03A3A !important;
  --illusion-h2-background: #D59929 !important;
  --illusion-h3-background: #207A20 !important;
  --illusion-h4-background: #3232C5 !important;
  --illusion-h5-background: #7F307F !important;
  --illusion-h6-background: #DD4794 !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: rgba(6, 8, 12, 0.38) !important;
  --image-border-color: #283846 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #586477 !important;
  --indentation-guide-color: #283846 !important;
  --indentation-guide-color-active: #883737 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #283846 !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #C14343 !important;
  --inline-title-font: Calisto MT !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4E5B6F !important;
  --input-placeholder-color: #4E5B6F !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #CFD7DD !important;
  --input-shadow-hover: 3px 3px 0 #CFD7DD !important;
  --interactive-accent: #7C2929 !important;
  --interactive-accent-hover: #252C36 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #10161D !important;
  --interactive-normal: #232831 !important;
  --italic-color: #BCCAD8 !important;
  --its: "its" !important;
  --kanban-button-background: #232831 !important;
  --kanban-button-shadow: 2px 2px 0 #CFD7DD !important;
  --kanban-card-border: 2px solid #CFD7DD !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #1A1E24 !important;
  --kanban-card-text-color: #BCCAD8 !important;
  --kanban-card-title-background: #1A1E24 !important;
  --kanban-card-title-border: 0px 2px 0 #CFD7DD !important;
  --kanban-lane-background: #232831 !important;
  --kanban-lane-border: 3px solid #CFD7DD !important;
  --kanban-lane-box-shadow: 2px 2px 0 #CFD7DD !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #61AFEF !important;
  --kanban-tag-background: #571A1A !important;
  --latex-color: #E06C75 !important;
  --latex-format-color: #586477 !important;
  --latex-syntax-color: #AAB3CA !important;
  --light: #1A1E24 !important;
  --lightgray: #1A1E24 !important;
  --line-height-tight: 1.3em !important;
  --lines: #283846 !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #61AFEF !important;
  --link-color-hover: #E06C75 !important;
  --link-decoration-color: #BCCAD8 !important;
  --link-decoration-hover: none !important;
  --link-decoration-thickness: 2px !important;
  --link-external-color: #61AFEF !important;
  --link-external-color-hover: #E06C75 !important;
  --link-external-font: "Inter" !important;
  --link-font: "Inter" !important;
  --link-transform: none !important;
  --link-unresolved-color: #586477 !important;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 500 !important;
  --list-bullet-box-shadow-color: #283345 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #283846 !important;
  --list-color-2: #283846 !important;
  --list-color-3: #283846 !important;
  --list-color-4: #283846 !important;
  --list-color-5: #283846 !important;
  --list-color-6: #283846 !important;
  --list-indent: 25px !important;
  --list-marker-color: #883737 !important;
  --list-marker-color-collapsed: #586477 !important;
  --list-marker-color-hover: #AAB3CA !important;
  --list-marker-color-other: #3C5274 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #883737 !important;
  --list-spacing: 1px !important;
  --lite-accent: #E06C75 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #1A1E24 !important;
  --menu-border-color: #252C36 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #CFD7DD !important;
  --message-border-color: #CFD7DD !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #CFD7DD !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #283846 !important;
  --metadata-button-text-color: #586477 !important;
  --metadata-divider-color: #283846 !important;
  --metadata-icon-color: #AAB3CA !important;
  --metadata-input-background-active: rgba(6, 8, 12, 0.38) !important;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: 0.9em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #BCCAD8 !important;
  --metadata-label-background-active: rgba(6, 8, 12, 0.38) !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: 0.9em !important;
  --metadata-label-text-color: #AAB3CA !important;
  --metadata-label-text-color-hover: #AAB3CA !important;
  --metadata-property-background-active: rgba(212, 47, 47, 0.4) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #883737 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #252C36 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #AAB3CA !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #1A1E24 !important;
  --modal-border-color: #CFD7DD !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: rgba(6, 8, 12, 0.38) !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #10161D !important;
  --nav-collapse-icon-color: #4E5B6F !important;
  --nav-collapse-icon-color-collapsed: #4E5B6F !important;
  --nav-heading-color: #BCCAD8 !important;
  --nav-heading-color-collapsed: #4E5B6F !important;
  --nav-heading-color-collapsed-hover: #AAB3CA !important;
  --nav-heading-color-hover: #BCCAD8 !important;
  --nav-indentation-guide-color: #283846 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #652121 !important;
  --nav-item-background-border-color-hover: #652121 !important;
  --nav-item-background-hover: #7C2929 !important;
  --nav-item-background-selected: rgba(168, 60, 60, 0.4) !important;
  --nav-item-border-color: #E06C75 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #AAB3CA !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #BCCAD8 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4E5B6F !important;
  --nav-tag-color-active: #AAB3CA !important;
  --nav-tag-color-hover: #AAB3CA !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #1A1E24 !important;
  --note-rgb: 26, 30, 36 !important;
  --note-title-border-color: #C14343 !important;
  --outer-bar: #0E0F15 !important;
  --outline: #CFD7DD !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #1A1E24 !important;
  --pdf-background: #1A1E24 !important;
  --pdf-page-background: #1A1E24 !important;
  --pdf-shadow: 0 0 0 1px #283846 !important;
  --pdf-sidebar-background: #1A1E24 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #283846 !important;
  --pill-border-color: #283846 !important;
  --pill-border-color-hover: #252C36 !important;
  --pill-color: #AAB3CA !important;
  --pill-color-hover: #BCCAD8 !important;
  --pill-color-remove: #4E5B6F !important;
  --pill-color-remove-hover: #61AFEF !important;
  --pill-radius: 0 !important;
  --popover-background: #1A1E24 !important;
  --popover-border: 3px solid #CFD7DD !important;
  --popover-max-height: 600px !important;
  --popover-width: 500px !important;
  --progress: #252C36 !important;
  --progress-bg: #252C36 !important;
  --prompt-background: #1A1E24 !important;
  --prompt-border-color: #CFD7DD !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #C14343 !important;
  --r-heading-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #E06C75 !important;
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
  --ribbon-background: #0E0F15 !important;
  --ribbon-background-collapsed: #1A1E24 !important;
  --ribbon-border-color: #0E0F15 !important;
  --ribbon-border-width: 0 !important;
  --ribbon-float-bottom: 45px !important;
  --ribbon-icon-gap: 15px !important;
  --ribbon-icon-size: 18px !important;
  --ribbon-icon-stroke: 1.75px !important;
  --ribbon-width: 40px !important;
  --rmx: "remixicon" !important;
  --root-list-bullet-spacing: 0 !important;
  --root-list-spacing: 10px !important;
  --rpg: "rpg-awesome" !important;
  --scroll-size: 7px !important;
  --scrollbar-active-thumb-bg: #E06C75 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #863737 !important;
  --scrollbar-track-bg: #1A1E24 !important;
  --search-border: 2px solid #CFD7DD !important;
  --search-box-shadow: 2px 2px 0 #CFD7DD !important;
  --search-clear-button-color: #AAB3CA !important;
  --search-icon-color: #AAB3CA !important;
  --search-result-background: #1A1E24 !important;
  --secondary: #61AFEF !important;
  --setting-group-heading-color: #BCCAD8 !important;
  --setting-item-alt-background-hover: rgba(6, 8, 12, 0.38) !important;
  --setting-item-background-hover: rgba(168, 60, 60, 0.4) !important;
  --setting-item-border-color: #283345 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #C14343 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: rgba(6, 8, 12, 0.38) !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #283846 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #CFD7DD !important;
  --shadow-m: 3px 3px 0 #CFD7DD !important;
  --shadow-ml: 4px 4px 0 #CFD7DD !important;
  --shadow-s: 2px 2px 0 #CFD7DD !important;
  --side-bar: #1A1E24 !important;
  --side-bar-bg: #0E0F15 !important;
  --sidebar-icon-color: #BCCAD8 !important;
  --sidebar-icon-color-active: #E5EBEE !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #7C2929 !important;
  --sidebar-tab-background-color-hover: #883737 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #7C2929 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #1A1E24 !important;
  --slider-thumb-border-color: #252C36 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #283846 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #AAB3CA !important;
  --statblock-alt: rgba(6, 8, 12, 0.38) !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #1A1E24 !important;
  --statblock-bar-border-color: #883737 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #883737 !important;
  --statblock-border-color: #283846 !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #CFD7DD !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #BCCAD8 !important;
  --statblock-heading-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --statblock-heading-font-color: #C14343 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #3C5274 !important;
  --statblock-primary-color: #BCCAD8 !important;
  --statblock-property-font-color: #BCCAD8 !important;
  --statblock-property-name-font-color: #C14343 !important;
  --statblock-rule-color: #883737 !important;
  --statblock-section-heading-border-color: #283345 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Calisto MT" !important;
  --statblock-section-heading-font-color: #6E7E89 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #0E0F15 !important;
  --status-bar-border-color: #883737 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #AAB3CA !important;
  --strikethrough-color: #BCCAD8 !important;
  --strikethrough-line-color: #BCCAD8 !important;
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
  --suggestion-background: #1A1E24 !important;
  --tab-background: #0E0F15 !important;
  --tab-background-active: #1A1E24 !important;
  --tab-container-background: #0E0F15 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #3C5274 !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #883737 !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #001C4A15 !important;
  --tab-stacked-shadow-color: #001C4A15 !important;
  --tab-switcher-background: #1A1E24 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1A1E24, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #CFD7DD !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #CFD7DD !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #E06C75, 5px 5px 0 #CFD7DD !important;
  --tab-text-color: #586477 !important;
  --tab-text-color-active: #BCCAD8 !important;
  --tab-text-color-focused: #586477 !important;
  --tab-text-color-focused-active: #BCCAD8 !important;
  --tab-text-color-focused-active-current: #BCCAD8 !important;
  --tab-text-color-focused-highlighted: #61AFEF !important;
  --tab-text-color-hover: #BCCAD8 !important;
  --tab-top-outline-width: 0 !important;
  --table: #283345 !important;
  --table-add-button-background: #7C2929 !important;
  --table-add-button-border-color: #1A1E24 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #3C5274 !important;
  --table-cell-padding-x: 10px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-background-hover: transparent !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #7C2929 !important;
  --table-drag-handle-color: #4E5B6F !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #652121 !important;
  --table-header-background-hover: #883737 !important;
  --table-header-border-color: #3C5274 !important;
  --table-header-color: #E5EBEE !important;
  --table-header-padding-x: 10px !important;
  --table-header-padding-y: 4px !important;
  --table-header-text-color: #E06C75 !important;
  --table-header-weight: 800 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background-hover: rgba(122, 20, 20, 0.4) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: hsla(0, 49%, 49%, 0.1) !important;
  --table-selection-border-color: #7C2929 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #571A1A !important;
  --tag-background: #571A1A !important;
  --tag-background-color: #571A1A !important;
  --tag-background-hover: #883737 !important;
  --tag-border-color: #571A1A !important;
  --tag-border-color-hover: #883737 !important;
  --tag-border-radius: 25px !important;
  --tag-border-width: 2px !important;
  --tag-color: #E5EBEE !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter" !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 25px !important;
  --tag-size: .9em !important;
  --tag-text: #d04e4e !important;
  --tall: 700px !important;
  --td: rgba(6, 8, 12, 0.38) !important;
  --tertiary: #E06C75 !important;
  --text: #BCCAD8 !important;
  --text-accent: #61AFEF !important;
  --text-accent-hover: #E06C75 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4E5B6F !important;
  --text-highlight-bg: rgba(122, 20, 20, 0.4) !important;
  --text-highlight-bg-active: rgba(253, 115, 115, 0.25) !important;
  --text-muted: #AAB3CA !important;
  --text-normal: #BCCAD8 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(122, 20, 20, 0.4) !important;
  --textHighlight: rgba(122, 20, 20, 0.4) !important;
  --th: #652121 !important;
  --th-text: #E5EBEE !important;
  --theme-rainbow-1: #B03A3A !important;
  --theme-rainbow-2: #D59929 !important;
  --theme-rainbow-3: #207A20 !important;
  --theme-rainbow-4: #3232C5 !important;
  --theme-rainbow-5: #7F307F !important;
  --theme-rainbow-6: #DD4794 !important;
  --tiny: 100px !important;
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #1A1E24 !important;
  --titlebar-background-focused: #0E0F15 !important;
  --titlebar-border-color: #283846 !important;
  --titlebar-text-color: #BCCAD8 !important;
  --titlebar-text-color-focused: #BCCAD8 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --vault-icon-image: url() !important;
  --vault-name-color: #C14343 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 900px !important;
  --vault-profile-color: #BCCAD8 !important;
  --vault-profile-color-hover: #BCCAD8 !important;
  --vault-profile-font-size: 14px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 15, 21);
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
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
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
  background-color: rgba(122, 20, 20, 0.4);
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
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(97, 175, 239);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: underline 2px rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: underline 2px rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(88, 100, 119) none 0px;
  text-decoration: underline 2px rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
  text-decoration-thickness: 2px;
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
  background-color: rgb(16, 22, 29);
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
  width: 207.125px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(60, 82, 116);
  border-left-color: rgb(60, 82, 116);
  border-right-color: rgb(60, 82, 116);
  border-top-color: rgb(60, 82, 116);
  color: rgb(188, 202, 216);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(60, 82, 116);
  border-left-color: rgb(60, 82, 116);
  border-right-color: rgb(60, 82, 116);
  border-top-color: rgb(60, 82, 116);
  color: rgb(229, 235, 238);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
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
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
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
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
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
  border-left-color: rgb(124, 41, 41);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(124, 41, 41);
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
  border-bottom-color: rgb(136, 55, 55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(136, 55, 55);
  border-right-color: rgb(136, 55, 55);
  border-top-color: rgb(136, 55, 55);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
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
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
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
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(168, 130, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 3px;
  border-right-color: rgb(168, 130, 255);
  border-top-color: rgb(168, 130, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: hsl(0, 49%, 49%);
  background-color: rgb(26, 30, 36);
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
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(68, 207, 110);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 3px;
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(207, 215, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(207, 215, 221);
  border-left-width: 3px;
  border-right-color: rgb(207, 215, 221);
  border-right-width: 3px;
  border-top-color: rgb(207, 215, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(207, 215, 221) 5px 5px 0px 0px;
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
  background-color: rgba(212, 47, 47, 0.4);
  color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(207, 215, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(207, 215, 221);
  border-left-width: 3px;
  border-right-color: rgb(207, 215, 221);
  border-right-width: 3px;
  border-top-color: rgb(207, 215, 221);
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
  background-color: rgb(87, 26, 26);
  border-bottom-color: rgb(87, 26, 26);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-width: 2px;
  border-left-color: rgb(87, 26, 26);
  border-left-width: 2px;
  border-right-color: rgb(87, 26, 26);
  border-right-width: 2px;
  border-top-color: rgb(87, 26, 26);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-width: 2px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="dark"] body h2 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="dark"] body h3 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="dark"] body h4 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="dark"] body h5 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="dark"] body h6 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(136, 55, 55);
  border-left-color: rgb(136, 55, 55);
  border-right-color: rgb(136, 55, 55);
  border-top-color: rgb(136, 55, 55);
  border-top-left-radius: 0px;
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(170, 179, 202);
  stroke: rgb(170, 179, 202);
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
  border-bottom-color: rgb(40, 56, 70);
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(14, 15, 21);
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
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  box-shadow: rgb(207, 215, 221) 0px 2px 0px 0px;
  color: rgb(250, 69, 69);
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
  --accent: #C14343 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #D6DEEA !important;
  --accent2-lite: #5599D0 !important;
  --aside-bg: #F1F5FF !important;
  --background-image-blur: 11px !important;
  --background-image-height: 50% !important;
  --background-image-opacity: 90% !important;
  --background-image-sidebar-opacity: 90% !important;
  --background-image-url: url() !important;
  --background-image-width: 50% !important;
  --background-modifier-active-hover: #C35C5C !important;
  --background-modifier-border: #CCD6EB !important;
  --background-modifier-border-focus: #C14343 !important;
  --background-modifier-border-hover: #DDE4EF !important;
  --background-modifier-cover: rgba(208, 221, 239, 0.38) !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: rgba(208, 221, 239, 0.38) !important;
  --background-modifier-form-field-hover: rgba(208, 221, 239, 0.38) !important;
  --background-modifier-hover: rgba(253, 115, 115, 0.4) !important;
  --background-modifier-message: #C35C5C !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #F8FBFF !important;
  --background-primary-alt: #DFE7EF !important;
  --background-secondary: #F8FBFF !important;
  --background-secondary-alt: #DFE7EF !important;
  --bases-cards-background: #F8FBFF !important;
  --bases-cards-cover-background: #DFE7EF !important;
  --bases-cards-font-size: .9em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #CCD6EB !important;
  --bases-cards-shadow-hover: 0 0 0 1px #DDE4EF !important;
  --bases-embed-border-color: #CCD6EB !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #D04E4E !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .9em !important;
  --bases-table-border-color: #D6DEEA !important;
  --bases-table-cell-background-active: #F8FBFF !important;
  --bases-table-cell-background-disabled: #DFE7EF !important;
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #C14343 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #C24747 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .9em !important;
  --bases-table-group-background: #DFE7EF !important;
  --bases-table-header-background: #F8FBFF !important;
  --bases-table-header-background-hover: rgba(253, 115, 115, 0.4) !important;
  --bases-table-header-color: #D04E4E !important;
  --bases-table-summary-background: #F8FBFF !important;
  --bases-table-summary-background-hover: rgba(253, 115, 115, 0.4) !important;
  --bg: #DDE4EF !important;
  --blockquote-background-color: #F1F5FF !important;
  --blockquote-border-color: #DDE4EF !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #697580 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #F8FBFF 65%, transparent) linear-gradient(#F8FBFF, color-mix(in srgb, #F8FBFF 65%, transparent)) !important;
  --bodyFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-color: #697580 !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #912E2E !important;
  --box-border-m: 3px solid #912E2E !important;
  --box-border-s: 1px solid #912E2E !important;
  --bttn: #C24747 !important;
  --bullet: ⬥ !important;
  --bullet-font: "ITS" !important;
  --button-background: #C24747 !important;
  --button-background-hover: #DDE4EF !important;
  --button-border: #C24747 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #F8FBFF !important;
  --canvas-card-label-color: #4E5B6F !important;
  --canvas-color: 166, 180, 204 !important;
  --canvas-color-opacity: 0.08 !important;
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
  --checkbox-border-color: #C14343 !important;
  --checkbox-border-color-hover: #C35C5C !important;
  --checkbox-color: #C14343 !important;
  --checkbox-color-hover: #C35C5C !important;
  --checkbox-marker-color: #F8FBFF !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #A6BBDE !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #EEF6FF !important;
  --code-bg: #EEF6FF !important;
  --code-border-color: #CCD6EB !important;
  --code-bracket-background: rgba(253, 115, 115, 0.4) !important;
  --code-comment: #4E5B6F !important;
  --code-normal: #EA4262 !important;
  --code-punctuation: #D04E4E !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #912E2E !important;
  --code-size: .9em !important;
  --code-text: #EA4262 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4E5B6F !important;
  --collapse-icon-color-collapsed: #A6BBDE !important;
  --color-accent: hsl(0, 49%, 49%) !important;
  --color-accent-1: hsl(-1, 49.49%, 52.675%) !important;
  --color-accent-2: hsl(-3, 49.98%, 56.35%) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: 'Fira Code Medium' !important;
  --dark: #697580 !important;
  --dark-accent: #C35C5C !important;
  --dark-sidebar: #7E8EA3 !important;
  --darkgray: #697580 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-background: #DFE7EF !important;
  --dataview-th-border-bottom: 2px solid #D04E4E !important;
  --dataview-th-color: #D04E4E !important;
  --dataview-th-count-color: #D04E4E !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 700 !important;
  --deep-dark-accent: #2F1010 !important;
  --default-font: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Microsoft YaHei Light', sans-serif !important;
  --divider-color: #DFE7EF !important;
  --divider-color-hover: #C14343 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #C35C5C !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #EEF6FF !important;
  --dropdown-background-hover: #F1F5FF !important;
  --embed-bg: #F1F5FF !important;
  --embed-block-shadow-hover: 2px 2px 0 #912E2E !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #912E2E !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #912E2E !important;
  --embed-border-left: 2px solid #D04E4E !important;
  --embed-border-left-color: #D04E4E !important;
  --embed-border-left-color-hover: #D04E4E !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #912E2E !important;
  --embed-border-start: 2px solid #C24747 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #912E2E !important;
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
  --fg: #912E2E !important;
  --file-f: its !important;
  --file-font: "its" !important;
  --file-header-background: linear-gradient(to right, #C35C5C, #DFE7EF) !important;
  --file-header-background-focused: #F8FBFF !important;
  --file-header-breadcrumb-color: #A6BBDE !important;
  --file-header-breadcrumb-font-size: 14px !important;
  --file-header-color: #A6BBDE !important;
  --file-header-color-active: #697580 !important;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #C35C5C !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #DFE7EF !important;
  --file-icon: "\\e800" !important;
  --file-icon-color: #A6BBDE !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #7E8EA3 !important;
  --flair-background: #EEF6FF !important;
  --flair-color: #697580 !important;
  --folder: #C14343 !important;
  --folder-f: its !important;
  --folder-font: "its" !important;
  --folder-icon: "\\e801" !important;
  --folder-icon-color: #C14343 !important;
  --folder-icon-open-color: #CE6D6D !important;
  --folder-open: #CE6D6D !important;
  --folder-open-text-color: #697580 !important;
  --folder-text-color: #7E8EA3 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-frontmatter: .95em !important;
  --font-interface: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ligatures: none !important;
  --font-mermaid: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --font-small: .95em !important;
  --font-smaller: .9em !important;
  --font-smallest: .88em !important;
  --font-text: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13.5px !important;
  --footnote: #8996A0 !important;
  --footnote-divider-color: #CCD6EB !important;
  --footnote-id-color: #D04E4E !important;
  --footnote-id-color-no-occurrences: #4E5B6F !important;
  --footnote-input-background-active: rgba(208, 221, 239, 0.38) !important;
  --footnote-radius: 0 !important;
  --footnote-size: .9em !important;
  --graph-404: #727e93 !important;
  --graph-arrow: #D04E4E !important;
  --graph-background: #EEF3FD !important;
  --graph-bg: #EEF3FD !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #C14343 !important;
  --graph-focused: #FD737366 !important;
  --graph-img: #4C78CC !important;
  --graph-line: #E4E7F8 !important;
  --graph-line-hover: #C14343 !important;
  --graph-lines: #E4E7F8 !important;
  --graph-node: #C14343 !important;
  --graph-node-attachment: #4C78CC !important;
  --graph-node-focused: #FD737366 !important;
  --graph-node-hover-fill: #C14343 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #000000 !important;
  --graph-node-unresolved: #727e93 !important;
  --graph-tag: #000000 !important;
  --graph-text: #697580 !important;
  --gray: #D04E4E !important;
  --h1-background: transparent !important;
  --h1-border-color: #DD3C3C !important;
  --h1-border-left-color: #BB5555 !important;
  --h1-border-line-color: #BB5555 !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #BB5555 !important;
  --h1-border-width: 0 !important;
  --h1-color: #C14343 !important;
  --h1-font: "Calisto MT" !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: left !important;
  --h2-background: transparent !important;
  --h2-border-color: #F1AB27 !important;
  --h2-border-left-color: #C14343 !important;
  --h2-border-line-color: #C14343 !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 90% !important;
  --h2-border-right-color: #C14343 !important;
  --h2-border-width: 0 !important;
  --h2-color: #C14343 !important;
  --h2-font: "Calisto MT" !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: left !important;
  --h2-weight: 700 !important;
  --h3-background: transparent !important;
  --h3-border-color: #118811 !important;
  --h3-border-left-color: #CE6D6D !important;
  --h3-border-line-color: #CE6D6D !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 70% !important;
  --h3-border-right-color: #CE6D6D !important;
  --h3-border-width: 0 !important;
  --h3-color: #C14343 !important;
  --h3-font: "Calisto MT" !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: left !important;
  --h3-weight: 700 !important;
  --h4-background: transparent !important;
  --h4-border-color: #3333CC !important;
  --h4-border-left-color: #5599D0 !important;
  --h4-border-line-color: #5599D0 !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 40% !important;
  --h4-border-right-color: #5599D0 !important;
  --h4-border-width: 0 !important;
  --h4-color: #C14343 !important;
  --h4-font: "Calisto MT" !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 24px !important;
  --h4-text-align: left !important;
  --h4-weight: 700 !important;
  --h5-background: transparent !important;
  --h5-border-color: #A824A8 !important;
  --h5-border-left-color: #B5C2D8 !important;
  --h5-border-line-color: #B5C2D8 !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 30% !important;
  --h5-border-right-color: #B5C2D8 !important;
  --h5-border-width: 0 !important;
  --h5-color: #C14343 !important;
  --h5-font: "Calisto MT" !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: left !important;
  --h5-weight: 700 !important;
  --h6-background: transparent !important;
  --h6-border-color: #E83B94 !important;
  --h6-border-left-color: #CCD6EB !important;
  --h6-border-line-color: #CCD6EB !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0% !important;
  --h6-border-right-color: #CCD6EB !important;
  --h6-border-width: 0 !important;
  --h6-color: #C14343 !important;
  --h6-font: "Calisto MT" !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: left !important;
  --h6-weight: 700 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #D04E4E !important;
  --he-text-on-accent-inactive: #697580 !important;
  --he-title-bar-active-action: #A35158 !important;
  --he-title-bar-active-bg: #F1F5FF !important;
  --he-title-bar-active-fg: #697580 !important;
  --he-title-bar-active-pinned-bg: #F8FBFF !important;
  --he-title-bar-inactive-action: #D04E4E !important;
  --he-title-bar-inactive-bg: #F8FBFF !important;
  --he-title-bar-inactive-fg: #A6BBDE !important;
  --he-title-bar-inactive-pinned-bg: #F8FBFF !important;
  --header-arrow-icon-color: #4E5B6F !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #ccd6eb !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: left !important;
  --header-weight: 700 !important;
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #D04E4E !important;
  --heading-formatting: #A6BBDE !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(229, 149, 149, 0.37) !important;
  --hr: #D6DEEA !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #D6DEEA !important;
  --hr-icon-background: #F8FBFF !important;
  --hr-icon-color: #C14343 !important;
  --hr-icon-font: its !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "⚡" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(255, 0, 0, 0.21) !important;
  --hvr-active: rgba(253, 115, 115, 0.4) !important;
  --hvr2: rgba(229, 149, 149, 0.37) !important;
  --i-at: #C14343 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #D04E4E !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #697580 !important;
  --icon-color-hover: #697580 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #912E2E !important;
  --illusion-h1-background: #DD3C3C !important;
  --illusion-h2-background: #F1AB27 !important;
  --illusion-h3-background: #118811 !important;
  --illusion-h4-background: #3333CC !important;
  --illusion-h5-background: #A824A8 !important;
  --illusion-h6-background: #E83B94 !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: rgba(208, 221, 239, 0.38) !important;
  --image-border-color: #CCD6EB !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #A6BBDE !important;
  --indentation-guide-color: #CCD6EB !important;
  --indentation-guide-color-active: #C14343 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #CCD6EB !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #C14343 !important;
  --inline-title-font: Calisto MT !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --input-bg: rgba(208, 221, 239, 0.38) !important;
  --input-date-separator: #4E5B6F !important;
  --input-placeholder-color: #4E5B6F !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #912E2E !important;
  --input-shadow-hover: 3px 3px 0 #912E2E !important;
  --interactive-accent: #C24747 !important;
  --interactive-accent-hover: #DDE4EF !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #F1F5FF !important;
  --interactive-normal: #EEF6FF !important;
  --italic-color: #697580 !important;
  --its: "its" !important;
  --kanban-button-background: #EEF6FF !important;
  --kanban-button-shadow: 2px 2px 0 #912E2E !important;
  --kanban-card-border: 2px solid #912E2E !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #F8FBFF !important;
  --kanban-card-text-color: #697580 !important;
  --kanban-card-title-background: #F8FBFF !important;
  --kanban-card-title-border: 0px 2px 0 #912E2E !important;
  --kanban-lane-background: #EEF6FF !important;
  --kanban-lane-border: 3px solid #912E2E !important;
  --kanban-lane-box-shadow: 2px 2px 0 #912E2E !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #5599D0 !important;
  --kanban-tag-background: #C65656 !important;
  --latex-color: #A35158 !important;
  --latex-format-color: #A6BBDE !important;
  --latex-syntax-color: #D04E4E !important;
  --light: #F8FBFF !important;
  --lightgray: #F8FBFF !important;
  --line-height-tight: 1.3em !important;
  --lines: #CCD6EB !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #5599D0 !important;
  --link-color-hover: #A35158 !important;
  --link-decoration-color: #697580 !important;
  --link-decoration-hover: none !important;
  --link-decoration-thickness: 2px !important;
  --link-external-color: #5599D0 !important;
  --link-external-color-hover: #A35158 !important;
  --link-external-font: "Inter" !important;
  --link-font: "Inter" !important;
  --link-transform: none !important;
  --link-unresolved-color: #A6BBDE !important;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 500 !important;
  --list-bullet-box-shadow-color: #ccd6eb !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #CCD6EB !important;
  --list-color-2: #CCD6EB !important;
  --list-color-3: #CCD6EB !important;
  --list-color-4: #CCD6EB !important;
  --list-color-5: #CCD6EB !important;
  --list-color-6: #CCD6EB !important;
  --list-indent: 25px !important;
  --list-marker-color: #C14343 !important;
  --list-marker-color-collapsed: #A6BBDE !important;
  --list-marker-color-hover: #D04E4E !important;
  --list-marker-color-other: #D6DEEA !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #C14343 !important;
  --list-spacing: 1px !important;
  --lite-accent: #A35158 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #F8FBFF !important;
  --menu-border-color: #DDE4EF !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #912E2E !important;
  --message-border-color: #912E2E !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #912E2E !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #CCD6EB !important;
  --metadata-button-text-color: #A6BBDE !important;
  --metadata-divider-color: #CCD6EB !important;
  --metadata-icon-color: #D04E4E !important;
  --metadata-input-background-active: rgba(208, 221, 239, 0.38) !important;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: 0.9em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #697580 !important;
  --metadata-label-background-active: rgba(208, 221, 239, 0.38) !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: 0.9em !important;
  --metadata-label-text-color: #D04E4E !important;
  --metadata-label-text-color-hover: #D04E4E !important;
  --metadata-property-background-active: rgba(253, 115, 115, 0.4) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #C14343 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #DDE4EF !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #D04E4E !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #F8FBFF !important;
  --modal-border-color: #912E2E !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: rgba(208, 221, 239, 0.38) !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #7E8EA3 !important;
  --nav-collapse-icon-color: #4E5B6F !important;
  --nav-collapse-icon-color-collapsed: #4E5B6F !important;
  --nav-heading-color: #697580 !important;
  --nav-heading-color-collapsed: #4E5B6F !important;
  --nav-heading-color-collapsed-hover: #D04E4E !important;
  --nav-heading-color-hover: #697580 !important;
  --nav-indentation-guide-color: #CCD6EB !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #C35C5C !important;
  --nav-item-background-border-color-hover: #C35C5C !important;
  --nav-item-background-hover: #C24747 !important;
  --nav-item-background-selected: rgba(255, 0, 0, 0.21) !important;
  --nav-item-border-color: #A35158 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #7E8EA3 !important;
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
  --nav-tag-color: #4E5B6F !important;
  --nav-tag-color-active: #D04E4E !important;
  --nav-tag-color-hover: #D04E4E !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #F8FBFF !important;
  --note-rgb: 248, 251, 255 !important;
  --note-title-border-color: #D04E4E !important;
  --outer-bar: #DFE7EF !important;
  --outline: #912E2E !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #F8FBFF !important;
  --pdf-background: #F8FBFF !important;
  --pdf-page-background: #F8FBFF !important;
  --pdf-sidebar-background: #F8FBFF !important;
  --pill-border-color: #CCD6EB !important;
  --pill-border-color-hover: #DDE4EF !important;
  --pill-color: #D04E4E !important;
  --pill-color-hover: #697580 !important;
  --pill-color-remove: #4E5B6F !important;
  --pill-color-remove-hover: #5599D0 !important;
  --pill-radius: 0 !important;
  --popover-background: #F8FBFF !important;
  --popover-border: 3px solid #912E2E !important;
  --popover-max-height: 600px !important;
  --popover-width: 500px !important;
  --progress: #E1E9F6 !important;
  --progress-bg: #DDE4EF !important;
  --prompt-background: #F8FBFF !important;
  --prompt-border-color: #912E2E !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #D04E4E !important;
  --r-heading-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --r-heading-font-weight: 700 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #A35158 !important;
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
  --raised-background: color-mix(in srgb, #F8FBFF 65%, transparent) linear-gradient(#F8FBFF, color-mix(in srgb, #F8FBFF 65%, transparent)) !important;
  --ribbon-background: #DFE7EF !important;
  --ribbon-background-collapsed: #F8FBFF !important;
  --ribbon-border-color: #DFE7EF !important;
  --ribbon-border-width: 0 !important;
  --ribbon-float-bottom: 45px !important;
  --ribbon-icon-gap: 15px !important;
  --ribbon-icon-size: 18px !important;
  --ribbon-icon-stroke: 1.75px !important;
  --ribbon-width: 40px !important;
  --rmx: "remixicon" !important;
  --root-list-bullet-spacing: 0 !important;
  --root-list-spacing: 10px !important;
  --rpg: "rpg-awesome" !important;
  --scroll-size: 7px !important;
  --scrollbar-active-thumb-bg: #A35158 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #86ADDA28 !important;
  --scrollbar-track-bg: #F8FBFF !important;
  --search-border: 2px solid #912E2E !important;
  --search-box-shadow: 2px 2px 0 #912E2E !important;
  --search-clear-button-color: #D04E4E !important;
  --search-icon-color: #D04E4E !important;
  --search-result-background: #F8FBFF !important;
  --secondary: #5599D0 !important;
  --setting-group-heading-color: #697580 !important;
  --setting-item-alt-background-hover: rgba(208, 221, 239, 0.38) !important;
  --setting-item-background-hover: rgba(255, 0, 0, 0.21) !important;
  --setting-item-border-color: #ccd6eb !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #D04E4E !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: rgba(208, 221, 239, 0.38) !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #CCD6EB !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #912E2E !important;
  --shadow-m: 3px 3px 0 #912E2E !important;
  --shadow-ml: 4px 4px 0 #912E2E !important;
  --shadow-s: 2px 2px 0 #912E2E !important;
  --side-bar: #F8FBFF !important;
  --side-bar-bg: #DFE7EF !important;
  --sidebar-icon-color: #697580 !important;
  --sidebar-icon-color-active: #E5EBEE !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #C24747 !important;
  --sidebar-tab-background-color-hover: #C14343 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #C24747 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #F8FBFF !important;
  --slider-thumb-border-color: #DDE4EF !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #CCD6EB !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #D04E4E !important;
  --statblock-alt: rgba(208, 221, 239, 0.38) !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #F8FBFF !important;
  --statblock-bar-border-color: #C14343 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #C14343 !important;
  --statblock-border-color: #CCD6EB !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #912E2E !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #697580 !important;
  --statblock-heading-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --statblock-heading-font-color: #D04E4E !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 700 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #D6DEEA !important;
  --statblock-primary-color: #697580 !important;
  --statblock-property-font-color: #697580 !important;
  --statblock-property-name-font-color: #D04E4E !important;
  --statblock-rule-color: #C14343 !important;
  --statblock-section-heading-border-color: #ccd6eb !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Calisto MT" !important;
  --statblock-section-heading-font-color: #8996A0 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 700 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #DFE7EF !important;
  --status-bar-border-color: #C14343 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #D04E4E !important;
  --strikethrough-color: #697580 !important;
  --strikethrough-line-color: #697580 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #C35C5C !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #599049 !important;
  --suggestion-background: #F8FBFF !important;
  --tab-background: #DFE7EF !important;
  --tab-background-active: #F8FBFF !important;
  --tab-container-background: #DFE7EF !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #D6DEEA !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #C14343 !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #001C4A15 !important;
  --tab-stacked-shadow-color: #001C4A15 !important;
  --tab-switcher-background: #F8FBFF !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F8FBFF, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #912E2E !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #912E2E !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #A35158, 5px 5px 0 #912E2E !important;
  --tab-text-color: #A6BBDE !important;
  --tab-text-color-active: #697580 !important;
  --tab-text-color-focused: #A6BBDE !important;
  --tab-text-color-focused-active: #697580 !important;
  --tab-text-color-focused-active-current: #697580 !important;
  --tab-text-color-focused-highlighted: #5599D0 !important;
  --tab-text-color-hover: #697580 !important;
  --tab-top-outline-width: 0 !important;
  --table: #ccd6eb !important;
  --table-add-button-background: #C24747 !important;
  --table-add-button-border-color: #F8FBFF !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #D6DEEA !important;
  --table-cell-padding-x: 10px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-background-hover: transparent !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #C24747 !important;
  --table-drag-handle-color: #4E5B6F !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #C14343 !important;
  --table-header-background-hover: #C14343 !important;
  --table-header-border-color: #D6DEEA !important;
  --table-header-color: #E5EBEE !important;
  --table-header-padding-x: 10px !important;
  --table-header-padding-y: 4px !important;
  --table-header-text-color: #A35158 !important;
  --table-header-weight: 800 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background-hover: rgba(229, 149, 149, 0.37) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: hsla(0, 49%, 49%, 0.1) !important;
  --table-selection-border-color: #C24747 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #C65656 !important;
  --tag-background: #C65656 !important;
  --tag-background-color: #C65656 !important;
  --tag-background-hover: #C14343 !important;
  --tag-border-color: #C65656 !important;
  --tag-border-color-hover: #C14343 !important;
  --tag-border-radius: 25px !important;
  --tag-border-width: 2px !important;
  --tag-color: #E5EBEE !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter" !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 25px !important;
  --tag-size: .9em !important;
  --tag-text: #A35158 !important;
  --tall: 700px !important;
  --td: rgba(208, 221, 239, 0.38) !important;
  --tertiary: #A35158 !important;
  --text: #697580 !important;
  --text-accent: #5599D0 !important;
  --text-accent-hover: #A35158 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4E5B6F !important;
  --text-highlight-bg: rgba(229, 149, 149, 0.37) !important;
  --text-highlight-bg-active: rgba(253, 115, 115, 0.25) !important;
  --text-muted: #D04E4E !important;
  --text-normal: #697580 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(229, 149, 149, 0.37) !important;
  --textHighlight: rgba(229, 149, 149, 0.37) !important;
  --th: #C14343 !important;
  --th-text: #E5EBEE !important;
  --theme-rainbow-1: #DD3C3C !important;
  --theme-rainbow-2: #F1AB27 !important;
  --theme-rainbow-3: #118811 !important;
  --theme-rainbow-4: #3333CC !important;
  --theme-rainbow-5: #A824A8 !important;
  --theme-rainbow-6: #E83B94 !important;
  --tiny: 100px !important;
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #F8FBFF !important;
  --titlebar-background-focused: #DFE7EF !important;
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
  --vault-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif !important;
  --vault-icon-image: url() !important;
  --vault-name-color: #C14343 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 900px !important;
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
  background-color: rgb(223, 231, 239);
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
  border-right-color: rgb(223, 231, 239);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(223, 231, 239);
  border-left-color: rgb(223, 231, 239);
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
  background-color: rgba(229, 149, 149, 0.37);
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
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(208, 78, 78) none 0px;
  text-decoration: rgb(208, 78, 78);
  text-decoration-color: rgb(208, 78, 78);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(85, 153, 208);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(85, 153, 208) none 0px;
  text-decoration: underline 2px rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 153, 208);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(85, 153, 208) none 0px;
  text-decoration: underline 2px rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(166, 187, 222) none 0px;
  text-decoration: underline 2px rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
  text-decoration-thickness: 2px;
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
  width: 207.125px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(214, 222, 234);
  border-left-color: rgb(214, 222, 234);
  border-right-color: rgb(214, 222, 234);
  border-top-color: rgb(214, 222, 234);
  color: rgb(105, 117, 128);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(214, 222, 234);
  border-left-color: rgb(214, 222, 234);
  border-right-color: rgb(214, 222, 234);
  border-top-color: rgb(214, 222, 234);
  color: rgb(229, 235, 238);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(193, 67, 67);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(238, 246, 255);
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
  background-color: rgb(238, 246, 255);
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
  background-color: rgb(238, 246, 255);
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
  background-color: rgb(238, 246, 255);
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
  background-color: rgb(223, 231, 239);
  border-bottom-color: rgb(208, 78, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
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
  border-left-color: rgb(194, 71, 71);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(194, 71, 71);
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
  border-bottom-color: rgb(193, 67, 67);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
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
  color: rgb(208, 78, 78);
  text-decoration: rgb(208, 78, 78);
  text-decoration-color: rgb(208, 78, 78);
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
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
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
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 3px;
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 3px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 3px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(120, 82, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(120, 82, 238);
  border-left-width: 3px;
  border-right-color: rgb(120, 82, 238);
  border-top-color: rgb(120, 82, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 3px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 3px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 3px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 3px;
  border-right-color: rgb(236, 117, 0);
  border-top-color: rgb(236, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: hsl(0, 49%, 49%);
  background-color: rgb(248, 251, 255);
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
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(8, 185, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 185, 78);
  border-left-width: 3px;
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 3px;
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 3px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 3px;
  border-right-color: rgb(236, 117, 0);
  border-top-color: rgb(236, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(208, 221, 239, 0.38);
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
  border-bottom-color: rgb(145, 46, 46);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(145, 46, 46);
  border-left-width: 3px;
  border-right-color: rgb(145, 46, 46);
  border-right-width: 3px;
  border-top-color: rgb(145, 46, 46);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(145, 46, 46) 5px 5px 0px 0px;
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
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(145, 46, 46);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(145, 46, 46);
  border-left-width: 3px;
  border-right-color: rgb(145, 46, 46);
  border-right-width: 3px;
  border-top-color: rgb(145, 46, 46);
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
  background-color: rgba(253, 115, 115, 0.4);
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
  background-color: rgba(253, 115, 115, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(198, 86, 86);
  border-bottom-color: rgb(198, 86, 86);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-width: 2px;
  border-left-color: rgb(198, 86, 86);
  border-left-width: 2px;
  border-right-color: rgb(198, 86, 86);
  border-right-width: 2px;
  border-top-color: rgb(198, 86, 86);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-width: 2px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="light"] body h2 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="light"] body h3 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="light"] body h4 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="light"] body h5 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="light"] body h6 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 231, 239);
  border-left-color: rgb(223, 231, 239);
  border-right-color: rgb(223, 231, 239);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 3px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  border-bottom-color: rgb(208, 78, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 78, 78);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(223, 231, 239);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  border-top-left-radius: 0px;
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(208, 78, 78);
  text-decoration: rgb(208, 78, 78);
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
  color: rgb(126, 142, 163);
  text-decoration: rgb(126, 142, 163);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(126, 142, 163);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(126, 142, 163);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(126, 142, 163);
  text-decoration: rgb(126, 142, 163);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(208, 78, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 78, 78);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(208, 78, 78);
  stroke: rgb(208, 78, 78);
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
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(208, 78, 78);
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(223, 231, 239);
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
  border-bottom-color: rgb(208, 78, 78);
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(238, 246, 255);
  border-bottom-color: rgb(234, 66, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 66, 98);
  border-right-color: rgb(234, 66, 98);
  border-top-color: rgb(234, 66, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(145, 46, 46) 0px 2px 0px 0px;
  color: rgb(234, 66, 98);
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
