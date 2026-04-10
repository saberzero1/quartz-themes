import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "chime",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "archivo",
      "arima",
      "ibm-plex-sans",
      "linux-libertine",
      "icons/noto-sans-symbols-2",
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #4e4560 !important;
  --background-modifier-border-focus: rgb(98, 111, 134) !important;
  --background-modifier-border-hover: #545e76 !important;
  --background-modifier-error: #e17884 !important;
  --background-modifier-error-hover: #e17884 !important;
  --background-modifier-error-rgb: 225, 120, 132 !important;
  --background-modifier-form-field: #55546e !important;
  --background-modifier-form-field-hover: #55546e !important;
  --background-modifier-success: #75c297 !important;
  --background-modifier-success-rgb: 117, 194, 151 !important;
  --background-primary: #3b3347 !important;
  --background-primary-alt: #413b4e !important;
  --background-secondary: #2f2837 !important;
  --background-secondary-alt: #2f2837 !important;
  --bases-cards-background: #3b3347 !important;
  --bases-cards-cover-background: #413b4e !important;
  --bases-cards-radius: 10px !important;
  --bases-cards-shadow: 0 0 0 1px #4e4560 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #545e76 !important;
  --bases-embed-border-color: #4e4560 !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: #7f83a1 !important;
  --bases-table-border-color: #4e4560 !important;
  --bases-table-cell-background-active: #3b3347 !important;
  --bases-table-cell-background-disabled: #413b4e !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(98, 111, 134) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: #413b4e !important;
  --bases-table-header-background: #3b3347 !important;
  --bases-table-header-color: #7f83a1 !important;
  --bases-table-summary-background: #3b3347 !important;
  --blockquote-background-color: #2f2837 !important;
  --blockquote-border-thickness: 2.5px !important;
  --blockquote-color: #a0a7c4 !important;
  --blur-background: color-mix(in srgb, #4e4560 65%, transparent) linear-gradient(#4e4560, color-mix(in srgb, #4e4560 65%, transparent)) !important;
  --bodyFont: "Arima", cursive !important;
  --border-radius-average: 11px !important;
  --callout-bug: 220, 118, 167;
  --callout-default: 136, 198, 227;
  --callout-error: 225, 120, 132;
  --callout-example: 181, 132, 199;
  --callout-fail: 225, 120, 132;
  --callout-important: 111, 210, 194;
  --callout-info: 136, 198, 227;
  --callout-question: 241, 144, 112;
  --callout-radius: 8px;
  --callout-success: 117, 194, 151;
  --callout-summary: 111, 210, 194;
  --callout-tip: 111, 210, 194;
  --callout-todo: 136, 198, 227;
  --callout-warning: 241, 144, 112;
  --canvas-background: #3b3347 !important;
  --canvas-card-label-color: rgb(125, 127, 149) !important;
  --canvas-color-1: 225, 120, 132 !important;
  --canvas-color-2: 241, 144, 112 !important;
  --canvas-color-3: 255, 168, 46 !important;
  --canvas-color-4: 117, 194, 151 !important;
  --canvas-color-5: 111, 210, 194 !important;
  --canvas-color-6: 181, 132, 199 !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: #4e4560 !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: #a0a7c4 !important;
  --checkbox-border-color: rgb(125, 127, 149) !important;
  --checkbox-border-color-hover: #7f83a1 !important;
  --checkbox-marker-color: #3b3347 !important;
  --checkbox-radius: 8px !important;
  --checklist-done-color: #7f83a1 !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #413b4e !important;
  --code-border-color: #4e4560 !important;
  --code-comment: rgb(125, 127, 149) !important;
  --code-function: #dcb46f !important;
  --code-important: #f19070 !important;
  --code-keyword: #dc76a7 !important;
  --code-normal: #a0a7c4 !important;
  --code-operator: #e17884 !important;
  --code-property: #6fd2c2 !important;
  --code-punctuation: #7f83a1 !important;
  --code-radius: 8px !important;
  --code-string: #75c297 !important;
  --code-tag: #e17884 !important;
  --code-value: #b584c7 !important;
  --codeFont: "Arima", cursive !important;
  --collapse-icon-color: rgb(125, 127, 149) !important;
  --color-base-00: #3b3347 !important;
  --color-base-05: #2f2837 !important;
  --color-base-10: #413b4e !important;
  --color-base-100: #a0a7c4 !important;
  --color-base-20: #2f2837 !important;
  --color-base-25: #55546e !important;
  --color-base-30: #4e4560 !important;
  --color-base-35: #545e76 !important;
  --color-base-40: rgb(98, 111, 134) !important;
  --color-base-50: rgb(125, 127, 149) !important;
  --color-base-60: rgb(103, 129, 148) !important;
  --color-base-70: #7f83a1 !important;
  --color-blue: #88c6e3 !important;
  --color-blue-rgb: 136, 198, 227 !important;
  --color-cyan: #6fd2c2 !important;
  --color-cyan-rgb: 111, 210, 194 !important;
  --color-green: #75c297 !important;
  --color-green-rgb: 117, 194, 151 !important;
  --color-orange: #f19070 !important;
  --color-orange-rgb: 241, 144, 112 !important;
  --color-pink: #dc76a7 !important;
  --color-pink-rgb: 220, 118, 167 !important;
  --color-purple: #b584c7 !important;
  --color-purple-rgb: 181, 132, 199 !important;
  --color-red: #e17884 !important;
  --color-red-rgb: 225, 120, 132 !important;
  --color-yellow: #dcb46f !important;
  --color-yellow-rgb: 255, 168, 46 !important;
  --dark: #a0a7c4 !important;
  --darkgray: #a0a7c4 !important;
  --divider-color: #4e4560 !important;
  --divider-width: 0px !important;
  --dropdown-background: #4e4560 !important;
  --dropdown-background-hover: #545e76 !important;
  --embed-block-shadow-hover: 0 0 0 1px #4e4560, inset 0 0 0 1px #4e4560 !important;
  --file-header-background: #3b3347 !important;
  --file-header-background-focused: #3b3347 !important;
  --file-header-font: "Arima", cursive !important;
  --flair-background: #4e4560 !important;
  --flair-color: #a0a7c4 !important;
  --font-default: "Arima", cursive !important;
  --font-interface: "Arima", cursive !important;
  --font-mermaid: "Arima", cursive !important;
  --font-text: "Arima", cursive !important;
  --footnote-divider-color: #4e4560 !important;
  --footnote-id-color: #7f83a1 !important;
  --footnote-id-color-no-occurrences: rgb(125, 127, 149) !important;
  --footnote-line-height: 1.7 !important;
  --footnote-radius: 8px !important;
  --graph-line: #545e76 !important;
  --graph-node: #7f83a1 !important;
  --graph-node-attachment: #dcb46f !important;
  --graph-node-tag: #75c297 !important;
  --graph-node-unresolved: rgb(125, 127, 149) !important;
  --graph-text: #a0a7c4 !important;
  --gray: #7f83a1 !important;
  --h1-color: #a0a7c4 !important;
  --h2-color: #a0a7c4 !important;
  --h2-weight: 600 !important;
  --h3-color: #a0a7c4 !important;
  --h3-weight: 600 !important;
  --h4-color: #a0a7c4 !important;
  --h4-weight: 600 !important;
  --h5-color: #a0a7c4 !important;
  --h5-line-height: 1.7 !important;
  --h5-weight: 600 !important;
  --h6-color: #a0a7c4 !important;
  --h6-line-height: 1.7 !important;
  --h6-variant: small-caps !important;
  --headerFont: "Arima", cursive !important;
  --heading-formatting: rgb(125, 127, 149) !important;
  --highlight: hsl(
    258,
    88%,
    66%,
    0.3
  ) !important;
  --hr-color: #4e4560 !important;
  --icon-color: #7f83a1 !important;
  --icon-color-focused: #a0a7c4 !important;
  --icon-color-hover: #7f83a1 !important;
  --inline-title-color: #a0a7c4 !important;
  --input-date-separator: rgb(125, 127, 149) !important;
  --input-placeholder-color: rgb(125, 127, 149) !important;
  --interactive-hover: #545e76 !important;
  --interactive-normal: #4e4560 !important;
  --light: #3b3347 !important;
  --lightgray: #2f2837 !important;
  --line-height-normal: 1.7 !important;
  --line-style: solid !important;
  --link-decoration: none !important;
  --link-external-decoration: none !important;
  --list-marker-color: rgb(125, 127, 149) !important;
  --list-marker-color-hover: #7f83a1 !important;
  --menu-background: #2f2837 !important;
  --menu-border-color: #545e76 !important;
  --menu-radius: 10px !important;
  --metadata-border-color: #4e4560 !important;
  --metadata-divider-color: #4e4560 !important;
  --metadata-input-font: "Arima", cursive !important;
  --metadata-input-text-color: #a0a7c4 !important;
  --metadata-label-font: "Arima", cursive !important;
  --metadata-label-text-color: #7f83a1 !important;
  --metadata-label-text-color-hover: #7f83a1 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(98, 111, 134) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #545e76 !important;
  --modal-background: #3b3347 !important;
  --modal-border-color: rgb(98, 111, 134) !important;
  --modal-radius: 12px !important;
  --nav-collapse-icon-color: rgb(125, 127, 149) !important;
  --nav-collapse-icon-color-collapsed: rgb(125, 127, 149) !important;
  --nav-heading-color: #a0a7c4 !important;
  --nav-heading-color-collapsed: rgb(125, 127, 149) !important;
  --nav-heading-color-collapsed-hover: #7f83a1 !important;
  --nav-heading-color-hover: #a0a7c4 !important;
  --nav-item-color: #7f83a1 !important;
  --nav-item-color-active: #a0a7c4 !important;
  --nav-item-color-hover: #a0a7c4 !important;
  --nav-item-color-selected: #a0a7c4 !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: rgb(125, 127, 149) !important;
  --nav-tag-color-active: #7f83a1 !important;
  --nav-tag-color-hover: #7f83a1 !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #3b3347 !important;
  --pdf-page-background: #3b3347 !important;
  --pdf-shadow: 0 0 0 1px #4e4560 !important;
  --pdf-sidebar-background: #3b3347 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #4e4560 !important;
  --pill-border-color: #4e4560 !important;
  --pill-border-color-hover: #545e76 !important;
  --pill-color: #7f83a1 !important;
  --pill-color-hover: #a0a7c4 !important;
  --pill-color-remove: rgb(125, 127, 149) !important;
  --prompt-background: #3b3347 !important;
  --prompt-border-color: rgb(98, 111, 134) !important;
  --prompt-width: 450px !important;
  --radius-l: 12px !important;
  --radius-m: 10px !important;
  --radius-s: 8px !important;
  --radius-xl: 14px !important;
  --raised-background: color-mix(in srgb, #4e4560 65%, transparent) linear-gradient(#4e4560, color-mix(in srgb, #4e4560 65%, transparent)) !important;
  --ribbon-background: #2f2837 !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 12px !important;
  --search-clear-button-color: #7f83a1 !important;
  --search-icon-color: #7f83a1 !important;
  --search-result-background: #3b3347 !important;
  --setting-group-heading-color: #a0a7c4 !important;
  --setting-items-background: #413b4e !important;
  --setting-items-border-color: #4e4560 !important;
  --setting-items-radius: 12px !important;
  --slider-thumb-border-color: #545e76 !important;
  --slider-track-background: #4e4560 !important;
  --status-bar-background: #2f2837 !important;
  --status-bar-border-color: #4e4560 !important;
  --status-bar-radius: 10px 0 0 0 !important;
  --status-bar-text-color: #7f83a1 !important;
  --suggestion-background: #3b3347 !important;
  --sync-avatar-color-1: #e17884 !important;
  --sync-avatar-color-2: #f19070 !important;
  --sync-avatar-color-3: #dcb46f !important;
  --sync-avatar-color-4: #75c297 !important;
  --sync-avatar-color-5: #6fd2c2 !important;
  --sync-avatar-color-6: #88c6e3 !important;
  --sync-avatar-color-7: #b584c7 !important;
  --sync-avatar-color-8: #dc76a7 !important;
  --tab-background-active: #3b3347 !important;
  --tab-container-background: #2f2837 !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-font-size: 0.84em !important;
  --tab-outline-color: #4e4560 !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-background: #2f2837 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2837, transparent) !important;
  --tab-switcher-preview-radius: 14px !important;
  --tab-text-color: rgb(125, 127, 149) !important;
  --tab-text-color-active: #7f83a1 !important;
  --tab-text-color-focused: #7f83a1 !important;
  --tab-text-color-focused-active: #7f83a1 !important;
  --tab-text-color-focused-active-current: hsl(253, 92.4%, 85.14%) !important;
  --tab-width: 240px !important;
  --table-add-button-border-color: #4e4560 !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: #4e4560 !important;
  --table-border-width: 0px !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-drag-handle-color: rgb(125, 127, 149) !important;
  --table-header-border-color: #4e4560 !important;
  --table-header-border-width: 0px !important;
  --table-header-color: #a0a7c4 !important;
  --table-row-alt-background: #2f2837 !important;
  --table-row-last-border-width: 0px !important;
  --text-error: #e17884 !important;
  --text-faint: rgb(125, 127, 149) !important;
  --text-highlight-bg: hsl(
    258,
    88%,
    66%,
    0.3
  ) !important;
  --text-muted: #7f83a1 !important;
  --text-normal: #a0a7c4 !important;
  --text-success: #75c297 !important;
  --text-warning: #f19070 !important;
  --textHighlight: hsl(
    258,
    88%,
    66%,
    0.3
  ) !important;
  --titleFont: "Arima", cursive !important;
  --titlebar-background: #2f2837 !important;
  --titlebar-background-focused: #2f2837 !important;
  --titlebar-border-color: #4e4560 !important;
  --titlebar-text-color: #7f83a1 !important;
  --titlebar-text-color-focused: #a0a7c4 !important;
  --vault-profile-color: #a0a7c4 !important;
  --vault-profile-color-hover: #a0a7c4 !important;
  --workspace-background: #2f2837 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 40, 55);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(47, 40, 55);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(78, 69, 96);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(47, 40, 55);
  border-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(78, 69, 96);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 40, 55);
  border-left-color: rgb(78, 69, 96);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(59, 51, 71);
  color: rgb(160, 167, 196);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(138, 92, 245, 0.3);
  color: rgb(255, 255, 255);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(160, 167, 196);
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(125, 127, 149);
  border-radius: 8px;
}

