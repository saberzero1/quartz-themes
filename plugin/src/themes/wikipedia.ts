import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wikipedia",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["archivo", "linux-libertine"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 215 !important;
  --accent-l: 50% !important;
  --accent-s: 79% !important;
  --background-modifier-active-hover: hsla(215, 79%, 50%, 0.1) !important;
  --background-modifier-border: #dae1ea31 !important;
  --background-modifier-border-focus: rgb(50, 52, 60) !important;
  --background-modifier-border-hover: #313539 !important;
  --background-modifier-error: rgb(232, 41, 41) !important;
  --background-modifier-error-hover: rgb(232, 41, 41) !important;
  --background-modifier-error-rgb: 232, 51,51 !important;
  --background-modifier-form-field: #2f3135 !important;
  --background-modifier-form-field-hover: #2f3135 !important;
  --background-modifier-success: rgb(82, 163, 0) !important;
  --background-modifier-success-rgb: 97, 194, 0 !important;
  --background-primary: #1e1f21 !important;
  --background-primary-alt: #242629 !important;
  --background-secondary: #27282b !important;
  --background-secondary-alt: #242629 !important;
  --bases-cards-background: #1e1f21 !important;
  --bases-cards-cover-background: #242629 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #dae1ea31 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #313539 !important;
  --bases-embed-border-color: #dae1ea31 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #d0d4d9 !important;
  --bases-table-border-color: #dae1ea31 !important;
  --bases-table-cell-background-active: #1e1f21 !important;
  --bases-table-cell-background-disabled: #242629 !important;
  --bases-table-cell-background-selected: hsla(215, 79%, 50%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(50, 52, 60) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(215, 79%, 50%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #242629 !important;
  --bases-table-header-background: #1e1f21 !important;
  --bases-table-header-color: #d0d4d9 !important;
  --bases-table-summary-background: #1e1f21 !important;
  --blockquote-border-color: hsl(215, 79%, 50%) !important;
  --blur-background: color-mix(in srgb, #35383d 65%, transparent) linear-gradient(#35383d, color-mix(in srgb, #35383d 65%, transparent)) !important;
  --bodyFont: Arial, Archivo, sans-serif !important;
  --button-radius: 0px !important;
  --callout-bug: 232, 51,51;
  --callout-default: 0, 105, 224;
  --callout-error: 232, 51,51;
  --callout-example: 81, 0, 194;
  --callout-fail: 232, 51,51;
  --callout-important: 0, 194, 97;
  --callout-info: 0, 105, 224;
  --callout-question: 230, 111, 0;
  --callout-quote: 110, 110, 110;
  --callout-radius: 0px;
  --callout-success: 97, 194, 0;
  --callout-summary: 0, 194, 97;
  --callout-tip: 0, 194, 97;
  --callout-todo: 0, 105, 224;
  --callout-warning: 230, 111, 0;
  --canvas-background: #1e1f21 !important;
  --canvas-card-label-color: rgb(142, 148, 157) !important;
  --canvas-color-1: 232, 51,51 !important;
  --canvas-color-2: 230, 111, 0 !important;
  --canvas-color-3: 204, 204, 0 !important;
  --canvas-color-4: 97, 194, 0 !important;
  --canvas-color-5: 0, 194, 97 !important;
  --canvas-color-6: 81, 0, 194 !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #35383d !important;
  --caret-color: #d8dce3 !important;
  --checkbox-border-color: rgb(142, 148, 157) !important;
  --checkbox-border-color-hover: #d0d4d9 !important;
  --checkbox-color: hsl(215, 79%, 50%) !important;
  --checkbox-color-hover: hsl(215, 79%, 53.5%) !important;
  --checkbox-marker-color: #1e1f21 !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #d0d4d9 !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #242629 !important;
  --code-border-color: #dae1ea31 !important;
  --code-comment: rgb(142, 148, 157) !important;
  --code-function: rgb(163, 163, 0) !important;
  --code-important: rgb(230, 111, 0) !important;
  --code-keyword: rgb(194, 0, 81) !important;
  --code-normal: #d8dce3 !important;
  --code-operator: rgb(232, 41, 41) !important;
  --code-property: rgb(0, 163, 81) !important;
  --code-punctuation: #d0d4d9 !important;
  --code-radius: 0px !important;
  --code-string: rgb(82, 163, 0) !important;
  --code-tag: rgb(232, 41, 41) !important;
  --code-value: rgb(140, 63, 247) !important;
  --codeFont: Arial, Archivo, sans-serif !important;
  --collapse-icon-color: rgb(142, 148, 157) !important;
  --collapse-icon-color-collapsed: hsl(215, 79%, 53.5%) !important;
  --color-accent: hsl(215, 79%, 50%) !important;
  --color-accent-1: hsl(215, 79%, 53.5%) !important;
  --color-accent-2: hsl(213, 79%, 46%) !important;
  --color-accent-3: hsla(205, 79%, 50%, 20%) !important;
  --color-accent-hsl: 215, 79%, 50% !important;
  --color-base-00: #1e1f21 !important;
  --color-base-10: #242629 !important;
  --color-base-100: #d8dce3 !important;
  --color-base-20: #27282b !important;
  --color-base-25: #2f3135 !important;
  --color-base-30: #35383d !important;
  --color-base-35: #313539 !important;
  --color-base-40: rgb(50, 52, 60) !important;
  --color-base-50: rgb(142, 148, 157) !important;
  --color-base-60: rgb(179, 181, 193) !important;
  --color-base-70: #d0d4d9 !important;
  --color-blue: rgb(0, 105, 224) !important;
  --color-blue-rgb: 0, 105, 224 !important;
  --color-cyan: rgb(0, 163, 81) !important;
  --color-cyan-rgb: 0, 194, 97 !important;
  --color-green: rgb(82, 163, 0) !important;
  --color-green-rgb: 97, 194, 0 !important;
  --color-orange: rgb(230, 111, 0) !important;
  --color-orange-rgb: 230, 111, 0 !important;
  --color-pink: rgb(194, 0, 81) !important;
  --color-pink-rgb: 194, 0, 81 !important;
  --color-purple: rgb(140, 63, 247) !important;
  --color-purple-rgb: 81, 0, 194 !important;
  --color-red: rgb(232, 41, 41) !important;
  --color-red-rgb: 232, 51,51 !important;
  --color-yellow: rgb(163, 163, 0) !important;
  --color-yellow-rgb: 204, 204, 0 !important;
  --dark: #d8dce3 !important;
  --darkgray: #d8dce3 !important;
  --divider-color: #dae1ea31 !important;
  --divider-color-hover: hsl(215, 79%, 50%) !important;
  --dropdown-background: #35383d !important;
  --dropdown-background-hover: #313539 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dae1ea31, inset 0 0 0 1px #dae1ea31 !important;
  --embed-border-left: none !important;
  --embed-border-start: 2px solid hsl(215, 79%, 50%) !important;
  --embed-padding: 0px !important;
  --file-header-background: #1e1f21 !important;
  --file-header-background-focused: #1e1f21 !important;
  --file-header-font: Arial, Archivo, sans-serif !important;
  --file-line-width: 100% !important;
  --flair-background: #35383d !important;
  --flair-color: #d8dce3 !important;
  --font-default: Arial, 'Archivo', sans-serif !important;
  --font-interface: Arial, Archivo, sans-serif !important;
  --font-mermaid: Arial, Archivo, sans-serif !important;
  --font-text: Arial, Archivo, sans-serif !important;
  --footnote-divider-color: #dae1ea31 !important;
  --footnote-id-color: #d0d4d9 !important;
  --footnote-id-color-no-occurrences: rgb(142, 148, 157) !important;
  --footnote-radius: 0px !important;
  --graph-line: #313539 !important;
  --graph-node: #d0d4d9 !important;
  --graph-node-attachment: rgb(163, 163, 0) !important;
  --graph-node-focused: hsl(215, 79%, 53.5%) !important;
  --graph-node-tag: rgb(82, 163, 0) !important;
  --graph-node-unresolved: rgb(142, 148, 157) !important;
  --graph-text: #d8dce3 !important;
  --gray: #d0d4d9 !important;
  --h1-font: 'Linux Libertine','Georgia','Times',serif !important;
  --h1-size: 1.7em !important;
  --h1-weight: 500 !important;
  --h2-size: 1.25em !important;
  --h2-weight: bold !important;
  --h3-size: 1.17em !important;
  --h3-weight: bold !important;
  --h4-size: 1.12em !important;
  --h4-weight: bold !important;
  --h5-size: 1em !important;
  --h5-weight: bold !important;
  --h6-background: hsla(215, 35%, 60%, 15%) !important;
  --h6-size: 0.99em !important;
  --h6-weight: bold !important;
  --headerFont: Arial, Archivo, sans-serif !important;
  --heading-formatting: rgb(142, 148, 157) !important;
  --highlight: hsla(215, 79%, 50%, 0.1) !important;
  --hr-color: #dae1ea31 !important;
  --icon-color: #d0d4d9 !important;
  --icon-color-active: hsl(215, 79%, 53.5%) !important;
  --icon-color-focused: #d8dce3 !important;
  --icon-color-hover: #d0d4d9 !important;
  --icon-l: 16.5px !important;
  --icon-size: 16px !important;
  --image-width: 25% !important;
  --img-max-width: 55% !important;
  --indentation-guide-width: 0px !important;
  --infobox-margin: 1em 0px 1em 1em !important;
  --infobox-margin-left: 1em 1em 1em 0px !important;
  --infobox-position: right !important;
  --infobox-width: 25% !important;
  --inline-title-font: 'Linux Libertine','Georgia','Times',serif !important;
  --inline-title-size: 1.7em !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: rgb(142, 148, 157) !important;
  --input-placeholder-color: rgb(142, 148, 157) !important;
  --input-radius: 0px !important;
  --interactive-accent: hsl(215, 79%, 50%) !important;
  --interactive-accent-hover: hsl(215, 79%, 53.5%) !important;
  --interactive-accent-hsl: 215, 79%, 50% !important;
  --interactive-hover: #313539 !important;
  --interactive-normal: #35383d !important;
  --light: #1e1f21 !important;
  --lightgray: #27282b !important;
  --link-color: hsl(220, 79%, 65%) !important;
  --link-color-hover: hsl(213, 79%, 46%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(235, 79%, 70%) !important;
  --link-external-color-hover: hsl(225, 79%, 53%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(210, 79%, 65%) !important;
  --link-unresolved-decoration-color: hsla(215, 79%, 50%, 0.3) !important;
  --link-unresolved-opacity: 0.85 !important;
  --list-bullet-size: 0.35em !important;
  --list-marker-color: #d8dce3 !important;
  --list-marker-color-collapsed: hsl(215, 79%, 53.5%) !important;
  --list-marker-color-hover: #d0d4d9 !important;
  --menu-background: #27282b !important;
  --menu-border-color: #313539 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #dae1ea31 !important;
  --metadata-divider-color: #dae1ea31 !important;
  --metadata-input-font: Arial, Archivo, sans-serif !important;
  --metadata-input-text-color: #d8dce3 !important;
  --metadata-label-font: Arial, Archivo, sans-serif !important;
  --metadata-label-text-color: #d0d4d9 !important;
  --metadata-label-text-color-hover: #d0d4d9 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(50, 52, 60) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #313539 !important;
  --modal-background: #1e1f21 !important;
  --modal-border-color: rgb(50, 52, 60) !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #d0d4d9 !important;
  --nav-collapse-icon-color-collapsed: #d0d4d9 !important;
  --nav-heading-color: #d8dce3 !important;
  --nav-heading-color-collapsed: rgb(142, 148, 157) !important;
  --nav-heading-color-collapsed-hover: #d0d4d9 !important;
  --nav-heading-color-hover: #d8dce3 !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-selected: hsla(215, 79%, 50%, 0.15) !important;
  --nav-item-children-padding-left: 0px !important;
  --nav-item-color: #d0d4d9 !important;
  --nav-item-color-active: #d8dce3 !important;
  --nav-item-color-highlighted: hsl(215, 79%, 53.5%) !important;
  --nav-item-color-hover: #d8dce3 !important;
  --nav-item-color-selected: #d8dce3 !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: rgb(142, 148, 157) !important;
  --nav-tag-color-active: #d0d4d9 !important;
  --nav-tag-color-hover: #d0d4d9 !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #1e1f21 !important;
  --pdf-page-background: #1e1f21 !important;
  --pdf-shadow: 0 0 0 1px #dae1ea31 !important;
  --pdf-sidebar-background: #1e1f21 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #dae1ea31 !important;
  --pill-border-color: #dae1ea31 !important;
  --pill-border-color-hover: #313539 !important;
  --pill-color: #d0d4d9 !important;
  --pill-color-hover: #d8dce3 !important;
  --pill-color-remove: rgb(142, 148, 157) !important;
  --pill-color-remove-hover: hsl(215, 79%, 53.5%) !important;
  --prompt-background: #1e1f21 !important;
  --prompt-border-color: rgb(50, 52, 60) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --raised-background: color-mix(in srgb, #35383d 65%, transparent) linear-gradient(#35383d, color-mix(in srgb, #35383d 65%, transparent)) !important;
  --ribbon-background: #1e1f21 !important;
  --ribbon-background-collapsed: #1e1f21 !important;
  --ribbon-width: 35px !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: transparent !important;
  --search-clear-button-color: #d0d4d9 !important;
  --search-icon-color: #d0d4d9 !important;
  --search-result-background: #1e1f21 !important;
  --secondary: hsl(215, 79%, 53.5%) !important;
  --setting-group-heading-color: #d8dce3 !important;
  --setting-items-background: #242629 !important;
  --setting-items-border-color: #dae1ea31 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-border-color: #313539 !important;
  --slider-track-background: #dae1ea31 !important;
  --status-bar-background: #27282b !important;
  --status-bar-border-color: #dae1ea31 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #d0d4d9 !important;
  --suggestion-background: #1e1f21 !important;
  --sync-avatar-color-1: rgb(232, 41, 41) !important;
  --sync-avatar-color-2: rgb(230, 111, 0) !important;
  --sync-avatar-color-3: rgb(163, 163, 0) !important;
  --sync-avatar-color-4: rgb(82, 163, 0) !important;
  --sync-avatar-color-5: rgb(0, 163, 81) !important;
  --sync-avatar-color-6: rgb(0, 105, 224) !important;
  --sync-avatar-color-7: rgb(140, 63, 247) !important;
  --sync-avatar-color-8: rgb(194, 0, 81) !important;
  --tab-background-active: #1e1f21 !important;
  --tab-container-background: #27282b !important;
  --tab-curve: 0px !important;
  --tab-divider-color: hsl(205, 79%, 50%, 55%) !important;
  --tab-gradient: linear-gradient(to top,hsl(213, 79%, 46%) 0px,  hsla(205, 79%, 50%, 20%) 0px, #1e1f21 100%) !important;
  --tab-outline-color: hsl(205, 79%, 50%, 55%) !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px 0px 0 0 !important;
  --tab-switcher-background: #27282b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #27282b, transparent) !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(215, 79%, 50%) !important;
  --tab-text-color: rgb(142, 148, 157) !important;
  --tab-text-color-active: #d0d4d9 !important;
  --tab-text-color-focused: #d0d4d9 !important;
  --tab-text-color-focused-active: #d0d4d9 !important;
  --tab-text-color-focused-active-current: #d8dce3 !important;
  --tab-text-color-focused-highlighted: hsl(215, 79%, 53.5%) !important;
  --table-add-button-border-color: #dae1ea31 !important;
  --table-add-button-border-width: 0.06em !important;
  --table-border-color: #dae1ea31 !important;
  --table-border-width: 0.06em !important;
  --table-column-first-border-width: 0.06em !important;
  --table-column-last-border-width: 0.06em !important;
  --table-drag-handle-background-active: hsl(215, 79%, 50%) !important;
  --table-drag-handle-color: rgb(142, 148, 157) !important;
  --table-header-background: rgba(255, 255, 255, 0.067) !important;
  --table-header-background-hover: rgba(255, 255, 255, 0.067) !important;
  --table-header-border-color: #dae1ea31 !important;
  --table-header-border-width: 0.06em !important;
  --table-header-color: #d8dce3 !important;
  --table-header-size: 0.9em !important;
  --table-row-last-border-width: 0.06em !important;
  --table-selection: hsla(215, 79%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(215, 79%, 50%) !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: hsla(215, 79%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(215, 79%, 50%, 0.15) !important;
  --tag-color: hsl(220, 79%, 65%) !important;
  --tag-color-hover: hsl(213, 79%, 46%) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0px !important;
  --tag-padding-y: 0px !important;
  --tag-radius: 0px !important;
  --tertiary: hsl(213, 79%, 46%) !important;
  --text-accent: hsl(215, 79%, 53.5%) !important;
  --text-accent-hover: hsl(213, 79%, 46%) !important;
  --text-error: rgb(232, 41, 41) !important;
  --text-faint: rgb(142, 148, 157) !important;
  --text-muted: #d0d4d9 !important;
  --text-normal: #d8dce3 !important;
  --text-selection: hsla(215, 79%, 50%, 0.33) !important;
  --text-success: rgb(82, 163, 0) !important;
  --text-warning: rgb(230, 111, 0) !important;
  --textHighlight: hsla(215, 79%, 50%, 0.1) !important;
  --titleFont: Arial, Archivo, sans-serif !important;
  --titlebar-background: #27282b !important;
  --titlebar-background-focused: #242629 !important;
  --titlebar-border-color: #dae1ea31 !important;
  --titlebar-text-color: #d0d4d9 !important;
  --titlebar-text-color-focused: #d8dce3 !important;
  --vault-name-font-size: 1.4em !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #d8dce3 !important;
  --vault-profile-color-hover: #d8dce3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(39, 40, 43);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 31, 33);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(218, 225, 234, 0.192);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(39, 40, 43);
  border-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(218, 225, 234, 0.192);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  color: rgb(95, 142, 236);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(39, 40, 43);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(39, 40, 43);
  border-left-color: rgba(218, 225, 234, 0.192);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 31, 33);
  color: rgb(216, 220, 227);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body del {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(142, 148, 157);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(27, 111, 228);
  border-color: rgb(27, 111, 228);
}

html[saved-theme="dark"] body p {
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(208, 212, 217) none 0px;
  text-decoration-color: rgb(208, 212, 217);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(118, 128, 239);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(118, 128, 239) none 0px;
  text-decoration-color: rgb(118, 128, 239);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(95, 142, 236);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(95, 142, 236) none 0px;
  text-decoration-color: rgb(95, 142, 236);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(95, 166, 236);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(95, 166, 236) none 0px;
  text-decoration: rgba(27, 111, 228, 0.3);
  text-decoration-color: rgba(27, 111, 228, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body dt {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(142, 148, 157);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", Arial, Archivo, sans-serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body table {
  background-color: rgb(36, 38, 41);
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  width: 204.531px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: rgb(216, 220, 227);
  padding-bottom: 11.52px;
  padding-left: 14.4px;
  padding-right: 14.4px;
  padding-top: 11.52px;
  text-align: center;
}

html[saved-theme="dark"] body tr {
  background-color: rgba(255, 255, 255, 0.067);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(163, 163, 0);
  border-left-color: rgb(163, 163, 0);
  border-right-color: rgb(163, 163, 0);
  border-top-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(27, 111, 228);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(142, 148, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(142, 148, 157);
  border-right-color: rgb(142, 148, 157);
  border-top-color: rgb(142, 148, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 105, 224);
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 194, 97;
  background-color: rgba(0, 194, 97, 0.1);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 81, 0, 194;
  background-color: rgba(81, 0, 194, 0.1);
  border-bottom-color: rgba(81, 0, 194, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(81, 0, 194, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(81, 0, 194, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(81, 0, 194, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 0, 105, 224;
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-left-width: 1px;
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 1px;
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 0, 105, 224;
  background-color: rgba(0, 105, 224, 0.1);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 230, 111, 0;
  background-color: rgba(230, 111, 0, 0.1);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(110, 110, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(110, 110, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(110, 110, 110, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 97, 194, 0;
  background-color: rgba(97, 194, 0, 0.1);
  border-bottom-color: rgba(97, 194, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 194, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(97, 194, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(97, 194, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 0, 194, 97;
  background-color: rgba(0, 194, 97, 0.1);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 0, 105, 224;
  background-color: rgba(0, 105, 224, 0.1);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 230, 111, 0;
  background-color: rgba(230, 111, 0, 0.1);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  background-color: rgb(47, 49, 53);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 31, 33);
  border-bottom-color: rgb(50, 52, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 52, 60);
  border-right-color: rgb(50, 52, 60);
  border-top-color: rgb(50, 52, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(50, 52, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 52, 60);
  border-right-color: rgb(50, 52, 60);
  border-top-color: rgb(50, 52, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(39, 40, 43);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(95, 142, 236);
}

html[saved-theme="dark"] body h1 {
  color: rgb(216, 220, 227);
  font-family: "Linux Libertine", Georgia, Times, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(216, 220, 227);
  font-family: "Linux Libertine", Georgia, Times, serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 0px;
  border-top-color: rgba(218, 225, 234, 0.192);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 0, 105, 224;
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 33);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(216, 220, 227);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 212, 217);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(39, 40, 43);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(208, 212, 217);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 142, 236);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(95, 142, 236);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(208, 212, 217);
  stroke: rgb(208, 212, 217);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(142, 148, 157);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: rgb(208, 212, 217);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(208, 212, 217);
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  color: rgb(208, 212, 217);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(39, 40, 43);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(216, 220, 227);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(208, 212, 217);
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  color: rgb(208, 212, 217);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(36, 38, 41);
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body sub {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body summary {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body sup {
  color: rgb(95, 142, 236);
  font-size: 11.84px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(95, 142, 236);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 215 !important;
  --accent-l: 50% !important;
  --accent-s: 79% !important;
  --background-modifier-active-hover: hsla(215, 79%, 50%, 0.1) !important;
  --background-modifier-border: #a2a9b1 !important;
  --background-modifier-error: rgb(232, 41, 41) !important;
  --background-modifier-error-hover: rgb(232, 41, 41) !important;
  --background-modifier-error-rgb: 232, 51,51 !important;
  --background-modifier-success: rgb(82, 163, 0) !important;
  --background-modifier-success-rgb: 97, 194, 0 !important;
  --background-secondary-alt: #f8f9fa !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #a2a9b1 !important;
  --bases-embed-border-color: #a2a9b1 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #5a5a5a !important;
  --bases-table-border-color: #a2a9b1 !important;
  --bases-table-cell-background-selected: hsla(215, 79%, 50%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(215, 79%, 47.5%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-header-color: #5a5a5a !important;
  --blockquote-border-color: hsl(215, 79%, 47.5%) !important;
  --bodyFont: Arial, Archivo, sans-serif !important;
  --button-radius: 0px !important;
  --callout-bug: 232, 51,51;
  --callout-default: 0, 105, 224;
  --callout-error: 232, 51,51;
  --callout-example: 81, 0, 194;
  --callout-fail: 232, 51,51;
  --callout-important: 0, 194, 97;
  --callout-info: 0, 105, 224;
  --callout-question: 230, 111, 0;
  --callout-quote: 110, 110, 110;
  --callout-radius: 0px;
  --callout-success: 97, 194, 0;
  --callout-summary: 0, 194, 97;
  --callout-tip: 0, 194, 97;
  --callout-todo: 0, 105, 224;
  --callout-warning: 230, 111, 0;
  --canvas-card-label-color: #989898 !important;
  --canvas-color-1: 232, 51,51 !important;
  --canvas-color-2: 230, 111, 0 !important;
  --canvas-color-3: 204, 204, 0 !important;
  --canvas-color-4: 97, 194, 0 !important;
  --canvas-color-5: 0, 194, 97 !important;
  --canvas-color-6: 81, 0, 194 !important;
  --canvas-controls-radius: 0px !important;
  --checkbox-border-color: #989898 !important;
  --checkbox-border-color-hover: #5a5a5a !important;
  --checkbox-color: hsl(215, 79%, 47.5%) !important;
  --checkbox-color-hover: hsl(213, 79%, 60%) !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #5a5a5a !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #f8f9fa !important;
  --code-border-color: #a2a9b1 !important;
  --code-comment: #989898 !important;
  --code-function: rgb(163, 163, 0) !important;
  --code-important: rgb(230, 111, 0) !important;
  --code-keyword: rgb(194, 0, 81) !important;
  --code-operator: rgb(232, 41, 41) !important;
  --code-property: rgb(0, 163, 81) !important;
  --code-punctuation: #5a5a5a !important;
  --code-radius: 0px !important;
  --code-string: rgb(82, 163, 0) !important;
  --code-tag: rgb(232, 41, 41) !important;
  --code-value: rgb(140, 63, 247) !important;
  --codeFont: Arial, Archivo, sans-serif !important;
  --collapse-icon-color: #989898 !important;
  --collapse-icon-color-collapsed: hsl(215, 79%, 50%) !important;
  --color-accent: hsl(215, 79%, 50%) !important;
  --color-accent-1: hsl(215, 79%, 47.5%) !important;
  --color-accent-2: hsl(213, 79%, 60%) !important;
  --color-accent-3: hsl(205, 79%, 50%, 20%) !important;
  --color-accent-hsl: 215, 79%, 50% !important;
  --color-base-05: #f8f9fa !important;
  --color-base-50: #989898 !important;
  --color-base-70: #5a5a5a !important;
  --color-blue: rgb(0, 105, 224) !important;
  --color-blue-rgb: 0, 105, 224 !important;
  --color-cyan: rgb(0, 163, 81) !important;
  --color-cyan-rgb: 0, 194, 97 !important;
  --color-green: rgb(82, 163, 0) !important;
  --color-green-rgb: 97, 194, 0 !important;
  --color-orange: rgb(230, 111, 0) !important;
  --color-orange-rgb: 230, 111, 0 !important;
  --color-pink: rgb(194, 0, 81) !important;
  --color-pink-rgb: 194, 0, 81 !important;
  --color-purple: rgb(140, 63, 247) !important;
  --color-purple-rgb: 81, 0, 194 !important;
  --color-red: rgb(232, 41, 41) !important;
  --color-red-rgb: 232, 51,51 !important;
  --color-yellow: rgb(163, 163, 0) !important;
  --color-yellow-rgb: 204, 204, 0 !important;
  --dark: #5a5a5a !important;
  --darkgray: #5a5a5a !important;
  --divider-color: #a2a9b1 !important;
  --divider-color-hover: hsl(215, 79%, 47.5%) !important;
  --embed-block-shadow-hover: 0 0 0 1px #a2a9b1, inset 0 0 0 1px #a2a9b1 !important;
  --embed-border-left: none !important;
  --embed-border-start: 2px solid hsl(215, 79%, 47.5%) !important;
  --embed-padding: 0px !important;
  --file-header-font: Arial, Archivo, sans-serif !important;
  --file-line-width: 100% !important;
  --font-default: Arial, 'Archivo', sans-serif !important;
  --font-interface: Arial, Archivo, sans-serif !important;
  --font-mermaid: Arial, Archivo, sans-serif !important;
  --font-text: Arial, Archivo, sans-serif !important;
  --footnote-divider-color: #a2a9b1 !important;
  --footnote-id-color: #5a5a5a !important;
  --footnote-id-color-no-occurrences: #989898 !important;
  --footnote-radius: 0px !important;
  --graph-node: #5a5a5a !important;
  --graph-node-attachment: rgb(163, 163, 0) !important;
  --graph-node-focused: hsl(215, 79%, 50%) !important;
  --graph-node-tag: rgb(82, 163, 0) !important;
  --graph-node-unresolved: #989898 !important;
  --gray: #5a5a5a !important;
  --h1-font: 'Linux Libertine','Georgia','Times',serif !important;
  --h1-size: 1.7em !important;
  --h1-weight: 500 !important;
  --h2-size: 1.25em !important;
  --h2-weight: bold !important;
  --h3-size: 1.17em !important;
  --h3-weight: bold !important;
  --h4-size: 1.12em !important;
  --h4-weight: bold !important;
  --h5-size: 1em !important;
  --h5-weight: bold !important;
  --h6-background: rgb(235, 235, 210) !important;
  --h6-size: 0.99em !important;
  --h6-weight: bold !important;
  --headerFont: Arial, Archivo, sans-serif !important;
  --heading-formatting: #989898 !important;
  --highlight: hsla(215, 79%, 50%, 0.1) !important;
  --hr-color: #a2a9b1 !important;
  --icon-color: #5a5a5a !important;
  --icon-color-active: hsl(215, 79%, 50%) !important;
  --icon-color-hover: #5a5a5a !important;
  --icon-l: 16.5px !important;
  --icon-size: 16px !important;
  --image-width: 25% !important;
  --img-max-width: 55% !important;
  --indentation-guide-width: 0px !important;
  --infobox-margin: 1em 0px 1em 1em !important;
  --infobox-margin-left: 1em 1em 1em 0px !important;
  --infobox-position: right !important;
  --infobox-width: 25% !important;
  --inline-title-font: 'Linux Libertine','Georgia','Times',serif !important;
  --inline-title-size: 1.7em !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #989898 !important;
  --input-placeholder-color: #989898 !important;
  --input-radius: 0px !important;
  --interactive-accent: hsl(215, 79%, 47.5%) !important;
  --interactive-accent-hover: hsl(213, 79%, 60%) !important;
  --interactive-accent-hsl: 215, 79%, 50% !important;
  --lightgray: #f8f9fa !important;
  --link-color: hsl(220, 79%, 45%) !important;
  --link-color-hover: hsl(213, 79%, 60%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(235, 79%, 45%) !important;
  --link-external-color-hover: hsl(225, 79%, 53%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(215, 79%, 47.5%) !important;
  --link-unresolved-decoration-color: hsla(215, 79%, 50%, 0.3) !important;
  --link-unresolved-opacity: 0.85 !important;
  --list-bullet-size: 0.35em !important;
  --list-marker-color: #222222 !important;
  --list-marker-color-collapsed: hsl(215, 79%, 50%) !important;
  --list-marker-color-hover: #5a5a5a !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #a2a9b1 !important;
  --metadata-divider-color: #a2a9b1 !important;
  --metadata-input-font: Arial, Archivo, sans-serif !important;
  --metadata-label-font: Arial, Archivo, sans-serif !important;
  --metadata-label-text-color: #5a5a5a !important;
  --metadata-label-text-color-hover: #5a5a5a !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #5a5a5a !important;
  --nav-collapse-icon-color-collapsed: #5a5a5a !important;
  --nav-heading-color-collapsed: #989898 !important;
  --nav-heading-color-collapsed-hover: #5a5a5a !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-selected: hsla(215, 79%, 50%, 0.15) !important;
  --nav-item-children-padding-left: 0px !important;
  --nav-item-color: #5a5a5a !important;
  --nav-item-color-highlighted: hsl(215, 79%, 50%) !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #989898 !important;
  --nav-tag-color-active: #5a5a5a !important;
  --nav-tag-color-hover: #5a5a5a !important;
  --nav-tag-radius: 0px !important;
  --pill-border-color: #a2a9b1 !important;
  --pill-color: #5a5a5a !important;
  --pill-color-remove: #989898 !important;
  --pill-color-remove-hover: hsl(215, 79%, 50%) !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --radius-xl: 0px !important;
  --ribbon-background: #ffffff !important;
  --ribbon-width: 35px !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: transparent !important;
  --search-clear-button-color: #5a5a5a !important;
  --search-icon-color: #5a5a5a !important;
  --secondary: hsl(215, 79%, 50%) !important;
  --setting-items-border-color: #a2a9b1 !important;
  --setting-items-radius: 0px !important;
  --slider-track-background: #a2a9b1 !important;
  --status-bar-border-color: #a2a9b1 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #5a5a5a !important;
  --sync-avatar-color-1: rgb(232, 41, 41) !important;
  --sync-avatar-color-2: rgb(230, 111, 0) !important;
  --sync-avatar-color-3: rgb(163, 163, 0) !important;
  --sync-avatar-color-4: rgb(82, 163, 0) !important;
  --sync-avatar-color-5: rgb(0, 163, 81) !important;
  --sync-avatar-color-6: rgb(0, 105, 224) !important;
  --sync-avatar-color-7: rgb(140, 63, 247) !important;
  --sync-avatar-color-8: rgb(194, 0, 81) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: hsl(205, 79%, 50%, 40%) !important;
  --tab-gradient: linear-gradient(to top,hsl(213, 79%, 60%) 0px,  hsl(205, 79%, 50%, 20%) 0px, #ffffff 100%) !important;
  --tab-outline-color: hsl(205, 79%, 50%, 40%) !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px 0px 0 0 !important;
  --tab-switcher-preview-radius: 0px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(215, 79%, 50%) !important;
  --tab-text-color: #989898 !important;
  --tab-text-color-active: #5a5a5a !important;
  --tab-text-color-focused: #5a5a5a !important;
  --tab-text-color-focused-active: #5a5a5a !important;
  --tab-text-color-focused-highlighted: hsl(215, 79%, 50%) !important;
  --table-add-button-border-color: #a2a9b1 !important;
  --table-add-button-border-width: 0.06em !important;
  --table-border-color: #a2a9b1 !important;
  --table-border-width: 0.06em !important;
  --table-column-first-border-width: 0.06em !important;
  --table-column-last-border-width: 0.06em !important;
  --table-drag-handle-background-active: hsl(215, 79%, 47.5%) !important;
  --table-drag-handle-color: #989898 !important;
  --table-header-background: rgba(0, 0, 0, 0.067) !important;
  --table-header-background-hover: rgba(0, 0, 0, 0.067) !important;
  --table-header-border-color: #a2a9b1 !important;
  --table-header-border-width: 0.06em !important;
  --table-header-size: 0.9em !important;
  --table-row-last-border-width: 0.06em !important;
  --table-selection: hsla(215, 79%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(215, 79%, 47.5%) !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: hsla(215, 79%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(215, 79%, 50%, 0.15) !important;
  --tag-color: hsl(220, 79%, 45%) !important;
  --tag-color-hover: hsl(213, 79%, 60%) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0px !important;
  --tag-padding-y: 0px !important;
  --tag-radius: 0px !important;
  --tertiary: hsl(213, 79%, 60%) !important;
  --text-accent: hsl(215, 79%, 50%) !important;
  --text-accent-hover: hsl(213, 79%, 60%) !important;
  --text-error: rgb(232, 41, 41) !important;
  --text-faint: #989898 !important;
  --text-muted: #5a5a5a !important;
  --text-selection: hsla(215, 79%, 50%, 0.2) !important;
  --text-success: rgb(82, 163, 0) !important;
  --text-warning: rgb(230, 111, 0) !important;
  --textHighlight: hsla(215, 79%, 50%, 0.1) !important;
  --titleFont: Arial, Archivo, sans-serif !important;
  --titlebar-background-focused: #f8f9fa !important;
  --titlebar-border-color: #a2a9b1 !important;
  --titlebar-text-color: #5a5a5a !important;
  --vault-name-font-size: 1.4em !important;
  --vault-name-font-weight: 500 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(162, 169, 177);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(162, 169, 177);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  color: rgb(24, 85, 205);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(162, 169, 177);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(162, 169, 177);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 152, 152);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(25, 105, 217);
  border-color: rgb(25, 105, 217);
}

html[saved-theme="light"] body p {
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(24, 39, 205);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(24, 39, 205) none 0px;
  text-decoration-color: rgb(24, 39, 205);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(24, 85, 205);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(24, 85, 205) none 0px;
  text-decoration-color: rgb(24, 85, 205);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(25, 105, 217);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(25, 105, 217) none 0px;
  text-decoration: rgba(27, 111, 228, 0.3);
  text-decoration-color: rgba(27, 111, 228, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(152, 152, 152);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", Arial, Archivo, sans-serif;
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body table {
  background-color: rgb(248, 249, 250);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  width: 204.531px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  padding-bottom: 11.52px;
  padding-left: 14.4px;
  padding-right: 14.4px;
  padding-top: 11.52px;
  text-align: center;
}

html[saved-theme="light"] body tr {
  background-color: rgba(0, 0, 0, 0.067);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(163, 163, 0);
  border-left-color: rgb(163, 163, 0);
  border-right-color: rgb(163, 163, 0);
  border-top-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(25, 105, 217);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 152, 152);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(152, 152, 152);
  border-right-color: rgb(152, 152, 152);
  border-top-color: rgb(152, 152, 152);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 105, 224);
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 194, 97;
  background-color: rgba(0, 194, 97, 0.1);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 81, 0, 194;
  background-color: rgba(81, 0, 194, 0.1);
  border-bottom-color: rgba(81, 0, 194, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(81, 0, 194, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(81, 0, 194, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(81, 0, 194, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 232, 51,51;
  background-color: rgba(232, 51, 51, 0.1);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 105, 224;
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(162, 169, 177);
  border-left-width: 1px;
  border-right-color: rgb(162, 169, 177);
  border-right-width: 1px;
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 0, 105, 224;
  background-color: rgba(0, 105, 224, 0.1);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 230, 111, 0;
  background-color: rgba(230, 111, 0, 0.1);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(110, 110, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(110, 110, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(110, 110, 110, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 97, 194, 0;
  background-color: rgba(97, 194, 0, 0.1);
  border-bottom-color: rgba(97, 194, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 194, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(97, 194, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(97, 194, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 194, 97;
  background-color: rgba(0, 194, 97, 0.1);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 105, 224;
  background-color: rgba(0, 105, 224, 0.1);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 230, 111, 0;
  background-color: rgba(230, 111, 0, 0.1);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(24, 85, 205);
}

html[saved-theme="light"] body h1 {
  font-family: "Linux Libertine", Georgia, Times, serif;
}

html[saved-theme="light"] body h2 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: "Linux Libertine", Georgia, Times, serif;
}

html[saved-theme="light"] body h3 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body h4 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body h5 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body h6 {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-right-width: 0px;
  border-top-color: rgb(162, 169, 177);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 0, 105, 224;
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 3.2px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-width: 0px;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(90, 90, 90);
}`,
    footer: `html[saved-theme="light"] body footer {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(90, 90, 90);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(24, 85, 205);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(24, 85, 205);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(90, 90, 90);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(90, 90, 90);
  stroke: rgb(90, 90, 90);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(152, 152, 152);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  color: rgb(90, 90, 90);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(248, 249, 250);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body sup {
  color: rgb(24, 85, 205);
  font-size: 11.84px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(24, 85, 205);
}`,
  },
};
