import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "nord", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 213 !important;
  --accent-l: 52% !important;
  --accent-s: 32% !important;
  --background-modifier-active-hover: hsla(213, 32%, 52%, 0.1) !important;
  --background-modifier-border: rgb(67, 76, 94) !important;
  --background-modifier-border-focus: rgb(59, 66, 82) !important;
  --background-modifier-border-hover: rgb(67, 76, 94) !important;
  --background-modifier-error: rgb(191, 97, 106) !important;
  --background-modifier-error-hover: rgb(191, 97, 106) !important;
  --background-modifier-error-rgb: 191, 97, 106 !important;
  --background-modifier-form-field: rgb(46, 52, 64) !important;
  --background-modifier-form-field-hover: rgb(46, 52, 64) !important;
  --background-modifier-success: rgb(163, 190, 140) !important;
  --background-modifier-success-rgb: 163, 190, 140 !important;
  --background-primary: rgb(46, 52, 64) !important;
  --background-primary-alt: rgb(46, 52, 64) !important;
  --background-secondary: rgb(59, 66, 82) !important;
  --background-secondary-alt: rgb(67, 76, 94) !important;
  --bases-cards-background: rgb(46, 52, 64) !important;
  --bases-cards-cover-background: rgb(46, 52, 64) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(67, 76, 94) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(67, 76, 94) !important;
  --bases-embed-border-color: rgb(67, 76, 94) !important;
  --bases-group-heading-property-color: rgb(229, 233, 240) !important;
  --bases-table-border-color: rgb(67, 76, 94) !important;
  --bases-table-cell-background-active: rgb(46, 52, 64) !important;
  --bases-table-cell-background-disabled: rgb(46, 52, 64) !important;
  --bases-table-cell-background-selected: hsla(213, 32%, 52%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(59, 66, 82) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(213, 32%, 52%) !important;
  --bases-table-group-background: rgb(46, 52, 64) !important;
  --bases-table-header-background: rgb(46, 52, 64) !important;
  --bases-table-header-color: rgb(229, 233, 240) !important;
  --bases-table-row-background-hover: rgb(76, 86, 106) !important;
  --bases-table-summary-background: rgb(46, 52, 64) !important;
  --blockquote-border-color: hsl(213, 32%, 52%) !important;
  --blur-background: color-mix(in srgb, rgb(59, 66, 82) 65%, transparent) linear-gradient(rgb(59, 66, 82), color-mix(in srgb, rgb(59, 66, 82) 65%, transparent)) !important;
  --bold-color: rgb(94, 129, 172) !important;
  --bold-weight: 600 !important;
  --calendar-background-hover: rgb(76, 86, 106) !important;
  --calendar-hover: rgb(191, 97, 106) !important;
  --calendar-today: rgb(235, 203, 139) !important;
  --calendar-week: rgb(235, 203, 139) !important;
  --callout-bug: 191, 97, 106;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-question: 208, 135, 112;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: rgb(46, 52, 64) !important;
  --canvas-card-label-color: rgb(216, 222, 233) !important;
  --canvas-color-1: 191, 97, 106 !important;
  --canvas-color-2: 208, 135, 112 !important;
  --canvas-color-3: 235, 203, 139 !important;
  --canvas-color-4: 163, 190, 140 !important;
  --canvas-color-5: 136, 192, 208 !important;
  --canvas-color-6: 180, 142, 173 !important;
  --canvas-dot-pattern: rgb(59, 66, 82) !important;
  --caret-color: rgb(236, 239, 244) !important;
  --checkbox-border-color: rgb(216, 222, 233) !important;
  --checkbox-border-color-hover: rgb(229, 233, 240) !important;
  --checkbox-color: hsl(213, 32%, 52%) !important;
  --checkbox-color-hover: hsl(210, 32.64%, 59.8%) !important;
  --checkbox-marker-color: rgb(46, 52, 64) !important;
  --checklist-done-color: rgb(229, 233, 240) !important;
  --code-background: rgb(59, 66, 82) !important;
  --code-border-color: rgb(67, 76, 94) !important;
  --code-comment: rgb(216, 222, 233) !important;
  --code-function: rgb(235, 203, 139) !important;
  --code-important: rgb(208, 135, 112) !important;
  --code-normal: rgb(216, 222, 233) !important;
  --code-operator: rgb(191, 97, 106) !important;
  --code-property: rgb(136, 192, 208) !important;
  --code-punctuation: rgb(229, 233, 240) !important;
  --code-string: rgb(163, 190, 140) !important;
  --code-tag: rgb(191, 97, 106) !important;
  --code-value: rgb(180, 142, 173) !important;
  --collapse-icon-color: rgb(216, 222, 233) !important;
  --collapse-icon-color-collapsed: rgb(143, 188, 187) !important;
  --color-accent: hsl(213, 32%, 52%) !important;
  --color-accent-1: hsl(210, 32.64%, 59.8%) !important;
  --color-accent-2: hsl(208, 33.6%, 67.08%) !important;
  --color-accent-hsl: 213, 32%, 52% !important;
  --color-base-20: rgb(59, 66, 82) !important;
  --color-base-25: rgb(46, 52, 64) !important;
  --color-base-30: rgb(59, 66, 82) !important;
  --color-base-35: rgb(67, 76, 94) !important;
  --color-base-40: rgb(59, 66, 82) !important;
  --color-blue: rgb(94, 129, 172) !important;
  --color-blue-rgb: 94, 129, 172 !important;
  --color-cyan: rgb(136, 192, 208) !important;
  --color-cyan-rgb: 136, 192, 208 !important;
  --color-green: rgb(163, 190, 140) !important;
  --color-green-rgb: 163, 190, 140 !important;
  --color-orange: rgb(208, 135, 112) !important;
  --color-orange-rgb: 208, 135, 112 !important;
  --color-purple: rgb(180, 142, 173) !important;
  --color-purple-rgb: 180, 142, 173 !important;
  --color-red: rgb(191, 97, 106) !important;
  --color-red-rgb: 191, 97, 106 !important;
  --color-yellow: rgb(235, 203, 139) !important;
  --color-yellow-rgb: 235, 203, 139 !important;
  --cursor-line-background: rgba(143, 188, 187, 0.2) !important;
  --dark: rgb(236, 239, 244) !important;
  --dark0: rgb(46, 52, 64) !important;
  --dark0_x: 46, 52, 64 !important;
  --dark1: rgb(59, 66, 82) !important;
  --dark1_x: 59, 66, 82 !important;
  --dark2: rgb(67, 76, 94) !important;
  --dark2_x: 67, 76, 94 !important;
  --dark3: rgb(76, 86, 106) !important;
  --dark3_x: 76, 86, 106 !important;
  --darkgray: rgb(236, 239, 244) !important;
  --dataview-key: rgb(216, 222, 233) !important;
  --dataview-key-background: rgba(129, 161, 193, 0.3) !important;
  --dataview-value: rgb(216, 222, 233) !important;
  --dataview-value-background: rgba(191, 97, 106, 0.3) !important;
  --divider-color: rgb(67, 76, 94) !important;
  --divider-color-hover: hsl(213, 32%, 52%) !important;
  --divider-width: 0.2em !important;
  --dropdown-background: rgb(59, 66, 82) !important;
  --dropdown-background-hover: rgb(67, 76, 94) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(67, 76, 94), inset 0 0 0 1px rgb(67, 76, 94) !important;
  --embed-border-left: 6px double hsl(213, 32%, 52%) !important;
  --embed-border-start: 2px solid hsl(213, 32%, 52%) !important;
  --file-header-background: rgb(46, 52, 64) !important;
  --file-header-background-focused: rgb(46, 52, 64) !important;
  --flair-background: rgb(59, 66, 82) !important;
  --flair-color: rgb(236, 239, 244) !important;
  --flashing-background: rgba(94, 129, 172, 0.3) !important;
  --footnote-divider-color: rgb(67, 76, 94) !important;
  --footnote-id-color: rgb(229, 233, 240) !important;
  --footnote-id-color-no-occurrences: rgb(216, 222, 233) !important;
  --frost0: rgb(143, 188, 187) !important;
  --frost0_x: 143, 188, 187 !important;
  --frost1: rgb(136, 192, 208) !important;
  --frost1_x: 136, 192, 208 !important;
  --frost2: rgb(129, 161, 193) !important;
  --frost2_x: 129, 161, 193 !important;
  --frost3: rgb(94, 129, 172) !important;
  --frost3_x: 94, 129, 172 !important;
  --graph-line: rgb(76, 86, 106) !important;
  --graph-node: rgb(255, 255, 255) !important;
  --graph-node-attachment: rgb(180, 142, 173) !important;
  --graph-node-focused: rgb(143, 188, 187) !important;
  --graph-node-tag: rgb(136, 192, 208) !important;
  --graph-node-unresolved: rgb(59, 66, 82) !important;
  --graph-text: rgb(236, 239, 244) !important;
  --gray: rgb(229, 233, 240) !important;
  --green: rgb(163, 190, 140) !important;
  --green_x: 163, 190, 140 !important;
  --h1-color: rgb(136, 192, 208) !important;
  --h2-color: rgb(129, 161, 193) !important;
  --h3-color: rgb(208, 135, 112) !important;
  --h4-color: rgb(235, 203, 139) !important;
  --h5-color: rgb(191, 97, 106) !important;
  --h6-color: rgb(163, 190, 140) !important;
  --heading-formatting: rgb(216, 222, 233) !important;
  --highlight: rgb(136, 192, 208) !important;
  --hr-color: rgb(67, 76, 94) !important;
  --icon-color: rgb(229, 233, 240) !important;
  --icon-color-active: rgb(143, 188, 187) !important;
  --icon-color-focused: rgb(136, 192, 208) !important;
  --icon-color-hover: rgb(94, 129, 172) !important;
  --inline-title-color: rgb(143, 188, 187) !important;
  --input-date-separator: rgb(216, 222, 233) !important;
  --input-placeholder-color: rgb(216, 222, 233) !important;
  --interactive-accent: hsl(213, 32%, 52%) !important;
  --interactive-accent-hover: hsl(210, 32.64%, 59.8%) !important;
  --interactive-accent-hsl: 213, 32%, 52% !important;
  --interactive-hover: rgb(67, 76, 94) !important;
  --interactive-normal: rgb(59, 66, 82) !important;
  --italic-color: rgb(143, 188, 187) !important;
  --light: rgb(46, 52, 64) !important;
  --light0: rgb(216, 222, 233) !important;
  --light0_x: 216, 222, 233 !important;
  --light1: rgb(229, 233, 240) !important;
  --light1_x: 229, 233, 240 !important;
  --light2: rgb(236, 239, 244) !important;
  --light2_x: 236, 239, 244 !important;
  --light3: rgb(255, 255, 255) !important;
  --light3_x: 255, 255, 255 !important;
  --lightgray: rgb(59, 66, 82) !important;
  --link-color: rgb(180, 142, 173) !important;
  --link-color-hover: rgb(136, 192, 208) !important;
  --link-external-color: rgb(180, 142, 173) !important;
  --link-external-color-hover: rgb(136, 192, 208) !important;
  --link-unresolved-color: rgb(180, 142, 173) !important;
  --link-unresolved-decoration-color: hsla(213, 32%, 52%, 0.3) !important;
  --link-url: rgb(163, 190, 140) !important;
  --list-marker-color: rgb(216, 222, 233) !important;
  --list-marker-color-collapsed: rgb(143, 188, 187) !important;
  --list-marker-color-hover: rgb(229, 233, 240) !important;
  --menu-background: rgb(59, 66, 82) !important;
  --menu-border-color: rgb(67, 76, 94) !important;
  --mermaid-exclude: rgb(76, 86, 106) !important;
  --mermaid-loopline: rgb(136, 192, 208) !important;
  --mermaid-note: rgb(94, 129, 172) !important;
  --mermaid-seqnum: rgb(46, 52, 64) !important;
  --metadata-border-color: rgb(67, 76, 94) !important;
  --metadata-divider-color: rgb(67, 76, 94) !important;
  --metadata-input-text-color: rgb(236, 239, 244) !important;
  --metadata-label-text-color: rgb(229, 233, 240) !important;
  --metadata-label-text-color-hover: rgb(229, 233, 240) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(59, 66, 82) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(67, 76, 94) !important;
  --modal-background: rgb(46, 52, 64) !important;
  --modal-border-color: rgb(59, 66, 82) !important;
  --nav-collapse-icon-color: rgb(216, 222, 233) !important;
  --nav-collapse-icon-color-collapsed: rgb(216, 222, 233) !important;
  --nav-file-tag: rgba(235, 203, 139, 0.9) !important;
  --nav-heading-color: rgb(236, 239, 244) !important;
  --nav-heading-color-collapsed: rgb(216, 222, 233) !important;
  --nav-heading-color-collapsed-hover: rgb(229, 233, 240) !important;
  --nav-heading-color-hover: rgb(236, 239, 244) !important;
  --nav-item-background-selected: hsla(213, 32%, 52%, 0.15) !important;
  --nav-item-color: rgb(229, 233, 240) !important;
  --nav-item-color-active: rgb(136, 192, 208) !important;
  --nav-item-color-highlighted: rgb(143, 188, 187) !important;
  --nav-item-color-hover: rgb(94, 129, 172) !important;
  --nav-item-color-selected: rgb(236, 239, 244) !important;
  --nav-tag-color: rgb(216, 222, 233) !important;
  --nav-tag-color-active: rgb(229, 233, 240) !important;
  --nav-tag-color-hover: rgb(229, 233, 240) !important;
  --orange: rgb(208, 135, 112) !important;
  --orange_x: 208, 135, 112 !important;
  --pdf-background: rgb(46, 52, 64) !important;
  --pdf-page-background: rgb(46, 52, 64) !important;
  --pdf-shadow: 0 0 0 1px rgb(67, 76, 94) !important;
  --pdf-sidebar-background: rgb(46, 52, 64) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(67, 76, 94) !important;
  --pill-border-color: rgb(67, 76, 94) !important;
  --pill-border-color-hover: rgb(67, 76, 94) !important;
  --pill-color: rgb(229, 233, 240) !important;
  --pill-color-hover: rgb(236, 239, 244) !important;
  --pill-color-remove: rgb(216, 222, 233) !important;
  --pill-color-remove-hover: rgb(143, 188, 187) !important;
  --prompt-background: rgb(46, 52, 64) !important;
  --prompt-border-color: rgb(59, 66, 82) !important;
  --purple: rgb(180, 142, 173) !important;
  --purple_x: 180, 142, 173 !important;
  --raised-background: color-mix(in srgb, rgb(59, 66, 82) 65%, transparent) linear-gradient(rgb(59, 66, 82), color-mix(in srgb, rgb(59, 66, 82) 65%, transparent)) !important;
  --red: rgb(191, 97, 106) !important;
  --red_x: 191, 97, 106 !important;
  --ribbon-background: rgb(59, 66, 82) !important;
  --ribbon-background-collapsed: rgb(46, 52, 64) !important;
  --search-clear-button-color: rgb(191, 97, 106) !important;
  --search-icon-color: rgb(229, 233, 240) !important;
  --search-result-background: rgb(46, 52, 64) !important;
  --secondary: rgb(143, 188, 187) !important;
  --setting-group-heading-color: rgb(236, 239, 244) !important;
  --setting-items-background: rgb(46, 52, 64) !important;
  --setting-items-border-color: rgb(67, 76, 94) !important;
  --slider-thumb-border-color: rgb(67, 76, 94) !important;
  --slider-track-background: rgb(67, 76, 94) !important;
  --status-bar-background: rgb(59, 66, 82) !important;
  --status-bar-border-color: rgb(76, 86, 106) !important;
  --status-bar-text-color: rgb(229, 233, 240) !important;
  --suggestion-background: rgb(46, 52, 64) !important;
  --sync-avatar-color-1: rgb(191, 97, 106) !important;
  --sync-avatar-color-2: rgb(208, 135, 112) !important;
  --sync-avatar-color-3: rgb(235, 203, 139) !important;
  --sync-avatar-color-4: rgb(163, 190, 140) !important;
  --sync-avatar-color-5: rgb(136, 192, 208) !important;
  --sync-avatar-color-6: rgb(94, 129, 172) !important;
  --sync-avatar-color-7: rgb(180, 142, 173) !important;
  --tab-background-active: rgb(46, 52, 64) !important;
  --tab-container-background: rgb(59, 66, 82) !important;
  --tab-curve: 0.6em !important;
  --tab-divider-color: rgb(67, 76, 94) !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: rgb(67, 76, 94) !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0.5em !important;
  --tab-radius-active: 0.5em !important;
  --tab-switcher-background: rgb(59, 66, 82) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(59, 66, 82), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 32%, 52%) !important;
  --tab-text-color: rgb(216, 222, 233) !important;
  --tab-text-color-active: rgb(229, 233, 240) !important;
  --tab-text-color-focused: rgb(229, 233, 240) !important;
  --tab-text-color-focused-active: rgb(94, 129, 172) !important;
  --tab-text-color-focused-active-current: rgb(136, 192, 208) !important;
  --tab-text-color-focused-highlighted: rgb(136, 192, 208) !important;
  --table-add-button-border-color: rgb(67, 76, 94) !important;
  --table-border-color: rgb(67, 76, 94) !important;
  --table-drag-handle-background-active: hsl(213, 32%, 52%) !important;
  --table-drag-handle-color: rgb(216, 222, 233) !important;
  --table-header-background: hsl(220, 16%, 16%) !important;
  --table-header-background-hover: rgb(76, 86, 106) !important;
  --table-header-border-color: rgb(67, 76, 94) !important;
  --table-header-color: rgb(236, 239, 244) !important;
  --table-row-background-hover: rgb(76, 86, 106) !important;
  --table-row-even-background: hsl(220, 16%, 20%) !important;
  --table-row-odd-background: hsl(220, 16%, 24%) !important;
  --table-selection: hsla(213, 32%, 52%, 0.1) !important;
  --table-selection-border-color: hsl(213, 32%, 52%) !important;
  --tag-background: rgb(59, 66, 82) !important;
  --tag-background-hover: rgb(46, 52, 64) !important;
  --tag-border-color: hsla(213, 32%, 52%, 0.15) !important;
  --tag-border-color-hover: hsla(213, 32%, 52%, 0.15) !important;
  --tag-color: rgb(129, 161, 193) !important;
  --tag-color-hover: rgb(143, 188, 187) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0.4em !important;
  --tag-padding-y: 0.2em !important;
  --tag-radius: 0.5em !important;
  --tertiary: rgb(136, 192, 208) !important;
  --text-accent: rgb(143, 188, 187) !important;
  --text-accent-hover: rgb(136, 192, 208) !important;
  --text-error: rgb(191, 97, 106) !important;
  --text-faint: rgb(216, 222, 233) !important;
  --text-highlight-bg: rgb(136, 192, 208) !important;
  --text-highlight-fg: rgb(46, 52, 64) !important;
  --text-muted: rgb(229, 233, 240) !important;
  --text-normal: rgb(236, 239, 244) !important;
  --text-selection: rgba(94, 129, 172, 0.6) !important;
  --text-success: rgb(163, 190, 140) !important;
  --text-warning: rgb(208, 135, 112) !important;
  --textHighlight: rgb(136, 192, 208) !important;
  --titlebar-background: rgb(59, 66, 82) !important;
  --titlebar-background-focused: rgb(59, 66, 82) !important;
  --titlebar-border-color: rgb(67, 76, 94) !important;
  --titlebar-border-width: 0em !important;
  --titlebar-text-color: rgb(229, 233, 240) !important;
  --titlebar-text-color-focused: rgb(143, 188, 187) !important;
  --vault-profile-color: rgb(236, 239, 244) !important;
  --vault-profile-color-hover: rgb(236, 239, 244) !important;
  --yellow: rgb(235, 203, 139) !important;
  --yellow_x: 235, 203, 139 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 82);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(51, 58, 71);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(59, 66, 82);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(59, 66, 82);
  border-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(67, 76, 94);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(59, 66, 82);
  border-radius: 7px;
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(59, 66, 82);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 76, 94);
  border-right-width: 3px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 82);
  border-left-color: rgb(67, 76, 94);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(94, 129, 172);
  outline: rgb(94, 129, 172) none 0px;
  text-decoration-color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(94, 129, 172);
  outline: rgb(94, 129, 172) none 0px;
  text-decoration-color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(136, 192, 208);
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body del {
  color: rgb(236, 239, 244);
  outline: rgb(236, 239, 244) none 0px;
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(93, 129, 172);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(229, 233, 240);
  outline: rgb(229, 233, 240) none 0px;
  text-decoration-color: rgb(229, 233, 240);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(180, 142, 173);
  outline: rgb(180, 142, 173) none 0px;
  text-decoration-color: rgb(180, 142, 173);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(180, 142, 173);
  outline: rgb(180, 142, 173) none 0px;
  text-decoration-color: rgb(180, 142, 173);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(180, 142, 173);
  outline: rgb(180, 142, 173) none 0px;
  text-decoration: underline rgba(93, 129, 172, 0.3);
  text-decoration-color: rgba(93, 129, 172, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(216, 222, 233);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(59, 66, 82);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(59, 66, 82);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(59, 66, 82);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(59, 66, 82);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(43, 48, 59);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(51, 58, 71);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(67, 76, 94);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(34, 39, 47);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(93, 129, 172);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.2s ease-out;
  width: 17.3281px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(208, 135, 112);
  text-decoration: underline;
  text-decoration-color: rgb(208, 135, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(191, 97, 106);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(229, 233, 240);
  text-decoration-color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 180, 142, 173;
  background-color: rgba(180, 142, 173, 0.1);
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-left-color: rgba(180, 142, 173, 0.25);
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgba(180, 142, 173, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 94, 129, 172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 94, 129, 172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-left-color: rgba(163, 190, 140, 0.25);
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgba(163, 190, 140, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 94, 129, 172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
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
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(236, 239, 244);
  outline: rgb(236, 239, 244) none 0px;
  text-decoration-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgba(93, 129, 172, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(93, 129, 172, 0.15);
  border-right-color: rgba(93, 129, 172, 0.15);
  border-top-color: rgba(93, 129, 172, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body h1 {
  color: rgb(136, 192, 208);
}

html[saved-theme="dark"] body h2 {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body h3 {
  color: rgb(208, 135, 112);
}

html[saved-theme="dark"] body h4 {
  color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body h5 {
  color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body h6 {
  color: rgb(163, 190, 140);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-right-width: 3px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(229, 233, 240);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(236, 239, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(229, 233, 240);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(229, 233, 240);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(229, 233, 240);
  stroke: rgb(229, 233, 240);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(216, 222, 233);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body abbr {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgba(93, 129, 172, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(93, 129, 172, 0.15);
  border-right-color: rgba(93, 129, 172, 0.15);
  border-top-color: rgba(93, 129, 172, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: rgb(129, 161, 193);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 213 !important;
  --accent-l: 52% !important;
  --accent-s: 32% !important;
  --background-modifier-active-hover: hsla(213, 32%, 52%, 0.1) !important;
  --bases-table-cell-background-selected: hsla(213, 32%, 52%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(212, 32.32%, 55.9%) !important;
  --blockquote-border-color: hsl(212, 32.32%, 55.9%) !important;
  --bold-weight: 600 !important;
  --checkbox-color: hsl(212, 32.32%, 55.9%) !important;
  --checkbox-color-hover: hsl(210, 32.64%, 59.8%) !important;
  --collapse-icon-color-collapsed: hsl(213, 32%, 52%) !important;
  --color-accent: hsl(213, 32%, 52%) !important;
  --color-accent-1: hsl(212, 32.32%, 55.9%) !important;
  --color-accent-2: hsl(210, 32.64%, 59.8%) !important;
  --color-accent-hsl: 213, 32%, 52% !important;
  --dark0: rgb(46, 52, 64) !important;
  --dark0_x: 46, 52, 64 !important;
  --dark1: rgb(59, 66, 82) !important;
  --dark1_x: 59, 66, 82 !important;
  --dark2: rgb(67, 76, 94) !important;
  --dark2_x: 67, 76, 94 !important;
  --dark3: rgb(76, 86, 106) !important;
  --dark3_x: 76, 86, 106 !important;
  --divider-color-hover: hsl(212, 32.32%, 55.9%) !important;
  --divider-width: 0.2em !important;
  --embed-border-left: 6px double hsl(212, 32.32%, 55.9%) !important;
  --embed-border-start: 2px solid hsl(212, 32.32%, 55.9%) !important;
  --frost0: rgb(143, 188, 187) !important;
  --frost0_x: 143, 188, 187 !important;
  --frost1: rgb(136, 192, 208) !important;
  --frost1_x: 136, 192, 208 !important;
  --frost2: rgb(129, 161, 193) !important;
  --frost2_x: 129, 161, 193 !important;
  --frost3: rgb(94, 129, 172) !important;
  --frost3_x: 94, 129, 172 !important;
  --graph-node-focused: hsl(213, 32%, 52%) !important;
  --green: rgb(163, 190, 140) !important;
  --green_x: 163, 190, 140 !important;
  --highlight: hsla(213, 32%, 52%, 0.1) !important;
  --icon-color-active: hsl(213, 32%, 52%) !important;
  --interactive-accent: hsl(212, 32.32%, 55.9%) !important;
  --interactive-accent-hover: hsl(210, 32.64%, 59.8%) !important;
  --interactive-accent-hsl: 213, 32%, 52% !important;
  --light0: rgb(216, 222, 233) !important;
  --light0_x: 216, 222, 233 !important;
  --light1: rgb(229, 233, 240) !important;
  --light1_x: 229, 233, 240 !important;
  --light2: rgb(236, 239, 244) !important;
  --light2_x: 236, 239, 244 !important;
  --light3: rgb(255, 255, 255) !important;
  --light3_x: 255, 255, 255 !important;
  --link-color: hsl(213, 32%, 52%) !important;
  --link-color-hover: hsl(210, 32.64%, 59.8%) !important;
  --link-external-color: hsl(213, 32%, 52%) !important;
  --link-external-color-hover: hsl(210, 32.64%, 59.8%) !important;
  --link-unresolved-color: hsl(213, 32%, 52%) !important;
  --link-unresolved-decoration-color: hsla(213, 32%, 52%, 0.3) !important;
  --list-marker-color-collapsed: hsl(213, 32%, 52%) !important;
  --nav-item-background-selected: hsla(213, 32%, 52%, 0.15) !important;
  --nav-item-color-highlighted: hsl(213, 32%, 52%) !important;
  --orange: rgb(208, 135, 112) !important;
  --orange_x: 208, 135, 112 !important;
  --pill-color-remove-hover: hsl(213, 32%, 52%) !important;
  --purple: rgb(180, 142, 173) !important;
  --purple_x: 180, 142, 173 !important;
  --red: rgb(191, 97, 106) !important;
  --red_x: 191, 97, 106 !important;
  --ribbon-background: rgb(59, 66, 82) !important;
  --secondary: hsl(213, 32%, 52%) !important;
  --status-bar-background: rgb(59, 66, 82) !important;
  --status-bar-border-color: rgb(76, 86, 106) !important;
  --tab-curve: 0.6em !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: rgb(67, 76, 94) !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0.5em !important;
  --tab-radius-active: 0.5em !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 32%, 52%) !important;
  --tab-text-color-focused-active: rgb(136, 192, 208) !important;
  --tab-text-color-focused-highlighted: rgb(136, 192, 208) !important;
  --table-drag-handle-background-active: hsl(212, 32.32%, 55.9%) !important;
  --table-selection: hsla(213, 32%, 52%, 0.1) !important;
  --table-selection-border-color: hsl(212, 32.32%, 55.9%) !important;
  --tag-background: hsla(213, 32%, 52%, 0.1) !important;
  --tag-background-hover: hsla(213, 32%, 52%, 0.2) !important;
  --tag-border-color: hsla(213, 32%, 52%, 0.15) !important;
  --tag-border-color-hover: hsla(213, 32%, 52%, 0.15) !important;
  --tag-color: hsl(213, 32%, 52%) !important;
  --tag-color-hover: hsl(213, 32%, 52%) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0.4em !important;
  --tag-padding-y: 0.2em !important;
  --tag-radius: 0.5em !important;
  --tertiary: hsl(210, 32.64%, 59.8%) !important;
  --text-accent: hsl(213, 32%, 52%) !important;
  --text-accent-hover: hsl(210, 32.64%, 59.8%) !important;
  --text-selection: hsla(213, 32%, 52%, 0.2) !important;
  --textHighlight: hsla(213, 32%, 52%, 0.1) !important;
  --titlebar-background: rgb(59, 66, 82) !important;
  --titlebar-background-focused: rgb(59, 66, 82) !important;
  --titlebar-border-width: 0em !important;
  --yellow: rgb(235, 203, 139) !important;
  --yellow_x: 235, 203, 139 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(93, 129, 172, 0.1);
  border-radius: 7px;
  color: rgb(93, 129, 172);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-width: 3px;
}`,
    typography: `html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(106, 140, 179);
  border-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(93, 129, 172);
  outline: rgb(93, 129, 172) none 0px;
  text-decoration-color: rgb(93, 129, 172);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(93, 129, 172);
  outline: rgb(93, 129, 172) none 0px;
  text-decoration-color: rgb(93, 129, 172);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(93, 129, 172);
  outline: rgb(93, 129, 172) none 0px;
  text-decoration: underline rgba(93, 129, 172, 0.3);
  text-decoration-color: rgba(93, 129, 172, 0.3);
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-color: rgb(246, 246, 246);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(246, 246, 246);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(246, 246, 246);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(246, 246, 246);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(106, 140, 179);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.2s ease-out;
  width: 17.3281px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(208, 135, 112);
  text-decoration: underline;
  text-decoration-color: rgb(208, 135, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(191, 97, 106);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(92, 92, 92);
  text-decoration-color: rgb(92, 92, 92);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
    search: `html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(93, 129, 172, 0.1);
  border-bottom-color: rgba(93, 129, 172, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(93, 129, 172, 0.15);
  border-right-color: rgba(93, 129, 172, 0.15);
  border-top-color: rgba(93, 129, 172, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(93, 129, 172);
}

html[saved-theme="light"] body hr {
  border-right-width: 3px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(59, 66, 82);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(93, 129, 172, 0.1);
  border-bottom-color: rgba(93, 129, 172, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(93, 129, 172, 0.15);
  border-right-color: rgba(93, 129, 172, 0.15);
  border-top-color: rgba(93, 129, 172, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: rgb(93, 129, 172);
}`,
  },
};
