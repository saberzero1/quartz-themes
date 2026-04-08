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
