import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ethereon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 174 !important;
  --accent-l: 48% !important;
  --accent-s: 20% !important;
  --background-modifier-active-hover: hsla(174, 20%, 48%, 0.1) !important;
  --background-modifier-border: #444648 !important;
  --background-modifier-border-focus: #6c6c6e !important;
  --background-modifier-border-hover: #626365 !important;
  --background-modifier-error: #B65E67 !important;
  --background-modifier-error-hover: #B65E67 !important;
  --background-modifier-form-field: #4e4f51 !important;
  --background-modifier-form-field-hover: #4e4f51 !important;
  --background-modifier-hover: rgba(29, 31, 33, 0.5) !important;
  --background-modifier-success: #88BC7D !important;
  --background-modifier-success-rgb: 136, 188, 125 !important;
  --background-primary: #1d1f21 !important;
  --background-primary-alt: #27292b !important;
  --background-secondary: #313234 !important;
  --background-secondary-alt: #444648 !important;
  --bases-cards-background: #1d1f21 !important;
  --bases-cards-cover-background: #27292b !important;
  --bases-cards-shadow: 0 0 0 1px #444648 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #626365 !important;
  --bases-embed-border-color: #444648 !important;
  --bases-group-heading-property-color: #a7a6a8 !important;
  --bases-table-border-color: #444648 !important;
  --bases-table-cell-background-active: #1d1f21 !important;
  --bases-table-cell-background-disabled: #27292b !important;
  --bases-table-cell-background-selected: hsla(174, 20%, 48%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #6c6c6e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(174, 20%, 48%) !important;
  --bases-table-group-background: #27292b !important;
  --bases-table-header-background: #1d1f21 !important;
  --bases-table-header-background-hover: rgba(29, 31, 33, 0.5) !important;
  --bases-table-header-color: #a7a6a8 !important;
  --bases-table-summary-background: #1d1f21 !important;
  --bases-table-summary-background-hover: rgba(29, 31, 33, 0.5) !important;
  --blockquote-border-color: hsl(174, 20%, 48%) !important;
  --blockquote-border-thickness: 4px !important;
  --blur-background: color-mix(in srgb, #58595b 65%, transparent) linear-gradient(#58595b, color-mix(in srgb, #58595b 65%, transparent)) !important;
  --bodyFont: "Inter", sans-serif !important;
  --callout-example: 156, 151, 183;
  --callout-important: 94, 141, 135;
  --callout-success: 136, 188, 125;
  --callout-summary: 94, 141, 135;
  --callout-tip: 94, 141, 135;
  --canvas-background: #1d1f21 !important;
  --canvas-card-label-color: #808082 !important;
  --canvas-color-3: 188, 156, 98 !important;
  --canvas-color-4: 136, 188, 125 !important;
  --canvas-color-5: 94, 141, 135 !important;
  --canvas-color-6: 156, 151, 183 !important;
  --canvas-dot-pattern: #58595b !important;
  --caret-color: #e2e0d2 !important;
  --checkbox-border-color: #808082 !important;
  --checkbox-border-color-hover: hsl(174, 20%, 48%) !important;
  --checkbox-border-color-unchecked: #808082 !important;
  --checkbox-color: hsl(174, 20%, 48%) !important;
  --checkbox-color-hover: hsl(171, 20.4%, 55.2%) !important;
  --checkbox-marker-color: #1d1f21 !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #a7a6a8 !important;
  --code-background: #27292b !important;
  --code-border-color: #444648 !important;
  --code-bracket-background: rgba(29, 31, 33, 0.5) !important;
  --code-comment: #808082 !important;
  --code-function: #BCAB62 !important;
  --code-important: #BC8762 !important;
  --code-keyword: #AE7499 !important;
  --code-normal: #e2e0d2 !important;
  --code-operator: #B65E67 !important;
  --code-property: #5E8D87 !important;
  --code-punctuation: #a7a6a8 !important;
  --code-size: --font-normal !important;
  --code-string: #88BC7D !important;
  --code-tag: #B65E67 !important;
  --code-value: #9C97B7 !important;
  --codeFont: "Courier New", monospace !important;
  --collapse-icon-color: #808082 !important;
  --collapse-icon-color-collapsed: hsl(171, 20.4%, 55.2%) !important;
  --color-accent: hsl(174, 20%, 48%) !important;
  --color-accent-1: hsl(171, 20.4%, 55.2%) !important;
  --color-accent-2: hsl(169, 21%, 61.92%) !important;
  --color-accent-hsl: 174, 20%, 48% !important;
  --color-base-00: #1d1f21 !important;
  --color-base-05: #27292b !important;
  --color-base-10: #313234 !important;
  --color-base-100: #e2e0d2 !important;
  --color-base-20: #444648 !important;
  --color-base-25: #4e4f51 !important;
  --color-base-30: #58595b !important;
  --color-base-35: #626365 !important;
  --color-base-40: #6c6c6e !important;
  --color-base-50: #808082 !important;
  --color-base-60: #939395 !important;
  --color-base-70: #a7a6a8 !important;
  --color-blue: #C4CAD6 !important;
  --color-blue_rgb: 196, 202, 214 !important;
  --color-cyan: #5E8D87 !important;
  --color-cyan-rgb: 94, 141, 135 !important;
  --color-green: #88BC7D !important;
  --color-green-rgb: 136, 188, 125 !important;
  --color-orange: #BC8762 !important;
  --color-orange_rgb: 188, 135, 98 !important;
  --color-pink: #AE7499 !important;
  --color-pink-rgb: 174, 116, 153 !important;
  --color-purple: #9C97B7 !important;
  --color-purple-rgb: 156, 151, 183 !important;
  --color-red: #B65E67 !important;
  --color-red_rgb: 182, 94, 103 !important;
  --color-teal: #5E8D87 !important;
  --color-teal-rgb: 94, 141, 135 !important;
  --color-yellow: #BCAB62 !important;
  --color-yellow-rgb: 188, 156, 98 !important;
  --dark: #e2e0d2 !important;
  --darkgray: #e2e0d2 !important;
  --divider-color: #444648 !important;
  --divider-color-hover: hsl(174, 20%, 48%) !important;
  --dropdown-background: #58595b !important;
  --dropdown-background-hover: #626365 !important;
  --embed-block-shadow-hover: 0 0 0 1px #444648, inset 0 0 0 1px #444648 !important;
  --embed-border-start: 2px solid hsl(174, 20%, 48%) !important;
  --file-header-background: #1d1f21 !important;
  --file-header-background-focused: #1d1f21 !important;
  --flair-background: #58595b !important;
  --flair-color: #e2e0d2 !important;
  --font-mermaid: "Inter", sans-serif !important;
  --font-monospace: "Courier New", monospace !important;
  --font-text: "Inter", sans-serif !important;
  --footnote-divider-color: #444648 !important;
  --footnote-id-color: #a7a6a8 !important;
  --footnote-id-color-no-occurrences: #808082 !important;
  --footnote-input-background-active: rgba(29, 31, 33, 0.5) !important;
  --graph-line: #626365 !important;
  --graph-node: #a7a6a8 !important;
  --graph-node-attachment: #BCAB62 !important;
  --graph-node-focused: hsl(171, 20.4%, 55.2%) !important;
  --graph-node-tag: #88BC7D !important;
  --graph-node-unresolved: #808082 !important;
  --graph-text: #e2e0d2 !important;
  --gray: #a7a6a8 !important;
  --h1-color: #B65E67 !important;
  --h1-weight: 300 !important;
  --h2-color: #BC8762 !important;
  --h2-weight: 300 !important;
  --h3-color: #BCAB62 !important;
  --h3-weight: 300 !important;
  --h4-color: #88BC7D !important;
  --h4-weight: 300 !important;
  --h5-color: #C4CAD6 !important;
  --h5-weight: 300 !important;
  --h6-color: #9C97B7 !important;
  --h6-weight: 300 !important;
  --headerFont: "Inter", sans-serif !important;
  --heading-formatting: #808082 !important;
  --heading-spacing: 1.5rem !important;
  --highlight: rgba(188, 156, 98, 0.4) !important;
  --hr-color: #444648 !important;
  --hr-thickness: 1px !important;
  --icon-color: #a7a6a8 !important;
  --icon-color-active: hsl(171, 20.4%, 55.2%) !important;
  --icon-color-focused: #e2e0d2 !important;
  --icon-color-hover: #a7a6a8 !important;
  --indentation-guide-color: rgba(226, 224, 226, 0.12) !important;
  --indentation-guide-color-active: rgba(226, 224, 226, 0.3) !important;
  --indentation-guide-width: 2px !important;
  --inline-title-color: #808082 !important;
  --inline-title-size: 1.318em !important;
  --inline-title-style: italic !important;
  --inline-title-weight: 50 !important;
  --input-date-separator: #808082 !important;
  --input-placeholder-color: #808082 !important;
  --interactive-accent: hsl(174, 20%, 48%) !important;
  --interactive-accent-hover: hsl(171, 20.4%, 55.2%) !important;
  --interactive-accent-hsl: 174, 20%, 48% !important;
  --interactive-hover: #626365 !important;
  --interactive-normal: #58595b !important;
  --light: #1d1f21 !important;
  --lightgray: #313234 !important;
  --link-color: hsl(171, 20.4%, 55.2%) !important;
  --link-color-hover: hsl(169, 21%, 61.92%) !important;
  --link-external-color: hsl(171, 20.4%, 55.2%) !important;
  --link-external-color-hover: hsl(169, 21%, 61.92%) !important;
  --link-unresolved-color: hsl(171, 20.4%, 55.2%) !important;
  --link-unresolved-decoration-color: hsla(174, 20%, 48%, 0.3) !important;
  --list-bullet-radius: 40% !important;
  --list-bullet-size: 0.4em !important;
  --list-marker-color: #808082 !important;
  --list-marker-color-collapsed: hsl(171, 20.4%, 55.2%) !important;
  --list-marker-color-hover: #a7a6a8 !important;
  --menu-background: #313234 !important;
  --menu-border-color: #626365 !important;
  --metadata-border-color: #444648 !important;
  --metadata-divider-color: #444648 !important;
  --metadata-input-background-active: rgba(29, 31, 33, 0.5) !important;
  --metadata-input-text-color: #e2e0d2 !important;
  --metadata-label-background-active: rgba(29, 31, 33, 0.5) !important;
  --metadata-label-text-color: #a7a6a8 !important;
  --metadata-label-text-color-hover: #a7a6a8 !important;
  --metadata-property-background-active: rgba(29, 31, 33, 0.5) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #6c6c6e !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #626365 !important;
  --modal-background: #1d1f21 !important;
  --modal-border-color: #58595b !important;
  --mono-rgb-0: 29, 31, 33 !important;
  --mono-rgb-100: 226, 224, 226 !important;
  --nav-collapse-icon-color: #808082 !important;
  --nav-collapse-icon-color-collapsed: #808082 !important;
  --nav-heading-color: #e2e0d2 !important;
  --nav-heading-color-collapsed: #808082 !important;
  --nav-heading-color-collapsed-hover: #a7a6a8 !important;
  --nav-heading-color-hover: #e2e0d2 !important;
  --nav-indentation-guide-color: rgba(226, 224, 226, 0.12) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgba(29, 31, 33, 0.5) !important;
  --nav-item-background-hover: rgba(29, 31, 33, 0.5) !important;
  --nav-item-background-selected: hsla(174, 20%, 48%, 0.15) !important;
  --nav-item-color: #a7a6a8 !important;
  --nav-item-color-active: #e2e0d2 !important;
  --nav-item-color-highlighted: hsl(171, 20.4%, 55.2%) !important;
  --nav-item-color-hover: #e2e0d2 !important;
  --nav-item-color-selected: #e2e0d2 !important;
  --nav-tag-color: #808082 !important;
  --nav-tag-color-active: #a7a6a8 !important;
  --nav-tag-color-hover: #a7a6a8 !important;
  --pdf-background: #1d1f21 !important;
  --pdf-page-background: #1d1f21 !important;
  --pdf-shadow: 0 0 0 1px #444648 !important;
  --pdf-sidebar-background: #1d1f21 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #444648 !important;
  --pill-border-color: #444648 !important;
  --pill-border-color-hover: #626365 !important;
  --pill-color: #a7a6a8 !important;
  --pill-color-hover: #e2e0d2 !important;
  --pill-color-remove: #808082 !important;
  --pill-color-remove-hover: hsl(171, 20.4%, 55.2%) !important;
  --prompt-background: #1d1f21 !important;
  --prompt-border-color: #6c6c6e !important;
  --raised-background: color-mix(in srgb, #58595b 65%, transparent) linear-gradient(#58595b, color-mix(in srgb, #58595b 65%, transparent)) !important;
  --ribbon-background: #313234 !important;
  --ribbon-background-collapsed: #1d1f21 !important;
  --scrollbar-active-thumb-bg: rgba(226, 224, 226, 0.2) !important;
  --scrollbar-bg: rgba(226, 224, 226, 0.05) !important;
  --scrollbar-thumb-bg: rgba(226, 224, 226, 0.1) !important;
  --search-clear-button-color: #a7a6a8 !important;
  --search-icon-color: #a7a6a8 !important;
  --search-result-background: #1d1f21 !important;
  --secondary: hsl(171, 20.4%, 55.2%) !important;
  --setting-group-heading-color: #e2e0d2 !important;
  --setting-items-background: #27292b !important;
  --setting-items-border-color: #444648 !important;
  --slider-thumb-border-color: #626365 !important;
  --slider-track-background: #444648 !important;
  --status-bar-background: #313234 !important;
  --status-bar-border-color: #444648 !important;
  --status-bar-border-width: 0 !important;
  --status-bar-text-color: #a7a6a8 !important;
  --suggestion-background: #1d1f21 !important;
  --swatch-shadow: inset 0 0 0 1px rgba(226, 224, 226, 0.15) !important;
  --sync-avatar-color-1: #B65E67 !important;
  --sync-avatar-color-2: #BC8762 !important;
  --sync-avatar-color-3: #BCAB62 !important;
  --sync-avatar-color-4: #88BC7D !important;
  --sync-avatar-color-5: #5E8D87 !important;
  --sync-avatar-color-6: #C4CAD6 !important;
  --sync-avatar-color-7: #9C97B7 !important;
  --sync-avatar-color-8: #AE7499 !important;
  --tab-background-active: #1d1f21 !important;
  --tab-container-background: #313234 !important;
  --tab-divider-color: #626365 !important;
  --tab-outline-color: #444648 !important;
  --tab-switcher-background: #313234 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #313234, transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(226, 224, 226, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(174, 20%, 48%) !important;
  --tab-text-color: #808082 !important;
  --tab-text-color-active: #a7a6a8 !important;
  --tab-text-color-focused: #a7a6a8 !important;
  --tab-text-color-focused-active: #a7a6a8 !important;
  --tab-text-color-focused-active-current: #e2e0d2 !important;
  --tab-text-color-focused-highlighted: hsl(171, 20.4%, 55.2%) !important;
  --table-add-button-border-color: #444648 !important;
  --table-border-color: #444648 !important;
  --table-drag-handle-background-active: hsl(174, 20%, 48%) !important;
  --table-drag-handle-color: #808082 !important;
  --table-header-border-color: #444648 !important;
  --table-header-color: #e2e0d2 !important;
  --table-selection: hsla(174, 20%, 48%, 0.1) !important;
  --table-selection-border-color: hsl(174, 20%, 48%) !important;
  --tag-background: hsla(174, 20%, 48%, 0.1) !important;
  --tag-background-hover: hsla(174, 20%, 48%, 0.2) !important;
  --tag-border-color: hsla(174, 20%, 48%, 0.15) !important;
  --tag-border-color-hover: hsla(174, 20%, 48%, 0.15) !important;
  --tag-color: hsl(171, 20.4%, 55.2%) !important;
  --tag-color-hover: hsl(171, 20.4%, 55.2%) !important;
  --tertiary: hsl(169, 21%, 61.92%) !important;
  --text-accent: hsl(171, 20.4%, 55.2%) !important;
  --text-accent-hover: hsl(169, 21%, 61.92%) !important;
  --text-error: #B65E67 !important;
  --text-faint: #808082 !important;
  --text-highlight-bg: rgba(188, 156, 98, 0.4) !important;
  --text-highlight-bg-rgb: 188, 156, 98 !important;
  --text-muted: #a7a6a8 !important;
  --text-normal: #e2e0d2 !important;
  --text-selection: hsla(174, 20%, 48%, 0.33) !important;
  --text-success: #88BC7D !important;
  --text-warning: #BC8762 !important;
  --textHighlight: rgba(188, 156, 98, 0.4) !important;
  --titleFont: "Inter", sans-serif !important;
  --titlebar-background: #313234 !important;
  --titlebar-background-focused: #444648 !important;
  --titlebar-border-color: #444648 !important;
  --titlebar-text-color: #a7a6a8 !important;
  --titlebar-text-color-focused: #e2e0d2 !important;
  --vault-profile-color: #e2e0d2 !important;
  --vault-profile-color-hover: #e2e0d2 !important;
  --workspace-background-translucent: rgba(29, 31, 33, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 50, 52);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(29, 31, 33);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(49, 50, 52);
  border-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(68, 70, 72);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(98, 147, 142, 0.1);
  color: rgb(117, 164, 157);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 50, 52);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(68, 70, 72);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 50, 52);
  border-left-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(29, 31, 33);
  color: rgb(226, 224, 210);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(188, 156, 98, 0.4);
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body del {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(128, 128, 130);
  border-radius: 10px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(98, 147, 142);
  border-color: rgb(98, 147, 142);
}

html[saved-theme="dark"] body p {
  color: rgb(167, 166, 168);
  outline: rgb(167, 166, 168) none 0px;
  text-decoration-color: rgb(167, 166, 168);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(117, 164, 157);
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration-color: rgb(117, 164, 157);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(117, 164, 157);
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration-color: rgb(117, 164, 157);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(117, 164, 157);
  font-family: Inter, sans-serif;
  outline: rgb(117, 164, 157) none 0px;
  text-decoration: underline rgba(98, 147, 142, 0.3);
  text-decoration-color: rgba(98, 147, 142, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body dt {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(128, 128, 130);
}

html[saved-theme="dark"] body blockquote {
  font-family: Inter, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body table {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  width: 194.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
  font-family: "Courier New", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(188, 171, 98);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(188, 171, 98);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(188, 171, 98);
  border-left-color: rgb(188, 171, 98);
  border-right-color: rgb(188, 171, 98);
  border-top-color: rgb(188, 171, 98);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(182, 94, 103);
  border-left-color: rgb(182, 94, 103);
  border-right-color: rgb(182, 94, 103);
  border-top-color: rgb(182, 94, 103);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(98, 147, 142);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(128, 128, 130);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(128, 128, 130);
  border-right-color: rgb(128, 128, 130);
  border-top-color: rgb(128, 128, 130);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(226, 224, 210);
  text-decoration-color: rgb(226, 224, 210);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 94, 141, 135;
  background-color: rgba(94, 141, 135, 0.1);
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 156, 151, 183;
  background-color: rgba(156, 151, 183, 0.1);
  border-bottom-color: rgba(156, 151, 183, 0.25);
  border-left-color: rgba(156, 151, 183, 0.25);
  border-right-color: rgba(156, 151, 183, 0.25);
  border-top-color: rgba(156, 151, 183, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 136, 188, 125;
  background-color: rgba(136, 188, 125, 0.1);
  border-bottom-color: rgba(136, 188, 125, 0.25);
  border-left-color: rgba(136, 188, 125, 0.25);
  border-right-color: rgba(136, 188, 125, 0.25);
  border-top-color: rgba(136, 188, 125, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 94, 141, 135;
  background-color: rgba(94, 141, 135, 0.1);
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  background-color: rgb(78, 79, 81);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(108, 108, 110);
  border-left-color: rgb(108, 108, 110);
  border-right-color: rgb(108, 108, 110);
  border-top-color: rgb(108, 108, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(226, 224, 210);
  font-family: Inter, sans-serif;
  outline: rgb(226, 224, 210) none 0px;
  text-decoration-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(98, 147, 142, 0.33);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(108, 108, 110);
  border-left-color: rgb(108, 108, 110);
  border-right-color: rgb(108, 108, 110);
  border-top-color: rgb(108, 108, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 50, 52);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(98, 147, 142, 0.33);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(98, 147, 142, 0.33);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(98, 147, 142, 0.1);
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(117, 164, 157);
}

html[saved-theme="dark"] body h1 {
  color: rgb(182, 94, 103);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(188, 135, 98);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(128, 128, 130);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(188, 171, 98);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(136, 188, 125);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(196, 202, 214);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(156, 151, 183);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(226, 224, 226, 0.12);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(226, 224, 210);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(49, 50, 52);
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-left-width: 0px;
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  border-top-width: 0px;
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(167, 166, 168);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(167, 166, 168);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(167, 166, 168);
  stroke: rgb(167, 166, 168);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(128, 128, 130);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(68, 70, 72);
  border-left-color: rgb(68, 70, 72);
  border-right-color: rgb(68, 70, 72);
  border-top-color: rgb(68, 70, 72);
  color: rgb(167, 166, 168);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
  font-family: Inter, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(49, 50, 52);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body abbr {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(167, 166, 168);
  border-left-color: rgb(167, 166, 168);
  border-right-color: rgb(167, 166, 168);
  border-top-color: rgb(167, 166, 168);
  color: rgb(167, 166, 168);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(39, 41, 43);
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
  color: rgb(226, 224, 210);
  font-family: "Courier New", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(226, 224, 210);
  border-left-color: rgb(226, 224, 210);
  border-right-color: rgb(226, 224, 210);
  border-top-color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body sub {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body summary {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body sup {
  color: rgb(226, 224, 210);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(98, 147, 142, 0.1);
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
  color: rgb(117, 164, 157);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 174 !important;
  --accent-l: 48% !important;
  --accent-s: 20% !important;
  --background-modifier-active-hover: hsla(174, 20%, 48%, 0.1) !important;
  --background-modifier-border: #b1b0b2 !important;
  --background-modifier-border-focus: #89898b !important;
  --background-modifier-border-hover: #939395 !important;
  --background-modifier-error: #933942 !important;
  --background-modifier-error-hover: #933942 !important;
  --background-modifier-form-field: #d8d6d8 !important;
  --background-modifier-form-field-hover: #d8d6d8 !important;
  --background-modifier-hover: rgba(226, 224, 226, 0.5) !important;
  --background-modifier-success: #3F7F31 !important;
  --background-modifier-success-rgb: 63, 127, 49 !important;
  --background-primary: #d8d6d8 !important;
  --background-primary-alt: #cecdcf !important;
  --background-secondary: #c4c3c5 !important;
  --background-secondary-alt: #b1b0b2 !important;
  --bases-cards-background: #d8d6d8 !important;
  --bases-cards-cover-background: #cecdcf !important;
  --bases-cards-shadow: 0 0 0 1px #b1b0b2 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #939395 !important;
  --bases-embed-border-color: #b1b0b2 !important;
  --bases-group-heading-property-color: #4e4f51 !important;
  --bases-table-border-color: #b1b0b2 !important;
  --bases-table-cell-background-active: #d8d6d8 !important;
  --bases-table-cell-background-disabled: #cecdcf !important;
  --bases-table-cell-background-selected: hsla(174, 20%, 48%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #89898b !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(173, 20.2%, 51.6%) !important;
  --bases-table-group-background: #cecdcf !important;
  --bases-table-header-background: #d8d6d8 !important;
  --bases-table-header-background-hover: rgba(226, 224, 226, 0.5) !important;
  --bases-table-header-color: #4e4f51 !important;
  --bases-table-summary-background: #d8d6d8 !important;
  --bases-table-summary-background-hover: rgba(226, 224, 226, 0.5) !important;
  --blockquote-border-color: hsl(173, 20.2%, 51.6%) !important;
  --blockquote-border-thickness: 4px !important;
  --blur-background: color-mix(in srgb, #d8d6d8 65%, transparent) linear-gradient(#d8d6d8, color-mix(in srgb, #d8d6d8 65%, transparent)) !important;
  --bodyFont: "Inter", sans-serif !important;
  --callout-example: 59, 49, 105;
  --callout-important: 94, 141, 135;
  --callout-success: 63, 127, 49;
  --callout-summary: 94, 141, 135;
  --callout-tip: 94, 141, 135;
  --canvas-background: #d8d6d8 !important;
  --canvas-card-label-color: #767678 !important;
  --canvas-color-3: 152, 119, 59 !important;
  --canvas-color-4: 63, 127, 49 !important;
  --canvas-color-5: 94, 141, 135 !important;
  --canvas-color-6: 59, 49, 105 !important;
  --canvas-dot-pattern: #9d9c9e !important;
  --caret-color: #1d1f21 !important;
  --checkbox-border-color: #767678 !important;
  --checkbox-border-color-hover: hsl(173, 20.2%, 51.6%) !important;
  --checkbox-border-color-unchecked: #767678 !important;
  --checkbox-color: hsl(173, 20.2%, 51.6%) !important;
  --checkbox-color-hover: hsl(171, 20.4%, 55.2%) !important;
  --checkbox-marker-color: #d8d6d8 !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #4e4f51 !important;
  --code-background: #cecdcf !important;
  --code-border-color: #b1b0b2 !important;
  --code-bracket-background: rgba(226, 224, 226, 0.5) !important;
  --code-comment: #767678 !important;
  --code-function: #98863B !important;
  --code-important: #98623B !important;
  --code-keyword: #752E5C !important;
  --code-normal: #1d1f21 !important;
  --code-operator: #933942 !important;
  --code-property: #5E8D87 !important;
  --code-punctuation: #4e4f51 !important;
  --code-size: --font-normal !important;
  --code-string: #3F7F31 !important;
  --code-tag: #933942 !important;
  --code-value: #3B3169 !important;
  --codeFont: "Courier New", monospace !important;
  --collapse-icon-color: #767678 !important;
  --collapse-icon-color-collapsed: hsl(174, 20%, 48%) !important;
  --color-accent: hsl(174, 20%, 48%) !important;
  --color-accent-1: hsl(173, 20.2%, 51.6%) !important;
  --color-accent-2: hsl(171, 20.4%, 55.2%) !important;
  --color-accent-hsl: 174, 20%, 48% !important;
  --color-base-00: #d8d6d8 !important;
  --color-base-05: #cecdcf !important;
  --color-base-10: #c4c3c5 !important;
  --color-base-100: #1d1f21 !important;
  --color-base-20: #b1b0b2 !important;
  --color-base-25: #a7a6a8 !important;
  --color-base-30: #9d9c9e !important;
  --color-base-35: #939395 !important;
  --color-base-40: #89898b !important;
  --color-base-50: #767678 !important;
  --color-base-60: #626365 !important;
  --color-base-70: #4e4f51 !important;
  --color-blue: #687995 !important;
  --color-blue_rgb: 104, 121, 149 !important;
  --color-cyan: #5E8D87 !important;
  --color-cyan-rgb: 94, 141, 135 !important;
  --color-green: #3F7F31 !important;
  --color-green-rgb: 63, 127, 49 !important;
  --color-orange: #98623B !important;
  --color-orange_rgb: 152, 98, 59 !important;
  --color-pink: #752E5C !important;
  --color-pink-rgb: 117, 46, 92 !important;
  --color-purple: #3B3169 !important;
  --color-purple-rgb: 59, 49, 105 !important;
  --color-red: #933942 !important;
  --color-red_rgb: 147, 57, 66 !important;
  --color-teal: #5E8D87 !important;
  --color-teal-rgb: 94, 141, 135 !important;
  --color-yellow: #98863B !important;
  --color-yellow-rgb: 152, 119, 59 !important;
  --dark: #1d1f21 !important;
  --darkgray: #1d1f21 !important;
  --divider-color: #b1b0b2 !important;
  --divider-color-hover: hsl(173, 20.2%, 51.6%) !important;
  --dropdown-background: #d8d6d8 !important;
  --dropdown-background-hover: #c4c3c5 !important;
  --embed-block-shadow-hover: 0 0 0 1px #b1b0b2, inset 0 0 0 1px #b1b0b2 !important;
  --embed-border-start: 2px solid hsl(173, 20.2%, 51.6%) !important;
  --file-header-background: #d8d6d8 !important;
  --file-header-background-focused: #d8d6d8 !important;
  --flair-background: #d8d6d8 !important;
  --flair-color: #1d1f21 !important;
  --font-mermaid: "Inter", sans-serif !important;
  --font-monospace: "Courier New", monospace !important;
  --font-text: "Inter", sans-serif !important;
  --footnote-divider-color: #b1b0b2 !important;
  --footnote-id-color: #4e4f51 !important;
  --footnote-id-color-no-occurrences: #767678 !important;
  --footnote-input-background-active: rgba(226, 224, 226, 0.5) !important;
  --graph-line: #939395 !important;
  --graph-node: #4e4f51 !important;
  --graph-node-attachment: #98863B !important;
  --graph-node-focused: hsl(174, 20%, 48%) !important;
  --graph-node-tag: #3F7F31 !important;
  --graph-node-unresolved: #767678 !important;
  --graph-text: #1d1f21 !important;
  --gray: #4e4f51 !important;
  --h1-color: #933942 !important;
  --h1-weight: 500 !important;
  --h2-color: #98623B !important;
  --h2-weight: 400 !important;
  --h3-color: #98863B !important;
  --h3-weight: 400 !important;
  --h4-color: #3F7F31 !important;
  --h4-weight: 400 !important;
  --h5-color: #687995 !important;
  --h5-weight: 400 !important;
  --h6-color: #3B3169 !important;
  --h6-weight: 400 !important;
  --headerFont: "Inter", sans-serif !important;
  --heading-formatting: #767678 !important;
  --heading-spacing: 1.5rem !important;
  --highlight: rgba(152, 119, 59, 0.4) !important;
  --hr-color: #b1b0b2 !important;
  --hr-thickness: 1px !important;
  --icon-color: #4e4f51 !important;
  --icon-color-active: hsl(174, 20%, 48%) !important;
  --icon-color-focused: #1d1f21 !important;
  --icon-color-hover: #4e4f51 !important;
  --indentation-guide-color: rgba(29, 31, 33, 0.12) !important;
  --indentation-guide-color-active: rgba(29, 31, 33, 0.3) !important;
  --indentation-guide-width: 2px !important;
  --inline-title-color: #767678 !important;
  --inline-title-size: 1.318em !important;
  --inline-title-style: italic !important;
  --inline-title-weight: 50 !important;
  --input-date-separator: #767678 !important;
  --input-placeholder-color: #767678 !important;
  --interactive-accent: hsl(173, 20.2%, 51.6%) !important;
  --interactive-accent-hover: hsl(171, 20.4%, 55.2%) !important;
  --interactive-accent-hsl: 174, 20%, 48% !important;
  --interactive-hover: #c4c3c5 !important;
  --interactive-normal: #d8d6d8 !important;
  --light: #d8d6d8 !important;
  --lightgray: #c4c3c5 !important;
  --link-color: hsl(174, 20%, 48%) !important;
  --link-color-hover: hsl(171, 20.4%, 55.2%) !important;
  --link-external-color: hsl(174, 20%, 48%) !important;
  --link-external-color-hover: hsl(171, 20.4%, 55.2%) !important;
  --link-unresolved-color: hsl(174, 20%, 48%) !important;
  --link-unresolved-decoration-color: hsla(174, 20%, 48%, 0.3) !important;
  --list-bullet-radius: 40% !important;
  --list-bullet-size: 0.4em !important;
  --list-marker-color: #767678 !important;
  --list-marker-color-collapsed: hsl(174, 20%, 48%) !important;
  --list-marker-color-hover: #4e4f51 !important;
  --menu-background: #c4c3c5 !important;
  --menu-border-color: #939395 !important;
  --metadata-border-color: #b1b0b2 !important;
  --metadata-divider-color: #b1b0b2 !important;
  --metadata-input-background-active: rgba(226, 224, 226, 0.5) !important;
  --metadata-input-text-color: #1d1f21 !important;
  --metadata-label-background-active: rgba(226, 224, 226, 0.5) !important;
  --metadata-label-text-color: #4e4f51 !important;
  --metadata-label-text-color-hover: #4e4f51 !important;
  --metadata-property-background-active: rgba(226, 224, 226, 0.5) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #89898b !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #939395 !important;
  --modal-background: #d8d6d8 !important;
  --modal-border-color: #9d9c9e !important;
  --mono-rgb-0: 226, 224, 226 !important;
  --mono-rgb-100: 29, 31, 33 !important;
  --nav-collapse-icon-color: #767678 !important;
  --nav-collapse-icon-color-collapsed: #767678 !important;
  --nav-heading-color: #1d1f21 !important;
  --nav-heading-color-collapsed: #767678 !important;
  --nav-heading-color-collapsed-hover: #4e4f51 !important;
  --nav-heading-color-hover: #1d1f21 !important;
  --nav-indentation-guide-color: rgba(29, 31, 33, 0.12) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgba(226, 224, 226, 0.5) !important;
  --nav-item-background-hover: rgba(226, 224, 226, 0.5) !important;
  --nav-item-background-selected: hsla(174, 20%, 48%, 0.15) !important;
  --nav-item-color: #4e4f51 !important;
  --nav-item-color-active: #1d1f21 !important;
  --nav-item-color-highlighted: hsl(174, 20%, 48%) !important;
  --nav-item-color-hover: #1d1f21 !important;
  --nav-item-color-selected: #1d1f21 !important;
  --nav-tag-color: #767678 !important;
  --nav-tag-color-active: #4e4f51 !important;
  --nav-tag-color-hover: #4e4f51 !important;
  --pdf-background: #d8d6d8 !important;
  --pdf-page-background: #d8d6d8 !important;
  --pdf-sidebar-background: #d8d6d8 !important;
  --pill-border-color: #b1b0b2 !important;
  --pill-border-color-hover: #939395 !important;
  --pill-color: #4e4f51 !important;
  --pill-color-hover: #1d1f21 !important;
  --pill-color-remove: #767678 !important;
  --pill-color-remove-hover: hsl(174, 20%, 48%) !important;
  --prompt-background: #d8d6d8 !important;
  --prompt-border-color: #89898b !important;
  --raised-background: color-mix(in srgb, #d8d6d8 65%, transparent) linear-gradient(#d8d6d8, color-mix(in srgb, #d8d6d8 65%, transparent)) !important;
  --ribbon-background: #c4c3c5 !important;
  --ribbon-background-collapsed: #d8d6d8 !important;
  --scrollbar-active-thumb-bg: rgba(29, 31, 33, 0.2) !important;
  --scrollbar-bg: rgba(29, 31, 33, 0.05) !important;
  --scrollbar-thumb-bg: rgba(29, 31, 33, 0.1) !important;
  --search-clear-button-color: #4e4f51 !important;
  --search-icon-color: #4e4f51 !important;
  --search-result-background: #d8d6d8 !important;
  --secondary: hsl(174, 20%, 48%) !important;
  --setting-group-heading-color: #1d1f21 !important;
  --setting-items-background: #cecdcf !important;
  --setting-items-border-color: #b1b0b2 !important;
  --slider-thumb-border-color: #939395 !important;
  --slider-track-background: #b1b0b2 !important;
  --status-bar-background: #c4c3c5 !important;
  --status-bar-border-color: #b1b0b2 !important;
  --status-bar-border-width: 0 !important;
  --status-bar-text-color: #4e4f51 !important;
  --suggestion-background: #d8d6d8 !important;
  --swatch-shadow: inset 0 0 0 1px rgba(29, 31, 33, 0.15) !important;
  --sync-avatar-color-1: #933942 !important;
  --sync-avatar-color-2: #98623B !important;
  --sync-avatar-color-3: #98863B !important;
  --sync-avatar-color-4: #3F7F31 !important;
  --sync-avatar-color-5: #5E8D87 !important;
  --sync-avatar-color-6: #687995 !important;
  --sync-avatar-color-7: #3B3169 !important;
  --sync-avatar-color-8: #752E5C !important;
  --tab-background-active: #d8d6d8 !important;
  --tab-container-background: #c4c3c5 !important;
  --tab-divider-color: #939395 !important;
  --tab-outline-color: #b1b0b2 !important;
  --tab-switcher-background: #c4c3c5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #c4c3c5, transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(29, 31, 33, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(174, 20%, 48%) !important;
  --tab-text-color: #767678 !important;
  --tab-text-color-active: #4e4f51 !important;
  --tab-text-color-focused: #4e4f51 !important;
  --tab-text-color-focused-active: #4e4f51 !important;
  --tab-text-color-focused-active-current: #1d1f21 !important;
  --tab-text-color-focused-highlighted: hsl(174, 20%, 48%) !important;
  --table-add-button-border-color: #b1b0b2 !important;
  --table-border-color: #b1b0b2 !important;
  --table-drag-handle-background-active: hsl(173, 20.2%, 51.6%) !important;
  --table-drag-handle-color: #767678 !important;
  --table-header-border-color: #b1b0b2 !important;
  --table-header-color: #1d1f21 !important;
  --table-selection: hsla(174, 20%, 48%, 0.1) !important;
  --table-selection-border-color: hsl(173, 20.2%, 51.6%) !important;
  --tag-background: hsla(174, 20%, 48%, 0.1) !important;
  --tag-background-hover: hsla(174, 20%, 48%, 0.2) !important;
  --tag-border-color: hsla(174, 20%, 48%, 0.15) !important;
  --tag-border-color-hover: hsla(174, 20%, 48%, 0.15) !important;
  --tag-color: hsl(174, 20%, 48%) !important;
  --tag-color-hover: hsl(174, 20%, 48%) !important;
  --tertiary: hsl(171, 20.4%, 55.2%) !important;
  --text-accent: hsl(174, 20%, 48%) !important;
  --text-accent-hover: hsl(171, 20.4%, 55.2%) !important;
  --text-error: #933942 !important;
  --text-faint: #767678 !important;
  --text-highlight-bg: rgba(152, 119, 59, 0.4) !important;
  --text-highlight-bg-rgb: 152, 119, 59 !important;
  --text-muted: #4e4f51 !important;
  --text-normal: #1d1f21 !important;
  --text-selection: hsla(174, 20%, 48%, 0.2) !important;
  --text-success: #3F7F31 !important;
  --text-warning: #98623B !important;
  --textHighlight: rgba(152, 119, 59, 0.4) !important;
  --titleFont: "Inter", sans-serif !important;
  --titlebar-background: #c4c3c5 !important;
  --titlebar-background-focused: #b1b0b2 !important;
  --titlebar-border-color: #b1b0b2 !important;
  --titlebar-text-color: #4e4f51 !important;
  --titlebar-text-color-focused: #1d1f21 !important;
  --vault-profile-color: #1d1f21 !important;
  --vault-profile-color-hover: #1d1f21 !important;
  --workspace-background-translucent: rgba(226, 224, 226, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(196, 195, 197);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(216, 214, 216);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(216, 214, 216);
  border-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(177, 176, 178);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(98, 147, 142, 0.1);
  color: rgb(98, 147, 142);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(196, 195, 197);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(177, 176, 178);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(196, 195, 197);
  border-left-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(216, 214, 216);
  color: rgb(29, 31, 33);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(152, 119, 59, 0.4);
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body del {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(118, 118, 120);
  border-radius: 10px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(107, 157, 151);
  border-color: rgb(107, 157, 151);
}

html[saved-theme="light"] body p {
  color: rgb(78, 79, 81);
  outline: rgb(78, 79, 81) none 0px;
  text-decoration-color: rgb(78, 79, 81);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(98, 147, 142);
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration-color: rgb(98, 147, 142);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(98, 147, 142);
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration-color: rgb(98, 147, 142);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(98, 147, 142);
  font-family: Inter, sans-serif;
  outline: rgb(98, 147, 142) none 0px;
  text-decoration: underline rgba(98, 147, 142, 0.3);
  text-decoration-color: rgba(98, 147, 142, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body dt {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ol > li {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ul > li {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(118, 118, 120);
}

html[saved-theme="light"] body blockquote {
  font-family: Inter, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body table {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  width: 194.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
  font-family: "Courier New", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(152, 134, 59);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(152, 134, 59);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(152, 134, 59);
  border-left-color: rgb(152, 134, 59);
  border-right-color: rgb(152, 134, 59);
  border-top-color: rgb(152, 134, 59);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body figcaption {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(147, 57, 66);
  border-left-color: rgb(147, 57, 66);
  border-right-color: rgb(147, 57, 66);
  border-top-color: rgb(147, 57, 66);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(107, 157, 151);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 120);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(118, 118, 120);
  border-right-color: rgb(118, 118, 120);
  border-top-color: rgb(118, 118, 120);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(29, 31, 33);
  text-decoration-color: rgb(29, 31, 33);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 94, 141, 135;
  background-color: rgba(94, 141, 135, 0.1);
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 59, 49, 105;
  background-color: rgba(59, 49, 105, 0.1);
  border-bottom-color: rgba(59, 49, 105, 0.25);
  border-left-color: rgba(59, 49, 105, 0.25);
  border-right-color: rgba(59, 49, 105, 0.25);
  border-top-color: rgba(59, 49, 105, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 63, 127, 49;
  background-color: rgba(63, 127, 49, 0.1);
  border-bottom-color: rgba(63, 127, 49, 0.25);
  border-left-color: rgba(63, 127, 49, 0.25);
  border-right-color: rgba(63, 127, 49, 0.25);
  border-top-color: rgba(63, 127, 49, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 94, 141, 135;
  background-color: rgba(94, 141, 135, 0.1);
  border-bottom-color: rgba(94, 141, 135, 0.25);
  border-left-color: rgba(94, 141, 135, 0.25);
  border-right-color: rgba(94, 141, 135, 0.25);
  border-top-color: rgba(94, 141, 135, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(137, 137, 139);
  border-left-color: rgb(137, 137, 139);
  border-right-color: rgb(137, 137, 139);
  border-top-color: rgb(137, 137, 139);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(29, 31, 33);
  font-family: Inter, sans-serif;
  outline: rgb(29, 31, 33) none 0px;
  text-decoration-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(98, 147, 142, 0.2);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(137, 137, 139);
  border-left-color: rgb(137, 137, 139);
  border-right-color: rgb(137, 137, 139);
  border-top-color: rgb(137, 137, 139);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 195, 197);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(98, 147, 142, 0.2);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(98, 147, 142, 0.2);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(98, 147, 142, 0.1);
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(98, 147, 142);
}

html[saved-theme="light"] body h1 {
  color: rgb(147, 57, 66);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(152, 98, 59);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(118, 118, 120);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(152, 134, 59);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(63, 127, 49);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(104, 121, 149);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(59, 49, 105);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(216, 214, 216) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 214, 216);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(29, 31, 33, 0.12);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(29, 31, 33);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(196, 195, 197);
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-left-width: 0px;
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  border-top-width: 0px;
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(78, 79, 81);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(78, 79, 81);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(78, 79, 81);
  stroke: rgb(78, 79, 81);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(118, 118, 120);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(177, 176, 178);
  border-left-color: rgb(177, 176, 178);
  border-right-color: rgb(177, 176, 178);
  border-top-color: rgb(177, 176, 178);
  color: rgb(78, 79, 81);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
  font-family: Inter, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(196, 195, 197);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body abbr {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(78, 79, 81);
  border-left-color: rgb(78, 79, 81);
  border-right-color: rgb(78, 79, 81);
  border-top-color: rgb(78, 79, 81);
  color: rgb(78, 79, 81);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(206, 205, 207);
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
  color: rgb(29, 31, 33);
  font-family: "Courier New", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(29, 31, 33);
  border-left-color: rgb(29, 31, 33);
  border-right-color: rgb(29, 31, 33);
  border-top-color: rgb(29, 31, 33);
}

html[saved-theme="light"] body sub {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body summary {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body sup {
  color: rgb(29, 31, 33);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(98, 147, 142, 0.1);
  border-bottom-color: rgba(98, 147, 142, 0.15);
  border-left-color: rgba(98, 147, 142, 0.15);
  border-right-color: rgba(98, 147, 142, 0.15);
  border-top-color: rgba(98, 147, 142, 0.15);
  color: rgb(98, 147, 142);
}`,
  },
};
