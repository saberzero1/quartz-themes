import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retroma",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-1: oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) !important;
  --accent-2: oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) !important;
  --background-modifier-border: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --background-modifier-border-focus: oklch(
    from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) 70% c h
  ) !important;
  --background-modifier-error: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --background-modifier-error-hover: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --background-modifier-success: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --background-paper: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 0.24 calc(c * 0.3)
      h
  ) !important;
  --background-primary: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --background-primary-alt: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.04)
      calc(c * 0.3) h
  ) !important;
  --background-secondary: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) !important;
  --background-secondary-alt: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) calc(0.24 - 0.08)
      calc(c * 0.3) h
  ) !important;
  --background-tertiary: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) !important;
  --base-accent: oklch(from hsl(258, 88%, 66%) l c h) !important;
  --bases-cards-background: oklch(from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) 25% c h) !important;
  --bases-cards-border-width: 4px !important;
  --bases-cards-cover-background: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.04)
      calc(c * 0.3) h
  ) !important;
  --bases-cards-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --bases-embed-border-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --bases-embed-border-radius: 12px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: oklch(from #dadada 50% c h / 50%) !important;
  --bases-table-cell-background-active: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --bases-table-cell-background-disabled: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.04)
      calc(c * 0.3) h
  ) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) 70% c h
  ) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.04)
      calc(c * 0.3) h
  ) !important;
  --bases-table-header-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --bases-table-header-weight: 100 !important;
  --bases-table-summary-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --blockquote-background-color: oklch(
    from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h / 40%
  ) !important;
  --blockquote-border-color: oklch(from oklch(from hsl(258, 88%, 66%) l c h) 50% c h / 75%) !important;
  --blockquote-border-thickness: 4px !important;
  --bold-color: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(70% + 10%) 20%
      calc(h + 100)
  ) !important;
  --border-groove: 4px groove oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.04)
      calc(c * 0.3) h
  ) !important;
  --border-ridge: 4px ridge oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --border-solid: 4px solid oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ) !important;
  --box-shadow: inset -2px -2px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 0% c h),
    inset 2px 2px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 50% c h) !important;
  --box-shadow-active: inset 2px 2px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 0% c h),
    inset -2px -2px oklch(from oklch(from hsl(258, 88%, 66%) l c h) 50% c h) !important;
  --box-shadow-active-sm: inset 1px 1px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 0% c h),
    inset -1px -1px oklch(from oklch(from hsl(258, 88%, 66%) l c h) 50% c h) !important;
  --box-shadow-sm: inset -1px -1px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 0% c h),
    inset 1px 1px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 50% c h) !important;
  --button-active: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 25% c h) !important;
  --button-border-radius: 8px !important;
  --button-hover: oklch(from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 0.24 calc(c * 0.3)
      h
  ) l c h) !important;
  --button-normal: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --button-radius: 12px !important;
  --button-text: #dadada !important;
  --callout-border-width: 4px;
  --callout-radius: 12px;
  --canvas-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 0.24 calc(c * 0.3)
      h
  ) !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: oklch(
    from #dadada l c h / 0.3
  ) !important;
  --checkbox-color: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) !important;
  --checkbox-color-hover: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) calc(0.24 - 0.08)
      calc(c * 0.3) h
  ) !important;
  --checkbox-marker-color: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 0.24 calc(c * 0.3)
      h
  ) !important;
  --checkbox-radius: 12px !important;
  --chroma: 20% !important;
  --chroma-accent: 0.3 !important;
  --chroma-folder: 20% !important;
  --clickable-icon-radius: 8px !important;
  --code-background: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 10% c h / 50%) !important;
  --code-border-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --code-function: oklch(
    from #ffeb3b 70% 20% h
  ) !important;
  --code-important: oklch(
    from #ff9800 70% 20% h
  ) !important;
  --code-operator: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --code-property: oklch(
    from #00bcd4 70% 20% h
  ) !important;
  --code-radius: 12px !important;
  --code-string: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --code-tag: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --code-value: oklch(
    from #673ab7 70% 20% h
  ) !important;
  --collapse-icon-color: #b3b3b3 !important;
  --collapse-icon-color-collapsed: #666666 !important;
  --color-amber: oklch(
    from #ffb300 70% 20% h
  ) !important;
  --color-blue: oklch(
    from #2196f3 70% 20% h
  ) !important;
  --color-cyan: oklch(
    from #00bcd4 70% 20% h
  ) !important;
  --color-green: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --color-indigo: oklch(
    from #3f51b5 70% 20% h
  ) !important;
  --color-lime: oklch(
    from #8bc34a 70% 20% h
  ) !important;
  --color-magenta: oklch(
    from #e91e63 70% 20% h
  ) !important;
  --color-orange: oklch(
    from #ff9800 70% 20% h
  ) !important;
  --color-purple: oklch(
    from #673ab7 70% 20% h
  ) !important;
  --color-red: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --color-rose: oklch(
    from #f48fb1 70% 20% h
  ) !important;
  --color-teal: oklch(
    from #009688 70% 20% h
  ) !important;
  --color-vermillion: oklch(
    from #ff5722 70% 20% h
  ) !important;
  --color-violet: oklch(
    from #9c27b0 70% 20% h
  ) !important;
  --color-yellow: oklch(
    from #ffeb3b 70% 20% h
  ) !important;
  --divider-color: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h), inset 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --file-header-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --file-header-background-focused: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) !important;
  --file-margins: 16px !important;
  --folder-accent: oklch(from hsl(258, 88%, 66%) l c h) !important;
  --folder-color-1: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --folder-color-10: oklch(
    from #8bc34a 70% 20% h
  ) !important;
  --folder-color-11: oklch(
    from #009688 70% 20% h
  ) !important;
  --folder-color-12: oklch(
    from #673ab7 70% 20% h
  ) !important;
  --folder-color-13: oklch(
    from #e91e63 70% 20% h
  ) !important;
  --folder-color-14: oklch(
    from #f48fb1 70% 20% h
  ) !important;
  --folder-color-15: oklch(
    from #00bcd4 70% 20% h
  ) !important;
  --folder-color-2: oklch(
    from #ff9800 70% 20% h
  ) !important;
  --folder-color-3: oklch(
    from #ffeb3b 70% 20% h
  ) !important;
  --folder-color-4: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --folder-color-5: oklch(
    from #2196f3 70% 20% h
  ) !important;
  --folder-color-6: oklch(
    from #3f51b5 70% 20% h
  ) !important;
  --folder-color-7: oklch(
    from #9c27b0 70% 20% h
  ) !important;
  --folder-color-8: oklch(
    from #ff5722 70% 20% h
  ) !important;
  --folder-color-9: oklch(
    from #ffb300 70% 20% h
  ) !important;
  --footnote-divider-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --footnote-radius: 8px !important;
  --graph-node-attachment: oklch(
    from #ffeb3b 70% 20% h
  ) !important;
  --graph-node-tag: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --h1-color: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --h2-color: oklch(
    from #ff9800 70% 20% h
  ) !important;
  --h3-color: oklch(
    from #ffeb3b 70% 20% h
  ) !important;
  --h4-color: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --h5-color: oklch(
    from #2196f3 70% 20% h
  ) !important;
  --h6-color: oklch(
    from #3f51b5 70% 20% h
  ) !important;
  --header-height: 48px !important;
  --highlight: oklch(from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) 50% 20% h / 75%) !important;
  --hr-color: oklch(from #dadada l c h / 25%) !important;
  --hue-amber: #ffb300 !important;
  --hue-blue: #2196f3 !important;
  --hue-cyan: #00bcd4 !important;
  --hue-green: #4caf50 !important;
  --hue-indigo: #3f51b5 !important;
  --hue-lime: #8bc34a !important;
  --hue-magenta: #e91e63 !important;
  --hue-orange: #ff9800 !important;
  --hue-purple: #673ab7 !important;
  --hue-red: #d32f2f !important;
  --hue-rose: #f48fb1 !important;
  --hue-teal: #009688 !important;
  --hue-vermillion: #ff5722 !important;
  --hue-violet: #9c27b0 !important;
  --hue-yellow: #ffeb3b !important;
  --img-border-color: oklch(from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) l 20% h) !important;
  --img-border-radius: 0px !important;
  --img-border-width: 0px !important;
  --inline-title-color: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --input-border-width: 2px !important;
  --input-radius: 12px !important;
  --interactive-active: oklch(from oklch(from hsl(258, 88%, 66%) l c h) 50% c h / 50%) !important;
  --italic-color: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(70% + 10%) 20%
      calc(h + 200)
  ) !important;
  --light: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --lightgray: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) !important;
  --lightness: 70% !important;
  --lightness-accent: 0.24 !important;
  --link-color: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) 80% 20% h
  ) !important;
  --link-color-hover: oklch(
    from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) 80% 20% h
  ) 80% 20% h / 80%
  ) !important;
  --link-external-color: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --link-external-color-hover: oklch(
    from oklch(
    from #d32f2f 70% 20% h
  ) 70% 20% h / 80%
  ) !important;
  --link-unresolved-color: oklch(
    from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) 80% 20% h
  ) 80% 20% h / 60%
  ) !important;
  --link-weight: 700 !important;
  --menu-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 0.24 calc(c * 0.3)
      h
  ) !important;
  --metadata-background: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h / 75%) !important;
  --metadata-border-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --metadata-border-radius: 12px !important;
  --metadata-divider-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --metadata-gap: 8px !important;
  --metadata-label-background: oklch(
    from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) l c h / 15%
  ) !important;
  --metadata-label-background-active: oklch(
    from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) l c h / 30%
  ) !important;
  --metadata-label-background-hover: oklch(
    from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) l c h / 30%
  ) !important;
  --metadata-label-font-weight: 700 !important;
  --metadata-label-width: 8em !important;
  --metadata-property-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 0.24 calc(c * 0.3)
      h
  ) !important;
  --metadata-property-background-hover: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 0.24 calc(c * 0.3)
      h
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) 70% c h
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) !important;
  --metadata-property-radius: 12px !important;
  --metadata-property-radius-focus: 12px !important;
  --metadata-property-radius-hover: 12px !important;
  --mobile-sidebar-width: 100% !important;
  --modal-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --nav-collapse-icon-color: #b3b3b3 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-selected: oklch(from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 45% c h / 75%) !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #b3b3b3 !important;
  --nav-tag-radius: 8px !important;
  --outline-color: oklch(from oklch(from hsl(258, 88%, 66%) l c h) 25% c h) !important;
  --pdf-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --pdf-page-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --pdf-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --pdf-sidebar-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --pill-border-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --prompt-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --radius-s: 8px !important;
  --radius-xs: 8px !important;
  --radius-xxs: 8px !important;
  --retroma-canvas-card-border-width: 3px !important;
  --retroma-canvas-card-embed-border-width: 3px !important;
  --retroma-canvas-dot-opacity: 0.3 !important;
  --retroma-canvas-node-content-bg-opacity: 0.25 !important;
  --retroma-folder-bg-color: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --retroma-folder-border: 1px solid
    oklch(from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 55% 20% h / 50%) !important;
  --retroma-folder-box-shadow: -1px 1px 0px oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) !important;
  --ribbon-background: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) !important;
  --ribbon-background-collapsed: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) !important;
  --rotation-1: 30 !important;
  --rotation-2: 330 !important;
  --search-result-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --setting-items-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --setting-items-border-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --settings-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 0.24 calc(c * 0.3)
      h
  ) !important;
  --slider-track-background: oklch(from oklch(from hsl(258, 88%, 66%) l c h) 50% c h / 50%) !important;
  --slider-track-height: 6px !important;
  --status-bar-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ) !important;
  --status-bar-border-color: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ) !important;
  --strong-emphasis: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(70% + 10%) 20%
      calc(h + 200)
  ) !important;
  --suggestion-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --sync-avatar-color-1: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --sync-avatar-color-2: oklch(
    from #ff9800 70% 20% h
  ) !important;
  --sync-avatar-color-3: oklch(
    from #ffeb3b 70% 20% h
  ) !important;
  --sync-avatar-color-4: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --sync-avatar-color-5: oklch(
    from #00bcd4 70% 20% h
  ) !important;
  --sync-avatar-color-6: oklch(
    from #2196f3 70% 20% h
  ) !important;
  --sync-avatar-color-7: oklch(
    from #673ab7 70% 20% h
  ) !important;
  --tab-background-active: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ) !important;
  --tab-container-background: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) !important;
  --tab-outline-color: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ) !important;
  --tab-radius: 8px !important;
  --tab-stacked-header-width: 48px !important;
  --tab-switcher-background: oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ), transparent) !important;
  --tab-switcher-preview-radius: 12px !important;
  --table-add-button-border-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --table-border-color: oklch(from #dadada 50% c h / 50%) !important;
  --table-border-spacing: 2px !important;
  --table-data-background: oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c h / 7%) !important;
  --table-header-background: oklch(from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) 50% c h / 30%) !important;
  --table-header-border-color: oklch(from #dadada 50% c h / 50%) !important;
  --tag-border-width: 1px !important;
  --tag-color: oklch(from oklch(from hsl(258, 88%, 66%) l c h) 80% c h / 75%) !important;
  --tag-radius: 8px !important;
  --text-error: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --text-highlight-bg: oklch(from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) 50% 20% h / 75%) !important;
  --text-selection: oklch(from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 330)) 45% c h / 75%) !important;
  --text-success: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --text-warning: oklch(
    from #ff9800 70% 20% h
  ) !important;
  --textHighlight: oklch(from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) 50% 20% h / 75%) !important;
  --titlebar-background: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ) !important;
  --titlebar-background-focused: oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 30)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ) !important;
  --titlebar-border-color: oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h) !important;
  --touch-radius-m: 8px !important;
  --touch-radius-s: 8px !important;
  --touch-radius-xs: 8px !important;
  --touch-radius-xxs: 8px !important;
  --traffic-lights-offset-x: 48px !important;
  --traffic-lights-offset-y: 48px !important;
  --window-border-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.18 0.0651659 292.489);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: oklch(0.24 0.0651659 262.49);
}

