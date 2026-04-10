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
  --background-modifier-border: hsl(258, 12%, 21%) !important;
  --background-modifier-border-focus: hsl(258, 12%, 33%) !important;
  --background-modifier-border-hover: hsl(258, 12%, 25%) !important;
  --background-modifier-form-field: hsl(258, 12%, 12%) !important;
  --background-modifier-form-field-hover: hsl(258, 12%, 12%) !important;
  --background-modifier-hover: hsl(258 12% 29% / 0.49) !important;
  --background-primary: hsl(258, 12%, 12%) !important;
  --background-primary-alt: hsl(258, 12%, 14%) !important;
  --background-secondary: hsl(258, 12%, 14%) !important;
  --background-secondary-alt: hsl(258, 12%, 21%) !important;
  --bases-cards-background: hsl(258, 12%, 12%) !important;
  --bases-cards-cover-background: hsl(258, 12%, 14%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258 12% 23%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)) !important;
  --bases-embed-border-color: hsl(258 12% 23%) !important;
  --bases-embed-border-radius: 7px !important;
  --bases-embed-radius: 7px !important;
  --bases-group-heading-property-color: hsl(0, 0%, 70%) !important;
  --bases-table-border-color: hsl(258 12% 23%) !important;
  --bases-table-cell-background-active: hsl(258, 12%, 12%) !important;
  --bases-table-cell-background-disabled: hsl(258, 12%, 14%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258, 12%, 33%) !important;
  --bases-table-group-background: hsl(258, 12%, 14%) !important;
  --bases-table-header-background: hsl(258, 12%, 12%) !important;
  --bases-table-header-background-hover: hsl(258 12% 29% / 0.49) !important;
  --bases-table-header-color: hsl(0, 0%, 85%) !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-summary-background: hsl(258, 12%, 12%) !important;
  --bases-table-summary-background-hover: hsl(258 12% 29% / 0.49) !important;
  --blockquote-background-color: hsla(258, 88%, 66%, 0.1) !important;
  --blur-background: color-mix(in srgb, hsl(258, 12%, 12%) 65%, transparent) linear-gradient(hsl(258, 12%, 12%), color-mix(in srgb, hsl(258, 12%, 12%) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: 0;
  --callout-radius: 7px;
  --callout-title-padding: 0.5em 1em;
  --callout-title-weight: 700;
  --canvas-background: hsl(258, 12%, 12%) !important;
  --canvas-card-label-color: hsl(0, 0%, 40%) !important;
  --canvas-dot-pattern: hsl(258, 12%, 21%) !important;
  --caret-color: hsl(0, 0%, 85%) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-border-color-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --checkbox-color-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --checkbox-marker-color: hsl(258, 12%, 12%) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: hsl(0, 0%, 85%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(258, 12%, 14%) !important;
  --code-border-color: hsl(258 12% 23%) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsl(258 12% 29% / 0.49) !important;
  --code-comment: hsl(0, 0%, 40%) !important;
  --code-normal: hsl(0, 0%, 85%) !important;
  --code-punctuation: hsl(0, 0%, 70%) !important;
  --code-radius: 7px !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --collapse-icon-color-collapsed: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --color-base-00: hsl(258, 12%, 12%) !important;
  --color-base-05: hsl(258, 12%, 13%) !important;
  --color-base-10: hsl(258, 12%, 14%) !important;
  --color-base-100: hsl(258, 12%, 85%) !important;
  --color-base-20: hsl(258, 12%, 15%) !important;
  --color-base-25: hsl(258, 12%, 16%) !important;
  --color-base-30: hsl(258, 12%, 21%) !important;
  --color-base-35: hsl(258, 12%, 25%) !important;
  --color-base-40: hsl(258, 12%, 33%) !important;
  --color-base-50: hsl(258, 12%, 40%) !important;
  --color-base-60: hsl(258, 12%, 60%) !important;
  --color-base-70: hsl(258, 12%, 70%) !important;
  --dark: hsl(0, 0%, 85%) !important;
  --darkgray: hsl(0, 0%, 85%) !important;
  --divider-color: hsl(258, 12%, 21%) !important;
  --dropdown-background: hsl(258, 12%, 12%) !important;
  --dropdown-background-hover: hsl(258, 12%, 20%) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid hsl(258 12% 23%) !important;
  --embed-border-end: 1px solid hsl(258 12% 23%) !important;
  --embed-border-start: 1px solid hsl(258 12% 23%) !important;
  --embed-border-top: 1px solid hsl(258 12% 23%) !important;
  --embed-padding: 0 !important;
  --file-header-background: hsl(258, 12%, 12%) !important;
  --file-header-background-focused: hsl(258, 12%, 12%) !important;
  --file-header-border: 0 !important;
  --flair-background: hsl(258, 12%, 12%) !important;
  --flair-color: hsl(0, 0%, 85%) !important;
  --footnote-divider-color: hsl(258, 12%, 21%) !important;
  --footnote-id-color: hsl(0, 0%, 70%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 40%) !important;
  --footnote-input-background-active: hsl(258 12% 29% / 0.49) !important;
  --frame-right-space: 81px !important;
  --graph-line: hsl(258, 12%, 25%) !important;
  --graph-node: hsl(258, 12%, 70%) !important;
  --graph-node-focused: hsl(258, 88%, 66%) !important;
  --graph-node-unresolved: hsl(258, 12%, 40%) !important;
  --graph-text: hsl(0, 0%, 85%) !important;
  --gray: hsl(0, 0%, 70%) !important;
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
  --heading-formatting: hsl(0, 0%, 40%) !important;
  --heading-spacing: 1.5rem !important;
  --highlight: hsl(258 12% 29% / 0.49) !important;
  --hr-color: hsl(258 12% 23%) !important;
  --i-0: hsl(258, 12%, 13%) !important;
  --i-1: hsl(258, 12%, 14%) !important;
  --i-2: hsl(258, 12%, 16%) !important;
  --i-3: hsl(258, 12%, 20%) !important;
  --i-4: hsl(258, 12%, 22%) !important;
  --i-5: hsl(258, 12%, 24%) !important;
  --i-6: hsl(258, 12%, 26%) !important;
  --i-7: hsl(258, 12%, 28%) !important;
  --i-8: hsl(258, 12%, 30%) !important;
  --i-active-line-color: hsl(258, 88%, 66%) !important;
  --i-active-line-highlight: oklch(from hsl(258, 88%, 66%) 0.65 c h / 0.1) !important;
  --i-active-line-highlight-inactive: oklch(from oklch(from hsl(258, 88%, 66%) 0.65 c h / 0.1) l c h / 0.05) !important;
  --i-border-radius: 8px !important;
  --i-bullet-color: hsl(258, 88%, 66%) !important;
  --i-bullet-color-collapsed: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --i-bullet-color-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --i-card-layout-border: hsl(258, 12%, 24%) !important;
  --i-card-radius: 8px !important;
  --i-card-radius-macos: 10px !important;
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
  --i-layout-border-color: hsl(258, 12%, 28%) !important;
  --i-layout-color: hsl(258, 12%, 20%) !important;
  --i-link-bg-hover: hsl(258, 12%, 20%) !important;
  --i-link-underline-color: oklch(from oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) l c h / 0.35) !important;
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
  --i-pattern-color: hsl(from hsl(258, 12%, 14%) h s 15%) !important;
  --i-pattern-dk-l: 3% !important;
  --i-pattern-height: 10px !important;
  --i-pattern-line-width: 1px !important;
  --i-pattern-lt-l: 3% !important;
  --i-pattern-width: 10px !important;
  --i-properties-s: 12% !important;
  --i-s: 12% !important;
  --i-scrollbar-color: hsl(258, 12%, 28%) !important;
  --i-scrollbar-color-active: hsl(258, 12%, 30%) !important;
  --i-scrollbar-thumb-size: 4px !important;
  --i-scrollbar-track-size: 9px !important;
  --i-slider-thumb-shadow: 0 0 0 5px hsl(258, 12%, 52%, 0.35) !important;
  --i-spacing-below-headings: 0.3rem !important;
  --i-translucent-floating-nav-opacity: 92% !important;
  --icon-color: hsl(0, 0%, 85%) !important;
  --icon-color-active: hsl(258, 88%, 66%) !important;
  --icon-color-focused: hsl(0, 0%, 85%) !important;
  --icon-color-hover: hsl(0, 0%, 85%) !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: hsl(258 12% 23%) !important;
  --indentation-guide-color-active: hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(0, 0%, 40%) !important;
  --input-placeholder-color: hsl(0, 0%, 40%) !important;
  --input-shadow: inset 0 0 0 1px hsl(258, 12%, 21%) !important;
  --input-shadow-hover: inset 0 0 0 1px hsl(258, 12%, 25%) !important;
  --interactive-accent-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --interactive-hover: hsl(258, 12%, 20%) !important;
  --interactive-normal: hsl(258, 12%, 12%) !important;
  --light: hsl(258, 12%, 12%) !important;
  --lightgray: hsl(258, 12%, 14%) !important;
  --link-color: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --link-color-hover: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --link-external-color: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --link-external-color-hover: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --link-unresolved-color: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-collapsed: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --list-marker-color-hover: oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h) !important;
  --menu-background: hsl(258, 12%, 14%) !important;
  --menu-border-color: hsl(258, 12%, 25%) !important;
  --metadata-border-color: hsl(258, 12%, 21%) !important;
  --metadata-divider-color: hsl(258, 12%, 21%) !important;
  --metadata-input-background-active: hsl(258 12% 29% / 0.49) !important;
  --metadata-input-text-color: hsl(0, 0%, 85%) !important;
  --metadata-label-background-active: hsl(258 12% 29% / 0.49) !important;
  --metadata-label-text-color: hsl(0, 0%, 70%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 70%) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: hsl(258 12% 29% / 0.49) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258, 12%, 33%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(258, 12%, 25%) !important;
  --modal-background: hsl(258, 12%, 12%) !important;
  --modal-border-color: hsl(258, 12%, 25%) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 40%) !important;
  --nav-heading-color: hsl(0, 0%, 85%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 40%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 70%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 85%) !important;
  --nav-indentation-guide-color: hsl(258, 12%, 22%) !important;
  --nav-item-background-active: hsl(258 12% 29% / 0.49) !important;
  --nav-item-background-hover: hsl(258 12% 29% / 0.49) !important;
  --nav-item-color: hsl(0, 0%, 85%) !important;
  --nav-item-color-active: hsl(0, 0%, 85%) !important;
  --nav-item-color-highlighted: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --nav-item-color-hover: hsl(0, 0%, 85%) !important;
  --nav-item-color-selected: hsl(0, 0%, 85%) !important;
  --nav-tag-color: hsl(0, 0%, 40%) !important;
  --nav-tag-color-active: hsl(0, 0%, 70%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 70%) !important;
  --nn-theme-file-selected-bg: hsl(258 12% 29% / 0.49) !important;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.25) !important;
  --nn-theme-file-tag-border-radius: 4px !important;
  --nn-theme-file-tag-color: hsl(0, 0%, 85%) !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: hsl(258, 88%, 66%) !important;
  --nn-theme-mobile-toolbar-button-icon-color: hsl(258, 88%, 66%) !important;
  --nn-theme-nav-bg: hsl(258, 12%, 12%) !important;
  --nn-theme-navitem-chevron-color: hsl(258, 88%, 66%) !important;
  --nn-theme-navitem-selected-bg: hsl(258 12% 29% / 0.49) !important;
  --p-spacing: 1.5rem !important;
  --pdf-background: hsl(258, 12%, 12%) !important;
  --pdf-page-background: hsl(258, 12%, 12%) !important;
  --pdf-shadow: 0 0 0 1px hsl(258, 12%, 21%) !important;
  --pdf-sidebar-background: hsl(258, 12%, 12%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(258, 12%, 21%) !important;
  --pill-border-color: hsl(258, 12%, 21%) !important;
  --pill-border-color-hover: hsl(258, 12%, 25%) !important;
  --pill-color: hsl(0, 0%, 70%) !important;
  --pill-color-hover: hsl(0, 0%, 85%) !important;
  --pill-color-remove: hsl(0, 0%, 40%) !important;
  --pill-color-remove-hover: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --prompt-background: hsl(258, 12%, 12%) !important;
  --prompt-border-color: hsl(258, 12%, 25%) !important;
  --raised-background: color-mix(in srgb, hsl(258, 12%, 12%) 65%, transparent) linear-gradient(hsl(258, 12%, 12%), color-mix(in srgb, hsl(258, 12%, 12%) 65%, transparent)) !important;
  --ribbon-background: hsl(258, 12%, 20%) !important;
  --ribbon-background-collapsed: hsl(258, 12%, 20%) !important;
  --ribbon-padding: 8px 0 12px !important;
  --search-clear-button-color: hsl(0, 0%, 70%) !important;
  --search-icon-color: hsl(0, 0%, 70%) !important;
  --search-result-background: hsl(258, 12%, 12%) !important;
  --secondary: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --setting-group-heading-color: hsl(0, 0%, 85%) !important;
  --setting-items-background: hsl(258, 12%, 12%) !important;
  --setting-items-border-color: hsl(258, 12%, 21%) !important;
  --setting-items-padding: 0 0 20px 0 !important;
  --setting-items-radius: 0 !important;
  --slider-thumb-border-color: hsl(258, 12%, 25%) !important;
  --slider-track-background: hsl(258, 12%, 21%) !important;
  --status-bar-background: hsl(258, 12%, 13%) !important;
  --status-bar-border-color: hsl(258, 12%, 21%) !important;
  --status-bar-text-color: hsl(0, 0%, 85%) !important;
  --suggestion-background: hsl(258, 12%, 12%) !important;
  --tab-background-active: hsl(258, 12%, 12%) !important;
  --tab-container-background: hsl(258, 12%, 13%) !important;
  --tab-divider-color: hsl(258, 12%, 25%) !important;
  --tab-outline-color: hsl(258, 12%, 21%) !important;
  --tab-switcher-background: hsl(258, 12%, 14%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 12%, 14%), transparent) !important;
  --tab-text-color: hsl(0, 0%, 85%) !important;
  --tab-text-color-active: hsl(0, 0%, 85%) !important;
  --tab-text-color-focused: hsl(0, 0%, 85%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 85%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 85%) !important;
  --tab-text-color-focused-highlighted: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --table-add-button-border-color: hsl(258 12% 23%) !important;
  --table-border-color: hsl(258 12% 23%) !important;
  --table-column-min-width: 4ch !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-background: hsl(258, 12%, 16%) !important;
  --table-header-background-hover: hsl(258, 12%, 16%) !important;
  --table-header-border-color: hsl(258 12% 23%) !important;
  --table-header-color: hsl(0, 0%, 85%) !important;
  --table-header-weight: 600 !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: hsla(258, 88%, 66%, 0.25) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.25) !important;
  --tag-color: hsl(0, 0%, 85%) !important;
  --tag-color-hover: hsl(0, 0%, 85%) !important;
  --tag-padding-x: 0.5em !important;
  --tag-radius: 4px !important;
  --tertiary: oklch(from oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) calc(l + 0.15) c h) !important;
  --text-accent: oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) !important;
  --text-accent-hover: oklch(from oklch(from hsl(258, 88%, 66%) 0.8 0.05 h) calc(l + 0.15) c h) !important;
  --text-faint: hsl(0, 0%, 40%) !important;
  --text-muted: hsl(0, 0%, 70%) !important;
  --text-normal: hsl(0, 0%, 85%) !important;
  --textHighlight: hsl(258 12% 29% / 0.49) !important;
  --titlebar-background: hsl(258, 12%, 13%) !important;
  --titlebar-background-focused: hsl(258, 12%, 13%) !important;
  --titlebar-border-color: hsl(258, 12%, 21%) !important;
  --titlebar-text-color: hsl(0, 0%, 70%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 85%) !important;
  --toggle-thumb-color: hsl(0, 0%, 85%) !important;
  --traffic-lights-offset-y: 58px !important;
  --vault-profile-color: hsl(0, 0%, 85%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 85%) !important;
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
  color: oklch(0.8 0.05 292.489);
  outline: oklch(0.8 0.05 292.489) none 0px;
  text-decoration: underline oklch(0.8 0.05 292.489 / 0.35);
  text-decoration-color: oklch(0.8 0.05 292.489 / 0.35);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.8 0.05 292.489);
  outline: oklch(0.8 0.05 292.489) none 0px;
  text-decoration: underline oklch(0.8 0.05 292.489 / 0.35);
  text-decoration-color: oklch(0.8 0.05 292.489 / 0.35);
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.8 0.05 292.489);
  outline: oklch(0.8 0.05 292.489) none 0px;
  text-decoration-color: oklch(0.8 0.05 292.489);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-9.5-.75a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-9.5-.75a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='none'%3E%3Cg clip-path='url(%23gravityUiExclamationShapeFill0)'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m10.921 1.575l-.35 7A1.5 1.5 0 0 1 9.073 10H6.927a1.5 1.5 0 0 1-1.498-1.425l-.35-7A1.5 1.5 0 0 1 6.577 0h2.846a1.5 1.5 0 0 1 1.498 1.575M8 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5' clip-rule='evenodd'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='gravityUiExclamationShapeFill0'%3E%3Cpath fill='currentColor' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='none'%3E%3Cg clip-path='url(%23gravityUiExclamationShapeFill0)'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m10.921 1.575l-.35 7A1.5 1.5 0 0 1 9.073 10H6.927a1.5 1.5 0 0 1-1.498-1.425l-.35-7A1.5 1.5 0 0 1 6.577 0h2.846a1.5 1.5 0 0 1 1.498 1.575M8 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5' clip-rule='evenodd'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='gravityUiExclamationShapeFill0'%3E%3Cpath fill='currentColor' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.44 4.54c.43-.354.994-.565 1.56-.565c1.217 0 2.34.82 2.34 2.14c0 .377-.079.745-.298 1.1c-.208.339-.513.614-.875.867c-.217.153-.326.257-.379.328c-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.056-1.645c.28-.196.402-.332.46-.425a.54.54 0 0 0 .073-.313c0-.3-.243-.641-.839-.641a1 1 0 0 0-.608.224c-.167.137-.231.286-.231.417a.75.75 0 0 1-1.5 0c0-.673.345-1.22.78-1.577M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.44 4.54c.43-.354.994-.565 1.56-.565c1.217 0 2.34.82 2.34 2.14c0 .377-.079.745-.298 1.1c-.208.339-.513.614-.875.867c-.217.153-.326.257-.379.328c-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.056-1.645c.28-.196.402-.332.46-.425a.54.54 0 0 0 .073-.313c0-.3-.243-.641-.839-.641a1 1 0 0 0-.608.224c-.167.137-.231.286-.231.417a.75.75 0 0 1-1.5 0c0-.673.345-1.22.78-1.577M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='none'%3E%3Cg clip-path='url(%23gravityUiQuoteClose0)'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.589 9.67A2.75 2.75 0 0 1 1.5 7v-.25A2.75 2.75 0 0 1 4.25 4h.25a2.747 2.747 0 0 1 2.748 2.657v.003h.002V7q0 .197-.027.386q-.03.392-.09.77a8 8 0 0 1-.559 1.918a7.2 7.2 0 0 1-2.162 2.801l-.098.076A.24.24 0 0 1 4.17 13a.25.25 0 0 1-.22-.367a17 17 0 0 0 .65-1.384c.197-.474.396-1.013.557-1.578a2.7 2.7 0 0 1-.657.079h-.25q-.343-.001-.661-.08m-.549 1.405A4.25 4.25 0 0 1 0 7v-.25A4.25 4.25 0 0 1 4.25 2.5h.25c1.452 0 2.733.728 3.5 1.838A4.25 4.25 0 0 1 11.5 2.5h.25A4.25 4.25 0 0 1 16 6.664V7q0 .275-.035.543c-.207 2.62-1.358 4.966-3.488 6.599a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86a4.25 4.25 0 0 1-2.005-1.297a8.76 8.76 0 0 1-3.058 4.363a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86m7.8-1.406q.318.079.661.08h.25a2.8 2.8 0 0 0 .657-.079a14 14 0 0 1-.68 1.865a18 18 0 0 1-.527 1.097a.25.25 0 0 0 .22.367a.24.24 0 0 0 .144-.049l.098-.076q.452-.358.832-.768a7.2 7.2 0 0 0 1.39-2.172a8 8 0 0 0 .498-1.779a9 9 0 0 0 .091-.77q.027-.19.027-.386v-.339H14.5v-.004A2.747 2.747 0 0 0 11.75 4h-.251a2.75 2.75 0 0 0-2.75 2.75V7c0 1.29.89 2.374 2.089 2.67' clip-rule='evenodd'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='gravityUiQuoteClose0'%3E%3Cpath fill='currentColor' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='none'%3E%3Cg clip-path='url(%23gravityUiQuoteClose0)'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.589 9.67A2.75 2.75 0 0 1 1.5 7v-.25A2.75 2.75 0 0 1 4.25 4h.25a2.747 2.747 0 0 1 2.748 2.657v.003h.002V7q0 .197-.027.386q-.03.392-.09.77a8 8 0 0 1-.559 1.918a7.2 7.2 0 0 1-2.162 2.801l-.098.076A.24.24 0 0 1 4.17 13a.25.25 0 0 1-.22-.367a17 17 0 0 0 .65-1.384c.197-.474.396-1.013.557-1.578a2.7 2.7 0 0 1-.657.079h-.25q-.343-.001-.661-.08m-.549 1.405A4.25 4.25 0 0 1 0 7v-.25A4.25 4.25 0 0 1 4.25 2.5h.25c1.452 0 2.733.728 3.5 1.838A4.25 4.25 0 0 1 11.5 2.5h.25A4.25 4.25 0 0 1 16 6.664V7q0 .275-.035.543c-.207 2.62-1.358 4.966-3.488 6.599a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86a4.25 4.25 0 0 1-2.005-1.297a8.76 8.76 0 0 1-3.058 4.363a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86m7.8-1.406q.318.079.661.08h.25a2.8 2.8 0 0 0 .657-.079a14 14 0 0 1-.68 1.865a18 18 0 0 1-.527 1.097a.25.25 0 0 0 .22.367a.24.24 0 0 0 .144-.049l.098-.076q.452-.358.832-.768a7.2 7.2 0 0 0 1.39-2.172a8 8 0 0 0 .498-1.779a9 9 0 0 0 .091-.77q.027-.19.027-.386v-.339H14.5v-.004A2.747 2.747 0 0 0 11.75 4h-.251a2.75 2.75 0 0 0-2.75 2.75V7c0 1.29.89 2.374 2.089 2.67' clip-rule='evenodd'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='gravityUiQuoteClose0'%3E%3Cpath fill='currentColor' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' d='M6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118l3.943-.268z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' d='M6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118l3.943-.268z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M5.25 5.497a.75.75 0 0 1-.75-.75V4A1.5 1.5 0 0 0 3 5.5v1h10v-1A1.5 1.5 0 0 0 11.5 4v.75a.75.75 0 0 1-1.5 0V4H6v.747a.75.75 0 0 1-.75.75M10 2.5H6v-.752a.75.75 0 1 0-1.5 0V2.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0zM3 8v3.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M5.25 5.497a.75.75 0 0 1-.75-.75V4A1.5 1.5 0 0 0 3 5.5v1h10v-1A1.5 1.5 0 0 0 11.5 4v.75a.75.75 0 0 1-1.5 0V4H6v.747a.75.75 0 0 1-.75.75M10 2.5H6v-.752a.75.75 0 1 0-1.5 0V2.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0zM3 8v3.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M7.29 13.904L5.25 10.75L2.096 8.71a2.4 2.4 0 0 1 .5-4.278l9.273-3.296a2.346 2.346 0 0 1 2.996 2.995L13.45 3.63a.844.844 0 0 0-1.08-1.08L3.1 5.846a.9.9 0 0 0-.19 1.604l2.78 1.799l3.279-3.28a.75.75 0 1 1 1.06 1.061L6.75 10.31l1.799 2.779a.9.9 0 0 0 1.604-.188l3.297-9.272l1.413.502l-3.296 9.273a2.4 2.4 0 0 1-4.277.5' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M7.29 13.904L5.25 10.75L2.096 8.71a2.4 2.4 0 0 1 .5-4.278l9.273-3.296a2.346 2.346 0 0 1 2.996 2.995L13.45 3.63a.844.844 0 0 0-1.08-1.08L3.1 5.846a.9.9 0 0 0-.19 1.604l2.78 1.799l3.279-3.28a.75.75 0 1 1 1.06 1.061L6.75 10.31l1.799 2.779a.9.9 0 0 0 1.604-.188l3.297-9.272l1.413.502l-3.296 9.273a2.4 2.4 0 0 1-4.277.5' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8V104a48 48 0 0 1 41.61-47.56A84 84 0 0 1 178 56a46.06 46.06 0 0 1 46 46c0 53.61-77.75 102.15-96 112.8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8V104a48 48 0 0 1 41.61-47.56A84 84 0 0 1 178 56a46.06 46.06 0 0 1 46 46c0 53.61-77.75 102.15-96 112.8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-9.5a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-9.5a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 7.25a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 7.25a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.53 5.47a.75.75 0 0 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.53 5.47a.75.75 0 0 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.5 11.937V13a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5v-.401A3 3 0 0 1 11 12H4q-.26 0-.5-.063M2 10V3q0-.103.01-.204a2 2 0 0 1 .676-1.304A2 2 0 0 1 4 1h7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2zm1.5 0a.5.5 0 0 0 .5.5h7A1.5 1.5 0 0 0 12.5 9V4q0-.156-.03-.302A1.5 1.5 0 0 0 11 2.5H4a.5.5 0 0 0-.5.5zm2-4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.5 11.937V13a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5v-.401A3 3 0 0 1 11 12H4q-.26 0-.5-.063M2 10V3q0-.103.01-.204a2 2 0 0 1 .676-1.304A2 2 0 0 1 4 1h7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2zm1.5 0a.5.5 0 0 0 .5.5h7A1.5 1.5 0 0 0 12.5 9V4q0-.156-.03-.302A1.5 1.5 0 0 0 11 2.5H4a.5.5 0 0 0-.5.5zm2-4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' d='M11 1.5a3 3 0 0 1 3 3v8.546a1.454 1.454 0 0 1-2.411 1.094L8 11l-3.589 3.14A1.454 1.454 0 0 1 2 13.046V4.5a3 3 0 0 1 3-3z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' d='M11 1.5a3 3 0 0 1 3 3v8.546a1.454 1.454 0 0 1-2.411 1.094L8 11l-3.589 3.14A1.454 1.454 0 0 1 2 13.046V4.5a3 3 0 0 1 3-3z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8.9 14.315a1.38 1.38 0 0 1-2.542-.984L7.07 10H3.13a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7zm4.352-5.762a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8.9 14.315a1.38 1.38 0 0 1-2.542-.984L7.07 10H3.13a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7zm4.352-5.762a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.03 6.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.03 6.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m6.452 6.864l1.13-2.173a32 32 0 0 1 1.872-3.095c.964 1.045 1.906 2.3 2.612 3.622c.748 1.402 1.184 2.789 1.184 4.032c0 1.427-.904 2.83-2.153 3.613q.088-.398.09-.863c0-1.255-.674-2.336-1.143-2.963a9 9 0 0 0-1.01-1.125l-.024-.02l-.008-.008L9 7.88l-.001-.001C8.996 7.88 8.996 7.878 8 9a7 7 0 0 0 .984 1.133c.37.534.704 1.2.704 1.867c0 .77-.313 1.276-.618 1.587c-.159.162-.279.38-.314.6a.8.8 0 0 0 0 .264q.017.095.06.182c.113.225.343.37.594.35c2.836-.235 5.34-2.87 5.34-5.733c0-3.149-2.177-6.538-4.357-8.845A1.3 1.3 0 0 0 9.435 0A1.32 1.32 0 0 0 8.35.556A34 34 0 0 0 6.25 4l-.955-1.337l-.016-.022a.986.986 0 0 0-1.573.004C2.62 4.123 1.25 6.249 1.25 9.25c0 2.863 2.504 5.498 5.34 5.733c.25.02.481-.125.593-.35a.7.7 0 0 0 .06-.182a.8.8 0 0 0 .001-.263a1.15 1.15 0 0 0-.314-.601c-.305-.31-.617-.817-.617-1.587c0-.666.333-1.333.703-1.867l.09-.128C7.544 9.405 8 9 8 9l-.997-1.12H7l-.003.003l-.008.007l-.024.021l-.073.07a9 9 0 0 0-.937 1.056c-.47.626-1.143 1.707-1.143 2.962c0 .31.033.598.09.863C3.654 12.08 2.75 10.677 2.75 9.25c0-2.171.847-3.812 1.745-5.126l.534.748zM8 9l.997-1.121L8 6.993l-.997.886z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m6.452 6.864l1.13-2.173a32 32 0 0 1 1.872-3.095c.964 1.045 1.906 2.3 2.612 3.622c.748 1.402 1.184 2.789 1.184 4.032c0 1.427-.904 2.83-2.153 3.613q.088-.398.09-.863c0-1.255-.674-2.336-1.143-2.963a9 9 0 0 0-1.01-1.125l-.024-.02l-.008-.008L9 7.88l-.001-.001C8.996 7.88 8.996 7.878 8 9a7 7 0 0 0 .984 1.133c.37.534.704 1.2.704 1.867c0 .77-.313 1.276-.618 1.587c-.159.162-.279.38-.314.6a.8.8 0 0 0 0 .264q.017.095.06.182c.113.225.343.37.594.35c2.836-.235 5.34-2.87 5.34-5.733c0-3.149-2.177-6.538-4.357-8.845A1.3 1.3 0 0 0 9.435 0A1.32 1.32 0 0 0 8.35.556A34 34 0 0 0 6.25 4l-.955-1.337l-.016-.022a.986.986 0 0 0-1.573.004C2.62 4.123 1.25 6.249 1.25 9.25c0 2.863 2.504 5.498 5.34 5.733c.25.02.481-.125.593-.35a.7.7 0 0 0 .06-.182a.8.8 0 0 0 .001-.263a1.15 1.15 0 0 0-.314-.601c-.305-.31-.617-.817-.617-1.587c0-.666.333-1.333.703-1.867l.09-.128C7.544 9.405 8 9 8 9l-.997-1.12H7l-.003.003l-.008.007l-.024.021l-.073.07a9 9 0 0 0-.937 1.056c-.47.626-1.143 1.707-1.143 2.962c0 .31.033.598.09.863C3.654 12.08 2.75 10.677 2.75 9.25c0-2.171.847-3.812 1.745-5.126l.534.748zM8 9l.997-1.121L8 6.993l-.997.886z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 7.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V8.5A.75.75 0 0 1 8 7.75' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 7.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V8.5A.75.75 0 0 1 8 7.75' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6.26 15.109a4 4 0 0 0 3.48 0l.13-.063a2 2 0 0 0 1.13-1.8v-.468c0-1.352.776-2.557 1.54-3.673a5.5 5.5 0 1 0-9.08 0C4.224 10.221 5 11.426 5 12.779v.467a2 2 0 0 0 1.13 1.801zm2.828-1.35l.13-.064a.5.5 0 0 0 .282-.45v-.467q0-.255.025-.5a5.33 5.33 0 0 1-3.05 0q.024.245.025.5v.467a.5.5 0 0 0 .282.45l.13.063a2.5 2.5 0 0 0 2.176 0m-4.39-5.501c.394.576.891 1.302 1.263 2.148a3.79 3.79 0 0 0 4.078 0c.372-.846.869-1.572 1.264-2.148a4 4 0 1 0-6.605 0' clip-rule='evenodd'/%3E%3Cpath d='M8 3.5A.75.75 0 0 0 8 5a1 1 0 0 1 1 1a.75.75 0 0 0 1.5 0A2.5 2.5 0 0 0 8 3.5'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6.26 15.109a4 4 0 0 0 3.48 0l.13-.063a2 2 0 0 0 1.13-1.8v-.468c0-1.352.776-2.557 1.54-3.673a5.5 5.5 0 1 0-9.08 0C4.224 10.221 5 11.426 5 12.779v.467a2 2 0 0 0 1.13 1.801zm2.828-1.35l.13-.064a.5.5 0 0 0 .282-.45v-.467q0-.255.025-.5a5.33 5.33 0 0 1-3.05 0q.024.245.025.5v.467a.5.5 0 0 0 .282.45l.13.063a2.5 2.5 0 0 0 2.176 0m-4.39-5.501c.394.576.891 1.302 1.263 2.148a3.79 3.79 0 0 0 4.078 0c.372-.846.869-1.572 1.264-2.148a4 4 0 1 0-6.605 0' clip-rule='evenodd'/%3E%3Cpath d='M8 3.5A.75.75 0 0 0 8 5a1 1 0 0 1 1 1a.75.75 0 0 0 1.5 0A2.5 2.5 0 0 0 8 3.5'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M10.313 7.488L9 7.653v5.37a.5.5 0 0 1-.353.478l-1.62.498l-.006.001h-.008l-.007-.006l-.005-.007v-.003L7 13.979V7.653l-1.313-.165a1.5 1.5 0 0 1-1.271-1.144l-.588-2.5A1.5 1.5 0 0 1 5.288 2h5.424a1.5 1.5 0 0 1 1.46 1.844l-.588 2.5a1.5 1.5 0 0 1-1.271 1.144m2.731-.8A3 3 0 0 1 10.5 8.976v4.046a2 2 0 0 1-1.412 1.911l-1.62.499A1.52 1.52 0 0 1 5.5 13.979V8.977a3 3 0 0 1-2.544-2.29l-.588-2.5A3 3 0 0 1 5.288.5h5.424a3 3 0 0 1 2.92 3.687zM6.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M10.313 7.488L9 7.653v5.37a.5.5 0 0 1-.353.478l-1.62.498l-.006.001h-.008l-.007-.006l-.005-.007v-.003L7 13.979V7.653l-1.313-.165a1.5 1.5 0 0 1-1.271-1.144l-.588-2.5A1.5 1.5 0 0 1 5.288 2h5.424a1.5 1.5 0 0 1 1.46 1.844l-.588 2.5a1.5 1.5 0 0 1-1.271 1.144m2.731-.8A3 3 0 0 1 10.5 8.976v4.046a2 2 0 0 1-1.412 1.911l-1.62.499A1.52 1.52 0 0 1 5.5 13.979V8.977a3 3 0 0 1-2.544-2.29l-.588-2.5A3 3 0 0 1 5.288.5h5.424a3 3 0 0 1 2.92 3.687zM6.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0m-5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0m-5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c-.003.03-.013.157.362.35C6.297 2.832 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M12 2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52c0 1.854-2.402 2.848-5.5 2.985V15a.75.75 0 0 1-1.5 0v-3.266c-3.098-.136-5.5-1.131-5.5-2.984c0-1.2 1.008-2.04 2.561-2.52l.825-2.311C4.433 3.544 4 2.988 4 2.25C4 .75 5.79 0 8 0s4 .75 4 2.25' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c-.003.03-.013.157.362.35C6.297 2.832 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M12 2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52c0 1.854-2.402 2.848-5.5 2.985V15a.75.75 0 0 1-1.5 0v-3.266c-3.098-.136-5.5-1.131-5.5-2.984c0-1.2 1.008-2.04 2.561-2.52l.825-2.311C4.433 3.544 4 2.988 4 2.25C4 .75 5.79 0 8 0s4 .75 4 2.25' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M7.1 1.685a1.38 1.38 0 0 1 2.542.984L8.93 6h3.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14L4 7zM2.749 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M7.1 1.685a1.38 1.38 0 0 1 2.542.984L8.93 6h3.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14L4 7zM2.749 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.25a.75.75 0 0 0-1.5 0v.339a2.5 2.5 0 0 0-1.007.47a1.95 1.95 0 0 0-.74 1.546c0 .764.474 1.265.94 1.559c.456.287 1.007.448 1.448.547c.462.102.843.191 1.118.341c.228.125.275.224.275.376c0 .102-.04.217-.248.341c-.224.135-.577.229-.982.229c-.344 0-.683-.114-.953-.29c-.281-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.171.543.591 1 1.068 1.31c.284.185.612.335.968.429v.357a.75.75 0 0 0 1.5 0v-.313c.375-.067.74-.19 1.058-.382c.53-.319.976-.864.976-1.627c0-.864-.51-1.394-1.055-1.692c-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352c-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227c.47 0 .742.11.9.218a.83.83 0 0 1 .316.41a.75.75 0 0 0 1.407-.52a2.33 2.33 0 0 0-.878-1.13a2.7 2.7 0 0 0-1.048-.417z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.25a.75.75 0 0 0-1.5 0v.339a2.5 2.5 0 0 0-1.007.47a1.95 1.95 0 0 0-.74 1.546c0 .764.474 1.265.94 1.559c.456.287 1.007.448 1.448.547c.462.102.843.191 1.118.341c.228.125.275.224.275.376c0 .102-.04.217-.248.341c-.224.135-.577.229-.982.229c-.344 0-.683-.114-.953-.29c-.281-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.171.543.591 1 1.068 1.31c.284.185.612.335.968.429v.357a.75.75 0 0 0 1.5 0v-.313c.375-.067.74-.19 1.058-.382c.53-.319.976-.864.976-1.627c0-.864-.51-1.394-1.055-1.692c-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352c-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227c.47 0 .742.11.9.218a.83.83 0 0 1 .316.41a.75.75 0 0 0 1.407-.52a2.33 2.33 0 0 0-.878-1.13a2.7 2.7 0 0 0-1.048-.417z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1.97-5.72a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L8 7.31z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1.97-5.72a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L8 7.31z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M11.836 1.5a.664.664 0 0 1 .491 1.11l-.354.39H4.027l-.354-.39a.664.664 0 0 1 .49-1.11zm-6.445 3l2.124 2.336a.5.5 0 0 0 .37.164h.23a.5.5 0 0 0 .37-.164L10.61 4.5zm.652 2.947L3.5 4.65v1.852a.5.5 0 0 0 .123.328L4.87 8.266a4.5 4.5 0 0 1 1.172-.82m-2.08 2.061l-1.47-1.693A2 2 0 0 1 2 6.502V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.502a2 2 0 0 1-.49 1.312l-1.474 1.694a4.5 4.5 0 1 1-8.073 0m7.166-1.242a4.5 4.5 0 0 0-1.172-.82L12.5 4.65v1.852a.5.5 0 0 1-.123.328zM11 11.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M11.836 1.5a.664.664 0 0 1 .491 1.11l-.354.39H4.027l-.354-.39a.664.664 0 0 1 .49-1.11zm-6.445 3l2.124 2.336a.5.5 0 0 0 .37.164h.23a.5.5 0 0 0 .37-.164L10.61 4.5zm.652 2.947L3.5 4.65v1.852a.5.5 0 0 0 .123.328L4.87 8.266a4.5 4.5 0 0 1 1.172-.82m-2.08 2.061l-1.47-1.693A2 2 0 0 1 2 6.502V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.502a2 2 0 0 1-.49 1.312l-1.474 1.694a4.5 4.5 0 1 1-8.073 0m7.166-1.242a4.5 4.5 0 0 0-1.172-.82L12.5 4.65v1.852a.5.5 0 0 1-.123.328zM11 11.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
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
  --callout-color: 83, 223, 221;
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
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
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
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
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
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
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
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
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
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
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
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
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
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
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
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  border-bottom-color: oklch(0.8 0.05 292.489);
  border-left-color: oklch(0.8 0.05 292.489);
  border-right-color: oklch(0.8 0.05 292.489);
  border-top-color: oklch(0.8 0.05 292.489);
  color: oklch(0.8 0.05 292.489);
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
  --background-modifier-border: hsl(258, 25%, 88%) !important;
  --background-modifier-border-focus: hsl(258, 25%, 74%) !important;
  --background-modifier-border-hover: hsl(258, 25%, 83%) !important;
  --background-modifier-hover: hsl(258 25% 67% / 0.18) !important;
  --background-primary-alt: hsl(258, 25%, 98%) !important;
  --background-secondary: hsl(258, 25%, 97%) !important;
  --background-secondary-alt: hsl(258, 25%, 99%) !important;
  --bases-cards-cover-background: hsl(258, 25%, 98%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258 25% 86%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)) !important;
  --bases-embed-border-color: hsl(258 25% 86%) !important;
  --bases-embed-border-radius: 7px !important;
  --bases-embed-radius: 7px !important;
  --bases-table-border-color: hsl(258 25% 86%) !important;
  --bases-table-cell-background-disabled: hsl(258, 25%, 98%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258, 25%, 74%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-group-background: hsl(258, 25%, 98%) !important;
  --bases-table-header-background-hover: hsl(258 25% 67% / 0.18) !important;
  --bases-table-header-color: #222222 !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-summary-background-hover: hsl(258 25% 67% / 0.18) !important;
  --blockquote-background-color: hsla(258, 88%, 66%, 0.1) !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: 0;
  --callout-radius: 7px;
  --callout-title-padding: 0.5em 1em;
  --callout-title-weight: 700;
  --canvas-dot-pattern: hsl(258, 25%, 88%) !important;
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
  --color-base-05: hsl(258, 25%, 99%) !important;
  --color-base-10: hsl(258, 25%, 98%) !important;
  --color-base-100: hsl(258, 25%, 13%) !important;
  --color-base-20: hsl(258, 25%, 96%) !important;
  --color-base-25: hsl(258, 25%, 89%) !important;
  --color-base-30: hsl(258, 25%, 88%) !important;
  --color-base-35: hsl(258, 25%, 83%) !important;
  --color-base-40: hsl(258, 25%, 74%) !important;
  --color-base-50: hsl(258, 25%, 67%) !important;
  --color-base-60: hsl(258, 25%, 44%) !important;
  --color-base-70: hsl(258, 25%, 36%) !important;
  --divider-color: hsl(258, 25%, 88%) !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --dropdown-background-hover: hsl(258, 25%, 94%) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid hsl(258 25% 86%) !important;
  --embed-border-end: 1px solid hsl(258 25% 86%) !important;
  --embed-border-start: 1px solid hsl(258 25% 86%) !important;
  --embed-border-top: 1px solid hsl(258 25% 86%) !important;
  --embed-padding: 0 !important;
  --file-header-border: 0 !important;
  --footnote-divider-color: hsl(258, 25%, 88%) !important;
  --footnote-input-background-active: hsl(258 25% 67% / 0.18) !important;
  --frame-right-space: 81px !important;
  --graph-line: hsl(258, 25%, 83%) !important;
  --graph-node: hsl(258, 25%, 36%) !important;
  --graph-node-unresolved: hsl(258, 25%, 67%) !important;
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
  --i-0: hsl(258, 25%, 98%) !important;
  --i-1: hsl(258, 25%, 97%) !important;
  --i-2: hsl(258, 25%, 94%) !important;
  --i-3: hsl(258, 25%, 90%) !important;
  --i-4: hsl(258, 25%, 88%) !important;
  --i-5: hsl(258, 25%, 86%) !important;
  --i-6: hsl(258, 25%, 84%) !important;
  --i-7: hsl(258, 25%, 82%) !important;
  --i-8: hsl(258, 25%, 80%) !important;
  --i-active-line-color: hsl(258, 88%, 66%) !important;
  --i-active-line-highlight: oklch(from hsl(258, 88%, 66%) 0.65 c h / 0.1) !important;
  --i-active-line-highlight-inactive: oklch(from oklch(from hsl(258, 88%, 66%) 0.65 c h / 0.1) l c h / 0.05) !important;
  --i-border-radius: 8px !important;
  --i-bullet-color: hsl(258, 88%, 66%) !important;
  --i-bullet-color-collapsed: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --i-bullet-color-hover: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --i-card-layout-border: hsl(258, 25%, 82%) !important;
  --i-card-radius: 8px !important;
  --i-card-radius-macos: 10px !important;
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
  --i-layout-border-color: hsl(258, 25%, 80%) !important;
  --i-layout-color: hsl(258, 25%, 88%) !important;
  --i-link-bg-hover: hsl(258, 25%, 94%) !important;
  --i-link-underline-color: oklch(from oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) l c h / 0.25) !important;
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
  --i-pattern-color: hsl(from hsl(258, 25%, 97%) h s 97%) !important;
  --i-pattern-dk-l: 3% !important;
  --i-pattern-height: 10px !important;
  --i-pattern-line-width: 1px !important;
  --i-pattern-lt-l: 3% !important;
  --i-pattern-width: 10px !important;
  --i-properties-s: 88% !important;
  --i-s: 25% !important;
  --i-scrollbar-color: hsl(258, 25%, 86%) !important;
  --i-scrollbar-color-active: hsl(258, 25%, 82%) !important;
  --i-scrollbar-thumb-size: 4px !important;
  --i-scrollbar-track-size: 9px !important;
  --i-slider-thumb-shadow: 0 0 0 5px hsl(258, 25%, 50%, 0.15) !important;
  --i-spacing-below-headings: 0.3rem !important;
  --i-translucent-floating-nav-opacity: 92% !important;
  --icon-color: #222222 !important;
  --icon-color-hover: #222222 !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: hsl(258 25% 86%) !important;
  --indentation-guide-color-active: hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 600 !important;
  --input-shadow: inset 0 0 0 1px hsl(258, 25%, 88%) !important;
  --input-shadow-hover: inset 0 0 0 1px hsl(258, 25%, 83%) !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-hover: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --interactive-hover: hsl(258, 25%, 94%) !important;
  --light: hsl(258, 25%, 98%) !important;
  --lightgray: hsl(258, 25%, 97%) !important;
  --link-color: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --link-color-hover: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --link-external-color: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --link-external-color-hover: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --link-unresolved-color: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-collapsed: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --list-marker-color-hover: oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h) !important;
  --menu-background: hsl(258, 25%, 97%) !important;
  --menu-border-color: hsl(258, 25%, 83%) !important;
  --metadata-border-color: hsl(258, 25%, 88%) !important;
  --metadata-divider-color: hsl(258, 25%, 88%) !important;
  --metadata-input-background-active: hsl(258 25% 67% / 0.18) !important;
  --metadata-label-background-active: hsl(258 25% 67% / 0.18) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: hsl(258 25% 67% / 0.18) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258, 25%, 74%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(258, 25%, 83%) !important;
  --modal-border-color: hsl(258, 25%, 83%) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-indentation-guide-color: hsl(258, 25%, 88%) !important;
  --nav-item-background-active: hsl(258 25% 67% / 0.18) !important;
  --nav-item-background-hover: hsl(258 25% 67% / 0.18) !important;
  --nav-item-color: #222222 !important;
  --nav-item-color-highlighted: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --nn-theme-file-selected-bg: hsl(258 25% 67% / 0.18) !important;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.2) !important;
  --nn-theme-file-tag-border-radius: 4px !important;
  --nn-theme-file-tag-color: #222222 !important;
  --nn-theme-mobile-toolbar-button-active-icon-color: hsl(258, 88%, 66%) !important;
  --nn-theme-mobile-toolbar-button-icon-color: hsl(258, 88%, 66%) !important;
  --nn-theme-nav-bg: #ffffff !important;
  --nn-theme-navitem-chevron-color: hsl(258, 88%, 66%) !important;
  --nn-theme-navitem-selected-bg: hsl(258 25% 67% / 0.18) !important;
  --p-spacing: 1.5rem !important;
  --pill-border-color: hsl(258, 25%, 88%) !important;
  --pill-border-color-hover: hsl(258, 25%, 83%) !important;
  --pill-color-remove-hover: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --prompt-border-color: hsl(258, 25%, 83%) !important;
  --ribbon-background: hsl(258, 25%, 88%) !important;
  --ribbon-background-collapsed: hsl(258, 25%, 88%) !important;
  --ribbon-padding: 8px 0 12px !important;
  --secondary: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --setting-items-background: #ffffff !important;
  --setting-items-border-color: hsl(258, 25%, 88%) !important;
  --setting-items-padding: 0 0 20px 0 !important;
  --setting-items-radius: 0 !important;
  --slider-thumb-border-color: hsl(258, 25%, 83%) !important;
  --slider-track-background: hsl(258, 25%, 88%) !important;
  --status-bar-background: hsl(258, 25%, 98%) !important;
  --status-bar-border-color: hsl(258, 25%, 88%) !important;
  --status-bar-text-color: #222222 !important;
  --tab-container-background: hsl(258, 25%, 98%) !important;
  --tab-divider-color: hsl(258, 25%, 83%) !important;
  --tab-outline-color: hsl(258, 25%, 88%) !important;
  --tab-switcher-background: hsl(258, 25%, 97%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 25%, 97%), transparent) !important;
  --tab-text-color: #222222 !important;
  --tab-text-color-active: #222222 !important;
  --tab-text-color-focused: #222222 !important;
  --tab-text-color-focused-active: #222222 !important;
  --tab-text-color-focused-highlighted: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --table-add-button-border-color: hsl(258 25% 86%) !important;
  --table-border-color: hsl(258 25% 86%) !important;
  --table-column-min-width: 4ch !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-background: hsl(258, 25%, 94%) !important;
  --table-header-background-hover: hsl(258, 25%, 94%) !important;
  --table-header-border-color: hsl(258 25% 86%) !important;
  --table-header-weight: 600 !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --table-selection-border-radius: 0 !important;
  --tag-background: hsla(258, 88%, 66%, 0.2) !important;
  --tag-color: #222222 !important;
  --tag-color-hover: #222222 !important;
  --tag-padding-x: 0.5em !important;
  --tag-radius: 4px !important;
  --tertiary: oklch(from oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) calc(l - 0.15) c h) !important;
  --text-accent: oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) !important;
  --text-accent-hover: oklch(from oklch(from hsl(258, 88%, 66%) 0.45 0.1 h) calc(l - 0.15) c h) !important;
  --textHighlight: hsl(258 25% 67% / 0.18) !important;
  --titlebar-background: hsl(258, 25%, 98%) !important;
  --titlebar-background-focused: hsl(258, 25%, 98%) !important;
  --titlebar-border-color: hsl(258, 25%, 88%) !important;
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
  color: oklch(0.45 0.1 292.489);
  outline: oklch(0.45 0.1 292.489) none 0px;
  text-decoration: underline oklch(0.45 0.1 292.489 / 0.25);
  text-decoration-color: oklch(0.45 0.1 292.489 / 0.25);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.45 0.1 292.489);
  outline: oklch(0.45 0.1 292.489) none 0px;
  text-decoration: underline oklch(0.45 0.1 292.489 / 0.25);
  text-decoration-color: oklch(0.45 0.1 292.489 / 0.25);
}