html[saved-theme="dark"] body p {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
  outline: rgb(127, 131, 161) none 0px;
  text-decoration-color: rgb(127, 131, 161);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", "??", Arima, cursive;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body dt {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(125, 127, 149);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(47, 40, 55);
  font-family: "??", "??", Arima, cursive;
  font-style: italic;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body table {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  width: 662px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(47, 40, 55);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-width: 0px;
  border-left-color: rgb(78, 69, 96);
  border-left-width: 0px;
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
  border-top-color: rgb(78, 69, 96);
  border-top-width: 0px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-width: 0px;
  border-left-color: rgb(78, 69, 96);
  border-left-width: 0px;
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
  border-top-color: rgb(78, 69, 96);
  border-top-width: 0px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(197, 182, 252);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(197, 182, 252);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 180, 111);
  border-left-color: rgb(220, 180, 111);
  border-right-color: rgb(220, 180, 111);
  border-top-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 167, 196);
  border-radius: 10px;
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(125, 127, 149);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(125, 127, 149);
  border-right-color: rgb(125, 127, 149);
  border-top-color: rgb(125, 127, 149);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background-color: rgba(111, 210, 194, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 220, 118, 167;
  background-color: rgba(220, 118, 167, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background-color: rgba(181, 132, 199, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 225, 120, 132;
  background-color: rgba(225, 120, 132, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 117, 194, 151;
  background-color: rgba(117, 194, 151, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background-color: rgba(111, 210, 194, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgb(85, 84, 110);
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(59, 51, 71);
  border-bottom-color: rgb(98, 111, 134);
  border-left-color: rgb(98, 111, 134);
  border-right-color: rgb(98, 111, 134);
  border-top-color: rgb(98, 111, 134);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(98, 111, 134);
  border-left-color: rgb(98, 111, 134);
  border-right-color: rgb(98, 111, 134);
  border-top-color: rgb(98, 111, 134);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 40, 55);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h1 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h2 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h3 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h4 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h5 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h6 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(59, 51, 71) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 51, 71);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(160, 167, 196);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(127, 131, 161);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(47, 40, 55);
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 10px;
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(127, 131, 161);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(127, 131, 161);
  stroke: rgb(127, 131, 161);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(125, 127, 149);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(125, 127, 149);
  border-right-color: rgb(125, 127, 149);
  border-top-color: rgb(125, 127, 149);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(125, 127, 149);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(125, 127, 149);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  color: rgb(127, 131, 161);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(127, 131, 161);
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  color: rgb(127, 131, 161);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(47, 40, 55);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body abbr {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(127, 131, 161);
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body sub {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body summary {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body sup {
  color: rgb(160, 167, 196);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 323 !important;
  --accent-l: 65% !important;
  --accent-s: 30% !important;
  --background-modifier-active-hover: hsla(323, 30%, 65%, 0.1) !important;
  --background-modifier-border: #cec2c577 !important;
  --background-modifier-border-focus: #b6a4b2 !important;
  --background-modifier-border-hover: #b5a7ac !important;
  --background-modifier-error: #e17884 !important;
  --background-modifier-error-hover: #e17884 !important;
  --background-modifier-error-rgb: 225, 120, 132 !important;
  --background-modifier-form-field: #f8f3f2 !important;
  --background-modifier-form-field-hover: #f8f3f2 !important;
  --background-modifier-success: #75c297 !important;
  --background-modifier-success-rgb: 117, 194, 151 !important;
  --background-primary: #f8f3f2 !important;
  --background-primary-alt: #f0e9e4 !important;
  --background-secondary: #f4ebeb !important;
  --background-secondary-alt: #faf3f1 !important;
  --bases-cards-background: #f8f3f2 !important;
  --bases-cards-cover-background: #f0e9e4 !important;
  --bases-cards-radius: 10px !important;
  --bases-cards-shadow: 0 0 0 1px #cec2c577 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #b5a7ac !important;
  --bases-embed-border-color: #cec2c577 !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: #685a68 !important;
  --bases-table-border-color: #cec2c577 !important;
  --bases-table-cell-background-active: #f8f3f2 !important;
  --bases-table-cell-background-disabled: #f0e9e4 !important;
  --bases-table-cell-background-selected: hsla(323, 30%, 65%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b6a4b2 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(322, 30.3%, 69.875%) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: #f0e9e4 !important;
  --bases-table-header-background: #f8f3f2 !important;
  --bases-table-header-color: #685a68 !important;
  --bases-table-summary-background: #f8f3f2 !important;
  --blockquote-background-color: #faf3f1 !important;
  --blockquote-border-color: hsl(322, 30.3%, 69.875%) !important;
  --blockquote-border-thickness: 2.5px !important;
  --blockquote-color: #594f67 !important;
  --blur-background: color-mix(in srgb, #f8f3f2 65%, transparent) linear-gradient(#f8f3f2, color-mix(in srgb, #f8f3f2 65%, transparent)) !important;
  --bodyFont: "Arima", cursive !important;
  --border-radius-average: 11px !important;
  --callout-bug: 220, 118, 167;
  --callout-default: 136, 198, 227;
  --callout-error: 225, 120, 132;
  --callout-example: 181, 132, 199;
  --callout-fail: 225, 120, 132;
  --callout-important: 111, 210, 194;
  --callout-info: 136, 198, 227;
  --callout-question: 241, 144, 112;
  --callout-radius: 8px;
  --callout-success: 117, 194, 151;
  --callout-summary: 111, 210, 194;
  --callout-tip: 111, 210, 194;
  --callout-todo: 136, 198, 227;
  --callout-warning: 241, 144, 112;
  --canvas-background: #f8f3f2 !important;
  --canvas-card-label-color: #a391a3 !important;
  --canvas-color-1: 225, 120, 132 !important;
  --canvas-color-2: 241, 144, 112 !important;
  --canvas-color-3: 255, 168, 46 !important;
  --canvas-color-4: 117, 194, 151 !important;
  --canvas-color-5: 111, 210, 194 !important;
  --canvas-color-6: 181, 132, 199 !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: #cec2c577 !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: #594f67 !important;
  --checkbox-border-color: #a391a3 !important;
  --checkbox-border-color-hover: #685a68 !important;
  --checkbox-color: hsl(322, 30.3%, 69.875%) !important;
  --checkbox-color-hover: hsl(320, 30.6%, 74.75%) !important;
  --checkbox-marker-color: #f8f3f2 !important;
  --checkbox-radius: 8px !important;
  --checklist-done-color: #685a68 !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #f0e9e4 !important;
  --code-border-color: #cec2c577 !important;
  --code-comment: #a391a3 !important;
  --code-function: #dcb46f !important;
  --code-important: #f19070 !important;
  --code-keyword: #dc76a7 !important;
  --code-normal: #594f67 !important;
  --code-operator: #e17884 !important;
  --code-property: #6fd2c2 !important;
  --code-punctuation: #685a68 !important;
  --code-radius: 8px !important;
  --code-string: #75c297 !important;
  --code-tag: #e17884 !important;
  --code-value: #b584c7 !important;
  --codeFont: "Arima", cursive !important;
  --collapse-icon-color: #a391a3 !important;
  --collapse-icon-color-collapsed: hsl(323, 30%, 65%) !important;
  --color-accent: hsl(323, 30%, 65%) !important;
  --color-accent-1: hsl(322, 30.3%, 69.875%) !important;
  --color-accent-2: hsl(320, 30.6%, 74.75%) !important;
  --color-accent-hsl: 323, 30%, 65% !important;
  --color-base-00: #f8f3f2 !important;
  --color-base-05: #faf3f1 !important;
  --color-base-10: #f0e9e4 !important;
  --color-base-100: #594f67 !important;
  --color-base-20: #f4ebeb !important;
  --color-base-25: #d9c9ca !important;
  --color-base-30: #cec2c577 !important;
  --color-base-35: #b5a7ac !important;
  --color-base-40: #b6a4b2 !important;
  --color-base-50: #a391a3 !important;
  --color-base-60: #867786 !important;
  --color-base-70: #685a68 !important;
  --color-blue: #88c6e3 !important;
  --color-blue-rgb: 136, 198, 227 !important;
  --color-cyan: #6fd2c2 !important;
  --color-cyan-rgb: 111, 210, 194 !important;
  --color-green: #75c297 !important;
  --color-green-rgb: 117, 194, 151 !important;
  --color-orange: #f19070 !important;
  --color-orange-rgb: 241, 144, 112 !important;
  --color-pink: #dc76a7 !important;
  --color-pink-rgb: 220, 118, 167 !important;
  --color-purple: #b584c7 !important;
  --color-purple-rgb: 181, 132, 199 !important;
  --color-red: #e17884 !important;
  --color-red-rgb: 225, 120, 132 !important;
  --color-yellow: #dcb46f !important;
  --color-yellow-rgb: 255, 168, 46 !important;
  --dark: #594f67 !important;
  --darkgray: #594f67 !important;
  --divider-color: #cec2c577 !important;
  --divider-color-hover: hsl(322, 30.3%, 69.875%) !important;
  --divider-width: 0px !important;
  --dropdown-background: #f8f3f2 !important;
  --dropdown-background-hover: #f0e9e4 !important;
  --embed-block-shadow-hover: 0 0 0 1px #cec2c577, inset 0 0 0 1px #cec2c577 !important;
  --embed-border-start: 2px solid hsl(322, 30.3%, 69.875%) !important;
  --file-header-background: #f8f3f2 !important;
  --file-header-background-focused: #f8f3f2 !important;
  --file-header-font: "Arima", cursive !important;
  --flair-background: #f8f3f2 !important;
  --flair-color: #594f67 !important;
  --font-default: "Arima", cursive !important;
  --font-interface: "Arima", cursive !important;
  --font-mermaid: "Arima", cursive !important;
  --font-text: "Arima", cursive !important;
  --footnote-divider-color: #cec2c577 !important;
  --footnote-id-color: #685a68 !important;
  --footnote-id-color-no-occurrences: #a391a3 !important;
  --footnote-line-height: 1.7 !important;
  --footnote-radius: 8px !important;
  --graph-line: #b5a7ac !important;
  --graph-node: #685a68 !important;
  --graph-node-attachment: #dcb46f !important;
  --graph-node-focused: hsl(323, 30%, 65%) !important;
  --graph-node-tag: #75c297 !important;
  --graph-node-unresolved: #a391a3 !important;
  --graph-text: #594f67 !important;
  --gray: #685a68 !important;
  --h1-color: #594f67 !important;
  --h2-color: #594f67 !important;
  --h2-weight: 600 !important;
  --h3-color: #594f67 !important;
  --h3-weight: 600 !important;
  --h4-color: #594f67 !important;
  --h4-weight: 600 !important;
  --h5-color: #594f67 !important;
  --h5-line-height: 1.7 !important;
  --h5-weight: 600 !important;
  --h6-color: #594f67 !important;
  --h6-line-height: 1.7 !important;
  --h6-variant: small-caps !important;
  --headerFont: "Arima", cursive !important;
  --heading-formatting: #a391a3 !important;
  --highlight: hsl(
    323,
    30%,
    65%,
    0.2
  ) !important;
  --hr-color: #cec2c577 !important;
  --icon-color: #685a68 !important;
  --icon-color-active: hsl(323, 30%, 65%) !important;
  --icon-color-focused: #594f67 !important;
  --icon-color-hover: #685a68 !important;
  --inline-title-color: #594f67 !important;
  --input-date-separator: #a391a3 !important;
  --input-placeholder-color: #a391a3 !important;
  --interactive-accent: hsl(322, 30.3%, 69.875%) !important;
  --interactive-accent-hover: hsl(320, 30.6%, 74.75%) !important;
  --interactive-accent-hsl: 323, 30%, 65% !important;
  --interactive-hover: #f0e9e4 !important;
  --interactive-normal: #f8f3f2 !important;
  --light: #f8f3f2 !important;
  --lightgray: #f4ebeb !important;
  --line-height-normal: 1.7 !important;
  --line-style: solid !important;
  --link-color: hsl(323, 30%, 65%) !important;
  --link-color-hover: hsl(320, 30.6%, 74.75%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(323, 30%, 65%) !important;
  --link-external-color-hover: hsl(320, 30.6%, 74.75%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(323, 30%, 65%) !important;
  --link-unresolved-decoration-color: hsla(323, 30%, 65%, 0.3) !important;
  --list-marker-color: #a391a3 !important;
  --list-marker-color-collapsed: hsl(323, 30%, 65%) !important;
  --list-marker-color-hover: #685a68 !important;
  --menu-background: #f4ebeb !important;
  --menu-border-color: #b5a7ac !important;
  --menu-radius: 10px !important;
  --metadata-border-color: #cec2c577 !important;
  --metadata-divider-color: #cec2c577 !important;
  --metadata-input-font: "Arima", cursive !important;
  --metadata-input-text-color: #594f67 !important;
  --metadata-label-font: "Arima", cursive !important;
  --metadata-label-text-color: #685a68 !important;
  --metadata-label-text-color-hover: #685a68 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b6a4b2 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b5a7ac !important;
  --modal-background: #f8f3f2 !important;
  --modal-border-color: #b6a4b2 !important;
  --modal-radius: 12px !important;
  --nav-collapse-icon-color: #a391a3 !important;
  --nav-collapse-icon-color-collapsed: #a391a3 !important;
  --nav-heading-color: #594f67 !important;
  --nav-heading-color-collapsed: #a391a3 !important;
  --nav-heading-color-collapsed-hover: #685a68 !important;
  --nav-heading-color-hover: #594f67 !important;
  --nav-item-background-selected: hsla(323, 30%, 65%, 0.15) !important;
  --nav-item-color: #685a68 !important;
  --nav-item-color-active: #594f67 !important;
  --nav-item-color-highlighted: hsl(323, 30%, 65%) !important;
  --nav-item-color-hover: #594f67 !important;
  --nav-item-color-selected: #594f67 !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #a391a3 !important;
  --nav-tag-color-active: #685a68 !important;
  --nav-tag-color-hover: #685a68 !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #f8f3f2 !important;
  --pdf-page-background: #f8f3f2 !important;
  --pdf-sidebar-background: #f8f3f2 !important;
  --pill-border-color: #cec2c577 !important;
  --pill-border-color-hover: #b5a7ac !important;
  --pill-color: #685a68 !important;
  --pill-color-hover: #594f67 !important;
  --pill-color-remove: #a391a3 !important;
  --pill-color-remove-hover: hsl(323, 30%, 65%) !important;
  --prompt-background: #f8f3f2 !important;
  --prompt-border-color: #b6a4b2 !important;
  --prompt-width: 450px !important;
  --radius-l: 12px !important;
  --radius-m: 10px !important;
  --radius-s: 8px !important;
  --radius-xl: 14px !important;
  --raised-background: color-mix(in srgb, #f8f3f2 65%, transparent) linear-gradient(#f8f3f2, color-mix(in srgb, #f8f3f2 65%, transparent)) !important;
  --ribbon-background: #f4ebeb !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 12px !important;
  --search-clear-button-color: #685a68 !important;
  --search-icon-color: #685a68 !important;
  --search-result-background: #f8f3f2 !important;
  --secondary: hsl(323, 30%, 65%) !important;
  --setting-group-heading-color: #594f67 !important;
  --setting-items-background: #f0e9e4 !important;
  --setting-items-border-color: #cec2c577 !important;
  --setting-items-radius: 12px !important;
  --slider-thumb-border-color: #b5a7ac !important;
  --slider-track-background: #cec2c577 !important;
  --status-bar-background: #f4ebeb !important;
  --status-bar-border-color: #cec2c577 !important;
  --status-bar-radius: 10px 0 0 0 !important;
  --status-bar-text-color: #685a68 !important;
  --suggestion-background: #f8f3f2 !important;
  --sync-avatar-color-1: #e17884 !important;
  --sync-avatar-color-2: #f19070 !important;
  --sync-avatar-color-3: #dcb46f !important;
  --sync-avatar-color-4: #75c297 !important;
  --sync-avatar-color-5: #6fd2c2 !important;
  --sync-avatar-color-6: #88c6e3 !important;
  --sync-avatar-color-7: #b584c7 !important;
  --sync-avatar-color-8: #dc76a7 !important;
  --tab-background-active: #f8f3f2 !important;
  --tab-container-background: #f4ebeb !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-font-size: 0.84em !important;
  --tab-outline-color: #cec2c577 !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-background: #f4ebeb !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f4ebeb, transparent) !important;
  --tab-switcher-preview-radius: 14px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(323, 30%, 65%) !important;
  --tab-text-color: #a391a3 !important;
  --tab-text-color-active: #685a68 !important;
  --tab-text-color-focused: #685a68 !important;
  --tab-text-color-focused-active: #685a68 !important;
  --tab-text-color-focused-active-current: hsl(320, 30.6%, 74.75%) !important;
  --tab-text-color-focused-highlighted: hsl(323, 30%, 65%) !important;
  --tab-width: 240px !important;
  --table-add-button-border-color: #cec2c577 !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: #cec2c577 !important;
  --table-border-width: 0px !important;
  --table-column-first-border-width: 0px !important;
  --table-column-last-border-width: 0px !important;
  --table-drag-handle-background-active: hsl(322, 30.3%, 69.875%) !important;
  --table-drag-handle-color: #a391a3 !important;
  --table-header-border-color: #cec2c577 !important;
  --table-header-border-width: 0px !important;
  --table-header-color: #594f67 !important;
  --table-row-alt-background: #faf3f1 !important;
  --table-row-last-border-width: 0px !important;
  --table-selection: hsla(323, 30%, 65%, 0.1) !important;
  --table-selection-border-color: hsl(322, 30.3%, 69.875%) !important;
  --tag-background: hsla(323, 30%, 65%, 0.1) !important;
  --tag-background-hover: hsla(323, 30%, 65%, 0.2) !important;
  --tag-border-color: hsla(323, 30%, 65%, 0.15) !important;
  --tag-border-color-hover: hsla(323, 30%, 65%, 0.15) !important;
  --tag-color: hsl(323, 30%, 65%) !important;
  --tag-color-hover: hsl(323, 30%, 65%) !important;
  --tertiary: hsl(320, 30.6%, 74.75%) !important;
  --text-accent: hsl(323, 30%, 65%) !important;
  --text-accent-hover: hsl(320, 30.6%, 74.75%) !important;
  --text-error: #e17884 !important;
  --text-faint: #a391a3 !important;
  --text-highlight-bg: hsl(
    323,
    30%,
    65%,
    0.2
  ) !important;
  --text-muted: #685a68 !important;
  --text-normal: #594f67 !important;
  --text-selection: hsla(323, 30%, 65%, 0.2) !important;
  --text-success: #75c297 !important;
  --text-warning: #f19070 !important;
  --textHighlight: hsl(
    323,
    30%,
    65%,
    0.2
  ) !important;
  --titleFont: "Arima", cursive !important;
  --titlebar-background: #f4ebeb !important;
  --titlebar-background-focused: #faf3f1 !important;
  --titlebar-border-color: #cec2c577 !important;
  --titlebar-text-color: #685a68 !important;
  --titlebar-text-color-focused: #594f67 !important;
  --vault-profile-color: #594f67 !important;
  --vault-profile-color-hover: #594f67 !important;
  --workspace-background: #f4ebeb !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 235, 235);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(250, 243, 241);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(206, 194, 197, 0.467);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(248, 243, 242);
  border-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(206, 194, 197, 0.467);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(104, 90, 104);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(104, 90, 104);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(193, 139, 172, 0.1);
  color: rgb(193, 139, 172);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(104, 90, 104);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 235, 235);
  border-left-color: rgba(206, 194, 197, 0.467);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 243, 242);
  color: rgb(89, 79, 103);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(193, 139, 172, 0.2);
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body del {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(89, 79, 103);
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(163, 145, 163);
  border-radius: 8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(201, 155, 184);
  border-color: rgb(201, 155, 184);
}

html[saved-theme="light"] body p {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
  outline: rgb(104, 90, 104) none 0px;
  text-decoration-color: rgb(104, 90, 104);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(193, 139, 172);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration-color: rgb(193, 139, 172);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(193, 139, 172);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration-color: rgb(193, 139, 172);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(193, 139, 172);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration: rgba(193, 139, 172, 0.3);
  text-decoration-color: rgba(193, 139, 172, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body dt {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ol > li {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ul > li {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(163, 145, 163);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(250, 243, 241);
  font-family: "??", "??", Arima, cursive;
  font-style: italic;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body table {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  width: 662px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(250, 243, 241);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-width: 0px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-left-width: 0px;
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-width: 0px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-width: 0px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-left-width: 0px;
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-width: 0px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(210, 171, 197);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(210, 171, 197);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 180, 111);
  border-left-color: rgb(220, 180, 111);
  border-right-color: rgb(220, 180, 111);
  border-top-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body figcaption {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(89, 79, 103);
  border-radius: 10px;
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(201, 155, 184);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(163, 145, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(163, 145, 163);
  border-right-color: rgb(163, 145, 163);
  border-top-color: rgb(163, 145, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background-color: rgba(111, 210, 194, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 220, 118, 167;
  background-color: rgba(220, 118, 167, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background-color: rgba(181, 132, 199, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 225, 120, 132;
  background-color: rgba(225, 120, 132, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 117, 194, 151;
  background-color: rgba(117, 194, 151, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background-color: rgba(111, 210, 194, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 136, 198, 227;
  background-color: rgba(136, 198, 227, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 241, 144, 112;
  background-color: rgba(241, 144, 112, 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgb(182, 164, 178);
  border-left-color: rgb(182, 164, 178);
  border-right-color: rgb(182, 164, 178);
  border-top-color: rgb(182, 164, 178);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(182, 164, 178);
  border-left-color: rgb(182, 164, 178);
  border-right-color: rgb(182, 164, 178);
  border-top-color: rgb(182, 164, 178);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 235, 235);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(193, 139, 172, 0.1);
  border-bottom-color: rgba(193, 139, 172, 0.15);
  border-left-color: rgba(193, 139, 172, 0.15);
  border-right-color: rgba(193, 139, 172, 0.15);
  border-top-color: rgba(193, 139, 172, 0.15);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(193, 139, 172);
}

html[saved-theme="light"] body h1 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body h2 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body h3 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body h4 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body h5 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body h6 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(248, 243, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 243, 242);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(89, 79, 103);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(104, 90, 104);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 235, 235);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 10px;
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(104, 90, 104);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(104, 90, 104);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(104, 90, 104);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(104, 90, 104);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(104, 90, 104);
  stroke: rgb(104, 90, 104);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(163, 145, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(163, 145, 163);
  border-right-color: rgb(163, 145, 163);
  border-top-color: rgb(163, 145, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(163, 145, 163);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(163, 145, 163);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  color: rgb(104, 90, 104);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(104, 90, 104);
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  color: rgb(104, 90, 104);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 235, 235);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body abbr {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(104, 90, 104);
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body sub {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body summary {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body sup {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(193, 139, 172, 0.1);
  border-bottom-color: rgba(193, 139, 172, 0.15);
  border-left-color: rgba(193, 139, 172, 0.15);
  border-right-color: rgba(193, 139, 172, 0.15);
  border-top-color: rgba(193, 139, 172, 0.15);
  color: rgb(193, 139, 172);
}`,
  },
};