html[saved-theme="dark"] body .bases-table {
  border-color: oklch(0.22 0.0651659 262.49);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.5 0.000044365 23.517 / 0.5);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: oklch(0.18 0.0651659 292.489);
  border-color: oklch(0.2 0.0651659 292.489);
}

html[saved-theme="dark"] body .note-properties {
  background-color: oklch(0.18 0.0651659 292.489 / 0.75);
  border-color: oklch(0.22 0.0651659 262.49);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 8px;
  color: oklch(0.8 0.21722 292.489 / 0.75);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.22 0.0651659 262.49);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.12 0.0651659 322.489);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.18 0.0651659 292.489);
  border-left-color: oklch(0.12 0.0651659 322.489);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: oklch(0.22 0.0651659 262.49);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: oklch(0.8 0.08 32.4895);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8 0.08 32.4895) none 0px;
  text-decoration-color: oklch(0.8 0.08 32.4895);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: oklch(0.8 0.08 132.489);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8 0.08 132.489) none 0px;
  text-decoration-color: oklch(0.8 0.08 132.489);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: oklch(0.8 0.08 132.489);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8 0.08 132.489) none 0px;
  text-decoration-color: oklch(0.8 0.08 132.489);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: oklch(0.8 0.08 32.4895);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8 0.08 32.4895) none 0px;
  text-decoration-color: oklch(0.8 0.08 32.4895);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: oklch(0.5 0.08 322.489 / 0.75);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body del {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  font-weight: 700;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: oklch(0.7 0.08 26.4067);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.7 0.08 26.4067) none 0px;
  text-decoration-color: oklch(0.7 0.08 26.4067);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.8 0.08 292.489);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.8 0.08 292.489) none 0px;
  text-decoration-color: oklch(0.8 0.08 292.489);
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.8 0.08 292.489 / 0.6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.8 0.08 292.489 / 0.6) none 0px;
}`,
    lists: `html[saved-theme="dark"] body ol.overflow {
  border-bottom-style: ridge;
  border-left-style: ridge;
  border-right-style: ridge;
  border-top-style: ridge;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-style: ridge;
  border-left-style: ridge;
  border-right-style: ridge;
  border-top-style: ridge;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: oklch(0.18 0.0651659 292.489 / 0.4);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-color: oklch(0.22 0.0651659 262.49);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 262.49);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 262.49);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 262.49);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  width: 240.219px;
}

html[saved-theme="dark"] body td {
  background-color: oklch(0.603458 0.21722 292.489 / 0.07);
  border-bottom-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-left-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-right-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-top-color: oklch(0.5 0.000044365 23.517 / 0.5);
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-left-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-right-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-top-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-top-left-radius: 12px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: oklch(0.22 0.0651659 262.49);
  border-left-color: oklch(0.22 0.0651659 262.49);
  border-right-color: oklch(0.22 0.0651659 262.49);
  border-top-color: oklch(0.22 0.0651659 262.49);
}

