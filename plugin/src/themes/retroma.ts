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
  --accent-1: oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) !important;
  --accent-2: oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-modifier-border: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --background-modifier-border-focus: oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
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
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  ) !important;
  --background-primary: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --background-primary-alt: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  ) !important;
  --background-secondary: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) !important;
  --background-secondary-alt: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 22% calc(c * 0.3) h
  ) !important;
  --background-tertiary: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) !important;
  --base-accent: oklch(from rgb(138, 92, 245) l c h) !important;
  --bases-cards-background: oklch(from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) 25% c h) !important;
  --bases-cards-border-width: 4px !important;
  --bases-cards-cover-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  ) !important;
  --bases-cards-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --bases-embed-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --bases-embed-border-radius: 12px !important;
  --bases-table-border-color: oklch(from #dadada 50% c h / 50%) !important;
  --bases-table-cell-background-active: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --bases-table-cell-background-disabled: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  ) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) 70% c h
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  ) !important;
  --bases-table-header-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --bases-table-header-weight: 100 !important;
  --bases-table-summary-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --blockquote-background-color: oklch(
    from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h / 40%
  ) !important;
  --blockquote-border-color: oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h / 75%) !important;
  --blockquote-border-thickness: 4px !important;
  --bold-color: oklch(
    from oklch(from rgb(138, 92, 245) l c h) calc(70% + 10%) 20%
      calc(h + 100)
  ) !important;
  --bold-weight: 600 !important;
  --border-groove: 4px groove oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  ) !important;
  --border-ridge: 4px ridge oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --border-solid: 4px solid oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  ) !important;
  --box-shadow: inset -2px -2px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 0% c h),
    inset 2px 2px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 50% c h) !important;
  --box-shadow-active: inset 2px 2px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 0% c h),
    inset -2px -2px oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h) !important;
  --box-shadow-active-sm: inset 1px 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 0% c h),
    inset -1px -1px oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h) !important;
  --box-shadow-sm: inset -1px -1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 0% c h),
    inset 1px 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 50% c h) !important;
  --button-active: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 25% c h) !important;
  --button-border-radius: 8px !important;
  --button-hover: oklch(from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  ) l c h) !important;
  --button-normal: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --button-radius: 12px !important;
  --button-text: #dadada !important;
  --callout-border-width: 4px;
  --callout-radius: 12px;
  --callout-title-weight: 600;
  --canvas-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: #666666 !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --checkbox-marker-color: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  ) !important;
  --checkbox-radius: 12px !important;
  --chroma: 20% !important;
  --chroma-accent: 0.3 !important;
  --chroma-folder: 20% !important;
  --clickable-icon-radius: 8px !important;
  --code-background: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 10% c h / 50%) !important;
  --code-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
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
  --collapse-icon-color-collapsed: rgb(166, 139, 249) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
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
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  ) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h), inset 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --file-header-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --file-header-background-focused: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) !important;
  --file-margins: 16px !important;
  --folder-accent-1: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --folder-accent-10: oklch(
    from #8bc34a 70% 20% h
  ) !important;
  --folder-accent-11: oklch(
    from #009688 70% 20% h
  ) !important;
  --folder-accent-12: oklch(
    from #673ab7 70% 20% h
  ) !important;
  --folder-accent-13: oklch(
    from #e91e63 70% 20% h
  ) !important;
  --folder-accent-14: oklch(
    from #f48fb1 70% 20% h
  ) !important;
  --folder-accent-15: oklch(
    from #00bcd4 70% 20% h
  ) !important;
  --folder-accent-2: oklch(
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
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --footnote-radius: 8px !important;
  --graph-node-attachment: oklch(
    from #ffeb3b 70% 20% h
  ) !important;
  --graph-node-focused: rgb(166, 139, 249) !important;
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
  --heading-spacing: 2.5rem !important;
  --highlight: oklch(from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 50% 20% h / 75%) !important;
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
  --icon-color-active: rgb(166, 139, 249) !important;
  --img-border-color: oklch(from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) l 20% h) !important;
  --img-border-radius: 0px !important;
  --img-border-width: 0px !important;
  --inline-title-color: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --input-border-width: 2px !important;
  --input-radius: 12px !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --interactive-active: oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h / 50%) !important;
  --italic-color: oklch(
    from oklch(from rgb(138, 92, 245) l c h) calc(70% + 10%) 20%
      calc(h + 200)
  ) !important;
  --light: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --lightgray: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) !important;
  --lightness: 70% !important;
  --link-color: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 80% 20% h
  ) !important;
  --link-color-hover: oklch(
    from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 80% 20% h
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
    from oklch(from rgb(138, 92, 245) l c h) 80% 20% h
  ) 80% 20% h / 60%
  ) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --link-weight: 700 !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(166, 139, 249) !important;
  --menu-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  ) !important;
  --metadata-background: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h / 75%) !important;
  --metadata-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --metadata-border-radius: 12px !important;
  --metadata-divider-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --metadata-gap: 8px !important;
  --metadata-input-height: 28px !important;
  --metadata-label-background: oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) l c h / 15%
  ) !important;
  --metadata-label-background-active: oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) l c h / 30%
  ) !important;
  --metadata-label-background-hover: oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) l c h / 30%
  ) !important;
  --metadata-label-font-weight: 700 !important;
  --metadata-label-width: 8em !important;
  --metadata-property-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  ) !important;
  --metadata-property-background-hover: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) 70% c h
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) !important;
  --metadata-property-radius: 12px !important;
  --metadata-property-radius-focus: 12px !important;
  --metadata-property-radius-hover: 12px !important;
  --mobile-sidebar-width: 100% !important;
  --modal-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(166, 139, 249) !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #b3b3b3 !important;
  --nav-tag-radius: 8px !important;
  --outline-color: oklch(from oklch(from rgb(138, 92, 245) l c h) 25% c h) !important;
  --pdf-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --pdf-page-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --pdf-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --pdf-sidebar-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --pill-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --pill-color-remove-hover: rgb(166, 139, 249) !important;
  --prompt-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --radius-s: 8px !important;
  --radius-xs: 8px !important;
  --radius-xxs: 8px !important;
  --ribbon-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) !important;
  --ribbon-background-collapsed: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) !important;
  --rotation-1: 30 !important;
  --rotation-2: 330 !important;
  --search-result-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --secondary: rgb(166, 139, 249) !important;
  --setting-items-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --setting-items-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --settings-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  ) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-track-background: oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h / 50%) !important;
  --slider-track-height: 6px !important;
  --status-bar-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) !important;
  --status-bar-border-color: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  ) !important;
  --strong-emphasis: oklch(
    from oklch(from rgb(138, 92, 245) l c h) calc(70% + 10%) 20%
      calc(h + 200)
  ) !important;
  --suggestion-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
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
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) !important;
  --tab-container-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) !important;
  --tab-outline-color: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  ) !important;
  --tab-radius: 8px !important;
  --tab-stacked-header-width: 48px !important;
  --tab-switcher-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ), transparent) !important;
  --tab-switcher-preview-radius: 12px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249) !important;
  --table-add-button-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --table-border-color: oklch(from #dadada 50% c h / 50%) !important;
  --table-border-spacing: 2px !important;
  --table-data-background: oklch(from oklch(from rgb(138, 92, 245) l c h) l c h / 7%) !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-header-background: oklch(from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 50% c h / 30%) !important;
  --table-header-border-color: oklch(from #dadada 50% c h / 50%) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: oklch(from oklch(from rgb(138, 92, 245) l c h) 80% c h / 75%) !important;
  --tag-color-hover: rgb(166, 139, 249) !important;
  --tag-radius: 8px !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: rgb(197, 182, 252) !important;
  --text-error: oklch(
    from #d32f2f 70% 20% h
  ) !important;
  --text-highlight-bg: oklch(from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 50% 20% h / 75%) !important;
  --text-selection: oklch(from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 45% c h / 75%) !important;
  --text-success: oklch(
    from #4caf50 70% 20% h
  ) !important;
  --text-warning: oklch(
    from #ff9800 70% 20% h
  ) !important;
  --textHighlight: oklch(from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 50% 20% h / 75%) !important;
  --titlebar-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  ) !important;
  --titlebar-background-focused: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  ) !important;
  --titlebar-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h) !important;
  --touch-radius-m: 8px !important;
  --touch-radius-s: 8px !important;
  --touch-radius-xs: 8px !important;
  --touch-radius-xxs: 8px !important;
  --traffic-lights-offset-x: 48px !important;
  --traffic-lights-offset-y: 48px !important;
  --window-border-radius: 12px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.24 0.0651598 292.488);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.18 0.0651598 322.488);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.24 0.0651598 292.488);
  border-left-color: oklch(0.18 0.0651598 322.488);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: oklch(0.28 0.0651598 262.488);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: oklch(0.8 0.08 32.4879);
  outline: oklch(0.8 0.08 32.4879) none 0px;
  text-decoration: oklch(0.8 0.08 32.4879);
  text-decoration-color: oklch(0.8 0.08 32.4879);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: oklch(0.8 0.08 132.488);
  outline: oklch(0.8 0.08 132.488) none 0px;
  text-decoration: oklch(0.8 0.08 132.488);
  text-decoration-color: oklch(0.8 0.08 132.488);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: oklch(0.8 0.08 132.488);
  outline: oklch(0.8 0.08 132.488) none 0px;
  text-decoration: oklch(0.8 0.08 132.488);
  text-decoration-color: oklch(0.8 0.08 132.488);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: oklch(0.8 0.08 32.4879);
  outline: oklch(0.8 0.08 32.4879) none 0px;
  text-decoration: oklch(0.8 0.08 32.4879);
  text-decoration-color: oklch(0.8 0.08 32.4879);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: oklch(0.5 0.08 322.488 / 0.75);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: oklch(0.7 0.08 26.4069);
  font-weight: 700;
  outline: oklch(0.7 0.08 26.4069) none 0px;
  text-decoration: underline oklch(0.7 0.08 26.4069);
  text-decoration-color: oklch(0.7 0.08 26.4069);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.8 0.08 292.488);
  font-weight: 700;
  outline: oklch(0.8 0.08 292.488) none 0px;
  text-decoration: underline oklch(0.8 0.08 292.488);
  text-decoration-color: oklch(0.8 0.08 292.488);
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.8 0.08 292.488 / 0.6);
  font-weight: 700;
  outline: oklch(0.8 0.08 292.488 / 0.6) none 0px;
}`,
    lists: `html[saved-theme="dark"] body ol.overflow {
  background-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: oklch(0.28 0.0651598 262.488);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: oklch(0.24 0.0651598 292.488 / 0.4);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  width: 240.219px;
}

