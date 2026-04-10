import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dayspring",
    modes: ["light"],
    variations: [],
    fonts: ["crimson-pro", "figtree"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 80 !important;
  --accent-l: 45% !important;
  --accent-s: 45% !important;
  --alpha-background: hsla(50, 14%, 67%, 0.2) !important;
  --background-modifier-active-hover: hsla(80, 45%, 45%, 0.1) !important;
  --background-modifier-border: hsl(50, 13%, 83%) !important;
  --background-modifier-border-focus: hsl(50, 13%, 60%) !important;
  --background-modifier-border-hover: hsl(50, 13%, 73%) !important;
  --background-modifier-error: hsl(346, 65%, 44%) !important;
  --background-modifier-error-hover: hsl(346, 65%, 44%) !important;
  --background-modifier-error-rgb: 186, 39, 74 !important;
  --background-modifier-form-field: hsl(50, 13%, 96%) !important;
  --background-modifier-form-field-hover: hsl(50, 13%, 96%) !important;
  --background-modifier-success: hsl(80, 45%, 45%) !important;
  --background-modifier-success-rgb: 132, 166, 63 !important;
  --background-primary: hsl(50, 13%, 94%) !important;
  --background-primary-alt: hsl(50, 13%, 94%) !important;
  --background-secondary: hsl(50, 13%, 96%) !important;
  --background-secondary-alt: hsl(50, 13%, 95%) !important;
  --bases-cards-background: hsl(50, 13%, 94%) !important;
  --bases-cards-cover-background: hsl(50, 13%, 94%) !important;
  --bases-cards-font-size: 0.8em !important;
  --bases-cards-shadow: 0 0 0 1px hsl(50, 13%, 83%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(50, 13%, 73%) !important;
  --bases-embed-border-color: hsl(50, 13%, 83%) !important;
  --bases-group-heading-property-color: hsl(50, 13%, 45%) !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-group-heading-value-size: 0.8em !important;
  --bases-table-border-color: hsl(50, 13%, 83%) !important;
  --bases-table-cell-background-active: hsl(50, 13%, 94%) !important;
  --bases-table-cell-background-disabled: hsl(50, 13%, 94%) !important;
  --bases-table-cell-background-selected: hsla(80, 45%, 45%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(50, 13%, 60%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
		80,
		45%,
		50%
	) !important;
  --bases-table-font-size: 0.8em !important;
  --bases-table-group-background: hsl(50, 13%, 94%) !important;
  --bases-table-header-background: hsl(50, 13%, 94%) !important;
  --bases-table-header-color: hsl(50, 13%, 45%) !important;
  --bases-table-summary-background: hsl(50, 13%, 94%) !important;
  --blockquote-background-color: hsla(50, 14%, 67%, 0.2) !important;
  --blockquote-border-color: hsl(307, 39%, 34%) !important;
  --blockquote-border-thickness: 0 !important;
  --blur-background: color-mix(in srgb, hsl(50, 13%, 94%) 65%, transparent) linear-gradient(hsl(50, 13%, 94%), color-mix(in srgb, hsl(50, 13%, 94%) 65%, transparent)) !important;
  --bodyFont: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(199, 42%, 45%) !important;
  --callout-bug: 186, 39, 74;
  --callout-default: 67, 132, 163;
  --callout-error: 186, 39, 74;
  --callout-example: 121, 53, 113;
  --callout-fail: 186, 39, 74;
  --callout-info: 67, 132, 163;
  --callout-question: 235, 136, 55;
  --callout-success: 132, 166, 63;
  --callout-todo: 67, 132, 163;
  --callout-warning: 235, 136, 55;
  --canvas-background: hsl(50, 13%, 94%) !important;
  --canvas-card-label-color: hsl(50, 13%, 73%) !important;
  --canvas-color-1: 186, 39, 74 !important;
  --canvas-color-2: 235, 136, 55 !important;
  --canvas-color-4: 132, 166, 63 !important;
  --canvas-color-6: 121, 53, 113 !important;
  --canvas-dot-pattern: hsl(50, 13%, 83%) !important;
  --caret-color: hsl(50, 13%, 18%) !important;
  --checkbox-border-color: hsl(50, 13%, 73%) !important;
  --checkbox-border-color-hover: hsl(50, 13%, 45%) !important;
  --checkbox-color: hsl(
		80,
		45%,
		50%
	) !important;
  --checkbox-color-hover: hsl(
		80,
		45%,
		55%
	) !important;
  --checkbox-marker-color: hsl(50, 13%, 94%) !important;
  --checklist-done-color: hsl(50, 13%, 45%) !important;
  --code-background: hsla(50, 14%, 67%, 0.2) !important;
  --code-block-background-color: hsla(50, 14%, 67%, 0.2) !important;
  --code-border-color: hsl(50, 13%, 83%) !important;
  --code-comment: hsl(50, 13%, 73%) !important;
  --code-function: hsl(27, 82%, 57%) !important;
  --code-important: hsl(27, 82%, 57%) !important;
  --code-keyword: hsl(346, 65%, 44%) !important;
  --code-normal: hsl(27, 82%, 57%) !important;
  --code-operator: hsl(346, 65%, 44%) !important;
  --code-property: hsl(199, 42%, 45%) !important;
  --code-punctuation: hsl(50, 13%, 45%) !important;
  --code-size: 0.8em !important;
  --code-string: hsl(80, 45%, 45%) !important;
  --code-tag: hsl(346, 65%, 44%) !important;
  --code-value: hsl(307, 39%, 34%) !important;
  --codeFont: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(50, 13%, 73%) !important;
  --collapse-icon-color-collapsed: hsl(80, 45%, 45%) !important;
  --color-accent: hsl(80, 45%, 45%) !important;
  --color-accent-1: hsl(
		80,
		45%,
		50%
	) !important;
  --color-accent-2: hsl(
		80,
		45%,
		55%
	) !important;
  --color-accent-hsl: 80, 45%, 45% !important;
  --color-base-00: hsl(50, 13%, 96%) !important;
  --color-base-05: hsl(50, 13%, 95%) !important;
  --color-base-10: hsl(50, 13%, 94%) !important;
  --color-base-100: hsl(50, 13%, 18%) !important;
  --color-base-20: hsl(50, 13%, 91%) !important;
  --color-base-25: hsl(50, 13%, 89%) !important;
  --color-base-30: hsl(50, 13%, 83%) !important;
  --color-base-35: hsl(50, 13%, 73%) !important;
  --color-base-40: hsl(50, 13%, 60%) !important;
  --color-base-50: hsl(50, 13%, 50%) !important;
  --color-base-60: hsl(50, 13%, 45%) !important;
  --color-base-70: hsl(50, 13%, 35%) !important;
  --color-blue: hsl(199, 42%, 45%) !important;
  --color-blue-rgb: 67, 132, 163 !important;
  --color-green: hsl(80, 45%, 45%) !important;
  --color-green-rgb: 132, 166, 63 !important;
  --color-orange: hsl(27, 82%, 57%) !important;
  --color-orange-rgb: 235, 136, 55 !important;
  --color-pink: hsl(346, 65%, 64%) !important;
  --color-purple: hsl(307, 39%, 34%) !important;
  --color-purple-rgb: 121, 53, 113 !important;
  --color-red: hsl(346, 65%, 44%) !important;
  --color-red-rgb: 186, 39, 74 !important;
  --color-yellow: hsl(39, 97%, 62%) !important;
  --color-yellow-lightest: hsla(41, 88%, 81%, 0.753) !important;
  --dark: hsl(50, 13%, 18%) !important;
  --darkgray: hsl(50, 13%, 18%) !important;
  --divider-color: hsl(50, 13%, 83%) !important;
  --divider-color-hover: hsl(
		80,
		45%,
		50%
	) !important;
  --dropdown-background: hsl(50, 13%, 96%) !important;
  --dropdown-background-hover: hsl(50, 13%, 94%) !important;
  --embed-background: hsla(50, 14%, 67%, 0.2) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(50, 13%, 83%), inset 0 0 0 1px hsl(50, 13%, 83%) !important;
  --embed-border-end: 0 !important;
  --embed-border-left: 0 !important;
  --embed-border-start: 0 !important;
  --embed-padding: 16px 32px 16px
		48px !important;
  --file-header-background: hsl(50, 13%, 94%) !important;
  --file-header-background-focused: hsl(50, 13%, 94%) !important;
  --file-header-font: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 14px !important;
  --file-margins: 24px 48px !important;
  --flair-background: hsl(50, 13%, 96%) !important;
  --flair-color: hsl(50, 13%, 18%) !important;
  --font-interface: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: figtree, metropolis, raleway !important;
  --font-mermaid: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: figtree, metropolis, raleway, Arial' !important;
  --font-serif: "Crimson Pro" !important;
  --font-small: 0.9em !important;
  --font-smaller: 0.8em !important;
  --font-smallest: 0.7em !important;
  --font-text: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: figtree, metropolis, raleway !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: hsl(50, 13%, 83%) !important;
  --footnote-id-color: hsl(50, 13%, 45%) !important;
  --footnote-id-color-no-occurrences: hsl(50, 13%, 73%) !important;
  --footnote-size: 0.9em !important;
  --graph-line: hsl(50, 13%, 73%) !important;
  --graph-node: hsl(50, 13%, 45%) !important;
  --graph-node-attachment: hsl(39, 97%, 62%) !important;
  --graph-node-focused: hsl(80, 45%, 45%) !important;
  --graph-node-tag: hsl(80, 45%, 45%) !important;
  --graph-node-unresolved: hsl(50, 13%, 73%) !important;
  --graph-text: hsl(50, 13%, 18%) !important;
  --gray: hsl(50, 13%, 45%) !important;
  --h1-color: hsl(199, 42%, 45%) !important;
  --h1-line-height: 1.3 !important;
  --h1-size: 2.5em !important;
  --h1-weight: 600 !important;
  --h2-color: hsl(199, 42%, 45%) !important;
  --h2-line-height: 1.3 !important;
  --h2-size: 2em !important;
  --h2-weight: 500 !important;
  --h3-color: hsl(199, 42%, 45%) !important;
  --h3-size: 1.75em !important;
  --h3-weight: 500 !important;
  --h4-color: hsl(199, 42%, 45%) !important;
  --h4-line-height: 1.3 !important;
  --h4-size: 1.5em !important;
  --h4-weight: 500 !important;
  --h5-color: hsl(199, 42%, 45%) !important;
  --h5-line-height: 1.3 !important;
  --h5-size: 1.25em !important;
  --h5-weight: 500 !important;
  --h6-color: hsl(50, 13%, 73%) !important;
  --h6-line-height: 0 !important;
  --h6-size: 0.7em !important;
  --headerFont: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-color: hsl(199, 42%, 45%) !important;
  --heading-formatting: hsl(50, 13%, 73%) !important;
  --highlight: hsla(41, 88%, 81%, 0.753) !important;
  --hr-color: hsl(50, 13%, 83%) !important;
  --icon-color: hsl(50, 13%, 45%) !important;
  --icon-color-active: hsl(80, 45%, 45%) !important;
  --icon-color-focused: hsl(50, 13%, 18%) !important;
  --icon-color-hover: hsl(50, 13%, 45%) !important;
  --inline-title-color: hsl(199, 42%, 45%) !important;
  --inline-title-line-height: 1.3 !important;
  --inline-title-size: 2.5em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(50, 13%, 73%) !important;
  --input-placeholder-color: hsl(50, 13%, 73%) !important;
  --interactive-accent: hsl(
		80,
		45%,
		50%
	) !important;
  --interactive-accent-hover: hsl(
		80,
		45%,
		55%
	) !important;
  --interactive-accent-hsl: 80, 45%, 45% !important;
  --interactive-hover: hsl(50, 13%, 94%) !important;
  --interactive-normal: hsl(50, 13%, 96%) !important;
  --italic-color: hsl(307, 39%, 34%) !important;
  --light: hsl(50, 13%, 94%) !important;
  --lightgray: hsl(50, 13%, 96%) !important;
  --link-color: hsl(80, 45%, 45%) !important;
  --link-color-hover: hsl(
		80,
		45%,
		55%
	) !important;
  --link-external-color: hsl(80, 45%, 45%) !important;
  --link-external-color-hover: hsl(
		80,
		45%,
		55%
	) !important;
  --link-unresolved-color: hsl(80, 45%, 45%) !important;
  --link-unresolved-decoration-color: hsla(80, 45%, 45%, 0.3) !important;
  --list-marker-color: hsl(50, 13%, 73%) !important;
  --list-marker-color-collapsed: hsl(80, 45%, 45%) !important;
  --list-marker-color-hover: hsl(50, 13%, 45%) !important;
  --menu-background: hsl(50, 13%, 96%) !important;
  --menu-border-color: hsl(50, 13%, 73%) !important;
  --metadata-border-color: hsl(50, 13%, 83%) !important;
  --metadata-divider-color: hsl(50, 13%, 83%) !important;
  --metadata-input-font: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.8em !important;
  --metadata-input-text-color: hsl(50, 13%, 18%) !important;
  --metadata-label-font: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.8em !important;
  --metadata-label-text-color: hsl(50, 13%, 45%) !important;
  --metadata-label-text-color-hover: hsl(50, 13%, 45%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(50, 13%, 60%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(50, 13%, 73%) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: hsl(50, 13%, 94%) !important;
  --modal-border-color: hsl(50, 13%, 60%) !important;
  --nav-collapse-icon-color: hsl(50, 13%, 73%) !important;
  --nav-collapse-icon-color-collapsed: hsl(50, 13%, 73%) !important;
  --nav-heading-color: hsl(50, 13%, 18%) !important;
  --nav-heading-color-collapsed: hsl(50, 13%, 73%) !important;
  --nav-heading-color-collapsed-hover: hsl(50, 13%, 45%) !important;
  --nav-heading-color-hover: hsl(50, 13%, 18%) !important;
  --nav-item-background-active: hsl(80, 45%, 45%) !important;
  --nav-item-background-selected: hsla(80, 45%, 45%, 0.15) !important;
  --nav-item-color: hsl(50, 13%, 45%) !important;
  --nav-item-color-active: hsl(50, 13%, 96%) !important;
  --nav-item-color-highlighted: hsl(80, 45%, 45%) !important;
  --nav-item-color-hover: hsl(50, 13%, 18%) !important;
  --nav-item-color-selected: hsl(50, 13%, 18%) !important;
  --nav-item-size: 15px !important;
  --nav-tag-color: hsl(50, 13%, 73%) !important;
  --nav-tag-color-active: hsl(50, 13%, 45%) !important;
  --nav-tag-color-hover: hsl(50, 13%, 45%) !important;
  --pdf-background: hsl(50, 13%, 94%) !important;
  --pdf-page-background: hsl(50, 13%, 94%) !important;
  --pdf-sidebar-background: hsl(50, 13%, 94%) !important;
  --pill-border-color: hsl(50, 13%, 83%) !important;
  --pill-border-color-hover: hsl(50, 13%, 73%) !important;
  --pill-color: hsl(50, 13%, 45%) !important;
  --pill-color-hover: hsl(50, 13%, 18%) !important;
  --pill-color-remove: hsl(50, 13%, 73%) !important;
  --pill-color-remove-hover: hsl(80, 45%, 45%) !important;
  --prompt-background: hsl(50, 13%, 94%) !important;
  --prompt-border-color: hsl(50, 13%, 60%) !important;
  --raised-background: color-mix(in srgb, hsl(50, 13%, 94%) 65%, transparent) linear-gradient(hsl(50, 13%, 94%), color-mix(in srgb, hsl(50, 13%, 94%) 65%, transparent)) !important;
  --ribbon-background: hsl(50, 13%, 96%) !important;
  --ribbon-background-collapsed: hsl(50, 13%, 94%) !important;
  --search-clear-button-color: hsl(50, 13%, 45%) !important;
  --search-icon-color: hsl(50, 13%, 45%) !important;
  --search-result-background: hsl(50, 13%, 94%) !important;
  --secondary: hsl(80, 45%, 45%) !important;
  --setting-group-heading-color: hsl(50, 13%, 18%) !important;
  --setting-items-background: hsl(50, 13%, 94%) !important;
  --setting-items-border-color: hsl(50, 13%, 83%) !important;
  --slider-thumb-border-color: hsl(50, 13%, 73%) !important;
  --slider-track-background: hsl(50, 13%, 83%) !important;
  --status-bar-background: hsl(50, 13%, 96%) !important;
  --status-bar-border-color: hsl(50, 13%, 83%) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: hsl(50, 13%, 45%) !important;
  --suggestion-background: hsl(50, 13%, 94%) !important;
  --sync-avatar-color-1: hsl(346, 65%, 44%) !important;
  --sync-avatar-color-2: hsl(27, 82%, 57%) !important;
  --sync-avatar-color-3: hsl(39, 97%, 62%) !important;
  --sync-avatar-color-4: hsl(80, 45%, 45%) !important;
  --sync-avatar-color-6: hsl(199, 42%, 45%) !important;
  --sync-avatar-color-7: hsl(307, 39%, 34%) !important;
  --sync-avatar-color-8: hsl(346, 65%, 64%) !important;
  --tab-background-active: hsl(50, 13%, 94%) !important;
  --tab-container-background: hsl(50, 13%, 96%) !important;
  --tab-divider-color: hsl(50, 13%, 73%) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: hsl(50, 13%, 83%) !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: hsl(50, 13%, 96%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(50, 13%, 96%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(80, 45%, 45%) !important;
  --tab-text-color: hsl(50, 13%, 73%) !important;
  --tab-text-color-active: hsl(50, 13%, 45%) !important;
  --tab-text-color-focused: hsl(50, 13%, 45%) !important;
  --tab-text-color-focused-active: hsl(50, 13%, 45%) !important;
  --tab-text-color-focused-active-current: hsl(50, 13%, 18%) !important;
  --tab-text-color-focused-highlighted: hsl(80, 45%, 45%) !important;
  --table-add-button-border-color: hsl(50, 13%, 83%) !important;
  --table-border-color: hsl(50, 13%, 83%) !important;
  --table-drag-handle-background-active: hsl(
		80,
		45%,
		50%
	) !important;
  --table-drag-handle-color: hsl(50, 13%, 73%) !important;
  --table-header-background: hsl(50, 13%, 91%) !important;
  --table-header-background-hover: hsl(50, 13%, 91%) !important;
  --table-header-border-color: hsl(50, 13%, 83%) !important;
  --table-header-color: hsl(199, 42%, 45%) !important;
  --table-header-size: 400 !important;
  --table-header-weight: 500 !important;
  --table-selection: hsla(80, 45%, 45%, 0.1) !important;
  --table-selection-border-color: hsl(
		80,
		45%,
		50%
	) !important;
  --tag-background: hsla(80, 45%, 45%, 0.1) !important;
  --tag-background-hover: hsla(80, 45%, 45%, 0.2) !important;
  --tag-border-color: hsla(80, 45%, 45%, 0.15) !important;
  --tag-border-color-hover: hsla(80, 45%, 45%, 0.15) !important;
  --tag-color: hsl(80, 45%, 45%) !important;
  --tag-color-hover: hsl(80, 45%, 45%) !important;
  --tag-size: 0.8em !important;
  --tertiary: hsl(
		80,
		45%,
		55%
	) !important;
  --text-accent: hsl(80, 45%, 45%) !important;
  --text-accent-hover: hsl(
		80,
		45%,
		55%
	) !important;
  --text-error: hsl(346, 65%, 44%) !important;
  --text-faint: hsl(50, 13%, 73%) !important;
  --text-highlight-bg: hsla(41, 88%, 81%, 0.753) !important;
  --text-muted: hsl(50, 13%, 45%) !important;
  --text-normal: hsl(50, 13%, 18%) !important;
  --text-selection: hsla(80, 45%, 45%, 0.2) !important;
  --text-success: hsl(80, 45%, 45%) !important;
  --text-warning: hsl(27, 82%, 57%) !important;
  --textHighlight: hsla(41, 88%, 81%, 0.753) !important;
  --titleFont: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(50, 13%, 95%) !important;
  --titlebar-background-focused: hsl(50, 13%, 95%) !important;
  --titlebar-border-color: hsl(50, 13%, 83%) !important;
  --titlebar-text-color: hsl(50, 13%, 45%) !important;
  --titlebar-text-color-focused: hsl(50, 13%, 18%) !important;
  --vault-profile-color: hsl(50, 13%, 18%) !important;
  --vault-profile-color-hover: hsl(50, 13%, 18%) !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 246, 243);
  color: rgb(52, 50, 40);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(242, 241, 238);
  color: rgb(52, 50, 40);
}

html body .bases-table thead th {
  border-color: rgb(217, 215, 206);
  color: rgb(67, 132, 163);
  font-weight: 500;
}

html body .canvas-node {
  border-color: rgb(52, 50, 40);
}

html body .canvas-node-content {
  color: rgb(52, 50, 40);
}

html body .canvas-node-file {
  color: rgb(52, 50, 40);
}

html body .canvas-node-group {
  border-color: rgb(52, 50, 40);
}

html body .canvas-sidebar {
  background-color: rgb(242, 241, 238);
  border-color: rgb(52, 50, 40);
}

html body .note-properties {
  border-color: rgb(217, 215, 206);
}

html body .note-properties-key {
  color: rgb(130, 125, 100);
  font-weight: 300;
}

html body .note-properties-row {
  border-color: rgb(130, 125, 100);
}

html body .note-properties-tags {
  background-color: rgba(132, 166, 63, 0.1);
  border-radius: 25.6px;
  color: rgb(132, 166, 63);
}

html body .note-properties-value {
  color: rgb(130, 125, 100);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 246, 243);
  color: rgb(52, 50, 40);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(217, 215, 206);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 246, 243);
  border-left-color: rgb(217, 215, 206);
  color: rgb(52, 50, 40);
}

html body div#quartz-root {
  background-color: rgb(242, 241, 238);
  color: rgb(52, 50, 40);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(67, 132, 163) none 0px;
  text-decoration-color: rgb(67, 132, 163);
}

html body .page article p > em, html em {
  color: rgb(121, 53, 113);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(121, 53, 113) none 0px;
  text-decoration-color: rgb(121, 53, 113);
}

html body .page article p > i, html i {
  color: rgb(121, 53, 113);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(121, 53, 113) none 0px;
  text-decoration-color: rgb(121, 53, 113);
}

html body .page article p > strong, html strong {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(67, 132, 163) none 0px;
  text-decoration-color: rgb(67, 132, 163);
}

html body .text-highlight {
  background-color: rgba(249, 222, 164, 0.753);
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(52, 50, 40) none 0px;
  text-decoration-color: rgb(52, 50, 40);
}

html body del {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(52, 50, 40) none 0px;
  text-decoration-color: rgb(52, 50, 40);
}

html body h1.article-title {
  color: rgb(52, 50, 40);
  font-size: 14px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(195, 192, 177);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(147, 185, 70);
  border-color: rgb(147, 185, 70);
}

html body p {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(130, 125, 100) none 0px;
  text-decoration-color: rgb(130, 125, 100);
}`,
    links: `html body a.external, html footer a {
  color: rgb(132, 166, 63);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 166, 63) none 0px;
  text-decoration-color: rgb(132, 166, 63);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(132, 166, 63);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(132, 166, 63) none 0px;
  text-decoration-color: rgb(132, 166, 63);
}

html body a.internal.broken {
  color: rgb(132, 166, 63);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(132, 166, 63) none 0px;
  text-decoration: underline rgba(132, 166, 63, 0.3);
  text-decoration-color: rgba(132, 166, 63, 0.3);
}`,
    lists: `html body dd {
  color: rgb(52, 50, 40);
}

html body dt {
  color: rgb(52, 50, 40);
  font-weight: 300;
}

html body ol > li {
  color: rgb(52, 50, 40);
}

html body ol.overflow {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body ul > li {
  color: rgb(52, 50, 40);
}

html body ul.overflow {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(195, 192, 177);
}

html body blockquote {
  background-color: rgba(183, 179, 159, 0.2);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body table {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 191.547px;
}

html body td {
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(52, 50, 40);
  font-weight: 300;
}

html body th {
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(67, 132, 163);
  font-weight: 500;
}

html body tr {
  background-color: rgb(235, 234, 229);
}`,
    code: `html body code {
  border-bottom-color: rgb(235, 136, 55);
  border-left-color: rgb(235, 136, 55);
  border-right-color: rgb(235, 136, 55);
  border-top-color: rgb(235, 136, 55);
  color: rgb(235, 136, 55);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(52, 50, 40);
}

html body pre > code > [data-line] {
  border-left-color: rgb(235, 136, 55);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 136, 55);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 136, 55);
  border-left-color: rgb(235, 136, 55);
  border-right-color: rgb(235, 136, 55);
  border-top-color: rgb(235, 136, 55);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
}

html body pre:has(> code) {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
}`,
    images: `html body audio {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body figcaption {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body img {
  border-bottom-color: rgb(67, 132, 163);
  border-left-color: rgb(67, 132, 163);
  border-right-color: rgb(67, 132, 163);
  border-top-color: rgb(67, 132, 163);
}

html body video {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
}

html body .footnotes {
  border-top-color: rgb(52, 50, 40);
  color: rgb(52, 50, 40);
}

html body .transclude {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(52, 50, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(52, 50, 40);
  border-left-width: 0px;
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .transclude-inner {
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(52, 50, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: start;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(195, 192, 177);
  border-left-color: rgb(195, 192, 177);
  border-right-color: rgb(195, 192, 177);
  border-top-color: rgb(195, 192, 177);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(67, 132, 163);
  border-left-color: rgb(67, 132, 163);
  border-right-color: rgb(67, 132, 163);
  border-top-color: rgb(67, 132, 163);
  color: rgb(67, 132, 163);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(67, 132, 163);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

html body .callout[data-callout="bug"] {
  --callout-color: 186, 39, 74;
  background-color: rgba(186, 39, 74, 0.1);
  border-bottom-color: rgba(186, 39, 74, 0.25);
  border-left-color: rgba(186, 39, 74, 0.25);
  border-right-color: rgba(186, 39, 74, 0.25);
  border-top-color: rgba(186, 39, 74, 0.25);
}

html body .callout[data-callout="danger"] {
  --callout-color: 186, 39, 74;
  background-color: rgba(186, 39, 74, 0.1);
  border-bottom-color: rgba(186, 39, 74, 0.25);
  border-left-color: rgba(186, 39, 74, 0.25);
  border-right-color: rgba(186, 39, 74, 0.25);
  border-top-color: rgba(186, 39, 74, 0.25);
}

html body .callout[data-callout="example"] {
  --callout-color: 121, 53, 113;
  background-color: rgba(121, 53, 113, 0.1);
  border-bottom-color: rgba(121, 53, 113, 0.25);
  border-left-color: rgba(121, 53, 113, 0.25);
  border-right-color: rgba(121, 53, 113, 0.25);
  border-top-color: rgba(121, 53, 113, 0.25);
}

html body .callout[data-callout="failure"] {
  --callout-color: 186, 39, 74;
  background-color: rgba(186, 39, 74, 0.1);
  border-bottom-color: rgba(186, 39, 74, 0.25);
  border-left-color: rgba(186, 39, 74, 0.25);
  border-right-color: rgba(186, 39, 74, 0.25);
  border-top-color: rgba(186, 39, 74, 0.25);
}

html body .callout[data-callout="info"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

html body .callout[data-callout="note"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

html body .callout[data-callout="question"] {
  --callout-color: 132, 166, 63;
  background-color: rgba(132, 166, 63, 0.1);
  border-bottom-color: rgba(132, 166, 63, 0.25);
  border-left-color: rgba(132, 166, 63, 0.25);
  border-right-color: rgba(132, 166, 63, 0.25);
  border-top-color: rgba(132, 166, 63, 0.25);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 132, 166, 63;
  background-color: rgba(132, 166, 63, 0.1);
  border-bottom-color: rgba(132, 166, 63, 0.25);
  border-left-color: rgba(132, 166, 63, 0.25);
  border-right-color: rgba(132, 166, 63, 0.25);
  border-top-color: rgba(132, 166, 63, 0.25);
}

html body .callout[data-callout="tip"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

html body .callout[data-callout="todo"] {
  --callout-color: 67, 132, 163;
  background-color: rgba(67, 132, 163, 0.1);
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

html body .callout[data-callout="warning"] {
  --callout-color: 235, 136, 55;
  background-color: rgba(235, 136, 55, 0.1);
  border-bottom-color: rgba(235, 136, 55, 0.25);
  border-left-color: rgba(235, 136, 55, 0.25);
  border-right-color: rgba(235, 136, 55, 0.25);
  border-top-color: rgba(235, 136, 55, 0.25);
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
  background-color: rgb(246, 246, 243);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(166, 162, 140);
  border-left-color: rgb(166, 162, 140);
  border-right-color: rgb(166, 162, 140);
  border-top-color: rgb(166, 162, 140);
}

html body .search > .search-container > .search-space > * {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(52, 50, 40) none 0px;
  text-decoration-color: rgb(52, 50, 40);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(52, 50, 40);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(52, 50, 40);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(52, 50, 40);
  font-weight: 300;
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(166, 162, 140);
  border-left-color: rgb(166, 162, 140);
  border-right-color: rgb(166, 162, 140);
  border-top-color: rgb(166, 162, 140);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 246, 243);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
  color: rgb(52, 50, 40);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(52, 50, 40);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(132, 166, 63, 0.1);
  border-bottom-color: rgba(132, 166, 63, 0.15);
  border-bottom-left-radius: 25.6px;
  border-bottom-right-radius: 25.6px;
  border-left-color: rgba(132, 166, 63, 0.15);
  border-right-color: rgba(132, 166, 63, 0.15);
  border-top-color: rgba(132, 166, 63, 0.15);
  border-top-left-radius: 25.6px;
  border-top-right-radius: 25.6px;
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

html body a.internal.tag-link::before {
  color: rgb(132, 166, 63);
}

html body h1 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(195, 192, 177);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
}`,
    scrollbars: `html body .callout {
  --callout-color: 67, 132, 163;
  border-bottom-color: rgba(67, 132, 163, 0.25);
  border-left-color: rgba(67, 132, 163, 0.25);
  border-right-color: rgba(67, 132, 163, 0.25);
  border-top-color: rgba(67, 132, 163, 0.25);
}

html body ::-webkit-scrollbar {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}

html body ::-webkit-scrollbar-track {
  background: rgb(242, 241, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 238);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(52, 50, 40);
}

html body li.depth-0 {
  font-weight: 300;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
}`,
    footer: `html body footer {
  background-color: rgb(246, 246, 243);
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(130, 125, 100);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
  color: rgb(52, 50, 40);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(130, 125, 100);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body li.section-li > .section .meta {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(130, 125, 100);
}

html body ul.section-ul {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
}

html body .darkmode svg {
  color: rgb(130, 125, 100);
  stroke: rgb(130, 125, 100);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
}

html body .breadcrumb-element p {
  color: rgb(195, 192, 177);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(235, 136, 55);
  border-left-color: rgb(235, 136, 55);
  border-right-color: rgb(235, 136, 55);
  border-top-color: rgb(235, 136, 55);
  color: rgb(235, 136, 55);
}

html body .metadata {
  border-bottom-color: rgb(217, 215, 206);
  border-left-color: rgb(217, 215, 206);
  border-right-color: rgb(217, 215, 206);
  border-top-color: rgb(217, 215, 206);
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(246, 246, 243);
}

html body .page-header h2.page-title {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(52, 50, 40);
}

html body details {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body input[type=text] {
  border-bottom-color: rgb(130, 125, 100);
  border-left-color: rgb(130, 125, 100);
  border-right-color: rgb(130, 125, 100);
  border-top-color: rgb(130, 125, 100);
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgba(183, 179, 159, 0.2);
  border-bottom-color: rgb(235, 136, 55);
  border-left-color: rgb(235, 136, 55);
  border-right-color: rgb(235, 136, 55);
  border-top-color: rgb(235, 136, 55);
  color: rgb(235, 136, 55);
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html body progress {
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
}

html body sub {
  color: rgb(52, 50, 40);
  font-size: 11.2px;
}

html body summary {
  color: rgb(52, 50, 40);
  font-weight: 300;
}

html body sup {
  color: rgb(52, 50, 40);
  font-size: 11.2px;
}

html body ul.tags > li {
  background-color: rgba(132, 166, 63, 0.1);
  border-bottom-color: rgba(132, 166, 63, 0.15);
  border-bottom-left-radius: 20.48px;
  border-bottom-right-radius: 20.48px;
  border-left-color: rgba(132, 166, 63, 0.15);
  border-right-color: rgba(132, 166, 63, 0.15);
  border-top-color: rgba(132, 166, 63, 0.15);
  border-top-left-radius: 20.48px;
  border-top-right-radius: 20.48px;
  color: rgb(132, 166, 63);
}`,
  },
};
