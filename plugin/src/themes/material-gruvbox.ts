import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-gruvbox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 166 !important;
  --accent-l: 58% !important;
  --accent-s: 23% !important;
  --background-accent: rgb(50, 48, 47) !important;
  --background-modifier-active-hover: hsla(166, 23%, 58%, 0.1) !important;
  --background-modifier-border: rgb(60, 56, 54) !important;
  --background-modifier-error: rgb(234, 105, 98) !important;
  --background-modifier-error-hover: rgb(234, 105, 98) !important;
  --background-modifier-error-rgb: 234,105,98 !important;
  --background-modifier-success: rgb(169, 182, 101) !important;
  --background-modifier-success-rgb: 169,182,101 !important;
  --background-primary: rgb(40, 40, 40) !important;
  --background-primary-alt: rgb(50, 48, 47) !important;
  --background-secondary: rgb(29, 32, 33) !important;
  --background-secondary-alt: rgb(60, 56, 54) !important;
  --bases-cards-background: rgb(40, 40, 40) !important;
  --bases-cards-cover-background: rgb(50, 48, 47) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(60, 56, 54) !important;
  --bases-embed-border-color: rgb(60, 56, 54) !important;
  --bases-group-heading-property-color: rgb(213, 196, 161) !important;
  --bases-table-border-color: rgb(60, 56, 54) !important;
  --bases-table-cell-background-active: rgb(40, 40, 40) !important;
  --bases-table-cell-background-disabled: rgb(50, 48, 47) !important;
  --bases-table-cell-background-selected: hsla(166, 23%, 58%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(166, 23%, 58%) !important;
  --bases-table-group-background: rgb(50, 48, 47) !important;
  --bases-table-header-background: rgb(40, 40, 40) !important;
  --bases-table-header-color: rgb(213, 196, 161) !important;
  --bases-table-row-background-hover: rgb(80, 73, 69) !important;
  --bases-table-summary-background: rgb(40, 40, 40) !important;
  --blockquote-border-color: hsl(166, 23%, 58%) !important;
  --bold-color: rgb(231, 138, 78) !important;
  --bold-weight: 600 !important;
  --calendar-background-hover: rgb(60, 56, 54) !important;
  --calendar-hover: rgb(234, 105, 98) !important;
  --callout-bug: 234,105,98;
  --callout-default: 69,112,122;
  --callout-error: 234,105,98;
  --callout-example: 211,134,155;
  --callout-fail: 234,105,98;
  --callout-important: 125,174,163;
  --callout-info: 69,112,122;
  --callout-question: 195,94,10;
  --callout-success: 169,182,101;
  --callout-summary: 125,174,163;
  --callout-tip: 125,174,163;
  --callout-todo: 69,112,122;
  --callout-warning: 195,94,10;
  --canvas-background: rgb(40, 40, 40) !important;
  --canvas-card-label-color: rgb(235, 219, 178) !important;
  --canvas-color-1: 234,105,98 !important;
  --canvas-color-2: 195,94,10 !important;
  --canvas-color-3: 231,138,78 !important;
  --canvas-color-4: 169,182,101 !important;
  --canvas-color-5: 125,174,163 !important;
  --canvas-color-6: 211,134,155 !important;
  --caret-color: rgb(212, 190, 152) !important;
  --checkbox-border-color: rgb(168, 153, 132) !important;
  --checkbox-border-color-hover: rgb(168, 153, 132) !important;
  --checkbox-color: rgb(168, 153, 132) !important;
  --checkbox-color-hover: rgb(168, 153, 132) !important;
  --checkbox-marker-color: rgb(40, 40, 40) !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: rgba(213, 196, 161, 0.5) !important;
  --code-background: rgb(60, 56, 54) !important;
  --code-border-color: rgb(60, 56, 54) !important;
  --code-comment: rgb(235, 219, 178) !important;
  --code-function: rgb(231, 138, 78) !important;
  --code-important: rgb(195, 94, 10) !important;
  --code-keyword: rgb(211, 134, 155) !important;
  --code-normal: rgb(125, 174, 163) !important;
  --code-operator: rgb(234, 105, 98) !important;
  --code-property: rgb(125, 174, 163) !important;
  --code-punctuation: rgb(213, 196, 161) !important;
  --code-string: rgb(169, 182, 101) !important;
  --code-tag: rgb(234, 105, 98) !important;
  --code-value: rgb(211, 134, 155) !important;
  --collapse-icon-color: rgb(235, 219, 178) !important;
  --collapse-icon-color-collapsed: rgb(231, 138, 78) !important;
  --color-accent: hsl(166, 23%, 58%) !important;
  --color-accent-1: hsl(163, 23.46%, 66.7%) !important;
  --color-accent-2: hsl(161, 24.15%, 74.82%) !important;
  --color-accent-hsl: 166, 23%, 58% !important;
  --color-blue: rgb(69, 112, 122) !important;
  --color-blue-rgb: 69,112,122 !important;
  --color-cyan: rgb(125, 174, 163) !important;
  --color-cyan-rgb: 125,174,163 !important;
  --color-green: rgb(169, 182, 101) !important;
  --color-green-rgb: 169,182,101 !important;
  --color-orange: rgb(195, 94, 10) !important;
  --color-orange-rgb: 195,94,10 !important;
  --color-pink: rgb(211, 134, 155) !important;
  --color-pink-rgb: 211,134,155 !important;
  --color-purple: rgb(211, 134, 155) !important;
  --color-purple-rgb: 211,134,155 !important;
  --color-red: rgb(234, 105, 98) !important;
  --color-red-rgb: 234,105,98 !important;
  --color-yellow: rgb(231, 138, 78) !important;
  --color-yellow-rgb: 231,138,78 !important;
  --cursor-line-background: rgba(60, 56, 54, 0.5) !important;
  --dark: rgb(212, 190, 152) !important;
  --dark-text: rgb(101, 71, 53) !important;
  --dark-text-faint: rgb(179, 126, 93) !important;
  --dark-text-faint-x: 179,126,93 !important;
  --dark-text-muted: rgb(115, 81, 69) !important;
  --dark-text-muted-x: 115,81,69 !important;
  --dark-text-x: 101,71,53 !important;
  --dark0: rgb(40, 40, 40) !important;
  --dark0-hard: rgb(29, 32, 33) !important;
  --dark0-hard-x: 29,32,33 !important;
  --dark0-soft: rgb(50, 48, 47) !important;
  --dark0-soft-x: 50,48,47 !important;
  --dark0-x: 40,40,40 !important;
  --dark1: rgb(60, 56, 54) !important;
  --dark1-x: 60,56,54 !important;
  --dark2: rgb(80, 73, 69) !important;
  --dark2-x: 80,73,69 !important;
  --dark3: rgb(102, 92, 84) !important;
  --dark3-x: 102,92,84 !important;
  --dark4: rgb(124, 111, 100) !important;
  --dark4-x: 124,111,100 !important;
  --darkgray: rgb(212, 190, 152) !important;
  --dataview-key: rgb(235, 219, 178) !important;
  --dataview-key-background: rgba(193, 74, 74, 0.5) !important;
  --dataview-value: rgb(235, 219, 178) !important;
  --dataview-value-background: rgba(169, 182, 101, 0.3) !important;
  --divider-color: rgb(60, 56, 54) !important;
  --divider-color-hover: hsl(166, 23%, 58%) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(60, 56, 54), inset 0 0 0 1px rgb(60, 56, 54) !important;
  --embed-border-left: 6px double hsl(166, 23%, 58%) !important;
  --embed-border-start: 2px solid hsl(166, 23%, 58%) !important;
  --faded-aqua: rgb(76, 122, 93) !important;
  --faded-aqua-x: 76,122,93 !important;
  --faded-blue: rgb(69, 112, 122) !important;
  --faded-blue-x: 69,112,122 !important;
  --faded-green: rgb(108, 120, 46) !important;
  --faded-green-x: 108,120,46 !important;
  --faded-purple: rgb(148, 94, 128) !important;
  --faded-purple-x: 148,94,128 !important;
  --faded-red: rgb(193, 74, 74) !important;
  --faded-red-x: 193,74,74 !important;
  --faded-yellow: rgb(195, 94, 10) !important;
  --faded-yellow-x: 195,94,10 !important;
  --file-header-background: rgb(40, 40, 40) !important;
  --file-header-background-focused: rgb(40, 40, 40) !important;
  --flair-color: rgb(212, 190, 152) !important;
  --flashing-background: rgba(234, 105, 98, 0.3) !important;
  --footnote-divider-color: rgb(60, 56, 54) !important;
  --footnote-id-color: rgb(213, 196, 161) !important;
  --footnote-id-color-no-occurrences: rgb(235, 219, 178) !important;
  --graph-line: rgb(80, 73, 69) !important;
  --graph-node: rgb(189, 174, 147) !important;
  --graph-node-attachment: rgb(169, 182, 101) !important;
  --graph-node-focused: rgb(231, 138, 78) !important;
  --graph-node-tag: rgb(234, 105, 98) !important;
  --graph-node-unresolved: rgb(235, 219, 178) !important;
  --graph-text: rgb(212, 190, 152) !important;
  --gray: rgb(146, 131, 116) !important;
  --gray-x: 146,131,116 !important;
  --h1-color: rgb(234, 105, 98) !important;
  --h2-color: rgb(231, 138, 78) !important;
  --h3-color: rgb(169, 182, 101) !important;
  --h4-color: rgb(137, 180, 130) !important;
  --h5-color: rgb(125, 174, 163) !important;
  --h6-color: rgb(211, 134, 155) !important;
  --heading-formatting: rgb(235, 219, 178) !important;
  --highlight: rgb(231, 138, 78) !important;
  --hr-color: rgb(60, 56, 54) !important;
  --icon-color: rgb(213, 196, 161) !important;
  --icon-color-active: rgb(231, 138, 78) !important;
  --icon-color-focused: rgb(125, 174, 163) !important;
  --icon-color-hover: rgb(234, 105, 98) !important;
  --inline-title-color: rgb(231, 138, 78) !important;
  --input-date-separator: rgb(235, 219, 178) !important;
  --input-placeholder-color: rgb(235, 219, 178) !important;
  --interactive-accent: hsl(166, 23%, 58%) !important;
  --interactive-accent-hover: hsl(163, 23.46%, 66.7%) !important;
  --interactive-accent-hsl: 166, 23%, 58% !important;
  --italic-color: rgb(231, 138, 78) !important;
  --light: rgb(40, 40, 40) !important;
  --light-text: rgb(212, 190, 152) !important;
  --light-text-x: 212,190,152 !important;
  --light0: rgb(251, 241, 199) !important;
  --light0-hard: rgb(249, 245, 215) !important;
  --light0-hard-x: 249,245,215 !important;
  --light0-soft: rgb(242, 229, 188) !important;
  --light0-soft-x: 242,229,188 !important;
  --light0-x: 251,241,199 !important;
  --light1: rgb(235, 219, 178) !important;
  --light1-x: 235,219,178 !important;
  --light2: rgb(213, 196, 161) !important;
  --light2-x: 213,196,161 !important;
  --light3: rgb(189, 174, 147) !important;
  --light3-x: 189,174,147 !important;
  --light4: rgb(168, 153, 132) !important;
  --light4-x: 168,153,132 !important;
  --lightgray: rgb(29, 32, 33) !important;
  --link-color: rgb(231, 138, 78) !important;
  --link-color-hover: rgb(195, 94, 10) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(231, 138, 78) !important;
  --link-external-color-hover: rgb(195, 94, 10) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(231, 138, 78) !important;
  --link-unresolved-decoration-color: hsla(166, 23%, 58%, 0.3) !important;
  --list-marker-color: rgb(235, 219, 178) !important;
  --list-marker-color-collapsed: rgb(231, 138, 78) !important;
  --list-marker-color-hover: rgb(213, 196, 161) !important;
  --menu-background: rgb(29, 32, 33) !important;
  --mermaid-actor: rgb(80, 73, 69) !important;
  --mermaid-loopline: rgb(125, 174, 163) !important;
  --mermaid-note: rgb(125, 174, 163) !important;
  --metadata-border-color: rgb(60, 56, 54) !important;
  --metadata-divider-color: rgb(60, 56, 54) !important;
  --metadata-input-text-color: rgb(212, 190, 152) !important;
  --metadata-label-text-color: rgb(213, 196, 161) !important;
  --metadata-label-text-color-hover: rgb(213, 196, 161) !important;
  --modal-background: rgb(40, 40, 40) !important;
  --nav-collapse-icon-color: rgb(235, 219, 178) !important;
  --nav-collapse-icon-color-collapsed: rgb(235, 219, 178) !important;
  --nav-file-tag: rgba(231, 138, 78, 0.9) !important;
  --nav-heading-color: rgb(212, 190, 152) !important;
  --nav-heading-color-collapsed: rgb(235, 219, 178) !important;
  --nav-heading-color-collapsed-hover: rgb(213, 196, 161) !important;
  --nav-heading-color-hover: rgb(212, 190, 152) !important;
  --nav-item-background-selected: hsla(166, 23%, 58%, 0.15) !important;
  --nav-item-color: rgb(213, 196, 161) !important;
  --nav-item-color-active: rgb(137, 180, 130) !important;
  --nav-item-color-highlighted: rgb(231, 138, 78) !important;
  --nav-item-color-hover: rgb(234, 105, 98) !important;
  --nav-item-color-selected: rgb(212, 190, 152) !important;
  --nav-tag-color: rgb(235, 219, 178) !important;
  --nav-tag-color-active: rgb(213, 196, 161) !important;
  --nav-tag-color-hover: rgb(213, 196, 161) !important;
  --neutral-aqua: rgb(137, 180, 130) !important;
  --neutral-aqua-x: 137,180,130 !important;
  --neutral-blue: rgb(125, 174, 163) !important;
  --neutral-blue-x: 125,174,163 !important;
  --neutral-green: rgb(169, 182, 101) !important;
  --neutral-green-x: 169,182,101 !important;
  --neutral-purple: rgb(211, 134, 155) !important;
  --neutral-purple-x: 211,134,155 !important;
  --neutral-red: rgb(234, 105, 98) !important;
  --neutral-red-x: 234,105,98 !important;
  --neutral-yellow: rgb(231, 138, 78) !important;
  --neutral-yellow-x: 231,138,78 !important;
  --pdf-background: rgb(40, 40, 40) !important;
  --pdf-page-background: rgb(40, 40, 40) !important;
  --pdf-shadow: 0 0 0 1px rgb(60, 56, 54) !important;
  --pdf-sidebar-background: rgb(40, 40, 40) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(60, 56, 54) !important;
  --pill-border-color: rgb(60, 56, 54) !important;
  --pill-color: rgb(213, 196, 161) !important;
  --pill-color-hover: rgb(212, 190, 152) !important;
  --pill-color-remove: rgb(235, 219, 178) !important;
  --pill-color-remove-hover: rgb(231, 138, 78) !important;
  --prompt-background: rgb(40, 40, 40) !important;
  --ribbon-background: rgb(29, 32, 33) !important;
  --ribbon-background-collapsed: rgb(40, 40, 40) !important;
  --search-clear-button-color: rgb(213, 196, 161) !important;
  --search-icon-color: rgb(213, 196, 161) !important;
  --search-result-background: rgb(40, 40, 40) !important;
  --secondary: rgb(231, 138, 78) !important;
  --setting-group-heading-color: rgb(212, 190, 152) !important;
  --setting-items-background: rgb(50, 48, 47) !important;
  --setting-items-border-color: rgb(60, 56, 54) !important;
  --slider-track-background: rgb(60, 56, 54) !important;
  --status-bar-background: rgb(29, 32, 33) !important;
  --status-bar-border-color: rgb(60, 56, 54) !important;
  --status-bar-text-color: rgb(213, 196, 161) !important;
  --suggestion-background: rgb(40, 40, 40) !important;
  --sync-avatar-color-1: rgb(234, 105, 98) !important;
  --sync-avatar-color-2: rgb(195, 94, 10) !important;
  --sync-avatar-color-3: rgb(231, 138, 78) !important;
  --sync-avatar-color-4: rgb(169, 182, 101) !important;
  --sync-avatar-color-5: rgb(125, 174, 163) !important;
  --sync-avatar-color-6: rgb(69, 112, 122) !important;
  --sync-avatar-color-7: rgb(211, 134, 155) !important;
  --sync-avatar-color-8: rgb(211, 134, 155) !important;
  --tab-background-active: rgb(40, 40, 40) !important;
  --tab-container-background: rgb(29, 32, 33) !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: rgb(60, 56, 54) !important;
  --tab-switcher-background: rgb(29, 32, 33) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 32, 33), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(166, 23%, 58%) !important;
  --tab-text-color: rgb(235, 219, 178) !important;
  --tab-text-color-active: rgb(213, 196, 161) !important;
  --tab-text-color-focused: rgb(213, 196, 161) !important;
  --tab-text-color-focused-active: rgb(231, 138, 78) !important;
  --tab-text-color-focused-active-current: rgb(234, 105, 98) !important;
  --tab-text-color-focused-highlighted: rgb(231, 138, 78) !important;
  --table-add-button-border-color: rgb(60, 56, 54) !important;
  --table-border-color: rgb(60, 56, 54) !important;
  --table-drag-handle-background-active: hsl(166, 23%, 58%) !important;
  --table-drag-handle-color: rgb(235, 219, 178) !important;
  --table-header-background: rgba(40, 40, 40, 0.2) !important;
  --table-header-background-hover: rgb(80, 73, 69) !important;
  --table-header-border-color: rgb(60, 56, 54) !important;
  --table-header-color: rgb(212, 190, 152) !important;
  --table-row-background-hover: rgb(80, 73, 69) !important;
  --table-row-even-background: rgba(80, 73, 69, 0.2) !important;
  --table-row-odd-background: rgba(80, 73, 69, 0.4) !important;
  --table-selection: hsla(166, 23%, 58%, 0.1) !important;
  --table-selection-border-color: hsl(166, 23%, 58%) !important;
  --tag-background: rgb(80, 73, 69) !important;
  --tag-background-hover: rgb(60, 56, 54) !important;
  --tag-border-color: hsla(166, 23%, 58%, 0.15) !important;
  --tag-border-color-hover: hsla(166, 23%, 58%, 0.15) !important;
  --tag-color: rgb(137, 180, 130) !important;
  --tag-color-hover: rgb(231, 138, 78) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .5em !important;
  --tertiary: rgb(195, 94, 10) !important;
  --text-accent: rgb(231, 138, 78) !important;
  --text-accent-hover: rgb(195, 94, 10) !important;
  --text-error: rgb(234, 105, 98) !important;
  --text-faint: rgb(235, 219, 178) !important;
  --text-highlight-bg: rgb(231, 138, 78) !important;
  --text-highlight-fg: rgb(29, 32, 33) !important;
  --text-muted: rgb(213, 196, 161) !important;
  --text-normal: rgb(212, 190, 152) !important;
  --text-selection: rgba(234, 105, 98, 0.6) !important;
  --text-success: rgb(169, 182, 101) !important;
  --text-warning: rgb(195, 94, 10) !important;
  --textHighlight: rgb(231, 138, 78) !important;
  --titlebar-background: rgb(29, 32, 33) !important;
  --titlebar-background-focused: rgb(60, 56, 54) !important;
  --titlebar-border-color: rgb(60, 56, 54) !important;
  --titlebar-text-color: rgb(213, 196, 161) !important;
  --titlebar-text-color-focused: rgb(234, 105, 98) !important;
  --vault-profile-color: rgb(212, 190, 152) !important;
  --vault-profile-color-hover: rgb(212, 190, 152) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 32, 33);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(80, 73, 69, 0.4);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(29, 32, 33);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 32, 33);
  border-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(80, 73, 69);
  border-radius: 7px;
  color: rgb(137, 180, 130);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 32, 33);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(60, 56, 54);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 32, 33);
  border-left-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(212, 190, 152);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(231, 138, 78);
  color: rgb(29, 32, 33);
  outline: rgb(29, 32, 33) none 0px;
  text-decoration-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body del {
  color: rgb(212, 190, 152);
  outline: rgb(212, 190, 152) none 0px;
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(168, 153, 132);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(168, 153, 132);
  border-color: rgb(168, 153, 132);
}

