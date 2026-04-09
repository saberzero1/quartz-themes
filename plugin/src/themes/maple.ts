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
  --accent-active: hsl(
    207,
    24%,
    52%
  ) !important;
  --accent-active-bg: hsla(
    207,
    24%,
    52%,
    0.85
  ) !important;
  --accent-inactive: hsl(
    207,
    12%,
    32%
  ) !important;
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
    hsl(267, 11%, 22%),
    hsl(197, 24%, 28%)
  ) !important;
  --app-layout-spacing: 6px !important;
  --background-modifier-active-hover: hsla(207, 24%,
    44.2%, 0.1) !important;
  --background-modifier-border: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --background-modifier-border-focus: hsla(
    207,
    16.8%,
    52%,
    60%
  ) !important;
  --background-modifier-border-hover: hsla(
    207,
    16.8%,
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
  --background-primary: hsl(207,
    5%, 11%) !important;
  --background-primary-alt: hsl(207, 8%, 13.5%) !important;
  --background-primary-alt-hsl: 207, 8%, 13.5% !important;
  --background-primary-hsl: 207,
    5%, 11% !important;
  --background-secondary: hsl(189,
    6%, 12%) !important;
  --background-secondary-hsl: 189,
    6%, 12% !important;
  --base-accent-h: 207 !important;
  --bases-cards-background: hsl(207,
    5%, 11%) !important;
  --bases-cards-cover-background: hsl(207, 8%, 13.5%) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(
    207,
    16.8%,
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
  --bases-table-cell-background-active: hsl(207,
    5%, 11%) !important;
  --bases-table-cell-background-disabled: hsl(207, 8%, 13.5%) !important;
  --bases-table-cell-background-selected: hsla(207, 24%,
    44.2%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(
    207,
    16.8%,
    52%,
    60%
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(207, 24%,
    44.2%) !important;
  --bases-table-group-background: hsl(207, 8%, 13.5%) !important;
  --bases-table-header-background: hsl(207,
    5%, 11%) !important;
  --bases-table-header-background-hover: hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ) !important;
  --bases-table-summary-background: hsl(207,
    5%, 11%) !important;
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
  --bg-surface: hsla(189,
    6%, 12%, 0.6) !important;
  --block-outline-width: 2px !important;
  --blockquote-background-color: hsl(207, 8%, 13.5%) !important;
  --blockquote-border-color: hsl(
    207,
    24%,
    52%
  ) !important;
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
  --canvas-background: hsl(207,
    5%, 11%) !important;
  --canvas-color-1: 209.304, 137.496, 137.496 !important;
  --canvas-color-2: 206.04, 162.52, 140.76 !important;
  --canvas-color-3: 214.2, 181.56, 132.6 !important;
  --canvas-color-4: 147.288, 199.512, 155.992 !important;
  --canvas-color-5: 126.48, 199.92, 197.472 !important;
  --canvas-color-6: 186.2265, 179.265, 238.935 !important;
  --caret-color: hsla(207, 50%, 94%, 75%) !important;
  --checkbox-border-color: hsl(
    207,
    12%,
    32%
  ) !important;
  --checkbox-border-color-hover: hsl(
    207,
    24%,
    52%
  ) !important;
  --checkbox-color: hsl(
    207,
    24%,
    52%
  ) !important;
  --checkbox-color-hover: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --checkbox-marker-color: #eaeaea !important;
  --code-background: hsl(207, 8%, 13.5%) !important;
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
  --codeFont: "maplemono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --color-accent: hsl(207, 24%,
    44.2%) !important;
  --color-accent-1: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --color-accent-2: hsl(
    202,
    25.2%,
    57.018%
  ) !important;
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
  --dark: hsla(207, 50%, 94%, 75%) !important;
  --darkgray: hsla(207, 50%, 94%, 75%) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(207, 24%,
    44.2%) !important;
  --divider-width-hover: 4px !important;
  --editor-min-opacity: 0.85 !important;
  --embed-background: hsla(
    207,
    5%, 11%,
    max(0.6, 0.85)
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
    207,
    12%,
    32%
  ),
    inset 0 0 0 1px hsl(
    207,
    12%,
    32%
  ) !important;
  --embed-border-bottom: 2px solid hsl(
    207,
    12%,
    32%
  ) !important;
  --embed-border-end: 2px solid hsl(
    207,
    12%,
    32%
  ) !important;
  --embed-border-start: 2px solid hsl(
    207,
    12%,
    32%
  ) !important;
  --embed-border-top: 2px solid hsl(
    207,
    12%,
    32%
  ) !important;
  --embed-padding: 16px 20px !important;
  --embed-radius: 8px !important;
  --file-folding-offset: 28px !important;
  --file-header-background: hsl(207,
    5%, 11%) !important;
  --file-header-background-focused: hsl(207,
    5%, 11%) !important;
  --file-header-font-size: 14px !important;
  --file-line-width: clamp(600px, 72%, 850px) !important;
  --flair-color: hsla(207, 50%, 94%, 75%) !important;
  --folder-color: hsl(45.81,80.87%,45.1%) !important;
  --folder-inactive: 70% !important;
  --font-monospace: "maplemono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
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
  --frame-bg: hsl(
    207,
    12%,
    12.42%
  ) !important;
  --graph-node-attachment: rgba(214.2, 181.56, 132.6, 0.85) !important;
  --graph-node-focused: hsl(
    207,
    24%,
    52%
  ) !important;
  --graph-node-tag: rgba(147.288, 199.512, 155.992, 0.85) !important;
  --graph-text: hsla(207, 50%, 94%, 75%) !important;
  --gray: hsla(207, 50%, 94%, 75%) !important;
  --grid-dots-color: #3f3f3f !important;
  --grid-line-color: #2a2a2a !important;
  --grid-spacing: 20px !important;
  --h1-color: rgb(209.304, 137.496, 137.496) !important;
  --h1-color-rgb: 209.304, 137.496, 137.496 !important;
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --icon-color-focused: hsla(207, 50%, 94%, 75%) !important;
  --inline-code: rgba(209.304, 137.496, 137.496, 0.85) !important;
  --inline-title-color: rgb(209.304, 137.496, 137.496) !important;
  --inline-title-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-line-height: 46.08px !important;
  --inline-title-size: 25.6px !important;
  --inline-title-weight: 750 !important;
  --input-radius: 6px !important;
  --interactive-accent: hsl(207, 24%,
    44.2%) !important;
  --interactive-accent-hover: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --interactive-accent-hsl: 207, 24%,
    44.2% !important;
  --light: hsl(207,
    5%, 11%) !important;
  --lightgray: hsl(189,
    6%, 12%) !important;
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
  --list-marker-color: hsl(
    207,
    24%,
    52%
  ) !important;
  --list-marker-color-alt: hsl(
    207,
    24%,
    52%
  ) !important;
  --list-marker-color-alt-render: transparent !important;
  --list-marker-color-collapsed: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --list-threading-color: hsl(
    207,
    12%,
    32%
  ) !important;
  --list-threading-width: max(0.1rem, 2px) !important;
  --menu-background: hsl(189,
    6%, 12%) !important;
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
  --metadata-input-text-color: hsla(207, 50%, 94%, 75%) !important;
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
    16.8%,
    52%,
    60%
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(
    207,
    16.8%,
    52%,
    60%
  ) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: hsl(207,
    5%, 11%) !important;
  --modal-close-button-padding: 12px !important;
  --modal-header-height: 48px !important;
  --modal-height: min(85vh, 1000px) !important;
  --modal-width: min(90vw, 1100px) !important;
  --nav-heading-color: hsla(207, 50%, 94%, 75%) !important;
  --nav-heading-color-hover: hsla(207, 50%, 94%, 75%) !important;
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
  --nav-item-color-active: hsla(207, 50%, 94%, 75%) !important;
  --nav-item-color-highlighted: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --nav-item-color-hover: hsla(207, 50%, 94%, 75%) !important;
  --nav-item-color-selected: hsla(207, 50%, 94%, 75%) !important;
  --nav-item-size: 14.4px !important;
  --outline-guideline-color: hsl(
    207,
    12%,
    32%
  ) !important;
  --outline-guideline-color-alt: hsl(
    207,
    24%,
    52%
  ) !important;
  --outline-guideline-width: 2px !important;
  --outline-item-height: 25.92px !important;
  --p-spacing: 8px !important;
  --pdf-background: transparent !important;
  --pdf-page-background: hsl(207,
    5%, 11%) !important;
  --pdf-shadow: 0 0 0 1px hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --pdf-sidebar-background: hsl(207,
    5%, 11%) !important;
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
    16.8%,
    52%,
    60%
  ) !important;
  --pill-color-hover: hsla(207, 50%, 94%, 75%) !important;
  --pill-color-remove-hover: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --prompt-background: hsl(207,
    5%, 11%) !important;
  --ribbon-background: hsl(189,
    6%, 12%) !important;
  --ribbon-background-collapsed: hsl(207,
    5%, 11%) !important;
  --scrollbar-color: rgba(0, 0, 0, 0) !important;
  --scrollbar-transition: --scrollbar-color 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --search-result-background: hsl(207,
    5%, 11%) !important;
  --secondary: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --select-bg-img: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='%2523DDDDDD' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/%3E%3C/svg%3E") !important;
  --setting-accent-h-dark: 207 !important;
  --setting-calendar-max-width: 500px !important;
  --setting-code-ligature: 'calt' !important;
  --setting-color-dirs: hsl(45.81,80.87%,45.1%) !important;
  --setting-file-line-width: clamp(600px, 72%, 850px) !important;
  --setting-group-heading-color: hsla(207, 50%, 94%, 75%) !important;
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
  --setting-items-background: hsl(207, 8%, 13.5%) !important;
  --setting-items-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --setting-modal-header-title: 'Maple 1.0.0-beta.33' !important;
  --setting-scrollbar-hover: hsla(207, 24%,
    44.2%, 40%) !important;
  --setting-text-bold-style: underline dotted !important;
  --setting-text-highlight-bg: rgba(255, 208, 0, 0.4) !important;
  --setting-text-italic-style: underline dotted !important;
  --slider-thumb-border-color: hsla(
    207,
    16.8%,
    52%,
    60%
  ) !important;
  --slider-track-background: hsl(
    207,
    12%,
    32%
  ) !important;
  --status-bar-background: hsl(189,
    6%, 12%) !important;
  --status-bar-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 6px !important;
  --suggestion-background: hsl(207,
    5%, 11%) !important;
  --sync-avatar-color-1: rgba(209.304, 137.496, 137.496, 0.85) !important;
  --sync-avatar-color-2: rgba(206.04, 162.52, 140.76, 0.85) !important;
  --sync-avatar-color-3: rgba(214.2, 181.56, 132.6, 0.85) !important;
  --sync-avatar-color-4: rgba(147.288, 199.512, 155.992, 0.85) !important;
  --sync-avatar-color-5: rgba(126.48, 199.92, 197.472, 0.85) !important;
  --sync-avatar-color-6: rgba(126.48, 183.6, 240.72, 0.85) !important;
  --sync-avatar-color-7: rgba(186.2265, 179.265, 238.935, 0.85) !important;
  --tab-active-shadow: none !important;
  --tab-background-active: hsl(207,
    5%, 11%) !important;
  --tab-container-background: hsl(
    207,
    12%,
    12.42%
  ) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 6px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: hsl(189,
    6%, 12%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(189,
    6%, 12%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 24%,
    44.2%) !important;
  --tab-text-color-focused-active-current: hsla(207, 50%, 94%, 75%) !important;
  --tab-text-color-focused-highlighted: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
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
  --table-drag-handle-background-active: hsl(
    207,
    12%,
    32%
  ) !important;
  --table-drag-handle-color-active: #eaeaea !important;
  --table-header-background: hsl(207, 8%, 13.5%) !important;
  --table-header-background-hover: hsl(207, 8%, 13.5%) !important;
  --table-header-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --table-header-color: hsla(207, 50%, 94%, 75%) !important;
  --table-line-height: 1.5 !important;
  --table-selection: hsla(207, 24%,
    44.2%, 0.1) !important;
  --table-selection-border-color: hsl(
    207,
    12%,
    32%
  ) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: hsla(207, 24%,
    44.2%, 0.1) !important;
  --tag-background-hover: hsla(207, 24%,
    44.2%, 0.2) !important;
  --tag-border-color: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --tag-border-color-hover: hsla(207, 24%,
    44.2%, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --tag-color-hover: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 0 !important;
  --tertiary: hsl(
    202,
    25.2%,
    57.018%
  ) !important;
  --text-accent: hsl(
    204,
    24.48%,
    50.83%
  ) !important;
  --text-accent-hover: hsl(
    202,
    25.2%,
    57.018%
  ) !important;
  --text-error: rgba(209.304, 137.496, 137.496, 0.85) !important;
  --text-normal: hsla(207, 50%, 94%, 75%) !important;
  --text-on-accent: #eaeaea !important;
  --text-selection: hsla(207, 24%,
    44.2%, 0.33) !important;
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
  --titlebar-background: hsl(
    207,
    12%,
    12.42%
  ) !important;
  --titlebar-background-focused: hsl(
    207,
    12%,
    12.42%
  ) !important;
  --titlebar-border-color: hsla(
    207,
    6%,
    32%,
    75%
  ) !important;
  --titlebar-text-color-focused: hsla(207, 50%, 94%, 75%) !important;
  --vault-profile-color: hsla(207, 50%, 94%, 75%) !important;
  --vault-profile-color-hover: hsla(207, 50%, 94%, 75%) !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(29, 32, 32, 0.6);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(32, 35, 37);
  border-color: rgba(77, 82, 86, 0.75);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 32, 32);
  border-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(77, 82, 86, 0.75);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(86, 115, 140, 0.1);
  color: rgb(99, 136, 160);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(29, 32, 32, 0.6);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .text-highlight {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body del {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgba(232, 240, 247, 0.75);
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(72, 83, 91);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(103, 136, 162);
  border-color: rgb(103, 136, 162);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(214, 182, 133, 0.85);
  outline: rgba(214, 182, 133, 0.85) none 0px;
  text-decoration: underline rgba(214, 182, 133, 0.85);
  text-decoration-color: rgba(214, 182, 133, 0.85);
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgba(126, 200, 197, 0.85);
  outline: rgba(126, 200, 197, 0.85) none 0px;
  text-decoration: underline rgba(126, 200, 197, 0.85);
  text-decoration-color: rgba(126, 200, 197, 0.85);
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(126, 200, 197, 0.72);
  outline: rgba(126, 200, 197, 0.72) none 0px;
  text-decoration: underline rgba(126, 200, 197, 0.72);
  text-decoration-color: rgba(126, 200, 197, 0.72);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body dt {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ol > li {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ul > li {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(32, 35, 37);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body table {
  color: rgba(232, 240, 247, 0.75);
  margin-top: 8px;
  width: 600px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
  vertical-align: middle;
}

html[saved-theme="dark"] body th {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
  vertical-align: middle;
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgba(206, 163, 141, 0.85);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgba(206, 163, 141, 0.85);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgba(206, 163, 141, 0.85);
  border-left-color: rgba(206, 163, 141, 0.85);
  border-right-color: rgba(206, 163, 141, 0.85);
  border-top-color: rgba(206, 163, 141, 0.85);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
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

html[saved-theme="dark"] body figcaption {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 137, 137);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(209, 137, 137);
  border-radius: 8px;
  border-right-color: rgb(209, 137, 137);
  border-top-color: rgb(209, 137, 137);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  filter: brightness(0.7);
}

html[saved-theme="dark"] body video {
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
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(27, 28, 29, 0.85);
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-style: solid;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-style: solid;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 28, 29);
  color: rgb(27, 28, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 28, 29);
  color: rgb(27, 28, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 28, 29);
  color: rgb(27, 28, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgba(186, 179, 239, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 28, 29);
  color: rgb(27, 28, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgba(126, 200, 197, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgba(206, 163, 141, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cg fill='currentColor'%3E%3Cpath d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/%3E%3Cpath d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cg fill='currentColor'%3E%3Cpath d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/%3E%3Cpath d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgba(126, 184, 241, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgba(186, 179, 239, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 7l6 6l4-4l8 8'/%3E%3Cpath d='M21 10v7h-7'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 7l6 6l4-4l8 8'/%3E%3Cpath d='M21 10v7h-7'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 28, 29);
  color: rgb(27, 28, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgba(126, 200, 197, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgba(126, 200, 197, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgba(147, 200, 156, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgba(147, 200, 156, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 28, 29);
  color: rgb(27, 28, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 28, 29);
  color: rgb(27, 28, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 17l6-6l4 4l8-8'/%3E%3Cpath d='M14 7h7v7'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 17l6-6l4 4l8-8'/%3E%3Cpath d='M14 7h7v7'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgba(147, 200, 156, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgba(214, 182, 133, 0.85);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
  color: rgb(126, 184, 241);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(126, 184, 241);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(27, 28, 29);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  transition: --scrollbar-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(97, 131, 158, 0.2);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(97, 131, 158, 0.2);
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(97, 131, 158, 0.2);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(99, 136, 160);
}

html[saved-theme="dark"] body h1 {
  color: rgb(209, 137, 137);
}

html[saved-theme="dark"] body h2 {
  color: rgb(206, 163, 141);
  font-family: "";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(209, 137, 137);
}

html[saved-theme="dark"] body h3 {
  color: rgb(147, 200, 156);
  font-family: "";
}

html[saved-theme="dark"] body h4 {
  color: rgb(126, 184, 241);
  font-family: "";
}

html[saved-theme="dark"] body h5 {
  color: rgb(186, 179, 239);
  font-family: "";
}

html[saved-theme="dark"] body h6 {
  color: rgb(126, 200, 197);
  font-family: "";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(55, 50, 62), rgb(54, 79, 89)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  cursor: pointer;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  cursor: pointer;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(54, 54, 54);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgba(232, 240, 247, 0.75);
}`,
    footer: `html[saved-theme="dark"] body footer {
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
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
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

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(77, 82, 86, 0.75);
  margin-bottom: 8px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(29, 32, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body abbr {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body input[type=text] {
  padding-bottom: 6px;
  padding-top: 6px;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body sub {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body summary {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body sup {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(86, 115, 140, 0.1);
  border-bottom-color: rgb(99, 136, 160);
  border-bottom-width: 1px;
  border-left-color: rgb(99, 136, 160);
  border-left-width: 1px;
  border-right-color: rgb(99, 136, 160);
  border-right-width: 1px;
  border-top-color: rgb(99, 136, 160);
  border-top-width: 1px;
  color: rgb(99, 136, 160);
}`,
  },
  light: {
    base: `:root:root {
  --accent-active: hsl(
    35,
    22%,
    56%
  ) !important;
  --accent-active-bg: hsla(
    35,
    22%,
    56%,
    1
  ) !important;
  --accent-inactive: hsl(
    35,
    20%,
    78%
  ) !important;
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
    hsl(85, 50%, 92%),
    hsl(5, 36%, 87%)
  ) !important;
  --app-layout-spacing: 6px !important;
  --background-modifier-active-hover: hsla(35, 22%,
    56%, 0.1) !important;
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
    15.4%,
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
  --background-primary: hsl(35, 12%, 97%) !important;
  --background-primary-alt: hsl(35, 18%, 93.5%) !important;
  --background-primary-alt-hsl: 35, 18%, 93.5% !important;
  --background-primary-hsl: 35, 12%, 97% !important;
  --background-secondary: hsl(17, 8%, 93%) !important;
  --background-secondary-hsl: 17, 8%, 93% !important;
  --base-accent-h: 35 !important;
  --bases-cards-background: hsl(35, 12%, 97%) !important;
  --bases-cards-cover-background: hsl(35, 18%, 93.5%) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(
    35,
    15.4%,
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
  --bases-table-cell-background-active: hsl(35, 12%, 97%) !important;
  --bases-table-cell-background-disabled: hsl(35, 18%, 93.5%) !important;
  --bases-table-cell-background-selected: hsla(35, 22%,
    56%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(
    35,
    15.4%,
    56%,
    60%
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
    34,
    22.22%,
    60.2%
  ) !important;
  --bases-table-group-background: hsl(35, 18%, 93.5%) !important;
  --bases-table-header-background: hsl(35, 12%, 97%) !important;
  --bases-table-header-background-hover: hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ) !important;
  --bases-table-summary-background: hsl(35, 12%, 97%) !important;
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
  --bg-surface: hsla(17, 8%, 93%, 0.6) !important;
  --block-outline-width: 2px !important;
  --blockquote-background-color: hsl(35, 18%, 93.5%) !important;
  --blockquote-border-color: hsl(
    35,
    22%,
    56%
  ) !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-radius: 6px !important;
  --blur-background: color-mix(in srgb, hsl(35, 12%, 97%) 65%, transparent) linear-gradient(hsl(35, 12%, 97%), color-mix(in srgb, hsl(35, 12%, 97%) 65%, transparent)) !important;
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
  --canvas-background: hsl(35, 12%, 97%) !important;
  --canvas-color-1: 189.0825, 81.2175, 81.2175 !important;
  --canvas-color-2: 199.41, 122.774, 35.19 !important;
  --canvas-color-3: 177.48, 139.74, 26.52 !important;
  --canvas-color-4: 71.4, 142.8, 20.4 !important;
  --canvas-color-5: 17.85, 124.95, 82.11 !important;
  --canvas-color-6: 114.24, 97.92, 146.88 !important;
  --checkbox-border-color: hsl(
    35,
    20%,
    78%
  ) !important;
  --checkbox-border-color-hover: hsl(
    35,
    22%,
    56%
  ) !important;
  --checkbox-color: hsl(
    35,
    22%,
    56%
  ) !important;
  --checkbox-color-hover: hsl(
    32,
    22.44%,
    64.4%
  ) !important;
  --checkbox-marker-color: #fafafa !important;
  --code-background: hsl(35, 18%, 93.5%) !important;
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
  --codeFont: "maplemono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: hsl(35, 22%,
    56%) !important;
  --color-accent: hsl(35, 22%,
    56%) !important;
  --color-accent-1: hsl(
    34,
    22.22%,
    60.2%
  ) !important;
  --color-accent-2: hsl(
    32,
    22.44%,
    64.4%
  ) !important;
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
  --divider-color-hover: hsl(
    34,
    22.22%,
    60.2%
  ) !important;
  --divider-width-hover: 4px !important;
  --editor-min-opacity: 0.8 !important;
  --embed-background: hsla(
    35, 12%, 97%,
    max(0.6, 0.8)
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
    35,
    20%,
    78%
  ),
    inset 0 0 0 1px hsl(
    35,
    20%,
    78%
  ) !important;
  --embed-border-bottom: 2px solid hsl(
    35,
    20%,
    78%
  ) !important;
  --embed-border-end: 2px solid hsl(
    35,
    20%,
    78%
  ) !important;
  --embed-border-start: 2px solid hsl(
    35,
    20%,
    78%
  ) !important;
  --embed-border-top: 2px solid hsl(
    35,
    20%,
    78%
  ) !important;
  --embed-padding: 16px 20px !important;
  --embed-radius: 8px !important;
  --file-folding-offset: 28px !important;
  --file-header-background: hsl(35, 12%, 97%) !important;
  --file-header-background-focused: hsl(35, 12%, 97%) !important;
  --file-header-font-size: 14px !important;
  --file-line-width: clamp(600px, 72%, 850px) !important;
  --folder-color: hsl(45.81,80.87%,45.1%) !important;
  --folder-inactive: 85% !important;
  --font-monospace: "maplemono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
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
  --frame-bg: hsl(
    35,
    13.2%,
    90.6%
  ) !important;
  --graph-node-attachment: rgba(177.48, 139.74, 26.52, 1) !important;
  --graph-node-focused: hsl(
    35,
    22%,
    56%
  ) !important;
  --graph-node-tag: rgba(71.4, 142.8, 20.4, 1) !important;
  --grid-dots-color: #d4d4d4 !important;
  --grid-line-color: #e3e3e3 !important;
  --grid-spacing: 20px !important;
  --h1-color: rgb(189.0825, 81.2175, 81.2175) !important;
  --h1-color-rgb: 189.0825, 81.2175, 81.2175 !important;
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --icon-color-active: hsl(35, 22%,
    56%) !important;
  --inline-code: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --inline-title-color: rgb(189.0825, 81.2175, 81.2175) !important;
  --inline-title-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-line-height: 46.08px !important;
  --inline-title-size: 25.6px !important;
  --inline-title-weight: 750 !important;
  --input-radius: 6px !important;
  --interactive-accent: hsl(
    34,
    22.22%,
    60.2%
  ) !important;
  --interactive-accent-hover: hsl(
    32,
    22.44%,
    64.4%
  ) !important;
  --interactive-accent-hsl: 35, 22%,
    56% !important;
  --light: hsl(35, 12%, 97%) !important;
  --lightgray: hsl(17, 8%, 93%) !important;
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
  --list-marker-color: hsl(
    35,
    22%,
    56%
  ) !important;
  --list-marker-color-alt: hsl(
    35,
    22%,
    56%
  ) !important;
  --list-marker-color-alt-render: transparent !important;
  --list-marker-color-collapsed: hsl(35, 22%,
    56%) !important;
  --list-threading-color: hsl(
    35,
    20%,
    78%
  ) !important;
  --list-threading-width: max(0.1rem, 2px) !important;
  --menu-background: hsl(17, 8%, 93%) !important;
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
    15.4%,
    56%,
    60%
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(
    35,
    15.4%,
    56%,
    60%
  ) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: hsl(35, 12%, 97%) !important;
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
  --nav-item-color-highlighted: hsl(35, 22%,
    56%) !important;
  --nav-item-size: 14.4px !important;
  --outline-guideline-color: hsl(
    35,
    20%,
    78%
  ) !important;
  --outline-guideline-color-alt: hsl(
    35,
    22%,
    56%
  ) !important;
  --outline-guideline-width: 2px !important;
  --outline-item-height: 25.92px !important;
  --p-spacing: 8px !important;
  --pdf-background: transparent !important;
  --pdf-page-background: hsl(35, 12%, 97%) !important;
  --pdf-sidebar-background: hsl(35, 12%, 97%) !important;
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
  --pill-color-remove-hover: hsl(35, 22%,
    56%) !important;
  --prompt-background: hsl(35, 12%, 97%) !important;
  --raised-background: color-mix(in srgb, hsl(35, 12%, 97%) 65%, transparent) linear-gradient(hsl(35, 12%, 97%), color-mix(in srgb, hsl(35, 12%, 97%) 65%, transparent)) !important;
  --ribbon-background: hsl(17, 8%, 93%) !important;
  --ribbon-background-collapsed: hsl(35, 12%, 97%) !important;
  --scrollbar-color: rgba(0, 0, 0, 0) !important;
  --scrollbar-transition: --scrollbar-color 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --search-result-background: hsl(35, 12%, 97%) !important;
  --secondary: hsl(35, 22%,
    56%) !important;
  --select-bg-img: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='%2523222222' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/%3E%3C/svg%3E") !important;
  --setting-accent-h-dark: 207 !important;
  --setting-calendar-max-width: 500px !important;
  --setting-code-ligature: 'calt' !important;
  --setting-color-dirs: hsl(45.81,80.87%,45.1%) !important;
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
  --setting-items-background: hsl(35, 18%, 93.5%) !important;
  --setting-items-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --setting-modal-header-title: 'Maple 1.0.0-beta.33' !important;
  --setting-scrollbar-hover: hsla(35, 22%,
    56%, 40%) !important;
  --setting-text-bold-style: underline dotted !important;
  --setting-text-highlight-bg: rgba(255, 208, 0, 0.4) !important;
  --setting-text-italic-style: underline dotted !important;
  --slider-thumb-border-color: hsla(
    35,
    15.4%,
    56%,
    60%
  ) !important;
  --slider-track-background: hsl(
    35,
    20%,
    78%
  ) !important;
  --status-bar-background: hsl(17, 8%, 93%) !important;
  --status-bar-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 6px !important;
  --suggestion-background: hsl(35, 12%, 97%) !important;
  --sync-avatar-color-1: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --sync-avatar-color-2: rgba(199.41, 122.774, 35.19, 1) !important;
  --sync-avatar-color-3: rgba(177.48, 139.74, 26.52, 1) !important;
  --sync-avatar-color-4: rgba(71.4, 142.8, 20.4, 1) !important;
  --sync-avatar-color-5: rgba(17.85, 124.95, 82.11, 1) !important;
  --sync-avatar-color-6: rgba(5.202, 132.8822, 168.198, 1) !important;
  --sync-avatar-color-7: rgba(114.24, 97.92, 146.88, 1) !important;
  --tab-active-shadow: none !important;
  --tab-background-active: hsl(35, 12%, 97%) !important;
  --tab-container-background: hsl(
    35,
    13.2%,
    90.6%
  ) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 6px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: hsl(17, 8%, 93%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(17, 8%, 93%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(35, 22%,
    56%) !important;
  --tab-text-color-focused-highlighted: hsl(35, 22%,
    56%) !important;
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
  --table-drag-handle-background-active: hsl(
    35,
    20%,
    78%
  ) !important;
  --table-drag-handle-color-active: #fafafa !important;
  --table-header-background: hsl(35, 18%, 93.5%) !important;
  --table-header-background-hover: hsl(35, 18%, 93.5%) !important;
  --table-header-border-color: hsla(
    35,
    10%,
    78%,
    75%
  ) !important;
  --table-line-height: 1.5 !important;
  --table-selection: hsla(35, 22%,
    56%, 0.1) !important;
  --table-selection-border-color: hsl(
    35,
    20%,
    78%
  ) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: hsla(35, 22%,
    56%, 0.1) !important;
  --tag-background-hover: hsla(35, 22%,
    56%, 0.2) !important;
  --tag-border-color: hsl(35, 22%,
    56%) !important;
  --tag-border-color-hover: hsla(35, 22%,
    56%, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(35, 22%,
    56%) !important;
  --tag-color-hover: hsl(35, 22%,
    56%) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 0 !important;
  --tertiary: hsl(
    32,
    22.44%,
    64.4%
  ) !important;
  --text-accent: hsl(35, 22%,
    56%) !important;
  --text-accent-hover: hsl(
    32,
    22.44%,
    64.4%
  ) !important;
  --text-error: rgba(189.0825, 81.2175, 81.2175, 1) !important;
  --text-on-accent: #fafafa !important;
  --text-selection: hsla(35, 22%,
    56%, 0.25) !important;
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
  --titlebar-background: hsl(
    35,
    13.2%,
    90.6%
  ) !important;
  --titlebar-background-focused: hsl(
    35,
    13.2%,
    90.6%
  ) !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(239, 237, 236, 0.6);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(241, 239, 235);
  border-color: rgba(205, 200, 193, 0.75);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(248, 248, 246);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(205, 200, 193, 0.75);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(167, 147, 118, 0.1);
  color: rgb(167, 147, 118);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(239, 237, 236, 0.6);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body h1.article-title {
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(210, 201, 188);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(167, 147, 118);
  border-color: rgb(167, 147, 118);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(177, 140, 27);
  outline: rgb(177, 140, 27) none 0px;
  text-decoration: underline rgb(177, 140, 27);
  text-decoration-color: rgb(177, 140, 27);
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(18, 125, 82);
  outline: rgb(18, 125, 82) none 0px;
  text-decoration: underline rgb(18, 125, 82);
  text-decoration-color: rgb(18, 125, 82);
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(18, 125, 82, 0.85);
  outline: rgba(18, 125, 82, 0.85) none 0px;
  text-decoration: underline rgba(18, 125, 82, 0.85);
  text-decoration-color: rgba(18, 125, 82, 0.85);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(241, 239, 235);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body table {
  margin-top: 8px;
  width: 600px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  vertical-align: middle;
}

html[saved-theme="light"] body th {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  vertical-align: middle;
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(199, 123, 35);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(199, 123, 35);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(199, 123, 35);
  border-left-color: rgb(199, 123, 35);
  border-right-color: rgb(199, 123, 35);
  border-top-color: rgb(199, 123, 35);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
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

html[saved-theme="light"] body img {
  border-bottom-color: rgb(189, 81, 81);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(189, 81, 81);
  border-radius: 8px;
  border-right-color: rgb(189, 81, 81);
  border-top-color: rgb(189, 81, 81);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
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
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(248, 248, 246, 0.8);
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 246);
  color: rgb(248, 248, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 246);
  color: rgb(248, 248, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 246);
  color: rgb(248, 248, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(114, 98, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 246);
  color: rgb(248, 248, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(18, 125, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(199, 123, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cg fill='currentColor'%3E%3Cpath d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/%3E%3Cpath d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cg fill='currentColor'%3E%3Cpath d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/%3E%3Cpath d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(5, 133, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(114, 98, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 7l6 6l4-4l8 8'/%3E%3Cpath d='M21 10v7h-7'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 7l6 6l4-4l8 8'/%3E%3Cpath d='M21 10v7h-7'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 246);
  color: rgb(248, 248, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(18, 125, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(18, 125, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(71, 143, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(71, 143, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 246);
  color: rgb(248, 248, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 248, 246);
  color: rgb(248, 248, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 17l6-6l4 4l8-8'/%3E%3Cpath d='M14 7h7v7'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 17l6-6l4 4l8-8'/%3E%3Cpath d='M14 7h7v7'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(71, 143, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(177, 140, 27);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
  color: rgb(5, 133, 168);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(5, 133, 168);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
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

html[saved-theme="light"] body .callout[data-callout="example"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
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

html[saved-theme="light"] body .callout[data-callout="info"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
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

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 248, 246);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  transition: --scrollbar-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(194, 181, 163, 0.25);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(194, 181, 163, 0.25);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(194, 181, 163, 0.25);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(167, 147, 118);
}

html[saved-theme="light"] body h1 {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body h2 {
  color: rgb(199, 123, 35);
  font-family: "";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body h3 {
  color: rgb(71, 143, 20);
  font-family: "";
}

html[saved-theme="light"] body h4 {
  color: rgb(5, 133, 168);
  font-family: "";
}

html[saved-theme="light"] body h5 {
  color: rgb(114, 98, 147);
  font-family: "";
}

html[saved-theme="light"] body h6 {
  color: rgb(18, 125, 82);
  font-family: "";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) linear-gradient(320deg, rgb(236, 245, 224), rgb(234, 212, 210)) no-repeat scroll 0% 0% / 100% 100% padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  cursor: pointer;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  cursor: pointer;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(224, 224, 224);
}`,
    footer: `html[saved-theme="light"] body footer {
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
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  margin-bottom: 8px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 237, 236);
}

html[saved-theme="light"] body input[type=text] {
  padding-bottom: 6px;
  padding-top: 6px;
}

html[saved-theme="light"] body kbd {
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(167, 147, 118, 0.1);
  border-bottom-color: rgb(167, 147, 118);
  border-bottom-width: 1px;
  border-left-color: rgb(167, 147, 118);
  border-left-width: 1px;
  border-right-color: rgb(167, 147, 118);
  border-right-width: 1px;
  border-top-color: rgb(167, 147, 118);
  border-top-width: 1px;
  color: rgb(167, 147, 118);
}`,
  },
};
