import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cosmical",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: oklch(42% 0 0) !important;
  --background-modifier-border: oklch(36% 0 0) !important;
  --background-modifier-border-focus: oklch(45% 0 0) !important;
  --background-modifier-border-hover: oklch(39% 0 0) !important;
  --background-modifier-error: #f47266 !important;
  --background-modifier-error-hover: #f47266 !important;
  --background-modifier-error-rgb: 244,114,102 !important;
  --background-modifier-success: #8bdfae !important;
  --background-modifier-success-rgb: 160,223,139 !important;
  --background-primary: oklch(30% 0 0) !important;
  --background-primary-alt: oklch(27% 0 0) !important;
  --background-secondary: oklch(24% 0 0) !important;
  --background-secondary-alt: oklch(27% 0 0) !important;
  --base-row-even-bg: oklch(30% 0 0) !important;
  --base-row-hover-bg: oklch(39% 0 0) !important;
  --base-row-odd-bg: oklch(33% 0 0) !important;
  --bases-cards-background: oklch(30% 0 0) !important;
  --bases-cards-cover-background: oklch(27% 0 0) !important;
  --bases-cards-shadow: 0 0 0 1px oklch(36% 0 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(39% 0 0) !important;
  --bases-embed-border-color: oklch(42% 0 0) !important;
  --bases-group-heading-property-color: oklch(77.5% 0 0) !important;
  --bases-table-border-color: oklch(42% 0 0) !important;
  --bases-table-cell-background-active: oklch(30% 0 0) !important;
  --bases-table-cell-background-disabled: oklch(27% 0 0) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(45% 0 0) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px oklch(0.7 0.15 70) !important;
  --bases-table-group-background: oklch(27% 0 0) !important;
  --bases-table-header-background: oklch(30% 0 0) !important;
  --bases-table-header-color: oklch(0.9 0.15 262) !important;
  --bases-table-summary-background: oklch(30% 0 0) !important;
  --blockquote-border-color: oklch(0.7 0.15 262) !important;
  --blockquote-border-thickness: 0.2em !important;
  --blur-background: color-mix(in srgb, oklch(36% 0 0) 65%, transparent) linear-gradient(oklch(36% 0 0), color-mix(in srgb, oklch(36% 0 0) 65%, transparent)) !important;
  --callout-bug: 244,114,102;
  --callout-default: 141,158,255;
  --callout-error: 244,114,102;
  --callout-example: 184,157,231;
  --callout-fail: 244,114,102;
  --callout-important: 132,220,210;
  --callout-info: 141,158,255;
  --callout-question: 247,159,105;
  --callout-success: 160,223,139;
  --callout-summary: 132,220,210;
  --callout-tip: 132,220,210;
  --callout-todo: 141,158,255;
  --callout-warning: 247,159,105;
  --canvas-background: oklch(30% 0 0) !important;
  --canvas-card-label-color: oklch(58% 0 0) !important;
  --canvas-color-1: 244,114,102 !important;
  --canvas-color-2: 247,159,105 !important;
  --canvas-color-3: 228,220,129 !important;
  --canvas-color-4: 160,223,139 !important;
  --canvas-color-5: 132,220,210 !important;
  --canvas-color-6: 184,157,231 !important;
  --canvas-dot-pattern: oklch(33% 0 0) !important;
  --caret-color: oklch(100% 0 0) !important;
  --checkbox-border-color: oklch(58% 0 0) !important;
  --checkbox-border-color-hover: oklch(77.5% 0 0) !important;
  --checkbox-color: oklch(0.7 0.15 70) !important;
  --checkbox-color-hover: oklch(0.9 0.15 70) !important;
  --checkbox-marker-color: oklch(30% 0 0) !important;
  --checklist-done-color: oklch(77.5% 0 0) !important;
  --code-background: oklch(27% 0 0) !important;
  --code-border-color: oklch(36% 0 0) !important;
  --code-comment: oklch(70% 0 0) !important;
  --code-function: oklch(85% 0.2 300) !important;
  --code-important: oklch(70% 0.2 295) !important;
  --code-keyword: oklch(90% 0.16 150) !important;
  --code-normal: oklch(95% 0 0) !important;
  --code-operator: oklch(95% 0 0) !important;
  --code-property: oklch(90% 0.16 250) !important;
  --code-punctuation: oklch(95% 0 0) !important;
  --code-radius: 8px !important;
  --code-string: oklch(90% 0.16 90) !important;
  --code-tag: oklch(75% 0.2 260) !important;
  --code-value: #b89de7 !important;
  --code-valuse: oklch(90% 0.16 110) !important;
  --collapse-icon-color: oklch(58% 0 0) !important;
  --collapse-icon-color-collapsed: oklch(0.9 0.15 70) !important;
  --color-base-00: oklch(21% 0 0) !important;
  --color-base-05: oklch(24% 0 0) !important;
  --color-base-10: oklch(27% 0 0) !important;
  --color-base-100: oklch(100% 0 0) !important;
  --color-base-20: oklch(30% 0 0) !important;
  --color-base-30: oklch(33% 0 0) !important;
  --color-base-40: oklch(36% 0 0) !important;
  --color-base-50: oklch(39% 0 0) !important;
  --color-base-60: oklch(42% 0 0) !important;
  --color-base-70: oklch(45% 0 0) !important;
  --color-blue: #4958fd !important;
  --color-blue-rgb: 141,158,255 !important;
  --color-cyan: #84dcd2 !important;
  --color-cyan-rgb: 132,220,210 !important;
  --color-green: #8bdfae !important;
  --color-green-rgb: 160,223,139 !important;
  --color-orange: #f79f69 !important;
  --color-orange-rgb: 247,159,105 !important;
  --color-pink: #dfaac0 !important;
  --color-pink-rgb: 223,170,192 !important;
  --color-purple: #b89de7 !important;
  --color-purple-rgb: 184,157,231 !important;
  --color-red: #f47266 !important;
  --color-red-rgb: 244,114,102 !important;
  --color-yellow: #d4e481 !important;
  --color-yellow-rgb: 228,220,129 !important;
  --dark: oklch(100% 0 0) !important;
  --darkgray: oklch(100% 0 0) !important;
  --divider-color: oklch(42% 0 0) !important;
  --divider-color-hover: oklch(0.7 0.15 70) !important;
  --dropdown-background: oklch(36% 0 0) !important;
  --dropdown-background-hover: oklch(39% 0 0) !important;
  --embed-block-shadow-hover: 0 0 0 1px oklch(36% 0 0), inset 0 0 0 1px oklch(36% 0 0) !important;
  --embed-border-start: 2px solid oklch(0.7 0.15 70) !important;
  --file-header-background: oklch(30% 0 0) !important;
  --file-header-background-focused: oklch(30% 0 0) !important;
  --file-header-justify: left !important;
  --flair-background: oklch(36% 0 0) !important;
  --flair-color: oklch(100% 0 0) !important;
  --font-headings: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: oklch(36% 0 0) !important;
  --footnote-id-color: oklch(77.5% 0 0) !important;
  --footnote-id-color-no-occurrences: oklch(58% 0 0) !important;
  --graph-node: oklch(77.5% 0 0) !important;
  --graph-node-attachment: #d4e481 !important;
  --graph-node-focused: oklch(0.9 0.15 70) !important;
  --graph-node-tag: oklch(0.9 0.15 262) !important;
  --graph-node-unresolved: oklch(58% 0 0) !important;
  --graph-text: oklch(100% 0 0) !important;
  --gray: oklch(77.5% 0 0) !important;
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h2-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h3-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h4-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h5-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h6-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: oklch(58% 0 0) !important;
  --heading-underline-color: oklch(36% 0 0) !important;
  --highlight: oklch(from oklch(0.7 0.15 70) l c h/0.33) !important;
  --hr-color: oklch(42% 0 0) !important;
  --icon-color: oklch(58% 0 0) !important;
  --icon-color-active: oklch(77.5% 0 0) !important;
  --icon-color-focused: oklch(100% 0 0) !important;
  --icon-color-hover: oklch(77.5% 0 0) !important;
  --inline-title-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-margin-bottom: 1rem !important;
  --inline-title-size: 1.625rem !important;
  --input-date-separator: oklch(58% 0 0) !important;
  --input-placeholder-color: oklch(58% 0 0) !important;
  --interactive-accent: oklch(0.7 0.15 70) !important;
  --interactive-accent-hover: oklch(0.9 0.15 70) !important;
  --interactive-hover: oklch(39% 0 0) !important;
  --interactive-normal: oklch(36% 0 0) !important;
  --light: oklch(30% 0 0) !important;
  --lightgray: oklch(24% 0 0) !important;
  --link-color: oklch(0.9 0.15 70) !important;
  --link-color-hover: oklch(1 0.09 70) !important;
  --link-external-color: oklch(0.9 0.15 70) !important;
  --link-external-color-hover: oklch(1 0.09 70) !important;
  --link-unresolved-color: oklch(0.9 0.15 70) !important;
  --list-marker-color: oklch(77.5% 0 0) !important;
  --list-marker-color-collapsed: oklch(0.9 0.15 70) !important;
  --list-marker-color-hover: oklch(77.5% 0 0) !important;
  --menu-background: oklch(24% 0 0) !important;
  --menu-border-color: oklch(39% 0 0) !important;
  --metadata-border-color: oklch(36% 0 0) !important;
  --metadata-divider-color: oklch(36% 0 0) !important;
  --metadata-gap: 0 !important;
  --metadata-input-font-size: max(13px,0.9em) !important;
  --metadata-input-text-color: oklch(0.9 0.15 70) !important;
  --metadata-label-font-size: max(13px,0.9em) !important;
  --metadata-label-text-color: oklch(0.9 0.15 262) !important;
  --metadata-label-text-color-hover: oklch(77.5% 0 0) !important;
  --metadata-label-width: max(22.5%,8rem) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(45% 0 0) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(39% 0 0) !important;
  --modal-background: oklch(30% 0 0) !important;
  --modal-border-color: oklch(36% 0 0) !important;
  --nav-collapse-icon-color: oklch(58% 0 0) !important;
  --nav-collapse-icon-color-collapsed: oklch(58% 0 0) !important;
  --nav-heading-color: oklch(100% 0 0) !important;
  --nav-heading-color-collapsed: oklch(58% 0 0) !important;
  --nav-heading-color-collapsed-hover: oklch(77.5% 0 0) !important;
  --nav-heading-color-hover: oklch(100% 0 0) !important;
  --nav-item-color: oklch(77.5% 0 0) !important;
  --nav-item-color-active: oklch(100% 0 0) !important;
  --nav-item-color-highlighted: oklch(0.9 0.15 70) !important;
  --nav-item-color-hover: oklch(100% 0 0) !important;
  --nav-item-color-selected: oklch(100% 0 0) !important;
  --nav-tag-color: oklch(58% 0 0) !important;
  --nav-tag-color-active: oklch(77.5% 0 0) !important;
  --nav-tag-color-hover: oklch(77.5% 0 0) !important;
  --nn-theme-file-selected-bg: oklch(39% 0 0) !important;
  --nn-theme-file-selected-inactive-bg: oklch(36% 0 0) !important;
  --nn-theme-file-selected-name-color: oklch(100% 0 0) !important;
  --nn-theme-file-tag-bg: color-mix(in oklch,oklch(0.9 0.15 262) 15%,transparent) !important;
  --nn-theme-file-tag-color: oklch(0.9 0.15 262) !important;
  --nn-theme-list-bg: oklch(24% 0 0) !important;
  --nn-theme-list-header-bg: oklch(24% 0 0) !important;
  --nn-theme-nav-bg: oklch(24% 0 0) !important;
  --pdf-background: oklch(30% 0 0) !important;
  --pdf-page-background: oklch(30% 0 0) !important;
  --pdf-shadow: 0 0 0 1px oklch(36% 0 0) !important;
  --pdf-sidebar-background: oklch(30% 0 0) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(36% 0 0) !important;
  --pill-border-color: oklch(36% 0 0) !important;
  --pill-border-color-hover: oklch(39% 0 0) !important;
  --pill-color: oklch(77.5% 0 0) !important;
  --pill-color-hover: oklch(100% 0 0) !important;
  --pill-color-remove: oklch(58% 0 0) !important;
  --pill-color-remove-hover: oklch(0.9 0.15 70) !important;
  --prompt-background: oklch(30% 0 0) !important;
  --prompt-border-color: oklch(36% 0 0) !important;
  --property-icon-color: oklch(0.7 0.15 262) !important;
  --property-input-color: oklch(0.9 0.15 70) !important;
  --property-label-color: oklch(0.9 0.15 262) !important;
  --raised-background: color-mix(in srgb, oklch(36% 0 0) 65%, transparent) linear-gradient(oklch(36% 0 0), color-mix(in srgb, oklch(36% 0 0) 65%, transparent)) !important;
  --ribbon-background: oklch(24% 0 0) !important;
  --ribbon-background-collapsed: oklch(24% 0 0) !important;
  --search-clear-button-color: oklch(77.5% 0 0) !important;
  --search-icon-color: oklch(77.5% 0 0) !important;
  --search-result-background: oklch(30% 0 0) !important;
  --secondary: oklch(0.9 0.15 70) !important;
  --setting-group-heading-color: oklch(100% 0 0) !important;
  --setting-items-background: oklch(27% 0 0) !important;
  --setting-items-border-color: oklch(36% 0 0) !important;
  --slider-thumb-border-color: oklch(39% 0 0) !important;
  --slider-track-background: oklch(36% 0 0) !important;
  --status-bar-background: oklch(24% 0 0) !important;
  --status-bar-border-color: oklch(42% 0 0) !important;
  --status-bar-text-color: oklch(77.5% 0 0) !important;
  --suggestion-background: oklch(30% 0 0) !important;
  --sync-avatar-color-1: #f47266 !important;
  --sync-avatar-color-2: #f79f69 !important;
  --sync-avatar-color-3: #d4e481 !important;
  --sync-avatar-color-4: #8bdfae !important;
  --sync-avatar-color-5: #84dcd2 !important;
  --sync-avatar-color-6: #4958fd !important;
  --sync-avatar-color-7: #b89de7 !important;
  --sync-avatar-color-8: #dfaac0 !important;
  --tab-background-active: oklch(30% 0 0) !important;
  --tab-container-background: oklch(30% 0 0) !important;
  --tab-divider-color: oklch(36% 0 0) !important;
  --tab-outline-color: oklch(39% 0 0) !important;
  --tab-switcher-background: oklch(24% 0 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(24% 0 0), transparent) !important;
  --tab-text-color: oklch(58% 0 0) !important;
  --tab-text-color-active: oklch(77.5% 0 0) !important;
  --tab-text-color-focused: oklch(77.5% 0 0) !important;
  --tab-text-color-focused-active: oklch(77.5% 0 0) !important;
  --tab-text-color-focused-active-current: oklch(100% 0 0) !important;
  --tab-text-color-focused-highlighted: oklch(0.9 0.15 70) !important;
  --table-add-button-border-color: oklch(36% 0 0) !important;
  --table-border-color: oklch(42% 0 0) !important;
  --table-drag-handle-background-active: oklch(0.7 0.15 70) !important;
  --table-drag-handle-color: oklch(58% 0 0) !important;
  --table-header-border-color: oklch(42% 0 0) !important;
  --table-header-color: oklch(100% 0 0) !important;
  --table-header-weight: 500 !important;
  --table-selection-border-color: oklch(0.7 0.15 70) !important;
  --tag-background: color-mix(in oklch,oklch(0.9 0.15 262) 15%,transparent) !important;
  --tag-background-hover: color-mix(in oklch,oklch(0.9 0.15 262) 30%,transparent) !important;
  --tag-color: oklch(0.9 0.15 262) !important;
  --tag-color-hover: oklch(1 0.09 262) !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.33em !important;
  --tag-radius: 12px !important;
  --tertiary: oklch(1 0.09 70) !important;
  --text-accent: oklch(0.9 0.15 70) !important;
  --text-accent-hover: oklch(1 0.09 70) !important;
  --text-error: #f47266 !important;
  --text-faint: oklch(58% 0 0) !important;
  --text-highlight-bg: oklch(from oklch(0.7 0.15 70) l c h/0.33) !important;
  --text-muted: oklch(77.5% 0 0) !important;
  --text-normal: oklch(100% 0 0) !important;
  --text-selection: oklch(from oklch(0.7 0.15 262) l c h/0.33) !important;
  --text-success: #8bdfae !important;
  --text-warning: #f79f69 !important;
  --textHighlight: oklch(from oklch(0.7 0.15 70) l c h/0.33) !important;
  --theme-color-1-alt: oklch(0.7 0.15 262) !important;
  --theme-color-1-chroma: 0.15 !important;
  --theme-color-1-high: oklch(1 0.09 262) !important;
  --theme-color-1-hue: 262 !important;
  --theme-color-1-normal: oklch(0.9 0.15 262) !important;
  --theme-color-1-transparent: oklch(from oklch(0.7 0.15 262) l c h/0.33) !important;
  --theme-color-2-alt: oklch(0.7 0.15 70) !important;
  --theme-color-2-chroma: 0.15 !important;
  --theme-color-2-high: oklch(1 0.09 70) !important;
  --theme-color-2-hue: 70 !important;
  --theme-color-2-normal: oklch(0.9 0.15 70) !important;
  --theme-color-2-transparent: oklch(from oklch(0.7 0.15 70) l c h/0.33) !important;
  --theme-color-luminosity-alt: 0.7 !important;
  --theme-color-luminosity-high: 1 !important;
  --theme-color-luminosity-normal: 0.9 !important;
  --titlebar-background: oklch(30% 0 0) !important;
  --titlebar-background-focused: oklch(30% 0 0) !important;
  --titlebar-border-color: oklch(36% 0 0) !important;
  --titlebar-text-color: oklch(77.5% 0 0) !important;
  --titlebar-text-color-focused: oklch(100% 0 0) !important;
  --vault-profile-color: oklch(100% 0 0) !important;
  --vault-profile-color-hover: oklch(100% 0 0) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.3 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: oklch(0.3 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.42 0 0);
  color: oklch(1 0 0);
  font-weight: 500;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: oklch(0.24 0 0);
  border-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .note-properties {
  border-color: oklch(0.36 0 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: oklch(0.9 0.15 262 / 0.15);
  border-radius: 12px;
  color: oklch(0.9 0.15 262);
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.24 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.42 0 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.3 0 0);
  border-left-color: oklch(0.42 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: oklch(0.3 0 0);
  color: oklch(1 0 0);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: oklch(0.7 0.15 70 / 0.33);
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body del {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body h1.article-title {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.58 0 0);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: oklch(0.7 0.15 70);
  border-color: oklch(0.7 0.15 70);
}

html[saved-theme="dark"] body p {
  color: oklch(0.775 0 0);
  outline: oklch(0.775 0 0) none 0px;
  text-decoration-color: oklch(0.775 0 0);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: oklch(0.9 0.15 70);
  outline: oklch(0.9 0.15 70) none 0px;
  text-decoration-color: oklch(0.9 0.15 70);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.9 0.15 70);
  outline: oklch(0.9 0.15 70) none 0px;
  text-decoration-color: oklch(0.9 0.15 70);
}

html[saved-theme="dark"] body a.internal.broken {
  color: oklch(0.9 0.15 70);
  outline: oklch(0.9 0.15 70) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body dt {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body ol > li {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body ul > li {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: oklch(0.58 0 0);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body table {
  color: oklch(1 0 0);
  width: 202.938px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: oklch(1 0 0);
  font-weight: 500;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: oklch(0.95 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.95 0 0);
  border-right-color: oklch(0.95 0 0);
  border-top-color: oklch(0.95 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.95 0 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.27 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.27 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: oklch(0.85 0.2 300);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.85 0.2 300);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.85 0.2 300);
  border-left-color: oklch(0.85 0.2 300);
  border-right-color: oklch(0.85 0.2 300);
  border-top-color: oklch(0.85 0.2 300);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: oklch(0.27 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: oklch(0.27 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body figcaption {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: oklch(0.27 0 0);
  border-bottom-color: oklch(0.775 0 0);
  border-left-color: oklch(0.775 0 0);
  border-right-color: oklch(0.775 0 0);
  border-top-color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(0.7 0.15 70);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 159, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.39 0 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 220, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(73, 88, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(73, 88, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(184, 157, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
  color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(141, 158, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 132,220,210;
  background-color: rgba(132, 220, 210, 0.075);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 184,157,231;
  background-color: rgba(184, 157, 231, 0.075);
  border-bottom-color: rgba(184, 157, 231, 0.25);
  border-left-color: rgba(184, 157, 231, 0.25);
  border-right-color: rgba(184, 157, 231, 0.25);
  border-top-color: rgba(184, 157, 231, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 247,159,105;
  background-color: rgba(247, 159, 105, 0.075);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.075);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 160,223,139;
  background-color: rgba(160, 223, 139, 0.075);
  border-bottom-color: rgba(160, 223, 139, 0.25);
  border-left-color: rgba(160, 223, 139, 0.25);
  border-right-color: rgba(160, 223, 139, 0.25);
  border-top-color: rgba(160, 223, 139, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 132,220,210;
  background-color: rgba(132, 220, 210, 0.075);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 247,159,105;
  background-color: rgba(247, 159, 105, 0.075);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
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
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: oklch(0.3 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: oklch(0.3 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.9 0.15 262 / 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: oklch(0.9 0.15 262);
}

html[saved-theme="dark"] body h1 {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body h2 {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body h3 {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body h4 {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body h5 {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body h6 {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 141,158,255;
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.775 0 0);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: oklch(1 0 0);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: oklch(0.58 0 0);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: oklch(0.24 0 0);
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.775 0 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.775 0 0);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: oklch(0.58 0 0);
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.58 0 0);
  stroke: oklch(0.58 0 0);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: oklch(0.58 0 0);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: oklch(0.58 0 0);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  background-color: oklch(0.27 0 0);
  border-bottom-color: oklch(0.95 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.95 0 0);
  border-right-color: oklch(0.95 0 0);
  border-top-color: oklch(0.95 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.95 0 0);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.775 0 0);
  border-left-color: oklch(0.775 0 0);
  border-right-color: oklch(0.775 0 0);
  border-top-color: oklch(0.775 0 0);
  color: oklch(0.775 0 0);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: oklch(0.24 0 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body abbr {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.9 0.15 262);
  border-left-color: oklch(0.9 0.15 262);
  border-right-color: oklch(0.9 0.15 262);
  border-top-color: oklch(0.9 0.15 262);
  color: oklch(0.9 0.15 262);
}

html[saved-theme="dark"] body kbd {
  background-color: oklch(0.27 0 0);
  border-bottom-color: oklch(0.95 0 0);
  border-left-color: oklch(0.95 0 0);
  border-right-color: oklch(0.95 0 0);
  border-top-color: oklch(0.95 0 0);
  color: oklch(0.95 0 0);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

html[saved-theme="dark"] body sub {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body summary {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body sup {
  color: oklch(1 0 0);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: oklch(0.9 0.15 262 / 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: oklch(0.9 0.15 262);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: oklch(82% 0 0) !important;
  --background-modifier-border: oklch(88% 0 0) !important;
  --background-modifier-border-focus: oklch(78% 0 0) !important;
  --background-modifier-border-hover: oklch(85% 0 0) !important;
  --background-modifier-error: #f47266 !important;
  --background-modifier-error-hover: #f47266 !important;
  --background-modifier-error-rgb: 244,114,102 !important;
  --background-modifier-form-field: oklch(100% 0 0) !important;
  --background-modifier-form-field-hover: oklch(100% 0 0) !important;
  --background-modifier-success: #8bdfae !important;
  --background-modifier-success-rgb: 160,223,139 !important;
  --background-primary: oklch(100% 0 0) !important;
  --background-primary-alt: oklch(97% 0 0) !important;
  --background-secondary: oklch(94% 0 0) !important;
  --background-secondary-alt: oklch(91% 0 0) !important;
  --base-row-even-bg: oklch(100% 0 0) !important;
  --base-row-hover-bg: oklch(82% 0 0) !important;
  --base-row-odd-bg: oklch(97% 0 0) !important;
  --bases-cards-background: oklch(100% 0 0) !important;
  --bases-cards-cover-background: oklch(97% 0 0) !important;
  --bases-cards-shadow: 0 0 0 1px oklch(88% 0 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(85% 0 0) !important;
  --bases-embed-border-color: oklch(82% 0 0) !important;
  --bases-group-heading-property-color: oklch(27.5% 0 0) !important;
  --bases-table-border-color: oklch(82% 0 0) !important;
  --bases-table-cell-background-active: oklch(100% 0 0) !important;
  --bases-table-cell-background-disabled: oklch(97% 0 0) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(78% 0 0) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px oklch(0.5 0.15 70) !important;
  --bases-table-group-background: oklch(97% 0 0) !important;
  --bases-table-header-background: oklch(100% 0 0) !important;
  --bases-table-header-color: oklch(0.4 0.15 262) !important;
  --bases-table-summary-background: oklch(100% 0 0) !important;
  --blockquote-border-color: oklch(0.5 0.15 262) !important;
  --blockquote-border-thickness: 0.2em !important;
  --blur-background: color-mix(in srgb, oklch(100% 0 0) 65%, transparent) linear-gradient(oklch(100% 0 0), color-mix(in srgb, oklch(100% 0 0) 65%, transparent)) !important;
  --callout-bug: 244,114,102;
  --callout-default: 141,158,255;
  --callout-error: 244,114,102;
  --callout-example: 184,157,231;
  --callout-fail: 244,114,102;
  --callout-important: 132,220,210;
  --callout-info: 141,158,255;
  --callout-question: 247,159,105;
  --callout-success: 160,223,139;
  --callout-summary: 132,220,210;
  --callout-tip: 132,220,210;
  --callout-todo: 141,158,255;
  --callout-warning: 247,159,105;
  --canvas-background: oklch(100% 0 0) !important;
  --canvas-card-label-color: oklch(45% 0 0) !important;
  --canvas-color-1: 244,114,102 !important;
  --canvas-color-2: 247,159,105 !important;
  --canvas-color-3: 228,220,129 !important;
  --canvas-color-4: 160,223,139 !important;
  --canvas-color-5: 132,220,210 !important;
  --canvas-color-6: 184,157,231 !important;
  --canvas-dot-pattern: oklch(88% 0 0) !important;
  --caret-color: oklch(0% 0 0) !important;
  --checkbox-border-color: oklch(45% 0 0) !important;
  --checkbox-border-color-hover: oklch(27.5% 0 0) !important;
  --checkbox-color: oklch(0.5 0.15 70) !important;
  --checkbox-color-hover: oklch(0.4 0.15 70) !important;
  --checkbox-marker-color: oklch(100% 0 0) !important;
  --checklist-done-color: oklch(27.5% 0 0) !important;
  --code-background: oklch(97% 0 0) !important;
  --code-border-color: oklch(88% 0 0) !important;
  --code-comment: oklch(50% 0 0) !important;
  --code-function: oklch(40% 0.2 300) !important;
  --code-important: oklch(30% 0.2 295) !important;
  --code-keyword: oklch(40% 0.16 150) !important;
  --code-normal: oklch(0% 0 0) !important;
  --code-operator: oklch(0% 0 0) !important;
  --code-property: oklch(40% 0.16 250) !important;
  --code-punctuation: oklch(0% 0 0) !important;
  --code-radius: 8px !important;
  --code-string: oklch(40% 0.2 90) !important;
  --code-tag: oklch(40% 0.2 260) !important;
  --code-value: #b89de7 !important;
  --code-valuse: oklch(40% 0.16 110) !important;
  --collapse-icon-color: oklch(45% 0 0) !important;
  --collapse-icon-color-collapsed: oklch(0.4 0.15 70) !important;
  --color-base-00: oklch(100% 0 0) !important;
  --color-base-05: oklch(97% 0 0) !important;
  --color-base-10: oklch(94% 0 0) !important;
  --color-base-100: oklch(0% 0 0) !important;
  --color-base-20: oklch(91% 0 0) !important;
  --color-base-30: oklch(88% 0 0) !important;
  --color-base-40: oklch(85% 0 0) !important;
  --color-base-50: oklch(82% 0 0) !important;
  --color-base-60: oklch(78% 0 0) !important;
  --color-base-70: oklch(73% 0 0) !important;
  --color-blue: #4958fd !important;
  --color-blue-rgb: 141,158,255 !important;
  --color-cyan: #84dcd2 !important;
  --color-cyan-rgb: 132,220,210 !important;
  --color-green: #8bdfae !important;
  --color-green-rgb: 160,223,139 !important;
  --color-orange: #f79f69 !important;
  --color-orange-rgb: 247,159,105 !important;
  --color-pink: #dfaac0 !important;
  --color-pink-rgb: 223,170,192 !important;
  --color-purple: #b89de7 !important;
  --color-purple-rgb: 184,157,231 !important;
  --color-red: #f47266 !important;
  --color-red-rgb: 244,114,102 !important;
  --color-yellow: #d4e481 !important;
  --color-yellow-rgb: 228,220,129 !important;
  --dark: oklch(0% 0 0) !important;
  --darkgray: oklch(0% 0 0) !important;
  --divider-color: oklch(82% 0 0) !important;
  --divider-color-hover: oklch(0.5 0.15 70) !important;
  --dropdown-background: oklch(94% 0 0) !important;
  --dropdown-background-hover: oklch(91% 0 0) !important;
  --embed-block-shadow-hover: 0 0 0 1px oklch(88% 0 0), inset 0 0 0 1px oklch(88% 0 0) !important;
  --embed-border-start: 2px solid oklch(0.5 0.15 70) !important;
  --file-header-background: oklch(100% 0 0) !important;
  --file-header-background-focused: oklch(100% 0 0) !important;
  --file-header-justify: left !important;
  --flair-background: oklch(94% 0 0) !important;
  --flair-color: oklch(0% 0 0) !important;
  --font-headings: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: oklch(88% 0 0) !important;
  --footnote-id-color: oklch(27.5% 0 0) !important;
  --footnote-id-color-no-occurrences: oklch(45% 0 0) !important;
  --graph-node: oklch(27.5% 0 0) !important;
  --graph-node-attachment: #d4e481 !important;
  --graph-node-focused: oklch(0.4 0.15 70) !important;
  --graph-node-tag: oklch(0.4 0.15 262) !important;
  --graph-node-unresolved: oklch(45% 0 0) !important;
  --graph-text: oklch(0% 0 0) !important;
  --gray: oklch(27.5% 0 0) !important;
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h2-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h3-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h4-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h5-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --h6-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: oklch(45% 0 0) !important;
  --heading-underline-color: oklch(85% 0 0) !important;
  --highlight: oklch(from oklch(0.5 0.15 70) l c h/0.33) !important;
  --hr-color: oklch(82% 0 0) !important;
  --icon-color: oklch(45% 0 0) !important;
  --icon-color-active: oklch(27.5% 0 0) !important;
  --icon-color-focused: oklch(0% 0 0) !important;
  --icon-color-hover: oklch(27.5% 0 0) !important;
  --inline-title-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --inline-title-margin-bottom: 1rem !important;
  --inline-title-size: 1.625rem !important;
  --input-date-separator: oklch(45% 0 0) !important;
  --input-placeholder-color: oklch(45% 0 0) !important;
  --interactive-accent: oklch(0.5 0.15 70) !important;
  --interactive-accent-hover: oklch(0.4 0.15 70) !important;
  --interactive-hover: oklch(91% 0 0) !important;
  --interactive-normal: oklch(94% 0 0) !important;
  --light: oklch(100% 0 0) !important;
  --lightgray: oklch(94% 0 0) !important;
  --link-color: oklch(0.4 0.15 70) !important;
  --link-color-hover: oklch(0.3 0.15 70) !important;
  --link-external-color: oklch(0.4 0.15 70) !important;
  --link-external-color-hover: oklch(0.3 0.15 70) !important;
  --link-unresolved-color: oklch(0.4 0.15 70) !important;
  --list-marker-color: oklch(27.5% 0 0) !important;
  --list-marker-color-collapsed: oklch(0.4 0.15 70) !important;
  --list-marker-color-hover: oklch(27.5% 0 0) !important;
  --menu-background: oklch(94% 0 0) !important;
  --menu-border-color: oklch(85% 0 0) !important;
  --metadata-border-color: oklch(88% 0 0) !important;
  --metadata-divider-color: oklch(88% 0 0) !important;
  --metadata-gap: 0 !important;
  --metadata-input-font-size: max(13px,0.9em) !important;
  --metadata-input-text-color: oklch(0.4 0.15 70) !important;
  --metadata-label-font-size: max(13px,0.9em) !important;
  --metadata-label-text-color: oklch(0.4 0.15 262) !important;
  --metadata-label-text-color-hover: oklch(27.5% 0 0) !important;
  --metadata-label-width: max(22.5%,8rem) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(78% 0 0) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(85% 0 0) !important;
  --modal-background: oklch(100% 0 0) !important;
  --modal-border-color: oklch(88% 0 0) !important;
  --nav-collapse-icon-color: oklch(45% 0 0) !important;
  --nav-collapse-icon-color-collapsed: oklch(45% 0 0) !important;
  --nav-heading-color: oklch(0% 0 0) !important;
  --nav-heading-color-collapsed: oklch(45% 0 0) !important;
  --nav-heading-color-collapsed-hover: oklch(27.5% 0 0) !important;
  --nav-heading-color-hover: oklch(0% 0 0) !important;
  --nav-item-color: oklch(27.5% 0 0) !important;
  --nav-item-color-active: oklch(0% 0 0) !important;
  --nav-item-color-highlighted: oklch(0.4 0.15 70) !important;
  --nav-item-color-hover: oklch(0% 0 0) !important;
  --nav-item-color-selected: oklch(0% 0 0) !important;
  --nav-tag-color: oklch(45% 0 0) !important;
  --nav-tag-color-active: oklch(27.5% 0 0) !important;
  --nav-tag-color-hover: oklch(27.5% 0 0) !important;
  --nn-theme-file-selected-bg: oklch(85% 0 0) !important;
  --nn-theme-file-selected-inactive-bg: oklch(88% 0 0) !important;
  --nn-theme-file-selected-name-color: oklch(0% 0 0) !important;
  --nn-theme-file-tag-bg: color-mix(in oklch,oklch(0.4 0.15 262) 15%,transparent) !important;
  --nn-theme-file-tag-color: oklch(0.4 0.15 262) !important;
  --nn-theme-list-bg: oklch(94% 0 0) !important;
  --nn-theme-list-header-bg: oklch(94% 0 0) !important;
  --nn-theme-nav-bg: oklch(94% 0 0) !important;
  --pdf-background: oklch(100% 0 0) !important;
  --pdf-page-background: oklch(100% 0 0) !important;
  --pdf-sidebar-background: oklch(100% 0 0) !important;
  --pill-border-color: oklch(88% 0 0) !important;
  --pill-border-color-hover: oklch(85% 0 0) !important;
  --pill-color: oklch(27.5% 0 0) !important;
  --pill-color-hover: oklch(0% 0 0) !important;
  --pill-color-remove: oklch(45% 0 0) !important;
  --pill-color-remove-hover: oklch(0.4 0.15 70) !important;
  --prompt-background: oklch(100% 0 0) !important;
  --prompt-border-color: oklch(88% 0 0) !important;
  --property-icon-color: oklch(0.5 0.15 262) !important;
  --property-input-color: oklch(0.4 0.15 70) !important;
  --property-label-color: oklch(0.4 0.15 262) !important;
  --raised-background: color-mix(in srgb, oklch(100% 0 0) 65%, transparent) linear-gradient(oklch(100% 0 0), color-mix(in srgb, oklch(100% 0 0) 65%, transparent)) !important;
  --ribbon-background: oklch(94% 0 0) !important;
  --ribbon-background-collapsed: oklch(94% 0 0) !important;
  --search-clear-button-color: oklch(27.5% 0 0) !important;
  --search-icon-color: oklch(27.5% 0 0) !important;
  --search-result-background: oklch(100% 0 0) !important;
  --secondary: oklch(0.4 0.15 70) !important;
  --setting-group-heading-color: oklch(0% 0 0) !important;
  --setting-items-background: oklch(97% 0 0) !important;
  --setting-items-border-color: oklch(88% 0 0) !important;
  --slider-thumb-border-color: oklch(85% 0 0) !important;
  --slider-track-background: oklch(88% 0 0) !important;
  --status-bar-background: oklch(94% 0 0) !important;
  --status-bar-border-color: oklch(82% 0 0) !important;
  --status-bar-text-color: oklch(27.5% 0 0) !important;
  --suggestion-background: oklch(100% 0 0) !important;
  --sync-avatar-color-1: #f47266 !important;
  --sync-avatar-color-2: #f79f69 !important;
  --sync-avatar-color-3: #d4e481 !important;
  --sync-avatar-color-4: #8bdfae !important;
  --sync-avatar-color-5: #84dcd2 !important;
  --sync-avatar-color-6: #4958fd !important;
  --sync-avatar-color-7: #b89de7 !important;
  --sync-avatar-color-8: #dfaac0 !important;
  --tab-background-active: oklch(100% 0 0) !important;
  --tab-container-background: oklch(100% 0 0) !important;
  --tab-divider-color: oklch(88% 0 0) !important;
  --tab-outline-color: oklch(85% 0 0) !important;
  --tab-switcher-background: oklch(94% 0 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(94% 0 0), transparent) !important;
  --tab-text-color: oklch(45% 0 0) !important;
  --tab-text-color-active: oklch(27.5% 0 0) !important;
  --tab-text-color-focused: oklch(27.5% 0 0) !important;
  --tab-text-color-focused-active: oklch(27.5% 0 0) !important;
  --tab-text-color-focused-active-current: oklch(0% 0 0) !important;
  --tab-text-color-focused-highlighted: oklch(0.4 0.15 70) !important;
  --table-add-button-border-color: oklch(88% 0 0) !important;
  --table-border-color: oklch(82% 0 0) !important;
  --table-drag-handle-background-active: oklch(0.5 0.15 70) !important;
  --table-drag-handle-color: oklch(45% 0 0) !important;
  --table-drag-handle-color-active: oklch(100% 0 0) !important;
  --table-header-border-color: oklch(82% 0 0) !important;
  --table-header-color: oklch(0% 0 0) !important;
  --table-header-weight: 500 !important;
  --table-selection-border-color: oklch(0.5 0.15 70) !important;
  --tag-background: color-mix(in oklch,oklch(0.4 0.15 262) 15%,transparent) !important;
  --tag-background-hover: color-mix(in oklch,oklch(0.4 0.15 262) 30%,transparent) !important;
  --tag-color: oklch(0.4 0.15 262) !important;
  --tag-color-hover: oklch(0.3 0.15 262) !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.33em !important;
  --tag-radius: 12px !important;
  --tertiary: oklch(0.3 0.15 70) !important;
  --text-accent: oklch(0.4 0.15 70) !important;
  --text-accent-hover: oklch(0.3 0.15 70) !important;
  --text-error: #f47266 !important;
  --text-faint: oklch(45% 0 0) !important;
  --text-highlight-bg: oklch(from oklch(0.5 0.15 70) l c h/0.33) !important;
  --text-muted: oklch(27.5% 0 0) !important;
  --text-normal: oklch(0% 0 0) !important;
  --text-on-accent: oklch(100% 0 0) !important;
  --text-on-accent-inverted: oklch(100% 0 0) !important;
  --text-selection: oklch(from oklch(0.5 0.15 262) l c h/0.33) !important;
  --text-success: #8bdfae !important;
  --text-warning: #f79f69 !important;
  --textHighlight: oklch(from oklch(0.5 0.15 70) l c h/0.33) !important;
  --theme-color-1-alt: oklch(0.5 0.15 262) !important;
  --theme-color-1-chroma: 0.15 !important;
  --theme-color-1-high: oklch(0.3 0.15 262) !important;
  --theme-color-1-hue: 262 !important;
  --theme-color-1-normal: oklch(0.4 0.15 262) !important;
  --theme-color-1-transparent: oklch(from oklch(0.5 0.15 262) l c h/0.33) !important;
  --theme-color-2-alt: oklch(0.5 0.15 70) !important;
  --theme-color-2-chroma: 0.15 !important;
  --theme-color-2-high: oklch(0.3 0.15 70) !important;
  --theme-color-2-hue: 70 !important;
  --theme-color-2-normal: oklch(0.4 0.15 70) !important;
  --theme-color-2-transparent: oklch(from oklch(0.5 0.15 70) l c h/0.33) !important;
  --theme-color-luminosity-alt: 0.5 !important;
  --theme-color-luminosity-high: 0.3 !important;
  --theme-color-luminosity-normal: 0.4 !important;
  --titlebar-background: oklch(100% 0 0) !important;
  --titlebar-background-focused: oklch(100% 0 0) !important;
  --titlebar-border-color: oklch(88% 0 0) !important;
  --titlebar-text-color: oklch(27.5% 0 0) !important;
  --titlebar-text-color-focused: oklch(0% 0 0) !important;
  --vault-profile-color: oklch(0% 0 0) !important;
  --vault-profile-color-hover: oklch(0% 0 0) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: oklch(0.82 0 0);
  color: oklch(0 0 0);
  font-weight: 500;
}

html[saved-theme="light"] body .canvas-node {
  border-color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: oklch(0 0 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: oklch(1 0 0);
  border-color: oklch(0 0 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: oklch(0.88 0 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: oklch(0.4 0.15 262 / 0.15);
  border-radius: 12px;
  color: oklch(0.4 0.15 262);
}

html[saved-theme="light"] body .note-properties-value {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.94 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.82 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(1 0 0);
  border-left-color: oklch(0.82 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: oklch(0.5 0.15 70 / 0.33);
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body del {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body h1.article-title {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.45 0 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: oklch(0.5 0.15 70);
  border-color: oklch(0.5 0.15 70);
}

html[saved-theme="light"] body p {
  color: oklch(0.275 0 0);
  outline: oklch(0.275 0 0) none 0px;
  text-decoration-color: oklch(0.275 0 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: oklch(0.4 0.15 70);
  outline: oklch(0.4 0.15 70) none 0px;
  text-decoration-color: oklch(0.4 0.15 70);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.4 0.15 70);
  outline: oklch(0.4 0.15 70) none 0px;
  text-decoration-color: oklch(0.4 0.15 70);
}

html[saved-theme="light"] body a.internal.broken {
  color: oklch(0.4 0.15 70);
  outline: oklch(0.4 0.15 70) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body dt {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ol > li {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body ul > li {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: oklch(0.45 0 0);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body table {
  color: oklch(0 0 0);
  width: 202.938px;
}

html[saved-theme="light"] body td {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: oklch(0 0 0);
  font-weight: 500;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0 0 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0 0 0);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: oklch(0.4 0.2 300);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.4 0.2 300);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.4 0.2 300);
  border-left-color: oklch(0.4 0.2 300);
  border-right-color: oklch(0.4 0.2 300);
  border-top-color: oklch(0.4 0.2 300);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body figcaption {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body figure {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.275 0 0);
  border-left-color: oklch(0.275 0 0);
  border-right-color: oklch(0.275 0 0);
  border-top-color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0.5 0.15 70);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 159, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.82 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 220, 210);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(73, 88, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(73, 88, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 228, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(184, 157, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 114, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 223, 174);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
  color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(141, 158, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 132,220,210;
  background-color: rgba(132, 220, 210, 0.1);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.1);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.1);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 184,157,231;
  background-color: rgba(184, 157, 231, 0.1);
  border-bottom-color: rgba(184, 157, 231, 0.25);
  border-left-color: rgba(184, 157, 231, 0.25);
  border-right-color: rgba(184, 157, 231, 0.25);
  border-top-color: rgba(184, 157, 231, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.1);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.1);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.1);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 247,159,105;
  background-color: rgba(247, 159, 105, 0.1);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 160,223,139;
  background-color: rgba(160, 223, 139, 0.1);
  border-bottom-color: rgba(160, 223, 139, 0.25);
  border-left-color: rgba(160, 223, 139, 0.25);
  border-right-color: rgba(160, 223, 139, 0.25);
  border-top-color: rgba(160, 223, 139, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 132,220,210;
  background-color: rgba(132, 220, 210, 0.1);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.1);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 247,159,105;
  background-color: rgba(247, 159, 105, 0.1);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
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
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration-color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.4 0.15 262 / 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: oklch(0.4 0.15 262);
}

html[saved-theme="light"] body h1 {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body h2 {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body h3 {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body h4 {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body h5 {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body h6 {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 141,158,255;
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.275 0 0);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: oklch(0 0 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: oklch(0.45 0 0);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: oklch(0.94 0 0);
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(0.275 0 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.275 0 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: oklch(0.45 0 0);
}

html[saved-theme="light"] body .darkmode svg {
  color: oklch(0.45 0 0);
  stroke: oklch(0.45 0 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: oklch(0.45 0 0);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: oklch(0.45 0 0);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0 0 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.275 0 0);
  border-left-color: oklch(0.275 0 0);
  border-right-color: oklch(0.275 0 0);
  border-top-color: oklch(0.275 0 0);
  color: oklch(0.275 0 0);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: oklch(0.94 0 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body abbr {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: oklch(0.4 0.15 262);
  border-left-color: oklch(0.4 0.15 262);
  border-right-color: oklch(0.4 0.15 262);
  border-top-color: oklch(0.4 0.15 262);
  color: oklch(0.4 0.15 262);
}

html[saved-theme="light"] body kbd {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

html[saved-theme="light"] body progress {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

html[saved-theme="light"] body sub {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body summary {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body sup {
  color: oklch(0 0 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: oklch(0.4 0.15 262 / 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: oklch(0.4 0.15 262);
}`,
  },
};
