import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "jotter", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: 92, 124, 255 !important;
  --accent-h: 228 !important;
  --accent-l: 68% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgba(92, 124, 255, 0.1) !important;
  --background-modifier-border: rgb(74, 69, 70) !important;
  --background-modifier-border-focus: rgb(74, 69, 70) !important;
  --background-modifier-border-hover: rgb(79, 74, 75) !important;
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
  --bases-cards-shadow: 0 0 0 1px rgb(74, 69, 70) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(79, 74, 75) !important;
  --bases-embed-border-color: rgb(74, 69, 70) !important;
  --bases-group-heading-property-color: #b7b2b2 !important;
  --bases-table-border-color: rgb(74, 69, 70) !important;
  --bases-table-cell-background-active: #322f30 !important;
  --bases-table-cell-background-disabled: #413e3e !important;
  --bases-table-cell-background-selected: rgba(92, 124, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(74, 69, 70) !important;
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
  --code-border-color: rgb(74, 69, 70) !important;
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
  --divider-color: rgb(74, 69, 70) !important;
  --divider-color-hover: rgb(92, 124, 255) !important;
  --dropdown-background: #433F40 !important;
  --dropdown-background-hover: #4a4546 !important;
  --em-color: #e1e1e1 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(74, 69, 70), inset 0 0 0 1px rgb(74, 69, 70) !important;
  --embed-border-start: 2px solid rgb(92, 124, 255) !important;
  --file-header-background: #322f30 !important;
  --file-header-background-focused: #322f30 !important;
  --flair-background: #433F40 !important;
  --flair-color: #e1e1e1 !important;
  --footnote-divider-color: rgb(74, 69, 70) !important;
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
  --hr-color: rgb(74, 69, 70) !important;
  --icon-color: #807b7b !important;
  --icon-color-active: rgb(92, 124, 255) !important;
  --icon-color-focused: #b7b2b2 !important;
  --icon-color-hover: #b7b2b2 !important;
  --indentation-guide-color: rgb(74, 69, 70) !important;
  --indentation-guide-color-active: rgb(118, 111, 113) !important;
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
  --link-unresolved-decoration-color: rgba(92, 124, 255, 0.3) !important;
  --list-marker-color: #807b7b !important;
  --list-marker-color-collapsed: rgb(92, 124, 255) !important;
  --list-marker-color-hover: #b7b2b2 !important;
  --mauve: 122, 73, 136 !important;
  --menu-background: #322f30 !important;
  --menu-border-color: rgb(79, 74, 75) !important;
  --menu-shadow: none !important;
  --metadata-border-color: rgb(74, 69, 70) !important;
  --metadata-divider-color: rgb(74, 69, 70) !important;
  --metadata-input-background-active: #413e3e !important;
  --metadata-input-text-color: #e1e1e1 !important;
  --metadata-label-background-active: #413e3e !important;
  --metadata-label-text-color: #b7b2b2 !important;
  --metadata-label-text-color-hover: #b7b2b2 !important;
  --metadata-property-background-active: #413e3e !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(74, 69, 70) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(79, 74, 75) !important;
  --modal-background: #322f30 !important;
  --modal-border-color: rgb(74, 69, 70) !important;
  --modal-border-width: 2px !important;
  --mustard: 255, 208, 113 !important;
  --nav-collapse-icon-color: #807b7b !important;
  --nav-collapse-icon-color-collapsed: #807b7b !important;
  --nav-heading-color: #e1e1e1 !important;
  --nav-heading-color-collapsed: #807b7b !important;
  --nav-heading-color-collapsed-hover: #b7b2b2 !important;
  --nav-heading-color-hover: #e1e1e1 !important;
  --nav-indentation-guide-color: rgb(74, 69, 70) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-active: #413e3e !important;
  --nav-item-background-hover: #413e3e !important;
  --nav-item-background-selected: rgba(92, 124, 255, 0.15) !important;
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
  --pdf-shadow: 0 0 0 1px rgb(74, 69, 70) !important;
  --pdf-sidebar-background: #322f30 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(74, 69, 70) !important;
  --pill-border-color: rgb(74, 69, 70) !important;
  --pill-border-color-hover: rgb(79, 74, 75) !important;
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
  --setting-items-border-color: rgb(74, 69, 70) !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --slate: 131, 142, 154 !important;
  --slider-thumb-border-color: rgb(79, 74, 75) !important;
  --slider-track-background: rgb(74, 69, 70) !important;
  --status-bar-background: #322f30 !important;
  --status-bar-border-color: rgb(74, 69, 70) !important;
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
  --tab-divider-color: rgb(79, 74, 75) !important;
  --tab-outline-color: rgb(74, 69, 70) !important;
  --tab-switcher-background: #322f30 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #322f30, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 124, 255) !important;
  --tab-text-color: #807b7b !important;
  --tab-text-color-active: #b7b2b2 !important;
  --tab-text-color-focused: #b7b2b2 !important;
  --tab-text-color-focused-active: #b7b2b2 !important;
  --tab-text-color-focused-active-current: #e1e1e1 !important;
  --tab-text-color-focused-highlighted: rgb(92, 124, 255) !important;
  --table-add-button-border-color: rgb(74, 69, 70) !important;
  --table-border-color: rgb(74, 69, 70) !important;
  --table-drag-handle-background-active: rgb(92, 124, 255) !important;
  --table-drag-handle-color: #807b7b !important;
  --table-header-border-color: rgb(74, 69, 70) !important;
  --table-header-color: #e1e1e1 !important;
  --table-selection: rgba(92, 124, 255, 0.1) !important;
  --table-selection-border-color: rgb(92, 124, 255) !important;
  --tag-background: rgb(92, 124, 255, .2) !important;
  --tag-background-hover: rgb(92, 124, 255, .3) !important;
  --tag-border-color: rgba(92, 124, 255, 0.15) !important;
  --tag-border-color-hover: rgba(92, 124, 255, 0.15) !important;
  --tag-color: rgb(92, 124, 255) !important;
  --tag-color-hover: rgb(92, 124, 255) !important;
  --tertiary: rgb(92, 124, 255, 0.8) !important;
  --text-accent: rgb(92, 124, 255) !important;
  --text-accent-hover: rgb(92, 124, 255, 0.8) !important;
  --text-error: #bf616a !important;
  --text-faint: #807b7b !important;
  --text-muted: #b7b2b2 !important;
  --text-normal: #e1e1e1 !important;
  --text-selection: rgba(92, 124, 255, 0.33) !important;
  --text-success: #8fbcbb !important;
  --text-warning: #d08770 !important;
  --textHighlight: #413e3e !important;
  --titlebar-background: #322f30 !important;
  --titlebar-background-focused: #322f30 !important;
  --titlebar-border-color: rgb(74, 69, 70) !important;
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
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body del {
  color: rgb(225, 225, 225);
  outline: rgb(225, 225, 225) none 0px;
  text-decoration: line-through rgb(225, 225, 225);
  text-decoration-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body p {
  color: rgb(183, 178, 178);
  outline: rgb(183, 178, 178) none 0px;
  text-decoration: rgb(183, 178, 178);
  text-decoration-color: rgb(183, 178, 178);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgb(92, 124, 255);
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgb(92, 124, 255);
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
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
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
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(128, 123, 123);
  border-left-color: rgb(128, 123, 123);
  border-right-color: rgb(128, 123, 123);
  border-top-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(128, 123, 123);
  text-decoration: rgb(128, 123, 123);
  text-decoration-color: rgb(128, 123, 123);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
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
  --callout-color: 139, 129, 193;
  background-color: rgba(139, 129, 193, 0.1);
  border-bottom-color: rgba(139, 129, 193, 0.25);
  border-left-color: rgba(139, 129, 193, 0.25);
  border-right-color: rgba(139, 129, 193, 0.25);
  border-top-color: rgba(139, 129, 193, 0.25);
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
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 143, 188, 187;
  background-color: rgba(143, 188, 187, 0.1);
  border-bottom-color: rgba(143, 188, 187, 0.25);
  border-left-color: rgba(143, 188, 187, 0.25);
  border-right-color: rgba(143, 188, 187, 0.25);
  border-top-color: rgba(143, 188, 187, 0.25);
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
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-left-color: rgba(129, 161, 193, 0.25);
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgba(129, 161, 193, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
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
  text-decoration: rgb(225, 225, 225);
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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(50, 47, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(50, 47, 48);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(183, 178, 178);
  text-decoration: rgb(183, 178, 178);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(65, 62, 62);
  border-bottom-color: rgb(225, 225, 225);
  border-left-color: rgb(225, 225, 225);
  border-right-color: rgb(225, 225, 225);
  border-top-color: rgb(225, 225, 225);
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
  text-decoration: rgb(183, 178, 178);
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
  text-decoration: rgb(183, 178, 178);
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
  text-decoration: rgb(183, 178, 178);
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
  text-decoration: underline dotted rgb(225, 225, 225);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent: 92, 124, 255 !important;
  --accent-h: 228 !important;
  --accent-l: 68% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgba(92, 124, 255, 0.1) !important;
  --background-modifier-border: rgb(214, 214, 214) !important;
  --background-modifier-border-focus: rgb(214, 214, 214) !important;
  --background-modifier-border-hover: rgb(214, 214, 214) !important;
  --background-modifier-form-field: #f2f2f2 !important;
  --background-modifier-form-field-hover: #f2f2f2 !important;
  --background-modifier-hover: #e6e6e6 !important;
  --background-primary: #f2f2f2 !important;
  --background-primary-alt: #e6e6e6 !important;
  --background-secondary: #f2f2f2 !important;
  --background-secondary-alt: #f2f2f2 !important;
  --bases-cards-background: #f2f2f2 !important;
  --bases-cards-cover-background: #e6e6e6 !important;
  --bases-cards-shadow: 0 0 0 1px rgb(214, 214, 214) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(214, 214, 214) !important;
  --bases-embed-border-color: rgb(214, 214, 214) !important;
  --bases-group-heading-property-color: #878586 !important;
  --bases-table-border-color: rgb(214, 214, 214) !important;
  --bases-table-cell-background-active: #f2f2f2 !important;
  --bases-table-cell-background-disabled: #e6e6e6 !important;
  --bases-table-cell-background-selected: rgba(92, 124, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(214, 214, 214) !important;
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
  --code-border-color: rgb(214, 214, 214) !important;
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
  --divider-color: rgb(214, 214, 214) !important;
  --divider-color-hover: rgb(92, 124, 255) !important;
  --dropdown-background: #e6e6e6 !important;
  --dropdown-background-hover: #efefef !important;
  --em-color: #353132 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(214, 214, 214), inset 0 0 0 1px rgb(214, 214, 214) !important;
  --embed-border-start: 2px solid rgb(92, 124, 255) !important;
  --file-header-background: #f2f2f2 !important;
  --file-header-background-focused: #f2f2f2 !important;
  --flair-background: #e6e6e6 !important;
  --flair-color: #353132 !important;
  --footnote-divider-color: rgb(214, 214, 214) !important;
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
  --hr-color: rgb(214, 214, 214) !important;
  --icon-color: #ababab !important;
  --icon-color-active: rgb(92, 124, 255) !important;
  --icon-color-focused: #878586 !important;
  --icon-color-hover: #878586 !important;
  --indentation-guide-color: rgb(214, 214, 214) !important;
  --indentation-guide-color-active: rgb(179, 179, 179) !important;
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
  --link-unresolved-decoration-color: rgba(92, 124, 255, 0.3) !important;
  --list-marker-color-collapsed: rgb(92, 124, 255) !important;
  --list-marker-color-hover: #878586 !important;
  --mauve: 122, 73, 136 !important;
  --menu-background: #f2f2f2 !important;
  --menu-border-color: rgb(214, 214, 214) !important;
  --menu-shadow: none !important;
  --metadata-border-color: rgb(214, 214, 214) !important;
  --metadata-divider-color: rgb(214, 214, 214) !important;
  --metadata-input-background-active: #e6e6e6 !important;
  --metadata-input-text-color: #353132 !important;
  --metadata-label-background-active: #e6e6e6 !important;
  --metadata-label-text-color: #878586 !important;
  --metadata-label-text-color-hover: #878586 !important;
  --metadata-property-background-active: #e6e6e6 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(214, 214, 214) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(214, 214, 214) !important;
  --modal-background: #f2f2f2 !important;
  --modal-border-color: rgb(214, 214, 214) !important;
  --modal-border-width: 2px !important;
  --mustard: 255, 208, 113 !important;
  --nav-heading-color: #353132 !important;
  --nav-heading-color-collapsed-hover: #878586 !important;
  --nav-heading-color-hover: #353132 !important;
  --nav-indentation-guide-color: rgb(214, 214, 214) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-active: #e6e6e6 !important;
  --nav-item-background-hover: #e6e6e6 !important;
  --nav-item-background-selected: rgba(92, 124, 255, 0.15) !important;
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
  --pill-border-color: rgb(214, 214, 214) !important;
  --pill-border-color-hover: rgb(214, 214, 214) !important;
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
  --setting-items-border-color: rgb(214, 214, 214) !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --slate: 131, 142, 154 !important;
  --slider-thumb-border-color: rgb(214, 214, 214) !important;
  --slider-track-background: rgb(214, 214, 214) !important;
  --status-bar-background: #f2f2f2 !important;
  --status-bar-border-color: rgb(214, 214, 214) !important;
  --status-bar-text-color: #878586 !important;
  --strong-color: #353132 !important;
  --suggestion-background: #f2f2f2 !important;
  --tab-background-active: #f2f2f2 !important;
  --tab-container-background: #f2f2f2 !important;
  --tab-divider-color: rgb(214, 214, 214) !important;
  --tab-outline-color: rgb(214, 214, 214) !important;
  --tab-switcher-background: #f2f2f2 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f2f2, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 124, 255) !important;
  --tab-text-color-active: #878586 !important;
  --tab-text-color-focused: #878586 !important;
  --tab-text-color-focused-active: #878586 !important;
  --tab-text-color-focused-active-current: #353132 !important;
  --tab-text-color-focused-highlighted: rgb(92, 124, 255) !important;
  --table-add-button-border-color: rgb(214, 214, 214) !important;
  --table-border-color: rgb(214, 214, 214) !important;
  --table-drag-handle-background-active: rgb(92, 124, 255) !important;
  --table-header-border-color: rgb(214, 214, 214) !important;
  --table-header-color: #353132 !important;
  --table-selection: rgba(92, 124, 255, 0.1) !important;
  --table-selection-border-color: rgb(92, 124, 255) !important;
  --tag-background: rgb(92, 124, 255, .2) !important;
  --tag-background-hover: rgb(92, 124, 255, .3) !important;
  --tag-border-color: rgba(92, 124, 255, 0.15) !important;
  --tag-border-color-hover: rgba(92, 124, 255, 0.15) !important;
  --tag-color: rgb(92, 124, 255) !important;
  --tag-color-hover: rgb(92, 124, 255) !important;
  --tertiary: rgb(92, 124, 255, 0.8) !important;
  --text-accent: rgb(92, 124, 255) !important;
  --text-accent-hover: rgb(92, 124, 255, 0.8) !important;
  --text-muted: #878586 !important;
  --text-normal: #353132 !important;
  --text-selection: rgba(92, 124, 255, 0.2) !important;
  --textHighlight: #e6e6e6 !important;
  --titlebar-background: #f2f2f2 !important;
  --titlebar-background-focused: #f2f2f2 !important;
  --titlebar-border-color: rgb(214, 214, 214) !important;
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
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body del {
  color: rgb(53, 49, 50);
  outline: rgb(53, 49, 50) none 0px;
  text-decoration: line-through rgb(53, 49, 50);
  text-decoration-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body p {
  color: rgb(135, 133, 134);
  outline: rgb(135, 133, 134) none 0px;
  text-decoration: rgb(135, 133, 134);
  text-decoration-color: rgb(135, 133, 134);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgb(92, 124, 255);
  text-decoration-color: rgb(92, 124, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 124, 255);
  outline: rgb(92, 124, 255) none 0px;
  text-decoration: underline rgb(92, 124, 255);
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
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ul > li {
  color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(242, 242, 242);
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
  border-left-color: rgb(92, 124, 255);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
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
  text-decoration: rgb(53, 49, 50);
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
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(242, 242, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 242, 242);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(135, 133, 134);
  text-decoration: rgb(135, 133, 134);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(53, 49, 50);
  border-left-color: rgb(53, 49, 50);
  border-right-color: rgb(53, 49, 50);
  border-top-color: rgb(53, 49, 50);
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
  text-decoration: rgb(135, 133, 134);
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
  text-decoration: rgb(135, 133, 134);
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
  text-decoration: rgb(135, 133, 134);
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
  text-decoration: underline dotted rgb(53, 49, 50);
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
}`,
  },
};