html[saved-theme="dark"] body td {
  background-color: oklch(0.60342 0.217199 292.488 / 0.07);
  border-bottom-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-left-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-right-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-top-color: oklch(0.5 0.000044225 23.6802 / 0.5);
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-left-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-right-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-top-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-top-left-radius: 12px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-top-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body tr {
  background-color: oklch(0.5 0.217199 322.488 / 0.3);
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-top-color: oklch(0.28 0.0651598 262.488);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-color: oklch(0.24 0.0651598 292.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.24 0.0651598 292.488);
  border-right-color: oklch(0.24 0.0651598 292.488);
  border-top-color: oklch(0.24 0.0651598 292.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-color: oklch(0.24 0.0651598 292.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.24 0.0651598 292.488);
  border-right-color: oklch(0.24 0.0651598 292.488);
  border-top-color: oklch(0.24 0.0651598 292.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: oklch(0.7 0.08 102.472);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.7 0.08 102.472);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.7 0.08 102.472);
  border-left-color: oklch(0.7 0.08 102.472);
  border-right-color: oklch(0.7 0.08 102.472);
  border-top-color: oklch(0.7 0.08 102.472);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-color: oklch(0.24 0.0651598 292.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.24 0.0651598 292.488);
  border-right-color: oklch(0.24 0.0651598 292.488);
  border-top-color: oklch(0.24 0.0651598 292.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-color: oklch(0.24 0.0651598 292.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.24 0.0651598 292.488);
  border-right-color: oklch(0.24 0.0651598 292.488);
  border-top-color: oklch(0.24 0.0651598 292.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: oklch(0.26 0.0651598 292.488);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: oklch(0.32 0.0651598 262.488);
  border-bottom-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-left-width: 2px;
  border-right-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-right-width: 2px;
  border-top-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: oklch(0.28 0.0651598 262.488);
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-style: ridge;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: oklch(0.32 0.0651598 262.488);
  border-bottom-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.8 0.217199 292.488 / 0.75);
  border-left-width: 4px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: oklch(0.8 0.217199 292.488 / 0.75);
}

html[saved-theme="dark"] body h1 {
  color: oklch(0.7 0.08 26.4069);
}

html[saved-theme="dark"] body h2 {
  color: oklch(0.7 0.08 64.0404);
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: oklch(0.7 0.08 26.4069);
}

html[saved-theme="dark"] body h3 {
  color: oklch(0.7 0.08 102.472);
}

html[saved-theme="dark"] body h4 {
  color: oklch(0.7 0.08 144.2);
}

html[saved-theme="dark"] body h5 {
  color: oklch(0.7 0.08 248.819);
}

html[saved-theme="dark"] body h6 {
  color: oklch(0.7 0.08 271.406);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.18 0.0651598 322.488);
  border-left-color: oklch(0.18 0.0651598 322.488);
  border-right-color: oklch(0.18 0.0651598 322.488);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
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
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.7 0.08 64.0404);
  font-weight: 700;
  text-decoration: oklch(0.7 0.08 64.0404);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.7 0.08 64.0404);
  font-weight: 700;
  text-decoration: oklch(0.7 0.08 64.0404);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: oklch(0.28 0.0651598 262.488);
  border-bottom-color: oklch(0.25 0.217199 292.488);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.217199 292.488);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.217199 292.488);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.217199 292.488);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: oklch(0.2 0.0651598 262.488);
  border-bottom-color: oklch(0.18 0.0651598 322.488);
  border-left-color: oklch(0.18 0.0651598 322.488);
  border-left-width: 0px;
  border-right-color: oklch(0.18 0.0651598 322.488);
  border-top-color: oklch(0.18 0.0651598 322.488);
  border-top-left-radius: 0px;
  border-top-width: 0px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: oklch(0.7 0.08 64.0404 / 0.3);
  border-bottom-color: oklch(0.55 0.08 262.488 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: oklch(0.55 0.08 262.488 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.55 0.08 262.488 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.55 0.08 262.488 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: oklch(0.7 0.08 64.0404 / 0.3);
  border-bottom-color: oklch(0.55 0.08 262.488 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: oklch(0.55 0.08 262.488 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.55 0.08 262.488 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.55 0.08 262.488 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: oklch(0.32 0.0651598 262.488);
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: oklch(0.28 0.0651598 262.488);
  border-bottom-color: oklch(0.25 0.217199 292.488);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.217199 292.488);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.217199 292.488);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.217199 292.488);
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
  background-color: oklch(0.24 0.0651598 292.488 / 0.75);
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  margin-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: oklch(0.2 0.0651598 262.488);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body kbd {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: oklch(0.888303 0.000044225 23.6802 / 0.25) 0px 0px 0px 1px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) !important;
  --accent-2: oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
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
  --base-accent: oklch(from rgb(153, 115, 247) l c h) !important;
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
  --bases-table-border-color: oklch(from #222222 50% c h / 50%) !important;
  --bases-table-cell-background-active: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --bases-table-cell-background-disabled: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 70% c h
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247) !important;
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
  --blockquote-border-color: oklch(from oklch(from rgb(153, 115, 247) l c h) 50% c h / 75%) !important;
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
  --bold-weight: 600 !important;
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
  --callout-title-weight: 600;
  --canvas-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: #ababab !important;
  --checkbox-color: rgb(153, 115, 247) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
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
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
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
  --divider-color-hover: rgb(153, 115, 247) !important;
  --divider-width: 0px !important;
  --embed-block-shadow-hover: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h), inset 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --embed-border-start: 2px solid rgb(153, 115, 247) !important;
  --file-header-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --file-header-background-focused: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) !important;
  --file-margins: 16px !important;
  --folder-accent-1: oklch(
    from #d32f2f 50% 30% h
  ) !important;
  --folder-accent-10: oklch(
    from #8bc34a 50% 30% h
  ) !important;
  --folder-accent-11: oklch(
    from #009688 50% 30% h
  ) !important;
  --folder-accent-12: oklch(
    from #673ab7 50% 30% h
  ) !important;
  --folder-accent-13: oklch(
    from #e91e63 50% 30% h
  ) !important;
  --folder-accent-14: oklch(
    from #f48fb1 50% 30% h
  ) !important;
  --folder-accent-15: oklch(
    from #00bcd4 50% 30% h
  ) !important;
  --folder-accent-2: oklch(
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
  --graph-node-focused: rgb(138, 92, 245) !important;
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
  --heading-spacing: 2.5rem !important;
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
  --icon-color-active: rgb(138, 92, 245) !important;
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
  --interactive-accent: rgb(153, 115, 247) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --interactive-active: oklch(from oklch(from rgb(153, 115, 247) l c h) 50% c h / 50%) !important;
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
    from oklch(from rgb(153, 115, 247) l c h) 35% 30% h
  ) !important;
  --link-color-hover: oklch(
    from oklch(
    from oklch(from rgb(153, 115, 247) l c h) 35% 30% h
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
    from oklch(from rgb(153, 115, 247) l c h) 35% 30% h
  ) 50% 30% h / 60%
  ) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --link-weight: 700 !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
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
  --metadata-input-height: 28px !important;
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
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #5c5c5c !important;
  --nav-tag-radius: 8px !important;
  --outline-color: oklch(from oklch(from rgb(153, 115, 247) l c h) 25% c h) !important;
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
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --prompt-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --radius-s: 8px !important;
  --radius-xs: 8px !important;
  --radius-xxs: 8px !important;
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
  --secondary: rgb(138, 92, 245) !important;
  --setting-items-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) !important;
  --setting-items-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --settings-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-track-background: oklch(from oklch(from rgb(153, 115, 247) l c h) 50% c h / 50%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-add-button-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h) !important;
  --table-border-color: oklch(from #222222 50% c h / 50%) !important;
  --table-border-spacing: 2px !important;
  --table-data-background: oklch(from oklch(from rgb(153, 115, 247) l c h) l c h / 7%) !important;
  --table-drag-handle-background-active: rgb(153, 115, 247) !important;
  --table-header-background: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 50% c h / 30%) !important;
  --table-header-border-color: oklch(from #222222 50% c h / 50%) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(153, 115, 247) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: oklch(from oklch(from rgb(153, 115, 247) l c h) 40% c h / 75%) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tag-radius: 8px !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.8 0.0756825 293.56);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.65 0.0756825 323.56);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.8 0.0756825 293.56);
  border-left-color: oklch(0.65 0.0756825 323.56);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: oklch(0.93 0.0756825 263.56);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: oklch(0.35 0.12 33.5595);
  outline: oklch(0.35 0.12 33.5595) none 0px;
  text-decoration: oklch(0.35 0.12 33.5595);
  text-decoration-color: oklch(0.35 0.12 33.5595);
}

