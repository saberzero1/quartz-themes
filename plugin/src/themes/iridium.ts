import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "iridium",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgb(0, 0, 0) !important;
  --background-modifier-border: rgb(51, 47, 60) !important;
  --background-modifier-border-focus: rgb(80, 74, 94) !important;
  --background-modifier-border-hover: rgb(61, 56, 71) !important;
  --background-modifier-form-field: rgb(29, 27, 34) !important;
  --background-modifier-form-field-hover: rgb(29, 27, 34) !important;
  --background-modifier-hover: rgb(0, 0, 0) !important;
  --background-primary: rgb(29, 27, 34) !important;
  --background-primary-alt: rgb(34, 31, 40) !important;
  --background-secondary: rgb(34, 31, 40) !important;
  --background-secondary-alt: rgb(51, 47, 60) !important;
  --bases-cards-background: rgb(29, 27, 34) !important;
  --bases-cards-cover-background: rgb(34, 31, 40) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)) !important;
  --bases-embed-border-color: rgb(0, 0, 0) !important;
  --bases-embed-border-radius: 7px !important;
  --bases-embed-radius: 7px !important;
  --bases-group-heading-property-color: rgb(179, 179, 179) !important;
  --bases-table-border-color: rgb(0, 0, 0) !important;
  --bases-table-cell-background-active: rgb(29, 27, 34) !important;
  --bases-table-cell-background-disabled: rgb(34, 31, 40) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(80, 74, 94) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-group-background: rgb(34, 31, 40) !important;
  --bases-table-header-background: rgb(29, 27, 34) !important;
  --bases-table-header-background-hover: rgb(0, 0, 0) !important;
  --bases-table-header-color: rgb(217, 217, 217) !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-summary-background: rgb(29, 27, 34) !important;
  --bases-table-summary-background-hover: rgb(0, 0, 0) !important;
  --blockquote-background-color: rgba(138, 92, 245, 0.1) !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --blur-background: color-mix(in srgb, rgb(29, 27, 34) 65%, transparent) linear-gradient(rgb(29, 27, 34), color-mix(in srgb, rgb(29, 27, 34) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: 0;
  --callout-radius: 7px;
  --callout-title-padding: 0.5em 1em;
  --callout-title-weight: 700;
  --canvas-background: rgb(29, 27, 34) !important;
  --canvas-card-label-color: rgb(102, 102, 102) !important;
  --canvas-dot-pattern: rgb(51, 47, 60) !important;
  --caret-color: rgb(217, 217, 217) !important;
  --checkbox-border-color: rgb(138, 92, 245) !important;
  --checkbox-border-color-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h) !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h) !important;
  --checkbox-marker-color: rgb(29, 27, 34) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: rgb(217, 217, 217) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(34, 31, 40) !important;
  --code-border-color: rgb(0, 0, 0) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: rgb(0, 0, 0) !important;
  --code-comment: rgb(102, 102, 102) !important;
  --code-normal: rgb(217, 217, 217) !important;
  --code-punctuation: rgb(179, 179, 179) !important;
  --code-radius: 7px !important;
  --collapse-icon-color: rgb(138, 92, 245) !important;
  --collapse-icon-color-collapsed: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --color-base-00: rgb(29, 27, 34) !important;
  --color-base-05: rgb(32, 29, 37) !important;
  --color-base-10: rgb(34, 31, 40) !important;
  --color-base-100: rgb(215, 212, 221) !important;
  --color-base-20: rgb(36, 34, 43) !important;
  --color-base-25: rgb(39, 36, 46) !important;
  --color-base-30: rgb(51, 47, 60) !important;
  --color-base-35: rgb(61, 56, 71) !important;
  --color-base-40: rgb(80, 74, 94) !important;
  --color-base-50: rgb(97, 90, 114) !important;
  --color-base-60: rgb(148, 141, 165) !important;
  --color-base-70: rgb(175, 169, 188) !important;
  --dark: rgb(217, 217, 217) !important;
  --darkgray: rgb(217, 217, 217) !important;
  --divider-color: rgb(51, 47, 60) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --dropdown-background: rgb(29, 27, 34) !important;
  --dropdown-background-hover: rgb(49, 45, 57) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid rgb(0, 0, 0) !important;
  --embed-border-end: 1px solid rgb(0, 0, 0) !important;
  --embed-border-start: 1px solid rgb(0, 0, 0) !important;
  --embed-border-top: 1px solid rgb(0, 0, 0) !important;
  --embed-padding: 0 !important;
  --file-header-background: rgb(29, 27, 34) !important;
  --file-header-background-focused: rgb(29, 27, 34) !important;
  --file-header-border: 0 !important;
  --flair-background: rgb(29, 27, 34) !important;
  --flair-color: rgb(217, 217, 217) !important;
  --footnote-divider-color: rgb(51, 47, 60) !important;
  --footnote-id-color: rgb(179, 179, 179) !important;
  --footnote-id-color-no-occurrences: rgb(102, 102, 102) !important;
  --footnote-input-background-active: rgb(0, 0, 0) !important;
  --frame-right-space: 81px !important;
  --graph-line: rgb(61, 56, 71) !important;
  --graph-node: rgb(175, 169, 188) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --graph-node-unresolved: rgb(97, 90, 114) !important;
  --graph-text: rgb(217, 217, 217) !important;
  --gray: rgb(179, 179, 179) !important;
  --h1-letter-spacing: 0 !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 1.5em !important;
  --h1-weight: 600 !important;
  --h2-letter-spacing: 0 !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.4em !important;
  --h2-weight: 600 !important;
  --h3-letter-spacing: 0 !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.3em !important;
  --h3-weight: 600 !important;
  --h4-letter-spacing: 0 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.2em !important;
  --h4-weight: 600 !important;
  --h5-letter-spacing: 0 !important;
  --h5-size: 1.1em !important;
  --h5-weight: 600 !important;
  --h6-letter-spacing: 0 !important;
  --heading-formatting: rgb(102, 102, 102) !important;
  --heading-spacing: 1.5rem !important;
  --highlight: rgb(0, 0, 0) !important;
  --hr-color: rgb(0, 0, 0) !important;
  --i-0: rgb(32, 29, 37) !important;
  --i-1: rgb(34, 31, 40) !important;
  --i-2: rgb(39, 36, 46) !important;
  --i-3: rgb(49, 45, 57) !important;
  --i-4: rgb(53, 49, 63) !important;
  --i-5: rgb(58, 54, 69) !important;
  --i-6: rgb(63, 58, 74) !important;
  --i-7: rgb(68, 63, 80) !important;
  --i-8: rgb(73, 67, 86) !important;
  --i-active-line-color: rgb(138, 92, 245) !important;
  --i-active-line-highlight: oklch(from rgb(138, 92, 245) 0.65 c h / 0.1) !important;
  --i-active-line-highlight-inactive: oklch(from oklch(from rgb(138, 92, 245) 0.65 c h / 0.1) l c h / 0.05) !important;
  --i-border-radius: 8px !important;
  --i-bullet-color: rgb(138, 92, 245) !important;
  --i-bullet-color-collapsed: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --i-bullet-color-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h) !important;
  --i-card-layout-border: rgb(58, 54, 69) !important;
  --i-card-radius: 8px !important;
  --i-card-radius-macos: 10px !important;
  --i-dk-border-l: 11% !important;
  --i-dk-custom-layout-s: 12% !important;
  --i-dk-folder-bg-accent: rgb(138, 92, 245) !important;
  --i-dk-folder-name-accent: rgb(138, 92, 245) !important;
  --i-dk-h1-h: 0 !important;
  --i-dk-h6-h: 300 !important;
  --i-dk-heading-accent: rgb(138, 92, 245) !important;
  --i-dk-heading-highlighted-padding: 0 !important;
  --i-dk-l: 12% !important;
  --i-dk-l-multiplier: 1 !important;
  --i-dk-layout-border-l: 8% !important;
  --i-dk-layout-l: 8% !important;
  --i-dk-layout-s: 12% !important;
  --i-dk-s: 12% !important;
  --i-dk-text-l-multiplier: 1 !important;
  --i-editor-border: rgb(0, 0, 0) !important;
  --i-editor-border-hover: hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)) !important;
  --i-h1-size: 1.5em !important;
  --i-h2-size: 1.4em !important;
  --i-h3-size: 1.3em !important;
  --i-h4-size: 1.2em !important;
  --i-h5-size: 1.1em !important;
  --i-h6-size: 1em !important;
  --i-hr-style: solid !important;
  --i-image-border-color: rgb(0, 0, 0) !important;
  --i-image-border-style: solid !important;
  --i-image-border-width: 0 !important;
  --i-image-padding: 0 !important;
  --i-layout-border-color: rgb(68, 63, 80) !important;
  --i-layout-color: rgb(49, 45, 57) !important;
  --i-link-bg-hover: rgb(49, 45, 57) !important;
  --i-link-underline-color: oklch(from oklch(from rgb(138, 92, 245) 0.8 0.05 h) l c h / 0.35) !important;
  --i-link-underline-offset: 0.1em !important;
  --i-link-underline-opacity-multiplier: 1 !important;
  --i-link-underline-style: solid !important;
  --i-lt-custom-layout-s: 25% !important;
  --i-lt-folder-bg-accent: rgb(138, 92, 245) !important;
  --i-lt-folder-name-accent: rgb(138, 92, 245) !important;
  --i-lt-h1-h: 0 !important;
  --i-lt-h6-h: 300 !important;
  --i-lt-heading-accent: rgb(138, 92, 245) !important;
  --i-lt-heading-highlighted-padding: 0 !important;
  --i-lt-layout-border-l: 8% !important;
  --i-lt-layout-l: 12% !important;
  --i-pattern-color: hsl(from rgb(34, 31, 40) h s 15%) !important;
  --i-pattern-dk-l: 3% !important;
  --i-pattern-height: 10px !important;
  --i-pattern-line-width: 1px !important;
  --i-pattern-lt-l: 3% !important;
  --i-pattern-width: 10px !important;
  --i-properties-s: 12% !important;
  --i-s: 12% !important;
  --i-scrollbar-color: rgb(68, 63, 80) !important;
  --i-scrollbar-color-active: rgb(73, 67, 86) !important;
  --i-scrollbar-thumb-size: 4px !important;
  --i-scrollbar-track-size: 9px !important;
  --i-slider-thumb-shadow: 0 0 0 5px rgb(127, 118, 147) !important;
  --i-spacing-below-headings: 0.3rem !important;
  --i-translucent-floating-nav-opacity: 92% !important;
  --icon-color: rgb(217, 217, 217) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --icon-color-focused: rgb(217, 217, 217) !important;
  --icon-color-hover: rgb(217, 217, 217) !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: rgb(0, 0, 0) !important;
  --indentation-guide-color-active: hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(102, 102, 102) !important;
  --input-placeholder-color: rgb(102, 102, 102) !important;
  --input-shadow: inset 0 0 0 1px rgb(51, 47, 60) !important;
  --input-shadow-hover: inset 0 0 0 1px rgb(61, 56, 71) !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h) !important;
  --interactive-hover: rgb(49, 45, 57) !important;
  --interactive-normal: rgb(29, 27, 34) !important;
  --light: rgb(29, 27, 34) !important;
  --lightgray: rgb(34, 31, 40) !important;
  --link-color: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --link-color-hover: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --link-external-color: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --link-external-color-hover: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --link-unresolved-color: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --list-marker-color-collapsed: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --list-marker-color-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h) !important;
  --menu-background: rgb(34, 31, 40) !important;
  --menu-border-color: rgb(61, 56, 71) !important;
  --metadata-border-color: rgb(51, 47, 60) !important;
  --metadata-divider-color: rgb(51, 47, 60) !important;
  --metadata-input-background-active: rgb(0, 0, 0) !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: rgb(217, 217, 217) !important;
  --metadata-label-background-active: rgb(0, 0, 0) !important;
  --metadata-label-text-color: rgb(179, 179, 179) !important;
  --metadata-label-text-color-hover: rgb(179, 179, 179) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: rgb(0, 0, 0) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(80, 74, 94) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(61, 56, 71) !important;
  --modal-background: rgb(29, 27, 34) !important;
  --modal-border-color: rgb(61, 56, 71) !important;
  --nav-collapse-icon-color: rgb(138, 92, 245) !important;
  --nav-collapse-icon-color-collapsed: rgb(102, 102, 102) !important;
  --nav-heading-color: rgb(217, 217, 217) !important;
  --nav-heading-color-collapsed: rgb(102, 102, 102) !important;
  --nav-heading-color-collapsed-hover: rgb(179, 179, 179) !important;
  --nav-heading-color-hover: rgb(217, 217, 217) !important;
  --nav-indentation-guide-color: rgb(53, 49, 63) !important;
  --nav-item-background-active: rgb(0, 0, 0) !important;
  --nav-item-background-hover: rgb(0, 0, 0) !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color: rgb(217, 217, 217) !important;
  --nav-item-color-active: rgb(217, 217, 217) !important;
  --nav-item-color-highlighted: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --nav-item-color-hover: rgb(217, 217, 217) !important;
  --nav-item-color-selected: rgb(217, 217, 217) !important;
  --nav-tag-color: rgb(102, 102, 102) !important;
  --nav-tag-color-active: rgb(179, 179, 179) !important;
  --nav-tag-color-hover: rgb(179, 179, 179) !important;
  --nn-theme-file-selected-bg: rgb(0, 0, 0) !important;
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.25) !important;
  --nn-theme-file-tag-border-radius: 4px !important;
  --nn-theme-file-tag-color: rgb(217, 217, 217) !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: rgb(138, 92, 245) !important;
  --nn-theme-mobile-toolbar-button-icon-color: rgb(138, 92, 245) !important;
  --nn-theme-nav-bg: rgb(29, 27, 34) !important;
  --nn-theme-navitem-chevron-color: rgb(138, 92, 245) !important;
  --nn-theme-navitem-selected-bg: rgb(0, 0, 0) !important;
  --p-spacing: 1.5rem !important;
  --pdf-background: rgb(29, 27, 34) !important;
  --pdf-page-background: rgb(29, 27, 34) !important;
  --pdf-shadow: 0 0 0 1px rgb(51, 47, 60) !important;
  --pdf-sidebar-background: rgb(29, 27, 34) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(51, 47, 60) !important;
  --pill-border-color: rgb(51, 47, 60) !important;
  --pill-border-color-hover: rgb(61, 56, 71) !important;
  --pill-color: rgb(179, 179, 179) !important;
  --pill-color-hover: rgb(217, 217, 217) !important;
  --pill-color-remove: rgb(102, 102, 102) !important;
  --pill-color-remove-hover: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --prompt-background: rgb(29, 27, 34) !important;
  --prompt-border-color: rgb(61, 56, 71) !important;
  --raised-background: color-mix(in srgb, rgb(29, 27, 34) 65%, transparent) linear-gradient(rgb(29, 27, 34), color-mix(in srgb, rgb(29, 27, 34) 65%, transparent)) !important;
  --ribbon-background: rgb(49, 45, 57) !important;
  --ribbon-background-collapsed: rgb(49, 45, 57) !important;
  --ribbon-padding: 8px 0 12px !important;
  --search-clear-button-color: rgb(179, 179, 179) !important;
  --search-icon-color: rgb(179, 179, 179) !important;
  --search-result-background: rgb(29, 27, 34) !important;
  --secondary: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --setting-group-heading-color: rgb(217, 217, 217) !important;
  --setting-items-background: rgb(29, 27, 34) !important;
  --setting-items-border-color: rgb(51, 47, 60) !important;
  --setting-items-padding: 0 0 20px 0 !important;
  --setting-items-radius: 0 !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: rgb(61, 56, 71) !important;
  --slider-track-background: rgb(51, 47, 60) !important;
  --status-bar-background: rgb(32, 29, 37) !important;
  --status-bar-border-color: rgb(51, 47, 60) !important;
  --status-bar-text-color: rgb(217, 217, 217) !important;
  --suggestion-background: rgb(29, 27, 34) !important;
  --tab-background-active: rgb(29, 27, 34) !important;
  --tab-container-background: rgb(32, 29, 37) !important;
  --tab-divider-color: rgb(61, 56, 71) !important;
  --tab-outline-color: rgb(51, 47, 60) !important;
  --tab-switcher-background: rgb(34, 31, 40) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(34, 31, 40), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color: rgb(217, 217, 217) !important;
  --tab-text-color-active: rgb(217, 217, 217) !important;
  --tab-text-color-focused: rgb(217, 217, 217) !important;
  --tab-text-color-focused-active: rgb(217, 217, 217) !important;
  --tab-text-color-focused-active-current: rgb(217, 217, 217) !important;
  --tab-text-color-focused-highlighted: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --table-add-button-border-color: rgb(0, 0, 0) !important;
  --table-border-color: rgb(0, 0, 0) !important;
  --table-column-min-width: 4ch !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-drag-handle-color: rgb(138, 92, 245) !important;
  --table-header-background: rgb(39, 36, 46) !important;
  --table-header-background-hover: rgb(39, 36, 46) !important;
  --table-header-border-color: rgb(0, 0, 0) !important;
  --table-header-color: rgb(217, 217, 217) !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: rgba(138, 92, 245, 0.25) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.25) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(217, 217, 217) !important;
  --tag-color-hover: rgb(217, 217, 217) !important;
  --tag-padding-x: 0.5em !important;
  --tag-radius: 4px !important;
  --tertiary: oklch(from oklch(from rgb(138, 92, 245) 0.8 0.05 h) calc(l + 0.15) c h) !important;
  --text-accent: oklch(from rgb(138, 92, 245) 0.8 0.05 h) !important;
  --text-accent-hover: oklch(from oklch(from rgb(138, 92, 245) 0.8 0.05 h) calc(l + 0.15) c h) !important;
  --text-faint: rgb(102, 102, 102) !important;
  --text-muted: rgb(179, 179, 179) !important;
  --text-normal: rgb(217, 217, 217) !important;
  --text-selection: rgba(138, 92, 245, 0.33) !important;
  --textHighlight: rgb(0, 0, 0) !important;
  --titlebar-background: rgb(32, 29, 37) !important;
  --titlebar-background-focused: rgb(32, 29, 37) !important;
  --titlebar-border-color: rgb(51, 47, 60) !important;
  --titlebar-text-color: rgb(179, 179, 179) !important;
  --titlebar-text-color-focused: rgb(217, 217, 217) !important;
  --toggle-thumb-color: rgb(217, 217, 217) !important;
  --traffic-lights-offset-y: 58px !important;
  --vault-profile-color: rgb(217, 217, 217) !important;
  --vault-profile-color-hover: rgb(217, 217, 217) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 45, 57);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(29, 27, 34);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 27, 34);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 45, 57);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(29, 27, 34);
  color: rgb(217, 217, 217);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(217, 217, 217);
  font-weight: 700;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(217, 217, 217);
  font-weight: 700;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: line-through rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: oklch(0.8 0.05 292.488);
  outline: oklch(0.8 0.05 292.488) none 0px;
  text-decoration: underline oklch(0.8 0.05 292.488 / 0.35);
  text-decoration-color: oklch(0.8 0.05 292.488 / 0.35);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.8 0.05 292.488);
  outline: oklch(0.8 0.05 292.488) none 0px;
  text-decoration: underline oklch(0.8 0.05 292.488 / 0.35);
  text-decoration-color: oklch(0.8 0.05 292.488 / 0.35);
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.8 0.05 292.488);
  outline: oklch(0.8 0.05 292.488) none 0px;
  text-decoration: oklch(0.8 0.05 292.488);
  text-decoration-color: oklch(0.8 0.05 292.488);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(138, 92, 245, 0.1);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(217, 217, 217);
  margin-bottom: 16px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(56, 52, 66);
  border-left-color: rgb(56, 52, 66);
  border-right-color: rgb(56, 52, 66);
  border-top-color: rgb(56, 52, 66);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(56, 52, 66);
  border-left-color: rgb(56, 52, 66);
  border-right-color: rgb(56, 52, 66);
  border-top-color: rgb(56, 52, 66);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(39, 36, 46);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-top: 21px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-top: 21px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(34, 31, 40);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.179083 295.408 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.179083 295.408 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.179083 295.408 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.179083 295.408 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.0000347714 23.8628 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.0000347714 23.8628 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.0000347714 23.8628 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.0000347714 23.8628 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.180995 149.613 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.180995 149.613 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.180995 149.613 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.180995 149.613 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(61, 56, 71);
  border-left-color: rgb(61, 56, 71);
  border-right-color: rgb(61, 56, 71);
  border-top-color: rgb(61, 56, 71);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(70, 65, 83, 0.49);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(61, 56, 71);
  border-left-color: rgb(61, 56, 71);
  border-right-color: rgb(61, 56, 71);
  border-top-color: rgb(61, 56, 71);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 31, 40);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(70, 65, 83, 0.49);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(70, 65, 83, 0.49);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h1 {
  color: oklch(0.8 0.08 292.488);
}

