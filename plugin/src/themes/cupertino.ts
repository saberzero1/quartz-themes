import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cupertino",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-pro-display"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anim-duration-fast: 160ms !important;
  --anim-duration-moderate: 320ms !important;
  --anim-duration-slow: 480ms !important;
  --anim-duration-superfast: 80ms !important;
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1) !important;
  --anim-speed-modifier: 1 !important;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-border: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --background-modifier-border-focus: #77767b !important;
  --background-modifier-border-hover: #6b6970 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.35) !important;
  --background-modifier-error: rgb(224, 27, 36) !important;
  --background-modifier-error-hover: rgb(224, 27, 36) !important;
  --background-modifier-error-rgb: 224, 27, 36 !important;
  --background-modifier-form-field: color-mix(in srgb, #2e2e32, #fff 10%) !important;
  --background-modifier-form-field-hover: color-mix(in srgb, #2e2e32, #fff 10%) !important;
  --background-modifier-success: rgb(38, 162, 105) !important;
  --background-modifier-success-rgb: 38, 162, 105 !important;
  --background-primary: #1d1d20 !important;
  --background-primary-alt: #2e2e32 !important;
  --background-secondary: #2e2e32 !important;
  --background-secondary-alt: #28282c !important;
  --banner-fade-height: 80px !important;
  --banner-icon-size: 3rem !important;
  --banner-image-height: 320px !important;
  --banner-image-height-s: 240px !important;
  --banner-image-inset: 8px !important;
  --banner-image-object-fit: cover !important;
  --banner-mobile-offset: 0px !important;
  --bases-cards-background: #1d1d20 !important;
  --bases-cards-corner-shape: superellipse(1.1) !important;
  --bases-cards-cover-background: #2e2e32 !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #6b6970 !important;
  --bases-embed-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --bases-embed-border-radius: 9px !important;
  --bases-group-heading-property-color: #d2d2d2 !important;
  --bases-group-heading-property-size: 9.02px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --bases-table-cell-background-active: #1d1d20 !important;
  --bases-table-cell-background-disabled: #2e2e32 !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #77767b !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-container-border-radius: 9px !important;
  --bases-table-group-background: #2e2e32 !important;
  --bases-table-header-background: #1d1d20 !important;
  --bases-table-header-color: #99999b !important;
  --bases-table-summary-background: #1d1d20 !important;
  --block-width-max: calc(100cqw - 64px) !important;
  --block-width-offset: -32px !important;
  --block-width-wide: min(100cqw, 50rem) !important;
  --blockquote-background-color: #2e2e32 !important;
  --blockquote-border-color: #9a9996 !important;
  --blockquote-size: 16px !important;
  --blur-background: color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent)) !important;
  --bodyFont: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-corner-shape: superellipse(1.1) !important;
  --button-radius: 9px !important;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 224, 27, 36;
  --callout-default: 53, 132, 228;
  --callout-error: 224, 27, 36;
  --callout-example: 145, 65, 172;
  --callout-fail: 224, 27, 36;
  --callout-important: 33, 144, 164;
  --callout-info: 53, 132, 228;
  --callout-padding: 16px;
  --callout-question: 230, 97, 0;
  --callout-radius: 9px;
  --callout-size: 16px;
  --callout-success: 38, 162, 105;
  --callout-summary: 33, 144, 164;
  --callout-tip: 33, 144, 164;
  --callout-title-weight: 700;
  --callout-todo: 53, 132, 228;
  --callout-warning: 230, 97, 0;
  --canvas-background: #1d1d20 !important;
  --canvas-card-label-color: #99999b !important;
  --canvas-color-1: 224, 27, 36 !important;
  --canvas-color-2: 230, 97, 0 !important;
  --canvas-color-3: 245, 194, 17 !important;
  --canvas-color-4: 38, 162, 105 !important;
  --canvas-color-5: 33, 144, 164 !important;
  --canvas-color-6: 145, 65, 172 !important;
  --canvas-controls-icon-size: 16px !important;
  --canvas-controls-icon-stroke: 2px !important;
  --canvas-controls-radius: 9px !important;
  --canvas-dot-pattern: #5e5c64 !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-background-hover: transparent !important;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 160px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 4px !important;
  --caret-color: #fff !important;
  --checkbox-border-color: #99999b !important;
  --checkbox-border-color-hover: #d2d2d2 !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-marker-color: #1d1d20 !important;
  --checkbox-radius: 100px !important;
  --checklist-done-color: #d2d2d2 !important;
  --clickable-icon-radius: 9px !important;
  --code-background: #2e2e32 !important;
  --code-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --code-border-width: 1px !important;
  --code-comment: #5c6370 !important;
  --code-function: #d19a66 !important;
  --code-important: #d19a66 !important;
  --code-keyword: #e16d76 !important;
  --code-normal: #abb2bf !important;
  --code-operator: rgb(224, 27, 36) !important;
  --code-property: #62afef !important;
  --code-punctuation: #abb2bf !important;
  --code-radius: 9px !important;
  --code-size: 0.8em !important;
  --code-string: #58b6c2 !important;
  --code-tag: #e16d76 !important;
  --code-value: #c678de !important;
  --codeFont: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #99999b !important;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --color-base-00: #000000 !important;
  --color-base-05: #121019 !important;
  --color-base-10: #241f31 !important;
  --color-base-100: #ffffff !important;
  --color-base-20: #3d3846 !important;
  --color-base-25: #4e4a55 !important;
  --color-base-30: #5e5c64 !important;
  --color-base-35: #6b6970 !important;
  --color-base-40: #77767b !important;
  --color-base-50: #9a9996 !important;
  --color-base-60: #c0bfbc !important;
  --color-base-70: #e6e5e3 !important;
  --color-blue: rgb(53, 132, 228) !important;
  --color-blue-rgb: 53, 132, 228 !important;
  --color-cyan: rgb(33, 144, 164) !important;
  --color-cyan-rgb: 33, 144, 164 !important;
  --color-green: rgb(38, 162, 105) !important;
  --color-green-rgb: 38, 162, 105 !important;
  --color-orange: rgb(230, 97, 0) !important;
  --color-orange-rgb: 230, 97, 0 !important;
  --color-pink: rgb(213, 97, 170) !important;
  --color-pink-rgb: 213, 97, 170 !important;
  --color-purple: rgb(145, 65, 172) !important;
  --color-purple-rgb: 145, 65, 172 !important;
  --color-red: rgb(224, 27, 36) !important;
  --color-red-rgb: 224, 27, 36 !important;
  --color-yellow: rgb(245, 194, 17) !important;
  --color-yellow-rgb: 245, 194, 17 !important;
  --corner-shape: superellipse(1.1) !important;
  --dark: #fff !important;
  --darkgray: #fff !important;
  --density-modifier: 1 !important;
  --divider-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --divider-color-alt: rgba(0, 0, 6, 0.36) !important;
  --divider-color-hover: #9a9996 !important;
  --dropdown-background: color-mix(in srgb, #2e2e32, #fff 10%) !important;
  --dropdown-background-hover: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --dropdown-padding: 0 2.4em 0 0.8em !important;
  --dropdown-padding-end: 2.4em !important;
  --embed-background: #2e2e32 !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid #9a9996 !important;
  --embed-max-height: none !important;
  --embed-padding: 16px !important;
  --file-header-background: #1d1d20 !important;
  --file-header-background-focused: #1d1d20 !important;
  --file-header-border: none !important;
  --file-header-font: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 11px !important;
  --flair-background: color-mix(in srgb, #2e2e32, #fff 10%) !important;
  --flair-color: #fff !important;
  --font-interface: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Adwaita Sans", "Adwaita Sans Text" !important;
  --font-mermaid: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Adwaita Sans", "Adwaita Sans Text", Arial' !important;
  --font-text: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Adwaita Sans", "Adwaita Sans Text" !important;
  --font-ui-large: 14.96px !important;
  --font-ui-medium: 11px !important;
  --font-ui-modifier: 0px !important;
  --font-ui-small: 11px !important;
  --font-ui-smaller: 9.02px !important;
  --footnote-divider-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --footnote-id-color: #d2d2d2 !important;
  --footnote-id-color-no-occurrences: #99999b !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 9px !important;
  --frame-right-space: 124px !important;
  --graph-line: #6b6970 !important;
  --graph-node: #d2d2d2 !important;
  --graph-node-attachment: rgb(245, 194, 17) !important;
  --graph-node-focused: hsl(255, 89.76%, 75.9%) !important;
  --graph-node-tag: rgb(38, 162, 105) !important;
  --graph-node-unresolved: #99999b !important;
  --graph-text: #fff !important;
  --gray: #d2d2d2 !important;
  --h1-size: 1.5em !important;
  --h2-size: 1.25em !important;
  --h3-size: 1.125em !important;
  --h4-size: 1em !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1em !important;
  --h6-line-height: 1.6 !important;
  --h6-size: 0.875em !important;
  --header-height: 48px !important;
  --headerFont: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #99999b !important;
  --heading-spacing: 2em !important;
  --highlight: hsla(258, 88%, 66%, 0.1) !important;
  --hover-sidedock-delay: 160ms !important;
  --hover-sidedock-trigger-area: 1px !important;
  --hover-sidedock-width: 320px !important;
  --hr-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --icon-color: #d2d2d2 !important;
  --icon-color-active: hsl(255, 89.76%, 75.9%) !important;
  --icon-color-focused: #fff !important;
  --icon-color-hover: #d2d2d2 !important;
  --icon-l: 18px !important;
  --icon-l-stroke-width: 2px !important;
  --icon-m: 18px !important;
  --icon-m-stroke-width: 2px !important;
  --icon-opacity: 1 !important;
  --icon-s: 16px !important;
  --icon-s-stroke-width: 2px !important;
  --icon-size: 18px !important;
  --icon-size-modifier: 0px !important;
  --icon-stroke: 2px !important;
  --icon-stroke-modifier: 1 !important;
  --icon-xl: 32px !important;
  --icon-xl-stroke-width: 1.25px !important;
  --icon-xs: 14px !important;
  --icon-xs-stroke-width: 2.25px !important;
  --indentation-guide-width: 0px !important;
  --inline-title-margin-bottom: 0.5em !important;
  --inline-title-size: 1.5em !important;
  --input-border-width: 0 !important;
  --input-corner-shape: superellipse(1.1) !important;
  --input-date-separator: #99999b !important;
  --input-font-weight: 700 !important;
  --input-height: 32px !important;
  --input-placeholder-color: #99999b !important;
  --input-radius: 9px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --interactive-hover: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --interactive-normal: color-mix(in srgb, #2e2e32, #fff 10%) !important;
  --light: #1d1d20 !important;
  --lightgray: #2e2e32 !important;
  --line-height-normal: 1.6 !important;
  --line-width: 700px !important;
  --line-width-wide: 50rem !important;
  --link-color: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #99999b !important;
  --list-marker-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --list-marker-color-hover: #d2d2d2 !important;
  --list-spacing: 0.175em !important;
  --media-radius: 9px !important;
  --menu-background: #36363a !important;
  --menu-border-color: color-mix(in srgb, #2e2e32, #fff 10%) !important;
  --menu-corner-shape: superellipse(1.1) !important;
  --menu-radius: 12px !important;
  --menu-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03) !important;
  --metadata-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --metadata-divider-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --metadata-gap: 8px !important;
  --metadata-input-font: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #fff !important;
  --metadata-label-font: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #d2d2d2 !important;
  --metadata-label-text-color-hover: #d2d2d2 !important;
  --metadata-label-width: 9em !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #77767b !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #6b6970 !important;
  --metadata-property-corner-shape: superellipse(1.1) !important;
  --metadata-property-corner-shape-focus: superellipse(1.1) !important;
  --metadata-property-corner-shape-hover: superellipse(1.1) !important;
  --metadata-sidebar-input-font-size: 11px !important;
  --metadata-sidebar-label-font-size: 11px !important;
  --modal-background: #222226 !important;
  --modal-border-color: color-mix(in srgb, #2e2e32, #fff 10%) !important;
  --modal-radius: 15px !important;
  --mono-rgb-adwaita: 255, 255, 255 !important;
  --nav-collapse-icon-color: #99999b !important;
  --nav-collapse-icon-color-collapsed: #99999b !important;
  --nav-heading-color: #fff !important;
  --nav-heading-color-collapsed: #99999b !important;
  --nav-heading-color-collapsed-hover: #d2d2d2 !important;
  --nav-heading-color-hover: #fff !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-children-margin-start: 20px !important;
  --nav-item-color: #d2d2d2 !important;
  --nav-item-color-active: #fff !important;
  --nav-item-color-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --nav-item-color-hover: #fff !important;
  --nav-item-color-selected: #fff !important;
  --nav-item-padding: 8px 16px 8px 32px !important;
  --nav-item-parent-padding: 8px 16px 8px 32px !important;
  --nav-item-radius: 9px !important;
  --nav-item-size: 11px !important;
  --nav-tag-color: #99999b !important;
  --nav-tag-color-active: #d2d2d2 !important;
  --nav-tag-color-hover: #d2d2d2 !important;
  --nav-tag-radius: 9px !important;
  --nn-theme-file-border-radius: 12px !important;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1) !important;
  --nn-theme-file-tag-color: hsl(255, 89.76%, 75.9%) !important;
  --nn-theme-list-bg: transparent !important;
  --nn-theme-list-header-bg: transparent !important;
  --nn-theme-mobile-list-header-link-color: #fff !important;
  --nn-theme-mobile-nav-bg: transparent !important;
  --nn-theme-mobile-toolbar-button-active-bg: hsl(258, 88%, 66%) !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: white !important;
  --nn-theme-mobile-toolbar-button-icon-color: #fff !important;
  --nn-theme-nav-bg: transparent !important;
  --nn-theme-nav-header-bg: transparent !important;
  --nn-theme-navitem-border-radius: 12px !important;
  --nn-theme-navitem-selected-bg: rgba(255, 255, 255, 0.067) !important;
  --nn-theme-navitem-selected-inactive-bg: rgba(255, 255, 255, 0.067) !important;
  --p-spacing: 1.75rem !important;
  --pdf-background: #1d1d20 !important;
  --pdf-page-background: #1d1d20 !important;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --pdf-sidebar-background: #1d1d20 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --pill-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --pill-border-color-hover: #6b6970 !important;
  --pill-color: #d2d2d2 !important;
  --pill-color-hover: #fff !important;
  --pill-color-remove: #99999b !important;
  --pill-color-remove-hover: hsl(255, 89.76%, 75.9%) !important;
  --prompt-background: #1d1d20 !important;
  --prompt-border-color: color-mix(in srgb, #2e2e32, #fff 10%) !important;
  --prompt-input-height: 64px !important;
  --radius-l: 15px !important;
  --radius-m: 12px !important;
  --radius-modifier: 1 !important;
  --radius-s: 9px !important;
  --radius-xl: 18px !important;
  --raised-background: color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 15px !important;
  --search-clear-button-color: #d2d2d2 !important;
  --search-icon-color: #d2d2d2 !important;
  --search-result-background: #1d1d20 !important;
  --secondary: hsl(255, 89.76%, 75.9%) !important;
  --setting-group-heading-color: #fff !important;
  --setting-group-heading-size: 11px !important;
  --setting-group-heading-weight: 700 !important;
  --setting-items-background: #2e2e32 !important;
  --setting-items-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --setting-items-padding: 0px !important;
  --setting-items-radius: 12px !important;
  --setting-items-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03) !important;
  --shadow-l: 0 0 14px 5px rgba(0, 0, 0, 0.15), 0 0 5px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
  --shadow-s: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03) !important;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #6b6970 !important;
  --slider-thumb-border-width: 0 !important;
  --slider-thumb-height: 20px !important;
  --slider-thumb-width: 20px !important;
  --slider-thumb-y: -8px !important;
  --slider-track-background: rgb(from #fff r g b / 15%) !important;
  --slider-track-background-active: rgb(from #fff r g b / 25%) !important;
  --slider-track-background-hover: rgb(from #fff r g b / 20%) !important;
  --slider-track-height: 4px !important;
  --status-bar-background: #2e2e32 !important;
  --status-bar-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --status-bar-font-size: 9.02px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: #d2d2d2 !important;
  --suggestion-background: #1d1d20 !important;
  --sync-avatar-color-1: rgb(224, 27, 36) !important;
  --sync-avatar-color-2: rgb(230, 97, 0) !important;
  --sync-avatar-color-3: rgb(245, 194, 17) !important;
  --sync-avatar-color-4: rgb(38, 162, 105) !important;
  --sync-avatar-color-5: rgb(33, 144, 164) !important;
  --sync-avatar-color-6: rgb(53, 132, 228) !important;
  --sync-avatar-color-7: rgb(145, 65, 172) !important;
  --sync-avatar-color-8: rgb(213, 97, 170) !important;
  --tab-action-width: 32px !important;
  --tab-background-active: #1d1d20 !important;
  --tab-container-background: #2e2e32 !important;
  --tab-curve: 13px !important;
  --tab-divider-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --tab-font-size: 11px !important;
  --tab-max-width: 200px !important;
  --tab-outline-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --tab-radius: 9px !important;
  --tab-radius-active: 9px 9px 0 0 !important;
  --tab-stacked-font-size: 11px !important;
  --tab-stacked-header-width: 48px !important;
  --tab-switcher-background: #2e2e32 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2e2e32, transparent) !important;
  --tab-switcher-preview-radius: 18px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-align: left !important;
  --tab-text-color: #99999b !important;
  --tab-text-color-active: #d2d2d2 !important;
  --tab-text-color-focused: #d2d2d2 !important;
  --tab-text-color-focused-active: #fff !important;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --table-add-button-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --table-add-button-border-width: 0 !important;
  --table-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: #99999b !important;
  --table-header-border-color: transparent !important;
  --table-header-color: #fff !important;
  --table-header-size: 0.933em !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --table-text-size: 0.933em !important;
  --tag-background: hsla(258, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: hsl(255, 89.76%, 75.9%) !important;
  --tag-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 4px !important;
  --tag-radius: 8px !important;
  --tag-weight: 500 !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(253, 92.4%, 85.14%) !important;
  --text-error: rgb(224, 27, 36) !important;
  --text-faint: #99999b !important;
  --text-muted: #d2d2d2 !important;
  --text-normal: #fff !important;
  --text-selection: hsla(258, 88%, 66%, 0.33) !important;
  --text-success: rgb(38, 162, 105) !important;
  --text-warning: rgb(230, 97, 0) !important;
  --textHighlight: hsla(258, 88%, 66%, 0.1) !important;
  --titleFont: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: color-mix(in srgb, #2e2e32, #fff 15%) !important;
  --titlebar-border-width: 1px !important;
  --titlebar-text-color: #d2d2d2 !important;
  --titlebar-text-color-focused: #fff !important;
  --toggle-border-width: 3px !important;
  --toggle-s-border-width: 3px !important;
  --toggle-s-thumb-height: 20px !important;
  --toggle-s-thumb-width: 20px !important;
  --toggle-s-width: 46px !important;
  --toggle-thumb-color: color-mix(in srgb, white 80%, #1d1d20) !important;
  --toggle-thumb-height: 20px !important;
  --toggle-thumb-width: 20px !important;
  --toggle-width: 46px !important;
  --traffic-lights-offset-x: 48px !important;
  --traffic-lights-offset-y: 48px !important;
  --translucent-dark-opacity: 0% !important;
  --translucent-light-opacity: 0% !important;
  --vault-profile-color: #fff !important;
  --vault-profile-color-hover: #fff !important;
  --vault-profile-font-size: 11px !important;
  --view-top-spacing-markdown: 0px !important;
  --workspace-background-translucent: rgb(from #2e2e32 r g b / 0%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(46, 46, 50);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(29, 29, 32);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 6, 0.36);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 6, 0.36);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(29, 29, 32);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(210, 210, 210) none 0px;
  text-decoration: rgb(210, 210, 210);
  text-decoration-color: rgb(210, 210, 210);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(153, 153, 155);
  text-decoration: rgb(153, 153, 155);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(46, 46, 50);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 28px;
  width: 654px;
}

html[saved-theme="dark"] body tbody {
  background-color: rgb(46, 46, 50);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(46, 46, 50);
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-width: 1px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-width: 1px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(46, 46, 50);
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-width: 1px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-width: 1px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(209, 154, 102);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(209, 154, 102);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(209, 154, 102);
  border-left-color: rgb(209, 154, 102);
  border-right-color: rgb(209, 154, 102);
  border-top-color: rgb(209, 154, 102);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(46, 46, 50);
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-width: 1px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-width: 1px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(46, 46, 50);
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-width: 1px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-width: 1px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-radius: 9px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-radius: 9px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(46, 46, 50);
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(46, 46, 50);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-right-radius: 9px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(46, 46, 50);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-right-radius: 9px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(210, 210, 210);
  text-decoration: line-through rgb(210, 210, 210);
  text-decoration-color: rgb(210, 210, 210);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 155);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(153, 153, 155);
  border-right-color: rgb(153, 153, 155);
  border-top-color: rgb(153, 153, 155);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(153, 153, 155);
  text-decoration: line-through rgb(153, 153, 155);
  text-decoration-color: rgb(153, 153, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 33, 144, 164;
  background-color: rgba(33, 144, 164, 0.1);
  border-bottom-color: rgba(33, 144, 164, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(33, 144, 164, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(33, 144, 164, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(33, 144, 164, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 224, 27, 36;
  background-color: rgba(224, 27, 36, 0.1);
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(224, 27, 36, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 224, 27, 36;
  background-color: rgba(224, 27, 36, 0.1);
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(224, 27, 36, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 145, 65, 172;
  background-color: rgba(145, 65, 172, 0.1);
  border-bottom-color: rgba(145, 65, 172, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(145, 65, 172, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(145, 65, 172, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(145, 65, 172, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 224, 27, 36;
  background-color: rgba(224, 27, 36, 0.1);
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(224, 27, 36, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 230, 97, 0;
  background-color: rgba(230, 97, 0, 0.1);
  border-bottom-color: rgba(230, 97, 0, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 97, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(230, 97, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(230, 97, 0, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 38, 162, 105;
  background-color: rgba(38, 162, 105, 0.1);
  border-bottom-color: rgba(38, 162, 105, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(38, 162, 105, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(38, 162, 105, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(38, 162, 105, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 33, 144, 164;
  background-color: rgba(33, 144, 164, 0.1);
  border-bottom-color: rgba(33, 144, 164, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(33, 144, 164, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(33, 144, 164, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(33, 144, 164, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 230, 97, 0;
  background-color: rgba(230, 97, 0, 0.1);
  border-bottom-color: rgba(230, 97, 0, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 97, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(230, 97, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(230, 97, 0, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: color(srgb 0.262353 0.262353 0.276471);
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-width: 0px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-width: 0px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(46, 46, 50);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px 0px 5px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: rgb(40, 40, 44);
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 6, 0.36);
  border-left-color: rgba(0, 0, 6, 0.36);
  border-right-color: rgba(0, 0, 6, 0.36);
  border-top-color: rgba(0, 0, 6, 0.36);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(210, 210, 210);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(210, 210, 210);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(210, 210, 210);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 1380px;
  border-bottom-right-radius: 1380px;
  border-left-color: rgb(210, 210, 210);
  border-left-width: 0px;
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 1380px;
  border-top-right-radius: 1380px;
  border-top-width: 0px;
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(210, 210, 210);
  text-decoration: rgb(210, 210, 210);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(210, 210, 210);
  text-decoration: rgb(210, 210, 210);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(210, 210, 210);
  text-decoration: rgb(210, 210, 210);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(210, 210, 210);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(210, 210, 210);
  stroke: rgb(210, 210, 210);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 155);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(153, 153, 155);
  border-right-color: rgb(153, 153, 155);
  border-top-color: rgb(153, 153, 155);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(153, 153, 155);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(153, 153, 155);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: rgb(46, 46, 50);
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(255, 255, 255, 0.2);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(210, 210, 210);
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(46, 46, 50);
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --anim-duration-fast: 160ms !important;
  --anim-duration-moderate: 320ms !important;
  --anim-duration-slow: 480ms !important;
  --anim-duration-superfast: 80ms !important;
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1) !important;
  --anim-speed-modifier: 1 !important;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-border: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --background-modifier-border-focus: #c0bfbc !important;
  --background-modifier-border-hover: #deddda !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.35) !important;
  --background-modifier-error: rgb(237, 51, 59) !important;
  --background-modifier-error-hover: rgb(237, 51, 59) !important;
  --background-modifier-error-rgb: 237, 51, 59 !important;
  --background-modifier-form-field: color-mix(in srgb, #ebebed, #333338 10%) !important;
  --background-modifier-form-field-hover: color-mix(in srgb, #ebebed, #333338 10%) !important;
  --background-modifier-success: rgb(46, 194, 126) !important;
  --background-modifier-success-rgb: 46, 194, 126 !important;
  --background-primary: #fff !important;
  --background-primary-alt: #fff !important;
  --background-secondary: #ebebed !important;
  --background-secondary-alt: #f3f3f5 !important;
  --banner-fade-height: 80px !important;
  --banner-icon-size: 3rem !important;
  --banner-image-height: 320px !important;
  --banner-image-height-s: 240px !important;
  --banner-image-inset: 8px !important;
  --banner-image-object-fit: cover !important;
  --banner-mobile-offset: 0px !important;
  --bases-cards-background: #fff !important;
  --bases-cards-corner-shape: superellipse(1.1) !important;
  --bases-cards-cover-background: #fff !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, #ebebed, #333338 15%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #deddda !important;
  --bases-embed-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --bases-embed-border-radius: 9px !important;
  --bases-group-heading-property-color: #5c5c60 !important;
  --bases-group-heading-property-size: 9.02px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --bases-table-cell-background-active: #fff !important;
  --bases-table-cell-background-disabled: #fff !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #c0bfbc !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --bases-table-container-border-radius: 9px !important;
  --bases-table-group-background: #fff !important;
  --bases-table-header-background: #fff !important;
  --bases-table-header-color: #858587 !important;
  --bases-table-summary-background: #fff !important;
  --block-width-max: calc(100cqw - 64px) !important;
  --block-width-offset: -32px !important;
  --block-width-wide: min(100cqw, 50rem) !important;
  --blockquote-background-color: #f3f3f5 !important;
  --blockquote-border-color: #9a9996 !important;
  --blockquote-size: 16px !important;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --bodyFont: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-corner-shape: superellipse(1.1) !important;
  --button-radius: 9px !important;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 237, 51, 59;
  --callout-default: 98, 160, 234;
  --callout-error: 237, 51, 59;
  --callout-example: 192, 97, 203;
  --callout-fail: 237, 51, 59;
  --callout-important: 35, 164, 173;
  --callout-info: 98, 160, 234;
  --callout-padding: 16px;
  --callout-question: 255, 120, 0;
  --callout-radius: 9px;
  --callout-size: 16px;
  --callout-success: 46, 194, 126;
  --callout-summary: 35, 164, 173;
  --callout-tip: 35, 164, 173;
  --callout-title-weight: 700;
  --callout-todo: 98, 160, 234;
  --callout-warning: 255, 120, 0;
  --canvas-background: #fff !important;
  --canvas-card-label-color: #858587 !important;
  --canvas-color-1: 237, 51, 59 !important;
  --canvas-color-2: 255, 120, 0 !important;
  --canvas-color-3: 246, 211, 45 !important;
  --canvas-color-4: 46, 194, 126 !important;
  --canvas-color-5: 35, 164, 173 !important;
  --canvas-color-6: 192, 97, 203 !important;
  --canvas-controls-icon-size: 16px !important;
  --canvas-controls-icon-stroke: 2px !important;
  --canvas-controls-radius: 9px !important;
  --canvas-dot-pattern: #e6e5e3 !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-background-hover: transparent !important;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 160px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 4px !important;
  --caret-color: #333338 !important;
  --checkbox-border-color: #858587 !important;
  --checkbox-border-color-hover: #5c5c60 !important;
  --checkbox-color: hsl(257, 88.88%, 70.95%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-marker-color: #fff !important;
  --checkbox-radius: 100px !important;
  --checklist-done-color: #5c5c60 !important;
  --clickable-icon-radius: 9px !important;
  --code-background: #f3f3f5 !important;
  --code-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --code-border-width: 1px !important;
  --code-comment: #b6b9c5 !important;
  --code-function: #b76b02 !important;
  --code-important: #b76b02 !important;
  --code-keyword: #e45749 !important;
  --code-normal: #383a42 !important;
  --code-operator: rgb(237, 51, 59) !important;
  --code-property: #62afef !important;
  --code-punctuation: #383a42 !important;
  --code-radius: 9px !important;
  --code-size: 0.8em !important;
  --code-string: #0d97b3 !important;
  --code-tag: #e45749 !important;
  --code-value: #a626a4 !important;
  --codeFont: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #858587 !important;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --color-base-05: #fdfdfc !important;
  --color-base-10: #fbfafa !important;
  --color-base-100: #000000 !important;
  --color-base-20: #f6f5f4 !important;
  --color-base-25: #eeedeb !important;
  --color-base-30: #e6e5e3 !important;
  --color-base-35: #deddda !important;
  --color-base-40: #c0bfbc !important;
  --color-base-50: #9a9996 !important;
  --color-base-60: #77767b !important;
  --color-base-70: #5e5c64 !important;
  --color-blue: rgb(98, 160, 234) !important;
  --color-blue-rgb: 98, 160, 234 !important;
  --color-cyan: rgb(35, 164, 173) !important;
  --color-cyan-rgb: 35, 164, 173 !important;
  --color-green: rgb(46, 194, 126) !important;
  --color-green-rgb: 46, 194, 126 !important;
  --color-orange: rgb(255, 120, 0) !important;
  --color-orange-rgb: 255, 120, 0 !important;
  --color-pink: rgb(224, 97, 178) !important;
  --color-pink-rgb: 224, 97, 178 !important;
  --color-purple: rgb(192, 97, 203) !important;
  --color-purple-rgb: 192, 97, 203 !important;
  --color-red: rgb(237, 51, 59) !important;
  --color-red-rgb: 237, 51, 59 !important;
  --color-yellow: rgb(246, 211, 45) !important;
  --color-yellow-rgb: 246, 211, 45 !important;
  --corner-shape: superellipse(1.1) !important;
  --dark: #333338 !important;
  --darkgray: #333338 !important;
  --density-modifier: 1 !important;
  --divider-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --divider-color-alt: rgba(0, 0, 6, 0.07) !important;
  --divider-color-hover: #9a9996 !important;
  --dropdown-background: color-mix(in srgb, #ebebed, #333338 10%) !important;
  --dropdown-background-hover: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --dropdown-padding: 0 2.4em 0 0.8em !important;
  --dropdown-padding-end: 2.4em !important;
  --embed-background: #fff !important;
  --embed-background-color: #f3f3f5 !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid #9a9996 !important;
  --embed-max-height: none !important;
  --embed-padding: 16px !important;
  --file-header-background: #fff !important;
  --file-header-background-focused: #fff !important;
  --file-header-border: none !important;
  --file-header-font: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 11px !important;
  --flair-background: color-mix(in srgb, #ebebed, #333338 10%) !important;
  --flair-color: #333338 !important;
  --font-interface: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Adwaita Sans", "Adwaita Sans Text" !important;
  --font-mermaid: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Adwaita Sans", "Adwaita Sans Text", Arial' !important;
  --font-text: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Adwaita Sans", "Adwaita Sans Text" !important;
  --font-ui-large: 14.96px !important;
  --font-ui-medium: 11px !important;
  --font-ui-modifier: 0px !important;
  --font-ui-small: 11px !important;
  --font-ui-smaller: 9.02px !important;
  --footnote-divider-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --footnote-id-color: #5c5c60 !important;
  --footnote-id-color-no-occurrences: #858587 !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 9px !important;
  --frame-right-space: 124px !important;
  --graph-line: #deddda !important;
  --graph-node: #5c5c60 !important;
  --graph-node-attachment: rgb(246, 211, 45) !important;
  --graph-node-focused: hsl(258, 88%, 66%) !important;
  --graph-node-tag: rgb(46, 194, 126) !important;
  --graph-node-unresolved: #858587 !important;
  --graph-text: #333338 !important;
  --gray: #5c5c60 !important;
  --h1-size: 1.5em !important;
  --h2-size: 1.25em !important;
  --h3-size: 1.125em !important;
  --h4-size: 1em !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1em !important;
  --h6-line-height: 1.6 !important;
  --h6-size: 0.875em !important;
  --header-height: 48px !important;
  --headerFont: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #858587 !important;
  --heading-spacing: 2em !important;
  --highlight: hsla(258, 88%, 66%, 0.1) !important;
  --hover-sidedock-delay: 160ms !important;
  --hover-sidedock-trigger-area: 1px !important;
  --hover-sidedock-width: 320px !important;
  --hr-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --icon-color: #5c5c60 !important;
  --icon-color-active: hsl(258, 88%, 66%) !important;
  --icon-color-focused: #333338 !important;
  --icon-color-hover: #5c5c60 !important;
  --icon-l: 18px !important;
  --icon-l-stroke-width: 2px !important;
  --icon-m: 18px !important;
  --icon-m-stroke-width: 2px !important;
  --icon-opacity: 1 !important;
  --icon-s: 16px !important;
  --icon-s-stroke-width: 2px !important;
  --icon-size: 18px !important;
  --icon-size-modifier: 0px !important;
  --icon-stroke: 2px !important;
  --icon-stroke-modifier: 1 !important;
  --icon-xl: 32px !important;
  --icon-xl-stroke-width: 1.25px !important;
  --icon-xs: 14px !important;
  --icon-xs-stroke-width: 2.25px !important;
  --indentation-guide-width: 0px !important;
  --inline-title-margin-bottom: 0.5em !important;
  --inline-title-size: 1.5em !important;
  --input-border-width: 0 !important;
  --input-corner-shape: superellipse(1.1) !important;
  --input-date-separator: #858587 !important;
  --input-font-weight: 700 !important;
  --input-height: 32px !important;
  --input-placeholder-color: #858587 !important;
  --input-radius: 9px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(257, 88.88%, 70.95%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --interactive-hover: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --interactive-normal: color-mix(in srgb, #ebebed, #333338 10%) !important;
  --light: #fff !important;
  --lightgray: #ebebed !important;
  --line-height-normal: 1.6 !important;
  --line-width: 700px !important;
  --line-width-wide: 50rem !important;
  --link-color: hsl(258, 88%, 66%) !important;
  --link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(258, 88%, 66%) !important;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(258, 88%, 66%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #858587 !important;
  --list-marker-color-collapsed: hsl(258, 88%, 66%) !important;
  --list-marker-color-hover: #5c5c60 !important;
  --list-spacing: 0.175em !important;
  --media-radius: 9px !important;
  --menu-background: #fff !important;
  --menu-border-color: color-mix(in srgb, #ebebed, #333338 10%) !important;
  --menu-corner-shape: superellipse(1.1) !important;
  --menu-radius: 12px !important;
  --menu-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03) !important;
  --metadata-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --metadata-divider-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --metadata-gap: 8px !important;
  --metadata-input-font: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #333338 !important;
  --metadata-label-font: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #5c5c60 !important;
  --metadata-label-text-color-hover: #5c5c60 !important;
  --metadata-label-width: 9em !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c0bfbc !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #deddda !important;
  --metadata-property-corner-shape: superellipse(1.1) !important;
  --metadata-property-corner-shape-focus: superellipse(1.1) !important;
  --metadata-property-corner-shape-hover: superellipse(1.1) !important;
  --metadata-sidebar-input-font-size: 11px !important;
  --metadata-sidebar-label-font-size: 11px !important;
  --modal-background: #fafafb !important;
  --modal-border-color: color-mix(in srgb, #ebebed, #333338 10%) !important;
  --modal-radius: 15px !important;
  --mono-rgb-adwaita: 0, 0, 6 !important;
  --nav-collapse-icon-color: #858587 !important;
  --nav-collapse-icon-color-collapsed: #858587 !important;
  --nav-heading-color: #333338 !important;
  --nav-heading-color-collapsed: #858587 !important;
  --nav-heading-color-collapsed-hover: #5c5c60 !important;
  --nav-heading-color-hover: #333338 !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-children-margin-start: 20px !important;
  --nav-item-color: #5c5c60 !important;
  --nav-item-color-active: #333338 !important;
  --nav-item-color-highlighted: hsl(258, 88%, 66%) !important;
  --nav-item-color-hover: #333338 !important;
  --nav-item-color-selected: #333338 !important;
  --nav-item-padding: 8px 16px 8px 32px !important;
  --nav-item-parent-padding: 8px 16px 8px 32px !important;
  --nav-item-radius: 9px !important;
  --nav-item-size: 11px !important;
  --nav-tag-color: #858587 !important;
  --nav-tag-color-active: #5c5c60 !important;
  --nav-tag-color-hover: #5c5c60 !important;
  --nav-tag-radius: 9px !important;
  --nn-theme-file-border-radius: 12px !important;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1) !important;
  --nn-theme-file-tag-color: hsl(258, 88%, 66%) !important;
  --nn-theme-list-bg: transparent !important;
  --nn-theme-list-header-bg: transparent !important;
  --nn-theme-mobile-list-header-link-color: #333338 !important;
  --nn-theme-mobile-nav-bg: transparent !important;
  --nn-theme-mobile-toolbar-button-active-bg: hsl(257, 88.88%, 70.95%) !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: white !important;
  --nn-theme-mobile-toolbar-button-icon-color: #333338 !important;
  --nn-theme-nav-bg: transparent !important;
  --nn-theme-nav-header-bg: transparent !important;
  --nn-theme-navitem-border-radius: 12px !important;
  --nn-theme-navitem-selected-bg: rgba(0, 0, 0, 0.067) !important;
  --nn-theme-navitem-selected-inactive-bg: rgba(0, 0, 0, 0.067) !important;
  --p-spacing: 1.75rem !important;
  --pdf-background: #fff !important;
  --pdf-page-background: #fff !important;
  --pdf-sidebar-background: #fff !important;
  --pill-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --pill-border-color-hover: #deddda !important;
  --pill-color: #5c5c60 !important;
  --pill-color-hover: #333338 !important;
  --pill-color-remove: #858587 !important;
  --pill-color-remove-hover: hsl(258, 88%, 66%) !important;
  --prompt-background: #fff !important;
  --prompt-border-color: color-mix(in srgb, #ebebed, #333338 10%) !important;
  --prompt-input-height: 64px !important;
  --radius-l: 15px !important;
  --radius-m: 12px !important;
  --radius-modifier: 1 !important;
  --radius-s: 9px !important;
  --radius-xl: 18px !important;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 15px !important;
  --search-clear-button-color: #5c5c60 !important;
  --search-icon-color: #5c5c60 !important;
  --search-result-background: #fff !important;
  --secondary: hsl(258, 88%, 66%) !important;
  --setting-group-heading-color: #333338 !important;
  --setting-group-heading-size: 11px !important;
  --setting-group-heading-weight: 700 !important;
  --setting-items-background: #fff !important;
  --setting-items-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --setting-items-padding: 0px !important;
  --setting-items-radius: 12px !important;
  --setting-items-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03) !important;
  --shadow-l: 0 0 14px 5px rgba(0, 0, 0, 0.15), 0 0 5px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
  --shadow-s: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03) !important;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #deddda !important;
  --slider-thumb-border-width: 0 !important;
  --slider-thumb-height: 20px !important;
  --slider-thumb-width: 20px !important;
  --slider-thumb-y: -8px !important;
  --slider-track-background: rgb(from #333338 r g b / 15%) !important;
  --slider-track-background-active: rgb(from #333338 r g b / 25%) !important;
  --slider-track-background-hover: rgb(from #333338 r g b / 20%) !important;
  --slider-track-height: 4px !important;
  --status-bar-background: #ebebed !important;
  --status-bar-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --status-bar-font-size: 9.02px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: #5c5c60 !important;
  --suggestion-background: #fff !important;
  --sync-avatar-color-1: rgb(237, 51, 59) !important;
  --sync-avatar-color-2: rgb(255, 120, 0) !important;
  --sync-avatar-color-3: rgb(246, 211, 45) !important;
  --sync-avatar-color-4: rgb(46, 194, 126) !important;
  --sync-avatar-color-5: rgb(35, 164, 173) !important;
  --sync-avatar-color-6: rgb(98, 160, 234) !important;
  --sync-avatar-color-7: rgb(192, 97, 203) !important;
  --sync-avatar-color-8: rgb(224, 97, 178) !important;
  --tab-action-width: 32px !important;
  --tab-background-active: #fff !important;
  --tab-container-background: #ebebed !important;
  --tab-curve: 13px !important;
  --tab-divider-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --tab-font-size: 11px !important;
  --tab-max-width: 200px !important;
  --tab-outline-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --tab-radius: 9px !important;
  --tab-radius-active: 9px 9px 0 0 !important;
  --tab-stacked-font-size: 11px !important;
  --tab-stacked-header-width: 48px !important;
  --tab-switcher-background: #ebebed !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ebebed, transparent) !important;
  --tab-switcher-preview-radius: 18px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-align: left !important;
  --tab-text-color: #858587 !important;
  --tab-text-color-active: #5c5c60 !important;
  --tab-text-color-focused: #5c5c60 !important;
  --tab-text-color-focused-active: #333338 !important;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%) !important;
  --table-add-button-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --table-add-button-border-width: 0 !important;
  --table-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%) !important;
  --table-drag-handle-color: #858587 !important;
  --table-header-border-color: transparent !important;
  --table-header-color: #333338 !important;
  --table-header-size: 0.933em !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%) !important;
  --table-text-size: 0.933em !important;
  --tag-background: hsla(258, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: hsl(258, 88%, 66%) !important;
  --tag-color-hover: hsl(258, 88%, 66%) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 4px !important;
  --tag-radius: 8px !important;
  --tag-weight: 500 !important;
  --tertiary: hsl(255, 89.76%, 75.9%) !important;
  --text-accent: hsl(258, 88%, 66%) !important;
  --text-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --text-error: rgb(237, 51, 59) !important;
  --text-faint: #858587 !important;
  --text-muted: #5c5c60 !important;
  --text-normal: #333338 !important;
  --text-selection: hsla(258, 88%, 66%, 0.2) !important;
  --text-success: rgb(46, 194, 126) !important;
  --text-warning: rgb(255, 120, 0) !important;
  --textHighlight: hsla(258, 88%, 66%, 0.1) !important;
  --titleFont: "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: color-mix(in srgb, #ebebed, #333338 15%) !important;
  --titlebar-border-width: 1px !important;
  --titlebar-text-color: #5c5c60 !important;
  --titlebar-text-color-focused: #333338 !important;
  --toggle-border-width: 3px !important;
  --toggle-s-border-width: 3px !important;
  --toggle-s-thumb-height: 20px !important;
  --toggle-s-thumb-width: 20px !important;
  --toggle-s-width: 46px !important;
  --toggle-thumb-color: color-mix(in srgb, white 80%, #fff) !important;
  --toggle-thumb-height: 20px !important;
  --toggle-thumb-width: 20px !important;
  --toggle-width: 46px !important;
  --traffic-lights-offset-x: 48px !important;
  --traffic-lights-offset-y: 48px !important;
  --translucent-dark-opacity: 0% !important;
  --translucent-light-opacity: 0% !important;
  --vault-profile-color: #333338 !important;
  --vault-profile-color-hover: #333338 !important;
  --vault-profile-font-size: 11px !important;
  --view-top-spacing-markdown: 0px !important;
  --workspace-background-translucent: #ebebed !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 235, 237);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 6, 0.07);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 6, 0.07);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(51, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: line-through rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body p {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 92, 96) none 0px;
  text-decoration: rgb(92, 92, 96);
  text-decoration-color: rgb(92, 92, 96);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body dt {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(133, 133, 135);
  text-decoration: rgb(133, 133, 135);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(243, 243, 245);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body table {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 28px;
  width: 654px;
}

html[saved-theme="light"] body tbody {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  color: rgb(51, 51, 56);
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(56, 58, 66);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 243, 245);
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-width: 1px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-width: 1px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 243, 245);
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-width: 1px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-width: 1px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(183, 107, 2);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(183, 107, 2);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(183, 107, 2);
  border-left-color: rgb(183, 107, 2);
  border-right-color: rgb(183, 107, 2);
  border-top-color: rgb(183, 107, 2);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(243, 243, 245);
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-width: 1px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-width: 1px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(243, 243, 245);
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-width: 1px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-width: 1px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-radius: 9px;
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-radius: 9px;
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-right-radius: 9px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-right-radius: 9px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(92, 92, 96);
  text-decoration: line-through rgb(92, 92, 96);
  text-decoration-color: rgb(92, 92, 96);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(133, 133, 135);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(133, 133, 135);
  border-right-color: rgb(133, 133, 135);
  border-top-color: rgb(133, 133, 135);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(133, 133, 135);
  text-decoration: line-through rgb(133, 133, 135);
  text-decoration-color: rgb(133, 133, 135);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 35, 164, 173;
  background-color: rgba(35, 164, 173, 0.1);
  border-bottom-color: rgba(35, 164, 173, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(35, 164, 173, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(35, 164, 173, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(35, 164, 173, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 237, 51, 59;
  background-color: rgba(237, 51, 59, 0.1);
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(237, 51, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 237, 51, 59;
  background-color: rgba(237, 51, 59, 0.1);
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(237, 51, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 192, 97, 203;
  background-color: rgba(192, 97, 203, 0.1);
  border-bottom-color: rgba(192, 97, 203, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(192, 97, 203, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(192, 97, 203, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(192, 97, 203, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 237, 51, 59;
  background-color: rgba(237, 51, 59, 0.1);
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(237, 51, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 98, 160, 234;
  background-color: rgba(98, 160, 234, 0.1);
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 98, 160, 234;
  background-color: rgba(98, 160, 234, 0.1);
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 255, 120, 0;
  background-color: rgba(255, 120, 0, 0.1);
  border-bottom-color: rgba(255, 120, 0, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 120, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 120, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 120, 0, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 46, 194, 126;
  background-color: rgba(46, 194, 126, 0.1);
  border-bottom-color: rgba(46, 194, 126, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(46, 194, 126, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(46, 194, 126, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(46, 194, 126, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 35, 164, 173;
  background-color: rgba(35, 164, 173, 0.1);
  border-bottom-color: rgba(35, 164, 173, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(35, 164, 173, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(35, 164, 173, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(35, 164, 173, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 98, 160, 234;
  background-color: rgba(98, 160, 234, 0.1);
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 120, 0;
  background-color: rgba(255, 120, 0, 0.1);
  border-bottom-color: rgba(255, 120, 0, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 120, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 120, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 120, 0, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: color(srgb 0.849412 0.849412 0.858431);
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-width: 0px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-width: 0px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(235, 235, 237);
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-width: 0px;
  border-left-color: rgb(51, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px 0px 5px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: rgb(243, 243, 245);
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-width: 0px;
  border-left-color: rgb(51, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body h1 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 6, 0.07);
  border-left-color: rgba(0, 0, 6, 0.07);
  border-right-color: rgba(0, 0, 6, 0.07);
  border-top-color: rgba(0, 0, 6, 0.07);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(92, 92, 96);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(92, 92, 96);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(92, 92, 96);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 1380px;
  border-bottom-right-radius: 1380px;
  border-left-color: rgb(92, 92, 96);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 1380px;
  border-top-right-radius: 1380px;
  border-top-width: 0px;
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(92, 92, 96);
  text-decoration: rgb(92, 92, 96);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(92, 92, 96);
  text-decoration: rgb(92, 92, 96);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(92, 92, 96);
  text-decoration: rgb(92, 92, 96);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(92, 92, 96);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(92, 92, 96);
  stroke: rgb(92, 92, 96);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(133, 133, 135);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(133, 133, 135);
  border-right-color: rgb(133, 133, 135);
  border-top-color: rgb(133, 133, 135);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(133, 133, 135);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(133, 133, 135);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(51, 51, 56);
  text-decoration: underline dotted rgb(51, 51, 56);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(92, 92, 96);
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(235, 235, 237);
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body summary {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 51, 56);
}`,
  },
};
