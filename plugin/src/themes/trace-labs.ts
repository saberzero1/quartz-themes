import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "trace-labs", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 212 !important;
  --accent-h-theme: 212 !important;
  --accent-l: 67% !important;
  --accent-l-theme: 67% !important;
  --accent-s: 100% !important;
  --accent-s-theme: 100% !important;
  --background-modifier-active-hover: rgba(87, 165, 255, 0.15) !important;
  --background-modifier-border: #30363d !important;
  --background-modifier-border-focus: rgb(87, 165, 255) !important;
  --background-modifier-border-hover: #30363d !important;
  --background-modifier-error: #F47067 !important;
  --background-modifier-error-hover: #F47067 !important;
  --background-modifier-error-rgb: 248, 81, 73 !important;
  --background-modifier-form-field: #010409 !important;
  --background-modifier-form-field-hover: #010409 !important;
  --background-modifier-hover: rgba(177, 186, 196, 0.12) !important;
  --background-modifier-hover-alpha: 0.12 !important;
  --background-modifier-success: #7ee787 !important;
  --background-modifier-success-rgb: 126, 231, 135 !important;
  --background-primary: #1d1b1b !important;
  --background-primary-alt: #161b22 !important;
  --background-secondary: #0f0909 !important;
  --background-secondary-alt: #010409 !important;
  --bases-cards-background: #1d1b1b !important;
  --bases-cards-cover-background: #161b22 !important;
  --bases-cards-shadow: 0 0 0 1px #30363d !important;
  --bases-cards-shadow-hover: 0 0 0 1px #30363d !important;
  --bases-embed-border-color: #30363d !important;
  --bases-group-heading-property-color: #8b949e !important;
  --bases-group-heading-value-weight: 700 !important;
  --bases-table-border-color: #30363d !important;
  --bases-table-cell-background-active: #1d1b1b !important;
  --bases-table-cell-background-disabled: #161b22 !important;
  --bases-table-cell-background-selected: rgba(87, 165, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(87, 165, 255) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(87, 165, 255) !important;
  --bases-table-group-background: #161b22 !important;
  --bases-table-header-background: #1d1b1b !important;
  --bases-table-header-background-hover: rgba(177, 186, 196, 0.12) !important;
  --bases-table-header-color: #8b949e !important;
  --bases-table-summary-background: #1d1b1b !important;
  --bases-table-summary-background-hover: rgba(177, 186, 196, 0.12) !important;
  --blockquote-border-color: rgb(87, 165, 255) !important;
  --blur-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent)) !important;
  --bold-color: #d400ff !important;
  --bold-weight: 700 !important;
  --callout-bug: 248, 81, 73;
  --callout-error: 248, 81, 73;
  --callout-fail: 248, 81, 73;
  --callout-question: 224, 222, 113;
  --callout-success: 126, 231, 135;
  --canvas-background: #1d1b1b !important;
  --canvas-card-label-color: #6e7681 !important;
  --canvas-color-1: 248, 81, 73 !important;
  --canvas-color-4: 126, 231, 135 !important;
  --canvas-dot-pattern: #30363d !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #6e7681 !important;
  --checkbox-border-color-hover: #8b949e !important;
  --checkbox-color: rgb(87, 165, 255) !important;
  --checkbox-color-hover: rgb(66, 154, 255) !important;
  --checkbox-marker-color: #1d1b1b !important;
  --checklist-done-color: #8b949e !important;
  --code-background: #161b22 !important;
  --code-border-color: #30363d !important;
  --code-bracket-background: rgba(177, 186, 196, 0.12) !important;
  --code-comment: #6e7681 !important;
  --code-function: #FFA657 !important;
  --code-important: #FFA657 !important;
  --code-keyword: #F47067 !important;
  --code-normal: #8b949e !important;
  --code-operator: #F47067 !important;
  --code-property: #00ffff !important;
  --code-punctuation: #8b949e !important;
  --code-string: #A5D6FF !important;
  --code-tag: #F47067 !important;
  --code-value: #D2A8FF !important;
  --collapse-icon-color: #6e7681 !important;
  --collapse-icon-color-collapsed: rgb(66, 154, 255) !important;
  --color-accent: rgb(87, 165, 255) !important;
  --color-accent-1: rgb(66, 154, 255) !important;
  --color-accent-2: rgb(107, 176, 255) !important;
  --color-accent-hsl: 212, 100%, 67% !important;
  --color-base-00: #0d1117 !important;
  --color-base-10: #161b22 !important;
  --color-base-100: #ffffff !important;
  --color-base-20: #161b22 !important;
  --color-base-25: #010409 !important;
  --color-base-30: #30363d !important;
  --color-base-35: #21262d !important;
  --color-base-40: #30363d !important;
  --color-base-50: #6e7681 !important;
  --color-base-60: #999 !important;
  --color-base-70: #8b949e !important;
  --color-blue: #00ffff !important;
  --color-btn-primary-bg: #238636 !important;
  --color-btn-primary-hover-bg: #2ea043 !important;
  --color-cyan: #A5D6FF !important;
  --color-green: #7ee787 !important;
  --color-green-rgb: 126, 231, 135 !important;
  --color-orange: #FFA657 !important;
  --color-pink: #f778ba !important;
  --color-purple: #D2A8FF !important;
  --color-red: #F47067 !important;
  --color-red-rgb: 248, 81, 73 !important;
  --color-tlgreen: #84EDB5 !important;
  --color-yellow: #d29922 !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: #30363d !important;
  --divider-color-hover: rgb(87, 165, 255) !important;
  --dropdown-background: #30363d !important;
  --dropdown-background-hover: #21262d !important;
  --embed-block-shadow-hover: 0 0 0 1px #30363d,
        inset 0 0 0 1px #30363d !important;
  --embed-border-left: 2px solid rgb(87, 165, 255) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(87, 165, 255) !important;
  --file-header-background: #1d1b1b !important;
  --file-header-background-focused: #1d1b1b !important;
  --file-margins: 32px !important;
  --flair-background: #30363d !important;
  --flair-color: #ffffff !important;
  --font-semibold: 700 !important;
  --footnote-divider-color: #30363d !important;
  --footnote-id-color: #8b949e !important;
  --footnote-id-color-no-occurrences: #6e7681 !important;
  --footnote-input-background-active: rgba(177, 186, 196, 0.12) !important;
  --graph-line: #21262d !important;
  --graph-node: #84EDB5 !important;
  --graph-node-attachment: #d29922 !important;
  --graph-node-focused: rgb(66, 154, 255) !important;
  --graph-node-tag: #7ee787 !important;
  --graph-node-unresolved: #6e7681 !important;
  --graph-text: #ffffff !important;
  --gray: #8b949e !important;
  --h-color-theme: #7ee787 !important;
  --h1-color: #84EDB5 !important;
  --h1-color-theme: #84EDB5 !important;
  --h1-size: 3.5em !important;
  --h2-color: #84EDB5 !important;
  --h2-color-theme: #84EDB5 !important;
  --h2-size: 3.0em !important;
  --h2-weight: 600 !important;
  --h3-color: #84EDB5 !important;
  --h3-color-theme: #84EDB5 !important;
  --h3-size: 2.0em !important;
  --h3-weight: 600 !important;
  --h4-color: #84EDB5 !important;
  --h4-color-theme: #84EDB5 !important;
  --h4-size: 1.0em !important;
  --h4-weight: 600 !important;
  --h5-color: #84EDB5 !important;
  --h5-color-theme: #84EDB5 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-color: #84EDB5 !important;
  --h6-color-theme: #84EDB5 !important;
  --h6-size: 1.12em !important;
  --heading-formatting: #6e7681 !important;
  --highlight: rgba(177, 186, 196, 0.12) !important;
  --hr-color: #30363d !important;
  --icon-color: #8b949e !important;
  --icon-color-active: rgb(66, 154, 255) !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #8b949e !important;
  --inline-code-background: #6e768166 !important;
  --inline-title-color: #84EDB5 !important;
  --inline-title-size: 3.5em !important;
  --input-date-separator: #6e7681 !important;
  --input-placeholder-color: #6e7681 !important;
  --input-shadow: inset 0 0 0 1px #f0f6fc1a !important;
  --input-shadow-hover: inset 0 0 0 1px #8b949e !important;
  --interactive-accent: rgb(87, 165, 255) !important;
  --interactive-accent-hover: rgb(66, 154, 255) !important;
  --interactive-accent-hsl: 212, 100%, 67% !important;
  --interactive-hover: #21262d !important;
  --interactive-normal: #30363d !important;
  --italic-color: #ffd900 !important;
  --kanban-background: #1d1b1b !important;
  --kanban-item-background: #161b22 !important;
  --kanban-lane-background: #010409 !important;
  --kanban-lane-border: #21262d !important;
  --kanban-lane-count: #21262d !important;
  --kanban-options-btn: #30363d !important;
  --light: #1d1b1b !important;
  --lightgray: #0f0909 !important;
  --link-color: #00ffff !important;
  --link-color-hover: #84EDB5 !important;
  --link-decoration: none !important;
  --link-external-color: #00ffff !important;
  --link-external-color-hover: rgb(107, 176, 255) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #00ffff !important;
  --link-unresolved-decoration-color: rgba(87, 165, 255, 0.3) !important;
  --list-bullet-size: 7px !important;
  --list-indent: 3em !important;
  --list-marker-color: #84EDB5 !important;
  --list-marker-color-collapsed: rgb(66, 154, 255) !important;
  --list-marker-color-hover: #8b949e !important;
  --menu-background: #0f0909 !important;
  --menu-border-color: #30363d !important;
  --menu-shadow: none !important;
  --metadata-border-color: #30363d !important;
  --metadata-divider-color: #30363d !important;
  --metadata-input-background-active: rgba(177, 186, 196, 0.12) !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-background-active: rgba(177, 186, 196, 0.12) !important;
  --metadata-label-text-color: #8b949e !important;
  --metadata-label-text-color-hover: #8b949e !important;
  --metadata-property-background-active: rgba(177, 186, 196, 0.12) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(87, 165, 255) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #30363d !important;
  --modal-background: #1d1b1b !important;
  --modal-border-color: #30363d !important;
  --nav-collapse-icon-color: #6e7681 !important;
  --nav-collapse-icon-color-collapsed: #6e7681 !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #6e7681 !important;
  --nav-heading-color-collapsed-hover: #8b949e !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-background-active: rgba(177, 186, 196, 0.12) !important;
  --nav-item-background-hover: rgba(177, 186, 196, 0.12) !important;
  --nav-item-background-selected: rgba(87, 165, 255, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #8b949e !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: rgb(107, 176, 255) !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #6e7681 !important;
  --nav-tag-color-active: #8b949e !important;
  --nav-tag-color-hover: #8b949e !important;
  --nav-tag-weight: 700 !important;
  --pdf-background: #1d1b1b !important;
  --pdf-page-background: #1d1b1b !important;
  --pdf-shadow: 0 0 0 1px #30363d !important;
  --pdf-sidebar-background: #1d1b1b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #30363d !important;
  --pill-border-color: #30363d !important;
  --pill-border-color-hover: #30363d !important;
  --pill-color: #8b949e !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #6e7681 !important;
  --pill-color-remove-hover: rgb(66, 154, 255) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #1d1b1b !important;
  --prompt-border-color: #30363d !important;
  --raised-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent)) !important;
  --rgb-hover: 177, 186, 196 !important;
  --ribbon-background: #0f0909 !important;
  --ribbon-background-collapsed: #1d1b1b !important;
  --search-clear-button-color: #8b949e !important;
  --search-icon-color: #8b949e !important;
  --search-result-background: #1d1b1b !important;
  --secondary: rgb(66, 154, 255) !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-group-heading-weight: 700 !important;
  --setting-items-background: #161b22 !important;
  --setting-items-border-color: #30363d !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --slider-thumb-border-color: #30363d !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #30363d !important;
  --status-bar-background: #0f0909 !important;
  --status-bar-border-color: #30363d !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #8b949e !important;
  --suggestion-background: #1d1b1b !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #F47067 !important;
  --sync-avatar-color-2: #FFA657 !important;
  --sync-avatar-color-3: #d29922 !important;
  --sync-avatar-color-4: #7ee787 !important;
  --sync-avatar-color-5: #A5D6FF !important;
  --sync-avatar-color-6: #00ffff !important;
  --sync-avatar-color-7: #D2A8FF !important;
  --sync-avatar-color-8: #f778ba !important;
  --tab-background-active: #1d1b1b !important;
  --tab-container-background: #0f0909 !important;
  --tab-divider-color: #30363d !important;
  --tab-outline-color: #30363d !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #0f0909 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f0909, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(87, 165, 255) !important;
  --tab-text-color: #6e7681 !important;
  --tab-text-color-active: #8b949e !important;
  --tab-text-color-focused: #8b949e !important;
  --tab-text-color-focused-active: #8b949e !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: rgb(66, 154, 255) !important;
  --table-add-button-border-color: #30363d !important;
  --table-border-color: #30363d !important;
  --table-drag-handle-background-active: rgb(87, 165, 255) !important;
  --table-drag-handle-color: #6e7681 !important;
  --table-header-border-color: #30363d !important;
  --table-header-color: #ffffff !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(87, 165, 255, 0.1) !important;
  --table-selection-border-color: rgb(87, 165, 255) !important;
  --table-white-space: normal !important;
  --tag-background: rgba(87, 165, 255, 0.1) !important;
  --tag-background-hover: rgba(87, 165, 255, 0.2) !important;
  --tag-border-color: rgba(87, 165, 255, 0.15) !important;
  --tag-border-color-hover: rgba(87, 165, 255, 0.15) !important;
  --tag-color: rgb(66, 154, 255) !important;
  --tag-color-hover: rgb(66, 154, 255) !important;
  --tertiary: rgb(107, 176, 255) !important;
  --text-accent: rgb(66, 154, 255) !important;
  --text-accent-hover: rgb(107, 176, 255) !important;
  --text-error: #F47067 !important;
  --text-faint: #6e7681 !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #8b949e !important;
  --text-normal: #ffffff !important;
  --text-selection: rgba(87, 165, 255, 0.4) !important;
  --text-success: #7ee787 !important;
  --text-warning: #FFA657 !important;
  --textHighlight: rgba(177, 186, 196, 0.12) !important;
  --titlebar-background: #0f0909 !important;
  --titlebar-background-focused: #010409 !important;
  --titlebar-border-color: #30363d !important;
  --titlebar-text-color: #8b949e !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-name-color: #ffffff !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 9, 9);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 27, 27);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 9, 9);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 54, 61);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 9, 9);
  border-left-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(29, 27, 27);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(212, 0, 255);
  outline: rgb(212, 0, 255) none 0px;
  text-decoration: rgb(212, 0, 255);
  text-decoration-color: rgb(212, 0, 255);
}

