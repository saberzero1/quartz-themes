import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "covert", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 354 !important;
  --accent-l: 56% !important;
  --accent-s: 42% !important;
  --background-modifier-active-hover: hsla(354, 42%, 56%, 0.1) !important;
  --background-modifier-border: rgb(45, 45, 46) !important;
  --background-modifier-error: rgb(97, 96, 96) !important;
  --background-modifier-error-hover: rgb(97, 96, 96) !important;
  --background-modifier-error-rgb: 97, 96, 96 !important;
  --background-modifier-success: rgb(163, 190, 140) !important;
  --background-modifier-success-rgb: 163,190,140 !important;
  --background-primary: rgb(33, 34, 36) !important;
  --background-primary-alt: rgb(33, 34, 36) !important;
  --background-secondary: rgb(33, 34, 36) !important;
  --background-secondary-alt: rgb(45, 45, 46) !important;
  --bases-cards-background: rgb(33, 34, 36) !important;
  --bases-cards-cover-background: rgb(33, 34, 36) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(45, 45, 46) !important;
  --bases-embed-border-color: rgb(45, 45, 46) !important;
  --bases-group-heading-property-color: rgb(97, 96, 96) !important;
  --bases-table-border-color: rgb(45, 45, 46) !important;
  --bases-table-cell-background-active: rgb(33, 34, 36) !important;
  --bases-table-cell-background-disabled: rgb(33, 34, 36) !important;
  --bases-table-cell-background-selected: hsla(354, 42%, 56%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(354, 42%, 56%) !important;
  --bases-table-group-background: rgb(33, 34, 36) !important;
  --bases-table-header-background: rgb(33, 34, 36) !important;
  --bases-table-header-color: rgb(97, 96, 96) !important;
  --bases-table-row-background-hover: rgb(76, 86, 106) !important;
  --bases-table-summary-background: rgb(33, 34, 36) !important;
  --blockquote-border-color: hsl(354, 42%, 56%) !important;
  --bold-color: rgb(235, 203, 139) !important;
  --bold-weight: 600 !important;
  --calendar-background-hover: rgb(76, 86, 106) !important;
  --calendar-hover: rgb(97, 96, 96) !important;
  --calendar-today: rgb(235, 203, 139) !important;
  --calendar-week: rgb(235, 203, 139) !important;
  --callout-bug: 97, 96, 96;
  --callout-default: 94,129,172;
  --callout-error: 97, 96, 96;
  --callout-example: 180,142,173;
  --callout-fail: 97, 96, 96;
  --callout-important: 97, 96, 96;
  --callout-info: 94,129,172;
  --callout-question: 208,135,112;
  --callout-success: 163,190,140;
  --callout-summary: 97, 96, 96;
  --callout-tip: 97, 96, 96;
  --callout-todo: 94,129,172;
  --callout-warning: 208,135,112;
  --canvas-background: rgb(33, 34, 36) !important;
  --canvas-card-label-color: rgb(97, 96, 96) !important;
  --canvas-color-1: 97, 96, 96 !important;
  --canvas-color-2: 208,135,112 !important;
  --canvas-color-3: 235,203,139 !important;
  --canvas-color-4: 163,190,140 !important;
  --canvas-color-5: 97, 96, 96 !important;
  --canvas-color-6: 180,142,173 !important;
  --caret-color: rgb(97, 96, 96) !important;
  --checkbox-border-color: rgb(97, 96, 96) !important;
  --checkbox-border-color-hover: rgb(97, 96, 96) !important;
  --checkbox-color: rgb(97, 96, 96) !important;
  --checkbox-color-hover: rgb(97, 96, 96) !important;
  --checkbox-marker-color: rgb(33, 34, 36) !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: rgba(97, 96, 96, 0.5) !important;
  --code-background: rgb(33, 34, 36) !important;
  --code-border-color: rgb(45, 45, 46) !important;
  --code-comment: rgb(97, 96, 96) !important;
  --code-function: rgb(235, 203, 139) !important;
  --code-important: rgb(208, 135, 112) !important;
  --code-normal: rgb(97, 96, 96) !important;
  --code-operator: rgb(97, 96, 96) !important;
  --code-property: rgb(97, 96, 96) !important;
  --code-punctuation: rgb(97, 96, 96) !important;
  --code-string: rgb(163, 190, 140) !important;
  --code-tag: rgb(97, 96, 96) !important;
  --code-value: rgb(180, 142, 173) !important;
  --collapse-icon-color: rgb(97, 96, 96) !important;
  --collapse-icon-color-collapsed: rgb(208, 135, 112) !important;
  --color-accent: hsl(354, 42%, 56%) !important;
  --color-accent-1: hsl(351, 42.84%, 64.4%) !important;
  --color-accent-2: hsl(349, 44.1%, 72.24%) !important;
  --color-accent-hsl: 354, 42%, 56% !important;
  --color-blue: rgb(94, 129, 172) !important;
  --color-blue-rgb: 94,129,172 !important;
  --color-cyan: rgb(97, 96, 96) !important;
  --color-cyan-rgb: 97, 96, 96 !important;
  --color-green: rgb(163, 190, 140) !important;
  --color-green-rgb: 163,190,140 !important;
  --color-orange: rgb(208, 135, 112) !important;
  --color-orange-rgb: 208,135,112 !important;
  --color-purple: rgb(180, 142, 173) !important;
  --color-purple-rgb: 180,142,173 !important;
  --color-red: rgb(97, 96, 96) !important;
  --color-red-rgb: 97, 96, 96 !important;
  --color-yellow: rgb(235, 203, 139) !important;
  --color-yellow-rgb: 235,203,139 !important;
  --cursor-line-background: rgba(rgb(33, 34, 36), 0.5) !important;
  --dark: rgb(97, 96, 96) !important;
  --dark0: rgb(33, 34, 36) !important;
  --dark0_x: 33, 34, 36 !important;
  --dark1: rgb(33, 34, 36) !important;
  --dark1_x: 33, 34, 36 !important;
  --dark2: rgb(45, 45, 46) !important;
  --dark2_x: 45, 45, 46 !important;
  --dark3: rgb(76, 86, 106) !important;
  --dark3_x: 76,86,106 !important;
  --dark4: rgb(76, 86, 106) !important;
  --dark4_x: 33, 34, 36 !important;
  --darkgray: rgb(97, 96, 96) !important;
  --dataview-key: rgb(97, 96, 96) !important;
  --dataview-key-background: rgba(97, 96, 96, 0.3) !important;
  --dataview-value: rgb(97, 96, 96) !important;
  --dataview-value-background: rgba(97, 96, 96, 0.3) !important;
  --divider-color: rgb(45, 45, 46) !important;
  --divider-color-hover: hsl(354, 42%, 56%) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(45, 45, 46), inset 0 0 0 1px rgb(45, 45, 46) !important;
  --embed-border-left: 6px double hsl(354, 42%, 56%) !important;
  --embed-border-start: 2px solid hsl(354, 42%, 56%) !important;
  --file-header-background: rgb(33, 34, 36) !important;
  --file-header-background-focused: rgb(33, 34, 36) !important;
  --flair-color: rgb(97, 96, 96) !important;
  --flashing-background: rgba(97, 96, 96, 0.3) !important;
  --footnote-divider-color: rgb(45, 45, 46) !important;
  --footnote-id-color: rgb(97, 96, 96) !important;
  --footnote-id-color-no-occurrences: rgb(97, 96, 96) !important;
  --frost0: rgb(97, 96, 96) !important;
  --frost0_x: 97, 96, 96 !important;
  --frost1: rgb(97, 96, 96) !important;
  --frost1_x: 97, 96, 96 !important;
  --frost2: rgb(97, 96, 96) !important;
  --frost2_x: 97, 96, 96 !important;
  --frost3: rgb(94, 129, 172) !important;
  --frost3_x: 94,129,172 !important;
  --graph-line: rgb(76, 86, 106) !important;
  --graph-node: rgb(97, 96, 96) !important;
  --graph-node-attachment: rgb(163, 190, 140) !important;
  --graph-node-focused: rgb(208, 135, 112) !important;
  --graph-node-tag: rgb(97, 96, 96) !important;
  --graph-node-unresolved: rgb(97, 96, 96) !important;
  --graph-text: rgb(97, 96, 96) !important;
  --gray: rgb(97, 96, 96) !important;
  --green: rgb(163, 190, 140) !important;
  --green_x: 163,190,140 !important;
  --h1-color: rgb(97, 96, 96) !important;
  --h2-color: rgb(235, 203, 139) !important;
  --h3-color: rgb(163, 190, 140) !important;
  --h4-color: rgb(180, 142, 173) !important;
  --h5-color: rgb(97, 96, 96) !important;
  --h6-color: rgb(97, 96, 96) !important;
  --heading-formatting: rgb(97, 96, 96) !important;
  --highlight: rgb(97, 96, 96) !important;
  --hr-color: rgb(45, 45, 46) !important;
  --icon-color: rgb(97, 96, 96) !important;
  --icon-color-active: rgb(208, 135, 112) !important;
  --icon-color-focused: rgb(97, 96, 96) !important;
  --icon-color-hover: rgb(97, 96, 96) !important;
  --inline-title-color: rgb(235, 203, 139) !important;
  --input-date-separator: rgb(97, 96, 96) !important;
  --input-placeholder-color: rgb(97, 96, 96) !important;
  --interactive-accent: hsl(354, 42%, 56%) !important;
  --interactive-accent-hover: hsl(351, 42.84%, 64.4%) !important;
  --interactive-accent-hsl: 354, 42%, 56% !important;
  --italic-color: rgb(235, 203, 139) !important;
  --light: rgb(33, 34, 36) !important;
  --light0: rgb(97, 96, 96) !important;
  --light0_x: 97, 96, 96 !important;
  --light1: rgb(97, 96, 96) !important;
  --light1_x: 97, 96, 96 !important;
  --light2: rgb(97, 96, 96) !important;
  --light2_x: 97, 96, 96 !important;
  --light3: rgb(97, 96, 96) !important;
  --light3_x: 97, 96, 96 !important;
  --lightgray: rgb(33, 34, 36) !important;
  --link-color: rgb(208, 135, 112) !important;
  --link-color-hover: rgb(97, 96, 96) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(208, 135, 112) !important;
  --link-external-color-hover: rgb(97, 96, 96) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(208, 135, 112) !important;
  --link-unresolved-decoration-color: hsla(354, 42%, 56%, 0.3) !important;
  --list-marker-color: rgb(97, 96, 96) !important;
  --list-marker-color-collapsed: rgb(208, 135, 112) !important;
  --list-marker-color-hover: rgb(97, 96, 96) !important;
  --menu-background: rgb(33, 34, 36) !important;
  --mermaid-loopline: rgb(97, 96, 96) !important;
  --mermaid-note: rgb(94, 129, 172) !important;
  --metadata-border-color: rgb(45, 45, 46) !important;
  --metadata-divider-color: rgb(45, 45, 46) !important;
  --metadata-input-text-color: rgb(97, 96, 96) !important;
  --metadata-label-text-color: rgb(97, 96, 96) !important;
  --metadata-label-text-color-hover: rgb(97, 96, 96) !important;
  --modal-background: rgb(33, 34, 36) !important;
  --nav-collapse-icon-color: rgb(97, 96, 96) !important;
  --nav-collapse-icon-color-collapsed: rgb(97, 96, 96) !important;
  --nav-file-tag: rgba(235, 203, 139, 0.9) !important;
  --nav-heading-color: rgb(97, 96, 96) !important;
  --nav-heading-color-collapsed: rgb(97, 96, 96) !important;
  --nav-heading-color-collapsed-hover: rgb(97, 96, 96) !important;
  --nav-heading-color-hover: rgb(97, 96, 96) !important;
  --nav-item-background-selected: hsla(354, 42%, 56%, 0.15) !important;
  --nav-item-color: rgb(97, 96, 96) !important;
  --nav-item-color-active: rgb(97, 96, 96) !important;
  --nav-item-color-highlighted: rgb(208, 135, 112) !important;
  --nav-item-color-hover: rgb(97, 96, 96) !important;
  --nav-item-color-selected: rgb(97, 96, 96) !important;
  --nav-tag-color: rgb(97, 96, 96) !important;
  --nav-tag-color-active: rgb(97, 96, 96) !important;
  --nav-tag-color-hover: rgb(97, 96, 96) !important;
  --orange: rgb(208, 135, 112) !important;
  --orange_x: 208,135,112 !important;
  --pdf-background: rgb(33, 34, 36) !important;
  --pdf-page-background: rgb(33, 34, 36) !important;
  --pdf-shadow: 0 0 0 1px rgb(45, 45, 46) !important;
  --pdf-sidebar-background: rgb(33, 34, 36) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(45, 45, 46) !important;
  --pill-border-color: rgb(45, 45, 46) !important;
  --pill-color: rgb(97, 96, 96) !important;
  --pill-color-hover: rgb(97, 96, 96) !important;
  --pill-color-remove: rgb(97, 96, 96) !important;
  --pill-color-remove-hover: rgb(208, 135, 112) !important;
  --prompt-background: rgb(33, 34, 36) !important;
  --purple: rgb(180, 142, 173) !important;
  --purple_x: 180,142,173 !important;
  --red: rgb(97, 96, 96) !important;
  --red_x: 97, 96, 96 !important;
  --ribbon-background: rgb(33, 34, 36) !important;
  --ribbon-background-collapsed: rgb(33, 34, 36) !important;
  --search-clear-button-color: rgb(97, 96, 96) !important;
  --search-icon-color: rgb(97, 96, 96) !important;
  --search-result-background: rgb(33, 34, 36) !important;
  --secondary: rgb(208, 135, 112) !important;
  --setting-group-heading-color: rgb(97, 96, 96) !important;
  --setting-items-background: rgb(33, 34, 36) !important;
  --setting-items-border-color: rgb(45, 45, 46) !important;
  --slider-track-background: rgb(45, 45, 46) !important;
  --status-bar-background: rgb(33, 34, 36) !important;
  --status-bar-border-color: rgb(45, 45, 46) !important;
  --status-bar-text-color: rgb(97, 96, 96) !important;
  --suggestion-background: rgb(33, 34, 36) !important;
  --sync-avatar-color-1: rgb(97, 96, 96) !important;
  --sync-avatar-color-2: rgb(208, 135, 112) !important;
  --sync-avatar-color-3: rgb(235, 203, 139) !important;
  --sync-avatar-color-4: rgb(163, 190, 140) !important;
  --sync-avatar-color-5: rgb(97, 96, 96) !important;
  --sync-avatar-color-6: rgb(94, 129, 172) !important;
  --sync-avatar-color-7: rgb(180, 142, 173) !important;
  --tab-background-active: rgb(33, 34, 36) !important;
  --tab-container-background: rgb(33, 34, 36) !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: rgb(45, 45, 46) !important;
  --tab-switcher-background: rgb(33, 34, 36) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 34, 36), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(354, 42%, 56%) !important;
  --tab-text-color: rgb(97, 96, 96) !important;
  --tab-text-color-active: rgb(97, 96, 96) !important;
  --tab-text-color-focused: rgb(97, 96, 96) !important;
  --tab-text-color-focused-active: rgb(97, 96, 96) !important;
  --tab-text-color-focused-active-current: rgb(97, 96, 96) !important;
  --tab-text-color-focused-highlighted: rgb(208, 135, 112) !important;
  --table-add-button-border-color: rgb(45, 45, 46) !important;
  --table-border-color: rgb(45, 45, 46) !important;
  --table-drag-handle-background-active: hsl(354, 42%, 56%) !important;
  --table-drag-handle-color: rgb(97, 96, 96) !important;
  --table-header-background: hsl(240, 1%, 21%) !important;
  --table-header-background-hover: hsl(240, 1%, 21%) !important;
  --table-header-border-color: rgb(45, 45, 46) !important;
  --table-header-color: rgb(97, 96, 96) !important;
  --table-row-background-hover: rgb(76, 86, 106) !important;
  --table-row-even-background: hsl(30, 2%, 19%) !important;
  --table-row-odd-background: hsl(180, 3%, 16%) !important;
  --table-selection: hsla(354, 42%, 56%, 0.1) !important;
  --table-selection-border-color: hsl(354, 42%, 56%) !important;
  --tag-background: rgb(33, 34, 36) !important;
  --tag-background-hover: rgb(33, 34, 36) !important;
  --tag-border-color: hsla(354, 42%, 56%, 0.15) !important;
  --tag-border-color-hover: hsla(354, 42%, 56%, 0.15) !important;
  --tag-color: rgb(76, 86, 106) !important;
  --tag-color-hover: rgb(208, 135, 112) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .5em !important;
  --tertiary: rgb(97, 96, 96) !important;
  --text-accent: rgb(208, 135, 112) !important;
  --text-accent-hover: rgb(97, 96, 96) !important;
  --text-error: rgb(97, 96, 96) !important;
  --text-faint: rgb(97, 96, 96) !important;
  --text-highlight-bg: rgb(97, 96, 96) !important;
  --text-highlight-fg: rgb(33, 34, 36) !important;
  --text-muted: rgb(97, 96, 96) !important;
  --text-normal: rgb(97, 96, 96) !important;
  --text-selection: rgba(97, 96, 96, 0.6) !important;
  --text-success: rgb(163, 190, 140) !important;
  --text-warning: rgb(208, 135, 112) !important;
  --textHighlight: rgb(97, 96, 96) !important;
  --titlebar-background: rgb(33, 34, 36) !important;
  --titlebar-background-focused: rgb(45, 45, 46) !important;
  --titlebar-border-color: rgb(45, 45, 46) !important;
  --titlebar-text-color: rgb(97, 96, 96) !important;
  --titlebar-text-color-focused: rgb(97, 96, 96) !important;
  --vault-profile-color: rgb(97, 96, 96) !important;
  --vault-profile-color-hover: rgb(97, 96, 96) !important;
  --yellow: rgb(235, 203, 139) !important;
  --yellow_x: 235,203,139 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(45, 45, 46);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 34, 36);
  border-left-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

