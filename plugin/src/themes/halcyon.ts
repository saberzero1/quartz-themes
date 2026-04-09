import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "halcyon", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 40 !important;
  --accent-l: 70% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: #2f3b54 !important;
  --background-modifier-border: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --background-modifier-border-focus: #6679a4 !important;
  --background-modifier-border-hover: #ffcc66 !important;
  --background-modifier-error: #ef6b73 !important;
  --background-modifier-error-hover: #ef6b73 !important;
  --background-modifier-error-rgb: 239, 107, 115 !important;
  --background-modifier-form-field: #2f3b54 !important;
  --background-modifier-form-field-hover: #2f3b54 !important;
  --background-modifier-hover: #2f3b54 !important;
  --background-modifier-message: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --background-modifier-success: #bae67e !important;
  --background-modifier-success-rgb: 186, 230, 126 !important;
  --background-primary: #1d2433 !important;
  --background-primary-alt: #2f3b54 !important;
  --background-secondary: #171c28 !important;
  --background-secondary-alt: color-mix( in hsl, #2f3b54, #6679a4 ) !important;
  --bases-cards-background: #1d2433 !important;
  --bases-cards-cover-background: #2f3b54 !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #ffcc66 !important;
  --bases-embed-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --bases-table-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --bases-table-cell-background-active: #1d2433 !important;
  --bases-table-cell-background-disabled: #2f3b54 !important;
  --bases-table-cell-background-selected: hsla(40, 100%, 70%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #6679a4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ffcc66 !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: #2f3b54 !important;
  --bases-table-header-background: #1d2433 !important;
  --bases-table-header-background-hover: #2f3b54 !important;
  --bases-table-header-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --bases-table-row-background-hover: #1d2433 !important;
  --bases-table-summary-background: #1d2433 !important;
  --bases-table-summary-background-hover: #2f3b54 !important;
  --blockquote-border-color: #ffcc66 !important;
  --blockquote-color: color-mix( in srgb, #ffd580 75%, #d7dce2 ) !important;
  --blur-background: color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent) linear-gradient(color-mix( in hsl, #1d2433 75%, transparent ), color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent)) !important;
  --bold-color: #ef6b73 !important;
  --button-radius: 0 !important;
  --callout-bug: 239, 107, 115;
  --callout-default: 112, 153, 219;
  --callout-error: 239, 107, 115;
  --callout-example: 195, 166, 255;
  --callout-fail: 239, 107, 115;
  --callout-important: 92, 207, 230;
  --callout-info: 112, 153, 219;
  --callout-padding: 12px 24px;
  --callout-question: 255, 174, 87;
  --callout-radius: 2px;
  --callout-success: 186, 230, 126;
  --callout-summary: 92, 207, 230;
  --callout-tip: 92, 207, 230;
  --callout-todo: 112, 153, 219;
  --callout-warning: 255, 174, 87;
  --canvas-background: #1d2433 !important;
  --canvas-card-label-color: #8695b799 !important;
  --canvas-color-1: 239, 107, 115 !important;
  --canvas-color-2: 255, 174, 87 !important;
  --canvas-color-3: 255, 204, 102 !important;
  --canvas-color-4: 186, 230, 126 !important;
  --canvas-color-5: 92, 207, 230 !important;
  --canvas-color-6: 195, 166, 255 !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: color-mix( in hsl, #2f3b54, #6679a4 ) !important;
  --caret-color: #d7dce2 !important;
  --checkbox-border-color: #c3a6ff !important;
  --checkbox-border-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc ) !important;
  --checkbox-color: #c3a6ff !important;
  --checkbox-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc ) !important;
  --checkbox-marker-color: #1d2433 !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #171c28 !important;
  --code-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --code-bracket-background: #2f3b54 !important;
  --code-comment: #8695b799 !important;
  --code-function: #ffd580 !important;
  --code-important: #ef6b73 !important;
  --code-keyword: #c3a6ff !important;
  --code-normal: #5ccfe6 !important;
  --code-operator: #ffae57 !important;
  --code-property: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --code-punctuation: #c3a6ff !important;
  --code-radius: 2px !important;
  --code-string: #bae67e !important;
  --code-tag: #a2aabc !important;
  --code-value: #c3a6ff !important;
  --collapse-icon-color: #8695b799 !important;
  --collapse-icon-color-collapsed: #ffcc66 !important;
  --color-accent: hsl(40, 100%, 70%) !important;
  --color-accent-1: hsl(37, 102%, 80.5%) !important;
  --color-accent-2: hsl(35, 105%, 90.3%) !important;
  --color-accent-hsl: 40, 100%, 70% !important;
  --color-base-00: #171c28 !important;
  --color-base-05: color-mix( in hsl, #171c28, #1d2433 ) !important;
  --color-base-10: #1d2433 !important;
  --color-base-100: #d7dce2 !important;
  --color-base-20: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --color-base-25: #2f3b54 !important;
  --color-base-30: color-mix( in hsl, #2f3b54, #6679a4 ) !important;
  --color-base-35: #6679a4 !important;
  --color-base-40: color-mix( in hsl, #6679a4, #8695b7 ) !important;
  --color-base-50: #8695b7 !important;
  --color-base-60: #a2aabc !important;
  --color-base-70: color-mix( in hsl, #d7dce2, #a2aabc ) !important;
  --color-blue: #7099db !important;
  --color-blue-rgb: 112, 153, 219 !important;
  --color-cyan: #5ccfe6 !important;
  --color-cyan-rgb: 92, 207, 230 !important;
  --color-green: #bae67e !important;
  --color-green-rgb: 186, 230, 126 !important;
  --color-orange: #ffae57 !important;
  --color-orange-rgb: 255, 174, 87 !important;
  --color-pink: #f9cff2 !important;
  --color-pink-rgb: 249, 207, 242 !important;
  --color-purple: #c3a6ff !important;
  --color-purple-rgb: 195, 166, 255 !important;
  --color-red: #ef6b73 !important;
  --color-red-rgb: 239, 107, 115 !important;
  --color-yellow: #ffd580 !important;
  --color-yellow-rgb: 255, 204, 102 !important;
  --dark: #d7dce2 !important;
  --darkgray: #d7dce2 !important;
  --divider-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --divider-color-hover: #ffcc66 !important;
  --drag-ghost-background: #2f3b54 !important;
  --drag-ghost-text-color: #ffcc66 !important;
  --dropdown-background: color-mix( in hsl, #1d2433 75%, transparent ) !important;
  --dropdown-background-hover: #1d2433 !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 ), inset 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --embed-border-start: 2px solid #ffcc66 !important;
  --file-header-background: #1d2433 !important;
  --file-header-background-focused: #1d2433 !important;
  --file-line-width: 50rem !important;
  --flair-background: color-mix( in hsl, #1d2433 75%, transparent ) !important;
  --flair-color: #d7dce2 !important;
  --footnote-divider-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --footnote-id-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --footnote-id-color-no-occurrences: #8695b799 !important;
  --footnote-input-background-active: #2f3b54 !important;
  --footnote-radius: 2px !important;
  --graph-line: #2f3b54 !important;
  --graph-node: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --graph-node-attachment: #ffd580 !important;
  --graph-node-focused: #ffcc66 !important;
  --graph-node-tag: #c3a6ff !important;
  --graph-node-unresolved: #ef6b73 !important;
  --graph-text: #d7dce2 !important;
  --gray: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --h1-color: #bae67e !important;
  --h2-color: #bae67e !important;
  --h2-weight: 675 !important;
  --h3-color: #bae67e !important;
  --h3-weight: 650 !important;
  --h4-color: #bae67e !important;
  --h4-weight: 625 !important;
  --h5-color: #bae67e !important;
  --h5-weight: 600 !important;
  --h6-color: #bae67e !important;
  --h6-weight: 575 !important;
  --halcyon-accent: #ffcc66 !important;
  --halcyon-accent-h: 40 !important;
  --halcyon-accent-hover: #ffd580 !important;
  --halcyon-accent-l: 70% !important;
  --halcyon-accent-s: 100% !important;
  --halcyon-base-blue-01: #171c28 !important;
  --halcyon-base-blue-01-02-mix: color-mix( in hsl, #171c28, #1d2433 ) !important;
  --halcyon-base-blue-02: #1d2433 !important;
  --halcyon-base-blue-02-03-mix: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --halcyon-base-blue-03: #2f3b54 !important;
  --halcyon-base-blue-03-04-mix: color-mix( in hsl, #2f3b54, #6679a4 ) !important;
  --halcyon-base-blue-03-rgb: 47, 59, 84 !important;
  --halcyon-base-blue-04: #6679a4 !important;
  --halcyon-base-blue-04-05-mix: color-mix( in hsl, #6679a4, #8695b7 ) !important;
  --halcyon-base-blue-05: #8695b7 !important;
  --halcyon-base-grey-dark: #a2aabc !important;
  --halcyon-base-grey-light: #d7dce2 !important;
  --halcyon-base-grey-mix: color-mix( in hsl, #d7dce2, #a2aabc ) !important;
  --halcyon-base-grey-scroll: #3f495e !important;
  --halcyon-base-grey-scroll-hover: #5c6782 !important;
  --halcyon-base-grey-tab: #71777f !important;
  --halcyon-base-grey-token: #586582 !important;
  --halcyon-code-error: #ef6b73 !important;
  --halcyon-code-function: #ffd580 !important;
  --halcyon-code-keyword: #c3a6ff !important;
  --halcyon-code-operator: #ffae57 !important;
  --halcyon-code-variable: #a2aabc !important;
  --halcyon-palette-blue: #7099db !important;
  --halcyon-palette-cyan: #5ccfe6 !important;
  --halcyon-palette-cyan-hover: color-mix( in hsl, #5ccfe6, #a2aabc ) !important;
  --halcyon-palette-lilac: #c3a6ff !important;
  --halcyon-palette-lilac-hover: color-mix( in hsl, #c3a6ff, #a2aabc ) !important;
  --halcyon-palette-lime: #bae67e !important;
  --halcyon-palette-orange: #ffae57 !important;
  --halcyon-palette-pink: #f9cff2 !important;
  --halcyon-palette-salmon: #ef6b73 !important;
  --halcyon-palette-yellow: #ffd580 !important;
  --halcyon-text-muted: #8695b799 !important;
  --halcyon-text-normal: #d7dce2 !important;
  --heading-formatting: #8695b799 !important;
  --highlight: rgb(47, 59, 84) !important;
  --hr-color: color-mix( in hsl, #8695b799, color-mix( in hsl, #1d2433, #2f3b54 ) ) !important;
  --icon-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --icon-color-active: #ffcc66 !important;
  --icon-color-focused: #ffcc66 !important;
  --icon-color-hover: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --icon-stroke: 2px !important;
  --inline-title-color: #bae67e !important;
  --input-date-separator: #8695b799 !important;
  --input-placeholder-color: #8695b799 !important;
  --input-radius: 0 !important;
  --interactive-accent: #ffcc66 !important;
  --interactive-accent-hover: color-mix( in hsl, #ffcc66 75%, transparent ) !important;
  --interactive-accent-hsl: 40, 100%, 70% !important;
  --interactive-hover: #1d2433 !important;
  --interactive-normal: color-mix( in hsl, #1d2433 75%, transparent ) !important;
  --italic-color: #ef6b73 !important;
  --light: #1d2433 !important;
  --lightgray: #171c28 !important;
  --link-color: #c3a6ff !important;
  --link-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc ) !important;
  --link-external-color: #c3a6ff !important;
  --link-external-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc ) !important;
  --link-unresolved-color: #c3a6ff !important;
  --link-unresolved-decoration-color: #c3a6ff !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-marker-color: #c3a6ff !important;
  --list-marker-color-collapsed: #bae67e !important;
  --list-marker-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc ) !important;
  --menu-background: #171c28 !important;
  --menu-border-color: #ffcc66 !important;
  --menu-radius: 4px !important;
  --metadata-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --metadata-divider-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --metadata-input-background-active: #2f3b54 !important;
  --metadata-input-text-color: #d7dce2 !important;
  --metadata-label-background-active: #2f3b54 !important;
  --metadata-label-text-color: #5ccfe6 !important;
  --metadata-label-text-color-hover: color-mix( in hsl, #5ccfe6, #a2aabc ) !important;
  --metadata-property-background-active: #2f3b54 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #6679a4 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #ffcc66 !important;
  --modal-background: #1d2433 !important;
  --modal-border-color: #1d2433 !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #8695b799 !important;
  --nav-collapse-icon-color-collapsed: #8695b799 !important;
  --nav-heading-color: #d7dce2 !important;
  --nav-heading-color-collapsed: #8695b799 !important;
  --nav-heading-color-collapsed-hover: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --nav-heading-color-hover: #d7dce2 !important;
  --nav-item-background-active: #2f3b54 !important;
  --nav-item-background-hover: #2f3b54 !important;
  --nav-item-background-selected: #2f3b54 !important;
  --nav-item-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --nav-item-color-active: #d7dce2 !important;
  --nav-item-color-highlighted: #ffcc66 !important;
  --nav-item-color-hover: #d7dce2 !important;
  --nav-item-color-selected: #ffae57 !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: #8695b799 !important;
  --nav-tag-color-active: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --nav-tag-color-hover: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --nav-tag-radius: 2px !important;
  --pdf-background: #1d2433 !important;
  --pdf-page-background: #1d2433 !important;
  --pdf-shadow: 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --pdf-sidebar-background: #1d2433 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --pill-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --pill-border-color-hover: #ffcc66 !important;
  --pill-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --pill-color-hover: #d7dce2 !important;
  --pill-color-remove: #8695b799 !important;
  --pill-color-remove-hover: #ffcc66 !important;
  --prompt-background: #1d2433 !important;
  --prompt-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --radius-l: 6px !important;
  --radius-m: 4px !important;
  --radius-s: 2px !important;
  --radius-xl: 8px !important;
  --raised-background: color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent) linear-gradient(color-mix( in hsl, #1d2433 75%, transparent ), color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent)) !important;
  --ribbon-background: #171c28 !important;
  --ribbon-background-collapsed: #171c28 !important;
  --scrollbar-radius: 6px !important;
  --search-clear-button-color: #ef6b73 !important;
  --search-icon-color: #ffcc66 !important;
  --search-result-background: #1d2433 !important;
  --secondary: #ffcc66 !important;
  --setting-group-heading-color: #d7dce2 !important;
  --setting-items-background: #2f3b54 !important;
  --setting-items-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --setting-items-radius: 6px !important;
  --slider-thumb-border-color: #ffcc66 !important;
  --slider-track-background: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --status-bar-background: #171c28 !important;
  --status-bar-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --suggestion-background: #1d2433 !important;
  --sync-avatar-color-1: #ef6b73 !important;
  --sync-avatar-color-2: #ffae57 !important;
  --sync-avatar-color-3: #ffd580 !important;
  --sync-avatar-color-4: #bae67e !important;
  --sync-avatar-color-5: #5ccfe6 !important;
  --sync-avatar-color-6: #7099db !important;
  --sync-avatar-color-7: #c3a6ff !important;
  --sync-avatar-color-8: #f9cff2 !important;
  --tab-background-active: #1d2433 !important;
  --tab-container-background: #171c28 !important;
  --tab-curve: 0px !important;
  --tab-divider-color: #171c28 !important;
  --tab-outline-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --tab-outline-width: 0px !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #171c28 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #171c28, transparent) !important;
  --tab-switcher-preview-radius: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40, 100%, 70%) !important;
  --tab-text-color: #8695b799 !important;
  --tab-text-color-active: #ffcc66 !important;
  --tab-text-color-focused: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --tab-text-color-focused-active: #ffcc66 !important;
  --tab-text-color-focused-active-current: #ffcc66 !important;
  --tab-text-color-focused-highlighted: #ffcc66 !important;
  --table-add-button-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --table-background: #1d2433 !important;
  --table-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --table-column-alt-background: #1d2433 !important;
  --table-drag-handle-background-active: #ffcc66 !important;
  --table-drag-handle-color: #8695b799 !important;
  --table-drag-handle-color-active: #2f3b54 !important;
  --table-header-background: #1d2433 !important;
  --table-header-background-hover: #1d2433 !important;
  --table-header-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --table-header-color: #d7dce2 !important;
  --table-header-size: larger !important;
  --table-row-alt-background: #1d2433 !important;
  --table-row-alt-background-hover: #1d2433 !important;
  --table-row-background-hover: #1d2433 !important;
  --table-selection: hsla(40, 100%, 70%, 0.1) !important;
  --table-selection-border-color: #ffcc66 !important;
  --tag-background: color-mix(in hsl, #5ccfe6 25%, transparent) !important;
  --tag-background-hover: color-mix( in hsl, #5ccfe6 25%, transparent ) !important;
  --tag-border-color: hsla(40, 100%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(40, 100%, 70%, 0.15) !important;
  --tag-color: #5ccfe6 !important;
  --tag-color-hover: #5ccfe6 !important;
  --tag-decoration-hover: underline !important;
  --tertiary: #ffd580 !important;
  --text-accent: #ffcc66 !important;
  --text-accent-hover: #ffd580 !important;
  --text-error: #ef6b73 !important;
  --text-faint: #8695b799 !important;
  --text-highlight-bg: rgb(47, 59, 84) !important;
  --text-muted: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --text-normal: #d7dce2 !important;
  --text-on-accent: #2f3b54 !important;
  --text-selection: color-mix( in hsl, color-mix( in hsl, #2f3b54, #6679a4 ) 35%, transparent ) !important;
  --text-success: #bae67e !important;
  --text-warning: #ef6b73 !important;
  --textHighlight: rgb(47, 59, 84) !important;
  --titlebar-background: #171c28 !important;
  --titlebar-background-focused: #171c28 !important;
  --titlebar-border-color: color-mix( in hsl, #1d2433, #2f3b54 ) !important;
  --titlebar-text-color: color-mix( in hsl, #8695b799, #d7dce2 ) !important;
  --titlebar-text-color-focused: #d7dce2 !important;
  --toggle-thumb-color: #2f3b54 !important;
  --vault-profile-color: #d7dce2 !important;
  --vault-profile-color-hover: #d7dce2 !important;
  --vault-profile-font-size: 1em !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 28, 40);
  color: rgb(215, 220, 226);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(29, 36, 51);
  color: rgb(215, 220, 226);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(29, 36, 51);
}

html body .bases-table thead th {
  border-color: color(srgb 0.149206 0.186251 0.26452);
  color: rgb(215, 220, 226);
}

html body .canvas-node {
  border-color: rgb(215, 220, 226);
}

html body .canvas-node-content {
  color: rgb(215, 220, 226);
}

html body .canvas-node-file {
  color: rgb(215, 220, 226);
}

html body .canvas-node-group {
  border-color: rgb(215, 220, 226);
}

html body .canvas-sidebar {
  background-color: rgb(23, 28, 40);
  border-color: rgb(215, 220, 226);
}

html body .note-properties {
  border-color: color(srgb 0.149206 0.186251 0.26452);
}

html body .note-properties-key {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .note-properties-row {
  border-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .note-properties-tags {
  background-color: color(srgb 0.360784 0.811765 0.901961 / 0.25);
  color: rgb(92, 207, 230);
}

html body .note-properties-value {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 28, 40);
  color: rgb(215, 220, 226);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 28, 40);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  color: rgb(215, 220, 226);
}

html body div#quartz-root {
  background-color: rgb(29, 36, 51);
  color: rgb(215, 220, 226);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(239, 107, 115);
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .page article p > em, html em {
  color: rgb(239, 107, 115);
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .page article p > i, html i {
  color: rgb(239, 107, 115);
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .page article p > strong, html strong {
  color: rgb(239, 107, 115);
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .text-highlight {
  background-color: rgb(47, 59, 84);
  color: rgb(215, 220, 226);
  outline: rgb(215, 220, 226) none 0px;
  text-decoration-color: rgb(215, 220, 226);
}

html body del {
  color: rgb(215, 220, 226);
  outline: rgb(215, 220, 226) none 0px;
  text-decoration-color: rgb(215, 220, 226);
}

html body h1.article-title {
  color: rgb(215, 220, 226);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(195, 166, 255);
  border-radius: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(195, 166, 255);
  border-color: rgb(195, 166, 255);
}

html body p {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  outline: color(srgb 0.729403 0.762969 0.817656 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    links: `html body a.external, html footer a {
  color: rgb(195, 166, 255);
  outline: rgb(195, 166, 255) none 0px;
  text-decoration-color: rgb(195, 166, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(195, 166, 255);
  outline: rgb(195, 166, 255) none 0px;
  text-decoration-color: rgb(195, 166, 255);
}

html body a.internal.broken {
  color: rgb(195, 166, 255);
  outline: rgb(195, 166, 255) none 0px;
  text-decoration: underline dashed rgb(195, 166, 255);
  text-decoration-color: rgb(195, 166, 255);
  text-decoration-style: dashed;
}`,
    lists: `html body dd {
  color: rgb(215, 220, 226);
}

html body dt {
  color: rgb(215, 220, 226);
}

html body ol > li {
  color: rgb(215, 220, 226);
}

html body ol.overflow {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body ul > li {
  color: rgb(215, 220, 226);
}

html body ul.overflow {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(134, 149, 183, 0.6);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body table {
  color: rgb(215, 220, 226);
  width: 767px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(29, 36, 51);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(29, 36, 51);
}

html body td {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: rgb(215, 220, 226);
}

html body th {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: rgb(215, 220, 226);
}

html body tr {
  background-color: rgb(29, 36, 51);
}`,
    code: `html body code {
  border-bottom-color: rgb(92, 207, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(92, 207, 230);
  border-right-color: rgb(92, 207, 230);
  border-top-color: rgb(92, 207, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(92, 207, 230);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 213, 128);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 213, 128);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body pre:has(> code) {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body figcaption {
  color: rgb(215, 220, 226);
}

html body figure {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body img {
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
}

html body video {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(47, 59, 84);
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .footnotes {
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body .transclude {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body .transclude-inner {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(195, 166, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(195, 166, 255);
  border-right-color: rgb(195, 166, 255);
  border-top-color: rgb(195, 166, 255);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
  color: rgb(112, 153, 219);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(112, 153, 219);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 92, 207, 230;
  background-color: rgba(92, 207, 230, 0.1);
  border-bottom-color: rgba(92, 207, 230, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(92, 207, 230, 0.25);
  border-right-color: rgba(92, 207, 230, 0.25);
  border-top-color: rgba(92, 207, 230, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="example"] {
  --callout-color: 195, 166, 255;
  background-color: rgba(195, 166, 255, 0.1);
  border-bottom-color: rgba(195, 166, 255, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(195, 166, 255, 0.25);
  border-right-color: rgba(195, 166, 255, 0.25);
  border-top-color: rgba(195, 166, 255, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="info"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="note"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="question"] {
  --callout-color: 255, 174, 87;
  background-color: rgba(255, 174, 87, 0.1);
  border-bottom-color: rgba(255, 174, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(255, 174, 87, 0.25);
  border-right-color: rgba(255, 174, 87, 0.25);
  border-top-color: rgba(255, 174, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="success"] {
  --callout-color: 186, 230, 126;
  background-color: rgba(186, 230, 126, 0.1);
  border-bottom-color: rgba(186, 230, 126, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(186, 230, 126, 0.25);
  border-right-color: rgba(186, 230, 126, 0.25);
  border-top-color: rgba(186, 230, 126, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 92, 207, 230;
  background-color: rgba(92, 207, 230, 0.1);
  border-bottom-color: rgba(92, 207, 230, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(92, 207, 230, 0.25);
  border-right-color: rgba(92, 207, 230, 0.25);
  border-top-color: rgba(92, 207, 230, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 255, 174, 87;
  background-color: rgba(255, 174, 87, 0.1);
  border-bottom-color: rgba(255, 174, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(255, 174, 87, 0.25);
  border-right-color: rgba(255, 174, 87, 0.25);
  border-top-color: rgba(255, 174, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(29, 36, 51);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space {
  background-color: rgb(29, 36, 51);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(215, 220, 226);
  outline: rgb(215, 220, 226) none 0px;
  text-decoration-color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(215, 220, 226);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(47, 59, 84);
  color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 28, 40);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(255, 204, 102);
  border-top-color: rgb(255, 204, 102);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(47, 59, 84);
  border-bottom-color: rgb(215, 220, 226);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(47, 59, 84);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.360784 0.811765 0.901961 / 0.25);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(92, 207, 230);
}

html body h1 {
  color: rgb(186, 230, 126);
}

html body h2 {
  color: rgb(186, 230, 126);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(186, 230, 126);
}

html body h3 {
  color: rgb(186, 230, 126);
}

html body h4 {
  color: rgb(186, 230, 126);
}

html body h5 {
  color: rgb(186, 230, 126);
}

html body h6 {
  color: rgb(186, 230, 126);
}

html body hr {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-right: 24px;
}

html body ::-webkit-scrollbar {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}

html body ::-webkit-scrollbar-track {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(215, 220, 226);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    footer: `html body footer {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 4px;
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body footer ul li a {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(215, 220, 226);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body li.section-li > .section .meta {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body ul.section-ul {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .darkmode svg {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  stroke: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .breadcrumb-element p {
  color: rgba(134, 149, 183, 0.6);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body .metadata {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .metadata-properties {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .navigation-progress {
  background-color: rgb(23, 28, 40);
}

html body .page-header h2.page-title {
  color: rgb(215, 220, 226);
}

html body abbr {
  color: rgb(215, 220, 226);
}

html body details {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body input[type=text] {
  border-bottom-color: rgb(92, 207, 230);
  border-left-color: rgb(92, 207, 230);
  border-right-color: rgb(92, 207, 230);
  border-top-color: rgb(92, 207, 230);
  color: rgb(92, 207, 230);
}

html body kbd {
  background-color: rgb(23, 28, 40);
  border-bottom-color: rgb(92, 207, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(92, 207, 230);
  border-right-color: rgb(92, 207, 230);
  border-top-color: rgb(92, 207, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(92, 207, 230);
}

html body progress {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body sub {
  color: rgb(215, 220, 226);
}

html body summary {
  color: rgb(215, 220, 226);
}

html body sup {
  color: rgb(215, 220, 226);
}

html body ul.tags > li {
  background-color: color(srgb 0.360784 0.811765 0.901961 / 0.25);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  color: rgb(92, 207, 230);
}`,
  },
  light: {},
};
