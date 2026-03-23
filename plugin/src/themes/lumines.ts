import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "lumines",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 259.1 !important;
  --accent-l: 69.9% !important;
  --accent-s: 89.9% !important;
  --background-modifier-active-hover: transparent !important;
  --background-modifier-border: hsl(0, 0%, 20%) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-form-field: hsl(0, 0%, 20%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 20%) !important;
  --background-primary: hsl(0, 0%, 11%) !important;
  --background-primary-alt: hsl(0, 0%, 17%) !important;
  --background-secondary: hsl(0, 0%, 14%) !important;
  --background-secondary-alt: hsl(0, 0%, 30%) !important;
  --bases-cards-background: hsl(0, 0%, 14%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 17%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 0%, 17%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(259.1, 89.9%, 69.9%) !important;
  --bases-cards-text-size: 0.875em !important;
  --bases-embed-border-color: hsl(0, 0%, 17%) !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: hsl(0, 0%, 90%) !important;
  --bases-table-border-color: hsl(0, 0%, 17%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 14%) !important;
  --bases-table-cell-background-disabled: transparent !important;
  --bases-table-cell-background-selected: hsla(259.1, 89.9%, 69.9%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(259.1, 89.9%, 69.9%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(259.1, 89.9%, 69.9%) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: hsl(0, 0%, 17%) !important;
  --bases-table-header-background: hsl(0, 0%, 11%) !important;
  --bases-table-header-background-hover: none !important;
  --bases-table-header-color: hsl(0, 0%, 90%) !important;
  --bases-table-header-icon-display: none !important;
  --bases-table-row-background-hover: hsl(0, 0%, 14%) !important;
  --bases-table-summary-background: hsl(0, 0%, 11%) !important;
  --bases-table-text-size: 0.875em !important;
  --blockquote-border-color: hsl(259.1, 89.9%, 69.9%) !important;
  --blue-h: 207 !important;
  --blue-l: 57% !important;
  --blue-s: 86% !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 20%) 65%, transparent) linear-gradient(hsl(0, 0%, 20%), color-mix(in srgb, hsl(0, 0%, 20%) 65%, transparent)) !important;
  --bold-color: hsl(259.1, 89.9%, 69.9%) !important;
  --bold-weight: 600 !important;
  --button-radius: 8px !important;
  --callout-background-color-opacity: 0.1;
  --callout-border-width: 1px;
  --callout-padding: 24px;
  --callout-radius: 8px;
  --callout-title-weight: 600;
  --canvas-background: hsl(0, 0%, 11%) !important;
  --canvas-card-label-color: hsl(0, 0%, 50%) !important;
  --canvas-dot-pattern: hsl(0, 0%, 30%) !important;
  --caret-color: hsl(0, 0%, 96%) !important;
  --checkbox-border-color: hsl(0, 0%, 50%) !important;
  --checkbox-border-color-hover: hsl(259.1, 89.9%, 69.9%) !important;
  --checkbox-color: hsl(259.1, 89.9%, 69.9%) !important;
  --checkbox-color-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --checkbox-marker-color: hsl(0, 0%, 11%) !important;
  --checkbox-radius: 35% !important;
  --checklist-done-color: hsl(0, 0%, 50%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(0, 0%, 14%) !important;
  --code-border-color: hsl(0, 0%, 17%) !important;
  --code-border-width: 1px !important;
  --code-comment: hsl(0, 0%, 50%) !important;
  --code-function: rgb(152, 195, 121) !important;
  --code-important: rgb(198, 120, 221) !important;
  --code-keyword: rgb(86, 182, 194) !important;
  --code-normal: hsl(0, 0%, 93%) !important;
  --code-operator: hsl(0, 0%, 93%) !important;
  --code-property: rgb(86, 182, 194) !important;
  --code-punctuation: hsl(0, 0%, 90%) !important;
  --code-radius: 8px !important;
  --code-string: rgb(229, 192, 123) !important;
  --code-tag: rgb(224, 108, 117) !important;
  --code-value: rgb(198, 120, 221) !important;
  --collapse-icon-color: hsl(0, 0%, 50%) !important;
  --collapse-icon-color-collapsed: hsl(259.1, 89.9%, 69.9%) !important;
  --color-accent: hsl(259.1, 89.9%, 69.9%) !important;
  --color-accent-1: hsl(256.1, 91.698%, 80.385%) !important;
  --color-accent-2: hsl(254.1, 94.395%, 90.171%) !important;
  --color-accent-hsl: 259.1, 89.9%, 69.9% !important;
  --color-base-00: hsl(0, 0%, 11%) !important;
  --color-base-05: hsl(0, 0%, 14%) !important;
  --color-base-10: hsl(0, 0%, 17%) !important;
  --color-base-100: hsl(0, 0%, 99%) !important;
  --color-base-20: hsl(0, 0%, 20%) !important;
  --color-base-25: hsl(0, 0%, 25%) !important;
  --color-base-30: hsl(0, 0%, 30%) !important;
  --color-base-35: hsl(0, 0%, 35%) !important;
  --color-base-40: hsl(0, 0%, 40%) !important;
  --color-base-50: hsl(0, 0%, 50%) !important;
  --color-base-60: hsl(0, 0%, 60%) !important;
  --color-base-70: hsl(0, 0%, 90%) !important;
  --color-base-80: hsl(0, 0%, 93%) !important;
  --color-base-90: hsl(0, 0%, 96%) !important;
  --components-background: hsl(0, 0%, 20%) !important;
  --components-background-hover: hsl(0, 0%, 25%) !important;
  --custom-icon-size: 1.2em !important;
  --cyan-h: 187 !important;
  --cyan-l: 55% !important;
  --cyan-s: 69% !important;
  --dark: hsl(0, 0%, 96%) !important;
  --darkgray: hsl(0, 0%, 96%) !important;
  --divider-color: hsl(0, 0%, 17%) !important;
  --divider-color-hover: hsl(259.1, 89.9%, 69.9%) !important;
  --divider-vertical-height: calc(100% - 40px) !important;
  --dropdown-background: hsl(0, 0%, 20%) !important;
  --dropdown-background-hover: hsl(0, 0%, 25%) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsl(259.1, 89.9%, 69.9%) !important;
  --file-header-background: hsl(0, 0%, 11%) !important;
  --file-header-background-focused: hsl(0, 0%, 11%) !important;
  --filename-margin-bottom: 0.8rem !important;
  --flair-background: hsl(0, 0%, 20%) !important;
  --flair-color: hsl(0, 0%, 96%) !important;
  --font-weight-table-titles: 700 !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: hsl(0, 0%, 90%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 50%) !important;
  --footnote-input-background-active: transparent !important;
  --graph-line: hsl(0, 0%, 30%) !important;
  --graph-node: hsl(0, 0%, 90%) !important;
  --graph-node-attachment: hsl(47, 100%, 62%) !important;
  --graph-node-focused: transparent !important;
  --graph-node-tag: hsl(259.1, 89.9%, 69.9%) !important;
  --graph-node-unresolved: hsl(0, 0%, 50%) !important;
  --graph-text: hsl(0, 0%, 96%) !important;
  --gray: hsl(0, 0%, 90%) !important;
  --gray-h: 210 !important;
  --gray-l: 71% !important;
  --gray-s: 11% !important;
  --green-h: 130 !important;
  --green-l: 64% !important;
  --green-s: 61% !important;
  --h1-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h1-size: 1.5em !important;
  --h2-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h2-size: 1.4em !important;
  --h3-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h3-size: 1.3em !important;
  --h4-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h4-size: 1.2em !important;
  --h5-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h5-size: 1.1em !important;
  --h6-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h6-size: 1.0em !important;
  --header-padding-top: 0.3em !important;
  --heading-formatting: hsl(0, 0%, 50%) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: transparent !important;
  --hr-color: hsl(0, 0%, 17%) !important;
  --icon-color: hsl(0, 0%, 90%) !important;
  --icon-color-active: hsl(0, 0%, 93%) !important;
  --icon-color-focused: hsl(0, 0%, 96%) !important;
  --icon-color-hover: hsl(0, 0%, 90%) !important;
  --indigo-h: 228 !important;
  --indigo-l: 72% !important;
  --indigo-s: 96% !important;
  --inline-title-color: hsl(0, 0%, 96%) !important;
  --inline-title-size: 1.5em !important;
  --input-date-separator: hsl(0, 0%, 50%) !important;
  --input-placeholder-color: hsl(0, 0%, 50%) !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(259.1, 89.9%, 69.9%) !important;
  --interactive-accent-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --interactive-accent-hsl: 259.1, 89.9%, 69.9% !important;
  --interactive-hover: hsl(0, 0%, 25%) !important;
  --interactive-normal: hsl(0, 0%, 20%) !important;
  --italic-color: hsl(259.1, 89.9%, 69.9%) !important;
  --light: hsl(0, 0%, 11%) !important;
  --lightgray: hsl(0, 0%, 14%) !important;
  --lime-h: 82 !important;
  --lime-l: 69% !important;
  --lime-s: 75% !important;
  --link-color: hsl(259.1, 89.9%, 69.9%) !important;
  --link-color-hover: hsl(254.1, 94.395%, 90.171%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(259.1, 89.9%, 69.9%) !important;
  --link-external-color-hover: hsl(254.1, 94.395%, 90.171%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsl(256.1, 91.698%, 80.385%) !important;
  --link-unresolved-decoration-color: hsla(259.1, 89.9%, 69.9%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(0, 0%, 50%) !important;
  --list-marker-color-collapsed: hsl(256.1, 91.698%, 80.385%) !important;
  --list-marker-color-hover: hsl(0, 0%, 90%) !important;
  --menu-background: hsl(0, 0%, 14%) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: hsl(0, 0%, 96%) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-text-color: hsl(0, 0%, 90%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 90%) !important;
  --metadata-margin-bottom: 0.8rem !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-property-radius: 8px !important;
  --metadata-property-radius-focus: 8px !important;
  --metadata-property-radius-hover: 8px !important;
  --modal-background: hsl(0, 0%, 11%) !important;
  --modal-border-color: hsl(0, 0%, 17%) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: hsl(0, 0%, 50%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 50%) !important;
  --nav-heading-color: hsl(0, 0%, 96%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 50%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 90%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 96%) !important;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.07) !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-background-selected: hsla(259.1, 89.9%, 69.9%, 0.15) !important;
  --nav-item-color: hsl(0, 0%, 90%) !important;
  --nav-item-color-active: hsl(0, 0%, 90%) !important;
  --nav-item-color-highlighted: hsl(256.1, 91.698%, 80.385%) !important;
  --nav-item-color-hover: hsl(0, 0%, 90%) !important;
  --nav-item-color-selected: hsl(0, 0%, 96%) !important;
  --nav-tag-color: hsl(0, 0%, 50%) !important;
  --nav-tag-color-active: hsl(0, 0%, 90%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 90%) !important;
  --orange-h: 31 !important;
  --orange-l: 65% !important;
  --orange-s: 100% !important;
  --pdf-background: hsl(0, 0%, 11%) !important;
  --pdf-page-background: hsl(0, 0%, 11%) !important;
  --pdf-shadow: 0 0 0 1px hsl(0, 0%, 20%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 11%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(0, 0%, 20%) !important;
  --pill-border-color: hsl(0, 0%, 20%) !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: hsl(0, 0%, 90%) !important;
  --pill-color-hover: hsl(0, 0%, 96%) !important;
  --pill-color-remove: hsl(0, 0%, 50%) !important;
  --pill-color-remove-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --pink-h: 339 !important;
  --pink-l: 74% !important;
  --pink-s: 88% !important;
  --popover-height: 300px !important;
  --popover-width: 500px !important;
  --primary-blue: 207, 86%, 57% !important;
  --primary-cyan: 187, 69%, 55% !important;
  --primary-gray: 210, 11%, 71% !important;
  --primary-green: 130, 61%, 64% !important;
  --primary-indigo: 228, 96%, 72% !important;
  --primary-lime: 82, 75%, 69% !important;
  --primary-orange: 31, 100%, 65% !important;
  --primary-pink: 339, 88%, 74% !important;
  --primary-red: 0, 94%, 65% !important;
  --primary-sky: 206, 96%, 72% !important;
  --primary-violet: 259, 90%, 70% !important;
  --primary-white: 0, 0%, 100% !important;
  --primary-yellow: 47, 100%, 62% !important;
  --prompt-background: hsl(0, 0%, 11%) !important;
  --prompt-border-color: hsl(0, 0%, 17%) !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 20%) 65%, transparent) linear-gradient(hsl(0, 0%, 20%), color-mix(in srgb, hsl(0, 0%, 20%) 65%, transparent)) !important;
  --red-h: 0 !important;
  --red-l: 65% !important;
  --red-s: 94% !important;
  --ribbon-background: hsl(0, 0%, 11%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 11%) !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.1) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.05) !important;
  --search-clear-button-color: hsl(0, 0%, 90%) !important;
  --search-icon-color: hsl(0, 0%, 90%) !important;
  --search-result-background: hsl(0, 0%, 14%) !important;
  --secondary: hsl(256.1, 91.698%, 80.385%) !important;
  --setting-group-heading-color: hsl(0, 0%, 96%) !important;
  --setting-items-background: hsl(0, 0%, 14%) !important;
  --setting-items-border-color: hsl(0, 0%, 20%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --sky-h: 206 !important;
  --sky-l: 72% !important;
  --sky-s: 96% !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: hsl(0, 0%, 20%) !important;
  --status-bar-background: hsl(0, 0%, 14%) !important;
  --status-bar-border-color: hsl(0, 0%, 17%) !important;
  --status-bar-border-width: 0 !important;
  --status-bar-position: related !important;
  --status-bar-radius: 0 !important;
  --status-bar-text-color: hsl(0, 0%, 90%) !important;
  --suggestion-background: hsl(0, 0%, 11%) !important;
  --tab-background-active: hsl(0, 0%, 11%) !important;
  --tab-container-background: hsl(0, 0%, 11%) !important;
  --tab-curve: 8px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: hsl(0, 0%, 17%) !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-switcher-background: hsl(0, 0%, 14%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 14%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(259.1, 89.9%, 69.9%) !important;
  --tab-text-color: hsl(0, 0%, 50%) !important;
  --tab-text-color-active: hsl(0, 0%, 90%) !important;
  --tab-text-color-focused: hsl(0, 0%, 50%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 50%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 96%) !important;
  --tab-text-color-focused-highlighted: hsl(256.1, 91.698%, 80.385%) !important;
  --table-add-button-border-color: hsl(0, 0%, 20%) !important;
  --table-border-color: hsl(0, 0%, 20%) !important;
  --table-drag-handle-background-active: hsl(259.1, 89.9%, 69.9%) !important;
  --table-drag-handle-color: hsl(0, 0%, 50%) !important;
  --table-header-background: hsl(0, 0%, 14%) !important;
  --table-header-border-color: hsl(0, 0%, 20%) !important;
  --table-header-color: hsl(0, 0%, 96%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(259.1, 89.9%, 69.9%, 0.1) !important;
  --table-selection-border-color: hsl(259.1, 89.9%, 69.9%) !important;
  --tag-background: hsla(259.1, 89.9%, 69.9%, 0.1) !important;
  --tag-background-hover: hsla(259.1, 89.9%, 69.9%, 0.2) !important;
  --tag-border-color: hsla(259.1, 89.9%, 69.9%, 0.15) !important;
  --tag-border-color-hover: hsla(259.1, 89.9%, 69.9%, 0.15) !important;
  --tag-color: hsl(259.1, 89.9%, 69.9%) !important;
  --tag-color-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --tertiary: hsl(254.1, 94.395%, 90.171%) !important;
  --text-accent: hsl(256.1, 91.698%, 80.385%) !important;
  --text-accent-hover: hsl(254.1, 94.395%, 90.171%) !important;
  --text-faint: hsl(0, 0%, 50%) !important;
  --text-muted: hsl(0, 0%, 90%) !important;
  --text-normal: hsl(0, 0%, 96%) !important;
  --text-selection: hsla(259.1, 89.9%, 69.9%, 0.33) !important;
  --textHighlight: transparent !important;
  --titlebar-background: hsl(0, 0%, 14%) !important;
  --titlebar-background-focused: hsl(0, 0%, 14%) !important;
  --titlebar-border-color: hsl(0, 0%, 20%) !important;
  --titlebar-text-color: hsl(0, 0%, 90%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 96%) !important;
  --vault-profile-color: hsl(0, 0%, 96%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 96%) !important;
  --violet-h: 259 !important;
  --violet-l: 70% !important;
  --violet-s: 90% !important;
  --white-h: 0 !important;
  --white-l: 100% !important;
  --white-s: 0% !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --yellow-h: 47 !important;
  --yellow-l: 62% !important;
  --yellow-s: 100% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(43, 43, 43);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(43, 43, 43);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(245, 245, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: line-through rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body p {
  color: rgb(230, 230, 230);
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(184, 159, 251);
  outline: rgb(184, 159, 251) none 0px;
  text-decoration: rgba(153, 109, 247, 0.3);
  text-decoration-color: rgba(153, 109, 247, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(36, 36, 36);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(237, 237, 237);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(43, 43, 43);
  border-left-width: 1px;
  border-right-color: rgb(43, 43, 43);
  border-right-width: 1px;
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(43, 43, 43);
  border-left-width: 1px;
  border-right-color: rgb(43, 43, 43);
  border-right-width: 1px;
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(152, 195, 121);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(152, 195, 121);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(152, 195, 121);
  border-left-color: rgb(152, 195, 121);
  border-right-color: rgb(152, 195, 121);
  border-top-color: rgb(152, 195, 121);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(43, 43, 43);
  border-left-width: 1px;
  border-right-color: rgb(43, 43, 43);
  border-right-width: 1px;
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(43, 43, 43);
  border-left-width: 1px;
  border-right-color: rgb(43, 43, 43);
  border-right-width: 1px;
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(245, 245, 245);
  border-radius: 8px;
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 245, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(245, 245, 245);
  border-radius: 8px;
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(43, 43, 43);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(153, 109, 247);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(153, 109, 247);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
  text-decoration-color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 35%;
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 35%;
  border-top-right-radius: 35%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 245, 245);
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(61, 201, 219, 0.1);
  border-bottom-color: rgba(61, 201, 219, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(61, 201, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(61, 201, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(61, 201, 219, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(173, 181, 189, 0.1);
  border-bottom-color: rgba(173, 181, 189, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(173, 181, 189, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(173, 181, 189, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(173, 181, 189, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(107, 219, 126, 0.1);
  border-bottom-color: rgba(107, 219, 126, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 219, 126, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(107, 219, 126, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(107, 219, 126, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(61, 201, 219, 0.1);
  border-bottom-color: rgba(61, 201, 219, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(61, 201, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(61, 201, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(61, 201, 219, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(153, 109, 247, 0.1);
  border-bottom-color: rgba(153, 109, 247, 0.15);
  border-left-color: rgba(153, 109, 247, 0.15);
  border-right-color: rgba(153, 109, 247, 0.15);
  border-top-color: rgba(153, 109, 247, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body h1 {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body h2 {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body h3 {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body h4 {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body h5 {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body h6 {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 109, 247);
  text-decoration: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 109, 247);
  text-decoration: rgb(153, 109, 247);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-left-width: 0px;
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(230, 230, 230);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(43, 43, 43);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(230, 230, 230);
  stroke: rgb(230, 230, 230);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(128, 128, 128);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(230, 230, 230);
  margin-bottom: 12.8px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 245, 245);
  text-decoration: underline dotted rgb(245, 245, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 245, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 259.1 !important;
  --accent-l: 69.9% !important;
  --accent-s: 89.9% !important;
  --background-modifier-active-hover: transparent !important;
  --background-modifier-border: hsl(0, 0%, 90%) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-form-field: hsl(0, 0%, 90%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 90%) !important;
  --background-primary: hsl(0, 0%, 99%) !important;
  --background-primary-alt: hsl(0, 0%, 93%) !important;
  --background-secondary: hsl(0, 0%, 96%) !important;
  --background-secondary-alt: hsl(0, 0%, 96%) !important;
  --bases-cards-background: hsl(0, 0%, 96%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 93%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 0%, 93%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(259.1, 89.9%, 69.9%) !important;
  --bases-cards-text-size: 0.875em !important;
  --bases-embed-border-color: hsl(0, 0%, 93%) !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: hsl(0, 0%, 20%) !important;
  --bases-table-border-color: hsl(0, 0%, 93%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 96%) !important;
  --bases-table-cell-background-disabled: transparent !important;
  --bases-table-cell-background-selected: hsla(259.1, 89.9%, 69.9%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258.1, 90.799%, 75.1425%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258.1, 90.799%, 75.1425%) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: hsl(0, 0%, 93%) !important;
  --bases-table-header-background: hsl(0, 0%, 99%) !important;
  --bases-table-header-background-hover: none !important;
  --bases-table-header-color: hsl(0, 0%, 20%) !important;
  --bases-table-header-icon-display: none !important;
  --bases-table-row-background-hover: hsl(0, 0%, 96%) !important;
  --bases-table-summary-background: hsl(0, 0%, 99%) !important;
  --bases-table-text-size: 0.875em !important;
  --blockquote-border-color: hsl(259.1, 89.9%, 69.9%) !important;
  --blue-h: 207 !important;
  --blue-l: 57% !important;
  --blue-s: 86% !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 99%) 65%, transparent) linear-gradient(hsl(0, 0%, 99%), color-mix(in srgb, hsl(0, 0%, 99%) 65%, transparent)) !important;
  --bold-color: hsl(259.1, 89.9%, 69.9%) !important;
  --bold-weight: 600 !important;
  --button-radius: 8px !important;
  --callout-background-color-opacity: 0.1;
  --callout-border-width: 1px;
  --callout-padding: 24px;
  --callout-radius: 8px;
  --callout-title-weight: 600;
  --canvas-background: hsl(0, 0%, 99%) !important;
  --canvas-card-label-color: hsl(0, 0%, 60%) !important;
  --canvas-dot-pattern: hsl(0, 0%, 80%) !important;
  --caret-color: hsl(0, 0%, 14%) !important;
  --checkbox-border-color: hsl(0, 0%, 60%) !important;
  --checkbox-border-color-hover: hsl(259.1, 89.9%, 69.9%) !important;
  --checkbox-color: hsl(258.1, 90.799%, 75.1425%) !important;
  --checkbox-color-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --checkbox-marker-color: hsl(0, 0%, 99%) !important;
  --checkbox-radius: 35% !important;
  --checklist-done-color: hsl(0, 0%, 60%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(0, 0%, 96%) !important;
  --code-border-color: hsl(0, 0%, 93%) !important;
  --code-border-width: 1px !important;
  --code-comment: hsl(0, 0%, 60%) !important;
  --code-function: rgb(152, 195, 121) !important;
  --code-important: rgb(198, 120, 221) !important;
  --code-keyword: rgb(86, 182, 194) !important;
  --code-normal: hsl(0, 0%, 17%) !important;
  --code-operator: hsl(0, 0%, 17%) !important;
  --code-property: rgb(86, 182, 194) !important;
  --code-punctuation: hsl(0, 0%, 20%) !important;
  --code-radius: 8px !important;
  --code-string: rgb(229, 192, 123) !important;
  --code-tag: rgb(224, 108, 117) !important;
  --code-value: rgb(198, 120, 221) !important;
  --collapse-icon-color: hsl(0, 0%, 60%) !important;
  --collapse-icon-color-collapsed: hsl(259.1, 89.9%, 69.9%) !important;
  --color-accent: hsl(259.1, 89.9%, 69.9%) !important;
  --color-accent-1: hsl(258.1, 90.799%, 75.1425%) !important;
  --color-accent-2: hsl(256.1, 91.698%, 80.385%) !important;
  --color-accent-hsl: 259.1, 89.9%, 69.9% !important;
  --color-base-00: hsl(0, 0%, 99%) !important;
  --color-base-05: hsl(0, 0%, 96%) !important;
  --color-base-10: hsl(0, 0%, 93%) !important;
  --color-base-100: hsl(0, 0%, 11%) !important;
  --color-base-20: hsl(0, 0%, 90%) !important;
  --color-base-25: hsl(0, 0%, 85%) !important;
  --color-base-30: hsl(0, 0%, 80%) !important;
  --color-base-35: hsl(0, 0%, 75%) !important;
  --color-base-40: hsl(0, 0%, 70%) !important;
  --color-base-50: hsl(0, 0%, 60%) !important;
  --color-base-60: hsl(0, 0%, 50%) !important;
  --color-base-70: hsl(0, 0%, 20%) !important;
  --color-base-80: hsl(0, 0%, 17%) !important;
  --color-base-90: hsl(0, 0%, 14%) !important;
  --components-background: hsl(0, 0%, 90%) !important;
  --components-background-hover: hsl(0, 0%, 85%) !important;
  --custom-icon-size: 1.2em !important;
  --cyan-h: 187 !important;
  --cyan-l: 55% !important;
  --cyan-s: 69% !important;
  --dark: hsl(0, 0%, 14%) !important;
  --darkgray: hsl(0, 0%, 14%) !important;
  --divider-color: hsl(0, 0%, 93%) !important;
  --divider-color-hover: hsl(258.1, 90.799%, 75.1425%) !important;
  --divider-vertical-height: calc(100% - 40px) !important;
  --dropdown-background: hsl(0, 0%, 90%) !important;
  --dropdown-background-hover: hsl(0, 0%, 85%) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsl(258.1, 90.799%, 75.1425%) !important;
  --file-header-background: hsl(0, 0%, 99%) !important;
  --file-header-background-focused: hsl(0, 0%, 99%) !important;
  --filename-margin-bottom: 0.8rem !important;
  --flair-background: hsl(0, 0%, 90%) !important;
  --flair-color: hsl(0, 0%, 14%) !important;
  --font-weight-table-titles: 700 !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: hsl(0, 0%, 20%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 60%) !important;
  --footnote-input-background-active: transparent !important;
  --graph-line: hsl(0, 0%, 80%) !important;
  --graph-node: hsl(0, 0%, 20%) !important;
  --graph-node-attachment: hsl(47, 100%, 62%) !important;
  --graph-node-focused: transparent !important;
  --graph-node-tag: hsl(259.1, 89.9%, 69.9%) !important;
  --graph-node-unresolved: hsl(0, 0%, 60%) !important;
  --graph-text: hsl(0, 0%, 14%) !important;
  --gray: hsl(0, 0%, 20%) !important;
  --gray-h: 210 !important;
  --gray-l: 71% !important;
  --gray-s: 11% !important;
  --green-h: 130 !important;
  --green-l: 64% !important;
  --green-s: 61% !important;
  --h1-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h1-size: 1.5em !important;
  --h2-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h2-size: 1.4em !important;
  --h3-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h3-size: 1.3em !important;
  --h4-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h4-size: 1.2em !important;
  --h5-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h5-size: 1.1em !important;
  --h6-color: hsl(259.1, 89.9%, 69.9%) !important;
  --h6-size: 1.0em !important;
  --header-padding-top: 0.3em !important;
  --heading-formatting: hsl(0, 0%, 60%) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: transparent !important;
  --hr-color: hsl(0, 0%, 93%) !important;
  --icon-color: hsl(0, 0%, 20%) !important;
  --icon-color-active: hsl(0, 0%, 17%) !important;
  --icon-color-focused: hsl(0, 0%, 14%) !important;
  --icon-color-hover: hsl(0, 0%, 20%) !important;
  --indigo-h: 228 !important;
  --indigo-l: 72% !important;
  --indigo-s: 96% !important;
  --inline-title-color: hsl(0, 0%, 14%) !important;
  --inline-title-size: 1.5em !important;
  --input-date-separator: hsl(0, 0%, 60%) !important;
  --input-placeholder-color: hsl(0, 0%, 60%) !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(258.1, 90.799%, 75.1425%) !important;
  --interactive-accent-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --interactive-accent-hsl: 259.1, 89.9%, 69.9% !important;
  --interactive-hover: hsl(0, 0%, 85%) !important;
  --interactive-normal: hsl(0, 0%, 90%) !important;
  --italic-color: hsl(259.1, 89.9%, 69.9%) !important;
  --light: hsl(0, 0%, 99%) !important;
  --lightgray: hsl(0, 0%, 96%) !important;
  --lime-h: 82 !important;
  --lime-l: 69% !important;
  --lime-s: 75% !important;
  --link-color: hsl(259.1, 89.9%, 69.9%) !important;
  --link-color-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(259.1, 89.9%, 69.9%) !important;
  --link-external-color-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsl(259.1, 89.9%, 69.9%) !important;
  --link-unresolved-decoration-color: hsla(259.1, 89.9%, 69.9%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(0, 0%, 60%) !important;
  --list-marker-color-collapsed: hsl(259.1, 89.9%, 69.9%) !important;
  --list-marker-color-hover: hsl(0, 0%, 20%) !important;
  --menu-background: hsl(0, 0%, 96%) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: hsl(0, 0%, 14%) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-text-color: hsl(0, 0%, 20%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 20%) !important;
  --metadata-margin-bottom: 0.8rem !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-property-radius: 8px !important;
  --metadata-property-radius-focus: 8px !important;
  --metadata-property-radius-hover: 8px !important;
  --modal-background: hsl(0, 0%, 99%) !important;
  --modal-border-color: hsl(0, 0%, 93%) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: hsl(0, 0%, 60%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 60%) !important;
  --nav-heading-color: hsl(0, 0%, 14%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 60%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 20%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 14%) !important;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.07) !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-background-selected: hsla(259.1, 89.9%, 69.9%, 0.15) !important;
  --nav-item-color: hsl(0, 0%, 20%) !important;
  --nav-item-color-active: hsl(0, 0%, 20%) !important;
  --nav-item-color-highlighted: hsl(259.1, 89.9%, 69.9%) !important;
  --nav-item-color-hover: hsl(0, 0%, 20%) !important;
  --nav-item-color-selected: hsl(0, 0%, 14%) !important;
  --nav-tag-color: hsl(0, 0%, 60%) !important;
  --nav-tag-color-active: hsl(0, 0%, 20%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 20%) !important;
  --orange-h: 31 !important;
  --orange-l: 65% !important;
  --orange-s: 100% !important;
  --pdf-background: hsl(0, 0%, 99%) !important;
  --pdf-page-background: hsl(0, 0%, 99%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 99%) !important;
  --pill-border-color: hsl(0, 0%, 90%) !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: hsl(0, 0%, 20%) !important;
  --pill-color-hover: hsl(0, 0%, 14%) !important;
  --pill-color-remove: hsl(0, 0%, 60%) !important;
  --pill-color-remove-hover: hsl(259.1, 89.9%, 69.9%) !important;
  --pink-h: 339 !important;
  --pink-l: 74% !important;
  --pink-s: 88% !important;
  --popover-height: 300px !important;
  --popover-width: 500px !important;
  --primary-blue: 207, 86%, 57% !important;
  --primary-cyan: 187, 69%, 55% !important;
  --primary-gray: 210, 11%, 71% !important;
  --primary-green: 130, 61%, 64% !important;
  --primary-indigo: 228, 96%, 72% !important;
  --primary-lime: 82, 75%, 69% !important;
  --primary-orange: 31, 100%, 65% !important;
  --primary-pink: 339, 88%, 74% !important;
  --primary-red: 0, 94%, 65% !important;
  --primary-sky: 206, 96%, 72% !important;
  --primary-violet: 259, 90%, 70% !important;
  --primary-white: 0, 0%, 100% !important;
  --primary-yellow: 47, 100%, 62% !important;
  --prompt-background: hsl(0, 0%, 99%) !important;
  --prompt-border-color: hsl(0, 0%, 93%) !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 99%) 65%, transparent) linear-gradient(hsl(0, 0%, 99%), color-mix(in srgb, hsl(0, 0%, 99%) 65%, transparent)) !important;
  --red-h: 0 !important;
  --red-l: 65% !important;
  --red-s: 94% !important;
  --ribbon-background: hsl(0, 0%, 99%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 99%) !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.05) !important;
  --search-clear-button-color: hsl(0, 0%, 20%) !important;
  --search-icon-color: hsl(0, 0%, 20%) !important;
  --search-result-background: hsl(0, 0%, 96%) !important;
  --secondary: hsl(259.1, 89.9%, 69.9%) !important;
  --setting-group-heading-color: hsl(0, 0%, 14%) !important;
  --setting-items-background: hsl(0, 0%, 96%) !important;
  --setting-items-border-color: hsl(0, 0%, 90%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --sky-h: 206 !important;
  --sky-l: 72% !important;
  --sky-s: 96% !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: hsl(0, 0%, 90%) !important;
  --status-bar-background: hsl(0, 0%, 96%) !important;
  --status-bar-border-color: hsl(0, 0%, 93%) !important;
  --status-bar-border-width: 0 !important;
  --status-bar-position: related !important;
  --status-bar-radius: 0 !important;
  --status-bar-text-color: hsl(0, 0%, 20%) !important;
  --suggestion-background: hsl(0, 0%, 99%) !important;
  --tab-background-active: hsl(0, 0%, 99%) !important;
  --tab-container-background: hsl(0, 0%, 99%) !important;
  --tab-curve: 8px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: hsl(0, 0%, 93%) !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-switcher-background: hsl(0, 0%, 96%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 96%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(259.1, 89.9%, 69.9%) !important;
  --tab-text-color: hsl(0, 0%, 60%) !important;
  --tab-text-color-active: hsl(0, 0%, 20%) !important;
  --tab-text-color-focused: hsl(0, 0%, 60%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 60%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 14%) !important;
  --tab-text-color-focused-highlighted: hsl(259.1, 89.9%, 69.9%) !important;
  --table-add-button-border-color: hsl(0, 0%, 90%) !important;
  --table-border-color: hsl(0, 0%, 90%) !important;
  --table-drag-handle-background-active: hsl(258.1, 90.799%, 75.1425%) !important;
  --table-drag-handle-color: hsl(0, 0%, 60%) !important;
  --table-header-background: hsl(0, 0%, 96%) !important;
  --table-header-border-color: hsl(0, 0%, 90%) !important;
  --table-header-color: hsl(0, 0%, 14%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(259.1, 89.9%, 69.9%, 0.1) !important;
  --table-selection-border-color: hsl(258.1, 90.799%, 75.1425%) !important;
  --tag-background: hsla(259.1, 89.9%, 69.9%, 0.1) !important;
  --tag-background-hover: hsla(259.1, 89.9%, 69.9%, 0.2) !important;
  --tag-border-color: hsla(259.1, 89.9%, 69.9%, 0.15) !important;
  --tag-border-color-hover: hsla(259.1, 89.9%, 69.9%, 0.15) !important;
  --tag-color: hsl(259.1, 89.9%, 69.9%) !important;
  --tag-color-hover: hsl(259.1, 89.9%, 69.9%) !important;
  --tertiary: hsl(256.1, 91.698%, 80.385%) !important;
  --text-accent: hsl(259.1, 89.9%, 69.9%) !important;
  --text-accent-hover: hsl(256.1, 91.698%, 80.385%) !important;
  --text-faint: hsl(0, 0%, 60%) !important;
  --text-muted: hsl(0, 0%, 20%) !important;
  --text-normal: hsl(0, 0%, 14%) !important;
  --text-selection: hsla(259.1, 89.9%, 69.9%, 0.2) !important;
  --textHighlight: transparent !important;
  --titlebar-background: hsl(0, 0%, 96%) !important;
  --titlebar-background-focused: hsl(0, 0%, 96%) !important;
  --titlebar-border-color: hsl(0, 0%, 90%) !important;
  --titlebar-text-color: hsl(0, 0%, 20%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 14%) !important;
  --vault-profile-color: hsl(0, 0%, 14%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 14%) !important;
  --violet-h: 259 !important;
  --violet-l: 70% !important;
  --violet-s: 90% !important;
  --white-h: 0 !important;
  --white-l: 100% !important;
  --white-s: 0% !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --yellow-h: 47 !important;
  --yellow-l: 62% !important;
  --yellow-s: 100% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(237, 237, 237);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(36, 36, 36);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body del {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration: line-through rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body p {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgb(153, 109, 247);
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration: rgba(153, 109, 247, 0.3);
  text-decoration-color: rgba(153, 109, 247, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body dt {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ol > li {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ul > li {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body table {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body tr {
  background-color: rgb(245, 245, 245);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(43, 43, 43);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(43, 43, 43);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(237, 237, 237);
  border-left-width: 1px;
  border-right-color: rgb(237, 237, 237);
  border-right-width: 1px;
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(237, 237, 237);
  border-left-width: 1px;
  border-right-color: rgb(237, 237, 237);
  border-right-width: 1px;
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(152, 195, 121);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(152, 195, 121);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(152, 195, 121);
  border-left-color: rgb(152, 195, 121);
  border-right-color: rgb(152, 195, 121);
  border-top-color: rgb(152, 195, 121);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(237, 237, 237);
  border-left-width: 1px;
  border-right-color: rgb(237, 237, 237);
  border-right-width: 1px;
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(237, 237, 237);
  border-left-width: 1px;
  border-right-color: rgb(237, 237, 237);
  border-right-width: 1px;
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body figcaption {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(36, 36, 36);
  border-radius: 8px;
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(36, 36, 36);
  border-radius: 8px;
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(169, 134, 249);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(169, 134, 249);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 35%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 35%;
  border-top-right-radius: 35%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(36, 36, 36);
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(61, 201, 219, 0.1);
  border-bottom-color: rgba(61, 201, 219, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(61, 201, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(61, 201, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(61, 201, 219, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 82, 82, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(250, 82, 82, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(250, 82, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(173, 181, 189, 0.1);
  border-bottom-color: rgba(173, 181, 189, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(173, 181, 189, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(173, 181, 189, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(173, 181, 189, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(107, 219, 126, 0.1);
  border-bottom-color: rgba(107, 219, 126, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 219, 126, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(107, 219, 126, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(107, 219, 126, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(61, 201, 219, 0.1);
  border-bottom-color: rgba(61, 201, 219, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(61, 201, 219, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(61, 201, 219, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(61, 201, 219, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(153, 109, 247, 0.1);
  border-bottom-color: rgba(153, 109, 247, 0.15);
  border-left-color: rgba(153, 109, 247, 0.15);
  border-right-color: rgba(153, 109, 247, 0.15);
  border-top-color: rgba(153, 109, 247, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body h1 {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body h2 {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body h3 {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body h4 {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body h5 {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body h6 {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 109, 247);
  text-decoration: rgb(153, 109, 247);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 109, 247);
  text-decoration: rgb(153, 109, 247);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-left-width: 0px;
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 51, 51);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(237, 237, 237);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(51, 51, 51);
  stroke: rgb(51, 51, 51);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  margin-bottom: 12.8px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body abbr {
  color: rgb(36, 36, 36);
  text-decoration: underline dotted rgb(36, 36, 36);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(43, 43, 43);
  border-left-color: rgb(43, 43, 43);
  border-right-color: rgb(43, 43, 43);
  border-top-color: rgb(43, 43, 43);
  color: rgb(43, 43, 43);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body sub {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body summary {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body sup {
  color: rgb(36, 36, 36);
}`,
  },
  extras: `@keyframes cosmic-pulse {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}
`,
};