html[saved-theme="dark"] body tr {
  background-color: oklch(0.5 0.21722 322.489 / 0.3);
  border-bottom-color: oklch(0.22 0.0651659 262.49);
  border-left-color: oklch(0.22 0.0651659 262.49);
  border-right-color: oklch(0.22 0.0651659 262.49);
  border-top-color: oklch(0.22 0.0651659 262.49);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.1 0.0651659 292.489 / 0.5);
  border-bottom-color: oklch(0.18 0.0651659 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.18 0.0651659 292.489);
  border-right-color: oklch(0.18 0.0651659 292.489);
  border-top-color: oklch(0.18 0.0651659 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.1 0.0651659 292.489 / 0.5);
  border-bottom-color: oklch(0.18 0.0651659 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.18 0.0651659 292.489);
  border-right-color: oklch(0.18 0.0651659 292.489);
  border-top-color: oklch(0.18 0.0651659 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: oklch(0.7 0.08 102.483);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.7 0.08 102.483);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.7 0.08 102.483);
  border-left-color: oklch(0.7 0.08 102.483);
  border-right-color: oklch(0.7 0.08 102.483);
  border-top-color: oklch(0.7 0.08 102.483);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: oklch(0.1 0.0651659 292.489 / 0.5);
  border-bottom-color: oklch(0.18 0.0651659 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.18 0.0651659 292.489);
  border-right-color: oklch(0.18 0.0651659 292.489);
  border-top-color: oklch(0.18 0.0651659 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: oklch(0.1 0.0651659 292.489 / 0.5);
  border-bottom-color: oklch(0.18 0.0651659 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.18 0.0651659 292.489);
  border-right-color: oklch(0.18 0.0651659 292.489);
  border-top-color: oklch(0.18 0.0651659 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.7 0.08 26.4067);
  border-left-color: oklch(0.7 0.08 26.4067);
  border-right-color: oklch(0.7 0.08 26.4067);
  border-top-color: oklch(0.7 0.08 26.4067);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: oklch(0.2 0.0651659 292.489);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTcxNiA4LjAwMDAzTDEuMDg1ODIgMy45MTQyNEwzLjkxNDI0IDEuMDg1ODJMOC4wMDAwMyA1LjE3MTZMMTIuMDg1OCAxLjA4NTgyTDE0LjkxNDIgMy45MTQyNEwxMC44Mjg1IDguMDAwMDNMMTQuOTE0MiAxMi4wODU4TDEyLjA4NTggMTQuOTE0Mkw4LjAwMDAzIDEwLjgyODVMMy45MTQyNCAxNC45MTQyTDEuMDg1ODIgMTIuMDg1OEw1LjE3MTYgOC4wMDAwM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTcxNiA4LjAwMDAzTDEuMDg1ODIgMy45MTQyNEwzLjkxNDI0IDEuMDg1ODJMOC4wMDAwMyA1LjE3MTZMMTIuMDg1OCAxLjA4NTgyTDE0LjkxNDIgMy45MTQyNEwxMC44Mjg1IDguMDAwMDNMMTQuOTE0MiAxMi4wODU4TDEyLjA4NTggMTQuOTE0Mkw4LjAwMDAzIDEwLjgyODVMMy45MTQyNCAxNC45MTQyTDEuMDg1ODIgMTIuMDg1OEw1LjE3MTYgOC4wMDAwM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNUgwVjEyTDcgMEg5TDE2IDEyVjE1Wk03IDRIOVY5SDdWNFpNNyAxMUg5VjEzSDdWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNUgwVjEyTDcgMEg5TDE2IDEyVjE1Wk03IDRIOVY5SDdWNFpNNyAxMUg5VjEzSDdWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 64.0453);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1LjVDNS41IDQuMTE5MjkgNi42MTkyOSAzIDggM0M5LjM4MDcxIDMgMTAuNSA0LjExOTI5IDEwLjUgNS41QzEwLjUgNi44ODA3MSA5LjM4MDcxIDggOCA4SDdWMTFIOEMxMS4wMzc2IDExIDEzLjUgOC41Mzc1NyAxMy41IDUuNUMxMy41IDIuNDYyNDMgMTEuMDM3NiAwIDggMEM0Ljk2MjQzIDAgMi41IDIuNDYyNDMgMi41IDUuNUg1LjVaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xMCAxM0g3VjE2SDEwVjEzWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1LjVDNS41IDQuMTE5MjkgNi42MTkyOSAzIDggM0M5LjM4MDcxIDMgMTAuNSA0LjExOTI5IDEwLjUgNS41QzEwLjUgNi44ODA3MSA5LjM4MDcxIDggOCA4SDdWMTFIOEMxMS4wMzc2IDExIDEzLjUgOC41Mzc1NyAxMy41IDUuNUMxMy41IDIuNDYyNDMgMTEuMDM3NiAwIDggMEM0Ljk2MjQzIDAgMi41IDIuNDYyNDMgMi41IDUuNUg1LjVaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xMCAxM0g3VjE2SDEwVjEzWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjkyODkgMS4yOTI5MUw2LjcwNzExIDIuNzA3MTJMMyA2LjQxNDIzVjcuMDAwMDFIN1YxNEgxVjUuNTg1OEw1LjI5Mjg5IDEuMjkyOTFaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xNSA3LjAwMDAxSDExVjYuNDE0MjNMMTQuNzA3MSAyLjcwNzEyTDEzLjI5MjkgMS4yOTI5MUw5IDUuNTg1OFYxNEgxNVY3LjAwMDAxWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjkyODkgMS4yOTI5MUw2LjcwNzExIDIuNzA3MTJMMyA2LjQxNDIzVjcuMDAwMDFIN1YxNEgxVjUuNTg1OEw1LjI5Mjg5IDEuMjkyOTFaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xNSA3LjAwMDAxSDExVjYuNDE0MjNMMTQuNzA3MSAyLjcwNzEyTDEzLjI5MjkgMS4yOTI5MUw5IDUuNTg1OFYxNEgxNVY3LjAwMDAxWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 294.789);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMEg3LjAwMDAxTDUuNTEyOTIgNC41NzY4MUwwLjcwMDU1NCA0LjU3NjgyTDAuMDgyNTE5NSA2LjQ3ODkzTDMuOTc1ODEgOS4zMDc1NkwyLjQ4ODczIDEzLjg4NDNMNC4xMDY3NyAxNS4wNTk5TDguMDAwMDIgMTIuMjMxM0wxMS44OTMzIDE1LjA1OTlMMTMuNTExMyAxMy44ODQzTDEyLjAyNDIgOS4zMDc1NEwxNS45MTc1IDYuNDc4OTJMMTUuMjk5NCA0LjU3NjgxTDEwLjQ4NzEgNC41NzY4MUw5LjAwMDAxIDBaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMEg3LjAwMDAxTDUuNTEyOTIgNC41NzY4MUwwLjcwMDU1NCA0LjU3NjgyTDAuMDgyNTE5NSA2LjQ3ODkzTDMuOTc1ODEgOS4zMDc1NkwyLjQ4ODczIDEzLjg4NDNMNC4xMDY3NyAxNS4wNTk5TDguMDAwMDIgMTIuMjMxM0wxMS44OTMzIDE1LjA1OTlMMTMuNTExMyAxMy44ODQzTDEyLjAyNDIgOS4zMDc1NEwxNS45MTc1IDYuNDc4OTJMMTUuMjk5NCA0LjU3NjgxTDEwLjQ4NzEgNC41NzY4MUw5LjAwMDAxIDBaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 102.483);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNEgxNFYxNkgyVjE0SDNWMTEuNTg1OEw2LjU4NTc5IDhMMyA0LjQxNDIxVjJIMlYwSDE0VjJIMTNWNC40MTQyMUw5LjQxNDIxIDhMMTMgMTEuNTg1OFYxNFpNNSAxMi40MTQyVjE0SDExVjEyLjQxNDJMOCA5LjQxNDIxTDUgMTIuNDE0MloiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNEgxNFYxNkgyVjE0SDNWMTEuNTg1OEw2LjU4NTc5IDhMMyA0LjQxNDIxVjJIMlYwSDE0VjJIMTNWNC40MTQyMUw5LjQxNDIxIDhMMTMgMTEuNTg1OFYxNFpNNSAxMi40MTQyVjE0SDExVjEyLjQxNDJMOCA5LjQxNDIxTDUgMTIuNDE0MloiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(179, 179, 179);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMEgzVjJIMVY1SDE1VjJIMTNWMEgxMFYySDZWMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE1IDdIMVYxNUgxNVY3WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMEgzVjJIMVY1SDE1VjJIMTNWMEgxMFYySDZWMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE1IDdIMVYxNUgxNVY3WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 102.483);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMUg1TDE2IDdWOUw1IDE1SDJMMyA5SDhWN0gzTDIgMVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMUg1TDE2IDdWOUw1IDE1SDJMMyA5SDhWN0gzTDIgMVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 248.82);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEgxNFYxNkgxMkw4IDEyTDQgMTZIMlYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEgxNFYxNkgxMkw4IDEyTDQgMTZIMlYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTZMNSAxMVYySDE0TDE2IDhWMTFIMTBWMTRDMTAgMTUuMTA0NiA5LjEwNDU3IDE2IDggMTZIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTMgMTFIMFYySDNWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTZMNSAxMVYySDE0TDE2IDhWMTFIMTBWMTRDMTAgMTUuMTA0NiA5LjEwNDU3IDE2IDggMTZIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTMgMTFIMFYySDNWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEzTDkuMDAwMDEgMTJMMTEuMjkyOSA5LjcwNzEyTDguNTAwMDEgNi45MTQyM0w1LjUwMDAxIDkuOTE0MjNMMC4yOTI5MDggNC43MDcxMkwxLjcwNzEyIDMuMjkyOTFMNS41MDAwMSA3LjA4NThMOC41MDAwMSA0LjA4NThMMTIuNzA3MSA4LjI5MjkxTDE1IDYuMDAwMDFMMTYgNy4wMDAwMUwxNiAxM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEzTDkuMDAwMDEgMTJMMTEuMjkyOSA5LjcwNzEyTDguNTAwMDEgNi45MTQyM0w1LjUwMDAxIDkuOTE0MjNMMC4yOTI5MDggNC43MDcxMkwxLjcwNzEyIDMuMjkyOTFMNS41MDAwMSA3LjA4NThMOC41MDAwMSA0LjA4NThMMTIuNzA3MSA4LjI5MjkxTDE1IDYuMDAwMDFMMTYgNy4wMDAwMUwxNiAxM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA5QzE1IDEyLjg2NiAxMS44NjYgMTYgOCAxNkM0LjEzNDAxIDE2IDEgMTIuODY2IDEgOUMxIDUuNSA0IDMgNCAzSDZWNC41QzYgNS4wNTIyOCA2LjQ0NzcyIDUuNSA3IDUuNUM3LjU1MjI4IDUuNSA4IDUuMDUyMjggOCA0LjVWMEgxMEMxMCAwIDE1IDMgMTUgOVpNMTAgMTJDMTAgMTMuMTA0NiA5LjEwNDU3IDE0IDggMTRDNi44OTU0MyAxNCA2IDEzLjEwNDYgNiAxMkM2IDkuNSA4IDggOCA4QzggOCAxMCA5LjUgMTAgMTJaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA5QzE1IDEyLjg2NiAxMS44NjYgMTYgOCAxNkM0LjEzNDAxIDE2IDEgMTIuODY2IDEgOUMxIDUuNSA0IDMgNCAzSDZWNC41QzYgNS4wNTIyOCA2LjQ0NzcyIDUuNSA3IDUuNUM3LjU1MjI4IDUuNSA4IDUuMDUyMjggOCA0LjVWMEgxMEMxMCAwIDE1IDMgMTUgOVpNMTAgMTJDMTAgMTMuMTA0NiA5LjEwNDU3IDE0IDggMTRDNi44OTU0MyAxNCA2IDEzLjEwNDYgNiAxMkM2IDkuNSA4IDggOCA4QzggOCAxMCA5LjUgMTAgMTJaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDE2SDdMMCA5VjdMNyAwSDlMMTYgN1Y5TDkgMTZaTTcgM1Y5SDlWM0g3Wk03IDExVjEzSDlWMTFIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDE2SDdMMCA5VjdMNyAwSDlMMTYgN1Y5TDkgMTZaTTcgM1Y5SDlWM0g3Wk03IDExVjEzSDlWMTFIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 248.82);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDNDMTUgNS42MTUwNyAxMy4zMjcgNy44Mzk0IDEwLjk5MjkgOC42NjEwOEMxMC4zNjk0IDguODgwNTkgOS42OTg2NCA5IDkgOVYxM0gxM1YxNUgzVjEzSDdWMTFDMy42ODYyOSAxMSAxIDguMzEzNzEgMSA1VjNIM0M0LjcyNzE1IDMgNi4yODM4NiAzLjcyOTc3IDcuMzc4NTkgNC44OTc3OUM3LjkzOTcyIDUuNDk2NDcgOC4zNzk0NyA2LjIxMDMgOC42NTg1OSA3SDlDOS41ODc1MiA3IDEwLjE0NTUgNi44NzMzMyAxMC42NDggNi42NDU4MUMxMC4yMjc0IDUuMjc3NzIgOS40NDk3MyA0LjA2NTk2IDguNDIzODEgMy4xMTkyOEM5LjUyNDM5IDEuODIyNzUgMTEuMTY2MSAxIDEzIDFIMTVWM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDNDMTUgNS42MTUwNyAxMy4zMjcgNy44Mzk0IDEwLjk5MjkgOC42NjEwOEMxMC4zNjk0IDguODgwNTkgOS42OTg2NCA5IDkgOVYxM0gxM1YxNUgzVjEzSDdWMTFDMy42ODYyOSAxMSAxIDguMzEzNzEgMSA1VjNIM0M0LjcyNzE1IDMgNi4yODM4NiAzLjcyOTc3IDcuMzc4NTkgNC44OTc3OUM3LjkzOTcyIDUuNDk2NDcgOC4zNzk0NyA2LjIxMDMgOC42NTg1OSA3SDlDOS41ODc1MiA3IDEwLjE0NTUgNi44NzMzMyAxMC42NDggNi42NDU4MUMxMC4yMjc0IDUuMjc3NzIgOS40NDk3MyA0LjA2NTk2IDguNDIzODEgMy4xMTkyOEM5LjUyNDM5IDEuODIyNzUgMTEuMTY2MSAxIDEzIDFIMTVWM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 144.199);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA1LjVDMTYgOC41Mzc1NyAxMy41Mzc2IDExIDEwLjUgMTFIN1YxM0g1VjE1TDQgMTZIMFYxMkw1LjE2MzUxIDYuODM2NDlDNS4wNTY3IDYuNDA4NjMgNSA1Ljk2MDk0IDUgNS41QzUgMi40NjI0MyA3LjQ2MjQzIDAgMTAuNSAwQzEzLjUzNzYgMCAxNiAyLjQ2MjQzIDE2IDUuNVpNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA1LjVDMTYgOC41Mzc1NyAxMy41Mzc2IDExIDEwLjUgMTFIN1YxM0g1VjE1TDQgMTZIMFYxMkw1LjE2MzUxIDYuODM2NDlDNS4wNTY3IDYuNDA4NjMgNSA1Ljk2MDk0IDUgNS41QzUgMi40NjI0MyA3LjQ2MjQzIDAgMTAuNSAwQzEzLjUzNzYgMCAxNiAyLjQ2MjQzIDE2IDUuNVpNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 102.483);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3ODkyIDEwLjIyMzZMOCAxNkwxMi42MjExIDEwLjIyMzZDMTMuNTEzNyA5LjEwNzg4IDE0IDcuNzIxNTQgMTQgNi4yOTI2NlY2QzE0IDIuNjg2MjkgMTEuMzEzNyAwIDggMEM0LjY4NjI5IDAgMiAyLjY4NjI5IDIgNlY2LjI5MjY2QzIgNy43MjE1NCAyLjQ4NjMgOS4xMDc4OCAzLjM3ODkyIDEwLjIyMzZaTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3ODkyIDEwLjIyMzZMOCAxNkwxMi42MjExIDEwLjIyMzZDMTMuNTEzNyA5LjEwNzg4IDE0IDcuNzIxNTQgMTQgNi4yOTI2NlY2QzE0IDIuNjg2MjkgMTEuMzEzNyAwIDggMEM0LjY4NjI5IDAgMiAyLjY4NjI5IDIgNlY2LjI5MjY2QzIgNy43MjE1NCAyLjQ4NjMgOS4xMDc4OCAzLjM3ODkyIDEwLjIyMzZaTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEw1IDVWMTRIMTRMMTYgOFY1SDEwVjJDMTAgMC44OTU0MzEgOS4xMDQ1NyAwIDggMEg3WiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMyA1SDBWMTRIM1Y1WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEw1IDVWMTRIMTRMMTYgOFY1SDEwVjJDMTAgMC44OTU0MzEgOS4xMDQ1NyAwIDggMEg3WiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMyA1SDBWMTRIM1Y1WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 144.199);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjIxNjA2IDE1TDYuMTA0OTUgMTZIOC4xMTcyNkw4LjIyODM3IDE1SDEwLjAwM0MxMi4yMTA1IDE1IDE0IDEzLjIxMDUgMTQgMTEuMDAzQzE0IDkuMTI5NjMgMTIuNjk4OSA3LjUwNzYgMTAuODcwMSA3LjEwMTJMOS4xNDg1MiA2LjcxODY0TDkuNDUwNTkgNEgxM1YxSDkuNzgzOTNMOS44OTUwNCAwSDcuODgyNzNMNy43NzE2MiAxSDUuOTk2OTlDMy43ODk1MSAxIDIgMi43ODk1MSAyIDQuOTk2OTlDMiA2Ljg3MDM3IDMuMzAxMTUgOC40OTI0IDUuMTI5OTIgOC44OTg4TDYuODUxNDcgOS4yODEzNkw2LjU0OTM5IDEySDNWMTVINi4yMTYwNlpNOC41NjE3IDEySDEwLjAwM0MxMC41NTM2IDEyIDExIDExLjU1MzYgMTEgMTEuMDAzQzExIDEwLjUzNTcgMTAuNjc1NCAxMC4xMzExIDEwLjIxOTMgMTAuMDI5OEw4LjgxNTI4IDkuNzE3NzZMOC41NjE3IDEyWk03LjE4NDcgNi4yODIyM0w3LjQzODI4IDRINS45OTY5OUM1LjQ0NjM3IDQgNSA0LjQ0NjM3IDUgNC45OTY5OUM1IDUuNDY0MjcgNS4zMjQ1NSA1Ljg2ODg3IDUuNzgwNzEgNS45NzAyM0w3LjE4NDcgNi4yODIyM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjIxNjA2IDE1TDYuMTA0OTUgMTZIOC4xMTcyNkw4LjIyODM3IDE1SDEwLjAwM0MxMi4yMTA1IDE1IDE0IDEzLjIxMDUgMTQgMTEuMDAzQzE0IDkuMTI5NjMgMTIuNjk4OSA3LjUwNzYgMTAuODcwMSA3LjEwMTJMOS4xNDg1MiA2LjcxODY0TDkuNDUwNTkgNEgxM1YxSDkuNzgzOTNMOS44OTUwNCAwSDcuODgyNzNMNy43NzE2MiAxSDUuOTk2OTlDMy43ODk1MSAxIDIgMi43ODk1MSAyIDQuOTk2OTlDMiA2Ljg3MDM3IDMuMzAxMTUgOC40OTI0IDUuMTI5OTIgOC44OTg4TDYuODUxNDcgOS4yODEzNkw2LjU0OTM5IDEySDNWMTVINi4yMTYwNlpNOC41NjE3IDEySDEwLjAwM0MxMC41NTM2IDEyIDExIDExLjU1MzYgMTEgMTEuMDAzQzExIDEwLjUzNTcgMTAuNjc1NCAxMC4xMzExIDEwLjIxOTMgMTAuMDI5OEw4LjgxNTI4IDkuNzE3NzZMOC41NjE3IDEyWk03LjE4NDcgNi4yODIyM0w3LjQzODI4IDRINS45OTY5OUM1LjQ0NjM3IDQgNSA0LjQ0NjM3IDUgNC45OTY5OUM1IDUuNDY0MjcgNS4zMjQ1NSA1Ljg2ODg3IDUuNzgwNzEgNS45NzAyM0w3LjE4NDcgNi4yODIyM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 144.199);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDNMOS4wMDAwMSA0TDExLjI5MjkgNi4yOTI4OUw4LjUwMDAxIDkuMDg1NzlMNS41MDAwMSA2LjA4NTc5TDAuMjkyOTA4IDExLjI5MjlMMS43MDcxMiAxMi43MDcxTDUuNTAwMDEgOC45MTQyMUw4LjUwMDAxIDExLjkxNDJMMTIuNzA3MSA3LjcwNzExTDE1IDEwTDE2IDlMMTYgM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDNMOS4wMDAwMSA0TDExLjI5MjkgNi4yOTI4OUw4LjUwMDAxIDkuMDg1NzlMNS41MDAwMSA2LjA4NTc5TDAuMjkyOTA4IDExLjI5MjlMMS43MDcxMiAxMi43MDcxTDUuNTAwMDEgOC45MTQyMUw4LjUwMDAxIDExLjkxNDJMMTIuNzA3MSA3LjcwNzExTDE1IDEwTDE2IDlMMTYgM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 144.199);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBIMTJWMkgxNlY0QzE2IDYuNDU2NDEgMTQuMjI4NiA4LjQ5OTA5IDExLjg5MzYgOC45MjAzOEMxMS41NTM3IDEwLjM2MzcgMTAuNDMyIDExLjUwNTQgOSAxMS44NzRWMTRIMTJWMTZINFYxNEg3VjExLjg3NEM1LjU2Nzk2IDExLjUwNTQgNC40NDYyOCAxMC4zNjM3IDQuMTA2NCA4LjkyMDM4QzEuNzcxMzYgOC40OTkwOSAwIDYuNDU2NDEgMCA0VjJINFYwWk0xMiA2LjgyOTI5VjRIMTRDMTQgNS4zMDYyMiAxMy4xNjUyIDYuNDE3NDYgMTIgNi44MjkyOVpNNCA0SDJDMiA1LjMwNjIyIDIuODM0ODEgNi40MTc0NiA0IDYuODI5MjlWNFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBIMTJWMkgxNlY0QzE2IDYuNDU2NDEgMTQuMjI4NiA4LjQ5OTA5IDExLjg5MzYgOC45MjAzOEMxMS41NTM3IDEwLjM2MzcgMTAuNDMyIDExLjUwNTQgOSAxMS44NzRWMTRIMTJWMTZINFYxNEg3VjExLjg3NEM1LjU2Nzk2IDExLjUwNTQgNC40NDYyOCAxMC4zNjM3IDQuMTA2NCA4LjkyMDM4QzEuNzcxMzYgOC40OTkwOSAwIDYuNDU2NDEgMCA0VjJINFYwWk0xMiA2LjgyOTI5VjRIMTRDMTQgNS4zMDYyMiAxMy4xNjUyIDYuNDE3NDYgMTIgNi44MjkyOVpNNCA0SDJDMiA1LjMwNjIyIDIuODM0ODEgNi40MTc0NiA0IDYuODI5MjlWNFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 102.483);
  color: rgb(218, 218, 218);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
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
  background-color: oklch(0.24 0.0651659 262.49);
  border-bottom-color: oklch(0.25 0.21722 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.25 0.21722 292.489);
  border-right-color: oklch(0.25 0.21722 292.489);
  border-top-color: oklch(0.25 0.21722 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: oklch(0.22 0.0651659 262.49);
  border-bottom-color: oklch(0.22 0.0651659 262.49);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 262.49);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 262.49);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 262.49);
  border-top-style: ridge;
  border-top-width: 4px;
  box-shadow: oklch(0 0 0 / 0.4) 0px 0px 12px 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.22 0.0651659 262.49);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 262.49);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 262.49);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 262.49);
  border-top-style: ridge;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: oklch(0.24 0.0651659 262.49);
  border-bottom-color: oklch(0.25 0.21722 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.25 0.21722 292.489);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.21722 292.489);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.21722 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: oklch(0 0.0651659 292.489) 2px 2px 0px 0px inset, oklch(0.5 0.21722 292.489) -2px -2px 0px 0px inset;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-left-width: 4px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: oklch(0.8 0.21722 292.489 / 0.75);
}

