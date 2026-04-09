import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "material-ocean", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 354 !important;
  --accent-l: 64% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(354, 100%, 64%, 0.1) !important;
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
  --bases-table-cell-background-selected: hsla(354, 100%, 64%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #1e2537 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(354, 100%, 64%) !important;
  --bases-table-group-background: #0b0d13 !important;
  --bases-table-header-background: #0f111a !important;
  --bases-table-header-background-hover: #11131e !important;
  --bases-table-header-color: #9093a2 !important;
  --bases-table-summary-background: #0f111a !important;
  --bases-table-summary-background-hover: #11131e !important;
  --blockquote-border-color: hsl(354, 100%, 64%) !important;
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
  --checkbox-color: hsl(354, 100%, 64%) !important;
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
  --color-accent: hsl(354, 100%, 64%) !important;
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
  --divider-color-hover: hsl(354, 100%, 64%) !important;
  --dropdown-background: #1e2537 !important;
  --dropdown-background-hover: #11131e !important;
  --embed-block-shadow-hover: 0 0 0 1px #1e2537, inset 0 0 0 1px #1e2537 !important;
  --embed-border-start: 2px solid hsl(354, 100%, 64%) !important;
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
  --interactive-accent: hsl(354, 100%, 64%) !important;
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
  --link-unresolved-decoration-color: hsla(354, 100%, 64%, 0.3) !important;
  --list-marker-color: #9093a2 !important;
  --list-marker-color-collapsed: #9093a2 !important;
  --list-marker-color-hover: #9093a2 !important;
  --lucide-calendar-days: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3Cpath d='M8 14h.01'%3E%3C/path%3E%3Cpath d='M12 14h.01'%3E%3C/path%3E%3Cpath d='M16 14h.01'%3E%3C/path%3E%3Cpath d='M8 18h.01'%3E%3C/path%3E%3Cpath d='M12 18h.01'%3E%3C/path%3E%3Cpath d='M16 18h.01'%3E%3C/path%3E%3C/svg%3E") !important;
  --lucide-maximize: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 3H5a2 2 0 0 0-2 2v3'%3E%3C/path%3E%3Cpath d='M21 8V5a2 2 0 0 0-2-2h-3'%3E%3C/path%3E%3Cpath d='M3 16v3a2 2 0 0 0 2 2h3'%3E%3C/path%3E%3Cpath d='M16 21h3a2 2 0 0 0 2-2v-3'%3E%3C/path%3E%3C/svg%3E") !important;
  --lucide-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E") !important;
  --lucide-x: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E") !important;
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
  --nav-item-background-selected: hsla(354, 100%, 64%, 0.15) !important;
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
  --scrollbar-active-thumb-bg: hsl(354, 100%, 64%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(354, 100%, 64%) !important;
  --tab-text-color: #697086 !important;
  --tab-text-color-active: #9093a2 !important;
  --tab-text-color-focused: #9093a2 !important;
  --tab-text-color-focused-active: #9093a2 !important;
  --tab-text-color-focused-active-current: #b6b7be !important;
  --tab-text-color-focused-highlighted: hsl(351, 102%, 73.6%) !important;
  --table-add-button-border-color: #1e2537 !important;
  --table-border-color: #1e2537 !important;
  --table-drag-handle-background-active: hsl(354, 100%, 64%) !important;
  --table-drag-handle-color: #697086 !important;
  --table-header-background: #11131e !important;
  --table-header-background-hover: #11131e !important;
  --table-header-border-color: #1e2537 !important;
  --table-header-color: #b6b7be !important;
  --table-selection: hsla(354, 100%, 64%, 0.1) !important;
  --table-selection-border-color: hsl(354, 100%, 64%) !important;
  --tag-background: hsla(354, 100%, 64%, 0.1) !important;
  --tag-background-hover: hsla(354, 100%, 64%, 0.2) !important;
  --tag-border-color: hsla(354, 100%, 64%, 0.15) !important;
  --tag-border-color-hover: hsla(354, 100%, 64%, 0.15) !important;
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
  --text-selection: hsla(354, 100%, 64%, 0.33) !important;
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

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(9, 11, 16);
  color: rgb(182, 183, 190);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(15, 17, 26);
  color: rgb(182, 183, 190);
}

html body .bases-table thead th {
  border-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

html body .canvas-node {
  border-color: rgb(182, 183, 190);
}

html body .canvas-node-content {
  color: rgb(182, 183, 190);
}

html body .canvas-node-file {
  color: rgb(182, 183, 190);
}

html body .canvas-node-group {
  border-color: rgb(182, 183, 190);
}

html body .canvas-sidebar {
  background-color: rgb(9, 11, 16);
  border-color: rgb(182, 183, 190);
}

html body .note-properties {
  border-color: rgb(30, 37, 55);
}

html body .note-properties-key {
  color: rgb(144, 147, 162);
}

html body .note-properties-row {
  border-color: rgb(144, 147, 162);
}

html body .note-properties-tags {
  background-color: rgba(255, 71, 90, 0.1);
  color: rgb(255, 120, 141);
}

html body .note-properties-value {
  color: rgb(144, 147, 162);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(9, 11, 16);
  color: rgb(182, 183, 190);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(30, 37, 55);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(9, 11, 16);
  border-left-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

html body div#quartz-root {
  background-color: rgb(15, 17, 26);
  color: rgb(182, 183, 190);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration-color: rgb(182, 183, 190);
}

html body .page article p > em, html em {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration-color: rgb(182, 183, 190);
}

html body .page article p > i, html i {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration-color: rgb(182, 183, 190);
}

html body .page article p > strong, html strong {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration-color: rgb(182, 183, 190);
}

html body .text-highlight {
  background-color: rgb(255, 120, 141);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration-color: rgb(182, 183, 190);
}

html body h1.article-title {
  color: rgb(182, 183, 190);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(105, 112, 134);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 71, 90);
  border-color: rgb(255, 71, 90);
}

html body p {
  color: rgb(144, 147, 162);
  outline: rgb(144, 147, 162) none 0px;
  text-decoration-color: rgb(144, 147, 162);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration-color: rgb(255, 120, 141);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration-color: rgb(255, 120, 141);
}

html body a.internal.broken {
  color: rgb(255, 120, 141);
  outline: rgb(255, 120, 141) none 0px;
  text-decoration: underline rgba(255, 71, 90, 0.3);
  text-decoration-color: rgba(255, 71, 90, 0.3);
}`,
    lists: `html body dd {
  color: rgb(182, 183, 190);
}

html body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

html body dt {
  color: rgb(182, 183, 190);
}

html body ol > li {
  color: rgb(182, 183, 190);
}

html body ol.overflow {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body ul > li {
  color: rgb(182, 183, 190);
}

html body ul.overflow {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(105, 112, 134);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body table {
  color: rgb(182, 183, 190);
  margin-top: 0px;
  width: 662px;
}

html body td {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

html body th {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

html body tr {
  background-color: rgb(17, 19, 30);
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 71, 90);
  border-left-color: rgb(255, 71, 90);
  border-right-color: rgb(255, 71, 90);
  border-top-color: rgb(255, 71, 90);
  color: rgb(255, 71, 90);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 203, 107);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 203, 107);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 203, 107);
  border-left-color: rgb(255, 203, 107);
  border-right-color: rgb(255, 203, 107);
  border-top-color: rgb(255, 203, 107);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  overflow-x: scroll;
}

html body pre:has(> code) {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  overflow-x: scroll;
}`,
    images: `html body audio {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body figcaption {
  color: rgb(182, 183, 190);
}

html body figure {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body img {
  border-bottom-color: rgb(255, 120, 141);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 120, 141);
  border-radius: 4px;
  border-right-color: rgb(255, 120, 141);
  border-top-color: rgb(255, 120, 141);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body video {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
}

html body .footnotes {
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

html body .transclude {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(255, 71, 90);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body .transclude-inner {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(105, 112, 134);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: rgb(105, 112, 134);
  border-right-color: rgb(105, 112, 134);
  border-top-color: rgb(105, 112, 134);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(105, 112, 134);
  text-decoration: line-through rgb(144, 147, 162);
  text-decoration-color: rgb(144, 147, 162);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(182, 183, 190);
  text-decoration-color: rgb(182, 183, 190);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html body .callout .callout-title {
  gap: 8px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

html body .callout[data-callout="danger"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 255, 71, 90;
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.25);
  border-left-color: rgba(255, 71, 90, 0.25);
  border-right-color: rgba(255, 71, 90, 0.25);
  border-top-color: rgba(255, 71, 90, 0.25);
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-left-color: rgba(163, 190, 140, 0.25);
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgba(163, 190, 140, 0.25);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(182, 183, 190);
}

html body .search > .search-container > .search-space {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

html body .search > .search-container > .search-space > * {
  color: rgb(182, 183, 190);
  outline: rgb(182, 183, 190) none 0px;
  text-decoration-color: rgb(182, 183, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(182, 183, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(182, 183, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(17, 19, 30);
  color: rgb(182, 183, 190);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(9, 11, 16);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(17, 19, 30);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(17, 19, 30);
  color: rgb(182, 183, 190);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.15);
  border-left-color: rgba(255, 71, 90, 0.15);
  border-right-color: rgba(255, 71, 90, 0.15);
  border-top-color: rgba(255, 71, 90, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(255, 120, 141);
}

html body h1 {
  color: rgb(255, 120, 141);
}

html body h2 {
  color: rgb(255, 120, 141);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 120, 141);
}

html body h3 {
  color: rgb(255, 120, 141);
}

html body h4 {
  color: rgb(255, 120, 141);
}

html body h5 {
  color: rgb(255, 120, 141);
}

html body h6 {
  color: rgb(255, 120, 141);
}

html body hr {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 16px;
  padding-top: 16px;
}

html body ::-webkit-scrollbar {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

html body ::-webkit-scrollbar-track {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(144, 147, 162);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(144, 147, 162);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(182, 183, 190);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}`,
    footer: `html body footer {
  background-color: rgb(9, 11, 16);
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(144, 147, 162);
}

html body footer ul li a {
  color: rgb(144, 147, 162);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(182, 183, 190);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(144, 147, 162);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(144, 147, 162);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body li.section-li > .section .meta {
  color: rgb(144, 147, 162);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(144, 147, 162);
}

html body ul.section-ul {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

html body .breadcrumb-element p {
  color: rgb(105, 112, 134);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

html body .metadata {
  border-bottom-color: rgb(30, 37, 55);
  border-left-color: rgb(30, 37, 55);
  border-right-color: rgb(30, 37, 55);
  border-top-color: rgb(30, 37, 55);
  color: rgb(144, 147, 162);
  margin-bottom: 0px;
}

html body .metadata-properties {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

html body .navigation-progress {
  background-color: rgb(9, 11, 16);
}

html body .page-header h2.page-title {
  color: rgb(182, 183, 190);
}

html body abbr {
  color: rgb(182, 183, 190);
}

html body details {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body input[type=text] {
  border-bottom-color: rgb(144, 147, 162);
  border-left-color: rgb(144, 147, 162);
  border-right-color: rgb(144, 147, 162);
  border-top-color: rgb(144, 147, 162);
  color: rgb(144, 147, 162);
}

html body kbd {
  background-color: rgb(11, 13, 19);
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
  color: rgb(182, 183, 190);
}

html body progress {
  border-bottom-color: rgb(182, 183, 190);
  border-left-color: rgb(182, 183, 190);
  border-right-color: rgb(182, 183, 190);
  border-top-color: rgb(182, 183, 190);
}

html body sub {
  color: rgb(182, 183, 190);
}

html body summary {
  color: rgb(182, 183, 190);
}

html body sup {
  color: rgb(182, 183, 190);
}

html body ul.tags > li {
  background-color: rgba(255, 71, 90, 0.1);
  border-bottom-color: rgba(255, 71, 90, 0.15);
  border-left-color: rgba(255, 71, 90, 0.15);
  border-right-color: rgba(255, 71, 90, 0.15);
  border-top-color: rgba(255, 71, 90, 0.15);
  color: rgb(255, 120, 141);
}`,
  },
  light: {},
};
