import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "baseline",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anim-duration-fast: 160ms !important;
  --anim-duration-moderate: 320ms !important;
  --anim-duration-slow: 480ms !important;
  --anim-duration-superfast: 80ms !important;
  --anim-motion-baseline: cubic-bezier(0.1, 0, 0.1, 1.25) !important;
  --anim-speed-modifier: 1 !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.35) !important;
  --background-modifier-error: rgb(217, 90, 95) !important;
  --background-modifier-error-hover: rgb(217, 90, 95) !important;
  --background-modifier-error-rgb: 217, 90, 95 !important;
  --background-modifier-form-field: #363636 !important;
  --background-modifier-form-field-hover: #363636 !important;
  --background-modifier-success: rgb(72, 196, 90) !important;
  --background-modifier-success-rgb: 72, 196, 90 !important;
  --banner-fade-height: 80px !important;
  --banner-icon-size: 3rem !important;
  --banner-image-height: 320px !important;
  --banner-image-height-s: 240px !important;
  --banner-image-inset: 8px !important;
  --banner-image-object-fit: cover !important;
  --banner-mobile-offset: 0px !important;
  --bases-cards-corner-shape: superellipse(1.1) !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-size: 12px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #dadada !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-color: #666666 !important;
  --block-width-max: calc(100cqw - 64px) !important;
  --block-width-offset: -32px !important;
  --block-width-wide: min(100cqw, 50rem) !important;
  --blockquote-background-color: #242424 !important;
  --blockquote-border-color: #666666 !important;
  --blockquote-size: 16px !important;
  --bodyFont: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-corner-shape: superellipse(1.1) !important;
  --button-radius: calc(8px*(1 - clamp(0, (1 - 1) * 10000 + 1, 1)) + 100vh*clamp(0, (1 - 1) * 10000 + 1, 1)) !important;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 217, 90, 95;
  --callout-default: 86, 148, 218;
  --callout-error: 217, 90, 95;
  --callout-example: 142, 125, 194;
  --callout-fail: 217, 90, 95;
  --callout-important: 63, 186, 182;
  --callout-info: 86, 148, 218;
  --callout-padding: 16px;
  --callout-question: 219, 134, 80;
  --callout-radius: 8px;
  --callout-size: 16px;
  --callout-success: 72, 196, 90;
  --callout-summary: 63, 186, 182;
  --callout-tip: 63, 186, 182;
  --callout-title-weight: 700;
  --callout-todo: 86, 148, 218;
  --callout-warning: 219, 134, 80;
  --canvas-color-1: 217, 90, 95 !important;
  --canvas-color-2: 219, 134, 80 !important;
  --canvas-color-3: 196, 180, 94 !important;
  --canvas-color-4: 72, 196, 90 !important;
  --canvas-color-5: 63, 186, 182 !important;
  --canvas-color-6: 142, 125, 194 !important;
  --canvas-controls-icon-size: 16px !important;
  --canvas-controls-icon-stroke: 2px !important;
  --canvas-controls-radius: 8px !important;
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
  --checkbox-color: #dadada !important;
  --checkbox-color-hover: rgb(from #dadada r g b / 80%) !important;
  --clickable-icon-radius: 8px !important;
  --code-border-width: 1px !important;
  --code-comment: #5c6370 !important;
  --code-function: #d19a66 !important;
  --code-important: #d19a66 !important;
  --code-keyword: #e16d76 !important;
  --code-normal: #abb2bf !important;
  --code-operator: rgb(217, 90, 95) !important;
  --code-property: #62afef !important;
  --code-punctuation: #abb2bf !important;
  --code-radius: 8px !important;
  --code-size: 0.8em !important;
  --code-string: #58b6c2 !important;
  --code-tag: #e16d76 !important;
  --code-value: #c678de !important;
  --codeFont: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #b3b3b3 !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --color-blue: rgb(86, 148, 218) !important;
  --color-blue-rgb: 86, 148, 218 !important;
  --color-cyan: rgb(63, 186, 182) !important;
  --color-cyan-rgb: 63, 186, 182 !important;
  --color-green: rgb(72, 196, 90) !important;
  --color-green-rgb: 72, 196, 90 !important;
  --color-orange: rgb(219, 134, 80) !important;
  --color-orange-rgb: 219, 134, 80 !important;
  --color-pink: rgb(222, 103, 147) !important;
  --color-pink-rgb: 222, 103, 147 !important;
  --color-purple: rgb(142, 125, 194) !important;
  --color-purple-rgb: 142, 125, 194 !important;
  --color-red: rgb(217, 90, 95) !important;
  --color-red-rgb: 217, 90, 95 !important;
  --color-yellow: rgb(196, 180, 94) !important;
  --color-yellow-rgb: 196, 180, 94 !important;
  --corner-shape: superellipse(1.1) !important;
  --density-modifier: 1 !important;
  --divider-color-hover: #666666 !important;
  --embed-background: #242424 !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid #666666 !important;
  --embed-max-height: none !important;
  --embed-padding: 16px !important;
  --file-header-border: none !important;
  --file-header-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 13px !important;
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Inter !important;
  --font-mermaid: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', Inter, 'Arial' !important;
  --font-text: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Inter !important;
  --font-ui-large: 20px !important;
  --font-ui-medium: 15px !important;
  --font-ui-modifier: 0px !important;
  --font-ui-small: 13px !important;
  --font-ui-smaller: 12px !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 8px !important;
  --frame-right-space: 144px !important;
  --graph-node-attachment: rgb(196, 180, 94) !important;
  --graph-node-focused: rgb(166, 139, 249) !important;
  --graph-node-tag: rgb(72, 196, 90) !important;
  --h1-font: '??', "Instrument Serif" !important;
  --h2-font: '??', "Instrument Serif" !important;
  --h3-font: '??', "Instrument Serif" !important;
  --h4-font: '??', "Instrument Serif" !important;
  --h5-font: '??', "Instrument Serif" !important;
  --h5-line-height: 1.6 !important;
  --h6-font: '??', "Instrument Serif" !important;
  --h6-line-height: 1.6 !important;
  --header-height: 48px !important;
  --headerFont: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 2em !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --hover-sidedock-delay: 160ms !important;
  --hover-sidedock-trigger-area: 1px !important;
  --hover-sidedock-width: 320px !important;
  --hr-align: center !important;
  --hr-dashed-size: 1em !important;
  --hr-dashed-spacing: 0.5em !important;
  --hr-width: 100% !important;
  --icon-color-active: rgb(166, 139, 249) !important;
  --icon-l: 16px !important;
  --icon-l-stroke-width: 2px !important;
  --icon-m: 16px !important;
  --icon-m-stroke-width: 2px !important;
  --icon-opacity: 1 !important;
  --icon-s: 16px !important;
  --icon-s-stroke-width: 2px !important;
  --icon-size: 16px !important;
  --icon-size-modifier: 0px !important;
  --icon-stroke: 2px !important;
  --icon-stroke-modifier: 1 !important;
  --icon-xl: 32px !important;
  --icon-xl-stroke-width: 1.25px !important;
  --icon-xs: 14px !important;
  --icon-xs-stroke-width: 2.25px !important;
  --indentation-guide-width: 0px !important;
  --inline-title-font: '??', "Instrument Serif" !important;
  --inline-title-margin-bottom: 0.5em !important;
  --input-corner-shape: superellipse(1.1) !important;
  --input-font-weight: 500 !important;
  --input-height: 32px !important;
  --input-radius: 8px !important;
  --input-shadow: inset 0 0 0 1px #3f3f3f !important;
  --input-shadow-hover: inset 0 0 0 1px #3f3f3f !important;
  --interactive-accent: #dadada !important;
  --interactive-accent-hover: rgb(from #dadada r g b / 80%) !important;
  --line-height-normal: 1.6 !important;
  --line-width: 700px !important;
  --line-width-wide: 50rem !important;
  --link-color: rgb(166, 139, 249) !important;
  --link-color-hover: rgb(197, 182, 252) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(166, 139, 249) !important;
  --link-external-color-hover: rgb(197, 182, 252) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(166, 139, 249) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(166, 139, 249) !important;
  --list-spacing: 0.175em !important;
  --media-radius: 8px !important;
  --menu-corner-shape: superellipse(1.1) !important;
  --menu-padding: 4px !important;
  --menu-radius: 12px !important;
  --menu-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px !important;
  --metadata-gap: 8px !important;
  --metadata-input-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
  --metadata-label-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-width: 9em !important;
  --metadata-property-corner-shape: superellipse(1.1) !important;
  --metadata-property-corner-shape-focus: superellipse(1.1) !important;
  --metadata-property-corner-shape-hover: superellipse(1.1) !important;
  --metadata-sidebar-input-font-size: 13px !important;
  --metadata-sidebar-label-font-size: 13px !important;
  --modal-background: #262626 !important;
  --modal-border-color: #3f3f3f !important;
  --modal-radius: 20px !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(166, 139, 249) !important;
  --nav-item-padding: 8px 16px 8px 32px !important;
  --nav-item-parent-padding: 8px 16px 8px 32px !important;
  --nav-item-radius: 8px !important;
  --nav-item-size: 13px !important;
  --nav-tag-radius: 8px !important;
  --nn-theme-file-border-radius: 12px !important;
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.1) !important;
  --nn-theme-file-tag-color: rgb(166, 139, 249) !important;
  --nn-theme-list-bg: transparent !important;
  --nn-theme-list-header-bg: transparent !important;
  --nn-theme-mobile-list-header-link-color: #dadada !important;
  --nn-theme-mobile-nav-bg: transparent !important;
  --nn-theme-mobile-toolbar-button-active-bg: #dadada !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: #1e1e1e !important;
  --nn-theme-mobile-toolbar-button-icon-color: #dadada !important;
  --nn-theme-nav-bg: transparent !important;
  --nn-theme-nav-header-bg: transparent !important;
  --nn-theme-navitem-border-radius: 12px !important;
  --nn-theme-navitem-selected-bg: rgba(255, 255, 255, 0.067) !important;
  --nn-theme-navitem-selected-inactive-bg: rgba(255, 255, 255, 0.067) !important;
  --p-spacing: 1.75rem !important;
  --pdf-shadow: none !important;
  --pill-color-remove-hover: rgb(166, 139, 249) !important;
  --prompt-border-color: #3f3f3f !important;
  --prompt-input-height: 64px !important;
  --radius-l: 20px !important;
  --radius-m: 12px !important;
  --radius-modifier: 1 !important;
  --radius-modifier-check: clamp(0, (1 - 1) * 10000 + 1, 1) !important;
  --radius-s: 8px !important;
  --radius-xl: 28px !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 20px !important;
  --secondary: rgb(166, 139, 249) !important;
  --setting-group-heading-color: #666666 !important;
  --setting-group-heading-size: 13px !important;
  --setting-items-padding: 16px 16px !important;
  --setting-items-radius: 12px !important;
  --shadow-l: 0 14px 62px #00000040 !important;
  --shadow-s: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px !important;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --status-bar-font-size: 12px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --sync-avatar-color-1: rgb(217, 90, 95) !important;
  --sync-avatar-color-2: rgb(219, 134, 80) !important;
  --sync-avatar-color-3: rgb(196, 180, 94) !important;
  --sync-avatar-color-4: rgb(72, 196, 90) !important;
  --sync-avatar-color-5: rgb(63, 186, 182) !important;
  --sync-avatar-color-6: rgb(86, 148, 218) !important;
  --sync-avatar-color-7: rgb(142, 125, 194) !important;
  --sync-avatar-color-8: rgb(222, 103, 147) !important;
  --tab-action-width: 32px !important;
  --tab-curve: 12px !important;
  --tab-divider-color: #363636 !important;
  --tab-font-size: 13px !important;
  --tab-max-width: 200px !important;
  --tab-outline-width: 0px !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-stacked-font-size: 13px !important;
  --tab-stacked-header-width: 48px !important;
  --tab-switcher-preview-radius: 28px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-align: left !important;
  --tab-text-color-focused-active: #dadada !important;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249) !important;
  --table-add-button-border-width: 0 !important;
  --table-drag-handle-background-active: #dadada !important;
  --table-drag-handle-color-active: #1e1e1e !important;
  --table-header-border-color: transparent !important;
  --table-header-size: 0.933em !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: #dadada !important;
  --table-text-size: 0.933em !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(166, 139, 249) !important;
  --tag-color-hover: rgb(166, 139, 249) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 4px !important;
  --tag-radius: 8px !important;
  --tag-weight: 500 !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: rgb(197, 182, 252) !important;
  --text-error: rgb(217, 90, 95) !important;
  --text-on-accent: #1e1e1e !important;
  --text-on-accent-inverted: #1e1e1e !important;
  --text-selection: rgba(138, 92, 245, 0.33) !important;
  --text-success: rgb(72, 196, 90) !important;
  --text-warning: rgb(219, 134, 80) !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --titleFont: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --traffic-lights-offset-x: 48px !important;
  --traffic-lights-offset-y: 48px !important;
  --translucent-dark-opacity: 50% !important;
  --translucent-light-opacity: 50% !important;
  --vault-profile-font-size: 13px !important;
  --view-top-spacing-markdown: 0px !important;
  --workspace-background-translucent: rgb(from #262626 r g b / 50%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

html[saved-theme="dark"] body .text-highlight {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(36, 36, 36);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body table {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 28px;
  width: 654px;
}

html[saved-theme="dark"] body tbody {
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-left-radius: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body img {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  background-color: rgb(36, 36, 36);
  border-bottom-right-radius: 8px;
  border-left-color: rgb(102, 102, 102);
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(36, 36, 36);
  border-bottom-right-radius: 8px;
  border-left-color: rgb(102, 102, 102);
  border-top-right-radius: 8px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 63, 186, 182;
  background-color: rgba(63, 186, 182, 0.1);
  border-bottom-color: rgba(63, 186, 182, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(63, 186, 182, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(63, 186, 182, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(63, 186, 182, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 217, 90, 95;
  background-color: rgba(217, 90, 95, 0.1);
  border-bottom-color: rgba(217, 90, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(217, 90, 95, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(217, 90, 95, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(217, 90, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 217, 90, 95;
  background-color: rgba(217, 90, 95, 0.1);
  border-bottom-color: rgba(217, 90, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(217, 90, 95, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(217, 90, 95, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(217, 90, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 142, 125, 194;
  background-color: rgba(142, 125, 194, 0.1);
  border-bottom-color: rgba(142, 125, 194, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(142, 125, 194, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(142, 125, 194, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(142, 125, 194, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 217, 90, 95;
  background-color: rgba(217, 90, 95, 0.1);
  border-bottom-color: rgba(217, 90, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(217, 90, 95, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(217, 90, 95, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(217, 90, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 86, 148, 218;
  background-color: rgba(86, 148, 218, 0.1);
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 86, 148, 218;
  background-color: rgba(86, 148, 218, 0.1);
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 219, 134, 80;
  background-color: rgba(219, 134, 80, 0.1);
  border-bottom-color: rgba(219, 134, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(219, 134, 80, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(219, 134, 80, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(219, 134, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 72, 196, 90;
  background-color: rgba(72, 196, 90, 0.1);
  border-bottom-color: rgba(72, 196, 90, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(72, 196, 90, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(72, 196, 90, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(72, 196, 90, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 63, 186, 182;
  background-color: rgba(63, 186, 182, 0.1);
  border-bottom-color: rgba(63, 186, 182, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(63, 186, 182, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(63, 186, 182, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(63, 186, 182, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 86, 148, 218;
  background-color: rgba(86, 148, 218, 0.1);
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 219, 134, 80;
  background-color: rgba(219, 134, 80, 0.1);
  border-bottom-color: rgba(219, 134, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(219, 134, 80, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(219, 134, 80, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(219, 134, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(54, 54, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 62px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(54, 54, 54);
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
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body h1 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="dark"] body h2 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="dark"] body h3 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="dark"] body h4 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="dark"] body h5 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="dark"] body h6 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 12px;
  border-top-width: 0px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  color: rgb(179, 179, 179);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}`,
  },
  light: {
    base: `:root:root {
  --anim-duration-fast: 160ms !important;
  --anim-duration-moderate: 320ms !important;
  --anim-duration-slow: 480ms !important;
  --anim-duration-superfast: 80ms !important;
  --anim-motion-baseline: cubic-bezier(0.1, 0, 0.1, 1.25) !important;
  --anim-speed-modifier: 1 !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.35) !important;
  --background-modifier-error: rgb(254, 112, 112) !important;
  --background-modifier-error-hover: rgb(254, 112, 112) !important;
  --background-modifier-error-rgb: 254, 112, 112 !important;
  --background-modifier-success: rgb(74, 213, 95) !important;
  --background-modifier-success-rgb: 74, 213, 95 !important;
  --banner-fade-height: 80px !important;
  --banner-icon-size: 3rem !important;
  --banner-image-height: 320px !important;
  --banner-image-height-s: 240px !important;
  --banner-image-inset: 8px !important;
  --banner-image-object-fit: cover !important;
  --banner-mobile-offset: 0px !important;
  --bases-cards-corner-shape: superellipse(1.1) !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-size: 12px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #222222 !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-color: #ababab !important;
  --block-width-max: calc(100cqw - 64px) !important;
  --block-width-offset: -32px !important;
  --block-width-wide: min(100cqw, 50rem) !important;
  --blockquote-background-color: #fafafa !important;
  --blockquote-border-color: #ababab !important;
  --blockquote-size: 16px !important;
  --bodyFont: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-corner-shape: superellipse(1.1) !important;
  --button-radius: calc(8px*(1 - clamp(0, (1 - 1) * 10000 + 1, 1)) + 100vh*clamp(0, (1 - 1) * 10000 + 1, 1)) !important;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 254, 112, 112;
  --callout-default: 106, 173, 250;
  --callout-error: 254, 112, 112;
  --callout-example: 187, 158, 245;
  --callout-fail: 254, 112, 112;
  --callout-important: 56, 219, 214;
  --callout-info: 106, 173, 250;
  --callout-padding: 16px;
  --callout-question: 242, 154, 100;
  --callout-radius: 8px;
  --callout-size: 16px;
  --callout-success: 74, 213, 95;
  --callout-summary: 56, 219, 214;
  --callout-tip: 56, 219, 214;
  --callout-title-weight: 700;
  --callout-todo: 106, 173, 250;
  --callout-warning: 242, 154, 100;
  --canvas-color-1: 254, 112, 112 !important;
  --canvas-color-2: 242, 154, 100 !important;
  --canvas-color-3: 224, 205, 99 !important;
  --canvas-color-4: 74, 213, 95 !important;
  --canvas-color-5: 56, 219, 214 !important;
  --canvas-color-6: 187, 158, 245 !important;
  --canvas-controls-icon-size: 16px !important;
  --canvas-controls-icon-stroke: 2px !important;
  --canvas-controls-radius: 8px !important;
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
  --checkbox-color: #222222 !important;
  --checkbox-color-hover: rgb(from #222222 r g b / 80%) !important;
  --clickable-icon-radius: 8px !important;
  --code-border-width: 1px !important;
  --code-comment: #b6b9c5 !important;
  --code-function: #b76b02 !important;
  --code-important: #b76b02 !important;
  --code-keyword: #e45749 !important;
  --code-normal: #383a42 !important;
  --code-operator: rgb(254, 112, 112) !important;
  --code-property: #62afef !important;
  --code-punctuation: #383a42 !important;
  --code-radius: 8px !important;
  --code-size: 0.8em !important;
  --code-string: #0d97b3 !important;
  --code-tag: #e45749 !important;
  --code-value: #a626a4 !important;
  --codeFont: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #5c5c5c !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --color-blue: rgb(106, 173, 250) !important;
  --color-blue-rgb: 106, 173, 250 !important;
  --color-cyan: rgb(56, 219, 214) !important;
  --color-cyan-rgb: 56, 219, 214 !important;
  --color-green: rgb(74, 213, 95) !important;
  --color-green-rgb: 74, 213, 95 !important;
  --color-orange: rgb(242, 154, 100) !important;
  --color-orange-rgb: 242, 154, 100 !important;
  --color-pink: rgb(243, 125, 183) !important;
  --color-pink-rgb: 243, 125, 183 !important;
  --color-purple: rgb(187, 158, 245) !important;
  --color-purple-rgb: 187, 158, 245 !important;
  --color-red: rgb(254, 112, 112) !important;
  --color-red-rgb: 254, 112, 112 !important;
  --color-yellow: rgb(224, 205, 99) !important;
  --color-yellow-rgb: 224, 205, 99 !important;
  --corner-shape: superellipse(1.1) !important;
  --density-modifier: 1 !important;
  --divider-color-hover: #ababab !important;
  --embed-background: #fafafa !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid #ababab !important;
  --embed-max-height: none !important;
  --embed-padding: 16px !important;
  --file-header-border: none !important;
  --file-header-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 13px !important;
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Inter !important;
  --font-mermaid: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', Inter, 'Arial' !important;
  --font-text: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Inter !important;
  --font-ui-large: 20px !important;
  --font-ui-medium: 15px !important;
  --font-ui-modifier: 0px !important;
  --font-ui-small: 13px !important;
  --font-ui-smaller: 12px !important;
  --footnote-line-height: 1.6 !important;
  --footnote-radius: 8px !important;
  --frame-right-space: 144px !important;
  --graph-node-attachment: rgb(224, 205, 99) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --graph-node-tag: rgb(74, 213, 95) !important;
  --h1-font: '??', "Instrument Serif" !important;
  --h2-font: '??', "Instrument Serif" !important;
  --h3-font: '??', "Instrument Serif" !important;
  --h4-font: '??', "Instrument Serif" !important;
  --h5-font: '??', "Instrument Serif" !important;
  --h5-line-height: 1.6 !important;
  --h6-font: '??', "Instrument Serif" !important;
  --h6-line-height: 1.6 !important;
  --header-height: 48px !important;
  --headerFont: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 2em !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --hover-sidedock-delay: 160ms !important;
  --hover-sidedock-trigger-area: 1px !important;
  --hover-sidedock-width: 320px !important;
  --hr-align: center !important;
  --hr-dashed-size: 1em !important;
  --hr-dashed-spacing: 0.5em !important;
  --hr-width: 100% !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --icon-l: 16px !important;
  --icon-l-stroke-width: 2px !important;
  --icon-m: 16px !important;
  --icon-m-stroke-width: 2px !important;
  --icon-opacity: 1 !important;
  --icon-s: 16px !important;
  --icon-s-stroke-width: 2px !important;
  --icon-size: 16px !important;
  --icon-size-modifier: 0px !important;
  --icon-stroke: 2px !important;
  --icon-stroke-modifier: 1 !important;
  --icon-xl: 32px !important;
  --icon-xl-stroke-width: 1.25px !important;
  --icon-xs: 14px !important;
  --icon-xs-stroke-width: 2.25px !important;
  --indentation-guide-width: 0px !important;
  --inline-title-font: '??', "Instrument Serif" !important;
  --inline-title-margin-bottom: 0.5em !important;
  --input-corner-shape: superellipse(1.1) !important;
  --input-font-weight: 500 !important;
  --input-height: 32px !important;
  --input-radius: 8px !important;
  --input-shadow: inset 0 0 0 1px #e0e0e0 !important;
  --input-shadow-hover: inset 0 0 0 1px #d4d4d4 !important;
  --interactive-accent: #222222 !important;
  --interactive-accent-hover: rgb(from #222222 r g b / 80%) !important;
  --line-height-normal: 1.6 !important;
  --line-width: 700px !important;
  --line-width-wide: 50rem !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --list-spacing: 0.175em !important;
  --media-radius: 8px !important;
  --menu-corner-shape: superellipse(1.1) !important;
  --menu-padding: 4px !important;
  --menu-radius: 12px !important;
  --menu-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px !important;
  --metadata-gap: 8px !important;
  --metadata-input-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
  --metadata-label-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-width: 9em !important;
  --metadata-property-corner-shape: superellipse(1.1) !important;
  --metadata-property-corner-shape-focus: superellipse(1.1) !important;
  --metadata-property-corner-shape-hover: superellipse(1.1) !important;
  --metadata-sidebar-input-font-size: 13px !important;
  --metadata-sidebar-label-font-size: 13px !important;
  --modal-background: #f6f6f6 !important;
  --modal-border-color: #d4d4d4 !important;
  --modal-radius: 20px !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --nav-item-padding: 8px 16px 8px 32px !important;
  --nav-item-parent-padding: 8px 16px 8px 32px !important;
  --nav-item-radius: 8px !important;
  --nav-item-size: 13px !important;
  --nav-tag-radius: 8px !important;
  --nn-theme-file-border-radius: 12px !important;
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.1) !important;
  --nn-theme-file-tag-color: rgb(138, 92, 245) !important;
  --nn-theme-list-bg: transparent !important;
  --nn-theme-list-header-bg: transparent !important;
  --nn-theme-mobile-list-header-link-color: #222222 !important;
  --nn-theme-mobile-nav-bg: transparent !important;
  --nn-theme-mobile-toolbar-button-active-bg: #222222 !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: #ffffff !important;
  --nn-theme-mobile-toolbar-button-icon-color: #222222 !important;
  --nn-theme-nav-bg: transparent !important;
  --nn-theme-nav-header-bg: transparent !important;
  --nn-theme-navitem-border-radius: 12px !important;
  --nn-theme-navitem-selected-bg: rgba(0, 0, 0, 0.067) !important;
  --nn-theme-navitem-selected-inactive-bg: rgba(0, 0, 0, 0.067) !important;
  --p-spacing: 1.75rem !important;
  --pdf-shadow: none !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --prompt-border-color: #d4d4d4 !important;
  --prompt-input-height: 64px !important;
  --radius-l: 20px !important;
  --radius-m: 12px !important;
  --radius-modifier: 1 !important;
  --radius-modifier-check: clamp(0, (1 - 1) * 10000 + 1, 1) !important;
  --radius-s: 8px !important;
  --radius-xl: 28px !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 20px !important;
  --secondary: rgb(138, 92, 245) !important;
  --setting-group-heading-color: #ababab !important;
  --setting-group-heading-size: 13px !important;
  --setting-items-padding: 16px 16px !important;
  --setting-items-radius: 12px !important;
  --shadow-l: 0 14px 62px #00000040 !important;
  --shadow-s: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px !important;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --status-bar-font-size: 12px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --sync-avatar-color-1: rgb(254, 112, 112) !important;
  --sync-avatar-color-2: rgb(242, 154, 100) !important;
  --sync-avatar-color-3: rgb(224, 205, 99) !important;
  --sync-avatar-color-4: rgb(74, 213, 95) !important;
  --sync-avatar-color-5: rgb(56, 219, 214) !important;
  --sync-avatar-color-6: rgb(106, 173, 250) !important;
  --sync-avatar-color-7: rgb(187, 158, 245) !important;
  --sync-avatar-color-8: rgb(243, 125, 183) !important;
  --tab-action-width: 32px !important;
  --tab-curve: 12px !important;
  --tab-divider-color: #e0e0e0 !important;
  --tab-font-size: 13px !important;
  --tab-max-width: 200px !important;
  --tab-outline-width: 0px !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-stacked-font-size: 13px !important;
  --tab-stacked-header-width: 48px !important;
  --tab-switcher-preview-radius: 28px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-align: left !important;
  --tab-text-color-focused-active: #222222 !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-add-button-border-width: 0 !important;
  --table-drag-handle-background-active: #222222 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: transparent !important;
  --table-header-size: 0.933em !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: #222222 !important;
  --table-text-size: 0.933em !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 4px !important;
  --tag-radius: 8px !important;
  --tag-weight: 500 !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-error: rgb(254, 112, 112) !important;
  --text-on-accent: #ffffff !important;
  --text-on-accent-inverted: #ffffff !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --text-success: rgb(74, 213, 95) !important;
  --text-warning: rgb(242, 154, 100) !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --titleFont: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --traffic-lights-offset-x: 48px !important;
  --traffic-lights-offset-y: 48px !important;
  --translucent-dark-opacity: 50% !important;
  --translucent-light-opacity: 50% !important;
  --vault-profile-font-size: 13px !important;
  --view-top-spacing-markdown: 0px !important;
  --workspace-background-translucent: #f6f6f6 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

html[saved-theme="light"] body .text-highlight {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(250, 250, 250);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 28px;
  width: 654px;
}

html[saved-theme="light"] body tbody {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-left-radius: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(56, 58, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body img {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  background-color: rgb(250, 250, 250);
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 171, 171);
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(250, 250, 250);
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 171, 171);
  border-top-right-radius: 8px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 56, 219, 214;
  background-color: rgba(56, 219, 214, 0.1);
  border-bottom-color: rgba(56, 219, 214, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(56, 219, 214, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(56, 219, 214, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(56, 219, 214, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 254, 112, 112;
  background-color: rgba(254, 112, 112, 0.1);
  border-bottom-color: rgba(254, 112, 112, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(254, 112, 112, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(254, 112, 112, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(254, 112, 112, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 254, 112, 112;
  background-color: rgba(254, 112, 112, 0.1);
  border-bottom-color: rgba(254, 112, 112, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(254, 112, 112, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(254, 112, 112, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(254, 112, 112, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 187, 158, 245;
  background-color: rgba(187, 158, 245, 0.1);
  border-bottom-color: rgba(187, 158, 245, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(187, 158, 245, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(187, 158, 245, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(187, 158, 245, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 254, 112, 112;
  background-color: rgba(254, 112, 112, 0.1);
  border-bottom-color: rgba(254, 112, 112, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(254, 112, 112, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(254, 112, 112, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(254, 112, 112, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 106, 173, 250;
  background-color: rgba(106, 173, 250, 0.1);
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 106, 173, 250;
  background-color: rgba(106, 173, 250, 0.1);
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 242, 154, 100;
  background-color: rgba(242, 154, 100, 0.1);
  border-bottom-color: rgba(242, 154, 100, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(242, 154, 100, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(242, 154, 100, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(242, 154, 100, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 74, 213, 95;
  background-color: rgba(74, 213, 95, 0.1);
  border-bottom-color: rgba(74, 213, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 213, 95, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(74, 213, 95, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(74, 213, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 56, 219, 214;
  background-color: rgba(56, 219, 214, 0.1);
  border-bottom-color: rgba(56, 219, 214, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(56, 219, 214, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(56, 219, 214, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(56, 219, 214, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 106, 173, 250;
  background-color: rgba(106, 173, 250, 0.1);
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 242, 154, 100;
  background-color: rgba(242, 154, 100, 0.1);
  border-bottom-color: rgba(242, 154, 100, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(242, 154, 100, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(242, 154, 100, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(242, 154, 100, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 62px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 224, 224);
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
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body h1 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="light"] body h2 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="light"] body h3 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="light"] body h4 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="light"] body h5 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="light"] body h6 {
  font-family: "??", "Instrument Serif";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 12px;
  border-top-width: 0px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  color: rgb(92, 92, 92);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}`,
  },
};
