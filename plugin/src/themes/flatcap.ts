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
  --shiki-active-tab-border-color: #bfc2ca !important;
  --shiki-code-background: #191c22 !important;
  --shiki-code-block-spacing: 1.75rem !important;
  --shiki-code-comment: #b2b6bf !important;
  --shiki-code-function: #84dcc6 !important;
  --shiki-code-important: #ffd670 !important;
  --shiki-code-keyword: #ff70a6 !important;
  --shiki-code-normal: #bfc2ca !important;
  --shiki-code-property: #00a8e0 !important;
  --shiki-code-punctuation: #bfc2ca !important;
  --shiki-code-string: #ffd670 !important;
  --shiki-code-value: #68b6ef !important;
  --shiki-gutter-border-color: #303540 !important;
  --shiki-gutter-text-color: #b2b6bf !important;
  --shiki-gutter-text-color-highlight: #bfc2ca !important;
  --shiki-highlight-green: rgba(132, 220, 198, 0.5) !important;
  --shiki-highlight-green-background: rgba(132, 220, 198, 0.1) !important;
  --shiki-highlight-neutral: #bfc2ca !important;
  --shiki-highlight-red: rgba(255, 112, 166, 0.5) !important;
  --shiki-highlight-red-background: rgba(255, 112, 166, 0.1) !important;
  --shiki-terminal-dots-color: #b2b6bf !important;
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
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body .markdown-rendered p > em, html em {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body .markdown-rendered p > i, html i {
  color: rgb(203, 206, 213);
  outline: rgb(203, 206, 213) none 0px;
  text-decoration-color: rgb(203, 206, 213);
}

html body .markdown-rendered p > strong, html strong {
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
    links: `html body a.external-link, html footer a {
  color: rgb(136, 192, 208);
  outline: rgb(136, 192, 208) none 0px;
  text-decoration-color: rgb(136, 192, 208);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 192, 208);
  outline: rgb(136, 192, 208) none 0px;
  text-decoration-color: rgb(136, 192, 208);
}

html body a.internal-link.broken {
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
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgb(48, 53, 64);
  border-left-color: rgb(48, 53, 64);
  border-right-color: rgb(48, 53, 64);
  border-top-color: rgb(48, 53, 64);
  color: rgb(191, 194, 202);
}

html body pre:has(> code) {
  background-color: rgb(25, 28, 34);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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

html body li.task-list-item[data-task="#"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(203, 206, 213);
}

html li.task-list-item[data-task="body"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="."] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="="] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(72, 79, 92);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(72, 79, 92);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(203, 206, 213);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(203, 206, 213);
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
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 20, 24);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 20, 24);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 214, 112);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 214, 112);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 168, 224);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 192, 208);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 112, 166);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 112, 166);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 112, 166);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 112, 166);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 192, 208);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 214, 112);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 214, 112);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 182, 239);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 112, 166);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 220, 198);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 220, 198);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 220, 198);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 0, 168, 224;
  background: rgba(0, 168, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 168, 224, 0.1);
  border-bottom-color: rgba(0, 168, 224, 0.25);
  border-left-color: rgba(0, 168, 224, 0.25);
  border-right-color: rgba(0, 168, 224, 0.25);
  border-top-color: rgba(0, 168, 224, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="bug"] {
  --callout-color: 255, 112, 166;
  background: rgba(255, 112, 166, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="danger"] {
  --callout-color: 255, 112, 166;
  background: rgba(255, 112, 166, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="example"] {
  --callout-color: 104, 182, 239;
  background: rgba(104, 182, 239, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(104, 182, 239, 0.1);
  border-bottom-color: rgba(104, 182, 239, 0.25);
  border-left-color: rgba(104, 182, 239, 0.25);
  border-right-color: rgba(104, 182, 239, 0.25);
  border-top-color: rgba(104, 182, 239, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="failure"] {
  --callout-color: 255, 112, 166;
  background: rgba(255, 112, 166, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 112, 166, 0.1);
  border-bottom-color: rgba(255, 112, 166, 0.25);
  border-left-color: rgba(255, 112, 166, 0.25);
  border-right-color: rgba(255, 112, 166, 0.25);
  border-top-color: rgba(255, 112, 166, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="info"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="note"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="question"] {
  --callout-color: 255, 214, 112;
  background: rgba(255, 214, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 214, 112, 0.1);
  border-bottom-color: rgba(255, 214, 112, 0.25);
  border-left-color: rgba(255, 214, 112, 0.25);
  border-right-color: rgba(255, 214, 112, 0.25);
  border-top-color: rgba(255, 214, 112, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="success"] {
  --callout-color: 132, 220, 198;
  background: rgba(132, 220, 198, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(132, 220, 198, 0.1);
  border-bottom-color: rgba(132, 220, 198, 0.25);
  border-left-color: rgba(132, 220, 198, 0.25);
  border-right-color: rgba(132, 220, 198, 0.25);
  border-top-color: rgba(132, 220, 198, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 168, 224;
  background: rgba(0, 168, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 168, 224, 0.1);
  border-bottom-color: rgba(0, 168, 224, 0.25);
  border-left-color: rgba(0, 168, 224, 0.25);
  border-right-color: rgba(0, 168, 224, 0.25);
  border-top-color: rgba(0, 168, 224, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="todo"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="warning"] {
  --callout-color: 255, 214, 112;
  background: rgba(255, 214, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 214, 112, 0.1);
  border-bottom-color: rgba(255, 214, 112, 0.25);
  border-left-color: rgba(255, 214, 112, 0.25);
  border-right-color: rgba(255, 214, 112, 0.25);
  border-top-color: rgba(255, 214, 112, 0.25);
  color: rgb(203, 206, 213);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 136, 192, 208;
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 192, 208);
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(203, 206, 213);
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

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
}

html body a.internal-link.tag-link::before {
  color: rgb(136, 192, 208);
}

html body h1 {
  color: rgb(203, 206, 213);
}

html body h1.article-title {
  color: rgb(203, 206, 213);
  font-size: 18px;
  font-weight: 600;
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
}`,
    explorer: `html body .nav-files-container .tree-item-children {
  border-left-color: rgb(48, 53, 64);
}

html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(178, 182, 191);
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(178, 182, 191);
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
    canvas: `html body .canvas-node {
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
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(48, 53, 64);
  color: rgb(203, 206, 213);
}`,
    properties: `html body .metadata {
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

html body div#quartz-root {
  background-color: rgb(18, 20, 24);
  color: rgb(203, 206, 213);
}

html body ol.overflow {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
}`,
    stacked: `html body .stacked-page {
  background-color: rgb(25, 28, 34);
  border-color: rgb(203, 206, 213);
}

html body .stacked-page-header {
  background-color: rgb(25, 28, 34);
}

html body .stacked-page.active {
  border-color: rgb(203, 206, 213);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(203, 206, 213);
  border-left-color: rgb(203, 206, 213);
  border-right-color: rgb(203, 206, 213);
  border-top-color: rgb(203, 206, 213);
  color: rgb(203, 206, 213);
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
