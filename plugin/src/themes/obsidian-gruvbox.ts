import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "obsidian-gruvbox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 12 !important;
  --accent-l: 32% !important;
  --accent-s: 107% !important;
  --background-modifier-active-hover: hsla(12, 107%, 32%, 0.1) !important;
  --background-modifier-border: rgb(60, 56, 54) !important;
  --background-modifier-error: rgb(204, 36, 29) !important;
  --background-modifier-error-hover: rgb(204, 36, 29) !important;
  --background-modifier-error-rgb: 204,36,29 !important;
  --background-modifier-success: rgb(152, 151, 26) !important;
  --background-modifier-success-rgb: 152,151,26 !important;
  --background-primary: rgb(40, 40, 40) !important;
  --background-primary-alt: rgb(40, 40, 40) !important;
  --background-secondary: rgb(29, 32, 33) !important;
  --background-secondary-alt: rgb(60, 56, 54) !important;
  --bases-cards-background: rgb(40, 40, 40) !important;
  --bases-cards-cover-background: rgb(40, 40, 40) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(60, 56, 54) !important;
  --bases-embed-border-color: rgb(60, 56, 54) !important;
  --bases-group-heading-property-color: rgb(213, 196, 161) !important;
  --bases-table-border-color: rgb(60, 56, 54) !important;
  --bases-table-cell-background-active: rgb(40, 40, 40) !important;
  --bases-table-cell-background-disabled: rgb(40, 40, 40) !important;
  --bases-table-cell-background-selected: hsla(12, 107%, 32%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(12, 107%, 32%) !important;
  --bases-table-group-background: rgb(40, 40, 40) !important;
  --bases-table-header-background: rgb(40, 40, 40) !important;
  --bases-table-header-color: rgb(213, 196, 161) !important;
  --bases-table-row-background-hover: rgb(80, 73, 69) !important;
  --bases-table-summary-background: rgb(40, 40, 40) !important;
  --blockquote-border-color: hsl(12, 107%, 32%) !important;
  --bold-color: rgb(215, 153, 33) !important;
  --bold-weight: 600 !important;
  --bright-aqua: rgb(142, 192, 124) !important;
  --bright-aqua_x: 142,192,124 !important;
  --bright-blue: rgb(131, 165, 152) !important;
  --bright-blue_x: 131,165,152 !important;
  --bright-green: rgb(184, 187, 38) !important;
  --bright-green_x: 184,187,38 !important;
  --bright-orange: rgb(254, 128, 25) !important;
  --bright-orange_x: 254,128,25 !important;
  --bright-purple: rgb(211, 134, 155) !important;
  --bright-purple_x: 211,134,155 !important;
  --bright-red: rgb(251, 73, 52) !important;
  --bright-red_x: 251,73,52 !important;
  --bright-yellow: rgb(250, 189, 47) !important;
  --bright-yellow_x: 250,189,47 !important;
  --calendar-background-hover: rgb(60, 56, 54) !important;
  --calendar-hover: rgb(251, 73, 52) !important;
  --calendar-today: rgb(214, 93, 14) !important;
  --calendar-week: rgb(214, 93, 14) !important;
  --callout-border-opacity: 0.4;
  --callout-border-width: 1px;
  --callout-bug: 204,36,29;
  --callout-default: 69,133,136;
  --callout-error: 204,36,29;
  --callout-example: 177,98,134;
  --callout-fail: 204,36,29;
  --callout-important: 104,157,106;
  --callout-info: 69,133,136;
  --callout-note: 69,133,136;
  --callout-question: 215,153,33;
  --callout-quote: 146,131,116;
  --callout-success: 152,151,26;
  --callout-summary: 104,157,106;
  --callout-tip: 104,157,106;
  --callout-todo: 69,133,136;
  --callout-warning: 214,93,14;
  --canvas-background: rgb(40, 40, 40) !important;
  --canvas-card-label-color: rgb(235, 219, 178) !important;
  --canvas-color-1: 204,36,29 !important;
  --canvas-color-2: 214,93,14 !important;
  --canvas-color-3: 215,153,33 !important;
  --canvas-color-4: 152,151,26 !important;
  --canvas-color-5: 69,133,136 !important;
  --canvas-color-6: 177,98,134 !important;
  --caret-color: rgb(251, 241, 199) !important;
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
  --code-function: rgb(215, 153, 33) !important;
  --code-important: rgb(214, 93, 14) !important;
  --code-keyword: rgb(211, 134, 155) !important;
  --code-normal: rgb(131, 165, 152) !important;
  --code-operator: rgb(204, 36, 29) !important;
  --code-property: rgb(69, 133, 136) !important;
  --code-punctuation: rgb(213, 196, 161) !important;
  --code-string: rgb(152, 151, 26) !important;
  --code-tag: rgb(204, 36, 29) !important;
  --code-value: rgb(177, 98, 134) !important;
  --collapse-icon-color: rgb(235, 219, 178) !important;
  --collapse-icon-color-collapsed: rgb(214, 93, 14) !important;
  --color-accent: hsl(12, 107%, 32%) !important;
  --color-accent-1: hsl(9, 109.14%, 36.8%) !important;
  --color-accent-2: hsl(7, 112.35%, 41.28%) !important;
  --color-accent-hsl: 12, 107%, 32% !important;
  --color-blue: rgb(7, 102, 120) !important;
  --color-blue-rgb: 7,102,120 !important;
  --color-cyan: rgb(69, 133, 136) !important;
  --color-cyan-rgb: 69,133,136 !important;
  --color-green: rgb(152, 151, 26) !important;
  --color-green-rgb: 152,151,26 !important;
  --color-orange: rgb(214, 93, 14) !important;
  --color-orange-rgb: 214,93,14 !important;
  --color-pink: rgb(211, 134, 155) !important;
  --color-pink-rgb: 211,134,155 !important;
  --color-purple: rgb(177, 98, 134) !important;
  --color-purple-rgb: 177,98,134 !important;
  --color-red: rgb(204, 36, 29) !important;
  --color-red-rgb: 204,36,29 !important;
  --color-yellow: rgb(215, 153, 33) !important;
  --color-yellow-rgb: 215,153,33 !important;
  --cursor-line-background: rgba(60, 56, 54, 0.5) !important;
  --dark: rgb(251, 241, 199) !important;
  --dark0: rgb(40, 40, 40) !important;
  --dark0-hard: rgb(29, 32, 33) !important;
  --dark0-hard_x: 29,32,33 !important;
  --dark0-soft: rgb(50, 48, 47) !important;
  --dark0-soft_x: 50,48,47 !important;
  --dark0_x: 40,40,40 !important;
  --dark1: rgb(60, 56, 54) !important;
  --dark1_x: 60,56,54 !important;
  --dark2: rgb(80, 73, 69) !important;
  --dark2_x: 80,73,69 !important;
  --dark3: rgb(102, 92, 84) !important;
  --dark3_x: 102,92,84 !important;
  --dark4: rgb(124, 111, 100) !important;
  --dark4_x: 124,111,100 !important;
  --darkgray: rgb(251, 241, 199) !important;
  --dataview-key: rgb(235, 219, 178) !important;
  --dataview-key-background: rgba(157, 0, 6, 0.5) !important;
  --dataview-value: rgb(235, 219, 178) !important;
  --dataview-value-background: rgba(152, 151, 26, 0.3) !important;
  --divider-color: rgb(60, 56, 54) !important;
  --divider-color-hover: hsl(12, 107%, 32%) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(60, 56, 54), inset 0 0 0 1px rgb(60, 56, 54) !important;
  --embed-border-left: 6px double hsl(12, 107%, 32%) !important;
  --embed-border-start: 2px solid hsl(12, 107%, 32%) !important;
  --faded-aqua: rgb(66, 123, 88) !important;
  --faded-aqua_x: 66,123,88 !important;
  --faded-blue: rgb(7, 102, 120) !important;
  --faded-blue_x: 7,102,120 !important;
  --faded-green: rgb(121, 116, 14) !important;
  --faded-green_x: 121,116,14 !important;
  --faded-orange: rgb(175, 58, 3) !important;
  --faded-orange_x: 175,58,3 !important;
  --faded-purple: rgb(143, 63, 113) !important;
  --faded-purple_x: 143,63,113 !important;
  --faded-red: rgb(157, 0, 6) !important;
  --faded-red_x: 157,0,6 !important;
  --faded-yellow: rgb(181, 118, 20) !important;
  --faded-yellow_x: 181,118,20 !important;
  --file-header-background: rgb(40, 40, 40) !important;
  --file-header-background-focused: rgb(40, 40, 40) !important;
  --flair-color: rgb(251, 241, 199) !important;
  --flashing-background: rgba(204, 36, 29, 0.3) !important;
  --footnote-divider-color: rgb(60, 56, 54) !important;
  --footnote-id-color: rgb(213, 196, 161) !important;
  --footnote-id-color-no-occurrences: rgb(235, 219, 178) !important;
  --graph-line: rgb(80, 73, 69) !important;
  --graph-node: rgb(189, 174, 147) !important;
  --graph-node-attachment: rgb(152, 151, 26) !important;
  --graph-node-focused: rgb(214, 93, 14) !important;
  --graph-node-tag: rgb(204, 36, 29) !important;
  --graph-node-unresolved: rgb(235, 219, 178) !important;
  --graph-text: rgb(251, 241, 199) !important;
  --gray: rgb(146, 131, 116) !important;
  --gray_x: 146,131,116 !important;
  --h1-color: rgb(204, 36, 29) !important;
  --h2-color: rgb(215, 153, 33) !important;
  --h3-color: rgb(152, 151, 26) !important;
  --h4-color: rgb(104, 157, 106) !important;
  --h5-color: rgb(69, 133, 136) !important;
  --h6-color: rgb(177, 98, 134) !important;
  --heading-formatting: rgb(235, 219, 178) !important;
  --highlight: rgb(215, 153, 33) !important;
  --hr-color: rgb(60, 56, 54) !important;
  --icon-color: rgb(213, 196, 161) !important;
  --icon-color-active: rgb(214, 93, 14) !important;
  --icon-color-focused: rgb(131, 165, 152) !important;
  --icon-color-hover: rgb(251, 73, 52) !important;
  --inline-title-color: rgb(250, 189, 47) !important;
  --input-date-separator: rgb(235, 219, 178) !important;
  --input-placeholder-color: rgb(235, 219, 178) !important;
  --interactive-accent: hsl(12, 107%, 32%) !important;
  --interactive-accent-hover: hsl(9, 109.14%, 36.8%) !important;
  --interactive-accent-hsl: 12, 107%, 32% !important;
  --italic-color: rgb(215, 153, 33) !important;
  --light: rgb(40, 40, 40) !important;
  --light0: rgb(251, 241, 199) !important;
  --light0-hard: rgb(249, 245, 215) !important;
  --light0-hard_x: 249,245,215 !important;
  --light0-soft: rgb(242, 229, 188) !important;
  --light0-soft_x: 242,229,188 !important;
  --light0_x: 251,241,199 !important;
  --light1: rgb(235, 219, 178) !important;
  --light1_x: 235,219,178 !important;
  --light2: rgb(213, 196, 161) !important;
  --light2_x: 213,196,161 !important;
  --light3: rgb(189, 174, 147) !important;
  --light3_x: 189,174,147 !important;
  --light4: rgb(168, 153, 132) !important;
  --light4_x: 168,153,132 !important;
  --lightgray: rgb(29, 32, 33) !important;
  --link-color: rgb(214, 93, 14) !important;
  --link-color-hover: rgb(142, 192, 124) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(214, 93, 14) !important;
  --link-external-color-hover: rgb(142, 192, 124) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(214, 93, 14) !important;
  --link-unresolved-decoration-color: hsla(12, 107%, 32%, 0.3) !important;
  --link-url: rgb(152, 151, 26) !important;
  --list-marker-color: rgb(235, 219, 178) !important;
  --list-marker-color-collapsed: rgb(214, 93, 14) !important;
  --list-marker-color-hover: rgb(213, 196, 161) !important;
  --menu-background: rgb(29, 32, 33) !important;
  --mermaid-actor: rgb(80, 73, 69) !important;
  --mermaid-exclude: rgb(124, 111, 100) !important;
  --mermaid-loopline: rgb(69, 133, 136) !important;
  --mermaid-note: rgb(69, 133, 136) !important;
  --mermaid-seqnum: rgb(40, 40, 40) !important;
  --metadata-border-color: rgb(60, 56, 54) !important;
  --metadata-divider-color: rgb(60, 56, 54) !important;
  --metadata-input-text-color: rgb(251, 241, 199) !important;
  --metadata-label-text-color: rgb(213, 196, 161) !important;
  --metadata-label-text-color-hover: rgb(213, 196, 161) !important;
  --modal-background: rgb(40, 40, 40) !important;
  --nav-collapse-icon-color: rgb(235, 219, 178) !important;
  --nav-collapse-icon-color-collapsed: rgb(235, 219, 178) !important;
  --nav-file-tag: rgba(215, 153, 33, 0.9) !important;
  --nav-heading-color: rgb(251, 241, 199) !important;
  --nav-heading-color-collapsed: rgb(235, 219, 178) !important;
  --nav-heading-color-collapsed-hover: rgb(213, 196, 161) !important;
  --nav-heading-color-hover: rgb(251, 241, 199) !important;
  --nav-item-background-selected: hsla(12, 107%, 32%, 0.15) !important;
  --nav-item-color: rgb(213, 196, 161) !important;
  --nav-item-color-active: rgb(142, 192, 124) !important;
  --nav-item-color-highlighted: rgb(214, 93, 14) !important;
  --nav-item-color-hover: rgb(251, 73, 52) !important;
  --nav-item-color-selected: rgb(251, 241, 199) !important;
  --nav-tag-color: rgb(235, 219, 178) !important;
  --nav-tag-color-active: rgb(213, 196, 161) !important;
  --nav-tag-color-hover: rgb(213, 196, 161) !important;
  --neutral-aqua: rgb(104, 157, 106) !important;
  --neutral-aqua_x: 104,157,106 !important;
  --neutral-blue: rgb(69, 133, 136) !important;
  --neutral-blue_x: 69,133,136 !important;
  --neutral-green: rgb(152, 151, 26) !important;
  --neutral-green_x: 152,151,26 !important;
  --neutral-orange: rgb(214, 93, 14) !important;
  --neutral-orange_x: 214,93,14 !important;
  --neutral-purple: rgb(177, 98, 134) !important;
  --neutral-purple_x: 177,98,134 !important;
  --neutral-red: rgb(204, 36, 29) !important;
  --neutral-red_x: 204,36,29 !important;
  --neutral-yellow: rgb(215, 153, 33) !important;
  --neutral-yellow_x: 215,153,33 !important;
  --pdf-background: rgb(40, 40, 40) !important;
  --pdf-page-background: rgb(40, 40, 40) !important;
  --pdf-shadow: 0 0 0 1px rgb(60, 56, 54) !important;
  --pdf-sidebar-background: rgb(40, 40, 40) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(60, 56, 54) !important;
  --pill-border-color: rgb(60, 56, 54) !important;
  --pill-color: rgb(213, 196, 161) !important;
  --pill-color-hover: rgb(251, 241, 199) !important;
  --pill-color-remove: rgb(235, 219, 178) !important;
  --pill-color-remove-hover: rgb(214, 93, 14) !important;
  --prompt-background: rgb(40, 40, 40) !important;
  --ribbon-background: rgb(29, 32, 33) !important;
  --ribbon-background-collapsed: rgb(40, 40, 40) !important;
  --search-clear-button-color: rgb(213, 196, 161) !important;
  --search-icon-color: rgb(213, 196, 161) !important;
  --search-result-background: rgb(40, 40, 40) !important;
  --secondary: rgb(214, 93, 14) !important;
  --setting-group-heading-color: rgb(251, 241, 199) !important;
  --setting-items-background: rgb(40, 40, 40) !important;
  --setting-items-border-color: rgb(60, 56, 54) !important;
  --slider-track-background: rgb(60, 56, 54) !important;
  --status-bar-background: rgb(29, 32, 33) !important;
  --status-bar-border-color: rgb(60, 56, 54) !important;
  --status-bar-text-color: rgb(213, 196, 161) !important;
  --suggestion-background: rgb(40, 40, 40) !important;
  --sync-avatar-color-1: rgb(204, 36, 29) !important;
  --sync-avatar-color-2: rgb(214, 93, 14) !important;
  --sync-avatar-color-3: rgb(215, 153, 33) !important;
  --sync-avatar-color-4: rgb(152, 151, 26) !important;
  --sync-avatar-color-5: rgb(69, 133, 136) !important;
  --sync-avatar-color-6: rgb(7, 102, 120) !important;
  --sync-avatar-color-7: rgb(177, 98, 134) !important;
  --sync-avatar-color-8: rgb(211, 134, 155) !important;
  --tab-background-active: rgb(40, 40, 40) !important;
  --tab-container-background: rgb(29, 32, 33) !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: rgb(60, 56, 54) !important;
  --tab-switcher-background: rgb(29, 32, 33) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 32, 33), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 107%, 32%) !important;
  --tab-text-color: rgb(235, 219, 178) !important;
  --tab-text-color-active: rgb(213, 196, 161) !important;
  --tab-text-color-focused: rgb(213, 196, 161) !important;
  --tab-text-color-focused-active: rgb(215, 153, 33) !important;
  --tab-text-color-focused-active-current: rgb(251, 73, 52) !important;
  --tab-text-color-focused-highlighted: rgb(214, 93, 14) !important;
  --table-add-button-border-color: rgb(60, 56, 54) !important;
  --table-border-color: rgb(60, 56, 54) !important;
  --table-drag-handle-background-active: hsl(12, 107%, 32%) !important;
  --table-drag-handle-color: rgb(235, 219, 178) !important;
  --table-header-background: rgba(40, 40, 40, 0.2) !important;
  --table-header-background-hover: rgb(80, 73, 69) !important;
  --table-header-border-color: rgb(60, 56, 54) !important;
  --table-header-color: rgb(251, 241, 199) !important;
  --table-row-background-hover: rgb(80, 73, 69) !important;
  --table-row-even-background: rgba(80, 73, 69, 0.2) !important;
  --table-row-odd-background: rgba(80, 73, 69, 0.4) !important;
  --table-selection: hsla(12, 107%, 32%, 0.1) !important;
  --table-selection-border-color: hsl(12, 107%, 32%) !important;
  --tag-background: rgb(80, 73, 69) !important;
  --tag-background-hover: rgb(60, 56, 54) !important;
  --tag-border-color: hsla(12, 107%, 32%, 0.15) !important;
  --tag-border-color-hover: hsla(12, 107%, 32%, 0.15) !important;
  --tag-color: rgb(142, 192, 124) !important;
  --tag-color-hover: rgb(214, 93, 14) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .5em !important;
  --tertiary: rgb(142, 192, 124) !important;
  --text-accent: rgb(214, 93, 14) !important;
  --text-accent-hover: rgb(142, 192, 124) !important;
  --text-error: rgb(204, 36, 29) !important;
  --text-faint: rgb(235, 219, 178) !important;
  --text-highlight-bg: rgb(215, 153, 33) !important;
  --text-highlight-fg: rgb(29, 32, 33) !important;
  --text-muted: rgb(213, 196, 161) !important;
  --text-normal: rgb(251, 241, 199) !important;
  --text-selection: rgba(204, 36, 29, 0.6) !important;
  --text-success: rgb(152, 151, 26) !important;
  --text-warning: rgb(214, 93, 14) !important;
  --textHighlight: rgb(215, 153, 33) !important;
  --titlebar-background: rgb(29, 32, 33) !important;
  --titlebar-background-focused: rgb(60, 56, 54) !important;
  --titlebar-border-color: rgb(60, 56, 54) !important;
  --titlebar-text-color: rgb(213, 196, 161) !important;
  --titlebar-text-color-focused: rgb(251, 73, 52) !important;
  --vault-profile-color: rgb(251, 241, 199) !important;
  --vault-profile-color-hover: rgb(251, 241, 199) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 32, 33);
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(80, 73, 69, 0.4);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(29, 32, 33);
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 32, 33);
  border-color: rgb(251, 241, 199);
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
  color: rgb(142, 192, 124);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 32, 33);
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(60, 56, 54);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 32, 33);
  border-left-color: rgb(60, 56, 54);
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(251, 241, 199);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(215, 153, 33);
  color: rgb(29, 32, 33);
  outline: rgb(29, 32, 33) none 0px;
  text-decoration-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body del {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(251, 241, 199);
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
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration-color: rgb(214, 93, 14);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration-color: rgb(214, 93, 14);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration: rgba(163, 33, 0, 0.3);
  text-decoration-color: rgba(163, 33, 0, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body dt {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(235, 219, 178);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
  color: rgb(251, 241, 199);
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
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
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
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(215, 153, 33);
  border-left-color: rgb(215, 153, 33);
  border-right-color: rgb(215, 153, 33);
  border-top-color: rgb(215, 153, 33);
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
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 36, 29);
  border-left-color: rgb(204, 36, 29);
  border-right-color: rgb(204, 36, 29);
  border-top-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(163, 33, 0);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 104,157,106;
  background-color: rgba(104, 157, 106, 0.2);
  border-bottom-color: rgba(104, 157, 106, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 157, 106, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 157, 106, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 157, 106, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 177,98,134;
  background-color: rgba(177, 98, 134, 0.2);
  border-bottom-color: rgba(177, 98, 134, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(177, 98, 134, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(177, 98, 134, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(177, 98, 134, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 215,153,33;
  background-color: rgba(215, 153, 33, 0.2);
  border-bottom-color: rgba(215, 153, 33, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(215, 153, 33, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(215, 153, 33, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(215, 153, 33, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 146,131,116;
  background-color: rgba(146, 131, 116, 0.2);
  border-bottom-color: rgba(146, 131, 116, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(146, 131, 116, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(146, 131, 116, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(146, 131, 116, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 152,151,26;
  background-color: rgba(152, 151, 26, 0.2);
  border-bottom-color: rgba(152, 151, 26, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(152, 151, 26, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(152, 151, 26, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(152, 151, 26, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 104,157,106;
  background-color: rgba(104, 157, 106, 0.2);
  border-bottom-color: rgba(104, 157, 106, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 157, 106, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 157, 106, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 157, 106, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 214,93,14;
  background-color: rgba(214, 93, 14, 0.2);
  border-bottom-color: rgba(214, 93, 14, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(214, 93, 14, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(214, 93, 14, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(214, 93, 14, 0.4);
  border-top-width: 1px;
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
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(80, 73, 69);
  border-bottom-color: rgba(163, 33, 0, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(163, 33, 0, 0.15);
  border-right-color: rgba(163, 33, 0, 0.15);
  border-top-color: rgba(163, 33, 0, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(142, 192, 124);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body h2 {
  color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(250, 189, 47);
}

html[saved-theme="dark"] body h3 {
  color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body h4 {
  color: rgb(104, 157, 106);
}

html[saved-theme="dark"] body h5 {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body h6 {
  color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 69,133,136;
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
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
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body abbr {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body sub {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body summary {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body sup {
  color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(80, 73, 69);
  border-bottom-color: rgba(163, 33, 0, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(163, 33, 0, 0.15);
  border-right-color: rgba(163, 33, 0, 0.15);
  border-top-color: rgba(163, 33, 0, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: rgb(142, 192, 124);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 12 !important;
  --accent-l: 32% !important;
  --accent-s: 107% !important;
  --background-modifier-active-hover: hsla(12, 107%, 32%, 0.1) !important;
  --background-modifier-border: rgb(213, 196, 161) !important;
  --background-modifier-error: rgb(204, 36, 29) !important;
  --background-modifier-error-hover: rgb(204, 36, 29) !important;
  --background-modifier-error-rgb: 204,36,29 !important;
  --background-modifier-success: rgb(152, 151, 26) !important;
  --background-modifier-success-rgb: 152,151,26 !important;
  --background-primary: rgb(249, 245, 215) !important;
  --background-primary-alt: rgb(249, 245, 215) !important;
  --background-secondary: rgb(235, 219, 178) !important;
  --background-secondary-alt: rgb(235, 219, 178) !important;
  --bases-cards-background: rgb(249, 245, 215) !important;
  --bases-cards-cover-background: rgb(249, 245, 215) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(213, 196, 161) !important;
  --bases-embed-border-color: rgb(213, 196, 161) !important;
  --bases-group-heading-property-color: rgb(80, 73, 69) !important;
  --bases-table-border-color: rgb(213, 196, 161) !important;
  --bases-table-cell-background-active: rgb(249, 245, 215) !important;
  --bases-table-cell-background-disabled: rgb(249, 245, 215) !important;
  --bases-table-cell-background-selected: hsla(12, 107%, 32%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(11, 108.07%, 34.4%) !important;
  --bases-table-group-background: rgb(249, 245, 215) !important;
  --bases-table-header-background: rgb(249, 245, 215) !important;
  --bases-table-header-color: rgb(80, 73, 69) !important;
  --bases-table-row-background-hover: rgb(213, 196, 161) !important;
  --bases-table-summary-background: rgb(249, 245, 215) !important;
  --blockquote-border-color: hsl(11, 108.07%, 34.4%) !important;
  --blur-background: color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent)) !important;
  --bold-color: rgb(215, 153, 33) !important;
  --bold-weight: 600 !important;
  --bright-aqua: rgb(142, 192, 124) !important;
  --bright-aqua_x: 142,192,124 !important;
  --bright-blue: rgb(131, 165, 152) !important;
  --bright-blue_x: 131,165,152 !important;
  --bright-green: rgb(184, 187, 38) !important;
  --bright-green_x: 184,187,38 !important;
  --bright-orange: rgb(254, 128, 25) !important;
  --bright-orange_x: 254,128,25 !important;
  --bright-purple: rgb(211, 134, 155) !important;
  --bright-purple_x: 211,134,155 !important;
  --bright-red: rgb(251, 73, 52) !important;
  --bright-red_x: 251,73,52 !important;
  --bright-yellow: rgb(250, 189, 47) !important;
  --bright-yellow_x: 250,189,47 !important;
  --calendar-background-hover: rgb(235, 219, 178) !important;
  --calendar-hover: rgb(251, 73, 52) !important;
  --calendar-today: rgb(251, 73, 52) !important;
  --calendar-week: rgb(251, 73, 52) !important;
  --callout-border-opacity: 0.4;
  --callout-border-width: 1px;
  --callout-bug: 204,36,29;
  --callout-default: 69,133,136;
  --callout-error: 204,36,29;
  --callout-example: 177,98,134;
  --callout-fail: 204,36,29;
  --callout-important: 104,157,106;
  --callout-info: 69,133,136;
  --callout-note: 69,133,136;
  --callout-question: 215,153,33;
  --callout-quote: 146,131,116;
  --callout-success: 152,151,26;
  --callout-summary: 104,157,106;
  --callout-tip: 104,157,106;
  --callout-todo: 69,133,136;
  --callout-warning: 214,93,14;
  --canvas-background: rgb(249, 245, 215) !important;
  --canvas-card-label-color: rgb(102, 92, 84) !important;
  --canvas-color-1: 204,36,29 !important;
  --canvas-color-2: 214,93,14 !important;
  --canvas-color-3: 215,153,33 !important;
  --canvas-color-4: 152,151,26 !important;
  --canvas-color-5: 69,133,136 !important;
  --canvas-color-6: 177,98,134 !important;
  --caret-color: rgb(40, 40, 40) !important;
  --checkbox-border-color: rgb(168, 153, 132) !important;
  --checkbox-border-color-hover: rgb(168, 153, 132) !important;
  --checkbox-color: rgb(168, 153, 132) !important;
  --checkbox-color-hover: rgb(168, 153, 132) !important;
  --checkbox-marker-color: rgb(249, 245, 215) !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: rgba(80, 73, 69, 0.4) !important;
  --code-background: rgb(235, 219, 178) !important;
  --code-border-color: rgb(213, 196, 161) !important;
  --code-comment: rgb(102, 92, 84) !important;
  --code-function: rgb(215, 153, 33) !important;
  --code-important: rgb(214, 93, 14) !important;
  --code-keyword: rgb(211, 134, 155) !important;
  --code-normal: rgb(131, 165, 152) !important;
  --code-operator: rgb(204, 36, 29) !important;
  --code-property: rgb(69, 133, 136) !important;
  --code-punctuation: rgb(80, 73, 69) !important;
  --code-string: rgb(152, 151, 26) !important;
  --code-tag: rgb(204, 36, 29) !important;
  --code-value: rgb(177, 98, 134) !important;
  --collapse-icon-color: rgb(102, 92, 84) !important;
  --collapse-icon-color-collapsed: rgb(214, 93, 14) !important;
  --color-accent: hsl(12, 107%, 32%) !important;
  --color-accent-1: hsl(11, 108.07%, 34.4%) !important;
  --color-accent-2: hsl(9, 109.14%, 36.8%) !important;
  --color-accent-hsl: 12, 107%, 32% !important;
  --color-blue: rgb(7, 102, 120) !important;
  --color-blue-rgb: 7,102,120 !important;
  --color-cyan: rgb(69, 133, 136) !important;
  --color-cyan-rgb: 69,133,136 !important;
  --color-green: rgb(152, 151, 26) !important;
  --color-green-rgb: 152,151,26 !important;
  --color-orange: rgb(214, 93, 14) !important;
  --color-orange-rgb: 214,93,14 !important;
  --color-pink: rgb(211, 134, 155) !important;
  --color-pink-rgb: 211,134,155 !important;
  --color-purple: rgb(177, 98, 134) !important;
  --color-purple-rgb: 177,98,134 !important;
  --color-red: rgb(204, 36, 29) !important;
  --color-red-rgb: 204,36,29 !important;
  --color-yellow: rgb(215, 153, 33) !important;
  --color-yellow-rgb: 215,153,33 !important;
  --cursor-line-background: rgba(235, 219, 178, 0.5) !important;
  --dark: rgb(40, 40, 40) !important;
  --dark0: rgb(40, 40, 40) !important;
  --dark0-hard: rgb(29, 32, 33) !important;
  --dark0-hard_x: 29,32,33 !important;
  --dark0-soft: rgb(50, 48, 47) !important;
  --dark0-soft_x: 50,48,47 !important;
  --dark0_x: 40,40,40 !important;
  --dark1: rgb(60, 56, 54) !important;
  --dark1_x: 60,56,54 !important;
  --dark2: rgb(80, 73, 69) !important;
  --dark2_x: 80,73,69 !important;
  --dark3: rgb(102, 92, 84) !important;
  --dark3_x: 102,92,84 !important;
  --dark4: rgb(124, 111, 100) !important;
  --dark4_x: 124,111,100 !important;
  --darkgray: rgb(40, 40, 40) !important;
  --dataview-key: rgb(102, 92, 84) !important;
  --dataview-key-background: rgba(157, 0, 6, 0.3) !important;
  --dataview-value: rgb(102, 92, 84) !important;
  --dataview-value-background: rgba(152, 151, 26, 0.2) !important;
  --divider-color: rgb(213, 196, 161) !important;
  --divider-color-hover: hsl(11, 108.07%, 34.4%) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(213, 196, 161), inset 0 0 0 1px rgb(213, 196, 161) !important;
  --embed-border-left: 6px double hsl(11, 108.07%, 34.4%) !important;
  --embed-border-start: 2px solid hsl(11, 108.07%, 34.4%) !important;
  --faded-aqua: rgb(66, 123, 88) !important;
  --faded-aqua_x: 66,123,88 !important;
  --faded-blue: rgb(7, 102, 120) !important;
  --faded-blue_x: 7,102,120 !important;
  --faded-green: rgb(121, 116, 14) !important;
  --faded-green_x: 121,116,14 !important;
  --faded-orange: rgb(175, 58, 3) !important;
  --faded-orange_x: 175,58,3 !important;
  --faded-purple: rgb(143, 63, 113) !important;
  --faded-purple_x: 143,63,113 !important;
  --faded-red: rgb(157, 0, 6) !important;
  --faded-red_x: 157,0,6 !important;
  --faded-yellow: rgb(181, 118, 20) !important;
  --faded-yellow_x: 181,118,20 !important;
  --file-header-background: rgb(249, 245, 215) !important;
  --file-header-background-focused: rgb(249, 245, 215) !important;
  --flair-color: rgb(40, 40, 40) !important;
  --flashing-background: rgba(204, 36, 29, 0.3) !important;
  --footnote-divider-color: rgb(213, 196, 161) !important;
  --footnote-id-color: rgb(80, 73, 69) !important;
  --footnote-id-color-no-occurrences: rgb(102, 92, 84) !important;
  --graph-line: rgb(235, 219, 178) !important;
  --graph-node: rgb(146, 131, 116) !important;
  --graph-node-attachment: rgb(184, 187, 38) !important;
  --graph-node-focused: rgb(214, 93, 14) !important;
  --graph-node-tag: rgb(204, 36, 29) !important;
  --graph-node-unresolved: rgb(102, 92, 84) !important;
  --graph-text: rgb(40, 40, 40) !important;
  --gray: rgb(146, 131, 116) !important;
  --gray_x: 146,131,116 !important;
  --h1-color: rgb(204, 36, 29) !important;
  --h2-color: rgb(215, 153, 33) !important;
  --h3-color: rgb(152, 151, 26) !important;
  --h4-color: rgb(104, 157, 106) !important;
  --h5-color: rgb(69, 133, 136) !important;
  --h6-color: rgb(177, 98, 134) !important;
  --heading-formatting: rgb(102, 92, 84) !important;
  --highlight: rgb(250, 189, 47) !important;
  --hr-color: rgb(213, 196, 161) !important;
  --icon-color: rgb(80, 73, 69) !important;
  --icon-color-active: rgb(214, 93, 14) !important;
  --icon-color-focused: rgb(131, 165, 152) !important;
  --icon-color-hover: rgb(251, 73, 52) !important;
  --inline-title-color: rgb(250, 189, 47) !important;
  --input-date-separator: rgb(102, 92, 84) !important;
  --input-placeholder-color: rgb(102, 92, 84) !important;
  --interactive-accent: hsl(11, 108.07%, 34.4%) !important;
  --interactive-accent-hover: hsl(9, 109.14%, 36.8%) !important;
  --interactive-accent-hsl: 12, 107%, 32% !important;
  --italic-color: rgb(215, 153, 33) !important;
  --light: rgb(249, 245, 215) !important;
  --light0: rgb(251, 241, 199) !important;
  --light0-hard: rgb(249, 245, 215) !important;
  --light0-hard_x: 249,245,215 !important;
  --light0-soft: rgb(242, 229, 188) !important;
  --light0-soft_x: 242,229,188 !important;
  --light0_x: 251,241,199 !important;
  --light1: rgb(235, 219, 178) !important;
  --light1_x: 235,219,178 !important;
  --light2: rgb(213, 196, 161) !important;
  --light2_x: 213,196,161 !important;
  --light3: rgb(189, 174, 147) !important;
  --light3_x: 189,174,147 !important;
  --light4: rgb(168, 153, 132) !important;
  --light4_x: 168,153,132 !important;
  --lightgray: rgb(235, 219, 178) !important;
  --link-color: rgb(214, 93, 14) !important;
  --link-color-hover: rgb(142, 192, 124) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(214, 93, 14) !important;
  --link-external-color-hover: rgb(142, 192, 124) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(214, 93, 14) !important;
  --link-unresolved-decoration-color: hsla(12, 107%, 32%, 0.3) !important;
  --link-url: rgb(152, 151, 26) !important;
  --list-marker-color: rgb(102, 92, 84) !important;
  --list-marker-color-collapsed: rgb(214, 93, 14) !important;
  --list-marker-color-hover: rgb(80, 73, 69) !important;
  --menu-background: rgb(235, 219, 178) !important;
  --mermaid-actor: rgb(189, 174, 147) !important;
  --mermaid-exclude: rgb(213, 196, 161) !important;
  --mermaid-loopline: rgb(69, 133, 136) !important;
  --mermaid-note: rgb(131, 165, 152) !important;
  --mermaid-seqnum: rgb(251, 241, 199) !important;
  --metadata-border-color: rgb(213, 196, 161) !important;
  --metadata-divider-color: rgb(213, 196, 161) !important;
  --metadata-input-text-color: rgb(40, 40, 40) !important;
  --metadata-label-text-color: rgb(80, 73, 69) !important;
  --metadata-label-text-color-hover: rgb(80, 73, 69) !important;
  --modal-background: rgb(249, 245, 215) !important;
  --nav-collapse-icon-color: rgb(102, 92, 84) !important;
  --nav-collapse-icon-color-collapsed: rgb(102, 92, 84) !important;
  --nav-file-tag: rgba(69, 133, 136, 0.9) !important;
  --nav-heading-color: rgb(40, 40, 40) !important;
  --nav-heading-color-collapsed: rgb(102, 92, 84) !important;
  --nav-heading-color-collapsed-hover: rgb(80, 73, 69) !important;
  --nav-heading-color-hover: rgb(40, 40, 40) !important;
  --nav-item-background-selected: hsla(12, 107%, 32%, 0.15) !important;
  --nav-item-color: rgb(80, 73, 69) !important;
  --nav-item-color-active: rgb(69, 133, 136) !important;
  --nav-item-color-highlighted: rgb(214, 93, 14) !important;
  --nav-item-color-hover: rgb(251, 73, 52) !important;
  --nav-item-color-selected: rgb(40, 40, 40) !important;
  --nav-tag-color: rgb(102, 92, 84) !important;
  --nav-tag-color-active: rgb(80, 73, 69) !important;
  --nav-tag-color-hover: rgb(80, 73, 69) !important;
  --neutral-aqua: rgb(104, 157, 106) !important;
  --neutral-aqua_x: 104,157,106 !important;
  --neutral-blue: rgb(69, 133, 136) !important;
  --neutral-blue_x: 69,133,136 !important;
  --neutral-green: rgb(152, 151, 26) !important;
  --neutral-green_x: 152,151,26 !important;
  --neutral-orange: rgb(214, 93, 14) !important;
  --neutral-orange_x: 214,93,14 !important;
  --neutral-purple: rgb(177, 98, 134) !important;
  --neutral-purple_x: 177,98,134 !important;
  --neutral-red: rgb(204, 36, 29) !important;
  --neutral-red_x: 204,36,29 !important;
  --neutral-yellow: rgb(215, 153, 33) !important;
  --neutral-yellow_x: 215,153,33 !important;
  --pdf-background: rgb(249, 245, 215) !important;
  --pdf-page-background: rgb(249, 245, 215) !important;
  --pdf-sidebar-background: rgb(249, 245, 215) !important;
  --pill-border-color: rgb(213, 196, 161) !important;
  --pill-color: rgb(80, 73, 69) !important;
  --pill-color-hover: rgb(40, 40, 40) !important;
  --pill-color-remove: rgb(102, 92, 84) !important;
  --pill-color-remove-hover: rgb(214, 93, 14) !important;
  --prompt-background: rgb(249, 245, 215) !important;
  --raised-background: color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent)) !important;
  --ribbon-background: rgb(235, 219, 178) !important;
  --ribbon-background-collapsed: rgb(249, 245, 215) !important;
  --search-clear-button-color: rgb(80, 73, 69) !important;
  --search-icon-color: rgb(80, 73, 69) !important;
  --search-result-background: rgb(249, 245, 215) !important;
  --secondary: rgb(214, 93, 14) !important;
  --setting-group-heading-color: rgb(40, 40, 40) !important;
  --setting-items-background: rgb(249, 245, 215) !important;
  --setting-items-border-color: rgb(213, 196, 161) !important;
  --slider-track-background: rgb(213, 196, 161) !important;
  --status-bar-background: rgb(235, 219, 178) !important;
  --status-bar-border-color: rgb(213, 196, 161) !important;
  --status-bar-text-color: rgb(80, 73, 69) !important;
  --suggestion-background: rgb(249, 245, 215) !important;
  --sync-avatar-color-1: rgb(204, 36, 29) !important;
  --sync-avatar-color-2: rgb(214, 93, 14) !important;
  --sync-avatar-color-3: rgb(215, 153, 33) !important;
  --sync-avatar-color-4: rgb(152, 151, 26) !important;
  --sync-avatar-color-5: rgb(69, 133, 136) !important;
  --sync-avatar-color-6: rgb(7, 102, 120) !important;
  --sync-avatar-color-7: rgb(177, 98, 134) !important;
  --sync-avatar-color-8: rgb(211, 134, 155) !important;
  --tab-background-active: rgb(249, 245, 215) !important;
  --tab-container-background: rgb(235, 219, 178) !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: rgb(213, 196, 161) !important;
  --tab-switcher-background: rgb(235, 219, 178) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(235, 219, 178), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 107%, 32%) !important;
  --tab-text-color: rgb(102, 92, 84) !important;
  --tab-text-color-active: rgb(80, 73, 69) !important;
  --tab-text-color-focused: rgb(80, 73, 69) !important;
  --tab-text-color-focused-active: rgb(215, 153, 33) !important;
  --tab-text-color-focused-active-current: rgb(251, 73, 52) !important;
  --tab-text-color-focused-highlighted: rgb(214, 93, 14) !important;
  --table-add-button-border-color: rgb(213, 196, 161) !important;
  --table-border-color: rgb(213, 196, 161) !important;
  --table-drag-handle-background-active: hsl(11, 108.07%, 34.4%) !important;
  --table-drag-handle-color: rgb(102, 92, 84) !important;
  --table-header-background: rgba(189, 174, 147, 0.4) !important;
  --table-header-background-hover: rgb(213, 196, 161) !important;
  --table-header-border-color: rgb(213, 196, 161) !important;
  --table-header-color: rgb(40, 40, 40) !important;
  --table-row-background-hover: rgb(213, 196, 161) !important;
  --table-row-even-background: rgba(235, 219, 178, 0.2) !important;
  --table-row-odd-background: rgba(235, 219, 178, 0.7) !important;
  --table-selection: hsla(12, 107%, 32%, 0.1) !important;
  --table-selection-border-color: hsl(11, 108.07%, 34.4%) !important;
  --tag-background: rgb(235, 219, 178) !important;
  --tag-background-hover: rgba(235, 219, 178, 0.6) !important;
  --tag-border-color: hsla(12, 107%, 32%, 0.15) !important;
  --tag-border-color-hover: hsla(12, 107%, 32%, 0.15) !important;
  --tag-color: rgb(104, 157, 106) !important;
  --tag-color-hover: rgb(214, 93, 14) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .5em !important;
  --tertiary: rgb(142, 192, 124) !important;
  --text-accent: rgb(214, 93, 14) !important;
  --text-accent-hover: rgb(142, 192, 124) !important;
  --text-error: rgb(204, 36, 29) !important;
  --text-faint: rgb(102, 92, 84) !important;
  --text-highlight-bg: rgb(250, 189, 47) !important;
  --text-highlight-fg: rgb(40, 40, 40) !important;
  --text-muted: rgb(80, 73, 69) !important;
  --text-normal: rgb(40, 40, 40) !important;
  --text-selection: rgba(204, 36, 29, 0.6) !important;
  --text-success: rgb(152, 151, 26) !important;
  --text-warning: rgb(214, 93, 14) !important;
  --textHighlight: rgb(250, 189, 47) !important;
  --titlebar-background: rgb(235, 219, 178) !important;
  --titlebar-background-focused: rgb(235, 219, 178) !important;
  --titlebar-border-color: rgb(213, 196, 161) !important;
  --titlebar-text-color: rgb(80, 73, 69) !important;
  --titlebar-text-color-focused: rgb(251, 73, 52) !important;
  --vault-profile-color: rgb(40, 40, 40) !important;
  --vault-profile-color-hover: rgb(40, 40, 40) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 219, 178);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(249, 245, 215);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(235, 219, 178, 0.7);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(235, 219, 178);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(249, 245, 215);
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(235, 219, 178);
  border-radius: 7px;
  color: rgb(104, 157, 106);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 219, 178);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 219, 178);
  border-left-color: rgb(213, 196, 161);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(249, 245, 215);
  color: rgb(40, 40, 40);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(250, 189, 47);
  color: rgb(40, 40, 40);
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body del {
  color: rgb(40, 40, 40);
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(40, 40, 40);
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
  color: rgb(80, 73, 69);
  outline: rgb(80, 73, 69) none 0px;
  text-decoration-color: rgb(80, 73, 69);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration-color: rgb(214, 93, 14);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration-color: rgb(214, 93, 14);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration: rgba(163, 33, 0, 0.3);
  text-decoration-color: rgba(163, 33, 0, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body dt {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ol > li {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul > li {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(102, 92, 84);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
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
  color: rgb(40, 40, 40);
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
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(40, 40, 40);
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
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
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
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(215, 153, 33);
  border-left-color: rgb(215, 153, 33);
  border-right-color: rgb(215, 153, 33);
  border-top-color: rgb(215, 153, 33);
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
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body figcaption {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(204, 36, 29);
  border-left-color: rgb(204, 36, 29);
  border-right-color: rgb(204, 36, 29);
  border-top-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(175, 32, 0);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
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
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 104,157,106;
  background-color: rgba(104, 157, 106, 0.2);
  border-bottom-color: rgba(104, 157, 106, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 157, 106, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 157, 106, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 157, 106, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 177,98,134;
  background-color: rgba(177, 98, 134, 0.2);
  border-bottom-color: rgba(177, 98, 134, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(177, 98, 134, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(177, 98, 134, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(177, 98, 134, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 215,153,33;
  background-color: rgba(215, 153, 33, 0.2);
  border-bottom-color: rgba(215, 153, 33, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(215, 153, 33, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(215, 153, 33, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(215, 153, 33, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 146,131,116;
  background-color: rgba(146, 131, 116, 0.2);
  border-bottom-color: rgba(146, 131, 116, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(146, 131, 116, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(146, 131, 116, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(146, 131, 116, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 152,151,26;
  background-color: rgba(152, 151, 26, 0.2);
  border-bottom-color: rgba(152, 151, 26, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(152, 151, 26, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(152, 151, 26, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(152, 151, 26, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 104,157,106;
  background-color: rgba(104, 157, 106, 0.2);
  border-bottom-color: rgba(104, 157, 106, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 157, 106, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 157, 106, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 157, 106, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 214,93,14;
  background-color: rgba(214, 93, 14, 0.2);
  border-bottom-color: rgba(214, 93, 14, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(214, 93, 14, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(214, 93, 14, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(214, 93, 14, 0.4);
  border-top-width: 1px;
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
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(40, 40, 40);
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgba(163, 33, 0, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(163, 33, 0, 0.15);
  border-right-color: rgba(163, 33, 0, 0.15);
  border-top-color: rgba(163, 33, 0, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(104, 157, 106);
}

html[saved-theme="light"] body h1 {
  color: rgb(204, 36, 29);
}

html[saved-theme="light"] body h2 {
  color: rgb(215, 153, 33);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(250, 189, 47);
}

html[saved-theme="light"] body h3 {
  color: rgb(152, 151, 26);
}

html[saved-theme="light"] body h4 {
  color: rgb(104, 157, 106);
}

html[saved-theme="light"] body h5 {
  color: rgb(69, 133, 136);
}

html[saved-theme="light"] body h6 {
  color: rgb(177, 98, 134);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 69,133,136;
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
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
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
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
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(80, 73, 69);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(40, 40, 40);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(80, 73, 69);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(80, 73, 69);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(80, 73, 69);
  stroke: rgb(80, 73, 69);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(102, 92, 84);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(235, 219, 178);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body abbr {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body sub {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body summary {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body sup {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgba(163, 33, 0, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(163, 33, 0, 0.15);
  border-right-color: rgba(163, 33, 0, 0.15);
  border-top-color: rgba(163, 33, 0, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: rgb(104, 157, 106);
}`,
  },
};
