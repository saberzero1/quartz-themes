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
  --background-modifier-active-hover: hsl(258 12% 29% / 0.66) !important;
  --background-modifier-border: hsl(258 12% 21%) !important;
  --background-modifier-border-focus: hsl(258 12% 33%) !important;
  --background-modifier-border-hover: hsl(258 12% 25%) !important;
  --background-modifier-form-field: hsl(258 12% 12%) !important;
  --background-modifier-form-field-hover: hsl(258 12% 12%) !important;
  --background-modifier-hover: hsl(258 12% 29% / 0.49) !important;
  --background-primary: hsl(258 12% 12%) !important;
  --background-primary-alt: hsl(258 12% 14%) !important;
  --background-secondary: hsl(258 12% 14%) !important;
  --background-secondary-alt: hsl(258 12% 21%) !important;
  --bases-cards-background: hsl(258 12% 12%) !important;
  --bases-cards-cover-background: hsl(258 12% 14%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258 12% 23%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)) !important;
  --bases-embed-border-color: hsl(258 12% 23%) !important;
  --bases-embed-border-radius: 7px !important;
  --bases-embed-radius: 7px !important;
  --bases-group-heading-property-color: hsl(0 0% 70%) !important;
  --bases-table-border-color: hsl(258 12% 23%) !important;
  --bases-table-cell-background-active: hsl(258 12% 12%) !important;
  --bases-table-cell-background-disabled: hsl(258 12% 14%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258 12% 33%) !important;
  --bases-table-group-background: hsl(258 12% 14%) !important;
  --bases-table-header-background: hsl(258 12% 12%) !important;
  --bases-table-header-background-hover: hsl(258 12% 29% / 0.49) !important;
  --bases-table-header-color: hsl(0 0% 85%) !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-summary-background: hsl(258 12% 12%) !important;
  --bases-table-summary-background-hover: hsl(258 12% 29% / 0.49) !important;
  --blockquote-background-color: hsl(258, 88%, 66%, 0.1) !important;
  --blur-background: color-mix(in srgb, hsl(258 12% 12%) 65%, transparent) linear-gradient(hsl(258 12% 12%), color-mix(in srgb, hsl(258 12% 12%) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: 0;
  --callout-radius: 7px;
  --callout-title-padding: 0.5em 1em;
  --callout-title-weight: 700;
  --canvas-background: hsl(258 12% 12%) !important;
  --canvas-card-label-color: hsl(0 0% 40%) !important;
  --canvas-dot-pattern: hsl(258 12% 21%) !important;
  --caret-color: hsl(0 0% 85%) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-border-color-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --checkbox-color-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --checkbox-marker-color: hsl(258 12% 12%) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: hsl(0 0% 85%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(258 12% 14%) !important;
  --code-border-color: hsl(258 12% 23%) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsl(258 12% 29% / 0.49) !important;
  --code-comment: hsl(0 0% 40%) !important;
  --code-normal: hsl(0 0% 85%) !important;
  --code-punctuation: hsl(0 0% 70%) !important;
  --code-radius: 7px !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --collapse-icon-color-collapsed: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --color-base-00: hsl(258 12% 12%) !important;
  --color-base-05: hsl(258 12% 13%) !important;
  --color-base-10: hsl(258 12% 14%) !important;
  --color-base-100: hsl(258 12% 85%) !important;
  --color-base-20: hsl(258 12% 15%) !important;
  --color-base-25: hsl(258 12% 16%) !important;
  --color-base-30: hsl(258 12% 21%) !important;
  --color-base-35: hsl(258 12% 25%) !important;
  --color-base-40: hsl(258 12% 33%) !important;
  --color-base-50: hsl(258 12% 40%) !important;
  --color-base-60: hsl(258 12% 60%) !important;
  --color-base-70: hsl(258 12% 70%) !important;
  --dark: hsl(0 0% 85%) !important;
  --darkgray: hsl(0 0% 85%) !important;
  --divider-color: hsl(258 12% 21%) !important;
  --dropdown-background: hsl(258 12% 12%) !important;
  --dropdown-background-hover: hsl(258 12% 20%) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid hsl(258 12% 23%) !important;
  --embed-border-end: 1px solid hsl(258 12% 23%) !important;
  --embed-border-start: 1px solid hsl(258 12% 23%) !important;
  --embed-border-top: 1px solid hsl(258 12% 23%) !important;
  --embed-padding: 0 !important;
  --file-header-background: hsl(258 12% 12%) !important;
  --file-header-background-focused: hsl(258 12% 12%) !important;
  --file-header-border: 0 !important;
  --flair-background: hsl(258 12% 12%) !important;
  --flair-color: hsl(0 0% 85%) !important;
  --footnote-divider-color: hsl(258 12% 21%) !important;
  --footnote-id-color: hsl(0 0% 70%) !important;
  --footnote-id-color-no-occurrences: hsl(0 0% 40%) !important;
  --footnote-input-background-active: hsl(258 12% 29% / 0.49) !important;
  --frame-right-space: 81px !important;
  --graph-line: hsl(258 12% 25%) !important;
  --graph-node: hsl(258 12% 70%) !important;
  --graph-node-focused: hsl(258, 88%, 66%) !important;
  --graph-node-unresolved: hsl(258 12% 40%) !important;
  --graph-text: hsl(0 0% 85%) !important;
  --gray: hsl(0 0% 70%) !important;
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
  --heading-formatting: hsl(0 0% 40%) !important;
  --heading-spacing: 1.5rem !important;
  --highlight: hsl(258 12% 29% / 0.49) !important;
  --hr-color: hsl(258 12% 23%) !important;
  --i-0: hsl(258 12% 13%) !important;
  --i-1: hsl(258 12% 14%) !important;
  --i-2: hsl(258 12% 16%) !important;
  --i-3: hsl(258 12% 20%) !important;
  --i-4: hsl(258 12% 22%) !important;
  --i-5: hsl(258 12% 24%) !important;
  --i-6: hsl(258 12% 26%) !important;
  --i-7: hsl(258 12% 28%) !important;
  --i-8: hsl(258 12% 30%) !important;
  --i-active-line-color: hsl(258, 88%, 66%) !important;
  --i-active-line-highlight: oklch(from hsl(258, 88%, 66%) 0.65 c h / 0.1) !important;
  --i-active-line-highlight-inactive: oklch(from oklch(from hsl(258, 88%, 66%) 0.65 c h / 0.1) l c h / 0.05) !important;
  --i-border-radius: 8px !important;
  --i-bullet-color: hsl(258, 88%, 66%) !important;
  --i-bullet-color-collapsed: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --i-bullet-color-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --i-card-layout-border: hsl(258 12% 24%) !important;
  --i-card-radius: 8px !important;
  --i-card-radius-macos: 10px !important;
  --i-checkbox-shadow-hover: hsl(258 12% 20%) !important;
  --i-dk-border-l: 11% !important;
  --i-dk-custom-layout-s: 12% !important;
  --i-dk-folder-bg-accent: hsl(258, 88%, 66%) !important;
  --i-dk-folder-name-accent: hsl(258, 88%, 66%) !important;
  --i-dk-h1-h: 0 !important;
  --i-dk-h6-h: 300 !important;
  --i-dk-heading-accent: hsl(258, 88%, 66%) !important;
  --i-dk-heading-highlighted-padding: 0 !important;
  --i-dk-l: 12% !important;
  --i-dk-l-multiplier: 1 !important;
  --i-dk-layout-border-l: 8% !important;
  --i-dk-layout-l: 8% !important;
  --i-dk-layout-s: 12% !important;
  --i-dk-s: 12% !important;
  --i-dk-text-l-multiplier: 1 !important;
  --i-editor-border: hsl(258 12% 23%) !important;
  --i-editor-border-hover: hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)) !important;
  --i-h1-size: 1.5em !important;
  --i-h2-size: 1.4em !important;
  --i-h3-size: 1.3em !important;
  --i-h4-size: 1.2em !important;
  --i-h5-size: 1.1em !important;
  --i-h6-size: 1em !important;
  --i-hr-style: solid !important;
  --i-image-border-color: hsl(258 12% 23%) !important;
  --i-image-border-style: solid !important;
  --i-image-border-width: 0 !important;
  --i-image-padding: 0 !important;
  --i-inline-title-accent-bg: oklch(from hsl(258, 88%, 66%) 40% 15% h / 50%) !important;
  --i-inline-title-accent-text-color: oklch(from hsl(258, 88%, 66%) 80% 20% h) !important;
  --i-layout-border-color: hsl(258 12% 28%) !important;
  --i-layout-color: hsl(258 12% 20%) !important;
  --i-link-bg-hover: hsl(258 12% 20%) !important;
  --i-link-underline-color: oklch(from oklch(from hsl(258, 88%, 66%) 80% 15% h) l c h / 0.35) !important;
  --i-link-underline-offset: 0.1em !important;
  --i-link-underline-opacity-multiplier: 1 !important;
  --i-link-underline-style: solid !important;
  --i-lt-custom-layout-s: 25% !important;
  --i-lt-folder-bg-accent: hsl(258, 88%, 66%) !important;
  --i-lt-folder-name-accent: hsl(258, 88%, 66%) !important;
  --i-lt-h1-h: 0 !important;
  --i-lt-h6-h: 300 !important;
  --i-lt-heading-accent: hsl(258, 88%, 66%) !important;
  --i-lt-heading-highlighted-padding: 0 !important;
  --i-lt-layout-border-l: 8% !important;
  --i-lt-layout-l: 12% !important;
  --i-pattern-color: hsl(from hsl(258 12% 14%) h s 15%) !important;
  --i-pattern-dk-l: 3% !important;
  --i-pattern-height: 10px !important;
  --i-pattern-line-width: 1px !important;
  --i-pattern-lt-l: 3% !important;
  --i-pattern-width: 10px !important;
  --i-properties-s: 12% !important;
  --i-s: 12% !important;
  --i-scrollbar-color: hsl(258 12% 28%) !important;
  --i-scrollbar-color-active: hsl(258 12% 30%) !important;
  --i-scrollbar-thumb-size: 4px !important;
  --i-scrollbar-track-size: 9px !important;
  --i-slider-thumb-shadow: 0 0 0 5px hsl(258 12% 52% / 0.35) !important;
  --i-spacing-below-headings: 0.3rem !important;
  --i-style-settings-h1-color: oklch(from hsl(258, 88%, 66%) 80% 20% h) !important;
  --i-style-settings-h2-color: oklch(from hsl(258, 88%, 66%) 80% 20% calc(h + 60)) !important;
  --i-style-settings-h3-color: oklch(from hsl(258, 88%, 66%) 80% 20% calc(h + 60 * 2)) !important;
  --i-style-settings-h4-color: oklch(from hsl(258, 88%, 66%) 80% 20% calc(h + 60 * 3)) !important;
  --i-style-settings-h5-color: oklch(from hsl(258, 88%, 66%) 80% 20% calc(h + 60 * 4)) !important;
  --i-style-settings-h6-color: oklch(from hsl(258, 88%, 66%) 80% 20% calc(h + 60 * 5)) !important;
  --i-style-settings-heading-underline-color: oklch(from currentColor l c h / 0.35) !important;
  --i-translucent-floating-nav-opacity: 92% !important;
  --icon-color: hsl(0 0% 85%) !important;
  --icon-color-active: hsl(258, 88%, 66%) !important;
  --icon-color-focused: hsl(0 0% 85%) !important;
  --icon-color-hover: hsl(0 0% 85%) !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: hsl(258 12% 23%) !important;
  --indentation-guide-color-active: hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(0 0% 40%) !important;
  --input-placeholder-color: hsl(0 0% 40%) !important;
  --input-shadow: inset 0 0 0 1px hsl(258 12% 21%) !important;
  --input-shadow-hover: inset 0 0 0 1px hsl(258 12% 25%) !important;
  --interactive-accent-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --interactive-hover: hsl(258 12% 20%) !important;
  --interactive-normal: hsl(258 12% 12%) !important;
  --light: hsl(258 12% 12%) !important;
  --lightgray: hsl(258 12% 14%) !important;
  --link-color: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --link-color-hover: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --link-external-color: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --link-external-color-hover: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --link-unresolved-color: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-collapsed: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --list-marker-color-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --menu-background: hsl(258 12% 14%) !important;
  --menu-border-color: hsl(258 12% 25%) !important;
  --metadata-border-color: hsl(258 12% 21%) !important;
  --metadata-divider-color: hsl(258 12% 21%) !important;
  --metadata-input-background-active: hsl(258 12% 29% / 0.49) !important;
  --metadata-input-text-color: hsl(0 0% 85%) !important;
  --metadata-label-background-active: hsl(258 12% 29% / 0.49) !important;
  --metadata-label-text-color: hsl(0 0% 70%) !important;
  --metadata-label-text-color-hover: hsl(0 0% 70%) !important;
  --metadata-property-background-active: hsl(258 12% 29% / 0.49) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258 12% 33%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(258 12% 25%) !important;
  --modal-background: hsl(258 12% 12%) !important;
  --modal-border-color: hsl(258 12% 25%) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0 0% 40%) !important;
  --nav-heading-color: hsl(0 0% 85%) !important;
  --nav-heading-color-collapsed: hsl(0 0% 40%) !important;
  --nav-heading-color-collapsed-hover: hsl(0 0% 70%) !important;
  --nav-heading-color-hover: hsl(0 0% 85%) !important;
  --nav-indentation-guide-color: hsl(258 12% 22%) !important;
  --nav-item-background-active: hsl(258 12% 29% / 0.49) !important;
  --nav-item-background-hover: hsl(258 12% 29% / 0.49) !important;
  --nav-item-color: hsl(0 0% 85%) !important;
  --nav-item-color-active: hsl(0 0% 85%) !important;
  --nav-item-color-highlighted: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --nav-item-color-hover: hsl(0 0% 85%) !important;
  --nav-item-color-selected: hsl(0 0% 85%) !important;
  --nav-tag-color: hsl(0 0% 40%) !important;
  --nav-tag-color-active: hsl(0 0% 70%) !important;
  --nav-tag-color-hover: hsl(0 0% 70%) !important;
  --nn-theme-file-selected-bg: hsl(258 12% 29% / 0.49) !important;
  --nn-theme-file-tag-bg: hsl(258, 88%, 66%, 0.25) !important;
  --nn-theme-file-tag-border-radius: 4px !important;
  --nn-theme-file-tag-color: hsl(0 0% 85%) !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: hsl(258, 88%, 66%) !important;
  --nn-theme-mobile-toolbar-button-icon-color: hsl(258, 88%, 66%) !important;
  --nn-theme-nav-bg: hsl(258 12% 12%) !important;
  --nn-theme-navitem-chevron-color: hsl(258, 88%, 66%) !important;
  --nn-theme-navitem-selected-bg: hsl(258 12% 29% / 0.49) !important;
  --p-spacing: 1.5rem !important;
  --pdf-background: hsl(258 12% 12%) !important;
  --pdf-page-background: hsl(258 12% 12%) !important;
  --pdf-shadow: 0 0 0 1px hsl(258 12% 21%) !important;
  --pdf-sidebar-background: hsl(258 12% 12%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(258 12% 21%) !important;
  --pill-border-color: hsl(258 12% 21%) !important;
  --pill-border-color-hover: hsl(258 12% 25%) !important;
  --pill-color: hsl(0 0% 70%) !important;
  --pill-color-hover: hsl(0 0% 85%) !important;
  --pill-color-remove: hsl(0 0% 40%) !important;
  --pill-color-remove-hover: hsl(0 0% 70%) !important;
  --pill-focus-left-adjust: 0 !important;
  --pill-focus-width: 100% !important;
  --pill-radius: 4px !important;
  --prompt-background: hsl(258 12% 12%) !important;
  --prompt-border-color: hsl(258 12% 25%) !important;
  --raised-background: color-mix(in srgb, hsl(258 12% 12%) 65%, transparent) linear-gradient(hsl(258 12% 12%), color-mix(in srgb, hsl(258 12% 12%) 65%, transparent)) !important;
  --ribbon-background: hsl(258 12% 20%) !important;
  --ribbon-background-collapsed: hsl(258 12% 20%) !important;
  --ribbon-padding: 8px 0 12px !important;
  --search-clear-button-color: hsl(0 0% 70%) !important;
  --search-icon-color: hsl(0 0% 70%) !important;
  --search-result-background: hsl(258 12% 12%) !important;
  --secondary: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --setting-group-heading-color: hsl(0 0% 85%) !important;
  --setting-items-background: hsl(258 12% 12%) !important;
  --setting-items-border-color: hsl(258 12% 21%) !important;
  --setting-items-padding: 0 0 20px 0 !important;
  --setting-items-radius: 0 !important;
  --slider-thumb-border-color: hsl(258 12% 25%) !important;
  --slider-track-background: hsl(258 12% 21%) !important;
  --status-bar-background: hsl(258 12% 13%) !important;
  --status-bar-border-color: hsl(258 12% 21%) !important;
  --status-bar-text-color: hsl(0 0% 85%) !important;
  --suggestion-background: hsl(258 12% 12%) !important;
  --tab-background-active: hsl(258 12% 12%) !important;
  --tab-container-background: hsl(258 12% 13%) !important;
  --tab-divider-color: hsl(258 12% 25%) !important;
  --tab-outline-color: hsl(258 12% 21%) !important;
  --tab-switcher-background: hsl(258 12% 14%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258 12% 14%), transparent) !important;
  --tab-text-color: hsl(0 0% 85%) !important;
  --tab-text-color-active: hsl(0 0% 85%) !important;
  --tab-text-color-focused: hsl(0 0% 85%) !important;
  --tab-text-color-focused-active: hsl(0 0% 85%) !important;
  --tab-text-color-focused-active-current: hsl(0 0% 85%) !important;
  --tab-text-color-focused-highlighted: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --table-add-button-border-color: hsl(258 12% 23%) !important;
  --table-border-color: hsl(258 12% 23%) !important;
  --table-column-min-width: 4ch !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-background: hsl(258 12% 16%) !important;
  --table-header-background-hover: hsl(258 12% 16%) !important;
  --table-header-border-color: hsl(258 12% 23%) !important;
  --table-header-color: hsl(0 0% 85%) !important;
  --table-header-weight: 600 !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: hsl(258, 88%, 66%, 0.25) !important;
  --tag-background-hover: hsl(258, 88%, 66%, 0.25) !important;
  --tag-color: hsl(0 0% 85%) !important;
  --tag-color-hover: hsl(0 0% 85%) !important;
  --tag-padding-x: 0.5em !important;
  --tag-radius: 4px !important;
  --tertiary: oklch(from oklch(from hsl(258, 88%, 66%) 80% 15% h) calc(l + 0.15) c h) !important;
  --text-accent: oklch(from hsl(258, 88%, 66%) 80% 15% h) !important;
  --text-accent-hover: oklch(from oklch(from hsl(258, 88%, 66%) 80% 15% h) calc(l + 0.15) c h) !important;
  --text-faint: hsl(0 0% 40%) !important;
  --text-muted: hsl(0 0% 70%) !important;
  --text-normal: hsl(0 0% 85%) !important;
  --textHighlight: hsl(258 12% 29% / 0.49) !important;
  --titlebar-background: hsl(258 12% 13%) !important;
  --titlebar-background-focused: hsl(258 12% 13%) !important;
  --titlebar-border-color: hsl(258 12% 21%) !important;
  --titlebar-text-color: hsl(0 0% 70%) !important;
  --titlebar-text-color-focused: hsl(0 0% 85%) !important;
  --toggle-thumb-color: hsl(0 0% 85%) !important;
  --traffic-lights-offset-y: 58px !important;
  --vault-profile-color: hsl(0 0% 85%) !important;
  --vault-profile-color-hover: hsl(0 0% 85%) !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(56, 52, 66);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(34, 31, 40);
  border-color: rgb(217, 217, 217);
  box-shadow: rgb(51, 47, 60) 0px 0px 0px 1px inset;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(51, 47, 60);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(138, 92, 245, 0.25);
  border-radius: 4px;
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
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(217, 217, 217);
  font-weight: 700;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(217, 217, 217);
  font-weight: 500;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
  border-radius: 50%;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: oklch(0.8 0.06 292.489);
  outline: oklch(0.8 0.06 292.489) none 0px;
  text-decoration: underline oklch(0.8 0.06 292.489 / 0.35);
  text-decoration-color: oklch(0.8 0.06 292.489 / 0.35);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.8 0.06 292.489);
  outline: oklch(0.8 0.06 292.489) none 0px;
  text-decoration: underline oklch(0.8 0.06 292.489 / 0.35);
  text-decoration-color: oklch(0.8 0.06 292.489 / 0.35);
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.8 0.06 292.489);
  outline: oklch(0.8 0.06 292.489) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
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
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul.overflow {
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
  border-bottom-color: oklch(0.8 0.08 292.489);
  border-left-color: oklch(0.8 0.08 292.489);
  border-right-color: oklch(0.8 0.08 292.489);
  border-top-color: oklch(0.8 0.08 292.489);
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
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-style: solid;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-right-style: solid;
  border-top-color: rgb(217, 217, 217);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgMG0tOS41LS43NWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgMG0tOS41LS43NWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuOTIxIDEuNTc1LS4zNSA3QTEuNSAxLjUgMCAwIDEgOS4wNzMgMTBINi45MjdhMS41IDEuNSAwIDAgMS0xLjQ5OC0xLjQyNWwtLjM1LTdBMS41IDEuNSAwIDAgMSA2LjU3NyAwaDIuODQ2YTEuNSAxLjUgMCAwIDEgMS40OTggMS41NzVNOCAxMWEyLjUgMi41IDAgMSAxIDAgNSAyLjUgMi41IDAgMCAxIDAtNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuOTIxIDEuNTc1LS4zNSA3QTEuNSAxLjUgMCAwIDEgOS4wNzMgMTBINi45MjdhMS41IDEuNSAwIDAgMS0xLjQ5OC0xLjQyNWwtLjM1LTdBMS41IDEuNSAwIDAgMSA2LjU3NyAwaDIuODQ2YTEuNSAxLjUgMCAwIDEgMS40OTggMS41NzVNOCAxMWEyLjUgMi41IDAgMSAxIDAgNSAyLjUgMi41IDAgMCAxIDAtNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjQ0IDQuNTRjLjQzLS4zNTQuOTk0LS41NjUgMS41Ni0uNTY1IDEuMjE3IDAgMi4zNC44MiAyLjM0IDIuMTQgMCAuMzc3LS4wNzkuNzQ1LS4yOTggMS4xLS4yMDguMzM5LS41MTMuNjE0LS44NzUuODY3LS4yMTcuMTUzLS4zMjYuMjU3LS4zNzkuMzI4LS4wMzguMDUyLS4wMzguMDctLjAzOC4wODlhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjc5NC41NDQtMS4yODYgMS4wNTYtMS42NDUuMjgtLjE5Ni40MDItLjMzMi40Ni0uNDI1YS41NC41NCAwIDAgMCAuMDczLS4zMTNjMC0uMy0uMjQzLS42NDEtLjgzOS0uNjQxYTEgMSAwIDAgMC0uNjA4LjIyNGMtLjE2Ny4xMzctLjIzMS4yODYtLjIzMS40MTdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjY3My4zNDUtMS4yMi43OC0xLjU3N005IDExYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjQ0IDQuNTRjLjQzLS4zNTQuOTk0LS41NjUgMS41Ni0uNTY1IDEuMjE3IDAgMi4zNC44MiAyLjM0IDIuMTQgMCAuMzc3LS4wNzkuNzQ1LS4yOTggMS4xLS4yMDguMzM5LS41MTMuNjE0LS44NzUuODY3LS4yMTcuMTUzLS4zMjYuMjU3LS4zNzkuMzI4LS4wMzguMDUyLS4wMzguMDctLjAzOC4wODlhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjc5NC41NDQtMS4yODYgMS4wNTYtMS42NDUuMjgtLjE5Ni40MDItLjMzMi40Ni0uNDI1YS41NC41NCAwIDAgMCAuMDczLS4zMTNjMC0uMy0uMjQzLS42NDEtLjgzOS0uNjQxYTEgMSAwIDAgMC0uNjA4LjIyNGMtLjE2Ny4xMzctLjIzMS4yODYtLjIzMS40MTdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjY3My4zNDUtMS4yMi43OC0xLjU3N005IDExYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41ODkgOS42N0EyLjc1IDIuNzUgMCAwIDEgMS41IDd2LS4yNUEyLjc1IDIuNzUgMCAwIDEgNC4yNSA0aC4yNWEyLjc0NyAyLjc0NyAwIDAgMSAyLjc0OCAyLjY1N3YuMDAzaC4wMDJWN3EwIC4xOTctLjAyNy4zODYtLjAzLjM5Mi0uMDkuNzdhOCA4IDAgMCAxLS41NTkgMS45MTggNy4yIDcuMiAwIDAgMS0yLjE2MiAyLjgwMWwtLjA5OC4wNzZBLjI0LjI0IDAgMCAxIDQuMTcgMTNhLjI1LjI1IDAgMCAxLS4yMi0uMzY3IDE3IDE3IDAgMCAwIC42NS0xLjM4NGMuMTk3LS40NzQuMzk2LTEuMDEzLjU1Ny0xLjU3OGEyLjcgMi43IDAgMCAxLS42NTcuMDc5aC0uMjVxLS4zNDMtLjAwMS0uNjYxLS4wOG0tLjU0OSAxLjQwNUE0LjI1IDQuMjUgMCAwIDEgMCA3di0uMjVBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMi41aC4yNWMxLjQ1MiAwIDIuNzMzLjcyOCAzLjUgMS44MzhBNC4yNSA0LjI1IDAgMCAxIDExLjUgMi41aC4yNUE0LjI1IDQuMjUgMCAwIDEgMTYgNi42NjRWN3EwIC4yNzUtLjAzNS41NDNjLS4yMDcgMi42Mi0xLjM1OCA0Ljk2Ni0zLjQ4OCA2LjU5OWExLjc0IDEuNzQgMCAwIDEtMS4wNTcuMzU4Yy0xLjM0MSAwLTIuMTQ2LTEuNDI1LTEuNTQ4LTIuNTY0LjExMS0uMjExLjI2LS41MDguNDE4LS44NmE0LjI1IDQuMjUgMCAwIDEtMi4wMDUtMS4yOTcgOC43NiA4Ljc2IDAgMCAxLTMuMDU4IDQuMzYzIDEuNzQgMS43NCAwIDAgMS0xLjA1Ny4zNThjLTEuMzQxIDAtMi4xNDYtMS40MjUtMS41NDgtMi41NjQuMTExLS4yMTEuMjYtLjUwOC40MTgtLjg2bTcuOC0xLjQwNnEuMzE4LjA3OS42NjEuMDhoLjI1YTIuOCAyLjggMCAwIDAgLjY1Ny0uMDc5IDE0IDE0IDAgMCAxLS42OCAxLjg2NSAxOCAxOCAwIDAgMS0uNTI3IDEuMDk3LjI1LjI1IDAgMCAwIC4yMi4zNjcuMjQuMjQgMCAwIDAgLjE0NC0uMDQ5bC4wOTgtLjA3NnEuNDUyLS4zNTguODMyLS43NjhhNy4yIDcuMiAwIDAgMCAxLjM5LTIuMTcyIDggOCAwIDAgMCAuNDk4LTEuNzc5IDkgOSAwIDAgMCAuMDkxLS43N3EuMDI3LS4xOS4wMjctLjM4NnYtLjMzOUgxNC41di0uMDA0QTIuNzQ3IDIuNzQ3IDAgMCAwIDExLjc1IDRoLS4yNTFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVY3YzAgMS4yOS44OSAyLjM3NCAyLjA4OSAyLjY3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41ODkgOS42N0EyLjc1IDIuNzUgMCAwIDEgMS41IDd2LS4yNUEyLjc1IDIuNzUgMCAwIDEgNC4yNSA0aC4yNWEyLjc0NyAyLjc0NyAwIDAgMSAyLjc0OCAyLjY1N3YuMDAzaC4wMDJWN3EwIC4xOTctLjAyNy4zODYtLjAzLjM5Mi0uMDkuNzdhOCA4IDAgMCAxLS41NTkgMS45MTggNy4yIDcuMiAwIDAgMS0yLjE2MiAyLjgwMWwtLjA5OC4wNzZBLjI0LjI0IDAgMCAxIDQuMTcgMTNhLjI1LjI1IDAgMCAxLS4yMi0uMzY3IDE3IDE3IDAgMCAwIC42NS0xLjM4NGMuMTk3LS40NzQuMzk2LTEuMDEzLjU1Ny0xLjU3OGEyLjcgMi43IDAgMCAxLS42NTcuMDc5aC0uMjVxLS4zNDMtLjAwMS0uNjYxLS4wOG0tLjU0OSAxLjQwNUE0LjI1IDQuMjUgMCAwIDEgMCA3di0uMjVBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMi41aC4yNWMxLjQ1MiAwIDIuNzMzLjcyOCAzLjUgMS44MzhBNC4yNSA0LjI1IDAgMCAxIDExLjUgMi41aC4yNUE0LjI1IDQuMjUgMCAwIDEgMTYgNi42NjRWN3EwIC4yNzUtLjAzNS41NDNjLS4yMDcgMi42Mi0xLjM1OCA0Ljk2Ni0zLjQ4OCA2LjU5OWExLjc0IDEuNzQgMCAwIDEtMS4wNTcuMzU4Yy0xLjM0MSAwLTIuMTQ2LTEuNDI1LTEuNTQ4LTIuNTY0LjExMS0uMjExLjI2LS41MDguNDE4LS44NmE0LjI1IDQuMjUgMCAwIDEtMi4wMDUtMS4yOTcgOC43NiA4Ljc2IDAgMCAxLTMuMDU4IDQuMzYzIDEuNzQgMS43NCAwIDAgMS0xLjA1Ny4zNThjLTEuMzQxIDAtMi4xNDYtMS40MjUtMS41NDgtMi41NjQuMTExLS4yMTEuMjYtLjUwOC40MTgtLjg2bTcuOC0xLjQwNnEuMzE4LjA3OS42NjEuMDhoLjI1YTIuOCAyLjggMCAwIDAgLjY1Ny0uMDc5IDE0IDE0IDAgMCAxLS42OCAxLjg2NSAxOCAxOCAwIDAgMS0uNTI3IDEuMDk3LjI1LjI1IDAgMCAwIC4yMi4zNjcuMjQuMjQgMCAwIDAgLjE0NC0uMDQ5bC4wOTgtLjA3NnEuNDUyLS4zNTguODMyLS43NjhhNy4yIDcuMiAwIDAgMCAxLjM5LTIuMTcyIDggOCAwIDAgMCAuNDk4LTEuNzc5IDkgOSAwIDAgMCAuMDkxLS43N3EuMDI3LS4xOS4wMjctLjM4NnYtLjMzOUgxNC41di0uMDA0QTIuNzQ3IDIuNzQ3IDAgMCAwIDExLjc1IDRoLS4yNTFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVY3YzAgMS4yOS44OSAyLjM3NCAyLjA4OSAyLjY3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02Ljg4Ni43NzNDNy4yOS0uMjMxIDguNzEtLjIzMSA5LjExNC43NzNsMS40NzIgMy42NjcgMy45NDMuMjY4YzEuMDguMDczIDEuNTE4IDEuNDI0LjY4OCAyLjExOEwxMi4xODUgOS4zNmwuOTY0IDMuODMyYy4yNjQgMS4wNS0uODg2IDEuODg0LTEuODAyIDEuMzFMOCAxMi40bC0zLjM0NyAyLjEwMWMtLjkxNi41NzUtMi4wNjYtLjI2LTEuODAyLTEuMzA5bC45NjQtMy44MzJMLjc4MyA2LjgyNmMtLjgzLS42OTQtLjM5MS0yLjA0NS42ODgtMi4xMThsMy45NDMtLjI2OHoiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02Ljg4Ni43NzNDNy4yOS0uMjMxIDguNzEtLjIzMSA5LjExNC43NzNsMS40NzIgMy42NjcgMy45NDMuMjY4YzEuMDguMDczIDEuNTE4IDEuNDI0LjY4OCAyLjExOEwxMi4xODUgOS4zNmwuOTY0IDMuODMyYy4yNjQgMS4wNS0uODg2IDEuODg0LTEuODAyIDEuMzFMOCAxMi40bC0zLjM0NyAyLjEwMWMtLjkxNi41NzUtMi4wNjYtLjI2LTEuODAyLTEuMzA5bC45NjQtMy44MzJMLjc4MyA2LjgyNmMtLjgzLS42OTQtLjM5MS0yLjA0NS42ODgtMi4xMThsMy45NDMtLjI2OHoiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgNS40OTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNEExLjUgMS41IDAgMCAwIDMgNS41djFoMTB2LTFBMS41IDEuNSAwIDAgMCAxMS41IDR2Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY0SDZ2Ljc0N2EuNzUuNzUgMCAwIDEtLjc1Ljc1TTEwIDIuNUg2di0uNzUyYS43NS43NSAwIDEgMC0xLjUgMFYyLjVhMyAzIDAgMCAwLTMgM3Y2YTMgMyAwIDAgMCAzIDNoN2EzIDMgMCAwIDAgMy0zdi02YTMgMyAwIDAgMC0zLTN2LS43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTMgOHYzLjVBMS41IDEuNSAwIDAgMCA0LjUgMTNoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgNS40OTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNEExLjUgMS41IDAgMCAwIDMgNS41djFoMTB2LTFBMS41IDEuNSAwIDAgMCAxMS41IDR2Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY0SDZ2Ljc0N2EuNzUuNzUgMCAwIDEtLjc1Ljc1TTEwIDIuNUg2di0uNzUyYS43NS43NSAwIDEgMC0xLjUgMFYyLjVhMyAzIDAgMCAwLTMgM3Y2YTMgMyAwIDAgMCAzIDNoN2EzIDMgMCAwIDAgMy0zdi02YTMgMyAwIDAgMC0zLTN2LS43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTMgOHYzLjVBMS41IDEuNSAwIDAgMCA0LjUgMTNoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkgMTMuOTA0IDUuMjUgMTAuNzUgMi4wOTYgOC43MWEyLjQgMi40IDAgMCAxIC41LTQuMjc4bDkuMjczLTMuMjk2YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuOTk2IDIuOTk1TDEzLjQ1IDMuNjNhLjg0NC44NDQgMCAwIDAtMS4wOC0xLjA4TDMuMSA1Ljg0NmEuOS45IDAgMCAwLS4xOSAxLjYwNGwyLjc4IDEuNzk5IDMuMjc5LTMuMjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNjFMNi43NSAxMC4zMWwxLjc5OSAyLjc3OWEuOS45IDAgMCAwIDEuNjA0LS4xODhsMy4yOTctOS4yNzIgMS40MTMuNTAyLTMuMjk2IDkuMjczYTIuNCAyLjQgMCAwIDEtNC4yNzcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkgMTMuOTA0IDUuMjUgMTAuNzUgMi4wOTYgOC43MWEyLjQgMi40IDAgMCAxIC41LTQuMjc4bDkuMjczLTMuMjk2YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuOTk2IDIuOTk1TDEzLjQ1IDMuNjNhLjg0NC44NDQgMCAwIDAtMS4wOC0xLjA4TDMuMSA1Ljg0NmEuOS45IDAgMCAwLS4xOSAxLjYwNGwyLjc4IDEuNzk5IDMuMjc5LTMuMjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNjFMNi43NSAxMC4zMWwxLjc5OSAyLjc3OWEuOS45IDAgMCAwIDEuNjA0LS4xODhsMy4yOTctOS4yNzIgMS40MTMuNTAyLTMuMjk2IDkuMjczYTIuNCAyLjQgMCAwIDEtNC4yNzcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOFYxMDRhNDgsNDgsMCwwLDEsNDEuNjEtNDcuNTZBODMuODUsODMuODUsMCwwLDEsMTc4LDU2YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI1LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOFYxMDRhNDgsNDgsMCwwLDEsNDEuNjEtNDcuNTZBODMuODUsODMuODUsMCwwLDEsMTc4LDU2YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI1LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0uNzUtOS41YS43NS43NSAwIDAgMC0xLjUgMHYxLjc1SDUuNWEuNzUuNzUgMCAxIDAgMCAxLjVoMS43NXYxLjc1YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1aDEuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDguNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0uNzUtOS41YS43NS43NSAwIDAgMC0xLjUgMHYxLjc1SDUuNWEuNzUuNzUgMCAxIDAgMCAxLjVoMS43NXYxLjc1YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1aDEuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDguNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE01LjUgNy4yNWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE01LjUgNy4yNWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjUzIDUuNDdhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDggNS40NyA5LjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2bDEuNDcgMS40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDkuMDYgOGwxLjQ3LTEuNDdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkw4IDYuOTR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjUzIDUuNDdhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDggNS40NyA5LjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2bDEuNDcgMS40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDkuMDYgOGwxLjQ3LTEuNDdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkw4IDYuOTR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAxMS45MzdWMTNhLjUuNSAwIDAgMCAuNS41aDdhMS41IDEuNSAwIDAgMCAxLjUtMS41di0uNDAxQTMgMyAwIDAgMSAxMSAxMkg0cS0uMjYgMC0uNS0uMDYzTTIgMTBWM3EwLS4xMDMuMDEtLjIwNGEyIDIgMCAwIDEgLjY3Ni0xLjMwNEEyIDIgMCAwIDEgNCAxaDdhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNINGEyIDIgMCAwIDEtMi0yem0xLjUgMGEuNS41IDAgMCAwIC41LjVoN0ExLjUgMS41IDAgMCAwIDEyLjUgOVY0cTAtLjE1Ni0uMDMtLjMwMkExLjUgMS41IDAgMCAwIDExIDIuNUg0YS41LjUgMCAwIDAtLjUuNXptMi00Ljc1YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuNzUuNzUgMCAwIDEtLjc1LS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAxMS45MzdWMTNhLjUuNSAwIDAgMCAuNS41aDdhMS41IDEuNSAwIDAgMCAxLjUtMS41di0uNDAxQTMgMyAwIDAgMSAxMSAxMkg0cS0uMjYgMC0uNS0uMDYzTTIgMTBWM3EwLS4xMDMuMDEtLjIwNGEyIDIgMCAwIDEgLjY3Ni0xLjMwNEEyIDIgMCAwIDEgNCAxaDdhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNINGEyIDIgMCAwIDEtMi0yem0xLjUgMGEuNS41IDAgMCAwIC41LjVoN0ExLjUgMS41IDAgMCAwIDEyLjUgOVY0cTAtLjE1Ni0uMDMtLjMwMkExLjUgMS41IDAgMCAwIDExIDIuNUg0YS41LjUgMCAwIDAtLjUuNXptMi00Ljc1YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuNzUuNzUgMCAwIDEtLjc1LS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxLjVhMyAzIDAgMCAxIDMgM3Y4LjU0NmExLjQ1NCAxLjQ1NCAwIDAgMS0yLjQxMSAxLjA5NEw4IDExbC0zLjU4OSAzLjE0QTEuNDU0IDEuNDU0IDAgMCAxIDIgMTMuMDQ2VjQuNWEzIDMgMCAwIDEgMy0zeiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxLjVhMyAzIDAgMCAxIDMgM3Y4LjU0NmExLjQ1NCAxLjQ1NCAwIDAgMS0yLjQxMSAxLjA5NEw4IDExbC0zLjU4OSAzLjE0QTEuNDU0IDEuNDU0IDAgMCAxIDIgMTMuMDQ2VjQuNWEzIDMgMCAwIDEgMy0zeiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOSAxNC4zMTVhMS4zOCAxLjM4IDAgMCAxLTIuNTQyLS45ODRMNy4wNyAxMEgzLjEzYTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAybC41IDd6bTQuMzUyLTUuNzYyYS43NS43NSAwIDEgMCAxLjQ5Ni0uMTA2bC0uNS03YS43NS43NSAwIDAgMC0xLjQ5Ni4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOSAxNC4zMTVhMS4zOCAxLjM4IDAgMCAxLTIuNTQyLS45ODRMNy4wNyAxMEgzLjEzYTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAybC41IDd6bTQuMzUyLTUuNzYyYS43NS43NSAwIDEgMCAxLjQ5Ni0uMTA2bC0uNS03YS43NS43NSAwIDAgMC0xLjQ5Ni4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMWE3IDcgMCAxIDAgMCAxNEE3IDcgMCAwIDAgOCAxTTYuMDMgNi43MmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDIuNSAyLjVhLjc1Ljc1IDAgMCAwIDEuMDYgMGwyLjUtMi41YS43NS43NSAwIDEgMC0xLjA2LTEuMDZMOCA4LjY5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMWE3IDcgMCAxIDAgMCAxNEE3IDcgMCAwIDAgOCAxTTYuMDMgNi43MmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDIuNSAyLjVhLjc1Ljc1IDAgMCAwIDEuMDYgMGwyLjUtMi41YS43NS43NSAwIDEgMC0xLjA2LTEuMDZMOCA4LjY5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNDUyIDYuODY0IDEuMTMtMi4xNzNhMzIgMzIgMCAwIDEgMS44NzItMy4wOTVjLjk2NCAxLjA0NSAxLjkwNiAyLjMgMi42MTIgMy42MjIuNzQ4IDEuNDAyIDEuMTg0IDIuNzg5IDEuMTg0IDQuMDMyIDAgMS40MjctLjkwNCAyLjgzLTIuMTUzIDMuNjEzcS4wODgtLjM5OC4wOS0uODYzYzAtMS4yNTUtLjY3NC0yLjMzNi0xLjE0My0yLjk2M2E5IDkgMCAwIDAtMS4wMS0xLjEyNWwtLjAyNC0uMDItLjAwOC0uMDA4TDkgNy44OGwtLjAwMS0uMDAxQzguOTk2IDcuODggOC45OTYgNy44NzggOCA5YTcgNyAwIDAgMCAuOTg0IDEuMTMzYy4zNy41MzQuNzA0IDEuMi43MDQgMS44NjcgMCAuNzctLjMxMyAxLjI3Ni0uNjE4IDEuNTg3LS4xNTkuMTYyLS4yNzkuMzgtLjMxNC42YS44LjggMCAwIDAgMCAuMjY0cS4wMTcuMDk1LjA2LjE4MmMuMTEzLjIyNS4zNDMuMzcuNTk0LjM1IDIuODM2LS4yMzUgNS4zNC0yLjg3IDUuMzQtNS43MzMgMC0zLjE0OS0yLjE3Ny02LjUzOC00LjM1Ny04Ljg0NUExLjMgMS4zIDAgMCAwIDkuNDM1IDAgMS4zMiAxLjMyIDAgMCAwIDguMzUuNTU2IDM0IDM0IDAgMCAwIDYuMjUgNGwtLjk1NS0xLjMzNy0uMDE2LS4wMjJhLjk4Ni45ODYgMCAwIDAtMS41NzMuMDA0QzIuNjIgNC4xMjMgMS4yNSA2LjI0OSAxLjI1IDkuMjVjMCAyLjg2MyAyLjUwNCA1LjQ5OCA1LjM0IDUuNzMzLjI1LjAyLjQ4MS0uMTI1LjU5My0uMzVhLjcuNyAwIDAgMCAuMDYtLjE4Mi44LjggMCAwIDAgLjAwMS0uMjYzIDEuMTUgMS4xNSAwIDAgMC0uMzE0LS42MDFjLS4zMDUtLjMxLS42MTctLjgxNy0uNjE3LTEuNTg3IDAtLjY2Ni4zMzMtMS4zMzMuNzAzLTEuODY3bC4wOS0uMTI4QzcuNTQ0IDkuNDA1IDggOSA4IDlsLS45OTctMS4xMkg3bC0uMDAzLjAwMy0uMDA4LjAwNy0uMDI0LjAyMS0uMDczLjA3YTkgOSAwIDAgMC0uOTM3IDEuMDU2Yy0uNDcuNjI2LTEuMTQzIDEuNzA3LTEuMTQzIDIuOTYyIDAgLjMxLjAzMy41OTguMDkuODYzQzMuNjU0IDEyLjA4IDIuNzUgMTAuNjc3IDIuNzUgOS4yNWMwLTIuMTcxLjg0Ny0zLjgxMiAxLjc0NS01LjEyNmwuNTM0Ljc0OHpNOCA5bC45OTctMS4xMjFMOCA2Ljk5M2wtLjk5Ny44ODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNDUyIDYuODY0IDEuMTMtMi4xNzNhMzIgMzIgMCAwIDEgMS44NzItMy4wOTVjLjk2NCAxLjA0NSAxLjkwNiAyLjMgMi42MTIgMy42MjIuNzQ4IDEuNDAyIDEuMTg0IDIuNzg5IDEuMTg0IDQuMDMyIDAgMS40MjctLjkwNCAyLjgzLTIuMTUzIDMuNjEzcS4wODgtLjM5OC4wOS0uODYzYzAtMS4yNTUtLjY3NC0yLjMzNi0xLjE0My0yLjk2M2E5IDkgMCAwIDAtMS4wMS0xLjEyNWwtLjAyNC0uMDItLjAwOC0uMDA4TDkgNy44OGwtLjAwMS0uMDAxQzguOTk2IDcuODggOC45OTYgNy44NzggOCA5YTcgNyAwIDAgMCAuOTg0IDEuMTMzYy4zNy41MzQuNzA0IDEuMi43MDQgMS44NjcgMCAuNzctLjMxMyAxLjI3Ni0uNjE4IDEuNTg3LS4xNTkuMTYyLS4yNzkuMzgtLjMxNC42YS44LjggMCAwIDAgMCAuMjY0cS4wMTcuMDk1LjA2LjE4MmMuMTEzLjIyNS4zNDMuMzcuNTk0LjM1IDIuODM2LS4yMzUgNS4zNC0yLjg3IDUuMzQtNS43MzMgMC0zLjE0OS0yLjE3Ny02LjUzOC00LjM1Ny04Ljg0NUExLjMgMS4zIDAgMCAwIDkuNDM1IDAgMS4zMiAxLjMyIDAgMCAwIDguMzUuNTU2IDM0IDM0IDAgMCAwIDYuMjUgNGwtLjk1NS0xLjMzNy0uMDE2LS4wMjJhLjk4Ni45ODYgMCAwIDAtMS41NzMuMDA0QzIuNjIgNC4xMjMgMS4yNSA2LjI0OSAxLjI1IDkuMjVjMCAyLjg2MyAyLjUwNCA1LjQ5OCA1LjM0IDUuNzMzLjI1LjAyLjQ4MS0uMTI1LjU5My0uMzVhLjcuNyAwIDAgMCAuMDYtLjE4Mi44LjggMCAwIDAgLjAwMS0uMjYzIDEuMTUgMS4xNSAwIDAgMC0uMzE0LS42MDFjLS4zMDUtLjMxLS42MTctLjgxNy0uNjE3LTEuNTg3IDAtLjY2Ni4zMzMtMS4zMzMuNzAzLTEuODY3bC4wOS0uMTI4QzcuNTQ0IDkuNDA1IDggOSA4IDlsLS45OTctMS4xMkg3bC0uMDAzLjAwMy0uMDA4LjAwNy0uMDI0LjAyMS0uMDczLjA3YTkgOSAwIDAgMC0uOTM3IDEuMDU2Yy0uNDcuNjI2LTEuMTQzIDEuNzA3LTEuMTQzIDIuOTYyIDAgLjMxLjAzMy41OTguMDkuODYzQzMuNjU0IDEyLjA4IDIuNzUgMTAuNjc3IDIuNzUgOS4yNWMwLTIuMTcxLjg0Ny0zLjgxMiAxLjc0NS01LjEyNmwuNTM0Ljc0OHpNOCA5bC45OTctMS4xMjFMOCA2Ljk5M2wtLjk5Ny44ODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLTkuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNOCA3Ljc1YS43NS43NSAwIDAgMSAuNzUuNzVWMTFhLjc1Ljc1IDAgMCAxLTEuNSAwVjguNUEuNzUuNzUgMCAwIDEgOCA3Ljc1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLTkuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNOCA3Ljc1YS43NS43NSAwIDAgMSAuNzUuNzVWMTFhLjc1Ljc1IDAgMCAxLTEuNSAwVjguNUEuNzUuNzUgMCAwIDEgOCA3Ljc1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjYgMTUuMTA5YTQgNCAwIDAgMCAzLjQ4IDBsLjEzLS4wNjNhMiAyIDAgMCAwIDEuMTMtMS44di0uNDY4YzAtMS4zNTIuNzc2LTIuNTU3IDEuNTQtMy42NzNhNS41IDUuNSAwIDEgMC05LjA4IDBDNC4yMjQgMTAuMjIxIDUgMTEuNDI2IDUgMTIuNzc5di40NjdhMiAyIDAgMCAwIDEuMTMgMS44MDF6bTIuODI4LTEuMzUuMTMtLjA2NGEuNS41IDAgMCAwIC4yODItLjQ1di0uNDY3cTAtLjI1NS4wMjUtLjVhNS4zMyA1LjMzIDAgMCAxLTMuMDUgMHEuMDI0LjI0NS4wMjUuNXYuNDY3YS41LjUgMCAwIDAgLjI4Mi40NWwuMTMuMDYzYTIuNSAyLjUgMCAwIDAgMi4xNzYgMG0tNC4zOS01LjUwMWMuMzk0LjU3Ni44OTEgMS4zMDIgMS4yNjMgMi4xNDhhMy43OSAzLjc5IDAgMCAwIDQuMDc4IDBjLjM3Mi0uODQ2Ljg2OS0xLjU3MiAxLjI2NC0yLjE0OGE0IDQgMCAxIDAtNi42MDUgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTggMy41QS43NS43NSAwIDAgMCA4IDVhMSAxIDAgMCAxIDEgMSAuNzUuNzUgMCAwIDAgMS41IDBBMi41IDIuNSAwIDAgMCA4IDMuNSIvPjwvZz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjYgMTUuMTA5YTQgNCAwIDAgMCAzLjQ4IDBsLjEzLS4wNjNhMiAyIDAgMCAwIDEuMTMtMS44di0uNDY4YzAtMS4zNTIuNzc2LTIuNTU3IDEuNTQtMy42NzNhNS41IDUuNSAwIDEgMC05LjA4IDBDNC4yMjQgMTAuMjIxIDUgMTEuNDI2IDUgMTIuNzc5di40NjdhMiAyIDAgMCAwIDEuMTMgMS44MDF6bTIuODI4LTEuMzUuMTMtLjA2NGEuNS41IDAgMCAwIC4yODItLjQ1di0uNDY3cTAtLjI1NS4wMjUtLjVhNS4zMyA1LjMzIDAgMCAxLTMuMDUgMHEuMDI0LjI0NS4wMjUuNXYuNDY3YS41LjUgMCAwIDAgLjI4Mi40NWwuMTMuMDYzYTIuNSAyLjUgMCAwIDAgMi4xNzYgMG0tNC4zOS01LjUwMWMuMzk0LjU3Ni44OTEgMS4zMDIgMS4yNjMgMi4xNDhhMy43OSAzLjc5IDAgMCAwIDQuMDc4IDBjLjM3Mi0uODQ2Ljg2OS0xLjU3MiAxLjI2NC0yLjE0OGE0IDQgMCAxIDAtNi42MDUgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTggMy41QS43NS43NSAwIDAgMCA4IDVhMSAxIDAgMCAxIDEgMSAuNzUuNzUgMCAwIDAgMS41IDBBMi41IDIuNSAwIDAgMCA4IDMuNSIvPjwvZz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjMxMyA3LjQ4OCA5IDcuNjUzdjUuMzdhLjUuNSAwIDAgMS0uMzUzLjQ3OGwtMS42Mi40OTgtLjAwNi4wMDFoLS4wMDhsLS4wMDctLjAwNi0uMDA1LS4wMDd2LS4wMDNMNyAxMy45NzlWNy42NTNsLTEuMzEzLS4xNjVhMS41IDEuNSAwIDAgMS0xLjI3MS0xLjE0NGwtLjU4OC0yLjVBMS41IDEuNSAwIDAgMSA1LjI4OCAyaDUuNDI0YTEuNSAxLjUgMCAwIDEgMS40NiAxLjg0NGwtLjU4OCAyLjVhMS41IDEuNSAwIDAgMS0xLjI3MSAxLjE0NG0yLjczMS0uOEEzIDMgMCAwIDEgMTAuNSA4Ljk3NnY0LjA0NmEyIDIgMCAwIDEtMS40MTIgMS45MTFsLTEuNjIuNDk5QTEuNTIgMS41MiAwIDAgMSA1LjUgMTMuOTc5VjguOTc3YTMgMyAwIDAgMS0yLjU0NC0yLjI5bC0uNTg4LTIuNUEzIDMgMCAwIDEgNS4yODguNWg1LjQyNGEzIDMgMCAwIDEgMi45MiAzLjY4N3pNNi43NSAzLjVhLjc1Ljc1IDAgMCAwIDAgMS41aDIuNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjMxMyA3LjQ4OCA5IDcuNjUzdjUuMzdhLjUuNSAwIDAgMS0uMzUzLjQ3OGwtMS42Mi40OTgtLjAwNi4wMDFoLS4wMDhsLS4wMDctLjAwNi0uMDA1LS4wMDd2LS4wMDNMNyAxMy45NzlWNy42NTNsLTEuMzEzLS4xNjVhMS41IDEuNSAwIDAgMS0xLjI3MS0xLjE0NGwtLjU4OC0yLjVBMS41IDEuNSAwIDAgMSA1LjI4OCAyaDUuNDI0YTEuNSAxLjUgMCAwIDEgMS40NiAxLjg0NGwtLjU4OCAyLjVhMS41IDEuNSAwIDAgMS0xLjI3MSAxLjE0NG0yLjczMS0uOEEzIDMgMCAwIDEgMTAuNSA4Ljk3NnY0LjA0NmEyIDIgMCAwIDEtMS40MTIgMS45MTFsLTEuNjIuNDk5QTEuNTIgMS41MiAwIDAgMSA1LjUgMTMuOTc5VjguOTc3YTMgMyAwIDAgMS0yLjU0NC0yLjI5bC0uNTg4LTIuNUEzIDMgMCAwIDEgNS4yODguNWg1LjQyNGEzIDMgMCAwIDEgMi45MiAzLjY4N3pNNi43NSAzLjVhLjc1Ljc1IDAgMCAwIDAgMS41aDIuNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMTI1IDdhNC44NzUgNC44NzUgMCAxIDEgOS43NSAwYzAgMS44NjQtLjc3NCAyLjk2Mi0xLjY4NyAzLjgxNS0uMzg1LjM2LS43NjUuNjUtMS4xNy45NThsLS4zNjUuMjhhOSA5IDAgMCAwLS43ODEuNjY4Yy0uMjQzLjI0LS41MzUuNTc1LS43MyAxLjAxYS4zNC4zNCAwIDAgMS0uMDk1LjEzMmwtLjAxNS4wMDhzLS4wMS4wMDQtLjAzMi4wMDRsLS4wMzItLjAwMy0uMDE1LS4wMDlhLjM0LjM0IDAgMCAxLS4wOTUtLjEzMSAzLjQgMy40IDAgMCAwLS43My0xLjAxIDkgOSAwIDAgMC0uNzgxLS42NjhxLS4xODctLjE0NS0uMzY2LS4yOGExNSAxNSAwIDAgMS0xLjE2OS0uOTZDMy45IDkuOTYzIDMuMTI1IDguODY1IDMuMTI1IDdNMTQuNSA3YzAgMy40LTIuMDY2IDQuOTc1LTMuNTMgNi4wOTEtLjYzNC40ODUtMS4xNTYuODgyLTEuMzQ1IDEuMzA1QzkuMzU1IDE1IDguNzg4IDE1LjUgOCAxNS41cy0xLjM1NC0uNS0xLjYyNS0xLjEwNGMtLjE5LS40MjMtLjcxLS44Mi0xLjM0Ni0xLjMwNUMzLjU2NiAxMS45NzUgMS41IDEwLjM5OSAxLjUgN2E2LjUgNi41IDAgMCAxIDEzIDBtLTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME0xMSA3YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMTI1IDdhNC44NzUgNC44NzUgMCAxIDEgOS43NSAwYzAgMS44NjQtLjc3NCAyLjk2Mi0xLjY4NyAzLjgxNS0uMzg1LjM2LS43NjUuNjUtMS4xNy45NThsLS4zNjUuMjhhOSA5IDAgMCAwLS43ODEuNjY4Yy0uMjQzLjI0LS41MzUuNTc1LS43MyAxLjAxYS4zNC4zNCAwIDAgMS0uMDk1LjEzMmwtLjAxNS4wMDhzLS4wMS4wMDQtLjAzMi4wMDRsLS4wMzItLjAwMy0uMDE1LS4wMDlhLjM0LjM0IDAgMCAxLS4wOTUtLjEzMSAzLjQgMy40IDAgMCAwLS43My0xLjAxIDkgOSAwIDAgMC0uNzgxLS42NjhxLS4xODctLjE0NS0uMzY2LS4yOGExNSAxNSAwIDAgMS0xLjE2OS0uOTZDMy45IDkuOTYzIDMuMTI1IDguODY1IDMuMTI1IDdNMTQuNSA3YzAgMy40LTIuMDY2IDQuOTc1LTMuNTMgNi4wOTEtLjYzNC40ODUtMS4xNTYuODgyLTEuMzQ1IDEuMzA1QzkuMzU1IDE1IDguNzg4IDE1LjUgOCAxNS41cy0xLjM1NC0uNS0xLjYyNS0xLjEwNGMtLjE5LS40MjMtLjcxLS44Mi0xLjM0Ni0xLjMwNUMzLjU2NiAxMS45NzUgMS41IDEwLjM5OSAxLjUgN2E2LjUgNi41IDAgMCAxIDEzIDBtLTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME0xMSA3YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMi4yNTV2LS4wMWMuMDAzLS4wMy4wMTMtLjE1Ny0uMzYxLS4zNUM5LjcwMyAxLjY2OCA4Ljk2NyAxLjUgOCAxLjVzLTEuNzAzLjE2OS0yLjEzOC4zOTRjLS4zNzUuMTk0LS4zNjUuMzItLjM2Mi4zNTF2LjAxYy0uMDAzLjAzLS4wMTMuMTU3LjM2Mi4zNUM2LjI5NyAyLjgzMiA3LjAzMyAzIDggM3MxLjcwMy0uMTY5IDIuMTM5LS4zOTRjLjM3NC0uMTk0LjM2NC0uMzIuMzYxLS4zNTFNMTIgMi4yNWMwIC43MzgtLjQzMyAxLjI5NC0xLjEzNiAxLjY2OWwuODI1IDIuMzFjMS41NTMuNDggMi41NjEgMS4zMiAyLjU2MSAyLjUyIDAgMS44NTQtMi40MDIgMi44NDgtNS41IDIuOTg1VjE1YS43NS43NSAwIDAgMS0xLjUgMHYtMy4yNjZjLTMuMDk4LS4xMzYtNS41LTEuMTMxLTUuNS0yLjk4NCAwLTEuMiAxLjAwOC0yLjA0IDIuNTYxLTIuNTJsLjgyNS0yLjMxMUM0LjQzMyAzLjU0NCA0IDIuOTg4IDQgMi4yNSA0IC43NSA1Ljc5IDAgOCAwczQgLjc1IDQgMi4yNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMi4yNTV2LS4wMWMuMDAzLS4wMy4wMTMtLjE1Ny0uMzYxLS4zNUM5LjcwMyAxLjY2OCA4Ljk2NyAxLjUgOCAxLjVzLTEuNzAzLjE2OS0yLjEzOC4zOTRjLS4zNzUuMTk0LS4zNjUuMzItLjM2Mi4zNTF2LjAxYy0uMDAzLjAzLS4wMTMuMTU3LjM2Mi4zNUM2LjI5NyAyLjgzMiA3LjAzMyAzIDggM3MxLjcwMy0uMTY5IDIuMTM5LS4zOTRjLjM3NC0uMTk0LjM2NC0uMzIuMzYxLS4zNTFNMTIgMi4yNWMwIC43MzgtLjQzMyAxLjI5NC0xLjEzNiAxLjY2OWwuODI1IDIuMzFjMS41NTMuNDggMi41NjEgMS4zMiAyLjU2MSAyLjUyIDAgMS44NTQtMi40MDIgMi44NDgtNS41IDIuOTg1VjE1YS43NS43NSAwIDAgMS0xLjUgMHYtMy4yNjZjLTMuMDk4LS4xMzYtNS41LTEuMTMxLTUuNS0yLjk4NCAwLTEuMiAxLjAwOC0yLjA0IDIuNTYxLTIuNTJsLjgyNS0yLjMxMUM0LjQzMyAzLjU0NCA0IDIuOTg4IDQgMi4yNSA0IC43NSA1Ljc5IDAgOCAwczQgLjc1IDQgMi4yNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMSAxLjY4NWExLjM4IDEuMzggMCAwIDEgMi41NDIuOTg0TDguOTMgNmgzLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTQgNCA3ek0yLjc0OSA3LjQ0N2EuNzUuNzUgMCAxIDAtMS40OTYuMTA2bC41IDdhLjc1Ljc1IDAgMCAwIDEuNDk2LS4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMSAxLjY4NWExLjM4IDEuMzggMCAwIDEgMi41NDIuOTg0TDguOTMgNmgzLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTQgNCA3ek0yLjc0OSA3LjQ0N2EuNzUuNzUgMCAxIDAtMS40OTYuMTA2bC41IDdhLjc1Ljc1IDAgMCAwIDEuNDk2LS4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgME04Ljc1IDQuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdi4zMzlhMi41IDIuNSAwIDAgMC0xLjAwNy40NyAxLjk1IDEuOTUgMCAwIDAtLjc0IDEuNTQ2YzAgLjc2NC40NzQgMS4yNjUuOTQgMS41NTkuNDU2LjI4NyAxLjAwNy40NDggMS40NDguNTQ3LjQ2Mi4xMDIuODQzLjE5MSAxLjExOC4zNDEuMjI4LjEyNS4yNzUuMjI0LjI3NS4zNzYgMCAuMTAyLS4wNC4yMTctLjI0OC4zNDEtLjIyNC4xMzUtLjU3Ny4yMjktLjk4Mi4yMjktLjM0NCAwLS42ODMtLjExNC0uOTUzLS4yOS0uMjgxLS4xODQtLjQyLS4zODgtLjQ1Ny0uNTA2YS43NS43NSAwIDEgMC0xLjQzLjQ1MmMuMTcxLjU0My41OTEgMSAxLjA2OCAxLjMxLjI4NC4xODUuNjEyLjMzNS45NjguNDI5di4zNTdhLjc1Ljc1IDAgMCAwIDEuNSAwdi0uMzEzYy4zNzUtLjA2Ny43NC0uMTkgMS4wNTgtLjM4Mi41My0uMzE5Ljk3Ni0uODY0Ljk3Ni0xLjYyNyAwLS44NjQtLjUxLTEuMzk0LTEuMDU1LTEuNjkyLS40NzgtLjI2LTEuMDU2LS4zODktMS40Ni0uNDc4bC0uMDUzLS4wMTJjLS4zODYtLjA4Ni0uNzM2LS4yMDItLjk3My0uMzUyLS4yMjctLjE0Mi0uMjQtLjIzNi0uMjQtLjI5YS40NS40NSAwIDAgMSAuMTgtLjM3NWMuMTM0LS4xMDguNDAzLS4yMjcuODctLjIyNy40NyAwIC43NDIuMTEuOS4yMThhLjgzLjgzIDAgMCAxIC4zMTYuNDEuNzUuNzUgMCAwIDAgMS40MDctLjUyIDIuMzMgMi4zMyAwIDAgMC0uODc4LTEuMTMgMi43IDIuNyAwIDAgMC0xLjA0OC0uNDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgME04Ljc1IDQuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdi4zMzlhMi41IDIuNSAwIDAgMC0xLjAwNy40NyAxLjk1IDEuOTUgMCAwIDAtLjc0IDEuNTQ2YzAgLjc2NC40NzQgMS4yNjUuOTQgMS41NTkuNDU2LjI4NyAxLjAwNy40NDggMS40NDguNTQ3LjQ2Mi4xMDIuODQzLjE5MSAxLjExOC4zNDEuMjI4LjEyNS4yNzUuMjI0LjI3NS4zNzYgMCAuMTAyLS4wNC4yMTctLjI0OC4zNDEtLjIyNC4xMzUtLjU3Ny4yMjktLjk4Mi4yMjktLjM0NCAwLS42ODMtLjExNC0uOTUzLS4yOS0uMjgxLS4xODQtLjQyLS4zODgtLjQ1Ny0uNTA2YS43NS43NSAwIDEgMC0xLjQzLjQ1MmMuMTcxLjU0My41OTEgMSAxLjA2OCAxLjMxLjI4NC4xODUuNjEyLjMzNS45NjguNDI5di4zNTdhLjc1Ljc1IDAgMCAwIDEuNSAwdi0uMzEzYy4zNzUtLjA2Ny43NC0uMTkgMS4wNTgtLjM4Mi41My0uMzE5Ljk3Ni0uODY0Ljk3Ni0xLjYyNyAwLS44NjQtLjUxLTEuMzk0LTEuMDU1LTEuNjkyLS40NzgtLjI2LTEuMDU2LS4zODktMS40Ni0uNDc4bC0uMDUzLS4wMTJjLS4zODYtLjA4Ni0uNzM2LS4yMDItLjk3My0uMzUyLS4yMjctLjE0Mi0uMjQtLjIzNi0uMjQtLjI5YS40NS40NSAwIDAgMSAuMTgtLjM3NWMuMTM0LS4xMDguNDAzLS4yMjcuODctLjIyNy40NyAwIC43NDIuMTEuOS4yMThhLjgzLjgzIDAgMCAxIC4zMTYuNDEuNzUuNzUgMCAwIDAgMS40MDctLjUyIDIuMzMgMi4zMyAwIDAgMC0uODc4LTEuMTMgMi43IDIuNyAwIDAgMC0xLjA0OC0uNDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI5MyAwYy4zOSAwIC43MDcuMzE3LjcwNy43MDdWMmgxLjI5M2EuNzA3LjcwNyAwIDAgMSAuNSAxLjIwN2wtMS40NiAxLjQ2QTEuMTQgMS4xNCAwIDAgMSAxMy41MyA1aC0xLjQ3TDguNTMgOC41M2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2TDExIDMuOTRWMi40N2MwLS4zMDEuMTItLjU5LjMzMy0uODA0bDEuNDYtMS40NmEuNy43IDAgMCAxIC41LS4yMDdNMi41IDhhNS41IDUuNSAwIDAgMSA2LjU5OC01LjM5Ljc1Ljc1IDAgMCAwIC4yOTgtMS40N0E3IDcgMCAxIDAgMTQuODYgNi42YS43NS43NSAwIDAgMC0xLjQ3LjI5OXEuMTA5LjUzMy4xMSAxLjEwMWE1LjUgNS41IDAgMSAxLTExIDBtNS4zNjQtMi40OTZhLjc1Ljc1IDAgMCAwLS4wOC0xLjQ5OEE0IDQgMCAxIDAgMTEuOTg4IDguM2EuNzUuNzUgMCAwIDAtMS40OTYtLjExMSAyLjUgMi41IDAgMSAxLTIuNjMtMi42ODYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI5MyAwYy4zOSAwIC43MDcuMzE3LjcwNy43MDdWMmgxLjI5M2EuNzA3LjcwNyAwIDAgMSAuNSAxLjIwN2wtMS40NiAxLjQ2QTEuMTQgMS4xNCAwIDAgMSAxMy41MyA1aC0xLjQ3TDguNTMgOC41M2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2TDExIDMuOTRWMi40N2MwLS4zMDEuMTItLjU5LjMzMy0uODA0bDEuNDYtMS40NmEuNy43IDAgMCAxIC41LS4yMDdNMi41IDhhNS41IDUuNSAwIDAgMSA2LjU5OC01LjM5Ljc1Ljc1IDAgMCAwIC4yOTgtMS40N0E3IDcgMCAxIDAgMTQuODYgNi42YS43NS43NSAwIDAgMC0xLjQ3LjI5OXEuMTA5LjUzMy4xMSAxLjEwMWE1LjUgNS41IDAgMSAxLTExIDBtNS4zNjQtMi40OTZhLjc1Ljc1IDAgMCAwLS4wOC0xLjQ5OEE0IDQgMCAxIDAgMTEuOTg4IDguM2EuNzUuNzUgMCAwIDAtMS40OTYtLjExMSAyLjUgMi41IDAgMSAxLTIuNjMtMi42ODYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLjk3LTUuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMi41LTIuNWEuNzUuNzUgMCAwIDAtMS4wNiAwbC0yLjUgMi41YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMOCA3LjMxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLjk3LTUuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMi41LTIuNWEuNzUuNzUgMCAwIDAtMS4wNiAwbC0yLjUgMi41YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMOCA3LjMxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjgzNiAxLjVhLjY2NC42NjQgMCAwIDEgLjQ5MSAxLjExbC0uMzU0LjM5SDQuMDI3bC0uMzU0LS4zOWEuNjY0LjY2NCAwIDAgMSAuNDktMS4xMXptLTYuNDQ1IDMgMi4xMjQgMi4zMzZhLjUuNSAwIDAgMCAuMzcuMTY0aC4yM2EuNS41IDAgMCAwIC4zNy0uMTY0TDEwLjYxIDQuNXptLjY1MiAyLjk0N0wzLjUgNC42NXYxLjg1MmEuNS41IDAgMCAwIC4xMjMuMzI4TDQuODcgOC4yNjZhNC41IDQuNSAwIDAgMSAxLjE3Mi0uODJtLTIuMDggMi4wNjEtMS40Ny0xLjY5M0EyIDIgMCAwIDEgMiA2LjUwMlYyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjQuNTAyYTIgMiAwIDAgMS0uNDkgMS4zMTJsLTEuNDc0IDEuNjk0YTQuNSA0LjUgMCAxIDEtOC4wNzMgMG03LjE2Ni0xLjI0MmE0LjUgNC41IDAgMCAwLTEuMTcyLS44MkwxMi41IDQuNjV2MS44NTJhLjUuNSAwIDAgMS0uMTIzLjMyOHpNMTEgMTEuNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjgzNiAxLjVhLjY2NC42NjQgMCAwIDEgLjQ5MSAxLjExbC0uMzU0LjM5SDQuMDI3bC0uMzU0LS4zOWEuNjY0LjY2NCAwIDAgMSAuNDktMS4xMXptLTYuNDQ1IDMgMi4xMjQgMi4zMzZhLjUuNSAwIDAgMCAuMzcuMTY0aC4yM2EuNS41IDAgMCAwIC4zNy0uMTY0TDEwLjYxIDQuNXptLjY1MiAyLjk0N0wzLjUgNC42NXYxLjg1MmEuNS41IDAgMCAwIC4xMjMuMzI4TDQuODcgOC4yNjZhNC41IDQuNSAwIDAgMSAxLjE3Mi0uODJtLTIuMDggMi4wNjEtMS40Ny0xLjY5M0EyIDIgMCAwIDEgMiA2LjUwMlYyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjQuNTAyYTIgMiAwIDAgMS0uNDkgMS4zMTJsLTEuNDc0IDEuNjk0YTQuNSA0LjUgMCAxIDEtOC4wNzMgMG03LjE2Ni0xLjI0MmE0LjUgNC41IDAgMCAwLTEuMTcyLS44MkwxMi41IDQuNjV2MS44NTJhLjUuNSAwIDAgMS0uMTIzLjMyOHpNMTEgMTEuNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
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
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.17906 295.405 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.17906 295.405 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.17906 295.405 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.17906 295.405 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.0000347234 23.6829 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.0000347234 23.6829 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.0000347234 23.6829 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.0000347234 23.6829 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.180999 149.614 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.180999 149.614 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.180999 149.614 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.180999 149.614 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
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
  color: oklch(0.8 0.08 292.489);
}

