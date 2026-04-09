import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "neovim", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 132 !important;
  --accent-l: 83% !important;
  --accent-s: 79% !important;
  --background-modifier-active-hover: hsla(132, 79%, 83%, 0.1) !important;
  --background-modifier-border: #2c2e33 !important;
  --background-modifier-border-focus: #4f5258 !important;
  --background-modifier-border-hover: #2c2e33 !important;
  --background-modifier-error: #ffc0b9 !important;
  --background-modifier-error-hover: #ffc0b9 !important;
  --background-modifier-error-rgb: 255, 192, 185 !important;
  --background-modifier-form-field: #2c2e33 !important;
  --background-modifier-form-field-hover: #2c2e33 !important;
  --background-modifier-success: #b3f6c0 !important;
  --background-modifier-success-rgb: 179, 246, 192 !important;
  --background-primary: #14161b !important;
  --background-primary-alt: #2c2e33 !important;
  --background-secondary: #14161b !important;
  --background-secondary-alt: #2c2e33 !important;
  --bases-cards-background: #14161b !important;
  --bases-cards-cover-background: #2c2e33 !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px #2c2e33 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #2c2e33 !important;
  --bases-embed-border-color: #2c2e33 !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: #e0e2ea !important;
  --bases-table-border-color: #2c2e33 !important;
  --bases-table-cell-background-active: #14161b !important;
  --bases-table-cell-background-disabled: #2c2e33 !important;
  --bases-table-cell-background-selected: hsla(132, 79%, 83%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4f5258 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(132, 79%, 83%) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: #2c2e33 !important;
  --bases-table-header-background: #14161b !important;
  --bases-table-header-color: #e0e2ea !important;
  --bases-table-summary-background: #14161b !important;
  --blockquote-border-color: hsl(132, 79%, 83%) !important;
  --blur-background: color-mix(in srgb, #07080d 65%, transparent) linear-gradient(#07080d, color-mix(in srgb, #07080d 65%, transparent)) !important;
  --button-radius: 3px !important;
  --callout-bug: 255, 192, 185;
  --callout-default: 166, 219, 255;
  --callout-error: 255, 192, 185;
  --callout-example: 255, 202, 255;
  --callout-fail: 255, 192, 185;
  --callout-important: 140, 248, 247;
  --callout-info: 166, 219, 255;
  --callout-radius: 3px;
  --callout-success: 179, 246, 192;
  --callout-summary: 140, 248, 247;
  --callout-tip: 140, 248, 247;
  --callout-todo: 166, 219, 255;
  --canvas-background: #14161b !important;
  --canvas-card-label-color: #eef1f8 !important;
  --canvas-color-1: 255, 192, 185 !important;
  --canvas-color-3: 254, 224, 148 !important;
  --canvas-color-4: 179, 246, 192 !important;
  --canvas-color-5: 140, 248, 247 !important;
  --canvas-color-6: 255, 202, 255 !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: #2c2e33 !important;
  --caret-color: #c4c6cd !important;
  --checkbox-border-color: #eef1f8 !important;
  --checkbox-border-color-hover: #e0e2ea !important;
  --checkbox-color: hsl(132, 79%, 83%) !important;
  --checkbox-color-hover: hsl(131, 81.37%, 87.15%) !important;
  --checkbox-marker-color: #14161b !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #e0e2ea !important;
  --clickable-icon-radius: 3px !important;
  --code-background: #2c2e33 !important;
  --code-border-color: #2c2e33 !important;
  --code-comment: #eef1f8 !important;
  --code-function: #fce094 !important;
  --code-normal: #c4c6cd !important;
  --code-operator: #ffc0b9 !important;
  --code-property: #8cf8f7 !important;
  --code-punctuation: #e0e2ea !important;
  --code-radius: 3px !important;
  --code-string: #b3f6c0 !important;
  --code-tag: #ffc0b9 !important;
  --code-value: #ffcaff !important;
  --collapse-icon-color: #eef1f8 !important;
  --collapse-icon-color-collapsed: hsl(132, 79%, 83%) !important;
  --color-accent: hsl(132, 79%, 83%) !important;
  --color-accent-1: hsl(131, 81.37%, 87.15%) !important;
  --color-accent-2: hsl(129, 82.95%, 95.45%) !important;
  --color-accent-hsl: 132, 79%, 83% !important;
  --color-base-10: #07080d !important;
  --color-base-20: #14161b !important;
  --color-base-30: #2c2e33 !important;
  --color-base-40: #4f5258 !important;
  --color-base-50: #9b9ea4 !important;
  --color-base-60: #c4c6cd !important;
  --color-base-70: #e0e2ea !important;
  --color-base-80: #eef1f8 !important;
  --color-blue: #a6dbff !important;
  --color-blue-rgb: 166, 219, 255 !important;
  --color-cyan: #8cf8f7 !important;
  --color-cyan-rgb: 140, 248, 247 !important;
  --color-green: #b3f6c0 !important;
  --color-green-rgb: 179, 246, 192 !important;
  --color-purple: #ffcaff !important;
  --color-purple-rgb: 255, 202, 255 !important;
  --color-red: #ffc0b9 !important;
  --color-red-rgb: 255, 192, 185 !important;
  --color-yellow: #fce094 !important;
  --color-yellow-rgb: 254, 224, 148 !important;
  --dark: #c4c6cd !important;
  --darkgray: #c4c6cd !important;
  --divider-color: #2c2e33 !important;
  --divider-color-hover: hsl(132, 79%, 83%) !important;
  --dropdown-background: #07080d !important;
  --dropdown-background-hover: #14161b !important;
  --embed-block-shadow-hover: 0 0 0 1px #2c2e33, inset 0 0 0 1px #2c2e33 !important;
  --embed-border-start: 2px solid hsl(132, 79%, 83%) !important;
  --file-header-background: #14161b !important;
  --file-header-background-focused: #14161b !important;
  --flair-background: #07080d !important;
  --flair-color: #c4c6cd !important;
  --footnote-divider-color: #2c2e33 !important;
  --footnote-id-color: #e0e2ea !important;
  --footnote-id-color-no-occurrences: #eef1f8 !important;
  --footnote-radius: 3px !important;
  --graph-node: #e0e2ea !important;
  --graph-node-attachment: #fce094 !important;
  --graph-node-focused: hsl(132, 79%, 83%) !important;
  --graph-node-tag: #b3f6c0 !important;
  --graph-node-unresolved: #eef1f8 !important;
  --graph-text: #c4c6cd !important;
  --gray: #e0e2ea !important;
  --heading-formatting: #eef1f8 !important;
  --highlight: hsla(132, 79%, 83%, 0.1) !important;
  --hr-color: #2c2e33 !important;
  --icon-color: #e0e2ea !important;
  --icon-color-active: hsl(132, 79%, 83%) !important;
  --icon-color-focused: #c4c6cd !important;
  --icon-color-hover: #e0e2ea !important;
  --input-date-separator: #eef1f8 !important;
  --input-placeholder-color: #eef1f8 !important;
  --input-radius: 3px !important;
  --interactive-accent: hsl(132, 79%, 83%) !important;
  --interactive-accent-hover: hsl(131, 81.37%, 87.15%) !important;
  --interactive-accent-hsl: 132, 79%, 83% !important;
  --interactive-hover: #14161b !important;
  --interactive-normal: #07080d !important;
  --light: #14161b !important;
  --lightgray: #14161b !important;
  --link-color: hsl(132, 79%, 83%) !important;
  --link-color-hover: hsl(129, 82.95%, 95.45%) !important;
  --link-external-color: hsl(132, 79%, 83%) !important;
  --link-external-color-hover: hsl(129, 82.95%, 95.45%) !important;
  --link-unresolved-color: hsl(132, 79%, 83%) !important;
  --link-unresolved-decoration-color: hsla(132, 79%, 83%, 0.3) !important;
  --list-marker-color: #eef1f8 !important;
  --list-marker-color-collapsed: hsl(132, 79%, 83%) !important;
  --list-marker-color-hover: #e0e2ea !important;
  --menu-background: #14161b !important;
  --menu-border-color: #2c2e33 !important;
  --menu-radius: 6px !important;
  --metadata-border-color: #2c2e33 !important;
  --metadata-divider-color: #2c2e33 !important;
  --metadata-input-text-color: #c4c6cd !important;
  --metadata-label-text-color: #e0e2ea !important;
  --metadata-label-text-color-hover: #e0e2ea !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4f5258 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #2c2e33 !important;
  --modal-background: #14161b !important;
  --modal-border-color: #2c2e33 !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #eef1f8 !important;
  --nav-collapse-icon-color-collapsed: #eef1f8 !important;
  --nav-heading-color: #c4c6cd !important;
  --nav-heading-color-collapsed: #eef1f8 !important;
  --nav-heading-color-collapsed-hover: #e0e2ea !important;
  --nav-heading-color-hover: #c4c6cd !important;
  --nav-item-background-selected: hsla(132, 79%, 83%, 0.15) !important;
  --nav-item-color: #e0e2ea !important;
  --nav-item-color-active: #c4c6cd !important;
  --nav-item-color-highlighted: hsl(132, 79%, 83%) !important;
  --nav-item-color-hover: #c4c6cd !important;
  --nav-item-color-selected: #c4c6cd !important;
  --nav-item-radius: 3px !important;
  --nav-tag-color: #eef1f8 !important;
  --nav-tag-color-active: #e0e2ea !important;
  --nav-tag-color-hover: #e0e2ea !important;
  --nav-tag-radius: 3px !important;
  --pdf-background: #14161b !important;
  --pdf-page-background: #14161b !important;
  --pdf-shadow: 0 0 0 1px #2c2e33 !important;
  --pdf-sidebar-background: #14161b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #2c2e33 !important;
  --pill-border-color: #2c2e33 !important;
  --pill-border-color-hover: #2c2e33 !important;
  --pill-color: #e0e2ea !important;
  --pill-color-hover: #c4c6cd !important;
  --pill-color-remove: #eef1f8 !important;
  --pill-color-remove-hover: hsl(132, 79%, 83%) !important;
  --prompt-background: #14161b !important;
  --prompt-border-color: #2c2e33 !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --radius-s: 3px !important;
  --radius-xl: 10px !important;
  --raised-background: color-mix(in srgb, #07080d 65%, transparent) linear-gradient(#07080d, color-mix(in srgb, #07080d 65%, transparent)) !important;
  --ribbon-background: #14161b !important;
  --ribbon-background-collapsed: #14161b !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #e0e2ea !important;
  --search-icon-color: #e0e2ea !important;
  --search-result-background: #14161b !important;
  --secondary: hsl(132, 79%, 83%) !important;
  --setting-group-heading-color: #c4c6cd !important;
  --setting-items-background: #2c2e33 !important;
  --setting-items-border-color: #2c2e33 !important;
  --setting-items-radius: 8px !important;
  --slider-thumb-border-color: #2c2e33 !important;
  --slider-thumb-radius: 3px !important;
  --slider-track-background: #2c2e33 !important;
  --status-bar-background: #14161b !important;
  --status-bar-border-color: #2c2e33 !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: #e0e2ea !important;
  --suggestion-background: #14161b !important;
  --sync-avatar-color-1: #ffc0b9 !important;
  --sync-avatar-color-3: #fce094 !important;
  --sync-avatar-color-4: #b3f6c0 !important;
  --sync-avatar-color-5: #8cf8f7 !important;
  --sync-avatar-color-6: #a6dbff !important;
  --sync-avatar-color-7: #ffcaff !important;
  --tab-background-active: #14161b !important;
  --tab-container-background: #14161b !important;
  --tab-divider-color: #2c2e33 !important;
  --tab-outline-color: #2c2e33 !important;
  --tab-radius: 6px !important;
  --tab-radius-active: 6px !important;
  --tab-switcher-background: #14161b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #14161b, transparent) !important;
  --tab-switcher-preview-radius: 10px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(132, 79%, 83%) !important;
  --tab-text-color: #eef1f8 !important;
  --tab-text-color-active: #e0e2ea !important;
  --tab-text-color-focused: #e0e2ea !important;
  --tab-text-color-focused-active: #e0e2ea !important;
  --tab-text-color-focused-active-current: #c4c6cd !important;
  --tab-text-color-focused-highlighted: hsl(132, 79%, 83%) !important;
  --table-add-button-border-color: #2c2e33 !important;
  --table-border-color: #2c2e33 !important;
  --table-drag-handle-background-active: hsl(132, 79%, 83%) !important;
  --table-drag-handle-color: #eef1f8 !important;
  --table-drag-handle-color-active: #14161b !important;
  --table-header-border-color: #2c2e33 !important;
  --table-header-color: #c4c6cd !important;
  --table-selection: hsla(132, 79%, 83%, 0.1) !important;
  --table-selection-border-color: hsl(132, 79%, 83%) !important;
  --tag-background: hsla(132, 79%, 83%, 0.1) !important;
  --tag-background-hover: hsla(132, 79%, 83%, 0.2) !important;
  --tag-border-color: hsla(132, 79%, 83%, 0.15) !important;
  --tag-border-color-hover: hsla(132, 79%, 83%, 0.15) !important;
  --tag-color: hsl(132, 79%, 83%) !important;
  --tag-color-hover: hsl(132, 79%, 83%) !important;
  --tertiary: hsl(129, 82.95%, 95.45%) !important;
  --text-accent: hsl(132, 79%, 83%) !important;
  --text-accent-hover: hsl(129, 82.95%, 95.45%) !important;
  --text-error: #ffc0b9 !important;
  --text-faint: #eef1f8 !important;
  --text-muted: #e0e2ea !important;
  --text-normal: #c4c6cd !important;
  --text-on-accent: #14161b !important;
  --text-selection: hsla(132, 79%, 83%, 0.33) !important;
  --text-success: #b3f6c0 !important;
  --textHighlight: hsla(132, 79%, 83%, 0.1) !important;
  --titlebar-background: #14161b !important;
  --titlebar-background-focused: #2c2e33 !important;
  --titlebar-border-color: #2c2e33 !important;
  --titlebar-text-color: #e0e2ea !important;
  --titlebar-text-color-focused: #c4c6cd !important;
  --toggle-radius: 3px !important;
  --toggle-thumb-radius: 3px !important;
  --vault-profile-color: #c4c6cd !important;
  --vault-profile-color-hover: #c4c6cd !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(44, 46, 51);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 22, 27);
  border-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(44, 46, 51);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(177, 246, 191, 0.1);
  color: rgb(177, 246, 191);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 46, 51);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 22, 27);
  border-left-color: rgb(44, 46, 51);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body del {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(238, 241, 248);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(177, 246, 191);
  border-color: rgb(177, 246, 191);
}

html[saved-theme="dark"] body p {
  color: rgb(224, 226, 234);
  outline: rgb(224, 226, 234) none 0px;
  text-decoration-color: rgb(224, 226, 234);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(177, 246, 191);
  outline: rgb(177, 246, 191) none 0px;
  text-decoration-color: rgb(177, 246, 191);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(177, 246, 191);
  outline: rgb(177, 246, 191) none 0px;
  text-decoration-color: rgb(177, 246, 191);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(177, 246, 191);
  outline: rgb(177, 246, 191) none 0px;
  text-decoration: underline rgba(177, 246, 191, 0.3);
  text-decoration-color: rgba(177, 246, 191, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body dt {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(238, 241, 248);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body table {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(196, 198, 205);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(252, 224, 148);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(252, 224, 148);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(252, 224, 148);
  border-left-color: rgb(252, 224, 148);
  border-right-color: rgb(252, 224, 148);
  border-top-color: rgb(252, 224, 148);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(224, 226, 234);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(196, 198, 205);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(177, 246, 191);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(238, 241, 248);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(238, 241, 248);
  border-right-color: rgb(238, 241, 248);
  border-top-color: rgb(238, 241, 248);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(196, 198, 205);
  text-decoration-color: rgb(196, 198, 205);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 140, 248, 247;
  background-color: rgba(140, 248, 247, 0.1);
  border-bottom-color: rgba(140, 248, 247, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(140, 248, 247, 0.25);
  border-right-color: rgba(140, 248, 247, 0.25);
  border-top-color: rgba(140, 248, 247, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 192, 185;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 192, 185;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 255, 202, 255;
  background-color: rgba(255, 202, 255, 0.1);
  border-bottom-color: rgba(255, 202, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 202, 255, 0.25);
  border-right-color: rgba(255, 202, 255, 0.25);
  border-top-color: rgba(255, 202, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 192, 185;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 166, 219, 255;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 166, 219, 255;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 179, 246, 192;
  background-color: rgba(179, 246, 192, 0.1);
  border-bottom-color: rgba(179, 246, 192, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(179, 246, 192, 0.25);
  border-right-color: rgba(179, 246, 192, 0.25);
  border-top-color: rgba(179, 246, 192, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 140, 248, 247;
  background-color: rgba(140, 248, 247, 0.1);
  border-bottom-color: rgba(140, 248, 247, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(140, 248, 247, 0.25);
  border-right-color: rgba(140, 248, 247, 0.25);
  border-top-color: rgba(140, 248, 247, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 166, 219, 255;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
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
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(20, 22, 27);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 22, 27);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(177, 246, 191, 0.1);
  border-bottom-color: rgba(177, 246, 191, 0.15);
  border-left-color: rgba(177, 246, 191, 0.15);
  border-right-color: rgba(177, 246, 191, 0.15);
  border-top-color: rgba(177, 246, 191, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(177, 246, 191);
}

html[saved-theme="dark"] body h1 {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body h2 {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body h3 {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body h4 {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body h5 {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body h6 {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(20, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 22, 27);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(224, 226, 234);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(196, 198, 205);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 226, 234);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 226, 234);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 22, 27);
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 6px;
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(224, 226, 234);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(224, 226, 234);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(224, 226, 234);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 226, 234);
  stroke: rgb(224, 226, 234);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(224, 226, 234);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(238, 241, 248);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(224, 226, 234);
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 22, 27);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body abbr {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(224, 226, 234);
  border-left-color: rgb(224, 226, 234);
  border-right-color: rgb(224, 226, 234);
  border-top-color: rgb(224, 226, 234);
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(44, 46, 51);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body sub {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body summary {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body sup {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(177, 246, 191, 0.1);
  border-bottom-color: rgba(177, 246, 191, 0.15);
  border-left-color: rgba(177, 246, 191, 0.15);
  border-right-color: rgba(177, 246, 191, 0.15);
  border-top-color: rgba(177, 246, 191, 0.15);
  color: rgb(177, 246, 191);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 145 !important;
  --accent-l: 17% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(145, 100%, 17%, 0.1) !important;
  --background-modifier-border: #c4c6cd !important;
  --background-modifier-border-focus: #9b9ea4 !important;
  --background-modifier-border-hover: #c4c6cd !important;
  --background-modifier-error: #590008 !important;
  --background-modifier-error-hover: #590008 !important;
  --background-modifier-error-rgb: 89, 0, 8 !important;
  --background-modifier-form-field: #c4c6cd !important;
  --background-modifier-form-field-hover: #c4c6cd !important;
  --background-modifier-success: #005523 !important;
  --background-modifier-success-rgb: 0, 85, 35 !important;
  --background-primary: #e0e2ea !important;
  --background-primary-alt: #c4c6cd !important;
  --background-secondary: #e0e2ea !important;
  --background-secondary-alt: #c4c6cd !important;
  --bases-cards-background: #e0e2ea !important;
  --bases-cards-cover-background: #c4c6cd !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px #c4c6cd !important;
  --bases-cards-shadow-hover: 0 0 0 1px #c4c6cd !important;
  --bases-embed-border-color: #c4c6cd !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: #14161b !important;
  --bases-table-border-color: #c4c6cd !important;
  --bases-table-cell-background-active: #e0e2ea !important;
  --bases-table-cell-background-disabled: #c4c6cd !important;
  --bases-table-cell-background-selected: hsla(145, 100%, 17%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #9b9ea4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(144, 101%, 19.55%) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-group-background: #c4c6cd !important;
  --bases-table-header-background: #e0e2ea !important;
  --bases-table-header-color: #14161b !important;
  --bases-table-summary-background: #e0e2ea !important;
  --blockquote-border-color: hsl(144, 101%, 19.55%) !important;
  --blur-background: color-mix(in srgb, #e0e2ea 65%, transparent) linear-gradient(#e0e2ea, color-mix(in srgb, #e0e2ea 65%, transparent)) !important;
  --button-radius: 3px !important;
  --callout-bug: 89, 0, 8;
  --callout-default: 0, 76, 115;
  --callout-error: 89, 0, 8;
  --callout-example: 71, 0, 69;
  --callout-fail: 89, 0, 8;
  --callout-important: 0, 115, 115;
  --callout-info: 0, 76, 115;
  --callout-radius: 3px;
  --callout-success: 0, 85, 35;
  --callout-summary: 0, 115, 115;
  --callout-tip: 0, 115, 115;
  --callout-todo: 0, 76, 115;
  --canvas-background: #e0e2ea !important;
  --canvas-card-label-color: #07080d !important;
  --canvas-color-1: 89, 0, 8 !important;
  --canvas-color-3: 107, 83, 0 !important;
  --canvas-color-4: 0, 85, 35 !important;
  --canvas-color-5: 0, 115, 115 !important;
  --canvas-color-6: 71, 0, 69 !important;
  --canvas-controls-radius: 3px !important;
  --canvas-dot-pattern: #c4c6cd !important;
  --caret-color: #2c2e33 !important;
  --checkbox-border-color: #07080d !important;
  --checkbox-border-color-hover: #14161b !important;
  --checkbox-color: hsl(144, 101%, 19.55%) !important;
  --checkbox-color-hover: hsl(142, 102%, 25.5%) !important;
  --checkbox-marker-color: #e0e2ea !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #14161b !important;
  --clickable-icon-radius: 3px !important;
  --code-background: #c4c6cd !important;
  --code-border-color: #c4c6cd !important;
  --code-comment: #07080d !important;
  --code-function: #6b5300 !important;
  --code-normal: #2c2e33 !important;
  --code-operator: #590008 !important;
  --code-property: #007373 !important;
  --code-punctuation: #14161b !important;
  --code-radius: 3px !important;
  --code-string: #005523 !important;
  --code-tag: #590008 !important;
  --code-value: #470045 !important;
  --collapse-icon-color: #07080d !important;
  --collapse-icon-color-collapsed: hsl(145, 100%, 17%) !important;
  --color-accent: hsl(145, 100%, 17%) !important;
  --color-accent-1: hsl(144, 101%, 19.55%) !important;
  --color-accent-2: hsl(142, 102%, 25.5%) !important;
  --color-accent-hsl: 145, 100%, 17% !important;
  --color-base-10: #eef1f8 !important;
  --color-base-20: #e0e2ea !important;
  --color-base-30: #c4c6cd !important;
  --color-base-40: #9b9ea4 !important;
  --color-base-50: #4f5258 !important;
  --color-base-60: #2c2e33 !important;
  --color-base-70: #14161b !important;
  --color-base-80: #07080d !important;
  --color-blue: #004c73 !important;
  --color-blue-rgb: 0, 76, 115 !important;
  --color-cyan: #007373 !important;
  --color-cyan-rgb: 0, 115, 115 !important;
  --color-green: #005523 !important;
  --color-green-rgb: 0, 85, 35 !important;
  --color-purple: #470045 !important;
  --color-purple-rgb: 71, 0, 69 !important;
  --color-red: #590008 !important;
  --color-red-rgb: 89, 0, 8 !important;
  --color-yellow: #6b5300 !important;
  --color-yellow-rgb: 107, 83, 0 !important;
  --dark: #2c2e33 !important;
  --darkgray: #2c2e33 !important;
  --divider-color: #c4c6cd !important;
  --divider-color-hover: hsl(144, 101%, 19.55%) !important;
  --dropdown-background: #eef1f8 !important;
  --dropdown-background-hover: #e0e2ea !important;
  --embed-block-shadow-hover: 0 0 0 1px #c4c6cd, inset 0 0 0 1px #c4c6cd !important;
  --embed-border-start: 2px solid hsl(144, 101%, 19.55%) !important;
  --file-header-background: #e0e2ea !important;
  --file-header-background-focused: #e0e2ea !important;
  --flair-background: #eef1f8 !important;
  --flair-color: #2c2e33 !important;
  --footnote-divider-color: #c4c6cd !important;
  --footnote-id-color: #14161b !important;
  --footnote-id-color-no-occurrences: #07080d !important;
  --footnote-radius: 3px !important;
  --graph-node: #14161b !important;
  --graph-node-attachment: #6b5300 !important;
  --graph-node-focused: hsl(145, 100%, 17%) !important;
  --graph-node-tag: #005523 !important;
  --graph-node-unresolved: #07080d !important;
  --graph-text: #2c2e33 !important;
  --gray: #14161b !important;
  --heading-formatting: #07080d !important;
  --highlight: hsla(145, 100%, 17%, 0.1) !important;
  --hr-color: #c4c6cd !important;
  --icon-color: #14161b !important;
  --icon-color-active: hsl(145, 100%, 17%) !important;
  --icon-color-focused: #2c2e33 !important;
  --icon-color-hover: #14161b !important;
  --input-date-separator: #07080d !important;
  --input-placeholder-color: #07080d !important;
  --input-radius: 3px !important;
  --interactive-accent: hsl(144, 101%, 19.55%) !important;
  --interactive-accent-hover: hsl(142, 102%, 25.5%) !important;
  --interactive-accent-hsl: 145, 100%, 17% !important;
  --interactive-hover: #e0e2ea !important;
  --interactive-normal: #eef1f8 !important;
  --light: #e0e2ea !important;
  --lightgray: #e0e2ea !important;
  --link-color: hsl(145, 100%, 17%) !important;
  --link-color-hover: hsl(142, 102%, 25.5%) !important;
  --link-external-color: hsl(145, 100%, 17%) !important;
  --link-external-color-hover: hsl(142, 102%, 25.5%) !important;
  --link-unresolved-color: hsl(145, 100%, 17%) !important;
  --link-unresolved-decoration-color: hsla(145, 100%, 17%, 0.3) !important;
  --list-marker-color: #07080d !important;
  --list-marker-color-collapsed: hsl(145, 100%, 17%) !important;
  --list-marker-color-hover: #14161b !important;
  --menu-background: #e0e2ea !important;
  --menu-border-color: #c4c6cd !important;
  --menu-radius: 6px !important;
  --metadata-border-color: #c4c6cd !important;
  --metadata-divider-color: #c4c6cd !important;
  --metadata-input-text-color: #2c2e33 !important;
  --metadata-label-text-color: #14161b !important;
  --metadata-label-text-color-hover: #14161b !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #9b9ea4 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c4c6cd !important;
  --modal-background: #e0e2ea !important;
  --modal-border-color: #c4c6cd !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #07080d !important;
  --nav-collapse-icon-color-collapsed: #07080d !important;
  --nav-heading-color: #2c2e33 !important;
  --nav-heading-color-collapsed: #07080d !important;
  --nav-heading-color-collapsed-hover: #14161b !important;
  --nav-heading-color-hover: #2c2e33 !important;
  --nav-item-background-selected: hsla(145, 100%, 17%, 0.15) !important;
  --nav-item-color: #14161b !important;
  --nav-item-color-active: #2c2e33 !important;
  --nav-item-color-highlighted: hsl(145, 100%, 17%) !important;
  --nav-item-color-hover: #2c2e33 !important;
  --nav-item-color-selected: #2c2e33 !important;
  --nav-item-radius: 3px !important;
  --nav-tag-color: #07080d !important;
  --nav-tag-color-active: #14161b !important;
  --nav-tag-color-hover: #14161b !important;
  --nav-tag-radius: 3px !important;
  --pdf-background: #e0e2ea !important;
  --pdf-page-background: #e0e2ea !important;
  --pdf-sidebar-background: #e0e2ea !important;
  --pill-border-color: #c4c6cd !important;
  --pill-border-color-hover: #c4c6cd !important;
  --pill-color: #14161b !important;
  --pill-color-hover: #2c2e33 !important;
  --pill-color-remove: #07080d !important;
  --pill-color-remove-hover: hsl(145, 100%, 17%) !important;
  --prompt-background: #e0e2ea !important;
  --prompt-border-color: #c4c6cd !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --radius-s: 3px !important;
  --radius-xl: 10px !important;
  --raised-background: color-mix(in srgb, #e0e2ea 65%, transparent) linear-gradient(#e0e2ea, color-mix(in srgb, #e0e2ea 65%, transparent)) !important;
  --ribbon-background: #e0e2ea !important;
  --ribbon-background-collapsed: #e0e2ea !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #14161b !important;
  --search-icon-color: #14161b !important;
  --search-result-background: #e0e2ea !important;
  --secondary: hsl(145, 100%, 17%) !important;
  --setting-group-heading-color: #2c2e33 !important;
  --setting-items-background: #c4c6cd !important;
  --setting-items-border-color: #c4c6cd !important;
  --setting-items-radius: 8px !important;
  --slider-thumb-border-color: #c4c6cd !important;
  --slider-thumb-radius: 3px !important;
  --slider-track-background: #c4c6cd !important;
  --status-bar-background: #e0e2ea !important;
  --status-bar-border-color: #c4c6cd !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: #14161b !important;
  --suggestion-background: #e0e2ea !important;
  --sync-avatar-color-1: #590008 !important;
  --sync-avatar-color-3: #6b5300 !important;
  --sync-avatar-color-4: #005523 !important;
  --sync-avatar-color-5: #007373 !important;
  --sync-avatar-color-6: #004c73 !important;
  --sync-avatar-color-7: #470045 !important;
  --tab-background-active: #e0e2ea !important;
  --tab-container-background: #e0e2ea !important;
  --tab-divider-color: #c4c6cd !important;
  --tab-outline-color: #c4c6cd !important;
  --tab-radius: 6px !important;
  --tab-radius-active: 6px !important;
  --tab-switcher-background: #e0e2ea !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e0e2ea, transparent) !important;
  --tab-switcher-preview-radius: 10px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(145, 100%, 17%) !important;
  --tab-text-color: #07080d !important;
  --tab-text-color-active: #14161b !important;
  --tab-text-color-focused: #14161b !important;
  --tab-text-color-focused-active: #14161b !important;
  --tab-text-color-focused-active-current: #2c2e33 !important;
  --tab-text-color-focused-highlighted: hsl(145, 100%, 17%) !important;
  --table-add-button-border-color: #c4c6cd !important;
  --table-border-color: #c4c6cd !important;
  --table-drag-handle-background-active: hsl(144, 101%, 19.55%) !important;
  --table-drag-handle-color: #07080d !important;
  --table-drag-handle-color-active: #e0e2ea !important;
  --table-header-border-color: #c4c6cd !important;
  --table-header-color: #2c2e33 !important;
  --table-selection: hsla(145, 100%, 17%, 0.1) !important;
  --table-selection-border-color: hsl(144, 101%, 19.55%) !important;
  --tag-background: hsla(145, 100%, 17%, 0.1) !important;
  --tag-background-hover: hsla(145, 100%, 17%, 0.2) !important;
  --tag-border-color: hsla(145, 100%, 17%, 0.15) !important;
  --tag-border-color-hover: hsla(145, 100%, 17%, 0.15) !important;
  --tag-color: hsl(145, 100%, 17%) !important;
  --tag-color-hover: hsl(145, 100%, 17%) !important;
  --tertiary: hsl(142, 102%, 25.5%) !important;
  --text-accent: hsl(145, 100%, 17%) !important;
  --text-accent-hover: hsl(142, 102%, 25.5%) !important;
  --text-error: #590008 !important;
  --text-faint: #07080d !important;
  --text-muted: #14161b !important;
  --text-normal: #2c2e33 !important;
  --text-on-accent: #e0e2ea !important;
  --text-selection: hsla(145, 100%, 17%, 0.2) !important;
  --text-success: #005523 !important;
  --textHighlight: hsla(145, 100%, 17%, 0.1) !important;
  --titlebar-background: #e0e2ea !important;
  --titlebar-background-focused: #c4c6cd !important;
  --titlebar-border-color: #c4c6cd !important;
  --titlebar-text-color: #14161b !important;
  --titlebar-text-color-focused: #2c2e33 !important;
  --toggle-radius: 3px !important;
  --toggle-thumb-radius: 3px !important;
  --vault-profile-color: #2c2e33 !important;
  --vault-profile-color-hover: #2c2e33 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(196, 198, 205);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(224, 226, 234);
  border-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(196, 198, 205);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 87, 36, 0.1);
  color: rgb(0, 87, 36);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(196, 198, 205);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(224, 226, 234);
  border-left-color: rgb(196, 198, 205);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body del {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(7, 8, 13);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 100, 40);
  border-color: rgb(0, 100, 40);
}

html[saved-theme="light"] body p {
  color: rgb(20, 22, 27);
  outline: rgb(20, 22, 27) none 0px;
  text-decoration-color: rgb(20, 22, 27);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 87, 36);
  outline: rgb(0, 87, 36) none 0px;
  text-decoration-color: rgb(0, 87, 36);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 87, 36);
  outline: rgb(0, 87, 36) none 0px;
  text-decoration-color: rgb(0, 87, 36);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 87, 36);
  outline: rgb(0, 87, 36) none 0px;
  text-decoration: underline rgba(0, 87, 36, 0.3);
  text-decoration-color: rgba(0, 87, 36, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body dt {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body ol > li {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body ul > li {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(7, 8, 13);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body table {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(44, 46, 51);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(107, 83, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(107, 83, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(107, 83, 0);
  border-left-color: rgb(107, 83, 0);
  border-right-color: rgb(107, 83, 0);
  border-top-color: rgb(107, 83, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body figcaption {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(20, 22, 27);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(44, 46, 51);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(0, 100, 40);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(7, 8, 13);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(7, 8, 13);
  border-right-color: rgb(7, 8, 13);
  border-top-color: rgb(7, 8, 13);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(44, 46, 51);
  text-decoration-color: rgb(44, 46, 51);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 115, 115;
  background-color: rgba(0, 115, 115, 0.1);
  border-bottom-color: rgba(0, 115, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 115, 115, 0.25);
  border-right-color: rgba(0, 115, 115, 0.25);
  border-top-color: rgba(0, 115, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 89, 0, 8;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 89, 0, 8;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 71, 0, 69;
  background-color: rgba(71, 0, 69, 0.1);
  border-bottom-color: rgba(71, 0, 69, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(71, 0, 69, 0.25);
  border-right-color: rgba(71, 0, 69, 0.25);
  border-top-color: rgba(71, 0, 69, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 89, 0, 8;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 76, 115;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 0, 76, 115;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 85, 35;
  background-color: rgba(0, 85, 35, 0.1);
  border-bottom-color: rgba(0, 85, 35, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 85, 35, 0.25);
  border-right-color: rgba(0, 85, 35, 0.25);
  border-top-color: rgba(0, 85, 35, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 115, 115;
  background-color: rgba(0, 115, 115, 0.1);
  border-bottom-color: rgba(0, 115, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 115, 115, 0.25);
  border-right-color: rgba(0, 115, 115, 0.25);
  border-top-color: rgba(0, 115, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 76, 115;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
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
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(224, 226, 234);
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(196, 198, 205);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 226, 234);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 87, 36, 0.1);
  border-bottom-color: rgba(0, 87, 36, 0.15);
  border-left-color: rgba(0, 87, 36, 0.15);
  border-right-color: rgba(0, 87, 36, 0.15);
  border-top-color: rgba(0, 87, 36, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(0, 87, 36);
}

html[saved-theme="light"] body h1 {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body h2 {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body h3 {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body h4 {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body h5 {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body h6 {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(224, 226, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 234);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(20, 22, 27);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(44, 46, 51);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(20, 22, 27);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(20, 22, 27);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(224, 226, 234);
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 6px;
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(20, 22, 27);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(20, 22, 27);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(20, 22, 27);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(20, 22, 27);
  stroke: rgb(20, 22, 27);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(20, 22, 27);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(7, 8, 13);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(20, 22, 27);
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(224, 226, 234);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body abbr {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(20, 22, 27);
  border-left-color: rgb(20, 22, 27);
  border-right-color: rgb(20, 22, 27);
  border-top-color: rgb(20, 22, 27);
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(196, 198, 205);
  border-bottom-color: rgb(44, 46, 51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body sub {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body summary {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body sup {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 87, 36, 0.1);
  border-bottom-color: rgba(0, 87, 36, 0.15);
  border-left-color: rgba(0, 87, 36, 0.15);
  border-right-color: rgba(0, 87, 36, 0.15);
  border-top-color: rgba(0, 87, 36, 0.15);
  color: rgb(0, 87, 36);
}`,
  },
};