html[saved-theme="dark"] body h1 {
  color: oklch(0.7 0.08 26.4067);
}

html[saved-theme="dark"] body h2 {
  color: oklch(0.7 0.08 64.0453);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: oklch(0.7 0.08 26.4067);
}

html[saved-theme="dark"] body h3 {
  color: oklch(0.7 0.08 102.483);
}

html[saved-theme="dark"] body h4 {
  color: oklch(0.7 0.08 144.199);
}

html[saved-theme="dark"] body h5 {
  color: oklch(0.7 0.08 248.82);
}

html[saved-theme="dark"] body h6 {
  color: oklch(0.7 0.08 271.409);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.12 0.0651659 322.489);
  border-left-color: oklch(0.12 0.0651659 322.489);
  border-right-color: oklch(0.12 0.0651659 322.489);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: oklch(0.22 0.0651659 262.49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.22 0.0651659 262.49);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: oklch(0.22 0.0651659 262.49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.22 0.0651659 262.49);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: oklch(0.22 0.0651659 262.49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.22 0.0651659 262.49);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.22 0.0651659 262.49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.22 0.0651659 262.49);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.22 0.0651659 262.49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.22 0.0651659 262.49);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: oklch(0.22 0.0651659 262.49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.22 0.0651659 262.49);
}`,
    explorer: `html[saved-theme="dark"] body .explorer {
  background-color: oklch(0.24 0.0651659 262.49);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.7 0.08 26.4067);
  font-weight: 700;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.7 0.08 26.4067);
  font-weight: 700;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: oklch(0.22 0.0651659 262.49);
  border-bottom-color: oklch(0.25 0.21722 292.489);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.21722 292.489);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.21722 292.489);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.21722 292.489);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: oklch(0.14 0.0651659 262.49);
  border-bottom-color: oklch(0.12 0.0651659 322.489);
  border-left-color: oklch(0.12 0.0651659 322.489);
  border-left-width: 0px;
  border-right-color: oklch(0.12 0.0651659 322.489);
  border-top-color: oklch(0.12 0.0651659 322.489);
  border-top-left-radius: 0px;
  border-top-width: 0px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: oklch(0.7 0.08 26.4067 / 0.3);
  border-bottom-color: oklch(0.55 0.08 262.49 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.55 0.08 262.49 / 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.55 0.08 262.49 / 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.55 0.08 262.49 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: oklch(0.7 0.08 26.4067 / 0.3);
  border-bottom-color: oklch(0.55 0.08 262.49 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.55 0.08 262.49 / 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.55 0.08 262.49 / 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.55 0.08 262.49 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: oklch(0.24 0.0651659 262.49);
  border-bottom-color: oklch(0.22 0.0651659 262.49);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 262.49);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 262.49);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 262.49);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: oklch(0.22 0.0651659 262.49);
  border-bottom-color: oklch(0.25 0.21722 292.489);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.21722 292.489);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.21722 292.489);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.21722 292.489);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  background-color: oklch(0.18 0.0651659 292.489 / 0.75);
  border-bottom-color: oklch(0.22 0.0651659 262.49);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 262.49);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 262.49);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 262.49);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  margin-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: oklch(0.14 0.0651659 262.49);
}

