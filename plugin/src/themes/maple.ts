import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "maple",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["maple-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-active: rgb(103, 136, 162) !important;
  --accent-active-bg: hsla(
    207,
    24%,
    52%,
    0.85
  ) !important;
  --accent-inactive: rgb(72, 83, 91) !important;
  --active-line: 207,
    12%,
    14% !important;
  --animation: 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --animation-delay: 1000ms !important;
  --animation-dur: 250ms !important;
  --animation-fast: 125ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --animation-slow: 500ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --app-bg-image: linear-gradient(
    320deg,
    rgb(55, 50, 62),
    rgb(54, 79, 89)
  ) !important;
  --app-layout-spacing: 6px !important;
  --background-modifier-active-hover: rgba(85, 115, 139, 0.1) !important;
  --background-modifier-border: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --background-modifier-border-focus: hsla(
    207,
    17%,
    52%,
    60%
  ) !important;
  --background-modifier-border-hover: hsla(
    207,
    17%,
    52%,
    60%
  ) !important;
  --background-modifier-error: rgba(209.304, 137.496, 137.496, 1) !important;
  --background-modifier-error-hover: rgba(209.304, 137.496, 137.496, 0.9) !important;
  --background-modifier-error-rgb: 209.304, 137.496, 137.496 !important;
  --background-modifier-hover: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --background-modifier-message: hsla(
    207,
    24%,
    52%,
    0.85
  ) !important;
  --background-modifier-success: rgba(147.288, 199.512, 155.992, 0.85) !important;
  --background-modifier-success-rgb: 147.288, 199.512, 155.992 !important;
  --background-primary: rgb(27, 28, 29) !important;
  --background-primary-alt: rgb(33, 36, 39) !important;
  --background-primary-alt-hsl: 207, 8%, 13.5% !important;
  --background-primary-hsl: 207,
    5%, 11% !important;
  --background-secondary: rgb(29, 32, 32) !important;
  --background-secondary-hsl: 189,
    6%, 12% !important;
  --base-accent-h: 207 !important;
  --bases-cards-background: rgb(27, 28, 29) !important;
  --bases-cards-cover-background: rgb(33, 36, 39) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(
    207,
    17%,
    52%,
    60%
  ) !important;
  --bases-embed-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --bases-table-cell-background-active: rgb(27, 28, 29) !important;
  --bases-table-cell-background-disabled: rgb(33, 36, 39) !important;
  --bases-table-cell-background-selected: rgba(85, 115, 139, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(
    207,
    17%,
    52%,
    60%
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(85, 115, 139) !important;
  --bases-table-group-background: rgb(33, 36, 39) !important;
  --bases-table-header-background: rgb(27, 28, 29) !important;
  --bases-table-header-background-hover: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --bases-table-summary-background: rgb(27, 28, 29) !important;
  --bases-table-summary-background-hover: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --bg-delta-dark: 0% !important;
  --bg-editor: hsla(
    207,
    5%, 11%,
    max(0.6, 0.85)
  ) !important;
  --bg-opacity: 0.6 !important;
  --bg-surface: rgba(29, 32, 32, 0.6) !important;
  --block-outline-width: 2px !important;
  --blockquote-background-color: rgb(33, 36, 39) !important;
  --blockquote-border-color: rgb(103, 136, 162) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-radius: 6px !important;
  --button-radius: 6px !important;
  --callout-bug: 209.304, 137.496, 137.496;
  --callout-default: 126.48, 183.6, 240.72;
  --callout-error: 209.304, 137.496, 137.496;
  --callout-example: 186.2265, 179.265, 238.935;
  --callout-fail: 209.304, 137.496, 137.496;
  --callout-important: 126.48, 199.92, 197.472;
  --callout-info: 126.48, 183.6, 240.72;
  --callout-question: 206.04, 162.52, 140.76;
  --callout-radius: 8px;
  --callout-success: 147.288, 199.512, 155.992;
  --callout-summary: 126.48, 199.92, 197.472;
  --callout-tip: 126.48, 199.92, 197.472;
  --callout-todo: 126.48, 183.6, 240.72;
  --callout-warning: 206.04, 162.52, 140.76;
  --canvas-background: rgb(27, 28, 29) !important;
  --canvas-color-1: 209.304, 137.496, 137.496 !important;
  --canvas-color-2: 206.04, 162.52, 140.76 !important;
  --canvas-color-3: 214.2, 181.56, 132.6 !important;
  --canvas-color-4: 147.288, 199.512, 155.992 !important;
  --canvas-color-5: 126.48, 199.92, 197.472 !important;
  --canvas-color-6: 186.2265, 179.265, 238.935 !important;
  --caret-color: rgba(232, 240, 247, 0.75) !important;
  --checkbox-border-color: rgb(72, 83, 91) !important;
  --checkbox-border-color-hover: rgb(103, 136, 162) !important;
  --checkbox-color: rgb(103, 136, 162) !important;
  --checkbox-color-hover: rgb(100, 136, 160) !important;
  --checkbox-marker-color: #eaeaea !important;
  --code-background: rgb(33, 36, 39) !important;
  --code-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --code-class: rgba(206.04, 162.52, 140.76, 0.85) !important;
  --code-function: rgba(126.48, 183.6, 240.72, 0.85) !important;
  --code-important: rgba(186.2265, 179.265, 238.935, 0.85) !important;
  --code-keyword: rgba(186.2265, 179.265, 238.935, 0.85) !important;
  --code-mac-style-header-bg: #111 !important;
  --code-mac-style-header-color: #aaa !important;
  --code-normal: #b3b3b3 !important;
  --code-operator: #999999 !important;
  --code-property: rgba(214.2, 181.56, 132.6, 0.85) !important;
  --code-punctuation: #999999 !important;
  --code-radius: 8px !important;
  --code-string: rgba(147.288, 199.512, 155.992, 0.85) !important;
  --code-tag: rgba(209.304, 137.496, 137.496, 0.85) !important;
  --code-value: rgba(126.48, 199.92, 197.472, 0.85) !important;
  --code-variable: rgba(214.2, 181.56, 132.6, 0.85) !important;
  --codeFont: '??', "maplemono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(100, 136, 160) !important;
  --color-accent: rgb(85, 115, 139) !important;
  --color-accent-1: rgb(100, 136, 160) !important;
  --color-accent-2: rgb(118, 153, 173) !important;
  --color-accent-hsl: 207, 24%,
    44.2% !important;
  --color-blue: rgba(126.48, 183.6, 240.72, 0.85) !important;
  --color-blue-rgb: 126.48, 183.6, 240.72 !important;
  --color-cyan: rgba(126.48, 199.92, 197.472, 0.85) !important;
  --color-cyan-rgb: 126.48, 199.92, 197.472 !important;
  --color-green: rgba(147.288, 199.512, 155.992, 0.85) !important;
  --color-green-rgb: 147.288, 199.512, 155.992 !important;
  --color-opacity: 0.85 !important;
  --color-orange: rgba(206.04, 162.52, 140.76, 0.85) !important;
  --color-orange-rgb: 206.04, 162.52, 140.76 !important;
  --color-purple: rgba(186.2265, 179.265, 238.935, 0.85) !important;
  --color-purple-rgb: 186.2265, 179.265, 238.935 !important;
  --color-red: rgba(209.304, 137.496, 137.496, 0.85) !important;
  --color-red-rgb: 209.304, 137.496, 137.496 !important;
  --color-yellow: rgba(214.2, 181.56, 132.6, 0.85) !important;
  --color-yellow-rgb: 214.2, 181.56, 132.6 !important;
  --dark: rgba(232, 240, 247, 0.75) !important;
  --darkgray: rgba(232, 240, 247, 0.75) !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(85, 115, 139) !important;
  --divider-width-hover: 4px !important;
  --editor-min-opacity: 0.85 !important;
  --embed-background: hsla(
    207,
    5%, 11%,
    max(0.6, 0.85)
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(72, 83, 91),
    inset 0 0 0 1px rgb(72, 83, 91) !important;
  --embed-border-bottom: 2px solid rgb(72, 83, 91) !important;
  --embed-border-end: 2px solid rgb(72, 83, 91) !important;
  --embed-border-start: 2px solid rgb(72, 83, 91) !important;
  --embed-border-top: 2px solid rgb(72, 83, 91) !important;
  --embed-padding: 16px 20px !important;
  --embed-radius: 8px !important;
  --file-folding-offset: 28px !important;
  --file-header-background: rgb(27, 28, 29) !important;
  --file-header-background-focused: rgb(27, 28, 29) !important;
  --file-header-font-size: 14px !important;
  --file-line-width: clamp(600px, 72%, 850px) !important;
  --flair-color: rgba(232, 240, 247, 0.75) !important;
  --folder-color: rgb(208, 164, 22) !important;
  --folder-inactive: 70% !important;
  --font-monospace: '??', "maplemono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "maplemono" !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --footnote-input-background-active: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --footnote-line-height: 1.8 !important;
  --frame-bg: rgb(27, 31, 34) !important;
  --graph-node-attachment: rgba(214.2, 181.56, 132.6, 0.85) !important;
  --graph-node-focused: rgb(103, 136, 162) !important;
  --graph-node-tag: rgba(147.288, 199.512, 155.992, 0.85) !important;
  --graph-text: rgba(232, 240, 247, 0.75) !important;
  --gray: rgba(232, 240, 247, 0.75) !important;
  --grid-dots-color: #3f3f3f !important;
  --grid-line-color: #2a2a2a !important;
  --grid-spacing: 20px !important;
  --h1-color: rgb(209.304, 137.496, 137.496) !important;
  --h1-color-rgb: 209.304, 137.496, 137.496 !important;
  --h1-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h1-line-height: 46.08px !important;
  --h1-size: 25.6px !important;
  --h1-weight: 750 !important;
  --h2-color: rgb(206.04, 162.52, 140.76) !important;
  --h2-color-rgb: 206.04, 162.52, 140.76 !important;
  --h2-font: "" !important;
  --h2-line-height: 43.2px !important;
  --h2-size: 24px !important;
  --h2-weight: 700 !important;
  --h3-color: rgb(147.288, 199.512, 155.992) !important;
  --h3-color-rgb: 147.288, 199.512, 155.992 !important;
  --h3-font: "" !important;
  --h3-line-height: 40.32px !important;
  --h3-size: 22.4px !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(126.48, 183.6, 240.72) !important;
  --h4-color-rgb: 126.48, 183.6, 240.72 !important;
  --h4-font: "" !important;
  --h4-line-height: 37.44px !important;
  --h4-size: 20.8px !important;
  --h4-weight: 550 !important;
  --h5-color: rgb(186.2265, 179.265, 238.935) !important;
  --h5-color-rgb: 186.2265, 179.265, 238.935 !important;
  --h5-font: "" !important;
  --h5-line-height: 34.56px !important;
  --h5-size: 19.2px !important;
  --h5-weight: 550 !important;
  --h6-color: rgb(126.48, 199.92, 197.472) !important;
  --h6-color-rgb: 126.48, 199.92, 197.472 !important;
  --h6-font: "" !important;
  --h6-line-height: 31.68px !important;
  --h6-size: 17.6px !important;
  --h6-variant: small-caps !important;
  --h6-weight: 500 !important;
  --heading-spacing: 20px !important;
  --highlight: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --hr-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --icon-color-active: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --icon-color-focused: rgba(232, 240, 247, 0.75) !important;
  --inline-code: rgba(209.304, 137.496, 137.496, 0.85) !important;
  --inline-title-color: rgb(209.304, 137.496, 137.496) !important;
  --inline-title-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-line-height: 46.08px !important;
  --inline-title-size: 25.6px !important;
  --inline-title-weight: 750 !important;
  --input-radius: 6px !important;
  --interactive-accent: rgb(85, 115, 139) !important;
  --interactive-accent-hover: rgb(100, 136, 160) !important;
  --interactive-accent-hsl: 207, 24%,
    44.2% !important;
  --light: rgb(27, 28, 29) !important;
  --lightgray: rgb(29, 32, 32) !important;
  --line-height-normal: 1.8 !important;
  --line-height-tight: 1.5 !important;
  --link-color: rgba(126.48, 199.92, 197.472, 0.85) !important;
  --link-color-hover: rgba(126.48, 199.92, 197.472, 0.85) !important;
  --link-color-rgb: 126.48, 199.92, 197.472 !important;
  --link-color-underline: rgba(126.48, 199.92, 197.472, 0.85) !important;
  --link-external-color: rgba(
    214.2, 181.56, 132.6,
    0.85
  ) !important;
  --link-external-color-hover: rgba(
    214.2, 181.56, 132.6,
    0.85
  ) !important;
  --link-external-color-rgb: 214.2, 181.56, 132.6 !important;
  --link-external-color-underline: rgba(
    214.2, 181.56, 132.6,
    0.85
  ) !important;
  --link-footnote: rgba(186.2265, 179.265, 238.935, 0.85) !important;
  --link-text-size: 16px !important;
  --link-unresolved-color: rgba(
    126.48, 199.92, 197.472,
    0.7225
  ) !important;
  --link-unresolved-decoration-color: rgba(
    126.48, 199.92, 197.472,
    0.7225
  ) !important;
  --list-bullet-size: 7.33333px !important;
  --list-marker-color: rgb(103, 136, 162) !important;
  --list-marker-color-alt: rgb(103, 136, 162) !important;
  --list-marker-color-alt-render: transparent !important;
  --list-marker-color-collapsed: rgb(100, 136, 160) !important;
  --list-threading-color: rgb(72, 83, 91) !important;
  --list-threading-width: max(0.1rem, 2px) !important;
  --menu-background: rgb(29, 32, 32) !important;
  --menu-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --menu-padding: 4px !important;
  --metadata-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --metadata-divider-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --metadata-input-background-active: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --metadata-input-text-color: rgba(232, 240, 247, 0.75) !important;
  --metadata-label-background-active: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --metadata-property-background-active: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(
    207,
    17%,
    52%,
    60%
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(
    207,
    17%,
    52%,
    60%
  ) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: rgb(27, 28, 29) !important;
  --modal-close-button-padding: 12px !important;
  --modal-header-height: 48px !important;
  --modal-height: min(85vh, 1000px) !important;
  --modal-width: min(90vw, 1100px) !important;
  --nav-heading-color: rgba(232, 240, 247, 0.75) !important;
  --nav-heading-color-hover: rgba(232, 240, 247, 0.75) !important;
  --nav-indentation-guide-color: #363636 !important;
  --nav-indentation-guide-width: 1.8px !important;
  --nav-item-background-active: hsla(
    207,
    24%,
    52%,
    0.85
  ) !important;
  --nav-item-background-hover: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --nav-item-background-selected: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --nav-item-children-padding-left: 8px !important;
  --nav-item-color-active: rgba(232, 240, 247, 0.75) !important;
  --nav-item-color-highlighted: rgb(100, 136, 160) !important;
  --nav-item-color-hover: rgba(232, 240, 247, 0.75) !important;
  --nav-item-color-selected: rgba(232, 240, 247, 0.75) !important;
  --nav-item-size: 14.4px !important;
  --outline-guideline-color: rgb(72, 83, 91) !important;
  --outline-guideline-color-alt: rgb(103, 136, 162) !important;
  --outline-guideline-width: 2px !important;
  --outline-item-height: 25.92px !important;
  --p-spacing: 8px !important;
  --pdf-background: transparent !important;
  --pdf-page-background: rgb(27, 28, 29) !important;
  --pdf-shadow: 0 0 0 1px hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --pdf-sidebar-background: rgb(27, 28, 29) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --pill-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --pill-border-color-hover: hsla(
    207,
    17%,
    52%,
    60%
  ) !important;
  --pill-color-hover: rgba(232, 240, 247, 0.75) !important;
  --pill-color-remove-hover: rgb(100, 136, 160) !important;
  --prompt-background: rgb(27, 28, 29) !important;
  --ribbon-background: rgb(29, 32, 32) !important;
  --ribbon-background-collapsed: rgb(27, 28, 29) !important;
  --scrollbar-color: rgba(0, 0, 0, 0) !important;
  --scrollbar-transition: --scrollbar-color 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --search-result-background: rgb(27, 28, 29) !important;
  --secondary: rgb(100, 136, 160) !important;
  --select-bg-img: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='%23DDDDDD' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/></svg>") !important;
  --setting-accent-h-dark: 207 !important;
  --setting-calendar-max-width: 500px !important;
  --setting-code-ligature: 'calt' !important;
  --setting-color-dirs: rgb(208, 164, 22) !important;
  --setting-file-line-width: clamp(600px, 72%, 850px) !important;
  --setting-group-heading-color: rgba(232, 240, 247, 0.75) !important;
  --setting-group-heading-size: 16px !important;
  --setting-h1-weight: 750 !important;
  --setting-h2-font: "" !important;
  --setting-h2-weight: 700 !important;
  --setting-h3-font: "" !important;
  --setting-h3-weight: 600 !important;
  --setting-h4-font: "" !important;
  --setting-h4-weight: 550 !important;
  --setting-h5-font: "" !important;
  --setting-h5-weight: 550 !important;
  --setting-h6-font: "" !important;
  --setting-h6-weight: 500 !important;
  --setting-hr-icon: ''⭐'' !important;
  --setting-items-background: rgb(33, 36, 39) !important;
  --setting-items-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --setting-modal-header-title: 'Maple 1.0.0-beta.33' !important;
  --setting-scrollbar-hover: rgba(85, 115, 139, 0.4) !important;
  --setting-text-bold-style: underline dotted !important;
  --setting-text-highlight-bg: rgba(255, 208, 0, 0.4) !important;
  --setting-text-italic-style: underline dotted !important;
  --slider-thumb-border-color: hsla(
    207,
    17%,
    52%,
    60%
  ) !important;
  --slider-track-background: rgb(72, 83, 91) !important;
  --status-bar-background: rgb(29, 32, 32) !important;
  --status-bar-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 6px !important;
  --suggestion-background: rgb(27, 28, 29) !important;
  --sync-avatar-color-1: rgba(209.304, 137.496, 137.496, 0.85) !important;
  --sync-avatar-color-2: rgba(206.04, 162.52, 140.76, 0.85) !important;
  --sync-avatar-color-3: rgba(214.2, 181.56, 132.6, 0.85) !important;
  --sync-avatar-color-4: rgba(147.288, 199.512, 155.992, 0.85) !important;
  --sync-avatar-color-5: rgba(126.48, 199.92, 197.472, 0.85) !important;
  --sync-avatar-color-6: rgba(126.48, 183.6, 240.72, 0.85) !important;
  --sync-avatar-color-7: rgba(186.2265, 179.265, 238.935, 0.85) !important;
  --tab-active-shadow: none !important;
  --tab-background-active: rgb(27, 28, 29) !important;
  --tab-container-background: rgb(27, 31, 34) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 6px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: rgb(29, 32, 32) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 32, 32), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(85, 115, 139) !important;
  --tab-text-color-focused-active-current: rgba(232, 240, 247, 0.75) !important;
  --tab-text-color-focused-highlighted: rgb(100, 136, 160) !important;
  --table-add-button-background: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --table-add-button-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --table-add-button-border-width: 0 !important;
  --table-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --table-cell-vertical-alignment: middle !important;
  --table-drag-handle-background: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --table-drag-handle-background-active: rgb(72, 83, 91) !important;
  --table-drag-handle-color-active: #eaeaea !important;
  --table-header-background: rgb(33, 36, 39) !important;
  --table-header-background-hover: rgb(33, 36, 39) !important;
  --table-header-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --table-header-color: rgba(232, 240, 247, 0.75) !important;
  --table-line-height: 1.5 !important;
  --table-selection: rgba(85, 115, 139, 0.1) !important;
  --table-selection-border-color: rgb(72, 83, 91) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: rgba(85, 115, 139, 0.1) !important;
  --tag-background-hover: rgba(85, 115, 139, 0.2) !important;
  --tag-border-color: rgb(100, 136, 160) !important;
  --tag-border-color-hover: rgba(85, 115, 139, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: rgb(100, 136, 160) !important;
  --tag-color-hover: rgb(100, 136, 160) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 0 !important;
  --tertiary: rgb(118, 153, 173) !important;
  --text-accent: rgb(100, 136, 160) !important;
  --text-accent-hover: rgb(118, 153, 173) !important;
  --text-error: rgba(209.304, 137.496, 137.496, 0.85) !important;
  --text-normal: rgba(232, 240, 247, 0.75) !important;
  --text-on-accent: #eaeaea !important;
  --text-selection: rgba(85, 115, 139, 0.33) !important;
  --text-success: rgba(147.288, 199.512, 155.992, 0.85) !important;
  --text-warning: rgba(206.04, 162.52, 140.76, 0.85) !important;
  --textHighlight: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --theme-accent-active-h: 207 !important;
  --theme-accent-active-l: 52% !important;
  --theme-accent-active-s: 24% !important;
  --theme-accent-h: 207 !important;
  --theme-accent-inactive-h: 207 !important;
  --theme-accent-inactive-l: 32% !important;
  --theme-accent-inactive-s: 12% !important;
  --titlebar-background: rgb(27, 31, 34) !important;
  --titlebar-background-focused: rgb(27, 31, 34) !important;
  --titlebar-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --titlebar-text-color-focused: rgba(232, 240, 247, 0.75) !important;
  --vault-profile-color: rgba(232, 240, 247, 0.75) !important;
  --vault-profile-color-hover: rgba(232, 240, 247, 0.75) !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(29, 32, 32, 0.6);
  color: rgba(232, 240, 247, 0.75);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(29, 32, 32, 0.6);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}

body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}`,
    typography: `body .page article p > b, b {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

body .page article p > em, em {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

body .page article p > i, i {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

body .page article p > strong, strong {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

body .text-highlight {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body del {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: line-through rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}`,
    links: `body a.external, footer a {
  color: rgba(214, 182, 133, 0.85);
  outline: rgba(214, 182, 133, 0.85) none 0px;
  text-decoration: underline rgba(214, 182, 133, 0.85);
  text-decoration-color: rgba(214, 182, 133, 0.85);
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgba(126, 200, 197, 0.85);
  outline: rgba(126, 200, 197, 0.85) none 0px;
  text-decoration: underline rgba(126, 200, 197, 0.85);
  text-decoration-color: rgba(126, 200, 197, 0.85);
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

body a.internal.broken {
  color: rgba(126, 200, 197, 0.72);
  outline: rgba(126, 200, 197, 0.72) none 0px;
  text-decoration: underline rgba(126, 200, 197, 0.72);
  text-decoration-color: rgba(126, 200, 197, 0.72);
}`,
    lists: `body dd {
  color: rgba(232, 240, 247, 0.75);
}

body dt {
  color: rgba(232, 240, 247, 0.75);
}

body ol > li {
  color: rgba(232, 240, 247, 0.75);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body ul > li {
  color: rgba(232, 240, 247, 0.75);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(32, 35, 37);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body table {
  color: rgba(232, 240, 247, 0.75);
  margin-top: 8px;
  width: 600px;
}

body td {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
  vertical-align: middle;
}

body th {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
  vertical-align: middle;
}`,
    code: `body code {
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(179, 179, 179);
  font-family: "??", maplemono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(0, 0, 0, 0);
}

body pre > code > [data-line] {
  border-left-color: rgba(206, 163, 141, 0.85);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgba(206, 163, 141, 0.85);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgba(206, 163, 141, 0.85);
  border-left-color: rgba(206, 163, 141, 0.85);
  border-right-color: rgba(206, 163, 141, 0.85);
  border-top-color: rgba(206, 163, 141, 0.85);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-left: 25.2px;
  padding-right: 25.2px;
  padding-top: 21px;
}

body pre:has(> code) {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-left: 25.2px;
  padding-right: 25.2px;
  padding-top: 21px;
}`,
    images: `body audio {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

body figcaption {
  color: rgba(232, 240, 247, 0.75);
}

body figure {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body img {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-radius: 8px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  filter: brightness(0.7);
}

body video {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 8px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-left-color: rgb(102, 102, 102);
  border-left-style: dotted;
  border-left-width: 2px;
  border-right-color: rgb(102, 102, 102);
  border-right-style: dotted;
  border-right-width: 2px;
  border-top-color: rgb(102, 102, 102);
  border-top-style: dotted;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-top: 4px;
}

body .footnotes {
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}

body .transclude {
  background-color: rgba(27, 28, 29, 0.85);
  border-bottom-color: rgb(72, 83, 91);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(72, 83, 91);
  border-right-color: rgb(72, 83, 91);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(72, 83, 91);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-top: 4px;
}

body .transclude-inner {
  background-color: rgba(27, 28, 29, 0.85);
  border-bottom-color: rgb(72, 83, 91);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(72, 83, 91);
  border-right-color: rgb(72, 83, 91);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(72, 83, 91);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-top: 4px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(72, 83, 91);
  border-bottom-width: 2px;
  border-left-color: rgb(72, 83, 91);
  border-left-width: 2px;
  border-right-color: rgb(72, 83, 91);
  border-right-width: 2px;
  border-top-color: rgb(72, 83, 91);
  border-top-width: 2px;
  margin-left: -20.8px;
  transition: 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

body li.task-list-item[data-task='!'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='*'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

body li.task-list-item[data-task='/'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='>'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='?'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='I'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='S'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='b'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='c'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='d'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='f'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='i'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='k'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='l'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='p'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='u'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

body li.task-list-item[data-task='w'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
}

body .callout[data-callout="abstract"] {
  --callout-color: 126.48, 199.92, 197.472;
  background-color: rgba(126, 200, 197, 0.1);
  border-bottom-color: rgba(126, 200, 197, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(126, 200, 197, 0.25);
  border-right-color: rgba(126, 200, 197, 0.25);
  border-top-color: rgba(126, 200, 197, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 209.304, 137.496, 137.496;
  background-color: rgba(209, 137, 137, 0.1);
  border-bottom-color: rgba(209, 137, 137, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(209, 137, 137, 0.25);
  border-right-color: rgba(209, 137, 137, 0.25);
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  --callout-color: 209.304, 137.496, 137.496;
  background-color: rgba(209, 137, 137, 0.1);
  border-bottom-color: rgba(209, 137, 137, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(209, 137, 137, 0.25);
  border-right-color: rgba(209, 137, 137, 0.25);
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  --callout-color: 186.2265, 179.265, 238.935;
  background-color: rgba(186, 179, 239, 0.1);
  border-bottom-color: rgba(186, 179, 239, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(186, 179, 239, 0.25);
  border-right-color: rgba(186, 179, 239, 0.25);
  border-top-color: rgba(186, 179, 239, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  --callout-color: 209.304, 137.496, 137.496;
  background-color: rgba(209, 137, 137, 0.1);
  border-bottom-color: rgba(209, 137, 137, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(209, 137, 137, 0.25);
  border-right-color: rgba(209, 137, 137, 0.25);
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 126.48, 183.6, 240.72;
  background-color: rgba(126, 184, 241, 0.1);
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-right-color: rgba(126, 184, 241, 0.25);
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 126.48, 183.6, 240.72;
  background-color: rgba(126, 184, 241, 0.1);
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-right-color: rgba(126, 184, 241, 0.25);
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 206.04, 162.52, 140.76;
  background-color: rgba(206, 163, 141, 0.1);
  border-bottom-color: rgba(206, 163, 141, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 163, 141, 0.25);
  border-right-color: rgba(206, 163, 141, 0.25);
  border-top-color: rgba(206, 163, 141, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  --callout-color: 147.288, 199.512, 155.992;
  background-color: rgba(147, 200, 156, 0.1);
  border-bottom-color: rgba(147, 200, 156, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(147, 200, 156, 0.25);
  border-right-color: rgba(147, 200, 156, 0.25);
  border-top-color: rgba(147, 200, 156, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  --callout-color: 126.48, 199.92, 197.472;
  background-color: rgba(126, 200, 197, 0.1);
  border-bottom-color: rgba(126, 200, 197, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(126, 200, 197, 0.25);
  border-right-color: rgba(126, 200, 197, 0.25);
  border-top-color: rgba(126, 200, 197, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 126.48, 183.6, 240.72;
  background-color: rgba(126, 184, 241, 0.1);
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-right-color: rgba(126, 184, 241, 0.25);
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  --callout-color: 206.04, 162.52, 140.76;
  background-color: rgba(206, 163, 141, 0.1);
  border-bottom-color: rgba(206, 163, 141, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 163, 141, 0.25);
  border-right-color: rgba(206, 163, 141, 0.25);
  border-top-color: rgba(206, 163, 141, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgba(232, 240, 247, 0.75);
}

body .search > .search-container > .search-space {
  background-color: rgb(27, 28, 29);
}

body .search > .search-container > .search-space > * {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
  transition: --scrollbar-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(232, 240, 247, 0.75);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(232, 240, 247, 0.75);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(97, 131, 158, 0.2);
  color: rgba(232, 240, 247, 0.75);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(97, 131, 158, 0.2);
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(97, 131, 158, 0.2);
  color: rgba(232, 240, 247, 0.75);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(86, 115, 140, 0.1);
  border-bottom-color: rgb(99, 136, 160);
  border-bottom-width: 1px;
  border-left-color: rgb(99, 136, 160);
  border-left-width: 1px;
  border-right-color: rgb(99, 136, 160);
  border-right-width: 1px;
  border-top-color: rgb(99, 136, 160);
  border-top-width: 1px;
}

body a.internal.tag-link::before {
  color: rgb(99, 136, 160);
}

body h1 {
  color: rgb(209, 137, 137);
}

body h2 {
  color: rgb(206, 163, 141);
  font-family: "";
}

body h2.page-title, h2.page-title a {
  color: rgb(209, 137, 137);
}

body h3 {
  color: rgb(147, 200, 156);
  font-family: "";
}

body h4 {
  color: rgb(126, 184, 241);
  font-family: "";
}

body h5 {
  color: rgb(186, 179, 239);
  font-family: "";
}

body h6 {
  color: rgb(126, 200, 197);
  font-family: "";
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-right-color: rgba(126, 184, 241, 0.25);
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  cursor: pointer;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  cursor: pointer;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(103, 136, 162, 0.85);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}`,
    footer: `body footer {
  background-color: rgb(29, 32, 32);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgba(232, 240, 247, 0.75);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body ul.section-ul {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

body .metadata {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(77, 82, 86, 0.75);
  margin-bottom: 8px;
}

body .navigation-progress {
  background-color: rgb(29, 32, 32);
}

body .page-header h2.page-title {
  color: rgba(232, 240, 247, 0.75);
}

body abbr {
  color: rgba(232, 240, 247, 0.75);
  text-decoration: underline dotted rgba(232, 240, 247, 0.75);
}

body details {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body input[type=text] {
  padding-bottom: 6px;
  padding-top: 6px;
}

body kbd {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(63, 63, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(63, 63, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(63, 63, 63) 0px 1px 1px 0px;
  color: rgb(179, 179, 179);
  font-family: system, BlinkMacSystemFont, "??", maplemono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

body progress {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

body sub {
  color: rgba(232, 240, 247, 0.75);
}

body summary {
  color: rgba(232, 240, 247, 0.75);
}

body sup {
  color: rgba(232, 240, 247, 0.75);
}`,
  },
  light: {
    base: `:root:root {
  --accent-active: rgb(167, 147, 118) !important;
  --accent-active-bg: hsla(
    35,
    22%,
    56%,
    1
  ) !important;
  --accent-inactive: rgb(210, 201, 188) !important;
  --active-line: 35,
    20%,
    92% !important;
  --animation: 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --animation-delay: 1000ms !important;
  --animation-dur: 250ms !important;
  --animation-fast: 125ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --animation-slow: 500ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --app-bg-image: linear-gradient(
    320deg,
    rgb(236, 245, 224),
    rgb(234, 212, 210)
  ) !important;
  --app-layout-spacing: 6px !important;
  --background-modifier-active-hover: rgba(167, 147, 118, 0.1) !important;
  --background-modifier-border: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --background-modifier-border-focus: hsla(
    35,
    15.4%,
    56%,
    60%
  ) !important;
  --background-modifier-border-hover: hsla(
    35,
    15%,
    56%,
    60%
  ) !important;
  --background-modifier-error: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --background-modifier-error-hover: rgba(189.0825, 81.2175, 81.2175, 0.9) !important;
  --background-modifier-error-rgb: 189.0825, 81.2175, 81.2175 !important;
  --background-modifier-hover: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --background-modifier-message: hsla(
    35,
    22%,
    56%,
    1
  ) !important;
  --background-modifier-success: rgba(71.4, 142.8, 20.4, 1) !important;
  --background-modifier-success-rgb: 71.4, 142.8, 20.4 !important;
  --background-primary: rgb(248, 248, 246) !important;
  --background-primary-alt: rgb(242, 240, 237) !important;
  --background-primary-alt-hsl: 35, 18%, 93.5% !important;
  --background-primary-hsl: 35, 12%, 97% !important;
  --background-secondary: rgb(239, 237, 236) !important;
  --background-secondary-hsl: 17, 8%, 93% !important;
  --base-accent-h: 35 !important;
  --bases-cards-background: rgb(248, 248, 246) !important;
  --bases-cards-cover-background: rgb(242, 240, 237) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(
    35,
    15%,
    56%,
    60%
  ) !important;
  --bases-embed-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --bases-table-cell-background-active: rgb(248, 248, 246) !important;
  --bases-table-cell-background-disabled: rgb(242, 240, 237) !important;
  --bases-table-cell-background-selected: rgba(167, 147, 118, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(
    35,
    15%,
    56%,
    60%
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
    34,
    22.22%,
    60.2%
  ) !important;
  --bases-table-group-background: rgb(242, 240, 237) !important;
  --bases-table-header-background: rgb(248, 248, 246) !important;
  --bases-table-header-background-hover: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --bases-table-summary-background: rgb(248, 248, 246) !important;
  --bases-table-summary-background-hover: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --bg-editor: hsla(
    35, 12%, 97%,
    max(0.6, 0.8)
  ) !important;
  --bg-opacity: 0.6 !important;
  --bg-surface: rgba(239, 237, 236, 0.6) !important;
  --block-outline-width: 2px !important;
  --blockquote-background-color: rgb(242, 240, 237) !important;
  --blockquote-border-color: rgb(167, 147, 118) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-radius: 6px !important;
  --blur-background: color-mix(in srgb, rgb(248, 248, 246) 65%, transparent) linear-gradient(rgb(248, 248, 246), color-mix(in srgb, rgb(248, 248, 246) 65%, transparent)) !important;
  --button-radius: 6px !important;
  --callout-bug: 189.0825, 81.2175, 81.2175;
  --callout-default: 5.202, 132.8822, 168.198;
  --callout-error: 189.0825, 81.2175, 81.2175;
  --callout-example: 114.24, 97.92, 146.88;
  --callout-fail: 189.0825, 81.2175, 81.2175;
  --callout-important: 17.85, 124.95, 82.11;
  --callout-info: 5.202, 132.8822, 168.198;
  --callout-question: 199.41, 122.774, 35.19;
  --callout-radius: 8px;
  --callout-success: 71.4, 142.8, 20.4;
  --callout-summary: 17.85, 124.95, 82.11;
  --callout-tip: 17.85, 124.95, 82.11;
  --callout-todo: 5.202, 132.8822, 168.198;
  --callout-warning: 199.41, 122.774, 35.19;
  --canvas-background: rgb(248, 248, 246) !important;
  --canvas-color-1: 189.0825, 81.2175, 81.2175 !important;
  --canvas-color-2: 199.41, 122.774, 35.19 !important;
  --canvas-color-3: 177.48, 139.74, 26.52 !important;
  --canvas-color-4: 71.4, 142.8, 20.4 !important;
  --canvas-color-5: 17.85, 124.95, 82.11 !important;
  --canvas-color-6: 114.24, 97.92, 146.88 !important;
  --checkbox-border-color: rgb(210, 201, 188) !important;
  --checkbox-border-color-hover: rgb(167, 147, 118) !important;
  --checkbox-color: rgb(167, 147, 118) !important;
  --checkbox-color-hover: rgb(183, 165, 143) !important;
  --checkbox-marker-color: #fafafa !important;
  --code-background: rgb(242, 240, 237) !important;
  --code-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --code-class: rgba(199.41, 122.774, 35.19, 1) !important;
  --code-function: rgba(5.202, 132.8822, 168.198, 1) !important;
  --code-important: rgba(114.24, 97.92, 146.88, 1) !important;
  --code-keyword: rgba(114.24, 97.92, 146.88, 1) !important;
  --code-mac-style-header-bg: #333 !important;
  --code-mac-style-header-color: #ddd !important;
  --code-normal: #5c5c5c !important;
  --code-operator: #707070 !important;
  --code-property: rgba(177.48, 139.74, 26.52, 1) !important;
  --code-punctuation: #707070 !important;
  --code-radius: 8px !important;
  --code-string: rgba(71.4, 142.8, 20.4, 1) !important;
  --code-tag: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --code-value: rgba(17.85, 124.95, 82.11, 1) !important;
  --code-variable: rgba(177.48, 139.74, 26.52, 1) !important;
  --codeFont: '??', "maplemono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(167, 147, 118) !important;
  --color-accent: rgb(167, 147, 118) !important;
  --color-accent-1: rgb(175, 156, 131) !important;
  --color-accent-2: rgb(183, 165, 143) !important;
  --color-accent-hsl: 35, 22%,
    56% !important;
  --color-blue: rgba(5.202, 132.8822, 168.198, 1) !important;
  --color-blue-rgb: 5.202, 132.8822, 168.198 !important;
  --color-cyan: rgba(17.85, 124.95, 82.11, 1) !important;
  --color-cyan-rgb: 17.85, 124.95, 82.11 !important;
  --color-green: rgba(71.4, 142.8, 20.4, 1) !important;
  --color-green-rgb: 71.4, 142.8, 20.4 !important;
  --color-opacity: 1 !important;
  --color-orange: rgba(199.41, 122.774, 35.19, 1) !important;
  --color-orange-rgb: 199.41, 122.774, 35.19 !important;
  --color-purple: rgba(114.24, 97.92, 146.88, 1) !important;
  --color-purple-rgb: 114.24, 97.92, 146.88 !important;
  --color-red: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --color-red-rgb: 189.0825, 81.2175, 81.2175 !important;
  --color-yellow: rgba(177.48, 139.74, 26.52, 1) !important;
  --color-yellow-rgb: 177.48, 139.74, 26.52 !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(175, 156, 131) !important;
  --divider-width-hover: 4px !important;
  --editor-min-opacity: 0.8 !important;
  --embed-background: hsla(
    35, 12%, 97%,
    max(0.6, 0.8)
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(210, 201, 188),
    inset 0 0 0 1px rgb(210, 201, 188) !important;
  --embed-border-bottom: 2px solid rgb(210, 201, 188) !important;
  --embed-border-end: 2px solid rgb(210, 201, 188) !important;
  --embed-border-start: 2px solid rgb(210, 201, 188) !important;
  --embed-border-top: 2px solid rgb(210, 201, 188) !important;
  --embed-padding: 16px 20px !important;
  --embed-radius: 8px !important;
  --file-folding-offset: 28px !important;
  --file-header-background: rgb(248, 248, 246) !important;
  --file-header-background-focused: rgb(248, 248, 246) !important;
  --file-header-font-size: 14px !important;
  --file-line-width: clamp(600px, 72%, 850px) !important;
  --folder-color: rgb(208, 164, 22) !important;
  --folder-inactive: 85% !important;
  --font-monospace: '??', "maplemono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "maplemono" !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --footnote-input-background-active: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --footnote-line-height: 1.8 !important;
  --frame-bg: rgb(235, 233, 229) !important;
  --graph-node-attachment: rgba(177.48, 139.74, 26.52, 1) !important;
  --graph-node-focused: rgb(167, 147, 118) !important;
  --graph-node-tag: rgba(71.4, 142.8, 20.4, 1) !important;
  --grid-dots-color: #d4d4d4 !important;
  --grid-line-color: #e3e3e3 !important;
  --grid-spacing: 20px !important;
  --h1-color: rgb(189.0825, 81.2175, 81.2175) !important;
  --h1-color-rgb: 189.0825, 81.2175, 81.2175 !important;
  --h1-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h1-line-height: 46.08px !important;
  --h1-size: 25.6px !important;
  --h1-weight: 750 !important;
  --h2-color: rgb(199.41, 122.774, 35.19) !important;
  --h2-color-rgb: 199.41, 122.774, 35.19 !important;
  --h2-font: "" !important;
  --h2-line-height: 43.2px !important;
  --h2-size: 24px !important;
  --h2-weight: 700 !important;
  --h3-color: rgb(71.4, 142.8, 20.4) !important;
  --h3-color-rgb: 71.4, 142.8, 20.4 !important;
  --h3-font: "" !important;
  --h3-line-height: 40.32px !important;
  --h3-size: 22.4px !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(5.202, 132.8822, 168.198) !important;
  --h4-color-rgb: 5.202, 132.8822, 168.198 !important;
  --h4-font: "" !important;
  --h4-line-height: 37.44px !important;
  --h4-size: 20.8px !important;
  --h4-weight: 550 !important;
  --h5-color: rgb(114.24, 97.92, 146.88) !important;
  --h5-color-rgb: 114.24, 97.92, 146.88 !important;
  --h5-font: "" !important;
  --h5-line-height: 34.56px !important;
  --h5-size: 19.2px !important;
  --h5-weight: 550 !important;
  --h6-color: rgb(17.85, 124.95, 82.11) !important;
  --h6-color-rgb: 17.85, 124.95, 82.11 !important;
  --h6-font: "" !important;
  --h6-line-height: 31.68px !important;
  --h6-size: 17.6px !important;
  --h6-variant: small-caps !important;
  --h6-weight: 500 !important;
  --heading-spacing: 20px !important;
  --highlight: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --hr-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --icon-color-active: rgb(167, 147, 118) !important;
  --inline-code: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --inline-title-color: rgb(189.0825, 81.2175, 81.2175) !important;
  --inline-title-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-line-height: 46.08px !important;
  --inline-title-size: 25.6px !important;
  --inline-title-weight: 750 !important;
  --input-radius: 6px !important;
  --interactive-accent: rgb(175, 156, 131) !important;
  --interactive-accent-hover: rgb(183, 165, 143) !important;
  --interactive-accent-hsl: 35, 22%,
    56% !important;
  --light: rgb(248, 248, 246) !important;
  --lightgray: rgb(239, 237, 236) !important;
  --line-height-normal: 1.8 !important;
  --line-height-tight: 1.5 !important;
  --link-color: rgba(17.85, 124.95, 82.11, 1) !important;
  --link-color-hover: rgba(17.85, 124.95, 82.11, 1) !important;
  --link-color-rgb: 17.85, 124.95, 82.11 !important;
  --link-color-underline: rgba(17.85, 124.95, 82.11, 1) !important;
  --link-external-color: rgba(
    177.48, 139.74, 26.52,
    1
  ) !important;
  --link-external-color-hover: rgba(
    177.48, 139.74, 26.52,
    1
  ) !important;
  --link-external-color-rgb: 177.48, 139.74, 26.52 !important;
  --link-external-color-underline: rgba(
    177.48, 139.74, 26.52,
    1
  ) !important;
  --link-footnote: rgba(114.24, 97.92, 146.88, 1) !important;
  --link-text-size: 16px !important;
  --link-unresolved-color: rgba(
    17.85, 124.95, 82.11,
    0.85
  ) !important;
  --link-unresolved-decoration-color: rgba(
    17.85, 124.95, 82.11,
    0.85
  ) !important;
  --list-bullet-size: 7.33333px !important;
  --list-marker-color: rgb(167, 147, 118) !important;
  --list-marker-color-alt: rgb(167, 147, 118) !important;
  --list-marker-color-alt-render: transparent !important;
  --list-marker-color-collapsed: rgb(167, 147, 118) !important;
  --list-threading-color: rgb(210, 201, 188) !important;
  --list-threading-width: max(0.1rem, 2px) !important;
  --menu-background: rgb(239, 237, 236) !important;
  --menu-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --menu-padding: 4px !important;
  --metadata-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --metadata-divider-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --metadata-input-background-active: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --metadata-label-background-active: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --metadata-property-background-active: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(
    35,
    15%,
    56%,
    60%
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(
    35,
    15%,
    56%,
    60%
  ) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: rgb(248, 248, 246) !important;
  --modal-close-button-padding: 12px !important;
  --modal-header-height: 48px !important;
  --modal-height: min(85vh, 1000px) !important;
  --modal-width: min(90vw, 1100px) !important;
  --nav-indentation-guide-color: #e0e0e0 !important;
  --nav-indentation-guide-width: 1.8px !important;
  --nav-item-background-active: hsla(
    35,
    22%,
    56%,
    1
  ) !important;
  --nav-item-background-hover: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --nav-item-background-selected: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --nav-item-children-padding-left: 8px !important;
  --nav-item-color-highlighted: rgb(167, 147, 118) !important;
  --nav-item-size: 14.4px !important;
  --outline-guideline-color: rgb(210, 201, 188) !important;
  --outline-guideline-color-alt: rgb(167, 147, 118) !important;
  --outline-guideline-width: 2px !important;
  --outline-item-height: 25.92px !important;
  --p-spacing: 8px !important;
  --pdf-background: transparent !important;
  --pdf-page-background: rgb(248, 248, 246) !important;
  --pdf-sidebar-background: rgb(248, 248, 246) !important;
  --pill-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --pill-border-color-hover: hsla(
    35,
    15.4%,
    56%,
    60%
  ) !important;
  --pill-color-remove-hover: rgb(167, 147, 118) !important;
  --prompt-background: rgb(248, 248, 246) !important;
  --raised-background: color-mix(in srgb, rgb(248, 248, 246) 65%, transparent) linear-gradient(rgb(248, 248, 246), color-mix(in srgb, rgb(248, 248, 246) 65%, transparent)) !important;
  --ribbon-background: rgb(239, 237, 236) !important;
  --ribbon-background-collapsed: rgb(248, 248, 246) !important;
  --scrollbar-color: rgba(0, 0, 0, 0) !important;
  --scrollbar-transition: --scrollbar-color 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --search-result-background: rgb(248, 248, 246) !important;
  --secondary: rgb(167, 147, 118) !important;
  --select-bg-img: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='%23222222' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/></svg>") !important;
  --setting-accent-h-dark: 207 !important;
  --setting-calendar-max-width: 500px !important;
  --setting-code-ligature: 'calt' !important;
  --setting-color-dirs: rgb(208, 164, 22) !important;
  --setting-file-line-width: clamp(600px, 72%, 850px) !important;
  --setting-group-heading-size: 16px !important;
  --setting-h1-weight: 750 !important;
  --setting-h2-font: "" !important;
  --setting-h2-weight: 700 !important;
  --setting-h3-font: "" !important;
  --setting-h3-weight: 600 !important;
  --setting-h4-font: "" !important;
  --setting-h4-weight: 550 !important;
  --setting-h5-font: "" !important;
  --setting-h5-weight: 550 !important;
  --setting-h6-font: "" !important;
  --setting-h6-weight: 500 !important;
  --setting-hr-icon: ''⭐'' !important;
  --setting-items-background: rgb(242, 240, 237) !important;
  --setting-items-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --setting-modal-header-title: 'Maple 1.0.0-beta.33' !important;
  --setting-scrollbar-hover: rgba(167, 147, 118, 0.4) !important;
  --setting-text-bold-style: underline dotted !important;
  --setting-text-highlight-bg: rgba(255, 208, 0, 0.4) !important;
  --setting-text-italic-style: underline dotted !important;
  --slider-thumb-border-color: hsla(
    35,
    15%,
    56%,
    60%
  ) !important;
  --slider-track-background: rgb(210, 201, 188) !important;
  --status-bar-background: rgb(239, 237, 236) !important;
  --status-bar-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 6px !important;
  --suggestion-background: rgb(248, 248, 246) !important;
  --sync-avatar-color-1: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --sync-avatar-color-2: rgba(199.41, 122.774, 35.19, 1) !important;
  --sync-avatar-color-3: rgba(177.48, 139.74, 26.52, 1) !important;
  --sync-avatar-color-4: rgba(71.4, 142.8, 20.4, 1) !important;
  --sync-avatar-color-5: rgba(17.85, 124.95, 82.11, 1) !important;
  --sync-avatar-color-6: rgba(5.202, 132.8822, 168.198, 1) !important;
  --sync-avatar-color-7: rgba(114.24, 97.92, 146.88, 1) !important;
  --tab-active-shadow: none !important;
  --tab-background-active: rgb(248, 248, 246) !important;
  --tab-container-background: rgb(235, 233, 229) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 6px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: rgb(239, 237, 236) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(239, 237, 236), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(167, 147, 118) !important;
  --tab-text-color-focused-highlighted: rgb(167, 147, 118) !important;
  --table-add-button-background: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --table-add-button-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --table-add-button-border-width: 0 !important;
  --table-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --table-cell-vertical-alignment: middle !important;
  --table-drag-handle-background: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --table-drag-handle-background-active: rgb(210, 201, 188) !important;
  --table-drag-handle-color-active: #fafafa !important;
  --table-header-background: rgb(242, 240, 237) !important;
  --table-header-background-hover: rgb(242, 240, 237) !important;
  --table-header-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --table-line-height: 1.5 !important;
  --table-selection: rgba(167, 147, 118, 0.1) !important;
  --table-selection-border-color: rgb(210, 201, 188) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: rgba(167, 147, 118, 0.1) !important;
  --tag-background-hover: rgba(167, 147, 118, 0.2) !important;
  --tag-border-color: rgb(167, 147, 118) !important;
  --tag-border-color-hover: rgba(167, 147, 118, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: rgb(167, 147, 118) !important;
  --tag-color-hover: rgb(167, 147, 118) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 0 !important;
  --tertiary: rgb(183, 165, 143) !important;
  --text-accent: rgb(167, 147, 118) !important;
  --text-accent-hover: rgb(183, 165, 143) !important;
  --text-error: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --text-on-accent: #fafafa !important;
  --text-selection: rgba(167, 147, 118, 0.25) !important;
  --text-success: rgba(71.4, 142.8, 20.4, 1) !important;
  --text-warning: rgba(199.41, 122.774, 35.19, 1) !important;
  --textHighlight: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --theme-accent-active-h: 35 !important;
  --theme-accent-active-l: 56% !important;
  --theme-accent-active-s: 22% !important;
  --theme-accent-h: 35 !important;
  --theme-accent-inactive-h: 35 !important;
  --theme-accent-inactive-l: 78% !important;
  --theme-accent-inactive-s: 20% !important;
  --titlebar-background: rgb(235, 233, 229) !important;
  --titlebar-background-focused: rgb(235, 233, 229) !important;
  --titlebar-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(239, 237, 236, 0.6);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(239, 237, 236, 0.6);
  border-left-color: rgba(0, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  text-decoration: underline dotted rgb(34, 34, 34);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

body .page article p > em, em {
  text-decoration: underline dotted rgb(34, 34, 34);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

body .page article p > i, i {
  text-decoration: underline dotted rgb(34, 34, 34);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

body .page article p > strong, strong {
  text-decoration: underline dotted rgb(34, 34, 34);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}`,
    links: `body a.external, footer a {
  color: rgb(177, 140, 27);
  outline: rgb(177, 140, 27) none 0px;
  text-decoration: underline rgb(177, 140, 27);
  text-decoration-color: rgb(177, 140, 27);
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(18, 125, 82);
  outline: rgb(18, 125, 82) none 0px;
  text-decoration: underline rgb(18, 125, 82);
  text-decoration-color: rgb(18, 125, 82);
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

body a.internal.broken {
  color: rgba(18, 125, 82, 0.85);
  outline: rgba(18, 125, 82, 0.85) none 0px;
  text-decoration: underline rgba(18, 125, 82, 0.85);
  text-decoration-color: rgba(18, 125, 82, 0.85);
}`,
    lists: `body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(241, 239, 235);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body table {
  margin-top: 8px;
  width: 600px;
}

body td {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  vertical-align: middle;
}

body th {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  vertical-align: middle;
}`,
    code: `body code {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(92, 92, 92);
  font-family: "??", maplemono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(0, 0, 0, 0);
}

body pre > code > [data-line] {
  border-left-color: rgb(199, 123, 35);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(199, 123, 35);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(199, 123, 35);
  border-left-color: rgb(199, 123, 35);
  border-right-color: rgb(199, 123, 35);
  border-top-color: rgb(199, 123, 35);
}

body pre > code, pre:has(> code) {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-left: 25.2px;
  padding-right: 25.2px;
  padding-top: 21px;
}

body pre:has(> code) {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-left: 25.2px;
  padding-right: 25.2px;
  padding-top: 21px;
}`,
    images: `body audio {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

body img {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 8px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-left-color: rgb(171, 171, 171);
  border-left-style: dotted;
  border-left-width: 2px;
  border-right-color: rgb(171, 171, 171);
  border-right-style: dotted;
  border-right-width: 2px;
  border-top-color: rgb(171, 171, 171);
  border-top-style: dotted;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-top: 4px;
}

body .transclude {
  background-color: rgba(248, 248, 246, 0.8);
  border-bottom-color: rgb(210, 201, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(210, 201, 188);
  border-right-color: rgb(210, 201, 188);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(210, 201, 188);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-top: 4px;
}

body .transclude-inner {
  background-color: rgba(248, 248, 246, 0.8);
  border-bottom-color: rgb(210, 201, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(210, 201, 188);
  border-right-color: rgb(210, 201, 188);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(210, 201, 188);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-top: 4px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(210, 201, 188);
  border-bottom-width: 2px;
  border-left-color: rgb(210, 201, 188);
  border-left-width: 2px;
  border-right-color: rgb(210, 201, 188);
  border-right-width: 2px;
  border-top-color: rgb(210, 201, 188);
  border-top-width: 2px;
  margin-left: -20.8px;
  transition: 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
}

body .callout[data-callout="abstract"] {
  --callout-color: 17.85, 124.95, 82.11;
  background-color: rgba(18, 125, 82, 0.1);
  border-bottom-color: rgba(18, 125, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(18, 125, 82, 0.25);
  border-right-color: rgba(18, 125, 82, 0.25);
  border-top-color: rgba(18, 125, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 189.0825, 81.2175, 81.2175;
  background-color: rgba(189, 81, 81, 0.1);
  border-bottom-color: rgba(189, 81, 81, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(189, 81, 81, 0.25);
  border-right-color: rgba(189, 81, 81, 0.25);
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  --callout-color: 189.0825, 81.2175, 81.2175;
  background-color: rgba(189, 81, 81, 0.1);
  border-bottom-color: rgba(189, 81, 81, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(189, 81, 81, 0.25);
  border-right-color: rgba(189, 81, 81, 0.25);
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  --callout-color: 114.24, 97.92, 146.88;
  background-color: rgba(114, 98, 147, 0.1);
  border-bottom-color: rgba(114, 98, 147, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(114, 98, 147, 0.25);
  border-right-color: rgba(114, 98, 147, 0.25);
  border-top-color: rgba(114, 98, 147, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  --callout-color: 189.0825, 81.2175, 81.2175;
  background-color: rgba(189, 81, 81, 0.1);
  border-bottom-color: rgba(189, 81, 81, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(189, 81, 81, 0.25);
  border-right-color: rgba(189, 81, 81, 0.25);
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 5.202, 132.8822, 168.198;
  background-color: rgba(5, 133, 168, 0.1);
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-right-color: rgba(5, 133, 168, 0.25);
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 5.202, 132.8822, 168.198;
  background-color: rgba(5, 133, 168, 0.1);
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-right-color: rgba(5, 133, 168, 0.25);
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 199.41, 122.774, 35.19;
  background-color: rgba(199, 123, 35, 0.1);
  border-bottom-color: rgba(199, 123, 35, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(199, 123, 35, 0.25);
  border-right-color: rgba(199, 123, 35, 0.25);
  border-top-color: rgba(199, 123, 35, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  --callout-color: 71.4, 142.8, 20.4;
  background-color: rgba(71, 143, 20, 0.1);
  border-bottom-color: rgba(71, 143, 20, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(71, 143, 20, 0.25);
  border-right-color: rgba(71, 143, 20, 0.25);
  border-top-color: rgba(71, 143, 20, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  --callout-color: 17.85, 124.95, 82.11;
  background-color: rgba(18, 125, 82, 0.1);
  border-bottom-color: rgba(18, 125, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(18, 125, 82, 0.25);
  border-right-color: rgba(18, 125, 82, 0.25);
  border-top-color: rgba(18, 125, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 5.202, 132.8822, 168.198;
  background-color: rgba(5, 133, 168, 0.1);
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-right-color: rgba(5, 133, 168, 0.25);
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  --callout-color: 199.41, 122.774, 35.19;
  background-color: rgba(199, 123, 35, 0.1);
  border-bottom-color: rgba(199, 123, 35, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(199, 123, 35, 0.25);
  border-right-color: rgba(199, 123, 35, 0.25);
  border-top-color: rgba(199, 123, 35, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 248, 246);
}

body .search > .search-container > .search-space > * {
  transition: --scrollbar-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(194, 181, 163, 0.25);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(194, 181, 163, 0.25);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(194, 181, 163, 0.25);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(167, 147, 118, 0.1);
  border-bottom-color: rgb(167, 147, 118);
  border-bottom-width: 1px;
  border-left-color: rgb(167, 147, 118);
  border-left-width: 1px;
  border-right-color: rgb(167, 147, 118);
  border-right-width: 1px;
  border-top-color: rgb(167, 147, 118);
  border-top-width: 1px;
}

body a.internal.tag-link::before {
  color: rgb(167, 147, 118);
}

body h1 {
  color: rgb(189, 81, 81);
}

body h2 {
  color: rgb(199, 123, 35);
  font-family: "";
}

body h2.page-title, h2.page-title a {
  color: rgb(189, 81, 81);
}

body h3 {
  color: rgb(71, 143, 20);
  font-family: "";
}

body h4 {
  color: rgb(5, 133, 168);
  font-family: "";
}

body h5 {
  color: rgb(114, 98, 147);
  font-family: "";
}

body h6 {
  color: rgb(18, 125, 82);
  font-family: "";
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-right-color: rgba(5, 133, 168, 0.25);
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  cursor: pointer;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  cursor: pointer;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(167, 147, 118);
  border-bottom-color: rgb(250, 250, 250);
  border-left-color: rgb(250, 250, 250);
  border-right-color: rgb(250, 250, 250);
  border-top-color: rgb(250, 250, 250);
  color: rgb(250, 250, 250);
}`,
    footer: `body footer {
  background-color: rgb(239, 237, 236);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    misc: `body .katex-display {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .metadata {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  margin-bottom: 8px;
}

body .navigation-progress {
  background-color: rgb(239, 237, 236);
}

body input[type=text] {
  padding-bottom: 6px;
  padding-top: 6px;
}

body kbd {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 212, 212);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(212, 212, 212);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(212, 212, 212) 0px 1px 1px 0px;
  color: rgb(92, 92, 92);
  font-family: system, BlinkMacSystemFont, "??", maplemono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}`,
  },
};
