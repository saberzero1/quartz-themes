import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vauxhall.white",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --background-modifier-border-focus: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 80%,
    hsl(220, 20%, 80%)
  ) !important;
  --background-modifier-border-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --background-modifier-error: #e3365e !important;
  --background-modifier-error-hover: #e3365e !important;
  --background-modifier-form-field: color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000) !important;
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000) !important;
  --background-modifier-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --background-modifier-success: #52eea3 !important;
  --background-primary: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --background-primary-alt: color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000) !important;
  --background-secondary: color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000) !important;
  --background-secondary-alt: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-cards-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --bases-cards-cover-background: color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000) !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-embed-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-group-heading-property-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-table-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-table-cell-background-active: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --bases-table-cell-background-disabled: color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 80%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-table-group-background: color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000) !important;
  --bases-table-header-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --bases-table-header-background-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-table-header-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --bases-table-summary-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --bases-table-summary-background-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --black: #000 !important;
  --blue: #437cf3 !important;
  --blue-violet: #6f51f4 !important;
  --blur-background: color-mix(in srgb, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) 65%, transparent) linear-gradient(color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ), color-mix(in srgb, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) 65%, transparent)) !important;
  --canvas-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --canvas-card-label-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --canvas-dot-pattern: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --caret-color: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --checkbox-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --checkbox-border-color-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --checkbox-marker-color: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --checklist-done-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --code-background: color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000) !important;
  --code-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --code-bracket-background: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --code-comment: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --code-function: #ffd85e !important;
  --code-important: #fa9f50 !important;
  --code-keyword: #e54f9b !important;
  --code-normal: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --code-operator: #e3365e !important;
  --code-property: #43cfea !important;
  --code-punctuation: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --code-string: #52eea3 !important;
  --code-tag: #e3365e !important;
  --code-value: #9446f8 !important;
  --collapse-icon-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --color-base-00: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --color-base-05: color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000) !important;
  --color-base-10: color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000) !important;
  --color-base-100: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 0%,
    hsl(220, 20%, 80%)
  ) !important;
  --color-base-20: color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000) !important;
  --color-base-25: color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000) !important;
  --color-base-30: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --color-base-35: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --color-base-40: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 80%,
    hsl(220, 20%, 80%)
  ) !important;
  --color-base-50: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --color-base-60: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --color-base-70: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --color-blue: #437cf3 !important;
  --color-cyan: #43cfea !important;
  --color-green: #52eea3 !important;
  --color-orange: #fa9f50 !important;
  --color-pink: #e54f9b !important;
  --color-purple: #9446f8 !important;
  --color-red: #e3365e !important;
  --color-yellow: #ffd85e !important;
  --cool-cyan: #43cfea !important;
  --cool-gray: #515768 !important;
  --cyan: #51e1e9 !important;
  --dark: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --darkgray: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --divider-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --dropdown-background: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --dropdown-background-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ), inset 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --file-header-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --file-header-background-focused: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --flair-background: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --flair-color: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --footnote-divider-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --footnote-id-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --footnote-input-background-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --graph-line: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --graph-node: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --graph-node-attachment: #ffd85e !important;
  --graph-node-tag: #52eea3 !important;
  --graph-node-unresolved: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --graph-text: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --gray: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --h1-color: #43cfea !important;
  --h2-color: #54b6f8 !important;
  --h3-color: #437cf3 !important;
  --h4-color: #6f51f4 !important;
  --h5-color: #9446f8 !important;
  --h6-color: #c952ed !important;
  --heading-formatting: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --highlight: color-mix(in srgb, #43cfea 25%, transparent) !important;
  --hot-red: #e3365e !important;
  --hr-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --hue-bg: 228 !important;
  --hue-fg: 220 !important;
  --icon-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --icon-color-focused: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --icon-color-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --indentation-guide-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --indentation-guide-color-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --inline-title-color: #43cfea !important;
  --input-date-separator: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --input-placeholder-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --interactive-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --interactive-normal: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --light: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --light-blue: #54b6f8 !important;
  --lightgray: color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000) !important;
  --list-marker-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --list-marker-color-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --lum: 11% !important;
  --magenta: #e54f9b !important;
  --menu-background: color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000) !important;
  --menu-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-divider-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-input-background-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-input-text-color: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --metadata-label-background-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-label-text-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-label-text-color-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-property-background-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 80%,
    hsl(220, 20%, 80%)
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --mint: #52eea3 !important;
  --modal-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --modal-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 80%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-collapse-icon-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-collapse-icon-color-collapsed: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-heading-color: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-heading-color-collapsed-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-heading-color-hover: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --nav-indentation-guide-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-item-background-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-item-background-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-item-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-item-color-active: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --nav-item-color-hover: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --nav-item-color-selected: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --nav-tag-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-tag-color-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --nav-tag-color-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --pdf-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --pdf-page-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --pdf-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --pdf-sidebar-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --pill-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --pill-border-color-hover: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --pill-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --pill-color-hover: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --pill-color-remove: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --prompt-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --prompt-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 80%,
    hsl(220, 20%, 80%)
  ) !important;
  --purple: #c952ed !important;
  --raised-background: color-mix(in srgb, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) 65%, transparent) linear-gradient(color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ), color-mix(in srgb, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) 65%, transparent)) !important;
  --ribbon-background: color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000) !important;
  --ribbon-background-collapsed: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --sat-bg: 20% !important;
  --sat-fg: 20% !important;
  --search-clear-button-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --search-icon-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --search-result-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --setting-group-heading-color: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --setting-items-background: color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000) !important;
  --setting-items-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --slider-thumb-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --slider-track-background: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --status-bar-background: color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000) !important;
  --status-bar-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --status-bar-text-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --suggestion-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --sync-avatar-color-1: #e3365e !important;
  --sync-avatar-color-2: #fa9f50 !important;
  --sync-avatar-color-3: #ffd85e !important;
  --sync-avatar-color-4: #52eea3 !important;
  --sync-avatar-color-5: #43cfea !important;
  --sync-avatar-color-6: #437cf3 !important;
  --sync-avatar-color-7: #9446f8 !important;
  --sync-avatar-color-8: #e54f9b !important;
  --tab-background-active: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --tab-container-background: color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000) !important;
  --tab-divider-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ) !important;
  --tab-outline-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --tab-switcher-background: color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000), transparent) !important;
  --tab-text-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --tab-text-color-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --tab-text-color-focused: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --tab-text-color-focused-active: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --tab-text-color-focused-active-current: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --table-add-button-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --table-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --table-drag-handle-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --table-header-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --table-header-color: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --text-error: #e3365e !important;
  --text-faint: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ) !important;
  --text-highlight-bg: color-mix(in srgb, #43cfea 25%, transparent) !important;
  --text-highlight-bg-active: color-mix(
    in srgb,
    #43cfea 25%,
    transparent
  ) !important;
  --text-muted: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --text-normal: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --text-success: #52eea3 !important;
  --text-warning: #fa9f50 !important;
  --textHighlight: color-mix(in srgb, #43cfea 25%, transparent) !important;
  --titlebar-background: color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000) !important;
  --titlebar-background-focused: color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000) !important;
  --titlebar-border-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) !important;
  --titlebar-text-color: color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ) !important;
  --titlebar-text-color-focused: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --vault-profile-color: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --vault-profile-color-hover: color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff) !important;
  --vauxhall-bg: hsl(228, 20%, 11%) !important;
  --vauxhall-fg: hsl(220, 20%, 80%) !important;
  --violet: #9446f8 !important;
  --white: #fff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: color(srgb 0.0352 0.03872 0.0528);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: color(srgb 0.022 0.0242 0.033);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: color(srgb 0.0352 0.03872 0.0528);
  border-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.1552 0.165787 0.2028);
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: color(srgb 0.0352 0.03872 0.0528);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: color(srgb 0.0352 0.03872 0.0528);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: color(srgb 0.022 0.0242 0.033);
  color: color(srgb 0.928 0.936 0.952);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.262745 0.811765 0.917647 / 0.25);
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body h1.article-title {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.3568 0.372747 0.4152);
}