html[saved-theme="dark"] body kbd {
  background-color: oklch(0.1 0.0651659 292.489 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: oklch(0.888364 0.000044365 23.517 / 0.25) 0px 0px 0px 1px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: oklch(0.8 0.21722 292.489 / 0.1);
  border-bottom-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-left-width: 4px;
  border-right-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-right-width: 1px;
  border-top-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: oklch(0.8 0.21722 292.489 / 0.75);
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) !important;
  --accent-2: oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) !important;
  --background-modifier-border: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --background-modifier-border-focus: oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 70% c h
  ) !important;
  --background-modifier-error: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --background-modifier-error-hover: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --background-modifier-success: oklch(
    from #4caf50 50% 30% h
  ) !important;
  --background-paper: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) !important;
  --background-primary: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --background-primary-alt: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ) !important;
  --background-secondary: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --background-secondary-alt: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) !important;
  --background-tertiary: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) !important;
  --base-accent: oklch(from hsl(257, 88.88%, 70.95%) l c h) !important;
  --bases-cards-background: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) 85% c h) !important;
  --bases-cards-border-width: 4px !important;
  --bases-cards-cover-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ) !important;
  --bases-cards-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --bases-embed-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --bases-embed-border-radius: 12px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: oklch(from #222222 50% c h / 50%) !important;
  --bases-table-cell-background-active: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --bases-table-cell-background-disabled: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 70% c h
  ) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ) !important;
  --bases-table-header-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --bases-table-header-weight: 100 !important;
  --bases-table-summary-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --blockquote-background-color: oklch(
    from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h / 40%
  ) !important;
  --blockquote-border-color: oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 50% c h / 75%) !important;
  --blockquote-border-thickness: 4px !important;
  --blur-background: color-mix(in srgb, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 65%, transparent) linear-gradient(oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ), color-mix(in srgb, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 65%, transparent)) !important;
  --bold-color: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) calc(50% - 15%) 30%
      calc(h + 100)
  ) !important;
  --border-groove: 4px groove oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ) !important;
  --border-ridge: 4px ridge oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --border-solid: 4px solid oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) !important;
  --box-shadow: inset -2px -2px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 50% c h),
    inset 2px 2px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 100% c h) !important;
  --box-shadow-active: inset 2px 2px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 50% c h),
    inset -2px -2px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 100% c h) !important;
  --box-shadow-active-sm: inset 1px 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 50% c h),
    inset -1px -1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 100% c h) !important;
  --box-shadow-sm: inset -1px -1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 50% c h),
    inset 1px 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 100% c h) !important;
  --button-active: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) 85% c h) !important;
  --button-border-radius: 8px !important;
  --button-hover: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) l c h) !important;
  --button-normal: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --button-radius: 12px !important;
  --button-text: #222222 !important;
  --callout-border-width: 4px;
  --callout-radius: 12px;
  --canvas-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: oklch(
    from #222222 l c h / 0.3
  ) !important;
  --checkbox-color: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --checkbox-color-hover: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) !important;
  --checkbox-marker-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) !important;
  --checkbox-radius: 12px !important;
  --chroma: 30% !important;
  --chroma-accent: 0.4 !important;
  --chroma-folder: 30% !important;
  --clickable-icon-radius: 8px !important;
  --code-background: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 85% c h / 50%) !important;
  --code-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --code-function: oklch(
    from #ffeb3b 50% 30% h
  ) !important;
  --code-important: oklch(
    from #ff9800 50% 30% h
  ) !important;
  --code-operator: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --code-property: oklch(
    from #00bcd4 50% 30% h
  ) !important;
  --code-radius: 12px !important;
  --code-string: oklch(
    from #4caf50 50% 30% h
  ) !important;
  --code-tag: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --code-value: oklch(
    from #673ab7 50% 30% h
  ) !important;
  --collapse-icon-color: #5c5c5c !important;
  --collapse-icon-color-collapsed: #ababab !important;
  --color-amber: oklch(
    from #ffb300 50% 30% h
  ) !important;
  --color-blue: oklch(
    from #2196f3 50% 30% h
  ) !important;
  --color-cyan: oklch(
    from #00bcd4 50% 30% h
  ) !important;
  --color-green: oklch(
    from #4caf50 50% 30% h
  ) !important;
  --color-indigo: oklch(
    from #3f51b5 50% 30% h
  ) !important;
  --color-lime: oklch(
    from #8bc34a 50% 30% h
  ) !important;
  --color-magenta: oklch(
    from #e91e63 50% 30% h
  ) !important;
  --color-orange: oklch(
    from #ff9800 50% 30% h
  ) !important;
  --color-purple: oklch(
    from #673ab7 50% 30% h
  ) !important;
  --color-red: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --color-rose: oklch(
    from #f48fb1 50% 30% h
  ) !important;
  --color-teal: oklch(
    from #009688 50% 30% h
  ) !important;
  --color-vermillion: oklch(
    from #ff5722 50% 30% h
  ) !important;
  --color-violet: oklch(
    from #9c27b0 50% 30% h
  ) !important;
  --color-yellow: oklch(
    from #ffeb3b 50% 30% h
  ) !important;
  --divider-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h), inset 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --file-header-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --file-header-background-focused: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --file-margins: 16px !important;
  --folder-accent: oklch(from hsl(257, 88.88%, 70.95%) l c h) !important;
  --folder-color-1: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --folder-color-10: oklch(
    from #8bc34a 50% 30% h
  ) !important;
  --folder-color-11: oklch(
    from #009688 50% 30% h
  ) !important;
  --folder-color-12: oklch(
    from #673ab7 50% 30% h
  ) !important;
  --folder-color-13: oklch(
    from #e91e63 50% 30% h
  ) !important;
  --folder-color-14: oklch(
    from #f48fb1 50% 30% h
  ) !important;
  --folder-color-15: oklch(
    from #00bcd4 50% 30% h
  ) !important;
  --folder-color-2: oklch(
    from #ff9800 50% 30% h
  ) !important;
  --folder-color-3: oklch(
    from #ffeb3b 50% 30% h
  ) !important;
  --folder-color-4: oklch(
    from #4caf50 50% 30% h
  ) !important;
  --folder-color-5: oklch(
    from #2196f3 50% 30% h
  ) !important;
  --folder-color-6: oklch(
    from #3f51b5 50% 30% h
  ) !important;
  --folder-color-7: oklch(
    from #9c27b0 50% 30% h
  ) !important;
  --folder-color-8: oklch(
    from #ff5722 50% 30% h
  ) !important;
  --folder-color-9: oklch(
    from #ffb300 50% 30% h
  ) !important;
  --footnote-divider-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --footnote-radius: 8px !important;
  --graph-node-attachment: oklch(
    from #ffeb3b 50% 30% h
  ) !important;
  --graph-node-tag: oklch(
    from #4caf50 50% 30% h
  ) !important;
  --h1-color: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --h2-color: oklch(
    from #ff9800 50% 30% h
  ) !important;
  --h3-color: oklch(
    from #ffeb3b 50% 30% h
  ) !important;
  --h4-color: oklch(
    from #4caf50 50% 30% h
  ) !important;
  --h5-color: oklch(
    from #2196f3 50% 30% h
  ) !important;
  --h6-color: oklch(
    from #3f51b5 50% 30% h
  ) !important;
  --header-height: 48px !important;
  --highlight: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 80% 30% h / 75%) !important;
  --hr-color: oklch(from #222222 l c h / 25%) !important;
  --hue-amber: #ffb300 !important;
  --hue-blue: #2196f3 !important;
  --hue-cyan: #00bcd4 !important;
  --hue-green: #4caf50 !important;
  --hue-indigo: #3f51b5 !important;
  --hue-lime: #8bc34a !important;
  --hue-magenta: #e91e63 !important;
  --hue-orange: #ff9800 !important;
  --hue-purple: #673ab7 !important;
  --hue-red: #d32f2f !important;
  --hue-rose: #f48fb1 !important;
  --hue-teal: #009688 !important;
  --hue-vermillion: #ff5722 !important;
  --hue-violet: #9c27b0 !important;
  --hue-yellow: #ffeb3b !important;
  --img-border-color: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) l 30% h) !important;
  --img-border-radius: 0px !important;
  --img-border-width: 0px !important;
  --inline-title-color: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --input-border-width: 2px !important;
  --input-radius: 12px !important;
  --interactive-active: oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 50% c h / 50%) !important;
  --italic-color: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) calc(50% - 15%) 30%
      calc(h + 200)
  ) !important;
  --light: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --lightgray: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --lightness: 50% !important;
  --link-color: oklch(
    from oklch(from hsl(257, 88.88%, 70.95%) l c h) 35% 30% h
  ) !important;
  --link-color-hover: oklch(
    from oklch(
    from oklch(from hsl(257, 88.88%, 70.95%) l c h) 35% 30% h
  ) 50% 30% h / 80%
  ) !important;
  --link-external-color: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --link-external-color-hover: oklch(
    from oklch(
    from #d32f2f 50% 30% h
  ) 50% 30% h / 80%
  ) !important;
  --link-unresolved-color: oklch(
    from oklch(
    from oklch(from hsl(257, 88.88%, 70.95%) l c h) 35% 30% h
  ) 50% 30% h / 60%
  ) !important;
  --link-weight: 700 !important;
  --menu-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) !important;
  --metadata-background: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h / 75%) !important;
  --metadata-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --metadata-border-radius: 12px !important;
  --metadata-divider-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --metadata-gap: 8px !important;
  --metadata-label-background: oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) l c h / 15%
  ) !important;
  --metadata-label-background-active: oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) l c h / 30%
  ) !important;
  --metadata-label-background-hover: oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) l c h / 30%
  ) !important;
  --metadata-label-font-weight: 700 !important;
  --metadata-label-width: 8em !important;
  --metadata-property-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) !important;
  --metadata-property-background-hover: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 70% c h
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) !important;
  --metadata-property-radius: 12px !important;
  --metadata-property-radius-focus: 12px !important;
  --metadata-property-radius-hover: 12px !important;
  --mobile-sidebar-width: 100% !important;
  --modal-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --nav-collapse-icon-color: #5c5c5c !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-selected: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 80% 30% h / 75%) !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #5c5c5c !important;
  --nav-tag-radius: 8px !important;
  --outline-color: oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 25% c h) !important;
  --pdf-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --pdf-page-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --pdf-sidebar-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --pill-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --prompt-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --radius-s: 8px !important;
  --radius-xs: 8px !important;
  --radius-xxs: 8px !important;
  --retroma-canvas-card-border-width: 3px !important;
  --retroma-canvas-card-embed-border-width: 3px !important;
  --retroma-canvas-dot-opacity: 0.3 !important;
  --retroma-canvas-node-content-bg-opacity: 0.25 !important;
  --retroma-folder-bg-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --retroma-folder-border: 1px solid
    oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 55% 30% h / 50%) !important;
  --retroma-folder-box-shadow: -1px 1px 0px oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) !important;
  --ribbon-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --ribbon-background-collapsed: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --rotation-1: 30 !important;
  --rotation-2: 330 !important;
  --search-result-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --setting-items-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --setting-items-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --settings-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) !important;
  --slider-track-background: oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 50% c h / 50%) !important;
  --slider-track-height: 6px !important;
  --status-bar-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) !important;
  --status-bar-border-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) !important;
  --strong-emphasis: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) calc(50% - 15%) 30%
      calc(h + 200)
  ) !important;
  --suggestion-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --sync-avatar-color-1: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --sync-avatar-color-2: oklch(
    from #ff9800 50% 30% h
  ) !important;
  --sync-avatar-color-3: oklch(
    from #ffeb3b 50% 30% h
  ) !important;
  --sync-avatar-color-4: oklch(
    from #4caf50 50% 30% h
  ) !important;
  --sync-avatar-color-5: oklch(
    from #00bcd4 50% 30% h
  ) !important;
  --sync-avatar-color-6: oklch(
    from #2196f3 50% 30% h
  ) !important;
  --sync-avatar-color-7: oklch(
    from #673ab7 50% 30% h
  ) !important;
  --tab-background-active: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --tab-container-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --tab-outline-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) !important;
  --tab-radius: 8px !important;
  --tab-stacked-header-width: 48px !important;
  --tab-switcher-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ), transparent) !important;
  --tab-switcher-preview-radius: 12px !important;
  --table-add-button-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --table-border-color: oklch(from #222222 50% c h / 50%) !important;
  --table-border-spacing: 2px !important;
  --table-data-background: oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) l c h / 7%) !important;
  --table-header-background: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 50% c h / 30%) !important;
  --table-header-border-color: oklch(from #222222 50% c h / 50%) !important;
  --tag-border-width: 1px !important;
  --tag-color: oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 40% c h / 75%) !important;
  --tag-radius: 8px !important;
  --text-error: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --text-highlight-bg: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 80% 30% h / 75%) !important;
  --text-selection: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 80% 30% h / 75%) !important;
  --text-success: oklch(
    from #4caf50 50% 30% h
  ) !important;
  --text-warning: oklch(
    from #ff9800 50% 30% h
  ) !important;
  --textHighlight: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 80% 30% h / 75%) !important;
  --titlebar-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) !important;
  --titlebar-background-focused: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) !important;
  --titlebar-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --titlebar-text-color-focused: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) 100% c h) !important;
  --touch-radius-m: 8px !important;
  --touch-radius-s: 8px !important;
  --touch-radius-xs: 8px !important;
  --touch-radius-xxs: 8px !important;
  --traffic-lights-offset-x: 48px !important;
  --traffic-lights-offset-y: 48px !important;
  --window-border-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.8 0.0756873 293.559);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: oklch(0.98 0.0756873 263.559);
}

