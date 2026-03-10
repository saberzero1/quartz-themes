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
  --alpha-background: rgba(183, 179, 159, 0.2) !important;
  --background-modifier-active-hover: rgba(132, 166, 63, 0.1) !important;
  --background-modifier-border: rgb(217, 215, 206) !important;
  --background-modifier-border-focus: rgb(166, 162, 140) !important;
  --background-modifier-border-hover: rgb(195, 192, 177) !important;
  --background-modifier-error: rgb(185, 39, 73) !important;
  --background-modifier-error-hover: rgb(185, 39, 73) !important;
  --background-modifier-error-rgb: 186, 39, 74 !important;
  --background-modifier-form-field: rgb(246, 246, 243) !important;
  --background-modifier-form-field-hover: rgb(246, 246, 243) !important;
  --background-modifier-success: rgb(132, 166, 63) !important;
  --background-modifier-success-rgb: 132, 166, 63 !important;
  --background-primary: rgb(242, 241, 238) !important;
  --background-primary-alt: rgb(242, 241, 238) !important;
  --background-secondary: rgb(246, 246, 243) !important;
  --background-secondary-alt: rgb(244, 243, 241) !important;
  --bases-cards-background: rgb(242, 241, 238) !important;
  --bases-cards-cover-background: rgb(242, 241, 238) !important;
  --bases-cards-font-size: 0.8em !important;
  --bases-cards-shadow: 0 0 0 1px rgb(217, 215, 206) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(195, 192, 177) !important;
  --bases-embed-border-color: rgb(217, 215, 206) !important;
  --bases-group-heading-property-color: rgb(130, 125, 100) !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-group-heading-value-size: 0.8em !important;
  --bases-table-border-color: rgb(217, 215, 206) !important;
  --bases-table-cell-background-active: rgb(242, 241, 238) !important;
  --bases-table-cell-background-disabled: rgb(242, 241, 238) !important;
  --bases-table-cell-background-selected: rgba(132, 166, 63, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(166, 162, 140) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(147, 185, 70) !important;
  --bases-table-font-size: 0.8em !important;
  --bases-table-group-background: rgb(242, 241, 238) !important;
  --bases-table-header-background: rgb(242, 241, 238) !important;
  --bases-table-header-color: rgb(130, 125, 100) !important;
  --bases-table-summary-background: rgb(242, 241, 238) !important;
  --blockquote-background-color: rgba(183, 179, 159, 0.2) !important;
  --blockquote-border-color: rgb(121, 53, 113) !important;
  --blockquote-border-thickness: 0 !important;
  --blur-background: color-mix(in srgb, rgb(242, 241, 238) 65%, transparent) linear-gradient(rgb(242, 241, 238), color-mix(in srgb, rgb(242, 241, 238) 65%, transparent)) !important;
  --bodyFont: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(67, 132, 163) !important;
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
  --canvas-background: rgb(242, 241, 238) !important;
  --canvas-card-label-color: rgb(195, 192, 177) !important;
  --canvas-color-1: 186, 39, 74 !important;
  --canvas-color-2: 235, 136, 55 !important;
  --canvas-color-4: 132, 166, 63 !important;
  --canvas-color-6: 121, 53, 113 !important;
  --canvas-dot-pattern: rgb(217, 215, 206) !important;
  --caret-color: rgb(52, 50, 40) !important;
  --checkbox-border-color: rgb(195, 192, 177) !important;
  --checkbox-border-color-hover: rgb(130, 125, 100) !important;
  --checkbox-color: rgb(147, 185, 70) !important;
  --checkbox-color-hover: rgb(157, 192, 89) !important;
  --checkbox-marker-color: rgb(242, 241, 238) !important;
  --checklist-done-color: rgb(130, 125, 100) !important;
  --code-background: rgba(183, 179, 159, 0.2) !important;
  --code-block-background-color: rgba(183, 179, 159, 0.2) !important;
  --code-border-color: rgb(217, 215, 206) !important;
  --code-comment: rgb(195, 192, 177) !important;
  --code-function: rgb(235, 136, 55) !important;
  --code-important: rgb(235, 136, 55) !important;
  --code-keyword: rgb(185, 39, 73) !important;
  --code-normal: rgb(235, 136, 55) !important;
  --code-operator: rgb(185, 39, 73) !important;
  --code-property: rgb(67, 132, 163) !important;
  --code-punctuation: rgb(130, 125, 100) !important;
  --code-size: 0.8em !important;
  --code-string: rgb(132, 166, 63) !important;
  --code-tag: rgb(185, 39, 73) !important;
  --code-value: rgb(121, 53, 113) !important;
  --codeFont: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(195, 192, 177) !important;
  --collapse-icon-color-collapsed: rgb(132, 166, 63) !important;
  --color-accent: rgb(132, 166, 63) !important;
  --color-accent-1: rgb(147, 185, 70) !important;
  --color-accent-2: rgb(157, 192, 89) !important;
  --color-accent-hsl: 80, 45%, 45% !important;
  --color-base-00: rgb(246, 246, 243) !important;
  --color-base-05: rgb(244, 243, 241) !important;
  --color-base-10: rgb(242, 241, 238) !important;
  --color-base-100: rgb(52, 50, 40) !important;
  --color-base-20: rgb(235, 234, 229) !important;
  --color-base-25: rgb(231, 229, 223) !important;
  --color-base-30: rgb(217, 215, 206) !important;
  --color-base-35: rgb(195, 192, 177) !important;
  --color-base-40: rgb(166, 162, 140) !important;
  --color-base-50: rgb(144, 139, 111) !important;
  --color-base-60: rgb(130, 125, 100) !important;
  --color-base-70: rgb(101, 97, 78) !important;
  --color-blue: rgb(67, 132, 163) !important;
  --color-blue-rgb: 67, 132, 163 !important;
  --color-green: rgb(132, 166, 63) !important;
  --color-green-rgb: 132, 166, 63 !important;
  --color-orange: rgb(235, 136, 55) !important;
  --color-orange-rgb: 235, 136, 55 !important;
  --color-pink: rgb(223, 104, 131) !important;
  --color-purple: rgb(121, 53, 113) !important;
  --color-purple-rgb: 121, 53, 113 !important;
  --color-red: rgb(185, 39, 73) !important;
  --color-red-rgb: 186, 39, 74 !important;
  --color-yellow: rgb(252, 186, 64) !important;
  --color-yellow-lightest: rgba(249, 222, 164, 0.753) !important;
  --dark: rgb(52, 50, 40) !important;
  --darkgray: rgb(52, 50, 40) !important;
  --divider-color: rgb(217, 215, 206) !important;
  --divider-color-hover: rgb(147, 185, 70) !important;
  --dropdown-background: rgb(246, 246, 243) !important;
  --dropdown-background-hover: rgb(242, 241, 238) !important;
  --embed-background: rgba(183, 179, 159, 0.2) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(217, 215, 206), inset 0 0 0 1px rgb(217, 215, 206) !important;
  --embed-border-end: 0 !important;
  --embed-border-left: 0 !important;
  --embed-border-start: 0 !important;
  --embed-padding: 16px 32px 16px
		48px !important;
  --file-header-background: rgb(242, 241, 238) !important;
  --file-header-background-focused: rgb(242, 241, 238) !important;
  --file-header-font: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 14px !important;
  --file-margins: 24px 48px !important;
  --flair-background: rgb(246, 246, 243) !important;
  --flair-color: rgb(52, 50, 40) !important;
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
  --footnote-divider-color: rgb(217, 215, 206) !important;
  --footnote-id-color: rgb(130, 125, 100) !important;
  --footnote-id-color-no-occurrences: rgb(195, 192, 177) !important;
  --footnote-size: 0.9em !important;
  --graph-line: rgb(195, 192, 177) !important;
  --graph-node: rgb(130, 125, 100) !important;
  --graph-node-attachment: rgb(252, 186, 64) !important;
  --graph-node-focused: rgb(132, 166, 63) !important;
  --graph-node-tag: rgb(132, 166, 63) !important;
  --graph-node-unresolved: rgb(195, 192, 177) !important;
  --graph-text: rgb(52, 50, 40) !important;
  --gray: rgb(130, 125, 100) !important;
  --h1-color: rgb(67, 132, 163) !important;
  --h1-line-height: 1.3 !important;
  --h1-size: 2.5em !important;
  --h1-weight: 600 !important;
  --h2-color: rgb(67, 132, 163) !important;
  --h2-line-height: 1.3 !important;
  --h2-size: 2em !important;
  --h2-weight: 500 !important;
  --h3-color: rgb(67, 132, 163) !important;
  --h3-size: 1.75em !important;
  --h3-weight: 500 !important;
  --h4-color: rgb(67, 132, 163) !important;
  --h4-line-height: 1.3 !important;
  --h4-size: 1.5em !important;
  --h4-weight: 500 !important;
  --h5-color: rgb(67, 132, 163) !important;
  --h5-line-height: 1.3 !important;
  --h5-size: 1.25em !important;
  --h5-weight: 500 !important;
  --h6-color: rgb(195, 192, 177) !important;
  --h6-line-height: 0 !important;
  --h6-size: 0.7em !important;
  --headerFont: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-color: rgb(67, 132, 163) !important;
  --heading-formatting: rgb(195, 192, 177) !important;
  --highlight: rgba(249, 222, 164, 0.753) !important;
  --hr-color: rgb(217, 215, 206) !important;
  --icon-color: rgb(130, 125, 100) !important;
  --icon-color-active: rgb(132, 166, 63) !important;
  --icon-color-focused: rgb(52, 50, 40) !important;
  --icon-color-hover: rgb(130, 125, 100) !important;
  --inline-title-color: rgb(67, 132, 163) !important;
  --inline-title-line-height: 1.3 !important;
  --inline-title-size: 2.5em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(195, 192, 177) !important;
  --input-placeholder-color: rgb(195, 192, 177) !important;
  --interactive-accent: rgb(147, 185, 70) !important;
  --interactive-accent-hover: rgb(157, 192, 89) !important;
  --interactive-accent-hsl: 80, 45%, 45% !important;
  --interactive-hover: rgb(242, 241, 238) !important;
  --interactive-normal: rgb(246, 246, 243) !important;
  --italic-color: rgb(121, 53, 113) !important;
  --light: rgb(242, 241, 238) !important;
  --lightgray: rgb(246, 246, 243) !important;
  --link-color: rgb(132, 166, 63) !important;
  --link-color-hover: rgb(157, 192, 89) !important;
  --link-external-color: rgb(132, 166, 63) !important;
  --link-external-color-hover: rgb(157, 192, 89) !important;
  --link-unresolved-color: rgb(132, 166, 63) !important;
  --link-unresolved-decoration-color: rgba(132, 166, 63, 0.3) !important;
  --list-marker-color: rgb(195, 192, 177) !important;
  --list-marker-color-collapsed: rgb(132, 166, 63) !important;
  --list-marker-color-hover: rgb(130, 125, 100) !important;
  --menu-background: rgb(246, 246, 243) !important;
  --menu-border-color: rgb(195, 192, 177) !important;
  --metadata-border-color: rgb(217, 215, 206) !important;
  --metadata-divider-color: rgb(217, 215, 206) !important;
  --metadata-input-font: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.8em !important;
  --metadata-input-text-color: rgb(52, 50, 40) !important;
  --metadata-label-font: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.8em !important;
  --metadata-label-text-color: rgb(130, 125, 100) !important;
  --metadata-label-text-color-hover: rgb(130, 125, 100) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(166, 162, 140) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(195, 192, 177) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: rgb(242, 241, 238) !important;
  --modal-border-color: rgb(166, 162, 140) !important;
  --nav-collapse-icon-color: rgb(195, 192, 177) !important;
  --nav-collapse-icon-color-collapsed: rgb(195, 192, 177) !important;
  --nav-heading-color: rgb(52, 50, 40) !important;
  --nav-heading-color-collapsed: rgb(195, 192, 177) !important;
  --nav-heading-color-collapsed-hover: rgb(130, 125, 100) !important;
  --nav-heading-color-hover: rgb(52, 50, 40) !important;
  --nav-item-background-active: rgb(132, 166, 63) !important;
  --nav-item-background-selected: rgba(132, 166, 63, 0.15) !important;
  --nav-item-color: rgb(130, 125, 100) !important;
  --nav-item-color-active: rgb(246, 246, 243) !important;
  --nav-item-color-highlighted: rgb(132, 166, 63) !important;
  --nav-item-color-hover: rgb(52, 50, 40) !important;
  --nav-item-color-selected: rgb(52, 50, 40) !important;
  --nav-item-size: 15px !important;
  --nav-tag-color: rgb(195, 192, 177) !important;
  --nav-tag-color-active: rgb(130, 125, 100) !important;
  --nav-tag-color-hover: rgb(130, 125, 100) !important;
  --pdf-background: rgb(242, 241, 238) !important;
  --pdf-page-background: rgb(242, 241, 238) !important;
  --pdf-sidebar-background: rgb(242, 241, 238) !important;
  --pill-border-color: rgb(217, 215, 206) !important;
  --pill-border-color-hover: rgb(195, 192, 177) !important;
  --pill-color: rgb(130, 125, 100) !important;
  --pill-color-hover: rgb(52, 50, 40) !important;
  --pill-color-remove: rgb(195, 192, 177) !important;
  --pill-color-remove-hover: rgb(132, 166, 63) !important;
  --prompt-background: rgb(242, 241, 238) !important;
  --prompt-border-color: rgb(166, 162, 140) !important;
  --raised-background: color-mix(in srgb, rgb(242, 241, 238) 65%, transparent) linear-gradient(rgb(242, 241, 238), color-mix(in srgb, rgb(242, 241, 238) 65%, transparent)) !important;
  --ribbon-background: rgb(246, 246, 243) !important;
  --ribbon-background-collapsed: rgb(242, 241, 238) !important;
  --search-clear-button-color: rgb(130, 125, 100) !important;
  --search-icon-color: rgb(130, 125, 100) !important;
  --search-result-background: rgb(242, 241, 238) !important;
  --secondary: rgb(132, 166, 63) !important;
  --setting-group-heading-color: rgb(52, 50, 40) !important;
  --setting-items-background: rgb(242, 241, 238) !important;
  --setting-items-border-color: rgb(217, 215, 206) !important;
  --slider-thumb-border-color: rgb(195, 192, 177) !important;
  --slider-track-background: rgb(217, 215, 206) !important;
  --status-bar-background: rgb(246, 246, 243) !important;
  --status-bar-border-color: rgb(217, 215, 206) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: rgb(130, 125, 100) !important;
  --suggestion-background: rgb(242, 241, 238) !important;
  --sync-avatar-color-1: rgb(185, 39, 73) !important;
  --sync-avatar-color-2: rgb(235, 136, 55) !important;
  --sync-avatar-color-3: rgb(252, 186, 64) !important;
  --sync-avatar-color-4: rgb(132, 166, 63) !important;
  --sync-avatar-color-6: rgb(67, 132, 163) !important;
  --sync-avatar-color-7: rgb(121, 53, 113) !important;
  --sync-avatar-color-8: rgb(223, 104, 131) !important;
  --tab-background-active: rgb(242, 241, 238) !important;
  --tab-container-background: rgb(246, 246, 243) !important;
  --tab-divider-color: rgb(195, 192, 177) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: rgb(217, 215, 206) !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: rgb(246, 246, 243) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(246, 246, 243), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(132, 166, 63) !important;
  --tab-text-color: rgb(195, 192, 177) !important;
  --tab-text-color-active: rgb(130, 125, 100) !important;
  --tab-text-color-focused: rgb(130, 125, 100) !important;
  --tab-text-color-focused-active: rgb(130, 125, 100) !important;
  --tab-text-color-focused-active-current: rgb(52, 50, 40) !important;
  --tab-text-color-focused-highlighted: rgb(132, 166, 63) !important;
  --table-add-button-border-color: rgb(217, 215, 206) !important;
  --table-border-color: rgb(217, 215, 206) !important;
  --table-drag-handle-background-active: rgb(147, 185, 70) !important;
  --table-drag-handle-color: rgb(195, 192, 177) !important;
  --table-header-background: rgb(235, 234, 229) !important;
  --table-header-background-hover: rgb(235, 234, 229) !important;
  --table-header-border-color: rgb(217, 215, 206) !important;
  --table-header-color: rgb(67, 132, 163) !important;
  --table-header-size: 400 !important;
  --table-header-weight: 500 !important;
  --table-selection: rgba(132, 166, 63, 0.1) !important;
  --table-selection-border-color: rgb(147, 185, 70) !important;
  --tag-background: rgba(132, 166, 63, 0.1) !important;
  --tag-background-hover: rgba(132, 166, 63, 0.2) !important;
  --tag-border-color: rgba(132, 166, 63, 0.15) !important;
  --tag-border-color-hover: rgba(132, 166, 63, 0.15) !important;
  --tag-color: rgb(132, 166, 63) !important;
  --tag-color-hover: rgb(132, 166, 63) !important;
  --tag-size: 0.8em !important;
  --tertiary: rgb(157, 192, 89) !important;
  --text-accent: rgb(132, 166, 63) !important;
  --text-accent-hover: rgb(157, 192, 89) !important;
  --text-error: rgb(185, 39, 73) !important;
  --text-faint: rgb(195, 192, 177) !important;
  --text-highlight-bg: rgba(249, 222, 164, 0.753) !important;
  --text-muted: rgb(130, 125, 100) !important;
  --text-normal: rgb(52, 50, 40) !important;
  --text-selection: rgba(132, 166, 63, 0.2) !important;
  --text-success: rgb(132, 166, 63) !important;
  --text-warning: rgb(235, 136, 55) !important;
  --textHighlight: rgba(249, 222, 164, 0.753) !important;
  --titleFont: figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(244, 243, 241) !important;
  --titlebar-background-focused: rgb(244, 243, 241) !important;
  --titlebar-border-color: rgb(217, 215, 206) !important;
  --titlebar-text-color: rgb(130, 125, 100) !important;
  --titlebar-text-color-focused: rgb(52, 50, 40) !important;
  --vault-profile-color: rgb(52, 50, 40) !important;
  --vault-profile-color-hover: rgb(52, 50, 40) !important;
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
  text-decoration: rgb(67, 132, 163);
  text-decoration-color: rgb(67, 132, 163);
}