html[saved-theme="dark"] body p {
  color: color(srgb 0.5584 0.579707 0.6276);
  outline: color(srgb 0.5584 0.579707 0.6276) none 0px;
  text-decoration-color: color(srgb 0.5584 0.579707 0.6276);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body dt {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body ol > li {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: color(srgb 0.3568 0.372747 0.4152);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body table {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.928 0.936 0.952);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.0704 0.07744 0.1056);
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.0704 0.07744 0.1056);
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 216, 94);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 216, 94);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 216, 94);
  border-left-color: rgb(255, 216, 94);
  border-right-color: rgb(255, 216, 94);
  border-top-color: rgb(255, 216, 94);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: color(srgb 0.0704 0.07744 0.1056);
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 0.0704 0.07744 0.1056);
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body figcaption {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(67, 207, 234);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(67, 207, 234);
  border-radius: 6px;
  border-right-color: rgb(67, 207, 234);
  border-top-color: rgb(67, 207, 234);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: color(srgb 0.044 0.0484 0.066);
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.3568 0.372747 0.4152);
  border-left-color: color(srgb 0.3568 0.372747 0.4152);
  border-right-color: color(srgb 0.3568 0.372747 0.4152);
  border-top-color: color(srgb 0.3568 0.372747 0.4152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
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
  background-color: color(srgb 0.0704 0.07744 0.1056);
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: color(srgb 0.022 0.0242 0.033);
  border-bottom-color: color(srgb 0.2224 0.234773 0.2736);
  border-left-color: color(srgb 0.2224 0.234773 0.2736);
  border-right-color: color(srgb 0.2224 0.234773 0.2736);
  border-top-color: color(srgb 0.2224 0.234773 0.2736);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.1216 0.131293 0.1674);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.2224 0.234773 0.2736);
  border-left-color: color(srgb 0.2224 0.234773 0.2736);
  border-right-color: color(srgb 0.2224 0.234773 0.2736);
  border-top-color: color(srgb 0.2224 0.234773 0.2736);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.0352 0.03872 0.0528);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: color(srgb 0.1216 0.131293 0.1674);
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.1216 0.131293 0.1674);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body h1 {
  color: rgb(67, 207, 234);
}

