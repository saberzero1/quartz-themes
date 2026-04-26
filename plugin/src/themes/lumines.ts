import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "lumines",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "JetBrains Mono",
        style: "normal",
        weight: "400",
        file: "jetbrains-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Excalifont",
        style: "normal",
        weight: "400",
        file: "excalifont.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Cascadia Code",
        style: "normal",
        weight: "400",
        file: "cascadia-code.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Cascadia Code",
        style: "italic",
        weight: "400",
        file: "cascadia-code-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
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
  --shiki-active-tab-border-color: hsl(0, 0%, 90%) !important;
  --shiki-code-background: hsl(0, 0%, 14%) !important;
  --shiki-code-block-border-radius: 8px !important;
  --shiki-code-comment: hsl(0, 0%, 50%) !important;
  --shiki-code-normal: hsl(0, 0%, 90%) !important;
  --shiki-code-punctuation: hsl(0, 0%, 90%) !important;
  --shiki-gutter-border-color: hsl(0, 0%, 20%) !important;
  --shiki-gutter-text-color: hsl(0, 0%, 50%) !important;
  --shiki-gutter-text-color-highlight: hsl(0, 0%, 90%) !important;
  --shiki-highlight-neutral: hsl(0, 0%, 90%) !important;
  --shiki-terminal-dots-color: hsl(0, 0%, 50%) !important;
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
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body a.internal-link.broken {
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
  color: rgb(237, 237, 237);
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(128, 128, 128);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(128, 128, 128);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(245, 245, 245);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(128, 128, 128);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgba(61, 201, 219, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="accessible"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(207, 86%, 57%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYWNjZXNzaWJsZSI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE3IDMuMzRhMTAgMTAgMCAxIDEgLTE0Ljk5NSA4Ljk4NGwtLjAwNSAtLjMyNGwuMDA1IC0uMzI0YTEwIDEwIDAgMCAxIDE0Ljk5NSAtOC4zMzZ6bS0xLjA1MSA2Ljg0NGExIDEgMCAwIDAgLTEuMTUyIC0uNjYzbC0uMTEzIC4wM2wtMi42ODQgLjg5NWwtMi42ODQgLS44OTVsLS4xMTMgLS4wM2ExIDEgMCAwIDAgLS42MjggMS44ODRsLjEwOSAuMDQ0bDIuMzE2IC43NzF2Ljk3NmwtMS44MzIgMi43NWwtLjA2IC4xYTEgMSAwIDAgMCAuMjM3IDEuMjFsLjEgLjA3NmwuMTAxIC4wNmExIDEgMCAwIDAgMS4yMSAtLjIzN2wuMDc2IC0uMWwxLjE2OCAtMS43NTJsMS4xNjggMS43NTJsLjA3IC4wOTNhMSAxIDAgMCAwIDEuNjUzIC0xLjEwMmwtLjA1OSAtLjFsLTEuODMyIC0yLjc1di0uOTc3bDIuMzE2IC0uNzcxbC4xMDkgLS4wNDRhMSAxIDAgMCAwIC41MjQgLTEuMjIxem0tMy45NDkgLTQuMTg0YTEuNSAxLjUgMCAxIDAgMCAzYTEuNSAxLjUgMCAwIDAgMCAtM3oiIC8+PC9zdmc+");
  --callout-title-color: hsl(207, 86%, 57%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="archive"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYXJjaGl2ZSI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIgM20wIDJhMiAyIDAgMCAxIDIgLTJoMTZhMiAyIDAgMCAxIDIgMnYwYTIgMiAwIDAgMSAtMiAyaC0xNmEyIDIgMCAwIDEgLTIgLTJ6IiAvPjxwYXRoIGQ9Ik0xOSA5Yy41MTMgMCAuOTM2IC40NjMgLjk5MyAxLjA2bC4wMDcgLjE0djcuMmMwIDEuOTE3IC0xLjI0OSAzLjQ4NCAtMi44MjQgMy41OTRsLS4xNzYgLjAwNmgtMTBjLTEuNTk4IDAgLTIuOTA0IC0xLjQ5OSAtMi45OTUgLTMuMzg4bC0uMDA1IC0uMjEydi03LjJjMCAtLjY2MyAuNDQ4IC0xLjIgMSAtMS4yaDE0em0tNSAyaC00bC0uMTE3IC4wMDdhMSAxIDAgMCAwIDAgMS45ODZsLjExNyAuMDA3aDRsLjExNyAtLjAwN2ExIDEgMCAwIDAgMCAtMS45ODZsLS4xMTcgLS4wMDd6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="award"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYXdhcmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xOS40OTYgMTMuOTgzbDEuOTY2IDMuNDA2YTEuMDAxIDEuMDAxIDAgMCAxIC0uNzA1IDEuNDg4bC0uMTEzIC4wMTFsLS4xMTIgLS4wMDFsLTIuOTMzIC0uMTlsLTEuMzAzIDIuNjM2YTEuMDAxIDEuMDAxIDAgMCAxIC0xLjYwOCAuMjZsLS4wODIgLS4wOTRsLS4wNzIgLS4xMWwtMS45NjggLTMuNDA3YTguOTk0IDguOTk0IDAgMCAwIDYuOTMgLTMuOTk5eiIgLz48cGF0aCBkPSJNMTEuNDMgMTcuOTgybC0xLjk2NiAzLjQwOGExLjAwMSAxLjAwMSAwIDAgMSAtMS42MjIgLjE1N2wtLjA3NiAtLjFsLS4wNjQgLS4xMTRsLTEuMzA0IC0yLjYzNWwtMi45MzEgLjE5YTEuMDAxIDEuMDAxIDAgMCAxIC0xLjAyMiAtMS4yOWwuMDQgLS4xMDdsLjA1IC0uMWwxLjk2OCAtMy40MDlhOC45OTQgOC45OTQgMCAwIDAgNi45MjcgNC4wMDF6IiAvPjxwYXRoIGQ9Ik0xMiAybC4yNCAuMDA0YTcgNyAwIDAgMSA2Ljc2IDYuOTk2bC0uMDAzIC4xOTNsLS4wMDcgLjE5MmwtLjAxOCAuMjQ1bC0uMDI2IC4yNDJsLS4wMjQgLjE3OGE2Ljk4NSA2Ljk4NSAwIDAgMSAtLjMxNyAxLjI2OGwtLjExNiAuMzA4bC0uMTUzIC4zNDhhNy4wMDEgNy4wMDEgMCAwIDEgLTEyLjY4OCAtLjAyOGwtLjEzIC0uMjk3bC0uMDUyIC0uMTMzbC0uMDggLS4yMTdsLS4wOTUgLS4yOTRhNi45NiA2Ljk2IDAgMCAxIC0uMDkzIC0uMzQ0bC0uMDYgLS4yNzFsLS4wNDkgLS4yNzFsLS4wMiAtLjEzOWwtLjAzOSAtLjMyM2wtLjAyNCAtLjM2NWwtLjAwNiAtLjI5MmE3IDcgMCAwIDEgNi43NiAtNi45OTZsLjI0IC0uMDA0eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="badge"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(47, 100%, 62%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmFkZ2UiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNi40ODYgMy4xNDNsLTQuNDg2IDIuNjlsLTQuNDg2IC0yLjY5YTEgMSAwIDAgMCAtMS41MTQgLjg1N3YxM2ExIDEgMCAwIDAgLjQ4NiAuODU3bDUgM2ExIDEgMCAwIDAgMS4wMjggMGw1IC0zYTEgMSAwIDAgMCAuNDg2IC0uODU3di0xM2ExIDEgMCAwIDAgLTEuNTE0IC0uODU3eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(47, 100%, 62%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(255, 213, 61, 0.1);
  border-bottom-color: rgba(255, 213, 61, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 213, 61, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 213, 61, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 213, 61, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="badges"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(47, 100%, 62%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmFkZ2VzIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTYuNDg2IDEyLjE0M2wtNC40ODYgMi42OWwtNC40ODYgLTIuNjlhMSAxIDAgMCAwIC0xLjUxNCAuODU3djRhMSAxIDAgMCAwIC40ODYgLjg1N2w1IDNhMSAxIDAgMCAwIDEuMDI4IDBsNSAtM2ExIDEgMCAwIDAgLjQ4NiAtLjg1N3YtNGExIDEgMCAwIDAgLTEuNTE0IC0uODU3eiIgLz48cGF0aCBkPSJNMTYuNDg2IDMuMTQzbC00LjQ4NiAyLjY5bC00LjQ4NiAtMi42OWExIDEgMCAwIDAgLTEuNTE0IC44NTd2NGExIDEgMCAwIDAgLjQ4NiAuODU3bDUgM2ExIDEgMCAwIDAgMS4wMjggMGw1IC0zYTEgMSAwIDAgMCAuNDg2IC0uODU3di00YTEgMSAwIDAgMCAtMS41MTQgLS44NTd6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(47, 100%, 62%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(255, 213, 61, 0.1);
  border-bottom-color: rgba(255, 213, 61, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 213, 61, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 213, 61, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 213, 61, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="balloon"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(228, 96%, 72%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmFsbG9vbiI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDFhNyA3IDAgMCAxIDcgN2MwIDUuNDU3IC0zLjAyOCAxMCAtNyAxMGMtMy45IDAgLTYuODkgLTQuMzc5IC02Ljk5NyAtOS43MDNsLS4wMDMgLS4yOTdsLjAwNCAtLjI0YTcgNyAwIDAgMSA2Ljk5NiAtNi43NnptMCA0YTEgMSAwIDAgMCAwIDJsLjExNyAuMDA3YTEgMSAwIDAgMSAuODgzIC45OTNsLjAwNyAuMTE3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2EzIDMgMCAwIDAgLTMgLTN6IiAvPjxwYXRoIGQ9Ik0xMiAxNmExIDEgMCAwIDEgLjk5MyAuODgzbC4wMDcgLjExN3YxYTMgMyAwIDAgMSAtMi44MjQgMi45OTVsLS4xNzYgLjAwNWgtM2ExIDEgMCAwIDAgLS45OTMgLjg4M2wtLjAwNyAuMTE3YTEgMSAwIDAgMSAtMiAwYTMgMyAwIDAgMSAyLjgyNCAtMi45OTVsLjE3NiAtLjAwNWgzYTEgMSAwIDAgMCAuOTkzIC0uODgzbC4wMDcgLS4xMTd2LTFhMSAxIDAgMCAxIDEgLTF6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(228, 96%, 72%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(115, 142, 252, 0.1);
  border-bottom-color: rgba(115, 142, 252, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(115, 142, 252, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(115, 142, 252, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(115, 142, 252, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="bandage"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmFuZGFnZSI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwLjIwNyAzLjc5M2E1Ljk1IDUuOTUgMCAwIDEgLjE3OSA4LjIyOGwtLjE3OSAuMTg2bC04IDhhNS45NSA1Ljk1IDAgMCAxIC04LjU5MyAtOC4yMjhsLjE3OSAtLjE4Nmw4IC04YTUuOTUgNS45NSAwIDAgMSA4LjQxNCAwem0tOC4yMDcgOS4yMDdhMSAxIDAgMCAwIC0xIDFsLjAwNyAuMTI3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wtLjAwNyAtLjEyN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6bTIgLTJhMSAxIDAgMCAwIC0xIDFsLjAwNyAuMTI3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wtLjAwNyAtLjEyN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6bS00IDBhMSAxIDAgMCAwIC0xIDFsLjAwNyAuMTI3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wtLjAwNyAtLjEyN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6bTIgLTJhMSAxIDAgMCAwIC0xIDFsLjAwNyAuMTI3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wtLjAwNyAtLjEyN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="bell"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmVsbCI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE0LjIzNSAxOWMuODY1IDAgMS4zMjIgMS4wMjQgLjc0NSAxLjY2OGEzLjk5MiAzLjk5MiAwIDAgMSAtMi45OCAxLjMzMmEzLjk5MiAzLjk5MiAwIDAgMSAtMi45OCAtMS4zMzJjLS41NTIgLS42MTYgLS4xNTggLTEuNTc5IC42MzQgLTEuNjYxbC4xMSAtLjAwNmg0LjQ3MXoiIC8+PHBhdGggZD0iTTEyIDJjMS4zNTggMCAyLjUwNiAuOTAzIDIuODc1IDIuMTQxbC4wNDYgLjE3MWwuMDA4IC4wNDNhOC4wMTMgOC4wMTMgMCAwIDEgNC4wMjQgNi4wNjlsLjAyOCAuMjg3bC4wMTkgLjI4OXYyLjkzMWwuMDIxIC4xMzZhMyAzIDAgMCAwIDEuMTQzIDEuODQ3bC4xNjcgLjExN2wuMTYyIC4wOTljLjg2IC40ODcgLjU2IDEuNzY2IC0uMzc3IDEuODY0bC0uMTE2IC4wMDZoLTE2Yy0xLjAyOCAwIC0xLjM4NyAtMS4zNjQgLS40OTMgLTEuODdhMyAzIDAgMCAwIDEuNDcyIC0yLjA2M2wuMDIxIC0uMTQzbC4wMDEgLTIuOTdhOCA4IDAgMCAxIDMuODIxIC02LjQ1NGwuMjQ4IC0uMTQ2bC4wMSAtLjA0M2EzLjAwMyAzLjAwMyAwIDAgMSAyLjU2MiAtMi4yOWwuMTgyIC0uMDE3bC4xNzYgLS4wMDR6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="bitcoin"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(47, 100%, 62%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY29pbi1iaXRjb2luIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTcgMy4zNGExMCAxMCAwIDEgMSAtMTUgOC42NmwuMDA1IC0uMzI0YTEwIDEwIDAgMCAxIDE0Ljk5NSAtOC4zMzZ6bS00IDIuNjZhMSAxIDAgMCAwIC0xIDFoLTFhMSAxIDAgMCAwIC0yIDBhMSAxIDAgMSAwIDAgMnY2YTEgMSAwIDAgMCAwIDJjMCAxLjMzMyAyIDEuMzMzIDIgMGgxYTEgMSAwIDAgMCAyIDB2LS4xNWMxLjE2NyAtLjM5NCAyIC0xLjUyNyAyIC0yLjg1bC0uMDA1IC0uMTc1YTMuMDYzIDMuMDYzIDAgMCAwIC0uNzM0IC0xLjgyN2MuNDYgLS41MzIgLjczOSAtMS4yMzMgLjczOSAtMS45OThjMCAtMS4zMjMgLS44MzMgLTIuNDU2IC0yIC0yLjg1di0uMTVhMSAxIDAgMCAwIC0xIC0xem0uMDkgN2MuNDkyIDAgLjkxIC40MzcgLjkxIDFzLS40MTggMSAtLjkxIDFoLTIuMDl2LTJoMi4wOXptMCAtNGMuNDkyIDAgLjkxIC40MzcgLjkxIDFjMCAuNTIyIC0uMzYgLjkzNyAtLjgwNiAuOTkzbC0uMTA0IC4wMDdoLTIuMDl2LTJoMi4wOXoiIC8+PC9zdmc+");
  --callout-title-color: hsl(47, 100%, 62%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(255, 213, 61, 0.1);
  border-bottom-color: rgba(255, 213, 61, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 213, 61, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 213, 61, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 213, 61, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="briefcase"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYnJpZWZjYXNlLTIiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNCAyYTMgMyAwIDAgMSAzIDN2MWgyYTMgMyAwIDAgMSAzIDN2OWEzIDMgMCAwIDEgLTMgM2gtMTRhMyAzIDAgMCAxIC0zIC0zdi05YTMgMyAwIDAgMSAzIC0zaDJ2LTFhMyAzIDAgMCAxIDMgLTN6bTAgMmgtNGExIDEgMCAwIDAgLTEgMXYxaDZ2LTFhMSAxIDAgMCAwIC0xIC0xIiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="bubble"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYnViYmxlIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTIuNCAyYTYuMzMgNi4zMyAwIDAgMSA1LjQ5MSAzLjE3NmwuMDkgLjE2MmwuMTI2IC4wMjdhNi4zMzUgNi4zMzUgMCAwIDEgNC44ODkgNS45MzRsLjAwNCAuMjM0YTYuMzMzIDYuMzMzIDAgMCAxIC02LjMzMyA2LjMzNGwtLjAzNSAtLjAwMmwtLjAzNSAuMDVhNS4yNiA1LjI2IDAgMCAxIC0zLjk1OCAyLjA4bC0uMjM5IC4wMDVxIC0uNzIyIDAgLTEuNDA0IC0uMTlsLS4wNDcgLS4wMTRsLTMuNDM0IDIuMDYxYTEgMSAwIDAgMSAtMS41MDkgLS43NDNsLS4wMDYgLS4xMTR2LTIuNDM0bC0uMTIxIC0uMDZhMy42NyAzLjY3IDAgMCAxIC0xLjk0IC0zLjA0MmwtLjAwNiAtLjE5N3EgMCAtLjM2NSAuMDcgLS43MTdsLjAxMyAtLjA1OGwtLjExMyAtLjA5YTUuOCA1LjggMCAwIDEgLTIuMDk4IC00LjIxOGwtLjAwNSAtLjI1YTUuOCA1LjggMCAwIDEgNS44IC01LjhsLjA1OCAuMDAxbC4xNSAtLjE2M2E2LjMyIDYuMzIgMCAwIDEgNC4zMjggLTEuOTY3eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="camera"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2FtZXJhIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTUgM2EyIDIgMCAwIDEgMS45OTUgMS44NWwuMDA1IC4xNWExIDEgMCAwIDAgLjg4MyAuOTkzbC4xMTcgLjAwN2gxYTMgMyAwIDAgMSAyLjk5NSAyLjgyNGwuMDA1IC4xNzZ2OWEzIDMgMCAwIDEgLTIuODI0IDIuOTk1bC0uMTc2IC4wMDVoLTE0YTMgMyAwIDAgMSAtMi45OTUgLTIuODI0bC0uMDA1IC0uMTc2di05YTMgMyAwIDAgMSAyLjgyNCAtMi45OTVsLjE3NiAtLjAwNWgxYTEgMSAwIDAgMCAxIC0xYTIgMiAwIDAgMSAxLjg1IC0xLjk5NWwuMTUgLS4wMDVoNnptLTMgN2EzIDMgMCAwIDAgLTIuOTg1IDIuNjk4bC0uMDExIC4xNTJsLS4wMDQgLjE1bC4wMDQgLjE1YTMgMyAwIDEgMCAyLjk5NiAtMy4xNXoiIC8+PC9zdmc+");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="cannabis"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(82, 75%, 69%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2FubmFiaXMiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMi44OTQgMS41NTNjMS40NzIgMi45NDUgMi4xNyA1LjAyOCAyLjI0NCA2LjgxMmwuMDAxIC4wOTFsLjAzMiAtLjAyMmE4LjcgOC43IDAgMCAxIDIuNzMgLTEuMTkxbC4zNTIgLS4wNzlhOCA4IDAgMCAxIDEuNTYyIC0uMTY5bC4yNTMgLjAwN2ExIDEgMCAwIDEgLjg1IDEuMzk2Yy0uOTQ5IDIuMTg3IC0xLjgxOCAzLjU5NSAtMi45MDIgNC42NjRsLS4wNjEgLjA1OGwuMjUgLjA1NXEgLjQ1IC4xMDggLjg2OSAuMjU5bC4yNzYgLjEwNGMuNTg2IC4yMzUgMS4wMDYgLjQ3OSAxLjI1IC42NjJhMSAxIDAgMCAxIC0uMDQyIDEuNjNsLS4xOTkgLjExMmwtMS4xMzMgLjU4N2MtLjU2NyAuMjg5IC0xLjE2NiAuNTg0IC0xLjQwNCAuNjdxIC0uMTIzIC4wNDUgLS4yNDQgLjA4M2wtLjA3NCAuMDE5bC4wMTYgLjA0MmMuMzI3IC45MTIgLjQ1NiAxLjc4OSAuNDc3IDIuNDYybC4wMDMgLjE5NWExIDEgMCAwIDEgLTEgMWMtMS4yNTcgMCAtMi43NyAtLjcyOSAtNC4wMDEgLTEuNjQ3bC4wMDEgMi42NDdhMSAxIDAgMCAxIC0yIDB2LTIuNjQ3Yy0xLjE2IC44NjYgLTIuNTcgMS41NjMgLTMuNzgxIDEuNjRsLS4yMTkgLjAwN2ExIDEgMCAwIDEgLTEgLTFjMCAtLjYyNCAuMDk4IC0xLjQ2NCAuMzc5IC0yLjM1OGwuMTE2IC0uMzQxbC0uMDczIC0uMDJsLS4yNDQgLS4wODFjLS4zNDMgLS4xMjUgLTEuNDQyIC0uNjg2IC0yLjEwNiAtMS4wMzJsLS41MiAtLjI3NGExIDEgMCAwIDEgLS4xNTIgLTEuNjk0Yy4yNDQgLS4xODMgLjY2NCAtLjQyNyAxLjI1IC0uNjYyYTggOCAwIDAgMSAxLjE0NSAtLjM2M2wuMjQ5IC0uMDU1bC0uMDYgLS4wNThjLTEuMDI0IC0xLjAxIC0xLjg1NiAtMi4zMjIgLTIuNzQ0IC00LjMwN2wtLjE1NyAtLjM1N2ExIDEgMCAwIDEgLjcyNCAtMS4zOGwuMTQ5IC0uMDE3bC4wNTggLS4wMDNhNy41IDcuNSAwIDAgMSAxLjc0NCAuMTU5YTguNiA4LjYgMCAwIDEgMi43MjcgMS4wNDVsLjI3IC4xNjl2LS4wMzdjLS4wMjggLTEuNTk0IC4zNzUgLTMuMTggMS4wOTUgLTQuNzA0bC4xMzkgLS4yODVjLjQ1NSAtLjkwOCAuOTE0IC0xLjU4NiAxLjIzOCAtMS45OGExIDEgMCAwIDEgMS42NjYgLjE4OSIgLz48L3N2Zz4=");
  --callout-title-color: hsl(82, 75%, 69%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(192, 235, 117, 0.1);
  border-bottom-color: rgba(192, 235, 117, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(192, 235, 117, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(192, 235, 117, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(192, 235, 117, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="card"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(130, 61%, 64%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY3JlZGl0LWNhcmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMiAxMHY2YTQgNCAwIDAgMSAtNCA0aC0xMmE0IDQgMCAwIDEgLTQgLTR2LTZoMjB6bS0xNC45OSA0aC0uMDFhMSAxIDAgMSAwIC4wMSAyYTEgMSAwIDAgMCAwIC0yem01Ljk5IDBoLTJhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwIC0yem01IC0xMGE0IDQgMCAwIDEgNCA0aC0yMGE0IDQgMCAwIDEgNCAtNGgxMnoiIC8+PC9zdmc+");
  --callout-title-color: hsl(130, 61%, 64%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(107, 219, 126, 0.1);
  border-bottom-color: rgba(107, 219, 126, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 219, 126, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(107, 219, 126, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(107, 219, 126, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="clipboard"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2xpcGJvYXJkIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTcuOTk3IDQuMTdhMyAzIDAgMCAxIDIuMDAzIDIuODN2MTJhMyAzIDAgMCAxIC0zIDNoLTEwYTMgMyAwIDAgMSAtMyAtM3YtMTJhMyAzIDAgMCAxIDIuMDAzIC0yLjgzYTQgNCAwIDAgMCAzLjk5NyAzLjgzaDRhNCA0IDAgMCAwIDMuOTggLTMuNTk3em0tMy45OTcgLTIuMTdhMiAyIDAgMSAxIDAgNGgtNGEyIDIgMCAxIDEgMCAtNHoiIC8+PC9zdmc+");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="clock"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2xvY2siPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNyAzLjM0YTEwIDEwIDAgMSAxIC0xNC45OTUgOC45ODRsLS4wMDUgLS4zMjRsLjAwNSAtLjMyNGExMCAxMCAwIDAgMSAxNC45OTUgLTguMzM2em0tNSAyLjY2YTEgMSAwIDAgMCAtLjk5MyAuODgzbC0uMDA3IC4xMTd2NWwuMDA5IC4xMzFhMSAxIDAgMCAwIC4xOTcgLjQ3N2wuMDg3IC4xbDMgM2wuMDk0IC4wODJhMSAxIDAgMCAwIDEuMjI2IDBsLjA5NCAtLjA4M2wuMDgzIC0uMDk0YTEgMSAwIDAgMCAwIC0xLjIyNmwtLjA4MyAtLjA5NGwtMi43MDcgLTIuNzA4di00LjU4NWwtLjAwNyAtLjExN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="cloud"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(206, 96%, 72%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2xvdWQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMC4wNCA0LjMwNWMyLjE5NSAtLjY2NyA0LjYxNSAtLjIyNCA2LjM2IDEuMTc2YzEuMzg2IDEuMTA4IDIuMTg4IDIuNjg2IDIuMjUyIDQuMzRsLjAwMyAuMjEybC4wOTEgLjAwM2MyLjMgLjEwNyA0LjE0MyAxLjk2MSA0LjI1IDQuMjdsLjAwNCAuMjExYzAgMi40MDcgLTEuODg1IDQuMzcyIC00LjI1NSA0LjQ4MmwtLjIxIC4wMDVoLTExLjg3OGwtLjIyMiAtLjAwOGMtMi45NCAtLjExIC01LjMxNyAtMi4zOTkgLTUuNDMgLTUuMjYzbC0uMDA1IC0uMjE2YzAgLTIuNzQ3IDIuMDggLTUuMDEgNC43ODQgLTUuNDE3bC4xMTQgLS4wMTZsLjA3IC0uMTgxYy42NjMgLTEuNjIgMi4wNTYgLTIuOTA2IDMuODI5IC0zLjUxOGwuMjQ0IC0uMDh6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(206, 96%, 72%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(115, 193, 252, 0.1);
  border-bottom-color: rgba(115, 193, 252, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(115, 193, 252, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(115, 193, 252, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(115, 193, 252, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(210, 11%, 71%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY29kZS1jaXJjbGUiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNyAzLjM0YTEwIDEwIDAgMSAxIC0xNSA4LjY2bC4wMDUgLS4zMjRhMTAgMTAgMCAwIDEgMTQuOTk1IC04LjMzNm0tNi4yOTMgNS45NTNhMSAxIDAgMCAwIC0xLjQxNCAwbC0yIDJhMSAxIDAgMCAwIDAgMS40MTRsMiAyYTEgMSAwIDAgMCAxLjQxNCAwbC4wODMgLS4wOTRhMSAxIDAgMCAwIC0uMDgzIC0xLjMybC0xLjI5MiAtMS4yOTNsMS4yOTIgLTEuMjkzYTEgMSAwIDAgMCAwIC0xLjQxNG00IDBhMSAxIDAgMCAwIC0xLjQxNCAwbC0uMDgzIC4wOTRhMSAxIDAgMCAwIC4wODMgMS4zMmwxLjI5MiAxLjI5M2wtMS4yOTIgMS4yOTNhMSAxIDAgMCAwIDEuNDE0IDEuNDE0bDIgLTJhMSAxIDAgMCAwIDAgLTEuNDE0eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(210, 11%, 71%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(173, 181, 189, 0.1);
  border-bottom-color: rgba(173, 181, 189, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(173, 181, 189, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(173, 181, 189, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(173, 181, 189, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="cookie"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY29va2llIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTMuNTMgMi41NTJsMi42NjcgMS4xMDRhMSAxIDAgMCAxIC40MTQgMS41M2EzIDMgMCAwIDAgMy40OTIgNC42MDRhMSAxIDAgMCAxIDEuMjk2IC41NTdsLjA0OSAuMTIyYTQgNCAwIDAgMSAwIDMuMDYybC0uMDc5IC4xNTFjLS40NjcgLjc0IC0uNzg1IDEuMzE0IC0uOTQ1IDEuN2MtLjE2NiAuNCAtLjM3MyAxLjA5NyAtLjYxMyAyLjA3M2wtLjA0NyAuMTQ0YTQgNCAwIDAgMSAtMi4xNjYgMi4xNjRsLS4xMzkgLjA0NmMtMS4wMDYgLjI1MyAtMS43MDUgLjQ2MSAtMi4wNzYgLjYxNWMtLjQxMiAuMTcgLS45ODIgLjQ4NiAtMS42OTYgLjk0MmwtLjE1NiAuMDgyYTQgNCAwIDAgMSAtMy4wNjIgMGwtLjE0OCAtLjA3N2MtLjc1OSAtLjQ3NSAtMS4zMzMgLS43OTMgLTEuNzA0IC0uOTQ3Yy0uNDEzIC0uMTcxIC0xLjEwOSAtLjM3OCAtMi4wNyAtLjYxMmwtLjE0NiAtLjA0OGE0IDQgMCAwIDEgLTIuMTY0IC0yLjE2NmwtLjA0NiAtLjEzOGMtLjI1NCAtMS4wMDkgLS40NjMgLTEuNzA5IC0uNjE1IC0yLjA3OHEgLS4yNTYgLS42MjEgLS45NDIgLTEuNjk1bC0uMDgyIC0uMTU2YTQgNCAwIDAgMSAwIC0zLjA2MmwuMDg0IC0uMTZjLjQ0NyAtLjY5MiAuNzYxIC0xLjI2MiAuOTQgLTEuNjkyYy4xNDcgLS4zNTUgLjM1NiAtMS4wNTcgLjYxNSAtMi4wNzhsLjA0NSAtLjEzOGE0IDQgMCAwIDEgMi4xNjYgLTIuMTY0bC4xNDEgLS4wNDdjLjk4OCAtLjI0NSAxLjY4NiAtLjQ1MyAyLjA3NCAtLjYxNGMuMzk1IC0uMTY0IC45NjcgLS40OCAxLjcgLS45NDRsLjE1MiAtLjA4YTQgNCAwIDAgMSAzLjA2MiAwbS0xLjUzMSAxMy40NDhhMSAxIDAgMCAwIC0xIDF2LjAxYTEgMSAwIDAgMCAyIDB2LS4wMWExIDEgMCAwIDAgLTEgLTFtNCAtM2ExIDEgMCAwIDAgLTEgMXYuMDFhMSAxIDAgMCAwIDIgMHYtLjAxYTEgMSAwIDAgMCAtMSAtMW0tOCAtMWExIDEgMCAwIDAgLTEgMXYuMDFhMSAxIDAgMCAwIDIgMHYtLjAxYTEgMSAwIDAgMCAtMSAtMW00IC0xYTEgMSAwIDAgMCAtMSAxdi4wMWExIDEgMCAwIDAgMiAwdi0uMDFhMSAxIDAgMCAwIC0xIC0xbS0xIC00Yy0uNTUyIDAgLTEgLjQ0OCAtMSAxLjAxYTEgMSAwIDEgMCAyIC0uMDFhMSAxIDAgMCAwIC0xIC0xIiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="desktop"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItZGV2aWNlLWRlc2t0b3AiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik03IDIxYTEgMSAwIDAgMSAwIC0yaDF2LTJoLTRhMiAyIDAgMCAxIC0yIC0ydi0xMGEyIDIgMCAwIDEgMiAtMmgxNmEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMSAtMiAyaC00djJoMWExIDEgMCAwIDEgMCAyem03IC00aC00djJoNHoiIC8+PC9zdmc+");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="diamond"] {
  --callout-color: 2, 122, 255;
  --callout-icon-color: hsl(207, 86%, 57%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItZGlhbW9uZCI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4IDRhMSAxIDAgMCAxIC43ODMgLjM3OGwuMDc0IC4xMDhsMyA1YTEgMSAwIDAgMSAtLjAzMiAxLjA3OGwtLjA4IC4xMDNsLTguNTMgOS41MzNhMS43IDEuNyAwIDAgMSAtMS4yMTUgLjUxYy0uNCAwIC0uNzg1IC0uMTQgLTEuMTEgLS40MTdsLS4xMzUgLS4xMjZsLTguNSAtOS41YTEgMSAwIDAgMSAtLjE3MiAtMS4wNjdsLjA2IC0uMTE1bDMuMDEzIC01LjAyMmwuMDY0IC0uMDlhLjk4MiAuOTgyIDAgMCAxIC4xNTUgLS4xNTRsLjA4OSAtLjA2NGwuMDg4IC0uMDVsLjA1IC0uMDIzbC4wNiAtLjAyNWwuMTA5IC0uMDMybC4xMTIgLS4wMmwuMTE3IC0uMDA1aDEyem0tOC44ODYgMy45NDNhMSAxIDAgMCAwIC0xLjM3MSAuMzQzbC0uNiAxbC0uMDYgLjExNmExIDEgMCAwIDAgLjE3NyAxLjA3bDIgMi4ybC4wOSAuMDg4YTEgMSAwIDAgMCAxLjMyMyAtLjAybC4wODcgLS4wOWExIDEgMCAwIDAgLS4wMiAtMS4zMjNsLTEuNTAxIC0xLjY1bC4yMTggLS4zNjNsLjA1NSAtLjEwM2ExIDEgMCAwIDAgLS4zOTggLTEuMjY4eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(207, 86%, 57%);
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, hsl(0, 0%, 11%) 50%);
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgba(153, 110, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgba(51, 155, 240, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background: rgba(51, 155, 240, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgba(255, 169, 77, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(173, 181, 189, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background: rgba(107, 219, 126, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgba(61, 201, 219, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgba(51, 155, 240, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgba(255, 169, 77, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(245, 245, 245);
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

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(153, 109, 247, 0.1);
  border-bottom-color: rgba(153, 109, 247, 0.15);
  border-left-color: rgba(153, 109, 247, 0.15);
  border-right-color: rgba(153, 109, 247, 0.15);
  border-top-color: rgba(153, 109, 247, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body h1 {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 245, 245);
  font-size: 24px;
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(255, 255, 255, 0.07);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(153, 109, 247);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(153, 109, 247);
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
    canvas: `html[saved-theme="dark"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(51, 51, 51);
  color: rgb(245, 245, 245);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(36, 36, 36);
  border-color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(245, 245, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
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
  --shiki-active-tab-border-color: hsl(0, 0%, 20%) !important;
  --shiki-code-background: hsl(0, 0%, 96%) !important;
  --shiki-code-block-border-radius: 8px !important;
  --shiki-code-comment: hsl(0, 0%, 60%) !important;
  --shiki-code-normal: hsl(0, 0%, 20%) !important;
  --shiki-code-punctuation: hsl(0, 0%, 20%) !important;
  --shiki-gutter-border-color: hsl(0, 0%, 90%) !important;
  --shiki-gutter-text-color: hsl(0, 0%, 60%) !important;
  --shiki-gutter-text-color-highlight: hsl(0, 0%, 20%) !important;
  --shiki-highlight-neutral: hsl(0, 0%, 20%) !important;
  --shiki-terminal-dots-color: hsl(0, 0%, 60%) !important;
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
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(153, 109, 247);
  outline: rgb(153, 109, 247) none 0px;
  text-decoration-color: rgb(153, 109, 247);
}

html[saved-theme="light"] body a.internal-link.broken {
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
  color: rgb(43, 43, 43);
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(153, 153, 153);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(153, 153, 153);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(36, 36, 36);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 153, 153);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEM3LjgyNTYgMCA3LjY1NDQgMC4wMDE2MDAwOSA3LjQ4NjQgMC4wMDQwMDAwOUw2Ljk5MzYgMC4wMTc2MDAxTDYuNzU0NCAwLjAyODAwMDFMNi4yOTEyIDAuMDU1Mkw1Ljg0ODggMC4wOTJDMi4wMjA4IDAuNDYzMiAwLjQ2MzIgMi4wMjA4IDAuMDkyIDUuODQ4OEwwLjA1NTIgNi4yOTEyTDAuMDI4MDAwMSA2Ljc1NDRDMC4wMjQwMDAxIDYuODMyOCAwLjAyMDAwMDEgNi45MTI4IDAuMDE3NjAwMSA2Ljk5MzZMMC4wMDQwMDAwOSA3LjQ4NjRMMC4wMDA3OTk5NDIgNy43NDA4TDAgOEMwIDguMTc0NCAwLjAwMTYwMDA5IDguMzQ1NiAwLjAwNDAwMDA5IDguNTEzNkwwLjAxNzYwMDEgOS4wMDY0TDAuMDI4MDAwMSA5LjI0NTZMMC4wNTUyIDkuNzA4OEwwLjA5MiAxMC4xNTEyQzAuNDYzMiAxMy45NzkyIDIuMDIwOCAxNS41MzY4IDUuODQ4OCAxNS45MDhMNi4yOTEyIDE1Ljk0NDhMNi43NTQ0IDE1Ljk3MkM2LjgzMjggMTUuOTc2IDYuOTEyOCAxNS45OCA2Ljk5MzYgMTUuOTgyNEw3LjQ4NjQgMTUuOTk2TDggMTZMOC41MTM2IDE1Ljk5Nkw5LjAwNjQgMTUuOTgyNEw5LjI0NTYgMTUuOTcyTDkuNzA4OCAxNS45NDQ4TDEwLjE1MTIgMTUuOTA4QzEzLjk3OTIgMTUuNTM2OCAxNS41MzY4IDEzLjk3OTIgMTUuOTA4IDEwLjE1MTJMMTUuOTQ0OCA5LjcwODhMMTUuOTcyIDkuMjQ1NkMxNS45NzYgOS4xNjcyIDE1Ljk4IDkuMDg3MiAxNS45ODI0IDkuMDA2NEwxNS45OTYgOC41MTM2TDE2IDhMMTUuOTk2IDcuNDg2NEwxNS45ODI0IDYuOTkzNkwxNS45NzIgNi43NTQ0TDE1Ljk0NDggNi4yOTEyTDE1LjkwOCA1Ljg0ODhDMTUuNTM2OCAyLjAyMDggMTMuOTc5MiAwLjQ2MzIgMTAuMTUxMiAwLjA5Mkw5LjcwODggMC4wNTUyTDkuMjQ1NiAwLjAyODAwMDFDOS4xNjU4OSAwLjAyNDEwODIgOS4wODYxNSAwLjAyMDY0MTUgOS4wMDY0IDAuMDE3NjAwMUw4LjUxMzYgMC4wMDQwMDAwOUw4LjI1OTIgMC4wMDA3OTk5NDJMOCAwWk05LjgzNDQgNS44MzQ0QzkuOTc4MzcgNS42OTA5MiAxMC4xNzE1IDUuNjA3NjIgMTAuMzc0NyA1LjYwMTQyQzEwLjU3NzkgNS41OTUyMSAxMC43NzU4IDUuNjY2NTcgMTAuOTI4MiA1LjgwMUMxMS4wODA3IDUuOTM1NDMgMTEuMTc2MiA2LjEyMjg0IDExLjE5NTUgNi4zMjUxOEMxMS4yMTQ4IDYuNTI3NTIgMTEuMTU2MyA2LjcyOTYxIDExLjAzMiA2Ljg5MDRMMTAuOTY1NiA2Ljk2NTZMNy43NjU2IDEwLjE2NTZDNy42Mjc4NSAxMC4zMDMzIDcuNDQ0NTcgMTAuMzg2MSA3LjI1MDE1IDEwLjM5ODNDNy4wNTU3MiAxMC40MTA1IDYuODYzNTIgMTAuMzUxNCA2LjcwOTYgMTAuMjMyTDYuNjM0NCAxMC4xNjU2TDUuMDM0NCA4LjU2NTZDNC44OTA5MiA4LjQyMTYzIDQuODA3NjIgOC4yMjg0NSA0LjgwMTQyIDguMDI1MjlDNC43OTUyMSA3LjgyMjEzIDQuODY2NTcgNy42MjQyMyA1LjAwMSA3LjQ3MTc4QzUuMTM1NDMgNy4zMTkzMyA1LjMyMjg0IDcuMjIzNzYgNS41MjUxOCA3LjIwNDQ4QzUuNzI3NTIgNy4xODUyMSA1LjkyOTYxIDcuMjQzNjcgNi4wOTA0IDcuMzY4TDYuMTY1NiA3LjQzNDRMNy4yIDguNDY4TDkuODM0NCA1LjgzNDRaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
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
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgba(61, 201, 219, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="accessible"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(207, 86%, 57%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYWNjZXNzaWJsZSI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE3IDMuMzRhMTAgMTAgMCAxIDEgLTE0Ljk5NSA4Ljk4NGwtLjAwNSAtLjMyNGwuMDA1IC0uMzI0YTEwIDEwIDAgMCAxIDE0Ljk5NSAtOC4zMzZ6bS0xLjA1MSA2Ljg0NGExIDEgMCAwIDAgLTEuMTUyIC0uNjYzbC0uMTEzIC4wM2wtMi42ODQgLjg5NWwtMi42ODQgLS44OTVsLS4xMTMgLS4wM2ExIDEgMCAwIDAgLS42MjggMS44ODRsLjEwOSAuMDQ0bDIuMzE2IC43NzF2Ljk3NmwtMS44MzIgMi43NWwtLjA2IC4xYTEgMSAwIDAgMCAuMjM3IDEuMjFsLjEgLjA3NmwuMTAxIC4wNmExIDEgMCAwIDAgMS4yMSAtLjIzN2wuMDc2IC0uMWwxLjE2OCAtMS43NTJsMS4xNjggMS43NTJsLjA3IC4wOTNhMSAxIDAgMCAwIDEuNjUzIC0xLjEwMmwtLjA1OSAtLjFsLTEuODMyIC0yLjc1di0uOTc3bDIuMzE2IC0uNzcxbC4xMDkgLS4wNDRhMSAxIDAgMCAwIC41MjQgLTEuMjIxem0tMy45NDkgLTQuMTg0YTEuNSAxLjUgMCAxIDAgMCAzYTEuNSAxLjUgMCAwIDAgMCAtM3oiIC8+PC9zdmc+");
  --callout-title-color: hsl(207, 86%, 57%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="archive"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYXJjaGl2ZSI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIgM20wIDJhMiAyIDAgMCAxIDIgLTJoMTZhMiAyIDAgMCAxIDIgMnYwYTIgMiAwIDAgMSAtMiAyaC0xNmEyIDIgMCAwIDEgLTIgLTJ6IiAvPjxwYXRoIGQ9Ik0xOSA5Yy41MTMgMCAuOTM2IC40NjMgLjk5MyAxLjA2bC4wMDcgLjE0djcuMmMwIDEuOTE3IC0xLjI0OSAzLjQ4NCAtMi44MjQgMy41OTRsLS4xNzYgLjAwNmgtMTBjLTEuNTk4IDAgLTIuOTA0IC0xLjQ5OSAtMi45OTUgLTMuMzg4bC0uMDA1IC0uMjEydi03LjJjMCAtLjY2MyAuNDQ4IC0xLjIgMSAtMS4yaDE0em0tNSAyaC00bC0uMTE3IC4wMDdhMSAxIDAgMCAwIDAgMS45ODZsLjExNyAuMDA3aDRsLjExNyAtLjAwN2ExIDEgMCAwIDAgMCAtMS45ODZsLS4xMTcgLS4wMDd6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="award"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYXdhcmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xOS40OTYgMTMuOTgzbDEuOTY2IDMuNDA2YTEuMDAxIDEuMDAxIDAgMCAxIC0uNzA1IDEuNDg4bC0uMTEzIC4wMTFsLS4xMTIgLS4wMDFsLTIuOTMzIC0uMTlsLTEuMzAzIDIuNjM2YTEuMDAxIDEuMDAxIDAgMCAxIC0xLjYwOCAuMjZsLS4wODIgLS4wOTRsLS4wNzIgLS4xMWwtMS45NjggLTMuNDA3YTguOTk0IDguOTk0IDAgMCAwIDYuOTMgLTMuOTk5eiIgLz48cGF0aCBkPSJNMTEuNDMgMTcuOTgybC0xLjk2NiAzLjQwOGExLjAwMSAxLjAwMSAwIDAgMSAtMS42MjIgLjE1N2wtLjA3NiAtLjFsLS4wNjQgLS4xMTRsLTEuMzA0IC0yLjYzNWwtMi45MzEgLjE5YTEuMDAxIDEuMDAxIDAgMCAxIC0xLjAyMiAtMS4yOWwuMDQgLS4xMDdsLjA1IC0uMWwxLjk2OCAtMy40MDlhOC45OTQgOC45OTQgMCAwIDAgNi45MjcgNC4wMDF6IiAvPjxwYXRoIGQ9Ik0xMiAybC4yNCAuMDA0YTcgNyAwIDAgMSA2Ljc2IDYuOTk2bC0uMDAzIC4xOTNsLS4wMDcgLjE5MmwtLjAxOCAuMjQ1bC0uMDI2IC4yNDJsLS4wMjQgLjE3OGE2Ljk4NSA2Ljk4NSAwIDAgMSAtLjMxNyAxLjI2OGwtLjExNiAuMzA4bC0uMTUzIC4zNDhhNy4wMDEgNy4wMDEgMCAwIDEgLTEyLjY4OCAtLjAyOGwtLjEzIC0uMjk3bC0uMDUyIC0uMTMzbC0uMDggLS4yMTdsLS4wOTUgLS4yOTRhNi45NiA2Ljk2IDAgMCAxIC0uMDkzIC0uMzQ0bC0uMDYgLS4yNzFsLS4wNDkgLS4yNzFsLS4wMiAtLjEzOWwtLjAzOSAtLjMyM2wtLjAyNCAtLjM2NWwtLjAwNiAtLjI5MmE3IDcgMCAwIDEgNi43NiAtNi45OTZsLjI0IC0uMDA0eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="badge"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(47, 100%, 62%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmFkZ2UiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNi40ODYgMy4xNDNsLTQuNDg2IDIuNjlsLTQuNDg2IC0yLjY5YTEgMSAwIDAgMCAtMS41MTQgLjg1N3YxM2ExIDEgMCAwIDAgLjQ4NiAuODU3bDUgM2ExIDEgMCAwIDAgMS4wMjggMGw1IC0zYTEgMSAwIDAgMCAuNDg2IC0uODU3di0xM2ExIDEgMCAwIDAgLTEuNTE0IC0uODU3eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(47, 100%, 62%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(255, 213, 61, 0.1);
  border-bottom-color: rgba(255, 213, 61, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 213, 61, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 213, 61, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 213, 61, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="badges"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(47, 100%, 62%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmFkZ2VzIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTYuNDg2IDEyLjE0M2wtNC40ODYgMi42OWwtNC40ODYgLTIuNjlhMSAxIDAgMCAwIC0xLjUxNCAuODU3djRhMSAxIDAgMCAwIC40ODYgLjg1N2w1IDNhMSAxIDAgMCAwIDEuMDI4IDBsNSAtM2ExIDEgMCAwIDAgLjQ4NiAtLjg1N3YtNGExIDEgMCAwIDAgLTEuNTE0IC0uODU3eiIgLz48cGF0aCBkPSJNMTYuNDg2IDMuMTQzbC00LjQ4NiAyLjY5bC00LjQ4NiAtMi42OWExIDEgMCAwIDAgLTEuNTE0IC44NTd2NGExIDEgMCAwIDAgLjQ4NiAuODU3bDUgM2ExIDEgMCAwIDAgMS4wMjggMGw1IC0zYTEgMSAwIDAgMCAuNDg2IC0uODU3di00YTEgMSAwIDAgMCAtMS41MTQgLS44NTd6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(47, 100%, 62%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(255, 213, 61, 0.1);
  border-bottom-color: rgba(255, 213, 61, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 213, 61, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 213, 61, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 213, 61, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="balloon"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(228, 96%, 72%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmFsbG9vbiI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDFhNyA3IDAgMCAxIDcgN2MwIDUuNDU3IC0zLjAyOCAxMCAtNyAxMGMtMy45IDAgLTYuODkgLTQuMzc5IC02Ljk5NyAtOS43MDNsLS4wMDMgLS4yOTdsLjAwNCAtLjI0YTcgNyAwIDAgMSA2Ljk5NiAtNi43NnptMCA0YTEgMSAwIDAgMCAwIDJsLjExNyAuMDA3YTEgMSAwIDAgMSAuODgzIC45OTNsLjAwNyAuMTE3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2EzIDMgMCAwIDAgLTMgLTN6IiAvPjxwYXRoIGQ9Ik0xMiAxNmExIDEgMCAwIDEgLjk5MyAuODgzbC4wMDcgLjExN3YxYTMgMyAwIDAgMSAtMi44MjQgMi45OTVsLS4xNzYgLjAwNWgtM2ExIDEgMCAwIDAgLS45OTMgLjg4M2wtLjAwNyAuMTE3YTEgMSAwIDAgMSAtMiAwYTMgMyAwIDAgMSAyLjgyNCAtMi45OTVsLjE3NiAtLjAwNWgzYTEgMSAwIDAgMCAuOTkzIC0uODgzbC4wMDcgLS4xMTd2LTFhMSAxIDAgMCAxIDEgLTF6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(228, 96%, 72%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(115, 142, 252, 0.1);
  border-bottom-color: rgba(115, 142, 252, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(115, 142, 252, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(115, 142, 252, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(115, 142, 252, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="bandage"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmFuZGFnZSI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwLjIwNyAzLjc5M2E1Ljk1IDUuOTUgMCAwIDEgLjE3OSA4LjIyOGwtLjE3OSAuMTg2bC04IDhhNS45NSA1Ljk1IDAgMCAxIC04LjU5MyAtOC4yMjhsLjE3OSAtLjE4Nmw4IC04YTUuOTUgNS45NSAwIDAgMSA4LjQxNCAwem0tOC4yMDcgOS4yMDdhMSAxIDAgMCAwIC0xIDFsLjAwNyAuMTI3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wtLjAwNyAtLjEyN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6bTIgLTJhMSAxIDAgMCAwIC0xIDFsLjAwNyAuMTI3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wtLjAwNyAtLjEyN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6bS00IDBhMSAxIDAgMCAwIC0xIDFsLjAwNyAuMTI3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wtLjAwNyAtLjEyN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6bTIgLTJhMSAxIDAgMCAwIC0xIDFsLjAwNyAuMTI3YTEgMSAwIDAgMCAxLjk5MyAtLjExN2wtLjAwNyAtLjEyN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="bell"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYmVsbCI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE0LjIzNSAxOWMuODY1IDAgMS4zMjIgMS4wMjQgLjc0NSAxLjY2OGEzLjk5MiAzLjk5MiAwIDAgMSAtMi45OCAxLjMzMmEzLjk5MiAzLjk5MiAwIDAgMSAtMi45OCAtMS4zMzJjLS41NTIgLS42MTYgLS4xNTggLTEuNTc5IC42MzQgLTEuNjYxbC4xMSAtLjAwNmg0LjQ3MXoiIC8+PHBhdGggZD0iTTEyIDJjMS4zNTggMCAyLjUwNiAuOTAzIDIuODc1IDIuMTQxbC4wNDYgLjE3MWwuMDA4IC4wNDNhOC4wMTMgOC4wMTMgMCAwIDEgNC4wMjQgNi4wNjlsLjAyOCAuMjg3bC4wMTkgLjI4OXYyLjkzMWwuMDIxIC4xMzZhMyAzIDAgMCAwIDEuMTQzIDEuODQ3bC4xNjcgLjExN2wuMTYyIC4wOTljLjg2IC40ODcgLjU2IDEuNzY2IC0uMzc3IDEuODY0bC0uMTE2IC4wMDZoLTE2Yy0xLjAyOCAwIC0xLjM4NyAtMS4zNjQgLS40OTMgLTEuODdhMyAzIDAgMCAwIDEuNDcyIC0yLjA2M2wuMDIxIC0uMTQzbC4wMDEgLTIuOTdhOCA4IDAgMCAxIDMuODIxIC02LjQ1NGwuMjQ4IC0uMTQ2bC4wMSAtLjA0M2EzLjAwMyAzLjAwMyAwIDAgMSAyLjU2MiAtMi4yOWwuMTgyIC0uMDE3bC4xNzYgLS4wMDR6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="bitcoin"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(47, 100%, 62%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY29pbi1iaXRjb2luIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTcgMy4zNGExMCAxMCAwIDEgMSAtMTUgOC42NmwuMDA1IC0uMzI0YTEwIDEwIDAgMCAxIDE0Ljk5NSAtOC4zMzZ6bS00IDIuNjZhMSAxIDAgMCAwIC0xIDFoLTFhMSAxIDAgMCAwIC0yIDBhMSAxIDAgMSAwIDAgMnY2YTEgMSAwIDAgMCAwIDJjMCAxLjMzMyAyIDEuMzMzIDIgMGgxYTEgMSAwIDAgMCAyIDB2LS4xNWMxLjE2NyAtLjM5NCAyIC0xLjUyNyAyIC0yLjg1bC0uMDA1IC0uMTc1YTMuMDYzIDMuMDYzIDAgMCAwIC0uNzM0IC0xLjgyN2MuNDYgLS41MzIgLjczOSAtMS4yMzMgLjczOSAtMS45OThjMCAtMS4zMjMgLS44MzMgLTIuNDU2IC0yIC0yLjg1di0uMTVhMSAxIDAgMCAwIC0xIC0xem0uMDkgN2MuNDkyIDAgLjkxIC40MzcgLjkxIDFzLS40MTggMSAtLjkxIDFoLTIuMDl2LTJoMi4wOXptMCAtNGMuNDkyIDAgLjkxIC40MzcgLjkxIDFjMCAuNTIyIC0uMzYgLjkzNyAtLjgwNiAuOTkzbC0uMTA0IC4wMDdoLTIuMDl2LTJoMi4wOXoiIC8+PC9zdmc+");
  --callout-title-color: hsl(47, 100%, 62%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(255, 213, 61, 0.1);
  border-bottom-color: rgba(255, 213, 61, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 213, 61, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 213, 61, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 213, 61, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="briefcase"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYnJpZWZjYXNlLTIiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNCAyYTMgMyAwIDAgMSAzIDN2MWgyYTMgMyAwIDAgMSAzIDN2OWEzIDMgMCAwIDEgLTMgM2gtMTRhMyAzIDAgMCAxIC0zIC0zdi05YTMgMyAwIDAgMSAzIC0zaDJ2LTFhMyAzIDAgMCAxIDMgLTN6bTAgMmgtNGExIDEgMCAwIDAgLTEgMXYxaDZ2LTFhMSAxIDAgMCAwIC0xIC0xIiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="bubble"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItYnViYmxlIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTIuNCAyYTYuMzMgNi4zMyAwIDAgMSA1LjQ5MSAzLjE3NmwuMDkgLjE2MmwuMTI2IC4wMjdhNi4zMzUgNi4zMzUgMCAwIDEgNC44ODkgNS45MzRsLjAwNCAuMjM0YTYuMzMzIDYuMzMzIDAgMCAxIC02LjMzMyA2LjMzNGwtLjAzNSAtLjAwMmwtLjAzNSAuMDVhNS4yNiA1LjI2IDAgMCAxIC0zLjk1OCAyLjA4bC0uMjM5IC4wMDVxIC0uNzIyIDAgLTEuNDA0IC0uMTlsLS4wNDcgLS4wMTRsLTMuNDM0IDIuMDYxYTEgMSAwIDAgMSAtMS41MDkgLS43NDNsLS4wMDYgLS4xMTR2LTIuNDM0bC0uMTIxIC0uMDZhMy42NyAzLjY3IDAgMCAxIC0xLjk0IC0zLjA0MmwtLjAwNiAtLjE5N3EgMCAtLjM2NSAuMDcgLS43MTdsLjAxMyAtLjA1OGwtLjExMyAtLjA5YTUuOCA1LjggMCAwIDEgLTIuMDk4IC00LjIxOGwtLjAwNSAtLjI1YTUuOCA1LjggMCAwIDEgNS44IC01LjhsLjA1OCAuMDAxbC4xNSAtLjE2M2E2LjMyIDYuMzIgMCAwIDEgNC4zMjggLTEuOTY3eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="camera"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2FtZXJhIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTUgM2EyIDIgMCAwIDEgMS45OTUgMS44NWwuMDA1IC4xNWExIDEgMCAwIDAgLjg4MyAuOTkzbC4xMTcgLjAwN2gxYTMgMyAwIDAgMSAyLjk5NSAyLjgyNGwuMDA1IC4xNzZ2OWEzIDMgMCAwIDEgLTIuODI0IDIuOTk1bC0uMTc2IC4wMDVoLTE0YTMgMyAwIDAgMSAtMi45OTUgLTIuODI0bC0uMDA1IC0uMTc2di05YTMgMyAwIDAgMSAyLjgyNCAtMi45OTVsLjE3NiAtLjAwNWgxYTEgMSAwIDAgMCAxIC0xYTIgMiAwIDAgMSAxLjg1IC0xLjk5NWwuMTUgLS4wMDVoNnptLTMgN2EzIDMgMCAwIDAgLTIuOTg1IDIuNjk4bC0uMDExIC4xNTJsLS4wMDQgLjE1bC4wMDQgLjE1YTMgMyAwIDEgMCAyLjk5NiAtMy4xNXoiIC8+PC9zdmc+");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="cannabis"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(82, 75%, 69%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2FubmFiaXMiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMi44OTQgMS41NTNjMS40NzIgMi45NDUgMi4xNyA1LjAyOCAyLjI0NCA2LjgxMmwuMDAxIC4wOTFsLjAzMiAtLjAyMmE4LjcgOC43IDAgMCAxIDIuNzMgLTEuMTkxbC4zNTIgLS4wNzlhOCA4IDAgMCAxIDEuNTYyIC0uMTY5bC4yNTMgLjAwN2ExIDEgMCAwIDEgLjg1IDEuMzk2Yy0uOTQ5IDIuMTg3IC0xLjgxOCAzLjU5NSAtMi45MDIgNC42NjRsLS4wNjEgLjA1OGwuMjUgLjA1NXEgLjQ1IC4xMDggLjg2OSAuMjU5bC4yNzYgLjEwNGMuNTg2IC4yMzUgMS4wMDYgLjQ3OSAxLjI1IC42NjJhMSAxIDAgMCAxIC0uMDQyIDEuNjNsLS4xOTkgLjExMmwtMS4xMzMgLjU4N2MtLjU2NyAuMjg5IC0xLjE2NiAuNTg0IC0xLjQwNCAuNjdxIC0uMTIzIC4wNDUgLS4yNDQgLjA4M2wtLjA3NCAuMDE5bC4wMTYgLjA0MmMuMzI3IC45MTIgLjQ1NiAxLjc4OSAuNDc3IDIuNDYybC4wMDMgLjE5NWExIDEgMCAwIDEgLTEgMWMtMS4yNTcgMCAtMi43NyAtLjcyOSAtNC4wMDEgLTEuNjQ3bC4wMDEgMi42NDdhMSAxIDAgMCAxIC0yIDB2LTIuNjQ3Yy0xLjE2IC44NjYgLTIuNTcgMS41NjMgLTMuNzgxIDEuNjRsLS4yMTkgLjAwN2ExIDEgMCAwIDEgLTEgLTFjMCAtLjYyNCAuMDk4IC0xLjQ2NCAuMzc5IC0yLjM1OGwuMTE2IC0uMzQxbC0uMDczIC0uMDJsLS4yNDQgLS4wODFjLS4zNDMgLS4xMjUgLTEuNDQyIC0uNjg2IC0yLjEwNiAtMS4wMzJsLS41MiAtLjI3NGExIDEgMCAwIDEgLS4xNTIgLTEuNjk0Yy4yNDQgLS4xODMgLjY2NCAtLjQyNyAxLjI1IC0uNjYyYTggOCAwIDAgMSAxLjE0NSAtLjM2M2wuMjQ5IC0uMDU1bC0uMDYgLS4wNThjLTEuMDI0IC0xLjAxIC0xLjg1NiAtMi4zMjIgLTIuNzQ0IC00LjMwN2wtLjE1NyAtLjM1N2ExIDEgMCAwIDEgLjcyNCAtMS4zOGwuMTQ5IC0uMDE3bC4wNTggLS4wMDNhNy41IDcuNSAwIDAgMSAxLjc0NCAuMTU5YTguNiA4LjYgMCAwIDEgMi43MjcgMS4wNDVsLjI3IC4xNjl2LS4wMzdjLS4wMjggLTEuNTk0IC4zNzUgLTMuMTggMS4wOTUgLTQuNzA0bC4xMzkgLS4yODVjLjQ1NSAtLjkwOCAuOTE0IC0xLjU4NiAxLjIzOCAtMS45OGExIDEgMCAwIDEgMS42NjYgLjE4OSIgLz48L3N2Zz4=");
  --callout-title-color: hsl(82, 75%, 69%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(192, 235, 117, 0.1);
  border-bottom-color: rgba(192, 235, 117, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(192, 235, 117, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(192, 235, 117, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(192, 235, 117, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="card"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(130, 61%, 64%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY3JlZGl0LWNhcmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMiAxMHY2YTQgNCAwIDAgMSAtNCA0aC0xMmE0IDQgMCAwIDEgLTQgLTR2LTZoMjB6bS0xNC45OSA0aC0uMDFhMSAxIDAgMSAwIC4wMSAyYTEgMSAwIDAgMCAwIC0yem01Ljk5IDBoLTJhMSAxIDAgMCAwIDAgMmgyYTEgMSAwIDAgMCAwIC0yem01IC0xMGE0IDQgMCAwIDEgNCA0aC0yMGE0IDQgMCAwIDEgNCAtNGgxMnoiIC8+PC9zdmc+");
  --callout-title-color: hsl(130, 61%, 64%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(107, 219, 126, 0.1);
  border-bottom-color: rgba(107, 219, 126, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 219, 126, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(107, 219, 126, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(107, 219, 126, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="clipboard"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2xpcGJvYXJkIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTcuOTk3IDQuMTdhMyAzIDAgMCAxIDIuMDAzIDIuODN2MTJhMyAzIDAgMCAxIC0zIDNoLTEwYTMgMyAwIDAgMSAtMyAtM3YtMTJhMyAzIDAgMCAxIDIuMDAzIC0yLjgzYTQgNCAwIDAgMCAzLjk5NyAzLjgzaDRhNCA0IDAgMCAwIDMuOTggLTMuNTk3em0tMy45OTcgLTIuMTdhMiAyIDAgMSAxIDAgNGgtNGEyIDIgMCAxIDEgMCAtNHoiIC8+PC9zdmc+");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="clock"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2xvY2siPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNyAzLjM0YTEwIDEwIDAgMSAxIC0xNC45OTUgOC45ODRsLS4wMDUgLS4zMjRsLjAwNSAtLjMyNGExMCAxMCAwIDAgMSAxNC45OTUgLTguMzM2em0tNSAyLjY2YTEgMSAwIDAgMCAtLjk5MyAuODgzbC0uMDA3IC4xMTd2NWwuMDA5IC4xMzFhMSAxIDAgMCAwIC4xOTcgLjQ3N2wuMDg3IC4xbDMgM2wuMDk0IC4wODJhMSAxIDAgMCAwIDEuMjI2IDBsLjA5NCAtLjA4M2wuMDgzIC0uMDk0YTEgMSAwIDAgMCAwIC0xLjIyNmwtLjA4MyAtLjA5NGwtMi43MDcgLTIuNzA4di00LjU4NWwtLjAwNyAtLjExN2ExIDEgMCAwIDAgLS45OTMgLS44ODN6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="cloud"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(206, 96%, 72%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY2xvdWQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMC4wNCA0LjMwNWMyLjE5NSAtLjY2NyA0LjYxNSAtLjIyNCA2LjM2IDEuMTc2YzEuMzg2IDEuMTA4IDIuMTg4IDIuNjg2IDIuMjUyIDQuMzRsLjAwMyAuMjEybC4wOTEgLjAwM2MyLjMgLjEwNyA0LjE0MyAxLjk2MSA0LjI1IDQuMjdsLjAwNCAuMjExYzAgMi40MDcgLTEuODg1IDQuMzcyIC00LjI1NSA0LjQ4MmwtLjIxIC4wMDVoLTExLjg3OGwtLjIyMiAtLjAwOGMtMi45NCAtLjExIC01LjMxNyAtMi4zOTkgLTUuNDMgLTUuMjYzbC0uMDA1IC0uMjE2YzAgLTIuNzQ3IDIuMDggLTUuMDEgNC43ODQgLTUuNDE3bC4xMTQgLS4wMTZsLjA3IC0uMTgxYy42NjMgLTEuNjIgMi4wNTYgLTIuOTA2IDMuODI5IC0zLjUxOGwuMjQ0IC0uMDh6IiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(206, 96%, 72%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(115, 193, 252, 0.1);
  border-bottom-color: rgba(115, 193, 252, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(115, 193, 252, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(115, 193, 252, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(115, 193, 252, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="code"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(210, 11%, 71%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY29kZS1jaXJjbGUiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNyAzLjM0YTEwIDEwIDAgMSAxIC0xNSA4LjY2bC4wMDUgLS4zMjRhMTAgMTAgMCAwIDEgMTQuOTk1IC04LjMzNm0tNi4yOTMgNS45NTNhMSAxIDAgMCAwIC0xLjQxNCAwbC0yIDJhMSAxIDAgMCAwIDAgMS40MTRsMiAyYTEgMSAwIDAgMCAxLjQxNCAwbC4wODMgLS4wOTRhMSAxIDAgMCAwIC0uMDgzIC0xLjMybC0xLjI5MiAtMS4yOTNsMS4yOTIgLTEuMjkzYTEgMSAwIDAgMCAwIC0xLjQxNG00IDBhMSAxIDAgMCAwIC0xLjQxNCAwbC0uMDgzIC4wOTRhMSAxIDAgMCAwIC4wODMgMS4zMmwxLjI5MiAxLjI5M2wtMS4yOTIgMS4yOTNhMSAxIDAgMCAwIDEuNDE0IDEuNDE0bDIgLTJhMSAxIDAgMCAwIDAgLTEuNDE0eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(210, 11%, 71%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(173, 181, 189, 0.1);
  border-bottom-color: rgba(173, 181, 189, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(173, 181, 189, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(173, 181, 189, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(173, 181, 189, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="cookie"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(31, 100%, 65%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItY29va2llIj48cGF0aCBzdHJva2U9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTMuNTMgMi41NTJsMi42NjcgMS4xMDRhMSAxIDAgMCAxIC40MTQgMS41M2EzIDMgMCAwIDAgMy40OTIgNC42MDRhMSAxIDAgMCAxIDEuMjk2IC41NTdsLjA0OSAuMTIyYTQgNCAwIDAgMSAwIDMuMDYybC0uMDc5IC4xNTFjLS40NjcgLjc0IC0uNzg1IDEuMzE0IC0uOTQ1IDEuN2MtLjE2NiAuNCAtLjM3MyAxLjA5NyAtLjYxMyAyLjA3M2wtLjA0NyAuMTQ0YTQgNCAwIDAgMSAtMi4xNjYgMi4xNjRsLS4xMzkgLjA0NmMtMS4wMDYgLjI1MyAtMS43MDUgLjQ2MSAtMi4wNzYgLjYxNWMtLjQxMiAuMTcgLS45ODIgLjQ4NiAtMS42OTYgLjk0MmwtLjE1NiAuMDgyYTQgNCAwIDAgMSAtMy4wNjIgMGwtLjE0OCAtLjA3N2MtLjc1OSAtLjQ3NSAtMS4zMzMgLS43OTMgLTEuNzA0IC0uOTQ3Yy0uNDEzIC0uMTcxIC0xLjEwOSAtLjM3OCAtMi4wNyAtLjYxMmwtLjE0NiAtLjA0OGE0IDQgMCAwIDEgLTIuMTY0IC0yLjE2NmwtLjA0NiAtLjEzOGMtLjI1NCAtMS4wMDkgLS40NjMgLTEuNzA5IC0uNjE1IC0yLjA3OHEgLS4yNTYgLS42MjEgLS45NDIgLTEuNjk1bC0uMDgyIC0uMTU2YTQgNCAwIDAgMSAwIC0zLjA2MmwuMDg0IC0uMTZjLjQ0NyAtLjY5MiAuNzYxIC0xLjI2MiAuOTQgLTEuNjkyYy4xNDcgLS4zNTUgLjM1NiAtMS4wNTcgLjYxNSAtMi4wNzhsLjA0NSAtLjEzOGE0IDQgMCAwIDEgMi4xNjYgLTIuMTY0bC4xNDEgLS4wNDdjLjk4OCAtLjI0NSAxLjY4NiAtLjQ1MyAyLjA3NCAtLjYxNGMuMzk1IC0uMTY0IC45NjcgLS40OCAxLjcgLS45NDRsLjE1MiAtLjA4YTQgNCAwIDAgMSAzLjA2MiAwbS0xLjUzMSAxMy40NDhhMSAxIDAgMCAwIC0xIDF2LjAxYTEgMSAwIDAgMCAyIDB2LS4wMWExIDEgMCAwIDAgLTEgLTFtNCAtM2ExIDEgMCAwIDAgLTEgMXYuMDFhMSAxIDAgMCAwIDIgMHYtLjAxYTEgMSAwIDAgMCAtMSAtMW0tOCAtMWExIDEgMCAwIDAgLTEgMXYuMDFhMSAxIDAgMCAwIDIgMHYtLjAxYTEgMSAwIDAgMCAtMSAtMW00IC0xYTEgMSAwIDAgMCAtMSAxdi4wMWExIDEgMCAwIDAgMiAwdi0uMDFhMSAxIDAgMCAwIC0xIC0xbS0xIC00Yy0uNTUyIDAgLTEgLjQ0OCAtMSAxLjAxYTEgMSAwIDEgMCAyIC0uMDFhMSAxIDAgMCAwIC0xIC0xIiAvPjwvc3ZnPg==");
  --callout-title-color: hsl(31, 100%, 65%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(255, 169, 77, 0.1);
  border-bottom-color: rgba(255, 169, 77, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 77, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 77, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 77, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="desktop"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(259, 90%, 70%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItZGV2aWNlLWRlc2t0b3AiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik03IDIxYTEgMSAwIDAgMSAwIC0yaDF2LTJoLTRhMiAyIDAgMCAxIC0yIC0ydi0xMGEyIDIgMCAwIDEgMiAtMmgxNmEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMSAtMiAyaC00djJoMWExIDEgMCAwIDEgMCAyem03IC00aC00djJoNHoiIC8+PC9zdmc+");
  --callout-title-color: hsl(259, 90%, 70%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(153, 110, 247, 0.1);
  border-bottom-color: rgba(153, 110, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(153, 110, 247, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(153, 110, 247, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(153, 110, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 16px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="diamond"] {
  --callout-color: 8, 109, 221;
  --callout-icon-color: hsl(207, 86%, 57%);
  --callout-icon-mask: url("data:image/svg+xmlbase64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItZGlhbW9uZCI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4IDRhMSAxIDAgMCAxIC43ODMgLjM3OGwuMDc0IC4xMDhsMyA1YTEgMSAwIDAgMSAtLjAzMiAxLjA3OGwtLjA4IC4xMDNsLTguNTMgOS41MzNhMS43IDEuNyAwIDAgMSAtMS4yMTUgLjUxYy0uNCAwIC0uNzg1IC0uMTQgLTEuMTEgLS40MTdsLS4xMzUgLS4xMjZsLTguNSAtOS41YTEgMSAwIDAgMSAtLjE3MiAtMS4wNjdsLjA2IC0uMTE1bDMuMDEzIC01LjAyMmwuMDY0IC0uMDlhLjk4MiAuOTgyIDAgMCAxIC4xNTUgLS4xNTRsLjA4OSAtLjA2NGwuMDg4IC0uMDVsLjA1IC0uMDIzbC4wNiAtLjAyNWwuMTA5IC0uMDMybC4xMTIgLS4wMmwuMTE3IC0uMDA1aDEyem0tOC44ODYgMy45NDNhMSAxIDAgMCAwIC0xLjM3MSAuMzQzbC0uNiAxbC0uMDYgLjExNmExIDEgMCAwIDAgLjE3NyAxLjA3bDIgMi4ybC4wOSAuMDg4YTEgMSAwIDAgMCAxLjMyMyAtLjAybC4wODcgLS4wOWExIDEgMCAwIDAgLS4wMiAtMS4zMjNsLTEuNTAxIC0xLjY1bC4yMTggLS4zNjNsLjA1NSAtLjEwM2ExIDEgMCAwIDAgLS4zOTggLTEuMjY4eiIgLz48L3N2Zz4=");
  --callout-title-color: hsl(207, 86%, 57%);
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, hsl(0, 0%, 99%) 50%);
  background-color: rgba(51, 155, 240, 0.1);
  border-bottom-color: rgba(51, 155, 240, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(51, 155, 240, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(51, 155, 240, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(51, 155, 240, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(36, 36, 36);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 16px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgba(153, 110, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgba(51, 155, 240, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgba(51, 155, 240, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgba(255, 169, 77, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(173, 181, 189, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgba(107, 219, 126, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgba(61, 201, 219, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgba(51, 155, 240, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgba(255, 169, 77, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(51, 155, 240);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(36, 36, 36);
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

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(153, 109, 247, 0.1);
  border-bottom-color: rgba(153, 109, 247, 0.15);
  border-left-color: rgba(153, 109, 247, 0.15);
  border-right-color: rgba(153, 109, 247, 0.15);
  border-top-color: rgba(153, 109, 247, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body h1 {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(36, 36, 36);
  font-size: 24px;
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0.07);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(153, 109, 247);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(153, 109, 247);
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
    canvas: `html[saved-theme="light"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: rgb(36, 36, 36);
}`,
    properties: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(245, 245, 245);
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(36, 36, 36);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
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
