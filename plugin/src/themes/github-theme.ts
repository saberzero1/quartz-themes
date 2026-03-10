import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "github-theme",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
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
  --background-primary: #0d1117 !important;
  --background-primary-alt: #161b22 !important;
  --background-secondary: #161b22 !important;
  --background-secondary-alt: #010409 !important;
  --bases-cards-background: #0d1117 !important;
  --bases-cards-cover-background: #161b22 !important;
  --bases-cards-shadow: 0 0 0 1px #30363d !important;
  --bases-cards-shadow-hover: 0 0 0 1px #30363d !important;
  --bases-embed-border-color: #30363d !important;
  --bases-group-heading-property-color: #8b949e !important;
  --bases-table-border-color: #30363d !important;
  --bases-table-cell-background-active: #0d1117 !important;
  --bases-table-cell-background-disabled: #161b22 !important;
  --bases-table-cell-background-selected: rgba(87, 165, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(87, 165, 255) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(87, 165, 255) !important;
  --bases-table-group-background: #161b22 !important;
  --bases-table-header-background: #0d1117 !important;
  --bases-table-header-background-hover: rgba(177, 186, 196, 0.12) !important;
  --bases-table-header-color: #8b949e !important;
  --bases-table-summary-background: #0d1117 !important;
  --bases-table-summary-background-hover: rgba(177, 186, 196, 0.12) !important;
  --blockquote-border-color: rgb(87, 165, 255) !important;
  --blur-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent)) !important;
  --bold-weight: 600 !important;
  --callout-border-width: 0;
  --callout-bug: 248, 81, 73;
  --callout-error: 248, 81, 73;
  --callout-fail: 248, 81, 73;
  --callout-padding: 0 1em;
  --callout-question: 224, 222, 113;
  --callout-radius: 0;
  --callout-success: 126, 231, 135;
  --canvas-background: #0d1117 !important;
  --canvas-card-label-color: #6e7681 !important;
  --canvas-color-1: 248, 81, 73 !important;
  --canvas-color-4: 126, 231, 135 !important;
  --canvas-dot-pattern: #30363d !important;
  --caret-color: #c9d1d9 !important;
  --checkbox-border-color: #6e7681 !important;
  --checkbox-border-color-hover: #8b949e !important;
  --checkbox-color: rgb(87, 165, 255) !important;
  --checkbox-color-hover: rgb(66, 154, 255) !important;
  --checkbox-marker-color: #0d1117 !important;
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
  --code-property: #6CB6FF !important;
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
  --color-base-100: #c9d1d9 !important;
  --color-base-20: #161b22 !important;
  --color-base-25: #010409 !important;
  --color-base-30: #30363d !important;
  --color-base-35: #21262d !important;
  --color-base-40: #30363d !important;
  --color-base-50: #6e7681 !important;
  --color-base-60: #999 !important;
  --color-base-70: #8b949e !important;
  --color-blue: #6CB6FF !important;
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
  --color-yellow: #d29922 !important;
  --dark: #c9d1d9 !important;
  --darkgray: #c9d1d9 !important;
  --divider-color: #30363d !important;
  --divider-color-hover: rgb(87, 165, 255) !important;
  --dropdown-background: #30363d !important;
  --dropdown-background-hover: #21262d !important;
  --embed-block-shadow-hover: 0 0 0 1px #30363d,
        inset 0 0 0 1px #30363d !important;
  --embed-border-left: 2px solid rgb(87, 165, 255) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(87, 165, 255) !important;
  --file-header-background: #0d1117 !important;
  --file-header-background-focused: #0d1117 !important;
  --file-margins: 32px !important;
  --flair-background: #30363d !important;
  --flair-color: #c9d1d9 !important;
  --footnote-divider-color: #30363d !important;
  --footnote-id-color: #8b949e !important;
  --footnote-id-color-no-occurrences: #6e7681 !important;
  --footnote-input-background-active: rgba(177, 186, 196, 0.12) !important;
  --graph-line: #21262d !important;
  --graph-node: #8b949e !important;
  --graph-node-attachment: #d29922 !important;
  --graph-node-focused: rgb(66, 154, 255) !important;
  --graph-node-tag: #7ee787 !important;
  --graph-node-unresolved: #6e7681 !important;
  --graph-text: #c9d1d9 !important;
  --gray: #8b949e !important;
  --h-color-theme: #7ee787 !important;
  --h1-color: #7ee787 !important;
  --h1-color-theme: #7ee787 !important;
  --h1-size: 2em !important;
  --h2-color: #7ee787 !important;
  --h2-color-theme: #7ee787 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-color: #7ee787 !important;
  --h3-color-theme: #7ee787 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-color: #7ee787 !important;
  --h4-color-theme: #7ee787 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-color: #7ee787 !important;
  --h5-color-theme: #7ee787 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-color: #7ee787 !important;
  --h6-color-theme: #7ee787 !important;
  --h6-size: 1.12em !important;
  --heading-formatting: #6e7681 !important;
  --highlight: rgba(177, 186, 196, 0.12) !important;
  --hr-color: #30363d !important;
  --icon-color: #8b949e !important;
  --icon-color-active: rgb(66, 154, 255) !important;
  --icon-color-focused: #c9d1d9 !important;
  --icon-color-hover: #8b949e !important;
  --inline-code-background: #6e768166 !important;
  --inline-title-color: #7ee787 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #6e7681 !important;
  --input-placeholder-color: #6e7681 !important;
  --input-shadow: inset 0 0 0 1px #f0f6fc1a !important;
  --input-shadow-hover: inset 0 0 0 1px #8b949e !important;
  --interactive-accent: rgb(87, 165, 255) !important;
  --interactive-accent-hover: rgb(66, 154, 255) !important;
  --interactive-accent-hsl: 212, 100%, 67% !important;
  --interactive-hover: #21262d !important;
  --interactive-normal: #30363d !important;
  --kanban-background: #0d1117 !important;
  --kanban-item-background: #161b22 !important;
  --kanban-lane-background: #010409 !important;
  --kanban-lane-border: #21262d !important;
  --kanban-lane-count: #21262d !important;
  --kanban-options-btn: #30363d !important;
  --light: #0d1117 !important;
  --lightgray: #161b22 !important;
  --link-color: rgb(66, 154, 255) !important;
  --link-color-hover: rgb(107, 176, 255) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(66, 154, 255) !important;
  --link-external-color-hover: rgb(107, 176, 255) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(66, 154, 255) !important;
  --link-unresolved-decoration-color: rgba(87, 165, 255, 0.3) !important;
  --list-bullet-size: 5px !important;
  --list-indent: 2em !important;
  --list-marker-color: #c9d1d9 !important;
  --list-marker-color-collapsed: rgb(66, 154, 255) !important;
  --list-marker-color-hover: #8b949e !important;
  --menu-background: #161b22 !important;
  --menu-border-color: #30363d !important;
  --menu-shadow: none !important;
  --metadata-border-color: #30363d !important;
  --metadata-divider-color: #30363d !important;
  --metadata-input-background-active: rgba(177, 186, 196, 0.12) !important;
  --metadata-input-text-color: #c9d1d9 !important;
  --metadata-label-background-active: rgba(177, 186, 196, 0.12) !important;
  --metadata-label-text-color: #8b949e !important;
  --metadata-label-text-color-hover: #8b949e !important;
  --metadata-property-background-active: rgba(177, 186, 196, 0.12) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(87, 165, 255) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #30363d !important;
  --modal-background: #0d1117 !important;
  --modal-border-color: #30363d !important;
  --nav-collapse-icon-color: #6e7681 !important;
  --nav-collapse-icon-color-collapsed: #6e7681 !important;
  --nav-heading-color: #c9d1d9 !important;
  --nav-heading-color-collapsed: #6e7681 !important;
  --nav-heading-color-collapsed-hover: #8b949e !important;
  --nav-heading-color-hover: #c9d1d9 !important;
  --nav-item-background-active: rgba(177, 186, 196, 0.12) !important;
  --nav-item-background-hover: rgba(177, 186, 196, 0.12) !important;
  --nav-item-background-selected: rgba(87, 165, 255, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #8b949e !important;
  --nav-item-color-active: #c9d1d9 !important;
  --nav-item-color-highlighted: rgb(107, 176, 255) !important;
  --nav-item-color-hover: #c9d1d9 !important;
  --nav-item-color-selected: #c9d1d9 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #6e7681 !important;
  --nav-tag-color-active: #8b949e !important;
  --nav-tag-color-hover: #8b949e !important;
  --pdf-background: #0d1117 !important;
  --pdf-page-background: #0d1117 !important;
  --pdf-shadow: 0 0 0 1px #30363d !important;
  --pdf-sidebar-background: #0d1117 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #30363d !important;
  --pill-border-color: #30363d !important;
  --pill-border-color-hover: #30363d !important;
  --pill-color: #8b949e !important;
  --pill-color-hover: #c9d1d9 !important;
  --pill-color-remove: #6e7681 !important;
  --pill-color-remove-hover: rgb(66, 154, 255) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #0d1117 !important;
  --prompt-border-color: #30363d !important;
  --raised-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent)) !important;
  --rgb-hover: 177, 186, 196 !important;
  --ribbon-background: #161b22 !important;
  --ribbon-background-collapsed: #0d1117 !important;
  --search-clear-button-color: #8b949e !important;
  --search-icon-color: #8b949e !important;
  --search-result-background: #0d1117 !important;
  --secondary: rgb(66, 154, 255) !important;
  --setting-group-heading-color: #c9d1d9 !important;
  --setting-items-background: #161b22 !important;
  --setting-items-border-color: #30363d !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --slider-thumb-border-color: #30363d !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #30363d !important;
  --status-bar-background: #161b22 !important;
  --status-bar-border-color: #30363d !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #8b949e !important;
  --suggestion-background: #0d1117 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #F47067 !important;
  --sync-avatar-color-2: #FFA657 !important;
  --sync-avatar-color-3: #d29922 !important;
  --sync-avatar-color-4: #7ee787 !important;
  --sync-avatar-color-5: #A5D6FF !important;
  --sync-avatar-color-6: #6CB6FF !important;
  --sync-avatar-color-7: #D2A8FF !important;
  --sync-avatar-color-8: #f778ba !important;
  --tab-background-active: #0d1117 !important;
  --tab-container-background: #161b22 !important;
  --tab-divider-color: #30363d !important;
  --tab-outline-color: #30363d !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #161b22 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #161b22, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(87, 165, 255) !important;
  --tab-text-color: #6e7681 !important;
  --tab-text-color-active: #8b949e !important;
  --tab-text-color-focused: #8b949e !important;
  --tab-text-color-focused-active: #8b949e !important;
  --tab-text-color-focused-active-current: #c9d1d9 !important;
  --tab-text-color-focused-highlighted: rgb(66, 154, 255) !important;
  --table-add-button-border-color: #30363d !important;
  --table-border-color: #30363d !important;
  --table-drag-handle-background-active: rgb(87, 165, 255) !important;
  --table-drag-handle-color: #6e7681 !important;
  --table-header-border-color: #30363d !important;
  --table-header-color: #c9d1d9 !important;
  --table-header-weight: 600 !important;
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
  --text-normal: #c9d1d9 !important;
  --text-selection: rgba(87, 165, 255, 0.4) !important;
  --text-success: #7ee787 !important;
  --text-warning: #FFA657 !important;
  --textHighlight: rgba(177, 186, 196, 0.12) !important;
  --titlebar-background: #161b22 !important;
  --titlebar-background-focused: #010409 !important;
  --titlebar-border-color: #30363d !important;
  --titlebar-text-color: #8b949e !important;
  --titlebar-text-color-focused: #c9d1d9 !important;
  --vault-name-color: #c9d1d9 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #c9d1d9 !important;
  --vault-profile-color-hover: #c9d1d9 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 54, 61);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 27, 34);
  border-left-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}