html[saved-theme="dark"] body h2 {
  color: rgb(84, 182, 248);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(67, 207, 234);
}

html[saved-theme="dark"] body h3 {
  color: rgb(67, 124, 243);
}

html[saved-theme="dark"] body h4 {
  color: rgb(111, 81, 244);
}

html[saved-theme="dark"] body h5 {
  color: rgb(148, 70, 248);
}

html[saved-theme="dark"] body h6 {
  color: rgb(201, 82, 237);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: color(srgb 0.022 0.0242 0.033) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.022 0.0242 0.033);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: color(srgb 0.022 0.0242 0.033) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.022 0.0242 0.033);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: color(srgb 0.022 0.0242 0.033) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.022 0.0242 0.033);
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: color(srgb 0.022 0.0242 0.033) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.022 0.0242 0.033);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: color(srgb 0.022 0.0242 0.033) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.022 0.0242 0.033);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: color(srgb 0.022 0.0242 0.033) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.022 0.0242 0.033);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: color(srgb 0.928 0.936 0.952);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: color(srgb 0.5584 0.579707 0.6276);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: color(srgb 0.0352 0.03872 0.0528);
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.5584 0.579707 0.6276);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.5584 0.579707 0.6276);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.5584 0.579707 0.6276);
  stroke: color(srgb 0.5584 0.579707 0.6276);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: color(srgb 0.3568 0.372747 0.4152);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: color(srgb 0.0352 0.03872 0.0528);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body abbr {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body details {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body kbd {
  background-color: color(srgb 0.0704 0.07744 0.1056);
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body sub {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body summary {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body sup {
  color: color(srgb 0.928 0.936 0.952);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --background-modifier-border-focus: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 80%,
    hsl(220, 0%, 0%)
  ) !important;
  --background-modifier-border-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --background-modifier-error: #e3365e !important;
  --background-modifier-error-hover: #e3365e !important;
  --background-modifier-form-field: color-mix(in srgb, hsl(228, 30%, 90%) 80%, #fff) !important;
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(228, 30%, 90%) 80%, #fff) !important;
  --background-modifier-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --background-modifier-success: #47cc91 !important;
  --background-primary: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --background-primary-alt: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --background-secondary: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --background-secondary-alt: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --bases-cards-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --bases-cards-cover-background: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --bases-embed-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --bases-group-heading-property-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --bases-table-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --bases-table-cell-background-active: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --bases-table-cell-background-disabled: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in srgb,
    hsl(228, 30%, 90%) 80%,
    hsl(220, 0%, 0%)
  ) !important;
  --bases-table-group-background: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --bases-table-header-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --bases-table-header-background-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --bases-table-header-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --bases-table-summary-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --bases-table-summary-background-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --black: #000 !important;
  --blue: #437cf3 !important;
  --blue-violet: #6f51f4 !important;
  --blur-background: color-mix(in srgb, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff), color-mix(in srgb, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) 65%, transparent)) !important;
  --canvas-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --canvas-card-label-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --canvas-dot-pattern: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --caret-color: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --checkbox-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --checkbox-border-color-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --checkbox-marker-color: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --checklist-done-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --code-background: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --code-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --code-bracket-background: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --code-comment: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --code-function: #ffd85e !important;
  --code-important: #fa9f50 !important;
  --code-keyword: #e54f9b !important;
  --code-normal: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --code-operator: #e3365e !important;
  --code-property: #3bb2ce !important;
  --code-punctuation: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --code-string: #47cc91 !important;
  --code-tag: #e3365e !important;
  --code-value: #9446f8 !important;
  --collapse-icon-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --color-base-00: color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff) !important;
  --color-base-05: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --color-base-10: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --color-base-100: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 0%,
    hsl(220, 0%, 0%)
  ) !important;
  --color-base-20: color-mix(in srgb, hsl(228, 30%, 90%) 80%, #fff) !important;
  --color-base-25: color-mix(in srgb, hsl(228, 30%, 90%) 80%, #fff) !important;
  --color-base-30: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --color-base-35: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --color-base-40: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 80%,
    hsl(220, 0%, 0%)
  ) !important;
  --color-base-50: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --color-base-60: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --color-base-70: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --color-blue: #437cf3 !important;
  --color-cyan: #3bb2ce !important;
  --color-green: #47cc91 !important;
  --color-orange: #fa9f50 !important;
  --color-pink: #e54f9b !important;
  --color-purple: #9446f8 !important;
  --color-red: #e3365e !important;
  --color-yellow: #ffd85e !important;
  --cool-cyan: #3bb2ce !important;
  --cool-gray: #515768 !important;
  --cyan: #47c1cd !important;
  --dark: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --darkgray: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --divider-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --dropdown-background: color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff) !important;
  --dropdown-background-hover: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ), inset 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --file-header-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --file-header-background-focused: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --flair-background: color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff) !important;
  --flair-color: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --footnote-divider-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --footnote-id-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --footnote-input-background-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --graph-line: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --graph-node: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --graph-node-attachment: #ffd85e !important;
  --graph-node-tag: #47cc91 !important;
  --graph-node-unresolved: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --graph-text: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --gray: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --h1-color: #3bb2ce !important;
  --h2-color: #54b6f8 !important;
  --h3-color: #437cf3 !important;
  --h4-color: #6f51f4 !important;
  --h5-color: #9446f8 !important;
  --h6-color: #c952ed !important;
  --heading-formatting: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --highlight: color-mix(in srgb, #3bb2ce 25%, transparent) !important;
  --hot-red: #e3365e !important;
  --hr-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --hue-bg: 228 !important;
  --hue-fg: 220 !important;
  --icon-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --icon-color-focused: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --icon-color-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --indentation-guide-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --indentation-guide-color-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --inline-title-color: #3bb2ce !important;
  --input-date-separator: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --input-placeholder-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --interactive-hover: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --interactive-normal: color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff) !important;
  --light: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --light-blue: #54b6f8 !important;
  --lightgray: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --list-marker-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --list-marker-color-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --lum: 11% !important;
  --lum-bg: 90% !important;
  --lum-fg: 0% !important;
  --magenta: #e54f9b !important;
  --menu-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --menu-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-divider-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-input-background-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-input-text-color: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --metadata-label-background-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-label-text-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-label-text-color-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-property-background-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in srgb,
    hsl(228, 30%, 90%) 80%,
    hsl(220, 0%, 0%)
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --mint: #47cc91 !important;
  --modal-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --modal-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 80%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-collapse-icon-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-collapse-icon-color-collapsed: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-heading-color: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-heading-color-collapsed-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-heading-color-hover: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --nav-indentation-guide-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-item-background-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-item-background-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-item-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-item-color-active: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --nav-item-color-hover: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --nav-item-color-selected: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --nav-tag-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-tag-color-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --nav-tag-color-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --pdf-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --pdf-page-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --pdf-sidebar-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --pill-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --pill-border-color-hover: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --pill-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --pill-color-hover: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --pill-color-remove: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --prompt-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --prompt-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 80%,
    hsl(220, 0%, 0%)
  ) !important;
  --purple: #c952ed !important;
  --raised-background: color-mix(in srgb, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff), color-mix(in srgb, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) 65%, transparent)) !important;
  --ribbon-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --ribbon-background-collapsed: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --sat-bg: 30% !important;
  --sat-fg: 0% !important;
  --search-clear-button-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --search-icon-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --search-result-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --setting-group-heading-color: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --setting-items-background: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --setting-items-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --slider-thumb-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --slider-track-background: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --status-bar-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --status-bar-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --status-bar-text-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --suggestion-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --sync-avatar-color-1: #e3365e !important;
  --sync-avatar-color-2: #fa9f50 !important;
  --sync-avatar-color-3: #ffd85e !important;
  --sync-avatar-color-4: #47cc91 !important;
  --sync-avatar-color-5: #3bb2ce !important;
  --sync-avatar-color-6: #437cf3 !important;
  --sync-avatar-color-7: #9446f8 !important;
  --sync-avatar-color-8: #e54f9b !important;
  --tab-background-active: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --tab-container-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --tab-divider-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ) !important;
  --tab-outline-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --tab-switcher-background: color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff), transparent) !important;
  --tab-text-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --tab-text-color-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --tab-text-color-focused: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --tab-text-color-focused-active: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --tab-text-color-focused-active-current: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --table-add-button-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --table-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --table-drag-handle-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --table-header-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --table-header-color: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --text-error: #e3365e !important;
  --text-faint: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ) !important;
  --text-highlight-bg: color-mix(in srgb, #3bb2ce 25%, transparent) !important;
  --text-highlight-bg-active: color-mix(
    in srgb,
    #3bb2ce 25%,
    transparent
  ) !important;
  --text-muted: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --text-normal: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --text-success: #47cc91 !important;
  --text-warning: #fa9f50 !important;
  --textHighlight: color-mix(in srgb, #3bb2ce 25%, transparent) !important;
  --titlebar-background: color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff) !important;
  --titlebar-background-focused: color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff) !important;
  --titlebar-border-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ) !important;
  --titlebar-text-color: color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ) !important;
  --titlebar-text-color-focused: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --vault-profile-color: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --vault-profile-color-hover: color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000) !important;
  --vauxhall-bg: hsl(228, 30%, 90%) !important;
  --vauxhall-fg: hsl(220, 0%, 0%) !important;
  --violet: #9446f8 !important;
  --white: #fff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: color(srgb 0.948 0.9528 0.972);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: color(srgb 0.948 0.9528 0.972);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: color(srgb 0.948 0.9528 0.972);
  border-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: color(srgb 0.783 0.7938 0.837);
}

