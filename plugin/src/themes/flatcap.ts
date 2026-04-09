import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "flatcap", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --active-line-bg: rgba(255, 255, 255, 0.04) !important;
  --background-modifier-active: rgba(255, 255, 255, 0.1) !important;
  --background-modifier-border: #303540 !important;
  --background-modifier-border-focus: #88c0d0 !important;
  --background-modifier-border-hover: #484f5c !important;
  --background-modifier-error: #ff70a6 !important;
  --background-modifier-error-hover: #e06c7529 !important;
  --background-modifier-error-rgb: 255, 112, 166 !important;
  --background-modifier-form-field: #191c22 !important;
  --background-modifier-form-field-highlighted: #23272f !important;
  --background-modifier-form-field-hover: #191c22 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.05) !important;
  --background-modifier-success: #84dcc6 !important;
  --background-modifier-success-rgb: 132, 220, 198 !important;
  --background-primary: #121418 !important;
  --background-primary-alt: #191c22 !important;
  --background-secondary: #191c22 !important;
  --background-secondary-alt: #23272f !important;
  --background-table-rows: #191c22 !important;
  --bases-cards-background: #121418 !important;
  --bases-cards-cover-background: #191c22 !important;
  --bases-cards-shadow: 0 0 0 1px #303540 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #484f5c !important;
  --bases-embed-border-color: #303540 !important;
  --bases-group-heading-property-color: #bfc2ca !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-table-border-color: #303540 !important;
  --bases-table-cell-background-active: #121418 !important;
  --bases-table-cell-background-disabled: #191c22 !important;
  --bases-table-cell-background-selected: hsla(212, 29%, 66%, 0.3) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #88c0d0 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #81a1c1 !important;
  --bases-table-group-background: #191c22 !important;
  --bases-table-header-background: #121418 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.05) !important;
  --bases-table-header-color: #bfc2ca !important;
  --bases-table-summary-background: #121418 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.05) !important;
  --blockquote-border-color: #303540 !important;
  --blockquote-border-thickness: 1px !important;
  --blockquote-color: #bfc2ca !important;
  --blockquote-style: normal !important;
  --blur-background: color-mix(in srgb, #23272f 65%, transparent) linear-gradient(#23272f, color-mix(in srgb, #23272f 65%, transparent)) !important;
  --btn-shadow-color: rgba(0, 0, 0, 0.2) !important;
  --callout-bug: 255, 112, 166;
  --callout-default: 136, 192, 208;
  --callout-error: 255, 112, 166;
  --callout-example: 104, 182, 239;
  --callout-fail: 255, 112, 166;
  --callout-important: 0, 168, 224;
  --callout-info: 136, 192, 208;
  --callout-question: 255, 214, 112;
  --callout-success: 132, 220, 198;
  --callout-summary: 0, 168, 224;
  --callout-tip: 0, 168, 224;
  --callout-todo: 136, 192, 208;
  --callout-warning: 255, 214, 112;
  --canvas-background: #121418 !important;
  --canvas-card-label-color: #b2b6bf !important;
  --canvas-color-1: 255, 112, 166 !important;
  --canvas-color-2: 255, 214, 112 !important;
  --canvas-color-3: 255, 214, 112 !important;
  --canvas-color-4: 132, 220, 198 !important;
  --canvas-color-5: 0, 168, 224 !important;
  --canvas-color-6: 104, 182, 239 !important;
  --caret-color: #cbced5 !important;
  --checkbox-border-color: #b2b6bf !important;
  --checkbox-border-color-hover: #bfc2ca !important;
  --checkbox-color: #88c0d0 !important;
  --checkbox-color-hover: #88c0d0 !important;
  --checkbox-marker-color: #121418 !important;
  --checklist-done-color: #484f5c !important;
  --code-background: #191c22 !important;
  --code-border-color: #303540 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.05) !important;
  --code-comment: #b2b6bf !important;
  --code-function: #ffd670 !important;
  --code-important: #ffd670 !important;
  --code-keyword: #ff70a6 !important;
  --code-normal: #bfc2ca !important;
  --code-operator: #ff70a6 !important;
  --code-property: #00a8e0 !important;
  --code-punctuation: #bfc2ca !important;
  --code-string: #84dcc6 !important;
  --code-tag: #ff70a6 !important;
  --code-value: #68b6ef !important;
  --collapse-icon-color: #b2b6bf !important;
  --collapse-icon-color-collapsed: #88c0d0 !important;
  --color-blue: #88c0d0 !important;
  --color-blue-rgb: 136, 192, 208 !important;
  --color-cyan: #00a8e0 !important;
  --color-cyan-rgb: 0, 168, 224 !important;
  --color-green: #84dcc6 !important;
  --color-green-rgb: 132, 220, 198 !important;
  --color-orange: #ffd670 !important;
  --color-orange-rgb: 255, 214, 112 !important;
  --color-pink: #ff70a6 !important;
  --color-pink-rgb: 255, 112, 166 !important;
  --color-purple: #68b6ef !important;
  --color-purple-rgb: 104, 182, 239 !important;
  --color-red: #ff70a6 !important;
  --color-red-rgb: 255, 112, 166 !important;
  --color-yellow: #ffd670 !important;
  --color-yellow-rgb: 255, 214, 112 !important;
  --dark: #cbced5 !important;
  --darkgray: #cbced5 !important;
  --divider-color: #303540 !important;
  --divider-color-hover: #81a1c1 !important;
  --dropdown-background: #23272f !important;
  --dropdown-background-hover: #303540 !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid #81a1c1 !important;
  --file-header-background: #121418 !important;
  --file-header-background-focused: #121418 !important;
  --file-margins: 8px 48px !important;
  --flair-background: #23272f !important;
  --flair-color: #cbced5 !important;
  --flatcap-0: #121418 !important;
  --flatcap-1: #191c22 !important;
  --flatcap-10: #5e81ac !important;
  --flatcap-11: #81a1c1 !important;
  --flatcap-12: #88c0d0 !important;
  --flatcap-13: #8fbcbb !important;
  --flatcap-14: #95b1b0 !important;
  --flatcap-15: #ff70a6 !important;
  --flatcap-16: #ffd670 !important;
  --flatcap-17: #84dcc6 !important;
  --flatcap-18: #68b6ef !important;
  --flatcap-19: #00a8e0 !important;
  --flatcap-2: #23272f !important;
  --flatcap-3: #303540 !important;
  --flatcap-4: #484f5c !important;
  --flatcap-5: #b2b6bf !important;
  --flatcap-6: #bfc2ca !important;
  --flatcap-7: #cbced5 !important;
  --flatcap-8: #d8dadf !important;
  --flatcap-9: #e4e6e9 !important;
  --folding-offset: 32px !important;
  --font-adaptive-normal: 16px !important;
  --font-adaptive-small: 13.91px !important;
  --font-adaptive-smaller: 13px !important;
  --font-adaptive-smallest: 11px !important;
  --font-code: 14.4px !important;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Ubuntu, sans-serif !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: #303540 !important;
  --footnote-id-color: #bfc2ca !important;
  --footnote-id-color-no-occurrences: #b2b6bf !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.05) !important;
  --frame-divider-color: #303540 !important;
  --graph-node: #bfc2ca !important;
  --graph-node-attachment: #ffd670 !important;
  --graph-node-focused: #88c0d0 !important;
  --graph-node-tag: #84dcc6 !important;
  --graph-node-unresolved: #b2b6bf !important;
  --graph-text: #cbced5 !important;
  --gray: #bfc2ca !important;
  --h1-size: 1.125em !important;
  --h1-weight: 600 !important;
  --h2-size: 1.05em !important;
  --h2-weight: 600 !important;
  --h3-size: 1em !important;
  --h3-weight: 500 !important;
  --h4-size: 0.9em !important;
  --h4-weight: 500 !important;
  --h5-size: 0.85em !important;
  --h5-variant: small-caps !important;
  --h5-weight: 500 !important;
  --h6-size: 0.85em !important;
  --h6-variant: small-caps !important;
  --h6-weight: 400 !important;
  --heading-formatting: #b2b6bf !important;
  --heading-spacing: 2em !important;
  --highlight: rgba(209, 154, 102, 0.3) !important;
  --hr-color: #303540 !important;
  --icon-color: #b2b6bf !important;
  --icon-color-active: #cbced5 !important;
  --icon-color-focused: #cbced5 !important;
  --icon-color-hover: #bfc2ca !important;
  --icon-hex: #121418 !important;
  --icon-muted: 0.5 !important;
  --image-muted: 0.7 !important;
  --image-radius: 4px !important;
  --inline-title-margin-bottom: 1rem !important;
  --inline-title-size: 1.125em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #b2b6bf !important;
  --input-height: 32px !important;
  --input-placeholder-color: #b2b6bf !important;
  --interactive-accent: #81a1c1 !important;
  --interactive-accent-hover: #88c0d0 !important;
  --interactive-accent-rgb: 142, 165, 185 !important;
  --interactive-hover: #303540 !important;
  --interactive-normal: #23272f !important;
  --light: #121418 !important;
  --lightgray: #191c22 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: #88c0d0 !important;
  --link-color-hover: #8fbcbb !important;
  --link-external-color: #88c0d0 !important;
  --link-external-color-hover: #8fbcbb !important;
  --link-unresolved-color: #88c0d0 !important;
  --list-edit-offset: 0.5em !important;
  --list-indent: 2em !important;
  --list-marker-color: #484f5c !important;
  --list-marker-color-collapsed: #88c0d0 !important;
  --list-marker-color-hover: #bfc2ca !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: #191c22 !important;
  --menu-border-color: #484f5c !important;
  --metadata-border-color: #303540 !important;
  --metadata-divider-color: #303540 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-input-font-size: 13.91px !important;
  --metadata-input-text-color: #cbced5 !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-label-font-size: 13.91px !important;
  --metadata-label-text-color: #bfc2ca !important;
  --metadata-label-text-color-hover: #bfc2ca !important;
  --metadata-label-width: 125.19px !important;
  --metadata-label-width-multiplier: 9 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #88c0d0 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #484f5c !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --modal-background: #121418 !important;
  --modal-border-color: #191c22 !important;
  --mono0: black !important;
  --mono100: white !important;
  --nav-collapse-icon-color: #b2b6bf !important;
  --nav-collapse-icon-color-collapsed: #b2b6bf !important;
  --nav-heading-color: #cbced5 !important;
  --nav-heading-color-collapsed: #b2b6bf !important;
  --nav-heading-color-collapsed-hover: #bfc2ca !important;
  --nav-heading-color-hover: #cbced5 !important;
  --nav-indentation-guide-color: #303540 !important;
  --nav-item-background-active: #303540 !important;
  --nav-item-background-hover: #23272f !important;
  --nav-item-color: #b2b6bf !important;
  --nav-item-color-active: #cbced5 !important;
  --nav-item-color-highlighted: #88c0d0 !important;
  --nav-item-color-hover: #bfc2ca !important;
  --nav-item-color-selected: #cbced5 !important;
  --nav-tag-color: #b2b6bf !important;
  --nav-tag-color-active: #bfc2ca !important;
  --nav-tag-color-hover: #bfc2ca !important;
  --nested-padding: 1.1em !important;
  --normal-weight: 400 !important;
  --p-spacing: 1.75rem !important;
  --pdf-background: #121418 !important;
  --pdf-page-background: #121418 !important;
  --pdf-shadow: 0 0 0 1px #303540 !important;
  --pdf-sidebar-background: #121418 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #303540 !important;
  --pill-border-color: #303540 !important;
  --pill-border-color-hover: #484f5c !important;
  --pill-color: #bfc2ca !important;
  --pill-color-hover: #cbced5 !important;
  --pill-color-remove: #b2b6bf !important;
  --pill-color-remove-hover: #88c0d0 !important;
  --prompt-background: #121418 !important;
  --prompt-border-color: #484f5c !important;
  --quote-opening-modifier: #303540 !important;
  --raised-background: color-mix(in srgb, #23272f 65%, transparent) linear-gradient(#23272f, color-mix(in srgb, #23272f 65%, transparent)) !important;
  --ribbon-background: #121418 !important;
  --ribbon-background-collapsed: #121418 !important;
  --scrollbar-active-thumb-bg: #484f5c !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: #303540 !important;
  --search-clear-button-color: #bfc2ca !important;
  --search-icon-color: #bfc2ca !important;
  --search-result-background: #121418 !important;
  --secondary: #88c0d0 !important;
  --setting-group-heading-color: #cbced5 !important;
  --setting-items-background: #191c22 !important;
  --setting-items-border-color: #303540 !important;
  --shadow-color: rgba(0, 0, 0, 0.3) !important;
  --sidebar-background: #191c22 !important;
  --slider-thumb-border-color: #484f5c !important;
  --slider-track-background: #303540 !important;
  --status-bar-background: #191c22 !important;
  --status-bar-border-color: #303540 !important;
  --status-bar-font-size: 11px !important;
  --status-bar-text-color: #bfc2ca !important;
  --suggestion-background: #121418 !important;
  --sync-avatar-color-1: #ff70a6 !important;
  --sync-avatar-color-2: #ffd670 !important;
  --sync-avatar-color-3: #ffd670 !important;
  --sync-avatar-color-4: #84dcc6 !important;
  --sync-avatar-color-5: #00a8e0 !important;
  --sync-avatar-color-6: #88c0d0 !important;
  --sync-avatar-color-7: #68b6ef !important;
  --sync-avatar-color-8: #ff70a6 !important;
  --tab-background-active: #121418 !important;
  --tab-container-background: #121418 !important;
  --tab-divider-color: #484f5c !important;
  --tab-outline-color: #303540 !important;
  --tab-switcher-background: #191c22 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #191c22, transparent) !important;
  --tab-text-color: #b2b6bf !important;
  --tab-text-color-active: #bfc2ca !important;
  --tab-text-color-focused: #bfc2ca !important;
  --tab-text-color-focused-active: #d8dadf !important;
  --tab-text-color-focused-active-current: #cbced5 !important;
  --tab-text-color-focused-highlighted: #88c0d0 !important;
  --table-add-button-border-color: #303540 !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: #303540 !important;
  --table-drag-handle-background-active: hsla(212, 29%, 66%, 0.3) !important;
  --table-drag-handle-color: #b2b6bf !important;
  --table-drag-handle-color-active: #88c0d0 !important;
  --table-header-border-color: #303540 !important;
  --table-header-color: #cbced5 !important;
  --table-header-size: 14px !important;
  --table-selection: hsla(212, 29%, 66%, 0.3) !important;
  --table-selection-border-color: #88c0d0 !important;
  --table-selection-border-radius: 0px !important;
  --table-selection-border-width: 0px !important;
  --table-text-size: 14px !important;
  --tag-color: #88c0d0 !important;
  --tag-color-hover: #88c0d0 !important;
  --tertiary: #8fbcbb !important;
  --text-accent: #88c0d0 !important;
  --text-accent-hover: #8fbcbb !important;
  --text-blockquote: #bfc2ca !important;
  --text-bold: #d8dadf !important;
  --text-code: #8fbcbb !important;
  --text-error: #ff70a6 !important;
  --text-faint: #b2b6bf !important;
  --text-formatting: #484f5c !important;
  --text-highlight-bg: rgba(209, 154, 102, 0.3) !important;
  --text-highlight-bg-active: rgba(209, 154, 102, 0.5) !important;
  --text-information: #68b6ef !important;
  --text-italic: #d8dadf !important;
  --text-muted: #bfc2ca !important;
  --text-normal: #cbced5 !important;
  --text-on-accent: #121418 !important;
  --text-selection: hsla(212, 29%, 66%, 0.3) !important;
  --text-success: #84dcc6 !important;
  --text-warning: #ffd670 !important;
  --textHighlight: rgba(209, 154, 102, 0.3) !important;
  --titlebar-background: #121418 !important;
  --titlebar-background-focused: #191c22 !important;
  --titlebar-border-color: #303540 !important;
  --titlebar-text-color: #bfc2ca !important;
  --titlebar-text-color-focused: #cbced5 !important;
  --top-left-padding-y: 0px !important;
  --vault-profile-color: #bfc2ca !important;
  --vault-profile-color-hover: #cbced5 !important;
  --workspace-background-translucent: hsla(220, 10%, 12%, 0.7) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 20, 24);
  color: rgb(203, 206, 213);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(18, 20, 24);
  color: rgb(203, 206, 213);
}

