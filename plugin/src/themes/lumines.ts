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
  --background-modifier-border: rgb(51, 51, 51) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-form-field: rgb(51, 51, 51) !important;
  --background-modifier-form-field-hover: rgb(51, 51, 51) !important;
  --background-primary: rgb(28, 28, 28) !important;
  --background-primary-alt: rgb(43, 43, 43) !important;
  --background-secondary: rgb(36, 36, 36) !important;
  --background-secondary-alt: rgb(77, 77, 77) !important;
  --bases-cards-background: rgb(36, 36, 36) !important;
  --bases-cards-cover-background: rgb(43, 43, 43) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(43, 43, 43) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(153, 110, 247) !important;
  --bases-cards-text-size: 0.875em !important;
  --bases-embed-border-color: rgb(43, 43, 43) !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: rgb(230, 230, 230) !important;
  --bases-table-border-color: rgb(43, 43, 43) !important;
  --bases-table-cell-background-active: rgb(36, 36, 36) !important;
  --bases-table-cell-background-disabled: transparent !important;
  --bases-table-cell-background-selected: rgba(153, 110, 247, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(153, 110, 247) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 110, 247) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: rgb(43, 43, 43) !important;
  --bases-table-header-background: rgb(28, 28, 28) !important;
  --bases-table-header-background-hover: none !important;
  --bases-table-header-color: rgb(230, 230, 230) !important;
  --bases-table-header-icon-display: none !important;
  --bases-table-row-background-hover: rgb(36, 36, 36) !important;
  --bases-table-summary-background: rgb(28, 28, 28) !important;
  --bases-table-text-size: 0.875em !important;
  --blockquote-border-color: rgb(153, 110, 247) !important;
  --blue-h: 207 !important;
  --blue-l: 57% !important;
  --blue-s: 86% !important;
  --blur-background: color-mix(in srgb, rgb(51, 51, 51) 65%, transparent) linear-gradient(rgb(51, 51, 51), color-mix(in srgb, rgb(51, 51, 51) 65%, transparent)) !important;
  --bold-color: rgb(153, 110, 247) !important;
  --bold-weight: 600 !important;
  --button-radius: 8px !important;
  --callout-background-color-opacity: 0.1;
  --callout-border-width: 1px;
  --callout-padding: 24px;
  --callout-radius: 8px;
  --callout-title-weight: 600;
  --canvas-background: rgb(28, 28, 28) !important;
  --canvas-card-label-color: rgb(128, 128, 128) !important;
  --canvas-dot-pattern: rgb(77, 77, 77) !important;
  --caret-color: rgb(245, 245, 245) !important;
  --checkbox-border-color: rgb(128, 128, 128) !important;
  --checkbox-border-color-hover: rgb(153, 110, 247) !important;
  --checkbox-color: rgb(153, 110, 247) !important;
  --checkbox-color-hover: rgb(182, 157, 251) !important;
  --checkbox-marker-color: rgb(28, 28, 28) !important;
  --checkbox-radius: 35% !important;
  --checklist-done-color: rgb(128, 128, 128) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(36, 36, 36) !important;
  --code-border-color: rgb(43, 43, 43) !important;
  --code-border-width: 1px !important;
  --code-comment: rgb(128, 128, 128) !important;
  --code-function: rgb(152, 195, 121) !important;
  --code-important: rgb(198, 120, 221) !important;
  --code-keyword: rgb(86, 182, 194) !important;
  --code-normal: rgb(237, 237, 237) !important;
  --code-operator: rgb(237, 237, 237) !important;
  --code-property: rgb(86, 182, 194) !important;
  --code-punctuation: rgb(230, 230, 230) !important;
  --code-radius: 8px !important;
  --code-string: rgb(229, 192, 123) !important;
  --code-tag: rgb(224, 108, 117) !important;
  --code-value: rgb(198, 120, 221) !important;
  --collapse-icon-color: rgb(128, 128, 128) !important;
  --collapse-icon-color-collapsed: rgb(153, 110, 247) !important;
  --color-accent: rgb(153, 110, 247) !important;
  --color-accent-1: rgb(182, 157, 251) !important;
  --color-accent-2: rgb(217, 206, 253) !important;
  --color-accent-hsl: 259.1, 89.9%, 69.9% !important;
  --color-base-00: rgb(28, 28, 28) !important;
  --color-base-05: rgb(36, 36, 36) !important;
  --color-base-10: rgb(43, 43, 43) !important;
  --color-base-100: rgb(252, 252, 252) !important;
  --color-base-20: rgb(51, 51, 51) !important;
  --color-base-25: rgb(64, 64, 64) !important;
  --color-base-30: rgb(77, 77, 77) !important;
  --color-base-35: rgb(89, 89, 89) !important;
  --color-base-40: rgb(102, 102, 102) !important;
  --color-base-50: rgb(128, 128, 128) !important;
  --color-base-60: rgb(153, 153, 153) !important;
  --color-base-70: rgb(230, 230, 230) !important;
  --color-base-80: rgb(237, 237, 237) !important;
  --color-base-90: rgb(245, 245, 245) !important;
  --components-background: rgb(51, 51, 51) !important;
  --components-background-hover: rgb(64, 64, 64) !important;
  --custom-icon-size: 1.2em !important;
  --cyan-h: 187 !important;
  --cyan-l: 55% !important;
  --cyan-s: 69% !important;
  --dark: rgb(245, 245, 245) !important;
  --darkgray: rgb(245, 245, 245) !important;
  --divider-color: rgb(43, 43, 43) !important;
  --divider-color-hover: rgb(153, 110, 247) !important;
  --divider-vertical-height: calc(100% - 40px) !important;
  --dropdown-background: rgb(51, 51, 51) !important;
  --dropdown-background-hover: rgb(64, 64, 64) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(153, 110, 247) !important;
  --file-header-background: rgb(28, 28, 28) !important;
  --file-header-background-focused: rgb(28, 28, 28) !important;
  --filename-margin-bottom: 0.8rem !important;
  --flair-background: rgb(51, 51, 51) !important;
  --flair-color: rgb(245, 245, 245) !important;
  --font-weight-table-titles: 700 !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: rgb(230, 230, 230) !important;
  --footnote-id-color-no-occurrences: rgb(128, 128, 128) !important;
  --footnote-input-background-active: transparent !important;
  --graph-line: rgb(77, 77, 77) !important;
  --graph-node: rgb(230, 230, 230) !important;
  --graph-node-attachment: rgb(255, 213, 61) !important;
  --graph-node-focused: transparent !important;
  --graph-node-tag: rgb(153, 110, 247) !important;
  --graph-node-unresolved: rgb(128, 128, 128) !important;
  --graph-text: rgb(245, 245, 245) !important;
  --gray: rgb(230, 230, 230) !important;
  --gray-h: 210 !important;
  --gray-l: 71% !important;
  --gray-s: 11% !important;
  --green-h: 130 !important;
  --green-l: 64% !important;
  --green-s: 61% !important;
  --h1-color: rgb(153, 110, 247) !important;
  --h1-size: 1.5em !important;
  --h2-color: rgb(153, 110, 247) !important;
  --h2-size: 1.4em !important;
  --h3-color: rgb(153, 110, 247) !important;
  --h3-size: 1.3em !important;
  --h4-color: rgb(153, 110, 247) !important;
  --h4-size: 1.2em !important;
  --h5-color: rgb(153, 110, 247) !important;
  --h5-size: 1.1em !important;
  --h6-color: rgb(153, 110, 247) !important;
  --h6-size: 1.0em !important;
  --header-padding-top: 0.3em !important;
  --heading-formatting: rgb(128, 128, 128) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: transparent !important;
  --hr-color: rgb(43, 43, 43) !important;
  --icon-color: rgb(230, 230, 230) !important;
  --icon-color-active: rgb(237, 237, 237) !important;
  --icon-color-focused: rgb(245, 245, 245) !important;
  --icon-color-hover: rgb(230, 230, 230) !important;
  --indigo-h: 228 !important;
  --indigo-l: 72% !important;
  --indigo-s: 96% !important;
  --inline-title-color: rgb(245, 245, 245) !important;
  --inline-title-size: 1.5em !important;
  --input-date-separator: rgb(128, 128, 128) !important;
  --input-placeholder-color: rgb(128, 128, 128) !important;
  --input-radius: 8px !important;
  --interactive-accent: rgb(153, 110, 247) !important;
  --interactive-accent-hover: rgb(182, 157, 251) !important;
  --interactive-accent-hsl: 259.1, 89.9%, 69.9% !important;
  --interactive-hover: rgb(64, 64, 64) !important;
  --interactive-normal: rgb(51, 51, 51) !important;
  --italic-color: rgb(153, 110, 247) !important;
  --light: rgb(28, 28, 28) !important;
  --lightgray: rgb(36, 36, 36) !important;
  --lime-h: 82 !important;
  --lime-l: 69% !important;
  --lime-s: 75% !important;
  --link-color: rgb(153, 110, 247) !important;
  --link-color-hover: rgb(217, 206, 253) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(153, 110, 247) !important;
  --link-external-color-hover: rgb(217, 206, 253) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(182, 157, 251) !important;
  --link-unresolved-decoration-color: rgba(153, 110, 247, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(128, 128, 128) !important;
  --list-marker-color-collapsed: rgb(182, 157, 251) !important;
  --list-marker-color-hover: rgb(230, 230, 230) !important;
  --menu-background: rgb(36, 36, 36) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: rgb(245, 245, 245) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-text-color: rgb(230, 230, 230) !important;
  --metadata-label-text-color-hover: rgb(230, 230, 230) !important;
  --metadata-margin-bottom: 0.8rem !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-property-radius: 8px !important;
  --metadata-property-radius-focus: 8px !important;
  --metadata-property-radius-hover: 8px !important;
  --modal-background: rgb(28, 28, 28) !important;
  --modal-border-color: rgb(43, 43, 43) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: rgb(128, 128, 128) !important;
  --nav-collapse-icon-color-collapsed: rgb(128, 128, 128) !important;
  --nav-heading-color: rgb(245, 245, 245) !important;
  --nav-heading-color-collapsed: rgb(128, 128, 128) !important;
  --nav-heading-color-collapsed-hover: rgb(230, 230, 230) !important;
  --nav-heading-color-hover: rgb(245, 245, 245) !important;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.07) !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-background-selected: rgba(153, 110, 247, 0.15) !important;
  --nav-item-color: rgb(230, 230, 230) !important;
  --nav-item-color-active: rgb(230, 230, 230) !important;
  --nav-item-color-highlighted: rgb(182, 157, 251) !important;
  --nav-item-color-hover: rgb(230, 230, 230) !important;
  --nav-item-color-selected: rgb(245, 245, 245) !important;
  --nav-tag-color: rgb(128, 128, 128) !important;
  --nav-tag-color-active: rgb(230, 230, 230) !important;
  --nav-tag-color-hover: rgb(230, 230, 230) !important;
  --orange-h: 31 !important;
  --orange-l: 65% !important;
  --orange-s: 100% !important;
  --pdf-background: rgb(28, 28, 28) !important;
  --pdf-page-background: rgb(28, 28, 28) !important;
  --pdf-shadow: 0 0 0 1px rgb(51, 51, 51) !important;
  --pdf-sidebar-background: rgb(28, 28, 28) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(51, 51, 51) !important;
  --pill-border-color: rgb(51, 51, 51) !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: rgb(230, 230, 230) !important;
  --pill-color-hover: rgb(245, 245, 245) !important;
  --pill-color-remove: rgb(128, 128, 128) !important;
  --pill-color-remove-hover: rgb(182, 157, 251) !important;
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
  --prompt-background: rgb(28, 28, 28) !important;
  --prompt-border-color: rgb(43, 43, 43) !important;
  --raised-background: color-mix(in srgb, rgb(51, 51, 51) 65%, transparent) linear-gradient(rgb(51, 51, 51), color-mix(in srgb, rgb(51, 51, 51) 65%, transparent)) !important;
  --red-h: 0 !important;
  --red-l: 65% !important;
  --red-s: 94% !important;
  --ribbon-background: rgb(28, 28, 28) !important;
  --ribbon-background-collapsed: rgb(28, 28, 28) !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.1) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.05) !important;
  --search-clear-button-color: rgb(230, 230, 230) !important;
  --search-icon-color: rgb(230, 230, 230) !important;
  --search-result-background: rgb(36, 36, 36) !important;
  --secondary: rgb(182, 157, 251) !important;
  --setting-group-heading-color: rgb(245, 245, 245) !important;
  --setting-items-background: rgb(36, 36, 36) !important;
  --setting-items-border-color: rgb(51, 51, 51) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --sky-h: 206 !important;
  --sky-l: 72% !important;
  --sky-s: 96% !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: rgb(51, 51, 51) !important;
  --status-bar-background: rgb(36, 36, 36) !important;
  --status-bar-border-color: rgb(43, 43, 43) !important;
  --status-bar-border-width: 0 !important;
  --status-bar-position: related !important;
  --status-bar-radius: 0 !important;
  --status-bar-text-color: rgb(230, 230, 230) !important;
  --suggestion-background: rgb(28, 28, 28) !important;
  --tab-background-active: rgb(28, 28, 28) !important;
  --tab-container-background: rgb(28, 28, 28) !important;
  --tab-curve: 8px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: rgb(43, 43, 43) !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-switcher-background: rgb(36, 36, 36) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(36, 36, 36), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(153, 110, 247) !important;
  --tab-text-color: rgb(128, 128, 128) !important;
  --tab-text-color-active: rgb(230, 230, 230) !important;
  --tab-text-color-focused: rgb(128, 128, 128) !important;
  --tab-text-color-focused-active: rgb(128, 128, 128) !important;
  --tab-text-color-focused-active-current: rgb(245, 245, 245) !important;
  --tab-text-color-focused-highlighted: rgb(182, 157, 251) !important;
  --table-add-button-border-color: rgb(51, 51, 51) !important;
  --table-border-color: rgb(51, 51, 51) !important;
  --table-drag-handle-background-active: rgb(153, 110, 247) !important;
  --table-drag-handle-color: rgb(128, 128, 128) !important;
  --table-header-background: rgb(36, 36, 36) !important;
  --table-header-border-color: rgb(51, 51, 51) !important;
  --table-header-color: rgb(245, 245, 245) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(153, 110, 247, 0.1) !important;
  --table-selection-border-color: rgb(153, 110, 247) !important;
  --tag-background: rgba(153, 110, 247, 0.1) !important;
  --tag-background-hover: rgba(153, 110, 247, 0.2) !important;
  --tag-border-color: rgba(153, 110, 247, 0.15) !important;
  --tag-border-color-hover: rgba(153, 110, 247, 0.15) !important;
  --tag-color: rgb(153, 110, 247) !important;
  --tag-color-hover: rgb(182, 157, 251) !important;
  --tertiary: rgb(217, 206, 253) !important;
  --text-accent: rgb(182, 157, 251) !important;
  --text-accent-hover: rgb(217, 206, 253) !important;
  --text-faint: rgb(128, 128, 128) !important;
  --text-muted: rgb(230, 230, 230) !important;
  --text-normal: rgb(245, 245, 245) !important;
  --text-selection: rgba(153, 110, 247, 0.33) !important;
  --textHighlight: transparent !important;
  --titlebar-background: rgb(36, 36, 36) !important;
  --titlebar-background-focused: rgb(36, 36, 36) !important;
  --titlebar-border-color: rgb(51, 51, 51) !important;
  --titlebar-text-color: rgb(230, 230, 230) !important;
  --titlebar-text-color-focused: rgb(245, 245, 245) !important;
  --vault-profile-color: rgb(245, 245, 245) !important;
  --vault-profile-color-hover: rgb(245, 245, 245) !important;
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
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
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
  --background-modifier-border: rgb(230, 230, 230) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-form-field: rgb(230, 230, 230) !important;
  --background-modifier-form-field-hover: rgb(230, 230, 230) !important;
  --background-primary: rgb(252, 252, 252) !important;
  --background-primary-alt: rgb(237, 237, 237) !important;
  --background-secondary: rgb(245, 245, 245) !important;
  --background-secondary-alt: rgb(245, 245, 245) !important;
  --bases-cards-background: rgb(245, 245, 245) !important;
  --bases-cards-cover-background: rgb(237, 237, 237) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(237, 237, 237) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(153, 110, 247) !important;
  --bases-cards-text-size: 0.875em !important;
  --bases-embed-border-color: rgb(237, 237, 237) !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: rgb(51, 51, 51) !important;
  --bases-table-border-color: rgb(237, 237, 237) !important;
  --bases-table-cell-background-active: rgb(245, 245, 245) !important;
  --bases-table-cell-background-disabled: transparent !important;
  --bases-table-cell-background-selected: rgba(153, 110, 247, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(168, 133, 249) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(168, 133, 249) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: rgb(237, 237, 237) !important;
  --bases-table-header-background: rgb(252, 252, 252) !important;
  --bases-table-header-background-hover: none !important;
  --bases-table-header-color: rgb(51, 51, 51) !important;
  --bases-table-header-icon-display: none !important;
  --bases-table-row-background-hover: rgb(245, 245, 245) !important;
  --bases-table-summary-background: rgb(252, 252, 252) !important;
  --bases-table-text-size: 0.875em !important;
  --blockquote-border-color: rgb(153, 110, 247) !important;
  --blue-h: 207 !important;
  --blue-l: 57% !important;
  --blue-s: 86% !important;
  --blur-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent)) !important;
  --bold-color: rgb(153, 110, 247) !important;
  --bold-weight: 600 !important;
  --button-radius: 8px !important;
  --callout-background-color-opacity: 0.1;
  --callout-border-width: 1px;
  --callout-padding: 24px;
  --callout-radius: 8px;
  --callout-title-weight: 600;
  --canvas-background: rgb(252, 252, 252) !important;
  --canvas-card-label-color: rgb(153, 153, 153) !important;
  --canvas-dot-pattern: rgb(204, 204, 204) !important;
  --caret-color: rgb(36, 36, 36) !important;
  --checkbox-border-color: rgb(153, 153, 153) !important;
  --checkbox-border-color-hover: rgb(153, 110, 247) !important;
  --checkbox-color: rgb(168, 133, 249) !important;
  --checkbox-color-hover: rgb(182, 157, 251) !important;
  --checkbox-marker-color: rgb(252, 252, 252) !important;
  --checkbox-radius: 35% !important;
  --checklist-done-color: rgb(153, 153, 153) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(245, 245, 245) !important;
  --code-border-color: rgb(237, 237, 237) !important;
  --code-border-width: 1px !important;
  --code-comment: rgb(153, 153, 153) !important;
  --code-function: rgb(152, 195, 121) !important;
  --code-important: rgb(198, 120, 221) !important;
  --code-keyword: rgb(86, 182, 194) !important;
  --code-normal: rgb(43, 43, 43) !important;
  --code-operator: rgb(43, 43, 43) !important;
  --code-property: rgb(86, 182, 194) !important;
  --code-punctuation: rgb(51, 51, 51) !important;
  --code-radius: 8px !important;
  --code-string: rgb(229, 192, 123) !important;
  --code-tag: rgb(224, 108, 117) !important;
  --code-value: rgb(198, 120, 221) !important;
  --collapse-icon-color: rgb(153, 153, 153) !important;
  --collapse-icon-color-collapsed: rgb(153, 110, 247) !important;
  --color-accent: rgb(153, 110, 247) !important;
  --color-accent-1: rgb(168, 133, 249) !important;
  --color-accent-2: rgb(182, 157, 251) !important;
  --color-accent-hsl: 259.1, 89.9%, 69.9% !important;
  --color-base-00: rgb(252, 252, 252) !important;
  --color-base-05: rgb(245, 245, 245) !important;
  --color-base-10: rgb(237, 237, 237) !important;
  --color-base-100: rgb(28, 28, 28) !important;
  --color-base-20: rgb(230, 230, 230) !important;
  --color-base-25: rgb(217, 217, 217) !important;
  --color-base-30: rgb(204, 204, 204) !important;
  --color-base-35: rgb(191, 191, 191) !important;
  --color-base-40: rgb(179, 179, 179) !important;
  --color-base-50: rgb(153, 153, 153) !important;
  --color-base-60: rgb(128, 128, 128) !important;
  --color-base-70: rgb(51, 51, 51) !important;
  --color-base-80: rgb(43, 43, 43) !important;
  --color-base-90: rgb(36, 36, 36) !important;
  --components-background: rgb(230, 230, 230) !important;
  --components-background-hover: rgb(217, 217, 217) !important;
  --custom-icon-size: 1.2em !important;
  --cyan-h: 187 !important;
  --cyan-l: 55% !important;
  --cyan-s: 69% !important;
  --dark: rgb(36, 36, 36) !important;
  --darkgray: rgb(36, 36, 36) !important;
  --divider-color: rgb(237, 237, 237) !important;
  --divider-color-hover: rgb(168, 133, 249) !important;
  --divider-vertical-height: calc(100% - 40px) !important;
  --dropdown-background: rgb(230, 230, 230) !important;
  --dropdown-background-hover: rgb(217, 217, 217) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(168, 133, 249) !important;
  --file-header-background: rgb(252, 252, 252) !important;
  --file-header-background-focused: rgb(252, 252, 252) !important;
  --filename-margin-bottom: 0.8rem !important;
  --flair-background: rgb(230, 230, 230) !important;
  --flair-color: rgb(36, 36, 36) !important;
  --font-weight-table-titles: 700 !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: rgb(51, 51, 51) !important;
  --footnote-id-color-no-occurrences: rgb(153, 153, 153) !important;
  --footnote-input-background-active: transparent !important;
  --graph-line: rgb(204, 204, 204) !important;
  --graph-node: rgb(51, 51, 51) !important;
  --graph-node-attachment: rgb(255, 213, 61) !important;
  --graph-node-focused: transparent !important;
  --graph-node-tag: rgb(153, 110, 247) !important;
  --graph-node-unresolved: rgb(153, 153, 153) !important;
  --graph-text: rgb(36, 36, 36) !important;
  --gray: rgb(51, 51, 51) !important;
  --gray-h: 210 !important;
  --gray-l: 71% !important;
  --gray-s: 11% !important;
  --green-h: 130 !important;
  --green-l: 64% !important;
  --green-s: 61% !important;
  --h1-color: rgb(153, 110, 247) !important;
  --h1-size: 1.5em !important;
  --h2-color: rgb(153, 110, 247) !important;
  --h2-size: 1.4em !important;
  --h3-color: rgb(153, 110, 247) !important;
  --h3-size: 1.3em !important;
  --h4-color: rgb(153, 110, 247) !important;
  --h4-size: 1.2em !important;
  --h5-color: rgb(153, 110, 247) !important;
  --h5-size: 1.1em !important;
  --h6-color: rgb(153, 110, 247) !important;
  --h6-size: 1.0em !important;
  --header-padding-top: 0.3em !important;
  --heading-formatting: rgb(153, 153, 153) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: transparent !important;
  --hr-color: rgb(237, 237, 237) !important;
  --icon-color: rgb(51, 51, 51) !important;
  --icon-color-active: rgb(43, 43, 43) !important;
  --icon-color-focused: rgb(36, 36, 36) !important;
  --icon-color-hover: rgb(51, 51, 51) !important;
  --indigo-h: 228 !important;
  --indigo-l: 72% !important;
  --indigo-s: 96% !important;
  --inline-title-color: rgb(36, 36, 36) !important;
  --inline-title-size: 1.5em !important;
  --input-date-separator: rgb(153, 153, 153) !important;
  --input-placeholder-color: rgb(153, 153, 153) !important;
  --input-radius: 8px !important;
  --interactive-accent: rgb(168, 133, 249) !important;
  --interactive-accent-hover: rgb(182, 157, 251) !important;
  --interactive-accent-hsl: 259.1, 89.9%, 69.9% !important;
  --interactive-hover: rgb(217, 217, 217) !important;
  --interactive-normal: rgb(230, 230, 230) !important;
  --italic-color: rgb(153, 110, 247) !important;
  --light: rgb(252, 252, 252) !important;
  --lightgray: rgb(245, 245, 245) !important;
  --lime-h: 82 !important;
  --lime-l: 69% !important;
  --lime-s: 75% !important;
  --link-color: rgb(153, 110, 247) !important;
  --link-color-hover: rgb(182, 157, 251) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(153, 110, 247) !important;
  --link-external-color-hover: rgb(182, 157, 251) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(153, 110, 247) !important;
  --link-unresolved-decoration-color: rgba(153, 110, 247, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(153, 153, 153) !important;
  --list-marker-color-collapsed: rgb(153, 110, 247) !important;
  --list-marker-color-hover: rgb(51, 51, 51) !important;
  --menu-background: rgb(245, 245, 245) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: rgb(36, 36, 36) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-text-color: rgb(51, 51, 51) !important;
  --metadata-label-text-color-hover: rgb(51, 51, 51) !important;
  --metadata-margin-bottom: 0.8rem !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-property-radius: 8px !important;
  --metadata-property-radius-focus: 8px !important;
  --metadata-property-radius-hover: 8px !important;
  --modal-background: rgb(252, 252, 252) !important;
  --modal-border-color: rgb(237, 237, 237) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: rgb(153, 153, 153) !important;
  --nav-collapse-icon-color-collapsed: rgb(153, 153, 153) !important;
  --nav-heading-color: rgb(36, 36, 36) !important;
  --nav-heading-color-collapsed: rgb(153, 153, 153) !important;
  --nav-heading-color-collapsed-hover: rgb(51, 51, 51) !important;
  --nav-heading-color-hover: rgb(36, 36, 36) !important;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.07) !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-background-selected: rgba(153, 110, 247, 0.15) !important;
  --nav-item-color: rgb(51, 51, 51) !important;
  --nav-item-color-active: rgb(51, 51, 51) !important;
  --nav-item-color-highlighted: rgb(153, 110, 247) !important;
  --nav-item-color-hover: rgb(51, 51, 51) !important;
  --nav-item-color-selected: rgb(36, 36, 36) !important;
  --nav-tag-color: rgb(153, 153, 153) !important;
  --nav-tag-color-active: rgb(51, 51, 51) !important;
  --nav-tag-color-hover: rgb(51, 51, 51) !important;
  --orange-h: 31 !important;
  --orange-l: 65% !important;
  --orange-s: 100% !important;
  --pdf-background: rgb(252, 252, 252) !important;
  --pdf-page-background: rgb(252, 252, 252) !important;
  --pdf-sidebar-background: rgb(252, 252, 252) !important;
  --pill-border-color: rgb(230, 230, 230) !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: rgb(51, 51, 51) !important;
  --pill-color-hover: rgb(36, 36, 36) !important;
  --pill-color-remove: rgb(153, 153, 153) !important;
  --pill-color-remove-hover: rgb(153, 110, 247) !important;
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
  --prompt-background: rgb(252, 252, 252) !important;
  --prompt-border-color: rgb(237, 237, 237) !important;
  --raised-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent)) !important;
  --red-h: 0 !important;
  --red-l: 65% !important;
  --red-s: 94% !important;
  --ribbon-background: rgb(252, 252, 252) !important;
  --ribbon-background-collapsed: rgb(252, 252, 252) !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.05) !important;
  --search-clear-button-color: rgb(51, 51, 51) !important;
  --search-icon-color: rgb(51, 51, 51) !important;
  --search-result-background: rgb(245, 245, 245) !important;
  --secondary: rgb(153, 110, 247) !important;
  --setting-group-heading-color: rgb(36, 36, 36) !important;
  --setting-items-background: rgb(245, 245, 245) !important;
  --setting-items-border-color: rgb(230, 230, 230) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --sky-h: 206 !important;
  --sky-l: 72% !important;
  --sky-s: 96% !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: rgb(230, 230, 230) !important;
  --status-bar-background: rgb(245, 245, 245) !important;
  --status-bar-border-color: rgb(237, 237, 237) !important;
  --status-bar-border-width: 0 !important;
  --status-bar-position: related !important;
  --status-bar-radius: 0 !important;
  --status-bar-text-color: rgb(51, 51, 51) !important;
  --suggestion-background: rgb(252, 252, 252) !important;
  --tab-background-active: rgb(252, 252, 252) !important;
  --tab-container-background: rgb(252, 252, 252) !important;
  --tab-curve: 8px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: rgb(237, 237, 237) !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-switcher-background: rgb(245, 245, 245) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 245, 245), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(153, 110, 247) !important;
  --tab-text-color: rgb(153, 153, 153) !important;
  --tab-text-color-active: rgb(51, 51, 51) !important;
  --tab-text-color-focused: rgb(153, 153, 153) !important;
  --tab-text-color-focused-active: rgb(153, 153, 153) !important;
  --tab-text-color-focused-active-current: rgb(36, 36, 36) !important;
  --tab-text-color-focused-highlighted: rgb(153, 110, 247) !important;
  --table-add-button-border-color: rgb(230, 230, 230) !important;
  --table-border-color: rgb(230, 230, 230) !important;
  --table-drag-handle-background-active: rgb(168, 133, 249) !important;
  --table-drag-handle-color: rgb(153, 153, 153) !important;
  --table-header-background: rgb(245, 245, 245) !important;
  --table-header-border-color: rgb(230, 230, 230) !important;
  --table-header-color: rgb(36, 36, 36) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(153, 110, 247, 0.1) !important;
  --table-selection-border-color: rgb(168, 133, 249) !important;
  --tag-background: rgba(153, 110, 247, 0.1) !important;
  --tag-background-hover: rgba(153, 110, 247, 0.2) !important;
  --tag-border-color: rgba(153, 110, 247, 0.15) !important;
  --tag-border-color-hover: rgba(153, 110, 247, 0.15) !important;
  --tag-color: rgb(153, 110, 247) !important;
  --tag-color-hover: rgb(153, 110, 247) !important;
  --tertiary: rgb(182, 157, 251) !important;
  --text-accent: rgb(153, 110, 247) !important;
  --text-accent-hover: rgb(182, 157, 251) !important;
  --text-faint: rgb(153, 153, 153) !important;
  --text-muted: rgb(51, 51, 51) !important;
  --text-normal: rgb(36, 36, 36) !important;
  --text-selection: rgba(153, 110, 247, 0.2) !important;
  --textHighlight: transparent !important;
  --titlebar-background: rgb(245, 245, 245) !important;
  --titlebar-background-focused: rgb(245, 245, 245) !important;
  --titlebar-border-color: rgb(230, 230, 230) !important;
  --titlebar-text-color: rgb(51, 51, 51) !important;
  --titlebar-text-color-focused: rgb(36, 36, 36) !important;
  --vault-profile-color: rgb(36, 36, 36) !important;
  --vault-profile-color-hover: rgb(36, 36, 36) !important;
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
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
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
};