html[saved-theme="light"] body .note-properties-key {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .note-properties-value {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: color(srgb 0.948 0.9528 0.972);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.783 0.7938 0.837);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: color(srgb 0.948 0.9528 0.972);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: color(srgb 0.948 0.9528 0.972);
  color: color(srgb 0 0 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.231373 0.698039 0.807843 / 0.25);
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body del {
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body h1.article-title {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.522 0.5292 0.558);
}

html[saved-theme="light"] body p {
  color: color(srgb 0.261 0.2646 0.279);
  outline: color(srgb 0.261 0.2646 0.279) none 0px;
  text-decoration-color: color(srgb 0.261 0.2646 0.279);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body dt {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body ol > li {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body ul > li {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: color(srgb 0.522 0.5292 0.558);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body table {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body td {
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0 0 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.783 0.7938 0.837);
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.783 0.7938 0.837);
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(255, 216, 94);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 216, 94);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 216, 94);
  border-left-color: rgb(255, 216, 94);
  border-right-color: rgb(255, 216, 94);
  border-top-color: rgb(255, 216, 94);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: color(srgb 0.783 0.7938 0.837);
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: color(srgb 0.783 0.7938 0.837);
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body figcaption {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body figure {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(59, 178, 206);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(59, 178, 206);
  border-radius: 6px;
  border-right-color: rgb(59, 178, 206);
  border-top-color: rgb(59, 178, 206);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body video {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: color(srgb 0.935 0.941 0.965);
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.522 0.5292 0.558);
  border-left-color: color(srgb 0.522 0.5292 0.558);
  border-right-color: color(srgb 0.522 0.5292 0.558);
  border-top-color: color(srgb 0.522 0.5292 0.558);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
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
  background-color: color(srgb 0.896 0.9056 0.944);
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: color(srgb 0.948 0.9528 0.972);
  border-bottom-color: color(srgb 0.696 0.7056 0.744);
  border-left-color: color(srgb 0.696 0.7056 0.744);
  border-right-color: color(srgb 0.696 0.7056 0.744);
  border-top-color: color(srgb 0.696 0.7056 0.744);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: color(srgb 0.8265 0.8379 0.8835);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.696 0.7056 0.744);
  border-left-color: color(srgb 0.696 0.7056 0.744);
  border-right-color: color(srgb 0.696 0.7056 0.744);
  border-top-color: color(srgb 0.696 0.7056 0.744);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.948 0.9528 0.972);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: color(srgb 0.8265 0.8379 0.8835);
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: color(srgb 0.8265 0.8379 0.8835);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(59, 178, 206);
}

html[saved-theme="light"] body h2 {
  color: rgb(84, 182, 248);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(59, 178, 206);
}

html[saved-theme="light"] body h3 {
  color: rgb(67, 124, 243);
}

html[saved-theme="light"] body h4 {
  color: rgb(111, 81, 244);
}

html[saved-theme="light"] body h5 {
  color: rgb(148, 70, 248);
}

html[saved-theme="light"] body h6 {
  color: rgb(201, 82, 237);
}

html[saved-theme="light"] body hr {
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: color(srgb 0.948 0.9528 0.972) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.948 0.9528 0.972);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: color(srgb 0.948 0.9528 0.972) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.948 0.9528 0.972);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: color(srgb 0.948 0.9528 0.972) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.948 0.9528 0.972);
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: color(srgb 0.948 0.9528 0.972) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.948 0.9528 0.972);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: color(srgb 0.948 0.9528 0.972) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.948 0.9528 0.972);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: color(srgb 0.948 0.9528 0.972) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.948 0.9528 0.972);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: color(srgb 0.783 0.7938 0.837);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: color(srgb 0 0 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: color(srgb 0.261 0.2646 0.279);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: color(srgb 0.948 0.9528 0.972);
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body footer ul li a {
  color: color(srgb 0.261 0.2646 0.279);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.261 0.2646 0.279);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .darkmode svg {
  color: color(srgb 0.261 0.2646 0.279);
  stroke: color(srgb 0.261 0.2646 0.279);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: color(srgb 0.522 0.5292 0.558);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: color(srgb 0.948 0.9528 0.972);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body abbr {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body kbd {
  background-color: color(srgb 0.783 0.7938 0.837);
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body progress {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body sub {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body summary {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body sup {
  color: color(srgb 0 0 0);
}`,
  },
};
