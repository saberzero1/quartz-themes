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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 111, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(142, 148, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 163, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 105, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 105, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 63, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 111, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 152, 152);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 163, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 105, 224);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 105, 224);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 63, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
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