body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}`,
    typography: `body .page article p > b, b {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .page article p > em, em {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .page article p > i, i {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .page article p > strong, strong {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .text-highlight {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body del {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: line-through rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body p {
  color: rgb(139, 148, 158);
  outline: rgb(139, 148, 158) none 0px;
  text-decoration: rgb(139, 148, 158);
  text-decoration-color: rgb(139, 148, 158);
}`,
    links: `body a.external, footer a {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration: rgb(67, 155, 255);
  text-decoration-color: rgb(67, 155, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration: rgb(67, 155, 255);
  text-decoration-color: rgb(67, 155, 255);
}

body a.internal.broken {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration: rgba(87, 165, 255, 0.3);
  text-decoration-color: rgba(87, 165, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(201, 209, 217);
}

body dt {
  color: rgb(201, 209, 217);
}

body ol > li {
  color: rgb(201, 209, 217);
}

body ol.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body ul > li {
  color: rgb(201, 209, 217);
}

body ul.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body table {
  color: rgb(201, 209, 217);
  width: 241.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(22, 27, 34);
}

body td {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
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
  color: rgb(201, 209, 217);
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
  color: rgb(201, 209, 217);
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
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body figcaption {
  color: rgb(201, 209, 217);
}

body figure {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body img {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body video {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    embeds: `body .file-embed {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
}

body .footnotes {
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .transclude {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body .transclude-inner {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
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
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='*'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='-'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='/'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='>'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='?'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='I'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='S'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='b'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='c'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='d'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='f'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='i'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='k'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='l'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='p'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='u'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='w'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 248, 81, 73;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(248, 81, 73, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(248, 81, 73, 0.25);
  border-top-color: rgba(248, 81, 73, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: 126, 231, 135;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(126, 231, 135, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-right-color: rgba(126, 231, 135, 0.25);
  border-top-color: rgba(126, 231, 135, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body .search > .search-container > .search-space > * {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 27, 34);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(177, 186, 196, 0.12);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(201, 209, 217);
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
  color: rgb(126, 231, 135);
}

body h2 {
  color: rgb(126, 231, 135);
}

body h2.page-title, h2.page-title a {
  color: rgb(126, 231, 135);
}

body h3 {
  color: rgb(126, 231, 135);
}

body h4 {
  color: rgb(126, 231, 135);
}

body h5 {
  color: rgb(126, 231, 135);
}

body h6 {
  color: rgb(126, 231, 135);
}

body hr {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
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
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}`,
    footer: `body footer {
  background-color: rgb(22, 27, 34);
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
  color: rgb(201, 209, 217);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 148, 158);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body li.section-li > .section .meta {
  color: rgb(139, 148, 158);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
  text-decoration: rgb(139, 148, 158);
}

body ul.section-ul {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
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
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
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
  background-color: rgb(22, 27, 34);
}

body .page-header h2.page-title {
  color: rgb(201, 209, 217);
}

body abbr {
  color: rgb(201, 209, 217);
  text-decoration: underline dotted rgb(201, 209, 217);
}

body details {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
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
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body sub {
  color: rgb(201, 209, 217);
}

body summary {
  color: rgb(201, 209, 217);
}

body sup {
  color: rgb(201, 209, 217);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 212 !important;
  --accent-h-theme: 212 !important;
  --accent-l: 45% !important;
  --accent-l-theme: 45% !important;
  --accent-s: 92% !important;
  --accent-s-theme: 92% !important;
  --background-modifier-active-hover: rgba(9, 108, 220, 0.15) !important;
  --background-modifier-border: #d0d7de !important;
  --background-modifier-border-focus: rgb(9, 108, 220) !important;
  --background-modifier-border-hover: #d0d7de !important;
  --background-modifier-error: #cf222e !important;
  --background-modifier-error-hover: #cf222e !important;
  --background-modifier-error-rgb: 228, 55, 75 !important;
  --background-modifier-form-field: #f6f8fa !important;
  --background-modifier-form-field-hover: #f6f8fa !important;
  --background-modifier-hover: rgba(208, 215, 222, 0.32) !important;
  --background-modifier-hover-alpha: 0.32 !important;
  --background-modifier-success: #0cb54f !important;
  --background-modifier-success-rgb: 12, 181, 79 !important;
  --background-primary-alt: #f6f8fa !important;
  --background-secondary: #f6f8fa !important;
  --bases-cards-cover-background: #f6f8fa !important;
  --bases-cards-shadow: 0 0 0 1px #d0d7de !important;
  --bases-cards-shadow-hover: 0 0 0 1px #d0d7de !important;
  --bases-embed-border-color: #d0d7de !important;
  --bases-group-heading-property-color: #57606a !important;
  --bases-table-border-color: #d0d7de !important;
  --bases-table-cell-background-disabled: #f6f8fa !important;
  --bases-table-cell-background-selected: rgba(9, 108, 220, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(9, 108, 220) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(10, 115, 235) !important;
  --bases-table-group-background: #f6f8fa !important;
  --bases-table-header-background-hover: rgba(208, 215, 222, 0.32) !important;
  --bases-table-header-color: #57606a !important;
  --bases-table-summary-background-hover: rgba(208, 215, 222, 0.32) !important;
  --blockquote-border-color: rgb(10, 115, 235) !important;
  --bold-weight: 600 !important;
  --callout-border-width: 0;
  --callout-bug: 228, 55, 75;
  --callout-error: 228, 55, 75;
  --callout-fail: 228, 55, 75;
  --callout-padding: 0 1em;
  --callout-question: 224, 172, 0;
  --callout-radius: 0;
  --callout-success: 12, 181, 79;
  --canvas-card-label-color: #6e7781 !important;
  --canvas-color-1: 228, 55, 75 !important;
  --canvas-color-4: 12, 181, 79 !important;
  --canvas-dot-pattern: #d0d7de !important;
  --caret-color: #24292f !important;
  --checkbox-border-color: #6e7781 !important;
  --checkbox-border-color-hover: #57606a !important;
  --checkbox-color: rgb(10, 115, 235) !important;
  --checkbox-color-hover: rgb(10, 120, 245) !important;
  --checklist-done-color: #57606a !important;
  --code-background: #f6f8fa !important;
  --code-border-color: #d0d7de !important;
  --code-bracket-background: rgba(208, 215, 222, 0.32) !important;
  --code-comment: #6e7781 !important;
  --code-function: #d96c00 !important;
  --code-important: #d96c00 !important;
  --code-keyword: #cf222e !important;
  --code-normal: #57606a !important;
  --code-operator: #cf222e !important;
  --code-property: #086DDD !important;
  --code-punctuation: #57606a !important;
  --code-string: #2db7b5 !important;
  --code-tag: #cf222e !important;
  --code-value: #876be0 !important;
  --collapse-icon-color: #6e7781 !important;
  --collapse-icon-color-collapsed: rgb(9, 108, 220) !important;
  --color-accent: rgb(9, 108, 220) !important;
  --color-accent-1: rgb(10, 115, 235) !important;
  --color-accent-2: rgb(10, 120, 245) !important;
  --color-accent-hsl: 212, 92%, 45% !important;
  --color-base-10: #f6f8fa !important;
  --color-base-100: #24292f !important;
  --color-base-20: #f6f8fa !important;
  --color-base-25: #f6f8fa !important;
  --color-base-30: #d0d7de !important;
  --color-base-50: #6e7781 !important;
  --color-base-70: #57606a !important;
  --color-blue: #086DDD !important;
  --color-btn-primary-bg: #2da44f !important;
  --color-btn-primary-hover-bg: #2c964a !important;
  --color-cyan: #2db7b5 !important;
  --color-green: #0cb54f !important;
  --color-green-rgb: 12, 181, 79 !important;
  --color-orange: #d96c00 !important;
  --color-pink: #C32B74 !important;
  --color-purple: #876be0 !important;
  --color-red: #cf222e !important;
  --color-red-rgb: 228, 55, 75 !important;
  --color-yellow: #BD8E37 !important;
  --dark: #24292f !important;
  --darkgray: #24292f !important;
  --divider-color: #d0d7de !important;
  --divider-color-hover: rgb(10, 115, 235) !important;
  --dropdown-background-hover: #f6f8fa !important;
  --embed-block-shadow-hover: 0 0 0 1px #d0d7de,
        inset 0 0 0 1px #d0d7de !important;
  --embed-border-left: 2px solid rgb(10, 115, 235) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(10, 115, 235) !important;
  --file-margins: 32px !important;
  --flair-color: #24292f !important;
  --footnote-divider-color: #d0d7de !important;
  --footnote-id-color: #57606a !important;
  --footnote-id-color-no-occurrences: #6e7781 !important;
  --footnote-input-background-active: rgba(208, 215, 222, 0.32) !important;
  --graph-node: #57606a !important;
  --graph-node-attachment: #BD8E37 !important;
  --graph-node-focused: rgb(9, 108, 220) !important;
  --graph-node-tag: #0cb54f !important;
  --graph-node-unresolved: #6e7781 !important;
  --graph-text: #24292f !important;
  --gray: #57606a !important;
  --h-color-theme: #24292f !important;
  --h1-color: #24292f !important;
  --h1-color-theme: #24292f !important;
  --h1-size: 2em !important;
  --h2-color: #24292f !important;
  --h2-color-theme: #24292f !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-color: #24292f !important;
  --h3-color-theme: #24292f !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-color: #24292f !important;
  --h4-color-theme: #24292f !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-color: #24292f !important;
  --h5-color-theme: #24292f !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-color: #24292f !important;
  --h6-color-theme: #24292f !important;
  --h6-size: 1.12em !important;
  --heading-formatting: #6e7781 !important;
  --highlight: rgba(208, 215, 222, 0.32) !important;
  --hr-color: #d0d7de !important;
  --icon-color: #57606a !important;
  --icon-color-active: rgb(9, 108, 220) !important;
  --icon-color-focused: #24292f !important;
  --icon-color-hover: #57606a !important;
  --inline-code-background: #aeb8c133 !important;
  --inline-title-color: #24292f !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #6e7781 !important;
  --input-placeholder-color: #6e7781 !important;
  --input-shadow: inset 0 0 0 1px #1b1f2426 !important;
  --input-shadow-hover: inset 0 0 0 1px #1b1f2426 !important;
  --interactive-accent: rgb(10, 115, 235) !important;
  --interactive-accent-hover: rgb(10, 120, 245) !important;
  --interactive-accent-hsl: 212, 92%, 45% !important;
  --interactive-hover: #f6f8fa !important;
  --kanban-background: #ffffff !important;
  --kanban-item-background: #ffffff !important;
  --kanban-lane-background: #f6f8fa !important;
  --kanban-lane-border: #d8dee4 !important;
  --kanban-lane-count: #aeb8c133 !important;
  --kanban-options-btn: #f6f8fa !important;
  --light: #f6f8fa !important;
  --lightgray: #f6f8fa !important;
  --link-color: rgb(9, 108, 220) !important;
  --link-color-hover: rgb(10, 120, 245) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(9, 108, 220) !important;
  --link-external-color-hover: rgb(10, 120, 245) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(9, 108, 220) !important;
  --link-unresolved-decoration-color: rgba(9, 108, 220, 0.3) !important;
  --list-bullet-size: 5px !important;
  --list-indent: 2em !important;
  --list-marker-color: #24292f !important;
  --list-marker-color-collapsed: rgb(9, 108, 220) !important;
  --list-marker-color-hover: #57606a !important;
  --menu-background: #f6f8fa !important;
  --menu-border-color: #d0d7de !important;
  --menu-shadow: none !important;
  --metadata-border-color: #d0d7de !important;
  --metadata-divider-color: #d0d7de !important;
  --metadata-input-background-active: rgba(208, 215, 222, 0.32) !important;
  --metadata-input-text-color: #24292f !important;
  --metadata-label-background-active: rgba(208, 215, 222, 0.32) !important;
  --metadata-label-text-color: #57606a !important;
  --metadata-label-text-color-hover: #57606a !important;
  --metadata-property-background-active: rgba(208, 215, 222, 0.32) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(9, 108, 220) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d0d7de !important;
  --modal-border-color: #d0d7de !important;
  --nav-collapse-icon-color: #6e7781 !important;
  --nav-collapse-icon-color-collapsed: #6e7781 !important;
  --nav-heading-color: #24292f !important;
  --nav-heading-color-collapsed: #6e7781 !important;
  --nav-heading-color-collapsed-hover: #57606a !important;
  --nav-heading-color-hover: #24292f !important;
  --nav-item-background-active: rgba(208, 215, 222, 0.32) !important;
  --nav-item-background-hover: rgba(208, 215, 222, 0.32) !important;
  --nav-item-background-selected: rgba(9, 108, 220, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #57606a !important;
  --nav-item-color-active: #24292f !important;
  --nav-item-color-highlighted: rgb(10, 120, 245) !important;
  --nav-item-color-hover: #24292f !important;
  --nav-item-color-selected: #24292f !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #6e7781 !important;
  --nav-tag-color-active: #57606a !important;
  --nav-tag-color-hover: #57606a !important;
  --pill-border-color: #d0d7de !important;
  --pill-border-color-hover: #d0d7de !important;
  --pill-color: #57606a !important;
  --pill-color-hover: #24292f !important;
  --pill-color-remove: #6e7781 !important;
  --pill-color-remove-hover: rgb(9, 108, 220) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --rgb-hover: 208, 215, 222 !important;
  --ribbon-background: #f6f8fa !important;
  --search-clear-button-color: #57606a !important;
  --search-icon-color: #57606a !important;
  --secondary: rgb(9, 108, 220) !important;
  --setting-group-heading-color: #24292f !important;
  --setting-items-background: #f6f8fa !important;
  --setting-items-border-color: #d0d7de !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --slider-thumb-border-color: #d0d7de !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #d0d7de !important;
  --status-bar-background: #f6f8fa !important;
  --status-bar-border-color: #d0d7de !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #57606a !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #cf222e !important;
  --sync-avatar-color-2: #d96c00 !important;
  --sync-avatar-color-3: #BD8E37 !important;
  --sync-avatar-color-4: #0cb54f !important;
  --sync-avatar-color-5: #2db7b5 !important;
  --sync-avatar-color-6: #086DDD !important;
  --sync-avatar-color-7: #876be0 !important;
  --sync-avatar-color-8: #C32B74 !important;
  --tab-container-background: #f6f8fa !important;
  --tab-divider-color: #d0d7de !important;
  --tab-outline-color: #d0d7de !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #f6f8fa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f8fa, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(9, 108, 220) !important;
  --tab-text-color: #6e7781 !important;
  --tab-text-color-active: #57606a !important;
  --tab-text-color-focused: #57606a !important;
  --tab-text-color-focused-active: #57606a !important;
  --tab-text-color-focused-active-current: #24292f !important;
  --tab-text-color-focused-highlighted: rgb(9, 108, 220) !important;
  --table-add-button-border-color: #d0d7de !important;
  --table-border-color: #d0d7de !important;
  --table-drag-handle-background-active: rgb(10, 115, 235) !important;
  --table-drag-handle-color: #6e7781 !important;
  --table-header-border-color: #d0d7de !important;
  --table-header-color: #24292f !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(9, 108, 220, 0.1) !important;
  --table-selection-border-color: rgb(10, 115, 235) !important;
  --table-white-space: normal !important;
  --tag-background: rgba(9, 108, 220, 0.1) !important;
  --tag-background-hover: rgba(9, 108, 220, 0.2) !important;
  --tag-border-color: rgba(9, 108, 220, 0.15) !important;
  --tag-border-color-hover: rgba(9, 108, 220, 0.15) !important;
  --tag-color: rgb(9, 108, 220) !important;
  --tag-color-hover: rgb(9, 108, 220) !important;
  --tertiary: rgb(10, 120, 245) !important;
  --text-accent: rgb(9, 108, 220) !important;
  --text-accent-hover: rgb(10, 120, 245) !important;
  --text-error: #cf222e !important;
  --text-faint: #6e7781 !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #57606a !important;
  --text-normal: #24292f !important;
  --text-selection: rgba(9, 108, 220, 0.2) !important;
  --text-success: #0cb54f !important;
  --text-warning: #d96c00 !important;
  --textHighlight: rgba(208, 215, 222, 0.32) !important;
  --titlebar-background: #f6f8fa !important;
  --titlebar-border-color: #d0d7de !important;
  --titlebar-text-color: #57606a !important;
  --titlebar-text-color-focused: #24292f !important;
  --vault-name-color: #24292f !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #24292f !important;
  --vault-profile-color-hover: #24292f !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 248, 250);
  color: rgb(36, 41, 47);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(36, 41, 47);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 248, 250);
  color: rgb(36, 41, 47);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(208, 215, 222);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 248, 250);
  border-left-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

body div#quartz-root {
  color: rgb(36, 41, 47);
}`,
    typography: `body .page article p > b, b {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .page article p > em, em {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .page article p > i, i {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .page article p > strong, strong {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .text-highlight {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body del {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: line-through rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body p {
  color: rgb(87, 96, 106);
  outline: rgb(87, 96, 106) none 0px;
  text-decoration: rgb(87, 96, 106);
  text-decoration-color: rgb(87, 96, 106);
}`,
    links: `body a.external, footer a {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration: rgb(9, 108, 220);
  text-decoration-color: rgb(9, 108, 220);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration: rgb(9, 108, 220);
  text-decoration-color: rgb(9, 108, 220);
}

body a.internal.broken {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration: rgba(9, 108, 220, 0.3);
  text-decoration-color: rgba(9, 108, 220, 0.3);
}`,
    lists: `body dd {
  color: rgb(36, 41, 47);
}

body dt {
  color: rgb(36, 41, 47);
}

body ol > li {
  color: rgb(36, 41, 47);
}

body ol.overflow {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body ul > li {
  color: rgb(36, 41, 47);
}

body ul.overflow {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 119, 129);
  text-decoration: rgb(110, 119, 129);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body table {
  color: rgb(36, 41, 47);
  width: 241.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(246, 248, 250);
}

body td {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body th {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `body code {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

body pre > code > [data-line] {
  border-left-color: rgb(217, 108, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(217, 108, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(217, 108, 0);
  border-left-color: rgb(217, 108, 0);
  border-right-color: rgb(217, 108, 0);
  border-top-color: rgb(217, 108, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}

body pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}`,
    images: `body audio {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body figcaption {
  color: rgb(36, 41, 47);
}

body figure {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body img {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body video {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    embeds: `body .file-embed {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
}

body .footnotes {
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

body .transclude {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(10, 114, 233);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body .transclude-inner {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(10, 114, 233);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(87, 96, 106);
  text-decoration: line-through rgb(87, 96, 106);
  text-decoration-color: rgb(87, 96, 106);
}

body input[type=checkbox] {
  border-bottom-color: rgb(110, 119, 129);
  border-left-color: rgb(110, 119, 129);
  border-right-color: rgb(110, 119, 129);
  border-top-color: rgb(110, 119, 129);
}

body li.task-list-item[data-task='!'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='*'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='-'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='/'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='>'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='?'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='I'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='S'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='b'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='c'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='d'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='f'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='i'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='k'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='l'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='p'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='u'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body li.task-list-item[data-task='w'] {
  color: rgb(36, 41, 47);
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(224, 172, 0, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(224, 172, 0, 0.25);
  border-top-color: rgba(224, 172, 0, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: 12, 181, 79;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(12, 181, 79, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-right-color: rgba(12, 181, 79, 0.25);
  border-top-color: rgba(12, 181, 79, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > * {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(208, 215, 222, 0.32);
  color: rgb(36, 41, 47);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 248, 250);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(208, 215, 222, 0.32);
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(208, 215, 222, 0.32);
  color: rgb(36, 41, 47);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(9, 108, 220, 0.1);
  border-bottom-color: rgba(9, 108, 220, 0.15);
  border-left-color: rgba(9, 108, 220, 0.15);
  border-right-color: rgba(9, 108, 220, 0.15);
  border-top-color: rgba(9, 108, 220, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(9, 108, 220);
}

body h1 {
  color: rgb(36, 41, 47);
}

body h2 {
  color: rgb(36, 41, 47);
}

body h2.page-title, h2.page-title a {
  color: rgb(36, 41, 47);
}

body h3 {
  color: rgb(36, 41, 47);
}

body h4 {
  color: rgb(36, 41, 47);
}

body h5 {
  color: rgb(36, 41, 47);
}

body h6 {
  color: rgb(36, 41, 47);
}

body hr {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(208, 215, 222, 0.32);
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}`,
    footer: `body footer {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(87, 96, 106);
}

body footer ul li a {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(36, 41, 47);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 96, 106);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body li.section-li > .section .meta {
  color: rgb(87, 96, 106);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 96, 106);
  text-decoration: rgb(87, 96, 106);
}

body ul.section-ul {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body .darkmode svg {
  color: rgb(87, 96, 106);
  stroke: rgb(87, 96, 106);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body .breadcrumb-element p {
  color: rgb(110, 119, 129);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

body .metadata {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(87, 96, 106);
}

body .metadata-properties {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body .navigation-progress {
  background-color: rgb(246, 248, 250);
}

body .page-header h2.page-title {
  color: rgb(36, 41, 47);
}

body abbr {
  color: rgb(36, 41, 47);
  text-decoration: underline dotted rgb(36, 41, 47);
}

body details {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body input[type=text] {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body kbd {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

body progress {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

body sub {
  color: rgb(36, 41, 47);
}

body summary {
  color: rgb(36, 41, 47);
}

body sup {
  color: rgb(36, 41, 47);
}`,
  },
};
