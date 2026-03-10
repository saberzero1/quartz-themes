import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "material-ocean", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 354 !important;
  --accent-l: 64% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgba(255, 71, 90, 0.1) !important;
  --background-modifier-border: #1e2537 !important;
  --background-modifier-border-focus: #1e2537 !important;
  --background-modifier-border-hover: #11131e !important;
  --background-modifier-error: rgb(255, 71, 90) !important;
  --background-modifier-error-hover: rgb(255, 71, 90) !important;
  --background-modifier-error-rgb: 255, 71, 90 !important;
  --background-modifier-form-field: #0b0d13 !important;
  --background-modifier-form-field-hover: #0b0d13 !important;
  --background-modifier-hover: #11131e !important;
  --background-modifier-success: rgb(163, 190, 140) !important;
  --background-modifier-success-rgb: 163, 190, 140 !important;
  --background-primary: #0f111a !important;
  --background-primary-alt: #0b0d13 !important;
  --background-secondary: #090b10 !important;
  --background-secondary-alt: #1e2537 !important;
  --bases-cards-background: #0f111a !important;
  --bases-cards-cover-background: #0b0d13 !important;
  --bases-cards-shadow: 0 0 0 1px #1e2537 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #11131e !important;
  --bases-embed-border-color: #1e2537 !important;
  --bases-group-heading-property-color: #9093a2 !important;
  --bases-table-border-color: #1e2537 !important;
  --bases-table-cell-background-active: #0f111a !important;
  --bases-table-cell-background-disabled: #0b0d13 !important;
  --bases-table-cell-background-selected: rgba(255, 71, 90, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #1e2537 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 71, 90) !important;
  --bases-table-group-background: #0b0d13 !important;
  --bases-table-header-background: #0f111a !important;
  --bases-table-header-background-hover: #11131e !important;
  --bases-table-header-color: #9093a2 !important;
  --bases-table-summary-background: #0f111a !important;
  --bases-table-summary-background-hover: #11131e !important;
  --blockquote-border-color: rgb(255, 71, 90) !important;
  --blockquote-color: #9093a2 !important;
  --blur-background: color-mix(in srgb, #1e2537 65%, transparent) linear-gradient(#1e2537, color-mix(in srgb, #1e2537 65%, transparent)) !important;
  --callout-bug: 255, 71, 90;
  --callout-error: 255, 71, 90;
  --callout-fail: 255, 71, 90;
  --callout-padding: 16px 16px 16px 20px;
  --callout-success: 163, 190, 140;
  --canvas-background: #0f111a !important;
  --canvas-card-label-color: #697086 !important;
  --canvas-color-1: 255, 71, 90 !important;
  --canvas-color-4: 163, 190, 140 !important;
  --canvas-dot-pattern: #1e2537 !important;
  --caret-color: #b6b7be !important;
  --checkbox-border-color: #697086 !important;
  --checkbox-border-color-hover: #9093a2 !important;
  --checkbox-color: rgb(255, 71, 90) !important;
  --checkbox-color-hover: hsl(351, 102%, 73.6%) !important;
  --checkbox-marker-color: #0f111a !important;
  --checklist-done-color: #9093a2 !important;
  --code-background: #0b0d13 !important;
  --code-border-color: #1e2537 !important;
  --code-bracket-background: #11131e !important;
  --code-comment: #697086 !important;
  --code-function: #ffcb6b !important;
  --code-important: #fde3c0 !important;
  --code-keyword: #ffc0cb !important;
  --code-normal: #b6b7be !important;
  --code-operator: rgb(255, 71, 90) !important;
  --code-property: #89ddff !important;
  --code-punctuation: #9093a2 !important;
  --code-string: rgb(163, 190, 140) !important;
  --code-tag: rgb(255, 71, 90) !important;
  --code-value: #c792ea !important;
  --collapse-icon-color: #697086 !important;
  --collapse-icon-color-collapsed: #697086 !important;
  --color-accent: rgb(255, 71, 90) !important;
  --color-accent-1: hsl(351, 102%, 73.6%) !important;
  --color-accent-2: hsl(349, 105%, 82.56%) !important;
  --color-accent-hsl: 354, 100%, 64% !important;
  --color-base-00: #0f111a !important;
  --color-base-10: #0b0d13 !important;
  --color-base-100: #b6b7be !important;
  --color-base-20: #090b10 !important;
  --color-base-25: #0b0d13 !important;
  --color-base-30: #1e2537 !important;
  --color-base-35: #11131e !important;
  --color-base-40: #1e2537 !important;
  --color-base-50: #697086 !important;
  --color-base-60: #697086 !important;
  --color-base-70: #9093a2 !important;
  --color-blue: #82aaff !important;
  --color-cyan: #89ddff !important;
  --color-green: rgb(163, 190, 140) !important;
  --color-green-rgb: 163, 190, 140 !important;
  --color-orange: #fde3c0 !important;
  --color-pink: #ffc0cb !important;
  --color-purple: #c792ea !important;
  --color-red: rgb(255, 71, 90) !important;
  --color-red-rgb: 255, 71, 90 !important;
  --color-yellow: #ffcb6b !important;
  --dark: #b6b7be !important;
  --darkgray: #b6b7be !important;
  --divider-color: #1e2537 !important;
  --divider-color-hover: rgb(255, 71, 90) !important;
  --dropdown-background: #1e2537 !important;
  --dropdown-background-hover: #11131e !important;
  --embed-block-shadow-hover: 0 0 0 1px #1e2537, inset 0 0 0 1px #1e2537 !important;
  --embed-border-start: 2px solid rgb(255, 71, 90) !important;
  --file-header-background: #0f111a !important;
  --file-header-background-focused: #0f111a !important;
  --flair-background: #1e2537 !important;
  --flair-color: #b6b7be !important;
  --footnote-divider-color: #1e2537 !important;
  --footnote-id-color: #9093a2 !important;
  --footnote-id-color-no-occurrences: #697086 !important;
  --footnote-input-background-active: #11131e !important;
  --graph-line: #1e2537 !important;
  --graph-node: #9093a2 !important;
  --graph-node-attachment: #ffcb6b !important;
  --graph-node-focused: hsl(351, 102%, 73.6%) !important;
  --graph-node-tag: rgb(163, 190, 140) !important;
  --graph-node-unresolved: #697086 !important;
  --graph-text: #b6b7be !important;
  --gray: #9093a2 !important;
  --h1-color: hsl(351, 102%, 73.6%) !important;
  --h2-color: hsl(351, 102%, 73.6%) !important;
  --h3-color: hsl(351, 102%, 73.6%) !important;
  --h4-color: hsl(351, 102%, 73.6%) !important;
  --h5-color: hsl(351, 102%, 73.6%) !important;
  --h6-color: hsl(351, 102%, 73.6%) !important;
  --heading-formatting: #697086 !important;
  --highlight: hsl(351, 102%, 73.6%) !important;
  --hr-color: #1e2537 !important;
  --icon-color: #9093a2 !important;
  --icon-color-active: hsl(351, 102%, 73.6%) !important;
  --icon-color-focused: #b6b7be !important;
  --icon-color-hover: #9093a2 !important;
  --inline-title-color: hsl(351, 102%, 73.6%) !important;
  --input-date-separator: #697086 !important;
  --input-placeholder-color: #697086 !important;
  --interactive-accent: rgb(255, 71, 90) !important;
  --interactive-accent-hover: hsl(351, 102%, 73.6%) !important;
  --interactive-accent-hsl: 354, 100%, 64% !important;
  --interactive-hover: #11131e !important;
  --interactive-normal: #1e2537 !important;
  --light: #0f111a !important;
  --lightgray: #090b10 !important;
  --link-color: hsl(351, 102%, 73.6%) !important;
  --link-color-hover: hsl(349, 105%, 82.56%) !important;
  --link-external-color: hsl(351, 102%, 73.6%) !important;
  --link-external-color-hover: hsl(349, 105%, 82.56%) !important;
  --link-unresolved-color: hsl(351, 102%, 73.6%) !important;
  --link-unresolved-decoration-color: rgba(255, 71, 90, 0.3) !important;
  --list-marker-color: #9093a2 !important;
  --list-marker-color-collapsed: #9093a2 !important;
  --list-marker-color-hover: #9093a2 !important;
  --lucide-calendar-days: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3Cpath d='M8 14h.01'%3E%3C/path%3E%3Cpath d='M12 14h.01'%3E%3C/path%3E%3Cpath d='M16 14h.01'%3E%3C/path%3E%3Cpath d='M8 18h.01'%3E%3C/path%3E%3Cpath d='M12 18h.01'%3E%3C/path%3E%3Cpath d='M16 18h.01'%3E%3C/path%3E%3C/svg%3E") !important;
  --lucide-maximize: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E") !important;
  --lucide-minus: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E") !important;
  --lucide-x: url("data:image/svg+xmlutf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
  --menu-background: #090b10 !important;
  --menu-border-color: #11131e !important;
  --metadata-border-color: #1e2537 !important;
  --metadata-divider-color: #1e2537 !important;
  --metadata-input-background-active: #11131e !important;
  --metadata-input-text-color: #b6b7be !important;
  --metadata-label-background-active: #11131e !important;
  --metadata-label-text-color: #9093a2 !important;
  --metadata-label-text-color-hover: #9093a2 !important;
  --metadata-property-background-active: #11131e !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1e2537 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #11131e !important;
  --modal-background: #0f111a !important;
  --modal-border-color: #1e2537 !important;
  --nav-collapse-icon-color: #697086 !important;
  --nav-collapse-icon-color-collapsed: #697086 !important;
  --nav-heading-color: #b6b7be !important;
  --nav-heading-color-collapsed: #697086 !important;
  --nav-heading-color-collapsed-hover: #9093a2 !important;
  --nav-heading-color-hover: #b6b7be !important;
  --nav-item-background-active: #11131e !important;
  --nav-item-background-hover: #11131e !important;
  --nav-item-background-selected: rgba(255, 71, 90, 0.15) !important;
  --nav-item-color: #9093a2 !important;
  --nav-item-color-active: #b6b7be !important;
  --nav-item-color-highlighted: hsl(351, 102%, 73.6%) !important;
  --nav-item-color-hover: #b6b7be !important;
  --nav-item-color-selected: #b6b7be !important;
  --nav-tag-color: #697086 !important;
  --nav-tag-color-active: #9093a2 !important;
  --nav-tag-color-hover: #9093a2 !important;
  --pdf-background: #0f111a !important;
  --pdf-page-background: #0f111a !important;
  --pdf-shadow: 0 0 0 1px #1e2537 !important;
  --pdf-sidebar-background: #0f111a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #1e2537 !important;
  --pill-border-color: #1e2537 !important;
  --pill-border-color-hover: #11131e !important;
  --pill-color: #9093a2 !important;
  --pill-color-hover: #b6b7be !important;
  --pill-color-remove: #697086 !important;
  --pill-color-remove-hover: hsl(351, 102%, 73.6%) !important;
  --prompt-background: #0f111a !important;
  --prompt-border-color: #1e2537 !important;
  --raised-background: color-mix(in srgb, #1e2537 65%, transparent) linear-gradient(#1e2537, color-mix(in srgb, #1e2537 65%, transparent)) !important;
  --ribbon-background: #090b10 !important;
  --ribbon-background-collapsed: #0f111a !important;
  --scrollbar-active-thumb-bg: rgb(255, 71, 90) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: #00010a !important;
  --search-clear-button-color: #9093a2 !important;
  --search-icon-color: #9093a2 !important;
  --search-result-background: #0f111a !important;
  --secondary: hsl(351, 102%, 73.6%) !important;
  --setting-group-heading-color: #b6b7be !important;
  --setting-items-background: #0b0d13 !important;
  --setting-items-border-color: #1e2537 !important;
  --slider-thumb-border-color: #11131e !important;
  --slider-track-background: #1e2537 !important;
  --status-bar-background: #090b10 !important;
  --status-bar-border-color: #1e2537 !important;
  --status-bar-text-color: #9093a2 !important;
  --suggestion-background: #0f111a !important;
  --sync-avatar-color-1: rgb(255, 71, 90) !important;
  --sync-avatar-color-2: #fde3c0 !important;
  --sync-avatar-color-3: #ffcb6b !important;
  --sync-avatar-color-4: rgb(163, 190, 140) !important;
  --sync-avatar-color-5: #89ddff !important;
  --sync-avatar-color-6: #82aaff !important;
  --sync-avatar-color-7: #c792ea !important;
  --sync-avatar-color-8: #ffc0cb !important;
  --tab-background-active: #0f111a !important;
  --tab-container-background: #090b10 !important;
  --tab-divider-color: #11131e !important;
  --tab-outline-color: #1e2537 !important;
  --tab-switcher-background: #090b10 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #090b10, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 71, 90) !important;
  --tab-text-color: #697086 !important;
  --tab-text-color-active: #9093a2 !important;
  --tab-text-color-focused: #9093a2 !important;
  --tab-text-color-focused-active: #9093a2 !important;
  --tab-text-color-focused-active-current: #b6b7be !important;
  --tab-text-color-focused-highlighted: hsl(351, 102%, 73.6%) !important;
  --table-add-button-border-color: #1e2537 !important;
  --table-border-color: #1e2537 !important;
  --table-drag-handle-background-active: rgb(255, 71, 90) !important;
  --table-drag-handle-color: #697086 !important;
  --table-header-background: #11131e !important;
  --table-header-background-hover: #11131e !important;
  --table-header-border-color: #1e2537 !important;
  --table-header-color: #b6b7be !important;
  --table-selection: rgba(255, 71, 90, 0.1) !important;
  --table-selection-border-color: rgb(255, 71, 90) !important;
  --tag-background: rgba(255, 71, 90, 0.1) !important;
  --tag-background-hover: rgba(255, 71, 90, 0.2) !important;
  --tag-border-color: rgba(255, 71, 90, 0.15) !important;
  --tag-border-color-hover: rgba(255, 71, 90, 0.15) !important;
  --tag-color: hsl(351, 102%, 73.6%) !important;
  --tag-color-hover: hsl(351, 102%, 73.6%) !important;
  --tag-padding-y: 0.23em !important;
  --tertiary: hsl(349, 105%, 82.56%) !important;
  --text-accent: hsl(351, 102%, 73.6%) !important;
  --text-accent-hover: hsl(349, 105%, 82.56%) !important;
  --text-error: rgb(255, 71, 90) !important;
  --text-faint: #697086 !important;
  --text-highlight-bg: hsl(351, 102%, 73.6%) !important;
  --text-muted: #9093a2 !important;
  --text-normal: #b6b7be !important;
  --text-selection: rgba(255, 71, 90, 0.33) !important;
  --text-success: rgb(163, 190, 140) !important;
  --text-warning: #fde3c0 !important;
  --textHighlight: hsl(351, 102%, 73.6%) !important;
  --titlebar-background: #090b10 !important;
  --titlebar-background-focused: #090b10 !important;
  --titlebar-border-color: #1e2537 !important;
  --titlebar-text-color: #9093a2 !important;
  --titlebar-text-color-focused: #b6b7be !important;
  --vault-profile-color: #b6b7be !important;
  --vault-profile-color-hover: #b6b7be !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(9, 11, 16);
  color: rgb(182, 183, 190);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 17, 26);
  color: rgb(182, 183, 190);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(9, 11, 16);
  color: rgb(182, 183, 190);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(30, 37, 55);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(9, 11, 16);
  border-left-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body div#quartz-root {
  background-color: rgb(15, 17, 26);
  color: rgb(182, 183, 190);
}`,
    typography: `body .page article p > b, b {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .page article p > em, em {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .page article p > i, i {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .page article p > strong, strong {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .text-highlight {
  background-color: rgb(255, 120, 141);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: line-through rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body p {
  color: rgb(144, 147, 162);
  outline: rgb(144, 147, 162) none 0px;
  text-decoration: rgb(144, 147, 162);
  text-decoration-color: rgb(144, 147, 162);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration: underline rgb(255, 120, 141);
  text-decoration-color: rgb(255, 120, 141);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration: underline rgb(255, 120, 141);
  text-decoration-color: rgb(255, 120, 141);
}

body a.internal.broken {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration: underline rgba(255, 71, 90, 0.3);
  text-decoration-color: rgba(255, 71, 90, 0.3);
}`,
    lists: `body dd {
  color: rgb(182, 183, 190);
}

body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

body dt {
  color: rgb(182, 183, 190);
}

body ol > li {
  color: rgb(182, 183, 190);
}

body ol.overflow {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body ul > li {
  color: rgb(182, 183, 190);
}

body ul.overflow {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(105, 112, 134);
  text-decoration: rgb(105, 112, 134);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body table {
  color: rgb(182, 183, 190);
  margin-top: 0px;
  width: 662px;
}

body td {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body th {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body tr {
  background-color: rgb(17, 19, 30);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 71, 90);
  border-left-color: rgb(255, 71, 90);
  border-right-color: rgb(255, 71, 90);
  border-top-color: rgb(255, 71, 90);
  color: rgb(255, 71, 90);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 203, 107);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 203, 107);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 203, 107);
  border-left-color: rgb(255, 203, 107);
  border-right-color: rgb(255, 203, 107);
  border-top-color: rgb(255, 203, 107);
}

body pre > code, pre:has(> code) {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  overflow-x: scroll;
}

body pre:has(> code) {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  overflow-x: scroll;
}`,
    images: `body audio {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body figcaption {
  color: rgb(182, 183, 190);
}

body figure {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body img {
  border-bottom-color: rgb(182, 183, 190);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(182, 183, 190);
  border-radius: 4px;
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    embeds: `body .file-embed {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
}

body .footnotes {
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body .transclude {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(255, 71, 90);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body .transclude-inner {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(255, 71, 90);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
  text-decoration-color: rgb(144, 147, 162);
}

body input[type=checkbox] {
  border-bottom-color: rgb(105, 112, 134);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: rgb(105, 112, 134);
  border-right-color: rgb(105, 112, 134);
  border-top-color: rgb(105, 112, 134);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='*'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='-'] {
  color: rgb(105, 112, 134);
  text-decoration: line-through rgb(144, 147, 162);
  text-decoration-color: rgb(144, 147, 162);
}

body li.task-list-item[data-task='/'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='>'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='?'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='I'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='S'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='b'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='c'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='d'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='f'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='i'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='k'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='l'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='p'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='u'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body li.task-list-item[data-task='w'] {
  color: rgb(182, 183, 190);
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}`,
    callouts: `body .callout .callout-title {
  gap: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-left-color: rgba(163, 190, 140, 0.25);
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgba(163, 190, 140, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

body .search > .search-container > .search-space > * {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(17, 19, 30);
  color: rgb(182, 183, 190);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(9, 11, 16);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(17, 19, 30);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(17, 19, 30);
  color: rgb(182, 183, 190);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.15);
  border-left-color: rgba(255, 71, 90, 0.15);
  border-right-color: rgba(255, 71, 90, 0.15);
  border-top-color: rgba(255, 71, 90, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(255, 120, 141);
}

body h1 {
  color: rgb(255, 120, 141);
}

body h2 {
  color: rgb(255, 120, 141);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 120, 141);
}

body h3 {
  color: rgb(255, 120, 141);
}

body h4 {
  color: rgb(255, 120, 141);
}

body h5 {
  color: rgb(255, 120, 141);
}

body h6 {
  color: rgb(255, 120, 141);
}

body hr {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
}`,
    scrollbars: `body .callout {
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(17, 19, 30);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}`,
    footer: `body footer {
  background-color: rgb(9, 11, 16);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(144, 147, 162);
}

body footer ul li a {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(182, 183, 190);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(144, 147, 162);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body li.section-li > .section .meta {
  color: rgb(144, 147, 162);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(144, 147, 162);
  text-decoration: rgb(144, 147, 162);
}

body ul.section-ul {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

body .breadcrumb-element p {
  color: rgb(105, 112, 134);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body .metadata {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(144, 147, 162);
  margin-bottom: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

body .navigation-progress {
  background-color: rgb(9, 11, 16);
}

body .page-header h2.page-title {
  color: rgb(182, 183, 190);
}

body abbr {
  color: rgb(182, 183, 190);
  text-decoration: underline dotted rgb(182, 183, 190);
}

body details {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body input[type=text] {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

body kbd {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

body progress {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

body sub {
  color: rgb(182, 183, 190);
}

body summary {
  color: rgb(182, 183, 190);
}

body sup {
  color: rgb(182, 183, 190);
}`,
  },
  light: {},
};
