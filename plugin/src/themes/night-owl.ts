import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "night-owl",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #122d42 !important;
  --background-modifier-border-focus: #82AAFF !important;
  --background-modifier-border-hover: #262A39 !important;
  --background-modifier-error: rgba(239, 83, 80, 0.3) !important;
  --background-modifier-error-hover: rgba(239, 83, 80, 0.4) !important;
  --background-modifier-error-rgb: 239, 83, 80 !important;
  --background-modifier-form-field: #1d3b53 !important;
  --background-modifier-form-field-hover: #1d3b53 !important;
  --background-modifier-message: #0b253a !important;
  --background-modifier-success: rgba(197, 228, 120, 0.3) !important;
  --background-modifier-success-rgb: 197, 228, 120 !important;
  --background-primary: #011627 !important;
  --background-primary-alt: #0b253a !important;
  --background-secondary: #021320 !important;
  --background-secondary-alt: #0b2942 !important;
  --bases-cards-background: #011627 !important;
  --bases-cards-cover-background: #0b253a !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #122d42 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #262A39 !important;
  --bases-embed-border-color: #122d42 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #5f7e97 !important;
  --bases-table-border-color: #122d42 !important;
  --bases-table-cell-background-active: #011627 !important;
  --bases-table-cell-background-disabled: #0b253a !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #82AAFF !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #82AAFF !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #0b253a !important;
  --bases-table-header-background: #011627 !important;
  --bases-table-header-color: #5f7e97 !important;
  --bases-table-row-background-hover: #0b253a !important;
  --bases-table-summary-background: #011627 !important;
  --blockquote-background-color: rgba(127, 219, 202, 0.1) !important;
  --blockquote-border: 2px solid #7fdbca !important;
  --blockquote-border-color: #82AAFF !important;
  --blockquote-color: #d6deeb !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, #0b253a 65%, transparent) linear-gradient(#0b253a, color-mix(in srgb, #0b253a 65%, transparent)) !important;
  --bold-color: #c5e478 !important;
  --bold-weight: 600 !important;
  --button-active-bg: #82AAFF !important;
  --button-default-bg: #7e57c2cc !important;
  --button-default-border-color: transparent !important;
  --button-default-color: #ffffff !important;
  --button-hover-bg: #7e57c2 !important;
  --button-radius: 0px !important;
  --calendar-background-hover: #0b253a !important;
  --calendar-hover: #0b2942 !important;
  --calendar-today: #82AAFF !important;
  --calendar-week: #5f7e97 !important;
  --callout-radius: 0px;
  --canvas-background: #011627 !important;
  --canvas-card-label-color: #4b6479 !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #262A39 !important;
  --caret-color: #d6deeb !important;
  --checkbox-border: #122d42 !important;
  --checkbox-border-color: #4b6479 !important;
  --checkbox-border-color-hover: #5f7e97 !important;
  --checkbox-border-hover: #82AAFF !important;
  --checkbox-color: #82AAFF !important;
  --checkbox-color-hover: #7fdbca !important;
  --checkbox-marker-color: #011627 !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #5f7e97 !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #021320 !important;
  --code-border-color: #122d42 !important;
  --code-comment: #637777 !important;
  --code-function: #82AAFF !important;
  --code-important: #EF5350 !important;
  --code-keyword: #c792ea !important;
  --code-normal: #d6deeb !important;
  --code-operator: #7fdbca !important;
  --code-property: #c5e478 !important;
  --code-punctuation: #d6deeb !important;
  --code-radius: 0px !important;
  --code-string: #ecc48d !important;
  --code-tag: #caece6 !important;
  --code-value: #F78C6C !important;
  --collapse-icon-color: #4b6479 !important;
  --collapse-icon-color-collapsed: #82AAFF !important;
  --color-accent: #82AAFF !important;
  --color-accent-1: #c792ea !important;
  --color-accent-2: #7fdbca !important;
  --color-base-00: #011627 !important;
  --color-base-05: #0b253a !important;
  --color-base-10: #021320 !important;
  --color-base-100: #ffffff !important;
  --color-base-20: #122d42 !important;
  --color-base-25: #1d3b53 !important;
  --color-base-30: #262A39 !important;
  --color-base-35: #2C3043 !important;
  --color-base-40: #4b6479 !important;
  --color-base-50: #5f7e97 !important;
  --color-base-60: #89a4bb !important;
  --color-base-70: #d6deeb !important;
  --dark: #d6deeb !important;
  --darkgray: #d6deeb !important;
  --divider-color: #122d42 !important;
  --divider-color-hover: #262A39 !important;
  --dropdown-background: #0b253a !important;
  --dropdown-background-hover: #0b2942 !important;
  --embed-background: #0b253a !important;
  --embed-block-shadow-hover: 0 0 0 1px #122d42, inset 0 0 0 1px #122d42 !important;
  --embed-border-left: 2px solid #82AAFF !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid #82AAFF !important;
  --embed-font-style: italic !important;
  --embed-padding: 0 0 0 20px !important;
  --file-header-background: #011627 !important;
  --file-header-background-focused: #011627 !important;
  --file-header-font-weight: 600 !important;
  --file-margins: 44px !important;
  --flair-background: #0b253a !important;
  --flair-color: #d6deeb !important;
  --footnote-divider-color: #122d42 !important;
  --footnote-id-color: #5f7e97 !important;
  --footnote-id-color-no-occurrences: #4b6479 !important;
  --footnote-radius: 0px !important;
  --graph-line: #122d42 !important;
  --graph-node: #82AAFF !important;
  --graph-node-attachment: #F78C6C !important;
  --graph-node-focused: #7fdbca !important;
  --graph-node-tag: #c5e478 !important;
  --graph-node-unresolved: #5f7e97 !important;
  --graph-text: #d6deeb !important;
  --gray: #5f7e97 !important;
  --h1-color: #82AAFF !important;
  --h1-size: 1.875em !important;
  --h1-weight: 600 !important;
  --h2-color: #7fdbca !important;
  --h2-size: 1.5em !important;
  --h2-weight: 600 !important;
  --h3-color: #c5e478 !important;
  --h3-line-height: 1.2 !important;
  --h3-size: 1.25em !important;
  --h3-weight: 600 !important;
  --h4-color: #ecc48d !important;
  --h4-line-height: 1.2 !important;
  --h4-size: 1.125em !important;
  --h4-weight: 600 !important;
  --h5-color: #F78C6C !important;
  --h5-line-height: 1.2 !important;
  --h5-size: 1em !important;
  --h5-weight: 600 !important;
  --h6-color: #c792ea !important;
  --h6-line-height: 1.2 !important;
  --heading-formatting: #4b6479 !important;
  --highlight: #5f7e9779 !important;
  --highlight-background: rgba(255, 235, 149, 0.4) !important;
  --highlight-background-hover: rgba(255, 235, 149, 0.6) !important;
  --hr-color: #122d42 !important;
  --icon-color: #5f7e97 !important;
  --icon-color-active: #82AAFF !important;
  --icon-color-focused: #82AAFF !important;
  --icon-color-hover: #d6deeb !important;
  --indentation-guide-color: rgba(94, 129, 206, 0.32) !important;
  --indentation-guide-color-active: #7E97AC !important;
  --inline-title-color: #82AAFF !important;
  --inline-title-size: 1.875em !important;
  --inline-title-weight: 600 !important;
  --input-bg: #0b253a !important;
  --input-border-color: #5f7e97 !important;
  --input-date-separator: #4b6479 !important;
  --input-placeholder-color: #5f7e97 !important;
  --input-radius: 0px !important;
  --input-text-color: #ffffff !important;
  --interactive-accent: #82AAFF !important;
  --interactive-accent-hover: #7fdbca !important;
  --interactive-hover: #0b2942 !important;
  --interactive-normal: #0b253a !important;
  --interactive-success: #c5e478 !important;
  --italic-color: #c792ea !important;
  --light: #011627 !important;
  --lightgray: #021320 !important;
  --link-color: #7fdbca !important;
  --link-color-hover: #82AAFF !important;
  --link-external-color: #ff869a !important;
  --link-external-color-hover: #EF5350 !important;
  --link-unresolved-color: #5f7e97 !important;
  --link-unresolved-decoration-color: #5f7e97 !important;
  --list-indent: 2em !important;
  --list-marker-color: #7fdbca !important;
  --list-marker-color-collapsed: #5f7e97 !important;
  --list-marker-color-hover: #82AAFF !important;
  --menu-background: #011627 !important;
  --menu-border: #122d42 !important;
  --menu-border-color: #262A39 !important;
  --menu-item-background-active: #1d3b53 !important;
  --menu-item-background-hover: #0b2942 !important;
  --menu-item-color: #d6deeb !important;
  --menu-item-color-hover: #ffffff !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #122d42 !important;
  --metadata-divider-color: #122d42 !important;
  --metadata-input-text-color: #d6deeb !important;
  --metadata-label-text-color: #5f7e97 !important;
  --metadata-label-text-color-hover: #5f7e97 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #82AAFF !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #262A39 !important;
  --modal-backdrop: rgba(1, 22, 39, 0.8) !important;
  --modal-background: #011627 !important;
  --modal-border: #122d42 !important;
  --modal-border-color: #4b6479 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #5f7e97 !important;
  --nav-collapse-icon-color-collapsed: #5f7e97 !important;
  --nav-heading-color: #d6deeb !important;
  --nav-heading-color-collapsed: #4b6479 !important;
  --nav-heading-color-collapsed-hover: #5f7e97 !important;
  --nav-heading-color-hover: #d6deeb !important;
  --nav-indentation-guide-color: rgba(94, 129, 206, 0.32) !important;
  --nav-item-background-active: #1d3b53 !important;
  --nav-item-background-hover: #0b2942 !important;
  --nav-item-background-selected: #0b2942 !important;
  --nav-item-color: #5f7e97 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #82AAFF !important;
  --nav-item-color-hover: #d6deeb !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-item-radius: 0px !important;
  --nav-item-weight-active: normal !important;
  --nav-item-weight-hover: normal !important;
  --nav-tag-color: #4b6479 !important;
  --nav-tag-color-active: #5f7e97 !important;
  --nav-tag-color-hover: #5f7e97 !important;
  --nav-tag-radius: 0px !important;
  --night-owl-accent-blue: #82AAFF !important;
  --night-owl-accent-cyan: #7fdbca !important;
  --night-owl-accent-green: #c5e478 !important;
  --night-owl-accent-orange: #F78C6C !important;
  --night-owl-accent-pink: #ff5874 !important;
  --night-owl-accent-purple: #c792ea !important;
  --night-owl-accent-red: #EF5350 !important;
  --night-owl-accent-yellow: #ecc48d !important;
  --night-owl-bg-primary: #011627 !important;
  --night-owl-bg-secondary: #0b253a !important;
  --night-owl-bg-tab-active: #0b2942 !important;
  --night-owl-bg-tab-inactive: #01111d !important;
  --night-owl-bg-tertiary: #021320 !important;
  --night-owl-border: #122d42 !important;
  --night-owl-border-secondary: #262A39 !important;
  --night-owl-button-bg: #7e57c2cc !important;
  --night-owl-button-hover: #7e57c2 !important;
  --night-owl-highlight: #5f7e9779 !important;
  --night-owl-selection: #1d3b53 !important;
  --night-owl-text-accent: #82AAFF !important;
  --night-owl-text-bright: #ffffff !important;
  --night-owl-text-muted: #4b6479 !important;
  --night-owl-text-primary: #d6deeb !important;
  --night-owl-text-secondary: #5f7e97 !important;
  --pdf-background: #011627 !important;
  --pdf-page-background: #011627 !important;
  --pdf-shadow: 0 0 0 1px #122d42 !important;
  --pdf-sidebar-background: #011627 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #122d42 !important;
  --pill-border-color: #122d42 !important;
  --pill-border-color-hover: #262A39 !important;
  --pill-color: #5f7e97 !important;
  --pill-color-hover: #d6deeb !important;
  --pill-color-remove: #4b6479 !important;
  --pill-color-remove-hover: #82AAFF !important;
  --progress-bar-bg: #0b253a !important;
  --progress-bar-fill: #82AAFF !important;
  --prompt-background: #011627 !important;
  --prompt-border-color: #4b6479 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #0b253a 65%, transparent) linear-gradient(#0b253a, color-mix(in srgb, #0b253a 65%, transparent)) !important;
  --ribbon-background: #011627 !important;
  --ribbon-background-collapsed: #011627 !important;
  --scrollbar-active-thumb-bg: rgba(8, 77, 129, 0.5) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-radius: 0px !important;
  --scrollbar-thumb-bg: rgba(8, 77, 129, 0.3) !important;
  --search-clear-button-color: #5f7e97 !important;
  --search-clear-button-color-hover: #d6deeb !important;
  --search-icon-color: #5f7e97 !important;
  --search-icon-color-active: #82AAFF !important;
  --search-result-background: #0b253a !important;
  --search-text-clear: #5f7e97 !important;
  --secondary: #82AAFF !important;
  --setting-group-heading-color: #d6deeb !important;
  --setting-items-background: #0b253a !important;
  --setting-items-border-color: #122d42 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-border-color: #262A39 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #122d42 !important;
  --status-bar-background: #011627 !important;
  --status-bar-border: #262A39 !important;
  --status-bar-border-color: #122d42 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text: #5f7e97 !important;
  --status-bar-text-color: #5f7e97 !important;
  --suggestion-background: #011627 !important;
  --syntax-highlighting-attribute: #c5e478 !important;
  --syntax-highlighting-class: #ffcb8b !important;
  --syntax-highlighting-comment: #637777 !important;
  --syntax-highlighting-constant: #82AAFF !important;
  --syntax-highlighting-function: #82AAFF !important;
  --syntax-highlighting-keyword: #c792ea !important;
  --syntax-highlighting-number: #F78C6C !important;
  --syntax-highlighting-operator: #7fdbca !important;
  --syntax-highlighting-string: #ecc48d !important;
  --syntax-highlighting-tag: #caece6 !important;
  --syntax-highlighting-variable: #c5e478 !important;
  --tab-background-active: #0b2942 !important;
  --tab-container-background: #021320 !important;
  --tab-divider-color: #262A39 !important;
  --tab-outline-color: #262A39 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #021320 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #021320, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #82AAFF !important;
  --tab-text-color: #4b6479 !important;
  --tab-text-color-active: #d2dee7 !important;
  --tab-text-color-focused: #5f7e97 !important;
  --tab-text-color-focused-active: #5f7e97 !important;
  --tab-text-color-focused-active-current: #d6deeb !important;
  --tab-text-color-focused-highlighted: #82AAFF !important;
  --tab-text-color-inactive: #5f7e97 !important;
  --table-add-button-border-color: #122d42 !important;
  --table-background: #011627 !important;
  --table-border-color: #122d42 !important;
  --table-column-alt-background: rgba(95, 126, 151, 0.05) !important;
  --table-drag-handle-background-active: #82AAFF !important;
  --table-drag-handle-color: #4b6479 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-background: #0b253a !important;
  --table-header-background-hover: #0b2942 !important;
  --table-header-border-color: #122d42 !important;
  --table-header-color: #d6deeb !important;
  --table-header-font-size: 0.875em !important;
  --table-header-font-weight: 600 !important;
  --table-row-alt-background: rgba(95, 126, 151, 0.05) !important;
  --table-row-alt-background-hover: #011627 !important;
  --table-row-background-hover: #0b253a !important;
  --table-selection-border-color: #82AAFF !important;
  --table-text-color: #d6deeb !important;
  --tag-background: #0b253a !important;
  --tag-background-hover: #0b2942 !important;
  --tag-border: #122d42 !important;
  --tag-color: #7fdbca !important;
  --tag-color-hover: #82AAFF !important;
  --tertiary: #7fdbca !important;
  --text-accent: #82AAFF !important;
  --text-accent-hover: #7fdbca !important;
  --text-error: #EF5350 !important;
  --text-faint: #4b6479 !important;
  --text-highlight-bg: #5f7e9779 !important;
  --text-muted: #5f7e97 !important;
  --text-normal: #d6deeb !important;
  --text-on-accent: #ffffff !important;
  --text-selection: #1d3b53 !important;
  --text-success: #c5e478 !important;
  --text-warning: #FFCA28 !important;
  --textHighlight: #5f7e9779 !important;
  --titlebar-background: #011627 !important;
  --titlebar-background-focused: #011627 !important;
  --titlebar-border: #262A39 !important;
  --titlebar-border-color: #122d42 !important;
  --titlebar-text: #eeefff !important;
  --titlebar-text-color: #5f7e97 !important;
  --titlebar-text-color-focused: #d6deeb !important;
  --titlebar-text-weight: normal !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --tooltip-bg: #021320 !important;
  --tooltip-border: #122d42 !important;
  --tooltip-color: #d6deeb !important;
  --vault-name-color: #5f7e97 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #d6deeb !important;
  --vault-profile-color-hover: #d6deeb !important;
  --workspace-background-translucent: rgba(1, 22, 39, 0.85) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(2, 19, 32);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(1, 22, 39);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(95, 126, 151, 0.05);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(18, 45, 66);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(2, 19, 32);
  border-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(18, 45, 66);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(11, 37, 58);
  color: rgb(127, 219, 202);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(2, 19, 32);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(18, 45, 66);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(2, 19, 32);
  border-left-color: rgb(18, 45, 66);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(1, 22, 39);
  color: rgb(214, 222, 235);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(197, 228, 120);
  outline: rgb(197, 228, 120) none 0px;
  text-decoration-color: rgb(197, 228, 120);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(199, 146, 234);
  outline: rgb(199, 146, 234) none 0px;
  text-decoration-color: rgb(199, 146, 234);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(199, 146, 234);
  outline: rgb(199, 146, 234) none 0px;
  text-decoration-color: rgb(199, 146, 234);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(197, 228, 120);
  outline: rgb(197, 228, 120) none 0px;
  text-decoration-color: rgb(197, 228, 120);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(95, 126, 151, 0.475);
  color: rgb(214, 222, 235);
  outline: rgb(214, 222, 235) none 0px;
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body del {
  color: rgb(214, 222, 235);
  outline: rgb(214, 222, 235) none 0px;
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(214, 222, 235);
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(75, 100, 121);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(130, 170, 255);
  border-color: rgb(130, 170, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(95, 126, 151);
  outline: rgb(95, 126, 151) none 0px;
  text-decoration-color: rgb(95, 126, 151);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 134, 154);
  outline: rgb(255, 134, 154) none 0px;
  text-decoration-color: rgb(255, 134, 154);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(127, 219, 202);
  outline: rgb(127, 219, 202) none 0px;
  text-decoration-color: rgb(127, 219, 202);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(95, 126, 151);
  outline: rgb(95, 126, 151) none 0px;
  text-decoration: underline rgb(95, 126, 151);
  text-decoration-color: rgb(95, 126, 151);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body dt {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(75, 100, 121);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(127, 219, 202, 0.1);
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body table {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(1, 22, 39);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(95, 126, 151, 0.05);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(11, 37, 58);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(214, 222, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(130, 170, 255);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(130, 170, 255);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(130, 170, 255);
  border-left-color: rgb(130, 170, 255);
  border-right-color: rgb(130, 170, 255);
  border-top-color: rgb(130, 170, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(130, 170, 255);
  border-left-color: rgb(130, 170, 255);
  border-right-color: rgb(130, 170, 255);
  border-top-color: rgb(130, 170, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(11, 37, 58);
  border-bottom-color: rgb(95, 126, 151);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(214, 222, 235);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(11, 37, 58);
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(130, 170, 255);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(11, 37, 58);
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(75, 100, 121);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(75, 100, 121);
  border-right-color: rgb(75, 100, 121);
  border-top-color: rgb(75, 100, 121);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(214, 222, 235);
  text-decoration-color: rgb(214, 222, 235);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  background-color: rgb(29, 59, 83);
  border-bottom-color: rgb(18, 45, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(75, 100, 121);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(75, 100, 121);
  border-right-color: rgb(75, 100, 121);
  border-top-color: rgb(75, 100, 121);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(214, 222, 235);
  outline: rgb(214, 222, 235) none 0px;
  text-decoration-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(214, 222, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(75, 100, 121);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(75, 100, 121);
  border-right-color: rgb(75, 100, 121);
  border-top-color: rgb(75, 100, 121);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(2, 19, 32);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(214, 222, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(11, 37, 58);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(127, 219, 202);
}

html[saved-theme="dark"] body h1 {
  color: rgb(130, 170, 255);
}

html[saved-theme="dark"] body h2 {
  color: rgb(127, 219, 202);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(130, 170, 255);
}

html[saved-theme="dark"] body h3 {
  color: rgb(197, 228, 120);
}

html[saved-theme="dark"] body h4 {
  color: rgb(236, 196, 141);
}

html[saved-theme="dark"] body h5 {
  color: rgb(247, 140, 108);
}

html[saved-theme="dark"] body h6 {
  color: rgb(199, 146, 234);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(1, 22, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 22, 39);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(94, 129, 206, 0.32);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(214, 222, 235);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(95, 126, 151);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(95, 126, 151);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(1, 22, 39);
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  border-top-left-radius: 0px;
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(95, 126, 151);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 126, 151);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(95, 126, 151);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(95, 126, 151);
  stroke: rgb(95, 126, 151);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(95, 126, 151);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(75, 100, 121);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(18, 45, 66);
  border-left-color: rgb(18, 45, 66);
  border-right-color: rgb(18, 45, 66);
  border-top-color: rgb(18, 45, 66);
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(95, 126, 151);
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(1, 22, 39);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body abbr {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(95, 126, 151);
  border-left-color: rgb(95, 126, 151);
  border-right-color: rgb(95, 126, 151);
  border-top-color: rgb(95, 126, 151);
  color: rgb(95, 126, 151);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(2, 19, 32);
  border-bottom-color: rgb(214, 222, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(214, 222, 235);
  border-left-color: rgb(214, 222, 235);
  border-right-color: rgb(214, 222, 235);
  border-top-color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body sub {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body summary {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body sup {
  color: rgb(214, 222, 235);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(11, 37, 58);
  color: rgb(127, 219, 202);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
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
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
  },
};
