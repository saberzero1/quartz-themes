import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "velocity.nordblau-metalic",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Raveo",
        style: "normal",
        weight: "100 900",
        file: "raveo.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 192 !important;
  --accent-l: 38% !important;
  --accent-s: 76% !important;
  --anim-duration-fast: 150ms !important;
  --anim-duration-superfast: 75ms !important;
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1) !important;
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1) !important;
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --autofit-close-button-left-padding: 20px !important;
  --autofit-close-button-right-padding: 0px !important;
  --autofit-left-padding: 4px !important;
  --background-modifier-active-hover: hsla(192, 76%, 38%, 0.1) !important;
  --background-modifier-border: oklch(100% 0.05 265 / 0.0625) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: oklch(36.25% 0.01125 265) !important;
  --background-modifier-cover: oklch(10% 0 0 / 0.5) !important;
  --background-modifier-error: #ee6167 !important;
  --background-modifier-error-hover: #ee6167 !important;
  --background-modifier-error-rgb: 242, 100, 106 !important;
  --background-modifier-form-field: oklch(31.25% 0.01125 265) !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: oklch(100% 0.05 265 / 0.05) !important;
  --background-modifier-success: #90c764 !important;
  --background-modifier-success-rgb: 142, 197, 98 !important;
  --background-primary: oklch(23.00% 0.00875 265) !important;
  --background-primary-alt: color-mix(in oklab, oklch(23.00% 0.00875 265), oklch(27.50% 0.01125 265)) !important;
  --background-secondary: oklch(27.50% 0.01125 265) !important;
  --background-secondary-alt: oklch(34.50% 0.01125 265) !important;
  --bases-cards-background: oklch(100% 0.06 265 / 0.025) !important;
  --bases-cards-cover-background: color-mix(in oklab, oklch(23.00% 0.00875 265), oklch(27.50% 0.01125 265)) !important;
  --bases-cards-label-color: oklch(63.75% 0.01750 265) !important;
  --bases-cards-line-height: 26px !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: none !important;
  --bases-cards-shadow-hover: none !important;
  --bases-embed-border-color: oklch(100% 0.05 265 / 0.0625) !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: oklch(71.25% 0.01125 265) !important;
  --bases-group-heading-property-weight: 420 !important;
  --bases-group-heading-value-weight: 620 !important;
  --bases-header-border-width: 0 !important;
  --bases-header-padding-end: 0 !important;
  --bases-header-padding-start: 0 !important;
  --bases-table-border-color: oklch(100% 0.075 265 / 0.1) !important;
  --bases-table-cell-background-active: transparent !important;
  --bases-table-cell-background-disabled: color-mix(in oklab, oklch(23.00% 0.00875 265), oklch(27.50% 0.01125 265)) !important;
  --bases-table-cell-background-selected: hsla(192, 76%, 38%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2.5px color-mix(in oklab, hsl(192, 76%, 38%) 50%, transparent 75%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(192, 76%, 38%) !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-group-background: transparent !important;
  --bases-table-header-background: oklch(23.00% 0.00875 265) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: oklch(57.50% 0.01750 265) !important;
  --bases-table-header-color-hover: oklch(77.50% 0.01125 265) !important;
  --bases-table-header-weight: 490 !important;
  --bases-table-row-border-width: 0 !important;
  --bases-table-row-height: 32px !important;
  --bases-table-summary-background: oklch(23.00% 0.00875 265) !important;
  --bases-table-summary-background-hover: oklch(100% 0.05 265 / 0.05) !important;
  --bases-table-text-size: 0.90625em !important;
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.01750 265) 55% 60%, transparent 65%) !important;
  --bg-checkbox-active: radial-gradient(#0000000f 52%, #ffffff20 64%) !important;
  --bg-main-inner: oklch(28.25% 0.00875 265) !important;
  --bg-main-outer: oklch(25.50% 0.01375 265) !important;
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(28.25% 0.00875 265) 0%, oklch(25.50% 0.01375 265) 200%) !important;
  --bhue: 265 !important;
  --bl-00: 23.00% !important;
  --bl-05: 23.75% !important;
  --bl-10: 26.25% !important;
  --bl-100: 93.25% !important;
  --bl-20: 27.50% !important;
  --bl-25: 31.25% !important;
  --bl-30: 34.50% !important;
  --bl-35: 36.25% !important;
  --bl-40: 43.75% !important;
  --bl-50: 52.50% !important;
  --bl-55: 57.50% !important;
  --bl-60: 63.75% !important;
  --bl-70: 71.25% !important;
  --bl-80: 77.50% !important;
  --bl-90: 85.00% !important;
  --blockquote-border-color: oklch(52.50% 0.01750 265) !important;
  --blockquote-border-thickness: 0.1875rem !important;
  --blockquote-color: oklch(71.25% 0.01125 265) !important;
  --blur-background: color-mix(in srgb, oklch(34.50% 0.01125 265) 65%, transparent) linear-gradient(oklch(34.50% 0.01125 265), color-mix(in srgb, oklch(34.50% 0.01125 265) 65%, transparent)) !important;
  --blur-brightness: 1 !important;
  --blur-l: blur(16px) saturate(1.125) brightness(1) !important;
  --blur-m: blur(12px) saturate(1.125) brightness(1) !important;
  --blur-radius-m: 12px !important;
  --blur-radius-s: 8px !important;
  --blur-s: blur(8px) saturate(1.125) brightness(1) !important;
  --blur-saturation: 1.125 !important;
  --bodyFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: oklch(93.25% 0.00250 265) !important;
  --bold-modifier: 250 !important;
  --bold-weight: 670 !important;
  --bsat-low: 0.00250 !important;
  --bsat-med: 0.00750 !important;
  --bsat-modal: 0.0125 !important;
  --bsat-str: 0.01125 !important;
  --bsat-trans: 1 !important;
  --bsat-xtr: 0.01750 !important;
  --button-radius: 8px !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 0.2375;
  --callout-bug: 255, 152, 193;
  --callout-default: 89, 177, 228;
  --callout-error: 242, 100, 106;
  --callout-example: 189, 136, 215;
  --callout-fail: 242, 100, 106;
  --callout-important: 100, 208, 202;
  --callout-info: 89, 177, 228;
  --callout-padding: 1rem;
  --callout-question: 252, 146, 99;
  --callout-quote: 150, 150, 160;
  --callout-radius: 10px;
  --callout-success: 142, 197, 98;
  --callout-summary: 100, 208, 202;
  --callout-tip: 100, 208, 202;
  --callout-title-weight: 670;
  --callout-todo: 89, 177, 228;
  --callout-warning: 234, 203, 115;
  --canvas-background: oklch(23.00% 0.00875 265) !important;
  --canvas-card-label-color: oklch(52.50% 0.01750 265) !important;
  --canvas-color-1: 242, 100, 106 !important;
  --canvas-color-2: 252, 146, 99 !important;
  --canvas-color-3: 234, 203, 115 !important;
  --canvas-color-4: 142, 197, 98 !important;
  --canvas-color-5: 89, 177, 228 !important;
  --canvas-color-6: 189, 136, 215 !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: oklch(34.50% 0.01125 265) !important;
  --caret-color: oklch(85.00% 0.01125 265) !important;
  --checkbox-border-color: oklch(43.75% 0.01750 265) !important;
  --checkbox-border-color-hover: oklch(71.25% 0.01125 265) !important;
  --checkbox-color: hsl(192, 76%, 38%) !important;
  --checkbox-color-hover: color-mix(in oklab, hsl(192, 76%, 38%) 62.5%, color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%)) !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 50% !important;
  --checkbox-size: 1.125rem !important;
  --checklist-done-color: oklch(52.50% 0.01750 265) !important;
  --clickable-icon-radius: 8px !important;
  --code-background: oklch(100% 0.05 265 / 0.05) !important;
  --code-background-alt: oklch(from oklch(23.75% 0.00250 265) l 0.01125 h / 0.375) !important;
  --code-border-color: oklch(100% 0.05 265 / 0.0625) !important;
  --code-border-width: 0 !important;
  --code-bracket-background: oklch(100% 0.05 265 / 0.05) !important;
  --code-comment: oklch(52.50% 0.01750 265) !important;
  --code-function: #eacb73 !important;
  --code-important: #fc9263 !important;
  --code-keyword: #ff98c1 !important;
  --code-normal: oklch(85.00% 0.01125 265) !important;
  --code-operator: #ee6167 !important;
  --code-property: #66d2cc !important;
  --code-punctuation: oklch(71.25% 0.01125 265) !important;
  --code-radius: 6px !important;
  --code-special: #ee6167 !important;
  --code-string: #90c764 !important;
  --code-tag: #ee6167 !important;
  --code-value: #c187d3 !important;
  --codeFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: oklch(52.50% 0.01750 265) !important;
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --color-accent: hsl(192, 76%, 38%) !important;
  --color-accent-1: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%), transparent 8%) !important;
  --color-accent-3: color-mix(in oklab, hsl(192, 76%, 38%) 50%, transparent 75%) !important;
  --color-accent-4: color-mix(in oklab, oklab(from hsl(192, 76%, 38%) l a b / 0.25) 30%, transparent 70%) !important;
  --color-accent-hsl: 192, 76%, 38% !important;
  --color-base-00: oklch(23.00% 0.00875 265) !important;
  --color-base-05: oklch(23.75% 0.00250 265) !important;
  --color-base-10: oklch(26.25% 0.01125 265) !important;
  --color-base-100: oklch(93.25% 0.00250 265) !important;
  --color-base-20: oklch(27.50% 0.01125 265) !important;
  --color-base-25: oklch(31.25% 0.01125 265) !important;
  --color-base-30: oklch(34.50% 0.01125 265) !important;
  --color-base-35: oklch(36.25% 0.01125 265) !important;
  --color-base-40: oklch(43.75% 0.01750 265) !important;
  --color-base-50: oklch(52.50% 0.01750 265) !important;
  --color-base-55: oklch(57.50% 0.01750 265) !important;
  --color-base-60: oklch(63.75% 0.01750 265) !important;
  --color-base-70: oklch(71.25% 0.01125 265) !important;
  --color-base-80: oklch(77.50% 0.01125 265) !important;
  --color-base-90: oklch(85.00% 0.01125 265) !important;
  --color-blue: #59b1e4 !important;
  --color-blue-rgb: 89, 177, 228 !important;
  --color-cyan: #66d2cc !important;
  --color-cyan-rgb: 100, 208, 202 !important;
  --color-green: #90c764 !important;
  --color-green-rgb: 142, 197, 98 !important;
  --color-highlight: rgb(234, 203, 115) !important;
  --color-highlight-rgb: 234, 203, 115 !important;
  --color-orange: #fc9263 !important;
  --color-orange-rgb: 252, 146, 99 !important;
  --color-pink: #ff98c1 !important;
  --color-pink-rgb: 255, 152, 193 !important;
  --color-purple: #c187d3 !important;
  --color-purple-rgb: 189, 136, 215 !important;
  --color-red: #ee6167 !important;
  --color-red-rgb: 242, 100, 106 !important;
  --color-yellow: #eacb73 !important;
  --color-yellow-rgb: 234, 203, 115 !important;
  --control-icon-background: oklch(100% 0.05 265 / 0.0625) !important;
  --control-icon-color: oklch(77.50% 0.01125 265) !important;
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(23.75% 0.00250 265) l 0.01125 h / 0.375) !important;
  --corner-smoothing: 60% !important;
  --dark: oklch(85.00% 0.01125 265) !important;
  --darkgray: oklch(85.00% 0.01125 265) !important;
  --dialog-width: 500px !important;
  --divider-color: oklch(100% 0.05 265 / 0.0625) !important;
  --divider-color-hover: color-mix(in oklab, hsl(192, 76%, 38%) 50%, transparent 75%) !important;
  --divider-width: 0 !important;
  --drag-ghost-background: oklch(23.00% 0.00875 265) !important;
  --drag-ghost-text-color: oklch(85.00% 0.01125 265) !important;
  --dropdown-background: oklch(34.50% 0.01125 265) !important;
  --dropdown-background-hover: oklch(36.25% 0.01125 265) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: none !important;
  --embed-padding: 0 1.25em 0 0 !important;
  --fab-bg: oklch(23.00% 0.00875 265) !important;
  --fab-color: oklch(63.75% 0.01750 265) !important;
  --fab-color-active: oklch(85.00% 0.01125 265) !important;
  --fab-easing-curve: cubic-bezier(0.55, 2, 0.5, 0.97) !important;
  --file-header-background: oklch(23.00% 0.00875 265) !important;
  --file-header-background-focused: oklch(23.00% 0.00875 265) !important;
  --file-header-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-weight: 490 !important;
  --file-line-width: 43.75rem !important;
  --file-margins: 28px 5% !important;
  --file-margins-x: 5% !important;
  --file-margins-y: 28px !important;
  --flair-background: oklch(34.50% 0.01125 265) !important;
  --flair-color: oklch(85.00% 0.01125 265) !important;
  --flair-padding: 3px 1px !important;
  --font-bold: 720 !important;
  --font-extrabold: 820 !important;
  --font-extralight: 305 !important;
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-override: "Raveo" !important;
  --font-interface-theme: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-light: 320 !important;
  --font-medium: 520 !important;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-normal: 420 !important;
  --font-normal-linux: 490 !important;
  --font-print: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, Arial' !important;
  --font-semi-medium: 490 !important;
  --font-semibold: 620 !important;
  --font-small: 0.90625em !important;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-override: "Raveo" !important;
  --font-text-theme: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-thin: 270 !important;
  --font-ui-larger: 24px !important;
  --font-weight: 420 !important;
  --footnote-divider-color: oklch(100% 0.05 265 / 0.0625) !important;
  --footnote-id-color: oklch(71.25% 0.01125 265) !important;
  --footnote-id-color-no-occurrences: oklch(52.50% 0.01750 265) !important;
  --footnote-input-background-active: oklch(100% 0.05 265 / 0.05) !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 8px !important;
  --frame-right-space: 160px !important;
  --frame-right-space-override: 164px !important;
  --glass-base: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025) !important;
  --glass-base-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015) !important;
  --glass-base-m: inset 1px 1.75px 2.25px -1.125px rgba(255, 255, 255, 0.15), inset -1px -1.75px 2.25px -1.125px rgba(255, 255, 255, 0.1), inset 0 8px 16px rgba(255, 255, 255, 0.015) !important;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.5) !important;
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from #ee6167 calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from #ee6167 calc(l + 0.075) a b / 0.5) !important;
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.5) !important;
  --graph-controls-width: 232px !important;
  --graph-line: oklch(36.25% 0.01125 265) !important;
  --graph-node: oklch(71.25% 0.01125 265) !important;
  --graph-node-attachment: #eacb73 !important;
  --graph-node-focused: transparent !important;
  --graph-node-tag: #90c764 !important;
  --graph-node-unresolved: oklch(52.50% 0.01750 265) !important;
  --graph-text: oklch(85.00% 0.01125 265) !important;
  --gray: oklch(71.25% 0.01125 265) !important;
  --h1-color: oklch(89.5% 0.00250 265) !important;
  --h1-size: 2em !important;
  --h1-size-alt: 1.625em !important;
  --h1-weight: 330 !important;
  --h1-weight-alt: 570 !important;
  --h2-color: oklch(88.25% 0.00250 265) !important;
  --h2-size: 1.5em !important;
  --h2-weight: 570 !important;
  --h3-color: oklch(85.00% 0.01125 265) !important;
  --h3-size: 1.375em !important;
  --h3-weight: 570 !important;
  --h4-color: oklch(85.00% 0.01125 265) !important;
  --h4-size: 1.25em !important;
  --h4-weight: 570 !important;
  --h5-color: oklch(85.00% 0.01125 265) !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.125em !important;
  --h6-color: oklch(77.50% 0.01125 265) !important;
  --h6-line-height: 1.6 !important;
  --h6-weight: 670 !important;
  --header-height: 56px !important;
  --headerFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: oklch(52.50% 0.01750 265) !important;
  --highlight: oklch(from rgb(234, 203, 115) 0.8 calc(c * 1.375) h / 0.33) !important;
  --highlight-blue-rgb: 89, 177, 228 !important;
  --highlight-cyan-rgb: 100, 208, 202 !important;
  --highlight-green-rgb: 142, 197, 98 !important;
  --highlight-orange-rgb: 252, 146, 99 !important;
  --highlight-pink-rgb: 255, 152, 193 !important;
  --highlight-purple-rgb: 189, 136, 215 !important;
  --highlight-red-rgb: 242, 100, 106 !important;
  --highlight-yellow-rgb: 234, 203, 115 !important;
  --hotkey-gradient: linear-gradient(to top, hsl(192, 76%, 38%) -10%, color-mix(in oklab, oklab(from hsl(192, 76%, 38%) l a b / 0.25) 30%, transparent 70%) 210%) !important;
  --hr-color: oklch(100% 0.075 265 / 0.1) !important;
  --icon-color: oklch(63.75% 0.01750 265) !important;
  --icon-color-active: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --icon-color-focused: oklch(85.00% 0.01125 265) !important;
  --icon-color-hover: oklch(85.00% 0.01125 265) !important;
  --icon-m-stroke-width: 1.875px !important;
  --icon-stroke: 1.875px !important;
  --icon-stroke-thick: 2.25px !important;
  --icon-xl: 28px !important;
  --icon-xs-stroke-width: 2.125px !important;
  --indent-unit: 0.375em !important;
  --indentation-guide-color: oklch(100% 0.075 265 / 0.1) !important;
  --indentation-guide-width: 0 !important;
  --indentation-guide-width-active: 0 !important;
  --inline-title-color: oklch(89.5% 0.00250 265) !important;
  --inline-title-margin-bottom: round(nearest, clamp(0px, 0.5em, 1.5rem), 2px) !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 330 !important;
  --input-border-width: 0 !important;
  --input-date-separator: oklch(52.50% 0.01750 265) !important;
  --input-font-weight: 420 !important;
  --input-height: 28px !important;
  --input-placeholder-color: oklch(52.50% 0.01750 265) !important;
  --input-radius: 8px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(192, 76%, 38%) !important;
  --interactive-accent-hover: color-mix(in oklab, hsl(192, 76%, 38%) 62.5%, color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%)) !important;
  --interactive-accent-hsl: 192, 76%, 38% !important;
  --interactive-hover: oklch(36.25% 0.01125 265) !important;
  --interactive-normal: oklch(34.50% 0.01125 265) !important;
  --light: oklch(23.00% 0.00875 265) !important;
  --lightgray: oklch(27.50% 0.01125 265) !important;
  --line-height-normal: 1.6 !important;
  --link-color: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%), transparent 8%) !important;
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%), transparent 8%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%), transparent 8%) !important;
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) l c h / 0.75) !important;
  --link-unresolved-decoration-color: hsla(192, 76%, 38%, 0.3) !important;
  --link-unresolved-lch: 0.75 !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 420 !important;
  --list-bullet-color: oklch(77.50% 0.01125 265) !important;
  --list-dash-color: oklch(100% 0.02 265 / 0.35) !important;
  --list-indent: 1.5em !important;
  --list-marker-color: oklch(52.50% 0.01750 265) !important;
  --list-marker-color-collapsed: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --list-marker-color-hover: oklch(71.25% 0.01125 265) !important;
  --list-spacing: 0.125em !important;
  --math-color: oklch(93.25% 0.00250 265) !important;
  --menu-background: color-mix(in oklab, oklch(23.00% 0.00875 265), oklch(27.50% 0.01125 265)) !important;
  --menu-border-color: oklch(100% 0.04 265 / 0.125) !important;
  --menu-radius: 14px !important;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --metadata-border-color: oklch(100% 0.05 265 / 0.0625) !important;
  --metadata-border-radius: 12px !important;
  --metadata-divider-color: oklch(100% 0.05 265 / 0.0625) !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: oklch(100% 0.05 265 / 0.05) !important;
  --metadata-input-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 2.125rem !important;
  --metadata-input-longtext-lines: 5 !important;
  --metadata-input-padding: 6px 8px !important;
  --metadata-input-text-color: oklch(85.00% 0.01125 265) !important;
  --metadata-label-background-active: oklch(100% 0.05 265 / 0.05) !important;
  --metadata-label-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-weight: 490 !important;
  --metadata-label-text-color: oklch(63.75% 0.01750 265) !important;
  --metadata-label-text-color-hover: oklch(63.75% 0.01750 265) !important;
  --metadata-label-width: 10em !important;
  --metadata-property-background-active: oklch(100% 0.05 265 / 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2.5px color-mix(in oklab, hsl(192, 76%, 38%) 50%, transparent 75%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2.5px oklch(100% 0.05 265 / 0.05) !important;
  --mobile-nav-fade-bg: linear-gradient(oklch(from oklch(27.50% 0.01125 265) l c h), transparent 78px) !important;
  --modal-background: oklch(27.75% 0.0125 265 / 0.625) !important;
  --modal-border-color: oklch(43.75% 0.01750 265) !important;
  --modal-border-width: 0 !important;
  --modal-community-header-bg: oklch(from oklch(27.50% 0.01125 265) l 0.01125 h / 0.5) !important;
  --modal-community-item-bg: oklch(from oklch(34.50% 0.01125 265) l 0.01125 h / 0.5) !important;
  --modal-radius: 22px !important;
  --modal-small-background: oklch(27.75% 0.0125 265 / 0.625) !important;
  --nav-collapse-icon-color: oklch(100% 0.02 265 / 0.35) !important;
  --nav-collapse-icon-color-collapsed: oklch(52.50% 0.01750 265) !important;
  --nav-folder-color: oklch(77.50% 0.01125 265) !important;
  --nav-header-bg: oklch(100% 0.05 265 / 0.0625) !important;
  --nav-header-timing: cubic-bezier(0.3, 0.75, 0, 1) !important;
  --nav-heading-color: oklch(77.50% 0.01125 265) !important;
  --nav-heading-color-collapsed: oklch(52.50% 0.01750 265) !important;
  --nav-heading-color-collapsed-hover: oklch(71.25% 0.01125 265) !important;
  --nav-heading-color-hover: oklch(85.00% 0.01125 265) !important;
  --nav-heading-weight: 520 !important;
  --nav-heading-weight-hover: 520 !important;
  --nav-indentation-guide-color: oklch(100% 0.075 265 / 0.1) !important;
  --nav-indentation-guide-width: 0 !important;
  --nav-item-background-active: oklch(100% 0.05 265 / 0.05) !important;
  --nav-item-background-hover: oklch(100% 0.05 265 / 0.05) !important;
  --nav-item-background-selected: hsla(192, 76%, 38%, 0.15) !important;
  --nav-item-color: oklch(71.25% 0.01125 265) !important;
  --nav-item-color-active: oklch(85.00% 0.01125 265) !important;
  --nav-item-color-highlighted: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --nav-item-color-hover: oklch(85.00% 0.01125 265) !important;
  --nav-item-color-selected: oklch(85.00% 0.01125 265) !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: oklch(52.50% 0.01750 265) !important;
  --nav-tag-color-active: oklch(71.25% 0.01125 265) !important;
  --nav-tag-color-hover: oklch(71.25% 0.01125 265) !important;
  --nav-tag-radius: 8px !important;
  --nav-tag-weight: 620 !important;
  --nav-text-color: oklch(85.00% 0.01125 265) !important;
  --paint-description: "A deeper blue take on the Nord color palette, with additional inspiration from real-world automotive paints. Calm, elegant and futuristic." !important;
  --paint-image: url(data:image/webpbase64,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) !important;
  --pdf-background: oklch(23.00% 0.00875 265) !important;
  --pdf-page-background: oklch(23.00% 0.00875 265) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: oklch(23.00% 0.00875 265) !important;
  --pdf-spread-shadow: none !important;
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 265 / 0.0625) !important;
  --pill-background: oklch(100% 0.05 265 / 0.05) !important;
  --pill-background-hover: oklch(100% 0.05 265 / 0.05) !important;
  --pill-border-color: oklch(100% 0.05 265 / 0.0625) !important;
  --pill-border-color-hover: oklch(36.25% 0.01125 265) !important;
  --pill-color: oklch(71.25% 0.01125 265) !important;
  --pill-color-hover: oklch(71.25% 0.01125 265) !important;
  --pill-color-remove: oklch(52.50% 0.01750 265) !important;
  --pill-color-remove-hover: white !important;
  --pill-radius: 18px !important;
  --pill-weight: 490 !important;
  --prompt-backdrop-filter: blur(12px) saturate(1.125) brightness(1) !important;
  --prompt-background: oklch(27.75% 0.0125 265 / 0.625) !important;
  --prompt-border-color: oklch(100% 0.04 265 / 0.125) !important;
  --prompt-input-height: 48px !important;
  --radius-l: 18px !important;
  --radius-m: 12px !important;
  --radius-ml: 14px !important;
  --radius-prompt: 24px !important;
  --radius-s: 8px !important;
  --radius-settings: 28px !important;
  --radius-sm: 10px !important;
  --radius-xl: 20px !important;
  --radius-xs: 6px !important;
  --radius-xxl: 22px !important;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.01125 265) 65%, transparent) linear-gradient(oklch(34.50% 0.01125 265), color-mix(in srgb, oklch(34.50% 0.01125 265) 65%, transparent)) !important;
  --raised-blur: blur(8px) saturate(1.125) brightness(1) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-padding: 8px 0px 12px 8px !important;
  --ribbon-width: 56px !important;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.01125 265) !important;
  --scrollbar-radius: 18px !important;
  --scrollbar-thumb-bg: oklch(31.25% 0.01125 265) !important;
  --search-clear-button-color: oklch(52.50% 0.01750 265) !important;
  --search-icon-color: oklch(52.50% 0.01750 265) !important;
  --search-icon-size: 17px !important;
  --search-result-background: oklch(from oklch(23.75% 0.00250 265) l 0.01125 h / 0.375) !important;
  --secondary: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --setting-group-heading-color: oklch(63.75% 0.01750 265) !important;
  --setting-group-heading-size: 18px !important;
  --setting-group-heading-weight: 520 !important;
  --setting-item-background: color-mix(in oklab, oklch(23.00% 0.00875 265) 87.5%, oklch(27.50% 0.01125 265)) !important;
  --setting-items-background: oklch(23.00% 0.00875 265) !important;
  --setting-items-border-color: oklch(100% 0.05 265 / 0.0625) !important;
  --setting-items-padding: 16px !important;
  --setting-items-radius: 16px !important;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.01125 265) 70%, oklch(27.50% 0.01125 265)) !important;
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.00% calc(0.01125 - 0.0025) 265) l 0.01125 h / 0.75) !important;
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from #ee6167 calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from #ee6167 calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.00% calc(0.01125 - 0.0025) 265) l 0.01125 h / 0.75) !important;
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 265 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.00% 0.00875 265) l 0.01125 h / 0.75) !important;
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 265 / 0.125) !important;
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(192, 76%, 38%) 50%, transparent 75%) !important;
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375) !important;
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(23.75% 0.00250 265) l 0.01125 h / 0.375) !important;
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(23.75% 0.00250 265) l 0.01125 h / 0.375), 0px 1px 9px oklch(100% 0.06 265 / 0.025) !important;
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.01125 265) l 0.01125 h / 0.5) !important;
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375) !important;
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025) !important;
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(192, 76%, 38%) calc(l + 0.075) a b / 0.5) !important;
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 265 / 0.1), 0 0 20px oklch(from oklch(23.00% 0.00875 265) l 0.01125 h / 0.75) !important;
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 265 / 0.1) !important;
  --sidebar-left-toggle-inner-width: 12% !important;
  --sidebar-right-toggle-inner-width: 12% !important;
  --slider-thumb-border-color: oklch(36.25% 0.01125 265) !important;
  --slider-thumb-border-width: 0 !important;
  --slider-thumb-height: 12px !important;
  --slider-thumb-radius: 12px !important;
  --slider-thumb-width: 12px !important;
  --slider-thumb-y: -3px !important;
  --slider-track-background: oklch(100% 0.04 265 / 0.125) !important;
  --slider-track-height: 20px !important;
  --stacked-shadow-color: oklch(0 0 0 / 0.1875) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: oklch(100% 0.05 265 / 0.0625) !important;
  --status-bar-border-width: 0 !important;
  --status-bar-radius: 18px 0 0 18px !important;
  --status-bar-text-color: oklch(71.25% 0.01125 265) !important;
  --strikethrough-color: oklch(52.50% 0.01750 265) !important;
  --suggestion-background: oklch(23.00% 0.00875 265) !important;
  --sync-avatar-color-1: #ee6167 !important;
  --sync-avatar-color-2: #fc9263 !important;
  --sync-avatar-color-3: #eacb73 !important;
  --sync-avatar-color-4: #90c764 !important;
  --sync-avatar-color-5: #66d2cc !important;
  --sync-avatar-color-6: #59b1e4 !important;
  --sync-avatar-color-7: #c187d3 !important;
  --sync-avatar-color-8: #ff98c1 !important;
  --tab-background-active: oklch(23.00% 0.00875 265) !important;
  --tab-close-bg: oklch(38.25% 0.01125 265 / 0.875) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: oklch(36.25% 0.01125 265) !important;
  --tab-font-weight: 420 !important;
  --tab-max-width: 240px !important;
  --tab-outline-color: oklch(100% 0.05 265 / 0.0625) !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 8px !important;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.01406 265) 80%, transparent) !important;
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.01125 265) 80%, transparent) !important;
  --tab-sidebar-bg: oklch(100% 0.05 265 / 0.0625) !important;
  --tab-sidebar-container-bg: oklch(100% 0.06 265 / 0.025) !important;
  --tab-stacked-font-weight: 520 !important;
  --tab-stacked-header-width: 56px !important;
  --tab-stacked-pane-width: 43.75rem !important;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875) !important;
  --tab-switcher-background: oklch(27.50% 0.01125 265) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.01125 265), transparent) !important;
  --tab-switcher-preview-radius: 20px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(192, 76%, 38%) !important;
  --tab-text-color: oklch(63.75% 0.01750 265) !important;
  --tab-text-color-active: oklch(93.25% 0.00250 265) !important;
  --tab-text-color-focused: oklch(63.75% 0.01750 265) !important;
  --tab-text-color-focused-active: oklch(93.25% 0.00250 265) !important;
  --tab-text-color-focused-active-current: oklch(93.25% 0.00250 265) !important;
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --tab-width: 240px !important;
  --table-add-button-border-color: oklch(100% 0.05 265 / 0.0625) !important;
  --table-border-color: oklch(100% 0.075 265 / 0.1) !important;
  --table-drag-handle-background-active: hsl(192, 76%, 38%) !important;
  --table-drag-handle-color: oklch(52.50% 0.01750 265) !important;
  --table-header-border-color: oklch(100% 0.075 265 / 0.1) !important;
  --table-header-color: oklch(63.75% 0.01750 265) !important;
  --table-header-size: 0.90625em !important;
  --table-header-weight: 520 !important;
  --table-line-height: 1.6 !important;
  --table-row-alt-background: oklch(100% 0.075 265 / 0.015) !important;
  --table-row-alt-background-hover: oklch(100% 0.075 265 / 0.015) !important;
  --table-row-bg: oklch(100% 0.075 265 / 0.015) !important;
  --table-selection: hsla(192, 76%, 38%, 0.1) !important;
  --table-selection-border-color: hsl(192, 76%, 38%) !important;
  --table-text-size: 0.90625em !important;
  --table-text-weight: 420 !important;
  --tag-background: hsla(192, 76%, 38%, 0.1) !important;
  --tag-background-hover: hsla(192, 76%, 38%, 0.2) !important;
  --tag-border-color: oklch(from hsl(192, 76%, 38%) l c h / 0.025) !important;
  --tag-border-color-hover: hsla(192, 76%, 38%, 0.15) !important;
  --tag-color: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --tag-color-hover: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --tag-padding-x: 0.6875em !important;
  --tag-padding-y: 0.3125em !important;
  --tag-size: 0.8em !important;
  --tag-weight: 490 !important;
  --tertiary: color-mix(in oklab, color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%), transparent 8%) !important;
  --text-accent: color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%) !important;
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(192, 76%, 38%) 64%, #fff 36%), transparent 8%) !important;
  --text-error: #ee6167 !important;
  --text-faint: oklch(52.50% 0.01750 265) !important;
  --text-highlight-bg: oklch(from rgb(234, 203, 115) 0.8 calc(c * 1.375) h / 0.33) !important;
  --text-highlight-bg-rgb: 234, 203, 115 !important;
  --text-highlight-bg-search: oklch(from rgb(234, 203, 115) 0.875 calc(c * 1.375) h / 0.625) !important;
  --text-muted: oklch(71.25% 0.01125 265) !important;
  --text-normal: oklch(85.00% 0.01125 265) !important;
  --text-selection: oklab(from hsl(192, 76%, 38%) l a b / 0.25) !important;
  --text-success: #90c764 !important;
  --text-warning: #fc9263 !important;
  --textHighlight: oklch(from rgb(234, 203, 115) 0.8 calc(c * 1.375) h / 0.33) !important;
  --titleFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: oklch(100% 0.05 265 / 0.0625) !important;
  --titlebar-height: 36px !important;
  --titlebar-text-color: oklch(100% 0.02 265 / 0.35) !important;
  --titlebar-text-color-focused: oklch(71.25% 0.01125 265) !important;
  --titlebar-text-weight: 620 !important;
  --toggle-border-width: 4px !important;
  --toggle-gradient: linear-gradient(to bottom, hsl(192, 76%, 38%) -30%, color-mix(in oklab, oklab(from hsl(192, 76%, 38%) l a b / 0.25) 30%, transparent 70%) 180%) !important;
  --toggle-s-border-width: 4px !important;
  --toggle-s-thumb-height: 12px !important;
  --toggle-s-thumb-width: 12px !important;
  --toggle-s-width: 36px !important;
  --toggle-thumb-height: 12px !important;
  --toggle-thumb-width: 12px !important;
  --toggle-track-bg: oklch(100% 0.02 265 / 0.2) !important;
  --toggle-width: 44px !important;
  --traffic-lights-offset-x: 56px !important;
  --traffic-lights-offset-y: 56px !important;
  --trans-black-00: oklch(0 0 0 / 0.375) !important;
  --trans-black-10: oklch(0 0 0 / 0.1875) !important;
  --trans-faint-00: oklch(100% 0.075 265 / 0.015) !important;
  --trans-faint-05: oklch(100% 0.06 265 / 0.025) !important;
  --trans-faint-10: oklch(100% 0.05 265 / 0.05) !important;
  --trans-faint-20: oklch(100% 0.05 265 / 0.0625) !important;
  --trans-faint-25: oklch(100% 0.05 265 / 0.08125) !important;
  --trans-faint-30: oklch(100% 0.075 265 / 0.1) !important;
  --trans-faint-40: oklch(100% 0.04 265 / 0.125) !important;
  --trans-faint-50: oklch(100% 0.02 265 / 0.2) !important;
  --trans-faint-60: oklch(100% 0.02 265 / 0.35) !important;
  --trans-strong-00: oklch(from oklch(23.00% 0.00875 265) l 0.01125 h / 0.75) !important;
  --trans-strong-05: oklch(from oklch(23.00% 0.00875 265) l 0.01125 h / 0.625) !important;
  --trans-strong-10: oklch(from oklch(23.75% 0.00250 265) l 0.01125 h / 0.375) !important;
  --trans-strong-20: oklch(from oklch(27.50% 0.01125 265) l 0.01125 h / 0.5) !important;
  --trans-strong-30: oklch(from oklch(34.50% 0.01125 265) l 0.01125 h / 0.5) !important;
  --trans-strong-40: oklch(from oklch(34.50% 0.01125 265) l 0.01125 h / 0.5) !important;
  --trans-white-00: oklch(93.25% 0 0 / 0.75) !important;
  --trans-white-10: oklch(93.25% 0 0 / 0.625) !important;
  --vault-profile-color: oklch(63.75% 0.01750 265) !important;
  --vault-profile-color-hover: oklch(71.25% 0.01125 265) !important;
  --vault-profile-font-size: 18px !important;
  --vault-profile-font-weight: 420 !important;
  --vl-ease-out: cubic-bezier(0.3, 0.75, 0, 1) !important;
  --vl-layout-padding: 8px !important;
  --warning-gradient: linear-gradient(to top, #ee6167 -30%, oklch(from oklch(27.50% 0.01125 265) l 0.01125 h / 0.5) 180%) !important;
  --workspace-border-color: oklch(100% 0.05 265 / 0.08125) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: oklch(1 0.075 265 / 0.015);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.6375 0.0175 265) oklch(0.6375 0.0175 265) oklch(1 0.075 265 / 0.1);
  color: oklch(0.6375 0.0175 265);
  font-weight: 520;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: oklch(0.275 0.01125 265 / 0.5);
  border-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .note-properties {
  border-color: oklch(1 0.05 265 / 0.0625);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.7125 0.01125 265);
  font-weight: 420;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.7125 0.01125 265);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(23, 141, 171, 0.1);
  color: oklab(0.74221 -0.0506973 -0.0432923);
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.7125 0.01125 265);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(1 0.05 265 / 0.0625);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: oklch(1 0.05 265 / 0.0625);
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: oklch(0.23 0.00875 265);
  color: oklch(0.85 0.01125 265);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: oklch(0.9325 0.0025 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 670;
  outline: oklch(0.9325 0.0025 265) none 0px;
  text-decoration-color: oklch(0.9325 0.0025 265);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.01125 265) none 0px;
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.01125 265) none 0px;
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: oklch(0.9325 0.0025 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 670;
  outline: oklch(0.9325 0.0025 265) none 0px;
  text-decoration-color: oklch(0.9325 0.0025 265);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: oklch(0.8 0.155806 90.474 / 0.33);
  color: oklch(0.9325 0.0025 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.9325 0.0025 265) none 0px;
  text-decoration-color: oklch(0.9325 0.0025 265);
}

