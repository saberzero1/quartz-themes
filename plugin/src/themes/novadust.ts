import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "novadust", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 140 !important;
  --accent-l: 69% !important;
  --accent-s: 56% !important;
  --almost-white: #f7f5e9 !important;
  --background-modifier-active-hover: #1d2833 !important;
  --background-modifier-border: none !important;
  --background-modifier-border-focus: none !important;
  --background-modifier-border-hover: none !important;
  --background-modifier-error: #ff695d !important;
  --background-modifier-error-hover: #ff695d !important;
  --background-modifier-error-rgb: 255, 105, 93 !important;
  --background-modifier-form-field: #303f51 !important;
  --background-modifier-form-field-hover: #303f51 !important;
  --background-modifier-hover: #273341 !important;
  --background-modifier-message: #ffa161 !important;
  --background-modifier-success: #b9e678 !important;
  --background-modifier-success-rgb: 185, 230, 120 !important;
  --background-primary: #1d2833 !important;
  --background-primary-alt: #2c3a4a !important;
  --background-secondary: #1d2833 !important;
  --background-secondary-alt: #2c3a4a !important;
  --bases-cards-background: #1d2833 !important;
  --bases-cards-cover-background: #2c3a4a !important;
  --bases-cards-shadow: 0 0 0 1px none !important;
  --bases-cards-shadow-hover: 0 0 0 1px none !important;
  --bases-embed-border-color: none !important;
  --bases-group-heading-property-color: #cfd1d1 !important;
  --bases-table-border-color: none !important;
  --bases-table-cell-background-active: #1d2833 !important;
  --bases-table-cell-background-disabled: #2c3a4a !important;
  --bases-table-cell-background-selected: rgba(132, 220, 161, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px none !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5dcbc3 !important;
  --bases-table-group-background: #2c3a4a !important;
  --bases-table-header-background: #1d2833 !important;
  --bases-table-header-background-hover: #273341 !important;
  --bases-table-header-color: #cfd1d1 !important;
  --bases-table-summary-background: #1d2833 !important;
  --bases-table-summary-background-hover: #273341 !important;
  --basic-gray: #cfd1d1 !important;
  --blockquote-background-color: #2c3a4a !important;
  --blockquote-border-color: #84dca1 !important;
  --blockquote-border-thickness: 0.2em !important;
  --blue-gray: #c4d1d1 !important;
  --blur-background: color-mix(in srgb, #ffa161 65%, transparent) linear-gradient(#ffa161, color-mix(in srgb, #ffa161 65%, transparent)) !important;
  --bold-color: #b9e678 !important;
  --bright-blue: #5dcbc3 !important;
  --bright-blue-rbg: 95, 203, 195 !important;
  --bright-green: #b9e678 !important;
  --bright-green-rgb: 185, 230, 120 !important;
  --bright-orange: #ffa161 !important;
  --bright-orange-rgb: 255, 161, 97 !important;
  --bright-purple: #d689e3 !important;
  --bright-purple-rgb: 214, 137, 227 !important;
  --bright-red: #ff695d !important;
  --bright-red-rgb: 255, 105, 93 !important;
  --bright-yellow: #f8c260 !important;
  --bright-yellow-rgb: 248, 194, 96 !important;
  --callout-border-opacity: 0.05;
  --callout-border-width: 2px;
  --callout-bug: 214, 137, 227;
  --callout-default: 95, 203, 195;
  --callout-error: 255, 105, 93;
  --callout-example: 214, 137, 227;
  --callout-fail: 255, 105, 93;
  --callout-important: 255, 161, 97;
  --callout-info: 95, 203, 195;
  --callout-question: 255, 213, 128;
  --callout-quote: 255, 213, 128;
  --callout-radius: 10px;
  --callout-success: 185, 230, 120;
  --callout-summary: 116, 133, 154;
  --callout-tip: 255, 161, 97;
  --callout-title-color: none;
  --callout-todo: 95, 203, 195;
  --callout-warning: 255, 105, 93;
  --canvas-background: #1d2833 !important;
  --canvas-card-label-color: #74859a !important;
  --canvas-color: 133, 221, 162 !important;
  --canvas-color-1: 255, 105, 93 !important;
  --canvas-color-2: 255, 161, 97 !important;
  --canvas-color-3: 255, 213, 128 !important;
  --canvas-color-4: 185, 230, 120 !important;
  --canvas-color-5: 95, 203, 195 !important;
  --canvas-color-6: 214, 137, 227 !important;
  --canvas-dot-pattern: #2c4f64 !important;
  --caret-color: #eeead1 !important;
  --checkbox-border-color: rgba(255, 213, 128, 0.8) !important;
  --checkbox-border-color-hover: rgba(255, 213, 128, 0.6) !important;
  --checkbox-color: #ffd580 !important;
  --checkbox-color-hover: rgba(255, 213, 128, 0.8) !important;
  --checkbox-marker-color: #1d2833 !important;
  --checklist-done-color: #74859a !important;
  --code-background: #2c3a4a !important;
  --code-border-color: none !important;
  --code-bracket-background: #273341 !important;
  --code-comment: #74859a !important;
  --code-function: #f8c260 !important;
  --code-important: #ffa161 !important;
  --code-keyword: #ffa161 !important;
  --code-normal: #c4d1d1 !important;
  --code-operator: #ff695d !important;
  --code-property: #5dcbc3 !important;
  --code-punctuation: #cfd1d1 !important;
  --code-string: #b9e678 !important;
  --code-tag: #ff695d !important;
  --code-value: #d689e3 !important;
  --collapse-icon-color: #5dcbc3 !important;
  --collapse-icon-color-collapsed: rgb(171, 232, 188) !important;
  --color-accent: rgb(132, 220, 161) !important;
  --color-accent-1: rgb(171, 232, 188) !important;
  --color-accent-2: rgb(210, 243, 219) !important;
  --color-accent-hsl: 140, 56%, 69% !important;
  --color-blue: #2c4f64 !important;
  --color-blue-rgb: 95, 203, 195 !important;
  --color-cyan: #5dcbc3 !important;
  --color-cyan-rgb: 133, 221, 162 !important;
  --color-green: #b9e678 !important;
  --color-green-rgb: 185, 230, 120 !important;
  --color-orange: #ffa161 !important;
  --color-orange-rgb: 255, 161, 97 !important;
  --color-pink: #ffa161 !important;
  --color-pink-rgb: 255, 161, 97 !important;
  --color-purple: #d689e3 !important;
  --color-purple-rgb: 214, 137, 227 !important;
  --color-red: #ff695d !important;
  --color-red-rgb: 255, 105, 93 !important;
  --color-yellow: #f8c260 !important;
  --color-yellow-rgb: 255, 213, 128 !important;
  --dark: #eeead1 !important;
  --dark-blue: #1d2833 !important;
  --dark-blue-rgb: 29, 40, 51 !important;
  --darkest-blue: #18222b !important;
  --darkgray: #eeead1 !important;
  --divider-color: #2c3a4a !important;
  --divider-color-hover: #5dcbc3 !important;
  --dropdown-background: #ffa161 !important;
  --dropdown-background-hover: rgba(255, 161, 97, 0.9) !important;
  --embed-block-shadow-hover: 0 0 0 1px none, inset 0 0 0 1px none !important;
  --embed-border-start: 2px solid #5dcbc3 !important;
  --file-header-active: #f7f5e9 !important;
  --file-header-background: #1d2833 !important;
  --file-header-background-focused: #1d2833 !important;
  --flair-background: #ffa161 !important;
  --flair-color: #eeead1 !important;
  --footnote-divider-color: none !important;
  --footnote-id-color: #cfd1d1 !important;
  --footnote-id-color-no-occurrences: #5dcbc3 !important;
  --footnote-input-background-active: #273341 !important;
  --graph-line: #303f51 !important;
  --graph-node: #ffd580 !important;
  --graph-node-attachment: #ff695d !important;
  --graph-node-focused: #ffa161 !important;
  --graph-node-tag: #5dcbc3 !important;
  --graph-node-unresolved: #74859a !important;
  --graph-text: #74859a !important;
  --gray: #cfd1d1 !important;
  --h1-color: #ff695d !important;
  --h1-size: 2.3em !important;
  --h2-color: #ffa161 !important;
  --h2-size: 2.1em !important;
  --h3-color: #f8c260 !important;
  --h3-size: 1.9em !important;
  --h4-color: #b9e678 !important;
  --h4-size: 1.7em !important;
  --h5-color: #84dca1 !important;
  --h5-size: 1.6em !important;
  --h6-color: #5dcbc3 !important;
  --h6-size: 1.5em !important;
  --heading-formatting: #5dcbc3 !important;
  --highlight: rgba(133, 221, 162, 0.5) !important;
  --hr-color: #84dca1 !important;
  --icon-color: #cfd1d1 !important;
  --icon-color-active: rgb(171, 232, 188) !important;
  --icon-color-focused: #5dcbc3 !important;
  --icon-color-hover: #ffd580 !important;
  --indentation-guide-color: rgba(44, 79, 100, 0.4) !important;
  --indentation-guide-color-active: rgb(44, 79, 100) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #ff695d !important;
  --inline-title-size: 2.3em !important;
  --input-date-separator: #5dcbc3 !important;
  --input-placeholder-color: #5dcbc3 !important;
  --interactive-accent: #5dcbc3 !important;
  --interactive-accent-hover: rgba(44, 79, 100, 0.8) !important;
  --interactive-accent-hsl: rgb(44, 78, 99) !important;
  --interactive-hover: rgba(255, 161, 97, 0.9) !important;
  --interactive-normal: #ffa161 !important;
  --italic-color: #f8c260 !important;
  --italic-weight: bold !important;
  --light: #1d2833 !important;
  --light-blue: #303f51 !important;
  --lightgray: #1d2833 !important;
  --link-color: #ffa161 !important;
  --link-color-hover: rgba(255, 161, 97, 0.8) !important;
  --link-external-color: #5dcbc3 !important;
  --link-external-color-hover: rgba(95, 203, 195, 0.8) !important;
  --link-unresolved-color: #cfd1d1 !important;
  --link-unresolved-decoration-color: hsla(rgb(44, 78, 99), 0.3) !important;
  --list-marker-color: #84dca1 !important;
  --list-marker-color-collapsed: #84dca1 !important;
  --list-marker-color-hover: #cfd1d1 !important;
  --menu-background: #1d2833 !important;
  --menu-border-color: none !important;
  --metadata-border-color: none !important;
  --metadata-divider-color: none !important;
  --metadata-input-background-active: #273341 !important;
  --metadata-input-text-color: #eeead1 !important;
  --metadata-label-background-active: #273341 !important;
  --metadata-label-text-color: #cfd1d1 !important;
  --metadata-label-text-color-hover: #cfd1d1 !important;
  --metadata-property-background-active: #273341 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px none !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px none !important;
  --mid-blue: #273341 !important;
  --modal-background: #1d2833 !important;
  --nav-collapse-icon-color: #84dca1 !important;
  --nav-collapse-icon-color-collapsed: #5dcbc3 !important;
  --nav-heading-color: #eeead1 !important;
  --nav-heading-color-collapsed: #5dcbc3 !important;
  --nav-heading-color-collapsed-hover: #cfd1d1 !important;
  --nav-heading-color-hover: #eeead1 !important;
  --nav-indentation-guide-color: rgba(44, 79, 100, 0.4) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #273341 !important;
  --nav-item-background-hover: #273341 !important;
  --nav-item-background-selected: rgba(132, 220, 161, 0.15) !important;
  --nav-item-color: #cfd1d1 !important;
  --nav-item-color-active: #eeead1 !important;
  --nav-item-color-highlighted: rgb(171, 232, 188) !important;
  --nav-item-color-hover: #eeead1 !important;
  --nav-item-color-selected: #eeead1 !important;
  --nav-tag-color: #5dcbc3 !important;
  --nav-tag-color-active: #cfd1d1 !important;
  --nav-tag-color-hover: #cfd1d1 !important;
  --ocean-blue: #2c4f64 !important;
  --ocean-blue-rgb: 44, 79, 100 !important;
  --pdf-background: #1d2833 !important;
  --pdf-page-background: #1d2833 !important;
  --pdf-shadow: 0 0 0 1px none !important;
  --pdf-sidebar-background: #1d2833 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px none !important;
  --percy-blue: #84dca1 !important;
  --percy-blue-rgb: 133, 221, 162 !important;
  --pill-border-color: none !important;
  --pill-border-color-hover: none !important;
  --pill-color: #cfd1d1 !important;
  --pill-color-hover: #eeead1 !important;
  --pill-color-remove: #5dcbc3 !important;
  --pill-color-remove-hover: rgb(171, 232, 188) !important;
  --prompt-background: #1d2833 !important;
  --raised-background: color-mix(in srgb, #ffa161 65%, transparent) linear-gradient(#ffa161, color-mix(in srgb, #ffa161 65%, transparent)) !important;
  --ribbon-background: #2c3a4a !important;
  --ribbon-background-collapsed: #1d2833 !important;
  --scrollbar-active-thumb-bg: #84dca1 !important;
  --scrollbar-thumb-bg: #273341 !important;
  --search-clear-button-color: #cfd1d1 !important;
  --search-icon-color: #cfd1d1 !important;
  --search-result-background: #1d2833 !important;
  --secondary: rgb(171, 232, 188) !important;
  --setting-group-heading-color: #eeead1 !important;
  --setting-items-background: #2c3a4a !important;
  --setting-items-border-color: none !important;
  --slider-thumb-border-color: none !important;
  --slider-track-background: #2c4f64 !important;
  --soft-dark-blue: #2c3a4a !important;
  --soft-dark-blue-rbg: 44, 58, 74 !important;
  --soft-white: #eeead1 !important;
  --soft-yellow: #ffd580 !important;
  --soft-yellow-rgb: 255, 213, 128 !important;
  --status-bar-background: #1d2833 !important;
  --status-bar-border-color: #2c3a4a !important;
  --status-bar-text-color: #cfd1d1 !important;
  --suggestion-background: #1d2833 !important;
  --sync-avatar-color-1: #ff695d !important;
  --sync-avatar-color-2: #ffa161 !important;
  --sync-avatar-color-3: #f8c260 !important;
  --sync-avatar-color-4: #b9e678 !important;
  --sync-avatar-color-5: #5dcbc3 !important;
  --sync-avatar-color-6: #2c4f64 !important;
  --sync-avatar-color-7: #d689e3 !important;
  --sync-avatar-color-8: #ffa161 !important;
  --tab-background-active: #1d2833 !important;
  --tab-container-background: #2c3a4a !important;
  --tab-curve: none !important;
  --tab-divider-color: none !important;
  --tab-outline-color: #2c3a4a !important;
  --tab-radius: 5px !important;
  --tab-radius-active: 5px !important;
  --tab-switcher-background: #1d2833 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1d2833, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(132, 220, 161) !important;
  --tab-text-color: #74859a !important;
  --tab-text-color-active: #cfd1d1 !important;
  --tab-text-color-focused: #cfd1d1 !important;
  --tab-text-color-focused-active: #cfd1d1 !important;
  --tab-text-color-focused-active-current: #eeead1 !important;
  --tab-text-color-focused-highlighted: rgb(171, 232, 188) !important;
  --table-add-button-border-color: none !important;
  --table-border-color: none !important;
  --table-drag-handle-background-active: #5dcbc3 !important;
  --table-drag-handle-color: #5dcbc3 !important;
  --table-drag-handle-color-active: #2c4f64 !important;
  --table-header-border-color: none !important;
  --table-header-color: #eeead1 !important;
  --table-selection: rgba(132, 220, 161, 0.1) !important;
  --table-selection-border-color: #5dcbc3 !important;
  --tag-background: #2c4f64 !important;
  --tag-background-hover: #303f51 !important;
  --tag-border-color: none !important;
  --tag-border-color-hover: hsla(rgb(44, 78, 99), 0.15) !important;
  --tag-color: #b9e678 !important;
  --tag-color-hover: #84dca1 !important;
  --tag-radius: 15px !important;
  --tag-weight: 600 !important;
  --tertiary: rgb(210, 243, 219) !important;
  --text-accent: rgb(171, 232, 188) !important;
  --text-accent-hover: rgb(210, 243, 219) !important;
  --text-error: #ff695d !important;
  --text-faint: #5dcbc3 !important;
  --text-highlight-bg: rgba(133, 221, 162, 0.5) !important;
  --text-muted: #cfd1d1 !important;
  --text-normal: #eeead1 !important;
  --text-on-accent: #2c4f64 !important;
  --text-on-accent-inverted: #2c4f64 !important;
  --text-selection: #ff695d !important;
  --text-success: #b9e678 !important;
  --text-warning: #ffa161 !important;
  --textHighlight: rgba(133, 221, 162, 0.5) !important;
  --titlebar-background: #1d2833 !important;
  --titlebar-background-focused: #2c3a4a !important;
  --titlebar-border-color: none !important;
  --titlebar-text-color: #cfd1d1 !important;
  --titlebar-text-color-focused: #eeead1 !important;
  --vault-profile-color: #eeead1 !important;
  --vault-profile-color-hover: #eeead1 !important;
  --washed-blue: #74859a !important;
  --washed-blue-rgb: 116, 133, 154 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 58, 74);
  color: rgb(238, 234, 209);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 40, 51);
  color: rgb(238, 234, 209);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 40, 51);
  color: rgb(238, 234, 209);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 58, 74);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 58, 74);
  border-left-color: rgb(44, 58, 74);
  color: rgb(238, 234, 209);
}

