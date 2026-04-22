import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "jotter", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: 92, 124, 255 !important;
  --accent-h: 228 !important;
  --accent-l: 68% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(228, 100%, 68%, 0.1) !important;
  --background-modifier-border: hsl(345, 3%, 28%) !important;
  --background-modifier-border-focus: hsl(345, 3%, 28%) !important;
  --background-modifier-border-hover: hsl(345, 3%, 30%) !important;
  --background-modifier-error: #bf616a !important;
  --background-modifier-error-hover: #bf616a !important;
  --background-modifier-error-rgb: 191, 97, 106 !important;
  --background-modifier-form-field: #322f30 !important;
  --background-modifier-form-field-hover: #322f30 !important;
  --background-modifier-hover: #413e3e !important;
  --background-modifier-success: #8fbcbb !important;
  --background-modifier-success-rgb: 143, 188, 187 !important;
  --background-primary: #322f30 !important;
  --background-primary-alt: #413e3e !important;
  --background-secondary: #322f30 !important;
  --background-secondary-alt: #322f30 !important;
  --bases-cards-background: #322f30 !important;
  --bases-cards-cover-background: #413e3e !important;
  --bases-cards-shadow: 0 0 0 1px hsl(345, 3%, 28%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(345, 3%, 30%) !important;
  --bases-embed-border-color: hsl(345, 3%, 28%) !important;
  --bases-group-heading-property-color: #b7b2b2 !important;
  --bases-table-border-color: hsl(345, 3%, 28%) !important;
  --bases-table-cell-background-active: #322f30 !important;
  --bases-table-cell-background-disabled: #413e3e !important;
  --bases-table-cell-background-selected: hsla(228, 100%, 68%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(345, 3%, 28%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(92, 124, 255) !important;
  --bases-table-group-background: #413e3e !important;
  --bases-table-header-background: #322f30 !important;
  --bases-table-header-background-hover: #413e3e !important;
  --bases-table-header-color: #b7b2b2 !important;
  --bases-table-summary-background: #322f30 !important;
  --bases-table-summary-background-hover: #413e3e !important;
  --blockquote-border-color: rgb(92, 124, 255) !important;
  --blur-background: color-mix(in srgb, #433F40 65%, transparent) linear-gradient(#433F40, color-mix(in srgb, #433F40 65%, transparent)) !important;
  --bold-underline-color: rgb(92, 124, 255) !important;
  --bubblegum: 255, 179, 189 !important;
  --callout-bug: 191, 97, 106;
  --callout-default: 129, 161, 193;
  --callout-error: 191, 97, 106;
  --callout-example: 139, 129, 193;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 129, 161, 193;
  --callout-question: 208, 135, 112;
  --callout-success: 143, 188, 187;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-todo: 129, 161, 193;
  --callout-warning: 208, 135, 112;
  --canvas-background: #322f30 !important;
  --canvas-card-label-color: #807b7b !important;
  --canvas-color-1: 191, 97, 106 !important;
  --canvas-color-2: 208, 135, 112 !important;
  --canvas-color-3: 235, 200, 139 !important;
  --canvas-color-4: 143, 188, 187 !important;
  --canvas-color-5: 136, 192, 208 !important;
  --canvas-color-6: 139, 129, 193 !important;
  --caret-color: #e1e1e1 !important;
  --checkbox-border-color: #807b7b !important;
  --checkbox-border-color-hover: #b7b2b2 !important;
  --checkbox-color: rgb(92, 124, 255) !important;
  --checkbox-color-hover: rgb(92, 124, 255, 0.8) !important;
  --checkbox-marker-color: #322f30 !important;
  --checklist-done-color: #b7b2b2 !important;
  --code-background: #413e3e !important;
  --code-border-color: hsl(345, 3%, 28%) !important;
  --code-bracket-background: #413e3e !important;
  --code-comment: #807b7b !important;
  --code-function: #ebc88b !important;
  --code-important: #d08770 !important;
  --code-keyword: #bd81c1 !important;
  --code-normal: #e1e1e1 !important;
  --code-operator: #bf616a !important;
  --code-property: #88c0d0 !important;
  --code-punctuation: #b7b2b2 !important;
  --code-string: #8fbcbb !important;
  --code-tag: #bf616a !important;
  --code-value: #8b81c1 !important;
  --collapse-icon-color: #807b7b !important;
  --collapse-icon-color-collapsed: rgb(92, 124, 255) !important;
  --color-accent: rgb(92, 124, 255) !important;
  --color-accent-1: hsl(225, 102%, 78.2%) !important;
  --color-accent-2: hsl(223, 105%, 87.72%) !important;
  --color-accent-hsl: 228, 100%, 68% !important;
  --color-blue: #81a1c1 !important;
  --color-blue-rgb: 129, 161, 193 !important;
  --color-cyan: #88c0d0 !important;
  --color-cyan-rgb: 136, 192, 208 !important;
  --color-green: #8fbcbb !important;
  --color-green-rgb: 143, 188, 187 !important;
  --color-orange: #d08770 !important;
  --color-orange-rgb: 208, 135, 112 !important;
  --color-pink: #bd81c1 !important;
  --color-pink-rgb: 189, 129, 193 !important;
  --color-purple: #8b81c1 !important;
  --color-purple-rgb: 139, 129, 193 !important;
  --color-red: #bf616a !important;
  --color-red-rgb: 191, 97, 106 !important;
  --color-yellow: #ebc88b !important;
  --color-yellow-rgb: 235, 200, 139 !important;
  --dark: #e1e1e1 !important;
  --darkgray: #e1e1e1 !important;
  --denim: 76, 80, 120 !important;
  --divider-color: hsl(345, 3%, 28%) !important;
  --divider-color-hover: rgb(92, 124, 255) !important;
  --dropdown-background: #433F40 !important;
  --dropdown-background-hover: #4a4546 !important;
  --em-color: #e1e1e1 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(345, 3%, 28%), inset 0 0 0 1px hsl(345, 3%, 28%) !important;
  --embed-border-start: 2px solid rgb(92, 124, 255) !important;
  --file-header-background: #322f30 !important;
  --file-header-background-focused: #322f30 !important;
  --flair-background: #433F40 !important;
  --flair-color: #e1e1e1 !important;
  --footnote-divider-color: hsl(345, 3%, 28%) !important;
  --footnote-id-color: #b7b2b2 !important;
  --footnote-id-color-no-occurrences: #807b7b !important;
  --footnote-input-background-active: #413e3e !important;
  --forest: 77, 116, 53 !important;
  --graph-node: #b7b2b2 !important;
  --graph-node-attachment: #ebc88b !important;
  --graph-node-focused: rgb(92, 124, 255) !important;
  --graph-node-tag: #8fbcbb !important;
  --graph-node-unresolved: #807b7b !important;
  --graph-text: #e1e1e1 !important;
  --gray: #b7b2b2 !important;
  --h1-color: #e1e1e1 !important;
  --h1-size: 1.3em !important;
  --h2-color: rgb(92, 124, 255) !important;
  --h2-size: 1.2em !important;
  --h3-color: #e1e1e1 !important;
  --h3-size: 1.1em !important;
  --h4-color: #b7b2b2 !important;
  --h4-size: 1em !important;
  --h5-color: #b7b2b2 !important;
  --h5-size: .85em !important;
  --h6-color: #807b7b !important;
  --h6-size: .75em !important;
  --heading-formatting: #807b7b !important;
  --highlight: #413e3e !important;
  --hr-color: hsl(345, 3%, 28%) !important;
  --icon-color: #807b7b !important;
  --icon-color-active: rgb(92, 124, 255) !important;
  --icon-color-focused: #b7b2b2 !important;
  --icon-color-hover: #b7b2b2 !important;
  --indentation-guide-color: hsl(345, 3%, 28%) !important;
  --indentation-guide-color-active: hsl(345, 3%, 45%) !important;
  --indentation-guide-width: 1.5px !important;
  --inline-title-color: #e1e1e1 !important;
  --inline-title-size: 1.3em !important;
  --input-date-separator: #807b7b !important;
  --input-placeholder-color: #807b7b !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: rgb(92, 124, 255) !important;
  --interactive-accent-hover: rgb(92, 124, 255, 0.8) !important;
  --interactive-accent-hsl: 228, 100%, 68% !important;
  --interactive-hover: #4a4546 !important;
  --interactive-normal: #433F40 !important;
  --italic-underline-color: #fcd86c !important;
  --jade: 0, 168, 107 !important;
  --light: #322f30 !important;
  --lightgray: #322f30 !important;
  --link-color: rgb(92, 124, 255) !important;
  --link-color-hover: rgb(92, 124, 255, 0.8) !important;
  --link-external-color: rgb(92, 124, 255) !important;
  --link-external-color-hover: rgb(92, 124, 255, 0.8) !important;
  --link-unresolved-color: rgb(92, 124, 255) !important;
  --link-unresolved-decoration-color: hsla(228, 100%, 68%, 0.3) !important;
  --list-marker-color: #807b7b !important;
  --list-marker-color-collapsed: rgb(92, 124, 255) !important;
  --list-marker-color-hover: #b7b2b2 !important;
  --mauve: 122, 73, 136 !important;
  --menu-background: #322f30 !important;
  --menu-border-color: hsl(345, 3%, 30%) !important;
  --menu-shadow: none !important;
  --metadata-border-color: hsl(345, 3%, 28%) !important;
  --metadata-divider-color: hsl(345, 3%, 28%) !important;
  --metadata-input-background-active: #413e3e !important;
  --metadata-input-text-color: #e1e1e1 !important;
  --metadata-label-background-active: #413e3e !important;
  --metadata-label-text-color: #b7b2b2 !important;
  --metadata-label-text-color-hover: #b7b2b2 !important;
  --metadata-property-background-active: #413e3e !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(345, 3%, 28%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(345, 3%, 30%) !important;
  --modal-background: #322f30 !important;
  --modal-border-color: hsl(345, 3%, 28%) !important;
  --modal-border-width: 2px !important;
  --mustard: 255, 208, 113 !important;
  --nav-collapse-icon-color: #807b7b !important;
  --nav-collapse-icon-color-collapsed: #807b7b !important;
  --nav-heading-color: #e1e1e1 !important;
  --nav-heading-color-collapsed: #807b7b !important;
  --nav-heading-color-collapsed-hover: #b7b2b2 !important;
  --nav-heading-color-hover: #e1e1e1 !important;
  --nav-indentation-guide-color: hsl(345, 3%, 28%) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-active: #413e3e !important;
  --nav-item-background-hover: #413e3e !important;
  --nav-item-background-selected: hsla(228, 100%, 68%, 0.15) !important;
  --nav-item-color: #b7b2b2 !important;
  --nav-item-color-active: #e1e1e1 !important;
  --nav-item-color-highlighted: rgb(92, 124, 255) !important;
  --nav-item-color-hover: #e1e1e1 !important;
  --nav-item-color-selected: #e1e1e1 !important;
  --nav-tag-color: #807b7b !important;
  --nav-tag-color-active: #b7b2b2 !important;
  --nav-tag-color-hover: #b7b2b2 !important;
  --pdf-background: #322f30 !important;
  --pdf-page-background: #322f30 !important;
  --pdf-shadow: 0 0 0 1px hsl(345, 3%, 28%) !important;
  --pdf-sidebar-background: #322f30 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(345, 3%, 28%) !important;
  --pill-border-color: hsl(345, 3%, 28%) !important;
  --pill-border-color-hover: hsl(345, 3%, 30%) !important;
  --pill-color: #b7b2b2 !important;
  --pill-color-hover: #e1e1e1 !important;
  --pill-color-remove: #807b7b !important;
  --pill-color-remove-hover: rgb(92, 124, 255) !important;
  --prompt-background: #322f30 !important;
  --pumpkin: 246, 141, 69 !important;
  --raised-background: color-mix(in srgb, #433F40 65%, transparent) linear-gradient(#433F40, color-mix(in srgb, #433F40 65%, transparent)) !important;
  --ribbon-background: #322f30 !important;
  --ribbon-background-collapsed: #322f30 !important;
  --rust: 188, 74, 60 !important;
  --search-clear-button-color: #b7b2b2 !important;
  --search-icon-color: #b7b2b2 !important;
  --search-result-background: #322f30 !important;
  --secondary: rgb(92, 124, 255) !important;
  --setting-group-heading-color: #e1e1e1 !important;
  --setting-items-background: #413e3e !important;
  --setting-items-border-color: hsl(345, 3%, 28%) !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --slate: 131, 142, 154 !important;
  --slider-thumb-border-color: hsl(345, 3%, 30%) !important;
  --slider-track-background: hsl(345, 3%, 28%) !important;
  --status-bar-background: #322f30 !important;
  --status-bar-border-color: hsl(345, 3%, 28%) !important;
  --status-bar-text-color: #b7b2b2 !important;
  --strong-color: #e1e1e1 !important;
  --suggestion-background: #322f30 !important;
  --sync-avatar-color-1: #bf616a !important;
  --sync-avatar-color-2: #d08770 !important;
  --sync-avatar-color-3: #ebc88b !important;
  --sync-avatar-color-4: #8fbcbb !important;
  --sync-avatar-color-5: #88c0d0 !important;
  --sync-avatar-color-6: #81a1c1 !important;
  --sync-avatar-color-7: #8b81c1 !important;
  --sync-avatar-color-8: #bd81c1 !important;
  --tab-background-active: #322f30 !important;
  --tab-container-background: #322f30 !important;
  --tab-divider-color: hsl(345, 3%, 30%) !important;
  --tab-outline-color: hsl(345, 3%, 28%) !important;
  --tab-switcher-background: #322f30 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #322f30, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 124, 255) !important;
  --tab-text-color: #807b7b !important;
  --tab-text-color-active: #b7b2b2 !important;
  --tab-text-color-focused: #b7b2b2 !important;
  --tab-text-color-focused-active: #b7b2b2 !important;
  --tab-text-color-focused-active-current: #e1e1e1 !important;
  --tab-text-color-focused-highlighted: rgb(92, 124, 255) !important;
  --table-add-button-border-color: hsl(345, 3%, 28%) !important;
  --table-border-color: hsl(345, 3%, 28%) !important;
  --table-drag-handle-background-active: rgb(92, 124, 255) !important;
  --table-drag-handle-color: #807b7b !important;
  --table-header-border-color: hsl(345, 3%, 28%) !important;
  --table-header-color: #e1e1e1 !important;
  --table-selection: hsla(228, 100%, 68%, 0.1) !important;
  --table-selection-border-color: rgb(92, 124, 255) !important;
  --tag-background: rgb(92, 124, 255, .2) !important;
  --tag-background-hover: rgb(92, 124, 255, .3) !important;
  --tag-border-color: hsla(228, 100%, 68%, 0.15) !important;
  --tag-border-color-hover: hsla(228, 100%, 68%, 0.15) !important;
  --tag-color: rgb(92, 124, 255) !important;
  --tag-color-hover: rgb(92, 124, 255) !important;
  --tertiary: rgb(92, 124, 255, 0.8) !important;
  --text-accent: rgb(92, 124, 255) !important;
  --text-accent-hover: rgb(92, 124, 255, 0.8) !important;
  --text-error: #bf616a !important;
  --text-faint: #807b7b !important;
  --text-muted: #b7b2b2 !important;
  --text-normal: #e1e1e1 !important;
  --text-selection: hsla(228, 100%, 68%, 0.33) !important;
  --text-success: #8fbcbb !important;
  --text-warning: #d08770 !important;
  --textHighlight: #413e3e !important;
  --titlebar-background: #322f30 !important;
  --titlebar-background-focused: #322f30 !important;
  --titlebar-border-color: hsl(345, 3%, 28%) !important;
  --titlebar-text-color: #b7b2b2 !important;
  --titlebar-text-color-focused: #e1e1e1 !important;
  --turquoise: 120, 230, 232 !important;
  --ultramarine: 92, 124, 255 !important;
  --vault-profile-color: #e1e1e1 !important;
  --vault-profile-color-hover: #e1e1e1 !important;
  --vermilion: 243, 90, 55 !important;
  --wine: 114, 47, 55 !important;
  --yellow: #fcd86c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(50, 47, 48);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(50, 47, 48);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(50, 47, 48);
  border-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(74, 69, 70);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(92, 124, 255, 0.2);
  color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(50, 47, 48);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 69, 70);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(50, 47, 48);
  border-left-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(50, 47, 48);
  color: rgb(225, 225, 225);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body del {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(92, 124, 255);
  border-color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(183, 178, 178);
  outline: rgb(183, 178, 178) none 0px;
  text-decoration-color: rgb(183, 178, 178);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgba(92, 124, 255, 0.3);
  text-decoration-color: rgba(92, 124, 255, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body dt {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(128, 123, 123);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body table {
  color: rgb(225, 225, 225);
  width: 193.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
  padding-bottom: 4.8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 4.8px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(235, 200, 139);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 200, 139);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 200, 139);
  border-left-color: rgb(235, 200, 139);
  border-right-color: rgb(235, 200, 139);
  border-top-color: rgb(235, 200, 139);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 135, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 200, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 192, 208);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 200, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 200, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 129, 193);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 188, 187);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 191, 97, 106;
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 139, 129, 193;
  background: rgba(139, 129, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(139, 129, 193, 0.1);
  border-bottom-color: rgba(139, 129, 193, 0.25);
  border-left-color: rgba(139, 129, 193, 0.25);
  border-right-color: rgba(139, 129, 193, 0.25);
  border-top-color: rgba(139, 129, 193, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 191, 97, 106;
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 129, 161, 193;
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 129, 161, 193;
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 208, 135, 112;
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 143, 188, 187;
  background: rgba(143, 188, 187, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(143, 188, 187, 0.1);
  border-bottom-color: rgba(143, 188, 187, 0.25);
  border-left-color: rgba(143, 188, 187, 0.25);
  border-right-color: rgba(143, 188, 187, 0.25);
  border-top-color: rgba(143, 188, 187, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 129, 161, 193;
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 208, 135, 112;
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(225, 225, 225);
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
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(65, 62, 62);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 47, 48);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(65, 62, 62);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 124, 255, 0.2);
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body h2 {
  color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body h3 {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body h4 {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body h5 {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body h6 {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 129, 161, 193;
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(74, 69, 70);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(225, 225, 225);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: rgb(128, 123, 123);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(183, 178, 178);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(128, 123, 123);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(128, 123, 123);
  stroke: rgb(128, 123, 123);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
  color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(128, 123, 123);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(74, 69, 70);
  border-left-color: rgb(74, 69, 70);
  border-right-color: rgb(74, 69, 70);
  border-top-color: rgb(74, 69, 70);
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body abbr {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(183, 178, 178);
  border-left-color: rgb(183, 178, 178);
  border-right-color: rgb(183, 178, 178);
  border-top-color: rgb(183, 178, 178);
  color: rgb(183, 178, 178);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body sub {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body summary {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body sup {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(92, 124, 255, 0.2);
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
  color: rgb(92, 124, 255);
}`,
  },
  light: {
    base: `:root:root {
  --accent: 92, 124, 255 !important;
  --accent-h: 228 !important;
  --accent-l: 68% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(228, 100%, 68%, 0.1) !important;
  --background-modifier-border: hsl(0, 0%, 84%) !important;
  --background-modifier-border-focus: hsl(0, 0%, 84%) !important;
  --background-modifier-border-hover: hsl(0, 0%, 84%) !important;
  --background-modifier-form-field: #f2f2f2 !important;
  --background-modifier-form-field-hover: #f2f2f2 !important;
  --background-modifier-hover: #e6e6e6 !important;
  --background-primary: #f2f2f2 !important;
  --background-primary-alt: #e6e6e6 !important;
  --background-secondary: #f2f2f2 !important;
  --background-secondary-alt: #f2f2f2 !important;
  --bases-cards-background: #f2f2f2 !important;
  --bases-cards-cover-background: #e6e6e6 !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 0%, 84%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0, 0%, 84%) !important;
  --bases-embed-border-color: hsl(0, 0%, 84%) !important;
  --bases-group-heading-property-color: #878586 !important;
  --bases-table-border-color: hsl(0, 0%, 84%) !important;
  --bases-table-cell-background-active: #f2f2f2 !important;
  --bases-table-cell-background-disabled: #e6e6e6 !important;
  --bases-table-cell-background-selected: hsla(228, 100%, 68%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(0, 0%, 84%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(92, 124, 255) !important;
  --bases-table-group-background: #e6e6e6 !important;
  --bases-table-header-background: #f2f2f2 !important;
  --bases-table-header-background-hover: #e6e6e6 !important;
  --bases-table-header-color: #878586 !important;
  --bases-table-summary-background: #f2f2f2 !important;
  --bases-table-summary-background-hover: #e6e6e6 !important;
  --blockquote-border-color: rgb(92, 124, 255) !important;
  --blur-background: color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent)) !important;
  --bold-underline-color: rgb(92, 124, 255) !important;
  --bubblegum: 255, 179, 189 !important;
  --canvas-background: #f2f2f2 !important;
  --caret-color: #353132 !important;
  --checkbox-border-color-hover: #878586 !important;
  --checkbox-color: rgb(92, 124, 255) !important;
  --checkbox-color-hover: rgb(92, 124, 255, 0.8) !important;
  --checkbox-marker-color: #f2f2f2 !important;
  --checklist-done-color: #878586 !important;
  --code-background: #e6e6e6 !important;
  --code-border-color: hsl(0, 0%, 84%) !important;
  --code-bracket-background: #e6e6e6 !important;
  --code-normal: #353132 !important;
  --code-punctuation: #878586 !important;
  --collapse-icon-color-collapsed: rgb(92, 124, 255) !important;
  --color-accent: rgb(92, 124, 255) !important;
  --color-accent-1: hsl(227, 101%, 73.1%) !important;
  --color-accent-2: hsl(225, 102%, 78.2%) !important;
  --color-accent-hsl: 228, 100%, 68% !important;
  --dark: #353132 !important;
  --darkgray: #353132 !important;
  --denim: 76, 80, 120 !important;
  --divider-color: hsl(0, 0%, 84%) !important;
  --divider-color-hover: rgb(92, 124, 255) !important;
  --dropdown-background: #e6e6e6 !important;
  --dropdown-background-hover: #efefef !important;
  --em-color: #353132 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0, 0%, 84%), inset 0 0 0 1px hsl(0, 0%, 84%) !important;
  --embed-border-start: 2px solid rgb(92, 124, 255) !important;
  --file-header-background: #f2f2f2 !important;
  --file-header-background-focused: #f2f2f2 !important;
  --flair-background: #e6e6e6 !important;
  --flair-color: #353132 !important;
  --footnote-divider-color: hsl(0, 0%, 84%) !important;
  --footnote-id-color: #878586 !important;
  --footnote-input-background-active: #e6e6e6 !important;
  --forest: 77, 116, 53 !important;
  --graph-node: #878586 !important;
  --graph-node-focused: rgb(92, 124, 255) !important;
  --graph-text: #353132 !important;
  --gray: #878586 !important;
  --h1-color: #353132 !important;
  --h1-size: 1.3em !important;
  --h2-color: rgb(92, 124, 255) !important;
  --h2-size: 1.2em !important;
  --h3-color: #353132 !important;
  --h3-size: 1.1em !important;
  --h4-color: #878586 !important;
  --h4-size: 1em !important;
  --h5-color: #878586 !important;
  --h5-size: .85em !important;
  --h6-color: #ababab !important;
  --h6-size: .75em !important;
  --highlight: #e6e6e6 !important;
  --hr-color: hsl(0, 0%, 84%) !important;
  --icon-color: #ababab !important;
  --icon-color-active: rgb(92, 124, 255) !important;
  --icon-color-focused: #878586 !important;
  --icon-color-hover: #878586 !important;
  --indentation-guide-color: hsl(0, 0%, 84%) !important;
  --indentation-guide-color-active: hsl(0, 0%, 70%) !important;
  --indentation-guide-width: 1.5px !important;
  --inline-title-color: #353132 !important;
  --inline-title-size: 1.3em !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: rgb(92, 124, 255) !important;
  --interactive-accent-hover: rgb(92, 124, 255, 0.8) !important;
  --interactive-accent-hsl: 228, 100%, 68% !important;
  --interactive-hover: #efefef !important;
  --interactive-normal: #e6e6e6 !important;
  --italic-underline-color: #fcd86c !important;
  --jade: 0, 168, 107 !important;
  --light: #f2f2f2 !important;
  --lightgray: #f2f2f2 !important;
  --link-color: rgb(92, 124, 255) !important;
  --link-color-hover: rgb(92, 124, 255, 0.8) !important;
  --link-external-color: rgb(92, 124, 255) !important;
  --link-external-color-hover: rgb(92, 124, 255, 0.8) !important;
  --link-unresolved-color: rgb(92, 124, 255) !important;
  --link-unresolved-decoration-color: hsla(228, 100%, 68%, 0.3) !important;
  --list-marker-color-collapsed: rgb(92, 124, 255) !important;
  --list-marker-color-hover: #878586 !important;
  --mauve: 122, 73, 136 !important;
  --menu-background: #f2f2f2 !important;
  --menu-border-color: hsl(0, 0%, 84%) !important;
  --menu-shadow: none !important;
  --metadata-border-color: hsl(0, 0%, 84%) !important;
  --metadata-divider-color: hsl(0, 0%, 84%) !important;
  --metadata-input-background-active: #e6e6e6 !important;
  --metadata-input-text-color: #353132 !important;
  --metadata-label-background-active: #e6e6e6 !important;
  --metadata-label-text-color: #878586 !important;
  --metadata-label-text-color-hover: #878586 !important;
  --metadata-property-background-active: #e6e6e6 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(0, 0%, 84%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(0, 0%, 84%) !important;
  --modal-background: #f2f2f2 !important;
  --modal-border-color: hsl(0, 0%, 84%) !important;
  --modal-border-width: 2px !important;
  --mustard: 255, 208, 113 !important;
  --nav-heading-color: #353132 !important;
  --nav-heading-color-collapsed-hover: #878586 !important;
  --nav-heading-color-hover: #353132 !important;
  --nav-indentation-guide-color: hsl(0, 0%, 84%) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-active: #e6e6e6 !important;
  --nav-item-background-hover: #e6e6e6 !important;
  --nav-item-background-selected: hsla(228, 100%, 68%, 0.15) !important;
  --nav-item-color: #878586 !important;
  --nav-item-color-active: #353132 !important;
  --nav-item-color-highlighted: rgb(92, 124, 255) !important;
  --nav-item-color-hover: #353132 !important;
  --nav-item-color-selected: #353132 !important;
  --nav-tag-color-active: #878586 !important;
  --nav-tag-color-hover: #878586 !important;
  --pdf-background: #f2f2f2 !important;
  --pdf-page-background: #f2f2f2 !important;
  --pdf-sidebar-background: #f2f2f2 !important;
  --pill-border-color: hsl(0, 0%, 84%) !important;
  --pill-border-color-hover: hsl(0, 0%, 84%) !important;
  --pill-color: #878586 !important;
  --pill-color-hover: #353132 !important;
  --pill-color-remove-hover: rgb(92, 124, 255) !important;
  --prompt-background: #f2f2f2 !important;
  --pumpkin: 246, 141, 69 !important;
  --raised-background: color-mix(in srgb, #f2f2f2 65%, transparent) linear-gradient(#f2f2f2, color-mix(in srgb, #f2f2f2 65%, transparent)) !important;
  --ribbon-background: #f2f2f2 !important;
  --ribbon-background-collapsed: #f2f2f2 !important;
  --rust: 188, 74, 60 !important;
  --search-clear-button-color: #878586 !important;
  --search-icon-color: #878586 !important;
  --search-result-background: #f2f2f2 !important;
  --secondary: rgb(92, 124, 255) !important;
  --setting-group-heading-color: #353132 !important;
  --setting-items-background: #e6e6e6 !important;
  --setting-items-border-color: hsl(0, 0%, 84%) !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --slate: 131, 142, 154 !important;
  --slider-thumb-border-color: hsl(0, 0%, 84%) !important;
  --slider-track-background: hsl(0, 0%, 84%) !important;
  --status-bar-background: #f2f2f2 !important;
  --status-bar-border-color: hsl(0, 0%, 84%) !important;
  --status-bar-text-color: #878586 !important;
  --strong-color: #353132 !important;
  --suggestion-background: #f2f2f2 !important;
  --tab-background-active: #f2f2f2 !important;
  --tab-container-background: #f2f2f2 !important;
  --tab-divider-color: hsl(0, 0%, 84%) !important;
  --tab-outline-color: hsl(0, 0%, 84%) !important;
  --tab-switcher-background: #f2f2f2 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f2f2, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 124, 255) !important;
  --tab-text-color-active: #878586 !important;
  --tab-text-color-focused: #878586 !important;
  --tab-text-color-focused-active: #878586 !important;
  --tab-text-color-focused-active-current: #353132 !important;
  --tab-text-color-focused-highlighted: rgb(92, 124, 255) !important;
  --table-add-button-border-color: hsl(0, 0%, 84%) !important;
  --table-border-color: hsl(0, 0%, 84%) !important;
  --table-drag-handle-background-active: rgb(92, 124, 255) !important;
  --table-header-border-color: hsl(0, 0%, 84%) !important;
  --table-header-color: #353132 !important;
  --table-selection: hsla(228, 100%, 68%, 0.1) !important;
  --table-selection-border-color: rgb(92, 124, 255) !important;
  --tag-background: rgb(92, 124, 255, .2) !important;
  --tag-background-hover: rgb(92, 124, 255, .3) !important;
  --tag-border-color: hsla(228, 100%, 68%, 0.15) !important;
  --tag-border-color-hover: hsla(228, 100%, 68%, 0.15) !important;
  --tag-color: rgb(92, 124, 255) !important;
  --tag-color-hover: rgb(92, 124, 255) !important;
  --tertiary: rgb(92, 124, 255, 0.8) !important;
  --text-accent: rgb(92, 124, 255) !important;
  --text-accent-hover: rgb(92, 124, 255, 0.8) !important;
  --text-muted: #878586 !important;
  --text-normal: #353132 !important;
  --text-selection: hsla(228, 100%, 68%, 0.2) !important;
  --textHighlight: #e6e6e6 !important;
  --titlebar-background: #f2f2f2 !important;
  --titlebar-background-focused: #f2f2f2 !important;
  --titlebar-border-color: hsl(0, 0%, 84%) !important;
  --titlebar-text-color: #878586 !important;
  --titlebar-text-color-focused: #353132 !important;
  --turquoise: 120, 230, 232 !important;
  --ultramarine: 92, 124, 255 !important;
  --vault-profile-color: #353132 !important;
  --vault-profile-color-hover: #353132 !important;
  --vermilion: 243, 90, 55 !important;
  --wine: 114, 47, 55 !important;
  --yellow: #fcd86c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 242, 242);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(242, 242, 242);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(242, 242, 242);
  border-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(92, 124, 255, 0.2);
  color: rgb(92, 124, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 242, 242);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 242, 242);
  border-left-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(242, 242, 242);
  color: rgb(53, 49, 50);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body del {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(92, 124, 255);
  border-color: rgb(92, 124, 255);
}

html[saved-theme="light"] body p {
  color: rgb(135, 133, 134);
  outline: rgb(135, 133, 134) none 0px;
  text-decoration-color: rgb(135, 133, 134);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgba(92, 124, 255, 0.3);
  text-decoration-color: rgba(92, 124, 255, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body dt {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ol > li {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ul > li {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body table {
  color: rgb(53, 49, 50);
  width: 193.219px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
  padding-bottom: 4.8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 4.8px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body figcaption {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 242, 242);
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
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
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
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
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
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(53, 49, 50);
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
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(230, 230, 230);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(230, 230, 230);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 124, 255, 0.2);
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(92, 124, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body h2 {
  color: rgb(92, 124, 255);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body h3 {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body h4 {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body h5 {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body h6 {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(214, 214, 214);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(53, 49, 50);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(135, 133, 134);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 171, 171);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(171, 171, 171);
  stroke: rgb(171, 171, 171);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(214, 214, 214);
  border-left-color: rgb(214, 214, 214);
  border-right-color: rgb(214, 214, 214);
  border-top-color: rgb(214, 214, 214);
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body abbr {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(135, 133, 134);
  border-left-color: rgb(135, 133, 134);
  border-right-color: rgb(135, 133, 134);
  border-top-color: rgb(135, 133, 134);
  color: rgb(135, 133, 134);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body sub {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body summary {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body sup {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(92, 124, 255, 0.2);
  border-bottom-color: rgba(92, 124, 255, 0.15);
  border-left-color: rgba(92, 124, 255, 0.15);
  border-right-color: rgba(92, 124, 255, 0.15);
  border-top-color: rgba(92, 124, 255, 0.15);
  color: rgb(92, 124, 255);
}`,
  },
};
