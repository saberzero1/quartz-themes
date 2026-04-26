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
  --shiki-active-tab-border-color: #e0e2ea !important;
  --shiki-code-background: #2c2e33 !important;
  --shiki-code-block-border-radius: 3px !important;
  --shiki-code-comment: #eef1f8 !important;
  --shiki-code-function: #b3f6c0 !important;
  --shiki-code-normal: #e0e2ea !important;
  --shiki-code-property: #8cf8f7 !important;
  --shiki-code-punctuation: #e0e2ea !important;
  --shiki-code-string: #fce094 !important;
  --shiki-code-value: #ffcaff !important;
  --shiki-gutter-border-color: #2c2e33 !important;
  --shiki-gutter-text-color: #eef1f8 !important;
  --shiki-gutter-text-color-highlight: #e0e2ea !important;
  --shiki-highlight-green: rgba(179, 246, 192, 0.5) !important;
  --shiki-highlight-green-background: rgba(179, 246, 192, 0.1) !important;
  --shiki-highlight-neutral: #e0e2ea !important;
  --shiki-highlight-red: rgba(255, 192, 185, 0.5) !important;
  --shiki-highlight-red-background: rgba(255, 192, 185, 0.1) !important;
  --shiki-terminal-dots-color: #eef1f8 !important;
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
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(196, 198, 205);
  outline: rgb(196, 198, 205) none 0px;
  text-decoration-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(177, 246, 191);
  outline: rgb(177, 246, 191) none 0px;
  text-decoration-color: rgb(177, 246, 191);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(177, 246, 191);
  outline: rgb(177, 246, 191) none 0px;
  text-decoration-color: rgb(177, 246, 191);
}