html[saved-theme="light"] body a.internal.broken {
  color: oklch(0.45 0.1 292.489);
  outline: oklch(0.45 0.1 292.489) none 0px;
  text-decoration-color: oklch(0.45 0.1 292.489);
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
  border-bottom-color: oklch(0.48 0.2 292.489);
  border-left-color: oklch(0.48 0.2 292.489);
  border-right-color: oklch(0.48 0.2 292.489);
  border-top-color: oklch(0.48 0.2 292.489);
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

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-9.5-.75a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-9.5-.75a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='none'%3E%3Cg clip-path='url(%23gravityUiExclamationShapeFill0)'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m10.921 1.575l-.35 7A1.5 1.5 0 0 1 9.073 10H6.927a1.5 1.5 0 0 1-1.498-1.425l-.35-7A1.5 1.5 0 0 1 6.577 0h2.846a1.5 1.5 0 0 1 1.498 1.575M8 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5' clip-rule='evenodd'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='gravityUiExclamationShapeFill0'%3E%3Cpath fill='currentColor' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='none'%3E%3Cg clip-path='url(%23gravityUiExclamationShapeFill0)'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m10.921 1.575l-.35 7A1.5 1.5 0 0 1 9.073 10H6.927a1.5 1.5 0 0 1-1.498-1.425l-.35-7A1.5 1.5 0 0 1 6.577 0h2.846a1.5 1.5 0 0 1 1.498 1.575M8 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5' clip-rule='evenodd'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='gravityUiExclamationShapeFill0'%3E%3Cpath fill='currentColor' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.44 4.54c.43-.354.994-.565 1.56-.565c1.217 0 2.34.82 2.34 2.14c0 .377-.079.745-.298 1.1c-.208.339-.513.614-.875.867c-.217.153-.326.257-.379.328c-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.056-1.645c.28-.196.402-.332.46-.425a.54.54 0 0 0 .073-.313c0-.3-.243-.641-.839-.641a1 1 0 0 0-.608.224c-.167.137-.231.286-.231.417a.75.75 0 0 1-1.5 0c0-.673.345-1.22.78-1.577M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.44 4.54c.43-.354.994-.565 1.56-.565c1.217 0 2.34.82 2.34 2.14c0 .377-.079.745-.298 1.1c-.208.339-.513.614-.875.867c-.217.153-.326.257-.379.328c-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.056-1.645c.28-.196.402-.332.46-.425a.54.54 0 0 0 .073-.313c0-.3-.243-.641-.839-.641a1 1 0 0 0-.608.224c-.167.137-.231.286-.231.417a.75.75 0 0 1-1.5 0c0-.673.345-1.22.78-1.577M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='none'%3E%3Cg clip-path='url(%23gravityUiQuoteClose0)'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.589 9.67A2.75 2.75 0 0 1 1.5 7v-.25A2.75 2.75 0 0 1 4.25 4h.25a2.747 2.747 0 0 1 2.748 2.657v.003h.002V7q0 .197-.027.386q-.03.392-.09.77a8 8 0 0 1-.559 1.918a7.2 7.2 0 0 1-2.162 2.801l-.098.076A.24.24 0 0 1 4.17 13a.25.25 0 0 1-.22-.367a17 17 0 0 0 .65-1.384c.197-.474.396-1.013.557-1.578a2.7 2.7 0 0 1-.657.079h-.25q-.343-.001-.661-.08m-.549 1.405A4.25 4.25 0 0 1 0 7v-.25A4.25 4.25 0 0 1 4.25 2.5h.25c1.452 0 2.733.728 3.5 1.838A4.25 4.25 0 0 1 11.5 2.5h.25A4.25 4.25 0 0 1 16 6.664V7q0 .275-.035.543c-.207 2.62-1.358 4.966-3.488 6.599a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86a4.25 4.25 0 0 1-2.005-1.297a8.76 8.76 0 0 1-3.058 4.363a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86m7.8-1.406q.318.079.661.08h.25a2.8 2.8 0 0 0 .657-.079a14 14 0 0 1-.68 1.865a18 18 0 0 1-.527 1.097a.25.25 0 0 0 .22.367a.24.24 0 0 0 .144-.049l.098-.076q.452-.358.832-.768a7.2 7.2 0 0 0 1.39-2.172a8 8 0 0 0 .498-1.779a9 9 0 0 0 .091-.77q.027-.19.027-.386v-.339H14.5v-.004A2.747 2.747 0 0 0 11.75 4h-.251a2.75 2.75 0 0 0-2.75 2.75V7c0 1.29.89 2.374 2.089 2.67' clip-rule='evenodd'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='gravityUiQuoteClose0'%3E%3Cpath fill='currentColor' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='none'%3E%3Cg clip-path='url(%23gravityUiQuoteClose0)'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.589 9.67A2.75 2.75 0 0 1 1.5 7v-.25A2.75 2.75 0 0 1 4.25 4h.25a2.747 2.747 0 0 1 2.748 2.657v.003h.002V7q0 .197-.027.386q-.03.392-.09.77a8 8 0 0 1-.559 1.918a7.2 7.2 0 0 1-2.162 2.801l-.098.076A.24.24 0 0 1 4.17 13a.25.25 0 0 1-.22-.367a17 17 0 0 0 .65-1.384c.197-.474.396-1.013.557-1.578a2.7 2.7 0 0 1-.657.079h-.25q-.343-.001-.661-.08m-.549 1.405A4.25 4.25 0 0 1 0 7v-.25A4.25 4.25 0 0 1 4.25 2.5h.25c1.452 0 2.733.728 3.5 1.838A4.25 4.25 0 0 1 11.5 2.5h.25A4.25 4.25 0 0 1 16 6.664V7q0 .275-.035.543c-.207 2.62-1.358 4.966-3.488 6.599a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86a4.25 4.25 0 0 1-2.005-1.297a8.76 8.76 0 0 1-3.058 4.363a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86m7.8-1.406q.318.079.661.08h.25a2.8 2.8 0 0 0 .657-.079a14 14 0 0 1-.68 1.865a18 18 0 0 1-.527 1.097a.25.25 0 0 0 .22.367a.24.24 0 0 0 .144-.049l.098-.076q.452-.358.832-.768a7.2 7.2 0 0 0 1.39-2.172a8 8 0 0 0 .498-1.779a9 9 0 0 0 .091-.77q.027-.19.027-.386v-.339H14.5v-.004A2.747 2.747 0 0 0 11.75 4h-.251a2.75 2.75 0 0 0-2.75 2.75V7c0 1.29.89 2.374 2.089 2.67' clip-rule='evenodd'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='gravityUiQuoteClose0'%3E%3Cpath fill='currentColor' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' d='M6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118l3.943-.268z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' d='M6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118l3.943-.268z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M5.25 5.497a.75.75 0 0 1-.75-.75V4A1.5 1.5 0 0 0 3 5.5v1h10v-1A1.5 1.5 0 0 0 11.5 4v.75a.75.75 0 0 1-1.5 0V4H6v.747a.75.75 0 0 1-.75.75M10 2.5H6v-.752a.75.75 0 1 0-1.5 0V2.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0zM3 8v3.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M5.25 5.497a.75.75 0 0 1-.75-.75V4A1.5 1.5 0 0 0 3 5.5v1h10v-1A1.5 1.5 0 0 0 11.5 4v.75a.75.75 0 0 1-1.5 0V4H6v.747a.75.75 0 0 1-.75.75M10 2.5H6v-.752a.75.75 0 1 0-1.5 0V2.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0zM3 8v3.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M7.29 13.904L5.25 10.75L2.096 8.71a2.4 2.4 0 0 1 .5-4.278l9.273-3.296a2.346 2.346 0 0 1 2.996 2.995L13.45 3.63a.844.844 0 0 0-1.08-1.08L3.1 5.846a.9.9 0 0 0-.19 1.604l2.78 1.799l3.279-3.28a.75.75 0 1 1 1.06 1.061L6.75 10.31l1.799 2.779a.9.9 0 0 0 1.604-.188l3.297-9.272l1.413.502l-3.296 9.273a2.4 2.4 0 0 1-4.277.5' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M7.29 13.904L5.25 10.75L2.096 8.71a2.4 2.4 0 0 1 .5-4.278l9.273-3.296a2.346 2.346 0 0 1 2.996 2.995L13.45 3.63a.844.844 0 0 0-1.08-1.08L3.1 5.846a.9.9 0 0 0-.19 1.604l2.78 1.799l3.279-3.28a.75.75 0 1 1 1.06 1.061L6.75 10.31l1.799 2.779a.9.9 0 0 0 1.604-.188l3.297-9.272l1.413.502l-3.296 9.273a2.4 2.4 0 0 1-4.277.5' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8V104a48 48 0 0 1 41.61-47.56A84 84 0 0 1 178 56a46.06 46.06 0 0 1 46 46c0 53.61-77.75 102.15-96 112.8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 228.67 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8V104a48 48 0 0 1 41.61-47.56A84 84 0 0 1 178 56a46.06 46.06 0 0 1 46 46c0 53.61-77.75 102.15-96 112.8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='currentColor' d='M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-9.5a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-9.5a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 7.25a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 7.25a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.53 5.47a.75.75 0 0 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.53 5.47a.75.75 0 0 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.5 11.937V13a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5v-.401A3 3 0 0 1 11 12H4q-.26 0-.5-.063M2 10V3q0-.103.01-.204a2 2 0 0 1 .676-1.304A2 2 0 0 1 4 1h7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2zm1.5 0a.5.5 0 0 0 .5.5h7A1.5 1.5 0 0 0 12.5 9V4q0-.156-.03-.302A1.5 1.5 0 0 0 11 2.5H4a.5.5 0 0 0-.5.5zm2-4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.5 11.937V13a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5v-.401A3 3 0 0 1 11 12H4q-.26 0-.5-.063M2 10V3q0-.103.01-.204a2 2 0 0 1 .676-1.304A2 2 0 0 1 4 1h7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2zm1.5 0a.5.5 0 0 0 .5.5h7A1.5 1.5 0 0 0 12.5 9V4q0-.156-.03-.302A1.5 1.5 0 0 0 11 2.5H4a.5.5 0 0 0-.5.5zm2-4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' d='M11 1.5a3 3 0 0 1 3 3v8.546a1.454 1.454 0 0 1-2.411 1.094L8 11l-3.589 3.14A1.454 1.454 0 0 1 2 13.046V4.5a3 3 0 0 1 3-3z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' d='M11 1.5a3 3 0 0 1 3 3v8.546a1.454 1.454 0 0 1-2.411 1.094L8 11l-3.589 3.14A1.454 1.454 0 0 1 2 13.046V4.5a3 3 0 0 1 3-3z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8.9 14.315a1.38 1.38 0 0 1-2.542-.984L7.07 10H3.13a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7zm4.352-5.762a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8.9 14.315a1.38 1.38 0 0 1-2.542-.984L7.07 10H3.13a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7zm4.352-5.762a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.03 6.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.03 6.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m6.452 6.864l1.13-2.173a32 32 0 0 1 1.872-3.095c.964 1.045 1.906 2.3 2.612 3.622c.748 1.402 1.184 2.789 1.184 4.032c0 1.427-.904 2.83-2.153 3.613q.088-.398.09-.863c0-1.255-.674-2.336-1.143-2.963a9 9 0 0 0-1.01-1.125l-.024-.02l-.008-.008L9 7.88l-.001-.001C8.996 7.88 8.996 7.878 8 9a7 7 0 0 0 .984 1.133c.37.534.704 1.2.704 1.867c0 .77-.313 1.276-.618 1.587c-.159.162-.279.38-.314.6a.8.8 0 0 0 0 .264q.017.095.06.182c.113.225.343.37.594.35c2.836-.235 5.34-2.87 5.34-5.733c0-3.149-2.177-6.538-4.357-8.845A1.3 1.3 0 0 0 9.435 0A1.32 1.32 0 0 0 8.35.556A34 34 0 0 0 6.25 4l-.955-1.337l-.016-.022a.986.986 0 0 0-1.573.004C2.62 4.123 1.25 6.249 1.25 9.25c0 2.863 2.504 5.498 5.34 5.733c.25.02.481-.125.593-.35a.7.7 0 0 0 .06-.182a.8.8 0 0 0 .001-.263a1.15 1.15 0 0 0-.314-.601c-.305-.31-.617-.817-.617-1.587c0-.666.333-1.333.703-1.867l.09-.128C7.544 9.405 8 9 8 9l-.997-1.12H7l-.003.003l-.008.007l-.024.021l-.073.07a9 9 0 0 0-.937 1.056c-.47.626-1.143 1.707-1.143 2.962c0 .31.033.598.09.863C3.654 12.08 2.75 10.677 2.75 9.25c0-2.171.847-3.812 1.745-5.126l.534.748zM8 9l.997-1.121L8 6.993l-.997.886z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='m6.452 6.864l1.13-2.173a32 32 0 0 1 1.872-3.095c.964 1.045 1.906 2.3 2.612 3.622c.748 1.402 1.184 2.789 1.184 4.032c0 1.427-.904 2.83-2.153 3.613q.088-.398.09-.863c0-1.255-.674-2.336-1.143-2.963a9 9 0 0 0-1.01-1.125l-.024-.02l-.008-.008L9 7.88l-.001-.001C8.996 7.88 8.996 7.878 8 9a7 7 0 0 0 .984 1.133c.37.534.704 1.2.704 1.867c0 .77-.313 1.276-.618 1.587c-.159.162-.279.38-.314.6a.8.8 0 0 0 0 .264q.017.095.06.182c.113.225.343.37.594.35c2.836-.235 5.34-2.87 5.34-5.733c0-3.149-2.177-6.538-4.357-8.845A1.3 1.3 0 0 0 9.435 0A1.32 1.32 0 0 0 8.35.556A34 34 0 0 0 6.25 4l-.955-1.337l-.016-.022a.986.986 0 0 0-1.573.004C2.62 4.123 1.25 6.249 1.25 9.25c0 2.863 2.504 5.498 5.34 5.733c.25.02.481-.125.593-.35a.7.7 0 0 0 .06-.182a.8.8 0 0 0 .001-.263a1.15 1.15 0 0 0-.314-.601c-.305-.31-.617-.817-.617-1.587c0-.666.333-1.333.703-1.867l.09-.128C7.544 9.405 8 9 8 9l-.997-1.12H7l-.003.003l-.008.007l-.024.021l-.073.07a9 9 0 0 0-.937 1.056c-.47.626-1.143 1.707-1.143 2.962c0 .31.033.598.09.863C3.654 12.08 2.75 10.677 2.75 9.25c0-2.171.847-3.812 1.745-5.126l.534.748zM8 9l.997-1.121L8 6.993l-.997.886z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 7.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V8.5A.75.75 0 0 1 8 7.75' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 7.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V8.5A.75.75 0 0 1 8 7.75' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6.26 15.109a4 4 0 0 0 3.48 0l.13-.063a2 2 0 0 0 1.13-1.8v-.468c0-1.352.776-2.557 1.54-3.673a5.5 5.5 0 1 0-9.08 0C4.224 10.221 5 11.426 5 12.779v.467a2 2 0 0 0 1.13 1.801zm2.828-1.35l.13-.064a.5.5 0 0 0 .282-.45v-.467q0-.255.025-.5a5.33 5.33 0 0 1-3.05 0q.024.245.025.5v.467a.5.5 0 0 0 .282.45l.13.063a2.5 2.5 0 0 0 2.176 0m-4.39-5.501c.394.576.891 1.302 1.263 2.148a3.79 3.79 0 0 0 4.078 0c.372-.846.869-1.572 1.264-2.148a4 4 0 1 0-6.605 0' clip-rule='evenodd'/%3E%3Cpath d='M8 3.5A.75.75 0 0 0 8 5a1 1 0 0 1 1 1a.75.75 0 0 0 1.5 0A2.5 2.5 0 0 0 8 3.5'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cg fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6.26 15.109a4 4 0 0 0 3.48 0l.13-.063a2 2 0 0 0 1.13-1.8v-.468c0-1.352.776-2.557 1.54-3.673a5.5 5.5 0 1 0-9.08 0C4.224 10.221 5 11.426 5 12.779v.467a2 2 0 0 0 1.13 1.801zm2.828-1.35l.13-.064a.5.5 0 0 0 .282-.45v-.467q0-.255.025-.5a5.33 5.33 0 0 1-3.05 0q.024.245.025.5v.467a.5.5 0 0 0 .282.45l.13.063a2.5 2.5 0 0 0 2.176 0m-4.39-5.501c.394.576.891 1.302 1.263 2.148a3.79 3.79 0 0 0 4.078 0c.372-.846.869-1.572 1.264-2.148a4 4 0 1 0-6.605 0' clip-rule='evenodd'/%3E%3Cpath d='M8 3.5A.75.75 0 0 0 8 5a1 1 0 0 1 1 1a.75.75 0 0 0 1.5 0A2.5 2.5 0 0 0 8 3.5'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M10.313 7.488L9 7.653v5.37a.5.5 0 0 1-.353.478l-1.62.498l-.006.001h-.008l-.007-.006l-.005-.007v-.003L7 13.979V7.653l-1.313-.165a1.5 1.5 0 0 1-1.271-1.144l-.588-2.5A1.5 1.5 0 0 1 5.288 2h5.424a1.5 1.5 0 0 1 1.46 1.844l-.588 2.5a1.5 1.5 0 0 1-1.271 1.144m2.731-.8A3 3 0 0 1 10.5 8.976v4.046a2 2 0 0 1-1.412 1.911l-1.62.499A1.52 1.52 0 0 1 5.5 13.979V8.977a3 3 0 0 1-2.544-2.29l-.588-2.5A3 3 0 0 1 5.288.5h5.424a3 3 0 0 1 2.92 3.687zM6.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M10.313 7.488L9 7.653v5.37a.5.5 0 0 1-.353.478l-1.62.498l-.006.001h-.008l-.007-.006l-.005-.007v-.003L7 13.979V7.653l-1.313-.165a1.5 1.5 0 0 1-1.271-1.144l-.588-2.5A1.5 1.5 0 0 1 5.288 2h5.424a1.5 1.5 0 0 1 1.46 1.844l-.588 2.5a1.5 1.5 0 0 1-1.271 1.144m2.731-.8A3 3 0 0 1 10.5 8.976v4.046a2 2 0 0 1-1.412 1.911l-1.62.499A1.52 1.52 0 0 1 5.5 13.979V8.977a3 3 0 0 1-2.544-2.29l-.588-2.5A3 3 0 0 1 5.288.5h5.424a3 3 0 0 1 2.92 3.687zM6.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0m-5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0m-5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c-.003.03-.013.157.362.35C6.297 2.832 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M12 2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52c0 1.854-2.402 2.848-5.5 2.985V15a.75.75 0 0 1-1.5 0v-3.266c-3.098-.136-5.5-1.131-5.5-2.984c0-1.2 1.008-2.04 2.561-2.52l.825-2.311C4.433 3.544 4 2.988 4 2.25C4 .75 5.79 0 8 0s4 .75 4 2.25' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c-.003.03-.013.157.362.35C6.297 2.832 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M12 2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52c0 1.854-2.402 2.848-5.5 2.985V15a.75.75 0 0 1-1.5 0v-3.266c-3.098-.136-5.5-1.131-5.5-2.984c0-1.2 1.008-2.04 2.561-2.52l.825-2.311C4.433 3.544 4 2.988 4 2.25C4 .75 5.79 0 8 0s4 .75 4 2.25' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M7.1 1.685a1.38 1.38 0 0 1 2.542.984L8.93 6h3.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14L4 7zM2.749 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M7.1 1.685a1.38 1.38 0 0 1 2.542.984L8.93 6h3.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14L4 7zM2.749 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.25a.75.75 0 0 0-1.5 0v.339a2.5 2.5 0 0 0-1.007.47a1.95 1.95 0 0 0-.74 1.546c0 .764.474 1.265.94 1.559c.456.287 1.007.448 1.448.547c.462.102.843.191 1.118.341c.228.125.275.224.275.376c0 .102-.04.217-.248.341c-.224.135-.577.229-.982.229c-.344 0-.683-.114-.953-.29c-.281-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.171.543.591 1 1.068 1.31c.284.185.612.335.968.429v.357a.75.75 0 0 0 1.5 0v-.313c.375-.067.74-.19 1.058-.382c.53-.319.976-.864.976-1.627c0-.864-.51-1.394-1.055-1.692c-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352c-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227c.47 0 .742.11.9.218a.83.83 0 0 1 .316.41a.75.75 0 0 0 1.407-.52a2.33 2.33 0 0 0-.878-1.13a2.7 2.7 0 0 0-1.048-.417z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.25a.75.75 0 0 0-1.5 0v.339a2.5 2.5 0 0 0-1.007.47a1.95 1.95 0 0 0-.74 1.546c0 .764.474 1.265.94 1.559c.456.287 1.007.448 1.448.547c.462.102.843.191 1.118.341c.228.125.275.224.275.376c0 .102-.04.217-.248.341c-.224.135-.577.229-.982.229c-.344 0-.683-.114-.953-.29c-.281-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.171.543.591 1 1.068 1.31c.284.185.612.335.968.429v.357a.75.75 0 0 0 1.5 0v-.313c.375-.067.74-.19 1.058-.382c.53-.319.976-.864.976-1.627c0-.864-.51-1.394-1.055-1.692c-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352c-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227c.47 0 .742.11.9.218a.83.83 0 0 1 .316.41a.75.75 0 0 0 1.407-.52a2.33 2.33 0 0 0-.878-1.13a2.7 2.7 0 0 0-1.048-.417z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.14 1.14 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.7.7 0 0 1 .5-.207M2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299q.109.533.11 1.101a5.5 5.5 0 1 1-11 0m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1.97-5.72a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L8 7.31z' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1.97-5.72a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L8 7.31z' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M11.836 1.5a.664.664 0 0 1 .491 1.11l-.354.39H4.027l-.354-.39a.664.664 0 0 1 .49-1.11zm-6.445 3l2.124 2.336a.5.5 0 0 0 .37.164h.23a.5.5 0 0 0 .37-.164L10.61 4.5zm.652 2.947L3.5 4.65v1.852a.5.5 0 0 0 .123.328L4.87 8.266a4.5 4.5 0 0 1 1.172-.82m-2.08 2.061l-1.47-1.693A2 2 0 0 1 2 6.502V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.502a2 2 0 0 1-.49 1.312l-1.474 1.694a4.5 4.5 0 1 1-8.073 0m7.166-1.242a4.5 4.5 0 0 0-1.172-.82L12.5 4.65v1.852a.5.5 0 0 1-.123.328zM11 11.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M11.836 1.5a.664.664 0 0 1 .491 1.11l-.354.39H4.027l-.354-.39a.664.664 0 0 1 .49-1.11zm-6.445 3l2.124 2.336a.5.5 0 0 0 .37.164h.23a.5.5 0 0 0 .37-.164L10.61 4.5zm.652 2.947L3.5 4.65v1.852a.5.5 0 0 0 .123.328L4.87 8.266a4.5 4.5 0 0 1 1.172-.82m-2.08 2.061l-1.47-1.693A2 2 0 0 1 2 6.502V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.502a2 2 0 0 1-.49 1.312l-1.474 1.694a4.5 4.5 0 1 1-8.073 0m7.166-1.242a4.5 4.5 0 0 0-1.172-.82L12.5 4.65v1.852a.5.5 0 0 1-.123.328zM11 11.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0' clip-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
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
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  color: oklch(0.48 0.2 292.489);
}

html[saved-theme="light"] body h2 {
  color: oklch(0.48 0.2 352.489);
}

html[saved-theme="light"] body h3 {
  color: oklch(0.48 0.2 52.4895);
}

html[saved-theme="light"] body h4 {
  color: oklch(0.48 0.2 112.489);
}

html[saved-theme="light"] body h5 {
  color: oklch(0.48 0.2 172.49);
}

html[saved-theme="light"] body h6 {
  color: oklch(0.48 0.2 232.49);
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
  border-bottom-color: oklch(0.45 0.1 292.489);
  border-left-color: oklch(0.45 0.1 292.489);
  border-right-color: oklch(0.45 0.1 292.489);
  border-top-color: oklch(0.45 0.1 292.489);
  color: oklch(0.45 0.1 292.489);
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