html[saved-theme="light"] body .page article p > em, em {
  color: oklch(0.35 0.12 133.56);
  outline: oklch(0.35 0.12 133.56) none 0px;
  text-decoration: oklch(0.35 0.12 133.56);
  text-decoration-color: oklch(0.35 0.12 133.56);
}

html[saved-theme="light"] body .page article p > i, i {
  color: oklch(0.35 0.12 133.56);
  outline: oklch(0.35 0.12 133.56) none 0px;
  text-decoration: oklch(0.35 0.12 133.56);
  text-decoration-color: oklch(0.35 0.12 133.56);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: oklch(0.35 0.12 33.5595);
  outline: oklch(0.35 0.12 33.5595) none 0px;
  text-decoration: oklch(0.35 0.12 33.5595);
  text-decoration-color: oklch(0.35 0.12 33.5595);
}

html[saved-theme="light"] body .text-highlight {
  background-color: oklch(0.8 0.12 323.56 / 0.75);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: oklch(0.5 0.12 26.4069);
  font-weight: 700;
  outline: oklch(0.5 0.12 26.4069) none 0px;
  text-decoration: underline oklch(0.5 0.12 26.4069);
  text-decoration-color: oklch(0.5 0.12 26.4069);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.35 0.12 293.56);
  font-weight: 700;
  outline: oklch(0.35 0.12 293.56) none 0px;
  text-decoration: underline oklch(0.35 0.12 293.56);
  text-decoration-color: oklch(0.35 0.12 293.56);
}

