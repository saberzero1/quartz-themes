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
  --shiki-active-tab-border-color: #8b949e !important;
  --shiki-code-background: #161b22 !important;
  --shiki-code-comment: #6e7681 !important;
  --shiki-code-function: #7ee787 !important;
  --shiki-code-important: #FFA657 !important;
  --shiki-code-keyword: #f778ba !important;
  --shiki-code-normal: #8b949e !important;
  --shiki-code-property: #A5D6FF !important;
  --shiki-code-punctuation: #8b949e !important;
  --shiki-code-string: #d29922 !important;
  --shiki-code-value: #D2A8FF !important;
  --shiki-gutter-border-color: #30363d !important;
  --shiki-gutter-text-color: #6e7681 !important;
  --shiki-gutter-text-color-highlight: #8b949e !important;
  --shiki-highlight-green: rgba(126, 231, 135, 0.5) !important;
  --shiki-highlight-green-background: rgba(126, 231, 135, 0.1) !important;
  --shiki-highlight-neutral: #8b949e !important;
  --shiki-highlight-red: rgba(248, 81, 73, 0.5) !important;
  --shiki-highlight-red-background: rgba(248, 81, 73, 0.1) !important;
  --shiki-terminal-dots-color: #6e7681 !important;
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
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration-color: rgb(67, 155, 255);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(67, 155, 255);
  outline: rgb(67, 155, 255) none 0px;
  text-decoration-color: rgb(67, 155, 255);
}

html[saved-theme="dark"] body a.internal-link.broken {
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
  background-color: rgba(110, 118, 129, 0.4);
  border-bottom-color: rgb(48, 54, 61);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(48, 54, 61);
  border-right-color: rgb(48, 54, 61);
  border-top-color: rgb(48, 54, 61);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(201, 209, 217);
  padding-bottom: 2.8px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 2.8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(201, 209, 217);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 166, 87);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(110, 118, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 153, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 214, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 182, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 182, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 153, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 153, 34);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 168, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 112, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(126, 231, 135);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 248, 81, 73;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 248, 81, 73;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 248, 81, 73;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 126, 231, 135;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 54, 61);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(139, 148, 158);
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

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(87, 165, 255, 0.1);
  border-bottom-color: rgba(87, 165, 255, 0.15);
  border-left-color: rgba(87, 165, 255, 0.15);
  border-right-color: rgba(87, 165, 255, 0.15);
  border-top-color: rgba(87, 165, 255, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(67, 155, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(126, 231, 135);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(126, 231, 135);
  font-size: 32px;
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(139, 148, 158);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html[saved-theme="dark"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(48, 54, 61);
  color: rgb(201, 209, 217);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(22, 27, 34);
  border-color: rgb(201, 209, 217);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(1, 4, 9);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(201, 209, 217);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
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
  --shiki-active-tab-border-color: #57606a !important;
  --shiki-code-background: #f6f8fa !important;
  --shiki-code-comment: #6e7781 !important;
  --shiki-code-function: #0cb54f !important;
  --shiki-code-important: #d96c00 !important;
  --shiki-code-keyword: #C32B74 !important;
  --shiki-code-normal: #57606a !important;
  --shiki-code-property: #2db7b5 !important;
  --shiki-code-punctuation: #57606a !important;
  --shiki-code-string: #BD8E37 !important;
  --shiki-code-value: #876be0 !important;
  --shiki-gutter-border-color: #d0d7de !important;
  --shiki-gutter-text-color: #6e7781 !important;
  --shiki-gutter-text-color-highlight: #57606a !important;
  --shiki-highlight-green: rgba(12, 181, 79, 0.5) !important;
  --shiki-highlight-green-background: rgba(12, 181, 79, 0.1) !important;
  --shiki-highlight-neutral: #57606a !important;
  --shiki-highlight-red: rgba(228, 55, 75, 0.5) !important;
  --shiki-highlight-red-background: rgba(228, 55, 75, 0.1) !important;
  --shiki-terminal-dots-color: #6e7781 !important;
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
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(36, 41, 47);
  outline: rgb(36, 41, 47) none 0px;
  text-decoration-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration-color: rgb(9, 108, 220);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(9, 108, 220);
  outline: rgb(9, 108, 220) none 0px;
  text-decoration-color: rgb(9, 108, 220);
}

html[saved-theme="light"] body a.internal-link.broken {
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
  background-color: rgba(174, 184, 193, 0.2);
  border-bottom-color: rgb(208, 215, 222);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(208, 215, 222);
  border-right-color: rgb(208, 215, 222);
  border-top-color: rgb(208, 215, 222);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(36, 41, 47);
  padding-bottom: 2.8px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 2.8px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(246, 248, 250);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(36, 41, 47);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(217, 108, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(110, 119, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(189, 142, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(45, 183, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 34, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 34, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 34, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 34, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(189, 142, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(189, 142, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 107, 224);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 34, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(12, 181, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(12, 181, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(12, 181, 79);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 228, 55, 75;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 228, 55, 75;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 228, 55, 75;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 224, 172, 0;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 12, 181, 79;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 215, 222);
  border-left-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(87, 96, 106);
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

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(9, 108, 220, 0.1);
  border-bottom-color: rgba(9, 108, 220, 0.15);
  border-left-color: rgba(9, 108, 220, 0.15);
  border-right-color: rgba(9, 108, 220, 0.15);
  border-top-color: rgba(9, 108, 220, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(9, 108, 220);
}

html[saved-theme="light"] body h1 {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(36, 41, 47);
  font-size: 32px;
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(87, 96, 106);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html[saved-theme="light"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(208, 215, 222);
  color: rgb(36, 41, 47);
}`,
    properties: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body div#quartz-root {
  color: rgb(36, 41, 47);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(246, 248, 250);
  border-color: rgb(36, 41, 47);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(36, 41, 47);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(36, 41, 47);
  border-left-color: rgb(36, 41, 47);
  border-right-color: rgb(36, 41, 47);
  border-top-color: rgb(36, 41, 47);
  color: rgb(36, 41, 47);
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