html body .bases-table thead th {
  border-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

html body .canvas-node {
  border-color: rgb(203, 206, 213);
}

html body .canvas-node-content {
  color: rgb(203, 206, 213);
}

html body .canvas-node-file {
  color: rgb(203, 206, 213);
}

html body .canvas-node-group {
  border-color: rgb(203, 206, 213);
}

html body .canvas-sidebar {
  background-color: rgb(25, 28, 34);
  border-color: rgb(203, 206, 213);
}

html body .note-properties {
  border-color: rgb(48, 53, 64);
}

html body .note-properties-key {
  color: rgb(191, 194, 202);
}

html body .note-properties-row {
  border-color: rgb(191, 194, 202);
}

html body .note-properties-tags {
  border-radius: 27.82px;
  color: rgb(136, 192, 208);
}

html body .note-properties-value {
  color: rgb(191, 194, 202);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 28, 34);
  color: rgb(203, 206, 213);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 53, 64);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 20, 24);
  border-left-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

html body div#quartz-root {
  background-color: rgb(18, 20, 24);
  color: rgb(203, 206, 213);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body .page article p > em, html em {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body .page article p > i, html i {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body .page article p > strong, html strong {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body .text-highlight {
  background-color: rgba(209, 154, 102, 0.3);
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body del {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body h1.article-title {
  color: rgb(203, 206, 213);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(178, 182, 191);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(136, 192, 208);
  border-color: rgb(136, 192, 208);
}

html body p {
  color: rgb(191, 194, 202);
  outline: rgb(191, 194, 202) none 0px;
  text-decoration-color: rgb(191, 194, 202);
}`,
    links: `html body a.external, html footer a {
  color: rgb(136, 192, 208);
  outline: rgb(136, 192, 208) none 0px;
  text-decoration-color: rgb(136, 192, 208);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 192, 208);
  outline: rgb(136, 192, 208) none 0px;
  text-decoration-color: rgb(136, 192, 208);
}

html body a.internal.broken {
  color: rgb(136, 192, 208);
  outline: rgb(136, 192, 208) none 0px;
}`,
    lists: `html body dd {
  color: rgb(203, 206, 213);
}

html body dt {
  color: rgb(203, 206, 213);
}

html body ol > li {
  color: rgb(203, 206, 213);
}

html body ol.overflow {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body ul > li {
  color: rgb(203, 206, 213);
}

html body ul.overflow {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(178, 182, 191);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body table {
  color: rgb(203, 206, 213);
  margin-top: 28px;
  width: 201.438px;
}

html body td {
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

html body th {
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}`,
    code: `html body code {
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 214, 112);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 214, 112);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 214, 112);
  border-left-color: rgb(255, 214, 112);
  border-right-color: rgb(255, 214, 112);
  border-top-color: rgb(255, 214, 112);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
}

html body pre:has(> code) {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
}`,
    images: `html body audio {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body figcaption {
  color: rgb(203, 206, 213);
}

html body figure {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body img {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body video {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
}

html body .footnotes {
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}

html body .transclude {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body .transclude-inner {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(178, 182, 191);
  border-left-color: rgb(178, 182, 191);
  border-right-color: rgb(178, 182, 191);
  border-top-color: rgb(178, 182, 191);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(203, 206, 213);
  text-decoration-color: rgb(203, 206, 213);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 0, 168, 224;
  background-color: rgba(0, 168, 224, 0.1);
  border-bottom-color: rgba(0, 168, 224, 0.25);
  border-left-color: rgba(0, 168, 224, 0.25);
  border-right-color: rgba(0, 168, 224, 0.25);
  border-top-color: rgba(0, 168, 224, 0.25);
}

html body .callout[data-callout="bug"] {
  --callout-color: 255, 112, 166;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
}

html body .callout[data-callout="danger"] {
  --callout-color: 255, 112, 166;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
}

html body .callout[data-callout="example"] {
  --callout-color: 104, 182, 239;
  background-color: rgba(104, 182, 239, 0.1);
  border-bottom-color: rgba(104, 182, 239, 0.25);
  border-left-color: rgba(104, 182, 239, 0.25);
  border-right-color: rgba(104, 182, 239, 0.25);
  border-top-color: rgba(104, 182, 239, 0.25);
}

html body .callout[data-callout="failure"] {
  --callout-color: 255, 112, 166;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
}

html body .callout[data-callout="info"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

html body .callout[data-callout="note"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

html body .callout[data-callout="question"] {
  --callout-color: 255, 214, 112;
  background-color: rgba(255, 214, 112, 0.1);
  border-bottom-color: rgba(255, 214, 112, 0.25);
  border-left-color: rgba(255, 214, 112, 0.25);
  border-right-color: rgba(255, 214, 112, 0.25);
  border-top-color: rgba(255, 214, 112, 0.25);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 132, 220, 198;
  background-color: rgba(132, 220, 198, 0.1);
  border-bottom-color: rgba(132, 220, 198, 0.25);
  border-left-color: rgba(132, 220, 198, 0.25);
  border-right-color: rgba(132, 220, 198, 0.25);
  border-top-color: rgba(132, 220, 198, 0.25);
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 168, 224;
  background-color: rgba(0, 168, 224, 0.1);
  border-bottom-color: rgba(0, 168, 224, 0.25);
  border-left-color: rgba(0, 168, 224, 0.25);
  border-right-color: rgba(0, 168, 224, 0.25);
  border-top-color: rgba(0, 168, 224, 0.25);
}

html body .callout[data-callout="todo"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

html body .callout[data-callout="warning"] {
  --callout-color: 255, 214, 112;
  background-color: rgba(255, 214, 112, 0.1);
  border-bottom-color: rgba(255, 214, 112, 0.25);
  border-left-color: rgba(255, 214, 112, 0.25);
  border-right-color: rgba(255, 214, 112, 0.25);
  border-top-color: rgba(255, 214, 112, 0.25);
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
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}

html body .search > .search-container > .search-space {
  background-color: rgb(18, 20, 24);
  border-bottom-color: rgb(72, 79, 92);
  border-left-color: rgb(72, 79, 92);
  border-right-color: rgb(72, 79, 92);
  border-top-color: rgb(72, 79, 92);
}

html body .search > .search-container > .search-space > * {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(203, 206, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(203, 206, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(203, 206, 213);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(72, 79, 92);
  border-left-color: rgb(72, 79, 92);
  border-right-color: rgb(72, 79, 92);
  border-top-color: rgb(72, 79, 92);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 28, 34);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(203, 206, 213);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
}

html body a.internal.tag-link::before {
  color: rgb(136, 192, 208);
}

html body h1 {
  color: rgb(203, 206, 213);
}

html body h2 {
  color: rgb(203, 206, 213);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(203, 206, 213);
}

html body h3 {
  color: rgb(203, 206, 213);
}

html body h4 {
  color: rgb(203, 206, 213);
}

html body h5 {
  color: rgb(203, 206, 213);
}

html body h6 {
  color: rgb(203, 206, 213);
}

html body hr {
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
}`,
    scrollbars: `html body .callout {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

html body ::-webkit-scrollbar {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}

html body ::-webkit-scrollbar-track {
  background: rgb(18, 20, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 20, 24);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(178, 182, 191);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(178, 182, 191);
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(48, 53, 64);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(203, 206, 213);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(178, 182, 191);
  border-left-color: rgb(178, 182, 191);
  border-right-color: rgb(178, 182, 191);
  border-top-color: rgb(178, 182, 191);
  color: rgb(178, 182, 191);
}`,
    footer: `html body footer {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(191, 194, 202);
}

html body footer ul li a {
  color: rgb(191, 194, 202);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(203, 206, 213);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 182, 191);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 182, 191);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body li.section-li > .section .meta {
  color: rgb(178, 182, 191);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 182, 191);
}

html body ul.section-ul {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(178, 182, 191);
  border-left-color: rgb(178, 182, 191);
  border-right-color: rgb(178, 182, 191);
  border-top-color: rgb(178, 182, 191);
  color: rgb(178, 182, 191);
}

html body .darkmode svg {
  color: rgb(178, 182, 191);
  stroke: rgb(178, 182, 191);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

html body .breadcrumb-element p {
  color: rgb(178, 182, 191);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
}

html body .metadata {
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(191, 194, 202);
}

html body .metadata-properties {
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

html body .navigation-progress {
  background-color: rgb(25, 28, 34);
}

html body .page-header h2.page-title {
  color: rgb(203, 206, 213);
}

html body abbr {
  color: rgb(203, 206, 213);
}

html body details {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body input[type=text] {
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

html body kbd {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(191, 194, 202);
  border-left-color: rgb(191, 194, 202);
  border-right-color: rgb(191, 194, 202);
  border-top-color: rgb(191, 194, 202);
  color: rgb(191, 194, 202);
}

html body progress {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}

html body sub {
  color: rgb(203, 206, 213);
}

html body summary {
  color: rgb(203, 206, 213);
}

html body sup {
  color: rgb(203, 206, 213);
}

html body ul.tags > li {
  color: rgb(136, 192, 208);
}`,
  },
  light: {},
};