html[saved-theme="light"] body a.internal.broken {
  color: oklch(0.5 0.12 293.56 / 0.6);
  font-weight: 700;
  outline: oklch(0.5 0.12 293.56 / 0.6) none 0px;
}`,
    lists: `html[saved-theme="light"] body ol.overflow {
  background-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body ul.overflow {
  background-color: oklch(0.93 0.0756825 263.56);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: oklch(0.8 0.0756825 293.56 / 0.4);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  width: 240.219px;
}

html[saved-theme="light"] body td {
  background-color: oklch(0.653757 0.189206 293.56 / 0.07);
  border-bottom-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-left-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-right-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-top-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
}

html[saved-theme="light"] body th {
  border-bottom-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-left-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-right-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-top-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-top-left-radius: 12px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-top-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body tr {
  background-color: oklch(0.5 0.189206 323.56 / 0.3);
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-top-color: oklch(0.93 0.0756825 263.56);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-color: oklch(0.8 0.0756825 293.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756825 293.56);
  border-right-color: oklch(0.8 0.0756825 293.56);
  border-top-color: oklch(0.8 0.0756825 293.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-color: oklch(0.8 0.0756825 293.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756825 293.56);
  border-right-color: oklch(0.8 0.0756825 293.56);
  border-top-color: oklch(0.8 0.0756825 293.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: oklch(0.5 0.12 102.472);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.5 0.12 102.472);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.5 0.12 102.472);
  border-left-color: oklch(0.5 0.12 102.472);
  border-right-color: oklch(0.5 0.12 102.472);
  border-top-color: oklch(0.5 0.12 102.472);
}

html[saved-theme="light"] body pre > code, pre:has(> code) {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-color: oklch(0.8 0.0756825 293.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756825 293.56);
  border-right-color: oklch(0.8 0.0756825 293.56);
  border-top-color: oklch(0.8 0.0756825 293.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-color: oklch(0.8 0.0756825 293.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756825 293.56);
  border-right-color: oklch(0.8 0.0756825 293.56);
  border-top-color: oklch(0.8 0.0756825 293.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: oklch(0.75 0.0756825 293.56);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
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
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: oklch(0.98 0.0756825 263.56);
  border-bottom-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-left-width: 2px;
  border-right-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-right-width: 2px;
  border-top-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: oklch(0.93 0.0756825 263.56);
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-style: ridge;
  border-top-width: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: oklch(0.98 0.0756825 263.56);
  border-bottom-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.4 0.189206 293.56 / 0.75);
  border-left-width: 4px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: oklch(0.4 0.189206 293.56 / 0.75);
}

html[saved-theme="light"] body h1 {
  color: oklch(0.5 0.12 26.4069);
}

html[saved-theme="light"] body h2 {
  color: oklch(0.5 0.12 64.0404);
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: oklch(0.5 0.12 26.4069);
}

html[saved-theme="light"] body h3 {
  color: oklch(0.5 0.12 102.472);
}

html[saved-theme="light"] body h4 {
  color: oklch(0.5 0.12 144.2);
}

html[saved-theme="light"] body h5 {
  color: oklch(0.5 0.12 248.819);
}

html[saved-theme="light"] body h6 {
  color: oklch(0.5 0.12 271.406);
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.65 0.0756825 323.56);
  border-left-color: oklch(0.65 0.0756825 323.56);
  border-right-color: oklch(0.65 0.0756825 323.56);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.5 0.12 64.0404);
  font-weight: 700;
  text-decoration: oklch(0.5 0.12 64.0404);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.5 0.12 64.0404);
  font-weight: 700;
  text-decoration: oklch(0.5 0.12 64.0404);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: oklch(0.93 0.0756825 263.56);
  border-bottom-color: oklch(0.25 0.189206 293.56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.189206 293.56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189206 293.56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189206 293.56);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: oklch(0.6 0.0756825 263.56);
  border-bottom-color: oklch(0.65 0.0756825 323.56);
  border-left-color: oklch(0.65 0.0756825 323.56);
  border-left-width: 0px;
  border-right-color: oklch(0.65 0.0756825 323.56);
  border-top-color: oklch(0.65 0.0756825 323.56);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: oklch(1 0.0756825 263.56);
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(1 0.0756825 263.56);
  text-decoration: oklch(1 0.0756825 263.56);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: oklch(0.5 0.12 64.0404 / 0.3);
  border-bottom-color: oklch(0.55 0.12 263.56 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: oklch(0.55 0.12 263.56 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.55 0.12 263.56 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.55 0.12 263.56 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: oklch(0.5 0.12 64.0404 / 0.3);
  border-bottom-color: oklch(0.55 0.12 263.56 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: oklch(0.55 0.12 263.56 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.55 0.12 263.56 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.55 0.12 263.56 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body ul.section-ul {
  background-color: oklch(0.98 0.0756825 263.56);
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: oklch(0.93 0.0756825 263.56);
  border-bottom-color: oklch(0.25 0.189206 293.56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.189206 293.56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189206 293.56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189206 293.56);
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
  background-color: oklch(0.8 0.0756825 293.56 / 0.75);
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  margin-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: oklch(0.6 0.0756825 263.56);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body kbd {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: oklch(0.251961 0.0000125861 23.5148 / 0.25) 0px 0px 0px 1px;
}`,
  },
};