html[saved-theme="dark"] body h2 {
  color: oklch(0.8 0.08 352.488);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h3 {
  color: oklch(0.8 0.08 52.4879);
}

html[saved-theme="dark"] body h4 {
  color: oklch(0.8 0.08 112.488);
}

html[saved-theme="dark"] body h5 {
  color: oklch(0.8 0.08 172.488);
}

html[saved-theme="dark"] body h6 {
  color: oklch(0.8 0.08 232.488);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(70, 65, 83, 0.49);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(32, 29, 37);
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(217, 217, 217);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(217, 217, 217);
  stroke: rgb(217, 217, 217);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.8 0.05 292.488);
  border-left-color: oklch(0.8 0.05 292.488);
  border-right-color: oklch(0.8 0.05 292.488);
  border-top-color: oklch(0.8 0.05 292.488);
  color: oklch(0.8 0.05 292.488);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  margin-bottom: 24px;
  padding-bottom: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.2856 0.264 0.336);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.2856 0.264 0.336);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.2856 0.264 0.336);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.2856 0.264 0.336);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(32, 29, 37);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body abbr {
  color: rgb(217, 217, 217);
  text-decoration: underline dotted rgb(217, 217, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
  padding-left: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body sup {
  color: rgb(217, 217, 217);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgb(0, 0, 0) !important;
  --background-modifier-border: rgb(221, 217, 232) !important;
  --background-modifier-border-focus: rgb(182, 172, 205) !important;
  --background-modifier-border-hover: rgb(207, 201, 222) !important;
  --background-modifier-hover: rgb(0, 0, 0) !important;
  --background-primary-alt: rgb(249, 249, 251) !important;
  --background-secondary: rgb(247, 245, 249) !important;
  --background-secondary-alt: rgb(252, 252, 253) !important;
  --bases-cards-cover-background: rgb(249, 249, 251) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)) !important;
  --bases-embed-border-color: rgb(0, 0, 0) !important;
  --bases-embed-border-radius: 7px !important;
  --bases-embed-radius: 7px !important;
  --bases-table-border-color: rgb(0, 0, 0) !important;
  --bases-table-cell-background-disabled: rgb(249, 249, 251) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(182, 172, 205) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-group-background: rgb(249, 249, 251) !important;
  --bases-table-header-background-hover: rgb(0, 0, 0) !important;
  --bases-table-header-color: #222222 !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-summary-background-hover: rgb(0, 0, 0) !important;
  --blockquote-background-color: rgba(138, 92, 245, 0.1) !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: 0;
  --callout-radius: 7px;
  --callout-title-padding: 0.5em 1em;
  --callout-title-weight: 700;
  --canvas-dot-pattern: rgb(221, 217, 232) !important;
  --checkbox-border-color: rgb(138, 92, 245) !important;
  --checkbox-border-color-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h) !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: #222222 !important;
  --checklist-done-decoration: none !important;
  --code-background: transparent !important;
  --code-border-color: rgb(0, 0, 0) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: rgb(0, 0, 0) !important;
  --code-radius: 7px !important;
  --collapse-icon-color: rgb(138, 92, 245) !important;
  --collapse-icon-color-collapsed: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --color-base-05: rgb(252, 252, 253) !important;
  --color-base-10: rgb(249, 249, 251) !important;
  --color-base-100: rgb(30, 25, 41) !important;
  --color-base-20: rgb(244, 242, 247) !important;
  --color-base-25: rgb(224, 220, 234) !important;
  --color-base-30: rgb(221, 217, 232) !important;
  --color-base-35: rgb(207, 201, 222) !important;
  --color-base-40: rgb(182, 172, 205) !important;
  --color-base-50: rgb(162, 150, 192) !important;
  --color-base-60: rgb(101, 84, 140) !important;
  --color-base-70: rgb(83, 69, 115) !important;
  --divider-color: rgb(221, 217, 232) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --dropdown-background-hover: rgb(238, 236, 244) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid rgb(0, 0, 0) !important;
  --embed-border-end: 1px solid rgb(0, 0, 0) !important;
  --embed-border-start: 1px solid rgb(0, 0, 0) !important;
  --embed-border-top: 1px solid rgb(0, 0, 0) !important;
  --embed-padding: 0 !important;
  --file-header-border: 0 !important;
  --footnote-divider-color: rgb(221, 217, 232) !important;
  --footnote-input-background-active: rgb(0, 0, 0) !important;
  --frame-right-space: 81px !important;
  --graph-line: rgb(207, 201, 222) !important;
  --graph-node: rgb(83, 69, 115) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --graph-node-unresolved: rgb(162, 150, 192) !important;
  --h1-letter-spacing: 0 !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 1.5em !important;
  --h1-weight: 600 !important;
  --h2-letter-spacing: 0 !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.4em !important;
  --h2-weight: 600 !important;
  --h3-letter-spacing: 0 !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.3em !important;
  --h3-weight: 600 !important;
  --h4-letter-spacing: 0 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.2em !important;
  --h4-weight: 600 !important;
  --h5-letter-spacing: 0 !important;
  --h5-size: 1.1em !important;
  --h5-weight: 600 !important;
  --h6-letter-spacing: 0 !important;
  --heading-spacing: 1.5rem !important;
  --highlight: rgb(0, 0, 0) !important;
  --hr-color: rgb(0, 0, 0) !important;
  --i-0: rgb(249, 249, 251) !important;
  --i-1: rgb(247, 245, 249) !important;
  --i-2: rgb(238, 236, 244) !important;
  --i-3: rgb(227, 223, 236) !important;
  --i-4: rgb(221, 217, 232) !important;
  --i-5: rgb(216, 210, 228) !important;
  --i-6: rgb(210, 204, 224) !important;
  --i-7: rgb(205, 198, 221) !important;
  --i-8: rgb(199, 191, 217) !important;
  --i-active-line-color: rgb(138, 92, 245) !important;
  --i-active-line-highlight: oklch(from rgb(138, 92, 245) 0.65 c h / 0.1) !important;
  --i-active-line-highlight-inactive: oklch(from oklch(from rgb(138, 92, 245) 0.65 c h / 0.1) l c h / 0.05) !important;
  --i-border-radius: 8px !important;
  --i-bullet-color: rgb(138, 92, 245) !important;
  --i-bullet-color-collapsed: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --i-bullet-color-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h) !important;
  --i-card-layout-border: rgb(205, 198, 221) !important;
  --i-card-radius: 8px !important;
  --i-card-radius-macos: 10px !important;
  --i-dk-custom-layout-s: 12% !important;
  --i-dk-folder-bg-accent: rgb(138, 92, 245) !important;
  --i-dk-folder-name-accent: rgb(138, 92, 245) !important;
  --i-dk-h1-h: 0 !important;
  --i-dk-h6-h: 300 !important;
  --i-dk-heading-accent: rgb(138, 92, 245) !important;
  --i-dk-heading-highlighted-padding: 0 !important;
  --i-dk-layout-border-l: 8% !important;
  --i-dk-layout-l: 8% !important;
  --i-editor-border: rgb(0, 0, 0) !important;
  --i-editor-border-hover: hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)) !important;
  --i-h1-size: 1.5em !important;
  --i-h2-size: 1.4em !important;
  --i-h3-size: 1.3em !important;
  --i-h4-size: 1.2em !important;
  --i-h5-size: 1.1em !important;
  --i-h6-size: 1em !important;
  --i-hr-style: solid !important;
  --i-image-border-color: rgb(0, 0, 0) !important;
  --i-image-border-style: solid !important;
  --i-image-border-width: 0 !important;
  --i-image-padding: 0 !important;
  --i-layout-border-color: rgb(199, 191, 217) !important;
  --i-layout-color: rgb(221, 217, 232) !important;
  --i-link-bg-hover: rgb(238, 236, 244) !important;
  --i-link-underline-color: oklch(from oklch(from rgb(138, 92, 245) 0.45 0.1 h) l c h / 0.25) !important;
  --i-link-underline-offset: 0.1em !important;
  --i-link-underline-opacity-multiplier: 1 !important;
  --i-link-underline-style: solid !important;
  --i-lt-border-l: 14% !important;
  --i-lt-custom-layout-s: 25% !important;
  --i-lt-folder-bg-accent: rgb(138, 92, 245) !important;
  --i-lt-folder-name-accent: rgb(138, 92, 245) !important;
  --i-lt-h1-h: 0 !important;
  --i-lt-h6-h: 300 !important;
  --i-lt-heading-accent: rgb(138, 92, 245) !important;
  --i-lt-heading-highlighted-padding: 0 !important;
  --i-lt-l-multiplier: 1 !important;
  --i-lt-layout-border-l: 8% !important;
  --i-lt-layout-l: 12% !important;
  --i-lt-layout-s: 25% !important;
  --i-lt-s: 25% !important;
  --i-pattern-color: hsl(from rgb(247, 245, 249) h s 97%) !important;
  --i-pattern-dk-l: 3% !important;
  --i-pattern-height: 10px !important;
  --i-pattern-line-width: 1px !important;
  --i-pattern-lt-l: 3% !important;
  --i-pattern-width: 10px !important;
  --i-properties-s: 88% !important;
  --i-s: 25% !important;
  --i-scrollbar-color: rgb(216, 210, 228) !important;
  --i-scrollbar-color-active: rgb(205, 198, 221) !important;
  --i-scrollbar-thumb-size: 4px !important;
  --i-scrollbar-track-size: 9px !important;
  --i-slider-thumb-shadow: 0 0 0 5px rgb(115, 96, 159) !important;
  --i-spacing-below-headings: 0.3rem !important;
  --i-translucent-floating-nav-opacity: 92% !important;
  --icon-color: #222222 !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --icon-color-hover: #222222 !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: rgb(0, 0, 0) !important;
  --indentation-guide-color-active: hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 600 !important;
  --input-shadow: inset 0 0 0 1px rgb(221, 217, 232) !important;
  --input-shadow-hover: inset 0 0 0 1px rgb(207, 201, 222) !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h) !important;
  --interactive-hover: rgb(238, 236, 244) !important;
  --light: rgb(249, 249, 251) !important;
  --lightgray: rgb(247, 245, 249) !important;
  --link-color: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --link-color-hover: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --link-external-color: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --link-external-color-hover: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --link-unresolved-color: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --list-marker-color-collapsed: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --list-marker-color-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h) !important;
  --menu-background: rgb(247, 245, 249) !important;
  --menu-border-color: rgb(207, 201, 222) !important;
  --metadata-border-color: rgb(221, 217, 232) !important;
  --metadata-divider-color: rgb(221, 217, 232) !important;
  --metadata-input-background-active: rgb(0, 0, 0) !important;
  --metadata-input-height: 28px !important;
  --metadata-label-background-active: rgb(0, 0, 0) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: rgb(0, 0, 0) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(182, 172, 205) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(207, 201, 222) !important;
  --modal-border-color: rgb(207, 201, 222) !important;
  --nav-collapse-icon-color: rgb(138, 92, 245) !important;
  --nav-indentation-guide-color: rgb(221, 217, 232) !important;
  --nav-item-background-active: rgb(0, 0, 0) !important;
  --nav-item-background-hover: rgb(0, 0, 0) !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color: #222222 !important;
  --nav-item-color-highlighted: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --nn-theme-file-selected-bg: rgb(0, 0, 0) !important;
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.2) !important;
  --nn-theme-file-tag-border-radius: 4px !important;
  --nn-theme-file-tag-color: #222222 !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: rgb(138, 92, 245) !important;
  --nn-theme-mobile-toolbar-button-icon-color: rgb(138, 92, 245) !important;
  --nn-theme-nav-bg: #ffffff !important;
  --nn-theme-navitem-chevron-color: rgb(138, 92, 245) !important;
  --nn-theme-navitem-selected-bg: rgb(0, 0, 0) !important;
  --p-spacing: 1.5rem !important;
  --pill-border-color: rgb(221, 217, 232) !important;
  --pill-border-color-hover: rgb(207, 201, 222) !important;
  --pill-color-remove-hover: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --prompt-border-color: rgb(207, 201, 222) !important;
  --ribbon-background: rgb(221, 217, 232) !important;
  --ribbon-background-collapsed: rgb(221, 217, 232) !important;
  --ribbon-padding: 8px 0 12px !important;
  --secondary: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --setting-items-background: #ffffff !important;
  --setting-items-border-color: rgb(221, 217, 232) !important;
  --setting-items-padding: 0 0 20px 0 !important;
  --setting-items-radius: 0 !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: rgb(207, 201, 222) !important;
  --slider-track-background: rgb(221, 217, 232) !important;
  --status-bar-background: rgb(249, 249, 251) !important;
  --status-bar-border-color: rgb(221, 217, 232) !important;
  --status-bar-text-color: #222222 !important;
  --tab-container-background: rgb(249, 249, 251) !important;
  --tab-divider-color: rgb(207, 201, 222) !important;
  --tab-outline-color: rgb(221, 217, 232) !important;
  --tab-switcher-background: rgb(247, 245, 249) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(247, 245, 249), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color: #222222 !important;
  --tab-text-color-active: #222222 !important;
  --tab-text-color-focused: #222222 !important;
  --tab-text-color-focused-active: #222222 !important;
  --tab-text-color-focused-highlighted: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --table-add-button-border-color: rgb(0, 0, 0) !important;
  --table-border-color: rgb(0, 0, 0) !important;
  --table-column-min-width: 4ch !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-drag-handle-color: rgb(138, 92, 245) !important;
  --table-header-background: rgb(238, 236, 244) !important;
  --table-header-background-hover: rgb(238, 236, 244) !important;
  --table-header-border-color: rgb(0, 0, 0) !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: rgba(138, 92, 245, 0.2) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: #222222 !important;
  --tag-color-hover: #222222 !important;
  --tag-padding-x: 0.5em !important;
  --tag-radius: 4px !important;
  --tertiary: oklch(from oklch(from rgb(138, 92, 245) 0.45 0.1 h) calc(l - 0.15) c h) !important;
  --text-accent: oklch(from rgb(138, 92, 245) 0.45 0.1 h) !important;
  --text-accent-hover: oklch(from oklch(from rgb(138, 92, 245) 0.45 0.1 h) calc(l - 0.15) c h) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: rgb(0, 0, 0) !important;
  --titlebar-background: rgb(249, 249, 251) !important;
  --titlebar-background-focused: rgb(249, 249, 251) !important;
  --titlebar-border-color: rgb(221, 217, 232) !important;
  --traffic-lights-offset-y: 58px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(221, 217, 232);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(221, 217, 232);
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-weight: 700;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-weight: 700;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: oklch(0.45 0.1 292.488);
  outline: oklch(0.45 0.1 292.488) none 0px;
  text-decoration: underline oklch(0.45 0.1 292.488 / 0.25);
  text-decoration-color: oklch(0.45 0.1 292.488 / 0.25);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.45 0.1 292.488);
  outline: oklch(0.45 0.1 292.488) none 0px;
  text-decoration: underline oklch(0.45 0.1 292.488 / 0.25);
  text-decoration-color: oklch(0.45 0.1 292.488 / 0.25);
}