html[saved-theme="light"] body .bases-table {
  border-color: oklch(0.93 0.0756873 263.559);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: oklch(0.8 0.0756873 293.559);
  border-color: oklch(0.75 0.0756873 293.559);
}

html[saved-theme="light"] body .note-properties {
  background-color: oklch(0.8 0.0756873 293.559 / 0.75);
  border-color: oklch(0.93 0.0756873 263.559);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 8px;
  color: oklch(0.4 0.189218 293.559 / 0.75);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.93 0.0756873 263.559);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.65 0.0756873 323.559);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.8 0.0756873 293.559);
  border-left-color: oklch(0.65 0.0756873 323.559);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: oklch(0.93 0.0756873 263.559);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: oklch(0.35 0.12 33.5585);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.35 0.12 33.5585) none 0px;
  text-decoration-color: oklch(0.35 0.12 33.5585);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: oklch(0.35 0.12 133.559);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.35 0.12 133.559) none 0px;
  text-decoration-color: oklch(0.35 0.12 133.559);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: oklch(0.35 0.12 133.559);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.35 0.12 133.559) none 0px;
  text-decoration-color: oklch(0.35 0.12 133.559);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: oklch(0.35 0.12 33.5585);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.35 0.12 33.5585) none 0px;
  text-decoration-color: oklch(0.35 0.12 33.5585);
}

html[saved-theme="light"] body .text-highlight {
  background-color: oklch(0.8 0.12 323.559 / 0.75);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: oklch(0.5 0.12 26.4067);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.5 0.12 26.4067) none 0px;
  text-decoration-color: oklch(0.5 0.12 26.4067);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.35 0.12 293.559);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.35 0.12 293.559) none 0px;
  text-decoration-color: oklch(0.35 0.12 293.559);
}

