import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.ttrpg-pathfinder-remastered",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #3b7b5b !important;
  --accent-color: 134, 55, 55 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #42536e !important;
  --accent2-lite: #61afef !important;
  --aside-bg: #11151d !important;
  --background-modifier-active-hover: #253f32 !important;
  --background-modifier-border: #283345 !important;
  --background-modifier-border-focus: #3b7b5b !important;
  --background-modifier-border-hover: #252c36 !important;
  --background-modifier-cover: #06080c60 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #06080c60 !important;
  --background-modifier-form-field-hover: #06080c60 !important;
  --background-modifier-hover: #e5800040 !important;
  --background-modifier-message: #253f32 !important;
  --background-modifier-success: #32603e !important;
  --background-primary: #1a1e24 !important;
  --background-primary-alt: #2f8b62 !important;
  --background-secondary: #1a1e24 !important;
  --background-secondary-alt: #0b0f13 !important;
  --bases-cards-background: #1a1e24 !important;
  --bases-cards-cover-background: #2f8b62 !important;
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
  --bases-table-cell-background-disabled: #2f8b62 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #3b7b5b !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #253f32 !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #2f8b62 !important;
  --bases-table-header-background: #1a1e24 !important;
  --bases-table-header-background-hover: #e5800040 !important;
  --bases-table-header-color: #97a1b9 !important;
  --bases-table-row-background-hover: rgba(191, 0, 0, 0.2) !important;
  --bases-table-summary-background: #1a1e24 !important;
  --bases-table-summary-background-hover: #e5800040 !important;
  --bg: #252c36 !important;
  --blockquote-background-color: #0d1014 !important;
  --blockquote-border-color: #252c36 !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #bccad8 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #0b0f13 65%, transparent) linear-gradient(#0b0f13, color-mix(in srgb, #0b0f13 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid #0b0f13 !important;
  --box-border-m: 3px solid #0b0f13 !important;
  --box-border-s: 1px solid #0b0f13 !important;
  --bttn: #253f32 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #253f32 !important;
  --button-background-hover: #586477 !important;
  --button-border: #253f32 !important;
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
  --checkbox-border-color: #3b7b5b !important;
  --checkbox-border-color-hover: #253f32 !important;
  --checkbox-color: #3b7b5b !important;
  --checkbox-color-hover: #253f32 !important;
  --checkbox-marker-color: #1a1e24 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #586477 !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #232831 !important;
  --code-bg: #232831 !important;
  --code-border-color: #283345 !important;
  --code-bracket-background: #e5800040 !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #4dbb84 !important;
  --code-punctuation: #97a1b9 !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 #0b0f13 !important;
  --code-size: .90em !important;
  --code-text: #4dbb84 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #586477 !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(199, 87, 92) !important;
  --color-accent-2: rgb(209, 113, 121) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #bccad8 !important;
  --dark-accent: #253f32 !important;
  --dark-sidebar: #0d1014 !important;
  --darkgray: #bccad8 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: #4dbb8450 !important;
  --dataview-th-background: #2f8b62 !important;
  --dataview-th-border-bottom: #2f8b62 !important;
  --dataview-th-color: #e5ebee !important;
  --dataview-th-count-color: #e5ebee !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Taroca" !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 100 !important;
  --deep-dark-accent: #2f8b62 !important;
  --divider-color: #0b0f13 !important;
  --divider-color-hover: #3b7b5b !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #253f32 !important;
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
  --embed-border-left: 2px solid #2f8b62 !important;
  --embed-border-left-color: #2f8b62 !important;
  --embed-border-left-color-hover: #2f8b62 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: #0b0f13 !important;
  --embed-border-start: 2px solid #253f32 !important;
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
  --file-header-left-color: #253f32 !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #0b0f13 !important;
  --file-icon: "" !important;
  --file-icon-color: #887440 !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #bccad8 !important;
  --flair-background: #0b0f13 !important;
  --flair-color: #bccad8 !important;
  --folder: #3b7b5b !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #3b7b5b !important;
  --folder-icon-open-color: #c0a14a !important;
  --folder-open: #c0a14a !important;
  --folder-open-text-color: #bccad8 !important;
  --folder-text-color: #bccad8 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Taroca" !important;
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
  --footnote-divider-color: #283345 !important;
  --footnote-id-color: #97a1b9 !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #06080c60 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #586477 !important;
  --graph-arrow: #97a1b9 !important;
  --graph-background: #0d1014 !important;
  --graph-bg: #0d1014 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #4dbb84 !important;
  --graph-focused: #61afef !important;
  --graph-img: #2f4f87 !important;
  --graph-line: #253f32 !important;
  --graph-line-hover: #304c40 !important;
  --graph-lines: #253f32 !important;
  --graph-node: #2f8b62 !important;
  --graph-node-attachment: #2f4f87 !important;
  --graph-node-focused: #61afef !important;
  --graph-node-hover-fill: #d0765b !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #d0765b !important;
  --graph-node-unresolved: #586477 !important;
  --graph-tag: #d0765b !important;
  --graph-text: #bccad8 !important;
  --gray: #97a1b9 !important;
  --h1-background: transparent !important;
  --h1-border-color: #2f8b62 !important;
  --h1-border-left-color: #253f32 !important;
  --h1-border-line-color: #253f32 !important;
  --h1-border-line-height: 1.5px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: #253f32 !important;
  --h1-border-width: 0 !important;
  --h1-color: #2f8b62 !important;
  --h1-font: "Taroca" !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h1-weight: 100 !important;
  --h2-background: transparent !important;
  --h2-border-color: #2f4f87 !important;
  --h2-border-left-color: #253f32 !important;
  --h2-border-line-color: #253f32 !important;
  --h2-border-line-height: 1.5px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: #253f32 !important;
  --h2-border-width: 0 !important;
  --h2-color: #2f4f87 !important;
  --h2-font: "Taroca" !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 100 !important;
  --h3-background: transparent !important;
  --h3-border-color: #a22b30 !important;
  --h3-border-left-color: #253f32 !important;
  --h3-border-line-color: #253f32 !important;
  --h3-border-line-height: 2px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: #253f32 !important;
  --h3-border-width: 0 !important;
  --h3-color: #a22b30 !important;
  --h3-font: "Norwester" !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 100 !important;
  --h4-background: transparent !important;
  --h4-border-color: #d0765b !important;
  --h4-border-left-color: #253f32 !important;
  --h4-border-line-color: #253f32 !important;
  --h4-border-line-height: 0 !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: #253f32 !important;
  --h4-border-width: 0 !important;
  --h4-color: #d0765b !important;
  --h4-font: "Norwester" !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 100 !important;
  --h5-background: transparent !important;
  --h5-border-color: #694b3c !important;
  --h5-border-left-color: #253f32 !important;
  --h5-border-line-color: #253f32 !important;
  --h5-border-line-height: 0 !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: #253f32 !important;
  --h5-border-width: 0 !important;
  --h5-color: #694b3c !important;
  --h5-font: "Norwester" !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 100 !important;
  --h6-background: transparent !important;
  --h6-border-color: #2e333d !important;
  --h6-border-left-color: #253f32 !important;
  --h6-border-line-color: #253f32 !important;
  --h6-border-line-height: 0 !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: #253f32 !important;
  --h6-border-width: 0 !important;
  --h6-color: #bccad8 !important;
  --h6-font: "Norwester" !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 100 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #2f8b62 !important;
  --he-text-on-accent-inactive: #bccad8 !important;
  --he-title-bar-active-action: #4dbb84 !important;
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
  --header-border-line-color: #253f32 !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 100 !important;
  --headerFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #2f8b62 !important;
  --heading-formatting: #586477 !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: rgba(191, 0, 0, 0.2) !important;
  --hr: #2d4d3d !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #2d4d3d !important;
  --hr-icon-background: #1a1e24 !important;
  --hr-icon-color: #2f8b62 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-image: url("data:image/svg+xml,%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 1000 204' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenoddclip-rule:evenoddstroke-linejoin:roundstroke-miterlimit:2'%3E%3Cg transform='matrix(1,0,0,1,1.7053e-13,-398.169)'%3E%3Crect id='Artboard1' x='-0' y='398.169' width='1000' height='203.661' style='fill:none'/%3E%3CclipPath id='_clip1'%3E%3Crect id='Artboard11' serif:id='Artboard1' x='-0' y='398.169' width='1000' height='203.661'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23_clip1)'%3E%3Cg transform='matrix(4.31034,0,0,4.31034,-267.917,-1094.41)'%3E%3Cpath d='M178.389,380.983C175.751,387.924 169.433,393.494 159,393.565C127.289,393.78 136.335,361.89 118,362C108.448,361.996 110.806,374.866 115,377C114.833,377.167 100.762,372.819 105,357C76.617,370.354 62.389,358 62.389,358C62.389,358 80.399,363.885 90.791,357.333C109.271,345.683 133.119,337.401 142,364C147.001,347.144 172.305,357.468 163,370.565C163.721,364.587 151.808,358.708 151,370.565C150.447,378.68 162.397,385.825 170.144,377.076C176.411,369.999 170.344,356.114 162,354C170.327,353.643 175.921,358.556 178.389,365.031C180.857,358.556 186.45,353.643 194.777,354C186.434,356.114 180.367,369.999 186.634,377.076C194.38,385.825 206.33,378.68 205.777,370.565C204.97,358.708 193.056,364.587 193.777,370.565C184.472,357.468 209.776,347.144 214.777,364C223.658,337.401 247.507,345.683 265.986,357.333C276.379,363.885 294.389,358 294.389,358C294.389,358 280.16,370.354 251.777,357C256.015,372.819 241.944,377.167 241.777,377C245.971,374.866 248.329,361.996 238.777,362C220.443,361.89 229.488,393.78 197.777,393.565C187.344,393.494 181.027,387.924 178.389,380.983Z' style='fill:rgb(139, 38, 45)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A") !important;
  --hr-image-height: 16px !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: #4dbb8450 !important;
  --hvr-active: #e5800040 !important;
  --hvr2: rgba(191, 0, 0, 0.2) !important;
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
  --illusion-h1-background: #2f8b62 !important;
  --illusion-h2-background: #2f4f87 !important;
  --illusion-h3-background: #a22b30 !important;
  --illusion-h4-background: #d0765b !important;
  --illusion-h5-background: #694b3c !important;
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
  --indentation-guide-color: #304c40 !important;
  --indentation-guide-color-active: #3b7b5b !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #304c40 !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #2f8b62 !important;
  --inline-title-font: "Taroca" !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --inline-title-weight: 100 !important;
  --input-bg: rgba(0, 0, 0, 0.3) !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 #0b0f13 !important;
  --input-shadow-hover: 3px 3px 0 #0b0f13 !important;
  --interactive-accent: #253f32 !important;
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
  --kanban-link-color: #61afef !important;
  --kanban-tag-background: #253f32 !important;
  --latex-color: #4dbb84 !important;
  --latex-format-color: #586477 !important;
  --latex-syntax-color: #97a1b9 !important;
  --light: #1a1e24 !important;
  --lightgray: #1a1e24 !important;
  --line-height-tight: 1.3em !important;
  --lines: #304c40 !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #61afef !important;
  --link-color-hover: #4dbb84 !important;
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
  --list-color-1: #304c40 !important;
  --list-color-2: #304c40 !important;
  --list-color-3: #304c40 !important;
  --list-color-4: #304c40 !important;
  --list-color-5: #304c40 !important;
  --list-color-6: #304c40 !important;
  --list-indent: 25px !important;
  --list-marker-color: #3b7b5b !important;
  --list-marker-color-collapsed: #586477 !important;
  --list-marker-color-hover: #97a1b9 !important;
  --list-marker-color-other: #42536e !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #4dbb84 !important;
  --list-spacing: 1px !important;
  --lite-accent: #4dbb84 !important;
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
  --metadata-border-color: #283345 !important;
  --metadata-button-text-color: #586477 !important;
  --metadata-divider-color: #283345 !important;
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
  --metadata-property-background-active: #e5800040 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #3b7b5b !important;
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
  --nav-indentation-guide-color: #304c40 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #253f32 !important;
  --nav-item-background-border-color-hover: #253f32 !important;
  --nav-item-background-hover: #253f32 !important;
  --nav-item-background-selected: #4dbb8450 !important;
  --nav-item-border-color: #4dbb84 !important;
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
  --note-title-border-color: #2f8b62 !important;
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
  --popover-border: 3px solid #0b0f13 !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #3b7b5b !important;
  --progress-bg: #252c36 !important;
  --prompt-background: #1a1e24 !important;
  --prompt-border-color: #0b0f13 !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #2f8b62 !important;
  --r-heading-font: "Taroca" !important;
  --r-heading-font-weight: 100 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #4dbb84 !important;
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
  --scrollbar-active-thumb-bg: #4dbb84 !important;
  --scrollbar-bg: #252c36 !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #253f32 !important;
  --scrollbar-track-bg: #1a1e24 !important;
  --search-border: 2px solid #0b0f13 !important;
  --search-box-shadow: 2px 2px 0 #0b0f13 !important;
  --search-clear-button-color: #97a1b9 !important;
  --search-icon-color: #97a1b9 !important;
  --search-result-background: #1a1e24 !important;
  --secondary: #61afef !important;
  --setting-group-heading-color: #bccad8 !important;
  --setting-item-alt-background-hover: #06080c60 !important;
  --setting-item-background-hover: #4dbb8450 !important;
  --setting-item-border-color: #283345 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #2f8b62 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #06080c60 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #283345 !important;
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
  --sidebar-tab-background-color: #253f32 !important;
  --sidebar-tab-background-color-hover: #3b7b5b !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #253f32 !important;
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
  --statblock-bar-border-color: #3b7b5b !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #3b7b5b !important;
  --statblock-border-color: #304c40 !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: #0b0f13 !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #bccad8 !important;
  --statblock-heading-font: "Taroca" !important;
  --statblock-heading-font-color: #2f8b62 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 100 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #2d4d3d !important;
  --statblock-primary-color: #bccad8 !important;
  --statblock-property-font-color: #bccad8 !important;
  --statblock-property-name-font-color: #2f8b62 !important;
  --statblock-rule-color: #3b7b5b !important;
  --statblock-section-heading-border-color: #283345 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Norwester" !important;
  --statblock-section-heading-font-color: #63778f !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 100 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #0b0f13 !important;
  --status-bar-border-color: #3b7b5b !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #97a1b9 !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #253f32 !important;
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
  --tab-divider-color: #2d4d3d !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #a18f61 !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px #4dbb84, 5px 5px 0 #0b0f13 !important;
  --tab-text-color: #586477 !important;
  --tab-text-color-active: #bccad8 !important;
  --tab-text-color-focused: #586477 !important;
  --tab-text-color-focused-active: #bccad8 !important;
  --tab-text-color-focused-active-current: #bccad8 !important;
  --tab-text-color-focused-highlighted: #61afef !important;
  --tab-text-color-hover: #bccad8 !important;
  --tab-top-outline-width: 0 !important;
  --table: #283345 !important;
  --table-add-button-background: #253f32 !important;
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
  --table-drag-handle-background-active: #253f32 !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #2f8b62 !important;
  --table-header-background-hover: #3b7b5b !important;
  --table-header-border-color: #1a1e24 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #4dbb84 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #06080c60 !important;
  --table-row-alt-background-hover: rgba(191, 0, 0, 0.2) !important;
  --table-row-background-hover: rgba(191, 0, 0, 0.2) !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #253f32 !important;
  --table-selection-border-radius: 0 !important;
  --tag: #253f32 !important;
  --tag-background: #253f32 !important;
  --tag-background-color: #253f32 !important;
  --tag-background-hover: #3b7b5b !important;
  --tag-border-color: #253f32 !important;
  --tag-border-color-hover: #3b7b5b !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #4dbb84 !important;
  --tall: 700px !important;
  --td: #06080c60 !important;
  --tertiary: #42536e !important;
  --text: #bccad8 !important;
  --text-accent: #61afef !important;
  --text-accent-hover: #42536e !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: #4dbb8450 !important;
  --text-highlight-bg-active: #e5800040 !important;
  --text-muted: #97a1b9 !important;
  --text-normal: #bccad8 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: rgba(191, 0, 0, 0.2) !important;
  --textHighlight: #4dbb8450 !important;
  --th: #2f8b62 !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #2f8b62 !important;
  --theme-rainbow-2: #2f4f87 !important;
  --theme-rainbow-3: #a22b30 !important;
  --theme-rainbow-4: #d0765b !important;
  --theme-rainbow-5: #694b3c !important;
  --theme-rainbow-6: #2e333d !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
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
  --vault-font: "Taroca" !important;
  --vault-name-color: #2f8b62 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 100 !important;
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
  background-color: rgba(77, 187, 132, 0.314);
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
  background-color: rgb(47, 139, 98);
}`,
    code: `body code {
  border-bottom-color: rgb(77, 187, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(77, 187, 132);
  border-right-color: rgb(77, 187, 132);
  border-top-color: rgb(77, 187, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(77, 187, 132);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
  border-left-color: rgb(37, 63, 50);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(37, 63, 50);
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
  border-bottom-color: rgb(59, 123, 91);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(59, 123, 91);
  border-right-color: rgb(59, 123, 91);
  border-top-color: rgb(59, 123, 91);
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
  background-color: rgba(229, 128, 0, 0.25);
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
  background-color: rgba(229, 128, 0, 0.25);
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
  background-color: rgba(229, 128, 0, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(37, 63, 50);
  border-bottom-color: rgb(37, 63, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(37, 63, 50);
  border-right-color: rgb(37, 63, 50);
  border-top-color: rgb(37, 63, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(47, 139, 98);
  font-family: Taroca;
}

body h2 {
  color: rgb(47, 79, 135);
  font-family: Taroca;
}

body h2.page-title, h2.page-title a {
  color: rgb(47, 139, 98);
  font-family: Taroca;
}

body h3 {
  color: rgb(162, 43, 48);
  font-family: Norwester;
}

body h4 {
  color: rgb(208, 118, 91);
  font-family: Norwester;
}

body h5 {
  color: rgb(105, 75, 60);
  font-family: Norwester;
}

body h6 {
  color: rgb(188, 202, 216);
  font-family: Norwester;
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
  background-color: rgb(37, 63, 50);
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
  border-bottom-color: rgb(59, 123, 91);
  border-left-color: rgb(59, 123, 91);
  border-right-color: rgb(59, 123, 91);
  border-top-color: rgb(59, 123, 91);
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
  border-bottom-color: rgb(40, 51, 69);
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
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
  border-bottom-color: rgb(77, 187, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(77, 187, 132);
  border-right-color: rgb(77, 187, 132);
  border-top-color: rgb(77, 187, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(11, 15, 19) 0px 2px 0px 0px;
  color: rgb(77, 187, 132);
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
  --accent: #025D4E !important;
  --accent-color: 94, 0, 0 !important;
  --accent-h: 0 !important;
  --accent-l: 49% !important;
  --accent-s: 49% !important;
  --accent-text: #dcddde !important;
  --accent2: #461413 !important;
  --accent2-lite: #15a38b !important;
  --aside-bg: #E0DACB !important;
  --background-modifier-active-hover: #00280a !important;
  --background-modifier-border: #00000060 !important;
  --background-modifier-border-focus: #025D4E !important;
  --background-modifier-border-hover: #d2c4be !important;
  --background-modifier-cover: #E0DACB99 !important;
  --background-modifier-error: #772d2d !important;
  --background-modifier-form-field: #E0DACB99 !important;
  --background-modifier-form-field-hover: #E0DACB99 !important;
  --background-modifier-hover: #002a1750 !important;
  --background-modifier-message: #00280a !important;
  --background-modifier-success: #599049 !important;
  --background-primary: #ECE9E4 !important;
  --background-primary-alt: #260d09 !important;
  --background-secondary: #ECE9E4 !important;
  --background-secondary-alt: #e2ded8 !important;
  --bases-cards-background: #ECE9E4 !important;
  --bases-cards-cover-background: #260d09 !important;
  --bases-cards-font-size: .90em !important;
  --bases-cards-radius: 0 !important;
  --bases-cards-shadow: 0 0 0 1px #00000060 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #d2c4be !important;
  --bases-embed-border-color: #00000060 !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: #025d4e !important;
  --bases-group-heading-property-size: 13.5px !important;
  --bases-group-heading-value-size: .90em !important;
  --bases-table-border-color: #ECE9E4 !important;
  --bases-table-cell-background-active: #ECE9E4 !important;
  --bases-table-cell-background-disabled: #260d09 !important;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #025D4E !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00280a !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-font-size: .90em !important;
  --bases-table-group-background: #260d09 !important;
  --bases-table-header-background: #ECE9E4 !important;
  --bases-table-header-background-hover: #002a1750 !important;
  --bases-table-header-color: #025d4e !important;
  --bases-table-row-background-hover: #002a1730 !important;
  --bases-table-summary-background: #ECE9E4 !important;
  --bases-table-summary-background-hover: #002a1750 !important;
  --bg: #d2c4be !important;
  --blockquote-background-color: #E0DACB !important;
  --blockquote-border-color: #d2c4be !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-color: #393636 !important;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --blockquote-padding: 12px 24px !important;
  --blockquote-padding-lp: 7px 0 !important;
  --blur-background: color-mix(in srgb, #ECE9E4 65%, transparent) linear-gradient(#ECE9E4, color-mix(in srgb, #ECE9E4 65%, transparent)) !important;
  --bodyFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bold-modifier: 500 !important;
  --bold-weight: 900 !important;
  --box-border: 2px solid rgba(124, 49, 3, 0.4) !important;
  --box-border-m: 3px solid rgba(124, 49, 3, 0.4) !important;
  --box-border-s: 1px solid rgba(124, 49, 3, 0.4) !important;
  --bttn: #002a17 !important;
  --bullet: "" !important;
  --bullet-font: "its" !important;
  --button-background: #002a17 !important;
  --button-background-hover: #cdab9a !important;
  --button-border: #002a17 !important;
  --button-border-radius: 0 !important;
  --button-radius: 0 !important;
  --button-text: #e5ebee !important;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #ECE9E4 !important;
  --canvas-card-label-color: #4e5b6f !important;
  --canvas-color: 166, 180, 204 !important;
  --canvas-color-opacity: 0.07 !important;
  --canvas-controls-radius: 0 !important;
  --canvas-node-padding: 0 7px !important;
  --caret-color: #393636 !important;
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
  --checkbox-border-color: #025D4E !important;
  --checkbox-border-color-hover: #00280a !important;
  --checkbox-color: #025D4E !important;
  --checkbox-color-hover: #00280a !important;
  --checkbox-marker-color: #ECE9E4 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #cdab9a !important;
  --checklist-done-decoration: none !important;
  --checklist-done-weight: 900 !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #E0DACB !important;
  --code-bg: #E0DACB !important;
  --code-border-color: #00000060 !important;
  --code-bracket-background: #002a1750 !important;
  --code-comment: #4e5b6f !important;
  --code-normal: #188655 !important;
  --code-punctuation: #025d4e !important;
  --code-radius: 0 !important;
  --code-shadow: 0 2px 0 rgba(124, 49, 3, 0.4) !important;
  --code-size: .90em !important;
  --code-text: #188655 !important;
  --codeFont: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --collapse-icon-color: #4e5b6f !important;
  --collapse-icon-color-collapsed: #cdab9a !important;
  --color-accent: rgb(186, 64, 64) !important;
  --color-accent-1: rgb(194, 76, 78) !important;
  --color-accent-2: rgb(199, 87, 92) !important;
  --color-accent-hsl: 0, 49%, 49% !important;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace !important;
  --dark: #393636 !important;
  --dark-accent: #00280a !important;
  --dark-sidebar: #e2ded8 !important;
  --darkgray: #393636 !important;
  --dataview-table-width: 100% !important;
  --dataview-th-alt-color: #ddc486 !important;
  --dataview-th-background: #00280a !important;
  --dataview-th-border-bottom: #00280a !important;
  --dataview-th-color: #e5ebee !important;
  --dataview-th-count-color: #e5ebee !important;
  --dataview-th-count-font-size: 16px !important;
  --dataview-th-font: "Taroca" !important;
  --dataview-th-font-size: larger !important;
  --dataview-th-font-weight: 100 !important;
  --deep-dark-accent: #260d09 !important;
  --divider-color: #e2ded8 !important;
  --divider-color-hover: #025D4E !important;
  --divider-width: 2px !important;
  --divider-width-hover: 5px !important;
  --drag-ghost-background: #00280a !important;
  --drag-ghost-text-color: #e5ebee !important;
  --drop-shadow: #d0ddef62 !important;
  --dropdown-background: #e2ded8 !important;
  --dropdown-background-hover: #cdab9a !important;
  --embed-bg: #E0DACB !important;
  --embed-block-shadow-hover: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --embed-border: 2px solid transparent !important;
  --embed-border-bottom: 2px solid transparent !important;
  --embed-border-bottom-color: transparent !important;
  --embed-border-bottom-color-hover: rgba(124, 49, 3, 0.4) !important;
  --embed-border-color: transparent !important;
  --embed-border-color-hover: rgba(124, 49, 3, 0.4) !important;
  --embed-border-left: 2px solid #002a17 !important;
  --embed-border-left-color: #002a17 !important;
  --embed-border-left-color-hover: #002a17 !important;
  --embed-border-right: 2px solid transparent !important;
  --embed-border-right-color: transparent !important;
  --embed-border-right-color-hover: rgba(124, 49, 3, 0.4) !important;
  --embed-border-start: 2px solid #00280a !important;
  --embed-border-top: 2px solid transparent !important;
  --embed-border-top-color: transparent !important;
  --embed-border-top-color-hover: rgba(124, 49, 3, 0.4) !important;
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
  --fg: #025D4E !important;
  --file-font: "its" !important;
  --file-header-background: #ECE9E4 !important;
  --file-header-background-focused: #ECE9E4 !important;
  --file-header-breadcrumb-color: #cdab9a !important;
  --file-header-breadcrumb-font-size: 13.5px !important;
  --file-header-color: #cdab9a !important;
  --file-header-color-active: #393636 !important;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-header-font-size: 15px !important;
  --file-header-font-weight: 600 !important;
  --file-header-left-color: #00280a !important;
  --file-header-parent-font-weight: 600 !important;
  --file-header-right-color: #e2ded8 !important;
  --file-icon: "" !important;
  --file-icon-color: #cab47c !important;
  --file-icon-margin: 6px !important;
  --file-text-color: #393636 !important;
  --flair-background: #e2ded8 !important;
  --flair-color: #393636 !important;
  --folder: #2b5b42 !important;
  --folder-font: "its" !important;
  --folder-icon: "" !important;
  --folder-icon-color: #2b5b42 !important;
  --folder-icon-open-color: #cba137 !important;
  --folder-open: #cba137 !important;
  --folder-open-text-color: #393636 !important;
  --folder-text-color: #393636 !important;
  --folder-weight: 700 !important;
  --folder-weight-hover: 700 !important;
  --font: "Taroca" !important;
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
  --footnote: #676767 !important;
  --footnote-divider-color: #00000060 !important;
  --footnote-id-color: #025d4e !important;
  --footnote-id-color-no-occurrences: #4e5b6f !important;
  --footnote-input-background-active: #E0DACB99 !important;
  --footnote-radius: 0 !important;
  --footnote-size: .90em !important;
  --graph-404: #cdab9a !important;
  --graph-arrow: #025d4e !important;
  --graph-background: #ECE9E4 !important;
  --graph-bg: #ECE9E4 !important;
  --graph-controls-section-header-padding: 4px 8px !important;
  --graph-fill: #188655 !important;
  --graph-focused: #15a38b !important;
  --graph-img: #4e1b0e !important;
  --graph-line: #E0DACB !important;
  --graph-line-hover: #b6a697 !important;
  --graph-lines: #E0DACB !important;
  --graph-node: #002a17 !important;
  --graph-node-attachment: #4e1b0e !important;
  --graph-node-focused: #15a38b !important;
  --graph-node-hover-fill: #000000 !important;
  --graph-node-hover-outline: #e5ebee !important;
  --graph-node-tag: #000000 !important;
  --graph-node-unresolved: #cdab9a !important;
  --graph-tag: #000000 !important;
  --graph-text: #393636 !important;
  --gray: #025d4e !important;
  --h1-background: transparent !important;
  --h1-border-color: #002a17 !important;
  --h1-border-left-color: black !important;
  --h1-border-line-color: black !important;
  --h1-border-line-height: 1.5px !important;
  --h1-border-line-width: 100% !important;
  --h1-border-right-color: black !important;
  --h1-border-width: 0 !important;
  --h1-color: #002a17 !important;
  --h1-font: "Taroca" !important;
  --h1-padding: 0 !important;
  --h1-shadow: transparent !important;
  --h1-size: 34px !important;
  --h1-text-align: start !important;
  --h1-weight: 100 !important;
  --h2-background: transparent !important;
  --h2-border-color: #4e1b0e !important;
  --h2-border-left-color: black !important;
  --h2-border-line-color: black !important;
  --h2-border-line-height: 1.5px !important;
  --h2-border-line-width: 85% !important;
  --h2-border-right-color: black !important;
  --h2-border-width: 0 !important;
  --h2-color: #4e1b0e !important;
  --h2-font: "Taroca" !important;
  --h2-padding: 0 !important;
  --h2-shadow: transparent !important;
  --h2-size: 30px !important;
  --h2-text-align: start !important;
  --h2-weight: 100 !important;
  --h3-background: transparent !important;
  --h3-border-color: #025d4e !important;
  --h3-border-left-color: black !important;
  --h3-border-line-color: black !important;
  --h3-border-line-height: 2px !important;
  --h3-border-line-width: 65% !important;
  --h3-border-right-color: black !important;
  --h3-border-width: 0 !important;
  --h3-color: #025d4e !important;
  --h3-font: "Norwester" !important;
  --h3-padding: 0 !important;
  --h3-shadow: transparent !important;
  --h3-size: 26px !important;
  --h3-text-align: start !important;
  --h3-weight: 100 !important;
  --h4-background: transparent !important;
  --h4-border-color: #000000 !important;
  --h4-border-left-color: black !important;
  --h4-border-line-color: black !important;
  --h4-border-line-height: 0 !important;
  --h4-border-line-width: 44% !important;
  --h4-border-right-color: black !important;
  --h4-border-width: 0 !important;
  --h4-color: #000000 !important;
  --h4-font: "Norwester" !important;
  --h4-padding: 0 !important;
  --h4-shadow: transparent !important;
  --h4-size: 22px !important;
  --h4-text-align: start !important;
  --h4-weight: 100 !important;
  --h5-background: transparent !important;
  --h5-border-color: #e58000 !important;
  --h5-border-left-color: black !important;
  --h5-border-line-color: black !important;
  --h5-border-line-height: 0 !important;
  --h5-border-line-width: 25% !important;
  --h5-border-right-color: black !important;
  --h5-border-width: 0 !important;
  --h5-color: #393636 !important;
  --h5-font: "Norwester" !important;
  --h5-padding: 0 !important;
  --h5-shadow: transparent !important;
  --h5-size: 20px !important;
  --h5-text-align: start !important;
  --h5-weight: 100 !important;
  --h6-background: transparent !important;
  --h6-border-color: #393636 !important;
  --h6-border-left-color: black !important;
  --h6-border-line-color: black !important;
  --h6-border-line-height: 0 !important;
  --h6-border-line-width: 0 !important;
  --h6-border-right-color: black !important;
  --h6-border-width: 0 !important;
  --h6-color: #002a17 !important;
  --h6-font: "Norwester" !important;
  --h6-padding: 0 !important;
  --h6-shadow: transparent !important;
  --h6-size: 18px !important;
  --h6-text-align: start !important;
  --h6-weight: 100 !important;
  --he-popover-border-radius: 0 !important;
  --he-text-on-accent-active: #002a17 !important;
  --he-text-on-accent-inactive: #393636 !important;
  --he-title-bar-active-action: #188655 !important;
  --he-title-bar-active-bg: #E0DACB !important;
  --he-title-bar-active-fg: #393636 !important;
  --he-title-bar-active-pinned-bg: #ECE9E4 !important;
  --he-title-bar-inactive-action: #025d4e !important;
  --he-title-bar-inactive-bg: #ECE9E4 !important;
  --he-title-bar-inactive-fg: #cdab9a !important;
  --he-title-bar-inactive-pinned-bg: #ECE9E4 !important;
  --header-arrow-icon-color: #4e5b6f !important;
  --header-arrow-icon-size: 10px !important;
  --header-background: transparent !important;
  --header-border-line-align: none !important;
  --header-border-line-color: black !important;
  --header-border-line-height: 4px !important;
  --header-border-line-left: none !important;
  --header-border-line-width: 100% !important;
  --header-padding: 0 !important;
  --header-shadow: transparent !important;
  --header-text-align: start !important;
  --header-weight: 100 !important;
  --headerFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headers: #002a17 !important;
  --heading-formatting: #cdab9a !important;
  --heading-spacing: 10px !important;
  --heading-spacing-bottom: 10px !important;
  --heading-spacing-top: 10px !important;
  --highlight: #002a1730 !important;
  --hr: #002915 !important;
  --hr-alignment: -50%, -50% !important;
  --hr-color: #002915 !important;
  --hr-icon-background: #ECE9E4 !important;
  --hr-icon-color: #002a17 !important;
  --hr-icon-font: "its" !important;
  --hr-icon-padding-x: 4px !important;
  --hr-image: "https://content.demiplane.com/compendium/pathfinder-2e/gm-core/css/Box-Decoration.png" !important;
  --hr-image-height: 16px !important;
  --hr-image-width: contain !important;
  --hr-text-offset: 12px !important;
  --hr-width: auto !important;
  --hvr: #ddc486 !important;
  --hvr-active: #002a1750 !important;
  --hvr2: #002a1730 !important;
  --i-at: #025d4e !important;
  --icon-btn-radius: 0 !important;
  --icon-color: #025d4e !important;
  --icon-color-active: #e5ebee !important;
  --icon-color-focused: #393636 !important;
  --icon-color-hover: #393636 !important;
  --icon-m: 17px !important;
  --icon-opacity: 1 !important;
  --icon-size: 17px !important;
  --icons: #d04e4e !important;
  --illusion-border-line-height: 0 !important;
  --illusion-box-shadow: 5px 5px 0 rgba(124, 49, 3, 0.4) !important;
  --illusion-h1-background: #002a17 !important;
  --illusion-h2-background: #4e1b0e !important;
  --illusion-h3-background: #025d4e !important;
  --illusion-h4-background: #000000 !important;
  --illusion-h5-background: #e58000 !important;
  --illusion-h6-background: #393636 !important;
  --illusion-header-arrow-color: #e5ebee !important;
  --illusion-header-arrow-icon-size: 13px !important;
  --illusion-header-padding: 5px 25px !important;
  --illusion-header-text: #e5ebee !important;
  --image-border-background: #E0DACB99 !important;
  --image-border-color: #00000060 !important;
  --image-border-padding: 8px !important;
  --image-border-width: 1px !important;
  --inactive: #cdab9a !important;
  --indentation-guide-color: #b6a697 !important;
  --indentation-guide-color-active: #025D4E !important;
  --indentation-guide-editing-indent: 5.33333px !important;
  --indentation-guide-reading-indent: -14px !important;
  --indentation-guide-source-indent: 1.06667px !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --initiative-tracker-border: #b6a697 !important;
  --initiative-xp: sandybrown !important;
  --inline-title-color: #002a17 !important;
  --inline-title-font: "Taroca" !important;
  --inline-title-position: left !important;
  --inline-title-size: 34px !important;
  --inline-title-weight: 100 !important;
  --input-bg: #E0DACB99 !important;
  --input-date-separator: #4e5b6f !important;
  --input-placeholder-color: #4e5b6f !important;
  --input-radius: 0 !important;
  --input-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --input-shadow-hover: 3px 3px 0 rgba(124, 49, 3, 0.4) !important;
  --interactive-accent: #00280a !important;
  --interactive-accent-hover: #cdab9a !important;
  --interactive-accent-hsl: 0, 49%, 49% !important;
  --interactive-hover: #cdab9a !important;
  --interactive-normal: #e2ded8 !important;
  --its: "its" !important;
  --kanban-button-background: #E0DACB !important;
  --kanban-button-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --kanban-card-border: 2px solid rgba(124, 49, 3, 0.4) !important;
  --kanban-card-margin: 2px 0 !important;
  --kanban-card-metadata-background: #ECE9E4 !important;
  --kanban-card-text-color: #393636 !important;
  --kanban-card-title-background: #ECE9E4 !important;
  --kanban-card-title-border: 0 1px 0 rgba(124, 49, 3, 0.4) !important;
  --kanban-lane-background: #E0DACB !important;
  --kanban-lane-border: 3px solid rgba(124, 49, 3, 0.4) !important;
  --kanban-lane-box-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --kanban-lane-padding: 0 4px !important;
  --kanban-link-color: #15a38b !important;
  --kanban-tag-background: #260d09 !important;
  --latex-color: #188655 !important;
  --latex-format-color: #cdab9a !important;
  --latex-syntax-color: #025d4e !important;
  --light: #ECE9E4 !important;
  --lightgray: #ECE9E4 !important;
  --line-height-tight: 1.3em !important;
  --lines: #b6a697 !important;
  --link-background: transparent !important;
  --link-background-hover: transparent !important;
  --link-border: none !important;
  --link-color: #15a38b !important;
  --link-color-hover: #1B9AF0 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #15a38b !important;
  --link-external-color-hover: #461413 !important;
  --link-external-decoration: none !important;
  --link-transform: none !important;
  --link-unresolved-color: #cdab9a !important;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-bullet-box-shadow-color: #00000060 !important;
  --list-bullet-radius: 0 !important;
  --list-bullet-size: 6.4px !important;
  --list-bullet-transform: rotate(45deg) !important;
  --list-color-1: #b6a697 !important;
  --list-color-2: #b6a697 !important;
  --list-color-3: #b6a697 !important;
  --list-color-4: #b6a697 !important;
  --list-color-5: #b6a697 !important;
  --list-color-6: #b6a697 !important;
  --list-indent: 25px !important;
  --list-marker-color: #025D4E !important;
  --list-marker-color-collapsed: #cdab9a !important;
  --list-marker-color-hover: #025d4e !important;
  --list-marker-color-other: #461413 !important;
  --list-marker-min-width: 0 !important;
  --list-numbered-color: #188655 !important;
  --list-spacing: 1px !important;
  --lite-accent: #188655 !important;
  --mdi: "Material Icons Sharp" !important;
  --med-small: 400px !important;
  --med-tall: 600px !important;
  --medium: 500px !important;
  --menu-background: #ECE9E4 !important;
  --menu-border-color: #d2c4be !important;
  --menu-radius: 0 !important;
  --menu-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --message-border-color: rgba(124, 49, 3, 0.4) !important;
  --message-border-width: 0px !important;
  --message-box-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --message-color: #e5ebee !important;
  --metadata-border-color: #00000060 !important;
  --metadata-button-text-color: #cdab9a !important;
  --metadata-divider-color: #00000060 !important;
  --metadata-icon-color: #025d4e !important;
  --metadata-input-background-active: #E0DACB99 !important;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: .90em !important;
  --metadata-input-text-color: #393636 !important;
  --metadata-label-background-active: #E0DACB99 !important;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: .90em !important;
  --metadata-label-text-color: #025d4e !important;
  --metadata-label-text-color-hover: #025d4e !important;
  --metadata-property-background-active: #002a1750 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #025D4E !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d2c4be !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0 !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-remove-color: #dcddde !important;
  --metadata-remove-color-hover: #e5ebee !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --metadata-title-align: center !important;
  --metadata-title-color: #025d4e !important;
  --metadata-title-icon: "" !important;
  --metadata-title-icon-font: "its" !important;
  --metadata-title-icon-padding: 5px !important;
  --metadata-title-size: 16px !important;
  --metadata-title-weight: 900 !important;
  --micro: 70px !important;
  --modal-background: #ECE9E4 !important;
  --modal-border-color: rgba(124, 49, 3, 0.4) !important;
  --modal-border-width: 3px !important;
  --modal-community-sidebar-width: 310px !important;
  --modal-nav-item-background: transparent !important;
  --modal-nav-item-background-hover: #E0DACB99 !important;
  --modal-radius: 0 !important;
  --modal-sidebar-background: #e2ded8 !important;
  --nav-collapse-icon-color: #4e5b6f !important;
  --nav-collapse-icon-color-collapsed: #4e5b6f !important;
  --nav-heading-color: #393636 !important;
  --nav-heading-color-collapsed: #4e5b6f !important;
  --nav-heading-color-collapsed-hover: #025d4e !important;
  --nav-heading-color-hover: #393636 !important;
  --nav-indentation-guide-color: #b6a697 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #00280a !important;
  --nav-item-background-border-color-hover: #00280a !important;
  --nav-item-background-hover: #00280a !important;
  --nav-item-background-selected: #ddc486 !important;
  --nav-item-border-color: #188655 !important;
  --nav-item-border-width: 0px !important;
  --nav-item-children-margin-left: 15px !important;
  --nav-item-children-padding-left: 2px !important;
  --nav-item-color: #393636 !important;
  --nav-item-color-active: #e5ebee !important;
  --nav-item-color-highlighted: #e5ebee !important;
  --nav-item-color-hover: #e5ebee !important;
  --nav-item-color-selected: #393636 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 0 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 700 !important;
  --nav-item-weight-hover: 700 !important;
  --nav-item-white-space: wrap !important;
  --nav-tag-color: #4e5b6f !important;
  --nav-tag-color-active: #025d4e !important;
  --nav-tag-color-hover: #025d4e !important;
  --nav-tag-radius: 0 !important;
  --navbar-radius: 0 !important;
  --note: #ECE9E4 !important;
  --note-rgb: 236, 233, 228 !important;
  --note-title-border-color: #002a17 !important;
  --outer-bar: #e2ded8 !important;
  --outline: rgba(124, 49, 3, 0.4) !important;
  --outline-arrow-display: none !important;
  --outline-arrow-margin: -16px !important;
  --outline-arrow-visibility: hidden !important;
  --outline-symbol: "H" !important;
  --outline-symbol-padding-right: 4px !important;
  --pane-background: #ECE9E4 !important;
  --pdf-background: #ECE9E4 !important;
  --pdf-page-background: #ECE9E4 !important;
  --pdf-sidebar-background: #ECE9E4 !important;
  --pill-border-color: #00000060 !important;
  --pill-border-color-hover: #d2c4be !important;
  --pill-color: #025d4e !important;
  --pill-color-hover: #393636 !important;
  --pill-color-remove: #4e5b6f !important;
  --pill-color-remove-hover: #15a38b !important;
  --pill-radius: 0 !important;
  --popover-background: #ECE9E4 !important;
  --popover-border: 3px solid rgba(124, 49, 3, 0.4) !important;
  --popover-max-height: 600px !important;
  --popover-width: 650px !important;
  --progress: #025D4E !important;
  --progress-bg: #d2c4be !important;
  --prompt-background: #ECE9E4 !important;
  --prompt-border-color: rgba(124, 49, 3, 0.4) !important;
  --prompt-border-width: 3px !important;
  --r-heading-color: #002a17 !important;
  --r-heading-font: "Taroca" !important;
  --r-heading-font-weight: 100 !important;
  --r-heading-text-transform: capitalize !important;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --r-progress-color: #188655 !important;
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
  --raised-background: color-mix(in srgb, #ECE9E4 65%, transparent) linear-gradient(#ECE9E4, color-mix(in srgb, #ECE9E4 65%, transparent)) !important;
  --ribbon-background: #e2ded8 !important;
  --ribbon-background-collapsed: #ECE9E4 !important;
  --ribbon-border-color: #e2ded8 !important;
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
  --scrollbar-active-thumb-bg: #188655 !important;
  --scrollbar-bg: #d2c4be !important;
  --scrollbar-border-width: 0 !important;
  --scrollbar-radius: 0 !important;
  --scrollbar-thumb-bg: #260d09 !important;
  --scrollbar-track-bg: #ECE9E4 !important;
  --search-border: 2px solid rgba(124, 49, 3, 0.4) !important;
  --search-box-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --search-clear-button-color: #025d4e !important;
  --search-icon-color: #025d4e !important;
  --search-result-background: #ECE9E4 !important;
  --secondary: #15a38b !important;
  --setting-group-heading-color: #393636 !important;
  --setting-item-alt-background-hover: #E0DACB99 !important;
  --setting-item-background-hover: #ddc486 !important;
  --setting-item-border-color: #00000060 !important;
  --setting-item-heading-background: transparent !important;
  --setting-item-heading-border: 2px solid #002a17 !important;
  --setting-item-padding: 10px 15px !important;
  --setting-items-alt-background: transparent !important;
  --setting-items-alt-background-hover: #E0DACB99 !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: #00000060 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 5px 5px 0 rgba(124, 49, 3, 0.4) !important;
  --shadow-m: 3px 3px 0 rgba(124, 49, 3, 0.4) !important;
  --shadow-ml: 4px 4px 0 rgba(124, 49, 3, 0.4) !important;
  --shadow-s: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --side-bar: #ECE9E4 !important;
  --side-bar-bg: #e2ded8 !important;
  --sidebar-icon-color: #393636 !important;
  --sidebar-icon-color-active: #e5ebee !important;
  --sidebar-markdown-font-size: 16px !important;
  --sidebar-tab-background-color: #002a17 !important;
  --sidebar-tab-background-color-hover: #025D4E !important;
  --sidebar-tab-border-color: transparent !important;
  --sidebar-tab-border-color-active: #002a17 !important;
  --sidebar-tab-border-width: 0 !important;
  --sidebar-tab-color-hover: #e5ebee !important;
  --sidebar-tab-icon-size: 18px !important;
  --sidebar-tab-icon-stroke: 1.75px !important;
  --sidebar-tab-padding: 0 12px !important;
  --slide-background: #ECE9E4 !important;
  --slider-thumb-border-color: #d2c4be !important;
  --slider-thumb-radius: 0 !important;
  --slider-track-background: #00000060 !important;
  --slider-track-radius: 0 !important;
  --small: 200px !important;
  --small-med: 300px !important;
  --soft-text: #025d4e !important;
  --statblock-alt: #E0DACB99 !important;
  --statblock-alt-padding: 0.25em 0.3em !important;
  --statblock-background-color: #ECE9E4 !important;
  --statblock-bar-border-color: #025D4E !important;
  --statblock-bar-border-size: 0 !important;
  --statblock-bar-color: #025D4E !important;
  --statblock-border-color: #b6a697 !important;
  --statblock-border-size: 0 !important;
  --statblock-box-shadow-blur: 20px !important;
  --statblock-box-shadow-color: rgba(124, 49, 3, 0.4) !important;
  --statblock-box-shadow-x-offset: 0 !important;
  --statblock-box-shadow-y-offset: 0 !important;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --statblock-content-font-size: 16px !important;
  --statblock-font-color: #393636 !important;
  --statblock-heading-font: "Taroca" !important;
  --statblock-heading-font-color: #002a17 !important;
  --statblock-heading-font-variant: normal !important;
  --statblock-heading-font-weight: 100 !important;
  --statblock-heading-line-height: 28px !important;
  --statblock-image-border-color: #002915 !important;
  --statblock-primary-color: #393636 !important;
  --statblock-property-font-color: #393636 !important;
  --statblock-property-name-font-color: #002a17 !important;
  --statblock-rule-color: #025D4E !important;
  --statblock-section-heading-border-color: #00000060 !important;
  --statblock-section-heading-border-size: 4px !important;
  --statblock-section-heading-font: "Norwester" !important;
  --statblock-section-heading-font-color: #676767 !important;
  --statblock-section-heading-font-size: 26px !important;
  --statblock-section-heading-font-variant: normal !important;
  --statblock-section-heading-font-weight: 100 !important;
  --statblock-subheading-font-size: .95em !important;
  --statblock-subheading-font-style: italic !important;
  --statblock-subheading-font-weight: normal !important;
  --statblock-traits-font-style: normal !important;
  --status-bar-background: #e2ded8 !important;
  --status-bar-border-color: #025D4E !important;
  --status-bar-font-size: 13.5px !important;
  --status-bar-gap: 4px !important;
  --status-bar-padding: 4px !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: #025d4e !important;
  --strikethrough-line-thickness: 1px !important;
  --style-settings-background-color: transparent !important;
  --style-settings-border-bottom-color: transparent !important;
  --style-settings-border-top-color: transparent !important;
  --style-settings-heading-background-hover: #00280a !important;
  --style-settings-heading-border-bottom-color: transparent !important;
  --style-settings-heading-border-top-color: transparent !important;
  --style-settings-heading-color: #e5ebee !important;
  --style-settings-heading-color-hover: #e5ebee !important;
  --success-bg: #599049 !important;
  --suggestion-background: #ECE9E4 !important;
  --tab-background: #e2ded8 !important;
  --tab-background-active: #ECE9E4 !important;
  --tab-container-background: #e2ded8 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #002915 !important;
  --tab-font-weight: 500 !important;
  --tab-font-weight-active: 900 !important;
  --tab-min-width: min-content !important;
  --tab-outline-color: #cdac5a !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-font-weight: 700 !important;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62 !important;
  --tab-stacked-shadow-color: #d0ddef62 !important;
  --tab-switcher-background: #ECE9E4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECE9E4, transparent) !important;
  --tab-switcher-preview-background-shadow: 3px 3px 0 rgba(124, 49, 3, 0.4) !important;
  --tab-switcher-preview-radius: 0 !important;
  --tab-switcher-preview-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #188655, 5px 5px 0 rgba(124, 49, 3, 0.4) !important;
  --tab-text-color: #cdab9a !important;
  --tab-text-color-active: #393636 !important;
  --tab-text-color-focused: #cdab9a !important;
  --tab-text-color-focused-active: #393636 !important;
  --tab-text-color-focused-active-current: #393636 !important;
  --tab-text-color-focused-highlighted: #15a38b !important;
  --tab-text-color-hover: #393636 !important;
  --tab-top-outline-width: 0 !important;
  --table: #00000060 !important;
  --table-add-button-background: #002a17 !important;
  --table-add-button-border-color: #ECE9E4 !important;
  --table-add-button-col-width: 24px !important;
  --table-add-button-color: #e5ebee !important;
  --table-add-button-row-height: 24px !important;
  --table-add-button-size: 24px !important;
  --table-border-color: #ECE9E4 !important;
  --table-cell-padding-x: 8px !important;
  --table-cell-padding-y: 4px !important;
  --table-column-alt-background: #E0DACB99 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #00280a !important;
  --table-drag-handle-color: #4e5b6f !important;
  --table-drag-handle-color-active: #e5ebee !important;
  --table-header-background: #00280a !important;
  --table-header-background-hover: #025D4E !important;
  --table-header-border-color: #ECE9E4 !important;
  --table-header-color: #e5ebee !important;
  --table-header-padding-x: 8px !important;
  --table-header-padding-y: 4px !important;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --table-header-text-color: #188655 !important;
  --table-header-weight: 700 !important;
  --table-line-height: 1.3em !important;
  --table-row-alt-background: #E0DACB99 !important;
  --table-row-alt-background-hover: #002a1730 !important;
  --table-row-background-hover: #002a1730 !important;
  --table-row-edit-font-size: .95em !important;
  --table-selection: rgba(186, 64, 64, 0.1) !important;
  --table-selection-border-color: #00280a !important;
  --table-selection-border-radius: 0 !important;
  --tag: #260d09 !important;
  --tag-background: #260d09 !important;
  --tag-background-color: #260d09 !important;
  --tag-background-hover: #025D4E !important;
  --tag-border-color: #260d09 !important;
  --tag-border-color-hover: #025D4E !important;
  --tag-color: #e5ebee !important;
  --tag-color-hover: #e5ebee !important;
  --tag-decoration-hover: underline !important;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --tag-padding-x: 7px !important;
  --tag-padding-y: 3px !important;
  --tag-radius: 0 !important;
  --tag-size: .90em !important;
  --tag-text: #188655 !important;
  --tall: 700px !important;
  --td: #E0DACB99 !important;
  --tertiary: #461413 !important;
  --text: #393636 !important;
  --text-accent: #15a38b !important;
  --text-accent-hover: #461413 !important;
  --text-dl: #e5ebee !important;
  --text-faint: #4e5b6f !important;
  --text-highlight-bg: #ddc486 !important;
  --text-highlight-bg-active: #002a1750 !important;
  --text-muted: #025d4e !important;
  --text-normal: #393636 !important;
  --text-on-accent: #e5ebee !important;
  --text-selection: #002a1730 !important;
  --textHighlight: #ddc486 !important;
  --th: #00280a !important;
  --th-text: #e5ebee !important;
  --theme-rainbow-1: #002a17 !important;
  --theme-rainbow-2: #4e1b0e !important;
  --theme-rainbow-3: #025d4e !important;
  --theme-rainbow-4: #000000 !important;
  --theme-rainbow-5: #e58000 !important;
  --theme-rainbow-6: #393636 !important;
  --tiny: 100px !important;
  --titleFont: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #ECE9E4 !important;
  --titlebar-background-focused: #e2ded8 !important;
  --titlebar-border-color: #00000060 !important;
  --titlebar-text-color: #393636 !important;
  --titlebar-text-color-focused: #393636 !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 0 !important;
  --toggle-s-width: 20px !important;
  --toggle-shadow: none !important;
  --toggle-thumb-color: transparent !important;
  --toggle-thumb-radius: 0 !important;
  --toggle-width: 20px !important;
  --tooltip-color: #e5ebee !important;
  --vault-font: "Taroca" !important;
  --vault-name-color: #002a17 !important;
  --vault-name-font-size: 20px !important;
  --vault-name-font-weight: 100 !important;
  --vault-profile-color: #393636 !important;
  --vault-profile-color-hover: #393636 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(226, 222, 216);
  color: rgb(57, 54, 54);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(236, 233, 228);
  color: rgb(57, 54, 54);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 233, 228);
  color: rgb(57, 54, 54);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(226, 222, 216);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(226, 222, 216);
  border-left-color: rgb(226, 222, 216);
  color: rgb(57, 54, 54);
}

body div#quartz-root {
  background-color: rgb(236, 233, 228);
  color: rgb(57, 54, 54);
}`,
    typography: `body .page article p > b, b {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .page article p > em, em {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .page article p > i, i {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .page article p > strong, strong {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .text-highlight {
  background-color: rgb(221, 196, 134);
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body del {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: line-through 1px rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(2, 93, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(2, 93, 78) none 0px;
  text-decoration: rgb(2, 93, 78);
  text-decoration-color: rgb(2, 93, 78);
}`,
    links: `body a.external, footer a {
  color: rgb(21, 163, 139);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(21, 163, 139) none 0px;
  text-decoration: rgb(21, 163, 139);
  text-decoration-color: rgb(21, 163, 139);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 163, 139);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(21, 163, 139) none 0px;
  text-decoration: rgb(21, 163, 139);
  text-decoration-color: rgb(21, 163, 139);
}

body a.internal.broken {
  color: rgb(205, 171, 154);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 171, 154) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(57, 54, 54);
}

body dt {
  color: rgb(57, 54, 54);
}

body ol > li {
  color: rgb(57, 54, 54);
}

body ol.overflow {
  background-color: rgb(236, 233, 228);
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body ul > li {
  color: rgb(57, 54, 54);
}

body ul.overflow {
  background-color: rgb(236, 233, 228);
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(224, 218, 203);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body table {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(224, 218, 203, 0.6);
}

body td {
  border-bottom-color: rgb(236, 233, 228);
  border-left-color: rgb(236, 233, 228);
  border-right-color: rgb(236, 233, 228);
  border-top-color: rgb(236, 233, 228);
  color: rgb(57, 54, 54);
}

body th {
  border-bottom-color: rgb(236, 233, 228);
  border-left-color: rgb(236, 233, 228);
  border-right-color: rgb(236, 233, 228);
  border-top-color: rgb(236, 233, 228);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(0, 40, 10);
}`,
    code: `body code {
  border-bottom-color: rgb(24, 134, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(24, 134, 85);
  border-right-color: rgb(24, 134, 85);
  border-top-color: rgb(24, 134, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(24, 134, 85);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(57, 54, 54);
}

body pre > code, pre:has(> code) {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body figcaption {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body img {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body video {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}`,
    embeds: `body .file-embed {
  background-color: rgb(226, 222, 216);
  border-bottom-color: rgb(2, 93, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 93, 78);
  border-right-color: rgb(2, 93, 78);
  border-top-color: rgb(2, 93, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(57, 54, 54);
  color: rgb(57, 54, 54);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 40, 10);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 40, 10);
  border-right-color: rgb(57, 54, 54);
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
  color: rgb(205, 171, 154);
  text-decoration: rgb(205, 171, 154);
  text-decoration-color: rgb(205, 171, 154);
}

body input[type=checkbox] {
  border-bottom-color: rgb(2, 93, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 93, 78);
  border-right-color: rgb(2, 93, 78);
  border-top-color: rgb(2, 93, 78);
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
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(2, 93, 78);
  text-decoration: rgb(2, 93, 78);
  text-decoration-color: rgb(2, 93, 78);
}

body li.task-list-item[data-task='>'] {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
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
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
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
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body li.task-list-item[data-task='l'] {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body li.task-list-item[data-task='w'] {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
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
  border-bottom-color: rgb(57, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(57, 54, 54);
  border-left-width: 4px;
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
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
  background-color: rgba(224, 218, 203, 0.6);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(236, 233, 228);
  border-bottom-color: rgba(124, 49, 3, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(124, 49, 3, 0.4);
  border-left-width: 3px;
  border-right-color: rgba(124, 49, 3, 0.4);
  border-right-width: 3px;
  border-top-color: rgba(124, 49, 3, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(124, 49, 3, 0.4) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(57, 54, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(57, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(57, 54, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 42, 23, 0.314);
  color: rgb(57, 54, 54);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(124, 49, 3, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(124, 49, 3, 0.4);
  border-left-width: 3px;
  border-right-color: rgba(124, 49, 3, 0.4);
  border-right-width: 3px;
  border-top-color: rgba(124, 49, 3, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 233, 228);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 42, 23, 0.314);
  border-bottom-color: rgb(57, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(57, 54, 54);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 42, 23, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(57, 54, 54);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(38, 13, 9);
  border-bottom-color: rgb(38, 13, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(38, 13, 9);
  border-right-color: rgb(38, 13, 9);
  border-top-color: rgb(38, 13, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(0, 42, 23);
  font-family: Taroca;
}

body h2 {
  color: rgb(78, 27, 14);
  font-family: Taroca;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 42, 23);
  font-family: Taroca;
}

body h3 {
  color: rgb(2, 93, 78);
  font-family: Norwester;
}

body h4 {
  color: rgb(0, 0, 0);
  font-family: Norwester;
}

body h5 {
  color: rgb(57, 54, 54);
  font-family: Norwester;
}

body h6 {
  color: rgb(0, 42, 23);
  font-family: Norwester;
}

body hr {
  border-bottom-color: rgb(226, 222, 216);
  border-left-color: rgb(226, 222, 216);
  border-right-color: rgb(226, 222, 216);
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
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}

body ::-webkit-scrollbar-corner {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}

body ::-webkit-scrollbar-track {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(57, 54, 54);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(57, 54, 54);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(57, 54, 54);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(0, 40, 10);
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
  border-bottom-color: rgb(2, 93, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 93, 78);
  border-right-color: rgb(2, 93, 78);
  border-top-color: rgb(2, 93, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(2, 93, 78);
}`,
    footer: `body footer {
  background-color: rgb(226, 222, 216);
  border-bottom-color: rgb(2, 93, 78);
  border-left-color: rgb(2, 93, 78);
  border-right-color: rgb(2, 93, 78);
  border-top-color: rgb(2, 93, 78);
  border-top-left-radius: 0px;
  color: rgb(2, 93, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(2, 93, 78);
  text-decoration: rgb(2, 93, 78);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
  color: rgb(57, 54, 54);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body li.section-li > .section .meta {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
}

body ul.section-ul {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(2, 93, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 93, 78);
  border-right-color: rgb(2, 93, 78);
  border-top-color: rgb(2, 93, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(2, 93, 78);
}

body .darkmode svg {
  color: rgb(2, 93, 78);
  stroke: rgb(2, 93, 78);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(205, 171, 154);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(205, 171, 154);
  border-right-color: rgb(205, 171, 154);
  border-top-color: rgb(205, 171, 154);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(205, 171, 154);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
  color: rgb(57, 54, 54);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  color: rgb(2, 93, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(2, 93, 78);
  border-left-color: rgb(2, 93, 78);
  border-right-color: rgb(2, 93, 78);
  border-top-color: rgb(2, 93, 78);
  color: rgb(2, 93, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(226, 222, 216);
}

body .page-header h2.page-title {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(57, 54, 54);
  text-decoration: underline dotted rgb(57, 54, 54);
}

body details {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body input[type=text] {
  border-bottom-color: rgb(2, 93, 78);
  border-left-color: rgb(2, 93, 78);
  border-right-color: rgb(2, 93, 78);
  border-top-color: rgb(2, 93, 78);
  color: rgb(2, 93, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgb(24, 134, 85);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(24, 134, 85);
  border-right-color: rgb(24, 134, 85);
  border-top-color: rgb(24, 134, 85);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(124, 49, 3, 0.4) 0px 2px 0px 0px;
  color: rgb(24, 134, 85);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body sub {
  color: rgb(57, 54, 54);
}

body summary {
  color: rgb(57, 54, 54);
}

body sup {
  color: rgb(57, 54, 54);
}`,
  },
};
