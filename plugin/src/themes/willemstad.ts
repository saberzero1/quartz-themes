import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "willemstad",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["crimson-pro", "dm-mono", "dm-sans", "manrope", "icons/remixicon"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --PComm001-col-today: oklch(40.14% 0.0638 202.51deg) !important;
  --PComm001-col-year: oklch(40.14% 0.0638 202.51deg) !important;
  --PComm002-sp-maxheight: 33vh !important;
  --PComm002-wp-maxheight: 33vh !important;
  --PComm007-toolbar-justification: left !important;
  --PComm007-toolbar-title-justification: 0 auto 0 0 !important;
  --account-scrollbar-border: 2px !important;
  --account-scrollbar-size: 8px !important;
  --advanced-tables-helper-size: 28px !important;
  --alh-ext-length: max(32px 32px, 50vw - 350px) !important;
  --aside-float: right !important;
  --aside-infobox-float: right !important;
  --aside-margin-left: 0.75rem !important;
  --aside-margin-right: 0 !important;
  --aside-padding: 12px !important;
  --aside-text-align: left !important;
  --aspect-ratio-bw-iframe: auto 16/9 !important;
  --background-modifier-active-hover: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 10%) !important;
  --background-modifier-border: oklch(0.3 0 0) !important;
  --background-modifier-border-focus: oklch(0.48 0 0) !important;
  --background-modifier-border-hover: oklch(0.38 0 0) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-error-hover: oklch(from #fb464c calc(l - 0.1) c calc(h + 4)) !important;
  --background-modifier-form-field: oklch(0.15 0 0) !important;
  --background-modifier-form-field-hover: oklch(0.15 0 0) !important;
  --background-modifier-message: rgb(0 0 0 / 80%) !important;
  --background-primary: oklch(0.13 0 0) !important;
  --background-primary-alt: oklch(0.17 0 0) !important;
  --background-secondary: oklch(0.19 0 0) !important;
  --background-secondary-alt: oklch(0.21 0 0) !important;
  --bases-cards-background: oklch(0.13 0 0) !important;
  --bases-cards-cover-background: oklch(0.17 0 0) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px oklch(0.3 0 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(0.38 0 0) !important;
  --bases-embed-border-color: oklch(0.3 0 0) !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: oklch(0.68 0 0) !important;
  --bases-table-border-color: oklch(0.3 0 0) !important;
  --bases-table-cell-background-active: oklch(0.13 0 0) !important;
  --bases-table-cell-background-disabled: oklch(0.17 0 0) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(0.48 0 0) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px oklch(40.14% 0.0638 202.51deg) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: oklch(0.17 0 0) !important;
  --bases-table-header-background: oklch(0.13 0 0) !important;
  --bases-table-header-color: oklch(0.68 0 0) !important;
  --bases-table-summary-background: oklch(0.13 0 0) !important;
  --blockquote-background-color: oklch(0.17 0 0) !important;
  --blockquote-border-color: oklch(0.21 0 0) !important;
  --blockquote-border-thickness: 4px !important;
  --blur-0: blur(0.5px) !important;
  --blur-1: blur(1px) !important;
  --blur-2: blur(2px) !important;
  --blur-4: blur(4px) !important;
  --blur-8: blur(8px) !important;
  --blur-background: color-mix(in srgb, oklch(0.19 0 0) 65%, transparent) linear-gradient(oklch(0.19 0 0), color-mix(in srgb, oklch(0.19 0 0) 65%, transparent)) !important;
  --bodyFont: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --border-scrollbar-non-native: 2px !important;
  --brightness-25: brightness(25%) !important;
  --brightness-50: brightness(50%) !important;
  --brightness-75: brightness(75%) !important;
  --button-radius: 3px !important;
  --callout-blend-mode: normal;
  --callout-border-base-width: 0px;
  --callout-border-left-extra: 5px;
  --callout-border-left-width: 5px;
  --callout-border-other-width: 0px;
  --callout-columns-margin-top: 0.75em;
  --callout-gap: 0.5em;
  --callout-radius: 3px;
  --callout-title-gap: 0.75em;
  --canvas-background: oklch(0.13 0 0) !important;
  --canvas-card-label-color: oklch(0.48 0 0) !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: oklch(0.24 0 0) !important;
  --canvas-dot-size: 0.7 !important;
  --canvas-group-font-size: 1.5em !important;
  --canvas-node-font-size: 1em !important;
  --caret-color: oklch(0.98 0 0) !important;
  --ch-color-base-d-c-00: 0 !important;
  --ch-color-base-d-c-00-set: 0 !important;
  --ch-color-base-d-c-05: 0 !important;
  --ch-color-base-d-c-05-set: 0 !important;
  --ch-color-base-d-c-10: 0 !important;
  --ch-color-base-d-c-10-set: 0 !important;
  --ch-color-base-d-c-100: 0 !important;
  --ch-color-base-d-c-100-set: 0 !important;
  --ch-color-base-d-c-15: 0 !important;
  --ch-color-base-d-c-15-set: 0 !important;
  --ch-color-base-d-c-20: 0 !important;
  --ch-color-base-d-c-20-set: 0 !important;
  --ch-color-base-d-c-25: 0 !important;
  --ch-color-base-d-c-25-set: 0 !important;
  --ch-color-base-d-c-30: 0 !important;
  --ch-color-base-d-c-30-set: 0 !important;
  --ch-color-base-d-c-35: 0 !important;
  --ch-color-base-d-c-35-set: 0 !important;
  --ch-color-base-d-c-40: 0 !important;
  --ch-color-base-d-c-40-set: 0 !important;
  --ch-color-base-d-c-45: 0 !important;
  --ch-color-base-d-c-45-set: 0 !important;
  --ch-color-base-d-c-50: 0 !important;
  --ch-color-base-d-c-50-set: 0 !important;
  --ch-color-base-d-c-55: 0 !important;
  --ch-color-base-d-c-55-set: 0 !important;
  --ch-color-base-d-c-60: 0 !important;
  --ch-color-base-d-c-60-set: 0 !important;
  --ch-color-base-d-c-65: 0 !important;
  --ch-color-base-d-c-65-set: 0 !important;
  --ch-color-base-d-c-70: 0 !important;
  --ch-color-base-d-c-70-set: 0 !important;
  --ch-color-base-d-c-75: 0 !important;
  --ch-color-base-d-c-75-set: 0 !important;
  --ch-color-base-d-c-80: 0 !important;
  --ch-color-base-d-c-80-set: 0 !important;
  --ch-color-base-d-c-85: 0 !important;
  --ch-color-base-d-c-85-set: 0 !important;
  --ch-color-base-d-c-90: 0 !important;
  --ch-color-base-d-c-90-set: 0 !important;
  --ch-color-base-d-c-95: 0 !important;
  --ch-color-base-d-c-95-set: 0 !important;
  --ch-color-base-d-c-pax-delta: 0 !important;
  --ch-color-base-d-c-pax-num: 0.035 !important;
  --ch-color-base-d-h-00: 0 !important;
  --ch-color-base-d-h-00-set: 0 !important;
  --ch-color-base-d-h-05: 0 !important;
  --ch-color-base-d-h-05-set: 0 !important;
  --ch-color-base-d-h-10: 0 !important;
  --ch-color-base-d-h-10-set: 0 !important;
  --ch-color-base-d-h-100: 0 !important;
  --ch-color-base-d-h-100-set: 0 !important;
  --ch-color-base-d-h-15: 0 !important;
  --ch-color-base-d-h-15-set: 0 !important;
  --ch-color-base-d-h-20: 0 !important;
  --ch-color-base-d-h-20-set: 0 !important;
  --ch-color-base-d-h-25: 0 !important;
  --ch-color-base-d-h-25-set: 0 !important;
  --ch-color-base-d-h-30: 0 !important;
  --ch-color-base-d-h-30-set: 0 !important;
  --ch-color-base-d-h-35: 0 !important;
  --ch-color-base-d-h-35-set: 0 !important;
  --ch-color-base-d-h-40: 0 !important;
  --ch-color-base-d-h-40-set: 0 !important;
  --ch-color-base-d-h-45: 0 !important;
  --ch-color-base-d-h-45-set: 0 !important;
  --ch-color-base-d-h-50: 0 !important;
  --ch-color-base-d-h-50-set: 0 !important;
  --ch-color-base-d-h-55: 0 !important;
  --ch-color-base-d-h-55-set: 0 !important;
  --ch-color-base-d-h-60: 0 !important;
  --ch-color-base-d-h-60-set: 0 !important;
  --ch-color-base-d-h-65: 0 !important;
  --ch-color-base-d-h-65-set: 0 !important;
  --ch-color-base-d-h-70: 0 !important;
  --ch-color-base-d-h-70-set: 0 !important;
  --ch-color-base-d-h-75: 0 !important;
  --ch-color-base-d-h-75-set: 0 !important;
  --ch-color-base-d-h-80: 0 !important;
  --ch-color-base-d-h-80-set: 0 !important;
  --ch-color-base-d-h-85: 0 !important;
  --ch-color-base-d-h-85-set: 0 !important;
  --ch-color-base-d-h-90: 0 !important;
  --ch-color-base-d-h-90-set: 0 !important;
  --ch-color-base-d-h-95: 0 !important;
  --ch-color-base-d-h-95-set: 0 !important;
  --ch-color-base-d-h-pax-delta: 0 !important;
  --ch-color-base-d-h-pax-num: 270 !important;
  --ch-color-base-d-l-00: 0.13 !important;
  --ch-color-base-d-l-00-set: 0.13 !important;
  --ch-color-base-d-l-05: 0.15 !important;
  --ch-color-base-d-l-05-set: 0.15 !important;
  --ch-color-base-d-l-10: 0.17 !important;
  --ch-color-base-d-l-10-set: 0.17 !important;
  --ch-color-base-d-l-100: 0.98 !important;
  --ch-color-base-d-l-100-set: 0.98 !important;
  --ch-color-base-d-l-15: 0.18 !important;
  --ch-color-base-d-l-15-set: 0.18 !important;
  --ch-color-base-d-l-20: 0.19 !important;
  --ch-color-base-d-l-20-set: 0.19 !important;
  --ch-color-base-d-l-25: 0.21 !important;
  --ch-color-base-d-l-25-set: 0.21 !important;
  --ch-color-base-d-l-30: 0.24 !important;
  --ch-color-base-d-l-30-set: 0.24 !important;
  --ch-color-base-d-l-35: 0.3 !important;
  --ch-color-base-d-l-35-set: 0.3 !important;
  --ch-color-base-d-l-40: 0.38 !important;
  --ch-color-base-d-l-40-set: 0.38 !important;
  --ch-color-base-d-l-45: 0.48 !important;
  --ch-color-base-d-l-45-set: 0.48 !important;
  --ch-color-base-d-l-50: 0.58 !important;
  --ch-color-base-d-l-50-set: 0.58 !important;
  --ch-color-base-d-l-55: 0.63 !important;
  --ch-color-base-d-l-55-set: 0.63 !important;
  --ch-color-base-d-l-60: 0.68 !important;
  --ch-color-base-d-l-60-set: 0.68 !important;
  --ch-color-base-d-l-65: 0.78 !important;
  --ch-color-base-d-l-65-set: 0.78 !important;
  --ch-color-base-d-l-70: 0.86 !important;
  --ch-color-base-d-l-70-set: 0.86 !important;
  --ch-color-base-d-l-75: 0.9 !important;
  --ch-color-base-d-l-75-set: 0.9 !important;
  --ch-color-base-d-l-80: 0.92 !important;
  --ch-color-base-d-l-80-set: 0.92 !important;
  --ch-color-base-d-l-85: 0.94 !important;
  --ch-color-base-d-l-85-set: 0.94 !important;
  --ch-color-base-d-l-90: 0.95 !important;
  --ch-color-base-d-l-90-set: 0.95 !important;
  --ch-color-base-d-l-95: 0.96 !important;
  --ch-color-base-d-l-95-set: 0.96 !important;
  --ch-color-base-l-c-00: 0 !important;
  --ch-color-base-l-c-05: 0 !important;
  --ch-color-base-l-c-10: 0 !important;
  --ch-color-base-l-c-100: 0 !important;
  --ch-color-base-l-c-15: 0 !important;
  --ch-color-base-l-c-20: 0 !important;
  --ch-color-base-l-c-25: 0 !important;
  --ch-color-base-l-c-30: 0 !important;
  --ch-color-base-l-c-35: 0 !important;
  --ch-color-base-l-c-40: 0 !important;
  --ch-color-base-l-c-45: 0 !important;
  --ch-color-base-l-c-50: 0 !important;
  --ch-color-base-l-c-55: 0 !important;
  --ch-color-base-l-c-60: 0 !important;
  --ch-color-base-l-c-65: 0 !important;
  --ch-color-base-l-c-70: 0 !important;
  --ch-color-base-l-c-75: 0 !important;
  --ch-color-base-l-c-80: 0 !important;
  --ch-color-base-l-c-85: 0 !important;
  --ch-color-base-l-c-90: 0 !important;
  --ch-color-base-l-c-95: 0 !important;
  --ch-color-base-l-c-pax-delta: 0 !important;
  --ch-color-base-l-c-pax-num: 0.035 !important;
  --ch-color-base-l-h-00: 0 !important;
  --ch-color-base-l-h-05: 0 !important;
  --ch-color-base-l-h-10: 0 !important;
  --ch-color-base-l-h-100: 0 !important;
  --ch-color-base-l-h-15: 0 !important;
  --ch-color-base-l-h-20: 0 !important;
  --ch-color-base-l-h-25: 0 !important;
  --ch-color-base-l-h-30: 0 !important;
  --ch-color-base-l-h-35: 0 !important;
  --ch-color-base-l-h-40: 0 !important;
  --ch-color-base-l-h-45: 0 !important;
  --ch-color-base-l-h-50: 0 !important;
  --ch-color-base-l-h-55: 0 !important;
  --ch-color-base-l-h-60: 0 !important;
  --ch-color-base-l-h-65: 0 !important;
  --ch-color-base-l-h-70: 0 !important;
  --ch-color-base-l-h-75: 0 !important;
  --ch-color-base-l-h-80: 0 !important;
  --ch-color-base-l-h-85: 0 !important;
  --ch-color-base-l-h-90: 0 !important;
  --ch-color-base-l-h-95: 0 !important;
  --ch-color-base-l-h-pax-delta: 0 !important;
  --ch-color-base-l-h-pax-num: 270 !important;
  --ch-color-base-l-l-00: 100% !important;
  --ch-color-base-l-l-05: 99% !important;
  --ch-color-base-l-l-10: 98% !important;
  --ch-color-base-l-l-100: 0% !important;
  --ch-color-base-l-l-15: 97% !important;
  --ch-color-base-l-l-20: 95% !important;
  --ch-color-base-l-l-25: 93% !important;
  --ch-color-base-l-l-30: 88% !important;
  --ch-color-base-l-l-35: 80% !important;
  --ch-color-base-l-l-40: 70% !important;
  --ch-color-base-l-l-45: 60% !important;
  --ch-color-base-l-l-50: 50% !important;
  --ch-color-base-l-l-55: 40% !important;
  --ch-color-base-l-l-60: 30% !important;
  --ch-color-base-l-l-65: 20% !important;
  --ch-color-base-l-l-70: 12% !important;
  --ch-color-base-l-l-75: 7% !important;
  --ch-color-base-l-l-80: 5% !important;
  --ch-color-base-l-l-85: 3% !important;
  --ch-color-base-l-l-90: 2% !important;
  --ch-color-base-l-l-95: 1% !important;
  --checkbox-border-color: oklch(0.48 0 0) !important;
  --checkbox-border-color-hover: oklch(0.68 0 0) !important;
  --checkbox-color: oklch(40.14% 0.0638 202.51deg) !important;
  --checkbox-color-hover: oklch(70.7% 0.1737 155.3deg) !important;
  --checkbox-margin-inline-end: 0.25em !important;
  --checkbox-marker-color: oklch(0.13 0 0) !important;
  --checkbox-radius: 50rem !important;
  --checklist-done-color: oklch(0.68 0 0) !important;
  --clickable-icon-radius: 3px !important;
  --code-background: oklch(0.18 0 0) !important;
  --code-border-color: oklch(0.3 0 0) !important;
  --code-comment: oklch(0.48 0 0) !important;
  --code-normal: oklch(0.98 0 0) !important;
  --code-punctuation: oklch(0.68 0 0) !important;
  --code-radius: 3px !important;
  --codeFont: "DM Mono", "DM Mono" !important;
  --col-background-activeline: oklch(from oklch(0.58 0 0) l c h / calc(alpha - calc(1 - 0.25))) !important;
  --col-base-alpha-alh: 0.25 !important;
  --col-base-bg-alh: oklch(0.58 0 0) !important;
  --col-frontmatter-atom: oklch(40.14% 0.0638 202.51deg) !important;
  --col-frontmatter-default: oklch(82.77% 0.1667 79.6deg) !important;
  --col-frontmatter-meta: oklch(70.7% 0.1737 155.3deg) !important;
  --col-frontmatter-number: oklch(82.77% 0.1667 79.6deg) !important;
  --col-h1: oklch(from oklch(40.14% 0.0638 202.51deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h1-bg: oklch(40.14% 0.0638 202.51deg) !important;
  --col-h2: oklch(from oklch(70.7% 0.1737 155.3deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h2-bg: oklch(70.7% 0.1737 155.3deg) !important;
  --col-h3: oklch(from oklch(82.77% 0.1667 79.6deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h3-bg: oklch(82.77% 0.1667 79.6deg) !important;
  --col-h4: oklch(from oklch(40.14% 0.0638 202.51deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h4-bg: oklch(40.14% 0.0638 202.51deg) !important;
  --col-h5: oklch(from oklch(70.7% 0.1737 155.3deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h5-bg: oklch(70.7% 0.1737 155.3deg) !important;
  --col-h6: oklch(from oklch(82.77% 0.1667 79.6deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h6-bg: oklch(82.77% 0.1667 79.6deg) !important;
  --col-highlight-0: hsl(46deg 100% 50%) !important;
  --col-highlight-0-org: hsl(60deg 100% 50%) !important;
  --col-highlight-1: hsl(76deg 100% 50%) !important;
  --col-highlight-1-org: hsl(120deg 100% 50%) !important;
  --col-highlight-2: hsl(166deg 100% 50%) !important;
  --col-highlight-2-org: hsl(180deg 100% 50%) !important;
  --col-highlight-3: hsl(262deg 44% 82%) !important;
  --col-highlight-3-org: hsl(300deg 100% 50%) !important;
  --col-highlight-text: hsl(0deg 0% 0%) !important;
  --col-highlight-text-pickr: hsl(0deg 0% 0%) !important;
  --col-tab-style: oklch(40.14% 0.0638 202.51deg) !important;
  --col-titlebar-accent: oklch(40.14% 0.0638 202.51deg) !important;
  --collapse-icon-color: oklch(0.48 0 0) !important;
  --collapse-icon-color-collapsed: oklch(70.7% 0.1737 155.3deg) !important;
  --color-accent: oklch(40.14% 0.0638 202.51deg) !important;
  --color-accent-1: oklch(70.7% 0.1737 155.3deg) !important;
  --color-accent-2: oklch(82.77% 0.1667 79.6deg) !important;
  --color-background-progress-bar-message: hsl(0deg 0% 0% / 75%) !important;
  --color-base-00: oklch(0.13 0 0) !important;
  --color-base-05: oklch(0.15 0 0) !important;
  --color-base-10: oklch(0.17 0 0) !important;
  --color-base-100: oklch(0.98 0 0) !important;
  --color-base-15: oklch(0.18 0 0) !important;
  --color-base-20: oklch(0.19 0 0) !important;
  --color-base-25: oklch(0.21 0 0) !important;
  --color-base-30: oklch(0.24 0 0) !important;
  --color-base-35: oklch(0.3 0 0) !important;
  --color-base-40: oklch(0.38 0 0) !important;
  --color-base-45: oklch(0.48 0 0) !important;
  --color-base-50: oklch(0.58 0 0) !important;
  --color-base-55: oklch(0.63 0 0) !important;
  --color-base-60: oklch(0.68 0 0) !important;
  --color-base-65: oklch(0.78 0 0) !important;
  --color-base-70: oklch(0.86 0 0) !important;
  --color-base-75: oklch(0.9 0 0) !important;
  --color-base-80: oklch(0.92 0 0) !important;
  --color-base-85: oklch(0.94 0 0) !important;
  --color-base-90: oklch(0.95 0 0) !important;
  --color-base-95: oklch(0.96 0 0) !important;
  --color-bloemfontein: oklch(70.7% 0.1737 155.3deg) !important;
  --color-d-accent: oklch(40.14% 0.0638 202.51deg) !important;
  --color-d-accent-1: oklch(70.7% 0.1737 155.3deg) !important;
  --color-d-accent-2: oklch(82.77% 0.1667 79.6deg) !important;
  --color-red-2: oklch(from #fb464c calc(l - 0.1) c calc(h + 4)) !important;
  --color-selection: oklch(80.92% 0.170357 75.4802deg) !important;
  --color-set-d-selection: oklch(80.92% 0.170357 75.4802deg) !important;
  --color-set-l-selection: oklch(80.92% 0.170357 75.4802deg) !important;
  --color-table-even: oklch(0.17 0 0) !important;
  --color-table-head: oklch(0.19 0 0) !important;
  --color-table-head-hover: rgba(255, 255, 255, 0.067) !important;
  --color-table-odd: oklch(0.13 0 0) !important;
  --cssc-banner-gradient-mask: linear-gradient(to bottom,
  black 0%,
  black 50%,
  oklch(0% 0 0deg / 80%) 75%,
  oklch(0% 0 0deg / 50%) 80%,
  oklch(0% 0 0deg / 30%) 85%,
  oklch(0% 0 0deg / 15%) 90%,
  oklch(0% 0 0deg / 8%) 95%,
  transparent 100%
  ) !important;
  --cssc-banner-height: 200px !important;
  --cssc-banner-residual: 0px !important;
  --cssc-cornell-align-left: max(125px, 25%) !important;
  --cssc-cornell-aside-max: 25% !important;
  --cssc-cornell-aside-min: 125px !important;
  --cssc-cornell-gap: 0.75rem !important;
  --cssc-cornell-text-align: justify !important;
  --cssc-cornell-text-align-last: right !important;
  --cssc-latex-font-reading: "MathJax Main", "MJXZERO", "MJXTEX" !important;
  --cssc-latex-font-size: 14pt !important;
  --cssc-latex-font-source: "DM Mono" ,"MathJax Main", "MJXZERO", "MJXTEX" !important;
  --cssc-latex-text-indent: 0em !important;
  --dark: oklch(0.98 0 0) !important;
  --darkgray: oklch(0.98 0 0) !important;
  --default-font: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --distant-opacity: 0.2 !important;
  --divider-color: oklch(0.3 0 0) !important;
  --divider-color-hover: oklch(40.14% 0.0638 202.51deg) !important;
  --dropdown-background: oklch(0.19 0 0) !important;
  --dropdown-background-hover: oklch(0.24 0 0) !important;
  --elements-padding: 4px !important;
  --embed-block-shadow-hover: 0 0 0 1px oklch(0.3 0 0), inset 0 0 0 1px oklch(0.3 0 0) !important;
  --embed-border-start: 2px solid oklch(40.14% 0.0638 202.51deg) !important;
  --empty-state-background: oklch(0.17 0 0) !important;
  --file-header-background: oklch(0.13 0 0) !important;
  --file-header-background-focused: oklch(0.13 0 0) !important;
  --file-header-border: 0px !important;
  --file-header-font: "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --flair-background: oklch(0.19 0 0) !important;
  --flair-color: oklch(0.98 0 0) !important;
  --font-editor: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --font-editor-m: "Inter 4.1", "DM Sans", "Manrope" !important;
  --font-heading: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-interface: "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --font-interface-theme: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-menu: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-menu-m: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-mermaid: "Inter 4.1", "DM Sans", "Manrope" !important;
  --font-monospace: "DM Mono", "DM Mono" !important;
  --font-monospace-theme: "DM Mono" !important;
  --font-print: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", Arial' !important;
  --font-reveal: "Inter 4.1", "DM Sans", "Manrope" !important;
  --font-text: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --font-text-theme: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --font-ui: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-ui-m: "Manrope", "Inter 4.1", "DM Sans" !important;
  --footnote-divider-color: oklch(0.3 0 0) !important;
  --footnote-id-color: oklch(0.68 0 0) !important;
  --footnote-id-color-no-occurrences: oklch(0.48 0 0) !important;
  --footnote-radius: 3px !important;
  --gap-callouts-img-grid: 4px !important;
  --global-block-width-mode: auto !important;
  --graph-line: oklch(0.3 0 0) !important;
  --graph-node: oklch(0.68 0 0) !important;
  --graph-node-focused: oklch(70.7% 0.1737 155.3deg) !important;
  --graph-node-unresolved: oklch(0.48 0 0) !important;
  --graph-text: oklch(0.98 0 0) !important;
  --gray: oklch(0.68 0 0) !important;
  --grid-columns-container-comm-modal: 5 !important;
  --h1-size: 1.8em !important;
  --h1-weight: 600 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.45em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.3em !important;
  --h4-weight: 500 !important;
  --h5-size: 1.15em !important;
  --h5-weight: 500 !important;
  --h6-size: 1.05em !important;
  --h6-weight: 500 !important;
  --header-height: 36px !important;
  --header-icon-size: 16px !important;
  --header-icon-size-hover: 19px !important;
  --header-margin: 4px !important;
  --header-margin-half: 2px !important;
  --header-padding: 6px !important;
  --header-padding-hover: 4.5px !important;
  --headerFont: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --heading-formatting: oklch(0.48 0 0) !important;
  --heading-spacing: 0 !important;
  --height-hover-sd: 50% !important;
  --height-norm-sd: 25% !important;
  --height-progress-bar-subline: 4px !important;
  --highlight: hsl(46deg 100% 50%) !important;
  --highlight-mix-blend-mode: normal !important;
  --hover-diff: 1.5px !important;
  --hover-diff-sidebar: 1.25px !important;
  --hover-diff-tab: 1.75px !important;
  --hover-frac: 0.25 !important;
  --hover-frac-sidebar: 0.25 !important;
  --hover-frac-tab: 0.25 !important;
  --hr-color: oklch(0.3 0 0) !important;
  --icon-color: oklch(0.68 0 0) !important;
  --icon-color-active: oklch(70.7% 0.1737 155.3deg) !important;
  --icon-color-focused: oklch(70.7% 0.1737 155.3deg) !important;
  --icon-color-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --icon-diff: 2px !important;
  --icon-diff-sidebar: 2px !important;
  --icon-width-sidebar: 24% !important;
  --indentation-guide-editing-indent: 1em !important;
  --infobox-max-width: 50% !important;
  --infobox-set-width: 50% !important;
  --infobox-title-font-size: 1.6em !important;
  --inline-title-size: 1.8em !important;
  --inline-title-weight: 600 !important;
  --input-border-width: 0 !important;
  --input-date-separator: oklch(0.48 0 0) !important;
  --input-height: 28px !important;
  --input-placeholder-color: oklch(0.48 0 0) !important;
  --input-radius: 3px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: oklch(40.14% 0.0638 202.51deg) !important;
  --interactive-accent-hover: oklch(70.7% 0.1737 155.3deg) !important;
  --interactive-focus: oklch(0.38 0 0) !important;
  --interactive-hover: oklch(0.24 0 0) !important;
  --interactive-normal: oklch(0.19 0 0) !important;
  --l: clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) !important;
  --l-threshold: 0.7 !important;
  --light: oklch(0.13 0 0) !important;
  --lightgray: oklch(0.19 0 0) !important;
  --link-color: oklch(70.7% 0.1737 155.3deg) !important;
  --link-color-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --link-external-color: oklch(70.7% 0.1737 155.3deg) !important;
  --link-external-color-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --link-unresolved-color: oklch(70.7% 0.1737 155.3deg) !important;
  --list-marker-color: oklch(0.48 0 0) !important;
  --list-marker-color-collapsed: oklch(70.7% 0.1737 155.3deg) !important;
  --list-marker-color-hover: oklch(0.68 0 0) !important;
  --logo-icon-filled: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'  class='logo-full'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='82.85' y1='30.41' x2='51.26' y2='105.9' gradientTransform='matrix(1, 0, 0, -1, -22.41, 110.97)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%236c56cc'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%239785e5'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='62.61,0 30.91,17.52 18,45.45 37.57,90.47 65.35,100 70.44,89.8 81,26.39 62.61,0' fill='%2334208c'%3E%3C/polygon%3E%3Cpolygon points='81,26.39 61.44,14.41 34.43,35.7 65.35,100 70.44,89.8 81,26.39' fill='url(%23a)'%3E%3C/polygon%3E%3Cpolygon points='81,26.39 81,26.39 62.61,0 61.44,14.41 81,26.39' fill='%23af9ff4'%3E%3C/polygon%3E%3Cpolygon points='61.44,14.41 62.61,0 30.91,17.52 34.43,35.7 61.44,14.41' fill='%234a37a0'%3E%3C/polygon%3E%3Cpolygon points='34.43,35.7 37.57,90.47 65.35,100 34.43,35.7' fill='%234a37a0'%3E%3C/polygon%3E%3C/svg%3E") !important;
  --logo-icon-filled-flat: url("data:image/svg+xml,%3Csvg alt='Obsidian' viewBox='0 0 20 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23A88BFA' d='m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z'%3E%3C/path%3E%3C/svg%3E") !important;
  --logo-icon-filled-new: url("data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20height%3D%22100%25%22%20width%3D%22100%25%22%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3CradialGradient%20id%3D%22logo-bottom-left%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-59%20-225%20150%20-39%20161.4%20470)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.1%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-right%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(50%20-379%20280%2037%20360%20374.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.1%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-left%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(69%20-319%20218%2047%20175.4%20307)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-bottom-right%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-96%20-163%20187%20-111%20335.3%20512.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-36%20166%20-112%20-24%20310%20128.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-left-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(88%2089%20-190%20187%20111%20220.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-bottom-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(9%20130%20-276%2020%20215%20284)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-middle-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-198%20-104%20327%20-623%20400%20399.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CclipPath%20id%3D%22clip%22%3E%3Cpath%20d%3D%22M.2.2h512v512H.2z%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url(%23clip)%22%3E%3Cpath%20d%3D%22M382.3%20475.6c-3.1%2023.4-26%2041.6-48.7%2035.3-32.4-8.9-69.9-22.8-103.6-25.4l-51.7-4a34%2034%200%200%201-22-10.2l-89-91.7a34%2034%200%200%201-6.7-37.7s55-121%2057.1-127.3c2-6.3%209.6-61.2%2014-90.6%201.2-7.9%205-15%2011-20.3L248%208.9a34.1%2034.1%200%200%201%2049.6%204.3L386%20125.6a37%2037%200%200%201%207.6%2022.4c0%2021.3%201.8%2065%2013.6%2093.2%2011.5%2027.3%2032.5%2057%2043.5%2071.5a17.3%2017.3%200%200%201%201.3%2019.2%201494%201494%200%200%201-44.8%2070.6c-15%2022.3-21.9%2049.9-25%2073.1z%22%20fill%3D%22%236c31e3%22%2F%3E%3Cpath%20d%3D%22M165.9%20478.3c41.4-84%2040.2-144.2%2022.6-187-16.2-39.6-46.3-64.5-70-80-.6%202.3-1.3%204.4-2.2%206.5L60.6%20342a34%2034%200%200%200%206.6%2037.7l89.1%2091.7a34%2034%200%200%200%209.6%207z%22%20fill%3D%22url(%23logo-bottom-left)%22%2F%3E%3Cpath%20d%3D%22M278.4%20307.8c11.2%201.2%2022.2%203.6%2032.8%207.6%2034%2012.7%2065%2041.2%2090.5%2096.3%201.8-3.1%203.6-6.2%205.6-9.2a1536%201536%200%200%200%2044.8-70.6%2017%2017%200%200%200-1.3-19.2c-11-14.6-32-44.2-43.5-71.5-11.8-28.2-13.5-72-13.6-93.2%200-8.1-2.6-16-7.6-22.4L297.6%2013.2a34%2034%200%200%200-1.5-1.7%2096%2096%200%200%201%202%2054%20198.3%20198.3%200%200%201-17.6%2041.3l-7.2%2014.2a171%20171%200%200%200-19.4%2071c-1.2%2029.4%204.8%2066.4%2024.5%20115.8z%22%20fill%3D%22url(%23logo-top-right)%22%2F%3E%3Cpath%20d%3D%22M278.4%20307.8c-19.7-49.4-25.8-86.4-24.5-115.9a171%20171%200%200%201%2019.4-71c2.3-4.8%204.8-9.5%207.2-14.1%207.1-13.9%2014-27%2017.6-41.4a96%2096%200%200%200-2-54A34.1%2034.1%200%200%200%20248%209l-105.4%2094.8a34.1%2034.1%200%200%200-10.9%2020.3l-12.8%2085-.5%202.3c23.8%2015.5%2054%2040.4%2070.1%2080a147%20147%200%200%201%207.8%2024.8c28-6.8%2055.7-11%2082.1-8.3z%22%20fill%3D%22url(%23logo-top-left)%22%2F%3E%3Cpath%20d%3D%22M333.6%20511c22.7%206.2%2045.6-12%2048.7-35.4a187%20187%200%200%201%2019.4-63.9c-25.6-55-56.5-83.6-90.4-96.3-36-13.4-75.2-9-115%20.7%208.9%2040.4%203.6%2093.3-30.4%20162.2%204%201.8%208.1%203%2012.5%203.3%200%200%2024.4%202%2053.6%204.1%2029%202%2072.4%2017.1%20101.6%2025.2z%22%20fill%3D%22url(%23logo-bottom-right)%22%2F%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M254.1%20190c-1.3%2029.2%202.4%2062.8%2022.1%20112.1l-6.2-.5c-17.7-51.5-21.5-78-20.2-107.6a174.7%20174.7%200%200%201%2020.4-72c2.4-4.9%208-14.1%2010.5-18.8%207.1-13.7%2011.9-21%2016-33.6%205.7-17.5%204.5-25.9%203.8-34.1%204.6%2029.9-12.7%2056-25.7%2082.4a177.1%20177.1%200%200%200-20.7%2072z%22%20fill%3D%22url(%23logo-top-edge)%22%2F%3E%3Cpath%20d%3D%22M194.3%20293.4c2.4%205.4%204.6%209.8%206%2016.5L195%20311c-2.1-7.8-3.8-13.4-6.8-20-17.8-42-46.3-63.6-69.7-79.5%2028.2%2015.2%2057.2%2039%2075.7%2081.9z%22%20fill%3D%22url(%23logo-left-edge)%22%2F%3E%3Cpath%20d%3D%22M200.6%20315.1c9.8%2046-1.2%20104.2-33.6%20160.9%2027.1-56.2%2040.2-110.1%2029.3-160z%22%20fill%3D%22url(%23logo-bottom-edge)%22%2F%3E%3Cpath%20d%3D%22M312.5%20311c53.1%2019.9%2073.6%2063.6%2088.9%20100-19-38.1-45.2-80.3-90.8-96-34.8-11.8-64.1-10.4-114.3%201l-1.1-5c53.2-12.1%2081-13.5%20117.3%200z%22%20fill%3D%22url(%23logo-middle-edge)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E") !important;
  --logo-icon-line: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z'%3E%3C/path%3E%3C/svg%3E") !important;
  --logo-icon-line-new: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='none' stroke='white' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --magnifier-bw-bases: 1.5 !important;
  --magnifier-bw-iframe: 1.5 !important;
  --magnifier-bw-pdfembed: 1.5 !important;
  --magnifier-bw-table: 1.5 !important;
  --margin-callout: 0.75em !important;
  --medium-transition: 300ms ease-in-out !important;
  --menu-background: oklch(0.19 0 0) !important;
  --menu-border-color: oklch(0.38 0 0) !important;
  --menu-font: "Manrope", "Inter 4.1", "DM Sans" !important;
  --menu-padding: 4px !important;
  --menu-radius: 6px !important;
  --menu-shadow: none !important;
  --metadata-border-color: oklch(0.3 0 0) !important;
  --metadata-divider-color: oklch(0.3 0 0) !important;
  --metadata-input-font: "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --metadata-input-text-color: oklch(0.98 0 0) !important;
  --metadata-label-font: "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --metadata-label-text-color: oklch(0.68 0 0) !important;
  --metadata-label-text-color-hover: oklch(0.68 0 0) !important;
  --metadata-padding: 0.25em 0.25em !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(0.48 0 0) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(0.38 0 0) !important;
  --metadata-property-radius: 3px !important;
  --metadata-property-radius-focus: 3px !important;
  --metadata-property-radius-hover: 3px !important;
  --mod-settings-left-column-spacing: 0px !important;
  --modal-background: oklch(0.13 0 0) !important;
  --modal-border-color: oklch(0.38 0 0) !important;
  --modal-border-width: 0 !important;
  --modal-height-community-plugin: 85vh !important;
  --modal-height-community-theme: 85vh !important;
  --modal-height-publish: 85vh !important;
  --modal-height-settings: 85vh !important;
  --modal-radius: 6px !important;
  --modal-sidebar-background: oklch(0.19 0 0) !important;
  --modal-width-community-plugin: 90vw !important;
  --modal-width-community-theme: 90vw !important;
  --modal-width-publish: 90vw !important;
  --modal-width-settings: 90vw !important;
  --nav-collapse-icon-color: oklch(0.48 0 0) !important;
  --nav-collapse-icon-color-collapsed: oklch(0.48 0 0) !important;
  --nav-heading-color: oklch(0.98 0 0) !important;
  --nav-heading-color-collapsed: oklch(0.48 0 0) !important;
  --nav-heading-color-collapsed-hover: oklch(0.68 0 0) !important;
  --nav-heading-color-hover: oklch(0.98 0 0) !important;
  --nav-item-color: oklch(0.68 0 0) !important;
  --nav-item-color-active: oklch(0.98 0 0) !important;
  --nav-item-color-highlighted: oklch(70.7% 0.1737 155.3deg) !important;
  --nav-item-color-hover: oklch(0.98 0 0) !important;
  --nav-item-color-selected: oklch(0.98 0 0) !important;
  --nav-item-padding-left-no-icon: 12px !important;
  --nav-item-radius: 3px !important;
  --nav-padding: 0 2px 0 4px !important;
  --nav-tag-color: oklch(0.48 0 0) !important;
  --nav-tag-color-active: oklch(0.68 0 0) !important;
  --nav-tag-color-hover: oklch(0.68 0 0) !important;
  --nav-tag-radius: 3px !important;
  --nav-title-margin: 2px !important;
  --near-fade-factor: 0.15 !important;
  --opacity-sd: 100% !important;
  --p-root-number: 0.75 !important;
  --p-spacing: 0.75em !important;
  --p-spacing-root: 0.75rem !important;
  --padding-graph-control: 6px !important;
  --padding-headers: 0.15em 0.25em !important;
  --padding-headers-lr: 0.25em !important;
  --padding-headers-td: 0.15em !important;
  --padding-highlight-LR: 3px !important;
  --padding-highlight-TB: 2px !important;
  --padding-modal-side: 4px !important;
  --padding-multi-select: 2px !important;
  --padding-print: 2cm !important;
  --padding-ss: 0.75em !important;
  --pdf-background: oklch(0.13 0 0) !important;
  --pdf-page-background: oklch(0.13 0 0) !important;
  --pdf-shadow: 0 0 0 1px oklch(0.3 0 0) !important;
  --pdf-sidebar-background: oklch(0.13 0 0) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(0.3 0 0) !important;
  --pill-border-color: oklch(0.3 0 0) !important;
  --pill-border-color-hover: oklch(0.38 0 0) !important;
  --pill-color: oklch(0.68 0 0) !important;
  --pill-color-hover: oklch(0.98 0 0) !important;
  --pill-color-remove: oklch(0.48 0 0) !important;
  --pill-color-remove-hover: oklch(70.7% 0.1737 155.3deg) !important;
  --pill-radius: 3px !important;
  --prompt-background: oklch(0.13 0 0) !important;
  --prompt-border-color: oklch(0.38 0 0) !important;
  --prompt-border-width: 0 !important;
  --prompt-padding: 6px !important;
  --quick-transition: 140ms ease-in-out !important;
  --quicker-transition: 70ms ease-in-out !important;
  --radius-callouts-gallery: 3px !important;
  --radius-callouts-img-grid: 3px !important;
  --radius-image: 3px !important;
  --radius-l: 9px !important;
  --radius-m: 6px !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, oklch(0.19 0 0) 65%, transparent) linear-gradient(oklch(0.19 0 0), color-mix(in srgb, oklch(0.19 0 0) 65%, transparent)) !important;
  --ratio-bw-bases-reading: 0.96 !important;
  --ratio-bw-bases-source: 1 !important;
  --ratio-bw-iframe-reading: 0.96 !important;
  --ratio-bw-iframe-source: 1 !important;
  --ratio-bw-pdfembed-reading: 0.96 !important;
  --ratio-bw-pdfembed-source: 1 !important;
  --ratio-bw-table-reading: 0.96 !important;
  --ratio-bw-table-source: 1 !important;
  --ribbon-background: oklch(0.19 0 0) !important;
  --ribbon-background-collapsed: oklch(0.13 0 0) !important;
  --ribbon-float-color: oklch(0.19 0 0) !important;
  --ribbon-padding: 4px !important;
  --ribbon-width: 36px !important;
  --sbb-divider-width: 1px !important;
  --scrollbar-bg: oklch(0.3 0 0) !important;
  --scrollbar-radius: 9px !important;
  --search-clear-button-color: oklch(0.68 0 0) !important;
  --search-icon-color: oklch(0.68 0 0) !important;
  --search-result-background: oklch(0.13 0 0) !important;
  --secondary: oklch(70.7% 0.1737 155.3deg) !important;
  --setting-group-heading-color: oklch(0.98 0 0) !important;
  --setting-heading: "Inter 4.1", "DM Sans", "Manrope" !important;
  --setting-items-background: oklch(0.17 0 0) !important;
  --setting-items-border-color: oklch(0.3 0 0) !important;
  --setting-items-radius: 9px !important;
  --settings-background: oklch(0.17 0 0) !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shape-roundish: 6px !important;
  --sidebar-icon-padding: 5px !important;
  --sidebar-icon-size: 18px !important;
  --sidebar-icon-size-hover: 20.5px !important;
  --sidebar-padding-hover: 3.75px !important;
  --size-bw-bases: size * 1.5 !important;
  --size-bw-iframe: size * 1.5 !important;
  --size-bw-pdfembed: size * 1.5 !important;
  --size-bw-table: size * 1.5 !important;
  --size-scrollbar-non-native: 8px !important;
  --slider-thumb-border-color: oklch(0.38 0 0) !important;
  --slider-track-background: oklch(0.3 0 0) !important;
  --slow-transition: 560ms ease-in-out !important;
  --smallcap-font: "Inter 4.1", "DM Sans", "Manrope" !important;
  --spacing-comm-modal: 4px !important;
  --ssopt-bw-table-content-fit: 0 !important;
  --ssopt-callout-style: 0 !important;
  --ssopt-callouts-images-display: 0 !important;
  --ssopt-status-bar-full-style: 1 !important;
  --startup-background-image: 50px !important;
  --startup-obsidian-image: url("data:image/svg+xml,%3Csvg alt='Obsidian' viewBox='0 0 20 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23A88BFA' d='m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z'%3E%3C/path%3E%3C/svg%3E") !important;
  --status-bar-background: oklch(0.19 0 0) !important;
  --status-bar-border-color: oklch(0.3 0 0) !important;
  --status-bar-bottom-float-margin: 8px !important;
  --status-bar-full-justify-content: right !important;
  --status-bar-glass-blur: 4px !important;
  --status-bar-max-width: 85% !important;
  --status-bar-min-height: 21.86667px !important;
  --status-bar-min-height-intermediary: 13.86667px !important;
  --status-bar-padding: 4px !important;
  --status-bar-position: absolute !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-shift-workspace-padding-bottom: 30.86667px !important;
  --status-bar-text-color: oklch(0.68 0 0) !important;
  --suggestion-background: oklch(0.13 0 0) !important;
  --tab-background-active: oklch(0.13 0 0) !important;
  --tab-container-background: oklch(0.19 0 0) !important;
  --tab-divider-color: oklch(0.38 0 0) !important;
  --tab-focus-border-width: 1px !important;
  --tab-icon-size: 14px !important;
  --tab-icon-size-hover: 17.5px !important;
  --tab-outline-color: oklch(0.3 0 0) !important;
  --tab-outline-width: 0px !important;
  --tab-padding: 7px !important;
  --tab-padding-hover: 5.25px !important;
  --tab-radius: 3px !important;
  --tab-stacked-header-width: 36px !important;
  --tab-stacked-shadow: -1px 0 0 0 oklch(0.3 0 0) !important;
  --tab-switcher-background: oklch(0.19 0 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(0.19 0 0), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px oklch(40.14% 0.0638 202.51deg) !important;
  --tab-text-color: oklch(0.48 0 0) !important;
  --tab-text-color-active: oklch(0.68 0 0) !important;
  --tab-text-color-focused: oklch(0.68 0 0) !important;
  --tab-text-color-focused-active: oklch(0.68 0 0) !important;
  --tab-text-color-focused-active-current: oklch(70.7% 0.1737 155.3deg) !important;
  --tab-text-color-focused-highlighted: oklch(70.7% 0.1737 155.3deg) !important;
  --table-add-button-border-color: oklch(0.3 0 0) !important;
  --table-border-color: oklch(0.3 0 0) !important;
  --table-drag-handle-background-active: oklch(40.14% 0.0638 202.51deg) !important;
  --table-drag-handle-color: oklch(0.48 0 0) !important;
  --table-drag-handle-size: 16px !important;
  --table-header-background: oklch(0.19 0 0) !important;
  --table-header-background-hover: rgba(255, 255, 255, 0.067) !important;
  --table-header-border-color: oklch(0.3 0 0) !important;
  --table-header-color: oklch(0.98 0 0) !important;
  --table-selection-blend-mode: normal !important;
  --table-selection-border-color: oklch(40.14% 0.0638 202.51deg) !important;
  --tag-color: oklch(70.7% 0.1737 155.3deg) !important;
  --tag-color-hover: oklch(70.7% 0.1737 155.3deg) !important;
  --tag-radius: 3px !important;
  --tertiary: oklch(82.77% 0.1667 79.6deg) !important;
  --text-accent: oklch(70.7% 0.1737 155.3deg) !important;
  --text-accent-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --text-error-hover: oklch(from #fb464c calc(l - 0.1) c calc(h + 4)) !important;
  --text-faint: oklch(0.48 0 0) !important;
  --text-highlight-bg: hsl(46deg 100% 50%) !important;
  --text-highlight-bg-active: hsl(76deg 100% 50%) !important;
  --text-message-progress-bar: oklch(0.98 0 0) !important;
  --text-muted: oklch(0.68 0 0) !important;
  --text-normal: oklch(0.98 0 0) !important;
  --text-selection: oklch(80.92% 0.170357 75.4802deg) !important;
  --textHighlight: hsl(46deg 100% 50%) !important;
  --theme-alternative-checkboxes: disable !important;
  --titleFont: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --titlebar-background: oklch(0.19 0 0) !important;
  --titlebar-background-focused: oklch(0.21 0 0) !important;
  --titlebar-border-color: oklch(0.3 0 0) !important;
  --titlebar-text-color: oklch(0.68 0 0) !important;
  --titlebar-text-color-focused: oklch(0.98 0 0) !important;
  --toggle-border-width: 0 !important;
  --toggle-s-border-width: 0px !important;
  --touch-radius-l: 9px !important;
  --touch-radius-m: 6px !important;
  --touch-radius-s: 3px !important;
  --touch-radius-xl: 9px !important;
  --touch-radius-xs: 3px !important;
  --touch-radius-xxs: 3px !important;
  --traffic-lights-offset-x: 36px !important;
  --traffic-lights-offset-y: 36px !important;
  --ui-font: "Manrope", "Inter 4.1", "DM Sans" !important;
  --vault-profile-color: oklch(0.98 0 0) !important;
  --vault-profile-color-hover: oklch(0.98 0 0) !important;
  --width-norm-sd: 36px !important;
  --width-vll: 700px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.19 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: oklch(0.13 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.3 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: oklch(0.19 0 0);
  border-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body .note-properties {
  background-color: oklch(0.17 0 0);
  border-color: oklch(0.3 0 0);
  border-radius: 3px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.68 0 0);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.68 0 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 3px;
  color: oklch(0.707 0.1737 155.3);
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.68 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.17 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.19 0 0);
  border-left-color: oklch(0.3 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: oklch(0.13 0 0);
  color: oklch(0.98 0 0);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(255, 195, 0);
  box-shadow: rgb(255, 195, 0) 3px 0px 0px 0px, rgb(255, 195, 0) -3px 0px 0px 0px, rgb(255, 195, 0) 0px 2px 0px 0px, rgb(255, 195, 0) 0px -2px 0px 0px, rgb(255, 195, 0) 3px 2px 0px 0px, rgb(255, 195, 0) -3px 2px 0px 0px, rgb(255, 195, 0) 3px -2px 0px 0px, rgb(255, 195, 0) -3px -2px 0px 0px;
  color: rgb(0, 0, 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body del {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body h1.article-title {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.48 0 0);
  border-radius: 800px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: oklch(0.4014 0.0638 202.51);
  border-color: oklch(0.4014 0.0638 202.51);
}

html[saved-theme="dark"] body p {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.68 0 0) none 0px;
  text-decoration-color: oklch(0.68 0 0);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: oklch(0.707 0.1737 155.3);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.707 0.1737 155.3) none 0px;
  text-decoration-color: oklch(0.707 0.1737 155.3);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.707 0.1737 155.3);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.707 0.1737 155.3) none 0px;
  text-decoration-color: oklch(0.707 0.1737 155.3);
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.707 0.1737 155.3);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.707 0.1737 155.3) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body dt {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body ol > li {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body ul > li {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: oklch(0.48 0 0);
}

html[saved-theme="dark"] body blockquote {
  background-color: oklch(0.17 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body table {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  margin-top: 12px;
  width: 194.844px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: oklch(0.17 0 0);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body td {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body tr {
  background-color: oklch(0.19 0 0);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
  font-family: "??", "DM Mono", "DM Mono";
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body figcaption {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.975 0.03 202.51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.975 0.03 202.51);
  border-radius: 3px;
  border-right-color: oklch(0.975 0.03 202.51);
  border-top-color: oklch(0.975 0.03 202.51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: oklch(0.17 0 0);
  border-bottom-color: oklch(0.68 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(0.98 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: oklch(0.48 0 0);
  border-bottom-left-radius: 800px;
  border-bottom-right-radius: 800px;
  border-left-color: oklch(0.48 0 0);
  border-right-color: oklch(0.48 0 0);
  border-top-color: oklch(0.48 0 0);
  border-top-left-radius: 800px;
  border-top-right-radius: 800px;
  margin-right: 8.64px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.13 0 0);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(0, 191, 111);
  border-left-color: rgb(0, 191, 111);
  border-right-color: rgb(0, 191, 111);
  border-top-color: rgb(0, 191, 111);
  color: rgb(0, 191, 111);
  gap: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: oklch(0.806977 0.26058 155.298);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: oklch(0.17 0 0);
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 91, 197, 219;
  background-color: rgba(91, 197, 219, 0.125);
  border-bottom-color: oklch(0.769486 0.101807 213.336);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(91, 197, 219);
  border-right-color: oklch(0.769486 0.101807 213.336);
  border-top-color: oklch(0.769486 0.101807 213.336);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 164, 103, 80;
  background-color: rgba(164, 103, 80, 0.125);
  border-bottom-color: oklch(0.574678 0.0862167 41.3581);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(164, 103, 80);
  border-right-color: oklch(0.574678 0.0862167 41.3581);
  border-top-color: oklch(0.574678 0.0862167 41.3581);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 241, 0, 34;
  background-color: rgba(241, 0, 34, 0.125);
  border-bottom-color: oklch(0.603113 0.245165 26.0478);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(241, 0, 34);
  border-right-color: oklch(0.603113 0.245165 26.0478);
  border-top-color: oklch(0.603113 0.245165 26.0478);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 125, 84, 178;
  background-color: rgba(125, 84, 178, 0.125);
  border-bottom-color: oklch(0.533426 0.145746 301.824);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(125, 84, 178);
  border-right-color: oklch(0.533426 0.145746 301.824);
  border-top-color: oklch(0.533426 0.145746 301.824);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 161, 40, 100;
  background-color: rgba(161, 40, 100, 0.125);
  border-bottom-color: oklch(0.486198 0.165246 354.992);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(161, 40, 100);
  border-right-color: oklch(0.486198 0.165246 354.992);
  border-top-color: oklch(0.486198 0.165246 354.992);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 0, 170, 199;
  background-color: rgba(0, 170, 199, 0.125);
  border-bottom-color: oklch(0.679659 0.12046 215.674);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 170, 199);
  border-right-color: oklch(0.679659 0.12046 215.674);
  border-top-color: oklch(0.679659 0.12046 215.674);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 0, 191, 111;
  background-color: rgba(0, 191, 111, 0.125);
  border-bottom-color: oklch(0.706977 0.17372 155.298);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 111);
  border-right-color: oklch(0.706977 0.17372 155.298);
  border-top-color: oklch(0.706977 0.17372 155.298);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 160, 199, 92;
  background-color: rgba(160, 199, 92, 0.125);
  border-bottom-color: oklch(0.778581 0.14226 126.137);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(160, 199, 92);
  border-right-color: oklch(0.778581 0.14226 126.137);
  border-top-color: oklch(0.778581 0.14226 126.137);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 161, 169, 173;
  background-color: rgba(161, 169, 173, 0.125);
  border-bottom-color: oklch(0.729638 0.0107493 229.031);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(161, 169, 173);
  border-right-color: oklch(0.729638 0.0107493 229.031);
  border-top-color: oklch(0.729638 0.0107493 229.031);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 0, 158, 76;
  background-color: rgba(0, 158, 76, 0.125);
  border-bottom-color: oklch(0.611776 0.164621 150.979);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 158, 76);
  border-right-color: oklch(0.611776 0.164621 150.979);
  border-top-color: oklch(0.611776 0.164621 150.979);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 34, 148, 1;
  background-color: rgba(34, 148, 1, 0.125);
  border-bottom-color: oklch(0.581688 0.190619 140.918);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(34, 148, 1);
  border-right-color: oklch(0.581688 0.190619 140.918);
  border-top-color: oklch(0.581688 0.190619 140.918);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 0, 170, 199;
  background-color: rgba(0, 170, 199, 0.125);
  border-bottom-color: oklch(0.679659 0.12046 215.674);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 170, 199);
  border-right-color: oklch(0.679659 0.12046 215.674);
  border-top-color: oklch(0.679659 0.12046 215.674);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 182, 26;
  background-color: rgba(255, 182, 26, 0.125);
  border-bottom-color: oklch(0.823918 0.166913 78.6263);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 182, 26);
  border-right-color: oklch(0.823918 0.166913 78.6263);
  border-top-color: oklch(0.823918 0.166913 78.6263);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v4'/%3E%3Cpath d='m16.2 7.8 2.9-2.9'/%3E%3Cpath d='M18 12h4'/%3E%3Cpath d='m16.2 16.2 2.9 2.9'/%3E%3Cpath d='M12 18v4'/%3E%3Cpath d='m4.9 19.1 2.9-2.9'/%3E%3Cpath d='M2 12h4'/%3E%3Cpath d='m4.9 4.9 2.9 2.9'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="aside"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="attachment"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m18 16 4-4-4-4'/%3E%3Cpath d='m6 8-4 4 4 4'/%3E%3Cpath d='m14.5 4-5 16'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="columns"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2'/%3E%3Cpath d='M12 3v18'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="email"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="file"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="goal"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="images"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="infobox"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="kanban"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="link"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="mail"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="minus"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="negative"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="phone"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="plus"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='M12 5v14'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="positive"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='M12 5v14'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 6v12'/%3E%3Cpath d='M17.196 9 6.804 15'/%3E%3Cpath d='m6.804 9 10.392 6'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="url"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: oklch(0.15 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.3 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.3 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: oklch(0.98 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: oklch(0.13 0 0);
  border-bottom-color: oklch(0.38 0 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.38 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.38 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.38 0 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.38 0 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.38 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.38 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.38 0 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.19 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: oklch(0.707 0.1737 155.3);
}

html[saved-theme="dark"] body h1 {
  color: oklch(0.975 0.03 202.51);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="dark"] body h2 {
  color: oklch(0.3 0.03 155.3);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body h3 {
  color: oklch(0.3 0.03 79.6);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="dark"] body h4 {
  color: oklch(0.975 0.03 202.51);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="dark"] body h5 {
  color: oklch(0.3 0.03 155.3);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="dark"] body h6 {
  color: oklch(0.3 0.03 79.6);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 0, 191, 111;
  border-bottom-color: oklch(0.706977 0.17372 155.298);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 111);
  border-right-color: oklch(0.706977 0.17372 155.298);
  border-top-color: oklch(0.706977 0.17372 155.298);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: oklch(0.98 0 0);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.68 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.68 0 0);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: oklch(0.19 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-right-width: 1px;
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.68 0 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(0.98 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.68 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.68 0 0);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.707 0.1737 155.3);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.707 0.1737 155.3);
  border-right-color: oklch(0.707 0.1737 155.3);
  border-top-color: oklch(0.707 0.1737 155.3);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.707 0.1737 155.3);
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.707 0.1737 155.3);
  stroke: oklch(0.707 0.1737 155.3);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.68 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.68 0 0);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: oklch(0.48 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body .metadata {
  background-color: oklch(0.17 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.68 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.68 0 0);
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  color: oklch(0.68 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: oklch(0.19 0 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: oklch(0.98 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body abbr {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.68 0 0);
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="dark"] body kbd {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.98 0 0);
  font-family: "??", "DM Mono", "DM Mono";
  padding-bottom: 2px;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body sub {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body summary {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body sup {
  color: oklch(0.98 0 0);
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.707 0.1737 155.3);
}`,
  },
  light: {
    base: `:root:root {
  --PComm001-col-today: oklch(40.14% 0.0638 202.51deg) !important;
  --PComm001-col-year: oklch(40.14% 0.0638 202.51deg) !important;
  --PComm002-sp-maxheight: 33vh !important;
  --PComm002-wp-maxheight: 33vh !important;
  --PComm007-toolbar-justification: left !important;
  --PComm007-toolbar-title-justification: 0 auto 0 0 !important;
  --account-scrollbar-border: 2px !important;
  --account-scrollbar-size: 8px !important;
  --advanced-tables-helper-size: 28px !important;
  --alh-ext-length: max(32px 32px, 50vw - 350px) !important;
  --aside-float: right !important;
  --aside-infobox-float: right !important;
  --aside-margin-left: 0.75rem !important;
  --aside-margin-right: 0 !important;
  --aside-padding: 12px !important;
  --aside-text-align: left !important;
  --aspect-ratio-bw-iframe: auto 16/9 !important;
  --background-modifier-active-hover: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 10%) !important;
  --background-modifier-border: oklch(0.8 0 0) !important;
  --background-modifier-border-focus: oklch(0.6 0 0) !important;
  --background-modifier-border-hover: oklch(0.7 0 0) !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-form-field: oklch(0.99 0 0) !important;
  --background-modifier-form-field-hover: oklch(0.99 0 0) !important;
  --background-modifier-message: rgb(0 0 0 / 80%) !important;
  --background-primary: oklch(1 0 0) !important;
  --background-primary-alt: oklch(0.98 0 0) !important;
  --background-secondary: oklch(0.95 0 0) !important;
  --background-secondary-alt: oklch(0.93 0 0) !important;
  --bases-cards-background: oklch(1 0 0) !important;
  --bases-cards-cover-background: oklch(0.98 0 0) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px oklch(0.8 0 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(0.7 0 0) !important;
  --bases-embed-border-color: oklch(0.8 0 0) !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: oklch(0.3 0 0) !important;
  --bases-table-border-color: oklch(0.8 0 0) !important;
  --bases-table-cell-background-active: oklch(1 0 0) !important;
  --bases-table-cell-background-disabled: oklch(0.98 0 0) !important;
  --bases-table-cell-background-selected: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 10%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(0.6 0 0) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px oklch(70.7% 0.1737 155.3deg) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: oklch(0.98 0 0) !important;
  --bases-table-header-background: oklch(1 0 0) !important;
  --bases-table-header-color: oklch(0.3 0 0) !important;
  --bases-table-summary-background: oklch(1 0 0) !important;
  --blockquote-background-color: oklch(0.98 0 0) !important;
  --blockquote-border-color: oklch(0.93 0 0) !important;
  --blockquote-border-thickness: 4px !important;
  --blur-0: blur(0.5px) !important;
  --blur-1: blur(1px) !important;
  --blur-2: blur(2px) !important;
  --blur-4: blur(4px) !important;
  --blur-8: blur(8px) !important;
  --blur-background: color-mix(in srgb, oklch(1 0 0) 65%, transparent) linear-gradient(oklch(1 0 0), color-mix(in srgb, oklch(1 0 0) 65%, transparent)) !important;
  --bodyFont: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --border-scrollbar-non-native: 2px !important;
  --brightness-25: brightness(25%) !important;
  --brightness-50: brightness(50%) !important;
  --brightness-75: brightness(75%) !important;
  --button-radius: 3px !important;
  --callout-blend-mode: normal;
  --callout-border-base-width: 0px;
  --callout-border-left-extra: 5px;
  --callout-border-left-width: 5px;
  --callout-border-other-width: 0px;
  --callout-columns-margin-top: 0.75em;
  --callout-gap: 0.5em;
  --callout-radius: 3px;
  --callout-title-gap: 0.75em;
  --canvas-background: oklch(1 0 0) !important;
  --canvas-card-label-color: oklch(0.6 0 0) !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: oklch(0.88 0 0) !important;
  --canvas-dot-size: 0.7 !important;
  --canvas-group-font-size: 1.5em !important;
  --canvas-node-font-size: 1em !important;
  --caret-color: oklch(0 0 0) !important;
  --ch-color-base-d-c-00: 0 !important;
  --ch-color-base-d-c-05: 0 !important;
  --ch-color-base-d-c-10: 0 !important;
  --ch-color-base-d-c-100: 0 !important;
  --ch-color-base-d-c-15: 0 !important;
  --ch-color-base-d-c-20: 0 !important;
  --ch-color-base-d-c-25: 0 !important;
  --ch-color-base-d-c-30: 0 !important;
  --ch-color-base-d-c-35: 0 !important;
  --ch-color-base-d-c-40: 0 !important;
  --ch-color-base-d-c-45: 0 !important;
  --ch-color-base-d-c-50: 0 !important;
  --ch-color-base-d-c-55: 0 !important;
  --ch-color-base-d-c-60: 0 !important;
  --ch-color-base-d-c-65: 0 !important;
  --ch-color-base-d-c-70: 0 !important;
  --ch-color-base-d-c-75: 0 !important;
  --ch-color-base-d-c-80: 0 !important;
  --ch-color-base-d-c-85: 0 !important;
  --ch-color-base-d-c-90: 0 !important;
  --ch-color-base-d-c-95: 0 !important;
  --ch-color-base-d-c-pax-delta: 0 !important;
  --ch-color-base-d-c-pax-num: 0.035 !important;
  --ch-color-base-d-h-00: 0 !important;
  --ch-color-base-d-h-05: 0 !important;
  --ch-color-base-d-h-10: 0 !important;
  --ch-color-base-d-h-100: 0 !important;
  --ch-color-base-d-h-15: 0 !important;
  --ch-color-base-d-h-20: 0 !important;
  --ch-color-base-d-h-25: 0 !important;
  --ch-color-base-d-h-30: 0 !important;
  --ch-color-base-d-h-35: 0 !important;
  --ch-color-base-d-h-40: 0 !important;
  --ch-color-base-d-h-45: 0 !important;
  --ch-color-base-d-h-50: 0 !important;
  --ch-color-base-d-h-55: 0 !important;
  --ch-color-base-d-h-60: 0 !important;
  --ch-color-base-d-h-65: 0 !important;
  --ch-color-base-d-h-70: 0 !important;
  --ch-color-base-d-h-75: 0 !important;
  --ch-color-base-d-h-80: 0 !important;
  --ch-color-base-d-h-85: 0 !important;
  --ch-color-base-d-h-90: 0 !important;
  --ch-color-base-d-h-95: 0 !important;
  --ch-color-base-d-h-pax-delta: 0 !important;
  --ch-color-base-d-h-pax-num: 270 !important;
  --ch-color-base-d-l-00: 13% !important;
  --ch-color-base-d-l-05: 15% !important;
  --ch-color-base-d-l-10: 17% !important;
  --ch-color-base-d-l-100: 98% !important;
  --ch-color-base-d-l-15: 18% !important;
  --ch-color-base-d-l-20: 19% !important;
  --ch-color-base-d-l-25: 21% !important;
  --ch-color-base-d-l-30: 24% !important;
  --ch-color-base-d-l-35: 30% !important;
  --ch-color-base-d-l-40: 38% !important;
  --ch-color-base-d-l-45: 48% !important;
  --ch-color-base-d-l-50: 58% !important;
  --ch-color-base-d-l-55: 63% !important;
  --ch-color-base-d-l-60: 68% !important;
  --ch-color-base-d-l-65: 78% !important;
  --ch-color-base-d-l-70: 86% !important;
  --ch-color-base-d-l-75: 90% !important;
  --ch-color-base-d-l-80: 92% !important;
  --ch-color-base-d-l-85: 94% !important;
  --ch-color-base-d-l-90: 95% !important;
  --ch-color-base-d-l-95: 96% !important;
  --ch-color-base-l-c-00: 0 !important;
  --ch-color-base-l-c-00-set: 0 !important;
  --ch-color-base-l-c-05: 0 !important;
  --ch-color-base-l-c-05-set: 0 !important;
  --ch-color-base-l-c-10: 0 !important;
  --ch-color-base-l-c-10-set: 0 !important;
  --ch-color-base-l-c-100: 0 !important;
  --ch-color-base-l-c-100-set: 0 !important;
  --ch-color-base-l-c-15: 0 !important;
  --ch-color-base-l-c-15-set: 0 !important;
  --ch-color-base-l-c-20: 0 !important;
  --ch-color-base-l-c-20-set: 0 !important;
  --ch-color-base-l-c-25: 0 !important;
  --ch-color-base-l-c-25-set: 0 !important;
  --ch-color-base-l-c-30: 0 !important;
  --ch-color-base-l-c-30-set: 0 !important;
  --ch-color-base-l-c-35: 0 !important;
  --ch-color-base-l-c-35-set: 0 !important;
  --ch-color-base-l-c-40: 0 !important;
  --ch-color-base-l-c-40-set: 0 !important;
  --ch-color-base-l-c-45: 0 !important;
  --ch-color-base-l-c-45-set: 0 !important;
  --ch-color-base-l-c-50: 0 !important;
  --ch-color-base-l-c-50-set: 0 !important;
  --ch-color-base-l-c-55: 0 !important;
  --ch-color-base-l-c-55-set: 0 !important;
  --ch-color-base-l-c-60: 0 !important;
  --ch-color-base-l-c-60-set: 0 !important;
  --ch-color-base-l-c-65: 0 !important;
  --ch-color-base-l-c-65-set: 0 !important;
  --ch-color-base-l-c-70: 0 !important;
  --ch-color-base-l-c-70-set: 0 !important;
  --ch-color-base-l-c-75: 0 !important;
  --ch-color-base-l-c-75-set: 0 !important;
  --ch-color-base-l-c-80: 0 !important;
  --ch-color-base-l-c-80-set: 0 !important;
  --ch-color-base-l-c-85: 0 !important;
  --ch-color-base-l-c-85-set: 0 !important;
  --ch-color-base-l-c-90: 0 !important;
  --ch-color-base-l-c-90-set: 0 !important;
  --ch-color-base-l-c-95: 0 !important;
  --ch-color-base-l-c-95-set: 0 !important;
  --ch-color-base-l-c-pax-delta: 0 !important;
  --ch-color-base-l-c-pax-num: 0.035 !important;
  --ch-color-base-l-h-00: 0 !important;
  --ch-color-base-l-h-00-set: 0 !important;
  --ch-color-base-l-h-05: 0 !important;
  --ch-color-base-l-h-05-set: 0 !important;
  --ch-color-base-l-h-10: 0 !important;
  --ch-color-base-l-h-10-set: 0 !important;
  --ch-color-base-l-h-100: 0 !important;
  --ch-color-base-l-h-100-set: 0 !important;
  --ch-color-base-l-h-15: 0 !important;
  --ch-color-base-l-h-15-set: 0 !important;
  --ch-color-base-l-h-20: 0 !important;
  --ch-color-base-l-h-20-set: 0 !important;
  --ch-color-base-l-h-25: 0 !important;
  --ch-color-base-l-h-25-set: 0 !important;
  --ch-color-base-l-h-30: 0 !important;
  --ch-color-base-l-h-30-set: 0 !important;
  --ch-color-base-l-h-35: 0 !important;
  --ch-color-base-l-h-35-set: 0 !important;
  --ch-color-base-l-h-40: 0 !important;
  --ch-color-base-l-h-40-set: 0 !important;
  --ch-color-base-l-h-45: 0 !important;
  --ch-color-base-l-h-45-set: 0 !important;
  --ch-color-base-l-h-50: 0 !important;
  --ch-color-base-l-h-50-set: 0 !important;
  --ch-color-base-l-h-55: 0 !important;
  --ch-color-base-l-h-55-set: 0 !important;
  --ch-color-base-l-h-60: 0 !important;
  --ch-color-base-l-h-60-set: 0 !important;
  --ch-color-base-l-h-65: 0 !important;
  --ch-color-base-l-h-65-set: 0 !important;
  --ch-color-base-l-h-70: 0 !important;
  --ch-color-base-l-h-70-set: 0 !important;
  --ch-color-base-l-h-75: 0 !important;
  --ch-color-base-l-h-75-set: 0 !important;
  --ch-color-base-l-h-80: 0 !important;
  --ch-color-base-l-h-80-set: 0 !important;
  --ch-color-base-l-h-85: 0 !important;
  --ch-color-base-l-h-85-set: 0 !important;
  --ch-color-base-l-h-90: 0 !important;
  --ch-color-base-l-h-90-set: 0 !important;
  --ch-color-base-l-h-95: 0 !important;
  --ch-color-base-l-h-95-set: 0 !important;
  --ch-color-base-l-h-pax-delta: 0 !important;
  --ch-color-base-l-h-pax-num: 270 !important;
  --ch-color-base-l-l-00: 1 !important;
  --ch-color-base-l-l-00-set: 1 !important;
  --ch-color-base-l-l-05: 0.99 !important;
  --ch-color-base-l-l-05-set: 0.99 !important;
  --ch-color-base-l-l-10: 0.98 !important;
  --ch-color-base-l-l-10-set: 0.98 !important;
  --ch-color-base-l-l-100: 0 !important;
  --ch-color-base-l-l-100-set: 0 !important;
  --ch-color-base-l-l-15: 0.97 !important;
  --ch-color-base-l-l-15-set: 0.97 !important;
  --ch-color-base-l-l-20: 0.95 !important;
  --ch-color-base-l-l-20-set: 0.95 !important;
  --ch-color-base-l-l-25: 0.93 !important;
  --ch-color-base-l-l-25-set: 0.93 !important;
  --ch-color-base-l-l-30: 0.88 !important;
  --ch-color-base-l-l-30-set: 0.88 !important;
  --ch-color-base-l-l-35: 0.8 !important;
  --ch-color-base-l-l-35-set: 0.8 !important;
  --ch-color-base-l-l-40: 0.7 !important;
  --ch-color-base-l-l-40-set: 0.7 !important;
  --ch-color-base-l-l-45: 0.6 !important;
  --ch-color-base-l-l-45-set: 0.6 !important;
  --ch-color-base-l-l-50: 0.5 !important;
  --ch-color-base-l-l-50-set: 0.5 !important;
  --ch-color-base-l-l-55: 0.4 !important;
  --ch-color-base-l-l-55-set: 0.4 !important;
  --ch-color-base-l-l-60: 0.3 !important;
  --ch-color-base-l-l-60-set: 0.3 !important;
  --ch-color-base-l-l-65: 0.2 !important;
  --ch-color-base-l-l-65-set: 0.2 !important;
  --ch-color-base-l-l-70: 0.12 !important;
  --ch-color-base-l-l-70-set: 0.12 !important;
  --ch-color-base-l-l-75: 0.07 !important;
  --ch-color-base-l-l-75-set: 0.07 !important;
  --ch-color-base-l-l-80: 0.05 !important;
  --ch-color-base-l-l-80-set: 0.05 !important;
  --ch-color-base-l-l-85: 0.03 !important;
  --ch-color-base-l-l-85-set: 0.03 !important;
  --ch-color-base-l-l-90: 0.02 !important;
  --ch-color-base-l-l-90-set: 0.02 !important;
  --ch-color-base-l-l-95: 0.01 !important;
  --ch-color-base-l-l-95-set: 0.01 !important;
  --checkbox-border-color: oklch(0.6 0 0) !important;
  --checkbox-border-color-hover: oklch(0.3 0 0) !important;
  --checkbox-color: oklch(70.7% 0.1737 155.3deg) !important;
  --checkbox-color-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --checkbox-margin-inline-end: 0.25em !important;
  --checkbox-marker-color: oklch(1 0 0) !important;
  --checkbox-radius: 50rem !important;
  --checklist-done-color: oklch(0.3 0 0) !important;
  --clickable-icon-radius: 3px !important;
  --code-background: oklch(0.97 0 0) !important;
  --code-border-color: oklch(0.8 0 0) !important;
  --code-comment: oklch(0.6 0 0) !important;
  --code-normal: oklch(0 0 0) !important;
  --code-punctuation: oklch(0.3 0 0) !important;
  --code-radius: 3px !important;
  --codeFont: "DM Mono", "DM Mono" !important;
  --col-background-activeline: oklch(from oklch(0.5 0 0) l c h / calc(alpha - calc(1 - 0.25))) !important;
  --col-base-alpha-alh: 0.25 !important;
  --col-base-bg-alh: oklch(0.5 0 0) !important;
  --col-frontmatter-atom: oklch(40.14% 0.0638 202.51deg) !important;
  --col-frontmatter-default: oklch(82.77% 0.1667 79.6deg) !important;
  --col-frontmatter-meta: oklch(70.7% 0.1737 155.3deg) !important;
  --col-frontmatter-number: oklch(82.77% 0.1667 79.6deg) !important;
  --col-h1: oklch(from oklch(40.14% 0.0638 202.51deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h1-bg: oklch(40.14% 0.0638 202.51deg) !important;
  --col-h2: oklch(from oklch(70.7% 0.1737 155.3deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h2-bg: oklch(70.7% 0.1737 155.3deg) !important;
  --col-h3: oklch(from oklch(82.77% 0.1667 79.6deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h3-bg: oklch(82.77% 0.1667 79.6deg) !important;
  --col-h4: oklch(from oklch(40.14% 0.0638 202.51deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h4-bg: oklch(40.14% 0.0638 202.51deg) !important;
  --col-h5: oklch(from oklch(70.7% 0.1737 155.3deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h5-bg: oklch(70.7% 0.1737 155.3deg) !important;
  --col-h6: oklch(from oklch(82.77% 0.1667 79.6deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h) !important;
  --col-h6-bg: oklch(82.77% 0.1667 79.6deg) !important;
  --col-highlight-0: hsl(46deg 100% 50%) !important;
  --col-highlight-0-org: hsl(60deg 100% 50%) !important;
  --col-highlight-1: hsl(76deg 100% 50%) !important;
  --col-highlight-1-org: hsl(120deg 100% 50%) !important;
  --col-highlight-2: hsl(166deg 100% 50%) !important;
  --col-highlight-2-org: hsl(180deg 100% 50%) !important;
  --col-highlight-3: hsl(262deg 44% 82%) !important;
  --col-highlight-3-org: hsl(300deg 100% 50%) !important;
  --col-highlight-text: hsl(0deg 0% 0%) !important;
  --col-highlight-text-pickr: hsl(0deg 0% 0%) !important;
  --col-tab-style: oklch(40.14% 0.0638 202.51deg) !important;
  --col-titlebar-accent: oklch(40.14% 0.0638 202.51deg) !important;
  --collapse-icon-color: oklch(0.6 0 0) !important;
  --collapse-icon-color-collapsed: oklch(40.14% 0.0638 202.51deg) !important;
  --color-accent: oklch(40.14% 0.0638 202.51deg) !important;
  --color-accent-1: oklch(70.7% 0.1737 155.3deg) !important;
  --color-accent-2: oklch(82.77% 0.1667 79.6deg) !important;
  --color-background-progress-bar-message: hsl(0deg 0% 100% / 75%) !important;
  --color-base-00: oklch(1 0 0) !important;
  --color-base-05: oklch(0.99 0 0) !important;
  --color-base-10: oklch(0.98 0 0) !important;
  --color-base-100: oklch(0 0 0) !important;
  --color-base-15: oklch(0.97 0 0) !important;
  --color-base-20: oklch(0.95 0 0) !important;
  --color-base-25: oklch(0.93 0 0) !important;
  --color-base-30: oklch(0.88 0 0) !important;
  --color-base-35: oklch(0.8 0 0) !important;
  --color-base-40: oklch(0.7 0 0) !important;
  --color-base-45: oklch(0.6 0 0) !important;
  --color-base-50: oklch(0.5 0 0) !important;
  --color-base-55: oklch(0.4 0 0) !important;
  --color-base-60: oklch(0.3 0 0) !important;
  --color-base-65: oklch(0.2 0 0) !important;
  --color-base-70: oklch(0.12 0 0) !important;
  --color-base-75: oklch(0.07 0 0) !important;
  --color-base-80: oklch(0.05 0 0) !important;
  --color-base-85: oklch(0.03 0 0) !important;
  --color-base-90: oklch(0.02 0 0) !important;
  --color-base-95: oklch(0.01 0 0) !important;
  --color-bloemfontein: oklch(40.14% 0.0638 202.51deg) !important;
  --color-l-accent: oklch(40.14% 0.0638 202.51deg) !important;
  --color-l-accent-1: oklch(70.7% 0.1737 155.3deg) !important;
  --color-l-accent-2: oklch(82.77% 0.1667 79.6deg) !important;
  --color-red-2: oklch(from #e93147 calc(l - 0.1) c calc(h + 4)) !important;
  --color-selection: oklch(80.92% 0.170357 75.4802deg) !important;
  --color-set-d-selection: oklch(80.92% 0.170357 75.4802deg) !important;
  --color-set-l-selection: oklch(80.92% 0.170357 75.4802deg) !important;
  --color-table-even: oklch(0.98 0 0) !important;
  --color-table-head: oklch(0.95 0 0) !important;
  --color-table-head-hover: rgba(0, 0, 0, 0.067) !important;
  --color-table-odd: oklch(1 0 0) !important;
  --cssc-banner-gradient-mask: linear-gradient(to bottom,
  black 0%,
  black 50%,
  oklch(0% 0 0deg / 80%) 75%,
  oklch(0% 0 0deg / 50%) 80%,
  oklch(0% 0 0deg / 30%) 85%,
  oklch(0% 0 0deg / 15%) 90%,
  oklch(0% 0 0deg / 8%) 95%,
  transparent 100%
  ) !important;
  --cssc-banner-height: 200px !important;
  --cssc-banner-residual: 0px !important;
  --cssc-cornell-align-left: max(125px, 25%) !important;
  --cssc-cornell-aside-max: 25% !important;
  --cssc-cornell-aside-min: 125px !important;
  --cssc-cornell-gap: 0.75rem !important;
  --cssc-cornell-text-align: justify !important;
  --cssc-cornell-text-align-last: right !important;
  --cssc-latex-font-reading: "MathJax Main", "MJXZERO", "MJXTEX" !important;
  --cssc-latex-font-size: 14pt !important;
  --cssc-latex-font-source: "DM Mono" ,"MathJax Main", "MJXZERO", "MJXTEX" !important;
  --cssc-latex-text-indent: 0em !important;
  --dark: oklch(0 0 0) !important;
  --darkgray: oklch(0 0 0) !important;
  --default-font: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --distant-opacity: 0.2 !important;
  --divider-color: oklch(0.8 0 0) !important;
  --divider-color-hover: oklch(70.7% 0.1737 155.3deg) !important;
  --dropdown-background: oklch(0.95 0 0) !important;
  --dropdown-background-hover: oklch(0.88 0 0) !important;
  --elements-padding: 4px !important;
  --embed-block-shadow-hover: 0 0 0 1px oklch(0.8 0 0), inset 0 0 0 1px oklch(0.8 0 0) !important;
  --embed-border-start: 2px solid oklch(70.7% 0.1737 155.3deg) !important;
  --empty-state-background: oklch(0.98 0 0) !important;
  --file-header-background: oklch(1 0 0) !important;
  --file-header-background-focused: oklch(1 0 0) !important;
  --file-header-border: 0px !important;
  --file-header-font: "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --flair-background: oklch(0.95 0 0) !important;
  --flair-color: oklch(0 0 0) !important;
  --font-editor: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --font-editor-m: "Inter 4.1", "DM Sans", "Manrope" !important;
  --font-heading: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-interface: "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --font-interface-theme: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-menu: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-menu-m: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-mermaid: "Inter 4.1", "DM Sans", "Manrope" !important;
  --font-monospace: "DM Mono", "DM Mono" !important;
  --font-monospace-theme: "DM Mono" !important;
  --font-print: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", Arial' !important;
  --font-reveal: "Inter 4.1", "DM Sans", "Manrope" !important;
  --font-text: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --font-text-theme: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --font-ui: "Manrope", "Inter 4.1", "DM Sans" !important;
  --font-ui-m: "Manrope", "Inter 4.1", "DM Sans" !important;
  --footnote-divider-color: oklch(0.8 0 0) !important;
  --footnote-id-color: oklch(0.3 0 0) !important;
  --footnote-id-color-no-occurrences: oklch(0.6 0 0) !important;
  --footnote-radius: 3px !important;
  --gap-callouts-img-grid: 4px !important;
  --global-block-width-mode: auto !important;
  --graph-line: oklch(0.8 0 0) !important;
  --graph-node: oklch(0.3 0 0) !important;
  --graph-node-focused: oklch(40.14% 0.0638 202.51deg) !important;
  --graph-node-unresolved: oklch(0.6 0 0) !important;
  --graph-text: oklch(0 0 0) !important;
  --gray: oklch(0.3 0 0) !important;
  --grid-columns-container-comm-modal: 5 !important;
  --h1-size: 1.8em !important;
  --h1-weight: 600 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.45em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.3em !important;
  --h4-weight: 500 !important;
  --h5-size: 1.15em !important;
  --h5-weight: 500 !important;
  --h6-size: 1.05em !important;
  --h6-weight: 500 !important;
  --header-height: 36px !important;
  --header-icon-size: 16px !important;
  --header-icon-size-hover: 19px !important;
  --header-margin: 4px !important;
  --header-margin-half: 2px !important;
  --header-padding: 6px !important;
  --header-padding-hover: 4.5px !important;
  --headerFont: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --heading-formatting: oklch(0.6 0 0) !important;
  --heading-spacing: 0 !important;
  --height-hover-sd: 50% !important;
  --height-norm-sd: 25% !important;
  --height-progress-bar-subline: 4px !important;
  --highlight: hsl(46deg 100% 50%) !important;
  --highlight-mix-blend-mode: normal !important;
  --hover-diff: 1.5px !important;
  --hover-diff-sidebar: 1.25px !important;
  --hover-diff-tab: 1.75px !important;
  --hover-frac: 0.25 !important;
  --hover-frac-sidebar: 0.25 !important;
  --hover-frac-tab: 0.25 !important;
  --hr-color: oklch(0.8 0 0) !important;
  --icon-color: oklch(0.3 0 0) !important;
  --icon-color-active: oklch(40.14% 0.0638 202.51deg) !important;
  --icon-color-focused: oklch(40.14% 0.0638 202.51deg) !important;
  --icon-color-hover: oklch(70.7% 0.1737 155.3deg) !important;
  --icon-diff: 2px !important;
  --icon-diff-sidebar: 2px !important;
  --icon-width-sidebar: 24% !important;
  --indentation-guide-editing-indent: 1em !important;
  --infobox-max-width: 50% !important;
  --infobox-set-width: 50% !important;
  --infobox-title-font-size: 1.6em !important;
  --inline-title-size: 1.8em !important;
  --inline-title-weight: 600 !important;
  --input-border-width: 0 !important;
  --input-date-separator: oklch(0.6 0 0) !important;
  --input-height: 28px !important;
  --input-placeholder-color: oklch(0.6 0 0) !important;
  --input-radius: 3px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: oklch(70.7% 0.1737 155.3deg) !important;
  --interactive-accent-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --interactive-focus: oklch(0.7 0 0) !important;
  --interactive-hover: oklch(0.88 0 0) !important;
  --interactive-normal: oklch(0.95 0 0) !important;
  --l: clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) !important;
  --l-threshold: 0.7 !important;
  --light: oklch(1 0 0) !important;
  --lightgray: oklch(0.95 0 0) !important;
  --link-color: oklch(40.14% 0.0638 202.51deg) !important;
  --link-color-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --link-external-color: oklch(40.14% 0.0638 202.51deg) !important;
  --link-external-color-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --link-unresolved-color: oklch(40.14% 0.0638 202.51deg) !important;
  --link-unresolved-decoration-color: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 30%) !important;
  --list-marker-color: oklch(0.6 0 0) !important;
  --list-marker-color-collapsed: oklch(40.14% 0.0638 202.51deg) !important;
  --list-marker-color-hover: oklch(0.3 0 0) !important;
  --logo-icon-filled: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'  class='logo-full'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='82.85' y1='30.41' x2='51.26' y2='105.9' gradientTransform='matrix(1, 0, 0, -1, -22.41, 110.97)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%236c56cc'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%239785e5'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='62.61,0 30.91,17.52 18,45.45 37.57,90.47 65.35,100 70.44,89.8 81,26.39 62.61,0' fill='%2334208c'%3E%3C/polygon%3E%3Cpolygon points='81,26.39 61.44,14.41 34.43,35.7 65.35,100 70.44,89.8 81,26.39' fill='url(%23a)'%3E%3C/polygon%3E%3Cpolygon points='81,26.39 81,26.39 62.61,0 61.44,14.41 81,26.39' fill='%23af9ff4'%3E%3C/polygon%3E%3Cpolygon points='61.44,14.41 62.61,0 30.91,17.52 34.43,35.7 61.44,14.41' fill='%234a37a0'%3E%3C/polygon%3E%3Cpolygon points='34.43,35.7 37.57,90.47 65.35,100 34.43,35.7' fill='%234a37a0'%3E%3C/polygon%3E%3C/svg%3E") !important;
  --logo-icon-filled-flat: url("data:image/svg+xml,%3Csvg alt='Obsidian' viewBox='0 0 20 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23A88BFA' d='m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z'%3E%3C/path%3E%3C/svg%3E") !important;
  --logo-icon-filled-new: url("data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20height%3D%22100%25%22%20width%3D%22100%25%22%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3CradialGradient%20id%3D%22logo-bottom-left%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-59%20-225%20150%20-39%20161.4%20470)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.1%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-right%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(50%20-379%20280%2037%20360%20374.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.1%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-left%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(69%20-319%20218%2047%20175.4%20307)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-bottom-right%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-96%20-163%20187%20-111%20335.3%20512.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-36%20166%20-112%20-24%20310%20128.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-left-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(88%2089%20-190%20187%20111%20220.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-bottom-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(9%20130%20-276%2020%20215%20284)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-middle-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-198%20-104%20327%20-623%20400%20399.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CclipPath%20id%3D%22clip%22%3E%3Cpath%20d%3D%22M.2.2h512v512H.2z%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url(%23clip)%22%3E%3Cpath%20d%3D%22M382.3%20475.6c-3.1%2023.4-26%2041.6-48.7%2035.3-32.4-8.9-69.9-22.8-103.6-25.4l-51.7-4a34%2034%200%200%201-22-10.2l-89-91.7a34%2034%200%200%201-6.7-37.7s55-121%2057.1-127.3c2-6.3%209.6-61.2%2014-90.6%201.2-7.9%205-15%2011-20.3L248%208.9a34.1%2034.1%200%200%201%2049.6%204.3L386%20125.6a37%2037%200%200%201%207.6%2022.4c0%2021.3%201.8%2065%2013.6%2093.2%2011.5%2027.3%2032.5%2057%2043.5%2071.5a17.3%2017.3%200%200%201%201.3%2019.2%201494%201494%200%200%201-44.8%2070.6c-15%2022.3-21.9%2049.9-25%2073.1z%22%20fill%3D%22%236c31e3%22%2F%3E%3Cpath%20d%3D%22M165.9%20478.3c41.4-84%2040.2-144.2%2022.6-187-16.2-39.6-46.3-64.5-70-80-.6%202.3-1.3%204.4-2.2%206.5L60.6%20342a34%2034%200%200%200%206.6%2037.7l89.1%2091.7a34%2034%200%200%200%209.6%207z%22%20fill%3D%22url(%23logo-bottom-left)%22%2F%3E%3Cpath%20d%3D%22M278.4%20307.8c11.2%201.2%2022.2%203.6%2032.8%207.6%2034%2012.7%2065%2041.2%2090.5%2096.3%201.8-3.1%203.6-6.2%205.6-9.2a1536%201536%200%200%200%2044.8-70.6%2017%2017%200%200%200-1.3-19.2c-11-14.6-32-44.2-43.5-71.5-11.8-28.2-13.5-72-13.6-93.2%200-8.1-2.6-16-7.6-22.4L297.6%2013.2a34%2034%200%200%200-1.5-1.7%2096%2096%200%200%201%202%2054%20198.3%20198.3%200%200%201-17.6%2041.3l-7.2%2014.2a171%20171%200%200%200-19.4%2071c-1.2%2029.4%204.8%2066.4%2024.5%20115.8z%22%20fill%3D%22url(%23logo-top-right)%22%2F%3E%3Cpath%20d%3D%22M278.4%20307.8c-19.7-49.4-25.8-86.4-24.5-115.9a171%20171%200%200%201%2019.4-71c2.3-4.8%204.8-9.5%207.2-14.1%207.1-13.9%2014-27%2017.6-41.4a96%2096%200%200%200-2-54A34.1%2034.1%200%200%200%20248%209l-105.4%2094.8a34.1%2034.1%200%200%200-10.9%2020.3l-12.8%2085-.5%202.3c23.8%2015.5%2054%2040.4%2070.1%2080a147%20147%200%200%201%207.8%2024.8c28-6.8%2055.7-11%2082.1-8.3z%22%20fill%3D%22url(%23logo-top-left)%22%2F%3E%3Cpath%20d%3D%22M333.6%20511c22.7%206.2%2045.6-12%2048.7-35.4a187%20187%200%200%201%2019.4-63.9c-25.6-55-56.5-83.6-90.4-96.3-36-13.4-75.2-9-115%20.7%208.9%2040.4%203.6%2093.3-30.4%20162.2%204%201.8%208.1%203%2012.5%203.3%200%200%2024.4%202%2053.6%204.1%2029%202%2072.4%2017.1%20101.6%2025.2z%22%20fill%3D%22url(%23logo-bottom-right)%22%2F%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M254.1%20190c-1.3%2029.2%202.4%2062.8%2022.1%20112.1l-6.2-.5c-17.7-51.5-21.5-78-20.2-107.6a174.7%20174.7%200%200%201%2020.4-72c2.4-4.9%208-14.1%2010.5-18.8%207.1-13.7%2011.9-21%2016-33.6%205.7-17.5%204.5-25.9%203.8-34.1%204.6%2029.9-12.7%2056-25.7%2082.4a177.1%20177.1%200%200%200-20.7%2072z%22%20fill%3D%22url(%23logo-top-edge)%22%2F%3E%3Cpath%20d%3D%22M194.3%20293.4c2.4%205.4%204.6%209.8%206%2016.5L195%20311c-2.1-7.8-3.8-13.4-6.8-20-17.8-42-46.3-63.6-69.7-79.5%2028.2%2015.2%2057.2%2039%2075.7%2081.9z%22%20fill%3D%22url(%23logo-left-edge)%22%2F%3E%3Cpath%20d%3D%22M200.6%20315.1c9.8%2046-1.2%20104.2-33.6%20160.9%2027.1-56.2%2040.2-110.1%2029.3-160z%22%20fill%3D%22url(%23logo-bottom-edge)%22%2F%3E%3Cpath%20d%3D%22M312.5%20311c53.1%2019.9%2073.6%2063.6%2088.9%20100-19-38.1-45.2-80.3-90.8-96-34.8-11.8-64.1-10.4-114.3%201l-1.1-5c53.2-12.1%2081-13.5%20117.3%200z%22%20fill%3D%22url(%23logo-middle-edge)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E") !important;
  --logo-icon-line: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z'%3E%3C/path%3E%3C/svg%3E") !important;
  --logo-icon-line-new: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='none' stroke='black' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E") !important;
  --magnifier-bw-bases: 1.5 !important;
  --magnifier-bw-iframe: 1.5 !important;
  --magnifier-bw-pdfembed: 1.5 !important;
  --magnifier-bw-table: 1.5 !important;
  --margin-callout: 0.75em !important;
  --medium-transition: 300ms ease-in-out !important;
  --menu-background: oklch(0.95 0 0) !important;
  --menu-border-color: oklch(0.7 0 0) !important;
  --menu-font: "Manrope", "Inter 4.1", "DM Sans" !important;
  --menu-padding: 4px !important;
  --menu-radius: 6px !important;
  --menu-shadow: none !important;
  --metadata-border-color: oklch(0.8 0 0) !important;
  --metadata-divider-color: oklch(0.8 0 0) !important;
  --metadata-input-font: "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --metadata-input-text-color: oklch(0 0 0) !important;
  --metadata-label-font: "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --metadata-label-text-color: oklch(0.3 0 0) !important;
  --metadata-label-text-color-hover: oklch(0.3 0 0) !important;
  --metadata-padding: 0.25em 0.25em !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(0.6 0 0) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(0.7 0 0) !important;
  --metadata-property-radius: 3px !important;
  --metadata-property-radius-focus: 3px !important;
  --metadata-property-radius-hover: 3px !important;
  --mod-settings-left-column-spacing: 0px !important;
  --modal-background: oklch(1 0 0) !important;
  --modal-border-color: oklch(0.7 0 0) !important;
  --modal-border-width: 0 !important;
  --modal-height-community-plugin: 85vh !important;
  --modal-height-community-theme: 85vh !important;
  --modal-height-publish: 85vh !important;
  --modal-height-settings: 85vh !important;
  --modal-radius: 6px !important;
  --modal-sidebar-background: oklch(0.95 0 0) !important;
  --modal-width-community-plugin: 90vw !important;
  --modal-width-community-theme: 90vw !important;
  --modal-width-publish: 90vw !important;
  --modal-width-settings: 90vw !important;
  --nav-collapse-icon-color: oklch(0.6 0 0) !important;
  --nav-collapse-icon-color-collapsed: oklch(0.6 0 0) !important;
  --nav-heading-color: oklch(0 0 0) !important;
  --nav-heading-color-collapsed: oklch(0.6 0 0) !important;
  --nav-heading-color-collapsed-hover: oklch(0.3 0 0) !important;
  --nav-heading-color-hover: oklch(0 0 0) !important;
  --nav-item-background-selected: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 15%) !important;
  --nav-item-color: oklch(0.3 0 0) !important;
  --nav-item-color-active: oklch(0 0 0) !important;
  --nav-item-color-highlighted: oklch(40.14% 0.0638 202.51deg) !important;
  --nav-item-color-hover: oklch(0 0 0) !important;
  --nav-item-color-selected: oklch(0 0 0) !important;
  --nav-item-padding-left-no-icon: 12px !important;
  --nav-item-radius: 3px !important;
  --nav-padding: 0 2px 0 4px !important;
  --nav-tag-color: oklch(0.6 0 0) !important;
  --nav-tag-color-active: oklch(0.3 0 0) !important;
  --nav-tag-color-hover: oklch(0.3 0 0) !important;
  --nav-tag-radius: 3px !important;
  --nav-title-margin: 2px !important;
  --near-fade-factor: 0.15 !important;
  --opacity-sd: 100% !important;
  --p-root-number: 0.75 !important;
  --p-spacing: 0.75em !important;
  --p-spacing-root: 0.75rem !important;
  --padding-graph-control: 6px !important;
  --padding-headers: 0.15em 0.25em !important;
  --padding-headers-lr: 0.25em !important;
  --padding-headers-td: 0.15em !important;
  --padding-highlight-LR: 3px !important;
  --padding-highlight-TB: 2px !important;
  --padding-modal-side: 4px !important;
  --padding-multi-select: 2px !important;
  --padding-print: 2cm !important;
  --padding-ss: 0.75em !important;
  --pdf-background: oklch(1 0 0) !important;
  --pdf-page-background: oklch(1 0 0) !important;
  --pdf-sidebar-background: oklch(1 0 0) !important;
  --pill-border-color: oklch(0.8 0 0) !important;
  --pill-border-color-hover: oklch(0.7 0 0) !important;
  --pill-color: oklch(0.3 0 0) !important;
  --pill-color-hover: oklch(0 0 0) !important;
  --pill-color-remove: oklch(0.6 0 0) !important;
  --pill-color-remove-hover: oklch(40.14% 0.0638 202.51deg) !important;
  --pill-radius: 3px !important;
  --prompt-background: oklch(1 0 0) !important;
  --prompt-border-color: oklch(0.7 0 0) !important;
  --prompt-border-width: 0 !important;
  --prompt-padding: 6px !important;
  --quick-transition: 140ms ease-in-out !important;
  --quicker-transition: 70ms ease-in-out !important;
  --radius-callouts-gallery: 3px !important;
  --radius-callouts-img-grid: 3px !important;
  --radius-image: 3px !important;
  --radius-l: 9px !important;
  --radius-m: 6px !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, oklch(1 0 0) 65%, transparent) linear-gradient(oklch(1 0 0), color-mix(in srgb, oklch(1 0 0) 65%, transparent)) !important;
  --ratio-bw-bases-reading: 0.96 !important;
  --ratio-bw-bases-source: 1 !important;
  --ratio-bw-iframe-reading: 0.96 !important;
  --ratio-bw-iframe-source: 1 !important;
  --ratio-bw-pdfembed-reading: 0.96 !important;
  --ratio-bw-pdfembed-source: 1 !important;
  --ratio-bw-table-reading: 0.96 !important;
  --ratio-bw-table-source: 1 !important;
  --ribbon-background: oklch(0.95 0 0) !important;
  --ribbon-background-collapsed: oklch(1 0 0) !important;
  --ribbon-float-color: oklch(0.95 0 0) !important;
  --ribbon-padding: 4px !important;
  --ribbon-width: 36px !important;
  --sbb-divider-width: 1px !important;
  --scrollbar-bg: oklch(0.8 0 0) !important;
  --scrollbar-radius: 9px !important;
  --search-clear-button-color: oklch(0.3 0 0) !important;
  --search-icon-color: oklch(0.3 0 0) !important;
  --search-result-background: oklch(1 0 0) !important;
  --secondary: oklch(40.14% 0.0638 202.51deg) !important;
  --setting-group-heading-color: oklch(0 0 0) !important;
  --setting-heading: "Inter 4.1", "DM Sans", "Manrope" !important;
  --setting-items-background: oklch(0.98 0 0) !important;
  --setting-items-border-color: oklch(0.8 0 0) !important;
  --setting-items-radius: 9px !important;
  --settings-background: oklch(0.98 0 0) !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --shape-roundish: 6px !important;
  --sidebar-icon-padding: 5px !important;
  --sidebar-icon-size: 18px !important;
  --sidebar-icon-size-hover: 20.5px !important;
  --sidebar-padding-hover: 3.75px !important;
  --size-bw-bases: size * 1.5 !important;
  --size-bw-iframe: size * 1.5 !important;
  --size-bw-pdfembed: size * 1.5 !important;
  --size-bw-table: size * 1.5 !important;
  --size-scrollbar-non-native: 8px !important;
  --slider-thumb-border-color: oklch(0.7 0 0) !important;
  --slider-track-background: oklch(0.8 0 0) !important;
  --slow-transition: 560ms ease-in-out !important;
  --smallcap-font: "Inter 4.1", "DM Sans", "Manrope" !important;
  --spacing-comm-modal: 4px !important;
  --ssopt-bw-table-content-fit: 0 !important;
  --ssopt-callout-style: 0 !important;
  --ssopt-callouts-images-display: 0 !important;
  --ssopt-status-bar-full-style: 1 !important;
  --startup-background-image: 50px !important;
  --startup-obsidian-image: url("data:image/svg+xml,%3Csvg alt='Obsidian' viewBox='0 0 20 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23A88BFA' d='m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z'%3E%3C/path%3E%3C/svg%3E") !important;
  --status-bar-background: oklch(0.95 0 0) !important;
  --status-bar-border-color: oklch(0.8 0 0) !important;
  --status-bar-bottom-float-margin: 8px !important;
  --status-bar-full-justify-content: right !important;
  --status-bar-glass-blur: 4px !important;
  --status-bar-max-width: 85% !important;
  --status-bar-min-height: 21.86667px !important;
  --status-bar-min-height-intermediary: 13.86667px !important;
  --status-bar-padding: 4px !important;
  --status-bar-position: absolute !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-shift-workspace-padding-bottom: 30.86667px !important;
  --status-bar-text-color: oklch(0.3 0 0) !important;
  --suggestion-background: oklch(1 0 0) !important;
  --tab-background-active: oklch(1 0 0) !important;
  --tab-container-background: oklch(0.95 0 0) !important;
  --tab-divider-color: oklch(0.7 0 0) !important;
  --tab-focus-border-width: 1px !important;
  --tab-icon-size: 14px !important;
  --tab-icon-size-hover: 17.5px !important;
  --tab-outline-color: oklch(0.8 0 0) !important;
  --tab-outline-width: 0px !important;
  --tab-padding: 7px !important;
  --tab-padding-hover: 5.25px !important;
  --tab-radius: 3px !important;
  --tab-stacked-header-width: 36px !important;
  --tab-stacked-shadow: -1px 0 0 0 oklch(0.8 0 0) !important;
  --tab-switcher-background: oklch(0.95 0 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(0.95 0 0), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px oklch(40.14% 0.0638 202.51deg) !important;
  --tab-text-color: oklch(0.6 0 0) !important;
  --tab-text-color-active: oklch(0.3 0 0) !important;
  --tab-text-color-focused: oklch(0.3 0 0) !important;
  --tab-text-color-focused-active: oklch(0.3 0 0) !important;
  --tab-text-color-focused-active-current: oklch(40.14% 0.0638 202.51deg) !important;
  --tab-text-color-focused-highlighted: oklch(40.14% 0.0638 202.51deg) !important;
  --table-add-button-border-color: oklch(0.8 0 0) !important;
  --table-border-color: oklch(0.8 0 0) !important;
  --table-drag-handle-background-active: oklch(70.7% 0.1737 155.3deg) !important;
  --table-drag-handle-color: oklch(0.6 0 0) !important;
  --table-drag-handle-size: 16px !important;
  --table-header-background: oklch(0.95 0 0) !important;
  --table-header-background-hover: rgba(0, 0, 0, 0.067) !important;
  --table-header-border-color: oklch(0.8 0 0) !important;
  --table-header-color: oklch(0 0 0) !important;
  --table-selection: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 10%) !important;
  --table-selection-blend-mode: normal !important;
  --table-selection-border-color: oklch(70.7% 0.1737 155.3deg) !important;
  --tag-background: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 10%) !important;
  --tag-background-hover: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 20%) !important;
  --tag-border-color: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 15%) !important;
  --tag-border-color-hover: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 15%) !important;
  --tag-color: oklch(40.14% 0.0638 202.51deg) !important;
  --tag-color-hover: oklch(40.14% 0.0638 202.51deg) !important;
  --tag-radius: 3px !important;
  --tertiary: oklch(82.77% 0.1667 79.6deg) !important;
  --text-accent: oklch(40.14% 0.0638 202.51deg) !important;
  --text-accent-hover: oklch(82.77% 0.1667 79.6deg) !important;
  --text-error-hover: oklch(from #e93147 calc(l - 0.1) c calc(h + 4)) !important;
  --text-faint: oklch(0.6 0 0) !important;
  --text-highlight-bg: hsl(46deg 100% 50%) !important;
  --text-highlight-bg-active: hsl(76deg 100% 50%) !important;
  --text-message-progress-bar: oklch(0 0 0) !important;
  --text-muted: oklch(0.3 0 0) !important;
  --text-normal: oklch(0 0 0) !important;
  --text-selection: oklch(80.92% 0.170357 75.4802deg) !important;
  --textHighlight: hsl(46deg 100% 50%) !important;
  --theme-alternative-checkboxes: disable !important;
  --titleFont: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope" !important;
  --titlebar-background: oklch(0.95 0 0) !important;
  --titlebar-background-focused: oklch(0.93 0 0) !important;
  --titlebar-border-color: oklch(0.8 0 0) !important;
  --titlebar-text-color: oklch(0.3 0 0) !important;
  --titlebar-text-color-focused: oklch(0 0 0) !important;
  --toggle-border-width: 0 !important;
  --toggle-s-border-width: 0px !important;
  --touch-radius-l: 9px !important;
  --touch-radius-m: 6px !important;
  --touch-radius-s: 3px !important;
  --touch-radius-xl: 9px !important;
  --touch-radius-xs: 3px !important;
  --touch-radius-xxs: 3px !important;
  --traffic-lights-offset-x: 36px !important;
  --traffic-lights-offset-y: 36px !important;
  --ui-font: "Manrope", "Inter 4.1", "DM Sans" !important;
  --vault-profile-color: oklch(0 0 0) !important;
  --vault-profile-color-hover: oklch(0 0 0) !important;
  --width-norm-sd: 36px !important;
  --width-vll: 700px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.95 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: oklch(0.8 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: oklch(0.95 0 0);
  border-color: oklch(0.8 0 0);
}

html[saved-theme="light"] body .note-properties {
  background-color: oklch(0.98 0 0);
  border-color: oklch(0.8 0 0);
  border-radius: 3px;
}

html[saved-theme="light"] body .note-properties-key {
  color: oklch(0.3 0 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: oklch(0.3 0 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: oklch(0.707 0.1737 155.3 / 0.1);
  border-radius: 3px;
  color: oklch(0.4014 0.0638 202.51);
}

html[saved-theme="light"] body .note-properties-value {
  color: oklch(0.3 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.98 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.8 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.95 0 0);
  border-left-color: oklch(0.8 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(255, 195, 0);
  box-shadow: rgb(255, 195, 0) 3px 0px 0px 0px, rgb(255, 195, 0) -3px 0px 0px 0px, rgb(255, 195, 0) 0px 2px 0px 0px, rgb(255, 195, 0) 0px -2px 0px 0px, rgb(255, 195, 0) 3px 2px 0px 0px, rgb(255, 195, 0) -3px 2px 0px 0px, rgb(255, 195, 0) 3px -2px 0px 0px, rgb(255, 195, 0) -3px -2px 0px 0px;
  color: rgb(0, 0, 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body h1.article-title {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.6 0 0);
  border-radius: 800px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: oklch(0.707 0.1737 155.3);
  border-color: oklch(0.707 0.1737 155.3);
}

html[saved-theme="light"] body p {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.3 0 0) none 0px;
  text-decoration-color: oklch(0.3 0 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: oklch(0.4014 0.0638 202.51);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.4014 0.0638 202.51) none 0px;
  text-decoration-color: oklch(0.4014 0.0638 202.51);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.4014 0.0638 202.51);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.4014 0.0638 202.51) none 0px;
  text-decoration-color: oklch(0.4014 0.0638 202.51);
}

html[saved-theme="light"] body a.internal.broken {
  color: oklch(0.4014 0.0638 202.51);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.4014 0.0638 202.51) none 0px;
  text-decoration: underline oklch(0.707 0.1737 155.3 / 0.3);
  text-decoration-color: oklch(0.707 0.1737 155.3 / 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body dt {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ol > li {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body ul > li {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: oklch(0.6 0 0);
}

html[saved-theme="light"] body blockquote {
  background-color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body table {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  margin-top: 12px;
  width: 194.844px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: oklch(0.98 0 0);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body td {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body tr {
  background-color: oklch(0.95 0 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
  font-family: "??", "DM Mono", "DM Mono";
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body figcaption {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body figure {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: oklch(0.975 0.03 202.51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.975 0.03 202.51);
  border-radius: 3px;
  border-right-color: oklch(0.975 0.03 202.51);
  border-top-color: oklch(0.975 0.03 202.51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body video {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: oklch(0.98 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: oklch(0.6 0 0);
  border-bottom-left-radius: 800px;
  border-bottom-right-radius: 800px;
  border-left-color: oklch(0.6 0 0);
  border-right-color: oklch(0.6 0 0);
  border-top-color: oklch(0.6 0 0);
  border-top-left-radius: 800px;
  border-top-right-radius: 800px;
  margin-right: 8.64px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZWNrLWljb24gbHVjaWRlLWNoZWNrIj48cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 191, 111);
  border-left-color: rgb(0, 191, 111);
  border-right-color: rgb(0, 191, 111);
  border-top-color: rgb(0, 191, 111);
  color: rgb(0, 191, 111);
  gap: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: oklch(0.556977 0.147662 155.298);
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: oklch(0.98 0 0);
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 91, 197, 219;
  background-color: rgba(91, 197, 219, 0.125);
  border-bottom-color: oklch(0.769486 0.101807 213.336);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(91, 197, 219);
  border-right-color: oklch(0.769486 0.101807 213.336);
  border-top-color: oklch(0.769486 0.101807 213.336);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 164, 103, 80;
  background-color: rgba(164, 103, 80, 0.125);
  border-bottom-color: oklch(0.574678 0.0862167 41.3581);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(164, 103, 80);
  border-right-color: oklch(0.574678 0.0862167 41.3581);
  border-top-color: oklch(0.574678 0.0862167 41.3581);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 241, 0, 34;
  background-color: rgba(241, 0, 34, 0.125);
  border-bottom-color: oklch(0.603113 0.245165 26.0478);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(241, 0, 34);
  border-right-color: oklch(0.603113 0.245165 26.0478);
  border-top-color: oklch(0.603113 0.245165 26.0478);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 125, 84, 178;
  background-color: rgba(125, 84, 178, 0.125);
  border-bottom-color: oklch(0.533426 0.145746 301.824);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(125, 84, 178);
  border-right-color: oklch(0.533426 0.145746 301.824);
  border-top-color: oklch(0.533426 0.145746 301.824);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 161, 40, 100;
  background-color: rgba(161, 40, 100, 0.125);
  border-bottom-color: oklch(0.486198 0.165246 354.992);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(161, 40, 100);
  border-right-color: oklch(0.486198 0.165246 354.992);
  border-top-color: oklch(0.486198 0.165246 354.992);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 170, 199;
  background-color: rgba(0, 170, 199, 0.125);
  border-bottom-color: oklch(0.679659 0.12046 215.674);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 170, 199);
  border-right-color: oklch(0.679659 0.12046 215.674);
  border-top-color: oklch(0.679659 0.12046 215.674);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 0, 191, 111;
  background-color: rgba(0, 191, 111, 0.125);
  border-bottom-color: oklch(0.706977 0.17372 155.298);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 111);
  border-right-color: oklch(0.706977 0.17372 155.298);
  border-top-color: oklch(0.706977 0.17372 155.298);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 160, 199, 92;
  background-color: rgba(160, 199, 92, 0.125);
  border-bottom-color: oklch(0.778581 0.14226 126.137);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(160, 199, 92);
  border-right-color: oklch(0.778581 0.14226 126.137);
  border-top-color: oklch(0.778581 0.14226 126.137);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 161, 169, 173;
  background-color: rgba(161, 169, 173, 0.125);
  border-bottom-color: oklch(0.729638 0.0107493 229.031);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(161, 169, 173);
  border-right-color: oklch(0.729638 0.0107493 229.031);
  border-top-color: oklch(0.729638 0.0107493 229.031);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 158, 76;
  background-color: rgba(0, 158, 76, 0.125);
  border-bottom-color: oklch(0.611776 0.164621 150.979);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 158, 76);
  border-right-color: oklch(0.611776 0.164621 150.979);
  border-top-color: oklch(0.611776 0.164621 150.979);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 34, 148, 1;
  background-color: rgba(34, 148, 1, 0.125);
  border-bottom-color: oklch(0.581688 0.190619 140.918);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(34, 148, 1);
  border-right-color: oklch(0.581688 0.190619 140.918);
  border-top-color: oklch(0.581688 0.190619 140.918);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 170, 199;
  background-color: rgba(0, 170, 199, 0.125);
  border-bottom-color: oklch(0.679659 0.12046 215.674);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 170, 199);
  border-right-color: oklch(0.679659 0.12046 215.674);
  border-top-color: oklch(0.679659 0.12046 215.674);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 182, 26;
  background-color: rgba(255, 182, 26, 0.125);
  border-bottom-color: oklch(0.823918 0.166913 78.6263);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 182, 26);
  border-right-color: oklch(0.823918 0.166913 78.6263);
  border-top-color: oklch(0.823918 0.166913 78.6263);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v4'/%3E%3Cpath d='m16.2 7.8 2.9-2.9'/%3E%3Cpath d='M18 12h4'/%3E%3Cpath d='m16.2 16.2 2.9 2.9'/%3E%3Cpath d='M12 18v4'/%3E%3Cpath d='m4.9 19.1 2.9-2.9'/%3E%3Cpath d='M2 12h4'/%3E%3Cpath d='m4.9 4.9 2.9 2.9'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="aside"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="attachment"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m18 16 4-4-4-4'/%3E%3Cpath d='m6 8-4 4 4 4'/%3E%3Cpath d='m14.5 4-5 16'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="columns"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2'/%3E%3Cpath d='M12 3v18'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="email"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="file"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="goal"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="images"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="infobox"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="kanban"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="link"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="mail"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="minus"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="negative"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="phone"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="plus"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='M12 5v14'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="positive"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3Cpath d='M12 5v14'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 6v12'/%3E%3Cpath d='M17.196 9 6.804 15'/%3E%3Cpath d='m6.804 9 10.392 6'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="url"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: oklch(0.99 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.8 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.8 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: oklch(0 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.7 0 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.7 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.7 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.7 0 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.7 0 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.7 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.7 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.7 0 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.95 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.707 0.1737 155.3 / 0.1);
  border-bottom-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-right-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-top-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: oklch(0.4014 0.0638 202.51);
}

html[saved-theme="light"] body h1 {
  color: oklch(0.975 0.03 202.51);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="light"] body h2 {
  color: oklch(0.3 0.03 155.3);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body h3 {
  color: oklch(0.3 0.03 79.6);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="light"] body h4 {
  color: oklch(0.975 0.03 202.51);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="light"] body h5 {
  color: oklch(0.3 0.03 155.3);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="light"] body h6 {
  color: oklch(0.3 0.03 79.6);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 0, 191, 111;
  border-bottom-color: oklch(0.706977 0.17372 155.298);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 111);
  border-right-color: oklch(0.706977 0.17372 155.298);
  border-top-color: oklch(0.706977 0.17372 155.298);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: oklch(0 0 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.3 0 0);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: oklch(0.95 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-right-width: 1px;
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(0.3 0 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: oklch(0 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.3 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.3 0 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: oklch(0.4014 0.0638 202.51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.4014 0.0638 202.51);
  border-right-color: oklch(0.4014 0.0638 202.51);
  border-top-color: oklch(0.4014 0.0638 202.51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.4014 0.0638 202.51);
}

html[saved-theme="light"] body .darkmode svg {
  color: oklch(0.4014 0.0638 202.51);
  stroke: oklch(0.4014 0.0638 202.51);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.3 0 0);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: oklch(0.6 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .metadata {
  background-color: oklch(0.98 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.3 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  color: oklch(0.3 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: oklch(0.95 0 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: oklch(0 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body abbr {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

html[saved-theme="light"] body kbd {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0 0 0);
  font-family: "??", "DM Mono", "DM Mono";
  padding-bottom: 2px;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body sub {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body summary {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body sup {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: oklch(0.707 0.1737 155.3 / 0.1);
  border-bottom-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-right-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-top-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.4014 0.0638 202.51);
}`,
  },
  extras: `@keyframes blinker {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}

/* Cycles through H1-H6 header colors — content property changes are CSS-only, no JS */
@keyframes changeHeaderNum {
  0%,
  100% {
    content: "H1";
    color: var(--col-h1);
    background-color: var(--col-h1-bg);
  }
  16.67% {
    content: "H2";
    color: var(--col-h2);
    background-color: var(--col-h2-bg);
  }
  33.33% {
    content: "H3";
    color: var(--col-h3);
    background-color: var(--col-h3-bg);
  }
  50% {
    content: "H4";
    color: var(--col-h4);
    background-color: var(--col-h4-bg);
  }
  66.67% {
    content: "H5";
    color: var(--col-h5);
    background-color: var(--col-h5-bg);
  }
  83.33% {
    content: "H6";
    color: var(--col-h6);
    background-color: var(--col-h6-bg);
  }
}

@keyframes header-hex-color-snap {
  0%,
  100% {
    background-color: var(--col-h1-bg);
  }
  16.67% {
    background-color: var(--col-h2-bg);
  }
  33.33% {
    background-color: var(--col-h3-bg);
  }
  50% {
    background-color: var(--col-h4-bg);
  }
  66.67% {
    background-color: var(--col-h5-bg);
  }
  83.33% {
    background-color: var(--col-h6-bg);
  }
}

@keyframes color-snap {
  0%,
  100% {
    background-color: var(--col-highlight-0);
  }
  25% {
    background-color: var(--col-highlight-1);
  }
  50% {
    background-color: var(--col-highlight-2);
  }
  75% {
    background-color: var(--col-highlight-3);
  }
}

/* Rainbow rotation through oklch color space */
@keyframes header-color-rotate {
  0%,
  100% {
    color: oklch(
      from var(--color-red) calc(l + var(--text-lightness-mod))
        calc(c * var(--text-chroma-mod)) h
    );
    background-color: oklch(from var(--color-red) l c h / 80%);
  }
  12.5% {
    color: oklch(
      from var(--color-orange) calc(l + var(--text-lightness-mod))
        calc(c * var(--text-chroma-mod)) h
    );
    background-color: oklch(from var(--color-orange) l c h / 80%);
  }
  25% {
    color: oklch(
      from var(--color-yellow) calc(l + var(--text-lightness-mod))
        calc(c * var(--text-chroma-mod)) h
    );
    background-color: oklch(from var(--color-yellow) l c h / 80%);
  }
  37.5% {
    color: oklch(
      from var(--color-green) calc(l + var(--text-lightness-mod))
        calc(c * var(--text-chroma-mod)) h
    );
    background-color: oklch(from var(--color-green) l c h / 80%);
  }
  50% {
    color: oklch(
      from var(--color-cyan) calc(l + var(--text-lightness-mod))
        calc(c * var(--text-chroma-mod)) h
    );
    background-color: oklch(from var(--color-cyan) l c h / 80%);
  }
  62.5% {
    color: oklch(
      from var(--color-blue) calc(l + var(--text-lightness-mod))
        calc(c * var(--text-chroma-mod)) h
    );
    background-color: oklch(from var(--color-blue) l c h / 80%);
  }
  75% {
    color: oklch(
      from var(--color-purple) calc(l + var(--text-lightness-mod))
        calc(c * var(--text-chroma-mod)) h
    );
    background-color: oklch(from var(--color-purple) l c h / 80%);
  }
  87.5% {
    color: oklch(
      from var(--color-pink) calc(l + var(--text-lightness-mod))
        calc(c * var(--text-chroma-mod)) h
    );
    background-color: oklch(from var(--color-pink) l c h / 80%);
  }
}
`,
};
