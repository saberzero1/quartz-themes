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
  --button-radius: 8px !important;
  --callout-background-color-opacity: 0.1;
  --callout-border-width: 1px;
  --callout-padding: 24px;
  --callout-radius: 8px;
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
  --list-marker-color: hsl(0, 0%, 50%) !important;
  --list-marker-color-collapsed: hsl(256.1, 91.698%, 80.385%) !important;
  --list-marker-color-hover: hsl(0, 0%, 90%) !important;
  --menu-background: hsl(0, 0%, 14%) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-background-active: transparent !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(51, 51, 51);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(36, 36, 36);
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(153, 109, 247, 0.1);
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(230, 230, 230);
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
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 245, 245);
  outline: rgb(245, 245, 245) none 0px;
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(128, 128, 128);
  border-radius: 35%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(230, 230, 230);
  outline: rgb(230, 230, 230) none 0px;
  text-decoration-color: rgb(230, 230, 230);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
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
  border-bottom-color: rgb(153, 109, 247);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(153, 109, 247);
  border-radius: 8px;
  border-right-color: rgb(153, 109, 247);
  border-top-color: rgb(153, 109, 247);
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
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk0xMC40IDcuMkg1LjZMNS41MDY0IDcuMjA1NkM1LjMwMzkyIDcuMjI5NjggNS4xMTgyOCA3LjMzMDE3IDQuOTg3NDEgNy40ODY1M0M0Ljg1NjU0IDcuNjQyOSA0Ljc5MDMxIDcuODQzMzMgNC44MDIyNiA4LjA0Njg4QzQuODE0MjEgOC4yNTA0NCA0LjkwMzQ0IDguNDQxNzUgNS4wNTE3MSA4LjU4MTcyQzUuMTk5OTcgOC43MjE3IDUuMzk2MSA4Ljc5OTc3IDUuNiA4LjhIMTAuNEwxMC40OTM2IDguNzk0NEMxMC42OTYxIDguNzcwMzIgMTAuODgxNyA4LjY2OTgzIDExLjAxMjYgOC41MTM0N0MxMS4xNDM1IDguMzU3MSAxMS4yMDk3IDguMTU2NjcgMTEuMTk3NyA3Ljk1MzEyQzExLjE4NTggNy43NDk1NiAxMS4wOTY2IDcuNTU4MjUgMTAuOTQ4MyA3LjQxODI4QzEwLjggNy4yNzgzIDEwLjYwMzkgNy4yMDAyMyAxMC40IDcuMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk0xMC40IDcuMkg1LjZMNS41MDY0IDcuMjA1NkM1LjMwMzkyIDcuMjI5NjggNS4xMTgyOCA3LjMzMDE3IDQuOTg3NDEgNy40ODY1M0M0Ljg1NjU0IDcuNjQyOSA0Ljc5MDMxIDcuODQzMzMgNC44MDIyNiA4LjA0Njg4QzQuODE0MjEgOC4yNTA0NCA0LjkwMzQ0IDguNDQxNzUgNS4wNTE3MSA4LjU4MTcyQzUuMTk5OTcgOC43MjE3IDUuMzk2MSA4Ljc5OTc3IDUuNiA4LjhIMTAuNEwxMC40OTM2IDguNzk0NEMxMC42OTYxIDguNzcwMzIgMTAuODgxNyA4LjY2OTgzIDExLjAxMjYgOC41MTM0N0MxMS4xNDM1IDguMzU3MSAxMS4yMDk3IDguMTU2NjcgMTEuMTk3NyA3Ljk1MzEyQzExLjE4NTggNy43NDk1NiAxMS4wOTY2IDcuNTU4MjUgMTAuOTQ4MyA3LjQxODI4QzEwLjggNy4yNzgzIDEwLjYwMzkgNy4yMDAyMyAxMC40IDcuMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04LjAwNzYgMTAuNEw3LjkwNiAxMC40MDU2QzcuNzExNTUgMTAuNDI4NyA3LjUzMjMzIDEwLjUyMjQgNy40MDIzIDEwLjY2ODhDNy4yNzIyNyAxMC44MTUyIDcuMjAwNDUgMTEuMDA0MiA3LjIwMDQ1IDExLjJDNy4yMDA0NSAxMS4zOTU4IDcuMjcyMjcgMTEuNTg0OCA3LjQwMjMgMTEuNzMxMkM3LjUzMjMzIDExLjg3NzYgNy43MTE1NSAxMS45NzEzIDcuOTA2IDExLjk5NDRMNy45OTk2IDEyTDguMTAxMiAxMS45OTQ0QzguMjk1NjUgMTEuOTcxMyA4LjQ3NDg3IDExLjg3NzYgOC42MDQ5IDExLjczMTJDOC43MzQ5MyAxMS41ODQ4IDguODA2NzUgMTEuMzk1OCA4LjgwNjc1IDExLjJDOC44MDY3NSAxMS4wMDQyIDguNzM0OTMgMTAuODE1MiA4LjYwNDkgMTAuNjY4OEM4LjQ3NDg3IDEwLjUyMjQgOC4yOTU2NSAxMC40Mjg3IDguMTAxMiAxMC40MDU2TDguMDA3NiAxMC40Wk03Ljk5OTYgNEM3LjgwMzY0IDQuMDAwMDMgNy42MTQ1MSA0LjA3MTk2IDcuNDY4MDggNC4yMDIxN0M3LjMyMTY0IDQuMzMyMzggNy4yMjgwOSA0LjUxMTggNy4yMDUxNiA0LjcwNjRMNy4xOTk1NiA0LjhWOEw3LjIwNTE2IDguMDkzNkM3LjIyODI5IDguMjg4MDQgNy4zMjE5MyA4LjQ2NzI0IDcuNDY4MzUgOC41OTcyN0M3LjYxNDc2IDguNzI3MjkgNy44MDM3OCA4Ljc5OTExIDcuOTk5NiA4Ljc5OTExQzguMTk1NDIgOC43OTkxMSA4LjM4NDQ0IDguNzI3MjkgOC41MzA4NSA4LjU5NzI3QzguNjc3MjcgOC40NjcyNCA4Ljc3MDkxIDguMjg4MDQgOC43OTQwNCA4LjA5MzZMOC43OTk2NCA4VjQuOEw4Ljc5NDA0IDQuNzA2NEM4Ljc3MTExIDQuNTExOCA4LjY3NzU2IDQuMzMyMzggOC41MzExMiA0LjIwMjE3QzguMzg0NjkgNC4wNzE5NiA4LjE5NTU2IDQuMDAwMDMgNy45OTk2IDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04LjAwNzYgMTAuNEw3LjkwNiAxMC40MDU2QzcuNzExNTUgMTAuNDI4NyA3LjUzMjMzIDEwLjUyMjQgNy40MDIzIDEwLjY2ODhDNy4yNzIyNyAxMC44MTUyIDcuMjAwNDUgMTEuMDA0MiA3LjIwMDQ1IDExLjJDNy4yMDA0NSAxMS4zOTU4IDcuMjcyMjcgMTEuNTg0OCA3LjQwMjMgMTEuNzMxMkM3LjUzMjMzIDExLjg3NzYgNy43MTE1NSAxMS45NzEzIDcuOTA2IDExLjk5NDRMNy45OTk2IDEyTDguMTAxMiAxMS45OTQ0QzguMjk1NjUgMTEuOTcxMyA4LjQ3NDg3IDExLjg3NzYgOC42MDQ5IDExLjczMTJDOC43MzQ5MyAxMS41ODQ4IDguODA2NzUgMTEuMzk1OCA4LjgwNjc1IDExLjJDOC44MDY3NSAxMS4wMDQyIDguNzM0OTMgMTAuODE1MiA4LjYwNDkgMTAuNjY4OEM4LjQ3NDg3IDEwLjUyMjQgOC4yOTU2NSAxMC40Mjg3IDguMTAxMiAxMC40MDU2TDguMDA3NiAxMC40Wk03Ljk5OTYgNEM3LjgwMzY0IDQuMDAwMDMgNy42MTQ1MSA0LjA3MTk2IDcuNDY4MDggNC4yMDIxN0M3LjMyMTY0IDQuMzMyMzggNy4yMjgwOSA0LjUxMTggNy4yMDUxNiA0LjcwNjRMNy4xOTk1NiA0LjhWOEw3LjIwNTE2IDguMDkzNkM3LjIyODI5IDguMjg4MDQgNy4zMjE5MyA4LjQ2NzI0IDcuNDY4MzUgOC41OTcyN0M3LjYxNDc2IDguNzI3MjkgNy44MDM3OCA4Ljc5OTExIDcuOTk5NiA4Ljc5OTExQzguMTk1NDIgOC43OTkxMSA4LjM4NDQ0IDguNzI3MjkgOC41MzA4NSA4LjU5NzI3QzguNjc3MjcgOC40NjcyNCA4Ljc3MDkxIDguMjg4MDQgOC43OTQwNCA4LjA5MzZMOC43OTk2NCA4VjQuOEw4Ljc5NDA0IDQuNzA2NEM4Ljc3MTExIDQuNTExOCA4LjY3NzU2IDQuMzMyMzggOC41MzExMiA0LjIwMjE3QzguMzg0NjkgNC4wNzE5NiA4LjE5NTU2IDQuMDAwMDMgNy45OTk2IDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgMTAuNEM3LjgwMzY0IDEwLjQgNy42MTQ1MSAxMC40NzIgNy40NjgwOCAxMC42MDIyQzcuMzIxNjQgMTAuNzMyNCA3LjIyODA5IDEwLjkxMTggNy4yMDUxNiAxMS4xMDY0TDcuMTk5NTYgMTEuMkw3LjIwNTE2IDExLjMwMTZDNy4yMjgyOSAxMS40OTYgNy4zMjE5MyAxMS42NzUyIDcuNDY4MzUgMTEuODA1M0M3LjYxNDc2IDExLjkzNTMgNy44MDM3OCAxMi4wMDcxIDcuOTk5NiAxMi4wMDcxQzguMTk1NDIgMTIuMDA3MSA4LjM4NDQ0IDExLjkzNTMgOC41MzA4NSAxMS44MDUzQzguNjc3MjcgMTEuNjc1MiA4Ljc3MDkxIDExLjQ5NiA4Ljc5NDA0IDExLjMwMTZMOC43OTk2NCAxMS4yMDhMOC43OTQwNCAxMS4xMDY0QzguNzcxMTEgMTAuOTExOCA4LjY3NzU2IDEwLjczMjQgOC41MzExMiAxMC42MDIyQzguMzg0NjkgMTAuNDcyIDguMTk1NTYgMTAuNCA3Ljk5OTYgMTAuNFpNOS4wOTQwNiA1LjA2MTZDOC42MTUxNCA0LjgxNjc3IDguMDY3NSA0Ljc0MTA4IDcuNTQwMTMgNC44NDY4MUM3LjAxMjc1IDQuOTUyNTQgNi41MzY2MyA1LjIzMzQ5IDYuMTg5MTEgNS42NDRDNi4wNTY2MSA1Ljc5OTIgNS45ODg0MyA1Ljk5OTE3IDUuOTk4NTIgNi4yMDI5OUM2LjAwODYyIDYuNDA2OCA2LjA5NjIyIDYuNTk5MDYgNi4yNDM0MSA2Ljc0MDQxQzYuMzkwNTkgNi44ODE3NiA2LjU4NjI0IDYuOTYxNTMgNi43OTAzIDYuOTYzMzlDNi45OTQzNyA2Ljk2NTI0IDcuMTkxNDMgNi44ODkwNSA3LjM0MTE3IDYuNzUwNEw3LjQ3Nzk3IDYuNjA2NEM3LjU5NiA2LjQ5ODA3IDcuNzQ0MzkgNi40Mjg0OSA3LjkwMzE2IDYuNDA3MDNDOC4wNjE5MyA2LjM4NTU4IDguMjIzNDcgNi40MTMyOCA4LjM2NjAyIDYuNDg2NEM4LjUxOTY5IDYuNTY0MTcgOC42NDQxNyA2LjY4OTQ2IDguNzIwOTMgNi44NDM2M0M4Ljc5NzcgNi45OTc4IDguODIyNjYgNy4xNzI2MyA4Ljc5MjEgNy4zNDIxM0M4Ljc2MTU1IDcuNTExNjIgOC42NzcxIDcuNjY2NzMgOC41NTEzMyA3Ljc4NDM5QzguNDI1NTUgNy45MDIwNSA4LjI2NTE3IDcuOTc1OTkgOC4wOTQwMSA3Ljk5NTJMNy45MDg0IDguMDA0OEM3LjcwNDkxIDguMDI3MTkgNy41MTc3NSA4LjEyNjcyIDcuMzg1NDQgOC4yODI5MkM3LjI1MzEyIDguNDM5MTEgNy4xODU3MSA4LjY0MDA4IDcuMTk3MDkgOC44NDQ0N0M3LjIwODQ3IDkuMDQ4ODUgNy4yOTc3NyA5LjI0MTEgNy40NDY2IDkuMzgxNjRDNy41OTU0NCA5LjUyMjE5IDcuNzkyNDkgOS42MDAzMyA3Ljk5NzIgOS42QzguNTM2OTMgOS42MDE2MiA5LjA2MTQ1IDkuNDIxMjkgOS40ODYwNiA5LjA4ODEyQzkuOTEwNjcgOC43NTQ5NSAxMC4yMTA2IDguMjg4MzkgMTAuMzM3NCA3Ljc2Mzc5QzEwLjQ2NDIgNy4yMzkxOSAxMC40MTA0IDYuNjg3MTcgMTAuMTg0OCA2LjE5Njg3QzkuOTU5MjMgNS43MDY1OCA5LjU3NDk2IDUuMzA2NjIgOS4wOTQwNiA1LjA2MTZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgMTAuNEM3LjgwMzY0IDEwLjQgNy42MTQ1MSAxMC40NzIgNy40NjgwOCAxMC42MDIyQzcuMzIxNjQgMTAuNzMyNCA3LjIyODA5IDEwLjkxMTggNy4yMDUxNiAxMS4xMDY0TDcuMTk5NTYgMTEuMkw3LjIwNTE2IDExLjMwMTZDNy4yMjgyOSAxMS40OTYgNy4zMjE5MyAxMS42NzUyIDcuNDY4MzUgMTEuODA1M0M3LjYxNDc2IDExLjkzNTMgNy44MDM3OCAxMi4wMDcxIDcuOTk5NiAxMi4wMDcxQzguMTk1NDIgMTIuMDA3MSA4LjM4NDQ0IDExLjkzNTMgOC41MzA4NSAxMS44MDUzQzguNjc3MjcgMTEuNjc1MiA4Ljc3MDkxIDExLjQ5NiA4Ljc5NDA0IDExLjMwMTZMOC43OTk2NCAxMS4yMDhMOC43OTQwNCAxMS4xMDY0QzguNzcxMTEgMTAuOTExOCA4LjY3NzU2IDEwLjczMjQgOC41MzExMiAxMC42MDIyQzguMzg0NjkgMTAuNDcyIDguMTk1NTYgMTAuNCA3Ljk5OTYgMTAuNFpNOS4wOTQwNiA1LjA2MTZDOC42MTUxNCA0LjgxNjc3IDguMDY3NSA0Ljc0MTA4IDcuNTQwMTMgNC44NDY4MUM3LjAxMjc1IDQuOTUyNTQgNi41MzY2MyA1LjIzMzQ5IDYuMTg5MTEgNS42NDRDNi4wNTY2MSA1Ljc5OTIgNS45ODg0MyA1Ljk5OTE3IDUuOTk4NTIgNi4yMDI5OUM2LjAwODYyIDYuNDA2OCA2LjA5NjIyIDYuNTk5MDYgNi4yNDM0MSA2Ljc0MDQxQzYuMzkwNTkgNi44ODE3NiA2LjU4NjI0IDYuOTYxNTMgNi43OTAzIDYuOTYzMzlDNi45OTQzNyA2Ljk2NTI0IDcuMTkxNDMgNi44ODkwNSA3LjM0MTE3IDYuNzUwNEw3LjQ3Nzk3IDYuNjA2NEM3LjU5NiA2LjQ5ODA3IDcuNzQ0MzkgNi40Mjg0OSA3LjkwMzE2IDYuNDA3MDNDOC4wNjE5MyA2LjM4NTU4IDguMjIzNDcgNi40MTMyOCA4LjM2NjAyIDYuNDg2NEM4LjUxOTY5IDYuNTY0MTcgOC42NDQxNyA2LjY4OTQ2IDguNzIwOTMgNi44NDM2M0M4Ljc5NzcgNi45OTc4IDguODIyNjYgNy4xNzI2MyA4Ljc5MjEgNy4zNDIxM0M4Ljc2MTU1IDcuNTExNjIgOC42NzcxIDcuNjY2NzMgOC41NTEzMyA3Ljc4NDM5QzguNDI1NTUgNy45MDIwNSA4LjI2NTE3IDcuOTc1OTkgOC4wOTQwMSA3Ljk5NTJMNy45MDg0IDguMDA0OEM3LjcwNDkxIDguMDI3MTkgNy41MTc3NSA4LjEyNjcyIDcuMzg1NDQgOC4yODI5MkM3LjI1MzEyIDguNDM5MTEgNy4xODU3MSA4LjY0MDA4IDcuMTk3MDkgOC44NDQ0N0M3LjIwODQ3IDkuMDQ4ODUgNy4yOTc3NyA5LjI0MTEgNy40NDY2IDkuMzgxNjRDNy41OTU0NCA5LjUyMjE5IDcuNzkyNDkgOS42MDAzMyA3Ljk5NzIgOS42QzguNTM2OTMgOS42MDE2MiA5LjA2MTQ1IDkuNDIxMjkgOS40ODYwNiA5LjA4ODEyQzkuOTEwNjcgOC43NTQ5NSAxMC4yMTA2IDguMjg4MzkgMTAuMzM3NCA3Ljc2Mzc5QzEwLjQ2NDIgNy4yMzkxOSAxMC40MTA0IDYuNjg3MTcgMTAuMTg0OCA2LjE5Njg3QzkuOTU5MjMgNS43MDY1OCA5LjU3NDk2IDUuMzA2NjIgOS4wOTQwNiA1LjA2MTZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk04IDQuOEM3Ljc4NzgzIDQuOCA3LjU4NDM0IDQuODg0MjkgNy40MzQzMSA1LjAzNDMxQzcuMjg0MjkgNS4xODQzNCA3LjIgNS4zODc4MyA3LjIgNS42VjcuMkg1LjZMNS41MDY0IDcuMjA1NkM1LjMwMzkyIDcuMjI5NjggNS4xMTgyOCA3LjMzMDE3IDQuOTg3NDEgNy40ODY1M0M0Ljg1NjU0IDcuNjQyOSA0Ljc5MDMxIDcuODQzMzMgNC44MDIyNiA4LjA0Njg4QzQuODE0MjEgOC4yNTA0NCA0LjkwMzQ0IDguNDQxNzUgNS4wNTE3MSA4LjU4MTcyQzUuMTk5OTcgOC43MjE3IDUuMzk2MSA4Ljc5OTc3IDUuNiA4LjhINy4yVjEwLjRMNy4yMDU2IDEwLjQ5MzZDNy4yMjk2OCAxMC42OTYxIDcuMzMwMTcgMTAuODgxNyA3LjQ4NjUzIDExLjAxMjZDNy42NDI5IDExLjE0MzUgNy44NDMzMyAxMS4yMDk3IDguMDQ2ODggMTEuMTk3N0M4LjI1MDQ0IDExLjE4NTggOC40NDE3NSAxMS4wOTY2IDguNTgxNzIgMTAuOTQ4M0M4LjcyMTcgMTAuOCA4Ljc5OTc3IDEwLjYwMzkgOC44IDEwLjRWOC44SDEwLjRMMTAuNDkzNiA4Ljc5NDRDMTAuNjk2MSA4Ljc3MDMyIDEwLjg4MTcgOC42Njk4MyAxMS4wMTI2IDguNTEzNDdDMTEuMTQzNSA4LjM1NzEgMTEuMjA5NyA4LjE1NjY3IDExLjE5NzcgNy45NTMxMkMxMS4xODU4IDcuNzQ5NTYgMTEuMDk2NiA3LjU1ODI1IDEwLjk0ODMgNy40MTgyOEMxMC44IDcuMjc4MyAxMC42MDM5IDcuMjAwMjMgMTAuNCA3LjJIOC44VjUuNkw4Ljc5NDQgNS41MDY0QzguNzcxNDcgNS4zMTE4IDguNjc3OTMgNS4xMzIzOCA4LjUzMTUgNS4wMDIxN0M4LjM4NTA3IDQuODcxOTYgOC4xOTU5NSA0LjgwMDAzIDggNC44WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk04IDQuOEM3Ljc4NzgzIDQuOCA3LjU4NDM0IDQuODg0MjkgNy40MzQzMSA1LjAzNDMxQzcuMjg0MjkgNS4xODQzNCA3LjIgNS4zODc4MyA3LjIgNS42VjcuMkg1LjZMNS41MDY0IDcuMjA1NkM1LjMwMzkyIDcuMjI5NjggNS4xMTgyOCA3LjMzMDE3IDQuOTg3NDEgNy40ODY1M0M0Ljg1NjU0IDcuNjQyOSA0Ljc5MDMxIDcuODQzMzMgNC44MDIyNiA4LjA0Njg4QzQuODE0MjEgOC4yNTA0NCA0LjkwMzQ0IDguNDQxNzUgNS4wNTE3MSA4LjU4MTcyQzUuMTk5OTcgOC43MjE3IDUuMzk2MSA4Ljc5OTc3IDUuNiA4LjhINy4yVjEwLjRMNy4yMDU2IDEwLjQ5MzZDNy4yMjk2OCAxMC42OTYxIDcuMzMwMTcgMTAuODgxNyA3LjQ4NjUzIDExLjAxMjZDNy42NDI5IDExLjE0MzUgNy44NDMzMyAxMS4yMDk3IDguMDQ2ODggMTEuMTk3N0M4LjI1MDQ0IDExLjE4NTggOC40NDE3NSAxMS4wOTY2IDguNTgxNzIgMTAuOTQ4M0M4LjcyMTcgMTAuOCA4Ljc5OTc3IDEwLjYwMzkgOC44IDEwLjRWOC44SDEwLjRMMTAuNDkzNiA4Ljc5NDRDMTAuNjk2MSA4Ljc3MDMyIDEwLjg4MTcgOC42Njk4MyAxMS4wMTI2IDguNTEzNDdDMTEuMTQzNSA4LjM1NzEgMTEuMjA5NyA4LjE1NjY3IDExLjE5NzcgNy45NTMxMkMxMS4xODU4IDcuNzQ5NTYgMTEuMDk2NiA3LjU1ODI1IDEwLjk0ODMgNy40MTgyOEMxMC44IDcuMjc4MyAxMC42MDM5IDcuMjAwMjMgMTAuNCA3LjJIOC44VjUuNkw4Ljc5NDQgNS41MDY0QzguNzcxNDcgNS4zMTE4IDguNjc3OTMgNS4xMzIzOCA4LjUzMTUgNS4wMDIxN0M4LjM4NTA3IDQuODcxOTYgOC4xOTU5NSA0LjgwMDAzIDggNC44WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(107, 219, 126);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgNEM3LjM2MzA1IDQgNi43NTI1NyA0LjI1Mjg2IDYuMzAyNDYgNC43MDI5NEM1Ljg1MjM1IDUuMTUzMDMgNS41OTk0OCA1Ljc2MzQ4IDUuNTk5NDggNi40VjkuNkM1LjU5OTQ4IDEwLjIzNjUgNS44NTIzNSAxMC44NDcgNi4zMDI0NiAxMS4yOTcxQzYuNzUyNTcgMTEuNzQ3MSA3LjM2MzA1IDEyIDcuOTk5NiAxMkM4LjYzNjE1IDEyIDkuMjQ2NjMgMTEuNzQ3MSA5LjY5Njc0IDExLjI5NzFDMTAuMTQ2OSAxMC44NDcgMTAuMzk5NyAxMC4yMzY1IDEwLjM5OTcgOS42VjYuNEMxMC4zOTk3IDUuNzYzNDggMTAuMTQ2OSA1LjE1MzAzIDkuNjk2NzQgNC43MDI5NEM5LjI0NjYzIDQuMjUyODYgOC42MzYxNSA0IDcuOTk5NiA0Wk03Ljk5OTYgNS42QzguMjExNzggNS42IDguNDE1MjggNS42ODQyOSA4LjU2NTMxIDUuODM0MzFDOC43MTUzNSA1Ljk4NDM0IDguNzk5NjQgNi4xODc4MyA4Ljc5OTY0IDYuNFY5LjZDOC43OTk2NCA5LjgxMjE3IDguNzE1MzUgMTAuMDE1NyA4LjU2NTMxIDEwLjE2NTdDOC40MTUyOCAxMC4zMTU3IDguMjExNzggMTAuNCA3Ljk5OTYgMTAuNEM3Ljc4NzQyIDEwLjQgNy41ODM5MiAxMC4zMTU3IDcuNDMzODkgMTAuMTY1N0M3LjI4Mzg1IDEwLjAxNTcgNy4xOTk1NiA5LjgxMjE3IDcuMTk5NTYgOS42VjYuNEM3LjE5OTU2IDYuMTg3ODMgNy4yODM4NSA1Ljk4NDM0IDcuNDMzODkgNS44MzQzMUM3LjU4MzkyIDUuNjg0MjkgNy43ODc0MiA1LjYgNy45OTk2IDUuNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgNEM3LjM2MzA1IDQgNi43NTI1NyA0LjI1Mjg2IDYuMzAyNDYgNC43MDI5NEM1Ljg1MjM1IDUuMTUzMDMgNS41OTk0OCA1Ljc2MzQ4IDUuNTk5NDggNi40VjkuNkM1LjU5OTQ4IDEwLjIzNjUgNS44NTIzNSAxMC44NDcgNi4zMDI0NiAxMS4yOTcxQzYuNzUyNTcgMTEuNzQ3MSA3LjM2MzA1IDEyIDcuOTk5NiAxMkM4LjYzNjE1IDEyIDkuMjQ2NjMgMTEuNzQ3MSA5LjY5Njc0IDExLjI5NzFDMTAuMTQ2OSAxMC44NDcgMTAuMzk5NyAxMC4yMzY1IDEwLjM5OTcgOS42VjYuNEMxMC4zOTk3IDUuNzYzNDggMTAuMTQ2OSA1LjE1MzAzIDkuNjk2NzQgNC43MDI5NEM5LjI0NjYzIDQuMjUyODYgOC42MzYxNSA0IDcuOTk5NiA0Wk03Ljk5OTYgNS42QzguMjExNzggNS42IDguNDE1MjggNS42ODQyOSA4LjU2NTMxIDUuODM0MzFDOC43MTUzNSA1Ljk4NDM0IDguNzk5NjQgNi4xODc4MyA4Ljc5OTY0IDYuNFY5LjZDOC43OTk2NCA5LjgxMjE3IDguNzE1MzUgMTAuMDE1NyA4LjU2NTMxIDEwLjE2NTdDOC40MTUyOCAxMC4zMTU3IDguMjExNzggMTAuNCA3Ljk5OTYgMTAuNEM3Ljc4NzQyIDEwLjQgNy41ODM5MiAxMC4zMTU3IDcuNDMzODkgMTAuMTY1N0M3LjI4Mzg1IDEwLjAxNTcgNy4xOTk1NiA5LjgxMjE3IDcuMTk5NTYgOS42VjYuNEM3LjE5OTU2IDYuMTg3ODMgNy4yODM4NSA1Ljk4NDM0IDcuNDMzODkgNS44MzQzMUM3LjU4MzkyIDUuNjg0MjkgNy43ODc0MiA1LjYgNy45OTk2IDUuNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5NDg0IDQuNzA4OEM4LjcyODQ0IDQuMDg3MiA3Ljk4ODQgMy43ODA4IDcuNTAxMTcgNC4xNzI4TDcuNDMzOTcgNC4yMzQ0TDUuODMzODkgNS44MzQ0TDUuNzY3NDkgNS45MDk2QzUuNjU4NjMgNi4wNDk5IDUuNTk5NTUgNi4yMjI0MyA1LjU5OTU1IDYuNEM1LjU5OTU1IDYuNTc3NTcgNS42NTg2MyA2Ljc1MDEgNS43Njc0OSA2Ljg5MDRMNS44MzM4OSA2Ljk2NTZMNS45MDkxIDcuMDMyQzYuMDQ5NCA3LjE0MDg1IDYuMjIxOTQgNy4xOTk5MyA2LjM5OTUyIDcuMTk5OTNDNi41NzcxIDcuMTk5OTMgNi43NDk2NCA3LjE0MDg1IDYuODg5OTQgNy4wMzJMNi45NjUxNSA2Ljk2NTZMNy4xOTk1NiA2LjczMTJWMTEuMkw3LjIwNTE2IDExLjI5MzZDNy4yMjgyOSAxMS40ODggNy4zMjE5MyAxMS42NjcyIDcuNDY4MzUgMTEuNzk3M0M3LjYxNDc2IDExLjkyNzMgNy44MDM3OCAxMS45OTkxIDcuOTk5NiAxMS45OTkxQzguMTk1NDIgMTEuOTk5MSA4LjM4NDQ0IDExLjkyNzMgOC41MzA4NSAxMS43OTczQzguNjc3MjcgMTEuNjY3MiA4Ljc3MDkxIDExLjQ4OCA4Ljc5NDA0IDExLjI5MzZMOC43OTk2NCAxMS4yVjQuOEw4Ljc5NDg0IDQuNzA4OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5NDg0IDQuNzA4OEM4LjcyODQ0IDQuMDg3MiA3Ljk4ODQgMy43ODA4IDcuNTAxMTcgNC4xNzI4TDcuNDMzOTcgNC4yMzQ0TDUuODMzODkgNS44MzQ0TDUuNzY3NDkgNS45MDk2QzUuNjU4NjMgNi4wNDk5IDUuNTk5NTUgNi4yMjI0MyA1LjU5OTU1IDYuNEM1LjU5OTU1IDYuNTc3NTcgNS42NTg2MyA2Ljc1MDEgNS43Njc0OSA2Ljg5MDRMNS44MzM4OSA2Ljk2NTZMNS45MDkxIDcuMDMyQzYuMDQ5NCA3LjE0MDg1IDYuMjIxOTQgNy4xOTk5MyA2LjM5OTUyIDcuMTk5OTNDNi41NzcxIDcuMTk5OTMgNi43NDk2NCA3LjE0MDg1IDYuODg5OTQgNy4wMzJMNi45NjUxNSA2Ljk2NTZMNy4xOTk1NiA2LjczMTJWMTEuMkw3LjIwNTE2IDExLjI5MzZDNy4yMjgyOSAxMS40ODggNy4zMjE5MyAxMS42NjcyIDcuNDY4MzUgMTEuNzk3M0M3LjYxNDc2IDExLjkyNzMgNy44MDM3OCAxMS45OTkxIDcuOTk5NiAxMS45OTkxQzguMTk1NDIgMTEuOTk5MSA4LjM4NDQ0IDExLjkyNzMgOC41MzA4NSAxMS43OTczQzguNjc3MjcgMTEuNjY3MiA4Ljc3MDkxIDExLjQ4OCA4Ljc5NDA0IDExLjI5MzZMOC43OTk2NCAxMS4yVjQuOEw4Ljc5NDg0IDQuNzA4OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINi4zOTk1Mkw2LjMwNTkyIDQuMDA1NkM2LjExMTQ3IDQuMDI4NzMgNS45MzIyNSA0LjEyMjM2IDUuODAyMjIgNC4yNjg3N0M1LjY3MjE5IDQuNDE1MTggNS42MDAzNyA0LjYwNDE5IDUuNjAwMzcgNC44QzUuNjAwMzcgNC45OTU4MSA1LjY3MjE5IDUuMTg0ODIgNS44MDIyMiA1LjMzMTIzQzUuOTMyMjUgNS40Nzc2NCA2LjExMTQ3IDUuNTcxMjcgNi4zMDU5MiA1LjU5NDRMNi4zOTk1MiA1LjZIOC43OTk2NFY3LjJINy4xOTk1Nkw3LjA3OTU1IDcuMjA0QzYuNjk4NiA3LjIzMjYzIDYuMzQwNDYgNy4zOTY2MSA2LjA2OTg4IDcuNjY2MjlDNS43OTkzIDcuOTM1OTcgNS42MzQxNSA4LjI5MzU2IDUuNjA0MjggOC42NzQ0TDUuNTk5NDggOC44VjEwLjRMNS42MDM0OCAxMC41MkM1LjYzMjExIDEwLjkwMDkgNS43OTYxIDExLjI1OTEgNi4wNjU3OSAxMS41Mjk2QzYuMzM1NDkgMTEuODAwMiA2LjY5MzA5IDExLjk2NTMgNy4wNzM5NSAxMS45OTUyTDcuMTk5NTYgMTJIOS41OTk2OEw5LjY5MzI4IDExLjk5NDRDOS44ODc3MyAxMS45NzEzIDEwLjA2NjkgMTEuODc3NiAxMC4xOTcgMTEuNzMxMkMxMC4zMjcgMTEuNTg0OCAxMC4zOTg4IDExLjM5NTggMTAuMzk4OCAxMS4yQzEwLjM5ODggMTEuMDA0MiAxMC4zMjcgMTAuODE1MiAxMC4xOTcgMTAuNjY4OEMxMC4wNjY5IDEwLjUyMjQgOS44ODc3MyAxMC40Mjg3IDkuNjkzMjggMTAuNDA1Nkw5LjU5OTY4IDEwLjRINy4xOTk1NlY4LjhIOC43OTk2NEw4LjkxOTY1IDguNzk2QzkuMzAwNiA4Ljc2NzM3IDkuNjU4NzQgOC42MDMzOSA5LjkyOTMyIDguMzMzNzFDMTAuMTk5OSA4LjA2NDAzIDEwLjM2NSA3LjcwNjQ0IDEwLjM5NDkgNy4zMjU2TDEwLjM5OTcgNy4yVjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINi4zOTk1Mkw2LjMwNTkyIDQuMDA1NkM2LjExMTQ3IDQuMDI4NzMgNS45MzIyNSA0LjEyMjM2IDUuODAyMjIgNC4yNjg3N0M1LjY3MjE5IDQuNDE1MTggNS42MDAzNyA0LjYwNDE5IDUuNjAwMzcgNC44QzUuNjAwMzcgNC45OTU4MSA1LjY3MjE5IDUuMTg0ODIgNS44MDIyMiA1LjMzMTIzQzUuOTMyMjUgNS40Nzc2NCA2LjExMTQ3IDUuNTcxMjcgNi4zMDU5MiA1LjU5NDRMNi4zOTk1MiA1LjZIOC43OTk2NFY3LjJINy4xOTk1Nkw3LjA3OTU1IDcuMjA0QzYuNjk4NiA3LjIzMjYzIDYuMzQwNDYgNy4zOTY2MSA2LjA2OTg4IDcuNjY2MjlDNS43OTkzIDcuOTM1OTcgNS42MzQxNSA4LjI5MzU2IDUuNjA0MjggOC42NzQ0TDUuNTk5NDggOC44VjEwLjRMNS42MDM0OCAxMC41MkM1LjYzMjExIDEwLjkwMDkgNS43OTYxIDExLjI1OTEgNi4wNjU3OSAxMS41Mjk2QzYuMzM1NDkgMTEuODAwMiA2LjY5MzA5IDExLjk2NTMgNy4wNzM5NSAxMS45OTUyTDcuMTk5NTYgMTJIOS41OTk2OEw5LjY5MzI4IDExLjk5NDRDOS44ODc3MyAxMS45NzEzIDEwLjA2NjkgMTEuODc3NiAxMC4xOTcgMTEuNzMxMkMxMC4zMjcgMTEuNTg0OCAxMC4zOTg4IDExLjM5NTggMTAuMzk4OCAxMS4yQzEwLjM5ODggMTEuMDA0MiAxMC4zMjcgMTAuODE1MiAxMC4xOTcgMTAuNjY4OEMxMC4wNjY5IDEwLjUyMjQgOS44ODc3MyAxMC40Mjg3IDkuNjkzMjggMTAuNDA1Nkw5LjU5OTY4IDEwLjRINy4xOTk1NlY4LjhIOC43OTk2NEw4LjkxOTY1IDguNzk2QzkuMzAwNiA4Ljc2NzM3IDkuNjU4NzQgOC42MDMzOSA5LjkyOTMyIDguMzMzNzFDMTAuMTk5OSA4LjA2NDAzIDEwLjM2NSA3LjcwNjQ0IDEwLjM5NDkgNy4zMjU2TDEwLjM5OTcgNy4yVjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjc3MDEgNC4wMzQyNyA2LjMwMDc5IDQuMjE1NTggNi4wMjYzIDQuNTExNTZDNS43NTE4MSA0LjgwNzU1IDUuNTk5MzUgNS4xOTYzNCA1LjU5OTQ4IDUuNkM1LjU5ODggNS43OTY2MiA1LjY3MDU1IDUuOTg2NiA1LjgwMTA0IDYuMTMzNjlDNS45MzE1MyA2LjI4MDc3IDYuMTExNjIgNi4zNzQ2NSA2LjMwNjkzIDYuMzk3NDFDNi41MDIyMyA2LjQyMDE2IDYuNjk5MDggNi4zNzAyIDYuODU5OSA2LjI1NzA1QzcuMDIwNzEgNi4xNDM5MSA3LjEzNDIyIDUuOTc1NTEgNy4xNzg3NiA1Ljc4NEw3LjE5NDc2IDUuNjkzNkw3LjE5OTU2IDUuNkg4Ljc5OTY0VjcuMkg3LjE5OTU2TDcuMDkzMTUgNy4yMDU2QzYuMjA0MzEgNy4zMDE2IDYuMTY5OTEgOC41ODk2IDYuOTkwNzUgOC43Nzc2TDcuMDkzMTUgOC43OTQ0TDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjguOEwxMC4zOTU3IDguNjhDMTAuMzgxOCA4LjQ5NTU4IDEwLjMzNTcgOC4zMTUwMSAxMC4yNTk3IDguMTQ2NEwxMC4xOTk3IDguMDI0OEwxMC4xODQ1IDcuOTk5MkwxMC4yMDA1IDcuOTc1MkMxMC4zMDg2IDcuNzc5IDEwLjM3NDYgNy41NjIzNyAxMC4zOTQxIDcuMzM5MkwxMC4zOTk3IDcuMlY1LjZMMTAuMzk1NyA1LjQ4QzEwLjM2NzEgNS4wOTkwNiAxMC4yMDMxIDQuNzQwOTQgOS45MzM0MSA0LjQ3MDM4QzkuNjYzNzEgNC4xOTk4MSA5LjMwNjExIDQuMDM0NjcgOC45MjUyNSA0LjAwNDhMOC43OTk2NCA0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjc3MDEgNC4wMzQyNyA2LjMwMDc5IDQuMjE1NTggNi4wMjYzIDQuNTExNTZDNS43NTE4MSA0LjgwNzU1IDUuNTk5MzUgNS4xOTYzNCA1LjU5OTQ4IDUuNkM1LjU5ODggNS43OTY2MiA1LjY3MDU1IDUuOTg2NiA1LjgwMTA0IDYuMTMzNjlDNS45MzE1MyA2LjI4MDc3IDYuMTExNjIgNi4zNzQ2NSA2LjMwNjkzIDYuMzk3NDFDNi41MDIyMyA2LjQyMDE2IDYuNjk5MDggNi4zNzAyIDYuODU5OSA2LjI1NzA1QzcuMDIwNzEgNi4xNDM5MSA3LjEzNDIyIDUuOTc1NTEgNy4xNzg3NiA1Ljc4NEw3LjE5NDc2IDUuNjkzNkw3LjE5OTU2IDUuNkg4Ljc5OTY0VjcuMkg3LjE5OTU2TDcuMDkzMTUgNy4yMDU2QzYuMjA0MzEgNy4zMDE2IDYuMTY5OTEgOC41ODk2IDYuOTkwNzUgOC43Nzc2TDcuMDkzMTUgOC43OTQ0TDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjguOEwxMC4zOTU3IDguNjhDMTAuMzgxOCA4LjQ5NTU4IDEwLjMzNTcgOC4zMTUwMSAxMC4yNTk3IDguMTQ2NEwxMC4xOTk3IDguMDI0OEwxMC4xODQ1IDcuOTk5MkwxMC4yMDA1IDcuOTc1MkMxMC4zMDg2IDcuNzc5IDEwLjM3NDYgNy41NjIzNyAxMC4zOTQxIDcuMzM5MkwxMC4zOTk3IDcuMlY1LjZMMTAuMzk1NyA1LjQ4QzEwLjM2NzEgNS4wOTkwNiAxMC4yMDMxIDQuNzQwOTQgOS45MzM0MSA0LjQ3MDM4QzkuNjYzNzEgNC4xOTk4MSA5LjMwNjExIDQuMDM0NjcgOC45MjUyNSA0LjAwNDhMOC43OTk2NCA0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRDOS40MDM3MiA0LjAwMDAzIDkuMjE0NTkgNC4wNzE5NiA5LjA2ODE2IDQuMjAyMTdDOC45MjE3MiA0LjMzMjM4IDguODI4MTcgNC41MTE4IDguODA1MjQgNC43MDY0TDguNzk5NjQgNC44VjcuMkg3LjE5OTU2VjQuOEw3LjE5Mzk2IDQuNzA2NEM3LjE3MDgzIDQuNTExOTYgNy4wNzcxOSA0LjMzMjc2IDYuOTMwNzcgNC4yMDI3M0M2Ljc4NDM2IDQuMDcyNzEgNi41OTUzNCA0LjAwMDg5IDYuMzk5NTIgNC4wMDA4OUM2LjIwMzcgNC4wMDA4OSA2LjAxNDY4IDQuMDcyNzEgNS44NjgyNyA0LjIwMjczQzUuNzIxODUgNC4zMzI3NiA1LjYyODIxIDQuNTExOTYgNS42MDUwOCA0LjcwNjRMNS41OTk0OCA0LjhWNy4yTDUuNjAzNDggNy4zMkM1LjYzMjExIDcuNzAwOTQgNS43OTYxIDguMDU5MDYgNi4wNjU3OSA4LjMyOTYyQzYuMzM1NDkgOC42MDAxOSA2LjY5MzA5IDguNzY1MzMgNy4wNzM5NSA4Ljc5NTJMNy4xOTk1NiA4LjhIOC43OTk2NFYxMS4yTDguODA1MjQgMTEuMjkzNkM4LjgyODM3IDExLjQ4OCA4LjkyMjAxIDExLjY2NzIgOS4wNjg0MyAxMS43OTczQzkuMjE0ODQgMTEuOTI3MyA5LjQwMzg2IDExLjk5OTEgOS41OTk2OCAxMS45OTkxQzkuNzk1NSAxMS45OTkxIDkuOTg0NTIgMTEuOTI3MyAxMC4xMzA5IDExLjc5NzNDMTAuMjc3MyAxMS42NjcyIDEwLjM3MSAxMS40ODggMTAuMzk0MSAxMS4yOTM2TDEwLjM5OTcgMTEuMlY0LjhMMTAuMzk0MSA0LjcwNjRDMTAuMzcxMiA0LjUxMTggMTAuMjc3NiA0LjMzMjM4IDEwLjEzMTIgNC4yMDIxN0M5Ljk4NDc3IDQuMDcxOTYgOS43OTU2NCA0LjAwMDAzIDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRDOS40MDM3MiA0LjAwMDAzIDkuMjE0NTkgNC4wNzE5NiA5LjA2ODE2IDQuMjAyMTdDOC45MjE3MiA0LjMzMjM4IDguODI4MTcgNC41MTE4IDguODA1MjQgNC43MDY0TDguNzk5NjQgNC44VjcuMkg3LjE5OTU2VjQuOEw3LjE5Mzk2IDQuNzA2NEM3LjE3MDgzIDQuNTExOTYgNy4wNzcxOSA0LjMzMjc2IDYuOTMwNzcgNC4yMDI3M0M2Ljc4NDM2IDQuMDcyNzEgNi41OTUzNCA0LjAwMDg5IDYuMzk5NTIgNC4wMDA4OUM2LjIwMzcgNC4wMDA4OSA2LjAxNDY4IDQuMDcyNzEgNS44NjgyNyA0LjIwMjczQzUuNzIxODUgNC4zMzI3NiA1LjYyODIxIDQuNTExOTYgNS42MDUwOCA0LjcwNjRMNS41OTk0OCA0LjhWNy4yTDUuNjAzNDggNy4zMkM1LjYzMjExIDcuNzAwOTQgNS43OTYxIDguMDU5MDYgNi4wNjU3OSA4LjMyOTYyQzYuMzM1NDkgOC42MDAxOSA2LjY5MzA5IDguNzY1MzMgNy4wNzM5NSA4Ljc5NTJMNy4xOTk1NiA4LjhIOC43OTk2NFYxMS4yTDguODA1MjQgMTEuMjkzNkM4LjgyODM3IDExLjQ4OCA4LjkyMjAxIDExLjY2NzIgOS4wNjg0MyAxMS43OTczQzkuMjE0ODQgMTEuOTI3MyA5LjQwMzg2IDExLjk5OTEgOS41OTk2OCAxMS45OTkxQzkuNzk1NSAxMS45OTkxIDkuOTg0NTIgMTEuOTI3MyAxMC4xMzA5IDExLjc5NzNDMTAuMjc3MyAxMS42NjcyIDEwLjM3MSAxMS40ODggMTAuMzk0MSAxMS4yOTM2TDEwLjM5OTcgMTEuMlY0LjhMMTAuMzk0MSA0LjcwNjRDMTAuMzcxMiA0LjUxMTggMTAuMjc3NiA0LjMzMjM4IDEwLjEzMTIgNC4yMDIxN0M5Ljk4NDc3IDQuMDcxOTYgOS43OTU2NCA0LjAwMDAzIDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRINi4zOTk1MkM2LjIwMzU2IDQuMDAwMDMgNi4wMTQ0MyA0LjA3MTk2IDUuODY4IDQuMjAyMTdDNS43MjE1NiA0LjMzMjM4IDUuNjI4MDEgNC41MTE4IDUuNjA1MDggNC43MDY0TDUuNTk5NDggNC44VjhDNS41OTk1MSA4LjE5NTk1IDUuNjcxNDUgOC4zODUwNyA1LjgwMTY2IDguNTMxNUM1LjkzMTg4IDguNjc3OTMgNi4xMTEzMSA4Ljc3MTQ3IDYuMzA1OTIgOC43OTQ0TDYuMzk5NTIgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRDOS4yMDMzMiAxMi4wMDAxIDkuNTkyMTMgMTEuODQ3NyA5Ljg4ODEzIDExLjU3MzJDMTAuMTg0MSAxMS4yOTg3IDEwLjM2NTQgMTAuOTIyNSAxMC4zOTU3IDEwLjUyTDEwLjM5OTcgMTAuNFY4LjhDMTAuMzk5OCA4LjM5NjM0IDEwLjI0NzQgOC4wMDc1NSA5Ljk3MjkgNy43MTE1NkM5LjY5ODQyIDcuNDE1NTggOS4zMjIxOSA3LjIzNDI3IDguOTE5NjUgNy4yMDRMOC43OTk2NCA3LjJINy4xOTk1NlY1LjZIOS41OTk2OEM5Ljc5NTY0IDUuNTk5OTcgOS45ODQ3NyA1LjUyODA0IDEwLjEzMTIgNS4zOTc4M0MxMC4yNzc2IDUuMjY3NjIgMTAuMzcxMiA1LjA4ODIgMTAuMzk0MSA0Ljg5MzZMMTAuMzk5NyA0LjhDMTAuMzk5NyA0LjYwNDA1IDEwLjMyNzggNC40MTQ5MyAxMC4xOTc1IDQuMjY4NUMxMC4wNjczIDQuMTIyMDcgOS44ODc4OSA0LjAyODUzIDkuNjkzMjggNC4wMDU2TDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRINi4zOTk1MkM2LjIwMzU2IDQuMDAwMDMgNi4wMTQ0MyA0LjA3MTk2IDUuODY4IDQuMjAyMTdDNS43MjE1NiA0LjMzMjM4IDUuNjI4MDEgNC41MTE4IDUuNjA1MDggNC43MDY0TDUuNTk5NDggNC44VjhDNS41OTk1MSA4LjE5NTk1IDUuNjcxNDUgOC4zODUwNyA1LjgwMTY2IDguNTMxNUM1LjkzMTg4IDguNjc3OTMgNi4xMTEzMSA4Ljc3MTQ3IDYuMzA1OTIgOC43OTQ0TDYuMzk5NTIgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRDOS4yMDMzMiAxMi4wMDAxIDkuNTkyMTMgMTEuODQ3NyA5Ljg4ODEzIDExLjU3MzJDMTAuMTg0MSAxMS4yOTg3IDEwLjM2NTQgMTAuOTIyNSAxMC4zOTU3IDEwLjUyTDEwLjM5OTcgMTAuNFY4LjhDMTAuMzk5OCA4LjM5NjM0IDEwLjI0NzQgOC4wMDc1NSA5Ljk3MjkgNy43MTE1NkM5LjY5ODQyIDcuNDE1NTggOS4zMjIxOSA3LjIzNDI3IDguOTE5NjUgNy4yMDRMOC43OTk2NCA3LjJINy4xOTk1NlY1LjZIOS41OTk2OEM5Ljc5NTY0IDUuNTk5OTcgOS45ODQ3NyA1LjUyODA0IDEwLjEzMTIgNS4zOTc4M0MxMC4yNzc2IDUuMjY3NjIgMTAuMzcxMiA1LjA4ODIgMTAuMzk0MSA0Ljg5MzZMMTAuMzk5NyA0LjhDMTAuMzk5NyA0LjYwNDA1IDEwLjMyNzggNC40MTQ5MyAxMC4xOTc1IDQuMjY4NUMxMC4wNjczIDQuMTIyMDcgOS44ODc4OSA0LjAyODUzIDkuNjkzMjggNC4wMDU2TDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjEwLjRMNS42MDM0OCAxMC41MkM1LjYzMjExIDEwLjkwMDkgNS43OTYxIDExLjI1OTEgNi4wNjU3OSAxMS41Mjk2QzYuMzM1NDkgMTEuODAwMiA2LjY5MzA5IDExLjk2NTMgNy4wNzM5NSAxMS45OTUyTDcuMTk5NTYgMTJIOC43OTk2NEw4LjkxOTY1IDExLjk5NkM5LjMwMDYgMTEuOTY3NCA5LjY1ODc0IDExLjgwMzQgOS45MjkzMiAxMS41MzM3QzEwLjE5OTkgMTEuMjY0IDEwLjM2NSAxMC45MDY0IDEwLjM5NDkgMTAuNTI1NkwxMC4zOTk3IDEwLjRWOC44TDEwLjM5NTcgOC42OEMxMC4zNjcxIDguMjk5MDYgMTAuMjAzMSA3Ljk0MDk0IDkuOTMzNDEgNy42NzAzOEM5LjY2MzcxIDcuMzk5ODEgOS4zMDYxMSA3LjIzNDY3IDguOTI1MjUgNy4yMDQ4TDguNzk5NjQgNy4ySDcuMTk5NTZWNS42SDguNzk5NjRMOC44MDUyNCA1LjY5MzZDOC44MjkzMiA1Ljg5NjA4IDguOTI5ODIgNi4wODE3MiA5LjA4NjE5IDYuMjEyNTlDOS4yNDI1NiA2LjM0MzQ2IDkuNDQzIDYuNDA5NjkgOS42NDY1NyA2LjM5Nzc0QzkuODUwMTMgNi4zODU3OSAxMC4wNDE0IDYuMjk2NTYgMTAuMTgxNCA2LjE0ODI5QzEwLjMyMTQgNi4wMDAwMyAxMC4zOTk1IDUuODAzOSAxMC4zOTk3IDUuNkMxMC4zOTk4IDUuMTk2MzQgMTAuMjQ3NCA0LjgwNzU1IDkuOTcyOSA0LjUxMTU2QzkuNjk4NDIgNC4yMTU1OCA5LjMyMjE5IDQuMDM0MjcgOC45MTk2NSA0LjAwNEw4Ljc5OTY0IDRaTTguNzk5NjQgOC44VjEwLjRINy4xOTk1NlY4LjhIOC43OTk2NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjEwLjRMNS42MDM0OCAxMC41MkM1LjYzMjExIDEwLjkwMDkgNS43OTYxIDExLjI1OTEgNi4wNjU3OSAxMS41Mjk2QzYuMzM1NDkgMTEuODAwMiA2LjY5MzA5IDExLjk2NTMgNy4wNzM5NSAxMS45OTUyTDcuMTk5NTYgMTJIOC43OTk2NEw4LjkxOTY1IDExLjk5NkM5LjMwMDYgMTEuOTY3NCA5LjY1ODc0IDExLjgwMzQgOS45MjkzMiAxMS41MzM3QzEwLjE5OTkgMTEuMjY0IDEwLjM2NSAxMC45MDY0IDEwLjM5NDkgMTAuNTI1NkwxMC4zOTk3IDEwLjRWOC44TDEwLjM5NTcgOC42OEMxMC4zNjcxIDguMjk5MDYgMTAuMjAzMSA3Ljk0MDk0IDkuOTMzNDEgNy42NzAzOEM5LjY2MzcxIDcuMzk5ODEgOS4zMDYxMSA3LjIzNDY3IDguOTI1MjUgNy4yMDQ4TDguNzk5NjQgNy4ySDcuMTk5NTZWNS42SDguNzk5NjRMOC44MDUyNCA1LjY5MzZDOC44MjkzMiA1Ljg5NjA4IDguOTI5ODIgNi4wODE3MiA5LjA4NjE5IDYuMjEyNTlDOS4yNDI1NiA2LjM0MzQ2IDkuNDQzIDYuNDA5NjkgOS42NDY1NyA2LjM5Nzc0QzkuODUwMTMgNi4zODU3OSAxMC4wNDE0IDYuMjk2NTYgMTAuMTgxNCA2LjE0ODI5QzEwLjMyMTQgNi4wMDAwMyAxMC4zOTk1IDUuODAzOSAxMC4zOTk3IDUuNkMxMC4zOTk4IDUuMTk2MzQgMTAuMjQ3NCA0LjgwNzU1IDkuOTcyOSA0LjUxMTU2QzkuNjk4NDIgNC4yMTU1OCA5LjMyMjE5IDQuMDM0MjcgOC45MTk2NSA0LjAwNEw4Ljc5OTY0IDRaTTguNzk5NjQgOC44VjEwLjRINy4xOTk1NlY4LjhIOC43OTk2NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRINi4zOTk1Mkw2LjMwNTkyIDQuMDA1NkM2LjEyNzMzIDQuMDI2NjYgNS45NjEwNSA0LjEwNzI2IDUuODMzOSA0LjIzNDQxQzUuNzA2NzUgNC4zNjE1NSA1LjYyNjE0IDQuNTI3ODMgNS42MDUwOCA0LjcwNjRMNS41OTk0OCA0LjhMNS42MDUwOCA0Ljg5MzZDNS42MjYxNCA1LjA3MjE3IDUuNzA2NzUgNS4yMzg0NSA1LjgzMzkgNS4zNjU1OUM1Ljk2MTA1IDUuNDkyNzQgNi4xMjczMyA1LjU3MzM0IDYuMzA1OTIgNS41OTQ0TDYuMzk5NTIgNS42SDguNTc0MDNMNy4yMjM1NiAxMS4wMDU2TDcuMjA1OTYgMTEuMDk3NkM3LjE4MDg4IDExLjI5MiA3LjIyODA2IDExLjQ4ODkgNy4zMzg1NCAxMS42NTA4QzcuNDQ5MDMgMTEuODEyNyA3LjYxNTEyIDExLjkyODUgNy44MDUyOSAxMS45NzZDNy45OTU0NyAxMi4wMjM2IDguMTk2NDkgMTEuOTk5NyA4LjM3MDIgMTEuOTA4OEM4LjU0MzkyIDExLjgxOCA4LjY3ODIzIDExLjY2NjUgOC43NDc2NCAxMS40ODMyTDguNzc1NjQgMTEuMzk0NEwxMC4zNzU3IDQuOTk0NEwxMC4zOTI1IDQuOTA0OEMxMC40MDY1IDQuNzk5NDQgMTAuMzk5MyA0LjY5MjM0IDEwLjM3MTQgNC41ODk3OEMxMC4zNDM2IDQuNDg3MjIgMTAuMjk1NSA0LjM5MTI0IDEwLjIzMDEgNC4zMDc0NUMxMC4xNjQ3IDQuMjIzNjYgMTAuMDgzMyA0LjE1Mzc0IDkuOTkwNTYgNC4xMDE3OEM5Ljg5Nzg0IDQuMDQ5ODEgOS43OTU2OSA0LjAxNjg0IDkuNjkwMDggNC4wMDQ4TDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRINi4zOTk1Mkw2LjMwNTkyIDQuMDA1NkM2LjEyNzMzIDQuMDI2NjYgNS45NjEwNSA0LjEwNzI2IDUuODMzOSA0LjIzNDQxQzUuNzA2NzUgNC4zNjE1NSA1LjYyNjE0IDQuNTI3ODMgNS42MDUwOCA0LjcwNjRMNS41OTk0OCA0LjhMNS42MDUwOCA0Ljg5MzZDNS42MjYxNCA1LjA3MjE3IDUuNzA2NzUgNS4yMzg0NSA1LjgzMzkgNS4zNjU1OUM1Ljk2MTA1IDUuNDkyNzQgNi4xMjczMyA1LjU3MzM0IDYuMzA1OTIgNS41OTQ0TDYuMzk5NTIgNS42SDguNTc0MDNMNy4yMjM1NiAxMS4wMDU2TDcuMjA1OTYgMTEuMDk3NkM3LjE4MDg4IDExLjI5MiA3LjIyODA2IDExLjQ4ODkgNy4zMzg1NCAxMS42NTA4QzcuNDQ5MDMgMTEuODEyNyA3LjYxNTEyIDExLjkyODUgNy44MDUyOSAxMS45NzZDNy45OTU0NyAxMi4wMjM2IDguMTk2NDkgMTEuOTk5NyA4LjM3MDIgMTEuOTA4OEM4LjU0MzkyIDExLjgxOCA4LjY3ODIzIDExLjY2NjUgOC43NDc2NCAxMS40ODMyTDguNzc1NjQgMTEuMzk0NEwxMC4zNzU3IDQuOTk0NEwxMC4zOTI1IDQuOTA0OEMxMC40MDY1IDQuNzk5NDQgMTAuMzk5MyA0LjY5MjM0IDEwLjM3MTQgNC41ODk3OEMxMC4zNDM2IDQuNDg3MjIgMTAuMjk1NSA0LjM5MTI0IDEwLjIzMDEgNC4zMDc0NUMxMC4xNjQ3IDQuMjIzNjYgMTAuMDgzMyA0LjE1Mzc0IDkuOTkwNTYgNC4xMDE3OEM5Ljg5Nzg0IDQuMDQ5ODEgOS43OTU2OSA0LjAxNjg0IDkuNjkwMDggNC4wMDQ4TDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjcuMkw1LjYwMzQ4IDcuMzJDNS42MzIxMSA3LjcwMDk0IDUuNzk2MSA4LjA1OTA2IDYuMDY1NzkgOC4zMjk2MkM2LjMzNTQ5IDguNjAwMTkgNi42OTMwOSA4Ljc2NTMzIDcuMDczOTUgOC43OTUyTDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaTTguNzk5NjQgNS42VjcuMkg3LjE5OTU2VjUuNkg4Ljc5OTY0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjcuMkw1LjYwMzQ4IDcuMzJDNS42MzIxMSA3LjcwMDk0IDUuNzk2MSA4LjA1OTA2IDYuMDY1NzkgOC4zMjk2MkM2LjMzNTQ5IDguNjAwMTkgNi42OTMwOSA4Ljc2NTMzIDcuMDczOTUgOC43OTUyTDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaTTguNzk5NjQgNS42VjcuMkg3LjE5OTU2VjUuNkg4Ljc5OTY0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjcuMkw1LjYwMzQ4IDcuMzJDNS42MzIxMSA3LjcwMDk0IDUuNzk2MSA4LjA1OTA2IDYuMDY1NzkgOC4zMjk2MkM2LjMzNTQ5IDguNjAwMTkgNi42OTMwOSA4Ljc2NTMzIDcuMDczOTUgOC43OTUyTDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaTTguNzk5NjQgNS42VjcuMkg3LjE5OTU2VjUuNkg4Ljc5OTY0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjcuMkw1LjYwMzQ4IDcuMzJDNS42MzIxMSA3LjcwMDk0IDUuNzk2MSA4LjA1OTA2IDYuMDY1NzkgOC4zMjk2MkM2LjMzNTQ5IDguNjAwMTkgNi42OTMwOSA4Ljc2NTMzIDcuMDczOTUgOC43OTUyTDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaTTguNzk5NjQgNS42VjcuMkg3LjE5OTU2VjUuNkg4Ljc5OTY0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU3NzggMi43MjkwMkMxMi42NDkxIDMuMzQ3NTggMTMuNTQwNSA0LjIzNTAxIDE0LjE2MzggNS4zMDM2QzE0Ljc4NzEgNi4zNzIyIDE1LjEyMDcgNy41ODQ5NSAxNS4xMzE3IDguODIxOTlDMTUuMTQyNyAxMC4wNTkgMTQuODMwNyAxMS4yNzc1IDE0LjIyNjUgMTIuMzU3QzEzLjYyMjQgMTMuNDM2NiAxMi43NDY5IDE0LjMzOTcgMTEuNjg2NyAxNC45NzcyQzEwLjYyNjYgMTUuNjE0NyA5LjQxODM3IDE1Ljk2NDYgOC4xODE1OSAxNS45OTIxQzYuOTQ0ODEgMTYuMDE5NiA1LjcyMjI1IDE1LjcyMzkgNC42MzQ3NiAxNS4xMzQyQzMuNTQ3MjcgMTQuNTQ0NSAyLjYzMjUxIDEzLjY4MTIgMS45ODA4OSAxMi42Mjk2QzEuMzI5MjYgMTEuNTc4IDAuOTYzMzQ1IDEwLjM3NDYgMC45MTkyOTkgOS4xMzgzM0wwLjkxNDg1NiA4Ljg4NTA4TDAuOTE5Mjk5IDguNjMxODRDMC45NjMwMTEgNy40MDYyNyAxLjMyMzA0IDYuMjEyODUgMS45NjQzOSA1LjE2NzU3QzIuNjA1NzUgNC4xMjIzIDMuNTA2NjEgMy4yNjA3MiA0LjU3OTQzIDIuNjY2NThDNS42NTIyNCAyLjA3MjQ0IDYuODYwNTIgMS43NjU5NSA4LjA4NjgyIDEuNzc2ODlDOS4zMTMxMiAxLjc4NzgzIDEwLjUxNTcgMi4xMTU4MyAxMS41Nzc4IDIuNzI5MDJaTTguMDIzNDcgNS4zMzA3N0M3Ljc4NzgxIDUuMzMwNzcgNy41NjE4IDUuNDI0MzkgNy4zOTUxNSA1LjU5MTAzQzcuMjI4NTEgNS43NTc2NyA3LjEzNDkgNS45ODM2OSA3LjEzNDkgNi4yMTkzNVY4Ljg4NTA4TDcuMTQxMTIgOC45ODkwNUM3LjE2NjU4IDkuMjA1MTkgNy4yNzA0OSA5LjQwNDQ4IDcuNDMzMTMgOS41NDkxQzcuNTk1NzcgOS42OTM3MyA3LjgwNTgzIDkuNzczNjMgOC4wMjM0NyA5Ljc3MzY2SDkuODAwNjNMOS45MDQ1OSA5Ljc2NzQ0QzEwLjEyMDcgOS43NDE5OCAxMC4zMiA5LjYzODA3IDEwLjQ2NDYgOS40NzU0M0MxMC42MDkzIDkuMzEyNzkgMTAuNjg5MiA5LjEwMjczIDEwLjY4OTIgOC44ODUwOEwxMC42ODMgOC43ODExMkMxMC42NTc1IDguNTY0OTcgMTAuNTUzNiA4LjM2NTY5IDEwLjM5MSA4LjIyMTA2QzEwLjIyODMgOC4wNzY0NCAxMC4wMTgzIDcuOTk2NTMgOS44MDA2MyA3Ljk5NjUxSDguOTEyMDVWNi4yMTkzNUw4LjkwNTgzIDYuMTE1MzlDOC44ODAzNyA1Ljg5OTI0IDguNzc2NDYgNS42OTk5NiA4LjYxMzgyIDUuNTU1MzNDOC40NTExOCA1LjQxMDcxIDguMjQxMTIgNS4zMzA4IDguMDIzNDcgNS4zMzA3N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zLjA1ODEyIDAuMTY5MDMxQzMuMjQwODYgMC4wMzMzMjkxIDMuNDY4NzEgLTAuMDI3MDcwNyAzLjY5NDY3IDAuMDAwMjg3NzU0QzMuOTIwNjQgMC4wMjc2NDYyIDQuMTI3NDkgMC4xNDA2NzcgNC4yNzI1NyAwLjMxNjA2OEM0LjQxNzY1IDAuNDkxNDU5IDQuNDg5ODggMC43MTU4MzcgNC40NzQzOSAwLjk0MjkyNUM0LjQ1ODg5IDEuMTcwMDEgNC4zNTY4MyAxLjM4MjUgNC4xODkyNyAxLjUzNjU1TDQuMTAzMDggMS42MDc2NEwxLjY1OTQ5IDMuMzg0NzlDMS40NzY4MiAzLjUyMjYyIDEuMjQ4MDEgMy41ODQ2NyAxLjAyMDczIDMuNTU3OTlDMC43OTM0NDcgMy41MzEzMiAwLjU4NTIxOSAzLjQxNzk5IDAuNDM5NDE4IDMuMjQxNjFDMC4yOTM2MTcgMy4wNjUyMyAwLjIyMTQ4NiAyLjgzOTQgMC4yMzgwNSAyLjYxMTE2QzAuMjU0NjE0IDIuMzgyOTEgMC4zNTg1OTYgMi4xNjk4NiAwLjUyODMzNiAyLjAxNjM4TDAuNjE0NTI4IDEuOTQ1M0wzLjA1ODEyIDAuMTY5MDMxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTExLjc0NzUgMC4zNjU0MUMxMS44NzQ3IDAuMTkwMzgzIDEyLjA2MTUgMC4wNjc4MTEgMTIuMjcyNyAwLjAyMDY5NDFDMTIuNDgzOSAtMC4wMjY0MjI4IDEyLjcwNSAwLjAwNTE1NDE1IDEyLjg5NDYgMC4xMDk1TDEyLjk4ODggMC4xNjkwMzRMMTUuNDMyNCAxLjk0NjE5QzE1LjYxNTEgMi4wNzkxIDE1Ljc0MDQgMi4yNzY2NSAxNS43ODI2IDIuNDk4NjRDMTUuODI0OSAyLjcyMDYzIDE1Ljc4MSAyLjk1MDM4IDE1LjY1OTkgMy4xNDExNEMxNS41Mzg3IDMuMzMxOSAxNS4zNDk1IDMuNDY5MzUgMTUuMTMwNiAzLjUyNTUxQzE0LjkxMTcgMy41ODE2NyAxNC42Nzk2IDMuNTUyMzIgMTQuNDgxNiAzLjQ0MzQ0TDE0LjM4NzQgMy4zODM5MUwxMS45NDM4IDEuNjA2NzVDMTEuODQ5NSAxLjUzODA4IDExLjc2OTYgMS40NTE1IDExLjcwODcgMS4zNTE5NUMxMS42NDc4IDEuMjUyNCAxMS42MDcyIDEuMTQxODQgMTEuNTg5IDEuMDI2NTdDMTEuNTcwOSAwLjkxMTI5OCAxMS41NzU2IDAuNzkzNTgyIDExLjYwMjkgMC42ODAxNDFDMTEuNjMwMyAwLjU2NjY5OSAxMS42Nzg4IDAuNDU5NzUzIDExLjc0NzUgMC4zNjU0MVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU3NzggMi43MjkwMkMxMi42NDkxIDMuMzQ3NTggMTMuNTQwNSA0LjIzNTAxIDE0LjE2MzggNS4zMDM2QzE0Ljc4NzEgNi4zNzIyIDE1LjEyMDcgNy41ODQ5NSAxNS4xMzE3IDguODIxOTlDMTUuMTQyNyAxMC4wNTkgMTQuODMwNyAxMS4yNzc1IDE0LjIyNjUgMTIuMzU3QzEzLjYyMjQgMTMuNDM2NiAxMi43NDY5IDE0LjMzOTcgMTEuNjg2NyAxNC45NzcyQzEwLjYyNjYgMTUuNjE0NyA5LjQxODM3IDE1Ljk2NDYgOC4xODE1OSAxNS45OTIxQzYuOTQ0ODEgMTYuMDE5NiA1LjcyMjI1IDE1LjcyMzkgNC42MzQ3NiAxNS4xMzQyQzMuNTQ3MjcgMTQuNTQ0NSAyLjYzMjUxIDEzLjY4MTIgMS45ODA4OSAxMi42Mjk2QzEuMzI5MjYgMTEuNTc4IDAuOTYzMzQ1IDEwLjM3NDYgMC45MTkyOTkgOS4xMzgzM0wwLjkxNDg1NiA4Ljg4NTA4TDAuOTE5Mjk5IDguNjMxODRDMC45NjMwMTEgNy40MDYyNyAxLjMyMzA0IDYuMjEyODUgMS45NjQzOSA1LjE2NzU3QzIuNjA1NzUgNC4xMjIzIDMuNTA2NjEgMy4yNjA3MiA0LjU3OTQzIDIuNjY2NThDNS42NTIyNCAyLjA3MjQ0IDYuODYwNTIgMS43NjU5NSA4LjA4NjgyIDEuNzc2ODlDOS4zMTMxMiAxLjc4NzgzIDEwLjUxNTcgMi4xMTU4MyAxMS41Nzc4IDIuNzI5MDJaTTguMDIzNDcgNS4zMzA3N0M3Ljc4NzgxIDUuMzMwNzcgNy41NjE4IDUuNDI0MzkgNy4zOTUxNSA1LjU5MTAzQzcuMjI4NTEgNS43NTc2NyA3LjEzNDkgNS45ODM2OSA3LjEzNDkgNi4yMTkzNVY4Ljg4NTA4TDcuMTQxMTIgOC45ODkwNUM3LjE2NjU4IDkuMjA1MTkgNy4yNzA0OSA5LjQwNDQ4IDcuNDMzMTMgOS41NDkxQzcuNTk1NzcgOS42OTM3MyA3LjgwNTgzIDkuNzczNjMgOC4wMjM0NyA5Ljc3MzY2SDkuODAwNjNMOS45MDQ1OSA5Ljc2NzQ0QzEwLjEyMDcgOS43NDE5OCAxMC4zMiA5LjYzODA3IDEwLjQ2NDYgOS40NzU0M0MxMC42MDkzIDkuMzEyNzkgMTAuNjg5MiA5LjEwMjczIDEwLjY4OTIgOC44ODUwOEwxMC42ODMgOC43ODExMkMxMC42NTc1IDguNTY0OTcgMTAuNTUzNiA4LjM2NTY5IDEwLjM5MSA4LjIyMTA2QzEwLjIyODMgOC4wNzY0NCAxMC4wMTgzIDcuOTk2NTMgOS44MDA2MyA3Ljk5NjUxSDguOTEyMDVWNi4yMTkzNUw4LjkwNTgzIDYuMTE1MzlDOC44ODAzNyA1Ljg5OTI0IDguNzc2NDYgNS42OTk5NiA4LjYxMzgyIDUuNTU1MzNDOC40NTExOCA1LjQxMDcxIDguMjQxMTIgNS4zMzA4IDguMDIzNDcgNS4zMzA3N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zLjA1ODEyIDAuMTY5MDMxQzMuMjQwODYgMC4wMzMzMjkxIDMuNDY4NzEgLTAuMDI3MDcwNyAzLjY5NDY3IDAuMDAwMjg3NzU0QzMuOTIwNjQgMC4wMjc2NDYyIDQuMTI3NDkgMC4xNDA2NzcgNC4yNzI1NyAwLjMxNjA2OEM0LjQxNzY1IDAuNDkxNDU5IDQuNDg5ODggMC43MTU4MzcgNC40NzQzOSAwLjk0MjkyNUM0LjQ1ODg5IDEuMTcwMDEgNC4zNTY4MyAxLjM4MjUgNC4xODkyNyAxLjUzNjU1TDQuMTAzMDggMS42MDc2NEwxLjY1OTQ5IDMuMzg0NzlDMS40NzY4MiAzLjUyMjYyIDEuMjQ4MDEgMy41ODQ2NyAxLjAyMDczIDMuNTU3OTlDMC43OTM0NDcgMy41MzEzMiAwLjU4NTIxOSAzLjQxNzk5IDAuNDM5NDE4IDMuMjQxNjFDMC4yOTM2MTcgMy4wNjUyMyAwLjIyMTQ4NiAyLjgzOTQgMC4yMzgwNSAyLjYxMTE2QzAuMjU0NjE0IDIuMzgyOTEgMC4zNTg1OTYgMi4xNjk4NiAwLjUyODMzNiAyLjAxNjM4TDAuNjE0NTI4IDEuOTQ1M0wzLjA1ODEyIDAuMTY5MDMxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTExLjc0NzUgMC4zNjU0MUMxMS44NzQ3IDAuMTkwMzgzIDEyLjA2MTUgMC4wNjc4MTEgMTIuMjcyNyAwLjAyMDY5NDFDMTIuNDgzOSAtMC4wMjY0MjI4IDEyLjcwNSAwLjAwNTE1NDE1IDEyLjg5NDYgMC4xMDk1TDEyLjk4ODggMC4xNjkwMzRMMTUuNDMyNCAxLjk0NjE5QzE1LjYxNTEgMi4wNzkxIDE1Ljc0MDQgMi4yNzY2NSAxNS43ODI2IDIuNDk4NjRDMTUuODI0OSAyLjcyMDYzIDE1Ljc4MSAyLjk1MDM4IDE1LjY1OTkgMy4xNDExNEMxNS41Mzg3IDMuMzMxOSAxNS4zNDk1IDMuNDY5MzUgMTUuMTMwNiAzLjUyNTUxQzE0LjkxMTcgMy41ODE2NyAxNC42Nzk2IDMuNTUyMzIgMTQuNDgxNiAzLjQ0MzQ0TDE0LjM4NzQgMy4zODM5MUwxMS45NDM4IDEuNjA2NzVDMTEuODQ5NSAxLjUzODA4IDExLjc2OTYgMS40NTE1IDExLjcwODcgMS4zNTE5NUMxMS42NDc4IDEuMjUyNCAxMS42MDcyIDEuMTQxODQgMTEuNTg5IDEuMDI2NTdDMTEuNTcwOSAwLjkxMTI5OCAxMS41NzU2IDAuNzkzNTgyIDExLjYwMjkgMC42ODAxNDFDMTEuNjMwMyAwLjU2NjY5OSAxMS42Nzg4IDAuNDU5NzUzIDExLjc0NzUgMC4zNjU0MVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEMxMi40MTg0IDAgMTYgMy41ODE2IDE2IDhDMTYgMTIuNDE4NCAxMi40MTg0IDE2IDggMTZDMy42NTYgMTYgMC4xMjE2IDEyLjUzODQgMC4wMDMxOTk5NiA4LjIyNEwwIDhMMC4wMDMxOTk5NiA3Ljc3NkMwLjEyMTYgMy40NjE2IDMuNjU2IDAgOCAwWk01LjIgNC44QzQuNjkyMjMgNC43OTk5MiA0LjIwMzQzIDQuOTkyOTkgMy44MzI3NiA1LjM0MDAzQzMuNDYyMSA1LjY4NzA4IDMuMjM3MzEgNi4xNjIxMiAzLjIwNCA2LjY2ODhMMy4yIDYuOFYxMC40TDMuMjA1NiAxMC40OTM2QzMuMjI4NzMgMTAuNjg4IDMuMzIyMzYgMTAuODY3MiAzLjQ2ODc3IDEwLjk5NzNDMy42MTUxOCAxMS4xMjczIDMuODA0MTkgMTEuMTk5MSA0IDExLjE5OTFDNC4xOTU4MSAxMS4xOTkxIDQuMzg0ODIgMTEuMTI3MyA0LjUzMTIzIDEwLjk5NzNDNC42Nzc2NCAxMC44NjcyIDQuNzcxMjcgMTAuNjg4IDQuNzk0NCAxMC40OTM2TDQuOCAxMC40VjkuNkg1LjZWMTAuNEw1LjYwNTYgMTAuNDkzNkM1LjYyODczIDEwLjY4OCA1LjcyMjM2IDEwLjg2NzIgNS44Njg3NyAxMC45OTczQzYuMDE1MTggMTEuMTI3MyA2LjIwNDE5IDExLjE5OTEgNi40IDExLjE5OTFDNi41OTU4MSAxMS4xOTkxIDYuNzg0ODIgMTEuMTI3MyA2LjkzMTIzIDEwLjk5NzNDNy4wNzc2NCAxMC44NjcyIDcuMTcxMjcgMTAuNjg4IDcuMTk0NCAxMC40OTM2TDcuMiAxMC40VjYuOEw3LjE5NiA2LjY2ODhDNy4xNjI2OSA2LjE2MjEyIDYuOTM3OSA1LjY4NzA4IDYuNTY3MjQgNS4zNDAwM0M2LjE5NjU3IDQuOTkyOTkgNS43MDc3NyA0Ljc5OTkyIDUuMiA0LjhaTTEwLjQgNC44SDkuNkM5LjM4NzgzIDQuOCA5LjE4NDM0IDQuODg0MjkgOS4wMzQzMSA1LjAzNDMxQzguODg0MjkgNS4xODQzNCA4LjggNS4zODc4MyA4LjggNS42VjEwLjRDOC44IDEwLjYxMjIgOC44ODQyOSAxMC44MTU3IDkuMDM0MzEgMTAuOTY1N0M5LjE4NDM0IDExLjExNTcgOS4zODc4MyAxMS4yIDkuNiAxMS4ySDEwLjRDMTEuMDM2NSAxMS4yIDExLjY0NyAxMC45NDcxIDEyLjA5NzEgMTAuNDk3MUMxMi41NDcxIDEwLjA0NyAxMi44IDkuNDM2NTIgMTIuOCA4LjhWNy4yQzEyLjggNi41NjM0OCAxMi41NDcxIDUuOTUzMDMgMTIuMDk3MSA1LjUwMjk0QzExLjY0NyA1LjA1Mjg2IDExLjAzNjUgNC44IDEwLjQgNC44Wk0xMC40IDYuNEMxMC42MTIyIDYuNCAxMC44MTU3IDYuNDg0MjkgMTAuOTY1NyA2LjYzNDMxQzExLjExNTcgNi43ODQzNCAxMS4yIDYuOTg3ODMgMTEuMiA3LjJWOC44QzExLjIgOC45OTU5NSAxMS4xMjggOS4xODUwNyAxMC45OTc4IDkuMzMxNUMxMC44Njc2IDkuNDc3OTMgMTAuNjg4MiA5LjU3MTQ3IDEwLjQ5MzYgOS41OTQ0TDEwLjQgOS42VjYuNFpNNS4yIDYuNEM1LjI5MzYyIDYuMzk5OTcgNS4zODQyOSA2LjQzMjc4IDUuNDU2MjEgNi40OTI3MUM1LjUyODEzIDYuNTUyNjUgNS41NzY3NSA2LjYzNTkxIDUuNTkzNiA2LjcyOEw1LjYgNi44VjhINC44VjYuOEw0LjgwNjQgNi43MjhDNC44MjMyNSA2LjYzNTkxIDQuODcxODcgNi41NTI2NSA0Ljk0Mzc5IDYuNDkyNzFDNS4wMTU3MSA2LjQzMjc4IDUuMTA2MzggNi4zOTk5NyA1LjIgNi40WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEMxMi40MTg0IDAgMTYgMy41ODE2IDE2IDhDMTYgMTIuNDE4NCAxMi40MTg0IDE2IDggMTZDMy42NTYgMTYgMC4xMjE2IDEyLjUzODQgMC4wMDMxOTk5NiA4LjIyNEwwIDhMMC4wMDMxOTk5NiA3Ljc3NkMwLjEyMTYgMy40NjE2IDMuNjU2IDAgOCAwWk01LjIgNC44QzQuNjkyMjMgNC43OTk5MiA0LjIwMzQzIDQuOTkyOTkgMy44MzI3NiA1LjM0MDAzQzMuNDYyMSA1LjY4NzA4IDMuMjM3MzEgNi4xNjIxMiAzLjIwNCA2LjY2ODhMMy4yIDYuOFYxMC40TDMuMjA1NiAxMC40OTM2QzMuMjI4NzMgMTAuNjg4IDMuMzIyMzYgMTAuODY3MiAzLjQ2ODc3IDEwLjk5NzNDMy42MTUxOCAxMS4xMjczIDMuODA0MTkgMTEuMTk5MSA0IDExLjE5OTFDNC4xOTU4MSAxMS4xOTkxIDQuMzg0ODIgMTEuMTI3MyA0LjUzMTIzIDEwLjk5NzNDNC42Nzc2NCAxMC44NjcyIDQuNzcxMjcgMTAuNjg4IDQuNzk0NCAxMC40OTM2TDQuOCAxMC40VjkuNkg1LjZWMTAuNEw1LjYwNTYgMTAuNDkzNkM1LjYyODczIDEwLjY4OCA1LjcyMjM2IDEwLjg2NzIgNS44Njg3NyAxMC45OTczQzYuMDE1MTggMTEuMTI3MyA2LjIwNDE5IDExLjE5OTEgNi40IDExLjE5OTFDNi41OTU4MSAxMS4xOTkxIDYuNzg0ODIgMTEuMTI3MyA2LjkzMTIzIDEwLjk5NzNDNy4wNzc2NCAxMC44NjcyIDcuMTcxMjcgMTAuNjg4IDcuMTk0NCAxMC40OTM2TDcuMiAxMC40VjYuOEw3LjE5NiA2LjY2ODhDNy4xNjI2OSA2LjE2MjEyIDYuOTM3OSA1LjY4NzA4IDYuNTY3MjQgNS4zNDAwM0M2LjE5NjU3IDQuOTkyOTkgNS43MDc3NyA0Ljc5OTkyIDUuMiA0LjhaTTEwLjQgNC44SDkuNkM5LjM4NzgzIDQuOCA5LjE4NDM0IDQuODg0MjkgOS4wMzQzMSA1LjAzNDMxQzguODg0MjkgNS4xODQzNCA4LjggNS4zODc4MyA4LjggNS42VjEwLjRDOC44IDEwLjYxMjIgOC44ODQyOSAxMC44MTU3IDkuMDM0MzEgMTAuOTY1N0M5LjE4NDM0IDExLjExNTcgOS4zODc4MyAxMS4yIDkuNiAxMS4ySDEwLjRDMTEuMDM2NSAxMS4yIDExLjY0NyAxMC45NDcxIDEyLjA5NzEgMTAuNDk3MUMxMi41NDcxIDEwLjA0NyAxMi44IDkuNDM2NTIgMTIuOCA4LjhWNy4yQzEyLjggNi41NjM0OCAxMi41NDcxIDUuOTUzMDMgMTIuMDk3MSA1LjUwMjk0QzExLjY0NyA1LjA1Mjg2IDExLjAzNjUgNC44IDEwLjQgNC44Wk0xMC40IDYuNEMxMC42MTIyIDYuNCAxMC44MTU3IDYuNDg0MjkgMTAuOTY1NyA2LjYzNDMxQzExLjExNTcgNi43ODQzNCAxMS4yIDYuOTg3ODMgMTEuMiA3LjJWOC44QzExLjIgOC45OTU5NSAxMS4xMjggOS4xODUwNyAxMC45OTc4IDkuMzMxNUMxMC44Njc2IDkuNDc3OTMgMTAuNjg4MiA5LjU3MTQ3IDEwLjQ5MzYgOS41OTQ0TDEwLjQgOS42VjYuNFpNNS4yIDYuNEM1LjI5MzYyIDYuMzk5OTcgNS4zODQyOSA2LjQzMjc4IDUuNDU2MjEgNi40OTI3MUM1LjUyODEzIDYuNTUyNjUgNS41NzY3NSA2LjYzNTkxIDUuNTkzNiA2LjcyOEw1LjYgNi44VjhINC44VjYuOEw0LjgwNjQgNi43MjhDNC44MjMyNSA2LjYzNTkxIDQuODcxODcgNi41NTI2NSA0Ljk0Mzc5IDYuNDkyNzFDNS4wMTU3MSA2LjQzMjc4IDUuMTA2MzggNi4zOTk5NyA1LjIgNi40WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDcxNDMgMEM4LjExMzM1IDAgOS4xMTI2IDAuNDIxNDA4IDkuODQ5MzUgMS4xNzE1MkMxMC41ODYxIDEuOTIxNjMgMTEgMi45MzkgMTEgMy45OTk4MVYxNS4xOTkzQzExIDE1LjM0NDEgMTAuOTYxNCAxNS40ODYyIDEwLjg4ODMgMTUuNjEwNUMxMC44MTUyIDE1LjczNDcgMTAuNzEwNCAxNS44MzY0IDEwLjU4NSAxNS45MDQ4QzEwLjQ1OTUgMTUuOTczMSAxMC4zMTgyIDE2LjAwNTUgMTAuMTc2MiAxNS45OTg0QzEwLjAzNDEgMTUuOTkxNCA5Ljg5NjU0IDE1Ljk0NTIgOS43NzgyMSAxNS44NjQ5TDUuNSAxMi45NjFMMS4yMjI1NyAxNS44NjQ5QzEuMTEwNDUgMTUuOTQxMyAwLjk4MDg4NyAxNS45ODcgMC44NDYzNzIgMTUuOTk3NkMwLjcxMTg1OCAxNi4wMDgyIDAuNTc2OTIyIDE1Ljk4MzQgMC40NTQ1NiAxNS45MjU1QzAuMzMyMTk4IDE1Ljg2NzcgMC4yMjY1MzQgMTUuNzc4NyAwLjE0Nzc0NSAxNS42NjcyQzAuMDY4OTU2NSAxNS41NTU3IDAuMDE5Njk4MSAxNS40MjU0IDAuMDA0NzE0MzIgMTUuMjg4OUwwIDE1LjE5OTNWMy45OTk4MUMwIDIuOTM5IDAuNDEzOTAyIDEuOTIxNjMgMS4xNTA2NSAxLjE3MTUyQzEuODg3NCAwLjQyMTQwOCAyLjg4NjY1IDAgMy45Mjg1NyAwSDcuMDcxNDNaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDcxNDMgMEM4LjExMzM1IDAgOS4xMTI2IDAuNDIxNDA4IDkuODQ5MzUgMS4xNzE1MkMxMC41ODYxIDEuOTIxNjMgMTEgMi45MzkgMTEgMy45OTk4MVYxNS4xOTkzQzExIDE1LjM0NDEgMTAuOTYxNCAxNS40ODYyIDEwLjg4ODMgMTUuNjEwNUMxMC44MTUyIDE1LjczNDcgMTAuNzEwNCAxNS44MzY0IDEwLjU4NSAxNS45MDQ4QzEwLjQ1OTUgMTUuOTczMSAxMC4zMTgyIDE2LjAwNTUgMTAuMTc2MiAxNS45OTg0QzEwLjAzNDEgMTUuOTkxNCA5Ljg5NjU0IDE1Ljk0NTIgOS43NzgyMSAxNS44NjQ5TDUuNSAxMi45NjFMMS4yMjI1NyAxNS44NjQ5QzEuMTEwNDUgMTUuOTQxMyAwLjk4MDg4NyAxNS45ODcgMC44NDYzNzIgMTUuOTk3NkMwLjcxMTg1OCAxNi4wMDgyIDAuNTc2OTIyIDE1Ljk4MzQgMC40NTQ1NiAxNS45MjU1QzAuMzMyMTk4IDE1Ljg2NzcgMC4yMjY1MzQgMTUuNzc4NyAwLjE0Nzc0NSAxNS42NjcyQzAuMDY4OTU2NSAxNS41NTU3IDAuMDE5Njk4MSAxNS40MjU0IDAuMDA0NzE0MzIgMTUuMjg4OUwwIDE1LjE5OTNWMy45OTk4MUMwIDIuOTM5IDAuNDEzOTAyIDEuOTIxNjMgMS4xNTA2NSAxLjE3MTUyQzEuODg3NCAwLjQyMTQwOCAyLjg4NjY1IDAgMy45Mjg1NyAwSDcuMDcxNDNaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM1NCAwLjI3NTA0NkMxMi40OTMgMC4xMTUxMjggMTIuNjg5OSAwLjAxNjk2MjMgMTIuOTAxMyAwLjAwMjExODA0QzEzLjExMjcgLTAuMDEyNzI2MiAxMy4zMjE0IDAuMDU2OTY0OCAxMy40ODE1IDAuMTk1ODc5QzE0LjUxNTYgMS4wOTM2NSAxNS4zNDY2IDIuMjAxNTQgMTUuOTE4OCAzLjQ0NTcxQzE2LjAwNzUgMy42Mzg0OSAxNi4wMTU5IDMuODU4NiAxNS45NDIzIDQuMDU3NkMxNS44Njg3IDQuMjU2NjEgMTUuNzE5IDQuNDE4MjEgMTUuNTI2MiA0LjUwNjg2QzE1LjMzMzQgNC41OTU1MSAxNS4xMTMzIDQuNjAzOTUgMTQuOTE0MyA0LjUzMDMyQzE0LjcxNTMgNC40NTY2OCAxNC41NTM3IDQuMzA3MDEgMTQuNDY1MSA0LjExNDIzQzEzLjk4ODMgMy4wNzY1NiAxMy4yOTU5IDIuMTUyNDIgMTIuNDMzOSAxLjQwMzM3QzEyLjI3MzkgMS4yNjQ0IDEyLjE3NTYgMS4wNjc1OCAxMi4xNjA2IDAuODU2MTU5QzEyLjE0NTYgMC42NDQ3MzcgMTIuMjE1MSAwLjQzNTIxMiAxMi4zNTQgMC4yNzUwNDZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi41MDYyIDAuMTk1ODhDMi42NjYzMiAwLjA1Njc1MzIgMi44NzUxNSAtMC4wMTMwNjY3IDMuMDg2NzUgMC4wMDE3Nzk5NEMzLjI5ODM2IDAuMDE2NjI2NiAzLjQ5NTM5IDAuMTE0OTI0IDMuNjM0NTIgMC4yNzUwNDdDMy43NzM2NSAwLjQzNTE3IDMuODQzNDcgMC42NDQwMDMgMy44Mjg2MiAwLjg1NTYwNUMzLjgxMzc3IDEuMDY3MjEgMy43MTU0OCAxLjI2NDI0IDMuNTU1MzUgMS40MDMzN0MyLjY5MzQgMi4xNTI0MiAyLjAwMDk3IDMuMDc2NTcgMS41MjQyMSA0LjExNDIzQzEuNDgxNTkgNC4yMTE1MiAxLjQyMDAyIDQuMjk5MzUgMS4zNDMwOCA0LjM3MjU5QzEuMjY2MTUgNC40NDU4MyAxLjE3NTM5IDQuNTAzIDEuMDc2MTIgNC41NDA3OEMwLjk3Njg0NCA0LjU3ODU2IDAuODcxMDM3IDQuNTk2MTggMC43NjQ4NzcgNC41OTI2MUMwLjY1ODcxNyA0LjU4OTA0IDAuNTU0MzMyIDQuNTY0MzYgMC40NTc4MTUgNC41MjAwMUMwLjM2MTI5OSA0LjQ3NTY1IDAuMjc0NTg2IDQuNDEyNTIgMC4yMDI3NDEgNC4zMzQyOEMwLjEzMDg5NSA0LjI1NjA0IDAuMDc1MzU1NCA0LjE2NDI4IDAuMDM5MzY1NiA0LjA2NDM0QzAuMDAzMzc1NzggMy45NjQ0IC0wLjAxMjM0MzIgMy44NTgzIC0wLjAwNjg3MzY2IDMuNzUyMjJDLTAuMDAxNDA0MSAzLjY0NjE0IDAuMDI1MTQ0NSAzLjU0MjIxIDAuMDcxMjIxOCAzLjQ0NjUxQzAuNjQyNzE1IDIuMjAyMjggMS40NzI4MSAxLjA5NDEyIDIuNTA2MiAwLjE5NTg4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuNzgyMjIgMTMuNTk0MkMxMC40NzM5IDEzLjU5NDIgMTAuODM5NCAxNC40MTMxIDEwLjM3OCAxNC45MjgxQzEwLjA3ODIgMTUuMjYzNSA5LjcxMDk5IDE1LjUzMTggOS4zMDAzMiAxNS43MTUzQzguODg5NjQgMTUuODk4OSA4LjQ0NDgxIDE1Ljk5MzYgNy45OTQ5OCAxNS45OTMyQzcuNTQ1MTQgMTUuOTkzNiA3LjEwMDMxIDE1Ljg5ODkgNi42ODk2NCAxNS43MTUzQzYuMjc4OTYgMTUuNTMxOCA1LjkxMTcyIDE1LjI2MzUgNS42MTE5OCAxNC45MjgxQzUuMTcwNTcgMTQuNDM1NSA1LjQ4NTYzIDEzLjY2NTQgNi4xMTg5NyAxMy41OTk4TDYuMjA2OTMgMTMuNTk1TDkuNzgyMjIgMTMuNTk0MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03Ljk5NDk5IC0zLjgxNDdlLTA1QzkuMDgwOTQgLTMuODE0N2UtMDUgOS45OTg5NSAwLjcyMjA1NyAxMC4yOTQgMS43MTIwNEwxMC4zMzA4IDEuODQ4NzhMMTAuMzM3MiAxLjg4MzE3QzExLjIxODcgMi4zODA0OCAxMS45Njk5IDMuMDc5NTUgMTIuNTI5MyAzLjkyMzExQzEzLjA4ODYgNC43NjY2NyAxMy40NDAxIDUuNzMwNzMgMTMuNTU1IDYuNzM2MzJMMTMuNTc3NCA2Ljk2NTgyTDEzLjU5MjYgNy4xOTY5M1Y5LjU0MDc0TDEzLjYwOTQgOS42NDk0OUMxMy43MTg5IDEwLjIzODcgMTQuMDQ1IDEwLjc2NTYgMTQuNTIzNCAxMS4xMjY1TDE0LjY1NyAxMS4yMkwxNC43ODY1IDExLjI5OTJDMTUuNDc0MiAxMS42ODg2IDE1LjIzNDMgMTIuNzExNCAxNC40ODUxIDEyLjc4OThMMTQuMzkyMyAxMi43OTQ2SDEuNTk3NjlDMC43NzU2MzggMTIuNzk0NiAwLjQ4ODU1OSAxMS43MDM4IDEuMjAzNDYgMTEuMjk5MkMxLjUwODE1IDExLjEyNjggMS43NzE0MiAxMC44ODk3IDEuOTc0NzYgMTAuNjA0N0MyLjE3ODExIDEwLjMxOTggMi4zMTY2MiA5Ljk5MzcxIDIuMzgwNTYgOS42NDk0OUwyLjM5NzM1IDkuNTM1MTRMMi4zOTgxNSA3LjE2MDE0QzIuNDQ2OTEgNi4xMTU2OSAyLjc1MDkzIDUuMDk5MSAzLjI4MzYxIDQuMTk5MzdDMy44MTYyOCAzLjI5OTYzIDQuNTYxMzcgMi41NDQxNyA1LjQ1MzY2IDEuOTk5MTJMNS42NTE5OCAxLjg4MjM3TDUuNjU5OTggMS44NDc5OEM1Ljc3MzA5IDEuMzY5OCA2LjAzMDE4IDAuOTM3ODM2IDYuMzk2NTQgMC42MTAzNzRDNi43NjI4OSAwLjI4MjkxMSA3LjIyMDg5IDAuMDc1NzE3NiA3LjcwODcxIDAuMDE2NzU0N0w3Ljg1NDI1IDAuMDAzMTYwNDZMNy45OTQ5OSAtMy44MTQ3ZS0wNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM1NCAwLjI3NTA0NkMxMi40OTMgMC4xMTUxMjggMTIuNjg5OSAwLjAxNjk2MjMgMTIuOTAxMyAwLjAwMjExODA0QzEzLjExMjcgLTAuMDEyNzI2MiAxMy4zMjE0IDAuMDU2OTY0OCAxMy40ODE1IDAuMTk1ODc5QzE0LjUxNTYgMS4wOTM2NSAxNS4zNDY2IDIuMjAxNTQgMTUuOTE4OCAzLjQ0NTcxQzE2LjAwNzUgMy42Mzg0OSAxNi4wMTU5IDMuODU4NiAxNS45NDIzIDQuMDU3NkMxNS44Njg3IDQuMjU2NjEgMTUuNzE5IDQuNDE4MjEgMTUuNTI2MiA0LjUwNjg2QzE1LjMzMzQgNC41OTU1MSAxNS4xMTMzIDQuNjAzOTUgMTQuOTE0MyA0LjUzMDMyQzE0LjcxNTMgNC40NTY2OCAxNC41NTM3IDQuMzA3MDEgMTQuNDY1MSA0LjExNDIzQzEzLjk4ODMgMy4wNzY1NiAxMy4yOTU5IDIuMTUyNDIgMTIuNDMzOSAxLjQwMzM3QzEyLjI3MzkgMS4yNjQ0IDEyLjE3NTYgMS4wNjc1OCAxMi4xNjA2IDAuODU2MTU5QzEyLjE0NTYgMC42NDQ3MzcgMTIuMjE1MSAwLjQzNTIxMiAxMi4zNTQgMC4yNzUwNDZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi41MDYyIDAuMTk1ODhDMi42NjYzMiAwLjA1Njc1MzIgMi44NzUxNSAtMC4wMTMwNjY3IDMuMDg2NzUgMC4wMDE3Nzk5NEMzLjI5ODM2IDAuMDE2NjI2NiAzLjQ5NTM5IDAuMTE0OTI0IDMuNjM0NTIgMC4yNzUwNDdDMy43NzM2NSAwLjQzNTE3IDMuODQzNDcgMC42NDQwMDMgMy44Mjg2MiAwLjg1NTYwNUMzLjgxMzc3IDEuMDY3MjEgMy43MTU0OCAxLjI2NDI0IDMuNTU1MzUgMS40MDMzN0MyLjY5MzQgMi4xNTI0MiAyLjAwMDk3IDMuMDc2NTcgMS41MjQyMSA0LjExNDIzQzEuNDgxNTkgNC4yMTE1MiAxLjQyMDAyIDQuMjk5MzUgMS4zNDMwOCA0LjM3MjU5QzEuMjY2MTUgNC40NDU4MyAxLjE3NTM5IDQuNTAzIDEuMDc2MTIgNC41NDA3OEMwLjk3Njg0NCA0LjU3ODU2IDAuODcxMDM3IDQuNTk2MTggMC43NjQ4NzcgNC41OTI2MUMwLjY1ODcxNyA0LjU4OTA0IDAuNTU0MzMyIDQuNTY0MzYgMC40NTc4MTUgNC41MjAwMUMwLjM2MTI5OSA0LjQ3NTY1IDAuMjc0NTg2IDQuNDEyNTIgMC4yMDI3NDEgNC4zMzQyOEMwLjEzMDg5NSA0LjI1NjA0IDAuMDc1MzU1NCA0LjE2NDI4IDAuMDM5MzY1NiA0LjA2NDM0QzAuMDAzMzc1NzggMy45NjQ0IC0wLjAxMjM0MzIgMy44NTgzIC0wLjAwNjg3MzY2IDMuNzUyMjJDLTAuMDAxNDA0MSAzLjY0NjE0IDAuMDI1MTQ0NSAzLjU0MjIxIDAuMDcxMjIxOCAzLjQ0NjUxQzAuNjQyNzE1IDIuMjAyMjggMS40NzI4MSAxLjA5NDEyIDIuNTA2MiAwLjE5NTg4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuNzgyMjIgMTMuNTk0MkMxMC40NzM5IDEzLjU5NDIgMTAuODM5NCAxNC40MTMxIDEwLjM3OCAxNC45MjgxQzEwLjA3ODIgMTUuMjYzNSA5LjcxMDk5IDE1LjUzMTggOS4zMDAzMiAxNS43MTUzQzguODg5NjQgMTUuODk4OSA4LjQ0NDgxIDE1Ljk5MzYgNy45OTQ5OCAxNS45OTMyQzcuNTQ1MTQgMTUuOTkzNiA3LjEwMDMxIDE1Ljg5ODkgNi42ODk2NCAxNS43MTUzQzYuMjc4OTYgMTUuNTMxOCA1LjkxMTcyIDE1LjI2MzUgNS42MTE5OCAxNC45MjgxQzUuMTcwNTcgMTQuNDM1NSA1LjQ4NTYzIDEzLjY2NTQgNi4xMTg5NyAxMy41OTk4TDYuMjA2OTMgMTMuNTk1TDkuNzgyMjIgMTMuNTk0MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03Ljk5NDk5IC0zLjgxNDdlLTA1QzkuMDgwOTQgLTMuODE0N2UtMDUgOS45OTg5NSAwLjcyMjA1NyAxMC4yOTQgMS43MTIwNEwxMC4zMzA4IDEuODQ4NzhMMTAuMzM3MiAxLjg4MzE3QzExLjIxODcgMi4zODA0OCAxMS45Njk5IDMuMDc5NTUgMTIuNTI5MyAzLjkyMzExQzEzLjA4ODYgNC43NjY2NyAxMy40NDAxIDUuNzMwNzMgMTMuNTU1IDYuNzM2MzJMMTMuNTc3NCA2Ljk2NTgyTDEzLjU5MjYgNy4xOTY5M1Y5LjU0MDc0TDEzLjYwOTQgOS42NDk0OUMxMy43MTg5IDEwLjIzODcgMTQuMDQ1IDEwLjc2NTYgMTQuNTIzNCAxMS4xMjY1TDE0LjY1NyAxMS4yMkwxNC43ODY1IDExLjI5OTJDMTUuNDc0MiAxMS42ODg2IDE1LjIzNDMgMTIuNzExNCAxNC40ODUxIDEyLjc4OThMMTQuMzkyMyAxMi43OTQ2SDEuNTk3NjlDMC43NzU2MzggMTIuNzk0NiAwLjQ4ODU1OSAxMS43MDM4IDEuMjAzNDYgMTEuMjk5MkMxLjUwODE1IDExLjEyNjggMS43NzE0MiAxMC44ODk3IDEuOTc0NzYgMTAuNjA0N0MyLjE3ODExIDEwLjMxOTggMi4zMTY2MiA5Ljk5MzcxIDIuMzgwNTYgOS42NDk0OUwyLjM5NzM1IDkuNTM1MTRMMi4zOTgxNSA3LjE2MDE0QzIuNDQ2OTEgNi4xMTU2OSAyLjc1MDkzIDUuMDk5MSAzLjI4MzYxIDQuMTk5MzdDMy44MTYyOCAzLjI5OTYzIDQuNTYxMzcgMi41NDQxNyA1LjQ1MzY2IDEuOTk5MTJMNS42NTE5OCAxLjg4MjM3TDUuNjU5OTggMS44NDc5OEM1Ljc3MzA5IDEuMzY5OCA2LjAzMDE4IDAuOTM3ODM2IDYuMzk2NTQgMC42MTAzNzRDNi43NjI4OSAwLjI4MjkxMSA3LjIyMDg5IDAuMDc1NzE3NiA3LjcwODcxIDAuMDE2NzU0N0w3Ljg1NDI1IDAuMDAzMTYwNDZMNy45OTQ5OSAtMy44MTQ3ZS0wNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjAwMDEgMS4wNzIwMkMxMy4yMDY4IDEuNzY4NyAxNC4yMTA1IDIuNzY4NDQgMTQuOTEyIDMuOTcyMjZDMTUuNjEzNSA1LjE3NjA4IDE1Ljk4ODUgNi41NDIyNCAxNS45OTk3IDcuOTM1NDlDMTYuMDExIDkuMzI4NzUgMTUuNjU4MiAxMC43MDA4IDE0Ljk3NjIgMTEuOTE1OEMxNC4yOTQyIDEzLjEzMDggMTMuMzA2OCAxNC4xNDY2IDEyLjExMTUgMTQuODYyN0MxMC45MTYzIDE1LjU3ODggOS41NTQ4MSAxNS45NzAzIDguMTYxNzggMTUuOTk4NUM2Ljc2ODc1IDE2LjAyNjcgNS4zOTI1MSAxNS42OTA2IDQuMTY5MjkgMTUuMDIzNEMyLjk0NjA4IDE0LjM1NjMgMS45MTgzMiAxMy4zODEyIDEuMTg3NzUgMTIuMTk0OEMwLjQ1NzE3NSAxMS4wMDg0IDAuMDQ5MTI4IDkuNjUxNzkgMC4wMDQwMDAxNCA4LjI1OTIyTDAgOC4wMDAwMkwwLjAwNDAwMDE0IDcuNzQwODJDMC4wNDg4MDMyIDYuMzU5MjEgMC40NTA4NDQgNS4wMTI3OSAxLjE3MDkzIDMuODMyODFDMS44OTEwMSAyLjY1Mjg0IDIuOTA0NTYgMS42Nzk1OCA0LjExMjc2IDEuMDA3OTNDNS4zMjA5NyAwLjMzNjI3MSA2LjY4MjYgLTAuMDEwODYxOCA4LjA2NDkgMC4wMDAzNzEwMDhDOS40NDcyMSAwLjAxMTYwMzggMTAuODAzIDAuMzgwODE5IDEyLjAwMDEgMS4wNzIwMlpNOC4wMDAxIDMuMjAwMDJDNy44MDQxNSAzLjIwMDA1IDcuNjE1MDIgMy4yNzE5OSA3LjQ2ODU5IDMuNDAyMTlDNy4zMjIxNiAzLjUzMjQgNy4yMjg2MSAzLjcxMTgyIDcuMjA1NjkgMy45MDY0Mkw3LjIwMDA5IDQuMDAwMDJWOC4wMDAwMkw3LjIwNzI5IDguMTA0ODJDNy4yMjU1MyA4LjI0MzYyIDcuMjc5ODcgOC4zNzUyIDcuMzY0ODkgOC40ODY0Mkw3LjQzNDQ5IDguNTY2NDJMOS44MzQ1MiAxMC45NjY0TDkuOTA5NzIgMTEuMDMyQzEwLjA1IDExLjE0MDkgMTAuMjIyNiAxMS4yIDEwLjQwMDEgMTEuMkMxMC41Nzc3IDExLjIgMTAuNzUwMiAxMS4xNDA5IDEwLjg5MDUgMTEuMDMyTDEwLjk2NTcgMTAuOTY1NkwxMS4wMzIxIDEwLjg5MDRDMTEuMTQxIDEwLjc1MDEgMTEuMjAwMSAxMC41Nzc2IDExLjIwMDEgMTAuNEMxMS4yMDAxIDEwLjIyMjQgMTEuMTQxIDEwLjA0OTkgMTEuMDMyMSA5LjkwOTYyTDEwLjk2NTcgOS44MzQ0Mkw4LjgwMDExIDcuNjY4MDJWNC4wMDAwMkw4Ljc5NDUxIDMuOTA2NDJDOC43NzE1OCAzLjcxMTgyIDguNjc4MDMgMy41MzI0IDguNTMxNiAzLjQwMjE5QzguMzg1MTcgMy4yNzE5OSA4LjE5NjA1IDMuMjAwMDUgOC4wMDAxIDMuMjAwMDJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjAwMDEgMS4wNzIwMkMxMy4yMDY4IDEuNzY4NyAxNC4yMTA1IDIuNzY4NDQgMTQuOTEyIDMuOTcyMjZDMTUuNjEzNSA1LjE3NjA4IDE1Ljk4ODUgNi41NDIyNCAxNS45OTk3IDcuOTM1NDlDMTYuMDExIDkuMzI4NzUgMTUuNjU4MiAxMC43MDA4IDE0Ljk3NjIgMTEuOTE1OEMxNC4yOTQyIDEzLjEzMDggMTMuMzA2OCAxNC4xNDY2IDEyLjExMTUgMTQuODYyN0MxMC45MTYzIDE1LjU3ODggOS41NTQ4MSAxNS45NzAzIDguMTYxNzggMTUuOTk4NUM2Ljc2ODc1IDE2LjAyNjcgNS4zOTI1MSAxNS42OTA2IDQuMTY5MjkgMTUuMDIzNEMyLjk0NjA4IDE0LjM1NjMgMS45MTgzMiAxMy4zODEyIDEuMTg3NzUgMTIuMTk0OEMwLjQ1NzE3NSAxMS4wMDg0IDAuMDQ5MTI4IDkuNjUxNzkgMC4wMDQwMDAxNCA4LjI1OTIyTDAgOC4wMDAwMkwwLjAwNDAwMDE0IDcuNzQwODJDMC4wNDg4MDMyIDYuMzU5MjEgMC40NTA4NDQgNS4wMTI3OSAxLjE3MDkzIDMuODMyODFDMS44OTEwMSAyLjY1Mjg0IDIuOTA0NTYgMS42Nzk1OCA0LjExMjc2IDEuMDA3OTNDNS4zMjA5NyAwLjMzNjI3MSA2LjY4MjYgLTAuMDEwODYxOCA4LjA2NDkgMC4wMDAzNzEwMDhDOS40NDcyMSAwLjAxMTYwMzggMTAuODAzIDAuMzgwODE5IDEyLjAwMDEgMS4wNzIwMlpNOC4wMDAxIDMuMjAwMDJDNy44MDQxNSAzLjIwMDA1IDcuNjE1MDIgMy4yNzE5OSA3LjQ2ODU5IDMuNDAyMTlDNy4zMjIxNiAzLjUzMjQgNy4yMjg2MSAzLjcxMTgyIDcuMjA1NjkgMy45MDY0Mkw3LjIwMDA5IDQuMDAwMDJWOC4wMDAwMkw3LjIwNzI5IDguMTA0ODJDNy4yMjU1MyA4LjI0MzYyIDcuMjc5ODcgOC4zNzUyIDcuMzY0ODkgOC40ODY0Mkw3LjQzNDQ5IDguNTY2NDJMOS44MzQ1MiAxMC45NjY0TDkuOTA5NzIgMTEuMDMyQzEwLjA1IDExLjE0MDkgMTAuMjIyNiAxMS4yIDEwLjQwMDEgMTEuMkMxMC41Nzc3IDExLjIgMTAuNzUwMiAxMS4xNDA5IDEwLjg5MDUgMTEuMDMyTDEwLjk2NTcgMTAuOTY1NkwxMS4wMzIxIDEwLjg5MDRDMTEuMTQxIDEwLjc1MDEgMTEuMjAwMSAxMC41Nzc2IDExLjIwMDEgMTAuNEMxMS4yMDAxIDEwLjIyMjQgMTEuMTQxIDEwLjA0OTkgMTEuMDMyMSA5LjkwOTYyTDEwLjk2NTcgOS44MzQ0Mkw4LjgwMDExIDcuNjY4MDJWNC4wMDAwMkw4Ljc5NDUxIDMuOTA2NDJDOC43NzE1OCAzLjcxMTgyIDguNjc4MDMgMy41MzI0IDguNTMxNiAzLjQwMjE5QzguMzg1MTcgMy4yNzE5OSA4LjE5NjA1IDMuMjAwMDUgOC4wMDAxIDMuMjAwMDJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODQzNTggMS42ODkxOUMwLjg0MzU4IDEuNDY1OTcgMC45MzIyOTggMS4yNTE4OCAxLjA5MDIyIDEuMDk0MDNDMS4yNDgxNCAwLjkzNjE4OSAxLjQ2MjMyIDAuODQ3NTEyIDEuNjg1NjYgMC44NDc1MTJDMS42ODU4OSAwLjYzMjk4NSAxLjc2ODA4IDAuNDI2NjQ0IDEuOTE1NDEgMC4yNzA2NUMyLjA2Mjc1IDAuMTE0NjU2IDIuMjY0MTIgMC4wMjA3ODMxIDIuNDc4MzggMC4wMDgyMTA4NUMyLjY5MjY0IC0wLjAwNDM2MTQ0IDIuOTAzNjIgMC4wNjUzMTYyIDMuMDY4MiAwLjIwMzAwN0MzLjIzMjc5IDAuMzQwNjk4IDMuMzM4NTYgMC41MzYwMDkgMy4zNjM5MSAwLjc0OTAzNUwzLjM2OTgxIDAuODQ3NTEyQzMuNTg0NDMgMC44NDc3NSAzLjc5MDg3IDAuOTI5ODk1IDMuOTQ2OTQgMS4wNzcxNkM0LjEwMyAxLjIyNDQzIDQuMTk2OTIgMS40MjU3MSA0LjIwOTUgMS42Mzk4N0M0LjIyMjA4IDEuODU0MDMgNC4xNTIzNyAyLjA2NDkgNC4wMTQ2MSAyLjIyOTQxQzMuODc2ODYgMi4zOTM5MiAzLjY4MTQ1IDIuNDk5NjUgMy40NjgzMyAyLjUyNDk4TDMuMzY5ODEgMi41MzA4N0MzLjM2OTgxIDIuNzU0MSAzLjI4MTA5IDIuOTY4MTkgMy4xMjMxNyAzLjEyNjAzQzIuOTY1MjUgMy4yODM4OCAyLjc1MTA2IDMuMzcyNTYgMi41Mjc3MyAzLjM3MjU2QzIuMzA0NCAzLjM3MjU2IDIuMDkwMjEgMy4yODM4OCAxLjkzMjI5IDMuMTI2MDNDMS43NzQzNyAyLjk2ODE5IDEuNjg1NjYgMi43NTQxIDEuNjg1NjYgMi41MzA4N0MxLjQ2MjMyIDIuNTMwODcgMS4yNDgxNCAyLjQ0MjIgMS4wOTAyMiAyLjI4NDM1QzAuOTMyMjk4IDIuMTI2NTEgMC44NDM1OCAxLjkxMjQyIDAuODQzNTggMS42ODkxOVpNNy4xODQ0MSAwLjY0Mjk4M0M3LjIxMDYzIDAuNTM1MDg1IDcuMjU3OTYgMC40MzM0MzkgNy4zMjM2NiAwLjM0MzkwMkM3LjM4OTM1IDAuMjU0MzY1IDcuNDcyMTMgMC4xNzg3MDcgNy41NjcyMSAwLjEyMTI4NUM3LjY2MjI5IDAuMDYzODYzNiA3Ljc2NzggMC4wMjU4MTQgNy44Nzc2NiAwLjAwOTMyODRDNy45ODc1MiAtMC4wMDcxNTcyMyA4LjA5OTU1IC0wLjAwMTc1Mjk4IDguMjA3MzEgMC4wMjUyMjk3QzguMzE1MDcgMC4wNTIyMTI0IDguNDE2NDIgMC4xMDAyNCA4LjUwNTUzIDAuMTY2NTQ2QzguNTk0NjQgMC4yMzI4NTIgOC42Njk3NCAwLjMxNjEyNiA4LjcyNjUxIDAuNDExNTcxQzguNzgzMjcgMC41MDcwMTUgOC44MjA1OSAwLjYxMjc0MyA4LjgzNjI5IDAuNzIyNjY0QzguODUyIDAuODMyNTg2IDguODQ1OCAwLjk0NDUyNyA4LjgxODAzIDEuMDUyMDRMOC4zOTY5OSAyLjczNTRDOC4zNzA3NyAyLjg0MzMgOC4zMjM0NCAyLjk0NDk1IDguMjU3NzQgMy4wMzQ0OEM4LjE5MjA1IDMuMTI0MDIgOC4xMDkyNyAzLjE5OTY4IDguMDE0MTkgMy4yNTcxQzcuOTE5MTEgMy4zMTQ1MiA3LjgxMzYgMy4zNTI1NyA3LjcwMzc0IDMuMzY5MDZDNy41OTM4OSAzLjM4NTU0IDcuNDgxODUgMy4zODAxNCA3LjM3NDA5IDMuMzUzMTZDNy4yNjYzMyAzLjMyNjE3IDcuMTY0OTggMy4yNzgxNSA3LjA3NTg3IDMuMjExODRDNi45ODY3NiAzLjE0NTUzIDYuOTExNjYgMy4wNjIyNiA2Ljg1NDkgMi45NjY4MkM2Ljc5ODEzIDIuODcxMzcgNi43NjA4MSAyLjc2NTY0IDYuNzQ1MTEgMi42NTU3MkM2LjcyOTQgMi41NDU4IDYuNzM1NiAyLjQzMzg2IDYuNzYzMzcgMi4zMjYzNUw3LjE4NDQxIDAuNjQyOTgzWk0xMi42MzI2IDEuNjg5MTlDMTIuNjMyNiAxLjQ2NTk3IDEyLjcyMTQgMS4yNTE4OCAxMi44NzkzIDEuMDk0MDNDMTMuMDM3MiAwLjkzNjE4OSAxMy4yNTE0IDAuODQ3NTEyIDEzLjQ3NDcgMC44NDc1MTJDMTMuNDc0OSAwLjYzMjk4NSAxMy41NTcxIDAuNDI2NjQ0IDEzLjcwNDUgMC4yNzA2NUMxMy44NTE4IDAuMTE0NjU2IDE0LjA1MzIgMC4wMjA3ODMxIDE0LjI2NzQgMC4wMDgyMTA4NUMxNC40ODE3IC0wLjAwNDM2MTQ0IDE0LjY5MjcgMC4wNjUzMTYyIDE0Ljg1NzMgMC4yMDMwMDdDMTUuMDIxOCAwLjM0MDY5OCAxNS4xMjc2IDAuNTM2MDA5IDE1LjE1MyAwLjc0OTAzNUwxNS4xNTg5IDAuODQ3NTEyQzE1LjM3MzUgMC44NDc3NSAxNS41Nzk5IDAuOTI5ODk1IDE1LjczNiAxLjA3NzE2QzE1Ljg5MjEgMS4yMjQ0MyAxNS45ODYgMS40MjU3MSAxNS45OTg2IDEuNjM5ODdDMTYuMDExMSAxLjg1NDAzIDE1Ljk0MTQgMi4wNjQ5IDE1LjgwMzcgMi4yMjk0MUMxNS42NjU5IDIuMzkzOTIgMTUuNDcwNSAyLjQ5OTY1IDE1LjI1NzQgMi41MjQ5OEwxNS4xNTg5IDIuNTMwODdDMTUuMTU4OSAyLjc1NDEgMTUuMDcwMSAyLjk2ODE5IDE0LjkxMjIgMy4xMjYwM0MxNC43NTQzIDMuMjgzODggMTQuNTQwMSAzLjM3MjU2IDE0LjMxNjggMy4zNzI1NkMxNC4wOTM1IDMuMzcyNTYgMTMuODc5MyAzLjI4Mzg4IDEzLjcyMTMgMy4xMjYwM0MxMy41NjM0IDIuOTY4MTkgMTMuNDc0NyAyLjc1NDEgMTMuNDc0NyAyLjUzMDg3QzEzLjI1MTQgMi41MzA4NyAxMy4wMzcyIDIuNDQyMiAxMi44NzkzIDIuMjg0MzVDMTIuNzIxNCAyLjEyNjUxIDEyLjYzMjYgMS45MTI0MiAxMi42MzI2IDEuNjg5MTlaTTUuMjEzOTUgNS4zMDI1M0wxMC43MDE4IDEwLjc4ODZDMTAuNzk4IDEwLjg4NDYgMTAuODY5NSAxMS4wMDI0IDEwLjkxMDMgMTEuMTMyQzEwLjk1MSAxMS4yNjE3IDEwLjk1OTggMTEuMzk5MiAxMC45MzU4IDExLjUzMjlDMTAuOTExOCAxMS42NjY3IDEwLjg1NTcgMTEuNzkyNiAxMC43NzI1IDExLjlDMTAuNjg5MiAxMi4wMDc0IDEwLjU4MTEgMTIuMDkzIDEwLjQ1NzYgMTIuMTQ5NkwyLjM5NjM3IDE1Ljg0MjFDMi4wODM1MyAxNS45ODggMS43MzMzOSAxNi4wMzQzIDEuMzkzMzYgMTUuOTc0N0MxLjA1MzMyIDE1LjkxNTEgMC43Mzk4MTggMTUuNzUyNSAwLjQ5NTI5NiAxNS41MDlDMC4yNTA3NzUgMTUuMjY1NCAwLjA4NzA1IDE0Ljk1MjYgMC4wMjYyOTA4IDE0LjYxMjlDLTAuMDM0NDY4NCAxNC4yNzMyIDAuMDEwNjczOSAxMy45MjMxIDAuMTU1NjA1IDEzLjYwOTlMMy44NTIzMSA1LjU0NjYyQzMuOTA4OTYgNS40MjMyNCAzLjk5NDYyIDUuMzE1MzkgNC4xMDE5OCA1LjIzMjI3QzQuMjA5MzUgNS4xNDkxNCA0LjMzNTI0IDUuMDkzMiA0LjQ2ODkxIDUuMDY5MjJDNC42MDI1OSA1LjA0NTI0IDQuNzQwMDggNS4wNTM5NCA0Ljg2OTY2IDUuMDk0NTdDNC45OTkyNSA1LjEzNTE5IDUuMTE3OTIgNS4yMDY1NCA1LjIxMzk1IDUuMzAyNTNaTTExLjU0MyA0LjQ2MDg1QzExLjcwMDkgNC42MTg2OSAxMS43ODk1IDQuODMyNzQgMTEuNzg5NSA1LjA1NTkyQzExLjc4OTUgNS4yNzkxIDExLjcwMDkgNS40OTMxNSAxMS41NDMgNS42NTA5OUwxMC43MDA5IDYuNDkyNjdDMTAuNTQyMSA2LjY0NTk5IDEwLjMyOTQgNi43MzA4MiAxMC4xMDg2IDYuNzI4OTFDOS44ODc4MSA2LjcyNjk5IDkuNjc2NiA2LjYzODQ3IDkuNTIwNDggNi40ODI0MkM5LjM2NDM1IDYuMzI2MzYgOS4yNzU3OSA2LjExNTI2IDkuMjczODcgNS44OTQ1N0M5LjI3MTk1IDUuNjczODggOS4zNTY4MyA1LjQ2MTI3IDkuNTEwMjIgNS4zMDI1M0wxMC4zNTIzIDQuNDYwODVDMTAuNTEwMiA0LjMwMzA2IDEwLjcyNDQgNC4yMTQ0MiAxMC45NDc2IDQuMjE0NDJDMTEuMTcwOSA0LjIxNDQyIDExLjM4NTEgNC4zMDMwNiAxMS41NDMgNC40NjA4NVpNMTQuOTUzNCA3LjE4NTM3QzE1LjE2OTQgNy4xMzI5MiAxNS4zOTc0IDcuMTY3OTcgMTUuNTg3NyA3LjI4Mjg3QzE1Ljc3NzkgNy4zOTc3NyAxNS45MTUgNy41ODMyIDE1Ljk2OSA3Ljc5ODczQzE2LjAyMyA4LjAxNDI2IDE1Ljk4OTYgOC4yNDIzOSAxNS44NzYgOC40MzMzN0MxNS43NjI0IDguNjI0MzYgMTUuNTc3OSA4Ljc2MjcgMTUuMzYyNiA4LjgxODIzTDEzLjY3ODUgOS4yMzkwOEMxMy40NjI1IDkuMjkxNTMgMTMuMjM0NSA5LjI1NjQ4IDEzLjA0NDIgOS4xNDE1OEMxMi44NTQgOS4wMjY2OCAxMi43MTY5IDguODQxMjQgMTIuNjYyOSA4LjYyNTcyQzEyLjYwODggOC40MTAxOSAxMi42NDIzIDguMTgyMDYgMTIuNzU1OSA3Ljk5MTA3QzEyLjg2OTUgNy44MDAwOSAxMy4wNTQgNy42NjE3NCAxMy4yNjkyIDcuNjA2MjFMMTQuOTUzNCA3LjE4NTM3Wk0xMi42MzI2IDEzLjQ3MjdDMTIuNjMyNiAxMy4yNDk1IDEyLjcyMTQgMTMuMDM1NCAxMi44NzkzIDEyLjg3NzZDMTMuMDM3MiAxMi43MTk3IDEzLjI1MTQgMTIuNjMxMSAxMy40NzQ3IDEyLjYzMTFDMTMuNDc0OSAxMi40MTY1IDEzLjU1NzEgMTIuMjEwMiAxMy43MDQ1IDEyLjA1NDJDMTMuODUxOCAxMS44OTgyIDE0LjA1MzIgMTEuODA0MyAxNC4yNjc0IDExLjc5MThDMTQuNDgxNyAxMS43NzkyIDE0LjY5MjcgMTEuODQ4OSAxNC44NTczIDExLjk4NjVDMTUuMDIxOCAxMi4xMjQyIDE1LjEyNzYgMTIuMzE5NSAxNS4xNTMgMTIuNTMyNkwxNS4xNTg5IDEyLjYzMTFDMTUuMzczNSAxMi42MzEzIDE1LjU3OTkgMTIuNzEzNCAxNS43MzYgMTIuODYwN0MxNS44OTIxIDEzLjAwOCAxNS45ODYgMTMuMjA5MiAxNS45OTg2IDEzLjQyMzRDMTYuMDExMSAxMy42Mzc2IDE1Ljk0MTQgMTMuODQ4NCAxNS44MDM3IDE0LjAxM0MxNS42NjU5IDE0LjE3NzUgMTUuNDcwNSAxNC4yODMyIDE1LjI1NzQgMTQuMzA4NUwxNS4xNTg5IDE0LjMxNDRDMTUuMTU4OSAxNC41Mzc2IDE1LjA3MDEgMTQuNzUxNyAxNC45MTIyIDE0LjkwOTZDMTQuNzU0MyAxNS4wNjc0IDE0LjU0MDEgMTUuMTU2MSAxNC4zMTY4IDE1LjE1NjFDMTQuMDkzNSAxNS4xNTYxIDEzLjg3OTMgMTUuMDY3NCAxMy43MjEzIDE0LjkwOTZDMTMuNTYzNCAxNC43NTE3IDEzLjQ3NDcgMTQuNTM3NiAxMy40NzQ3IDE0LjMxNDRDMTMuMjUxNCAxNC4zMTQ0IDEzLjAzNzIgMTQuMjI1NyAxMi44NzkzIDE0LjA2NzlDMTIuNzIxNCAxMy45MSAxMi42MzI2IDEzLjY5NiAxMi42MzI2IDEzLjQ3MjdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODQzNTggMS42ODkxOUMwLjg0MzU4IDEuNDY1OTcgMC45MzIyOTggMS4yNTE4OCAxLjA5MDIyIDEuMDk0MDNDMS4yNDgxNCAwLjkzNjE4OSAxLjQ2MjMyIDAuODQ3NTEyIDEuNjg1NjYgMC44NDc1MTJDMS42ODU4OSAwLjYzMjk4NSAxLjc2ODA4IDAuNDI2NjQ0IDEuOTE1NDEgMC4yNzA2NUMyLjA2Mjc1IDAuMTE0NjU2IDIuMjY0MTIgMC4wMjA3ODMxIDIuNDc4MzggMC4wMDgyMTA4NUMyLjY5MjY0IC0wLjAwNDM2MTQ0IDIuOTAzNjIgMC4wNjUzMTYyIDMuMDY4MiAwLjIwMzAwN0MzLjIzMjc5IDAuMzQwNjk4IDMuMzM4NTYgMC41MzYwMDkgMy4zNjM5MSAwLjc0OTAzNUwzLjM2OTgxIDAuODQ3NTEyQzMuNTg0NDMgMC44NDc3NSAzLjc5MDg3IDAuOTI5ODk1IDMuOTQ2OTQgMS4wNzcxNkM0LjEwMyAxLjIyNDQzIDQuMTk2OTIgMS40MjU3MSA0LjIwOTUgMS42Mzk4N0M0LjIyMjA4IDEuODU0MDMgNC4xNTIzNyAyLjA2NDkgNC4wMTQ2MSAyLjIyOTQxQzMuODc2ODYgMi4zOTM5MiAzLjY4MTQ1IDIuNDk5NjUgMy40NjgzMyAyLjUyNDk4TDMuMzY5ODEgMi41MzA4N0MzLjM2OTgxIDIuNzU0MSAzLjI4MTA5IDIuOTY4MTkgMy4xMjMxNyAzLjEyNjAzQzIuOTY1MjUgMy4yODM4OCAyLjc1MTA2IDMuMzcyNTYgMi41Mjc3MyAzLjM3MjU2QzIuMzA0NCAzLjM3MjU2IDIuMDkwMjEgMy4yODM4OCAxLjkzMjI5IDMuMTI2MDNDMS43NzQzNyAyLjk2ODE5IDEuNjg1NjYgMi43NTQxIDEuNjg1NjYgMi41MzA4N0MxLjQ2MjMyIDIuNTMwODcgMS4yNDgxNCAyLjQ0MjIgMS4wOTAyMiAyLjI4NDM1QzAuOTMyMjk4IDIuMTI2NTEgMC44NDM1OCAxLjkxMjQyIDAuODQzNTggMS42ODkxOVpNNy4xODQ0MSAwLjY0Mjk4M0M3LjIxMDYzIDAuNTM1MDg1IDcuMjU3OTYgMC40MzM0MzkgNy4zMjM2NiAwLjM0MzkwMkM3LjM4OTM1IDAuMjU0MzY1IDcuNDcyMTMgMC4xNzg3MDcgNy41NjcyMSAwLjEyMTI4NUM3LjY2MjI5IDAuMDYzODYzNiA3Ljc2NzggMC4wMjU4MTQgNy44Nzc2NiAwLjAwOTMyODRDNy45ODc1MiAtMC4wMDcxNTcyMyA4LjA5OTU1IC0wLjAwMTc1Mjk4IDguMjA3MzEgMC4wMjUyMjk3QzguMzE1MDcgMC4wNTIyMTI0IDguNDE2NDIgMC4xMDAyNCA4LjUwNTUzIDAuMTY2NTQ2QzguNTk0NjQgMC4yMzI4NTIgOC42Njk3NCAwLjMxNjEyNiA4LjcyNjUxIDAuNDExNTcxQzguNzgzMjcgMC41MDcwMTUgOC44MjA1OSAwLjYxMjc0MyA4LjgzNjI5IDAuNzIyNjY0QzguODUyIDAuODMyNTg2IDguODQ1OCAwLjk0NDUyNyA4LjgxODAzIDEuMDUyMDRMOC4zOTY5OSAyLjczNTRDOC4zNzA3NyAyLjg0MzMgOC4zMjM0NCAyLjk0NDk1IDguMjU3NzQgMy4wMzQ0OEM4LjE5MjA1IDMuMTI0MDIgOC4xMDkyNyAzLjE5OTY4IDguMDE0MTkgMy4yNTcxQzcuOTE5MTEgMy4zMTQ1MiA3LjgxMzYgMy4zNTI1NyA3LjcwMzc0IDMuMzY5MDZDNy41OTM4OSAzLjM4NTU0IDcuNDgxODUgMy4zODAxNCA3LjM3NDA5IDMuMzUzMTZDNy4yNjYzMyAzLjMyNjE3IDcuMTY0OTggMy4yNzgxNSA3LjA3NTg3IDMuMjExODRDNi45ODY3NiAzLjE0NTUzIDYuOTExNjYgMy4wNjIyNiA2Ljg1NDkgMi45NjY4MkM2Ljc5ODEzIDIuODcxMzcgNi43NjA4MSAyLjc2NTY0IDYuNzQ1MTEgMi42NTU3MkM2LjcyOTQgMi41NDU4IDYuNzM1NiAyLjQzMzg2IDYuNzYzMzcgMi4zMjYzNUw3LjE4NDQxIDAuNjQyOTgzWk0xMi42MzI2IDEuNjg5MTlDMTIuNjMyNiAxLjQ2NTk3IDEyLjcyMTQgMS4yNTE4OCAxMi44NzkzIDEuMDk0MDNDMTMuMDM3MiAwLjkzNjE4OSAxMy4yNTE0IDAuODQ3NTEyIDEzLjQ3NDcgMC44NDc1MTJDMTMuNDc0OSAwLjYzMjk4NSAxMy41NTcxIDAuNDI2NjQ0IDEzLjcwNDUgMC4yNzA2NUMxMy44NTE4IDAuMTE0NjU2IDE0LjA1MzIgMC4wMjA3ODMxIDE0LjI2NzQgMC4wMDgyMTA4NUMxNC40ODE3IC0wLjAwNDM2MTQ0IDE0LjY5MjcgMC4wNjUzMTYyIDE0Ljg1NzMgMC4yMDMwMDdDMTUuMDIxOCAwLjM0MDY5OCAxNS4xMjc2IDAuNTM2MDA5IDE1LjE1MyAwLjc0OTAzNUwxNS4xNTg5IDAuODQ3NTEyQzE1LjM3MzUgMC44NDc3NSAxNS41Nzk5IDAuOTI5ODk1IDE1LjczNiAxLjA3NzE2QzE1Ljg5MjEgMS4yMjQ0MyAxNS45ODYgMS40MjU3MSAxNS45OTg2IDEuNjM5ODdDMTYuMDExMSAxLjg1NDAzIDE1Ljk0MTQgMi4wNjQ5IDE1LjgwMzcgMi4yMjk0MUMxNS42NjU5IDIuMzkzOTIgMTUuNDcwNSAyLjQ5OTY1IDE1LjI1NzQgMi41MjQ5OEwxNS4xNTg5IDIuNTMwODdDMTUuMTU4OSAyLjc1NDEgMTUuMDcwMSAyLjk2ODE5IDE0LjkxMjIgMy4xMjYwM0MxNC43NTQzIDMuMjgzODggMTQuNTQwMSAzLjM3MjU2IDE0LjMxNjggMy4zNzI1NkMxNC4wOTM1IDMuMzcyNTYgMTMuODc5MyAzLjI4Mzg4IDEzLjcyMTMgMy4xMjYwM0MxMy41NjM0IDIuOTY4MTkgMTMuNDc0NyAyLjc1NDEgMTMuNDc0NyAyLjUzMDg3QzEzLjI1MTQgMi41MzA4NyAxMy4wMzcyIDIuNDQyMiAxMi44NzkzIDIuMjg0MzVDMTIuNzIxNCAyLjEyNjUxIDEyLjYzMjYgMS45MTI0MiAxMi42MzI2IDEuNjg5MTlaTTUuMjEzOTUgNS4zMDI1M0wxMC43MDE4IDEwLjc4ODZDMTAuNzk4IDEwLjg4NDYgMTAuODY5NSAxMS4wMDI0IDEwLjkxMDMgMTEuMTMyQzEwLjk1MSAxMS4yNjE3IDEwLjk1OTggMTEuMzk5MiAxMC45MzU4IDExLjUzMjlDMTAuOTExOCAxMS42NjY3IDEwLjg1NTcgMTEuNzkyNiAxMC43NzI1IDExLjlDMTAuNjg5MiAxMi4wMDc0IDEwLjU4MTEgMTIuMDkzIDEwLjQ1NzYgMTIuMTQ5NkwyLjM5NjM3IDE1Ljg0MjFDMi4wODM1MyAxNS45ODggMS43MzMzOSAxNi4wMzQzIDEuMzkzMzYgMTUuOTc0N0MxLjA1MzMyIDE1LjkxNTEgMC43Mzk4MTggMTUuNzUyNSAwLjQ5NTI5NiAxNS41MDlDMC4yNTA3NzUgMTUuMjY1NCAwLjA4NzA1IDE0Ljk1MjYgMC4wMjYyOTA4IDE0LjYxMjlDLTAuMDM0NDY4NCAxNC4yNzMyIDAuMDEwNjczOSAxMy45MjMxIDAuMTU1NjA1IDEzLjYwOTlMMy44NTIzMSA1LjU0NjYyQzMuOTA4OTYgNS40MjMyNCAzLjk5NDYyIDUuMzE1MzkgNC4xMDE5OCA1LjIzMjI3QzQuMjA5MzUgNS4xNDkxNCA0LjMzNTI0IDUuMDkzMiA0LjQ2ODkxIDUuMDY5MjJDNC42MDI1OSA1LjA0NTI0IDQuNzQwMDggNS4wNTM5NCA0Ljg2OTY2IDUuMDk0NTdDNC45OTkyNSA1LjEzNTE5IDUuMTE3OTIgNS4yMDY1NCA1LjIxMzk1IDUuMzAyNTNaTTExLjU0MyA0LjQ2MDg1QzExLjcwMDkgNC42MTg2OSAxMS43ODk1IDQuODMyNzQgMTEuNzg5NSA1LjA1NTkyQzExLjc4OTUgNS4yNzkxIDExLjcwMDkgNS40OTMxNSAxMS41NDMgNS42NTA5OUwxMC43MDA5IDYuNDkyNjdDMTAuNTQyMSA2LjY0NTk5IDEwLjMyOTQgNi43MzA4MiAxMC4xMDg2IDYuNzI4OTFDOS44ODc4MSA2LjcyNjk5IDkuNjc2NiA2LjYzODQ3IDkuNTIwNDggNi40ODI0MkM5LjM2NDM1IDYuMzI2MzYgOS4yNzU3OSA2LjExNTI2IDkuMjczODcgNS44OTQ1N0M5LjI3MTk1IDUuNjczODggOS4zNTY4MyA1LjQ2MTI3IDkuNTEwMjIgNS4zMDI1M0wxMC4zNTIzIDQuNDYwODVDMTAuNTEwMiA0LjMwMzA2IDEwLjcyNDQgNC4yMTQ0MiAxMC45NDc2IDQuMjE0NDJDMTEuMTcwOSA0LjIxNDQyIDExLjM4NTEgNC4zMDMwNiAxMS41NDMgNC40NjA4NVpNMTQuOTUzNCA3LjE4NTM3QzE1LjE2OTQgNy4xMzI5MiAxNS4zOTc0IDcuMTY3OTcgMTUuNTg3NyA3LjI4Mjg3QzE1Ljc3NzkgNy4zOTc3NyAxNS45MTUgNy41ODMyIDE1Ljk2OSA3Ljc5ODczQzE2LjAyMyA4LjAxNDI2IDE1Ljk4OTYgOC4yNDIzOSAxNS44NzYgOC40MzMzN0MxNS43NjI0IDguNjI0MzYgMTUuNTc3OSA4Ljc2MjcgMTUuMzYyNiA4LjgxODIzTDEzLjY3ODUgOS4yMzkwOEMxMy40NjI1IDkuMjkxNTMgMTMuMjM0NSA5LjI1NjQ4IDEzLjA0NDIgOS4xNDE1OEMxMi44NTQgOS4wMjY2OCAxMi43MTY5IDguODQxMjQgMTIuNjYyOSA4LjYyNTcyQzEyLjYwODggOC40MTAxOSAxMi42NDIzIDguMTgyMDYgMTIuNzU1OSA3Ljk5MTA3QzEyLjg2OTUgNy44MDAwOSAxMy4wNTQgNy42NjE3NCAxMy4yNjkyIDcuNjA2MjFMMTQuOTUzNCA3LjE4NTM3Wk0xMi42MzI2IDEzLjQ3MjdDMTIuNjMyNiAxMy4yNDk1IDEyLjcyMTQgMTMuMDM1NCAxMi44NzkzIDEyLjg3NzZDMTMuMDM3MiAxMi43MTk3IDEzLjI1MTQgMTIuNjMxMSAxMy40NzQ3IDEyLjYzMTFDMTMuNDc0OSAxMi40MTY1IDEzLjU1NzEgMTIuMjEwMiAxMy43MDQ1IDEyLjA1NDJDMTMuODUxOCAxMS44OTgyIDE0LjA1MzIgMTEuODA0MyAxNC4yNjc0IDExLjc5MThDMTQuNDgxNyAxMS43NzkyIDE0LjY5MjcgMTEuODQ4OSAxNC44NTczIDExLjk4NjVDMTUuMDIxOCAxMi4xMjQyIDE1LjEyNzYgMTIuMzE5NSAxNS4xNTMgMTIuNTMyNkwxNS4xNTg5IDEyLjYzMTFDMTUuMzczNSAxMi42MzEzIDE1LjU3OTkgMTIuNzEzNCAxNS43MzYgMTIuODYwN0MxNS44OTIxIDEzLjAwOCAxNS45ODYgMTMuMjA5MiAxNS45OTg2IDEzLjQyMzRDMTYuMDExMSAxMy42Mzc2IDE1Ljk0MTQgMTMuODQ4NCAxNS44MDM3IDE0LjAxM0MxNS42NjU5IDE0LjE3NzUgMTUuNDcwNSAxNC4yODMyIDE1LjI1NzQgMTQuMzA4NUwxNS4xNTg5IDE0LjMxNDRDMTUuMTU4OSAxNC41Mzc2IDE1LjA3MDEgMTQuNzUxNyAxNC45MTIyIDE0LjkwOTZDMTQuNzU0MyAxNS4wNjc0IDE0LjU0MDEgMTUuMTU2MSAxNC4zMTY4IDE1LjE1NjFDMTQuMDkzNSAxNS4xNTYxIDEzLjg3OTMgMTUuMDY3NCAxMy43MjEzIDE0LjkwOTZDMTMuNTYzNCAxNC43NTE3IDEzLjQ3NDcgMTQuNTM3NiAxMy40NzQ3IDE0LjMxNDRDMTMuMjUxNCAxNC4zMTQ0IDEzLjAzNzIgMTQuMjI1NyAxMi44NzkzIDE0LjA2NzlDMTIuNzIxNCAxMy45MSAxMi42MzI2IDEzLjY5NiAxMi42MzI2IDEzLjQ3MjdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk01LjAzNDQgNi42MzQ0QzUuMTcyMTUgNi40OTY2NiA1LjM1NTQzIDYuNDEzOTEgNS41NDk4NiA2LjQwMTY5QzUuNzQ0MjggNi4zODk0NiA1LjkzNjQ4IDYuNDQ4NiA2LjA5MDQgNi41NjhMNi4xNjU2IDYuNjM0NEw4IDguNDY4TDkuODM0NCA2LjYzNDRDOS45NzIxNSA2LjQ5NjY2IDEwLjE1NTQgNi40MTM5MSAxMC4zNDk5IDYuNDAxNjlDMTAuNTQ0MyA2LjM4OTQ2IDEwLjczNjUgNi40NDg2IDEwLjg5MDQgNi41NjhMMTAuOTY1NiA2LjYzNDRDMTEuMTAzMyA2Ljc3MjE1IDExLjE4NjEgNi45NTU0MyAxMS4xOTgzIDcuMTQ5ODZDMTEuMjEwNSA3LjM0NDI4IDExLjE1MTQgNy41MzY0OCAxMS4wMzIgNy42OTA0TDEwLjk2NTYgNy43NjU2TDguNTY1NiAxMC4xNjU2QzguNDI3ODUgMTAuMzAzMyA4LjI0NDU3IDEwLjM4NjEgOC4wNTAxNSAxMC4zOTgzQzcuODU1NzIgMTAuNDEwNSA3LjY2MzUyIDEwLjM1MTQgNy41MDk2IDEwLjIzMkw3LjQzNDQgMTAuMTY1Nkw1LjAzNDQgNy43NjU2QzQuODg0NDIgNy42MTU1OCA0LjgwMDE3IDcuNDEyMTMgNC44MDAxNyA3LjJDNC44MDAxNyA2Ljk4Nzg3IDQuODg0NDIgNi43ODQ0MiA1LjAzNDQgNi42MzQ0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk01LjAzNDQgNi42MzQ0QzUuMTcyMTUgNi40OTY2NiA1LjM1NTQzIDYuNDEzOTEgNS41NDk4NiA2LjQwMTY5QzUuNzQ0MjggNi4zODk0NiA1LjkzNjQ4IDYuNDQ4NiA2LjA5MDQgNi41NjhMNi4xNjU2IDYuNjM0NEw4IDguNDY4TDkuODM0NCA2LjYzNDRDOS45NzIxNSA2LjQ5NjY2IDEwLjE1NTQgNi40MTM5MSAxMC4zNDk5IDYuNDAxNjlDMTAuNTQ0MyA2LjM4OTQ2IDEwLjczNjUgNi40NDg2IDEwLjg5MDQgNi41NjhMMTAuOTY1NiA2LjYzNDRDMTEuMTAzMyA2Ljc3MjE1IDExLjE4NjEgNi45NTU0MyAxMS4xOTgzIDcuMTQ5ODZDMTEuMjEwNSA3LjM0NDI4IDExLjE1MTQgNy41MzY0OCAxMS4wMzIgNy42OTA0TDEwLjk2NTYgNy43NjU2TDguNTY1NiAxMC4xNjU2QzguNDI3ODUgMTAuMzAzMyA4LjI0NDU3IDEwLjM4NjEgOC4wNTAxNSAxMC4zOTgzQzcuODU1NzIgMTAuNDEwNSA3LjY2MzUyIDEwLjM1MTQgNy41MDk2IDEwLjIzMkw3LjQzNDQgMTAuMTY1Nkw1LjAzNDQgNy43NjU2QzQuODg0NDIgNy42MTU1OCA0LjgwMDE3IDcuNDEyMTMgNC44MDAxNyA3LjJDNC44MDAxNyA2Ljk4Nzg3IDQuODg0NDIgNi43ODQ0MiA1LjAzNDQgNi42MzQ0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNSAwLjc2MzE0MkM0LjUgMC4wOTI3MTk4IDUuMjkyIC0wLjI1MDg3MSA1Ljc2OSAwLjIxMzA5MUM3LjIzNzUgMS42NDIzMSA4LjA5MSA0Ljc4MDM0IDcuMDgxNSA3LjE2MTFMNy4wMjE1IDcuMjkzNjZMNy4wMzA1IDcuMjk1OTRDNy40OTkyNSA3LjM5NzI3IDcuOTMyNzUgNi45NjgzNSA4Ljc1Nzc1IDUuNjQwNDZMOC44NjI3NSA1LjQ2OTgxQzguOTIzNiA1LjM3MDMgOS4wMDYyMyA1LjI4NjQgOS4xMDQyIDUuMjI0NkM5LjIwMjE3IDUuMTYyODEgOS4zMTI4NCA1LjEyNDggOS40Mjc2MyA1LjExMzUyQzkuNTQyNDEgNS4xMDIyNSA5LjY1ODIxIDUuMTE4MDEgOS43NjYwMiA1LjE1OTU5QzkuODczODMgNS4yMDExNiA5Ljk3MDc1IDUuMjY3NDMgMTAuMDQ5MyA1LjM1MzI0QzExLjA0OTggNi40NDY0OSAxMiA4LjY4NzgzIDEyIDEwLjEzQzEyIDEzLjM3OTMgOS4zMDY3NSAxNiA2IDE2QzIuNjkzMjUgMTYgMCAxMy4zNzkzIDAgMTAuMTI5MkMwIDguNDEzNTcgMC43NjY1IDYuNTM2MzkgMS45NzQgNS4zMjg4N0wyLjQyNzc1IDQuODgwMTRDMi42MDg1IDQuNzAwMzUgMi43NTMyNSA0LjU1MjU1IDIuODkxMjUgNC40MDQ3NUMzLjk2Mzc1IDMuMjUyODQgNC41IDIuMTc3MTIgNC41IDAuNzYzMTQyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNSAwLjc2MzE0MkM0LjUgMC4wOTI3MTk4IDUuMjkyIC0wLjI1MDg3MSA1Ljc2OSAwLjIxMzA5MUM3LjIzNzUgMS42NDIzMSA4LjA5MSA0Ljc4MDM0IDcuMDgxNSA3LjE2MTFMNy4wMjE1IDcuMjkzNjZMNy4wMzA1IDcuMjk1OTRDNy40OTkyNSA3LjM5NzI3IDcuOTMyNzUgNi45NjgzNSA4Ljc1Nzc1IDUuNjQwNDZMOC44NjI3NSA1LjQ2OTgxQzguOTIzNiA1LjM3MDMgOS4wMDYyMyA1LjI4NjQgOS4xMDQyIDUuMjI0NkM5LjIwMjE3IDUuMTYyODEgOS4zMTI4NCA1LjEyNDggOS40Mjc2MyA1LjExMzUyQzkuNTQyNDEgNS4xMDIyNSA5LjY1ODIxIDUuMTE4MDEgOS43NjYwMiA1LjE1OTU5QzkuODczODMgNS4yMDExNiA5Ljk3MDc1IDUuMjY3NDMgMTAuMDQ5MyA1LjM1MzI0QzExLjA0OTggNi40NDY0OSAxMiA4LjY4NzgzIDEyIDEwLjEzQzEyIDEzLjM3OTMgOS4zMDY3NSAxNiA2IDE2QzIuNjkzMjUgMTYgMCAxMy4zNzkzIDAgMTAuMTI5MkMwIDguNDEzNTcgMC43NjY1IDYuNTM2MzkgMS45NzQgNS4zMjg4N0wyLjQyNzc1IDQuODgwMTRDMi42MDg1IDQuNzAwMzUgMi43NTMyNSA0LjU1MjU1IDIuODkxMjUgNC40MDQ3NUMzLjk2Mzc1IDMuMjUyODQgNC41IDIuMTc3MTIgNC41IDAuNzYzMTQyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjg1MTcgMC40NDE1NTJDNy4zNTE2OCAwLjMwODg0NSA3LjQ1MzggMC4xOTcyNiA3LjU4MDEgMC4xMTkyOEM3LjcwNjQgMC4wNDEzMDAxIDcuODUxOTEgMCA4LjAwMDM0IDBDOC4xNDg3OCAwIDguMjk0MjggMC4wNDEzMDAxIDguNDIwNTkgMC4xMTkyOEM4LjU0Njg5IDAuMTk3MjYgOC42NDkwMSAwLjMwODg0NSA4LjcxNTUxIDAuNDQxNTUyTDEwLjk5NjIgNS4wMDI0MUwxNS41NTc2IDcuMjg0MDRDMTUuNjgyOCA3LjM0NjYgMTUuNzg5NCA3LjQ0MDkxIDE1Ljg2NjcgNy41NTc1NUMxNS45NDQxIDcuNjc0MTkgMTUuOTg5NSA3LjgwOTA4IDE1Ljk5ODQgNy45NDg3NUMxNi4wMDczIDguMDg4NDEgMTUuOTc5NCA4LjIyNzk3IDE1LjkxNzUgOC4zNTM0OUMxNS44NTU2IDguNDc5MDEgMTUuNzYxOSA4LjU4NjEgMTUuNjQ1NiA4LjY2NDA2TDE1LjU1NzYgOC43MTQ0NkwxMC45OTYyIDEwLjk5NTNMOC43MTYzMiAxNS41NTY5QzguNjUzODEgMTUuNjgyMyA4LjU1OTQ5IDE1Ljc4OTEgOC40NDI3OCAxNS44NjY1QzguMzI2MDcgMTUuOTQ0IDguMTkxMDYgMTUuOTg5NSA4LjA1MTI3IDE1Ljk5ODRDNy45MTE0NyAxNi4wMDczIDcuNzcxNzkgMTUuOTc5MyA3LjY0NjE5IDE1LjkxNzNDNy41MjA1OSAxNS44NTUzIDcuNDEzNDggMTUuNzYxNCA3LjMzNTU3IDE1LjY0NDlMNy4yODUxNyAxNS41NTY5TDUuMDAzNjYgMTAuOTk1M0wwLjQ0MzAzNiA4LjcxNTI2QzAuMzE3NjczIDguNjUyNzUgMC4yMTA5MiA4LjU1ODQyIDAuMTMzNDU1IDguNDQxNzFDMC4wNTU5OTAxIDguMzI0OTkgMC4wMTA1MjkyIDguMTg5OTggMC4wMDE2MTk4OCA4LjA1MDE4Qy0wLjAwNzI4OTQ0IDcuOTEwMzcgMC4wMjA2NjUyIDcuNzcwNjggMC4wODI2ODc0IDcuNjQ1MDhDMC4xNDQ3MSA3LjUxOTQ3IDAuMjM4NjI1IDcuNDEyMzUgMC4zNTUwMzkgNy4zMzQ0NEwwLjQ0MzAzNiA3LjI4NDA0TDUuMDAzNjYgNS4wMDI0MUw3LjI4NTE3IDAuNDQxNTUyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjg1MTcgMC40NDE1NTJDNy4zNTE2OCAwLjMwODg0NSA3LjQ1MzggMC4xOTcyNiA3LjU4MDEgMC4xMTkyOEM3LjcwNjQgMC4wNDEzMDAxIDcuODUxOTEgMCA4LjAwMDM0IDBDOC4xNDg3OCAwIDguMjk0MjggMC4wNDEzMDAxIDguNDIwNTkgMC4xMTkyOEM4LjU0Njg5IDAuMTk3MjYgOC42NDkwMSAwLjMwODg0NSA4LjcxNTUxIDAuNDQxNTUyTDEwLjk5NjIgNS4wMDI0MUwxNS41NTc2IDcuMjg0MDRDMTUuNjgyOCA3LjM0NjYgMTUuNzg5NCA3LjQ0MDkxIDE1Ljg2NjcgNy41NTc1NUMxNS45NDQxIDcuNjc0MTkgMTUuOTg5NSA3LjgwOTA4IDE1Ljk5ODQgNy45NDg3NUMxNi4wMDczIDguMDg4NDEgMTUuOTc5NCA4LjIyNzk3IDE1LjkxNzUgOC4zNTM0OUMxNS44NTU2IDguNDc5MDEgMTUuNzYxOSA4LjU4NjEgMTUuNjQ1NiA4LjY2NDA2TDE1LjU1NzYgOC43MTQ0NkwxMC45OTYyIDEwLjk5NTNMOC43MTYzMiAxNS41NTY5QzguNjUzODEgMTUuNjgyMyA4LjU1OTQ5IDE1Ljc4OTEgOC40NDI3OCAxNS44NjY1QzguMzI2MDcgMTUuOTQ0IDguMTkxMDYgMTUuOTg5NSA4LjA1MTI3IDE1Ljk5ODRDNy45MTE0NyAxNi4wMDczIDcuNzcxNzkgMTUuOTc5MyA3LjY0NjE5IDE1LjkxNzNDNy41MjA1OSAxNS44NTUzIDcuNDEzNDggMTUuNzYxNCA3LjMzNTU3IDE1LjY0NDlMNy4yODUxNyAxNS41NTY5TDUuMDAzNjYgMTAuOTk1M0wwLjQ0MzAzNiA4LjcxNTI2QzAuMzE3NjczIDguNjUyNzUgMC4yMTA5MiA4LjU1ODQyIDAuMTMzNDU1IDguNDQxNzFDMC4wNTU5OTAxIDguMzI0OTkgMC4wMTA1MjkyIDguMTg5OTggMC4wMDE2MTk4OCA4LjA1MDE4Qy0wLjAwNzI4OTQ0IDcuOTEwMzcgMC4wMjA2NjUyIDcuNzcwNjggMC4wODI2ODc0IDcuNjQ1MDhDMC4xNDQ3MSA3LjUxOTQ3IDAuMjM4NjI1IDcuNDEyMzUgMC4zNTUwMzkgNy4zMzQ0NEwwLjQ0MzAzNiA3LjI4NDA0TDUuMDAzNjYgNS4wMDI0MUw3LjI4NTE3IDAuNDQxNTUyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMiA5LjYwMDE5VjE2SDRDMy4zNjM0OCAxNiAyLjc1MzAzIDE1Ljc0NzIgMi4zMDI5NCAxNS4yOTcxQzEuODUyODYgMTQuODQ3IDEuNiAxNC4yMzY2IDEuNiAxMy42MDAxVjEwLjQwMDJDMS42IDEwLjE4OCAxLjY4NDI5IDkuOTg0NTIgMS44MzQzMSA5LjgzNDVDMS45ODQzNCA5LjY4NDQ3IDIuMTg3ODMgOS42MDAxOSAyLjQgOS42MDAxOUg3LjJaTTEzLjYgOS42MDAxOUMxMy44MTIyIDkuNjAwMTkgMTQuMDE1NyA5LjY4NDQ3IDE0LjE2NTcgOS44MzQ1QzE0LjMxNTcgOS45ODQ1MiAxNC40IDEwLjE4OCAxNC40IDEwLjQwMDJWMTMuNjAwMUMxNC40IDE0LjIzNjYgMTQuMTQ3MSAxNC44NDcgMTMuNjk3MSAxNS4yOTcxQzEzLjI0NyAxNS43NDcyIDEyLjYzNjUgMTYgMTIgMTZIOC44VjkuNjAwMTlIMTMuNlpNMTEuNiAwLjAwMDQ2OTUwMkMxMi4wNzI0IDAuMDAwMzcyMDAzIDEyLjUzNzIgMC4xMTk3OTkgMTIuOTUxIDAuMzQ3NjM0QzEzLjM2NDggMC41NzU0NjggMTMuNzE0MyAwLjkwNDMwMiAxMy45NjY5IDEuMzAzNTJDMTQuMjE5NCAxLjcwMjc1IDE0LjM2NjggMi4xNTkzOCAxNC4zOTU0IDIuNjMwOTFDMTQuNDI0IDMuMTAyNDQgMTQuMzMyOSAzLjU3MzU0IDE0LjEzMDQgNC4wMDAzNUgxNC40QzE0LjgyNDMgNC4wMDAzNSAxNS4yMzEzIDQuMTY4OTIgMTUuNTMxNCA0LjQ2ODk3QzE1LjgzMTQgNC43NjkwMiAxNiA1LjE3NTk3IDE2IDUuNjAwMzFWNi40MDAyOEMxNiA2LjgyNDYyIDE1LjgzMTQgNy4yMzE1NyAxNS41MzE0IDcuNTMxNjJDMTUuMjMxMyA3LjgzMTY3IDE0LjgyNDMgOC4wMDAyMyAxNC40IDguMDAwMjNIOC44VjQuMDAwMzVINy4yVjguMDAwMjNIMS42QzEuMTc1NjUgOC4wMDAyMyAwLjc2ODY4NyA3LjgzMTY3IDAuNDY4NjI5IDcuNTMxNjJDMC4xNjg1NzEgNy4yMzE1NyAwIDYuODI0NjIgMCA2LjQwMDI4VjUuNjAwMzFDMCA1LjE3NTk3IDAuMTY4NTcxIDQuNzY5MDIgMC40Njg2MjkgNC40Njg5N0MwLjc2ODY4NyA0LjE2ODkyIDEuMTc1NjUgNC4wMDAzNSAxLjYgNC4wMDAzNUgxLjg2OTZDMS42OTE1NSAzLjYyNTQxIDEuNTk5NDQgMy4yMTU0NSAxLjYgMi44MDAzOUMxLjYgMS4yNTQwMyAyLjg1MzYgMC4wMDA0Njk1MDIgNC4zODY0IDAuMDAwNDY5NTAyQzUuNzkwNCAtMC4wMjM1Mjk4IDcuMDM2IDAuODc0MDQ0IDcuODkxMiAyLjM0NzZMOCAyLjU0MkM4LjgyNjQgMS4wMTA4NCAxMC4wNDggMC4wNTA4NjgxIDExLjQzMjggMC4wMDIwNjk1M0wxMS42IDAuMDAwNDY5NTAyWk00LjQgMS42MDA0MkM0LjA4MTc0IDEuNjAwNDIgMy43NzY1MiAxLjcyNjg1IDMuNTUxNDcgMS45NTE4OEMzLjMyNjQzIDIuMTc2OTIgMy4yIDIuNDgyMTQgMy4yIDIuODAwMzlDMy4yIDMuMTE4NjQgMy4zMjY0MyAzLjQyMzg1IDMuNTUxNDcgMy42NDg4OUMzLjc3NjUyIDMuODczOTMgNC4wODE3NCA0LjAwMDM1IDQuNCA0LjAwMDM1SDYuOTE0NEM2LjMyMTYgMi40NzY0IDUuMzU1MiAxLjU4NDQyIDQuNCAxLjYwMDQyWk0xMS41ODY0IDEuNjAwNDJDMTAuNjQyNCAxLjU4NDQyIDkuNjc4NCAyLjQ3NzIgOS4wODU2IDQuMDAwMzVIMTEuNkMxMS45MTgzIDMuOTk4NTUgMTIuMjIyOCAzLjg3MDM5IDEyLjQ0NjUgMy42NDQwOEMxMi42NzAzIDMuNDE3NzcgMTIuNzk1IDMuMTExODQgMTIuNzkzMiAyLjc5MzU5QzEyLjc5MTQgMi40NzUzNCAxMi42NjMyIDIuMTcwODQgMTIuNDM2OSAxLjk0NzA4QzEyLjIxMDYgMS43MjMzMSAxMS45MDQ3IDEuNTk4NjIgMTEuNTg2NCAxLjYwMDQyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMiA5LjYwMDE5VjE2SDRDMy4zNjM0OCAxNiAyLjc1MzAzIDE1Ljc0NzIgMi4zMDI5NCAxNS4yOTcxQzEuODUyODYgMTQuODQ3IDEuNiAxNC4yMzY2IDEuNiAxMy42MDAxVjEwLjQwMDJDMS42IDEwLjE4OCAxLjY4NDI5IDkuOTg0NTIgMS44MzQzMSA5LjgzNDVDMS45ODQzNCA5LjY4NDQ3IDIuMTg3ODMgOS42MDAxOSAyLjQgOS42MDAxOUg3LjJaTTEzLjYgOS42MDAxOUMxMy44MTIyIDkuNjAwMTkgMTQuMDE1NyA5LjY4NDQ3IDE0LjE2NTcgOS44MzQ1QzE0LjMxNTcgOS45ODQ1MiAxNC40IDEwLjE4OCAxNC40IDEwLjQwMDJWMTMuNjAwMUMxNC40IDE0LjIzNjYgMTQuMTQ3MSAxNC44NDcgMTMuNjk3MSAxNS4yOTcxQzEzLjI0NyAxNS43NDcyIDEyLjYzNjUgMTYgMTIgMTZIOC44VjkuNjAwMTlIMTMuNlpNMTEuNiAwLjAwMDQ2OTUwMkMxMi4wNzI0IDAuMDAwMzcyMDAzIDEyLjUzNzIgMC4xMTk3OTkgMTIuOTUxIDAuMzQ3NjM0QzEzLjM2NDggMC41NzU0NjggMTMuNzE0MyAwLjkwNDMwMiAxMy45NjY5IDEuMzAzNTJDMTQuMjE5NCAxLjcwMjc1IDE0LjM2NjggMi4xNTkzOCAxNC4zOTU0IDIuNjMwOTFDMTQuNDI0IDMuMTAyNDQgMTQuMzMyOSAzLjU3MzU0IDE0LjEzMDQgNC4wMDAzNUgxNC40QzE0LjgyNDMgNC4wMDAzNSAxNS4yMzEzIDQuMTY4OTIgMTUuNTMxNCA0LjQ2ODk3QzE1LjgzMTQgNC43NjkwMiAxNiA1LjE3NTk3IDE2IDUuNjAwMzFWNi40MDAyOEMxNiA2LjgyNDYyIDE1LjgzMTQgNy4yMzE1NyAxNS41MzE0IDcuNTMxNjJDMTUuMjMxMyA3LjgzMTY3IDE0LjgyNDMgOC4wMDAyMyAxNC40IDguMDAwMjNIOC44VjQuMDAwMzVINy4yVjguMDAwMjNIMS42QzEuMTc1NjUgOC4wMDAyMyAwLjc2ODY4NyA3LjgzMTY3IDAuNDY4NjI5IDcuNTMxNjJDMC4xNjg1NzEgNy4yMzE1NyAwIDYuODI0NjIgMCA2LjQwMDI4VjUuNjAwMzFDMCA1LjE3NTk3IDAuMTY4NTcxIDQuNzY5MDIgMC40Njg2MjkgNC40Njg5N0MwLjc2ODY4NyA0LjE2ODkyIDEuMTc1NjUgNC4wMDAzNSAxLjYgNC4wMDAzNUgxLjg2OTZDMS42OTE1NSAzLjYyNTQxIDEuNTk5NDQgMy4yMTU0NSAxLjYgMi44MDAzOUMxLjYgMS4yNTQwMyAyLjg1MzYgMC4wMDA0Njk1MDIgNC4zODY0IDAuMDAwNDY5NTAyQzUuNzkwNCAtMC4wMjM1Mjk4IDcuMDM2IDAuODc0MDQ0IDcuODkxMiAyLjM0NzZMOCAyLjU0MkM4LjgyNjQgMS4wMTA4NCAxMC4wNDggMC4wNTA4NjgxIDExLjQzMjggMC4wMDIwNjk1M0wxMS42IDAuMDAwNDY5NTAyWk00LjQgMS42MDA0MkM0LjA4MTc0IDEuNjAwNDIgMy43NzY1MiAxLjcyNjg1IDMuNTUxNDcgMS45NTE4OEMzLjMyNjQzIDIuMTc2OTIgMy4yIDIuNDgyMTQgMy4yIDIuODAwMzlDMy4yIDMuMTE4NjQgMy4zMjY0MyAzLjQyMzg1IDMuNTUxNDcgMy42NDg4OUMzLjc3NjUyIDMuODczOTMgNC4wODE3NCA0LjAwMDM1IDQuNCA0LjAwMDM1SDYuOTE0NEM2LjMyMTYgMi40NzY0IDUuMzU1MiAxLjU4NDQyIDQuNCAxLjYwMDQyWk0xMS41ODY0IDEuNjAwNDJDMTAuNjQyNCAxLjU4NDQyIDkuNjc4NCAyLjQ3NzIgOS4wODU2IDQuMDAwMzVIMTEuNkMxMS45MTgzIDMuOTk4NTUgMTIuMjIyOCAzLjg3MDM5IDEyLjQ0NjUgMy42NDQwOEMxMi42NzAzIDMuNDE3NzcgMTIuNzk1IDMuMTExODQgMTIuNzkzMiAyLjc5MzU5QzEyLjc5MTQgMi40NzUzNCAxMi42NjMyIDIuMTcwODQgMTIuNDM2OSAxLjk0NzA4QzEyLjIxMDYgMS43MjMzMSAxMS45MDQ3IDEuNTk4NjIgMTEuNTg2NCAxLjYwMDQyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEuMDcyMDFDMTMuMjE2MiAxLjc3NDE2IDE0LjIyNjEgMi43ODQwNiAxNC45MjgyIDQuMDAwMjJDMTUuNjMwNCA1LjIxNjM3IDE2IDYuNTk1OTIgMTYgOC4wMDAyMkMxNiA5LjQwNDUxIDE1LjYzMDMgMTAuNzg0MSAxNC45MjgyIDEyLjAwMDJDMTQuMjI2IDEzLjIxNjMgMTMuMjE2MSAxNC4yMjYyIDExLjk5OTkgMTQuOTI4NEMxMC43ODM3IDE1LjYzMDUgOS40MDQxOCAxNi4wMDAxIDcuOTk5ODcgMTYuMDAwMUM2LjU5NTU3IDE2LjAwMDEgNS4yMTYwMiAxNS42MzA0IDMuOTk5ODcgMTQuOTI4MkMyLjc4MzcyIDE0LjIyNjEgMS43NzM4MyAxMy4yMTYxIDEuMDcxNzEgMTJDMC4zNjk1ODQgMTAuNzgzOCAtMy41NjcxN2UtMDUgOS40MDQyNSAyLjU4MjEyZS0wOSA3Ljk5OTk2TDAuMDA0MDAwMDkgNy43NDA3NkMwLjA0ODgwMjYgNi4zNTkxNyAwLjQ1MDgzOCA1LjAxMjc1IDEuMTcwOTEgMy44MzI3OUMxLjg5MDk5IDIuNjUyODIgMi45MDQ1MiAxLjY3OTU3IDQuMTEyNzEgMS4wMDc5MkM1LjMyMDkgMC4zMzYyNjkgNi42ODI1MiAtMC4wMTA4NjE3IDguMDY0OCAwLjAwMDM3MTAwNkM5LjQ0NzA5IDAuMDExNjAzNyAxMC44MDI5IDAuMzgwODE2IDEyIDEuMDcyMDFaTTExLjkzMTIgNS4xMjQ3OEMxMi4yMjg4IDQuNDU1MTkgMTEuNTQ0OCAzLjc3MTE5IDEwLjg3NTIgNC4wNjg3OUwzLjY3NTIgNy4yNjg3N0wzLjU4ODggNy4zMTI3N0MyLjk4ODggNy42NjQ3NiAzLjEgOC41OTk5NiAzLjgwNTYgOC43NzY3Nkw2LjU0IDkuNDU5MTVMNy4yMjQgMTIuMTk0M0M3LjQwOCAxMi45MzE5IDguNDIyNCAxMy4wMTk5IDguNzMxMiAxMi4zMjQ3TDExLjkzMTIgNS4xMjQ3OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEuMDcyMDFDMTMuMjE2MiAxLjc3NDE2IDE0LjIyNjEgMi43ODQwNiAxNC45MjgyIDQuMDAwMjJDMTUuNjMwNCA1LjIxNjM3IDE2IDYuNTk1OTIgMTYgOC4wMDAyMkMxNiA5LjQwNDUxIDE1LjYzMDMgMTAuNzg0MSAxNC45MjgyIDEyLjAwMDJDMTQuMjI2IDEzLjIxNjMgMTMuMjE2MSAxNC4yMjYyIDExLjk5OTkgMTQuOTI4NEMxMC43ODM3IDE1LjYzMDUgOS40MDQxOCAxNi4wMDAxIDcuOTk5ODcgMTYuMDAwMUM2LjU5NTU3IDE2LjAwMDEgNS4yMTYwMiAxNS42MzA0IDMuOTk5ODcgMTQuOTI4MkMyLjc4MzcyIDE0LjIyNjEgMS43NzM4MyAxMy4yMTYxIDEuMDcxNzEgMTJDMC4zNjk1ODQgMTAuNzgzOCAtMy41NjcxN2UtMDUgOS40MDQyNSAyLjU4MjEyZS0wOSA3Ljk5OTk2TDAuMDA0MDAwMDkgNy43NDA3NkMwLjA0ODgwMjYgNi4zNTkxNyAwLjQ1MDgzOCA1LjAxMjc1IDEuMTcwOTEgMy44MzI3OUMxLjg5MDk5IDIuNjUyODIgMi45MDQ1MiAxLjY3OTU3IDQuMTEyNzEgMS4wMDc5MkM1LjMyMDkgMC4zMzYyNjkgNi42ODI1MiAtMC4wMTA4NjE3IDguMDY0OCAwLjAwMDM3MTAwNkM5LjQ0NzA5IDAuMDExNjAzNyAxMC44MDI5IDAuMzgwODE2IDEyIDEuMDcyMDFaTTExLjkzMTIgNS4xMjQ3OEMxMi4yMjg4IDQuNDU1MTkgMTEuNTQ0OCAzLjc3MTE5IDEwLjg3NTIgNC4wNjg3OUwzLjY3NTIgNy4yNjg3N0wzLjU4ODggNy4zMTI3N0MyLjk4ODggNy42NjQ3NiAzLjEgOC41OTk5NiAzLjgwNTYgOC43NzY3Nkw2LjU0IDkuNDU5MTVMNy4yMjQgMTIuMTk0M0M3LjQwOCAxMi45MzE5IDguNDIyNCAxMy4wMTk5IDguNzMxMiAxMi4zMjQ3TDExLjkzMTIgNS4xMjQ3OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuOTkxNjcgMC4wNjYyNTc0QzQuNjk5NCAtMC4wNTA5NTggNS40MjUxNyAtMC4wMTIyOTE1IDYuMTE1NDkgMC4xNzk0MDdDNi44MDU4IDAuMzcxMTA1IDcuNDQzMDYgMC43MTA5NDcgNy45ODAyOCAxLjE3Mzg4TDguMDA5ODcgMS4xOTk1M0w4LjAzNzA2IDEuMTc2MjJDOC41NDk3OSAwLjczODgzNiA5LjE1MjU3IDAuNDEyNzY2IDkuODA1MjEgMC4yMTk3NTdDMTAuNDU3OCAwLjAyNjc0NzkgMTEuMTQ1MyAtMC4wMjg3NjIxIDExLjgyMTggMC4wNTY5MzAxTDEyLjAxODUgMC4wODQ5MTIzQzEyLjg3MTEgMC4yMjgwMTcgMTMuNjY4MSAwLjU5MjU5OCAxNC4zMjUgMS4xNDAwNUMxNC45ODE5IDEuNjg3NSAxNS40NzQzIDIuMzk3NDQgMTUuNzUgMy4xOTQ2OUMxNi4wMjU2IDMuOTkxOTMgMTYuMDc0NCA0Ljg0NjgyIDE1Ljg5MTEgNS42Njg4QzE1LjcwNzcgNi40OTA3OCAxNS4yOTkxIDcuMjQ5MjcgMTQuNzA4NSA3Ljg2Mzk0TDE0LjU2NDUgOC4wMDc3NEwxNC41MjYxIDguMDM5NjFMOC41Njg4MiAxMy43NzUyQzguNDMxMzQgMTMuOTA3NCA4LjI0OTIgMTMuOTg2OCA4LjA1NjE1IDEzLjk5ODVDNy44NjMxIDE0LjAxMDIgNy42NzIyMyAxMy45NTM1IDcuNTE4ODkgMTMuODM4OUw3LjQ0MzcyIDEzLjc3NTJMMS40NTIwMSA4LjAwNjE5QzAuODE3MjY3IDcuNDA1ODYgMC4zNjU4NTQgNi42NDY0NyAwLjE0Nzc1OSA1LjgxMjEzQy0wLjA3MDMzNjIgNC45Nzc3OCAtMC4wNDY2MDA3IDQuMTAxMDQgMC4yMTYzMzYgMy4yNzkwMUMwLjQ3OTI3MyAyLjQ1Njk3IDAuOTcxMTUgMS43MjE3MSAxLjYzNzQ5IDEuMTU0NjZDMi4zMDM4NCAwLjU4NzYxNSAzLjExODY0IDAuMjEwOTA3IDMuOTkxNjcgMC4wNjYyNTc0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuOTkxNjcgMC4wNjYyNTc0QzQuNjk5NCAtMC4wNTA5NTggNS40MjUxNyAtMC4wMTIyOTE1IDYuMTE1NDkgMC4xNzk0MDdDNi44MDU4IDAuMzcxMTA1IDcuNDQzMDYgMC43MTA5NDcgNy45ODAyOCAxLjE3Mzg4TDguMDA5ODcgMS4xOTk1M0w4LjAzNzA2IDEuMTc2MjJDOC41NDk3OSAwLjczODgzNiA5LjE1MjU3IDAuNDEyNzY2IDkuODA1MjEgMC4yMTk3NTdDMTAuNDU3OCAwLjAyNjc0NzkgMTEuMTQ1MyAtMC4wMjg3NjIxIDExLjgyMTggMC4wNTY5MzAxTDEyLjAxODUgMC4wODQ5MTIzQzEyLjg3MTEgMC4yMjgwMTcgMTMuNjY4MSAwLjU5MjU5OCAxNC4zMjUgMS4xNDAwNUMxNC45ODE5IDEuNjg3NSAxNS40NzQzIDIuMzk3NDQgMTUuNzUgMy4xOTQ2OUMxNi4wMjU2IDMuOTkxOTMgMTYuMDc0NCA0Ljg0NjgyIDE1Ljg5MTEgNS42Njg4QzE1LjcwNzcgNi40OTA3OCAxNS4yOTkxIDcuMjQ5MjcgMTQuNzA4NSA3Ljg2Mzk0TDE0LjU2NDUgOC4wMDc3NEwxNC41MjYxIDguMDM5NjFMOC41Njg4MiAxMy43NzUyQzguNDMxMzQgMTMuOTA3NCA4LjI0OTIgMTMuOTg2OCA4LjA1NjE1IDEzLjk5ODVDNy44NjMxIDE0LjAxMDIgNy42NzIyMyAxMy45NTM1IDcuNTE4ODkgMTMuODM4OUw3LjQ0MzcyIDEzLjc3NTJMMS40NTIwMSA4LjAwNjE5QzAuODE3MjY3IDcuNDA1ODYgMC4zNjU4NTQgNi42NDY0NyAwLjE0Nzc1OSA1LjgxMjEzQy0wLjA3MDMzNjIgNC45Nzc3OCAtMC4wNDY2MDA3IDQuMTAxMDQgMC4yMTYzMzYgMy4yNzkwMUMwLjQ3OTI3MyAyLjQ1Njk3IDAuOTcxMTUgMS43MjE3MSAxLjYzNzQ5IDEuMTU0NjZDMi4zMDM4NCAwLjU4NzYxNSAzLjExODY0IDAuMjEwOTA3IDMuOTkxNjcgMC4wNjYyNTc0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 130, 171);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTY1NDEgMC4yMzQyMzJMMTUuNzY0MSA3LjQzNDMxQzE2LjI2OCA3LjkzODMxIDE1LjkxMTIgOC43OTk5MiAxNS4xOTg2IDguNzk5OTJIMTQuMzk4N1YxMy42QzE0LjM5ODcgMTQuMjM2NSAxNC4xNDU5IDE0Ljg0NyAxMy42OTU5IDE1LjI5N0MxMy4yNDU5IDE1Ljc0NzEgMTIuNjM1NiAxNiAxMS45OTkyIDE2SDExLjE5OTNWMTAuMzk5OUMxMS4xOTk0IDkuNzg3NzYgMTAuOTY1NSA5LjE5ODcyIDEwLjU0NTYgOC43NTMzMUMxMC4xMjU3IDguMzA3OTEgOS41NTE1NCA4LjAzOTgzIDguOTQwNTQgOC4wMDM5MUw4Ljc5OTc3IDcuOTk5OTFINy4yMDAwNkM2LjU2MzY2IDcuOTk5OTEgNS45NTMzMyA4LjI1Mjc3IDUuNTAzMzIgOC43MDI4N0M1LjA1MzMyIDkuMTUyOTYgNC44MDA1MSA5Ljc2MzQxIDQuODAwNTEgMTAuMzk5OVYxNkg0LjAwMDY2QzMuMzY0MjYgMTYgMi43NTM5MiAxNS43NDcxIDIuMzAzOTEgMTUuMjk3QzEuODUzOTEgMTQuODQ3IDEuNjAxMSAxNC4yMzY1IDEuNjAxMSAxMy42VjguNzk5OTJIMC44MDEyNUMwLjA4OTM4MTcgOC43OTk5MiAtMC4yNjgxNTIgNy45MzgzMSAwLjIzNTc1NSA3LjQzNDMxTDcuNDM0NDIgMC4yMzQyMzJDNy41ODQ0MSAwLjA4NDI1MzEgNy43ODc4MiAwIDcuOTk5OTIgMEM4LjIxMjAxIDAgOC40MTU0MiAwLjA4NDI1MzEgOC41NjU0MSAwLjIzNDIzMlpNOC43OTk3NyA5LjU5OTkzQzkuMDExOSA5LjU5OTkzIDkuMjE1MzUgOS42ODQyMiA5LjM2NTM1IDkuODM0MjVDOS41MTUzNSA5Ljk4NDI4IDkuNTk5NjIgMTAuMTg3OCA5LjU5OTYyIDEwLjM5OTlWMTZINi40MDAyMVYxMC4zOTk5QzYuNDAwMjQgMTAuMjA0IDYuNDcyMTYgMTAuMDE0OSA2LjYwMjM1IDkuODY4NDRDNi43MzI1MyA5LjcyMjAxIDYuOTExOTIgOS42Mjg0NiA3LjEwNjQ4IDkuNjA1NTNMNy4yMDAwNiA5LjU5OTkzSDguNzk5NzdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTY1NDEgMC4yMzQyMzJMMTUuNzY0MSA3LjQzNDMxQzE2LjI2OCA3LjkzODMxIDE1LjkxMTIgOC43OTk5MiAxNS4xOTg2IDguNzk5OTJIMTQuMzk4N1YxMy42QzE0LjM5ODcgMTQuMjM2NSAxNC4xNDU5IDE0Ljg0NyAxMy42OTU5IDE1LjI5N0MxMy4yNDU5IDE1Ljc0NzEgMTIuNjM1NiAxNiAxMS45OTkyIDE2SDExLjE5OTNWMTAuMzk5OUMxMS4xOTk0IDkuNzg3NzYgMTAuOTY1NSA5LjE5ODcyIDEwLjU0NTYgOC43NTMzMUMxMC4xMjU3IDguMzA3OTEgOS41NTE1NCA4LjAzOTgzIDguOTQwNTQgOC4wMDM5MUw4Ljc5OTc3IDcuOTk5OTFINy4yMDAwNkM2LjU2MzY2IDcuOTk5OTEgNS45NTMzMyA4LjI1Mjc3IDUuNTAzMzIgOC43MDI4N0M1LjA1MzMyIDkuMTUyOTYgNC44MDA1MSA5Ljc2MzQxIDQuODAwNTEgMTAuMzk5OVYxNkg0LjAwMDY2QzMuMzY0MjYgMTYgMi43NTM5MiAxNS43NDcxIDIuMzAzOTEgMTUuMjk3QzEuODUzOTEgMTQuODQ3IDEuNjAxMSAxNC4yMzY1IDEuNjAxMSAxMy42VjguNzk5OTJIMC44MDEyNUMwLjA4OTM4MTcgOC43OTk5MiAtMC4yNjgxNTIgNy45MzgzMSAwLjIzNTc1NSA3LjQzNDMxTDcuNDM0NDIgMC4yMzQyMzJDNy41ODQ0MSAwLjA4NDI1MzEgNy43ODc4MiAwIDcuOTk5OTIgMEM4LjIxMjAxIDAgOC40MTU0MiAwLjA4NDI1MzEgOC41NjU0MSAwLjIzNDIzMlpNOC43OTk3NyA5LjU5OTkzQzkuMDExOSA5LjU5OTkzIDkuMjE1MzUgOS42ODQyMiA5LjM2NTM1IDkuODM0MjVDOS41MTUzNSA5Ljk4NDI4IDkuNTk5NjIgMTAuMTg3OCA5LjU5OTYyIDEwLjM5OTlWMTZINi40MDAyMVYxMC4zOTk5QzYuNDAwMjQgMTAuMjA0IDYuNDcyMTYgMTAuMDE0OSA2LjYwMjM1IDkuODY4NDRDNi43MzI1MyA5LjcyMjAxIDYuOTExOTIgOS42Mjg0NiA3LjEwNjQ4IDkuNjA1NTNMNy4yMDAwNiA5LjU5OTkzSDguNzk5NzdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgNy4ySDcuMTk5NTZMNy4xMDU5NiA3LjIwNTZDNi45MTE1MSA3LjIyODczIDYuNzMyMjkgNy4zMjIzNiA2LjYwMjI2IDcuNDY4NzdDNi40NzIyMyA3LjYxNTE4IDYuNDAwNDEgNy44MDQxOSA2LjQwMDQxIDhDNi40MDA0MSA4LjE5NTgxIDYuNDcyMjMgOC4zODQ4MiA2LjYwMjI2IDguNTMxMjNDNi43MzIyOSA4LjY3NzY0IDYuOTExNTEgOC43NzEyNyA3LjEwNTk2IDguNzk0NEw3LjE5OTU2IDguOFYxMS4yTDcuMjA1MTYgMTEuMjkzNkM3LjIyNjIyIDExLjQ3MjIgNy4zMDY4MyAxMS42Mzg0IDcuNDMzOTggMTEuNzY1NkM3LjU2MTEzIDExLjg5MjcgNy43Mjc0MSAxMS45NzMzIDcuOTA2IDExLjk5NDRMNy45OTk2IDEySDguNzk5NjRMOC44OTMyNCAxMS45OTQ0QzkuMDcxODMgMTEuOTczMyA5LjIzODExIDExLjg5MjcgOS4zNjUyNiAxMS43NjU2QzkuNDkyNDEgMTEuNjM4NCA5LjU3MzAyIDExLjQ3MjIgOS41OTQwOCAxMS4yOTM2TDkuNTk5NjggMTEuMkw5LjU5NDA4IDExLjEwNjRDOS41NzQ5NSAxMC45NDMyIDkuNTA2MDMgMTAuNzg5OCA5LjM5NjY2IDEwLjY2NzFDOS4yODczIDEwLjU0NDUgOS4xNDI4MiAxMC40NTg1IDguOTgyODUgMTAuNDIwOEw4Ljg5MzI0IDEwLjQwNDhMOC43OTk2NCAxMC40VjhMOC43OTQwNCA3LjkwNjRDOC43NzI5OCA3LjcyNzgzIDguNjkyMzcgNy41NjE1NSA4LjU2NTIyIDcuNDM0NDFDOC40MzgwNyA3LjMwNzI2IDguMjcxNzkgNy4yMjY2NiA4LjA5MzIgNy4yMDU2TDcuOTk5NiA3LjJaTTguMDA3NiA0LjhMNy45MDYgNC44MDU2QzcuNzExNTUgNC44Mjg3MyA3LjUzMjMzIDQuOTIyMzYgNy40MDIzIDUuMDY4NzdDNy4yNzIyNyA1LjIxNTE4IDcuMjAwNDUgNS40MDQxOSA3LjIwMDQ1IDUuNkM3LjIwMDQ1IDUuNzk1ODEgNy4yNzIyNyA1Ljk4NDgyIDcuNDAyMyA2LjEzMTIzQzcuNTMyMzMgNi4yNzc2NCA3LjcxMTU1IDYuMzcxMjcgNy45MDYgNi4zOTQ0TDcuOTk5NiA2LjRMOC4xMDEyIDYuMzk0NEM4LjI5NTY1IDYuMzcxMjcgOC40NzQ4NyA2LjI3NzY0IDguNjA0OSA2LjEzMTIzQzguNzM0OTMgNS45ODQ4MiA4LjgwNjc1IDUuNzk1ODEgOC44MDY3NSA1LjZDOC44MDY3NSA1LjQwNDE5IDguNzM0OTMgNS4yMTUxOCA4LjYwNDkgNS4wNjg3N0M4LjQ3NDg3IDQuOTIyMzYgOC4yOTU2NSA0LjgyODczIDguMTAxMiA0LjgwNTZMOC4wMDc2IDQuOFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgNy4ySDcuMTk5NTZMNy4xMDU5NiA3LjIwNTZDNi45MTE1MSA3LjIyODczIDYuNzMyMjkgNy4zMjIzNiA2LjYwMjI2IDcuNDY4NzdDNi40NzIyMyA3LjYxNTE4IDYuNDAwNDEgNy44MDQxOSA2LjQwMDQxIDhDNi40MDA0MSA4LjE5NTgxIDYuNDcyMjMgOC4zODQ4MiA2LjYwMjI2IDguNTMxMjNDNi43MzIyOSA4LjY3NzY0IDYuOTExNTEgOC43NzEyNyA3LjEwNTk2IDguNzk0NEw3LjE5OTU2IDguOFYxMS4yTDcuMjA1MTYgMTEuMjkzNkM3LjIyNjIyIDExLjQ3MjIgNy4zMDY4MyAxMS42Mzg0IDcuNDMzOTggMTEuNzY1NkM3LjU2MTEzIDExLjg5MjcgNy43Mjc0MSAxMS45NzMzIDcuOTA2IDExLjk5NDRMNy45OTk2IDEySDguNzk5NjRMOC44OTMyNCAxMS45OTQ0QzkuMDcxODMgMTEuOTczMyA5LjIzODExIDExLjg5MjcgOS4zNjUyNiAxMS43NjU2QzkuNDkyNDEgMTEuNjM4NCA5LjU3MzAyIDExLjQ3MjIgOS41OTQwOCAxMS4yOTM2TDkuNTk5NjggMTEuMkw5LjU5NDA4IDExLjEwNjRDOS41NzQ5NSAxMC45NDMyIDkuNTA2MDMgMTAuNzg5OCA5LjM5NjY2IDEwLjY2NzFDOS4yODczIDEwLjU0NDUgOS4xNDI4MiAxMC40NTg1IDguOTgyODUgMTAuNDIwOEw4Ljg5MzI0IDEwLjQwNDhMOC43OTk2NCAxMC40VjhMOC43OTQwNCA3LjkwNjRDOC43NzI5OCA3LjcyNzgzIDguNjkyMzcgNy41NjE1NSA4LjU2NTIyIDcuNDM0NDFDOC40MzgwNyA3LjMwNzI2IDguMjcxNzkgNy4yMjY2NiA4LjA5MzIgNy4yMDU2TDcuOTk5NiA3LjJaTTguMDA3NiA0LjhMNy45MDYgNC44MDU2QzcuNzExNTUgNC44Mjg3MyA3LjUzMjMzIDQuOTIyMzYgNy40MDIzIDUuMDY4NzdDNy4yNzIyNyA1LjIxNTE4IDcuMjAwNDUgNS40MDQxOSA3LjIwMDQ1IDUuNkM3LjIwMDQ1IDUuNzk1ODEgNy4yNzIyNyA1Ljk4NDgyIDcuNDAyMyA2LjEzMTIzQzcuNTMyMzMgNi4yNzc2NCA3LjcxMTU1IDYuMzcxMjcgNy45MDYgNi4zOTQ0TDcuOTk5NiA2LjRMOC4xMDEyIDYuMzk0NEM4LjI5NTY1IDYuMzcxMjcgOC40NzQ4NyA2LjI3NzY0IDguNjA0OSA2LjEzMTIzQzguNzM0OTMgNS45ODQ4MiA4LjgwNjc1IDUuNzk1ODEgOC44MDY3NSA1LjZDOC44MDY3NSA1LjQwNDE5IDguNzM0OTMgNS4yMTUxOCA4LjYwNDkgNS4wNjg3N0M4LjQ3NDg3IDQuOTIyMzYgOC4yOTU2NSA0LjgyODczIDguMTAxMiA0LjgwNTZMOC4wMDc2IDQuOFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNjAwMzMgNy4yQzEuODA0MjQgNy4yMDAyMiAyLjAwMDM2IDcuMjc4MyAyLjE0ODYzIDcuNDE4MjhDMi4yOTY5IDcuNTU4MjUgMi4zODYxMiA3Ljc0OTU2IDIuMzk4MDcgNy45NTMxMUMyLjQxMDAyIDguMTU2NjcgMi4zNDM3OSA4LjM1NzEgMi4yMTI5MiA4LjUxMzQ2QzIuMDgyMDUgOC42Njk4MyAxLjg5NjQxIDguNzcwMzEgMS42OTM5MyA4Ljc5NDRMMS42MDAzMyA4LjhIMC44MDAzMzRDMC41OTY0MzEgOC43OTk3NyAwLjQwMDMwOSA4LjcyMTY5IDAuMjUyMDQgOC41ODE3MkMwLjEwMzc3MSA4LjQ0MTc0IDAuMDE0NTQ2NCA4LjI1MDQzIDAuMDAyNTk2NzMgOC4wNDY4OEMtMC4wMDkzNTI5NiA3Ljg0MzMzIDAuMDU2ODc0MSA3LjY0Mjg5IDAuMTg3NzQ2IDcuNDg2NTNDMC4zMTg2MTkgNy4zMzAxNyAwLjUwNDI1OCA3LjIyOTY4IDAuNzA2NzM0IDcuMjA1NkwwLjgwMDMzNCA3LjJIMS42MDAzM1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04LjAwMDIgMEM4LjE5NjE0IDIuNTg0ODRlLTA1IDguMzg1MjcgMC4wNzE5NjUgOC41MzE2OSAwLjIwMjE3MkM4LjY3ODEyIDAuMzMyMzggOC43NzE2NyAwLjUxMTc5OSA4Ljc5NDYgMC43MDY0TDguODAwMiAwLjhWMS42QzguNzk5OTcgMS44MDM5IDguNzIxODkgMi4wMDAwMyA4LjU4MTkyIDIuMTQ4MjlDOC40NDE5NCAyLjI5NjU2IDguMjUwNjMgMi4zODU3OSA4LjA0NzA4IDIuMzk3NzRDNy44NDM1MyAyLjQwOTY5IDcuNjQzMDkgMi4zNDM0NiA3LjQ4NjczIDIuMjEyNTlDNy4zMzAzNyAyLjA4MTcyIDcuMjI5ODggMS44OTYwOCA3LjIwNTggMS42OTM2TDcuMjAwMiAxLjZWMC44QzcuMjAwMiAwLjU4NzgyNyA3LjI4NDQ4IDAuMzg0MzQ0IDcuNDM0NTEgMC4yMzQzMTVDNy41ODQ1NCAwLjA4NDI4NTQgNy43ODgwMiAwIDguMDAwMiAwWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE1LjIwMDQgNy4yQzE1LjQwNDMgNy4yMDAyMiAxNS42MDA1IDcuMjc4MyAxNS43NDg3IDcuNDE4MjhDMTUuODk3IDcuNTU4MjUgMTUuOTg2MiA3Ljc0OTU2IDE1Ljk5ODIgNy45NTMxMUMxNi4wMTAxIDguMTU2NjcgMTUuOTQzOSA4LjM1NzEgMTUuODEzIDguNTEzNDZDMTUuNjgyMSA4LjY2OTgzIDE1LjQ5NjUgOC43NzAzMSAxNS4yOTQgOC43OTQ0TDE1LjIwMDQgOC44SDE0LjQwMDRDMTQuMTk2NSA4Ljc5OTc3IDE0LjAwMDQgOC43MjE2OSAxMy44NTIxIDguNTgxNzJDMTMuNzAzOSA4LjQ0MTc0IDEzLjYxNDYgOC4yNTA0MyAxMy42MDI3IDguMDQ2ODhDMTMuNTkwNyA3Ljg0MzMzIDEzLjY1NyA3LjY0Mjg5IDEzLjc4NzggNy40ODY1M0MxMy45MTg3IDcuMzMwMTcgMTQuMTA0NCA3LjIyOTY4IDE0LjMwNjggNy4yMDU2TDE0LjQwMDQgNy4ySDE1LjIwMDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi4zMTQ1NSAyLjMxNDRDMi40NTIzMSAyLjE3NjY2IDIuNjM1NTkgMi4wOTM5MSAyLjgzMDAxIDIuMDgxNjlDMy4wMjQ0MyAyLjA2OTQ2IDMuMjE2NjMgMi4xMjg2IDMuMzcwNTUgMi4yNDhMMy40NDU3NSAyLjMxNDRMNC4wMDU3NSAyLjg3NDRDNC4xNDkyMyAzLjAxODM2IDQuMjMyNTMgMy4yMTE1NSA0LjIzODczIDMuNDE0N0M0LjI0NDk0IDMuNjE3ODYgNC4xNzM1OCAzLjgxNTc3IDQuMDM5MTUgMy45NjgyMkMzLjkwNDczIDQuMTIwNjcgMy43MTczMSA0LjIxNjI0IDMuNTE0OTcgNC4yMzU1MkMzLjMxMjYzIDQuMjU0NzkgMy4xMTA1NCA0LjE5NjMzIDIuOTQ5NzUgNC4wNzJMMi44NzQ1NSA0LjAwNTZMMi4zMTQ1NSAzLjQ0NTZDMi4xNjQ1NyAzLjI5NTU4IDIuMDgwMzIgMy4wOTIxMyAyLjA4MDMyIDIuODhDMi4wODAzMiAyLjY2Nzg3IDIuMTY0NTcgMi40NjQ0MiAyLjMxNDU1IDIuMzE0NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMi41NTQ4IDIuMzE0NEMxMi42OTg3IDIuMTcwOTIgMTIuODkxOSAyLjA4NzYyIDEzLjA5NTEgMi4wODE0MUMxMy4yOTgyIDIuMDc1MjEgMTMuNDk2MSAyLjE0NjU3IDEzLjY0ODYgMi4yODA5OUMxMy44MDEgMi40MTU0MiAxMy44OTY2IDIuNjAyODQgMTMuOTE1OSAyLjgwNTE3QzEzLjkzNTIgMy4wMDc1MSAxMy44NzY3IDMuMjA5NiAxMy43NTI0IDMuMzcwMzlMMTMuNjg2IDMuNDQ1NkwxMy4xMjYgNC4wMDU2QzEyLjk4MiA0LjE0OTA3IDEyLjc4ODggNC4yMzIzNyAxMi41ODU3IDQuMjM4NThDMTIuMzgyNSA0LjI0NDc4IDEyLjE4NDYgNC4xNzM0MiAxMi4wMzIxIDQuMDM5QzExLjg3OTcgMy45MDQ1NyAxMS43ODQxIDMuNzE3MTUgMTEuNzY0OCAzLjUxNDgyQzExLjc0NTYgMy4zMTI0OCAxMS44MDQgMy4xMTAzOSAxMS45Mjg0IDIuOTQ5NTlMMTEuOTk0OCAyLjg3NDRMMTIuNTU0OCAyLjMxNDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS42MDAzNCAxMi44QzkuODEyNTIgMTIuOCAxMC4wMTYgMTIuODg0MyAxMC4xNjYgMTMuMDM0M0MxMC4zMTYxIDEzLjE4NDMgMTAuNDAwMyAxMy4zODc4IDEwLjQwMDMgMTMuNkMxMC40MDAzIDE0LjIzNjUgMTAuMTQ3NSAxNC44NDcgOS42OTc0IDE1LjI5NzFDOS4yNDczMSAxNS43NDcxIDguNjM2ODYgMTYgOC4wMDAzNCAxNkM3LjM2MzgyIDE2IDYuNzUzMzcgMTUuNzQ3MSA2LjMwMzI5IDE1LjI5NzFDNS44NTMyIDE0Ljg0NyA1LjYwMDM0IDE0LjIzNjUgNS42MDAzNCAxMy42QzUuNjAwMzcgMTMuNDA0MSA1LjY3MjMxIDEzLjIxNDkgNS44MDI1MSAxMy4wNjg1QzUuOTMyNzIgMTIuOTIyMSA2LjExMjE0IDEyLjgyODUgNi4zMDY3NCAxMi44MDU2TDYuNDAwMzQgMTIuOEg5LjYwMDM0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTguMDAwMiAzLjJDOS4wMDc2MyAzLjIgOS45ODk1MyAzLjUxNjk4IDEwLjgwNjggNC4xMDYwM0MxMS42MjQxIDQuNjk1MDkgMTIuMjM1MyA1LjUyNjM3IDEyLjU1MzkgNi40ODIxQzEyLjg3MjUgNy40Mzc4NCAxMi44ODIyIDguNDY5NTkgMTIuNTgxOSA5LjQzMTJDMTIuMjgxNSAxMC4zOTI4IDExLjY4NjEgMTEuMjM1NSAxMC44ODAyIDExLjg0QzEwLjc2OTkgMTEuOTIyOCAxMC42NDAxIDExLjk3NTcgMTAuNTAzNCAxMS45OTM2TDEwLjQwMDIgMTJINS42MDAyQzUuNDI3MSAxMiA1LjI1ODY3IDExLjk0MzkgNS4xMjAyIDExLjg0QzQuMzE0MjUgMTEuMjM1NSAzLjcxODkxIDEwLjM5MjggMy40MTg1MyA5LjQzMTJDMy4xMTgxNSA4LjQ2OTU5IDMuMTI3OTQgNy40Mzc4NCAzLjQ0NjUyIDYuNDgyMUMzLjc2NTA5IDUuNTI2MzcgNC4zNzYzMSA0LjY5NTA5IDUuMTkzNTkgNC4xMDYwM0M2LjAxMDg2IDMuNTE2OTggNi45OTI3NiAzLjIgOC4wMDAyIDMuMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNjAwMzMgNy4yQzEuODA0MjQgNy4yMDAyMiAyLjAwMDM2IDcuMjc4MyAyLjE0ODYzIDcuNDE4MjhDMi4yOTY5IDcuNTU4MjUgMi4zODYxMiA3Ljc0OTU2IDIuMzk4MDcgNy45NTMxMUMyLjQxMDAyIDguMTU2NjcgMi4zNDM3OSA4LjM1NzEgMi4yMTI5MiA4LjUxMzQ2QzIuMDgyMDUgOC42Njk4MyAxLjg5NjQxIDguNzcwMzEgMS42OTM5MyA4Ljc5NDRMMS42MDAzMyA4LjhIMC44MDAzMzRDMC41OTY0MzEgOC43OTk3NyAwLjQwMDMwOSA4LjcyMTY5IDAuMjUyMDQgOC41ODE3MkMwLjEwMzc3MSA4LjQ0MTc0IDAuMDE0NTQ2NCA4LjI1MDQzIDAuMDAyNTk2NzMgOC4wNDY4OEMtMC4wMDkzNTI5NiA3Ljg0MzMzIDAuMDU2ODc0MSA3LjY0Mjg5IDAuMTg3NzQ2IDcuNDg2NTNDMC4zMTg2MTkgNy4zMzAxNyAwLjUwNDI1OCA3LjIyOTY4IDAuNzA2NzM0IDcuMjA1NkwwLjgwMDMzNCA3LjJIMS42MDAzM1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04LjAwMDIgMEM4LjE5NjE0IDIuNTg0ODRlLTA1IDguMzg1MjcgMC4wNzE5NjUgOC41MzE2OSAwLjIwMjE3MkM4LjY3ODEyIDAuMzMyMzggOC43NzE2NyAwLjUxMTc5OSA4Ljc5NDYgMC43MDY0TDguODAwMiAwLjhWMS42QzguNzk5OTcgMS44MDM5IDguNzIxODkgMi4wMDAwMyA4LjU4MTkyIDIuMTQ4MjlDOC40NDE5NCAyLjI5NjU2IDguMjUwNjMgMi4zODU3OSA4LjA0NzA4IDIuMzk3NzRDNy44NDM1MyAyLjQwOTY5IDcuNjQzMDkgMi4zNDM0NiA3LjQ4NjczIDIuMjEyNTlDNy4zMzAzNyAyLjA4MTcyIDcuMjI5ODggMS44OTYwOCA3LjIwNTggMS42OTM2TDcuMjAwMiAxLjZWMC44QzcuMjAwMiAwLjU4NzgyNyA3LjI4NDQ4IDAuMzg0MzQ0IDcuNDM0NTEgMC4yMzQzMTVDNy41ODQ1NCAwLjA4NDI4NTQgNy43ODgwMiAwIDguMDAwMiAwWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE1LjIwMDQgNy4yQzE1LjQwNDMgNy4yMDAyMiAxNS42MDA1IDcuMjc4MyAxNS43NDg3IDcuNDE4MjhDMTUuODk3IDcuNTU4MjUgMTUuOTg2MiA3Ljc0OTU2IDE1Ljk5ODIgNy45NTMxMUMxNi4wMTAxIDguMTU2NjcgMTUuOTQzOSA4LjM1NzEgMTUuODEzIDguNTEzNDZDMTUuNjgyMSA4LjY2OTgzIDE1LjQ5NjUgOC43NzAzMSAxNS4yOTQgOC43OTQ0TDE1LjIwMDQgOC44SDE0LjQwMDRDMTQuMTk2NSA4Ljc5OTc3IDE0LjAwMDQgOC43MjE2OSAxMy44NTIxIDguNTgxNzJDMTMuNzAzOSA4LjQ0MTc0IDEzLjYxNDYgOC4yNTA0MyAxMy42MDI3IDguMDQ2ODhDMTMuNTkwNyA3Ljg0MzMzIDEzLjY1NyA3LjY0Mjg5IDEzLjc4NzggNy40ODY1M0MxMy45MTg3IDcuMzMwMTcgMTQuMTA0NCA3LjIyOTY4IDE0LjMwNjggNy4yMDU2TDE0LjQwMDQgNy4ySDE1LjIwMDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi4zMTQ1NSAyLjMxNDRDMi40NTIzMSAyLjE3NjY2IDIuNjM1NTkgMi4wOTM5MSAyLjgzMDAxIDIuMDgxNjlDMy4wMjQ0MyAyLjA2OTQ2IDMuMjE2NjMgMi4xMjg2IDMuMzcwNTUgMi4yNDhMMy40NDU3NSAyLjMxNDRMNC4wMDU3NSAyLjg3NDRDNC4xNDkyMyAzLjAxODM2IDQuMjMyNTMgMy4yMTE1NSA0LjIzODczIDMuNDE0N0M0LjI0NDk0IDMuNjE3ODYgNC4xNzM1OCAzLjgxNTc3IDQuMDM5MTUgMy45NjgyMkMzLjkwNDczIDQuMTIwNjcgMy43MTczMSA0LjIxNjI0IDMuNTE0OTcgNC4yMzU1MkMzLjMxMjYzIDQuMjU0NzkgMy4xMTA1NCA0LjE5NjMzIDIuOTQ5NzUgNC4wNzJMMi44NzQ1NSA0LjAwNTZMMi4zMTQ1NSAzLjQ0NTZDMi4xNjQ1NyAzLjI5NTU4IDIuMDgwMzIgMy4wOTIxMyAyLjA4MDMyIDIuODhDMi4wODAzMiAyLjY2Nzg3IDIuMTY0NTcgMi40NjQ0MiAyLjMxNDU1IDIuMzE0NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMi41NTQ4IDIuMzE0NEMxMi42OTg3IDIuMTcwOTIgMTIuODkxOSAyLjA4NzYyIDEzLjA5NTEgMi4wODE0MUMxMy4yOTgyIDIuMDc1MjEgMTMuNDk2MSAyLjE0NjU3IDEzLjY0ODYgMi4yODA5OUMxMy44MDEgMi40MTU0MiAxMy44OTY2IDIuNjAyODQgMTMuOTE1OSAyLjgwNTE3QzEzLjkzNTIgMy4wMDc1MSAxMy44NzY3IDMuMjA5NiAxMy43NTI0IDMuMzcwMzlMMTMuNjg2IDMuNDQ1NkwxMy4xMjYgNC4wMDU2QzEyLjk4MiA0LjE0OTA3IDEyLjc4ODggNC4yMzIzNyAxMi41ODU3IDQuMjM4NThDMTIuMzgyNSA0LjI0NDc4IDEyLjE4NDYgNC4xNzM0MiAxMi4wMzIxIDQuMDM5QzExLjg3OTcgMy45MDQ1NyAxMS43ODQxIDMuNzE3MTUgMTEuNzY0OCAzLjUxNDgyQzExLjc0NTYgMy4zMTI0OCAxMS44MDQgMy4xMTAzOSAxMS45Mjg0IDIuOTQ5NTlMMTEuOTk0OCAyLjg3NDRMMTIuNTU0OCAyLjMxNDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS42MDAzNCAxMi44QzkuODEyNTIgMTIuOCAxMC4wMTYgMTIuODg0MyAxMC4xNjYgMTMuMDM0M0MxMC4zMTYxIDEzLjE4NDMgMTAuNDAwMyAxMy4zODc4IDEwLjQwMDMgMTMuNkMxMC40MDAzIDE0LjIzNjUgMTAuMTQ3NSAxNC44NDcgOS42OTc0IDE1LjI5NzFDOS4yNDczMSAxNS43NDcxIDguNjM2ODYgMTYgOC4wMDAzNCAxNkM3LjM2MzgyIDE2IDYuNzUzMzcgMTUuNzQ3MSA2LjMwMzI5IDE1LjI5NzFDNS44NTMyIDE0Ljg0NyA1LjYwMDM0IDE0LjIzNjUgNS42MDAzNCAxMy42QzUuNjAwMzcgMTMuNDA0MSA1LjY3MjMxIDEzLjIxNDkgNS44MDI1MSAxMy4wNjg1QzUuOTMyNzIgMTIuOTIyMSA2LjExMjE0IDEyLjgyODUgNi4zMDY3NCAxMi44MDU2TDYuNDAwMzQgMTIuOEg5LjYwMDM0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTguMDAwMiAzLjJDOS4wMDc2MyAzLjIgOS45ODk1MyAzLjUxNjk4IDEwLjgwNjggNC4xMDYwM0MxMS42MjQxIDQuNjk1MDkgMTIuMjM1MyA1LjUyNjM3IDEyLjU1MzkgNi40ODIxQzEyLjg3MjUgNy40Mzc4NCAxMi44ODIyIDguNDY5NTkgMTIuNTgxOSA5LjQzMTJDMTIuMjgxNSAxMC4zOTI4IDExLjY4NjEgMTEuMjM1NSAxMC44ODAyIDExLjg0QzEwLjc2OTkgMTEuOTIyOCAxMC42NDAxIDExLjk3NTcgMTAuNTAzNCAxMS45OTM2TDEwLjQwMDIgMTJINS42MDAyQzUuNDI3MSAxMiA1LjI1ODY3IDExLjk0MzkgNS4xMjAyIDExLjg0QzQuMzE0MjUgMTEuMjM1NSAzLjcxODkxIDEwLjM5MjggMy40MTg1MyA5LjQzMTJDMy4xMTgxNSA4LjQ2OTU5IDMuMTI3OTQgNy40Mzc4NCAzLjQ0NjUyIDYuNDgyMUMzLjc2NTA5IDUuNTI2MzcgNC4zNzYzMSA0LjY5NTA5IDUuMTkzNTkgNC4xMDYwM0M2LjAxMDg2IDMuNTE2OTggNi45OTI3NiAzLjIgOC4wMDAyIDMuMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAxNjIgMEMxMC44Mzk0IDAgMTEuNjI4MiAwLjMyNzIgMTIuMjA5OCAwLjkwODhMMTUuMDkxNSAzLjc5MDRDMTUuMzc5NSA0LjA3ODQxIDE1LjYwOCA0LjQyMDMzIDE1Ljc2MzkgNC43OTY2NEMxNS45MTk4IDUuMTcyOTYgMTYgNS41NzYyOCAxNiA1Ljk4MzZDMTYgNi4zOTA5MiAxNS45MTk4IDYuNzk0MjUgMTUuNzYzOSA3LjE3MDU2QzE1LjYwOCA3LjU0Njg3IDE1LjM3OTUgNy44ODg3OSAxNS4wOTE1IDguMTc2OEwxMi45NzcxIDEwLjI5MTJDMTIuNDY0MSAxMC44MDM2IDExLjc4OCAxMS4xMjAzIDExLjA2NiAxMS4xODY0QzEwLjM0MzkgMTEuMjUyNCA5LjYyMTU3IDExLjA2MzcgOS4wMjQxOCAxMC42NTI4TDguOTQwMTggMTAuNTkwNEw0LjIzNDQ5IDE1LjI5NjhDMy44NzAyOSAxNS42NTk4IDMuMzk5MTQgMTUuODk2MiAyLjg5MDQ2IDE1Ljk3MTJMMi43MTQ0NiAxNS45OTI4TDIuNTM3NjUgMTZIMS42MDAwM0MwLjc4ODgxNiAxNiAwLjEwNjQwMiAxNS4zOTI4IDAuMDA3MjAwMiAxNC41NDE2TDAgMTQuNFYxMy40NjI0QzAgMTIuODk5MiAwLjE5ODQwNCAxMi4zNTM2IDAuNTg0MDEyIDExLjg5NDRMMC43MDMyMTQgMTEuNzY1NkwxLjAzNDQyIDExLjQzNDRDMS4xODQ0MiAxMS4yODQ0IDEuMzg3ODcgMTEuMiAxLjYwMDAzIDExLjJIMi40MDAwNVYxMC40QzIuNDAwMDcgMTAuMjA0MSAyLjQ3MjAxIDEwLjAxNDkgMi42MDIyMiA5Ljg2ODVDMi43MzI0MyA5LjcyMjA3IDIuOTExODYgOS42Mjg1MyAzLjEwNjQ2IDkuNjA1NkwzLjIwMDA2IDkuNkg0LjAwMDA4VjguOEM0LjAwMDA3IDguNjI0MTYgNC4wNTc5OSA4LjQ1MzIyIDQuMTY0ODggOC4zMTM2TDQuMjM0NDkgOC4yMzM2TDUuNDA4OTEgNy4wNTg0TDUuMzQ4MTEgNi45NzZDNS4wMjg2OSA2LjUxMTE4IDQuODQxMjQgNS45Njg0NyA0LjgwNTcgNS40MDU2TDQuODAwMSA1LjIxNjhDNC44MDAxIDQuMzkzNiA1LjEyNzMgMy42MDQ4IDUuNzA4OTIgMy4wMjMyTDcuODIzMzYgMC45MDg4QzguNDA1MDMgMC4zMjczMTYgOS4xOTM3MiAwLjAwMDQ1NTU3IDEwLjAxNjIgMFpNMTAuNDEyMiA0SDEwLjM5NjJDMTAuMTg2MSA0IDkuOTc4MDMgNC4wNDEzOSA5Ljc4MzkxIDQuMTIxNzlDOS41ODk3OCA0LjIwMjIgOS40MTMzOSA0LjMyMDA2IDkuMjY0ODIgNC40Njg2M0M5LjExNjI0IDQuNjE3MiA4Ljk5ODM4IDQuNzkzNTkgOC45MTc5NyA0Ljk4NzcxQzguODM3NTYgNS4xODE4MyA4Ljc5NjE4IDUuMzg5ODkgOC43OTYxOCA1LjZDOC43OTYxOCA1LjgxMDEyIDguODM3NTYgNi4wMTgxNyA4LjkxNzk3IDYuMjEyMjlDOC45OTgzOCA2LjQwNjQxIDkuMTE2MjQgNi41ODI4IDkuMjY0ODIgNi43MzEzN0M5LjQxMzM5IDYuODc5OTQgOS41ODk3OCA2Ljk5NzggOS43ODM5MSA3LjA3ODIxQzkuOTc4MDMgNy4xNTg2MiAxMC4xODYxIDcuMiAxMC4zOTYyIDcuMkgxMC40MTIyQzEwLjgzNjYgNy4yIDExLjI0MzUgNy4wMzE0MyAxMS41NDM2IDYuNzMxMzdDMTEuODQzNyA2LjQzMTMxIDEyLjAxMjIgNi4wMjQzNSAxMi4wMTIyIDUuNkMxMi4wMTIyIDUuMTc1NjUgMTEuODQzNyA0Ljc2ODY5IDExLjU0MzYgNC40Njg2M0MxMS4yNDM1IDQuMTY4NTcgMTAuODM2NiA0IDEwLjQxMjIgNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAxNjIgMEMxMC44Mzk0IDAgMTEuNjI4MiAwLjMyNzIgMTIuMjA5OCAwLjkwODhMMTUuMDkxNSAzLjc5MDRDMTUuMzc5NSA0LjA3ODQxIDE1LjYwOCA0LjQyMDMzIDE1Ljc2MzkgNC43OTY2NEMxNS45MTk4IDUuMTcyOTYgMTYgNS41NzYyOCAxNiA1Ljk4MzZDMTYgNi4zOTA5MiAxNS45MTk4IDYuNzk0MjUgMTUuNzYzOSA3LjE3MDU2QzE1LjYwOCA3LjU0Njg3IDE1LjM3OTUgNy44ODg3OSAxNS4wOTE1IDguMTc2OEwxMi45NzcxIDEwLjI5MTJDMTIuNDY0MSAxMC44MDM2IDExLjc4OCAxMS4xMjAzIDExLjA2NiAxMS4xODY0QzEwLjM0MzkgMTEuMjUyNCA5LjYyMTU3IDExLjA2MzcgOS4wMjQxOCAxMC42NTI4TDguOTQwMTggMTAuNTkwNEw0LjIzNDQ5IDE1LjI5NjhDMy44NzAyOSAxNS42NTk4IDMuMzk5MTQgMTUuODk2MiAyLjg5MDQ2IDE1Ljk3MTJMMi43MTQ0NiAxNS45OTI4TDIuNTM3NjUgMTZIMS42MDAwM0MwLjc4ODgxNiAxNiAwLjEwNjQwMiAxNS4zOTI4IDAuMDA3MjAwMiAxNC41NDE2TDAgMTQuNFYxMy40NjI0QzAgMTIuODk5MiAwLjE5ODQwNCAxMi4zNTM2IDAuNTg0MDEyIDExLjg5NDRMMC43MDMyMTQgMTEuNzY1NkwxLjAzNDQyIDExLjQzNDRDMS4xODQ0MiAxMS4yODQ0IDEuMzg3ODcgMTEuMiAxLjYwMDAzIDExLjJIMi40MDAwNVYxMC40QzIuNDAwMDcgMTAuMjA0MSAyLjQ3MjAxIDEwLjAxNDkgMi42MDIyMiA5Ljg2ODVDMi43MzI0MyA5LjcyMjA3IDIuOTExODYgOS42Mjg1MyAzLjEwNjQ2IDkuNjA1NkwzLjIwMDA2IDkuNkg0LjAwMDA4VjguOEM0LjAwMDA3IDguNjI0MTYgNC4wNTc5OSA4LjQ1MzIyIDQuMTY0ODggOC4zMTM2TDQuMjM0NDkgOC4yMzM2TDUuNDA4OTEgNy4wNTg0TDUuMzQ4MTEgNi45NzZDNS4wMjg2OSA2LjUxMTE4IDQuODQxMjQgNS45Njg0NyA0LjgwNTcgNS40MDU2TDQuODAwMSA1LjIxNjhDNC44MDAxIDQuMzkzNiA1LjEyNzMgMy42MDQ4IDUuNzA4OTIgMy4wMjMyTDcuODIzMzYgMC45MDg4QzguNDA1MDMgMC4zMjczMTYgOS4xOTM3MiAwLjAwMDQ1NTU3IDEwLjAxNjIgMFpNMTAuNDEyMiA0SDEwLjM5NjJDMTAuMTg2MSA0IDkuOTc4MDMgNC4wNDEzOSA5Ljc4MzkxIDQuMTIxNzlDOS41ODk3OCA0LjIwMjIgOS40MTMzOSA0LjMyMDA2IDkuMjY0ODIgNC40Njg2M0M5LjExNjI0IDQuNjE3MiA4Ljk5ODM4IDQuNzkzNTkgOC45MTc5NyA0Ljk4NzcxQzguODM3NTYgNS4xODE4MyA4Ljc5NjE4IDUuMzg5ODkgOC43OTYxOCA1LjZDOC43OTYxOCA1LjgxMDEyIDguODM3NTYgNi4wMTgxNyA4LjkxNzk3IDYuMjEyMjlDOC45OTgzOCA2LjQwNjQxIDkuMTE2MjQgNi41ODI4IDkuMjY0ODIgNi43MzEzN0M5LjQxMzM5IDYuODc5OTQgOS41ODk3OCA2Ljk5NzggOS43ODM5MSA3LjA3ODIxQzkuOTc4MDMgNy4xNTg2MiAxMC4xODYxIDcuMiAxMC4zOTYyIDcuMkgxMC40MTIyQzEwLjgzNjYgNy4yIDExLjI0MzUgNy4wMzE0MyAxMS41NDM2IDYuNzMxMzdDMTEuODQzNyA2LjQzMTMxIDEyLjAxMjIgNi4wMjQzNSAxMi4wMTIyIDUuNkMxMi4wMTIyIDUuMTc1NjUgMTEuODQzNyA0Ljc2ODY5IDExLjU0MzYgNC40Njg2M0MxMS4yNDM1IDQuMTY4NTcgMTAuODM2NiA0IDEwLjQxMjIgNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDAwMDIgMEM2LjYxNjcxIDAuMDAyMTU5MTMgNi4yMzg2MiAwLjA4OTA3ODUgNS44OTI4NSAwLjI1NDUzQzUuNTQ3MDggMC40MTk5ODEgNS4yNDIxOSAwLjY1OTg2OCA1LjAwMDAyIDAuOTU3TDAuNjQ1MDIzIDYuMTk3QzAuMjI5ODIgNi43MDQyNSAwLjAwMjM3OTM0IDcuMzM5MjQgMC4wMDExMDQwMyA3Ljk5NDc1Qy0wLjAwMDE3MTI4OSA4LjY1MDI3IDAuMjI0Nzk3IDkuMjg2MTQgMC42MzgwMjMgOS43OTVMNS4wMDYwMiAxNS4wNTFDNS41MDUwMiAxNS42NTEgNi4yMzEwMiAxNiA3LjAwMDAyIDE2QzcuMzgzMzMgMTUuOTk3OCA3Ljc2MTQyIDE1LjkxMDkgOC4xMDcxOSAxNS43NDU1QzguNDUyOTYgMTUuNTggOC43NTc4NiAxNS4zNDAxIDkuMDAwMDIgMTUuMDQzTDEzLjM1NSA5LjgwM0MxMy43NzAyIDkuMjk1NzUgMTMuOTk3NyA4LjY2MDc2IDEzLjk5ODkgOC4wMDUyNUMxNC4wMDAyIDcuMzQ5NzMgMTMuNzc1MiA2LjcxMzg2IDEzLjM2MiA2LjIwNUw4Ljk5NDAyIDAuOTQ5QzguNzUyIDAuNjUzNzk0IDguNDQ3NzkgMC40MTU2NjYgOC4xMDMxIDAuMjUxNjJDNy43NTg0MSAwLjA4NzU3MzMgNy4zODE3NSAwLjAwMTY1NDkzIDcuMDAwMDIgMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDAwMDIgMEM2LjYxNjcxIDAuMDAyMTU5MTMgNi4yMzg2MiAwLjA4OTA3ODUgNS44OTI4NSAwLjI1NDUzQzUuNTQ3MDggMC40MTk5ODEgNS4yNDIxOSAwLjY1OTg2OCA1LjAwMDAyIDAuOTU3TDAuNjQ1MDIzIDYuMTk3QzAuMjI5ODIgNi43MDQyNSAwLjAwMjM3OTM0IDcuMzM5MjQgMC4wMDExMDQwMyA3Ljk5NDc1Qy0wLjAwMDE3MTI4OSA4LjY1MDI3IDAuMjI0Nzk3IDkuMjg2MTQgMC42MzgwMjMgOS43OTVMNS4wMDYwMiAxNS4wNTFDNS41MDUwMiAxNS42NTEgNi4yMzEwMiAxNiA3LjAwMDAyIDE2QzcuMzgzMzMgMTUuOTk3OCA3Ljc2MTQyIDE1LjkxMDkgOC4xMDcxOSAxNS43NDU1QzguNDUyOTYgMTUuNTggOC43NTc4NiAxNS4zNDAxIDkuMDAwMDIgMTUuMDQzTDEzLjM1NSA5LjgwM0MxMy43NzAyIDkuMjk1NzUgMTMuOTk3NyA4LjY2MDc2IDEzLjk5ODkgOC4wMDUyNUMxNC4wMDAyIDcuMzQ5NzMgMTMuNzc1MiA2LjcxMzg2IDEzLjM2MiA2LjIwNUw4Ljk5NDAyIDAuOTQ5QzguNzUyIDAuNjUzNzk0IDguNDQ3NzkgMC40MTU2NjYgOC4xMDMxIDAuMjUxNjJDNy43NTg0MSAwLjA4NzU3MzMgNy4zODE3NSAwLjAwMTY1NDkzIDcuMDAwMDIgMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 235, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM4NSAwQzExLjYzNzUgMy4xMTY0N2UtMDUgMTEuODg2NyAwLjA1NjIxNTggMTIuMTE0MiAwLjE2NDM5OUMxMi4zNDE3IDAuMjcyNTgyIDEyLjU0MTggMC40Mjk5OTYgMTIuNjk5NSAwLjYyNUwxNS44MTUzIDQuNDc5MTdDMTUuOTM0OCA0LjYyNjk3IDE2IDQuODEwNjYgMTYgNUMxNiA1LjE4OTM0IDE1LjkzNDggNS4zNzMwMyAxNS44MTUzIDUuNTIwODNMMTIuNjk5NSA5LjM3NDE3QzEyLjU0MTkgOS41NjkzMiAxMi4zNDE4IDkuNzI2OSAxMi4xMTQzIDkuODM1MjNDMTEuODg2OCA5Ljk0MzU1IDExLjYzNzUgOS45OTk4NyAxMS4zODUgMTBIMi41MjYyN0MxLjg1NjI2IDEwIDEuMjEzNjkgOS43MzY2MSAwLjczOTkyNiA5LjI2Nzc3QzAuMjY2MTU5IDguNzk4OTMgMCA4LjE2MzA0IDAgNy41VjIuNUMwIDEuODM2OTYgMC4yNjYxNTkgMS4yMDEwNyAwLjczOTkyNiAwLjczMjIzM0MxLjIxMzY5IDAuMjYzMzkyIDEuODU2MjYgMCAyLjUyNjI3IDBIMTEuMzg1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM4NSAwQzExLjYzNzUgMy4xMTY0N2UtMDUgMTEuODg2NyAwLjA1NjIxNTggMTIuMTE0MiAwLjE2NDM5OUMxMi4zNDE3IDAuMjcyNTgyIDEyLjU0MTggMC40Mjk5OTYgMTIuNjk5NSAwLjYyNUwxNS44MTUzIDQuNDc5MTdDMTUuOTM0OCA0LjYyNjk3IDE2IDQuODEwNjYgMTYgNUMxNiA1LjE4OTM0IDE1LjkzNDggNS4zNzMwMyAxNS44MTUzIDUuNTIwODNMMTIuNjk5NSA5LjM3NDE3QzEyLjU0MTkgOS41NjkzMiAxMi4zNDE4IDkuNzI2OSAxMi4xMTQzIDkuODM1MjNDMTEuODg2OCA5Ljk0MzU1IDExLjYzNzUgOS45OTk4NyAxMS4zODUgMTBIMi41MjYyN0MxLjg1NjI2IDEwIDEuMjEzNjkgOS43MzY2MSAwLjczOTkyNiA5LjI2Nzc3QzAuMjY2MTU5IDguNzk4OTMgMCA4LjE2MzA0IDAgNy41VjIuNUMwIDEuODM2OTYgMC4yNjYxNTkgMS4yMDEwNyAwLjczOTkyNiAwLjczMjIzM0MxLjIxMzY5IDAuMjYzMzkyIDEuODU2MjYgMCAyLjUyNjI3IDBIMTEuMzg1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk05LjM2NTYgNS4wMzQ0QzkuMjE1NTggNC44ODQ0MiA5LjAxMjEzIDQuODAwMTcgOC44IDQuODAwMTdDOC41ODc4NyA0LjgwMDE3IDguMzg0NDIgNC44ODQ0MiA4LjIzNDQgNS4wMzQ0TDUuODM0NCA3LjQzNDRMNS43NjggNy41MDk2QzUuNjQ4NiA3LjY2MzUyIDUuNTg5NDYgNy44NTU3MiA1LjYwMTY5IDguMDUwMTVDNS42MTM5MSA4LjI0NDU3IDUuNjk2NjYgOC40Mjc4NSA1LjgzNDQgOC41NjU2TDguMjM0NCAxMC45NjU2TDguMzA5NiAxMS4wMzJDOC40NjM1MiAxMS4xNTE0IDguNjU1NzIgMTEuMjEwNSA4Ljg1MDE1IDExLjE5ODNDOS4wNDQ1NyAxMS4xODYxIDkuMjI3ODUgMTEuMTAzMyA5LjM2NTYgMTAuOTY1Nkw5LjQzMiAxMC44OTA0QzkuNTUxNCAxMC43MzY1IDkuNjEwNTQgMTAuNTQ0MyA5LjU5ODMxIDEwLjM0OTlDOS41ODYwOSAxMC4xNTU0IDkuNTAzMzQgOS45NzIxNSA5LjM2NTYgOS44MzQ0TDcuNTMyIDhMOS4zNjU2IDYuMTY1Nkw5LjQzMiA2LjA5MDRDOS41NTE0IDUuOTM2NDggOS42MTA1NCA1Ljc0NDI4IDkuNTk4MzEgNS41NDk4NkM5LjU4NjA5IDUuMzU1NDMgOS41MDMzNCA1LjE3MjE1IDkuMzY1NiA1LjAzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk05LjM2NTYgNS4wMzQ0QzkuMjE1NTggNC44ODQ0MiA5LjAxMjEzIDQuODAwMTcgOC44IDQuODAwMTdDOC41ODc4NyA0LjgwMDE3IDguMzg0NDIgNC44ODQ0MiA4LjIzNDQgNS4wMzQ0TDUuODM0NCA3LjQzNDRMNS43NjggNy41MDk2QzUuNjQ4NiA3LjY2MzUyIDUuNTg5NDYgNy44NTU3MiA1LjYwMTY5IDguMDUwMTVDNS42MTM5MSA4LjI0NDU3IDUuNjk2NjYgOC40Mjc4NSA1LjgzNDQgOC41NjU2TDguMjM0NCAxMC45NjU2TDguMzA5NiAxMS4wMzJDOC40NjM1MiAxMS4xNTE0IDguNjU1NzIgMTEuMjEwNSA4Ljg1MDE1IDExLjE5ODNDOS4wNDQ1NyAxMS4xODYxIDkuMjI3ODUgMTEuMTAzMyA5LjM2NTYgMTAuOTY1Nkw5LjQzMiAxMC44OTA0QzkuNTUxNCAxMC43MzY1IDkuNjEwNTQgMTAuNTQ0MyA5LjU5ODMxIDEwLjM0OTlDOS41ODYwOSAxMC4xNTU0IDkuNTAzMzQgOS45NzIxNSA5LjM2NTYgOS44MzQ0TDcuNTMyIDhMOS4zNjU2IDYuMTY1Nkw5LjQzMiA2LjA5MDRDOS41NTE0IDUuOTM2NDggOS42MTA1NCA1Ljc0NDI4IDkuNTk4MzEgNS41NDk4NkM5LjU4NjA5IDUuMzU1NDMgOS41MDMzNCA1LjE3MjE1IDkuMzY1NiA1LjAzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIuODI4VjEwLjRDMTYgMTEuMDEyMiAxNS43NjYxIDExLjYwMTIgMTUuMzQ2MiAxMi4wNDY2QzE0LjkyNjIgMTIuNDkyIDE0LjM1MTkgMTIuNzYwMSAxMy43NDA4IDEyLjc5NkwxMy42IDEyLjhIMi40QzEuNzg3ODMgMTIuOCAxLjE5ODc5IDEyLjU2NjEgMC43NTMzOTEgMTIuMTQ2MkMwLjMwNzk5NCAxMS43MjYyIDAuMDM5OTE0IDExLjE1MTkgMC4wMDQwMDAwOSAxMC41NDA4TDAgMTAuNFYyLjgyOEw3LjU1NiA3Ljg2NTZMNy42NDg4IDcuOTE4NEM3Ljc1ODE2IDcuOTcxODQgNy44NzgyOCA3Ljk5OTYxIDggNy45OTk2MUM4LjEyMTcyIDcuOTk5NjEgOC4yNDE4NCA3Ljk3MTg0IDguMzUxMiA3LjkxODRMOC40NDQgNy44NjU2TDE2IDIuODI4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjYgMEMxNC40NjQgMCAxNS4yMjE2IDAuNDU2IDE1LjY0NCAxLjE0MTZMNy45OTk5NiA2LjIzNzZMMC4zNTU5NTcgMS4xNDE2QzAuNTU2NTQxIDAuODE1ODE0IDAuODMyMTI4IDAuNTQyNzIxIDEuMTU5NzIgMC4zNDUxMDZDMS40ODczMiAwLjE0NzQ5MSAxLjg1NzQyIDAuMDMxMDg1IDIuMjM5MTYgMC4wMDU1OTk5OEwyLjM5OTk2IDBIMTMuNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIuODI4VjEwLjRDMTYgMTEuMDEyMiAxNS43NjYxIDExLjYwMTIgMTUuMzQ2MiAxMi4wNDY2QzE0LjkyNjIgMTIuNDkyIDE0LjM1MTkgMTIuNzYwMSAxMy43NDA4IDEyLjc5NkwxMy42IDEyLjhIMi40QzEuNzg3ODMgMTIuOCAxLjE5ODc5IDEyLjU2NjEgMC43NTMzOTEgMTIuMTQ2MkMwLjMwNzk5NCAxMS43MjYyIDAuMDM5OTE0IDExLjE1MTkgMC4wMDQwMDAwOSAxMC41NDA4TDAgMTAuNFYyLjgyOEw3LjU1NiA3Ljg2NTZMNy42NDg4IDcuOTE4NEM3Ljc1ODE2IDcuOTcxODQgNy44NzgyOCA3Ljk5OTYxIDggNy45OTk2MUM4LjEyMTcyIDcuOTk5NjEgOC4yNDE4NCA3Ljk3MTg0IDguMzUxMiA3LjkxODRMOC40NDQgNy44NjU2TDE2IDIuODI4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjYgMEMxNC40NjQgMCAxNS4yMjE2IDAuNDU2IDE1LjY0NCAxLjE0MTZMNy45OTk5NiA2LjIzNzZMMC4zNTU5NTcgMS4xNDE2QzAuNTU2NTQxIDAuODE1ODE0IDAuODMyMTI4IDAuNTQyNzIxIDEuMTU5NzIgMC4zNDUxMDZDMS40ODczMiAwLjE0NzQ5MSAxLjg1NzQyIDAuMDMxMDg1IDIuMjM5MTYgMC4wMDU1OTk5OEwyLjM5OTk2IDBIMTMuNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjggMEMxMy42NDg3IDAgMTQuNDYyNiAwLjMzMjcxNCAxNS4wNjI3IDAuOTI0OTQ4QzE1LjY2MjkgMS41MTcxOCAxNiAyLjMyMDQyIDE2IDMuMTU3OTdWOS40NzM5MUMxNiAxMC4zMTE1IDE1LjY2MjkgMTEuMTE0NyAxNS4wNjI3IDExLjcwNjlDMTQuNDYyNiAxMi4yOTkyIDEzLjY0ODcgMTIuNjMxOSAxMi44IDEyLjYzMTlIOS4wMjA4TDUuMjExMiAxNC44ODc1QzUuMDk2NDcgMTQuOTU1NCA0Ljk2NjMxIDE0Ljk5MzkgNC44MzI2MiAxNC45OTkzQzQuNjk4OTMgMTUuMDA0OCA0LjU2NTk5IDE0Ljk3NzEgNC40NDU5NyAxNC45MTg3QzQuMzI1OTQgMTQuODYwMyA0LjIyMjY3IDE0Ljc3MzIgNC4xNDU1OSAxNC42NjUzQzQuMDY4NTIgMTQuNTU3MyA0LjAyMDExIDE0LjQzMiA0LjAwNDggMTQuMzAwOUw0IDE0LjIxMDlWMTIuNjMxOUgzLjJDMi4zNzkwMSAxMi42MzE5IDEuNTg5NDIgMTIuMzIwNSAwLjk5NDU1MSAxMS43NjIxQzAuMzk5Njg0IDExLjIwMzcgMC4wNDUwNDk4IDEwLjQ0MSAwLjAwNDAwMDA5IDkuNjMxODFMMCA5LjQ3MzkxVjMuMTU3OTdDMCAyLjMyMDQyIDAuMzM3MTQyIDEuNTE3MTggMC45MzcyNTggMC45MjQ5NDhDMS41MzczNyAwLjMzMjcxNCAyLjM1MTMxIDAgMy4yIDBIMTIuOFpNOS42IDcuMTA1NDNINC44QzQuNTg3ODMgNy4xMDU0MyA0LjM4NDM0IDcuMTg4NjEgNC4yMzQzMSA3LjMzNjY3QzQuMDg0MjkgNy40ODQ3MyA0IDcuNjg1NTQgNCA3Ljg5NDkyQzQgOC4xMDQzMSA0LjA4NDI5IDguMzA1MTIgNC4yMzQzMSA4LjQ1MzE4QzQuMzg0MzQgOC42MDEyNCA0LjU4NzgzIDguNjg0NDIgNC44IDguNjg0NDJIOS42QzkuODEyMTcgOC42ODQ0MiAxMC4wMTU3IDguNjAxMjQgMTAuMTY1NyA4LjQ1MzE4QzEwLjMxNTcgOC4zMDUxMiAxMC40IDguMTA0MzEgMTAuNCA3Ljg5NDkyQzEwLjQgNy42ODU1NCAxMC4zMTU3IDcuNDg0NzMgMTAuMTY1NyA3LjMzNjY3QzEwLjAxNTcgNy4xODg2MSA5LjgxMjE3IDcuMTA1NDMgOS42IDcuMTA1NDNaTTExLjIgMy45NDc0Nkg0LjhDNC41ODc4MyAzLjk0NzQ2IDQuMzg0MzQgNC4wMzA2NCA0LjIzNDMxIDQuMTc4N0M0LjA4NDI5IDQuMzI2NzYgNCA0LjUyNzU3IDQgNC43MzY5NUM0IDQuOTQ2MzQgNC4wODQyOSA1LjE0NzE1IDQuMjM0MzEgNS4yOTUyMUM0LjM4NDM0IDUuNDQzMjcgNC41ODc4MyA1LjUyNjQ1IDQuOCA1LjUyNjQ1SDExLjJDMTEuNDEyMiA1LjUyNjQ1IDExLjYxNTcgNS40NDMyNyAxMS43NjU3IDUuMjk1MjFDMTEuOTE1NyA1LjE0NzE1IDEyIDQuOTQ2MzQgMTIgNC43MzY5NUMxMiA0LjUyNzU3IDExLjkxNTcgNC4zMjY3NiAxMS43NjU3IDQuMTc4N0MxMS42MTU3IDQuMDMwNjQgMTEuNDEyMiAzLjk0NzQ2IDExLjIgMy45NDc0NloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjggMEMxMy42NDg3IDAgMTQuNDYyNiAwLjMzMjcxNCAxNS4wNjI3IDAuOTI0OTQ4QzE1LjY2MjkgMS41MTcxOCAxNiAyLjMyMDQyIDE2IDMuMTU3OTdWOS40NzM5MUMxNiAxMC4zMTE1IDE1LjY2MjkgMTEuMTE0NyAxNS4wNjI3IDExLjcwNjlDMTQuNDYyNiAxMi4yOTkyIDEzLjY0ODcgMTIuNjMxOSAxMi44IDEyLjYzMTlIOS4wMjA4TDUuMjExMiAxNC44ODc1QzUuMDk2NDcgMTQuOTU1NCA0Ljk2NjMxIDE0Ljk5MzkgNC44MzI2MiAxNC45OTkzQzQuNjk4OTMgMTUuMDA0OCA0LjU2NTk5IDE0Ljk3NzEgNC40NDU5NyAxNC45MTg3QzQuMzI1OTQgMTQuODYwMyA0LjIyMjY3IDE0Ljc3MzIgNC4xNDU1OSAxNC42NjUzQzQuMDY4NTIgMTQuNTU3MyA0LjAyMDExIDE0LjQzMiA0LjAwNDggMTQuMzAwOUw0IDE0LjIxMDlWMTIuNjMxOUgzLjJDMi4zNzkwMSAxMi42MzE5IDEuNTg5NDIgMTIuMzIwNSAwLjk5NDU1MSAxMS43NjIxQzAuMzk5Njg0IDExLjIwMzcgMC4wNDUwNDk4IDEwLjQ0MSAwLjAwNDAwMDA5IDkuNjMxODFMMCA5LjQ3MzkxVjMuMTU3OTdDMCAyLjMyMDQyIDAuMzM3MTQyIDEuNTE3MTggMC45MzcyNTggMC45MjQ5NDhDMS41MzczNyAwLjMzMjcxNCAyLjM1MTMxIDAgMy4yIDBIMTIuOFpNOS42IDcuMTA1NDNINC44QzQuNTg3ODMgNy4xMDU0MyA0LjM4NDM0IDcuMTg4NjEgNC4yMzQzMSA3LjMzNjY3QzQuMDg0MjkgNy40ODQ3MyA0IDcuNjg1NTQgNCA3Ljg5NDkyQzQgOC4xMDQzMSA0LjA4NDI5IDguMzA1MTIgNC4yMzQzMSA4LjQ1MzE4QzQuMzg0MzQgOC42MDEyNCA0LjU4NzgzIDguNjg0NDIgNC44IDguNjg0NDJIOS42QzkuODEyMTcgOC42ODQ0MiAxMC4wMTU3IDguNjAxMjQgMTAuMTY1NyA4LjQ1MzE4QzEwLjMxNTcgOC4zMDUxMiAxMC40IDguMTA0MzEgMTAuNCA3Ljg5NDkyQzEwLjQgNy42ODU1NCAxMC4zMTU3IDcuNDg0NzMgMTAuMTY1NyA3LjMzNjY3QzEwLjAxNTcgNy4xODg2MSA5LjgxMjE3IDcuMTA1NDMgOS42IDcuMTA1NDNaTTExLjIgMy45NDc0Nkg0LjhDNC41ODc4MyAzLjk0NzQ2IDQuMzg0MzQgNC4wMzA2NCA0LjIzNDMxIDQuMTc4N0M0LjA4NDI5IDQuMzI2NzYgNCA0LjUyNzU3IDQgNC43MzY5NUM0IDQuOTQ2MzQgNC4wODQyOSA1LjE0NzE1IDQuMjM0MzEgNS4yOTUyMUM0LjM4NDM0IDUuNDQzMjcgNC41ODc4MyA1LjUyNjQ1IDQuOCA1LjUyNjQ1SDExLjJDMTEuNDEyMiA1LjUyNjQ1IDExLjYxNTcgNS40NDMyNyAxMS43NjU3IDUuMjk1MjFDMTEuOTE1NyA1LjE0NzE1IDEyIDQuOTQ2MzQgMTIgNC43MzY5NUMxMiA0LjUyNzU3IDExLjkxNTcgNC4zMjY3NiAxMS43NjU3IDQuMTc4N0MxMS42MTU3IDQuMDMwNjQgMTEuNDEyMiAzLjk0NzQ2IDExLjIgMy45NDc0NloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjYxODUgMC4xOTQzOTNMMTAuNzA0NCAwLjI3MDI3MkwxNS43MzM5IDUuMjk4NDZDMTUuODg4IDUuNDUzNCAxNS45ODE2IDUuNjU4NDIgMTUuOTk3NiA1Ljg3NjM3QzE2LjAxMzUgNi4wOTQzMSAxNS45NTA5IDYuMzEwNzcgMTUuODIxIDYuNDg2NTNDMTUuNjkxMSA2LjY2MjI4IDE1LjUwMjUgNi43ODU2OSAxNS4yODk0IDYuODM0NEMxNS4wNzYzIDYuODgzMTIgMTQuODUyOCA2Ljg1MzkxIDE0LjY1OTQgNi43NTIwN0wxMS43NTg4IDkuNjUxMDVMMTAuNDU2NiAxMy4xMjIzQzEwLjQyMjMgMTMuMjEzOSAxMC4zNzM1IDEzLjI5OTQgMTAuMzEyMSAxMy4zNzU2TDEwLjI0ODEgMTMuNDQ4N0w4Ljg3NjQ1IDE0LjgyQzguNzE4ODcgMTQuOTc3MyA4LjUwOTMxIDE1LjA3MTcgOC4yODcwOCAxNS4wODU1QzguMDY0ODUgMTUuMDk5MyA3Ljg0NTIxIDE1LjAzMTYgNy42NjkzOCAxNC44OTVMNy41ODI1MSAxNC44MTkxTDUuMDI4NDYgMTIuMjY2NkwxLjU1OTk2IDE1LjczMzNDMS4zOTU0IDE1Ljg5NzMgMS4xNzQ1OCAxNS45OTI1IDAuOTQyMzU5IDE1Ljk5OTZDMC43MTAxMzYgMTYuMDA2NyAwLjQ4MzkyIDE1LjkyNTEgMC4zMDk2NTggMTUuNzcxNUMwLjEzNTM5NyAxNS42MTc5IDAuMDI2MTU1NiAxNS40MDM3IDAuMDA0MTIzMjkgMTUuMTcyNUMtMC4wMTc5MDkgMTQuOTQxMyAwLjA0ODkxOTQgMTQuNzEwMyAwLjE5MTAzNSAxNC41MjY2TDAuMjY2OTM0IDE0LjQ0MDZMMy43MzQ1MiAxMC45NzNMMS4xODEzOCA4LjQxOTZDMS4wMjM5MyA4LjI2MjE4IDAuOTI5MzUyIDguMDUyNzMgMC45MTUzNzggNy44MzA1NUMwLjkwMTQwNCA3LjYwODM3IDAuOTY4OTk5IDcuMzg4NzMgMS4xMDU0OCA3LjIxMjgzTDEuMTgxMzggNy4xMjY5TDIuNTUzMDUgNS43NTU1N0MyLjYyMjA1IDUuNjg2MzQgMi43MDE3IDUuNjI4NjMgMi43ODg5OCA1LjU4NDYxTDIuODc4NTkgNS41NDYyMkw2LjM0OTgzIDQuMjQzNDZMOS4yNDk1NCAxLjM0NTM5QzkuMTUwNjYgMS4xNjA1NyA5LjExODMxIDAuOTQ3Mzg0IDkuMTU3OTEgMC43NDE1NTVDOS4xOTc1IDAuNTM1NzI1IDkuMzA2NjQgMC4zNDk3NDkgOS40NjcwNCAwLjIxNDc3N0M5LjYyNzQ0IDAuMDc5ODA0NSA5LjgyOTM2IDAuMDA0MDMzOTYgMTAuMDM5IDAuMDAwMTU2NTUxQzEwLjI0ODYgLTAuMDAzNzIwODYgMTAuNDUzMiAwLjA2NTQ0NDcgMTAuNjE4NSAwLjE5NDM5M1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjYxODUgMC4xOTQzOTNMMTAuNzA0NCAwLjI3MDI3MkwxNS43MzM5IDUuMjk4NDZDMTUuODg4IDUuNDUzNCAxNS45ODE2IDUuNjU4NDIgMTUuOTk3NiA1Ljg3NjM3QzE2LjAxMzUgNi4wOTQzMSAxNS45NTA5IDYuMzEwNzcgMTUuODIxIDYuNDg2NTNDMTUuNjkxMSA2LjY2MjI4IDE1LjUwMjUgNi43ODU2OSAxNS4yODk0IDYuODM0NEMxNS4wNzYzIDYuODgzMTIgMTQuODUyOCA2Ljg1MzkxIDE0LjY1OTQgNi43NTIwN0wxMS43NTg4IDkuNjUxMDVMMTAuNDU2NiAxMy4xMjIzQzEwLjQyMjMgMTMuMjEzOSAxMC4zNzM1IDEzLjI5OTQgMTAuMzEyMSAxMy4zNzU2TDEwLjI0ODEgMTMuNDQ4N0w4Ljg3NjQ1IDE0LjgyQzguNzE4ODcgMTQuOTc3MyA4LjUwOTMxIDE1LjA3MTcgOC4yODcwOCAxNS4wODU1QzguMDY0ODUgMTUuMDk5MyA3Ljg0NTIxIDE1LjAzMTYgNy42NjkzOCAxNC44OTVMNy41ODI1MSAxNC44MTkxTDUuMDI4NDYgMTIuMjY2NkwxLjU1OTk2IDE1LjczMzNDMS4zOTU0IDE1Ljg5NzMgMS4xNzQ1OCAxNS45OTI1IDAuOTQyMzU5IDE1Ljk5OTZDMC43MTAxMzYgMTYuMDA2NyAwLjQ4MzkyIDE1LjkyNTEgMC4zMDk2NTggMTUuNzcxNUMwLjEzNTM5NyAxNS42MTc5IDAuMDI2MTU1NiAxNS40MDM3IDAuMDA0MTIzMjkgMTUuMTcyNUMtMC4wMTc5MDkgMTQuOTQxMyAwLjA0ODkxOTQgMTQuNzEwMyAwLjE5MTAzNSAxNC41MjY2TDAuMjY2OTM0IDE0LjQ0MDZMMy43MzQ1MiAxMC45NzNMMS4xODEzOCA4LjQxOTZDMS4wMjM5MyA4LjI2MjE4IDAuOTI5MzUyIDguMDUyNzMgMC45MTUzNzggNy44MzA1NUMwLjkwMTQwNCA3LjYwODM3IDAuOTY4OTk5IDcuMzg4NzMgMS4xMDU0OCA3LjIxMjgzTDEuMTgxMzggNy4xMjY5TDIuNTUzMDUgNS43NTU1N0MyLjYyMjA1IDUuNjg2MzQgMi43MDE3IDUuNjI4NjMgMi43ODg5OCA1LjU4NDYxTDIuODc4NTkgNS41NDYyMkw2LjM0OTgzIDQuMjQzNDZMOS4yNDk1NCAxLjM0NTM5QzkuMTUwNjYgMS4xNjA1NyA5LjExODMxIDAuOTQ3Mzg0IDkuMTU3OTEgMC43NDE1NTVDOS4xOTc1IDAuNTM1NzI1IDkuMzA2NjQgMC4zNDk3NDkgOS40NjcwNCAwLjIxNDc3N0M5LjYyNzQ0IDAuMDc5ODA0NSA5LjgyOTM2IDAuMDA0MDMzOTYgMTAuMDM5IDAuMDAwMTU2NTUxQzEwLjI0ODYgLTAuMDAzNzIwODYgMTAuNDUzMiAwLjA2NTQ0NDcgMTAuNjE4NSAwLjE5NDM5M1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU5NTYgMS40MDQ0NUMxNS40OTQ4IDIuMzAzODMgMTYgMy41MjM1OCAxNiA0Ljc5NTQxQzE2IDYuMDY3MjQgMTUuNDk0OCA3LjI4Njk4IDE0LjU5NTYgOC4xODYzN0w4LjE0NzMzIDE0LjYzNDZDNy4yNDQ0NCAxNS41MTY3IDYuMDMwMTggMTYuMDA3MyA0Ljc2Nzk0IDE1Ljk5OTlDMy41MDU2OSAxNS45OTI2IDIuMjk3MjMgMTUuNDg3OSAxLjQwNDY4IDE0LjU5NTNDMC41MTIxMTkgMTMuNzAyOCAwLjAwNzQzMjAzIDEyLjQ5NDMgOC4xNDI3ZS0wNSAxMS4yMzIxQy0wLjAwNzI2OTE4IDkuOTY5ODIgMC40ODMzMDkgOC43NTU1NiAxLjM2NTQxIDcuODUyNjdMNy44MTM2MyAxLjQwNDQ1QzguNzEzMDIgMC41MDUxODggOS45MzI3NiAwIDExLjIwNDYgMEMxMi40NzY0IDAgMTMuNjk2MiAwLjUwNTE4OCAxNC41OTU2IDEuNDA0NDVaTTguOTUzMzYgMi41NDQxN0w1LjQ5MjI3IDYuMDA0NDVMOS45OTQ3NSAxMC41MDY5TDEzLjQ1NTggNy4wNDc0NUMxMy43NTUgNi43NTI1OCAxMy45OTI4IDYuNDAxNDQgMTQuMTU1NiA2LjAxNDI2QzE0LjMxODQgNS42MjcwOCAxNC40MDMgNS4yMTE1MSAxNC40MDQ1IDQuNzkxNDhDMTQuNDA2IDQuMzcxNDYgMTQuMzI0NCAzLjk1NTI5IDE0LjE2NDQgMy41NjY5NUMxNC4wMDQzIDMuMTc4NjEgMTMuNzY5IDIuODI1NzggMTMuNDcyIDIuNTI4NzhDMTMuMTc1IDIuMjMxNzggMTIuODIyMiAxLjk5NjQ4IDEyLjQzMzkgMS44MzY0NEMxMi4wNDU1IDEuNjc2MzkgMTEuNjI5MyAxLjU5NDc4IDExLjIwOTMgMS41OTYyOEMxMC43ODkzIDEuNTk3NzkgMTAuMzczNyAxLjY4MjM5IDkuOTg2NTQgMS44NDUyMUM5LjU5OTM2IDIuMDA4MDMgOS4yNDgyMiAyLjI0NTg1IDguOTUzMzYgMi41NDQ5OCIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU5NTYgMS40MDQ0NUMxNS40OTQ4IDIuMzAzODMgMTYgMy41MjM1OCAxNiA0Ljc5NTQxQzE2IDYuMDY3MjQgMTUuNDk0OCA3LjI4Njk4IDE0LjU5NTYgOC4xODYzN0w4LjE0NzMzIDE0LjYzNDZDNy4yNDQ0NCAxNS41MTY3IDYuMDMwMTggMTYuMDA3MyA0Ljc2Nzk0IDE1Ljk5OTlDMy41MDU2OSAxNS45OTI2IDIuMjk3MjMgMTUuNDg3OSAxLjQwNDY4IDE0LjU5NTNDMC41MTIxMTkgMTMuNzAyOCAwLjAwNzQzMjAzIDEyLjQ5NDMgOC4xNDI3ZS0wNSAxMS4yMzIxQy0wLjAwNzI2OTE4IDkuOTY5ODIgMC40ODMzMDkgOC43NTU1NiAxLjM2NTQxIDcuODUyNjdMNy44MTM2MyAxLjQwNDQ1QzguNzEzMDIgMC41MDUxODggOS45MzI3NiAwIDExLjIwNDYgMEMxMi40NzY0IDAgMTMuNjk2MiAwLjUwNTE4OCAxNC41OTU2IDEuNDA0NDVaTTguOTUzMzYgMi41NDQxN0w1LjQ5MjI3IDYuMDA0NDVMOS45OTQ3NSAxMC41MDY5TDEzLjQ1NTggNy4wNDc0NUMxMy43NTUgNi43NTI1OCAxMy45OTI4IDYuNDAxNDQgMTQuMTU1NiA2LjAxNDI2QzE0LjMxODQgNS42MjcwOCAxNC40MDMgNS4yMTE1MSAxNC40MDQ1IDQuNzkxNDhDMTQuNDA2IDQuMzcxNDYgMTQuMzI0NCAzLjk1NTI5IDE0LjE2NDQgMy41NjY5NUMxNC4wMDQzIDMuMTc4NjEgMTMuNzY5IDIuODI1NzggMTMuNDcyIDIuNTI4NzhDMTMuMTc1IDIuMjMxNzggMTIuODIyMiAxLjk5NjQ4IDEyLjQzMzkgMS44MzY0NEMxMi4wNDU1IDEuNjc2MzkgMTEuNjI5MyAxLjU5NDc4IDExLjIwOTMgMS41OTYyOEMxMC43ODkzIDEuNTk3NzkgMTAuMzczNyAxLjY4MjM5IDkuOTg2NTQgMS44NDUyMUM5LjU5OTM2IDIuMDA4MDMgOS4yNDgyMiAyLjI0NTg1IDguOTUzMzYgMi41NDQ5OCIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(61, 201, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk02LjYzNDQgNS4wMzQ0QzYuNzcyMTUgNC44OTY2NiA2Ljk1NTQzIDQuODEzOTEgNy4xNDk4NiA0LjgwMTY5QzcuMzQ0MjggNC43ODk0NiA3LjUzNjQ4IDQuODQ4NiA3LjY5MDQgNC45NjhMNy43NjU2IDUuMDM0NEwxMC4xNjU2IDcuNDM0NEMxMC4zMDMzIDcuNTcyMTUgMTAuMzg2MSA3Ljc1NTQzIDEwLjM5ODMgNy45NDk4NkMxMC40MTA1IDguMTQ0MjggMTAuMzUxNCA4LjMzNjQ4IDEwLjIzMiA4LjQ5MDRMMTAuMTY1NiA4LjU2NTZMNy43NjU2IDEwLjk2NTZDNy42MjE2MyAxMS4xMDkxIDcuNDI4NDUgMTEuMTkyNCA3LjIyNTI5IDExLjE5ODZDNy4wMjIxMyAxMS4yMDQ4IDYuODI0MjMgMTEuMTMzNCA2LjY3MTc4IDEwLjk5OUM2LjUxOTMzIDEwLjg2NDYgNi40MjM3NiAxMC42NzcyIDYuNDA0NDggMTAuNDc0OEM2LjM4NTIxIDEwLjI3MjUgNi40NDM2NyAxMC4wNzA0IDYuNTY4IDkuOTA5Nkw2LjYzNDQgOS44MzQ0TDguNDY4IDhMNi42MzQ0IDYuMTY1NkM2LjQ5NjY2IDYuMDI3ODUgNi40MTM5MSA1Ljg0NDU3IDYuNDAxNjkgNS42NTAxNUM2LjM4OTQ2IDUuNDU1NzIgNi40NDg2IDUuMjYzNTIgNi41NjggNS4xMDk2TDYuNjM0NCA1LjAzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk02LjYzNDQgNS4wMzQ0QzYuNzcyMTUgNC44OTY2NiA2Ljk1NTQzIDQuODEzOTEgNy4xNDk4NiA0LjgwMTY5QzcuMzQ0MjggNC43ODk0NiA3LjUzNjQ4IDQuODQ4NiA3LjY5MDQgNC45NjhMNy43NjU2IDUuMDM0NEwxMC4xNjU2IDcuNDM0NEMxMC4zMDMzIDcuNTcyMTUgMTAuMzg2MSA3Ljc1NTQzIDEwLjM5ODMgNy45NDk4NkMxMC40MTA1IDguMTQ0MjggMTAuMzUxNCA4LjMzNjQ4IDEwLjIzMiA4LjQ5MDRMMTAuMTY1NiA4LjU2NTZMNy43NjU2IDEwLjk2NTZDNy42MjE2MyAxMS4xMDkxIDcuNDI4NDUgMTEuMTkyNCA3LjIyNTI5IDExLjE5ODZDNy4wMjIxMyAxMS4yMDQ4IDYuODI0MjMgMTEuMTMzNCA2LjY3MTc4IDEwLjk5OUM2LjUxOTMzIDEwLjg2NDYgNi40MjM3NiAxMC42NzcyIDYuNDA0NDggMTAuNDc0OEM2LjM4NTIxIDEwLjI3MjUgNi40NDM2NyAxMC4wNzA0IDYuNTY4IDkuOTA5Nkw2LjYzNDQgOS44MzQ0TDguNDY4IDhMNi42MzQ0IDYuMTY1NkM2LjQ5NjY2IDYuMDI3ODUgNi40MTM5MSA1Ljg0NDU3IDYuNDAxNjkgNS42NTAxNUM2LjM4OTQ2IDUuNDU1NzIgNi40NDg2IDUuMjYzNTIgNi41NjggNS4xMDk2TDYuNjM0NCA1LjAzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcyMDEgMTUuOTk1NEMxMC43OTgxIDE1Ljk0MzkgOS41OTA2IDE1LjM0MzggOC4wMjcwMSAxNC4yMDg5TDcuOTk3ODggMTQuMTg4NEw3Ljk3MDkzIDE0LjIwODlDNi40MDczNSAxNS4zNDQ2IDUuMjAwNjEgMTUuOTQ0NiA0LjI3NzE2IDE1Ljk5NjJMNC4xNDc1MyAxNkMyLjE0Njk4IDE2IDEuODkyMDkgMTMuOTk3MyAyLjg5NjM3IDEwLjUwNDZMMi45MzU3IDEwLjM2OTVMMi44NjI4NyAxMC4zMTI2Qy0xLjU0NzUyIDYuNzk0MTggLTAuODExOTY3IDQuMzU5MDIgNC43MjI4NiA0LjE5MzY0TDQuODY5OTcgNC4xODk4NEw0Ljk1MzcyIDMuOTQyNTNDNS44MTU5OSAxLjQxNjM0IDYuNzIwNSAwLjA4NDk2NTIgNy44ODY0NiAwLjAwMzc5MzA4TDguMDAwMDcgMEM5LjIxOTE4IDAgMTAuMTUzNiAxLjMzNTE3IDExLjA0NTcgMy45NDI1M0wxMS4xMjg3IDQuMTg5ODRMMTEuMjc3MyA0LjE5MzY0QzE2LjgxMjEgNC4zNTkwMiAxNy41NDc2IDYuNzk0MTggMTMuMTM2NSAxMC4zMTE5TDEzLjA2MjMgMTAuMzY4OEwxMy4xMDIzIDEwLjUwMzhDMTQuMDg1NSAxMy45MjY3IDEzLjg1OTcgMTUuOTE4MSAxMS45NjkxIDE1Ljk5NjJMMTEuODUwNCAxNS45OTg1TDExLjcyMDEgMTUuOTk1NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcyMDEgMTUuOTk1NEMxMC43OTgxIDE1Ljk0MzkgOS41OTA2IDE1LjM0MzggOC4wMjcwMSAxNC4yMDg5TDcuOTk3ODggMTQuMTg4NEw3Ljk3MDkzIDE0LjIwODlDNi40MDczNSAxNS4zNDQ2IDUuMjAwNjEgMTUuOTQ0NiA0LjI3NzE2IDE1Ljk5NjJMNC4xNDc1MyAxNkMyLjE0Njk4IDE2IDEuODkyMDkgMTMuOTk3MyAyLjg5NjM3IDEwLjUwNDZMMi45MzU3IDEwLjM2OTVMMi44NjI4NyAxMC4zMTI2Qy0xLjU0NzUyIDYuNzk0MTggLTAuODExOTY3IDQuMzU5MDIgNC43MjI4NiA0LjE5MzY0TDQuODY5OTcgNC4xODk4NEw0Ljk1MzcyIDMuOTQyNTNDNS44MTU5OSAxLjQxNjM0IDYuNzIwNSAwLjA4NDk2NTIgNy44ODY0NiAwLjAwMzc5MzA4TDguMDAwMDcgMEM5LjIxOTE4IDAgMTAuMTUzNiAxLjMzNTE3IDExLjA0NTcgMy45NDI1M0wxMS4xMjg3IDQuMTg5ODRMMTEuMjc3MyA0LjE5MzY0QzE2LjgxMjEgNC4zNTkwMiAxNy41NDc2IDYuNzk0MTggMTMuMTM2NSAxMC4zMTE5TDEzLjA2MjMgMTAuMzY4OEwxMy4xMDIzIDEwLjUwMzhDMTQuMDg1NSAxMy45MjY3IDEzLjg1OTcgMTUuOTE4MSAxMS45NjkxIDE1Ljk5NjJMMTEuODUwNCAxNS45OTg1TDExLjcyMDEgMTUuOTk1NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTA3NDUgMC4wMDU1OTk5N0w3Ljk5ODc3IDBMOC4wOTMyOSAwLjAwNTU5OTk3TDguMTQwNTUgMC4wMTIwMDAxTDguMTg5NDEgMC4wMjI0MDAxTDguMjc4MzMgMC4wNDk2QzguMzM5NzQgMC4wNzIyMTA1IDguMzk4MTIgMC4xMDIzMDUgOC40NTIxNSAwLjEzOTJMOC41MzU0NiAwLjIwNDhMOC43Mzk3MiAwLjM3OTJDMTAuMzU1NiAxLjcxOTY1IDEyLjM5NzkgMi40Mzk0NCAxNC40OTgzIDIuNDA4OEwxNC43NzIyIDIuNDAwOEMxNC45NTEzIDIuMzkyNjQgMTUuMTI4IDIuNDQ0NzIgMTUuMjczOSAyLjU0ODcyQzE1LjQxOTkgMi42NTI3MSAxNS41MjY3IDIuODAyNiAxNS41NzczIDIuOTc0NEMxNS45NzA5IDQuMzExNjYgMTYuMDkxMyA1LjcxNDMgMTUuOTMxNCA3LjA5ODk3QzE1Ljc3MTYgOC40ODM2NCAxNS4zMzQ2IDkuODIyMDkgMTQuNjQ2NiAxMS4wMzQ4QzEzLjk1ODUgMTIuMjQ3NSAxMy4wMzM0IDEzLjMwOTYgMTEuOTI2MiAxNC4xNTgyQzEwLjgxOSAxNS4wMDY4IDkuNTUyMzUgMTUuNjI0NCA4LjIwMTQzIDE1Ljk3NDRDOC4wNjk1NyAxNi4wMDg1IDcuOTMxMTcgMTYuMDA4NSA3Ljc5OTMyIDE1Ljk3NDRDNi40NDgzMyAxNS42MjQ1IDUuMTgxNTUgMTUuMDA2OSA0LjA3NDI2IDE0LjE1ODRDMi45NjY5OCAxMy4zMDk5IDIuMDQxNzggMTIuMjQ3NyAxLjM1MzY2IDExLjAzNUMwLjY2NTUzNCA5LjgyMjMxIDAuMjI4NTIyIDguNDgzODMgMC4wNjg1OTI5IDcuMDk5MTJDLTAuMDkxMzM2MiA1LjcxNDQxIDAuMDI5MDgxNCA0LjMxMTcxIDAuNDIyNjkgMi45NzQ0QzAuNDczMjQyIDIuODAyNiAwLjU4MDA0MiAyLjY1MjcxIDAuNzI1OTk1IDIuNTQ4NzJDMC44NzE5NDggMi40NDQ3MiAxLjA0ODYxIDIuMzkyNjQgMS4yMjc3MiAyLjQwMDhDMy40MjA0OSAyLjUwMDkxIDUuNTcxNzIgMS43Nzk5OSA3LjI2MDIzIDAuMzc5Mkw3LjQ3MDkgMC4xOTkyTDcuNTQ3NzkgMC4xMzkyQzcuNjAxODIgMC4xMDIzMDUgNy42NjAyMSAwLjA3MjIxMDUgNy43MjE2MiAwLjA0OTZMNy44MTEzMyAwLjAyMjQwMDFDNy44NDI3MiAwLjAxNDgyNyA3Ljg3NTM2IDAuMDA5MjE2IDcuOTA3NDUgMC4wMDU1OTk5N1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTA3NDUgMC4wMDU1OTk5N0w3Ljk5ODc3IDBMOC4wOTMyOSAwLjAwNTU5OTk3TDguMTQwNTUgMC4wMTIwMDAxTDguMTg5NDEgMC4wMjI0MDAxTDguMjc4MzMgMC4wNDk2QzguMzM5NzQgMC4wNzIyMTA1IDguMzk4MTIgMC4xMDIzMDUgOC40NTIxNSAwLjEzOTJMOC41MzU0NiAwLjIwNDhMOC43Mzk3MiAwLjM3OTJDMTAuMzU1NiAxLjcxOTY1IDEyLjM5NzkgMi40Mzk0NCAxNC40OTgzIDIuNDA4OEwxNC43NzIyIDIuNDAwOEMxNC45NTEzIDIuMzkyNjQgMTUuMTI4IDIuNDQ0NzIgMTUuMjczOSAyLjU0ODcyQzE1LjQxOTkgMi42NTI3MSAxNS41MjY3IDIuODAyNiAxNS41NzczIDIuOTc0NEMxNS45NzA5IDQuMzExNjYgMTYuMDkxMyA1LjcxNDMgMTUuOTMxNCA3LjA5ODk3QzE1Ljc3MTYgOC40ODM2NCAxNS4zMzQ2IDkuODIyMDkgMTQuNjQ2NiAxMS4wMzQ4QzEzLjk1ODUgMTIuMjQ3NSAxMy4wMzM0IDEzLjMwOTYgMTEuOTI2MiAxNC4xNTgyQzEwLjgxOSAxNS4wMDY4IDkuNTUyMzUgMTUuNjI0NCA4LjIwMTQzIDE1Ljk3NDRDOC4wNjk1NyAxNi4wMDg1IDcuOTMxMTcgMTYuMDA4NSA3Ljc5OTMyIDE1Ljk3NDRDNi40NDgzMyAxNS42MjQ1IDUuMTgxNTUgMTUuMDA2OSA0LjA3NDI2IDE0LjE1ODRDMi45NjY5OCAxMy4zMDk5IDIuMDQxNzggMTIuMjQ3NyAxLjM1MzY2IDExLjAzNUMwLjY2NTUzNCA5LjgyMjMxIDAuMjI4NTIyIDguNDgzODMgMC4wNjg1OTI5IDcuMDk5MTJDLTAuMDkxMzM2MiA1LjcxNDQxIDAuMDI5MDgxNCA0LjMxMTcxIDAuNDIyNjkgMi45NzQ0QzAuNDczMjQyIDIuODAyNiAwLjU4MDA0MiAyLjY1MjcxIDAuNzI1OTk1IDIuNTQ4NzJDMC44NzE5NDggMi40NDQ3MiAxLjA0ODYxIDIuMzkyNjQgMS4yMjc3MiAyLjQwMDhDMy40MjA0OSAyLjUwMDkxIDUuNTcxNzIgMS43Nzk5OSA3LjI2MDIzIDAuMzc5Mkw3LjQ3MDkgMC4xOTkyTDcuNTQ3NzkgMC4xMzkyQzcuNjAxODIgMC4xMDIzMDUgNy42NjAyMSAwLjA3MjIxMDUgNy43MjE2MiAwLjA0OTZMNy44MTEzMyAwLjAyMjQwMDFDNy44NDI3MiAwLjAxNDgyNyA3Ljg3NTM2IDAuMDA5MjE2IDcuOTA3NDUgMC4wMDU1OTk5N1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjYzMTQgMy45MjQ1OWUtMDlDOS45MDc1MyAtMy41ODkyZS0wNSAxMC41Mjc2IDAuMjQ2MTY5IDEwLjk5NjQgMC42ODgyMzlDMTEuNDY1MiAxLjEzMDMxIDExLjc0NzQgMS43MzQ4MyAxMS43ODUyIDIuMzc4MTFMMTEuNzg5NSAyLjUyNjMyVjUuODk0NzRIMTMuNDczN0MxNC4wOTI3IDUuODk0NjQgMTQuNjkwMyA2LjEyMTg0IDE1LjE1MjkgNi41MzMyMUMxNS42MTU1IDYuOTQ0NTggMTUuOTEwOSA3LjUxMTQ5IDE1Ljk4MzEgOC4xMjYzMkwxNS45OTU4IDguMjcyODRMMTYgOC40MjEwNUwxNS45ODMxIDguNTg2MTFMMTUuMTM2IDEyLjgyMzZDMTQuODE1MSAxNC4xOTI4IDEzLjg3MTEgMTUuMTc4MSAxMi43Njk3IDE1LjE2NDZMMTIuNjMxNiAxNS4xNTc5SDUuODk0NzJDNS42ODg0NiAxNS4xNTc5IDUuNDg5MzggMTUuMDgyMSA1LjMzNTI1IDE0Ljk0NTFDNS4xODExMSAxNC44MDggNS4wODI2NCAxNC42MTkyIDUuMDU4NTEgMTQuNDE0M0w1LjA1MjYxIDE0LjMxNThMNS4wNTM0NSA2LjI4NTQ3QzUuMDUzNjEgNi4xMzc4IDUuMDkyNTkgNS45OTI3NiA1LjE2NjQ5IDUuODY0OTFDNS4yNDAzOSA1LjczNzA2IDUuMzQ2NjIgNS42MzA4OSA1LjQ3NDUxIDUuNTU3MDVDNS44MzM2IDUuMzQ5NjYgNi4xMzYwOCA1LjA1NzAxIDYuMzU1MjEgNC43MDQ5NUM2LjU3NDM1IDQuMzUyOSA2LjcwMzM5IDMuOTUyMjkgNi43MzA5MyAzLjUzODUzTDYuNzM2ODIgMy4zNjg0MlYyLjUyNjMyQzYuNzM2ODIgMS44NTYzIDcuMDAyOTkgMS4yMTM3MiA3LjQ3Njc2IDAuNzM5OTQxQzcuOTUwNTQgMC4yNjYxNjUgOC41OTMxMiAzLjkyNDU5ZS0wOSA5LjI2MzE0IDMuOTI0NTllLTA5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuNTI2MzIgNS44OTQ3NEMyLjczMjU4IDUuODk0NzYgMi45MzE2NSA1Ljk3MDQ5IDMuMDg1NzkgNi4xMDc1NUMzLjIzOTkyIDYuMjQ0NjEgMy4zMzgzOSA2LjQzMzQ3IDMuMzYyNTMgNi42MzgzMkwzLjM2ODQyIDYuNzM2ODRWMTQuMzE1OEMzLjM2ODM5IDE0LjUyMiAzLjI5MjY3IDE0LjcyMTEgMy4xNTU2MSAxNC44NzUzQzMuMDE4NTUgMTUuMDI5NCAyLjgyOTY5IDE1LjEyNzkgMi42MjQ4NCAxNS4xNTJMMi41MjYzMiAxNS4xNTc5SDEuNjg0MjFDMS4yNTkzIDE1LjE1OCAwLjg1MDA0OSAxNC45OTc2IDAuNTM4NDg2IDE0LjcwODZDMC4yMjY5MjMgMTQuNDE5NyAwLjAzNjA3ODcgMTQuMDIzNyAwLjAwNDIxMDcxIDEzLjZMOC40NDM2MmUtMDggMTMuNDczN1Y3LjU3ODk1Qy0wLjAwMDEzNDM4MyA3LjE1NDA0IDAuMTYwMzQyIDYuNzQ0NzkgMC40NDkyNjEgNi40MzMyMkMwLjczODE3OSA2LjEyMTY2IDEuMTM0MTkgNS45MzA4MiAxLjU1Nzg5IDUuODk4OTVMMS42ODQyMSA1Ljg5NDc0SDIuNTI2MzJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjYzMTQgMy45MjQ1OWUtMDlDOS45MDc1MyAtMy41ODkyZS0wNSAxMC41Mjc2IDAuMjQ2MTY5IDEwLjk5NjQgMC42ODgyMzlDMTEuNDY1MiAxLjEzMDMxIDExLjc0NzQgMS43MzQ4MyAxMS43ODUyIDIuMzc4MTFMMTEuNzg5NSAyLjUyNjMyVjUuODk0NzRIMTMuNDczN0MxNC4wOTI3IDUuODk0NjQgMTQuNjkwMyA2LjEyMTg0IDE1LjE1MjkgNi41MzMyMUMxNS42MTU1IDYuOTQ0NTggMTUuOTEwOSA3LjUxMTQ5IDE1Ljk4MzEgOC4xMjYzMkwxNS45OTU4IDguMjcyODRMMTYgOC40MjEwNUwxNS45ODMxIDguNTg2MTFMMTUuMTM2IDEyLjgyMzZDMTQuODE1MSAxNC4xOTI4IDEzLjg3MTEgMTUuMTc4MSAxMi43Njk3IDE1LjE2NDZMMTIuNjMxNiAxNS4xNTc5SDUuODk0NzJDNS42ODg0NiAxNS4xNTc5IDUuNDg5MzggMTUuMDgyMSA1LjMzNTI1IDE0Ljk0NTFDNS4xODExMSAxNC44MDggNS4wODI2NCAxNC42MTkyIDUuMDU4NTEgMTQuNDE0M0w1LjA1MjYxIDE0LjMxNThMNS4wNTM0NSA2LjI4NTQ3QzUuMDUzNjEgNi4xMzc4IDUuMDkyNTkgNS45OTI3NiA1LjE2NjQ5IDUuODY0OTFDNS4yNDAzOSA1LjczNzA2IDUuMzQ2NjIgNS42MzA4OSA1LjQ3NDUxIDUuNTU3MDVDNS44MzM2IDUuMzQ5NjYgNi4xMzYwOCA1LjA1NzAxIDYuMzU1MjEgNC43MDQ5NUM2LjU3NDM1IDQuMzUyOSA2LjcwMzM5IDMuOTUyMjkgNi43MzA5MyAzLjUzODUzTDYuNzM2ODIgMy4zNjg0MlYyLjUyNjMyQzYuNzM2ODIgMS44NTYzIDcuMDAyOTkgMS4yMTM3MiA3LjQ3Njc2IDAuNzM5OTQxQzcuOTUwNTQgMC4yNjYxNjUgOC41OTMxMiAzLjkyNDU5ZS0wOSA5LjI2MzE0IDMuOTI0NTllLTA5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuNTI2MzIgNS44OTQ3NEMyLjczMjU4IDUuODk0NzYgMi45MzE2NSA1Ljk3MDQ5IDMuMDg1NzkgNi4xMDc1NUMzLjIzOTkyIDYuMjQ0NjEgMy4zMzgzOSA2LjQzMzQ3IDMuMzYyNTMgNi42MzgzMkwzLjM2ODQyIDYuNzM2ODRWMTQuMzE1OEMzLjM2ODM5IDE0LjUyMiAzLjI5MjY3IDE0LjcyMTEgMy4xNTU2MSAxNC44NzUzQzMuMDE4NTUgMTUuMDI5NCAyLjgyOTY5IDE1LjEyNzkgMi42MjQ4NCAxNS4xNTJMMi41MjYzMiAxNS4xNTc5SDEuNjg0MjFDMS4yNTkzIDE1LjE1OCAwLjg1MDA0OSAxNC45OTc2IDAuNTM4NDg2IDE0LjcwODZDMC4yMjY5MjMgMTQuNDE5NyAwLjAzNjA3ODcgMTQuMDIzNyAwLjAwNDIxMDcxIDEzLjZMOC40NDM2MmUtMDggMTMuNDczN1Y3LjU3ODk1Qy0wLjAwMDEzNDM4MyA3LjE1NDA0IDAuMTYwMzQyIDYuNzQ0NzkgMC40NDkyNjEgNi40MzMyMkMwLjczODE3OSA2LjEyMTY2IDEuMTM0MTkgNS45MzA4MiAxLjU1Nzg5IDUuODk4OTVMMS42ODQyMSA1Ljg5NDc0SDIuNTI2MzJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjYzMTQgMTUuMTY0NkM5LjkwNzM5IDE1LjE2NDcgMTAuNTI3MyAxNC45MTg2IDEwLjk5NjEgMTQuNDc2N0MxMS40NjUgMTQuMDM0OCAxMS43NDcyIDEzLjQzMDUgMTEuNzg1MiAxMi43ODczTDExLjc4OTUgMTIuNjM4M1Y5LjI2OTg3SDEzLjQ3MzdDMTQuMDkyNyA5LjI2OTk3IDE0LjY5MDMgOS4wNDI3NyAxNS4xNTI5IDguNjMxNEMxNS42MTU1IDguMjIwMDMgMTUuOTEwOSA3LjY1MzEyIDE1Ljk4MzEgNy4wMzgyOUwxNS45OTU4IDYuODkyNjFMMTYgNi43NDM1NkwxNS45ODMxIDYuNTc4NUwxNS4xMzYgMi4zNDEwM0MxNC44MTUxIDAuOTcyNjA4IDEzLjg3MTEgLTAuMDEzNDk3NSAxMi43Njk3IC0yLjM4MTUzZS0wNUwxMi42MzE2IDAuMDA2NzEyOTRINS44OTQ3MkM1LjY4ODMzIDAuMDA2NzY0MzggNS40ODkxNSAwLjA4MjYwNzcgNS4zMzQ5OSAwLjIxOTg0QzUuMTgwODQgMC4zNTcwNzMgNS4wODI0NSAwLjU0NjEzOSA1LjA1ODUxIDAuNzUxMTM0TDUuMDUyNjEgMC44NDg4MThMNS4wNTM0NSA4Ljg3OTEzQzUuMDUzNDYgOS4wMjY5NSA1LjA5MjM3IDkuMTcyMTYgNS4xNjYyOCA5LjMwMDE3QzUuMjQwMTkgOS40MjgxOSA1LjM0NjQ5IDkuNTM0NDkgNS40NzQ1MSA5LjYwODRDNS44MzM0OSA5LjgxNTcxIDYuMTM1ODkgMTAuMTA4MiA2LjM1NTAyIDEwLjQ2MDFDNi41NzQxNSAxMC44MTIgNi43MDMyNSAxMS4yMTI1IDYuNzMwOTMgMTEuNjI2MUw2LjczNjgyIDExLjc5NjJWMTIuNjM4M0M2LjczNjgyIDEzLjMwODMgNy4wMDI5OSAxMy45NTA5IDcuNDc2NzYgMTQuNDI0N0M3Ljk1MDU0IDE0Ljg5ODQgOC41OTMxMiAxNS4xNjQ2IDkuMjYzMTQgMTUuMTY0NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yLjUyNjMyIDkuMjY5ODdDMi43MzI1OCA5LjI2OTg0IDIuOTMxNjUgOS4xOTQxMiAzLjA4NTc5IDkuMDU3MDZDMy4yMzk5MiA4LjkyIDMuMzM4MzkgOC43MzExNCAzLjM2MjUzIDguNTI2MjlMMy4zNjg0MiA4LjQyNzc3VjAuODQ4ODE5QzMuMzY4MzkgMC42NDI1NTkgMy4yOTI2NyAwLjQ0MzQ4MyAzLjE1NTYxIDAuMjg5MzQ4QzMuMDE4NTUgMC4xMzUyMTMgMi44Mjk2OSAwLjAzNjc0MTIgMi42MjQ4NCAwLjAxMjYwODhMMi41MjYzMiAwLjAwNjcxMzkySDEuNjg0MjFDMS4yNTkwMyAwLjAwNjYxMTEzIDAuODQ5NTUyIDAuMTY3MzIyIDAuNTM3OTQ3IDAuNDU2NTkyQzAuMjI2MzQxIDAuNzQ1ODYxIDAuMDM1NjczNyAxLjE0MjI4IDAuMDA0MjEwNjIgMS41NjYyOUwwIDEuNjkyNjFWNy41ODczNUM3Ljc5NTg1ZS0wNSA4LjAxMjExIDAuMTYwNjUgOC40MjExNSAwLjQ0OTU0NyA4LjczMjU0QzAuNzM4NDQ0IDkuMDQzOTIgMS4xMzQzMyA5LjIzNDY1IDEuNTU3ODkgOS4yNjY1TDEuNjg0MjEgOS4yNzA3MUwyLjUyNjMyIDkuMjY5ODdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjYzMTQgMTUuMTY0NkM5LjkwNzM5IDE1LjE2NDcgMTAuNTI3MyAxNC45MTg2IDEwLjk5NjEgMTQuNDc2N0MxMS40NjUgMTQuMDM0OCAxMS43NDcyIDEzLjQzMDUgMTEuNzg1MiAxMi43ODczTDExLjc4OTUgMTIuNjM4M1Y5LjI2OTg3SDEzLjQ3MzdDMTQuMDkyNyA5LjI2OTk3IDE0LjY5MDMgOS4wNDI3NyAxNS4xNTI5IDguNjMxNEMxNS42MTU1IDguMjIwMDMgMTUuOTEwOSA3LjY1MzEyIDE1Ljk4MzEgNy4wMzgyOUwxNS45OTU4IDYuODkyNjFMMTYgNi43NDM1NkwxNS45ODMxIDYuNTc4NUwxNS4xMzYgMi4zNDEwM0MxNC44MTUxIDAuOTcyNjA4IDEzLjg3MTEgLTAuMDEzNDk3NSAxMi43Njk3IC0yLjM4MTUzZS0wNUwxMi42MzE2IDAuMDA2NzEyOTRINS44OTQ3MkM1LjY4ODMzIDAuMDA2NzY0MzggNS40ODkxNSAwLjA4MjYwNzcgNS4zMzQ5OSAwLjIxOTg0QzUuMTgwODQgMC4zNTcwNzMgNS4wODI0NSAwLjU0NjEzOSA1LjA1ODUxIDAuNzUxMTM0TDUuMDUyNjEgMC44NDg4MThMNS4wNTM0NSA4Ljg3OTEzQzUuMDUzNDYgOS4wMjY5NSA1LjA5MjM3IDkuMTcyMTYgNS4xNjYyOCA5LjMwMDE3QzUuMjQwMTkgOS40MjgxOSA1LjM0NjQ5IDkuNTM0NDkgNS40NzQ1MSA5LjYwODRDNS44MzM0OSA5LjgxNTcxIDYuMTM1ODkgMTAuMTA4MiA2LjM1NTAyIDEwLjQ2MDFDNi41NzQxNSAxMC44MTIgNi43MDMyNSAxMS4yMTI1IDYuNzMwOTMgMTEuNjI2MUw2LjczNjgyIDExLjc5NjJWMTIuNjM4M0M2LjczNjgyIDEzLjMwODMgNy4wMDI5OSAxMy45NTA5IDcuNDc2NzYgMTQuNDI0N0M3Ljk1MDU0IDE0Ljg5ODQgOC41OTMxMiAxNS4xNjQ2IDkuMjYzMTQgMTUuMTY0NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yLjUyNjMyIDkuMjY5ODdDMi43MzI1OCA5LjI2OTg0IDIuOTMxNjUgOS4xOTQxMiAzLjA4NTc5IDkuMDU3MDZDMy4yMzk5MiA4LjkyIDMuMzM4MzkgOC43MzExNCAzLjM2MjUzIDguNTI2MjlMMy4zNjg0MiA4LjQyNzc3VjAuODQ4ODE5QzMuMzY4MzkgMC42NDI1NTkgMy4yOTI2NyAwLjQ0MzQ4MyAzLjE1NTYxIDAuMjg5MzQ4QzMuMDE4NTUgMC4xMzUyMTMgMi44Mjk2OSAwLjAzNjc0MTIgMi42MjQ4NCAwLjAxMjYwODhMMi41MjYzMiAwLjAwNjcxMzkySDEuNjg0MjFDMS4yNTkwMyAwLjAwNjYxMTEzIDAuODQ5NTUyIDAuMTY3MzIyIDAuNTM3OTQ3IDAuNDU2NTkyQzAuMjI2MzQxIDAuNzQ1ODYxIDAuMDM1NjczNyAxLjE0MjI4IDAuMDA0MjEwNjIgMS41NjYyOUwwIDEuNjkyNjFWNy41ODczNUM3Ljc5NTg1ZS0wNSA4LjAxMjExIDAuMTYwNjUgOC40MjExNSAwLjQ0OTU0NyA4LjczMjU0QzAuNzM4NDQ0IDkuMDQzOTIgMS4xMzQzMyA5LjIzNDY1IDEuNTU3ODkgOS4yNjY1TDEuNjg0MjEgOS4yNzA3MUwyLjUyNjMyIDkuMjY5ODdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTk5OTggMEM2LjM5MTEgMCA3LjE2NDQ2IDAuMjM0NTk2IDcuODIyMjYgMC42NzQxMjFDOC40ODAwNSAxLjExMzY1IDguOTkyNzQgMS43MzgzNiA5LjI5NTQ5IDIuNDY5MjdDOS41OTgyNCAzLjIwMDE3IDkuNjc3NDYgNC4wMDQ0NCA5LjUyMzEyIDQuNzgwMzZDOS4zNjg3OCA1LjU1NjI4IDguOTg3ODEgNi4yNjkwMiA4LjQyODQgNi44Mjg0M0M3Ljg2ODk5IDcuMzg3ODQgNy4xNTYyNiA3Ljc2ODggNi4zODAzNCA3LjkyMzE0QzUuNjA0NDEgOC4wNzc0OCA0LjgwMDE1IDcuOTk4MjcgNC4wNjkyNCA3LjY5NTUyQzMuMzM4MzQgNy4zOTI3NyAyLjcxMzYyIDYuODgwMDggMi4yNzQxIDYuMjIyMjhDMS44MzQ1NyA1LjU2NDQ4IDEuNTk5OTggNC43OTExMiAxLjU5OTk4IDRMMS42MDM5OCAzLjgyNjRDMS42NDg3MSAyLjc5NjYgMi4wODkyNiAxLjgyMzgyIDIuODMzNzUgMS4xMTA5M0MzLjU3ODI1IDAuMzk4MDMzIDQuNTY5MiA1Ljk1NTRlLTA1IDUuNTk5OTggMFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03LjIgOS42QzguMjYwODcgOS42IDkuMjc4MjggMTAuMDIxNCAxMC4wMjg0IDEwLjc3MTZDMTAuNzc4NiAxMS41MjE3IDExLjIgMTIuNTM5MSAxMS4yIDEzLjZWMTQuNEMxMS4yIDE0LjgyNDMgMTEuMDMxNCAxNS4yMzEzIDEwLjczMTQgMTUuNTMxNEMxMC40MzEzIDE1LjgzMTQgMTAuMDI0MyAxNiA5LjYgMTZIMS42QzEuMTc1NjUgMTYgMC43Njg2ODcgMTUuODMxNCAwLjQ2ODYyOSAxNS41MzE0QzAuMTY4NTcxIDE1LjIzMTMgMCAxNC44MjQzIDAgMTQuNFYxMy42QzAgMTIuNTM5MSAwLjQyMTQyNyAxMS41MjE3IDEuMTcxNTcgMTAuNzcxNkMxLjkyMTcyIDEwLjAyMTQgMi45MzkxMyA5LjYgNCA5LjZINy4yWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTk5OTggMEM2LjM5MTEgMCA3LjE2NDQ2IDAuMjM0NTk2IDcuODIyMjYgMC42NzQxMjFDOC40ODAwNSAxLjExMzY1IDguOTkyNzQgMS43MzgzNiA5LjI5NTQ5IDIuNDY5MjdDOS41OTgyNCAzLjIwMDE3IDkuNjc3NDYgNC4wMDQ0NCA5LjUyMzEyIDQuNzgwMzZDOS4zNjg3OCA1LjU1NjI4IDguOTg3ODEgNi4yNjkwMiA4LjQyODQgNi44Mjg0M0M3Ljg2ODk5IDcuMzg3ODQgNy4xNTYyNiA3Ljc2ODggNi4zODAzNCA3LjkyMzE0QzUuNjA0NDEgOC4wNzc0OCA0LjgwMDE1IDcuOTk4MjcgNC4wNjkyNCA3LjY5NTUyQzMuMzM4MzQgNy4zOTI3NyAyLjcxMzYyIDYuODgwMDggMi4yNzQxIDYuMjIyMjhDMS44MzQ1NyA1LjU2NDQ4IDEuNTk5OTggNC43OTExMiAxLjU5OTk4IDRMMS42MDM5OCAzLjgyNjRDMS42NDg3MSAyLjc5NjYgMi4wODkyNiAxLjgyMzgyIDIuODMzNzUgMS4xMTA5M0MzLjU3ODI1IDAuMzk4MDMzIDQuNTY5MiA1Ljk1NTRlLTA1IDUuNTk5OTggMFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03LjIgOS42QzguMjYwODcgOS42IDkuMjc4MjggMTAuMDIxNCAxMC4wMjg0IDEwLjc3MTZDMTAuNzc4NiAxMS41MjE3IDExLjIgMTIuNTM5MSAxMS4yIDEzLjZWMTQuNEMxMS4yIDE0LjgyNDMgMTEuMDMxNCAxNS4yMzEzIDEwLjczMTQgMTUuNTMxNEMxMC40MzEzIDE1LjgzMTQgMTAuMDI0MyAxNiA5LjYgMTZIMS42QzEuMTc1NjUgMTYgMC43Njg2ODcgMTUuODMxNCAwLjQ2ODYyOSAxNS41MzE0QzAuMTY4NTcxIDE1LjIzMTMgMCAxNC44MjQzIDAgMTQuNFYxMy42QzAgMTIuNTM5MSAwLjQyMTQyNyAxMS41MjE3IDEuMTcxNTcgMTAuNzcxNkMxLjkyMTcyIDEwLjAyMTQgMi45MzkxMyA5LjYgNCA5LjZINy4yWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 193, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk03LjQzNDQgNS44MzQ0QzcuNTcyMTUgNS42OTY2NiA3Ljc1NTQzIDUuNjEzOTEgNy45NDk4NiA1LjYwMTY5QzguMTQ0MjggNS41ODk0NiA4LjMzNjQ4IDUuNjQ4NiA4LjQ5MDQgNS43NjhMOC41NjU2IDUuODM0NEwxMC45NjU2IDguMjM0NEMxMS4xMDkxIDguMzc4MzcgMTEuMTkyNCA4LjU3MTU1IDExLjE5ODYgOC43NzQ3MUMxMS4yMDQ4IDguOTc3ODcgMTEuMTMzNCA5LjE3NTc3IDEwLjk5OSA5LjMyODIyQzEwLjg2NDYgOS40ODA2OCAxMC42NzcyIDkuNTc2MjQgMTAuNDc0OCA5LjU5NTUyQzEwLjI3MjUgOS42MTQ3OSAxMC4wNzA0IDkuNTU2MzMgOS45MDk2IDkuNDMyTDkuODM0NCA5LjM2NTZMOCA3LjUzMkw2LjE2NTYgOS4zNjU2QzYuMDI3ODUgOS41MDMzNCA1Ljg0NDU3IDkuNTg2MDkgNS42NTAxNSA5LjU5ODMxQzUuNDU1NzIgOS42MTA1NCA1LjI2MzUyIDkuNTUxNCA1LjEwOTYgOS40MzJMNS4wMzQ0IDkuMzY1NkM0Ljg5NjY2IDkuMjI3ODUgNC44MTM5MSA5LjA0NDU3IDQuODAxNjkgOC44NTAxNUM0Ljc4OTQ2IDguNjU1NzIgNC44NDg2IDguNDYzNTIgNC45NjggOC4zMDk2TDUuMDM0NCA4LjIzNDRMNy40MzQ0IDUuODM0NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk03LjQzNDQgNS44MzQ0QzcuNTcyMTUgNS42OTY2NiA3Ljc1NTQzIDUuNjEzOTEgNy45NDk4NiA1LjYwMTY5QzguMTQ0MjggNS41ODk0NiA4LjMzNjQ4IDUuNjQ4NiA4LjQ5MDQgNS43NjhMOC41NjU2IDUuODM0NEwxMC45NjU2IDguMjM0NEMxMS4xMDkxIDguMzc4MzcgMTEuMTkyNCA4LjU3MTU1IDExLjE5ODYgOC43NzQ3MUMxMS4yMDQ4IDguOTc3ODcgMTEuMTMzNCA5LjE3NTc3IDEwLjk5OSA5LjMyODIyQzEwLjg2NDYgOS40ODA2OCAxMC42NzcyIDkuNTc2MjQgMTAuNDc0OCA5LjU5NTUyQzEwLjI3MjUgOS42MTQ3OSAxMC4wNzA0IDkuNTU2MzMgOS45MDk2IDkuNDMyTDkuODM0NCA5LjM2NTZMOCA3LjUzMkw2LjE2NTYgOS4zNjU2QzYuMDI3ODUgOS41MDMzNCA1Ljg0NDU3IDkuNTg2MDkgNS42NTAxNSA5LjU5ODMxQzUuNDU1NzIgOS42MTA1NCA1LjI2MzUyIDkuNTUxNCA1LjEwOTYgOS40MzJMNS4wMzQ0IDkuMzY1NkM0Ljg5NjY2IDkuMjI3ODUgNC44MTM5MSA5LjA0NDU3IDQuODAxNjkgOC44NTAxNUM0Ljc4OTQ2IDguNjU1NzIgNC44NDg2IDguNDYzNTIgNC45NjggOC4zMDk2TDUuMDM0NCA4LjIzNDRMNy40MzQ0IDUuODM0NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 168, 130, 255;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 68, 207, 110;
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
  --callout-color: 83, 223, 221;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="accessible"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="archive"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="award"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="badge"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="badges"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="balloon"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bandage"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bell"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bitcoin"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="briefcase"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bubble"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="camera"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cannabis"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="card"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="clipboard"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="clock"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cloud"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cookie"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="desktop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="diamond"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(255, 255, 255, 0.07);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(245, 245, 245);
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(153, 109, 247, 0.1);
  border-bottom-color: rgba(153, 109, 247, 0.15);
  border-left-color: rgba(153, 109, 247, 0.15);
  border-right-color: rgba(153, 109, 247, 0.15);
  border-top-color: rgba(153, 109, 247, 0.15);
  color: rgb(153, 109, 247);
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
  --button-radius: 8px !important;
  --callout-background-color-opacity: 0.1;
  --callout-border-width: 1px;
  --callout-padding: 24px;
  --callout-radius: 8px;
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
  --list-marker-color: hsl(0, 0%, 60%) !important;
  --list-marker-color-collapsed: hsl(259.1, 89.9%, 69.9%) !important;
  --list-marker-color-hover: hsl(0, 0%, 20%) !important;
  --menu-background: hsl(0, 0%, 96%) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-background-active: transparent !important;
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

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(252, 252, 252);
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(153, 109, 247, 0.1);
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 51, 51);
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
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body del {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
  border-radius: 35%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
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
  border-bottom-color: rgb(153, 109, 247);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(153, 109, 247);
  border-radius: 8px;
  border-right-color: rgb(153, 109, 247);
  border-top-color: rgb(153, 109, 247);
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
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk0xMC40IDcuMkg1LjZMNS41MDY0IDcuMjA1NkM1LjMwMzkyIDcuMjI5NjggNS4xMTgyOCA3LjMzMDE3IDQuOTg3NDEgNy40ODY1M0M0Ljg1NjU0IDcuNjQyOSA0Ljc5MDMxIDcuODQzMzMgNC44MDIyNiA4LjA0Njg4QzQuODE0MjEgOC4yNTA0NCA0LjkwMzQ0IDguNDQxNzUgNS4wNTE3MSA4LjU4MTcyQzUuMTk5OTcgOC43MjE3IDUuMzk2MSA4Ljc5OTc3IDUuNiA4LjhIMTAuNEwxMC40OTM2IDguNzk0NEMxMC42OTYxIDguNzcwMzIgMTAuODgxNyA4LjY2OTgzIDExLjAxMjYgOC41MTM0N0MxMS4xNDM1IDguMzU3MSAxMS4yMDk3IDguMTU2NjcgMTEuMTk3NyA3Ljk1MzEyQzExLjE4NTggNy43NDk1NiAxMS4wOTY2IDcuNTU4MjUgMTAuOTQ4MyA3LjQxODI4QzEwLjggNy4yNzgzIDEwLjYwMzkgNy4yMDAyMyAxMC40IDcuMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk0xMC40IDcuMkg1LjZMNS41MDY0IDcuMjA1NkM1LjMwMzkyIDcuMjI5NjggNS4xMTgyOCA3LjMzMDE3IDQuOTg3NDEgNy40ODY1M0M0Ljg1NjU0IDcuNjQyOSA0Ljc5MDMxIDcuODQzMzMgNC44MDIyNiA4LjA0Njg4QzQuODE0MjEgOC4yNTA0NCA0LjkwMzQ0IDguNDQxNzUgNS4wNTE3MSA4LjU4MTcyQzUuMTk5OTcgOC43MjE3IDUuMzk2MSA4Ljc5OTc3IDUuNiA4LjhIMTAuNEwxMC40OTM2IDguNzk0NEMxMC42OTYxIDguNzcwMzIgMTAuODgxNyA4LjY2OTgzIDExLjAxMjYgOC41MTM0N0MxMS4xNDM1IDguMzU3MSAxMS4yMDk3IDguMTU2NjcgMTEuMTk3NyA3Ljk1MzEyQzExLjE4NTggNy43NDk1NiAxMS4wOTY2IDcuNTU4MjUgMTAuOTQ4MyA3LjQxODI4QzEwLjggNy4yNzgzIDEwLjYwMzkgNy4yMDAyMyAxMC40IDcuMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04LjAwNzYgMTAuNEw3LjkwNiAxMC40MDU2QzcuNzExNTUgMTAuNDI4NyA3LjUzMjMzIDEwLjUyMjQgNy40MDIzIDEwLjY2ODhDNy4yNzIyNyAxMC44MTUyIDcuMjAwNDUgMTEuMDA0MiA3LjIwMDQ1IDExLjJDNy4yMDA0NSAxMS4zOTU4IDcuMjcyMjcgMTEuNTg0OCA3LjQwMjMgMTEuNzMxMkM3LjUzMjMzIDExLjg3NzYgNy43MTE1NSAxMS45NzEzIDcuOTA2IDExLjk5NDRMNy45OTk2IDEyTDguMTAxMiAxMS45OTQ0QzguMjk1NjUgMTEuOTcxMyA4LjQ3NDg3IDExLjg3NzYgOC42MDQ5IDExLjczMTJDOC43MzQ5MyAxMS41ODQ4IDguODA2NzUgMTEuMzk1OCA4LjgwNjc1IDExLjJDOC44MDY3NSAxMS4wMDQyIDguNzM0OTMgMTAuODE1MiA4LjYwNDkgMTAuNjY4OEM4LjQ3NDg3IDEwLjUyMjQgOC4yOTU2NSAxMC40Mjg3IDguMTAxMiAxMC40MDU2TDguMDA3NiAxMC40Wk03Ljk5OTYgNEM3LjgwMzY0IDQuMDAwMDMgNy42MTQ1MSA0LjA3MTk2IDcuNDY4MDggNC4yMDIxN0M3LjMyMTY0IDQuMzMyMzggNy4yMjgwOSA0LjUxMTggNy4yMDUxNiA0LjcwNjRMNy4xOTk1NiA0LjhWOEw3LjIwNTE2IDguMDkzNkM3LjIyODI5IDguMjg4MDQgNy4zMjE5MyA4LjQ2NzI0IDcuNDY4MzUgOC41OTcyN0M3LjYxNDc2IDguNzI3MjkgNy44MDM3OCA4Ljc5OTExIDcuOTk5NiA4Ljc5OTExQzguMTk1NDIgOC43OTkxMSA4LjM4NDQ0IDguNzI3MjkgOC41MzA4NSA4LjU5NzI3QzguNjc3MjcgOC40NjcyNCA4Ljc3MDkxIDguMjg4MDQgOC43OTQwNCA4LjA5MzZMOC43OTk2NCA4VjQuOEw4Ljc5NDA0IDQuNzA2NEM4Ljc3MTExIDQuNTExOCA4LjY3NzU2IDQuMzMyMzggOC41MzExMiA0LjIwMjE3QzguMzg0NjkgNC4wNzE5NiA4LjE5NTU2IDQuMDAwMDMgNy45OTk2IDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04LjAwNzYgMTAuNEw3LjkwNiAxMC40MDU2QzcuNzExNTUgMTAuNDI4NyA3LjUzMjMzIDEwLjUyMjQgNy40MDIzIDEwLjY2ODhDNy4yNzIyNyAxMC44MTUyIDcuMjAwNDUgMTEuMDA0MiA3LjIwMDQ1IDExLjJDNy4yMDA0NSAxMS4zOTU4IDcuMjcyMjcgMTEuNTg0OCA3LjQwMjMgMTEuNzMxMkM3LjUzMjMzIDExLjg3NzYgNy43MTE1NSAxMS45NzEzIDcuOTA2IDExLjk5NDRMNy45OTk2IDEyTDguMTAxMiAxMS45OTQ0QzguMjk1NjUgMTEuOTcxMyA4LjQ3NDg3IDExLjg3NzYgOC42MDQ5IDExLjczMTJDOC43MzQ5MyAxMS41ODQ4IDguODA2NzUgMTEuMzk1OCA4LjgwNjc1IDExLjJDOC44MDY3NSAxMS4wMDQyIDguNzM0OTMgMTAuODE1MiA4LjYwNDkgMTAuNjY4OEM4LjQ3NDg3IDEwLjUyMjQgOC4yOTU2NSAxMC40Mjg3IDguMTAxMiAxMC40MDU2TDguMDA3NiAxMC40Wk03Ljk5OTYgNEM3LjgwMzY0IDQuMDAwMDMgNy42MTQ1MSA0LjA3MTk2IDcuNDY4MDggNC4yMDIxN0M3LjMyMTY0IDQuMzMyMzggNy4yMjgwOSA0LjUxMTggNy4yMDUxNiA0LjcwNjRMNy4xOTk1NiA0LjhWOEw3LjIwNTE2IDguMDkzNkM3LjIyODI5IDguMjg4MDQgNy4zMjE5MyA4LjQ2NzI0IDcuNDY4MzUgOC41OTcyN0M3LjYxNDc2IDguNzI3MjkgNy44MDM3OCA4Ljc5OTExIDcuOTk5NiA4Ljc5OTExQzguMTk1NDIgOC43OTkxMSA4LjM4NDQ0IDguNzI3MjkgOC41MzA4NSA4LjU5NzI3QzguNjc3MjcgOC40NjcyNCA4Ljc3MDkxIDguMjg4MDQgOC43OTQwNCA4LjA5MzZMOC43OTk2NCA4VjQuOEw4Ljc5NDA0IDQuNzA2NEM4Ljc3MTExIDQuNTExOCA4LjY3NzU2IDQuMzMyMzggOC41MzExMiA0LjIwMjE3QzguMzg0NjkgNC4wNzE5NiA4LjE5NTU2IDQuMDAwMDMgNy45OTk2IDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgMTAuNEM3LjgwMzY0IDEwLjQgNy42MTQ1MSAxMC40NzIgNy40NjgwOCAxMC42MDIyQzcuMzIxNjQgMTAuNzMyNCA3LjIyODA5IDEwLjkxMTggNy4yMDUxNiAxMS4xMDY0TDcuMTk5NTYgMTEuMkw3LjIwNTE2IDExLjMwMTZDNy4yMjgyOSAxMS40OTYgNy4zMjE5MyAxMS42NzUyIDcuNDY4MzUgMTEuODA1M0M3LjYxNDc2IDExLjkzNTMgNy44MDM3OCAxMi4wMDcxIDcuOTk5NiAxMi4wMDcxQzguMTk1NDIgMTIuMDA3MSA4LjM4NDQ0IDExLjkzNTMgOC41MzA4NSAxMS44MDUzQzguNjc3MjcgMTEuNjc1MiA4Ljc3MDkxIDExLjQ5NiA4Ljc5NDA0IDExLjMwMTZMOC43OTk2NCAxMS4yMDhMOC43OTQwNCAxMS4xMDY0QzguNzcxMTEgMTAuOTExOCA4LjY3NzU2IDEwLjczMjQgOC41MzExMiAxMC42MDIyQzguMzg0NjkgMTAuNDcyIDguMTk1NTYgMTAuNCA3Ljk5OTYgMTAuNFpNOS4wOTQwNiA1LjA2MTZDOC42MTUxNCA0LjgxNjc3IDguMDY3NSA0Ljc0MTA4IDcuNTQwMTMgNC44NDY4MUM3LjAxMjc1IDQuOTUyNTQgNi41MzY2MyA1LjIzMzQ5IDYuMTg5MTEgNS42NDRDNi4wNTY2MSA1Ljc5OTIgNS45ODg0MyA1Ljk5OTE3IDUuOTk4NTIgNi4yMDI5OUM2LjAwODYyIDYuNDA2OCA2LjA5NjIyIDYuNTk5MDYgNi4yNDM0MSA2Ljc0MDQxQzYuMzkwNTkgNi44ODE3NiA2LjU4NjI0IDYuOTYxNTMgNi43OTAzIDYuOTYzMzlDNi45OTQzNyA2Ljk2NTI0IDcuMTkxNDMgNi44ODkwNSA3LjM0MTE3IDYuNzUwNEw3LjQ3Nzk3IDYuNjA2NEM3LjU5NiA2LjQ5ODA3IDcuNzQ0MzkgNi40Mjg0OSA3LjkwMzE2IDYuNDA3MDNDOC4wNjE5MyA2LjM4NTU4IDguMjIzNDcgNi40MTMyOCA4LjM2NjAyIDYuNDg2NEM4LjUxOTY5IDYuNTY0MTcgOC42NDQxNyA2LjY4OTQ2IDguNzIwOTMgNi44NDM2M0M4Ljc5NzcgNi45OTc4IDguODIyNjYgNy4xNzI2MyA4Ljc5MjEgNy4zNDIxM0M4Ljc2MTU1IDcuNTExNjIgOC42NzcxIDcuNjY2NzMgOC41NTEzMyA3Ljc4NDM5QzguNDI1NTUgNy45MDIwNSA4LjI2NTE3IDcuOTc1OTkgOC4wOTQwMSA3Ljk5NTJMNy45MDg0IDguMDA0OEM3LjcwNDkxIDguMDI3MTkgNy41MTc3NSA4LjEyNjcyIDcuMzg1NDQgOC4yODI5MkM3LjI1MzEyIDguNDM5MTEgNy4xODU3MSA4LjY0MDA4IDcuMTk3MDkgOC44NDQ0N0M3LjIwODQ3IDkuMDQ4ODUgNy4yOTc3NyA5LjI0MTEgNy40NDY2IDkuMzgxNjRDNy41OTU0NCA5LjUyMjE5IDcuNzkyNDkgOS42MDAzMyA3Ljk5NzIgOS42QzguNTM2OTMgOS42MDE2MiA5LjA2MTQ1IDkuNDIxMjkgOS40ODYwNiA5LjA4ODEyQzkuOTEwNjcgOC43NTQ5NSAxMC4yMTA2IDguMjg4MzkgMTAuMzM3NCA3Ljc2Mzc5QzEwLjQ2NDIgNy4yMzkxOSAxMC40MTA0IDYuNjg3MTcgMTAuMTg0OCA2LjE5Njg3QzkuOTU5MjMgNS43MDY1OCA5LjU3NDk2IDUuMzA2NjIgOS4wOTQwNiA1LjA2MTZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgMTAuNEM3LjgwMzY0IDEwLjQgNy42MTQ1MSAxMC40NzIgNy40NjgwOCAxMC42MDIyQzcuMzIxNjQgMTAuNzMyNCA3LjIyODA5IDEwLjkxMTggNy4yMDUxNiAxMS4xMDY0TDcuMTk5NTYgMTEuMkw3LjIwNTE2IDExLjMwMTZDNy4yMjgyOSAxMS40OTYgNy4zMjE5MyAxMS42NzUyIDcuNDY4MzUgMTEuODA1M0M3LjYxNDc2IDExLjkzNTMgNy44MDM3OCAxMi4wMDcxIDcuOTk5NiAxMi4wMDcxQzguMTk1NDIgMTIuMDA3MSA4LjM4NDQ0IDExLjkzNTMgOC41MzA4NSAxMS44MDUzQzguNjc3MjcgMTEuNjc1MiA4Ljc3MDkxIDExLjQ5NiA4Ljc5NDA0IDExLjMwMTZMOC43OTk2NCAxMS4yMDhMOC43OTQwNCAxMS4xMDY0QzguNzcxMTEgMTAuOTExOCA4LjY3NzU2IDEwLjczMjQgOC41MzExMiAxMC42MDIyQzguMzg0NjkgMTAuNDcyIDguMTk1NTYgMTAuNCA3Ljk5OTYgMTAuNFpNOS4wOTQwNiA1LjA2MTZDOC42MTUxNCA0LjgxNjc3IDguMDY3NSA0Ljc0MTA4IDcuNTQwMTMgNC44NDY4MUM3LjAxMjc1IDQuOTUyNTQgNi41MzY2MyA1LjIzMzQ5IDYuMTg5MTEgNS42NDRDNi4wNTY2MSA1Ljc5OTIgNS45ODg0MyA1Ljk5OTE3IDUuOTk4NTIgNi4yMDI5OUM2LjAwODYyIDYuNDA2OCA2LjA5NjIyIDYuNTk5MDYgNi4yNDM0MSA2Ljc0MDQxQzYuMzkwNTkgNi44ODE3NiA2LjU4NjI0IDYuOTYxNTMgNi43OTAzIDYuOTYzMzlDNi45OTQzNyA2Ljk2NTI0IDcuMTkxNDMgNi44ODkwNSA3LjM0MTE3IDYuNzUwNEw3LjQ3Nzk3IDYuNjA2NEM3LjU5NiA2LjQ5ODA3IDcuNzQ0MzkgNi40Mjg0OSA3LjkwMzE2IDYuNDA3MDNDOC4wNjE5MyA2LjM4NTU4IDguMjIzNDcgNi40MTMyOCA4LjM2NjAyIDYuNDg2NEM4LjUxOTY5IDYuNTY0MTcgOC42NDQxNyA2LjY4OTQ2IDguNzIwOTMgNi44NDM2M0M4Ljc5NzcgNi45OTc4IDguODIyNjYgNy4xNzI2MyA4Ljc5MjEgNy4zNDIxM0M4Ljc2MTU1IDcuNTExNjIgOC42NzcxIDcuNjY2NzMgOC41NTEzMyA3Ljc4NDM5QzguNDI1NTUgNy45MDIwNSA4LjI2NTE3IDcuOTc1OTkgOC4wOTQwMSA3Ljk5NTJMNy45MDg0IDguMDA0OEM3LjcwNDkxIDguMDI3MTkgNy41MTc3NSA4LjEyNjcyIDcuMzg1NDQgOC4yODI5MkM3LjI1MzEyIDguNDM5MTEgNy4xODU3MSA4LjY0MDA4IDcuMTk3MDkgOC44NDQ0N0M3LjIwODQ3IDkuMDQ4ODUgNy4yOTc3NyA5LjI0MTEgNy40NDY2IDkuMzgxNjRDNy41OTU0NCA5LjUyMjE5IDcuNzkyNDkgOS42MDAzMyA3Ljk5NzIgOS42QzguNTM2OTMgOS42MDE2MiA5LjA2MTQ1IDkuNDIxMjkgOS40ODYwNiA5LjA4ODEyQzkuOTEwNjcgOC43NTQ5NSAxMC4yMTA2IDguMjg4MzkgMTAuMzM3NCA3Ljc2Mzc5QzEwLjQ2NDIgNy4yMzkxOSAxMC40MTA0IDYuNjg3MTcgMTAuMTg0OCA2LjE5Njg3QzkuOTU5MjMgNS43MDY1OCA5LjU3NDk2IDUuMzA2NjIgOS4wOTQwNiA1LjA2MTZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk04IDQuOEM3Ljc4NzgzIDQuOCA3LjU4NDM0IDQuODg0MjkgNy40MzQzMSA1LjAzNDMxQzcuMjg0MjkgNS4xODQzNCA3LjIgNS4zODc4MyA3LjIgNS42VjcuMkg1LjZMNS41MDY0IDcuMjA1NkM1LjMwMzkyIDcuMjI5NjggNS4xMTgyOCA3LjMzMDE3IDQuOTg3NDEgNy40ODY1M0M0Ljg1NjU0IDcuNjQyOSA0Ljc5MDMxIDcuODQzMzMgNC44MDIyNiA4LjA0Njg4QzQuODE0MjEgOC4yNTA0NCA0LjkwMzQ0IDguNDQxNzUgNS4wNTE3MSA4LjU4MTcyQzUuMTk5OTcgOC43MjE3IDUuMzk2MSA4Ljc5OTc3IDUuNiA4LjhINy4yVjEwLjRMNy4yMDU2IDEwLjQ5MzZDNy4yMjk2OCAxMC42OTYxIDcuMzMwMTcgMTAuODgxNyA3LjQ4NjUzIDExLjAxMjZDNy42NDI5IDExLjE0MzUgNy44NDMzMyAxMS4yMDk3IDguMDQ2ODggMTEuMTk3N0M4LjI1MDQ0IDExLjE4NTggOC40NDE3NSAxMS4wOTY2IDguNTgxNzIgMTAuOTQ4M0M4LjcyMTcgMTAuOCA4Ljc5OTc3IDEwLjYwMzkgOC44IDEwLjRWOC44SDEwLjRMMTAuNDkzNiA4Ljc5NDRDMTAuNjk2MSA4Ljc3MDMyIDEwLjg4MTcgOC42Njk4MyAxMS4wMTI2IDguNTEzNDdDMTEuMTQzNSA4LjM1NzEgMTEuMjA5NyA4LjE1NjY3IDExLjE5NzcgNy45NTMxMkMxMS4xODU4IDcuNzQ5NTYgMTEuMDk2NiA3LjU1ODI1IDEwLjk0ODMgNy40MTgyOEMxMC44IDcuMjc4MyAxMC42MDM5IDcuMjAwMjMgMTAuNCA3LjJIOC44VjUuNkw4Ljc5NDQgNS41MDY0QzguNzcxNDcgNS4zMTE4IDguNjc3OTMgNS4xMzIzOCA4LjUzMTUgNS4wMDIxN0M4LjM4NTA3IDQuODcxOTYgOC4xOTU5NSA0LjgwMDAzIDggNC44WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk04IDQuOEM3Ljc4NzgzIDQuOCA3LjU4NDM0IDQuODg0MjkgNy40MzQzMSA1LjAzNDMxQzcuMjg0MjkgNS4xODQzNCA3LjIgNS4zODc4MyA3LjIgNS42VjcuMkg1LjZMNS41MDY0IDcuMjA1NkM1LjMwMzkyIDcuMjI5NjggNS4xMTgyOCA3LjMzMDE3IDQuOTg3NDEgNy40ODY1M0M0Ljg1NjU0IDcuNjQyOSA0Ljc5MDMxIDcuODQzMzMgNC44MDIyNiA4LjA0Njg4QzQuODE0MjEgOC4yNTA0NCA0LjkwMzQ0IDguNDQxNzUgNS4wNTE3MSA4LjU4MTcyQzUuMTk5OTcgOC43MjE3IDUuMzk2MSA4Ljc5OTc3IDUuNiA4LjhINy4yVjEwLjRMNy4yMDU2IDEwLjQ5MzZDNy4yMjk2OCAxMC42OTYxIDcuMzMwMTcgMTAuODgxNyA3LjQ4NjUzIDExLjAxMjZDNy42NDI5IDExLjE0MzUgNy44NDMzMyAxMS4yMDk3IDguMDQ2ODggMTEuMTk3N0M4LjI1MDQ0IDExLjE4NTggOC40NDE3NSAxMS4wOTY2IDguNTgxNzIgMTAuOTQ4M0M4LjcyMTcgMTAuOCA4Ljc5OTc3IDEwLjYwMzkgOC44IDEwLjRWOC44SDEwLjRMMTAuNDkzNiA4Ljc5NDRDMTAuNjk2MSA4Ljc3MDMyIDEwLjg4MTcgOC42Njk4MyAxMS4wMTI2IDguNTEzNDdDMTEuMTQzNSA4LjM1NzEgMTEuMjA5NyA4LjE1NjY3IDExLjE5NzcgNy45NTMxMkMxMS4xODU4IDcuNzQ5NTYgMTEuMDk2NiA3LjU1ODI1IDEwLjk0ODMgNy40MTgyOEMxMC44IDcuMjc4MyAxMC42MDM5IDcuMjAwMjMgMTAuNCA3LjJIOC44VjUuNkw4Ljc5NDQgNS41MDY0QzguNzcxNDcgNS4zMTE4IDguNjc3OTMgNS4xMzIzOCA4LjUzMTUgNS4wMDIxN0M4LjM4NTA3IDQuODcxOTYgOC4xOTU5NSA0LjgwMDAzIDggNC44WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(107, 219, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgNEM3LjM2MzA1IDQgNi43NTI1NyA0LjI1Mjg2IDYuMzAyNDYgNC43MDI5NEM1Ljg1MjM1IDUuMTUzMDMgNS41OTk0OCA1Ljc2MzQ4IDUuNTk5NDggNi40VjkuNkM1LjU5OTQ4IDEwLjIzNjUgNS44NTIzNSAxMC44NDcgNi4zMDI0NiAxMS4yOTcxQzYuNzUyNTcgMTEuNzQ3MSA3LjM2MzA1IDEyIDcuOTk5NiAxMkM4LjYzNjE1IDEyIDkuMjQ2NjMgMTEuNzQ3MSA5LjY5Njc0IDExLjI5NzFDMTAuMTQ2OSAxMC44NDcgMTAuMzk5NyAxMC4yMzY1IDEwLjM5OTcgOS42VjYuNEMxMC4zOTk3IDUuNzYzNDggMTAuMTQ2OSA1LjE1MzAzIDkuNjk2NzQgNC43MDI5NEM5LjI0NjYzIDQuMjUyODYgOC42MzYxNSA0IDcuOTk5NiA0Wk03Ljk5OTYgNS42QzguMjExNzggNS42IDguNDE1MjggNS42ODQyOSA4LjU2NTMxIDUuODM0MzFDOC43MTUzNSA1Ljk4NDM0IDguNzk5NjQgNi4xODc4MyA4Ljc5OTY0IDYuNFY5LjZDOC43OTk2NCA5LjgxMjE3IDguNzE1MzUgMTAuMDE1NyA4LjU2NTMxIDEwLjE2NTdDOC40MTUyOCAxMC4zMTU3IDguMjExNzggMTAuNCA3Ljk5OTYgMTAuNEM3Ljc4NzQyIDEwLjQgNy41ODM5MiAxMC4zMTU3IDcuNDMzODkgMTAuMTY1N0M3LjI4Mzg1IDEwLjAxNTcgNy4xOTk1NiA5LjgxMjE3IDcuMTk5NTYgOS42VjYuNEM3LjE5OTU2IDYuMTg3ODMgNy4yODM4NSA1Ljk4NDM0IDcuNDMzODkgNS44MzQzMUM3LjU4MzkyIDUuNjg0MjkgNy43ODc0MiA1LjYgNy45OTk2IDUuNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgNEM3LjM2MzA1IDQgNi43NTI1NyA0LjI1Mjg2IDYuMzAyNDYgNC43MDI5NEM1Ljg1MjM1IDUuMTUzMDMgNS41OTk0OCA1Ljc2MzQ4IDUuNTk5NDggNi40VjkuNkM1LjU5OTQ4IDEwLjIzNjUgNS44NTIzNSAxMC44NDcgNi4zMDI0NiAxMS4yOTcxQzYuNzUyNTcgMTEuNzQ3MSA3LjM2MzA1IDEyIDcuOTk5NiAxMkM4LjYzNjE1IDEyIDkuMjQ2NjMgMTEuNzQ3MSA5LjY5Njc0IDExLjI5NzFDMTAuMTQ2OSAxMC44NDcgMTAuMzk5NyAxMC4yMzY1IDEwLjM5OTcgOS42VjYuNEMxMC4zOTk3IDUuNzYzNDggMTAuMTQ2OSA1LjE1MzAzIDkuNjk2NzQgNC43MDI5NEM5LjI0NjYzIDQuMjUyODYgOC42MzYxNSA0IDcuOTk5NiA0Wk03Ljk5OTYgNS42QzguMjExNzggNS42IDguNDE1MjggNS42ODQyOSA4LjU2NTMxIDUuODM0MzFDOC43MTUzNSA1Ljk4NDM0IDguNzk5NjQgNi4xODc4MyA4Ljc5OTY0IDYuNFY5LjZDOC43OTk2NCA5LjgxMjE3IDguNzE1MzUgMTAuMDE1NyA4LjU2NTMxIDEwLjE2NTdDOC40MTUyOCAxMC4zMTU3IDguMjExNzggMTAuNCA3Ljk5OTYgMTAuNEM3Ljc4NzQyIDEwLjQgNy41ODM5MiAxMC4zMTU3IDcuNDMzODkgMTAuMTY1N0M3LjI4Mzg1IDEwLjAxNTcgNy4xOTk1NiA5LjgxMjE3IDcuMTk5NTYgOS42VjYuNEM3LjE5OTU2IDYuMTg3ODMgNy4yODM4NSA1Ljk4NDM0IDcuNDMzODkgNS44MzQzMUM3LjU4MzkyIDUuNjg0MjkgNy43ODc0MiA1LjYgNy45OTk2IDUuNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5NDg0IDQuNzA4OEM4LjcyODQ0IDQuMDg3MiA3Ljk4ODQgMy43ODA4IDcuNTAxMTcgNC4xNzI4TDcuNDMzOTcgNC4yMzQ0TDUuODMzODkgNS44MzQ0TDUuNzY3NDkgNS45MDk2QzUuNjU4NjMgNi4wNDk5IDUuNTk5NTUgNi4yMjI0MyA1LjU5OTU1IDYuNEM1LjU5OTU1IDYuNTc3NTcgNS42NTg2MyA2Ljc1MDEgNS43Njc0OSA2Ljg5MDRMNS44MzM4OSA2Ljk2NTZMNS45MDkxIDcuMDMyQzYuMDQ5NCA3LjE0MDg1IDYuMjIxOTQgNy4xOTk5MyA2LjM5OTUyIDcuMTk5OTNDNi41NzcxIDcuMTk5OTMgNi43NDk2NCA3LjE0MDg1IDYuODg5OTQgNy4wMzJMNi45NjUxNSA2Ljk2NTZMNy4xOTk1NiA2LjczMTJWMTEuMkw3LjIwNTE2IDExLjI5MzZDNy4yMjgyOSAxMS40ODggNy4zMjE5MyAxMS42NjcyIDcuNDY4MzUgMTEuNzk3M0M3LjYxNDc2IDExLjkyNzMgNy44MDM3OCAxMS45OTkxIDcuOTk5NiAxMS45OTkxQzguMTk1NDIgMTEuOTk5MSA4LjM4NDQ0IDExLjkyNzMgOC41MzA4NSAxMS43OTczQzguNjc3MjcgMTEuNjY3MiA4Ljc3MDkxIDExLjQ4OCA4Ljc5NDA0IDExLjI5MzZMOC43OTk2NCAxMS4yVjQuOEw4Ljc5NDg0IDQuNzA4OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5NDg0IDQuNzA4OEM4LjcyODQ0IDQuMDg3MiA3Ljk4ODQgMy43ODA4IDcuNTAxMTcgNC4xNzI4TDcuNDMzOTcgNC4yMzQ0TDUuODMzODkgNS44MzQ0TDUuNzY3NDkgNS45MDk2QzUuNjU4NjMgNi4wNDk5IDUuNTk5NTUgNi4yMjI0MyA1LjU5OTU1IDYuNEM1LjU5OTU1IDYuNTc3NTcgNS42NTg2MyA2Ljc1MDEgNS43Njc0OSA2Ljg5MDRMNS44MzM4OSA2Ljk2NTZMNS45MDkxIDcuMDMyQzYuMDQ5NCA3LjE0MDg1IDYuMjIxOTQgNy4xOTk5MyA2LjM5OTUyIDcuMTk5OTNDNi41NzcxIDcuMTk5OTMgNi43NDk2NCA3LjE0MDg1IDYuODg5OTQgNy4wMzJMNi45NjUxNSA2Ljk2NTZMNy4xOTk1NiA2LjczMTJWMTEuMkw3LjIwNTE2IDExLjI5MzZDNy4yMjgyOSAxMS40ODggNy4zMjE5MyAxMS42NjcyIDcuNDY4MzUgMTEuNzk3M0M3LjYxNDc2IDExLjkyNzMgNy44MDM3OCAxMS45OTkxIDcuOTk5NiAxMS45OTkxQzguMTk1NDIgMTEuOTk5MSA4LjM4NDQ0IDExLjkyNzMgOC41MzA4NSAxMS43OTczQzguNjc3MjcgMTEuNjY3MiA4Ljc3MDkxIDExLjQ4OCA4Ljc5NDA0IDExLjI5MzZMOC43OTk2NCAxMS4yVjQuOEw4Ljc5NDg0IDQuNzA4OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINi4zOTk1Mkw2LjMwNTkyIDQuMDA1NkM2LjExMTQ3IDQuMDI4NzMgNS45MzIyNSA0LjEyMjM2IDUuODAyMjIgNC4yNjg3N0M1LjY3MjE5IDQuNDE1MTggNS42MDAzNyA0LjYwNDE5IDUuNjAwMzcgNC44QzUuNjAwMzcgNC45OTU4MSA1LjY3MjE5IDUuMTg0ODIgNS44MDIyMiA1LjMzMTIzQzUuOTMyMjUgNS40Nzc2NCA2LjExMTQ3IDUuNTcxMjcgNi4zMDU5MiA1LjU5NDRMNi4zOTk1MiA1LjZIOC43OTk2NFY3LjJINy4xOTk1Nkw3LjA3OTU1IDcuMjA0QzYuNjk4NiA3LjIzMjYzIDYuMzQwNDYgNy4zOTY2MSA2LjA2OTg4IDcuNjY2MjlDNS43OTkzIDcuOTM1OTcgNS42MzQxNSA4LjI5MzU2IDUuNjA0MjggOC42NzQ0TDUuNTk5NDggOC44VjEwLjRMNS42MDM0OCAxMC41MkM1LjYzMjExIDEwLjkwMDkgNS43OTYxIDExLjI1OTEgNi4wNjU3OSAxMS41Mjk2QzYuMzM1NDkgMTEuODAwMiA2LjY5MzA5IDExLjk2NTMgNy4wNzM5NSAxMS45OTUyTDcuMTk5NTYgMTJIOS41OTk2OEw5LjY5MzI4IDExLjk5NDRDOS44ODc3MyAxMS45NzEzIDEwLjA2NjkgMTEuODc3NiAxMC4xOTcgMTEuNzMxMkMxMC4zMjcgMTEuNTg0OCAxMC4zOTg4IDExLjM5NTggMTAuMzk4OCAxMS4yQzEwLjM5ODggMTEuMDA0MiAxMC4zMjcgMTAuODE1MiAxMC4xOTcgMTAuNjY4OEMxMC4wNjY5IDEwLjUyMjQgOS44ODc3MyAxMC40Mjg3IDkuNjkzMjggMTAuNDA1Nkw5LjU5OTY4IDEwLjRINy4xOTk1NlY4LjhIOC43OTk2NEw4LjkxOTY1IDguNzk2QzkuMzAwNiA4Ljc2NzM3IDkuNjU4NzQgOC42MDMzOSA5LjkyOTMyIDguMzMzNzFDMTAuMTk5OSA4LjA2NDAzIDEwLjM2NSA3LjcwNjQ0IDEwLjM5NDkgNy4zMjU2TDEwLjM5OTcgNy4yVjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINi4zOTk1Mkw2LjMwNTkyIDQuMDA1NkM2LjExMTQ3IDQuMDI4NzMgNS45MzIyNSA0LjEyMjM2IDUuODAyMjIgNC4yNjg3N0M1LjY3MjE5IDQuNDE1MTggNS42MDAzNyA0LjYwNDE5IDUuNjAwMzcgNC44QzUuNjAwMzcgNC45OTU4MSA1LjY3MjE5IDUuMTg0ODIgNS44MDIyMiA1LjMzMTIzQzUuOTMyMjUgNS40Nzc2NCA2LjExMTQ3IDUuNTcxMjcgNi4zMDU5MiA1LjU5NDRMNi4zOTk1MiA1LjZIOC43OTk2NFY3LjJINy4xOTk1Nkw3LjA3OTU1IDcuMjA0QzYuNjk4NiA3LjIzMjYzIDYuMzQwNDYgNy4zOTY2MSA2LjA2OTg4IDcuNjY2MjlDNS43OTkzIDcuOTM1OTcgNS42MzQxNSA4LjI5MzU2IDUuNjA0MjggOC42NzQ0TDUuNTk5NDggOC44VjEwLjRMNS42MDM0OCAxMC41MkM1LjYzMjExIDEwLjkwMDkgNS43OTYxIDExLjI1OTEgNi4wNjU3OSAxMS41Mjk2QzYuMzM1NDkgMTEuODAwMiA2LjY5MzA5IDExLjk2NTMgNy4wNzM5NSAxMS45OTUyTDcuMTk5NTYgMTJIOS41OTk2OEw5LjY5MzI4IDExLjk5NDRDOS44ODc3MyAxMS45NzEzIDEwLjA2NjkgMTEuODc3NiAxMC4xOTcgMTEuNzMxMkMxMC4zMjcgMTEuNTg0OCAxMC4zOTg4IDExLjM5NTggMTAuMzk4OCAxMS4yQzEwLjM5ODggMTEuMDA0MiAxMC4zMjcgMTAuODE1MiAxMC4xOTcgMTAuNjY4OEMxMC4wNjY5IDEwLjUyMjQgOS44ODc3MyAxMC40Mjg3IDkuNjkzMjggMTAuNDA1Nkw5LjU5OTY4IDEwLjRINy4xOTk1NlY4LjhIOC43OTk2NEw4LjkxOTY1IDguNzk2QzkuMzAwNiA4Ljc2NzM3IDkuNjU4NzQgOC42MDMzOSA5LjkyOTMyIDguMzMzNzFDMTAuMTk5OSA4LjA2NDAzIDEwLjM2NSA3LjcwNjQ0IDEwLjM5NDkgNy4zMjU2TDEwLjM5OTcgNy4yVjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjc3MDEgNC4wMzQyNyA2LjMwMDc5IDQuMjE1NTggNi4wMjYzIDQuNTExNTZDNS43NTE4MSA0LjgwNzU1IDUuNTk5MzUgNS4xOTYzNCA1LjU5OTQ4IDUuNkM1LjU5ODggNS43OTY2MiA1LjY3MDU1IDUuOTg2NiA1LjgwMTA0IDYuMTMzNjlDNS45MzE1MyA2LjI4MDc3IDYuMTExNjIgNi4zNzQ2NSA2LjMwNjkzIDYuMzk3NDFDNi41MDIyMyA2LjQyMDE2IDYuNjk5MDggNi4zNzAyIDYuODU5OSA2LjI1NzA1QzcuMDIwNzEgNi4xNDM5MSA3LjEzNDIyIDUuOTc1NTEgNy4xNzg3NiA1Ljc4NEw3LjE5NDc2IDUuNjkzNkw3LjE5OTU2IDUuNkg4Ljc5OTY0VjcuMkg3LjE5OTU2TDcuMDkzMTUgNy4yMDU2QzYuMjA0MzEgNy4zMDE2IDYuMTY5OTEgOC41ODk2IDYuOTkwNzUgOC43Nzc2TDcuMDkzMTUgOC43OTQ0TDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjguOEwxMC4zOTU3IDguNjhDMTAuMzgxOCA4LjQ5NTU4IDEwLjMzNTcgOC4zMTUwMSAxMC4yNTk3IDguMTQ2NEwxMC4xOTk3IDguMDI0OEwxMC4xODQ1IDcuOTk5MkwxMC4yMDA1IDcuOTc1MkMxMC4zMDg2IDcuNzc5IDEwLjM3NDYgNy41NjIzNyAxMC4zOTQxIDcuMzM5MkwxMC4zOTk3IDcuMlY1LjZMMTAuMzk1NyA1LjQ4QzEwLjM2NzEgNS4wOTkwNiAxMC4yMDMxIDQuNzQwOTQgOS45MzM0MSA0LjQ3MDM4QzkuNjYzNzEgNC4xOTk4MSA5LjMwNjExIDQuMDM0NjcgOC45MjUyNSA0LjAwNDhMOC43OTk2NCA0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjc3MDEgNC4wMzQyNyA2LjMwMDc5IDQuMjE1NTggNi4wMjYzIDQuNTExNTZDNS43NTE4MSA0LjgwNzU1IDUuNTk5MzUgNS4xOTYzNCA1LjU5OTQ4IDUuNkM1LjU5ODggNS43OTY2MiA1LjY3MDU1IDUuOTg2NiA1LjgwMTA0IDYuMTMzNjlDNS45MzE1MyA2LjI4MDc3IDYuMTExNjIgNi4zNzQ2NSA2LjMwNjkzIDYuMzk3NDFDNi41MDIyMyA2LjQyMDE2IDYuNjk5MDggNi4zNzAyIDYuODU5OSA2LjI1NzA1QzcuMDIwNzEgNi4xNDM5MSA3LjEzNDIyIDUuOTc1NTEgNy4xNzg3NiA1Ljc4NEw3LjE5NDc2IDUuNjkzNkw3LjE5OTU2IDUuNkg4Ljc5OTY0VjcuMkg3LjE5OTU2TDcuMDkzMTUgNy4yMDU2QzYuMjA0MzEgNy4zMDE2IDYuMTY5OTEgOC41ODk2IDYuOTkwNzUgOC43Nzc2TDcuMDkzMTUgOC43OTQ0TDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjguOEwxMC4zOTU3IDguNjhDMTAuMzgxOCA4LjQ5NTU4IDEwLjMzNTcgOC4zMTUwMSAxMC4yNTk3IDguMTQ2NEwxMC4xOTk3IDguMDI0OEwxMC4xODQ1IDcuOTk5MkwxMC4yMDA1IDcuOTc1MkMxMC4zMDg2IDcuNzc5IDEwLjM3NDYgNy41NjIzNyAxMC4zOTQxIDcuMzM5MkwxMC4zOTk3IDcuMlY1LjZMMTAuMzk1NyA1LjQ4QzEwLjM2NzEgNS4wOTkwNiAxMC4yMDMxIDQuNzQwOTQgOS45MzM0MSA0LjQ3MDM4QzkuNjYzNzEgNC4xOTk4MSA5LjMwNjExIDQuMDM0NjcgOC45MjUyNSA0LjAwNDhMOC43OTk2NCA0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRDOS40MDM3MiA0LjAwMDAzIDkuMjE0NTkgNC4wNzE5NiA5LjA2ODE2IDQuMjAyMTdDOC45MjE3MiA0LjMzMjM4IDguODI4MTcgNC41MTE4IDguODA1MjQgNC43MDY0TDguNzk5NjQgNC44VjcuMkg3LjE5OTU2VjQuOEw3LjE5Mzk2IDQuNzA2NEM3LjE3MDgzIDQuNTExOTYgNy4wNzcxOSA0LjMzMjc2IDYuOTMwNzcgNC4yMDI3M0M2Ljc4NDM2IDQuMDcyNzEgNi41OTUzNCA0LjAwMDg5IDYuMzk5NTIgNC4wMDA4OUM2LjIwMzcgNC4wMDA4OSA2LjAxNDY4IDQuMDcyNzEgNS44NjgyNyA0LjIwMjczQzUuNzIxODUgNC4zMzI3NiA1LjYyODIxIDQuNTExOTYgNS42MDUwOCA0LjcwNjRMNS41OTk0OCA0LjhWNy4yTDUuNjAzNDggNy4zMkM1LjYzMjExIDcuNzAwOTQgNS43OTYxIDguMDU5MDYgNi4wNjU3OSA4LjMyOTYyQzYuMzM1NDkgOC42MDAxOSA2LjY5MzA5IDguNzY1MzMgNy4wNzM5NSA4Ljc5NTJMNy4xOTk1NiA4LjhIOC43OTk2NFYxMS4yTDguODA1MjQgMTEuMjkzNkM4LjgyODM3IDExLjQ4OCA4LjkyMjAxIDExLjY2NzIgOS4wNjg0MyAxMS43OTczQzkuMjE0ODQgMTEuOTI3MyA5LjQwMzg2IDExLjk5OTEgOS41OTk2OCAxMS45OTkxQzkuNzk1NSAxMS45OTkxIDkuOTg0NTIgMTEuOTI3MyAxMC4xMzA5IDExLjc5NzNDMTAuMjc3MyAxMS42NjcyIDEwLjM3MSAxMS40ODggMTAuMzk0MSAxMS4yOTM2TDEwLjM5OTcgMTEuMlY0LjhMMTAuMzk0MSA0LjcwNjRDMTAuMzcxMiA0LjUxMTggMTAuMjc3NiA0LjMzMjM4IDEwLjEzMTIgNC4yMDIxN0M5Ljk4NDc3IDQuMDcxOTYgOS43OTU2NCA0LjAwMDAzIDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRDOS40MDM3MiA0LjAwMDAzIDkuMjE0NTkgNC4wNzE5NiA5LjA2ODE2IDQuMjAyMTdDOC45MjE3MiA0LjMzMjM4IDguODI4MTcgNC41MTE4IDguODA1MjQgNC43MDY0TDguNzk5NjQgNC44VjcuMkg3LjE5OTU2VjQuOEw3LjE5Mzk2IDQuNzA2NEM3LjE3MDgzIDQuNTExOTYgNy4wNzcxOSA0LjMzMjc2IDYuOTMwNzcgNC4yMDI3M0M2Ljc4NDM2IDQuMDcyNzEgNi41OTUzNCA0LjAwMDg5IDYuMzk5NTIgNC4wMDA4OUM2LjIwMzcgNC4wMDA4OSA2LjAxNDY4IDQuMDcyNzEgNS44NjgyNyA0LjIwMjczQzUuNzIxODUgNC4zMzI3NiA1LjYyODIxIDQuNTExOTYgNS42MDUwOCA0LjcwNjRMNS41OTk0OCA0LjhWNy4yTDUuNjAzNDggNy4zMkM1LjYzMjExIDcuNzAwOTQgNS43OTYxIDguMDU5MDYgNi4wNjU3OSA4LjMyOTYyQzYuMzM1NDkgOC42MDAxOSA2LjY5MzA5IDguNzY1MzMgNy4wNzM5NSA4Ljc5NTJMNy4xOTk1NiA4LjhIOC43OTk2NFYxMS4yTDguODA1MjQgMTEuMjkzNkM4LjgyODM3IDExLjQ4OCA4LjkyMjAxIDExLjY2NzIgOS4wNjg0MyAxMS43OTczQzkuMjE0ODQgMTEuOTI3MyA5LjQwMzg2IDExLjk5OTEgOS41OTk2OCAxMS45OTkxQzkuNzk1NSAxMS45OTkxIDkuOTg0NTIgMTEuOTI3MyAxMC4xMzA5IDExLjc5NzNDMTAuMjc3MyAxMS42NjcyIDEwLjM3MSAxMS40ODggMTAuMzk0MSAxMS4yOTM2TDEwLjM5OTcgMTEuMlY0LjhMMTAuMzk0MSA0LjcwNjRDMTAuMzcxMiA0LjUxMTggMTAuMjc3NiA0LjMzMjM4IDEwLjEzMTIgNC4yMDIxN0M5Ljk4NDc3IDQuMDcxOTYgOS43OTU2NCA0LjAwMDAzIDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRINi4zOTk1MkM2LjIwMzU2IDQuMDAwMDMgNi4wMTQ0MyA0LjA3MTk2IDUuODY4IDQuMjAyMTdDNS43MjE1NiA0LjMzMjM4IDUuNjI4MDEgNC41MTE4IDUuNjA1MDggNC43MDY0TDUuNTk5NDggNC44VjhDNS41OTk1MSA4LjE5NTk1IDUuNjcxNDUgOC4zODUwNyA1LjgwMTY2IDguNTMxNUM1LjkzMTg4IDguNjc3OTMgNi4xMTEzMSA4Ljc3MTQ3IDYuMzA1OTIgOC43OTQ0TDYuMzk5NTIgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRDOS4yMDMzMiAxMi4wMDAxIDkuNTkyMTMgMTEuODQ3NyA5Ljg4ODEzIDExLjU3MzJDMTAuMTg0MSAxMS4yOTg3IDEwLjM2NTQgMTAuOTIyNSAxMC4zOTU3IDEwLjUyTDEwLjM5OTcgMTAuNFY4LjhDMTAuMzk5OCA4LjM5NjM0IDEwLjI0NzQgOC4wMDc1NSA5Ljk3MjkgNy43MTE1NkM5LjY5ODQyIDcuNDE1NTggOS4zMjIxOSA3LjIzNDI3IDguOTE5NjUgNy4yMDRMOC43OTk2NCA3LjJINy4xOTk1NlY1LjZIOS41OTk2OEM5Ljc5NTY0IDUuNTk5OTcgOS45ODQ3NyA1LjUyODA0IDEwLjEzMTIgNS4zOTc4M0MxMC4yNzc2IDUuMjY3NjIgMTAuMzcxMiA1LjA4ODIgMTAuMzk0MSA0Ljg5MzZMMTAuMzk5NyA0LjhDMTAuMzk5NyA0LjYwNDA1IDEwLjMyNzggNC40MTQ5MyAxMC4xOTc1IDQuMjY4NUMxMC4wNjczIDQuMTIyMDcgOS44ODc4OSA0LjAyODUzIDkuNjkzMjggNC4wMDU2TDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRINi4zOTk1MkM2LjIwMzU2IDQuMDAwMDMgNi4wMTQ0MyA0LjA3MTk2IDUuODY4IDQuMjAyMTdDNS43MjE1NiA0LjMzMjM4IDUuNjI4MDEgNC41MTE4IDUuNjA1MDggNC43MDY0TDUuNTk5NDggNC44VjhDNS41OTk1MSA4LjE5NTk1IDUuNjcxNDUgOC4zODUwNyA1LjgwMTY2IDguNTMxNUM1LjkzMTg4IDguNjc3OTMgNi4xMTEzMSA4Ljc3MTQ3IDYuMzA1OTIgOC43OTQ0TDYuMzk5NTIgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRDOS4yMDMzMiAxMi4wMDAxIDkuNTkyMTMgMTEuODQ3NyA5Ljg4ODEzIDExLjU3MzJDMTAuMTg0MSAxMS4yOTg3IDEwLjM2NTQgMTAuOTIyNSAxMC4zOTU3IDEwLjUyTDEwLjM5OTcgMTAuNFY4LjhDMTAuMzk5OCA4LjM5NjM0IDEwLjI0NzQgOC4wMDc1NSA5Ljk3MjkgNy43MTE1NkM5LjY5ODQyIDcuNDE1NTggOS4zMjIxOSA3LjIzNDI3IDguOTE5NjUgNy4yMDRMOC43OTk2NCA3LjJINy4xOTk1NlY1LjZIOS41OTk2OEM5Ljc5NTY0IDUuNTk5OTcgOS45ODQ3NyA1LjUyODA0IDEwLjEzMTIgNS4zOTc4M0MxMC4yNzc2IDUuMjY3NjIgMTAuMzcxMiA1LjA4ODIgMTAuMzk0MSA0Ljg5MzZMMTAuMzk5NyA0LjhDMTAuMzk5NyA0LjYwNDA1IDEwLjMyNzggNC40MTQ5MyAxMC4xOTc1IDQuMjY4NUMxMC4wNjczIDQuMTIyMDcgOS44ODc4OSA0LjAyODUzIDkuNjkzMjggNC4wMDU2TDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjEwLjRMNS42MDM0OCAxMC41MkM1LjYzMjExIDEwLjkwMDkgNS43OTYxIDExLjI1OTEgNi4wNjU3OSAxMS41Mjk2QzYuMzM1NDkgMTEuODAwMiA2LjY5MzA5IDExLjk2NTMgNy4wNzM5NSAxMS45OTUyTDcuMTk5NTYgMTJIOC43OTk2NEw4LjkxOTY1IDExLjk5NkM5LjMwMDYgMTEuOTY3NCA5LjY1ODc0IDExLjgwMzQgOS45MjkzMiAxMS41MzM3QzEwLjE5OTkgMTEuMjY0IDEwLjM2NSAxMC45MDY0IDEwLjM5NDkgMTAuNTI1NkwxMC4zOTk3IDEwLjRWOC44TDEwLjM5NTcgOC42OEMxMC4zNjcxIDguMjk5MDYgMTAuMjAzMSA3Ljk0MDk0IDkuOTMzNDEgNy42NzAzOEM5LjY2MzcxIDcuMzk5ODEgOS4zMDYxMSA3LjIzNDY3IDguOTI1MjUgNy4yMDQ4TDguNzk5NjQgNy4ySDcuMTk5NTZWNS42SDguNzk5NjRMOC44MDUyNCA1LjY5MzZDOC44MjkzMiA1Ljg5NjA4IDguOTI5ODIgNi4wODE3MiA5LjA4NjE5IDYuMjEyNTlDOS4yNDI1NiA2LjM0MzQ2IDkuNDQzIDYuNDA5NjkgOS42NDY1NyA2LjM5Nzc0QzkuODUwMTMgNi4zODU3OSAxMC4wNDE0IDYuMjk2NTYgMTAuMTgxNCA2LjE0ODI5QzEwLjMyMTQgNi4wMDAwMyAxMC4zOTk1IDUuODAzOSAxMC4zOTk3IDUuNkMxMC4zOTk4IDUuMTk2MzQgMTAuMjQ3NCA0LjgwNzU1IDkuOTcyOSA0LjUxMTU2QzkuNjk4NDIgNC4yMTU1OCA5LjMyMjE5IDQuMDM0MjcgOC45MTk2NSA0LjAwNEw4Ljc5OTY0IDRaTTguNzk5NjQgOC44VjEwLjRINy4xOTk1NlY4LjhIOC43OTk2NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjEwLjRMNS42MDM0OCAxMC41MkM1LjYzMjExIDEwLjkwMDkgNS43OTYxIDExLjI1OTEgNi4wNjU3OSAxMS41Mjk2QzYuMzM1NDkgMTEuODAwMiA2LjY5MzA5IDExLjk2NTMgNy4wNzM5NSAxMS45OTUyTDcuMTk5NTYgMTJIOC43OTk2NEw4LjkxOTY1IDExLjk5NkM5LjMwMDYgMTEuOTY3NCA5LjY1ODc0IDExLjgwMzQgOS45MjkzMiAxMS41MzM3QzEwLjE5OTkgMTEuMjY0IDEwLjM2NSAxMC45MDY0IDEwLjM5NDkgMTAuNTI1NkwxMC4zOTk3IDEwLjRWOC44TDEwLjM5NTcgOC42OEMxMC4zNjcxIDguMjk5MDYgMTAuMjAzMSA3Ljk0MDk0IDkuOTMzNDEgNy42NzAzOEM5LjY2MzcxIDcuMzk5ODEgOS4zMDYxMSA3LjIzNDY3IDguOTI1MjUgNy4yMDQ4TDguNzk5NjQgNy4ySDcuMTk5NTZWNS42SDguNzk5NjRMOC44MDUyNCA1LjY5MzZDOC44MjkzMiA1Ljg5NjA4IDguOTI5ODIgNi4wODE3MiA5LjA4NjE5IDYuMjEyNTlDOS4yNDI1NiA2LjM0MzQ2IDkuNDQzIDYuNDA5NjkgOS42NDY1NyA2LjM5Nzc0QzkuODUwMTMgNi4zODU3OSAxMC4wNDE0IDYuMjk2NTYgMTAuMTgxNCA2LjE0ODI5QzEwLjMyMTQgNi4wMDAwMyAxMC4zOTk1IDUuODAzOSAxMC4zOTk3IDUuNkMxMC4zOTk4IDUuMTk2MzQgMTAuMjQ3NCA0LjgwNzU1IDkuOTcyOSA0LjUxMTU2QzkuNjk4NDIgNC4yMTU1OCA5LjMyMjE5IDQuMDM0MjcgOC45MTk2NSA0LjAwNEw4Ljc5OTY0IDRaTTguNzk5NjQgOC44VjEwLjRINy4xOTk1NlY4LjhIOC43OTk2NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRINi4zOTk1Mkw2LjMwNTkyIDQuMDA1NkM2LjEyNzMzIDQuMDI2NjYgNS45NjEwNSA0LjEwNzI2IDUuODMzOSA0LjIzNDQxQzUuNzA2NzUgNC4zNjE1NSA1LjYyNjE0IDQuNTI3ODMgNS42MDUwOCA0LjcwNjRMNS41OTk0OCA0LjhMNS42MDUwOCA0Ljg5MzZDNS42MjYxNCA1LjA3MjE3IDUuNzA2NzUgNS4yMzg0NSA1LjgzMzkgNS4zNjU1OUM1Ljk2MTA1IDUuNDkyNzQgNi4xMjczMyA1LjU3MzM0IDYuMzA1OTIgNS41OTQ0TDYuMzk5NTIgNS42SDguNTc0MDNMNy4yMjM1NiAxMS4wMDU2TDcuMjA1OTYgMTEuMDk3NkM3LjE4MDg4IDExLjI5MiA3LjIyODA2IDExLjQ4ODkgNy4zMzg1NCAxMS42NTA4QzcuNDQ5MDMgMTEuODEyNyA3LjYxNTEyIDExLjkyODUgNy44MDUyOSAxMS45NzZDNy45OTU0NyAxMi4wMjM2IDguMTk2NDkgMTEuOTk5NyA4LjM3MDIgMTEuOTA4OEM4LjU0MzkyIDExLjgxOCA4LjY3ODIzIDExLjY2NjUgOC43NDc2NCAxMS40ODMyTDguNzc1NjQgMTEuMzk0NEwxMC4zNzU3IDQuOTk0NEwxMC4zOTI1IDQuOTA0OEMxMC40MDY1IDQuNzk5NDQgMTAuMzk5MyA0LjY5MjM0IDEwLjM3MTQgNC41ODk3OEMxMC4zNDM2IDQuNDg3MjIgMTAuMjk1NSA0LjM5MTI0IDEwLjIzMDEgNC4zMDc0NUMxMC4xNjQ3IDQuMjIzNjYgMTAuMDgzMyA0LjE1Mzc0IDkuOTkwNTYgNC4xMDE3OEM5Ljg5Nzg0IDQuMDQ5ODEgOS43OTU2OSA0LjAxNjg0IDkuNjkwMDggNC4wMDQ4TDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk05LjU5OTY4IDRINi4zOTk1Mkw2LjMwNTkyIDQuMDA1NkM2LjEyNzMzIDQuMDI2NjYgNS45NjEwNSA0LjEwNzI2IDUuODMzOSA0LjIzNDQxQzUuNzA2NzUgNC4zNjE1NSA1LjYyNjE0IDQuNTI3ODMgNS42MDUwOCA0LjcwNjRMNS41OTk0OCA0LjhMNS42MDUwOCA0Ljg5MzZDNS42MjYxNCA1LjA3MjE3IDUuNzA2NzUgNS4yMzg0NSA1LjgzMzkgNS4zNjU1OUM1Ljk2MTA1IDUuNDkyNzQgNi4xMjczMyA1LjU3MzM0IDYuMzA1OTIgNS41OTQ0TDYuMzk5NTIgNS42SDguNTc0MDNMNy4yMjM1NiAxMS4wMDU2TDcuMjA1OTYgMTEuMDk3NkM3LjE4MDg4IDExLjI5MiA3LjIyODA2IDExLjQ4ODkgNy4zMzg1NCAxMS42NTA4QzcuNDQ5MDMgMTEuODEyNyA3LjYxNTEyIDExLjkyODUgNy44MDUyOSAxMS45NzZDNy45OTU0NyAxMi4wMjM2IDguMTk2NDkgMTEuOTk5NyA4LjM3MDIgMTEuOTA4OEM4LjU0MzkyIDExLjgxOCA4LjY3ODIzIDExLjY2NjUgOC43NDc2NCAxMS40ODMyTDguNzc1NjQgMTEuMzk0NEwxMC4zNzU3IDQuOTk0NEwxMC4zOTI1IDQuOTA0OEMxMC40MDY1IDQuNzk5NDQgMTAuMzk5MyA0LjY5MjM0IDEwLjM3MTQgNC41ODk3OEMxMC4zNDM2IDQuNDg3MjIgMTAuMjk1NSA0LjM5MTI0IDEwLjIzMDEgNC4zMDc0NUMxMC4xNjQ3IDQuMjIzNjYgMTAuMDgzMyA0LjE1Mzc0IDkuOTkwNTYgNC4xMDE3OEM5Ljg5Nzg0IDQuMDQ5ODEgOS43OTU2OSA0LjAxNjg0IDkuNjkwMDggNC4wMDQ4TDkuNTk5NjggNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjcuMkw1LjYwMzQ4IDcuMzJDNS42MzIxMSA3LjcwMDk0IDUuNzk2MSA4LjA1OTA2IDYuMDY1NzkgOC4zMjk2MkM2LjMzNTQ5IDguNjAwMTkgNi42OTMwOSA4Ljc2NTMzIDcuMDczOTUgOC43OTUyTDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaTTguNzk5NjQgNS42VjcuMkg3LjE5OTU2VjUuNkg4Ljc5OTY0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjcuMkw1LjYwMzQ4IDcuMzJDNS42MzIxMSA3LjcwMDk0IDUuNzk2MSA4LjA1OTA2IDYuMDY1NzkgOC4zMjk2MkM2LjMzNTQ5IDguNjAwMTkgNi42OTMwOSA4Ljc2NTMzIDcuMDczOTUgOC43OTUyTDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaTTguNzk5NjQgNS42VjcuMkg3LjE5OTU2VjUuNkg4Ljc5OTY0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjcuMkw1LjYwMzQ4IDcuMzJDNS42MzIxMSA3LjcwMDk0IDUuNzk2MSA4LjA1OTA2IDYuMDY1NzkgOC4zMjk2MkM2LjMzNTQ5IDguNjAwMTkgNi42OTMwOSA4Ljc2NTMzIDcuMDczOTUgOC43OTUyTDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaTTguNzk5NjQgNS42VjcuMkg3LjE5OTU2VjUuNkg4Ljc5OTY0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk04Ljc5OTY0IDRINy4xOTk1Nkw3LjA3OTU1IDQuMDA0QzYuNjk4NiA0LjAzMjYzIDYuMzQwNDYgNC4xOTY2MSA2LjA2OTg4IDQuNDY2MjlDNS43OTkzIDQuNzM1OTcgNS42MzQxNSA1LjA5MzU2IDUuNjA0MjggNS40NzQ0TDUuNTk5NDggNS42VjcuMkw1LjYwMzQ4IDcuMzJDNS42MzIxMSA3LjcwMDk0IDUuNzk2MSA4LjA1OTA2IDYuMDY1NzkgOC4zMjk2MkM2LjMzNTQ5IDguNjAwMTkgNi42OTMwOSA4Ljc2NTMzIDcuMDczOTUgOC43OTUyTDcuMTk5NTYgOC44SDguNzk5NjRWMTAuNEg3LjE5OTU2TDcuMTkzOTYgMTAuMzA2NEM3LjE2OTg4IDEwLjEwMzkgNy4wNjkzOCA5LjkxODI4IDYuOTEzMDEgOS43ODc0MUM2Ljc1NjY0IDkuNjU2NTQgNi41NTYyIDkuNTkwMzEgNi4zNTI2MyA5LjYwMjI2QzYuMTQ5MDcgOS42MTQyMSA1Ljk1Nzc1IDkuNzAzNDQgNS44MTc3NyA5Ljg1MTcxQzUuNjc3NzkgOS45OTk5NyA1LjU5OTcxIDEwLjE5NjEgNS41OTk0OCAxMC40QzUuNTk5MzUgMTAuODAzNyA1Ljc1MTgxIDExLjE5MjUgNi4wMjYzIDExLjQ4ODRDNi4zMDA3OSAxMS43ODQ0IDYuNjc3MDEgMTEuOTY1NyA3LjA3OTU1IDExLjk5Nkw3LjE5OTU2IDEySDguNzk5NjRMOC45MTk2NSAxMS45OTZDOS4zMDA2IDExLjk2NzQgOS42NTg3NCAxMS44MDM0IDkuOTI5MzIgMTEuNTMzN0MxMC4xOTk5IDExLjI2NCAxMC4zNjUgMTAuOTA2NCAxMC4zOTQ5IDEwLjUyNTZMMTAuMzk5NyAxMC40VjUuNkwxMC4zOTU3IDUuNDhDMTAuMzY3MSA1LjA5OTA2IDEwLjIwMzEgNC43NDA5NCA5LjkzMzQxIDQuNDcwMzhDOS42NjM3MSA0LjE5OTgxIDkuMzA2MTEgNC4wMzQ2NyA4LjkyNTI1IDQuMDA0OEw4Ljc5OTY0IDRaTTguNzk5NjQgNS42VjcuMkg3LjE5OTU2VjUuNkg4Ljc5OTY0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU3NzggMi43MjkwMkMxMi42NDkxIDMuMzQ3NTggMTMuNTQwNSA0LjIzNTAxIDE0LjE2MzggNS4zMDM2QzE0Ljc4NzEgNi4zNzIyIDE1LjEyMDcgNy41ODQ5NSAxNS4xMzE3IDguODIxOTlDMTUuMTQyNyAxMC4wNTkgMTQuODMwNyAxMS4yNzc1IDE0LjIyNjUgMTIuMzU3QzEzLjYyMjQgMTMuNDM2NiAxMi43NDY5IDE0LjMzOTcgMTEuNjg2NyAxNC45NzcyQzEwLjYyNjYgMTUuNjE0NyA5LjQxODM3IDE1Ljk2NDYgOC4xODE1OSAxNS45OTIxQzYuOTQ0ODEgMTYuMDE5NiA1LjcyMjI1IDE1LjcyMzkgNC42MzQ3NiAxNS4xMzQyQzMuNTQ3MjcgMTQuNTQ0NSAyLjYzMjUxIDEzLjY4MTIgMS45ODA4OSAxMi42Mjk2QzEuMzI5MjYgMTEuNTc4IDAuOTYzMzQ1IDEwLjM3NDYgMC45MTkyOTkgOS4xMzgzM0wwLjkxNDg1NiA4Ljg4NTA4TDAuOTE5Mjk5IDguNjMxODRDMC45NjMwMTEgNy40MDYyNyAxLjMyMzA0IDYuMjEyODUgMS45NjQzOSA1LjE2NzU3QzIuNjA1NzUgNC4xMjIzIDMuNTA2NjEgMy4yNjA3MiA0LjU3OTQzIDIuNjY2NThDNS42NTIyNCAyLjA3MjQ0IDYuODYwNTIgMS43NjU5NSA4LjA4NjgyIDEuNzc2ODlDOS4zMTMxMiAxLjc4NzgzIDEwLjUxNTcgMi4xMTU4MyAxMS41Nzc4IDIuNzI5MDJaTTguMDIzNDcgNS4zMzA3N0M3Ljc4NzgxIDUuMzMwNzcgNy41NjE4IDUuNDI0MzkgNy4zOTUxNSA1LjU5MTAzQzcuMjI4NTEgNS43NTc2NyA3LjEzNDkgNS45ODM2OSA3LjEzNDkgNi4yMTkzNVY4Ljg4NTA4TDcuMTQxMTIgOC45ODkwNUM3LjE2NjU4IDkuMjA1MTkgNy4yNzA0OSA5LjQwNDQ4IDcuNDMzMTMgOS41NDkxQzcuNTk1NzcgOS42OTM3MyA3LjgwNTgzIDkuNzczNjMgOC4wMjM0NyA5Ljc3MzY2SDkuODAwNjNMOS45MDQ1OSA5Ljc2NzQ0QzEwLjEyMDcgOS43NDE5OCAxMC4zMiA5LjYzODA3IDEwLjQ2NDYgOS40NzU0M0MxMC42MDkzIDkuMzEyNzkgMTAuNjg5MiA5LjEwMjczIDEwLjY4OTIgOC44ODUwOEwxMC42ODMgOC43ODExMkMxMC42NTc1IDguNTY0OTcgMTAuNTUzNiA4LjM2NTY5IDEwLjM5MSA4LjIyMTA2QzEwLjIyODMgOC4wNzY0NCAxMC4wMTgzIDcuOTk2NTMgOS44MDA2MyA3Ljk5NjUxSDguOTEyMDVWNi4yMTkzNUw4LjkwNTgzIDYuMTE1MzlDOC44ODAzNyA1Ljg5OTI0IDguNzc2NDYgNS42OTk5NiA4LjYxMzgyIDUuNTU1MzNDOC40NTExOCA1LjQxMDcxIDguMjQxMTIgNS4zMzA4IDguMDIzNDcgNS4zMzA3N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zLjA1ODEyIDAuMTY5MDMxQzMuMjQwODYgMC4wMzMzMjkxIDMuNDY4NzEgLTAuMDI3MDcwNyAzLjY5NDY3IDAuMDAwMjg3NzU0QzMuOTIwNjQgMC4wMjc2NDYyIDQuMTI3NDkgMC4xNDA2NzcgNC4yNzI1NyAwLjMxNjA2OEM0LjQxNzY1IDAuNDkxNDU5IDQuNDg5ODggMC43MTU4MzcgNC40NzQzOSAwLjk0MjkyNUM0LjQ1ODg5IDEuMTcwMDEgNC4zNTY4MyAxLjM4MjUgNC4xODkyNyAxLjUzNjU1TDQuMTAzMDggMS42MDc2NEwxLjY1OTQ5IDMuMzg0NzlDMS40NzY4MiAzLjUyMjYyIDEuMjQ4MDEgMy41ODQ2NyAxLjAyMDczIDMuNTU3OTlDMC43OTM0NDcgMy41MzEzMiAwLjU4NTIxOSAzLjQxNzk5IDAuNDM5NDE4IDMuMjQxNjFDMC4yOTM2MTcgMy4wNjUyMyAwLjIyMTQ4NiAyLjgzOTQgMC4yMzgwNSAyLjYxMTE2QzAuMjU0NjE0IDIuMzgyOTEgMC4zNTg1OTYgMi4xNjk4NiAwLjUyODMzNiAyLjAxNjM4TDAuNjE0NTI4IDEuOTQ1M0wzLjA1ODEyIDAuMTY5MDMxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTExLjc0NzUgMC4zNjU0MUMxMS44NzQ3IDAuMTkwMzgzIDEyLjA2MTUgMC4wNjc4MTEgMTIuMjcyNyAwLjAyMDY5NDFDMTIuNDgzOSAtMC4wMjY0MjI4IDEyLjcwNSAwLjAwNTE1NDE1IDEyLjg5NDYgMC4xMDk1TDEyLjk4ODggMC4xNjkwMzRMMTUuNDMyNCAxLjk0NjE5QzE1LjYxNTEgMi4wNzkxIDE1Ljc0MDQgMi4yNzY2NSAxNS43ODI2IDIuNDk4NjRDMTUuODI0OSAyLjcyMDYzIDE1Ljc4MSAyLjk1MDM4IDE1LjY1OTkgMy4xNDExNEMxNS41Mzg3IDMuMzMxOSAxNS4zNDk1IDMuNDY5MzUgMTUuMTMwNiAzLjUyNTUxQzE0LjkxMTcgMy41ODE2NyAxNC42Nzk2IDMuNTUyMzIgMTQuNDgxNiAzLjQ0MzQ0TDE0LjM4NzQgMy4zODM5MUwxMS45NDM4IDEuNjA2NzVDMTEuODQ5NSAxLjUzODA4IDExLjc2OTYgMS40NTE1IDExLjcwODcgMS4zNTE5NUMxMS42NDc4IDEuMjUyNCAxMS42MDcyIDEuMTQxODQgMTEuNTg5IDEuMDI2NTdDMTEuNTcwOSAwLjkxMTI5OCAxMS41NzU2IDAuNzkzNTgyIDExLjYwMjkgMC42ODAxNDFDMTEuNjMwMyAwLjU2NjY5OSAxMS42Nzg4IDAuNDU5NzUzIDExLjc0NzUgMC4zNjU0MVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjU3NzggMi43MjkwMkMxMi42NDkxIDMuMzQ3NTggMTMuNTQwNSA0LjIzNTAxIDE0LjE2MzggNS4zMDM2QzE0Ljc4NzEgNi4zNzIyIDE1LjEyMDcgNy41ODQ5NSAxNS4xMzE3IDguODIxOTlDMTUuMTQyNyAxMC4wNTkgMTQuODMwNyAxMS4yNzc1IDE0LjIyNjUgMTIuMzU3QzEzLjYyMjQgMTMuNDM2NiAxMi43NDY5IDE0LjMzOTcgMTEuNjg2NyAxNC45NzcyQzEwLjYyNjYgMTUuNjE0NyA5LjQxODM3IDE1Ljk2NDYgOC4xODE1OSAxNS45OTIxQzYuOTQ0ODEgMTYuMDE5NiA1LjcyMjI1IDE1LjcyMzkgNC42MzQ3NiAxNS4xMzQyQzMuNTQ3MjcgMTQuNTQ0NSAyLjYzMjUxIDEzLjY4MTIgMS45ODA4OSAxMi42Mjk2QzEuMzI5MjYgMTEuNTc4IDAuOTYzMzQ1IDEwLjM3NDYgMC45MTkyOTkgOS4xMzgzM0wwLjkxNDg1NiA4Ljg4NTA4TDAuOTE5Mjk5IDguNjMxODRDMC45NjMwMTEgNy40MDYyNyAxLjMyMzA0IDYuMjEyODUgMS45NjQzOSA1LjE2NzU3QzIuNjA1NzUgNC4xMjIzIDMuNTA2NjEgMy4yNjA3MiA0LjU3OTQzIDIuNjY2NThDNS42NTIyNCAyLjA3MjQ0IDYuODYwNTIgMS43NjU5NSA4LjA4NjgyIDEuNzc2ODlDOS4zMTMxMiAxLjc4NzgzIDEwLjUxNTcgMi4xMTU4MyAxMS41Nzc4IDIuNzI5MDJaTTguMDIzNDcgNS4zMzA3N0M3Ljc4NzgxIDUuMzMwNzcgNy41NjE4IDUuNDI0MzkgNy4zOTUxNSA1LjU5MTAzQzcuMjI4NTEgNS43NTc2NyA3LjEzNDkgNS45ODM2OSA3LjEzNDkgNi4yMTkzNVY4Ljg4NTA4TDcuMTQxMTIgOC45ODkwNUM3LjE2NjU4IDkuMjA1MTkgNy4yNzA0OSA5LjQwNDQ4IDcuNDMzMTMgOS41NDkxQzcuNTk1NzcgOS42OTM3MyA3LjgwNTgzIDkuNzczNjMgOC4wMjM0NyA5Ljc3MzY2SDkuODAwNjNMOS45MDQ1OSA5Ljc2NzQ0QzEwLjEyMDcgOS43NDE5OCAxMC4zMiA5LjYzODA3IDEwLjQ2NDYgOS40NzU0M0MxMC42MDkzIDkuMzEyNzkgMTAuNjg5MiA5LjEwMjczIDEwLjY4OTIgOC44ODUwOEwxMC42ODMgOC43ODExMkMxMC42NTc1IDguNTY0OTcgMTAuNTUzNiA4LjM2NTY5IDEwLjM5MSA4LjIyMTA2QzEwLjIyODMgOC4wNzY0NCAxMC4wMTgzIDcuOTk2NTMgOS44MDA2MyA3Ljk5NjUxSDguOTEyMDVWNi4yMTkzNUw4LjkwNTgzIDYuMTE1MzlDOC44ODAzNyA1Ljg5OTI0IDguNzc2NDYgNS42OTk5NiA4LjYxMzgyIDUuNTU1MzNDOC40NTExOCA1LjQxMDcxIDguMjQxMTIgNS4zMzA4IDguMDIzNDcgNS4zMzA3N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zLjA1ODEyIDAuMTY5MDMxQzMuMjQwODYgMC4wMzMzMjkxIDMuNDY4NzEgLTAuMDI3MDcwNyAzLjY5NDY3IDAuMDAwMjg3NzU0QzMuOTIwNjQgMC4wMjc2NDYyIDQuMTI3NDkgMC4xNDA2NzcgNC4yNzI1NyAwLjMxNjA2OEM0LjQxNzY1IDAuNDkxNDU5IDQuNDg5ODggMC43MTU4MzcgNC40NzQzOSAwLjk0MjkyNUM0LjQ1ODg5IDEuMTcwMDEgNC4zNTY4MyAxLjM4MjUgNC4xODkyNyAxLjUzNjU1TDQuMTAzMDggMS42MDc2NEwxLjY1OTQ5IDMuMzg0NzlDMS40NzY4MiAzLjUyMjYyIDEuMjQ4MDEgMy41ODQ2NyAxLjAyMDczIDMuNTU3OTlDMC43OTM0NDcgMy41MzEzMiAwLjU4NTIxOSAzLjQxNzk5IDAuNDM5NDE4IDMuMjQxNjFDMC4yOTM2MTcgMy4wNjUyMyAwLjIyMTQ4NiAyLjgzOTQgMC4yMzgwNSAyLjYxMTE2QzAuMjU0NjE0IDIuMzgyOTEgMC4zNTg1OTYgMi4xNjk4NiAwLjUyODMzNiAyLjAxNjM4TDAuNjE0NTI4IDEuOTQ1M0wzLjA1ODEyIDAuMTY5MDMxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTExLjc0NzUgMC4zNjU0MUMxMS44NzQ3IDAuMTkwMzgzIDEyLjA2MTUgMC4wNjc4MTEgMTIuMjcyNyAwLjAyMDY5NDFDMTIuNDgzOSAtMC4wMjY0MjI4IDEyLjcwNSAwLjAwNTE1NDE1IDEyLjg5NDYgMC4xMDk1TDEyLjk4ODggMC4xNjkwMzRMMTUuNDMyNCAxLjk0NjE5QzE1LjYxNTEgMi4wNzkxIDE1Ljc0MDQgMi4yNzY2NSAxNS43ODI2IDIuNDk4NjRDMTUuODI0OSAyLjcyMDYzIDE1Ljc4MSAyLjk1MDM4IDE1LjY1OTkgMy4xNDExNEMxNS41Mzg3IDMuMzMxOSAxNS4zNDk1IDMuNDY5MzUgMTUuMTMwNiAzLjUyNTUxQzE0LjkxMTcgMy41ODE2NyAxNC42Nzk2IDMuNTUyMzIgMTQuNDgxNiAzLjQ0MzQ0TDE0LjM4NzQgMy4zODM5MUwxMS45NDM4IDEuNjA2NzVDMTEuODQ5NSAxLjUzODA4IDExLjc2OTYgMS40NTE1IDExLjcwODcgMS4zNTE5NUMxMS42NDc4IDEuMjUyNCAxMS42MDcyIDEuMTQxODQgMTEuNTg5IDEuMDI2NTdDMTEuNTcwOSAwLjkxMTI5OCAxMS41NzU2IDAuNzkzNTgyIDExLjYwMjkgMC42ODAxNDFDMTEuNjMwMyAwLjU2NjY5OSAxMS42Nzg4IDAuNDU5NzUzIDExLjc0NzUgMC4zNjU0MVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEMxMi40MTg0IDAgMTYgMy41ODE2IDE2IDhDMTYgMTIuNDE4NCAxMi40MTg0IDE2IDggMTZDMy42NTYgMTYgMC4xMjE2IDEyLjUzODQgMC4wMDMxOTk5NiA4LjIyNEwwIDhMMC4wMDMxOTk5NiA3Ljc3NkMwLjEyMTYgMy40NjE2IDMuNjU2IDAgOCAwWk01LjIgNC44QzQuNjkyMjMgNC43OTk5MiA0LjIwMzQzIDQuOTkyOTkgMy44MzI3NiA1LjM0MDAzQzMuNDYyMSA1LjY4NzA4IDMuMjM3MzEgNi4xNjIxMiAzLjIwNCA2LjY2ODhMMy4yIDYuOFYxMC40TDMuMjA1NiAxMC40OTM2QzMuMjI4NzMgMTAuNjg4IDMuMzIyMzYgMTAuODY3MiAzLjQ2ODc3IDEwLjk5NzNDMy42MTUxOCAxMS4xMjczIDMuODA0MTkgMTEuMTk5MSA0IDExLjE5OTFDNC4xOTU4MSAxMS4xOTkxIDQuMzg0ODIgMTEuMTI3MyA0LjUzMTIzIDEwLjk5NzNDNC42Nzc2NCAxMC44NjcyIDQuNzcxMjcgMTAuNjg4IDQuNzk0NCAxMC40OTM2TDQuOCAxMC40VjkuNkg1LjZWMTAuNEw1LjYwNTYgMTAuNDkzNkM1LjYyODczIDEwLjY4OCA1LjcyMjM2IDEwLjg2NzIgNS44Njg3NyAxMC45OTczQzYuMDE1MTggMTEuMTI3MyA2LjIwNDE5IDExLjE5OTEgNi40IDExLjE5OTFDNi41OTU4MSAxMS4xOTkxIDYuNzg0ODIgMTEuMTI3MyA2LjkzMTIzIDEwLjk5NzNDNy4wNzc2NCAxMC44NjcyIDcuMTcxMjcgMTAuNjg4IDcuMTk0NCAxMC40OTM2TDcuMiAxMC40VjYuOEw3LjE5NiA2LjY2ODhDNy4xNjI2OSA2LjE2MjEyIDYuOTM3OSA1LjY4NzA4IDYuNTY3MjQgNS4zNDAwM0M2LjE5NjU3IDQuOTkyOTkgNS43MDc3NyA0Ljc5OTkyIDUuMiA0LjhaTTEwLjQgNC44SDkuNkM5LjM4NzgzIDQuOCA5LjE4NDM0IDQuODg0MjkgOS4wMzQzMSA1LjAzNDMxQzguODg0MjkgNS4xODQzNCA4LjggNS4zODc4MyA4LjggNS42VjEwLjRDOC44IDEwLjYxMjIgOC44ODQyOSAxMC44MTU3IDkuMDM0MzEgMTAuOTY1N0M5LjE4NDM0IDExLjExNTcgOS4zODc4MyAxMS4yIDkuNiAxMS4ySDEwLjRDMTEuMDM2NSAxMS4yIDExLjY0NyAxMC45NDcxIDEyLjA5NzEgMTAuNDk3MUMxMi41NDcxIDEwLjA0NyAxMi44IDkuNDM2NTIgMTIuOCA4LjhWNy4yQzEyLjggNi41NjM0OCAxMi41NDcxIDUuOTUzMDMgMTIuMDk3MSA1LjUwMjk0QzExLjY0NyA1LjA1Mjg2IDExLjAzNjUgNC44IDEwLjQgNC44Wk0xMC40IDYuNEMxMC42MTIyIDYuNCAxMC44MTU3IDYuNDg0MjkgMTAuOTY1NyA2LjYzNDMxQzExLjExNTcgNi43ODQzNCAxMS4yIDYuOTg3ODMgMTEuMiA3LjJWOC44QzExLjIgOC45OTU5NSAxMS4xMjggOS4xODUwNyAxMC45OTc4IDkuMzMxNUMxMC44Njc2IDkuNDc3OTMgMTAuNjg4MiA5LjU3MTQ3IDEwLjQ5MzYgOS41OTQ0TDEwLjQgOS42VjYuNFpNNS4yIDYuNEM1LjI5MzYyIDYuMzk5OTcgNS4zODQyOSA2LjQzMjc4IDUuNDU2MjEgNi40OTI3MUM1LjUyODEzIDYuNTUyNjUgNS41NzY3NSA2LjYzNTkxIDUuNTkzNiA2LjcyOEw1LjYgNi44VjhINC44VjYuOEw0LjgwNjQgNi43MjhDNC44MjMyNSA2LjYzNTkxIDQuODcxODcgNi41NTI2NSA0Ljk0Mzc5IDYuNDkyNzFDNS4wMTU3MSA2LjQzMjc4IDUuMTA2MzggNi4zOTk5NyA1LjIgNi40WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEMxMi40MTg0IDAgMTYgMy41ODE2IDE2IDhDMTYgMTIuNDE4NCAxMi40MTg0IDE2IDggMTZDMy42NTYgMTYgMC4xMjE2IDEyLjUzODQgMC4wMDMxOTk5NiA4LjIyNEwwIDhMMC4wMDMxOTk5NiA3Ljc3NkMwLjEyMTYgMy40NjE2IDMuNjU2IDAgOCAwWk01LjIgNC44QzQuNjkyMjMgNC43OTk5MiA0LjIwMzQzIDQuOTkyOTkgMy44MzI3NiA1LjM0MDAzQzMuNDYyMSA1LjY4NzA4IDMuMjM3MzEgNi4xNjIxMiAzLjIwNCA2LjY2ODhMMy4yIDYuOFYxMC40TDMuMjA1NiAxMC40OTM2QzMuMjI4NzMgMTAuNjg4IDMuMzIyMzYgMTAuODY3MiAzLjQ2ODc3IDEwLjk5NzNDMy42MTUxOCAxMS4xMjczIDMuODA0MTkgMTEuMTk5MSA0IDExLjE5OTFDNC4xOTU4MSAxMS4xOTkxIDQuMzg0ODIgMTEuMTI3MyA0LjUzMTIzIDEwLjk5NzNDNC42Nzc2NCAxMC44NjcyIDQuNzcxMjcgMTAuNjg4IDQuNzk0NCAxMC40OTM2TDQuOCAxMC40VjkuNkg1LjZWMTAuNEw1LjYwNTYgMTAuNDkzNkM1LjYyODczIDEwLjY4OCA1LjcyMjM2IDEwLjg2NzIgNS44Njg3NyAxMC45OTczQzYuMDE1MTggMTEuMTI3MyA2LjIwNDE5IDExLjE5OTEgNi40IDExLjE5OTFDNi41OTU4MSAxMS4xOTkxIDYuNzg0ODIgMTEuMTI3MyA2LjkzMTIzIDEwLjk5NzNDNy4wNzc2NCAxMC44NjcyIDcuMTcxMjcgMTAuNjg4IDcuMTk0NCAxMC40OTM2TDcuMiAxMC40VjYuOEw3LjE5NiA2LjY2ODhDNy4xNjI2OSA2LjE2MjEyIDYuOTM3OSA1LjY4NzA4IDYuNTY3MjQgNS4zNDAwM0M2LjE5NjU3IDQuOTkyOTkgNS43MDc3NyA0Ljc5OTkyIDUuMiA0LjhaTTEwLjQgNC44SDkuNkM5LjM4NzgzIDQuOCA5LjE4NDM0IDQuODg0MjkgOS4wMzQzMSA1LjAzNDMxQzguODg0MjkgNS4xODQzNCA4LjggNS4zODc4MyA4LjggNS42VjEwLjRDOC44IDEwLjYxMjIgOC44ODQyOSAxMC44MTU3IDkuMDM0MzEgMTAuOTY1N0M5LjE4NDM0IDExLjExNTcgOS4zODc4MyAxMS4yIDkuNiAxMS4ySDEwLjRDMTEuMDM2NSAxMS4yIDExLjY0NyAxMC45NDcxIDEyLjA5NzEgMTAuNDk3MUMxMi41NDcxIDEwLjA0NyAxMi44IDkuNDM2NTIgMTIuOCA4LjhWNy4yQzEyLjggNi41NjM0OCAxMi41NDcxIDUuOTUzMDMgMTIuMDk3MSA1LjUwMjk0QzExLjY0NyA1LjA1Mjg2IDExLjAzNjUgNC44IDEwLjQgNC44Wk0xMC40IDYuNEMxMC42MTIyIDYuNCAxMC44MTU3IDYuNDg0MjkgMTAuOTY1NyA2LjYzNDMxQzExLjExNTcgNi43ODQzNCAxMS4yIDYuOTg3ODMgMTEuMiA3LjJWOC44QzExLjIgOC45OTU5NSAxMS4xMjggOS4xODUwNyAxMC45OTc4IDkuMzMxNUMxMC44Njc2IDkuNDc3OTMgMTAuNjg4MiA5LjU3MTQ3IDEwLjQ5MzYgOS41OTQ0TDEwLjQgOS42VjYuNFpNNS4yIDYuNEM1LjI5MzYyIDYuMzk5OTcgNS4zODQyOSA2LjQzMjc4IDUuNDU2MjEgNi40OTI3MUM1LjUyODEzIDYuNTUyNjUgNS41NzY3NSA2LjYzNTkxIDUuNTkzNiA2LjcyOEw1LjYgNi44VjhINC44VjYuOEw0LjgwNjQgNi43MjhDNC44MjMyNSA2LjYzNTkxIDQuODcxODcgNi41NTI2NSA0Ljk0Mzc5IDYuNDkyNzFDNS4wMTU3MSA2LjQzMjc4IDUuMTA2MzggNi4zOTk5NyA1LjIgNi40WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDcxNDMgMEM4LjExMzM1IDAgOS4xMTI2IDAuNDIxNDA4IDkuODQ5MzUgMS4xNzE1MkMxMC41ODYxIDEuOTIxNjMgMTEgMi45MzkgMTEgMy45OTk4MVYxNS4xOTkzQzExIDE1LjM0NDEgMTAuOTYxNCAxNS40ODYyIDEwLjg4ODMgMTUuNjEwNUMxMC44MTUyIDE1LjczNDcgMTAuNzEwNCAxNS44MzY0IDEwLjU4NSAxNS45MDQ4QzEwLjQ1OTUgMTUuOTczMSAxMC4zMTgyIDE2LjAwNTUgMTAuMTc2MiAxNS45OTg0QzEwLjAzNDEgMTUuOTkxNCA5Ljg5NjU0IDE1Ljk0NTIgOS43NzgyMSAxNS44NjQ5TDUuNSAxMi45NjFMMS4yMjI1NyAxNS44NjQ5QzEuMTEwNDUgMTUuOTQxMyAwLjk4MDg4NyAxNS45ODcgMC44NDYzNzIgMTUuOTk3NkMwLjcxMTg1OCAxNi4wMDgyIDAuNTc2OTIyIDE1Ljk4MzQgMC40NTQ1NiAxNS45MjU1QzAuMzMyMTk4IDE1Ljg2NzcgMC4yMjY1MzQgMTUuNzc4NyAwLjE0Nzc0NSAxNS42NjcyQzAuMDY4OTU2NSAxNS41NTU3IDAuMDE5Njk4MSAxNS40MjU0IDAuMDA0NzE0MzIgMTUuMjg4OUwwIDE1LjE5OTNWMy45OTk4MUMwIDIuOTM5IDAuNDEzOTAyIDEuOTIxNjMgMS4xNTA2NSAxLjE3MTUyQzEuODg3NCAwLjQyMTQwOCAyLjg4NjY1IDAgMy45Mjg1NyAwSDcuMDcxNDNaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDcxNDMgMEM4LjExMzM1IDAgOS4xMTI2IDAuNDIxNDA4IDkuODQ5MzUgMS4xNzE1MkMxMC41ODYxIDEuOTIxNjMgMTEgMi45MzkgMTEgMy45OTk4MVYxNS4xOTkzQzExIDE1LjM0NDEgMTAuOTYxNCAxNS40ODYyIDEwLjg4ODMgMTUuNjEwNUMxMC44MTUyIDE1LjczNDcgMTAuNzEwNCAxNS44MzY0IDEwLjU4NSAxNS45MDQ4QzEwLjQ1OTUgMTUuOTczMSAxMC4zMTgyIDE2LjAwNTUgMTAuMTc2MiAxNS45OTg0QzEwLjAzNDEgMTUuOTkxNCA5Ljg5NjU0IDE1Ljk0NTIgOS43NzgyMSAxNS44NjQ5TDUuNSAxMi45NjFMMS4yMjI1NyAxNS44NjQ5QzEuMTEwNDUgMTUuOTQxMyAwLjk4MDg4NyAxNS45ODcgMC44NDYzNzIgMTUuOTk3NkMwLjcxMTg1OCAxNi4wMDgyIDAuNTc2OTIyIDE1Ljk4MzQgMC40NTQ1NiAxNS45MjU1QzAuMzMyMTk4IDE1Ljg2NzcgMC4yMjY1MzQgMTUuNzc4NyAwLjE0Nzc0NSAxNS42NjcyQzAuMDY4OTU2NSAxNS41NTU3IDAuMDE5Njk4MSAxNS40MjU0IDAuMDA0NzE0MzIgMTUuMjg4OUwwIDE1LjE5OTNWMy45OTk4MUMwIDIuOTM5IDAuNDEzOTAyIDEuOTIxNjMgMS4xNTA2NSAxLjE3MTUyQzEuODg3NCAwLjQyMTQwOCAyLjg4NjY1IDAgMy45Mjg1NyAwSDcuMDcxNDNaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM1NCAwLjI3NTA0NkMxMi40OTMgMC4xMTUxMjggMTIuNjg5OSAwLjAxNjk2MjMgMTIuOTAxMyAwLjAwMjExODA0QzEzLjExMjcgLTAuMDEyNzI2MiAxMy4zMjE0IDAuMDU2OTY0OCAxMy40ODE1IDAuMTk1ODc5QzE0LjUxNTYgMS4wOTM2NSAxNS4zNDY2IDIuMjAxNTQgMTUuOTE4OCAzLjQ0NTcxQzE2LjAwNzUgMy42Mzg0OSAxNi4wMTU5IDMuODU4NiAxNS45NDIzIDQuMDU3NkMxNS44Njg3IDQuMjU2NjEgMTUuNzE5IDQuNDE4MjEgMTUuNTI2MiA0LjUwNjg2QzE1LjMzMzQgNC41OTU1MSAxNS4xMTMzIDQuNjAzOTUgMTQuOTE0MyA0LjUzMDMyQzE0LjcxNTMgNC40NTY2OCAxNC41NTM3IDQuMzA3MDEgMTQuNDY1MSA0LjExNDIzQzEzLjk4ODMgMy4wNzY1NiAxMy4yOTU5IDIuMTUyNDIgMTIuNDMzOSAxLjQwMzM3QzEyLjI3MzkgMS4yNjQ0IDEyLjE3NTYgMS4wNjc1OCAxMi4xNjA2IDAuODU2MTU5QzEyLjE0NTYgMC42NDQ3MzcgMTIuMjE1MSAwLjQzNTIxMiAxMi4zNTQgMC4yNzUwNDZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi41MDYyIDAuMTk1ODhDMi42NjYzMiAwLjA1Njc1MzIgMi44NzUxNSAtMC4wMTMwNjY3IDMuMDg2NzUgMC4wMDE3Nzk5NEMzLjI5ODM2IDAuMDE2NjI2NiAzLjQ5NTM5IDAuMTE0OTI0IDMuNjM0NTIgMC4yNzUwNDdDMy43NzM2NSAwLjQzNTE3IDMuODQzNDcgMC42NDQwMDMgMy44Mjg2MiAwLjg1NTYwNUMzLjgxMzc3IDEuMDY3MjEgMy43MTU0OCAxLjI2NDI0IDMuNTU1MzUgMS40MDMzN0MyLjY5MzQgMi4xNTI0MiAyLjAwMDk3IDMuMDc2NTcgMS41MjQyMSA0LjExNDIzQzEuNDgxNTkgNC4yMTE1MiAxLjQyMDAyIDQuMjk5MzUgMS4zNDMwOCA0LjM3MjU5QzEuMjY2MTUgNC40NDU4MyAxLjE3NTM5IDQuNTAzIDEuMDc2MTIgNC41NDA3OEMwLjk3Njg0NCA0LjU3ODU2IDAuODcxMDM3IDQuNTk2MTggMC43NjQ4NzcgNC41OTI2MUMwLjY1ODcxNyA0LjU4OTA0IDAuNTU0MzMyIDQuNTY0MzYgMC40NTc4MTUgNC41MjAwMUMwLjM2MTI5OSA0LjQ3NTY1IDAuMjc0NTg2IDQuNDEyNTIgMC4yMDI3NDEgNC4zMzQyOEMwLjEzMDg5NSA0LjI1NjA0IDAuMDc1MzU1NCA0LjE2NDI4IDAuMDM5MzY1NiA0LjA2NDM0QzAuMDAzMzc1NzggMy45NjQ0IC0wLjAxMjM0MzIgMy44NTgzIC0wLjAwNjg3MzY2IDMuNzUyMjJDLTAuMDAxNDA0MSAzLjY0NjE0IDAuMDI1MTQ0NSAzLjU0MjIxIDAuMDcxMjIxOCAzLjQ0NjUxQzAuNjQyNzE1IDIuMjAyMjggMS40NzI4MSAxLjA5NDEyIDIuNTA2MiAwLjE5NTg4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuNzgyMjIgMTMuNTk0MkMxMC40NzM5IDEzLjU5NDIgMTAuODM5NCAxNC40MTMxIDEwLjM3OCAxNC45MjgxQzEwLjA3ODIgMTUuMjYzNSA5LjcxMDk5IDE1LjUzMTggOS4zMDAzMiAxNS43MTUzQzguODg5NjQgMTUuODk4OSA4LjQ0NDgxIDE1Ljk5MzYgNy45OTQ5OCAxNS45OTMyQzcuNTQ1MTQgMTUuOTkzNiA3LjEwMDMxIDE1Ljg5ODkgNi42ODk2NCAxNS43MTUzQzYuMjc4OTYgMTUuNTMxOCA1LjkxMTcyIDE1LjI2MzUgNS42MTE5OCAxNC45MjgxQzUuMTcwNTcgMTQuNDM1NSA1LjQ4NTYzIDEzLjY2NTQgNi4xMTg5NyAxMy41OTk4TDYuMjA2OTMgMTMuNTk1TDkuNzgyMjIgMTMuNTk0MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03Ljk5NDk5IC0zLjgxNDdlLTA1QzkuMDgwOTQgLTMuODE0N2UtMDUgOS45OTg5NSAwLjcyMjA1NyAxMC4yOTQgMS43MTIwNEwxMC4zMzA4IDEuODQ4NzhMMTAuMzM3MiAxLjg4MzE3QzExLjIxODcgMi4zODA0OCAxMS45Njk5IDMuMDc5NTUgMTIuNTI5MyAzLjkyMzExQzEzLjA4ODYgNC43NjY2NyAxMy40NDAxIDUuNzMwNzMgMTMuNTU1IDYuNzM2MzJMMTMuNTc3NCA2Ljk2NTgyTDEzLjU5MjYgNy4xOTY5M1Y5LjU0MDc0TDEzLjYwOTQgOS42NDk0OUMxMy43MTg5IDEwLjIzODcgMTQuMDQ1IDEwLjc2NTYgMTQuNTIzNCAxMS4xMjY1TDE0LjY1NyAxMS4yMkwxNC43ODY1IDExLjI5OTJDMTUuNDc0MiAxMS42ODg2IDE1LjIzNDMgMTIuNzExNCAxNC40ODUxIDEyLjc4OThMMTQuMzkyMyAxMi43OTQ2SDEuNTk3NjlDMC43NzU2MzggMTIuNzk0NiAwLjQ4ODU1OSAxMS43MDM4IDEuMjAzNDYgMTEuMjk5MkMxLjUwODE1IDExLjEyNjggMS43NzE0MiAxMC44ODk3IDEuOTc0NzYgMTAuNjA0N0MyLjE3ODExIDEwLjMxOTggMi4zMTY2MiA5Ljk5MzcxIDIuMzgwNTYgOS42NDk0OUwyLjM5NzM1IDkuNTM1MTRMMi4zOTgxNSA3LjE2MDE0QzIuNDQ2OTEgNi4xMTU2OSAyLjc1MDkzIDUuMDk5MSAzLjI4MzYxIDQuMTk5MzdDMy44MTYyOCAzLjI5OTYzIDQuNTYxMzcgMi41NDQxNyA1LjQ1MzY2IDEuOTk5MTJMNS42NTE5OCAxLjg4MjM3TDUuNjU5OTggMS44NDc5OEM1Ljc3MzA5IDEuMzY5OCA2LjAzMDE4IDAuOTM3ODM2IDYuMzk2NTQgMC42MTAzNzRDNi43NjI4OSAwLjI4MjkxMSA3LjIyMDg5IDAuMDc1NzE3NiA3LjcwODcxIDAuMDE2NzU0N0w3Ljg1NDI1IDAuMDAzMTYwNDZMNy45OTQ5OSAtMy44MTQ3ZS0wNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjM1NCAwLjI3NTA0NkMxMi40OTMgMC4xMTUxMjggMTIuNjg5OSAwLjAxNjk2MjMgMTIuOTAxMyAwLjAwMjExODA0QzEzLjExMjcgLTAuMDEyNzI2MiAxMy4zMjE0IDAuMDU2OTY0OCAxMy40ODE1IDAuMTk1ODc5QzE0LjUxNTYgMS4wOTM2NSAxNS4zNDY2IDIuMjAxNTQgMTUuOTE4OCAzLjQ0NTcxQzE2LjAwNzUgMy42Mzg0OSAxNi4wMTU5IDMuODU4NiAxNS45NDIzIDQuMDU3NkMxNS44Njg3IDQuMjU2NjEgMTUuNzE5IDQuNDE4MjEgMTUuNTI2MiA0LjUwNjg2QzE1LjMzMzQgNC41OTU1MSAxNS4xMTMzIDQuNjAzOTUgMTQuOTE0MyA0LjUzMDMyQzE0LjcxNTMgNC40NTY2OCAxNC41NTM3IDQuMzA3MDEgMTQuNDY1MSA0LjExNDIzQzEzLjk4ODMgMy4wNzY1NiAxMy4yOTU5IDIuMTUyNDIgMTIuNDMzOSAxLjQwMzM3QzEyLjI3MzkgMS4yNjQ0IDEyLjE3NTYgMS4wNjc1OCAxMi4xNjA2IDAuODU2MTU5QzEyLjE0NTYgMC42NDQ3MzcgMTIuMjE1MSAwLjQzNTIxMiAxMi4zNTQgMC4yNzUwNDZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi41MDYyIDAuMTk1ODhDMi42NjYzMiAwLjA1Njc1MzIgMi44NzUxNSAtMC4wMTMwNjY3IDMuMDg2NzUgMC4wMDE3Nzk5NEMzLjI5ODM2IDAuMDE2NjI2NiAzLjQ5NTM5IDAuMTE0OTI0IDMuNjM0NTIgMC4yNzUwNDdDMy43NzM2NSAwLjQzNTE3IDMuODQzNDcgMC42NDQwMDMgMy44Mjg2MiAwLjg1NTYwNUMzLjgxMzc3IDEuMDY3MjEgMy43MTU0OCAxLjI2NDI0IDMuNTU1MzUgMS40MDMzN0MyLjY5MzQgMi4xNTI0MiAyLjAwMDk3IDMuMDc2NTcgMS41MjQyMSA0LjExNDIzQzEuNDgxNTkgNC4yMTE1MiAxLjQyMDAyIDQuMjk5MzUgMS4zNDMwOCA0LjM3MjU5QzEuMjY2MTUgNC40NDU4MyAxLjE3NTM5IDQuNTAzIDEuMDc2MTIgNC41NDA3OEMwLjk3Njg0NCA0LjU3ODU2IDAuODcxMDM3IDQuNTk2MTggMC43NjQ4NzcgNC41OTI2MUMwLjY1ODcxNyA0LjU4OTA0IDAuNTU0MzMyIDQuNTY0MzYgMC40NTc4MTUgNC41MjAwMUMwLjM2MTI5OSA0LjQ3NTY1IDAuMjc0NTg2IDQuNDEyNTIgMC4yMDI3NDEgNC4zMzQyOEMwLjEzMDg5NSA0LjI1NjA0IDAuMDc1MzU1NCA0LjE2NDI4IDAuMDM5MzY1NiA0LjA2NDM0QzAuMDAzMzc1NzggMy45NjQ0IC0wLjAxMjM0MzIgMy44NTgzIC0wLjAwNjg3MzY2IDMuNzUyMjJDLTAuMDAxNDA0MSAzLjY0NjE0IDAuMDI1MTQ0NSAzLjU0MjIxIDAuMDcxMjIxOCAzLjQ0NjUxQzAuNjQyNzE1IDIuMjAyMjggMS40NzI4MSAxLjA5NDEyIDIuNTA2MiAwLjE5NTg4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuNzgyMjIgMTMuNTk0MkMxMC40NzM5IDEzLjU5NDIgMTAuODM5NCAxNC40MTMxIDEwLjM3OCAxNC45MjgxQzEwLjA3ODIgMTUuMjYzNSA5LjcxMDk5IDE1LjUzMTggOS4zMDAzMiAxNS43MTUzQzguODg5NjQgMTUuODk4OSA4LjQ0NDgxIDE1Ljk5MzYgNy45OTQ5OCAxNS45OTMyQzcuNTQ1MTQgMTUuOTkzNiA3LjEwMDMxIDE1Ljg5ODkgNi42ODk2NCAxNS43MTUzQzYuMjc4OTYgMTUuNTMxOCA1LjkxMTcyIDE1LjI2MzUgNS42MTE5OCAxNC45MjgxQzUuMTcwNTcgMTQuNDM1NSA1LjQ4NTYzIDEzLjY2NTQgNi4xMTg5NyAxMy41OTk4TDYuMjA2OTMgMTMuNTk1TDkuNzgyMjIgMTMuNTk0MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03Ljk5NDk5IC0zLjgxNDdlLTA1QzkuMDgwOTQgLTMuODE0N2UtMDUgOS45OTg5NSAwLjcyMjA1NyAxMC4yOTQgMS43MTIwNEwxMC4zMzA4IDEuODQ4NzhMMTAuMzM3MiAxLjg4MzE3QzExLjIxODcgMi4zODA0OCAxMS45Njk5IDMuMDc5NTUgMTIuNTI5MyAzLjkyMzExQzEzLjA4ODYgNC43NjY2NyAxMy40NDAxIDUuNzMwNzMgMTMuNTU1IDYuNzM2MzJMMTMuNTc3NCA2Ljk2NTgyTDEzLjU5MjYgNy4xOTY5M1Y5LjU0MDc0TDEzLjYwOTQgOS42NDk0OUMxMy43MTg5IDEwLjIzODcgMTQuMDQ1IDEwLjc2NTYgMTQuNTIzNCAxMS4xMjY1TDE0LjY1NyAxMS4yMkwxNC43ODY1IDExLjI5OTJDMTUuNDc0MiAxMS42ODg2IDE1LjIzNDMgMTIuNzExNCAxNC40ODUxIDEyLjc4OThMMTQuMzkyMyAxMi43OTQ2SDEuNTk3NjlDMC43NzU2MzggMTIuNzk0NiAwLjQ4ODU1OSAxMS43MDM4IDEuMjAzNDYgMTEuMjk5MkMxLjUwODE1IDExLjEyNjggMS43NzE0MiAxMC44ODk3IDEuOTc0NzYgMTAuNjA0N0MyLjE3ODExIDEwLjMxOTggMi4zMTY2MiA5Ljk5MzcxIDIuMzgwNTYgOS42NDk0OUwyLjM5NzM1IDkuNTM1MTRMMi4zOTgxNSA3LjE2MDE0QzIuNDQ2OTEgNi4xMTU2OSAyLjc1MDkzIDUuMDk5MSAzLjI4MzYxIDQuMTk5MzdDMy44MTYyOCAzLjI5OTYzIDQuNTYxMzcgMi41NDQxNyA1LjQ1MzY2IDEuOTk5MTJMNS42NTE5OCAxLjg4MjM3TDUuNjU5OTggMS44NDc5OEM1Ljc3MzA5IDEuMzY5OCA2LjAzMDE4IDAuOTM3ODM2IDYuMzk2NTQgMC42MTAzNzRDNi43NjI4OSAwLjI4MjkxMSA3LjIyMDg5IDAuMDc1NzE3NiA3LjcwODcxIDAuMDE2NzU0N0w3Ljg1NDI1IDAuMDAzMTYwNDZMNy45OTQ5OSAtMy44MTQ3ZS0wNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjAwMDEgMS4wNzIwMkMxMy4yMDY4IDEuNzY4NyAxNC4yMTA1IDIuNzY4NDQgMTQuOTEyIDMuOTcyMjZDMTUuNjEzNSA1LjE3NjA4IDE1Ljk4ODUgNi41NDIyNCAxNS45OTk3IDcuOTM1NDlDMTYuMDExIDkuMzI4NzUgMTUuNjU4MiAxMC43MDA4IDE0Ljk3NjIgMTEuOTE1OEMxNC4yOTQyIDEzLjEzMDggMTMuMzA2OCAxNC4xNDY2IDEyLjExMTUgMTQuODYyN0MxMC45MTYzIDE1LjU3ODggOS41NTQ4MSAxNS45NzAzIDguMTYxNzggMTUuOTk4NUM2Ljc2ODc1IDE2LjAyNjcgNS4zOTI1MSAxNS42OTA2IDQuMTY5MjkgMTUuMDIzNEMyLjk0NjA4IDE0LjM1NjMgMS45MTgzMiAxMy4zODEyIDEuMTg3NzUgMTIuMTk0OEMwLjQ1NzE3NSAxMS4wMDg0IDAuMDQ5MTI4IDkuNjUxNzkgMC4wMDQwMDAxNCA4LjI1OTIyTDAgOC4wMDAwMkwwLjAwNDAwMDE0IDcuNzQwODJDMC4wNDg4MDMyIDYuMzU5MjEgMC40NTA4NDQgNS4wMTI3OSAxLjE3MDkzIDMuODMyODFDMS44OTEwMSAyLjY1Mjg0IDIuOTA0NTYgMS42Nzk1OCA0LjExMjc2IDEuMDA3OTNDNS4zMjA5NyAwLjMzNjI3MSA2LjY4MjYgLTAuMDEwODYxOCA4LjA2NDkgMC4wMDAzNzEwMDhDOS40NDcyMSAwLjAxMTYwMzggMTAuODAzIDAuMzgwODE5IDEyLjAwMDEgMS4wNzIwMlpNOC4wMDAxIDMuMjAwMDJDNy44MDQxNSAzLjIwMDA1IDcuNjE1MDIgMy4yNzE5OSA3LjQ2ODU5IDMuNDAyMTlDNy4zMjIxNiAzLjUzMjQgNy4yMjg2MSAzLjcxMTgyIDcuMjA1NjkgMy45MDY0Mkw3LjIwMDA5IDQuMDAwMDJWOC4wMDAwMkw3LjIwNzI5IDguMTA0ODJDNy4yMjU1MyA4LjI0MzYyIDcuMjc5ODcgOC4zNzUyIDcuMzY0ODkgOC40ODY0Mkw3LjQzNDQ5IDguNTY2NDJMOS44MzQ1MiAxMC45NjY0TDkuOTA5NzIgMTEuMDMyQzEwLjA1IDExLjE0MDkgMTAuMjIyNiAxMS4yIDEwLjQwMDEgMTEuMkMxMC41Nzc3IDExLjIgMTAuNzUwMiAxMS4xNDA5IDEwLjg5MDUgMTEuMDMyTDEwLjk2NTcgMTAuOTY1NkwxMS4wMzIxIDEwLjg5MDRDMTEuMTQxIDEwLjc1MDEgMTEuMjAwMSAxMC41Nzc2IDExLjIwMDEgMTAuNEMxMS4yMDAxIDEwLjIyMjQgMTEuMTQxIDEwLjA0OTkgMTEuMDMyMSA5LjkwOTYyTDEwLjk2NTcgOS44MzQ0Mkw4LjgwMDExIDcuNjY4MDJWNC4wMDAwMkw4Ljc5NDUxIDMuOTA2NDJDOC43NzE1OCAzLjcxMTgyIDguNjc4MDMgMy41MzI0IDguNTMxNiAzLjQwMjE5QzguMzg1MTcgMy4yNzE5OSA4LjE5NjA1IDMuMjAwMDUgOC4wMDAxIDMuMjAwMDJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjAwMDEgMS4wNzIwMkMxMy4yMDY4IDEuNzY4NyAxNC4yMTA1IDIuNzY4NDQgMTQuOTEyIDMuOTcyMjZDMTUuNjEzNSA1LjE3NjA4IDE1Ljk4ODUgNi41NDIyNCAxNS45OTk3IDcuOTM1NDlDMTYuMDExIDkuMzI4NzUgMTUuNjU4MiAxMC43MDA4IDE0Ljk3NjIgMTEuOTE1OEMxNC4yOTQyIDEzLjEzMDggMTMuMzA2OCAxNC4xNDY2IDEyLjExMTUgMTQuODYyN0MxMC45MTYzIDE1LjU3ODggOS41NTQ4MSAxNS45NzAzIDguMTYxNzggMTUuOTk4NUM2Ljc2ODc1IDE2LjAyNjcgNS4zOTI1MSAxNS42OTA2IDQuMTY5MjkgMTUuMDIzNEMyLjk0NjA4IDE0LjM1NjMgMS45MTgzMiAxMy4zODEyIDEuMTg3NzUgMTIuMTk0OEMwLjQ1NzE3NSAxMS4wMDg0IDAuMDQ5MTI4IDkuNjUxNzkgMC4wMDQwMDAxNCA4LjI1OTIyTDAgOC4wMDAwMkwwLjAwNDAwMDE0IDcuNzQwODJDMC4wNDg4MDMyIDYuMzU5MjEgMC40NTA4NDQgNS4wMTI3OSAxLjE3MDkzIDMuODMyODFDMS44OTEwMSAyLjY1Mjg0IDIuOTA0NTYgMS42Nzk1OCA0LjExMjc2IDEuMDA3OTNDNS4zMjA5NyAwLjMzNjI3MSA2LjY4MjYgLTAuMDEwODYxOCA4LjA2NDkgMC4wMDAzNzEwMDhDOS40NDcyMSAwLjAxMTYwMzggMTAuODAzIDAuMzgwODE5IDEyLjAwMDEgMS4wNzIwMlpNOC4wMDAxIDMuMjAwMDJDNy44MDQxNSAzLjIwMDA1IDcuNjE1MDIgMy4yNzE5OSA3LjQ2ODU5IDMuNDAyMTlDNy4zMjIxNiAzLjUzMjQgNy4yMjg2MSAzLjcxMTgyIDcuMjA1NjkgMy45MDY0Mkw3LjIwMDA5IDQuMDAwMDJWOC4wMDAwMkw3LjIwNzI5IDguMTA0ODJDNy4yMjU1MyA4LjI0MzYyIDcuMjc5ODcgOC4zNzUyIDcuMzY0ODkgOC40ODY0Mkw3LjQzNDQ5IDguNTY2NDJMOS44MzQ1MiAxMC45NjY0TDkuOTA5NzIgMTEuMDMyQzEwLjA1IDExLjE0MDkgMTAuMjIyNiAxMS4yIDEwLjQwMDEgMTEuMkMxMC41Nzc3IDExLjIgMTAuNzUwMiAxMS4xNDA5IDEwLjg5MDUgMTEuMDMyTDEwLjk2NTcgMTAuOTY1NkwxMS4wMzIxIDEwLjg5MDRDMTEuMTQxIDEwLjc1MDEgMTEuMjAwMSAxMC41Nzc2IDExLjIwMDEgMTAuNEMxMS4yMDAxIDEwLjIyMjQgMTEuMTQxIDEwLjA0OTkgMTEuMDMyMSA5LjkwOTYyTDEwLjk2NTcgOS44MzQ0Mkw4LjgwMDExIDcuNjY4MDJWNC4wMDAwMkw4Ljc5NDUxIDMuOTA2NDJDOC43NzE1OCAzLjcxMTgyIDguNjc4MDMgMy41MzI0IDguNTMxNiAzLjQwMjE5QzguMzg1MTcgMy4yNzE5OSA4LjE5NjA1IDMuMjAwMDUgOC4wMDAxIDMuMjAwMDJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODQzNTggMS42ODkxOUMwLjg0MzU4IDEuNDY1OTcgMC45MzIyOTggMS4yNTE4OCAxLjA5MDIyIDEuMDk0MDNDMS4yNDgxNCAwLjkzNjE4OSAxLjQ2MjMyIDAuODQ3NTEyIDEuNjg1NjYgMC44NDc1MTJDMS42ODU4OSAwLjYzMjk4NSAxLjc2ODA4IDAuNDI2NjQ0IDEuOTE1NDEgMC4yNzA2NUMyLjA2Mjc1IDAuMTE0NjU2IDIuMjY0MTIgMC4wMjA3ODMxIDIuNDc4MzggMC4wMDgyMTA4NUMyLjY5MjY0IC0wLjAwNDM2MTQ0IDIuOTAzNjIgMC4wNjUzMTYyIDMuMDY4MiAwLjIwMzAwN0MzLjIzMjc5IDAuMzQwNjk4IDMuMzM4NTYgMC41MzYwMDkgMy4zNjM5MSAwLjc0OTAzNUwzLjM2OTgxIDAuODQ3NTEyQzMuNTg0NDMgMC44NDc3NSAzLjc5MDg3IDAuOTI5ODk1IDMuOTQ2OTQgMS4wNzcxNkM0LjEwMyAxLjIyNDQzIDQuMTk2OTIgMS40MjU3MSA0LjIwOTUgMS42Mzk4N0M0LjIyMjA4IDEuODU0MDMgNC4xNTIzNyAyLjA2NDkgNC4wMTQ2MSAyLjIyOTQxQzMuODc2ODYgMi4zOTM5MiAzLjY4MTQ1IDIuNDk5NjUgMy40NjgzMyAyLjUyNDk4TDMuMzY5ODEgMi41MzA4N0MzLjM2OTgxIDIuNzU0MSAzLjI4MTA5IDIuOTY4MTkgMy4xMjMxNyAzLjEyNjAzQzIuOTY1MjUgMy4yODM4OCAyLjc1MTA2IDMuMzcyNTYgMi41Mjc3MyAzLjM3MjU2QzIuMzA0NCAzLjM3MjU2IDIuMDkwMjEgMy4yODM4OCAxLjkzMjI5IDMuMTI2MDNDMS43NzQzNyAyLjk2ODE5IDEuNjg1NjYgMi43NTQxIDEuNjg1NjYgMi41MzA4N0MxLjQ2MjMyIDIuNTMwODcgMS4yNDgxNCAyLjQ0MjIgMS4wOTAyMiAyLjI4NDM1QzAuOTMyMjk4IDIuMTI2NTEgMC44NDM1OCAxLjkxMjQyIDAuODQzNTggMS42ODkxOVpNNy4xODQ0MSAwLjY0Mjk4M0M3LjIxMDYzIDAuNTM1MDg1IDcuMjU3OTYgMC40MzM0MzkgNy4zMjM2NiAwLjM0MzkwMkM3LjM4OTM1IDAuMjU0MzY1IDcuNDcyMTMgMC4xNzg3MDcgNy41NjcyMSAwLjEyMTI4NUM3LjY2MjI5IDAuMDYzODYzNiA3Ljc2NzggMC4wMjU4MTQgNy44Nzc2NiAwLjAwOTMyODRDNy45ODc1MiAtMC4wMDcxNTcyMyA4LjA5OTU1IC0wLjAwMTc1Mjk4IDguMjA3MzEgMC4wMjUyMjk3QzguMzE1MDcgMC4wNTIyMTI0IDguNDE2NDIgMC4xMDAyNCA4LjUwNTUzIDAuMTY2NTQ2QzguNTk0NjQgMC4yMzI4NTIgOC42Njk3NCAwLjMxNjEyNiA4LjcyNjUxIDAuNDExNTcxQzguNzgzMjcgMC41MDcwMTUgOC44MjA1OSAwLjYxMjc0MyA4LjgzNjI5IDAuNzIyNjY0QzguODUyIDAuODMyNTg2IDguODQ1OCAwLjk0NDUyNyA4LjgxODAzIDEuMDUyMDRMOC4zOTY5OSAyLjczNTRDOC4zNzA3NyAyLjg0MzMgOC4zMjM0NCAyLjk0NDk1IDguMjU3NzQgMy4wMzQ0OEM4LjE5MjA1IDMuMTI0MDIgOC4xMDkyNyAzLjE5OTY4IDguMDE0MTkgMy4yNTcxQzcuOTE5MTEgMy4zMTQ1MiA3LjgxMzYgMy4zNTI1NyA3LjcwMzc0IDMuMzY5MDZDNy41OTM4OSAzLjM4NTU0IDcuNDgxODUgMy4zODAxNCA3LjM3NDA5IDMuMzUzMTZDNy4yNjYzMyAzLjMyNjE3IDcuMTY0OTggMy4yNzgxNSA3LjA3NTg3IDMuMjExODRDNi45ODY3NiAzLjE0NTUzIDYuOTExNjYgMy4wNjIyNiA2Ljg1NDkgMi45NjY4MkM2Ljc5ODEzIDIuODcxMzcgNi43NjA4MSAyLjc2NTY0IDYuNzQ1MTEgMi42NTU3MkM2LjcyOTQgMi41NDU4IDYuNzM1NiAyLjQzMzg2IDYuNzYzMzcgMi4zMjYzNUw3LjE4NDQxIDAuNjQyOTgzWk0xMi42MzI2IDEuNjg5MTlDMTIuNjMyNiAxLjQ2NTk3IDEyLjcyMTQgMS4yNTE4OCAxMi44NzkzIDEuMDk0MDNDMTMuMDM3MiAwLjkzNjE4OSAxMy4yNTE0IDAuODQ3NTEyIDEzLjQ3NDcgMC44NDc1MTJDMTMuNDc0OSAwLjYzMjk4NSAxMy41NTcxIDAuNDI2NjQ0IDEzLjcwNDUgMC4yNzA2NUMxMy44NTE4IDAuMTE0NjU2IDE0LjA1MzIgMC4wMjA3ODMxIDE0LjI2NzQgMC4wMDgyMTA4NUMxNC40ODE3IC0wLjAwNDM2MTQ0IDE0LjY5MjcgMC4wNjUzMTYyIDE0Ljg1NzMgMC4yMDMwMDdDMTUuMDIxOCAwLjM0MDY5OCAxNS4xMjc2IDAuNTM2MDA5IDE1LjE1MyAwLjc0OTAzNUwxNS4xNTg5IDAuODQ3NTEyQzE1LjM3MzUgMC44NDc3NSAxNS41Nzk5IDAuOTI5ODk1IDE1LjczNiAxLjA3NzE2QzE1Ljg5MjEgMS4yMjQ0MyAxNS45ODYgMS40MjU3MSAxNS45OTg2IDEuNjM5ODdDMTYuMDExMSAxLjg1NDAzIDE1Ljk0MTQgMi4wNjQ5IDE1LjgwMzcgMi4yMjk0MUMxNS42NjU5IDIuMzkzOTIgMTUuNDcwNSAyLjQ5OTY1IDE1LjI1NzQgMi41MjQ5OEwxNS4xNTg5IDIuNTMwODdDMTUuMTU4OSAyLjc1NDEgMTUuMDcwMSAyLjk2ODE5IDE0LjkxMjIgMy4xMjYwM0MxNC43NTQzIDMuMjgzODggMTQuNTQwMSAzLjM3MjU2IDE0LjMxNjggMy4zNzI1NkMxNC4wOTM1IDMuMzcyNTYgMTMuODc5MyAzLjI4Mzg4IDEzLjcyMTMgMy4xMjYwM0MxMy41NjM0IDIuOTY4MTkgMTMuNDc0NyAyLjc1NDEgMTMuNDc0NyAyLjUzMDg3QzEzLjI1MTQgMi41MzA4NyAxMy4wMzcyIDIuNDQyMiAxMi44NzkzIDIuMjg0MzVDMTIuNzIxNCAyLjEyNjUxIDEyLjYzMjYgMS45MTI0MiAxMi42MzI2IDEuNjg5MTlaTTUuMjEzOTUgNS4zMDI1M0wxMC43MDE4IDEwLjc4ODZDMTAuNzk4IDEwLjg4NDYgMTAuODY5NSAxMS4wMDI0IDEwLjkxMDMgMTEuMTMyQzEwLjk1MSAxMS4yNjE3IDEwLjk1OTggMTEuMzk5MiAxMC45MzU4IDExLjUzMjlDMTAuOTExOCAxMS42NjY3IDEwLjg1NTcgMTEuNzkyNiAxMC43NzI1IDExLjlDMTAuNjg5MiAxMi4wMDc0IDEwLjU4MTEgMTIuMDkzIDEwLjQ1NzYgMTIuMTQ5NkwyLjM5NjM3IDE1Ljg0MjFDMi4wODM1MyAxNS45ODggMS43MzMzOSAxNi4wMzQzIDEuMzkzMzYgMTUuOTc0N0MxLjA1MzMyIDE1LjkxNTEgMC43Mzk4MTggMTUuNzUyNSAwLjQ5NTI5NiAxNS41MDlDMC4yNTA3NzUgMTUuMjY1NCAwLjA4NzA1IDE0Ljk1MjYgMC4wMjYyOTA4IDE0LjYxMjlDLTAuMDM0NDY4NCAxNC4yNzMyIDAuMDEwNjczOSAxMy45MjMxIDAuMTU1NjA1IDEzLjYwOTlMMy44NTIzMSA1LjU0NjYyQzMuOTA4OTYgNS40MjMyNCAzLjk5NDYyIDUuMzE1MzkgNC4xMDE5OCA1LjIzMjI3QzQuMjA5MzUgNS4xNDkxNCA0LjMzNTI0IDUuMDkzMiA0LjQ2ODkxIDUuMDY5MjJDNC42MDI1OSA1LjA0NTI0IDQuNzQwMDggNS4wNTM5NCA0Ljg2OTY2IDUuMDk0NTdDNC45OTkyNSA1LjEzNTE5IDUuMTE3OTIgNS4yMDY1NCA1LjIxMzk1IDUuMzAyNTNaTTExLjU0MyA0LjQ2MDg1QzExLjcwMDkgNC42MTg2OSAxMS43ODk1IDQuODMyNzQgMTEuNzg5NSA1LjA1NTkyQzExLjc4OTUgNS4yNzkxIDExLjcwMDkgNS40OTMxNSAxMS41NDMgNS42NTA5OUwxMC43MDA5IDYuNDkyNjdDMTAuNTQyMSA2LjY0NTk5IDEwLjMyOTQgNi43MzA4MiAxMC4xMDg2IDYuNzI4OTFDOS44ODc4MSA2LjcyNjk5IDkuNjc2NiA2LjYzODQ3IDkuNTIwNDggNi40ODI0MkM5LjM2NDM1IDYuMzI2MzYgOS4yNzU3OSA2LjExNTI2IDkuMjczODcgNS44OTQ1N0M5LjI3MTk1IDUuNjczODggOS4zNTY4MyA1LjQ2MTI3IDkuNTEwMjIgNS4zMDI1M0wxMC4zNTIzIDQuNDYwODVDMTAuNTEwMiA0LjMwMzA2IDEwLjcyNDQgNC4yMTQ0MiAxMC45NDc2IDQuMjE0NDJDMTEuMTcwOSA0LjIxNDQyIDExLjM4NTEgNC4zMDMwNiAxMS41NDMgNC40NjA4NVpNMTQuOTUzNCA3LjE4NTM3QzE1LjE2OTQgNy4xMzI5MiAxNS4zOTc0IDcuMTY3OTcgMTUuNTg3NyA3LjI4Mjg3QzE1Ljc3NzkgNy4zOTc3NyAxNS45MTUgNy41ODMyIDE1Ljk2OSA3Ljc5ODczQzE2LjAyMyA4LjAxNDI2IDE1Ljk4OTYgOC4yNDIzOSAxNS44NzYgOC40MzMzN0MxNS43NjI0IDguNjI0MzYgMTUuNTc3OSA4Ljc2MjcgMTUuMzYyNiA4LjgxODIzTDEzLjY3ODUgOS4yMzkwOEMxMy40NjI1IDkuMjkxNTMgMTMuMjM0NSA5LjI1NjQ4IDEzLjA0NDIgOS4xNDE1OEMxMi44NTQgOS4wMjY2OCAxMi43MTY5IDguODQxMjQgMTIuNjYyOSA4LjYyNTcyQzEyLjYwODggOC40MTAxOSAxMi42NDIzIDguMTgyMDYgMTIuNzU1OSA3Ljk5MTA3QzEyLjg2OTUgNy44MDAwOSAxMy4wNTQgNy42NjE3NCAxMy4yNjkyIDcuNjA2MjFMMTQuOTUzNCA3LjE4NTM3Wk0xMi42MzI2IDEzLjQ3MjdDMTIuNjMyNiAxMy4yNDk1IDEyLjcyMTQgMTMuMDM1NCAxMi44NzkzIDEyLjg3NzZDMTMuMDM3MiAxMi43MTk3IDEzLjI1MTQgMTIuNjMxMSAxMy40NzQ3IDEyLjYzMTFDMTMuNDc0OSAxMi40MTY1IDEzLjU1NzEgMTIuMjEwMiAxMy43MDQ1IDEyLjA1NDJDMTMuODUxOCAxMS44OTgyIDE0LjA1MzIgMTEuODA0MyAxNC4yNjc0IDExLjc5MThDMTQuNDgxNyAxMS43NzkyIDE0LjY5MjcgMTEuODQ4OSAxNC44NTczIDExLjk4NjVDMTUuMDIxOCAxMi4xMjQyIDE1LjEyNzYgMTIuMzE5NSAxNS4xNTMgMTIuNTMyNkwxNS4xNTg5IDEyLjYzMTFDMTUuMzczNSAxMi42MzEzIDE1LjU3OTkgMTIuNzEzNCAxNS43MzYgMTIuODYwN0MxNS44OTIxIDEzLjAwOCAxNS45ODYgMTMuMjA5MiAxNS45OTg2IDEzLjQyMzRDMTYuMDExMSAxMy42Mzc2IDE1Ljk0MTQgMTMuODQ4NCAxNS44MDM3IDE0LjAxM0MxNS42NjU5IDE0LjE3NzUgMTUuNDcwNSAxNC4yODMyIDE1LjI1NzQgMTQuMzA4NUwxNS4xNTg5IDE0LjMxNDRDMTUuMTU4OSAxNC41Mzc2IDE1LjA3MDEgMTQuNzUxNyAxNC45MTIyIDE0LjkwOTZDMTQuNzU0MyAxNS4wNjc0IDE0LjU0MDEgMTUuMTU2MSAxNC4zMTY4IDE1LjE1NjFDMTQuMDkzNSAxNS4xNTYxIDEzLjg3OTMgMTUuMDY3NCAxMy43MjEzIDE0LjkwOTZDMTMuNTYzNCAxNC43NTE3IDEzLjQ3NDcgMTQuNTM3NiAxMy40NzQ3IDE0LjMxNDRDMTMuMjUxNCAxNC4zMTQ0IDEzLjAzNzIgMTQuMjI1NyAxMi44NzkzIDE0LjA2NzlDMTIuNzIxNCAxMy45MSAxMi42MzI2IDEzLjY5NiAxMi42MzI2IDEzLjQ3MjdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODQzNTggMS42ODkxOUMwLjg0MzU4IDEuNDY1OTcgMC45MzIyOTggMS4yNTE4OCAxLjA5MDIyIDEuMDk0MDNDMS4yNDgxNCAwLjkzNjE4OSAxLjQ2MjMyIDAuODQ3NTEyIDEuNjg1NjYgMC44NDc1MTJDMS42ODU4OSAwLjYzMjk4NSAxLjc2ODA4IDAuNDI2NjQ0IDEuOTE1NDEgMC4yNzA2NUMyLjA2Mjc1IDAuMTE0NjU2IDIuMjY0MTIgMC4wMjA3ODMxIDIuNDc4MzggMC4wMDgyMTA4NUMyLjY5MjY0IC0wLjAwNDM2MTQ0IDIuOTAzNjIgMC4wNjUzMTYyIDMuMDY4MiAwLjIwMzAwN0MzLjIzMjc5IDAuMzQwNjk4IDMuMzM4NTYgMC41MzYwMDkgMy4zNjM5MSAwLjc0OTAzNUwzLjM2OTgxIDAuODQ3NTEyQzMuNTg0NDMgMC44NDc3NSAzLjc5MDg3IDAuOTI5ODk1IDMuOTQ2OTQgMS4wNzcxNkM0LjEwMyAxLjIyNDQzIDQuMTk2OTIgMS40MjU3MSA0LjIwOTUgMS42Mzk4N0M0LjIyMjA4IDEuODU0MDMgNC4xNTIzNyAyLjA2NDkgNC4wMTQ2MSAyLjIyOTQxQzMuODc2ODYgMi4zOTM5MiAzLjY4MTQ1IDIuNDk5NjUgMy40NjgzMyAyLjUyNDk4TDMuMzY5ODEgMi41MzA4N0MzLjM2OTgxIDIuNzU0MSAzLjI4MTA5IDIuOTY4MTkgMy4xMjMxNyAzLjEyNjAzQzIuOTY1MjUgMy4yODM4OCAyLjc1MTA2IDMuMzcyNTYgMi41Mjc3MyAzLjM3MjU2QzIuMzA0NCAzLjM3MjU2IDIuMDkwMjEgMy4yODM4OCAxLjkzMjI5IDMuMTI2MDNDMS43NzQzNyAyLjk2ODE5IDEuNjg1NjYgMi43NTQxIDEuNjg1NjYgMi41MzA4N0MxLjQ2MjMyIDIuNTMwODcgMS4yNDgxNCAyLjQ0MjIgMS4wOTAyMiAyLjI4NDM1QzAuOTMyMjk4IDIuMTI2NTEgMC44NDM1OCAxLjkxMjQyIDAuODQzNTggMS42ODkxOVpNNy4xODQ0MSAwLjY0Mjk4M0M3LjIxMDYzIDAuNTM1MDg1IDcuMjU3OTYgMC40MzM0MzkgNy4zMjM2NiAwLjM0MzkwMkM3LjM4OTM1IDAuMjU0MzY1IDcuNDcyMTMgMC4xNzg3MDcgNy41NjcyMSAwLjEyMTI4NUM3LjY2MjI5IDAuMDYzODYzNiA3Ljc2NzggMC4wMjU4MTQgNy44Nzc2NiAwLjAwOTMyODRDNy45ODc1MiAtMC4wMDcxNTcyMyA4LjA5OTU1IC0wLjAwMTc1Mjk4IDguMjA3MzEgMC4wMjUyMjk3QzguMzE1MDcgMC4wNTIyMTI0IDguNDE2NDIgMC4xMDAyNCA4LjUwNTUzIDAuMTY2NTQ2QzguNTk0NjQgMC4yMzI4NTIgOC42Njk3NCAwLjMxNjEyNiA4LjcyNjUxIDAuNDExNTcxQzguNzgzMjcgMC41MDcwMTUgOC44MjA1OSAwLjYxMjc0MyA4LjgzNjI5IDAuNzIyNjY0QzguODUyIDAuODMyNTg2IDguODQ1OCAwLjk0NDUyNyA4LjgxODAzIDEuMDUyMDRMOC4zOTY5OSAyLjczNTRDOC4zNzA3NyAyLjg0MzMgOC4zMjM0NCAyLjk0NDk1IDguMjU3NzQgMy4wMzQ0OEM4LjE5MjA1IDMuMTI0MDIgOC4xMDkyNyAzLjE5OTY4IDguMDE0MTkgMy4yNTcxQzcuOTE5MTEgMy4zMTQ1MiA3LjgxMzYgMy4zNTI1NyA3LjcwMzc0IDMuMzY5MDZDNy41OTM4OSAzLjM4NTU0IDcuNDgxODUgMy4zODAxNCA3LjM3NDA5IDMuMzUzMTZDNy4yNjYzMyAzLjMyNjE3IDcuMTY0OTggMy4yNzgxNSA3LjA3NTg3IDMuMjExODRDNi45ODY3NiAzLjE0NTUzIDYuOTExNjYgMy4wNjIyNiA2Ljg1NDkgMi45NjY4MkM2Ljc5ODEzIDIuODcxMzcgNi43NjA4MSAyLjc2NTY0IDYuNzQ1MTEgMi42NTU3MkM2LjcyOTQgMi41NDU4IDYuNzM1NiAyLjQzMzg2IDYuNzYzMzcgMi4zMjYzNUw3LjE4NDQxIDAuNjQyOTgzWk0xMi42MzI2IDEuNjg5MTlDMTIuNjMyNiAxLjQ2NTk3IDEyLjcyMTQgMS4yNTE4OCAxMi44NzkzIDEuMDk0MDNDMTMuMDM3MiAwLjkzNjE4OSAxMy4yNTE0IDAuODQ3NTEyIDEzLjQ3NDcgMC44NDc1MTJDMTMuNDc0OSAwLjYzMjk4NSAxMy41NTcxIDAuNDI2NjQ0IDEzLjcwNDUgMC4yNzA2NUMxMy44NTE4IDAuMTE0NjU2IDE0LjA1MzIgMC4wMjA3ODMxIDE0LjI2NzQgMC4wMDgyMTA4NUMxNC40ODE3IC0wLjAwNDM2MTQ0IDE0LjY5MjcgMC4wNjUzMTYyIDE0Ljg1NzMgMC4yMDMwMDdDMTUuMDIxOCAwLjM0MDY5OCAxNS4xMjc2IDAuNTM2MDA5IDE1LjE1MyAwLjc0OTAzNUwxNS4xNTg5IDAuODQ3NTEyQzE1LjM3MzUgMC44NDc3NSAxNS41Nzk5IDAuOTI5ODk1IDE1LjczNiAxLjA3NzE2QzE1Ljg5MjEgMS4yMjQ0MyAxNS45ODYgMS40MjU3MSAxNS45OTg2IDEuNjM5ODdDMTYuMDExMSAxLjg1NDAzIDE1Ljk0MTQgMi4wNjQ5IDE1LjgwMzcgMi4yMjk0MUMxNS42NjU5IDIuMzkzOTIgMTUuNDcwNSAyLjQ5OTY1IDE1LjI1NzQgMi41MjQ5OEwxNS4xNTg5IDIuNTMwODdDMTUuMTU4OSAyLjc1NDEgMTUuMDcwMSAyLjk2ODE5IDE0LjkxMjIgMy4xMjYwM0MxNC43NTQzIDMuMjgzODggMTQuNTQwMSAzLjM3MjU2IDE0LjMxNjggMy4zNzI1NkMxNC4wOTM1IDMuMzcyNTYgMTMuODc5MyAzLjI4Mzg4IDEzLjcyMTMgMy4xMjYwM0MxMy41NjM0IDIuOTY4MTkgMTMuNDc0NyAyLjc1NDEgMTMuNDc0NyAyLjUzMDg3QzEzLjI1MTQgMi41MzA4NyAxMy4wMzcyIDIuNDQyMiAxMi44NzkzIDIuMjg0MzVDMTIuNzIxNCAyLjEyNjUxIDEyLjYzMjYgMS45MTI0MiAxMi42MzI2IDEuNjg5MTlaTTUuMjEzOTUgNS4zMDI1M0wxMC43MDE4IDEwLjc4ODZDMTAuNzk4IDEwLjg4NDYgMTAuODY5NSAxMS4wMDI0IDEwLjkxMDMgMTEuMTMyQzEwLjk1MSAxMS4yNjE3IDEwLjk1OTggMTEuMzk5MiAxMC45MzU4IDExLjUzMjlDMTAuOTExOCAxMS42NjY3IDEwLjg1NTcgMTEuNzkyNiAxMC43NzI1IDExLjlDMTAuNjg5MiAxMi4wMDc0IDEwLjU4MTEgMTIuMDkzIDEwLjQ1NzYgMTIuMTQ5NkwyLjM5NjM3IDE1Ljg0MjFDMi4wODM1MyAxNS45ODggMS43MzMzOSAxNi4wMzQzIDEuMzkzMzYgMTUuOTc0N0MxLjA1MzMyIDE1LjkxNTEgMC43Mzk4MTggMTUuNzUyNSAwLjQ5NTI5NiAxNS41MDlDMC4yNTA3NzUgMTUuMjY1NCAwLjA4NzA1IDE0Ljk1MjYgMC4wMjYyOTA4IDE0LjYxMjlDLTAuMDM0NDY4NCAxNC4yNzMyIDAuMDEwNjczOSAxMy45MjMxIDAuMTU1NjA1IDEzLjYwOTlMMy44NTIzMSA1LjU0NjYyQzMuOTA4OTYgNS40MjMyNCAzLjk5NDYyIDUuMzE1MzkgNC4xMDE5OCA1LjIzMjI3QzQuMjA5MzUgNS4xNDkxNCA0LjMzNTI0IDUuMDkzMiA0LjQ2ODkxIDUuMDY5MjJDNC42MDI1OSA1LjA0NTI0IDQuNzQwMDggNS4wNTM5NCA0Ljg2OTY2IDUuMDk0NTdDNC45OTkyNSA1LjEzNTE5IDUuMTE3OTIgNS4yMDY1NCA1LjIxMzk1IDUuMzAyNTNaTTExLjU0MyA0LjQ2MDg1QzExLjcwMDkgNC42MTg2OSAxMS43ODk1IDQuODMyNzQgMTEuNzg5NSA1LjA1NTkyQzExLjc4OTUgNS4yNzkxIDExLjcwMDkgNS40OTMxNSAxMS41NDMgNS42NTA5OUwxMC43MDA5IDYuNDkyNjdDMTAuNTQyMSA2LjY0NTk5IDEwLjMyOTQgNi43MzA4MiAxMC4xMDg2IDYuNzI4OTFDOS44ODc4MSA2LjcyNjk5IDkuNjc2NiA2LjYzODQ3IDkuNTIwNDggNi40ODI0MkM5LjM2NDM1IDYuMzI2MzYgOS4yNzU3OSA2LjExNTI2IDkuMjczODcgNS44OTQ1N0M5LjI3MTk1IDUuNjczODggOS4zNTY4MyA1LjQ2MTI3IDkuNTEwMjIgNS4zMDI1M0wxMC4zNTIzIDQuNDYwODVDMTAuNTEwMiA0LjMwMzA2IDEwLjcyNDQgNC4yMTQ0MiAxMC45NDc2IDQuMjE0NDJDMTEuMTcwOSA0LjIxNDQyIDExLjM4NTEgNC4zMDMwNiAxMS41NDMgNC40NjA4NVpNMTQuOTUzNCA3LjE4NTM3QzE1LjE2OTQgNy4xMzI5MiAxNS4zOTc0IDcuMTY3OTcgMTUuNTg3NyA3LjI4Mjg3QzE1Ljc3NzkgNy4zOTc3NyAxNS45MTUgNy41ODMyIDE1Ljk2OSA3Ljc5ODczQzE2LjAyMyA4LjAxNDI2IDE1Ljk4OTYgOC4yNDIzOSAxNS44NzYgOC40MzMzN0MxNS43NjI0IDguNjI0MzYgMTUuNTc3OSA4Ljc2MjcgMTUuMzYyNiA4LjgxODIzTDEzLjY3ODUgOS4yMzkwOEMxMy40NjI1IDkuMjkxNTMgMTMuMjM0NSA5LjI1NjQ4IDEzLjA0NDIgOS4xNDE1OEMxMi44NTQgOS4wMjY2OCAxMi43MTY5IDguODQxMjQgMTIuNjYyOSA4LjYyNTcyQzEyLjYwODggOC40MTAxOSAxMi42NDIzIDguMTgyMDYgMTIuNzU1OSA3Ljk5MTA3QzEyLjg2OTUgNy44MDAwOSAxMy4wNTQgNy42NjE3NCAxMy4yNjkyIDcuNjA2MjFMMTQuOTUzNCA3LjE4NTM3Wk0xMi42MzI2IDEzLjQ3MjdDMTIuNjMyNiAxMy4yNDk1IDEyLjcyMTQgMTMuMDM1NCAxMi44NzkzIDEyLjg3NzZDMTMuMDM3MiAxMi43MTk3IDEzLjI1MTQgMTIuNjMxMSAxMy40NzQ3IDEyLjYzMTFDMTMuNDc0OSAxMi40MTY1IDEzLjU1NzEgMTIuMjEwMiAxMy43MDQ1IDEyLjA1NDJDMTMuODUxOCAxMS44OTgyIDE0LjA1MzIgMTEuODA0MyAxNC4yNjc0IDExLjc5MThDMTQuNDgxNyAxMS43NzkyIDE0LjY5MjcgMTEuODQ4OSAxNC44NTczIDExLjk4NjVDMTUuMDIxOCAxMi4xMjQyIDE1LjEyNzYgMTIuMzE5NSAxNS4xNTMgMTIuNTMyNkwxNS4xNTg5IDEyLjYzMTFDMTUuMzczNSAxMi42MzEzIDE1LjU3OTkgMTIuNzEzNCAxNS43MzYgMTIuODYwN0MxNS44OTIxIDEzLjAwOCAxNS45ODYgMTMuMjA5MiAxNS45OTg2IDEzLjQyMzRDMTYuMDExMSAxMy42Mzc2IDE1Ljk0MTQgMTMuODQ4NCAxNS44MDM3IDE0LjAxM0MxNS42NjU5IDE0LjE3NzUgMTUuNDcwNSAxNC4yODMyIDE1LjI1NzQgMTQuMzA4NUwxNS4xNTg5IDE0LjMxNDRDMTUuMTU4OSAxNC41Mzc2IDE1LjA3MDEgMTQuNzUxNyAxNC45MTIyIDE0LjkwOTZDMTQuNzU0MyAxNS4wNjc0IDE0LjU0MDEgMTUuMTU2MSAxNC4zMTY4IDE1LjE1NjFDMTQuMDkzNSAxNS4xNTYxIDEzLjg3OTMgMTUuMDY3NCAxMy43MjEzIDE0LjkwOTZDMTMuNTYzNCAxNC43NTE3IDEzLjQ3NDcgMTQuNTM3NiAxMy40NzQ3IDE0LjMxNDRDMTMuMjUxNCAxNC4zMTQ0IDEzLjAzNzIgMTQuMjI1NyAxMi44NzkzIDE0LjA2NzlDMTIuNzIxNCAxMy45MSAxMi42MzI2IDEzLjY5NiAxMi42MzI2IDEzLjQ3MjdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk01LjAzNDQgNi42MzQ0QzUuMTcyMTUgNi40OTY2NiA1LjM1NTQzIDYuNDEzOTEgNS41NDk4NiA2LjQwMTY5QzUuNzQ0MjggNi4zODk0NiA1LjkzNjQ4IDYuNDQ4NiA2LjA5MDQgNi41NjhMNi4xNjU2IDYuNjM0NEw4IDguNDY4TDkuODM0NCA2LjYzNDRDOS45NzIxNSA2LjQ5NjY2IDEwLjE1NTQgNi40MTM5MSAxMC4zNDk5IDYuNDAxNjlDMTAuNTQ0MyA2LjM4OTQ2IDEwLjczNjUgNi40NDg2IDEwLjg5MDQgNi41NjhMMTAuOTY1NiA2LjYzNDRDMTEuMTAzMyA2Ljc3MjE1IDExLjE4NjEgNi45NTU0MyAxMS4xOTgzIDcuMTQ5ODZDMTEuMjEwNSA3LjM0NDI4IDExLjE1MTQgNy41MzY0OCAxMS4wMzIgNy42OTA0TDEwLjk2NTYgNy43NjU2TDguNTY1NiAxMC4xNjU2QzguNDI3ODUgMTAuMzAzMyA4LjI0NDU3IDEwLjM4NjEgOC4wNTAxNSAxMC4zOTgzQzcuODU1NzIgMTAuNDEwNSA3LjY2MzUyIDEwLjM1MTQgNy41MDk2IDEwLjIzMkw3LjQzNDQgMTAuMTY1Nkw1LjAzNDQgNy43NjU2QzQuODg0NDIgNy42MTU1OCA0LjgwMDE3IDcuNDEyMTMgNC44MDAxNyA3LjJDNC44MDAxNyA2Ljk4Nzg3IDQuODg0NDIgNi43ODQ0MiA1LjAzNDQgNi42MzQ0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk01LjAzNDQgNi42MzQ0QzUuMTcyMTUgNi40OTY2NiA1LjM1NTQzIDYuNDEzOTEgNS41NDk4NiA2LjQwMTY5QzUuNzQ0MjggNi4zODk0NiA1LjkzNjQ4IDYuNDQ4NiA2LjA5MDQgNi41NjhMNi4xNjU2IDYuNjM0NEw4IDguNDY4TDkuODM0NCA2LjYzNDRDOS45NzIxNSA2LjQ5NjY2IDEwLjE1NTQgNi40MTM5MSAxMC4zNDk5IDYuNDAxNjlDMTAuNTQ0MyA2LjM4OTQ2IDEwLjczNjUgNi40NDg2IDEwLjg5MDQgNi41NjhMMTAuOTY1NiA2LjYzNDRDMTEuMTAzMyA2Ljc3MjE1IDExLjE4NjEgNi45NTU0MyAxMS4xOTgzIDcuMTQ5ODZDMTEuMjEwNSA3LjM0NDI4IDExLjE1MTQgNy41MzY0OCAxMS4wMzIgNy42OTA0TDEwLjk2NTYgNy43NjU2TDguNTY1NiAxMC4xNjU2QzguNDI3ODUgMTAuMzAzMyA4LjI0NDU3IDEwLjM4NjEgOC4wNTAxNSAxMC4zOTgzQzcuODU1NzIgMTAuNDEwNSA3LjY2MzUyIDEwLjM1MTQgNy41MDk2IDEwLjIzMkw3LjQzNDQgMTAuMTY1Nkw1LjAzNDQgNy43NjU2QzQuODg0NDIgNy42MTU1OCA0LjgwMDE3IDcuNDEyMTMgNC44MDAxNyA3LjJDNC44MDAxNyA2Ljk4Nzg3IDQuODg0NDIgNi43ODQ0MiA1LjAzNDQgNi42MzQ0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNSAwLjc2MzE0MkM0LjUgMC4wOTI3MTk4IDUuMjkyIC0wLjI1MDg3MSA1Ljc2OSAwLjIxMzA5MUM3LjIzNzUgMS42NDIzMSA4LjA5MSA0Ljc4MDM0IDcuMDgxNSA3LjE2MTFMNy4wMjE1IDcuMjkzNjZMNy4wMzA1IDcuMjk1OTRDNy40OTkyNSA3LjM5NzI3IDcuOTMyNzUgNi45NjgzNSA4Ljc1Nzc1IDUuNjQwNDZMOC44NjI3NSA1LjQ2OTgxQzguOTIzNiA1LjM3MDMgOS4wMDYyMyA1LjI4NjQgOS4xMDQyIDUuMjI0NkM5LjIwMjE3IDUuMTYyODEgOS4zMTI4NCA1LjEyNDggOS40Mjc2MyA1LjExMzUyQzkuNTQyNDEgNS4xMDIyNSA5LjY1ODIxIDUuMTE4MDEgOS43NjYwMiA1LjE1OTU5QzkuODczODMgNS4yMDExNiA5Ljk3MDc1IDUuMjY3NDMgMTAuMDQ5MyA1LjM1MzI0QzExLjA0OTggNi40NDY0OSAxMiA4LjY4NzgzIDEyIDEwLjEzQzEyIDEzLjM3OTMgOS4zMDY3NSAxNiA2IDE2QzIuNjkzMjUgMTYgMCAxMy4zNzkzIDAgMTAuMTI5MkMwIDguNDEzNTcgMC43NjY1IDYuNTM2MzkgMS45NzQgNS4zMjg4N0wyLjQyNzc1IDQuODgwMTRDMi42MDg1IDQuNzAwMzUgMi43NTMyNSA0LjU1MjU1IDIuODkxMjUgNC40MDQ3NUMzLjk2Mzc1IDMuMjUyODQgNC41IDIuMTc3MTIgNC41IDAuNzYzMTQyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNSAwLjc2MzE0MkM0LjUgMC4wOTI3MTk4IDUuMjkyIC0wLjI1MDg3MSA1Ljc2OSAwLjIxMzA5MUM3LjIzNzUgMS42NDIzMSA4LjA5MSA0Ljc4MDM0IDcuMDgxNSA3LjE2MTFMNy4wMjE1IDcuMjkzNjZMNy4wMzA1IDcuMjk1OTRDNy40OTkyNSA3LjM5NzI3IDcuOTMyNzUgNi45NjgzNSA4Ljc1Nzc1IDUuNjQwNDZMOC44NjI3NSA1LjQ2OTgxQzguOTIzNiA1LjM3MDMgOS4wMDYyMyA1LjI4NjQgOS4xMDQyIDUuMjI0NkM5LjIwMjE3IDUuMTYyODEgOS4zMTI4NCA1LjEyNDggOS40Mjc2MyA1LjExMzUyQzkuNTQyNDEgNS4xMDIyNSA5LjY1ODIxIDUuMTE4MDEgOS43NjYwMiA1LjE1OTU5QzkuODczODMgNS4yMDExNiA5Ljk3MDc1IDUuMjY3NDMgMTAuMDQ5MyA1LjM1MzI0QzExLjA0OTggNi40NDY0OSAxMiA4LjY4NzgzIDEyIDEwLjEzQzEyIDEzLjM3OTMgOS4zMDY3NSAxNiA2IDE2QzIuNjkzMjUgMTYgMCAxMy4zNzkzIDAgMTAuMTI5MkMwIDguNDEzNTcgMC43NjY1IDYuNTM2MzkgMS45NzQgNS4zMjg4N0wyLjQyNzc1IDQuODgwMTRDMi42MDg1IDQuNzAwMzUgMi43NTMyNSA0LjU1MjU1IDIuODkxMjUgNC40MDQ3NUMzLjk2Mzc1IDMuMjUyODQgNC41IDIuMTc3MTIgNC41IDAuNzYzMTQyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjg1MTcgMC40NDE1NTJDNy4zNTE2OCAwLjMwODg0NSA3LjQ1MzggMC4xOTcyNiA3LjU4MDEgMC4xMTkyOEM3LjcwNjQgMC4wNDEzMDAxIDcuODUxOTEgMCA4LjAwMDM0IDBDOC4xNDg3OCAwIDguMjk0MjggMC4wNDEzMDAxIDguNDIwNTkgMC4xMTkyOEM4LjU0Njg5IDAuMTk3MjYgOC42NDkwMSAwLjMwODg0NSA4LjcxNTUxIDAuNDQxNTUyTDEwLjk5NjIgNS4wMDI0MUwxNS41NTc2IDcuMjg0MDRDMTUuNjgyOCA3LjM0NjYgMTUuNzg5NCA3LjQ0MDkxIDE1Ljg2NjcgNy41NTc1NUMxNS45NDQxIDcuNjc0MTkgMTUuOTg5NSA3LjgwOTA4IDE1Ljk5ODQgNy45NDg3NUMxNi4wMDczIDguMDg4NDEgMTUuOTc5NCA4LjIyNzk3IDE1LjkxNzUgOC4zNTM0OUMxNS44NTU2IDguNDc5MDEgMTUuNzYxOSA4LjU4NjEgMTUuNjQ1NiA4LjY2NDA2TDE1LjU1NzYgOC43MTQ0NkwxMC45OTYyIDEwLjk5NTNMOC43MTYzMiAxNS41NTY5QzguNjUzODEgMTUuNjgyMyA4LjU1OTQ5IDE1Ljc4OTEgOC40NDI3OCAxNS44NjY1QzguMzI2MDcgMTUuOTQ0IDguMTkxMDYgMTUuOTg5NSA4LjA1MTI3IDE1Ljk5ODRDNy45MTE0NyAxNi4wMDczIDcuNzcxNzkgMTUuOTc5MyA3LjY0NjE5IDE1LjkxNzNDNy41MjA1OSAxNS44NTUzIDcuNDEzNDggMTUuNzYxNCA3LjMzNTU3IDE1LjY0NDlMNy4yODUxNyAxNS41NTY5TDUuMDAzNjYgMTAuOTk1M0wwLjQ0MzAzNiA4LjcxNTI2QzAuMzE3NjczIDguNjUyNzUgMC4yMTA5MiA4LjU1ODQyIDAuMTMzNDU1IDguNDQxNzFDMC4wNTU5OTAxIDguMzI0OTkgMC4wMTA1MjkyIDguMTg5OTggMC4wMDE2MTk4OCA4LjA1MDE4Qy0wLjAwNzI4OTQ0IDcuOTEwMzcgMC4wMjA2NjUyIDcuNzcwNjggMC4wODI2ODc0IDcuNjQ1MDhDMC4xNDQ3MSA3LjUxOTQ3IDAuMjM4NjI1IDcuNDEyMzUgMC4zNTUwMzkgNy4zMzQ0NEwwLjQ0MzAzNiA3LjI4NDA0TDUuMDAzNjYgNS4wMDI0MUw3LjI4NTE3IDAuNDQxNTUyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjg1MTcgMC40NDE1NTJDNy4zNTE2OCAwLjMwODg0NSA3LjQ1MzggMC4xOTcyNiA3LjU4MDEgMC4xMTkyOEM3LjcwNjQgMC4wNDEzMDAxIDcuODUxOTEgMCA4LjAwMDM0IDBDOC4xNDg3OCAwIDguMjk0MjggMC4wNDEzMDAxIDguNDIwNTkgMC4xMTkyOEM4LjU0Njg5IDAuMTk3MjYgOC42NDkwMSAwLjMwODg0NSA4LjcxNTUxIDAuNDQxNTUyTDEwLjk5NjIgNS4wMDI0MUwxNS41NTc2IDcuMjg0MDRDMTUuNjgyOCA3LjM0NjYgMTUuNzg5NCA3LjQ0MDkxIDE1Ljg2NjcgNy41NTc1NUMxNS45NDQxIDcuNjc0MTkgMTUuOTg5NSA3LjgwOTA4IDE1Ljk5ODQgNy45NDg3NUMxNi4wMDczIDguMDg4NDEgMTUuOTc5NCA4LjIyNzk3IDE1LjkxNzUgOC4zNTM0OUMxNS44NTU2IDguNDc5MDEgMTUuNzYxOSA4LjU4NjEgMTUuNjQ1NiA4LjY2NDA2TDE1LjU1NzYgOC43MTQ0NkwxMC45OTYyIDEwLjk5NTNMOC43MTYzMiAxNS41NTY5QzguNjUzODEgMTUuNjgyMyA4LjU1OTQ5IDE1Ljc4OTEgOC40NDI3OCAxNS44NjY1QzguMzI2MDcgMTUuOTQ0IDguMTkxMDYgMTUuOTg5NSA4LjA1MTI3IDE1Ljk5ODRDNy45MTE0NyAxNi4wMDczIDcuNzcxNzkgMTUuOTc5MyA3LjY0NjE5IDE1LjkxNzNDNy41MjA1OSAxNS44NTUzIDcuNDEzNDggMTUuNzYxNCA3LjMzNTU3IDE1LjY0NDlMNy4yODUxNyAxNS41NTY5TDUuMDAzNjYgMTAuOTk1M0wwLjQ0MzAzNiA4LjcxNTI2QzAuMzE3NjczIDguNjUyNzUgMC4yMTA5MiA4LjU1ODQyIDAuMTMzNDU1IDguNDQxNzFDMC4wNTU5OTAxIDguMzI0OTkgMC4wMTA1MjkyIDguMTg5OTggMC4wMDE2MTk4OCA4LjA1MDE4Qy0wLjAwNzI4OTQ0IDcuOTEwMzcgMC4wMjA2NjUyIDcuNzcwNjggMC4wODI2ODc0IDcuNjQ1MDhDMC4xNDQ3MSA3LjUxOTQ3IDAuMjM4NjI1IDcuNDEyMzUgMC4zNTUwMzkgNy4zMzQ0NEwwLjQ0MzAzNiA3LjI4NDA0TDUuMDAzNjYgNS4wMDI0MUw3LjI4NTE3IDAuNDQxNTUyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMiA5LjYwMDE5VjE2SDRDMy4zNjM0OCAxNiAyLjc1MzAzIDE1Ljc0NzIgMi4zMDI5NCAxNS4yOTcxQzEuODUyODYgMTQuODQ3IDEuNiAxNC4yMzY2IDEuNiAxMy42MDAxVjEwLjQwMDJDMS42IDEwLjE4OCAxLjY4NDI5IDkuOTg0NTIgMS44MzQzMSA5LjgzNDVDMS45ODQzNCA5LjY4NDQ3IDIuMTg3ODMgOS42MDAxOSAyLjQgOS42MDAxOUg3LjJaTTEzLjYgOS42MDAxOUMxMy44MTIyIDkuNjAwMTkgMTQuMDE1NyA5LjY4NDQ3IDE0LjE2NTcgOS44MzQ1QzE0LjMxNTcgOS45ODQ1MiAxNC40IDEwLjE4OCAxNC40IDEwLjQwMDJWMTMuNjAwMUMxNC40IDE0LjIzNjYgMTQuMTQ3MSAxNC44NDcgMTMuNjk3MSAxNS4yOTcxQzEzLjI0NyAxNS43NDcyIDEyLjYzNjUgMTYgMTIgMTZIOC44VjkuNjAwMTlIMTMuNlpNMTEuNiAwLjAwMDQ2OTUwMkMxMi4wNzI0IDAuMDAwMzcyMDAzIDEyLjUzNzIgMC4xMTk3OTkgMTIuOTUxIDAuMzQ3NjM0QzEzLjM2NDggMC41NzU0NjggMTMuNzE0MyAwLjkwNDMwMiAxMy45NjY5IDEuMzAzNTJDMTQuMjE5NCAxLjcwMjc1IDE0LjM2NjggMi4xNTkzOCAxNC4zOTU0IDIuNjMwOTFDMTQuNDI0IDMuMTAyNDQgMTQuMzMyOSAzLjU3MzU0IDE0LjEzMDQgNC4wMDAzNUgxNC40QzE0LjgyNDMgNC4wMDAzNSAxNS4yMzEzIDQuMTY4OTIgMTUuNTMxNCA0LjQ2ODk3QzE1LjgzMTQgNC43NjkwMiAxNiA1LjE3NTk3IDE2IDUuNjAwMzFWNi40MDAyOEMxNiA2LjgyNDYyIDE1LjgzMTQgNy4yMzE1NyAxNS41MzE0IDcuNTMxNjJDMTUuMjMxMyA3LjgzMTY3IDE0LjgyNDMgOC4wMDAyMyAxNC40IDguMDAwMjNIOC44VjQuMDAwMzVINy4yVjguMDAwMjNIMS42QzEuMTc1NjUgOC4wMDAyMyAwLjc2ODY4NyA3LjgzMTY3IDAuNDY4NjI5IDcuNTMxNjJDMC4xNjg1NzEgNy4yMzE1NyAwIDYuODI0NjIgMCA2LjQwMDI4VjUuNjAwMzFDMCA1LjE3NTk3IDAuMTY4NTcxIDQuNzY5MDIgMC40Njg2MjkgNC40Njg5N0MwLjc2ODY4NyA0LjE2ODkyIDEuMTc1NjUgNC4wMDAzNSAxLjYgNC4wMDAzNUgxLjg2OTZDMS42OTE1NSAzLjYyNTQxIDEuNTk5NDQgMy4yMTU0NSAxLjYgMi44MDAzOUMxLjYgMS4yNTQwMyAyLjg1MzYgMC4wMDA0Njk1MDIgNC4zODY0IDAuMDAwNDY5NTAyQzUuNzkwNCAtMC4wMjM1Mjk4IDcuMDM2IDAuODc0MDQ0IDcuODkxMiAyLjM0NzZMOCAyLjU0MkM4LjgyNjQgMS4wMTA4NCAxMC4wNDggMC4wNTA4NjgxIDExLjQzMjggMC4wMDIwNjk1M0wxMS42IDAuMDAwNDY5NTAyWk00LjQgMS42MDA0MkM0LjA4MTc0IDEuNjAwNDIgMy43NzY1MiAxLjcyNjg1IDMuNTUxNDcgMS45NTE4OEMzLjMyNjQzIDIuMTc2OTIgMy4yIDIuNDgyMTQgMy4yIDIuODAwMzlDMy4yIDMuMTE4NjQgMy4zMjY0MyAzLjQyMzg1IDMuNTUxNDcgMy42NDg4OUMzLjc3NjUyIDMuODczOTMgNC4wODE3NCA0LjAwMDM1IDQuNCA0LjAwMDM1SDYuOTE0NEM2LjMyMTYgMi40NzY0IDUuMzU1MiAxLjU4NDQyIDQuNCAxLjYwMDQyWk0xMS41ODY0IDEuNjAwNDJDMTAuNjQyNCAxLjU4NDQyIDkuNjc4NCAyLjQ3NzIgOS4wODU2IDQuMDAwMzVIMTEuNkMxMS45MTgzIDMuOTk4NTUgMTIuMjIyOCAzLjg3MDM5IDEyLjQ0NjUgMy42NDQwOEMxMi42NzAzIDMuNDE3NzcgMTIuNzk1IDMuMTExODQgMTIuNzkzMiAyLjc5MzU5QzEyLjc5MTQgMi40NzUzNCAxMi42NjMyIDIuMTcwODQgMTIuNDM2OSAxLjk0NzA4QzEyLjIxMDYgMS43MjMzMSAxMS45MDQ3IDEuNTk4NjIgMTEuNTg2NCAxLjYwMDQyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMiA5LjYwMDE5VjE2SDRDMy4zNjM0OCAxNiAyLjc1MzAzIDE1Ljc0NzIgMi4zMDI5NCAxNS4yOTcxQzEuODUyODYgMTQuODQ3IDEuNiAxNC4yMzY2IDEuNiAxMy42MDAxVjEwLjQwMDJDMS42IDEwLjE4OCAxLjY4NDI5IDkuOTg0NTIgMS44MzQzMSA5LjgzNDVDMS45ODQzNCA5LjY4NDQ3IDIuMTg3ODMgOS42MDAxOSAyLjQgOS42MDAxOUg3LjJaTTEzLjYgOS42MDAxOUMxMy44MTIyIDkuNjAwMTkgMTQuMDE1NyA5LjY4NDQ3IDE0LjE2NTcgOS44MzQ1QzE0LjMxNTcgOS45ODQ1MiAxNC40IDEwLjE4OCAxNC40IDEwLjQwMDJWMTMuNjAwMUMxNC40IDE0LjIzNjYgMTQuMTQ3MSAxNC44NDcgMTMuNjk3MSAxNS4yOTcxQzEzLjI0NyAxNS43NDcyIDEyLjYzNjUgMTYgMTIgMTZIOC44VjkuNjAwMTlIMTMuNlpNMTEuNiAwLjAwMDQ2OTUwMkMxMi4wNzI0IDAuMDAwMzcyMDAzIDEyLjUzNzIgMC4xMTk3OTkgMTIuOTUxIDAuMzQ3NjM0QzEzLjM2NDggMC41NzU0NjggMTMuNzE0MyAwLjkwNDMwMiAxMy45NjY5IDEuMzAzNTJDMTQuMjE5NCAxLjcwMjc1IDE0LjM2NjggMi4xNTkzOCAxNC4zOTU0IDIuNjMwOTFDMTQuNDI0IDMuMTAyNDQgMTQuMzMyOSAzLjU3MzU0IDE0LjEzMDQgNC4wMDAzNUgxNC40QzE0LjgyNDMgNC4wMDAzNSAxNS4yMzEzIDQuMTY4OTIgMTUuNTMxNCA0LjQ2ODk3QzE1LjgzMTQgNC43NjkwMiAxNiA1LjE3NTk3IDE2IDUuNjAwMzFWNi40MDAyOEMxNiA2LjgyNDYyIDE1LjgzMTQgNy4yMzE1NyAxNS41MzE0IDcuNTMxNjJDMTUuMjMxMyA3LjgzMTY3IDE0LjgyNDMgOC4wMDAyMyAxNC40IDguMDAwMjNIOC44VjQuMDAwMzVINy4yVjguMDAwMjNIMS42QzEuMTc1NjUgOC4wMDAyMyAwLjc2ODY4NyA3LjgzMTY3IDAuNDY4NjI5IDcuNTMxNjJDMC4xNjg1NzEgNy4yMzE1NyAwIDYuODI0NjIgMCA2LjQwMDI4VjUuNjAwMzFDMCA1LjE3NTk3IDAuMTY4NTcxIDQuNzY5MDIgMC40Njg2MjkgNC40Njg5N0MwLjc2ODY4NyA0LjE2ODkyIDEuMTc1NjUgNC4wMDAzNSAxLjYgNC4wMDAzNUgxLjg2OTZDMS42OTE1NSAzLjYyNTQxIDEuNTk5NDQgMy4yMTU0NSAxLjYgMi44MDAzOUMxLjYgMS4yNTQwMyAyLjg1MzYgMC4wMDA0Njk1MDIgNC4zODY0IDAuMDAwNDY5NTAyQzUuNzkwNCAtMC4wMjM1Mjk4IDcuMDM2IDAuODc0MDQ0IDcuODkxMiAyLjM0NzZMOCAyLjU0MkM4LjgyNjQgMS4wMTA4NCAxMC4wNDggMC4wNTA4NjgxIDExLjQzMjggMC4wMDIwNjk1M0wxMS42IDAuMDAwNDY5NTAyWk00LjQgMS42MDA0MkM0LjA4MTc0IDEuNjAwNDIgMy43NzY1MiAxLjcyNjg1IDMuNTUxNDcgMS45NTE4OEMzLjMyNjQzIDIuMTc2OTIgMy4yIDIuNDgyMTQgMy4yIDIuODAwMzlDMy4yIDMuMTE4NjQgMy4zMjY0MyAzLjQyMzg1IDMuNTUxNDcgMy42NDg4OUMzLjc3NjUyIDMuODczOTMgNC4wODE3NCA0LjAwMDM1IDQuNCA0LjAwMDM1SDYuOTE0NEM2LjMyMTYgMi40NzY0IDUuMzU1MiAxLjU4NDQyIDQuNCAxLjYwMDQyWk0xMS41ODY0IDEuNjAwNDJDMTAuNjQyNCAxLjU4NDQyIDkuNjc4NCAyLjQ3NzIgOS4wODU2IDQuMDAwMzVIMTEuNkMxMS45MTgzIDMuOTk4NTUgMTIuMjIyOCAzLjg3MDM5IDEyLjQ0NjUgMy42NDQwOEMxMi42NzAzIDMuNDE3NzcgMTIuNzk1IDMuMTExODQgMTIuNzkzMiAyLjc5MzU5QzEyLjc5MTQgMi40NzUzNCAxMi42NjMyIDIuMTcwODQgMTIuNDM2OSAxLjk0NzA4QzEyLjIxMDYgMS43MjMzMSAxMS45MDQ3IDEuNTk4NjIgMTEuNTg2NCAxLjYwMDQyWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEuMDcyMDFDMTMuMjE2MiAxLjc3NDE2IDE0LjIyNjEgMi43ODQwNiAxNC45MjgyIDQuMDAwMjJDMTUuNjMwNCA1LjIxNjM3IDE2IDYuNTk1OTIgMTYgOC4wMDAyMkMxNiA5LjQwNDUxIDE1LjYzMDMgMTAuNzg0MSAxNC45MjgyIDEyLjAwMDJDMTQuMjI2IDEzLjIxNjMgMTMuMjE2MSAxNC4yMjYyIDExLjk5OTkgMTQuOTI4NEMxMC43ODM3IDE1LjYzMDUgOS40MDQxOCAxNi4wMDAxIDcuOTk5ODcgMTYuMDAwMUM2LjU5NTU3IDE2LjAwMDEgNS4yMTYwMiAxNS42MzA0IDMuOTk5ODcgMTQuOTI4MkMyLjc4MzcyIDE0LjIyNjEgMS43NzM4MyAxMy4yMTYxIDEuMDcxNzEgMTJDMC4zNjk1ODQgMTAuNzgzOCAtMy41NjcxN2UtMDUgOS40MDQyNSAyLjU4MjEyZS0wOSA3Ljk5OTk2TDAuMDA0MDAwMDkgNy43NDA3NkMwLjA0ODgwMjYgNi4zNTkxNyAwLjQ1MDgzOCA1LjAxMjc1IDEuMTcwOTEgMy44MzI3OUMxLjg5MDk5IDIuNjUyODIgMi45MDQ1MiAxLjY3OTU3IDQuMTEyNzEgMS4wMDc5MkM1LjMyMDkgMC4zMzYyNjkgNi42ODI1MiAtMC4wMTA4NjE3IDguMDY0OCAwLjAwMDM3MTAwNkM5LjQ0NzA5IDAuMDExNjAzNyAxMC44MDI5IDAuMzgwODE2IDEyIDEuMDcyMDFaTTExLjkzMTIgNS4xMjQ3OEMxMi4yMjg4IDQuNDU1MTkgMTEuNTQ0OCAzLjc3MTE5IDEwLjg3NTIgNC4wNjg3OUwzLjY3NTIgNy4yNjg3N0wzLjU4ODggNy4zMTI3N0MyLjk4ODggNy42NjQ3NiAzLjEgOC41OTk5NiAzLjgwNTYgOC43NzY3Nkw2LjU0IDkuNDU5MTVMNy4yMjQgMTIuMTk0M0M3LjQwOCAxMi45MzE5IDguNDIyNCAxMy4wMTk5IDguNzMxMiAxMi4zMjQ3TDExLjkzMTIgNS4xMjQ3OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEuMDcyMDFDMTMuMjE2MiAxLjc3NDE2IDE0LjIyNjEgMi43ODQwNiAxNC45MjgyIDQuMDAwMjJDMTUuNjMwNCA1LjIxNjM3IDE2IDYuNTk1OTIgMTYgOC4wMDAyMkMxNiA5LjQwNDUxIDE1LjYzMDMgMTAuNzg0MSAxNC45MjgyIDEyLjAwMDJDMTQuMjI2IDEzLjIxNjMgMTMuMjE2MSAxNC4yMjYyIDExLjk5OTkgMTQuOTI4NEMxMC43ODM3IDE1LjYzMDUgOS40MDQxOCAxNi4wMDAxIDcuOTk5ODcgMTYuMDAwMUM2LjU5NTU3IDE2LjAwMDEgNS4yMTYwMiAxNS42MzA0IDMuOTk5ODcgMTQuOTI4MkMyLjc4MzcyIDE0LjIyNjEgMS43NzM4MyAxMy4yMTYxIDEuMDcxNzEgMTJDMC4zNjk1ODQgMTAuNzgzOCAtMy41NjcxN2UtMDUgOS40MDQyNSAyLjU4MjEyZS0wOSA3Ljk5OTk2TDAuMDA0MDAwMDkgNy43NDA3NkMwLjA0ODgwMjYgNi4zNTkxNyAwLjQ1MDgzOCA1LjAxMjc1IDEuMTcwOTEgMy44MzI3OUMxLjg5MDk5IDIuNjUyODIgMi45MDQ1MiAxLjY3OTU3IDQuMTEyNzEgMS4wMDc5MkM1LjMyMDkgMC4zMzYyNjkgNi42ODI1MiAtMC4wMTA4NjE3IDguMDY0OCAwLjAwMDM3MTAwNkM5LjQ0NzA5IDAuMDExNjAzNyAxMC44MDI5IDAuMzgwODE2IDEyIDEuMDcyMDFaTTExLjkzMTIgNS4xMjQ3OEMxMi4yMjg4IDQuNDU1MTkgMTEuNTQ0OCAzLjc3MTE5IDEwLjg3NTIgNC4wNjg3OUwzLjY3NTIgNy4yNjg3N0wzLjU4ODggNy4zMTI3N0MyLjk4ODggNy42NjQ3NiAzLjEgOC41OTk5NiAzLjgwNTYgOC43NzY3Nkw2LjU0IDkuNDU5MTVMNy4yMjQgMTIuMTk0M0M3LjQwOCAxMi45MzE5IDguNDIyNCAxMy4wMTk5IDguNzMxMiAxMi4zMjQ3TDExLjkzMTIgNS4xMjQ3OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 155, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuOTkxNjcgMC4wNjYyNTc0QzQuNjk5NCAtMC4wNTA5NTggNS40MjUxNyAtMC4wMTIyOTE1IDYuMTE1NDkgMC4xNzk0MDdDNi44MDU4IDAuMzcxMTA1IDcuNDQzMDYgMC43MTA5NDcgNy45ODAyOCAxLjE3Mzg4TDguMDA5ODcgMS4xOTk1M0w4LjAzNzA2IDEuMTc2MjJDOC41NDk3OSAwLjczODgzNiA5LjE1MjU3IDAuNDEyNzY2IDkuODA1MjEgMC4yMTk3NTdDMTAuNDU3OCAwLjAyNjc0NzkgMTEuMTQ1MyAtMC4wMjg3NjIxIDExLjgyMTggMC4wNTY5MzAxTDEyLjAxODUgMC4wODQ5MTIzQzEyLjg3MTEgMC4yMjgwMTcgMTMuNjY4MSAwLjU5MjU5OCAxNC4zMjUgMS4xNDAwNUMxNC45ODE5IDEuNjg3NSAxNS40NzQzIDIuMzk3NDQgMTUuNzUgMy4xOTQ2OUMxNi4wMjU2IDMuOTkxOTMgMTYuMDc0NCA0Ljg0NjgyIDE1Ljg5MTEgNS42Njg4QzE1LjcwNzcgNi40OTA3OCAxNS4yOTkxIDcuMjQ5MjcgMTQuNzA4NSA3Ljg2Mzk0TDE0LjU2NDUgOC4wMDc3NEwxNC41MjYxIDguMDM5NjFMOC41Njg4MiAxMy43NzUyQzguNDMxMzQgMTMuOTA3NCA4LjI0OTIgMTMuOTg2OCA4LjA1NjE1IDEzLjk5ODVDNy44NjMxIDE0LjAxMDIgNy42NzIyMyAxMy45NTM1IDcuNTE4ODkgMTMuODM4OUw3LjQ0MzcyIDEzLjc3NTJMMS40NTIwMSA4LjAwNjE5QzAuODE3MjY3IDcuNDA1ODYgMC4zNjU4NTQgNi42NDY0NyAwLjE0Nzc1OSA1LjgxMjEzQy0wLjA3MDMzNjIgNC45Nzc3OCAtMC4wNDY2MDA3IDQuMTAxMDQgMC4yMTYzMzYgMy4yNzkwMUMwLjQ3OTI3MyAyLjQ1Njk3IDAuOTcxMTUgMS43MjE3MSAxLjYzNzQ5IDEuMTU0NjZDMi4zMDM4NCAwLjU4NzYxNSAzLjExODY0IDAuMjEwOTA3IDMuOTkxNjcgMC4wNjYyNTc0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuOTkxNjcgMC4wNjYyNTc0QzQuNjk5NCAtMC4wNTA5NTggNS40MjUxNyAtMC4wMTIyOTE1IDYuMTE1NDkgMC4xNzk0MDdDNi44MDU4IDAuMzcxMTA1IDcuNDQzMDYgMC43MTA5NDcgNy45ODAyOCAxLjE3Mzg4TDguMDA5ODcgMS4xOTk1M0w4LjAzNzA2IDEuMTc2MjJDOC41NDk3OSAwLjczODgzNiA5LjE1MjU3IDAuNDEyNzY2IDkuODA1MjEgMC4yMTk3NTdDMTAuNDU3OCAwLjAyNjc0NzkgMTEuMTQ1MyAtMC4wMjg3NjIxIDExLjgyMTggMC4wNTY5MzAxTDEyLjAxODUgMC4wODQ5MTIzQzEyLjg3MTEgMC4yMjgwMTcgMTMuNjY4MSAwLjU5MjU5OCAxNC4zMjUgMS4xNDAwNUMxNC45ODE5IDEuNjg3NSAxNS40NzQzIDIuMzk3NDQgMTUuNzUgMy4xOTQ2OUMxNi4wMjU2IDMuOTkxOTMgMTYuMDc0NCA0Ljg0NjgyIDE1Ljg5MTEgNS42Njg4QzE1LjcwNzcgNi40OTA3OCAxNS4yOTkxIDcuMjQ5MjcgMTQuNzA4NSA3Ljg2Mzk0TDE0LjU2NDUgOC4wMDc3NEwxNC41MjYxIDguMDM5NjFMOC41Njg4MiAxMy43NzUyQzguNDMxMzQgMTMuOTA3NCA4LjI0OTIgMTMuOTg2OCA4LjA1NjE1IDEzLjk5ODVDNy44NjMxIDE0LjAxMDIgNy42NzIyMyAxMy45NTM1IDcuNTE4ODkgMTMuODM4OUw3LjQ0MzcyIDEzLjc3NTJMMS40NTIwMSA4LjAwNjE5QzAuODE3MjY3IDcuNDA1ODYgMC4zNjU4NTQgNi42NDY0NyAwLjE0Nzc1OSA1LjgxMjEzQy0wLjA3MDMzNjIgNC45Nzc3OCAtMC4wNDY2MDA3IDQuMTAxMDQgMC4yMTYzMzYgMy4yNzkwMUMwLjQ3OTI3MyAyLjQ1Njk3IDAuOTcxMTUgMS43MjE3MSAxLjYzNzQ5IDEuMTU0NjZDMi4zMDM4NCAwLjU4NzYxNSAzLjExODY0IDAuMjEwOTA3IDMuOTkxNjcgMC4wNjYyNTc0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 130, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTY1NDEgMC4yMzQyMzJMMTUuNzY0MSA3LjQzNDMxQzE2LjI2OCA3LjkzODMxIDE1LjkxMTIgOC43OTk5MiAxNS4xOTg2IDguNzk5OTJIMTQuMzk4N1YxMy42QzE0LjM5ODcgMTQuMjM2NSAxNC4xNDU5IDE0Ljg0NyAxMy42OTU5IDE1LjI5N0MxMy4yNDU5IDE1Ljc0NzEgMTIuNjM1NiAxNiAxMS45OTkyIDE2SDExLjE5OTNWMTAuMzk5OUMxMS4xOTk0IDkuNzg3NzYgMTAuOTY1NSA5LjE5ODcyIDEwLjU0NTYgOC43NTMzMUMxMC4xMjU3IDguMzA3OTEgOS41NTE1NCA4LjAzOTgzIDguOTQwNTQgOC4wMDM5MUw4Ljc5OTc3IDcuOTk5OTFINy4yMDAwNkM2LjU2MzY2IDcuOTk5OTEgNS45NTMzMyA4LjI1Mjc3IDUuNTAzMzIgOC43MDI4N0M1LjA1MzMyIDkuMTUyOTYgNC44MDA1MSA5Ljc2MzQxIDQuODAwNTEgMTAuMzk5OVYxNkg0LjAwMDY2QzMuMzY0MjYgMTYgMi43NTM5MiAxNS43NDcxIDIuMzAzOTEgMTUuMjk3QzEuODUzOTEgMTQuODQ3IDEuNjAxMSAxNC4yMzY1IDEuNjAxMSAxMy42VjguNzk5OTJIMC44MDEyNUMwLjA4OTM4MTcgOC43OTk5MiAtMC4yNjgxNTIgNy45MzgzMSAwLjIzNTc1NSA3LjQzNDMxTDcuNDM0NDIgMC4yMzQyMzJDNy41ODQ0MSAwLjA4NDI1MzEgNy43ODc4MiAwIDcuOTk5OTIgMEM4LjIxMjAxIDAgOC40MTU0MiAwLjA4NDI1MzEgOC41NjU0MSAwLjIzNDIzMlpNOC43OTk3NyA5LjU5OTkzQzkuMDExOSA5LjU5OTkzIDkuMjE1MzUgOS42ODQyMiA5LjM2NTM1IDkuODM0MjVDOS41MTUzNSA5Ljk4NDI4IDkuNTk5NjIgMTAuMTg3OCA5LjU5OTYyIDEwLjM5OTlWMTZINi40MDAyMVYxMC4zOTk5QzYuNDAwMjQgMTAuMjA0IDYuNDcyMTYgMTAuMDE0OSA2LjYwMjM1IDkuODY4NDRDNi43MzI1MyA5LjcyMjAxIDYuOTExOTIgOS42Mjg0NiA3LjEwNjQ4IDkuNjA1NTNMNy4yMDAwNiA5LjU5OTkzSDguNzk5NzdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTY1NDEgMC4yMzQyMzJMMTUuNzY0MSA3LjQzNDMxQzE2LjI2OCA3LjkzODMxIDE1LjkxMTIgOC43OTk5MiAxNS4xOTg2IDguNzk5OTJIMTQuMzk4N1YxMy42QzE0LjM5ODcgMTQuMjM2NSAxNC4xNDU5IDE0Ljg0NyAxMy42OTU5IDE1LjI5N0MxMy4yNDU5IDE1Ljc0NzEgMTIuNjM1NiAxNiAxMS45OTkyIDE2SDExLjE5OTNWMTAuMzk5OUMxMS4xOTk0IDkuNzg3NzYgMTAuOTY1NSA5LjE5ODcyIDEwLjU0NTYgOC43NTMzMUMxMC4xMjU3IDguMzA3OTEgOS41NTE1NCA4LjAzOTgzIDguOTQwNTQgOC4wMDM5MUw4Ljc5OTc3IDcuOTk5OTFINy4yMDAwNkM2LjU2MzY2IDcuOTk5OTEgNS45NTMzMyA4LjI1Mjc3IDUuNTAzMzIgOC43MDI4N0M1LjA1MzMyIDkuMTUyOTYgNC44MDA1MSA5Ljc2MzQxIDQuODAwNTEgMTAuMzk5OVYxNkg0LjAwMDY2QzMuMzY0MjYgMTYgMi43NTM5MiAxNS43NDcxIDIuMzAzOTEgMTUuMjk3QzEuODUzOTEgMTQuODQ3IDEuNjAxMSAxNC4yMzY1IDEuNjAxMSAxMy42VjguNzk5OTJIMC44MDEyNUMwLjA4OTM4MTcgOC43OTk5MiAtMC4yNjgxNTIgNy45MzgzMSAwLjIzNTc1NSA3LjQzNDMxTDcuNDM0NDIgMC4yMzQyMzJDNy41ODQ0MSAwLjA4NDI1MzEgNy43ODc4MiAwIDcuOTk5OTIgMEM4LjIxMjAxIDAgOC40MTU0MiAwLjA4NDI1MzEgOC41NjU0MSAwLjIzNDIzMlpNOC43OTk3NyA5LjU5OTkzQzkuMDExOSA5LjU5OTkzIDkuMjE1MzUgOS42ODQyMiA5LjM2NTM1IDkuODM0MjVDOS41MTUzNSA5Ljk4NDI4IDkuNTk5NjIgMTAuMTg3OCA5LjU5OTYyIDEwLjM5OTlWMTZINi40MDAyMVYxMC4zOTk5QzYuNDAwMjQgMTAuMjA0IDYuNDcyMTYgMTAuMDE0OSA2LjYwMjM1IDkuODY4NDRDNi43MzI1MyA5LjcyMjAxIDYuOTExOTIgOS42Mjg0NiA3LjEwNjQ4IDkuNjA1NTNMNy4yMDAwNiA5LjU5OTkzSDguNzk5NzdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgNy4ySDcuMTk5NTZMNy4xMDU5NiA3LjIwNTZDNi45MTE1MSA3LjIyODczIDYuNzMyMjkgNy4zMjIzNiA2LjYwMjI2IDcuNDY4NzdDNi40NzIyMyA3LjYxNTE4IDYuNDAwNDEgNy44MDQxOSA2LjQwMDQxIDhDNi40MDA0MSA4LjE5NTgxIDYuNDcyMjMgOC4zODQ4MiA2LjYwMjI2IDguNTMxMjNDNi43MzIyOSA4LjY3NzY0IDYuOTExNTEgOC43NzEyNyA3LjEwNTk2IDguNzk0NEw3LjE5OTU2IDguOFYxMS4yTDcuMjA1MTYgMTEuMjkzNkM3LjIyNjIyIDExLjQ3MjIgNy4zMDY4MyAxMS42Mzg0IDcuNDMzOTggMTEuNzY1NkM3LjU2MTEzIDExLjg5MjcgNy43Mjc0MSAxMS45NzMzIDcuOTA2IDExLjk5NDRMNy45OTk2IDEySDguNzk5NjRMOC44OTMyNCAxMS45OTQ0QzkuMDcxODMgMTEuOTczMyA5LjIzODExIDExLjg5MjcgOS4zNjUyNiAxMS43NjU2QzkuNDkyNDEgMTEuNjM4NCA5LjU3MzAyIDExLjQ3MjIgOS41OTQwOCAxMS4yOTM2TDkuNTk5NjggMTEuMkw5LjU5NDA4IDExLjEwNjRDOS41NzQ5NSAxMC45NDMyIDkuNTA2MDMgMTAuNzg5OCA5LjM5NjY2IDEwLjY2NzFDOS4yODczIDEwLjU0NDUgOS4xNDI4MiAxMC40NTg1IDguOTgyODUgMTAuNDIwOEw4Ljg5MzI0IDEwLjQwNDhMOC43OTk2NCAxMC40VjhMOC43OTQwNCA3LjkwNjRDOC43NzI5OCA3LjcyNzgzIDguNjkyMzcgNy41NjE1NSA4LjU2NTIyIDcuNDM0NDFDOC40MzgwNyA3LjMwNzI2IDguMjcxNzkgNy4yMjY2NiA4LjA5MzIgNy4yMDU2TDcuOTk5NiA3LjJaTTguMDA3NiA0LjhMNy45MDYgNC44MDU2QzcuNzExNTUgNC44Mjg3MyA3LjUzMjMzIDQuOTIyMzYgNy40MDIzIDUuMDY4NzdDNy4yNzIyNyA1LjIxNTE4IDcuMjAwNDUgNS40MDQxOSA3LjIwMDQ1IDUuNkM3LjIwMDQ1IDUuNzk1ODEgNy4yNzIyNyA1Ljk4NDgyIDcuNDAyMyA2LjEzMTIzQzcuNTMyMzMgNi4yNzc2NCA3LjcxMTU1IDYuMzcxMjcgNy45MDYgNi4zOTQ0TDcuOTk5NiA2LjRMOC4xMDEyIDYuMzk0NEM4LjI5NTY1IDYuMzcxMjcgOC40NzQ4NyA2LjI3NzY0IDguNjA0OSA2LjEzMTIzQzguNzM0OTMgNS45ODQ4MiA4LjgwNjc1IDUuNzk1ODEgOC44MDY3NSA1LjZDOC44MDY3NSA1LjQwNDE5IDguNzM0OTMgNS4yMTUxOCA4LjYwNDkgNS4wNjg3N0M4LjQ3NDg3IDQuOTIyMzYgOC4yOTU2NSA0LjgyODczIDguMTAxMiA0LjgwNTZMOC4wMDc2IDQuOFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5NiAwTDguNTEzMjMgMC4wMDQwMDAwOUw5LjAwNjA1IDAuMDE3NjAwMUw5LjI0NTI2IDAuMDI4MDAwMUw5LjcwODQ5IDAuMDU1MkwxMC4xNTA5IDAuMDkyQzEzLjkwMDcgMC40NTYgMTUuNDcxMiAxLjk1ODQgMTUuODg0IDUuNjE2OEwxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3NzYgNi44NzI4TDE1Ljk4MjQgNi45OTI4TDE1Ljk5NiA3LjQ4NjRMMTYgOEwxNS45OTYgOC41MTM2TDE1Ljk4MjQgOS4wMDY0TDE1Ljk3MiA5LjI0NTZMMTUuOTQ0OCA5LjcwODhMMTUuOTA4IDEwLjE1MTJDMTUuNTQ0IDEzLjkwMDggMTQuMDQxNSAxNS40NzEyIDEwLjM4MjkgMTUuODg0TDEwLjE1MDkgMTUuOTA4TDkuNzA4NDkgMTUuOTQ0OEw5LjEyNjg2IDE1Ljk3NzZMOS4wMDY4NSAxNS45ODI0TDguNTEzMjMgMTUuOTk2TDcuOTk5NiAxNkw3LjQ4NTk3IDE1Ljk5Nkw2Ljk5MzE1IDE1Ljk4MjRMNi43NTM5NCAxNS45NzJMNi4yOTA3MSAxNS45NDQ4TDUuODQ4MjkgMTUuOTA4QzIuMDk4NTEgMTUuNTQ0IDAuNTI4MDI2IDE0LjA0MTYgMC4xMTUyMDYgMTAuMzgzMkwwLjA5MTIwNDYgMTAuMTUxMkwwLjA1NDQwMjggOS43MDg4TDAuMDIxNjAxMiA5LjEyNzJMMC4wMTY4MDEgOS4wMDcyTDAuMDAzMjAwMzEgOC41MTM2TDAgOC4yNTkyVjcuNzQwOEwwLjAwMzIwMDMxIDcuNDg2NEwwLjAxNjgwMSA2Ljk5MzZMMC4wMjcyMDE1IDYuNzU0NEwwLjA1NDQwMjggNi4yOTEyTDAuMDkxMjA0NiA1Ljg0ODhDMC40NTUyMjMgMi4wOTkyIDEuOTU3NyAwLjUyODggNS42MTYyOCAwLjExNkw1Ljg0ODI5IDAuMDkyTDYuMjkwNzEgMC4wNTUyTDYuODcyMzQgMC4wMjI0MDAxTDYuOTkyMzUgMC4wMTc2MDAxTDcuNDg1OTcgMC4wMDQwMDAwOUM3LjY1Mzk4IDAuMDAxNjAwMDkgNy44MjUxOSAwIDcuOTk5NiAwWk03Ljk5OTYgNy4ySDcuMTk5NTZMNy4xMDU5NiA3LjIwNTZDNi45MTE1MSA3LjIyODczIDYuNzMyMjkgNy4zMjIzNiA2LjYwMjI2IDcuNDY4NzdDNi40NzIyMyA3LjYxNTE4IDYuNDAwNDEgNy44MDQxOSA2LjQwMDQxIDhDNi40MDA0MSA4LjE5NTgxIDYuNDcyMjMgOC4zODQ4MiA2LjYwMjI2IDguNTMxMjNDNi43MzIyOSA4LjY3NzY0IDYuOTExNTEgOC43NzEyNyA3LjEwNTk2IDguNzk0NEw3LjE5OTU2IDguOFYxMS4yTDcuMjA1MTYgMTEuMjkzNkM3LjIyNjIyIDExLjQ3MjIgNy4zMDY4MyAxMS42Mzg0IDcuNDMzOTggMTEuNzY1NkM3LjU2MTEzIDExLjg5MjcgNy43Mjc0MSAxMS45NzMzIDcuOTA2IDExLjk5NDRMNy45OTk2IDEySDguNzk5NjRMOC44OTMyNCAxMS45OTQ0QzkuMDcxODMgMTEuOTczMyA5LjIzODExIDExLjg5MjcgOS4zNjUyNiAxMS43NjU2QzkuNDkyNDEgMTEuNjM4NCA5LjU3MzAyIDExLjQ3MjIgOS41OTQwOCAxMS4yOTM2TDkuNTk5NjggMTEuMkw5LjU5NDA4IDExLjEwNjRDOS41NzQ5NSAxMC45NDMyIDkuNTA2MDMgMTAuNzg5OCA5LjM5NjY2IDEwLjY2NzFDOS4yODczIDEwLjU0NDUgOS4xNDI4MiAxMC40NTg1IDguOTgyODUgMTAuNDIwOEw4Ljg5MzI0IDEwLjQwNDhMOC43OTk2NCAxMC40VjhMOC43OTQwNCA3LjkwNjRDOC43NzI5OCA3LjcyNzgzIDguNjkyMzcgNy41NjE1NSA4LjU2NTIyIDcuNDM0NDFDOC40MzgwNyA3LjMwNzI2IDguMjcxNzkgNy4yMjY2NiA4LjA5MzIgNy4yMDU2TDcuOTk5NiA3LjJaTTguMDA3NiA0LjhMNy45MDYgNC44MDU2QzcuNzExNTUgNC44Mjg3MyA3LjUzMjMzIDQuOTIyMzYgNy40MDIzIDUuMDY4NzdDNy4yNzIyNyA1LjIxNTE4IDcuMjAwNDUgNS40MDQxOSA3LjIwMDQ1IDUuNkM3LjIwMDQ1IDUuNzk1ODEgNy4yNzIyNyA1Ljk4NDgyIDcuNDAyMyA2LjEzMTIzQzcuNTMyMzMgNi4yNzc2NCA3LjcxMTU1IDYuMzcxMjcgNy45MDYgNi4zOTQ0TDcuOTk5NiA2LjRMOC4xMDEyIDYuMzk0NEM4LjI5NTY1IDYuMzcxMjcgOC40NzQ4NyA2LjI3NzY0IDguNjA0OSA2LjEzMTIzQzguNzM0OTMgNS45ODQ4MiA4LjgwNjc1IDUuNzk1ODEgOC44MDY3NSA1LjZDOC44MDY3NSA1LjQwNDE5IDguNzM0OTMgNS4yMTUxOCA4LjYwNDkgNS4wNjg3N0M4LjQ3NDg3IDQuOTIyMzYgOC4yOTU2NSA0LjgyODczIDguMTAxMiA0LjgwNTZMOC4wMDc2IDQuOFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 155, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNjAwMzMgNy4yQzEuODA0MjQgNy4yMDAyMiAyLjAwMDM2IDcuMjc4MyAyLjE0ODYzIDcuNDE4MjhDMi4yOTY5IDcuNTU4MjUgMi4zODYxMiA3Ljc0OTU2IDIuMzk4MDcgNy45NTMxMUMyLjQxMDAyIDguMTU2NjcgMi4zNDM3OSA4LjM1NzEgMi4yMTI5MiA4LjUxMzQ2QzIuMDgyMDUgOC42Njk4MyAxLjg5NjQxIDguNzcwMzEgMS42OTM5MyA4Ljc5NDRMMS42MDAzMyA4LjhIMC44MDAzMzRDMC41OTY0MzEgOC43OTk3NyAwLjQwMDMwOSA4LjcyMTY5IDAuMjUyMDQgOC41ODE3MkMwLjEwMzc3MSA4LjQ0MTc0IDAuMDE0NTQ2NCA4LjI1MDQzIDAuMDAyNTk2NzMgOC4wNDY4OEMtMC4wMDkzNTI5NiA3Ljg0MzMzIDAuMDU2ODc0MSA3LjY0Mjg5IDAuMTg3NzQ2IDcuNDg2NTNDMC4zMTg2MTkgNy4zMzAxNyAwLjUwNDI1OCA3LjIyOTY4IDAuNzA2NzM0IDcuMjA1NkwwLjgwMDMzNCA3LjJIMS42MDAzM1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04LjAwMDIgMEM4LjE5NjE0IDIuNTg0ODRlLTA1IDguMzg1MjcgMC4wNzE5NjUgOC41MzE2OSAwLjIwMjE3MkM4LjY3ODEyIDAuMzMyMzggOC43NzE2NyAwLjUxMTc5OSA4Ljc5NDYgMC43MDY0TDguODAwMiAwLjhWMS42QzguNzk5OTcgMS44MDM5IDguNzIxODkgMi4wMDAwMyA4LjU4MTkyIDIuMTQ4MjlDOC40NDE5NCAyLjI5NjU2IDguMjUwNjMgMi4zODU3OSA4LjA0NzA4IDIuMzk3NzRDNy44NDM1MyAyLjQwOTY5IDcuNjQzMDkgMi4zNDM0NiA3LjQ4NjczIDIuMjEyNTlDNy4zMzAzNyAyLjA4MTcyIDcuMjI5ODggMS44OTYwOCA3LjIwNTggMS42OTM2TDcuMjAwMiAxLjZWMC44QzcuMjAwMiAwLjU4NzgyNyA3LjI4NDQ4IDAuMzg0MzQ0IDcuNDM0NTEgMC4yMzQzMTVDNy41ODQ1NCAwLjA4NDI4NTQgNy43ODgwMiAwIDguMDAwMiAwWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE1LjIwMDQgNy4yQzE1LjQwNDMgNy4yMDAyMiAxNS42MDA1IDcuMjc4MyAxNS43NDg3IDcuNDE4MjhDMTUuODk3IDcuNTU4MjUgMTUuOTg2MiA3Ljc0OTU2IDE1Ljk5ODIgNy45NTMxMUMxNi4wMTAxIDguMTU2NjcgMTUuOTQzOSA4LjM1NzEgMTUuODEzIDguNTEzNDZDMTUuNjgyMSA4LjY2OTgzIDE1LjQ5NjUgOC43NzAzMSAxNS4yOTQgOC43OTQ0TDE1LjIwMDQgOC44SDE0LjQwMDRDMTQuMTk2NSA4Ljc5OTc3IDE0LjAwMDQgOC43MjE2OSAxMy44NTIxIDguNTgxNzJDMTMuNzAzOSA4LjQ0MTc0IDEzLjYxNDYgOC4yNTA0MyAxMy42MDI3IDguMDQ2ODhDMTMuNTkwNyA3Ljg0MzMzIDEzLjY1NyA3LjY0Mjg5IDEzLjc4NzggNy40ODY1M0MxMy45MTg3IDcuMzMwMTcgMTQuMTA0NCA3LjIyOTY4IDE0LjMwNjggNy4yMDU2TDE0LjQwMDQgNy4ySDE1LjIwMDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi4zMTQ1NSAyLjMxNDRDMi40NTIzMSAyLjE3NjY2IDIuNjM1NTkgMi4wOTM5MSAyLjgzMDAxIDIuMDgxNjlDMy4wMjQ0MyAyLjA2OTQ2IDMuMjE2NjMgMi4xMjg2IDMuMzcwNTUgMi4yNDhMMy40NDU3NSAyLjMxNDRMNC4wMDU3NSAyLjg3NDRDNC4xNDkyMyAzLjAxODM2IDQuMjMyNTMgMy4yMTE1NSA0LjIzODczIDMuNDE0N0M0LjI0NDk0IDMuNjE3ODYgNC4xNzM1OCAzLjgxNTc3IDQuMDM5MTUgMy45NjgyMkMzLjkwNDczIDQuMTIwNjcgMy43MTczMSA0LjIxNjI0IDMuNTE0OTcgNC4yMzU1MkMzLjMxMjYzIDQuMjU0NzkgMy4xMTA1NCA0LjE5NjMzIDIuOTQ5NzUgNC4wNzJMMi44NzQ1NSA0LjAwNTZMMi4zMTQ1NSAzLjQ0NTZDMi4xNjQ1NyAzLjI5NTU4IDIuMDgwMzIgMy4wOTIxMyAyLjA4MDMyIDIuODhDMi4wODAzMiAyLjY2Nzg3IDIuMTY0NTcgMi40NjQ0MiAyLjMxNDU1IDIuMzE0NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMi41NTQ4IDIuMzE0NEMxMi42OTg3IDIuMTcwOTIgMTIuODkxOSAyLjA4NzYyIDEzLjA5NTEgMi4wODE0MUMxMy4yOTgyIDIuMDc1MjEgMTMuNDk2MSAyLjE0NjU3IDEzLjY0ODYgMi4yODA5OUMxMy44MDEgMi40MTU0MiAxMy44OTY2IDIuNjAyODQgMTMuOTE1OSAyLjgwNTE3QzEzLjkzNTIgMy4wMDc1MSAxMy44NzY3IDMuMjA5NiAxMy43NTI0IDMuMzcwMzlMMTMuNjg2IDMuNDQ1NkwxMy4xMjYgNC4wMDU2QzEyLjk4MiA0LjE0OTA3IDEyLjc4ODggNC4yMzIzNyAxMi41ODU3IDQuMjM4NThDMTIuMzgyNSA0LjI0NDc4IDEyLjE4NDYgNC4xNzM0MiAxMi4wMzIxIDQuMDM5QzExLjg3OTcgMy45MDQ1NyAxMS43ODQxIDMuNzE3MTUgMTEuNzY0OCAzLjUxNDgyQzExLjc0NTYgMy4zMTI0OCAxMS44MDQgMy4xMTAzOSAxMS45Mjg0IDIuOTQ5NTlMMTEuOTk0OCAyLjg3NDRMMTIuNTU0OCAyLjMxNDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS42MDAzNCAxMi44QzkuODEyNTIgMTIuOCAxMC4wMTYgMTIuODg0MyAxMC4xNjYgMTMuMDM0M0MxMC4zMTYxIDEzLjE4NDMgMTAuNDAwMyAxMy4zODc4IDEwLjQwMDMgMTMuNkMxMC40MDAzIDE0LjIzNjUgMTAuMTQ3NSAxNC44NDcgOS42OTc0IDE1LjI5NzFDOS4yNDczMSAxNS43NDcxIDguNjM2ODYgMTYgOC4wMDAzNCAxNkM3LjM2MzgyIDE2IDYuNzUzMzcgMTUuNzQ3MSA2LjMwMzI5IDE1LjI5NzFDNS44NTMyIDE0Ljg0NyA1LjYwMDM0IDE0LjIzNjUgNS42MDAzNCAxMy42QzUuNjAwMzcgMTMuNDA0MSA1LjY3MjMxIDEzLjIxNDkgNS44MDI1MSAxMy4wNjg1QzUuOTMyNzIgMTIuOTIyMSA2LjExMjE0IDEyLjgyODUgNi4zMDY3NCAxMi44MDU2TDYuNDAwMzQgMTIuOEg5LjYwMDM0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTguMDAwMiAzLjJDOS4wMDc2MyAzLjIgOS45ODk1MyAzLjUxNjk4IDEwLjgwNjggNC4xMDYwM0MxMS42MjQxIDQuNjk1MDkgMTIuMjM1MyA1LjUyNjM3IDEyLjU1MzkgNi40ODIxQzEyLjg3MjUgNy40Mzc4NCAxMi44ODIyIDguNDY5NTkgMTIuNTgxOSA5LjQzMTJDMTIuMjgxNSAxMC4zOTI4IDExLjY4NjEgMTEuMjM1NSAxMC44ODAyIDExLjg0QzEwLjc2OTkgMTEuOTIyOCAxMC42NDAxIDExLjk3NTcgMTAuNTAzNCAxMS45OTM2TDEwLjQwMDIgMTJINS42MDAyQzUuNDI3MSAxMiA1LjI1ODY3IDExLjk0MzkgNS4xMjAyIDExLjg0QzQuMzE0MjUgMTEuMjM1NSAzLjcxODkxIDEwLjM5MjggMy40MTg1MyA5LjQzMTJDMy4xMTgxNSA4LjQ2OTU5IDMuMTI3OTQgNy40Mzc4NCAzLjQ0NjUyIDYuNDgyMUMzLjc2NTA5IDUuNTI2MzcgNC4zNzYzMSA0LjY5NTA5IDUuMTkzNTkgNC4xMDYwM0M2LjAxMDg2IDMuNTE2OTggNi45OTI3NiAzLjIgOC4wMDAyIDMuMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNjAwMzMgNy4yQzEuODA0MjQgNy4yMDAyMiAyLjAwMDM2IDcuMjc4MyAyLjE0ODYzIDcuNDE4MjhDMi4yOTY5IDcuNTU4MjUgMi4zODYxMiA3Ljc0OTU2IDIuMzk4MDcgNy45NTMxMUMyLjQxMDAyIDguMTU2NjcgMi4zNDM3OSA4LjM1NzEgMi4yMTI5MiA4LjUxMzQ2QzIuMDgyMDUgOC42Njk4MyAxLjg5NjQxIDguNzcwMzEgMS42OTM5MyA4Ljc5NDRMMS42MDAzMyA4LjhIMC44MDAzMzRDMC41OTY0MzEgOC43OTk3NyAwLjQwMDMwOSA4LjcyMTY5IDAuMjUyMDQgOC41ODE3MkMwLjEwMzc3MSA4LjQ0MTc0IDAuMDE0NTQ2NCA4LjI1MDQzIDAuMDAyNTk2NzMgOC4wNDY4OEMtMC4wMDkzNTI5NiA3Ljg0MzMzIDAuMDU2ODc0MSA3LjY0Mjg5IDAuMTg3NzQ2IDcuNDg2NTNDMC4zMTg2MTkgNy4zMzAxNyAwLjUwNDI1OCA3LjIyOTY4IDAuNzA2NzM0IDcuMjA1NkwwLjgwMDMzNCA3LjJIMS42MDAzM1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik04LjAwMDIgMEM4LjE5NjE0IDIuNTg0ODRlLTA1IDguMzg1MjcgMC4wNzE5NjUgOC41MzE2OSAwLjIwMjE3MkM4LjY3ODEyIDAuMzMyMzggOC43NzE2NyAwLjUxMTc5OSA4Ljc5NDYgMC43MDY0TDguODAwMiAwLjhWMS42QzguNzk5OTcgMS44MDM5IDguNzIxODkgMi4wMDAwMyA4LjU4MTkyIDIuMTQ4MjlDOC40NDE5NCAyLjI5NjU2IDguMjUwNjMgMi4zODU3OSA4LjA0NzA4IDIuMzk3NzRDNy44NDM1MyAyLjQwOTY5IDcuNjQzMDkgMi4zNDM0NiA3LjQ4NjczIDIuMjEyNTlDNy4zMzAzNyAyLjA4MTcyIDcuMjI5ODggMS44OTYwOCA3LjIwNTggMS42OTM2TDcuMjAwMiAxLjZWMC44QzcuMjAwMiAwLjU4NzgyNyA3LjI4NDQ4IDAuMzg0MzQ0IDcuNDM0NTEgMC4yMzQzMTVDNy41ODQ1NCAwLjA4NDI4NTQgNy43ODgwMiAwIDguMDAwMiAwWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE1LjIwMDQgNy4yQzE1LjQwNDMgNy4yMDAyMiAxNS42MDA1IDcuMjc4MyAxNS43NDg3IDcuNDE4MjhDMTUuODk3IDcuNTU4MjUgMTUuOTg2MiA3Ljc0OTU2IDE1Ljk5ODIgNy45NTMxMUMxNi4wMTAxIDguMTU2NjcgMTUuOTQzOSA4LjM1NzEgMTUuODEzIDguNTEzNDZDMTUuNjgyMSA4LjY2OTgzIDE1LjQ5NjUgOC43NzAzMSAxNS4yOTQgOC43OTQ0TDE1LjIwMDQgOC44SDE0LjQwMDRDMTQuMTk2NSA4Ljc5OTc3IDE0LjAwMDQgOC43MjE2OSAxMy44NTIxIDguNTgxNzJDMTMuNzAzOSA4LjQ0MTc0IDEzLjYxNDYgOC4yNTA0MyAxMy42MDI3IDguMDQ2ODhDMTMuNTkwNyA3Ljg0MzMzIDEzLjY1NyA3LjY0Mjg5IDEzLjc4NzggNy40ODY1M0MxMy45MTg3IDcuMzMwMTcgMTQuMTA0NCA3LjIyOTY4IDE0LjMwNjggNy4yMDU2TDE0LjQwMDQgNy4ySDE1LjIwMDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi4zMTQ1NSAyLjMxNDRDMi40NTIzMSAyLjE3NjY2IDIuNjM1NTkgMi4wOTM5MSAyLjgzMDAxIDIuMDgxNjlDMy4wMjQ0MyAyLjA2OTQ2IDMuMjE2NjMgMi4xMjg2IDMuMzcwNTUgMi4yNDhMMy40NDU3NSAyLjMxNDRMNC4wMDU3NSAyLjg3NDRDNC4xNDkyMyAzLjAxODM2IDQuMjMyNTMgMy4yMTE1NSA0LjIzODczIDMuNDE0N0M0LjI0NDk0IDMuNjE3ODYgNC4xNzM1OCAzLjgxNTc3IDQuMDM5MTUgMy45NjgyMkMzLjkwNDczIDQuMTIwNjcgMy43MTczMSA0LjIxNjI0IDMuNTE0OTcgNC4yMzU1MkMzLjMxMjYzIDQuMjU0NzkgMy4xMTA1NCA0LjE5NjMzIDIuOTQ5NzUgNC4wNzJMMi44NzQ1NSA0LjAwNTZMMi4zMTQ1NSAzLjQ0NTZDMi4xNjQ1NyAzLjI5NTU4IDIuMDgwMzIgMy4wOTIxMyAyLjA4MDMyIDIuODhDMi4wODAzMiAyLjY2Nzg3IDIuMTY0NTcgMi40NjQ0MiAyLjMxNDU1IDIuMzE0NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMi41NTQ4IDIuMzE0NEMxMi42OTg3IDIuMTcwOTIgMTIuODkxOSAyLjA4NzYyIDEzLjA5NTEgMi4wODE0MUMxMy4yOTgyIDIuMDc1MjEgMTMuNDk2MSAyLjE0NjU3IDEzLjY0ODYgMi4yODA5OUMxMy44MDEgMi40MTU0MiAxMy44OTY2IDIuNjAyODQgMTMuOTE1OSAyLjgwNTE3QzEzLjkzNTIgMy4wMDc1MSAxMy44NzY3IDMuMjA5NiAxMy43NTI0IDMuMzcwMzlMMTMuNjg2IDMuNDQ1NkwxMy4xMjYgNC4wMDU2QzEyLjk4MiA0LjE0OTA3IDEyLjc4ODggNC4yMzIzNyAxMi41ODU3IDQuMjM4NThDMTIuMzgyNSA0LjI0NDc4IDEyLjE4NDYgNC4xNzM0MiAxMi4wMzIxIDQuMDM5QzExLjg3OTcgMy45MDQ1NyAxMS43ODQxIDMuNzE3MTUgMTEuNzY0OCAzLjUxNDgyQzExLjc0NTYgMy4zMTI0OCAxMS44MDQgMy4xMTAzOSAxMS45Mjg0IDIuOTQ5NTlMMTEuOTk0OCAyLjg3NDRMMTIuNTU0OCAyLjMxNDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS42MDAzNCAxMi44QzkuODEyNTIgMTIuOCAxMC4wMTYgMTIuODg0MyAxMC4xNjYgMTMuMDM0M0MxMC4zMTYxIDEzLjE4NDMgMTAuNDAwMyAxMy4zODc4IDEwLjQwMDMgMTMuNkMxMC40MDAzIDE0LjIzNjUgMTAuMTQ3NSAxNC44NDcgOS42OTc0IDE1LjI5NzFDOS4yNDczMSAxNS43NDcxIDguNjM2ODYgMTYgOC4wMDAzNCAxNkM3LjM2MzgyIDE2IDYuNzUzMzcgMTUuNzQ3MSA2LjMwMzI5IDE1LjI5NzFDNS44NTMyIDE0Ljg0NyA1LjYwMDM0IDE0LjIzNjUgNS42MDAzNCAxMy42QzUuNjAwMzcgMTMuNDA0MSA1LjY3MjMxIDEzLjIxNDkgNS44MDI1MSAxMy4wNjg1QzUuOTMyNzIgMTIuOTIyMSA2LjExMjE0IDEyLjgyODUgNi4zMDY3NCAxMi44MDU2TDYuNDAwMzQgMTIuOEg5LjYwMDM0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTguMDAwMiAzLjJDOS4wMDc2MyAzLjIgOS45ODk1MyAzLjUxNjk4IDEwLjgwNjggNC4xMDYwM0MxMS42MjQxIDQuNjk1MDkgMTIuMjM1MyA1LjUyNjM3IDEyLjU1MzkgNi40ODIxQzEyLjg3MjUgNy40Mzc4NCAxMi44ODIyIDguNDY5NTkgMTIuNTgxOSA5LjQzMTJDMTIuMjgxNSAxMC4zOTI4IDExLjY4NjEgMTEuMjM1NSAxMC44ODAyIDExLjg0QzEwLjc2OTkgMTEuOTIyOCAxMC42NDAxIDExLjk3NTcgMTAuNTAzNCAxMS45OTM2TDEwLjQwMDIgMTJINS42MDAyQzUuNDI3MSAxMiA1LjI1ODY3IDExLjk0MzkgNS4xMjAyIDExLjg0QzQuMzE0MjUgMTEuMjM1NSAzLjcxODkxIDEwLjM5MjggMy40MTg1MyA5LjQzMTJDMy4xMTgxNSA4LjQ2OTU5IDMuMTI3OTQgNy40Mzc4NCAzLjQ0NjUyIDYuNDgyMUMzLjc2NTA5IDUuNTI2MzcgNC4zNzYzMSA0LjY5NTA5IDUuMTkzNTkgNC4xMDYwM0M2LjAxMDg2IDMuNTE2OTggNi45OTI3NiAzLjIgOC4wMDAyIDMuMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAxNjIgMEMxMC44Mzk0IDAgMTEuNjI4MiAwLjMyNzIgMTIuMjA5OCAwLjkwODhMMTUuMDkxNSAzLjc5MDRDMTUuMzc5NSA0LjA3ODQxIDE1LjYwOCA0LjQyMDMzIDE1Ljc2MzkgNC43OTY2NEMxNS45MTk4IDUuMTcyOTYgMTYgNS41NzYyOCAxNiA1Ljk4MzZDMTYgNi4zOTA5MiAxNS45MTk4IDYuNzk0MjUgMTUuNzYzOSA3LjE3MDU2QzE1LjYwOCA3LjU0Njg3IDE1LjM3OTUgNy44ODg3OSAxNS4wOTE1IDguMTc2OEwxMi45NzcxIDEwLjI5MTJDMTIuNDY0MSAxMC44MDM2IDExLjc4OCAxMS4xMjAzIDExLjA2NiAxMS4xODY0QzEwLjM0MzkgMTEuMjUyNCA5LjYyMTU3IDExLjA2MzcgOS4wMjQxOCAxMC42NTI4TDguOTQwMTggMTAuNTkwNEw0LjIzNDQ5IDE1LjI5NjhDMy44NzAyOSAxNS42NTk4IDMuMzk5MTQgMTUuODk2MiAyLjg5MDQ2IDE1Ljk3MTJMMi43MTQ0NiAxNS45OTI4TDIuNTM3NjUgMTZIMS42MDAwM0MwLjc4ODgxNiAxNiAwLjEwNjQwMiAxNS4zOTI4IDAuMDA3MjAwMiAxNC41NDE2TDAgMTQuNFYxMy40NjI0QzAgMTIuODk5MiAwLjE5ODQwNCAxMi4zNTM2IDAuNTg0MDEyIDExLjg5NDRMMC43MDMyMTQgMTEuNzY1NkwxLjAzNDQyIDExLjQzNDRDMS4xODQ0MiAxMS4yODQ0IDEuMzg3ODcgMTEuMiAxLjYwMDAzIDExLjJIMi40MDAwNVYxMC40QzIuNDAwMDcgMTAuMjA0MSAyLjQ3MjAxIDEwLjAxNDkgMi42MDIyMiA5Ljg2ODVDMi43MzI0MyA5LjcyMjA3IDIuOTExODYgOS42Mjg1MyAzLjEwNjQ2IDkuNjA1NkwzLjIwMDA2IDkuNkg0LjAwMDA4VjguOEM0LjAwMDA3IDguNjI0MTYgNC4wNTc5OSA4LjQ1MzIyIDQuMTY0ODggOC4zMTM2TDQuMjM0NDkgOC4yMzM2TDUuNDA4OTEgNy4wNTg0TDUuMzQ4MTEgNi45NzZDNS4wMjg2OSA2LjUxMTE4IDQuODQxMjQgNS45Njg0NyA0LjgwNTcgNS40MDU2TDQuODAwMSA1LjIxNjhDNC44MDAxIDQuMzkzNiA1LjEyNzMgMy42MDQ4IDUuNzA4OTIgMy4wMjMyTDcuODIzMzYgMC45MDg4QzguNDA1MDMgMC4zMjczMTYgOS4xOTM3MiAwLjAwMDQ1NTU3IDEwLjAxNjIgMFpNMTAuNDEyMiA0SDEwLjM5NjJDMTAuMTg2MSA0IDkuOTc4MDMgNC4wNDEzOSA5Ljc4MzkxIDQuMTIxNzlDOS41ODk3OCA0LjIwMjIgOS40MTMzOSA0LjMyMDA2IDkuMjY0ODIgNC40Njg2M0M5LjExNjI0IDQuNjE3MiA4Ljk5ODM4IDQuNzkzNTkgOC45MTc5NyA0Ljk4NzcxQzguODM3NTYgNS4xODE4MyA4Ljc5NjE4IDUuMzg5ODkgOC43OTYxOCA1LjZDOC43OTYxOCA1LjgxMDEyIDguODM3NTYgNi4wMTgxNyA4LjkxNzk3IDYuMjEyMjlDOC45OTgzOCA2LjQwNjQxIDkuMTE2MjQgNi41ODI4IDkuMjY0ODIgNi43MzEzN0M5LjQxMzM5IDYuODc5OTQgOS41ODk3OCA2Ljk5NzggOS43ODM5MSA3LjA3ODIxQzkuOTc4MDMgNy4xNTg2MiAxMC4xODYxIDcuMiAxMC4zOTYyIDcuMkgxMC40MTIyQzEwLjgzNjYgNy4yIDExLjI0MzUgNy4wMzE0MyAxMS41NDM2IDYuNzMxMzdDMTEuODQzNyA2LjQzMTMxIDEyLjAxMjIgNi4wMjQzNSAxMi4wMTIyIDUuNkMxMi4wMTIyIDUuMTc1NjUgMTEuODQzNyA0Ljc2ODY5IDExLjU0MzYgNC40Njg2M0MxMS4yNDM1IDQuMTY4NTcgMTAuODM2NiA0IDEwLjQxMjIgNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAxNjIgMEMxMC44Mzk0IDAgMTEuNjI4MiAwLjMyNzIgMTIuMjA5OCAwLjkwODhMMTUuMDkxNSAzLjc5MDRDMTUuMzc5NSA0LjA3ODQxIDE1LjYwOCA0LjQyMDMzIDE1Ljc2MzkgNC43OTY2NEMxNS45MTk4IDUuMTcyOTYgMTYgNS41NzYyOCAxNiA1Ljk4MzZDMTYgNi4zOTA5MiAxNS45MTk4IDYuNzk0MjUgMTUuNzYzOSA3LjE3MDU2QzE1LjYwOCA3LjU0Njg3IDE1LjM3OTUgNy44ODg3OSAxNS4wOTE1IDguMTc2OEwxMi45NzcxIDEwLjI5MTJDMTIuNDY0MSAxMC44MDM2IDExLjc4OCAxMS4xMjAzIDExLjA2NiAxMS4xODY0QzEwLjM0MzkgMTEuMjUyNCA5LjYyMTU3IDExLjA2MzcgOS4wMjQxOCAxMC42NTI4TDguOTQwMTggMTAuNTkwNEw0LjIzNDQ5IDE1LjI5NjhDMy44NzAyOSAxNS42NTk4IDMuMzk5MTQgMTUuODk2MiAyLjg5MDQ2IDE1Ljk3MTJMMi43MTQ0NiAxNS45OTI4TDIuNTM3NjUgMTZIMS42MDAwM0MwLjc4ODgxNiAxNiAwLjEwNjQwMiAxNS4zOTI4IDAuMDA3MjAwMiAxNC41NDE2TDAgMTQuNFYxMy40NjI0QzAgMTIuODk5MiAwLjE5ODQwNCAxMi4zNTM2IDAuNTg0MDEyIDExLjg5NDRMMC43MDMyMTQgMTEuNzY1NkwxLjAzNDQyIDExLjQzNDRDMS4xODQ0MiAxMS4yODQ0IDEuMzg3ODcgMTEuMiAxLjYwMDAzIDExLjJIMi40MDAwNVYxMC40QzIuNDAwMDcgMTAuMjA0MSAyLjQ3MjAxIDEwLjAxNDkgMi42MDIyMiA5Ljg2ODVDMi43MzI0MyA5LjcyMjA3IDIuOTExODYgOS42Mjg1MyAzLjEwNjQ2IDkuNjA1NkwzLjIwMDA2IDkuNkg0LjAwMDA4VjguOEM0LjAwMDA3IDguNjI0MTYgNC4wNTc5OSA4LjQ1MzIyIDQuMTY0ODggOC4zMTM2TDQuMjM0NDkgOC4yMzM2TDUuNDA4OTEgNy4wNTg0TDUuMzQ4MTEgNi45NzZDNS4wMjg2OSA2LjUxMTE4IDQuODQxMjQgNS45Njg0NyA0LjgwNTcgNS40MDU2TDQuODAwMSA1LjIxNjhDNC44MDAxIDQuMzkzNiA1LjEyNzMgMy42MDQ4IDUuNzA4OTIgMy4wMjMyTDcuODIzMzYgMC45MDg4QzguNDA1MDMgMC4zMjczMTYgOS4xOTM3MiAwLjAwMDQ1NTU3IDEwLjAxNjIgMFpNMTAuNDEyMiA0SDEwLjM5NjJDMTAuMTg2MSA0IDkuOTc4MDMgNC4wNDEzOSA5Ljc4MzkxIDQuMTIxNzlDOS41ODk3OCA0LjIwMjIgOS40MTMzOSA0LjMyMDA2IDkuMjY0ODIgNC40Njg2M0M5LjExNjI0IDQuNjE3MiA4Ljk5ODM4IDQuNzkzNTkgOC45MTc5NyA0Ljk4NzcxQzguODM3NTYgNS4xODE4MyA4Ljc5NjE4IDUuMzg5ODkgOC43OTYxOCA1LjZDOC43OTYxOCA1LjgxMDEyIDguODM3NTYgNi4wMTgxNyA4LjkxNzk3IDYuMjEyMjlDOC45OTgzOCA2LjQwNjQxIDkuMTE2MjQgNi41ODI4IDkuMjY0ODIgNi43MzEzN0M5LjQxMzM5IDYuODc5OTQgOS41ODk3OCA2Ljk5NzggOS43ODM5MSA3LjA3ODIxQzkuOTc4MDMgNy4xNTg2MiAxMC4xODYxIDcuMiAxMC4zOTYyIDcuMkgxMC40MTIyQzEwLjgzNjYgNy4yIDExLjI0MzUgNy4wMzE0MyAxMS41NDM2IDYuNzMxMzdDMTEuODQzNyA2LjQzMTMxIDEyLjAxMjIgNi4wMjQzNSAxMi4wMTIyIDUuNkMxMi4wMTIyIDUuMTc1NjUgMTEuODQzNyA0Ljc2ODY5IDExLjU0MzYgNC40Njg2M0MxMS4yNDM1IDQuMTY4NTcgMTAuODM2NiA0IDEwLjQxMjIgNFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 169, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDAwMDIgMEM2LjYxNjcxIDAuMDAyMTU5MTMgNi4yMzg2MiAwLjA4OTA3ODUgNS44OTI4NSAwLjI1NDUzQzUuNTQ3MDggMC40MTk5ODEgNS4yNDIxOSAwLjY1OTg2OCA1LjAwMDAyIDAuOTU3TDAuNjQ1MDIzIDYuMTk3QzAuMjI5ODIgNi43MDQyNSAwLjAwMjM3OTM0IDcuMzM5MjQgMC4wMDExMDQwMyA3Ljk5NDc1Qy0wLjAwMDE3MTI4OSA4LjY1MDI3IDAuMjI0Nzk3IDkuMjg2MTQgMC42MzgwMjMgOS43OTVMNS4wMDYwMiAxNS4wNTFDNS41MDUwMiAxNS42NTEgNi4yMzEwMiAxNiA3LjAwMDAyIDE2QzcuMzgzMzMgMTUuOTk3OCA3Ljc2MTQyIDE1LjkxMDkgOC4xMDcxOSAxNS43NDU1QzguNDUyOTYgMTUuNTggOC43NTc4NiAxNS4zNDAxIDkuMDAwMDIgMTUuMDQzTDEzLjM1NSA5LjgwM0MxMy43NzAyIDkuMjk1NzUgMTMuOTk3NyA4LjY2MDc2IDEzLjk5ODkgOC4wMDUyNUMxNC4wMDAyIDcuMzQ5NzMgMTMuNzc1MiA2LjcxMzg2IDEzLjM2MiA2LjIwNUw4Ljk5NDAyIDAuOTQ5QzguNzUyIDAuNjUzNzk0IDguNDQ3NzkgMC40MTU2NjYgOC4xMDMxIDAuMjUxNjJDNy43NTg0MSAwLjA4NzU3MzMgNy4zODE3NSAwLjAwMTY1NDkzIDcuMDAwMDIgMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDAwMDIgMEM2LjYxNjcxIDAuMDAyMTU5MTMgNi4yMzg2MiAwLjA4OTA3ODUgNS44OTI4NSAwLjI1NDUzQzUuNTQ3MDggMC40MTk5ODEgNS4yNDIxOSAwLjY1OTg2OCA1LjAwMDAyIDAuOTU3TDAuNjQ1MDIzIDYuMTk3QzAuMjI5ODIgNi43MDQyNSAwLjAwMjM3OTM0IDcuMzM5MjQgMC4wMDExMDQwMyA3Ljk5NDc1Qy0wLjAwMDE3MTI4OSA4LjY1MDI3IDAuMjI0Nzk3IDkuMjg2MTQgMC42MzgwMjMgOS43OTVMNS4wMDYwMiAxNS4wNTFDNS41MDUwMiAxNS42NTEgNi4yMzEwMiAxNiA3LjAwMDAyIDE2QzcuMzgzMzMgMTUuOTk3OCA3Ljc2MTQyIDE1LjkxMDkgOC4xMDcxOSAxNS43NDU1QzguNDUyOTYgMTUuNTggOC43NTc4NiAxNS4zNDAxIDkuMDAwMDIgMTUuMDQzTDEzLjM1NSA5LjgwM0MxMy43NzAyIDkuMjk1NzUgMTMuOTk3NyA4LjY2MDc2IDEzLjk5ODkgOC4wMDUyNUMxNC4wMDAyIDcuMzQ5NzMgMTMuNzc1MiA2LjcxMzg2IDEzLjM2MiA2LjIwNUw4Ljk5NDAyIDAuOTQ5QzguNzUyIDAuNjUzNzk0IDguNDQ3NzkgMC40MTU2NjYgOC4xMDMxIDAuMjUxNjJDNy43NTg0MSAwLjA4NzU3MzMgNy4zODE3NSAwLjAwMTY1NDkzIDcuMDAwMDIgMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 235, 117);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM4NSAwQzExLjYzNzUgMy4xMTY0N2UtMDUgMTEuODg2NyAwLjA1NjIxNTggMTIuMTE0MiAwLjE2NDM5OUMxMi4zNDE3IDAuMjcyNTgyIDEyLjU0MTggMC40Mjk5OTYgMTIuNjk5NSAwLjYyNUwxNS44MTUzIDQuNDc5MTdDMTUuOTM0OCA0LjYyNjk3IDE2IDQuODEwNjYgMTYgNUMxNiA1LjE4OTM0IDE1LjkzNDggNS4zNzMwMyAxNS44MTUzIDUuNTIwODNMMTIuNjk5NSA5LjM3NDE3QzEyLjU0MTkgOS41NjkzMiAxMi4zNDE4IDkuNzI2OSAxMi4xMTQzIDkuODM1MjNDMTEuODg2OCA5Ljk0MzU1IDExLjYzNzUgOS45OTk4NyAxMS4zODUgMTBIMi41MjYyN0MxLjg1NjI2IDEwIDEuMjEzNjkgOS43MzY2MSAwLjczOTkyNiA5LjI2Nzc3QzAuMjY2MTU5IDguNzk4OTMgMCA4LjE2MzA0IDAgNy41VjIuNUMwIDEuODM2OTYgMC4yNjYxNTkgMS4yMDEwNyAwLjczOTkyNiAwLjczMjIzM0MxLjIxMzY5IDAuMjYzMzkyIDEuODU2MjYgMCAyLjUyNjI3IDBIMTEuMzg1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM4NSAwQzExLjYzNzUgMy4xMTY0N2UtMDUgMTEuODg2NyAwLjA1NjIxNTggMTIuMTE0MiAwLjE2NDM5OUMxMi4zNDE3IDAuMjcyNTgyIDEyLjU0MTggMC40Mjk5OTYgMTIuNjk5NSAwLjYyNUwxNS44MTUzIDQuNDc5MTdDMTUuOTM0OCA0LjYyNjk3IDE2IDQuODEwNjYgMTYgNUMxNiA1LjE4OTM0IDE1LjkzNDggNS4zNzMwMyAxNS44MTUzIDUuNTIwODNMMTIuNjk5NSA5LjM3NDE3QzEyLjU0MTkgOS41NjkzMiAxMi4zNDE4IDkuNzI2OSAxMi4xMTQzIDkuODM1MjNDMTEuODg2OCA5Ljk0MzU1IDExLjYzNzUgOS45OTk4NyAxMS4zODUgMTBIMi41MjYyN0MxLjg1NjI2IDEwIDEuMjEzNjkgOS43MzY2MSAwLjczOTkyNiA5LjI2Nzc3QzAuMjY2MTU5IDguNzk4OTMgMCA4LjE2MzA0IDAgNy41VjIuNUMwIDEuODM2OTYgMC4yNjYxNTkgMS4yMDEwNyAwLjczOTkyNiAwLjczMjIzM0MxLjIxMzY5IDAuMjYzMzkyIDEuODU2MjYgMCAyLjUyNjI3IDBIMTEuMzg1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk05LjM2NTYgNS4wMzQ0QzkuMjE1NTggNC44ODQ0MiA5LjAxMjEzIDQuODAwMTcgOC44IDQuODAwMTdDOC41ODc4NyA0LjgwMDE3IDguMzg0NDIgNC44ODQ0MiA4LjIzNDQgNS4wMzQ0TDUuODM0NCA3LjQzNDRMNS43NjggNy41MDk2QzUuNjQ4NiA3LjY2MzUyIDUuNTg5NDYgNy44NTU3MiA1LjYwMTY5IDguMDUwMTVDNS42MTM5MSA4LjI0NDU3IDUuNjk2NjYgOC40Mjc4NSA1LjgzNDQgOC41NjU2TDguMjM0NCAxMC45NjU2TDguMzA5NiAxMS4wMzJDOC40NjM1MiAxMS4xNTE0IDguNjU1NzIgMTEuMjEwNSA4Ljg1MDE1IDExLjE5ODNDOS4wNDQ1NyAxMS4xODYxIDkuMjI3ODUgMTEuMTAzMyA5LjM2NTYgMTAuOTY1Nkw5LjQzMiAxMC44OTA0QzkuNTUxNCAxMC43MzY1IDkuNjEwNTQgMTAuNTQ0MyA5LjU5ODMxIDEwLjM0OTlDOS41ODYwOSAxMC4xNTU0IDkuNTAzMzQgOS45NzIxNSA5LjM2NTYgOS44MzQ0TDcuNTMyIDhMOS4zNjU2IDYuMTY1Nkw5LjQzMiA2LjA5MDRDOS41NTE0IDUuOTM2NDggOS42MTA1NCA1Ljc0NDI4IDkuNTk4MzEgNS41NDk4NkM5LjU4NjA5IDUuMzU1NDMgOS41MDMzNCA1LjE3MjE1IDkuMzY1NiA1LjAzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw4LjI1OTIgMC4wMDA3OTk5NDJMOC41MTM2IDAuMDA0MDAwMDlMOS4wMDY0IDAuMDE3NjAwMUw5LjI0NTYgMC4wMjgwMDAxTDkuNzA4OCAwLjA1NTJMMTAuMTUxMiAwLjA5MkMxMy45NzkyIDAuNDYzMiAxNS41MzY4IDIuMDIwOCAxNS45MDggNS44NDg4TDE1Ljk0NDggNi4yOTEyTDE1Ljk3MiA2Ljc1NDRDMTUuOTc2IDYuODMyOCAxNS45OCA2LjkxMjggMTUuOTgyNCA2Ljk5MzZMMTUuOTk2IDcuNDg2NEwxNiA4TDE1Ljk5NiA4LjUxMzZMMTUuOTgyNCA5LjAwNjRMMTUuOTcyIDkuMjQ1NkwxNS45NDQ4IDkuNzA4OEwxNS45MDggMTAuMTUxMkMxNS41MzY4IDEzLjk3OTIgMTMuOTc5MiAxNS41MzY4IDEwLjE1MTIgMTUuOTA4TDkuNzA4OCAxNS45NDQ4TDkuMjQ1NiAxNS45NzJDOS4xNjcyIDE1Ljk3NiA5LjA4NzIgMTUuOTggOS4wMDY0IDE1Ljk4MjRMOC41MTM2IDE1Ljk5Nkw4IDE2TDcuNDg2NCAxNS45OTZMNi45OTM2IDE1Ljk4MjRMNi43NTQ0IDE1Ljk3Mkw2LjI5MTIgMTUuOTQ0OEw1Ljg0ODggMTUuOTA4QzIuMDIwOCAxNS41MzY4IDAuNDYzMiAxMy45NzkyIDAuMDkyIDEwLjE1MTJMMC4wNTUyIDkuNzA4OEwwLjAyODAwMDEgOS4yNDU2QzAuMDI0MTA4MiA5LjE2NTg5IDAuMDIwNjQxNSA5LjA4NjE1IDAuMDE3NjAwMSA5LjAwNjRMMC4wMDQwMDAwOSA4LjUxMzZDMC4wMDE2MDAwOSA4LjM0NTYgMCA4LjE3NDQgMCA4TDAuMDAwNzk5OTQyIDcuNzQwOEwwLjAwNDAwMDA5IDcuNDg2NEwwLjAxNzYwMDEgNi45OTM2TDAuMDI4MDAwMSA2Ljc1NDRMMC4wNTUyIDYuMjkxMkwwLjA5MiA1Ljg0ODhDMC40NjMyIDIuMDIwOCAyLjAyMDggMC40NjMyIDUuODQ4OCAwLjA5Mkw2LjI5MTIgMC4wNTUyTDYuNzU0NCAwLjAyODAwMDFDNi44MzI4IDAuMDI0MDAwMSA2LjkxMjggMC4wMjAwMDAxIDYuOTkzNiAwLjAxNzYwMDFMNy40ODY0IDAuMDA0MDAwMDlDNy42NTQ0IDAuMDAxNjAwMDkgNy44MjU2IDAgOCAwWk05LjM2NTYgNS4wMzQ0QzkuMjE1NTggNC44ODQ0MiA5LjAxMjEzIDQuODAwMTcgOC44IDQuODAwMTdDOC41ODc4NyA0LjgwMDE3IDguMzg0NDIgNC44ODQ0MiA4LjIzNDQgNS4wMzQ0TDUuODM0NCA3LjQzNDRMNS43NjggNy41MDk2QzUuNjQ4NiA3LjY2MzUyIDUuNTg5NDYgNy44NTU3MiA1LjYwMTY5IDguMDUwMTVDNS42MTM5MSA4LjI0NDU3IDUuNjk2NjYgOC40Mjc4NSA1LjgzNDQgOC41NjU2TDguMjM0NCAxMC45NjU2TDguMzA5NiAxMS4wMzJDOC40NjM1MiAxMS4xNTE0IDguNjU1NzIgMTEuMjEwNSA4Ljg1MDE1IDExLjE5ODNDOS4wNDQ1NyAxMS4xODYxIDkuMjI3ODUgMTEuMTAzMyA5LjM2NTYgMTAuOTY1Nkw5LjQzMiAxMC44OTA0QzkuNTUxNCAxMC43MzY1IDkuNjEwNTQgMTAuNTQ0MyA5LjU5ODMxIDEwLjM0OTlDOS41ODYwOSAxMC4xNTU0IDkuNTAzMzQgOS45NzIxNSA5LjM2NTYgOS44MzQ0TDcuNTMyIDhMOS4zNjU2IDYuMTY1Nkw5LjQzMiA2LjA5MDRDOS41NTE0IDUuOTM2NDggOS42MTA1NCA1Ljc0NDI4IDkuNTk4MzEgNS41NDk4NkM5LjU4NjA5IDUuMzU1NDMgOS41MDMzNCA1LjE3MjE1IDkuMzY1NiA1LjAzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIuODI4VjEwLjRDMTYgMTEuMDEyMiAxNS43NjYxIDExLjYwMTIgMTUuMzQ2MiAxMi4wNDY2QzE0LjkyNjIgMTIuNDkyIDE0LjM1MTkgMTIuNzYwMSAxMy43NDA4IDEyLjc5NkwxMy42IDEyLjhIMi40QzEuNzg3ODMgMTIuOCAxLjE5ODc5IDEyLjU2NjEgMC43NTMzOTEgMTIuMTQ2MkMwLjMwNzk5NCAxMS43MjYyIDAuMDM5OTE0IDExLjE1MTkgMC4wMDQwMDAwOSAxMC41NDA4TDAgMTAuNFYyLjgyOEw3LjU1NiA3Ljg2NTZMNy42NDg4IDcuOTE4NEM3Ljc1ODE2IDcuOTcxODQgNy44NzgyOCA3Ljk5OTYxIDggNy45OTk2MUM4LjEyMTcyIDcuOTk5NjEgOC4yNDE4NCA3Ljk3MTg0IDguMzUxMiA3LjkxODRMOC40NDQgNy44NjU2TDE2IDIuODI4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjYgMEMxNC40NjQgMCAxNS4yMjE2IDAuNDU2IDE1LjY0NCAxLjE0MTZMNy45OTk5NiA2LjIzNzZMMC4zNTU5NTcgMS4xNDE2QzAuNTU2NTQxIDAuODE1ODE0IDAuODMyMTI4IDAuNTQyNzIxIDEuMTU5NzIgMC4zNDUxMDZDMS40ODczMiAwLjE0NzQ5MSAxLjg1NzQyIDAuMDMxMDg1IDIuMjM5MTYgMC4wMDU1OTk5OEwyLjM5OTk2IDBIMTMuNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIuODI4VjEwLjRDMTYgMTEuMDEyMiAxNS43NjYxIDExLjYwMTIgMTUuMzQ2MiAxMi4wNDY2QzE0LjkyNjIgMTIuNDkyIDE0LjM1MTkgMTIuNzYwMSAxMy43NDA4IDEyLjc5NkwxMy42IDEyLjhIMi40QzEuNzg3ODMgMTIuOCAxLjE5ODc5IDEyLjU2NjEgMC43NTMzOTEgMTIuMTQ2MkMwLjMwNzk5NCAxMS43MjYyIDAuMDM5OTE0IDExLjE1MTkgMC4wMDQwMDAwOSAxMC41NDA4TDAgMTAuNFYyLjgyOEw3LjU1NiA3Ljg2NTZMNy42NDg4IDcuOTE4NEM3Ljc1ODE2IDcuOTcxODQgNy44NzgyOCA3Ljk5OTYxIDggNy45OTk2MUM4LjEyMTcyIDcuOTk5NjEgOC4yNDE4NCA3Ljk3MTg0IDguMzUxMiA3LjkxODRMOC40NDQgNy44NjU2TDE2IDIuODI4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjYgMEMxNC40NjQgMCAxNS4yMjE2IDAuNDU2IDE1LjY0NCAxLjE0MTZMNy45OTk5NiA2LjIzNzZMMC4zNTU5NTcgMS4xNDE2QzAuNTU2NTQxIDAuODE1ODE0IDAuODMyMTI4IDAuNTQyNzIxIDEuMTU5NzIgMC4zNDUxMDZDMS40ODczMiAwLjE0NzQ5MSAxLjg1NzQyIDAuMDMxMDg1IDIuMjM5MTYgMC4wMDU1OTk5OEwyLjM5OTk2IDBIMTMuNloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjggMEMxMy42NDg3IDAgMTQuNDYyNiAwLjMzMjcxNCAxNS4wNjI3IDAuOTI0OTQ4QzE1LjY2MjkgMS41MTcxOCAxNiAyLjMyMDQyIDE2IDMuMTU3OTdWOS40NzM5MUMxNiAxMC4zMTE1IDE1LjY2MjkgMTEuMTE0NyAxNS4wNjI3IDExLjcwNjlDMTQuNDYyNiAxMi4yOTkyIDEzLjY0ODcgMTIuNjMxOSAxMi44IDEyLjYzMTlIOS4wMjA4TDUuMjExMiAxNC44ODc1QzUuMDk2NDcgMTQuOTU1NCA0Ljk2NjMxIDE0Ljk5MzkgNC44MzI2MiAxNC45OTkzQzQuNjk4OTMgMTUuMDA0OCA0LjU2NTk5IDE0Ljk3NzEgNC40NDU5NyAxNC45MTg3QzQuMzI1OTQgMTQuODYwMyA0LjIyMjY3IDE0Ljc3MzIgNC4xNDU1OSAxNC42NjUzQzQuMDY4NTIgMTQuNTU3MyA0LjAyMDExIDE0LjQzMiA0LjAwNDggMTQuMzAwOUw0IDE0LjIxMDlWMTIuNjMxOUgzLjJDMi4zNzkwMSAxMi42MzE5IDEuNTg5NDIgMTIuMzIwNSAwLjk5NDU1MSAxMS43NjIxQzAuMzk5Njg0IDExLjIwMzcgMC4wNDUwNDk4IDEwLjQ0MSAwLjAwNDAwMDA5IDkuNjMxODFMMCA5LjQ3MzkxVjMuMTU3OTdDMCAyLjMyMDQyIDAuMzM3MTQyIDEuNTE3MTggMC45MzcyNTggMC45MjQ5NDhDMS41MzczNyAwLjMzMjcxNCAyLjM1MTMxIDAgMy4yIDBIMTIuOFpNOS42IDcuMTA1NDNINC44QzQuNTg3ODMgNy4xMDU0MyA0LjM4NDM0IDcuMTg4NjEgNC4yMzQzMSA3LjMzNjY3QzQuMDg0MjkgNy40ODQ3MyA0IDcuNjg1NTQgNCA3Ljg5NDkyQzQgOC4xMDQzMSA0LjA4NDI5IDguMzA1MTIgNC4yMzQzMSA4LjQ1MzE4QzQuMzg0MzQgOC42MDEyNCA0LjU4NzgzIDguNjg0NDIgNC44IDguNjg0NDJIOS42QzkuODEyMTcgOC42ODQ0MiAxMC4wMTU3IDguNjAxMjQgMTAuMTY1NyA4LjQ1MzE4QzEwLjMxNTcgOC4zMDUxMiAxMC40IDguMTA0MzEgMTAuNCA3Ljg5NDkyQzEwLjQgNy42ODU1NCAxMC4zMTU3IDcuNDg0NzMgMTAuMTY1NyA3LjMzNjY3QzEwLjAxNTcgNy4xODg2MSA5LjgxMjE3IDcuMTA1NDMgOS42IDcuMTA1NDNaTTExLjIgMy45NDc0Nkg0LjhDNC41ODc4MyAzLjk0NzQ2IDQuMzg0MzQgNC4wMzA2NCA0LjIzNDMxIDQuMTc4N0M0LjA4NDI5IDQuMzI2NzYgNCA0LjUyNzU3IDQgNC43MzY5NUM0IDQuOTQ2MzQgNC4wODQyOSA1LjE0NzE1IDQuMjM0MzEgNS4yOTUyMUM0LjM4NDM0IDUuNDQzMjcgNC41ODc4MyA1LjUyNjQ1IDQuOCA1LjUyNjQ1SDExLjJDMTEuNDEyMiA1LjUyNjQ1IDExLjYxNTcgNS40NDMyNyAxMS43NjU3IDUuMjk1MjFDMTEuOTE1NyA1LjE0NzE1IDEyIDQuOTQ2MzQgMTIgNC43MzY5NUMxMiA0LjUyNzU3IDExLjkxNTcgNC4zMjY3NiAxMS43NjU3IDQuMTc4N0MxMS42MTU3IDQuMDMwNjQgMTEuNDEyMiAzLjk0NzQ2IDExLjIgMy45NDc0NloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjggMEMxMy42NDg3IDAgMTQuNDYyNiAwLjMzMjcxNCAxNS4wNjI3IDAuOTI0OTQ4QzE1LjY2MjkgMS41MTcxOCAxNiAyLjMyMDQyIDE2IDMuMTU3OTdWOS40NzM5MUMxNiAxMC4zMTE1IDE1LjY2MjkgMTEuMTE0NyAxNS4wNjI3IDExLjcwNjlDMTQuNDYyNiAxMi4yOTkyIDEzLjY0ODcgMTIuNjMxOSAxMi44IDEyLjYzMTlIOS4wMjA4TDUuMjExMiAxNC44ODc1QzUuMDk2NDcgMTQuOTU1NCA0Ljk2NjMxIDE0Ljk5MzkgNC44MzI2MiAxNC45OTkzQzQuNjk4OTMgMTUuMDA0OCA0LjU2NTk5IDE0Ljk3NzEgNC40NDU5NyAxNC45MTg3QzQuMzI1OTQgMTQuODYwMyA0LjIyMjY3IDE0Ljc3MzIgNC4xNDU1OSAxNC42NjUzQzQuMDY4NTIgMTQuNTU3MyA0LjAyMDExIDE0LjQzMiA0LjAwNDggMTQuMzAwOUw0IDE0LjIxMDlWMTIuNjMxOUgzLjJDMi4zNzkwMSAxMi42MzE5IDEuNTg5NDIgMTIuMzIwNSAwLjk5NDU1MSAxMS43NjIxQzAuMzk5Njg0IDExLjIwMzcgMC4wNDUwNDk4IDEwLjQ0MSAwLjAwNDAwMDA5IDkuNjMxODFMMCA5LjQ3MzkxVjMuMTU3OTdDMCAyLjMyMDQyIDAuMzM3MTQyIDEuNTE3MTggMC45MzcyNTggMC45MjQ5NDhDMS41MzczNyAwLjMzMjcxNCAyLjM1MTMxIDAgMy4yIDBIMTIuOFpNOS42IDcuMTA1NDNINC44QzQuNTg3ODMgNy4xMDU0MyA0LjM4NDM0IDcuMTg4NjEgNC4yMzQzMSA3LjMzNjY3QzQuMDg0MjkgNy40ODQ3MyA0IDcuNjg1NTQgNCA3Ljg5NDkyQzQgOC4xMDQzMSA0LjA4NDI5IDguMzA1MTIgNC4yMzQzMSA4LjQ1MzE4QzQuMzg0MzQgOC42MDEyNCA0LjU4NzgzIDguNjg0NDIgNC44IDguNjg0NDJIOS42QzkuODEyMTcgOC42ODQ0MiAxMC4wMTU3IDguNjAxMjQgMTAuMTY1NyA4LjQ1MzE4QzEwLjMxNTcgOC4zMDUxMiAxMC40IDguMTA0MzEgMTAuNCA3Ljg5NDkyQzEwLjQgNy42ODU1NCAxMC4zMTU3IDcuNDg0NzMgMTAuMTY1NyA3LjMzNjY3QzEwLjAxNTcgNy4xODg2MSA5LjgxMjE3IDcuMTA1NDMgOS42IDcuMTA1NDNaTTExLjIgMy45NDc0Nkg0LjhDNC41ODc4MyAzLjk0NzQ2IDQuMzg0MzQgNC4wMzA2NCA0LjIzNDMxIDQuMTc4N0M0LjA4NDI5IDQuMzI2NzYgNCA0LjUyNzU3IDQgNC43MzY5NUM0IDQuOTQ2MzQgNC4wODQyOSA1LjE0NzE1IDQuMjM0MzEgNS4yOTUyMUM0LjM4NDM0IDUuNDQzMjcgNC41ODc4MyA1LjUyNjQ1IDQuOCA1LjUyNjQ1SDExLjJDMTEuNDEyMiA1LjUyNjQ1IDExLjYxNTcgNS40NDMyNyAxMS43NjU3IDUuMjk1MjFDMTEuOTE1NyA1LjE0NzE1IDEyIDQuOTQ2MzQgMTIgNC43MzY5NUMxMiA0LjUyNzU3IDExLjkxNTcgNC4zMjY3NiAxMS43NjU3IDQuMTc4N0MxMS42MTU3IDQuMDMwNjQgMTEuNDEyMiAzLjk0NzQ2IDExLjIgMy45NDc0NloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjYxODUgMC4xOTQzOTNMMTAuNzA0NCAwLjI3MDI3MkwxNS43MzM5IDUuMjk4NDZDMTUuODg4IDUuNDUzNCAxNS45ODE2IDUuNjU4NDIgMTUuOTk3NiA1Ljg3NjM3QzE2LjAxMzUgNi4wOTQzMSAxNS45NTA5IDYuMzEwNzcgMTUuODIxIDYuNDg2NTNDMTUuNjkxMSA2LjY2MjI4IDE1LjUwMjUgNi43ODU2OSAxNS4yODk0IDYuODM0NEMxNS4wNzYzIDYuODgzMTIgMTQuODUyOCA2Ljg1MzkxIDE0LjY1OTQgNi43NTIwN0wxMS43NTg4IDkuNjUxMDVMMTAuNDU2NiAxMy4xMjIzQzEwLjQyMjMgMTMuMjEzOSAxMC4zNzM1IDEzLjI5OTQgMTAuMzEyMSAxMy4zNzU2TDEwLjI0ODEgMTMuNDQ4N0w4Ljg3NjQ1IDE0LjgyQzguNzE4ODcgMTQuOTc3MyA4LjUwOTMxIDE1LjA3MTcgOC4yODcwOCAxNS4wODU1QzguMDY0ODUgMTUuMDk5MyA3Ljg0NTIxIDE1LjAzMTYgNy42NjkzOCAxNC44OTVMNy41ODI1MSAxNC44MTkxTDUuMDI4NDYgMTIuMjY2NkwxLjU1OTk2IDE1LjczMzNDMS4zOTU0IDE1Ljg5NzMgMS4xNzQ1OCAxNS45OTI1IDAuOTQyMzU5IDE1Ljk5OTZDMC43MTAxMzYgMTYuMDA2NyAwLjQ4MzkyIDE1LjkyNTEgMC4zMDk2NTggMTUuNzcxNUMwLjEzNTM5NyAxNS42MTc5IDAuMDI2MTU1NiAxNS40MDM3IDAuMDA0MTIzMjkgMTUuMTcyNUMtMC4wMTc5MDkgMTQuOTQxMyAwLjA0ODkxOTQgMTQuNzEwMyAwLjE5MTAzNSAxNC41MjY2TDAuMjY2OTM0IDE0LjQ0MDZMMy43MzQ1MiAxMC45NzNMMS4xODEzOCA4LjQxOTZDMS4wMjM5MyA4LjI2MjE4IDAuOTI5MzUyIDguMDUyNzMgMC45MTUzNzggNy44MzA1NUMwLjkwMTQwNCA3LjYwODM3IDAuOTY4OTk5IDcuMzg4NzMgMS4xMDU0OCA3LjIxMjgzTDEuMTgxMzggNy4xMjY5TDIuNTUzMDUgNS43NTU1N0MyLjYyMjA1IDUuNjg2MzQgMi43MDE3IDUuNjI4NjMgMi43ODg5OCA1LjU4NDYxTDIuODc4NTkgNS41NDYyMkw2LjM0OTgzIDQuMjQzNDZMOS4yNDk1NCAxLjM0NTM5QzkuMTUwNjYgMS4xNjA1NyA5LjExODMxIDAuOTQ3Mzg0IDkuMTU3OTEgMC43NDE1NTVDOS4xOTc1IDAuNTM1NzI1IDkuMzA2NjQgMC4zNDk3NDkgOS40NjcwNCAwLjIxNDc3N0M5LjYyNzQ0IDAuMDc5ODA0NSA5LjgyOTM2IDAuMDA0MDMzOTYgMTAuMDM5IDAuMDAwMTU2NTUxQzEwLjI0ODYgLTAuMDAzNzIwODYgMTAuNDUzMiAwLjA2NTQ0NDcgMTAuNjE4NSAwLjE5NDM5M1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjYxODUgMC4xOTQzOTNMMTAuNzA0NCAwLjI3MDI3MkwxNS43MzM5IDUuMjk4NDZDMTUuODg4IDUuNDUzNCAxNS45ODE2IDUuNjU4NDIgMTUuOTk3NiA1Ljg3NjM3QzE2LjAxMzUgNi4wOTQzMSAxNS45NTA5IDYuMzEwNzcgMTUuODIxIDYuNDg2NTNDMTUuNjkxMSA2LjY2MjI4IDE1LjUwMjUgNi43ODU2OSAxNS4yODk0IDYuODM0NEMxNS4wNzYzIDYuODgzMTIgMTQuODUyOCA2Ljg1MzkxIDE0LjY1OTQgNi43NTIwN0wxMS43NTg4IDkuNjUxMDVMMTAuNDU2NiAxMy4xMjIzQzEwLjQyMjMgMTMuMjEzOSAxMC4zNzM1IDEzLjI5OTQgMTAuMzEyMSAxMy4zNzU2TDEwLjI0ODEgMTMuNDQ4N0w4Ljg3NjQ1IDE0LjgyQzguNzE4ODcgMTQuOTc3MyA4LjUwOTMxIDE1LjA3MTcgOC4yODcwOCAxNS4wODU1QzguMDY0ODUgMTUuMDk5MyA3Ljg0NTIxIDE1LjAzMTYgNy42NjkzOCAxNC44OTVMNy41ODI1MSAxNC44MTkxTDUuMDI4NDYgMTIuMjY2NkwxLjU1OTk2IDE1LjczMzNDMS4zOTU0IDE1Ljg5NzMgMS4xNzQ1OCAxNS45OTI1IDAuOTQyMzU5IDE1Ljk5OTZDMC43MTAxMzYgMTYuMDA2NyAwLjQ4MzkyIDE1LjkyNTEgMC4zMDk2NTggMTUuNzcxNUMwLjEzNTM5NyAxNS42MTc5IDAuMDI2MTU1NiAxNS40MDM3IDAuMDA0MTIzMjkgMTUuMTcyNUMtMC4wMTc5MDkgMTQuOTQxMyAwLjA0ODkxOTQgMTQuNzEwMyAwLjE5MTAzNSAxNC41MjY2TDAuMjY2OTM0IDE0LjQ0MDZMMy43MzQ1MiAxMC45NzNMMS4xODEzOCA4LjQxOTZDMS4wMjM5MyA4LjI2MjE4IDAuOTI5MzUyIDguMDUyNzMgMC45MTUzNzggNy44MzA1NUMwLjkwMTQwNCA3LjYwODM3IDAuOTY4OTk5IDcuMzg4NzMgMS4xMDU0OCA3LjIxMjgzTDEuMTgxMzggNy4xMjY5TDIuNTUzMDUgNS43NTU1N0MyLjYyMjA1IDUuNjg2MzQgMi43MDE3IDUuNjI4NjMgMi43ODg5OCA1LjU4NDYxTDIuODc4NTkgNS41NDYyMkw2LjM0OTgzIDQuMjQzNDZMOS4yNDk1NCAxLjM0NTM5QzkuMTUwNjYgMS4xNjA1NyA5LjExODMxIDAuOTQ3Mzg0IDkuMTU3OTEgMC43NDE1NTVDOS4xOTc1IDAuNTM1NzI1IDkuMzA2NjQgMC4zNDk3NDkgOS40NjcwNCAwLjIxNDc3N0M5LjYyNzQ0IDAuMDc5ODA0NSA5LjgyOTM2IDAuMDA0MDMzOTYgMTAuMDM5IDAuMDAwMTU2NTUxQzEwLjI0ODYgLTAuMDAzNzIwODYgMTAuNDUzMiAwLjA2NTQ0NDcgMTAuNjE4NSAwLjE5NDM5M1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU5NTYgMS40MDQ0NUMxNS40OTQ4IDIuMzAzODMgMTYgMy41MjM1OCAxNiA0Ljc5NTQxQzE2IDYuMDY3MjQgMTUuNDk0OCA3LjI4Njk4IDE0LjU5NTYgOC4xODYzN0w4LjE0NzMzIDE0LjYzNDZDNy4yNDQ0NCAxNS41MTY3IDYuMDMwMTggMTYuMDA3MyA0Ljc2Nzk0IDE1Ljk5OTlDMy41MDU2OSAxNS45OTI2IDIuMjk3MjMgMTUuNDg3OSAxLjQwNDY4IDE0LjU5NTNDMC41MTIxMTkgMTMuNzAyOCAwLjAwNzQzMjAzIDEyLjQ5NDMgOC4xNDI3ZS0wNSAxMS4yMzIxQy0wLjAwNzI2OTE4IDkuOTY5ODIgMC40ODMzMDkgOC43NTU1NiAxLjM2NTQxIDcuODUyNjdMNy44MTM2MyAxLjQwNDQ1QzguNzEzMDIgMC41MDUxODggOS45MzI3NiAwIDExLjIwNDYgMEMxMi40NzY0IDAgMTMuNjk2MiAwLjUwNTE4OCAxNC41OTU2IDEuNDA0NDVaTTguOTUzMzYgMi41NDQxN0w1LjQ5MjI3IDYuMDA0NDVMOS45OTQ3NSAxMC41MDY5TDEzLjQ1NTggNy4wNDc0NUMxMy43NTUgNi43NTI1OCAxMy45OTI4IDYuNDAxNDQgMTQuMTU1NiA2LjAxNDI2QzE0LjMxODQgNS42MjcwOCAxNC40MDMgNS4yMTE1MSAxNC40MDQ1IDQuNzkxNDhDMTQuNDA2IDQuMzcxNDYgMTQuMzI0NCAzLjk1NTI5IDE0LjE2NDQgMy41NjY5NUMxNC4wMDQzIDMuMTc4NjEgMTMuNzY5IDIuODI1NzggMTMuNDcyIDIuNTI4NzhDMTMuMTc1IDIuMjMxNzggMTIuODIyMiAxLjk5NjQ4IDEyLjQzMzkgMS44MzY0NEMxMi4wNDU1IDEuNjc2MzkgMTEuNjI5MyAxLjU5NDc4IDExLjIwOTMgMS41OTYyOEMxMC43ODkzIDEuNTk3NzkgMTAuMzczNyAxLjY4MjM5IDkuOTg2NTQgMS44NDUyMUM5LjU5OTM2IDIuMDA4MDMgOS4yNDgyMiAyLjI0NTg1IDguOTUzMzYgMi41NDQ5OCIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU5NTYgMS40MDQ0NUMxNS40OTQ4IDIuMzAzODMgMTYgMy41MjM1OCAxNiA0Ljc5NTQxQzE2IDYuMDY3MjQgMTUuNDk0OCA3LjI4Njk4IDE0LjU5NTYgOC4xODYzN0w4LjE0NzMzIDE0LjYzNDZDNy4yNDQ0NCAxNS41MTY3IDYuMDMwMTggMTYuMDA3MyA0Ljc2Nzk0IDE1Ljk5OTlDMy41MDU2OSAxNS45OTI2IDIuMjk3MjMgMTUuNDg3OSAxLjQwNDY4IDE0LjU5NTNDMC41MTIxMTkgMTMuNzAyOCAwLjAwNzQzMjAzIDEyLjQ5NDMgOC4xNDI3ZS0wNSAxMS4yMzIxQy0wLjAwNzI2OTE4IDkuOTY5ODIgMC40ODMzMDkgOC43NTU1NiAxLjM2NTQxIDcuODUyNjdMNy44MTM2MyAxLjQwNDQ1QzguNzEzMDIgMC41MDUxODggOS45MzI3NiAwIDExLjIwNDYgMEMxMi40NzY0IDAgMTMuNjk2MiAwLjUwNTE4OCAxNC41OTU2IDEuNDA0NDVaTTguOTUzMzYgMi41NDQxN0w1LjQ5MjI3IDYuMDA0NDVMOS45OTQ3NSAxMC41MDY5TDEzLjQ1NTggNy4wNDc0NUMxMy43NTUgNi43NTI1OCAxMy45OTI4IDYuNDAxNDQgMTQuMTU1NiA2LjAxNDI2QzE0LjMxODQgNS42MjcwOCAxNC40MDMgNS4yMTE1MSAxNC40MDQ1IDQuNzkxNDhDMTQuNDA2IDQuMzcxNDYgMTQuMzI0NCAzLjk1NTI5IDE0LjE2NDQgMy41NjY5NUMxNC4wMDQzIDMuMTc4NjEgMTMuNzY5IDIuODI1NzggMTMuNDcyIDIuNTI4NzhDMTMuMTc1IDIuMjMxNzggMTIuODIyMiAxLjk5NjQ4IDEyLjQzMzkgMS44MzY0NEMxMi4wNDU1IDEuNjc2MzkgMTEuNjI5MyAxLjU5NDc4IDExLjIwOTMgMS41OTYyOEMxMC43ODkzIDEuNTk3NzkgMTAuMzczNyAxLjY4MjM5IDkuOTg2NTQgMS44NDUyMUM5LjU5OTM2IDIuMDA4MDMgOS4yNDgyMiAyLjI0NTg1IDguOTUzMzYgMi41NDQ5OCIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(61, 201, 219);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk02LjYzNDQgNS4wMzQ0QzYuNzcyMTUgNC44OTY2NiA2Ljk1NTQzIDQuODEzOTEgNy4xNDk4NiA0LjgwMTY5QzcuMzQ0MjggNC43ODk0NiA3LjUzNjQ4IDQuODQ4NiA3LjY5MDQgNC45NjhMNy43NjU2IDUuMDM0NEwxMC4xNjU2IDcuNDM0NEMxMC4zMDMzIDcuNTcyMTUgMTAuMzg2MSA3Ljc1NTQzIDEwLjM5ODMgNy45NDk4NkMxMC40MTA1IDguMTQ0MjggMTAuMzUxNCA4LjMzNjQ4IDEwLjIzMiA4LjQ5MDRMMTAuMTY1NiA4LjU2NTZMNy43NjU2IDEwLjk2NTZDNy42MjE2MyAxMS4xMDkxIDcuNDI4NDUgMTEuMTkyNCA3LjIyNTI5IDExLjE5ODZDNy4wMjIxMyAxMS4yMDQ4IDYuODI0MjMgMTEuMTMzNCA2LjY3MTc4IDEwLjk5OUM2LjUxOTMzIDEwLjg2NDYgNi40MjM3NiAxMC42NzcyIDYuNDA0NDggMTAuNDc0OEM2LjM4NTIxIDEwLjI3MjUgNi40NDM2NyAxMC4wNzA0IDYuNTY4IDkuOTA5Nkw2LjYzNDQgOS44MzQ0TDguNDY4IDhMNi42MzQ0IDYuMTY1NkM2LjQ5NjY2IDYuMDI3ODUgNi40MTM5MSA1Ljg0NDU3IDYuNDAxNjkgNS42NTAxNUM2LjM4OTQ2IDUuNDU1NzIgNi40NDg2IDUuMjYzNTIgNi41NjggNS4xMDk2TDYuNjM0NCA1LjAzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk02LjYzNDQgNS4wMzQ0QzYuNzcyMTUgNC44OTY2NiA2Ljk1NTQzIDQuODEzOTEgNy4xNDk4NiA0LjgwMTY5QzcuMzQ0MjggNC43ODk0NiA3LjUzNjQ4IDQuODQ4NiA3LjY5MDQgNC45NjhMNy43NjU2IDUuMDM0NEwxMC4xNjU2IDcuNDM0NEMxMC4zMDMzIDcuNTcyMTUgMTAuMzg2MSA3Ljc1NTQzIDEwLjM5ODMgNy45NDk4NkMxMC40MTA1IDguMTQ0MjggMTAuMzUxNCA4LjMzNjQ4IDEwLjIzMiA4LjQ5MDRMMTAuMTY1NiA4LjU2NTZMNy43NjU2IDEwLjk2NTZDNy42MjE2MyAxMS4xMDkxIDcuNDI4NDUgMTEuMTkyNCA3LjIyNTI5IDExLjE5ODZDNy4wMjIxMyAxMS4yMDQ4IDYuODI0MjMgMTEuMTMzNCA2LjY3MTc4IDEwLjk5OUM2LjUxOTMzIDEwLjg2NDYgNi40MjM3NiAxMC42NzcyIDYuNDA0NDggMTAuNDc0OEM2LjM4NTIxIDEwLjI3MjUgNi40NDM2NyAxMC4wNzA0IDYuNTY4IDkuOTA5Nkw2LjYzNDQgOS44MzQ0TDguNDY4IDhMNi42MzQ0IDYuMTY1NkM2LjQ5NjY2IDYuMDI3ODUgNi40MTM5MSA1Ljg0NDU3IDYuNDAxNjkgNS42NTAxNUM2LjM4OTQ2IDUuNDU1NzIgNi40NDg2IDUuMjYzNTIgNi41NjggNS4xMDk2TDYuNjM0NCA1LjAzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcyMDEgMTUuOTk1NEMxMC43OTgxIDE1Ljk0MzkgOS41OTA2IDE1LjM0MzggOC4wMjcwMSAxNC4yMDg5TDcuOTk3ODggMTQuMTg4NEw3Ljk3MDkzIDE0LjIwODlDNi40MDczNSAxNS4zNDQ2IDUuMjAwNjEgMTUuOTQ0NiA0LjI3NzE2IDE1Ljk5NjJMNC4xNDc1MyAxNkMyLjE0Njk4IDE2IDEuODkyMDkgMTMuOTk3MyAyLjg5NjM3IDEwLjUwNDZMMi45MzU3IDEwLjM2OTVMMi44NjI4NyAxMC4zMTI2Qy0xLjU0NzUyIDYuNzk0MTggLTAuODExOTY3IDQuMzU5MDIgNC43MjI4NiA0LjE5MzY0TDQuODY5OTcgNC4xODk4NEw0Ljk1MzcyIDMuOTQyNTNDNS44MTU5OSAxLjQxNjM0IDYuNzIwNSAwLjA4NDk2NTIgNy44ODY0NiAwLjAwMzc5MzA4TDguMDAwMDcgMEM5LjIxOTE4IDAgMTAuMTUzNiAxLjMzNTE3IDExLjA0NTcgMy45NDI1M0wxMS4xMjg3IDQuMTg5ODRMMTEuMjc3MyA0LjE5MzY0QzE2LjgxMjEgNC4zNTkwMiAxNy41NDc2IDYuNzk0MTggMTMuMTM2NSAxMC4zMTE5TDEzLjA2MjMgMTAuMzY4OEwxMy4xMDIzIDEwLjUwMzhDMTQuMDg1NSAxMy45MjY3IDEzLjg1OTcgMTUuOTE4MSAxMS45NjkxIDE1Ljk5NjJMMTEuODUwNCAxNS45OTg1TDExLjcyMDEgMTUuOTk1NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjcyMDEgMTUuOTk1NEMxMC43OTgxIDE1Ljk0MzkgOS41OTA2IDE1LjM0MzggOC4wMjcwMSAxNC4yMDg5TDcuOTk3ODggMTQuMTg4NEw3Ljk3MDkzIDE0LjIwODlDNi40MDczNSAxNS4zNDQ2IDUuMjAwNjEgMTUuOTQ0NiA0LjI3NzE2IDE1Ljk5NjJMNC4xNDc1MyAxNkMyLjE0Njk4IDE2IDEuODkyMDkgMTMuOTk3MyAyLjg5NjM3IDEwLjUwNDZMMi45MzU3IDEwLjM2OTVMMi44NjI4NyAxMC4zMTI2Qy0xLjU0NzUyIDYuNzk0MTggLTAuODExOTY3IDQuMzU5MDIgNC43MjI4NiA0LjE5MzY0TDQuODY5OTcgNC4xODk4NEw0Ljk1MzcyIDMuOTQyNTNDNS44MTU5OSAxLjQxNjM0IDYuNzIwNSAwLjA4NDk2NTIgNy44ODY0NiAwLjAwMzc5MzA4TDguMDAwMDcgMEM5LjIxOTE4IDAgMTAuMTUzNiAxLjMzNTE3IDExLjA0NTcgMy45NDI1M0wxMS4xMjg3IDQuMTg5ODRMMTEuMjc3MyA0LjE5MzY0QzE2LjgxMjEgNC4zNTkwMiAxNy41NDc2IDYuNzk0MTggMTMuMTM2NSAxMC4zMTE5TDEzLjA2MjMgMTAuMzY4OEwxMy4xMDIzIDEwLjUwMzhDMTQuMDg1NSAxMy45MjY3IDEzLjg1OTcgMTUuOTE4MSAxMS45NjkxIDE1Ljk5NjJMMTEuODUwNCAxNS45OTg1TDExLjcyMDEgMTUuOTk1NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 61);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTA3NDUgMC4wMDU1OTk5N0w3Ljk5ODc3IDBMOC4wOTMyOSAwLjAwNTU5OTk3TDguMTQwNTUgMC4wMTIwMDAxTDguMTg5NDEgMC4wMjI0MDAxTDguMjc4MzMgMC4wNDk2QzguMzM5NzQgMC4wNzIyMTA1IDguMzk4MTIgMC4xMDIzMDUgOC40NTIxNSAwLjEzOTJMOC41MzU0NiAwLjIwNDhMOC43Mzk3MiAwLjM3OTJDMTAuMzU1NiAxLjcxOTY1IDEyLjM5NzkgMi40Mzk0NCAxNC40OTgzIDIuNDA4OEwxNC43NzIyIDIuNDAwOEMxNC45NTEzIDIuMzkyNjQgMTUuMTI4IDIuNDQ0NzIgMTUuMjczOSAyLjU0ODcyQzE1LjQxOTkgMi42NTI3MSAxNS41MjY3IDIuODAyNiAxNS41NzczIDIuOTc0NEMxNS45NzA5IDQuMzExNjYgMTYuMDkxMyA1LjcxNDMgMTUuOTMxNCA3LjA5ODk3QzE1Ljc3MTYgOC40ODM2NCAxNS4zMzQ2IDkuODIyMDkgMTQuNjQ2NiAxMS4wMzQ4QzEzLjk1ODUgMTIuMjQ3NSAxMy4wMzM0IDEzLjMwOTYgMTEuOTI2MiAxNC4xNTgyQzEwLjgxOSAxNS4wMDY4IDkuNTUyMzUgMTUuNjI0NCA4LjIwMTQzIDE1Ljk3NDRDOC4wNjk1NyAxNi4wMDg1IDcuOTMxMTcgMTYuMDA4NSA3Ljc5OTMyIDE1Ljk3NDRDNi40NDgzMyAxNS42MjQ1IDUuMTgxNTUgMTUuMDA2OSA0LjA3NDI2IDE0LjE1ODRDMi45NjY5OCAxMy4zMDk5IDIuMDQxNzggMTIuMjQ3NyAxLjM1MzY2IDExLjAzNUMwLjY2NTUzNCA5LjgyMjMxIDAuMjI4NTIyIDguNDgzODMgMC4wNjg1OTI5IDcuMDk5MTJDLTAuMDkxMzM2MiA1LjcxNDQxIDAuMDI5MDgxNCA0LjMxMTcxIDAuNDIyNjkgMi45NzQ0QzAuNDczMjQyIDIuODAyNiAwLjU4MDA0MiAyLjY1MjcxIDAuNzI1OTk1IDIuNTQ4NzJDMC44NzE5NDggMi40NDQ3MiAxLjA0ODYxIDIuMzkyNjQgMS4yMjc3MiAyLjQwMDhDMy40MjA0OSAyLjUwMDkxIDUuNTcxNzIgMS43Nzk5OSA3LjI2MDIzIDAuMzc5Mkw3LjQ3MDkgMC4xOTkyTDcuNTQ3NzkgMC4xMzkyQzcuNjAxODIgMC4xMDIzMDUgNy42NjAyMSAwLjA3MjIxMDUgNy43MjE2MiAwLjA0OTZMNy44MTEzMyAwLjAyMjQwMDFDNy44NDI3MiAwLjAxNDgyNyA3Ljg3NTM2IDAuMDA5MjE2IDcuOTA3NDUgMC4wMDU1OTk5N1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTA3NDUgMC4wMDU1OTk5N0w3Ljk5ODc3IDBMOC4wOTMyOSAwLjAwNTU5OTk3TDguMTQwNTUgMC4wMTIwMDAxTDguMTg5NDEgMC4wMjI0MDAxTDguMjc4MzMgMC4wNDk2QzguMzM5NzQgMC4wNzIyMTA1IDguMzk4MTIgMC4xMDIzMDUgOC40NTIxNSAwLjEzOTJMOC41MzU0NiAwLjIwNDhMOC43Mzk3MiAwLjM3OTJDMTAuMzU1NiAxLjcxOTY1IDEyLjM5NzkgMi40Mzk0NCAxNC40OTgzIDIuNDA4OEwxNC43NzIyIDIuNDAwOEMxNC45NTEzIDIuMzkyNjQgMTUuMTI4IDIuNDQ0NzIgMTUuMjczOSAyLjU0ODcyQzE1LjQxOTkgMi42NTI3MSAxNS41MjY3IDIuODAyNiAxNS41NzczIDIuOTc0NEMxNS45NzA5IDQuMzExNjYgMTYuMDkxMyA1LjcxNDMgMTUuOTMxNCA3LjA5ODk3QzE1Ljc3MTYgOC40ODM2NCAxNS4zMzQ2IDkuODIyMDkgMTQuNjQ2NiAxMS4wMzQ4QzEzLjk1ODUgMTIuMjQ3NSAxMy4wMzM0IDEzLjMwOTYgMTEuOTI2MiAxNC4xNTgyQzEwLjgxOSAxNS4wMDY4IDkuNTUyMzUgMTUuNjI0NCA4LjIwMTQzIDE1Ljk3NDRDOC4wNjk1NyAxNi4wMDg1IDcuOTMxMTcgMTYuMDA4NSA3Ljc5OTMyIDE1Ljk3NDRDNi40NDgzMyAxNS42MjQ1IDUuMTgxNTUgMTUuMDA2OSA0LjA3NDI2IDE0LjE1ODRDMi45NjY5OCAxMy4zMDk5IDIuMDQxNzggMTIuMjQ3NyAxLjM1MzY2IDExLjAzNUMwLjY2NTUzNCA5LjgyMjMxIDAuMjI4NTIyIDguNDgzODMgMC4wNjg1OTI5IDcuMDk5MTJDLTAuMDkxMzM2MiA1LjcxNDQxIDAuMDI5MDgxNCA0LjMxMTcxIDAuNDIyNjkgMi45NzQ0QzAuNDczMjQyIDIuODAyNiAwLjU4MDA0MiAyLjY1MjcxIDAuNzI1OTk1IDIuNTQ4NzJDMC44NzE5NDggMi40NDQ3MiAxLjA0ODYxIDIuMzkyNjQgMS4yMjc3MiAyLjQwMDhDMy40MjA0OSAyLjUwMDkxIDUuNTcxNzIgMS43Nzk5OSA3LjI2MDIzIDAuMzc5Mkw3LjQ3MDkgMC4xOTkyTDcuNTQ3NzkgMC4xMzkyQzcuNjAxODIgMC4xMDIzMDUgNy42NjAyMSAwLjA3MjIxMDUgNy43MjE2MiAwLjA0OTZMNy44MTEzMyAwLjAyMjQwMDFDNy44NDI3MiAwLjAxNDgyNyA3Ljg3NTM2IDAuMDA5MjE2IDcuOTA3NDUgMC4wMDU1OTk5N1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 155, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjYzMTQgMy45MjQ1OWUtMDlDOS45MDc1MyAtMy41ODkyZS0wNSAxMC41Mjc2IDAuMjQ2MTY5IDEwLjk5NjQgMC42ODgyMzlDMTEuNDY1MiAxLjEzMDMxIDExLjc0NzQgMS43MzQ4MyAxMS43ODUyIDIuMzc4MTFMMTEuNzg5NSAyLjUyNjMyVjUuODk0NzRIMTMuNDczN0MxNC4wOTI3IDUuODk0NjQgMTQuNjkwMyA2LjEyMTg0IDE1LjE1MjkgNi41MzMyMUMxNS42MTU1IDYuOTQ0NTggMTUuOTEwOSA3LjUxMTQ5IDE1Ljk4MzEgOC4xMjYzMkwxNS45OTU4IDguMjcyODRMMTYgOC40MjEwNUwxNS45ODMxIDguNTg2MTFMMTUuMTM2IDEyLjgyMzZDMTQuODE1MSAxNC4xOTI4IDEzLjg3MTEgMTUuMTc4MSAxMi43Njk3IDE1LjE2NDZMMTIuNjMxNiAxNS4xNTc5SDUuODk0NzJDNS42ODg0NiAxNS4xNTc5IDUuNDg5MzggMTUuMDgyMSA1LjMzNTI1IDE0Ljk0NTFDNS4xODExMSAxNC44MDggNS4wODI2NCAxNC42MTkyIDUuMDU4NTEgMTQuNDE0M0w1LjA1MjYxIDE0LjMxNThMNS4wNTM0NSA2LjI4NTQ3QzUuMDUzNjEgNi4xMzc4IDUuMDkyNTkgNS45OTI3NiA1LjE2NjQ5IDUuODY0OTFDNS4yNDAzOSA1LjczNzA2IDUuMzQ2NjIgNS42MzA4OSA1LjQ3NDUxIDUuNTU3MDVDNS44MzM2IDUuMzQ5NjYgNi4xMzYwOCA1LjA1NzAxIDYuMzU1MjEgNC43MDQ5NUM2LjU3NDM1IDQuMzUyOSA2LjcwMzM5IDMuOTUyMjkgNi43MzA5MyAzLjUzODUzTDYuNzM2ODIgMy4zNjg0MlYyLjUyNjMyQzYuNzM2ODIgMS44NTYzIDcuMDAyOTkgMS4yMTM3MiA3LjQ3Njc2IDAuNzM5OTQxQzcuOTUwNTQgMC4yNjYxNjUgOC41OTMxMiAzLjkyNDU5ZS0wOSA5LjI2MzE0IDMuOTI0NTllLTA5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuNTI2MzIgNS44OTQ3NEMyLjczMjU4IDUuODk0NzYgMi45MzE2NSA1Ljk3MDQ5IDMuMDg1NzkgNi4xMDc1NUMzLjIzOTkyIDYuMjQ0NjEgMy4zMzgzOSA2LjQzMzQ3IDMuMzYyNTMgNi42MzgzMkwzLjM2ODQyIDYuNzM2ODRWMTQuMzE1OEMzLjM2ODM5IDE0LjUyMiAzLjI5MjY3IDE0LjcyMTEgMy4xNTU2MSAxNC44NzUzQzMuMDE4NTUgMTUuMDI5NCAyLjgyOTY5IDE1LjEyNzkgMi42MjQ4NCAxNS4xNTJMMi41MjYzMiAxNS4xNTc5SDEuNjg0MjFDMS4yNTkzIDE1LjE1OCAwLjg1MDA0OSAxNC45OTc2IDAuNTM4NDg2IDE0LjcwODZDMC4yMjY5MjMgMTQuNDE5NyAwLjAzNjA3ODcgMTQuMDIzNyAwLjAwNDIxMDcxIDEzLjZMOC40NDM2MmUtMDggMTMuNDczN1Y3LjU3ODk1Qy0wLjAwMDEzNDM4MyA3LjE1NDA0IDAuMTYwMzQyIDYuNzQ0NzkgMC40NDkyNjEgNi40MzMyMkMwLjczODE3OSA2LjEyMTY2IDEuMTM0MTkgNS45MzA4MiAxLjU1Nzg5IDUuODk4OTVMMS42ODQyMSA1Ljg5NDc0SDIuNTI2MzJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjYzMTQgMy45MjQ1OWUtMDlDOS45MDc1MyAtMy41ODkyZS0wNSAxMC41Mjc2IDAuMjQ2MTY5IDEwLjk5NjQgMC42ODgyMzlDMTEuNDY1MiAxLjEzMDMxIDExLjc0NzQgMS43MzQ4MyAxMS43ODUyIDIuMzc4MTFMMTEuNzg5NSAyLjUyNjMyVjUuODk0NzRIMTMuNDczN0MxNC4wOTI3IDUuODk0NjQgMTQuNjkwMyA2LjEyMTg0IDE1LjE1MjkgNi41MzMyMUMxNS42MTU1IDYuOTQ0NTggMTUuOTEwOSA3LjUxMTQ5IDE1Ljk4MzEgOC4xMjYzMkwxNS45OTU4IDguMjcyODRMMTYgOC40MjEwNUwxNS45ODMxIDguNTg2MTFMMTUuMTM2IDEyLjgyMzZDMTQuODE1MSAxNC4xOTI4IDEzLjg3MTEgMTUuMTc4MSAxMi43Njk3IDE1LjE2NDZMMTIuNjMxNiAxNS4xNTc5SDUuODk0NzJDNS42ODg0NiAxNS4xNTc5IDUuNDg5MzggMTUuMDgyMSA1LjMzNTI1IDE0Ljk0NTFDNS4xODExMSAxNC44MDggNS4wODI2NCAxNC42MTkyIDUuMDU4NTEgMTQuNDE0M0w1LjA1MjYxIDE0LjMxNThMNS4wNTM0NSA2LjI4NTQ3QzUuMDUzNjEgNi4xMzc4IDUuMDkyNTkgNS45OTI3NiA1LjE2NjQ5IDUuODY0OTFDNS4yNDAzOSA1LjczNzA2IDUuMzQ2NjIgNS42MzA4OSA1LjQ3NDUxIDUuNTU3MDVDNS44MzM2IDUuMzQ5NjYgNi4xMzYwOCA1LjA1NzAxIDYuMzU1MjEgNC43MDQ5NUM2LjU3NDM1IDQuMzUyOSA2LjcwMzM5IDMuOTUyMjkgNi43MzA5MyAzLjUzODUzTDYuNzM2ODIgMy4zNjg0MlYyLjUyNjMyQzYuNzM2ODIgMS44NTYzIDcuMDAyOTkgMS4yMTM3MiA3LjQ3Njc2IDAuNzM5OTQxQzcuOTUwNTQgMC4yNjYxNjUgOC41OTMxMiAzLjkyNDU5ZS0wOSA5LjI2MzE0IDMuOTI0NTllLTA5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuNTI2MzIgNS44OTQ3NEMyLjczMjU4IDUuODk0NzYgMi45MzE2NSA1Ljk3MDQ5IDMuMDg1NzkgNi4xMDc1NUMzLjIzOTkyIDYuMjQ0NjEgMy4zMzgzOSA2LjQzMzQ3IDMuMzYyNTMgNi42MzgzMkwzLjM2ODQyIDYuNzM2ODRWMTQuMzE1OEMzLjM2ODM5IDE0LjUyMiAzLjI5MjY3IDE0LjcyMTEgMy4xNTU2MSAxNC44NzUzQzMuMDE4NTUgMTUuMDI5NCAyLjgyOTY5IDE1LjEyNzkgMi42MjQ4NCAxNS4xNTJMMi41MjYzMiAxNS4xNTc5SDEuNjg0MjFDMS4yNTkzIDE1LjE1OCAwLjg1MDA0OSAxNC45OTc2IDAuNTM4NDg2IDE0LjcwODZDMC4yMjY5MjMgMTQuNDE5NyAwLjAzNjA3ODcgMTQuMDIzNyAwLjAwNDIxMDcxIDEzLjZMOC40NDM2MmUtMDggMTMuNDczN1Y3LjU3ODk1Qy0wLjAwMDEzNDM4MyA3LjE1NDA0IDAuMTYwMzQyIDYuNzQ0NzkgMC40NDkyNjEgNi40MzMyMkMwLjczODE3OSA2LjEyMTY2IDEuMTM0MTkgNS45MzA4MiAxLjU1Nzg5IDUuODk4OTVMMS42ODQyMSA1Ljg5NDc0SDIuNTI2MzJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjYzMTQgMTUuMTY0NkM5LjkwNzM5IDE1LjE2NDcgMTAuNTI3MyAxNC45MTg2IDEwLjk5NjEgMTQuNDc2N0MxMS40NjUgMTQuMDM0OCAxMS43NDcyIDEzLjQzMDUgMTEuNzg1MiAxMi43ODczTDExLjc4OTUgMTIuNjM4M1Y5LjI2OTg3SDEzLjQ3MzdDMTQuMDkyNyA5LjI2OTk3IDE0LjY5MDMgOS4wNDI3NyAxNS4xNTI5IDguNjMxNEMxNS42MTU1IDguMjIwMDMgMTUuOTEwOSA3LjY1MzEyIDE1Ljk4MzEgNy4wMzgyOUwxNS45OTU4IDYuODkyNjFMMTYgNi43NDM1NkwxNS45ODMxIDYuNTc4NUwxNS4xMzYgMi4zNDEwM0MxNC44MTUxIDAuOTcyNjA4IDEzLjg3MTEgLTAuMDEzNDk3NSAxMi43Njk3IC0yLjM4MTUzZS0wNUwxMi42MzE2IDAuMDA2NzEyOTRINS44OTQ3MkM1LjY4ODMzIDAuMDA2NzY0MzggNS40ODkxNSAwLjA4MjYwNzcgNS4zMzQ5OSAwLjIxOTg0QzUuMTgwODQgMC4zNTcwNzMgNS4wODI0NSAwLjU0NjEzOSA1LjA1ODUxIDAuNzUxMTM0TDUuMDUyNjEgMC44NDg4MThMNS4wNTM0NSA4Ljg3OTEzQzUuMDUzNDYgOS4wMjY5NSA1LjA5MjM3IDkuMTcyMTYgNS4xNjYyOCA5LjMwMDE3QzUuMjQwMTkgOS40MjgxOSA1LjM0NjQ5IDkuNTM0NDkgNS40NzQ1MSA5LjYwODRDNS44MzM0OSA5LjgxNTcxIDYuMTM1ODkgMTAuMTA4MiA2LjM1NTAyIDEwLjQ2MDFDNi41NzQxNSAxMC44MTIgNi43MDMyNSAxMS4yMTI1IDYuNzMwOTMgMTEuNjI2MUw2LjczNjgyIDExLjc5NjJWMTIuNjM4M0M2LjczNjgyIDEzLjMwODMgNy4wMDI5OSAxMy45NTA5IDcuNDc2NzYgMTQuNDI0N0M3Ljk1MDU0IDE0Ljg5ODQgOC41OTMxMiAxNS4xNjQ2IDkuMjYzMTQgMTUuMTY0NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yLjUyNjMyIDkuMjY5ODdDMi43MzI1OCA5LjI2OTg0IDIuOTMxNjUgOS4xOTQxMiAzLjA4NTc5IDkuMDU3MDZDMy4yMzk5MiA4LjkyIDMuMzM4MzkgOC43MzExNCAzLjM2MjUzIDguNTI2MjlMMy4zNjg0MiA4LjQyNzc3VjAuODQ4ODE5QzMuMzY4MzkgMC42NDI1NTkgMy4yOTI2NyAwLjQ0MzQ4MyAzLjE1NTYxIDAuMjg5MzQ4QzMuMDE4NTUgMC4xMzUyMTMgMi44Mjk2OSAwLjAzNjc0MTIgMi42MjQ4NCAwLjAxMjYwODhMMi41MjYzMiAwLjAwNjcxMzkySDEuNjg0MjFDMS4yNTkwMyAwLjAwNjYxMTEzIDAuODQ5NTUyIDAuMTY3MzIyIDAuNTM3OTQ3IDAuNDU2NTkyQzAuMjI2MzQxIDAuNzQ1ODYxIDAuMDM1NjczNyAxLjE0MjI4IDAuMDA0MjEwNjIgMS41NjYyOUwwIDEuNjkyNjFWNy41ODczNUM3Ljc5NTg1ZS0wNSA4LjAxMjExIDAuMTYwNjUgOC40MjExNSAwLjQ0OTU0NyA4LjczMjU0QzAuNzM4NDQ0IDkuMDQzOTIgMS4xMzQzMyA5LjIzNDY1IDEuNTU3ODkgOS4yNjY1TDEuNjg0MjEgOS4yNzA3MUwyLjUyNjMyIDkuMjY5ODdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjYzMTQgMTUuMTY0NkM5LjkwNzM5IDE1LjE2NDcgMTAuNTI3MyAxNC45MTg2IDEwLjk5NjEgMTQuNDc2N0MxMS40NjUgMTQuMDM0OCAxMS43NDcyIDEzLjQzMDUgMTEuNzg1MiAxMi43ODczTDExLjc4OTUgMTIuNjM4M1Y5LjI2OTg3SDEzLjQ3MzdDMTQuMDkyNyA5LjI2OTk3IDE0LjY5MDMgOS4wNDI3NyAxNS4xNTI5IDguNjMxNEMxNS42MTU1IDguMjIwMDMgMTUuOTEwOSA3LjY1MzEyIDE1Ljk4MzEgNy4wMzgyOUwxNS45OTU4IDYuODkyNjFMMTYgNi43NDM1NkwxNS45ODMxIDYuNTc4NUwxNS4xMzYgMi4zNDEwM0MxNC44MTUxIDAuOTcyNjA4IDEzLjg3MTEgLTAuMDEzNDk3NSAxMi43Njk3IC0yLjM4MTUzZS0wNUwxMi42MzE2IDAuMDA2NzEyOTRINS44OTQ3MkM1LjY4ODMzIDAuMDA2NzY0MzggNS40ODkxNSAwLjA4MjYwNzcgNS4zMzQ5OSAwLjIxOTg0QzUuMTgwODQgMC4zNTcwNzMgNS4wODI0NSAwLjU0NjEzOSA1LjA1ODUxIDAuNzUxMTM0TDUuMDUyNjEgMC44NDg4MThMNS4wNTM0NSA4Ljg3OTEzQzUuMDUzNDYgOS4wMjY5NSA1LjA5MjM3IDkuMTcyMTYgNS4xNjYyOCA5LjMwMDE3QzUuMjQwMTkgOS40MjgxOSA1LjM0NjQ5IDkuNTM0NDkgNS40NzQ1MSA5LjYwODRDNS44MzM0OSA5LjgxNTcxIDYuMTM1ODkgMTAuMTA4MiA2LjM1NTAyIDEwLjQ2MDFDNi41NzQxNSAxMC44MTIgNi43MDMyNSAxMS4yMTI1IDYuNzMwOTMgMTEuNjI2MUw2LjczNjgyIDExLjc5NjJWMTIuNjM4M0M2LjczNjgyIDEzLjMwODMgNy4wMDI5OSAxMy45NTA5IDcuNDc2NzYgMTQuNDI0N0M3Ljk1MDU0IDE0Ljg5ODQgOC41OTMxMiAxNS4xNjQ2IDkuMjYzMTQgMTUuMTY0NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yLjUyNjMyIDkuMjY5ODdDMi43MzI1OCA5LjI2OTg0IDIuOTMxNjUgOS4xOTQxMiAzLjA4NTc5IDkuMDU3MDZDMy4yMzk5MiA4LjkyIDMuMzM4MzkgOC43MzExNCAzLjM2MjUzIDguNTI2MjlMMy4zNjg0MiA4LjQyNzc3VjAuODQ4ODE5QzMuMzY4MzkgMC42NDI1NTkgMy4yOTI2NyAwLjQ0MzQ4MyAzLjE1NTYxIDAuMjg5MzQ4QzMuMDE4NTUgMC4xMzUyMTMgMi44Mjk2OSAwLjAzNjc0MTIgMi42MjQ4NCAwLjAxMjYwODhMMi41MjYzMiAwLjAwNjcxMzkySDEuNjg0MjFDMS4yNTkwMyAwLjAwNjYxMTEzIDAuODQ5NTUyIDAuMTY3MzIyIDAuNTM3OTQ3IDAuNDU2NTkyQzAuMjI2MzQxIDAuNzQ1ODYxIDAuMDM1NjczNyAxLjE0MjI4IDAuMDA0MjEwNjIgMS41NjYyOUwwIDEuNjkyNjFWNy41ODczNUM3Ljc5NTg1ZS0wNSA4LjAxMjExIDAuMTYwNjUgOC40MjExNSAwLjQ0OTU0NyA4LjczMjU0QzAuNzM4NDQ0IDkuMDQzOTIgMS4xMzQzMyA5LjIzNDY1IDEuNTU3ODkgOS4yNjY1TDEuNjg0MjEgOS4yNzA3MUwyLjUyNjMyIDkuMjY5ODdaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTk5OTggMEM2LjM5MTEgMCA3LjE2NDQ2IDAuMjM0NTk2IDcuODIyMjYgMC42NzQxMjFDOC40ODAwNSAxLjExMzY1IDguOTkyNzQgMS43MzgzNiA5LjI5NTQ5IDIuNDY5MjdDOS41OTgyNCAzLjIwMDE3IDkuNjc3NDYgNC4wMDQ0NCA5LjUyMzEyIDQuNzgwMzZDOS4zNjg3OCA1LjU1NjI4IDguOTg3ODEgNi4yNjkwMiA4LjQyODQgNi44Mjg0M0M3Ljg2ODk5IDcuMzg3ODQgNy4xNTYyNiA3Ljc2ODggNi4zODAzNCA3LjkyMzE0QzUuNjA0NDEgOC4wNzc0OCA0LjgwMDE1IDcuOTk4MjcgNC4wNjkyNCA3LjY5NTUyQzMuMzM4MzQgNy4zOTI3NyAyLjcxMzYyIDYuODgwMDggMi4yNzQxIDYuMjIyMjhDMS44MzQ1NyA1LjU2NDQ4IDEuNTk5OTggNC43OTExMiAxLjU5OTk4IDRMMS42MDM5OCAzLjgyNjRDMS42NDg3MSAyLjc5NjYgMi4wODkyNiAxLjgyMzgyIDIuODMzNzUgMS4xMTA5M0MzLjU3ODI1IDAuMzk4MDMzIDQuNTY5MiA1Ljk1NTRlLTA1IDUuNTk5OTggMFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03LjIgOS42QzguMjYwODcgOS42IDkuMjc4MjggMTAuMDIxNCAxMC4wMjg0IDEwLjc3MTZDMTAuNzc4NiAxMS41MjE3IDExLjIgMTIuNTM5MSAxMS4yIDEzLjZWMTQuNEMxMS4yIDE0LjgyNDMgMTEuMDMxNCAxNS4yMzEzIDEwLjczMTQgMTUuNTMxNEMxMC40MzEzIDE1LjgzMTQgMTAuMDI0MyAxNiA5LjYgMTZIMS42QzEuMTc1NjUgMTYgMC43Njg2ODcgMTUuODMxNCAwLjQ2ODYyOSAxNS41MzE0QzAuMTY4NTcxIDE1LjIzMTMgMCAxNC44MjQzIDAgMTQuNFYxMy42QzAgMTIuNTM5MSAwLjQyMTQyNyAxMS41MjE3IDEuMTcxNTcgMTAuNzcxNkMxLjkyMTcyIDEwLjAyMTQgMi45MzkxMyA5LjYgNCA5LjZINy4yWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTk5OTggMEM2LjM5MTEgMCA3LjE2NDQ2IDAuMjM0NTk2IDcuODIyMjYgMC42NzQxMjFDOC40ODAwNSAxLjExMzY1IDguOTkyNzQgMS43MzgzNiA5LjI5NTQ5IDIuNDY5MjdDOS41OTgyNCAzLjIwMDE3IDkuNjc3NDYgNC4wMDQ0NCA5LjUyMzEyIDQuNzgwMzZDOS4zNjg3OCA1LjU1NjI4IDguOTg3ODEgNi4yNjkwMiA4LjQyODQgNi44Mjg0M0M3Ljg2ODk5IDcuMzg3ODQgNy4xNTYyNiA3Ljc2ODggNi4zODAzNCA3LjkyMzE0QzUuNjA0NDEgOC4wNzc0OCA0LjgwMDE1IDcuOTk4MjcgNC4wNjkyNCA3LjY5NTUyQzMuMzM4MzQgNy4zOTI3NyAyLjcxMzYyIDYuODgwMDggMi4yNzQxIDYuMjIyMjhDMS44MzQ1NyA1LjU2NDQ4IDEuNTk5OTggNC43OTExMiAxLjU5OTk4IDRMMS42MDM5OCAzLjgyNjRDMS42NDg3MSAyLjc5NjYgMi4wODkyNiAxLjgyMzgyIDIuODMzNzUgMS4xMTA5M0MzLjU3ODI1IDAuMzk4MDMzIDQuNTY5MiA1Ljk1NTRlLTA1IDUuNTk5OTggMFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik03LjIgOS42QzguMjYwODcgOS42IDkuMjc4MjggMTAuMDIxNCAxMC4wMjg0IDEwLjc3MTZDMTAuNzc4NiAxMS41MjE3IDExLjIgMTIuNTM5MSAxMS4yIDEzLjZWMTQuNEMxMS4yIDE0LjgyNDMgMTEuMDMxNCAxNS4yMzEzIDEwLjczMTQgMTUuNTMxNEMxMC40MzEzIDE1LjgzMTQgMTAuMDI0MyAxNiA5LjYgMTZIMS42QzEuMTc1NjUgMTYgMC43Njg2ODcgMTUuODMxNCAwLjQ2ODYyOSAxNS41MzE0QzAuMTY4NTcxIDE1LjIzMTMgMCAxNC44MjQzIDAgMTQuNFYxMy42QzAgMTIuNTM5MSAwLjQyMTQyNyAxMS41MjE3IDEuMTcxNTcgMTAuNzcxNkMxLjkyMTcyIDEwLjAyMTQgMi45MzkxMyA5LjYgNCA5LjZINy4yWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 193, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk03LjQzNDQgNS44MzQ0QzcuNTcyMTUgNS42OTY2NiA3Ljc1NTQzIDUuNjEzOTEgNy45NDk4NiA1LjYwMTY5QzguMTQ0MjggNS41ODk0NiA4LjMzNjQ4IDUuNjQ4NiA4LjQ5MDQgNS43NjhMOC41NjU2IDUuODM0NEwxMC45NjU2IDguMjM0NEMxMS4xMDkxIDguMzc4MzcgMTEuMTkyNCA4LjU3MTU1IDExLjE5ODYgOC43NzQ3MUMxMS4yMDQ4IDguOTc3ODcgMTEuMTMzNCA5LjE3NTc3IDEwLjk5OSA5LjMyODIyQzEwLjg2NDYgOS40ODA2OCAxMC42NzcyIDkuNTc2MjQgMTAuNDc0OCA5LjU5NTUyQzEwLjI3MjUgOS42MTQ3OSAxMC4wNzA0IDkuNTU2MzMgOS45MDk2IDkuNDMyTDkuODM0NCA5LjM2NTZMOCA3LjUzMkw2LjE2NTYgOS4zNjU2QzYuMDI3ODUgOS41MDMzNCA1Ljg0NDU3IDkuNTg2MDkgNS42NTAxNSA5LjU5ODMxQzUuNDU1NzIgOS42MTA1NCA1LjI2MzUyIDkuNTUxNCA1LjEwOTYgOS40MzJMNS4wMzQ0IDkuMzY1NkM0Ljg5NjY2IDkuMjI3ODUgNC44MTM5MSA5LjA0NDU3IDQuODAxNjkgOC44NTAxNUM0Ljc4OTQ2IDguNjU1NzIgNC44NDg2IDguNDYzNTIgNC45NjggOC4zMDk2TDUuMDM0NCA4LjIzNDRMNy40MzQ0IDUuODM0NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk03LjQzNDQgNS44MzQ0QzcuNTcyMTUgNS42OTY2NiA3Ljc1NTQzIDUuNjEzOTEgNy45NDk4NiA1LjYwMTY5QzguMTQ0MjggNS41ODk0NiA4LjMzNjQ4IDUuNjQ4NiA4LjQ5MDQgNS43NjhMOC41NjU2IDUuODM0NEwxMC45NjU2IDguMjM0NEMxMS4xMDkxIDguMzc4MzcgMTEuMTkyNCA4LjU3MTU1IDExLjE5ODYgOC43NzQ3MUMxMS4yMDQ4IDguOTc3ODcgMTEuMTMzNCA5LjE3NTc3IDEwLjk5OSA5LjMyODIyQzEwLjg2NDYgOS40ODA2OCAxMC42NzcyIDkuNTc2MjQgMTAuNDc0OCA5LjU5NTUyQzEwLjI3MjUgOS42MTQ3OSAxMC4wNzA0IDkuNTU2MzMgOS45MDk2IDkuNDMyTDkuODM0NCA5LjM2NTZMOCA3LjUzMkw2LjE2NTYgOS4zNjU2QzYuMDI3ODUgOS41MDMzNCA1Ljg0NDU3IDkuNTg2MDkgNS42NTAxNSA5LjU5ODMxQzUuNDU1NzIgOS42MTA1NCA1LjI2MzUyIDkuNTUxNCA1LjEwOTYgOS40MzJMNS4wMzQ0IDkuMzY1NkM0Ljg5NjY2IDkuMjI3ODUgNC44MTM5MSA5LjA0NDU3IDQuODAxNjkgOC44NTAxNUM0Ljc4OTQ2IDguNjU1NzIgNC44NDg2IDguNDYzNTIgNC45NjggOC4zMDk2TDUuMDM0NCA4LjIzNDRMNy40MzQ0IDUuODM0NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 109, 247);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 120, 82, 238;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 8, 185, 78;
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
  --callout-color: 0, 191, 188;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="accessible"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="archive"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="award"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="badge"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="badges"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="balloon"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bandage"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bell"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bitcoin"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="briefcase"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bubble"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="camera"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cannabis"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="card"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="clipboard"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="clock"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cloud"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cookie"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="desktop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="diamond"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  --callout-color: 8, 109, 221;
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0.07);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(36, 36, 36);
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(153, 109, 247, 0.1);
  border-bottom-color: rgba(153, 109, 247, 0.15);
  border-left-color: rgba(153, 109, 247, 0.15);
  border-right-color: rgba(153, 109, 247, 0.15);
  border-top-color: rgba(153, 109, 247, 0.15);
  color: rgb(153, 109, 247);
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
