import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.gray",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #515b71 !important;
  --accent-color: 81, 91, 113 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #889FC3 !important;
  --accent2-lite: #cde2ff !important;
  --aside-bg: #11151d !important;
  --background-modifier-active-hover: #333A49 !important;
  --background-modifier-border: #242b3d !important;
  --background-modifier-border-focus: #515b71 !important;
  --background-modifier-border-hover: #252c36 !important;
  --background-modifier-cover: #06080c60 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #06080c60 !important;
  --background-modifier-form-field-hover: #06080c60 !important;
  --background-modifier-hover: rgba(163, 188, 218, 0.22) !important;
  --background-modifier-message: #333A49 !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #171B21 !important;
  --background-primary-alt: #222731 !important;
  --background-secondary: #171B21 !important;
  --background-secondary-alt: #0E0F15 !important;
  --bases-cards-background: #171B21 !important;
  --bases-cards-cover-background: #222731 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #242b3d !important;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36 !important;
  --bases-embed-border-color: #242b3d !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #778495 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #171B21 !important;
  --bases-table-cell-background-active: #171B21 !important;
  --bases-table-cell-background-disabled: #222731 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #515b71 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #333A49 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #222731 !important;
  --bases-table-header-background: #171B21 !important;
  --bases-table-header-background-hover: rgba(163, 188, 218, 0.22) !important;
  --bases-table-header-color: #778495 !important;
  --bases-table-row-background-hover: rgba(101, 116, 135, 0.27) !important;
  --bases-table-summary-background: #171B21 !important;
  --bases-table-summary-background-hover: rgba(163, 188, 218, 0.22) !important;
  --bg: #252c36 !important;
  --blockquote-background-color: #090C0E !important;
  --blockquote-border-color: #252c36 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #AAB3CA !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #0E0F15 65%, transparent) linear-gradient(#0E0F15, color-mix(in srgb, #0E0F15 65%, transparent)) !important;
  --bodyFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #0E0F15 !important;
  --box-border-m: 3px solid #0E0F15 !important;
  --box-border-s: 1px solid #0E0F15 !important;
  --bttn: #333A49 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #333A49 !important;
  --button-background-hover: #3c4a64 !important;
  --button-border: #333A49 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #171B21 !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 88, 100, 159 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #AAB3CA !important;
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
  --checkbox-border-color: #515b71 !important;
  --checkbox-border-color-hover: #333A49 !important;
  --checkbox-color: #515b71 !important;
  --checkbox-color-hover: #333A49 !important;
  --checkbox-marker-color: #171B21 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #3c4a64 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #232831 !important;
  --code-bg: #232831 !important;
  --code-border-color: #242b3d !important;
  --code-bracket-background: rgba(163, 188, 218, 0.22) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #707a90 !important;
  --code-punctuation: #778495 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #0E0F15 !important;
  --code-size: .90em !important;
  --code-text: #707a90 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #3c4a64 !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(199, 87, 92) !important;
  --color-accent-2: rgb(209, 113, 121) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #AAB3CA !important;
  --dark-accent: #333A49 !important;
  --dark-sidebar: #090C0E !important;
  --darkgray: #AAB3CA !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(81, 91, 113, 0.1) !important;
  --dataview-th-background: #0E0F15 !important;
  --dataview-th-border-bottom: 2px solid #9DB1CA !important;
  --dataview-th-color: #9DB1CA !important;
  --dataview-th-count-color: #9DB1CA !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 100 !important;
  --deep-dark-accent: #222731 !important;
  --divider-color: #0E0F15 !important;
  --divider-color-hover: #515b71 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #333A49 !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #06080c60 !important;
  --dropdown-background: #0E0F15 !important;
  --dropdown-background-hover: #3c4a64 !important;
  --embed-bg: #090C0E !important;
  --embed-block-shadow-hover: 2px 2px 0 #0E0F15 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #0E0F15 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #0E0F15 !important;
  --embed-border-left: 2px solid #9DB1CA !important;
  --embed-border-left-color: #9DB1CA !important;
  --embed-border-left-color-hover: #9DB1CA !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #0E0F15 !important;
  --embed-border-start: 2px solid #333A49 !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: #0E0F15 !important;
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
  --file-header-background: #171B21 !important;
  --file-header-background-focused: #171B21 !important;
  --file-header-breadcrumb-color: #3c4a64 !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #3c4a64 !important;
  --file-header-color-active: #AAB3CA !important;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #333A49 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #0E0F15 !important;
  --file-icon: "" !important;
  --file-icon-color: #3c4a64 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #AAB3CA !important;
  --flair-background: #0E0F15 !important;
  --flair-color: #AAB3CA !important;
  --folder: #9DB1CA !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #9DB1CA !important;
  --folder-icon-open-color: #F1F7FF !important;
  --folder-open: #F1F7FF !important;
  --folder-open-text-color: #AAB3CA !important;
  --folder-text-color: #AAB3CA !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
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
  --footnote: #576571 !important;
  --footnote-divider-color: #242b3d !important;
  --footnote-id-color: #778495 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #06080c60 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #3c4a64 !important;
  --graph-arrow: #778495 !important;
  --graph-background: #171B21 !important;
  --graph-bg: #171B21 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #8e9ab4 !important;
  --graph-focused: #cde2ff !important;
  --graph-img: #889FC3 !important;
  --graph-line: rgba(101, 116, 135, 0.27) !important;
  --graph-line-hover: #515b71 !important;
  --graph-lines: rgba(101, 116, 135, 0.27) !important;
  --graph-node: #AAB3CA !important;
  --graph-node-attachment: #889FC3 !important;
  --graph-node-focused: #cde2ff !important;
  --graph-node-hover-fill: #8e9ab4 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #333A49 !important;
  --graph-node-unresolved: #3c4a64 !important;
  --graph-tag: #333A49 !important;
  --graph-text: #AAB3CA !important;
  --gray: #778495 !important;
  --h1-background: transparent !important;
  --h1-border-color: #8e9ab4 !important;
  --h1-border-left-color: #242b3d !important;
  --h1-border-line-color: #242b3d !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #242b3d !important;
  --h1-border-width: 0 !important;
  --h1-color: #9DB1CA !important;
  --h1-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h1-weight: 100 !important;
  --h2-background: transparent !important;
  --h2-border-color: #707a90 !important;
  --h2-border-left-color: #242b3d !important;
  --h2-border-line-color: #242b3d !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #242b3d !important;
  --h2-border-width: 0 !important;
  --h2-color: #9DB1CA !important;
  --h2-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 100 !important;
  --h3-background: transparent !important;
  --h3-border-color: #515b71 !important;
  --h3-border-left-color: #242b3d !important;
  --h3-border-line-color: #242b3d !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #242b3d !important;
  --h3-border-width: 0 !important;
  --h3-color: #9DB1CA !important;
  --h3-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 100 !important;
  --h4-background: transparent !important;
  --h4-border-color: #3c4a64 !important;
  --h4-border-left-color: #242b3d !important;
  --h4-border-line-color: #242b3d !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #242b3d !important;
  --h4-border-width: 0 !important;
  --h4-color: #9DB1CA !important;
  --h4-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 100 !important;
  --h5-background: transparent !important;
  --h5-border-color: #242b3d !important;
  --h5-border-left-color: #242b3d !important;
  --h5-border-line-color: #242b3d !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #242b3d !important;
  --h5-border-width: 0 !important;
  --h5-color: #9DB1CA !important;
  --h5-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 100 !important;
  --h6-background: transparent !important;
  --h6-border-color: #11151d !important;
  --h6-border-left-color: #242b3d !important;
  --h6-border-line-color: #242b3d !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #242b3d !important;
  --h6-border-width: 0 !important;
  --h6-color: #9DB1CA !important;
  --h6-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 100 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #9DB1CA !important;
  --he-text-on-accent-inactive: #AAB3CA !important;
  --he-title-bar-active-action: #8e9ab4 !important;
  --he-title-bar-active-bg: #090C0E !important;
  --he-title-bar-active-fg: #AAB3CA !important;
  --he-title-bar-active-pinned-bg: #171B21 !important;
  --he-title-bar-inactive-action: #778495 !important;
  --he-title-bar-inactive-bg: #171B21 !important;
  --he-title-bar-inactive-fg: #3c4a64 !important;
  --he-title-bar-inactive-pinned-bg: #171B21 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: #242b3d !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 100 !important;
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #9DB1CA !important;
  --heading-formatting: #3c4a64 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(101, 116, 135, 0.27) !important;
  --hr: #2f3b4d !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #2f3b4d !important;
  --hr-icon-background: #171B21 !important;
  --hr-icon-color: #9DB1CA !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "🏴" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(129, 155, 199, 0.25) !important;
  --hvr-active: rgba(163, 188, 218, 0.22) !important;
  --hvr2: rgba(101, 116, 135, 0.27) !important;
  --i-at: #5D7B98 !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #778495 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #AAB3CA !important;
  --icon-color-hover: #AAB3CA !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #0E0F15 !important;
  --illusion-h1-background: #8e9ab4 !important;
  --illusion-h2-background: #707a90 !important;
  --illusion-h3-background: #515b71 !important;
  --illusion-h4-background: #3c4a64 !important;
  --illusion-h5-background: #242b3d !important;
  --illusion-h6-background: #11151d !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #06080c60 !important;
  --image-border-color: #242b3d !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #3c4a64 !important;
  --indentation-guide-color: #2f3b4d !important;
  --indentation-guide-color-active: #515b71 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #2f3b4d !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #9DB1CA !important;
  --inline-title-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --inline-title-weight: 100 !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #0E0F15 !important;
  --input-shadow-hover: 3px 3px 0 #0E0F15 !important;
  --interactive-accent: #333A49 !important;
  --interactive-accent-hover: #3c4a64 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #3c4a64 !important;
  --interactive-normal: #0E0F15 !important;
  --its: "its" !important;
  --kanban-button-background: #232831 !important;
  --kanban-button-shadow: 2px 2px 0 #0E0F15 !important;
  --kanban-card-border: 2px solid #0E0F15 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #171B21 !important;
  --kanban-card-text-color: #AAB3CA !important;
  --kanban-card-title-background: #171B21 !important;
  --kanban-card-title-border: 0 1px 0 #0E0F15 !important;
  --kanban-lane-background: #232831 !important;
  --kanban-lane-border: 3px solid #0E0F15 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #0E0F15 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #cde2ff !important;
  --kanban-tag-background: #353d52 !important;
  --latex-color: #8e9ab4 !important;
  --latex-format-color: #3c4a64 !important;
  --latex-syntax-color: #778495 !important;
  --light: #171B21 !important;
  --lightgray: #171B21 !important;
  --line-height-tight: 1.3em !important;
  --lines: #2f3b4d !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #cde2ff !important;
  --link-color-hover: #8e9ab4 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #cde2ff !important;
  --link-external-color-hover: #889FC3 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #3c4a64 !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #242b3d !important;
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
  --list-marker-color: #515b71 !important;
  --list-marker-color-collapsed: #3c4a64 !important;
  --list-marker-color-hover: #778495 !important;
  --list-marker-color-other: #889FC3 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #8e9ab4 !important;
  --list-spacing: 1px !important;
  --lite-accent: #8e9ab4 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #171B21 !important;
  --menu-border-color: #252c36 !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 #0E0F15 !important;
  --message-border-color: #0E0F15 !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 #0E0F15 !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #242b3d !important;
  --metadata-button-text-color: #3c4a64 !important;
  --metadata-divider-color: #242b3d !important;
  --metadata-icon-color: #778495 !important;
  --metadata-input-background-active: #06080c60 !important;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #AAB3CA !important;
  --metadata-label-background-active: #06080c60 !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #778495 !important;
  --metadata-label-text-color-hover: #778495 !important;
  --metadata-property-background-active: rgba(163, 188, 218, 0.22) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #515b71 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #252c36 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #778495 !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #171B21 !important;
  --modal-border-color: #0E0F15 !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #06080c60 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #090C0E !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #AAB3CA !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #778495 !important;
  --nav-heading-color-hover: #AAB3CA !important;
  --nav-indentation-guide-color: #2f3b4d !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #333A49 !important;
  --nav-item-background-border-color-hover: #333A49 !important;
  --nav-item-background-hover: #333A49 !important;
  --nav-item-background-selected: rgba(129, 155, 199, 0.25) !important;
  --nav-item-border-color: #8e9ab4 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #AAB3CA !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #AAB3CA !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #778495 !important;
  --nav-tag-color-hover: #778495 !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #171B21 !important;
  --note-rgb: 23, 27, 33 !important;
  --note-title-border-color: #9DB1CA !important;
  --outer-bar: #0E0F15 !important;
  --outline: #0E0F15 !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #171B21 !important;
  --pdf-background: #171B21 !important;
  --pdf-page-background: #171B21 !important;
  --pdf-shadow: 0 0 0 1px #242b3d !important;
  --pdf-sidebar-background: #171B21 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #242b3d !important;
  --pill-border-color: #242b3d !important;
  --pill-border-color-hover: #252c36 !important;
  --pill-color: #778495 !important;
  --pill-color-hover: #AAB3CA !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #cde2ff !important;
  --pill-radius: 0 !important;
  --popover-background: #171B21 !important;
  --popover-border: 3px solid #0E0F15 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #515b71 !important;
  --progress-bg: #252c36 !important;
  --prompt-background: #171B21 !important;
  --prompt-border-color: #0E0F15 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #9DB1CA !important;
  --r-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --r-heading-font-weight: 100 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #8e9ab4 !important;
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
  --raised-background: color-mix(in srgb, #0E0F15 65%, transparent) linear-gradient(#0E0F15, color-mix(in srgb, #0E0F15 65%, transparent)) !important;
  --ribbon-background: #0E0F15 !important;
  --ribbon-background-collapsed: #171B21 !important;
  --ribbon-border-color: #0E0F15 !important;
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
  --scrollbar-active-thumb-bg: #8e9ab4 !important;
  --scrollbar-bg: #252c36 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #353d52 !important;
  --scrollbar-track-bg: #171B21 !important;
  --search-border: 2px solid #0E0F15 !important;
  --search-box-shadow: 2px 2px 0 #0E0F15 !important;
  --search-clear-button-color: #778495 !important;
  --search-icon-color: #778495 !important;
  --search-result-background: #171B21 !important;
  --secondary: #cde2ff !important;
  --setting-group-heading-color: #AAB3CA !important;
  --setting-item-alt-background-hover: #06080c60 !important;
  --setting-item-background-hover: rgba(129, 155, 199, 0.25) !important;
  --setting-item-border-color: #242b3d !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #333A49 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #06080c60 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #242b3d !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #0E0F15 !important;
  --shadow-m: 3px 3px 0 #0E0F15 !important;
  --shadow-ml: 4px 4px 0 #0E0F15 !important;
  --shadow-s: 2px 2px 0 #0E0F15 !important;
  --side-bar: #171B21 !important;
  --side-bar-bg: #0E0F15 !important;
  --sidebar-icon-color: #AAB3CA !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #333A49 !important;
  --sidebar-tab-background-color-hover: #515b71 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #333A49 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #171B21 !important;
  --slider-thumb-border-color: #252c36 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #242b3d !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #778495 !important;
  --statblock-alt: #06080c60 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #171B21 !important;
  --statblock-bar-border-color: #515b71 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #515b71 !important;
  --statblock-border-color: #2f3b4d !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #0E0F15 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #AAB3CA !important;
  --statblock-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --statblock-heading-font-color: #9DB1CA !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 100 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #2f3b4d !important;
  --statblock-primary-color: #AAB3CA !important;
  --statblock-property-font-color: #AAB3CA !important;
  --statblock-property-name-font-color: #9DB1CA !important;
  --statblock-rule-color: #515b71 !important;
  --statblock-section-heading-border-color: #242b3d !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --statblock-section-heading-font-color: #576571 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 100 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #0E0F15 !important;
  --status-bar-border-color: #515b71 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #778495 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #333A49 !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #32603e !important;
  --suggestion-background: #171B21 !important;
  --tab-background: #0E0F15 !important;
  --tab-background-active: #171B21 !important;
  --tab-container-background: #0E0F15 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #2f3b4d !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #515b71 !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #06080c60 !important;
  --tab-stacked-shadow-color: #06080c60 !important;
  --tab-switcher-background: #171B21 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #171B21, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0E0F15 !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 #0E0F15 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #8e9ab4, 5px 5px 0 #0E0F15 !important;
  --tab-text-color: #3c4a64 !important;
  --tab-text-color-active: #AAB3CA !important;
  --tab-text-color-focused: #3c4a64 !important;
  --tab-text-color-focused-active: #AAB3CA !important;
  --tab-text-color-focused-active-current: #AAB3CA !important;
  --tab-text-color-focused-highlighted: #cde2ff !important;
  --tab-text-color-hover: #AAB3CA !important;
  --tab-top-outline-width: 0 !important;
  --table: #242b3d !important;
  --table-add-button-background: #333A49 !important;
  --table-add-button-border-color: #171B21 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #171B21 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #06080c60 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #333A49 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #333A49 !important;
  --table-header-background-hover: #515b71 !important;
  --table-header-border-color: #171B21 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #8e9ab4 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #06080c60 !important;
  --table-row-alt-background-hover: rgba(101, 116, 135, 0.27) !important;
  --table-row-background-hover: rgba(101, 116, 135, 0.27) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #333A49 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #353d52 !important;
  --tag-background: #353d52 !important;
  --tag-background-color: #353d52 !important;
  --tag-background-hover: #515b71 !important;
  --tag-border-color: #353d52 !important;
  --tag-border-color-hover: #515b71 !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #8690ab !important;
  --tall: 700px !important;
  --td: #06080c60 !important;
  --tertiary: #889FC3 !important;
  --text: #AAB3CA !important;
  --text-accent: #cde2ff !important;
  --text-accent-hover: #889FC3 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(129, 155, 199, 0.25) !important;
  --text-highlight-bg-active: rgba(163, 188, 218, 0.22) !important;
  --text-muted: #778495 !important;
  --text-normal: #AAB3CA !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(101, 116, 135, 0.27) !important;
  --textHighlight: rgba(129, 155, 199, 0.25) !important;
  --th: #333A49 !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #8e9ab4 !important;
  --theme-rainbow-2: #707a90 !important;
  --theme-rainbow-3: #515b71 !important;
  --theme-rainbow-4: #3c4a64 !important;
  --theme-rainbow-5: #242b3d !important;
  --theme-rainbow-6: #11151d !important;
  --tiny: 100px !important;
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #171B21 !important;
  --titlebar-background-focused: #0E0F15 !important;
  --titlebar-border-color: #242b3d !important;
  --titlebar-text-color: #AAB3CA !important;
  --titlebar-text-color-focused: #AAB3CA !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --vault-name-color: #9DB1CA !important;
  --vault-name-font-size: 25px !important;
  --vault-name-font-weight: 300 !important;
  --vault-profile-color: #AAB3CA !important;
  --vault-profile-color-hover: #AAB3CA !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 15, 21);
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(23, 27, 33);
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 27, 33);
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(23, 27, 33);
  color: rgb(170, 179, 202);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(129, 155, 199, 0.25);
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body del {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: line-through 1px rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body p {
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(119, 132, 149) none 0px;
  text-decoration: rgb(119, 132, 149);
  text-decoration-color: rgb(119, 132, 149);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(205, 226, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 226, 255) none 0px;
  text-decoration: rgb(205, 226, 255);
  text-decoration-color: rgb(205, 226, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 226, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 226, 255) none 0px;
  text-decoration: rgb(205, 226, 255);
  text-decoration-color: rgb(205, 226, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(60, 74, 100);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(60, 74, 100) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body dt {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(9, 12, 14);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body table {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(6, 8, 12, 0.376);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(23, 27, 33);
  border-left-color: rgb(23, 27, 33);
  border-right-color: rgb(23, 27, 33);
  border-top-color: rgb(23, 27, 33);
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(23, 27, 33);
  border-left-color: rgb(23, 27, 33);
  border-right-color: rgb(23, 27, 33);
  border-top-color: rgb(23, 27, 33);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(51, 58, 73);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(112, 122, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 122, 144);
  border-right-color: rgb(112, 122, 144);
  border-top-color: rgb(112, 122, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 122, 144);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(119, 132, 149);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(170, 179, 202);
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(51, 58, 73);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(51, 58, 73);
  border-right-color: rgb(170, 179, 202);
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
  color: rgb(60, 74, 100);
  text-decoration: rgb(60, 74, 100);
  text-decoration-color: rgb(60, 74, 100);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(81, 91, 113);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(119, 132, 149);
  text-decoration: rgb(119, 132, 149);
  text-decoration-color: rgb(119, 132, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
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
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-left-width: 4px;
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
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
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(23, 27, 33);
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
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(163, 188, 218, 0.22);
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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
  border-bottom-color: rgb(23, 27, 33);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(163, 188, 218, 0.22);
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(163, 188, 218, 0.22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(53, 61, 82);
  border-bottom-color: rgb(53, 61, 82);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(53, 61, 82);
  border-right-color: rgb(53, 61, 82);
  border-top-color: rgb(53, 61, 82);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
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
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(51, 58, 73);
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
  border-bottom-color: rgb(119, 132, 149);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 132, 149);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(81, 91, 113);
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
  border-top-left-radius: 0px;
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(119, 132, 149);
  text-decoration: rgb(119, 132, 149);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  color: rgb(170, 179, 202);
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
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
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
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(119, 132, 149);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 132, 149);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(119, 132, 149);
  stroke: rgb(119, 132, 149);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(60, 74, 100);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(60, 74, 100);
  border-right-color: rgb(60, 74, 100);
  border-top-color: rgb(60, 74, 100);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(60, 74, 100);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(36, 43, 61);
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(119, 132, 149);
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(14, 15, 21);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(170, 179, 202);
  text-decoration: underline dotted rgb(170, 179, 202);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(119, 132, 149);
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(112, 122, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 122, 144);
  border-right-color: rgb(112, 122, 144);
  border-top-color: rgb(112, 122, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(14, 15, 21) 0px 2px 0px 0px;
  color: rgb(112, 122, 144);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body sub {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body summary {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body sup {
  color: rgb(170, 179, 202);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #aebdd4 !important;
  --accent-color: 174, 189, 212 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #404c62 !important;
  --accent2-lite: #000000 !important;
  --aside-bg: #F1F7FF !important;
  --background-modifier-active-hover: #6e7a92 !important;
  --background-modifier-border: #ccd6eb !important;
  --background-modifier-border-focus: #aebdd4 !important;
  --background-modifier-border-hover: #e1e9f6 !important;
  --background-modifier-cover: #d0ddef62 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #d0ddef62 !important;
  --background-modifier-form-field-hover: #d0ddef62 !important;
  --background-modifier-hover: rgba(163, 188, 218, 0.22) !important;
  --background-modifier-message: #6e7a92 !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #f8fbff !important;
  --background-primary-alt: #171C22 !important;
  --background-secondary: #f8fbff !important;
  --background-secondary-alt: #eef3fd !important;
  --bases-cards-background: #f8fbff !important;
  --bases-cards-cover-background: #171C22 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #ccd6eb !important;
  --bases-cards-shadow-hover: 0 0 0 1px #e1e9f6 !important;
  --bases-embed-border-color: #ccd6eb !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #90a0c3 !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #f8fbff !important;
  --bases-table-cell-background-active: #f8fbff !important;
  --bases-table-cell-background-disabled: #171C22 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #aebdd4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6e7a92 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #171C22 !important;
  --bases-table-header-background: #f8fbff !important;
  --bases-table-header-background-hover: rgba(163, 188, 218, 0.22) !important;
  --bases-table-header-color: #90a0c3 !important;
  --bases-table-row-background-hover: rgba(163, 188, 218, 0.3) !important;
  --bases-table-summary-background: #f8fbff !important;
  --bases-table-summary-background-hover: rgba(163, 188, 218, 0.22) !important;
  --bg: #e1e9f6 !important;
  --blockquote-background-color: #F1F7FF !important;
  --blockquote-border-color: #e1e9f6 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #171C22 !important;
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
  --bttn: #6e7a92 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #6e7a92 !important;
  --button-background-hover: #C0C8D6 !important;
  --button-border: #6e7a92 !important;
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
  --caret-color: #171C22 !important;
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
  --checkbox-border-color: #aebdd4 !important;
  --checkbox-border-color-hover: #6e7a92 !important;
  --checkbox-color: #aebdd4 !important;
  --checkbox-color-hover: #6e7a92 !important;
  --checkbox-marker-color: #f8fbff !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #C0C8D6 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #F1F7FF !important;
  --code-bg: #F1F7FF !important;
  --code-border-color: #ccd6eb !important;
  --code-bracket-background: rgba(163, 188, 218, 0.22) !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #8193b5 !important;
  --code-punctuation: #90a0c3 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #e1e9f6 !important;
  --code-size: .90em !important;
  --code-text: #8193b5 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #C0C8D6 !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(194, 76, 78) !important;
  --color-accent-2: rgb(199, 87, 92) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #171C22 !important;
  --dark-accent: #6e7a92 !important;
  --dark-sidebar: #F1F7FF !important;
  --darkgray: #171C22 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: rgba(174, 189, 212, 0.1) !important;
  --dataview-th-background: #eef3fd !important;
  --dataview-th-border-bottom: 2px solid #6e7a92 !important;
  --dataview-th-color: #6e7a92 !important;
  --dataview-th-count-color: #6e7a92 !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 100 !important;
  --deep-dark-accent: #171C22 !important;
  --divider-color: #eef3fd !important;
  --divider-color-hover: #aebdd4 !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #6e7a92 !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #eef3fd !important;
  --dropdown-background-hover: #C0C8D6 !important;
  --embed-bg: #F1F7FF !important;
  --embed-block-shadow-hover: 2px 2px 0 #e1e9f6 !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: #e1e9f6 !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: #e1e9f6 !important;
  --embed-border-left: 2px solid #6e7a92 !important;
  --embed-border-left-color: #6e7a92 !important;
  --embed-border-left-color-hover: #6e7a92 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #e1e9f6 !important;
  --embed-border-start: 2px solid #6e7a92 !important;
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
  --fg: #aebdd4 !important;
  --file-font: "its" !important;
  --file-header-background: #f8fbff !important;
  --file-header-background-focused: #f8fbff !important;
  --file-header-breadcrumb-color: #C0C8D6 !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #C0C8D6 !important;
  --file-header-color-active: #171C22 !important;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #6e7a92 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #eef3fd !important;
  --file-icon: "" !important;
  --file-icon-color: #A6B4CC !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #171C22 !important;
  --flair-background: #eef3fd !important;
  --flair-color: #171C22 !important;
  --folder: #6e7a92 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #6e7a92 !important;
  --folder-icon-open-color: #aebdd4 !important;
  --folder-open: #aebdd4 !important;
  --folder-open-text-color: #171C22 !important;
  --folder-text-color: #171C22 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
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
  --footnote-divider-color: #ccd6eb !important;
  --footnote-id-color: #90a0c3 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #d0ddef62 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #C0C8D6 !important;
  --graph-arrow: #90a0c3 !important;
  --graph-background: #f8fbff !important;
  --graph-bg: #f8fbff !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #a6aec7 !important;
  --graph-focused: #000000 !important;
  --graph-img: #404c62 !important;
  --graph-line: rgba(163, 188, 218, 0.3) !important;
  --graph-line-hover: #aebdd4 !important;
  --graph-lines: rgba(163, 188, 218, 0.3) !important;
  --graph-node: #171C22 !important;
  --graph-node-attachment: #404c62 !important;
  --graph-node-focused: #000000 !important;
  --graph-node-hover-fill: #a6aec7 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #6e7a92 !important;
  --graph-node-unresolved: #C0C8D6 !important;
  --graph-tag: #6e7a92 !important;
  --graph-text: #171C22 !important;
  --gray: #90a0c3 !important;
  --h1-background: transparent !important;
  --h1-border-color: #A6B4CC !important;
  --h1-border-left-color: #ccd6eb !important;
  --h1-border-line-color: #ccd6eb !important;
  --h1-border-line-height: 4px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #ccd6eb !important;
  --h1-border-width: 0 !important;
  --h1-color: #6e7a92 !important;
  --h1-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h1-weight: 100 !important;
  --h2-background: transparent !important;
  --h2-border-color: #90a0c3 !important;
  --h2-border-left-color: #ccd6eb !important;
  --h2-border-line-color: #ccd6eb !important;
  --h2-border-line-height: 4px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #ccd6eb !important;
  --h2-border-width: 0 !important;
  --h2-color: #6e7a92 !important;
  --h2-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 100 !important;
  --h3-background: transparent !important;
  --h3-border-color: #7485a3 !important;
  --h3-border-left-color: #ccd6eb !important;
  --h3-border-line-color: #ccd6eb !important;
  --h3-border-line-height: 4px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #ccd6eb !important;
  --h3-border-width: 0 !important;
  --h3-color: #6e7a92 !important;
  --h3-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 100 !important;
  --h4-background: transparent !important;
  --h4-border-color: #6e7a92 !important;
  --h4-border-left-color: #ccd6eb !important;
  --h4-border-line-color: #ccd6eb !important;
  --h4-border-line-height: 4px !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #ccd6eb !important;
  --h4-border-width: 0 !important;
  --h4-color: #6e7a92 !important;
  --h4-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 100 !important;
  --h5-background: transparent !important;
  --h5-border-color: #404c62 !important;
  --h5-border-left-color: #ccd6eb !important;
  --h5-border-line-color: #ccd6eb !important;
  --h5-border-line-height: 4px !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #ccd6eb !important;
  --h5-border-width: 0 !important;
  --h5-color: #6e7a92 !important;
  --h5-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 100 !important;
  --h6-background: transparent !important;
  --h6-border-color: #171C22 !important;
  --h6-border-left-color: #ccd6eb !important;
  --h6-border-line-color: #ccd6eb !important;
  --h6-border-line-height: 4px !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #ccd6eb !important;
  --h6-border-width: 0 !important;
  --h6-color: #6e7a92 !important;
  --h6-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 100 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #6e7a92 !important;
  --he-text-on-accent-inactive: #171C22 !important;
  --he-title-bar-active-action: #a6aec7 !important;
  --he-title-bar-active-bg: #F1F7FF !important;
  --he-title-bar-active-fg: #171C22 !important;
  --he-title-bar-active-pinned-bg: #f8fbff !important;
  --he-title-bar-inactive-action: #90a0c3 !important;
  --he-title-bar-inactive-bg: #f8fbff !important;
  --he-title-bar-inactive-fg: #C0C8D6 !important;
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
  --header-weight: 100 !important;
  --headerFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #6e7a92 !important;
  --heading-formatting: #C0C8D6 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(163, 188, 218, 0.3) !important;
  --hr: #d6deea !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #d6deea !important;
  --hr-icon-background: #f8fbff !important;
  --hr-icon-color: #6e7a92 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-icon-symbol: "🏴" !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: rgba(129, 155, 199, 0.25) !important;
  --hvr-active: rgba(163, 188, 218, 0.22) !important;
  --hvr2: rgba(163, 188, 218, 0.3) !important;
  --i-at: #8f9cbe !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #90a0c3 !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #171C22 !important;
  --icon-color-hover: #171C22 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 #e1e9f6 !important;
  --illusion-h1-background: #A6B4CC !important;
  --illusion-h2-background: #90a0c3 !important;
  --illusion-h3-background: #7485a3 !important;
  --illusion-h4-background: #6e7a92 !important;
  --illusion-h5-background: #404c62 !important;
  --illusion-h6-background: #171C22 !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #d0ddef62 !important;
  --image-border-color: #ccd6eb !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #C0C8D6 !important;
  --indentation-guide-color: #d6deea !important;
  --indentation-guide-color-active: #aebdd4 !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #d6deea !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #6e7a92 !important;
  --inline-title-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --inline-title-weight: 100 !important;
  --input-bg: #d0ddef62 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #e1e9f6 !important;
  --input-shadow-hover: 3px 3px 0 #e1e9f6 !important;
  --interactive-accent: #6e7a92 !important;
  --interactive-accent-hover: #C0C8D6 !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #C0C8D6 !important;
  --interactive-normal: #eef3fd !important;
  --its: "its" !important;
  --kanban-button-background: #F1F7FF !important;
  --kanban-button-shadow: 2px 2px 0 #e1e9f6 !important;
  --kanban-card-border: 2px solid #e1e9f6 !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #f8fbff !important;
  --kanban-card-text-color: #171C22 !important;
  --kanban-card-title-background: #f8fbff !important;
  --kanban-card-title-border: 0 1px 0 #e1e9f6 !important;
  --kanban-lane-background: #F1F7FF !important;
  --kanban-lane-border: 3px solid #e1e9f6 !important;
  --kanban-lane-box-shadow: 2px 2px 0 #e1e9f6 !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #000000 !important;
  --kanban-tag-background: #7485a3 !important;
  --latex-color: #a6aec7 !important;
  --latex-format-color: #C0C8D6 !important;
  --latex-syntax-color: #90a0c3 !important;
  --light: #f8fbff !important;
  --lightgray: #f8fbff !important;
  --line-height-tight: 1.3em !important;
  --lines: #d6deea !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #000000 !important;
  --link-color-hover: #a6aec7 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #000000 !important;
  --link-external-color-hover: #404c62 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #C0C8D6 !important;
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
  --list-marker-color: #aebdd4 !important;
  --list-marker-color-collapsed: #C0C8D6 !important;
  --list-marker-color-hover: #90a0c3 !important;
  --list-marker-color-other: #404c62 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #a6aec7 !important;
  --list-spacing: 1px !important;
  --lite-accent: #a6aec7 !important;
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
  --metadata-border-color: #ccd6eb !important;
  --metadata-button-text-color: #C0C8D6 !important;
  --metadata-divider-color: #ccd6eb !important;
  --metadata-icon-color: #90a0c3 !important;
  --metadata-input-background-active: #d0ddef62 !important;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #171C22 !important;
  --metadata-label-background-active: #d0ddef62 !important;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #90a0c3 !important;
  --metadata-label-text-color-hover: #90a0c3 !important;
  --metadata-property-background-active: rgba(163, 188, 218, 0.22) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #aebdd4 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e1e9f6 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #90a0c3 !important;
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
  --modal-sidebar-background: #F1F7FF !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #171C22 !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #90a0c3 !important;
  --nav-heading-color-hover: #171C22 !important;
  --nav-indentation-guide-color: #d6deea !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #6e7a92 !important;
  --nav-item-background-border-color-hover: #6e7a92 !important;
  --nav-item-background-hover: #6e7a92 !important;
  --nav-item-background-selected: rgba(129, 155, 199, 0.25) !important;
  --nav-item-border-color: #a6aec7 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #171C22 !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #171C22 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #90a0c3 !important;
  --nav-tag-color-hover: #90a0c3 !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #f8fbff !important;
  --note-rgb: 248, 251, 255 !important;
  --note-title-border-color: #6e7a92 !important;
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
  --pill-border-color: #ccd6eb !important;
  --pill-border-color-hover: #e1e9f6 !important;
  --pill-color: #90a0c3 !important;
  --pill-color-hover: #171C22 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #000000 !important;
  --pill-radius: 0 !important;
  --popover-background: #f8fbff !important;
  --popover-border: 3px solid #e1e9f6 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #aebdd4 !important;
  --progress-bg: #e1e9f6 !important;
  --prompt-background: #f8fbff !important;
  --prompt-border-color: #e1e9f6 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #6e7a92 !important;
  --r-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --r-heading-font-weight: 100 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #a6aec7 !important;
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
  --scrollbar-active-thumb-bg: #a6aec7 !important;
  --scrollbar-bg: #e1e9f6 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #7485a3 !important;
  --scrollbar-track-bg: #f8fbff !important;
  --search-border: 2px solid #e1e9f6 !important;
  --search-box-shadow: 2px 2px 0 #e1e9f6 !important;
  --search-clear-button-color: #90a0c3 !important;
  --search-icon-color: #90a0c3 !important;
  --search-result-background: #f8fbff !important;
  --secondary: #000000 !important;
  --setting-group-heading-color: #171C22 !important;
  --setting-item-alt-background-hover: #d0ddef62 !important;
  --setting-item-background-hover: rgba(129, 155, 199, 0.25) !important;
  --setting-item-border-color: #ccd6eb !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #6e7a92 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #d0ddef62 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #ccd6eb !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 #e1e9f6 !important;
  --shadow-m: 3px 3px 0 #e1e9f6 !important;
  --shadow-ml: 4px 4px 0 #e1e9f6 !important;
  --shadow-s: 2px 2px 0 #e1e9f6 !important;
  --side-bar: #f8fbff !important;
  --side-bar-bg: #eef3fd !important;
  --sidebar-icon-color: #171C22 !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #6e7a92 !important;
  --sidebar-tab-background-color-hover: #aebdd4 !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #6e7a92 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #f8fbff !important;
  --slider-thumb-border-color: #e1e9f6 !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #ccd6eb !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #90a0c3 !important;
  --statblock-alt: #d0ddef62 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #f8fbff !important;
  --statblock-bar-border-color: #aebdd4 !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #aebdd4 !important;
  --statblock-border-color: #d6deea !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #e1e9f6 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #171C22 !important;
  --statblock-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --statblock-heading-font-color: #6e7a92 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 100 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #d6deea !important;
  --statblock-primary-color: #171C22 !important;
  --statblock-property-font-color: #171C22 !important;
  --statblock-property-name-font-color: #6e7a92 !important;
  --statblock-rule-color: #aebdd4 !important;
  --statblock-section-heading-border-color: #ccd6eb !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --statblock-section-heading-font-color: #8996a0 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 100 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #eef3fd !important;
  --status-bar-border-color: #aebdd4 !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #90a0c3 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #6e7a92 !important;
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
  --tab-outline-color: #aebdd4 !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px #a6aec7, 5px 5px 0 #e1e9f6 !important;
  --tab-text-color: #C0C8D6 !important;
  --tab-text-color-active: #171C22 !important;
  --tab-text-color-focused: #C0C8D6 !important;
  --tab-text-color-focused-active: #171C22 !important;
  --tab-text-color-focused-active-current: #171C22 !important;
  --tab-text-color-focused-highlighted: #000000 !important;
  --tab-text-color-hover: #171C22 !important;
  --tab-top-outline-width: 0 !important;
  --table: #ccd6eb !important;
  --table-add-button-background: #6e7a92 !important;
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
  --table-drag-handle-background-active: #6e7a92 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #6e7a92 !important;
  --table-header-background-hover: #aebdd4 !important;
  --table-header-border-color: #f8fbff !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #a6aec7 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #d0ddef62 !important;
  --table-row-alt-background-hover: rgba(163, 188, 218, 0.3) !important;
  --table-row-background-hover: rgba(163, 188, 218, 0.3) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #6e7a92 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #7485a3 !important;
  --tag-background: #7485a3 !important;
  --tag-background-color: #7485a3 !important;
  --tag-background-hover: #aebdd4 !important;
  --tag-border-color: #7485a3 !important;
  --tag-border-color-hover: #aebdd4 !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #7485a3 !important;
  --tall: 700px !important;
  --td: #d0ddef62 !important;
  --tertiary: #404c62 !important;
  --text: #171C22 !important;
  --text-accent: #000000 !important;
  --text-accent-hover: #404c62 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: rgba(129, 155, 199, 0.25) !important;
  --text-highlight-bg-active: rgba(163, 188, 218, 0.22) !important;
  --text-muted: #90a0c3 !important;
  --text-normal: #171C22 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(163, 188, 218, 0.3) !important;
  --textHighlight: rgba(129, 155, 199, 0.25) !important;
  --th: #6e7a92 !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #A6B4CC !important;
  --theme-rainbow-2: #90a0c3 !important;
  --theme-rainbow-3: #7485a3 !important;
  --theme-rainbow-4: #6e7a92 !important;
  --theme-rainbow-5: #404c62 !important;
  --theme-rainbow-6: #171C22 !important;
  --tiny: 100px !important;
  --titleFont: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #f8fbff !important;
  --titlebar-background-focused: #eef3fd !important;
  --titlebar-border-color: #ccd6eb !important;
  --titlebar-text-color: #171C22 !important;
  --titlebar-text-color-focused: #171C22 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif !important;
  --vault-name-color: #6e7a92 !important;
  --vault-name-font-size: 25px !important;
  --vault-name-font-weight: 300 !important;
  --vault-profile-color: #171C22 !important;
  --vault-profile-color-hover: #171C22 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 243, 253);
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(248, 251, 255);
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 251, 255);
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(238, 243, 253);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 251, 255);
  color: rgb(23, 28, 34);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(129, 155, 199, 0.25);
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body del {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: line-through 1px rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body p {
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(144, 160, 195) none 0px;
  text-decoration: rgb(144, 160, 195);
  text-decoration-color: rgb(144, 160, 195);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 0, 0);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 0);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(192, 200, 214);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(192, 200, 214) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body dt {
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body ol > li {
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body ul > li {
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(241, 247, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body table {
  color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
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
  background-color: rgb(110, 122, 146);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(129, 147, 181);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 147, 181);
  border-right-color: rgb(129, 147, 181);
  border-top-color: rgb(129, 147, 181);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(129, 147, 181);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 247, 255);
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
  background-color: rgb(241, 247, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(241, 247, 255);
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
  background-color: rgb(241, 247, 255);
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
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body figcaption {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(144, 160, 195);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(23, 28, 34);
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(110, 122, 146);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(110, 122, 146);
  border-right-color: rgb(23, 28, 34);
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
  color: rgb(192, 200, 214);
  text-decoration: rgb(192, 200, 214);
  text-decoration-color: rgb(192, 200, 214);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(174, 189, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(174, 189, 212);
  border-right-color: rgb(174, 189, 212);
  border-top-color: rgb(174, 189, 212);
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
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(144, 160, 195);
  text-decoration: rgb(144, 160, 195);
  text-decoration-color: rgb(144, 160, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
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
  border-bottom-color: rgb(23, 28, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(23, 28, 34);
  border-left-width: 4px;
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(23, 28, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(163, 188, 218, 0.22);
  color: rgb(23, 28, 34);
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
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(163, 188, 218, 0.22);
  border-bottom-color: rgb(23, 28, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(163, 188, 218, 0.22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(116, 133, 163);
  border-bottom-color: rgb(116, 133, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(116, 133, 163);
  border-right-color: rgb(116, 133, 163);
  border-top-color: rgb(116, 133, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
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
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(23, 28, 34);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(23, 28, 34);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(23, 28, 34);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(110, 122, 146);
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
  border-bottom-color: rgb(144, 160, 195);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 160, 195);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(174, 189, 212);
  border-left-color: rgb(174, 189, 212);
  border-right-color: rgb(174, 189, 212);
  border-top-color: rgb(174, 189, 212);
  border-top-left-radius: 0px;
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(144, 160, 195);
  text-decoration: rgb(144, 160, 195);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(144, 160, 195);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 160, 195);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(144, 160, 195);
  stroke: rgb(144, 160, 195);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(192, 200, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(192, 200, 214);
  border-right-color: rgb(192, 200, 214);
  border-top-color: rgb(192, 200, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(192, 200, 214);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(144, 160, 195);
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(238, 243, 253);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(23, 28, 34);
  text-decoration: underline dotted rgb(23, 28, 34);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(144, 160, 195);
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(241, 247, 255);
  border-bottom-color: rgb(129, 147, 181);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 147, 181);
  border-right-color: rgb(129, 147, 181);
  border-top-color: rgb(129, 147, 181);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(225, 233, 246) 0px 2px 0px 0px;
  color: rgb(129, 147, 181);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

html[saved-theme="light"] body sub {
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body summary {
  color: rgb(23, 28, 34);
}

html[saved-theme="light"] body sup {
  color: rgb(23, 28, 34);
}`,
  },
};
