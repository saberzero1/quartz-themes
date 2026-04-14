import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "velocity.jet-black-matte",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 5 !important;
  --accent-l: 45% !important;
  --accent-s: 65% !important;
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
  --background-modifier-active-hover: hsla(5, 65%, 45%, 0.1) !important;
  --background-modifier-border: oklch(100% 0 0 / 0.0625) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: oklch(36.25% 0 0) !important;
  --background-modifier-cover: oklch(10% 0 0 / 0.5) !important;
  --background-modifier-form-field: oklch(25% 0 0) !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-hover: oklch(100% 0 0 / 0.05) !important;
  --background-primary: oklch(00% 0 0) !important;
  --background-primary-alt: oklch(15% 0 0) !important;
  --background-secondary: oklch(20% 0 0) !important;
  --background-secondary-alt: oklch(30% 0 0) !important;
  --bases-cards-background: oklch(100% 0 0 / 0.05) !important;
  --bases-cards-cover-background: oklch(15% 0 0) !important;
  --bases-cards-label-color: oklch(63.75% 0 0) !important;
  --bases-cards-line-height: 26px !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: none !important;
  --bases-cards-shadow-hover: none !important;
  --bases-embed-border-color: oklch(100% 0 0 / 0.0625) !important;
  --bases-embed-border-radius: 0 !important;
  --bases-group-heading-property-color: oklch(70.00% 0 0) !important;
  --bases-group-heading-property-weight: 420 !important;
  --bases-group-heading-value-weight: 620 !important;
  --bases-header-border-width: 0 !important;
  --bases-header-padding-end: 0 !important;
  --bases-header-padding-start: 0 !important;
  --bases-table-border-color: oklch(100% 0 0 / 0.1375) !important;
  --bases-table-cell-background-active: transparent !important;
  --bases-table-cell-background-disabled: oklch(15% 0 0) !important;
  --bases-table-cell-background-selected: hsla(5, 65%, 45%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2.5px color-mix(in oklab, hsl(5, 65%, 45%) 50%, transparent 75%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(5, 65%, 45%) !important;
  --bases-table-container-border-radius: 0 !important;
  --bases-table-group-background: transparent !important;
  --bases-table-header-background: oklch(00% 0 0) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: oklch(57.50% 0 0) !important;
  --bases-table-header-color-hover: oklch(76.25% 0 0) !important;
  --bases-table-header-weight: 490 !important;
  --bases-table-row-border-width: 0 !important;
  --bases-table-row-height: 32px !important;
  --bases-table-summary-background: oklch(00% 0 0) !important;
  --bases-table-summary-background-hover: oklch(100% 0 0 / 0.05) !important;
  --bases-table-text-size: 0.90625em !important;
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0 0) 55% 60%, transparent 65%) !important;
  --bg-checkbox-active: radial-gradient(#0000000f 52%, #ffffff20 64%) !important;
  --bg-main-inner: oklch(20% 0 0) !important;
  --bg-main-outer: oklch(15% 0 0) !important;
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(20% 0 0) 0%, oklch(15% 0 0) 200%) !important;
  --bhue: 0 !important;
  --bl-00: 00% !important;
  --bl-05: 05% !important;
  --bl-10: 15% !important;
  --bl-100: 86.25% !important;
  --bl-20: 20% !important;
  --bl-25: 25% !important;
  --bl-30: 30% !important;
  --bl-35: 36.25% !important;
  --bl-40: 43.75% !important;
  --bl-50: 52.50% !important;
  --bl-55: 57.50% !important;
  --bl-60: 63.75% !important;
  --bl-70: 70.00% !important;
  --bl-80: 76.25% !important;
  --bl-90: 80.00% !important;
  --blockquote-border-color: oklch(52.50% 0 0) !important;
  --blockquote-border-thickness: 0.1875rem !important;
  --blockquote-color: oklch(70.00% 0 0) !important;
  --blur-background: color-mix(in srgb, oklch(30% 0 0) 65%, transparent) linear-gradient(oklch(30% 0 0), color-mix(in srgb, oklch(30% 0 0) 65%, transparent)) !important;
  --blur-brightness: 1 !important;
  --blur-l: blur(16px) saturate(1.125) brightness(1) !important;
  --blur-m: blur(12px) saturate(1.125) brightness(1) !important;
  --blur-radius-m: 12px !important;
  --blur-radius-s: 8px !important;
  --blur-s: blur(8px) saturate(1.125) brightness(1) !important;
  --blur-saturation: 1.125 !important;
  --bodyFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: oklch(86.25% 0 0) !important;
  --bold-modifier: 250 !important;
  --bold-weight: 670 !important;
  --bsat-low: 0 !important;
  --bsat-med: 0 !important;
  --bsat-modal: 0 !important;
  --bsat-str: 0 !important;
  --bsat-trans: 0 !important;
  --bsat-xtr: 0 !important;
  --button-radius: 8px !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 0.2375;
  --callout-bug: 250, 153, 205;
  --callout-padding: 1rem;
  --callout-quote: 150, 150, 160;
  --callout-radius: 10px;
  --callout-title-weight: 670;
  --callout-warning: 224, 222, 113;
  --canvas-background: oklch(00% 0 0) !important;
  --canvas-card-label-color: oklch(52.50% 0 0) !important;
  --canvas-color-5: 2, 122, 255 !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: oklch(30% 0 0) !important;
  --caret-color: oklch(80.00% 0 0) !important;
  --checkbox-border-color: oklch(43.75% 0 0) !important;
  --checkbox-border-color-hover: oklch(70.00% 0 0) !important;
  --checkbox-color: hsl(5, 65%, 45%) !important;
  --checkbox-color-hover: color-mix(in oklab, hsl(5, 65%, 45%) 62.5%, color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%)) !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 50% !important;
  --checkbox-size: 1.125rem !important;
  --checklist-done-color: oklch(52.50% 0 0) !important;
  --clickable-icon-radius: 8px !important;
  --code-background: oklch(100% 0 0 / 0.05) !important;
  --code-background-alt: oklch(from oklch(05% 0 0) l 0 h / 0.375) !important;
  --code-border-color: oklch(100% 0 0 / 0.0625) !important;
  --code-border-width: 0 !important;
  --code-bracket-background: oklch(100% 0 0 / 0.05) !important;
  --code-comment: oklch(52.50% 0 0) !important;
  --code-normal: oklch(80.00% 0 0) !important;
  --code-punctuation: oklch(70.00% 0 0) !important;
  --code-radius: 6px !important;
  --code-special: #fb464c !important;
  --codeFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: oklch(52.50% 0 0) !important;
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --color-accent: hsl(5, 65%, 45%) !important;
  --color-accent-1: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%), transparent 8%) !important;
  --color-accent-3: color-mix(in oklab, hsl(5, 65%, 45%) 50%, transparent 75%) !important;
  --color-accent-4: color-mix(in oklab, oklab(from hsl(5, 65%, 45%) l a b / 0.25) 30%, transparent 70%) !important;
  --color-accent-hsl: 5, 65%, 45% !important;
  --color-base-00: oklch(00% 0 0) !important;
  --color-base-05: oklch(05% 0 0) !important;
  --color-base-10: oklch(15% 0 0) !important;
  --color-base-100: oklch(86.25% 0 0) !important;
  --color-base-20: oklch(20% 0 0) !important;
  --color-base-25: oklch(25% 0 0) !important;
  --color-base-30: oklch(30% 0 0) !important;
  --color-base-35: oklch(36.25% 0 0) !important;
  --color-base-40: oklch(43.75% 0 0) !important;
  --color-base-50: oklch(52.50% 0 0) !important;
  --color-base-55: oklch(57.50% 0 0) !important;
  --color-base-60: oklch(63.75% 0 0) !important;
  --color-base-70: oklch(70.00% 0 0) !important;
  --color-base-80: oklch(76.25% 0 0) !important;
  --color-base-90: oklch(80.00% 0 0) !important;
  --color-highlight: rgb(255, 208, 0) !important;
  --color-highlight-rgb: 255, 208, 0 !important;
  --control-icon-background: oklch(100% 0 0 / 0.0625) !important;
  --control-icon-color: oklch(76.25% 0 0) !important;
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(05% 0 0) l 0 h / 0.375) !important;
  --corner-smoothing: 60% !important;
  --dark: oklch(80.00% 0 0) !important;
  --darkgray: oklch(80.00% 0 0) !important;
  --dialog-width: 500px !important;
  --divider-color: oklch(100% 0 0 / 0.0625) !important;
  --divider-color-hover: color-mix(in oklab, hsl(5, 65%, 45%) 50%, transparent 75%) !important;
  --divider-width: 0 !important;
  --drag-ghost-background: oklch(00% 0 0) !important;
  --drag-ghost-text-color: oklch(80.00% 0 0) !important;
  --dropdown-background: oklch(30% 0 0) !important;
  --dropdown-background-hover: oklch(36.25% 0 0) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: none !important;
  --embed-padding: 0 1.25em 0 0 !important;
  --fab-bg: oklch(00% 0 0) !important;
  --fab-color: oklch(63.75% 0 0) !important;
  --fab-color-active: oklch(80.00% 0 0) !important;
  --fab-easing-curve: cubic-bezier(0.55, 2, 0.5, 0.97) !important;
  --file-header-background: oklch(00% 0 0) !important;
  --file-header-background-focused: oklch(00% 0 0) !important;
  --file-header-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-weight: 490 !important;
  --file-line-width: 43.75rem !important;
  --file-margins: 28px 5% !important;
  --file-margins-x: 5% !important;
  --file-margins-y: 28px !important;
  --flair-background: oklch(30% 0 0) !important;
  --flair-color: oklch(80.00% 0 0) !important;
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
  --footnote-divider-color: oklch(100% 0 0 / 0.0625) !important;
  --footnote-id-color: oklch(70.00% 0 0) !important;
  --footnote-id-color-no-occurrences: oklch(52.50% 0 0) !important;
  --footnote-input-background-active: oklch(100% 0 0 / 0.05) !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 8px !important;
  --frame-right-space: 160px !important;
  --frame-right-space-override: 164px !important;
  --glass-base: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025) !important;
  --glass-base-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015) !important;
  --glass-base-m: inset 1px 1.75px 2.25px -1.125px rgba(255, 255, 255, 0.15), inset -1px -1.75px 2.25px -1.125px rgba(255, 255, 255, 0.1), inset 0 8px 16px rgba(255, 255, 255, 0.015) !important;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.5) !important;
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from #fb464c calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from #fb464c calc(l + 0.075) a b / 0.5) !important;
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.5) !important;
  --graph-controls-width: 232px !important;
  --graph-line: oklch(36.25% 0 0) !important;
  --graph-node: oklch(70.00% 0 0) !important;
  --graph-node-focused: transparent !important;
  --graph-node-unresolved: oklch(52.50% 0 0) !important;
  --graph-text: oklch(80.00% 0 0) !important;
  --gray: oklch(70.00% 0 0) !important;
  --h1-color: oklch(82.5% 0 0) !important;
  --h1-size: 2em !important;
  --h1-size-alt: 1.625em !important;
  --h1-weight: 330 !important;
  --h1-weight-alt: 570 !important;
  --h2-color: oklch(81.25% 0 0) !important;
  --h2-size: 1.5em !important;
  --h2-weight: 570 !important;
  --h3-color: oklch(80.00% 0 0) !important;
  --h3-size: 1.375em !important;
  --h3-weight: 570 !important;
  --h4-color: oklch(80.00% 0 0) !important;
  --h4-size: 1.25em !important;
  --h4-weight: 570 !important;
  --h5-color: oklch(80.00% 0 0) !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.125em !important;
  --h6-color: oklch(76.25% 0 0) !important;
  --h6-line-height: 1.6 !important;
  --h6-weight: 670 !important;
  --header-height: 56px !important;
  --headerFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: oklch(52.50% 0 0) !important;
  --highlight: oklch(from rgb(255, 208, 0) 0.8 calc(c * 1.375) h / 0.33) !important;
  --highlight-blue-rgb: 2, 122, 255 !important;
  --highlight-cyan-rgb: 83, 223, 221 !important;
  --highlight-green-rgb: 68, 207, 110 !important;
  --highlight-orange-rgb: 233, 151, 63 !important;
  --highlight-pink-rgb: 250, 153, 205 !important;
  --highlight-purple-rgb: 168, 130, 255 !important;
  --highlight-red-rgb: 251, 70, 76 !important;
  --highlight-yellow-rgb: 255, 208, 0 !important;
  --hotkey-gradient: linear-gradient(to top, hsl(5, 65%, 45%) -10%, color-mix(in oklab, oklab(from hsl(5, 65%, 45%) l a b / 0.25) 30%, transparent 70%) 210%) !important;
  --hr-color: oklch(100% 0 0 / 0.1375) !important;
  --icon-color: oklch(63.75% 0 0) !important;
  --icon-color-active: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --icon-color-focused: oklch(80.00% 0 0) !important;
  --icon-color-hover: oklch(80.00% 0 0) !important;
  --icon-m-stroke-width: 1.875px !important;
  --icon-stroke: 1.875px !important;
  --icon-stroke-thick: 2.25px !important;
  --icon-xl: 28px !important;
  --icon-xs-stroke-width: 2.125px !important;
  --indent-unit: 0.375em !important;
  --indentation-guide-color: oklch(100% 0 0 / 0.1375) !important;
  --indentation-guide-width: 0 !important;
  --indentation-guide-width-active: 0 !important;
  --inline-title-color: oklch(82.5% 0 0) !important;
  --inline-title-margin-bottom: round(nearest, clamp(0px, 0.5em, 1.5rem), 2px) !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 330 !important;
  --input-border-width: 0 !important;
  --input-date-separator: oklch(52.50% 0 0) !important;
  --input-font-weight: 420 !important;
  --input-height: 28px !important;
  --input-placeholder-color: oklch(52.50% 0 0) !important;
  --input-radius: 8px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(5, 65%, 45%) !important;
  --interactive-accent-hover: color-mix(in oklab, hsl(5, 65%, 45%) 62.5%, color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%)) !important;
  --interactive-accent-hsl: 5, 65%, 45% !important;
  --interactive-hover: oklch(36.25% 0 0) !important;
  --interactive-normal: oklch(30% 0 0) !important;
  --light: oklch(00% 0 0) !important;
  --lightgray: oklch(20% 0 0) !important;
  --line-height-normal: 1.6 !important;
  --link-color: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%), transparent 8%) !important;
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%), transparent 8%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%), transparent 8%) !important;
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) l c h / 0.75) !important;
  --link-unresolved-decoration-color: hsla(5, 65%, 45%, 0.3) !important;
  --link-unresolved-lch: 0.75 !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 420 !important;
  --list-bullet-color: oklch(76.25% 0 0) !important;
  --list-dash-color: oklch(100% 0 0 / 0.35) !important;
  --list-indent: 1.5em !important;
  --list-marker-color: oklch(52.50% 0 0) !important;
  --list-marker-color-collapsed: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --list-marker-color-hover: oklch(70.00% 0 0) !important;
  --list-spacing: 0.125em !important;
  --math-color: oklch(86.25% 0 0) !important;
  --menu-background: oklch(15% 0 0) !important;
  --menu-border-color: oklch(100% 0 0 / 0.125) !important;
  --menu-radius: 14px !important;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --metadata-border-color: oklch(100% 0 0 / 0.0625) !important;
  --metadata-border-radius: 12px !important;
  --metadata-divider-color: oklch(100% 0 0 / 0.0625) !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: oklch(100% 0 0 / 0.05) !important;
  --metadata-input-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 2.125rem !important;
  --metadata-input-longtext-lines: 5 !important;
  --metadata-input-padding: 6px 8px !important;
  --metadata-input-text-color: oklch(80.00% 0 0) !important;
  --metadata-label-background-active: oklch(100% 0 0 / 0.05) !important;
  --metadata-label-font: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-weight: 490 !important;
  --metadata-label-text-color: oklch(63.75% 0 0) !important;
  --metadata-label-text-color-hover: oklch(63.75% 0 0) !important;
  --metadata-label-width: 10em !important;
  --metadata-property-background-active: oklch(100% 0 0 / 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2.5px color-mix(in oklab, hsl(5, 65%, 45%) 50%, transparent 75%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2.5px oklch(100% 0 0 / 0.05) !important;
  --mobile-nav-fade-bg: linear-gradient(oklch(from oklch(20% 0 0) l c h), transparent 78px) !important;
  --modal-background: oklch(21.25% 0 0 / 0.675) !important;
  --modal-border-color: oklch(43.75% 0 0) !important;
  --modal-border-width: 0 !important;
  --modal-community-header-bg: oklch(from oklch(20% 0 0) l 0 h / 0.5) !important;
  --modal-community-item-bg: oklch(from oklch(30% 0 0) l 0 h / 0.5) !important;
  --modal-radius: 22px !important;
  --modal-small-background: oklch(21.25% 0 0 / 0.675) !important;
  --nav-collapse-icon-color: oklch(100% 0 0 / 0.35) !important;
  --nav-collapse-icon-color-collapsed: oklch(52.50% 0 0) !important;
  --nav-folder-color: oklch(76.25% 0 0) !important;
  --nav-header-bg: oklch(100% 0 0 / 0.0625) !important;
  --nav-header-timing: cubic-bezier(0.3, 0.75, 0, 1) !important;
  --nav-heading-color: oklch(76.25% 0 0) !important;
  --nav-heading-color-collapsed: oklch(52.50% 0 0) !important;
  --nav-heading-color-collapsed-hover: oklch(70.00% 0 0) !important;
  --nav-heading-color-hover: oklch(80.00% 0 0) !important;
  --nav-heading-weight: 520 !important;
  --nav-heading-weight-hover: 520 !important;
  --nav-indentation-guide-color: oklch(100% 0 0 / 0.1375) !important;
  --nav-indentation-guide-width: 0 !important;
  --nav-item-background-active: oklch(100% 0 0 / 0.05) !important;
  --nav-item-background-hover: oklch(100% 0 0 / 0.05) !important;
  --nav-item-background-selected: hsla(5, 65%, 45%, 0.15) !important;
  --nav-item-color: oklch(70.00% 0 0) !important;
  --nav-item-color-active: oklch(80.00% 0 0) !important;
  --nav-item-color-highlighted: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --nav-item-color-hover: oklch(80.00% 0 0) !important;
  --nav-item-color-selected: oklch(80.00% 0 0) !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: oklch(52.50% 0 0) !important;
  --nav-tag-color-active: oklch(70.00% 0 0) !important;
  --nav-tag-color-hover: oklch(70.00% 0 0) !important;
  --nav-tag-radius: 8px !important;
  --nav-tag-weight: 620 !important;
  --nav-text-color: oklch(80.00% 0 0) !important;
  --paint-description: "A zero-frills, borderline spartan paint scheme. Its pitch black high contrast is perfectly suited for power users, as well as OLED screens." !important;
  --paint-image: url(data:image/webpbase64,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) !important;
  --pdf-background: oklch(00% 0 0) !important;
  --pdf-page-background: oklch(00% 0 0) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: oklch(00% 0 0) !important;
  --pdf-spread-shadow: none !important;
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0 0 / 0.0625) !important;
  --pill-background: oklch(100% 0 0 / 0.08125) !important;
  --pill-background-hover: oklch(100% 0 0 / 0.08125) !important;
  --pill-border-color: oklch(100% 0 0 / 0.0625) !important;
  --pill-border-color-hover: oklch(36.25% 0 0) !important;
  --pill-color: oklch(70.00% 0 0) !important;
  --pill-color-hover: oklch(70.00% 0 0) !important;
  --pill-color-remove: oklch(52.50% 0 0) !important;
  --pill-color-remove-hover: white !important;
  --pill-radius: 18px !important;
  --pill-weight: 490 !important;
  --prompt-backdrop-filter: blur(12px) saturate(1.125) brightness(1) !important;
  --prompt-background: oklch(21.25% 0 0 / 0.675) !important;
  --prompt-border-color: oklch(100% 0 0 / 0.125) !important;
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
  --raised-background: color-mix(in srgb, oklch(30% 0 0) 65%, transparent) linear-gradient(oklch(30% 0 0), color-mix(in srgb, oklch(30% 0 0) 65%, transparent)) !important;
  --raised-blur: blur(8px) saturate(1.125) brightness(1) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-padding: 8px 0px 12px 8px !important;
  --ribbon-width: 56px !important;
  --scrollbar-active-thumb-bg: oklch(36.25% 0 0) !important;
  --scrollbar-radius: 18px !important;
  --scrollbar-thumb-bg: oklch(25% 0 0) !important;
  --search-clear-button-color: oklch(52.50% 0 0) !important;
  --search-icon-color: oklch(52.50% 0 0) !important;
  --search-icon-size: 17px !important;
  --search-result-background: oklch(from oklch(05% 0 0) l 0 h / 0.375) !important;
  --secondary: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --setting-group-heading-color: oklch(63.75% 0 0) !important;
  --setting-group-heading-size: 18px !important;
  --setting-group-heading-weight: 520 !important;
  --setting-item-background: color-mix(in oklab, oklch(00% 0 0) 87.5%, oklch(20% 0 0)) !important;
  --setting-items-background: oklch(00% 0 0) !important;
  --setting-items-border-color: oklch(100% 0 0 / 0.0625) !important;
  --setting-items-padding: 16px !important;
  --setting-items-radius: 16px !important;
  --settings-background: oklch(20% 0 0) !important;
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(00% 0 0) l 0 h / 0.75) !important;
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from #fb464c calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from #fb464c calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(00% 0 0) l 0 h / 0.75) !important;
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-fab: 0 0 0 0.5px oklch(100% 0 0 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(00% 0 0) l 0 h / 0.75) !important;
  --shadow-input: 0 0 0 0.5px oklch(100% 0 0 / 0.125) !important;
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(5, 65%, 45%) 50%, transparent 75%) !important;
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375) !important;
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(05% 0 0) l 0 h / 0.375) !important;
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(05% 0 0) l 0 h / 0.375), 0px 1px 9px oklch(100% 0 0 / 0.025) !important;
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(20% 0 0) l 0 h / 0.5) !important;
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375) !important;
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875) !important;
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025) !important;
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(5, 65%, 45%) calc(l + 0.075) a b / 0.5) !important;
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0 0 / 0.1375), 0 0 20px oklch(from oklch(00% 0 0) l 0 h / 0.75) !important;
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0 0 / 0.1375) !important;
  --sidebar-left-toggle-inner-width: 12% !important;
  --sidebar-right-toggle-inner-width: 12% !important;
  --slider-thumb-border-color: oklch(36.25% 0 0) !important;
  --slider-thumb-border-width: 0 !important;
  --slider-thumb-height: 12px !important;
  --slider-thumb-radius: 12px !important;
  --slider-thumb-width: 12px !important;
  --slider-thumb-y: -3px !important;
  --slider-track-background: oklch(100% 0 0 / 0.125) !important;
  --slider-track-height: 20px !important;
  --stacked-shadow-color: oklch(0 0 0 / 0.1875) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: oklch(100% 0 0 / 0.0625) !important;
  --status-bar-border-width: 0 !important;
  --status-bar-radius: 18px 0 0 18px !important;
  --status-bar-text-color: oklch(70.00% 0 0) !important;
  --strikethrough-color: oklch(52.50% 0 0) !important;
  --suggestion-background: oklch(00% 0 0) !important;
  --tab-background-active: oklch(00% 0 0) !important;
  --tab-close-bg: oklch(38.25% 0 0 / 0.875) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: oklch(36.25% 0 0) !important;
  --tab-font-weight: 420 !important;
  --tab-max-width: 240px !important;
  --tab-outline-color: oklch(100% 0 0 / 0.0625) !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 8px !important;
  --tab-right-fade: linear-gradient(to left, oklch(25% 0 0) 80%, transparent) !important;
  --tab-right-fade-alt: linear-gradient(to left, oklch(20% 0 0) 80%, transparent) !important;
  --tab-sidebar-bg: oklch(100% 0 0 / 0.0625) !important;
  --tab-sidebar-container-bg: oklch(100% 0 0 / 0.025) !important;
  --tab-stacked-font-weight: 520 !important;
  --tab-stacked-header-width: 56px !important;
  --tab-stacked-pane-width: 43.75rem !important;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875) !important;
  --tab-switcher-background: oklch(20% 0 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(20% 0 0), transparent) !important;
  --tab-switcher-preview-radius: 20px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(5, 65%, 45%) !important;
  --tab-text-color: oklch(63.75% 0 0) !important;
  --tab-text-color-active: oklch(86.25% 0 0) !important;
  --tab-text-color-focused: oklch(63.75% 0 0) !important;
  --tab-text-color-focused-active: oklch(86.25% 0 0) !important;
  --tab-text-color-focused-active-current: oklch(86.25% 0 0) !important;
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --tab-width: 240px !important;
  --table-add-button-border-color: oklch(100% 0 0 / 0.0625) !important;
  --table-border-color: oklch(100% 0 0 / 0.1375) !important;
  --table-drag-handle-background-active: hsl(5, 65%, 45%) !important;
  --table-drag-handle-color: oklch(52.50% 0 0) !important;
  --table-header-border-color: oklch(100% 0 0 / 0.1375) !important;
  --table-header-color: oklch(63.75% 0 0) !important;
  --table-header-size: 0.90625em !important;
  --table-header-weight: 520 !important;
  --table-line-height: 1.6 !important;
  --table-row-alt-background: oklch(100% 0 0 / 0.05) !important;
  --table-row-alt-background-hover: oklch(100% 0 0 / 0.05) !important;
  --table-row-bg: oklch(100% 0 0 / 0.05) !important;
  --table-selection: hsla(5, 65%, 45%, 0.1) !important;
  --table-selection-border-color: hsl(5, 65%, 45%) !important;
  --table-text-size: 0.90625em !important;
  --table-text-weight: 420 !important;
  --tag-background: hsla(5, 65%, 45%, 0.1) !important;
  --tag-background-hover: hsla(5, 65%, 45%, 0.2) !important;
  --tag-border-color: oklch(from hsl(5, 65%, 45%) l c h / 0.025) !important;
  --tag-border-color-hover: hsla(5, 65%, 45%, 0.15) !important;
  --tag-color: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --tag-color-hover: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --tag-padding-x: 0.6875em !important;
  --tag-padding-y: 0.3125em !important;
  --tag-size: 0.8em !important;
  --tag-weight: 490 !important;
  --tertiary: color-mix(in oklab, color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%), transparent 8%) !important;
  --text-accent: color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%) !important;
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(5, 65%, 45%) 64%, #fff 36%), transparent 8%) !important;
  --text-faint: oklch(52.50% 0 0) !important;
  --text-highlight-bg: oklch(from rgb(255, 208, 0) 0.8 calc(c * 1.375) h / 0.33) !important;
  --text-highlight-bg-search: oklch(from rgb(255, 208, 0) 0.875 calc(c * 1.375) h / 0.625) !important;
  --text-muted: oklch(70.00% 0 0) !important;
  --text-normal: oklch(80.00% 0 0) !important;
  --text-selection: oklab(from hsl(5, 65%, 45%) l a b / 0.25) !important;
  --textHighlight: oklch(from rgb(255, 208, 0) 0.8 calc(c * 1.375) h / 0.33) !important;
  --titleFont: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: oklch(100% 0 0 / 0.0625) !important;
  --titlebar-height: 36px !important;
  --titlebar-text-color: oklch(100% 0 0 / 0.35) !important;
  --titlebar-text-color-focused: oklch(70.00% 0 0) !important;
  --titlebar-text-weight: 620 !important;
  --toggle-border-width: 4px !important;
  --toggle-gradient: linear-gradient(to bottom, hsl(5, 65%, 45%) -30%, color-mix(in oklab, oklab(from hsl(5, 65%, 45%) l a b / 0.25) 30%, transparent 70%) 180%) !important;
  --toggle-s-border-width: 4px !important;
  --toggle-s-thumb-height: 12px !important;
  --toggle-s-thumb-width: 12px !important;
  --toggle-s-width: 36px !important;
  --toggle-thumb-height: 12px !important;
  --toggle-thumb-width: 12px !important;
  --toggle-track-bg: oklch(100% 0 0 / 0.2) !important;
  --toggle-width: 44px !important;
  --traffic-lights-offset-x: 56px !important;
  --traffic-lights-offset-y: 56px !important;
  --trans-black-00: oklch(0 0 0 / 0.375) !important;
  --trans-black-10: oklch(0 0 0 / 0.1875) !important;
  --trans-faint-00: oklch(100% 0 0 / 0.015) !important;
  --trans-faint-05: oklch(100% 0 0 / 0.025) !important;
  --trans-faint-10: oklch(100% 0 0 / 0.05) !important;
  --trans-faint-20: oklch(100% 0 0 / 0.0625) !important;
  --trans-faint-25: oklch(100% 0 0 / 0.08125) !important;
  --trans-faint-30: oklch(100% 0 0 / 0.1375) !important;
  --trans-faint-40: oklch(100% 0 0 / 0.125) !important;
  --trans-faint-50: oklch(100% 0 0 / 0.2) !important;
  --trans-faint-60: oklch(100% 0 0 / 0.35) !important;
  --trans-strong-00: oklch(from oklch(00% 0 0) l 0 h / 0.75) !important;
  --trans-strong-05: oklch(from oklch(00% 0 0) l 0 h / 0.625) !important;
  --trans-strong-10: oklch(from oklch(05% 0 0) l 0 h / 0.375) !important;
  --trans-strong-20: oklch(from oklch(20% 0 0) l 0 h / 0.5) !important;
  --trans-strong-30: oklch(from oklch(30% 0 0) l 0 h / 0.5) !important;
  --trans-strong-40: oklch(from oklch(30% 0 0) l 0 h / 0.5) !important;
  --trans-white-00: oklch(86.25% 0 0 / 0.75) !important;
  --trans-white-10: oklch(86.25% 0 0 / 0.625) !important;
  --vault-profile-color: oklch(63.75% 0 0) !important;
  --vault-profile-color-hover: oklch(70.00% 0 0) !important;
  --vault-profile-font-size: 18px !important;
  --vault-profile-font-weight: 420 !important;
  --vl-ease-out: cubic-bezier(0.3, 0.75, 0, 1) !important;
  --vl-layout-padding: 8px !important;
  --warning-gradient: linear-gradient(to top, #fb464c -30%, oklch(from oklch(20% 0 0) l 0 h / 0.5) 180%) !important;
  --workspace-border-color: oklch(100% 0 0 / 0.08125) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: oklch(1 0 0 / 0.05);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.6375 0 0) oklch(0.6375 0 0) oklch(1 0 0 / 0.1375);
  color: oklch(0.6375 0 0);
  font-weight: 520;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: oklch(0.2 0 0 / 0.5);
  border-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .note-properties {
  border-color: oklch(1 0 0 / 0.0625);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.7 0 0);
  font-weight: 420;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.7 0 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(189, 53, 40, 0.1);
  color: oklab(0.701721 0.0979667 0.0550956);
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.7 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(1 0 0 / 0.0625);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: oklch(1 0 0 / 0.0625);
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: oklch(0 0 0);
  color: oklch(0.8 0 0);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: oklch(0.8625 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 670;
  outline: oklch(0.8625 0 0) none 0px;
  text-decoration-color: oklch(0.8625 0 0);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.8 0 0) none 0px;
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.8 0 0) none 0px;
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: oklch(0.8625 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 670;
  outline: oklch(0.8625 0 0) none 0px;
  text-decoration-color: oklch(0.8625 0 0);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: oklch(0.8 0.245603 92.2128 / 0.33);
  color: oklch(0.8625 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.8625 0 0) none 0px;
  text-decoration-color: oklch(0.8625 0 0);
}

