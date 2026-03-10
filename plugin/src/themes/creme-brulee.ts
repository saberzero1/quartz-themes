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
  --background-modifier-active-hover: rgba(214, 110, 92, 0.1) !important;
  --background-modifier-border: rgb(95, 79, 58) !important;
  --background-modifier-border-focus: rgb(104, 80, 49) !important;
  --background-modifier-error: #c25757 !important;
  --background-modifier-error-hover: #c25757 !important;
  --background-modifier-error-rgb: 194, 87, 87 !important;
  --background-modifier-form-field: rgb(52, 42, 35) !important;
  --background-modifier-form-field-hover: rgb(52, 42, 35) !important;
  --background-modifier-hover: rgb(52, 42, 35) !important;
  --background-modifier-success: #8aac6c !important;
  --background-modifier-success-rgb: 138, 172, 108 !important;
  --background-primary: rgb(31, 26, 20) !important;
  --background-primary-alt: rgb(36, 30, 25) !important;
  --background-secondary: rgb(36, 30, 25) !important;
  --background-secondary-alt: rgb(52, 42, 35) !important;
  --bases-cards-background: rgb(31, 26, 20) !important;
  --bases-cards-cover-background: rgb(36, 30, 25) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(95, 79, 58) !important;
  --bases-embed-border-color: rgb(95, 79, 58) !important;
  --bases-group-heading-property-color: rgb(171, 145, 109) !important;
  --bases-group-heading-value-weight: 700 !important;
  --bases-table-border-color: rgb(95, 79, 58) !important;
  --bases-table-cell-background-active: rgb(31, 26, 20) !important;
  --bases-table-cell-background-disabled: rgb(36, 30, 25) !important;
  --bases-table-cell-background-selected: rgba(214, 110, 92, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(104, 80, 49) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(214, 110, 92) !important;
  --bases-table-group-background: rgb(36, 30, 25) !important;
  --bases-table-header-background: rgb(31, 26, 20) !important;
  --bases-table-header-background-hover: rgb(52, 42, 35) !important;
  --bases-table-header-color: rgb(171, 145, 109) !important;
  --bases-table-row-background-hover: rgb(36, 30, 25) !important;
  --bases-table-summary-background: rgb(31, 26, 20) !important;
  --bases-table-summary-background-hover: rgb(52, 42, 35) !important;
  --blockquote-accent-color-rgb: 135, 125, 181 !important;
  --blockquote-background-color: rgb(36, 30, 25) !important;
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
  --button-background: rgb(31, 26, 20) !important;
  --button-background-hover: rgb(36, 30, 25) !important;
  --button-border: rgb(95, 79, 58) !important;
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
  --canvas-background: rgb(31, 26, 20) !important;
  --canvas-card-label-color: rgb(95, 79, 58) !important;
  --canvas-color-1: 194, 87, 87 !important;
  --canvas-color-2: 207, 134, 74 !important;
  --canvas-color-3: 225, 177, 81 !important;
  --canvas-color-4: 138, 172, 108 !important;
  --canvas-color-5: 91, 168, 190 !important;
  --canvas-color-6: 135, 125, 181 !important;
  --canvas-dot-pattern: transparent !important;
  --caret-color: rgb(217, 184, 140) !important;
  --checkbox-border-color: rgb(95, 79, 58) !important;
  --checkbox-border-color-hover: rgb(171, 145, 109) !important;
  --checkbox-color: rgb(214, 110, 92) !important;
  --checkbox-color-hover: rgb(224, 137, 128) !important;
  --checkbox-marker-color: rgb(31, 26, 20) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: rgb(217, 184, 140) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(36, 30, 25) !important;
  --code-border-color: rgb(95, 79, 58) !important;
  --code-bracket-background: rgb(52, 42, 35) !important;
  --code-comment: rgb(95, 79, 58) !important;
  --code-function: #e1b151 !important;
  --code-important: #cf864a !important;
  --code-keyword: #bb77af !important;
  --code-normal: rgb(217, 184, 140) !important;
  --code-operator: #c25757 !important;
  --code-property: #5ba8be !important;
  --code-punctuation: rgb(171, 145, 109) !important;
  --code-string: #8aac6c !important;
  --code-tag: #c25757 !important;
  --code-value: #877db5 !important;
  --collapse-icon-color: rgb(95, 79, 58) !important;
  --collapse-icon-color-collapsed: rgb(95, 79, 58) !important;
  --color-accent: rgb(214, 110, 92) !important;
  --color-accent-1: rgb(224, 137, 128) !important;
  --color-accent-2: rgb(233, 164, 159) !important;
  --color-accent-hsl: 9, 60%, 60% !important;
  --color-blue: #668cb3 !important;
  --color-blue-rgb: 102, 140, 179 !important;
  --color-creme-0: rgb(31, 26, 20) !important;
  --color-creme-1: rgb(31, 26, 20) !important;
  --color-creme-2: rgb(36, 30, 25) !important;
  --color-creme-3: rgb(52, 42, 35) !important;
  --color-creme-4: rgb(95, 79, 58) !important;
  --color-creme-5: rgb(104, 80, 49) !important;
  --color-creme-6: rgb(166, 129, 89) !important;
  --color-creme-7: rgb(171, 145, 109) !important;
  --color-creme-8: rgb(217, 184, 140) !important;
  --color-creme-fade: rgba(178, 171, 164, 0.5) !important;
  --color-creme-gray-1: rgb(40, 34, 27) !important;
  --color-creme-gray-2: rgb(52, 45, 35) !important;
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
  --color-shadow: rgba(24, 14, 1, 0.8) !important;
  --color-yellow: #e1b151 !important;
  --color-yellow-rgb: 225, 177, 81 !important;
  --dark: rgb(217, 184, 140) !important;
  --darkgray: rgb(217, 184, 140) !important;
  --divider-color: rgb(95, 79, 58) !important;
  --divider-color-hover: rgb(214, 110, 92) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(214, 110, 92) !important;
  --embed-padding: 0 0 0 14px !important;
  --file-bottom-margin: 32px !important;
  --file-bottom-margin-mobile: 0 !important;
  --file-header-background: rgb(31, 26, 20) !important;
  --file-header-background-focused: rgb(31, 26, 20) !important;
  --file-header-justify: left !important;
  --file-left-margin: 74px !important;
  --file-left-margin-mobile: 30px !important;
  --file-margins: 16px 64px 32px 74px !important;
  --file-right-margin: 64px !important;
  --file-right-margin-mobile: 30px !important;
  --file-top-margin: 16px !important;
  --file-top-margin-mobile: 0px !important;
  --flair-color: rgb(217, 184, 140) !important;
  --font-semibold: 700 !important;
  --footnote-divider-color: rgb(95, 79, 58) !important;
  --footnote-id-color: rgb(171, 145, 109) !important;
  --footnote-id-color-no-occurrences: rgb(95, 79, 58) !important;
  --footnote-input-background-active: rgb(52, 42, 35) !important;
  --graph-circle-color: rgb(166, 129, 89) !important;
  --graph-node: rgb(171, 145, 109) !important;
  --graph-node-attachment: #e1b151 !important;
  --graph-node-focused: rgb(224, 137, 128) !important;
  --graph-node-tag: #8aac6c !important;
  --graph-node-unresolved: rgb(95, 79, 58) !important;
  --graph-tag-color: rgba(135, 125, 181, 0.7) !important;
  --graph-text: rgb(217, 184, 140) !important;
  --gray: rgb(171, 145, 109) !important;
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
  --heading-formatting: rgb(95, 79, 58) !important;
  --heading-line: rgb(95, 79, 58) !important;
  --heading-line-spacing: 4px !important;
  --heading-spacing: 1rem !important;
  --highlight: rgba(207, 134, 74, 0.2) !important;
  --highlight-bold-background: rgba(138, 172, 108, 0.2) !important;
  --highlight-bold-italic-background: rgba(194, 87, 87, 0.2) !important;
  --highlight-italic-background: rgba(135, 125, 181, 0.2) !important;
  --hr-color: rgb(95, 79, 58) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(171, 145, 109) !important;
  --icon-color-active: rgb(224, 137, 128) !important;
  --icon-color-focused: rgb(217, 184, 140) !important;
  --icon-color-hover: rgb(171, 145, 109) !important;
  --inline-title-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --inline-title-size: 1.3em !important;
  --input-date-separator: rgb(95, 79, 58) !important;
  --input-placeholder-color: rgb(95, 79, 58) !important;
  --interactive-accent: rgb(214, 110, 92) !important;
  --interactive-accent-hover: rgb(224, 137, 128) !important;
  --interactive-accent-hsl: 9, 60%, 60% !important;
  --italic-color: #5ba8be !important;
  --light: rgb(31, 26, 20) !important;
  --lightgray: rgb(36, 30, 25) !important;
  --link-color: rgb(224, 137, 128) !important;
  --link-color-hover: rgb(233, 164, 159) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(224, 137, 128) !important;
  --link-external-color-hover: rgb(233, 164, 159) !important;
  --link-external-decoration: none !important;
  --link-formatting-color: rgba(214, 110, 92, 0.5) !important;
  --link-unresolved-color: rgb(224, 137, 128) !important;
  --link-unresolved-decoration-color: rgba(214, 110, 92, 0.3) !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgb(95, 79, 58) !important;
  --list-marker-color-collapsed: rgb(224, 137, 128) !important;
  --list-marker-color-hover: rgb(171, 145, 109) !important;
  --media-max-width: 750px !important;
  --menu-background: rgb(36, 30, 25) !important;
  --metadata-border-color: rgb(95, 79, 58) !important;
  --metadata-divider-color: rgb(95, 79, 58) !important;
  --metadata-gap: 0px !important;
  --metadata-input-background-active: rgb(52, 42, 35) !important;
  --metadata-input-text-color: rgb(217, 184, 140) !important;
  --metadata-label-background-active: rgb(52, 42, 35) !important;
  --metadata-label-text-color: rgb(171, 145, 109) !important;
  --metadata-label-text-color-hover: rgb(171, 145, 109) !important;
  --metadata-padding: 0 0 8px 0 !important;
  --metadata-property-background-active: rgb(52, 42, 35) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(104, 80, 49) !important;
  --modal-background: rgb(31, 26, 20) !important;
  --modal-border-color: rgb(95, 79, 58) !important;
  --nav-collapse-icon-color: rgb(95, 79, 58) !important;
  --nav-collapse-icon-color-collapsed: rgb(95, 79, 58) !important;
  --nav-heading-color: rgb(217, 184, 140) !important;
  --nav-heading-color-collapsed: rgb(95, 79, 58) !important;
  --nav-heading-color-collapsed-hover: rgb(171, 145, 109) !important;
  --nav-heading-color-hover: rgb(217, 184, 140) !important;
  --nav-item-background-active: rgb(52, 42, 35) !important;
  --nav-item-background-hover: rgb(52, 42, 35) !important;
  --nav-item-background-selected: rgba(214, 110, 92, 0.15) !important;
  --nav-item-color: rgb(171, 145, 109) !important;
  --nav-item-color-active: rgb(217, 184, 140) !important;
  --nav-item-color-highlighted: rgb(224, 137, 128) !important;
  --nav-item-color-hover: rgb(217, 184, 140) !important;
  --nav-item-color-selected: rgb(217, 184, 140) !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: rgb(95, 79, 58) !important;
  --nav-tag-color-active: rgb(171, 145, 109) !important;
  --nav-tag-color-hover: rgb(171, 145, 109) !important;
  --nav-tag-weight: 700 !important;
  --pdf-background: rgb(31, 26, 20) !important;
  --pdf-page-background: rgb(31, 26, 20) !important;
  --pdf-shadow: 0 0 0 1px rgb(95, 79, 58) !important;
  --pdf-sidebar-background: rgb(31, 26, 20) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(95, 79, 58) !important;
  --pill-border-color: rgb(95, 79, 58) !important;
  --pill-color: rgb(171, 145, 109) !important;
  --pill-color-hover: rgb(217, 184, 140) !important;
  --pill-color-remove: rgb(95, 79, 58) !important;
  --pill-color-remove-hover: rgb(224, 137, 128) !important;
  --prompt-background: rgb(31, 26, 20) !important;
  --ribbon-background: rgb(36, 30, 25) !important;
  --ribbon-background-collapsed: rgb(31, 26, 20) !important;
  --scrollbar-thumb-bg: rgb(36, 30, 25) !important;
  --scrollbar-width: 10px !important;
  --search-clear-button-color: rgb(171, 145, 109) !important;
  --search-icon-color: rgb(171, 145, 109) !important;
  --search-result-background: rgb(31, 26, 20) !important;
  --secondary: rgb(224, 137, 128) !important;
  --setting-group-heading-color: rgb(217, 184, 140) !important;
  --setting-group-heading-weight: 700 !important;
  --setting-items-background: rgb(36, 30, 25) !important;
  --setting-items-border-color: rgb(95, 79, 58) !important;
  --sidebar-markdown-font-size: 14px !important;
  --slider-track-background: rgb(95, 79, 58) !important;
  --status-bar-background: rgb(36, 30, 25) !important;
  --status-bar-border-color: rgb(95, 79, 58) !important;
  --status-bar-text-color: rgb(171, 145, 109) !important;
  --suggestion-background: rgb(31, 26, 20) !important;
  --sync-avatar-color-1: #c25757 !important;
  --sync-avatar-color-2: #cf864a !important;
  --sync-avatar-color-3: #e1b151 !important;
  --sync-avatar-color-4: #8aac6c !important;
  --sync-avatar-color-5: #5ba8be !important;
  --sync-avatar-color-6: #668cb3 !important;
  --sync-avatar-color-7: #877db5 !important;
  --sync-avatar-color-8: #bb77af !important;
  --tab-background-active: rgb(31, 26, 20) !important;
  --tab-container-background: rgb(36, 30, 25) !important;
  --tab-outline-color: rgb(95, 79, 58) !important;
  --tab-switcher-background: rgb(36, 30, 25) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(36, 30, 25), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(214, 110, 92) !important;
  --tab-text-color: rgb(95, 79, 58) !important;
  --tab-text-color-active: rgb(171, 145, 109) !important;
  --tab-text-color-focused: rgb(171, 145, 109) !important;
  --tab-text-color-focused-active: rgb(171, 145, 109) !important;
  --tab-text-color-focused-active-current: rgb(217, 184, 140) !important;
  --tab-text-color-focused-highlighted: rgb(224, 137, 128) !important;
  --table-add-button-border-color: rgb(95, 79, 58) !important;
  --table-border-color: rgb(95, 79, 58) !important;
  --table-column-min-width: 2.5em !important;
  --table-drag-handle-background-active: rgb(214, 110, 92) !important;
  --table-drag-handle-color: rgb(95, 79, 58) !important;
  --table-header-border-color: rgb(95, 79, 58) !important;
  --table-header-color: rgb(217, 184, 140) !important;
  --table-header-size: 0.9em !important;
  --table-row-background-hover: rgb(36, 30, 25) !important;
  --table-selection: rgba(214, 110, 92, 0.1) !important;
  --table-selection-border-color: rgb(214, 110, 92) !important;
  --table-text-size: 0.9em !important;
  --tag-background: rgba(214, 110, 92, 0.1) !important;
  --tag-background-hover: rgba(214, 110, 92, 0.2) !important;
  --tag-border-color: rgba(214, 110, 92, 0.15) !important;
  --tag-border-color-hover: rgba(214, 110, 92, 0.15) !important;
  --tag-color: rgb(224, 137, 128) !important;
  --tag-color-hover: rgb(224, 137, 128) !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.15em !important;
  --tertiary: rgb(233, 164, 159) !important;
  --text-accent: rgb(224, 137, 128) !important;
  --text-accent-hover: rgb(233, 164, 159) !important;
  --text-error: #c25757 !important;
  --text-faint: rgb(95, 79, 58) !important;
  --text-highlight-bg: rgba(207, 134, 74, 0.2) !important;
  --text-muted: rgb(171, 145, 109) !important;
  --text-normal: rgb(217, 184, 140) !important;
  --text-selection: rgb(52, 42, 35) !important;
  --text-success: #8aac6c !important;
  --text-warning: #cf864a !important;
  --textHighlight: rgba(207, 134, 74, 0.2) !important;
  --titlebar-background: rgb(36, 30, 25) !important;
  --titlebar-background-focused: rgb(36, 30, 25) !important;
  --titlebar-border-color: rgb(95, 79, 58) !important;
  --titlebar-text-color: rgb(171, 145, 109) !important;
  --titlebar-text-color-focused: rgb(217, 184, 140) !important;
  --vault-profile-color: rgb(171, 145, 109) !important;
  --vault-profile-color-hover: rgb(171, 145, 109) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 30, 25);
  color: rgb(217, 184, 140);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(31, 26, 20);
  color: rgb(217, 184, 140);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 30, 25);
  color: rgb(217, 184, 140);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 30, 25);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(217, 184, 140);
}