body div#quartz-root {
  background-color: rgb(29, 40, 51);
  color: rgb(238, 234, 209);
}`,
    typography: `body .page article p > b, b {
  color: rgb(185, 230, 120);
  outline: rgb(185, 230, 120) none 0px;
  text-decoration: rgb(185, 230, 120);
  text-decoration-color: rgb(185, 230, 120);
}

body .page article p > em, em {
  color: rgb(248, 194, 96);
  font-weight: 700;
  outline: rgb(248, 194, 96) none 0px;
  text-decoration: rgb(248, 194, 96);
  text-decoration-color: rgb(248, 194, 96);
}

body .page article p > i, i {
  color: rgb(248, 194, 96);
  font-weight: 700;
  outline: rgb(248, 194, 96) none 0px;
  text-decoration: rgb(248, 194, 96);
  text-decoration-color: rgb(248, 194, 96);
}

body .page article p > strong, strong {
  color: rgb(185, 230, 120);
  outline: rgb(185, 230, 120) none 0px;
  text-decoration: rgb(185, 230, 120);
  text-decoration-color: rgb(185, 230, 120);
}

body .text-highlight {
  background-color: rgba(133, 221, 162, 0.5);
  color: rgb(238, 234, 209);
  outline: rgb(238, 234, 209) none 0px;
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body del {
  color: rgb(238, 234, 209);
  outline: rgb(238, 234, 209) none 0px;
  text-decoration: line-through rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body p {
  color: rgb(207, 209, 209);
  outline: rgb(207, 209, 209) none 0px;
  text-decoration: rgb(207, 209, 209);
  text-decoration-color: rgb(207, 209, 209);
}`,
    links: `body a.external, footer a {
  color: rgb(93, 203, 195);
  outline: rgb(93, 203, 195) none 0px;
  text-decoration: underline rgb(93, 203, 195);
  text-decoration-color: rgb(93, 203, 195);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 161, 97);
  outline: rgb(255, 161, 97) none 0px;
  text-decoration: underline rgb(255, 161, 97);
  text-decoration-color: rgb(255, 161, 97);
}

body a.internal.broken {
  color: rgb(207, 209, 209);
  outline: rgb(207, 209, 209) none 0px;
  text-decoration: underline rgb(207, 209, 209);
  text-decoration-color: rgb(207, 209, 209);
}`,
    lists: `body dd {
  color: rgb(238, 234, 209);
}

body dt {
  color: rgb(238, 234, 209);
}

body ol > li {
  color: rgb(238, 234, 209);
}

body ol.overflow {
  background-color: rgb(29, 40, 51);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body ul > li {
  color: rgb(238, 234, 209);
}

body ul.overflow {
  background-color: rgb(29, 40, 51);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(93, 203, 195);
  text-decoration: rgb(93, 203, 195);
}

body blockquote {
  background-color: rgb(44, 58, 74);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body table {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(238, 234, 209);
  margin-left: 225.891px;
  margin-right: 225.891px;
  width: 210.219px;
}

body td {
  background-color: rgb(48, 63, 81);
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-width: 0px;
  border-left-color: rgb(238, 234, 209);
  border-left-width: 0px;
  border-right-color: rgb(238, 234, 209);
  border-right-width: 0px;
  border-top-color: rgb(238, 234, 209);
  border-top-width: 0px;
  color: rgb(238, 234, 209);
}

body th {
  background-color: rgb(255, 105, 93);
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-width: 0px;
  border-left-color: rgb(238, 234, 209);
  border-left-width: 0px;
  border-right-color: rgb(238, 234, 209);
  border-right-width: 0px;
  border-top-color: rgb(238, 234, 209);
  border-top-width: 0px;
  color: rgb(238, 234, 209);
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

body tr {
  border-bottom-color: rgb(29, 40, 51);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}`,
    code: `body code {
  border-bottom-color: rgb(196, 209, 209);
  border-left-color: rgb(196, 209, 209);
  border-right-color: rgb(196, 209, 209);
  border-top-color: rgb(196, 209, 209);
  color: rgb(196, 209, 209);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body pre > code > [data-line] {
  border-left-color: rgb(248, 194, 96);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(248, 194, 96);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(248, 194, 96);
  border-left-color: rgb(248, 194, 96);
  border-right-color: rgb(248, 194, 96);
  border-top-color: rgb(248, 194, 96);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body pre:has(> code) {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}`,
    images: `body audio {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body figcaption {
  color: rgb(238, 234, 209);
}

body figure {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body img {
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(238, 234, 209);
  border-radius: 10px;
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(238, 234, 209);
  border-radius: 10px;
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
}

body .footnotes {
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body .transclude {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(93, 203, 195);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body .transclude-inner {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(93, 203, 195);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(116, 133, 154);
  text-decoration: rgb(116, 133, 154);
  text-decoration-color: rgb(116, 133, 154);
}

body input[type=checkbox] {
  border-bottom-color: rgba(255, 213, 128, 0.8);
  border-left-color: rgba(255, 213, 128, 0.8);
  border-right-color: rgba(255, 213, 128, 0.8);
  border-top-color: rgba(255, 213, 128, 0.8);
}

body li.task-list-item[data-task='!'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='*'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='-'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='/'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='>'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='?'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='I'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='S'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='b'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='c'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='d'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='f'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='i'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='k'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='l'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='p'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='u'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='w'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(95, 203, 195);
  border-left-color: rgb(95, 203, 195);
  border-right-color: rgb(95, 203, 195);
  border-top-color: rgb(95, 203, 195);
}

body .callout[data-callout="abstract"] {
  --callout-color: 116, 133, 154;
  background-color: rgba(116, 133, 154, 0.1);
  border-bottom-color: rgba(116, 133, 154, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(116, 133, 154, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(116, 133, 154, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(116, 133, 154, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  --callout-color: 214, 137, 227;
  background-color: rgba(214, 137, 227, 0.1);
  border-bottom-color: rgba(214, 137, 227, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(214, 137, 227, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(214, 137, 227, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(214, 137, 227, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 105, 93;
  background-color: rgba(255, 105, 93, 0.1);
  border-bottom-color: rgba(255, 105, 93, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 105, 93, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 105, 93, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 105, 93, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  --callout-color: 214, 137, 227;
  background-color: rgba(214, 137, 227, 0.1);
  border-bottom-color: rgba(214, 137, 227, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(214, 137, 227, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(214, 137, 227, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(214, 137, 227, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 105, 93;
  background-color: rgba(255, 105, 93, 0.1);
  border-bottom-color: rgba(255, 105, 93, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 105, 93, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 105, 93, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 105, 93, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  --callout-color: 95, 203, 195;
  background-color: rgba(95, 203, 195, 0.1);
  border-bottom-color: rgba(95, 203, 195, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(95, 203, 195, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(95, 203, 195, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(95, 203, 195, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  --callout-color: 95, 203, 195;
  background-color: rgba(95, 203, 195, 0.1);
  border-bottom-color: rgba(95, 203, 195, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(95, 203, 195, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(95, 203, 195, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(95, 203, 195, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  --callout-color: 255, 213, 128;
  background-color: rgba(255, 213, 128, 0.1);
  border-bottom-color: rgba(255, 213, 128, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 213, 128, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 213, 128, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 213, 128, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  --callout-color: 255, 213, 128;
  background-color: rgba(255, 213, 128, 0.1);
  border-bottom-color: rgba(255, 213, 128, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 213, 128, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 213, 128, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 213, 128, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  --callout-color: 185, 230, 120;
  background-color: rgba(185, 230, 120, 0.1);
  border-bottom-color: rgba(185, 230, 120, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(185, 230, 120, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(185, 230, 120, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(185, 230, 120, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  --callout-color: 255, 161, 97;
  background-color: rgba(255, 161, 97, 0.1);
  border-bottom-color: rgba(255, 161, 97, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 161, 97, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 161, 97, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 161, 97, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  --callout-color: 95, 203, 195;
  background-color: rgba(95, 203, 195, 0.1);
  border-bottom-color: rgba(95, 203, 195, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(95, 203, 195, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(95, 203, 195, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(95, 203, 195, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 105, 93;
  background-color: rgba(255, 105, 93, 0.1);
  border-bottom-color: rgba(255, 105, 93, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 105, 93, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 105, 93, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 105, 93, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(48, 63, 81);
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-width: 0px;
  border-left-color: rgb(238, 234, 209);
  border-left-width: 0px;
  border-right-color: rgb(238, 234, 209);
  border-right-width: 0px;
  border-top-color: rgb(238, 234, 209);
  border-top-width: 0px;
  color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 40, 51);
}

body .search > .search-container > .search-space > * {
  color: rgb(238, 234, 209);
  outline: rgb(238, 234, 209) none 0px;
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(39, 51, 65);
  color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 40, 51);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(39, 51, 65);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(39, 51, 65);
  color: rgb(238, 234, 209);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(44, 79, 100);
  border-bottom-color: rgb(185, 230, 120);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(185, 230, 120);
  border-right-color: rgb(185, 230, 120);
  border-top-color: rgb(185, 230, 120);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-weight: 600;
}

body a.internal.tag-link::before {
  color: rgb(185, 230, 120);
}

body h1 {
  color: rgb(255, 105, 93);
}

body h2 {
  color: rgb(255, 161, 97);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 105, 93);
}

body h3 {
  color: rgb(248, 194, 96);
}

body h4 {
  color: rgb(185, 230, 120);
}

body h5 {
  color: rgb(132, 220, 161);
}

body h6 {
  color: rgb(93, 203, 195);
}

body hr {
  border-bottom-color: rgb(44, 58, 74);
  border-left-color: rgb(44, 58, 74);
  border-right-color: rgb(44, 58, 74);
}`,
    scrollbars: `body .callout {
  --callout-color: 95, 203, 195;
  border-bottom-color: rgba(95, 203, 195, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(95, 203, 195, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(95, 203, 195, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(95, 203, 195, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(39, 51, 65);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}`,
    footer: `body footer {
  background-color: rgb(29, 40, 51);
  border-bottom-color: rgb(44, 58, 74);
  border-left-color: rgb(44, 58, 74);
  border-right-color: rgb(44, 58, 74);
  border-top-color: rgb(44, 58, 74);
  color: rgb(207, 209, 209);
}

body footer ul li a {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(238, 234, 209);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(207, 209, 209);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body li.section-li > .section .meta {
  color: rgb(207, 209, 209);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body ul.section-ul {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body .darkmode svg {
  color: rgb(207, 209, 209);
  stroke: rgb(207, 209, 209);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body .breadcrumb-element p {
  color: rgb(93, 203, 195);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body .metadata {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body .metadata-properties {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body .navigation-progress {
  background-color: rgb(29, 40, 51);
}

body .page-header h2.page-title {
  color: rgb(238, 234, 209);
}

body abbr {
  color: rgb(238, 234, 209);
  text-decoration: underline dotted rgb(238, 234, 209);
}

body details {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body input[type=text] {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body kbd {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(196, 209, 209);
  border-left-color: rgb(196, 209, 209);
  border-right-color: rgb(196, 209, 209);
  border-top-color: rgb(196, 209, 209);
  color: rgb(196, 209, 209);
}

body progress {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body sub {
  color: rgb(238, 234, 209);
}

body summary {
  color: rgb(238, 234, 209);
}

body sup {
  color: rgb(238, 234, 209);
}`,
  },
  light: {},
};
