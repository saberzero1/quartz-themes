import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-3",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.1) !important;
  --background-modifier-border: #494455 !important;
  --background-modifier-border-focus: #494455 !important;
  --background-modifier-border-hover: #494455 !important;
  --background-modifier-cover: rgba( from #000000 r g b / 0.32 ) !important;
  --background-modifier-error: #ffb4ab !important;
  --background-modifier-error-hover: #ffb4ab !important;
  --background-modifier-error-rgb: 255, 180, 171 !important;
  --background-modifier-form-field: #0f0d16 !important;
  --background-modifier-form-field-hover: #0f0d16 !important;
  --background-modifier-hover: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --background-modifier-message: #e7e0ee !important;
  --background-modifier-success: rgb(77, 223, 162) !important;
  --background-modifier-success-rgb: 77, 223, 162 !important;
  --background-primary: #14121b !important;
  --background-primary-alt: #1d1a24 !important;
  --background-secondary: #211e28 !important;
  --background-secondary-alt: #36333e !important;
  --bases-cards-background: #14121b !important;
  --bases-cards-cover-background: #1d1a24 !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px #494455 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #494455 !important;
  --bases-embed-border-color: #494455 !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: #cbc3d8 !important;
  --bases-table-border-color: #494455 !important;
  --bases-table-cell-background-active: #14121b !important;
  --bases-table-cell-background-disabled: #1d1a24 !important;
  --bases-table-cell-background-selected: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #494455 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #cebdff !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: #1d1a24 !important;
  --bases-table-header-background: #14121b !important;
  --bases-table-header-background-hover: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --bases-table-header-color: #cbc3d8 !important;
  --bases-table-summary-background: #14121b !important;
  --bases-table-summary-background-hover: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --blockquote-border-color: #cebdff !important;
  --blur-background: color-mix(in srgb, #36333e 65%, transparent) linear-gradient(#36333e, color-mix(in srgb, #36333e 65%, transparent)) !important;
  --bodyFont: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 28px !important;
  --callout-radius: 8px;
  --canvas-background: #14121b !important;
  --canvas-card-label-color: #cbc3d8 !important;
  --canvas-controls-radius: 8px !important;
  --caret-color: #e7e0ee !important;
  --checkbox-border-color: #cbc3d8 !important;
  --checkbox-border-color-hover: #cbc3d8 !important;
  --checkbox-color: #cebdff !important;
  --checkbox-color-hover: rgb( from #cebdff r g b / 0.9 ) !important;
  --checkbox-marker-color: #14121b !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: #cbc3d8 !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #1d1a24 !important;
  --code-border-color: #494455 !important;
  --code-bracket-background: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --code-comment: #cbc3d8 !important;
  --code-normal: #e7e0ee !important;
  --code-punctuation: #cbc3d8 !important;
  --code-radius: 8px !important;
  --codeFont: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #cbc3d8 !important;
  --collapse-icon-color-collapsed: #cebdff !important;
  --color-accent: #cebdff !important;
  --color-accent-hsl: 255.4545454545deg, 100%, 87.0588235294% !important;
  --dark: #e7e0ee !important;
  --darkgray: #e7e0ee !important;
  --divider-color: #494455 !important;
  --divider-color-hover: #cebdff !important;
  --dropdown-background: #36333e !important;
  --dropdown-background-hover: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --dropdown-background-position: right 16px top 50%, 0 0 !important;
  --embed-block-shadow-hover: 0 0 0 1px #494455, inset 0 0 0 1px #494455 !important;
  --embed-border-start: 2px solid #cebdff !important;
  --file-header-background: #14121b !important;
  --file-header-background-focused: #14121b !important;
  --file-header-font: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #36333e !important;
  --flair-color: #e7e0ee !important;
  --font-interface: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Roboto" !important;
  --font-mermaid: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Roboto", Arial' !important;
  --font-text: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Roboto" !important;
  --footnote-divider-color: #494455 !important;
  --footnote-id-color: #cbc3d8 !important;
  --footnote-id-color-no-occurrences: #cbc3d8 !important;
  --footnote-input-background-active: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --footnote-radius: 8px !important;
  --graph-node: #cbc3d8 !important;
  --graph-node-focused: #cebdff !important;
  --graph-node-unresolved: #cbc3d8 !important;
  --graph-text: #e7e0ee !important;
  --gray: #cbc3d8 !important;
  --headerFont: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #cbc3d8 !important;
  --highlight: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --hr-color: #494455 !important;
  --icon-color: #cbc3d8 !important;
  --icon-color-active: #cebdff !important;
  --icon-color-focused: #cbc3d8 !important;
  --icon-color-hover: #cbc3d8 !important;
  --icon-opacity: 1 !important;
  --input-date-separator: #cbc3d8 !important;
  --input-height: 40px !important;
  --input-placeholder-color: #cbc3d8 !important;
  --input-radius: 28px !important;
  --interactive-accent: #cebdff !important;
  --interactive-accent-hover: rgb( from #cebdff r g b / 0.9 ) !important;
  --interactive-accent-hsl: 255.4545454545deg, 100%, 87.0588235294% !important;
  --interactive-hover: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --interactive-normal: #36333e !important;
  --light: #14121b !important;
  --lightgray: #211e28 !important;
  --link-color: #cebdff !important;
  --link-external-color: #cebdff !important;
  --link-unresolved-color: #ffb4ab !important;
  --link-unresolved-decoration-color: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color: #cbc3d8 !important;
  --list-marker-color-collapsed: #cebdff !important;
  --list-marker-color-hover: #cbc3d8 !important;
  --md-extended-blue-color: rgb(187, 195, 255) !important;
  --md-extended-blue-color-container: rgb(71, 91, 214) !important;
  --md-extended-blue-on-color: rgb(0, 27, 150) !important;
  --md-extended-blue-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-blue-seed: rgb(8, 109, 221) !important;
  --md-extended-blue-value: rgb(81, 100, 224) !important;
  --md-extended-cyan-color: rgb(77, 223, 242) !important;
  --md-extended-cyan-color-container: rgb(0, 180, 199) !important;
  --md-extended-cyan-on-color: rgb(0, 54, 61) !important;
  --md-extended-cyan-on-color-container: rgb(0, 28, 32) !important;
  --md-extended-cyan-seed: rgb(0, 191, 188) !important;
  --md-extended-cyan-value: rgb(5, 189, 208) !important;
  --md-extended-green-color: rgb(77, 223, 162) !important;
  --md-extended-green-color-container: rgb(0, 173, 119) !important;
  --md-extended-green-color-rgb: 77, 223, 162 !important;
  --md-extended-green-on-color: rgb(0, 56, 36) !important;
  --md-extended-green-on-color-container: rgb(0, 7, 3) !important;
  --md-extended-green-seed: rgb(8, 185, 78) !important;
  --md-extended-green-value: rgb(0, 183, 126) !important;
  --md-extended-orange-color: rgb(255, 181, 156) !important;
  --md-extended-orange-color-container: rgb(199, 77, 30) !important;
  --md-extended-orange-on-color: rgb(92, 25, 0) !important;
  --md-extended-orange-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-orange-seed: rgb(236, 117, 0) !important;
  --md-extended-orange-value: rgb(244, 109, 60) !important;
  --md-extended-pink-color: rgb(255, 173, 227) !important;
  --md-extended-pink-color-container: rgb(193, 49, 163) !important;
  --md-extended-pink-on-color: rgb(95, 0, 79) !important;
  --md-extended-pink-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-pink-seed: rgb(213, 57, 132) !important;
  --md-extended-pink-value: rgb(203, 59, 172) !important;
  --md-extended-purple-color: rgb(205, 189, 255) !important;
  --md-extended-purple-color-container: rgb(113, 71, 228) !important;
  --md-extended-purple-on-color: rgb(55, 0, 149) !important;
  --md-extended-purple-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-purple-seed: rgb(120, 82, 238) !important;
  --md-extended-purple-value: rgb(122, 81, 237) !important;
  --md-extended-red-color: rgb(255, 177, 196) !important;
  --md-extended-red-color-container: rgb(220, 31, 111) !important;
  --md-extended-red-on-color: rgb(101, 0, 46) !important;
  --md-extended-red-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-red-seed: rgb(233, 49, 71) !important;
  --md-extended-red-value: rgb(231, 42, 119) !important;
  --md-extended-yellow-color: rgb(255, 207, 146) !important;
  --md-extended-yellow-color-container: rgb(237, 157, 12) !important;
  --md-extended-yellow-on-color: rgb(69, 43, 0) !important;
  --md-extended-yellow-on-color-container: rgb(51, 30, 0) !important;
  --md-extended-yellow-seed: rgb(224, 172, 0) !important;
  --md-extended-yellow-value: rgb(244, 163, 23) !important;
  --md-key-colors-primary: rgb(134, 88, 255) !important;
  --md-source-seed: rgb(134, 88, 255) !important;
  --md-sys-color-background: #14121b !important;
  --md-sys-color-error: #ffb4ab !important;
  --md-sys-color-error-container: #93000a !important;
  --md-sys-color-inverse-on-surface: #322f39 !important;
  --md-sys-color-inverse-primary: #6b36e2 !important;
  --md-sys-color-inverse-surface: #e7e0ee !important;
  --md-sys-color-on-background: #e7e0ee !important;
  --md-sys-color-on-error: #690005 !important;
  --md-sys-color-on-error-container: #ffdad6 !important;
  --md-sys-color-on-primary: #390093 !important;
  --md-sys-color-on-primary-container: #e8ddff !important;
  --md-sys-color-on-primary-fixed: #21005d !important;
  --md-sys-color-on-primary-fixed-variant: #5208ca !important;
  --md-sys-color-on-secondary: #36226b !important;
  --md-sys-color-on-secondary-container: #e8ddff !important;
  --md-sys-color-on-secondary-fixed: #210656 !important;
  --md-sys-color-on-secondary-fixed-variant: #4d3a83 !important;
  --md-sys-color-on-surface: #e7e0ee !important;
  --md-sys-color-on-surface-variant: #cbc3d8 !important;
  --md-sys-color-on-tertiary: #4c2700 !important;
  --md-sys-color-on-tertiary-container: #ffdcc1 !important;
  --md-sys-color-on-tertiary-fixed: #2e1500 !important;
  --md-sys-color-on-tertiary-fixed-variant: #6c3a00 !important;
  --md-sys-color-outline: #948ea1 !important;
  --md-sys-color-outline-variant: #494455 !important;
  --md-sys-color-primary: #cebdff !important;
  --md-sys-color-primary-container: #5208ca !important;
  --md-sys-color-primary-fixed: #e8ddff !important;
  --md-sys-color-primary-fixed-dim: #cebdff !important;
  --md-sys-color-scrim: #000000 !important;
  --md-sys-color-secondary: #cebdff !important;
  --md-sys-color-secondary-container: #4d3a83 !important;
  --md-sys-color-secondary-fixed: #e8ddff !important;
  --md-sys-color-secondary-fixed-dim: #cebdff !important;
  --md-sys-color-shadow: #000000 !important;
  --md-sys-color-surface: #14121b !important;
  --md-sys-color-surface-bright: #3b3742 !important;
  --md-sys-color-surface-container: #211e28 !important;
  --md-sys-color-surface-container-high: #2b2833 !important;
  --md-sys-color-surface-container-highest: #36333e !important;
  --md-sys-color-surface-container-low: #1d1a24 !important;
  --md-sys-color-surface-container-lowest: #0f0d16 !important;
  --md-sys-color-surface-dim: #14121b !important;
  --md-sys-color-surface-tint: #cebdff !important;
  --md-sys-color-surface-variant: #494455 !important;
  --md-sys-color-tertiary: #ffb779 !important;
  --md-sys-color-tertiary-container: #6c3a00 !important;
  --md-sys-color-tertiary-fixed: #ffdcc1 !important;
  --md-sys-color-tertiary-fixed-dim: #ffb779 !important;
  --md-sys-motion-duration-extra-long1: 700ms !important;
  --md-sys-motion-duration-extra-long2: 800ms !important;
  --md-sys-motion-duration-extra-long3: 900ms !important;
  --md-sys-motion-duration-extra-long4: 1000ms !important;
  --md-sys-motion-duration-long1: 450ms !important;
  --md-sys-motion-duration-long2: 500ms !important;
  --md-sys-motion-duration-long3: 550ms !important;
  --md-sys-motion-duration-long4: 600ms !important;
  --md-sys-motion-duration-medium1: 250ms !important;
  --md-sys-motion-duration-medium2: 300ms !important;
  --md-sys-motion-duration-medium3: 350ms !important;
  --md-sys-motion-duration-medium4: 400ms !important;
  --md-sys-motion-duration-short1: 50ms !important;
  --md-sys-motion-duration-short2: 100ms !important;
  --md-sys-motion-duration-short3: 150ms !important;
  --md-sys-motion-duration-short4: 200ms !important;
  --md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1) !important;
  --md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15) !important;
  --md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1) !important;
  --md-sys-motion-easing-legacy: cubic-bezier(0.4, 0, 0.2, 1) !important;
  --md-sys-motion-easing-legacy-accelerate: cubic-bezier(0.4, 0, 1, 1) !important;
  --md-sys-motion-easing-legacy-decelerate: cubic-bezier(0, 0, 0.2, 1) !important;
  --md-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1) !important;
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1) !important;
  --md-sys-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1) !important;
  --md-sys-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1) !important;
  --md-sys-shape-corner-extra-large: 28px !important;
  --md-sys-shape-corner-extra-small: 4px !important;
  --md-sys-shape-corner-full: 9999px !important;
  --md-sys-shape-corner-large: 16px !important;
  --md-sys-shape-corner-medium: 12px !important;
  --md-sys-shape-corner-none: 0px !important;
  --md-sys-shape-corner-small: 8px !important;
  --md-sys-state-dragged-state-layer-opacity: 0.16 !important;
  --md-sys-state-focus-state-layer-opacity: 0.12 !important;
  --md-sys-state-hover-state-layer-opacity: 0.08 !important;
  --md-sys-state-pressed-state-layer-opacity: 0.12 !important;
  --menu-background: #211e28 !important;
  --menu-border-color: #494455 !important;
  --menu-radius: 12px !important;
  --metadata-border-color: #494455 !important;
  --metadata-divider-color: #494455 !important;
  --metadata-input-background-active: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --metadata-input-font: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #e7e0ee !important;
  --metadata-label-background-active: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --metadata-label-font: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #cbc3d8 !important;
  --metadata-label-text-color-hover: #cbc3d8 !important;
  --metadata-property-background-active: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #494455 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #494455 !important;
  --modal-background: #14121b !important;
  --nav-collapse-icon-color: #cbc3d8 !important;
  --nav-collapse-icon-color-collapsed: #cbc3d8 !important;
  --nav-heading-color: #e7e0ee !important;
  --nav-heading-color-collapsed: #cbc3d8 !important;
  --nav-heading-color-collapsed-hover: #cbc3d8 !important;
  --nav-heading-color-hover: #e7e0ee !important;
  --nav-item-background-active: #4d3a83 !important;
  --nav-item-background-hover: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --nav-item-background-selected: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.15) !important;
  --nav-item-color: #cbc3d8 !important;
  --nav-item-color-active: #e8ddff !important;
  --nav-item-color-highlighted: #cebdff !important;
  --nav-item-color-hover: #e7e0ee !important;
  --nav-item-color-selected: #e7e0ee !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #cbc3d8 !important;
  --nav-tag-color-active: #cbc3d8 !important;
  --nav-tag-color-hover: #cbc3d8 !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #14121b !important;
  --pdf-page-background: #14121b !important;
  --pdf-shadow: 0 0 0 1px #494455 !important;
  --pdf-sidebar-background: #14121b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #494455 !important;
  --pill-border-color: #494455 !important;
  --pill-border-color-hover: #494455 !important;
  --pill-color: #cbc3d8 !important;
  --pill-color-hover: #e7e0ee !important;
  --pill-color-remove: #cbc3d8 !important;
  --pill-color-remove-hover: #cebdff !important;
  --prompt-background: #14121b !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #36333e 65%, transparent) linear-gradient(#36333e, color-mix(in srgb, #36333e 65%, transparent)) !important;
  --ribbon-background: #211e28 !important;
  --ribbon-background-collapsed: #14121b !important;
  --scrollbar-active-thumb-bg: #948ea1 !important;
  --scrollbar-bg: #948ea1 !important;
  --scrollbar-radius: 16px !important;
  --scrollbar-thumb-bg: #494455 !important;
  --search-clear-button-color: #cbc3d8 !important;
  --search-icon-color: #cbc3d8 !important;
  --search-result-background: #14121b !important;
  --secondary: #cebdff !important;
  --setting-group-heading-color: #e7e0ee !important;
  --setting-items-background: #1d1a24 !important;
  --setting-items-border-color: #494455 !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-border-color: #494455 !important;
  --slider-thumb-border-width: 0px !important;
  --slider-thumb-radius: 9999px !important;
  --slider-track-background: #4d3a83 !important;
  --status-bar-background: #211e28 !important;
  --status-bar-border-color: #494455 !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: #cbc3d8 !important;
  --suggestion-background: #14121b !important;
  --tab-background-active: #14121b !important;
  --tab-container-background: #211e28 !important;
  --tab-divider-color: #494455 !important;
  --tab-outline-color: #494455 !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 4px 4px 0px 0px !important;
  --tab-switcher-background: #211e28 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #211e28, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #cebdff !important;
  --tab-text-color: #cbc3d8 !important;
  --tab-text-color-active: #cbc3d8 !important;
  --tab-text-color-focused: #cbc3d8 !important;
  --tab-text-color-focused-active: #cbc3d8 !important;
  --tab-text-color-focused-active-current: #e7e0ee !important;
  --tab-text-color-focused-highlighted: #cebdff !important;
  --table-add-button-border-color: #494455 !important;
  --table-border-color: #494455 !important;
  --table-drag-handle-background-active: #cebdff !important;
  --table-drag-handle-color: #cbc3d8 !important;
  --table-drag-handle-color-active: #390093 !important;
  --table-header-border-color: #494455 !important;
  --table-header-color: #e7e0ee !important;
  --table-selection: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.1) !important;
  --table-selection-border-color: #cebdff !important;
  --tag-background: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.1) !important;
  --tag-background-hover: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.2) !important;
  --tag-border-color: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.15) !important;
  --tag-border-color-hover: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.15) !important;
  --tag-color: #cebdff !important;
  --tag-color-hover: #cebdff !important;
  --tertiary: rgb( from #cebdff r g b / 0.9 ) !important;
  --text-accent: #cebdff !important;
  --text-faint: #cbc3d8 !important;
  --text-muted: #cbc3d8 !important;
  --text-normal: #e7e0ee !important;
  --text-on-accent: #390093 !important;
  --text-selection: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.33) !important;
  --textHighlight: rgba( from #cbc3d8 r g b / 0.08 ) !important;
  --titleFont: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #211e28 !important;
  --titlebar-background-focused: #36333e !important;
  --titlebar-border-color: #494455 !important;
  --titlebar-text-color: #cbc3d8 !important;
  --titlebar-text-color-focused: #e7e0ee !important;
  --vault-profile-color: #e7e0ee !important;
  --vault-profile-color-hover: #e7e0ee !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 30, 40);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(20, 18, 27);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(73, 68, 85);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(33, 30, 40);
  border-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(73, 68, 85);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 8px;
  color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 30, 40);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(73, 68, 85);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 30, 40);
  border-left-color: rgb(73, 68, 85);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(20, 18, 27);
  color: rgb(231, 224, 238);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(203, 195, 216);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(206, 189, 255);
  border-color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 195, 216) none 0px;
  text-decoration-color: rgb(203, 195, 216);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(206, 189, 255);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(206, 189, 255) none 0px;
  text-decoration-color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(206, 189, 255);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(206, 189, 255) none 0px;
  text-decoration-color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 180, 171);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 180, 171) none 0px;
  text-decoration: underline rgba(206, 189, 255, 0.3);
  text-decoration-color: rgba(206, 189, 255, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body dt {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body table {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.188px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(231, 224, 238);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(206, 189, 255);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
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
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-left-width: 0px;
  border-right-color: rgb(231, 224, 238);
  border-right-width: 0px;
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(20, 18, 27);
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-left-width: 0px;
  border-right-color: rgb(231, 224, 238);
  border-right-width: 0px;
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: rgb(20, 18, 27);
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.796078 0.764706 0.847059 / 0.08);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-left-width: 0px;
  border-right-color: rgb(231, 224, 238);
  border-right-width: 0px;
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: color(srgb 0.796078 0.764706 0.847059 / 0.08);
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.796078 0.764706 0.847059 / 0.08);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(148, 142, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(148, 142, 161);
  border-left-width: 1px;
  border-right-color: rgb(148, 142, 161);
  border-right-width: 1px;
  border-top-color: rgb(148, 142, 161);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(231, 224, 238);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(203, 195, 216);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(33, 30, 40);
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 12px;
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(203, 195, 216);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(203, 195, 216);
  stroke: rgb(203, 195, 216);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(33, 30, 40);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body sub {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body sup {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(206, 189, 255, 0.1);
  border-bottom-color: rgba(206, 189, 255, 0.15);
  border-left-color: rgba(206, 189, 255, 0.15);
  border-right-color: rgba(206, 189, 255, 0.15);
  border-top-color: rgba(206, 189, 255, 0.15);
  color: rgb(206, 189, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.1) !important;
  --background-modifier-border: #cbc3d8 !important;
  --background-modifier-border-focus: #cbc3d8 !important;
  --background-modifier-border-hover: #cbc3d8 !important;
  --background-modifier-cover: rgba( from #000000 r g b / 0.32 ) !important;
  --background-modifier-error: #ba1a1a !important;
  --background-modifier-error-hover: #ba1a1a !important;
  --background-modifier-error-rgb: 186, 26, 26 !important;
  --background-modifier-hover: rgba( from #494455 r g b / 0.08 ) !important;
  --background-modifier-message: #322f39 !important;
  --background-modifier-success: rgb(0, 108, 73) !important;
  --background-modifier-success-rgb: 0, 108, 73 !important;
  --background-primary: #fdf7ff !important;
  --background-primary-alt: #f8f1ff !important;
  --background-secondary: #f2ebf9 !important;
  --background-secondary-alt: #e7e0ee !important;
  --bases-cards-background: #fdf7ff !important;
  --bases-cards-cover-background: #f8f1ff !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px #cbc3d8 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #cbc3d8 !important;
  --bases-embed-border-color: #cbc3d8 !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: #494455 !important;
  --bases-table-border-color: #cbc3d8 !important;
  --bases-table-cell-background-active: #fdf7ff !important;
  --bases-table-cell-background-disabled: #f8f1ff !important;
  --bases-table-cell-background-selected: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #cbc3d8 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6b36e2 !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: #f8f1ff !important;
  --bases-table-header-background: #fdf7ff !important;
  --bases-table-header-background-hover: rgba( from #494455 r g b / 0.08 ) !important;
  --bases-table-header-color: #494455 !important;
  --bases-table-summary-background: #fdf7ff !important;
  --bases-table-summary-background-hover: rgba( from #494455 r g b / 0.08 ) !important;
  --blockquote-border-color: #6b36e2 !important;
  --blur-background: color-mix(in srgb, #fdf7ff 65%, transparent) linear-gradient(#fdf7ff, color-mix(in srgb, #fdf7ff 65%, transparent)) !important;
  --bodyFont: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 28px !important;
  --callout-radius: 8px;
  --canvas-background: #fdf7ff !important;
  --canvas-card-label-color: #494455 !important;
  --canvas-controls-radius: 8px !important;
  --caret-color: #1d1a24 !important;
  --checkbox-border-color: #494455 !important;
  --checkbox-border-color-hover: #494455 !important;
  --checkbox-color: #6b36e2 !important;
  --checkbox-color-hover: rgb( from #6b36e2 r g b / 0.9 ) !important;
  --checkbox-marker-color: #fdf7ff !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: #494455 !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #f8f1ff !important;
  --code-border-color: #cbc3d8 !important;
  --code-bracket-background: rgba( from #494455 r g b / 0.08 ) !important;
  --code-comment: #494455 !important;
  --code-normal: #1d1a24 !important;
  --code-punctuation: #494455 !important;
  --code-radius: 8px !important;
  --codeFont: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #494455 !important;
  --collapse-icon-color-collapsed: #6b36e2 !important;
  --color-accent: #6b36e2 !important;
  --color-accent-hsl: 258.488372093deg, 74.7826086957%, 54.9019607843% !important;
  --dark: #1d1a24 !important;
  --darkgray: #1d1a24 !important;
  --divider-color: #cbc3d8 !important;
  --divider-color-hover: #6b36e2 !important;
  --dropdown-background: #e7e0ee !important;
  --dropdown-background-hover: rgba( from #494455 r g b / 0.08 ) !important;
  --dropdown-background-position: right 16px top 50%, 0 0 !important;
  --embed-block-shadow-hover: 0 0 0 1px #cbc3d8, inset 0 0 0 1px #cbc3d8 !important;
  --embed-border-start: 2px solid #6b36e2 !important;
  --file-header-background: #fdf7ff !important;
  --file-header-background-focused: #fdf7ff !important;
  --file-header-font: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #e7e0ee !important;
  --flair-color: #1d1a24 !important;
  --font-interface: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Roboto" !important;
  --font-mermaid: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Roboto", Arial' !important;
  --font-text: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Roboto" !important;
  --footnote-divider-color: #cbc3d8 !important;
  --footnote-id-color: #494455 !important;
  --footnote-id-color-no-occurrences: #494455 !important;
  --footnote-input-background-active: rgba( from #494455 r g b / 0.08 ) !important;
  --footnote-radius: 8px !important;
  --graph-node: #494455 !important;
  --graph-node-focused: #6b36e2 !important;
  --graph-node-unresolved: #494455 !important;
  --graph-text: #1d1a24 !important;
  --gray: #494455 !important;
  --headerFont: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #494455 !important;
  --highlight: rgba( from #494455 r g b / 0.08 ) !important;
  --hr-color: #cbc3d8 !important;
  --icon-color: #494455 !important;
  --icon-color-active: #6b36e2 !important;
  --icon-color-focused: #494455 !important;
  --icon-color-hover: #494455 !important;
  --icon-opacity: 1 !important;
  --input-date-separator: #494455 !important;
  --input-height: 40px !important;
  --input-placeholder-color: #494455 !important;
  --input-radius: 28px !important;
  --interactive-accent: #6b36e2 !important;
  --interactive-accent-hover: rgb( from #6b36e2 r g b / 0.9 ) !important;
  --interactive-accent-hsl: 258.488372093deg, 74.7826086957%, 54.9019607843% !important;
  --interactive-hover: rgba( from #494455 r g b / 0.08 ) !important;
  --interactive-normal: #e7e0ee !important;
  --light: #fdf7ff !important;
  --lightgray: #f2ebf9 !important;
  --link-color: #6b36e2 !important;
  --link-external-color: #6b36e2 !important;
  --link-unresolved-color: #ba1a1a !important;
  --link-unresolved-decoration-color: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color: #494455 !important;
  --list-marker-color-collapsed: #6b36e2 !important;
  --list-marker-color-hover: #494455 !important;
  --md-extended-blue-color: rgb(40, 60, 186) !important;
  --md-extended-blue-color-container: rgb(81, 100, 224) !important;
  --md-extended-blue-on-color: rgb(255, 255, 255) !important;
  --md-extended-blue-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-blue-seed: rgb(8, 109, 221) !important;
  --md-extended-blue-value: rgb(81, 100, 224) !important;
  --md-extended-cyan-color: rgb(0, 104, 116) !important;
  --md-extended-cyan-color-container: rgb(40, 200, 219) !important;
  --md-extended-cyan-on-color: rgb(255, 255, 255) !important;
  --md-extended-cyan-on-color-container: rgb(0, 47, 53) !important;
  --md-extended-cyan-seed: rgb(0, 191, 188) !important;
  --md-extended-cyan-value: rgb(5, 189, 208) !important;
  --md-extended-green-color: rgb(0, 108, 73) !important;
  --md-extended-green-color-container: rgb(37, 195, 137) !important;
  --md-extended-green-color-rgb: 0, 108, 73 !important;
  --md-extended-green-on-color: rgb(255, 255, 255) !important;
  --md-extended-green-on-color-container: rgb(0, 40, 24) !important;
  --md-extended-green-seed: rgb(8, 185, 78) !important;
  --md-extended-green-value: rgb(0, 183, 126) !important;
  --md-extended-orange-color: rgb(169, 56, 6) !important;
  --md-extended-orange-color-container: rgb(255, 123, 76) !important;
  --md-extended-orange-on-color: rgb(255, 255, 255) !important;
  --md-extended-orange-on-color-container: rgb(48, 9, 0) !important;
  --md-extended-orange-seed: rgb(236, 117, 0) !important;
  --md-extended-orange-value: rgb(244, 109, 60) !important;
  --md-extended-pink-color: rgb(150, 0, 126) !important;
  --md-extended-pink-color-container: rgb(198, 55, 168) !important;
  --md-extended-pink-on-color: rgb(255, 255, 255) !important;
  --md-extended-pink-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-pink-seed: rgb(213, 57, 132) !important;
  --md-extended-pink-value: rgb(203, 59, 172) !important;
  --md-extended-purple-color: rgb(85, 34, 199) !important;
  --md-extended-purple-color-container: rgb(122, 81, 237) !important;
  --md-extended-purple-on-color: rgb(255, 255, 255) !important;
  --md-extended-purple-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-purple-seed: rgb(120, 82, 238) !important;
  --md-extended-purple-value: rgb(122, 81, 237) !important;
  --md-extended-red-color: rgb(160, 0, 76) !important;
  --md-extended-red-color-container: rgb(221, 32, 112) !important;
  --md-extended-red-on-color: rgb(255, 255, 255) !important;
  --md-extended-red-on-color-container: rgb(255, 255, 255) !important;
  --md-extended-red-seed: rgb(233, 49, 71) !important;
  --md-extended-red-value: rgb(231, 42, 119) !important;
  --md-extended-yellow-color: rgb(131, 85, 0) !important;
  --md-extended-yellow-color-container: rgb(255, 172, 35) !important;
  --md-extended-yellow-on-color: rgb(255, 255, 255) !important;
  --md-extended-yellow-on-color-container: rgb(68, 42, 0) !important;
  --md-extended-yellow-seed: rgb(224, 172, 0) !important;
  --md-extended-yellow-value: rgb(244, 163, 23) !important;
  --md-key-colors-primary: rgb(134, 88, 255) !important;
  --md-source-seed: rgb(134, 88, 255) !important;
  --md-sys-color-background: #fdf7ff !important;
  --md-sys-color-error: #ba1a1a !important;
  --md-sys-color-error-container: #ffdad6 !important;
  --md-sys-color-inverse-on-surface: #f5eefc !important;
  --md-sys-color-inverse-primary: #cebdff !important;
  --md-sys-color-inverse-surface: #322f39 !important;
  --md-sys-color-on-background: #1d1a24 !important;
  --md-sys-color-on-error: #ffffff !important;
  --md-sys-color-on-error-container: #410002 !important;
  --md-sys-color-on-primary: #ffffff !important;
  --md-sys-color-on-primary-container: #21005d !important;
  --md-sys-color-on-primary-fixed: #21005d !important;
  --md-sys-color-on-primary-fixed-variant: #5208ca !important;
  --md-sys-color-on-secondary: #ffffff !important;
  --md-sys-color-on-secondary-container: #210656 !important;
  --md-sys-color-on-secondary-fixed: #210656 !important;
  --md-sys-color-on-secondary-fixed-variant: #4d3a83 !important;
  --md-sys-color-on-surface: #1d1a24 !important;
  --md-sys-color-on-surface-variant: #494455 !important;
  --md-sys-color-on-tertiary: #ffffff !important;
  --md-sys-color-on-tertiary-container: #2e1500 !important;
  --md-sys-color-on-tertiary-fixed: #2e1500 !important;
  --md-sys-color-on-tertiary-fixed-variant: #6c3a00 !important;
  --md-sys-color-outline: #7a7487 !important;
  --md-sys-color-outline-variant: #cbc3d8 !important;
  --md-sys-color-primary: #6b36e2 !important;
  --md-sys-color-primary-container: #e8ddff !important;
  --md-sys-color-primary-fixed: #e8ddff !important;
  --md-sys-color-primary-fixed-dim: #cebdff !important;
  --md-sys-color-scrim: #000000 !important;
  --md-sys-color-secondary: #65529d !important;
  --md-sys-color-secondary-container: #e8ddff !important;
  --md-sys-color-secondary-fixed: #e8ddff !important;
  --md-sys-color-secondary-fixed-dim: #cebdff !important;
  --md-sys-color-shadow: #000000 !important;
  --md-sys-color-surface: #fdf7ff !important;
  --md-sys-color-surface-bright: #fdf7ff !important;
  --md-sys-color-surface-container: #f2ebf9 !important;
  --md-sys-color-surface-container-high: #ece5f4 !important;
  --md-sys-color-surface-container-highest: #e7e0ee !important;
  --md-sys-color-surface-container-low: #f8f1ff !important;
  --md-sys-color-surface-container-lowest: #ffffff !important;
  --md-sys-color-surface-dim: #ded7e5 !important;
  --md-sys-color-surface-tint: #6b36e2 !important;
  --md-sys-color-surface-variant: #e7dff4 !important;
  --md-sys-color-tertiary: #8f4e00 !important;
  --md-sys-color-tertiary-container: #ffdcc1 !important;
  --md-sys-color-tertiary-fixed: #ffdcc1 !important;
  --md-sys-color-tertiary-fixed-dim: #ffb779 !important;
  --md-sys-motion-duration-extra-long1: 700ms !important;
  --md-sys-motion-duration-extra-long2: 800ms !important;
  --md-sys-motion-duration-extra-long3: 900ms !important;
  --md-sys-motion-duration-extra-long4: 1000ms !important;
  --md-sys-motion-duration-long1: 450ms !important;
  --md-sys-motion-duration-long2: 500ms !important;
  --md-sys-motion-duration-long3: 550ms !important;
  --md-sys-motion-duration-long4: 600ms !important;
  --md-sys-motion-duration-medium1: 250ms !important;
  --md-sys-motion-duration-medium2: 300ms !important;
  --md-sys-motion-duration-medium3: 350ms !important;
  --md-sys-motion-duration-medium4: 400ms !important;
  --md-sys-motion-duration-short1: 50ms !important;
  --md-sys-motion-duration-short2: 100ms !important;
  --md-sys-motion-duration-short3: 150ms !important;
  --md-sys-motion-duration-short4: 200ms !important;
  --md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1) !important;
  --md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15) !important;
  --md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1) !important;
  --md-sys-motion-easing-legacy: cubic-bezier(0.4, 0, 0.2, 1) !important;
  --md-sys-motion-easing-legacy-accelerate: cubic-bezier(0.4, 0, 1, 1) !important;
  --md-sys-motion-easing-legacy-decelerate: cubic-bezier(0, 0, 0.2, 1) !important;
  --md-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1) !important;
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1) !important;
  --md-sys-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1) !important;
  --md-sys-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1) !important;
  --md-sys-shape-corner-extra-large: 28px !important;
  --md-sys-shape-corner-extra-small: 4px !important;
  --md-sys-shape-corner-full: 9999px !important;
  --md-sys-shape-corner-large: 16px !important;
  --md-sys-shape-corner-medium: 12px !important;
  --md-sys-shape-corner-none: 0px !important;
  --md-sys-shape-corner-small: 8px !important;
  --md-sys-state-dragged-state-layer-opacity: 0.16 !important;
  --md-sys-state-focus-state-layer-opacity: 0.12 !important;
  --md-sys-state-hover-state-layer-opacity: 0.08 !important;
  --md-sys-state-pressed-state-layer-opacity: 0.12 !important;
  --menu-background: #f2ebf9 !important;
  --menu-border-color: #cbc3d8 !important;
  --menu-radius: 12px !important;
  --metadata-border-color: #cbc3d8 !important;
  --metadata-divider-color: #cbc3d8 !important;
  --metadata-input-background-active: rgba( from #494455 r g b / 0.08 ) !important;
  --metadata-input-font: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #1d1a24 !important;
  --metadata-label-background-active: rgba( from #494455 r g b / 0.08 ) !important;
  --metadata-label-font: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #494455 !important;
  --metadata-label-text-color-hover: #494455 !important;
  --metadata-property-background-active: rgba( from #494455 r g b / 0.08 ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #cbc3d8 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #cbc3d8 !important;
  --modal-background: #fdf7ff !important;
  --nav-collapse-icon-color: #494455 !important;
  --nav-collapse-icon-color-collapsed: #494455 !important;
  --nav-heading-color: #1d1a24 !important;
  --nav-heading-color-collapsed: #494455 !important;
  --nav-heading-color-collapsed-hover: #494455 !important;
  --nav-heading-color-hover: #1d1a24 !important;
  --nav-item-background-active: #e8ddff !important;
  --nav-item-background-hover: rgba( from #494455 r g b / 0.08 ) !important;
  --nav-item-background-selected: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.15) !important;
  --nav-item-color: #494455 !important;
  --nav-item-color-active: #210656 !important;
  --nav-item-color-highlighted: #6b36e2 !important;
  --nav-item-color-hover: #1d1a24 !important;
  --nav-item-color-selected: #1d1a24 !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #494455 !important;
  --nav-tag-color-active: #494455 !important;
  --nav-tag-color-hover: #494455 !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #fdf7ff !important;
  --pdf-page-background: #fdf7ff !important;
  --pdf-sidebar-background: #fdf7ff !important;
  --pill-border-color: #cbc3d8 !important;
  --pill-border-color-hover: #cbc3d8 !important;
  --pill-color: #494455 !important;
  --pill-color-hover: #1d1a24 !important;
  --pill-color-remove: #494455 !important;
  --pill-color-remove-hover: #6b36e2 !important;
  --prompt-background: #fdf7ff !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #fdf7ff 65%, transparent) linear-gradient(#fdf7ff, color-mix(in srgb, #fdf7ff 65%, transparent)) !important;
  --ribbon-background: #f2ebf9 !important;
  --ribbon-background-collapsed: #fdf7ff !important;
  --scrollbar-active-thumb-bg: #7a7487 !important;
  --scrollbar-bg: #7a7487 !important;
  --scrollbar-radius: 16px !important;
  --scrollbar-thumb-bg: #cbc3d8 !important;
  --search-clear-button-color: #494455 !important;
  --search-icon-color: #494455 !important;
  --search-result-background: #fdf7ff !important;
  --secondary: #6b36e2 !important;
  --setting-group-heading-color: #1d1a24 !important;
  --setting-items-background: #f8f1ff !important;
  --setting-items-border-color: #cbc3d8 !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-border-color: #cbc3d8 !important;
  --slider-thumb-border-width: 0px !important;
  --slider-thumb-radius: 9999px !important;
  --slider-track-background: #e8ddff !important;
  --status-bar-background: #f2ebf9 !important;
  --status-bar-border-color: #cbc3d8 !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: #494455 !important;
  --suggestion-background: #fdf7ff !important;
  --tab-background-active: #fdf7ff !important;
  --tab-container-background: #f2ebf9 !important;
  --tab-divider-color: #cbc3d8 !important;
  --tab-outline-color: #cbc3d8 !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 4px 4px 0px 0px !important;
  --tab-switcher-background: #f2ebf9 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2ebf9, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #6b36e2 !important;
  --tab-text-color: #494455 !important;
  --tab-text-color-active: #494455 !important;
  --tab-text-color-focused: #494455 !important;
  --tab-text-color-focused-active: #494455 !important;
  --tab-text-color-focused-active-current: #1d1a24 !important;
  --tab-text-color-focused-highlighted: #6b36e2 !important;
  --table-add-button-border-color: #cbc3d8 !important;
  --table-border-color: #cbc3d8 !important;
  --table-drag-handle-background-active: #6b36e2 !important;
  --table-drag-handle-color: #494455 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #cbc3d8 !important;
  --table-header-color: #1d1a24 !important;
  --table-selection: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.1) !important;
  --table-selection-border-color: #6b36e2 !important;
  --tag-background: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.1) !important;
  --tag-background-hover: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.2) !important;
  --tag-border-color: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.15) !important;
  --tag-border-color-hover: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.15) !important;
  --tag-color: #6b36e2 !important;
  --tag-color-hover: #6b36e2 !important;
  --tertiary: rgb( from #6b36e2 r g b / 0.9 ) !important;
  --text-accent: #6b36e2 !important;
  --text-faint: #494455 !important;
  --text-muted: #494455 !important;
  --text-normal: #1d1a24 !important;
  --text-on-accent: #ffffff !important;
  --text-selection: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.2) !important;
  --textHighlight: rgba( from #494455 r g b / 0.08 ) !important;
  --titleFont: "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #f2ebf9 !important;
  --titlebar-background-focused: #e7e0ee !important;
  --titlebar-border-color: #cbc3d8 !important;
  --titlebar-text-color: #494455 !important;
  --titlebar-text-color-focused: #1d1a24 !important;
  --vault-profile-color: #1d1a24 !important;
  --vault-profile-color-hover: #1d1a24 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 235, 249);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 247, 255);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(203, 195, 216);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 247, 255);
  border-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(203, 195, 216);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(73, 68, 85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 8px;
  color: rgb(107, 54, 226);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 235, 249);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(203, 195, 216);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 235, 249);
  border-left-color: rgb(203, 195, 216);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 247, 255);
  color: rgb(29, 26, 36);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body del {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(73, 68, 85);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(107, 54, 226);
  border-color: rgb(107, 54, 226);
}

html[saved-theme="light"] body p {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(73, 68, 85) none 0px;
  text-decoration-color: rgb(73, 68, 85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(107, 54, 226);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(107, 54, 226) none 0px;
  text-decoration-color: rgb(107, 54, 226);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(107, 54, 226);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(107, 54, 226) none 0px;
  text-decoration-color: rgb(107, 54, 226);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(186, 26, 26);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 26, 26) none 0px;
  text-decoration: underline rgba(107, 54, 226, 0.3);
  text-decoration-color: rgba(107, 54, 226, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body dt {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ol > li {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ul > li {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body table {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.188px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(29, 26, 36);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body figcaption {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(107, 54, 226);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
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
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-left-width: 0px;
  border-right-color: rgb(29, 26, 36);
  border-right-width: 0px;
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(253, 247, 255);
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-left-width: 0px;
  border-right-color: rgb(29, 26, 36);
  border-right-width: 0px;
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: rgb(253, 247, 255);
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: color(srgb 0.286275 0.266667 0.333333 / 0.08);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-left-width: 0px;
  border-right-color: rgb(29, 26, 36);
  border-right-width: 0px;
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: color(srgb 0.286275 0.266667 0.333333 / 0.08);
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: color(srgb 0.286275 0.266667 0.333333 / 0.08);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(122, 116, 135);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(122, 116, 135);
  border-left-width: 1px;
  border-right-color: rgb(122, 116, 135);
  border-right-width: 1px;
  border-top-color: rgb(122, 116, 135);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(107, 54, 226);
}

html[saved-theme="light"] body h1 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(29, 26, 36);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(73, 68, 85);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 235, 249);
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 12px;
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(73, 68, 85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(73, 68, 85);
  stroke: rgb(73, 68, 85);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 235, 249);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body sub {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body summary {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body sup {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(107, 54, 226, 0.1);
  border-bottom-color: rgba(107, 54, 226, 0.15);
  border-left-color: rgba(107, 54, 226, 0.15);
  border-right-color: rgba(107, 54, 226, 0.15);
  border-top-color: rgba(107, 54, 226, 0.15);
  color: rgb(107, 54, 226);
}`,
  },
};