html[saved-theme="dark"] body del {
  color: oklch(0.525 0.0175 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.525 0.0175 265) none 0px;
  text-decoration-color: oklch(0.525 0.0175 265);
}

html[saved-theme="dark"] body h1.article-title {
  color: oklch(0.85 0.01125 265);
  font-weight: 490;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 50%;
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(23, 141, 171);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: oklch(0.7125 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.7125 0.01125 265) none 0px;
  text-decoration-color: oklch(0.7125 0.01125 265);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: oklab(0.74221 -0.0506973 -0.0432923);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklab(0.74221 -0.0506973 -0.0432923) none 0px;
  text-decoration-color: oklab(0.74221 -0.0506973 -0.0432923);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: oklab(0.74221 -0.0506973 -0.0432923);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklab(0.74221 -0.0506973 -0.0432923) none 0px;
  text-decoration-color: oklab(0.74221 -0.0506973 -0.0432923);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.74221 0.0666667 220.495 / 0.75);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.74221 0.0666667 220.495 / 0.75) none 0px;
  text-decoration: rgba(23, 141, 171, 0.3);
  text-decoration-color: rgba(23, 141, 171, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body dt {
  color: oklch(0.85 0.01125 265);
  font-weight: 420;
}

html[saved-theme="dark"] body ol > li {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body ul > li {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: oklch(0.525 0.0175 265);
}

html[saved-theme="dark"] body blockquote {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body table {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 18px;
  width: 700px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: oklch(1 0.075 265 / 0.015);
}

html[saved-theme="dark"] body td {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-width: 0px;
  border-left-color: oklch(0.85 0.01125 265);
  border-left-width: 0px;
  border-right-color: oklch(0.85 0.01125 265);
  border-right-width: 0px;
  border-top-color: oklch(0.85 0.01125 265);
  border-top-width: 0px;
  color: oklch(0.85 0.01125 265);
  font-weight: 420;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(1 0.075 265 / 0.1);
  border-bottom-width: 2px;
  border-left-color: oklch(0.6375 0.0175 265);
  border-left-width: 0px;
  border-right-color: oklch(0.6375 0.0175 265);
  border-right-width: 0px;
  border-top-color: oklch(0.6375 0.0175 265);
  border-top-width: 0px;
  color: oklch(0.6375 0.0175 265);
  font-weight: 520;
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(1 0.05 265 / 0.05);
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(1 0.05 265 / 0.05);
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(234, 203, 115);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(234, 203, 115);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(234, 203, 115);
  border-left-color: rgb(234, 203, 115);
  border-right-color: rgb(234, 203, 115);
  border-top-color: rgb(234, 203, 115);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: oklch(1 0.05 265 / 0.05);
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: oklch(1 0.05 265 / 0.05);
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figcaption {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.895 0.0025 265);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.895 0.0025 265);
  border-radius: 10px;
  border-right-color: oklch(0.895 0.0025 265);
  border-top-color: oklch(0.895 0.0025 265);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01125 265);
  border-radius: 10px;
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: oklab(0.2525 -0.000871557 -0.00996195);
  border-bottom-color: oklch(0.7125 0.01125 265);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.7125 0.01125 265);
  border-right-color: oklch(0.7125 0.01125 265);
  border-top-color: oklch(0.7125 0.01125 265);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(0.85 0.01125 265);
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-left-width: 0px;
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-width: 0px;
  margin-left: -27px;
  transition: 0.21s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  width: 18px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: oklch(0.525 0.0175 265);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0.0175 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: oklch(0.525 0.0175 265);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0.0175 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: oklch(0.85 0.01125 265);
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 146, 99);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.525 0.0175 265);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 203, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 210, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 97, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 97, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 97, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 97, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 203, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 203, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(193, 135, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 97, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(144, 199, 100);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(144, 199, 100);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(144, 199, 100);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 100, 208, 202;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(100, 208, 202, 0.063), rgba(100, 208, 202, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(100, 208, 202, 0.063), rgba(100, 208, 202, 0.114));
  border-bottom-color: rgba(100, 208, 202, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(100, 208, 202, 0.24);
  border-right-color: rgba(100, 208, 202, 0.24);
  border-top-color: rgba(100, 208, 202, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 152, 193;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(255, 152, 193, 0.063), rgba(255, 152, 193, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(255, 152, 193, 0.063), rgba(255, 152, 193, 0.114));
  border-bottom-color: rgba(255, 152, 193, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 152, 193, 0.24);
  border-right-color: rgba(255, 152, 193, 0.24);
  border-top-color: rgba(255, 152, 193, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 242, 100, 106;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(242, 100, 106, 0.063), rgba(242, 100, 106, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(242, 100, 106, 0.063), rgba(242, 100, 106, 0.114));
  border-bottom-color: rgba(242, 100, 106, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(242, 100, 106, 0.24);
  border-right-color: rgba(242, 100, 106, 0.24);
  border-top-color: rgba(242, 100, 106, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 189, 136, 215;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(189, 136, 215, 0.063), rgba(189, 136, 215, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(189, 136, 215, 0.063), rgba(189, 136, 215, 0.114));
  border-bottom-color: rgba(189, 136, 215, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(189, 136, 215, 0.24);
  border-right-color: rgba(189, 136, 215, 0.24);
  border-top-color: rgba(189, 136, 215, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 242, 100, 106;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(242, 100, 106, 0.063), rgba(242, 100, 106, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(242, 100, 106, 0.063), rgba(242, 100, 106, 0.114));
  border-bottom-color: rgba(242, 100, 106, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(242, 100, 106, 0.24);
  border-right-color: rgba(242, 100, 106, 0.24);
  border-top-color: rgba(242, 100, 106, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 89, 177, 228;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(89, 177, 228, 0.063), rgba(89, 177, 228, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(89, 177, 228, 0.063), rgba(89, 177, 228, 0.114));
  border-bottom-color: rgba(89, 177, 228, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(89, 177, 228, 0.24);
  border-right-color: rgba(89, 177, 228, 0.24);
  border-top-color: rgba(89, 177, 228, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 89, 177, 228;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(89, 177, 228, 0.063), rgba(89, 177, 228, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(89, 177, 228, 0.063), rgba(89, 177, 228, 0.114));
  border-bottom-color: rgba(89, 177, 228, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(89, 177, 228, 0.24);
  border-right-color: rgba(89, 177, 228, 0.24);
  border-top-color: rgba(89, 177, 228, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 252, 146, 99;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(252, 146, 99, 0.063), rgba(252, 146, 99, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(252, 146, 99, 0.063), rgba(252, 146, 99, 0.114));
  border-bottom-color: rgba(252, 146, 99, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(252, 146, 99, 0.24);
  border-right-color: rgba(252, 146, 99, 0.24);
  border-top-color: rgba(252, 146, 99, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 150, 150, 160;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(150, 150, 160, 0.063), rgba(150, 150, 160, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(150, 150, 160, 0.063), rgba(150, 150, 160, 0.114));
  border-bottom-color: rgba(150, 150, 160, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(150, 150, 160, 0.24);
  border-right-color: rgba(150, 150, 160, 0.24);
  border-top-color: rgba(150, 150, 160, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.7125 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 142, 197, 98;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(142, 197, 98, 0.063), rgba(142, 197, 98, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(142, 197, 98, 0.063), rgba(142, 197, 98, 0.114));
  border-bottom-color: rgba(142, 197, 98, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(142, 197, 98, 0.24);
  border-right-color: rgba(142, 197, 98, 0.24);
  border-top-color: rgba(142, 197, 98, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 100, 208, 202;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(100, 208, 202, 0.063), rgba(100, 208, 202, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(100, 208, 202, 0.063), rgba(100, 208, 202, 0.114));
  border-bottom-color: rgba(100, 208, 202, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(100, 208, 202, 0.24);
  border-right-color: rgba(100, 208, 202, 0.24);
  border-top-color: rgba(100, 208, 202, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 89, 177, 228;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(89, 177, 228, 0.063), rgba(89, 177, 228, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(89, 177, 228, 0.063), rgba(89, 177, 228, 0.114));
  border-bottom-color: rgba(89, 177, 228, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(89, 177, 228, 0.24);
  border-right-color: rgba(89, 177, 228, 0.24);
  border-top-color: rgba(89, 177, 228, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 234, 203, 115;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(234, 203, 115, 0.063), rgba(234, 203, 115, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(234, 203, 115, 0.063), rgba(234, 203, 115, 0.114));
  border-bottom-color: rgba(234, 203, 115, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(234, 203, 115, 0.24);
  border-right-color: rgba(234, 203, 115, 0.24);
  border-top-color: rgba(234, 203, 115, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgb(89, 177, 228);
  border-left-color: rgb(89, 177, 228);
  border-right-color: rgb(89, 177, 228);
  border-top-color: rgb(89, 177, 228);
  color: rgb(89, 177, 228);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(89, 177, 228);
  font-weight: 620;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: oklch(0.85 0.01125 265);
  padding-left: 28px;
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
  background-color: oklch(0.2375 0.01125 265 / 0.375);
  border-bottom-color: oklch(1 0.05 265 / 0.0625);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.05 265 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0.05 265 / 0.0625);
  border-right-width: 0px;
  border-top-color: oklch(1 0.05 265 / 0.0625);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: oklch(0.2775 0.0125 265 / 0.625);
  border-bottom-color: oklch(1 0.04 265 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.04 265 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0.04 265 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0.04 265 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
  box-shadow: rgba(255, 255, 255, 0.19) 1.125px 1.875px 2.5px -1.25px inset, rgba(255, 255, 255, 0.137) -1.125px -1.875px 2.5px -1.25px inset, rgba(255, 255, 255, 0.016) 0px 8px 16px 0px inset, oklch(0 0 0 / 0.375) 0px 0px 24px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.01125 265) none 0px;
  text-decoration-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: oklch(1 0.05 265 / 0.05);
  color: oklch(0.85 0.01125 265);
  font-weight: 420;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(1 0.04 265 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.04 265 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0.04 265 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0.04 265 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: oklch(1 0.05 265 / 0.05);
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: oklch(1 0.05 265 / 0.05);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(23, 141, 171, 0.1);
  border-bottom-color: oklch(0.597207 0.104194 220.491 / 0.025);
  border-left-color: oklch(0.597207 0.104194 220.491 / 0.025);
  border-right-color: oklch(0.597207 0.104194 220.491 / 0.025);
  border-top-color: oklch(0.597207 0.104194 220.491 / 0.025);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: oklab(0.74221 -0.0506973 -0.0432923);
}

html[saved-theme="dark"] body h1 {
  color: oklch(0.895 0.0025 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: oklch(0.8825 0.0025 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: oklch(0.895 0.0025 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: oklch(0.775 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(1 0.05 265 / 0.0625);
  border-left-color: oklch(1 0.05 265 / 0.0625);
  border-right-color: oklch(1 0.05 265 / 0.0625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 89, 177, 228;
  border-bottom-color: rgba(89, 177, 228, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(89, 177, 228, 0.24);
  border-right-color: rgba(89, 177, 228, 0.24);
  border-top-color: rgba(89, 177, 228, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklab(0.74221 -0.0506973 -0.0432923);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklab(0.74221 -0.0506973 -0.0432923);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: oklch(1 0.075 265 / 0.1);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 490;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.6375 0.0175 265);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.6375 0.0175 265);
  border-right-color: oklch(0.6375 0.0175 265);
  border-top-color: oklch(0.6375 0.0175 265);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.6375 0.0175 265);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(1 0.05 265 / 0.0625);
  border-bottom-left-radius: 18px;
  border-left-color: oklch(1 0.05 265 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0.05 265 / 0.0625);
  border-top-color: oklch(1 0.05 265 / 0.0625);
  border-top-left-radius: 18px;
  border-top-width: 0px;
  color: oklch(0.7125 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.7125 0.01125 265);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.7125 0.01125 265);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.7125 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.7125 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.7125 0.01125 265);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.775 0.01125 265);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left-color: oklch(0.775 0.01125 265);
  border-right-color: oklch(0.775 0.01125 265);
  border-top-color: oklch(0.775 0.01125 265);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  color: oklch(0.775 0.01125 265);
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.775 0.01125 265);
  stroke: oklch(0.775 0.01125 265);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.525 0.0175 265);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.525 0.0175 265);
  border-right-color: oklch(0.525 0.0175 265);
  border-top-color: oklch(0.525 0.0175 265);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.525 0.0175 265);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: oklch(0.525 0.0175 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: oklch(1 0.05 265 / 0.0625);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(1 0.05 265 / 0.0625);
  border-right-color: oklch(1 0.05 265 / 0.0625);
  border-top-color: oklch(1 0.05 265 / 0.0625);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: oklch(0.7125 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.7125 0.01125 265);
  border-left-color: oklch(0.7125 0.01125 265);
  border-right-color: oklch(0.7125 0.01125 265);
  border-top-color: oklch(0.7125 0.01125 265);
  color: oklch(0.7125 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: oklch(0.85 0.01125 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.6375 0.0175 265);
  border-left-color: oklch(0.6375 0.0175 265);
  border-right-color: oklch(0.6375 0.0175 265);
  border-top-color: oklch(0.6375 0.0175 265);
  color: oklch(0.6375 0.0175 265);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: oklch(1 0.05 265 / 0.05);
  border-bottom-color: oklch(0.85 0.01125 265);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(0.85 0.01125 265);
  border-left-color: oklch(0.85 0.01125 265);
  border-right-color: oklch(0.85 0.01125 265);
  border-top-color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body sub {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body summary {
  color: oklch(0.85 0.01125 265);
  font-weight: 420;
}

html[saved-theme="dark"] body sup {
  color: oklch(0.85 0.01125 265);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(23, 141, 171, 0.1);
  border-bottom-color: oklch(0.597207 0.104194 220.491 / 0.025);
  border-left-color: oklch(0.597207 0.104194 220.491 / 0.025);
  border-right-color: oklch(0.597207 0.104194 220.491 / 0.025);
  border-top-color: oklch(0.597207 0.104194 220.491 / 0.025);
  color: oklab(0.74221 -0.0506973 -0.0432923);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 212 !important;
  --accent-l: 52% !important;
  --accent-s: 100% !important;
  --anim-duration-fast: 150ms !important;
  --anim-duration-superfast: 75ms !important;
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1) !important;
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1) !important;
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --autofit-close-button-left-padding: 20px !important;
  --autofit-close-button-right-padding: 0px !important;
  --autofit-left-padding: 4px !important;
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1) !important;
  --background-modifier-border: oklch(0% 0 0 / 0.0625) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281) !important;
  --background-modifier-cover: color-mix(in oklab, oklch(40% 0.0025 281) 45%, transparent 100%) !important;
  --background-modifier-error: rgb(233, 49, 58) !important;
  --background-modifier-error-hover: rgb(233, 49, 58) !important;
  --background-modifier-error-rgb: 233, 49, 58 !important;
  --background-modifier-form-field: transparent !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625) !important;
  --background-modifier-success: rgb(0, 187, 93) !important;
  --background-modifier-success-rgb: 0, 187, 93 !important;
  --background-primary: oklch(99% 0.0005 281) !important;
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281)) !important;
  --background-secondary: oklch(96.2% 0.0025 281) !important;
  --background-secondary-alt: oklch(99% 0.0005 281) !important;
  --bases-cards-background: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1) !important;
  --bases-cards-cover-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281)) !important;
  --bases-cards-label-color: oklch(55.75% 0.0105 281) !important;
  --bases-cards-line-height: 26px !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: none !important;
  --bases-cards-shadow-hover: none !important;
  --bases-embed-border-color: oklch(0% 0 0 / 0.0625) !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: oklch(46.5% 0.0105 281) !important;
  --bases-group-heading-property-weight: 420 !important;
  --bases-group-heading-value-weight: 620 !important;
  --bases-header-border-width: 0 !important;
  --bases-header-padding-end: 0 !important;
  --bases-header-padding-start: 0 !important;
  --bases-table-border-color: oklch(0% 0 0 / 0.092) !important;
  --bases-table-cell-background-active: transparent !important;
  --bases-table-cell-background-disabled: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281)) !important;
  --bases-table-cell-background-selected: hsla(212, 100%, 52%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-group-background: transparent !important;
  --bases-table-header-background: oklch(99% 0.0005 281) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: oklch(65% 0.0105 281) !important;
  --bases-table-header-color-hover: oklch(40% 0.0025 281) !important;
  --bases-table-header-weight: 490 !important;
  --bases-table-row-border-width: 0 !important;
  --bases-table-row-height: 32px !important;
  --bases-table-summary-background: oklch(99% 0.0005 281) !important;
  --bases-table-summary-background-hover: oklch(0% 0 0 / 0.0625) !important;
  --bases-table-text-size: 0.90625em !important;
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%) !important;
  --bg-checkbox-active: radial-gradient(transparent 56%, #ffffffdd 76%) !important;
  --bg-main-inner: oklch(97.5% 0.00125 281) !important;
  --bg-main-outer: oklch(94.5% 0.00625 281) !important;
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%) !important;
  --bhue: 281 !important;
  --bl-00: 100% !important;
  --bl-05: 99% !important;
  --bl-10: 96.2% !important;
  --bl-100: 24% !important;
  --bl-20: 92% !important;
  --bl-25: 88.25% !important;
  --bl-30: 85.75% !important;
  --bl-35: 82.50% !important;
  --bl-40: 75.25% !important;
  --bl-50: 71.5% !important;
  --bl-55: 65% !important;
  --bl-60: 55.75% !important;
  --bl-70: 46.5% !important;
  --bl-80: 40% !important;
  --bl-90: 30% !important;
  --blockquote-border-color: oklch(71.5% 0.0105 281) !important;
  --blockquote-border-thickness: 0.1875rem !important;
  --blockquote-color: oklch(46.5% 0.0105 281) !important;
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent)) !important;
  --blur-brightness: 1 !important;
  --blur-l: blur(16px) saturate(1.125) brightness(1) !important;
  --blur-m: blur(12px) saturate(1.125) brightness(1) !important;
  --blur-radius-m: 12px !important;
  --blur-radius-s: 8px !important;
  --blur-s: blur(8px) saturate(1.125) brightness(1) !important;
  --blur-saturation: 1.125 !important;
  --bodyFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: oklch(24% 0.0005 281) !important;
  --bold-modifier: 250 !important;
  --bold-weight: 670 !important;
  --bsat-low: 0.0005 !important;
  --bsat-med: 0.0015 !important;
  --bsat-modal: 0.00125 !important;
  --bsat-str: 0.0025 !important;
  --bsat-xtr: 0.0105 !important;
  --button-radius: 8px !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 0.2375;
  --callout-bug: 214, 50, 202;
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281) !important;
  --canvas-card-label-color: oklch(71.5% 0.0105 281) !important;
  --canvas-color-1: 233, 49, 58 !important;
  --canvas-color-2: 241, 110, 53 !important;
  --canvas-color-3: 229, 169, 37 !important;
  --canvas-color-4: 0, 187, 93 !important;
  --canvas-color-5: 31, 132, 255 !important;
  --canvas-color-6: 124, 80, 237 !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281) !important;
  --caret-color: oklch(30% 0.0005 281) !important;
  --checkbox-border-color: oklch(82.50% 0.0025 281) !important;
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281) !important;
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) !important;
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%) !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 50% !important;
  --checkbox-size: 1.125rem !important;
  --checklist-done-color: oklch(71.5% 0.0105 281) !important;
  --clickable-icon-radius: 8px !important;
  --code-background: oklch(0% 0 0 / 0.0625) !important;
  --code-background-alt: oklch(100% 0 0 / 0.75) !important;
  --code-border-color: oklch(0% 0 0 / 0.0625) !important;
  --code-border-width: 0 !important;
  --code-bracket-background: oklch(0% 0 0 / 0.0625) !important;
  --code-comment: oklch(71.5% 0.0105 281) !important;
  --code-function: rgb(229, 169, 37) !important;
  --code-important: rgb(241, 110, 53) !important;
  --code-keyword: rgb(214, 50, 202) !important;
  --code-normal: oklch(30% 0.0005 281) !important;
  --code-operator: rgb(233, 49, 58) !important;
  --code-property: rgb(9, 186, 221) !important;
  --code-punctuation: oklch(46.5% 0.0105 281) !important;
  --code-radius: 6px !important;
  --code-special: rgb(233, 49, 58) !important;
  --code-string: rgb(0, 187, 93) !important;
  --code-tag: rgb(233, 49, 58) !important;
  --code-value: rgb(124, 80, 237) !important;
  --codeFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: oklch(71.5% 0.0105 281) !important;
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%) !important;
  --color-accent: hsl(212, 100%, 52%) !important;
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) !important;
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%) !important;
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%) !important;
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%) !important;
  --color-accent-hsl: 212, 100%, 52% !important;
  --color-base-00: oklch(100% 0.0005 281) !important;
  --color-base-05: oklch(99% 0.0005 281) !important;
  --color-base-10: oklch(96.2% 0.0025 281) !important;
  --color-base-100: oklch(24% 0.0005 281) !important;
  --color-base-20: oklch(92% 0.0025 281) !important;
  --color-base-25: oklch(88.25% 0.0025 281) !important;
  --color-base-30: oklch(85.75% 0.0025 281) !important;
  --color-base-35: oklch(82.50% 0.0025 281) !important;
  --color-base-40: oklch(75.25% 0.0025 281) !important;
  --color-base-50: oklch(71.5% 0.0105 281) !important;
  --color-base-55: oklch(65% 0.0105 281) !important;
  --color-base-60: oklch(55.75% 0.0105 281) !important;
  --color-base-70: oklch(46.5% 0.0105 281) !important;
  --color-base-80: oklch(40% 0.0025 281) !important;
  --color-base-90: oklch(30% 0.0005 281) !important;
  --color-blue: rgb(31, 132, 255) !important;
  --color-blue-rgb: 31, 132, 255 !important;
  --color-cyan: rgb(9, 186, 221) !important;
  --color-cyan-rgb: 9, 186, 221 !important;
  --color-green: rgb(0, 187, 93) !important;
  --color-green-rgb: 0, 187, 93 !important;
  --color-highlight: rgb(229, 169, 37) !important;
  --color-highlight-rgb: 229, 169, 37 !important;
  --color-orange: rgb(241, 110, 53) !important;
  --color-orange-rgb: 241, 110, 53 !important;
  --color-pink: rgb(214, 50, 202) !important;
  --color-pink-rgb: 214, 50, 202 !important;
  --color-purple: rgb(124, 80, 237) !important;
  --color-purple-rgb: 124, 80, 237 !important;
  --color-red: rgb(233, 49, 58) !important;
  --color-red-rgb: 233, 49, 58 !important;
  --color-yellow: rgb(229, 169, 37) !important;
  --color-yellow-rgb: 229, 169, 37 !important;
  --control-icon-background: oklch(99% 0.0005 281) !important;
  --control-icon-color: oklch(40% 0.0025 281) !important;
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055) !important;
  --corner-smoothing: 60% !important;
  --dark: oklch(30% 0.0005 281) !important;
  --darkgray: oklch(30% 0.0005 281) !important;
  --dialog-width: 500px !important;
  --divider-color: oklch(0% 0 0 / 0.0625) !important;
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%) !important;
  --divider-width: 0 !important;
  --drag-ghost-background: oklch(100% 0.0005 281) !important;
  --drag-ghost-text-color: oklch(30% 0.0005 281) !important;
  --dropdown-background: oklch(0% 0 0 / 0.07) !important;
  --dropdown-background-hover: oklch(0% 0 0 / 0.092) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: none !important;
  --embed-padding: 0 1.25em 0 0 !important;
  --fab-bg: oklch(99% 0.0005 281) !important;
  --fab-color: oklch(55.75% 0.0105 281) !important;
  --fab-color-active: oklch(30% 0.0005 281) !important;
  --fab-easing-curve: cubic-bezier(0.55, 2, 0.5, 0.97) !important;
  --file-header-background: oklch(99% 0.0005 281) !important;
  --file-header-background-focused: oklch(99% 0.0005 281) !important;
  --file-header-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-weight: 490 !important;
  --file-line-width: 43.75rem !important;
  --file-margins: 28px 5% !important;
  --file-margins-x: 5% !important;
  --file-margins-y: 28px !important;
  --flair-background: oklch(0% 0 0 / 0.07) !important;
  --flair-color: oklch(30% 0.0005 281) !important;
  --flair-padding: 3px 1px !important;
  --font-bold: 720 !important;
  --font-extrabold: 820 !important;
  --font-extralight: 305 !important;
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-override: "Raveo" !important;
  --font-interface-theme: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-light: 320 !important;
  --font-medium: 520 !important;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-normal: 420 !important;
  --font-normal-linux: 490 !important;
  --font-print: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, Arial' !important;
  --font-semi-medium: 490 !important;
  --font-semibold: 620 !important;
  --font-small: 0.90625em !important;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-override: "Raveo" !important;
  --font-text-theme: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-thin: 270 !important;
  --font-ui-larger: 24px !important;
  --font-weight: 420 !important;
  --footnote-divider-color: oklch(0% 0 0 / 0.0625) !important;
  --footnote-id-color: oklch(46.5% 0.0105 281) !important;
  --footnote-id-color-no-occurrences: oklch(71.5% 0.0105 281) !important;
  --footnote-input-background-active: oklch(0% 0 0 / 0.0625) !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 8px !important;
  --frame-right-space: 160px !important;
  --frame-right-space-override: 164px !important;
  --glass-base: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4) !important;
  --glass-base-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625) !important;
  --glass-base-m: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4) !important;
  --graph-controls-width: 232px !important;
  --graph-line: oklch(82.50% 0.0025 281) !important;
  --graph-node: oklch(46.5% 0.0105 281) !important;
  --graph-node-attachment: rgb(229, 169, 37) !important;
  --graph-node-focused: transparent !important;
  --graph-node-tag: rgb(0, 187, 93) !important;
  --graph-node-unresolved: oklch(71.5% 0.0105 281) !important;
  --graph-text: oklch(30% 0.0005 281) !important;
  --gray: oklch(46.5% 0.0105 281) !important;
  --h1-color: oklch(24% 0.0005 281) !important;
  --h1-size: 2em !important;
  --h1-size-alt: 1.625em !important;
  --h1-weight: 330 !important;
  --h1-weight-alt: 570 !important;
  --h2-color: oklch(30% 0.0005 281) !important;
  --h2-size: 1.5em !important;
  --h2-weight: 570 !important;
  --h3-color: oklch(30% 0.0005 281) !important;
  --h3-size: 1.375em !important;
  --h3-weight: 570 !important;
  --h4-color: oklch(30% 0.0005 281) !important;
  --h4-size: 1.25em !important;
  --h4-weight: 570 !important;
  --h5-color: oklch(40% 0.0025 281) !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.125em !important;
  --h6-color: oklch(46.5% 0.0105 281) !important;
  --h6-line-height: 1.6 !important;
  --h6-weight: 670 !important;
  --header-height: 56px !important;
  --headerFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: oklch(71.5% 0.0105 281) !important;
  --highlight: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33) !important;
  --highlight-blue-rgb: 31, 132, 255 !important;
  --highlight-cyan-rgb: 9, 186, 221 !important;
  --highlight-green-rgb: 0, 187, 93 !important;
  --highlight-orange-rgb: 241, 110, 53 !important;
  --highlight-pink-rgb: 214, 50, 202 !important;
  --highlight-purple-rgb: 124, 80, 237 !important;
  --highlight-red-rgb: 233, 49, 58 !important;
  --highlight-yellow-rgb: 229, 169, 37 !important;
  --hr-color: oklch(0% 0 0 / 0.092) !important;
  --icon-color: oklch(55.75% 0.0105 281) !important;
  --icon-color-active: hsl(212, 100%, 52%) !important;
  --icon-color-focused: oklch(30% 0.0005 281) !important;
  --icon-color-hover: oklch(30% 0.0005 281) !important;
  --icon-m-stroke-width: 1.875px !important;
  --icon-stroke: 1.875px !important;
  --icon-stroke-thick: 2.25px !important;
  --icon-xl: 28px !important;
  --icon-xs-stroke-width: 2.125px !important;
  --indent-unit: 0.375em !important;
  --indentation-guide-color: oklch(0% 0 0 / 0.092) !important;
  --indentation-guide-width: 0 !important;
  --indentation-guide-width-active: 0 !important;
  --inline-title-color: oklch(24% 0.0005 281) !important;
  --inline-title-margin-bottom: round(nearest, clamp(0px, 0.5em, 1.5rem), 2px) !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 330 !important;
  --input-border-width: 0 !important;
  --input-date-separator: oklch(71.5% 0.0105 281) !important;
  --input-font-weight: 420 !important;
  --input-height: 28px !important;
  --input-placeholder-color: oklch(71.5% 0.0105 281) !important;
  --input-radius: 8px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) !important;
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%) !important;
  --interactive-accent-hsl: 212, 100%, 52% !important;
  --interactive-hover: oklch(0% 0 0 / 0.092) !important;
  --interactive-normal: oklch(0% 0 0 / 0.07) !important;
  --light: oklch(99% 0.0005 281) !important;
  --lightgray: oklch(96.2% 0.0025 281) !important;
  --line-height-normal: 1.6 !important;
  --link-color: hsl(212, 100%, 52%) !important;
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%) !important;
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(212, 100%, 52%) !important;
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%) !important;
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7) !important;
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3) !important;
  --link-unresolved-lch: 0.7 !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 420 !important;
  --list-bullet-color: oklch(55.75% 0.0105 281) !important;
  --list-dash-color: oklch(0% 0 0 / 0.25) !important;
  --list-indent: 1.5em !important;
  --list-marker-color: oklch(71.5% 0.0105 281) !important;
  --list-marker-color-collapsed: hsl(212, 100%, 52%) !important;
  --list-marker-color-hover: oklch(46.5% 0.0105 281) !important;
  --list-spacing: 0.125em !important;
  --math-color: oklch(24% 0.0005 281) !important;
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281)) !important;
  --menu-border-color: oklch(0% 0 0 / 0.1125) !important;
  --menu-radius: 14px !important;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07) !important;
  --metadata-border-color: oklch(0% 0 0 / 0.0625) !important;
  --metadata-border-radius: 12px !important;
  --metadata-divider-color: oklch(0% 0 0 / 0.0625) !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: oklch(0% 0 0 / 0.0625) !important;
  --metadata-input-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 2.125rem !important;
  --metadata-input-longtext-lines: 5 !important;
  --metadata-input-padding: 6px 8px !important;
  --metadata-input-text-color: oklch(30% 0.0005 281) !important;
  --metadata-label-background-active: oklch(0% 0 0 / 0.0625) !important;
  --metadata-label-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-weight: 490 !important;
  --metadata-label-text-color: oklch(55.75% 0.0105 281) !important;
  --metadata-label-text-color-hover: oklch(55.75% 0.0105 281) !important;
  --metadata-label-width: 10em !important;
  --metadata-property-background-active: oklch(0% 0 0 / 0.0625) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2.5px oklch(0% 0 0 / 0.0625) !important;
  --mobile-nav-fade-bg: linear-gradient(oklch(96.2% 0.0025 281), transparent 78px) !important;
  --modal-background: oklch(99.5% 0.00125 281 / 0.675) !important;
  --modal-border-color: oklch(75.25% 0.0025 281) !important;
  --modal-border-width: 0 !important;
  --modal-community-header-bg: oklch(100% 0 0 / 0.75) !important;
  --modal-community-item-bg: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281)) !important;
  --modal-radius: 22px !important;
  --modal-small-background: oklch(99.5% 0.00125 281 / 0.7) !important;
  --nav-collapse-icon-color: oklch(0% 0 0 / 0.32) !important;
  --nav-collapse-icon-color-collapsed: oklch(71.5% 0.0105 281) !important;
  --nav-folder-color: oklch(40% 0.0025 281) !important;
  --nav-header-bg: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1) !important;
  --nav-header-timing: cubic-bezier(0.3, 0.75, 0, 1) !important;
  --nav-heading-color: oklch(40% 0.0025 281) !important;
  --nav-heading-color-collapsed: oklch(71.5% 0.0105 281) !important;
  --nav-heading-color-collapsed-hover: oklch(46.5% 0.0105 281) !important;
  --nav-heading-color-hover: oklch(30% 0.0005 281) !important;
  --nav-heading-weight: 520 !important;
  --nav-heading-weight-hover: 520 !important;
  --nav-indentation-guide-color: oklch(0% 0 0 / 0.092) !important;
  --nav-indentation-guide-width: 0 !important;
  --nav-item-background-active: oklch(0% 0 0 / 0.0625) !important;
  --nav-item-background-hover: oklch(0% 0 0 / 0.0625) !important;
  --nav-item-background-selected: hsla(212, 100%, 52%, 0.15) !important;
  --nav-item-color: oklch(46.5% 0.0105 281) !important;
  --nav-item-color-active: oklch(30% 0.0005 281) !important;
  --nav-item-color-highlighted: hsl(212, 100%, 52%) !important;
  --nav-item-color-hover: oklch(30% 0.0005 281) !important;
  --nav-item-color-selected: oklch(30% 0.0005 281) !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: oklch(71.5% 0.0105 281) !important;
  --nav-tag-color-active: oklch(46.5% 0.0105 281) !important;
  --nav-tag-color-hover: oklch(46.5% 0.0105 281) !important;
  --nav-tag-radius: 8px !important;
  --nav-tag-weight: 620 !important;
  --nav-text-color: oklch(30% 0.0005 281) !important;
  --paint-description: "The default light color scheme for Velocity. A timeless classic with a mild futuristic touch." !important;
  --paint-image: url(data:image/webpbase64,UklGRpxLAABXRUJQVlA4TJBLAAAv34FAAE1IbBtJkiQoMvc+lf8OV3b1cw5E9H8ClIUqjgBr8XCrrGa0VXGOzHrlDTRiD6Bcll69GjnsAG4xSV5K5aw4/MIfnHroQfUTYDJ0N9dXAH4h3d0PyHmeCXBRYFkP1TN7Z9g1VdkVzNWDQzfdW0zNA7wX+jpalh69uvWhh0/9fSF5765hQaez38pai3UK6xIyJObyHsdycxAMDPfPRu8sQEziF24aAbLrf+L2IM8u14mKHnXSBw6enJoFTHjRffKq0apSo1sn+RQIIOl097dA5nSn52+wHfbhp3Tzgm/JmO4MHPgSp3Z30vuJIPiQJ3Q3fePlhCqgqqg+/IpQBVRVNcBGwhcXpxMQwierhmwuaLeS5EiS3hIBVn+pWoAljpUgl901CoX4ySiWEsCJJEmS5LbSSmsJIcTlj+O7OwQvgAEwAuxIkmQ1GWCAuN8SIf/tKhPeJ6Bj+j8BmgIGBrAMDCxr2KMvMxgAQOyRZSmIEIgAICKl9BLYCwICoATQiBh3YLddWYAxliX2MkODgpeFokBEACIgAoFmyAxLEQABNpQF2K4sE+s1e8iyAIswFBEud8AeRYpAQgBZOzVSEQAOOZ85nwrni52iKFAU3WkhIhARY/AXMUYpy3rdViwsaWMBIEVEpCmjAWAUkXptxUZLWAARkaWIoESMGJCyPj9WPBaxAYiIhiIq/2KMGGOURa+teGAuiBqBkVuUDayJSGmgBJEygDUEq8HT9gtFREoRKdjYEBjAsmiIAMQjvuIRfNwfsQwgikgRoWIZKEARdT8BjN/bM5YFKJpBBItgWURqaAgrWpalANUAB5ZF0SpEwIF1gpbgBUAjjdVYjdUZ0xWDxkBQFMYAZmoFliJSmC/MBiJ1YRqgMIDgNL8COUGHnalApEDrYNCbmuJAYL8CKCIR0JUCDhXUBQCZDIxARCBiZCIGkNAoXCqGHYdNK4DgKs0AEXDmeqzYAITYQpxi+dIQAMKwH+BAndj/bQ4bm+PG5uhfc+dfCkCmYiJAnXuWiu9WLIBmgABFgCJaBQAMdgAUxRABioBl4BsMABgIIlIEEAFqkQgEOnwDKAJIAYuQq5fttWfO51crvjENLwKUAkC0CoA3EBRvgB0oIlIEHMUtxClu4/uEOMUJsW4yEOgFgABegCIiRXMTW2yxxYoVp1ix4hTbTQSQIoAIUHS2eZpOKyJFFK2kzhBERAAimM3hsWKAtvyWAQQaEQUAFgAYwAwmAmCdUx2At9cQEQAQAQADkts2giRZ//91kkpVz+49IiaAqgKoqEFFFVCc6VVODwC1AbWYB/admvgwgIpt6AMEnDnNQUDAivRafB8COGJRzSdEcQNok/pCAwejg7ShhpsbR+wEAyF3xFN6+wCSlwIlCi6DBv/jPF/lKL2nK+rJkvsB1SFdFt6jE4Wgpj3zXbXiHt+Jt4BUMLOmOjBcTBJSKQChT6OSXSbGcupIWxgyma0Oo+D9vKYAUr8Wjt2v3ON45T2tanZ5Pow7vqkKvtDs/Ruj5mdUpKoBXnHRw0VyQQXiYXRh27ZIciM97x+RVFVdzS211CLLbbFsDRnkMTMzLzMzHvIe7RkzDc/ILA/YI9kyyyB5ZDGTm7GqEiL+/70mMyIyMtXb6j3zZNu2atuSZNU21hFmFolLCiT/CaAwx6RIkFn1wtndQ23bqm3bthVTbWPh3oeZDJwjgI+F418AM8Ncc7SaQxZsW1ErXYeoMWQzcy9o7Nd/3rBtOyRJ27Z9P86IzKpsG6Wey7Zt27Zt27Zt27avsa22VcqMOM9jWTKO84zMXDqz5mdEwIJkt20DuRfmoNCmQDy4ffqRJMm1bdu2LBaG5MZ47ypsElKb3FXHm9pl2JtceHffoLeW4R45xkzSURtJkuScG8L+lz/GQNu2baj0/3e7OqTRthJEF9bEGCIVoaA131vv3zHfwGwS0GoiAIDmoVQAuhJWp/aQCAOUkDNxiO2jZoDAjokwJCijKKSAbKy5HFgDgau1x7viuFrQs1ryOQBt30NAWnm+Ei2rrcEH8wGYLbSJgZeaUmom+kCbS49aJTNnYd8aqoi14RNVfwgAMMa4AJuXLhCGwLEw0ChBAtpP81oglsbMLJ6aEIaS0MCInZNFiSiEfS7nsBubcVUCAAHLYUBTkoZ5IQRD7UNQCAAnTcQGpWnm+h5DYGR9t0fATDRxApm0Lf+MmUeREyfiiqgQCliCsOUJEOWxMBNubkffMqlJiyW5Jo/4GjZYlDSlFiwSMeDSLlTOcAvWt64pg27mRktZ1glmrm8QxrTNt9FKm1cgk1outOXbOpQBgGLO9HjltKttexcNAQKsHr8FW5jxAMD6ijMDJZKgP/BvqrFgOiGsspblSMsqVrCEFRmshlQr61JxMFTP+aZr21w3gL6t2MBkS/OhWVJSgJi4gICwsBoa0dSKHUZZj6nixznZIyfblgfAtNRD49JKKWADVRemmoiwchlUYfS+isLqryWciyMKplhbCTRWSz4ZTiXtOsusSEw74hadFzUpEwACHeq5K000AJIw2QAAZnW2ta5JjBEAQrjCAECYXCPAuNDshKpQTYnMSYOR0+uE+m1PJ0xwFKaCeFKnENLFbg8XmBUzMOTHnOYKrkXAlrO5OgqU0rg0qLBv24l8NYHSDq7rZGpeKqdSTMyUWOqjC0NlK/uDrTABogBxPRjp+cC6F9fJJwMAYNK8eoCjqYoU6ipgMxZEOEKAELW4meQ72waq0gquVy1imAiLmOE81Unst52bAMxZMwMP8UO6PAAAjCeMaDkboClzfKJ2ZrA11cHUuBJQUKdNjYFTrLeS5wcyLKoSfE9q+zawY1phdzAgfTPm2/wyl/N9ruMaTOSEJ1/F7fXuK4l0JL/vPmgfXjfrWD3Z3rYTWMJnCpeSMNXEgaFCFMxbEHCPzLIUwrE7i1qmVAsejTAUg94aU0cyZpK1hxnNzYmrPZkFUCa5ViRZ1FOiJCJQKaXESUbtjQ7br7jHuKETqUaMSYWJzXpoJ08+m3Zl9u5aTr5lgUOc5NVcyU4yAMYa92SFAUhOhikLQ/lDacgomiKP8Pxa5UkEAAKEgCKgenIeGGenXXXZqowsALW9s0Ii8rSSZaqEWlgrWeEQAU0KBnvc3Mbcznvo8goeAyAQcN7CoxA1IlNwv52mqwFhnGxg0UlYQnnYft2dEIEgA2oJyBIJCfr97tdS3H2AAGv3EZx7t8cCbHJSwsrrNWtLP7SYMClhxCvcl5ixjzzlAbuHCbfMDdWBAduma9yKkAZQG3Y3N/Cg3aA9Y0DjANi66pHnn+2eaDKmmvAdDJzuWrfr3Gt7n1ZvANxy2+UGfsgjrPE2xnyJLVbITFteC9ZB4iwPqkw+19pasdUL1WDP6vlZ5zkushtJaWjDo8l8seASOXUuABYQJuSphWoZc7yUtPJACmB7vDnmK1zBldzLpQAs+J4l6u10wMJ8uZuhhM01Sx3TCQAtUh0oT9iXrbQoLFspQomRwhXJIL/qfrmTWXZCs1Jl3wCA2o2K6wF7dsAJkxTI9IrOiJ9OIpAIhq7tXr4tLuLk/CQj+4W1iwAsc+rbEcwvSj1s37OXz00dbaABDQDrQXuzE1uWjDna+NNONiEBATQzlSf4MbtIJC6njwEAhACgKNq7TMTRZDRBKU/r1LaDJ7iRXa0pZMQTcwp4HlFjkBlNxvN6asHTKxGmUtJoFSkYcERhgXFsO7d+Eyf5Hl8jcYKCjhVKVCC7vEVDGmBOJM8bVqce5zEylhRdQgMOaBwBLhAuQSjh+X0uRstqdpGAyg5A/QusWptRFB1w8gEATcjz24QrO2mrNbBXXeyn3v1GIRcXaINNVhDVOlmcsLvm0W7gBo6TqxYxQgtA63FtalMTyLYNGLLLzQ3u5Rm67ONmBJQCzYKtDAAyx6tkOE9UZD97p1mdm2wdXOVmaqKkceIaNQagi1INiANbRoehOmYAUvqzo1cIE8k5jrBGQsJqDxBWK3HMDl6pWzqJZ9yh/TxhnBqjwxi7I0dblo1E46J9o7JkHIdpAGBal8XJgAobaWEQGzcjWFvfqIYS2tzAc2gCIQdXLQ+IAEBm620Lrdz24wAk1mzNBfEwHa7CgBmtQDWjoouwAUUmGnDm0GlzBbqF1ZgyCSZra9PI1AdcmkqisK27qwaQYXYDIw13cik9TDQkOTgIgHicSl3DuDQsFwxwaWYTwWCavvZpXmADZ8h1xhA2fkS1UAvArQWaFOOAYRiADC0gFxvjVLxnZDvcLlDRPbZUdLrbHM+KQmQOcK6eWXcUC5arhHFDjSWZphZRbrDqrlgGQGSkTSeT0jJlFDcU9SlVg/8YxwWdCgHGVRy0rCRHdRREvkGxPLjlShjhLNKTMYHamse0SggeoKEKipI3YYxTKxhMmDW3l2AAkS1nPLkoBq7odVdIiR2N05zxKKzCFuKJSKZd/nNsGd0JZcpJyiqk9RnIUBjjmr5krLDCoILlLd1AYUIx8Pa8fYBNkkaAOdeKGCnTQMwPY8bNcRgI6qxIaqYhrpicvAVLKsedvCOYNslVgiGCSgpWgDFuAHkANHMzshtr4ojgiEC7My4HjFrmXTbX9MUwIiOHmFsMLSvdMQbI2PDVjLhkJhNLHoQBjZvFzJACeRjjNJBbDIisIyp9H8zaJLUd8YV6PFBTjwIFUASvQHHlh6G2jIwDjDObHeb2bBQD1xmZ8dO5dmK7PGwiZEppowzjVGJHQDjZaZloCGQQYmt7+oFbRK5QIZ69bHeaQGUxntA6TeqZBMnE0ZFsHjctUuIEpzEps7mhIKl6LrJLkzkDUuyqMo4n5gnHODBd3AZrHQlWA8eStpExnRsShTBJ7cXWu0gENADJtZHTasPx9K3f4IJmylmzMAZjAIxoiFDJybC57tWHrch3VGpKLUoZkI50iDQlT+04lYYYrSu4wJmC8hhWcwlgLcQztKh7HXmbj1Josgs2q6WLCN7pdF31qapK+KSZKI12wiNNABzGEYELDtHa/16G4zgAGCzlAFsk1eL6v00lUgdT+5SMLjXDHamoiBsAMGUVKQGAkM4XwHRWLji24p1oiHGmnS4nMt1JzOrCd0LKTEqfjvqSlUQomN8Oj0bcdQMieBEBL5YqzeRj5bvsARcgRxUhmLluIeoz1jamReFHyXJeGllBpupad+BYNtRlr3JYAERrnrgtQwp1TICB3qdv3MU8BdSZ9XR150Rt157TSQHjk/Jxi4IG2aTk3BPRHB8SYICaORqUzyrEHMY5DEYKzMMKO+IRk9GhQwYURIwxzRaQVuq+A4vO11haIFMDGmA0HUlntzNczGklLoEFZkIKaCrWUy1HywGALhmLy4R7dm5ogcgakL9/hMXEGAiHobqVh6ISKZhq3JdG04QunZ7IdnDIOSGr2gEJYpf28owz4gDwDAnJSAaEJfq63E7qqAxIRgTngA11lD3axtNOaXKMsCqjVGRivw3sKac0SzIw48t1uZ12TnAFJ7xfV0ECAkZAgPMit76O2G8RGRlCBDp06GIiDfXxTQvMLEt1JoFIC2mljokwMMy69q0hz3euMO1IW/U9DZdTiSUNMRVb+NVc41084z6rh3YuTTGnuSnbDeT4MgCTdYRdSXO20szpJBupU4EG6Vmk1HZwv+dZDxghkoIZgEt4GT/mrHOzmT+yqEBSwABYYpWf52k9KbCmFNLN7innCa5gH/eoIChJgIUJkSRk13q324+YOCZgLCElSR1useed5/QL9oj3vxBJmAwDwrNrePR9H2yGaeo+gQ4mYdo3spjF55lImssFazrNrnWytK4Mi5Q6TLnchJeaxRBREbQTWFgS9+1sq8OTOuO5vl1s4KahAAbsV/dMlE8uEAKBke2wCU07G7NSPdsOEgkLQzIjLBBBQRGTCSJmurIAQEiZkpJZIIwEmaxkQUGlbJIlLKxq+ssQpTAjTZGFkVBOIpHJjIFEJagUEsiG2y87Utkac1QFIDJaFZ6WNwprSBNEaJZ2QpsNEdN1Q5plSpxV7dNZdda49qoLgNSixlpYIme0y45rS8n22YD43HSjk0kFo2ukztkqEQO6dDVVyBk7LaNB1rJm8HolMS+0T7z7hIJKEjg993tOSECgjbfC3K3vKcOASABAwEDW3rFdnmonrDRFRcp5xhnnsT3jqs9a0tiJA9sWgQRIL1CEGAHCJCZvP0mQrVzMTq4+ECvgAx2pGtuDgaadjBfvT9sDmWvdzmqnGRB1YQAuI8uu++Ze1cTJxkDGa7uX4PFYE7jf1QqumEc9Ix7VaDW8UFpbnfEqSuuF6jiIVP9RhdJN0lBdcoGBEEbk1RFcgEwRMAFhQPRoSWW70Srf6Ko1xdxYjV83RdWn0TFJmjjDVempILCwQbwlG8KQNqEeDTC6eukpKwOhsuTj60JECqDDdjuuyM/Wz1YBgKm9opvMymdrSnir60ylFJtkoi38UdSQTNTCiOXChA92IbJooo/Y0gbbGWEE8KnMQtvOa5Jx0kjSQyMLXxW+wBBL9s6uSc8OAwiW5OTIkBGg0FLSSKQat9W3ljxyhbgsmf6qWUbnY0PzCWvufBorkEjk5FRLkA6FACgglnvCDEvGwrDFriIt2n0BqUru2wyFOY+vEZETEAkf4AhoQUk974qGQUaLnlAEYqUtghkoRNGkkIoqxSsAUPK7QuMGp/GFNCZR69cQkmif5Ay2Ri7rXDih74M3pKd2o2yXegZ452kenrOkgAO5rXcP+9h3n7YLj1O6ZgwYALLao0xEvAAEmheZroVPKAqbTXtMRJNwGMI0DhNQhElowKVxaWEu0FBhqKWc9uzr3Onz1K4D0OMXPruYB59907enne29qR3HCjBQFcR5SUIaI9FjKhcgosVPEIlYuAMgiKh1qx+Bh/gN72RiMqVxQAqKZBYJMiC7dn2g8zvbg8kMTCCtkIQBSfaS9Wmnj2jySW3bY+g7737UJwCkXDOv/0zZuP32Fx3ykAuQFRgAM29cQWNBrXP3r7p7gTCBd7YrLClRnRRAUNGeccb8Q1/m7qiCnti+vFuStlAJAyKQLJtIiAF01by187vuk5aNy2RbTMa/RaCm6gf6g97HnzmLsXPXurdJs4vhFOhOJx64MJlMY9wVy6vY52+RCk3x2/b97QkGfLQ1TOqxNaz3nv3ivw8/d42zIlUvman0OWsACBjBkOo1nhQwFRBa/88x52QrD78/d3QnEO04Dz0ezEU88LZx29tl4GjSAidAZvs3WkWDMCALs9BmYz8CgVVKcRcUYi0qWvawL2b1RL80afe+zkMZF8DkfPXNgPztvuL5uut5HQKnlIoWCUcqkzoAJF4tCIAGYGiB6yUqHk/bJaXEmYwFLABlpbvyXKzq0CGRawPSwkYhddgsRSsC1QoP2l3tF0jaUVV4GTfj5hucVmo9p19gQFaQxXwKsBHIDS6cjjHMXR1ADIJ2ZmCsQ1wEdJYgqbNUTikHAESnZS3d4MJsIksqn0CkQEBj4oU5bmpbvAhDd944SXnm/XmoKnazvK13D3n2PZ8AxRm1BikEoM2yCNQpnm0CSTBTh2auKoKVwgByNEQTgIo1jaoMZta4tIXMbzsi7P74VM84d86pve4A9PILXHwebN98//b0zvZ7F9wklHpVo4tJlTzttD8L+pXZ4Ghmi/Lw/HrvhKjM0lIDIw7oMzu/135sYAIRlFnGR3YG+VWbWFqhJQQktEISgYTmTXqLHIa0c/OSvu38CABInWvO61E2br+dw++PsuAyP7t2/yZSoeZZx56LmAzKUtnrmOwno4yGYgOxQp5FnAkjxtGIpvpEecJu34qkCUkIYMQ+vV93tQcARhWRBQXerj5fsnJiy4gKBgmUWVRmCXilbl1msfaa7+Ou1+6NbCoVu1kKLCjHflZO31V/eTKDh3MF8lLzUIIqmvuygRWP26Jv2m3Id1/na8pkQ7l9wl7WEv9b2miOJQNkMg/MUF2u9a7ANJQAsqqNjAU0jancAoxFKnc9A0fj0oALZKwpFbI1u4PWcXDVQ7pDE6OjXXceyoNclAeejW3vc51F572X3KLh3/cbgYL2ckJTQ8bqI1xymzAvfTwzIR6SzUHbEQMA3QyEIMgyziFNyLl46zRWzYa2wLgfzRzvM4sOH6FT6J7XKnazr54B+dt9xRe+7rqXl0XHBZEBOH5QFdYUacPYprD0TolfZhIAYElO2+9s9P9slEgEDKta3KClDeYjLd28BUicnXFNT2SUlburd2d2M5QYbO+nGmIJnhhNtWgL/oreuM5MLIiGAVpgWe69cBg2OgAyOjNcH5vjxqYBDE4r9D1/dlEguRha2y2NM2+Z76ZMFC2xZADgMIwPIGAKOKhFQNsDHRQA2SxaD94my7OEWtouFVUyG/fF6Ziw1fo1jjITpHgknGneWvyzaN5c9GTzeloPqWo3W797+PXsez7NBZLVG0xe6FrWBoJgtUyTeKxagqQYIJoA8aTUbtk/dYgEkC1JA1MAFhFhicbZIRf8Gd05pzanaje76/27P7abpXZgfF1LdBLrV9sGEtZD7dfdqd0sIWYWlLTcgoK9Q9fof7onlcjMgFaMCEoWFnmTbt75n93jZCRMQKQVss6fcr736xEomhN7Wd/mRy4ApFTsZodeD0EbezBmsQp0ETRznhs9ApS26m/lOBEkj5Iwj9ft3kLJshUrDKRARoQVonltvYTb3LNKFmRApKEy0qjgVeuaus1OT5aEkYJFMlb0QUE/sb6he7sN477SWWauMcve6hQkFpIOPUR7tC0Kzm/b1IgxRgOOWKGzddjPoIZBSk0IAAiNqzY2fta7AeAIxqUBICygGIKAEYbCABCmRcwjRbu/oHpo5w6bjfuq2M323mWWIxtsOCdgdreLBNISu92AxcVFvdJlgGiNVrBFwXnLCQoQBL677lggwOT6RPea3US1F5YWKsZ5YGeoLte6q7uVgmj+F7VWxxqohDHyMsk96yGr2s06d295+7q76yIRCOraCivWYZdgkw0HAy1HGCQzICyQmUo3h0asp2ctJMwGEO1T4Rknt7HW3ZwVMlqhmYIt5WzITDivNTbNwTxbHoUxWQ7aDgLs4Vqtg4oyh5xici5qHSpUZGm2svpvZxWGLyclndE4LB8AsfLc1bvgBpBAIhO2xlXMRRX0db6+AgDQRt94c++rfSbNl3KWm9y5ZxMA4WKbHmcwEIZUCz9zo3uju6Enfez2XuTCgIwNxKbucDYVpsYDCAOrvKG7Ys95zjodIGLOWydSBJkDpxqfCbaisJEyAPCmgVRaDopwtQxljemMa1Xcc8RRKoEgVJIm9qxXwrlY0lGOTdskeLHtNNNC5nBGt3nOTruQD69sr/IedyaI3ZbZgGy2Hs1sy4d99jnmSGedxCbnI2GuFVBed7eViGWGmtMUDqhxRqxuioQxkIGB7eTyBl36gNT6DWPaoMyVENXWsBAQkYyoYBmrSC9oKLMkLBAVGQNwfppFDYCGbjNcpLjG0Cwkgs91Qxla7NW8fRPLV5f8QsliWIEBHXpHE4nzna1nCe4iptAgDoyDISxtw8xSLYVAKFnMoZyMBdA6nJ+20VJzbGQcdfBsXm8dO3pxbpmWz48DNzdCB/AihiGM9ZxXxCm6x/Li1/mFGsiN2ZW2QzVdmDtRkdXQADCwWooMELBAgHhjTs0VrGcWN5eFJqVqXPrf7Ti6IEVRFAwwxeJoiSiY6x1cFEwGf4oEpZC0zvzfL219+NEsonBQvefLjq/9W/68s/lNiY/0BYQBUWFEDWEoGdS8//rghdnTCYpntPtk1COEVSw6tRuJy5HIQN1rg2gMYYyojxLpzirDjKheWOEAQG9Woln8sleS8xEV3Nwec+7ec0aLGci7e294Kq7O9qLYaVWJ4cB3NLOLJskCsbItMfsCeGP7KP8DzVgBMtYDniFdXbdWYhpEbbTutxEAsF/7a+oSqt7a1Zl9wTZdqyfsqCkIU4xiEJgn27VadHQQevK3Y7ibb+Ptp57nymgWEtd9O6egmBfN8ffmoD0rI5hUsjCxsi1FMCka5cD2O3vQ729HUlmH14Q8F6m7mpKlMCNiMZTonI5GJIywsKkolW6UjD4TJgjCVEorYPJkA2TB7XCtbGW2xginJkqLTEBHRqfcneA7L6LjNg8QtnmVtfmBkXGTZJxGjFpmn1NbEADGpa1p4Mg2+gAsuB0+cjfwzQGyg240PqBxIqdfyHayEeDDCIcBUkNAQ8acBcDFruMsfaZpV8azIUzZ4f10jauFhnjJGvoyWw68buA5rr4xAIHXcxUpDBCYzJf+LjvvnvwAVAb3kyeFrjlsn5/hBuy+SN4cQvOC2rm1F+I2s1hwBJ9soSqnMPAi1D557j6rVO42EnPsJbCfgM+c7DTsTKADdC4MrlG13W9TYKcFGllkgcWMZWigYUKBDMY8Ry0YdMAz/3DYhQ65vfhJyPaLuELOncWC9hRtyyrdJibRS9DLVffevY9iFiPr5srnrMedFzm1m4kthQmSuxkequrjRWJrjG383vN//Tj7v9JawEyOlFVf97/9X98riRfDYZsIAIpiEg0r3RKHITykDLPZqf46k1bPUAo6Gg0CgDcdUsyJR/aI2ImQRcHQkGoaMKayiO6JFAKEeBHd2uMEY81ja5XoiES2KhHLsSrrhQK9tn4zDmzsshMbxE1/e/ItkGYB7zGRl3zTp22f/gyAsHFmq3kFb2i0c9vOMDc97kwehsi48r7R98Vd3nEGzsq4I1XdzVm9FNFFxzYbpPYYZHFWZaGIXjQR2WCx+7wINceMZ9OPC3XMf/Z6YgPfmVQTsjBtzDmRMgDFipnZvIsNRkbQ9Bw+8Txkda5JRGnIwi5N5R1fYvYcv8TCTgAzFy87TBqIMsRQdp53+Ls4PSviXT4sspFiN3xxC9m8Ao4xFdn4qCMjIevmZ7LMGSoZk3nTpSQFiG8eOJ/dnwhqH9liwcw9zwxwLoJ5xZkxYWYiJoSs7M2oQS8iHJngyHOAgoCC8R9APQWyANADQB9sCsQ0BlPKNGa/xBzuT9eE0iOUr8Ypya0Xff8IOrkApWaFc4D3OaGFkyIToEAOaHane7r2z05RQEtmQCgrtpKuyCxxRZppROzkdvfNil/9xxMoIsx6BGd8LIMhzdj85+i8CCAik9Q5DCaxP29tmIzevetbA3nI6rbPT5zznIODG2R04vPbLnnW7oGOSeGNsxz6uraBEIo0awvmI2ZMTCv55c+UA7Fbvnft9pdfOEC78fs37HvFWYPtKWdilB45u9cqhIb8qcz+3I3AuTOOo3QEgjovBDQ4AF5YZgA8KorsOhOKyy4JFQgFUJ9ZhJgY6MLD0gjdtaaAKy/yScweELwkidm4aQYAI7IJskXktRiW6wEMaotKAyD2eSArZvSrDr3J2qceZyG93FGfIhhuZWYDPeg1/eHS0WXgLEAk7TGoMiwRdlKA2sQTs/wboTGRtnw20HlyHwCMq8FQ7VgYkmnqF5IImrRMs4tPjF6gymihS5e5AW4sJiIGGKikJMzCcuuYlCgndsJGKps0ACmcLF1tkcayiqG1mILFsHRZ1hyYpSnGCFR7tYKtWo4xEDWaoShtDcdCyF6qU2ygjKc1qcRTYDREAzA7xChr5lQvAxtqQ2FqMcc4L0haKOYpQwKRM4ISM30/wQYZKgzMihkjjvEDLuVGwJxxJgob0CLHnBE9dt86OPA2TIjp3qWP7YOYBMCEUienFNlj28yA0jMQZ/kqO3mIMwjRdzEA89zKaoeJZxUr2+ARLGQcmNfhvaDHMXRpGIA4sTZJQ7ZtfRwrEBCn+TaJp9lLHwOZBFAjRS7ZPat97Zm1IxQIqqk9xbYxb7RR177kaU/JBcHppdJ2ttKQdRuMA9oAniHjUkbsQFTvtWIEnCZJZQA0mmZh4esIQkOcU7OUigg+1oOesV70NwUBKCg5tcrStitrZrQlDFxBIrGDX+F+AKIswPpQK9bfTjGZKxobFGUv3egWO7jmojEviLkE7TCgJZEBAGke6mKYS2QyTd4xc8JILIJrliVhADxOIQNdy8chSROZbbyFN/Am/gI3ADAGCEMutSNzXFvr0pabC95icRGZYa4FZe4wLAwFY5hUAkwY0qMDRIbCDGipVkzAeAqI8BBGMSDQigVgwmRgBhfMYlMM1IEM9OgCiSGmQtJzpghbwgxIHnAF0MAyoNDYmFTaiDBgBTMVzCTRt5rPRJIMKkDWFIjlCuNiFBgwI4UkoUkJ45gpqaviTZMzkARD4rhMwFi5VgAzVBrXFIqVZwCYIWk14spqnBUPigHLisIsAjREVE1nZDgRI2CVg+TAhLFmKOTSeFOmQG/lbSDvDhWbhsOZuY8xv7nnaUnegoGFPJfnYz77/P6e7zuSEZDNu7svd382/7NvTo5MSgBowAjs1vZG74Z+fc/PJNgEZiHM0jigMUwFyMBe+2TvdvuW544dqJBcwid6VvlDvr2LjAQGNMj2S+1t3oluW4/0BGwINAZkCIzGCMDMFfbRbt9+f6fiMwwgkAAIGBMwxsmWMRrz8u57vIX+mDQMBohBDCAw2irehNz5YOda52l+YxuiAQRYjw/3cbXzmP32PiawZlAr83HvZe0BfW7flDCWVgIXIIAlzfyRgEDgA95f7IYgkI8GSMUOioGIOqtyAIyBsc46IGMAGBAMuMQ7WwEQImQCS7GVV1UkIbAnA7BEGEiEoNGMktiRHRskQbCk42DHnNs9Z4bkU0TjZJOAYNYpErntpW9WIgCJzFKZKUkgpgIUSEDBWZl122kiaUoiTWaLpJ17tjtiBgWQLTi9UgvazSqOx9EEEmAyS5oxBosKNuyMLLEjO3ZnPosSkFMCpmOxEp1VxjB5eWJlm2tjYoLtZhUsKjRWxX9JBire9IijQFf7KpcnkZHkMEeBvva2ICYlmyQs6UjBgD0tm2kgxLjCYXKwUjN/lJB8xC93r3NDoMmSJ2LqzwCulOu0zq6hxgzntM4uo2Hq0Z9tOW8JADb5OtzhNOPUk6IwYECAMLUxeCDqGMByGp/iooGgjmpAApBMnbaGZeAv99nIaCCY1YDZCA/CNJIiDGEzH0DNm8LILDA1hDq1kFnCQDNujbMeUCHA4G26mDxM/aE6idACrKgwF/tPRDedS9YmjlonHvKCXGTsNXoK4XymIMzsop0NwNW5ZEwOBMA1X1hLuXKcJ76o87ySC7C2FZAtIMWeJh3BsSaEJa08C7DKPPmVeWkmXyysUM/VzRfQqEFamj7d7J+F8BeBXdxTZvnZtPVLfcc2rws3zDnbJEPYnvGbgglMg0rNuMI202uZPH0AEiOqCnVXXQMoGTPTiFMJTZ4eADChBJKCsdxAQJJspjxjAvXIVMWZQViYFQw8ioUxCiRl1iNQpdY2U8I9lGymcidpAwV65ABMNDFGMVDDscIGnXQFEBkBMw4BRkNETaHWRhhlXiBom4VVZn0CACPiuAwIbY1mAdEnkOohxe5YM2ST9EUhKyMAQGx1Y+/9Zcyv7HlUUiQzSKrqwDVVeN3+lPdAg7s8X9kxKRAmAVfan+xzhchv77lHUkKIRMDstT/d5y7g0HzOc6ZTbiNWM2EysAJsQRixxjDMCvAG/VLHOjSfc890yhmxmskqWWVIKdkqBQWrjCiAVSJj1nl37/VWctueKjUIUXGJhEkABGy32Id7Mzb1v/c8JQjMPCdqz+y9v/1pzzqJz9v3NykhiUQwVAEFMBmOZwZVDYQ/2dcVIr+9j1ogYEkZ7+q+1gvP6H/tYwMwUOUIGDPDE+/qfa0ba2ZTi+gxmNgqykuGBgCKV7M1L/g9z3MSBZ0NZjprZ8qwWXk8MZ0tyrbGO7t7DX7ifHdBWZBPEXHJ9o7ePpE7dx7phCkqW0q5cmC7vat3HXhedzlRY0pWZ9jiclaJMwpAZitrM7n1lNkrnSsFz3OXzXCGUIPZjKVZZYQZsEUqWGWylbXTdmJgj12RsBWVjVKOTGQqkm2BQjKUU0Cgs6U6aG/0BkZ8Zc/PynSmDORTwQErB9uVd3lWMXfZ/YQpKptAodxQCYRkU0gYpzMmAgLLNeMTl8w7+uwTuXPPIxWmyNQbOVipPK/x3mRwRF/xjPBEIGPGUQ07yDd4tXtTi3k4sU2mPBjtSX2iAZirTwurQYsWAHVtufE7JANV7bhR062wzVeoq4rxfJw6qmlS5Rt1/zpHswItWgQCVD1lVU3ulfMa9O75D1b7p3kgFw1MvN3wKCbR/j+rmmMBAGepJq+zTht8XIAaQv5fX2HQdmepleurZpLN4V4DINpiteYVjRBiPo8B0Zp2Gb5YPIgMgHgB9G4hnEbrmMcJUxl2PedBlZPaJUZhfdGcS4c38rtBNOm6IFCfTJER4EW0pQrWJyMyIimMY0BoUup8mqzTxxqRNpcJGGjqWLaCWSa3PmJMOS4z1d5BxmQ1MBhSCBIBzEiyPh3KGSaNCjoMLLGlBGasAHiIQB4VeFNhBkSfLjUtH1zBqv3aFRsAdNLFjEjjqhgEQNZV18xQ3hxGae6wNiBpZZ0+Fd07AF2nw5R+6Xq35gTHOmEDlTciSwoYRgnss5zDU+AygYQCHkQgkKQGHiVn/5Zl6Q2VFEaWVSbJ0UBpI78bRKOuGzCvq7d7vrD7PWb6b0S82n2f9ys9d+2YgKnptlU+a6f+TB+b879tZJYJMqbSf9zgUp9P9bmX/+7j2IjEDBNg1f6kd5Bf3znTKbYtraWYgm0G17f3uL+/7u7ZYm3Latf2yd7n1pc8kaHGBivCtgS9dGeDAWKz1ihnBPTtGvto7w+c2/dUtXwI1FwyZqaH/1mfz+nX9jGh2jmtgSvtT/t8uPPbe0qaPGpMFc7aqT/TM9H/3DYAE5Ryg/NJ53vb7R5T07tzSblv575FabQZQdLKLAmCBb23d6f9ho+twaxATAAlgEghkd/aByR+a896tiQMZNOEB/YM+aP3mSojb6nf2++GzJp0XcjNvNx5Zd1l9xNWkWypisly4+5ru9917t2J5JgIZKiVKwer8a3x7s5Qv2sTPDGdiTKV/uOaS7HSDOyt3R32JR9nBkryeCIgnNXtHd0etztnp2SsgZWUNRhy7e4vd7/j3OuMp0/Iru1d7ej8oadkYgXQEzYGOsoZ0oOMZ2CRibBOXW2BbVzhwuUGV1oRYDrM9GuN05lICjPVw9/jPao/8MRtpkwbNqRcsr2z+yx37CSiTEOHNWPl8URBzjQMCt1uIzyRDqmu1FudnzK1FVT07iB4bnRvbAZzITFdeUAJsy+5HXLKrbISCUBk9jWJQM6KmWXHfcae7kTfsneZ6SKgrf1uuPd1BUimrncHjDAGYXXdFhr6m9ur2dCgRgtjEvWwBogAQEC0vNQ4INrp5s3eq1C0hwOo9UE39JsHwQkc7GKNrbeHsLfCEIYsuGIPa/Y2DGUx+UMBEBoY2Zzpy2gTkLRAv6Rj3PICHBKz/EQiwfmmRaVHuSkjcpggTQCT+TFTs7gvyQZnLAtSyzpNaqf3SgsqywZALEujxqx2zC316xZ0C3c5vzDDRgDOgR0G4MVssIF511bAwHVIuDo+OgcKCiApALm6mDEJC6vkBNSlIzMijVLvWxaiR6Bkwqx7ud7IQj3LiIyFGSTzKNUO6TocGAFJ1a5oVoWbydJDTCgAYZBshiRDMtFTsIKCKhx0yUmMMU0NN1HvyvZSa0JCsqCeVdEBhGngM6hD186JBcgCy8y8TWy0dZfmTc2YX9l9BAiq9/0yVZdudD/RPcVnd0+mnKHWkC7Xh3rvW3d4ElvFNmCTVAx0O9frfc537Nu2OaskRqxmMiWrDKFWNvHW7jXuZ/c8qpJVhjWlytW1TZxsVjG3uq90v9x5aLk2tx4Zm6yS2CoNFqjBfdbzzEq1OSvmGs6aNXRFrzEisicf9Yrb9hwm0GeTDh02tGKwBeqmPznv63MHt+05WeUMtWYFk1rbXC933+q9w/nxjqn6ZYUtYjSrrd6VPcnaOA1IffJs2z7mHeZz+ziSnN5U4EL6sxErMOsS3ajOHOx+0Ntl2VmUBJvOihFtkNxYjcOsi+ANb845dWt8Kfg9e2ZMR/W+X5RTIjIrFHiJ+5Z2nK9PkQnFrJTWlXpl9yfO/RKbyq2rTViYa6Br9fPO9+yRGbNKQVGr2xBqsG3SoZtct3p32td2jggGbFZuXW1ufQKbgQ59wvxC7+V2h+eYbJtaMTOaVQomuCDfBlThvurZmMhWrVJSbPWu6MlEVtiqMPvsDd2z+sbOGTrpzEYN0GzVKnFGxQzI0+f1buLOPVOfTuEGQTftvb590/MssLkqfunPRhhldYaQwWy2Slf2oKGbdmdIm9MnsFmrE9hpr+8eX990zqRv2arA9SbL1kBOn0066axNejnovtINwJKnrRlxHEzkZ40hI2GAsNmaALBohKGhgfW0QcGTTSpE8U/+1b5gdHxsWsJxPRUJUM3VoEWBRACbTPIm08RIBk0cwkXgRso4ixzDpZPL6fRxdW0MgwRfCl9D4Nbs1yLRghIVUdSScaSI7zBP5SjC/JRHuYEnOIIw1TVUfGI0ziUc0E9tkyuIv88P+an2VSYAkMIiYUflx4mXTIEDr6iMwTaugunKiKm7rpnILG2kOx1GlKloQTVNRRQa9L4ttEV64ZuyRCthelxLD3NhMPdSjQYNgRb9VQxBl4tNPg1o7aUgxLAOZB9euS63XBcOynf7QdeuRe5d+yIDIiTuBpoLH6MZuM5lOw6ZMSmnFmDDFl7iyiCNn4WNouIX4K8AEpx3csnaSMslUNoUCcOSc0esJuN85wFuJSJ5ATaF/WvoFhxYpwB7BugzPWHaPeuNDwMg2niMaJvHRjQLCWqk1sF2lmTXPFka6/ffxomjGl7OwwiowMDqXNZCsQBb3aRulUBii5ImGK342IWZ8xYsW0Y/rwpKqwujEdUWiUTllGCZ03mf0mcleNPO+NN3jAXCEBDObI8Bjiac3ky9lwhAny5YKNROnw3oApNP38bXAx6lSuFAJx2gmJIZB6OYKi8RRgFDgFEcEPHEL5ye9YExYxCttezDgi9rJHRM3JFC3/wZPSEB0jUvWP2abZ/4u3ihdxqyP8l7+Cr/lQl1mIiPT3rAz79eOlRgY8+//fe+jwBxz7jHz7+uFdUMNaKqToNTFX3wE0/+6KKR4alT1Zj3VvvuH/74+7/7E/AiIkX4hDGgpKNxQIEVe6/t/s4//Lv1DSAj8Uv8bfa8Zz8CAQOv4m+1M//69S/+/K/O/t8vyowAIxgg6TCXtHEiX+gcK1HnSJnxikQAUojGCRjwW/f/7Bz7iZfwT8n5NzyE2LV2/wdJCx7UgOHSWLDHgGGwx+7f/ZMFkJfICnGdTFpP3PyjM6QL0MlRNN7BrdzNFxlTh4n4cJ/b/+O3hiqU4w+70Z/+xJKOD7rFP36LimqGakrVXMuGD7ne4d4XfK/oApSqDe8R895s9/3pjx744x+S+HpkIRHCZEnAzCWfbJTe3Nq2f+Nfb1v3EOmSuI6PcejrR1EQChnX87G29d9f+uav/3L44QeXX8LhxaOHB5SIsjuBcPbkEoM0IZAmHI8JiQADIUo5OT4RMfOAE948/tOd/v65tP4kGf+HZ6Fda7d7MMd5t0lZZGgsgkREIoE9CkU64UClKmyyQGYQCdEEQwURwSiReo0V1AJYqjSQRdEEr8xiXKBxAIRPxSUgGkIYkTCi5kubIwwYwjCubKKXR5jk6gF+n0MUBoCB7EQvySZ69RDp/VZ5HeHDQMUD2rVDglkgEvFam6/CWggpscXuJCI31iBBbIm0o0eHzhODDolNTPfArRrWBESN4xyqgwkTG/aduwI7ullkj0uc7mt6flq6aCf7/B3O+brjqmj42zRRhNOYSizSA1pyP0KG4khTz0+gZu2gDSDdO/rav8bnc+mi6X74pfP13adP6uS42FQJAAhjXGGSVGDCwA5tz7HZKEgEDAhvCHNVVJuwxHANGrPElWGg5onJ3IK2MNHsxwxKzxufT03dD75Ag2A+RBsQJz7/j6HWl52xR4i+YQBo/1I/PRFmSaT7dJ8jqzQ/mFAeCESCICWbpFucN+hz7hOOSIR4IFgUAWZ2vUxUIOOD3jCJpb2vGfOAhrzHZ/q4aZ4EM3dPNkNSyO8mozjbht9xjJyxSpAmcsbBkiSRJEGeFWCrSoEJWAYk6KofZ6uiwAkYSsyomkC8XN0GAEMmICDhjD3XHNd5H3vWHEvH5lHQ71qsou1UcA77IiGyjIsdmGi9Je3F6GVJki3lLc7HuIntRrvRtVyYAGALmq4S6oAn4NrBDo5qk5l/GSUBAAEPKIkw0j5LWdoKQ5FDTHiHd9HCtpvLFa/jqN8tjOJsFxDHxxW99d1y57YPfeUjKUoKRAXB9vZ3b86/3XNGkMhIMhBk9j/+/u5z9R86IzlORioIRAWoNEFmf2YgPmZKtfe5/+DtS6iT/GuewsTysTOqEnTT64++fxbWM73a60/9fDI2DxUjlr9qxbv2I6SCcwg9KPkLrvuOK4wHjWfd8t3nUwIMcMwdVr7yeg9gHtnZdkYmEoGGSHYBgDFhqKaHcGCrX4u4RFeQQJiE9V0oSRqLfiuAtN8tLgqjG1X4DW34hKnora+RZk8OPkmFgjKKlV1hW6lP3HX9ujNc6YovnUTNkHadT9oxfVZFJyZVJ6VEVsXKCJpC78oMJCVWJ+Vi2/nohsm5ksOgoLg4eDdB97onz32zHXnGiSdf8LNkbF6yYmw+ofXVoyhSwTkyFnDOPXzmq11HuozNB1/3a1eoieC7HiS4Vzz2pAc7PBdjltFfxcwcWHZ9g20wT3McpUKjcDipnavprRZ60xdKFzBAGS2iVbE5YxQDzgxC42tmgK7sgZEaQWSdTz8ktvFXqXCzzh9CEwG+xLF5XcQPrQnOYQiMA5qYBghgDJxySfccjlxIEXJcLuuyid1kDWV3I117p/D+Xf7px/j209JJ8eQff0QAYqR/ks5FhO2csz5Iw54+2QO0Dwef7izdIe3jPPxwpBP4Uk1mTfGw8TFIwnkll5gT8ZWOYw5o7ykhxNEdxHQPUCLnNAWFrAXxCVt6YgppbjzhtS8m6dBmei3L/i9F9xP70KSM9UfAHN8iCQCoqCHVmNdq5D1f0YDLndBUh6El5AnO0NSUFSTi5GXVymJpp4lh/mZ48JAc1C7qlB2ZoO0EDv3jt+92PMQEpQMXofQvrBTlCCSzmAyOEQUwu1e/Cl4qk9+7NmYqKWQwYpWXuqzS/F1N4iiJenEq6bRSoPS49gNJwExJ1wGp1pIa/UePVBF3Auc+TgZVHdad6iUOBl67vvmvbaMb3XjjExyt6NmLma5RHFegNXbZAZakeMBh89Se7aVDcEGdNyzq4DNdc/XF7R1haypcuUAGgXcwqSluWbN/H0x6J0pZbdh4ZLfaF4KPqUhvEhY6NpXvOAaRrSv3HUAFFsiIqjHVGtLbUEwlzhe/x/QC0gqYeSFGXJJoASmnbQsHFLqm88zzJADmcn+nD73zx4yShtGL9RMq4epf+t+HC6cbPnj4dbPGgljTRz37HX+SpOnt3/r579NaRJXCHH/rzMt2kvqUx7/x3xWss4mrqp/mL32IH8KKRQmg8aZq2HwD6YKJqdWIwLnES3CwSC0YMxtla//q8pSW/fp3+8/JPX4vhQfuO3kx5/I7dP45V+WlWMTqzOte75TL2aEiR5Vr6riZW553nsmIERFVIo3lW7dd8ffDmuOG1/jfDlZgBTNDpcXYLaaH86xr/hWqBGIAc2czR1KZCrXLtQ4ihpJZ39ulIbywRzhvB+oA6WGLQNgDSB9UQV0MOyo+IY0NMnsBehk0AD6FJjPHW5VBWmQNoofmdUtAc/oWOBdsba42TbA+AxSzoNMoY9cd9Jy45hZ4wc9t37gO5HK1+4jnfXsRcOzUAiskDwDUlUMzt4ITzQxzeY2oDKwAMeejFoiG1CAWzuQI0uhhbZvz45izWrEeZ4gCyGydMVtqlHxbz5Ch6tKfVc6k0JzlfVZzdgoREOtENmjQphE4Yp3EBmyuvtaoxn1TVi+8O16YqASHF0FzAQTuWV9wXp2fd//XzhkyYm2zP+39kfPtVf0axSuQEDs5qa87P1y1C2EjN7X3eP/PnucFouF0C7vW3tv9lT3PKWC6fKZ7nC/uGCMMgMqjeEDk7ZPuab6wY+Am+2jvonUNs7QExb4PssCE1YwLm+rKlRKlTSmFVqrOIABAurTJDnVKjTBT3ElgjVpKkw3veN+IcEM7oh1ss095x2TE9Lb92dBJkkDjiKRAIptY2da1HfZ675/z/pm9ovLXLkjssN05pNFEQpKCeYQBik2kCrbGHjukTWUTqzP7U84RJUwghqGyLSazKCYks4spOYwnsC17bWnjLLEe6smZbu05u0uB9Su+f4GdN6O6AOG9bv2js6xc9653+vkpjHAMCDwoY49Z9409ke72Fg/4618QGKl7px5/5Q87qhJhyu3v9dt/wwJb7a8ikgDHqHe569DuRAhZXbbxUjPmygAAJJd7m7Mw+8azh5e2hrRnwkbNKdcdL0XLpXG8iECAoYYUkiSrWH2X0PQaRBkAGmC5bQfQRvt950pBuhLIvGb6iId84DQpMpTywMd/7N9icOBKMSxwkr908u37UObB5+F2L/zGLyVCyjD5prM/5bvoJV3hpJB7PPOzf7ZUFtOr2payUiLPnjS0B2Pb2Eag3q42tVLMSm//Pf7q32FNon3jPvX6MInluL60ro+N0IG02NEAO+8dIGhl7Ta8ILjxvCKIZi9pJjBB4TKZL42s3aHZLBYQIQmzVpjToC4+GG90FmOq6EAQIi8iz4bWZIUeDQxjNqhEeod1Nt7++8jX/s7RBgCuyl/MJn//OMrWDLKgrr2c5tYY6rEnkN/FHoZE9l1sxDRjL0RpqkEMv8N7dT1JBO5xvrgMJTzkwPZnen+v+6v3BZJEZYR3iJds5z52v76/yxHmnBLJRaUYCth5MTU3uH+mGwmbKpFNP/s5/vY/T37lHxKxwihpZUQgS1xZy1/f/pl+2rMPs5Tt///5UUQ0PeWgwcsCAMby8yV+8T8xjQMalxY4Gpd28g+/stPMQssypGClrCQWG8EUh/YnZGcBMInmPByKREoR+JJvVGq0wCZaFmu/yUENbGAYq6Qk4wW0eUuWFsK/+YK3igWTKOyBXqK9AmVa/ENoWgMUNCUGSpSdxeqeJISwXgGU5KuVAI2OE4VrvJRF047x75t1lYGI2pWmn2shTh+eZOcFje85GFwABKu3zm/vMBbrNKdl+zy8w9rNuusoImWPBNM9RFVkYsXeA7HCxE2NR3A0Op/WdLm9rZrgC041VgFlW1fr60GgLVTLoVn/L5vFO0JVEBOdjosNxPuC84Lca0+jCYnDdT/4p4+UCbFO692rXn6AQcJN37P/1busFkghHoBho7zi9q88PwrK2XzbxCstHAzg1T783w8UqjV8DLT4z3+MfyWGNAgIAdoAlpaKsPV9HWGb/z0mKSEXJmFAgOS+lP/ZGUypNjbcftfJ7YRYp3H7xj9mUTR0y22O/yMuDBfXMXtXgd1m+d8OdxG7EDlbt9e/t1M13zpxq8vOQMEs4jskWVIddKvR8rujULXRex477+Fi0laL/FsDMJ9qzuF2NeKf1BIgveDUinzqKHsWGAWt3XYKOlqaX+oWSC7WkpmZ8sA9mclBPc3GkEUbaWTVekvhXOKONF+kinrgRzQI3WjLXQKMxmUAaj83TFhEImAYAF8aSgWG8ZmXxgCDLA4AwJj1MK4HTk7vh0vFcTaVr5DQDv/9D+72zx5idHkAgAg7Sl+/qCP1UMDS8VJUN661+sFWYFQOCyr/+GOyso348P1yEFufdWMMNXsOp/Xc0zYedA6x3azsef/Iv3opKYEUAJCUVIGubspxPTm+TFBKGOpgVvVHRFKC0mEAAlMs0Tflniz17NNUAVNq6Yy+k4sudLnBvbnlJO36xj/Uq3cfCZzqHlAMUAwQprm2dclhyXXGumNN00LasZ1jqsy1jL8aic/C7XlDTwxUcqk6enlsbFyLPA+Nr6ZoxpaVnEjMiACgIXGOoNs7OC9MesY0UB235bOM7OozLxVippYV6KIhaJvZJMztelKUxmHZ5hT9C91Vjd0WlyQ6rtgDgSHMd5LFHNU5Ac30WsagLUeXcpZu2FhhgONq0xonkPHAHWNDzquoKu/mtIs7bE7xgF4QQ5WU06FS3kh5tJEhzSF+KVODyOCuEaKlJXzylX+OX/j/xhIifP6x+3+/3nRb9eVuuBprETQy2oymC+n8ErbLxwfZajdgEkxASWOaJCDb/MZfT77431pNQ/c6n36h6bEcpWAJA5BhElWKoISZk5prGJUenbmlD+Yohggg0tDwlV5V+IxxgR+tr3kSN7kn9Ds7pyVDlYaYS5v1GvfnvP/uC///aK8EwhIWgMyy3biPgrs8Px4B4Ggcc7W9xfs5z+GldOeDvYfW1zvaXBqXudp5i/M598hGaVwMCBdoc5nrdl/bbts5AcWALPAO9/qWaKPyoUYMbfgvUMYO6nWIZl/uV5rL28DuWVuKZEzXAZPIEFe3A3bnl/7l0PMlOokcQzGRDBErs8vev8u43L3FEkBMmJjM9nGN+5OdE2TpzCu6Z/SwElaYWBn7dI3zE06TJlQaA6EYl7AF9nO1e4+zQRQbZGTc4O6LWfBOLMRnac/LPq0i5lJ7+164fksJNJJ4bOVX/znd/zXaXcLr+8DL7K3dOmNSMAGWDQJYJa4TQaI59SQCsgpAkml6jaFFgqV0bO9GJCZWNbcuoIWhJOwcuFuquH/hFumivo8mnVctDAPdrQsxaQGAK2yBRKqGwhgBJgUSNpjfaguSTfdFEGA5hCHMHWDL6g4qayqBH+lrHgzAXMY7u7evZ0UxhCUDSwaOJumAvat7u/PsCubS5rAAaMIRSRfZ+3u/uvO48nq39xp7MP2oMwYey1imBATOibJjvRHP1f07RkkrY1eut5/q5EQMxYRoIgGRCInbXrvBfto5OlnSBEwCQCeQCCduO3OzPaRD0+Fmd08ETKJiOZJFOpL1F4QBtviBy5P6AKFUUlkiQOZkYo8iKhyNrr3gAxJFsUSZhKt8FQ27ocJOqqLKqt3VaudKg7G9qQPDzObbIzguxBJYP9kAnJsHEoUEaZVypMshOYjUQW4JRvW8PJHKKBiSnTwVnyTipDAEGBLIqZSbpiTBRjUGh5Kd6mDqmDgGyJzsEiZL4Dza80y8SDakfRy7XhB7FVNnToN0Fhkvgt2yjBNcXsdKfHHrK/6dMQVOjafzxgiAyOglpsaUp08AIDHaym0uttKncwCgmBFt6qps+mScvx+ZZWmPlIYF5o6kRUTtLNJgGfCwhADYICDaPh7iFyDG+AooMoxQar6apKQDmK1HJFDrbi+ZBABGmUQR8ySd0YknG4hnK06YFhLP6Bjl9VwLYJxrLA2uAHBHSzyWXRNQSK7CJ+oJH/xVyNS+ygqm333Zn/9g87nFObaeIUUTEk9AOcCeWwlAzNYZzWManmxSFEjZMVdZGaOYzUfi2TqCIwLxZCQcABGIySbkKlsnAhAZZyOPa3KySdExZsqSERPCSzoiMDhX2wJ/GMmR9+NFYf40Oic87c6rt+//62Kqa37U6ht/YOplpV+695+/sXmLuV8/lqPRSQkDtzThAJQZ5mTu2NkixBBNyr68fhcAYPPE8/16VEQoKQGPD2hAJxHI5lY7YA6AM8mh+oYmCfEojiOURCARxmGIWM+buuCcR8d9SbWt7G3/TvdWLDAzl4DLkjSbcWk6VlamEMS5TRidlDgOKIaILCYfgJStExMnhcxOzMiSjQAxPEUSZWYUigGACl4OkwGQMSSdEo9iCFSZCExFyVEC51XrCgvg6c+9c3IK4eWgxAoAJNCG5wjI1JxrMzwN6SxPJwBQMDr10AzpQoDEDE9ifoHaSf4CkL+MzuS0CTGl93KeFOyCAbYKV4YpnkWWnOkd/f65JAEsjzlDQAZdRlNQnqrk00mlVVamnHSqS/clpNJOmDzmzSInRwAQp6TEmSth8pNzHn9aIQLJ9dneNHmG4iyStFZpJlndIQW+AxRSgsJeIzGUe5SEagLAzib+nb3sLk+7VEwkDGLVnZgqeTkSJHwxQGr1o2QOy+a8oONaSSxuQdq3eqJXGNBfDEG0TuykMiUAkq8kOQbM5DulsTDBUWEDFAjLjjSLWAcDixFIhzVvhADEKQBrO0wdMnNdE5kjkM7vLwmXAhQIm7i+IvKuB0gRHBUiQZwPADZ2+xZSpwffQHLVHRsiwRwFIQmVLYtQCdEhIKe4SrAZhZWy6KRrX1A/mndDeFyPxgDkKF5KqA4DDLkmBjtAjJBFhxogU2oowmlU52RIB5VHiUB70PHEguFUjIb5SkwIQL4PLx3Uz1qKImCvDYrQjEtmacMLkRtRaYyqHdpTi4GxiyxFo2lmAAhZzZYWkLU/2MrEEAByVgqG7AuMeZP6fCCEwF0bbu2yA3j3UtfUADDHREgAGG9kKkyx1MelxkqMU+NY7O9pmOjFK0fnyMiAdYF0tHZEQxas7V1LO+LMlTnZmjI/m3Vbww2QpkFozX/3UayWUkizqYkicTR7S/ZsvmtfaicQF1S/t8aQujAALbRsl1je4pp7VDMn2sXz/FCdXD+dBmnGMsEsowZeapoUoTHghIHZFxCN6CEyI84IIt/qHuBqHs8F0y+mMYQNwKUNNa4aETBEmHoB3+JhO5gW/02nLtFUgsxkyDCkeXVCe7ZNVtMlzNP6PSdaEJYIgmTTPUktLZmZfkFAK0bI1vRe7zZCHQDpeH7PfTbbd0YMhwBokObF3E4ykQnWoVRkfjrqmgAoiJJ1J6VQ7VE2BIBLpukkAJGSyk8ChOQUeOqSJauCpNlRkRcpxzW3FcVklW8AULa45vxFnssW1TCGvTNAxnM4p5ZCmleP0eU6Oi3MM7ljJ0oGVn0PAKD6BdaavdNdjfB7jNoAIOg+O2pbHLVDtlFaoAHyYl4gbPGIUzDgpe6znKSW4bFapdnhoLtiJvKos0HGS91NPesANkOROnuT42hzZXaVbdtcR/iZKtG5zqXtSQ0HCOOaxeBF2fP0+KdtCYRLUAcq8HSxTZ2u3FmrVmfAXrtkA4DncgxUq0AQBl2uskM6JaWS9liwrV1BQHMa69iMpgCapgRatzUYSClhyRyWDBxNda/yBdUxzoIWOqWntq+1dS6pde1eRoOQVrrMi/ecGJLIGDCmwBJW1YyBhCWMCAwIgDWyErEyMSMZDMkMKkwOTeOETRmQAcWMcQAYkdNjZGWHbSoyBqiedTQkYilTgH6kEcYlHMmAMMJhhIuN0talCwCMU8wMlrBRbJQRgcE2YRJpKo5wRE5/gGwxJnI4J9KctYPcGACokWicuR9borU1zCm7UpvzcmUGAISY8REv6v9EVtP2f2BKNPz2tYgWVx4NhmwUMEBaHXYkqLzhtPCAq/bMqjRowGXmHGYAnM1ZnZwF7jpJYxEMzf8rvMcyxPU7v9TZRyoAotFSZ8gYABDnEvFODDWofNfmjjZLhmqNN6yuhi1Ry3YA5rX1GxViso1sGjtN/L/1sa8grdY9JmFmNMhhUpJ1rGNhnM6BmTaJWQDCXkHvDkOA5QIerqpIBCBSfMJmLAYDKx0mS7GcnoyYccQCRjMY0v77HRiHMSkGzNMzbu05KbbSlMVDFNsPyXoKYwexVsdBgSIh3REAFjAmNbMd/c9OlDoRbuKcj2I2syuzBqD6/6KIaeUoUF47hmfUEYUYUEnMU0GBCAg0t88xrd1SLhc=) !important;
  --pdf-background: oklch(99% 0.0005 281) !important;
  --pdf-page-background: oklch(99% 0.0005 281) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: oklch(99% 0.0005 281) !important;
  --pdf-spread-shadow: none !important;
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125) !important;
  --pill-background: oklch(0% 0 0 / 0.0625) !important;
  --pill-background-hover: oklch(0% 0 0 / 0.0625) !important;
  --pill-border-color: oklch(0% 0 0 / 0.0625) !important;
  --pill-border-color-hover: oklch(82.50% 0.0025 281) !important;
  --pill-color: oklch(46.5% 0.0105 281) !important;
  --pill-color-hover: oklch(46.5% 0.0105 281) !important;
  --pill-color-remove: oklch(71.5% 0.0105 281) !important;
  --pill-color-remove-hover: white !important;
  --pill-radius: 18px !important;
  --pill-weight: 490 !important;
  --prompt-backdrop-filter: blur(12px) saturate(1.125) brightness(1) !important;
  --prompt-background: oklch(99.5% 0.00125 281 / 0.675) !important;
  --prompt-border-color: oklch(0% 0 0 / 0.1125) !important;
  --prompt-input-height: 48px !important;
  --radius-l: 18px !important;
  --radius-m: 12px !important;
  --radius-ml: 14px !important;
  --radius-prompt: 24px !important;
  --radius-s: 8px !important;
  --radius-settings: 28px !important;
  --radius-sm: 10px !important;
  --radius-xl: 20px !important;
  --radius-xs: 6px !important;
  --radius-xxl: 22px !important;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent)) !important;
  --raised-blur: blur(8px) saturate(1.125) brightness(1) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-padding: 8px 0px 12px 8px !important;
  --ribbon-width: 56px !important;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145) !important;
  --scrollbar-radius: 18px !important;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092) !important;
  --search-clear-button-color: oklch(71.5% 0.0105 281) !important;
  --search-icon-color: oklch(71.5% 0.0105 281) !important;
  --search-icon-size: 17px !important;
  --search-result-background: oklch(100% 0 0 / 0.625) !important;
  --secondary: hsl(212, 100%, 52%) !important;
  --setting-group-heading-color: oklch(55.75% 0.0105 281) !important;
  --setting-group-heading-size: 18px !important;
  --setting-group-heading-weight: 520 !important;
  --setting-item-background: oklch(100% 0 0 / 0.75) !important;
  --setting-items-background: oklch(99% 0.0005 281) !important;
  --setting-items-border-color: oklch(0% 0 0 / 0.0625) !important;
  --setting-items-padding: 16px !important;
  --setting-items-radius: 16px !important;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281)) !important;
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07) !important;
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07) !important;
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625) !important;
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625) !important;
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055) !important;
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125) !important;
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%) !important;
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12) !important;
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07) !important;
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07) !important;
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07) !important;
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275) !important;
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275) !important;
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03) !important;
  --shadow-strong: 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12) !important;
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07) !important;
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092) !important;
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4) !important;
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055) !important;
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055) !important;
  --sidebar-left-toggle-inner-width: 12% !important;
  --sidebar-right-toggle-inner-width: 12% !important;
  --slider-thumb-border-color: oklch(82.50% 0.0025 281) !important;
  --slider-thumb-border-width: 0 !important;
  --slider-thumb-height: 12px !important;
  --slider-thumb-radius: 12px !important;
  --slider-thumb-width: 12px !important;
  --slider-thumb-y: -3px !important;
  --slider-track-background: oklch(0% 0 0 / 0.145) !important;
  --slider-track-height: 20px !important;
  --stacked-shadow-color: oklch(05% 0 0 / 0.055) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: oklch(0% 0 0 / 0.0625) !important;
  --status-bar-border-width: 0 !important;
  --status-bar-radius: 18px 0 0 18px !important;
  --status-bar-text-color: oklch(46.5% 0.0105 281) !important;
  --strikethrough-color: oklch(71.5% 0.0105 281) !important;
  --suggestion-background: oklch(99% 0.0005 281) !important;
  --sync-avatar-color-1: rgb(233, 49, 58) !important;
  --sync-avatar-color-2: rgb(241, 110, 53) !important;
  --sync-avatar-color-3: rgb(229, 169, 37) !important;
  --sync-avatar-color-4: rgb(0, 187, 93) !important;
  --sync-avatar-color-5: rgb(9, 186, 221) !important;
  --sync-avatar-color-6: rgb(31, 132, 255) !important;
  --sync-avatar-color-7: rgb(124, 80, 237) !important;
  --sync-avatar-color-8: rgb(214, 50, 202) !important;
  --tab-background-active: oklch(100% 0 0 / 0.625) !important;
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: oklch(82.50% 0.0025 281) !important;
  --tab-font-weight: 420 !important;
  --tab-max-width: 240px !important;
  --tab-outline-color: oklch(0% 0 0 / 0.0625) !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 8px !important;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent) !important;
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent) !important;
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95) !important;
  --tab-sidebar-container-bg: oklch(00% 0 0 / 0.03125) !important;
  --tab-stacked-font-weight: 520 !important;
  --tab-stacked-header-width: 56px !important;
  --tab-stacked-pane-width: 43.75rem !important;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055) !important;
  --tab-switcher-background: oklch(96.2% 0.0025 281) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent) !important;
  --tab-switcher-preview-radius: 20px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%) !important;
  --tab-text-color: oklch(55.75% 0.0105 281) !important;
  --tab-text-color-active: oklch(24% 0.0005 281) !important;
  --tab-text-color-focused: oklch(55.75% 0.0105 281) !important;
  --tab-text-color-focused-active: oklch(24% 0.0005 281) !important;
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281) !important;
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%) !important;
  --tab-width: 240px !important;
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625) !important;
  --table-border-color: oklch(0% 0 0 / 0.092) !important;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) !important;
  --table-drag-handle-color: oklch(71.5% 0.0105 281) !important;
  --table-header-border-color: oklch(0% 0 0 / 0.092) !important;
  --table-header-color: oklch(55.75% 0.0105 281) !important;
  --table-header-size: 0.90625em !important;
  --table-header-weight: 520 !important;
  --table-line-height: 1.6 !important;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275) !important;
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275) !important;
  --table-row-bg: oklch(20% 0 0 / 0.0275) !important;
  --table-selection: hsla(212, 100%, 52%, 0.1) !important;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) !important;
  --table-text-size: 0.90625em !important;
  --table-text-weight: 420 !important;
  --tag-background: hsla(212, 100%, 52%, 0.1) !important;
  --tag-background-hover: hsla(212, 100%, 52%, 0.2) !important;
  --tag-border-color: hsla(212, 100%, 52%, 0.15) !important;
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15) !important;
  --tag-color: hsl(212, 100%, 52%) !important;
  --tag-color-hover: hsl(212, 100%, 52%) !important;
  --tag-padding-x: 0.6875em !important;
  --tag-padding-y: 0.3125em !important;
  --tag-size: 0.8em !important;
  --tag-weight: 490 !important;
  --tertiary: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%) !important;
  --text-accent: hsl(212, 100%, 52%) !important;
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%) !important;
  --text-error: rgb(233, 49, 58) !important;
  --text-faint: oklch(71.5% 0.0105 281) !important;
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33) !important;
  --text-highlight-bg-rgb: 229, 169, 37 !important;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625) !important;
  --text-muted: oklch(46.5% 0.0105 281) !important;
  --text-normal: oklch(30% 0.0005 281) !important;
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15) !important;
  --text-success: rgb(0, 187, 93) !important;
  --text-warning: rgb(241, 110, 53) !important;
  --textHighlight: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33) !important;
  --titleFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: oklch(0% 0 0 / 0.0625) !important;
  --titlebar-height: 36px !important;
  --titlebar-text-color: oklch(0% 0 0 / 0.32) !important;
  --titlebar-text-color-focused: oklch(46.5% 0.0105 281) !important;
  --titlebar-text-weight: 620 !important;
  --toggle-border-width: 4px !important;
  --toggle-s-border-width: 4px !important;
  --toggle-s-thumb-height: 12px !important;
  --toggle-s-thumb-width: 12px !important;
  --toggle-s-width: 36px !important;
  --toggle-thumb-height: 12px !important;
  --toggle-thumb-width: 12px !important;
  --toggle-width: 44px !important;
  --traffic-lights-offset-x: 56px !important;
  --traffic-lights-offset-y: 56px !important;
  --trans-faint-00: oklch(62.5% 0 0 / 0.03) !important;
  --trans-faint-05: oklch(20% 0 0 / 0.0275) !important;
  --trans-faint-10: oklch(05% 0 0 / 0.055) !important;
  --trans-faint-20: oklch(0% 0 0 / 0.0625) !important;
  --trans-faint-25: oklch(0% 0 0 / 0.07) !important;
  --trans-faint-30: oklch(0% 0 0 / 0.092) !important;
  --trans-faint-40: oklch(0% 0 0 / 0.1125) !important;
  --trans-faint-50: oklch(0% 0 0 / 0.145) !important;
  --trans-faint-60: oklch(0% 0 0 / 0.32) !important;
  --trans-strong-00: oklch(100% 0 0 / 0.95) !important;
  --trans-strong-10: oklch(100% 0 0 / 0.75) !important;
  --trans-strong-20: oklch(100% 0 0 / 0.625) !important;
  --trans-strong-30: oklch(100% 0 0 / 0.4) !important;
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1) !important;
  --trans-white-00: oklch(100% 0 0 / 0.75) !important;
  --trans-white-10: oklch(100% 0 0 / 0.625) !important;
  --vault-profile-color: oklch(55.75% 0.0105 281) !important;
  --vault-profile-color-hover: oklch(46.5% 0.0105 281) !important;
  --vault-profile-font-size: 18px !important;
  --vault-profile-font-weight: 420 !important;
  --vl-ease-out: cubic-bezier(0.3, 0.75, 0, 1) !important;
  --vl-layout-padding: 8px !important;
  --workspace-border-color: oklch(62.5% 0 0 / 0.03) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: oklch(0.2 0 0 / 0.0275);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: oklch(0.5575 0.0105 281) oklch(0.5575 0.0105 281) oklch(0 0 0 / 0.092);
  color: oklch(0.5575 0.0105 281);
  font-weight: 520;
}

