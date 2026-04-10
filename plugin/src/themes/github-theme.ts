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
  --background-modifier-active-hover: hsla(212, 100%, 67%, 0.15) !important;
  --background-modifier-border: #30363d !important;
  --background-modifier-border-focus: hsl(212, 100%, 67%) !important;
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
  --bases-table-cell-background-selected: hsla(212, 100%, 67%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(212, 100%, 67%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(212, 100%, 67%) !important;
  --bases-table-group-background: #161b22 !important;
  --bases-table-header-background: #0d1117 !important;
  --bases-table-header-background-hover: rgba(177, 186, 196, 0.12) !important;
  --bases-table-header-color: #8b949e !important;
  --bases-table-summary-background: #0d1117 !important;
  --bases-table-summary-background-hover: rgba(177, 186, 196, 0.12) !important;
  --blockquote-border-color: hsl(212, 100%, 67%) !important;
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
  --checkbox-color: hsl(212, 100%, 67%) !important;
  --checkbox-color-hover: hsl(212, 100%, 63.2%) !important;
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
  --collapse-icon-color-collapsed: hsl(212, 100%, 63.2%) !important;
  --color-accent: hsl(212, 100%, 67%) !important;
  --color-accent-1: hsl(212, 100%, 63.2%) !important;
  --color-accent-2: hsl(212, 100%, 70.8%) !important;
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
  --divider-color-hover: hsl(212, 100%, 67%) !important;
  --dropdown-background: #30363d !important;
  --dropdown-background-hover: #21262d !important;
  --embed-block-shadow-hover: 0 0 0 1px #30363d,
        inset 0 0 0 1px #30363d !important;
  --embed-border-left: 2px solid hsl(212, 100%, 67%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(212, 100%, 67%) !important;
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
  --graph-node-focused: hsl(212, 100%, 63.2%) !important;
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
  --icon-color-active: hsl(212, 100%, 63.2%) !important;
  --icon-color-focused: #c9d1d9 !important;
  --icon-color-hover: #8b949e !important;
  --inline-code-background: #6e768166 !important;
  --inline-title-color: #7ee787 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #6e7681 !important;
  --input-placeholder-color: #6e7681 !important;
  --input-shadow: inset 0 0 0 1px #f0f6fc1a !important;
  --input-shadow-hover: inset 0 0 0 1px #8b949e !important;
  --interactive-accent: hsl(212, 100%, 67%) !important;
  --interactive-accent-hover: hsl(212, 100%, 63.2%) !important;
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
  --link-color: hsl(212, 100%, 63.2%) !important;
  --link-color-hover: hsl(212, 100%, 70.8%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(212, 100%, 63.2%) !important;
  --link-external-color-hover: hsl(212, 100%, 70.8%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(212, 100%, 63.2%) !important;
  --link-unresolved-decoration-color: hsla(212, 100%, 67%, 0.3) !important;
  --list-bullet-size: 5px !important;
  --list-indent: 2em !important;
  --list-marker-color: #c9d1d9 !important;
  --list-marker-color-collapsed: hsl(212, 100%, 63.2%) !important;
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
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(212, 100%, 67%) !important;
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
  --nav-item-background-selected: hsla(212, 100%, 67%, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #8b949e !important;
  --nav-item-color-active: #c9d1d9 !important;
  --nav-item-color-highlighted: hsl(212, 100%, 70.8%) !important;
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
  --pill-color-remove-hover: hsl(212, 100%, 63.2%) !important;
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
  --secondary: hsl(212, 100%, 63.2%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 67%) !important;
  --tab-text-color: #6e7681 !important;
  --tab-text-color-active: #8b949e !important;
  --tab-text-color-focused: #8b949e !important;
  --tab-text-color-focused-active: #8b949e !important;
  --tab-text-color-focused-active-current: #c9d1d9 !important;
  --tab-text-color-focused-highlighted: hsl(212, 100%, 63.2%) !important;
  --table-add-button-border-color: #30363d !important;
  --table-border-color: #30363d !important;
  --table-drag-handle-background-active: hsl(212, 100%, 67%) !important;
  --table-drag-handle-color: #6e7681 !important;
  --table-header-border-color: #30363d !important;
  --table-header-color: #c9d1d9 !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(212, 100%, 67%, 0.1) !important;
  --table-selection-border-color: hsl(212, 100%, 67%) !important;
  --table-white-space: normal !important;
  --tag-background: hsla(212, 100%, 67%, 0.1) !important;
  --tag-background-hover: hsla(212, 100%, 67%, 0.2) !important;
  --tag-border-color: hsla(212, 100%, 67%, 0.15) !important;
  --tag-border-color-hover: hsla(212, 100%, 67%, 0.15) !important;
  --tag-color: hsl(212, 100%, 63.2%) !important;
  --tag-color-hover: hsl(212, 100%, 63.2%) !important;
  --tertiary: hsl(212, 100%, 70.8%) !important;
  --text-accent: hsl(212, 100%, 63.2%) !important;
  --text-accent-hover: hsl(212, 100%, 70.8%) !important;
  --text-error: #F47067 !important;
  --text-faint: #6e7681 !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #8b949e !important;
  --text-normal: #c9d1d9 !important;
  --text-selection: hsla(212, 100%, 67%, 0.4) !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 27, 34);
  border-color: rgb(201, 209, 217);
  box-shadow: rgba(240, 246, 252, 0.1) 0px 0px 0px 1px inset;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(48, 54, 61);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(87, 165, 255, 0.1);
  color: rgb(67, 155, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 54, 61);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 27, 34);
  border-left-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(110, 118, 129);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(87, 165, 255);
  border-color: rgb(87, 165, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(139, 148, 158);
  outline: rgb(139, 148, 158) none 0px;
  text-decoration-color: rgb(139, 148, 158);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration-color: rgb(67, 155, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration-color: rgb(67, 155, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration: rgba(87, 165, 255, 0.3);
  text-decoration-color: rgba(87, 165, 255, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(110, 118, 129);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(201, 209, 217);
  width: 241.219px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body td {
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

html[saved-theme="dark"] body th {
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
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 166, 87);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 166, 87);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 166, 87);
  border-left-color: rgb(255, 166, 87);
  border-right-color: rgb(255, 166, 87);
  border-top-color: rgb(255, 166, 87);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(126, 231, 135);
  border-left-color: rgb(126, 231, 135);
  border-right-color: rgb(126, 231, 135);
  border-top-color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(87, 165, 255);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
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
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 27, 34);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(177, 186, 196, 0.12);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(177, 186, 196, 0.12);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(87, 165, 255, 0.1);
  border-bottom-color: rgba(87, 165, 255, 0.15);
  border-left-color: rgba(87, 165, 255, 0.15);
  border-right-color: rgba(87, 165, 255, 0.15);
  border-top-color: rgba(87, 165, 255, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(67, 155, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body h2 {
  color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body h3 {
  color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body h4 {
  color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body h5 {
  color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body h6 {
  color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 148, 158);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(201, 209, 217);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(139, 148, 158);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 148, 158);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(139, 148, 158);
  stroke: rgb(139, 148, 158);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(110, 118, 129);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(48, 54, 61);
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body abbr {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(139, 148, 158);
  border-left-color: rgb(139, 148, 158);
  border-right-color: rgb(139, 148, 158);
  border-top-color: rgb(139, 148, 158);
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body sup {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(87, 165, 255, 0.1);
  border-bottom-color: rgba(87, 165, 255, 0.15);
  border-left-color: rgba(87, 165, 255, 0.15);
  border-right-color: rgba(87, 165, 255, 0.15);
  border-top-color: rgba(87, 165, 255, 0.15);
  color: rgb(67, 155, 255);
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
  --background-modifier-active-hover: hsla(212, 92%, 45%, 0.15) !important;
  --background-modifier-border: #d0d7de !important;
  --background-modifier-border-focus: hsl(212, 92%, 45%) !important;
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
  --bases-table-cell-background-selected: hsla(212, 92%, 45%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(212, 92%, 45%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(212, 92%, 47.5%) !important;
  --bases-table-group-background: #f6f8fa !important;
  --bases-table-header-background-hover: rgba(208, 215, 222, 0.32) !important;
  --bases-table-header-color: #57606a !important;
  --bases-table-summary-background-hover: rgba(208, 215, 222, 0.32) !important;
  --blockquote-border-color: hsl(212, 92%, 47.5%) !important;
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
  --checkbox-color: hsl(212, 92%, 47.5%) !important;
  --checkbox-color-hover: hsl(212, 92%, 50%) !important;
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
  --collapse-icon-color-collapsed: hsl(212, 92%, 45%) !important;
  --color-accent: hsl(212, 92%, 45%) !important;
  --color-accent-1: hsl(212, 92%, 47.5%) !important;
  --color-accent-2: hsl(212, 92%, 50%) !important;
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
  --divider-color-hover: hsl(212, 92%, 47.5%) !important;
  --dropdown-background-hover: #f6f8fa !important;
  --embed-block-shadow-hover: 0 0 0 1px #d0d7de,
        inset 0 0 0 1px #d0d7de !important;
  --embed-border-left: 2px solid hsl(212, 92%, 47.5%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(212, 92%, 47.5%) !important;
  --file-margins: 32px !important;
  --flair-color: #24292f !important;
  --footnote-divider-color: #d0d7de !important;
  --footnote-id-color: #57606a !important;
  --footnote-id-color-no-occurrences: #6e7781 !important;
  --footnote-input-background-active: rgba(208, 215, 222, 0.32) !important;
  --graph-node: #57606a !important;
  --graph-node-attachment: #BD8E37 !important;
  --graph-node-focused: hsl(212, 92%, 45%) !important;
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
  --icon-color-active: hsl(212, 92%, 45%) !important;
  --icon-color-focused: #24292f !important;
  --icon-color-hover: #57606a !important;
  --inline-code-background: #aeb8c133 !important;
  --inline-title-color: #24292f !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #6e7781 !important;
  --input-placeholder-color: #6e7781 !important;
  --input-shadow: inset 0 0 0 1px #1b1f2426 !important;
  --input-shadow-hover: inset 0 0 0 1px #1b1f2426 !important;
  --interactive-accent: hsl(212, 92%, 47.5%) !important;
  --interactive-accent-hover: hsl(212, 92%, 50%) !important;
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
  --link-color: hsl(212, 92%, 45%) !important;
  --link-color-hover: hsl(212, 92%, 50%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(212, 92%, 45%) !important;
  --link-external-color-hover: hsl(212, 92%, 50%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(212, 92%, 45%) !important;
  --link-unresolved-decoration-color: hsla(212, 92%, 45%, 0.3) !important;
  --list-bullet-size: 5px !important;
  --list-indent: 2em !important;
  --list-marker-color: #24292f !important;
  --list-marker-color-collapsed: hsl(212, 92%, 45%) !important;
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
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(212, 92%, 45%) !important;
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
  --nav-item-background-selected: hsla(212, 92%, 45%, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #57606a !important;
  --nav-item-color-active: #24292f !important;
  --nav-item-color-highlighted: hsl(212, 92%, 50%) !important;
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
  --pill-color-remove-hover: hsl(212, 92%, 45%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --rgb-hover: 208, 215, 222 !important;
  --ribbon-background: #f6f8fa !important;
  --search-clear-button-color: #57606a !important;
  --search-icon-color: #57606a !important;
  --secondary: hsl(212, 92%, 45%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 92%, 45%) !important;
  --tab-text-color: #6e7781 !important;
  --tab-text-color-active: #57606a !important;
  --tab-text-color-focused: #57606a !important;
  --tab-text-color-focused-active: #57606a !important;
  --tab-text-color-focused-active-current: #24292f !important;
  --tab-text-color-focused-highlighted: hsl(212, 92%, 45%) !important;
  --table-add-button-border-color: #d0d7de !important;
  --table-border-color: #d0d7de !important;
  --table-drag-handle-background-active: hsl(212, 92%, 47.5%) !important;
  --table-drag-handle-color: #6e7781 !important;
  --table-header-border-color: #d0d7de !important;
  --table-header-color: #24292f !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(212, 92%, 45%, 0.1) !important;
  --table-selection-border-color: hsl(212, 92%, 47.5%) !important;
  --table-white-space: normal !important;
  --tag-background: hsla(212, 92%, 45%, 0.1) !important;
  --tag-background-hover: hsla(212, 92%, 45%, 0.2) !important;
  --tag-border-color: hsla(212, 92%, 45%, 0.15) !important;
  --tag-border-color-hover: hsla(212, 92%, 45%, 0.15) !important;
  --tag-color: hsl(212, 92%, 45%) !important;
  --tag-color-hover: hsl(212, 92%, 45%) !important;
  --tertiary: hsl(212, 92%, 50%) !important;
  --text-accent: hsl(212, 92%, 45%) !important;
  --text-accent-hover: hsl(212, 92%, 50%) !important;
  --text-error: #cf222e !important;
  --text-faint: #6e7781 !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #57606a !important;
  --text-normal: #24292f !important;
  --text-selection: hsla(212, 92%, 45%, 0.2) !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 248, 250);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(36, 41, 47);
  box-shadow: rgba(27, 31, 36, 0.15) 0px 0px 0px 1px inset;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(208, 215, 222);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(9, 108, 220, 0.1);
  color: rgb(9, 108, 220);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 248, 250);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(208, 215, 222);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 248, 250);
  border-left-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(36, 41, 47);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body del {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(110, 119, 129);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(10, 114, 233);
  border-color: rgb(10, 114, 233);
}

html[saved-theme="light"] body p {
  color: rgb(87, 96, 106);
  outline: rgb(87, 96, 106) none 0px;
  text-decoration-color: rgb(87, 96, 106);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration-color: rgb(9, 108, 220);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration-color: rgb(9, 108, 220);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration: rgba(9, 108, 220, 0.3);
  text-decoration-color: rgba(9, 108, 220, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body dt {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body ol > li {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body ul > li {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(110, 119, 129);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body table {
  color: rgb(36, 41, 47);
  width: 241.219px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(246, 248, 250);
}

html[saved-theme="light"] body td {
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

html[saved-theme="light"] body th {
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
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(217, 108, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(217, 108, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(217, 108, 0);
  border-left-color: rgb(217, 108, 0);
  border-right-color: rgb(217, 108, 0);
  border-top-color: rgb(217, 108, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body figcaption {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(10, 114, 233);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(110, 119, 129);
  border-left-color: rgb(110, 119, 129);
  border-right-color: rgb(110, 119, 129);
  border-top-color: rgb(110, 119, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(36, 41, 47);
  text-decoration-color: rgb(36, 41, 47);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
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

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
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

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(208, 215, 222, 0.32);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 248, 250);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(208, 215, 222, 0.32);
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(208, 215, 222, 0.32);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(9, 108, 220, 0.1);
  border-bottom-color: rgba(9, 108, 220, 0.15);
  border-left-color: rgba(9, 108, 220, 0.15);
  border-right-color: rgba(9, 108, 220, 0.15);
  border-top-color: rgba(9, 108, 220, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(9, 108, 220);
}

html[saved-theme="light"] body h1 {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body h2 {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body h3 {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body h4 {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body h5 {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body h6 {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(87, 96, 106);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(36, 41, 47);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(87, 96, 106);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 96, 106);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(87, 96, 106);
  stroke: rgb(87, 96, 106);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(110, 119, 129);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(208, 215, 222);
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(246, 248, 250);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body abbr {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgb(87, 96, 106);
  border-left-color: rgb(87, 96, 106);
  border-right-color: rgb(87, 96, 106);
  border-top-color: rgb(87, 96, 106);
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body sub {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body summary {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body sup {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(9, 108, 220, 0.1);
  border-bottom-color: rgba(9, 108, 220, 0.15);
  border-left-color: rgba(9, 108, 220, 0.15);
  border-right-color: rgba(9, 108, 220, 0.15);
  border-top-color: rgba(9, 108, 220, 0.15);
  color: rgb(9, 108, 220);
}`,
  },
};