html body div#quartz-root {
  background-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(84, 84, 84);
  outline: rgb(84, 84, 84) none 0px;
  text-decoration-color: rgb(84, 84, 84);
}

html body .page article p > em, html em {
  color: rgb(84, 84, 84);
  outline: rgb(84, 84, 84) none 0px;
  text-decoration-color: rgb(84, 84, 84);
}

html body .page article p > i, html i {
  color: rgb(84, 84, 84);
  outline: rgb(84, 84, 84) none 0px;
  text-decoration-color: rgb(84, 84, 84);
}

html body .page article p > strong, html strong {
  color: rgb(84, 84, 84);
  outline: rgb(84, 84, 84) none 0px;
  text-decoration-color: rgb(84, 84, 84);
}

html body .text-highlight {
  background-color: rgb(97, 96, 96);
  color: rgb(33, 34, 36);
  outline: rgb(33, 34, 36) none 0px;
  text-decoration-color: rgb(33, 34, 36);
}

html body del {
  color: rgb(97, 96, 96);
  outline: rgb(97, 96, 96) none 0px;
  text-decoration-color: rgb(97, 96, 96);
}

html body p {
  color: rgb(97, 96, 96);
  outline: rgb(97, 96, 96) none 0px;
  text-decoration-color: rgb(97, 96, 96);
}`,
    links: `html body a.external, html footer a {
  color: rgb(56, 70, 76);
  font-weight: 600;
  outline: rgb(56, 70, 76) none 0px;
  text-decoration-color: rgb(56, 70, 76);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(208, 135, 112);
  font-weight: 600;
  outline: rgb(208, 135, 112) none 0px;
  text-decoration-color: rgb(208, 135, 112);
}

