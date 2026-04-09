import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "creme-brulee",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["merriweather-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 9 !important;
  --accent-l: 60% !important;
  --accent-s: 60% !important;
  --background-modifier-active-hover: hsla(9, 60%, 60%, 0.1) !important;
  --background-modifier-border: hsl(34, 24%, 30%) !important;
  --background-modifier-border-focus: hsl(34, 36%, 30%) !important;
  --background-modifier-error: #c25757 !important;
  --background-modifier-error-hover: #c25757 !important;
  --background-modifier-error-rgb: 194, 87, 87 !important;
  --background-modifier-form-field: hsl(27, 20%, 17%) !important;
  --background-modifier-form-field-hover: hsl(27, 20%, 17%) !important;
  --background-modifier-hover: hsl(27, 20%, 17%) !important;
  --background-modifier-success: #8aac6c !important;
  --background-modifier-success-rgb: 138, 172, 108 !important;
  --background-primary: hsl(31, 20%, 10%) !important;
  --background-primary-alt: hsl(27, 17%, 12%) !important;
  --background-secondary: hsl(27, 17%, 12%) !important;
  --background-secondary-alt: hsl(27, 20%, 17%) !important;
  --bases-cards-background: hsl(31, 20%, 10%) !important;
  --bases-cards-cover-background: hsl(27, 17%, 12%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(34, 24%, 30%) !important;
  --bases-embed-border-color: hsl(34, 24%, 30%) !important;
  --bases-group-heading-property-color: hsl(35, 27%, 55%) !important;
  --bases-group-heading-value-weight: 700 !important;
  --bases-table-border-color: hsl(34, 24%, 30%) !important;
  --bases-table-cell-background-active: hsl(31, 20%, 10%) !important;
  --bases-table-cell-background-disabled: hsl(27, 17%, 12%) !important;
  --bases-table-cell-background-selected: hsla(9, 60%, 60%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(34, 36%, 30%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(9, 60%, 60%) !important;
  --bases-table-group-background: hsl(27, 17%, 12%) !important;
  --bases-table-header-background: hsl(31, 20%, 10%) !important;
  --bases-table-header-background-hover: hsl(27, 20%, 17%) !important;
  --bases-table-header-color: hsl(35, 27%, 55%) !important;
  --bases-table-row-background-hover: hsl(27, 17%, 12%) !important;
  --bases-table-summary-background: hsl(31, 20%, 10%) !important;
  --bases-table-summary-background-hover: hsl(27, 20%, 17%) !important;
  --blockquote-accent-color-rgb: 135, 125, 181 !important;
  --blockquote-background-color: hsl(27, 17%, 12%) !important;
  --blockquote-border-color: rgba(135, 125, 181, 0.3) !important;
  --blockquote-border-radius: 7px !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-padding: 6px 8px 6px 16px !important;
  --blockquote-padding-bottom: 6px !important;
  --blockquote-padding-left: 16px !important;
  --blockquote-padding-right: 8px !important;
  --blockquote-padding-top: 6px !important;
  --bold-color: #cf864a !important;
  --bold-italic-color: #8aac6c !important;
  --button-background: hsl(30, 20%, 10%) !important;
  --button-background-hover: hsl(27, 17%, 12%) !important;
  --button-border: hsl(34, 24%, 30%) !important;
  --button-size: 0.8em !important;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-bug: 194, 87, 87;
  --callout-content-padding: 0px 12px;
  --callout-default: 102, 140, 179;
  --callout-error: 194, 87, 87;
  --callout-example: 138, 172, 108;
  --callout-fail: 194, 87, 87;
  --callout-important: 194, 87, 87;
  --callout-info: 91, 168, 190;
  --callout-margin: 0 0 1em 0;
  --callout-opacity: 0.01;
  --callout-padding: 0;
  --callout-question: 225, 177, 81;
  --callout-quote: 135, 125, 181;
  --callout-success: 138, 172, 108;
  --callout-summary: 91, 168, 190;
  --callout-tip: 91, 168, 190;
  --callout-title-opacity: 0.1;
  --callout-title-padding: 6px 12px;
  --callout-todo: 102, 140, 179;
  --callout-warning: 207, 134, 74;
  --canvas-background: hsl(31, 20%, 10%) !important;
  --canvas-card-label-color: hsl(34, 24%, 30%) !important;
  --canvas-color-1: 194, 87, 87 !important;
  --canvas-color-2: 207, 134, 74 !important;
  --canvas-color-3: 225, 177, 81 !important;
  --canvas-color-4: 138, 172, 108 !important;
  --canvas-color-5: 91, 168, 190 !important;
  --canvas-color-6: 135, 125, 181 !important;
  --canvas-dot-pattern: transparent !important;
  --caret-color: hsl(34, 50%, 70%) !important;
  --checkbox-border-color: hsl(34, 24%, 30%) !important;
  --checkbox-border-color-hover: hsl(35, 27%, 55%) !important;
  --checkbox-color: hsl(9, 60%, 60%) !important;
  --checkbox-color-hover: hsl(6, 61.2%, 69%) !important;
  --checkbox-marker-color: hsl(31, 20%, 10%) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: hsl(34, 50%, 70%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(27, 17%, 12%) !important;
  --code-border-color: hsl(34, 24%, 30%) !important;
  --code-bracket-background: hsl(27, 20%, 17%) !important;
  --code-comment: hsl(34, 24%, 30%) !important;
  --code-function: #e1b151 !important;
  --code-important: #cf864a !important;
  --code-keyword: #bb77af !important;
  --code-normal: hsl(34, 50%, 70%) !important;
  --code-operator: #c25757 !important;
  --code-property: #5ba8be !important;
  --code-punctuation: hsl(35, 27%, 55%) !important;
  --code-string: #8aac6c !important;
  --code-tag: #c25757 !important;
  --code-value: #877db5 !important;
  --collapse-icon-color: hsl(34, 24%, 30%) !important;
  --collapse-icon-color-collapsed: hsl(34, 24%, 30%) !important;
  --color-accent: hsl(9, 60%, 60%) !important;
  --color-accent-1: hsl(6, 61.2%, 69%) !important;
  --color-accent-2: hsl(4, 63%, 77.4%) !important;
  --color-accent-hsl: 9, 60%, 60% !important;
  --color-blue: #668cb3 !important;
  --color-blue-rgb: 102, 140, 179 !important;
  --color-creme-0: hsl(30, 20%, 10%) !important;
  --color-creme-1: hsl(31, 20%, 10%) !important;
  --color-creme-2: hsl(27, 17%, 12%) !important;
  --color-creme-3: hsl(27, 20%, 17%) !important;
  --color-creme-4: hsl(34, 24%, 30%) !important;
  --color-creme-5: hsl(34, 36%, 30%) !important;
  --color-creme-6: hsl(31, 30%, 50%) !important;
  --color-creme-7: hsl(35, 27%, 55%) !important;
  --color-creme-8: hsl(34, 50%, 70%) !important;
  --color-creme-fade: hsla(32, 8%, 67%, 0.5) !important;
  --color-creme-gray-1: hsl(35, 20%, 13%) !important;
  --color-creme-gray-2: hsl(35, 20%, 17%) !important;
  --color-cyan: #5ba8be !important;
  --color-cyan-rgb: 91, 168, 190 !important;
  --color-green: #8aac6c !important;
  --color-green-rgb: 138, 172, 108 !important;
  --color-orange: #cf864a !important;
  --color-orange-rgb: 207, 134, 74 !important;
  --color-pink: #bb77af !important;
  --color-pink-rgb: 187, 119, 175 !important;
  --color-purple: #877db5 !important;
  --color-purple-rgb: 135, 125, 181 !important;
  --color-red: #c25757 !important;
  --color-red-rgb: 194, 87, 87 !important;
  --color-shadow: hsla(33, 90%, 5%, 0.8) !important;
  --color-yellow: #e1b151 !important;
  --color-yellow-rgb: 225, 177, 81 !important;
  --dark: hsl(34, 50%, 70%) !important;
  --darkgray: hsl(34, 50%, 70%) !important;
  --divider-color: hsl(34, 24%, 30%) !important;
  --divider-color-hover: hsl(9, 60%, 60%) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsl(9, 60%, 60%) !important;
  --embed-padding: 0 0 0 14px !important;
  --file-bottom-margin: 32px !important;
  --file-bottom-margin-mobile: 0 !important;
  --file-header-background: hsl(31, 20%, 10%) !important;
  --file-header-background-focused: hsl(31, 20%, 10%) !important;
  --file-header-justify: left !important;
  --file-left-margin: 74px !important;
  --file-left-margin-mobile: 30px !important;
  --file-margins: 16px 64px 32px 74px !important;
  --file-right-margin: 64px !important;
  --file-right-margin-mobile: 30px !important;
  --file-top-margin: 16px !important;
  --file-top-margin-mobile: 0px !important;
  --flair-color: hsl(34, 50%, 70%) !important;
  --font-semibold: 700 !important;
  --footnote-divider-color: hsl(34, 24%, 30%) !important;
  --footnote-id-color: hsl(35, 27%, 55%) !important;
  --footnote-id-color-no-occurrences: hsl(34, 24%, 30%) !important;
  --footnote-input-background-active: hsl(27, 20%, 17%) !important;
  --graph-circle-color: hsl(31, 30%, 50%) !important;
  --graph-node: hsl(35, 27%, 55%) !important;
  --graph-node-attachment: #e1b151 !important;
  --graph-node-focused: hsl(6, 61.2%, 69%) !important;
  --graph-node-tag: #8aac6c !important;
  --graph-node-unresolved: hsl(34, 24%, 30%) !important;
  --graph-tag-color: rgba(135, 125, 181, 0.7) !important;
  --graph-text: hsl(34, 50%, 70%) !important;
  --gray: hsl(35, 27%, 55%) !important;
  --h1-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --h1-size: 1.3em !important;
  --h2-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --h2-size: 1.05em !important;
  --h2-weight: 700 !important;
  --h3-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --h3-size: 1em !important;
  --h3-weight: 700 !important;
  --h4-size: 1em !important;
  --h4-weight: 700 !important;
  --h5-size: 1em !important;
  --h5-style: italic !important;
  --h5-weight: 700 !important;
  --h6-style: italic !important;
  --h6-weight: 400 !important;
  --heading-formatting: hsl(34, 24%, 30%) !important;
  --heading-line: hsl(34, 24%, 30%) !important;
  --heading-line-spacing: 4px !important;
  --heading-spacing: 1rem !important;
  --highlight: rgba(207, 134, 74, 0.2) !important;
  --highlight-bold-background: rgba(138, 172, 108, 0.2) !important;
  --highlight-bold-italic-background: rgba(194, 87, 87, 0.2) !important;
  --highlight-italic-background: rgba(135, 125, 181, 0.2) !important;
  --hr-color: hsl(34, 24%, 30%) !important;
  --hr-thickness: 1px !important;
  --icon-color: hsl(35, 27%, 55%) !important;
  --icon-color-active: hsl(6, 61.2%, 69%) !important;
  --icon-color-focused: hsl(34, 50%, 70%) !important;
  --icon-color-hover: hsl(35, 27%, 55%) !important;
  --inline-title-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --inline-title-size: 1.3em !important;
  --input-date-separator: hsl(34, 24%, 30%) !important;
  --input-placeholder-color: hsl(34, 24%, 30%) !important;
  --interactive-accent: hsl(9, 60%, 60%) !important;
  --interactive-accent-hover: hsl(6, 61.2%, 69%) !important;
  --interactive-accent-hsl: 9, 60%, 60% !important;
  --italic-color: #5ba8be !important;
  --light: hsl(31, 20%, 10%) !important;
  --lightgray: hsl(27, 17%, 12%) !important;
  --link-color: hsl(6, 61.2%, 69%) !important;
  --link-color-hover: hsl(4, 63%, 77.4%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(6, 61.2%, 69%) !important;
  --link-external-color-hover: hsl(4, 63%, 77.4%) !important;
  --link-external-decoration: none !important;
  --link-formatting-color: hsla(9, 60%, 60%, 0.5) !important;
  --link-unresolved-color: hsl(6, 61.2%, 69%) !important;
  --link-unresolved-decoration-color: hsla(9, 60%, 60%, 0.3) !important;
  --list-indent: 1.5em !important;
  --list-marker-color: hsl(34, 24%, 30%) !important;
  --list-marker-color-collapsed: hsl(6, 61.2%, 69%) !important;
  --list-marker-color-hover: hsl(35, 27%, 55%) !important;
  --media-max-width: 750px !important;
  --menu-background: hsl(27, 17%, 12%) !important;
  --metadata-border-color: hsl(34, 24%, 30%) !important;
  --metadata-divider-color: hsl(34, 24%, 30%) !important;
  --metadata-gap: 0px !important;
  --metadata-input-background-active: hsl(27, 20%, 17%) !important;
  --metadata-input-text-color: hsl(34, 50%, 70%) !important;
  --metadata-label-background-active: hsl(27, 20%, 17%) !important;
  --metadata-label-text-color: hsl(35, 27%, 55%) !important;
  --metadata-label-text-color-hover: hsl(35, 27%, 55%) !important;
  --metadata-padding: 0 0 8px 0 !important;
  --metadata-property-background-active: hsl(27, 20%, 17%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(34, 36%, 30%) !important;
  --modal-background: hsl(31, 20%, 10%) !important;
  --modal-border-color: hsl(34, 24%, 30%) !important;
  --nav-collapse-icon-color: hsl(34, 24%, 30%) !important;
  --nav-collapse-icon-color-collapsed: hsl(34, 24%, 30%) !important;
  --nav-heading-color: hsl(34, 50%, 70%) !important;
  --nav-heading-color-collapsed: hsl(34, 24%, 30%) !important;
  --nav-heading-color-collapsed-hover: hsl(35, 27%, 55%) !important;
  --nav-heading-color-hover: hsl(34, 50%, 70%) !important;
  --nav-item-background-active: hsl(27, 20%, 17%) !important;
  --nav-item-background-hover: hsl(27, 20%, 17%) !important;
  --nav-item-background-selected: hsla(9, 60%, 60%, 0.15) !important;
  --nav-item-color: hsl(35, 27%, 55%) !important;
  --nav-item-color-active: hsl(34, 50%, 70%) !important;
  --nav-item-color-highlighted: hsl(6, 61.2%, 69%) !important;
  --nav-item-color-hover: hsl(34, 50%, 70%) !important;
  --nav-item-color-selected: hsl(34, 50%, 70%) !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: hsl(34, 24%, 30%) !important;
  --nav-tag-color-active: hsl(35, 27%, 55%) !important;
  --nav-tag-color-hover: hsl(35, 27%, 55%) !important;
  --nav-tag-weight: 700 !important;
  --pdf-background: hsl(31, 20%, 10%) !important;
  --pdf-page-background: hsl(31, 20%, 10%) !important;
  --pdf-shadow: 0 0 0 1px hsl(34, 24%, 30%) !important;
  --pdf-sidebar-background: hsl(31, 20%, 10%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(34, 24%, 30%) !important;
  --pill-border-color: hsl(34, 24%, 30%) !important;
  --pill-color: hsl(35, 27%, 55%) !important;
  --pill-color-hover: hsl(34, 50%, 70%) !important;
  --pill-color-remove: hsl(34, 24%, 30%) !important;
  --pill-color-remove-hover: hsl(6, 61.2%, 69%) !important;
  --prompt-background: hsl(31, 20%, 10%) !important;
  --ribbon-background: hsl(27, 17%, 12%) !important;
  --ribbon-background-collapsed: hsl(31, 20%, 10%) !important;
  --scrollbar-thumb-bg: hsl(27, 17%, 12%) !important;
  --scrollbar-width: 10px !important;
  --search-clear-button-color: hsl(35, 27%, 55%) !important;
  --search-icon-color: hsl(35, 27%, 55%) !important;
  --search-result-background: hsl(31, 20%, 10%) !important;
  --secondary: hsl(6, 61.2%, 69%) !important;
  --setting-group-heading-color: hsl(34, 50%, 70%) !important;
  --setting-group-heading-weight: 700 !important;
  --setting-items-background: hsl(27, 17%, 12%) !important;
  --setting-items-border-color: hsl(34, 24%, 30%) !important;
  --sidebar-markdown-font-size: 14px !important;
  --slider-track-background: hsl(34, 24%, 30%) !important;
  --status-bar-background: hsl(27, 17%, 12%) !important;
  --status-bar-border-color: hsl(34, 24%, 30%) !important;
  --status-bar-text-color: hsl(35, 27%, 55%) !important;
  --suggestion-background: hsl(31, 20%, 10%) !important;
  --sync-avatar-color-1: #c25757 !important;
  --sync-avatar-color-2: #cf864a !important;
  --sync-avatar-color-3: #e1b151 !important;
  --sync-avatar-color-4: #8aac6c !important;
  --sync-avatar-color-5: #5ba8be !important;
  --sync-avatar-color-6: #668cb3 !important;
  --sync-avatar-color-7: #877db5 !important;
  --sync-avatar-color-8: #bb77af !important;
  --tab-background-active: hsl(31, 20%, 10%) !important;
  --tab-container-background: hsl(27, 17%, 12%) !important;
  --tab-outline-color: hsl(34, 24%, 30%) !important;
  --tab-switcher-background: hsl(27, 17%, 12%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(27, 17%, 12%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(9, 60%, 60%) !important;
  --tab-text-color: hsl(34, 24%, 30%) !important;
  --tab-text-color-active: hsl(35, 27%, 55%) !important;
  --tab-text-color-focused: hsl(35, 27%, 55%) !important;
  --tab-text-color-focused-active: hsl(35, 27%, 55%) !important;
  --tab-text-color-focused-active-current: hsl(34, 50%, 70%) !important;
  --tab-text-color-focused-highlighted: hsl(6, 61.2%, 69%) !important;
  --table-add-button-border-color: hsl(34, 24%, 30%) !important;
  --table-border-color: hsl(34, 24%, 30%) !important;
  --table-column-min-width: 2.5em !important;
  --table-drag-handle-background-active: hsl(9, 60%, 60%) !important;
  --table-drag-handle-color: hsl(34, 24%, 30%) !important;
  --table-header-border-color: hsl(34, 24%, 30%) !important;
  --table-header-color: hsl(34, 50%, 70%) !important;
  --table-header-size: 0.9em !important;
  --table-row-background-hover: hsl(27, 17%, 12%) !important;
  --table-selection: hsla(9, 60%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(9, 60%, 60%) !important;
  --table-text-size: 0.9em !important;
  --tag-background: hsla(9, 60%, 60%, 0.1) !important;
  --tag-background-hover: hsla(9, 60%, 60%, 0.2) !important;
  --tag-border-color: hsla(9, 60%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(9, 60%, 60%, 0.15) !important;
  --tag-color: hsl(6, 61.2%, 69%) !important;
  --tag-color-hover: hsl(6, 61.2%, 69%) !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.15em !important;
  --tertiary: hsl(4, 63%, 77.4%) !important;
  --text-accent: hsl(6, 61.2%, 69%) !important;
  --text-accent-hover: hsl(4, 63%, 77.4%) !important;
  --text-error: #c25757 !important;
  --text-faint: hsl(34, 24%, 30%) !important;
  --text-highlight-bg: rgba(207, 134, 74, 0.2) !important;
  --text-muted: hsl(35, 27%, 55%) !important;
  --text-normal: hsl(34, 50%, 70%) !important;
  --text-selection: hsl(27, 20%, 17%) !important;
  --text-success: #8aac6c !important;
  --text-warning: #cf864a !important;
  --textHighlight: rgba(207, 134, 74, 0.2) !important;
  --titlebar-background: hsl(27, 17%, 12%) !important;
  --titlebar-background-focused: hsl(27, 17%, 12%) !important;
  --titlebar-border-color: hsl(34, 24%, 30%) !important;
  --titlebar-text-color: hsl(35, 27%, 55%) !important;
  --titlebar-text-color-focused: hsl(34, 50%, 70%) !important;
  --vault-profile-color: hsl(35, 27%, 55%) !important;
  --vault-profile-color-hover: hsl(35, 27%, 55%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 30, 25);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 26, 20);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(36, 30, 25);
  border-color: rgb(95, 79, 58);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(95, 79, 58);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(214, 110, 92, 0.1);
  border-radius: 22.4px;
  color: rgb(224, 137, 128);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 30, 25);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 30, 25);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(31, 26, 20);
  color: rgb(217, 184, 140);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration-color: rgb(207, 134, 74);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration-color: rgb(91, 168, 190);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration-color: rgb(91, 168, 190);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration-color: rgb(207, 134, 74);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(207, 134, 74, 0.2);
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body del {
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(95, 79, 58);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(214, 110, 92);
  border-color: rgb(214, 110, 92);
}

html[saved-theme="dark"] body p {
  color: rgb(171, 145, 109);
  outline: rgb(171, 145, 109) none 0px;
  text-decoration-color: rgb(171, 145, 109);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration-color: rgb(224, 137, 128);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration-color: rgb(224, 137, 128);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration: rgba(214, 110, 92, 0.3);
  text-decoration-color: rgba(214, 110, 92, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body dt {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(95, 79, 58);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(36, 30, 25);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body table {
  color: rgb(217, 184, 140);
  width: 206.078px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(225, 177, 81);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(225, 177, 81);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(225, 177, 81);
  border-left-color: rgb(225, 177, 81);
  border-right-color: rgb(225, 177, 81);
  border-top-color: rgb(225, 177, 81);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(214, 110, 92);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(95, 79, 58);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -20.6px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(102, 140, 179);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 138, 172, 108;
  background-color: rgba(138, 172, 108, 0.01);
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 102, 140, 179;
  background-color: rgba(102, 140, 179, 0.01);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 225, 177, 81;
  background-color: rgba(225, 177, 81, 0.01);
  border-bottom-color: rgba(225, 177, 81, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(225, 177, 81, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(225, 177, 81, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(225, 177, 81, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 135, 125, 181;
  background-color: rgba(135, 125, 181, 0.01);
  border-bottom-color: rgba(135, 125, 181, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(135, 125, 181, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(135, 125, 181, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(135, 125, 181, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 138, 172, 108;
  background-color: rgba(138, 172, 108, 0.01);
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 102, 140, 179;
  background-color: rgba(102, 140, 179, 0.01);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 207, 134, 74;
  background-color: rgba(207, 134, 74, 0.01);
  border-bottom-color: rgba(207, 134, 74, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(207, 134, 74, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(207, 134, 74, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(207, 134, 74, 0.5);
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
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 26, 20);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(52, 42, 35);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 30, 25);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(52, 42, 35);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(214, 110, 92, 0.1);
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(224, 137, 128);
}

html[saved-theme="dark"] body h1 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body h5 {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body h6 {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 102, 140, 179;
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(171, 145, 109);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(217, 184, 140);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(171, 145, 109);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 145, 109);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(171, 145, 109);
  stroke: rgb(171, 145, 109);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(95, 79, 58);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(171, 145, 109);
  margin-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(36, 30, 25);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body abbr {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body sub {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body summary {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body sup {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(214, 110, 92, 0.1);
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  color: rgb(224, 137, 128);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 9 !important;
  --accent-l: 60% !important;
  --accent-s: 60% !important;
  --background-modifier-active-hover: hsla(9, 60%, 60%, 0.1) !important;
  --background-modifier-border: hsl(34, 37%, 70%) !important;
  --background-modifier-border-focus: hsl(34, 25%, 70%) !important;
  --background-modifier-error: #c25757 !important;
  --background-modifier-error-hover: #c25757 !important;
  --background-modifier-error-rgb: 194, 87, 87 !important;
  --background-modifier-form-field: hsl(35, 35%, 90%) !important;
  --background-modifier-form-field-hover: hsl(35, 35%, 90%) !important;
  --background-modifier-hover: hsl(35, 35%, 90%) !important;
  --background-modifier-success: #8aac6c !important;
  --background-modifier-success-rgb: 138, 172, 108 !important;
  --background-primary: hsl(34, 33%, 98%) !important;
  --background-primary-alt: hsl(35, 36%, 95%) !important;
  --background-secondary: hsl(35, 36%, 95%) !important;
  --background-secondary-alt: hsl(35, 35%, 90%) !important;
  --bases-cards-background: hsl(34, 33%, 98%) !important;
  --bases-cards-cover-background: hsl(35, 36%, 95%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(34, 37%, 70%) !important;
  --bases-embed-border-color: hsl(34, 37%, 70%) !important;
  --bases-group-heading-property-color: hsl(31, 35%, 40%) !important;
  --bases-group-heading-value-weight: 700 !important;
  --bases-table-border-color: hsl(34, 37%, 70%) !important;
  --bases-table-cell-background-active: hsl(34, 33%, 98%) !important;
  --bases-table-cell-background-disabled: hsl(35, 36%, 95%) !important;
  --bases-table-cell-background-selected: hsla(9, 60%, 60%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(34, 25%, 70%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(8, 60.6%, 64.5%) !important;
  --bases-table-group-background: hsl(35, 36%, 95%) !important;
  --bases-table-header-background: hsl(34, 33%, 98%) !important;
  --bases-table-header-background-hover: hsl(35, 35%, 90%) !important;
  --bases-table-header-color: hsl(31, 35%, 40%) !important;
  --bases-table-row-background-hover: hsl(35, 36%, 95%) !important;
  --bases-table-summary-background: hsl(34, 33%, 98%) !important;
  --bases-table-summary-background-hover: hsl(35, 35%, 90%) !important;
  --blockquote-accent-color-rgb: 135, 125, 181 !important;
  --blockquote-background-color: hsl(35, 36%, 95%) !important;
  --blockquote-border-color: rgba(135, 125, 181, 0.3) !important;
  --blockquote-border-radius: 7px !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-padding: 6px 8px 6px 16px !important;
  --blockquote-padding-bottom: 6px !important;
  --blockquote-padding-left: 16px !important;
  --blockquote-padding-right: 8px !important;
  --blockquote-padding-top: 6px !important;
  --blur-background: color-mix(in srgb, hsl(34, 33%, 98%) 65%, transparent) linear-gradient(hsl(34, 33%, 98%), color-mix(in srgb, hsl(34, 33%, 98%) 65%, transparent)) !important;
  --bold-color: #cf864a !important;
  --bold-italic-color: #8aac6c !important;
  --button-background: white !important;
  --button-background-hover: hsl(35, 36%, 95%) !important;
  --button-border: hsl(34, 37%, 70%) !important;
  --button-size: 0.8em !important;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-bug: 194, 87, 87;
  --callout-content-padding: 0px 12px;
  --callout-default: 102, 140, 179;
  --callout-error: 194, 87, 87;
  --callout-example: 138, 172, 108;
  --callout-fail: 194, 87, 87;
  --callout-important: 194, 87, 87;
  --callout-info: 91, 168, 190;
  --callout-margin: 0 0 1em 0;
  --callout-opacity: 0.01;
  --callout-padding: 0;
  --callout-question: 225, 177, 81;
  --callout-quote: 135, 125, 181;
  --callout-success: 138, 172, 108;
  --callout-summary: 91, 168, 190;
  --callout-tip: 91, 168, 190;
  --callout-title-opacity: 0.1;
  --callout-title-padding: 6px 12px;
  --callout-todo: 102, 140, 179;
  --callout-warning: 207, 134, 74;
  --canvas-background: hsl(34, 33%, 98%) !important;
  --canvas-card-label-color: hsl(34, 37%, 70%) !important;
  --canvas-color-1: 194, 87, 87 !important;
  --canvas-color-2: 207, 134, 74 !important;
  --canvas-color-3: 225, 177, 81 !important;
  --canvas-color-4: 138, 172, 108 !important;
  --canvas-color-5: 91, 168, 190 !important;
  --canvas-color-6: 135, 125, 181 !important;
  --canvas-dot-pattern: transparent !important;
  --caret-color: hsl(31, 45%, 20%) !important;
  --checkbox-border-color: hsl(34, 37%, 70%) !important;
  --checkbox-border-color-hover: hsl(31, 35%, 40%) !important;
  --checkbox-color: hsl(8, 60.6%, 64.5%) !important;
  --checkbox-color-hover: hsl(6, 61.2%, 69%) !important;
  --checkbox-marker-color: hsl(34, 33%, 98%) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: hsl(31, 45%, 20%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(35, 36%, 95%) !important;
  --code-border-color: hsl(34, 37%, 70%) !important;
  --code-bracket-background: hsl(35, 35%, 90%) !important;
  --code-comment: hsl(34, 37%, 70%) !important;
  --code-function: #e1b151 !important;
  --code-important: #cf864a !important;
  --code-keyword: #bb77af !important;
  --code-normal: hsl(31, 45%, 20%) !important;
  --code-operator: #c25757 !important;
  --code-property: #5ba8be !important;
  --code-punctuation: hsl(31, 35%, 40%) !important;
  --code-string: #8aac6c !important;
  --code-tag: #c25757 !important;
  --code-value: #877db5 !important;
  --collapse-icon-color: hsl(34, 37%, 70%) !important;
  --collapse-icon-color-collapsed: hsl(34, 37%, 70%) !important;
  --color-accent: hsl(9, 60%, 60%) !important;
  --color-accent-1: hsl(8, 60.6%, 64.5%) !important;
  --color-accent-2: hsl(6, 61.2%, 69%) !important;
  --color-accent-hsl: 9, 60%, 60% !important;
  --color-blue: #668cb3 !important;
  --color-blue-rgb: 102, 140, 179 !important;
  --color-creme-0: white !important;
  --color-creme-1: hsl(34, 33%, 98%) !important;
  --color-creme-2: hsl(35, 36%, 95%) !important;
  --color-creme-3: hsl(35, 35%, 90%) !important;
  --color-creme-4: hsl(34, 37%, 70%) !important;
  --color-creme-5: hsl(34, 25%, 70%) !important;
  --color-creme-6: hsl(31, 30%, 50%) !important;
  --color-creme-7: hsl(31, 35%, 40%) !important;
  --color-creme-8: hsl(31, 45%, 20%) !important;
  --color-creme-fade: hsla(32, 8%, 67%, 0.5) !important;
  --color-creme-gray-1: hsl(35, 20%, 94%) !important;
  --color-creme-gray-2: hsl(35, 20%, 90%) !important;
  --color-cyan: #5ba8be !important;
  --color-cyan-rgb: 91, 168, 190 !important;
  --color-green: #8aac6c !important;
  --color-green-rgb: 138, 172, 108 !important;
  --color-orange: #cf864a !important;
  --color-orange-rgb: 207, 134, 74 !important;
  --color-pink: #bb77af !important;
  --color-pink-rgb: 187, 119, 175 !important;
  --color-purple: #877db5 !important;
  --color-purple-rgb: 135, 125, 181 !important;
  --color-red: #c25757 !important;
  --color-red-rgb: 194, 87, 87 !important;
  --color-shadow: hsla(0, 0%, 0%, 0.4) !important;
  --color-yellow: #e1b151 !important;
  --color-yellow-rgb: 225, 177, 81 !important;
  --dark: hsl(31, 45%, 20%) !important;
  --darkgray: hsl(31, 45%, 20%) !important;
  --divider-color: hsl(34, 37%, 70%) !important;
  --divider-color-hover: hsl(8, 60.6%, 64.5%) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsl(8, 60.6%, 64.5%) !important;
  --embed-padding: 0 0 0 14px !important;
  --file-bottom-margin: 32px !important;
  --file-bottom-margin-mobile: 0 !important;
  --file-header-background: hsl(34, 33%, 98%) !important;
  --file-header-background-focused: hsl(34, 33%, 98%) !important;
  --file-header-justify: left !important;
  --file-left-margin: 74px !important;
  --file-left-margin-mobile: 30px !important;
  --file-margins: 16px 64px 32px 74px !important;
  --file-right-margin: 64px !important;
  --file-right-margin-mobile: 30px !important;
  --file-top-margin: 16px !important;
  --file-top-margin-mobile: 0px !important;
  --flair-color: hsl(31, 45%, 20%) !important;
  --font-semibold: 700 !important;
  --footnote-divider-color: hsl(34, 37%, 70%) !important;
  --footnote-id-color: hsl(31, 35%, 40%) !important;
  --footnote-id-color-no-occurrences: hsl(34, 37%, 70%) !important;
  --footnote-input-background-active: hsl(35, 35%, 90%) !important;
  --graph-circle-color: hsl(31, 30%, 50%) !important;
  --graph-node: hsl(31, 35%, 40%) !important;
  --graph-node-attachment: #e1b151 !important;
  --graph-node-focused: hsl(9, 60%, 60%) !important;
  --graph-node-tag: #8aac6c !important;
  --graph-node-unresolved: hsl(34, 37%, 70%) !important;
  --graph-tag-color: rgba(135, 125, 181, 0.7) !important;
  --graph-text: hsl(31, 45%, 20%) !important;
  --gray: hsl(31, 35%, 40%) !important;
  --h1-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --h1-size: 1.3em !important;
  --h2-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --h2-size: 1.05em !important;
  --h2-weight: 700 !important;
  --h3-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --h3-size: 1em !important;
  --h3-weight: 700 !important;
  --h4-size: 1em !important;
  --h4-weight: 700 !important;
  --h5-size: 1em !important;
  --h5-style: italic !important;
  --h5-weight: 700 !important;
  --h6-style: italic !important;
  --h6-weight: 400 !important;
  --heading-formatting: hsl(34, 37%, 70%) !important;
  --heading-line: hsl(34, 37%, 70%) !important;
  --heading-line-spacing: 4px !important;
  --heading-spacing: 1rem !important;
  --highlight: rgba(207, 134, 74, 0.2) !important;
  --highlight-bold-background: rgba(138, 172, 108, 0.2) !important;
  --highlight-bold-italic-background: rgba(194, 87, 87, 0.2) !important;
  --highlight-italic-background: rgba(135, 125, 181, 0.2) !important;
  --hr-color: hsl(34, 37%, 70%) !important;
  --hr-thickness: 1px !important;
  --icon-color: hsl(31, 35%, 40%) !important;
  --icon-color-active: hsl(9, 60%, 60%) !important;
  --icon-color-focused: hsl(31, 45%, 20%) !important;
  --icon-color-hover: hsl(31, 35%, 40%) !important;
  --inline-title-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --inline-title-size: 1.3em !important;
  --input-date-separator: hsl(34, 37%, 70%) !important;
  --input-placeholder-color: hsl(34, 37%, 70%) !important;
  --interactive-accent: hsl(8, 60.6%, 64.5%) !important;
  --interactive-accent-hover: hsl(6, 61.2%, 69%) !important;
  --interactive-accent-hsl: 9, 60%, 60% !important;
  --italic-color: #5ba8be !important;
  --light: hsl(34, 33%, 98%) !important;
  --lightgray: hsl(35, 36%, 95%) !important;
  --link-color: hsl(9, 60%, 60%) !important;
  --link-color-hover: hsl(6, 61.2%, 69%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(9, 60%, 60%) !important;
  --link-external-color-hover: hsl(6, 61.2%, 69%) !important;
  --link-external-decoration: none !important;
  --link-formatting-color: hsla(9, 60%, 60%, 0.5) !important;
  --link-unresolved-color: hsl(9, 60%, 60%) !important;
  --link-unresolved-decoration-color: hsla(9, 60%, 60%, 0.3) !important;
  --list-indent: 1.5em !important;
  --list-marker-color: hsl(34, 37%, 70%) !important;
  --list-marker-color-collapsed: hsl(9, 60%, 60%) !important;
  --list-marker-color-hover: hsl(31, 35%, 40%) !important;
  --media-max-width: 750px !important;
  --menu-background: hsl(35, 36%, 95%) !important;
  --metadata-border-color: hsl(34, 37%, 70%) !important;
  --metadata-divider-color: hsl(34, 37%, 70%) !important;
  --metadata-gap: 0px !important;
  --metadata-input-background-active: hsl(35, 35%, 90%) !important;
  --metadata-input-text-color: hsl(31, 45%, 20%) !important;
  --metadata-label-background-active: hsl(35, 35%, 90%) !important;
  --metadata-label-text-color: hsl(31, 35%, 40%) !important;
  --metadata-label-text-color-hover: hsl(31, 35%, 40%) !important;
  --metadata-padding: 0 0 8px 0 !important;
  --metadata-property-background-active: hsl(35, 35%, 90%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(34, 25%, 70%) !important;
  --modal-background: hsl(34, 33%, 98%) !important;
  --modal-border-color: hsl(34, 37%, 70%) !important;
  --nav-collapse-icon-color: hsl(34, 37%, 70%) !important;
  --nav-collapse-icon-color-collapsed: hsl(34, 37%, 70%) !important;
  --nav-heading-color: hsl(31, 45%, 20%) !important;
  --nav-heading-color-collapsed: hsl(34, 37%, 70%) !important;
  --nav-heading-color-collapsed-hover: hsl(31, 35%, 40%) !important;
  --nav-heading-color-hover: hsl(31, 45%, 20%) !important;
  --nav-item-background-active: hsl(35, 35%, 90%) !important;
  --nav-item-background-hover: hsl(35, 35%, 90%) !important;
  --nav-item-background-selected: hsla(9, 60%, 60%, 0.15) !important;
  --nav-item-color: hsl(31, 35%, 40%) !important;
  --nav-item-color-active: hsl(31, 45%, 20%) !important;
  --nav-item-color-highlighted: hsl(9, 60%, 60%) !important;
  --nav-item-color-hover: hsl(31, 45%, 20%) !important;
  --nav-item-color-selected: hsl(31, 45%, 20%) !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: hsl(34, 37%, 70%) !important;
  --nav-tag-color-active: hsl(31, 35%, 40%) !important;
  --nav-tag-color-hover: hsl(31, 35%, 40%) !important;
  --nav-tag-weight: 700 !important;
  --pdf-background: hsl(34, 33%, 98%) !important;
  --pdf-page-background: hsl(34, 33%, 98%) !important;
  --pdf-sidebar-background: hsl(34, 33%, 98%) !important;
  --pill-border-color: hsl(34, 37%, 70%) !important;
  --pill-color: hsl(31, 35%, 40%) !important;
  --pill-color-hover: hsl(31, 45%, 20%) !important;
  --pill-color-remove: hsl(34, 37%, 70%) !important;
  --pill-color-remove-hover: hsl(9, 60%, 60%) !important;
  --prompt-background: hsl(34, 33%, 98%) !important;
  --raised-background: color-mix(in srgb, hsl(34, 33%, 98%) 65%, transparent) linear-gradient(hsl(34, 33%, 98%), color-mix(in srgb, hsl(34, 33%, 98%) 65%, transparent)) !important;
  --ribbon-background: hsl(35, 36%, 95%) !important;
  --ribbon-background-collapsed: hsl(34, 33%, 98%) !important;
  --scrollbar-thumb-bg: hsl(35, 36%, 95%) !important;
  --scrollbar-width: 10px !important;
  --search-clear-button-color: hsl(31, 35%, 40%) !important;
  --search-icon-color: hsl(31, 35%, 40%) !important;
  --search-result-background: hsl(34, 33%, 98%) !important;
  --secondary: hsl(9, 60%, 60%) !important;
  --setting-group-heading-color: hsl(31, 45%, 20%) !important;
  --setting-group-heading-weight: 700 !important;
  --setting-items-background: hsl(35, 36%, 95%) !important;
  --setting-items-border-color: hsl(34, 37%, 70%) !important;
  --sidebar-markdown-font-size: 14px !important;
  --slider-track-background: hsl(34, 37%, 70%) !important;
  --status-bar-background: hsl(35, 36%, 95%) !important;
  --status-bar-border-color: hsl(34, 37%, 70%) !important;
  --status-bar-text-color: hsl(31, 35%, 40%) !important;
  --suggestion-background: hsl(34, 33%, 98%) !important;
  --sync-avatar-color-1: #c25757 !important;
  --sync-avatar-color-2: #cf864a !important;
  --sync-avatar-color-3: #e1b151 !important;
  --sync-avatar-color-4: #8aac6c !important;
  --sync-avatar-color-5: #5ba8be !important;
  --sync-avatar-color-6: #668cb3 !important;
  --sync-avatar-color-7: #877db5 !important;
  --sync-avatar-color-8: #bb77af !important;
  --tab-background-active: hsl(34, 33%, 98%) !important;
  --tab-container-background: hsl(35, 36%, 95%) !important;
  --tab-outline-color: hsl(34, 37%, 70%) !important;
  --tab-switcher-background: hsl(35, 36%, 95%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(35, 36%, 95%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(9, 60%, 60%) !important;
  --tab-text-color: hsl(34, 37%, 70%) !important;
  --tab-text-color-active: hsl(31, 35%, 40%) !important;
  --tab-text-color-focused: hsl(31, 35%, 40%) !important;
  --tab-text-color-focused-active: hsl(31, 35%, 40%) !important;
  --tab-text-color-focused-active-current: hsl(31, 45%, 20%) !important;
  --tab-text-color-focused-highlighted: hsl(9, 60%, 60%) !important;
  --table-add-button-border-color: hsl(34, 37%, 70%) !important;
  --table-border-color: hsl(34, 37%, 70%) !important;
  --table-column-min-width: 2.5em !important;
  --table-drag-handle-background-active: hsl(8, 60.6%, 64.5%) !important;
  --table-drag-handle-color: hsl(34, 37%, 70%) !important;
  --table-header-border-color: hsl(34, 37%, 70%) !important;
  --table-header-color: hsl(31, 45%, 20%) !important;
  --table-header-size: 0.9em !important;
  --table-row-background-hover: hsl(35, 36%, 95%) !important;
  --table-selection: hsla(9, 60%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(8, 60.6%, 64.5%) !important;
  --table-text-size: 0.9em !important;
  --tag-background: hsla(9, 60%, 60%, 0.1) !important;
  --tag-background-hover: hsla(9, 60%, 60%, 0.2) !important;
  --tag-border-color: hsla(9, 60%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(9, 60%, 60%, 0.15) !important;
  --tag-color: hsl(9, 60%, 60%) !important;
  --tag-color-hover: hsl(9, 60%, 60%) !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.15em !important;
  --tertiary: hsl(6, 61.2%, 69%) !important;
  --text-accent: hsl(9, 60%, 60%) !important;
  --text-accent-hover: hsl(6, 61.2%, 69%) !important;
  --text-error: #c25757 !important;
  --text-faint: hsl(34, 37%, 70%) !important;
  --text-highlight-bg: rgba(207, 134, 74, 0.2) !important;
  --text-muted: hsl(31, 35%, 40%) !important;
  --text-normal: hsl(31, 45%, 20%) !important;
  --text-selection: hsl(35, 35%, 90%) !important;
  --text-success: #8aac6c !important;
  --text-warning: #cf864a !important;
  --textHighlight: rgba(207, 134, 74, 0.2) !important;
  --titlebar-background: hsl(35, 36%, 95%) !important;
  --titlebar-background-focused: hsl(35, 36%, 95%) !important;
  --titlebar-border-color: hsl(34, 37%, 70%) !important;
  --titlebar-text-color: hsl(31, 35%, 40%) !important;
  --titlebar-text-color-focused: hsl(31, 45%, 20%) !important;
  --vault-profile-color: hsl(31, 35%, 40%) !important;
  --vault-profile-color-hover: hsl(31, 35%, 40%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(252, 250, 248);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(207, 182, 150);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(207, 182, 150);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(214, 110, 92, 0.1);
  border-radius: 22.4px;
  color: rgb(214, 110, 92);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 243, 238);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(252, 250, 248);
  color: rgb(74, 52, 28);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration-color: rgb(207, 134, 74);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration-color: rgb(91, 168, 190);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration-color: rgb(91, 168, 190);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration-color: rgb(207, 134, 74);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(207, 134, 74, 0.2);
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body del {
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(207, 182, 150);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(219, 124, 110);
  border-color: rgb(219, 124, 110);
}

html[saved-theme="light"] body p {
  color: rgb(138, 103, 66);
  outline: rgb(138, 103, 66) none 0px;
  text-decoration-color: rgb(138, 103, 66);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration-color: rgb(214, 110, 92);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration-color: rgb(214, 110, 92);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration: rgba(214, 110, 92, 0.3);
  text-decoration-color: rgba(214, 110, 92, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body dt {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ol > li {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul > li {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(207, 182, 150);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(247, 243, 238);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body table {
  color: rgb(74, 52, 28);
  width: 206.078px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(225, 177, 81);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(225, 177, 81);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(225, 177, 81);
  border-left-color: rgb(225, 177, 81);
  border-right-color: rgb(225, 177, 81);
  border-top-color: rgb(225, 177, 81);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body figcaption {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(219, 124, 110);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(207, 182, 150);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -20.6px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(102, 140, 179);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 138, 172, 108;
  background-color: rgba(138, 172, 108, 0.01);
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 194, 87, 87;
  background-color: rgba(194, 87, 87, 0.01);
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 102, 140, 179;
  background-color: rgba(102, 140, 179, 0.01);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 225, 177, 81;
  background-color: rgba(225, 177, 81, 0.01);
  border-bottom-color: rgba(225, 177, 81, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(225, 177, 81, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(225, 177, 81, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(225, 177, 81, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 135, 125, 181;
  background-color: rgba(135, 125, 181, 0.01);
  border-bottom-color: rgba(135, 125, 181, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(135, 125, 181, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(135, 125, 181, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(135, 125, 181, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 138, 172, 108;
  background-color: rgba(138, 172, 108, 0.01);
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 91, 168, 190;
  background-color: rgba(91, 168, 190, 0.01);
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 102, 140, 179;
  background-color: rgba(102, 140, 179, 0.01);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 207, 134, 74;
  background-color: rgba(207, 134, 74, 0.01);
  border-bottom-color: rgba(207, 134, 74, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(207, 134, 74, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(207, 134, 74, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(207, 134, 74, 0.5);
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
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 243, 238);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(214, 110, 92, 0.1);
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(214, 110, 92);
}

html[saved-theme="light"] body h1 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body h5 {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body h6 {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 102, 140, 179;
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(138, 103, 66);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(74, 52, 28);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(138, 103, 66);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(138, 103, 66);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(138, 103, 66);
  stroke: rgb(138, 103, 66);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(207, 182, 150);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(138, 103, 66);
  margin-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(247, 243, 238);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body abbr {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body sub {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body summary {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body sup {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(214, 110, 92, 0.1);
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  color: rgb(214, 110, 92);
}`,
  },
};
