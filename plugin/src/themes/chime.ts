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
  --shiki-active-tab-border-color: #7f83a1 !important;
  --shiki-code-background: #413b4e !important;
  --shiki-code-block-border-radius: 8px !important;
  --shiki-code-comment: rgb(125, 127, 149) !important;
  --shiki-code-function: #75c297 !important;
  --shiki-code-important: #f19070 !important;
  --shiki-code-keyword: #dc76a7 !important;
  --shiki-code-normal: #7f83a1 !important;
  --shiki-code-property: #6fd2c2 !important;
  --shiki-code-punctuation: #7f83a1 !important;
  --shiki-code-string: #dcb46f !important;
  --shiki-code-value: #b584c7 !important;
  --shiki-gutter-border-color: #4e4560 !important;
  --shiki-gutter-text-color: rgb(125, 127, 149) !important;
  --shiki-gutter-text-color-highlight: #7f83a1 !important;
  --shiki-highlight-green: rgba(117, 194, 151, 0.5) !important;
  --shiki-highlight-green-background: rgba(117, 194, 151, 0.1) !important;
  --shiki-highlight-neutral: #7f83a1 !important;
  --shiki-highlight-red: rgba(225, 120, 132, 0.5) !important;
  --shiki-highlight-red-background: rgba(225, 120, 132, 0.1) !important;
  --shiki-terminal-dots-color: rgb(125, 127, 149) !important;
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

html[saved-theme="dark"] body html {
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body a.internal-link.broken {
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

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(65, 59, 78);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(127, 131, 161);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(127, 131, 161);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(160, 167, 196);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 51, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 51, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(241, 144, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(125, 127, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 210, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 132, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background: rgba(111, 210, 194, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(111, 210, 194, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 220, 118, 167;
  background: rgba(220, 118, 167, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(220, 118, 167, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 241, 144, 112;
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(241, 144, 112, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background: rgba(181, 132, 199, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(181, 132, 199, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 225, 120, 132;
  background: rgba(225, 120, 132, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(225, 120, 132, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 136, 198, 227;
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 198, 227, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 136, 198, 227;
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 198, 227, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 241, 144, 112;
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(241, 144, 112, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(158, 158, 158, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 158, 158, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 117, 194, 151;
  background: rgba(117, 194, 151, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(117, 194, 151, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background: rgba(111, 210, 194, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(111, 210, 194, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 136, 198, 227;
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 198, 227, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 241, 144, 112;
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(241, 144, 112, 0.17);
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

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(160, 167, 196);
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

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h1 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(160, 167, 196);
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html[saved-theme="dark"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(47, 40, 55);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(78, 69, 96);
  color: rgb(160, 167, 196);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(59, 51, 71);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(160, 167, 196);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
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
  --shiki-active-tab-border-color: #685a68 !important;
  --shiki-code-background: #f0e9e4 !important;
  --shiki-code-block-border-radius: 8px !important;
  --shiki-code-comment: #a391a3 !important;
  --shiki-code-function: #75c297 !important;
  --shiki-code-important: #f19070 !important;
  --shiki-code-keyword: #dc76a7 !important;
  --shiki-code-normal: #685a68 !important;
  --shiki-code-property: #6fd2c2 !important;
  --shiki-code-punctuation: #685a68 !important;
  --shiki-code-string: #dcb46f !important;
  --shiki-code-value: #b584c7 !important;
  --shiki-gutter-border-color: #cec2c577 !important;
  --shiki-gutter-text-color: #a391a3 !important;
  --shiki-gutter-text-color-highlight: #685a68 !important;
  --shiki-highlight-green: rgba(117, 194, 151, 0.5) !important;
  --shiki-highlight-green-background: rgba(117, 194, 151, 0.1) !important;
  --shiki-highlight-neutral: #685a68 !important;
  --shiki-highlight-red: rgba(225, 120, 132, 0.5) !important;
  --shiki-highlight-red-background: rgba(225, 120, 132, 0.1) !important;
  --shiki-terminal-dots-color: #a391a3 !important;
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

html[saved-theme="light"] body html {
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(193, 139, 172);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration-color: rgb(193, 139, 172);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(193, 139, 172);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration-color: rgb(193, 139, 172);
}

html[saved-theme="light"] body a.internal-link.broken {
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

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(240, 233, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body figcaption {
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(104, 90, 104);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(104, 90, 104);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(89, 79, 103);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 243, 242);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 243, 242);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(241, 144, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 145, 163);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 210, 194);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 132, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 111, 210, 194;
  background: rgba(111, 210, 194, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(111, 210, 194, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 220, 118, 167;
  background: rgba(220, 118, 167, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(220, 118, 167, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 241, 144, 112;
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(241, 144, 112, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 181, 132, 199;
  background: rgba(181, 132, 199, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(181, 132, 199, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 225, 120, 132;
  background: rgba(225, 120, 132, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(225, 120, 132, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 136, 198, 227;
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 198, 227, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 136, 198, 227;
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 198, 227, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 241, 144, 112;
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(241, 144, 112, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(158, 158, 158, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(158, 158, 158, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 117, 194, 151;
  background: rgba(117, 194, 151, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(117, 194, 151, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 111, 210, 194;
  background: rgba(111, 210, 194, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(111, 210, 194, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 136, 198, 227;
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 198, 227, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 241, 144, 112;
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(241, 144, 112, 0.17);
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

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(89, 79, 103);
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

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(193, 139, 172, 0.1);
  border-bottom-color: rgba(193, 139, 172, 0.15);
  border-left-color: rgba(193, 139, 172, 0.15);
  border-right-color: rgba(193, 139, 172, 0.15);
  border-top-color: rgba(193, 139, 172, 0.15);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(193, 139, 172);
}

html[saved-theme="light"] body h1 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(89, 79, 103);
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
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
    canvas: `html[saved-theme="light"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(250, 243, 241);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(206, 194, 197, 0.467);
  color: rgb(89, 79, 103);
}`,
    properties: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 243, 242);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(89, 79, 103);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
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