html body a.internal.broken {
  color: rgb(208, 135, 112);
  font-weight: 600;
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgba(190, 96, 105, 0.3);
  text-decoration-color: rgba(190, 96, 105, 0.3);
}`,
    lists: `html body dd {
  color: rgb(97, 96, 96);
}

html body dt {
  color: rgb(97, 96, 96);
}

html body ol > li {
  color: rgb(97, 96, 96);
}

html body ol.overflow {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body ul > li {
  color: rgb(97, 96, 96);
}

html body ul.overflow {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(97, 96, 96);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body table {
  border-bottom-color: rgb(33, 34, 36);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(33, 34, 36);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(33, 34, 36);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(33, 34, 36);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(97, 96, 96);
}

html body tbody tr:nth-child(even) {
  background-color: rgb(49, 48, 47);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(40, 42, 42);
}

html body td {
  border-bottom-color: rgb(33, 34, 36);
  border-left-color: rgb(33, 34, 36);
  border-right-color: rgb(33, 34, 36);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

html body th {
  border-bottom-color: rgb(33, 34, 36);
  border-left-color: rgb(33, 34, 36);
  border-right-color: rgb(33, 34, 36);
  border-top-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}

html body thead {
  border-bottom-color: rgb(45, 45, 46);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(33, 34, 36);
  border-right-color: rgb(33, 34, 36);
  border-top-color: rgb(33, 34, 36);
}

html body tr {
  background-color: rgb(53, 53, 54);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(33, 34, 36);
  border-right-color: rgb(33, 34, 36);
  border-top-color: rgb(33, 34, 36);
}`,
    code: `html body code {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

html body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
}

html body pre:has(> code) {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
}`,
    images: `html body audio {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body figcaption {
  color: rgb(97, 96, 96);
}

html body figure {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body img {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body video {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body .footnotes {
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body .transclude {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(190, 96, 105);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body .transclude-inner {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(190, 96, 105);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(97, 96, 96, 0.5);
  text-decoration-color: rgba(97, 96, 96, 0.5);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(97, 96, 96);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(33, 34, 36);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

html body .callout[data-callout="bug"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

html body .callout[data-callout="danger"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

html body .callout[data-callout="example"] {
  --callout-color: 180,142,173;
  background-color: rgba(180, 142, 173, 0.1);
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-left-color: rgba(180, 142, 173, 0.25);
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgba(180, 142, 173, 0.25);
}

html body .callout[data-callout="failure"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

html body .callout[data-callout="info"] {
  --callout-color: 94,129,172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

html body .callout[data-callout="note"] {
  --callout-color: 94,129,172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

html body .callout[data-callout="question"] {
  --callout-color: 208,135,112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}

html body .callout[data-callout="success"] {
  --callout-color: 163,190,140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-left-color: rgba(163, 190, 140, 0.25);
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgba(163, 190, 140, 0.25);
}

html body .callout[data-callout="tip"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

html body .callout[data-callout="todo"] {
  --callout-color: 94,129,172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

html body .callout[data-callout="warning"] {
  --callout-color: 208,135,112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

html body .search > .search-container > .search-space {
  background-color: rgb(33, 34, 36);
}

html body .search > .search-container > .search-space > * {
  color: rgb(97, 96, 96);
  outline: rgb(97, 96, 96) none 0px;
  text-decoration-color: rgb(97, 96, 96);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(97, 96, 96);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(97, 96, 96);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(97, 96, 96);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 34, 36);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(97, 96, 96);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgba(190, 96, 105, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(190, 96, 105, 0.15);
  border-right-color: rgba(190, 96, 105, 0.15);
  border-top-color: rgba(190, 96, 105, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html body a.internal.tag-link::before {
  color: rgb(76, 86, 106);
}

html body h1 {
  color: rgb(57, 57, 56);
}

html body h2 {
  color: rgb(57, 57, 56);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(235, 203, 139);
}

html body h3 {
  color: rgb(57, 57, 56);
}

html body h4 {
  color: rgb(57, 57, 56);
}

html body h5 {
  color: rgb(57, 57, 56);
}

html body h6 {
  color: rgb(57, 57, 56);
}

html body hr {
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
}`,
    scrollbars: `html body .callout {
  --callout-color: 94,129,172;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

html body ::-webkit-scrollbar {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}

html body ::-webkit-scrollbar-track {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(97, 96, 96);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(97, 96, 96);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}`,
    footer: `html body footer {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

html body footer ul li a {
  color: rgb(97, 96, 96);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(97, 96, 96);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(97, 96, 96);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(97, 96, 96);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body li.section-li > .section .meta {
  color: rgb(97, 96, 96);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(97, 96, 96);
}

html body ul.section-ul {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body .darkmode svg {
  color: rgb(97, 96, 96);
  stroke: rgb(97, 96, 96);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body .breadcrumb-element p {
  color: rgb(97, 96, 96);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body .metadata {
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

html body .metadata-properties {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body .navigation-progress {
  background-color: rgb(33, 34, 36);
}

html body .page-header h2.page-title {
  color: rgb(97, 96, 96);
}

html body abbr {
  color: rgb(97, 96, 96);
}

html body details {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body input[type=text] {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body kbd {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

html body progress {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

html body sub {
  color: rgb(97, 96, 96);
}

html body summary {
  color: rgb(97, 96, 96);
}

html body sup {
  color: rgb(97, 96, 96);
}`,
  },
  light: {},
};