html[saved-theme="dark"] body a.internal-link.broken {
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
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(196, 198, 205);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(155, 158, 164);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 224, 148);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 248, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 192, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 192, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 192, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 192, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 224, 148);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 224, 148);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 202, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 192, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(179, 246, 192);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(179, 246, 192);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(179, 246, 192);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 140, 248, 247;
  background: rgba(140, 248, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(140, 248, 247, 0.1);
  border-bottom-color: rgba(140, 248, 247, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(140, 248, 247, 0.25);
  border-right-color: rgba(140, 248, 247, 0.25);
  border-top-color: rgba(140, 248, 247, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 192, 185;
  background: rgba(255, 192, 185, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 255, 192, 185;
  background: rgba(255, 192, 185, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 255, 202, 255;
  background: rgba(255, 202, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 202, 255, 0.1);
  border-bottom-color: rgba(255, 202, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 202, 255, 0.25);
  border-right-color: rgba(255, 202, 255, 0.25);
  border-top-color: rgba(255, 202, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 192, 185;
  background: rgba(255, 192, 185, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 192, 185, 0.1);
  border-bottom-color: rgba(255, 192, 185, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 192, 185, 0.25);
  border-right-color: rgba(255, 192, 185, 0.25);
  border-top-color: rgba(255, 192, 185, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 166, 219, 255;
  background: rgba(166, 219, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 166, 219, 255;
  background: rgba(166, 219, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 179, 246, 192;
  background: rgba(179, 246, 192, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(179, 246, 192, 0.1);
  border-bottom-color: rgba(179, 246, 192, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(179, 246, 192, 0.25);
  border-right-color: rgba(179, 246, 192, 0.25);
  border-top-color: rgba(179, 246, 192, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 140, 248, 247;
  background: rgba(140, 248, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(140, 248, 247, 0.1);
  border-bottom-color: rgba(140, 248, 247, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(140, 248, 247, 0.25);
  border-right-color: rgba(140, 248, 247, 0.25);
  border-top-color: rgba(140, 248, 247, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 166, 219, 255;
  background: rgba(166, 219, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(166, 219, 255, 0.1);
  border-bottom-color: rgba(166, 219, 255, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(166, 219, 255, 0.25);
  border-right-color: rgba(166, 219, 255, 0.25);
  border-top-color: rgba(166, 219, 255, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 166, 219, 255;
  border-bottom-color: rgb(166, 219, 255);
  border-left-color: rgb(166, 219, 255);
  border-right-color: rgb(166, 219, 255);
  border-top-color: rgb(166, 219, 255);
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(166, 219, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(196, 198, 205);
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

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(177, 246, 191, 0.1);
  border-bottom-color: rgba(177, 246, 191, 0.15);
  border-left-color: rgba(177, 246, 191, 0.15);
  border-right-color: rgba(177, 246, 191, 0.15);
  border-top-color: rgba(177, 246, 191, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(177, 246, 191);
}

html[saved-theme="dark"] body h1 {
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body h1.article-title {
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(224, 226, 234);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html[saved-theme="dark"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(44, 46, 51);
  color: rgb(196, 198, 205);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(20, 22, 27);
  color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(20, 22, 27);
  border-color: rgb(196, 198, 205);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(44, 46, 51);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(196, 198, 205);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(196, 198, 205);
  border-left-color: rgb(196, 198, 205);
  border-right-color: rgb(196, 198, 205);
  border-top-color: rgb(196, 198, 205);
  color: rgb(196, 198, 205);
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
  --shiki-active-tab-border-color: #14161b !important;
  --shiki-code-background: #c4c6cd !important;
  --shiki-code-block-border-radius: 3px !important;
  --shiki-code-comment: #07080d !important;
  --shiki-code-function: #005523 !important;
  --shiki-code-normal: #14161b !important;
  --shiki-code-property: #007373 !important;
  --shiki-code-punctuation: #14161b !important;
  --shiki-code-string: #6b5300 !important;
  --shiki-code-value: #470045 !important;
  --shiki-gutter-border-color: #c4c6cd !important;
  --shiki-gutter-text-color: #07080d !important;
  --shiki-gutter-text-color-highlight: #14161b !important;
  --shiki-highlight-green: rgba(0, 85, 35, 0.5) !important;
  --shiki-highlight-green-background: rgba(0, 85, 35, 0.1) !important;
  --shiki-highlight-neutral: #14161b !important;
  --shiki-highlight-red: rgba(89, 0, 8, 0.5) !important;
  --shiki-highlight-red-background: rgba(89, 0, 8, 0.1) !important;
  --shiki-terminal-dots-color: #07080d !important;
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
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(44, 46, 51);
  outline: rgb(44, 46, 51) none 0px;
  text-decoration-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(0, 87, 36);
  outline: rgb(0, 87, 36) none 0px;
  text-decoration-color: rgb(0, 87, 36);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 87, 36);
  outline: rgb(0, 87, 36) none 0px;
  text-decoration-color: rgb(0, 87, 36);
}

html[saved-theme="light"] body a.internal-link.broken {
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
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(44, 46, 51);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 226, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 226, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(79, 82, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(107, 83, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 115, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 76, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 0, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 0, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 0, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 0, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 76, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(107, 83, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(107, 83, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 0, 69);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 0, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 85, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 85, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 85, 35);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 115, 115;
  background: rgba(0, 115, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 115, 115, 0.1);
  border-bottom-color: rgba(0, 115, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 115, 115, 0.25);
  border-right-color: rgba(0, 115, 115, 0.25);
  border-top-color: rgba(0, 115, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 89, 0, 8;
  background: rgba(89, 0, 8, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 89, 0, 8;
  background: rgba(89, 0, 8, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 71, 0, 69;
  background: rgba(71, 0, 69, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(71, 0, 69, 0.1);
  border-bottom-color: rgba(71, 0, 69, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(71, 0, 69, 0.25);
  border-right-color: rgba(71, 0, 69, 0.25);
  border-top-color: rgba(71, 0, 69, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 89, 0, 8;
  background: rgba(89, 0, 8, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(89, 0, 8, 0.1);
  border-bottom-color: rgba(89, 0, 8, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(89, 0, 8, 0.25);
  border-right-color: rgba(89, 0, 8, 0.25);
  border-top-color: rgba(89, 0, 8, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 76, 115;
  background: rgba(0, 76, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 0, 76, 115;
  background: rgba(0, 76, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 0, 85, 35;
  background: rgba(0, 85, 35, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 85, 35, 0.1);
  border-bottom-color: rgba(0, 85, 35, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 85, 35, 0.25);
  border-right-color: rgba(0, 85, 35, 0.25);
  border-top-color: rgba(0, 85, 35, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 115, 115;
  background: rgba(0, 115, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 115, 115, 0.1);
  border-bottom-color: rgba(0, 115, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 115, 115, 0.25);
  border-right-color: rgba(0, 115, 115, 0.25);
  border-top-color: rgba(0, 115, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 76, 115;
  background: rgba(0, 76, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 76, 115, 0.1);
  border-bottom-color: rgba(0, 76, 115, 0.25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 76, 115, 0.25);
  border-right-color: rgba(0, 76, 115, 0.25);
  border-top-color: rgba(0, 76, 115, 0.25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 76, 115;
  border-bottom-color: rgb(0, 76, 115);
  border-left-color: rgb(0, 76, 115);
  border-right-color: rgb(0, 76, 115);
  border-top-color: rgb(0, 76, 115);
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(0, 76, 115);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(44, 46, 51);
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

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 87, 36, 0.1);
  border-bottom-color: rgba(0, 87, 36, 0.15);
  border-left-color: rgba(0, 87, 36, 0.15);
  border-right-color: rgba(0, 87, 36, 0.15);
  border-top-color: rgba(0, 87, 36, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(0, 87, 36);
}

html[saved-theme="light"] body h1 {
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body h1.article-title {
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(20, 22, 27);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html[saved-theme="light"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(196, 198, 205);
  color: rgb(44, 46, 51);
}`,
    properties: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(224, 226, 234);
  color: rgb(44, 46, 51);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(224, 226, 234);
  border-color: rgb(44, 46, 51);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(196, 198, 205);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(44, 46, 51);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(44, 46, 51);
  border-left-color: rgb(44, 46, 51);
  border-right-color: rgb(44, 46, 51);
  border-top-color: rgb(44, 46, 51);
  color: rgb(44, 46, 51);
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