body .page article p > em, em {
  color: rgb(255, 217, 0);
  outline: rgb(255, 217, 0) none 0px;
  text-decoration: rgb(255, 217, 0);
  text-decoration-color: rgb(255, 217, 0);
}

body .page article p > i, i {
  color: rgb(255, 217, 0);
  outline: rgb(255, 217, 0) none 0px;
  text-decoration: rgb(255, 217, 0);
  text-decoration-color: rgb(255, 217, 0);
}

body .page article p > strong, strong {
  color: rgb(212, 0, 255);
  outline: rgb(212, 0, 255) none 0px;
  text-decoration: rgb(212, 0, 255);
  text-decoration-color: rgb(212, 0, 255);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(139, 148, 158);
  outline: rgb(139, 148, 158) none 0px;
  text-decoration: rgb(139, 148, 158);
  text-decoration-color: rgb(139, 148, 158);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
}

body a.internal.broken {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgba(87, 165, 255, 0.3);
  text-decoration-color: rgba(87, 165, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(29, 27, 27);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(29, 27, 27);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  width: 241.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(15, 9, 9);
}

body td {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body th {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `body code {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 166, 87);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 166, 87);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 166, 87);
  border-left-color: rgb(255, 166, 87);
  border-right-color: rgb(255, 166, 87);
  border-top-color: rgb(255, 166, 87);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(139, 148, 158);
  text-decoration: line-through rgb(139, 148, 158);
  text-decoration-color: rgb(139, 148, 158);
}

body input[type=checkbox] {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `body .callout[data-callout="bug"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(248, 81, 73, 0.1);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(248, 81, 73, 0.1);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(248, 81, 73, 0.1);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-left-color: rgba(248, 81, 73, 0.25);
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 126, 231, 135;
  background-color: rgba(126, 231, 135, 0.1);
  border-bottom-color: rgba(126, 231, 135, 0.25);
  border-left-color: rgba(126, 231, 135, 0.25);
  border-right-color: rgba(126, 231, 135, 0.25);
  border-top-color: rgba(126, 231, 135, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 27, 27);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 9, 9);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(177, 186, 196, 0.12);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(87, 165, 255, 0.1);
  border-bottom-color: rgba(87, 165, 255, 0.15);
  border-left-color: rgba(87, 165, 255, 0.15);
  border-right-color: rgba(87, 165, 255, 0.15);
  border-top-color: rgba(87, 165, 255, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(67, 155, 255);
}

body h1 {
  color: rgb(132, 237, 181);
}

body h2 {
  color: rgb(132, 237, 181);
}

body h2.page-title, h2.page-title a {
  color: rgb(132, 237, 181);
}

body h3 {
  color: rgb(132, 237, 181);
}

body h4 {
  color: rgb(132, 237, 181);
}

body h5 {
  color: rgb(132, 237, 181);
}

body h6 {
  color: rgb(132, 237, 181);
}

body hr {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(177, 186, 196, 0.12);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}`,
    footer: `body footer {
  background-color: rgb(15, 9, 9);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(139, 148, 158);
}

body footer ul li a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 148, 158);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(139, 148, 158);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body .darkmode svg {
  color: rgb(139, 148, 158);
  stroke: rgb(139, 148, 158);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body .breadcrumb-element p {
  color: rgb(110, 118, 129);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(139, 148, 158);
}

body .metadata-properties {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body .navigation-progress {
  background-color: rgb(15, 9, 9);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body kbd {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