html body .page article p > em, html em {
  color: rgb(121, 53, 113);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(121, 53, 113) none 0px;
  text-decoration: rgb(121, 53, 113);
  text-decoration-color: rgb(121, 53, 113);
}

html body .page article p > i, html i {
  color: rgb(121, 53, 113);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(121, 53, 113) none 0px;
  text-decoration: rgb(121, 53, 113);
  text-decoration-color: rgb(121, 53, 113);
}

html body .page article p > strong, html strong {
  color: rgb(67, 132, 163);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(67, 132, 163) none 0px;
  text-decoration: rgb(67, 132, 163);
  text-decoration-color: rgb(67, 132, 163);
}

html body .text-highlight {
  background-color: rgba(249, 222, 164, 0.753);
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(52, 50, 40) none 0px;
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body del {
  color: rgb(52, 50, 40);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(52, 50, 40) none 0px;
  text-decoration: line-through rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body p {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  outline: rgb(130, 125, 100) none 0px;
  text-decoration: rgb(130, 125, 100);
  text-decoration-color: rgb(130, 125, 100);
}`,
    links: `html body a.external, html footer a {
  color: rgb(132, 166, 63);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 166, 63) none 0px;
  text-decoration: underline rgb(132, 166, 63);
  text-decoration-color: rgb(132, 166, 63);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(132, 166, 63);
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(132, 166, 63) none 0px;
  text-decoration: underline rgb(132, 166, 63);
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
  text-decoration: rgb(195, 192, 177);
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
  border-bottom-color: rgb(52, 50, 40);
  border-left-color: rgb(52, 50, 40);
  border-right-color: rgb(52, 50, 40);
  border-top-color: rgb(52, 50, 40);
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
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: start;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", figtree, metropolis, raleway, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(130, 125, 100);
  text-decoration: line-through rgb(130, 125, 100);
  text-decoration-color: rgb(130, 125, 100);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(195, 192, 177);
  border-left-color: rgb(195, 192, 177);
  border-right-color: rgb(195, 192, 177);
  border-top-color: rgb(195, 192, 177);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(52, 50, 40);
  text-decoration: rgb(52, 50, 40);
  text-decoration-color: rgb(52, 50, 40);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(67, 132, 163);
  border-left-color: rgb(67, 132, 163);
  border-right-color: rgb(67, 132, 163);
  border-top-color: rgb(67, 132, 163);
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
  text-decoration: rgb(52, 50, 40);
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
  text-decoration: rgb(130, 125, 100);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  text-decoration: rgb(130, 125, 100);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(130, 125, 100);
  font-family: "??", figtree, metropolis, raleway, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
  text-decoration: rgb(130, 125, 100);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(132, 166, 63);
  border-bottom-color: rgb(246, 246, 243);
  border-left-color: rgb(246, 246, 243);
  border-right-color: rgb(246, 246, 243);
  border-top-color: rgb(246, 246, 243);
  color: rgb(246, 246, 243);
}`,
    toc: `html body li.depth-0 {
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
  text-decoration: rgb(130, 125, 100);
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
  text-decoration: rgb(130, 125, 100);
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
  text-decoration: rgb(130, 125, 100);
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
  text-decoration: underline dotted rgb(52, 50, 40);
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
}`,
  },
};