html[saved-theme="dark"] body h2 {
  color: oklch(0.8 0.08 352.489);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h3 {
  color: oklch(0.8 0.08 52.4895);
}

html[saved-theme="dark"] body h4 {
  color: oklch(0.8 0.08 112.489);
}

html[saved-theme="dark"] body h5 {
  color: oklch(0.8 0.08 172.49);
}

html[saved-theme="dark"] body h6 {
  color: oklch(0.8 0.08 232.49);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(53, 49, 63);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
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
  border-bottom-color: oklch(0.8 0.06 292.489);
  border-left-color: oklch(0.8 0.06 292.489);
  border-right-color: oklch(0.8 0.06 292.489);
  border-top-color: oklch(0.8 0.06 292.489);
  color: oklch(0.8 0.06 292.489);
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
  margin-bottom: 16px;
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(217, 217, 217);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsl(258 25% 67% / 0.3) !important;
  --background-modifier-border: hsl(258 25% 88%) !important;
  --background-modifier-border-focus: hsl(258 25% 74%) !important;
  --background-modifier-border-hover: hsl(258 25% 83%) !important;
  --background-modifier-hover: hsl(258 25% 67% / 0.18) !important;
  --background-primary-alt: hsl(258 25% 98%) !important;
  --background-secondary: hsl(258 25% 97%) !important;
  --background-secondary-alt: hsl(258 25% 99%) !important;
  --bases-cards-cover-background: hsl(258 25% 98%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258 25% 86%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)) !important;
  --bases-embed-border-color: hsl(258 25% 86%) !important;
  --bases-embed-border-radius: 7px !important;
  --bases-embed-radius: 7px !important;
  --bases-table-border-color: hsl(258 25% 86%) !important;
  --bases-table-cell-background-disabled: hsl(258 25% 98%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258 25% 74%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-group-background: hsl(258 25% 98%) !important;
  --bases-table-header-background-hover: hsl(258 25% 67% / 0.18) !important;
  --bases-table-header-color: #222222 !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-summary-background-hover: hsl(258 25% 67% / 0.18) !important;
  --blockquote-background-color: hsl(258, 88%, 66%, 0.1) !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: 0;
  --callout-radius: 7px;
  --callout-title-padding: 0.5em 1em;
  --callout-title-weight: 700;
  --canvas-dot-pattern: hsl(258 25% 88%) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-border-color-hover: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: #222222 !important;
  --checklist-done-decoration: none !important;
  --code-background: transparent !important;
  --code-border-color: hsl(258 25% 86%) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsl(258 25% 67% / 0.18) !important;
  --code-radius: 7px !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --collapse-icon-color-collapsed: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --color-base-05: hsl(258 25% 99%) !important;
  --color-base-10: hsl(258 25% 98%) !important;
  --color-base-100: hsl(258 25% 13%) !important;
  --color-base-20: hsl(258 25% 96%) !important;
  --color-base-25: hsl(258 25% 89%) !important;
  --color-base-30: hsl(258 25% 88%) !important;
  --color-base-35: hsl(258 25% 83%) !important;
  --color-base-40: hsl(258 25% 74%) !important;
  --color-base-50: hsl(258 25% 67%) !important;
  --color-base-60: hsl(258 25% 44%) !important;
  --color-base-70: hsl(258 25% 36%) !important;
  --divider-color: hsl(258 25% 88%) !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --dropdown-background-hover: hsl(258 25% 94%) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid hsl(258 25% 86%) !important;
  --embed-border-end: 1px solid hsl(258 25% 86%) !important;
  --embed-border-start: 1px solid hsl(258 25% 86%) !important;
  --embed-border-top: 1px solid hsl(258 25% 86%) !important;
  --embed-padding: 0 !important;
  --file-header-border: 0 !important;
  --footnote-divider-color: hsl(258 25% 88%) !important;
  --footnote-input-background-active: hsl(258 25% 67% / 0.18) !important;
  --frame-right-space: 81px !important;
  --graph-line: hsl(258 25% 83%) !important;
  --graph-node: hsl(258 25% 36%) !important;
  --graph-node-unresolved: hsl(258 25% 67%) !important;
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
  --highlight: hsl(258 25% 67% / 0.18) !important;
  --hr-color: hsl(258 25% 86%) !important;
  --i-0: hsl(258 25% 98%) !important;
  --i-1: hsl(258 25% 97%) !important;
  --i-2: hsl(258 25% 94%) !important;
  --i-3: hsl(258 25% 90%) !important;
  --i-4: hsl(258 25% 88%) !important;
  --i-5: hsl(258 25% 86%) !important;
  --i-6: hsl(258 25% 84%) !important;
  --i-7: hsl(258 25% 82%) !important;
  --i-8: hsl(258 25% 80%) !important;
  --i-active-line-color: hsl(258, 88%, 66%) !important;
  --i-active-line-highlight: oklch(from hsl(258, 88%, 66%) 0.65 c h / 0.1) !important;
  --i-active-line-highlight-inactive: oklch(from oklch(from hsl(258, 88%, 66%) 0.65 c h / 0.1) l c h / 0.05) !important;
  --i-border-radius: 8px !important;
  --i-bullet-color: hsl(258, 88%, 66%) !important;
  --i-bullet-color-collapsed: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --i-bullet-color-hover: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --i-card-layout-border: hsl(258 25% 82%) !important;
  --i-card-radius: 8px !important;
  --i-card-radius-macos: 10px !important;
  --i-checkbox-shadow-hover: hsl(258 25% 94%) !important;
  --i-dk-custom-layout-s: 12% !important;
  --i-dk-folder-bg-accent: hsl(258, 88%, 66%) !important;
  --i-dk-folder-name-accent: hsl(258, 88%, 66%) !important;
  --i-dk-h1-h: 0 !important;
  --i-dk-h6-h: 300 !important;
  --i-dk-heading-accent: hsl(258, 88%, 66%) !important;
  --i-dk-heading-highlighted-padding: 0 !important;
  --i-dk-layout-border-l: 8% !important;
  --i-dk-layout-l: 8% !important;
  --i-editor-border: hsl(258 25% 86%) !important;
  --i-editor-border-hover: hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)) !important;
  --i-h1-size: 1.5em !important;
  --i-h2-size: 1.4em !important;
  --i-h3-size: 1.3em !important;
  --i-h4-size: 1.2em !important;
  --i-h5-size: 1.1em !important;
  --i-h6-size: 1em !important;
  --i-hr-style: solid !important;
  --i-image-border-color: hsl(258 25% 86%) !important;
  --i-image-border-style: solid !important;
  --i-image-border-width: 0 !important;
  --i-image-padding: 0 !important;
  --i-inline-title-accent-bg: oklch(from hsl(258, 88%, 66%) 95% 8% h / 50%) !important;
  --i-inline-title-accent-text-color: oklch(from hsl(258, 88%, 66%) 50% 50% h) !important;
  --i-layout-border-color: hsl(258 25% 80%) !important;
  --i-layout-color: hsl(258 25% 88%) !important;
  --i-link-bg-hover: hsl(258 25% 94%) !important;
  --i-link-underline-color: oklch(from oklch(from hsl(258, 88%, 66%) 50% 35% h) l c h / 0.25) !important;
  --i-link-underline-offset: 0.1em !important;
  --i-link-underline-opacity-multiplier: 1 !important;
  --i-link-underline-style: solid !important;
  --i-lt-border-l: 14% !important;
  --i-lt-custom-layout-s: 25% !important;
  --i-lt-folder-bg-accent: hsl(258, 88%, 66%) !important;
  --i-lt-folder-name-accent: hsl(258, 88%, 66%) !important;
  --i-lt-h1-h: 0 !important;
  --i-lt-h6-h: 300 !important;
  --i-lt-heading-accent: hsl(258, 88%, 66%) !important;
  --i-lt-heading-highlighted-padding: 0 !important;
  --i-lt-l-multiplier: 1 !important;
  --i-lt-layout-border-l: 8% !important;
  --i-lt-layout-l: 12% !important;
  --i-lt-layout-s: 25% !important;
  --i-lt-s: 25% !important;
  --i-pattern-color: hsl(from hsl(258 25% 97%) h s 97%) !important;
  --i-pattern-dk-l: 3% !important;
  --i-pattern-height: 10px !important;
  --i-pattern-line-width: 1px !important;
  --i-pattern-lt-l: 3% !important;
  --i-pattern-width: 10px !important;
  --i-properties-s: 88% !important;
  --i-s: 25% !important;
  --i-scrollbar-color: hsl(258 25% 86%) !important;
  --i-scrollbar-color-active: hsl(258 25% 82%) !important;
  --i-scrollbar-thumb-size: 4px !important;
  --i-scrollbar-track-size: 9px !important;
  --i-slider-thumb-shadow: 0 0 0 5px hsl(258 25% 50% / 0.15) !important;
  --i-spacing-below-headings: 0.3rem !important;
  --i-style-settings-h1-color: oklch(from hsl(258, 88%, 66%) 50% 50% h) !important;
  --i-style-settings-h2-color: oklch(from hsl(258, 88%, 66%) 50% 50% calc(h + 60)) !important;
  --i-style-settings-h3-color: oklch(from hsl(258, 88%, 66%) 50% 50% calc(h + 60 * 2)) !important;
  --i-style-settings-h4-color: oklch(from hsl(258, 88%, 66%) 50% 50% calc(h + 60 * 3)) !important;
  --i-style-settings-h5-color: oklch(from hsl(258, 88%, 66%) 50% 50% calc(h + 60 * 4)) !important;
  --i-style-settings-h6-color: oklch(from hsl(258, 88%, 66%) 50% 50% calc(h + 60 * 5)) !important;
  --i-style-settings-heading-underline-color: oklch(from currentColor l c h / 0.25) !important;
  --i-translucent-floating-nav-opacity: 92% !important;
  --icon-color: #222222 !important;
  --icon-color-hover: #222222 !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: hsl(258 25% 86%) !important;
  --indentation-guide-color-active: hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 600 !important;
  --input-shadow: inset 0 0 0 1px hsl(258 25% 88%) !important;
  --input-shadow-hover: inset 0 0 0 1px hsl(258 25% 83%) !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-hover: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --interactive-hover: hsl(258 25% 94%) !important;
  --light: hsl(258 25% 98%) !important;
  --lightgray: hsl(258 25% 97%) !important;
  --link-color: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --link-color-hover: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --link-external-color: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --link-external-color-hover: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --link-unresolved-color: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-collapsed: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --list-marker-color-hover: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --menu-background: hsl(258 25% 97%) !important;
  --menu-border-color: hsl(258 25% 83%) !important;
  --metadata-border-color: hsl(258 25% 88%) !important;
  --metadata-divider-color: hsl(258 25% 88%) !important;
  --metadata-input-background-active: hsl(258 25% 67% / 0.18) !important;
  --metadata-label-background-active: hsl(258 25% 67% / 0.18) !important;
  --metadata-property-background-active: hsl(258 25% 67% / 0.18) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258 25% 74%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(258 25% 83%) !important;
  --modal-border-color: hsl(258 25% 83%) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-indentation-guide-color: hsl(258 25% 88%) !important;
  --nav-item-background-active: hsl(258 25% 67% / 0.18) !important;
  --nav-item-background-hover: hsl(258 25% 67% / 0.18) !important;
  --nav-item-color: #222222 !important;
  --nav-item-color-highlighted: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --nn-theme-file-selected-bg: hsl(258 25% 67% / 0.18) !important;
  --nn-theme-file-tag-bg: hsl(258, 88%, 66%, 0.2) !important;
  --nn-theme-file-tag-border-radius: 4px !important;
  --nn-theme-file-tag-color: #222222 !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: hsl(258, 88%, 66%) !important;
  --nn-theme-mobile-toolbar-button-icon-color: hsl(258, 88%, 66%) !important;
  --nn-theme-nav-bg: #ffffff !important;
  --nn-theme-navitem-chevron-color: hsl(258, 88%, 66%) !important;
  --nn-theme-navitem-selected-bg: hsl(258 25% 67% / 0.18) !important;
  --p-spacing: 1.5rem !important;
  --pill-border-color: hsl(258 25% 88%) !important;
  --pill-border-color-hover: hsl(258 25% 83%) !important;
  --pill-color-remove-hover: #5c5c5c !important;
  --pill-focus-left-adjust: 0 !important;
  --pill-focus-width: 100% !important;
  --pill-radius: 4px !important;
  --prompt-border-color: hsl(258 25% 83%) !important;
  --ribbon-background: hsl(258 25% 88%) !important;
  --ribbon-background-collapsed: hsl(258 25% 88%) !important;
  --ribbon-padding: 8px 0 12px !important;
  --secondary: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --setting-items-background: #ffffff !important;
  --setting-items-border-color: hsl(258 25% 88%) !important;
  --setting-items-padding: 0 0 20px 0 !important;
  --setting-items-radius: 0 !important;
  --slider-thumb-border-color: hsl(258 25% 83%) !important;
  --slider-track-background: hsl(258 25% 88%) !important;
  --status-bar-background: hsl(258 25% 98%) !important;
  --status-bar-border-color: hsl(258 25% 88%) !important;
  --status-bar-text-color: #222222 !important;
  --tab-container-background: hsl(258 25% 98%) !important;
  --tab-divider-color: hsl(258 25% 83%) !important;
  --tab-outline-color: hsl(258 25% 88%) !important;
  --tab-switcher-background: hsl(258 25% 97%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258 25% 97%), transparent) !important;
  --tab-text-color: #222222 !important;
  --tab-text-color-active: #222222 !important;
  --tab-text-color-focused: #222222 !important;
  --tab-text-color-focused-active: #222222 !important;
  --tab-text-color-focused-highlighted: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --table-add-button-border-color: hsl(258 25% 86%) !important;
  --table-border-color: hsl(258 25% 86%) !important;
  --table-column-min-width: 4ch !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-background: hsl(258 25% 94%) !important;
  --table-header-background-hover: hsl(258 25% 94%) !important;
  --table-header-border-color: hsl(258 25% 86%) !important;
  --table-header-weight: 600 !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: hsl(258, 88%, 66%, 0.2) !important;
  --tag-background-hover: hsl(258, 88%, 66%, 0.2) !important;
  --tag-color: #222222 !important;
  --tag-color-hover: #222222 !important;
  --tag-padding-x: 0.5em !important;
  --tag-radius: 4px !important;
  --tertiary: oklch(from oklch(from hsl(258, 88%, 66%) 50% 35% h) calc(l - 0.15) c h) !important;
  --text-accent: oklch(from hsl(258, 88%, 66%) 50% 35% h) !important;
  --text-accent-hover: oklch(from oklch(from hsl(258, 88%, 66%) 50% 35% h) calc(l - 0.15) c h) !important;
  --textHighlight: hsl(258 25% 67% / 0.18) !important;
  --titlebar-background: hsl(258 25% 98%) !important;
  --titlebar-background-focused: hsl(258 25% 98%) !important;
  --titlebar-border-color: hsl(258 25% 88%) !important;
  --traffic-lights-offset-y: 58px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(221, 217, 232);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(216, 210, 228);
}