html[saved-theme="dark"] body del {
  color: oklch(0.525 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.525 0 0) none 0px;
  text-decoration-color: oklch(0.525 0 0);
}

html[saved-theme="dark"] body h1.article-title {
  color: oklch(0.8 0 0);
  font-weight: 490;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 50%;
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(189, 53, 40);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: oklch(0.7 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.7 0 0) none 0px;
  text-decoration-color: oklch(0.7 0 0);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: oklab(0.701721 0.0979667 0.0550956);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklab(0.701721 0.0979667 0.0550956) none 0px;
  text-decoration-color: oklab(0.701721 0.0979667 0.0550956);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: oklab(0.701721 0.0979667 0.0550956);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklab(0.701721 0.0979667 0.0550956) none 0px;
  text-decoration-color: oklab(0.701721 0.0979667 0.0550956);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.701721 0.112397 29.353 / 0.75);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.701721 0.112397 29.353 / 0.75) none 0px;
  text-decoration: rgba(189, 53, 40, 0.3);
  text-decoration-color: rgba(189, 53, 40, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body dt {
  color: oklch(0.8 0 0);
  font-weight: 420;
}

html[saved-theme="dark"] body ol > li {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body ul > li {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: oklch(0.525 0 0);
}

html[saved-theme="dark"] body blockquote {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body table {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 18px;
  width: 700px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: oklch(1 0 0 / 0.05);
}

html[saved-theme="dark"] body td {
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-width: 0px;
  border-left-color: oklch(0.8 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.8 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.8 0 0);
  border-top-width: 0px;
  color: oklch(0.8 0 0);
  font-weight: 420;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(1 0 0 / 0.1375);
  border-bottom-width: 2px;
  border-left-color: oklch(0.6375 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.6375 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.6375 0 0);
  border-top-width: 0px;
  color: oklch(0.6375 0 0);
  font-weight: 520;
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(1 0 0 / 0.05);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(1 0 0 / 0.05);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: oklch(1 0 0 / 0.05);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: oklch(1 0 0 / 0.05);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figcaption {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.825 0 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.825 0 0);
  border-radius: 10px;
  border-right-color: oklch(0.825 0 0);
  border-top-color: oklch(0.825 0 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.8 0 0);
  border-radius: 10px;
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: oklch(0.15 0 0);
  border-bottom-color: oklch(0.7 0 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.7 0 0);
  border-right-color: oklch(0.7 0 0);
  border-top-color: oklch(0.7 0 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(0.8 0 0);
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
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
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: oklch(0.525 0 0);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: oklch(0.525 0 0);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: oklch(0.8 0 0);
  text-decoration-color: oklch(0.8 0 0);
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

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 620;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(83, 223, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(83, 223, 221, 0.24);
  border-right-color: rgba(83, 223, 221, 0.24);
  border-top-color: rgba(83, 223, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 250, 153, 205;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(250, 153, 205, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(250, 153, 205, 0.24);
  border-right-color: rgba(250, 153, 205, 0.24);
  border-top-color: rgba(250, 153, 205, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(251, 70, 76, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(251, 70, 76, 0.24);
  border-right-color: rgba(251, 70, 76, 0.24);
  border-top-color: rgba(251, 70, 76, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(168, 130, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(168, 130, 255, 0.24);
  border-right-color: rgba(168, 130, 255, 0.24);
  border-top-color: rgba(168, 130, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(251, 70, 76, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(251, 70, 76, 0.24);
  border-right-color: rgba(251, 70, 76, 0.24);
  border-top-color: rgba(251, 70, 76, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(2, 122, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(2, 122, 255, 0.24);
  border-right-color: rgba(2, 122, 255, 0.24);
  border-top-color: rgba(2, 122, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(2, 122, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(2, 122, 255, 0.24);
  border-right-color: rgba(2, 122, 255, 0.24);
  border-top-color: rgba(2, 122, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(233, 151, 63, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(233, 151, 63, 0.24);
  border-right-color: rgba(233, 151, 63, 0.24);
  border-top-color: rgba(233, 151, 63, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 150, 150, 160;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(150, 150, 160, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(150, 150, 160, 0.24);
  border-right-color: rgba(150, 150, 160, 0.24);
  border-top-color: rgba(150, 150, 160, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(68, 207, 110, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(68, 207, 110, 0.24);
  border-right-color: rgba(68, 207, 110, 0.24);
  border-top-color: rgba(68, 207, 110, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(83, 223, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(83, 223, 221, 0.24);
  border-right-color: rgba(83, 223, 221, 0.24);
  border-top-color: rgba(83, 223, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(2, 122, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(2, 122, 255, 0.24);
  border-right-color: rgba(2, 122, 255, 0.24);
  border-top-color: rgba(2, 122, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(224, 222, 113, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(224, 222, 113, 0.24);
  border-right-color: rgba(224, 222, 113, 0.24);
  border-top-color: rgba(224, 222, 113, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  background-color: oklch(0.05 0 0 / 0.375);
  border-bottom-color: oklch(1 0 0 / 0.0625);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0 0 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0 0 / 0.0625);
  border-right-width: 0px;
  border-top-color: oklch(1 0 0 / 0.0625);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: oklch(0.2125 0 0 / 0.675);
  border-bottom-color: oklch(1 0 0 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0 0 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0 0 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0 0 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
  box-shadow: rgba(255, 255, 255, 0.19) 1.125px 1.875px 2.5px -1.25px inset, rgba(255, 255, 255, 0.137) -1.125px -1.875px 2.5px -1.25px inset, rgba(255, 255, 255, 0.016) 0px 8px 16px 0px inset, oklch(0 0 0 / 0.375) 0px 0px 24px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.8 0 0) none 0px;
  text-decoration-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: oklch(1 0 0 / 0.05);
  color: oklch(0.8 0 0);
  font-weight: 420;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(1 0 0 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0 0 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0 0 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0 0 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: oklch(1 0 0 / 0.05);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: oklch(1 0 0 / 0.05);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(189, 53, 40, 0.1);
  border-bottom-color: oklch(0.533942 0.175592 29.3539 / 0.025);
  border-left-color: oklch(0.533942 0.175592 29.3539 / 0.025);
  border-right-color: oklch(0.533942 0.175592 29.3539 / 0.025);
  border-top-color: oklch(0.533942 0.175592 29.3539 / 0.025);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: oklab(0.701721 0.0979667 0.0550956);
}

html[saved-theme="dark"] body h1 {
  color: oklch(0.825 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: oklch(0.8125 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: oklch(0.825 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: oklch(0.7625 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(1 0 0 / 0.0625);
  border-left-color: oklch(1 0 0 / 0.0625);
  border-right-color: oklch(1 0 0 / 0.0625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(2, 122, 255, 0.24);
  border-right-color: rgba(2, 122, 255, 0.24);
  border-top-color: rgba(2, 122, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: oklch(0 0 0) radial-gradient(oklch(0.2 0 0) 0%, oklch(0.15 0 0) 200%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: oklch(0 0 0) radial-gradient(oklch(0.2 0 0) 0%, oklch(0.15 0 0) 200%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: oklch(0 0 0) radial-gradient(oklch(0.2 0 0) 0%, oklch(0.15 0 0) 200%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0 0 0) radial-gradient(oklch(0.2 0 0) 0%, oklch(0.15 0 0) 200%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0 0 0) radial-gradient(oklch(0.2 0 0) 0%, oklch(0.15 0 0) 200%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: oklch(0 0 0) radial-gradient(oklch(0.2 0 0) 0%, oklch(0.15 0 0) 200%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0 0 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklab(0.701721 0.0979667 0.0550956);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklab(0.701721 0.0979667 0.0550956);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: oklch(1 0 0 / 0.1375);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 490;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.6375 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.6375 0 0);
  border-right-color: oklch(0.6375 0 0);
  border-top-color: oklch(0.6375 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.6375 0 0);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(1 0 0 / 0.0625);
  border-bottom-left-radius: 18px;
  border-left-color: oklch(1 0 0 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0 0 / 0.0625);
  border-top-color: oklch(1 0 0 / 0.0625);
  border-top-left-radius: 18px;
  border-top-width: 0px;
  color: oklch(0.7 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.7 0 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.7 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.7 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.7 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.7 0 0);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.7625 0 0);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left-color: oklch(0.7625 0 0);
  border-right-color: oklch(0.7625 0 0);
  border-top-color: oklch(0.7625 0 0);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  color: oklch(0.7625 0 0);
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.7625 0 0);
  stroke: oklch(0.7625 0 0);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.525 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.525 0 0);
  border-right-color: oklch(0.525 0 0);
  border-top-color: oklch(0.525 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.525 0 0);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: oklch(0.525 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: oklch(1 0 0 / 0.0625);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(1 0 0 / 0.0625);
  border-right-color: oklch(1 0 0 / 0.0625);
  border-top-color: oklch(1 0 0 / 0.0625);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: oklch(0.7 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.7 0 0);
  border-left-color: oklch(0.7 0 0);
  border-right-color: oklch(0.7 0 0);
  border-top-color: oklch(0.7 0 0);
  color: oklch(0.7 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: oklch(0.8 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.6375 0 0);
  border-left-color: oklch(0.6375 0 0);
  border-right-color: oklch(0.6375 0 0);
  border-top-color: oklch(0.6375 0 0);
  color: oklch(0.6375 0 0);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: oklch(1 0 0 / 0.05);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body sub {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body summary {
  color: oklch(0.8 0 0);
  font-weight: 420;
}

html[saved-theme="dark"] body sup {
  color: oklch(0.8 0 0);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(189, 53, 40, 0.1);
  border-bottom-color: oklch(0.533942 0.175592 29.3539 / 0.025);
  border-left-color: oklch(0.533942 0.175592 29.3539 / 0.025);
  border-right-color: oklch(0.533942 0.175592 29.3539 / 0.025);
  border-top-color: oklch(0.533942 0.175592 29.3539 / 0.025);
  color: oklab(0.701721 0.0979667 0.0550956);
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

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
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
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 9, 186, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(9, 186, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(9, 186, 221, 0.24);
  border-right-color: rgba(9, 186, 221, 0.24);
  border-top-color: rgba(9, 186, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 214, 50, 202;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(214, 50, 202, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(214, 50, 202, 0.24);
  border-right-color: rgba(214, 50, 202, 0.24);
  border-top-color: rgba(214, 50, 202, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 58;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(233, 49, 58, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(233, 49, 58, 0.24);
  border-right-color: rgba(233, 49, 58, 0.24);
  border-top-color: rgba(233, 49, 58, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 124, 80, 237;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(124, 80, 237, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(124, 80, 237, 0.24);
  border-right-color: rgba(124, 80, 237, 0.24);
  border-top-color: rgba(124, 80, 237, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 58;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(233, 49, 58, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(233, 49, 58, 0.24);
  border-right-color: rgba(233, 49, 58, 0.24);
  border-top-color: rgba(233, 49, 58, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 31, 132, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 31, 132, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 241, 110, 53;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(241, 110, 53, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(241, 110, 53, 0.24);
  border-right-color: rgba(241, 110, 53, 0.24);
  border-top-color: rgba(241, 110, 53, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(158, 158, 158, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(158, 158, 158, 0.24);
  border-right-color: rgba(158, 158, 158, 0.24);
  border-top-color: rgba(158, 158, 158, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 187, 93;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 187, 93, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 187, 93, 0.24);
  border-right-color: rgba(0, 187, 93, 0.24);
  border-top-color: rgba(0, 187, 93, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 9, 186, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(9, 186, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(9, 186, 221, 0.24);
  border-right-color: rgba(9, 186, 221, 0.24);
  border-top-color: rgba(9, 186, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 31, 132, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 229, 169, 37;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(229, 169, 37, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(229, 169, 37, 0.24);
  border-right-color: rgba(229, 169, 37, 0.24);
  border-top-color: rgba(229, 169, 37, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: oklch(0.99 0.0005 281) radial-gradient(oklch(0.975 0.00125 281) 20%, oklch(0.945 0.00625 281) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.99 0.0005 281);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: oklch(0.99 0.0005 281) radial-gradient(oklch(0.975 0.00125 281) 20%, oklch(0.945 0.00625 281) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.99 0.0005 281);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: oklch(0.99 0.0005 281) radial-gradient(oklch(0.975 0.00125 281) 20%, oklch(0.945 0.00625 281) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.99 0.0005 281);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.99 0.0005 281) radial-gradient(oklch(0.975 0.00125 281) 20%, oklch(0.945 0.00625 281) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.99 0.0005 281);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.99 0.0005 281) radial-gradient(oklch(0.975 0.00125 281) 20%, oklch(0.945 0.00625 281) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.99 0.0005 281);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: oklch(0.99 0.0005 281) radial-gradient(oklch(0.975 0.00125 281) 20%, oklch(0.945 0.00625 281) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.99 0.0005 281);
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