html[saved-theme="light"] body a.internal.broken {
  color: oklch(0.5 0.12 293.559 / 0.6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.5 0.12 293.559 / 0.6) none 0px;
}`,
    lists: `html[saved-theme="light"] body ol.overflow {
  border-bottom-style: ridge;
  border-left-style: ridge;
  border-right-style: ridge;
  border-top-style: ridge;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-style: ridge;
  border-left-style: ridge;
  border-right-style: ridge;
  border-top-style: ridge;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: oklch(0.8 0.0756873 293.559 / 0.4);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-color: oklch(0.93 0.0756873 263.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 263.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 263.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 263.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  width: 240.219px;
}

html[saved-theme="light"] body td {
  background-color: oklch(0.653792 0.189218 293.559 / 0.07);
  border-bottom-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-left-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-right-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-top-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
}

html[saved-theme="light"] body th {
  border-bottom-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-left-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-right-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-top-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-top-left-radius: 12px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: oklch(0.93 0.0756873 263.559);
  border-left-color: oklch(0.93 0.0756873 263.559);
  border-right-color: oklch(0.93 0.0756873 263.559);
  border-top-color: oklch(0.93 0.0756873 263.559);
}

html[saved-theme="light"] body tr {
  background-color: oklch(0.5 0.189218 323.559 / 0.3);
  border-bottom-color: oklch(0.93 0.0756873 263.559);
  border-left-color: oklch(0.93 0.0756873 263.559);
  border-right-color: oklch(0.93 0.0756873 263.559);
  border-top-color: oklch(0.93 0.0756873 263.559);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.85 0.0756873 293.559 / 0.5);
  border-bottom-color: oklch(0.8 0.0756873 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756873 293.559);
  border-right-color: oklch(0.8 0.0756873 293.559);
  border-top-color: oklch(0.8 0.0756873 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.85 0.0756873 293.559 / 0.5);
  border-bottom-color: oklch(0.8 0.0756873 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756873 293.559);
  border-right-color: oklch(0.8 0.0756873 293.559);
  border-top-color: oklch(0.8 0.0756873 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: oklch(0.5 0.12 102.483);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.5 0.12 102.483);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.5 0.12 102.483);
  border-left-color: oklch(0.5 0.12 102.483);
  border-right-color: oklch(0.5 0.12 102.483);
  border-top-color: oklch(0.5 0.12 102.483);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: oklch(0.85 0.0756873 293.559 / 0.5);
  border-bottom-color: oklch(0.8 0.0756873 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756873 293.559);
  border-right-color: oklch(0.8 0.0756873 293.559);
  border-top-color: oklch(0.8 0.0756873 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: oklch(0.85 0.0756873 293.559 / 0.5);
  border-bottom-color: oklch(0.8 0.0756873 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756873 293.559);
  border-right-color: oklch(0.8 0.0756873 293.559);
  border-top-color: oklch(0.8 0.0756873 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `html[saved-theme="light"] body img {
  border-bottom-color: oklch(0.5 0.12 26.4067);
  border-left-color: oklch(0.5 0.12 26.4067);
  border-right-color: oklch(0.5 0.12 26.4067);
  border-top-color: oklch(0.5 0.12 26.4067);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: oklch(0.75 0.0756873 293.559);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTcxNiA4LjAwMDAzTDEuMDg1ODIgMy45MTQyNEwzLjkxNDI0IDEuMDg1ODJMOC4wMDAwMyA1LjE3MTZMMTIuMDg1OCAxLjA4NTgyTDE0LjkxNDIgMy45MTQyNEwxMC44Mjg1IDguMDAwMDNMMTQuOTE0MiAxMi4wODU4TDEyLjA4NTggMTQuOTE0Mkw4LjAwMDAzIDEwLjgyODVMMy45MTQyNCAxNC45MTQyTDEuMDg1ODIgMTIuMDg1OEw1LjE3MTYgOC4wMDAwM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTcxNiA4LjAwMDAzTDEuMDg1ODIgMy45MTQyNEwzLjkxNDI0IDEuMDg1ODJMOC4wMDAwMyA1LjE3MTZMMTIuMDg1OCAxLjA4NTgyTDE0LjkxNDIgMy45MTQyNEwxMC44Mjg1IDguMDAwMDNMMTQuOTE0MiAxMi4wODU4TDEyLjA4NTggMTQuOTE0Mkw4LjAwMDAzIDEwLjgyODVMMy45MTQyNCAxNC45MTQyTDEuMDg1ODIgMTIuMDg1OEw1LjE3MTYgOC4wMDAwM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNUgwVjEyTDcgMEg5TDE2IDEyVjE1Wk03IDRIOVY5SDdWNFpNNyAxMUg5VjEzSDdWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNUgwVjEyTDcgMEg5TDE2IDEyVjE1Wk03IDRIOVY5SDdWNFpNNyAxMUg5VjEzSDdWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 64.0453);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1LjVDNS41IDQuMTE5MjkgNi42MTkyOSAzIDggM0M5LjM4MDcxIDMgMTAuNSA0LjExOTI5IDEwLjUgNS41QzEwLjUgNi44ODA3MSA5LjM4MDcxIDggOCA4SDdWMTFIOEMxMS4wMzc2IDExIDEzLjUgOC41Mzc1NyAxMy41IDUuNUMxMy41IDIuNDYyNDMgMTEuMDM3NiAwIDggMEM0Ljk2MjQzIDAgMi41IDIuNDYyNDMgMi41IDUuNUg1LjVaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xMCAxM0g3VjE2SDEwVjEzWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1LjVDNS41IDQuMTE5MjkgNi42MTkyOSAzIDggM0M5LjM4MDcxIDMgMTAuNSA0LjExOTI5IDEwLjUgNS41QzEwLjUgNi44ODA3MSA5LjM4MDcxIDggOCA4SDdWMTFIOEMxMS4wMzc2IDExIDEzLjUgOC41Mzc1NyAxMy41IDUuNUMxMy41IDIuNDYyNDMgMTEuMDM3NiAwIDggMEM0Ljk2MjQzIDAgMi41IDIuNDYyNDMgMi41IDUuNUg1LjVaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xMCAxM0g3VjE2SDEwVjEzWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjkyODkgMS4yOTI5MUw2LjcwNzExIDIuNzA3MTJMMyA2LjQxNDIzVjcuMDAwMDFIN1YxNEgxVjUuNTg1OEw1LjI5Mjg5IDEuMjkyOTFaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xNSA3LjAwMDAxSDExVjYuNDE0MjNMMTQuNzA3MSAyLjcwNzEyTDEzLjI5MjkgMS4yOTI5MUw5IDUuNTg1OFYxNEgxNVY3LjAwMDAxWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjkyODkgMS4yOTI5MUw2LjcwNzExIDIuNzA3MTJMMyA2LjQxNDIzVjcuMDAwMDFIN1YxNEgxVjUuNTg1OEw1LjI5Mjg5IDEuMjkyOTFaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xNSA3LjAwMDAxSDExVjYuNDE0MjNMMTQuNzA3MSAyLjcwNzEyTDEzLjI5MjkgMS4yOTI5MUw5IDUuNTg1OFYxNEgxNVY3LjAwMDAxWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 294.789);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMEg3LjAwMDAxTDUuNTEyOTIgNC41NzY4MUwwLjcwMDU1NCA0LjU3NjgyTDAuMDgyNTE5NSA2LjQ3ODkzTDMuOTc1ODEgOS4zMDc1NkwyLjQ4ODczIDEzLjg4NDNMNC4xMDY3NyAxNS4wNTk5TDguMDAwMDIgMTIuMjMxM0wxMS44OTMzIDE1LjA1OTlMMTMuNTExMyAxMy44ODQzTDEyLjAyNDIgOS4zMDc1NEwxNS45MTc1IDYuNDc4OTJMMTUuMjk5NCA0LjU3NjgxTDEwLjQ4NzEgNC41NzY4MUw5LjAwMDAxIDBaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMEg3LjAwMDAxTDUuNTEyOTIgNC41NzY4MUwwLjcwMDU1NCA0LjU3NjgyTDAuMDgyNTE5NSA2LjQ3ODkzTDMuOTc1ODEgOS4zMDc1NkwyLjQ4ODczIDEzLjg4NDNMNC4xMDY3NyAxNS4wNTk5TDguMDAwMDIgMTIuMjMxM0wxMS44OTMzIDE1LjA1OTlMMTMuNTExMyAxMy44ODQzTDEyLjAyNDIgOS4zMDc1NEwxNS45MTc1IDYuNDc4OTJMMTUuMjk5NCA0LjU3NjgxTDEwLjQ4NzEgNC41NzY4MUw5LjAwMDAxIDBaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 102.483);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNEgxNFYxNkgyVjE0SDNWMTEuNTg1OEw2LjU4NTc5IDhMMyA0LjQxNDIxVjJIMlYwSDE0VjJIMTNWNC40MTQyMUw5LjQxNDIxIDhMMTMgMTEuNTg1OFYxNFpNNSAxMi40MTQyVjE0SDExVjEyLjQxNDJMOCA5LjQxNDIxTDUgMTIuNDE0MloiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNEgxNFYxNkgyVjE0SDNWMTEuNTg1OEw2LjU4NTc5IDhMMyA0LjQxNDIxVjJIMlYwSDE0VjJIMTNWNC40MTQyMUw5LjQxNDIxIDhMMTMgMTEuNTg1OFYxNFpNNSAxMi40MTQyVjE0SDExVjEyLjQxNDJMOCA5LjQxNDIxTDUgMTIuNDE0MloiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 92, 92);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMEgzVjJIMVY1SDE1VjJIMTNWMEgxMFYySDZWMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE1IDdIMVYxNUgxNVY3WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMEgzVjJIMVY1SDE1VjJIMTNWMEgxMFYySDZWMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE1IDdIMVYxNUgxNVY3WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 102.483);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMUg1TDE2IDdWOUw1IDE1SDJMMyA5SDhWN0gzTDIgMVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMUg1TDE2IDdWOUw1IDE1SDJMMyA5SDhWN0gzTDIgMVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 248.82);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEgxNFYxNkgxMkw4IDEyTDQgMTZIMlYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEgxNFYxNkgxMkw4IDEyTDQgMTZIMlYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTZMNSAxMVYySDE0TDE2IDhWMTFIMTBWMTRDMTAgMTUuMTA0NiA5LjEwNDU3IDE2IDggMTZIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTMgMTFIMFYySDNWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTZMNSAxMVYySDE0TDE2IDhWMTFIMTBWMTRDMTAgMTUuMTA0NiA5LjEwNDU3IDE2IDggMTZIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTMgMTFIMFYySDNWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEzTDkuMDAwMDEgMTJMMTEuMjkyOSA5LjcwNzEyTDguNTAwMDEgNi45MTQyM0w1LjUwMDAxIDkuOTE0MjNMMC4yOTI5MDggNC43MDcxMkwxLjcwNzEyIDMuMjkyOTFMNS41MDAwMSA3LjA4NThMOC41MDAwMSA0LjA4NThMMTIuNzA3MSA4LjI5MjkxTDE1IDYuMDAwMDFMMTYgNy4wMDAwMUwxNiAxM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEzTDkuMDAwMDEgMTJMMTEuMjkyOSA5LjcwNzEyTDguNTAwMDEgNi45MTQyM0w1LjUwMDAxIDkuOTE0MjNMMC4yOTI5MDggNC43MDcxMkwxLjcwNzEyIDMuMjkyOTFMNS41MDAwMSA3LjA4NThMOC41MDAwMSA0LjA4NThMMTIuNzA3MSA4LjI5MjkxTDE1IDYuMDAwMDFMMTYgNy4wMDAwMUwxNiAxM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA5QzE1IDEyLjg2NiAxMS44NjYgMTYgOCAxNkM0LjEzNDAxIDE2IDEgMTIuODY2IDEgOUMxIDUuNSA0IDMgNCAzSDZWNC41QzYgNS4wNTIyOCA2LjQ0NzcyIDUuNSA3IDUuNUM3LjU1MjI4IDUuNSA4IDUuMDUyMjggOCA0LjVWMEgxMEMxMCAwIDE1IDMgMTUgOVpNMTAgMTJDMTAgMTMuMTA0NiA5LjEwNDU3IDE0IDggMTRDNi44OTU0MyAxNCA2IDEzLjEwNDYgNiAxMkM2IDkuNSA4IDggOCA4QzggOCAxMCA5LjUgMTAgMTJaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA5QzE1IDEyLjg2NiAxMS44NjYgMTYgOCAxNkM0LjEzNDAxIDE2IDEgMTIuODY2IDEgOUMxIDUuNSA0IDMgNCAzSDZWNC41QzYgNS4wNTIyOCA2LjQ0NzcyIDUuNSA3IDUuNUM3LjU1MjI4IDUuNSA4IDUuMDUyMjggOCA0LjVWMEgxMEMxMCAwIDE1IDMgMTUgOVpNMTAgMTJDMTAgMTMuMTA0NiA5LjEwNDU3IDE0IDggMTRDNi44OTU0MyAxNCA2IDEzLjEwNDYgNiAxMkM2IDkuNSA4IDggOCA4QzggOCAxMCA5LjUgMTAgMTJaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDE2SDdMMCA5VjdMNyAwSDlMMTYgN1Y5TDkgMTZaTTcgM1Y5SDlWM0g3Wk03IDExVjEzSDlWMTFIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDE2SDdMMCA5VjdMNyAwSDlMMTYgN1Y5TDkgMTZaTTcgM1Y5SDlWM0g3Wk03IDExVjEzSDlWMTFIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 248.82);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDNDMTUgNS42MTUwNyAxMy4zMjcgNy44Mzk0IDEwLjk5MjkgOC42NjEwOEMxMC4zNjk0IDguODgwNTkgOS42OTg2NCA5IDkgOVYxM0gxM1YxNUgzVjEzSDdWMTFDMy42ODYyOSAxMSAxIDguMzEzNzEgMSA1VjNIM0M0LjcyNzE1IDMgNi4yODM4NiAzLjcyOTc3IDcuMzc4NTkgNC44OTc3OUM3LjkzOTcyIDUuNDk2NDcgOC4zNzk0NyA2LjIxMDMgOC42NTg1OSA3SDlDOS41ODc1MiA3IDEwLjE0NTUgNi44NzMzMyAxMC42NDggNi42NDU4MUMxMC4yMjc0IDUuMjc3NzIgOS40NDk3MyA0LjA2NTk2IDguNDIzODEgMy4xMTkyOEM5LjUyNDM5IDEuODIyNzUgMTEuMTY2MSAxIDEzIDFIMTVWM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDNDMTUgNS42MTUwNyAxMy4zMjcgNy44Mzk0IDEwLjk5MjkgOC42NjEwOEMxMC4zNjk0IDguODgwNTkgOS42OTg2NCA5IDkgOVYxM0gxM1YxNUgzVjEzSDdWMTFDMy42ODYyOSAxMSAxIDguMzEzNzEgMSA1VjNIM0M0LjcyNzE1IDMgNi4yODM4NiAzLjcyOTc3IDcuMzc4NTkgNC44OTc3OUM3LjkzOTcyIDUuNDk2NDcgOC4zNzk0NyA2LjIxMDMgOC42NTg1OSA3SDlDOS41ODc1MiA3IDEwLjE0NTUgNi44NzMzMyAxMC42NDggNi42NDU4MUMxMC4yMjc0IDUuMjc3NzIgOS40NDk3MyA0LjA2NTk2IDguNDIzODEgMy4xMTkyOEM5LjUyNDM5IDEuODIyNzUgMTEuMTY2MSAxIDEzIDFIMTVWM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 144.199);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA1LjVDMTYgOC41Mzc1NyAxMy41Mzc2IDExIDEwLjUgMTFIN1YxM0g1VjE1TDQgMTZIMFYxMkw1LjE2MzUxIDYuODM2NDlDNS4wNTY3IDYuNDA4NjMgNSA1Ljk2MDk0IDUgNS41QzUgMi40NjI0MyA3LjQ2MjQzIDAgMTAuNSAwQzEzLjUzNzYgMCAxNiAyLjQ2MjQzIDE2IDUuNVpNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA1LjVDMTYgOC41Mzc1NyAxMy41Mzc2IDExIDEwLjUgMTFIN1YxM0g1VjE1TDQgMTZIMFYxMkw1LjE2MzUxIDYuODM2NDlDNS4wNTY3IDYuNDA4NjMgNSA1Ljk2MDk0IDUgNS41QzUgMi40NjI0MyA3LjQ2MjQzIDAgMTAuNSAwQzEzLjUzNzYgMCAxNiAyLjQ2MjQzIDE2IDUuNVpNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 102.483);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3ODkyIDEwLjIyMzZMOCAxNkwxMi42MjExIDEwLjIyMzZDMTMuNTEzNyA5LjEwNzg4IDE0IDcuNzIxNTQgMTQgNi4yOTI2NlY2QzE0IDIuNjg2MjkgMTEuMzEzNyAwIDggMEM0LjY4NjI5IDAgMiAyLjY4NjI5IDIgNlY2LjI5MjY2QzIgNy43MjE1NCAyLjQ4NjMgOS4xMDc4OCAzLjM3ODkyIDEwLjIyMzZaTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3ODkyIDEwLjIyMzZMOCAxNkwxMi42MjExIDEwLjIyMzZDMTMuNTEzNyA5LjEwNzg4IDE0IDcuNzIxNTQgMTQgNi4yOTI2NlY2QzE0IDIuNjg2MjkgMTEuMzEzNyAwIDggMEM0LjY4NjI5IDAgMiAyLjY4NjI5IDIgNlY2LjI5MjY2QzIgNy43MjE1NCAyLjQ4NjMgOS4xMDc4OCAzLjM3ODkyIDEwLjIyMzZaTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEw1IDVWMTRIMTRMMTYgOFY1SDEwVjJDMTAgMC44OTU0MzEgOS4xMDQ1NyAwIDggMEg3WiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMyA1SDBWMTRIM1Y1WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEw1IDVWMTRIMTRMMTYgOFY1SDEwVjJDMTAgMC44OTU0MzEgOS4xMDQ1NyAwIDggMEg3WiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMyA1SDBWMTRIM1Y1WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 144.199);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjIxNjA2IDE1TDYuMTA0OTUgMTZIOC4xMTcyNkw4LjIyODM3IDE1SDEwLjAwM0MxMi4yMTA1IDE1IDE0IDEzLjIxMDUgMTQgMTEuMDAzQzE0IDkuMTI5NjMgMTIuNjk4OSA3LjUwNzYgMTAuODcwMSA3LjEwMTJMOS4xNDg1MiA2LjcxODY0TDkuNDUwNTkgNEgxM1YxSDkuNzgzOTNMOS44OTUwNCAwSDcuODgyNzNMNy43NzE2MiAxSDUuOTk2OTlDMy43ODk1MSAxIDIgMi43ODk1MSAyIDQuOTk2OTlDMiA2Ljg3MDM3IDMuMzAxMTUgOC40OTI0IDUuMTI5OTIgOC44OTg4TDYuODUxNDcgOS4yODEzNkw2LjU0OTM5IDEySDNWMTVINi4yMTYwNlpNOC41NjE3IDEySDEwLjAwM0MxMC41NTM2IDEyIDExIDExLjU1MzYgMTEgMTEuMDAzQzExIDEwLjUzNTcgMTAuNjc1NCAxMC4xMzExIDEwLjIxOTMgMTAuMDI5OEw4LjgxNTI4IDkuNzE3NzZMOC41NjE3IDEyWk03LjE4NDcgNi4yODIyM0w3LjQzODI4IDRINS45OTY5OUM1LjQ0NjM3IDQgNSA0LjQ0NjM3IDUgNC45OTY5OUM1IDUuNDY0MjcgNS4zMjQ1NSA1Ljg2ODg3IDUuNzgwNzEgNS45NzAyM0w3LjE4NDcgNi4yODIyM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjIxNjA2IDE1TDYuMTA0OTUgMTZIOC4xMTcyNkw4LjIyODM3IDE1SDEwLjAwM0MxMi4yMTA1IDE1IDE0IDEzLjIxMDUgMTQgMTEuMDAzQzE0IDkuMTI5NjMgMTIuNjk4OSA3LjUwNzYgMTAuODcwMSA3LjEwMTJMOS4xNDg1MiA2LjcxODY0TDkuNDUwNTkgNEgxM1YxSDkuNzgzOTNMOS44OTUwNCAwSDcuODgyNzNMNy43NzE2MiAxSDUuOTk2OTlDMy43ODk1MSAxIDIgMi43ODk1MSAyIDQuOTk2OTlDMiA2Ljg3MDM3IDMuMzAxMTUgOC40OTI0IDUuMTI5OTIgOC44OTg4TDYuODUxNDcgOS4yODEzNkw2LjU0OTM5IDEySDNWMTVINi4yMTYwNlpNOC41NjE3IDEySDEwLjAwM0MxMC41NTM2IDEyIDExIDExLjU1MzYgMTEgMTEuMDAzQzExIDEwLjUzNTcgMTAuNjc1NCAxMC4xMzExIDEwLjIxOTMgMTAuMDI5OEw4LjgxNTI4IDkuNzE3NzZMOC41NjE3IDEyWk03LjE4NDcgNi4yODIyM0w3LjQzODI4IDRINS45OTY5OUM1LjQ0NjM3IDQgNSA0LjQ0NjM3IDUgNC45OTY5OUM1IDUuNDY0MjcgNS4zMjQ1NSA1Ljg2ODg3IDUuNzgwNzEgNS45NzAyM0w3LjE4NDcgNi4yODIyM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 144.199);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDNMOS4wMDAwMSA0TDExLjI5MjkgNi4yOTI4OUw4LjUwMDAxIDkuMDg1NzlMNS41MDAwMSA2LjA4NTc5TDAuMjkyOTA4IDExLjI5MjlMMS43MDcxMiAxMi43MDcxTDUuNTAwMDEgOC45MTQyMUw4LjUwMDAxIDExLjkxNDJMMTIuNzA3MSA3LjcwNzExTDE1IDEwTDE2IDlMMTYgM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDNMOS4wMDAwMSA0TDExLjI5MjkgNi4yOTI4OUw4LjUwMDAxIDkuMDg1NzlMNS41MDAwMSA2LjA4NTc5TDAuMjkyOTA4IDExLjI5MjlMMS43MDcxMiAxMi43MDcxTDUuNTAwMDEgOC45MTQyMUw4LjUwMDAxIDExLjkxNDJMMTIuNzA3MSA3LjcwNzExTDE1IDEwTDE2IDlMMTYgM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 144.199);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBIMTJWMkgxNlY0QzE2IDYuNDU2NDEgMTQuMjI4NiA4LjQ5OTA5IDExLjg5MzYgOC45MjAzOEMxMS41NTM3IDEwLjM2MzcgMTAuNDMyIDExLjUwNTQgOSAxMS44NzRWMTRIMTJWMTZINFYxNEg3VjExLjg3NEM1LjU2Nzk2IDExLjUwNTQgNC40NDYyOCAxMC4zNjM3IDQuMTA2NCA4LjkyMDM4QzEuNzcxMzYgOC40OTkwOSAwIDYuNDU2NDEgMCA0VjJINFYwWk0xMiA2LjgyOTI5VjRIMTRDMTQgNS4zMDYyMiAxMy4xNjUyIDYuNDE3NDYgMTIgNi44MjkyOVpNNCA0SDJDMiA1LjMwNjIyIDIuODM0ODEgNi40MTc0NiA0IDYuODI5MjlWNFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBIMTJWMkgxNlY0QzE2IDYuNDU2NDEgMTQuMjI4NiA4LjQ5OTA5IDExLjg5MzYgOC45MjAzOEMxMS41NTM3IDEwLjM2MzcgMTAuNDMyIDExLjUwNTQgOSAxMS44NzRWMTRIMTJWMTZINFYxNEg3VjExLjg3NEM1LjU2Nzk2IDExLjUwNTQgNC40NDYyOCAxMC4zNjM3IDQuMTA2NCA4LjkyMDM4QzEuNzcxMzYgOC40OTkwOSAwIDYuNDU2NDEgMCA0VjJINFYwWk0xMiA2LjgyOTI5VjRIMTRDMTQgNS4zMDYyMiAxMy4xNjUyIDYuNDE3NDYgMTIgNi44MjkyOVpNNCA0SDJDMiA1LjMwNjIyIDIuODM0ODEgNi40MTc0NiA0IDYuODI5MjlWNFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 102.483);
  color: rgb(34, 34, 34);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
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
  background-color: oklch(0.98 0.0756873 263.559);
  border-bottom-color: oklch(0.25 0.189218 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.25 0.189218 293.559);
  border-right-color: oklch(0.25 0.189218 293.559);
  border-top-color: oklch(0.25 0.189218 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: oklch(0.93 0.0756873 263.559);
  border-bottom-color: oklch(0.93 0.0756873 263.559);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 263.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 263.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 263.559);
  border-top-style: ridge;
  border-top-width: 4px;
  box-shadow: oklch(0 0 0 / 0.4) 0px 0px 12px 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.93 0.0756873 263.559);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 263.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 263.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 263.559);
  border-top-style: ridge;
  border-top-width: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: oklch(0.98 0.0756873 263.559);
  border-bottom-color: oklch(0.25 0.189218 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.25 0.189218 293.559);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189218 293.559);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189218 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: oklch(0.5 0.0756873 293.559) 2px 2px 0px 0px inset, oklch(1 0.0756873 293.559) -2px -2px 0px 0px inset;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-left-width: 4px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: oklch(0.4 0.189218 293.559 / 0.75);
}

html[saved-theme="light"] body h1 {
  color: oklch(0.5 0.12 26.4067);
}

html[saved-theme="light"] body h2 {
  color: oklch(0.5 0.12 64.0453);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: oklch(0.5 0.12 26.4067);
}

html[saved-theme="light"] body h3 {
  color: oklch(0.5 0.12 102.483);
}

html[saved-theme="light"] body h4 {
  color: oklch(0.5 0.12 144.199);
}

html[saved-theme="light"] body h5 {
  color: oklch(0.5 0.12 248.82);
}

html[saved-theme="light"] body h6 {
  color: oklch(0.5 0.12 271.409);
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.65 0.0756873 323.559);
  border-left-color: oklch(0.65 0.0756873 323.559);
  border-right-color: oklch(0.65 0.0756873 323.559);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: oklch(0.93 0.0756873 263.559) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756873 263.559);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: oklch(0.93 0.0756873 263.559) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756873 263.559);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: oklch(0.93 0.0756873 263.559) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756873 263.559);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.93 0.0756873 263.559) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756873 263.559);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.93 0.0756873 263.559) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756873 263.559);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: oklch(0.93 0.0756873 263.559) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756873 263.559);
}`,
    explorer: `html[saved-theme="light"] body .explorer {
  background-color: oklch(0.98 0.0756873 263.559);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.5 0.12 26.4067);
  font-weight: 700;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.5 0.12 26.4067);
  font-weight: 700;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: oklch(0.93 0.0756873 263.559);
  border-bottom-color: oklch(0.25 0.189218 293.559);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.189218 293.559);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189218 293.559);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189218 293.559);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: oklch(0.6 0.0756873 263.559);
  border-bottom-color: oklch(0.65 0.0756873 323.559);
  border-left-color: oklch(0.65 0.0756873 323.559);
  border-left-width: 0px;
  border-right-color: oklch(0.65 0.0756873 323.559);
  border-top-color: oklch(0.65 0.0756873 323.559);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: oklch(1 0.0756873 263.559);
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(1 0.0756873 263.559);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: oklch(0.5 0.12 26.4067 / 0.3);
  border-bottom-color: oklch(0.55 0.12 263.559 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.55 0.12 263.559 / 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.55 0.12 263.559 / 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.55 0.12 263.559 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: oklch(0.5 0.12 26.4067 / 0.3);
  border-bottom-color: oklch(0.55 0.12 263.559 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.55 0.12 263.559 / 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.55 0.12 263.559 / 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.55 0.12 263.559 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body ul.section-ul {
  background-color: oklch(0.98 0.0756873 263.559);
  border-bottom-color: oklch(0.93 0.0756873 263.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 263.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 263.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 263.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: oklch(0.93 0.0756873 263.559);
  border-bottom-color: oklch(0.25 0.189218 293.559);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.189218 293.559);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189218 293.559);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189218 293.559);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  background-color: oklch(0.8 0.0756873 293.559 / 0.75);
  border-bottom-color: oklch(0.93 0.0756873 263.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 263.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 263.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 263.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  margin-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: oklch(0.6 0.0756873 263.559);
}

html[saved-theme="light"] body kbd {
  background-color: oklch(0.85 0.0756873 293.559 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: oklch(0.251963 0.0000125793 23.5283 / 0.25) 0px 0px 0px 1px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: oklch(0.4 0.189218 293.559 / 0.1);
  border-bottom-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-left-width: 4px;
  border-right-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-right-width: 1px;
  border-top-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: oklch(0.4 0.189218 293.559 / 0.75);
}`,
  },
};