html[saved-theme="light"] body .canvas-sidebar {
  box-shadow: rgb(221, 217, 232) 0px 0px 0px 1px inset;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(221, 217, 232);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(138, 92, 245, 0.2);
  border-radius: 4px;
  color: rgb(34, 34, 34);
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
}

html[saved-theme="light"] body h1.article-title {
  font-weight: 500;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: oklch(0.5 0.14 292.489);
  outline: oklch(0.5 0.14 292.489) none 0px;
  text-decoration: underline oklch(0.5 0.14 292.489 / 0.25);
  text-decoration-color: oklch(0.5 0.14 292.489 / 0.25);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.5 0.14 292.489);
  outline: oklch(0.5 0.14 292.489) none 0px;
  text-decoration: underline oklch(0.5 0.14 292.489 / 0.25);
  text-decoration-color: oklch(0.5 0.14 292.489 / 0.25);
}

html[saved-theme="light"] body a.internal.broken {
  color: oklch(0.5 0.14 292.489);
  outline: oklch(0.5 0.14 292.489) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
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
    images: `html[saved-theme="light"] body img {
  border-bottom-color: oklch(0.5 0.2 292.489);
  border-left-color: oklch(0.5 0.2 292.489);
  border-right-color: oklch(0.5 0.2 292.489);
  border-top-color: oklch(0.5 0.2 292.489);
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
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgMG0tOS41LS43NWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgMG0tOS41LS43NWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuOTIxIDEuNTc1LS4zNSA3QTEuNSAxLjUgMCAwIDEgOS4wNzMgMTBINi45MjdhMS41IDEuNSAwIDAgMS0xLjQ5OC0xLjQyNWwtLjM1LTdBMS41IDEuNSAwIDAgMSA2LjU3NyAwaDIuODQ2YTEuNSAxLjUgMCAwIDEgMS40OTggMS41NzVNOCAxMWEyLjUgMi41IDAgMSAxIDAgNSAyLjUgMi41IDAgMCAxIDAtNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuOTIxIDEuNTc1LS4zNSA3QTEuNSAxLjUgMCAwIDEgOS4wNzMgMTBINi45MjdhMS41IDEuNSAwIDAgMS0xLjQ5OC0xLjQyNWwtLjM1LTdBMS41IDEuNSAwIDAgMSA2LjU3NyAwaDIuODQ2YTEuNSAxLjUgMCAwIDEgMS40OTggMS41NzVNOCAxMWEyLjUgMi41IDAgMSAxIDAgNSAyLjUgMi41IDAgMCAxIDAtNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjQ0IDQuNTRjLjQzLS4zNTQuOTk0LS41NjUgMS41Ni0uNTY1IDEuMjE3IDAgMi4zNC44MiAyLjM0IDIuMTQgMCAuMzc3LS4wNzkuNzQ1LS4yOTggMS4xLS4yMDguMzM5LS41MTMuNjE0LS44NzUuODY3LS4yMTcuMTUzLS4zMjYuMjU3LS4zNzkuMzI4LS4wMzguMDUyLS4wMzguMDctLjAzOC4wODlhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjc5NC41NDQtMS4yODYgMS4wNTYtMS42NDUuMjgtLjE5Ni40MDItLjMzMi40Ni0uNDI1YS41NC41NCAwIDAgMCAuMDczLS4zMTNjMC0uMy0uMjQzLS42NDEtLjgzOS0uNjQxYTEgMSAwIDAgMC0uNjA4LjIyNGMtLjE2Ny4xMzctLjIzMS4yODYtLjIzMS40MTdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjY3My4zNDUtMS4yMi43OC0xLjU3N005IDExYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjQ0IDQuNTRjLjQzLS4zNTQuOTk0LS41NjUgMS41Ni0uNTY1IDEuMjE3IDAgMi4zNC44MiAyLjM0IDIuMTQgMCAuMzc3LS4wNzkuNzQ1LS4yOTggMS4xLS4yMDguMzM5LS41MTMuNjE0LS44NzUuODY3LS4yMTcuMTUzLS4zMjYuMjU3LS4zNzkuMzI4LS4wMzguMDUyLS4wMzguMDctLjAzOC4wODlhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjc5NC41NDQtMS4yODYgMS4wNTYtMS42NDUuMjgtLjE5Ni40MDItLjMzMi40Ni0uNDI1YS41NC41NCAwIDAgMCAuMDczLS4zMTNjMC0uMy0uMjQzLS42NDEtLjgzOS0uNjQxYTEgMSAwIDAgMC0uNjA4LjIyNGMtLjE2Ny4xMzctLjIzMS4yODYtLjIzMS40MTdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjY3My4zNDUtMS4yMi43OC0xLjU3N005IDExYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41ODkgOS42N0EyLjc1IDIuNzUgMCAwIDEgMS41IDd2LS4yNUEyLjc1IDIuNzUgMCAwIDEgNC4yNSA0aC4yNWEyLjc0NyAyLjc0NyAwIDAgMSAyLjc0OCAyLjY1N3YuMDAzaC4wMDJWN3EwIC4xOTctLjAyNy4zODYtLjAzLjM5Mi0uMDkuNzdhOCA4IDAgMCAxLS41NTkgMS45MTggNy4yIDcuMiAwIDAgMS0yLjE2MiAyLjgwMWwtLjA5OC4wNzZBLjI0LjI0IDAgMCAxIDQuMTcgMTNhLjI1LjI1IDAgMCAxLS4yMi0uMzY3IDE3IDE3IDAgMCAwIC42NS0xLjM4NGMuMTk3LS40NzQuMzk2LTEuMDEzLjU1Ny0xLjU3OGEyLjcgMi43IDAgMCAxLS42NTcuMDc5aC0uMjVxLS4zNDMtLjAwMS0uNjYxLS4wOG0tLjU0OSAxLjQwNUE0LjI1IDQuMjUgMCAwIDEgMCA3di0uMjVBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMi41aC4yNWMxLjQ1MiAwIDIuNzMzLjcyOCAzLjUgMS44MzhBNC4yNSA0LjI1IDAgMCAxIDExLjUgMi41aC4yNUE0LjI1IDQuMjUgMCAwIDEgMTYgNi42NjRWN3EwIC4yNzUtLjAzNS41NDNjLS4yMDcgMi42Mi0xLjM1OCA0Ljk2Ni0zLjQ4OCA2LjU5OWExLjc0IDEuNzQgMCAwIDEtMS4wNTcuMzU4Yy0xLjM0MSAwLTIuMTQ2LTEuNDI1LTEuNTQ4LTIuNTY0LjExMS0uMjExLjI2LS41MDguNDE4LS44NmE0LjI1IDQuMjUgMCAwIDEtMi4wMDUtMS4yOTcgOC43NiA4Ljc2IDAgMCAxLTMuMDU4IDQuMzYzIDEuNzQgMS43NCAwIDAgMS0xLjA1Ny4zNThjLTEuMzQxIDAtMi4xNDYtMS40MjUtMS41NDgtMi41NjQuMTExLS4yMTEuMjYtLjUwOC40MTgtLjg2bTcuOC0xLjQwNnEuMzE4LjA3OS42NjEuMDhoLjI1YTIuOCAyLjggMCAwIDAgLjY1Ny0uMDc5IDE0IDE0IDAgMCAxLS42OCAxLjg2NSAxOCAxOCAwIDAgMS0uNTI3IDEuMDk3LjI1LjI1IDAgMCAwIC4yMi4zNjcuMjQuMjQgMCAwIDAgLjE0NC0uMDQ5bC4wOTgtLjA3NnEuNDUyLS4zNTguODMyLS43NjhhNy4yIDcuMiAwIDAgMCAxLjM5LTIuMTcyIDggOCAwIDAgMCAuNDk4LTEuNzc5IDkgOSAwIDAgMCAuMDkxLS43N3EuMDI3LS4xOS4wMjctLjM4NnYtLjMzOUgxNC41di0uMDA0QTIuNzQ3IDIuNzQ3IDAgMCAwIDExLjc1IDRoLS4yNTFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVY3YzAgMS4yOS44OSAyLjM3NCAyLjA4OSAyLjY3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41ODkgOS42N0EyLjc1IDIuNzUgMCAwIDEgMS41IDd2LS4yNUEyLjc1IDIuNzUgMCAwIDEgNC4yNSA0aC4yNWEyLjc0NyAyLjc0NyAwIDAgMSAyLjc0OCAyLjY1N3YuMDAzaC4wMDJWN3EwIC4xOTctLjAyNy4zODYtLjAzLjM5Mi0uMDkuNzdhOCA4IDAgMCAxLS41NTkgMS45MTggNy4yIDcuMiAwIDAgMS0yLjE2MiAyLjgwMWwtLjA5OC4wNzZBLjI0LjI0IDAgMCAxIDQuMTcgMTNhLjI1LjI1IDAgMCAxLS4yMi0uMzY3IDE3IDE3IDAgMCAwIC42NS0xLjM4NGMuMTk3LS40NzQuMzk2LTEuMDEzLjU1Ny0xLjU3OGEyLjcgMi43IDAgMCAxLS42NTcuMDc5aC0uMjVxLS4zNDMtLjAwMS0uNjYxLS4wOG0tLjU0OSAxLjQwNUE0LjI1IDQuMjUgMCAwIDEgMCA3di0uMjVBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMi41aC4yNWMxLjQ1MiAwIDIuNzMzLjcyOCAzLjUgMS44MzhBNC4yNSA0LjI1IDAgMCAxIDExLjUgMi41aC4yNUE0LjI1IDQuMjUgMCAwIDEgMTYgNi42NjRWN3EwIC4yNzUtLjAzNS41NDNjLS4yMDcgMi42Mi0xLjM1OCA0Ljk2Ni0zLjQ4OCA2LjU5OWExLjc0IDEuNzQgMCAwIDEtMS4wNTcuMzU4Yy0xLjM0MSAwLTIuMTQ2LTEuNDI1LTEuNTQ4LTIuNTY0LjExMS0uMjExLjI2LS41MDguNDE4LS44NmE0LjI1IDQuMjUgMCAwIDEtMi4wMDUtMS4yOTcgOC43NiA4Ljc2IDAgMCAxLTMuMDU4IDQuMzYzIDEuNzQgMS43NCAwIDAgMS0xLjA1Ny4zNThjLTEuMzQxIDAtMi4xNDYtMS40MjUtMS41NDgtMi41NjQuMTExLS4yMTEuMjYtLjUwOC40MTgtLjg2bTcuOC0xLjQwNnEuMzE4LjA3OS42NjEuMDhoLjI1YTIuOCAyLjggMCAwIDAgLjY1Ny0uMDc5IDE0IDE0IDAgMCAxLS42OCAxLjg2NSAxOCAxOCAwIDAgMS0uNTI3IDEuMDk3LjI1LjI1IDAgMCAwIC4yMi4zNjcuMjQuMjQgMCAwIDAgLjE0NC0uMDQ5bC4wOTgtLjA3NnEuNDUyLS4zNTguODMyLS43NjhhNy4yIDcuMiAwIDAgMCAxLjM5LTIuMTcyIDggOCAwIDAgMCAuNDk4LTEuNzc5IDkgOSAwIDAgMCAuMDkxLS43N3EuMDI3LS4xOS4wMjctLjM4NnYtLjMzOUgxNC41di0uMDA0QTIuNzQ3IDIuNzQ3IDAgMCAwIDExLjc1IDRoLS4yNTFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVY3YzAgMS4yOS44OSAyLjM3NCAyLjA4OSAyLjY3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02Ljg4Ni43NzNDNy4yOS0uMjMxIDguNzEtLjIzMSA5LjExNC43NzNsMS40NzIgMy42NjcgMy45NDMuMjY4YzEuMDguMDczIDEuNTE4IDEuNDI0LjY4OCAyLjExOEwxMi4xODUgOS4zNmwuOTY0IDMuODMyYy4yNjQgMS4wNS0uODg2IDEuODg0LTEuODAyIDEuMzFMOCAxMi40bC0zLjM0NyAyLjEwMWMtLjkxNi41NzUtMi4wNjYtLjI2LTEuODAyLTEuMzA5bC45NjQtMy44MzJMLjc4MyA2LjgyNmMtLjgzLS42OTQtLjM5MS0yLjA0NS42ODgtMi4xMThsMy45NDMtLjI2OHoiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02Ljg4Ni43NzNDNy4yOS0uMjMxIDguNzEtLjIzMSA5LjExNC43NzNsMS40NzIgMy42NjcgMy45NDMuMjY4YzEuMDguMDczIDEuNTE4IDEuNDI0LjY4OCAyLjExOEwxMi4xODUgOS4zNmwuOTY0IDMuODMyYy4yNjQgMS4wNS0uODg2IDEuODg0LTEuODAyIDEuMzFMOCAxMi40bC0zLjM0NyAyLjEwMWMtLjkxNi41NzUtMi4wNjYtLjI2LTEuODAyLTEuMzA5bC45NjQtMy44MzJMLjc4MyA2LjgyNmMtLjgzLS42OTQtLjM5MS0yLjA0NS42ODgtMi4xMThsMy45NDMtLjI2OHoiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgNS40OTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNEExLjUgMS41IDAgMCAwIDMgNS41djFoMTB2LTFBMS41IDEuNSAwIDAgMCAxMS41IDR2Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY0SDZ2Ljc0N2EuNzUuNzUgMCAwIDEtLjc1Ljc1TTEwIDIuNUg2di0uNzUyYS43NS43NSAwIDEgMC0xLjUgMFYyLjVhMyAzIDAgMCAwLTMgM3Y2YTMgMyAwIDAgMCAzIDNoN2EzIDMgMCAwIDAgMy0zdi02YTMgMyAwIDAgMC0zLTN2LS43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTMgOHYzLjVBMS41IDEuNSAwIDAgMCA0LjUgMTNoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgNS40OTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNEExLjUgMS41IDAgMCAwIDMgNS41djFoMTB2LTFBMS41IDEuNSAwIDAgMCAxMS41IDR2Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY0SDZ2Ljc0N2EuNzUuNzUgMCAwIDEtLjc1Ljc1TTEwIDIuNUg2di0uNzUyYS43NS43NSAwIDEgMC0xLjUgMFYyLjVhMyAzIDAgMCAwLTMgM3Y2YTMgMyAwIDAgMCAzIDNoN2EzIDMgMCAwIDAgMy0zdi02YTMgMyAwIDAgMC0zLTN2LS43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTMgOHYzLjVBMS41IDEuNSAwIDAgMCA0LjUgMTNoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkgMTMuOTA0IDUuMjUgMTAuNzUgMi4wOTYgOC43MWEyLjQgMi40IDAgMCAxIC41LTQuMjc4bDkuMjczLTMuMjk2YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuOTk2IDIuOTk1TDEzLjQ1IDMuNjNhLjg0NC44NDQgMCAwIDAtMS4wOC0xLjA4TDMuMSA1Ljg0NmEuOS45IDAgMCAwLS4xOSAxLjYwNGwyLjc4IDEuNzk5IDMuMjc5LTMuMjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNjFMNi43NSAxMC4zMWwxLjc5OSAyLjc3OWEuOS45IDAgMCAwIDEuNjA0LS4xODhsMy4yOTctOS4yNzIgMS40MTMuNTAyLTMuMjk2IDkuMjczYTIuNCAyLjQgMCAwIDEtNC4yNzcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkgMTMuOTA0IDUuMjUgMTAuNzUgMi4wOTYgOC43MWEyLjQgMi40IDAgMCAxIC41LTQuMjc4bDkuMjczLTMuMjk2YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuOTk2IDIuOTk1TDEzLjQ1IDMuNjNhLjg0NC44NDQgMCAwIDAtMS4wOC0xLjA4TDMuMSA1Ljg0NmEuOS45IDAgMCAwLS4xOSAxLjYwNGwyLjc4IDEuNzk5IDMuMjc5LTMuMjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNjFMNi43NSAxMC4zMWwxLjc5OSAyLjc3OWEuOS45IDAgMCAwIDEuNjA0LS4xODhsMy4yOTctOS4yNzIgMS40MTMuNTAyLTMuMjk2IDkuMjczYTIuNCAyLjQgMCAwIDEtNC4yNzcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOFYxMDRhNDgsNDgsMCwwLDEsNDEuNjEtNDcuNTZBODMuODUsODMuODUsMCwwLDEsMTc4LDU2YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI1LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOFYxMDRhNDgsNDgsMCwwLDEsNDEuNjEtNDcuNTZBODMuODUsODMuODUsMCwwLDEsMTc4LDU2YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI1LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0uNzUtOS41YS43NS43NSAwIDAgMC0xLjUgMHYxLjc1SDUuNWEuNzUuNzUgMCAxIDAgMCAxLjVoMS43NXYxLjc1YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1aDEuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDguNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0uNzUtOS41YS43NS43NSAwIDAgMC0xLjUgMHYxLjc1SDUuNWEuNzUuNzUgMCAxIDAgMCAxLjVoMS43NXYxLjc1YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1aDEuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDguNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE01LjUgNy4yNWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE01LjUgNy4yNWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjUzIDUuNDdhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDggNS40NyA5LjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2bDEuNDcgMS40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDkuMDYgOGwxLjQ3LTEuNDdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkw4IDYuOTR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjUzIDUuNDdhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDggNS40NyA5LjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2bDEuNDcgMS40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDkuMDYgOGwxLjQ3LTEuNDdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkw4IDYuOTR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAxMS45MzdWMTNhLjUuNSAwIDAgMCAuNS41aDdhMS41IDEuNSAwIDAgMCAxLjUtMS41di0uNDAxQTMgMyAwIDAgMSAxMSAxMkg0cS0uMjYgMC0uNS0uMDYzTTIgMTBWM3EwLS4xMDMuMDEtLjIwNGEyIDIgMCAwIDEgLjY3Ni0xLjMwNEEyIDIgMCAwIDEgNCAxaDdhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNINGEyIDIgMCAwIDEtMi0yem0xLjUgMGEuNS41IDAgMCAwIC41LjVoN0ExLjUgMS41IDAgMCAwIDEyLjUgOVY0cTAtLjE1Ni0uMDMtLjMwMkExLjUgMS41IDAgMCAwIDExIDIuNUg0YS41LjUgMCAwIDAtLjUuNXptMi00Ljc1YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuNzUuNzUgMCAwIDEtLjc1LS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAxMS45MzdWMTNhLjUuNSAwIDAgMCAuNS41aDdhMS41IDEuNSAwIDAgMCAxLjUtMS41di0uNDAxQTMgMyAwIDAgMSAxMSAxMkg0cS0uMjYgMC0uNS0uMDYzTTIgMTBWM3EwLS4xMDMuMDEtLjIwNGEyIDIgMCAwIDEgLjY3Ni0xLjMwNEEyIDIgMCAwIDEgNCAxaDdhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNINGEyIDIgMCAwIDEtMi0yem0xLjUgMGEuNS41IDAgMCAwIC41LjVoN0ExLjUgMS41IDAgMCAwIDEyLjUgOVY0cTAtLjE1Ni0uMDMtLjMwMkExLjUgMS41IDAgMCAwIDExIDIuNUg0YS41LjUgMCAwIDAtLjUuNXptMi00Ljc1YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuNzUuNzUgMCAwIDEtLjc1LS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxLjVhMyAzIDAgMCAxIDMgM3Y4LjU0NmExLjQ1NCAxLjQ1NCAwIDAgMS0yLjQxMSAxLjA5NEw4IDExbC0zLjU4OSAzLjE0QTEuNDU0IDEuNDU0IDAgMCAxIDIgMTMuMDQ2VjQuNWEzIDMgMCAwIDEgMy0zeiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxLjVhMyAzIDAgMCAxIDMgM3Y4LjU0NmExLjQ1NCAxLjQ1NCAwIDAgMS0yLjQxMSAxLjA5NEw4IDExbC0zLjU4OSAzLjE0QTEuNDU0IDEuNDU0IDAgMCAxIDIgMTMuMDQ2VjQuNWEzIDMgMCAwIDEgMy0zeiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOSAxNC4zMTVhMS4zOCAxLjM4IDAgMCAxLTIuNTQyLS45ODRMNy4wNyAxMEgzLjEzYTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAybC41IDd6bTQuMzUyLTUuNzYyYS43NS43NSAwIDEgMCAxLjQ5Ni0uMTA2bC0uNS03YS43NS43NSAwIDAgMC0xLjQ5Ni4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOSAxNC4zMTVhMS4zOCAxLjM4IDAgMCAxLTIuNTQyLS45ODRMNy4wNyAxMEgzLjEzYTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAybC41IDd6bTQuMzUyLTUuNzYyYS43NS43NSAwIDEgMCAxLjQ5Ni0uMTA2bC0uNS03YS43NS43NSAwIDAgMC0xLjQ5Ni4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMWE3IDcgMCAxIDAgMCAxNEE3IDcgMCAwIDAgOCAxTTYuMDMgNi43MmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDIuNSAyLjVhLjc1Ljc1IDAgMCAwIDEuMDYgMGwyLjUtMi41YS43NS43NSAwIDEgMC0xLjA2LTEuMDZMOCA4LjY5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMWE3IDcgMCAxIDAgMCAxNEE3IDcgMCAwIDAgOCAxTTYuMDMgNi43MmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDIuNSAyLjVhLjc1Ljc1IDAgMCAwIDEuMDYgMGwyLjUtMi41YS43NS43NSAwIDEgMC0xLjA2LTEuMDZMOCA4LjY5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNDUyIDYuODY0IDEuMTMtMi4xNzNhMzIgMzIgMCAwIDEgMS44NzItMy4wOTVjLjk2NCAxLjA0NSAxLjkwNiAyLjMgMi42MTIgMy42MjIuNzQ4IDEuNDAyIDEuMTg0IDIuNzg5IDEuMTg0IDQuMDMyIDAgMS40MjctLjkwNCAyLjgzLTIuMTUzIDMuNjEzcS4wODgtLjM5OC4wOS0uODYzYzAtMS4yNTUtLjY3NC0yLjMzNi0xLjE0My0yLjk2M2E5IDkgMCAwIDAtMS4wMS0xLjEyNWwtLjAyNC0uMDItLjAwOC0uMDA4TDkgNy44OGwtLjAwMS0uMDAxQzguOTk2IDcuODggOC45OTYgNy44NzggOCA5YTcgNyAwIDAgMCAuOTg0IDEuMTMzYy4zNy41MzQuNzA0IDEuMi43MDQgMS44NjcgMCAuNzctLjMxMyAxLjI3Ni0uNjE4IDEuNTg3LS4xNTkuMTYyLS4yNzkuMzgtLjMxNC42YS44LjggMCAwIDAgMCAuMjY0cS4wMTcuMDk1LjA2LjE4MmMuMTEzLjIyNS4zNDMuMzcuNTk0LjM1IDIuODM2LS4yMzUgNS4zNC0yLjg3IDUuMzQtNS43MzMgMC0zLjE0OS0yLjE3Ny02LjUzOC00LjM1Ny04Ljg0NUExLjMgMS4zIDAgMCAwIDkuNDM1IDAgMS4zMiAxLjMyIDAgMCAwIDguMzUuNTU2IDM0IDM0IDAgMCAwIDYuMjUgNGwtLjk1NS0xLjMzNy0uMDE2LS4wMjJhLjk4Ni45ODYgMCAwIDAtMS41NzMuMDA0QzIuNjIgNC4xMjMgMS4yNSA2LjI0OSAxLjI1IDkuMjVjMCAyLjg2MyAyLjUwNCA1LjQ5OCA1LjM0IDUuNzMzLjI1LjAyLjQ4MS0uMTI1LjU5My0uMzVhLjcuNyAwIDAgMCAuMDYtLjE4Mi44LjggMCAwIDAgLjAwMS0uMjYzIDEuMTUgMS4xNSAwIDAgMC0uMzE0LS42MDFjLS4zMDUtLjMxLS42MTctLjgxNy0uNjE3LTEuNTg3IDAtLjY2Ni4zMzMtMS4zMzMuNzAzLTEuODY3bC4wOS0uMTI4QzcuNTQ0IDkuNDA1IDggOSA4IDlsLS45OTctMS4xMkg3bC0uMDAzLjAwMy0uMDA4LjAwNy0uMDI0LjAyMS0uMDczLjA3YTkgOSAwIDAgMC0uOTM3IDEuMDU2Yy0uNDcuNjI2LTEuMTQzIDEuNzA3LTEuMTQzIDIuOTYyIDAgLjMxLjAzMy41OTguMDkuODYzQzMuNjU0IDEyLjA4IDIuNzUgMTAuNjc3IDIuNzUgOS4yNWMwLTIuMTcxLjg0Ny0zLjgxMiAxLjc0NS01LjEyNmwuNTM0Ljc0OHpNOCA5bC45OTctMS4xMjFMOCA2Ljk5M2wtLjk5Ny44ODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNDUyIDYuODY0IDEuMTMtMi4xNzNhMzIgMzIgMCAwIDEgMS44NzItMy4wOTVjLjk2NCAxLjA0NSAxLjkwNiAyLjMgMi42MTIgMy42MjIuNzQ4IDEuNDAyIDEuMTg0IDIuNzg5IDEuMTg0IDQuMDMyIDAgMS40MjctLjkwNCAyLjgzLTIuMTUzIDMuNjEzcS4wODgtLjM5OC4wOS0uODYzYzAtMS4yNTUtLjY3NC0yLjMzNi0xLjE0My0yLjk2M2E5IDkgMCAwIDAtMS4wMS0xLjEyNWwtLjAyNC0uMDItLjAwOC0uMDA4TDkgNy44OGwtLjAwMS0uMDAxQzguOTk2IDcuODggOC45OTYgNy44NzggOCA5YTcgNyAwIDAgMCAuOTg0IDEuMTMzYy4zNy41MzQuNzA0IDEuMi43MDQgMS44NjcgMCAuNzctLjMxMyAxLjI3Ni0uNjE4IDEuNTg3LS4xNTkuMTYyLS4yNzkuMzgtLjMxNC42YS44LjggMCAwIDAgMCAuMjY0cS4wMTcuMDk1LjA2LjE4MmMuMTEzLjIyNS4zNDMuMzcuNTk0LjM1IDIuODM2LS4yMzUgNS4zNC0yLjg3IDUuMzQtNS43MzMgMC0zLjE0OS0yLjE3Ny02LjUzOC00LjM1Ny04Ljg0NUExLjMgMS4zIDAgMCAwIDkuNDM1IDAgMS4zMiAxLjMyIDAgMCAwIDguMzUuNTU2IDM0IDM0IDAgMCAwIDYuMjUgNGwtLjk1NS0xLjMzNy0uMDE2LS4wMjJhLjk4Ni45ODYgMCAwIDAtMS41NzMuMDA0QzIuNjIgNC4xMjMgMS4yNSA2LjI0OSAxLjI1IDkuMjVjMCAyLjg2MyAyLjUwNCA1LjQ5OCA1LjM0IDUuNzMzLjI1LjAyLjQ4MS0uMTI1LjU5My0uMzVhLjcuNyAwIDAgMCAuMDYtLjE4Mi44LjggMCAwIDAgLjAwMS0uMjYzIDEuMTUgMS4xNSAwIDAgMC0uMzE0LS42MDFjLS4zMDUtLjMxLS42MTctLjgxNy0uNjE3LTEuNTg3IDAtLjY2Ni4zMzMtMS4zMzMuNzAzLTEuODY3bC4wOS0uMTI4QzcuNTQ0IDkuNDA1IDggOSA4IDlsLS45OTctMS4xMkg3bC0uMDAzLjAwMy0uMDA4LjAwNy0uMDI0LjAyMS0uMDczLjA3YTkgOSAwIDAgMC0uOTM3IDEuMDU2Yy0uNDcuNjI2LTEuMTQzIDEuNzA3LTEuMTQzIDIuOTYyIDAgLjMxLjAzMy41OTguMDkuODYzQzMuNjU0IDEyLjA4IDIuNzUgMTAuNjc3IDIuNzUgOS4yNWMwLTIuMTcxLjg0Ny0zLjgxMiAxLjc0NS01LjEyNmwuNTM0Ljc0OHpNOCA5bC45OTctMS4xMjFMOCA2Ljk5M2wtLjk5Ny44ODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLTkuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNOCA3Ljc1YS43NS43NSAwIDAgMSAuNzUuNzVWMTFhLjc1Ljc1IDAgMCAxLTEuNSAwVjguNUEuNzUuNzUgMCAwIDEgOCA3Ljc1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLTkuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNOCA3Ljc1YS43NS43NSAwIDAgMSAuNzUuNzVWMTFhLjc1Ljc1IDAgMCAxLTEuNSAwVjguNUEuNzUuNzUgMCAwIDEgOCA3Ljc1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjYgMTUuMTA5YTQgNCAwIDAgMCAzLjQ4IDBsLjEzLS4wNjNhMiAyIDAgMCAwIDEuMTMtMS44di0uNDY4YzAtMS4zNTIuNzc2LTIuNTU3IDEuNTQtMy42NzNhNS41IDUuNSAwIDEgMC05LjA4IDBDNC4yMjQgMTAuMjIxIDUgMTEuNDI2IDUgMTIuNzc5di40NjdhMiAyIDAgMCAwIDEuMTMgMS44MDF6bTIuODI4LTEuMzUuMTMtLjA2NGEuNS41IDAgMCAwIC4yODItLjQ1di0uNDY3cTAtLjI1NS4wMjUtLjVhNS4zMyA1LjMzIDAgMCAxLTMuMDUgMHEuMDI0LjI0NS4wMjUuNXYuNDY3YS41LjUgMCAwIDAgLjI4Mi40NWwuMTMuMDYzYTIuNSAyLjUgMCAwIDAgMi4xNzYgMG0tNC4zOS01LjUwMWMuMzk0LjU3Ni44OTEgMS4zMDIgMS4yNjMgMi4xNDhhMy43OSAzLjc5IDAgMCAwIDQuMDc4IDBjLjM3Mi0uODQ2Ljg2OS0xLjU3MiAxLjI2NC0yLjE0OGE0IDQgMCAxIDAtNi42MDUgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTggMy41QS43NS43NSAwIDAgMCA4IDVhMSAxIDAgMCAxIDEgMSAuNzUuNzUgMCAwIDAgMS41IDBBMi41IDIuNSAwIDAgMCA4IDMuNSIvPjwvZz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjYgMTUuMTA5YTQgNCAwIDAgMCAzLjQ4IDBsLjEzLS4wNjNhMiAyIDAgMCAwIDEuMTMtMS44di0uNDY4YzAtMS4zNTIuNzc2LTIuNTU3IDEuNTQtMy42NzNhNS41IDUuNSAwIDEgMC05LjA4IDBDNC4yMjQgMTAuMjIxIDUgMTEuNDI2IDUgMTIuNzc5di40NjdhMiAyIDAgMCAwIDEuMTMgMS44MDF6bTIuODI4LTEuMzUuMTMtLjA2NGEuNS41IDAgMCAwIC4yODItLjQ1di0uNDY3cTAtLjI1NS4wMjUtLjVhNS4zMyA1LjMzIDAgMCAxLTMuMDUgMHEuMDI0LjI0NS4wMjUuNXYuNDY3YS41LjUgMCAwIDAgLjI4Mi40NWwuMTMuMDYzYTIuNSAyLjUgMCAwIDAgMi4xNzYgMG0tNC4zOS01LjUwMWMuMzk0LjU3Ni44OTEgMS4zMDIgMS4yNjMgMi4xNDhhMy43OSAzLjc5IDAgMCAwIDQuMDc4IDBjLjM3Mi0uODQ2Ljg2OS0xLjU3MiAxLjI2NC0yLjE0OGE0IDQgMCAxIDAtNi42MDUgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTggMy41QS43NS43NSAwIDAgMCA4IDVhMSAxIDAgMCAxIDEgMSAuNzUuNzUgMCAwIDAgMS41IDBBMi41IDIuNSAwIDAgMCA4IDMuNSIvPjwvZz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjMxMyA3LjQ4OCA5IDcuNjUzdjUuMzdhLjUuNSAwIDAgMS0uMzUzLjQ3OGwtMS42Mi40OTgtLjAwNi4wMDFoLS4wMDhsLS4wMDctLjAwNi0uMDA1LS4wMDd2LS4wMDNMNyAxMy45NzlWNy42NTNsLTEuMzEzLS4xNjVhMS41IDEuNSAwIDAgMS0xLjI3MS0xLjE0NGwtLjU4OC0yLjVBMS41IDEuNSAwIDAgMSA1LjI4OCAyaDUuNDI0YTEuNSAxLjUgMCAwIDEgMS40NiAxLjg0NGwtLjU4OCAyLjVhMS41IDEuNSAwIDAgMS0xLjI3MSAxLjE0NG0yLjczMS0uOEEzIDMgMCAwIDEgMTAuNSA4Ljk3NnY0LjA0NmEyIDIgMCAwIDEtMS40MTIgMS45MTFsLTEuNjIuNDk5QTEuNTIgMS41MiAwIDAgMSA1LjUgMTMuOTc5VjguOTc3YTMgMyAwIDAgMS0yLjU0NC0yLjI5bC0uNTg4LTIuNUEzIDMgMCAwIDEgNS4yODguNWg1LjQyNGEzIDMgMCAwIDEgMi45MiAzLjY4N3pNNi43NSAzLjVhLjc1Ljc1IDAgMCAwIDAgMS41aDIuNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjMxMyA3LjQ4OCA5IDcuNjUzdjUuMzdhLjUuNSAwIDAgMS0uMzUzLjQ3OGwtMS42Mi40OTgtLjAwNi4wMDFoLS4wMDhsLS4wMDctLjAwNi0uMDA1LS4wMDd2LS4wMDNMNyAxMy45NzlWNy42NTNsLTEuMzEzLS4xNjVhMS41IDEuNSAwIDAgMS0xLjI3MS0xLjE0NGwtLjU4OC0yLjVBMS41IDEuNSAwIDAgMSA1LjI4OCAyaDUuNDI0YTEuNSAxLjUgMCAwIDEgMS40NiAxLjg0NGwtLjU4OCAyLjVhMS41IDEuNSAwIDAgMS0xLjI3MSAxLjE0NG0yLjczMS0uOEEzIDMgMCAwIDEgMTAuNSA4Ljk3NnY0LjA0NmEyIDIgMCAwIDEtMS40MTIgMS45MTFsLTEuNjIuNDk5QTEuNTIgMS41MiAwIDAgMSA1LjUgMTMuOTc5VjguOTc3YTMgMyAwIDAgMS0yLjU0NC0yLjI5bC0uNTg4LTIuNUEzIDMgMCAwIDEgNS4yODguNWg1LjQyNGEzIDMgMCAwIDEgMi45MiAzLjY4N3pNNi43NSAzLjVhLjc1Ljc1IDAgMCAwIDAgMS41aDIuNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMTI1IDdhNC44NzUgNC44NzUgMCAxIDEgOS43NSAwYzAgMS44NjQtLjc3NCAyLjk2Mi0xLjY4NyAzLjgxNS0uMzg1LjM2LS43NjUuNjUtMS4xNy45NThsLS4zNjUuMjhhOSA5IDAgMCAwLS43ODEuNjY4Yy0uMjQzLjI0LS41MzUuNTc1LS43MyAxLjAxYS4zNC4zNCAwIDAgMS0uMDk1LjEzMmwtLjAxNS4wMDhzLS4wMS4wMDQtLjAzMi4wMDRsLS4wMzItLjAwMy0uMDE1LS4wMDlhLjM0LjM0IDAgMCAxLS4wOTUtLjEzMSAzLjQgMy40IDAgMCAwLS43My0xLjAxIDkgOSAwIDAgMC0uNzgxLS42NjhxLS4xODctLjE0NS0uMzY2LS4yOGExNSAxNSAwIDAgMS0xLjE2OS0uOTZDMy45IDkuOTYzIDMuMTI1IDguODY1IDMuMTI1IDdNMTQuNSA3YzAgMy40LTIuMDY2IDQuOTc1LTMuNTMgNi4wOTEtLjYzNC40ODUtMS4xNTYuODgyLTEuMzQ1IDEuMzA1QzkuMzU1IDE1IDguNzg4IDE1LjUgOCAxNS41cy0xLjM1NC0uNS0xLjYyNS0xLjEwNGMtLjE5LS40MjMtLjcxLS44Mi0xLjM0Ni0xLjMwNUMzLjU2NiAxMS45NzUgMS41IDEwLjM5OSAxLjUgN2E2LjUgNi41IDAgMCAxIDEzIDBtLTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME0xMSA3YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMTI1IDdhNC44NzUgNC44NzUgMCAxIDEgOS43NSAwYzAgMS44NjQtLjc3NCAyLjk2Mi0xLjY4NyAzLjgxNS0uMzg1LjM2LS43NjUuNjUtMS4xNy45NThsLS4zNjUuMjhhOSA5IDAgMCAwLS43ODEuNjY4Yy0uMjQzLjI0LS41MzUuNTc1LS43MyAxLjAxYS4zNC4zNCAwIDAgMS0uMDk1LjEzMmwtLjAxNS4wMDhzLS4wMS4wMDQtLjAzMi4wMDRsLS4wMzItLjAwMy0uMDE1LS4wMDlhLjM0LjM0IDAgMCAxLS4wOTUtLjEzMSAzLjQgMy40IDAgMCAwLS43My0xLjAxIDkgOSAwIDAgMC0uNzgxLS42NjhxLS4xODctLjE0NS0uMzY2LS4yOGExNSAxNSAwIDAgMS0xLjE2OS0uOTZDMy45IDkuOTYzIDMuMTI1IDguODY1IDMuMTI1IDdNMTQuNSA3YzAgMy40LTIuMDY2IDQuOTc1LTMuNTMgNi4wOTEtLjYzNC40ODUtMS4xNTYuODgyLTEuMzQ1IDEuMzA1QzkuMzU1IDE1IDguNzg4IDE1LjUgOCAxNS41cy0xLjM1NC0uNS0xLjYyNS0xLjEwNGMtLjE5LS40MjMtLjcxLS44Mi0xLjM0Ni0xLjMwNUMzLjU2NiAxMS45NzUgMS41IDEwLjM5OSAxLjUgN2E2LjUgNi41IDAgMCAxIDEzIDBtLTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME0xMSA3YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMi4yNTV2LS4wMWMuMDAzLS4wMy4wMTMtLjE1Ny0uMzYxLS4zNUM5LjcwMyAxLjY2OCA4Ljk2NyAxLjUgOCAxLjVzLTEuNzAzLjE2OS0yLjEzOC4zOTRjLS4zNzUuMTk0LS4zNjUuMzItLjM2Mi4zNTF2LjAxYy0uMDAzLjAzLS4wMTMuMTU3LjM2Mi4zNUM2LjI5NyAyLjgzMiA3LjAzMyAzIDggM3MxLjcwMy0uMTY5IDIuMTM5LS4zOTRjLjM3NC0uMTk0LjM2NC0uMzIuMzYxLS4zNTFNMTIgMi4yNWMwIC43MzgtLjQzMyAxLjI5NC0xLjEzNiAxLjY2OWwuODI1IDIuMzFjMS41NTMuNDggMi41NjEgMS4zMiAyLjU2MSAyLjUyIDAgMS44NTQtMi40MDIgMi44NDgtNS41IDIuOTg1VjE1YS43NS43NSAwIDAgMS0xLjUgMHYtMy4yNjZjLTMuMDk4LS4xMzYtNS41LTEuMTMxLTUuNS0yLjk4NCAwLTEuMiAxLjAwOC0yLjA0IDIuNTYxLTIuNTJsLjgyNS0yLjMxMUM0LjQzMyAzLjU0NCA0IDIuOTg4IDQgMi4yNSA0IC43NSA1Ljc5IDAgOCAwczQgLjc1IDQgMi4yNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMi4yNTV2LS4wMWMuMDAzLS4wMy4wMTMtLjE1Ny0uMzYxLS4zNUM5LjcwMyAxLjY2OCA4Ljk2NyAxLjUgOCAxLjVzLTEuNzAzLjE2OS0yLjEzOC4zOTRjLS4zNzUuMTk0LS4zNjUuMzItLjM2Mi4zNTF2LjAxYy0uMDAzLjAzLS4wMTMuMTU3LjM2Mi4zNUM2LjI5NyAyLjgzMiA3LjAzMyAzIDggM3MxLjcwMy0uMTY5IDIuMTM5LS4zOTRjLjM3NC0uMTk0LjM2NC0uMzIuMzYxLS4zNTFNMTIgMi4yNWMwIC43MzgtLjQzMyAxLjI5NC0xLjEzNiAxLjY2OWwuODI1IDIuMzFjMS41NTMuNDggMi41NjEgMS4zMiAyLjU2MSAyLjUyIDAgMS44NTQtMi40MDIgMi44NDgtNS41IDIuOTg1VjE1YS43NS43NSAwIDAgMS0xLjUgMHYtMy4yNjZjLTMuMDk4LS4xMzYtNS41LTEuMTMxLTUuNS0yLjk4NCAwLTEuMiAxLjAwOC0yLjA0IDIuNTYxLTIuNTJsLjgyNS0yLjMxMUM0LjQzMyAzLjU0NCA0IDIuOTg4IDQgMi4yNSA0IC43NSA1Ljc5IDAgOCAwczQgLjc1IDQgMi4yNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMSAxLjY4NWExLjM4IDEuMzggMCAwIDEgMi41NDIuOTg0TDguOTMgNmgzLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTQgNCA3ek0yLjc0OSA3LjQ0N2EuNzUuNzUgMCAxIDAtMS40OTYuMTA2bC41IDdhLjc1Ljc1IDAgMCAwIDEuNDk2LS4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMSAxLjY4NWExLjM4IDEuMzggMCAwIDEgMi41NDIuOTg0TDguOTMgNmgzLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTQgNCA3ek0yLjc0OSA3LjQ0N2EuNzUuNzUgMCAxIDAtMS40OTYuMTA2bC41IDdhLjc1Ljc1IDAgMCAwIDEuNDk2LS4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgME04Ljc1IDQuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdi4zMzlhMi41IDIuNSAwIDAgMC0xLjAwNy40NyAxLjk1IDEuOTUgMCAwIDAtLjc0IDEuNTQ2YzAgLjc2NC40NzQgMS4yNjUuOTQgMS41NTkuNDU2LjI4NyAxLjAwNy40NDggMS40NDguNTQ3LjQ2Mi4xMDIuODQzLjE5MSAxLjExOC4zNDEuMjI4LjEyNS4yNzUuMjI0LjI3NS4zNzYgMCAuMTAyLS4wNC4yMTctLjI0OC4zNDEtLjIyNC4xMzUtLjU3Ny4yMjktLjk4Mi4yMjktLjM0NCAwLS42ODMtLjExNC0uOTUzLS4yOS0uMjgxLS4xODQtLjQyLS4zODgtLjQ1Ny0uNTA2YS43NS43NSAwIDEgMC0xLjQzLjQ1MmMuMTcxLjU0My41OTEgMSAxLjA2OCAxLjMxLjI4NC4xODUuNjEyLjMzNS45NjguNDI5di4zNTdhLjc1Ljc1IDAgMCAwIDEuNSAwdi0uMzEzYy4zNzUtLjA2Ny43NC0uMTkgMS4wNTgtLjM4Mi41My0uMzE5Ljk3Ni0uODY0Ljk3Ni0xLjYyNyAwLS44NjQtLjUxLTEuMzk0LTEuMDU1LTEuNjkyLS40NzgtLjI2LTEuMDU2LS4zODktMS40Ni0uNDc4bC0uMDUzLS4wMTJjLS4zODYtLjA4Ni0uNzM2LS4yMDItLjk3My0uMzUyLS4yMjctLjE0Mi0uMjQtLjIzNi0uMjQtLjI5YS40NS40NSAwIDAgMSAuMTgtLjM3NWMuMTM0LS4xMDguNDAzLS4yMjcuODctLjIyNy40NyAwIC43NDIuMTEuOS4yMThhLjgzLjgzIDAgMCAxIC4zMTYuNDEuNzUuNzUgMCAwIDAgMS40MDctLjUyIDIuMzMgMi4zMyAwIDAgMC0uODc4LTEuMTMgMi43IDIuNyAwIDAgMC0xLjA0OC0uNDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgME04Ljc1IDQuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdi4zMzlhMi41IDIuNSAwIDAgMC0xLjAwNy40NyAxLjk1IDEuOTUgMCAwIDAtLjc0IDEuNTQ2YzAgLjc2NC40NzQgMS4yNjUuOTQgMS41NTkuNDU2LjI4NyAxLjAwNy40NDggMS40NDguNTQ3LjQ2Mi4xMDIuODQzLjE5MSAxLjExOC4zNDEuMjI4LjEyNS4yNzUuMjI0LjI3NS4zNzYgMCAuMTAyLS4wNC4yMTctLjI0OC4zNDEtLjIyNC4xMzUtLjU3Ny4yMjktLjk4Mi4yMjktLjM0NCAwLS42ODMtLjExNC0uOTUzLS4yOS0uMjgxLS4xODQtLjQyLS4zODgtLjQ1Ny0uNTA2YS43NS43NSAwIDEgMC0xLjQzLjQ1MmMuMTcxLjU0My41OTEgMSAxLjA2OCAxLjMxLjI4NC4xODUuNjEyLjMzNS45NjguNDI5di4zNTdhLjc1Ljc1IDAgMCAwIDEuNSAwdi0uMzEzYy4zNzUtLjA2Ny43NC0uMTkgMS4wNTgtLjM4Mi41My0uMzE5Ljk3Ni0uODY0Ljk3Ni0xLjYyNyAwLS44NjQtLjUxLTEuMzk0LTEuMDU1LTEuNjkyLS40NzgtLjI2LTEuMDU2LS4zODktMS40Ni0uNDc4bC0uMDUzLS4wMTJjLS4zODYtLjA4Ni0uNzM2LS4yMDItLjk3My0uMzUyLS4yMjctLjE0Mi0uMjQtLjIzNi0uMjQtLjI5YS40NS40NSAwIDAgMSAuMTgtLjM3NWMuMTM0LS4xMDguNDAzLS4yMjcuODctLjIyNy40NyAwIC43NDIuMTEuOS4yMThhLjgzLjgzIDAgMCAxIC4zMTYuNDEuNzUuNzUgMCAwIDAgMS40MDctLjUyIDIuMzMgMi4zMyAwIDAgMC0uODc4LTEuMTMgMi43IDIuNyAwIDAgMC0xLjA0OC0uNDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI5MyAwYy4zOSAwIC43MDcuMzE3LjcwNy43MDdWMmgxLjI5M2EuNzA3LjcwNyAwIDAgMSAuNSAxLjIwN2wtMS40NiAxLjQ2QTEuMTQgMS4xNCAwIDAgMSAxMy41MyA1aC0xLjQ3TDguNTMgOC41M2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2TDExIDMuOTRWMi40N2MwLS4zMDEuMTItLjU5LjMzMy0uODA0bDEuNDYtMS40NmEuNy43IDAgMCAxIC41LS4yMDdNMi41IDhhNS41IDUuNSAwIDAgMSA2LjU5OC01LjM5Ljc1Ljc1IDAgMCAwIC4yOTgtMS40N0E3IDcgMCAxIDAgMTQuODYgNi42YS43NS43NSAwIDAgMC0xLjQ3LjI5OXEuMTA5LjUzMy4xMSAxLjEwMWE1LjUgNS41IDAgMSAxLTExIDBtNS4zNjQtMi40OTZhLjc1Ljc1IDAgMCAwLS4wOC0xLjQ5OEE0IDQgMCAxIDAgMTEuOTg4IDguM2EuNzUuNzUgMCAwIDAtMS40OTYtLjExMSAyLjUgMi41IDAgMSAxLTIuNjMtMi42ODYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI5MyAwYy4zOSAwIC43MDcuMzE3LjcwNy43MDdWMmgxLjI5M2EuNzA3LjcwNyAwIDAgMSAuNSAxLjIwN2wtMS40NiAxLjQ2QTEuMTQgMS4xNCAwIDAgMSAxMy41MyA1aC0xLjQ3TDguNTMgOC41M2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2TDExIDMuOTRWMi40N2MwLS4zMDEuMTItLjU5LjMzMy0uODA0bDEuNDYtMS40NmEuNy43IDAgMCAxIC41LS4yMDdNMi41IDhhNS41IDUuNSAwIDAgMSA2LjU5OC01LjM5Ljc1Ljc1IDAgMCAwIC4yOTgtMS40N0E3IDcgMCAxIDAgMTQuODYgNi42YS43NS43NSAwIDAgMC0xLjQ3LjI5OXEuMTA5LjUzMy4xMSAxLjEwMWE1LjUgNS41IDAgMSAxLTExIDBtNS4zNjQtMi40OTZhLjc1Ljc1IDAgMCAwLS4wOC0xLjQ5OEE0IDQgMCAxIDAgMTEuOTg4IDguM2EuNzUuNzUgMCAwIDAtMS40OTYtLjExMSAyLjUgMi41IDAgMSAxLTIuNjMtMi42ODYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLjk3LTUuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMi41LTIuNWEuNzUuNzUgMCAwIDAtMS4wNiAwbC0yLjUgMi41YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMOCA3LjMxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLjk3LTUuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMi41LTIuNWEuNzUuNzUgMCAwIDAtMS4wNiAwbC0yLjUgMi41YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMOCA3LjMxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjgzNiAxLjVhLjY2NC42NjQgMCAwIDEgLjQ5MSAxLjExbC0uMzU0LjM5SDQuMDI3bC0uMzU0LS4zOWEuNjY0LjY2NCAwIDAgMSAuNDktMS4xMXptLTYuNDQ1IDMgMi4xMjQgMi4zMzZhLjUuNSAwIDAgMCAuMzcuMTY0aC4yM2EuNS41IDAgMCAwIC4zNy0uMTY0TDEwLjYxIDQuNXptLjY1MiAyLjk0N0wzLjUgNC42NXYxLjg1MmEuNS41IDAgMCAwIC4xMjMuMzI4TDQuODcgOC4yNjZhNC41IDQuNSAwIDAgMSAxLjE3Mi0uODJtLTIuMDggMi4wNjEtMS40Ny0xLjY5M0EyIDIgMCAwIDEgMiA2LjUwMlYyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjQuNTAyYTIgMiAwIDAgMS0uNDkgMS4zMTJsLTEuNDc0IDEuNjk0YTQuNSA0LjUgMCAxIDEtOC4wNzMgMG03LjE2Ni0xLjI0MmE0LjUgNC41IDAgMCAwLTEuMTcyLS44MkwxMi41IDQuNjV2MS44NTJhLjUuNSAwIDAgMS0uMTIzLjMyOHpNMTEgMTEuNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjgzNiAxLjVhLjY2NC42NjQgMCAwIDEgLjQ5MSAxLjExbC0uMzU0LjM5SDQuMDI3bC0uMzU0LS4zOWEuNjY0LjY2NCAwIDAgMSAuNDktMS4xMXptLTYuNDQ1IDMgMi4xMjQgMi4zMzZhLjUuNSAwIDAgMCAuMzcuMTY0aC4yM2EuNS41IDAgMCAwIC4zNy0uMTY0TDEwLjYxIDQuNXptLjY1MiAyLjk0N0wzLjUgNC42NXYxLjg1MmEuNS41IDAgMCAwIC4xMjMuMzI4TDQuODcgOC4yNjZhNC41IDQuNSAwIDAgMSAxLjE3Mi0uODJtLTIuMDggMi4wNjEtMS40Ny0xLjY5M0EyIDIgMCAwIDEgMiA2LjUwMlYyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjQuNTAyYTIgMiAwIDAgMS0uNDkgMS4zMTJsLTEuNDc0IDEuNjk0YTQuNSA0LjUgMCAxIDEtOC4wNzMgMG03LjE2Ni0xLjI0MmE0LjUgNC41IDAgMCAwLTEuMTcyLS44MkwxMi41IDQuNjV2MS44NTJhLjUuNSAwIDAgMS0uMTIzLjMyOHpNMTEgMTEuNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
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
  --callout-color: 0, 191, 188;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.221884 288.456 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.221884 288.456 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.221884 288.456 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.221884 288.456 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.0000347234 23.6829 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.0000347234 23.6829 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.0000347234 23.6829 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.0000347234 23.6829 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.194562 148.477 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.194562 148.477 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.194562 148.477 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.194562 148.477 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
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
  color: oklch(0.5 0.2 292.489);
}

html[saved-theme="light"] body h2 {
  color: oklch(0.5 0.2 352.489);
}

html[saved-theme="light"] body h3 {
  color: oklch(0.5 0.2 52.4895);
}

html[saved-theme="light"] body h4 {
  color: oklch(0.5 0.2 112.489);
}

html[saved-theme="light"] body h5 {
  color: oklch(0.5 0.2 172.49);
}

html[saved-theme="light"] body h6 {
  color: oklch(0.5 0.2 232.49);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189745 256.787 / 0.45);
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(221, 217, 232);
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
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(34, 34, 34);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
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
  border-bottom-color: oklch(0.5 0.14 292.489);
  border-left-color: oklch(0.5 0.14 292.489);
  border-right-color: oklch(0.5 0.14 292.489);
  border-top-color: oklch(0.5 0.14 292.489);
  color: oklch(0.5 0.14 292.489);
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
  margin-bottom: 16px;
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.2);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(34, 34, 34);
}`,
  },
};