html[saved-theme="dark"] body p {
  color: rgb(213, 196, 161);
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgba(123, 173, 161, 0.3);
  text-decoration-color: rgba(123, 173, 161, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body dt {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(235, 219, 178);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(29, 32, 33);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(29, 32, 33);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(29, 32, 33);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(29, 32, 33);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgba(80, 73, 69, 0.2);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(80, 73, 69, 0.4);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(60, 56, 54);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body tr {
  background-color: rgba(40, 40, 40, 0.2);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: rgb(125, 174, 163);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(231, 138, 78);
  border-left-color: rgb(231, 138, 78);
  border-right-color: rgb(231, 138, 78);
  border-top-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(234, 105, 98);
  border-left-color: rgb(234, 105, 98);
  border-right-color: rgb(234, 105, 98);
  border-top-color: rgb(234, 105, 98);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(123, 173, 161);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(168, 153, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 153, 132);
  border-right-color: rgb(168, 153, 132);
  border-top-color: rgb(168, 153, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
  color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 125,174,163;
  background-color: rgba(125, 174, 163, 0.1);
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 234,105,98;
  background-color: rgba(234, 105, 98, 0.1);
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 234,105,98;
  background-color: rgba(234, 105, 98, 0.1);
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 211,134,155;
  background-color: rgba(211, 134, 155, 0.1);
  border-bottom-color: rgba(211, 134, 155, 0.25);
  border-left-color: rgba(211, 134, 155, 0.25);
  border-right-color: rgba(211, 134, 155, 0.25);
  border-top-color: rgba(211, 134, 155, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 234,105,98;
  background-color: rgba(234, 105, 98, 0.1);
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 195,94,10;
  background-color: rgba(195, 94, 10, 0.1);
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 169,182,101;
  background-color: rgba(169, 182, 101, 0.1);
  border-bottom-color: rgba(169, 182, 101, 0.25);
  border-left-color: rgba(169, 182, 101, 0.25);
  border-right-color: rgba(169, 182, 101, 0.25);
  border-top-color: rgba(169, 182, 101, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 125,174,163;
  background-color: rgba(125, 174, 163, 0.1);
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 195,94,10;
  background-color: rgba(195, 94, 10, 0.1);
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
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
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(212, 190, 152);
  outline: rgb(212, 190, 152) none 0px;
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(80, 73, 69);
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(137, 180, 130);
}

html[saved-theme="dark"] body h1 {
  color: rgb(234, 105, 98);
}

html[saved-theme="dark"] body h2 {
  color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body h3 {
  color: rgb(169, 182, 101);
}

html[saved-theme="dark"] body h4 {
  color: rgb(137, 180, 130);
}

html[saved-theme="dark"] body h5 {
  color: rgb(125, 174, 163);
}

html[saved-theme="dark"] body h6 {
  color: rgb(211, 134, 155);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 69,112,122;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 196, 161);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(212, 190, 152);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(213, 196, 161);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(213, 196, 161);
  stroke: rgb(213, 196, 161);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(235, 219, 178);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body abbr {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: rgb(125, 174, 163);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body sub {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body summary {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body sup {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(80, 73, 69);
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: rgb(137, 180, 130);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 166 !important;
  --accent-l: 58% !important;
  --accent-s: 23% !important;
  --background-accent: rgb(242, 229, 188) !important;
  --background-modifier-active-hover: hsla(166, 23%, 58%, 0.1) !important;
  --background-modifier-border: rgb(213, 196, 161) !important;
  --background-modifier-error: rgb(193, 74, 74) !important;
  --background-modifier-error-hover: rgb(193, 74, 74) !important;
  --background-modifier-error-rgb: 193,74,74 !important;
  --background-modifier-success: rgb(108, 120, 46) !important;
  --background-modifier-success-rgb: 108,120,46 !important;
  --background-primary: rgb(249, 245, 215) !important;
  --background-primary-alt: rgb(249, 245, 215) !important;
  --background-secondary: rgb(235, 219, 178) !important;
  --background-secondary-alt: rgb(235, 219, 178) !important;
  --bases-cards-background: rgb(249, 245, 215) !important;
  --bases-cards-cover-background: rgb(249, 245, 215) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(213, 196, 161) !important;
  --bases-embed-border-color: rgb(213, 196, 161) !important;
  --bases-group-heading-property-color: rgb(115, 81, 69) !important;
  --bases-table-border-color: rgb(213, 196, 161) !important;
  --bases-table-cell-background-active: rgb(249, 245, 215) !important;
  --bases-table-cell-background-disabled: rgb(249, 245, 215) !important;
  --bases-table-cell-background-selected: hsla(166, 23%, 58%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(165, 23.23%, 62.35%) !important;
  --bases-table-group-background: rgb(249, 245, 215) !important;
  --bases-table-header-background: rgb(249, 245, 215) !important;
  --bases-table-header-color: rgb(115, 81, 69) !important;
  --bases-table-row-background-hover: rgb(213, 196, 161) !important;
  --bases-table-summary-background: rgb(249, 245, 215) !important;
  --blockquote-border-color: hsl(165, 23.23%, 62.35%) !important;
  --blur-background: color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent)) !important;
  --bold-color: rgb(195, 94, 10) !important;
  --bold-weight: 600 !important;
  --calendar-background-hover: rgb(235, 219, 178) !important;
  --calendar-hover: rgb(234, 105, 98) !important;
  --calendar-today: rgb(234, 105, 98) !important;
  --calendar-week: rgb(234, 105, 98) !important;
  --callout-bug: 193,74,74;
  --callout-default: 69,112,122;
  --callout-error: 193,74,74;
  --callout-example: 148,94,128;
  --callout-fail: 193,74,74;
  --callout-important: 125,174,163;
  --callout-info: 69,112,122;
  --callout-question: 195,94,10;
  --callout-success: 108,120,46;
  --callout-summary: 125,174,163;
  --callout-tip: 125,174,163;
  --callout-todo: 69,112,122;
  --callout-warning: 195,94,10;
  --canvas-background: rgb(249, 245, 215) !important;
  --canvas-card-label-color: rgb(179, 126, 93) !important;
  --canvas-color-1: 193,74,74 !important;
  --canvas-color-2: 195,94,10 !important;
  --canvas-color-3: 231,138,78 !important;
  --canvas-color-4: 108,120,46 !important;
  --canvas-color-5: 125,174,163 !important;
  --canvas-color-6: 148,94,128 !important;
  --caret-color: rgb(101, 71, 53) !important;
  --checkbox-border-color: rgb(168, 153, 132) !important;
  --checkbox-border-color-hover: rgb(168, 153, 132) !important;
  --checkbox-color: rgb(168, 153, 132) !important;
  --checkbox-color-hover: rgb(168, 153, 132) !important;
  --checkbox-marker-color: rgb(249, 245, 215) !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: rgba(80, 73, 69, 0.4) !important;
  --code-background: rgb(235, 219, 178) !important;
  --code-border-color: rgb(213, 196, 161) !important;
  --code-comment: rgb(179, 126, 93) !important;
  --code-function: rgb(231, 138, 78) !important;
  --code-important: rgb(195, 94, 10) !important;
  --code-keyword: rgb(148, 94, 128) !important;
  --code-normal: rgb(125, 174, 163) !important;
  --code-operator: rgb(193, 74, 74) !important;
  --code-property: rgb(125, 174, 163) !important;
  --code-punctuation: rgb(115, 81, 69) !important;
  --code-string: rgb(108, 120, 46) !important;
  --code-tag: rgb(193, 74, 74) !important;
  --code-value: rgb(148, 94, 128) !important;
  --collapse-icon-color: rgb(179, 126, 93) !important;
  --collapse-icon-color-collapsed: rgb(231, 138, 78) !important;
  --color-accent: hsl(166, 23%, 58%) !important;
  --color-accent-1: hsl(165, 23.23%, 62.35%) !important;
  --color-accent-2: hsl(163, 23.46%, 66.7%) !important;
  --color-accent-hsl: 166, 23%, 58% !important;
  --color-blue: rgb(69, 112, 122) !important;
  --color-blue-rgb: 69,112,122 !important;
  --color-cyan: rgb(125, 174, 163) !important;
  --color-cyan-rgb: 125,174,163 !important;
  --color-green: rgb(108, 120, 46) !important;
  --color-green-rgb: 108,120,46 !important;
  --color-orange: rgb(195, 94, 10) !important;
  --color-orange-rgb: 195,94,10 !important;
  --color-pink: rgb(148, 94, 128) !important;
  --color-pink-rgb: 148,94,128 !important;
  --color-purple: rgb(148, 94, 128) !important;
  --color-purple-rgb: 148,94,128 !important;
  --color-red: rgb(193, 74, 74) !important;
  --color-red-rgb: 193,74,74 !important;
  --color-yellow: rgb(231, 138, 78) !important;
  --color-yellow-rgb: 231,138,78 !important;
  --cursor-line-background: rgba(235, 219, 178, 0.5) !important;
  --dark: rgb(101, 71, 53) !important;
  --dark-text: rgb(101, 71, 53) !important;
  --dark-text-faint: rgb(179, 126, 93) !important;
  --dark-text-faint-x: 179,126,93 !important;
  --dark-text-muted: rgb(115, 81, 69) !important;
  --dark-text-muted-x: 115,81,69 !important;
  --dark-text-x: 101,71,53 !important;
  --dark0: rgb(40, 40, 40) !important;
  --dark0-hard: rgb(29, 32, 33) !important;
  --dark0-hard-x: 29,32,33 !important;
  --dark0-soft: rgb(50, 48, 47) !important;
  --dark0-soft-x: 50,48,47 !important;
  --dark0-x: 40,40,40 !important;
  --dark1: rgb(60, 56, 54) !important;
  --dark1-x: 60,56,54 !important;
  --dark2: rgb(80, 73, 69) !important;
  --dark2-x: 80,73,69 !important;
  --dark3: rgb(102, 92, 84) !important;
  --dark3-x: 102,92,84 !important;
  --dark4: rgb(124, 111, 100) !important;
  --dark4-x: 124,111,100 !important;
  --darkgray: rgb(101, 71, 53) !important;
  --dataview-key: rgb(179, 126, 93) !important;
  --dataview-key-background: rgba(193, 74, 74, 0.3) !important;
  --dataview-value: rgb(179, 126, 93) !important;
  --dataview-value-background: rgba(169, 182, 101, 0.2) !important;
  --divider-color: rgb(213, 196, 161) !important;
  --divider-color-hover: hsl(165, 23.23%, 62.35%) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(213, 196, 161), inset 0 0 0 1px rgb(213, 196, 161) !important;
  --embed-border-left: 6px double hsl(165, 23.23%, 62.35%) !important;
  --embed-border-start: 2px solid hsl(165, 23.23%, 62.35%) !important;
  --faded-aqua: rgb(76, 122, 93) !important;
  --faded-aqua-x: 76,122,93 !important;
  --faded-blue: rgb(69, 112, 122) !important;
  --faded-blue-x: 69,112,122 !important;
  --faded-green: rgb(108, 120, 46) !important;
  --faded-green-x: 108,120,46 !important;
  --faded-purple: rgb(148, 94, 128) !important;
  --faded-purple-x: 148,94,128 !important;
  --faded-red: rgb(193, 74, 74) !important;
  --faded-red-x: 193,74,74 !important;
  --faded-yellow: rgb(195, 94, 10) !important;
  --faded-yellow-x: 195,94,10 !important;
  --file-header-background: rgb(249, 245, 215) !important;
  --file-header-background-focused: rgb(249, 245, 215) !important;
  --flair-color: rgb(101, 71, 53) !important;
  --flashing-background: rgba(234, 105, 98, 0.3) !important;
  --footnote-divider-color: rgb(213, 196, 161) !important;
  --footnote-id-color: rgb(115, 81, 69) !important;
  --footnote-id-color-no-occurrences: rgb(179, 126, 93) !important;
  --graph-line: rgb(189, 174, 147) !important;
  --graph-node: rgb(146, 131, 116) !important;
  --graph-node-attachment: rgb(169, 182, 101) !important;
  --graph-node-focused: rgb(231, 138, 78) !important;
  --graph-node-tag: rgb(193, 74, 74) !important;
  --graph-node-unresolved: rgb(179, 126, 93) !important;
  --graph-text: rgb(101, 71, 53) !important;
  --gray: rgb(146, 131, 116) !important;
  --gray-x: 146,131,116 !important;
  --h1-color: rgb(193, 74, 74) !important;
  --h2-color: rgb(195, 94, 10) !important;
  --h3-color: rgb(108, 120, 46) !important;
  --h4-color: rgb(76, 122, 93) !important;
  --h5-color: rgb(69, 112, 122) !important;
  --h6-color: rgb(148, 94, 128) !important;
  --heading-formatting: rgb(179, 126, 93) !important;
  --highlight: rgb(195, 94, 10) !important;
  --hr-color: rgb(213, 196, 161) !important;
  --icon-color: rgb(115, 81, 69) !important;
  --icon-color-active: rgb(231, 138, 78) !important;
  --icon-color-focused: rgb(125, 174, 163) !important;
  --icon-color-hover: rgb(234, 105, 98) !important;
  --inline-title-color: rgb(231, 138, 78) !important;
  --input-date-separator: rgb(179, 126, 93) !important;
  --input-placeholder-color: rgb(179, 126, 93) !important;
  --interactive-accent: hsl(165, 23.23%, 62.35%) !important;
  --interactive-accent-hover: hsl(163, 23.46%, 66.7%) !important;
  --interactive-accent-hsl: 166, 23%, 58% !important;
  --italic-color: rgb(195, 94, 10) !important;
  --light: rgb(249, 245, 215) !important;
  --light-text: rgb(212, 190, 152) !important;
  --light-text-x: 212,190,152 !important;
  --light0: rgb(251, 241, 199) !important;
  --light0-hard: rgb(249, 245, 215) !important;
  --light0-hard-x: 249,245,215 !important;
  --light0-soft: rgb(242, 229, 188) !important;
  --light0-soft-x: 242,229,188 !important;
  --light0-x: 251,241,199 !important;
  --light1: rgb(235, 219, 178) !important;
  --light1-x: 235,219,178 !important;
  --light2: rgb(213, 196, 161) !important;
  --light2-x: 213,196,161 !important;
  --light3: rgb(189, 174, 147) !important;
  --light3-x: 189,174,147 !important;
  --light4: rgb(168, 153, 132) !important;
  --light4-x: 168,153,132 !important;
  --lightgray: rgb(235, 219, 178) !important;
  --link-color: rgb(231, 138, 78) !important;
  --link-color-hover: rgb(195, 94, 10) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(231, 138, 78) !important;
  --link-external-color-hover: rgb(195, 94, 10) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(231, 138, 78) !important;
  --link-unresolved-decoration-color: hsla(166, 23%, 58%, 0.3) !important;
  --list-marker-color: rgb(179, 126, 93) !important;
  --list-marker-color-collapsed: rgb(231, 138, 78) !important;
  --list-marker-color-hover: rgb(115, 81, 69) !important;
  --menu-background: rgb(235, 219, 178) !important;
  --mermaid-actor: rgb(189, 174, 147) !important;
  --mermaid-loopline: rgb(69, 112, 122) !important;
  --mermaid-note: rgb(125, 174, 163) !important;
  --metadata-border-color: rgb(213, 196, 161) !important;
  --metadata-divider-color: rgb(213, 196, 161) !important;
  --metadata-input-text-color: rgb(101, 71, 53) !important;
  --metadata-label-text-color: rgb(115, 81, 69) !important;
  --metadata-label-text-color-hover: rgb(115, 81, 69) !important;
  --modal-background: rgb(249, 245, 215) !important;
  --nav-collapse-icon-color: rgb(179, 126, 93) !important;
  --nav-collapse-icon-color-collapsed: rgb(179, 126, 93) !important;
  --nav-file-tag: rgba(69, 112, 122, 0.9) !important;
  --nav-heading-color: rgb(101, 71, 53) !important;
  --nav-heading-color-collapsed: rgb(179, 126, 93) !important;
  --nav-heading-color-collapsed-hover: rgb(115, 81, 69) !important;
  --nav-heading-color-hover: rgb(101, 71, 53) !important;
  --nav-item-background-selected: hsla(166, 23%, 58%, 0.15) !important;
  --nav-item-color: rgb(115, 81, 69) !important;
  --nav-item-color-active: rgb(69, 112, 122) !important;
  --nav-item-color-highlighted: rgb(231, 138, 78) !important;
  --nav-item-color-hover: rgb(234, 105, 98) !important;
  --nav-item-color-selected: rgb(101, 71, 53) !important;
  --nav-tag-color: rgb(179, 126, 93) !important;
  --nav-tag-color-active: rgb(115, 81, 69) !important;
  --nav-tag-color-hover: rgb(115, 81, 69) !important;
  --neutral-aqua: rgb(137, 180, 130) !important;
  --neutral-aqua-x: 137,180,130 !important;
  --neutral-blue: rgb(125, 174, 163) !important;
  --neutral-blue-x: 125,174,163 !important;
  --neutral-green: rgb(169, 182, 101) !important;
  --neutral-green-x: 169,182,101 !important;
  --neutral-purple: rgb(211, 134, 155) !important;
  --neutral-purple-x: 211,134,155 !important;
  --neutral-red: rgb(234, 105, 98) !important;
  --neutral-red-x: 234,105,98 !important;
  --neutral-yellow: rgb(231, 138, 78) !important;
  --neutral-yellow-x: 231,138,78 !important;
  --pdf-background: rgb(249, 245, 215) !important;
  --pdf-page-background: rgb(249, 245, 215) !important;
  --pdf-sidebar-background: rgb(249, 245, 215) !important;
  --pill-border-color: rgb(213, 196, 161) !important;
  --pill-color: rgb(115, 81, 69) !important;
  --pill-color-hover: rgb(101, 71, 53) !important;
  --pill-color-remove: rgb(179, 126, 93) !important;
  --pill-color-remove-hover: rgb(231, 138, 78) !important;
  --prompt-background: rgb(249, 245, 215) !important;
  --raised-background: color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent)) !important;
  --ribbon-background: rgb(235, 219, 178) !important;
  --ribbon-background-collapsed: rgb(249, 245, 215) !important;
  --search-clear-button-color: rgb(115, 81, 69) !important;
  --search-icon-color: rgb(115, 81, 69) !important;
  --search-result-background: rgb(249, 245, 215) !important;
  --secondary: rgb(231, 138, 78) !important;
  --setting-group-heading-color: rgb(101, 71, 53) !important;
  --setting-items-background: rgb(249, 245, 215) !important;
  --setting-items-border-color: rgb(213, 196, 161) !important;
  --slider-track-background: rgb(213, 196, 161) !important;
  --status-bar-background: rgb(235, 219, 178) !important;
  --status-bar-border-color: rgb(213, 196, 161) !important;
  --status-bar-text-color: rgb(115, 81, 69) !important;
  --suggestion-background: rgb(249, 245, 215) !important;
  --sync-avatar-color-1: rgb(193, 74, 74) !important;
  --sync-avatar-color-2: rgb(195, 94, 10) !important;
  --sync-avatar-color-3: rgb(231, 138, 78) !important;
  --sync-avatar-color-4: rgb(108, 120, 46) !important;
  --sync-avatar-color-5: rgb(125, 174, 163) !important;
  --sync-avatar-color-6: rgb(69, 112, 122) !important;
  --sync-avatar-color-7: rgb(148, 94, 128) !important;
  --sync-avatar-color-8: rgb(148, 94, 128) !important;
  --tab-background-active: rgb(249, 245, 215) !important;
  --tab-container-background: rgb(235, 219, 178) !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: rgb(213, 196, 161) !important;
  --tab-switcher-background: rgb(235, 219, 178) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(235, 219, 178), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(166, 23%, 58%) !important;
  --tab-text-color: rgb(179, 126, 93) !important;
  --tab-text-color-active: rgb(115, 81, 69) !important;
  --tab-text-color-focused: rgb(115, 81, 69) !important;
  --tab-text-color-focused-active: rgb(231, 138, 78) !important;
  --tab-text-color-focused-active-current: rgb(234, 105, 98) !important;
  --tab-text-color-focused-highlighted: rgb(231, 138, 78) !important;
  --table-add-button-border-color: rgb(213, 196, 161) !important;
  --table-border-color: rgb(213, 196, 161) !important;
  --table-drag-handle-background-active: hsl(165, 23.23%, 62.35%) !important;
  --table-drag-handle-color: rgb(179, 126, 93) !important;
  --table-header-background: rgba(189, 174, 147, 0.4) !important;
  --table-header-background-hover: rgb(213, 196, 161) !important;
  --table-header-border-color: rgb(213, 196, 161) !important;
  --table-header-color: rgb(101, 71, 53) !important;
  --table-row-background-hover: rgb(213, 196, 161) !important;
  --table-row-even-background: rgba(235, 219, 178, 0.2) !important;
  --table-row-odd-background: rgba(235, 219, 178, 0.7) !important;
  --table-selection: hsla(166, 23%, 58%, 0.1) !important;
  --table-selection-border-color: hsl(165, 23.23%, 62.35%) !important;
  --tag-background: rgb(235, 219, 178) !important;
  --tag-background-hover: rgba(235, 219, 178, 0.6) !important;
  --tag-border-color: hsla(166, 23%, 58%, 0.15) !important;
  --tag-border-color-hover: hsla(166, 23%, 58%, 0.15) !important;
  --tag-color: rgb(76, 122, 93) !important;
  --tag-color-hover: rgb(231, 138, 78) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .5em !important;
  --tertiary: rgb(195, 94, 10) !important;
  --text-accent: rgb(231, 138, 78) !important;
  --text-accent-hover: rgb(195, 94, 10) !important;
  --text-error: rgb(193, 74, 74) !important;
  --text-faint: rgb(179, 126, 93) !important;
  --text-highlight-bg: rgb(195, 94, 10) !important;
  --text-highlight-fg: rgb(249, 245, 215) !important;
  --text-muted: rgb(115, 81, 69) !important;
  --text-normal: rgb(101, 71, 53) !important;
  --text-selection: rgba(234, 105, 98, 0.6) !important;
  --text-success: rgb(108, 120, 46) !important;
  --text-warning: rgb(195, 94, 10) !important;
  --textHighlight: rgb(195, 94, 10) !important;
  --titlebar-background: rgb(235, 219, 178) !important;
  --titlebar-background-focused: rgb(235, 219, 178) !important;
  --titlebar-border-color: rgb(213, 196, 161) !important;
  --titlebar-text-color: rgb(115, 81, 69) !important;
  --vault-profile-color: rgb(101, 71, 53) !important;
  --vault-profile-color-hover: rgb(101, 71, 53) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 219, 178);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(249, 245, 215);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(235, 219, 178, 0.7);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(235, 219, 178);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(249, 245, 215);
  border-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(235, 219, 178);
  border-radius: 7px;
  color: rgb(76, 122, 93);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 219, 178);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 219, 178);
  border-left-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(249, 245, 215);
  color: rgb(101, 71, 53);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(195, 94, 10);
  outline: rgb(195, 94, 10) none 0px;
  text-decoration-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(195, 94, 10);
  outline: rgb(195, 94, 10) none 0px;
  text-decoration-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(195, 94, 10);
  outline: rgb(195, 94, 10) none 0px;
  text-decoration-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(195, 94, 10);
  outline: rgb(195, 94, 10) none 0px;
  text-decoration-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(195, 94, 10);
  color: rgb(249, 245, 215);
  outline: rgb(249, 245, 215) none 0px;
  text-decoration-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body del {
  color: rgb(101, 71, 53);
  outline: rgb(101, 71, 53) none 0px;
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(168, 153, 132);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(168, 153, 132);
  border-color: rgb(168, 153, 132);
}

html[saved-theme="light"] body p {
  color: rgb(115, 81, 69);
  outline: rgb(115, 81, 69) none 0px;
  text-decoration-color: rgb(115, 81, 69);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgba(123, 173, 161, 0.3);
  text-decoration-color: rgba(123, 173, 161, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body dt {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ol > li {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ul > li {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(179, 126, 93);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(235, 219, 178);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(235, 219, 178);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(235, 219, 178);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgba(235, 219, 178, 0.2);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(235, 219, 178, 0.7);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(213, 196, 161);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="light"] body tr {
  background-color: rgba(189, 174, 147, 0.4);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: rgb(125, 174, 163);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(231, 138, 78);
  border-left-color: rgb(231, 138, 78);
  border-right-color: rgb(231, 138, 78);
  border-top-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body figcaption {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(193, 74, 74);
  border-left-color: rgb(193, 74, 74);
  border-right-color: rgb(193, 74, 74);
  border-top-color: rgb(193, 74, 74);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(137, 181, 170);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(168, 153, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 153, 132);
  border-right-color: rgb(168, 153, 132);
  border-top-color: rgb(168, 153, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
  color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 125,174,163;
  background-color: rgba(125, 174, 163, 0.1);
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 193,74,74;
  background-color: rgba(193, 74, 74, 0.1);
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 193,74,74;
  background-color: rgba(193, 74, 74, 0.1);
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 148,94,128;
  background-color: rgba(148, 94, 128, 0.1);
  border-bottom-color: rgba(148, 94, 128, 0.25);
  border-left-color: rgba(148, 94, 128, 0.25);
  border-right-color: rgba(148, 94, 128, 0.25);
  border-top-color: rgba(148, 94, 128, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 193,74,74;
  background-color: rgba(193, 74, 74, 0.1);
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 195,94,10;
  background-color: rgba(195, 94, 10, 0.1);
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 108,120,46;
  background-color: rgba(108, 120, 46, 0.1);
  border-bottom-color: rgba(108, 120, 46, 0.25);
  border-left-color: rgba(108, 120, 46, 0.25);
  border-right-color: rgba(108, 120, 46, 0.25);
  border-top-color: rgba(108, 120, 46, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 125,174,163;
  background-color: rgba(125, 174, 163, 0.1);
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 195,94,10;
  background-color: rgba(195, 94, 10, 0.1);
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
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
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(101, 71, 53);
  outline: rgb(101, 71, 53) none 0px;
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(76, 122, 93);
}

html[saved-theme="light"] body h1 {
  color: rgb(193, 74, 74);
}

html[saved-theme="light"] body h2 {
  color: rgb(195, 94, 10);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(231, 138, 78);
}

html[saved-theme="light"] body h3 {
  color: rgb(108, 120, 46);
}

html[saved-theme="light"] body h4 {
  color: rgb(76, 122, 93);
}

html[saved-theme="light"] body h5 {
  color: rgb(69, 112, 122);
}

html[saved-theme="light"] body h6 {
  color: rgb(148, 94, 128);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 69,112,122;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(115, 81, 69);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(101, 71, 53);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(115, 81, 69);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(115, 81, 69);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(115, 81, 69);
  stroke: rgb(115, 81, 69);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(179, 126, 93);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(235, 219, 178);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body abbr {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: rgb(125, 174, 163);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body sub {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body summary {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body sup {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: rgb(76, 122, 93);
}`,
  },
};