body div#quartz-root {
  background-color: rgb(31, 26, 20);
  color: rgb(217, 184, 140);
}`,
    typography: `body .page article p > b, b {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration: rgb(207, 134, 74);
  text-decoration-color: rgb(207, 134, 74);
}

body .page article p > em, em {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration: rgb(91, 168, 190);
  text-decoration-color: rgb(91, 168, 190);
}

body .page article p > i, i {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration: rgb(91, 168, 190);
  text-decoration-color: rgb(91, 168, 190);
}

body .page article p > strong, strong {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration: rgb(207, 134, 74);
  text-decoration-color: rgb(207, 134, 74);
}

body .text-highlight {
  background-color: rgba(207, 134, 74, 0.2);
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body del {
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration: line-through rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body p {
  color: rgb(171, 145, 109);
  outline: rgb(171, 145, 109) none 0px;
  text-decoration: rgb(171, 145, 109);
  text-decoration-color: rgb(171, 145, 109);
}`,
    links: `body a.external, footer a {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration: rgb(224, 137, 128);
  text-decoration-color: rgb(224, 137, 128);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration: rgb(224, 137, 128);
  text-decoration-color: rgb(224, 137, 128);
}

body a.internal.broken {
  color: rgb(224, 137, 128);
  outline: rgb(224, 137, 128) none 0px;
  text-decoration: rgba(214, 110, 92, 0.3);
  text-decoration-color: rgba(214, 110, 92, 0.3);
}`,
    lists: `body dd {
  color: rgb(217, 184, 140);
}

body dt {
  color: rgb(217, 184, 140);
}

body ol > li {
  color: rgb(217, 184, 140);
}

body ol.overflow {
  background-color: rgb(31, 26, 20);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body ul > li {
  color: rgb(217, 184, 140);
}

body ul.overflow {
  background-color: rgb(31, 26, 20);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(95, 79, 58);
  text-decoration: rgb(95, 79, 58);
}

body blockquote {
  background-color: rgb(36, 30, 25);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body table {
  color: rgb(217, 184, 140);
  width: 206.078px;
}

body td {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

body th {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}`,
    code: `body code {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

body pre > code > [data-line] {
  border-left-color: rgb(225, 177, 81);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(225, 177, 81);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(225, 177, 81);
  border-left-color: rgb(225, 177, 81);
  border-right-color: rgb(225, 177, 81);
  border-top-color: rgb(225, 177, 81);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}

body pre:has(> code) {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}`,
    images: `body audio {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body figcaption {
  color: rgb(217, 184, 140);
}

body figure {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body img {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body video {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    embeds: `body .file-embed {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
}

body .footnotes {
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body .transclude {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(214, 110, 92);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body .transclude-inner {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(214, 110, 92);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='*'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='-'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='/'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='>'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='?'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='I'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='S'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='b'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='c'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='d'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='f'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='i'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='k'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='l'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='p'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='u'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body li.task-list-item[data-task='w'] {
  color: rgb(217, 184, 140);
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body .callout > .callout-content {
  padding-left: 12px;
  padding-right: 12px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space {
  background-color: rgb(31, 26, 20);
}

body .search > .search-container > .search-space > * {
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(52, 42, 35);
  color: rgb(217, 184, 140);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 30, 25);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(52, 42, 35);
  color: rgb(217, 184, 140);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(224, 137, 128);
}

body h1 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h2 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h3 {
  color: rgb(217, 184, 140);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h4 {
  color: rgb(217, 184, 140);
}

body h5 {
  color: rgb(217, 184, 140);
}

body h6 {
  color: rgb(217, 184, 140);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

body ::-webkit-scrollbar-corner {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}

body ::-webkit-scrollbar-track {
  background: rgb(31, 26, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 26, 20);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}`,
    footer: `body footer {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(171, 145, 109);
}

body footer ul li a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(217, 184, 140);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 145, 109);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body li.section-li > .section .meta {
  color: rgb(171, 145, 109);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body ul.section-ul {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

body .darkmode svg {
  color: rgb(171, 145, 109);
  stroke: rgb(171, 145, 109);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

body .breadcrumb-element p {
  color: rgb(95, 79, 58);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body .metadata {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: rgb(171, 145, 109);
  margin-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

body .navigation-progress {
  background-color: rgb(36, 30, 25);
}

body .page-header h2.page-title {
  color: rgb(217, 184, 140);
}

body abbr {
  color: rgb(217, 184, 140);
  text-decoration: underline dotted rgb(217, 184, 140);
}

body details {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body input[type=text] {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

body kbd {
  background-color: rgb(36, 30, 25);
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

body progress {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

body sub {
  color: rgb(217, 184, 140);
}

body summary {
  color: rgb(217, 184, 140);
}

body sup {
  color: rgb(217, 184, 140);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 9 !important;
  --accent-l: 60% !important;
  --accent-s: 60% !important;
  --background-modifier-active-hover: rgba(214, 110, 92, 0.1) !important;
  --background-modifier-border: rgb(207, 182, 150) !important;
  --background-modifier-border-focus: rgb(198, 181, 159) !important;
  --background-modifier-error: #c25757 !important;
  --background-modifier-error-hover: #c25757 !important;
  --background-modifier-error-rgb: 194, 87, 87 !important;
  --background-modifier-form-field: rgb(238, 231, 221) !important;
  --background-modifier-form-field-hover: rgb(238, 231, 221) !important;
  --background-modifier-hover: rgb(238, 231, 221) !important;
  --background-modifier-success: #8aac6c !important;
  --background-modifier-success-rgb: 138, 172, 108 !important;
  --background-primary: rgb(252, 250, 248) !important;
  --background-primary-alt: rgb(247, 243, 238) !important;
  --background-secondary: rgb(247, 243, 238) !important;
  --background-secondary-alt: rgb(238, 231, 221) !important;
  --bases-cards-background: rgb(252, 250, 248) !important;
  --bases-cards-cover-background: rgb(247, 243, 238) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(207, 182, 150) !important;
  --bases-embed-border-color: rgb(207, 182, 150) !important;
  --bases-group-heading-property-color: rgb(138, 103, 66) !important;
  --bases-group-heading-value-weight: 700 !important;
  --bases-table-border-color: rgb(207, 182, 150) !important;
  --bases-table-cell-background-active: rgb(252, 250, 248) !important;
  --bases-table-cell-background-disabled: rgb(247, 243, 238) !important;
  --bases-table-cell-background-selected: rgba(214, 110, 92, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(198, 181, 159) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(220, 126, 111) !important;
  --bases-table-group-background: rgb(247, 243, 238) !important;
  --bases-table-header-background: rgb(252, 250, 248) !important;
  --bases-table-header-background-hover: rgb(238, 231, 221) !important;
  --bases-table-header-color: rgb(138, 103, 66) !important;
  --bases-table-row-background-hover: rgb(247, 243, 238) !important;
  --bases-table-summary-background: rgb(252, 250, 248) !important;
  --bases-table-summary-background-hover: rgb(238, 231, 221) !important;
  --blockquote-accent-color-rgb: 135, 125, 181 !important;
  --blockquote-background-color: rgb(247, 243, 238) !important;
  --blockquote-border-color: rgba(135, 125, 181, 0.3) !important;
  --blockquote-border-radius: 7px !important;
  --blockquote-border-thickness: 7px !important;
  --blockquote-padding: 6px 8px 6px 16px !important;
  --blockquote-padding-bottom: 6px !important;
  --blockquote-padding-left: 16px !important;
  --blockquote-padding-right: 8px !important;
  --blockquote-padding-top: 6px !important;
  --blur-background: color-mix(in srgb, rgb(252, 250, 248) 65%, transparent) linear-gradient(rgb(252, 250, 248), color-mix(in srgb, rgb(252, 250, 248) 65%, transparent)) !important;
  --bold-color: #cf864a !important;
  --bold-italic-color: #8aac6c !important;
  --button-background: white !important;
  --button-background-hover: rgb(247, 243, 238) !important;
  --button-border: rgb(207, 182, 150) !important;
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
  --canvas-background: rgb(252, 250, 248) !important;
  --canvas-card-label-color: rgb(207, 182, 150) !important;
  --canvas-color-1: 194, 87, 87 !important;
  --canvas-color-2: 207, 134, 74 !important;
  --canvas-color-3: 225, 177, 81 !important;
  --canvas-color-4: 138, 172, 108 !important;
  --canvas-color-5: 91, 168, 190 !important;
  --canvas-color-6: 135, 125, 181 !important;
  --canvas-dot-pattern: transparent !important;
  --caret-color: rgb(74, 52, 28) !important;
  --checkbox-border-color: rgb(207, 182, 150) !important;
  --checkbox-border-color-hover: rgb(138, 103, 66) !important;
  --checkbox-color: rgb(220, 126, 111) !important;
  --checkbox-color-hover: rgb(224, 137, 128) !important;
  --checkbox-marker-color: rgb(252, 250, 248) !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: rgb(74, 52, 28) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(247, 243, 238) !important;
  --code-border-color: rgb(207, 182, 150) !important;
  --code-bracket-background: rgb(238, 231, 221) !important;
  --code-comment: rgb(207, 182, 150) !important;
  --code-function: #e1b151 !important;
  --code-important: #cf864a !important;
  --code-keyword: #bb77af !important;
  --code-normal: rgb(74, 52, 28) !important;
  --code-operator: #c25757 !important;
  --code-property: #5ba8be !important;
  --code-punctuation: rgb(138, 103, 66) !important;
  --code-string: #8aac6c !important;
  --code-tag: #c25757 !important;
  --code-value: #877db5 !important;
  --collapse-icon-color: rgb(207, 182, 150) !important;
  --collapse-icon-color-collapsed: rgb(207, 182, 150) !important;
  --color-accent: rgb(214, 110, 92) !important;
  --color-accent-1: rgb(220, 126, 111) !important;
  --color-accent-2: rgb(224, 137, 128) !important;
  --color-accent-hsl: 9, 60%, 60% !important;
  --color-blue: #668cb3 !important;
  --color-blue-rgb: 102, 140, 179 !important;
  --color-creme-0: white !important;
  --color-creme-1: rgb(252, 250, 248) !important;
  --color-creme-2: rgb(247, 243, 238) !important;
  --color-creme-3: rgb(238, 231, 221) !important;
  --color-creme-4: rgb(207, 182, 150) !important;
  --color-creme-5: rgb(198, 181, 159) !important;
  --color-creme-6: rgb(166, 129, 89) !important;
  --color-creme-7: rgb(138, 103, 66) !important;
  --color-creme-8: rgb(74, 52, 28) !important;
  --color-creme-fade: rgba(178, 171, 164, 0.5) !important;
  --color-creme-gray-1: rgb(243, 240, 237) !important;
  --color-creme-gray-2: rgb(235, 230, 224) !important;
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
  --color-shadow: rgba(0, 0, 0, 0.4) !important;
  --color-yellow: #e1b151 !important;
  --color-yellow-rgb: 225, 177, 81 !important;
  --dark: rgb(74, 52, 28) !important;
  --darkgray: rgb(74, 52, 28) !important;
  --divider-color: rgb(207, 182, 150) !important;
  --divider-color-hover: rgb(220, 126, 111) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(220, 126, 111) !important;
  --embed-padding: 0 0 0 14px !important;
  --file-bottom-margin: 32px !important;
  --file-bottom-margin-mobile: 0 !important;
  --file-header-background: rgb(252, 250, 248) !important;
  --file-header-background-focused: rgb(252, 250, 248) !important;
  --file-header-justify: left !important;
  --file-left-margin: 74px !important;
  --file-left-margin-mobile: 30px !important;
  --file-margins: 16px 64px 32px 74px !important;
  --file-right-margin: 64px !important;
  --file-right-margin-mobile: 30px !important;
  --file-top-margin: 16px !important;
  --file-top-margin-mobile: 0px !important;
  --flair-color: rgb(74, 52, 28) !important;
  --font-semibold: 700 !important;
  --footnote-divider-color: rgb(207, 182, 150) !important;
  --footnote-id-color: rgb(138, 103, 66) !important;
  --footnote-id-color-no-occurrences: rgb(207, 182, 150) !important;
  --footnote-input-background-active: rgb(238, 231, 221) !important;
  --graph-circle-color: rgb(166, 129, 89) !important;
  --graph-node: rgb(138, 103, 66) !important;
  --graph-node-attachment: #e1b151 !important;
  --graph-node-focused: rgb(214, 110, 92) !important;
  --graph-node-tag: #8aac6c !important;
  --graph-node-unresolved: rgb(207, 182, 150) !important;
  --graph-tag-color: rgba(135, 125, 181, 0.7) !important;
  --graph-text: rgb(74, 52, 28) !important;
  --gray: rgb(138, 103, 66) !important;
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
  --heading-formatting: rgb(207, 182, 150) !important;
  --heading-line: rgb(207, 182, 150) !important;
  --heading-line-spacing: 4px !important;
  --heading-spacing: 1rem !important;
  --highlight: rgba(207, 134, 74, 0.2) !important;
  --highlight-bold-background: rgba(138, 172, 108, 0.2) !important;
  --highlight-bold-italic-background: rgba(194, 87, 87, 0.2) !important;
  --highlight-italic-background: rgba(135, 125, 181, 0.2) !important;
  --hr-color: rgb(207, 182, 150) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(138, 103, 66) !important;
  --icon-color-active: rgb(214, 110, 92) !important;
  --icon-color-focused: rgb(74, 52, 28) !important;
  --icon-color-hover: rgb(138, 103, 66) !important;
  --inline-title-font: Merriweather, Lucida Bright, Georgia, serif !important;
  --inline-title-size: 1.3em !important;
  --input-date-separator: rgb(207, 182, 150) !important;
  --input-placeholder-color: rgb(207, 182, 150) !important;
  --interactive-accent: rgb(220, 126, 111) !important;
  --interactive-accent-hover: rgb(224, 137, 128) !important;
  --interactive-accent-hsl: 9, 60%, 60% !important;
  --italic-color: #5ba8be !important;
  --light: rgb(252, 250, 248) !important;
  --lightgray: rgb(247, 243, 238) !important;
  --link-color: rgb(214, 110, 92) !important;
  --link-color-hover: rgb(224, 137, 128) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(214, 110, 92) !important;
  --link-external-color-hover: rgb(224, 137, 128) !important;
  --link-external-decoration: none !important;
  --link-formatting-color: rgba(214, 110, 92, 0.5) !important;
  --link-unresolved-color: rgb(214, 110, 92) !important;
  --link-unresolved-decoration-color: rgba(214, 110, 92, 0.3) !important;
  --list-indent: 1.5em !important;
  --list-marker-color: rgb(207, 182, 150) !important;
  --list-marker-color-collapsed: rgb(214, 110, 92) !important;
  --list-marker-color-hover: rgb(138, 103, 66) !important;
  --media-max-width: 750px !important;
  --menu-background: rgb(247, 243, 238) !important;
  --metadata-border-color: rgb(207, 182, 150) !important;
  --metadata-divider-color: rgb(207, 182, 150) !important;
  --metadata-gap: 0px !important;
  --metadata-input-background-active: rgb(238, 231, 221) !important;
  --metadata-input-text-color: rgb(74, 52, 28) !important;
  --metadata-label-background-active: rgb(238, 231, 221) !important;
  --metadata-label-text-color: rgb(138, 103, 66) !important;
  --metadata-label-text-color-hover: rgb(138, 103, 66) !important;
  --metadata-padding: 0 0 8px 0 !important;
  --metadata-property-background-active: rgb(238, 231, 221) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(198, 181, 159) !important;
  --modal-background: rgb(252, 250, 248) !important;
  --modal-border-color: rgb(207, 182, 150) !important;
  --nav-collapse-icon-color: rgb(207, 182, 150) !important;
  --nav-collapse-icon-color-collapsed: rgb(207, 182, 150) !important;
  --nav-heading-color: rgb(74, 52, 28) !important;
  --nav-heading-color-collapsed: rgb(207, 182, 150) !important;
  --nav-heading-color-collapsed-hover: rgb(138, 103, 66) !important;
  --nav-heading-color-hover: rgb(74, 52, 28) !important;
  --nav-item-background-active: rgb(238, 231, 221) !important;
  --nav-item-background-hover: rgb(238, 231, 221) !important;
  --nav-item-background-selected: rgba(214, 110, 92, 0.15) !important;
  --nav-item-color: rgb(138, 103, 66) !important;
  --nav-item-color-active: rgb(74, 52, 28) !important;
  --nav-item-color-highlighted: rgb(214, 110, 92) !important;
  --nav-item-color-hover: rgb(74, 52, 28) !important;
  --nav-item-color-selected: rgb(74, 52, 28) !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: rgb(207, 182, 150) !important;
  --nav-tag-color-active: rgb(138, 103, 66) !important;
  --nav-tag-color-hover: rgb(138, 103, 66) !important;
  --nav-tag-weight: 700 !important;
  --pdf-background: rgb(252, 250, 248) !important;
  --pdf-page-background: rgb(252, 250, 248) !important;
  --pdf-sidebar-background: rgb(252, 250, 248) !important;
  --pill-border-color: rgb(207, 182, 150) !important;
  --pill-color: rgb(138, 103, 66) !important;
  --pill-color-hover: rgb(74, 52, 28) !important;
  --pill-color-remove: rgb(207, 182, 150) !important;
  --pill-color-remove-hover: rgb(214, 110, 92) !important;
  --prompt-background: rgb(252, 250, 248) !important;
  --raised-background: color-mix(in srgb, rgb(252, 250, 248) 65%, transparent) linear-gradient(rgb(252, 250, 248), color-mix(in srgb, rgb(252, 250, 248) 65%, transparent)) !important;
  --ribbon-background: rgb(247, 243, 238) !important;
  --ribbon-background-collapsed: rgb(252, 250, 248) !important;
  --scrollbar-thumb-bg: rgb(247, 243, 238) !important;
  --scrollbar-width: 10px !important;
  --search-clear-button-color: rgb(138, 103, 66) !important;
  --search-icon-color: rgb(138, 103, 66) !important;
  --search-result-background: rgb(252, 250, 248) !important;
  --secondary: rgb(214, 110, 92) !important;
  --setting-group-heading-color: rgb(74, 52, 28) !important;
  --setting-group-heading-weight: 700 !important;
  --setting-items-background: rgb(247, 243, 238) !important;
  --setting-items-border-color: rgb(207, 182, 150) !important;
  --sidebar-markdown-font-size: 14px !important;
  --slider-track-background: rgb(207, 182, 150) !important;
  --status-bar-background: rgb(247, 243, 238) !important;
  --status-bar-border-color: rgb(207, 182, 150) !important;
  --status-bar-text-color: rgb(138, 103, 66) !important;
  --suggestion-background: rgb(252, 250, 248) !important;
  --sync-avatar-color-1: #c25757 !important;
  --sync-avatar-color-2: #cf864a !important;
  --sync-avatar-color-3: #e1b151 !important;
  --sync-avatar-color-4: #8aac6c !important;
  --sync-avatar-color-5: #5ba8be !important;
  --sync-avatar-color-6: #668cb3 !important;
  --sync-avatar-color-7: #877db5 !important;
  --sync-avatar-color-8: #bb77af !important;
  --tab-background-active: rgb(252, 250, 248) !important;
  --tab-container-background: rgb(247, 243, 238) !important;
  --tab-outline-color: rgb(207, 182, 150) !important;
  --tab-switcher-background: rgb(247, 243, 238) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(247, 243, 238), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(214, 110, 92) !important;
  --tab-text-color: rgb(207, 182, 150) !important;
  --tab-text-color-active: rgb(138, 103, 66) !important;
  --tab-text-color-focused: rgb(138, 103, 66) !important;
  --tab-text-color-focused-active: rgb(138, 103, 66) !important;
  --tab-text-color-focused-active-current: rgb(74, 52, 28) !important;
  --tab-text-color-focused-highlighted: rgb(214, 110, 92) !important;
  --table-add-button-border-color: rgb(207, 182, 150) !important;
  --table-border-color: rgb(207, 182, 150) !important;
  --table-column-min-width: 2.5em !important;
  --table-drag-handle-background-active: rgb(220, 126, 111) !important;
  --table-drag-handle-color: rgb(207, 182, 150) !important;
  --table-header-border-color: rgb(207, 182, 150) !important;
  --table-header-color: rgb(74, 52, 28) !important;
  --table-header-size: 0.9em !important;
  --table-row-background-hover: rgb(247, 243, 238) !important;
  --table-selection: rgba(214, 110, 92, 0.1) !important;
  --table-selection-border-color: rgb(220, 126, 111) !important;
  --table-text-size: 0.9em !important;
  --tag-background: rgba(214, 110, 92, 0.1) !important;
  --tag-background-hover: rgba(214, 110, 92, 0.2) !important;
  --tag-border-color: rgba(214, 110, 92, 0.15) !important;
  --tag-border-color-hover: rgba(214, 110, 92, 0.15) !important;
  --tag-color: rgb(214, 110, 92) !important;
  --tag-color-hover: rgb(214, 110, 92) !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.15em !important;
  --tertiary: rgb(224, 137, 128) !important;
  --text-accent: rgb(214, 110, 92) !important;
  --text-accent-hover: rgb(224, 137, 128) !important;
  --text-error: #c25757 !important;
  --text-faint: rgb(207, 182, 150) !important;
  --text-highlight-bg: rgba(207, 134, 74, 0.2) !important;
  --text-muted: rgb(138, 103, 66) !important;
  --text-normal: rgb(74, 52, 28) !important;
  --text-selection: rgb(238, 231, 221) !important;
  --text-success: #8aac6c !important;
  --text-warning: #cf864a !important;
  --textHighlight: rgba(207, 134, 74, 0.2) !important;
  --titlebar-background: rgb(247, 243, 238) !important;
  --titlebar-background-focused: rgb(247, 243, 238) !important;
  --titlebar-border-color: rgb(207, 182, 150) !important;
  --titlebar-text-color: rgb(138, 103, 66) !important;
  --titlebar-text-color-focused: rgb(74, 52, 28) !important;
  --vault-profile-color: rgb(138, 103, 66) !important;
  --vault-profile-color-hover: rgb(138, 103, 66) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 250, 248);
  color: rgb(74, 52, 28);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 243, 238);
  color: rgb(74, 52, 28);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 243, 238);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(74, 52, 28);
}

body div#quartz-root {
  background-color: rgb(252, 250, 248);
  color: rgb(74, 52, 28);
}`,
    typography: `body .page article p > b, b {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration: rgb(207, 134, 74);
  text-decoration-color: rgb(207, 134, 74);
}

body .page article p > em, em {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration: rgb(91, 168, 190);
  text-decoration-color: rgb(91, 168, 190);
}

body .page article p > i, i {
  color: rgb(91, 168, 190);
  outline: rgb(91, 168, 190) none 0px;
  text-decoration: rgb(91, 168, 190);
  text-decoration-color: rgb(91, 168, 190);
}

body .page article p > strong, strong {
  color: rgb(207, 134, 74);
  outline: rgb(207, 134, 74) none 0px;
  text-decoration: rgb(207, 134, 74);
  text-decoration-color: rgb(207, 134, 74);
}

body .text-highlight {
  background-color: rgba(207, 134, 74, 0.2);
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body del {
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: line-through rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body p {
  color: rgb(138, 103, 66);
  outline: rgb(138, 103, 66) none 0px;
  text-decoration: rgb(138, 103, 66);
  text-decoration-color: rgb(138, 103, 66);
}`,
    links: `body a.external, footer a {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration: rgb(214, 110, 92);
  text-decoration-color: rgb(214, 110, 92);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration: rgb(214, 110, 92);
  text-decoration-color: rgb(214, 110, 92);
}

body a.internal.broken {
  color: rgb(214, 110, 92);
  outline: rgb(214, 110, 92) none 0px;
  text-decoration: rgba(214, 110, 92, 0.3);
  text-decoration-color: rgba(214, 110, 92, 0.3);
}`,
    lists: `body dd {
  color: rgb(74, 52, 28);
}

body dt {
  color: rgb(74, 52, 28);
}

body ol > li {
  color: rgb(74, 52, 28);
}

body ol.overflow {
  background-color: rgb(252, 250, 248);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body ul > li {
  color: rgb(74, 52, 28);
}

body ul.overflow {
  background-color: rgb(252, 250, 248);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(207, 182, 150);
  text-decoration: rgb(207, 182, 150);
}

body blockquote {
  background-color: rgb(247, 243, 238);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body table {
  color: rgb(74, 52, 28);
  width: 206.078px;
}

body td {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

body th {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}`,
    code: `body code {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

body pre > code > [data-line] {
  border-left-color: rgb(225, 177, 81);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(225, 177, 81);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(225, 177, 81);
  border-left-color: rgb(225, 177, 81);
  border-right-color: rgb(225, 177, 81);
  border-top-color: rgb(225, 177, 81);
}

body pre > code, pre:has(> code) {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}

body pre:has(> code) {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}`,
    images: `body audio {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body figcaption {
  color: rgb(74, 52, 28);
}

body figure {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body img {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body video {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    embeds: `body .file-embed {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
}

body .footnotes {
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .transclude {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(219, 124, 110);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .transclude-inner {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(219, 124, 110);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='*'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='-'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='/'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='>'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='?'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='I'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='S'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='b'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='c'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='d'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='f'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='i'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='k'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='l'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='p'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='u'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body li.task-list-item[data-task='w'] {
  color: rgb(74, 52, 28);
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body .callout > .callout-content {
  padding-left: 12px;
  padding-right: 12px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 250, 248);
}

body .search > .search-container > .search-space > * {
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 243, 238);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(238, 231, 221);
  color: rgb(74, 52, 28);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(214, 110, 92);
}

body h1 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h2 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h3 {
  color: rgb(74, 52, 28);
  font-family: Merriweather, "Lucida Bright", Georgia, serif;
}

body h4 {
  color: rgb(74, 52, 28);
}

body h5 {
  color: rgb(74, 52, 28);
}

body h6 {
  color: rgb(74, 52, 28);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 250, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 250, 248);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}`,
    footer: `body footer {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(138, 103, 66);
}

body footer ul li a {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(74, 52, 28);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(138, 103, 66);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body li.section-li > .section .meta {
  color: rgb(138, 103, 66);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(138, 103, 66);
  text-decoration: rgb(138, 103, 66);
}

body ul.section-ul {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

body .darkmode svg {
  color: rgb(138, 103, 66);
  stroke: rgb(138, 103, 66);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

body .breadcrumb-element p {
  color: rgb(207, 182, 150);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body .metadata {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: rgb(138, 103, 66);
  margin-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

body .navigation-progress {
  background-color: rgb(247, 243, 238);
}

body .page-header h2.page-title {
  color: rgb(74, 52, 28);
}

body abbr {
  color: rgb(74, 52, 28);
  text-decoration: underline dotted rgb(74, 52, 28);
}

body details {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body input[type=text] {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

body kbd {
  background-color: rgb(247, 243, 238);
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

body progress {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

body sub {
  color: rgb(74, 52, 28);
}

body summary {
  color: rgb(74, 52, 28);
}

body sup {
  color: rgb(74, 52, 28);
}`,
  },
};