html[saved-theme="light"] body a.internal.broken {
  color: oklch(0.45 0.1 292.488);
  outline: oklch(0.45 0.1 292.488) none 0px;
  text-decoration: oklch(0.45 0.1 292.488);
  text-decoration-color: oklch(0.45 0.1 292.488);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgba(138, 92, 245, 0.1);
}`,
    tables: `html[saved-theme="light"] body table {
  margin-bottom: 16px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(216, 210, 228);
  border-left-color: rgb(216, 210, 228);
  border-right-color: rgb(216, 210, 228);
  border-top-color: rgb(216, 210, 228);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(216, 210, 228);
  border-left-color: rgb(216, 210, 228);
  border-right-color: rgb(216, 210, 228);
  border-top-color: rgb(216, 210, 228);
}

html[saved-theme="light"] body tr {
  background-color: rgb(238, 236, 244);
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-top: 21px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-top: 21px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(249, 249, 251);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.221853 288.459 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.221853 288.459 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.221853 288.459 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.221853 288.459 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.0000347714 23.8628 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.0000347714 23.8628 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.0000347714 23.8628 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.0000347714 23.8628 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.19456 148.477 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.19456 148.477 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.19456 148.477 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.19456 148.477 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(207, 201, 222);
  border-left-color: rgb(207, 201, 222);
  border-right-color: rgb(207, 201, 222);
  border-top-color: rgb(207, 201, 222);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(162, 150, 192, 0.18);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(207, 201, 222);
  border-left-color: rgb(207, 201, 222);
  border-right-color: rgb(207, 201, 222);
  border-top-color: rgb(207, 201, 222);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 245, 249);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(162, 150, 192, 0.18);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(162, 150, 192, 0.18);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.2);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body h1 {
  color: oklch(0.48 0.2 292.488);
}

html[saved-theme="light"] body h2 {
  color: oklch(0.48 0.2 352.488);
}

html[saved-theme="light"] body h3 {
  color: oklch(0.48 0.2 52.4879);
}

html[saved-theme="light"] body h4 {
  color: oklch(0.48 0.2 112.488);
}

html[saved-theme="light"] body h5 {
  color: oklch(0.48 0.2 172.488);
}

html[saved-theme="light"] body h6 {
  color: oklch(0.48 0.2 232.488);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(162, 150, 192, 0.18);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(249, 249, 251);
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(34, 34, 34);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: oklch(0.45 0.1 292.488);
  border-left-color: oklch(0.45 0.1 292.488);
  border-right-color: oklch(0.45 0.1 292.488);
  border-top-color: oklch(0.45 0.1 292.488);
  color: oklch(0.45 0.1 292.488);
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
  margin-bottom: 24px;
  padding-bottom: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.7296 0.624 0.976);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.7296 0.624 0.976);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.7296 0.624 0.976);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.7296 0.624 0.976);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(249, 249, 251);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
  padding-left: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0);
}`,
  },
};