html[saved-theme="light"] body .canvas-node {
  border-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .canvas-node-content {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .canvas-node-file {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: oklch(1 0 0 / 0.625);
  border-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .note-properties {
  border-color: oklch(0 0 0 / 0.0625);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-key {
  color: oklch(0.465 0.0105 281);
  font-weight: 420;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: oklch(0.465 0.0105 281);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(10, 124, 255, 0.1);
  color: rgb(10, 124, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: oklch(0.465 0.0105 281);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0 0 0 / 0.0625);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: oklch(0 0 0 / 0.0625);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: oklch(0.99 0.0005 281);
  color: oklch(0.3 0.0005 281);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: oklch(0.24 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 670;
  outline: oklch(0.24 0.0005 281) none 0px;
  text-decoration-color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.3 0.0005 281) none 0px;
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.3 0.0005 281) none 0px;
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: oklch(0.24 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 670;
  outline: oklch(0.24 0.0005 281) none 0px;
  text-decoration-color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .text-highlight {
  background-color: oklch(0.9 0.150353 81.1033 / 0.33);
  color: oklch(0.24 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.24 0.0005 281) none 0px;
  text-decoration-color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body del {
  color: oklch(0.715 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.715 0.0105 281) none 0px;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body h1.article-title {
  color: oklch(0.3 0.0005 281);
  font-weight: 490;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 50%;
  border-width: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: oklab(0.637864 -0.0435936 -0.193248);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.465 0.0105 281) none 0px;
  text-decoration-color: oklch(0.465 0.0105 281);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(10, 124, 255);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: rgb(10, 124, 255) none 0px;
  text-decoration-color: rgb(10, 124, 255);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(10, 124, 255);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: rgb(10, 124, 255) none 0px;
  text-decoration-color: rgb(10, 124, 255);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal.broken {
  color: oklch(0.637864 0.198104 257.288 / 0.7);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.637864 0.198104 257.288 / 0.7) none 0px;
  text-decoration: rgba(10, 124, 255, 0.3);
  text-decoration-color: rgba(10, 124, 255, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body dt {
  color: oklch(0.3 0.0005 281);
  font-weight: 420;
}

html[saved-theme="light"] body ol > li {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ul > li {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body blockquote {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body table {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 18px;
  width: 700px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: oklch(0.2 0 0 / 0.0275);
}

html[saved-theme="light"] body td {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-width: 0px;
  border-left-color: oklch(0.3 0.0005 281);
  border-left-width: 0px;
  border-right-color: oklch(0.3 0.0005 281);
  border-right-width: 0px;
  border-top-color: oklch(0.3 0.0005 281);
  border-top-width: 0px;
  color: oklch(0.3 0.0005 281);
  font-weight: 420;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body th {
  border-bottom-color: oklch(0 0 0 / 0.092);
  border-bottom-width: 2px;
  border-left-color: oklch(0.5575 0.0105 281);
  border-left-width: 0px;
  border-right-color: oklch(0.5575 0.0105 281);
  border-right-width: 0px;
  border-top-color: oklch(0.5575 0.0105 281);
  border-top-width: 0px;
  color: oklch(0.5575 0.0105 281);
  font-weight: 520;
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0 0 0 / 0.0625);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0 0 0 / 0.0625);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 169, 37);
  border-left-color: rgb(229, 169, 37);
  border-right-color: rgb(229, 169, 37);
  border-top-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: oklch(0 0 0 / 0.0625);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: oklch(0 0 0 / 0.0625);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body figcaption {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body img {
  border-bottom-color: oklch(0.24 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.24 0.0005 281);
  border-radius: 10px;
  border-right-color: oklch(0.24 0.0005 281);
  border-top-color: oklch(0.24 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-radius: 10px;
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: oklab(0.976 0.000286213 -0.00147244);
  border-bottom-color: oklch(0.465 0.0105 281);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.465 0.0105 281);
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-left-width: 0px;
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-width: 0px;
  margin-left: -27px;
  transition: 0.21s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  width: 18px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: oklch(0.715 0.0105 281);
  text-decoration: line-through;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: oklch(0.715 0.0105 281);
  text-decoration: line-through;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(241, 110, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 80, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 187, 93);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 187, 93);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 187, 93);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 9, 186, 221;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(9, 186, 221, 0.063), rgba(9, 186, 221, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(9, 186, 221, 0.063), rgba(9, 186, 221, 0.114));
  border-bottom-color: rgba(9, 186, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(9, 186, 221, 0.24);
  border-right-color: rgba(9, 186, 221, 0.24);
  border-top-color: rgba(9, 186, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 214, 50, 202;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(214, 50, 202, 0.063), rgba(214, 50, 202, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(214, 50, 202, 0.063), rgba(214, 50, 202, 0.114));
  border-bottom-color: rgba(214, 50, 202, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(214, 50, 202, 0.24);
  border-right-color: rgba(214, 50, 202, 0.24);
  border-top-color: rgba(214, 50, 202, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 58;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(233, 49, 58, 0.063), rgba(233, 49, 58, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(233, 49, 58, 0.063), rgba(233, 49, 58, 0.114));
  border-bottom-color: rgba(233, 49, 58, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(233, 49, 58, 0.24);
  border-right-color: rgba(233, 49, 58, 0.24);
  border-top-color: rgba(233, 49, 58, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 124, 80, 237;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(124, 80, 237, 0.063), rgba(124, 80, 237, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(124, 80, 237, 0.063), rgba(124, 80, 237, 0.114));
  border-bottom-color: rgba(124, 80, 237, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(124, 80, 237, 0.24);
  border-right-color: rgba(124, 80, 237, 0.24);
  border-top-color: rgba(124, 80, 237, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 58;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(233, 49, 58, 0.063), rgba(233, 49, 58, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(233, 49, 58, 0.063), rgba(233, 49, 58, 0.114));
  border-bottom-color: rgba(233, 49, 58, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(233, 49, 58, 0.24);
  border-right-color: rgba(233, 49, 58, 0.24);
  border-top-color: rgba(233, 49, 58, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 31, 132, 255;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114));
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 31, 132, 255;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114));
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 241, 110, 53;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(241, 110, 53, 0.063), rgba(241, 110, 53, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(241, 110, 53, 0.063), rgba(241, 110, 53, 0.114));
  border-bottom-color: rgba(241, 110, 53, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(241, 110, 53, 0.24);
  border-right-color: rgba(241, 110, 53, 0.24);
  border-top-color: rgba(241, 110, 53, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(158, 158, 158, 0.063), rgba(158, 158, 158, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(158, 158, 158, 0.063), rgba(158, 158, 158, 0.114));
  border-bottom-color: rgba(158, 158, 158, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(158, 158, 158, 0.24);
  border-right-color: rgba(158, 158, 158, 0.24);
  border-top-color: rgba(158, 158, 158, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.465 0.0105 281);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 187, 93;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(0, 187, 93, 0.063), rgba(0, 187, 93, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(0, 187, 93, 0.063), rgba(0, 187, 93, 0.114));
  border-bottom-color: rgba(0, 187, 93, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 187, 93, 0.24);
  border-right-color: rgba(0, 187, 93, 0.24);
  border-top-color: rgba(0, 187, 93, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 9, 186, 221;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(9, 186, 221, 0.063), rgba(9, 186, 221, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(9, 186, 221, 0.063), rgba(9, 186, 221, 0.114));
  border-bottom-color: rgba(9, 186, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(9, 186, 221, 0.24);
  border-right-color: rgba(9, 186, 221, 0.24);
  border-top-color: rgba(9, 186, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 31, 132, 255;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114));
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 229, 169, 37;
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(229, 169, 37, 0.063), rgba(229, 169, 37, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(229, 169, 37, 0.063), rgba(229, 169, 37, 0.114));
  border-bottom-color: rgba(229, 169, 37, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(229, 169, 37, 0.24);
  border-right-color: rgba(229, 169, 37, 0.24);
  border-top-color: rgba(229, 169, 37, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
  color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(31, 132, 255);
  font-weight: 620;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  background-color: oklch(1 0 0 / 0.625);
  border-bottom-color: oklch(0 0 0 / 0.0625);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: oklch(0 0 0 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0 / 0.0625);
  border-right-width: 0px;
  border-top-color: oklch(0 0 0 / 0.0625);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: oklch(0.995 0.00125 281 / 0.675);
  border-bottom-color: oklch(0 0 0 / 0.1125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(0 0 0 / 0.1125);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0 / 0.1125);
  border-right-width: 0px;
  border-top-color: oklch(0 0 0 / 0.1125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
  box-shadow: oklch(1 0 0 / 0.625) 1.5px 1.5px 4px 0px inset, oklch(1 0 0 / 0.625) -1.5px -1.5px 4px 0px inset, rgba(0, 0, 0, 0.08) 0px 1.25px 6.25px 0px, rgba(0, 0, 0, 0.06) 0px 3px 12px 0px, rgba(0, 0, 0, 0.12) 0px 16px 32px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.3 0.0005 281) none 0px;
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: oklch(0 0 0 / 0.0625);
  color: oklch(0.3 0.0005 281);
  font-weight: 420;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0 0 0 / 0.1125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(0 0 0 / 0.1125);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0 / 0.1125);
  border-right-width: 0px;
  border-top-color: oklch(0 0 0 / 0.1125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: oklch(0 0 0 / 0.0625);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: oklch(0 0 0 / 0.0625);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(10, 124, 255, 0.1);
  border-bottom-color: rgba(10, 124, 255, 0.15);
  border-left-color: rgba(10, 124, 255, 0.15);
  border-right-color: rgba(10, 124, 255, 0.15);
  border-top-color: rgba(10, 124, 255, 0.15);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(10, 124, 255);
}

html[saved-theme="light"] body h1 {
  color: oklch(0.24 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: oklch(0.24 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: oklch(0.4 0.0025 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0 0 0 / 0.0625);
  border-left-color: oklch(0 0 0 / 0.0625);
  border-right-color: oklch(0 0 0 / 0.0625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 31, 132, 255;
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(10, 124, 255);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(10, 124, 255);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: oklch(0 0 0 / 0.092);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 490;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.5575 0.0105 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.5575 0.0105 281);
  border-right-color: oklch(0.5575 0.0105 281);
  border-top-color: oklch(0.5575 0.0105 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.5575 0.0105 281);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0 0 0 / 0.0625);
  border-bottom-left-radius: 18px;
  border-left-color: oklch(0 0 0 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0 / 0.0625);
  border-top-color: oklch(0 0 0 / 0.0625);
  border-top-left-radius: 18px;
  border-top-width: 0px;
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(0.465 0.0105 281);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.465 0.0105 281);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.465 0.0105 281);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: oklch(0.4 0.0025 281);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left-color: oklch(0.4 0.0025 281);
  border-right-color: oklch(0.4 0.0025 281);
  border-top-color: oklch(0.4 0.0025 281);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  color: oklch(0.4 0.0025 281);
}

html[saved-theme="light"] body .darkmode svg {
  color: oklch(0.4 0.0025 281);
  stroke: oklch(0.4 0.0025 281);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: oklch(0.715 0.0105 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.715 0.0105 281);
  border-right-color: oklch(0.715 0.0105 281);
  border-top-color: oklch(0.715 0.0105 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: oklch(0.715 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: oklch(0 0 0 / 0.0625);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0 0 0 / 0.0625);
  border-right-color: oklch(0 0 0 / 0.0625);
  border-top-color: oklch(0 0 0 / 0.0625);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.465 0.0105 281);
  border-left-color: oklch(0.465 0.0105 281);
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body details {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: oklch(0.5575 0.0105 281);
  border-left-color: oklch(0.5575 0.0105 281);
  border-right-color: oklch(0.5575 0.0105 281);
  border-top-color: oklch(0.5575 0.0105 281);
  color: oklch(0.5575 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: oklch(0 0 0 / 0.0625);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body progress {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body sub {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body summary {
  color: oklch(0.3 0.0005 281);
  font-weight: 420;
}

html[saved-theme="light"] body sup {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(10, 124, 255, 0.1);
  border-bottom-color: rgba(10, 124, 255, 0.15);
  border-left-color: rgba(10, 124, 255, 0.15);
  border-right-color: rgba(10, 124, 255, 0.15);
  border-top-color: rgba(10, 124, 255, 0.15);
  color: rgb(10, 124, 255);
}`,
  },
};
