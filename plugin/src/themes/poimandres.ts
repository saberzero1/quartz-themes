import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "poimandres", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 210 !important;
  --accent-l: 50% !important;
  --accent-s: 40% !important;
  --background-modifier-active-hover: #1b1d23 !important;
  --background-modifier-border: #25272e !important;
  --background-modifier-border-focus: #25272e !important;
  --background-modifier-border-hover: #25272e !important;
  --background-modifier-cover: #14161a !important;
  --background-modifier-error: #c06075 !important;
  --background-modifier-error-hover: #d1889a !important;
  --background-modifier-form-field: #14161a !important;
  --background-modifier-form-field-highlighted: #14161a !important;
  --background-modifier-form-field-hover: #14161a !important;
  --background-modifier-hover: 40% !important;
  --background-modifier-message: #20232a !important;
  --background-modifier-success: #7bbfb0 !important;
  --background-primary: #1b1d23 !important;
  --background-primary-alt: #1b1d23 !important;
  --background-secondary: #14161a !important;
  --background-secondary-alt: #14161a !important;
  --bases-cards-background: #1b1d23 !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: #1b1d23 !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px #25272e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #25272e !important;
  --bases-embed-border-color: #25272e !important;
  --bases-group-heading-property-color: #b8bfc9 !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: #25272e !important;
  --bases-table-cell-background-active: #1b1d23 !important;
  --bases-table-cell-background-disabled: #1b1d23 !important;
  --bases-table-cell-background-selected: hsla(210, 40%, 50%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #25272e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(210,
			40%,
			50%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: #1b1d23 !important;
  --bases-table-header-background: #1b1d23 !important;
  --bases-table-header-background-hover: 40% !important;
  --bases-table-header-color: #b8bfc9 !important;
  --bases-table-row-background-hover: #14161a !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: #1b1d23 !important;
  --bases-table-summary-background-hover: 40% !important;
  --bg: #1b1d23 !important;
  --bg_dark2: #14161a !important;
  --bg_highlight: #25272e !important;
  --bg_highlight_dark: #20232a !important;
  --blockquote-background-color: #14161a !important;
  --blockquote-border-color: hsl(210,
			40%,
			50%) !important;
  --blue0: #c5d0e6 !important;
  --blur-background: color-mix(in srgb, #14161a 65%, transparent) linear-gradient(#14161a, color-mix(in srgb, #14161a 65%, transparent)) !important;
  --bold-color: #84bfcf !important;
  --border-width: 2px !important;
  --button-radius: 4px !important;
  --callout-bug: #d1889a;
  --callout-default: #c5d0e6;
  --callout-error: #c06075;
  --callout-example: #d2a5c4;
  --callout-fail: #c06075;
  --callout-important: #7bbfb0;
  --callout-info: #c5d0e6;
  --callout-question: #dcb583;
  --callout-quote: #b8bfc9;
  --callout-success: #5db3be;
  --callout-summary: #84bfcf;
  --callout-tip: #84bfcf;
  --callout-todo: #84bfcf;
  --callout-warning: #f2a070;
  --canvas-background: #1b1d23 !important;
  --canvas-card-label-color: #7da0b3 !important;
  --caret-color: #e4e7ea !important;
  --checkbox-border-color: #7da0b3 !important;
  --checkbox-border-color-hover: #7da0b3 !important;
  --checkbox-color: #7da0b3 !important;
  --checkbox-color-hover: #7da0b3 !important;
  --checkbox-marker-color: #6f9fad !important;
  --checklist-done-color: #84bfcf !important;
  --code-background: #20232a !important;
  --code-border-color: #25272e !important;
  --code-bracket-background: 40% !important;
  --code-comment: #b8bfc9 !important;
  --code-function: #84bfcf !important;
  --code-important: #c06075 !important;
  --code-keyword: #6a998f !important;
  --code-normal: #e4e7ea !important;
  --code-operator: #6f9fad !important;
  --code-property: #e4e7ea !important;
  --code-punctuation: #6a998f !important;
  --code-string: #7bbfb0 !important;
  --code-tag: #7bbfb0 !important;
  --code-value: #7bbfb0 !important;
  --collapse-icon-color: #7da0b3 !important;
  --collapse-icon-color-collapsed: #d2a5c4 !important;
  --color-accent: hsl(210, 40%, 50%) !important;
  --color-accent-1: hsl(207, 40.8%, 57.5%) !important;
  --color-accent-2: hsl(205, 42%, 64.5%) !important;
  --color-accent-hsl: 210, 40%, 50% !important;
  --color_blue: #c5d0e6 !important;
  --color_blue_rgb: #c5d0e6 !important;
  --color_cyan: #84bfcf !important;
  --color_cyan_rgb: #84bfcf !important;
  --color_green: #7bbfb0 !important;
  --color_green_rgb: #7bbfb0 !important;
  --color_orange: #f2a070 !important;
  --color_orange_rgb: #f2a070 !important;
  --color_pink: #d2a5c4 !important;
  --color_pink_rgb: #d2a5c4 !important;
  --color_purple: #d2a5c4 !important;
  --color_purple_rgb: #d2a5c4 !important;
  --color_red: #d1889a !important;
  --color_red_rgb: #d1889a !important;
  --color_yellow: #dcb583 !important;
  --color_yellow_rgb: #dcb583 !important;
  --comment: #7da0b3 !important;
  --cyan: #84bfcf !important;
  --cyan0: #6f9fad !important;
  --dark: #e4e7ea !important;
  --darkgray: #e4e7ea !important;
  --divider-color: #25272e !important;
  --divider-color-hover: hsl(210,
			40%,
			50%) !important;
  --dropdown-background: #14161a !important;
  --dropdown-background-hover: #1b1d23 !important;
  --embed-background: #25272e !important;
  --embed-block-shadow-hover: 0 0 0 1px #25272e, inset 0 0 0 1px #25272e !important;
  --embed-border-start: 2px solid hsl(210,
			40%,
			50%) !important;
  --embed-padding: 1.5rem 1.5rem 0.5rem !important;
  --fg: #e4e7ea !important;
  --fg_dark: #b8bfc9 !important;
  --file-header-background: #1b1d23 !important;
  --file-header-background-focused: #1b1d23 !important;
  --file-header-border: 2px solid transparent !important;
  --flair-background: #14161a !important;
  --flair-color: #e4e7ea !important;
  --flashing-background: #14161a !important;
  --footnote-divider-color: #25272e !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: #b8bfc9 !important;
  --footnote-id-color-no-occurrences: #7da0b3 !important;
  --footnote-input-background-active: 40% !important;
  --graph-line: #7da0b3 !important;
  --graph-node: #e4e7ea !important;
  --graph-node-attachment: #c5d0e6 !important;
  --graph-node-focused: #d2a5c4 !important;
  --graph-node-tag: #f2a070 !important;
  --graph-node-unresolved: #7da0b3 !important;
  --graph-text: #e4e7ea !important;
  --gray: #b8bfc9 !important;
  --green: #7bbfb0 !important;
  --green0: #6a998f !important;
  --h1-color: #84bfcf !important;
  --h2-color: #6f9fad !important;
  --h3-color: #ffffff !important;
  --h4-color: #d2a5c4 !important;
  --h5-color: #c5d0e6 !important;
  --h6-color: #dcb583 !important;
  --heading-formatting: #7da0b3 !important;
  --highlight: #f2a070 !important;
  --hr-color: #25272e !important;
  --icon-color: #b8bfc9 !important;
  --icon-color-active: #7bbfb0 !important;
  --icon-color-focused: #5db3be !important;
  --icon-color-hover: #c5d0e6 !important;
  --indentation-guide-color: #7da0b3 !important;
  --indentation-guide-color-active: #7da0b3 !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #84bfcf !important;
  --input-border-width: 2px !important;
  --input-date-separator: #7da0b3 !important;
  --input-placeholder-color: #7da0b3 !important;
  --input-radius: 4px !important;
  --interactive-accent: hsl(210,
			40%,
			50%) !important;
  --interactive-accent-hover: #e4e7ea !important;
  --interactive-accent-hsl: 210, 40%, 50% !important;
  --interactive-hover: #1b1d23 !important;
  --interactive-normal: #14161a !important;
  --interactive-success: #7bbfb0 !important;
  --italic-color: #84bfcf !important;
  --light: #1b1d23 !important;
  --lightgray: #14161a !important;
  --link-color: #b8bfc9 !important;
  --link-color-hover: #84bfcf !important;
  --link-external-color: #b8bfc9 !important;
  --link-external-color-hover: #84bfcf !important;
  --link-unresolved-color: #d2a5c4 !important;
  --link-unresolved-decoration-color: hsla(210, 40%, 50%, 0.3) !important;
  --list-marker-color: #7da0b3 !important;
  --list-marker-color-collapsed: #d2a5c4 !important;
  --list-marker-color-hover: #b8bfc9 !important;
  --magenta: #d2a5c4 !important;
  --menu-background: #14161a !important;
  --menu-border-color: #25272e !important;
  --menu-border-width: 2px !important;
  --menu-radius: 4px !important;
  --mermaid-actor: #b8bfc9 !important;
  --mermaid-loopline: #c5d0e6 !important;
  --mermaid-note: #c5d0e6 !important;
  --metadata-border-color: #25272e !important;
  --metadata-divider-color: #25272e !important;
  --metadata-input-background-active: 40% !important;
  --metadata-input-text-color: #e4e7ea !important;
  --metadata-label-background-active: 40% !important;
  --metadata-label-text-color: #b8bfc9 !important;
  --metadata-label-text-color-hover: #b8bfc9 !important;
  --metadata-property-background-active: 40% !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #25272e !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px #25272e !important;
  --modal-background: #1b1d23 !important;
  --modal-border-color: #25272e !important;
  --modal-border-width: 2px !important;
  --modal-radius: 4px !important;
  --nav-collapse-icon-color: #7da0b3 !important;
  --nav-collapse-icon-color-collapsed: #7da0b3 !important;
  --nav-file-tag: #dcb583 !important;
  --nav-heading-color: #e4e7ea !important;
  --nav-heading-color-collapsed: #7da0b3 !important;
  --nav-heading-color-collapsed-hover: #b8bfc9 !important;
  --nav-heading-color-hover: #e4e7ea !important;
  --nav-indentation-guide-color: #25272e !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: #25272e !important;
  --nav-item-background-hover: #25272e !important;
  --nav-item-background-selected: hsla(210, 40%, 50%, 0.15) !important;
  --nav-item-color: #b8bfc9 !important;
  --nav-item-color-active: #7bbfb0 !important;
  --nav-item-color-highlighted: #d2a5c4 !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #e4e7ea !important;
  --nav-tag-color: #7da0b3 !important;
  --nav-tag-color-active: #b8bfc9 !important;
  --nav-tag-color-hover: #b8bfc9 !important;
  --orange: #f2a070 !important;
  --pdf-background: #1b1d23 !important;
  --pdf-page-background: #1b1d23 !important;
  --pdf-shadow: 0 0 0 1px #25272e !important;
  --pdf-sidebar-background: #1b1d23 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #25272e !important;
  --pill-border-color: #25272e !important;
  --pill-border-color-hover: #25272e !important;
  --pill-border-width: 2px !important;
  --pill-color: #b8bfc9 !important;
  --pill-color-hover: #e4e7ea !important;
  --pill-color-remove: #7da0b3 !important;
  --pill-color-remove-hover: #d2a5c4 !important;
  --prompt-background: #1b1d23 !important;
  --prompt-border-color: #25272e !important;
  --prompt-border-width: 2px !important;
  --radius-l: 4px !important;
  --radius-m: 4px !important;
  --raised-background: color-mix(in srgb, #14161a 65%, transparent) linear-gradient(#14161a, color-mix(in srgb, #14161a 65%, transparent)) !important;
  --red: #d1889a !important;
  --red1: #c06075 !important;
  --ribbon-background: #14161a !important;
  --ribbon-background-collapsed: #1b1d23 !important;
  --scrollbar-active-thumb-bg: #14161a !important;
  --scrollbar-bg: #14161a !important;
  --scrollbar-radius: 4px !important;
  --scrollbar-thumb-bg: #14161a !important;
  --scrollbar-width: 8px !important;
  --search-clear-button-color: #b8bfc9 !important;
  --search-icon-color: #b8bfc9 !important;
  --search-result-background: #1b1d23 !important;
  --secondary: #d2a5c4 !important;
  --setting-group-heading-color: #e4e7ea !important;
  --setting-items-background: #1b1d23 !important;
  --setting-items-border-color: #25272e !important;
  --setting-items-radius: 4px !important;
  --slider-thumb-border-color: #25272e !important;
  --slider-thumb-border-width: 2px !important;
  --slider-thumb-radius: 4px !important;
  --slider-track-background: #25272e !important;
  --status-bar-background: #14161a !important;
  --status-bar-border-color: #25272e !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: #b8bfc9 !important;
  --suggestion-background: #1b1d23 !important;
  --tab-background-active: #1b1d23 !important;
  --tab-container-background: #14161a !important;
  --tab-divider-color: #25272e !important;
  --tab-outline-color: #25272e !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #14161a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #14161a, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 40%, 50%) !important;
  --tab-text-color: #7da0b3 !important;
  --tab-text-color-active: #b8bfc9 !important;
  --tab-text-color-focused: #b8bfc9 !important;
  --tab-text-color-focused-active: #7bbfb0 !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: #d2a5c4 !important;
  --table-add-button-border-color: #25272e !important;
  --table-border-color: #25272e !important;
  --table-drag-handle-background-active: hsl(210,
			40%,
			50%) !important;
  --table-drag-handle-color: #7da0b3 !important;
  --table-drag-handle-color-active: #1b1d23 !important;
  --table-header-background: #1b1d23 !important;
  --table-header-background-hover: #14161a !important;
  --table-header-border-color: #25272e !important;
  --table-header-color: #e4e7ea !important;
  --table-row-alt-background: #14161a !important;
  --table-row-background-hover: #14161a !important;
  --table-selection: hsla(210, 40%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(210,
			40%,
			50%) !important;
  --tag-background: #d2a5c4 !important;
  --tag-background-hover: #84bfcf !important;
  --tag-border-color: hsla(210, 40%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(210, 40%, 50%, 0.15) !important;
  --tag-color: #d2a5c4 !important;
  --tag-color-hover: #84bfcf !important;
  --teal: #5db3be !important;
  --tertiary: #84bfcf !important;
  --text-accent: #d2a5c4 !important;
  --text-accent-hover: #84bfcf !important;
  --text-error: #d1889a !important;
  --text-error-hover: #e4e7ea !important;
  --text-faint: #7da0b3 !important;
  --text-highlight-bg: #f2a070 !important;
  --text-muted: #b8bfc9 !important;
  --text-normal: #e4e7ea !important;
  --text-on-accent: #1b1d23 !important;
  --text-selection: #20232a !important;
  --textHighlight: #f2a070 !important;
  --titlebar-background: #14161a !important;
  --titlebar-background-focused: #14161a !important;
  --titlebar-border-color: #25272e !important;
  --titlebar-text-color: #b8bfc9 !important;
  --titlebar-text-color-focused: #e4e7ea !important;
  --toggle-radius: 4px !important;
  --toggle-thumb-color: #1b1d23 !important;
  --toggle-thumb-radius: 4px !important;
  --unknown: #ffffff !important;
  --vault-profile-color: #e4e7ea !important;
  --vault-profile-color-hover: #e4e7ea !important;
  --yellow: #dcb583 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 22, 26);
  color: rgb(228, 231, 234);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(27, 29, 35);
  color: rgb(228, 231, 234);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(20, 22, 26);
}

html body .bases-table thead th {
  border-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

html body .canvas-node {
  border-color: rgb(228, 231, 234);
}

html body .canvas-node-content {
  color: rgb(228, 231, 234);
}

html body .canvas-node-file {
  color: rgb(228, 231, 234);
}

html body .canvas-node-group {
  border-color: rgb(228, 231, 234);
}

html body .canvas-sidebar {
  background-color: rgb(20, 22, 26);
  border-color: rgb(228, 231, 234);
}

html body .note-properties {
  border-color: rgb(37, 39, 46);
}

html body .note-properties-key {
  color: rgb(184, 191, 201);
}

html body .note-properties-row {
  border-color: rgb(184, 191, 201);
}

html body .note-properties-tags {
  background-color: rgb(210, 165, 196);
  color: rgb(210, 165, 196);
}

html body .note-properties-value {
  color: rgb(184, 191, 201);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 22, 26);
  color: rgb(228, 231, 234);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(37, 39, 46);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 22, 26);
  border-left-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

html body div#quartz-root {
  background-color: rgb(27, 29, 35);
  color: rgb(228, 231, 234);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(132, 191, 207);
  outline: rgb(132, 191, 207) none 0px;
  text-decoration-color: rgb(132, 191, 207);
}

html body .page article p > em, html em {
  color: rgb(132, 191, 207);
  outline: rgb(132, 191, 207) none 0px;
  text-decoration-color: rgb(132, 191, 207);
}

html body .page article p > i, html i {
  color: rgb(132, 191, 207);
  outline: rgb(132, 191, 207) none 0px;
  text-decoration-color: rgb(132, 191, 207);
}

html body .page article p > strong, html strong {
  color: rgb(132, 191, 207);
  outline: rgb(132, 191, 207) none 0px;
  text-decoration-color: rgb(132, 191, 207);
}

html body .text-highlight {
  background-color: rgb(242, 160, 112);
  color: rgb(228, 231, 234);
  outline: rgb(228, 231, 234) none 0px;
  text-decoration-color: rgb(228, 231, 234);
}

html body del {
  color: rgb(228, 231, 234);
  outline: rgb(228, 231, 234) none 0px;
  text-decoration-color: rgb(228, 231, 234);
}

html body h1.article-title {
  color: rgb(228, 231, 234);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(125, 160, 179);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(125, 160, 179);
  border-color: rgb(125, 160, 179);
}

html body p {
  color: rgb(184, 191, 201);
  outline: rgb(184, 191, 201) none 0px;
  text-decoration-color: rgb(184, 191, 201);
}`,
    links: `html body a.external, html footer a {
  color: rgb(184, 191, 201);
  outline: rgb(184, 191, 201) none 0px;
  text-decoration-color: rgb(184, 191, 201);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(184, 191, 201);
  outline: rgb(184, 191, 201) none 0px;
  text-decoration-color: rgb(184, 191, 201);
}

html body a.internal.broken {
  color: rgb(210, 165, 196);
  outline: rgb(210, 165, 196) none 0px;
  text-decoration: underline rgba(77, 128, 179, 0.3);
  text-decoration-color: rgba(77, 128, 179, 0.3);
}`,
    lists: `html body dd {
  color: rgb(228, 231, 234);
}

html body dt {
  color: rgb(228, 231, 234);
}

html body ol > li {
  color: rgb(228, 231, 234);
}

html body ol.overflow {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body ul > li {
  color: rgb(228, 231, 234);
}

html body ul.overflow {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(125, 160, 179);
}

html body blockquote {
  background-color: rgb(20, 22, 26);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body table {
  color: rgb(228, 231, 234);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(20, 22, 26);
}

html body td {
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

html body th {
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

html body tr {
  background-color: rgb(27, 29, 35);
}`,
    code: `html body code {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

html body pre > code > [data-line] {
  border-left-color: rgb(132, 191, 207);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(132, 191, 207);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(132, 191, 207);
  border-left-color: rgb(132, 191, 207);
  border-right-color: rgb(132, 191, 207);
  border-top-color: rgb(132, 191, 207);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
}

html body pre:has(> code) {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
}`,
    images: `html body audio {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body figcaption {
  color: rgb(228, 231, 234);
}

html body figure {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body img {
  border-bottom-color: rgb(132, 191, 207);
  border-left-color: rgb(132, 191, 207);
  border-right-color: rgb(132, 191, 207);
  border-top-color: rgb(132, 191, 207);
}

html body video {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(27, 29, 35);
  border-bottom-color: rgb(184, 191, 201);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .footnotes {
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

html body .transclude {
  background-color: rgb(37, 39, 46);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(77, 128, 179);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .transclude-inner {
  background-color: rgb(37, 39, 46);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(125, 160, 179);
  border-left-color: rgb(125, 160, 179);
  border-right-color: rgb(125, 160, 179);
  border-top-color: rgb(125, 160, 179);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(228, 231, 234);
}

html body .callout[data-callout="abstract"] {
  --callout-color: #84bfcf;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="bug"] {
  --callout-color: #d1889a;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="danger"] {
  --callout-color: #c06075;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="example"] {
  --callout-color: #d2a5c4;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="failure"] {
  --callout-color: #c06075;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="info"] {
  --callout-color: #c5d0e6;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="note"] {
  --callout-color: #c5d0e6;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="question"] {
  --callout-color: #dcb583;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="quote"] {
  --callout-color: #b8bfc9;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="success"] {
  --callout-color: #5db3be;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="tip"] {
  --callout-color: #84bfcf;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="todo"] {
  --callout-color: #84bfcf;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="warning"] {
  --callout-color: #f2a070;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(20, 22, 26);
  border-bottom-color: rgb(37, 39, 46);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
  border-right-color: rgb(37, 39, 46);
  border-right-width: 2px;
  border-top-color: rgb(37, 39, 46);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: rgb(228, 231, 234);
}

html body .search > .search-container > .search-space {
  background-color: rgb(27, 29, 35);
  border-bottom-color: rgb(37, 39, 46);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
  border-right-color: rgb(37, 39, 46);
  border-right-width: 2px;
  border-top-color: rgb(37, 39, 46);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(228, 231, 234);
  outline: rgb(228, 231, 234) none 0px;
  text-decoration-color: rgb(228, 231, 234);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(228, 231, 234);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(228, 231, 234);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(228, 231, 234);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(37, 39, 46);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
  border-right-color: rgb(37, 39, 46);
  border-right-width: 2px;
  border-top-color: rgb(37, 39, 46);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 22, 26);
  border-bottom-width: 2px;
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(228, 231, 234);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(210, 165, 196);
  border-bottom-color: rgba(77, 128, 179, 0.15);
  border-left-color: rgba(77, 128, 179, 0.15);
  border-right-color: rgba(77, 128, 179, 0.15);
  border-top-color: rgba(77, 128, 179, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(210, 165, 196);
}

html body h1 {
  color: rgb(132, 191, 207);
}

html body h2 {
  color: rgb(111, 159, 173);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(132, 191, 207);
}

html body h3 {
  color: rgb(255, 255, 255);
}

html body h4 {
  color: rgb(210, 165, 196);
}

html body h5 {
  color: rgb(197, 208, 230);
}

html body h6 {
  color: rgb(220, 181, 131);
}

html body hr {
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
}`,
    scrollbars: `html body .callout {
  --callout-color: #c5d0e6;
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body ::-webkit-scrollbar {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}

html body ::-webkit-scrollbar-track {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 191, 201);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 191, 201);
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(228, 231, 234);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}`,
    footer: `html body footer {
  background-color: rgb(20, 22, 26);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  border-top-left-radius: 0px;
  border-top-width: 2px;
  color: rgb(184, 191, 201);
}

html body footer ul li a {
  color: rgb(184, 191, 201);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(228, 231, 234);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 191, 201);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 191, 201);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body li.section-li > .section .meta {
  color: rgb(184, 191, 201);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 191, 201);
}

html body ul.section-ul {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}

html body .darkmode svg {
  color: rgb(184, 191, 201);
  stroke: rgb(184, 191, 201);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}

html body .breadcrumb-element p {
  color: rgb(125, 160, 179);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

html body .metadata {
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  color: rgb(184, 191, 201);
}

html body .metadata-properties {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}

html body .navigation-progress {
  background-color: rgb(20, 22, 26);
}

html body .page-header h2.page-title {
  color: rgb(228, 231, 234);
}

html body abbr {
  color: rgb(228, 231, 234);
}

html body details {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body input[type=text] {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}

html body kbd {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

html body progress {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

html body sub {
  color: rgb(228, 231, 234);
}

html body summary {
  color: rgb(228, 231, 234);
}

html body sup {
  color: rgb(228, 231, 234);
}

html body ul.tags > li {
  background-color: rgb(210, 165, 196);
  border-bottom-color: rgba(77, 128, 179, 0.15);
  border-left-color: rgba(77, 128, 179, 0.15);
  border-right-color: rgba(77, 128, 179, 0.15);
  border-top-color: rgba(77, 128, 179, 0.15);
  color: rgb(210, 165, 196);
}`,
  },
  light: {},
};
